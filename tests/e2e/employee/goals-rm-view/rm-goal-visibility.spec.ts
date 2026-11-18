// SI4-T1682 / [QA] SI4-T1693 — RM can view goals and their details (dev 6.9.x, /employee/goals).
// Also covers the two other items shipped under T1682: accountGrade visible to RM, and no duplicate
// project after allocate → deallocate → allocate.
//
// Accounts: pmPage = hardik.trivedi (RM + DM, goal scope TEAM), tmPage, emPage, empPage, csmPage, primaryPage (Admin).
// DATA SAFETY: the only writes are in TC-EMPGOL-557, on throwaway `AUTO-GOAL-RMV-*` goals that Admin creates
// and hard-deletes in afterAll. Real goals are never edited.
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';
import { GoalsPage } from '../../../page-objects/employee/goals.page';

const CREATED: string[] = [];
const PREFIX = 'AUTO-GOAL-RMV-';

async function goals(page: Page): Promise<GoalsPage> {
  const g = new GoalsPage(page);
  await g.primeApiSession();
  return g;
}

/** Every employee publicId the caller can see on By Employee (all pages). */
async function visibleEmployeeIds(g: GoalsPage): Promise<Set<string>> {
  const ids = new Set<string>();
  for (let p = 1; p < 50; p++) {
    const { status, body } = await g.apiGet(`/api/v1/employee-goals/employees?page=${p}&limit=100`);
    expect(status).toBe(200);
    for (const r of body.data.items) ids.add(r.employeePublicId);
    if (p >= body.data.totalPages) break;
  }
  return ids;
}

/** First page of catalog goals that have at least one assignment org-wide (Admin view). */
async function assignedGoals(admin: GoalsPage, n = 15): Promise<any[]> {
  const { body } = await admin.apiGet('/api/v1/goals?page=1&limit=100');
  return body.data.items.filter((x: any) => x.organizationAssigned > 0 || x.assignedEmployeeCount > 0).slice(0, n);
}

test.describe('SI4-T1682 RM goal visibility', () => {
  test.describe.configure({ timeout: 180_000 });

  test.afterAll(async ({ primaryPage }) => {
    const admin = await goals(primaryPage);
    for (const id of CREATED) await admin.apiSend('delete', `/api/v1/goals/${id}/hard`);
  });

  test('TC-EMPGOL-548 RM sees Goals with By Employee and By Goal tabs and no Add Goal @smoke', async ({ pmPage }) => {
    const g = new GoalsPage(pmPage);
    await g.openByEmployee();
    await expect(g.dashboardTab).toBeVisible();
    await expect(g.goalsTab).toBeVisible();
    await expect(g.byEmployeeTab).toBeVisible();
    await expect(g.byGoalTab).toBeVisible();
    await g.selectGoalsView('By Goal');
    await expect(g.goalRows.first()).toBeVisible();
    await expect(g.addGoalBtn).toHaveCount(0);
    await pmPage.screenshot({ path: 'reports/results/2026-11-16-qa-tasks/t1682-rm-by-goal.png', fullPage: true });
  });

  for (const role of ['pmPage', 'tmPage', 'emPage'] as const) {
    const label = { pmPage: 'RM', tmPage: 'TM', emPage: 'EM' }[role];
    test(`TC-EMPGOL-${{ pmPage: 549, tmPage: 550, emPage: 551 }[role]} ${label} opens a goal: read-only Goal Details drawer, no Edit/Delete @functional`, async ({ pmPage, tmPage, emPage }) => {
      const page = { pmPage, tmPage, emPage }[role];
      const g = new GoalsPage(page);
      await g.openByGoal();
      const row = g.goalRows.first();
      await expect(row.getByRole('button', { name: 'Edit', exact: true })).toHaveCount(0);
      await expect(row.getByRole('button', { name: 'Delete', exact: true })).toHaveCount(0);
      // Read-only table has no checkbox column, so the name button is in the FIRST cell (readGoalNameCell assumes Admin's layout).
      const nameBtn = row.getByRole('cell').first().getByRole('button').first();
      const name = (await nameBtn.innerText()).trim();
      await nameBtn.click();
      // The name button also carries the certificate code (e.g. "Kubernetes Administrator (CKA)CKA"), so match on the drawer title.
      const drawer = page.getByRole('dialog', { name: 'Goal Details' });
      await expect(drawer).toBeVisible({ timeout: 20_000 });
      // The form fills a moment after the drawer opens — wait for the value, don't read it once.
      await expect(drawer.getByRole('textbox', { name: 'Goal Name' })).not.toHaveValue('', { timeout: 15_000 });
      const shown = await drawer.getByRole('textbox', { name: 'Goal Name' }).inputValue();
      expect(name.startsWith(shown), `drawer shows "${shown}" for clicked "${name}"`).toBe(true);
      // Every field is locked: plain inputs disabled, rich-text editors contenteditable=false, no Save/Delete.
      for (const field of await drawer.locator('input, textarea, [role="combobox"]').all()) await expect(field).toBeDisabled();
      await expect(drawer.locator('[contenteditable="true"]')).toHaveCount(0);
      await expect(drawer.getByRole('button', { name: /^(Save|Update|Delete)$/ })).toHaveCount(0);
      await page.screenshot({ path: `reports/results/2026-11-16-qa-tasks/t1682-${label}-drawer.png` });
    });
  }

  test('TC-EMPGOL-552 Admin keeps Add Goal and the editable Edit Goal dialog @regression', async ({ primaryPage }) => {
    const g = new GoalsPage(primaryPage);
    await g.openByGoal();
    await expect(g.addGoalBtn).toBeVisible();
    await g.goalRows.first().getByRole('button', { name: 'Edit', exact: true }).click();
    await expect(g.editGoalDialog).toBeVisible();
    await expect(g.dialogSaveBtn).toBeVisible();
    await g.closeGoalDialog('Cancel');
  });

  test('TC-EMPGOL-553 RM GET /goals returns the full catalog (same total as Admin) @functional', async ({ pmPage, primaryPage }) => {
    const rm = await goals(pmPage);
    const admin = await goals(primaryPage);
    const r = await rm.apiGet('/api/v1/goals?page=1&limit=100');
    const a = await admin.apiGet('/api/v1/goals?page=1&limit=100');
    expect(r.status).toBe(200);
    expect(r.body.data.total).toBe(a.body.data.total);
    expect(r.body.data.total).toBeGreaterThan(0);
  });

  test('TC-EMPGOL-554 RM goal details list only their own team; org counts match Admin @security', async ({ pmPage, primaryPage }) => {
    const rm = await goals(pmPage);
    const admin = await goals(primaryPage);
    const team = await visibleEmployeeIds(rm);
    expect(team.size).toBeGreaterThan(1);
    let adminOnly = 0;
    const leaks: string[] = [];
    for (const goal of await assignedGoals(admin)) {
      const rd = await rm.apiGet(`/api/v1/goals/${goal.publicId}`);
      const ad = await admin.apiGet(`/api/v1/goals/${goal.publicId}`);
      expect(rd.status, goal.name).toBe(200);
      const self = (process.env.SIMERP_PM_USERNAME ?? '').toLowerCase();
      // The RM's own assignments are allowed too (he is not a row in his own By Employee list).
      const rmIds: string[] = rd.body.data.assignedEmployees.filter((e: any) => e.employeeEmail?.toLowerCase() !== self).map((e: any) => e.employeeId);
      const adIds = new Set<string>(ad.body.data.assignedEmployees.map((e: any) => e.employeeId));
      for (const id of rmIds) {
        if (!team.has(id) || !adIds.has(id)) leaks.push(`${goal.name}: ${id}`);
      }
      adminOnly += adIds.size - rd.body.data.assignedEmployees.length;
      expect(rd.body.data.organizationWiseCount, goal.name).toEqual(ad.body.data.organizationWiseCount);
    }
    expect(leaks, 'assignments outside the RM team').toEqual([]);
    expect(adminOnly, 'Admin should see assignments the RM cannot').toBeGreaterThan(0);
  });

  test('TC-EMPGOL-555 Employee and CSM are still blocked from the goal catalog @security', async ({ empPage, csmPage }) => {
    for (const page of [empPage, csmPage]) {
      const g = await goals(page);
      expect((await g.apiGet('/api/v1/goals?page=1&limit=100')).status).toBe(403);
      await page.goto('/employee/goals?tab=goals&view=catalog', { waitUntil: 'domcontentloaded' });
      await expect(page).toHaveURL(/unauthorized/, { timeout: 30_000 });
    }
  });

  test('TC-EMPGOL-556 RM sees and can sort by accountGrade; project description stays hidden @functional', async ({ pmPage }) => {
    const rm = await goals(pmPage);
    const list = await rm.apiGet('/api/v1/projects?page=1&limit=100');
    expect(list.status).toBe(200);
    const items: any[] = list.body.data.items ?? list.body.data;
    expect(items.length).toBeGreaterThan(0);
    for (const p of items) expect(p, p.name).toHaveProperty('accountGrade');
    expect(items.some(p => 'description' in p)).toBe(false);
    const sorted = await rm.apiGet('/api/v1/projects?page=1&limit=100&sortBy=accountGrade&sortOrder=desc');
    expect(sorted.status).toBe(200);
    const grades = (sorted.body.data.items ?? sorted.body.data).map((p: any) => p.accountGrade).filter((v: any) => v !== null);
    expect(grades).toEqual([...grades].sort((a: number, b: number) => b - a));
  });

  test('TC-EMPGOL-557 No project is listed twice on a team member profile (RM and Admin) @regression', async ({ pmPage, primaryPage }) => {
    const rm = await goals(pmPage);
    const admin = await goals(primaryPage);
    const ids = [...(await visibleEmployeeIds(rm))];
    const dups: string[] = [];
    const key = (p: any) => p.publicId ?? p.projectPublicId ?? p.project?.publicId ?? p.projectId ?? p.name;
    for (const id of ids) {
      for (const [who, g] of [['RM', rm], ['Admin', admin]] as const) {
        const { status, body } = await g.apiGet(`/api/v1/employees/${id}`);
        expect(status, `${who} ${id}`).toBe(200);
        for (const field of ['projects', 'pastProjects']) {
          const list: any[] = body.data?.[field] ?? [];
          const seen = new Set<string>();
          for (const p of list) {
            const k = key(p);
            if (seen.has(k)) dups.push(`${who} ${body.data.name} ${field}: ${p.name ?? k}`);
            seen.add(k);
          }
        }
      }
    }
    test.info().annotations.push({ type: 'checked', description: `${ids.length} team members` });
    expect(dups).toEqual([]);
  });

  test('TC-EMPGOL-558 RM/TM/EM cannot edit or delete a catalog goal through the API (F-1) @security', async ({ primaryPage, pmPage, tmPage, emPage }) => {
    const admin = await goals(primaryPage);
    const results: Record<string, { patch: number; del: number; post: number }> = {};
    for (const [label, page] of [['RM', pmPage], ['TM', tmPage], ['EM', emPage]] as const) {
      const g = await goals(page);
      const made = await admin.apiSend('post', '/api/v1/goals', { name: `${PREFIX}${Date.now()}-${label}`, type: 'TECHNICAL', description: 'QA throwaway' });
      expect(made.status).toBe(201);
      const id = made.body.data.publicId;
      CREATED.push(id);
      const patch = await g.apiSend('patch', `/api/v1/goals/${id}`, { description: `edited by ${label}` });
      const del = await g.apiSend('delete', `/api/v1/goals/${id}`);
      const post = await g.apiSend('post', '/api/v1/goals', { name: `${PREFIX}${Date.now()}-${label}-own`, type: 'TECHNICAL' });
      if (post.status === 201) CREATED.push(post.body.data.publicId);
      results[label] = { patch: patch.status, del: del.status, post: post.status };
    }
    test.info().annotations.push({ type: 'actual', description: JSON.stringify(results) });
    for (const [label, r] of Object.entries(results)) {
      expect.soft(r.patch, `${label} PATCH`).toBe(403);
      expect.soft(r.del, `${label} DELETE`).toBe(403);
      expect.soft(r.post, `${label} POST`).toBe(403);
    }
  });
});
