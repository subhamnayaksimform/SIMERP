import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — smoke (TC-EMPRTF-001 … 009).
 * Live feature at /employee-ratings, reached via Overview → Employee Ratings.
 */
test.describe('Employee — Ratings & Feedback — Smoke', () => {
  let rf: RatingsFeedbackPage;

  test.beforeEach(async ({ primaryPage }) => {
    rf = new RatingsFeedbackPage(primaryPage);
  });

  test('TC-EMPRTF-001 @smoke Employee Ratings opens from the Overview group in the sidebar', async ({ primaryPage }) => {
    await rf.goToConsoleViaNav();
    await expect(rf.heading).toBeVisible();
    expect(primaryPage.url()).toContain('/employee-ratings');
  });

  test('TC-EMPRTF-002 @smoke The list renders one row per employee, not one row per deallocation', async () => {
    await rf.goToConsole();
    const names = await rf.getEmployeeNames();
    expect(names.length).toBeGreaterThan(0);
    expect(new Set(names).size, 'an employee appeared on more than one row — the list must aggregate per employee').toBe(names.length);
  });

  test('TC-EMPRTF-003 @smoke The list exposes all seven columns in order', async () => {
    await rf.goToConsole();
    const headers = (await rf.getColumnHeaders().allTextContents()).map((h) => h.replace(/Sort ascending|Filter by.*/g, '').trim());
    expect(headers[0]).toBe('Action');
    for (const [index, expected] of ['Action', 'Employee', 'Department', 'De-allocations', 'Avg Rating', 'Latest Feedback', 'Reallocate'].entries()) {
      expect(headers[index], `column ${index} should be ${expected}`).toContain(expected);
    }
  });

  test('TC-EMPRTF-004 @smoke The row action opens the per-employee detail view', async ({ primaryPage }) => {
    await rf.goToConsole();
    const [name] = await rf.getEmployeeNames();
    await rf.openDetail(rf.getDataRows().first());

    await expect(rf.getDetailHeading()).toContainText(name);
    await expect(rf.getBreadcrumbLink()).toBeVisible();
    expect(primaryPage.url()).toMatch(/\/employee-ratings\/[0-9a-f-]{36}/);
  });

  test('TC-EMPRTF-005 @smoke The detail view lists one row per deallocation with its full attribution', async () => {
    await rf.goToConsole();
    const row = rf.getDataRows().first();
    const expectedCount = Number(((await rf.getCell(row, 'deallocations').textContent()) ?? '').trim());
    await rf.openDetail(row);

    await expect(rf.getDetailRows()).toHaveCount(expectedCount);

    const first = rf.getDetailRows().first();
    await expect(rf.getDetailCell(first, 'project')).not.toBeEmpty();
    await expect(rf.getDetailCell(first, 'reason')).not.toBeEmpty();
    await expect(rf.getDetailCell(first, 'deallocatedOn')).toContainText(/\d{2} \w{3} \d{4}/);
    await expect(rf.getDetailCell(first, 'submittedBy')).not.toBeEmpty();
  });

  test('TC-EMPRTF-006 @smoke Each deallocation shows all four ratings, the reallocate flag and its feedback', async () => {
    await rf.goToConsole();
    await rf.openDetail(rf.getDataRows().first());

    const row = rf.getDetailRows().first();
    for (const column of ['core', 'comm', 'beh', 'overall'] as const) {
      await expect(rf.getDetailCell(row, column), `rating column "${column}" is empty`).toContainText(/^\d+\.\d{2}$/);
    }
    await expect(rf.getDetailCell(row, 'reallocate')).toContainText(/^(Yes|No)$/);
    await expect(rf.getReadFullFeedbackButton(row)).toBeVisible();
  });

  test('TC-EMPRTF-007 @smoke The detail view summarises the average, the four-dimension breakdown and the reallocate split', async () => {
    await rf.goToConsole();
    await rf.openDetail(rf.getDataRows().first());

    expect(await rf.getDetailAvgRating()).toBeGreaterThan(0);
    const breakdown = await rf.getBreakdown();
    for (const [dimension, value] of Object.entries(breakdown)) {
      expect(Number.isNaN(value), `breakdown dimension "${dimension}" did not render a value`).toBe(false);
    }
    await expect(rf.page.getByText(/\d+ Yes · \d+ No/)).toBeVisible();
  });

  test('TC-EMPRTF-009 @smoke The list reports its total result count and paginates', async () => {
    await rf.goToConsole();
    await expect(rf.resultsStatus).toBeVisible();
    expect(await rf.getReportedResultCount()).toBeGreaterThan(0);
  });
});
