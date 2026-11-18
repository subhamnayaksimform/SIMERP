import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Ground-truth confirmed live end-to-end (2026-08-10) across all three roles — PMO
 * (bhumi.chauhan@), TM (sudhansu.patel@, QA department), and read-back via PM
 * (hardik.trivedi@) — driving a real NA ticket (NA-0161) from OPEN through APPROVED and
 * confirming the resulting ProjectAssignment actually appeared on the project's developer list.
 *
 * Same accessible-name-mismatch pattern as NewAllocationFormPage: several controls report
 * ARIA role="combobox"/role="button" but their *computed* accessible name (per the ARIA
 * name-computation algorithm) does not equal their visible text, so `getByRole(role, { name })`
 * fails while `.filter({ hasText })` (plain textContent match) or a direct `[aria-label="..."]`
 * attribute selector succeeds. Every locator below uses whichever of those two actually worked.
 */
export class TicketDetailPage extends BasePage {
  readonly departmentCombobox: Locator;
  readonly employeeCombobox: Locator;
  readonly assignDepartmentBtn: Locator;
  readonly sendForApprovalBtn: Locator;
  readonly approveBtn: Locator;
  readonly rejectBtn: Locator;
  readonly bypassBtn: Locator;
  readonly statusHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.departmentCombobox = page.getByRole('combobox').filter({ hasText: 'Select department' });
    this.employeeCombobox = page.getByRole('combobox').filter({ hasText: 'Select employee' });
    this.assignDepartmentBtn = page.getByRole('button', { name: 'Assign Department' });
    this.sendForApprovalBtn = page.locator('button', { hasText: 'Send for Approval' });
    this.approveBtn = page.locator('button', { hasText: 'Approve' }).first();
    this.rejectBtn = page.getByRole('button', { name: 'Reject' });
    this.bypassBtn = page.getByRole('button', { name: 'Bypass TM/EM Approval' });
    // Status badge renders directly under the ticket ID heading — matched generically since it
    // has no dedicated role/label of its own.
    this.statusHeading = page.getByText(/^(Open|In Review|Awaiting|Approved|Closed)$/).first();
  }

  async openTicket(ticketId: string): Promise<void> {
    await this.page.goto('/my-tickets');
    await this.page.getByRole('button', { name: ticketId, exact: true }).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.getByRole('button', { name: ticketId, exact: true }).click();
    // The page renders the string twice — a visually-hidden `<h1 class="sr-only">Ticket Details</h1>`
    // for screen readers plus the visible heading — so a bare getByText() is a strict-mode violation.
    await this.page.getByRole('heading', { name: 'Ticket Details' }).first().waitFor({ state: 'visible', timeout: 15000 });
    // The "Ticket Details" heading and top summary render before the lower "Assign Department &
    // Employee Shortlisting" section finishes hydrating (confirmed live: clicking its combobox
    // immediately after this heading appears silently fails to open any option list at all,
    // despite the trigger itself reporting focused/active state).
    await this.assignDepartmentBtn.or(this.departmentCombobox).first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    await this.page.waitForTimeout(1500);
  }

  /**
   * Opens a cmdk-style filterable combobox and waits for its option list to actually render,
   * retrying the click if the first attempt silently produced zero options (confirmed live: this
   * happens even when the trigger itself reports focused/active — a real, reproducible timing
   * issue with this component, not a race in this test).
   */
  private async openComboboxWithOptions(combobox: Locator): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt++) {
      await combobox.click();
      await this.page.waitForTimeout(600);
      if (await this.page.getByRole('option').count() > 0) return;
      await this.page.keyboard.press('Escape').catch(() => {});
      await this.page.waitForTimeout(300);
    }
    throw new Error('Combobox option list never rendered after 3 click attempts');
  }

  /** PMO step: assign a department to a NA ticket, confirming the save dialog. */
  async assignDepartment(departmentName: string): Promise<void> {
    await this.openComboboxWithOptions(this.departmentCombobox);
    await this.page.getByRole('option', { name: departmentName, exact: true }).click();
    await this.page.waitForTimeout(300);
    await this.assignDepartmentBtn.click();
    const dialog = this.page.getByRole('dialog').filter({ hasText: 'Assign this department?' });
    await dialog.getByRole('button', { name: 'Confirm', exact: true }).click();
    // This save is async — confirmed live that closing/navigating away too early drops the
    // change entirely (an earlier shortlist-add was lost the same way before this fix).
    await this.page.getByText('Saving changes').waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    // Confirmed live: the success toast ("The department has been assigned to the ticket.") and
    // the status-timeline entry both update correctly, but the combobox/status badge on THIS
    // page can go stale (still shows "Select department" / Open) despite the write having
    // genuinely succeeded server-side. Reload to fetch authoritative state rather than trusting
    // the in-place UI.
    await this.page.getByText('The department has been assigned').waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await this.page.reload();
    // The page renders the string twice — a visually-hidden `<h1 class="sr-only">Ticket Details</h1>`
    // for screen readers plus the visible heading — so a bare getByText() is a strict-mode violation.
    await this.page.getByRole('heading', { name: 'Ticket Details' }).first().waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForTimeout(1000);
  }

  /** PMO step: add a candidate to the shortlist by exact full name. */
  async shortlistEmployee(fullName: string): Promise<void> {
    await this.openComboboxWithOptions(this.employeeCombobox);
    await this.page.getByRole('option', { name: new RegExp(fullName) }).first().click();
    await this.page.getByText('Saving changes').waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    await this.page.waitForTimeout(1000);
  }

  /**
   * PMO step: shortlist whichever candidate the combobox offers first, rather than requiring a
   * hardcoded name (the pool of department employees can change over time). Returns the
   * selected candidate's full name so the caller can use it in later assertions.
   */
  async shortlistFirstAvailableEmployee(): Promise<string> {
    await this.openComboboxWithOptions(this.employeeCombobox);
    const firstOption = this.page.getByRole('option').first();
    const fullName = (await firstOption.innerText()).split('\n')[0].trim();
    await firstOption.click();
    await this.page.getByText('Saving changes').waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    await this.page.waitForTimeout(1000);
    return fullName;
  }

  /** PMO step: mark a shortlisted candidate as the final selection (a radio per row). */
  async markAsFinalSelection(fullName: string): Promise<void> {
    const radio = this.page.locator(`[aria-label="Mark ${fullName} as the final selection"]`);
    await radio.click({ force: true });
    await this.page.waitForTimeout(500);
  }

  /** PMO step: send the finalized selection for TM/EM + PMO dual approval. */
  async sendForApproval(): Promise<void> {
    await this.sendForApprovalBtn.click();
    const dialog = this.page.getByRole('dialog').filter({ hasText: 'Send for approval?' });
    await dialog.getByRole('button', { name: 'Confirm', exact: true }).click();
    await this.page.waitForTimeout(2000);
  }

  /** TM/EM (or PMO) step: approve a ticket in AWAITING_CONFIRMATION. */
  async approve(): Promise<void> {
    await this.approveBtn.click();
    const dialog = this.page.getByRole('dialog').filter({ hasText: 'Approve this ticket?' });
    await dialog.getByRole('button', { name: 'Approve', exact: true }).click();
    await this.page.waitForTimeout(2000);
  }

  async getStatus(): Promise<string> {
    return (await this.statusHeading.innerText()).trim();
  }
}
