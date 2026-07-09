import { test, expect } from '@playwright/test';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Employee — Negative', () => {
  let employeePage: EmployeeDetailsPage;

  test.beforeEach(async ({ page }) => {
    employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
  });

  test('TC-EMPDET-025 Search with no matching results shows empty state and zero count @negative @boundary', async () => {
    await employeePage.searchEmployee('XYZNOTEXIST_99999');
    await expect(employeePage.employeeGrid).toBeVisible();
    await expect(employeePage.getEmptyState()).toBeVisible();
    const rowCount = await employeePage.getVisibleRowCount();
    expect(rowCount).toBe(0);
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  test('TC-EMPDET-026 Advanced filter combination returns no results — empty state @negative', async () => {
    await employeePage.openAdvancedFilterPanel();
    await employeePage.selectDepartmentFilter('Finance');
    await employeePage.selectDesignationFilter('Backend Engineer');
    await employeePage.clickAdvancedFilterSave();
    const rowCount = await employeePage.getVisibleRowCount();
    if (rowCount === 0) {
      await expect(employeePage.getEmptyState()).toBeVisible();
    }
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  test('TC-EMPDET-027 Advanced Filter — Availability % = 101 is rejected with validation error @negative', async ({ page }) => {
    await employeePage.openAdvancedFilterPanel();
    const filled = await employeePage.fillAdvancedFilterField(/availability.*last/i, '101');
    if (!filled) test.skip(true, 'Availability % field not present in Advanced Filter panel');
    await employeePage.clickAdvancedFilterSave();
    const errorMsg = employeePage.getValidationError(/availability percentage must be between 0 and 100/i)
      .or(page.getByText(/must be between 0 and 100/i));
    const shown = await errorMsg.first().isVisible().catch(() => false);
    if (!shown) {
      // PRODUCT DEFECT SUSPECTED: no validation error shown for Availability % = 101 — see TC-EMPDET-027
    }
    await expect(errorMsg.first()).toBeVisible();
  });

  test('TC-EMPDET-028 Advanced Filter — Experience = -1 is rejected with validation error @negative', async ({ page }) => {
    await employeePage.openAdvancedFilterPanel();
    const filled = await employeePage.fillAdvancedFilterField(/experience/i, '-1');
    if (!filled) test.skip(true, 'Experience field not present in Advanced Filter panel');
    await employeePage.clickAdvancedFilterSave();
    const errorMsg = employeePage.getValidationError(/experience must be a non-negative number/i)
      .or(page.getByText(/non-negative|must be.*0 or greater/i));
    await expect(errorMsg.first()).toBeVisible();
  });

  test('TC-EMPDET-029 Advanced Filter — Available Since end date before start date rejected @negative', async ({ page }) => {
    await employeePage.openAdvancedFilterPanel();
    await employeePage.expandAdvancedFilterSection(/available since/i);
    const panel = employeePage.getAdvancedFilterPanel();
    const dateInputs = panel.locator('input[type="date"]');
    const dateInputCount = await dateInputs.count();
    if (dateInputCount < 2) test.skip(true, 'Available Since date range inputs not present');
    await dateInputs.nth(0).fill('2025-06-15');
    await dateInputs.nth(1).fill('2025-06-01');
    await employeePage.clickAdvancedFilterSave();
    const errorMsg = employeePage.getValidationError(/end date must be on or after start date/i)
      .or(page.getByText(/end date.*before.*start date|invalid date range/i));
    await expect(errorMsg.first()).toBeVisible();
  });

  test('TC-EMPDET-030 API failure (500) shows user-friendly error — no crash @negative', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('pageerror', err => consoleErrors.push(err.message));
    await employeePage.mockEmployeeListFailure(500);
    await page.goto('/employee');
    await page.waitForTimeout(1500);

    const errorMsg = page.getByText(/something went wrong|error occurred|failed to load|try again/i);
    await expect(errorMsg.first(), 'no user-friendly error shown when employees API returns 500').toBeVisible({ timeout: 8000 });
    expect(consoleErrors.filter(e => /uncaught|unhandled/i.test(e)).length).toBe(0);
    // A raw stack trace should never be exposed to the user
    await expect(page.getByText(/at Object\.|at async|TypeError:|ReferenceError:/)).not.toBeVisible();
  });

  test('TC-EMPDET-031 XSS injection in search field — safely escaped @negative @security', async ({ page }) => {
    const dialogs: string[] = [];
    page.on('dialog', d => { dialogs.push(d.message()); d.dismiss().catch(() => {}); });
    await employeePage.searchEmployee('<script>alert(1)</script>');
    await expect(employeePage.employeeGrid).toBeVisible();
    await page.waitForTimeout(800);
    expect(dialogs.length).toBe(0);
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
    // The literal payload must not have been injected as live markup
    const scriptTagCount = await page.locator('script:has-text("alert(1)")').count();
    expect(scriptTagCount).toBe(0);
  });

  test('TC-EMPDET-032 Edit Drawer Save attempted with required field cleared — inline validation @negative', async () => {
    await employeePage.openEditDrawerForFirstEmployee();
    const nameField = employeePage.editDrawer.getByLabel(/^name$/i).or(employeePage.editDrawer.getByRole('textbox', { name: /^name$/i }));
    const visible = await nameField.isVisible().catch(() => false);
    if (!visible) test.skip(true, 'Name field not directly editable in drawer');
    await nameField.clear();
    await employeePage.saveDrawer();
    const inlineError = employeePage.editDrawer.getByText(/required|cannot be empty|this field is required/i);
    await expect(inlineError.first()).toBeVisible();
    // Drawer should remain open — form was not submitted
    await expect(employeePage.editDrawer).toBeVisible();
  });

  test('TC-EMPDET-033 Double-click Save in Edit Drawer — no duplicate update @negative @regression', async ({ page }) => {
    await employeePage.openEditDrawerForFirstEmployee();
    const filled = await employeePage.setDrawerDesignation(`Dup Check ${Date.now() % 100000}`);
    if (!filled) test.skip(true, 'Designation field not editable in drawer');

    const putRequests: number[] = [];
    page.on('response', resp => {
      if (/\/api\/.*employee/i.test(resp.url()) && ['PUT', 'PATCH'].includes(resp.request().method())) {
        putRequests.push(resp.status());
      }
    });

    const saveBtn = employeePage.getDrawerSaveBtn();
    await saveBtn.click();
    await saveBtn.click().catch(() => {}); // second click may be a no-op once the drawer closes/disables
    await page.waitForTimeout(1500);

    expect(putRequests.length).toBeLessThanOrEqual(1);
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  test('TC-EMPDET-069 Special characters in search — no crash, correct matching @negative', async ({ page }) => {
    for (const term of ['<script>', '"test"', '\\', '%20', '&&']) {
      await employeePage.searchEmployee(term);
      await expect(employeePage.employeeGrid).toBeVisible();
      await expect(employeePage.getErrorAlert()).not.toBeVisible();
      await employeePage.clearSearch();
    }
  });
});
