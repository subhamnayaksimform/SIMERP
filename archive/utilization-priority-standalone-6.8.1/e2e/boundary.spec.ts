// TC-UTLPRI-065..072 — boundary pass: the numeric ranges the screen renders, the exact tier
// cut-offs at 70 and 40, the 30% under-utilized edge, the Availability/Value Score filter extents,
// and the first/last page pagination edges.
import { test, expect } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';
import { TIER_THRESHOLDS, UNDER_UTILIZED_THRESHOLD, classifyTier } from '../../fixtures/utilization-scoring';

test.describe('Utilization Priority — Boundaries', () => {
  let up: UtilizationPriorityPage;

  test.beforeEach(async ({ page }) => {
    up = new UtilizationPriorityPage(page);
  });

  test('TC-UTLPRI-065 Availability is always rendered within 0–100% inclusive @boundary', async () => {
    await up.navigateClean();
    for (const sort of [1, 2]) {
      await up.sortBy(/Availability/); // 1st click ascending (floor), 2nd descending (ceiling)
      const values = await up.getAvailabilityNumbers();
      expect(values.length, `no availability values on sort pass ${sort}`).toBeGreaterThan(0);
      for (const value of values) {
        expect(Number.isNaN(value), 'an availability cell did not parse as a number').toBe(false);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(100);
      }
    }
  });

  test('TC-UTLPRI-066 Value Score is always rendered within 0–100 inclusive @boundary', async () => {
    await up.navigateClean();
    // The Value Score column ships no sort control, so the extremes are reached through the
    // tier cohorts: the grid is ordered by ascending Value Score, so page 1 of P3 holds the global
    // floor and the last page of P1 holds the global ceiling.
    await up.clickKpi(up.kpiP3);
    const floorPage = await up.getValueScoreNumbers();
    await up.clearAllFilters();
    await up.clickKpi(up.kpiP1);
    await up.gotoLastPage();
    const ceilingPage = await up.getValueScoreNumbers();

    const values = [...floorPage, ...ceilingPage];
    expect(values.length).toBeGreaterThan(0);
    for (const value of values) {
      expect(Number.isNaN(value), 'a Value Score cell did not parse as a number').toBe(false);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(100);
    }
    expect(Math.min(...floorPage), 'the lowest score in the whole ranking is negative').toBeGreaterThanOrEqual(0);
    expect(Math.max(...ceilingPage), 'the highest score in the whole ranking exceeds the 100-point scale').toBeLessThanOrEqual(100);
  });

  test('TC-UTLPRI-067 §5.3 — the lowest-scoring P1 sits at exactly 70, the boundary value @boundary', async () => {
    await up.navigateClean();
    await up.clickKpi(up.kpiP1); // page 1 of a cohort is its floor — the grid orders by ascending score
    const scores = await up.getValueScoreNumbers();
    expect(scores.length).toBeGreaterThan(0);
    const floor = Math.min(...scores);
    expect(floor, `the P1 cohort dips to ${floor}, below the ${TIER_THRESHOLDS.p1} cut-off`).toBeGreaterThanOrEqual(TIER_THRESHOLDS.p1);
    expect(floor, `nobody sits on the ${TIER_THRESHOLDS.p1} boundary itself, so P1 inclusivity is unproven`)
      .toBeLessThan(TIER_THRESHOLDS.p1 + 1);
    expect(classifyTier(floor)).toBe('P1');
  });

  test('TC-UTLPRI-068 §5.3 — the P2 cohort spans exactly [40, 70) at both of its edges @boundary', async () => {
    await up.navigateClean();
    await up.clickKpi(up.kpiP2);
    const firstPage = await up.getValueScoreNumbers();
    expect(firstPage.length).toBeGreaterThan(0);
    const floor = Math.min(...firstPage);
    expect(floor, `the P2 cohort dips to ${floor}, below its ${TIER_THRESHOLDS.p2} floor`).toBeGreaterThanOrEqual(TIER_THRESHOLDS.p2);
    expect(floor, `nobody sits on the ${TIER_THRESHOLDS.p2} boundary itself, so P2 inclusivity is unproven`)
      .toBeLessThan(TIER_THRESHOLDS.p2 + 1);
    expect(classifyTier(floor)).toBe('P2');

    await up.gotoLastPage();
    const lastPage = await up.getValueScoreNumbers();
    const ceiling = Math.max(...lastPage);
    expect(ceiling, `the P2 cohort reaches ${ceiling}, which belongs to P1`).toBeLessThan(TIER_THRESHOLDS.p1);
    expect(classifyTier(ceiling)).toBe('P2');
  });

  test('TC-UTLPRI-069 §5.4 — an employee at exactly the 30% threshold is included in the under-utilized cohort @boundary', async () => {
    await up.navigateClean();
    await up.clickKpi(up.kpiUnderUtilized);
    await up.sortBy(/Availability/); // ascending — the floor of the flagged cohort
    const values = await up.getAvailabilityNumbers();
    expect(values.length).toBeGreaterThan(0);
    const floor = Math.min(...values);
    expect(floor, `the flagged cohort starts at ${floor}%, not the documented ${UNDER_UTILIZED_THRESHOLD}%`)
      .toBeGreaterThanOrEqual(UNDER_UTILIZED_THRESHOLD);
    expect(floor, `nobody sits on the ${UNDER_UTILIZED_THRESHOLD}% boundary itself, so inclusivity is unproven`)
      .toBeLessThan(UNDER_UTILIZED_THRESHOLD + 1);
  });

  test('TC-UTLPRI-070 The Availability filter spans the full 0–100 range @boundary', async () => {
    await up.navigateClean();
    const popover = await up.openFilter('Availability');
    const text = (await popover.innerText()).replace(/\s+/g, ' ');
    expect(text, 'the availability filter does not offer the full 0–100 range').toMatch(/\b0\b[\s\S]*\b100\b/);
    const sliders = popover.getByRole('slider');
    if (await sliders.count() > 0) {
      await expect(sliders.first()).toHaveAttribute('aria-valuemin', '0');
      await expect(sliders.last()).toHaveAttribute('aria-valuemax', '100');
    }
  });

  test('TC-UTLPRI-071 The Value Score filter spans the documented 0–100 composite range @boundary', async () => {
    await up.navigateClean();
    const popover = await up.openFilter('Value Score');
    const text = (await popover.innerText()).replace(/\s+/g, ' ');
    expect(text, 'the Value Score filter range does not match the 0–100 composite scale').toMatch(/\b0\b[\s\S]*\b100\b/);
    await expect(up.valueScoreInfoIcon, 'the Value Score column does not document what the score is')
      .toHaveAttribute('aria-label', /Composite 0-100 score/);
  });

  test('TC-UTLPRI-072 Pagination disables Previous on the first page and Next on the last @boundary', async () => {
    await up.navigateClean();
    await expect(up.previousPageBtn, 'Previous is enabled on page 1').toBeDisabled();

    const { total, to } = await up.getResultsSummary();
    test.skip(total <= to, 'Only one page of results — no last-page edge to check');
    const pageSize = to;
    const lastPage = Math.ceil(total / pageSize);

    await up.gotoPage(lastPage);
    await expect(up.nextPageBtn, 'Next is still enabled on the final page').toBeDisabled();
    const last = await up.getResultsSummary();
    expect(last.to).toBe(total);
    await expect(up.previousPageBtn).toBeEnabled();
  });
});
