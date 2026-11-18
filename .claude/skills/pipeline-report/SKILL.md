---
name: pipeline-report
description: 'Generate one consolidated HTML dashboard summarizing every QA pipeline stage — requirements, test cases, automation, execution results, and bugs filed. Use when: the full pipeline finishes, or whenever Playwright tests are run standalone. Produces .html files in reports/html/.'
argument-hint: '(no args — scans reports/requirements, reports/test-cases, reports/results, reports/results/bugs-*.json for the latest of each)'
---

# Pipeline Report — Consolidated HTML Dashboard

Aggregates the latest output of every pipeline stage into a single self-contained HTML file, so a reviewer can see the whole run (requirements → test cases → automation → execution → bugs) without opening five different JSON/Excel files.

## When to Use
- At the end of the full orchestrator run (`qa-orchestrator` step 9 / `npm run pipeline` Option 1)
- Whenever Playwright tests are executed, standalone or as part of the full pipeline (`Test Runner` agent / `npm run pipeline` Option 5)
- On demand, to get a current snapshot of pipeline state without re-running anything

This is in addition to — not a replacement for — Playwright's own per-run HTML report (`reports/results/html/`, opened via `npm run test:report`). This dashboard links out to that report rather than duplicating it.

## Invocation
```bash
npm run report:html
```
No arguments: the script always scans for the newest file in each `reports/**` subfolder. It never fails if a stage hasn't run yet — that section renders as "not yet generated" instead of blocking the report.

## Output
- `reports/html/pipeline-report-<YYYY-MM-DD_HH-MM>.html` — single self-contained file (inline CSS, no external requests), openable directly in a browser.

## Sections
| Section | Source | Shows when missing |
|---|---|---|
| Pipeline Summary | counts across all stages below | always renders |
| Requirements | newest `reports/requirements/requirements-*.json` | "No requirements analyzed yet" |
| Test Cases | newest `reports/test-cases/cases-*.json` + its Excel export | category/priority breakdown table |
| Automation | file count under `tests/e2e/**` and `tests/page-objects/**` (mtime-filtered to this run where possible) | "No automation generated yet" |
| Execution Results | `reports/results/results.json` | pass/fail/flaky counts, link to Playwright's own HTML report, link to results Excel |
| Bugs Filed | newest `reports/results/bugs-*.json` if present | "No bugs filed" |

## Report Validation
After every generation, the script verifies the output file exists and is non-empty. If generation fails (e.g. malformed upstream JSON), it logs the specific stage that failed and still writes a report for every stage that succeeded — a single stale/corrupt input must never blank the whole dashboard.

## Second report type: rich per-test QA report

A different, additional self-contained report produced by this same skill — one row per test from a single Playwright run, rather than a multi-stage pipeline summary. Not a replacement for the dashboard above; both are generated on the same trigger.

### When to Use
Same triggers as the consolidated dashboard: after every Playwright run (`run-tests.sh` calls both `report:html` and `report:qa`, in that order, always — pass or fail), or on demand.

### Invocation
```bash
npm run report:qa                              # defaults: --results=reports/results/results.json
npm run report:qa -- --results=<path>          # point at a different results.json
npm run report:qa -- --out=<path>              # override the output path
```

### Output
- `reports/html/qa-report-<YYYY-MM-DD_HH-MM>.html` — single self-contained file (inline CSS/JS, base64-embedded screenshots, no external requests).

### Contract
- **Source data**: `reports/results/results.json` (Playwright's JSON reporter, parsed via `scripts/lib/failure-triage.ts`'s `parsePlaywrightResults()`) joined against every `reports/test-cases/cases-*.json` on disk (keyed by test-case id; newer file's mtime wins on a collision). A Playwright result with no matching test-case id still renders — just with empty steps/preconditions/expected/tags rather than being dropped.
- **Per test**: id, title, category, status (`passed`/`flaky`/`failed`/`skipped`), priority, duration, retry count, preconditions, steps, expected result, tags, error message (ANSI codes stripped), and a `data:image/png;base64,...` screenshot on failure when the attachment still exists on disk.
- **Header**: title/description are computed from the common `tests/e2e/<module>/<sub-feature>/` path segments actually present in the run's results (single sub-feature → sub-feature name; single module, multiple sub-features → "`<Module>` Module"; otherwise a generic fallback) — never hardcoded.
- Never fails the calling script — invoked with the same "always run, warn don't fail" pattern as `report:html`.
