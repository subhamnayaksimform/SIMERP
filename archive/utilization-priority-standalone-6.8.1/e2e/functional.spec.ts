// TC-UTLPRI-010..026 (021 retired) — functional pass: search, the per-column filter popovers (UP (System),
// UP (Manual), Department) individually and combined per FR-15, the KPI tiles acting as one-click
// filters, column sorting, the UP (Manual) write path (FR-12/FR-13) including persistence and
// clearing, pagination, and filter-chip removal.
import { test, expect } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';
import { UNDER_UTILIZED_THRESHOLD } from '../../fixtures/utilization-scoring';

test.describe('Utilization Priority — Functional', () => {
  let up: UtilizationPriorityPage;

  test.beforeEach(async ({ page }) => {
    up = new UtilizationPriorityPage(page);
  });

  test('TC-UTLPRI-010 Search by employee name narrows the list to matching people @functional', async () => {
    await up.navigateClean();
    const [firstRow] = await up.getRowData();
    test.skip(!firstRow?.name, 'No ranked people available to search for');

    await up.search(firstRow.name);
    const results = await up.getRowData();
    expect(results.length).toBeGreaterThan(0);
    expect(results.some(r => r.name === firstRow.name), 'the searched-for employee is missing from their own search results').toBe(true);
    const token = firstRow.name.split(' ')[0].toLowerCase();
    for (const row of results) {
      expect(row.name.toLowerCase(), `"${row.name}" does not match the search term "${token}"`).toContain(token);
    }
  });

  test('TC-UTLPRI-011 A search always returns a subset of the unfiltered population @functional', async () => {
    await up.navigateClean();
    const { total: unfiltered } = await up.getResultsSummary();
    await up.search('a');
    const { total: filtered } = await up.getResultsSummary();
    expect(filtered).toBeGreaterThan(0);
    expect(filtered).toBeLessThanOrEqual(unfiltered);
  });

  test('TC-UTLPRI-012 UP (System) column filter restricts the grid to the selected tier @functional', async () => {
    await up.navigateClean();
    await up.applyFilter('UP (System)', ['P2 · Amber']);
    const tiers = await up.getTierColumn();
    expect(tiers.length).toBeGreaterThan(0);
    for (const tier of tiers) expect(tier).toContain('P2');
  });

  test('TC-UTLPRI-013 UP (Manual) filter offers exactly the four documented values @functional', async () => {
    await up.navigateClean();
    const popover = await up.openFilter('UP (Manual)');
    const text = (await popover.innerText()).replace(/\s+/g, ' ');
    for (const value of ['P1 · Red', 'P2 · Amber', 'P3 · Green', 'Not set']) {
      expect(text, `UP (Manual) filter is missing the "${value}" option`).toContain(value);
    }
    await expect(popover.getByRole('button', { name: 'Save' })).toBeVisible();
    await expect(popover.getByRole('button', { name: 'Clear' })).toBeVisible();
  });

  test('TC-UTLPRI-014 BR-13 — filtering UP (Manual) to "Not set" returns only unassigned rows @functional', async () => {
    await up.navigateClean();
    await up.applyFilter('UP (Manual)', ['Not set']);
    const rows = await up.getRowData();
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      expect(row.upManual, `"${row.name}" has a manual priority but survived the "Not set" filter`).toBe('Not set');
    }
  });

  test('TC-UTLPRI-015 Department filter restricts the grid to the selected department @functional', async () => {
    await up.navigateClean();
    await up.applyFilter('Department', ['QA']);
    const departments = await up.getColumnValues(UtilizationPriorityPage.COL.department);
    expect(departments.length).toBeGreaterThan(0);
    for (const department of departments) expect(department).toBe('QA');
  });

  test('TC-UTLPRI-016 FR-15 — UP (System) and UP (Manual) filters combine rather than replace each other @functional', async () => {
    await up.navigateClean();
    await up.applyFilter('UP (System)', ['P1 · Red']);
    const { total: systemOnly } = await up.getResultsSummary();

    await up.applyFilter('UP (Manual)', ['Not set']);
    const { total: combined } = await up.getResultsSummary();
    expect(combined, 'adding a second filter widened the result set instead of narrowing it').toBeLessThanOrEqual(systemOnly);

    const rows = await up.getRowData();
    for (const row of rows) {
      expect(row.upSystemTier, `"${row.name}" escaped the UP (System) = P1 half of the combined filter`).toBe('P1');
      expect(row.upManual, `"${row.name}" escaped the UP (Manual) = Not set half of the combined filter`).toBe('Not set');
    }
  });

  test('TC-UTLPRI-017 KPI tile acts as a one-click UP (System) filter matching its own count @functional', async () => {
    await up.navigateClean();
    const tileCount = await up.getKpiCount(up.kpiP1);
    await up.clickKpi(up.kpiP1);
    const { total } = await up.getResultsSummary();
    expect(total, 'the P1 tile count and the P1-filtered result count disagree').toBe(tileCount);
    for (const tier of await up.getTierColumn()) expect(tier).toContain('P1');
  });

  test('TC-UTLPRI-018 FR-10 — the Under-Utilized tile filters to people at or above the 30% threshold @functional', async () => {
    await up.navigateClean();
    const tileCount = await up.getKpiCount(up.kpiUnderUtilized);
    await up.clickKpi(up.kpiUnderUtilized);
    const { total } = await up.getResultsSummary();
    expect(total).toBe(tileCount);

    const availabilities = await up.getAvailabilityNumbers();
    expect(availabilities.length).toBeGreaterThan(0);
    for (const availability of availabilities) {
      expect(availability,
        `an employee flagged under-utilized has only ${availability}% availability, below the ${UNDER_UTILIZED_THRESHOLD}% threshold`,
      ).toBeGreaterThanOrEqual(UNDER_UTILIZED_THRESHOLD);
    }
  });

  test('TC-UTLPRI-019 Sorting by Availability orders the column and toggles direction on a second click @functional', async () => {
    await up.navigateClean();
    await up.sortBy(/Availability/);
    const ascending = await up.getAvailabilityNumbers();
    expect(ascending.length).toBeGreaterThan(1);
    for (let i = 1; i < ascending.length; i++) {
      expect(ascending[i], 'ascending availability sort produced an out-of-order row').toBeGreaterThanOrEqual(ascending[i - 1]);
    }

    await up.sortBy(/Availability/);
    const descending = await up.getAvailabilityNumbers();
    for (let i = 1; i < descending.length; i++) {
      expect(descending[i], 'descending availability sort produced an out-of-order row').toBeLessThanOrEqual(descending[i - 1]);
    }
  });

  test('TC-UTLPRI-020 Sorting by UP (System) descending brings the P1 cohort to the top @functional', async () => {
    await up.navigateClean();
    await up.sortBy(/UP \(System\)/);
    await up.sortBy(/UP \(System\)/);
    const tiers = await up.getTierColumn();
    expect(tiers[0]).toContain('P1');
    const rank = (tier: string) => (tier.includes('P1') ? 1 : tier.includes('P2') ? 2 : 3);
    for (let i = 1; i < tiers.length; i++) {
      expect(rank(tiers[i]), 'UP (System) sort put a higher-priority tier below a lower-priority one').toBeGreaterThanOrEqual(rank(tiers[i - 1]));
    }
  });

  test('TC-UTLPRI-022 BR-10 — the UP (Manual) dropdown offers exactly Not set / P1 / P2 / P3 @functional', async () => {
    await up.navigateClean();
    const [firstRow] = await up.getRowData();
    test.skip(!firstRow?.name, 'No ranked people available');

    const options = await up.getManualPriorityOptions(firstRow.name);
    expect(options).toEqual(['Not set', 'P1 · Red', 'P2 · Amber', 'P3 · Green']);
  });

  // Rows 0-3 are claimed one-per-spec by the four tests that WRITE a manual priority
  // (TC-023 row 0, TC-024 row 1, TC-086 row 2, TC-093 row 3). The write persists server-side, so
  // sharing a row makes these specs clobber each other under parallel workers.
  test('TC-UTLPRI-023 FR-12 — setting UP (Manual) confirms with a toast and survives a reload @functional', async ({ page }) => {
    await up.navigateClean();
    const subject = await up.getEmployeeNameAt(0);
    const firstRow = { name: subject };

    try {
      // The toast auto-dismisses, and setManualPriority() waits for the combobox to settle first —
      // so start watching for the toast BEFORE the write, or the confirmation can be gone by the
      // time we look for it.
      const toast = up.getSuccessToast().or(page.getByText('Manual priority updated.')).first();
      const toastAppeared = toast.waitFor({ state: 'visible', timeout: 25_000 });
      await up.setManualPriority(firstRow.name, 'P2 · Amber');
      await toastAppeared;

      await up.navigate();
      await up.search(firstRow.name);
      expect(await up.getManualPriority(firstRow.name),
        'the manual priority did not survive a page reload',
      ).toBe('P2 · Amber');
    } finally {
      await up.setManualPriority(firstRow.name, 'Not set').catch(() => {});
    }
  });

  test('TC-UTLPRI-024 UP (Manual) can be cleared back to "Not set" by an authorized role @functional', async () => {
    await up.navigateClean();
    const subject = await up.getEmployeeNameAt(1);

    try {
      await up.setManualPriority(subject, 'P3 · Green');
      expect(await up.getManualPriority(subject)).toBe('P3 · Green');
      await up.setManualPriority(subject, 'Not set');
      expect(await up.getManualPriority(subject)).toBe('Not set');
    } finally {
      await up.setManualPriority(subject, 'Not set').catch(() => {});
    }
  });

  test('TC-UTLPRI-025 Pagination advances to a distinct page of people and updates the summary @functional', async () => {
    await up.navigateClean();
    const firstPage = await up.getResultsSummary();
    test.skip(firstPage.total <= firstPage.to, 'Only one page of results — nothing to paginate');
    const firstNames = (await up.getRowData()).map(r => r.name);

    await up.gotoPage(2);
    const secondPage = await up.getResultsSummary();
    expect(secondPage.from).toBe(firstPage.to + 1);
    expect(secondPage.total).toBe(firstPage.total);

    const secondNames = (await up.getRowData()).map(r => r.name);
    const overlap = secondNames.filter(n => firstNames.includes(n));
    expect(overlap, 'page 2 repeated people already shown on page 1').toHaveLength(0);
  });

  test('TC-UTLPRI-026 An applied filter renders a chip whose Clear control restores the full list @functional', async () => {
    await up.navigateClean();
    const { total: unfiltered } = await up.getResultsSummary();

    await up.applyFilter('UP (System)', ['P1 · Red']);
    await expect(up.getFilterChips().first()).toBeVisible();
    const { total: filtered } = await up.getResultsSummary();
    expect(filtered).toBeLessThan(unfiltered);

    await up.clearAllFilters();
    expect(await up.getFilterChips().count()).toBe(0);
    const { total: restored } = await up.getResultsSummary();
    expect(restored, 'clearing the filter chip did not restore the unfiltered population').toBe(unfiltered);
  });
});
