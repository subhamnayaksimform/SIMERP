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

# Skill scripts (require .env to be configured)
npm run fetch:tasks               # pull tasks from Zoho Projects
npm run report:excel              # generate Excel from test-case/results JSON
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
[KB Sync] → Zoho Tasks → Requirement Analyzer → Test Case Generator → Automation Generator → Playwright Runner → Bug Reporter
                              ↑ injects known edge cases from KB          ↑ injects regression triggers from KB
```

Or from a manual feature description (skip Zoho fetch) — the orchestrator handles both paths. KB Sync is optional but recommended: it feeds historical bug patterns into every future test run.

### Key directories

- `.claude/agents/` — six `.agent.md` files defining the pipeline agents (loaded by Claude Code CLI and VS Code Copilot). These are the "workers" in the pipeline.
- `.claude/skills/` — four skills (`zoho-tasks`, `excel-reporter`, `playwright-runner`, `zoho-bug-report`), each with a `SKILL.md` describing its contract and a `scripts/` subfolder with the TypeScript implementation.
- `.claude/instructions/qa-conventions.md` — auto-loaded for `tests/**/*.ts`; defines naming, selectors, assertion patterns, forbidden practices.
- `tests/e2e/` — generated Playwright specs, grouped by module, sub-feature, and category (e.g. `tests/e2e/employee/employee-details/smoke.spec.ts`).
- `tests/page-objects/` — generated page object classes, one per sub-feature, nested under its module folder (e.g. `tests/page-objects/employee/employee-details.page.ts`).
- `tests/fixtures/` — `auth.ts` (Playwright `storageState` setup, `storageState*.json` gitignored — generated locally by `tests/global-setup.ts`, never commit) and `data/` (CSV/JSON test data).
- `reports/raw/`, `reports/requirements/`, `reports/test-cases/`, `reports/results/`, `reports/excel/` — transient per-run pipeline outputs (gitignored entirely; regenerate by re-running the pipeline, don't commit).
- `reports/knowledge-base/` — the only `reports/` subfolder committed to git: persistent QA knowledge base, `edge-cases-catalog.json` (grows with every sync) and `bugs-raw-*.json` raw dumps from Zoho.

### Agent responsibilities

| Agent | Does | Does NOT |
|---|---|---|
| `@qa-orchestrator` | Coordinates all other agents; gates steps; produces final report | Any actual work |
| `@knowledge-base-curator` | Fetches all Zoho bugs, extracts/deduplicates edge case patterns, updates `reports/knowledge-base/edge-cases-catalog.json` | Generate test cases |
| `@requirement-analyzer` | Parses Zoho task descriptions into structured requirement JSON; enriches edge cases from knowledge base | Write tests |
| `@test-case-generator` | Produces `TC-<MODULE>-<NNN>` test cases in all categories (including KB-derived regression cases); exports to Excel | Write Playwright code |
| `@automation-generator` | Writes page objects and specs under `tests/`; runs `tsc --noEmit` | Execute tests |
| `@bug-reporter` | Creates Zoho bugs from `results.json` failures | Run tests |

### Skill contracts

Each skill's `SKILL.md` defines its input parameters, output format, and the fallback CLI command to run if the MCP server is unavailable. The skills are the preferred entry points; direct script invocation via `npm run` is the fallback.

### Zoho MCP server

Configured in `.vscode/mcp.json` (VS Code) and `.mcp.json` (Claude Code CLI). The `zoho-tasks` skill prefers `zoho-projects/fetch_tasks` MCP tool when available; otherwise falls back to `npm run fetch:tasks`.

## Test conventions (summary — full rules in `.claude/instructions/qa-conventions.md`)

- **Test IDs**: `TC-<CODE>-<NNN>` keyed on the SimERP nav sub-feature — e.g. `EMPDET` (Employee Details), `EMPSKL` (Skills), `EMPGOL` (Goals), `EMPALC` (Allocation Correction), `TEAMDET`/`TEAMWKU` (Team), `PROJDET`/`PROJTCH` (Projects), `DEPTSET`/`DEPTCMP` (Department), `ADMROL`/`ADMUSR`/`ADMCTR` (Admin), `HELP`, `AUTH`. Full table in `.claude/instructions/qa-conventions.md`.
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
