// TC-EMPGOL-233/234/237/238 — relocation (2026-09-22) performance pass. Measured budgets are
// generous on purpose (this documents the current, poor baseline rather than a tight SLA) — see
// docs/findings/2026-09-22-goals-module-relocation-review.md section 3.
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

test.describe('Goals — Performance (Relocation 2026-09-22)', () => {
  test('TC-EMPGOL-233 PERFORMANCE — the Admin Goals landing takes ~26 seconds to reach even its empty state @performance', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    const employeePageRequests: number[] = [];
    page.on('response', r => {
      const m = r.url().match(/\/api\/v1\/employees\?page=(\d+)/);
      if (m) employeePageRequests.push(parseInt(m[1], 10));
    });
    const start = Date.now();
    await page.goto('/employee/goals', { waitUntil: 'domcontentloaded' });
    await goalsPage.waitForGoalsScreenLoaded();
    await expect(goalsPage.selectDepartmentEmptyState.or(goalsPage.activeTabPanel.getByText('Total Employees'))).toBeVisible({ timeout: 45_000 });
    const elapsedSeconds = (Date.now() - start) / 1000;
    // Documents the current baseline — flag if it regresses further, and treat any DROP below a
    // few seconds as a sign the client-side employee-roster walk (below) was fixed server-side.
    expect(elapsedSeconds, `landing took ${elapsedSeconds.toFixed(1)}s — if this is now fast, the client-side roster walk was likely fixed; please update this case`).toBeGreaterThan(3);
    expect(employeePageRequests.length, 'no /employees?page=N walk observed — defect no longer reproduces, please update this case').toBeGreaterThan(1);
  });

  test('TC-EMPGOL-234 PERFORMANCE — selecting a department triggers many sequential employee-goals page fetches @performance', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    const employeeGoalsPageRequests: number[] = [];
    page.on('response', r => {
      const m = r.url().match(/\/api\/v1\/employee-goals\?page=(\d+)/);
      if (m) employeeGoalsPageRequests.push(parseInt(m[1], 10));
    });
    const start = Date.now();
    await goalsPage.selectDashboardDepartment('QA');
    await expect(goalsPage.activeTabPanel.getByText('Total Employees')).toBeVisible({ timeout: 30_000 });
    const elapsedSeconds = (Date.now() - start) / 1000;
    expect(employeeGoalsPageRequests.length, 'no /employee-goals?page=N walk observed for one department select — defect no longer reproduces, please update this case').toBeGreaterThan(1);
    expect(elapsedSeconds, `department select took ${elapsedSeconds.toFixed(1)}s`).toBeGreaterThan(1);
  });

  test('TC-EMPGOL-237 BUG — Employee Goals renders every employee row at once with no pagination @performance', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const rowCount = await goalsPage.getEmployeeGoalsRowCount();
    const footerText = (await page.locator('body').innerText()).match(/Showing\s+\d+\s*-\s*\d+\s+of\s+\d+\s+results?/i);
    expect(rowCount, 'row count unexpectedly small for the full Admin scope').toBeGreaterThan(500);
    expect(footerText, 'a pagination footer now exists — defect no longer reproduces, please update this case').toBeNull();
  });

  test('TC-EMPGOL-238 PERFORMANCE — the Employee Goals tab takes a long time to paint its first row @performance', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    const start = Date.now();
    await goalsPage.selectTab('employee-goals');
    await goalsPage.employeeGoalsTable().locator('tbody tr').first().waitFor({ state: 'visible', timeout: 60_000 });
    const elapsedSeconds = (Date.now() - start) / 1000;
    expect(elapsedSeconds, `first row painted in ${elapsedSeconds.toFixed(1)}s`).toBeGreaterThan(2);
  });
});
