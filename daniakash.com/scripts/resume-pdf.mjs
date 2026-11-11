/**
 * Renders /resume/ from a running dev or preview server into public/dani-akash-resume.pdf.
 *
 * Usage: start `pnpm dev` (or `pnpm preview`), then `pnpm resume:pdf`.
 * Env: RESUME_URL (default http://localhost:4321/resume/), SITE_ORIGIN (default
 * https://daniakash.com, for links in the PDF), CHROME_PATH (auto-detected).
 * Needs Google Chrome or Chromium, plus exiftool for the PDF metadata.
 */
import { execFileSync, spawn } from "node:child_process";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const url = process.env.RESUME_URL ?? "http://localhost:4321/resume/";
const siteOrigin = process.env.SITE_ORIGIN ?? "https://daniakash.com";
const out = fileURLToPath(
  new URL("../public/dani-akash-resume.pdf", import.meta.url),
);
const chromePaths = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];
const chrome = chromePaths.find((path) => path && existsSync(path));
if (!chrome) throw new Error("Chrome not found; set CHROME_PATH.");

const log = (line) => process.stdout.write(`${line}\n`);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const profile = mkdtempSync(join(tmpdir(), "resume-pdf-"));
const browser = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

/** Chrome writes its chosen debugging port to DevToolsActivePort in the profile. */
async function debuggingPort() {
  const file = join(profile, "DevToolsActivePort");
  for (let i = 0; i < 100; i++) {
    if (existsSync(file)) return readFileSync(file, "utf8").split("\n")[0];
    await sleep(100);
  }
  throw new Error("Chrome did not start.");
}

/** A minimal Chrome DevTools Protocol session over Node's built-in WebSocket. */
async function connect(port) {
  const targets = await (
    await fetch(`http://127.0.0.1:${port}/json/list`)
  ).json();
  const page = targets.find((target) => target.type === "page");
  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });
  let nextId = 0;
  const pending = new Map();
  const listeners = new Map();
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (message.id !== undefined) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    } else {
      listeners.get(message.method)?.();
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++nextId;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  const once = (method) =>
    new Promise((resolve) => listeners.set(method, resolve));
  return { send, once, close: () => socket.close() };
}

try {
  const cdp = await connect(await debuggingPort());
  await cdp.send("Page.enable");
  // The page picks its theme from prefers-color-scheme; the PDF is always light.
  await cdp.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: "light" }],
  });
  const loaded = cdp.once("Page.loadEventFired");
  await cdp.send("Page.navigate", { url });
  await loaded;
  // Links in the PDF point at the live site, not the local server it was rendered from.
  await cdp.send("Runtime.evaluate", {
    expression: `document.fonts.ready.then(() => {
      document.title = "Dani Akash Resume";
      for (const a of document.querySelectorAll('a[href^="/"]')) {
        a.href = new URL(a.getAttribute("href"), ${JSON.stringify(siteOrigin)}).href;
      }
    })`,
    awaitPromise: true,
  });
  const { data } = await cdp.send("Page.printToPDF", {
    preferCSSPageSize: true,
    printBackground: false,
    displayHeaderFooter: false,
    generateTaggedPDF: true,
    generateDocumentOutline: true,
  });
  writeFileSync(out, Buffer.from(data, "base64"));
  cdp.close();
} finally {
  browser.kill();
  await sleep(300);
  rmSync(profile, { recursive: true, force: true });
}

execFileSync("exiftool", [
  "-q",
  "-overwrite_original",
  "-Title=Dani Akash Resume",
  "-Author=Dani Akash",
  "-Subject=Resume of Dani Akash, AI Engineer",
  "-Keywords=Dani Akash, Resume, AI Engineer, Software Engineer, TypeScript, React, React Native",
  "-Creator=daniakash.com",
  out,
]);
log(`Wrote ${out}`);
