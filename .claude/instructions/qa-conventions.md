---
description: 'Use when: writing, reviewing, or generating test cases and Playwright automation for SIM ERP. Defines naming, selector strategy, assertion patterns, page object conventions, and test data rules. Auto-loaded for files in tests/.'
applyTo: 'tests/**/*.ts'
---

# SIM ERP QA Conventions

## Naming
- Test IDs: `TC-<CODE>-<NNN>` (e.g. `TC-EMPDET-001`, `TC-TEAMWKU-014`) — `<CODE>` is the **sub-feature** code, not the top-level module, so numbering never collides across sub-features of the same module.
- SIM ERP navigation → module/sub-feature/code map (mirrors the app's own nav tree):

| Top-level module | Folder | Sub-feature | Code |
|---|---|---|---|
| Employee | `employee` | Employee Details | `EMPDET` |
| | | Skills | `EMPSKL` |
| | | Goals | `EMPGOL` |
| | | Allocation Correction | `EMPALC` |
| | | Ratings & Feedback | `EMPRTF` |
| | | Working Location (WFO/WFH) | `EMPWLC` |
| Team | `team` | Team Details | `TEAMDET` |
| | | Weekly Updates | `TEAMWKU` |
| Projects | `projects` | Project Details | `PROJDET` |
| | | Tech Stack | `PROJTCH` |
| Department | `department` | Department Settings | `DEPTSET` |
| | | Competencies | `DEPTCMP` |
| Admin | `admin` | Roles & Permissions | `ADMROL` |
| | | Assign User Roles | `ADMUSR` |
| | | Contractors | `ADMCTR` |
| Help & Support | `help-support` | *(no sub-feature)* | `HELP` |
| PM & PMO | `pm-pmo` | PM Projects | `PMPROJ` |
| | | Allocation Requests | `ALCTKT` |
| Utilization Priority | `utilization-priority` | *(no sub-feature)* | `UTLPRI` |
| *(cross-cutting, not in nav)* | `auth` | Authentication / Login | `AUTH` |
| Anything else | — | — | `GEN` |
- **Case IDs are permanent.** Never reuse, renumber or overwrite a `TC-<CODE>-<NNN>`; get new ones from `npm run cases:next-id -- <CODE>`. Cases are never deleted: outdated ones are retired with `npm run cases:retire` (needs a reason, and a replacement for high-priority / smoke / regression / security cases) so they stay in the ledger. `npm run cases:check` fails if a case is lost or an ID is reused. Cases refer to a module by its **code**; names, routes and renames live in `reports/knowledge-base/case-lifecycle/modules.json` (put the old name in `aliases` when something is renamed, and `npm run cases:stale` will list the cases still using it).
- Spec file: `tests/e2e/<module-folder>/<sub-feature-kebab>/<category>.spec.ts` (e.g. `tests/e2e/employee/employee-details/smoke.spec.ts`). Modules with no sub-feature (`help-support`, `auth`) skip that level: `tests/e2e/help-support/<category>.spec.ts`.
- Page object: `tests/page-objects/<module-folder>/<sub-feature-kebab>.page.ts`, class named `<SubFeature>Page` (e.g. `tests/page-objects/employee/employee-details.page.ts`, class `EmployeeDetailsPage`).
- Test title format: `'<TC-ID> @<category> <short description>'`.

## Selector Strategy (strict priority)
1. `page.getByTestId('foo')` — preferred; ask devs to add `data-testid` if missing.
2. `page.getByRole('button', { name: 'Save' })` — accessible role + name.
3. `page.getByLabel('Email')` / `getByPlaceholder(...)`.
4. CSS — only as last resort, scoped within a stable container.
- NEVER use XPath by index, nth-child chains, or text-only when the text is dynamic/translated.
- **Grounding**: a new `getByTestId` must trace to (a) an existing locator/method in the module's page object, (b) `reports/knowledge-base/selector-inventory.json`, (c) a DOM snapshot under `reports/knowledge-base/dom-snapshots/`, or (d) a verbatim `uiElements[].source === "verbatim"` string from the requirement — otherwise fall back to role/label/placeholder and flag it as an Unverified Selector rather than inventing one.
  - Source (c) is produced by `npm run capture:dom-snapshot -- --module=<CODE> --routes=<route(s)> [--clickButtons="Add X,Add Y"] [--session=primary|punit]` (one JSON file per module code under `dom-snapshots/`, e.g. `dom-snapshots/EMPGOL.json`, plus a screenshot per captured state) — it reuses the existing `storageState.json`/`storageState-punit.json` sessions, no MCP server needed. Regenerate before automating a module that doesn't have a snapshot yet, or whose snapshot predates the current requirement doc. If a route's captured state shows `isNotFoundPage: true`, treat the feature as not yet deployed — don't guess its structure.
  - `Requirement Analyzer` also reads an existing snapshot (read-only — it has no `execute` tool and never captures one itself) to cross-check its own `uiElements[]`/`acceptanceCriteria[]` claims against live reality, flagging mismatches into `unclear[]` before they propagate into test cases (see its step 3.85).
- **Ledger check**: before finalizing a locator, check it against `reports/knowledge-base/locator-failure-ledger.json` (built via `npm run ledger:locator-failures` from real test-run failures) — if the same file:line/context has a prior entry, apply its `recommendedAlternative` or an equivalent scoped `.or()` fallback instead of regenerating the locator as-is.

## Assertions
- Use `expect(...)` with web-first matchers (`toBeVisible`, `toHaveText`, `toHaveCount`).
- One logical assertion per "expected result" in the test case.
- Avoid `page.waitForTimeout(...)`. Use auto-waiting locators or `expect.poll`.

## Page Objects
- Constructor builds locators; methods perform actions; matcher helpers like `expectImported(n)` are allowed.
- Methods MUST be async and return `Promise<void>` (or a meaningful value for getters).
- No `expect(...)` outside `expect*` helper methods or specs — keep action methods action-only.

## Test Structure
- Group with `test.describe('<Module>', ...)`.
- Tag categories in the test title: `@smoke`, `@functional`, `@negative`, `@boundary`, `@a11y`, `@regression`.
- Use `test.beforeEach` for navigation/login fixtures, not for assertions.

## Fixtures & Auth

Two authenticated sessions are set up by `tests/global-setup.ts` and consumed via `tests/fixtures/auth.ts`:

| Fixture | Account (env var) | Login method | storageState file | Default role |
|---|---|---|---|---|
| `primaryPage` | `SIMERP_USERNAME` | Microsoft SSO | `storageState.json` | Admin |
| `testUserPage` | `SIMERP_TEST_USERNAME` | Direct credentials | `storageState-punit.json` | TM / Employee |

Rules:
- Always import `test` from `../../fixtures/auth` (not from `@playwright/test`) when your spec needs either fixture.
- **Every spec that requires login must use a fixture** — never call `page.fill(email)` directly in a spec.
- Preconditions in test cases must name the exact fixture: `"Use primaryPage fixture (SIMERP_USERNAME)"`.
- For role-enforcement tests that need both accounts open simultaneously, use `primaryPage` + `testUserContext` from the same fixture file.
- Test data files (CSV/JSON) live under `tests/fixtures/data/`.
- NEVER commit real credentials. Read from `.env`.

## Reliability
- Prefer `await expect(locator).toBeVisible()` over manual `waitFor`.
- Make tests independent — no shared mutable state between specs.
- Clean up created records in `test.afterEach` when possible.

## Accessibility checks
- For `@a11y` tests, use `@axe-core/playwright` (when installed) to scan critical pages.
- Verify keyboard navigation reaches all interactive elements.

## Forbidden
- `page.evaluate(...)` to read app internals for assertions.
- Hard-coded production URLs — always use `baseURL` from config.
- `test.only`, `test.skip` in committed code (use tags + grep instead).
