import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export interface FreshAllocationInput {
  project: string;
  primaryTechStackIndex?: number; // defaults to first available option
  startDateDay: string; // day-of-month clicked after advancing one month (guarantees a future date)
  allocationPercent: string;
  seniority: 'Junior' | 'Mid Level' | 'Senior' | 'Lead';
}

/**
 * Ground-truth confirmed live (2026-08-10, hardik.trivedi@simformsolutions.com / PM session)
 * against BASE_URL/my-projects/new-allocation. Reached via PmProjectsPage.newAllocationBtn.
 *
 * Field-selector quirks confirmed live (all traced to the same root cause — several controls
 * report an ARIA role of "combobox" even though they render as a plain button, so their
 * *accessible name* per the ARIA name-computation algorithm does not equal their visible text;
 * `getByRole(role, { name: ... })` therefore fails to match while `.filter({ hasText: ... })`
 * (plain textContent match) succeeds):
 * - Project / Request Type / Primary Tech Stack dropdowns are `role="combobox"` — use
 *   `.filter({ hasText })`, not `getByRole(..., { name })`.
 * - "Pick a date" date-picker triggers are plain buttons with the same accessible-name mismatch —
 *   same `.filter({ hasText })` workaround.
 * - Allocation Type (Fixed/Dynamic) has no associated <label> — click the visible text directly;
 *   it toggles the paired radio.
 * - There are TWO rich-text-style fields on this form: "Project Description" (the first
 *   `[contenteditable="true"]` on the page) and "Note for allocation" (last, optional, not
 *   exercised here — do not target contenteditable index 0 for the note, that lands text in the
 *   wrong field).
 * - Richer than the v2.3 spec doc: also has Location Preference + Night Shift Preference fields
 *   not documented there at all.
 */
export class NewAllocationFormPage extends BasePage {
  readonly projectCombobox: Locator;
  readonly requestTypeCombobox: Locator;
  readonly primaryTechStackCombobox: Locator;
  readonly dateButtons: Locator;
  readonly seniorityCombobox: Locator;
  readonly submitBtn: Locator;
  readonly cancelBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.projectCombobox = page.getByRole('combobox').filter({ hasText: 'Select Project' });
    this.requestTypeCombobox = page.getByRole('combobox').filter({ hasText: 'Select request type' });
    this.primaryTechStackCombobox = page.getByRole('combobox').filter({ hasText: 'Select tech stack' });
    this.dateButtons = page.getByRole('button').filter({ hasText: 'Pick a date' });
    this.seniorityCombobox = page.getByRole('combobox').filter({ hasText: 'Select Seniority' });
    this.submitBtn = page.getByRole('button', { name: 'Submit Request' });
    this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
  }

  async selectProject(name: string): Promise<void> {
    await this.projectCombobox.click();
    await this.page.getByRole('option', { name: new RegExp(name, 'i') }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('option', { name: new RegExp(name, 'i') }).click();
  }

  async selectRequestType(type: 'Fresh Allocation' | 'Shadow Developer' | 'PR Reviewer'): Promise<void> {
    await this.requestTypeCombobox.click();
    await this.page.getByRole('option', { name: type }).click();
  }

  /** Selects the Nth primary tech stack option (0-indexed) rather than requiring an exact name. */
  async selectPrimaryTechStack(index = 0): Promise<void> {
    await this.primaryTechStackCombobox.click();
    await this.page.getByRole('option').nth(index).click();
  }

  /**
   * Opens the first ("Pick a date") picker and clicks the given day within the CURRENTLY
   * displayed month (caller must pass a day-of-month safely after today's date, e.g. "25" — do
   * not rely on month-navigation, which proved unreliable through pure automation: clicking the
   * "Go to the Next Month" control immediately after opening the popover intermittently failed
   * to find it at all in headless runs, unlike identical manual/interactive verification).
   */
  async pickStartDate(day: string): Promise<void> {
    await this.dateButtons.first().click();
    const dayCell = this.page.locator('table button', { hasText: new RegExp(`^${day}$`) }).first();
    await dayCell.waitFor({ state: 'visible', timeout: 8000 });
    await dayCell.click({ force: true });
  }

  async selectAllocationType(type: 'Fixed' | 'Dynamic'): Promise<void> {
    await this.page.getByText(type, { exact: true }).click();
  }

  async fillAllocationPercent(value: string): Promise<void> {
    await this.page.locator('input[type="number"], input[inputmode="numeric"]').first().fill(value);
  }

  async selectPreferredSeniority(level: FreshAllocationInput['seniority']): Promise<void> {
    await this.seniorityCombobox.click();
    await this.page.getByRole('option', { name: level }).click();
  }

  /** Fills the full Fresh Allocation form (Request Type + Allocation Type fixed to those values). */
  async fillFreshAllocation(input: FreshAllocationInput): Promise<void> {
    await this.selectProject(input.project);
    await this.page.waitForTimeout(300);
    await this.selectRequestType('Fresh Allocation');
    await this.page.waitForTimeout(300);
    await this.selectPrimaryTechStack(input.primaryTechStackIndex ?? 0);
    await this.page.waitForTimeout(300);
    await this.pickStartDate(input.startDateDay);
    await this.page.waitForTimeout(300);
    await this.selectAllocationType('Fixed');
    await this.page.waitForTimeout(200);
    await this.fillAllocationPercent(input.allocationPercent);
    await this.page.waitForTimeout(200);
    await this.selectPreferredSeniority(input.seniority);
    await this.page.waitForTimeout(300);
  }

  /**
   * Clicking the form's "Submit Request" opens a "Review Allocation Request Details"
   * confirmation dialog with its OWN "Submit" button (matches the v2.3 spec's §8 requirement
   * that every save/approve action shows a confirmation dialog first) — the ticket is only
   * actually created once that dialog's Submit is clicked too.
   */
  async submit(): Promise<void> {
    await this.submitBtn.click();
    const dialog = this.page.getByRole('dialog').filter({ hasText: 'Review Allocation Request Details' });
    await dialog.waitFor({ state: 'visible', timeout: 10000 });
    await dialog.getByRole('button', { name: 'Submit', exact: true }).click();
  }
}
