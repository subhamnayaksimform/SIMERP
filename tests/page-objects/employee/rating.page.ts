import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Ratings (TC-EMPRAT-*) — a brand-new sub-feature added 2026-07-13, sourced entirely from Figma
 * design metadata (no live-DOM confirmation, no prior automation to reuse).
 *
 * GROUNDING RESULT (2026-07-13): this screen was checked against the live app at BASE_URL and
 * CONFIRMED NOT TO EXIST. There is no "Ratings" tab in the Employee sidebar submenu — the live
 * submenu only has Employee Details, Skills, Goals, and Allocation Correction (matches the nav
 * table in CLAUDE.md: EMPDET/EMPSKL/EMPGOL/EMPALC — no EMPRAT). Direct navigation to
 * `/employee/ratings` returns an in-app "404 – Page Not Found" screen. The only place
 * "Overall Rating"/"AI Rating"/"Communication Rating" text appears live is as accordion-section
 * labels inside the Employee Details Advanced Filter panel (filter criteria on the employee grid,
 * not a standalone screen with its own table/rows/edit-drawer as designed here).
 *
 * This is a Figma design-ahead feature with no live implementation yet — every locator below is
 * consequently unreachable by construction. The class is kept only so already-generated code
 * compiles; do not add real assertions against it. Corresponding specs under
 * tests/e2e/employee/rating/*.spec.ts use `test.skip()` with this same reasoning instead of
 * timing out.
 */
export class RatingPage extends BasePage {
  readonly employeeTab: Locator;
  readonly leaveTab: Locator;
  readonly ratingsTab: Locator;

  readonly searchInput: Locator;
  readonly table: Locator;
  readonly nextPageBtn: Locator;
  readonly previousPageBtn: Locator;

  /** Advanced Filter by Rating side panel trigger. Unverified Selector. */
  readonly advancedFilterByRatingBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.employeeTab = page.getByRole('tab', { name: /^employee$|employee details/i })
      .or(page.getByRole('button', { name: /^employee$/i }));
    this.leaveTab = page.getByRole('tab', { name: /leave/i })
      .or(page.getByRole('button', { name: /leave & compliance|leave details/i }));
    this.ratingsTab = page.getByRole('tab', { name: /ratings/i })
      .or(page.getByRole('button', { name: /^ratings$/i }));

    this.searchInput = page.getByPlaceholder(/name, email, or project|search/i);
    this.table = page.getByRole('grid').first().or(page.locator('table').first());
    this.nextPageBtn = page.getByRole('button', { name: 'Next page' });
    this.previousPageBtn = page.getByRole('button', { name: 'Previous page' });
    this.advancedFilterByRatingBtn = page.getByRole('button', { name: /advanced filter/i });
  }

  /**
   * Navigate to the Ratings tab. CONFIRMED NOT FOUND LIVE (2026-07-13) — see class doc comment.
   * Kept fast (short timeouts) since the tab/table are known to never appear: the Employee
   * sidebar submenu never renders a "Ratings" item and `/employee/ratings` always resolves to
   * the app's in-app 404 screen. Callers should follow this with
   * `test.skip(!(await ratingPage.table.isVisible().catch(() => false)), '<reason>')`.
   */
  async navigateToRatings(): Promise<void> {
    await this.page.goto('/employee', { waitUntil: 'domcontentloaded' });
    const tabVisible = await this.ratingsTab.isVisible({ timeout: 2000 }).catch(() => false);
    if (tabVisible) {
      await this.ratingsTab.click();
    } else {
      await this.page.goto('/employee/ratings', { waitUntil: 'domcontentloaded' }).catch(() => {});
    }
    await this.table.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  }

  getDataRows(): Locator {
    return this.table.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') });
  }

  getEmptyState(): Locator {
    return this.page.getByText(/no (ratings|records|results) found|no data/i).first();
  }

  // ─── Rating category popups (Overall / AI / Communication) — TC-EMPRAT-001, 004, 005, 008, 016 ──

  /**
   * Open the compact anchored rating popup for a given category on a row.
   * Unverified Selector — trigger element (cell/button) not confirmed against live DOM.
   */
  async openRatingPopup(row: Locator, category: 'overall' | 'ai' | 'communication'): Promise<Locator> {
    const label = category === 'ai' ? /ai rating/i : category === 'communication' ? /communication rating/i : /overall rating/i;
    const trigger = row.getByRole('button', { name: label }).or(row.getByRole('cell', { name: label }));
    await trigger.first().click().catch(() => {});
    const popup = this.getRatingPopup();
    await popup.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return popup;
  }

  /** The currently-open rating popup — single input + Cancel/Save. Unverified Selector. */
  getRatingPopup(): Locator {
    return this.page.getByRole('dialog').filter({ hasNot: this.page.getByText(/employee ratings|edit employee/i) })
      .or(this.page.locator('[data-testid="rating-popup"]'))
      .first();
  }

  getRatingPopupInput(popup: Locator): Locator {
    return popup.getByRole('textbox').or(popup.getByRole('spinbutton')).first();
  }

  async fillRatingValue(popup: Locator, value: string): Promise<boolean> {
    const input = this.getRatingPopupInput(popup);
    const visible = await input.isVisible().catch(() => false);
    if (visible) await input.fill(value);
    return visible;
  }

  async saveRatingPopup(popup: Locator): Promise<void> {
    const saveBtn = popup.getByRole('button', { name: /^save$/i });
    if (await saveBtn.isVisible().catch(() => false)) {
      await saveBtn.click();
      await popup.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  async cancelRatingPopup(popup: Locator): Promise<void> {
    const cancelBtn = popup.getByRole('button', { name: /^cancel$/i });
    if (await cancelBtn.isVisible().catch(() => false)) {
      await cancelBtn.click();
      await popup.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  // ─── Advanced Filter by Rating (TC-EMPRAT-002, 006, 011, 012, 028) ──

  getAdvancedFilterByRatingPanel(): Locator {
    return this.page.getByRole('complementary', { name: /advanced filter/i })
      .or(this.page.getByRole('dialog', { name: /advanced filter/i }))
      .first();
  }

  async openAdvancedFilterByRatingPanel(): Promise<void> {
    await this.advancedFilterByRatingBtn.click().catch(() => {});
    await this.getAdvancedFilterByRatingPanel().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
  }

  /** Live result count in the verbatim pattern "<N> results show". Unverified Selector (exact copy per requirement). */
  getFilterResultCountText(panel: Locator): Locator {
    return panel.getByText(/\d+\s*results?\s*show/i);
  }

  async clearAdvancedFilterByRating(panel: Locator): Promise<void> {
    const clearBtn = panel.getByRole('button', { name: /^clear$/i });
    if (await clearBtn.isVisible().catch(() => false)) {
      await clearBtn.click();
      await this.table.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    }
  }

  /** Number of distinct filter-criterion rows currently rendered in the panel (used to detect V1=7 vs V2=9). */
  async getFilterCriteriaCount(panel: Locator): Promise<number> {
    return panel.locator('[role="group"], fieldset, [data-testid="filter-criterion"]').count();
  }

  // ─── Employee Ratings edit drawer (TC-EMPRAT-007, 009, 017, 024, 026) ──

  /** "Action - edit employee - Employee Ratings" drawer — 672px wide, 14 inputs / 3 sections / 2 date pickers. Unverified Selector. */
  getEmployeeRatingsDrawer(): Locator {
    return this.page.getByRole('dialog', { name: /employee ratings/i })
      .or(this.page.locator('[data-testid="employee-ratings-drawer"]'))
      .first();
  }

  async openEmployeeRatingsDrawer(row: Locator): Promise<void> {
    await row.hover();
    const trigger = row.getByRole('button', { name: /edit/i });
    await trigger.first().click().catch(() => {});
    await this.getEmployeeRatingsDrawer().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  }

  getDrawerSections(drawer: Locator): Locator {
    return drawer.locator('[role="group"], fieldset, section').filter({ has: this.page.locator('h2, h3, legend') });
  }

  getDrawerDatePickers(drawer: Locator): Locator {
    return drawer.locator('input[type="date"], [data-testid="date-picker"]');
  }

  async saveEmployeeRatingsDrawer(drawer: Locator): Promise<void> {
    const saveBtn = drawer.getByRole('button', { name: /^save$/i });
    if (await saveBtn.isVisible().catch(() => false)) {
      await saveBtn.click();
      await drawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }
}
