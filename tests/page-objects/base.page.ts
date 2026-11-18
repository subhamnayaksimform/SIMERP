import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Wait for page to be fully loaded
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to a specific path
   */
  async goto(path: string): Promise<void> {
    await this.page.goto(path);
    await this.waitForPageLoad();
  }

  /**
   * A screen's real, visible page heading.
   *
   * Ground-truth confirmed live on SimERP 6.2.0: the app shell renders every page title TWICE —
   * a visually-hidden `<h1 class="sr-only">Dashboard</h1>` for screen readers plus the styled,
   * visible `<h1>` — so a plain `getByRole('heading', { name })` matches 2 elements and every
   * assertion on it dies with a strict-mode violation (hit by TC-DASH-001/013, TC-UTLPRI-001 and
   * anything else that waits on a page heading).
   *
   * `filter({ visible: true })` does NOT disambiguate these: the sr-only heading is clipped to a
   * 1x1 box, which Playwright still counts as visible (probed). Excluding the `sr-only` class is
   * what actually leaves exactly one element.
   */
  pageHeading(name: string | RegExp, level = 1): Locator {
    return this.page.getByRole('heading', { name, level }).and(this.page.locator(':not(.sr-only)')).first();
  }

  /**
   * Get toast/notification message.
   *
   * Ground-truth confirmed live (via a real Goals create-goal probe): toasts render through a
   * Sonner-style `<ol class="toaster group"><li>...</li></ol>` list with NO `role="status"` or
   * `role="alert"` on the toast itself — only an ancestor `<section aria-live="polite">` carries
   * live-region semantics. `getByRole('status')` never matched any real toast; it happened to
   * match an unrelated pagination summary label ("Showing 1 - 73 of 73 results") on the Goals
   * page, which is why toast assertions failed with "element(s) not found" rather than a
   * false-positive. Scope by the toaster container instead of a role that isn't actually used.
   */
  getToast(): Locator {
    return this.page.locator('ol.toaster li, [data-sonner-toast]').first()
      .or(this.page.getByRole('status'))
      .or(this.page.getByRole('alert'));
  }

  /**
   * Get success toast message
   */
  getSuccessToast(): Locator {
    return this.page.locator('ol.toaster li, [data-sonner-toast]').filter({ hasText: /success|saved|created|updated|deleted/i }).first()
      .or(this.page.getByRole('status').filter({ hasText: /success|saved|created|updated|deleted/i }))
      .or(this.page.getByRole('alert').filter({ hasText: /success|saved|created|updated|deleted/i }));
  }

  /**
   * Get error toast message
   */
  getErrorToast(): Locator {
    return this.page.locator('ol.toaster li, [data-sonner-toast]').filter({ hasText: /error|failed|invalid/i }).first()
      .or(this.page.getByRole('status').filter({ hasText: /error|failed|invalid/i }))
      .or(this.page.getByRole('alert').filter({ hasText: /error|failed|invalid/i }));
  }

  /**
   * Wait for toast to disappear
   */
  async waitForToastToDisappear(): Promise<void> {
    await this.getToast().waitFor({ state: 'hidden', timeout: 5000 });
  }

  /**
   * Get confirmation dialog.
   *
   * Ground-truth confirmed live: the real Delete-Goal confirmation dialog uses
   * `role="alertdialog"` ("Delete Goal / Removing this goal will also remove it from the
   * employees it is currently assigned to. Do you want to continue? / No / Delete") — `dialog`
   * and `alertdialog` are distinct ARIA roles; `getByRole('dialog')` alone never matches an
   * `alertdialog` element. `confirmAction()`/`cancelAction()`'s button-name regexes already cover
   * this dialog's real "Delete"/"No" button labels, so only the container role needed fixing.
   */
  getConfirmDialog(): Locator {
    return this.page.getByRole('alertdialog').or(this.page.getByRole('dialog')).filter({ hasText: /confirm|delete|warning|continue/i });
  }

  /**
   * A button inside the open confirmation dialog.
   *
   * Ground-truth confirmed live: the unscoped `getByRole('button', { name: /cancel|no/i })` used
   * before matched every Sonner toast's "Close notification" button too ("notification" contains
   * "no"), so a confirm/cancel after any toast died with "strict mode violation ... resolved to 3
   * elements" (TC-EMPGOL-093). Scope to the dialog and anchor the names.
   */
  protected async clickDialogButton(name: RegExp): Promise<void> {
    const scoped = this.getConfirmDialog().getByRole('button', { name }).first();
    if (await scoped.isVisible({ timeout: 5_000 }).catch(() => false)) {
      await scoped.click();
      return;
    }
    // No dialog on screen — fall back to a page-level button, but never to a toast's own
    // "Close notification" control (`data-close-button`), which is what made this ambiguous.
    await this.page.getByRole('button', { name })
      .and(this.page.locator(':not([data-close-button])'))
      .first().click();
  }

  /**
   * Click confirm button in dialog
   */
  async confirmAction(): Promise<void> {
    await this.clickDialogButton(/^(confirm|yes|ok|delete)$/i);
  }

  /**
   * Click cancel button in dialog
   */
  async cancelAction(): Promise<void> {
    await this.clickDialogButton(/^(cancel|no)$/i);
  }

  /**
   * Choose an option from a shadcn/Radix combobox (the `cmdk` popover used across SIM ERP).
   *
   * Ground-truth confirmed live on the Add Competency panel: clicking an option in the full,
   * unfiltered list fails with "element was detached from the DOM, retrying" until the 15s action
   * timeout — `cmdk` re-renders its list as it measures/filters, so a node resolved from the open
   * list is stale by the time Playwright tries to click it. Typing into the popover's own search
   * input first narrows the list to a handful of items, after which the click lands in ~60ms.
   *
   * Matching is EXACT-first: department lists contain "MANAGEMENT", "ENGINEERING MANAGEMENT" and
   * "PROJECT MANAGEMENT", so a substring regex silently selects the wrong record.
   *
   * @returns the chosen option's label, or null if the control or a usable option isn't there.
   */
  protected async chooseComboboxOption(trigger: Locator, name?: string): Promise<string | null> {
    if (!(await trigger.isVisible().catch(() => false))) return null;
    await trigger.click();

    const options = this.page.getByRole('option');
    const search = this.page.locator('[data-slot="command-input"], [cmdk-input]').first();

    // The popover mounts asynchronously — wait for either half of it before deciding what to do.
    await Promise.race([
      options.first().waitFor({ state: 'visible', timeout: 5_000 }),
      search.waitFor({ state: 'visible', timeout: 5_000 }),
    ]).catch(() => {});

    if (name && (await search.isVisible().catch(() => false))) {
      await search.fill(name).catch(() => {});
      await options.first().waitFor({ state: 'visible', timeout: 5_000 }).catch(() => {});
    }

    let target = options.first();
    let label = name ?? null;

    if (name) {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const exact = options.filter({ hasText: new RegExp(`^\\s*${escaped}\\s*$`, 'i') }).first();
      const loose = options.filter({ hasText: new RegExp(escaped, 'i') }).first();
      if (await exact.isVisible({ timeout: 3_000 }).catch(() => false)) target = exact;
      else if (await loose.isVisible({ timeout: 1_000 }).catch(() => false)) target = loose;
      else return this.closeCombobox();
    } else {
      if (!(await target.isVisible({ timeout: 3_000 }).catch(() => false))) return this.closeCombobox();
      label = ((await target.textContent().catch(() => '')) ?? '').trim() || null;
    }

    // One re-resolve retry: even a filtered `cmdk` list can re-render once as it settles. A
    // transient Sonner toast overlapping the option (confirmed live: a stray "warning" toast's
    // `<li data-sonner-toast>` intercepted the click) is a real, if rare, race — force the click
    // as a last resort rather than let an unrelated toast fail an otherwise-correct selection.
    try {
      await target.click({ timeout: 5_000 });
    } catch {
      try {
        await target.click({ timeout: 5_000 });
      } catch {
        await target.click({ timeout: 5_000, force: true });
      }
    }
    return label;
  }

  /** Dismiss an open combobox popover without choosing anything. Always returns null, so callers can `return this.closeCombobox()`. */
  protected async closeCombobox(): Promise<null> {
    await this.page.keyboard.press('Escape').catch(() => {});
    return null;
  }

  /**
   * Get validation error message for a field
   */
  getFieldError(fieldName: string): Locator {
    // TODO: Update selector once data-testid pattern is confirmed
    return this.page.locator(`[aria-describedby*="${fieldName}"] + .error-message, .field-error-${fieldName}`);
  }
}
