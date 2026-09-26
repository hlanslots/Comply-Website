#!/usr/bin/env bash
set -euo pipefail

if ! command -v vercel >/dev/null 2>&1; then
  echo '{"status":"failed","reason":"vercel CLI is not installed"}'
  exit 1
fi

if [[ ! -f .vercel/project.json ]]; then
  echo '{"status":"failed","reason":"Vercel project is not linked in this checkout"}'
  exit 1
fi

if ! vercel whoami >/dev/null 2>&1; then
  echo '{"status":"failed","reason":"Vercel CLI is not authenticated"}'
  exit 1
fi

node --input-type=module <<'NODE'
import { readFileSync } from "node:fs";
const project = JSON.parse(readFileSync(".vercel/project.json", "utf8"));
console.log(JSON.stringify({
  status: "passed",
  provider: "vercel",
  projectIdPresent: Boolean(project.projectId),
  orgIdPresent: Boolean(project.orgId),
  productionDomain: "mycomply.ai"
}));
NODE
