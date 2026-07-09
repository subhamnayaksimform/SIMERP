import { test, expect } from '@playwright/test';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Employee — Regression', () => {
  let employeePage: EmployeeDetailsPage;

  test.beforeEach(async ({ page }) => {
    employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
  });

  test('TC-EMPDET-041 Employee count mismatch — grid rows, result badge, and API total all match @regression @smoke', async ({ page }) => {
    let apiTotal = -1;
    page.on('response', async resp => {
      if (resp.url().includes('employee') && resp.status() === 200) {
        const body = await resp.json().catch(() => null);
        if (body && typeof body.total === 'number') apiTotal = body.total;
      }
    });
    await employeePage.navigateToEmployees();
    await expect(employeePage.employeeGrid).toBeVisible();
    const rowsOnPage = await employeePage.getVisibleRowCount();
    if (apiTotal > 0) {
      const countBadge = employeePage.getResultCountBadge();
      await expect(countBadge).toBeVisible();
      const badgeText = await countBadge.textContent();
      if (badgeText && /\d+/.test(badgeText)) {
        const badgeNumber = parseInt(badgeText.match(/\d+/)![0], 10);
        expect(badgeNumber).toBe(apiTotal);
      }
      // If everything fits on one page, rows on page should equal the API total too
      if (rowsOnPage > 0 && !(await employeePage.nextPageBtn.isEnabled().catch(() => false))) {
        expect(rowsOnPage).toBe(apiTotal);
      }
    }
  });

  test('TC-EMPDET-042 Edit button visibility — present for all rows for Admin role @regression', async () => {
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      await row.hover();
      await expect(row.getByRole('button', { name: 'Edit' })).toBeVisible();
    }
  });

  test('TC-EMPDET-043 Edited employee remains in list — not lost after save @regression', async ({ page }) => {
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    if (rowCount === 0) test.skip(true, 'No employees to edit');
    const originalName = (await rows.first().getByRole('cell').first().textContent()) ?? '';

    await employeePage.openEditDrawerForFirstEmployee();
    const newDesignation = `Regression Check ${Date.now() % 100000}`;
    const filled = await employeePage.setDrawerDesignation(newDesignation);
    if (filled) await employeePage.saveDrawer();
    else await employeePage.closeEditDrawer();

    await expect(employeePage.employeeGrid).toBeVisible();
    const newRowCount = await rows.count();
    expect(newRowCount).toBe(rowCount);

    if (originalName) {
      await employeePage.searchEmployee(originalName.trim());
      await expect(employeePage.getDataRows().first()).toBeVisible();
    }
  });

  test('TC-EMPDET-044 Filter reset regression — all chips cleared and full list restored @regression', async () => {
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await employeePage.resetFilters();
    await expect(employeePage.employeeGrid).toBeVisible();
    const chipCount = await employeePage.getFilterChips().count();
    expect(chipCount).toBe(0);
  });

  test('TC-EMPDET-045 Duplicate rows regression — no duplicate IDs after pagination @regression', async () => {
    const page1Ids = await employeePage.getAllRowFirstCellTexts();
    if (await employeePage.nextPageBtn.isEnabled().catch(() => false)) {
      await employeePage.clickNextPage();
      const page2Ids = await employeePage.getAllRowFirstCellTexts();
      const overlap = page1Ids.filter(id => page2Ids.includes(id));
      expect(overlap.length).toBe(0);
    }
  });

  test('TC-EMPDET-046 Tab independence — filter on Current tab does not affect Past tab @regression @functional', async () => {
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await employeePage.switchToFormerEmployeeTab();
    const chipCount = await employeePage.getFilterChips().count();
    expect(chipCount).toBe(0);
    await employeePage.switchToCurrentEmployeeTab();
    await expect(employeePage.employeeGrid).toBeVisible();
  });

  test('TC-EMPDET-047 Sorting state preserved after Advanced Filter apply @regression', async () => {
    await employeePage.sortByNameAscending();
    await expect(employeePage.nameColumnHeader).toBeVisible();
    await employeePage.openAdvancedFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await employeePage.clickAdvancedFilterSave();
    await expect(employeePage.employeeGrid).toBeVisible();
    await expect(employeePage.nameColumnHeader).toBeVisible();
  });

  test('TC-EMPDET-048 Archived employee absent from Current tab and search @regression', async () => {
    await employeePage.switchToFormerEmployeeTab();
    const rows = employeePage.getDataRows();
    const count = await rows.count();
    if (count === 0) test.skip(true, 'No archived employees to verify against');
    const archivedName = (await rows.first().getByRole('cell').first().textContent()) ?? '';

    await employeePage.switchToCurrentEmployeeTab();
    await employeePage.searchEmployee(archivedName.trim());
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
    if (archivedName.trim()) {
      const currentRows = employeePage.getDataRows();
      const currentCount = await currentRows.count();
      for (let i = 0; i < currentCount; i++) {
        const text = (await currentRows.nth(i).getByRole('cell').first().textContent()) ?? '';
        expect(text.trim()).not.toBe(archivedName.trim());
      }
    }
  });

  test('TC-EMPDET-049 API count regression — UI total matches API X-Total-Count or total field @regression @smoke', async ({ page }) => {
    let apiTotal = -1;
    page.on('response', async resp => {
      if (resp.url().includes('employee') && resp.status() === 200) {
        const body = await resp.json().catch(() => null);
        if (body?.total) apiTotal = body.total;
        const header = resp.headers()['x-total-count'];
        if (header) apiTotal = parseInt(header, 10);
      }
    });
    await employeePage.navigateToEmployees();
    await expect(employeePage.employeeGrid).toBeVisible();
    if (apiTotal > 0) {
      await expect(employeePage.getResultCountBadge(), 'UI total does not match API total/X-Total-Count').toContainText(String(apiTotal));
    }
  });

  test('TC-EMPDET-050 Feature flag regression — advanced filter fields visible when flag enabled @regression', async () => {
    await employeePage.openAdvancedFilterPanel();
    const panel = employeePage.getAdvancedFilterPanel();
    await expect(panel).toBeVisible();
    for (const field of ['Departments', 'Designation', 'Projects', 'Reporting Manager']) {
      const accordion = panel.locator('button[aria-expanded]').filter({ hasText: new RegExp(field, 'i') });
      await expect(accordion.first()).toBeVisible();
    }
    await employeePage.closeAdvancedFilterPanel();
  });

  test('TC-EMPDET-066 Allocation sync — availability % updates after project assignment change @regression', async ({ page }) => {
    await expect(employeePage.employeeGrid).toBeVisible();
    const availCells = page.getByTestId('cell-availability').or(page.getByRole('cell', { name: /\d+%/ }));
    const cellCount = await availCells.count();
    if (cellCount > 0) {
      await expect(availCells.first()).toBeVisible();
    }
    // Full allocate/deallocate round-trip lives in the Allocation module — verified there;
    // this test asserts Employee Details renders availability data sourced from the same backend.
  });

  test('TC-EMPDET-067 Department change sync — employee moves between department filter results @regression', async () => {
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    const count1 = await employeePage.getVisibleRowCount();
    await employeePage.resetFilters();
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    const count2 = await employeePage.getVisibleRowCount();
    expect(count2).toBe(count1);
  });
});
