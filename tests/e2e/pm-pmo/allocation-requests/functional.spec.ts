// Automated against the LIVE deployed feature at BASE_URL/my-tickets (ground-truth confirmed
// 2026-08-06 — see tests/page-objects/pm-pmo/allocation-requests.page.ts header comment for the
// confirmed discrepancies vs the v2.3 spec doc this module's test cases were generated from).
// Uses the default `page` fixture (ceo@simformsolutions.com / Admin, per playwright.config.ts).
// No dedicated PM/PMO/EM test persona exists yet, so every test here is read-only / non-mutating
// by design — no ticket is created, approved, edited, or cancelled.
import { test, expect } from '../../../fixtures/auth';
import { AllocationRequestsPage } from '../../../page-objects/pm-pmo/allocation-requests.page';

test.describe('PM & PMO — Allocation Requests — Functional', () => {
  let requestsPage: AllocationRequestsPage;

  test.beforeEach(async ({ page }) => {
    requestsPage = new AllocationRequestsPage(page);
    await requestsPage.navigate();
  });

  test('TC-ALCTKT-018 Requests page summary bar counts tickets by state @functional', async () => {
    await expect(requestsPage.kpiAllTicketsText).toBeVisible();
    await expect(requestsPage.kpiOpenBtn).toBeVisible();
    await expect(requestsPage.kpiInReviewBtn).toBeVisible();
    await expect(requestsPage.kpiAwaitingBtn).toBeVisible();
    await expect(requestsPage.kpiApprovedBtn).toBeVisible();

    const counts = await requestsPage.getKpiCounts();
    for (const [label, value] of Object.entries(counts)) {
      expect(value, `${label} tile should be a non-negative count`).toBeGreaterThanOrEqual(0);
    }
  });

  test('TC-ALCTKT-020 Requests page supports search by ticket ID @functional', async ({ page }) => {
    const knownTicket = await requestsPage.getAllTicketIdRows().first().innerText();
    await requestsPage.search(knownTicket);

    const visibleRows = requestsPage.getAllTicketIdRows();
    await expect(visibleRows.first()).toBeVisible();
    const rowCount = await visibleRows.count();
    for (let i = 0; i < rowCount; i++) {
      await expect(visibleRows.nth(i)).toHaveText(knownTicket);
    }
  });

  test('TC-ALCTKT-020b Requests page search by project name narrows the list @functional', async ({ page }) => {
    // Real project names observed live include "KubeDash | Kubernetes Dashboard".
    await requestsPage.search('KubeDash');
    await expect(requestsPage.getAllTicketIdRows().first()).toBeVisible();
    const bodyText = await page.locator('table, [role="table"]').first().innerText();
    expect(bodyText).toContain('KubeDash');
  });

  test('TC-ALCTKT-021 Requests page Filter by Status control opens a selectable list @functional', async ({ page }) => {
    await requestsPage.filterByStatusBtn.click();
    // Real UI renders a popover/listbox — assert some selectable option appears rather than
    // asserting a specific implementation (combobox vs listbox vs menu) not confirmed via DOM snapshot.
    const openOption = page.getByRole('option', { name: /open/i })
      .or(page.getByRole('menuitem', { name: /open/i }))
      .or(page.getByText(/^Open$/));
    await expect(openOption.first()).toBeVisible({ timeout: 5000 });
  });

  test('TC-ALCTKT-034 Ticket detail view shows the correct ticket ID and type (URL uses an opaque assignment id, not the human-readable ticket ID) @functional', async ({ page }) => {
    const ticketId = await requestsPage.getAllTicketIdRows().first().innerText();
    await requestsPage.openTicket(ticketId);

    // Documented discrepancy vs the v2.3 spec's "Ticket ID storage" design decision (which states
    // detail URLs use the human-readable ID, e.g. /allocation-tickets/NA-0042): the real app routes
    // to /my-tickets/<uuid>. Asserting actual behavior here, not the spec's claim.
    expect(page.url()).toMatch(/\/my-tickets\/[0-9a-f-]{36}$/i);
    await expect(page.getByText(ticketId, { exact: true }).first()).toBeVisible();
  });

  test('TC-ALCTKT-045 Direct Allocation entry point is visible to Admin and opens the correct page (submission intentionally not exercised — would mutate live data) @functional', async ({ page }) => {
    await expect(requestsPage.directAllocationBtn).toBeVisible();
    await requestsPage.openDirectAllocation();

    expect(page.url()).toContain('/my-tickets/direct-allocation');
    await expect(page.getByText(/bypasses department queue, shortlisting, and approval/i)).toBeVisible();
  });

  test('TC-ALCTKT-057 Applying a search filter updates the visible ticket rows @functional', async ({ page }) => {
    const allRowsCountBefore = await requestsPage.getAllTicketIdRows().count();

    const knownTicket = await requestsPage.getAllTicketIdRows().first().innerText();
    await requestsPage.search(knownTicket);
    const filteredCount = await requestsPage.getAllTicketIdRows().count();
    expect(filteredCount).toBeLessThanOrEqual(allRowsCountBefore);
    expect(filteredCount).toBeGreaterThan(0);

    await requestsPage.search('');
    const restoredCount = await requestsPage.getAllTicketIdRows().count();
    expect(restoredCount).toBe(allRowsCountBefore);
  });
});
