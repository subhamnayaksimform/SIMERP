// TC-EMPGOL-433/434/456/457/478/480/482/490/494/495/496/528/529/530/531 — negative paths on the
// SimERP 6.3.2 Goals screen: empty states, invalid filter/URL input, Add Goal validation,
// duplicates, double submit, server failure, cancelled requests and browser Back.
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
//
// DATA SAFETY: goals created here are named `AUTO-GOL-<timestamp>…` (or a case/whitespace variant
// of such a name) and are deleted in afterEach by the publicId returned from their own POST.
import { test, expect } from '../../../fixtures/auth';
import type { Page, Response } from '@playwright/test';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}
async function softDefect(description: string, check: () => Promise<unknown> | unknown): Promise<void> {
  const before = test.info().errors.length;
  await check();
  if (test.info().errors.length > before) test.info().annotations.push({ type: 'defect', description });
}

const createdNames: string[] = [];
const createdIds: string[] = [];
test.afterEach(async ({ primaryPage }) => {
  if (!createdNames.length && !createdIds.length) return;
  const goals = new GoalsPage(primaryPage);
  const failed = await goals.deleteGoalsByName(createdNames.splice(0));
  for (const id of createdIds.splice(0)) {
    const status = await goals.deleteGoalById(id);
    if (status >= 300 && status !== 404) failed.push(`${id} (${status})`);
  }
  if (failed.length) test.info().annotations.push({ type: 'cleanup-failed', description: failed.join(', ') });
});

/** Record the publicId of every goal a POST creates in this page, so cleanup can remove it. */
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

test.describe('Goals — Negative', () => {
  test.describe.configure({ timeout: 150_000 });

  test('TC-EMPGOL-433 Search goals with no match shows a readable empty state @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const card = goals.completionCard;
    await goals.listSearch(card).fill('zzzz-no-goal-xyz');
    await expect(card.getByText('No goals match your search')).toBeVisible();
    await expect(goals.rankedButtons(card)).toHaveCount(0);
    await expect(goals.listStatus(card)).toHaveText('Showing 0–0 of 0 goals');
    const nav = goals.listPages(card);
    await expect(goals.nextPageBtn(nav)).toBeDisabled();
    await expect(goals.prevPageBtn(nav)).toBeDisabled();
    await expect(goals.toast(/error|unable|failed/i)).toHaveCount(0);
  });

  test('TC-EMPGOL-434 A department with no goal data shows empty states, not broken charts @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const { body } = await goals.apiGet('/api/v1/employee-goals/filter-options');
    const departments: Array<{ publicId: string; name: string }> = body.data.departments;
    const ordered = [...departments].sort((a, b) => Number(['SCALA', 'L1 SUPPORT'].includes(b.name)) - Number(['SCALA', 'L1 SUPPORT'].includes(a.name)));
    let empty: string | null = null;
    for (const d of ordered) {
      const r = await goals.apiGet(`/api/v1/employee-goals/dashboard?groupBy=manager&timeFrame=15d&departmentId=${d.publicId}`);
      if (r.status === 200 && (r.body.data.totalAssignments === 0 || r.body.data.totalEmployees === 0)) { empty = d.name; break; }
    }
    test.skip(!empty, 'Every department currently has goal assignments');
    const { kpis } = await goals.refreshDashboard(() => goals.selectFilter('Department', empty!));
    expect(kpis.goalAssignments).toBe(0);
    const text = await goals.content.innerText();
    expect(text).not.toMatch(/\bNaN\b|\bundefined\b|\bnull\b/);
    for (const card of [goals.completionCard, goals.atRiskCard]) {
      await expect(goals.rankedButtons(card)).toHaveCount(0);
      await expect(card.getByText(/no goals|no data/i).first()).toBeVisible();
    }
    await expectOrDefect(`Charts for department "${empty}" with no goal data show no readable "no data" state.`, async () => {
      for (const name of ['Goal Tracking Health', 'Employee Goal Coverage']) {
        await expect(goals.card(name).getByText(/no data|no goals|nothing to show/i).first(), name).toBeVisible({ timeout: 5_000 });
      }
    });
  });

  test('TC-EMPGOL-456 A search or filter with no matches shows a readable empty state @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    await goals.searchEmployees('zzqq-no-such-employee');
    await expect(goals.emptyTableText).toBeVisible();
    await expect(goals.employeeRows).toHaveCount(0);
    await expect(goals.toast(/error|unable|failed/i)).toHaveCount(0);
    const next = goals.nextPageBtn();
    if (await next.count()) await expect(next).toBeDisabled();
    await softDefect('By Employee shows no "0 results" footer for an empty search (footer disappears instead).',
      () => expect.soft(goals.content.getByRole('status').filter({ hasText: /\b0 results\b/ })).toBeVisible({ timeout: 3_000 }));
  });

  test('TC-EMPGOL-457 Range filter cannot be saved with Minimum above Maximum @negative', async ({ primaryPage }) => {
    // Live 6.3.2: the Goals column filter is a status checklist; the numeric range sliders the case
    // describes exist on Overdue Goals / Certificates / L&D Hours — exercised on Overdue Goals.
    test.info().annotations.push({ type: 'case-deviation', description: 'Goals column has no range filter on 6.3.2; min>max guard tested on the Overdue Goals range filter.' });
    const goals = new GoalsPage(primaryPage);
    await goals.openByEmployee();
    const pop = await goals.openColumnFilter(goals.table, 'Overdue Goals');
    const minS = pop.getByRole('slider', { name: 'Minimum' });
    const maxS = pop.getByRole('slider', { name: 'Maximum' });
    await goals.setSlider(maxS, 1);
    await minS.focus();
    await primaryPage.keyboard.press('ArrowRight');
    await primaryPage.keyboard.press('ArrowRight');
    await primaryPage.keyboard.press('End');
    const min = Number(await minS.getAttribute('aria-valuenow'));
    const max = Number(await maxS.getAttribute('aria-valuenow'));
    expect(min, 'Minimum is clamped at Maximum').toBeLessThanOrEqual(max);
    const req = primaryPage.waitForRequest(r => /\/api\/v1\/employee-goals\/employees\?.*overdueMin=/.test(r.url()));
    await pop.getByRole('button', { name: 'Save', exact: true }).click();
    const q = new URL((await req).url()).searchParams;
    expect(Number(q.get('overdueMin'))).toBeLessThanOrEqual(Number(q.get('overdueMax')));
  });

  test('TC-EMPGOL-478 A Certificate Code typed before switching back to Technical is not submitted @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('cert-leak');
    createdNames.push(name);
    await goals.openAddGoal();
    await goals.typeGoalName(name);
    await goals.selectGoalType('Certificate');
    await goals.certificateCodeInput.fill('TMP-01');
    await goals.selectGoalType('Technical');
    const post = primaryPage.waitForRequest(r => r.method() === 'POST' && /\/api\/v1\/goals$/.test(r.url()));
    await goals.saveGoalDialog();
    const payload = (await post).postDataJSON();
    expect(payload.type).toBe('TECHNICAL');
    expect(payload.certificateCode ?? '', 'no certificate code submitted for a Technical goal').toBe('');
    await goals.searchGoals(name);
    expect(await goals.readGoalNameCell(goals.goalRow(name))).toEqual({ name, code: '' });
  });

  test('TC-EMPGOL-480 Certificate goals cannot be saved without a Certificate Code @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await goals.selectGoalType('Certificate');
    await goals.typeGoalName(GoalsPage.uniqueName('cert-nocode'));
    await softDefect('Certificate Code is not marked as required (no asterisk) when Goal Type = Certificate.',
      () => expect.soft(goals.formItem('Certificate Code')).toContainText('*', { timeout: 3_000 }));
    await expectOrDefect('Add Goal allows saving a Certificate goal with an empty Certificate Code (6.2.0 D26 — e.g. "demo goal123").',
      () => expect(goals.dialogSaveBtn).toBeDisabled({ timeout: 5_000 }));
  });

  test('TC-EMPGOL-482 Whitespace-only goal name is rejected @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    await goals.typeGoalName('     ');
    // Save is deliberately NOT clicked: a blank-named goal could not be told apart from real data.
    await expectOrDefect('A whitespace-only Goal Name enables Save with no inline error.', async () => {
      if (await goals.dialogSaveBtn.isEnabled()) await expect(goals.formItem('Goal Name')).toContainText(/required|invalid|empty/i, { timeout: 3_000 });
      else await expect(goals.dialogSaveBtn).toBeDisabled();
    });
  });

  test('TC-EMPGOL-490 Rich-text Link control validates the URL @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    await goals.openAddGoal();
    let dialogFired = false;
    primaryPage.on('dialog', d => { dialogFired = true; void d.dismiss(); });
    const editor = goals.editor('Description');
    const tryLink = async (url: string) => {
      await goals.typeRichText('Description', ` link-${url.length}`);
      await primaryPage.keyboard.press('Shift+Home');
      await goals.toolbarButton('Description', 'Link').click();
      // Link popover: textbox (placeholder "https://example.com") + "Apply" (disabled until valid).
      const pop = primaryPage.getByRole('dialog').filter({ has: primaryPage.getByRole('button', { name: 'Apply' }) }).last();
      await pop.getByPlaceholder('https://example.com').fill(url);
      const apply = pop.getByRole('button', { name: 'Apply' });
      if (await apply.isEnabled()) await apply.click();
      else await primaryPage.keyboard.press('Escape');
      await expect(pop).toBeHidden();
    };
    await tryLink('javascript:alert(1)');
    await softDefect('Rich-text Link accepts a javascript: URL.',
      () => expect.soft(editor.locator('a[href^="javascript:"]')).toHaveCount(0));
    await tryLink('not a url');
    await softDefect('Rich-text Link accepts malformed text ("not a url") as a link with no validation message.',
      () => expect.soft(editor.locator('a[href*="not a url"], a[href*="not%20a%20url"]')).toHaveCount(0));
    await tryLink('https://example.com');
    await expect(editor.locator('a[href="https://example.com"]')).toHaveCount(1);
    expect(dialogFired).toBe(false);
  });

  test('TC-EMPGOL-494 Duplicate and near-duplicate names trigger the duplicate warning @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const posts = trackCreates(primaryPage);
    await goals.openByGoal();
    const base = GoalsPage.uniqueName('dup');
    await goals.createGoal({ name: base });
    const variants = [base, base.toLowerCase(), `${base}  `];
    for (const [i, v] of variants.entries()) {
      await goals.openAddGoal();
      await goals.typeGoalName(v);
      await goals.dialogSaveBtn.click();
      await expect(goals.verifyBeforeCreatingDialog, `duplicate warning for "${v}"`).toBeVisible();
      await goals.verifyBeforeCreatingDialog.getByRole('button', { name: 'Confirm & Create' }).click();
      await expect.poll(() => posts.length).toBe(i + 2);
      const accepted = posts[i + 1].ok();
      if (accepted) await expect(goals.addGoalDialog).toBeHidden({ timeout: 15_000 });
      else {
        await expect(goals.toast(/.+/).first()).toBeVisible();
        await goals.closeGoalDialog('Cancel');
      }
    }
    // Near match: warning shown, nothing created.
    await goals.openAddGoal();
    await goals.typeGoalName(`${base}s`);
    await goals.dialogSaveBtn.click();
    await expect(goals.verifyBeforeCreatingDialog).toBeVisible();
    await goals.verifyBeforeCreatingDialog.getByRole('button', { name: 'Cancel' }).click();
    expect(posts).toHaveLength(variants.length + 1);
    const outcome = variants.map((v, i) => `"${v}" → ${posts[i + 1].status()}`);
    await expectOrDefect(`Server accepts a goal whose name differs from an existing one only by case/whitespace: ${outcome.join('; ')}.`,
      async () => { for (const [i, v] of variants.entries()) expect(posts[i + 1].status(), `create "${v}"`).toBeGreaterThanOrEqual(400); });
  });

  test('TC-EMPGOL-495 Double-clicking Save creates one goal @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const posts = trackCreates(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('dbl');
    createdNames.push(name);
    await goals.openAddGoal();
    await goals.typeGoalName(name);
    await goals.dialogSaveBtn.dblclick();
    await goals.verifyBeforeCreatingDialog.first().getByRole('button', { name: 'Confirm & Create' }).click();
    await expect(goals.addGoalDialog).toBeHidden({ timeout: 20_000 });
    await expect.poll(() => posts.length).toBeGreaterThanOrEqual(1);
    expect(posts.length, 'exactly one POST').toBe(1);
    expect(await goals.findGoalsByExactName(name)).toHaveLength(1);
  });

  test('TC-EMPGOL-496 A failed save keeps the dialog open with input intact @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openByGoal();
    const name = GoalsPage.uniqueName('fail');
    createdNames.push(name); // safety net — the route below should prevent any real create
    await primaryPage.route(/\/api\/v1\/goals(\?.*)?$/, route => route.request().method() === 'POST'
      ? route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ code: 'INTERNAL_ERROR', message: 'Internal server error' }) })
      : route.fallback());
    await goals.openAddGoal();
    await goals.typeGoalName(name);
    await goals.typeRichText('Description', 'keep me');
    await goals.saveGoalDialog();
    const toast = goals.toast(/.+/).first();
    await expect(toast).toBeVisible();
    await expect(toast).not.toContainText(/at \w+ \(|stack|TypeError|\.ts:\d+/);
    await expect(goals.addGoalDialog).toBeVisible();
    await expect(goals.goalNameInput).toHaveValue(name);
    await expect(goals.editor('Description')).toHaveText('keep me');
  });

  test('TC-EMPGOL-528 Quickly switching tabs/filters does not show "Unable to reach the server" @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    for (const tf of ['Last 5 days', 'Last 30 days', 'Last 3 months', 'Last 6 months']) {
      await goals.timeframeCombo.click();
      await primaryPage.getByRole('option', { name: tf, exact: true }).click();
    }
    await goals.goalsTab.click();
    await goals.dashboardTab.click();
    const { api, kpis } = await goals.refreshDashboard(async () => {
      await goals.timeframeCombo.click();
      await primaryPage.getByRole('option', { name: 'All time', exact: true }).click();
    });
    await expect(goals.toast(/Unable to reach the server/i)).toHaveCount(0);
    await expect(goals.timeframeCombo).toHaveText('All time');
    expect(api).not.toBeNull();
    expect(new URL(api ? primaryPage.url() : '').searchParams.get('timeFrame')).toBe('all');
    expect(kpis.ldHours).toBe(api.totalLdHours);
  });

  test('TC-EMPGOL-529 Unknown tab and view parameters fall back safely @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.open('tab=bogus');
    await goals.waitForKpis();
    await expect(goals.dashboardTab).toHaveAttribute('aria-selected', 'true');
    await goals.open('tab=goals&view=bogus');
    await goals.waitForResults();
    await expect(goals.goalsTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.byEmployeeTab).toHaveAttribute('aria-selected', 'true');
    await expect(goals.toast(/error|unable|failed/i)).toHaveCount(0);
  });

  test('TC-EMPGOL-530 Malformed or unknown departmentId in the URL is handled @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    for (const id of ['not-a-uuid', '00000000-0000-0000-0000-000000000000']) {
      const failures: number[] = [];
      const onResponse = (r: Response) => { if (/\/api\/v1\/employee-goals\//.test(r.url()) && r.status() >= 400) failures.push(r.status()); };
      primaryPage.on('response', onResponse);
      await goals.open(`departmentId=${id}`);
      // Readable fallback = either the dashboard (KPIs) or the screen's own error message.
      const kpis = goals.kpiGroup.getByText(/^\d[\d,]*h?$/).first();
      const message = goals.content.getByRole('heading', { name: 'Failed to load goals' });
      await expect(kpis.or(message).first(), `readable state for departmentId=${id}`).toBeVisible({ timeout: 45_000 });
      if (await message.isVisible()) await expect(goals.content.getByText(/could not load the data/i)).toBeVisible();
      await expect(goals.content).not.toHaveText(/^\s*$/);
      await expect(goals.toast(/error|unable|failed|invalid|validation/i), `no error toast for ${id}`).toHaveCount(0);
      primaryPage.off('response', onResponse);
      test.info().annotations.push({ type: 'observation', description: `departmentId=${id}: API statuses >= 400: ${failures.join(',') || 'none'}` });
    }
  });

  test('TC-EMPGOL-531 BUG — Browser Back after a tab switch leaves the app @negative', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await primaryPage.goto('/profile');
    await goals.openFromSidebar();
    await goals.waitForKpis();
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await goals.selectGoalsView('By Goal');
    await primaryPage.goBack();
    await expectOrDefect(`Browser Back after switching Goals tabs/views leaves the Goals screen (landed on ${primaryPage.url()}) instead of returning to the previous tab/view (6.2.0 D25).`, async () => {
      await expect(primaryPage).toHaveURL(/\/employee\/goals\?tab=goals(?!.*view=catalog)/);
      await expect(goals.byEmployeeTab).toHaveAttribute('aria-selected', 'true');
    });
  });
});
