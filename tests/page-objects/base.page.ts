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
   * Get toast/notification message
   */
  getToast(): Locator {
    return this.page.getByRole('status');
  }

  /**
   * Get success toast message
   */
  getSuccessToast(): Locator {
    return this.page.getByRole('status').filter({ hasText: /success|saved|created|updated|deleted/i });
  }

  /**
   * Get error toast message
   */
  getErrorToast(): Locator {
    return this.page.getByRole('status').filter({ hasText: /error|failed|invalid/i });
  }

  /**
   * Wait for toast to disappear
   */
  async waitForToastToDisappear(): Promise<void> {
    await this.getToast().waitFor({ state: 'hidden', timeout: 5000 });
  }

  /**
   * Get confirmation dialog
   */
  getConfirmDialog(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: /confirm|delete|warning/i });
  }

  /**
   * Click confirm button in dialog
   */
  async confirmAction(): Promise<void> {
    await this.page.getByRole('button', { name: /confirm|yes|ok|delete/i }).click();
  }

  /**
   * Click cancel button in dialog
   */
  async cancelAction(): Promise<void> {
    await this.page.getByRole('button', { name: /cancel|no/i }).click();
  }

  /**
   * Get validation error message for a field
   */
  getFieldError(fieldName: string): Locator {
    // TODO: Update selector once data-testid pattern is confirmed
    return this.page.locator(`[aria-describedby*="${fieldName}"] + .error-message, .field-error-${fieldName}`);
  }
}
