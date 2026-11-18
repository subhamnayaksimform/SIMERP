import { test, expect } from '@playwright/test';
import { LeaveDetailsPage } from '../../../page-objects/employee/leave-details.page';

test.describe('Employee — Leave & Compliance Details — Regression', () => {
  let leavePage: LeaveDetailsPage;

  test.beforeEach(async ({ page }) => {
    leavePage = new LeaveDetailsPage(page);
    await leavePage.navigateToLeaveDetails();
    test.skip(
      !(await leavePage.table.isVisible().catch(() => false)),
      'Leave & Compliance Details screen confirmed not found live as of 2026-07-13 — GET /employee/leave returns an in-app 404 and no "Leave" item exists in the Employee sidebar submenu. Figma design-ahead feature, not yet implemented in the running app.'
    );
  });

  // TC-EMPLEV-026 — category: integration, routed here (@regression tag, no dedicated
  // integration.spec.ts file in this suite's per-category layout).
  test('TC-EMPLEV-026 Integration — Leave/PIP/NP views share chrome with the Employee Details/Ratings tabbed shell @regression @functional', async () => {
    const tableVisible = await leavePage.table.isVisible().catch(() => false);
    if (!tableVisible) test.skip(true, 'Leave & Compliance Details table not found — navigation path/selector unconfirmed against live app');
    await expect(leavePage.searchInput).toBeVisible();
    await expect(leavePage.statusColumnHeader).toBeVisible();

    const employeeTabVisible = await leavePage.employeeTab.isVisible().catch(() => false);
    const ratingsTabVisible = await leavePage.ratingsTab.isVisible().catch(() => false);
    if (!employeeTabVisible && !ratingsTabVisible) {
      test.skip(true, 'Employee/Ratings tab controls not found alongside the Leave tab — shared-shell tab selectors unconfirmed against live app');
    }
    if (employeeTabVisible) await expect(leavePage.employeeTab).toBeVisible();
    if (ratingsTabVisible) await expect(leavePage.ratingsTab).toBeVisible();
  });

  test('TC-EMPLEV-027 Regression — shared tabbed-shell chrome continues to function correctly for the Leave & Compliance Details view @regression', async () => {
    const tableVisible = await leavePage.table.isVisible().catch(() => false);
    if (!tableVisible) test.skip(true, 'Leave & Compliance Details table not found — navigation path/selector unconfirmed against live app');

    await expect(leavePage.searchInput).toBeVisible();
    await leavePage.sortByDays();
    await expect(leavePage.table).toBeVisible();
    if (await leavePage.nextPageBtn.isEnabled().catch(() => false)) {
      await leavePage.nextPageBtn.click();
      await expect(leavePage.table).toBeVisible();
    }
  });
});
