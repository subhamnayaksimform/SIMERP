/**
 * Playwright global-setup — runs once before the test suite.
 *
 * Creates two authenticated sessions:
 *   tests/fixtures/storageState.json       → subham.nayak  (Microsoft SSO)
 *   tests/fixtures/storageState-punit.json → punit.patel   (direct credentials)
 *
 * Both files are re-used for 8 hours; after that they are regenerated
 * automatically on the next `npm test` run.
 */

import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const BASE_URL      = process.env.BASE_URL || 'https://simerp-dev.simform.solutions';
const PRIMARY_EMAIL = (process.env.SIMERP_USERNAME     || '').trim();
const PRIMARY_PASS  = (process.env.SIMERP_PASSWORD     || '').trim();
const TEST_EMAIL    = (process.env.SIMERP_TEST_USERNAME || '').trim();
const TEST_PASS     = (process.env.SIMERP_TEST_PASSWORD || '').trim();

const FIXTURE_DIR   = path.join(__dirname, 'fixtures');
const PRIMARY_STATE = path.join(FIXTURE_DIR, 'storageState.json');
const TEST_STATE    = path.join(FIXTURE_DIR, 'storageState-punit.json');

const CACHE_HOURS = 8;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isStateValid(file: string): boolean {
  try {
    const stat  = fs.statSync(file);
    const state = JSON.parse(fs.readFileSync(file, 'utf8'));
    // Ensure file is recent and not empty
    const ageH  = (Date.now() - stat.mtimeMs) / 3_600_000;
    const hasCookies = Array.isArray(state.cookies) && state.cookies.length > 0;
    return ageH < CACHE_HOURS && hasCookies;
  } catch { return false; }
}

/** Returns true if the current page is inside the authenticated app. */
async function isLoggedIn(page: Page): Promise<boolean> {
  const url = page.url();
  if (/login|signin|microsoftonline|live\.com/i.test(url)) return false;
  // Check for common logged-in UI indicators
  for (const sel of [
    '[data-testid="user-menu"]',
    '[data-testid="navbar"]',
    '[data-testid="sidebar"]',
    'nav',
    '.navbar',
    '.sidebar',
  ]) {
    if (await page.locator(sel).first().isVisible({ timeout: 2000 }).catch(() => false)) return true;
  }
  // URL moved away from the root/login path → likely authenticated
  return !url.endsWith(BASE_URL + '/') && !url.endsWith(BASE_URL);
}

// ─── Microsoft SSO login ──────────────────────────────────────────────────────

async function loginMicrosoftSSO(page: Page, email: string, password: string): Promise<boolean> {
  console.log(`\n  [SSO] Starting Microsoft SSO for ${email}`);

  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });

  // Some apps show an explicit "Login with Microsoft" button; others redirect immediately.
  const msBtn = page.locator([
    'button:has-text("Login with Microsoft")',
    'button:has-text("Sign in with Microsoft")',
    'button:has-text("Continue with Microsoft")',
    'a:has-text("Login with Microsoft")',
    '[data-testid="ms-sso-btn"]',
  ].join(', ')).first();

  if (await msBtn.isVisible({ timeout: 4000 }).catch(() => false)) {
    await msBtn.click();
  }

  // Wait to land on Microsoft's identity platform
  try {
    await page.waitForURL(/microsoftonline\.com|microsoft\.com\/login|live\.com/, { timeout: 12_000 });
  } catch {
    // App may have already redirected us, or credentials login only
    console.log('  [SSO] Not redirected to Microsoft — skipping SSO path');
    return false;
  }

  // ── Account picker? ────────────────────────────────────────────────────────
  const accountEntry = page.locator(`[data-test-id*="${email}" i], [title*="${email}" i], [aria-label*="${email}" i]`).first();
  if (await accountEntry.isVisible({ timeout: 3000 }).catch(() => false)) {
    await accountEntry.click();
    console.log('  [SSO] Picked existing account from picker');
  } else {
    // "Use another account" or direct email form
    const otherBtn = page.locator([
      '[data-test-id="otherTileText"]',
      'text=Use another account',
      'text=Sign in with a different account',
    ].join(', ')).first();
    if (await otherBtn.isVisible({ timeout: 2000 }).catch(() => false)) await otherBtn.click();

    // Email input
    const emailInput = page.locator('input[type="email"], input[name="loginfmt"]').first();
    await emailInput.waitFor({ state: 'visible', timeout: 10_000 });
    await emailInput.fill(email);

    const nextBtn = page.locator('input[value="Next"], input[id="idSIButton9"]').first();
    await nextBtn.waitFor({ state: 'visible', timeout: 5_000 });
    await nextBtn.click();
  }

  // ── Password ──────────────────────────────────────────────────────────────
  const passInput = page.locator('input[type="password"], input[name="passwd"]').first();
  await passInput.waitFor({ state: 'visible', timeout: 12_000 });
  await passInput.fill(password);

  const signInBtn = page.locator([
    'input[value="Sign in"]',
    'input[id="idSIButton9"]',
    'button[type="submit"]',
  ].join(', ')).first();
  await signInBtn.waitFor({ state: 'visible', timeout: 5_000 });
  await signInBtn.click();

  // ── MFA? (wait up to 90 s for user to approve on their phone) ─────────────
  const mfaKeywords = [
    'text=Approve sign-in request',
    'text=Enter code',
    'text=Verify your identity',
    'text=We sent a code',
    '[aria-label*="Authenticator" i]',
    '#idDiv_SAOTCC_Title',
  ];
  const mfaVisible = await page.locator(mfaKeywords.join(', ')).first()
    .isVisible({ timeout: 3_000 }).catch(() => false);
  if (mfaVisible) {
    console.log('\n  ⚠  MFA challenge detected.');
    console.log('  → Approve the sign-in on your Authenticator app (90 seconds)…\n');
  }

  // ── "Stay signed in?" ─────────────────────────────────────────────────────
  try {
    // Wait for either MFA completion + stay-signed-in, or direct redirect
    await page.waitForURL(
      url => !url.toString().includes('microsoftonline') && !url.toString().includes('microsoft.com') && !url.toString().includes('live.com'),
      { timeout: 90_000 },
    );
    // Handle "Stay signed in?" prompt
    const stayBtn = page.locator('input[value="Yes"], input[id="idSIButton9"]').first();
    if (await stayBtn.isVisible({ timeout: 4_000 }).catch(() => false)) await stayBtn.click();
  } catch {
    console.log('  [SSO] Timed out waiting for redirect — MFA not completed?');
    return false;
  }

  await page.waitForLoadState('domcontentloaded', { timeout: 15_000 });
  const ok = await isLoggedIn(page);
  console.log(`  [SSO] ${ok ? '✓ Logged in' : '✗ Login check failed'}`);
  return ok;
}

// ─── Direct credentials login ─────────────────────────────────────────────────

async function loginWithCredentials(page: Page, email: string, password: string): Promise<boolean> {
  console.log(`\n  [CRED] Direct credentials login for ${email}`);

  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });

  // Click "Login with Credentials" button if the app shows one
  const credBtn = page.locator([
    'button:has-text("Login with Credentials")',
    'button:has-text("Login with Email")',
    'button:has-text("Sign in with Email")',
    'a:has-text("Login with Credentials")',
    'text=Login with Credentials',
  ].join(', ')).first();

  if (await credBtn.isVisible({ timeout: 5_000 }).catch(() => false)) {
    await credBtn.click();
    await page.waitForTimeout(600);
  }

  // Fill email
  const emailInput = page.locator([
    'input[name="email"]',
    'input[name="username"]',
    'input[type="email"]',
    '#email',
    'input[placeholder*="email" i]',
    'input[placeholder*="user" i]',
  ].join(', ')).first();

  const emailVisible = await emailInput.waitFor({ state: 'visible', timeout: 8_000 }).then(() => true).catch(() => false);
  if (!emailVisible) {
    console.log('  [CRED] Email input not found');
    return false;
  }
  await emailInput.fill(email);

  // Fill password
  const passInput = page.locator('input[type="password"]').first();
  const passVisible = await passInput.waitFor({ state: 'visible', timeout: 5_000 }).then(() => true).catch(() => false);
  if (!passVisible) {
    console.log('  [CRED] Password input not found');
    return false;
  }
  await passInput.fill(password);

  // Submit
  const submitBtn = page.locator([
    'button[type="submit"]',
    'input[type="submit"]',
    'button:has-text("Sign in")',
    'button:has-text("Login")',
    'button:has-text("Log in")',
    'button:has-text("Sign In")',
  ].join(', ')).first();

  const submitVisible = await submitBtn.waitFor({ state: 'visible', timeout: 5_000 }).then(() => true).catch(() => false);
  if (!submitVisible) {
    console.log('  [CRED] Submit button not found');
    return false;
  }
  await submitBtn.click();

  // Wait for navigation away from login page
  try {
    await page.waitForURL(
      url => !/\/login|\/signin|\/auth\/login/i.test(url.toString()),
      { timeout: 20_000 },
    );
  } catch { /* URL might not change for SPAs */ }

  await page.waitForLoadState('domcontentloaded', { timeout: 10_000 }).catch(() => {});
  const ok = await isLoggedIn(page);
  console.log(`  [CRED] ${ok ? '✓ Logged in' : '✗ Login check failed'}`);
  return ok;
}

// ─── Per-account login orchestrator ──────────────────────────────────────────

async function setupAccount(
  browser: Browser,
  statePath: string,
  email: string,
  password: string,
  method: 'sso' | 'credentials',
  label: string,
): Promise<void> {
  if (isStateValid(statePath)) {
    console.log(`  ✓ ${label}: session valid (< ${CACHE_HOURS}h old) — skipping`);
    return;
  }

  console.log(`\n━━ ${label} ━━`);
  const ctx: BrowserContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page: Page = await ctx.newPage();

  let ok = false;

  try {
    if (method === 'sso') {
      ok = await loginMicrosoftSSO(page, email, password);
      // Fallback: direct credentials if SSO fails
      if (!ok && TEST_EMAIL && TEST_PASS) {
        console.log('  [SSO] Falling back to direct credentials…');
        ok = await loginWithCredentials(page, email, password);
      }
    } else {
      ok = await loginWithCredentials(page, email, password);
    }
  } catch (e) {
    console.error(`  [Error] ${(e as Error).message.split('\n')[0]}`);
  }

  if (!ok) {
    console.log('\n  ─────────────────────────────────────────────────────');
    console.log(`  ACTION REQUIRED: Auto-login failed for ${label}`);
    console.log('  → Log in manually in the browser window that is open.');
    console.log('  → Then click  ▶ Resume  in the Playwright Inspector.');
    console.log('  ─────────────────────────────────────────────────────\n');
    await page.pause();
    ok = await isLoggedIn(page);
  }

  if (ok) {
    await ctx.storageState({ path: statePath });
    console.log(`  ✓ ${label}: session saved → ${statePath}`);
  } else {
    console.error(`  ✗ ${label}: could not establish session — tests using this account will fail`);
  }

  await page.close();
  await ctx.close();
}

// ─── Entry point ──────────────────────────────────────────────────────────────

async function globalSetup(): Promise<void> {
  fs.mkdirSync(FIXTURE_DIR, { recursive: true });

  const browser: Browser = await chromium.launch({
    headless: false,
    slowMo: 40,
    args: ['--start-maximized'],
  });

  try {
    // 1. Primary account — Microsoft SSO (subham.nayak)
    if (PRIMARY_EMAIL && PRIMARY_PASS) {
      await setupAccount(browser, PRIMARY_STATE, PRIMARY_EMAIL, PRIMARY_PASS, 'sso', `Microsoft SSO — ${PRIMARY_EMAIL}`);
    } else {
      console.warn('  ⚠  SIMERP_USERNAME / SIMERP_PASSWORD not set — skipping primary login');
    }

    // 2. Test account — direct credentials (punit.patel)
    if (TEST_EMAIL && TEST_PASS) {
      await setupAccount(browser, TEST_STATE, TEST_EMAIL, TEST_PASS, 'credentials', `Direct login — ${TEST_EMAIL}`);
    } else {
      console.warn('  ⚠  SIMERP_TEST_USERNAME / SIMERP_TEST_PASSWORD not set — skipping test-user login');
    }
  } finally {
    await browser.close();
  }
}

export default globalSetup;
