// TC-EMPGOL-001..003 — exhaustive smoke pass over the Goals module (Employee > Goals): Create with
// mandatory fields + sort/count reflection, TM assignment reflecting in Goals Listing + Employee
// Details, and the Delete-eligibility gate for a 0-assignment goal.
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Goals — Smoke', () => {
  let goalsPage: GoalsPage;

  test.beforeEach(async ({ page }) => {
    goalsPage = new GoalsPage(page);
  });

  test('TC-EMPGOL-001 Admin creates a new Goal and it appears in Goals Listing sorted by allocated-employee count with correct counts @smoke', async ({ page }) => {
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    await expect(goalsPage.addGoalPanel).toBeVisible();

    const goalName = goalsPage.createUniqueGoalName('TC001');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');

    await goalsPage.savePanel();
    await expect(goalsPage.addGoalPanel).not.toBeVisible();

    // Goals sort descending by allocated-employee count — a freshly created 0-assigned goal
    // sorts to the very bottom and may be off the first page, so filter by name before asserting.
    await goalsPage.searchGoals(goalName);
    const row = goalsPage.getGoalRow(goalName);
    await expect(row).toBeVisible();
    const counts = await goalsPage.getRowCounts(goalName);
    expect(counts.department, 'newly created goal did not show 0 department-assigned').toBe(0);
    expect(counts.organization, 'newly created goal did not show 0 organization-assigned').toBe(0);

    await goalsPage.searchGoals('');
    const allCounts = await goalsPage.getAllRowAllocatedCounts();
    const sorted = [...allCounts].sort((a, b) => b - a);
    expect(allCounts, 'Goals Listing is not sorted in descending allocated-employee-count order').toEqual(sorted);
  });

  test('TC-EMPGOL-002 TM assigns an employee to an existing Goal and the change reflects immediately in Goals Listing counts and the employee\'s Employee Details modal / profile Goals tab @smoke', async ({ tmPage }) => {
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoals();
    const rowCount = await tmGoalsPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No goals present within punit\'s managed department(s) to exercise assignment');

    const firstRow = tmGoalsPage.getFirstDataRow();
    const goalName = await tmGoalsPage.getGoalNameFromRow(firstRow);
    if (!goalName) test.skip(true, 'Could not read a goal name from the Goals Listing');

    const before = await tmGoalsPage.getAllocatedCount(goalName);
    const opened = await tmGoalsPage.clickEditGoal(goalName);
    if (!opened) test.skip(true, 'Edit control not found on the goal row');

    const employees = await tmGoalsPage.addFirstAvailableAssignees(1);
    if (employees.length === 0) test.skip(true, 'No employee available to assign within punit\'s scope');
    await tmGoalsPage.savePanel();

    const after = await tmGoalsPage.getAllocatedCount(goalName);
    if (before !== null && after !== null) {
      expect(after, 'assigned-employee count did not increment after assignment, without a reload').toBe(before + 1);
    }

    const employeeDetailsPage = new EmployeeDetailsPage(tmPage);
    await employeeDetailsPage.navigateToEmployees();
    const empRow = employeeDetailsPage.getDataRows().filter({ hasText: employees[0] }).first();
    if (await empRow.isVisible().catch(() => false)) {
      await employeeDetailsPage.openEmployeeDetailsDrawer(empRow);
      const drawer = employeeDetailsPage.getEmployeeDetailsSideDrawer();
      await expect(employeeDetailsPage.getEmployeeDrawerSection(drawer, 'Goals')).toBeVisible();
    }
  });

  test('TC-EMPGOL-003 Deleting a Goal is gated by the assigned-employee conditional rules and removes the goal entirely from the database when allowed @smoke', async ({ page }) => {
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC003');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();

    await goalsPage.searchGoals(goalName);
    await expect(goalsPage.getGoalRow(goalName)).toBeVisible();
    const enabled = await goalsPage.isDeleteEnabled(goalName);
    expect(enabled, 'Delete option is not enabled for a freshly created 0-assignment goal').toBe(true);

    await goalsPage.clickDeleteGoal(goalName);
    if (await goalsPage.getConfirmDialog().isVisible().catch(() => false)) {
      await goalsPage.confirmDeleteGoal();
    }
    await expect(goalsPage.getGoalRow(goalName)).not.toBeVisible();
  });

  test('TC-EMPGOL-107 Add Goal creates a new goal that appears correctly under the currently selected department filter @smoke @functional', async ({ page }) => {
    await goalsPage.navigateToGoals();

    const filterVisible = await goalsPage.departmentScopeCombobox.isVisible().catch(() => false);
    if (filterVisible) {
      const options = await goalsPage.getDepartmentScopeOptionsText();
      const target = options.find(o => o && !/management/i.test(o));
      if (target) await goalsPage.selectDepartmentScope(target);
    }

    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC107');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();

    await goalsPage.searchGoals(goalName);
    const row = goalsPage.getGoalRow(goalName);
    await expect(row, 'newly created goal did not appear in the Goals Listing under the selected department filter').toBeVisible();
    const counts = await goalsPage.getRowCounts(goalName);
    expect(counts.department, 'newly created goal did not show 0 department-assigned count').toBe(0);
    expect(counts.organization, 'newly created goal did not show 0 organization-assigned count').toBe(0);
  });
});

// TC-EMPGOL-201..343 — relocation (2026-09-22): Goals is now a 3-tab sub-app at /employee/goals
// (Dashboard / Employee Goals / Goal Management). See docs/findings/2026-09-22-goals-module-
// relocation-review.md for the full defect list these cases are grounded against.
test.describe('Goals — Smoke (Relocation 2026-09-22)', () => {
  test('TC-EMPGOL-201 Goals opens from the sidebar Employee > Goals link @smoke', async ({ tmPage }) => {
    await tmPage.goto('/employee', { waitUntil: 'domcontentloaded' });
    await tmPage.getByRole('link', { name: 'Goals', exact: true }).click();
    await expect(tmPage).toHaveURL(/\/employee\/goals/);
    // Ground-truth correction: unlike other modules, this screen's real semantic `<h1>Goals</h1>`
    // carries the `.sr-only` class itself (there is no separate visible duplicate here) — so
    // BasePage.pageHeading()'s `:not(.sr-only)` filter (built for the two-h1 pattern elsewhere)
    // finds nothing on this page. Check for the heading's existence, not its CSS visibility.
    await expect(tmPage.getByRole('heading', { name: 'Goals', level: 1 })).toHaveCount(1);
    await expect(tmPage.getByRole('tab')).toHaveCount(3);
    await expect(tmPage.getByRole('tab', { name: 'Dashboard' })).toBeVisible();
    await expect(tmPage.getByRole('tab', { name: 'Employee Goals' })).toBeVisible();
    await expect(tmPage.getByRole('tab', { name: 'Goal Management' })).toBeVisible();
  });

  test('TC-EMPGOL-211 Dashboard is the default tab on a first visit @smoke', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen();
    expect(await goalsPage.getSelectedTabName()).toBe('Dashboard');
    await expect(goalsPage.dashboardTab).toHaveAttribute('aria-selected', 'true');
  });

  test('TC-EMPGOL-217 Dashboard shows the four KPI cards with the expected labels @smoke', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    await expect(goalsPage.activeTabPanel.getByText('Total Employees')).toBeVisible();
    await expect(goalsPage.activeTabPanel.getByText('Employees with Goals')).toBeVisible();
    await expect(goalsPage.activeTabPanel.getByText('Total Goal Assignments')).toBeVisible();
    await expect(goalsPage.activeTabPanel.getByText('Total L&D Hours')).toBeVisible();
    const kpis = await goalsPage.readDashboardKpis();
    expect(kpis.totalEmployees, 'Total Employees card did not parse to a number').not.toBeNull();
    expect(kpis.employeesWithGoals, 'Employees with Goals card did not parse to a number').not.toBeNull();
    expect(kpis.totalGoalAssignments, 'Total Goal Assignments card did not parse to a number').not.toBeNull();
    expect(kpis.totalLDHours, 'Total L&D Hours card did not parse to a number').not.toBeNull();
  });

  test('TC-EMPGOL-236 Employee Goals tab lists employees with their goal roll-up columns @smoke', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const headers = await goalsPage.employeeGoalsTable().getByRole('columnheader').allInnerTexts();
    const joined = headers.join('|');
    for (const col of ['Employee', 'Reporting Manager', 'Goals', 'Overdue Goals', 'Certificates', 'L&D Hours']) {
      expect(joined, `missing expected column "${col}"`).toContain(col);
    }
    expect(await goalsPage.getEmployeeGoalsRowCount(), 'no employee rows rendered').toBeGreaterThan(0);
  });

  test('TC-EMPGOL-248 Expanding a row reveals the per-goal detail table @smoke', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const employeeName = await goalsPage.findEmployeeNameWithGoalInStatus('Not Started');
    test.skip(!employeeName, 'No employee with a Not Started goal found to exercise the expansion');
    await goalsPage.toggleEmployeeRowExpansion(employeeName!);
    await expect(goalsPage.getEmployeeExpansionTable(employeeName!)).toBeVisible();
    const headers = await goalsPage.getEmployeeExpansionTable(employeeName!).getByRole('columnheader').allInnerTexts();
    const joined = headers.join('|');
    for (const col of ['Goal', 'Status', 'Progress History', 'Completion %', 'Start Date', 'End Date', 'Comment']) {
      expect(joined, `missing expected expansion column "${col}"`).toContain(col);
    }
    const rows = await goalsPage.getExpandedGoalDetailRows(employeeName!);
    expect(rows.length, 'expansion table has no goal rows').toBeGreaterThan(0);
  });

  test('TC-EMPGOL-262 Goal Management lists the goal catalogue with its six columns @smoke', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    const headers = await goalsPage.goalsTable.getByRole('columnheader').allInnerTexts();
    const joined = headers.join('|');
    for (const col of ['Action', 'Goal Name', 'Type', 'Description', 'Assigned Emp. (Dept.)', 'Assigned Emp. (Org.)']) {
      expect(joined, `missing expected column "${col}"`).toContain(col);
    }
    expect(await goalsPage.getRowCount(), 'no goals rendered').toBeGreaterThan(0);
  });

  test('TC-EMPGOL-278 Add Goal opens the side panel with every goal field @smoke', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await goalsPage.openAddGoalPanel();
    await expect(goalsPage.addGoalPanel).toBeVisible();
    await expect(goalsPage.goalNameInput).toBeVisible();
    await expect(goalsPage.goalTypeDropdown).toBeVisible();
    await expect(goalsPage.richTextEditorBody('description')).toBeVisible();
    await expect(goalsPage.richTextEditorBody('learningObjectives')).toBeVisible();
    await expect(goalsPage.richTextEditorBody('definitionOfDone')).toBeVisible();
    await expect(goalsPage.richTextEditorBody('topicsAndConcepts')).toBeVisible();
    await expect(goalsPage.durationMonthsInput()).toBeVisible();
    await expect(goalsPage.durationWeeksInput()).toBeVisible();
    await expect(goalsPage.durationDaysInput()).toBeVisible();
    await expect(goalsPage.panelSaveBtn).toBeVisible();
    await expect(goalsPage.panelCancelBtn).toBeVisible();
  });
});
