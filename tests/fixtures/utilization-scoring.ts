/**
 * UP (System) scoring model — the single source of truth every TC-UTLPRI calculation assertion
 * computes against.
 *
 * DERIVATION (2026-09-04): the model below was reverse-derived from 785 distinct live employees
 * scraped off `/utilization-priority` across all three tiers, then tied out against the Employee
 * module's "Overall Rating" advanced filter (cross-module confirmation of the rating input). The
 * fit is exact for 781/785 rows; the 4 exceptions are precisely the rating-null population that
 * missing-input rule below covers: a null rating and a null designation each contribute 0.
 *
 *   Value Score = 0.50 × Availability + 0.30 × NormalisedRating + 0.20 × Seniority
 *
 * with, live:
 *   - Availability      the "Availability" column, already 0–100 (FRD §5.1: used directly).
 *   - Rating            sourced from Employee ▸ Overall Rating, on a **1–10** scale (confirmed via
 *                       the advanced-filter slider: aria-valuemin=1, aria-valuemax=10, step 0.1).
 *                       NormalisedRating = rating ÷ 10 × 100 = rating × 10, so the rating term
 *                       collapses to `3 × rating`.
 *   - Seniority         designation-banded 0 / 33 / 67 / 100 (see SENIORITY_BY_DESIGNATION).
 *
 * FRD §5.5's worked example still holds under this model: a Lead Engineer (S = 100) rated 8.0
 * (→ normalised 80) at 60% availability scores 0.5(60) + 0.3(80) + 0.2(100) = 74 → P1.
 *
 * DEVIATION FROM FRD BR-9: the FRD scopes seniority to three designations (Software Engineer,
 * Sr Software Engineer, Lead Engineer). The live build applies the same 33/67/100 banding across
 * ~25 designations, and scores a person with no designation at 0 rather than at a baseline.
 */

/** Weights, verbatim from FRD §5.2. */
export const WEIGHTS = { availability: 0.5, rating: 0.3, seniority: 0.2 } as const;

/** Tier cut-offs, verbatim from FRD §5.3. */
export const TIER_THRESHOLDS = { p1: 70, p2: 40 } as const;

/** Under-utilized flag cut-off, FRD §5.4 (and the live tooltip: "30% or more … unclaimed"). */
export const UNDER_UTILIZED_THRESHOLD = 30;

/** The rating scale actually in use, confirmed on the Employee advanced filter. */
export const RATING_SCALE = { min: 1, max: 10, step: 0.1 } as const;

/**
 * Missing inputs (clarified by the user 2026-09-04): a null rating and a null designation each
 * contribute nothing — they are treated as 0, not substituted with a neutral midpoint.
 *
 * So a person with neither a rating nor a designation scores `0.50 × Availability` and nothing
 * else. That is what the build already does, and TC-UTLPRI-040 pins it.
 *
 * The display half of the original requirement still stands and is NOT met: a row scored without
 * a rating must carry an information icon saying so (TC-UTLPRI-041).
 */
export const NULL_INPUT_CONTRIBUTION = 0;

/**
 * Designation → seniority value. Bands confirmed live; anything not listed returns `null` so a
 * test skips that row rather than asserting against a guessed mapping.
 */
export const SENIORITY_BY_DESIGNATION: Record<string, number> = {
  'N/A': 0,
  // Base band (33) — FRD "Software Engineer" rank 1
  SE: 33, DE: 33, DOE: 33, MLE: 33, QAE: 33, SA: 33, CSA: 33, AISE: 33, IoTE: 33, UIXD: 33,
  // Senior / manager band (67) — FRD "Sr Software Engineer" rank 2
  'Sr. SE': 67, 'Sr. DE': 67, 'Sr. DOE': 67, 'Sr. MLE': 67, 'Sr. QAE': 67, 'Sr. SA': 67,
  'Sr. AISE': 67, 'Sr. IoTE': 67, 'Sr. UIXD': 67, 'Sr. PM': 67, PM: 67, CSM: 67, DOL: 67,
  // Lead band (100) — FRD "Lead Engineer" rank 3
  LE: 100,
};

export function seniorityFor(designation: string): number | null {
  const key = (designation || 'N/A').trim();
  if (key in SENIORITY_BY_DESIGNATION) return SENIORITY_BY_DESIGNATION[key];
  // Unlisted "Sr. X" designations still band with their prefix; anything else is unknown.
  if (/^Sr\.\s/.test(key)) return 67;
  return null;
}

/** Normalise a raw 1–10 rating onto the 0–100 scale the composite score works in. */
export function normaliseRating(rating: number): number {
  return (rating / RATING_SCALE.max) * 100;
}

/** The composite score, exactly as FRD §5.2 defines it. */
export function computeScore(availability: number, normalisedRating: number, seniority: number): number {
  return WEIGHTS.availability * availability
    + WEIGHTS.rating * normalisedRating
    + WEIGHTS.seniority * seniority;
}

/** Convenience wrapper taking the raw 1–10 rating instead of the normalised value. */
export function computeScoreFromRawRating(availability: number, rating: number, seniority: number): number {
  return computeScore(availability, normaliseRating(rating), seniority);
}

export function classifyTier(score: number): 'P1' | 'P2' | 'P3' {
  if (score >= TIER_THRESHOLDS.p1) return 'P1';
  if (score >= TIER_THRESHOLDS.p2) return 'P2';
  return 'P3';
}

/**
 * Invert the composite score to recover the rating the app must have used for a row.
 *
 * Both Availability and Value Score are rendered rounded to 2 dp, so the recovered rating carries
 * up to ±0.007 of display noise — `isValidRating` allows for that before checking the 0.1 grid.
 */
export function impliedRating(availability: number, valueScore: number, seniority: number): number {
  const normalised = (valueScore - WEIGHTS.availability * availability - WEIGHTS.seniority * seniority)
    / WEIGHTS.rating;
  return normalised / (100 / RATING_SCALE.max);
}

/** True when a recovered rating sits on the real 1–10 / 0.1-step scale (within display tolerance). */
export function isValidRating(rating: number, tolerance = 0.02): boolean {
  const onGrid = Math.abs(Math.round(rating / RATING_SCALE.step) * RATING_SCALE.step - rating) < tolerance;
  return onGrid && rating >= RATING_SCALE.min - tolerance && rating <= RATING_SCALE.max + tolerance;
}

/** True when a row's score is consistent with the model for *some* rating on the real scale. */
export function scoreIsConsistent(availability: number, valueScore: number, seniority: number): boolean {
  return isValidRating(impliedRating(availability, valueScore, seniority));
}

/**
 * A row whose rating is missing resolves to an implied rating of exactly 0 — below the scale's
 * floor of 1. The inversion already subtracts the row's own seniority, so this detects a missing
 * rating whether or not the designation is also missing.
 */
export function ratingIsMissing(availability: number, valueScore: number, seniority: number): boolean {
  return Math.abs(impliedRating(availability, valueScore, seniority)) < 0.05;
}
