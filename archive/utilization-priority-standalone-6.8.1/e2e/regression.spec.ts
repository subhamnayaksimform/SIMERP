// TC-UTLPRI-086..096 — the FRD acceptance-criteria pass (FRD §11) plus the PMO screen spec (§12).
//
// Tests titled [FRD GAP] assert a requirement the current build does not meet. They are written to
// FAIL deliberately: each one is the executable record of a deviation found on 2026-09-04, and it
// will go green on its own once the gap is closed. They are not flaky and they are not skips.
import { test, expect } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';

test.describe('Utilization Priority — FRD regression', () => {
  let up: UtilizationPriorityPage;

  test.beforeEach(async ({ page }) => {
    up = new UtilizationPriorityPage(page);
  });

  test('TC-UTLPRI-086 FR-13/BR-14 — setting UP (Manual) leaves UP (System) and Value Score untouched', async () => {
    await up.navigateClean();
    // Row 2 is this spec's own write subject — see the row-claim note in functional.spec.ts.
    const rows = await up.getRowData();
    const subject = rows[2];
    test.skip(!subject?.name, 'No ranked people available');

    try {
      await up.setManualPriority(subject.name, 'P1 · Red');
      const after = await up.findEmployee(subject.name);
      expect(after, 'the employee vanished after their manual priority was set').not.toBeNull();
      expect(after!.upSystemTier, 'setting UP (Manual) changed the system-computed tier').toBe(subject.upSystemTier);
      expect(after!.valueScore, 'setting UP (Manual) changed the computed Value Score').toBeCloseTo(subject.valueScore, 2);
      expect(after!.availability).toBeCloseTo(subject.availability, 2);
      expect(after!.upManual).toContain('P1');
    } finally {
      await up.setManualPriority(subject.name, 'Not set').catch(() => {});
    }
  });

  test('TC-UTLPRI-087 §12.A — applied filters persist when the user leaves the tab and comes back', async ({ page }) => {
    await up.navigateClean();
    await up.applyFilter('UP (System)', ['P1 · Red']);
    const { total: filtered } = await up.getResultsSummary();

    await page.goto('/employee', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
    await up.navigate();

    expect(await up.getFilterChips().count(), 'the applied filter was dropped on returning to the tab').toBeGreaterThan(0);
    const { total: restored } = await up.getResultsSummary();
    expect(restored, 'the filtered population changed across the round trip').toBe(filtered);
    for (const tier of await up.getTierColumn()) expect(tier).toContain('P1');

    await up.clearAllFilters();
  });

  test('TC-UTLPRI-088 FR-16/BR-8 — both priorities render with the same P1/P2/P3 tier vocabulary and colour', async () => {
    await up.navigateClean();
    const rows = await up.getRowData();
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      expect(row.upSystemTier, `${row.name} has no system tier`).toMatch(/^P[123]$/);
      expect(row.upManual, `${row.name}'s manual priority "${row.upManual}" is outside the documented vocabulary`)
        .toMatch(/^(Not set|P1 · Red|P2 · Amber|P3 · Green)$/);
    }
    const tierCells = await up.getColumnValues(UtilizationPriorityPage.COL.upSystem);
    for (const cell of tierCells) {
      expect(cell, 'a system tier rendered without its documented colour name').toMatch(/P1 · Red|P2 · Amber|P3 · Green/);
    }
  });

  test('TC-UTLPRI-089 §11 — the P1/P2/P3 cohorts partition the population with no one left unranked', async () => {
    await up.navigateClean();
    const { total } = await up.getResultsSummary();
    const counts = await Promise.all([
      up.getKpiCount(up.kpiP1), up.getKpiCount(up.kpiP2), up.getKpiCount(up.kpiP3),
    ]);
    expect(counts.reduce((a, b) => a + b, 0), 'the three tiers do not partition the ranked population').toBe(total);
    for (const count of counts) expect(count).toBeGreaterThan(0);
  });

  test('TC-UTLPRI-090 [FRD GAP] §12.F — a Columns control must let the PMO show/hide Department and Experience Years', async ({ page }) => {
    await up.navigateClean();
    await expect(page.getByRole('button', { name: /^Columns$/i }),
      '§12.F specifies a Columns button at the top-right of the table, with Department and Experience Years ' +
      'toggleable on and the selection saved per user session. The build ships a fixed eight-column table with no ' +
      'column-visibility control at all.',
    ).toBeVisible({ timeout: 10_000 });
  });

  test('TC-UTLPRI-091 [FRD GAP] §12.D — the four default saved filter presets must be available', async ({ page }) => {
    await up.navigateClean();
    const presets = ['High Priority Free', 'Under-Utilized Only', 'Completely Free', 'Not Manually Reviewed'];
    const missing: string[] = [];
    for (const preset of presets) {
      if (await page.getByText(preset, { exact: true }).count() === 0) missing.push(preset);
    }
    expect(missing,
      '§12.D specifies four pre-built, undeletable system presets plus up to five user-saved ones, surfaced as ' +
      'quick-access chips above the filter bar. None of the preset machinery exists in the build.',
    ).toEqual([]);
  });

  test('TC-UTLPRI-092 [FRD GAP] §12.E.2 — clicking an employee row must open the detail side drawer', async ({ page }) => {
    await up.navigateClean();
    const [subject] = await up.getRowData();
    test.skip(!subject?.name, 'No ranked people available');

    await up.cell(0, UtilizationPriorityPage.COL.department).click();
    await expect(page.getByRole('dialog').or(page.getByRole('complementary')).filter({ hasText: subject.name }),
      '§12.E.2 specifies that clicking a row slides in a right-hand drawer showing the employee\'s tier, availability, ' +
      'value score, skills, current allocations, a "Raise Allocation Ticket" button and a "View Full Profile" link. ' +
      'Clicking a row in the build does nothing at all.',
    ).toBeVisible({ timeout: 10_000 });
  });

  test('TC-UTLPRI-093 [FRD GAP] FR-17/OI-10 — UP (Manual) must record who set it and when', async ({ page }) => {
    await up.navigateClean();
    // Row 3 is this spec's own write subject — see the row-claim note in functional.spec.ts.
    const subject = { name: await up.getEmployeeNameAt(3) };

    try {
      await up.setManualPriority(subject.name, 'P2 · Amber');
      await up.manualPriorityFor(subject.name).hover();
      await expect(page.getByRole('tooltip').or(page.getByText(/set by .+ on |updated by /i)),
        'FR-17 requires an audit trail for UP (Manual) and §12.E.1 requires hovering the tag to show the note text, ' +
        'who set it and when. The build persists the value but surfaces no attribution anywhere.',
      ).toBeVisible({ timeout: 8_000 });
    } finally {
      await up.setManualPriority(subject.name, 'Not set').catch(() => {});
    }
  });

  test('TC-UTLPRI-094 [FRD GAP] §12.E.4 — page size must default to 50 with a 25/50/100 Show selector', async ({ page }) => {
    await up.navigateClean();
    const { to, total } = await up.getResultsSummary();
    test.skip(total < 100, 'Fewer than 100 people ranked — §12.E.4 pagination rules do not apply');

    await expect(page.getByRole('button', { name: /^Show/i }).or(page.getByLabel(/rows per page|page size/i)),
      '§12.E.4 specifies a Show dropdown offering 25 / 50 / 100 rows once the post-filter population reaches 100. ' +
      'The build paginates at a fixed 100 rows per page with no size control.',
    ).toBeVisible({ timeout: 10_000 });
    expect(to, '§12.E.4 specifies a default page size of 50').toBe(50);
  });

  test.fixme('TC-UTLPRI-095 — MANUAL VERIFICATION REQUIRED: FR-1/FR-3/BR-1 weekly recomputation every Saturday 00:00 IST (a scheduled backend job produces no UI signal inside a test run; verify from the job scheduler and by comparing Value Score snapshots taken either side of a Saturday)', async () => {});

  test.fixme('TC-UTLPRI-096 — MANUAL VERIFICATION REQUIRED: FR-5/FR-6/FR-7/BR-3/BR-4 Effective Availability inputs — the two-week recent-allocation window, the Case 1 add-back of logs-utilization, and the Maternity Leave / On Notice adjustments are all upstream of anything the screen renders; verify against the calculation job with the FRD §4.3 worked example (70 + 30 − 50 = 50%)', async () => {});
});
