---
description: 'Use when: writing, reviewing, or generating test cases and Playwright automation for SIM ERP. Defines naming, selector strategy, assertion patterns, page object conventions, and test data rules. Auto-loaded for files in tests/.'
applyTo: 'tests/**/*.ts'
---

# SIM ERP QA Conventions

## Naming
- Test IDs: `TC-<MODULE_SHORT>-<NNN>` (e.g. `TC-CUST-001`, `TC-INV-014`).
- Module short codes: `CUST` Customer, `INV` Inventory, `SALES` Sales, `PUR` Purchase, `AUTH` Auth.
- Spec file: `tests/e2e/<module>/<category>.spec.ts`.
- Page object: `tests/page-objects/<module>.page.ts`, class named `<Module>Page`.
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
- Authenticated state goes in `tests/fixtures/auth.ts` using Playwright `storageState`.
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
