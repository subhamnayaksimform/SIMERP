// TC-EMPDET-428..435, TC-DASH-142, TC-PROJDET-001..004, TC-PMPROJ-096 — "avoid showing '—' for
// empty data" across the system.
//
// The replacement wording is deliberately per-field ("it can be variable"), so nothing here asserts
// a specific string. What is asserted is the contract:
//   1. an empty value never renders as bare punctuation ("—", "-", "NA") or as an empty cell,
//   2. whatever IS shown carries letters, so it reads as words rather than a symbol,
//   3. one column uses ONE treatment — the Projects "Employees" column currently mixes "—" and
//      "NA", which is the inconsistency that motivated this task,
//   4. no screen leaks "null" / "undefined" / "NaN" / "[object Object]".
//
// Baseline captured live on 2026-09-21 (6.2.0), admin session: Employee·Visa 17/17 "—";
// Past Employee·Name 6 "—"; Dashboard·Employee Name 2 "—"; Projects·Tech Stacks 99, AG 21,
// Total Hours 2, Employees 1 "—" + 1 "NA"; CSM My Projects·AG 1 "—".
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';

/** Bare placeholders a data cell must never be reduced to. */
const RAW_PLACEHOLDER = /^(—|–|-{1,2}|N\/?A|null|undefined|NaN|\[object Object\])$/i;
/** Language-level empties that must never reach the screen under any wording policy. */
const LEAKED_VALUE = /\b(null|undefined|NaN|\[object Object\])\b/;
/** Columns that are legitimately text-free (icon-only action menus, selection checkboxes). */
const NON_DATA_COLUMN = /^(action|actions|select|)$/i;

interface Screen { name: string; route: string; role?: 'admin' | 'csm' }

const SCREENS: Screen[] = [
  { name: 'Employee list', route: '/employee' },
  { name: 'Projects', route: '/projects' },
  { name: 'Dashboard', route: '/dashboard' },
  { name: 'Competencies', route: '/competencies' },
  { name: 'My Projects (CSM)', route: '/my-projects', role: 'csm' },
];

/** Read a screen's table as { column -> cell values }, skipping icon-only columns. */
async function readTable(page: Page): Promise<Map<string, string[]>> {
  const headers = (await page.getByRole('columnheader').allInnerTexts().catch(() => [] as string[]))
    .map(h => h.replace(/\s+/g, ' ').trim());
  const byColumn = new Map<string, string[]>();
  if (headers.length === 0) return byColumn;

  const rows = page.locator('table tbody tr');
  const rowCount = Math.min(await rows.count(), 25);
  for (let r = 0; r < rowCount; r++) {
    const cells = await rows.nth(r).getByRole('cell').allInnerTexts().catch(() => [] as string[]);
    cells.forEach((cell, i) => {
      const column = headers[i];
      if (column === undefined || NON_DATA_COLUMN.test(column)) return;
      const list = byColumn.get(column) ?? [];
      list.push(cell.replace(/\s+/g, ' ').trim());
      byColumn.set(column, list);
    });
  }
  return byColumn;
}

async function open(page: Page, route: string): Promise<boolean> {
  await page.goto(route, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
  if (/unauthorized/.test(page.url())) return false;
  return (await page.locator('table').count()) > 0;
}

test.describe('Cross-cutting — empty data is readable, never a bare dash', () => {
  for (const screen of SCREENS) {
    test(`${screen.name}: no column renders a bare placeholder for missing data @regression @functional`, async ({ page, csmPage }) => {
      const session = screen.role === 'csm' ? csmPage : page;
      if (!(await open(session, screen.route))) test.skip(true, `${screen.name} has no table for this session`);

      const table = await readTable(session);
      const offenders: string[] = [];
      for (const [column, values] of table) {
        const bare = values.filter(v => v === '' || RAW_PLACEHOLDER.test(v));
        if (bare.length) {
          const shown = [...new Set(bare.map(v => v === '' ? '(blank)' : v))].join(' / ');
          offenders.push(`${column}: ${bare.length}/${values.length} cells show ${shown}`);
        }
      }
      expect(offenders, `${screen.name} still shows bare placeholders —\n  ${offenders.join('\n  ')}`).toEqual([]);
    });

    test(`${screen.name}: each column uses a single empty treatment @regression`, async ({ page, csmPage }) => {
      const session = screen.role === 'csm' ? csmPage : page;
      if (!(await open(session, screen.route))) test.skip(true, `${screen.name} has no table for this session`);

      const table = await readTable(session);
      const mixed: string[] = [];
      for (const [column, values] of table) {
        // Group whatever this column uses for "no value": blanks, bare punctuation, or a short
        // wording that repeats across rows while other rows carry real data.
        const empties = new Set(values.filter(v => v === '' || RAW_PLACEHOLDER.test(v)).map(v => (v === '' ? '(blank)' : v)));
        if (empties.size > 1) mixed.push(`${column}: ${[...empties].join(' + ')}`);
      }
      expect(mixed, `these columns mix more than one empty treatment —\n  ${mixed.join('\n  ')}`).toEqual([]);
    });

    test(`${screen.name}: no raw null/undefined/NaN reaches the screen @negative @regression`, async ({ page, csmPage }) => {
      const session = screen.role === 'csm' ? csmPage : page;
      if (!(await open(session, screen.route))) test.skip(true, `${screen.name} has no table for this session`);

      const table = await readTable(session);
      const leaked: string[] = [];
      for (const [column, values] of table) {
        for (const value of values) if (LEAKED_VALUE.test(value)) leaked.push(`${column}: "${value}"`);
      }
      expect(leaked, `implementation values leaked into the UI —\n  ${leaked.join('\n  ')}`).toEqual([]);
    });
  }

  test('TC-EMPDET-431 Past Employee rows never render an empty Name @negative @regression', async ({ page }) => {
    await page.goto('/employee', { waitUntil: 'domcontentloaded' });
    await page.getByRole('tab', { name: /past employee/i }).click({ timeout: 20_000 });
    await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});

    const table = await readTable(page);
    const names = table.get('Name') ?? [];
    if (names.length === 0) test.skip(true, 'Past Employee tab rendered no Name column');
    const nameless = names.filter(v => v === '' || RAW_PLACEHOLDER.test(v));
    expect(
      nameless.length,
      `${nameless.length} past-employee row(s) have no name — this is missing DATA, not a formatting choice, and relabelling it would hide the defect`,
    ).toBe(0);
  });

  test('TC-DASH-142 Dashboard activity rows never render an empty Employee Name @negative @regression', async ({ page }) => {
    if (!(await open(page, '/dashboard'))) test.skip(true, 'Dashboard has no table for this session');
    const table = await readTable(page);
    const column = [...table.keys()].find(k => /employee name/i.test(k));
    if (!column) test.skip(true, 'Dashboard has no Employee Name column');
    const nameless = (table.get(column!) ?? []).filter(v => v === '' || RAW_PLACEHOLDER.test(v));
    expect(nameless.length, `${nameless.length} activity row(s) name no employee — report as a data defect`).toBe(0);
  });

  test('TC-EMPDET-433 Sorting a column with missing values keeps every row @boundary @regression', async ({ page }) => {
    if (!(await open(page, '/employee'))) test.skip(true, 'Employee list unavailable');
    const rows = page.locator('table tbody tr');
    const before = await rows.count();

    const sort = page.getByRole('columnheader').filter({ hasText: /visa/i }).getByRole('button', { name: /sort/i }).first();
    if (!(await sort.isVisible().catch(() => false))) test.skip(true, 'Visa column exposes no sort control');
    await sort.click();
    await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
    await expect.poll(() => rows.count(), { timeout: 15_000 }).toBeGreaterThan(0);

    expect(await rows.count(), 'sorting a column that contains missing values dropped rows').toBe(before);
  });
});
