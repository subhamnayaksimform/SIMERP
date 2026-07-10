# SIM ERP — AI QA Flow

An AI-driven QA automation pipeline for SIM ERP, built on Claude Code / VS Code Copilot's agent framework. The pipeline turns a Zoho task (or a pasted requirement doc) into structured requirements, categorized test cases, Playwright automation, execution results, and — on failure — filed Zoho bugs. A persistent knowledge base of past bugs feeds edge cases back into every future run.

## Pipeline

```
[KB Sync] → Zoho Tasks / Doc → Requirements → Test Cases ──┬── Coverage Report
                 ↑ known edge cases          ↑ regression   ├── Review Page
                 injected from KB              triggers     └── Excel export
                                                                   │
                                                                   ▼
                                            Playwright Automation → Execution → Bug Reports (Zoho)
                                                                   │
                                                          Consolidated HTML Report
```

KB Sync is optional but recommended — it feeds historical bug patterns into every future run so recurring failure classes get covered automatically.

After **every** test-case generation (standalone Option 3, or Step 2 of the Full Pipeline), two reports are generated automatically, before automation is written:

- **Requirement coverage report** (`reports/coverage/coverage-*.html`) — matches each requirement unit (acceptance criteria, business rules, critical paths, edge cases, etc.) against the generated test cases' `requirementRef`, and flags anything uncovered.
- **Test case review page** (`reports/test-cases-review/review-*.html`) — a checklist-style HTML page for manually reviewing generated cases (grouped by category, searchable) and downloading a filtered copy to swap in before running Option 4.

## Agents

| Agent | Role | Does NOT |
|---|---|---|
| `@qa-orchestrator` | Coordinates all other agents; gates steps; produces the final report | Any actual work |
| `@knowledge-base-curator` | Fetches all Zoho bugs, extracts/deduplicates edge case patterns into `reports/knowledge-base/edge-cases-catalog.json` | Generate test cases |
| `@requirement-analyzer` | Parses Zoho task / document descriptions into structured requirements JSON; enriches with KB-derived edge cases | Write tests |
| `@test-case-generator` | Produces `TC-<MODULE>-<NNN>` test cases across all categories (including KB-derived regression cases); exports to Excel | Write Playwright code |
| `@automation-generator` | Writes page objects and specs under `tests/`; validates with `tsc` | Execute tests |
| `@test-runner` | Executes already-generated Playwright automation and collects results/artifacts | Generate or edit test code |
| `@bug-reporter` | Creates Zoho bugs from `results.json` failures | Run tests |

## Skills (slash commands)

| Skill | Purpose |
|---|---|
| `excel-reporter` | Export test cases / results to formatted Excel workbooks (`reports/excel/`) |
| `pipeline-report` | Generate one consolidated HTML dashboard across every pipeline stage (`reports/html/`) |
| `playwright-runner` | Run Playwright tests and collect results, screenshots, videos, traces |
| `playwright-e2e-generator` | Generate/run/auto-heal Playwright + TypeScript E2E tests using POM + fixtures + Playwright MCP |

Fetching Zoho tasks/issues and filing Zoho bugs are handled directly by `@requirement-analyzer` and `@bug-reporter` (and `scripts/pipeline.ts` Options 2/6) via the Zoho Projects MCP server (`.mcp.json`) — not standalone skills. Each skill's `SKILL.md` documents its own input/output contract and CLI fallback.

## Quick Start

```bash
npm install
npx playwright install --with-deps
cp .env.example .env   # fill in BASE_URL, Zoho OAuth2 creds, SIM ERP test accounts
```

AI backend: the pipeline prefers the **Claude Code CLI** (resolved from `PATH`, falling back to the VS Code extension's bundled binary) and falls back to the raw Anthropic SDK only if `ANTHROPIC_API_KEY` is set in `.env` and no CLI is found. When the CLI is used, `ANTHROPIC_API_KEY` is deliberately excluded from its environment so it uses your `claude.ai` login/connectors instead of API-key auth.

### Run the interactive pipeline (CLI)

```bash
npm run pipeline
```

Menu options:

| # | Option | Produces |
|---|---|---|
| 1 | Run Full Pipeline | Requirements → cases (+ coverage + review) → automation → run → bugs → consolidated HTML report |
| 2 | Fetch & Analyze | Zoho tasks/issues (by ID, filter, or previous fetch) or a pasted/uploaded doc → requirements JSON |
| 3 | Create Test Cases | requirements JSON → cases JSON + Excel + coverage report + review page |
| 4 | Generate Automation | cases JSON → Playwright specs + page objects (generation only, no execution) |
| 5 | Run Playwright Tests | selected spec/module → run → results Excel + HTML report |
| 6 | Report Bugs to Zoho | `results.json` → confirm each bug → file in Zoho |

### Run via VS Code Copilot / Claude Code chat

```
@qa-orchestrator Run the QA pipeline for sprint 24 high-priority tasks
@requirement-analyzer Analyze task #12345
@test-case-generator Generate tests for the Customer Master module
@automation-generator Convert these test cases to Playwright
@test-runner Run tests/e2e/employee
@bug-reporter Report bugs from last test run
```

### Standalone CLI scripts

```bash
npm test                          # headless, chromium only
npm run test:cross-browser        # chromium + firefox + webkit
npm run test:report               # open the last Playwright HTML report

npm run report:coverage -- <reqJsonOrTxt> <casesJson>   # requirement ↔ test case coverage
npm run review:cases -- <casesJson>                     # manual test-case review/select page
npm run report:excel  -- --mode=test-cases --input=<casesJson>
npm run report:html                                     # consolidated pipeline dashboard

npm run kb:update                 # sync knowledge base from all Zoho bugs (incremental)
npm run kb:update -- --dry-run    # preview counts, write nothing
npm run kb:update -- --full-rebuild

npm run lint:tests                # enforce qa-conventions.md against generated specs
npm run extract:selectors         # inventory selectors used across specs
```

## Folder Structure

```
.claude/
├── agents/                       # 7 .agent.md files — the pipeline's "workers"
├── skills/                       # skill folders, each with SKILL.md + scripts/
└── instructions/                 # qa-conventions.md — auto-loaded for tests/**/*.ts
tests/
├── e2e/                          # Generated Playwright specs, by module/sub-feature/category
├── page-objects/                 # Generated page object classes, one per sub-feature
├── fixtures/                     # auth.ts (storageState setup) + data/ (CSV/JSON test data)
└── playwright.config.ts
scripts/
├── pipeline.ts                   # interactive orchestrator (npm run pipeline)
├── coverage-report.ts            # requirement ↔ test case coverage HTML report
├── test-case-review.ts           # manual test-case review/select HTML page
├── update-knowledge-base.ts      # KB sync
├── lint-test-conventions.ts      # qa-conventions enforcement
└── extract-selector-inventory.ts
reports/
├── knowledge-base/               # persistent, committed — edge-cases-catalog.json, bugs-raw-*.json
├── raw/                          # transient — fetched Zoho tasks/issues, failed-* debug dumps
├── requirements/                 # transient — requirements-*.json
├── test-cases/                   # transient — cases-*.json
├── test-cases-review/            # transient — review-*.html (Option 3 output)
├── coverage/                     # transient — coverage-*.html (Option 3 output)
├── excel/                        # transient — test-cases-*.xlsx, results-*.xlsx
├── html/                         # transient — consolidated pipeline-report dashboards
└── results/                      # transient — results.json, Playwright HTML report, bugs-*.json
```

Everything under `reports/` is gitignored except `reports/knowledge-base/`, which grows with every KB sync and is the only persistent QA memory across pipeline runs.

## Test conventions (summary — full rules in `.claude/instructions/qa-conventions.md`)

- **Test IDs**: `TC-<CODE>-<NNN>` keyed on the SimERP nav sub-feature (e.g. `EMPDET`, `EMPSKL`, `TEAMDET`, `PROJDET`, `ADMROL`, `HELP`, `AUTH`).
- **Spec location**: `tests/e2e/<module>/<sub-feature>/<category>.spec.ts`
- **Page objects**: `tests/page-objects/<module>/<sub-feature>.page.ts`, class `<SubFeature>Page`
- **Selector priority**: `getByTestId` > `getByRole` > `getByLabel` > CSS. Never XPath by index.
- **Test tags**: `@smoke`, `@functional`, `@negative`, `@boundary`, `@a11y`, `@regression`
- **No** `page.waitForTimeout`, `test.only`, `test.skip`, or `page.evaluate` for assertions in committed code
