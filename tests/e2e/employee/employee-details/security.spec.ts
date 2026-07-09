import { test, expect } from '../../../fixtures/auth';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

// TC-EMPDET-077..088 — exhaustive security/RBAC pass: role-gated Edit visibility, API-level
// enforcement (403), IDOR, feature-flag gating, and unauthenticated access.
// `page` here already carries ceo@simformsolutions.com's storageState (playwright.config.ts default),
// equivalent to primaryPage; `testUserPage` is punit.patel (restricted role).
test.describe('Employee — Security', () => {
  test('TC-EMPDET-077 Admin sees Edit action on all employee rows @security', async ({ page }) => {
    const employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      await row.hover();
      await expect(row.getByRole('button', { name: 'Edit' })).toBeVisible();
    }
  });

  test('TC-EMPDET-078 Restricted role (TM) does not see Edit action in UI @security @negative', async ({ testUserPage }) => {
    const employeePage = new EmployeeDetailsPage(testUserPage);
    await employeePage.navigateToEmployees();
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    for (let i = 0; i < Math.min(rowCount, 5); i++) {
      const row = rows.nth(i);
      await row.hover();
      await expect(row.getByRole('button', { name: 'Edit' })).not.toBeVisible();
    }
  });

  test('TC-EMPDET-079 Restricted role direct API PATCH returns 403 Forbidden @security @negative', async ({ testUserPage }) => {
    await testUserPage.goto('/employee');
    await testUserPage.waitForLoadState('domcontentloaded');
    const response = await testUserPage.request.patch('/api/employees/1', {
      data: { designation: 'Unauthorized Change' },
      failOnStatusCode: false,
    });
    expect(response.status()).toBe(403);
  });

  test('TC-EMPDET-080 IDOR — restricted role cannot access another employee\'s record via API @security @negative', async ({ testUserPage }) => {
    await testUserPage.goto('/employee');
    await testUserPage.waitForLoadState('domcontentloaded');
    const response = await testUserPage.request.get('/api/employees/999999', { failOnStatusCode: false });
    const status = response.status();
    if (status === 200) {
      const body = await response.json().catch(() => null);
      expect(body && Object.keys(body).length > 0, 'API returned another employee\'s data (IDOR)').toBe(false);
    } else {
      expect([403, 404]).toContain(status);
    }
  });

  test('TC-EMPDET-081 Feature flag disabled — Edit control hidden for ALL roles including Admin @security @regression @needs-verification', async () => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    test.skip(true, 'Requires manually toggling the Edit feature flag off in the test environment across multiple role logins — not automatable with current infrastructure');
  });

  test('TC-EMPDET-082 Feature flag disabled — API edit endpoint returns 403 @security @regression', async () => {
    test.skip(true, 'Requires manually toggling the Edit feature flag off in the test environment — not automatable with current infrastructure');
  });

  test('TC-EMPDET-083 HR role can edit employee records @security', async () => {
    test.skip(true, 'No HR-role storageState fixture exists in tests/fixtures/auth.ts (only primaryPage=Admin and testUserPage=restricted role) — cannot exercise a dedicated HR-role session');
  });

  test('TC-EMPDET-084 Employee role cannot see Edit action @security @negative', async ({ testUserPage }) => {
    const employeePage = new EmployeeDetailsPage(testUserPage);
    await employeePage.navigateToEmployees();
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      await row.hover();
      await expect(row.getByRole('button', { name: 'Edit' })).not.toBeVisible();
    }
  });

  test('TC-EMPDET-085 Resource Manager sees only employees within their scope @security @needs-verification', async () => {
    // NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression.
    test.skip(true, 'No Resource Manager (RM) role storageState fixture exists — cannot exercise a dedicated RM-scoped session');
  });

  test('TC-EMPDET-086 XSS payload in search does not inject into DOM @security @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
    const dialogs: string[] = [];
    page.on('dialog', d => { dialogs.push(d.message()); d.dismiss().catch(() => {}); });
    await employeePage.searchEmployee('<img src=x onerror=alert(1)>');
    await expect(employeePage.employeeGrid).toBeVisible();
    expect(dialogs.length).toBe(0);
    expect(await page.locator('img[onerror]').count()).toBe(0);
  });

  test('TC-EMPDET-087 Direct URL access without auth redirects to login @security @negative', async ({ browser }) => {
    const ctx = await browser.newContext(); // deliberately unauthenticated
    const page = await ctx.newPage();
    await page.goto('/employee/details', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const url = page.url();
    const redirectedToLogin = /login|signin|microsoftonline|live\.com/i.test(url);
    const apiResponse = await page.request.get('/api/employees', { failOnStatusCode: false });
    expect(redirectedToLogin || [401, 403].includes(apiResponse.status())).toBe(true);
    await ctx.close();
  });

  test('TC-EMPDET-088 Session expiry during edit blocks save without data corruption @security', async () => {
    test.skip(true, 'Requires a controllable session-expiry mechanism mid-edit — not automatable with current test infrastructure');
  });
});
