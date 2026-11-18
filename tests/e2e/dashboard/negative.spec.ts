import { test, expect } from '../../fixtures/auth';
import { DashboardPage } from '../../page-objects/dashboard/dashboard.page';

// TC-DASH-018..023 — invalid inputs, broken preconditions, and the confirmed DEF-DASH-001
// Employee-access defect (see reports/requirements/req-2026-09-02-DASH-doc.json confirmedDefects[]).
test.describe('Dashboard — Negative', () => {
  test('TC-DASH-018 Dashboard API failure shows a user-friendly error state, not a blank screen @negative', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.mockDashboardApiFailure(500);
    await dashboardPage.navigateToDashboard();

    const bodyText = (await page.locator('body').textContent().catch(() => '')) ?? '';
    expect(bodyText.trim().length, 'Page body is completely blank after a mocked 500').toBeGreaterThan(0);
    expect(bodyText).not.toMatch(/at\s+\S+\.(ts|js):\d+|stack trace/i);
  });

  test('TC-DASH-019 Dashboard with zero data in scope shows an empty state, not an error @negative', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToDashboard();
    const applied = await dashboardPage.applyCustomDateRange('2030-01-01', '2030-01-07');
    if (!applied) test.skip(true, 'Custom Date Range control not found — control shape unconfirmed against live app');

    await expect(dashboardPage.dashboardHeading).toBeVisible();
    const errorAlert = page.getByRole('alert').filter({ hasText: /error|exception|crash/i });
    await expect(errorAlert).not.toBeVisible();
  });

  test('TC-DASH-020 Custom Date Range with end date before start date is rejected or auto-corrected @negative @boundary', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToDashboard();

    let observedInvalidRequest = false;
    page.on('request', req => {
      if (/dashboard|allocation/i.test(req.url()) && /start=2026-06-30.*end=2026-01-01|start.*>.*end/i.test(req.url())) {
        observedInvalidRequest = true;
      }
    });

    const applied = await dashboardPage.applyCustomDateRange('2026-06-30', '2026-01-01');
    if (!applied) test.skip(true, 'Custom Date Range control not found — control shape unconfirmed against live app');

    expect(observedInvalidRequest, 'App issued a request with start > end instead of rejecting/correcting the range').toBe(false);
  });

  test('TC-DASH-021 Employee role: direct navigation to /dashboard is blocked (CONFIRMED DEFECT DEF-DASH-001) @negative @security', async ({ empPage }) => {
    const dashboardPage = new DashboardPage(empPage);
    await dashboardPage.navigateToDashboard();

    // CONFIRMED DEFECT (2026-09-02): FRD Section 3/10 lists Employee as an accessible role
    // ("own allocations only"), but the live app redirects to /unauthorized ("Access Denied").
    // This assertion validates the FRD's stated requirement — a FAIL here confirms the known
    // defect (DEF-DASH-001), it is not an automation bug.
    const unauthorized = await dashboardPage.isUnauthorized();
    expect(unauthorized, 'DEF-DASH-001: Employee role is blocked from /dashboard, contradicting FRD Section 3/10 which lists Employee as an accessible role').toBe(false);
  });

  test('TC-DASH-022 Employee role: "Dashboard" link is entirely absent from the sidebar (CONFIRMED DEFECT DEF-DASH-001) @negative @security', async ({ empPage }) => {
    const dashboardPage = new DashboardPage(empPage);
    // Land on a route the Employee role CAN reach so the sidebar itself renders.
    await empPage.goto('/employee', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const labels = await dashboardPage.getSidebarItemLabels();

    // CONFIRMED DEFECT (2026-09-02): see TC-DASH-021 — a FAIL here confirms DEF-DASH-001.
    expect(labels.some(l => /^dashboard$/i.test(l)), `DEF-DASH-001: 'Dashboard' link missing from Employee sidebar. Got: ${JSON.stringify(labels)}`).toBe(true);
  });

  test('TC-DASH-023 Rapid double-click on a period filter option does not leave the KPI cards in a stale/conflicting state @negative @regression', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToDashboard();
    const dialog = await dashboardPage.openPeriodFilter();
    const monthBtn = dialog.getByRole('button', { name: 'This Month', exact: true });
    await monthBtn.dblclick({ delay: 20 }).catch(() => {});
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

    await expect(dashboardPage.periodFilterBtn).toHaveText(/this month/i);
    const allocation = await dashboardPage.getTotalAllocationHours();
    expect(allocation, 'Total Allocation KPI failed to settle to a numeric value after a rapid double-click').not.toBeNull();
  });
});
