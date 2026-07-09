---
name: playwright-e2e-generator
description: 'Generate, execute, and auto-fix Playwright + TypeScript E2E tests for SIM ERP using POM, fixtures, and Playwright MCP. Use when: writing automation from test cases, running/healing existing specs, or closing the generate-run-fix loop.'
tools: [read, edit, search, execute]
argument-hint: 'Command: /generate-playwright-test | /generate-and-run-playwright-tests | /run-playwright-tests | /auto-heal-playwright-failures | /automate-security-checks'
---

## Project-Specific Overrides (SIM ERP QA)

This skill is pre-configured for this project — do NOT regenerate these:

- **POM classes**: `tests/page-objects/<module>/<sub-feature>.page.ts` (not `src/pages/`)
- **Test specs**: `tests/e2e/<module>/<sub-feature>/<category>.spec.ts`
- **Fixtures**: `tests/fixtures/auth.ts` — already provides `primaryPage` (ceo@simformsolutions.com, direct credentials) and `testUserPage` (punit.patel, direct credentials). Import from here, do not create a new auth fixture.
- **Auth / storageState**: handled by `tests/global-setup.ts`. Never regenerate globalSetup or storageState files.
- **Base URL**: `process.env.BASE_URL` = `https://simerp-dev.simform.solutions`
- **Config**: `tests/playwright.config.ts` — already has `globalSetup`, default `storageState`, all three browsers.
- **Base page**: `tests/page-objects/base.page.ts` — extend this for all new page objects.

---

## SIM ERP Enterprise Automation Intelligence

Apply these rules automatically whenever this skill is used for SIM ERP automation — no explicit instruction needed. They operate on top of the general Playwright best practices defined later in this file.

### CRUD Validation

Whenever automating Create, Update, Delete, Archive, Restore, Assignment, Deallocation, or Status Transition operations, automatically include assertions for all of the following that apply:

| What to verify | Playwright approach |
|---|---|
| Success notification | `await expect(page.getByRole('alert')).toContainText('...')` |
| Updated grid/table | `await expect(page.getByRole('row', { name: entityName })).toBeVisible()` |
| Absence after delete/archive | `await expect(page.getByRole('row', { name: entityName })).not.toBeVisible()` |
| Browser refresh persistence | `await page.reload(); await expect(locator).toBeVisible()` |
| API response | `const r = await page.request.get('/api/...'); expect(r.status()).toBe(200)` |
| Backend/UI consistency | Assert at least 2 fields match between the UI and the API GET response |
| Duplicate prevention | Attempt the same submit twice; assert exactly one record exists |
| Record count consistency | Assert count badge/table row count before and after the operation |

### Employee Count Validation

Whenever employee allocation changes — assign, deallocate, add to team, remove from team — assert all of the following:

```ts
// UI card count
await expect(page.getByTestId('employee-count-card')).toHaveText(String(expectedCount));

// Table row count
await expect(page.getByRole('row')).toHaveCount(expectedCount + 1); // +1 for header

// API count
const res = await page.request.get('/api/v1/employees/count');
expect((await res.json()).total).toBe(expectedCount);
```

If any count diverges from the others, classify as a **product defect** (data synchronization failure) — not an automation failure.

### API/UI Synchronization

For every module that uses backend APIs, add an API parity assertion after every write operation:

```ts
// After UI create/update — verify API returns same values
const apiRes = await page.request.get(`/api/v1/${resource}/${id}`);
expect(apiRes.status()).toBe(200);
const body = await apiRes.json();
expect(body.name).toBe(uiDisplayedName);
expect(body.status).toBe(uiDisplayedStatus);
```

When the UI shows a value that differs from the API response, add a comment:
```ts
// PRODUCT DEFECT SUSPECTED: UI shows X but API returns Y — see TC-<ID>
```
and let the assertion fail so the bug is captured.

### Auto-Save Verification

For Weekly Updates, Goals, and Competencies (all have editable inline/form fields), add these verifications automatically when the test case involves editing:

```ts
// 1. Type and navigate away
await field.fill('auto-saved content');
await page.goto('/other-page');
await page.goto('/original-page');
// 2. Verify content persisted
await expect(field).toHaveValue('auto-saved content');

// 3. Verify browser refresh retains data
await page.reload();
await expect(field).toHaveValue('auto-saved content');
```

If the feature has an explicit auto-save indicator, also assert it appears after input.

### Feature Flag Automation

Whenever the test case involves a feature flag, generate all of the following variations in the same spec file:

```ts
test.describe('Feature flag — enabled', () => {
  // assumes flag is ON in the test environment
  test('gated element is visible and functional', async ({ page }) => { ... });
  test('API endpoint returns 200', async ({ page }) => { ... });
});

test.describe('Feature flag — disabled', () => {
  // Note: add skip or environment-variable gate if flag cannot be toggled programmatically
  test.skip(process.env.FEATURE_FLAG_X !== 'false', 'Requires flag disabled');
  test('gated element is absent from DOM', async ({ page }) => {
    await expect(page.getByTestId('feature-x-btn')).not.toBeAttached();
  });
  test('navigation link is hidden', async ({ page }) => { ... });
  test('direct URL redirects to 403 or 404', async ({ page }) => {
    await page.goto('/feature-x');
    await expect(page).toHaveURL(/403|404|not-found/);
  });
  test('API returns 403 when flag is off', async ({ page }) => {
    const res = await page.request.get('/api/v1/feature-x');
    expect([403, 404]).toContain(res.status());
  });
});
```

### Permission Verification

For every privileged action, generate both the authorized and unauthorized check in the same spec:

```ts
test('authorized user can perform action', async ({ page }) => {
  // primaryPage (ceo@simformsolutions.com) — Admin role
  await expect(page.getByTestId('action-btn')).toBeVisible();
});

test('unauthorized user cannot perform action', async ({ testUserPage }) => {
  // testUserPage (punit.patel) — restricted role
  await expect(testUserPage.getByTestId('action-btn')).not.toBeVisible();
  // Also verify the API returns 403
  const res = await testUserPage.request.post('/api/v1/resource', { data: {} });
  expect(res.status()).toBe(403);
});
```

### Network Resilience

When the test case explicitly covers error handling, use `page.route` to mock the failure rather than relying on real network conditions:

```ts
// Mock a 500 response
await page.route('/api/v1/resource', route =>
  route.fulfill({ status: 500, body: JSON.stringify({ message: 'Internal Server Error' }) })
);
await triggerAction();
await expect(page.getByRole('alert')).toContainText('Something went wrong');

// Mock a timeout
await page.route('/api/v1/resource', route =>
  new Promise(() => {}) // never resolves
);
```

Valid mock statuses to use when test cases specify: `401`, `403`, `404`, `500`, `503`.
Always assert a user-friendly error message is shown — never a raw stack trace.

### Stable Automation Rules

These patterns are **always forbidden** in generated code:

```ts
// FORBIDDEN
await page.waitForTimeout(2000);
await new Promise(r => setTimeout(r, 1000));
await page.locator('.list-item').nth(3);    // index-based without positional intent
await page.locator('div > div > span > a'); // deep CSS chain
page.$x('//div[contains(@class, "row")]');  // XPath without necessity
```

Use instead:
```ts
await expect(locator).toBeVisible();        // auto-waits
await page.waitForResponse(r => r.url().includes('/api/') && r.ok());
await page.getByRole('row', { name: entityName }); // semantic
```

### Auto-Heal Intelligence

When healing failed automation via `/auto-heal-playwright-failures`, apply fixes only to automation-level problems:

**Fix these automation issues:**
- Locator no longer matches — update to a more stable selector
- Missing wait — add `waitForResponse` or `waitForLoadState`
- Navigation path changed — update `goto` URL
- Selector too broad — scope to nearest container
- Toast/alert timing — replace sleep with `expect(alert).toBeVisible()`

**Never change these to force a green result:**
- Expected assertion values (e.g. changing `expect(count).toBe(5)` to `toBe(4)` because the UI shows 4)
- Business logic in steps (e.g. skipping a required form field to avoid a validation error)
- Expected HTTP status codes (e.g. changing `toBe(403)` to `toBe(200)` for a permission check)

When the application behaviour contradicts the test expectation and the test logic is correct, mark it:
```ts
// PRODUCT DEFECT: <description of what the app does vs. what it should do>
// TC-<ID> — do not change this assertion; fix the product instead
test.fail(true, 'Known product defect — <description>');
```

### Regression Awareness

Whenever generating or running automation for `Department`, `Project`, `Employee Allocation`, `Employee Profile`, `Skills`, `Goals`, `Competencies`, or `Weekly Updates` — after the primary test command completes, also run any existing regression specs for these areas:

```bash
npx playwright test tests/e2e/ --grep "@regression" --grep-invert "@skip"
```

Report the regression pass/fail count alongside the primary results. If any regression test fails after the new automation was generated, flag it as a **potential regression introduced by the new code** before reporting done.

### Automation Coverage Metrics

After every `/generate-and-run-playwright-tests`, `/run-playwright-tests`, or `/auto-heal-playwright-failures` command, append a coverage block to the output:

```
Automation Coverage
───────────────────────────────────
Total scenarios automated : 24
Manual-only               : 3
Regression scenarios      : 8
API validation checks     : 12
Security/role checks      : 5
CRUD operations covered   : 4 (Create ✓ Update ✓ Delete ✓ Archive ✓)
Roles covered             : primaryPage (Admin) ✓  testUserPage (TM/Employee) ✓
Browsers run              : chromium ✓  firefox –  webkit –
Product defects found     : 1
Automation failures fixed : 2
```

### Final Automation Review

Before completing any command, internally verify every item. Fix failing items — do not report done with known violations:

| Check | Verify |
|---|---|
| ✓ Page Object Model | All pages extend `BasePage`; no raw `page.goto` in spec files without a POM method |
| ✓ No duplicate POM methods | No two methods in a page object do the same thing under different names |
| ✓ Stable locators | No `nth()` without positional intent comment; no deep CSS chains; no XPath without necessity |
| ✓ No hardcoded waits | No `waitForTimeout`; no `setTimeout`; no numeric sleep values |
| ✓ Assertions validate behaviour | Every test ends with at least one `expect()` that asserts a business outcome |
| ✓ Test isolation | No test reads state written by another test; `afterEach` cleanup where test data is created |
| ✓ TypeScript compilation | `npx tsc --noEmit` exits with 0 errors |
| ✓ Product defects separated | Application misbehaviour is marked as a defect, not silently fixed in automation |

---

# Skill: Playwright E2E Generator & Executor

## Commands

### /generate-playwright-test

Generate Playwright + TypeScript tests (with POM, fixtures, env-config) from any test description or
scenario.

---

### /generate-and-run-playwright-tests

End-to-end flow: generate or update Playwright tests **and then execute them via Playwright MCP**,
performing auto-fixes on failures until tests pass or a real product bug is detected.

---

### /run-playwright-tests

Execute existing Playwright tests via the Playwright MCP integration and report results.

---

### /auto-heal-playwright-failures

Diagnose failed or flaky Playwright tests and **auto-fix** the automation code (locators, waits,
flows, env config) using execution artifacts, then re-run via Playwright MCP.

---

### /design-playwright-framework

Design or refine the Playwright framework structure: POM layout, fixtures, env handling, and
test-organization guidelines.

---

### /recommend-locators

Recommend stable, best-practice Playwright locators for UI elements, prioritizing test IDs and
accessibility.

---

### /setup-auth-tokenisation

> **Note for SIM ERP**: Auth is already set up via `tests/global-setup.ts` and
> `tests/fixtures/auth.ts`. Use this command only for NEW auth flows (e.g., API-only contexts,
> additional roles beyond ceo@simformsolutions.com and punit.patel).

Set up **token-based authentication** for Playwright tests — Bearer/JWT/OAuth/API-key flows —
so that tests log in once (or per role), obtain tokens, attach them to requests, persist them
across tests, refresh them when they expire, and never leak secrets into source control or logs.

**Inputs**

- Auth type: form login, REST/GraphQL login endpoint, OAuth 2.0 / OIDC, SSO, static API key
- Token format and storage: Bearer/JWT/opaque; HTTP header, cookie, `localStorage`,
  `sessionStorage`
- Roles required and corresponding test users
- Token expiry/refresh behaviour and any refresh endpoint
- Whether tests are UI-only, API-only, or mixed

---

### /automate-security-checks

Implement `@security`-tagged test cases: role-enforcement checks (UI hiding) and direct API authorization checks (HTTP 403 responses for restricted operations).

**Pattern for UI-level role enforcement:**

```ts
import { test, expect } from '../../../fixtures/auth';

test.describe('Employee Details — security', () => {
  test('TC-EMPDET-020 @security non-admin cannot see edit button', async ({ testUserPage }) => {
    await testUserPage.goto('/employee');
    await expect(testUserPage.getByRole('button', { name: 'Edit' })).not.toBeVisible();
  });
});
```

**Pattern for API-level authorization (403 check):**

```ts
test('TC-EMPDET-021 @security direct PATCH to employee endpoint returns 403 for non-admin', async ({ testUserPage }) => {
  const response = await testUserPage.request.patch('/api/employees/1', {
    data: {},
    headers: { 'Content-Type': 'application/json' },
  });
  expect(response.status()).toBe(403);
});
```

**Notes:**
- Use `testUserPage` (punit.patel session) for restricted-role checks — import from `tests/fixtures/auth`.
- Use `primaryPage` / default `page` (ceo@simformsolutions.com) only when verifying the privileged role CAN perform the action.
- Do NOT relax assertions (e.g., checking 4xx rather than exactly 403) — specificity is the point of security tests.
- IDOR checks: call the restricted endpoint with a valid but wrong-ownership resource ID and assert 403 or 404.

---

### /review-playwright-test

Review existing Playwright tests/POMs and propose refactors for POM quality, locator strategy,
fixtures, and stability.

---

### /extend-test-coverage

Design a set of manual and automated test cases from a feature/story and map them to Playwright E2E
coverage.

## Workflow

### Workflow: /generate-and-run-playwright-tests (Core Loop)

1. **Parse Input & Define Scope**
   - Extract test IDs, titles, steps, and expectations from the provided text.
   - Determine which scenarios will be automated in this run.

2. **Design or Reuse POM & Fixtures**
   - Identify pages/screens involved and decide which POM classes/methods are needed.
   - Check `tests/page-objects/` first — reuse `base.page.ts` and any existing page objects.
   - Import auth from `tests/fixtures/auth.ts` (`primaryPage` or `testUserPage`).

3. **Generate/Update Test Code**
   - Create or update `*.spec.ts` under `tests/e2e/<module>/<sub-feature>/`.
   - Create or update page objects under `tests/page-objects/<module>/<sub-feature>.page.ts`.
   - Ensure base URL comes from `process.env.BASE_URL` via `playwright.config.ts`.

4. **Apply Locator & Best-Practice Rules**
   - Prioritize `getByTestId` using stable `data-testid`/`data-test`/`data-qa` attributes.
   - Use `getByRole`, `getByLabel`, `getByPlaceholder`, and `getByText` next.
   - Use minimal CSS/XPath only as a last resort, with comments.
   - Avoid brittle patterns like deep CSS chains or `.nth()` when possible.

5. **Run `npx tsc --noEmit`**
   - Validate generated TypeScript before executing.

6. **Invoke Playwright MCP for Execution**
   - Use the Playwright MCP tool to run the targeted tests.
   - Capture output: pass/fail status, error messages, stack traces, and artifact paths.

7. **Analyze Failures**
   - For each failing test, inspect error messages, stack traces, which step/locator failed.
   - Classify root cause:
     - **Automation issue** (wrong locator, missing wait, incorrect assertion, wrong flow).
     - **Configuration/env issue** (wrong base URL, credentials, missing feature flags).
     - **Likely product defect** (UI/behavior contradicts expected result, backend error).

8. **Auto-Fix Automation Issues**
   - Improve locators, replace hard waits, fix navigation paths.
   - Keep code changes focused with explanations.
   - Max 3 auto-fix iterations per test.

9. **Re-run via Playwright MCP**
   - Re-execute affected tests.
   - Continue diagnose → fix → rerun loop.

10. **Determine Completion**
    - All targeted tests passing → **done**, summarize final state.
    - Genuine product defects → clearly state automation is blocked, provide failure details.
    - Do **not** weaken assertions just to get a green bar.

### Workflow: /run-playwright-tests

1. Interpret the requested scope (all tests, folder, file, tag, or test name).
2. Call the Playwright MCP tool to run tests accordingly.
3. Collect and summarize results, highlighting failures.
4. Optionally recommend running `/auto-heal-playwright-failures` if there are automation issues.

### Workflow: /auto-heal-playwright-failures

1. Ingest recent execution results (from Playwright MCP).
2. Map failures back to corresponding test and POM code.
3. Diagnose root cause — apply the **Auto-Heal Intelligence** rules from the SIM ERP Enterprise Automation Intelligence section:
   - **Automation issue** (locator stale, missing wait, wrong nav path, overly broad selector) → fix it.
   - **Product defect** (UI behaviour contradicts the requirement, API returns wrong status/value) → mark with `test.fail()` and a `PRODUCT DEFECT:` comment; do NOT change the assertion to match the broken behaviour.
4. Apply targeted code fixes only to automation-level issues.
5. Re-run affected tests using Playwright MCP.
6. Append the **Automation Coverage Metrics** block from the SIM ERP Enterprise Automation Intelligence section to the summary.
7. Summarize what changed, how many were automation fixes vs product defects, and whether tests are now passing.

### Workflow: /generate-playwright-test (Generation Only)

Use the same parsing and design logic as in `/generate-and-run-playwright-tests`, but stop after
code generation and explanation, without invoking MCP.

## QA Considerations

- Always cover **positive**, **negative**, and **edge** flows where appropriate.
- Strive for **stable, maintainable** tests:
  - Strong locator strategy.
  - Business-level POM methods.
  - Proper use of fixtures and env config.
- Treat **flakiness** as a bug in the automation or design:
  - Remove arbitrary sleeps.
  - Use Playwright's auto-waiting and robust assertions.
- **Never mask product defects** — when auto-fixing, apply the Auto-Heal Intelligence rules from the SIM ERP Enterprise Automation Intelligence section:
  - Fix locator, wait, and navigation issues.
  - Do not relax assertions or skip steps to get a green bar.
  - Mark genuine product defects with `test.fail()` and a `PRODUCT DEFECT:` comment so they are captured in CI.
- **CRUD tests must be complete** — every Create/Update/Delete/Archive test must include the full CRUD Validation checklist from the SIM ERP Enterprise Automation Intelligence section.
- **SIM ERP module tests include regression** — after generating or running tests for watched modules, always run `@regression` tagged tests and report their status.
- Provide enough logging and comments so humans can understand what the automation is doing.

## Edge Cases

This skill should handle or explicitly call out:

- Very vague or incomplete test descriptions (generate skeletons with TODOs).
- UI that lacks stable attributes (recommend adding `data-testid` where possible).
- Environment-specific behavior (feature flags, locales, multiple base URLs).
- Authentication flows that require external systems (SSO, OAuth) — auth is pre-built for
  this project; flag only if a NEW role is needed.
- **Token expiry mid-suite** — handled by `global-setup.ts` 8-hour cache + re-login.
- **MFA / Captcha** — flag clearly and request bypass from the team.
- Persistent application defects that block passing tests — clearly report as such.
- Playwright MCP/tool errors — surface the issue and suggest troubleshooting.

