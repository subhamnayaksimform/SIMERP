// TC-UTLPRI-045..050 — cross-module pass. Utilization Priority renders a score but not the inputs
// that produce it, so every input is sourced from the module that owns it and reconciled here:
//   - Rating       ← Employee ▸ Advanced filter ▸ Overall Rating (a 1–10 range slider)
//   - Availability ← Employee ▸ "Availability %" column
//   - Designation  ← Employee ▸ Name cell
// This is also where FR-4/BR-5 is proven: Effective Availability is a fixed pre-calculated field
// and must not move when the Employee module's timesheet-duration selector changes.
import { test, expect, Page } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';
import { EmployeeDetailsPage } from '../../page-objects/employee/employee-details.page';
import { impliedRating, isValidRating, seniorityFor } from '../../fixtures/utilization-scoring';

/** Drag one end of the Overall Rating range slider onto an exact value using keyboard steps. */
async function setRatingSlider(page: Page, which: 'Minimum' | 'Maximum', target: number): Promise<number> {
  const handle = page.getByRole('slider', { name: which })
    .or(page.getByRole('slider').nth(which === 'Minimum' ? 0 : 1)).first();
  await handle.focus();
  const read = async () => parseFloat((await handle.getAttribute('aria-valuenow')) ?? '0');

  // Keyboard geometry confirmed live on SimERP 6.0.0 (2026-09-10): the slider spans 1–10 with an
  // Arrow step of 0.01 and a PageUp/PageDown stride of 0.10. An arrow-only walk therefore needs
  // ~900 presses to cross the range — the previous 150-press guard gave up at 2.5 when asked for
  // 9.9, which is what made TC-UTLPRI-045 fail. Cover the distance in 0.10 strides first, then
  // fine-tune with arrows, and bail out early if a bound stops the handle moving.
  const PAGE_STRIDE = 0.10;
  const ARROW_STEP = 0.01;

  let current = await read();
  const strides = Math.floor(Math.abs(target - current) / PAGE_STRIDE);
  const strideKey = target > current ? 'PageUp' : 'PageDown';
  for (let i = 0; i < strides; i++) await handle.press(strideKey);

  current = await read();
  for (let guard = 0; guard < 30; guard++) {
    if (Math.abs(current - target) < ARROW_STEP / 2) break;
    await handle.press(current < target ? 'ArrowRight' : 'ArrowLeft');
    const next = await read();
    if (next === current) break; // clamped by the other handle or the track bound
    current = next;
  }
  return current;
}

/** Apply an Overall Rating band on the Employee grid and return the people inside it. */
async function employeesRatedBetween(page: Page, low: number, high: number) {
  const employees = new EmployeeDetailsPage(page);
  await employees.navigateToEmployees();
  await employees.openAdvancedFilterPanel();
  await employees.expandAdvancedFilterSection(/Overall Rating/i);
  const gotLow = await setRatingSlider(page, 'Minimum', low);
  const gotHigh = await setRatingSlider(page, 'Maximum', high);
  await employees.clickAdvancedFilterSave();
  await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});

  const names = await page.locator('table tbody tr td:nth-child(2)').evaluateAll(cells =>
    cells.slice(0, 12).map(cell => {
      const buttons = Array.from(cell.querySelectorAll('button')).map(b => (b.textContent || '').trim()).filter(Boolean);
      return { name: buttons[buttons.length - 1] ?? '', cell: (cell.textContent || '').replace(/\s+/g, ' ').trim() };
    }));
  return { band: { low: gotLow, high: gotHigh }, names: names.filter(n => n.name) };
}

test.describe('Utilization Priority — Cross-module integration', () => {
  test('TC-UTLPRI-045 Ratings taken from the Employee module reproduce the Value Score on Utilization Priority', async ({ page }) => {
    const { band, names } = await employeesRatedBetween(page, 9.9, 10);
    expect(band.low).toBeCloseTo(9.9, 2);
    expect(band.high).toBeCloseTo(10, 2);
    test.skip(names.length === 0, 'No employee currently sits in the 9.9–10.0 rating band');

    const up = new UtilizationPriorityPage(page);
    await up.navigateClean();

    let reconciled = 0;
    const mismatches: string[] = [];
    for (const person of names.slice(0, 6)) {
      const row = await up.findEmployee(person.name);
      if (!row) continue;
      const seniority = seniorityFor(row.designation);
      if (seniority === null) continue;

      const rating = impliedRating(row.availability, row.valueScore, seniority);
      reconciled++;
      if (rating < band.low - 0.05 || rating > band.high + 0.05) {
        mismatches.push(
          `${person.name} (${row.designation}, S=${seniority}) is rated ${band.low}–${band.high} in the Employee module, ` +
          `but their Utilization Priority score of ${row.valueScore} at ${row.availability}% availability implies a rating of ${rating.toFixed(2)}`);
      }
    }
    expect(reconciled, 'none of the high-rated employees could be located on Utilization Priority').toBeGreaterThan(0);
    expect(mismatches, 'Employee-module rating and Utilization Priority score disagree').toEqual([]);
  });

  test('TC-UTLPRI-046 The same reconciliation holds at the bottom of the rating scale', async ({ page }) => {
    const { band, names } = await employeesRatedBetween(page, 1, 1.1);
    test.skip(names.length === 0, 'No employee currently sits in the 1.0–1.1 rating band');

    const up = new UtilizationPriorityPage(page);
    await up.navigateClean();

    const mismatches: string[] = [];
    let reconciled = 0;
    for (const person of names.slice(0, 6)) {
      const row = await up.findEmployee(person.name);
      if (!row) continue;
      const seniority = seniorityFor(row.designation);
      if (seniority === null) continue;
      const rating = impliedRating(row.availability, row.valueScore, seniority);
      reconciled++;
      if (rating < band.low - 0.05 || rating > band.high + 0.05) {
        mismatches.push(`${person.name}: Employee rating ${band.low}–${band.high} vs implied ${rating.toFixed(2)} from score ${row.valueScore}`);
      }
    }
    expect(reconciled).toBeGreaterThan(0);
    expect(mismatches, 'low-rated employees do not score as the model predicts').toEqual([]);
  });

  test('TC-UTLPRI-047 Availability and designation match the Employee module for the same person @regression', async ({ page }) => {
    const employees = new EmployeeDetailsPage(page);
    await employees.navigateToEmployees();
    const sample = await page.locator('table tbody tr').evaluateAll(rows => rows.slice(0, 5).map(tr => {
      const cells = Array.from(tr.querySelectorAll('td')).map(td => (td.textContent || '').replace(/\s+/g, ' ').trim());
      const buttons = Array.from(tr.querySelectorAll('td:nth-child(2) button')).map(b => (b.textContent || '').trim()).filter(Boolean);
      return { name: buttons[buttons.length - 1] ?? '', nameCell: cells[1] ?? '', availability: cells[6] ?? '' };
    }));
    const people = sample.filter(p => p.name && /%$/.test(p.availability));
    test.skip(people.length === 0, 'Employee grid did not expose an availability value to compare');

    const up = new UtilizationPriorityPage(page);
    await up.navigateClean();

    const mismatches: string[] = [];
    for (const person of people) {
      const row = await up.findEmployee(person.name);
      if (!row) continue;
      const employeeAvailability = parseFloat(person.availability.replace('%', ''));
      if (Math.abs(employeeAvailability - row.availability) > 0.01) {
        mismatches.push(`${person.name}: Employee module shows ${employeeAvailability}% but Utilization Priority shows ${row.availability}%`);
      }
      if (row.designation !== 'N/A' && !person.nameCell.includes(row.designation)) {
        mismatches.push(`${person.name}: designation "${row.designation}" on Utilization Priority is absent from the Employee module cell "${person.nameCell}"`);
      }
    }
    expect(mismatches, 'the two modules disagree about the same employee').toEqual([]);
  });

  test('TC-UTLPRI-048 FR-4/BR-5 — Effective Availability is fixed and ignores the Employee timesheet-duration filter', async ({ page }) => {
    const up = new UtilizationPriorityPage(page);
    await up.navigateClean();
    await up.sortBy(/Availability/); // ascending — pick someone who is NOT pinned at 0% or 100%
    const candidates = (await up.getRowData()).filter(r => r.availability > 0 && r.availability < 100);
    test.skip(candidates.length === 0, 'No employee with a partial availability value to observe');
    const subject = candidates[0];

    const employees = new EmployeeDetailsPage(page);
    await employees.navigateToEmployees();
    const timeRange = page.getByLabel('Select time range');
    test.skip(!(await timeRange.isVisible().catch(() => false)), 'Employee module exposes no timesheet-duration selector');
    // A Radix popper left open by an earlier hover can sit over this trigger and swallow the click.
    // Force-clicking does NOT help (the click still lands on whatever is on top) — dismiss the
    // overlay and wait for it to detach, then click normally.
    const allTime = page.getByRole('menuitem', { name: 'All time' })
      .or(page.getByRole('option', { name: 'All time' }))
      .or(page.getByText('All time', { exact: true })).first();
    for (let attempt = 0; attempt < 3 && !(await allTime.isVisible().catch(() => false)); attempt++) {
      await page.mouse.move(0, 0);
      await page.keyboard.press('Escape').catch(() => {});
      await page.locator('[data-radix-popper-content-wrapper]').first()
        .waitFor({ state: 'detached', timeout: 5_000 }).catch(() => {});
      await timeRange.click({ timeout: 10_000 }).catch(() => {});
    }
    await expect(allTime, 'the Employee timesheet-duration menu never opened').toBeVisible({ timeout: 8_000 });
    await allTime.click();
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
    await expect(page).toHaveURL(/timeFrame=all/);

    await up.navigate();
    const after = await up.findEmployee(subject.name);
    expect(after, `${subject.name} disappeared from Utilization Priority after the duration change`).not.toBeNull();
    expect(after!.availability,
      `${subject.name}'s Effective Availability moved from ${subject.availability}% to ${after!.availability}% when the ` +
      `Employee module's timesheet duration was switched to "All time" — BR-5 requires it to be a fixed pre-calculated field`,
    ).toBeCloseTo(subject.availability, 2);
    expect(after!.valueScore).toBeCloseTo(subject.valueScore, 2);
  });

  test('TC-UTLPRI-049 Every ranked person also exists in the Employee module', async ({ page }) => {
    const up = new UtilizationPriorityPage(page);
    await up.navigateClean();
    const ranked = (await up.getRowData()).slice(0, 5).map(r => r.name).filter(Boolean);
    test.skip(ranked.length === 0, 'No ranked people available');

    const employees = new EmployeeDetailsPage(page);
    await employees.navigateToEmployees();
    const missing: string[] = [];
    for (const name of ranked) {
      await employees.searchEmployee(name);
      await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
      const found = await page.locator('table tbody tr').filter({ hasText: name }).count();
      if (found === 0) missing.push(name);
    }
    expect(missing, 'people ranked on Utilization Priority who do not exist in the Employee module').toEqual([]);
  });

  test('TC-UTLPRI-050 The ranked population reconciles with the Employee module headcount', async ({ page }) => {
    const employees = new EmployeeDetailsPage(page);
    await employees.navigateToEmployees();
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
    const employeeCountText = await page.getByText(/^Showing \d+ - \d+ of \d+ results$/).first().innerText().catch(() => '');
    const employeeTotal = parseInt(employeeCountText.match(/of (\d+) results/)?.[1] ?? '0', 10);
    test.skip(employeeTotal === 0, 'Employee module did not report a total headcount');

    const up = new UtilizationPriorityPage(page);
    await up.navigateClean();
    const { total: rankedTotal } = await up.getResultsSummary();

    // Utilization Priority ranks the same current-employee population the Employee grid lists;
    // a small delta is acceptable (people with no allocation record yet), a large one is not.
    expect(Math.abs(rankedTotal - employeeTotal),
      `Employee module lists ${employeeTotal} people but Utilization Priority ranks ${rankedTotal}`,
    ).toBeLessThanOrEqual(Math.max(5, employeeTotal * 0.02));
  });
});
