#!/usr/bin/env bash
set -euo pipefail

deployment="${1:?usage: ./release/wait-ready.sh <deployment-url-or-id>}"
inspect_json="$(vercel inspect "$deployment" --wait --timeout 3m --format=json)"
printf '%s\n' "$inspect_json"

url="$(node --input-type=module - "$inspect_json" <<'NODE'
const value = JSON.parse(process.argv[2]);
const url = value.url ?? value.inspectorUrl;
if (!url) process.exit(1);
process.stdout.write(url.startsWith("http") ? url : `https://${url}`);
NODE
)"

for path in / /services /platform /contact /resources /about; do
  curl --fail --silent --show-error --location --max-time 20 "${url}${path}" >/dev/null
done

echo '{"status":"ready","routes":"passed"}'
