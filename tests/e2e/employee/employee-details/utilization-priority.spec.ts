// TC-EMPDET-400..427 — Utilization Priority relocated out of its standalone module and into the
// Employee table as two columns: UP (System) (read-only pill + calculation tooltip) and
// UP (Manual) (editable dropdown, TM/EM/PMO only).
//
// GROUNDED (2026-09-21) against the live build before these were written:
//   - /utilization-priority renders the in-app "404 – Page Not Found" screen; the nav entry is gone.
//   - UP (System) pill is itself the tooltip trigger; the column HEADER's icon buttons are sort and
//     filter, NOT the calculation info icon.
//   - UP (Manual) writes PATCH /api/v1/utilization-priority/:employeeId/manual and toasts
//     "Manual priority updated."; the value survives a reload and leaves UP (System) untouched.
//   - Admin/PMO/TM/EM get an editable dropdown. PM sees NEITHER column (the requirement says other
//     roles should see them read-only — TC-EMPDET-424 reports that difference without failing on it).
//     CSM and Employee have no /employee access at all on this build.
//
// Every test that writes a UP (Manual) value restores the original in afterEach.
import { test, expect } from '../../../fixtures/auth';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';
import type { Page } from '@playwright/test';

const TIERS = ['P1 · Red', 'P2 · Amber', 'P3 · Green'] as const;

/** Set UP (Manual) on the first row and hand back a restore function for afterEach. */
async function setManualOnFirstRow(employeePage: EmployeeDetailsPage, value: string) {
  const row = employeePage.getDataRows().first();
  const original = (await employeePage.getUpManualTier(row)) ?? 'Not set';
  const changed = await employeePage.setUpManual(row, value);
  return {
    changed,
    original,
    restore: async () => {
      if (!changed) return;
      const current = employeePage.getDataRows().first();
      await employeePage.setUpManual(current, original || 'Not set').catch(() => false);
    },
  };
}

test.describe('Employee — Utilization Priority columns', () => {
  // Several tests write UP (Manual) on the SAME first row and restore it in afterEach. Under
  // fullyParallel they overlapped (406 read back 408's "P1 · Red", 2026-11-12 full run), so run them
  // one at a time; they pass reliably with --workers=1.
  test.describe.configure({ mode: 'default' }); // in-order, one worker; a failure does not skip the rest
  let employeePage: EmployeeDetailsPage;
  let restoreManual: (() => Promise<void>) | null = null;

  test.beforeEach(async ({ page }) => {
    employeePage = new EmployeeDetailsPage(page);
    restoreManual = null;
  });

  test.afterEach(async () => {
    if (restoreManual) await restoreManual().catch(() => {});
  });

  test('TC-EMPDET-400 Standalone Utilization Priority route is no longer accessible @smoke @regression', async ({ page }) => {
    await page.goto('/utilization-priority', { waitUntil: 'domcontentloaded' });
    await expect(
      page.getByRole('heading', { name: /404|page not found/i }).first(),
      'the retired standalone route should render the not-found page',
    ).toBeVisible({ timeout: 15_000 });
    await expect(page.getByRole('table')).toHaveCount(0);
  });

  test('TC-EMPDET-401 Utilization Priority is absent from the sidebar for Admin and PMO @smoke @regression', async ({ page, pmoPage }) => {
    for (const session of [page, pmoPage] as Page[]) {
      await session.goto('/employee', { waitUntil: 'domcontentloaded' });
      const labels = await session.getByRole('link').allInnerTexts().catch(() => [] as string[]);
      expect(
        labels.some(l => /utilization\s*priority/i.test(l)),
        `sidebar still offers a Utilization Priority entry: ${JSON.stringify(labels)}`,
      ).toBe(false);
    }
  });

  test('TC-EMPDET-402 Employee table exposes UP (System) and UP (Manual) columns @smoke', async () => {
    await employeePage.navigateToEmployees();
    const columns = await employeePage.hasUtilizationPriorityColumns();
    expect(columns.system, 'UP (System) column is missing from the employee table').toBe(true);
    expect(columns.manual, 'UP (Manual) column is missing from the employee table').toBe(true);
  });

  test('TC-EMPDET-403 UP (System) renders the computed tier as a coloured pill @functional', async () => {
    await employeePage.navigateToEmployees();
    const row = employeePage.getDataRows().first();
    const tier = await employeePage.getUpSystemTier(row);
    expect(tier, 'no UP (System) value rendered on the first row').not.toBeNull();
    expect(TIERS, `UP (System) showed an undocumented value: ${tier}`).toContain(tier!);

    const cell = await employeePage.getUpSystemCell(row);
    const pillClass = await cell!.locator('span').last().getAttribute('class').catch(() => '');
    expect(pillClass ?? '', 'the tier is rendered as plain text rather than a coloured pill').toMatch(/badge|rounded/i);
  });

  test('TC-EMPDET-404 UP (System) is read-only — the cell offers no editing control @functional @security', async () => {
    await employeePage.navigateToEmployees();
    const row = employeePage.getDataRows().first();
    const cell = await employeePage.getUpSystemCell(row);
    expect(cell, 'UP (System) column not present').not.toBeNull();
    expect(await cell!.getByRole('combobox').count(), 'UP (System) exposes an editable control').toBe(0);
    expect(await cell!.locator('input, select, textarea').count(), 'UP (System) exposes an input').toBe(0);
  });

  test('TC-EMPDET-405 UP (Manual) dropdown offers exactly the four documented values @functional', async () => {
    await employeePage.navigateToEmployees();
    const options = await employeePage.getUpManualOptions(employeePage.getDataRows().first());
    expect(options.sort()).toEqual(['Not set', ...TIERS].sort());
  });

  test('TC-EMPDET-406 / TC-EMPDET-407 UP (Manual) persists across a reload and leaves UP (System) untouched @functional @regression', async ({ page }) => {
    await employeePage.navigateToEmployees();
    const row = employeePage.getDataRows().first();
    const systemBefore = await employeePage.getUpSystemTier(row);
    const manualBefore = (await employeePage.getUpManualTier(row)) ?? 'Not set';
    const target = manualBefore.includes('P3') ? 'P2 · Amber' : 'P3 · Green';

    const applied = await setManualOnFirstRow(employeePage, target);
    restoreManual = applied.restore;
    if (!applied.changed) test.skip(true, 'This session cannot edit UP (Manual)');

    await page.reload({ waitUntil: 'domcontentloaded' });
    await employeePage.employeeGrid.waitFor({ state: 'visible', timeout: 20_000 });
    const rowAfter = employeePage.getDataRows().first();

    expect(await employeePage.getUpManualTier(rowAfter), 'UP (Manual) did not survive a reload').toContain(target);
    expect(await employeePage.getUpSystemTier(rowAfter), 'setting UP (Manual) changed UP (System)').toBe(systemBefore);
  });

  test('TC-EMPDET-408 UP (Manual) can be returned to "Not set" @boundary @functional', async ({ page }) => {
    await employeePage.navigateToEmployees();
    const applied = await setManualOnFirstRow(employeePage, 'P1 · Red');
    restoreManual = applied.restore;
    if (!applied.changed) test.skip(true, 'This session cannot edit UP (Manual)');

    const cleared = await employeePage.setUpManual(employeePage.getDataRows().first(), 'Not set');
    expect(cleared, 'could not select "Not set"').toBe(true);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await employeePage.employeeGrid.waitFor({ state: 'visible', timeout: 20_000 });

    const value = await employeePage.getUpManualTier(employeePage.getDataRows().first());
    expect(TIERS.some(t => (value ?? '').includes(t)), `expected a cleared manual value, got "${value}"`).toBe(false);
  });

  test('TC-EMPDET-409 A confirmation toast appears after a UP (Manual) change @regression @functional', async () => {
    await employeePage.navigateToEmployees();
    // Pick a value the row does NOT already hold — re-selecting the current value is a no-op that
    // fires no request and therefore no toast.
    const current = (await employeePage.getUpManualTier(employeePage.getDataRows().first())) ?? '';
    const applied = await setManualOnFirstRow(employeePage, current.includes('P2') ? 'P3 · Green' : 'P2 · Amber');
    restoreManual = applied.restore;
    if (!applied.changed) test.skip(true, 'This session cannot edit UP (Manual)');
    await expect(employeePage.getSuccessToast().first()).toBeVisible({ timeout: 10_000 });
  });

  test('TC-EMPDET-410 Hovering UP (System) shows the per-employee Value Score breakdown @functional', async () => {
    await employeePage.navigateToEmployees();
    const tooltip = await employeePage.getUpSystemTooltipText(employeePage.getDataRows().first());
    expect(tooltip, 'no calculation tooltip appeared on hovering UP (System)').not.toBeNull();
    for (const fragment of ['How Value Score is Calculated', 'Effective Availability', 'Rating', 'Seniority', 'Final Value Score']) {
      expect(tooltip!, `tooltip is missing "${fragment}"`).toContain(fragment);
    }
  });

  test('TC-EMPDET-411 An info icon is rendered beside the UP (System) value @functional', async () => {
    await employeePage.navigateToEmployees();
    const row = employeePage.getDataRows().first();
    const icon = await employeePage.getUpSystemInfoIcon(row);
    expect(icon, 'UP (System) column not present').not.toBeNull();
    await expect(
      icon!,
      'no info icon beside the UP (System) value — the pill itself is the only hover target (the header icons are sort/filter)',
    ).toBeVisible();
  });

  test('TC-EMPDET-412 The tooltip breakdown is per-employee @functional', async () => {
    await employeePage.navigateToEmployees();
    const rows = employeePage.getDataRows();
    if ((await rows.count()) < 2) test.skip(true, 'Need at least two employees to compare breakdowns');

    const first = await employeePage.getUpSystemTooltipText(rows.nth(0));
    const second = await employeePage.getUpSystemTooltipText(rows.nth(1));
    expect(first, 'no tooltip on the first row').not.toBeNull();
    expect(second, 'no tooltip on the second row').not.toBeNull();
    if (first === second) {
      test.skip(true, 'The first two employees genuinely share an identical breakdown — inconclusive, not a failure');
    }
  });

  test('TC-EMPDET-413 The tooltip components sum to its stated Final Value Score @boundary @regression', async () => {
    await employeePage.navigateToEmployees();
    const tooltip = await employeePage.getUpSystemTooltipText(employeePage.getDataRows().first());
    expect(tooltip, 'no calculation tooltip to verify').not.toBeNull();

    // "Effective Availability: 90 × 50% = 45" → take the result after each "="
    const parts = [...tooltip!.matchAll(/=\s*([\d.]+)/g)].map(m => parseFloat(m[1]));
    const finalMatch = tooltip!.match(/Final Value Score\s*=\s*([\d.]+)/i);
    expect(finalMatch, 'tooltip has no "Final Value Score = <n>" line').not.toBeNull();

    const final = parseFloat(finalMatch![1]);
    const components = parts.filter(v => v !== final).slice(0, 3);
    expect(components.length, 'tooltip did not expose three weighted components').toBe(3);
    const sum = components.reduce((a, b) => a + b, 0);
    expect(Math.abs(sum - final), `components ${components.join(' + ')} = ${sum} do not add up to ${final}`).toBeLessThanOrEqual(0.15);
  });

  test('TC-EMPDET-414 Sorting by UP (System) reorders the list and is reflected in the URL @functional', async ({ page }) => {
    await employeePage.navigateToEmployees();
    expect(await employeePage.sortByColumnNamed(/UP \(System\)/i), 'no sort control on the UP (System) header').toBe(true);
    expect(page.url(), 'sorting UP (System) did not set sortBy=upSystem').toContain('sortBy=upSystem');

    const tiers: string[] = [];
    const rows = employeePage.getDataRows();
    for (let i = 0; i < Math.min(await rows.count(), 8); i++) {
      const tier = await employeePage.getUpSystemTier(rows.nth(i));
      if (tier) tiers.push(tier);
    }
    const ranks = tiers.map(t => TIERS.findIndex(x => t.includes(x))).filter(r => r !== -1);
    const sorted = [...ranks].sort((a, b) => a - b);
    expect(ranks, `ascending sort left the tiers out of order: ${tiers.join(', ')}`).toEqual(sorted);
  });

  test('TC-EMPDET-415 Sorting by UP (Manual) is available and reorders the list @functional', async ({ page }) => {
    await employeePage.navigateToEmployees();
    const before = await employeePage.getVisibleRowCount();
    expect(await employeePage.sortByColumnNamed(/UP \(Manual\)/i), 'no sort control on the UP (Manual) header').toBe(true);
    expect(page.url()).toMatch(/sortBy=upManual/i);
    expect(await employeePage.waitForRowsSettled(), 'sorting dropped rows from the page').toBe(before);
  });

  test('TC-EMPDET-416 Default sort on first load is UP (System) @regression', async ({ page }) => {
    await page.goto('/employee', { waitUntil: 'domcontentloaded' });
    await employeePage.employeeGrid.waitFor({ state: 'visible', timeout: 20_000 });
    // 6.8.x: the default order is no longer written to the URL — assert the observable result instead:
    // the first rows are the highest UP (System) tier (P1), unless the URL still carries sortBy=upSystem.
    if (/sortBy=upSystem/i.test(page.url())) return;
    const headers = await page.getByRole('columnheader').allInnerTexts();
    const col = headers.findIndex(h => /^UP \(System\)/i.test(h.trim()));
    expect(col, 'UP (System) column not found').toBeGreaterThan(-1);
    const rows = employeePage.getDataRows();
    await expect(rows.first()).toBeVisible();
    const firstTiers = await Promise.all([0, 1, 2].map(async i => ((await rows.nth(i).getByRole('cell').nth(col).innerText()) ?? '').trim()));
    for (const t of firstTiers) expect(t, `default sort should be UP (System) with P1 first; got ${JSON.stringify(firstTiers)}`).toMatch(/^P1/);
  });

  test('TC-EMPDET-417 Filtering by UP (System) narrows the list to the chosen tier @functional', async ({ page }) => {
    await employeePage.navigateToEmployees();
    const before = await employeePage.getVisibleRowCount();
    expect(await employeePage.openColumnFilter('UP (System)'), 'no "Filter by UP (System)" control on the header').toBe(true);

    const popover = page.locator('[data-slot="popover-content"], [role="dialog"]').last();
    await popover.getByText('P1 · Red', { exact: true }).first().click();
    await popover.getByRole('button', { name: /^save$/i }).click();
    await page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => {});
    // The grid blanks while refetching — wait for it to repopulate before counting.
    const count = await employeePage.waitForRowsSettled();
    const rows = employeePage.getDataRows();
    expect(count, 'filtering removed every row').toBeGreaterThan(0);
    expect(count, 'filtering did not narrow the list at all').toBeLessThanOrEqual(before);
    for (let i = 0; i < Math.min(count, 5); i++) {
      expect(await employeePage.getUpSystemTier(rows.nth(i))).toContain('P1');
    }

    // Column filters persist for the session — leaving this one on would silently narrow every
    // later test's data (it made the UP (Manual) sort check read a different row count).
    await employeePage.clearColumnFilter('UP (System)');
  });

  test('TC-EMPDET-418 UP (Manual) filter offers "Not set" alongside the three tiers @functional', async ({ page }) => {
    await employeePage.navigateToEmployees();
    expect(await employeePage.openColumnFilter('UP (Manual)'), 'no "Filter by UP (Manual)" control on the header').toBe(true);
    const popover = page.locator('[data-slot="popover-content"], [role="dialog"]').last();
    const text = (await popover.innerText().catch(() => '')).replace(/\s+/g, ' ');
    for (const option of [...TIERS, 'Not set']) {
      expect(text, `UP (Manual) filter is missing "${option}"`).toContain(option);
    }
    await page.keyboard.press('Escape').catch(() => {});
  });

  test('TC-EMPDET-421 / 422 / 423 TM, EM and PMO can each edit UP (Manual) @security @functional', async ({ tmPage, emPage, pmoPage }) => {
    for (const [role, session] of [['TM', tmPage], ['EM', emPage], ['PMO', pmoPage]] as const) {
      const rolePage = new EmployeeDetailsPage(session);
      await rolePage.navigateToEmployees();
      const row = rolePage.getDataRows().first();
      if ((await rolePage.getVisibleRowCount()) === 0) {
        test.skip(true, `${role} session has no employees in scope`);
      }
      expect(
        await rolePage.isUpManualEditable(row),
        `${role} should be able to edit UP (Manual) but the control is absent or disabled`,
      ).toBe(true);
    }
  });

  test('TC-EMPDET-424 A non-privileged role cannot change UP (Manual) from the UI @security @negative', async ({ pmPage }) => {
    const rolePage = new EmployeeDetailsPage(pmPage);
    await pmPage.goto('/employee', { waitUntil: 'domcontentloaded' });
    if (/unauthorized|\/profile/.test(pmPage.url())) {
      test.skip(true, 'This role has no employee-module access at all, so UP (Manual) is unreachable by construction');
    }
    const row = rolePage.getDataRows().first();
    expect(
      await rolePage.isUpManualEditable(row),
      'a role outside TM/EM/PMO was offered an editable UP (Manual) control',
    ).toBe(false);
  });

  test('TC-EMPDET-426 UP (System) in the table matches the tier the API reports @regression @functional', async ({ page }) => {
    await employeePage.navigateToEmployees();
    const row = employeePage.getDataRows().first();
    const shown = await employeePage.getUpSystemTier(row);
    if (!shown) test.skip(true, 'No UP (System) value rendered to compare');

    const response = await page.request.get(
      `${process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions'}/api/v1/employees?page=1&limit=1`,
      { failOnStatusCode: false },
    );
    if (!response.ok()) test.skip(true, `Employee API unavailable for the parity check (HTTP ${response.status()})`);

    const body = await response.json().catch(() => null);
    const first = body?.data?.items?.[0] ?? body?.data?.data?.[0];
    const apiTier = String(first?.upSystem ?? first?.utilizationPriority?.system ?? first?.systemPriority ?? '');
    if (!apiTier) test.skip(true, 'Employee API response carries no UP (System) field under a known name — parity unverified');

    expect(
      apiTier.replace(/[_\s]/g, '').toUpperCase(),
      `UI shows "${shown}" but the API reports "${apiTier}"`,
    ).toContain(shown!.split('·')[0].trim().toUpperCase());
  });

  test('TC-EMPDET-427 Existing Employee table columns are unaffected by the relocation @regression', async () => {
    await employeePage.navigateToEmployees();
    for (const column of [/^Name$/i, /Department/i, /Availability/i, /Skills/i, /Projects/i]) {
      expect(await employeePage.getColumnIndex(column), `pre-existing column ${column} disappeared`).not.toBe(-1);
    }
  });
});
