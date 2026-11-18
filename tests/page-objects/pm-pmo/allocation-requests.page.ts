import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export interface TicketKpiCounts {
  allTickets: number;
  open: number;
  inReview: number;
  awaiting: number;
  approved: number;
}

/**
 * Ground-truth confirmed live (2026-08-06, ceo@simformsolutions.com / Admin session) against
 * BASE_URL/my-tickets — the real route for what the finalized PM & PMO spec (v2.3) calls the
 * "Requests page". Nav path: Requests Tracking (sidebar group) → Project Allocation. There is no
 * data-testid anywhere on this page; every locator below is role/text-based per selector priority.
 *
 * Confirmed discrepancies vs the v2.3 spec doc (see reports/requirements/req-2026-08-06-ALCTKT-doc.json
 * unclear[] / KB for the requirement-analysis side of this):
 * - Deallocation tickets use their own `DA-####` ID prefix and are NOT a UA ticket at 0% as the
 *   spec states (e.g. DA-0021 observed live). Ticket ID prefixes actually in use: NA-, UA-, DA-.
 * - Ticket detail route is `/my-tickets/<uuid>` (an opaque assignment id), not a human-readable
 *   `/allocation-tickets/NA-0042` as the spec's "Ticket ID storage" design decision states.
 * - Direct Allocation is its own routed page (`/my-tickets/direct-allocation`), not a modal.
 */
export class AllocationRequestsPage extends BasePage {
  readonly searchInput: Locator;
  readonly directAllocationBtn: Locator;
  readonly filterByStatusBtn: Locator;
  readonly filterByProjectsBtn: Locator;
  readonly filterByDepartmentBtn: Locator;
  readonly filterByProjectManagerBtn: Locator;
  readonly filterByCsmBtn: Locator;
  readonly filterByCreatedByBtn: Locator;
  readonly filterByAllocationTypeBtn: Locator;
  readonly ticketTable: Locator;
  readonly kpiAllTicketsText: Locator;
  readonly kpiOpenBtn: Locator;
  readonly kpiInReviewBtn: Locator;
  readonly kpiAwaitingBtn: Locator;
  readonly kpiApprovedBtn: Locator;

  constructor(page: Page) {
    super(page);
    // Real placeholder text has no space after the comma — verbatim from the live app.
    this.searchInput = page.getByPlaceholder('Search by ticket,PM, or project');
    this.directAllocationBtn = page.getByRole('button', { name: 'Direct Allocation' });
    this.filterByStatusBtn = page.getByRole('button', { name: 'Filter by Status' });
    this.filterByProjectsBtn = page.getByRole('button', { name: 'Filter by Projects' });
    this.filterByDepartmentBtn = page.getByRole('button', { name: 'Filter by Department' });
    this.filterByProjectManagerBtn = page.getByRole('button', { name: 'Filter by Project Manager' });
    this.filterByCsmBtn = page.getByRole('button', { name: 'Filter by CSM' });
    this.filterByCreatedByBtn = page.getByRole('button', { name: 'Filter by Created By' });
    this.filterByAllocationTypeBtn = page.getByRole('button', { name: 'Filter by Allocation Type' });
    this.ticketTable = page.getByRole('table').first().or(page.locator('table').first());
    // Ground-truth confirmed live: the button's *accessible name* joins child text nodes with a
    // space ("Open 76"), but the KPI container's raw textContent has no space ("All Tickets195") —
    // these are two different name-computation algorithms (ARIA accname vs textContent), so the
    // regexes below intentionally differ in whether they allow a space.
    this.kpiAllTicketsText = page.getByText(/^All Tickets\d+$/);
    this.kpiOpenBtn = page.getByRole('button', { name: /^Open\s*\d+$/ });
    this.kpiInReviewBtn = page.getByRole('button', { name: /^In Review\s*\d+$/ });
    this.kpiAwaitingBtn = page.getByRole('button', { name: /^Awaiting\s*\d+$/ });
    this.kpiApprovedBtn = page.getByRole('button', { name: /^Approved\s*\d+$/ });
  }

  async navigate(): Promise<void> {
    // BasePage.goto() waits on networkidle, which this SPA doesn't reliably fire — go direct and
    // wait on a stable element instead, matching this repo's established pattern.
    // The search box renders before the ticket table finishes its async fetch — waiting on it
    // alone caused a real race (row-count reads of 0 before data arrived). Wait for at least one
    // ticket-ID row to actually render.
    await this.page.goto('/my-tickets');
    await this.searchInput.waitFor({ state: 'visible', timeout: 20000 });
    await this.getAllTicketIdRows().first().waitFor({ state: 'visible', timeout: 20000 });
    await this.waitForStableRowCount();
  }

  /** Ticket row button by its human-readable ID, e.g. "NA-0148", "UA-0019", "DA-0021". */
  ticketRow(ticketId: string): Locator {
    return this.page.getByRole('button', { name: ticketId, exact: true });
  }

  async openTicket(ticketId: string): Promise<void> {
    await this.ticketRow(ticketId).click();
    // The page renders the string twice — a visually-hidden `<h1 class="sr-only">Ticket Details</h1>`
    // for screen readers plus the visible heading — so a bare getByText() is a strict-mode violation.
    await this.page.getByRole('heading', { name: 'Ticket Details' }).first().waitFor({ state: 'visible', timeout: 15000 });
  }

  async openDirectAllocation(): Promise<void> {
    await this.directAllocationBtn.click();
    await this.page.getByText('PMO Direct Allocation').waitFor({ state: 'visible', timeout: 15000 });
  }

  async search(term: string): Promise<void> {
    await this.searchInput.fill(term);
    // SPA filters client-side (debounced) and the table re-renders progressively — a fixed
    // timeout was flaky under parallel-worker load (observed 0-row and 1-row race reads).
    // Poll until the row count stabilizes instead of trusting a fixed settle time.
    await this.page.waitForTimeout(400); // let the debounce actually kick off first
    await this.waitForStableRowCount();
  }

  private async parseCount(locator: Locator): Promise<number> {
    const text = (await locator.first().innerText()).trim();
    const match = text.match(/(\d+)$/);
    if (!match) throw new Error(`Could not parse a trailing count out of KPI tile text: "${text}"`);
    return parseInt(match[1], 10);
  }

  async getKpiCounts(): Promise<TicketKpiCounts> {
    const [allTickets, open, inReview, awaiting, approved] = await Promise.all([
      this.parseCount(this.kpiAllTicketsText),
      this.parseCount(this.kpiOpenBtn),
      this.parseCount(this.kpiInReviewBtn),
      this.parseCount(this.kpiAwaitingBtn),
      this.parseCount(this.kpiApprovedBtn),
    ]);
    return { allTickets, open, inReview, awaiting, approved };
  }

  /** All visible ticket-ID row buttons currently rendered (NA-/UA-/DA- prefixed). */
  getAllTicketIdRows(): Locator {
    return this.page.getByRole('button', { name: /^(NA|UA|DA)-\d{4}$/ });
  }

  /**
   * The table renders progressively (first row becomes visible before the full page's worth of
   * rows finish mounting — confirmed live: waiting on just the first row left a fresh page/reload
   * reporting 1 row instead of ~98). Poll the row count until it stops changing rather than
   * trusting the first row's visibility alone.
   */
  async waitForStableRowCount(timeoutMs = 8000): Promise<number> {
    const deadline = Date.now() + timeoutMs;
    let previous = -1;
    let stableSince = Date.now();
    while (Date.now() < deadline) {
      const current = await this.getAllTicketIdRows().count();
      if (current !== previous) {
        previous = current;
        stableSince = Date.now();
      } else if (Date.now() - stableSince > 500) {
        return current;
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    return previous;
  }
}
