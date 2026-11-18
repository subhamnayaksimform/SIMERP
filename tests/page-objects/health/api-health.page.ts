import { Page } from '@playwright/test';

/**
 * Thin client for the API health checks (TC-APIH-*). The SimERP API lives on a SEPARATE origin
 * (`https://simerp-dev-api.simform.solutions/api/v1/...`); the SPA origin answers `200 text/html`
 * for any path, so a non-JSON 200 is never a pass. Overridable for a local stack:
 * API_BASE_URL=http://localhost:3002.
 */
export const API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

export interface ApiResult {
  status: number;
  ms: number;
  body: any;
  contentType: string;
  version: string;
}

export class ApiHealthPage {
  constructor(private readonly page: Page) {}

  /**
   * The access token is refreshed by the app on load, so a request straight from a fresh
   * storageState context answers 401 — loading any app route once bootstraps the session
   * (same pattern as DashboardPage.ensureApiSession).
   */
  private async ensureSession(): Promise<void> {
    if (/^https?:\/\//.test(this.page.url())) return;
    await this.page.goto('/', { waitUntil: 'domcontentloaded' }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async get(pathAndQuery: string): Promise<ApiResult> {
    await this.ensureSession();
    const started = Date.now();
    const response = await this.page.request.get(`${API_BASE}/api/v1/${pathAndQuery}`, { failOnStatusCode: false });
    const ms = Date.now() - started;
    const contentType = response.headers()['content-type'] ?? '';
    const body = contentType.includes('json') ? await response.json().catch(() => null) : null;
    return { status: response.status(), ms, body, contentType, version: response.headers()['x-api-version'] ?? '' };
  }
}
