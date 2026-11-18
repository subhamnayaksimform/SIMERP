// TC-UTLPRI-001..008 — smoke pass over the Utilization Priority screen: the page shell renders,
// the eight documented columns are present in FRD order, the four KPI tiles reconcile against the
// result total, and every row carries both a system tier and a manual-priority control.
import { test, expect } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';

test.describe('Utilization Priority — Smoke', () => {
  let up: UtilizationPriorityPage;

  test.beforeEach(async ({ page }) => {
    up = new UtilizationPriorityPage(page);
  });

  test('TC-UTLPRI-001 Screen loads at /utilization-priority with its heading and PMO description @smoke', async () => {
    await up.navigate();
    await expect(up.heading).toBeVisible();
    await expect(up.subtitle).toBeVisible();
    await expect(up.table).toBeVisible();
  });

  test('TC-UTLPRI-002 Table exposes the eight documented columns in FRD order @smoke', async () => {
    await up.navigate();
    const expected = ['Employee Name', 'Department', 'UP (System)', 'UP (Manual)',
      'Availability', 'Value Score', 'Skills / Tech', 'Allocation'];
    const headers = (await up.table.getByRole('columnheader').allInnerTexts())
      .map(h => h.replace(/\s+/g, ' ').trim());
    expect(headers).toHaveLength(expected.length);
    expected.forEach((name, index) => {
      expect(headers[index], `column ${index + 1} is not "${name}"`).toContain(name);
    });
  });

  test('TC-UTLPRI-003 All four KPI tiles render with a numeric count @smoke', async () => {
    await up.navigate();
    for (const tile of [up.kpiP1, up.kpiP2, up.kpiP3, up.kpiUnderUtilized]) {
      await expect(tile).toBeVisible();
      expect(await up.getKpiCount(tile)).toBeGreaterThanOrEqual(0);
    }
  });

  test('TC-UTLPRI-004 P1 + P2 + P3 tile counts reconcile with the total result count @smoke', async () => {
    await up.navigateClean();
    const [p1, p2, p3] = await Promise.all([
      up.getKpiCount(up.kpiP1), up.getKpiCount(up.kpiP2), up.getKpiCount(up.kpiP3),
    ]);
    const { total } = await up.getResultsSummary();
    expect(p1 + p2 + p3,
      `tier tiles (${p1}+${p2}+${p3}) do not account for every one of the ${total} ranked people`,
    ).toBe(total);
  });

  test('TC-UTLPRI-005 FR-9 — every visible row is classified into exactly one of P1/P2/P3 @smoke', async () => {
    await up.navigate();
    const tiers = await up.getTierColumn();
    expect(tiers.length).toBeGreaterThan(0);
    for (const tier of tiers) {
      expect(tier, 'a row rendered without a valid UP (System) tier').toMatch(/^P[123] · (Red|Amber|Green)$/);
    }
  });

  test('TC-UTLPRI-006 FR-12 — every row exposes a UP (Manual) dropdown @smoke', async () => {
    await up.navigate();
    const rowCount = await up.getAllRows().count();
    const comboCount = await up.page.getByRole('combobox', { name: /^Set manual priority for / }).count();
    expect(comboCount, 'not every ranked row offers a manual-priority control').toBe(rowCount);
  });

  test('TC-UTLPRI-007 Results summary and pagination controls render @smoke', async () => {
    await up.navigate();
    await expect(up.resultsSummary.first()).toBeVisible();
    await expect(up.pagination).toBeVisible();
    const { from, to, total } = await up.getResultsSummary();
    expect(from).toBe(1);
    expect(to).toBeLessThanOrEqual(total);
    expect(to - from + 1).toBe(await up.getAllRows().count());
  });

  test('TC-UTLPRI-008 Sidebar nav exposes Utilization Priority pointing at its own route @smoke', async ({ page }) => {
    await up.navigate();
    const navLink = page.getByRole('link', { name: 'Utilization Priority' });
    await expect(navLink).toBeVisible();
    await expect(navLink).toHaveAttribute('href', UtilizationPriorityPage.ROUTE);
  });
});
