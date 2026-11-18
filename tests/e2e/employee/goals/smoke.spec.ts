// TC-EMPGOL-401/402/436/450/463/476 — smoke pass over the SimERP 6.3.2 Goals screen
// (Dashboard tab, Goals > By Employee, Goals > By Goal, Add Goal dialog).
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

/** Run an assertion; if it fails, record it as a product defect before re-throwing. */
async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

test.describe('Goals — Smoke', () => {
  test('TC-EMPGOL-401 Goals opens from the sidebar Employee > Goals link on the Dashboard tab @smoke', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await primaryPage.goto('/profile');
    await goals.openFromSidebar();

    await expect(primaryPage).toHaveURL(/\/employee\/goals$/);
    await expect(goals.heading).toHaveText('Goals');
    await expect(goals.breadcrumb.getByRole('link', { name: 'Employee' })).toBeVisible();
    await expect(goals.breadcrumb.getByRole('listitem').last()).toHaveText('Goals');
    await expect(goals.topTablist.getByRole('tab')).toHaveText(['Dashboard', 'Goals']);
    await expect(goals.dashboardTab).toHaveAttribute('aria-selected', 'true');
  });

  test('TC-EMPGOL-402 Dashboard renders the filter group, five KPI tiles and all five chart/list sections @smoke', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();

    for (const f of ['Year', 'Department', 'RM', 'Timeframe'] as const) await expect(goals.filterCombo(f)).toBeVisible();
    for (const label of ['Total Employees', 'Employees with Goals', 'Goal Assignments', 'L&D Hours', 'Billable Hours']) {
      await expect(goals.kpiGroup).toContainText(label);
    }
    const kpis = await goals.readKpis();
    for (const [k, v] of Object.entries(kpis)) expect(Number.isFinite(v), `KPI ${k} should be numeric`).toBe(true);
    await expect(goals.content.getByRole('heading', { level: 2 })).toHaveText([
      'Goal Tracking Health', 'Employee Goal Coverage', 'RM-wise Goal Status', 'Completion by Goal', 'Most At-Risk Goals',
    ]);
  });

  test('TC-EMPGOL-436 Goals tab opens on By Employee with the roll-up table and server-side footer @smoke', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.selectTopTab('Goals');
    await goals.waitForResults();

    await expect(primaryPage).toHaveURL(/[?&]tab=goals/);
    await expect(goals.byEmployeeTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.byGoalTab).toBeVisible();
    await expect(goals.employeeSearch).toBeVisible();
    await expect(goals.tableOptionsBtn).toBeVisible();
    expect(await goals.readHeaderNames()).toEqual(['Show goals', 'Employee', 'Reporting Manager', 'Goals', 'Overdue Goals', 'Certificates', 'L&D Hours']);
    const r = await goals.readResults();
    expect(r.from).toBe(1);
    expect(r.to).toBe(Math.min(100, r.total));
    await expect(goals.pagination).toBeVisible();
  });

  test('TC-EMPGOL-450 Expanding a row shows the per-goal detail table @smoke', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const first = goals.employeeRows.nth(0); // positional on purpose: "the first data row"
    const second = goals.employeeRows.nth(1);

    await goals.toggleRow(first);
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    await expect(first.getByRole('cell').first()).toHaveText('Hide goals');
    const panel = await goals.detailPanel(first);
    await expect(panel.getByRole('columnheader')).toHaveText(['Goal', 'Status', 'Progress History', 'Completion %', 'Start Date', 'End Date', 'Comment', 'Actions'], { timeout: 20_000 });
    const goalsCount = Number((await first.getByRole('cell').nth(3).innerText()).trim());
    await expect(panel.getByRole('table').locator('tbody').getByRole('row')).toHaveCount(goalsCount);

    // Collapse, then check that two rows can be open at the same time.
    await goals.toggleRow(first);
    await expect(first).toHaveAttribute('aria-expanded', 'false');
    await goals.toggleRow(first);
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    await goals.toggleRow(second);
    await expect(second).toHaveAttribute('aria-expanded', 'true');
    await expectOrDefect('Expanding a second By Employee row collapses the first (accordion); TC-EMPGOL-450 expects rows to expand independently — confirm intended behaviour with product.',
      () => expect(first, 'first row should stay expanded while a second row is opened').toHaveAttribute('aria-expanded', 'true'));
  });

  test('TC-EMPGOL-463 By Goal lists the goal catalogue with its columns and footer @smoke', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.selectGoalsView('By Goal');

    await expect(primaryPage).toHaveURL(/view=catalog/);
    await expect(goals.goalSearch).toBeVisible();
    await expect(goals.addGoalBtn).toBeVisible();
    expect(await goals.readHeaderNames()).toEqual(['Action', 'Goal Name', 'Type', 'Description', 'Assigned Emp. (Dept.)', 'Assigned Emp. (Org.)']);
    const rowCount = await goals.goalRows.count();
    expect(rowCount).toBeGreaterThan(0);
    await expect(goals.goalRows.getByRole('button', { name: 'Edit', exact: true })).toHaveCount(rowCount);
    await expect(goals.goalRows.getByRole('button', { name: 'Delete', exact: true })).toHaveCount(rowCount);
    const r = await goals.readResults();
    expect(r.from).toBe(1);
    expect(r.to).toBe(Math.min(100, r.total));
  });

  test('TC-EMPGOL-476 Add Goal opens the dialog with every field @smoke', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();

    const dlg = goals.addGoalDialog;
    await expect(dlg.getByText('Add a new employee goal')).toBeVisible();
    await expect(goals.goalNameInput).toHaveAttribute('placeholder', 'Enter goal name');
    await expect(goals.goalTypeCombo).toHaveText('Technical');
    for (const field of ['Description', 'Learning Objectives', 'Definition of Done', 'Topics & Concepts'] as const) {
      await expect(goals.editor(field)).toBeVisible();
      for (const b of ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code', 'Align left', 'Align center', 'Align right', 'Link', 'Bullet list', 'Numbered list', 'Quote', 'Undo', 'Redo']) {
        await expect(goals.toolbarButton(field, b)).toBeVisible();
      }
    }
    await expect(dlg.getByText('Estimated time to complete this goal. Enter any combination of months, weeks and days.')).toBeVisible();
    await expect(goals.monthsInput).toHaveValue('0');
    await expect(goals.weeksInput).toHaveValue('0');
    await expect(goals.daysInput).toHaveValue('0');
    await expect(goals.dialogCancelBtn).toBeVisible();
    await expect(goals.dialogSaveBtn).toBeDisabled();
    await expect(goals.dialogCloseBtn).toBeVisible();
  });
});
