# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies and browsers
npm install
npx playwright install --with-deps

# Run all tests
npm test                          # headless, chromium only (default)
npm run test:headed               # chromium, with visible browser
npm run test:cross-browser        # headless, chromium + firefox + webkit (CI/nightly)
npx playwright test --grep @smoke # filter by tag
npx playwright test --project=firefox   # single non-default browser

# Type-check without building (run after generating automation)
npx tsc --noEmit

# View HTML report after a test run
npm run test:report

# QA Workspace web UI (PMs + devs) — background, auto-restarting, opens http://localhost:4321
npm run ui                        # start   · npm run ui:stop · npm run ui:status · npm run ui:restart
npm run ui:dev                    # foreground, for working on ui/ itself
npm run pipeline:headless -- --source=file|text|zoho|req|cases --input=…   # non-interactive pipeline (what the UI calls)

# QA Ops Dashboard — my Zoho work + system health, http://localhost:4400 (guide: docs/ops-dashboard-guide.md)
# Must work WITHOUT Claude: no model, no MCP, plain Zoho REST (scripts/lib/zoho-rest.ts) — enforced by ops:check-deps.
# Claude is optional and only starts from scripts/ops/ai.ts + scripts/ops/activity-run.ts (✨ re-test, testing pipeline, module update,
# bug rewrite, 💬 assistant). It never writes to Zoho: re-tests end in "needs approval", the assistant only proposes action buttons.
npm run ops                       # start · npm run ops:stop · npm run ops:status · npm run ops:dev
npm run ops:sync                  # pull tasks + bugs into reports/ops/data/ (cron runs this every 2h)
npm run ops:cron:install -- --yes # add the sync to the user crontab · ops:cron:status · ops:cron:uninstall
npm run ops:check-deps            # fail if any ops file imports Claude/AI/MCP code
npm run ops:watch                 # probe API/frontend once; a deploy (version change/restart/new build) starts a health run
npm run ops:health -- --env=dev [--suites=api,regression]   # API checks (tests/e2e/health, TC-APIH) + @regression suite

# Test-case lifecycle — keeps cases honest as modules and names change; nothing is ever deleted (guide: docs/test-case-lifecycle-guide.md)
npm run cases:stale               # review list: A likely outdated / B weaker signal / C no recent pass (report only, tokens: none)
npm run cases:check               # safety gate: fails if a case was lost or an ID was reused (also runs inside the pipeline)
npm run cases:snapshot            # record every case seen so far (additive; refuses reused IDs)
npm run cases:next-id -- EMPDET   # next free ID for a module code — always use this, never pick a number by hand
npm run cases:from-results -- reports/results/results.json   # passed tests → "verified today" (run after every test run)
npm run cases:retire -- TC-X-001 --reason="…" --replaced-by=TC-X-050   # or --feature-removed="…" when nothing replaces it
npm run cases:mark -- TC-X-001 --status=needs-review --reason="…"      # also: cases:reactivate, cases:registry-sync, cases:selftest

# Interactive pipeline (fetch/analyze → cases → generate → run → bugs, each step lets you pick input files)
npm run pipeline

# Skill scripts (require .env to be configured)
npm run fetch:tasks               # pull tasks from Zoho Projects
npm run report:excel              # generate Excel from test-case/results JSON
npm run report:md                 # render newest test-case JSON as Markdown (docs/test-cases/)
npm run report:md -- --all --index   # re-render every test-case JSON + rebuild the library index
npm run report:html               # generate consolidated HTML pipeline dashboard (reports/html/)
npm run report:qa                 # generate rich per-test QA report — donut chart, filters, expandable steps (reports/html/)
npm run report:bug                # file bugs in Zoho from results JSON

# QA Knowledge Base (requires .env Zoho credentials)
npm run kb:update                 # sync knowledge base from all Zoho bugs (incremental)
npm run kb:update -- --dry-run    # preview counts, write nothing
npm run kb:update -- --full-rebuild  # reprocess every bug from scratch
```

A single spec file: `npx playwright test tests/e2e/<module>/<sub-feature>/<file>.spec.ts`

## Architecture

This repo is a **VS Code Copilot agent pipeline** for AI-driven QA of the SIM ERP staging environment. It is not a traditional app — the "code" is a mix of agent definitions, skill scripts, and generated Playwright tests.

### Pipeline flow

```
[KB Sync] → Zoho Tasks → Requirement Analyzer → Test Case Generator → Automation Generator → Test Runner → Bug Reporter → Pipeline Report
                              ↑ injects known edge cases from KB          ↑ injects regression triggers from KB
                                                                          └──── Automation Generator ⇄ Test Runner can also be
                                                                                entered standalone, or chained as one "generate + run" step
```

Or from a manual feature description (skip Zoho fetch) — the orchestrator handles both paths. KB Sync is optional but recommended: it feeds historical bug patterns into every future test run.

`Automation Generator` (generate) and `Test Runner` (execute) are deliberately separate agents — one only writes code, the other only runs it — so "generate automation" and "run tests" are independently invocable steps, each with their own file/target selection prompt. The `QA Orchestrator` can still chain them: it defaults to generate-only (unchanged), but can optionally run generation straight into execution as one "generate + run together" step, and can also be entered standalone at either point — generate-and-run from an existing cases JSON, or run-only against already-generated tests — without walking the full fetch/requirements/case-gen flow first. This is purely an orchestration-level convenience; neither agent's own boundary changes. Every step that consumes a prior step's output (fetched tasks, requirements JSON, cases JSON, automation target, results JSON) presents the candidate files and lets the user pick one instead of silently defaulting to the newest. `Pipeline Report` aggregates all of it into one HTML dashboard, refreshed at the end of a full pipeline run and after every `Test Runner` execution.

### Key directories

- `.claude/agents/` — seven `.agent.md` files defining the pipeline agents (loaded by Claude Code CLI and VS Code Copilot). These are the "workers" in the pipeline.
- `.claude/skills/` — five skills (`zoho-tasks`, `excel-reporter`, `playwright-runner`, `pipeline-report`, `zoho-bug-report`), each with a `SKILL.md` describing its contract and a `scripts/` subfolder with the TypeScript implementation.
- `.claude/instructions/qa-conventions.md` — auto-loaded for `tests/**/*.ts`; defines naming, selectors, assertion patterns, forbidden practices.
- `docs/test-cases/` — the Markdown test case library, one document per `reports/test-cases/cases-*.json` plus a `README.md` index. Committed to git (unlike `reports/`) so test cases can be browsed and shown to stakeholders straight from the repo. Generated by `npm run report:md` (`scripts/generate-test-case-md.ts`) and refreshed automatically by the case-generation pipeline step — **generated output, never hand-edited**. The renderer is fully data-driven: modules, categories, summary tables and per-case fields all come from the JSON, so nothing about a module or a test case is hardcoded in the script.
- `tests/e2e/` — generated Playwright specs, grouped by module, sub-feature, and category (e.g. `tests/e2e/employee/employee-details/smoke.spec.ts`).
- `tests/page-objects/` — generated page object classes, one per sub-feature, nested under its module folder (e.g. `tests/page-objects/employee/employee-details.page.ts`).
- `tests/fixtures/` — `auth.ts` (Playwright `storageState` setup, `storageState*.json` gitignored — generated locally by `tests/global-setup.ts`, never commit) and `data/` (CSV/JSON test data).
- `reports/raw/`, `reports/requirements/`, `reports/test-cases/`, `reports/results/`, `reports/excel/`, `reports/html/` — transient per-run pipeline outputs (gitignored entirely; regenerate by re-running the pipeline, don't commit). `reports/html/pipeline-report-*.html` is the consolidated multi-stage dashboard (requirements → cases → automation → results → bugs) produced by the `pipeline-report` skill at the end of every full pipeline run and after every `Test Runner` execution. `reports/html/qa-report-*.html` is a different, additional report from the same skill — one self-contained page per Playwright run with a donut chart, status/category filter pills, search, sortable columns, and expandable rows showing each test's steps/preconditions/expected result/tags plus embedded failure screenshots — refreshed on the same trigger.
- `ui/` — the QA Workspace web UI (`npm run ui`, guide in `docs/qa-workspace-guide.md`). `launch.js` (background start/stop + crash restart), `server.ts` (localhost HTTP + setup check), `indexer.ts` (links files to modules from the `TC-<CODE>` ids / `moduleCode` fields inside them, falling back to `docs/test-cases/*.md` when `reports/` is absent — no module is hardcoded), `jobs.ts` + `job-runner.js` (allow-listed jobs run detached, so restarting the UI never kills a test run; a run stopped before any test ran restores the previous `results.json`), `public/` (plain HTML/JS/CSS). AI jobs call `scripts/pipeline-headless.ts`, which reuses `scripts/pipeline.ts` functions with `PIPELINE_HEADLESS=1` (prompts take safe defaults). History/attachments live in `reports/ui-history/` and `reports/ui-attachments/<CODE>/` (gitignored). Never restart the UI server without checking `npm run ui:status` for a running job.
- `reports/knowledge-base/case-lifecycle/` — committed, with three files: `modules.json` (module registry: code → current name, route, old names in `aliases`, app code paths used for change detection), `lifecycle.json` (ledger of retired / superseded / needs-review / verified cases, each with who, when, why), `case-ids.snapshot.json` (every case ever seen as id + content fingerprint, so a lost case or a reused ID is caught). A case is identified by **id + fingerprint of its title**, because IDs alone were reused for different cases (154 times before this existed). Driven by `scripts/cases-lifecycle.ts` + `scripts/lib/case-lifecycle.ts`; plain scripts, no Claude/MCP. `docs/test-cases/*.md` marks retired / needs-review cases from the ledger when rendered.
- `reports/knowledge-base/` — the only `reports/` subfolder committed to git: persistent QA knowledge base. `edge-cases-catalog.json` (grows with every sync) and `bugs-raw-*.json` raw dumps from Zoho are bug-derived, curated by `Knowledge Base Curator`. `modules/<module>/<sub-feature>.json` (e.g. `modules/employee/employee-details.json`) is the per-sub-feature slim file both curator (bug-derived) and `Requirement Analyzer` (requirement-derived — every analysis appends its new `edgeCases[]`/regression-derived `businessRules[]` here, module-wise) write into; both are additive-only, never removing existing entries.

### Agent responsibilities

| Agent | Does | Does NOT |
|---|---|---|
| `@qa-orchestrator` | Coordinates all other agents; gates steps; presents file selection at each step; produces final report | Any actual work |
| `@knowledge-base-curator` | Fetches all Zoho bugs, extracts/deduplicates edge case patterns, updates `reports/knowledge-base/edge-cases-catalog.json` | Generate test cases |
| `@requirement-analyzer` | Parses Zoho task descriptions into structured requirement JSON; enriches from knowledge base; persists new edge cases/business rules back into the same per-module KB file | Write tests |
| `@test-case-generator` | Produces `TC-<MODULE>-<NNN>` test cases in all categories, including KB-derived regression/integration cases — both passed through from requirement-analyzer and via its own direct read of the module's KB file + `cross-module.json` to widen cross-module coverage; exports to Excel | Write Playwright code |
| `@automation-generator` | Writes page objects and specs under `tests/`; runs `tsc --noEmit` | Execute tests |
| `@test-runner` | Executes generated automation against a user-selected target; exports results Excel + refreshes the consolidated HTML report | Write or edit test/page-object code |
| `@bug-reporter` | Creates Zoho bugs from `results.json` failures | Run tests |

### Skill contracts

Each skill's `SKILL.md` defines its input parameters, output format, and the fallback CLI command to run if the MCP server is unavailable. The skills are the preferred entry points; direct script invocation via `npm run` is the fallback. `pipeline-report` (`npm run report:html`) aggregates the latest output of every stage into one dashboard — it never blocks the pipeline if a stage hasn't run yet.

### Zoho MCP server

Configured in `.vscode/mcp.json` (VS Code) and `.mcp.json` (Claude Code CLI). The `zoho-tasks` skill prefers `zoho-projects/fetch_tasks` MCP tool when available; otherwise falls back to `npm run fetch:tasks`.

## Test conventions (summary — full rules in `.claude/instructions/qa-conventions.md`)

- **Test IDs**: `TC-<CODE>-<NNN>` keyed on the SimERP nav sub-feature — e.g. `EMPDET` (Employee Details), `EMPSKL` (Skills), `EMPGOL` (Goals), `EMPALC` (Allocation Correction), `EMPWLC` (Working Location), `TEAMDET`/`TEAMWKU` (Team), `PROJDET`/`PROJTCH` (Projects), `DEPTSET`/`DEPTCMP` (Department), `ADMROL`/`ADMUSR`/`ADMCTR` (Admin), `HELP`, `AUTH`. Full table in `.claude/instructions/qa-conventions.md`.
- **Spec location**: `tests/e2e/<module>/<sub-feature>/<category>.spec.ts`
- **Page objects**: `tests/page-objects/<module>/<sub-feature>.page.ts`, class `<SubFeature>Page`
- **Selector priority**: `getByTestId` > `getByRole` > `getByLabel` > CSS. Never XPath by index.
- **Test tags** in title: `@smoke`, `@functional`, `@negative`, `@boundary`, `@a11y`, `@regression`
- **No** `page.waitForTimeout`, `test.only`, `test.skip`, or `page.evaluate` for assertions in committed code

## Environment variables

Copy `.env.example` to `.env` and fill in:
- `BASE_URL` — SIM ERP staging URL
- `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN` — Zoho OAuth2
- `ZOHO_PORTAL_ID`, `ZOHO_PROJECT_ID`, `ZOHO_REGION`
- `SIMERP_USERNAME`, `SIMERP_PASSWORD` — test user credentials

## TypeScript

`strict: true`, `target: ES2022`, `module: commonjs`. Both `tests/**/*.ts` and `.claude/skills/**/scripts/**/*.ts` are compiled. Always run `npx tsc --noEmit` after generating or editing automation code.
