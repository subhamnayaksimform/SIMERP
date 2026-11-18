// Dedicated Playwright config for the CI/CD positive-flow suite. Deliberately kept OUTSIDE
// tests/ so this suite's config, spec files, and reports never mix with the main tests/e2e tree
// (tests/playwright.config.ts). Auth (global-setup, storageState) and page objects are reused
// from tests/ as-is — only the test files and their run/report output are segregated.
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export default defineConfig({
  testDir:       './tests',
  globalSetup:   path.join(__dirname, '..', 'tests', 'global-setup.ts'),
  timeout:       60_000,
  expect:        { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly:    !!process.env.CI,
  retries:       process.env.CI ? 2 : 1,
  workers:       process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: '../reports/results/ci-pipeline-html', open: 'never' }],
    ['json', { outputFile:   '../reports/results/ci-pipeline-results.json' }],
  ],
  use: {
    baseURL:      process.env.BASE_URL || 'https://simerp-dev.simform.solutions',
    // Reuses the same authenticated sessions tests/global-setup.ts produces for the main suite.
    storageState: path.join(__dirname, '..', 'tests', 'fixtures', 'storageState.json'),
    trace:        'retain-on-failure',
    screenshot:   'only-on-failure',
    video:        'retain-on-failure',
    actionTimeout: 15_000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
