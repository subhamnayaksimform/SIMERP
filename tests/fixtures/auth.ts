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

const FIXTURE_DIR   = path.join(__dirname);
const PRIMARY_STATE = path.join(FIXTURE_DIR, 'storageState.json');
const TEST_STATE    = path.join(FIXTURE_DIR, 'storageState-punit.json');

type AuthFixtures = {
  /** ceo@simformsolutions.com — direct-credentials session (default for most tests). */
  primaryPage: Page;
  /** punit.patel — direct-credentials session (for tests that need a different role). */
  testUserPage: Page;
  /** The underlying context for the test-user page (for multi-page scenarios). */
  testUserContext: BrowserContext;
};

export const test = base.extend<AuthFixtures>({
  primaryPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: PRIMARY_STATE });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  testUserPage: async ({ browser }, use) => {
    const ctx  = await browser.newContext({ storageState: TEST_STATE });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },

  testUserContext: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: TEST_STATE });
    await use(ctx);
    await ctx.close();
  },
});

export { expect };
