import { APIResponse, Locator, Page } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Employee Working Location (WFO/WFH) — FRD v1.1, grounded live on dev 6.4.1 (2026-10-14).
 *
 * Four placements, all read-only:
 *  - Profile card:   a "Working Location" section on `/profile` and `/employee/:id` (NOT a 5th tab as
 *                    the FRD says) — 7-day strip, 15/30/90-day + Overall rows, "Data as of" label.
 *  - Employee list:  `/employee`, opt-in column toggled from the "Table options" menu (switch, off by
 *                    default); each cell is a button "Working location for <name>" that opens a
 *                    hover popup with the 7-day strip, every window and a "Profile" link.
 *  - Project table:  `/my-projects/:id` (CSM persona on 6.x), always-on column on Active Allocations.
 *  - Dashboard:      `/working-location` — window radios (15/30/90/Overall), KPI row, trend chart,
 *                    "Departments" and "Employees" tables.
 *
 * API (cookie auth, separate origin): `/api/v1/working-location/...`
 *   employees/:id                        → one employee, all windows (404 when out of scope)
 *   list?timeFrame=<5d|15d|30d|3m|6m|all>&employeeIds=… [&projectId=…] (project page sends window=)
 *   employees?window=15d&page=&limit=    → dashboard employee table
 *   overview?window=15d                  → dashboard KPIs, trend, departments
 */

export type WindowKey = '15d' | '30d' | '90d' | 'overall';
export interface WindowStats { wfoPercentage: number | null; wfhPercentage: number | null; daysLogged: number; daysInWindow?: number }
export interface WorkingLocation {
  employeePublicId: string;
  asOfDate: string;
  days: { date: string; status: 'WFO' | 'WFH' | null }[];
  windows: Partial<Record<WindowKey, WindowStats>>;
}
export interface Overview {
  asOfDate: string;
  kpis: {
    companyWfoPercentage: number; companyWfhPercentage: number; wfoThresholdPercentage: number;
    departmentsBelowThreshold: number; departmentsMeetingThreshold: number; totalDepartments: number;
    employeesWithNoData: number;
  };
  trend: { date: string; wfoPercentage: number; wfhPercentage: number }[];
  departments: { publicId: string; name: string; wfoPercentage: number; wfhPercentage: number; [k: string]: unknown }[];
}

export class WorkingLocationPage extends BasePage {
  static readonly DASHBOARD_ROUTE = '/working-location';
  static readonly EMPLOYEE_LIST_ROUTE = '/employee';
  static readonly OWN_PROFILE_ROUTE = '/profile';
  static readonly MY_PROJECTS_ROUTE = '/my-projects';
  // Overridable for a local stack via API_BASE_URL; defaults to dev.
  static readonly API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

  /** Well-known employees on dev (publicIds), used for scope checks. */
  static readonly PEOPLE = {
    punit: '5eed9148-8b5a-4fb4-8331-8d7974568d8f',       // FRONT END, RM Sagar Khanpara
    sagar: '818aa719-2170-486e-bf21-87f4f1e137e6',       // FRONT END, TM
    kashyapEmp: 'dc9224e9-2743-4f94-8444-edb8d634db2e',  // DATA ENGINEERING — the empPage account
    tarunCsm: '4174b8c1-9d89-4b61-bfd7-075924620091',    // CSM — the csmPage account
  };

  readonly section: Locator;
  readonly tableOptions: Locator;
  readonly columnSwitch: Locator;
  readonly timeRange: Locator;
  readonly columnHeader: Locator;
  readonly unauthorized: Locator;

  constructor(page: Page) {
    super(page);
    // The profile card's own <header> holds the "Working Location" heading + "Data as of" label.
    this.section = page.locator('section, div')
      .filter({ has: page.getByRole('heading', { name: 'Working Location', exact: true }) })
      .filter({ has: page.getByRole('heading', { name: 'Last 7 Days (Attendance)' }) })
      .last();
    this.tableOptions = page.getByRole('button', { name: 'Table options' });
    this.columnSwitch = page.getByRole('switch', { name: /working location/i });
    // Employee list labels it "Select time range"; the project page has no aria-label, only its text.
    this.timeRange = page.getByRole('button', { name: 'Select time range' })
      .or(page.getByRole('button', { name: /^(Last \d+ (days|months)|All time)$/ })).first();
    this.columnHeader = page.getByRole('columnheader', { name: /working location/i });
    this.unauthorized = page.getByText(/access denied|you don't have permission/i).first();
  }

  // ─── Navigation ────────────────────────────────────────────────────────────

  async gotoOwnProfile(): Promise<void> {
    await this.goto(WorkingLocationPage.OWN_PROFILE_ROUTE);
  }

  async gotoEmployeeProfile(publicId: string): Promise<void> {
    await this.goto(`/employee/${publicId}`);
  }

  async gotoDashboard(): Promise<void> {
    await this.goto(WorkingLocationPage.DASHBOARD_ROUTE);
  }

  async gotoEmployeeList(): Promise<void> {
    await this.goto(WorkingLocationPage.EMPLOYEE_LIST_ROUTE);
    await this.page.locator('table tbody tr').first().waitFor();
  }

  /** CSM persona: open the first project's detail page. The SPA swaps the URL before the table, so wait on a detail-only header. */
  async gotoFirstProjectDetail(): Promise<void> {
    await this.goto(WorkingLocationPage.MY_PROJECTS_ROUTE);
    await this.page.locator('table tbody tr').first().locator('td').first().getByRole('button').first().click();
    await this.page.getByRole('columnheader', { name: /start date/i }).first().waitFor();
    await this.waitForPageLoad();
  }

  async isAccessDenied(): Promise<boolean> {
    return /\/unauthorized/.test(this.page.url()) || await this.unauthorized.isVisible().catch(() => false);
  }

  // ─── Employee list column ──────────────────────────────────────────────────

  async isColumnEnabledInMenu(): Promise<boolean> {
    await this.tableOptions.click();
    const on = (await this.columnSwitch.getAttribute('aria-checked')) === 'true';
    await this.page.keyboard.press('Escape');
    return on;
  }

  /** Turn the opt-in column on/off; returns the state it was in before, so callers can restore it. */
  async setColumn(on: boolean): Promise<boolean> {
    await this.tableOptions.click();
    const was = (await this.columnSwitch.getAttribute('aria-checked')) === 'true';
    if (was !== on) await this.columnSwitch.click();
    await this.page.keyboard.press('Escape');
    if (on) await this.columnHeader.waitFor();
    await this.waitForPageLoad();
    return was;
  }

  async selectTimeRange(label: string): Promise<void> {
    await this.timeRange.click();
    await this.page.getByRole('menuitem', { name: label, exact: true }).click();
    await this.waitForPageLoad();
  }

  cellButtons(): Locator {
    return this.page.getByRole('button', { name: /^Working location for / });
  }

  cellFor(name: string): Locator {
    return this.page.getByRole('button', { name: `Working location for ${name}`, exact: true }).first();
  }

  /** "<n>% WFO <n>% WFH" as two numbers, read from the split bar's accessible label. */
  async readCell(cell: Locator): Promise<{ wfo: number; wfh: number } | null> {
    const label = await cell.getByRole('img').first().getAttribute('aria-label').catch(() => null);
    const m = label ? /(\d+)% work from office, (\d+)% work from home/i.exec(label) : null;
    return m ? { wfo: Number(m[1]), wfh: Number(m[2]) } : null;
  }

  async rowNames(limit = 25): Promise<string[]> {
    const labels = await this.cellButtons().evaluateAll(bs => bs.map(b => b.getAttribute('aria-label') ?? ''));
    return labels.slice(0, limit).map(l => l.replace(/^Working location for /, ''));
  }

  /** Hover a cell and return the popup. */
  async openPopup(cell: Locator): Promise<Locator> {
    await cell.scrollIntoViewIfNeeded();
    await cell.hover();
    const popup = this.page.locator('[data-radix-popper-content-wrapper]').filter({ hasText: 'Last 7 Days' }).last();
    await popup.waitFor();
    return popup;
  }

  async closePopup(): Promise<void> {
    await this.page.mouse.move(0, 0);
    await this.page.locator('[data-radix-popper-content-wrapper]').filter({ hasText: 'Last 7 Days' }).waitFor({ state: 'hidden' }).catch(() => {});
  }

  async totalResults(): Promise<string> {
    return (await this.page.getByText(/^Showing \d+ - \d+ of \d+ results$/).first().innerText()).trim();
  }

  // ─── Shared rendering (profile card + popup render the same component) ─────

  /** Window rows, e.g. { '15 days': { wfo: 69, wfh: 31, logged: '14/15 days logged' }, Overall: {...} }. */
  async readWindows(scope: Locator): Promise<Record<string, { wfo: number; wfh: number; logged: string }>> {
    const text = (await scope.innerText()).replace(/\r/g, '');
    const out: Record<string, { wfo: number; wfh: number; logged: string }> = {};
    // The profile card prints "<label> <wfo> <wfh> <logged>"; the popup prints "<wfo> <wfh> <label> <logged>".
    const labelFirst = /(15 days|30 days|90 days|Overall)\s+(\d+)% WFO\s+(\d+)% WFH\s+([^\n]*logged)/g;
    const numbersFirst = /(\d+)% WFO\s+(\d+)% WFH\s+(15 days|30 days|90 days|Overall)\s+([^\n]*logged)/g;
    for (let m = labelFirst.exec(text); m; m = labelFirst.exec(text)) out[m[1]] = { wfo: Number(m[2]), wfh: Number(m[3]), logged: m[4].trim() };
    if (Object.keys(out).length) return out;
    for (let m = numbersFirst.exec(text); m; m = numbersFirst.exec(text)) out[m[3]] = { wfo: Number(m[1]), wfh: Number(m[2]), logged: m[4].trim() };
    return out;
  }

  /** The 7 day chips as their tooltip strings, e.g. "Oct 07: Work from home" / "Oct 08: No record". */
  async readDays(scope: Locator): Promise<string[]> {
    const text = await scope.innerText();
    return [...text.matchAll(/([A-Z][a-z]{2} \d{2}): (Work from home|Work from office|No record)/g)].map(m => `${m[1]}: ${m[2]}`);
  }

  async readAsOf(scope: Locator): Promise<string | null> {
    const m = /Data as of (\d{1,2} [A-Z][a-z]{2} \d{4})/.exec(await scope.innerText());
    return m ? m[1] : null;
  }

  // ─── Dashboard ─────────────────────────────────────────────────────────────

  windowRadio(name: '15 Days' | '30 Days' | '90 Days' | 'Overall'): Locator {
    return this.page.getByRole('radio', { name });
  }

  departmentButtons(): Locator {
    return this.page.getByRole('button', { name: /^Open the employee list for / });
  }

  // ─── API (cookie-authenticated via the fixture's storageState) ─────────────

  private api(path: string): string {
    return `${WorkingLocationPage.API_BASE}/api/v1/working-location${path}`;
  }

  /**
   * The saved storageState's short-lived `accessToken` cookie is usually stale by the time an API-only
   * test runs (the SPA silently refreshes it on page load, but `page.request` alone never does), so the
   * first call comes back 401 AUTH_001. Do what the SPA does — POST /auth/refresh once, then retry. The
   * refresh shares the context's cookie jar, so later calls in the same test use the fresh token.
   */
  private async send(method: 'get' | 'post' | 'put' | 'patch' | 'delete', url: string, data?: unknown): Promise<APIResponse> {
    const call = () => this.page.request[method](url, { ...(data === undefined ? {} : { data }), failOnStatusCode: false });
    const first = await call();
    if (first.status() !== 401) return first;
    const refreshed = await this.page.request.post(`${WorkingLocationPage.API_BASE}/api/v1/auth/refresh`, { failOnStatusCode: false });
    return refreshed.ok() ? call() : first;
  }

  async apiEmployee(publicId: string): Promise<APIResponse> {
    return this.send('get', this.api(`/employees/${publicId}`));
  }

  async apiList(timeFrame: string, ids: string[], extra = ''): Promise<APIResponse> {
    return this.send('get', this.api(`/list?timeFrame=${encodeURIComponent(timeFrame)}&employeeIds=${ids.join(',')}${extra}`));
  }

  async apiOverview(window = '15d'): Promise<APIResponse> {
    return this.send('get', this.api(`/overview?window=${encodeURIComponent(window)}`));
  }

  async apiDashboardEmployees(window = '15d', page = 1, limit = 10): Promise<APIResponse> {
    return this.send('get', this.api(`/employees?window=${window}&page=${page}&limit=${limit}`));
  }

  async apiWrite(method: 'post' | 'put' | 'patch' | 'delete', path: string): Promise<APIResponse> {
    return this.send(method, this.api(path), { status: 'WFO', date: '2026-10-13' });
  }

  /** The signed-in user's own publicId — the profile page fetches it from the employees/:id endpoint. */
  async ownPublicId(): Promise<string> {
    const resp = this.page.waitForResponse(r => /\/working-location\/employees\/[0-9a-f-]{36}$/.test(r.url()));
    await this.gotoOwnProfile();
    return (await resp).url().split('/').pop()!;
  }

  static fmtAsOf(iso: string): string {
    const d = new Date(`${iso}T00:00:00Z`);
    return `${d.getUTCDate().toString().padStart(2, '0')} ${d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })} ${d.getUTCFullYear()}`;
  }

  static fmtDay(iso: string): string {
    const d = new Date(`${iso}T00:00:00Z`);
    return `${d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })} ${d.getUTCDate().toString().padStart(2, '0')}`;
  }
}
