// TC-UTLPRI-055..061 — role enforcement for BR-11 / FRD §6.3: only TM, EM and PMO (plus Admin,
// who reaches every screen) may open Utilization Priority and set UP (Manual); everyone else must
// be refused. Confirmed live 2026-09-04: denied roles are redirected to /unauthorized ("Access
// Denied — You don't have permission to view this page") and never see the sidebar entry.
import { test, expect, Page } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';

async function expectFullAccess(page: Page, role: string): Promise<void> {
  const up = new UtilizationPriorityPage(page);
  expect(await up.isAccessible(), `${role} was denied access to Utilization Priority`).toBe(true);
  await expect(page).not.toHaveURL(/unauthorized/);
  await expect(page.getByRole('link', { name: 'Utilization Priority' })).toBeVisible();

  const combobox = page.getByRole('combobox', { name: /^Set manual priority for / }).first();
  await expect(combobox, `${role} cannot see the UP (Manual) control`).toBeVisible();
  await expect(combobox, `${role} sees UP (Manual) as read-only`).toBeEnabled();
}

async function expectDenied(page: Page, role: string): Promise<void> {
  const up = new UtilizationPriorityPage(page);
  const reachable = await up.isAccessible();
  expect(reachable, `${role} reached the Utilization Priority grid but BR-11 restricts it to TM/EM/PMO`).toBe(false);
  await expect(page.getByRole('heading', { name: 'Access Denied' })
    .or(page.getByText(/You don't have permission/i)).first()).toBeVisible();
  expect(await page.getByRole('combobox', { name: /^Set manual priority for / }).count(),
    `${role} was served UP (Manual) controls on a page they may not view`).toBe(0);
}

test.describe('Utilization Priority — Role enforcement', () => {
  test('TC-UTLPRI-055 BR-11 — a PMO user can view the ranking and edit UP (Manual) @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-pmo.json' });
    const page = await context.newPage();
    await expectFullAccess(page, 'PMO');
    await context.close();
  });

  test('TC-UTLPRI-056 BR-11 — a Team Manager can view the ranking and edit UP (Manual) @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-tm.json' });
    const page = await context.newPage();
    await expectFullAccess(page, 'TM');
    await context.close();
  });

  test('TC-UTLPRI-057 BR-11 — an Engineering Manager can view the ranking and edit UP (Manual) @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-em.json' });
    const page = await context.newPage();
    await expectFullAccess(page, 'EM');
    await context.close();
  });

  test('TC-UTLPRI-058 BR-11 — a base Employee is refused the Utilization Priority screen @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-emp.json' });
    const page = await context.newPage();
    await expectDenied(page, 'Employee');
    await context.close();
  });

  test('TC-UTLPRI-059 BR-11 — a Project Manager is refused the Utilization Priority screen @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-pm.json' });
    const page = await context.newPage();
    await expectDenied(page, 'PM');
    await context.close();
  });

  test('TC-UTLPRI-060 BR-11 — a CSM is refused the Utilization Priority screen @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-csm.json' });
    const page = await context.newPage();
    await expectDenied(page, 'CSM');
    await context.close();
  });

  test('TC-UTLPRI-061 An unauthorized role is not shown the Utilization Priority nav entry at all @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/fixtures/storageState-emp.json' });
    const page = await context.newPage();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
    expect(await page.getByRole('link', { name: 'Utilization Priority' }).count(),
      'a denied role is still advertised a link to a screen they cannot open').toBe(0);
    await context.close();
  });

  test('TC-UTLPRI-062 The screen is not reachable without an authenticated session @security', async ({ browser }) => {
    const context = await browser.newContext({ storageState: { cookies: [], origins: [] } });
    const page = await context.newPage();
    await page.goto(UtilizationPriorityPage.ROUTE, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
    expect(await page.getByRole('table').isVisible({ timeout: 8_000 }).catch(() => false),
      'the ranking rendered for an anonymous visitor').toBe(false);
    await context.close();
  });
});
