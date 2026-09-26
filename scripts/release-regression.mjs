import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const checks = [
  {
    name: "public-route-presence",
    files: [
      "src/app/page.tsx",
      "src/app/services/page.tsx",
      "src/app/platform/page.tsx",
      "src/app/contact/page.tsx",
      "src/app/resources/page.tsx",
    ],
  },
  {
    name: "contact-delivery-handler",
    files: ["src/app/api/contact/route.ts", "src/components/marketing/contact-form.tsx"],
  },
  {
    name: "existing-compliance-story",
    files: ["src/lib/site-data.ts", "src/components/marketing/visuals.tsx"],
  },
];

const results = checks.map((check) => {
  const missing = check.files.filter((file) => {
    try {
      readFileSync(resolve(root, file));
      return false;
    } catch {
      return true;
    }
  });

  return {
    name: check.name,
    status: missing.length === 0 ? "passed" : "failed",
    files: check.files,
    missing,
  };
});

const status = results.every((result) => result.status === "passed") ? "passed" : "failed";
const artifact = {
  name: "critical-user-flows",
  status,
  applicationSha: process.env.APPLICATION_SHA ?? "local",
  checks: results,
};

const outputPath = resolve(root, "artifacts/release/critical-user-flows.json");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(artifact, null, 2)}\n`);
console.log(JSON.stringify({ ...artifact, artifact: "artifacts/release/critical-user-flows.json" }, null, 2));

if (status !== "passed") process.exitCode = 1;
