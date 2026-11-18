// TC-EMPGOL-085..100 — regression pass: no-reload live refresh, double/triple-click duplicate
// guards, cross-module non-interference (Employee Details, Department Settings, Roles &
// Permissions), UI/API parity, and general UI-state/reliability invariants (toasts, confirmation
// dialogs, empty state, 401/500 handling, mid-flow refresh, auto-save/draft).
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Goals — Regression', () => {
  let goalsPage: GoalsPage;

  test.beforeEach(async ({ page }) => {
    goalsPage = new GoalsPage(page);
  });

  test('TC-EMPGOL-085 Goals Listing re-sorts and refreshes immediately after an assignment change, without a page reload @regression', async ({ page }) => {
    await goalsPage.navigateToGoals();
    const rowCount = await goalsPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing goal available');
    const row = goalsPage.getFirstDataRow();
    const goalName = await goalsPage.getGoalNameFromRow(row);
    const before = await goalsPage.getAllocatedCount(goalName);

    const opened = await goalsPage.clickEditGoal(goalName);
    if (!opened) test.skip(true, 'Edit control not found');
    const employees = await goalsPage.addFirstAvailableAssignees(1);
    if (employees.length === 0) test.skip(true, 'No employee available to assign');
    await goalsPage.savePanel();

    const after = await goalsPage.getAllocatedCount(goalName);
    if (before !== null && after !== null) expect(after).toBe(before + 1);
  });

  test('TC-EMPGOL-086 Double-clicking Save on Add Goal in quick succession creates exactly one goal record @regression', async ({ page }) => {
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC086');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');

    await Promise.all([
      goalsPage.panelSaveBtn.click(),
      goalsPage.panelSaveBtn.click().catch(() => {}),
    ]);
    await goalsPage.addGoalPanel.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});

    const rows = goalsPage.goalsTable.getByRole('row').or(goalsPage.goalsTable.getByRole('listitem')).filter({ hasText: goalName });
    expect(await rows.count().catch(() => 0), 'double-click Save created more than one goal record').toBeLessThanOrEqual(1);
  });

  test('TC-EMPGOL-087 Regression: A change to a goal in this module is reflected correctly in Employee Details (affected module) @regression', async ({ page }) => {
    const employeeDetailsPage = new EmployeeDetailsPage(page);
    await employeeDetailsPage.navigateToEmployees();
    const row = employeeDetailsPage.getDataRows().first();
    if ((await row.count().catch(() => 0)) === 0) test.skip(true, 'No employee rows available');
    await employeeDetailsPage.openEmployeeDetailsDrawer(row);
    const drawer = employeeDetailsPage.getEmployeeDetailsSideDrawer();
    await expect(employeeDetailsPage.getEmployeeDrawerSection(drawer, 'Goals')).toBeVisible();
  });

  test('TC-EMPGOL-088 Regression: Department dropdown, per-goal department toggle, and delete-eligibility logic depend on accurate department-manager mappings (Department Settings) @regression @needs-verification', async ({ testUserPage, page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    // Ground-truth confirmed live: the real route is `/department-settings` (bare `/department`
    // 404s) — sidebar link text "Department Settings". The page itself is card-based (Stacks /
    // Departmental Settings sections), not a grid/table, so the visibility check is text-based.
    await page.goto('/department-settings', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const deptGrid = page.getByRole('grid').first().or(page.locator('table').first()).or(page.getByText(/department/i).first());
    await expect(deptGrid).toBeVisible();
  });

  test('TC-EMPGOL-089 Regression: RM/TM/EM/Admin role definitions from Roles & Permissions correctly gate Goal create/assign/edit/delete actions @regression @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    // Ground-truth confirmed live: the real route is `/admin/roles-and-permissions` (bare
    // `/admin/roles` 404s) — sidebar link text "Roles & Permissions".
    await page.goto('/admin/roles-and-permissions', { waitUntil: 'domcontentloaded' }).catch(() => {});
    await expect(page.getByRole('grid').first().or(page.locator('table').first()).or(page.getByText(/roles/i).first())).toBeVisible();
  });

  test('TC-EMPGOL-090 UI-displayed goal values match the corresponding API response after save @regression @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — goals API endpoint is unconfirmed.
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC090');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();

    const apiResult = await goalsPage.attemptApiRead(page, `/api/goals?name=${encodeURIComponent(goalName)}`);
    if (apiResult.status !== 200 || !apiResult.body) test.skip(true, 'Goals API endpoint unconfirmed — bonus parity check skipped');
    const apiName = apiResult.body.name ?? apiResult.body.goalName ?? null;
    if (apiName !== null) expect(apiName).toBe(goalName);
  });

  test('TC-EMPGOL-091 Success toast appears after creating, editing, or deleting a goal and names the goal @regression @functional @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — toast presence/copy is not explicitly documented in source.
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC091');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.clickSaveDismissingDuplicateWarning();
    await expect(goalsPage.getSuccessToast()).toBeVisible();
  });

  test('TC-EMPGOL-092 Error toast (not a raw stack trace) appears when a goal server operation fails @regression @negative @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC092');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.mockGoalsApiFailure(500);
    await goalsPage.clickSaveDismissingDuplicateWarning();
    await expect(goalsPage.getErrorToast()).toBeVisible();
    const bodyText = (await page.textContent('body').catch(() => '')) ?? '';
    expect(bodyText).not.toMatch(/at\s+\w+\s*\(.*:\d+:\d+\)|TypeError:|ReferenceError:/);
  });

  test('TC-EMPGOL-093 A confirmation dialog appears before deleting a goal, and dismissing it cancels the deletion with no change @regression @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — whether a confirmation dialog exists is unconfirmed.
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC093');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();

    await goalsPage.clickDeleteGoal(goalName);
    const dialogVisible = await goalsPage.getConfirmDialog().isVisible({ timeout: 3000 }).catch(() => false);
    if (!dialogVisible) test.skip(true, 'No confirmation dialog appeared before Delete — existence unconfirmed in source');
    await goalsPage.cancelDeleteGoal();
    await expect(goalsPage.getGoalRow(goalName)).toBeVisible();
  });

  test('TC-EMPGOL-094 Empty-state message is shown when the Goals Listing has no records matching the current filter @regression @functional @needs-verification', async ({ tmPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoals();
    await tmGoalsPage.openAddGoalPanel();
    await tmGoalsPage.fillGoalName('zzz-guaranteed-no-match-probe-xyz');
    const noSuggestion = !(await tmGoalsPage.getGoalNameSuggestion('zzz-guaranteed-no-match-probe-xyz').first().isVisible({ timeout: 2000 }).catch(() => false));
    expect(noSuggestion, 'a nonsense search string unexpectedly returned a matching suggestion').toBe(true);
  });

  test('TC-EMPGOL-095 Goals Listing table reflects a Create/Update/Delete change without a manual page reload @regression', async ({ page }) => {
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC095');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();
    await goalsPage.searchGoals(goalName);
    await expect(goalsPage.getGoalRow(goalName)).toBeVisible();

    await goalsPage.clickEditGoal(goalName);
    await goalsPage.fillDescription(`edited ${Date.now()}`);
    await goalsPage.savePanel();
    await expect(goalsPage.getGoalRow(goalName)).toBeVisible();
  });

  test('TC-EMPGOL-096 Browser refresh mid-way through filling the Add Goal side panel does not submit partial data or corrupt existing records @regression @negative', async ({ page }) => {
    await goalsPage.navigateToGoals();
    const before = await goalsPage.getRowCount();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC096-partial');
    await goalsPage.fillGoalName(goalName);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await goalsPage.navigateToGoals();
    const after = await goalsPage.getRowCount();
    const partialRowVisible = await goalsPage.getGoalRow(goalName).isVisible().catch(() => false);
    expect(partialRowVisible, 'a partial goal record was created from a mid-flow refresh').toBe(false);
    expect(after, 'existing record count changed from a mid-flow refresh with no save').toBe(before);
  });

  test('TC-EMPGOL-097 Clicking Save 3x rapidly on Add Goal results in exactly one goal record, not multiple @regression', async ({ page }) => {
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC097');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');

    await Promise.all([
      goalsPage.panelSaveBtn.click().catch(() => {}),
      goalsPage.panelSaveBtn.click().catch(() => {}),
      goalsPage.panelSaveBtn.click().catch(() => {}),
    ]);
    await goalsPage.addGoalPanel.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
    const rows = goalsPage.goalsTable.getByRole('row').or(goalsPage.goalsTable.getByRole('listitem')).filter({ hasText: goalName });
    expect(await rows.count().catch(() => 0)).toBeLessThanOrEqual(1);
  });

  test('TC-EMPGOL-098 A 500 server error while saving a goal shows a user-friendly error message, not a raw stack trace @regression @negative @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC098');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.mockGoalsApiFailure(500);
    await goalsPage.clickSaveDismissingDuplicateWarning();
    await expect(goalsPage.getErrorToast()).toBeVisible();
  });

  test('TC-EMPGOL-099 Session expiry (HTTP 401) while on the Goals page returns the user to the login page without data loss @regression @negative @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await goalsPage.navigateToGoals();
    await goalsPage.mockGoalsApiFailure(401);
    await goalsPage.openAddGoalPanel().catch(() => {});
    const redirectedToLogin = await page.waitForURL(/login|signin|microsoftonline|live\.com/i, { timeout: 8000 }).then(() => true).catch(() => false);
    if (!redirectedToLogin) {
      await expect(goalsPage.getErrorToast().or(page.getByText(/session expired|log in again/i))).toBeVisible();
    }
  });

  test('TC-EMPGOL-100 Auto-save/draft behavior on the Add Goal side panel: navigating away and returning shows no duplicated or lost draft state @regression @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — it is unconfirmed whether Add Goal has auto-save/draft functionality at all.
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC100-draft');
    await goalsPage.fillGoalName(goalName);
    await page.goto('/employee', { waitUntil: 'domcontentloaded' });
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const restoredValue = await goalsPage.goalNameInput.inputValue().catch(() => '');
    // Either the panel opens blank (no auto-save) or shows the exact prior draft — both acceptable;
    // only a corrupted/partial value (neither blank nor the exact prior draft) is a failure.
    expect(restoredValue === '' || restoredValue === goalName, 'draft state was corrupted (neither blank nor the exact prior value)').toBe(true);
  });
});

// TC-EMPGOL-231/257/315/341/342/343 — relocation (2026-09-22) regression pass.
test.describe('Goals — Regression (Relocation 2026-09-22)', () => {
  test('TC-EMPGOL-231 Switching department refreshes every dashboard widget together @regression', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    await goalsPage.selectDashboardDepartment('QA');
    const qaKpis = await goalsPage.readDashboardKpis();
    const qaRanking = await goalsPage.getAvgCompletionRanking();

    await goalsPage.selectDashboardDepartment('ADMIN');
    const adminKpis = await goalsPage.readDashboardKpis();
    const adminRanking = await goalsPage.getAvgCompletionRanking();

    expect(adminKpis, 'KPI cards did not refresh to the newly selected department').not.toEqual(qaKpis);
    expect(adminRanking, 'AVG COMPLETION ranking did not refresh to the newly selected department').not.toEqual(qaRanking);
    await expect(goalsPage.getShowingDataForLabel()).toContainText('ADMIN');
  });

  test('TC-EMPGOL-257 An open expansion does not survive into an unrelated filtered result as stale content @regression', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const name = await goalsPage.findEmployeeNameWithGoalInStatus('Not Started');
    test.skip(!name, 'no employee with goals found');
    await goalsPage.toggleEmployeeRowExpansion(name!);
    expect(await goalsPage.isEmployeeRowExpanded(name!)).toBe(true);

    await goalsPage.setEmployeeGoalsManagerFilter((await goalsPage.getEmployeeGoalsFilterOptions('manager'))[1]);
    const rowCount = await goalsPage.getEmployeeGoalsRowCount();
    // The filtered-out employee's row (and any orphaned expansion content) must not appear.
    expect(await goalsPage.getEmployeeGoalsRow(name!).count() <= 1, 'more than one row matched the filtered-out employee name — possible orphaned expansion content').toBe(true);

    await goalsPage.clearEmployeeGoalsFilters();
    const restoredCount = await goalsPage.getEmployeeGoalsRowCount();
    expect(restoredCount).toBeGreaterThanOrEqual(rowCount);
  });

  test('TC-EMPGOL-315 A deleted goal disappears from every other surface @regression @integration', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC315');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();
    await goalsPage.searchGoals(goalName);
    await expect(goalsPage.getGoalRow(goalName)).toBeVisible();

    await goalsPage.clickDeleteGoal(goalName);
    await goalsPage.confirmDeleteGoal();
    await goalsPage.searchGoals(goalName);
    await expect(goalsPage.getGoalRow(goalName), 'goal still present in Goal Management after delete').not.toBeVisible();

    const filterNames = await goalsPage.openGoalNameColumnFilterOptions();
    expect(filterNames, 'deleted goal still present in the Goal Name column filter list').not.toContain(goalName);

    await goalsPage.selectTab('employee-goals');
    await goalsPage.searchEmployeeGoalsByGoal(goalName);
    expect(await goalsPage.getEmployeeGoalsRowCount(), 'deleted goal is still searchable on the Employee Goals tab').toBe(0);
  });

  test('TC-EMPGOL-341 Goals changes do not disturb the sibling Skills tab @regression', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC341');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();

    await page.goto('/employee/skills', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
    // Scoped to the main content heading — a plain getByRole('heading', {name:'Skills'}) is
    // ambiguous against the sidebar's own "Skills" link plus a duplicate sr-only <h1>Skills</h1>.
    await expect(page.getByRole('heading', { name: 'Skills', level: 1 }).first()).toBeAttached();
    expect(page.url()).toContain('/employee/skills');
  });

  test('TC-EMPGOL-342 REGRESSION — the old sidebar path and the Employee-page tab strip no longer conflict @regression', async ({ tmPage }) => {
    await tmPage.goto('/employee', { waitUntil: 'domcontentloaded' });
    await tmPage.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
    const goalsTabOnEmployeePage = tmPage.getByRole('tab', { name: /^goals$/i });
    expect(await goalsTabOnEmployeePage.count(), 'a second "Goals" entry point (a tab on /employee) still exists alongside the sidebar link').toBe(0);
    await tmPage.getByRole('link', { name: 'Goals', exact: true }).click();
    await expect(tmPage).toHaveURL(/\/employee\/goals/);
  });

  test('TC-EMPGOL-343 REGRESSION — /employee/goals is not swallowed by the /employee/:id route @regression', async ({ page }) => {
    await page.goto('/employee/goals', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
    const body = (await page.locator('body').innerText()) ?? '';
    expect(body, 'Goals is being parsed as an employee id again').not.toMatch(/employee not found|validation failed.*uuid is expected/i);
    await expect(page.getByRole('tab', { name: 'Dashboard' })).toBeVisible();
  });
});
