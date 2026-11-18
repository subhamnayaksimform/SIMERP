// SI4-T1672 — Skills Overview redesign (dev 6.8.1, /employee/skills).
// DATA SAFETY: every skill created here is named `AUTO-SKL-<timestamp>-…` and removed in afterAll by
// exact prefix. The only real employee touched is Dhruv Chopra (ADMIN dept), assigned a throwaway skill and
// then unassigned. Real skills are never edited or deleted.
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';

const API = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';
const ADMIN_DEPT = 'a3f54254-b77d-4e15-9be8-1de2d16f4636';
const DHRUV = 'd849b68d-2cbf-4911-b028-5b3172062a78';
const PREFIX = 'AUTO-SKL-';
const LOGO = 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png';
const uniq = (s = '') => `${PREFIX}${Date.now()}${s}`;

type Res = { status: number; body: any };
async function prime(page: Page) {
  await page.goto('/profile', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
}
const get = async (page: Page, p: string): Promise<Res> => {
  const r = await page.request.get(`${API}/api/v1${p}`, { failOnStatusCode: false });
  return { status: r.status(), body: await r.json().catch(() => null) };
};
const send = async (page: Page, m: 'post' | 'patch' | 'delete', p: string, opts: any = {}): Promise<Res> => {
  const r = await page.request[m](`${API}/api/v1${p}`, { failOnStatusCode: false, ...opts });
  return { status: r.status(), body: await r.json().catch(() => null) };
};
const createSkill = (page: Page, name: string, extra: Record<string, string> = {}) =>
  send(page, 'post', '/skills/add', { multipart: { name, departmentIds: ADMIN_DEPT, logoLink: LOGO, ...extra } });
const summary = async (page: Page) => (await get(page, '/skills/summary')).body.data as { totalSkills: number; unassigned: number; withEmployees: number };
const findByName = async (page: Page, name: string) =>
  ((await get(page, `/skills/list?limit=100&page=1&search=${encodeURIComponent(name)}`)).body?.data?.skills ?? []).filter((s: any) => s.name === name);

async function openSkills(page: Page) {
  await page.goto('/employee/skills', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { name: 'Skills Overview' })).toBeVisible({ timeout: 30_000 });
}
async function searchAndSelect(page: Page, name: string) {
  await page.getByPlaceholder('Search').first().fill(name);
  await page.getByText(name, { exact: true }).first().click();
}
async function pickDrawerDepartment(page: Page, dept = 'ADMIN') {
  const dlg = page.getByRole('dialog');
  await dlg.getByRole('combobox').first().click();
  await page.getByRole('option', { name: dept, exact: true }).click();
}
const editBtn = (page: Page) => page.getByRole('button', { name: 'Edit', exact: true });
const deleteBtn = (page: Page) => page.getByRole('button', { name: 'Unlink Skill' });

// TC-EMPSKL-150..155 are one lifecycle chain (create → edit/assign → verify → delete). 152 needs the skill that 150/151
// create, and 155 cleans it up, so the whole chain carries @regression — otherwise `--grep @regression` runs 152 alone.
test.describe('SI4-T1672 Skills redesign', () => {
  // Tests here read org-wide totals and share the Admin session + created skills, so they must run in file order on
  // ONE worker (overrides the project's fullyParallel) — but one failure must not skip the rest, hence 'default'.
  test.describe.configure({ mode: 'default' });
  const created: string[] = [];

  test.afterAll(async ({ browser }) => {
    // Sweep by prefix so a failed test never leaves data behind.
    const ctx = await browser.newContext({ storageState: 'tests/fixtures/storageState.json' });
    const page = await ctx.newPage();
    await prime(page);
    const left = ((await get(page, `/skills/list?limit=100&page=1&search=${PREFIX}`)).body?.data?.skills ?? []).filter((s: any) => s.name.startsWith(PREFIX));
    for (const s of left) {
      await send(page, 'patch', `/skills/${s.publicId}`, { data: { employeeIds: { deleted: [DHRUV] } } });
      await send(page, 'delete', `/skills/${s.publicId}`);
    }
    await ctx.close();
  });

  // ═══ E2E lifecycle (Admin) ═══════════════════════════════════════════════
  // The chain shares state (lifeName) — it must run in order on one worker, even though the project is fullyParallel.
  test.describe('lifecycle chain', () => {
  const lifeName = uniq('-life');
  let before: { totalSkills: number; unassigned: number; withEmployees: number };

  test('TC-EMPSKL-150 Admin adds a new skill through the drawer @functional @regression', async ({ primaryPage: page }) => {
    await prime(page);
    before = await summary(page);
    await openSkills(page);
    await page.getByRole('button', { name: /Add Skills/ }).click();
    const dlg = page.getByRole('dialog');
    await expect(dlg.getByText('Add New Skill')).toBeVisible();
    await pickDrawerDepartment(page);
    await dlg.getByRole('button', { name: /Search or select a skill/ }).click();
    await page.getByPlaceholder(/Search or create/i).fill(lifeName).catch(async () => { await page.keyboard.type(lifeName); });
    await page.waitForTimeout(900); // search debounce settles
    await page.getByText(/Create New Skill/i).first().click();
    await dlg.getByPlaceholder('Enter link').fill(LOGO);
    await dlg.getByPlaceholder('e.g., easy-skill').fill('auto-tag');
    await dlg.getByRole('button', { name: 'Add tag' }).click();
    await dlg.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Verify before creating')).toBeVisible();
    const post = page.waitForResponse(r => r.url().includes('/skills/add') && r.request().method() === 'POST');
    await page.getByRole('button', { name: 'Confirm & Create' }).click();
    expect((await post).status()).toBe(201);
    created.push(lifeName);
    await expect(page.getByText(/Skill created and mapped successfully/i)).toBeVisible();
    await page.waitForLoadState('networkidle');
    await searchAndSelect(page, lifeName);
    await expect(page.getByText(/0 Employees \(0% of total\)/)).toBeVisible();
    const after = await summary(page);
    expect(after.totalSkills, 'Total skills +1').toBe(before.totalSkills + 1);
    expect(after.unassigned, 'Unassigned +1').toBe(before.unassigned + 1);
  });

  test('TC-EMPSKL-151 Admin edits the skill: adds a tag and assigns an employee @functional @regression', async ({ primaryPage: page }) => {
    await prime(page);
    await openSkills(page);
    await searchAndSelect(page, lifeName);
    await editBtn(page).click();
    const dlg = page.getByRole('dialog');
    await expect(dlg.getByText('Edit Skill Details')).toBeVisible();
    await expect(dlg.getByText('auto-tag')).toBeVisible();
    await dlg.getByRole('textbox').first().fill('second-tag');
    await dlg.getByRole('button', { name: 'Add tag' }).click();
    await dlg.getByText('Search employees..').click();
    await page.keyboard.type('Dhruv');
    await page.getByRole('option', { name: /Dhruv Chopra/ }).first().click();
    await page.keyboard.press('Escape'); // close the employee popover, not the drawer
    const patch = page.waitForResponse(r => /\/skills\/[0-9a-f-]{36}$/.test(r.url()) && r.request().method() === 'PATCH');
    await dlg.getByRole('button', { name: 'Update' }).click();
    expect((await patch).status()).toBe(200);
    await expect(page.getByText(/Skill updated successfully/i)).toBeVisible();
  });

  test('TC-EMPSKL-152 Integration: assignment shows in table, stat cards and every API view @regression', async ({ primaryPage: page }) => {
    await prime(page);
    const [skill] = await findByName(page, lifeName);
    expect(skill.tags).toEqual(expect.arrayContaining(['auto-tag', 'second-tag']));
    const emps = await get(page, `/skills/department-employees?departmentId=${ADMIN_DEPT}&skillIds=${skill.publicId}&page=1&limit=100`);
    expect(emps.body.data.employees.map((e: any) => e.name)).toContain('Dhruv Chopra');
    const stats = (await get(page, `/skills/department-skill-stats?departmentId=${ADMIN_DEPT}`)).body.data.skills.find((s: any) => s.name === lifeName);
    expect(stats.employeeCount, 'list count = employees returned').toBe(emps.body.data.total);
    const s = await summary(page);
    expect(s.unassigned, 'Unassigned back to baseline').toBe(before.unassigned);
    expect(s.withEmployees, 'With employees +1').toBe(before.withEmployees + 1);
    await openSkills(page);
    await searchAndSelect(page, lifeName);
    await expect(page.getByText(/Employee Strength:/)).toBeVisible();
    await expect(page.getByRole('row').filter({ hasText: 'Dhruv Chopra' })).toBeVisible();
  });

  test('TC-EMPSKL-153 Delete is blocked while an employee holds the skill (dialog in the UI, 400 from the API) @negative @regression', async ({ primaryPage: page }) => {
    await prime(page);
    await openSkills(page);
    await searchAndSelect(page, lifeName);
    let deletes = 0;
    page.on('request', r => { if (r.method() === 'DELETE' && r.url().includes('/skills/')) deletes++; });
    await deleteBtn(page).click();
    await expect(page.getByText('Cannot Delete Skill')).toBeVisible();
    await expect(page.getByText(/remove all employees mapped to/i)).toBeVisible();
    await page.getByRole('button', { name: 'Okay' }).click();
    expect(deletes, 'the UI does not even send the request').toBe(0);
    const [skill] = await findByName(page, lifeName);
    const api = await send(page, 'delete', `/skills/${skill.publicId}`);
    expect(api.status, `API guard: ${api.body?.message}`).toBe(400);
    expect(await findByName(page, lifeName)).toHaveLength(1);
  });

  test('TC-EMPSKL-154 Cancel on the delete dialog changes nothing @negative @regression', async ({ primaryPage: page }) => {
    await prime(page);
    const [skill] = await findByName(page, lifeName);
    // the delete dialog only offers Cancel/Delete once nobody holds the skill
    expect((await send(page, 'patch', `/skills/${skill.publicId}`, { data: { employeeIds: { deleted: [DHRUV] } } })).status).toBe(200);
    await openSkills(page);
    await searchAndSelect(page, lifeName);
    await deleteBtn(page).click();
    const dlg = page.getByRole('alertdialog').or(page.getByRole('dialog')).first();
    let deletes = 0;
    page.on('request', r => { if (r.method() === 'DELETE' && r.url().includes('/skills/')) deletes++; });
    await dlg.getByRole('button', { name: 'Cancel' }).click();
    await expect(dlg).toBeHidden();
    expect(deletes).toBe(0);
    expect(await findByName(page, lifeName)).toHaveLength(1);
  });

  test('TC-EMPSKL-155 Unassigning the employee and deleting the skill restores the totals @functional @regression', async ({ primaryPage: page }) => {
    await prime(page);
    const [skill] = await findByName(page, lifeName);
    expect((await send(page, 'patch', `/skills/${skill.publicId}`, { data: { employeeIds: { deleted: [DHRUV] } } })).status).toBe(200);
    await openSkills(page);
    await searchAndSelect(page, lifeName);
    await expect(page.getByText(/0 Employees/)).toBeVisible();
    await deleteBtn(page).click();
    const dlg = page.getByRole('alertdialog').or(page.getByRole('dialog')).first();
    const del = page.waitForResponse(r => /\/skills\//.test(r.url()) && r.request().method() === 'DELETE');
    await dlg.getByRole('button', { name: 'Delete' }).click();
    expect((await del).status()).toBe(200);
    expect(await findByName(page, lifeName)).toHaveLength(0);
    const s = await summary(page);
    expect(s.totalSkills).toBe(before.totalSkills);
    expect(s.unassigned).toBe(before.unassigned);
  });
  });

  // ═══ Edge cases ══════════════════════════════════════════════════════════
  test('TC-EMPSKL-156 Blank Logo URL is blocked with a visible message, not a silent no-op (old defect fixed) @regression', async ({ primaryPage: page }) => {
    await prime(page);
    const name = uniq('-nologo');
    await openSkills(page);
    await page.getByRole('button', { name: /Add Skills/ }).click();
    const dlg = page.getByRole('dialog');
    await pickDrawerDepartment(page);
    await dlg.getByRole('button', { name: /Search or select a skill/ }).click();
    await page.keyboard.type(name);
    await page.waitForTimeout(900);
    await page.getByText(/Create New Skill/i).first().click();
    let posted = false;
    page.on('request', r => { if (r.url().includes('/skills/add') && r.method() === 'POST') posted = true; });
    await dlg.getByRole('button', { name: 'Save' }).click();
    await expect(dlg.getByText('Provide logo URL or upload icon file.').first()).toBeVisible();
    await page.waitForTimeout(1500);
    expect(posted, 'nothing is sent while the logo is missing').toBe(false);
    expect(await findByName(page, name)).toHaveLength(0);
  });

  test('TC-EMPSKL-157 Duplicate skill name is rejected and no second row appears @negative', async ({ primaryPage: page }) => {
    await prime(page);
    const name = uniq('-dup');
    expect((await createSkill(page, name)).status).toBe(201);
    created.push(name);
    const again = await createSkill(page, name);
    const upper = await createSkill(page, name.toLowerCase());
    expect([again.status, upper.status], `dup responses ${JSON.stringify([again.body?.message, upper.body?.message])}`).toEqual([expect.any(Number), expect.any(Number)]);
    const rows = await findByName(page, name);
    expect(rows, 'exact duplicate must not create a 2nd skill').toHaveLength(1);
    expect(again.status, 'exact duplicate').toBeGreaterThanOrEqual(400);
  });

  test('TC-EMPSKL-158 Invalid input is refused with 400, never 5xx @negative', async ({ primaryPage: page }) => {
    await prime(page);
    const cases: [string, Record<string, string>][] = [
      ['logo not a URL', { name: uniq('-bad'), departmentIds: ADMIN_DEPT, logoLink: 'not-a-url' }],
      ['no department', { name: uniq('-bad') }],
      ['department not a uuid', { name: uniq('-bad'), departmentIds: 'abc' }],
      ['duplicate department ids', { name: uniq('-bad'), departmentIds: `${ADMIN_DEPT},${ADMIN_DEPT}` }],
      ['neither skillId nor name', { departmentIds: ADMIN_DEPT }],
      ['both skillId and name', { name: uniq('-bad'), skillId: 'a87efa1e-aace-48e3-9653-7d417fd0f023', departmentIds: ADMIN_DEPT }],
      ['empty name', { name: '', departmentIds: ADMIN_DEPT }],
    ];
    const out: string[] = [];
    for (const [label, multipart] of cases) {
      const r = await send(page, 'post', '/skills/add', { multipart });
      out.push(`${label}: ${r.status}`);
      if (r.status === 201) created.push(multipart.name);
      expect(r.status, `${label} → ${r.status} ${r.body?.message}`).toBeGreaterThanOrEqual(400);
      expect(r.status, `${label} must not be a server error`).toBeLessThan(500);
    }
  });

  test('TC-EMPSKL-159 Unusual skill names are stored and shown as plain text @boundary', async ({ primaryPage: page }) => {
    await prime(page);
    const names = [
      uniq('-<img src=x onerror=window.__xss=1>'),
      uniq("-O'Reilly & \"quotes\" %_"),
      uniq('-' + 'x'.repeat(120)),
      uniq('-ünïcödé 日本語'),
    ];
    for (const n of names) {
      const r = await createSkill(page, n);
      if (r.status === 201) created.push(n);
      expect(r.status, `name "${n.slice(0, 40)}" → ${r.status} ${r.body?.message}`).toBeLessThan(500);
    }
    await openSkills(page);
    await page.getByPlaceholder('Search').first().fill(PREFIX);
    await page.waitForTimeout(1500);
    expect(await page.evaluate(() => (window as any).__xss), 'no script executed from a skill name').toBeUndefined();
    expect(await page.locator('main img[src="x"]').count()).toBe(0);
  });

  test('TC-EMPSKL-160 Search edge cases: case, spaces, wildcard and quote characters @boundary', async ({ primaryPage: page }) => {
    await prime(page);
    const name = uniq('-Search');
    created.push(name);
    expect((await createSkill(page, name)).status).toBe(201);
    for (const q of [name.toLowerCase(), `  ${name}  `, name.toUpperCase()]) {
      const r = await get(page, `/skills/department-skill-stats?departmentId=${ADMIN_DEPT}&search=${encodeURIComponent(q)}`);
      expect(r.status).toBe(200);
      expect(r.body.data.skills.map((s: any) => s.name), `search "${q}"`).toContain(name);
    }
    for (const q of ['%', '_', "'", '"; DROP TABLE skills;--', '<script>', '\\', 'a'.repeat(300)]) {
      const r = await get(page, `/skills/department-skill-stats?departmentId=${ADMIN_DEPT}&search=${encodeURIComponent(q)}`);
      expect(r.status, `search "${q.slice(0, 20)}" must not 5xx`).toBeLessThan(500);
    }
    const pct = await get(page, `/skills/department-skill-stats?departmentId=${ADMIN_DEPT}&search=${encodeURIComponent('%')}`);
    if (pct.status === 200) {
      test.info().annotations.push({ type: 'note', description: `search "%" returned ${pct.body.data.skills.length} of the dept's skills (wildcard escaping)` });
    }
  });

  test('TC-EMPSKL-161 Cancel and Escape discard the Add and Edit drawers without saving @negative', async ({ primaryPage: page }) => {
    await prime(page);
    await openSkills(page);
    let writes = 0;
    page.on('request', r => { if (['POST', 'PATCH', 'DELETE'].includes(r.method()) && r.url().includes('/skills')) writes++; });
    await page.getByRole('button', { name: /Add Skills/ }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await page.getByRole('button', { name: /Add Skills/ }).click();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toBeHidden();
    expect(writes).toBe(0);
  });

  test('TC-EMPSKL-162 Bad ids: malformed → 400, unknown → 404, never 500 @negative', async ({ primaryPage: page }) => {
    await prime(page);
    const ghost = '00000000-0000-4000-8000-000000000000';
    const checks: [string, Res][] = [
      ['PATCH malformed', await send(page, 'patch', '/skills/not-a-uuid', { data: { tags: ['x'] } })],
      ['PATCH unknown', await send(page, 'patch', `/skills/${ghost}`, { data: { tags: ['x'] } })],
      ['DELETE malformed', await send(page, 'delete', '/skills/not-a-uuid')],
      ['DELETE unknown', await send(page, 'delete', `/skills/${ghost}`)],
      ['UNLINK unknown', await send(page, 'delete', `/skills/${ghost}/department/${ADMIN_DEPT}`)],
      ['stats unknown dept', await get(page, `/skills/department-skill-stats?departmentId=${ghost}`)],
      ['employees unknown dept', await get(page, `/skills/department-employees?departmentId=${ghost}&skillIds=${ghost}&page=1&limit=100`)],
      ['employees bad limit', await get(page, `/skills/department-employees?departmentId=${ADMIN_DEPT}&skillIds=${ghost}&page=1&limit=7`)],
      ['employees page 0', await get(page, `/skills/department-employees?departmentId=${ADMIN_DEPT}&skillIds=${ghost}&page=0&limit=100`)],
    ];
    for (const [label, r] of checks) {
      expect(r.status, `${label} → ${r.status} ${r.body?.message}`).toBeLessThan(500);
      expect(r.status, `${label} must be rejected`).toBeGreaterThanOrEqual(400);
    }
  });

  test('TC-EMPSKL-163 Unlink from department is blocked while a dept employee holds the skill @negative', async ({ primaryPage: page }) => {
    await prime(page);
    const name = uniq('-unlink');
    const c = await createSkill(page, name);
    expect(c.status).toBe(201);
    created.push(name);
    const id = c.body.data.publicId;
    expect((await send(page, 'patch', `/skills/${id}`, { data: { employeeIds: { added: [DHRUV] } } })).status).toBe(200);
    const blocked = await send(page, 'delete', `/skills/${id}/department/${ADMIN_DEPT}`);
    expect(blocked.status, blocked.body?.message).toBe(400);
    expect((await send(page, 'patch', `/skills/${id}`, { data: { employeeIds: { deleted: [DHRUV] } } })).status).toBe(200);
    const ok = await send(page, 'delete', `/skills/${id}/department/${ADMIN_DEPT}`);
    expect(ok.status, ok.body?.message).toBe(200);
  });

  test('TC-EMPSKL-164 Employee list is paged and consistent for a large skill @boundary', async ({ primaryPage: page }) => {
    await prime(page);
    const depts = (await get(page, '/skills/manager-departments')).body.data.departments as any[];
    let best: { dept: string; skill: any } | null = null;
    for (const d of depts.slice(0, 41)) {
      const st = (await get(page, `/skills/department-skill-stats?departmentId=${d.publicId}`)).body?.data?.skills ?? [];
      const top = st.sort((a: any, b: any) => b.employeeCount - a.employeeCount)[0];
      if (top && (!best || top.employeeCount > best.skill.employeeCount)) best = { dept: d.publicId, skill: top };
    }
    expect(best, 'a skill with employees exists').not.toBeNull();
    const q = `departmentId=${best!.dept}&skillIds=${best!.skill.publicId}`;
    const p1 = await get(page, `/skills/department-employees?${q}&page=1&limit=100`);
    expect(p1.status).toBe(200);
    expect(p1.body.data.total, 'list count equals employee total').toBe(best!.skill.employeeCount);
    const ids = new Set(p1.body.data.employees.map((e: any) => e.publicId));
    expect(ids.size, 'no duplicate employees on a page').toBe(p1.body.data.employees.length);
    const beyond = await get(page, `/skills/department-employees?${q}&page=999&limit=100`);
    expect(beyond.status).toBe(200);
    expect(beyond.body.data.employees).toHaveLength(0);
  });

  test('TC-EMPSKL-165 Primary / Secondary tab filters employees by proficiency @functional', async ({ primaryPage: page }) => {
    await prime(page);
    for (const prof of ['PRIMARY', 'SECONDARY']) {
      const st = (await get(page, `/skills/department-skill-stats?departmentId=${ADMIN_DEPT}&proficiency=${prof}`)).body.data.skills as any[];
      const withEmp = st.find(s => s.employeeCount > 0);
      if (!withEmp) continue;
      const e = await get(page, `/skills/department-employees?departmentId=${ADMIN_DEPT}&skillIds=${withEmp.publicId}&proficiency=${prof}&page=1&limit=100`);
      for (const emp of e.body.data.employees) {
        for (const sk of emp.skills.filter((s: any) => s.skillPublicId === withEmp.publicId)) expect(sk.proficiency).toBe(prof);
      }
    }
  });

  test('TC-EMPSKL-171 Add drawer: skill picker and Save stay disabled until a department is chosen @functional', async ({ primaryPage: page }) => {
    await prime(page);
    await openSkills(page);
    await page.getByRole('button', { name: /Add Skills/ }).click();
    const dlg = page.getByRole('dialog');
    await expect(dlg.getByRole('button', { name: /Search or select a skill/ })).toBeDisabled();
    await expect(dlg.getByRole('button', { name: 'Save' })).toBeDisabled();
    await pickDrawerDepartment(page);
    await expect(dlg.getByRole('button', { name: /Search or select a skill/ })).toBeEnabled();
    await expect(dlg.getByRole('button', { name: 'Save' }), 'Save needs a skill too').toBeDisabled();
  });

  test('TC-EMPSKL-172 "Verify before creating" step: Cancel creates nothing, Confirm creates once @negative', async ({ primaryPage: page }) => {
    await prime(page);
    const name = uniq('-verify');
    await openSkills(page);
    await page.getByRole('button', { name: /Add Skills/ }).click();
    const dlg = page.getByRole('dialog');
    await pickDrawerDepartment(page);
    await dlg.getByRole('button', { name: /Search or select a skill/ }).click();
    await page.keyboard.type(name);
    await page.waitForTimeout(900);
    await page.getByText(/Create New Skill/i).first().click();
    await dlg.getByPlaceholder('Enter link').fill(LOGO);
    let posts = 0;
    page.on('request', r => { if (r.url().includes('/skills/add') && r.method() === 'POST') posts++; });
    await dlg.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Verify before creating')).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).last().click();
    await page.waitForTimeout(1500);
    expect(posts, 'Cancel on the verify step must not create').toBe(0);
    expect(await findByName(page, name)).toHaveLength(0);
    await dlg.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Confirm & Create' }).click();
    await expect.poll(() => findByName(page, name).then(r => r.length), { timeout: 15_000 }).toBe(1);
    created.push(name);
    expect(posts, 'exactly one create request').toBe(1);
  });

  // ═══ RBAC ═══════════════════════════════════════════════════════════════
  const personas = ['primaryPage', 'pmoPage', 'pmPage', 'tmPage', 'emPage', 'testUserPage', 'empPage', 'csmPage'] as const;
  const labels: Record<string, string> = { primaryPage: 'Admin', pmoPage: 'PMO', pmPage: 'PM', tmPage: 'TM', emPage: 'EM', testUserPage: 'punit', empPage: 'Employee', csmPage: 'CSM' };

  test('TC-EMPSKL-166 UI access matrix per role (page, Add Skills, Edit/Delete, stat cards) @security', async ({ primaryPage, pmoPage, pmPage, tmPage, emPage, testUserPage, empPage, csmPage }) => {
    test.setTimeout(240_000);
    const pages: Record<string, Page> = { primaryPage, pmoPage, pmPage, tmPage, emPage, testUserPage, empPage, csmPage };
    const rows: string[] = [];
    for (const k of personas) {
      const p = pages[k];
      await p.goto('/employee/skills', { waitUntil: 'networkidle' });
      await p.waitForTimeout(1500);
      const blocked = /\/unauthorized/.test(p.url());
      const cards = blocked ? '-' : ((await p.locator('body').innerText()).match(/Total skills\s+(\d+)/)?.[1] ?? '?');
      rows.push(`${labels[k]}: ${blocked ? 'BLOCKED' : 'open'} total=${cards} add=${await p.getByRole('button', { name: /Add Skills/ }).count()} edit=${await editBtn(p).count()}`);
    }
    test.info().annotations.push({ type: 'matrix', description: rows.join(' | ') });
    expect(rows.find(r => r.startsWith('Employee'))).toContain('BLOCKED');
    expect(rows.find(r => r.startsWith('CSM'))).toContain('BLOCKED');
    expect(rows.find(r => r.startsWith('Admin'))).toContain('open');
  });

  test('TC-EMPSKL-167 Read APIs are data-scoped: no role sees more than Admin, Employee/CSM see nothing @security', async ({ primaryPage, tmPage, emPage, pmPage, empPage, csmPage }) => {
    await prime(primaryPage);
    const admin = await summary(primaryPage);
    const out: string[] = [];
    for (const [name, p] of [['TM', tmPage], ['EM', emPage], ['PM', pmPage], ['Employee', empPage], ['CSM', csmPage]] as const) {
      await prime(p);
      const s = await get(p, '/skills/summary');
      out.push(`${name}:${s.status}/${s.body?.data?.totalSkills}`);
      if (s.status === 200) expect(s.body.data.totalSkills, `${name} total <= admin`).toBeLessThanOrEqual(admin.totalSkills);
      if (name === 'Employee' || name === 'CSM') {
        const total = s.status === 200 ? s.body.data.totalSkills : 0;
        expect(total, `${name} must not see org skill data`).toBe(0);
      }
    }
    test.info().annotations.push({ type: 'scope', description: out.join(' ') });
  });

  test('TC-EMPSKL-168 Out-of-scope department data is not readable by a TM @security', async ({ primaryPage, tmPage }) => {
    await prime(primaryPage);
    await prime(tmPage);
    const adminDepts = (await get(primaryPage, '/skills/manager-departments')).body.data.departments as any[];
    const tmDepts = new Set(((await get(tmPage, '/skills/manager-departments')).body.data.departments as any[]).map(d => d.publicId));
    const outside = adminDepts.find(d => !tmDepts.has(d.publicId));
    expect(outside, 'an out-of-scope department exists').toBeTruthy();
    const stats = await get(tmPage, `/skills/department-skill-stats?departmentId=${outside.publicId}`);
    const emps = await get(tmPage, `/skills/department-employees?departmentId=${outside.publicId}&skillIds=${ADMIN_DEPT}&page=1&limit=100`);
    for (const [label, r] of [['stats', stats], ['employees', emps]] as const) {
      const leaked = r.status === 200 ? (r.body.data.skills?.length ?? r.body.data.employees?.length ?? 0) : 0;
      expect(leaked, `${label} for ${outside.name} → ${r.status}`).toBe(0);
    }
  });

  const mkSkill = async (admin: Page, tag: string) => {
    const name = uniq(`-${tag}`);
    const c = await createSkill(admin, name, { tags: 'orig' });
    expect(c.status).toBe(201);
    created.push(name);
    return { name, id: c.body.data.publicId as string };
  };
  const tagsOf = async (admin: Page, name: string) => (await findByName(admin, name))[0]?.tags ?? null;
  const defect = (desc: string) => test.info().annotations.push({ type: 'defect', description: desc });

  test('TC-EMPSKL-169 Employee and CSM cannot add or delete skills; anonymous callers get 401 @security', async ({ primaryPage, empPage, csmPage, browser }) => {
    await prime(primaryPage);
    const { name, id } = await mkSkill(primaryPage, 'rbac');
    for (const [who, p] of [['Employee', empPage], ['CSM', csmPage]] as const) {
      await prime(p);
      const add = await send(p, 'post', '/skills/add', { multipart: { name: uniq('-denied'), departmentIds: ADMIN_DEPT, logoLink: LOGO } });
      const del = await send(p, 'delete', `/skills/${id}`);
      expect(add.status, `${who} add`).toBe(403);
      expect(del.status, `${who} delete`).toBe(403);
    }
    const anon = (await browser.newContext({ storageState: { cookies: [], origins: [] } })).request; // config default storageState is logged in
    for (const [m, u] of [['get', '/skills/summary'], ['post', '/skills/add'], ['delete', `/skills/${id}`]] as const) {
      expect((await anon[m](`${API}/api/v1${u}`, { failOnStatusCode: false })).status(), `anonymous ${m} ${u}`).toBe(401);
    }
    expect(await findByName(primaryPage, name)).toHaveLength(1);
  });

  test('TC-EMPSKL-173 Employee and CSM cannot change the tags of a global skill @security', async ({ primaryPage, empPage, csmPage }) => {
    await prime(primaryPage);
    const out: string[] = [];
    for (const [who, p] of [['Employee', empPage], ['CSM', csmPage]] as const) {
      await prime(p);
      const { name, id } = await mkSkill(primaryPage, `tags-${who}`);
      const r = await send(p, 'patch', `/skills/${id}`, { data: { tags: [`hacked-${who}`] } });
      const now = await tagsOf(primaryPage, name);
      out.push(`${who} PATCH ${r.status} tags now ${JSON.stringify(now)}`);
      if (r.status === 200) defect(`${who} can overwrite tags on any skill via PATCH /skills/:id (200): ${out[out.length - 1]}`);
      expect(r.status, `${who} PATCH ${r.body?.message}`).toBe(403);
    }
  });

  test('TC-EMPSKL-174 TM, EM and PM cannot change tags of a skill outside their department @security', async ({ primaryPage, tmPage, emPage, pmPage }) => {
    await prime(primaryPage);
    const out: string[] = [];
    for (const [who, p] of [['TM', tmPage], ['EM', emPage], ['PM', pmPage]] as const) {
      await prime(p);
      const { name, id } = await mkSkill(primaryPage, `tags-${who}`);
      const r = await send(p, 'patch', `/skills/${id}`, { data: { tags: [`hacked-${who}`] } });
      out.push(`${who} PATCH ${r.status} tags now ${JSON.stringify(await tagsOf(primaryPage, name))}`);
      if (r.status === 200) defect(`${who} edited a skill that is only linked to ADMIN dept: ${out[out.length - 1]}`);
    }
    for (const line of out) expect(line, 'PATCH should be refused (403)').toMatch(/PATCH 40[13]/);
  });

  test('TC-EMPSKL-170 TM, EM and PM cannot delete a global skill they do not own @security', async ({ primaryPage, tmPage, emPage, pmPage }) => {
    await prime(primaryPage);
    const out: string[] = [];
    for (const [who, p] of [['TM', tmPage], ['EM', emPage], ['PM', pmPage]] as const) {
      await prime(p);
      const { id } = await mkSkill(primaryPage, `del-${who}`);
      const r = await send(p, 'delete', `/skills/${id}`);
      out.push(`${who} DELETE ${r.status} ${r.body?.message ?? ''}`);
      if (r.status === 200) defect(`${who} permanently deleted a global skill created by Admin (no department scope on DELETE /skills/:id): ${out[out.length - 1]}`);
    }
    for (const line of out) expect(line, 'DELETE should be refused (403)').toMatch(/DELETE 40[13]/);
  });

  // SI4-I637 (fixed 12/11, re-tested 13/11): TM/EM may add skills only to their own departments. The drawer offers
  // only those departments, an out-of-scope create is refused with 403 and leaves no orphan skill behind.
  test('TC-EMPSKL-175 TM / EM add skills only to their own departments; out-of-scope create is refused cleanly @security', async ({ primaryPage, tmPage, emPage }) => {
    await prime(primaryPage);
    const rows: string[] = [];
    for (const [who, p] of [['TM', tmPage], ['EM', emPage]] as const) {
      await prime(p);
      const scoped = await get(p, '/skills/manager-departments');
      const depts: any[] = scoped.body?.data?.departments ?? scoped.body?.data ?? [];
      const own = depts.find((d: any) => d.publicId !== ADMIN_DEPT);
      expect(own, `${who} must manage at least one department`).toBeTruthy();
      const outName = uniq(`-${who}-out`);
      const out = await send(p, 'post', '/skills/add', { multipart: { name: outName, departmentIds: ADMIN_DEPT, logoLink: LOGO } });
      const orphans = (await findByName(primaryPage, outName)).length;
      const retry = await send(p, 'post', '/skills/add', { multipart: { name: outName, departmentIds: ADMIN_DEPT, logoLink: LOGO } });
      const ownRes = await send(p, 'post', '/skills/add', { multipart: { name: uniq(`-${who}-own`), departmentIds: own.publicId, logoLink: LOGO } });
      if (out.status === 201 || ownRes.status === 201) created.push('x');
      rows.push(`${who}: out=${out.status} orphans=${orphans} retry=${retry.status} own=${ownRes.status}`);
      if (orphans > 0 || retry.status !== 403) defect(`${who} out-of-scope create left an orphan skill or a misleading retry: ${rows[rows.length - 1]}`);
    }
    test.info().annotations.push({ type: 'matrix', description: rows.join(' | ') });
    for (const r of rows) expect(r).toMatch(/out=403 orphans=0 retry=403 own=201/);
  });
});
