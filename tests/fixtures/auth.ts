/**
 * Auth fixtures — import `test` from this file in any spec that needs
 * multi-user scenarios.
 *
 * Usage:
 *   import { test, expect } from '../../fixtures/auth';
 *
 *   test('something', async ({ primaryPage }) => { ... });
 *   test('admin flow', async ({ testUserPage }) => { ... });
 */

import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import * as path from 'path';

// Local dev servers (e.g. Vite's HTTPS mode) commonly use a self-signed certificate — only
// relax cert validation when actually pointed at localhost, so staging behavior is unchanged.
const IGNORE_HTTPS_ERRORS = /^https?:\/\/localhost/i.test(process.env.BASE_URL || '');

const FIXTURE_DIR   = path.join(__dirname);
const PRIMARY_STATE = path.join(FIXTURE_DIR, 'storageState.json');
const TEST_STATE    = path.join(FIXTURE_DIR, 'storageState-punit.json');
const PM_STATE      = path.join(FIXTURE_DIR, 'storageState-pm.json');
const PMO_STATE     = path.join(FIXTURE_DIR, 'storageState-pmo.json');
const TM_STATE      = path.join(FIXTURE_DIR, 'storageState-tm.json');
const EMP_STATE     = path.join(FIXTURE_DIR, 'storageState-emp.json');
const EM_STATE      = path.join(FIXTURE_DIR, 'storageState-em.json');
const CSM_STATE     = path.join(FIXTURE_DIR, 'storageState-csm.json');

type AuthFixtures = {
  /** ceo@simformsolutions.com — direct-credentials session (default for most tests). */
  primaryPage: Page;
  /** punit.patel — direct-credentials session (for tests that need a different role). */
  testUserPage: Page;
  /** The underlying context for the test-user page (for multi-page scenarios). */
  testUserContext: BrowserContext;
  /** hardik.trivedi@simformsolutions.com — Project Manager persona. */
  pmPage: Page;
  /** The underlying context for the PM page (for multi-page scenarios). */
  pmContext: BrowserContext;
  /** bhumi.chauhan@simformsolutions.com — PMO persona. */
  pmoPage: Page;
  /** The underlying context for the PMO page (for multi-page scenarios). */
  pmoContext: BrowserContext;
  /** sudhansu.patel@simformsolutions.com — Team Manager / department-approver persona. */
  tmPage: Page;
  /** The underlying context for the TM page (for multi-page scenarios). */
  tmContext: BrowserContext;
  /** kashyap.patel@simformsolutions.com — Employee (base worker) persona. */
  empPage: Page;
  /** The underlying context for the Employee page (for multi-page scenarios). */
  empContext: BrowserContext;
  /** kunal.jadeja@simformsolutions.com — EM (Engineering/Employee Manager) persona. */
  emPage: Page;
  /** The underlying context for the EM page (for multi-page scenarios). */
  emContext: BrowserContext;
  /** tarun.sharma@simformsolutions.com — CSM persona. */
  csmPage: Page;
  /** The underlying context for the CSM page (for multi-page scenarios). */
  csmContext: BrowserContext;
};

export const test = base.extend<AuthFixtures>({
  primaryPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: PRIMARY_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  testUserPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: TEST_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  testUserContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: TEST_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },

  pmPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: PM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  pmContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: PM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },

  pmoPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: PMO_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  pmoContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: PMO_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },

  tmPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: TM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  tmContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: TM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },

  empPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: EMP_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  empContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: EMP_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },

  emPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: EM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  emContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: EM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },

  csmPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: CSM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  csmContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: CSM_STATE, ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS });
    await use(ctx);
    await ctx.close();
  },
});

export { expect };
