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
| *(cross-cutting, not in nav)* | `auth` | Authentication / Login | `AUTH` |
| Anything else | — | — | `GEN` |
- Spec file: `tests/e2e/<module-folder>/<sub-feature-kebab>/<category>.spec.ts` (e.g. `tests/e2e/employee/employee-details/smoke.spec.ts`). Modules with no sub-feature (`help-support`, `auth`) skip that level: `tests/e2e/help-support/<category>.spec.ts`.
- Page object: `tests/page-objects/<module-folder>/<sub-feature-kebab>.page.ts`, class named `<SubFeature>Page` (e.g. `tests/page-objects/employee/employee-details.page.ts`, class `EmployeeDetailsPage`).
- Test title format: `'<TC-ID> @<category> <short description>'`.

## Selector Strategy (strict priority)
1. `page.getByTestId('foo')` — preferred; ask devs to add `data-testid` if missing.
2. `page.getByRole('button', { name: 'Save' })` — accessible role + name.
3. `page.getByLabel('Email')` / `getByPlaceholder(...)`.
4. CSS — only as last resort, scoped within a stable container.
- NEVER use XPath by index, nth-child chains, or text-only when the text is dynamic/translated.

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
