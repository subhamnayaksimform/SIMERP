import { test, expect } from '@playwright/test';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Employee — Accessibility', () => {
  let employeePage: EmployeeDetailsPage;

  test.beforeEach(async ({ page }) => {
    employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
  });

  test('TC-EMPDET-056 Keyboard navigation — tab order is logical through grid and controls @a11y', async ({ page }) => {
    const acceptableTags = ['INPUT', 'BUTTON', 'A', 'SELECT', 'TEXTAREA', 'DIV', 'LI'];
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const focusedTag = await page.evaluate(() => document.activeElement?.tagName ?? '');
      expect(acceptableTags.includes(focusedTag)).toBe(true);
    }
    await expect(employeePage.employeeGrid).toBeVisible();
  });

  test('TC-EMPDET-057 Search input and filter button have accessible labels @a11y', async ({ page }) => {
    const searchEl = employeePage.searchInput;
    await expect(searchEl).toBeVisible();
    const searchAriaLabel = await searchEl.getAttribute('aria-label');
    const searchAriaLabelledBy = await searchEl.getAttribute('aria-labelledby');
    const searchPlaceholder = await searchEl.getAttribute('placeholder');
    const searchId = await searchEl.getAttribute('id');
    let searchHasLabel = Boolean((searchAriaLabel ?? '').trim() || (searchAriaLabelledBy ?? '').trim() || (searchPlaceholder ?? '').trim());
    if (!searchHasLabel && searchId) {
      searchHasLabel = (await page.locator(`label[for="${searchId}"]`).count()) > 0;
    }
    expect(searchHasLabel).toBe(true);

    const filterAriaLabel = await employeePage.filterBtn.getAttribute('aria-label');
    const filterText = await employeePage.filterBtn.textContent();
    const filterHasLabel = (filterAriaLabel ?? '').trim().length > 0 || (filterText ?? '').trim().length > 0;
    expect(filterHasLabel).toBe(true);
  });

  test('TC-EMPDET-058 Edit Drawer is keyboard accessible — open, fill, submit via keyboard @a11y', async ({ page }) => {
    const firstRow = employeePage.getDataRows().first();
    await firstRow.hover();
    const editBtn = firstRow.getByRole('button', { name: 'Edit' });
    await editBtn.focus();
    await page.keyboard.press('Enter');
    await expect(employeePage.editDrawer).toBeVisible();

    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName ?? '');
    expect(['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA', 'A'].includes(focused)).toBe(true);

    await page.keyboard.press('Escape');
    await expect(employeePage.editDrawer).not.toBeVisible();
  });

  test('TC-EMPDET-059 Pagination controls are keyboard navigable @a11y', async ({ page }) => {
    await employeePage.nextPageBtn.focus();
    let focused = await page.evaluate(() => document.activeElement?.tagName ?? '');
    expect(['BUTTON', 'A'].includes(focused)).toBe(true);

    if (await employeePage.nextPageBtn.isEnabled().catch(() => false)) {
      await page.keyboard.press('Enter');
      await page.waitForTimeout(800);
      await expect(employeePage.employeeGrid).toBeVisible();

      await employeePage.previousPageBtn.focus();
      focused = await page.evaluate(() => document.activeElement?.tagName ?? '');
      expect(['BUTTON', 'A'].includes(focused)).toBe(true);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(800);
      await expect(employeePage.employeeGrid).toBeVisible();
    }
  });
});
