#!/usr/bin/env node
import { spawn } from "node:child_process";
import { readFile, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";

const HELP = `Usage:
  pnpm clawpr           Review this branch's changed features and post a comment on the open PR.
  pnpm clawpr --all     Review the whole repo and print the report path.
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

function runCapture(cmd, args, opts = {}) {
  return new Promise((resolveP, rejectP) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "pipe", opts.teeStderr ? "inherit" : "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d));
    if (child.stderr) child.stderr.on("data", (d) => (stderr += d));
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

function parseReportPath(reviewStdout) {
  const match = reviewStdout.match(/^report:\s*(.+)$/m);
  return match ? match[1].trim() : null;
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
  const { stdout } = await runCapture(
    "clawpatch",
    ["review", "--root", ROOT, "--since", base, "--jobs", "4"],
    { teeStderr: true },
  );
  process.stdout.write(stdout);

  const reportPath = parseReportPath(stdout);
  if (!reportPath) {
    logStatus("no features changed in this branch; nothing to post");
    return;
  }

  const reportStat = await stat(reportPath).catch(() => null);
  if (!reportStat || reportStat.size === 0) {
    logStatus("report file empty; skipping PR comment");
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
  const { stdout } = await runCapture(
    "clawpatch",
    ["review", "--root", ROOT, "--jobs", "4"],
    { teeStderr: true },
  );
  process.stdout.write(stdout);

  const reportPath = parseReportPath(stdout);
  if (!reportPath) {
    logStatus("no pending features to review");
    return;
  }
  logStatus(`full report written to ${reportPath}`);
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
