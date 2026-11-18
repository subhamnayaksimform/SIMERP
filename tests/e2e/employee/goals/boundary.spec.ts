// TC-EMPGOL-458/459/460/483/484/486/487 — boundary values on the SimERP 6.3.2 Goals screen:
// range-filter extremes, long/special searches, out-of-range paging, goal-name length and
// character set, Estimated Duration limits.
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
//
// DATA SAFETY: goals created here are named `AUTO-GOL-<timestamp>…` and are deleted in afterEach by
// the publicId returned from their own POST (names may be truncated by the app, so ids are used).
import { test, expect } from '../../../fixtures/auth';
import type { Page, Response } from '@playwright/test';
import { GoalsPage, parseNumber } from '../../../page-objects/employee/goals.page';

async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

const createdIds: string[] = [];
test.afterEach(async ({ primaryPage }) => {
  if (!createdIds.length) return;
  const goals = new GoalsPage(primaryPage);
  const failed: string[] = [];
  for (const id of createdIds.splice(0)) {
    const status = await goals.deleteGoalById(id);
    if (status >= 300 && status !== 404) failed.push(`${id} (${status})`);
  }
  if (failed.length) test.info().annotations.push({ type: 'cleanup-failed', description: failed.join(', ') });
});

/** Collect goal-create responses of this page and remember the created ids for cleanup. */
function trackCreates(page: Page): Response[] {
  const posts: Response[] = [];
  page.on('response', async r => {
    if (r.request().method() === 'POST' && /\/api\/v1\/goals$/.test(r.url().split('?')[0])) {
      posts.push(r);
      const id = (await r.json().catch(() => null))?.data?.publicId;
      if (id) createdIds.push(id);
    }
  });
  return posts;
}

test.describe('Goals — Boundary', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-458 Range filter at the extremes @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    const pop = await goals.openColumnFilter(goals.table, 'Overdue Goals');
    const { max } = await goals.readSlider(pop.getByRole('slider', { name: 'Maximum' }));
    await goals.closePopover();
    await goals.applyRangeFilter(goals.table, 'Overdue Goals', { min: max, max });
    expect(await goals.readTotal()).toBeGreaterThan(0);
    expect([...new Set((await goals.readEmployeeColumn('Overdue Goals')).map(parseNumber))]).toEqual([max]);
    await goals.applyRangeFilter(goals.table, 'Overdue Goals', { min: 0, max });
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
  });

  test('TC-EMPGOL-459 Long and special-character searches are handled safely @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const { total } = await goals.readResults();
    const bad: string[] = [];
    primaryPage.on('response', r => { if (/\/api\/v1\/employee-goals\/employees/.test(r.url()) && r.status() >= 400) bad.push(`${r.status()} ${r.url()}`); });
    await goals.searchEmployees('x'.repeat(500));
    await expect(goals.emptyTableText.or(goals.resultsStatus).first()).toBeVisible();
    const totals: Record<string, number> = {};
    for (const q of ['%', '_', "'", '"', '\\', '*']) {
      await goals.searchEmployees(q);
      totals[q] = await goals.readTotal();
    }
    await goals.employeeSearch.fill('');
    await goals.searchEmployees(' ');
    await expect(goals.resultsStatus, 'a single space behaves like an empty search').toHaveText(`Showing 1 - 100 of ${total} results`);
    await expect(goals.toast(/error|unable|failed/i)).toHaveCount(0);
    expect(bad).toEqual([]);
    const wildcards = Object.entries(totals).filter(([, n]) => n >= total - 1).map(([q, n]) => `"${q}" → ${n}`);
    await expectOrDefect(`Employee search treats SQL LIKE wildcards as patterns (server-side): ${wildcards.join(', ')} of ${total}.`,
      async () => expect(wildcards).toEqual([]));
  });

  test('TC-EMPGOL-460 Out-of-range page cannot be reached @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee('page=999');
    const { total } = await goals.readResults();
    await expect(goals.resultsStatus).toHaveText(`Showing 1 - 100 of ${total} results`);
    const last = Math.ceil(total / 100);
    await goals.goToPage(goals.pageButton(last));
    const next = goals.nextPageBtn();
    await expect(next).toBeDisabled();
    await next.focus().catch(() => undefined);
    await primaryPage.keyboard.press('Enter');
    await expect(goals.resultsStatus).toHaveText(`Showing ${(last - 1) * 100 + 1} - ${total} of ${total} results`);
    await expect(goals.employeeRows).toHaveCount(total - (last - 1) * 100);
  });

  test('TC-EMPGOL-483 Goal name length is bounded @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const posts = trackCreates(primaryPage);
    await goals.openByGoal();
    const results: string[] = [];
    let enforced = false;
    for (const length of [255, 256, 1000]) {
      const prefix = `${GoalsPage.uniqueName(`len${length}`)}-`;
      const name = prefix + 'x'.repeat(length - prefix.length);
      await goals.openAddGoal();
      await goals.typeGoalName(name);
      const accepted = await goals.goalNameInput.inputValue();
      if (accepted.length < name.length) enforced = true;
      const before = posts.length;
      if (await goals.dialogSaveBtn.isDisabled()) {
        enforced = true;
        results.push(`${length}: Save disabled`);
        await goals.closeGoalDialog('Cancel');
        continue;
      }
      await goals.saveGoalDialog();
      await expect.poll(() => posts.length).toBe(before + 1);
      const res = posts[before];
      expect(res.status(), `length ${length} must not cause a server error`).toBeLessThan(500);
      if (res.ok()) {
        const stored = (await res.json()).data.name as string;
        expect(stored, `stored name equals what was accepted (length ${length})`).toBe(accepted);
        results.push(`${length}: stored ${stored.length}`);
        await expect(goals.addGoalDialog).toBeHidden();
      } else {
        enforced = true;
        results.push(`${length}: rejected ${res.status()}`);
        await expect(goals.toast(/.+/).first()).toBeVisible();
        await goals.closeGoalDialog('Cancel');
      }
    }
    test.info().annotations.push({ type: 'observation', description: results.join('; ') });
    await expectOrDefect(`No goal-name length limit is enforced (${results.join('; ')}).`, async () => expect(enforced).toBe(true));
  });

  test('TC-EMPGOL-484 Goal name accepts unicode, emoji and punctuation @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    trackCreates(primaryPage);
    await goals.openByGoal();
    const name = `${GoalsPage.uniqueName()} Gœal ✓ — 日本語 🚀 & <b>`;
    await goals.createGoal({ name });
    await goals.searchGoals(name);
    await expect(goals.goalRows).toHaveCount(1);
    expect((await goals.readGoalNameCell(goals.goalRow(name))).name).toBe(name);
    await goals.openEditGoal(name);
    await expect(goals.goalNameInput).toHaveValue(name);
    await goals.closeGoalDialog('Cancel');
  });

  test('TC-EMPGOL-486 Estimated Duration rejects negative values @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const posts = trackCreates(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await goals.typeGoalName(GoalsPage.uniqueName('neg'));
    await goals.setDuration({ months: -1, weeks: -5, days: -10 });
    const values = await goals.readDuration();
    for (const [unit, v] of Object.entries(values)) expect(Number(v), `${unit} typed negative → ${v}`).toBeGreaterThanOrEqual(0);
    const res = await goals.saveGoalDialog();
    if (res) {
      const sent = res.request().postDataJSON();
      expect(JSON.stringify(sent.estimatedDuration ?? {}), 'no negative duration submitted').not.toMatch(/-\d/);
    }
    expect(posts.length).toBeLessThanOrEqual(1);
  });

  test('TC-EMPGOL-487 Estimated Duration rejects decimals, text and absurd values @boundary', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const posts = trackCreates(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await goals.typeGoalName(GoalsPage.uniqueName('absurd'));
    const units = { months: goals.monthsInput, weeks: goals.weeksInput, days: goals.daysInput };
    for (const [unit, input] of Object.entries(units)) {
      await goals.setDuration({ [unit]: '1.5' });
      const dec = await input.inputValue();
      expect(dec, `${unit}: decimal is rejected or normalised`).not.toBe('1.5');
      expect(dec, `${unit}: decimal normalised to a whole number`).toMatch(/^\d+$/);
      test.info().annotations.push({ type: 'observation', description: `${unit}: typed "1.5" → "${dec}"` });
      await goals.setDuration({ [unit]: 'abc' });
      expect(await input.inputValue(), `${unit}: text is rejected`).toMatch(/^\d*$/);
      await goals.setDuration({ [unit]: 9999 });
    }
    const before = posts.length;
    await goals.saveGoalDialog();
    const message = goals.formItem('Estimated Duration').getByText(/max|must be|cannot exceed|less than|invalid/i);
    const typed = await goals.readDuration().catch(() => null);
    await expectOrDefect(`Estimated Duration accepts 9999 months / weeks / days with no upper bound or message (fields read ${JSON.stringify(typed)}).`, async () => {
      if (posts.length > before) expect(posts[before].status(), 'create with 9999 in every unit').toBeGreaterThanOrEqual(400);
      else await expect(message.first()).toBeVisible({ timeout: 5_000 });
    });
  });
});
