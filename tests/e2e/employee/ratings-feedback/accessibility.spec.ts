import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — accessibility (TC-EMPRTF-130 … 135).
 *
 * The screen ships no data-testid at all but does give every control a descriptive accessible name
 * ("View ratings and feedback for <employee>", "Edit feedback for <project>"), so name quality is
 * both the a11y story and the automation story here.
 *
 * TC-EMPRTF-136 (axe scan) is not automated: @axe-core/playwright is not a dependency of this repo.
 */
test.describe('Employee — Ratings & Feedback — Accessibility', () => {
  let rf: RatingsFeedbackPage;

  test.beforeEach(async ({ primaryPage }) => {
    rf = new RatingsFeedbackPage(primaryPage);
    await rf.goToConsole();
  });

  test('TC-EMPRTF-130 @a11y The list is a properly structured data table', async () => {
    const headerCount = await rf.getColumnHeaders().count();
    expect(headerCount).toBe(7);

    for (const row of (await rf.getDataRows().all()).slice(0, 3)) {
      expect(await row.getByRole('cell').count(), 'a data row has a different cell count from the header row').toBe(headerCount);
    }
  });

  test('TC-EMPRTF-131 @a11y Row actions are individually identifiable by accessible name', async () => {
    const names = await rf.getEmployeeNames();
    const labels = await rf.getDataRows().getByRole('button', { name: /^view ratings and feedback for /i }).all();
    expect(labels.length).toBe(names.length);
    expect(new Set(names).size, 'two row actions share an accessible name — they must name their employee').toBe(names.length);
  });

  test('TC-EMPRTF-132 @a11y Column sort and filter controls name the column they act on', async () => {
    for (const column of ['Department', 'De-allocations', 'Avg Rating', 'Reallocate']) {
      await expect(
        rf.page.getByRole('button', { name: `Filter by ${column}` }),
        `the filter control for "${column}" does not name its column`
      ).toBeVisible();
    }
  });

  test('TC-EMPRTF-133 @a11y The list is reachable and operable by keyboard', async ({ primaryPage }) => {
    await rf.searchInput.focus();
    await expect(rf.searchInput).toBeFocused();

    let reachedAction = false;
    for (let i = 0; i < 40 && !reachedAction; i += 1) {
      await primaryPage.keyboard.press('Tab');
      const label = await primaryPage.evaluate(() => document.activeElement?.getAttribute('aria-label') ?? '');
      if (/^view ratings and feedback for /i.test(label)) reachedAction = true;
    }
    expect(reachedAction, 'no row action was reachable by keyboard within 40 tab stops').toBe(true);
  });

  test('TC-EMPRTF-134 @a11y The Edit Feedback dialog is a labelled dialog that closes on Escape', async ({ primaryPage }) => {
    await rf.openDetail(rf.getDataRows().first());
    const dialog = await rf.openEditDialog(rf.getDetailRows().first());

    await expect(dialog).toHaveAttribute('role', 'dialog');
    await expect(dialog.getByRole('heading', { name: /edit feedback/i })).toBeVisible();

    await primaryPage.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('TC-EMPRTF-135 @a11y Ratings are readable as text, not conveyed by colour alone', async () => {
    for (const rating of await rf.getAvgRatings()) {
      expect(Number.isNaN(rating), 'a rating rendered with no readable numeric text').toBe(false);
    }
  });
});
