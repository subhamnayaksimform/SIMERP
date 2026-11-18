// TC-UTLPRI-030..041 — the calculation pass. Every assertion here works against
// tests/fixtures/utilization-scoring.ts, which encodes FRD §5's composite score, tier thresholds
// and under-utilized cut-off, plus the rating-null fallback added on 2026-09-04.
//
// The screen renders the inputs (Availability, designation → Seniority) and the output (Value
// Score) but not the Rating, so the score is verified by INVERSION: recover the rating the app must
// have used and assert it lands on the real 1–10 / 0.1-step scale confirmed on the Employee
// module's Overall Rating filter. A weight drift, a threshold change or a bad seniority band all
// push the recovered rating off that grid, so the check is tight rather than tautological.
import { test, expect } from '@playwright/test';
import { UtilizationPriorityPage, UtilizationRow } from '../../page-objects/utilization-priority/utilization-priority.page';
import {
  NULL_INPUT_CONTRIBUTION, RATING_SCALE, TIER_THRESHOLDS, UNDER_UTILIZED_THRESHOLD, WEIGHTS,
  classifyTier, computeScoreFromRawRating, impliedRating, isValidRating,
  ratingIsMissing, seniorityFor,
} from '../../fixtures/utilization-scoring';

/** Rows whose designation maps to a known seniority band — the only ones the model can score. */
function scorable(rows: UtilizationRow[]): Array<UtilizationRow & { seniority: number }> {
  return rows.flatMap(row => {
    const seniority = seniorityFor(row.designation);
    return seniority === null || Number.isNaN(row.availability) || Number.isNaN(row.valueScore)
      ? [] : [{ ...row, seniority }];
  });
}

test.describe('Utilization Priority — Calculations', () => {
  let up: UtilizationPriorityPage;

  test.beforeEach(async ({ page }) => {
    up = new UtilizationPriorityPage(page);
  });

  test('TC-UTLPRI-030 FR-8/§5.2 — Value Score = 0.50×Availability + 0.30×Rating + 0.20×Seniority for every ranked row @functional', async () => {
    await up.navigateClean();
    const rows = scorable(await up.getRowData());
    expect(rows.length, 'no rows with a recognised designation were available to score').toBeGreaterThan(10);

    const offModel = rows.filter(r =>
      !isValidRating(impliedRating(r.availability, r.valueScore, r.seniority))
      && !ratingIsMissing(r.availability, r.valueScore, r.seniority));

    expect(offModel.map(r =>
      `${r.name} (${r.designation}, S=${r.seniority}): availability ${r.availability}%, score ${r.valueScore} ` +
      `→ implied rating ${impliedRating(r.availability, r.valueScore, r.seniority).toFixed(3)} is off the 1–10 scale`,
    ), 'rows whose Value Score cannot be produced by the documented weights').toEqual([]);
  });

  test('TC-UTLPRI-031 §5.3 — every P1 · Red row scores at or above 70 @boundary', async () => {
    await up.navigateClean();
    await up.clickKpi(up.kpiP1);
    const scores = await up.getValueScoreNumbers();
    expect(scores.length).toBeGreaterThan(0);
    for (const score of scores) {
      expect(score, `a P1 row scores ${score}, below the ${TIER_THRESHOLDS.p1} cut-off`).toBeGreaterThanOrEqual(TIER_THRESHOLDS.p1);
    }
  });

  test('TC-UTLPRI-032 §5.3 — every P2 · Amber row scores in [40, 70) @boundary', async () => {
    await up.navigateClean();
    await up.clickKpi(up.kpiP2);
    const scores = await up.getValueScoreNumbers();
    expect(scores.length).toBeGreaterThan(0);
    for (const score of scores) {
      expect(score, `a P2 row scores ${score}, below the ${TIER_THRESHOLDS.p2} floor`).toBeGreaterThanOrEqual(TIER_THRESHOLDS.p2);
      expect(score, `a P2 row scores ${score}, at or above the P1 cut-off`).toBeLessThan(TIER_THRESHOLDS.p1);
    }
  });

  test('TC-UTLPRI-033 §5.3 — every P3 · Green row scores below 40 @boundary', async () => {
    await up.navigateClean();
    await up.clickKpi(up.kpiP3);
    const scores = await up.getValueScoreNumbers();
    expect(scores.length).toBeGreaterThan(0);
    for (const score of scores) {
      expect(score, `a P3 row scores ${score}, at or above the ${TIER_THRESHOLDS.p2} cut-off`).toBeLessThan(TIER_THRESHOLDS.p2);
    }
  });

  test('TC-UTLPRI-034 FR-9 — the rendered tier always matches the tier its own Value Score implies @functional', async () => {
    await up.navigateClean();
    const rows = await up.getRowData();
    expect(rows.length).toBeGreaterThan(0);
    const misclassified = rows
      .filter(r => !Number.isNaN(r.valueScore) && classifyTier(r.valueScore) !== r.upSystemTier)
      .map(r => `${r.name}: score ${r.valueScore} implies ${classifyTier(r.valueScore)} but renders ${r.upSystemTier}`);
    expect(misclassified, 'rows whose displayed tier contradicts their own score').toEqual([]);
  });

  test('TC-UTLPRI-035 §5.1/BR-9 — seniority bands are 33/67/100 and no other value fits the data', async () => {
    await up.navigateClean();
    const rows = await up.getRowData();
    const byDesignation = new Map<string, UtilizationRow[]>();
    for (const row of rows) {
      if (Number.isNaN(row.valueScore)) continue;
      byDesignation.set(row.designation, [...(byDesignation.get(row.designation) ?? []), row]);
    }

    const checked: string[] = [];
    for (const [designation, group] of byDesignation) {
      const documented = seniorityFor(designation);
      if (documented === null || group.length < 2) continue;

      const fits = [0, 33, 50, 67, 100].filter(candidate =>
        group.every(r => isValidRating(impliedRating(r.availability, r.valueScore, candidate))
          || ratingIsMissing(r.availability, r.valueScore, candidate)));

      expect(fits, `no seniority value in {0,33,50,67,100} explains the "${designation}" rows`).not.toEqual([]);
      expect(fits, `"${designation}" (n=${group.length}) scores are inconsistent with its documented seniority of ${documented}`).toContain(documented);
      checked.push(designation);
    }
    expect(checked.length, 'not enough designation groups on this page to verify the seniority banding').toBeGreaterThan(2);
  });

  test('TC-UTLPRI-036 §5.4/OI-3 — the under-utilized flag is raised at exactly 30% availability and not below @boundary', async () => {
    await up.navigateClean();
    const unflagged = await up.getAvailabilityNumbers();
    expect(unflagged.some(a => a < UNDER_UTILIZED_THRESHOLD),
      'the unfiltered page has nobody below the threshold, so the flag cannot be shown to discriminate',
    ).toBe(true);

    await up.clickKpi(up.kpiUnderUtilized);
    const flagged = await up.getAvailabilityNumbers();
    expect(flagged.length).toBeGreaterThan(0);
    expect(Math.min(...flagged),
      `the under-utilized cohort reaches down to ${Math.min(...flagged)}%, not the documented ${UNDER_UTILIZED_THRESHOLD}%`,
    ).toBeGreaterThanOrEqual(UNDER_UTILIZED_THRESHOLD);

    await expect(up.underUtilizedInfoIcon,
      'the under-utilized tile does not explain its threshold',
    ).toHaveAttribute('aria-label', new RegExp(`${UNDER_UTILIZED_THRESHOLD}% or more`));
  });

  test('TC-UTLPRI-037 §5.5 — the FRD worked example reproduces exactly, and a live Lead Engineer row obeys the same model @functional', async () => {
    // Lead Engineer (S = 100), rating 8.0 of 10 (→ normalised 80), 60% availability → 74 → P1.
    const worked = computeScoreFromRawRating(60, 8, 100);
    expect(worked).toBeCloseTo(74, 6);
    expect(classifyTier(worked)).toBe('P1');

    await up.navigateClean();
    await up.sortBy(/UP \(System\)/);
    await up.sortBy(/UP \(System\)/);
    const leads = scorable(await up.getRowData()).filter(r => r.designation === 'LE');
    test.skip(leads.length === 0, 'No Lead Engineer visible on the current page to cross-check');
    for (const lead of leads) {
      const rating = impliedRating(lead.availability, lead.valueScore, lead.seniority);
      expect(isValidRating(rating),
        `Lead Engineer ${lead.name} implies a rating of ${rating.toFixed(3)}, off the ${RATING_SCALE.min}–${RATING_SCALE.max} scale`,
      ).toBe(true);
      expect(computeScoreFromRawRating(lead.availability, Math.round(rating * 10) / 10, lead.seniority))
        .toBeCloseTo(lead.valueScore, 1);
    }
  });

  test('TC-UTLPRI-038 Value Score stays inside the 0–100 band its own weights allow @boundary', async () => {
    await up.navigateClean();
    const rows = scorable(await up.getRowData());
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      expect(row.valueScore).toBeGreaterThanOrEqual(0);
      expect(row.valueScore).toBeLessThanOrEqual(100);
      const ceiling = WEIGHTS.availability * 100 + WEIGHTS.rating * 100 + WEIGHTS.seniority * row.seniority;
      expect(row.valueScore,
        `${row.name} scores ${row.valueScore}, above the ${ceiling} ceiling for a ${row.designation} at full availability and a perfect rating`,
      ).toBeLessThanOrEqual(ceiling + 0.01);
    }
  });

  test('TC-UTLPRI-039 Rating enters the score only in 0.1-scale steps — equal-availability peers differ by whole rating steps', async () => {
    await up.navigateClean();
    const rows = scorable(await up.getRowData());
    const groups = new Map<string, typeof rows>();
    for (const row of rows) {
      const key = `${row.designation}|${row.availability}`;
      groups.set(key, [...(groups.get(key) ?? []), row]);
    }
    const comparable = [...groups.values()].filter(g => g.length > 1);
    test.skip(comparable.length === 0, 'No two people on this page share a designation and an availability value');

    const step = WEIGHTS.rating * (100 / RATING_SCALE.max) * RATING_SCALE.step; // 0.3 score units per 0.1 rating
    for (const group of comparable) {
      for (let i = 1; i < group.length; i++) {
        const delta = Math.abs(group[i].valueScore - group[0].valueScore);
        expect(Math.abs(Math.round(delta / step) * step - delta),
          `${group[i].name} and ${group[0].name} share ${group[0].designation} at ${group[0].availability}% ` +
          `but their scores differ by ${delta.toFixed(3)}, which is not a whole number of rating steps`,
        ).toBeLessThan(0.02);
      }
    }
  });

  test('TC-UTLPRI-040 A missing rating and a missing designation each contribute 0 to the score', async () => {
    await up.navigateClean();
    const rows = scorable(await up.getRowData());
    const missing = rows.filter(r => ratingIsMissing(r.availability, r.valueScore, r.seniority));
    test.skip(missing.length === 0, 'No employee without a rating is visible on the first page of results');

    // Confirmed live 2026-09-04 against the Employee module: these people fall outside the whole
    // 1–10 Overall Rating scale (excluded by both the 1.1–10 and the 1.0–1.1 bands), and their
    // designation renders as "—" there. Neither absent input is substituted with a midpoint —
    // each simply contributes nothing, so the score collapses to the availability term alone.
    for (const row of missing) {
      const ratingTerm = NULL_INPUT_CONTRIBUTION;
      const seniorityTerm = WEIGHTS.seniority * row.seniority;
      expect(row.valueScore,
        `${row.name} has no rating, so the rating term must contribute ${NULL_INPUT_CONTRIBUTION} — ` +
        `their score should be 0.50 × ${row.availability}% availability` +
        (row.designation === 'N/A'
          ? ' and nothing else, since they have no designation either.'
          : ` plus 0.20 × ${row.seniority} for their ${row.designation} designation.`),
      ).toBeCloseTo(WEIGHTS.availability * row.availability + ratingTerm + seniorityTerm, 1);
    }
  });

  test('TC-UTLPRI-041 [FRD GAP] Fallback — a rating-null row must carry an information icon saying the rating is missing', async ({ page }) => {
    await up.navigateClean();
    const rows = scorable(await up.getRowData());
    const missing = rows.filter(r => ratingIsMissing(r.availability, r.valueScore, r.seniority));
    test.skip(missing.length === 0, 'No rating-null employee is visible on the first page of results');

    const row = up.getAllRows().filter({ hasText: missing[0].name }).first();
    await expect(row.getByRole('img', { name: /rating/i })
      .or(row.getByLabel(/rating (is )?missing|no rating|rating unavailable/i)),
    `${missing[0].name} is scored without a rating but the row offers no information icon explaining that the rating is missing`,
    ).toBeVisible({ timeout: 10_000 });
  });
});
