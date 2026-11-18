import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — boundary (TC-EMPRTF-110 … 118).
 * Ratings are Decimal(4,2) on a 1–10 scale and render to two decimal places throughout.
 */
test.describe('Employee — Ratings & Feedback — Boundary', () => {
  let rf: RatingsFeedbackPage;

  test.beforeEach(async ({ primaryPage }) => {
    rf = new RatingsFeedbackPage(primaryPage);
    await rf.goToConsole();
  });

  test('TC-EMPRTF-112 @boundary Every Avg Rating sits inside the 1–10 scale', async () => {
    for (const rating of await rf.getAvgRatings()) {
      expect(rating, `Avg Rating ${rating} falls outside the 1–10 scale`).toBeGreaterThanOrEqual(1);
      expect(rating).toBeLessThanOrEqual(10);
    }
  });

  test('TC-EMPRTF-113 @boundary Ratings render to two decimal places, not rounded to integers', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();
    for (const column of ['core', 'comm', 'beh', 'overall'] as const) {
      await expect(rf.getDetailCell(row, column), `${column} lost its decimal precision`).toHaveText(/^\d+\.\d{2}$/);
    }
  });

  test('TC-EMPRTF-115 @boundary An employee with a single deallocation shows exactly one detail row', async () => {
    await rf.sortBy('De-allocations');
    const row = rf.getDataRows().first();
    const count = Number(((await rf.getCell(row, 'deallocations').textContent()) ?? '').trim());
    test.skip(count !== 1, `lowest de-allocation count in the data is ${count}, not 1`);

    await rf.openDetail(row);
    await expect(rf.getDetailRows()).toHaveCount(1);
  });

  test('TC-EMPRTF-116 @boundary For a single deallocation, Avg Rating is that record four-dimension mean', async () => {
    await rf.sortBy('De-allocations');
    const row = rf.getDataRows().first();
    const count = Number(((await rf.getCell(row, 'deallocations').textContent()) ?? '').trim());
    test.skip(count !== 1, `lowest de-allocation count in the data is ${count}, not 1`);

    const listedAverage = Number(((await rf.getCell(row, 'avgRating').textContent()) ?? '').trim());
    await rf.openDetail(row);
    const [only] = await rf.getDetailRatings();
    expect(listedAverage).toBeCloseTo((only.core + only.comm + only.beh + only.overall) / 4, 2);
  });

  test('TC-EMPRTF-118 @boundary Every listed employee has at least one deallocation', async () => {
    for (const count of await rf.getDeallocationCounts()) {
      expect(count, 'an employee is listed with no deallocations — they should not appear at all').toBeGreaterThan(0);
    }
  });
});
