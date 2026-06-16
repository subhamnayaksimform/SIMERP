---
name: playwright-e2e-generator
description: >
  Generates, executes, and auto-fixes Playwright + TypeScript end-to-end tests using POM, fixtures,

  tests, fixing flaky/failed tests, or needs test generation plus execution via Playwright MCP.
---

## Project-Specific Overrides (SIM ERP QA)

This skill is pre-configured for this project — do NOT regenerate these:

- **POM classes**: `tests/page-objects/<module>.page.ts` (not `src/pages/`)
- **Test specs**: `tests/e2e/<module>/<category>.spec.ts`
- **Fixtures**: `tests/fixtures/auth.ts` — already provides `primaryPage` (subham.nayak, Microsoft SSO) and `testUserPage` (punit.patel, direct credentials). Import from here, do not create a new auth fixture.
- **Auth / storageState**: handled by `tests/global-setup.ts`. Never regenerate globalSetup or storageState files.
- **Base URL**: `process.env.BASE_URL` = `https://simerp-dev.simform.solutions`
- **Config**: `tests/playwright.config.ts` — already has `globalSetup`, default `storageState`, all three browsers.
- **Base page**: `tests/page-objects/base.page.ts` — extend this for all new page objects.

---

# Skill: Playwright E2E Generator & Executor

## Description

This skill helps you:

1. **Generate** high-quality Playwright end-to-end tests in **TypeScript**, following
   **Page Object Model (POM)**, **fixtures**, and **.env-based configuration**.
2. **Execute** those tests (or existing tests) via a configured **Playwright MCP tool**.
3. **Auto-diagnose and auto-fix** issues in the automation code (locators, waits, flows,
   configuration) when tests fail, then **re-run** until tests are green or a real product defect
   is detected.

The core principle: a task is considered **done** only when the targeted test cases have been:

- Translated into Playwright tests,
- **Executed** using Playwright MCP, and
- **Passing** (green), or clearly blocked by an application/product defect that cannot be fixed by
  changing the automation alone.

This skill is designed to work with **flexible testcase formats** (Markdown, Excel-like rows,
Jira/Confluence text, or free-form scenarios) and to enforce strong **Playwright best practices**,
including a robust locator strategy (test IDs first), stable POM, and minimal flakiness.

It also covers **authentication tokenisation** — generating token-aware auth fixtures, capturing
and persisting tokens via Playwright `storageState`, attaching Bearer/JWT/API-key headers to
requests, refreshing expired tokens, and keeping secrets out of source control and test
artefacts. See the `/setup-auth-tokenisation` command below.

## When to Use

Use or trigger this skill whenever a user:

- Wants to **generate and run** Playwright tests from test cases or scenarios
- Mentions **Playwright**, **E2E automation**, **TypeScript tests**, or **Page Object Model**
- Asks to **execute tests**, **rerun tests**, or **fix failing/flaky tests** automatically
- Talks about using a **Playwright MCP/tool** to run tests from within the assistant
- Wants a **closed loop**: generate → run → fix → rerun until tests pass
- Needs to review, refactor, or heal existing Playwright automation suites

Even if the user does not explicitly mention "execute", this skill should be considered whenever
Playwright tests are being created or modified, so that execution and validation can be offered.

## Inputs

The skill accepts:

- Free-form descriptions of user journeys, flows, or scenarios
- Markdown-style test cases (with or without explicit sections)
- Copy-pasted Excel / tabular data describing test cases
- Jira/Confluence stories, acceptance criteria, or bug reports
- Existing Playwright TypeScript test files and POM classes
- Optional: project folder structure, naming conventions, and environment details
- Optional: which tests/suites to execute (e.g., by file, tag, or test title)
- Optional: **authentication / tokenisation details** — login type (form, API, SSO, OAuth, API
  key), token format (Bearer/JWT/opaque), token source (login endpoint, OIDC, refresh token,
  static API key), token storage (HTTP header, cookie, `localStorage`/`sessionStorage`), token
  expiry/refresh behaviour, and any test users/roles available

## Outputs

Depending on the command, this skill can output:

- Newly generated or updated Playwright **TypeScript test files** (`*.spec.ts`)
- **Page Object Model** classes (BasePage and feature pages) with locators and methods
- Recommended or updated **fixtures** (roles, test data — NOT auth, which is pre-built)
- `.env` snippets wired to `process.env`
- **Execution results**: pass/fail status, failing tests, error messages, stack traces, logs
- **Auto-fix proposals and applied changes** to tests/POM/fixtures
- Final status: all targeted tests **passing** or clearly **blocked by product defect**

Outputs must be concrete, copy-paste-ready, and clearly labelled with file paths and diffs where
relevant.

## Commands

### /generate-playwright-test

**Purpose**

Generate Playwright + TypeScript tests (with POM, fixtures, env-config) from any test description or
scenario.

**Inputs**

- Test description(s): text, Markdown, Excel-like, or Jira-style
- Optional: existing POM/fixtures conventions
- Optional: desired file/folder structure

**Outputs**

- Suggested file names and locations
- Test spec code (`*.spec.ts`)
- Page Object classes and any new methods
- Brief explanation of locator strategy and structure

---

### /generate-and-run-playwright-tests

**Purpose**

End-to-end flow: generate or update Playwright tests **and then execute them via Playwright MCP**,
performing auto-fixes on failures until tests pass or a real product bug is detected.

**Inputs**

- Test description(s) or user stories to automate
- Optional: scope of tests to generate+run (e.g., specific feature or IDs)
- Optional: repo/project layout information

**Outputs**

- Generated/updated test specs and POM code
- Execution command/plan (which tests are run via Playwright MCP)
- Execution results (pass/fail per test)
- Auto-fix attempts (changes to code) and subsequent run results
- Final status: all targeted tests passing or blocked by app bug

---

### /run-playwright-tests

**Purpose**

Execute existing Playwright tests via the Playwright MCP integration and report results.

**Inputs**

- Scope: all tests, specific files, folders, tags, or test titles
- Optional: environment or configuration overrides

**Outputs**

- List of executed tests/suites
- Execution logs or summary
- Per-test status (passed/failed) and failure details (message, stack, screenshot/trace paths)

---

### /auto-heal-playwright-failures

**Purpose**

Diagnose failed or flaky Playwright tests and **auto-fix** the automation code (locators, waits,
flows, env config) using execution artifacts, then re-run via Playwright MCP.

**Inputs**

- Recent Playwright execution results (from MCP): failures, logs, traces
- Corresponding test/POM code

**Outputs**

- Root-cause analysis of each failure (automation issue vs likely product bug)
- Proposed and/or applied code changes
- Re-execution results after fixes
- Clear statement whether tests are now passing or still blocked

---

### /design-playwright-framework

**Purpose**

Design or refine the Playwright framework structure: POM layout, fixtures, env handling, and
test-organization guidelines.

**Inputs**

- High-level description of the application and modules
- Existing repo structure (if any)

**Outputs**

- Folder/file structure proposal (tests, pages, fixtures, config)
- BasePage and example page classes
- Example fixtures and env config

---

### /recommend-locators

**Purpose**

Recommend stable, best-practice Playwright locators for UI elements, prioritizing test IDs and
accessibility.

**Inputs**

- Element descriptions, HTML snippets, or DOM fragments
- Optional: existing fragile selectors

**Outputs**

- Locator suggestions in priority order (test IDs, role, label/placeholder/text, minimal CSS/XPath)
- Explanations and recommendations for adding `data-testid` attributes

---

### /setup-auth-tokenisation

> **Note for SIM ERP**: Auth is already set up via `tests/global-setup.ts` and
> `tests/fixtures/auth.ts`. Use this command only for NEW auth flows (e.g., API-only contexts,
> additional roles beyond subham.nayak and punit.patel).

**Purpose**

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

**Outputs**

- A token-aware **auth fixture** extension
- `playwright.config.ts` updates for new roles
- `.env` placeholders for credentials and secrets
- Token **refresh helper** for expiry handling
- **Secret-masking** rules

---

### /review-playwright-test

**Purpose**

Review existing Playwright tests/POMs and propose refactors for POM quality, locator strategy,
fixtures, and stability.

**Inputs**

- One or more `*.spec.ts` files and supporting POM classes

**Outputs**

- Review comments (what's good, what to improve)
- Refactored snippets showing improved approach

---

### /extend-test-coverage

**Purpose**

Design a set of manual and automated test cases from a feature/story and map them to Playwright E2E
coverage.

**Inputs**

- Feature description, user stories, or requirements

**Outputs**

- List of positive/negative/edge scenarios
- Markers for which scenarios should be automated
- Mapping to POM classes, fixtures, and spec files

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
   - Create or update `*.spec.ts` under `tests/e2e/<module>/`.
   - Create or update page objects under `tests/page-objects/<module>.page.ts`.
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
3. Diagnose root cause (automation vs product defect).
4. Propose and apply targeted code fixes.
5. Re-run affected tests using Playwright MCP.
6. Summarize what changed and whether tests are now passing.

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
- When auto-fixing, avoid masking real product bugs:
  - Do not simply relax assertions or ignore errors to get a green bar.
  - Make it clear when behavior conflicts with requirements.
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

## Appendix A — Playwright + TypeScript Guidelines

### Project Folder Structure

```
tests/
  playwright.config.ts          ← central config, reads process.env
  global-setup.ts               ← dual-login (subham.nayak + punit.patel)
  e2e/
    <module>/
      <category>.spec.ts        ← test specs
  page-objects/
    base.page.ts                ← BasePage (extend this)
    <module>.page.ts            ← feature page objects
  fixtures/
    auth.ts                     ← primaryPage + testUserPage fixtures
    storageState.json           ← subham.nayak session (auto-managed)
    storageState-punit.json     ← punit.patel session (auto-managed)
reports/
  test-cases/                   ← cases JSON + Excel
  results/                      ← results JSON + Excel + HTML
```

### Using Auth Fixtures

```ts
// Most tests — use primaryPage (subham.nayak)
import { test, expect } from '@playwright/test';
// storageState.json applied automatically via playwright.config.ts

// Tests needing punit.patel role
import { test, expect } from '../../fixtures/auth';
test('admin scenario', async ({ testUserPage }) => { ... });
```

### Locator Strategy Summary

Priority order:

1. `getByTestId('...')` — `data-testid` attributes
2. `getByRole('button', { name: '...' })`, `getByRole('textbox', { name: '...' })`
3. `getByLabel`, `getByPlaceholder`, `getByText`
4. Minimal, stable CSS or XPath only when unavoidable

### Waiting and Assertions

- Use Playwright's built-in waits and `expect` assertions.
- Avoid arbitrary sleeps; if a timeout is necessary, document why.
- Assert actual business outcomes, not just that elements are visible.

### Test ID Convention

```
TC-<MODULE_SHORT>-<NNN>   e.g. TC-SALES-001, TC-INV-002
Module codes: CUST, INV, SALES, PUR, AUTH, GOALS, SKILLS
Tags: @smoke, @functional, @negative, @boundary, @a11y, @regression
```

## Appendix B — Secret Hygiene

- Never hard-code credentials or tokens in tests or POMs — always `process.env`.
- `.env` is gitignored; commit only `.env.example`.
- `storageState` files are gitignored.
- Strip `Authorization` headers from reporters before uploading CI artifacts.