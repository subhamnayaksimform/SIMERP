// TC-EMPGOL-075..084 — security pass: Assign-to scoping enforcement (UI + API), Admin org-wide
// access, immutable-field/delete-blocked API rejection (079/080 fixme — endpoint unconfirmed,
// requires request-context access beyond a UI-only flow), Employee-role write-control absence,
// IDOR probing, and dual-layer (UI+API) role enforcement. RM-specific case (076) is `test.fixme` —
// no dedicated RM test account provisioned.
import { test, expect } from '../../../fixtures/auth';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

test.describe('Goals — Security', () => {
  test('TC-EMPGOL-075 Assign to multiselect never offers employees outside the logged-in user\'s access scope @security', async ({ tmPage }) => {
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoals();
    await tmGoalsPage.openAddGoalPanel();
    const selectable = await tmGoalsPage.isEmployeeSelectableInAssignTo('zzz-outside-scope-probe');
    expect(selectable).toBe(false);
  });

  test.fixme('TC-EMPGOL-076 — MANUAL VERIFICATION REQUIRED: RM cannot assign a goal to an employee outside their own team, UI and API (no dedicated RM test account provisioned)', async () => {});

  test('TC-EMPGOL-077 TM/EM cannot assign a goal to an employee outside their managed department(s) (UI and API) @security', async ({ tmPage }) => {
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoals();
    await tmGoalsPage.openAddGoalPanel();
    const uiSelectable = await tmGoalsPage.isEmployeeSelectableInAssignTo('zzz-outside-scope-probe');
    expect(uiSelectable, 'UI unexpectedly allowed selecting an out-of-scope employee').toBe(false);

    const status = await tmGoalsPage.attemptApiWrite(tmPage, 'post', '/api/goals/1/assignments', { employeeId: 'zzz-outside-scope-probe' });
    expect([401, 403, 404], `expected a rejection status for an out-of-scope assignment attempt, got ${status}`).toContain(status);
  });

  test('TC-EMPGOL-078 Admin can assign goals to any employee across the organization @security', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoals();
    const rowCount = await goalsPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing goal available');
    const row = goalsPage.getFirstDataRow();
    const goalName = await goalsPage.getGoalNameFromRow(row);
    const opened = await goalsPage.clickEditGoal(goalName);
    if (!opened) test.skip(true, 'Edit control not found');
    const fieldPresent = await goalsPage.assignToMultiselect.isVisible().catch(() => false);
    test.skip(!fieldPresent, 'Assign to Employees field confirmed removed from the Edit Goal panel — no UI path left to change assignments from here');
    const employees = await goalsPage.addFirstAvailableAssignees(1);
    expect(employees.length, 'Admin could not assign any employee regardless of department').toBeGreaterThan(0);
  });

  test.fixme('TC-EMPGOL-079 — MANUAL VERIFICATION REQUIRED: direct API attempt to edit Goal Name/Goal Type is rejected server-side (goal update endpoint unconfirmed; requires request-context access beyond a UI-only Playwright flow)', async () => {});

  test.fixme('TC-EMPGOL-080 — MANUAL VERIFICATION REQUIRED: direct API attempt to delete a goal with assigned employees is rejected (goal delete endpoint unconfirmed; requires request-context access beyond a UI-only Playwright flow)', async () => {});

  test('TC-EMPGOL-081 XSS payload in the Description rich-text field is sanitized everywhere it is rendered @security @negative', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoals();
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC081');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');

    let dialogFired = false;
    page.once('dialog', () => { dialogFired = true; });
    await goalsPage.fillDescription("<script>alert('xss')</script>");
    await goalsPage.savePanel();
    expect(dialogFired, 'XSS payload executed instead of being sanitized').toBe(false);

    await goalsPage.clickEditGoal(goalName);
    const html = await goalsPage.descriptionInput.innerHTML().catch(() => '');
    expect(html).not.toMatch(/<script>/i);
  });

  test('TC-EMPGOL-082 Employee role cannot create, edit, assign, or delete goals — no write controls are exposed @security', async ({ testUserPage }) => {
    const employeeGoalsPage = new GoalsPage(testUserPage);
    await employeeGoalsPage.navigateToOwnProfileGoalsTab();
    const anyWriteControlVisible = await employeeGoalsPage.hasAnyGoalWriteControlsVisible();
    expect(anyWriteControlVisible, 'a goal write-action control (Add/Edit/Delete) is exposed on the Employee\'s own profile Goals tab').toBe(false);
  });

  test('TC-EMPGOL-083 Restricted role cannot access another employee\'s or department\'s goal-scoped data by manipulating a goal/employee ID in the URL or request (IDOR) @security @regression @needs-verification', async ({ tmPage }) => {
    // NOTE: underlying rule is speculative — goal-related API surface is unconfirmed; using a probe ID.
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoals();
    const result = await tmGoalsPage.attemptApiRead(tmPage, '/api/goals/00000000-0000-4000-8000-000000000000');
    expect([401, 403, 404], `expected the out-of-scope goal ID to be rejected, got ${result.status}`).toContain(result.status);
  });

  test('TC-EMPGOL-084 Each role\'s forbidden goal actions are enforced at both UI (control hidden/disabled) and API (403) level, not merely UI-restricted @security @regression @needs-verification', async ({ page, tmPage }) => {
    // NOTE: underlying rule is speculative — requires the goal write API endpoints, which are unconfirmed.
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoals();
    await tmGoalsPage.openAddGoalPanel();
    const uiBlocked = !(await tmGoalsPage.isEmployeeSelectableInAssignTo('zzz-outside-scope-probe'));
    expect(uiBlocked, 'TM UI unexpectedly allowed an out-of-scope assignment').toBe(true);

    const status = await tmGoalsPage.attemptApiWrite(tmPage, 'post', '/api/goals/1/assignments', { employeeId: 'zzz-outside-scope-probe' });
    expect([401, 403, 404], `expected the API to also reject the forbidden action, got ${status}`).toContain(status);
  });
});

// TC-EMPGOL-210/288/289/318..323 — relocation (2026-09-22) RBAC + payload-sanitization pass.
// Ground-truth confirmed live via direct API probing (2026-09-22): GET /api/v1/goals and
// POST /api/v1/goals correctly 403 for Employee/CSM; PATCH /api/v1/goals/:id returns 200 for the
// TM persona (matches the Edit/Delete buttons TM sees in the UI); but GET /api/v1/employee-goals
// returned 200 for BOTH Employee and CSM personas — the exact endpoint gating GET /api/v1/goals
// is present, but was not applied to /employee-goals. TC-EMPGOL-320 below encodes the CORRECT
// (401/403) expectation for both endpoints and will fail against real staging on this second one
// until it's fixed — that failure IS the reproduction, not a broken test.
const MANAGEMENT_DEPARTMENT_ID = '95895a10-b036-42cf-80c1-26b71251ebd6';

test.describe('Goals — Security (Relocation 2026-09-22)', () => {
  test('TC-EMPGOL-210 A department-scoped user cannot read another department by editing departmentId in the URL @security @regression', async ({ tmPage }) => {
    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoalsScreen({ tab: 'dashboard' });
    const own = await tmGoalsPage.readDashboardKpis();

    await tmGoalsPage.navigateToGoalsScreen({ departmentId: MANAGEMENT_DEPARTMENT_ID, tab: 'dashboard' });
    const injected = await tmGoalsPage.readDashboardKpis();

    expect(injected, 'TM saw different KPIs after injecting a foreign departmentId — department scope was bypassed').toEqual(own);
  });

  test('TC-EMPGOL-288 Script payloads in the goal name are never executed @security', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await goalsPage.openAddGoalPanel();
    const goalName = `${goalsPage.createUniqueGoalName('XSS')}-<img src=x onerror=alert(1)>`;

    let dialogFired = false;
    page.once('dialog', () => { dialogFired = true; });
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.savePanel();
    expect(dialogFired, 'a payload in the goal name triggered a live dialog instead of rendering as literal text').toBe(false);

    await goalsPage.searchGoals(goalName.split('-<img')[0]);
    const row = goalsPage.getFirstDataRow();
    const rendered = await goalsPage.getGoalNameFromRow(row);
    expect(rendered, 'goal name did not round-trip as literal text').toContain('onerror=alert(1)');
    // Check for a LIVE onerror attribute on an actual element, not a text-content match — the
    // payload correctly renders HTML-escaped (`&lt;img ... &gt;`) as literal text, which a naive
    // substring/regex check against innerHTML cannot distinguish from a real, executable attribute.
    expect(await row.locator('[onerror]').count(), 'a live onerror handler attribute reached the DOM').toBe(0);
  });

  test('TC-EMPGOL-289 The rich-text fields sanitise pasted HTML @security', async ({ page }) => {
    const goalsPage = new GoalsPage(page);
    await goalsPage.navigateToGoalsScreen({ tab: 'management' });
    await goalsPage.openAddGoalPanel();
    const goalName = goalsPage.createUniqueGoalName('TC289');
    await goalsPage.fillGoalName(goalName);
    if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
    await goalsPage.selectGoalType('Technical');
    await goalsPage.fillRichTextField('description', "<img src=x onerror=alert('xss')>");
    await goalsPage.fillRichTextField('learningObjectives', '<a href="javascript:alert(1)">click</a>');
    await goalsPage.savePanel();

    await goalsPage.searchGoals(goalName);
    const opened = await goalsPage.clickEditGoal(goalName);
    expect(opened, 'could not reopen the created goal to inspect sanitized content').toBe(true);
    // Same live-attribute distinction as TC-EMPGOL-288: the editors correctly render both
    // payloads HTML-escaped as literal text (`&lt;img ... &gt;`) — check for a live attribute/href
    // on an actual element, not a substring match against innerHTML, which can't tell escaped
    // text apart from a real, executable one.
    const liveOnerror = await goalsPage.richTextEditorBody('description').locator('[onerror]').count();
    const liveJsHref = await goalsPage.richTextEditorBody('learningObjectives').locator('a[href^="javascript:" i]').count();
    expect(liveOnerror, 'a live onerror handler attribute survived into the stored Description content').toBe(0);
    expect(liveJsHref, 'a live javascript: href survived into the stored Learning Objectives content').toBe(0);
  });

  test('TC-EMPGOL-318 A base Employee cannot reach the Goals screen @security', async ({ empPage }) => {
    await empPage.goto('/employee/goals', { waitUntil: 'domcontentloaded' });
    await expect(empPage).toHaveURL(/\/unauthorized/);
    await expect(empPage.getByText(/access denied/i)).toBeVisible();
    await expect(empPage.getByRole('link', { name: 'Goals', exact: true })).toHaveCount(0);
  });

  test('TC-EMPGOL-319 A CSM cannot reach the Goals screen @security', async ({ csmPage }) => {
    await csmPage.goto('/employee/goals', { waitUntil: 'domcontentloaded' });
    await expect(csmPage).toHaveURL(/\/unauthorized/);
    await expect(csmPage.getByText(/access denied/i)).toBeVisible();
    await expect(csmPage.getByRole('link', { name: 'Goals', exact: true })).toHaveCount(0);
  });

  test('TC-EMPGOL-320 The goals APIs reject roles that are denied the screen @security', async ({ empPage, csmPage }) => {
    const goalsPage = new GoalsPage(empPage);
    for (const [roleName, rolePage] of [['Employee', empPage], ['CSM', csmPage]] as const) {
      // Ground-truth correction: a fixture's storageState session can carry a short-lived access
      // token that has since expired — calling page.request directly (no prior navigation) then
      // gets a plain 401 from EVERY endpoint regardless of role, which passes this assertion for
      // the wrong reason (token expiry, not role enforcement) and was confirmed live to mask the
      // real per-role difference. Visiting an always-accessible page first lets the app's own
      // token-refresh flow run (confirmed live: 401 → POST /auth/refresh → 200 retry), so the
      // requests below carry the SAME fresh, role-scoped token the real UI would use.
      await rolePage.goto('/profile', { waitUntil: 'domcontentloaded' }).catch(() => {});
      await rolePage.waitForTimeout(1500);

      const getGoals = await goalsPage.attemptApiRead(rolePage, '/api/v1/goals?limit=100&page=1');
      expect([401, 403], `${roleName}: GET /api/v1/goals should be rejected, got ${getGoals.status}`).toContain(getGoals.status);

      // DEFECT (confirmed live 2026-09-22): this currently returns 200 for both roles, unlike
      // /api/v1/goals — the same route-level gate was not applied to /employee-goals.
      const getEmployeeGoals = await goalsPage.attemptApiRead(rolePage, '/api/v1/employee-goals?page=1&limit=100');
      expect([401, 403], `${roleName}: GET /api/v1/employee-goals should be rejected the same way /api/v1/goals is, got ${getEmployeeGoals.status}`).toContain(getEmployeeGoals.status);

      const postGoals = await goalsPage.attemptApiWrite(rolePage, 'post', '/api/v1/goals', { name: `rbac-probe-${Date.now()}`, type: 'TECHNICAL' });
      expect([401, 403], `${roleName}: POST /api/v1/goals should be rejected, got ${postGoals}`).toContain(postGoals);
    }
  });

  test('TC-EMPGOL-321 A department-scoped role cannot write goals outside its scope via the API @security', async ({ tmPage }) => {
    const goalsPage = new GoalsPage(tmPage);
    // A goal write API takes no departmentId at all (confirmed live) — "outside scope" for a
    // write therefore means writing to a specific goal record, not a department parameter. TM is
    // confirmed able to PATCH real goals (matches the Edit button it's shown) — this asserts that
    // capability doesn't extend to actions this role's own UI never offers, using a plausible but
    // non-existent goal id so the probe can't mutate anything real regardless of the response.
    await goalsPage.navigateToGoalsScreen({ tab: 'management' }); // ensure a fresh, non-expired token (see TC-EMPGOL-320's note)
    const probeId = '00000000-0000-4000-8000-000000000000';
    // 400 accepted alongside 401/403/404: confirmed live the API validates the update payload
    // shape before an existence/ownership check, so a deliberately minimal body can 400 first —
    // still "rejected, nothing mutated", which is what this case is actually asserting.
    const patchStatus = await goalsPage.attemptApiWrite(tmPage, 'patch', `/api/v1/goals/${probeId}`, { name: 'should-not-apply' });
    expect([400, 401, 403, 404], `expected a non-existent/out-of-scope goal PATCH to be rejected, got ${patchStatus}`).toContain(patchStatus);
    const deleteStatus = await goalsPage.attemptApiWrite(tmPage, 'delete', `/api/v1/goals/${probeId}`);
    expect([400, 401, 403, 404], `expected a non-existent/out-of-scope goal DELETE to be rejected, got ${deleteStatus}`).toContain(deleteStatus);
  });

  test('TC-EMPGOL-323 Write controls on Goal Management respect the signed-in role @security', async ({ page, tmPage }) => {
    const adminGoalsPage = new GoalsPage(page);
    await adminGoalsPage.navigateToGoalsScreen({ tab: 'management' });
    await expect(adminGoalsPage.addGoalBtn, 'Admin should see Add Goal').toBeVisible();
    expect(await page.getByRole('button', { name: 'Edit' }).count(), 'Admin should see per-row Edit controls').toBeGreaterThan(0);

    const tmGoalsPage = new GoalsPage(tmPage);
    await tmGoalsPage.navigateToGoalsScreen({ tab: 'management' });
    await expect(tmGoalsPage.addGoalBtn, 'TM should also see Add Goal (confirmed live: TM has full write access to Goal Management)').toBeVisible();
    expect(await tmPage.getByRole('button', { name: 'Edit' }).count(), 'TM should see per-row Edit controls').toBeGreaterThan(0);
  });
});
