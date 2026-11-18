/**
 * Re-test for SI4-I624 — Team Details: role and experience badges wrap onto two lines when
 * "Show All Details" is on (side effect of the SI4-I563 fix, FE e306351c).
 *
 * Steps (from the bug): Admin → Team → Team Details → department PROJECT MANAGEMENT →
 * turn on "Show All Details" → look at the role/experience badges on each member row.
 * Expected (fixed): every badge stays on one line ("Sr. PM", "12y 7m") at 1440 and 1280 px.
 *
 * Wrapping can't be seen from the badge's bounding box (the pill is a fixed h-5), so the text
 * inside each pill is measured with a DOM Range: one line = one distinct line top. This reads
 * rendered layout only, never app state, and the verdict is a plain `expect` on the result.
 */
import { test, expect } from '../../fixtures/auth';
import type { Page, Locator } from '@playwright/test';

const DEPARTMENT = 'PROJECT MANAGEMENT';

async function openTeamDetailsWithAllDetails(page: Page): Promise<void> {
  await page.goto('/team');

  const deptTrigger = page.locator('#department-combobox');
  await expect(deptTrigger).toBeVisible({ timeout: 20_000 });
  if (!(await deptTrigger.innerText()).trim().match(new RegExp(`^${DEPARTMENT}$`, 'i'))) {
    await deptTrigger.click();
    const search = page.locator('[data-slot="command-input"], [cmdk-input]').first();
    await search.fill(DEPARTMENT);
    await page.getByRole('option', { name: new RegExp(`^\\s*${DEPARTMENT}\\s*$`, 'i') }).click();
  }
  await expect(deptTrigger).toHaveText(new RegExp(DEPARTMENT, 'i'));

  const toggle = page.getByRole('switch', { name: 'Show All Details' });
  await expect(toggle).toBeVisible();
  if ((await toggle.getAttribute('aria-checked')) !== 'true') await toggle.click();
  await expect(toggle).toHaveAttribute('aria-checked', 'true');
}

/** Role / experience pills in the member rows (performance-score pills are plain numbers, left out). */
function rolePills(page: Page): Locator {
  return page
    .locator('div[role="button"]')
    .locator('span.rounded-sm.border')
    .filter({ hasText: /[A-Za-z]/ });
}

async function measureWrappedPills(pills: Locator): Promise<{ total: number; wrapped: string[] }> {
  return pills.evaluateAll((els) => {
    const wrapped: string[] = [];
    for (const el of els) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const tops = new Set(
        Array.from(range.getClientRects())
          .filter((r) => r.width > 0 && r.height > 0)
          .map((r) => Math.round(r.top)),
      );
      if (tops.size > 1) wrapped.push((el.textContent ?? '').trim());
    }
    return { total: els.length, wrapped };
  });
}

for (const [nn, width] of [['01', 1440], ['02', 1280]] as const) {
  test(`TC-RTST-624${nn} role and experience badges stay on one line at ${width}px @retest @I624`, async ({ primaryPage }) => {
    await primaryPage.setViewportSize({ width, height: 900 });
    await openTeamDetailsWithAllDetails(primaryPage);

    const pills = rolePills(primaryPage);
    await expect(pills.first()).toBeVisible({ timeout: 20_000 });
    // Experience badges ("12y 7m") prove the detail view has really rendered.
    await expect(pills.filter({ hasText: /^\s*\d+y(\s+\d+m)?\s*$/ }).first()).toBeVisible();

    const { total, wrapped } = await measureWrappedPills(pills);
    await test.info().attach(`badges-${width}`, {
      body: JSON.stringify({ total, wrappedCount: wrapped.length, wrapped }, null, 2),
      contentType: 'application/json',
    });
    await test.info().attach(`team-details-${width}`, {
      body: await primaryPage.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });

    expect(total, 'role/experience badges found on the page').toBeGreaterThan(0);
    expect(wrapped, `${wrapped.length} of ${total} badges wrap onto two lines`).toEqual([]);
  });
}
