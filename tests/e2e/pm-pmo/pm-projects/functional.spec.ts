// Automated against the LIVE deployed feature at BASE_URL/my-projects, using the `csmPage` fixture
// (tarun.sharma@simformsolutions.com — a real CSM persona).
//
// RE-GROUNDED (SimERP 6.2.0): /my-projects is now CSM-only. Live probe — CSM loads the real page
// ("Project Details" heading, "Search projects" input, KPI tiles); PM (hardik.trivedi) and PMO
// (bhumi.chauhan) are both redirected to /unauthorized ("Access Denied"). These tests previously
// ran as `csmPage` and failed at navigate() waiting 20s for "Search projects" on a page the PM can
// no longer open. Switched to the role that actually owns the feature; confirm with the product
// team that CSM-only is the intended access model, not a regression.
// See tests/page-objects/pm-pmo/pm-projects.page.ts header comment for how the route was found.
// Read-only / non-mutating by design — "New Allocation" is never clicked/submitted here.
import { test, expect } from '../../../fixtures/auth';
import { PmProjectsPage } from '../../../page-objects/pm-pmo/pm-projects.page';

test.describe('PM & PMO — My Projects — Functional', () => {
  let pmProjectsPage: PmProjectsPage;

  test.beforeEach(async ({ csmPage }) => {
    pmProjectsPage = new PmProjectsPage(csmPage);
    await pmProjectsPage.navigate();
  });

  test('TC-PMPROJ-010 Summary KPI cards render with valid counts matching the project list @functional', async () => {
    await expect(pmProjectsPage.kpiTotalActiveProjects).toBeVisible();
    await expect(pmProjectsPage.kpiTotalAllocation).toBeVisible();
    await expect(pmProjectsPage.kpiFixedAllocation).toBeVisible();
    await expect(pmProjectsPage.kpiDynamicAllocation).toBeVisible();

    const kpis = await pmProjectsPage.getKpis();
    for (const [label, value] of Object.entries(kpis)) {
      expect(value, `${label} should be a non-negative count`).toBeGreaterThanOrEqual(0);
    }

    const rowCount = await pmProjectsPage.getAllProjectRows().count();
    const stableTotalActiveProjects = await pmProjectsPage.waitForStableKpiTotalActiveProjects();
    expect(stableTotalActiveProjects).toBe(rowCount);
  });

  test('TC-PMPROJ-006 Search project list by project name returns only matching projects @functional', async () => {
    const projectRows = pmProjectsPage.getAllProjectRows();
    const firstProjectLabel = await projectRows.first().getAttribute('aria-label'); // "View <name>"
    const projectName = (firstProjectLabel || '').replace(/^View /, '');
    expect(projectName.length).toBeGreaterThan(0);

    // Search a distinctive substring rather than the full name (names contain "|").
    const term = projectName.split('|')[0].trim();
    await pmProjectsPage.searchProjects(term);

    const filteredRows = pmProjectsPage.getAllProjectRows();
    const filteredCount = await filteredRows.count();
    expect(filteredCount).toBeGreaterThan(0);
    for (let i = 0; i < filteredCount; i++) {
      const label = await filteredRows.nth(i).getAttribute('aria-label');
      expect(label || '').toContain(term);
    }
  });

  test('TC-PMPROJ-011 / TC-PMPROJ-002 Clicking a project row opens its developer list with allocation, department, and hours data @smoke', async ({ csmPage }) => {
    const firstProjectLabel = await pmProjectsPage.getAllProjectRows().first().getAttribute('aria-label');
    const projectName = (firstProjectLabel || '').replace(/^View /, '');

    await pmProjectsPage.openProject(projectName);

    expect(csmPage.url()).toMatch(/\/my-projects\/[0-9a-f-]{36}$/i);
    await expect(csmPage.getByText(projectName, { exact: false }).first()).toBeVisible();

    const employeeRowCount = await pmProjectsPage.getAllEmployeeRows().count();
    expect(employeeRowCount).toBeGreaterThan(0);

    // Column headers confirmed live: Action | Employee Name | Department | Allocation % | Start Date | End Date | Logged hours
    for (const header of ['Employee Name', 'Department', 'Allocation %', 'Start Date', 'End Date', 'Logged hours']) {
      await expect(csmPage.getByRole('columnheader', { name: header }).or(csmPage.locator('th').filter({ hasText: header }))).toBeVisible();
    }
  });

  test('TC-PMPROJ-017 Search developer list by developer name returns only matching developers @functional', async ({ csmPage }) => {
    const firstProjectLabel = await pmProjectsPage.getAllProjectRows().first().getAttribute('aria-label');
    const projectName = (firstProjectLabel || '').replace(/^View /, '');
    await pmProjectsPage.openProject(projectName);

    const rowsBefore = await pmProjectsPage.getAllEmployeeRows().count();
    expect(rowsBefore).toBeGreaterThan(0);

    // Pull a real employee first name out of the currently rendered table rather than
    // hardcoding one, so this test doesn't depend on a specific seeded developer existing.
    // The row's first cell is an icon-only actions dropdown (blank text) — skip blank lines to
    // reach the actual employee-name line.
    const firstRowText = await pmProjectsPage.getAllEmployeeRows().first().innerText();
    const firstNonBlankLine = firstRowText.split('\n').map(l => l.trim()).find(Boolean) || '';
    const firstName = firstNonBlankLine.split(' ')[0];
    expect(firstName.length).toBeGreaterThan(0);

    await pmProjectsPage.searchEmployee(firstName);
    const rowsAfter = await pmProjectsPage.getAllEmployeeRows().count();
    expect(rowsAfter).toBeGreaterThan(0);
    expect(rowsAfter).toBeLessThanOrEqual(rowsBefore);
    for (let i = 0; i < rowsAfter; i++) {
      const text = await pmProjectsPage.getAllEmployeeRows().nth(i).innerText();
      expect(text).toContain(firstName);
    }
  });

  test('New Allocation entry point is visible on both the project list and a project\'s developer list (submission intentionally not exercised) @functional', async ({ csmPage }) => {
    await expect(pmProjectsPage.newAllocationBtn).toBeVisible();

    const firstProjectLabel = await pmProjectsPage.getAllProjectRows().first().getAttribute('aria-label');
    const projectName = (firstProjectLabel || '').replace(/^View /, '');
    await pmProjectsPage.openProject(projectName);
    await expect(pmProjectsPage.newAllocationBtn).toBeVisible();
  });
});
