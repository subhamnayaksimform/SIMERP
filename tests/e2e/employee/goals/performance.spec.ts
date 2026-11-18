// TC-EMPGOL-523..527 — load behaviour of the SimERP 6.3.x Goals screen ("Faster Goals", v6.3.1):
// time to KPIs, per-tab lazy loading, cache reuse on tab switch, scoped refresh, table paint time.
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

/** Collect the API GET paths a page requests while `fn` runs. */
async function recordApi(page: Page, fn: () => Promise<unknown>): Promise<string[]> {
  const seen: string[] = [];
  const onRequest = (r: import('@playwright/test').Request) => {
    if (r.method() === 'GET' && /simerp-dev-api|\/api\/v1\//.test(r.url()) && /\/api\/v1\//.test(r.url())) seen.push(r.url().split('/api/v1/')[1]);
  };
  page.on('request', onRequest);
  try { await fn(); } finally { page.off('request', onRequest); }
  return seen;
}

test.describe('Goals — Performance', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-523 Dashboard reaches KPIs within the 2–3 s target @performance', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const samples: number[] = [];
    for (let i = 0; i < 3; i++) {
      // App boot (bundle + token refresh) happens on /profile; the measured part is the in-app
      // navigation from the sidebar link to KPI numbers.
      await primaryPage.goto('/profile');
      await primaryPage.waitForLoadState('networkidle').catch(() => undefined);
      const start = Date.now();
      await goals.sidebarGoalsLink().or(goals.sidebarEmployeeGroup()).first().click();
      if (!primaryPage.url().includes('/employee/goals')) await goals.sidebarGoalsLink().click();
      if ((await goals.dashboardTab.getAttribute('aria-selected').catch(() => 'true')) !== 'true') await goals.dashboardTab.click();
      await goals.waitForKpis();
      samples.push(Date.now() - start);
    }
    const median = [...samples].sort((a, b) => a - b)[1];
    test.info().annotations.push({ type: 'observation', description: `navigation→KPI samples ${samples.join(' / ')} ms, median ${median} ms` });
    await expectOrDefect(`Goals dashboard takes ${median} ms (median of ${samples.join(' / ')}) from navigation to KPI numbers — target ≤ 3000 ms (v6.3.1).`,
      async () => expect(median).toBeLessThanOrEqual(3_000));
  });

  test('TC-EMPGOL-524 Only the open tab loads its data @performance', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    const dashboardCalls = await recordApi(primaryPage, () => goals.openDashboard());
    expect(dashboardCalls.some(u => u.startsWith('employee-goals/dashboard'))).toBe(true);
    expect(dashboardCalls.some(u => u.startsWith('employee-goals/filter-options'))).toBe(true);
    expect(dashboardCalls.filter(u => u.startsWith('employee-goals/employees')), 'no By Employee fetch on Dashboard').toEqual([]);
    expect(dashboardCalls.filter(u => /^employees\?.*page=/.test(u)), 'no /api/v1/employees page walk').toEqual([]);
    const goalsCalls = await recordApi(primaryPage, async () => { await goals.selectTopTab('Goals'); await goals.waitForResults(); });
    expect(goalsCalls.some(u => u.startsWith('employee-goals/employees'))).toBe(true);
    expect(goalsCalls.filter(u => u.startsWith('employee-goals/dashboard')), 'Goals tab does not refetch the dashboard').toEqual([]);
  });

  test('TC-EMPGOL-525 Switching back with the same filters reuses data @performance', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    const samples: number[] = [];
    const calls = await recordApi(primaryPage, async () => {
      for (let i = 0; i < 3; i++) {
        if (i > 0) { await goals.selectTopTab('Goals'); await goals.waitForResults(); }
        const start = Date.now();
        await goals.selectTopTab('Dashboard');
        await goals.waitForKpis();
        samples.push(Date.now() - start);
      }
    });
    expect(calls.filter(u => u.startsWith('employee-goals/dashboard')), 'no dashboard refetch').toEqual([]);
    const median = [...samples].sort((a, b) => a - b)[1];
    test.info().annotations.push({ type: 'observation', description: `Dashboard re-shown in ${samples.join(' / ')} ms (median ${median})` });
    expect(median).toBeLessThanOrEqual(1_000);
  });

  test('TC-EMPGOL-526 Changing Year or Department refreshes only the open tab @performance', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    const calls = await recordApi(primaryPage, () => goals.selectFilter('Department', 'QA', /\/api\/v1\/employee-goals\/employees/));
    expect(calls.some(u => u.startsWith('employee-goals/employees'))).toBe(true);
    expect(calls.filter(u => u.startsWith('employee-goals/dashboard')), 'dashboard not refreshed while hidden').toEqual([]);
    const back = await recordApi(primaryPage, async () => { await goals.refreshDashboard(() => goals.selectTopTab('Dashboard')); });
    expect(back.some(u => u.startsWith('employee-goals/dashboard')), 'dashboard refreshes when opened').toBe(true);
  });

  test('TC-EMPGOL-527 By Employee and By Goal paint quickly @performance', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    const timings: Record<string, number> = {};
    let start = Date.now();
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    timings['By Employee'] = Date.now() - start;
    start = Date.now();
    await goals.byGoalTab.click();
    await goals.waitForResults();
    timings['By Goal'] = Date.now() - start;
    start = Date.now();
    await goals.goToPage(goals.nextPageBtn());
    await expect(goals.resultsStatus).toHaveText(/^Showing 101 - /);
    timings['Next page'] = Date.now() - start;
    const summary = Object.entries(timings).map(([k, v]) => `${k} ${v} ms`).join(', ');
    test.info().annotations.push({ type: 'observation', description: summary });
    await expectOrDefect(`Goals table paint exceeds the 3 s target: ${summary}.`, async () => {
      for (const [k, v] of Object.entries(timings)) expect(v, k).toBeLessThanOrEqual(3_000);
    });
  });
});
