/**
 * TC-AUTH-001  Primary session is authenticated  @smoke
 * TC-AUTH-002  Test-user session is authenticated  @smoke
 * TC-AUTH-003  Primary user can reach the app after navigation  @functional
 *
 * These tests verify that global-setup created valid sessions.
 * They do NOT perform login themselves — that is global-setup.ts's job.
 */
import { test, expect } from '../../fixtures/auth';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const BASE = process.env.BASE_URL || 'https://simerp-dev.simform.solutions';

// ─── Primary account (ceo@simformsolutions.com — direct credentials) ────────

test('TC-AUTH-001 @smoke primary session reaches authenticated app', async ({ primaryPage }) => {
  await primaryPage.goto(BASE, { waitUntil: 'domcontentloaded' });
  await primaryPage.waitForLoadState('networkidle').catch(() => {});

  // Should NOT be on a login / Microsoft page
  const url = primaryPage.url();
  expect(url).not.toMatch(/login|signin|microsoftonline|live\.com/i);

  // App shell visible — sidebar items rendered on authenticated pages
  await expect(
    primaryPage.getByText('Employee', { exact: true }).or(
      primaryPage.getByText('Help & Support', { exact: true })
    ).first()
  ).toBeVisible({ timeout: 15_000 });
});

test('TC-AUTH-002 @smoke test-user session reaches authenticated app', async ({ testUserPage }) => {
  await testUserPage.goto(BASE, { waitUntil: 'domcontentloaded' });
  await testUserPage.waitForLoadState('networkidle').catch(() => {});

  const url = testUserPage.url();
  expect(url).not.toMatch(/login|signin|microsoftonline|live\.com/i);

  await expect(
    testUserPage.getByText('Employee', { exact: true }).or(
      testUserPage.getByText('Help & Support', { exact: true })
    ).first()
  ).toBeVisible({ timeout: 15_000 });
});

test('TC-AUTH-003 @functional primary session persists after navigation', async ({ primaryPage }) => {
  await primaryPage.goto(BASE, { waitUntil: 'domcontentloaded' });

  // Navigate away and back — session must not expire
  await primaryPage.goto(BASE + '/profile', { waitUntil: 'domcontentloaded' }).catch(() => {});
  await primaryPage.goto(BASE, { waitUntil: 'domcontentloaded' });
  await primaryPage.waitForLoadState('networkidle').catch(() => {});

  // Confirm we did not get bounced to a login screen
  const url = primaryPage.url();
  expect(url).not.toMatch(/login|signin|microsoftonline/i);
  await primaryPage.screenshot({ path: 'test-results/auth-primary-session.png', fullPage: true }).catch(() => {});
});
