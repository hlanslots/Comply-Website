#!/usr/bin/env bash
set -euo pipefail

deployment="${1:?usage: ./release/inspect-deployment.sh <deployment-url-or-id>}"
vercel inspect "$deployment" --format=json
