// Long-Running Allocations (Zoho 688906000093866688) — security / RBAC.
// Live 6.2.0 facts: /my-projects + /api/v1/pm-projects/* are CSM-only (everyone else → /unauthorized
// and 403 "Access forbidden"); /employee is PMO/CEO-wide, TM/EM/PM data-scoped, CSM 403, Employee denied.
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';
import { PmProjectsPage, apiGet, filtersParam, aliasOf } from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

const LR_FILTER = filtersParam({ allocationStage: ['LONG_RUNNING'] });

/** UI: /my-projects → Access Denied with no LR card/badges. API: 403 for the stats and the filtered list. */
async function expectMyProjectsDenied(page: Page): Promise<void> {
  const pm = new PmProjectsPage(page);
  await pm.gotoForAccessCheck('/my-projects');
  await expect(page).toHaveURL(/\/unauthorized/);
  await expect(pm.pageHeading('Access Denied')).toBeVisible();
  await expect(pm.longRunningCard).toHaveCount(0);
  await expect(page.locator('[aria-label="Long-Running"]')).toHaveCount(0);
  const stats = await apiGet(page, '/api/v1/pm-projects/stats');
  expect(stats.status, 'GET /pm-projects/stats').toBe(403);
  expect(stats.body?.message).toBe('Access forbidden');
  const list = await apiGet(page, `/api/v1/pm-projects?page=1&limit=100&timeFrame=15d&${LR_FILTER}`);
  expect(list.status, 'GET /pm-projects?filters=LONG_RUNNING').toBe(403);
  expect(list.body?.message).toBe('Access forbidden');
}

/** Apply the Long Running filter in the UI and return {uiTotal, apiTotal} for this role. */
async function lrTotals(page: Page): Promise<{ ui: number | null; api: number }> {
  const emp = new EmployeeDetailsPage(page);
  await emp.gotoEmployeeList();
  await emp.applyAllocationStages(['LONG_RUNNING']);
  const api = await emp.fetchEmployeesApi({ filters: { allocationStage: ['LONG_RUNNING'] } });
  expect(api.status).toBe(200);
  return { ui: await emp.readListTotal(), api: api.body.data.total };
}

test.describe('PM & PMO — Long-Running Allocations — Security', () => {
  test('TC-PMPROJ-159 @security @shipped PM cannot reach My Projects or the Long-Running stats API', async ({ pmPage }) => {
    test.info().annotations.push({ type: 'open-question', description: 'The task implies PM access; this documents current 6.2.0 behaviour (CSM-only).' });
    await expectMyProjectsDenied(pmPage);
  });

  test('TC-PMPROJ-160 @security @shipped PMO cannot reach My Projects or the Long-Running stats API', async ({ pmoPage }) => {
    await expectMyProjectsDenied(pmoPage);
  });

  test('TC-PMPROJ-161 @security @shipped TM cannot reach My Projects or the Long-Running stats API', async ({ tmPage }) => {
    await expectMyProjectsDenied(tmPage);
  });

  test('TC-PMPROJ-162 @security @shipped EM cannot reach My Projects or the Long-Running stats API', async ({ emPage }) => {
    await expectMyProjectsDenied(emPage);
  });

  test('TC-PMPROJ-163 @security @shipped CEO cannot reach My Projects or the Long-Running stats API', async ({ primaryPage }) => {
    await expectMyProjectsDenied(primaryPage);
  });

  test('TC-PMPROJ-164 @security @shipped Employee cannot reach My Projects or the Long-Running stats API', async ({ empPage }) => {
    await expectMyProjectsDenied(empPage);
  });

  test('TC-PMPROJ-165 @security @shipped Employee cannot call the employees API with allocation filters', async ({ empPage }) => {
    const pm = new PmProjectsPage(empPage);
    await pm.gotoForAccessCheck('/employee'); // loads the app so the session cookies are fresh
    const list = await apiGet(empPage, `/api/v1/employees?page=1&limit=100&${LR_FILTER}`);
    expect(list.status).toBe(403);
    expect(list.body?.message).toBe('Access forbidden');
    const filters = await apiGet(empPage, '/api/v1/employees/filters');
    expect(filters.status).toBe(403);
    expect(filters.body?.message).toBe('Access forbidden');
  });

  test('TC-PMPROJ-166 @security @shipped CSM cannot get Employee Details allocation data', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoForAccessCheck('/employee');
    const api = await apiGet(csmPage, `/api/v1/employees?page=1&limit=100&${LR_FILTER}`);
    expect(api.status).toBe(403);
    // UI: denied route, or at minimum no employee grid with allocation data.
    await expect(csmPage.locator('table tbody [aria-label="Long-Running"]')).toHaveCount(0);
    const denied = /\/unauthorized/.test(csmPage.url()) || await pm.pageHeading('Access Denied').isVisible().catch(() => false);
    const noNav = (await csmPage.getByRole('link', { name: 'Employee Details' }).count()) === 0;
    expect(denied || noNav, `CSM on /employee: url=${csmPage.url()}`).toBe(true);
  });

  test('TC-PMPROJ-167 @security @shipped IDOR: CSM cannot read Long-Running data of a project they do not own', async ({ csmPage, pmoPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    const own = new Set((await pm.fetchAllProjects()).map(p => p.publicId));
    const pmoEmp = new EmployeeDetailsPage(pmoPage);
    await pmoEmp.gotoEmployeeList();
    const subject = await pmoEmp.findEmployee(e => (e.projects ?? []).some((p: any) => p.allocationStartDate && !own.has(p.projectPublicId)), { allocationStage: ['LONG_RUNNING'] });
    expect(subject, 'a project outside the CSM scope').not.toBeNull();
    const foreign = subject.projects.find((p: any) => p.allocationStartDate && !own.has(p.projectPublicId));

    const res = await pm.fetchProjectDetail(foreign.projectPublicId);
    test.info().annotations.push({ type: 'observed', description: `GET /pm-projects/${foreign.projectPublicId} (${aliasOf(foreign)}) as CSM → ${res.status}` });
    expect([403, 404]).toContain(res.status);
    expect(res.body?.data?.employees).toBeUndefined();

    await csmPage.goto(`/my-projects/${foreign.projectPublicId}`, { waitUntil: 'domcontentloaded' });
    await csmPage.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
    await expect(csmPage.getByRole('button', { name: /^Open actions for / })).toHaveCount(0);
    await expect(csmPage.locator('table tbody [aria-label="Long-Running"]')).toHaveCount(0);
  });

  test('TC-PMPROJ-168 @security @shipped @needs-verification Allocation filter results are data-scoped per role', async ({ tmPage, pmoPage }) => {
    test.setTimeout(180_000);
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const tm = await lrTotals(tmPage);
    expect(tm.ui, 'TM UI total = TM API total').toBe(tm.api);
    const pmo = await lrTotals(pmoPage);
    expect(pmo.ui, 'PMO UI total = PMO API total').toBe(pmo.api);
    expect(tm.api).toBeLessThanOrEqual(pmo.api);
  });

  test('TC-PMPROJ-169 @security @shipped EM and PM Long-Running totals are scoped', async ({ emPage, pmPage, pmoPage }) => {
    test.setTimeout(240_000);
    const em = await lrTotals(emPage);
    expect(em.ui, 'EM UI total = EM API total').toBe(em.api);
    const pmr = await lrTotals(pmPage);
    expect(pmr.ui, 'PM UI total = PM API total').toBe(pmr.api);
    const pmoEmp = new EmployeeDetailsPage(pmoPage);
    await pmoEmp.gotoEmployeeList();
    const pmoTotal = (await pmoEmp.fetchEmployeesApi({ filters: { allocationStage: ['LONG_RUNNING'] } })).body.data.total;
    expect(em.api).toBeLessThanOrEqual(pmoTotal);
    expect(pmr.api).toBeLessThanOrEqual(pmoTotal);
  });

  test('TC-PMPROJ-170 @security @shipped @needs-verification Side-panel Long-Running label audience matches the confirmed RBAC', async ({ pmoPage, tmPage, emPage, pmPage, primaryPage }) => {
    test.setTimeout(300_000);
    test.info().annotations.push({ type: 'needs-verification', description: 'Unverified fallback: asserts live behaviour (every role that can open Employee Details sees the LR label). If the business confirms "TM and PMO only", EM/PM/CEO must be inverted.' });
    const roles: Array<[string, Page]> = [['PMO', pmoPage], ['TM', tmPage], ['EM', emPage], ['PM', pmPage], ['CEO', primaryPage]];
    for (const [role, page] of roles) {
      const emp = new EmployeeDetailsPage(page);
      await emp.gotoEmployeeList();
      const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
      expect(subject, `${role}: an LR employee in scope`).not.toBeNull();
      const lr = subject.projects.find((p: any) => p.isLongRunning);
      const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(subject.name));
      await expect(emp.visibleLrBadges(emp.sidePanelProjectRows(drawer).filter({ hasText: aliasOf(lr) }).first()), `${role} sees LR on ${aliasOf(lr)}`).toHaveCount(1);
    }
  });

  test('TC-PMPROJ-171 @security @shipped Stats count only includes the CSM\'s own projects', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    const stats = await pm.fetchStats();
    expect(stats.status).toBe(200);
    const projects = await pm.fetchAllProjects();
    const sum = projects.reduce((n, p) => n + (p.employees ?? []).filter((e: any) => e.isLongRunning).length, 0);
    expect(stats.body.data.longRunningAllocationCount).toBe(sum);
    expect(stats.body.data.totalProjects).toBe(projects.length);
  });
});
