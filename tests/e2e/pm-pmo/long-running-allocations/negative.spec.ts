// Long-Running Allocations (Zoho 688906000093866688) — negative.
// @known-defect cases assert the correct behaviour inside test.fail(): they are expected to fail on
// dev today (candidate defect, not filed) and will flag "unexpectedly passed" once fixed.
import { test, expect } from '../../../fixtures/auth';
import { PmProjectsPage, ALLOCATION_STAGE_LABELS } from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('PM & PMO — Long-Running Allocations — Negative', () => {
  test('TC-PMPROJ-125 @negative @shipped Employee persona cannot open Employee Details', async ({ empPage }) => {
    const emp = new EmployeeDetailsPage(empPage);
    await emp.gotoEmployeeList();
    await expect(empPage).toHaveURL(/\/unauthorized/);
    await expect(emp.pageHeading('Access Denied')).toBeVisible();
    await expect(empPage.getByRole('button', { name: 'Go to Profile' })).toBeVisible();
    await expect(empPage.locator('table')).toHaveCount(0);
    await expect(empPage.locator('[aria-label="Long-Running"]')).toHaveCount(0);
    await expect(emp.advancedFilterBtn).toHaveCount(0);
  });

  test('TC-PMPROJ-126 @negative @shipped Employee own profile shows no Long-Running or Upcoming labels', async ({ empPage }) => {
    const [profileRes] = await Promise.all([
      // First call can 401 and be retried after /auth/refresh — wait for the successful one.
      empPage.waitForResponse(r => /\/api\/v1\/employees\/(metadata|me|profile)/.test(r.url()) && r.ok(), { timeout: 40_000 }),
      empPage.goto('/profile', { waitUntil: 'domcontentloaded' }),
    ]);
    expect(profileRes.status()).toBe(200);
    await expect(empPage).toHaveURL(/\/profile/);
    await empPage.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
    await expect(empPage.getByText('Access Denied')).toHaveCount(0);
    await expect(empPage.locator('[aria-label="Long-Running"]')).toHaveCount(0);
    await expect(empPage.getByText(/Long-Running|Upcoming Allocations/)).toHaveCount(0);
  });

  test('TC-PMPROJ-127 @negative @shipped PM is redirected away from My Projects on 6.2.0', async ({ pmPage }) => {
    test.info().annotations.push({ type: 'open-question', description: 'Task implies PM access; 6.2.0 made My Projects CSM-only. If PM access is restored this flips to a positive case.' });
    const pm = new PmProjectsPage(pmPage);
    await pm.gotoForAccessCheck('/my-projects');
    await expect(pmPage).toHaveURL(/\/unauthorized/);
    await expect(pm.pageHeading('Access Denied')).toBeVisible();
    await expect(pm.longRunningCard).toHaveCount(0);
  });

  test('TC-PMPROJ-128 @negative @shipped Invalid allocationStage value in URL is handled gracefully', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    const statuses: string[] = [];
    csmPage.on('response', r => { if (/\/api\/v1\/pm-projects\?/.test(r.url())) statuses.push(String(r.status())); });
    await csmPage.goto('/my-projects?adv_allocationStage=FOO', { waitUntil: 'domcontentloaded' });
    const loadFailed = csmPage.getByText(/Failed to load projects/i).first();
    await pm.getAllProjectRows().first().or(pm.noProjectsFound).or(loadFailed).waitFor({ state: 'visible', timeout: 40_000 });
    try {
      test.info().annotations.push({ type: 'observed', description: `pm-projects list statuses: ${statuses.join(',')}; load-failed screen: ${await loadFailed.isVisible()}` });
      expect(statuses.filter(s => s.startsWith('5')), 'no 5xx from pm-projects').toEqual([]);
      // Expected: the bad value is ignored (full list) or a readable empty state — not an error page
      // that also hides the search box and the stats cards.
      const all = await pm.fetchAllProjects();
      const listed = await pm.getAllProjectRows().count();
      const graceful = listed === all.length || (await pm.noProjectsFound.isVisible());
      expect(graceful, `?adv_allocationStage=FOO → ${listed}/${all.length} rows, "Failed to load projects" shown: ${await loadFailed.isVisible()}`).toBe(true);
      await expect(pm.searchProjectsInput).toBeVisible();
      await expect(pm.longRunningCard).toBeVisible();
    } finally {
      await pm.clearPersistedFilters();
    }
  });

  test('TC-PMPROJ-129 @negative @shipped Invalid allocationStage value in the employees API returns a validation error, not 5xx', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const res = await emp.fetchEmployeesApi({ filters: { allocationStage: ['FOO'] } });
    test.info().annotations.push({ type: 'observed', description: `status ${res.status}: ${JSON.stringify(res.body?.message ?? res.body?.data?.total)}` });
    expect(res.status).toBeLessThan(500);
    expect([200, 400]).toContain(res.status);
  });

  test('TC-PMPROJ-130 @negative @known-defect Persisted hidden Allocation filter must be visible and clearable', async ({ csmPage }) => {
    test.fail(true, 'CANDIDATE DEFECT (not filed): localStorage filters_my_projects re-applies adv_allocationStage on a plain /my-projects visit with no chip or clear control — "No projects found" with the LR card unpressed.');
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects('?adv_allocationStage=UPCOMING');
    const upcomingProjects = await pm.fetchAllProjects({ allocationStage: ['UPCOMING'] });
    await pm.gotoMyProjects('', { keepPersisted: true });
    const clearControl = csmPage.getByRole('button', { name: /Remove .*Allocation|Clear filter|Clear all/ }).first();
    const filterVisibleAndClearable = await clearControl.isVisible().catch(() => false);
    const unfiltered = await pm.fetchAllProjects();
    const listed = await pm.getAllProjectRows().count();
    try {
      // Either the persisted filter is surfaced with a clear action, or it is not re-applied at all.
      expect(filterVisibleAndClearable || listed === unfiltered.length,
        `plain /my-projects shows ${listed}/${unfiltered.length} projects (UPCOMING matches ${upcomingProjects.length}) and ${filterVisibleAndClearable ? 'a' : 'no'} clear control`).toBe(true);
    } finally {
      await pm.clearPersistedFilters();
    }
  });

  test('TC-PMPROJ-131 @negative @shipped Zero-match allocation filter shows a readable empty state', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    const upcoming = await pm.fetchAllProjects({ allocationStage: ['UPCOMING'] });
    test.skip(upcoming.length > 0, `${upcoming.length} CSM project(s) now match UPCOMING — no zero-match stage to observe`);
    await pm.gotoMyProjects('?adv_allocationStage=UPCOMING');
    await expect(pm.noProjectsFound).toBeVisible();
    // The empty state replaces the tbody; its message must be words, not a bare placeholder.
    expect((await pm.noProjectsFound.innerText()).trim()).toMatch(/^No projects found$/i);
    await expect(csmPage.locator('table').first().getByText(/^(-|—|N\/A|null|undefined)$/)).toHaveCount(0);
    await pm.clearPersistedFilters();
  });

  test('TC-PMPROJ-132 @negative @shipped Employees API rejects page size outside 100/200/300', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const res = await emp.fetchEmployeesApi({ limit: 1, filters: { allocationStage: ['LONG_RUNNING'] } });
    expect(res.status).toBe(400);
    // 6.9.0 error envelope: { code: 'VAL_001', message: 'Validation failed', errors: [{ field, message }] }.
    expect(res.body?.message).toBe('Validation failed');
    expect(res.body?.errors ?? [], 'field-level validation error for limit').toContainEqual(
      expect.objectContaining({ field: 'limit', message: 'limit must be one of the following values: 100, 200, 300' }));
  });

  test('TC-PMPROJ-133 @negative @shipped @needs-verification Refreshing mid-filter does not apply a partially selected Allocation option', async ({ pmoPage }) => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const unfiltered = (await emp.fetchEmployeesApi()).body.data.total;
    await emp.setAllocationStages(['RECENT']);
    await expect(emp.allocationStageCheckbox('RECENT')).toHaveAttribute('aria-checked', 'true');
    await pmoPage.reload({ waitUntil: 'domcontentloaded' });
    await emp.listResultsSummary.waitFor({ state: 'visible', timeout: 40_000 });
    await expect(pmoPage).not.toHaveURL(/adv_allocationStage/);
    await expect(emp.allocationChip(ALLOCATION_STAGE_LABELS.RECENT)).toHaveCount(0);
    expect(await emp.readListTotal()).toBe(unfiltered);
  });

  test('TC-PMPROJ-134 @negative @shipped @needs-verification Stats API failure does not blank the page', async ({ csmPage }) => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const pm = new PmProjectsPage(csmPage);
    await csmPage.route('**/api/v1/pm-projects/stats*', route => route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ statusCode: 500, message: 'Internal server error' }) }));
    await pm.gotoMyProjects();
    await expect(pm.getAllProjectRows().first()).toBeVisible();
    const statsText = await csmPage.getByRole('main').last().innerText();
    expect(statsText).not.toMatch(/NaN|undefined|at Object\.|TypeError|stack/i);
  });
});
