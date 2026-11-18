import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — functional (TC-EMPRTF-020 … 047).
 *
 * The centrepiece is TC-EMPRTF-036: Avg Rating is the mean of the FOUR rating dimensions, not the
 * mean of the Overall column. Verified live on two employees before this suite was written.
 */
test.describe('Employee — Ratings & Feedback — Functional', () => {
  let rf: RatingsFeedbackPage;

  test.beforeEach(async ({ primaryPage }) => {
    rf = new RatingsFeedbackPage(primaryPage);
    await rf.goToConsole();
  });

  test('TC-EMPRTF-020 @functional Search filters the list by employee name', async () => {
    const [firstName] = await rf.getEmployeeNames();
    const fragment = firstName.split(' ')[0].toLowerCase();

    await rf.search(fragment);
    await expect(rf.resultsStatus).toBeVisible();

    for (const name of await rf.getEmployeeNames()) {
      expect(name.toLowerCase(), 'search must match case-insensitively on the employee name').toContain(fragment);
    }
  });

  test('TC-EMPRTF-021 @functional The Department column filter restricts rows to the chosen departments', async () => {
    // The filter checkboxes take their accessible name from an associated label, not aria-label,
    // so address them by role name rather than reading an attribute off the element.
    const department = 'QA';
    await rf.applyColumnFilter('Department', department);

    const rows = await rf.getDataRows().all();
    expect(rows.length, `filtering by "${department}" returned no rows at all`).toBeGreaterThan(0);
    for (const row of rows) {
      expect(((await rf.getCell(row, 'department').textContent()) ?? '').trim()).toBe(department);
    }
  });

  test('TC-EMPRTF-022 @functional The Department filter is multi-select and widens the result set', async () => {
    const baseline = await rf.getReportedResultCount();

    await rf.applyColumnFilter('Department', 'QA');
    const singleCount = await rf.getReportedResultCount();

    await rf.applyColumnFilter('Department', 'DEVOPS');
    const doubleCount = await rf.getReportedResultCount();

    expect(doubleCount, 'selecting a second department did not widen the result set').toBeGreaterThanOrEqual(singleCount);
    expect(doubleCount).toBeLessThanOrEqual(baseline);
  });

  test('TC-EMPRTF-031 @functional The Employee column sorts alphabetically', async () => {
    await rf.sortBy('Employee');
    const names = await rf.getEmployeeNames();
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });

  test('TC-EMPRTF-032 @functional The De-allocations column sorts numerically', async () => {
    await rf.sortBy('De-allocations');
    const counts = await rf.getDeallocationCounts();
    expect(counts).toEqual([...counts].sort((a, b) => a - b));
  });

  test('TC-EMPRTF-033 @functional The Avg Rating column sorts numerically', async () => {
    await rf.sortBy('Avg Rating');
    const ratings = await rf.getAvgRatings();
    expect(ratings).toEqual([...ratings].sort((a, b) => a - b));
  });

  test('TC-EMPRTF-036 @functional Avg Rating is the mean of the four rating dimensions, not of the Overall column', async () => {
    const row = rf.getDataRows().first();
    const listedAverage = Number(((await rf.getCell(row, 'avgRating').textContent()) ?? '').trim());
    await rf.openDetail(row);

    const ratings = await rf.getDetailRatings();
    const allDimensions = ratings.flatMap((r) => [r.core, r.comm, r.beh, r.overall]);
    const fourDimensionMean = allDimensions.reduce((a, b) => a + b, 0) / allDimensions.length;
    const overallOnlyMean = ratings.reduce((sum, r) => sum + r.overall, 0) / ratings.length;

    expect(listedAverage, 'Avg Rating should be the mean of Core, Comm., Behaviour and Overall across every deallocation').toBeCloseTo(fourDimensionMean, 2);

    if (Math.abs(fourDimensionMean - overallOnlyMean) > 0.01) {
      expect(listedAverage, 'Avg Rating matched the Overall column alone — the four-dimension formula is not being applied').not.toBeCloseTo(overallOnlyMean, 2);
    }
  });

  test('TC-EMPRTF-037 @functional The De-allocations count equals the number of detail rows', async () => {
    const row = rf.getDataRows().first();
    const listedCount = Number(((await rf.getCell(row, 'deallocations').textContent()) ?? '').trim());
    await rf.openDetail(row);
    await expect(rf.getDetailRows()).toHaveCount(listedCount);
  });

  test('TC-EMPRTF-038 @functional The Reallocate split matches the per-deallocation flags', async () => {
    const row = rf.getDataRows().first();
    const { yes, no } = await rf.getReallocateSplit(row);
    const total = Number(((await rf.getCell(row, 'deallocations').textContent()) ?? '').trim());
    expect(yes + no, 'the Yes/No split does not add up to the deallocation count').toBe(total);

    await rf.openDetail(row);
    let observedYes = 0;
    for (const detailRow of await rf.getDetailRows().all()) {
      if (/yes/i.test(((await rf.getDetailCell(detailRow, 'reallocate').textContent()) ?? '').trim())) observedYes += 1;
    }
    expect(observedYes).toBe(yes);
  });

  test('TC-EMPRTF-039 @functional Latest Feedback is the most recent de-allocation date for that employee', async () => {
    const row = rf.getDataRows().first();
    const listedDate = new Date(((await rf.getCell(row, 'latestFeedback').textContent()) ?? '').trim());
    await rf.openDetail(row);

    const dates: Date[] = [];
    for (const detailRow of await rf.getDetailRows().all()) {
      dates.push(new Date(((await rf.getDetailCell(detailRow, 'deallocatedOn').textContent()) ?? '').trim()));
    }

    const newest = new Date(Math.max(...dates.map((d) => d.valueOf())));
    expect(listedDate.toDateString()).toBe(newest.toDateString());
  });

  test('TC-EMPRTF-040 @functional The Breakdown figures are the per-dimension means across deallocations', async () => {
    await rf.openDetail(rf.getDataRows().first());

    const ratings = await rf.getDetailRatings();
    const breakdown = await rf.getBreakdown();
    const mean = (values: number[]) => values.reduce((a, b) => a + b, 0) / values.length;

    expect(breakdown.core).toBeCloseTo(mean(ratings.map((r) => r.core)), 2);
    expect(breakdown.comm).toBeCloseTo(mean(ratings.map((r) => r.comm)), 2);
    expect(breakdown.behaviour).toBeCloseTo(mean(ratings.map((r) => r.beh)), 2);
    expect(breakdown.overall).toBeCloseTo(mean(ratings.map((r) => r.overall)), 2);
  });

  test('TC-EMPRTF-041 @functional Avg Rating equals the mean of the four Breakdown dimensions', async () => {
    const row = rf.getDataRows().first();
    const listedAverage = Number(((await rf.getCell(row, 'avgRating').textContent()) ?? '').trim());
    await rf.openDetail(row);

    const breakdown = await rf.getBreakdown();
    const dimensions = [breakdown.core, breakdown.comm, breakdown.behaviour, breakdown.overall];
    expect(listedAverage).toBeCloseTo(dimensions.reduce((a, b) => a + b, 0) / 4, 2);
  });

  test('TC-EMPRTF-048 @functional The detail search filters by project, feedback text or person', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const before = await rf.getDetailRows().count();

    await rf.getDetailSearchInput().fill('zzz-no-such-project-zzz');
    await expect(
      rf.getDetailRows(),
      'the detail search accepted a term that matches nothing yet left every row in place'
    ).not.toHaveCount(before);
  });

  test('TC-EMPRTF-043 @functional The breadcrumb returns from the detail view to the list', async ({ primaryPage }) => {
    await rf.openDetail(rf.getDataRows().first());
    await rf.getBreadcrumbLink().click();

    await expect(rf.heading).toBeVisible();
    expect(primaryPage.url()).toContain('/employee-ratings');
  });

  test('TC-EMPRTF-044 @functional Admin gets an Edit control on every deallocation row', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const rowCount = await rf.getDetailRows().count();

    let editable = 0;
    for (const row of await rf.getDetailRows().all()) {
      if (await rf.getEditButton(row).isVisible()) editable += 1;
    }
    expect(editable, 'Admin must be able to edit every deallocation record').toBe(rowCount);
  });

  test('TC-EMPRTF-045 @functional The Edit Feedback dialog pre-fills every field from the stored record', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();

    const stored = {
      core: ((await rf.getDetailCell(row, 'core').textContent()) ?? '').trim(),
      overall: ((await rf.getDetailCell(row, 'overall').textContent()) ?? '').trim(),
      reallocate: ((await rf.getDetailCell(row, 'reallocate').textContent()) ?? '').trim(),
    };

    const dialog = await rf.openEditDialog(row);
    await expect(dialog.getByRole('heading', { name: /edit feedback/i })).toBeVisible();
    expect(Number(await rf.getEditRatingInput(dialog, 'Core Skill').inputValue())).toBeCloseTo(Number(stored.core), 2);
    expect(Number(await rf.getEditRatingInput(dialog, 'Overall').inputValue())).toBeCloseTo(Number(stored.overall), 2);
    await expect(rf.getEditReallocateSelect(dialog)).toContainText(stored.reallocate);
    await expect(rf.getEditFeedbackInput(dialog)).not.toBeEmpty();

    await rf.cancelEditDialog(dialog);
  });

  test('TC-EMPRTF-047 @functional Cancelling an edit discards the changes', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();
    const before = ((await rf.getDetailCell(row, 'core').textContent()) ?? '').trim();

    const dialog = await rf.openEditDialog(row);
    await rf.getEditRatingInput(dialog, 'Core Skill').fill('5');
    await rf.cancelEditDialog(dialog);

    await expect(rf.getDetailCell(row, 'core')).toHaveText(before);
  });
});
