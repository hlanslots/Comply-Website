#!/usr/bin/env bash
set -euo pipefail

if [[ -n "$(git status --porcelain)" ]]; then
  echo '{"status":"failed","reason":"checkout is not clean"}'
  exit 1
fi

application_sha="${APPLICATION_SHA:-$(git rev-parse HEAD)}"
deployment_json="$(vercel deploy --yes --force --format=json \
  --meta "applicationSha=${application_sha}" \
  --meta "releaseTarget=preview")"

node --input-type=module - "$deployment_json" "$application_sha" <<'NODE'
const deployment = JSON.parse(process.argv[2]);
const applicationSha = process.argv[3];
const url = deployment.url ?? deployment.inspectorUrl;
if (!url) throw new Error("Vercel did not return a deployment URL");
console.log(JSON.stringify({
  status: "deployed",
  applicationSha,
  previewUrl: url.startsWith("http") ? url : `https://${url}`,
  previewArtifactId: deployment.id ?? deployment.uid ?? null,
  provider: "vercel"
}));
NODE
