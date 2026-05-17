#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";

const HELP = `Usage:
  pnpm clawpr           Review this branch's changed features and post a comment on the open PR.
  pnpm clawpr --all     Review the whole repo and write a report under .clawpatch/reports/.
  pnpm clawpr --help    Show this help.
`;

const ROOT = process.cwd();

function logStatus(msg) {
  process.stderr.write(`clawpr: ${msg}\n`);
}

function runStreaming(cmd, args) {
  return new Promise((resolveP, rejectP) => {
    const child = spawn(cmd, args, { stdio: "inherit" });
    child.on("error", rejectP);
    child.on("exit", (code) => {
      if (code === 0) resolveP();
      else rejectP(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

function runCapture(cmd, args) {
  return new Promise((resolveP, rejectP) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", rejectP);
    child.on("exit", (code) => {
      if (code === 0) resolveP({ stdout, stderr });
      else rejectP(Object.assign(new Error(`${cmd} exited with code ${code}`), { stdout, stderr, code }));
    });
  });
}

async function currentBranch() {
  const { stdout } = await runCapture("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
  return stdout.trim();
}

async function openPr() {
  try {
    const { stdout } = await runCapture("gh", ["pr", "view", "--json", "number,baseRefName"]);
    return JSON.parse(stdout);
  } catch {
    return null;
  }
}

async function reviewPr() {
  const branch = await currentBranch();
  if (branch === "main" || branch === "master") {
    logStatus(`refusing to run on ${branch}`);
    process.exit(2);
  }

  const pr = await openPr();
  if (!pr) {
    logStatus("no open PR for this branch; run 'gh pr create' first or pass --all for a full-repo review");
    process.exit(2);
  }
  const base = `origin/${pr.baseRefName}`;

  logStatus(`reviewing changes vs ${base} (PR #${pr.number})`);
  await runStreaming("clawpatch", ["review", "--root", ROOT, "--since", base, "--jobs", "4"]);

  const reportPath = join(tmpdir(), `clawpr-report-${Date.now()}.md`);
  await runStreaming("clawpatch", ["report", "--root", ROOT, "--since", base, "-o", reportPath]);

  const reportStat = await stat(reportPath).catch(() => null);
  if (!reportStat || reportStat.size === 0) {
    logStatus("empty report; skipping PR comment");
    return;
  }

  const reportBody = await readFile(reportPath, "utf8");
  const header = `## 🩹 clawpatch review (auto)\n\n_Scoped to features changed vs \`${base}\`. Local Codex review — ignore findings that do not apply._\n\n`;
  const commentPath = join(tmpdir(), `clawpr-comment-${Date.now()}.md`);
  await writeFile(commentPath, header + reportBody, "utf8");

  await runStreaming("gh", ["pr", "comment", String(pr.number), "--body-file", commentPath]);
  logStatus(`posted review on PR #${pr.number}`);
}

async function reviewAll() {
  logStatus("running full-repo review (no PR scope)");
  await runStreaming("clawpatch", ["review", "--root", ROOT, "--jobs", "4"]);

  const reportDir = join(ROOT, ".clawpatch", "reports");
  await mkdir(reportDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").replace(/Z$/, "");
  const reportPath = join(reportDir, `full-${stamp}.md`);
  await runStreaming("clawpatch", ["report", "--root", ROOT, "-o", reportPath]);

  logStatus(`full report written to ${reportPath}`);
  process.stdout.write(`${reportPath}\n`);
}

async function main() {
  let parsed;
  try {
    parsed = parseArgs({
      options: {
        all: { type: "boolean", default: false },
        help: { type: "boolean", short: "h", default: false },
      },
      strict: true,
      allowPositionals: false,
    });
  } catch (err) {
    logStatus(err.message);
    process.stderr.write(HELP);
    process.exit(2);
  }

  if (parsed.values.help) {
    process.stdout.write(HELP);
    return;
  }

  if (parsed.values.all) {
    await reviewAll();
    return;
  }
  await reviewPr();
}

main().catch((err) => {
  logStatus(err.message || String(err));
  process.exit(1);
});
