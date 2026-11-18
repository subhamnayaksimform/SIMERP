import { test, expect } from '../../fixtures/auth';
import type { Page } from '@playwright/test';

/** SI4-T1619 — Allocation Owner on allocation tickets. Ticket under edit: NA-0342 (Open). Always ends Unassigned. */
const TICKET = 'NA-0342';
const LOCKED = ['NA-0475', 'UA-0144']; // Closed, Approved

const rowOf = (page: Page, id: string) => page.getByRole('row').filter({ hasText: id }).first();
async function openList(page: Page) {
  await page.goto('/my-tickets');
  await page.getByRole('row').nth(1).waitFor({ timeout: 20000 });
  await page.getByPlaceholder('Search by ticket,PM, or project').fill(TICKET);
  await rowOf(page, TICKET).waitFor();
}
const ownerCell = (page: Page, id: string) => rowOf(page, id).locator('td').nth(5);

test.describe.serial('@regression SI4-T1619 Allocation Owner', () => {
  let ownerA = '';
  let ownerB = '';

  test('TC-ALCOWN-001 PMO/Admin assigns owner: popup, Save gating, toast, column, details page', async ({ primaryPage: page }) => {
    await openList(page);
    await ownerCell(page, TICKET).click();
    const dlg = page.getByRole('dialog');
    await expect(dlg.getByText('Assign Allocation Owner')).toBeVisible();
    await expect(dlg.getByText(TICKET)).toBeVisible();
    await expect(dlg.getByRole('button', { name: 'Remove Owner' })).toHaveCount(0);
    await expect(dlg.getByRole('button', { name: 'Save' })).toBeDisabled();
    await dlg.getByRole('combobox').click();
    const opts = page.getByRole('option');
    await expect(opts.first()).toBeVisible();
    const names = await opts.allInnerTexts();
    expect(names.length).toBeGreaterThan(1);
    ownerA = names[0].trim().split('\n')[0];
    ownerB = names[1].trim().split('\n')[0];
    await opts.first().click();
    await expect(dlg.getByRole('button', { name: 'Save' })).toBeEnabled();
    await dlg.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Allocation owner updated')).toBeVisible();
    await expect(dlg).toBeHidden();
    await expect(ownerCell(page, TICKET)).toContainText(ownerA); // no manual refresh
    await rowOf(page, TICKET).getByRole('link', { name: TICKET }).or(rowOf(page, TICKET).getByText(TICKET)).first().click();
    await expect(page.getByText(/Allocation Owner:?/).first()).toBeVisible();
    await expect(page.locator('body')).toContainText(ownerA);
  });

  test('TC-ALCOWN-002 change A→B: title, Remove Owner shown', async ({ primaryPage: page }) => {
    await openList(page);
    await ownerCell(page, TICKET).click();
    const dlg = page.getByRole('dialog');
    await expect(dlg.getByText('Change Allocation Owner')).toBeVisible();
    await expect(dlg.getByRole('button', { name: 'Remove Owner' })).toBeVisible();
    await expect(dlg.getByRole('button', { name: 'Save' })).toBeDisabled();
    await dlg.getByRole('combobox').click();
    await page.getByRole('option', { name: new RegExp(ownerB) }).first().click();
    await dlg.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Allocation owner updated')).toBeVisible();
    await expect(ownerCell(page, TICKET)).toContainText(ownerB);
  });

  test('TC-ALCOWN-003 Cancel makes no change, Remove Owner → Unassigned', async ({ primaryPage: page }) => {
    await openList(page);
    await ownerCell(page, TICKET).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(ownerCell(page, TICKET)).toContainText(ownerB);
    await ownerCell(page, TICKET).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Remove Owner' }).click();
    await expect(page.getByText('Allocation owner removed')).toBeVisible();
    await expect(ownerCell(page, TICKET)).toContainText('Unassigned');
  });

  test('TC-ALCOWN-004 Approved / Closed tickets: popup does not open', async ({ primaryPage: page }) => {
    await page.goto('/my-tickets');
    await page.getByRole('row').nth(1).waitFor({ timeout: 20000 });
    for (const id of LOCKED) {
      await page.getByPlaceholder('Search by ticket,PM, or project').fill(id);
      await rowOf(page, id).waitFor();
      await ownerCell(page, id).click();
      await expect(page.getByRole('dialog')).toHaveCount(0);
    }
  });

  test('TC-ALCOWN-005 Interview Allocation tab has no owner column', async ({ primaryPage: page }) => {
    await page.goto('/my-tickets');
    await page.getByRole('tab', { name: 'Interview Allocation' }).click();
    await page.getByRole('row').first().waitFor();
    await expect(page.locator('th', { hasText: 'Allocation Owner' })).toHaveCount(0);
  });

  for (const role of ['pmPage', 'csmPage', 'tmPage', 'emPage'] as const) {
    test(`TC-ALCOWN-00${{ pmPage: 6, csmPage: 7, tmPage: 8, emPage: 9 }[role]} ${role}: owner visible, read-only`, async ({ pmPage, csmPage, tmPage, emPage }) => {
      const page = { pmPage, csmPage, tmPage, emPage }[role];
      await page.goto('/my-tickets');
      const hdr = page.locator('th', { hasText: 'Allocation Owner' });
      if (!(await hdr.count())) {
        await page.waitForTimeout(3000);
        test.skip(!(await page.getByRole('row').count()), `${role} sees no tickets list`);
      }
      await expect(hdr).toBeVisible();
      const cell = page.getByRole('row').nth(1).locator('td').nth(5);
      await cell.click();
      await expect(page.getByRole('dialog')).toHaveCount(0);
    });
  }
});
