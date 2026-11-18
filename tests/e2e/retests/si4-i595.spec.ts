import { test, expect } from '../../fixtures/auth';
import type { Browser, BrowserContext, Page } from '@playwright/test';

/**
 * SI4-I595 — Editing a Permanent Replacement ticket must not force feedback when it was skipped at raise time
 * (developer <= 20 logged hours). Data: RA-0017 (XCrypt, PM Keyur Hegde, Ananya Hegde 0 h, feedback skipped).
 * Test 03 saves one edit (allocation 55 -> 50) and restores it to 55 in the same test.
 */
const TICKET = 'RA-0017';
// The skip option only shows for the project's own PM (Keyur Hegde, XCrypt). All dev accounts share one password.
const PM_EMAIL = 'keyur.hegde@simformsolutions.com';

const openContexts: BrowserContext[] = [];

async function loginAsKeyur(browser: Browser): Promise<Page> {
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
  openContexts.push(ctx); // closed after each test — a second live login would take the session over
  const page = await ctx.newPage();
  await page.goto('/dev-login');
  await page.locator('input[type="email"], input[name="email"], input[name="username"]').first().fill(PM_EMAIL);
  await page.locator('input[type="password"]').first().fill(process.env.SIMERP_PASSWORD ?? '');
  await page.locator('button[type="submit"]').first().click();
  await page.waitForURL((u) => !/dev-login|\/login/i.test(u.toString()), { timeout: 30000 });
  return page;
}

async function openEditDrawer(page: Page) {
  await page.goto('/my-tickets');
  await page.getByRole('row').nth(1).waitFor({ timeout: 20000 });
  await page.getByPlaceholder('Search by ticket,PM, or project').fill(TICKET);
  const row = page.getByRole('row').filter({ hasText: TICKET }).first();
  await row.waitFor();
  await row.getByText(TICKET).first().click();
  await page.getByRole('button', { name: 'Edit Ticket' }).click();
  const drawer = page.getByRole('dialog');
  await expect(drawer).toBeVisible();
  return drawer;
}

test.describe.serial('@retest @I595 Edit Permanent Replacement with skipped feedback', () => {
  test.afterEach(async () => {
    while (openContexts.length) await openContexts.pop()!.close();
  });

  test('TC-RTST-59501 edit drawer shows skipped notice and ticked Skip checkbox, no ratings @retest @I595', async ({ browser }) => {
    const page = await loginAsKeyur(browser);
    const drawer = await openEditDrawer(page);
    await expect(drawer.getByText(/Feedback Was Skipped/i)).toBeVisible();
    const skip = drawer.getByRole('checkbox', { name: /Skip employee feedback/i });
    await expect(skip).toBeChecked();
    await expect(drawer.getByText(/Core Skill/i)).toBeHidden();
  });

  test('TC-RTST-59502 changing allocation % with feedback skipped saves without ratings (then restored) @retest @I595', async ({ browser }) => {
    const page = await loginAsKeyur(browser);
    // Baseline is 55; a previous aborted attempt may have left it at 50, so pick the other value, then end on 55.
    const first = await (async () => {
      const d = await openEditDrawer(page);
      const v = await d.getByLabel(/Allocation %/).inputValue();
      await d.getByRole('button', { name: 'Cancel' }).click();
      await expect(d).toBeHidden();
      return v;
    })();
    const steps = first === '55' ? ['50', '55'] : first === '50' ? ['55'] : ['55'];
    for (const to of steps) {
      const drawer = await openEditDrawer(page);
      const alloc = drawer.getByLabel(/Allocation %/);
      await expect(drawer.getByRole('checkbox', { name: /Skip employee feedback/i })).toBeChecked();
      await alloc.fill(to);
      const save = drawer.getByRole('button', { name: /Save Changes/i });
      await expect(save).toBeEnabled(); // not blocked by missing ratings
      await save.click();
      await expect(page.getByText(/The ticket has been updated/i).first()).toBeVisible();
      await expect(drawer).toBeHidden();
    }
  });

  test('TC-RTST-59503 unticking Skip brings the mandatory ratings back @retest @I595', async ({ browser }) => {
    const page = await loginAsKeyur(browser);
    const drawer = await openEditDrawer(page);
    const skip = drawer.getByRole('checkbox', { name: /Skip employee feedback/i });
    await expect(skip).toBeChecked();
    await skip.uncheck();
    await expect(drawer.getByText(/Core Skill/i)).toBeVisible();
    await skip.check();
    await expect(drawer.getByText(/Core Skill/i)).toBeHidden();
  });
});
