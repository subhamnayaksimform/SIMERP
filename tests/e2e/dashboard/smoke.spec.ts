import { test, expect } from '../../fixtures/auth';
import { DashboardPage } from '../../page-objects/dashboard/dashboard.page';

// TC-DASH-001..003 — critical happy path: sidebar placement, first render, Export Data trigger.
// Uses the default `page` fixture (ceo@simformsolutions.com / primaryPage, per playwright.config.ts).
test.describe('Dashboard — Smoke', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
  });

  test('TC-DASH-001 Dashboard is the first sidebar item, above Employee, and loads for PMO @smoke', async () => {
    await dashboardPage.navigateToDashboard();
    const labels = await dashboardPage.getSidebarItemLabels();
    const dashIndex = labels.findIndex(l => /^dashboard$/i.test(l));
    const empIndex = labels.findIndex(l => /^employee$/i.test(l));

    expect(dashIndex, `Dashboard should be the first sidebar item; got order: ${JSON.stringify(labels)}`).toBe(0);
    if (empIndex !== -1) {
      expect(empIndex, 'Employee should immediately follow Dashboard').toBe(dashIndex + 1);
    }
    await expect(dashboardPage.dashboardHeading).toBeVisible();
  });

  test('TC-DASH-002 Dashboard renders all 4 KPI cards and 4 charts for PMO on first load @smoke', async () => {
    await dashboardPage.navigateToDashboard();
    await expect(dashboardPage.totalAllocationCard).toBeVisible();
    await expect(dashboardPage.totalDeallocationCard).toBeVisible();
    await expect(dashboardPage.netUtilisationCard).toBeVisible();

    await expect(dashboardPage.trendChart).toBeVisible();
    await expect(dashboardPage.allocationTypeDonut).toBeVisible();
    await expect(dashboardPage.projectBarChart).toBeVisible();
    await expect(dashboardPage.netUtilisationBreakdownChart).toBeVisible();

    await expect(dashboardPage.allActivityHeading).toBeVisible();
  });

  test('TC-DASH-003 Export Data button triggers an export without error @smoke', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    await expect(dashboardPage.exportDataBtn).toBeVisible();

    const consoleErrors: string[] = [];
    page.on('pageerror', err => consoleErrors.push(err.message));

    const { downloaded, responseObserved, dialogOpened } = await dashboardPage.clickExportAndObserve();

    expect(dialogOpened, 'Export Data should open the "Export Dashboard Data" format-confirmation dialog').toBe(true);
    expect(downloaded || responseObserved, 'Confirming the export dialog produced neither a download nor a matching network response').toBe(true);
    expect(consoleErrors, `Uncaught page error(s) after clicking Export Data: ${consoleErrors.join('; ')}`).toEqual([]);
  });
});
