/**
 * CI/CD Pipeline — Positive-Flow Suite
 *
 * A single, segregated spec file covering only HAPPY-PATH / positive flows across every module,
 * intended as a fast pass/fail gate for CI/CD (not a replacement for the full tests/e2e suite).
 * Organized module-wise via test.describe blocks below. Every test reuses the existing, already
 *-verified page objects and auth fixtures from tests/ — nothing here duplicates locators or login
 * logic, it only re-sequences already-proven steps into one segregated, CI-friendly file.
 *
 * Run standalone via: npm run test:ci  (see ci-cd-pipeline/playwright.config.ts)
 * Tag: @positive — every test below carries this tag for grep-based CI filtering, in addition to
 * the category tag (@smoke/@functional) it inherits from its source test case for traceability.
 */
import { test, expect } from '../../tests/fixtures/auth';
import { EmployeeDetailsPage } from '../../tests/page-objects/employee/employee-details.page';
import { GoalsPage } from '../../tests/page-objects/employee/goals.page';
import { SkillsPage } from '../../tests/page-objects/employee/skills.page';
import { CompetenciesPage } from '../../tests/page-objects/department/competencies.page';
import { AllocationRequestsPage } from '../../tests/page-objects/pm-pmo/allocation-requests.page';
import { PmProjectsPage } from '../../tests/page-objects/pm-pmo/pm-projects.page';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });
const BASE_URL = process.env.BASE_URL || 'https://simerp-dev.simform.solutions';

// ─── Auth ─────────────────────────────────────────────────────────────────────
// primaryPage/testUserPage build their own BrowserContext directly (tests/fixtures/auth.ts), so —
// unlike the default `page` fixture — they do NOT inherit playwright.config.ts's `use.baseURL`;
// goto() needs the absolute BASE_URL here, matching tests/e2e/auth/login.spec.ts's convention.

test.describe('CI/CD Positive Flows — Auth', () => {
  test('TC-AUTH-001 primary session reaches the authenticated app @smoke @positive', async ({ primaryPage }) => {
    await primaryPage.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await primaryPage.waitForLoadState('networkidle').catch(() => {});

    expect(primaryPage.url()).not.toMatch(/login|signin|microsoftonline|live\.com/i);
    await expect(
      primaryPage.getByText('Employee', { exact: true }).or(primaryPage.getByText('Help & Support', { exact: true })).first()
    ).toBeVisible({ timeout: 15_000 });
  });

  test('TC-AUTH-002 test-user session reaches the authenticated app @smoke @positive', async ({ testUserPage }) => {
    await testUserPage.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await testUserPage.waitForLoadState('networkidle').catch(() => {});

    expect(testUserPage.url()).not.toMatch(/login|signin|microsoftonline|live\.com/i);
    await expect(
      testUserPage.getByText('Employee', { exact: true }).or(testUserPage.getByText('Help & Support', { exact: true })).first()
    ).toBeVisible({ timeout: 15_000 });
  });
});

// ─── Employee ─────────────────────────────────────────────────────────────────

test.describe('CI/CD Positive Flows — Employee', () => {
  test.describe('Employee Details', () => {
    test('TC-EMPDET-001 Current Employee tab loads with count matching API @smoke @positive', async ({ page }) => {
      const employeePage = new EmployeeDetailsPage(page);
      await employeePage.navigateToEmployeesAndCaptureApi();
      await expect(employeePage.currentEmployeeTab).toBeVisible();
      await expect(employeePage.employeeGrid).toBeVisible();

      const gridRows = await employeePage.getVisibleRowCount();
      expect(gridRows).toBeGreaterThan(0);

      const apiTotal = await employeePage.fetchApiEmployeeTotal('current');
      if (apiTotal !== null && !(await employeePage.nextPageBtn.isEnabled().catch(() => false))) {
        expect(gridRows).toBe(apiTotal);
      }
    });
  });

  test.describe('Goals', () => {
    test('TC-EMPGOL-003 Admin creates a Goal and deletes it once eligible — full create/delete round trip @smoke @positive', async ({ page }) => {
      const goalsPage = new GoalsPage(page);
      await goalsPage.navigateToGoals();
      await goalsPage.openAddGoalPanel();

      const goalName = goalsPage.createUniqueGoalName('CIPOS');
      await goalsPage.fillGoalName(goalName);
      if (await goalsPage.isDuplicateWarningVisible()) await goalsPage.acknowledgeDuplicateWarning();
      await goalsPage.selectGoalType('Technical');
      await goalsPage.savePanel();

      await goalsPage.searchGoals(goalName);
      await expect(goalsPage.getGoalRow(goalName)).toBeVisible();

      const enabled = await goalsPage.isDeleteEnabled(goalName);
      expect(enabled, 'Delete option is not enabled for a freshly created 0-assignment goal').toBe(true);

      await goalsPage.clickDeleteGoal(goalName);
      if (await goalsPage.getConfirmDialog().isVisible().catch(() => false)) {
        await goalsPage.confirmDeleteGoal();
      }
      await expect(goalsPage.getGoalRow(goalName)).not.toBeVisible();
    });
  });

  test.describe('Skills', () => {
    test('TC-EMPSKL-005 Selecting a skill renders Primary/Secondary Holders with correct counts @smoke @positive', async ({ page }) => {
      const skillsPage = new SkillsPage(page);
      await skillsPage.navigateToSkills();
      const rows = skillsPage.skillRows;
      const rowCount = await rows.count().catch(() => 0);
      test.skip(rowCount === 0, 'No skills present in the Skills Listing to select');

      const firstSkillName = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
      await skillsPage.selectSkillFromListing(firstSkillName);

      await expect(skillsPage.primaryHoldersHeader).toBeVisible();
      await expect(skillsPage.secondaryHoldersHeader).toBeVisible();

      const primaryCount = await skillsPage.getPrimaryCount();
      const secondaryCount = await skillsPage.getSecondaryCount();
      const primarySection = skillsPage.getPrimaryHoldersSection();
      const secondarySection = skillsPage.getSecondaryHoldersSection();

      if (primaryCount) {
        expect(await primarySection.getByRole('listitem').count().catch(() => 0)).toBe(primaryCount);
      }
      if (secondaryCount) {
        expect(await secondarySection.getByRole('listitem').count().catch(() => 0)).toBe(secondaryCount);
      }
    });
  });
});

// ─── Department ───────────────────────────────────────────────────────────────

test.describe('CI/CD Positive Flows — Department', () => {
  test.describe('Competencies', () => {
    test('TC-DEPTCMP-002 TM/EM/Admin edits an existing competency and the listing updates immediately @smoke @positive', async ({ page }) => {
      const competenciesPage = new CompetenciesPage(page);
      await competenciesPage.navigateToCompetencies();
      const rowCount = await competenciesPage.getRowCount();
      test.skip(rowCount === 0, 'No existing competency available to edit');

      const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
      const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
      test.skip(!identifier, 'Could not read an identifier from the first competency row');

      const opened = await competenciesPage.clickEditCompetency(identifier);
      test.skip(!opened, 'Edit control not found on the competency row');

      await competenciesPage.fillDescription(`CI positive-flow update ${Date.now()}`);
      await competenciesPage.selectTargetedMembers('Selected');
      await competenciesPage.fillNoOfEmployees(4);
      await competenciesPage.selectStatus('Completed');
      await competenciesPage.selectPriority('Medium');
      await competenciesPage.savePanel();

      const row = competenciesPage.getCompetencyRow(identifier);
      await expect(row, 'edited competency row is no longer visible in the listing').toBeVisible();
      expect(await competenciesPage.getRowStatus(row)).toBe('Completed');
      expect(await competenciesPage.getRowPriority(row)).toBe('Medium');
    });
  });
});

// ─── PM & PMO ─────────────────────────────────────────────────────────────────

test.describe('CI/CD Positive Flows — PM & PMO', () => {
  test.describe('Allocation Requests', () => {
    test('TC-ALCTKT-018 Requests page summary bar counts tickets by state @functional @positive', async ({ page }) => {
      const requestsPage = new AllocationRequestsPage(page);
      await requestsPage.navigate();

      await expect(requestsPage.kpiAllTicketsText).toBeVisible();
      await expect(requestsPage.kpiOpenBtn).toBeVisible();
      await expect(requestsPage.kpiInReviewBtn).toBeVisible();
      await expect(requestsPage.kpiAwaitingBtn).toBeVisible();
      await expect(requestsPage.kpiApprovedBtn).toBeVisible();

      const counts = await requestsPage.getKpiCounts();
      for (const [label, value] of Object.entries(counts)) {
        expect(value, `${label} tile should be a non-negative count`).toBeGreaterThanOrEqual(0);
      }
    });
  });

  test.describe('My Projects', () => {
    test('TC-PMPROJ-010 Summary KPI cards render with valid counts matching the project list @functional @positive', async ({ pmPage }) => {
      const pmProjectsPage = new PmProjectsPage(pmPage);
      await pmProjectsPage.navigate();

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
  });
});
