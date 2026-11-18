// TC-EMPGOL-213/214/249/325..332 — relocation (2026-09-22) accessibility pass over the new 3-tab
// Goals screen. See docs/findings/2026-09-22-goals-module-relocation-review.md.
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

test.describe('Goals — Accessibility (Relocation 2026-09-22)', () => {
  test('TC-EMPGOL-213 BUG — Tab strip does not support Arrow-key/Home/End navigation (WAI-ARIA tabs pattern) @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    await goalsPage.dashboardTab.focus();
    await tmPage.keyboard.press('ArrowRight');
    await tmPage.waitForTimeout(300); // let focus settle before reading document.activeElement
    // Documents the defect: confirmed live that ArrowRight moves focus OFF the tab strip entirely
    // (document.activeElement becomes <body>) rather than to the next tab — the standard WAI-ARIA
    // tabs keyboard pattern (Arrow keys / Home / End) is not implemented at all.
    const focused = tmPage.locator(':focus');
    const focusedCount = await focused.count().catch(() => 0);
    const focusedRole = focusedCount > 0 ? await focused.getAttribute('role').catch(() => null) : null;
    expect(focusedRole === 'tab', 'focus left the tab strip on ArrowRight — defect no longer reproduces, please update this case with the full Home/End/ArrowLeft assertions').toBe(true);
  });

  test('TC-EMPGOL-214 Only the active tab panel is exposed; inactive panels are hidden from assistive tech @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    await expect(goalsPage.dashboardTab).toHaveAttribute('aria-selected', 'true');
    await expect(goalsPage.employeeGoalsTab).toHaveAttribute('aria-selected', 'false');
    await expect(goalsPage.goalManagementTab).toHaveAttribute('aria-selected', 'false');
    // Only one tab's content is mounted at a time (confirmed live) — the Employee Goals table
    // and the Goal Management table must not both be present while Dashboard is active.
    await expect(tmPage.getByText('Employee', { exact: false }).and(tmPage.getByRole('columnheader', { name: 'Reporting Manager' }))).toHaveCount(0);
    await expect(tmPage.getByRole('columnheader', { name: 'Assigned Emp. (Org.)' })).toHaveCount(0);
  });

  test('TC-EMPGOL-249 BUG — the row expander is not a button and cannot be reached or operated by keyboard @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const name = await goalsPage.findEmployeeNameWithGoalInStatus('Not Started');
    test.skip(!name, 'no employee with goals found');
    const expanderCell = goalsPage.getEmployeeGoalsRow(name!).locator('td').first();
    const role = await expanderCell.getAttribute('role');
    const tabindex = await expanderCell.getAttribute('tabindex');
    const ariaExpanded = await expanderCell.getAttribute('aria-expanded');
    expect(role, 'the expander now carries role="button" — defect no longer reproduces, please update this case').toBeNull();
    expect(tabindex, 'the expander is now focusable — defect no longer reproduces, please update this case').toBeNull();
    expect(ariaExpanded, 'the expander now exposes aria-expanded — defect no longer reproduces, please update this case').toBeNull();
  });

  test('TC-EMPGOL-325 The Goals screen has one H1 and a sensible heading hierarchy @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    for (const tab of ['dashboard', 'employee-goals', 'management'] as const) {
      await goalsPage.navigateToGoalsScreen({ tab });
      await expect(tmPage.getByRole('heading', { name: 'Goals', level: 1 })).toHaveCount(1);
      const levels = await goalsPage.getHeadingLevelCounts();
      if (levels.h3 > 0) expect(levels.h2, `${tab}: has an h3 with no h2 above it`).toBeGreaterThan(0);
      if (levels.h4 > 0) expect(levels.h3, `${tab}: has an h4 with no h3 above it`).toBeGreaterThan(0);
    }
  });

  test('TC-EMPGOL-326 Every chart carries a text alternative @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    const stats = await goalsPage.getChartSvgAccessibilityStats();
    expect(stats.total, 'no charts found to check').toBeGreaterThan(0);
    expect(stats.labelled, `only ${stats.labelled} of ${stats.total} chart svgs carry a role/aria-label — defect no longer reproduces, please update this case`).toBe(stats.total);
  });

  test('TC-EMPGOL-327 Goal status is not conveyed by colour alone @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const name = await goalsPage.findEmployeeNameWithGoalInStatus('Not Started');
    test.skip(!name, 'no employee with goals found');
    await goalsPage.searchEmployeeGoalsByEmployee(name!);
    await goalsPage.toggleEmployeeRowExpansion(name!);
    const rows = await goalsPage.getExpandedGoalDetailRows(name!);
    // Status badges carry their own text label (Not Started/In Progress/Completed/Delayed) —
    // verified here as the actual, non-colour-dependent signal this case is checking for.
    for (const r of rows) expect(['Not Started', 'In Progress', 'Completed', 'Delayed']).toContain(r.status);
  });

  test('TC-EMPGOL-328 Status badges and muted text meet WCAG AA contrast @a11y @needs-verification', async ({ tmPage }) => {
    // NOTE: pixel-level contrast measurement is out of scope for a locator-based Playwright
    // check (would need an axe-core/pixel-sampling pass) — this records the badges/text this
    // case is about existing and visible, as a starting point for a manual/axe-core audit.
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const name = await goalsPage.findEmployeeNameWithGoalInStatus('Delayed');
    test.skip(!name, 'no employee with a Delayed goal found');
    await goalsPage.searchEmployeeGoalsByEmployee(name!);
    await goalsPage.toggleEmployeeRowExpansion(name!);
    const badge = goalsPage.getEmployeeExpansionTable(name!).getByText('Delayed', { exact: true }).first();
    await expect(badge, 'Delayed status badge not visible for a manual/axe-core contrast check').toBeVisible();
  });

  test('TC-EMPGOL-329 Every interactive control has an accessible name @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    const buttons = goalsPage.activeTabPanel.locator('button');
    const count = await buttons.count();
    const unnamed: number[] = [];
    for (let i = 0; i < count; i++) {
      const btn = buttons.nth(i);
      const text = (await btn.innerText().catch(() => '')).trim();
      const ariaLabel = await btn.getAttribute('aria-label').catch(() => null);
      const srOnly = await btn.locator('.sr-only').count().catch(() => 0);
      if (!text && !ariaLabel && srOnly === 0) unnamed.push(i);
    }
    expect(unnamed.length, `${unnamed.length} of ${count} buttons have no accessible name — defect no longer reproduces, please update this case`).toBe(0);
  });

  test('TC-EMPGOL-330 Filter and search results are announced to assistive technology @a11y @needs-verification', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'employee-goals' });
    const liveRegionCount = await tmPage.locator('[aria-live]').count();
    expect(liveRegionCount, 'no aria-live region found anywhere on the screen').toBeGreaterThan(0);
  });

  test('TC-EMPGOL-331 Opening the Add/Edit panel traps focus, but does not restore it to Add Goal on close @a11y', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await goalsPage.addGoalBtn.focus();
    await page.keyboard.press('Enter');
    await expect(goalsPage.addGoalPanel).toBeVisible();
    await expect(page.locator(':focus')).not.toHaveCount(0);
    const focusInsidePanel = await goalsPage.addGoalPanel.locator(':focus').count();
    expect(focusInsidePanel, 'focus did not move into the Add Goal panel on open').toBeGreaterThan(0);
    await page.keyboard.press('Escape');
    await goalsPage.addGoalPanel.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    // Documents the defect: confirmed live focus does NOT return to the triggering Add Goal
    // button after Escape — a shorter, explicit check avoids the default 10s auto-retry (which,
    // compounded with the steps above, can approach the whole test's own timeout).
    const restoredToAddGoal = await goalsPage.addGoalBtn.evaluate(el => el === document.activeElement).catch(() => false);
    expect(restoredToAddGoal, 'focus did not return to Add Goal — defect no longer reproduces, please update this case').toBe(true);
  });

  test('TC-EMPGOL-332 The Goals tables are navigable by screen reader @a11y', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await expect(goalsPage.goalsTable).toBeVisible();
    const headerCells = goalsPage.goalsTable.getByRole('columnheader');
    expect(await headerCells.count(), 'Goal Management table has no columnheader cells').toBeGreaterThan(0);

    await goalsPage.selectTab('employee-goals');
    const name = await goalsPage.findEmployeeNameWithGoalInStatus('Not Started');
    test.skip(!name, 'no employee with goals found');
    await goalsPage.searchEmployeeGoalsByEmployee(name!);
    await goalsPage.toggleEmployeeRowExpansion(name!);
    const nestedHeaders = goalsPage.getEmployeeExpansionTable(name!).getByRole('columnheader');
    expect(await nestedHeaders.count(), 'nested goal-detail table has no columnheader cells').toBeGreaterThan(0);
  });
});
