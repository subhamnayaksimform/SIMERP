// TC-EMPGOL-532..539 — accessibility of the SimERP 6.3.2 Goals screen: keyboard tabs, dialog focus
// management, heading structure, chart / popover names, automated scan, live result counts.
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

async function softDefect(description: string, check: () => Promise<unknown> | unknown): Promise<void> {
  const before = test.info().errors.length;
  await check();
  if (test.info().errors.length > before) test.info().annotations.push({ type: 'defect', description });
}
async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

test.describe('Goals — Accessibility', () => {
  test.describe.configure({ timeout: 150_000 });

  test('TC-EMPGOL-532 Both tablists support Arrow/Home/End keyboard navigation @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.dashboardTab.focus();
    await primaryPage.keyboard.press('ArrowRight');
    await expect(goals.goalsTab).toBeFocused();
    await expect(goals.goalsTab).toHaveAttribute('aria-selected', 'true');
    await primaryPage.keyboard.press('Home');
    await expect(goals.dashboardTab).toBeFocused();
    await expect(goals.dashboardTab).toHaveAttribute('aria-selected', 'true');
    await primaryPage.keyboard.press('End');
    await expect(goals.goalsTab).toBeFocused();
    await goals.waitForResults();

    await goals.byEmployeeTab.focus();
    await primaryPage.keyboard.press('ArrowRight');
    await expect(goals.byGoalTab).toHaveAttribute('aria-selected', 'true');
    await goals.waitForResults();
    await expectOrDefect('Keyboard focus is lost from the "Goals view" tablist once the By Goal view finishes loading (Home/End then act on <body>) — 6.2.0 D22.', async () => {
      await expect(goals.byGoalTab).toBeFocused({ timeout: 3_000 });
      await primaryPage.keyboard.press('Home');
      await expect(goals.byEmployeeTab).toBeFocused({ timeout: 3_000 });
      await goals.waitForResults();
      await primaryPage.keyboard.press('End');
      await expect(goals.byGoalTab).toBeFocused({ timeout: 3_000 });
    });
  });

  test('TC-EMPGOL-533 BUG — Add/Edit Goal dialog does not restore focus on close @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.addGoalBtn.focus();
    await primaryPage.keyboard.press('Enter');
    await expect(goals.addGoalDialog).toBeVisible();
    await expect(goals.goalNameInput).toBeFocused();
    for (let i = 0; i < 70; i++) {
      await primaryPage.keyboard.press('Tab');
      await expect(goals.addGoalDialog.locator(':focus'), `focus stays in the dialog after ${i + 1} Tab(s)`).toHaveCount(1);
    }
    // Escape from inside a rich-text editor is consumed by the editor — close from a plain field.
    await goals.goalNameInput.focus();
    await primaryPage.keyboard.press('Escape');
    await expect(goals.addGoalDialog).toBeHidden();
    await expectOrDefect('Closing the Add Goal dialog does not return focus to the "Add Goal" button (focus drops to <body>) — 6.2.0 D23.',
      () => expect(goals.addGoalBtn).toBeFocused({ timeout: 5_000 }));
  });

  test('TC-EMPGOL-534 Dashboard dialogs trap and restore focus @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const viewAll = goals.completionCard.getByRole('button', { name: 'View All' });
    await viewAll.focus();
    await primaryPage.keyboard.press('Enter');
    const list = goals.listDialog('Completion by Goal');
    await expect(list).toBeVisible();
    for (let i = 0; i < 40; i++) {
      await primaryPage.keyboard.press('Tab');
      await expect(list.locator(':focus'), `View All focus trapped (${i + 1})`).toHaveCount(1);
    }
    await primaryPage.keyboard.press('Escape');
    await expect(list).toBeHidden();
    await softDefect('Closing the "Completion by Goal" View All dialog does not return focus to its "View All" opener.',
      () => expect.soft(viewAll).toBeFocused({ timeout: 3_000 }));

    const opener = goals.rankedButtons(goals.completionCard).first();
    const goalName = ((await opener.getAttribute('aria-label')) ?? '').replace(/^View assignments for /, '');
    await opener.focus();
    await primaryPage.keyboard.press('Enter');
    const dlg = goals.assignmentsDialog(goalName);
    await expect(dlg).toBeVisible();
    for (let i = 0; i < 25; i++) {
      await primaryPage.keyboard.press('Tab');
      await expect(dlg.locator(':focus'), `assignments focus trapped (${i + 1})`).toHaveCount(1);
    }
    await dlg.getByRole('button', { name: 'Close', exact: true }).last().focus();
    await primaryPage.keyboard.press('Enter');
    await expect(dlg).toBeHidden();
    await expectOrDefect('Closing a "View assignments" dialog does not return focus to the list item that opened it.',
      () => expect(opener).toBeFocused({ timeout: 3_000 }));
  });

  test('TC-EMPGOL-535 One H1 and a logical heading order @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await expect(primaryPage.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(primaryPage.getByRole('heading', { level: 1 })).toHaveText('Goals');
    await expect(goals.content.getByRole('heading', { level: 2 })).toHaveCount(5);
    await expect(goals.content.getByRole('heading', { level: 3 })).toHaveCount(0);
    const list = await goals.openViewAll('Completion by Goal');
    await expect(list.getByRole('heading', { level: 2, name: 'Completion by Goal' })).toBeVisible();
    await list.getByRole('button', { name: 'Close', exact: true }).last().click();

    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await expect(primaryPage.getByRole('heading', { level: 1 })).toHaveCount(1);
    await goals.selectGoalsView('By Goal');
    await goals.openAddGoal();
    await expect(goals.addGoalDialog.getByRole('heading', { level: 2, name: 'Add Goal' })).toBeVisible();
  });

  test('TC-EMPGOL-536 Charts expose an accessible name and text alternative @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const charts = goals.content.getByRole('application');
    await expect(charts).toHaveCount(3);
    await expectOrDefect('Dashboard charts (role=application) have no accessible name.', async () => {
      for (const chart of await charts.all()) await expect(chart).toHaveAccessibleName(/\S/, { timeout: 3_000 });
    });
  });

  test('TC-EMPGOL-537 Table options and range-filter popovers have accessible names @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const names: string[] = [];
    await goals.openTableOptions();
    const optionsDialog = primaryPage.getByRole('dialog').filter({ has: goals.columnVisibilityList });
    names.push(`Table options: "${(await optionsDialog.getAttribute('aria-label')) ?? ''}${(await optionsDialog.getAttribute('aria-labelledby')) ?? ''}"`);
    const optionsNamed = optionsDialog.and(primaryPage.locator('[aria-label], [aria-labelledby]'));
    await goals.closePopover();
    const pop = await goals.openColumnFilter(goals.table, 'Overdue Goals');
    names.push(`Filter Overdue Goals: "${(await pop.getAttribute('aria-label')) ?? ''}${(await pop.getAttribute('aria-labelledby')) ?? ''}"`);
    await expectOrDefect(`Popover dialogs have no accessible name (${names.join('; ')}).`, async () => {
      await expect(pop).toHaveAccessibleName(/\S/, { timeout: 3_000 });
      await goals.closePopover();
      await goals.openTableOptions();
      await expect(optionsNamed).toHaveCount(1, { timeout: 3_000 });
    });
  });

  test('TC-EMPGOL-538 Automated axe scan has no serious violations; status not by colour alone @a11y', async ({ primaryPage }) => {
    let AxeBuilder: any = null;
    try { AxeBuilder = require('@axe-core/playwright').default; } catch { AxeBuilder = null; }
    test.skip(!AxeBuilder, '@axe-core/playwright is not installed in this repo — install it to run the automated scan (qa-conventions: "use @axe-core/playwright (when installed)").');
    const goals = new GoalsPage(primaryPage);
    const scan = async (label: string) => {
      const results = await new AxeBuilder({ page: primaryPage }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const serious = results.violations.filter((v: any) => ['serious', 'critical'].includes(v.impact));
      expect.soft(serious.map((v: any) => `${v.id} (${v.nodes.length})`), `${label}: serious/critical axe violations`).toEqual([]);
    };
    await goals.openDashboard();
    await scan('Dashboard');
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await goals.toggleRow(goals.employeeRows.first());
    await scan('By Employee (expanded)');
    const panel = await goals.detailPanel(goals.employeeRows.first());
    for (const s of await panel.getByRole('table').locator('tbody tr > td:nth-child(2)').allInnerTexts()) expect(s.trim()).toMatch(/^(Not Started|In Progress|Delayed|Completed)$/);
    await goals.selectGoalsView('By Goal');
    await scan('By Goal');
    await goals.openAddGoal();
    await scan('Add Goal dialog');
  });

  test('TC-EMPGOL-539 Result counts are announced @a11y', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await expect(goals.resultsStatus).toHaveAttribute('aria-live', /polite|assertive/);
    const before = await goals.resultsStatus.innerText();
    await goals.searchEmployees('Arjun');
    await expect(goals.resultsStatus).not.toHaveText(before);

    await goals.openDashboard();
    const status = goals.listStatus(goals.completionCard);
    await expect(status).toHaveAttribute('aria-live', /polite|assertive/);
    const listBefore = await status.innerText();
    await goals.listSearch(goals.completionCard).fill('Agile');
    await expect(status).not.toHaveText(listBefore);
  });
});
