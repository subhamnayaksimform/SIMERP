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
