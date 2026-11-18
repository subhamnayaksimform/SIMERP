/**
 * Captures real, ground-truth DOM/accessibility data from the live SIM ERP app for a given
 * module, and writes it to reports/knowledge-base/dom-snapshots/<MODULE_CODE>.json.
 *
 * This closes a gap that used to make every module's first automation generation a blind guess:
 * automation-generator.agent.md and qa-conventions.md have long referenced dom-snapshots/ as a
 * valid grounding source, but nothing ever populated that directory. Meanwhile
 * selector-inventory.json only ever regexes locators a *prior* guess already wrote into a page
 * object — it can propagate a wrong locator forever, never falsify one.
 *
 * Reuses the exact chromium + storageState pattern already proven in tests/global-setup.ts — no
 * new dependencies, no MCP server required.
 *
 * Usage:
 *   npm run capture:dom-snapshot -- --module=EMPGOL --routes=/employee/goals --clickButtons="Add Goal"
 *   npm run capture:dom-snapshot -- --module=DEPTCMP --routes=/department,/department/competencies
 *   npm run capture:dom-snapshot -- --module=EMPSKL --routes=/employee/skills --clickButtons="Add Skills" --session=punit
 */

import { chromium, Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { DomSnapshot, DomSnapshotState, InteractiveElementRecord } from './lib/dom-snapshot-types';

const ROOT = path.resolve(__dirname, '..');
dotenv.config({ path: path.join(ROOT, '.env') });

const BASE_URL = process.env.BASE_URL || 'https://simerp-dev.simform.solutions';
const PRIMARY_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState.json');
const PUNIT_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-punit.json');
const PM_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-pm.json');
const PMO_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-pmo.json');
const TM_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-tm.json');
const EMP_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-emp.json');
const EM_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-em.json');
const CSM_STATE = path.join(ROOT, 'tests', 'fixtures', 'storageState-csm.json');
const SNAPSHOT_DIR = path.join(ROOT, 'reports', 'knowledge-base', 'dom-snapshots');

const INTERACTIVE_SELECTOR = [
  'button', 'a[href]', 'input', 'select', 'textarea',
  '[role]', '[data-slot]', '[data-testid]', '[cmdk-item]', '[aria-haspopup]',
].join(', ');

const NOT_FOUND_PATTERNS = [/404/i, /page not found/i, /doesn't exist or has been moved/i];

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'state';
}

/** Best-effort Playwright locator string, priority-ordered same as qa-conventions.md's selector strategy. */
function deriveSuggestedLocator(el: {
  tag: string; role: string | null; accessibleName: string | null; dataTestId: string | null;
  ariaLabel: string | null; text: string | null;
}): string {
  if (el.dataTestId) return `getByTestId('${el.dataTestId}')`;
  if (el.role && el.accessibleName) return `getByRole('${el.role}', { name: '${el.accessibleName.replace(/'/g, "\\'")}' })`;
  if (el.role) return `getByRole('${el.role}')`;
  if (el.ariaLabel) return `getByLabel('${el.ariaLabel.replace(/'/g, "\\'")}')`;
  if (el.text) return `getByText('${el.text.slice(0, 40).replace(/'/g, "\\'")}')`;
  return `locator('${el.tag}')`;
}

async function detectNotFoundPage(page: Page): Promise<boolean> {
  const bodyText = await page.locator('body').innerText().catch(() => '');
  return NOT_FOUND_PATTERNS.some(re => re.test(bodyText));
}

async function scanInteractiveElements(page: Page): Promise<InteractiveElementRecord[]> {
  // Radix/shadcn portals (dialogs, drawers, popovers) append their content at the END of <body>,
  // often well past a flat truncation cap — so scan open-overlay content FIRST and in full,
  // then fill remaining budget from the rest of the page, rather than slicing from document order.
  const CAP = 600;
  const raw = await page.evaluate(({ selector, cap }) => {
    const all = Array.from(document.querySelectorAll(selector));
    const isInOpenOverlay = (el: Element) =>
      !!el.closest('[role="dialog"], [role="alertdialog"], [aria-modal="true"], [data-state="open"], [data-radix-popper-content-wrapper]');
    const overlayEls = all.filter(isInOpenOverlay);
    const restEls = all.filter(el => !isInOpenOverlay(el));
    const picked = [...overlayEls, ...restEls].slice(0, cap);
    return picked.map(el => ({
      tag: el.tagName.toLowerCase(),
      role: el.getAttribute('role'),
      dataSlot: el.getAttribute('data-slot'),
      dataTestId: el.getAttribute('data-testid'),
      ariaLabel: el.getAttribute('aria-label'),
      ariaSelected: el.getAttribute('aria-selected'),
      text: (el.textContent || '').trim().slice(0, 80) || null,
      disabled: el.hasAttribute('disabled'),
    }));
  }, { selector: INTERACTIVE_SELECTOR, cap: CAP });

  return raw.map(el => ({
    ...el,
    accessibleName: el.ariaLabel || el.text,
    suggestedLocator: deriveSuggestedLocator({
      tag: el.tag, role: el.role, accessibleName: el.ariaLabel || el.text,
      dataTestId: el.dataTestId, ariaLabel: el.ariaLabel, text: el.text,
    }),
  }));
}

async function captureState(page: Page, label: string, outDir: string): Promise<DomSnapshotState> {
  await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
  await page.waitForTimeout(500);

  const screenshotName = `${slug(label)}.png`;
  await page.screenshot({ path: path.join(outDir, screenshotName), fullPage: true }).catch(() => {});

  const [accessibilityTree, interactiveElements, isNotFoundPage] = await Promise.all([
    page.locator('body').ariaSnapshot().catch(() => null),
    scanInteractiveElements(page),
    detectNotFoundPage(page),
  ]);

  return {
    label,
    url: page.url(),
    isNotFoundPage,
    accessibilityTree,
    interactiveElements,
    screenshot: screenshotName,
  };
}

type Session = 'primary' | 'punit' | 'pm' | 'pmo' | 'tm' | 'emp' | 'em' | 'csm';
const VALID_SESSIONS: Session[] = ['primary', 'punit', 'pm', 'pmo', 'tm', 'emp', 'em', 'csm'];

function parseArgs(argv: string[]): { module: string; routes: string[]; clickButtons: string[]; session: Session } {
  let module = '';
  let routes: string[] = [];
  let clickButtons: string[] = [];
  let session: Session = 'primary';

  for (const a of argv.slice(2)) {
    const eq = a.indexOf('=');
    if (!a.startsWith('--') || eq === -1) continue;
    const k = a.slice(2, eq);
    const v = a.slice(eq + 1);
    if (k === 'module') module = v;
    else if (k === 'routes') routes = v.split(',').map(r => r.trim()).filter(Boolean);
    else if (k === 'clickButtons') clickButtons = v.split(',').map(b => b.trim()).filter(Boolean);
    else if (k === 'session' && (VALID_SESSIONS as string[]).includes(v)) session = v as Session;
  }

  if (!module || routes.length === 0) {
    console.error('Usage: capture-dom-snapshot -- --module=<CODE> --routes=/path[,/path2] [--clickButtons="Add X,Add Y"] [--session=primary|punit|pm|pmo|tm|emp|em|csm]');
    process.exit(1);
  }
  return { module, routes, clickButtons, session };
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv);
  const statePath = {
    primary: PRIMARY_STATE,
    punit: PUNIT_STATE,
    pm: PM_STATE,
    pmo: PMO_STATE,
    tm: TM_STATE,
    emp: EMP_STATE,
    em: EM_STATE,
    csm: CSM_STATE,
  }[opts.session];

  if (!fs.existsSync(statePath)) {
    console.error(`No storageState at ${statePath} — run 'npx playwright test --grep=nonexistent' once (triggers global-setup) to log in first.`);
    process.exit(1);
  }

  const outDir = path.join(SNAPSHOT_DIR, opts.module);
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: statePath, baseURL: BASE_URL, viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const states: DomSnapshotState[] = [];

  try {
    for (const route of opts.routes) {
      await page.goto(route, { waitUntil: 'domcontentloaded', timeout: 30_000 }).catch(e => {
        console.error(`  navigation error for ${route}: ${(e as Error).message}`);
      });
      states.push(await captureState(page, `landing-${slug(route)}`, outDir));

      for (const label of opts.clickButtons) {
        const btn = page.getByRole('button', { name: new RegExp(escapeRegex(label), 'i') }).first();
        const visible = await btn.isVisible({ timeout: 5_000 }).catch(() => false);
        if (!visible) {
          console.log(`  button "${label}" not visible on ${route} — skipping this click state`);
          continue;
        }
        await btn.click().catch(() => {});
        states.push(await captureState(page, `after-click-${slug(label)}`, outDir));
        await page.keyboard.press('Escape').catch(() => {});
      }
    }
  } finally {
    await browser.close();
  }

  const snapshot: DomSnapshot = {
    module: opts.module,
    capturedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    routes: opts.routes,
    session: opts.session,
    states,
  };

  const outPath = path.join(SNAPSHOT_DIR, `${opts.module}.json`);
  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2) + '\n');

  const notFoundStates = states.filter(s => s.isNotFoundPage);
  console.log(`DOM snapshot written: ${outPath}`);
  console.log(`  states captured: ${states.length}`);
  console.log(`  interactive elements (total): ${states.reduce((n, s) => n + s.interactiveElements.length, 0)}`);
  if (notFoundStates.length > 0) {
    console.log(`  ⚠ ${notFoundStates.length} state(s) hit a 404/not-found page: ${notFoundStates.map(s => s.url).join(', ')}`);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
