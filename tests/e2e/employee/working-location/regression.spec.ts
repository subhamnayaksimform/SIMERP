import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — regression: existing Employee list behaviour is unchanged (FRD v1.1 §3.2).
 */
test.describe('Employee — Working Location — Regression', () => {
  test('TC-EMPWLC-015 @regression Turning the column on does not change the employee count', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(false);
    const off = await wl.totalResults();
    try {
      await wl.setColumn(true);
      expect(await wl.totalResults()).toBe(off);
    } finally {
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-081 @regression Sorting by Name still works with the column visible', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await primaryPage.getByRole('columnheader', { name: /^Name/ }).getByRole('button', { name: /sort/i }).click();
      await expect(primaryPage).toHaveURL(/sortBy=name/);
      await wl.waitForPageLoad();
      const names = (await wl.rowNames(15)).map(n => n.toLowerCase());
      const sorted = [...names].sort((a, b) => a.localeCompare(b));
      expect(names.join('|') === sorted.join('|') || names.join('|') === [...sorted].reverse().join('|'), `rows not in name order: ${names.join(', ')}`).toBe(true);
    } finally {
      await wl.gotoEmployeeList();
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-075 @regression The Past Employee tab offers the Working Location column too', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await primaryPage.getByRole('tab', { name: 'Past Employee' }).click();
      await expect(wl.pageHeading('Past Employees')).toBeVisible();
      await primaryPage.locator('table tbody tr').first().waitFor();
      await wl.tableOptions.click();
      await expect(wl.columnSwitch, 'FRD §3.2: Past Employee tab column menu should offer Working Location').toBeVisible();
      await primaryPage.keyboard.press('Escape');
    } finally {
      await primaryPage.keyboard.press('Escape');
      // The app remembers the last tab, so switch back explicitly before restoring the column.
      await primaryPage.getByRole('tab', { name: 'Current Employee' }).click();
      await expect(wl.pageHeading('Employee Details')).toBeVisible();
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-076 @regression The column choice survives a page reload', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await primaryPage.reload();
      await wl.waitForPageLoad();
      await expect(wl.columnHeader).toBeVisible();
    } finally {
      await wl.setColumn(was);
    }
  });
});
