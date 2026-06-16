# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies and browsers
npm install
npx playwright install --with-deps

# Run all tests
npm test                          # headless, all browsers
npm run test:headed               # with visible browser
npx playwright test --grep @smoke # filter by tag
npx playwright test --project=chromium  # single browser

# Type-check without building (run after generating automation)
npx tsc --noEmit

# View HTML report after a test run
npm run test:report

# Skill scripts (require .env to be configured)
npm run fetch:tasks               # pull tasks from Zoho Projects
npm run report:excel              # generate Excel from test-case/results JSON
npm run report:bug                # file bugs in Zoho from results JSON
```

A single spec file: `npx playwright test tests/e2e/<module>/<file>.spec.ts`

## Architecture

This repo is a **VS Code Copilot agent pipeline** for AI-driven QA of the SIM ERP staging environment. It is not a traditional app — the "code" is a mix of agent definitions, skill scripts, and generated Playwright tests.

### Pipeline flow

```
Zoho Tasks → Requirement Analyzer → Test Case Generator → Automation Generator → Playwright Runner → Bug Reporter
```

Or from a manual feature description (skip Zoho fetch) — the orchestrator handles both paths.

### Key directories

- `.github/agents/` — five `.agent.md` files that define VS Code Copilot agents (frontmatter: `name`, `tools`, `model`, `argument-hint`). These are the "workers" in the pipeline.
- `.github/skills/` — four skills (`zoho-tasks`, `excel-reporter`, `playwright-runner`, `zoho-bug-report`), each with a `SKILL.md` describing its contract and a `scripts/` subfolder with the TypeScript implementation.
- `.github/instructions/qa-conventions.instructions.md` — auto-loaded for `tests/**/*.ts`; defines naming, selectors, assertion patterns, forbidden practices.
- `tests/e2e/` — generated Playwright specs, grouped by module and category.
- `tests/page-objects/` — generated page object classes, one per module.
- `tests/fixtures/` — `auth.ts` (Playwright `storageState` setup) and `data/` (CSV/JSON test data).
- `reports/test-cases/` — JSON + Excel outputs from the test-case generator (`.xlsx` gitignored).
- `reports/results/` — JSON + Excel outputs from Playwright runs (`.xlsx` gitignored).

### Agent responsibilities

| Agent | Does | Does NOT |
|---|---|---|
| `@qa-orchestrator` | Coordinates all other agents; gates steps; produces final report | Any actual work |
| `@requirement-analyzer` | Parses Zoho task descriptions into structured requirement JSON | Write tests |
| `@test-case-generator` | Produces `TC-<MODULE>-<NNN>` test cases in all categories; exports to Excel | Write Playwright code |
| `@automation-generator` | Writes page objects and specs under `tests/`; runs `tsc --noEmit` | Execute tests |
| `@bug-reporter` | Creates Zoho bugs from `results.json` failures | Run tests |

### Skill contracts

Each skill's `SKILL.md` defines its input parameters, output format, and the fallback CLI command to run if the MCP server is unavailable. The skills are the preferred entry points; direct script invocation via `npm run` is the fallback.

### Zoho MCP server

Configured in `.vscode/mcp.json` (VS Code) and `.mcp.json` (Claude Code CLI). The `zoho-tasks` skill prefers `zoho-projects/fetch_tasks` MCP tool when available; otherwise falls back to `npm run fetch:tasks`.

## Test conventions (summary — full rules in `.github/instructions/qa-conventions.instructions.md`)

- **Test IDs**: `TC-<MODULE_SHORT>-<NNN>` — module codes: `CUST`, `INV`, `SALES`, `PUR`, `AUTH`
- **Spec location**: `tests/e2e/<module>/<category>.spec.ts`
- **Page objects**: `tests/page-objects/<module>.page.ts`, class `<Module>Page`
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

`strict: true`, `target: ES2022`, `module: commonjs`. Both `tests/**/*.ts` and `.github/skills/**/scripts/**/*.ts` are compiled. Always run `npx tsc --noEmit` after generating or editing automation code.
