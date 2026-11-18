import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — regression (TC-EMPRTF-150 … 158).
 *
 * Guards the invariants that break quietly once aggregation is involved: NULL ratings must not be
 * counted as 0, a deallocation must not appear twice, and the list aggregates must stay consistent
 * with the rows they summarise.
 */
test.describe('Employee — Ratings & Feedback — Regression', () => {
  let rf: RatingsFeedbackPage;

  test.beforeEach(async ({ primaryPage }) => {
    rf = new RatingsFeedbackPage(primaryPage);
    await rf.goToConsole();
  });

  test('TC-EMPRTF-151 @regression A skipped rating is never counted as zero', async () => {
    for (const rating of await rf.getAvgRatings()) {
      expect(rating, 'an Avg Rating of 0 is impossible on a 1-10 scale — a NULL rating is being averaged as zero').toBeGreaterThan(0);
    }
  });

  test('TC-EMPRTF-152 @regression Every deallocation row carries a reason', async () => {
    await rf.openDetail(rf.getDataRows().first());
    for (const row of await rf.getDetailRows().all()) {
      await expect(rf.getDetailCell(row, 'reason'), 'a deallocation row rendered with no reason').not.toBeEmpty();
    }
  });

  test('TC-EMPRTF-155 @regression A deallocation is never listed twice for the same employee', async () => {
    await rf.openDetail(rf.getDataRows().first());

    const keys: string[] = [];
    for (const row of await rf.getDetailRows().all()) {
      const project = ((await rf.getDetailCell(row, 'project').textContent()) ?? '').trim();
      const date = ((await rf.getDetailCell(row, 'deallocatedOn').textContent()) ?? '').trim();
      keys.push(`${project}|${date}`);
    }
    expect(new Set(keys).size, 'the same project/date deallocation appeared more than once').toBe(keys.length);
  });

  test('TC-EMPRTF-157 @regression List aggregates stay consistent with the detail rows across several employees', async () => {
    const sampleSize = Math.min(3, await rf.getDataRows().count());

    for (let index = 0; index < sampleSize; index += 1) {
      await rf.goToConsole();
      const row = rf.getDataRows().nth(index);
      const listed = {
        count: Number(((await rf.getCell(row, 'deallocations').textContent()) ?? '').trim()),
        average: Number(((await rf.getCell(row, 'avgRating').textContent()) ?? '').trim()),
      };

      await rf.openDetail(row);
      const ratings = await rf.getDetailRatings();
      expect(ratings.length, `row ${index}: de-allocation count does not match the detail rows`).toBe(listed.count);

      const dimensions = ratings.flatMap((r) => [r.core, r.comm, r.beh, r.overall]);
      const mean = dimensions.reduce((a, b) => a + b, 0) / dimensions.length;
      expect(listed.average, `row ${index}: Avg Rating does not match the four-dimension mean`).toBeCloseTo(mean, 2);
    }
  });

  test('TC-EMPRTF-158 @regression Long feedback is reachable in full rather than silently truncated', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();

    // The control carries the complete feedback as its own text content — the cell is visually
    // clamped, but nothing is dropped from the DOM, so the full text stays reachable.
    const trigger = rf.getReadFullFeedbackButton(row);
    await expect(trigger).toBeVisible();

    const text = ((await trigger.textContent()) ?? '').trim();
    expect(text.length, 'the feedback control exposed no text at all').toBeGreaterThan(0);
    expect(text, 'the feedback text is truncated with an ellipsis rather than carried in full').not.toMatch(/\u2026$|\.\.\.$/);
  });
});
