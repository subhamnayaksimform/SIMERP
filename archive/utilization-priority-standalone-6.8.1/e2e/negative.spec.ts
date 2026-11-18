// TC-UTLPRI-075..081 — negative pass: searches and filter combinations that legitimately match
// nobody, hostile search input, and malformed deep links. The screen must degrade to its documented
// empty state ("No one to rank yet" / "No employees match the current filters") rather than to a
// crash, a stale grid, or a rendered payload.
import { test, expect } from '@playwright/test';
import { UtilizationPriorityPage } from '../../page-objects/utilization-priority/utilization-priority.page';

test.describe('Utilization Priority — Negative', () => {
  let up: UtilizationPriorityPage;

  test.beforeEach(async ({ page }) => {
    up = new UtilizationPriorityPage(page);
  });

  test('TC-UTLPRI-075 Searching for a name that does not exist shows the documented empty state @negative', async () => {
    await up.navigateClean();
    await up.search('Zzqx Nonexistent Person 99');
    expect(await up.getAllRows().count(), 'rows survived a search that should match nobody').toBe(0);
    await expect(up.emptyState.first()).toBeVisible();
  });

  test('TC-UTLPRI-076 An empty result set drives every KPI tile to zero rather than leaving stale counts @negative', async () => {
    await up.navigateClean();
    await up.search('Zzqx Nonexistent Person 99');
    for (const tile of [up.kpiP1, up.kpiP2, up.kpiP3, up.kpiUnderUtilized]) {
      expect(await up.getKpiCount(tile), 'a KPI tile kept a stale count over an empty result set').toBe(0);
    }
  });

  test('TC-UTLPRI-077 A filter combination that matches nobody shows the "no employees match" message @negative', async () => {
    await up.navigateClean();
    await up.applyFilter('UP (System)', ['P1 · Red']);
    await up.applyFilter('UP (Manual)', ['P1 · Red']);
    const rows = await up.getAllRows().count();
    if (rows === 0) {
      await expect(up.page.getByText(/No employees match the current filters/).first()).toBeVisible();
    } else {
      // If the combination does match people, it must match them on BOTH criteria.
      for (const row of await up.getRowData()) {
        expect(row.upSystemTier).toBe('P1');
        expect(row.upManual).toContain('P1');
      }
    }
  });

  test('TC-UTLPRI-078 Script-like search input is treated as literal text and never executed @negative @security', async ({ page }) => {
    const dialogs: string[] = [];
    page.on('dialog', async d => { dialogs.push(d.message()); await d.dismiss(); });

    await up.navigateClean();
    const payload = '<script>alert(1)</script>';
    await up.search(payload);
    expect(dialogs, 'the search box executed injected script content').toEqual([]);
    await expect(up.searchInput).toHaveValue(payload);
    expect(await page.locator('body').innerHTML(), 'the payload was injected into the DOM as live markup')
      .not.toContain('<script>alert(1)</script>');
    await expect(up.table.or(up.emptyState).first()).toBeVisible();
  });

  test('TC-UTLPRI-079 Clearing the search restores the full unfiltered population @negative', async () => {
    await up.navigateClean();
    const { total: before } = await up.getResultsSummary();
    await up.search('Zzqx Nonexistent Person 99');
    expect(await up.getAllRows().count()).toBe(0);

    await up.clearSearch();
    const { total: after } = await up.getResultsSummary();
    expect(after, 'the population did not come back after the search was cleared').toBe(before);
  });

  test('TC-UTLPRI-080 A deep link carrying an unknown tier value degrades gracefully @negative', async ({ page }) => {
    await page.goto(`${UtilizationPriorityPage.ROUTE}?upSystemTiers=NOT_A_TIER`, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 25_000 }).catch(() => {});
    await expect(up.heading, 'an unrecognised filter value took the whole screen down').toBeVisible();
    await expect(up.table.or(up.emptyState).first()).toBeVisible();
    await expect(page.getByText(/Something went wrong|Application error|Unhandled/i)).toHaveCount(0);
  });

  test('TC-UTLPRI-081 A whitespace-only search does not wipe the grid @negative', async () => {
    await up.navigateClean();
    const { total: before } = await up.getResultsSummary();
    await up.search('   ');
    const { total: after } = await up.getResultsSummary();
    expect(after, 'a whitespace-only search was treated as a real term and emptied the ranking').toBe(before);
  });
});
