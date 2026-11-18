import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — smoke (FRD v1.1). One pass through each placement as the role it is
 * built for: Admin (profile card, list column, dashboard), CSM (project table), Employee (own card).
 */
test.describe('Employee — Working Location — Smoke', () => {
  test('TC-EMPWLC-001 @smoke Admin sees the Working Location card, list column and dashboard', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);

    await wl.gotoOwnProfile();
    await expect(wl.section).toBeVisible();
    await expect(wl.section).toContainText(/Data as of \d{1,2} [A-Z][a-z]{2} \d{4}/);
    expect(await wl.readDays(wl.section)).toHaveLength(7);

    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await expect(wl.columnHeader).toBeVisible();
      await expect(wl.cellButtons().first()).toBeVisible();
    } finally {
      await wl.setColumn(was);
    }

    await wl.gotoDashboard();
    await expect(wl.pageHeading('Working Location')).toBeVisible();
    await expect(primaryPage.getByRole('heading', { name: 'Departments' })).toBeVisible();
    await expect(primaryPage.getByRole('heading', { name: 'Employees' })).toBeVisible();
  });

  test('TC-EMPWLC-002 @smoke CSM sees a Working Location column on their project\'s Active Allocations table', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    await wl.gotoFirstProjectDetail();
    await expect(wl.columnHeader).toBeVisible();
    await expect(wl.cellButtons().first()).toBeVisible();
  });

  test('TC-EMPWLC-054 @smoke Employee sees their own Working Location card', async ({ empPage }) => {
    const wl = new WorkingLocationPage(empPage);
    await wl.gotoOwnProfile();
    await expect(wl.section).toBeVisible();
    expect(Object.keys(await wl.readWindows(wl.section))).toEqual(['15 days', '30 days', '90 days', 'Overall']);
  });
});
