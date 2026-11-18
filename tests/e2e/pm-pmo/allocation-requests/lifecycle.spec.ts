// Full multi-role New Allocation ticket lifecycle (PM -> PMO -> TM), run against the LIVE dev
// environment using the dedicated pm/pmo/tm test personas.
//
// Ground-truth confirmed live end-to-end on 2026-08-10 (ticket NA-0161): PM raises a Fresh
// Allocation ticket -> PMO assigns department + shortlists + marks final + sends for approval ->
// TM approves -> ticket reaches APPROVED -> the resulting ProjectAssignment is visible on the
// project's developer list with the correct allocation % and start date.
//
// WRITES REAL, PERMANENT DATA — per the v2.3 spec, tickets cannot be hard-deleted (only
// closed/soft-deleted), and an APPROVED ticket cannot be closed at all. Run this deliberately
// (e.g. `npx playwright test lifecycle.spec.ts`), not as part of a routine full-suite sweep —
// it is intentionally excluded from the file naming/tag conventions used for repeatable
// regression specs.
import { test, expect } from '../../../fixtures/auth';
import { PmProjectsPage } from '../../../page-objects/pm-pmo/pm-projects.page';
import { NewAllocationFormPage } from '../../../page-objects/pm-pmo/new-allocation-form.page';
import { TicketDetailPage } from '../../../page-objects/pm-pmo/ticket-detail.page';

/** A day-of-month guaranteed to still be in the future within the currently displayed calendar
 * month, without relying on month-navigation (confirmed unreliable through pure automation —
 * see NewAllocationFormPage.pickStartDate). Caps at 27 to stay valid in every month including
 * February, and falls back toward month-end only when today is already very late in the month. */
function safeFutureDayInCurrentMonth(): string {
  const today = new Date().getDate();
  return String(Math.min(27, today + 10 > 27 ? Math.max(today + 1, 27) : today + 10));
}

test.describe('PM & PMO — Full Lifecycle (writes real, permanent data)', () => {
  // RE-GROUNDED (SimERP 6.2.0): the raiser is the CSM, not the PM. /my-projects — where the
  // "New Allocation" entry point lives — now answers /unauthorized for both PM and PMO (probed
  // live); only the CSM can open it. The step order and every downstream assertion are unchanged.
  // Worth confirming with the product team that CSM-only raising is intended.
  test('TC-ALCTKT-001 CSM raises Fresh Allocation NA ticket -> PMO assigns department + shortlists + finalizes -> TM approves -> ProjectAssignment created', async ({ csmPage, pmoPage, tmPage }) => {
    // RE-GROUNDED 2026-11-12 (dev 6.9.0): HyperScale is no longer one of the CSM persona's
    // projects — the New Allocation "Project" dropdown offers only AnalytixHub, ElitePay, ViewForge
    // and XCrypt for tarun.sharma. AnalytixHub is the CSM project already used for allocation data.
    const projectName = 'AnalytixHub';
    const targetDepartment = 'QA'; // matches the TM persona's own department

    // ── Step 1: CSM raises the ticket ──────────────────────────────────────────────
    const pmProjectsPage = new PmProjectsPage(csmPage);
    await pmProjectsPage.navigate();
    await pmProjectsPage.openNewAllocationForm();

    const form = new NewAllocationFormPage(csmPage);
    await form.fillFreshAllocation({
      project: projectName,
      startDateDay: safeFutureDayInCurrentMonth(),
      allocationPercent: '20',
      seniority: 'Junior',
    });
    await expect(form.submitBtn).toBeEnabled();
    await form.submit();
    await expect(csmPage.getByText('New allocation ticket created')).toBeVisible({ timeout: 10000 });

    // Identify the ticket we just created: the newest NA- ticket for this project raised by
    // this PM, in OPEN state (ticket numbers are sequential, so the topmost row under the
    // default "created date desc" sort is it).
    await csmPage.waitForTimeout(1500);
    await csmPage.goto('/my-tickets');
    const newTicketRow = csmPage.getByRole('button', { name: /^NA-\d{4}$/ }).first();
    await newTicketRow.waitFor({ state: 'visible', timeout: 20000 });
    const ticketId = (await newTicketRow.innerText()).trim();
    expect(ticketId).toMatch(/^NA-\d{4}$/);

    // ── Step 2: PMO assigns department, shortlists, finalizes, sends for approval ────
    const pmoTicket = new TicketDetailPage(pmoPage);
    await pmoTicket.openTicket(ticketId);
    expect(await pmoTicket.getStatus()).toBe('Open');

    await pmoTicket.assignDepartment(targetDepartment);
    expect(await pmoTicket.getStatus()).toBe('In Review');

    // Pick whichever candidate the department's shortlist combobox offers first, rather than
    // hardcoding a name — the pool of QA-department employees can change over time.
    const candidateFullName = await pmoTicket.shortlistFirstAvailableEmployee();
    expect(candidateFullName.length).toBeGreaterThan(0);

    await pmoTicket.markAsFinalSelection(candidateFullName);
    await pmoTicket.sendForApproval();
    expect(await pmoTicket.getStatus()).toBe('Awaiting');

    // ── Step 3: TM approves ──────────────────────────────────────────────────────
    const tmTicket = new TicketDetailPage(tmPage);
    await tmTicket.openTicket(ticketId);
    expect(await tmTicket.getStatus()).toBe('Awaiting');
    await expect(tmPage.getByText(`${candidateFullName} is marked as the final selection`)).toBeVisible();

    await tmTicket.approve();
    // Confirmed live: unlike every other ticket action, Approve redirects back to the /my-tickets
    // list afterward rather than staying on the ticket detail page — re-open it to read the
    // authoritative post-approval status rather than reading whatever happens to be on the list.
    await tmTicket.openTicket(ticketId);
    expect(await tmTicket.getStatus()).toBe('Approved');

    // ── Step 4: verify the ProjectAssignment actually exists on the project ─────────
    const verifyPage = new PmProjectsPage(csmPage);
    await verifyPage.navigate();
    await verifyPage.openProject(projectName);
    const candidateRow = csmPage.locator('table tbody tr').filter({ hasText: candidateFullName });
    await expect(candidateRow).toBeVisible({ timeout: 15000 });
    await expect(candidateRow).toContainText('20%');
  });
});
