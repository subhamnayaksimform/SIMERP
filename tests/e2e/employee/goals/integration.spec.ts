// TC-EMPGOL-425/430/435/503/545/546/547 — cross-view and cross-module consistency of the SimERP
// 6.3.2 Goals screen (dashboard lists ↔ assignment dialogs, Dashboard ↔ By Employee ↔ By Goal,
// Goals ↔ Department Settings / Employee Details).
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage, parseNumber } from '../../../page-objects/employee/goals.page';

test.describe('Goals — Integration', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-425 Most At-Risk "N emp" equals the Delayed rows in that goal\'s assignments @integration', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const top = (await goals.readRanked(goals.atRiskCard))[0];
    const dlg = await goals.openAssignments(goals.atRiskCard, top.name);
    // The dialog opens pre-filtered to Status = Delayed; apply it explicitly (idempotent) as the case says.
    const pop = await goals.openColumnFilter(dlg.getByRole('table'), 'Status');
    await pop.getByRole('checkbox', { name: 'Delayed', exact: true }).check();
    for (const other of ['Not Started', 'In Progress', 'Completed']) await pop.getByRole('checkbox', { name: other, exact: true }).uncheck();
    await pop.getByRole('button', { name: 'Save', exact: true }).click();
    const active = dlg.getByRole('group', { name: 'Active filters' });
    await expect(active).toContainText(/Status: Is\s*Delayed/);
    expect((await goals.readResults(dlg)).total).toBe(top.value);
    expect([...new Set(await goals.readTableColumn(dlg.getByRole('table'), 'Status'))]).toEqual(['Delayed']);
  });

  test('TC-EMPGOL-430 Average completion % in the list matches the assignments in the dialog @integration', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { api } = await goals.refreshDashboard(() => goals.openDashboard());
    const top = (await goals.readRanked(goals.completionCard))[0];
    const rows = (api.assignmentRows as any[]).filter(r => r.goalName === top.name);
    const avg = rows.reduce((a, r) => a + r.completionPercentage, 0) / rows.length;
    expect(Math.round(avg), `average of ${rows.length} assignments`).toBe(top.value);
    const dlg = await goals.openAssignments(goals.completionCard, top.name);
    const n = await goals.readAssignmentCount(dlg);
    expect(n).toBe(rows.length);
    expect((await goals.readResults(dlg)).total).toBe(n);
    if (n <= 10) {
      const uiAvg = (await goals.readTableColumn(dlg.getByRole('table'), 'Completion %')).map(parseNumber);
      expect(Math.round(uiAvg.reduce((a, b) => a + b, 0) / uiAvg.length)).toBe(top.value);
    }
  });

  test('TC-EMPGOL-435 Dashboard Total Employees equals the By Employee result total for the same filters @integration', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    for (const dept of ['All Departments', 'QA']) {
      await goals.openDashboard();
      const { kpis } = dept === 'All Departments'
        ? await goals.refreshDashboard(() => goals.waitForKpis())
        : await goals.refreshDashboard(() => goals.selectFilter('Department', dept));
      await goals.selectTopTab('Goals');
      await goals.waitForResults();
      expect(await goals.readTotal(), `${dept}: By Employee total`).toBe(kpis.totalEmployees);
    }
  });

  test('TC-EMPGOL-503 Goal edits propagate to the By Employee expansion @integration', async ({ primaryPage }) => {
    // Data safety: editing an assigned, shared goal is not allowed in this environment and there is
    // no UI to assign a throwaway goal. Read-only variant: the Edit dialog opened from the By Employee
    // expansion must show exactly what the By Goal Edit dialog shows for the same goal record.
    test.info().annotations.push({ type: 'case-deviation', description: 'Edit step not performed (assigned shared goals are read-only for this suite); verified both entry points read the same stored description.' });
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.searchEmployees('Arjun Jadeja');
    const row = goals.employeeRow('Arjun Jadeja');
    await goals.toggleRow(row);
    const panel = await goals.detailPanel(row);
    const goalName = (await goals.readDetailRows(row))[0].goal;
    const loaded = primaryPage.waitForResponse(r => /\/api\/v1\/goals\/[\w-]+$/.test(r.url().split('?')[0]) && r.request().method() === 'GET').catch(() => null);
    await panel.getByRole('button', { name: `Edit goal ${goalName}`, exact: true }).click();
    await expect(goals.editGoalDialog).toBeVisible();
    await loaded;
    const fromExpansion = (await goals.editor('Description').innerText()).trim();
    await goals.closeGoalDialog('Cancel');
    await goals.selectGoalsView('By Goal');
    await goals.openEditGoal(goalName);
    await expect(goals.editor('Description')).toHaveText(fromExpansion);
    await goals.closeGoalDialog('Cancel');
  });

  test('TC-EMPGOL-545 Department filter list matches the Department module @integration', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const goalDepts = (await goals.getFilterOptions('Department')).filter(o => o !== 'All Departments').sort();
    await primaryPage.goto('/department-settings');
    const combo = primaryPage.getByRole('main').last().getByRole('combobox').first();
    await expect(combo).toBeVisible({ timeout: 60_000 });
    await combo.click();
    const options = primaryPage.getByRole('option');
    await expect(options.first()).toBeVisible();
    const settingsDepts = (await options.allInnerTexts()).map(t => t.trim()).filter(Boolean).sort();
    await primaryPage.keyboard.press('Escape');
    expect(goalDepts).toEqual(settingsDepts);
  });

  test('TC-EMPGOL-546 Goals Total Employees reconciles with Employee Details @integration', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const { kpis } = await goals.refreshDashboard(() => goals.selectFilter('Department', 'QA'));
    const departmentId = new URL(primaryPage.url()).searchParams.get('departmentId');
    expect(departmentId).toBeTruthy();
    // The Employee Details list endpoint with its department filter (same session).
    const filters = encodeURIComponent(JSON.stringify({ department: [departmentId] }));
    const { status, body } = await goals.apiGet(`/api/v1/employees?page=1&limit=100&timeFrame=15d&filters=${filters}`);
    expect(status).toBe(200);
    expect(kpis.totalEmployees, 'Goals QA Total Employees = Employee Details QA employees').toBe(body.data.total);
  });

  test('TC-EMPGOL-547 Assigned Emp. (Org.) reconciles with the dashboard assignments dialog @integration', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const goal = 'Kubernetes Administrator (CKA)';
    await goals.openByGoal();
    await goals.searchGoals(goal);
    const org = parseNumber(await goals.countCell(goals.goalRow(goal), 'Org').innerText());
    await goals.selectTopTab('Dashboard');
    await goals.waitForKpis();
    await expect(goals.yearCombo).toHaveText('All Years');
    await expect(goals.departmentCombo).toHaveText('All Departments');
    const list = await goals.openViewAll('Completion by Goal');
    await goals.listSearch(list).fill(goal);
    await expect(list.getByRole('button', { name: `View assignments for ${goal}`, exact: true })).toBeVisible();
    const dlg = await goals.openAssignments(list, goal);
    expect(await goals.readAssignmentCount(dlg)).toBe(org);
  });
});
