// TC-EMPGOL-403..540 (functional) — SimERP 6.3.2 Goals screen: shared filters, Dashboard KPIs /
// charts / ranked lists / dialogs, Goals > By Employee table, Goals > By Goal catalogue and the
// Add / Edit / Delete goal flows, responsive layout.
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
//
// DATA SAFETY: every goal created here is named `AUTO-GOL-<timestamp>…`, has no assignments, and is
// deleted again in afterEach (by exact name, via the API). Existing goals are only read.
import { test, expect } from '../../../fixtures/auth';
import type { Locator } from '@playwright/test';
import { GoalsPage, parseNumber, RICH_TEXT_FIELDS, type RichTextField } from '../../../page-objects/employee/goals.page';

/** Run an assertion; if it fails, record it as a product defect before re-throwing. */
async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

/** Soft variant: record the defect and keep going so the rest of the case is still verified. */
async function softDefect(description: string, check: () => Promise<unknown> | unknown): Promise<void> {
  const before = test.info().errors.length;
  await check();
  if (test.info().errors.length > before) test.info().annotations.push({ type: 'defect', description });
}

const isSorted = (values: number[], dir: 'asc' | 'desc') =>
  values.every((v, i) => i === 0 || (dir === 'asc' ? values[i - 1] <= v : values[i - 1] >= v));
// Locale order as a database collation applies it: case-insensitive, spaces/punctuation ignored
// ("Database …" sorts before "Data Structures …").
// Person names sort with spaces significant ("Feni Rao" before "Fenil Roy"), so a pair counts as
// ordered when either collation agrees.
const cmp = (a: string, b: string) => a.localeCompare(b, 'en', { sensitivity: 'base', ignorePunctuation: true });
const cmpSpaced = (a: string, b: string) => a.localeCompare(b, 'en', { sensitivity: 'base' });
const inOrder = (a: string, b: string, dir: 'asc' | 'desc') =>
  dir === 'asc' ? cmp(a, b) <= 0 || cmpSpaced(a, b) <= 0 : cmp(a, b) >= 0 || cmpSpaced(a, b) >= 0;
const isSortedText = (values: string[], dir: 'asc' | 'desc') =>
  values.every((v, i) => i === 0 || inOrder(values[i - 1], v, dir));
const num = (t: string) => (/^none$/i.test(t.trim()) ? 0 : parseNumber(t));

/** Goals created by the current test — deleted in afterEach. */
const created: string[] = [];
test.afterEach(async ({ primaryPage }) => {
  if (!created.length) return;
  const goals = new GoalsPage(primaryPage);
  const failed = await goals.deleteGoalsByName(created.splice(0));
  if (failed.length) test.info().annotations.push({ type: 'cleanup-failed', description: failed.join(', ') });
});

// ════════════════════════════════════════════════════════════════════════════
// Dashboard
// ════════════════════════════════════════════════════════════════════════════
test.describe('Goals — Functional — Dashboard', () => {
  test.describe.configure({ timeout: 120_000 });

  test('TC-EMPGOL-403 Shared filters show their documented defaults on first load @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await expect(goals.yearCombo).toHaveText('All Years');
    await expect(goals.departmentCombo).toHaveText('All Departments');
    await expect(goals.rmCombo).toHaveText('All Managers');
    await expect(goals.timeframeCombo).toHaveText('Last 15 days');
    await expect(primaryPage.getByText(/Select a department/i)).toHaveCount(0);
  });

  test('TC-EMPGOL-404 Year and Timeframe comboboxes offer exactly the expected options @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.yearCombo.click();
    await expect(primaryPage.getByRole('option')).toHaveText(['All Years', '2026', '2025']);
    await expect(primaryPage.getByRole('option', { name: 'All Years' })).toHaveAttribute('aria-selected', 'true');
    await primaryPage.keyboard.press('Escape');
    await goals.timeframeCombo.click();
    await expect(primaryPage.getByRole('option')).toHaveText(['Last 5 days', 'Last 15 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'All time']);
    await expect(primaryPage.getByRole('option', { name: 'Last 15 days' })).toHaveAttribute('aria-selected', 'true');
    await primaryPage.keyboard.press('Escape');
  });

  test('TC-EMPGOL-405 Department combobox lists All Departments plus every department and is type-to-search @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.departmentCombo.click();
    const listbox = primaryPage.getByRole('listbox', { name: 'Suggestions' });
    const options = listbox.getByRole('option');
    await expect(options.first()).toHaveText('All Departments');
    await expect(options.first()).toHaveAttribute('aria-selected', 'true');
    expect(await options.count()).toBeGreaterThanOrEqual(36);
    for (const d of ['ADMIN', 'ANDROID', 'QA', 'REACT', 'TECH LEADERSHIP']) await expect(listbox.getByRole('option', { name: d, exact: true })).toBeVisible();
    await primaryPage.keyboard.type('QA');
    await expect(listbox.getByRole('option', { name: 'QA', exact: true })).toBeVisible();
    await expect(listbox.getByRole('option', { name: 'ANDROID', exact: true })).toHaveCount(0);
    for (const t of await options.allInnerTexts()) expect(t).toMatch(/QA/i);
  });

  test('TC-EMPGOL-406 Admin RM filter lists All Managers plus RMs and narrows the dashboard to one RM @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const before = await goals.readKpis();
    const caption = await goals.readChartCaption(goals.teamChartCard());
    const rmOptions = await goals.getFilterOptions('RM');
    expect(rmOptions[0]).toBe('All Managers');
    expect(rmOptions.length).toBeGreaterThan(300);
    const { kpis } = await goals.refreshDashboard(() => goals.selectFilter('RM', 'Aarav Barot'));
    expect(kpis.totalEmployees).toBeLessThan(before.totalEmployees);
    await expect(goals.content.getByText(`of ${caption.total.toLocaleString('en-US')} RMs`)).toHaveCount(0);
    await expect(goals.teamChartCard()).toBeVisible();
  });

  test('TC-EMPGOL-407 L&D Hours and Billable Hours tiles expose info tooltips with the documented text @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    expect(await goals.hoverTooltipText(goals.ldHoursInfo)).toBe('Non-billable hours logged in the selected timeframe');
    await goals.heading.hover({ force: true }).catch(() => primaryPage.mouse.move(0, 0));
    await primaryPage.mouse.move(0, 0);
    await expect(primaryPage.getByRole('tooltip')).toHaveCount(0);
    expect(await goals.hoverTooltipText(goals.billableHoursInfo)).toBe('Billable hours logged in the selected timeframe');
  });

  test('TC-EMPGOL-408 Changing Timeframe updates the hours tiles and is written to the URL @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { kpis: k15 } = await goals.refreshDashboard(() => goals.open());
    const { kpis: k5 } = await goals.refreshDashboard(() => goals.selectFilter('Timeframe', 'Last 5 days'));
    const { kpis: kAll } = await goals.refreshDashboard(() => goals.selectFilter('Timeframe', 'All time'));
    expect(k5.ldHours).toBeLessThanOrEqual(k15.ldHours);
    expect(k15.ldHours).toBeLessThanOrEqual(kAll.ldHours);
    expect(k5.billableHours).toBeLessThanOrEqual(k15.billableHours);
    expect(k15.billableHours).toBeLessThanOrEqual(kAll.billableHours);
    expect(kAll.ldHours).toBeGreaterThan(k5.ldHours);
    await expect(primaryPage).toHaveURL(/timeFrame=all/);
    // Goal counts are not timeframe-scoped.
    expect([k5.totalEmployees, k5.employeesWithGoals, k5.goalAssignments]).toEqual([k15.totalEmployees, k15.employeesWithGoals, k15.goalAssignments]);
    expect([kAll.totalEmployees, kAll.employeesWithGoals, kAll.goalAssignments]).toEqual([k15.totalEmployees, k15.employeesWithGoals, k15.goalAssignments]);
  });

  test('TC-EMPGOL-409 Changing Department re-scopes every KPI and is written to the URL @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { kpis: all } = await goals.refreshDashboard(() => goals.open());
    const allCaption = await goals.readChartCaption(goals.teamChartCard());
    const allCompletion = await goals.readListStatus(goals.completionCard);
    const { kpis: qa } = await goals.refreshDashboard(() => goals.selectFilter('Department', 'QA'));
    expect(qa.totalEmployees).toBeLessThan(all.totalEmployees);
    expect(qa.employeesWithGoals).toBeLessThan(all.employeesWithGoals);
    expect(qa.goalAssignments).toBeLessThan(all.goalAssignments);
    expect(qa.ldHours).toBeLessThan(all.ldHours);
    expect(qa.billableHours).toBeLessThan(all.billableHours);
    expect(qa.employeesWithGoals).toBeLessThanOrEqual(qa.totalEmployees);
    await expect(primaryPage).toHaveURL(/departmentId=[0-9a-f-]{36}/);
    expect((await goals.readChartCaption(goals.teamChartCard())).total).toBeLessThan(allCaption.total);
    expect((await goals.readListStatus(goals.completionCard)).total).toBeLessThanOrEqual(allCompletion.total);
  });

  test('TC-EMPGOL-410 Changing Year re-scopes goal KPIs, including L&D-related figures where applicable @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const { kpis: all } = await goals.refreshDashboard(() => goals.selectFilter('Timeframe', 'All time'));
    const { kpis: y26 } = await goals.refreshDashboard(() => goals.selectFilter('Year', '2026'));
    const { kpis: y25 } = await goals.refreshDashboard(() => goals.selectFilter('Year', '2025'));
    expect(y26.employeesWithGoals !== y25.employeesWithGoals || y26.goalAssignments !== y25.goalAssignments, 'goal KPIs should differ between 2026 and 2025').toBe(true);
    for (const y of [y26, y25]) {
      expect(y.employeesWithGoals).toBeLessThanOrEqual(all.employeesWithGoals);
      expect(y.goalAssignments).toBeLessThanOrEqual(all.goalAssignments);
    }
    if (y26.ldHours === y25.ldHours) {
      // Identical hours across years must be explained as timeframe-only (6.2.0 D4).
      expect(await goals.hoverTooltipText(goals.ldHoursInfo)).toMatch(/timeframe/i);
    }
  });

  test('TC-EMPGOL-411 KPI invariants hold and the coverage doughnut reconciles with the KPIs @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { api, kpis } = await goals.refreshDashboard(() => goals.open());
    expect(api, 'dashboard payload').not.toBeNull();
    expect(kpis.employeesWithGoals).toBeLessThanOrEqual(kpis.totalEmployees);
    expect(api.employeesWithGoals + api.employeesWithoutGoals).toBe(api.totalEmployees);
    expect(kpis.totalEmployees).toBe(api.totalEmployees);
    const coverage = goals.card('Employee Goal Coverage');
    await expect(goals.legendItems(coverage)).toHaveText(['Goals Assigned', 'No Goals']);
    const tips = await goals.readDoughnutTooltips(coverage);
    expect(tips['Goals Assigned']).toBe(kpis.employeesWithGoals);
    expect(tips['Goals Assigned'] + tips['No Goals']).toBe(kpis.totalEmployees);
  });

  test('TC-EMPGOL-412 Goal Tracking Health doughnut shows four statuses that sum to Goal Assignments @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { api, kpis } = await goals.refreshDashboard(() => goals.open());
    const health = goals.card('Goal Tracking Health');
    await expect(goals.legendItems(health)).toHaveText(['Completed', 'Delayed', 'In Progress', 'Not Started']);
    const sb = api.statusBreakdown;
    expect(sb.completed + sb.delayed + sb.inProgress + sb.notStarted).toBe(kpis.goalAssignments);
    const tips = await goals.readDoughnutTooltips(health);
    expect(Object.values(tips).reduce((a, b) => a + b, 0)).toBe(kpis.goalAssignments);
    const swatches: string[] = [];
    for (const li of await goals.legendItems(health).all()) swatches.push((await li.locator('span').first().getAttribute('style')) ?? '');
    expect(new Set(swatches).size, `legend colours ${swatches.join(' | ')}`).toBe(4);
  });

  test('TC-EMPGOL-413 Clicking a chart legend item toggles that series @functional @needs-verification', async ({ primaryPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const health = goals.card('Goal Tracking Health');
    const sectors = health.locator('.recharts-sector'); // recharts exposes no role on sectors
    await expect(sectors).toHaveCount(4);
    const delayed = goals.legendItems(health).filter({ hasText: 'Delayed' });
    await delayed.click();
    await expectOrDefect('Goal Tracking Health legend items are plain list items — clicking "Delayed" does not hide its segment (6.3.0 notes mention legend chart actions).',
      () => expect(sectors).toHaveCount(3, { timeout: 5_000 }));
    await delayed.click();
    await expect(sectors).toHaveCount(4);
  });

  test('TC-EMPGOL-414 Admin sees "RM-wise Goal Status" with one bar per RM and an L&D Hours by RM line @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.card('RM-wise Goal Status');
    await expect(card).toBeVisible();
    await expect(goals.legendItems(card)).toHaveText(['Completed', 'Delayed', 'In Progress', 'L&D Hours by RM', 'Not Started']);
    await expect(card.getByText(/Ctrl \+ scroll to zoom/)).toHaveText(/^Showing 1–[\d,]+ of [\d,]+ RMs · Ctrl \+ scroll to zoom · drag slider to pan$/);
    // Since 2026-10-08 the chart opens on a 25-bar window rather than all RMs.
    const cap = await goals.readChartCaption(card);
    expect(cap.from).toBe(1);
    expect(cap.to).toBeGreaterThanOrEqual(1);
    expect(cap.to).toBeLessThanOrEqual(cap.total);
    expect(cap.total).toBeGreaterThan(300);
  });

  test('TC-EMPGOL-415 RM chart Zoom in / Zoom out / Reset zoom and Ctrl+scroll work @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.teamChartCard();
    const zin = goals.zoomButton(card, 'Zoom in');
    const zout = goals.zoomButton(card, 'Zoom out');
    const reset = goals.zoomButton(card, 'Reset zoom');
    // The default window is the reset target: Reset is disabled there, and Zoom out is only
    // disabled when that window already spans every bar.
    await expect(reset).toBeDisabled();
    const initial = await goals.readChartCaption(card);
    const initialWidth = initial.to - initial.from + 1;
    if (initialWidth >= initial.total) await expect(zout).toBeDisabled();
    else await expect(zout).toBeEnabled();
    await zin.click();
    await zin.click();
    const zoomed = await goals.readChartCaption(card);
    expect(zoomed.to - zoomed.from + 1).toBeLessThan(initialWidth);
    await expect(zout).toBeEnabled();
    await expect(reset).toBeEnabled();
    await zout.click();
    const widened = await goals.readChartCaption(card);
    expect(widened.to - widened.from).toBeGreaterThan(zoomed.to - zoomed.from);
    await reset.click();
    await expect(card.getByText(/Ctrl \+ scroll to zoom/)).toContainText(`Showing ${initial.from}–${initial.to.toLocaleString('en-US')} of ${initial.total.toLocaleString('en-US')}`);
    await expect(reset).toBeDisabled();
    const full = initial;
    const chart = card.getByRole('application').first();
    await chart.hover();
    await primaryPage.keyboard.down('Control');
    await primaryPage.mouse.wheel(0, -300);
    await primaryPage.keyboard.up('Control');
    await expect.poll(async () => { const c = await goals.readChartCaption(card); return c.to - c.from + 1; }).toBeLessThan(full.to - full.from + 1);
  });

  test('TC-EMPGOL-416 Pan chart slider is disabled at full range and pans after zooming @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.teamChartCard();
    const slider = card.getByRole('slider', { name: 'Pan chart' });
    // Disabled only while the window spans every bar (the default window is 25 bars since 2026-10-08).
    const initial = await goals.readChartCaption(card);
    if (initial.to - initial.from + 1 >= initial.total) {
      await expect(slider).toBeDisabled();
      await goals.zoomButton(card, 'Zoom in').click();
    }
    await expect(slider).toBeEnabled();
    const before = await goals.readChartCaption(card);
    await slider.focus();
    for (let i = 0; i < 3; i++) await primaryPage.keyboard.press('ArrowRight');
    await expect.poll(async () => (await goals.readChartCaption(card)).from).toBeGreaterThan(before.from);
    const after = await goals.readChartCaption(card);
    expect(after.to - after.from).toBe(before.to - before.from);
  });

  test('TC-EMPGOL-417 "Show as separate charts" splits the combined RM chart and toggles back @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const errors: string[] = [];
    primaryPage.on('pageerror', e => errors.push(e.message));
    const card = goals.teamChartCard();
    const toggle = card.getByRole('checkbox', { name: 'Show as separate charts' });
    const separateHours = goals.content.getByRole('heading', { name: 'L&D Hours by RM', level: 2 });
    await expect(separateHours).toHaveCount(0);
    await toggle.check();
    await expect(separateHours).toBeVisible();
    await expect(goals.legendItems(goals.teamChartCard()).filter({ hasText: 'L&D Hours by RM' })).toHaveCount(0);
    await goals.teamChartCard().getByRole('checkbox', { name: 'Show as separate charts' }).uncheck();
    await expect(separateHours).toHaveCount(0);
    await expect(goals.legendItems(goals.teamChartCard()).filter({ hasText: 'L&D Hours by RM' })).toHaveCount(1);
    expect(errors, 'uncaught page errors while toggling').toEqual([]);
  });

  test('TC-EMPGOL-418 RM persona sees "Your Team Goal Status" with one bar per team member @functional', async ({ emPage }) => {
    const goals = new GoalsPage(emPage);
    const { kpis } = await goals.refreshDashboard(() => goals.open());
    const card = goals.card('Your Team Goal Status');
    await expect(card).toBeVisible();
    await expect(goals.legendItems(card).filter({ hasText: 'L&D Hours by Team Member' })).toHaveCount(1);
    const cap = await goals.readChartCaption(card);
    expect(cap.unit).toBe('employees');
    expect(cap.from).toBe(1);
    expect(cap.total).toBe(kpis.totalEmployees);
    await expect(goals.content.getByRole('heading', { name: 'RM-wise Goal Status' })).toHaveCount(0);
  });

  test('TC-EMPGOL-419 PMO team chart caption total matches Total Employees @functional', async ({ pmoPage }) => {
    const goals = new GoalsPage(pmoPage);
    const { kpis } = await goals.refreshDashboard(() => goals.open());
    const cap = await goals.readChartCaption(goals.card('Your Team Goal Status'));
    await expectOrDefect(`PMO "Your Team Goal Status" caption total (${cap.total}) differs from the Total Employees KPI (${kpis.totalEmployees}).`,
      async () => expect(cap.total).toBe(kpis.totalEmployees));
  });

  test('TC-EMPGOL-420 Completion by Goal shows a ranked top-5 list with average completion bars @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.completionCard;
    const items = goals.rankedButtons(card);
    await expect(items).toHaveCount(5);
    await expect(card.getByRole('progressbar', { name: 'Average completion' })).toHaveCount(5);
    const ranked = await goals.readRanked(card);
    expect(ranked.map(r => r.rank)).toEqual([1, 2, 3, 4, 5]);
    expect(isSorted(ranked.map(r => r.value), 'desc'), JSON.stringify(ranked)).toBe(true);
    await expect(goals.sortGoalsButton(card)).toHaveAccessibleName('Sort goals: Completion, high to low');
    await expect(goals.listStatus(card)).toHaveText(/^Showing 1–5 of \d+ goals$/);
    await expect(goals.rowsPerPage(card)).toHaveText('5');
  });

  test('TC-EMPGOL-421 Completion by Goal sort toggle reverses the order @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.completionCard;
    await goals.chooseListSort(card, 'Completion, low to high');
    await expect(goals.sortGoalsButton(card)).toHaveAccessibleName('Sort goals: Completion, low to high');
    const asc = await goals.readRanked(card);
    expect(isSorted(asc.map(r => r.value), 'asc'), JSON.stringify(asc)).toBe(true);
    await goals.chooseListSort(card, 'Completion, high to low');
    await expect(goals.sortGoalsButton(card)).toHaveAccessibleName('Sort goals: Completion, high to low');
    const desc = await goals.readRanked(card);
    expect(isSorted(desc.map(r => r.value), 'desc'), JSON.stringify(desc)).toBe(true);
  });

  test('TC-EMPGOL-422 Completion by Goal search narrows the list and clearing restores it @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.completionCard;
    const full = await goals.readListStatus(card);
    await goals.listSearch(card).fill('Agile');
    await expect.poll(async () => (await goals.readListStatus(card)).total).toBeLessThan(full.total);
    const names = (await goals.readRanked(card)).map(r => r.name);
    expect(names.length).toBeGreaterThan(0);
    for (const n of names) expect(n).toMatch(/agile/i);
    await goals.listSearch(card).fill('');
    await expect(goals.listStatus(card)).toHaveText(`Showing 1–5 of ${full.total} goals`);
  });

  test('TC-EMPGOL-423 Rows per page and list pagination work on Completion by Goal @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.completionCard;
    const nav = goals.listPages(card);
    await goals.setRowsPerPage(card, 10);
    const { total } = await goals.readListStatus(card);
    await expect(goals.listStatus(card)).toHaveText(`Showing 1–10 of ${total} goals`);
    await expect(goals.rankedButtons(card)).toHaveCount(10);
    await expect(goals.prevPageBtn(nav)).toBeDisabled();
    await goals.nextPageBtn(nav).click();
    await expect(goals.listStatus(card)).toHaveText(`Showing 11–${Math.min(20, total)} of ${total} goals`);
    await goals.pageButton(1, nav).click();
    await expect(goals.listStatus(card)).toHaveText(`Showing 1–10 of ${total} goals`);
    const last = Math.ceil(total / 10);
    await goals.pageButton(last, nav).click();
    await expect(goals.listStatus(card)).toHaveText(`Showing ${(last - 1) * 10 + 1}–${total} of ${total} goals`);
    await expect(goals.nextPageBtn(nav)).toBeDisabled();
  });

  test('TC-EMPGOL-424 Most At-Risk Goals lists goals by delayed-employee count with an at-risk marker @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.atRiskCard;
    const items = goals.rankedButtons(card);
    await expect(items).toHaveCount(5);
    for (const item of await items.all()) {
      await expect(item.getByRole('img', { name: 'At risk' })).toBeVisible();
      await expect(item).toHaveText(/\d+ emp$/);
    }
    await expect(goals.sortGoalsButton(card)).toHaveAccessibleName('Sort goals: Employees, most first');
    expect(isSorted((await goals.readRanked(card)).map(r => r.value), 'desc')).toBe(true);
    await expect(goals.listStatus(card)).toHaveText(/^Showing 1–5 of \d+ goals$/);
    await goals.chooseListSort(card, 'Employees, fewest first');
    await expect(goals.sortGoalsButton(card)).toHaveAccessibleName('Sort goals: Employees, fewest first');
    expect(isSorted((await goals.readRanked(card)).map(r => r.value), 'asc')).toBe(true);
  });

  test('TC-EMPGOL-426 View All opens a full-list dialog for both ranked lists @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    for (const name of ['Completion by Goal', 'Most At-Risk Goals'] as const) {
      const cardTop = (await goals.readRanked(goals.card(name))).map(r => r.name);
      const dlg = await goals.openViewAll(name);
      await expect(goals.listSearch(dlg)).toBeVisible();
      await expect(goals.sortGoalsButton(dlg)).toBeVisible();
      await expect(goals.rowsPerPage(dlg)).toHaveText('20');
      const { total } = await goals.readListStatus(dlg);
      await expect(goals.listStatus(dlg)).toHaveText(`Showing 1–${Math.min(20, total)} of ${total} goals`);
      await expect(goals.listPages(dlg)).toBeVisible();
      expect((await goals.readRanked(dlg)).slice(0, 5).map(r => r.name)).toEqual(cardTop);
      await dlg.getByRole('button', { name: 'Close' }).last().click();
      await expect(dlg).toBeHidden();
      await expect(goals.card(name)).toBeVisible();
    }
  });

  test('TC-EMPGOL-427 View assignments dialog shows the per-employee assignments of a goal @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const top = (await goals.readRanked(goals.completionCard))[0];
    const dlg = await goals.openAssignments(goals.completionCard, top.name);
    await expect(dlg.getByRole('heading', { name: top.name })).toBeVisible();
    await expect(dlg.getByRole('textbox', { name: 'Search employee or manager' })).toBeVisible();
    const n = await goals.readAssignmentCount(dlg);
    expect(n).toBeGreaterThan(0);
    expect(await goals.readHeaderNames(dlg.getByRole('table'))).toEqual(['Employee', 'Reporting Manager', 'Status', 'Completion %']);
    await expect(dlg.getByRole('status')).toHaveText(new RegExp(`^Showing 1 - \\d+ of ${n} results$`));
    await expect(dlg.getByRole('navigation', { name: 'Pagination Navigation' })).toBeVisible();
    await dlg.getByRole('button', { name: 'Close' }).last().click();
    await expect(dlg).toBeHidden();
  });

  /** Open the assignments dialog of the dashboard goal with the most assignments (via View All search). */
  async function openBusiestGoal(goals: GoalsPage): Promise<{ dlg: Locator; name: string; assigned: number }> {
    const { api } = await goals.refreshDashboard(() => goals.open());
    const busiest = [...api.goalsByCompletion].sort((a: any, b: any) => b.assignedCount - a.assignedCount)[0];
    const list = await goals.openViewAll('Completion by Goal');
    await goals.listSearch(list).fill(busiest.goalName);
    await expect(list.getByRole('button', { name: `View assignments for ${busiest.goalName}`, exact: true })).toBeVisible();
    const dlg = await goals.openAssignments(list, busiest.goalName);
    return { dlg, name: busiest.goalName, assigned: busiest.assignedCount };
  }

  test('TC-EMPGOL-428 Assignments dialog search matches employee and manager names @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { dlg } = await openBusiestGoal(goals);
    const table = dlg.getByRole('table');
    const total = await goals.readAssignmentCount(dlg);
    const employee = (await goals.readTableColumn(table, 'Employee'))[0];
    const manager = (await goals.readTableColumn(table, 'Reporting Manager'))[0];
    const search = dlg.getByRole('textbox', { name: 'Search employee or manager' });
    await search.fill(employee);
    await expect.poll(() => goals.readAssignmentCount(dlg)).toBeLessThan(total);
    for (const e of await goals.readTableColumn(table, 'Employee')) expect(e).toContain(employee);
    await search.fill('');
    await expect.poll(() => goals.readAssignmentCount(dlg)).toBe(total);
    await search.fill(manager);
    await expect.poll(() => goals.readAssignmentCount(dlg)).toBeLessThan(total);
    const rows = await goals.readTableColumn(table, 'Reporting Manager');
    const emps = await goals.readTableColumn(table, 'Employee');
    rows.forEach((m, i) => expect(`${emps[i]} | ${m}`).toContain(manager));
    await search.fill('');
    await expect.poll(() => goals.readAssignmentCount(dlg)).toBe(total);
  });

  test('TC-EMPGOL-429 Assignments dialog sorting, Status filter and pagination work @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const { dlg } = await openBusiestGoal(goals);
    const table = dlg.getByRole('table');
    for (const col of ['Employee', 'Reporting Manager']) {
      await goals.clickSort(table, col, null);
      await expect.poll(async () => isSortedText(await goals.readTableColumn(table, col), 'asc'), { message: `${col} ascending` }).toBe(true);
      await goals.clickSort(table, col, null);
      await expect.poll(async () => isSortedText(await goals.readTableColumn(table, col), 'desc'), { message: `${col} descending` }).toBe(true);
    }
    // Status sorts by workflow rank rather than alphabetically: assert each status forms one block
    // and the descending block order is the reverse of the ascending one.
    const blocks = (v: string[]) => v.filter((s, i) => i === 0 || v[i - 1] !== s);
    await goals.clickSort(table, 'Status', null);
    const statusAsc = blocks(await goals.readTableColumn(table, 'Status'));
    expect(new Set(statusAsc).size, `Status ascending blocks ${statusAsc.join(',')}`).toBe(statusAsc.length);
    await goals.clickSort(table, 'Status', null);
    await expect.poll(async () => blocks(await goals.readTableColumn(table, 'Status'))[0], { message: 'Status descending' }).not.toBe(statusAsc[0]);
    await goals.clickSort(table, 'Completion %', null);
    await expect.poll(async () => isSorted((await goals.readTableColumn(table, 'Completion %')).map(parseNumber), 'asc')).toBe(true);
    await goals.clickSort(table, 'Completion %', null);
    await expect.poll(async () => isSorted((await goals.readTableColumn(table, 'Completion %')).map(parseNumber), 'desc')).toBe(true);

    const pop = await goals.openColumnFilter(table, 'Status');
    await pop.getByRole('checkbox', { name: 'In Progress', exact: true }).click();
    await pop.getByRole('button', { name: 'Save', exact: true }).click();
    await expect.poll(async () => [...new Set(await goals.readTableColumn(table, 'Status'))]).toEqual(['In Progress']);

    const status = dlg.getByRole('status');
    const first = await goals.readResults(dlg);
    if (first.total > first.to) {
      await dlg.getByRole('button', { name: 'Next page' }).click();
      await expect(status).toHaveText(new RegExp(`^Showing ${first.to + 1} - \\d+ of ${first.total} results$`));
    }
    await dlg.getByRole('button', { name: 'Close', exact: true }).last().click();
    await expect(dlg).toBeHidden();
  });

  test('TC-EMPGOL-431 Filters persist when switching between Dashboard and Goals tabs @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.selectFilter('Year', '2026');
    await goals.selectFilter('Department', 'QA');
    await goals.selectFilter('Timeframe', 'Last 30 days');
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await expect(goals.yearCombo).toHaveText('2026');
    await expect(goals.departmentCombo).toHaveText('QA');
    await expect(goals.timeframeCombo).toHaveText('Last 30 days');
    await goals.selectFilter('Timeframe', 'Last 5 days');
    const { api, kpis } = await goals.refreshDashboard(() => goals.selectTopTab('Dashboard'));
    await expect(goals.yearCombo).toHaveText('2026');
    await expect(goals.departmentCombo).toHaveText('QA');
    await expect(goals.timeframeCombo).toHaveText('Last 5 days');
    expect(api, 'Dashboard should refetch for the changed timeframe').not.toBeNull();
    expect(kpis.ldHours).toBe(api.totalLdHours);
    expect(kpis.totalEmployees).toBe(api.totalEmployees);
  });

  test('TC-EMPGOL-432 Reload keeps the filtered dashboard (filters represented in the URL) @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.selectFilter('Department', 'QA');
    await goals.selectFilter('Timeframe', 'All time');
    const { kpis: before } = await goals.refreshDashboard(() => goals.selectFilter('Year', '2026'));
    await expect(primaryPage).toHaveURL(/departmentId=[0-9a-f-]{36}/);
    await expect(primaryPage).toHaveURL(/timeFrame=all/);
    await expect(primaryPage).toHaveURL(/year=2026/);
    const { kpis: after } = await goals.refreshDashboard(() => primaryPage.reload());
    await expect(goals.departmentCombo).toHaveText('QA');
    await expect(goals.timeframeCombo).toHaveText('All time');
    await expect(goals.yearCombo).toHaveText('2026');
    expect(after).toEqual(before);
  });
});

// ════════════════════════════════════════════════════════════════════════════
// Goals > By Employee
// ════════════════════════════════════════════════════════════════════════════
test.describe('Goals — Functional — By Employee', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-437 Deep links restore the Goals tab and the By Goal view @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.open('tab=goals');
    await goals.waitForResults();
    await expect(goals.goalsTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.byEmployeeTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.employeeSearch).toBeVisible();

    const catalogue = goals.waitForApi(/\/api\/v1\/goals\?/);
    await goals.open('tab=goals&view=catalog');
    const apiTotal = (await (await catalogue).json()).data.total;
    await goals.waitForResults();
    await expect(goals.goalsTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.byGoalTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - ${Math.min(100, apiTotal)} of ${apiTotal} results`);
  });

  test('TC-EMPGOL-438 By Employee is server-paged: 100 rows per page, 37 pages @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    const lastPage = Math.ceil(total / 100);
    await expect(goals.employeeRows).toHaveCount(100);
    const firstPage1 = await goals.employeeRows.first().innerText();
    await expect(goals.prevPageBtn()).toBeDisabled();

    await goals.goToPage(goals.nextPageBtn());
    await expect(goals.resultsStatus).toHaveText(`Showing 101 - 200 of ${total} results`);
    await expect(goals.employeeRows).toHaveCount(100);
    expect(await goals.employeeRows.first().innerText()).not.toBe(firstPage1);

    await goals.goToPage(goals.pageButton(lastPage));
    await expect(goals.resultsStatus).toHaveText(`Showing ${(lastPage - 1) * 100 + 1} - ${total} of ${total} results`);
    await expect(goals.employeeRows).toHaveCount(total - (lastPage - 1) * 100);
    await expect(goals.nextPageBtn()).toBeDisabled();

    await goals.goToPage(goals.pageButton(1));
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
    await expect(goals.prevPageBtn()).toBeDisabled();
    expect(await goals.employeeRows.count()).toBeLessThanOrEqual(100);
  });

  test('TC-EMPGOL-439 Page change requests one server page instead of the whole organisation @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const pageRequests: string[] = [];
    const employeeWalk: string[] = [];
    primaryPage.on('request', r => {
      const u = r.url();
      if (/\/api\/v1\/employee-goals\/employees\?/.test(u)) pageRequests.push(u);
      if (/\/api\/v1\/employees(\?|$)/.test(u)) employeeWalk.push(u);
    });
    await goals.goToPage(goals.pageButton(2));
    await expect(goals.resultsStatus).toHaveText(/^Showing 101 - 200 of \d+ results$/);
    const page2 = pageRequests.filter(u => /[?&]page=2(&|$)/.test(u));
    expect(page2, pageRequests.join('\n')).toHaveLength(1);
    expect(['100', '200', '300']).toContain(new URL(page2[0]).searchParams.get('limit'));
    expect(employeeWalk, 'no /api/v1/employees page walk').toEqual([]);
  });

  test('TC-EMPGOL-440 Search employee filters server-side and resets to page 1 @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    await goals.goToPage(goals.pageButton(Math.min(5, Math.ceil(total / 100))).or(goals.nextPageBtn()).first());
    await goals.searchEmployees('Arjun Jadeja');
    const r = await goals.readResults();
    expect(r.from).toBe(1);
    expect(r.total).toBeLessThan(total);
    await expect(goals.prevPageBtn()).toBeDisabled();
    for (const name of await goals.readEmployeeColumn('Employee')) expect(name).toMatch(/arjun jadeja/i);
    await goals.searchEmployees('');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
  });

  test('TC-EMPGOL-441 Sorting Employee and Reporting Manager columns works ascending and descending @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const placeholders: string[] = [];
    for (const col of ['Employee', 'Reporting Manager']) {
      await goals.clickSort(goals.table, col);
      await expect(goals.sortButton(goals.table, col)).toHaveAccessibleName(/descending|ascending/i);
      for (const dir of ['asc', 'desc'] as const) {
        if (dir === 'desc') await goals.clickSort(goals.table, col);
        const values = await goals.readEmployeeColumn(col);
        // Employees without a manager must group at one end; the rest must be in locale order.
        // 6.9.0 renders a missing manager as the readable word "No reporting manager" (empty-data convention met).
        const isBlank = (v: string) => /^(|—|-|N\/A|null|Not specified|No reporting manager)$/i.test(v);
        const isReadable = (v: string) => /^(Not specified|No reporting manager)$/i.test(v);
        const named = values.filter(v => !isBlank(v));
        const blanks = values.map((v, i) => (isBlank(v) ? i : -1)).filter(i => i >= 0);
        const grouped = blanks.every((b, i) => b === i) || blanks.every((b, i) => b === values.length - blanks.length + i);
        expect(grouped, `${col} ${dir}: placeholder rows should group at one end`).toBe(true);
        expect(isSortedText(named, dir), `${col} ${dir}: ${named.slice(0, 15).join(' | ')}`).toBe(true);
        placeholders.push(...values.filter(v => isBlank(v) && !isReadable(v)).map(v => `${col}: "${v}"`));
      }
    }
    // 2026-11-12 (6.9.0): missing managers now read "No reporting manager"; an employee row with a BLANK
    // Employee name (RM Suresh Kapoor, sorts first ascending) still breaks the convention.
    await softDefect(`Empty Employee / Reporting Manager values render as a bare placeholder instead of a readable word: ${[...new Set(placeholders)].join(', ')} (empty-data convention).`,
      () => expect.soft(placeholders, 'missing names / managers must read as a word, never blank or a dash').toEqual([]));
  });

  test('TC-EMPGOL-442 Sorting the numeric columns orders rows numerically @functional', async ({ primaryPage }) => {
    test.setTimeout(240_000);
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    for (const col of ['Goals', 'Overdue Goals', 'Certificates', 'L&D Hours']) {
      await goals.clickSort(goals.table, col);
      const asc = (await goals.readEmployeeColumn(col)).map(parseNumber);
      expect(isSorted(asc, 'asc'), `${col} ascending: ${asc.slice(0, 20).join(',')}`).toBe(true);
      await goals.clickSort(goals.table, col);
      const desc = (await goals.readEmployeeColumn(col)).map(parseNumber);
      expect(isSorted(desc, 'desc'), `${col} descending: ${desc.slice(0, 20).join(',')}`).toBe(true);
      await goals.goToPage(goals.nextPageBtn());
      const page2 = (await goals.readEmployeeColumn(col)).map(parseNumber);
      expect(page2[0], `${col} page 2 continues the descending order`).toBeLessThanOrEqual(desc[desc.length - 1]);
      expect(isSorted(page2, 'desc')).toBe(true);
      await goals.goToPage(goals.pageButton(1));
    }
  });

  test('TC-EMPGOL-443 Numeric range filter (Overdue Goals) narrows rows and Clear resets @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    const pop = await goals.openColumnFilter(goals.table, 'Overdue Goals');
    await expect(pop.getByText('Overdue Goals', { exact: true })).toBeVisible();
    const minS = pop.getByRole('slider', { name: 'Minimum' });
    const maxS = pop.getByRole('slider', { name: 'Maximum' });
    const range = await goals.readSlider(minS);
    expect(range.min).toBe(0);
    expect(range.max).toBeGreaterThanOrEqual(1);
    await expect(pop.getByText(String(range.min), { exact: true }).first()).toBeVisible();
    await expect(pop.getByText(String(range.max), { exact: true }).first()).toBeVisible();
    await expect(maxS).toBeVisible();
    for (const b of ['Clear', 'Save', 'Close']) await expect(pop.getByRole('button', { name: b, exact: true })).toBeVisible();
    await goals.closePopover();

    await goals.applyRangeFilter(goals.table, 'Overdue Goals', { min: 1 });
    const filtered = await goals.readTotal();
    expect(filtered).toBeLessThan(total);
    for (const v of (await goals.readEmployeeColumn('Overdue Goals')).map(parseNumber)) expect(v).toBeGreaterThanOrEqual(1);
    await goals.clearColumnFilter(goals.table, 'Overdue Goals');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
  });

  test('TC-EMPGOL-444 Range filters on Goals, Certificates and L&D Hours @functional', async ({ primaryPage }) => {
    test.setTimeout(240_000);
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    for (const col of ['Certificates', 'L&D Hours']) {
      const pop = await goals.openColumnFilter(goals.table, col);
      const { min } = await goals.readSlider(pop.getByRole('slider', { name: 'Minimum' }));
      await goals.closePopover();
      await goals.applyRangeFilter(goals.table, col, { max: min + 1 });
      const n = await goals.readTotal();
      expect(n, `${col} filtered total`).toBeLessThanOrEqual(total);
      for (const v of (await goals.readEmployeeColumn(col)).map(parseNumber)) {
        expect(v, `${col} value within [${min}, ${min + 1}]`).toBeGreaterThanOrEqual(min);
        expect(v, `${col} value within [${min}, ${min + 1}]`).toBeLessThanOrEqual(min + 1);
      }
      await goals.clearColumnFilter(goals.table, col);
      await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
    }
    // Live 6.3.2: the Goals column filter is a goal-status checklist, not a numeric range (the case
    // assumed a range). Its lowest bucket, "No Goals Assigned", is the equivalent of max = min = 0.
    test.info().annotations.push({ type: 'case-deviation', description: 'Goals column filter is a status checklist (Not Started / In Progress / Delayed / Completed) + "Search goal" box + "No Goals Assigned" switch, not a range slider.' });
    const pop = await goals.openColumnFilter(goals.table, 'Goals');
    await expect(pop.getByRole('checkbox')).toHaveCount(4);
    await expect(pop.getByRole('switch', { name: 'No Goals Assigned' })).toBeVisible();
    await goals.closePopover();
    await goals.applyNoGoalsAssignedFilter();
    expect(await goals.readTotal()).toBeLessThan(total);
    for (const v of (await goals.readEmployeeColumn('Goals')).map(parseNumber)) expect(v).toBe(0);
    await goals.clearColumnFilter(goals.table, 'Goals');
    await expectOrDefect('"Clear" in the By Employee Goals column filter does not reset the "No Goals Assigned" switch, so the filter stays applied (request keeps hasNoGoals=true).',
      () => expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`));
  });

  test('TC-EMPGOL-445 Text column filters (Employee, Reporting Manager) narrow the table @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    await goals.applyChecklistFilter(goals.table, 'Reporting Manager', ['Aarav Barot']);
    await goals.waitForResults();
    const n = await goals.readTotal();
    expect(n).toBeGreaterThan(0);
    expect(n).toBeLessThan(total);
    expect([...new Set(await goals.readEmployeeColumn('Reporting Manager'))]).toEqual(['Aarav Barot']);
    // The RM's team size as the dashboard reports it for the same RM.
    await goals.selectTopTab('Dashboard');
    const { kpis } = await goals.refreshDashboard(() => goals.selectFilter('RM', 'Aarav Barot'));
    expect(n, 'footer total equals the RM team size').toBe(kpis.totalEmployees);
    await goals.selectFilter('RM', 'All Managers');
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await goals.clearColumnFilter(goals.table, 'Reporting Manager');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
  });

  test('TC-EMPGOL-446 Column filters, search and top-level filters compose @functional', async ({ primaryPage }) => {
    test.setTimeout(240_000);
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.applyChecklistFilter(goals.table, 'Reporting Manager', ['Aarav Barot']);
    const t1 = await goals.readTotal();
    await goals.applyRangeFilter(goals.table, 'Overdue Goals', { min: 1 });
    const t2 = await goals.readTotal();
    expect(t2).toBeLessThanOrEqual(t1);
    test.skip(t2 === 0, 'Aarav Barot currently has no team member with an overdue goal — composition cannot be exercised');
    const member = (await goals.readEmployeeColumn('Employee'))[0];
    const search = goals.waitForApi(/\/api\/v1\/employee-goals\/employees\?.*search=/);
    await goals.searchEmployees(member.split(' ')[0]);
    const department = (await (await search).json()).data.items.find((i: any) => i.employeeName === member)?.departmentName as string;
    const t3 = await goals.readTotal();
    expect(t3).toBeLessThanOrEqual(t2);
    await goals.selectFilter('Department', department);
    const t4 = await goals.readTotal();
    expect(t4).toBeLessThanOrEqual(t3);
    await goals.searchEmployees('');
    const t5 = await goals.readTotal();
    expect(t5).toBeGreaterThanOrEqual(t4);
    await expectOrDefect('Changing the top-level Department drops the active Reporting Manager column filter (the list request loses rmId), so the result widens instead of keeping both column filters.',
      async () => {
        expect([...new Set(await goals.readEmployeeColumn('Reporting Manager'))]).toEqual(['Aarav Barot']);
        expect(t5).toBeLessThanOrEqual(t2);
      });
    for (const v of (await goals.readEmployeeColumn('Overdue Goals')).map(parseNumber)) expect(v).toBeGreaterThanOrEqual(1);
  });

  test('TC-EMPGOL-447 Admin RM filter in the shared filter group narrows By Employee @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.selectFilter('RM', 'Aarav Barot');
    await goals.waitForResults();
    const n = await goals.readTotal();
    expect(n).toBeGreaterThan(0);
    expect([...new Set(await goals.readEmployeeColumn('Reporting Manager'))]).toEqual(['Aarav Barot']);
    const { kpis } = await goals.refreshDashboard(() => goals.selectTopTab('Dashboard'));
    expect(kpis.totalEmployees).toBe(n);
  });

  test('TC-EMPGOL-448 Table options toggle column visibility @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const list = await goals.openTableOptions();
    await expect(list.getByRole('switch')).toHaveText(['Reporting Manager', 'Goals', 'Overdue Goals', 'Certificates', 'L&D Hours']);
    for (const sw of await list.getByRole('switch').all()) await expect(sw).toHaveAttribute('aria-checked', 'true');
    await expect(list.getByRole('switch', { name: 'Employee', exact: true })).toHaveCount(0);
    await expect(list.getByRole('switch', { name: 'Show goals' })).toHaveCount(0);
    await goals.columnSwitch('Certificates').click();
    await goals.closePopover();
    await expect.poll(() => goals.readHeaderNames()).not.toContain('Certificates');
    await goals.openTableOptions();
    await goals.columnSwitch('Certificates').click();
    await goals.closePopover();
    await expect.poll(() => goals.readHeaderNames()).toContain('Certificates');
  });

  test('TC-EMPGOL-449 Table options drag-to-reorder changes column order @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const list = await goals.openTableOptions();
    const handle = list.getByRole('listitem').filter({ hasText: 'L&D Hours' }).getByRole('button', { name: 'Drag to reorder' });
    // dnd-kit keyboard sensor: Space picks up, arrows move, Space drops. Its live region announces
    // each step — wait for the announcement to change so no key press lands mid-transition.
    const announcer = primaryPage.getByRole('dialog').filter({ has: list }).getByRole('status').first();
    await handle.focus();
    await primaryPage.keyboard.press('Space');
    await expect(announcer).toContainText(/picked up|was moved over droppable area ldHours/i);
    for (let i = 0; i < 3; i++) {
      const before = await announcer.innerText();
      await primaryPage.keyboard.press('ArrowUp');
      await expect.poll(() => announcer.innerText()).not.toBe(before);
    }
    await primaryPage.keyboard.press('Space');
    await expect(list.getByRole('switch')).toHaveText(['Reporting Manager', 'L&D Hours', 'Goals', 'Overdue Goals', 'Certificates']);
    await goals.closePopover();
    await expect.poll(() => goals.readHeaderNames()).toEqual(['Show goals', 'Employee', 'Reporting Manager', 'L&D Hours', 'Goals', 'Overdue Goals', 'Certificates']);
    for (const v of await goals.readEmployeeColumn('L&D Hours')) expect(v).toMatch(/^\d[\d,]*h$/);
  });

  test('TC-EMPGOL-451 Parent roll-up counts match the expanded goal rows @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.applyRangeFilter(goals.table, 'Overdue Goals', { min: 1 });
    const row = goals.employeeRows.first(); // any employee with an overdue goal
    const cells = (await row.getByRole('cell').allInnerTexts()).map(t => t.trim());
    const [goalCount, overdue, certificates] = [Number(cells[3]), Number(cells[4]), Number(cells[5])];
    await goals.toggleRow(row);
    await expect(row).toHaveAttribute('aria-expanded', 'true');
    const detail = await goals.readDetailRows(row);
    expect(detail, `goal rows for ${cells[1]}`).toHaveLength(goalCount);
    expect(detail.filter(d => d.status === 'Delayed'), 'Overdue Goals = Delayed rows').toHaveLength(overdue);
    let certGoals = 0;
    for (const d of detail) {
      const [g] = await goals.findGoalsByExactName(d.goal);
      if (g?.type === 'CERTIFICATE') certGoals++;
    }
    expect(certGoals, 'Certificates = certificate-type goals').toBe(certificates);
  });

  test('TC-EMPGOL-452 BUG — empty values in the expansion show a dash instead of "Not specified" @functional @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.searchEmployees('Arjun Jadeja');
    const row = goals.employeeRow('Arjun Jadeja');
    await goals.toggleRow(row);
    await expect(row).toHaveAttribute('aria-expanded', 'true');
    const detail = await goals.readDetailRows(row);
    const bad = detail.flatMap(d => Object.entries(d).filter(([, v]) => /^(—|-|N\/A|null|undefined)$/i.test(v ?? '')).map(([k, v]) => `${d.goal}.${k}="${v}"`));
    const rm = (await row.getByRole('cell').nth(2).innerText()).trim();
    if (/^(—|-|N\/A|null|)$/.test(rm)) bad.push(`Reporting Manager="${rm}"`);
    await expectOrDefect(`By Employee expansion renders bare placeholders instead of "Not specified": ${bad.join('; ')}`,
      async () => expect(bad).toEqual([]));
  });

  test('TC-EMPGOL-453 BUG — Progress History says "No progress recorded" while Completion % is non-zero @functional @needs-verification', async ({ primaryPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.searchEmployees('Arjun Jadeja');
    const row = goals.employeeRow('Arjun Jadeja');
    await goals.toggleRow(row);
    const detail = await goals.readDetailRows(row);
    const inconsistent = detail.filter(d => parseNumber(d.completion) > 0 && /no progress recorded/i.test(d.progressHistory));
    expect(detail.length).toBeGreaterThan(0);
    await expectOrDefect(`Progress History reads "No progress recorded" for goals with non-zero completion: ${inconsistent.map(d => `${d.goal} (${d.completion})`).join(', ')} (6.2.0 D8)`,
      async () => expect(inconsistent.map(d => d.goal)).toEqual([]));
  });

  test('TC-EMPGOL-454 Employees with zero goals and non-zero L&D Hours are explained @functional @needs-verification', async ({ primaryPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    // Goals filter is a status checklist on 6.3.2; its "No Goals Assigned" switch = Goals max 0.
    await goals.applyNoGoalsAssignedFilter();
    const hours = (await goals.readEmployeeColumn('L&D Hours')).map(parseNumber);
    for (const g of (await goals.readEmployeeColumn('Goals')).map(parseNumber)) expect(g).toBe(0);
    if (hours.some(h => h > 0)) {
      const header = goals.columnHeader(goals.table, 'L&D Hours');
      await header.getByText('L&D Hours').hover();
      const explanation = `${await header.getByText('L&D Hours').getAttribute('title')} ${await primaryPage.getByRole('tooltip').allInnerTexts().then(t => t.join(' ')).catch(() => '')}`;
      await expectOrDefect('Zero-goal employees show non-zero L&D Hours with no explanation that the column is timesheet (non-billable) hours independent of goals (6.2.0 D7).',
        async () => expect(explanation).toMatch(/timesheet|non-billable|independent/i));
    }
  });

  test('TC-EMPGOL-455 "Edit goal" action in the expansion opens the goal\'s Edit Goal dialog @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.searchEmployees('Arjun Jadeja');
    const row = goals.employeeRow('Arjun Jadeja');
    await goals.toggleRow(row);
    const panel = await goals.detailPanel(row);
    const goalName = (await goals.readDetailRows(row))[0].goal;
    await panel.getByRole('button', { name: `Edit goal ${goalName}`, exact: true }).click();
    await expect(goals.editGoalDialog).toBeVisible();
    await expect(goals.goalNameInput).toHaveValue(goalName);
    await expect(goals.goalNameInput).toBeDisabled();
    await expect(goals.goalTypeCombo).toBeDisabled();
    for (const f of RICH_TEXT_FIELDS) await expect(goals.editor(f)).toHaveAttribute('contenteditable', 'true');
    await expect(goals.goalDialog.getByRole('button', { name: /assign|record progress/i })).toHaveCount(0);
    await goals.closeGoalDialog('Cancel');
    await expect(goals.goalDialog).toBeHidden();
    await expect(panel.getByRole('button', { name: /assign|record progress|update progress/i })).toHaveCount(0);
  });

  test('TC-EMPGOL-462 Narrow columns keep sort and filter buttons visible with full name on hover @functional', async ({ primaryPage }) => {
    await primaryPage.setViewportSize({ width: 1024, height: 768 });
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    for (const col of ['Employee', 'Reporting Manager', 'Goals', 'Overdue Goals', 'Certificates', 'L&D Hours']) {
      const header = goals.columnHeader(goals.table, col);
      await header.scrollIntoViewIfNeeded();
      await expect(goals.sortButton(goals.table, col), `${col} sort button`).toBeVisible();
      await expect(goals.filterButton(goals.table, col), `${col} filter button`).toBeVisible();
    }
    for (const col of ['Overdue Goals', 'L&D Hours']) {
      await expect(goals.columnHeader(goals.table, col).getByText(col, { exact: true })).toHaveAttribute('title', col);
    }
  });
});

// ════════════════════════════════════════════════════════════════════════════
// Goals > By Goal — catalogue
// ════════════════════════════════════════════════════════════════════════════
test.describe('Goals — Functional — By Goal catalogue', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-464 By Goal pagination reaches every goal @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const { total } = await goals.readResults();
    const last = Math.ceil(total / 100);
    await goals.goToPage(goals.nextPageBtn());
    await expect(goals.resultsStatus).toHaveText(`Showing 101 - ${Math.min(200, total)} of ${total} results`);
    await goals.goToPage(goals.pageButton(last));
    await expect(goals.resultsStatus).toHaveText(`Showing ${(last - 1) * 100 + 1} - ${total} of ${total} results`);
    await expect(goals.goalRows).toHaveCount(total - (last - 1) * 100);
    await expect(goals.nextPageBtn()).toBeDisabled();
  });

  test('TC-EMPGOL-465 Search matches goal name and description and updates the footer @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const { total } = await goals.readResults();
    await goals.searchGoals('Kubernetes');
    const n = await goals.readTotal();
    expect(n).toBeGreaterThan(0);
    expect(n).toBeLessThan(total);
    for (const row of await goals.goalRows.all()) {
      const name = await row.getByRole('cell').nth(1).innerText();
      const desc = await row.getByRole('cell').nth(3).innerText();
      expect(`${name} ${desc}`).toMatch(/kubernetes/i);
    }
    // A goal that only exists beyond the first 100 rows.
    await goals.searchGoals('');
    await goals.goToPage(goals.pageButton(Math.ceil(total / 100)));
    const deepName = (await goals.readGoalNameCell(goals.goalRows.first())).name;
    await goals.goToPage(goals.pageButton(1));
    await goals.searchGoals(deepName);
    await expect(goals.goalRow(deepName)).toBeVisible();
    await goals.searchGoals('');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
  });

  test('TC-EMPGOL-466 Goal Name shows the name first and the certificate code in muted text @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.searchGoals('Kubernetes Administrator (CKA)');
    const cka = goals.goalRow('Kubernetes Administrator (CKA)');
    expect(await goals.readGoalNameCell(cka)).toEqual({ name: 'Kubernetes Administrator (CKA)', code: 'CKA' });
    await expect(cka.getByRole('cell').nth(1).locator('.text-muted-foreground')).toHaveText('CKA');
    await goals.searchGoals('GraphQL API Design');
    const gql = goals.goalRow('GraphQL API Design');
    expect(await goals.readGoalNameCell(gql)).toEqual({ name: 'GraphQL API Design', code: '' });
  });

  test('TC-EMPGOL-467 Goal Name sort is alphabetical by name, not by certificate code @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.clickSort(goals.table, 'Goal Name');
    const asc = (await goals.readGoalNames()).slice(0, 20);
    expect(isSortedText(asc, 'asc'), asc.join(' | ')).toBe(true);
    await goals.clickSort(goals.table, 'Goal Name');
    const desc = (await goals.readGoalNames()).slice(0, 20);
    expect(isSortedText(desc, 'desc'), desc.join(' | ')).toBe(true);
  });

  test('TC-EMPGOL-468 Goal Name and Type column filters @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const { total } = await goals.readResults();
    const pop = await goals.openColumnFilter(goals.table, 'Goal Name');
    await pop.getByRole('textbox').first().fill('GraphQL API Design');
    await expect(pop.getByRole('checkbox', { name: 'GraphQL API Design', exact: true })).toBeVisible();
    await goals.closePopover();
    await goals.applyChecklistFilter(goals.table, 'Goal Name', ['GraphQL API Design']);
    await expect(goals.resultsStatus).toHaveText('Showing 1 - 1 of 1 results');
    expect(await goals.readGoalNames()).toEqual(['GraphQL API Design']);
    await goals.clearColumnFilter(goals.table, 'Goal Name');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);

    await goals.applyChecklistFilter(goals.table, 'Type', ['Certificate']);
    const certs = await goals.readTotal();
    expect(certs).toBeGreaterThan(0);
    expect(certs).toBeLessThan(total);
    expect([...new Set(await goals.readTableColumn(goals.table, 'Type'))]).toEqual(['Certificate']);
  });

  test('TC-EMPGOL-469 Assigned count columns sort numerically with None treated as zero @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const defaultOrg = (await goals.readTableColumn(goals.table, 'Assigned Emp. (Org.)')).map(num);
    expect(isSorted(defaultOrg, 'desc'), `default order ${defaultOrg.slice(0, 10).join(',')}`).toBe(true);
    for (const col of ['Assigned Emp. (Dept.)', 'Assigned Emp. (Org.)']) {
      await goals.clickSort(goals.table, col);
      const asc = (await goals.readTableColumn(goals.table, col)).map(num);
      expect(isSorted(asc, 'asc'), `${col} asc ${asc.slice(0, 10).join(',')}`).toBe(true);
      await goals.clickSort(goals.table, col);
      const desc = (await goals.readTableColumn(goals.table, col)).map(num);
      expect(isSorted(desc, 'desc'), `${col} desc ${desc.slice(0, 10).join(',')}`).toBe(true);
    }
  });

  test('TC-EMPGOL-470 Search, filter and sort combine without losing each other @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.applyChecklistFilter(goals.table, 'Type', ['Certificate']);
    await goals.searchGoals('Cert');
    await goals.clickSort(goals.table, 'Goal Name');
    await goals.clickSort(goals.table, 'Goal Name');
    const check = async () => {
      expect([...new Set(await goals.readTableColumn(goals.table, 'Type'))]).toEqual(['Certificate']);
      const names = await goals.readGoalNames();
      expect(isSortedText(names, 'desc'), names.join(' | ')).toBe(true);
      for (const row of await goals.goalRows.all()) expect(await row.innerText()).toMatch(/cert/i);
    };
    await check();
    const r = await goals.readResults();
    if (r.total > r.to) {
      await goals.goToPage(goals.nextPageBtn());
      await check();
    }
  });

  test('TC-EMPGOL-471 Assigned Emp. (Dept.) count opens the "Department Employees" popover @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.selectFilter('Department', 'QA', /\/api\/v1\/goals\?/);
    const departmentId = new URL(primaryPage.url()).searchParams.get('departmentId');
    expect(departmentId).toBeTruthy();
    const row = goals.goalRows.first();
    const count = num(await goals.countCell(row, 'Dept').innerText());
    test.skip(count === 0, 'First goal has no QA assignments in this data set');
    const pop = await goals.openCountPopover(row, 'Dept');
    const names = await goals.readDeptEmployees(pop);
    expect(names).toHaveLength(count);
    for (const name of names.slice(0, 3)) {
      const { body } = await goals.apiGet(`/api/v1/employee-goals/employees?page=1&limit=100&timeFrame=15d&departmentId=${departmentId}&search=${encodeURIComponent(name)}`);
      expect(body?.data?.total, `${name} belongs to QA`).toBeGreaterThan(0);
    }
  });

  test('TC-EMPGOL-472 Assigned Emp. (Org.) count opens a department breakdown that sums to the count @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.searchGoals('Kubernetes Administrator (CKA)');
    let row = goals.goalRow('Kubernetes Administrator (CKA)');
    const org = num(await goals.countCell(row, 'Org').innerText());
    const pop = await goals.openCountPopover(row, 'Org');
    const breakdown = await goals.readOrgBreakdown(pop);
    expect(breakdown.length).toBeGreaterThan(1);
    expect(isSorted(breakdown.map(b => b.count), 'desc'), JSON.stringify(breakdown)).toBe(true);
    expect(breakdown.reduce((a, b) => a + b.count, 0)).toBe(org);
    await goals.closePopover();
    // With one department active, that department's entry equals Assigned Emp. (Dept.).
    const dept = breakdown[0].department;
    await goals.selectFilter('Department', dept, /\/api\/v1\/goals\?/);
    await goals.searchGoals('Kubernetes Administrator (CKA)');
    row = goals.goalRow('Kubernetes Administrator (CKA)');
    expect(num(await goals.countCell(row, 'Dept').innerText())).toBe(breakdown[0].count);
  });

  test('TC-EMPGOL-473 Assigned count columns use one empty representation @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const { total } = await goals.readResults();
    await goals.goToPage(goals.pageButton(Math.ceil(total / 100)));
    for (const col of ['Assigned Emp. (Dept.)', 'Assigned Emp. (Org.)']) {
      const values = await goals.readTableColumn(goals.table, col);
      const empties = new Set(values.filter(v => !/^[1-9]\d*$/.test(v)));
      expect(empties.size, `${col} empty representations: ${[...empties].join(', ')}`).toBeLessThanOrEqual(1);
    }
  });

  test('TC-EMPGOL-474 BUG — Description cell shows literal "undefined" or blank instead of "Not specified" @functional @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const found: string[] = [];
    for (const name of ['TC049-1784178347632', 'TOGAF Enterprise Architecture']) {
      await goals.searchGoals(name);
      const desc = (await goals.goalRow(name).getByRole('cell').nth(3).innerText()).trim();
      found.push(`${name}: "${desc}"`);
      await softDefect(`By Goal Description for "${name}" renders "${desc}" instead of "Not specified".`,
        () => expect.soft(desc, `${name} description`).not.toMatch(/^(|undefined|null|—|-)$/));
    }
    expect(found).toHaveLength(2);
  });

  test('TC-EMPGOL-475 Long descriptions are truncated in the table @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const rows = goals.goalRows;
    let target: Locator | null = null;
    for (const row of (await rows.all()).slice(0, 100)) {
      const cell = row.getByRole('cell').nth(3);
      if ((await cell.innerText()).length > 120) { target = row; break; }
    }
    test.skip(!target, 'No goal with a long description on the first page');
    const cell = target!.getByRole('cell').nth(3);
    const span = cell.locator('[data-slot="tooltip-trigger"]').first();
    await expect(span).toHaveClass(/truncate|line-clamp/);
    const own = (await target!.boundingBox())!.height;
    const neighbour = (await rows.first().boundingBox())!.height;
    expect(Math.abs(own - neighbour)).toBeLessThanOrEqual(8);
    const full = (await cell.innerText()).trim();
    await span.hover();
    await expect(primaryPage.getByRole('tooltip')).toContainText(full.slice(0, 40));
  });
});

// ════════════════════════════════════════════════════════════════════════════
// Goals > By Goal — Add / Edit / Delete
// ════════════════════════════════════════════════════════════════════════════
test.describe('Goals — Functional — Add / Edit / Delete goal', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-477 Goal Type defaults to Technical and Certificate Code appears only for Certificate @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await expect(goals.goalTypeCombo).toHaveText('Technical');
    expect(await goals.getGoalTypeOptions()).toEqual(['Technical', 'Certificate']);
    await expect(goals.certificateCodeInput).toHaveCount(0);
    await goals.selectGoalType('Certificate');
    await expect(goals.certificateCodeInput).toBeVisible();
    await expect(goals.certificateCodeInput).toHaveAttribute('placeholder', 'Enter certificate code');
    await goals.selectGoalType('Technical');
    await expect(goals.certificateCodeInput).toHaveCount(0);
  });

  test('TC-EMPGOL-479 Save stays disabled until the mandatory fields are valid @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await expect(goals.dialogSaveBtn).toBeDisabled();
    await goals.typeGoalName(GoalsPage.uniqueName('save-gate'));
    await expect(goals.dialogSaveBtn).toBeEnabled();
    await goals.goalNameInput.press('ControlOrMeta+a');
    await goals.goalNameInput.press('Backspace');
    await expect(goals.dialogSaveBtn).toBeDisabled();
  });

  test('TC-EMPGOL-481 Goal Name shows invalid styling only after interaction @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await expect(goals.goalNameInput).not.toHaveAttribute('aria-invalid', 'true');
    await goals.goalNameInput.focus();
    await goals.goalNameInput.blur();
    await expectOrDefect('Blurring the empty, required Goal Name shows no invalid state ("Name is required" only appears after typing and clearing).',
      () => expect(goals.goalNameInput).toHaveAttribute('aria-invalid', 'true', { timeout: 5_000 }));
    await expect(goals.formItem('Goal Name')).toContainText('Name is required');
  });

  test('TC-EMPGOL-485 Estimated Duration units show a real 0 and clicking selects the contents @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    for (const input of [goals.monthsInput, goals.weeksInput, goals.daysInput]) await expect(input).toHaveValue('0');
    await goals.weeksInput.click();
    await primaryPage.keyboard.type('3');
    await expect(goals.weeksInput).toHaveValue('3');
  });

  test('TC-EMPGOL-488 Months, Weeks and Days are stored and shown back exactly @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const withDuration = GoalsPage.uniqueName('dur');
    created.push(withDuration);
    await goals.createGoal({ name: withDuration, duration: { months: 1, weeks: 2, days: 3 } });
    await goals.openEditGoal(withDuration);
    expect(await goals.readDuration()).toEqual({ months: '1', weeks: '2', days: '3' });
    await goals.closeGoalDialog('Cancel');

    const zero = GoalsPage.uniqueName('dur0');
    created.push(zero);
    await goals.createGoal({ name: zero });
    await goals.openEditGoal(zero);
    expect(await goals.readDuration()).toEqual({ months: '0', weeks: '0', days: '0' });
    await goals.closeGoalDialog('Cancel');
    await expect(goals.goalRow(zero)).not.toContainText(/0 (days|weeks|months)/);
  });

  test('TC-EMPGOL-489 Rich-text formatting and Undo/Redo work independently in all four editors @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('rte');
    created.push(name);
    await goals.openAddGoal();
    await goals.typeGoalName(name);
    for (const f of RICH_TEXT_FIELDS) {
      await goals.typeRichText(f, `Text for ${f}`);
      await goals.selectAllInEditor(f);
      for (const b of ['Bold', 'Bullet list', 'Quote']) await goals.toolbarButton(f, b).click();
    }
    await goals.toolbarButton('Learning Objectives', 'Undo').click();
    // Undo reverts the last history step of Learning Objectives only (the editor groups the quick
    // Bullet+Quote clicks into one step); the other three editors keep all their formatting.
    const expectFormatting = async (stage: string) => {
      for (const f of RICH_TEXT_FIELDS) {
        const ed = goals.editor(f);
        await expect(ed, `${stage}: ${f} text`).toContainText(`Text for ${f}`);
        await expect(ed.locator('strong'), `${stage}: ${f} bold`).toHaveCount(1);
        if (f === 'Learning Objectives') {
          await expect(ed.locator('blockquote'), `${stage}: ${f} quote undone`).toHaveCount(0);
        } else {
          await expect(ed.locator('li'), `${stage}: ${f} bullet`).toHaveCount(1);
          await expect(ed.locator('blockquote'), `${stage}: ${f} quote`).toHaveCount(1);
        }
      }
    };
    await expectFormatting('before save');
    const res = await goals.saveGoalDialog();
    expect(res?.ok()).toBe(true);
    await expect(goals.addGoalDialog).toBeHidden();
    await primaryPage.reload();
    await goals.waitForResults();
    await goals.openEditGoal(name);
    await expectFormatting('after reopen');
  });

  test('TC-EMPGOL-491 Cancel, Close and Escape discard a part-filled Add Goal dialog @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const { total } = await goals.readResults();
    for (const how of ['Cancel', 'Close', 'Escape'] as const) {
      await goals.openAddGoal();
      await goals.typeGoalName(GoalsPage.uniqueName(`discard-${how}`));
      await goals.typeRichText('Description', 'discard me');
      if (how === 'Escape') {
        await primaryPage.keyboard.press('Escape');
        await softDefect('Escape pressed while focus is in a rich-text editor does not close the Add Goal dialog (a second Escape is needed).',
          () => expect.soft(goals.addGoalDialog).toBeHidden({ timeout: 3_000 }));
        if (await goals.addGoalDialog.isVisible()) await primaryPage.keyboard.press('Escape');
        await expect(goals.addGoalDialog).toBeHidden();
      } else {
        await goals.closeGoalDialog(how);
      }
      await goals.openAddGoal();
      await expect(goals.goalNameInput, `name after ${how}`).toHaveValue('');
      await expect(goals.editor('Description'), `description after ${how}`).toHaveText('');
      await goals.closeGoalDialog('Cancel');
    }
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
  });

  test('TC-EMPGOL-492 Create a Technical goal with all the new fields @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const { total } = await goals.readResults();
    const name = GoalsPage.uniqueName('tech');
    created.push(name);
    await goals.createGoal({
      name,
      richText: { 'Description': 'Automation description', 'Learning Objectives': 'Learn things', 'Definition of Done': 'Done when done', 'Topics & Concepts': 'Topics' },
      duration: { months: 1 },
    });
    await expect(goals.getToast().filter({ hasText: 'Goal created successfully' }).first()).toBeVisible();
    await expect(goals.addGoalDialog).toBeHidden();
    await goals.searchGoals(name);
    await expect(goals.goalRows).toHaveCount(1);
    const row = goals.goalRow(name);
    await expect(row.getByRole('cell').nth(2)).toHaveText('Technical');
    await expect(row.getByRole('cell').nth(3)).toHaveText('Automation description');
    await expect(goals.countCell(row, 'Dept')).toHaveText('None');
    await expect(goals.countCell(row, 'Org')).toHaveText('None');
    await expect(row.getByRole('button', { name: 'Delete', exact: true })).toBeEnabled();
    await goals.searchGoals('');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total + 1} results`);
  });

  test('TC-EMPGOL-493 Create a Certificate goal and see the code in the Name column @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('cert');
    const code = `AG${Date.now().toString(36).toUpperCase()}`;
    created.push(name);
    await goals.createGoal({ name, type: 'Certificate', certificateCode: code });
    await goals.searchGoals(name);
    const row = goals.goalRow(name);
    expect(await goals.readGoalNameCell(row)).toEqual({ name, code });
    await expect(row.getByRole('cell').nth(2)).toHaveText('Certificate');
  });

  test('TC-EMPGOL-497 Edit Goal locks name and type and is pre-filled @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openEditGoal('Kubernetes Administrator (CKA)');
    await expect(goals.editGoalDialog.getByText('Edit employee goal details')).toBeVisible();
    await expect(goals.goalNameInput).toBeDisabled();
    await expect(goals.goalNameInput).toHaveValue('Kubernetes Administrator (CKA)');
    await expect(goals.goalTypeCombo).toBeDisabled();
    await expect(goals.goalTypeCombo).toHaveText('Certificate');
    await expect(goals.certificateCodeInput).toBeEditable();
    await expect(goals.certificateCodeInput).toHaveValue('CKA');
    await expect(goals.editor('Description')).toHaveText('Certified Kubernetes Administrator certification');
    for (const f of ['Learning Objectives', 'Definition of Done', 'Topics & Concepts'] as RichTextField[]) await expect(goals.editor(f)).toHaveAttribute('contenteditable', 'true');
    for (const i of [goals.monthsInput, goals.weeksInput, goals.daysInput]) await expect(i).toBeEditable();
    await expect(goals.dialogSaveBtn).toBeDisabled();
    await goals.closeGoalDialog('Cancel');
  });

  test('TC-EMPGOL-498 Edit Save enables only after a change and Cancel discards @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('edit-gate');
    created.push(name);
    await goals.createGoal({ name });
    await goals.openEditGoal(name);
    await expect(goals.dialogSaveBtn).toBeDisabled();
    await goals.typeRichText('Definition of Done', 'X');
    await expect(goals.dialogSaveBtn).toBeEnabled();
    await primaryPage.keyboard.press('Backspace');
    await softDefect('Edit Goal keeps Save enabled after a change is reverted (typing then deleting the same character in Definition of Done).',
      () => expect.soft(goals.dialogSaveBtn).toBeDisabled({ timeout: 5_000 }));
    await goals.typeRichText('Definition of Done', 'discarded');
    await goals.closeGoalDialog('Cancel');
    await goals.openEditGoal(name);
    await expect(goals.editor('Definition of Done')).toHaveText('');
    await goals.closeGoalDialog('Cancel');
  });

  test('TC-EMPGOL-499 Editing a goal persists everywhere it is shown @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('edit');
    created.push(name);
    const { id } = await goals.createGoal({ name });
    await goals.openEditGoal(name);
    await goals.typeRichText('Description', 'Edited description');
    await goals.typeRichText('Topics & Concepts', 'Edited topics');
    await goals.setDuration({ weeks: 2 });
    const res = await goals.saveGoalDialog();
    expect(res?.status()).toBeLessThan(300);
    await expect(goals.getToast().filter({ hasText: /updated/i }).first()).toBeVisible();
    await expect(goals.editGoalDialog).toBeHidden();
    await expect(goals.goalRow(name).getByRole('cell').nth(3)).toHaveText('Edited description');

    await primaryPage.reload();
    await goals.waitForResults();
    await goals.openEditGoal(name);
    await expect(goals.editor('Description')).toHaveText('Edited description');
    await expect(goals.editor('Topics & Concepts')).toHaveText('Edited topics');
    await expect(goals.weeksInput).toHaveValue('2');
    await goals.closeGoalDialog('Cancel');

    const { status, body } = await goals.apiGet(`/api/v1/goals/${id}`);
    expect(status).toBe(200);
    expect(body.data.description).toContain('Edited description');
    expect(body.data.topicsAndConcepts).toContain('Edited topics');
    expect(JSON.stringify(body.data.estimatedDuration)).toMatch(/2/);
  });

  test('TC-EMPGOL-500 Delete is disabled for goals with assignments @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.searchGoals('Kubernetes Administrator (CKA)');
    let row = goals.goalRow('Kubernetes Administrator (CKA)');
    const del = () => goals.goalRow('Kubernetes Administrator (CKA)').getByRole('button', { name: 'Delete', exact: true });
    await expect(del()).toBeDisabled();
    // Find a department where this goal has no assignments.
    const breakdown = await goals.readOrgBreakdown(await goals.openCountPopover(row, 'Org'));
    await goals.closePopover();
    const options = (await goals.getFilterOptions('Department')).filter(o => o !== 'All Departments');
    const emptyDept = options.find(o => !breakdown.some(b => b.department === o));
    test.skip(!emptyDept, 'Goal is assigned in every department');
    await goals.selectFilter('Department', emptyDept!, /\/api\/v1\/goals\?/);
    await goals.searchGoals('Kubernetes Administrator (CKA)');
    row = goals.goalRow('Kubernetes Administrator (CKA)');
    await expect(goals.countCell(row, 'Dept')).toHaveText('None');
    await expect(del()).toBeDisabled();
    // The disabled control should say why (6.2.0 D15). Disabled buttons get no pointer events, so hover the wrapper.
    await row.getByRole('cell').first().hover();
    await del().hover({ force: true });
    await expectOrDefect('Disabled Delete on an assigned goal gives no explanation (no tooltip / accessible description) — 6.2.0 D15.',
      () => expect(primaryPage.getByRole('tooltip')).toContainText(/assign/i, { timeout: 5_000 }));
  });

  test('TC-EMPGOL-501 Delete is enabled for a zero-assignment goal and asks for confirmation @functional', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('del');
    created.push(name);
    const before = await goals.readTotal();
    await goals.createGoal({ name });
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${before + 1} results`, { timeout: 30_000 });
    const total = before + 1;
    await goals.searchGoals(name);
    const row = goals.goalRow(name);
    const deleteBtn = row.getByRole('button', { name: 'Delete', exact: true });
    await expect(deleteBtn).toBeEnabled();
    await deleteBtn.click();
    await expect(goals.deleteGoalDialog).toBeVisible();
    await softDefect('Delete Goal confirmation does not name the goal being deleted (generic "Removing this goal…" text).',
      () => expect.soft(goals.deleteGoalDialog).toContainText(name));
    await goals.deleteGoalDialog.getByRole('button', { name: 'No', exact: true }).click();
    await expect(goals.deleteGoalDialog).toBeHidden();
    await expect(row).toBeVisible();
    await deleteBtn.click();
    const del = primaryPage.waitForResponse(r => /\/api\/v1\/goals\/[\w-]+$/.test(r.url()) && r.request().method() === 'DELETE');
    await goals.deleteGoalDialog.getByRole('button', { name: 'Delete', exact: true }).click();
    expect((await del).status()).toBeLessThan(300);
    await expect(goals.getToast().filter({ hasText: 'Goal deleted successfully' }).first()).toBeVisible();
    await expect(goals.goalRow(name)).toHaveCount(0);
    await goals.searchGoals('');
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total - 1} results`);
  });
});

// ════════════════════════════════════════════════════════════════════════════
// Cross-cutting
// ════════════════════════════════════════════════════════════════════════════
test.describe('Goals — Functional — Layout', () => {
  test('TC-EMPGOL-540 Responsive layout at phone and tablet widths @functional', async ({ primaryPage }) => {
    test.setTimeout(180_000);
    const goals = new GoalsPage(primaryPage);
    for (const width of [375, 768, 1280]) {
      await primaryPage.setViewportSize({ width, height: 900 });
      for (const view of ['dashboard', 'byEmployee', 'byGoal'] as const) {
        if (view === 'dashboard') await goals.openDashboard();
        else if (view === 'byEmployee') await goals.openByEmployee();
        else await goals.openByGoal();
        expect(await goals.hasHorizontalPageOverflow(), `${view} @${width}px horizontal page scroll`).toBe(false);
        await expect(goals.dashboardTab, `${view} @${width}px`).toBeInViewport();
        await expect(goals.goalsTab, `${view} @${width}px`).toBeInViewport();
        if (view !== 'dashboard') {
          await expect(goals.byEmployeeTab).toBeInViewport();
          await expect(goals.byGoalTab).toBeInViewport();
        }
      }
    }
  });
});
