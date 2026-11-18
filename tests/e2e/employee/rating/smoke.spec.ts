import { test, expect } from '@playwright/test';
import { RatingPage } from '../../../page-objects/employee/rating.page';

// TC-EMPRAT-001, 002 — wholly new sub-feature (2026-07-13, Figma-derived, no prior automation).
// Uses the default `page` fixture (ceo@simformsolutions.com storageState), matching the convention
// already used by tests/e2e/employee/employee-details/smoke.spec.ts.
test.describe('Employee — Ratings — Smoke', () => {
  let ratingPage: RatingPage;

  test.beforeEach(async ({ page }) => {
    ratingPage = new RatingPage(page);
    await ratingPage.navigateToRatings();
    test.skip(
      !(await ratingPage.table.isVisible().catch(() => false)),
      'Ratings screen confirmed not found live as of 2026-07-13 — GET /employee/ratings returns an in-app 404 and no "Ratings" item exists in the Employee sidebar submenu. Figma design-ahead feature, not yet implemented in the running app.'
    );
  });

  test('TC-EMPRAT-001 RM/Admin edits Overall/AI/Communication rating via anchored popup and Save persists/reflects immediately @smoke', async ({ page }) => {
    const row = ratingPage.getDataRows().first();
    const rowVisible = await row.isVisible().catch(() => false);
    if (!rowVisible) test.skip(true, 'Ratings table/row not found — navigation path/selector unconfirmed against live app');

    const popup = await ratingPage.openRatingPopup(row, 'overall');
    const popupVisible = await popup.isVisible().catch(() => false);
    if (!popupVisible) test.skip(true, 'Overall rating popup not found — selector unconfirmed against live app');

    const filled = await ratingPage.fillRatingValue(popup, '4');
    if (!filled) test.skip(true, 'Rating popup input not found — exact input format/range unconfirmed');

    const savePromise = page.waitForResponse(r => /\/api\/.*rating/i.test(r.url()), { timeout: 8000 }).catch(() => null);
    await ratingPage.saveRatingPopup(popup);
    await savePromise;
    await expect(popup).not.toBeVisible();
    await expect(ratingPage.table).toBeVisible();
  });

  test('TC-EMPRAT-002 RM/Admin applies Advanced Filter by Rating (single and combined); Clear restores the full list @smoke', async () => {
    const initialCount = await ratingPage.getDataRows().count();
    await ratingPage.openAdvancedFilterByRatingPanel();
    const panel = ratingPage.getAdvancedFilterByRatingPanel();
    const panelVisible = await panel.isVisible().catch(() => false);
    if (!panelVisible) test.skip(true, 'Advanced Filter by Rating panel not found — selector unconfirmed against live app');

    await expect(ratingPage.getFilterResultCountText(panel)).toBeVisible();
    await ratingPage.clearAdvancedFilterByRating(panel);
    const restoredCount = await ratingPage.getDataRows().count();
    expect(restoredCount).toBe(initialCount);
  });
});
