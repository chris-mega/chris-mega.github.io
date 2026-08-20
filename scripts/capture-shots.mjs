// Re-capture the portfolio screenshots in /public/shots.
//
//   npm run shots            # capture every site
//   npm run shots -- raven   # capture just the ones matching "raven"
//
// Uses the Chrome/Edge already installed on this machine — no Puppeteer, no
// screenshot API, nothing that has to run at build or request time.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const SITES = [
  { name: "quienpostula", url: "https://www.quienpostula.net/" },
  // NOTE: served over http because the https certificate is expired; switch
  // back to https once it's renewed.
  { name: "threebranchsupply", url: "http://threebranchsupply.com/" },
  { name: "elijahsraven", url: "https://www.elijahsraven.ca/" },
];

const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = CANDIDATES.find((path) => existsSync(path));
if (!browser) {
  console.error(
    "No Chrome/Edge found. Set CHROME_PATH to your browser executable.",
  );
  process.exit(1);
}

const filter = process.argv.slice(2);
const outDir = resolve("public/shots");
mkdirSync(outDir, { recursive: true });

for (const site of SITES) {
  if (filter.length && !filter.some((f) => site.name.includes(f))) continue;

  const out = resolve(outDir, `${site.name}.png`);
  console.log(`→ ${site.name}`);
  execFileSync(
    browser,
    [
      "--headless",
      "--disable-gpu",
      "--hide-scrollbars",
      "--ignore-certificate-errors",
      "--window-size=1440,900",
      "--virtual-time-budget=9000",
      `--screenshot=${out}`,
      site.url,
    ],
    { stdio: "ignore" },
  );
}

console.log("Done. Screenshots written to public/shots/");
