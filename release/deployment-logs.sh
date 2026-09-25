#!/usr/bin/env bash
set -euo pipefail

deployment="${1:?usage: ./release/deployment-logs.sh <deployment-url-or-id> [since]}"
since="${2:-30m}"
vercel logs "$deployment" --since "$since" --json --no-branch
