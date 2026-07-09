---
name: playwright-runner
description: 'Run Playwright tests and collect results, screenshots, videos, and traces. Use when: executing generated E2E tests, smoke checks, regression runs. Produces JSON results consumable by excel-reporter and bug-reporter.'
argument-hint: 'Optional: project=chromium grep=<pattern> headed=true'
---

# Playwright Runner

Executes the Playwright test suite under `tests/e2e/` and produces structured artifacts that other agents can consume.

This skill is the execution primitive wrapped by the **Test Runner** agent (`.claude/agents/test-runner.agent.md`), which adds target/file selection, forced-retry-on-single-attempt, and downstream Excel/HTML report generation on top of it. Invoke `Test Runner` directly for interactive use; call this skill's script directly only for scripted/CI invocations that don't need those extras.

## When to Use
- After the automation-generator agent has produced/updated test files
- For smoke, regression, or targeted runs
- To regenerate JSON results before exporting to Excel or filing bugs

## Inputs
- `project` (optional): `chromium` | `firefox` | `webkit` (default: chromium)
- `grep` (optional): pattern to filter tests
- `headed` (optional): `true` to run with browser UI

## Procedure
1. Ensure dependencies are installed:
   ```bash
   npm install
   npx playwright install --with-deps
   ```
2. Execute via the wrapper script: [run-tests.sh](./scripts/run-tests.sh)
   ```bash
   ./.claude/skills/playwright-runner/scripts/run-tests.sh --project=chromium
   ```
3. Outputs land in:
   - `reports/results/results.json` (Playwright JSON reporter)
   - `reports/results/html/` (HTML report)
   - `test-results/` (per-test trace, video, screenshots)
4. Return the path to `results.json` so downstream skills can consume it.

## Failure Handling
- Exit code 0  → all passed.
- Exit code 1  → one or more failures; do NOT abort the pipeline — feed `results.json` into the bug-reporter agent.
- Network/setup errors → re-run once before reporting.

## Notes
- Browsers are installed on first run via `npx playwright install`.
- The base URL is read from `BASE_URL` in `.env`.
