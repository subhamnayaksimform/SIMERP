import { APIResponse, Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Employee Certifications — grounded live on dev 6.4.2 (2026-10-14), re-grounded on 6.5.0 after
 * SI4-T1559 (2026-10-23: certificate types, Edit, Exam Email, Recently Resigned). No FRD exists;
 * behaviour and wording come from the live UI, the app's UI strings and the T1559 commits.
 *
 * Route `/employee/certifications` with `?tab=` organisation | new-joiners | recently-resigned.
 *  - My Certificate:     own certs, each row has View proof + Edit. Plain employees see ONLY this.
 *  - Organisation Level: KPI cards + catalogue (title × partnership). Admin, PM, TM (dept-scoped).
 *  - New Joiners List / Recently Resigned: Admin / Program Owners only.
 *  - Holders page:       `/employee/certifications/holders?partnershipId=&title=`.
 *
 * Add / Edit Certification share one right-side drawer. Add: Partnership → Certificate (a certificate
 * type from that partnership's list) → dates → proof → optional Exam Email. A STANDARD type pre-fills
 * Expire Date from its validity (editable, capped by the calendar); a NEVER_EXPIRES type replaces the
 * field with "This certificate never expires.". Edit locks Partnership and Certificate.
 * 6.9.0 (SI4-T1685, 13/11): Delete exists (soft, reason required, 5-min Undo by the deleter only) and
 * Export CSV on every tab. Organisation Level opens as a flat list (one row per certificate); the old
 * catalogue (title × partnership with Employees / Active / Expired counts) is now "Group by Certificate":
 * a band row per certificate followed by its holder rows — `readCatalogue()` rebuilds the counts from them.
 * Department is a multi-select column filter (`departmentIds`). Form labels: "Certification - Exam Code",
 * "Expiry Date", "Badge link"; Exam Email is required on Add and can't be cleared on Edit.
 * Tests still only save by editing the QA-E2E records and must restore them.
 *
 * API (cookie auth, separate origin) `/api/v1/certifications/...` — list endpoints only accept
 * limit = 100 | 200 | 300 (anything else is 400).
 */
export class CertificationsPage extends BasePage {
  static readonly ROUTE = '/employee/certifications';
  static readonly API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

  readonly addButton: Locator;
  readonly tabs: Locator;
  readonly search: Locator;
  readonly table: Locator;
  readonly rows: Locator;
  readonly drawer: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.getByRole('button', { name: 'Add Certification', exact: true });
    this.tabs = page.getByRole('tab');
    this.search = page.getByRole('searchbox');
    this.table = page.getByRole('table').first();
    this.rows = this.table.locator('tbody tr');
    // 6.9.0 (seen 16/11): the edit drawer is titled "Update Certification" (was "Edit Certification").
    this.drawer = page.getByRole('dialog', { name: /^(Add|Edit|Update) Certification$/ });
  }

  async open(tab?: 'organisation' | 'new-joiners' | 'recently-resigned', extra = ''): Promise<void> {
    const qs = [tab ? `tab=${tab}` : '', extra].filter(Boolean).join('&');
    await this.goto(CertificationsPage.ROUTE + (qs ? `?${qs}` : ''));
    await this.table.or(this.page.getByText('No certifications found')).first().waitFor();
  }

  tab(name: 'My Certificate' | 'Organisation Level' | 'New Joiners List' | 'Recently Resigned'): Locator {
    return this.page.getByRole('tab', { name, exact: true });
  }

  /** Header names include their sort/filter buttons ("Status Filter by Status"), so match the prefix. */
  header(name: string): Locator {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.table.getByRole('columnheader', { name: new RegExp(`^${escaped}( |$)`) });
  }

  /** Rows whose cell reads exactly `text` (row textContent runs cells together, so no word matching). */
  rowsWithCell(text: string): Locator {
    return this.rows.filter({ has: this.page.getByRole('cell', { name: text, exact: true }) });
  }

  /** The 'Showing x - y of N results' total, or 0 when the empty state is shown. */
  async footerTotal(): Promise<number> {
    const footer = this.page.getByText(/Showing \d+ - \d+ of \d+ results/);
    if (!(await footer.isVisible().catch(() => false))) return 0;
    return Number((await footer.innerText()).match(/of (\d+)/)![1]);
  }

  // ── Organisation Level ────────────────────────────────────────────────────
  get stats(): Locator {
    return this.page.getByLabel('Certification summary');
  }

  /** KPI cards as numbers (cards render small values zero-padded, e.g. "06"). */
  async readStats(): Promise<{ total: number; active: number; expired: number; needAttention: number }> {
    await this.stats.waitFor();
    const t = await this.stats.innerText();
    const num = (label: string) => Number(t.match(new RegExp(`${label}\\s*\\n?\\s*(\\d+)`))![1]);
    return { total: num('Total certifications'), active: num('Active'), expired: num('Expired'), needAttention: num('Need Attention') };
  }

  /** Catalogue rows as { title, partnership, employees, active, expired } (blank count = 0). */
  /**
   * Per-certificate counts from Organisation Level → Group by Certificate (switches the view if needed).
   * A band row (one cell: "<title>\n<partnership>") starts each group; the holder rows under it carry
   * Status in the 5th cell. Groups render expanded.
   */
  async readCatalogue(): Promise<{ title: string; partnership: string; employees: number; active: number; expired: number }[]> {
    if (!/[?&]groupBy=certificate/.test(this.page.url())) {
      await this.groupBy('Certificate');
    }
    await expect(this.page.getByRole('button', { name: /^Show or hide the holders of / }).first()).toBeVisible();
    return this.rows.evaluateAll(trs => {
      const groups: { title: string; partnership: string; employees: number; active: number; expired: number }[] = [];
      for (const tr of trs) {
        const td = Array.from(tr.querySelectorAll('td')).map(c => (c as HTMLElement).innerText.trim());
        if (td.length === 1) {
          const [title, partnership = ''] = td[0].split('\n').map(x => x.trim());
          groups.push({ title, partnership, employees: 0, active: 0, expired: 0 });
        } else if (groups.length) {
          const g = groups[groups.length - 1];
          g.employees += 1;
          if (td[4] === 'Active') g.active += 1;
          if (td[4] === 'Expired') g.expired += 1;
        }
      }
      return groups;
    });
  }

  /** Organisation Level "Group by" menu. */
  async groupBy(option: 'None' | 'Certificate' | 'Employee'): Promise<void> {
    await this.page.getByRole('button', { name: 'Group certifications by' }).click();
    await this.page.getByRole('menuitemradio', { name: option }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchFor(text: string): Promise<void> {
    await this.search.fill(text);
    await this.page.waitForLoadState('networkidle');
  }

  /** Department is a multi-select column filter: tick each name, then Save. */
  async pickDepartment(...names: string[]): Promise<void> {
    await this.page.getByRole('button', { name: 'Filter by Department' }).click();
    const popover = this.page.getByRole('dialog').filter({ has: this.page.getByRole('checkbox') }).last();
    for (const name of names) await popover.getByRole('checkbox', { name, exact: true }).check();
    await popover.getByRole('button', { name: 'Save' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async columnFilterOptions(column: 'Partnership' | 'Status' | 'Department'): Promise<string[]> {
    await this.page.getByRole('button', { name: `Filter by ${column}` }).click();
    const popover = this.page.locator('[data-radix-popper-content-wrapper]').last();
    await popover.waitFor();
    const lines = (await popover.innerText()).split('\n').map(s => s.trim()).filter(Boolean);
    await this.page.keyboard.press('Escape');
    return lines.filter(l => ![column, 'Clear', 'Save', 'Close'].includes(l));
  }

  // ── Add / Edit Certification drawer ───────────────────────────────────────
  get partnership(): Locator { return this.drawer.getByRole('combobox', { name: 'Partnership' }); }
  get certificate(): Locator { return this.drawer.getByRole('combobox', { name: 'Certification - Exam Code' }); }
  get issueDate(): Locator { return this.drawer.getByRole('button', { name: 'Issue Date' }); }
  /** Labelled "Expiry Date" since 6.9.0 (was "Expire Date"); the getter keeps its old name. */
  get expireDate(): Locator { return this.drawer.getByRole('button', { name: 'Expiry Date' }); }
  /** Labelled "Badge link" since 6.9.0 (was "Proof of Certification"). */
  get proofUrl(): Locator { return this.drawer.getByRole('textbox', { name: 'Badge link' }); }
  get dropZone(): Locator { return this.drawer.getByRole('button', { name: 'Or drop your certificate badge file here' }); }
  get proofFile(): Locator { return this.drawer.locator('input[type=file]'); }
  get examEmail(): Locator { return this.drawer.getByRole('textbox', { name: 'Exam Email' }); }
  get save(): Locator { return this.drawer.getByRole('button', { name: /^Save (Certification|Changes)$/ }); }
  get onBehalf(): Locator { return this.drawer.getByRole('switch', { name: 'Adding on Behalf of another employee' }); }

  /** Row action on My Certificate, named after the certificate title. */
  deleteButton(title: string): Locator {
    return this.page.getByRole('button', { name: `Delete ${title}`, exact: true });
  }

  editButton(title: string): Locator {
    return this.page.getByRole('button', { name: `Edit ${title}`, exact: true });
  }

  async openDrawer(): Promise<void> {
    await this.addButton.click();
    await this.drawer.waitFor();
  }

  /** Opens Edit for one of the caller's own certificates and waits for its stored values to load. */
  async openEdit(title: string): Promise<void> {
    await this.editButton(title).click();
    await this.drawer.waitFor();
    await expect(this.issueDate).not.toHaveText('dd/mm/yyyy');
  }

  async choosePartnership(name: string): Promise<void> {
    await this.partnership.click();
    await this.page.getByRole('option', { name, exact: true }).click();
    await this.page.getByRole('listbox').waitFor({ state: 'hidden' });
  }

  /** Options read "<title>" or "<title> · <Level>", so match the title prefix. */
  async chooseCertificate(title: string): Promise<void> {
    await expect(this.certificate).toBeEnabled();
    await this.certificate.click();
    const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    await this.page.getByRole('option', { name: new RegExp(`^${escaped}( · .*)?$`) }).click();
    await this.page.getByRole('listbox').waitFor({ state: 'hidden' });
  }

  async choose(partnership: string, certificate: string): Promise<void> {
    await this.choosePartnership(partnership);
    await this.chooseCertificate(certificate);
  }

  /** Opens a date picker. The first click occasionally lands while the previous popover is closing. */
  async openCalendar(field: Locator): Promise<Locator> {
    const grid = this.page.getByRole('grid');
    await expect(async () => {
      if (!(await grid.isVisible())) await field.click();
      await expect(grid).toBeVisible({ timeout: 1000 });
    }).toPass({ timeout: 8000 });
    return grid;
  }

  /**
   * Picks a day by its accessible name, e.g. /^Today/ or "Monday, October 12th, 2026" (must be in the
   * shown month). The calendar re-renders while it opens, so the click is retried until the field changes.
   */
  async pickDate(field: Locator, dayLabel: string | RegExp): Promise<void> {
    const before = await field.innerText();
    const grid = this.page.getByRole('grid');
    await expect(async () => {
      if (!(await grid.isVisible())) await field.click();
      await grid.getByRole('button', { name: dayLabel }).click({ timeout: 2000 });
      await expect(field).not.toHaveText(before, { timeout: 2000 });
    }).toPass({ timeout: 20000 });
    await grid.waitFor({ state: 'hidden' });
  }

  /** Day buttons of the open calendar as { day: 'dd/mm/yyyy', disabled }. */
  async calendarDays(): Promise<{ day: string; disabled: boolean }[]> {
    return this.page.getByRole('grid').locator('button[data-day]').evaluateAll(bs =>
      bs.map(b => ({ day: b.getAttribute('data-day') || '', disabled: (b as HTMLButtonElement).disabled })));
  }

  fieldError(text: string | RegExp): Locator {
    return this.drawer.getByText(text);
  }

  // ── API (same cookies as the page) ────────────────────────────────────────
  api(path: string): string {
    return `${CertificationsPage.API_BASE}/api/v1/certifications${path}`;
  }

  async apiGet(path: string): Promise<APIResponse> {
    return this.page.request.get(this.api(path), { failOnStatusCode: false });
  }

  /** POST a certification as multipart, exactly like the drawer does. Only use with payloads the server must reject. */
  async apiCreate(fields: Record<string, string>): Promise<APIResponse> {
    return this.page.request.post(this.api(''), { multipart: fields, failOnStatusCode: false });
  }

  /**
   * PATCH (edit) a certification as multipart. Playwright drops empty multipart values, so send ' '
   * to clear Exam Email (the API trims it to null). Callers must restore what they change.
   */
  async apiPatch(publicId: string, fields: Record<string, string>): Promise<APIResponse> {
    return this.page.request.patch(this.api(`/${publicId}`), { multipart: fields, failOnStatusCode: false });
  }

  /** The caller's own certificate (from /mine) with the given title. */
  async mine(title: string): Promise<{ publicId: string; issueDate: string; expiryDate: string | null; proofUrl: string; examEmail: string | null; status: string }> {
    const body = await (await this.apiGet('/mine?limit=100')).json();
    const hit = body.data.items.find((i: { title: string }) => i.title === title);
    if (!hit) throw new Error(`Own certification "${title}" not found for this account`);
    return hit;
  }

  async certificateTypes(): Promise<{ publicId: string; title: string; expirationType: string; validityValue: number | null; validityUnit: string | null; level: string | null; partnership: { name: string } }[]> {
    return (await (await this.apiGet('/types?limit=300')).json()).data.items;
  }

  async certificateTypeId(partnership: string, title: string): Promise<string> {
    const hit = (await this.certificateTypes()).find(t => t.partnership.name === partnership && t.title === title);
    if (!hit) throw new Error(`Certificate type "${partnership} / ${title}" not found on this environment`);
    return hit.publicId;
  }

  async partnershipId(name: string): Promise<string> {
    const body = await (await this.apiGet('/partnerships?limit=300&sortBy=name&sortOrder=asc')).json();
    const hit = (body.data.items as { publicId: string; name: string }[]).find(p => p.name === name);
    if (!hit) throw new Error(`Partnership "${name}" not found on this environment`);
    return hit.publicId;
  }
}
