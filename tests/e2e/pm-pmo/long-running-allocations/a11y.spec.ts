// Long-Running Allocations (Zoho 688906000093866688) — accessibility.
// @axe-core/playwright is not installed in this repo, so the axe part of TC-PMPROJ-173 is recorded as
// an annotation; accessible names / roles / keyboard operation are asserted directly.
import { test, expect } from '../../../fixtures/auth';
import type { Locator } from '@playwright/test';
import { PmProjectsPage, LR_CARD_TOOLTIP, aliasOf } from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

/** Press Tab until `target` holds focus (max `limit` presses); returns whether it got there. */
async function tabTo(target: Locator, limit = 40): Promise<boolean> {
  const page = target.page();
  for (let i = 0; i < limit; i++) {
    await page.keyboard.press('Tab');
    if (await target.evaluate(el => el === document.activeElement).catch(() => false)) return true;
  }
  return false;
}

/** WCAG relative-luminance contrast ratio of two CSS rgb()/rgba() colours. */
function contrast(fg: string, bg: string): number {
  const rgb = (c: string) => (c.match(/[\d.]+/g) ?? ['0', '0', '0']).slice(0, 3).map(Number);
  const lum = (c: number[]) => {
    const [r, g, b] = c.map(v => { const s = v / 255; return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4); });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const [l1, l2] = [lum(rgb(fg)), lum(rgb(bg))].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}

test.describe('PM & PMO — Long-Running Allocations — Accessibility', () => {
  test('TC-PMPROJ-172 @a11y @shipped Long-Running card is a keyboard-operable toggle button', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    await csmPage.locator('body').click({ position: { x: 2, y: 2 } });
    expect(await tabTo(pm.longRunningCard), 'card reachable with Tab').toBe(true);
    await expect(pm.longRunningCard).toBeFocused();
    await expect(csmPage.locator('button[aria-pressed]:focus-visible'), 'focused card is :focus-visible (focus ring)').toHaveCount(1);
    await csmPage.keyboard.press('Enter');
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'true');
    await expect(csmPage).toHaveURL(/adv_allocationStage=LONG_RUNNING/);
    await pm.longRunningCard.focus();
    await csmPage.keyboard.press('Space');
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'false');
    await expect(csmPage).not.toHaveURL(/adv_allocationStage/);
    await pm.clearPersistedFilters();
  });

  test('TC-PMPROJ-173 @a11y @shipped LR badge and card info icon expose accessible names', async ({ csmPage }) => {
    test.info().annotations.push({ type: 'not-run', description: '@axe-core/playwright is not installed — axe scan part not executed; accessible names asserted directly.' });
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    const badges = pm.visibleTableLrBadges;
    expect(await badges.count()).toBeGreaterThan(0);
    for (let i = 0; i < Math.min(await badges.count(), 10); i++) {
      await expect(badges.nth(i)).toHaveAttribute('aria-label', 'Long-Running');
      await expect(badges.nth(i)).toHaveText('LR');
    }
    await expect(pm.longRunningCardInfoIcon).toHaveAccessibleName(LR_CARD_TOOLTIP);
    await expect(pm.longRunningCard).toHaveAccessibleName(/^Long-Running Allocations .*\d+$/);
  });

  test('TC-PMPROJ-174 @a11y @shipped Availability details tooltip is reachable by keyboard', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
    expect(subject).not.toBeNull();
    const row = await emp.searchForEmployee(subject.name);
    const btn = emp.availabilityDetailsButton(row);
    await pmoPage.mouse.move(0, 0);
    await btn.scrollIntoViewIfNeeded();
    // Arrive by keyboard: focus the search box, then Tab forward until the icon button has focus.
    await emp.searchInput.focus();
    expect(await tabTo(btn, 60), '"Availability details" reachable with Tab').toBe(true);
    await expect(emp.employeeTooltip, 'keyboard focus opens the same card as hover').toBeVisible();
    await expect(emp.employeeTooltip).toContainText('Long-Running Allocations');
    await pmoPage.keyboard.press('Escape');
    await expect(emp.employeeTooltip).toBeHidden();
  });

  test('TC-PMPROJ-175 @a11y @shipped Allocation filter checkboxes are labelled and keyboard-toggleable', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    await emp.advancedFilterBtn.focus();
    await pmoPage.keyboard.press('Enter');
    await expect(emp.getAdvancedFilterPanel()).toBeVisible();
    await emp.allocationAccordion().focus();
    await pmoPage.keyboard.press('Enter');
    await expect(emp.allocationAccordion()).toHaveAttribute('aria-expanded', 'true');
    for (const label of ['Recent Allocation', 'Long Running Allocation', 'Upcoming Allocation', 'Upcoming Deallocation']) {
      await expect(emp.getAdvancedFilterPanel().getByRole('checkbox', { name: label, exact: true })).toHaveCount(1);
    }
    const cb = emp.getAdvancedFilterPanel().getByRole('checkbox', { name: 'Long Running Allocation', exact: true });
    await cb.focus();
    await pmoPage.keyboard.press('Space');
    await expect(cb).toHaveAttribute('aria-checked', 'true');
    await emp.getAdvancedFilterPanel().getByRole('button', { name: 'Save', exact: true }).focus();
    await pmoPage.keyboard.press('Enter');
    await expect(pmoPage).toHaveURL(/adv_allocationStage=LONG_RUNNING/);
  });

  test('TC-PMPROJ-176 @a11y @not-live-observable Upcoming Allocations trigger announces its expanded state', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    let targetId: string | null = null;
    for (const p of await pm.fetchAllProjects()) {
      const d = await pm.fetchProjectDetail(p.publicId);
      if ((d.body?.data?.employees ?? []).some((e: any) => e.isUpcoming)) { targetId = p.publicId; break; }
    }
    test.skip(!targetId, 'NOT LIVE-OBSERVABLE: no CSM project has an upcoming allocation today');
    await pm.gotoProjectDetail(targetId!);
    await pm.upcomingAllocationsTrigger.focus();
    await expect(pm.upcomingAllocationsTrigger).toHaveAttribute('aria-expanded', 'false');
    await csmPage.keyboard.press('Enter');
    await expect(pm.upcomingAllocationsTrigger).toHaveAttribute('aria-expanded', 'true');
    await expect(pm.upcomingAllocationsTrigger).toBeFocused();
  });

  test('TC-PMPROJ-177 @a11y @shipped LR badge is not conveyed by colour only', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
    expect(subject).not.toBeNull();
    const lr = subject.projects.find((p: any) => p.isLongRunning);
    const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(subject.name));
    const badge = emp.visibleLrBadges(emp.sidePanelProjectRows(drawer).filter({ hasText: aliasOf(lr) }).first());
    await expect(badge).toHaveText('LR');
    await expect(badge).toHaveAttribute('aria-label', 'Long-Running');
    // Reads computed style of the badge element itself (not app state) to check WCAG 1.4.3.
    const { color, background } = await badge.evaluate(el => {
      let bg = 'rgba(0, 0, 0, 0)'; let n: Element | null = el;
      while (n && /rgba\(0, 0, 0, 0\)|transparent/.test(bg)) { bg = getComputedStyle(n).backgroundColor; n = n.parentElement; }
      return { color: getComputedStyle(el).color, background: bg };
    });
    const ratio = contrast(color, background);
    test.info().annotations.push({ type: 'observed', description: `LR badge text ${color} on ${background} → contrast ${ratio.toFixed(2)}:1` });
    expect(ratio, `LR badge contrast ${color} on ${background}`).toBeGreaterThanOrEqual(4.5);
  });
});
