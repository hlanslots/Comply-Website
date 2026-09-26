#!/usr/bin/env bash
set -euo pipefail

if [[ -n "$(git status --porcelain)" ]]; then
  echo '{"status":"failed","reason":"checkout is not clean"}'
  exit 1
fi

application_sha="${APPLICATION_SHA:-$(git rev-parse HEAD)}"
deployment_output="$(vercel deploy --yes --force --format=json \
  --meta "applicationSha=${application_sha}" \
  --meta "releaseTarget=preview" 2>&1)"

node --input-type=module - "$deployment_output" "$application_sha" <<'NODE'
const output = process.argv[2];
const applicationSha = process.argv[3];
const url = output.match(/https:\/\/[^\s]+\.vercel\.app/)?.[0];
if (!url) throw new Error("Vercel did not return a deployment URL");
console.log(JSON.stringify({
  status: "deployed",
  applicationSha,
  previewUrl: url.startsWith("http") ? url : `https://${url}`,
  previewArtifactId: null,
  provider: "vercel"
}));
NODE
