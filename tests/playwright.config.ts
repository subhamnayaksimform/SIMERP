import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export default defineConfig({
  testDir:       './e2e',
  globalSetup:   './global-setup.ts',
  timeout:       60_000,
  expect:        { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly:    !!process.env.CI,
  retries:       process.env.CI ? 2 : 1,
  workers:       process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html',  { outputFolder: '../reports/results/html',  open: 'never' }],
    ['json',  { outputFile:   '../reports/results/results.json' }],
  ],
  use: {
    baseURL:      process.env.BASE_URL || 'https://simerp-dev.simform.solutions',
    // Default authenticated session (ceo@simformsolutions.com via direct credentials)
    storageState: path.join(__dirname, 'fixtures', 'storageState.json'),
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
