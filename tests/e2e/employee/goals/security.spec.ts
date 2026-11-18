// TC-EMPGOL-504..522 — access control, data scoping and injection safety of the SimERP 6.3.2
// Goals screen and its APIs (/api/v1/employee-goals/*, /api/v1/goals) across personas.
// Source: reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json
//
// Raw API calls go to the API origin (GoalsPage.API_BASE); each persona page first loads an app
// page (primeApiSession) so its access-token cookie is fresh.
// DATA SAFETY: every goal created here is `AUTO-GOL-<timestamp>…` and deleted in afterEach. Write
// probes only ever target those throwaway goals.
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

async function expectOrDefect(description: string, check: () => Promise<unknown>): Promise<void> {
  try { await check(); } catch (e) { test.info().annotations.push({ type: 'defect', description }); throw e; }
}

const MANAGEMENT_DEPT = '95895a10-b036-42cf-80c1-26b71251ebd6';

const created: string[] = [];
test.afterEach(async ({ primaryPage }) => {
  if (!created.length) return;
  const goals = new GoalsPage(primaryPage);
  if (!primaryPage.url().startsWith('http')) await goals.primeApiSession();
  const failed = await goals.deleteGoalsByName(created.splice(0));
  if (failed.length) test.info().annotations.push({ type: 'cleanup-failed', description: failed.join(', ') });
});

async function expectUnauthorized(page: Page, path: string): Promise<void> {
  await page.goto(path);
  await expect(page, path).toHaveURL(/\/unauthorized/, { timeout: 60_000 });
  await expect(page.getByRole('heading', { name: 'Unauthorized', level: 1 })).toBeVisible();
  await expect(page.getByText('Access Denied')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Go to Profile' })).toBeVisible();
  await expect(page.locator('a[href="/employee/goals"]')).toHaveCount(0);
}

test.describe('Goals — Security', () => {
  test.describe.configure({ timeout: 180_000 });

  test('TC-EMPGOL-504 Script payloads in goal fields never execute @security', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    let dialogs = 0;
    primaryPage.on('dialog', d => { dialogs++; void d.dismiss(); });
    await goals.openByGoal();
    const stamp = GoalsPage.uniqueName();
    const names = ['<script>alert(1)</script>', '"><img src=x onerror=alert(1)>', '{{7*7}}'].map(p => `${stamp} ${p}`);
    const htmlPayload = '<p><img src=x onerror=alert(1)><a href="javascript:alert(1)">x</a></p>';
    for (const [i, name] of names.entries()) {
      created.push(name);
      await goals.openAddGoal();
      await goals.typeGoalName(name);
      if (i === 0) {
        // Paste an HTML payload into all four rich-text editors (synthetic paste event carrying text/html).
        for (const f of ['Description', 'Learning Objectives', 'Definition of Done', 'Topics & Concepts'] as const) {
          await goals.editor(f).click();
          await goals.editor(f).evaluate((el, html) => {
            const dt = new DataTransfer();
            dt.setData('text/html', html);
            dt.setData('text/plain', 'x');
            el.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
          }, htmlPayload);
        }
        for (const f of ['Description', 'Learning Objectives', 'Definition of Done', 'Topics & Concepts'] as const) {
          await expect(goals.editor(f).locator('img[onerror], a[href^="javascript:"]'), `${f} sanitised`).toHaveCount(0);
        }
      }
      const res = await goals.saveGoalDialog();
      expect(res?.status(), `create "${name}"`).toBeLessThan(300);
      await expect(goals.addGoalDialog).toBeHidden();
    }
    for (const name of names) {
      await goals.searchGoals(stamp);
      const row = goals.goalRow(name);
      await expect(row, `row for ${name}`).toBeVisible();
      expect((await goals.readGoalNameCell(row)).name).toBe(name);
    }
    await expect(goals.goalRows.filter({ hasText: '49' })).toHaveCount(0);
    await expect(goals.table.locator('img[onerror], script')).toHaveCount(0);
    await goals.openEditGoal(names[0]);
    await expect(goals.goalNameInput).toHaveValue(names[0]);
    for (const f of ['Description', 'Learning Objectives', 'Definition of Done', 'Topics & Concepts'] as const) {
      await expect(goals.editor(f).locator('img[onerror], a[href^="javascript:"]'), `${f} stored payload sanitised`).toHaveCount(0);
    }
    await goals.closeGoalDialog('Cancel');
    const pop = await goals.openColumnFilter(goals.table, 'Goal Name');
    await pop.getByRole('textbox').first().fill(stamp);
    await expect(pop.getByRole('checkbox', { name: names[2], exact: true })).toBeVisible();
    await expect(pop.locator('img[onerror], script')).toHaveCount(0);
    await goals.closePopover();
    expect(dialogs, 'no JavaScript dialog may fire').toBe(0);
  });

  test('TC-EMPGOL-505 Admin has the full Goals screen including the RM filter and goal write controls @security', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.openDashboard();
    for (const f of ['Year', 'Department', 'RM', 'Timeframe'] as const) await expect(goals.filterCombo(f)).toBeVisible();
    await expect(goals.card('RM-wise Goal Status')).toBeVisible();
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await goals.selectGoalsView('By Goal');
    await expect(goals.addGoalBtn).toBeEnabled();
    await expect(goals.goalRows.first().getByRole('button', { name: 'Edit', exact: true })).toBeVisible();
    await expect(goals.goalRows.first().getByRole('button', { name: 'Delete', exact: true })).toBeVisible();
  });

  test('TC-EMPGOL-506 PMO sees Goals with Department filter, no RM filter and org-wide data @security', async ({ pmoPage, primaryPage }) => {
    const admin = new GoalsPage(primaryPage);
    const { kpis: adminKpis } = await admin.refreshDashboard(() => admin.openDashboard());
    const goals = new GoalsPage(pmoPage);
    const { kpis } = await goals.refreshDashboard(() => goals.openDashboard());
    await expect(goals.yearCombo).toBeVisible();
    await expect(goals.departmentCombo).toHaveText('All Departments');
    await expect(goals.timeframeCombo).toBeVisible();
    await expect(goals.rmCombo).toHaveCount(0);
    await expect(goals.card('Your Team Goal Status')).toBeVisible();
    expect(kpis.totalEmployees).toBe(adminKpis.totalEmployees);
  });

  test('TC-EMPGOL-507 EM sees Goals scoped to their own population @security', async ({ emPage, primaryPage }) => {
    const admin = new GoalsPage(primaryPage);
    const { kpis: adminKpis } = await admin.refreshDashboard(() => admin.openDashboard());
    const goals = new GoalsPage(emPage);
    const { kpis } = await goals.refreshDashboard(() => goals.openDashboard());
    await expect(goals.yearCombo).toBeVisible();
    await expect(goals.departmentCombo).toBeVisible();
    await expect(goals.timeframeCombo).toBeVisible();
    await expect(goals.rmCombo).toHaveCount(0);
    await expect(goals.card('Your Team Goal Status')).toBeVisible();
    expect(kpis.totalEmployees).toBeGreaterThan(0);
    expect(kpis.totalEmployees).toBeLessThan(adminKpis.totalEmployees);
  });

  test('TC-EMPGOL-508 REGRESSION CHECK — TM Department picker stays limited to the TM\'s own departments @security @regression', async ({ tmPage, primaryPage }) => {
    const admin = new GoalsPage(primaryPage);
    const { kpis: adminKpis } = await admin.refreshDashboard(() => admin.openDashboard());
    const goals = new GoalsPage(tmPage);
    const { kpis: all } = await goals.refreshDashboard(() => goals.openDashboard());
    expect(await goals.getFilterOptions('Department')).toEqual(['All Departments', 'ANDROID', 'CSM', 'QA']);
    expect(all.totalEmployees, 'TM "All Departments" must never be org-wide').toBeLessThan(adminKpis.totalEmployees);
    const { kpis: qa } = await goals.refreshDashboard(() => goals.selectFilter('Department', 'QA'));
    expect(qa.totalEmployees).toBeGreaterThan(0);
    expect(qa.totalEmployees).toBeLessThan(all.totalEmployees);
  });

  test('TC-EMPGOL-509 TM and PM cannot widen scope by injecting a foreign departmentId in the URL @security', async ({ tmPage, pmPage, primaryPage }) => {
    const admin = new GoalsPage(primaryPage);
    await admin.primeApiSession();
    const mgmt = (await admin.apiGet(`/api/v1/employee-goals/dashboard?groupBy=manager&timeFrame=15d&departmentId=${MANAGEMENT_DEPT}`)).body.data;
    for (const [persona, page] of [['TM', tmPage], ['PM', pmPage]] as const) {
      const goals = new GoalsPage(page);
      const { kpis: own } = await goals.refreshDashboard(() => goals.openDashboard());
      const { kpis } = await goals.refreshDashboard(() => goals.openDashboard(`departmentId=${MANAGEMENT_DEPT}`));
      expect([0, own.totalEmployees], `${persona} KPIs with a foreign departmentId`).toContain(kpis.totalEmployees);
      if (mgmt.totalEmployees !== own.totalEmployees) expect(kpis.totalEmployees, `${persona} must not see MANAGEMENT`).not.toBe(mgmt.totalEmployees);
      await goals.openByEmployee(`departmentId=${MANAGEMENT_DEPT}`);
      const total = await goals.readTotal();
      const { body } = await goals.apiGet('/api/v1/employee-goals/employees?page=1&limit=100&timeFrame=15d');
      expect([0, body.data.total], `${persona} By Employee with a foreign departmentId`).toContain(total);
    }
  });

  test('TC-EMPGOL-510 TM API calls with a foreign departmentId return no foreign data @security', async ({ tmPage }) => {
    const goals = new GoalsPage(tmPage);
    await goals.primeApiSession();
    const dash = await goals.apiGet(`/api/v1/employee-goals/dashboard?timeFrame=15d&departmentId=${MANAGEMENT_DEPT}`);
    const list = await goals.apiGet(`/api/v1/employee-goals/employees?page=1&limit=100&departmentId=${MANAGEMENT_DEPT}`);
    for (const [label, r, total] of [['dashboard', dash, dash.body?.data?.totalEmployees], ['employees', list, list.body?.data?.total]] as const) {
      expect([200, 403], `${label} status`).toContain(r.status);
      if (r.status === 200) expect(total, `${label} returns no MANAGEMENT data`).toBe(0);
    }
  });

  test('TC-EMPGOL-511 PM sees Goals without a Department picker, scoped to their own team @security', async ({ pmPage }) => {
    const goals = new GoalsPage(pmPage);
    const { kpis } = await goals.refreshDashboard(() => goals.openDashboard());
    await expect(goals.filterGroup.getByRole('combobox')).toHaveCount(2);
    await expect(goals.yearCombo).toBeVisible();
    await expect(goals.timeframeCombo).toBeVisible();
    await expect(goals.departmentCombo).toHaveCount(0);
    await expect(goals.rmCombo).toHaveCount(0);
    const cap = await goals.readChartCaption(goals.card('Your Team Goal Status'));
    expect(cap.unit).toBe('employees');
    expect(cap.from).toBe(1);
    // The chart opens on a 25-bar window (since 2026-10-08); the scope check is on the total.
    expect(cap.to).toBeLessThanOrEqual(cap.total);
    expect(cap.total).toBe(kpis.totalEmployees);
  });

  test('TC-EMPGOL-512 RM filter is Admin-only and a managerId parameter does not widen scope @security', async ({ tmPage, primaryPage }) => {
    const goals = new GoalsPage(tmPage);
    await goals.openDashboard();
    await expect(goals.rmCombo).toHaveCount(0);
    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await expect(goals.rmCombo).toHaveCount(0);
    // Foreign RM: the admin's manager list minus everyone the TM can see.
    const admin = new GoalsPage(primaryPage);
    await admin.primeApiSession();
    const managers: Array<{ publicId: string; name: string }> = (await admin.apiGet('/api/v1/employee-goals/filter-options')).body.data.managers;
    await goals.primeApiSession();
    const own = (await goals.apiGet('/api/v1/employee-goals/dashboard?groupBy=manager&timeFrame=15d')).body.data;
    const ownManagers = new Set((own.managerBreakdowns ?? []).map((m: any) => m.managerName));
    const foreign = managers.find(m => !ownManagers.has(m.name));
    expect(foreign, 'an RM outside the TM scope').toBeTruthy();
    for (const param of ['managerId', 'rmId']) {
      const r = await goals.apiGet(`/api/v1/employee-goals/dashboard?groupBy=manager&timeFrame=15d&${param}=${foreign!.publicId}`);
      expect([200, 400, 403], `${param} status`).toContain(r.status);
      if (r.status === 200) expect(r.body.data.totalEmployees, `${param}=${foreign!.name} adds no employees`).toBeLessThanOrEqual(own.totalEmployees);
      const l = await goals.apiGet(`/api/v1/employee-goals/employees?page=1&limit=100&timeFrame=15d&${param}=${foreign!.publicId}`);
      if (l.status === 200) for (const item of l.body.data.items) expect(item.managerName, `${param}: employee outside TM scope`).not.toBe(foreign!.name);
    }
  });

  test('TC-EMPGOL-513 CSM is redirected to /unauthorized, including deep links @security', async ({ csmPage }) => {
    await expectUnauthorized(csmPage, '/employee/goals');
    await expectUnauthorized(csmPage, '/employee/goals?tab=goals&view=catalog');
  });

  test('TC-EMPGOL-514 Employee personas (kashyap, punit) are redirected to /unauthorized @security', async ({ empPage, testUserPage }) => {
    await expectUnauthorized(empPage, '/employee/goals');
    await expectUnauthorized(testUserPage, '/employee/goals');
  });

  test('TC-EMPGOL-515 New Goals endpoints refuse Employee and CSM tokens @security', async ({ empPage, csmPage }) => {
    const results: string[] = [];
    for (const [persona, page] of [['Employee', empPage], ['CSM', csmPage]] as const) {
      const goals = new GoalsPage(page);
      await goals.primeApiSession();
      for (const path of ['/api/v1/employee-goals/dashboard?timeFrame=15d', '/api/v1/employee-goals/filter-options', '/api/v1/employee-goals/employees?page=1&limit=100']) {
        const r = await goals.apiGet(path);
        results.push(`${persona} ${path.split('?')[0]} → ${r.status}`);
        if (r.status === 200) {
          // Whatever the status, no data may leak.
          const d = r.body.data;
          expect(d.totalEmployees ?? d.total ?? 0, `${persona} ${path} leaks counts`).toBe(0);
          expect(d.departments ?? d.items ?? [], `${persona} ${path} leaks rows`).toEqual([]);
        }
      }
    }
    await expectOrDefect(`Goals endpoints are not role-gated for Employee/CSM (expected 403): ${results.join('; ')}.`,
      async () => { for (const r of results) expect(r).toMatch(/→ 403$/); });
  });

  test('TC-EMPGOL-516 Legacy /employee-goals and /goals endpoints stay gated for Employee and CSM @security', async ({ empPage, csmPage }) => {
    for (const [persona, page, email] of [['Employee', empPage, process.env.SIMERP_EMP_USERNAME], ['CSM', csmPage, process.env.SIMERP_CSM_USERNAME]] as const) {
      const goals = new GoalsPage(page);
      await goals.primeApiSession();
      expect((await goals.apiGet('/api/v1/goals?page=1&limit=100')).status, `${persona} /goals`).toBe(403);
      const r = await goals.apiGet('/api/v1/employee-goals?page=1&limit=100');
      if (r.status === 200) {
        for (const item of r.body.data.items ?? []) {
          expect((item.employee?.email ?? '').toLowerCase(), `${persona} sees only own goals`).toBe((email ?? '').toLowerCase());
        }
      } else {
        expect(r.status, `${persona} /employee-goals`).toBe(403);
      }
    }
  });

  test('TC-EMPGOL-517 Goal write APIs reject Employee and CSM tokens @security', async ({ primaryPage, empPage, csmPage }) => {
    const admin = new GoalsPage(primaryPage);
    await admin.openByGoal();
    const name = GoalsPage.uniqueName('rbac');
    created.push(name);
    const { id } = await admin.createGoal({ name });
    const probeName = `${name}-probe`;
    created.push(probeName);
    for (const [persona, page] of [['Employee', empPage], ['CSM', csmPage]] as const) {
      const goals = new GoalsPage(page);
      await goals.primeApiSession();
      expect((await goals.apiSend('post', '/api/v1/goals', { name: probeName, type: 'TECHNICAL', employeeIds: [] })).status, `${persona} POST`).toBe(403);
      expect((await goals.apiSend('patch', `/api/v1/goals/${id}`, { description: 'rbac-probe' })).status, `${persona} PATCH`).toBe(403);
      expect((await goals.apiSend('delete', `/api/v1/goals/${id}`)).status, `${persona} DELETE`).toBe(403);
    }
    const after = await admin.apiGet(`/api/v1/goals/${id}`);
    expect(after.status, 'goal still exists').toBe(200);
    expect(after.body.data.description ?? '').not.toContain('rbac-probe');
    expect(await admin.findGoalsByExactName(probeName)).toEqual([]);
  });

  test('TC-EMPGOL-518 Goal write controls per role match the permission matrix @security @needs-verification', async () => {
    // NOTE: underlying rule is unverified-fallback — no published permission matrix for goal writes per role.
    test.skip(true, 'manual: requirement unclear — no published per-role permission matrix for goal write (Add/Edit/Delete) to assert against; verify with product.');
  });

  test('TC-EMPGOL-519 A department-scoped role cannot write goals outside its scope via the API @security @needs-verification', async ({ tmPage, primaryPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    // Data safety: the PATCH targets a throwaway goal created here (an unassigned goal is outside
    // every department), never a shared goal; the POST uses a suite-prefixed name.
    const admin = new GoalsPage(primaryPage);
    await admin.openByGoal();
    const name = GoalsPage.uniqueName('scope');
    created.push(name);
    const { id } = await admin.createGoal({ name });
    const postName = `${name}-tm`;
    created.push(postName);
    const tm = new GoalsPage(tmPage);
    await tm.primeApiSession();
    const patch = await tm.apiSend('patch', `/api/v1/goals/${id}`, { description: 'tm-scope-probe' });
    const post = await tm.apiSend('post', '/api/v1/goals', { name: postName, type: 'TECHNICAL', employeeIds: [], departmentId: '95895a10-b036-42cf-80c1-26b71251ebd6' });
    await expectOrDefect(`TM can write goals outside its departments via the API (PATCH ${patch.status}, POST ${post.status}); rule unconfirmed — the catalogue may be global.`,
      async () => { expect(patch.status, 'PATCH').toBe(403); expect(post.status, 'POST').toBe(403); });
  });

  test('TC-EMPGOL-520 Expired access token refreshes silently @security', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.primeApiSession();
    const ctx = primaryPage.context();
    const cookies = await ctx.cookies();
    expect(cookies.some(c => c.name === 'refreshToken'), 'refreshToken cookie present').toBe(true);
    await ctx.clearCookies({ name: 'accessToken' });
    const refreshes: number[] = [];
    primaryPage.on('response', r => { if (/\/api\/v1\/auth\/refresh/.test(r.url()) && r.request().method() === 'POST') refreshes.push(r.status()); });
    await goals.openDashboard();
    expect(refreshes.length, 'one token refresh').toBe(1);
    expect(refreshes[0]).toBeLessThan(300);
    await expect(goals.kpiGroup).toBeVisible();

    // A failed refresh must land on the login page without looping.
    await ctx.clearCookies();
    refreshes.length = 0;
    await primaryPage.goto('/employee/goals');
    await expect(primaryPage).toHaveURL(/login|signin|auth/i, { timeout: 60_000 });
    expect(refreshes.length, 'no refresh loop').toBeLessThanOrEqual(2);
  });

  test('TC-EMPGOL-521 XSS in every Goals search box is rendered as text @security', async ({ primaryPage }) => {
    const payload = '<img src=x onerror=alert(1)>';
    const goals = new GoalsPage(primaryPage);
    let dialogs = 0;
    primaryPage.on('dialog', d => { dialogs++; void d.dismiss(); });
    const serverErrors: string[] = [];
    primaryPage.on('response', r => { if (/simerp-dev-api/.test(r.url()) && r.status() >= 500) serverErrors.push(`${r.status()} ${r.url()}`); });

    await goals.openDashboard();
    for (const card of [goals.completionCard, goals.atRiskCard]) {
      await goals.listSearch(card).fill(payload);
      await expect(goals.listSearch(card)).toHaveValue(payload);
      await expect(card.getByText('No goals match your search')).toBeVisible();
      await goals.listSearch(card).fill('');
    }
    const top = (await goals.readRanked(goals.completionCard))[0];
    const dlg = await goals.openAssignments(goals.completionCard, top.name);
    const dlgSearch = dlg.getByRole('textbox', { name: 'Search employee or manager' });
    await dlgSearch.fill(payload);
    await expect(dlgSearch).toHaveValue(payload);
    await expect(goals.assignmentRows(dlg).filter({ hasText: /\w/ }).filter({ has: primaryPage.locator('td:nth-child(2)') })).toHaveCount(0);
    await dlg.getByRole('button', { name: 'Close', exact: true }).last().click();

    await goals.selectTopTab('Goals');
    await goals.waitForResults();
    await goals.searchEmployees(payload);
    await expect(goals.employeeSearch).toHaveValue(payload);
    await expect(goals.emptyTableText).toBeVisible();
    await goals.selectGoalsView('By Goal');
    await goals.searchGoals(payload);
    await expect(goals.goalSearch).toHaveValue(payload);
    // Older goals literally named with this payload exist in the shared catalogue — any match must
    // show the payload as plain text; otherwise the empty state is shown.
    if (await goals.goalRows.count()) {
      for (const row of await goals.goalRows.all()) await expect(row.getByRole('cell').nth(1)).toContainText(payload);
    } else {
      await expect(goals.emptyTableText).toBeVisible();
    }
    await expect(primaryPage.locator('img[src="x"]')).toHaveCount(0);
    expect(dialogs, 'no JavaScript dialog may fire').toBe(0);
    expect(serverErrors).toEqual([]);
  });

  test('TC-EMPGOL-522 Injection-style query values are rejected cleanly by the API @security', async ({ primaryPage }) => {
    const goals = new GoalsPage(primaryPage);
    await goals.primeApiSession();
    const base = '/api/v1/employee-goals/employees?page=1';
    const sqli = await goals.apiGet(`${base}&limit=100&search=${encodeURIComponent("' OR 1=1--")}`);
    expect(sqli.status).toBe(200);
    expect(sqli.body.data.total, 'no data explosion').toBe(0);
    const badDept = await goals.apiGet(`${base}&limit=100&departmentId=not-a-uuid`);
    expect(badDept.status).toBe(400);
    expect(JSON.stringify(badDept.body)).toMatch(/departmentId/i);
    const badLimit = await goals.apiGet(`${base}&limit=5`);
    expect(badLimit.status).toBe(400);
    expect(JSON.stringify(badLimit.body)).toContain('limit must be one of the following values: 100, 200, 300');
  });
});
