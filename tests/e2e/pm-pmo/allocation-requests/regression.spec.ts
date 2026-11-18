// Automated against the LIVE deployed feature at BASE_URL/my-tickets. Read-only / non-mutating —
// see functional.spec.ts header and the page object's header comment for ground-truth notes.
import { test, expect } from '../../../fixtures/auth';
import { AllocationRequestsPage } from '../../../page-objects/pm-pmo/allocation-requests.page';

test.describe('PM & PMO — Allocation Requests — Regression', () => {
  let requestsPage: AllocationRequestsPage;

  test.beforeEach(async ({ page }) => {
    requestsPage = new AllocationRequestsPage(page);
    await requestsPage.navigate();
  });

  test('TC-ALCTKT-053 Ticket-state summary tiles sum to the same total as "All Tickets" @regression', async () => {
    // KNOWN FINDING (2026-08-06, live dev env): this assertion currently FAILS — "All Tickets"
    // read 192 while Open(74) + In Review(11) + Awaiting(24) + Approved(69) = 178, a gap of 14.
    // The finalized spec's 5 KPI states are Open/In Review/Awaiting Confirmation/Approved/Closed;
    // there is no visible "Closed" tile on this page, so the 14-ticket gap is most likely
    // un-tiled Closed tickets folded into "All Tickets" — the same class of KPI-count mismatch
    // the original KT meeting transcript observed (there: "46 vs 61"). Kept as a real, executable
    // assertion (not softened) so this regresses loudly if the gap changes rather than silently
    // passing — see reports/knowledge-base/modules/pm-pmo/allocation-requests.json edgeCases for
    // the requirement-analysis-side record of this pattern.
    const counts = await requestsPage.getKpiCounts();
    const tileSum = counts.open + counts.inReview + counts.awaiting + counts.approved;
    expect(tileSum, 'sum of Open+In Review+Awaiting+Approved tiles vs "All Tickets"').toBe(counts.allTickets);
  });

  test('TC-ALCTKT regression — an applied search filter survives a full page reload (persisted via URL query param)', async ({ page }) => {
    // Ground-truth confirmed live: the search term is written to the URL as `?search=<term>`
    // (e.g. /my-tickets?search=NA-0152), so a reload correctly re-applies the same filter rather
    // than resetting to the unfiltered list — a stricter, more durable form of the KB's known
    // "filters must persist across tab navigation" edge case. This test asserts that real,
    // intentional behavior; an earlier version of this test wrongly assumed reload resets the
    // filter and failed against correct app behavior.
    const knownTicket = await requestsPage.getAllTicketIdRows().first().innerText();
    await requestsPage.search(knownTicket);
    const filteredCountBefore = await requestsPage.getAllTicketIdRows().count();
    expect(filteredCountBefore).toBeGreaterThan(0);
    expect(page.url()).toContain(`search=${knownTicket}`);

    await page.reload();
    await requestsPage.searchInput.waitFor({ state: 'visible', timeout: 20000 });
    await requestsPage.getAllTicketIdRows().first().waitFor({ state: 'visible', timeout: 20000 });

    expect(await requestsPage.searchInput.inputValue()).toBe(knownTicket);
    const filteredCountAfterReload = await requestsPage.waitForStableRowCount();
    expect(filteredCountAfterReload).toBe(filteredCountBefore);
    for (const row of await requestsPage.getAllTicketIdRows().all()) {
      await expect(row).toHaveText(knownTicket);
    }
  });
});
