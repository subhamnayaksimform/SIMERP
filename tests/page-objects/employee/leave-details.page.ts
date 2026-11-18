import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Leave & Compliance Details (TC-EMPLEV-*) — a brand-new sub-feature added 2026-07-13, sourced
 * entirely from Figma design metadata (no live-DOM confirmation, no prior automation to reuse).
 *
 * GROUNDING RESULT (2026-07-13): this screen was checked against the live app at BASE_URL and
 * CONFIRMED NOT TO EXIST. There is no "Leave"/"Ratings" tab in the Employee sidebar submenu — the
 * live submenu only has Employee Details, Skills, Goals, and Allocation Correction (matches the
 * nav table in CLAUDE.md: EMPDET/EMPSKL/EMPGOL/EMPALC — no EMPLEV). Direct navigation to
 * `/employee/leave` returns an in-app "404 – Page Not Found" screen. The only place "Leave &
 * Status" text appears live is as an accordion section LABEL inside the Employee Details
 * Advanced Filter panel (a filter criterion on the employee grid, not a standalone screen with
 * its own table/columns/rows as designed here).
 *
 * This is a Figma design-ahead feature with no live implementation yet — every locator below is
 * consequently unreachable by construction. The class is kept only so already-generated code
 * compiles; do not add real assertions against it. Corresponding specs under
 * tests/e2e/employee/leave-details/*.spec.ts use `test.skip()` with this same reasoning instead
 * of timing out.
 */
export class LeaveDetailsPage extends BasePage {
  /** Tab strip shared by Employee / Leave / Ratings within the same shell. Unverified Selector. */
  readonly employeeTab: Locator;
  readonly leaveTab: Locator;
  readonly ratingsTab: Locator;

  readonly searchInput: Locator;
  readonly table: Locator;
  readonly statusColumnHeader: Locator;
  readonly reasonColumnHeader: Locator;
  readonly dateColumnHeader: Locator;
  readonly daysColumnHeader: Locator;
  readonly nextPageBtn: Locator;
  readonly previousPageBtn: Locator;

  /** Scoped-view triggers — "PIP/Ongoing" and "Notice Period" — filter the same table by Status. */
  readonly pipOngoingScopedViewTrigger: Locator;
  readonly noticePeriodScopedViewTrigger: Locator;

  constructor(page: Page) {
    super(page);
    this.employeeTab = page.getByRole('tab', { name: /^employee$|employee details/i })
      .or(page.getByRole('button', { name: /^employee$/i }));
    this.leaveTab = page.getByRole('tab', { name: /leave/i })
      .or(page.getByRole('button', { name: /leave & compliance|leave details/i }));
    this.ratingsTab = page.getByRole('tab', { name: /ratings/i })
      .or(page.getByRole('button', { name: /^ratings$/i }));

    // Placeholder unconfirmed — mirrors the shared-shell search input pattern used on Employee Details.
    this.searchInput = page.getByPlaceholder(/name, email, or project|search/i);
    this.table = page.getByRole('grid').first().or(page.locator('table').first());
    // Column headers use the exact verbatim strings from the requirement (AC: table columns).
    this.statusColumnHeader = page.locator('th').filter({ hasText: 'Status' }).first();
    this.reasonColumnHeader = page.locator('th').filter({ hasText: 'Reason' }).first();
    this.dateColumnHeader = page.locator('th').filter({ hasText: 'Date' }).first();
    this.daysColumnHeader = page.locator('th').filter({ hasText: 'Days' }).first();
    this.nextPageBtn = page.getByRole('button', { name: 'Next page' });
    this.previousPageBtn = page.getByRole('button', { name: 'Previous page' });

    this.pipOngoingScopedViewTrigger = page.getByRole('button', { name: /pip\s*\/\s*ongoing/i })
      .or(page.getByRole('tab', { name: /pip\s*\/\s*ongoing/i }));
    this.noticePeriodScopedViewTrigger = page.getByRole('button', { name: /notice period/i })
      .or(page.getByRole('tab', { name: /notice period/i }));
  }

  /**
   * Navigate to Leave & Compliance Details. CONFIRMED NOT FOUND LIVE (2026-07-13) — see class
   * doc comment. Kept fast (short timeouts) since the tab/table are known to never appear: the
   * Employee sidebar submenu never renders a "Leave" item and `/employee/leave` always resolves
   * to the app's in-app 404 screen. Callers should follow this with
   * `test.skip(!(await leavePage.table.isVisible().catch(() => false)), '<reason>')`.
   */
  async navigateToLeaveDetails(): Promise<void> {
    await this.page.goto('/employee', { waitUntil: 'domcontentloaded' });
    const tabVisible = await this.leaveTab.isVisible({ timeout: 2000 }).catch(() => false);
    if (tabVisible) {
      await this.leaveTab.click();
    } else {
      await this.page.goto('/employee/leave', { waitUntil: 'domcontentloaded' }).catch(() => {});
    }
    await this.table.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  }

  getDataRows(): Locator {
    return this.table.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') });
  }

  getStatusCell(row: Locator): Locator {
    return row.getByRole('cell').first();
  }

  getReasonCell(row: Locator): Locator {
    return row.getByRole('cell').nth(1);
  }

  getDateCell(row: Locator): Locator {
    return row.getByRole('cell').nth(2);
  }

  getDaysCell(row: Locator): Locator {
    return row.getByRole('cell').nth(3);
  }

  getEmptyState(): Locator {
    return this.page.getByText(/no (leave|records|results) found|no data/i).first();
  }

  async openPipOngoingScopedView(): Promise<boolean> {
    const visible = await this.pipOngoingScopedViewTrigger.isVisible().catch(() => false);
    if (visible) {
      await this.pipOngoingScopedViewTrigger.click();
      await this.table.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    }
    return visible;
  }

  async openNoticePeriodScopedView(): Promise<boolean> {
    const visible = await this.noticePeriodScopedViewTrigger.isVisible().catch(() => false);
    if (visible) {
      await this.noticePeriodScopedViewTrigger.click();
      await this.table.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    }
    return visible;
  }

  /**
   * "Employee Past Leaves" — a separately-titled screen expected to share identical columns
   * with Leave & Compliance Details (TC-EMPLEV-008). Unverified Selector — trigger not confirmed.
   */
  async navigateToEmployeePastLeaves(): Promise<boolean> {
    const trigger = this.page.getByRole('link', { name: /employee past leaves/i })
      .or(this.page.getByRole('button', { name: /employee past leaves/i }));
    const visible = await trigger.isVisible().catch(() => false);
    if (visible) {
      await trigger.click();
      await this.table.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    }
    return visible;
  }

  async sortByDays(): Promise<void> {
    await this.daysColumnHeader.click();
    await this.table.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  }

  async getAllStatusTexts(): Promise<string[]> {
    const rows = this.getDataRows();
    const count = await rows.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await this.getStatusCell(rows.nth(i)).textContent()) ?? '').trim());
    }
    return texts;
  }

  async getAllDaysTexts(): Promise<string[]> {
    const rows = this.getDataRows();
    const count = await rows.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await this.getDaysCell(rows.nth(i)).textContent()) ?? '').trim());
    }
    return texts;
  }
}
