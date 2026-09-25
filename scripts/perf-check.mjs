import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const valueFor = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] ?? fallback : fallback;
};

const name = valueFor("--name", "public-route-load");
const path = valueFor("--path", "/");
const baseUrl = (process.env.RELEASE_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const url = `${baseUrl}${path}`;
const thresholdMs = Number(process.env.RELEASE_PERF_THRESHOLD_MS ?? 3000);
const started = performance.now();
let status = "passed";
let error = null;

try {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    status = "failed";
    error = `HTTP ${response.status}`;
  } else {
    await response.arrayBuffer();
  }
} catch (caught) {
  status = "failed";
  error = caught instanceof Error ? caught.message : String(caught);
}

const durationMs = Math.round(performance.now() - started);
if (durationMs > thresholdMs) status = "failed";
const artifact = { name, status, durationMs, thresholdMs, url, ...(error ? { error } : {}) };
const outputPath = resolve(process.cwd(), `artifacts/performance/${name}.json`);
mkdirSync(resolve(process.cwd(), "artifacts/performance"), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify({ ...artifact, artifact: `artifacts/performance/${name}.json` }, null, 2)}\n`);
console.log(JSON.stringify({ ...artifact, artifact: `artifacts/performance/${name}.json` }, null, 2));

if (status !== "passed") process.exitCode = 1;
