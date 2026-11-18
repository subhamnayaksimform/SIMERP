import { test, expect } from '../../../fixtures/auth';
import { RatingsFeedbackPage } from '../../../page-objects/employee/ratings-feedback.page';

/**
 * Employee Ratings & Feedback — access control (TC-EMPRTF-060 … 073).
 *
 * Deallocation feedback is sensitive performance data about named people, so who can reach
 * /employee-ratings — and who can edit a record once there — is the highest-risk question on this
 * feature. These specs compare each role against the Admin baseline rather than assuming a
 * particular scoping rule.
 */
test.describe('Employee — Ratings & Feedback — Access control', () => {
  test('TC-EMPRTF-060 @security A plain employee cannot reach the Employee Ratings list', async ({ empPage }) => {
    const rf = new RatingsFeedbackPage(empPage);
    await empPage.goto(RatingsFeedbackPage.LIST_ROUTE, { waitUntil: 'domcontentloaded' });

    const reachedTable = await rf.table.isVisible({ timeout: 5000 }).catch(() => false);
    expect(
      reachedTable,
      'a plain employee reached the ratings table — deallocation feedback about colleagues must not be readable by an unprivileged account'
    ).toBe(false);
  });

  test('TC-EMPRTF-061 @security A plain employee is not offered the Employee Ratings nav entry', async ({ empPage }) => {
    await empPage.goto('/dashboard', { waitUntil: 'domcontentloaded' });
    const overview = empPage.getByRole('button', { name: /^overview$/i }).first();
    if (await overview.isVisible().catch(() => false)) await overview.click();

    await expect(empPage.getByRole('link', { name: /^employee ratings$/i })).toHaveCount(0);
  });

  test('TC-EMPRTF-066 @security A PM sees no more employees than Admin does', async ({ primaryPage, pmPage }) => {
    const admin = new RatingsFeedbackPage(primaryPage);
    await admin.goToConsole();
    const adminNames = new Set(await admin.getEmployeeNames());

    const pm = new RatingsFeedbackPage(pmPage);
    await pmPage.goto(RatingsFeedbackPage.LIST_ROUTE, { waitUntil: 'domcontentloaded' });
    const reachedTable = await pm.table.isVisible({ timeout: 5000 }).catch(() => false);
    test.skip(!reachedTable, 'the PM account cannot reach the ratings list — no scoping to compare');

    for (const name of await pm.getEmployeeNames()) {
      expect(adminNames.has(name), `the PM saw "${name}", who is not visible even to Admin`).toBe(true);
    }
  });

  test('TC-EMPRTF-070 @security A TM sees no more employees than Admin does', async ({ primaryPage, tmPage }) => {
    const admin = new RatingsFeedbackPage(primaryPage);
    await admin.goToConsole();
    const adminNames = new Set(await admin.getEmployeeNames());

    const tm = new RatingsFeedbackPage(tmPage);
    await tmPage.goto(RatingsFeedbackPage.LIST_ROUTE, { waitUntil: 'domcontentloaded' });
    const reachedTable = await tm.table.isVisible({ timeout: 5000 }).catch(() => false);
    test.skip(!reachedTable, 'the TM account cannot reach the ratings list — no scoping to compare');

    for (const name of await tm.getEmployeeNames()) {
      expect(adminNames.has(name), `the TM saw "${name}", who is not visible even to Admin`).toBe(true);
    }
  });

  test('TC-EMPRTF-073 @security The ratings API refuses an unprivileged session', async ({ primaryPage, empPage }) => {
    // Learn the real endpoint from the app's own traffic — guessing a path just returns the SPA
    // shell with 200 and would read as a false authorization hole.
    const admin = new RatingsFeedbackPage(primaryPage);
    const requestUrl = primaryPage
      .waitForRequest((request) => /rating/i.test(request.url()) && request.resourceType() === 'fetch', { timeout: 20000 })
      .then((request) => request.url())
      .catch(() => null);

    await admin.goToConsole();
    const endpoint = await requestUrl;
    test.skip(!endpoint, 'could not observe a ratings API call from the list view — nothing to probe');

    const response = await empPage.request.get(endpoint!);
    expect(
      response.ok(),
      `the ratings API answered an unprivileged session with ${response.status()} at ${endpoint} — scope must be enforced server-side, not only hidden in the UI`
    ).toBe(false);
  });
});
