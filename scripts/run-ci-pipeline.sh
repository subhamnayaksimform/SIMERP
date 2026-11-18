#!/usr/bin/env bash
# Standalone runner for the segregated CI/CD positive-flow suite (ci-cd-pipeline/).
# Deliberately independent of the main tests/e2e pipeline's report:html/report:qa steps — this
# suite's results are meant to stay segregated, not merged into the main pipeline dashboard.
# Usage: scripts/run-ci-pipeline.sh [--project=chromium] [--grep=pattern] [--headed]

set -uo pipefail

PROJECT="chromium"
GREP=""
HEADED=""

for arg in "$@"; do
  case "$arg" in
    --project=*) PROJECT="${arg#*=}" ;;
    --grep=*)    GREP="${arg#*=}" ;;
    --headed)    HEADED="--headed" ;;
    *) echo "Unknown arg: $arg" >&2 ;;
  esac
done

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f ".env" ]]; then
  echo "[ci-pipeline] ERROR: .env not found in $ROOT_DIR — copy .env.example and fill in credentials" >&2
  exit 1
fi

mkdir -p reports/results

CMD=(npx playwright test --config=ci-cd-pipeline/playwright.config.ts --project="$PROJECT")
[[ -n "$GREP" ]]   && CMD+=(--grep "$GREP")
[[ -n "$HEADED" ]] && CMD+=("$HEADED")

echo "[ci-pipeline] \$ ${CMD[*]}"
"${CMD[@]}"
EXIT=$?

echo "[ci-pipeline] exit=$EXIT"
echo "[ci-pipeline] html report:   $ROOT_DIR/reports/results/ci-pipeline-html/index.html"
echo "[ci-pipeline] json results:  $ROOT_DIR/reports/results/ci-pipeline-results.json"

exit $EXIT
