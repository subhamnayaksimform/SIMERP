import { request as apiRequest } from '@playwright/test';
import { test, expect } from '../../fixtures/auth';
import { ApiHealthPage, API_BASE, ApiResult } from '../../page-objects/health/api-health.page';

// TC-APIH-* — API health checks run by the ops dashboard after every detected deploy
// (scripts/ops/health-check.ts). Read-only GETs only. Each test records its endpoint and
// latency as annotations so the dashboard can chart response times.

const SLOW_MS = Number(process.env.API_HEALTH_SLOW_MS || 5000);

function record(endpoint: string, r: Pick<ApiResult, 'status' | 'ms'>) {
  test.info().annotations.push(
    { type: 'endpoint', description: endpoint },
    { type: 'status', description: String(r.status) },
    { type: 'latency-ms', description: String(r.ms) },
  );
}

/** Core read endpoints (admin session) — one per main area of the app. */
const ENDPOINTS: [id: string, path: string, area: string][] = [
  ['TC-APIH-010', 'employees', 'Employees'],
  ['TC-APIH-011', 'employees/metadata', 'Employees'],
  ['TC-APIH-012', 'projects', 'Projects'],
  ['TC-APIH-014', 'departments', 'Departments'],
  ['TC-APIH-015', 'skills/list', 'Skills'],
  ['TC-APIH-016', 'goals', 'Goals'],
  ['TC-APIH-017', 'dashboard/overview?duration=this_year&projectLimit=6', 'Dashboard'],
  ['TC-APIH-018', 'allocation-tickets', 'Allocation tickets'],
  ['TC-APIH-019', 'opportunities/summary', 'Opportunities'],
  ['TC-APIH-020', 'certifications/mine', 'Certifications'],
  ['TC-APIH-021', 'working-location/overview', 'Working location'],
  ['TC-APIH-022', 'utilization-priority', 'Utilization priority'],
  ['TC-APIH-023', 'notifications', 'Notifications'],
  ['TC-APIH-024', 'releases', 'Releases'],
  ['TC-APIH-025', 'department-stacks', 'Department stacks'],
  ['TC-APIH-026', 'shared/feature-flags', 'Shared'],
  ['TC-APIH-027', 'tech-stacks', 'Tech stacks'],
  ['TC-APIH-028', 'employee-roles', 'Employee roles'],
  ['TC-APIH-029', 'sync-queue/cron-runs/summary', 'Sync jobs'],
];

test.describe('API health', () => {
  test('TC-APIH-001 health-check answers 200 JSON with an API version header @api-health', async () => {
    const ctx = await apiRequest.newContext();
    const started = Date.now();
    const response = await ctx.get(`${API_BASE}/api/v1/health-check`, { failOnStatusCode: false });
    const ms = Date.now() - started;
    record('GET /api/v1/health-check', { status: response.status(), ms });
    expect(response.status()).toBe(200);
    expect(response.headers()['x-api-version'], 'X-API-Version header').toBeTruthy();
    const body = await response.json();
    expect(body.data?.uptime, 'uptime in seconds').toBeGreaterThan(0);
    expect(ms, `answered in ${ms} ms`).toBeLessThan(SLOW_MS);
    await ctx.dispose();
  });

  test('TC-APIH-002 a protected endpoint refuses a request without a session (401) @api-health @security', async () => {
    const ctx = await apiRequest.newContext();
    const started = Date.now();
    const response = await ctx.get(`${API_BASE}/api/v1/employees`, { failOnStatusCode: false });
    record('GET /api/v1/employees (no session)', { status: response.status(), ms: Date.now() - started });
    expect(response.status()).toBe(401);
    await ctx.dispose();
  });

  for (const [id, path, area] of ENDPOINTS) {
    test(`${id} ${area}: GET /api/v1/${path.split('?')[0]} answers 200 JSON within ${SLOW_MS} ms @api-health`, async ({ primaryPage }) => {
      const api = new ApiHealthPage(primaryPage);
      const r = await api.get(path);
      record(`GET /api/v1/${path}`, r);
      expect(r.status, `status for /api/v1/${path}`).toBe(200);
      expect(r.contentType, 'JSON, not the SPA fallback page').toContain('json');
      expect(r.body, 'response envelope has data').toHaveProperty('data');
      expect(r.ms, `answered in ${r.ms} ms`).toBeLessThan(SLOW_MS);
    });
  }

  // Role checks — confirmed live 2026-09-11: Employee is refused the employee list,
  // mid-tier roles (PM) cannot see roles, Admin can.
  test('TC-APIH-040 Employee session is refused the employee list (403) @api-health @security', async ({ empPage }) => {
    const r = await new ApiHealthPage(empPage).get('employees');
    record('GET /api/v1/employees (Employee)', r);
    expect(r.status).toBe(403);
  });

  test('TC-APIH-041 PM session is refused the roles list (403) @api-health @security', async ({ pmPage }) => {
    const r = await new ApiHealthPage(pmPage).get('roles');
    record('GET /api/v1/roles (PM)', r);
    expect(r.status).toBe(403);
  });

  test('TC-APIH-042 Admin session can read the roles list (200) @api-health @security', async ({ primaryPage }) => {
    const r = await new ApiHealthPage(primaryPage).get('roles');
    record('GET /api/v1/roles (Admin)', r);
    expect(r.status).toBe(200);
    expect(r.body).toHaveProperty('data');
  });
});
