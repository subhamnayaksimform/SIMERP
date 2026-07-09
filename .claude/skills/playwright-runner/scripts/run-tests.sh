#!/usr/bin/env bash
# Playwright runner wrapper for SIM ERP QA flow.
# Usage: run-tests.sh [--project=chromium] [--grep=pattern] [--headed]

set -uo pipefail

PROJECT="chromium"
GREP=""
HEADED=""
WORKERS=""

for arg in "$@"; do
  case "$arg" in
    --project=*) PROJECT="${arg#*=}" ;;
    --grep=*)    GREP="${arg#*=}" ;;
    --headed)    HEADED="--headed" ;;
    --workers=*) WORKERS="${arg#*=}" ;;
    *) echo "Unknown arg: $arg" >&2 ;;
  esac
done

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f ".env" ]]; then
  echo "[playwright-runner] ERROR: .env not found in $ROOT_DIR — copy .env.example and fill in credentials" >&2
  exit 1
fi

mkdir -p reports/results

CMD=(npx playwright test --config=tests/playwright.config.ts --project="$PROJECT")
[[ -n "$GREP" ]]    && CMD+=(--grep "$GREP")
[[ -n "$HEADED" ]]  && CMD+=("$HEADED")
[[ -n "$WORKERS" ]] && CMD+=(--workers "$WORKERS")

echo "[playwright-runner] $ ${CMD[*]}"
"${CMD[@]}"
EXIT=$?

echo "[playwright-runner] exit=$EXIT"
echo "[playwright-runner] results: $ROOT_DIR/reports/results/results.json"
exit $EXIT
