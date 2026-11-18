import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — negative (TC-EMPRTF-090 … 098).
 *
 * Rating columns are nullable Decimal(4,2) in EmployeeAllocationFeedback: a skipped rating is
 * stored NULL and must never present as 0, which on a 1–10 scale reads as a genuine low score.
 */
test.describe('Employee — Ratings & Feedback — Negative', () => {
  let rf: RatingsFeedbackPage;

  test.beforeEach(async ({ primaryPage }) => {
    rf = new RatingsFeedbackPage(primaryPage);
    await rf.goToConsole();
  });

  test('TC-EMPRTF-090 @negative A search matching nothing empties the table without erroring', async () => {
    const pageErrors: Error[] = [];
    rf.page.on('pageerror', (error) => pageErrors.push(error));

    await rf.search('zzz-no-such-employee-zzz');

    await expect(rf.getDataRows()).toHaveCount(0);
    expect(pageErrors, `an unmatched search raised page errors: ${pageErrors.map((e) => e.message).join('; ')}`).toHaveLength(0);
  });

  test('TC-EMPRTF-093 @negative A rating below the allowed minimum is rejected', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();
    const before = ((await rf.getDetailCell(row, 'core').textContent()) ?? '').trim();

    const dialog = await rf.openEditDialog(row);
    await rf.getEditRatingInput(dialog, 'Core Skill').fill('0');

    // The dialog guards the range by disabling Save rather than erroring on submit.
    await expect(dialog.getByRole('button', { name: /^save$/i }), 'Save stayed enabled for a rating of 0 — the scale starts at 1').toBeDisabled();

    await rf.cancelEditDialog(dialog);
    await expect(rf.getDetailCell(row, 'core')).toHaveText(before);
  });

  test('TC-EMPRTF-094 @negative A rating above the allowed maximum is rejected', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();
    const before = ((await rf.getDetailCell(row, 'overall').textContent()) ?? '').trim();

    const dialog = await rf.openEditDialog(row);
    const overall = rf.getEditRatingInput(dialog, 'Overall');
    const typedBefore = await overall.inputValue();
    await overall.fill('11');

    // Since the shared RatingScoreInput (masked text input, verified live 2026-11-12) a keystroke
    // that would leave the 1–10 scale is refused outright, so "11" never reaches the form — the
    // field keeps its previous value. (Earlier the value was accepted and Save silently did nothing.)
    await expect(overall, 'the rating field accepted a value above the 10-point maximum').not.toHaveValue('11');
    await expect(overall).toHaveValue(typedBefore);

    await rf.cancelEditDialog(dialog);
    await expect(rf.getDetailCell(row, 'overall'), 'an out-of-range rating reached the record').toHaveText(before);
  });

  test('TC-EMPRTF-095 @negative A non-numeric rating is rejected', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();
    const before = ((await rf.getDetailCell(row, 'beh').textContent()) ?? '').trim();

    const dialog = await rf.openEditDialog(row);
    await rf.getEditRatingInput(dialog, 'Behaviour').fill('abc');

    // Either the field refuses the characters outright or Save is guarded — both are acceptable.
    const accepted = await rf.getEditRatingInput(dialog, 'Behaviour').inputValue();
    if (/[a-z]/i.test(accepted)) {
      await expect(dialog.getByRole('button', { name: /^save$/i }), 'the field accepted letters and left Save enabled').toBeDisabled();
    }

    await rf.cancelEditDialog(dialog);
    await expect(rf.getDetailCell(row, 'beh')).toHaveText(before);
  });

  test('TC-EMPRTF-096 @negative Clearing a rating does not silently store zero', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const row = rf.getDetailRows().first();

    const before = ((await rf.getDetailCell(row, 'comm').textContent()) ?? '').trim();

    const dialog = await rf.openEditDialog(row);
    await rf.getEditRatingInput(dialog, 'Comm.').fill('');

    // A cleared rating must either be blocked at the button or explained. By design (schema comment:
    // the API cannot clear a rating, so a cleared field is omitted) the drawer treats it as "no change"
    // and explains so in a toast — "Change at least one field before saving." (verified 2026-11-12).
    const save = dialog.getByRole('button', { name: /^save$/i });
    if (await save.isEnabled()) {
      await save.click();
      await expect(
        dialog.getByText(/required|must be|invalid|cannot be empty/i)
          .or(rf.page.getByRole('region', { name: /notifications/i }).getByText(/change at least one field/i)).first(),
        'Save was enabled with the rating cleared and clicking it neither saved nor explained why'
      ).toBeVisible();
    }

    await rf.cancelEditDialog(dialog);
    await expect(
      rf.getDetailCell(row, 'comm'),
      'a cleared rating became 0.00 — NULL means "not rated" and must never read as a genuine low score'
    ).not.toHaveText(/^0\.00$/);
    await expect(rf.getDetailCell(row, 'comm')).toHaveText(before);
  });

  test('TC-EMPRTF-098 @negative Feedback beyond the stored maximum is capped or rejected', async () => {
    await rf.openDetail(rf.getDataRows().first());
    const dialog = await rf.openEditDialog(rf.getDetailRows().first());

    const input = rf.getEditFeedbackInput(dialog);
    await input.fill('x'.repeat(4097));
    const length = (await input.inputValue()).length;

    expect(length, 'the feedback field accepted more than 4096 characters — developerFeedback is VarChar(4096)').toBeLessThanOrEqual(4096);
    await rf.cancelEditDialog(dialog);
  });
});
