// TC-EMPGOL-461/502/541/542/543/544 — regression guards for the SimERP 6.3.2 Goals screen.
// (TC-EMPGOL-452 / 474 carry @regression too but are functional-category cases — see functional.spec.ts;
//  TC-EMPGOL-508 is a security-category regression guard — see security.spec.ts.)
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
//
// DATA SAFETY: TC-EMPGOL-502 creates one `AUTO-GOL-<timestamp>` goal and deletes it in afterEach.
import { test, expect } from '../../../fixtures/auth';
import type { Locator } from '@playwright/test';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

const created: string[] = [];
test.afterEach(async ({ primaryPage }) => {
  if (!created.length) return;
  const failed = await new GoalsPage(primaryPage).deleteGoalsByName(created.splice(0));
  if (failed.length) test.info().annotations.push({ type: 'cleanup-failed', description: failed.join(', ') });
});

const PLACEHOLDER = /^(—|-|N\/A|null|undefined)$/i;

/** Cells (td) under `scope` whose whole text is a bare placeholder, as "<row text> → <cell>". */
async function placeholderCells(scope: Locator): Promise<string[]> {
  const out: string[] = [];
  for (const row of await scope.locator('tbody tr').all()) {
    const cells = (await row.locator('> td').allInnerTexts()).map(t => t.trim());
    for (const c of cells) if (PLACEHOLDER.test(c)) out.push(`${cells.filter(Boolean)[0] ?? '?'} → "${c}"`);
  }
  return out;
}

test.describe('Goals — Regression', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-461 An open expansion does not leak into a new page or search result @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const first = goals.employeeRows.first();
    const firstName = (await first.getByRole('cell').nth(1).innerText()).trim();
    await goals.toggleRow(first);
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    const expandedRows = goals.table.locator('tbody').first().locator('tr[aria-expanded="true"]');
    const openPanels = goals.table.locator('[data-slot="collapsible-content"][data-state="open"]');

    await goals.goToPage(goals.nextPageBtn());
    await expect(expandedRows, 'page 2 renders collapsed').toHaveCount(0);
    await expect(openPanels).toHaveCount(0);

    const other = (await goals.employeeRows.nth(1).getByRole('cell').nth(1).innerText()).trim();
    await goals.searchEmployees(other);
    await expect(expandedRows, 'search result renders collapsed').toHaveCount(0);
    await expect(openPanels).toHaveCount(0);

    await goals.searchEmployees('');
    await expect(goals.resultsStatus).toHaveText(/^Showing 1 - 100 of/);
    await expectOrDefect(`Returning to page 1 re-opens the expansion of "${firstName}" that was open before paging away (expansion state survives navigation).`,
      async () => {
        await expect(goals.employeeRow(firstName)).toHaveAttribute('aria-expanded', 'false');
        await expect(openPanels).toHaveCount(0);
      });
  });

  test('TC-EMPGOL-502 A created goal survives reload and matches the API total @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('reload');
    created.push(name);
    await goals.createGoal({ name });
    await primaryPage.reload();
    await goals.waitForResults();
    const footer = await goals.readTotal();
    const { status, body } = await goals.apiGet('/api/v1/goals?page=1&limit=100');
    expect(status).toBe(200);
    expect(footer, 'footer total equals GET /api/v1/goals total').toBe(body.data.total);
    await goals.searchGoals(name);
    await expect(goals.goalRow(name)).toBeVisible();
    await expect(goals.goalRows).toHaveCount(1);
  });

  test('TC-EMPGOL-541 /employee/goals is not swallowed by the /employee/:id route @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    for (const path of ['/employee/goals', '/employee/goals/']) {
      await primaryPage.goto(path);
      await expect(goals.heading, path).toBeVisible({ timeout: 60_000 });
      await expect(goals.goalsTab, path).toBeVisible();
      await expect(goals.filterGroup, path).toBeVisible();
      await expect(primaryPage.getByText(/Employee not found|uuid is expected/i)).toHaveCount(0);
    }
  });

  test('TC-EMPGOL-542 Sibling Skills page is unaffected @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.selectFilter('Timeframe', 'Last 30 days');
    await goals.selectFilter('Year', '2026');
    await primaryPage.getByRole('link', { name: /^Skills/ }).first().click();
    await expect(primaryPage).toHaveURL(/\/employee\/skills/);
    await expect(primaryPage.getByRole('heading', { name: /Skills/, level: 1 }).first()).toBeVisible({ timeout: 60_000 });
    await expect(primaryPage.getByRole('table').or(primaryPage.getByRole('tablist')).first()).toBeVisible({ timeout: 60_000 });
    await goals.sidebarGoalsLink().click();
    await goals.waitForKpis();
    await expect(goals.timeframeCombo).toHaveText('Last 30 days');
    await expect(goals.yearCombo).toHaveText('2026');
  });

  test('TC-EMPGOL-543 One term for overdue/delayed across the screen @regression @needs-verification', async ({ primaryPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const explanations: string[] = [];
    const atRisk = goals.atRiskCard.getByRole('img', { name: 'At risk' }).first();
    await atRisk.hover();
    explanations.push(...await primaryPage.getByRole('tooltip').allInnerTexts().catch(() => []));
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    const overdueHeader = goals.columnHeader(goals.table, 'Overdue Goals').getByText('Overdue Goals', { exact: true });
    explanations.push((await overdueHeader.getAttribute('title')) ?? '');
    await overdueHeader.hover();
    explanations.push(...await primaryPage.getByRole('tooltip').allInnerTexts().catch(() => []));
    await expectOrDefect('"Overdue Goals" (By Employee), "Delayed" (status), "Most At-Risk Goals" / "At risk" (dashboard) are used for the same thing with no explanation of how they relate (6.2.0 D12).',
      async () => expect(explanations.join(' | ')).toMatch(/delayed/i));
  });

  test('TC-EMPGOL-544 No bare dash, "undefined" or "null" anywhere on the Goals screen @regression', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const findings: string[] = [];
    await goals.openDashboard();
    const dashText = (await goals.content.innerText()).split('\n').map(s => s.trim());
    for (const line of dashText) if (PLACEHOLDER.test(line)) findings.push(`Dashboard → "${line}"`);

    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await goals.searchEmployees('Arjun Jadeja');
    const row = goals.employeeRow('Arjun Jadeja');
    await goals.toggleRow(row);
    const panel = await goals.detailPanel(row);
    await expect(panel.getByRole('table')).toBeVisible();
    findings.push(...(await placeholderCells(goals.table)).map(f => `By Employee → ${f}`));

    await goals.selectGoalsView('By Goal');
    const { total } = await goals.readResults();
    await goals.goToPage(goals.pageButton(Math.ceil(total / 100)));
    for (const r of await goals.goalRows.all()) {
      const cells = (await r.getByRole('cell').allInnerTexts()).map(t => t.trim());
      if (PLACEHOLDER.test(cells[3]) || cells[3] === '') findings.push(`By Goal → ${cells[1]} Description "${cells[3]}"`);
      for (const c of cells) if (PLACEHOLDER.test(c) && c !== cells[3]) findings.push(`By Goal → ${cells[1]} "${c}"`);
    }
    test.info().annotations.push({ type: 'observation', description: `${findings.length} placeholder cells, e.g. ${findings.slice(0, 5).join('; ')}` });
    await expectOrDefect(`Empty values render as bare placeholders / blanks instead of "Not specified" (${findings.length} found, e.g. ${findings.slice(0, 3).join('; ')}).`,
      async () => expect(findings).toEqual([]));
  });
});
