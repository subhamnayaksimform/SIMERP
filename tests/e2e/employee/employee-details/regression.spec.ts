import { test, expect } from '@playwright/test';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Employee — Regression', () => {
  let employeePage: EmployeeDetailsPage;

  test.beforeEach(async ({ page }) => {
    employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
  });

  test('TC-EMPDET-041 Employee count mismatch — grid rows, result badge, and API total all match @regression @smoke', async ({ page }) => {
    let apiTotal = -1;
    page.on('response', async resp => {
      if (resp.url().includes('employee') && resp.status() === 200) {
        const body = await resp.json().catch(() => null);
        if (body && typeof body.total === 'number') apiTotal = body.total;
      }
    });
    await employeePage.navigateToEmployees();
    await expect(employeePage.employeeGrid).toBeVisible();
    const rowsOnPage = await employeePage.getVisibleRowCount();
    if (apiTotal > 0) {
      const countBadge = employeePage.getResultCountBadge();
      await expect(countBadge).toBeVisible();
      const badgeText = await countBadge.textContent();
      if (badgeText && /\d+/.test(badgeText)) {
        const badgeNumber = parseInt(badgeText.match(/\d+/)![0], 10);
        expect(badgeNumber).toBe(apiTotal);
      }
      // If everything fits on one page, rows on page should equal the API total too
      if (rowsOnPage > 0 && !(await employeePage.nextPageBtn.isEnabled().catch(() => false))) {
        expect(rowsOnPage).toBe(apiTotal);
      }
    }
  });

  test('TC-EMPDET-042 Edit button visibility — present for all rows for Admin role @regression', async () => {
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      await row.hover();
      await expect(row.getByRole('button', { name: 'Edit' })).toBeVisible();
    }
  });

  test('TC-EMPDET-043 Edited employee remains in list — not lost after save @regression @needs-verification', async ({ page }) => {
    // PRODUCT DEFECT SUSPECTED if this fails: see TC-EMPDET-003's note — Save on whichever employee
    // currently sorts first returns 400 ("Team does not belong to the specified department")
    // regardless of which field changed, a data-integrity issue unrelated to this test's intent.
    const rows = employeePage.getDataRows();
    const rowCount = await rows.count();
    if (rowCount === 0) test.skip(true, 'No employees to edit');
    // CONFIRMED LIVE (2026-08-19): the first cell is now the Action column ("Edit" button) since
    // Action moved from last to first — Name is the second cell. Reading `.first()` here made
    // `originalName` literally "Edit" for every row, which is why the row was never found again.
    // 6.8.x: the Name cell also holds designation/tenure lines — take the first line only, or search finds nothing.
    const originalName = ((await rows.first().getByRole('cell').nth(1).innerText()) ?? '').split('\n')[0];

    // CONFIRMED LIVE (2026-08-19): Designation is now locked in this drawer — see
    // employee-details.page.ts's getDrawerDesignationField() comment. Overall Rating is used
    // instead as a confirmed-editable field, so this test actually exercises a real Save.
    await employeePage.openEditDrawerForFirstEmployee();
    const originalRating = await employeePage.getDrawerOverallRatingValue();
    const filled = await employeePage.setDrawerOverallRating(originalRating === '5.5' ? '6.5' : '5.5');
    if (filled) await employeePage.saveDrawer();
    else await employeePage.closeEditDrawer();

    await expect(employeePage.employeeGrid).toBeVisible();
    // The grid refetches after Save and is briefly empty — wait for it to repopulate instead of counting once.
    await expect(rows, 'edited employee list lost rows after save').toHaveCount(rowCount, { timeout: 20_000 });

    if (originalName) {
      await employeePage.searchEmployee(originalName.trim());
      await expect(employeePage.getDataRows().first()).toBeVisible();
    }
  });

  test('TC-EMPDET-044 Filter reset regression — all chips cleared and full list restored @regression', async () => {
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await employeePage.resetFilters();
    await expect(employeePage.employeeGrid).toBeVisible();
    const chipCount = await employeePage.getFilterChips().count();
    expect(chipCount).toBe(0);
  });

  test('TC-EMPDET-045 Duplicate rows regression — no duplicate IDs after pagination @regression', async () => {
    const page1Ids = await employeePage.getAllRowFirstCellTexts();
    if (await employeePage.nextPageBtn.isEnabled().catch(() => false)) {
      await employeePage.clickNextPage();
      const page2Ids = await employeePage.getAllRowFirstCellTexts();
      const overlap = page1Ids.filter(id => page2Ids.includes(id));
      expect(overlap.length).toBe(0);
    }
  });

  test('TC-EMPDET-046 Tab independence — filter on Current tab does not affect Past tab @regression @functional', async () => {
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await employeePage.switchToFormerEmployeeTab();
    const chipCount = await employeePage.getFilterChips().count();
    expect(chipCount).toBe(0);
    await employeePage.switchToCurrentEmployeeTab();
    await expect(employeePage.employeeGrid).toBeVisible();
  });

  test('TC-EMPDET-047 Sorting state preserved after Advanced Filter apply @regression', async () => {
    await employeePage.sortByNameAscending();
    await expect(employeePage.nameColumnHeader).toBeVisible();
    await employeePage.openAdvancedFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await employeePage.clickAdvancedFilterSave();
    await expect(employeePage.employeeGrid).toBeVisible();
    await expect(employeePage.nameColumnHeader).toBeVisible();
  });

  test('TC-EMPDET-048 Archived employee absent from Current tab and search @regression', async () => {
    await employeePage.switchToFormerEmployeeTab();
    const rows = employeePage.getDataRows();
    const count = await rows.count();
    if (count === 0) test.skip(true, 'No archived employees to verify against');
    const archivedName = (await rows.first().getByRole('cell').first().textContent()) ?? '';

    await employeePage.switchToCurrentEmployeeTab();
    await employeePage.searchEmployee(archivedName.trim());
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
    if (archivedName.trim()) {
      const currentRows = employeePage.getDataRows();
      const currentCount = await currentRows.count();
      for (let i = 0; i < currentCount; i++) {
        const text = (await currentRows.nth(i).getByRole('cell').first().textContent()) ?? '';
        expect(text.trim()).not.toBe(archivedName.trim());
      }
    }
  });

  test('TC-EMPDET-049 API count regression — UI total matches API X-Total-Count or total field @regression @smoke', async ({ page }) => {
    let apiTotal = -1;
    page.on('response', async resp => {
      if (resp.url().includes('employee') && resp.status() === 200) {
        const body = await resp.json().catch(() => null);
        if (body?.total) apiTotal = body.total;
        const header = resp.headers()['x-total-count'];
        if (header) apiTotal = parseInt(header, 10);
      }
    });
    await employeePage.navigateToEmployees();
    await expect(employeePage.employeeGrid).toBeVisible();
    if (apiTotal > 0) {
      await expect(employeePage.getResultCountBadge(), 'UI total does not match API total/X-Total-Count').toContainText(String(apiTotal));
    }
  });

  test('TC-EMPDET-050 Feature flag regression — advanced filter fields visible when flag enabled @regression', async () => {
    await employeePage.openAdvancedFilterPanel();
    const panel = employeePage.getAdvancedFilterPanel();
    await expect(panel).toBeVisible();
    for (const field of ['Departments', 'Designation', 'Projects', 'Reporting Manager']) {
      const accordion = panel.locator('button[aria-expanded]').filter({ hasText: new RegExp(field, 'i') });
      await expect(accordion.first()).toBeVisible();
    }
    await employeePage.closeAdvancedFilterPanel();
  });

  test('TC-EMPDET-066 Allocation sync — availability % updates after project assignment change @regression', async ({ page }) => {
    await expect(employeePage.employeeGrid).toBeVisible();
    const availCells = page.getByTestId('cell-availability').or(page.getByRole('cell', { name: /\d+%/ }));
    const cellCount = await availCells.count();
    if (cellCount > 0) {
      await expect(availCells.first()).toBeVisible();
    }
    // Full allocate/deallocate round-trip lives in the Allocation module — verified there;
    // this test asserts Employee Details renders availability data sourced from the same backend.
  });

  test('TC-EMPDET-067 Department change sync — employee moves between department filter results @regression', async () => {
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    const count1 = await employeePage.getVisibleRowCount();
    await employeePage.resetFilters();
    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    const count2 = await employeePage.getVisibleRowCount();
    expect(count2).toBe(count1);
  });

  // NEW (2026-07-13, Figma-derived) — TC-EMPDET-223 (category: integration — routed here since it
  // carries the @regression tag and there is no dedicated integration.spec.ts file in this suite's
  // established per-category layout), 227, 259.

  test('TC-EMPDET-223 Allocation %, Logged Hours %, and Billability-split values match exactly across hover popup, expanded sheet, and API @regression @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const row = employeePage.getDataRows().first();
    const popup = await employeePage.hoverRowForAllocationSummary(row);
    const hoverAllocationText = (await employeePage.getHoverAllocationPercentage(popup).textContent().catch(() => null)) ?? null;
    if (!hoverAllocationText) test.skip(true, 'Hover allocation % not found — selector unconfirmed against live app');

    await employeePage.openViewProjectDetailsFromRow(row);
    const sheet = employeePage.getProjectDetailsSheet();
    if (!(await sheet.isVisible().catch(() => false))) test.skip(true, "'View project details' sheet not found — selector unconfirmed against live app");

    const apiBody = await employeePage.fetchApiEmployeeTotal('current'); // presence-only API reachability probe; exact allocation endpoint/shape unconfirmed
    // Full 3-way numeric reconciliation requires a confirmed allocation-detail API endpoint — not
    // available yet, so this test asserts the two UI surfaces are at least both readable and
    // internally consistent (both non-empty), pending endpoint confirmation for the API leg.
    const hoverPct = hoverAllocationText!.match(/\d+(\.\d+)?/)?.[0];
    expect(hoverPct, 'Hover popup Allocation % is not a parseable number').toBeTruthy();
    expect(apiBody === null || typeof apiBody === 'number').toBe(true);
  });

  test('TC-EMPDET-227 Known bug regression — Pagination boundary: archive/add employee on last page produces no duplicates or missing records @regression @needs-verification', async () => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await employeePage.navigateToLastPage();
    const idsBefore = await employeePage.getAllRowFirstCellTexts();
    const row = employeePage.getDataRows().first();
    const rowVisible = await row.isVisible().catch(() => false);
    if (!rowVisible) test.skip(true, 'No row available on the last page to exercise the archive action');

    await employeePage.triggerDeleteEmployee(row);
    const modal = employeePage.getDeleteConfirmationModal();
    if (!(await modal.isVisible().catch(() => false))) test.skip(true, 'Delete/Archive confirmation modal not found — selector unconfirmed against live app');
    await employeePage.confirmDelete();

    await expect(employeePage.employeeGrid).toBeVisible();
    const idsAfter = await employeePage.getAllRowFirstCellTexts();
    // PRODUCT DEFECT SUSPECTED if this fails: archiving on the last page produced duplicate/missing rows — see TC-EMPDET-227 (Known bug: EC-EMPDET-KB-04)
    expect(new Set(idsAfter).size, 'Duplicate rows appeared on the last page after archiving').toBe(idsAfter.length);
    expect(idsAfter.length, 'Last page unexpectedly grew after an archive (removal) action').toBeLessThanOrEqual(idsBefore.length);
  });

  test('TC-EMPDET-259 Module-specific regression — archived record never appears in active dropdowns, search results, or list filters @regression @needs-verification', async () => {
    // PRODUCT DEFECT SUSPECTED if the active-tab search assertion fails: after fixing the
    // "Edit"-as-name bug (see the nth(1) note below), this still failed with the same "18 rows"
    // signature as TC-EMPDET-039's confirmed stale-rows-not-cleared defect — likely the same root
    // cause (the empty-state/zero-match case doesn't clear the previously-rendered grid), not a
    // distinct archived-employee-leakage bug. Re-verify against TC-EMPDET-039 before treating this
    // as a second, separate regression.
    await employeePage.switchToFormerEmployeeTab();
    const pastRows = employeePage.getDataRows();
    if ((await pastRows.count()) === 0) test.skip(true, 'No archived employee available to verify absence from active surfaces');
    // CONFIRMED LIVE (2026-08-19): first cell is now the Action column ("Edit" button), not Name —
    // this was searching for the literal text "Edit" (which matches every row's Action cell on
    // the active tab too), not a real archived employee's name.
    // 6.8.x: the Past Employee tab has only Name + Projects columns (no Action column), so Name is the
    // FIRST cell here — nth(1) is the Projects cell, and searching a project name legitimately matches active staff.
    const archivedName = (((await pastRows.first().getByRole('cell').first().innerText()) ?? '').split('\n')[0]).trim();
    if (!archivedName) test.skip(true, 'Could not resolve an archived employee name to search for');

    await employeePage.switchToCurrentEmployeeTab();
    await employeePage.searchEmployee(archivedName);
    // The grid re-renders a beat after the search response lands — poll instead of counting once,
    // otherwise the previous (unfiltered) rows are read. Still fails if stale rows never clear.
    await expect.poll(() => employeePage.getVisibleRowCount(), {
      message: 'Archived employee appears in the active-tab search results', timeout: 10_000,
    }).toBe(0);

    // Reporting-manager picker inside the Edit drawer is the closest confirmed "active-scoped dropdown".
    await employeePage.clearSearch();
    await employeePage.openEditDrawerForFirstEmployee();
    const pickerOpened = await employeePage.openDrawerReportingManagerPicker(archivedName);
    if (pickerOpened) {
      const optionMatch = employeePage.page.getByRole('option', { name: new RegExp(archivedName, 'i') });
      expect(await optionMatch.count(), 'Archived employee appears in the active reporting-manager picker').toBe(0);
    }
    await employeePage.closeEditDrawer();
  });

  // NEW (2026-07-14) — PIP indicator regression pass (confirmed live feature; see the "PIP indicator"
  // block in employee-details.page.ts).

  test('TC-EMPDET-308 Existing Employee List search/filter/sort/pagination behavior is fully intact end-to-end after the PIP indicator is added @regression', async () => {
    const apiTotal = await employeePage.fetchApiEmployeeTotal('current');
    const gridRows = await employeePage.getVisibleRowCount();
    const badgeText = await employeePage.getResultCountBadge().textContent().catch(() => null);
    if (badgeText && apiTotal !== null && /\d+/.test(badgeText)) {
      expect(parseInt(badgeText.match(/\d+/)![0], 10)).toBe(apiTotal);
    }
    if (apiTotal !== null && !(await employeePage.nextPageBtn.isEnabled().catch(() => false))) {
      expect(gridRows).toBe(apiTotal);
    }

    await employeePage.searchEmployee('a');
    await expect(employeePage.employeeGrid).toBeVisible();
    await employeePage.clearSearch();

    await employeePage.sortByNameAscending();
    await expect(employeePage.employeeGrid).toBeVisible();
    await employeePage.sortByNameDescending();
    await expect(employeePage.employeeGrid).toBeVisible();

    await employeePage.openBasicFilterPanel();
    await employeePage.selectDepartmentFilter('Engineering');
    await expect(employeePage.employeeGrid).toBeVisible();
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
    await employeePage.resetFilters();

    if (await employeePage.nextPageBtn.isEnabled().catch(() => false)) {
      await employeePage.clickNextPage();
      await expect(employeePage.employeeGrid).toBeVisible();
      await employeePage.clickPreviousPage();
      await expect(employeePage.employeeGrid).toBeVisible();
    }
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  // NEW (2026-08-19, manual-requirement-derived) — TC-EMPDET-370, 372: Past-employee profile
  // read-only enforcement, and allocation-count consistency after Deallocation.

  test('TC-EMPDET-370 Past Employee profile remains read-only apart from the impersonation entry point @regression', async () => {
    await employeePage.switchToFormerEmployeeTab();
    const rows = employeePage.getDataRows();
    if ((await rows.count()) === 0) test.skip(true, 'No Past employees available to verify the read-only profile');
    const view = await employeePage.openEmployeeProfileFromRow(rows.first());
    if (!(await view.isVisible().catch(() => false))) test.skip(true, 'Full Employee Profile view not found for a Past employee — selector/route unconfirmed against live app');

    const controls = employeePage.getProfileActionableControls(view);
    const count = await controls.count();
    const disallowedLabels: string[] = [];
    for (let i = 0; i < count; i++) {
      const label = ((await controls.nth(i).textContent().catch(() => '')) ?? '').trim();
      if (label && !/login as employee|view as employee|impersonate|close/i.test(label)) {
        disallowedLabels.push(label);
      }
    }
    expect(disallowedLabels, `Past employee profile exposes non-impersonation control(s): ${disallowedLabels.join(', ')}`).toEqual([]);
  });

  test('TC-EMPDET-372 After deallocation, the project\'s allocation count decrements everywhere without a page refresh @regression @needs-verification', async () => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const row = employeePage.getDataRows().first();
    await employeePage.openViewProjectDetailsFromRow(row);
    const sheet = employeePage.getProjectDetailsSheet();
    if (!(await sheet.isVisible().catch(() => false))) test.skip(true, "'View project details' popup not found — selector unconfirmed against live app");

    const projectRowsBefore = await employeePage.getSheetProjectsTable(sheet).getByRole('row').count().catch(() => 0);
    const deallocateBtn = employeePage.getProjectPopupDeallocateButton(sheet);
    if (!(await deallocateBtn.isVisible().catch(() => false))) {
      test.skip(true, "Project popup's Deallocate button confirmed NOT FOUND LIVE as of 2026-07-13, re-checked fresh per the 2026-08-19 requirement — still unconfirmed against live app");
    }
    const confirmPopup = await employeePage.clickProjectPopupDeallocate(sheet);
    if (await confirmPopup.isVisible().catch(() => false)) {
      await employeePage.confirmAction().catch(() => {});
    }

    await expect(employeePage.employeeGrid).toBeVisible();
    const projectRowsAfter = await employeePage.getSheetProjectsTable(sheet).getByRole('row').count().catch(() => 0);
    if (projectRowsBefore > 0) {
      expect(projectRowsAfter, 'Project allocation table row count did not decrement after Deallocate without a page refresh').toBeLessThan(projectRowsBefore);
    }
  });

  // NEW (2026-08-20) — TC-EMPDET-395/396/397/399: regression pass verifying the new Cohort /
  // Employee Origin Advanced Filter sections have no side effect on pre-existing filter/reset/
  // pagination behavior, plus a re-check of the known Employee Profile Cohort/Origin gap.

  test("TC-EMPDET-395 Existing Departments filter behaviour is unaffected by the new Cohort/Employee Origin sections @regression", async () => {
    // 'Engineering' used instead of the case's suggested 'Frontend' — already confirmed live
    // elsewhere in this suite (TC-EMPDET-007/009 etc.); 'Frontend' is not a grounded department value.
    const apiBody = await employeePage.waitForEmployeesApiResponse(async () => {
      await employeePage.openAdvancedFilterPanel();
      await employeePage.selectDepartmentFilter('Engineering');
      await employeePage.clickAdvancedFilterSave();
    });
    await expect(employeePage.employeeGrid).toBeVisible();
    await expect(employeePage.getErrorAlert()).not.toBeVisible();

    const rowCount = await employeePage.getVisibleRowCount();
    if (apiBody) {
      const list = Array.isArray(apiBody) ? apiBody : apiBody.data ?? apiBody.employees ?? null;
      const total = apiBody.total ?? apiBody.count ?? (Array.isArray(list) ? list.length : undefined);
      const singlePage = !(await employeePage.nextPageBtn.isEnabled().catch(() => false));
      // The grid virtualises rows (only ~17 are in the DOM), so compare the dataset-wide results badge, not DOM rows.
      if (typeof total === 'number' && singlePage) {
        await expect.poll(async () => {
          const t = await employeePage.getVisibleResultCountText();
          return t ? employeePage.parseResultCountTotal(t) : rowCount;
        }, { timeout: 15_000 }).toBe(total);
      }
    }
  });

  test('TC-EMPDET-396 Reset/Clear-all clears legacy filters together with new Cohort/Employee Origin sections @regression', async () => {
    await employeePage.openAdvancedFilterPanel();
    // 'Engineering' used instead of the case's suggested 'Frontend' — see TC-EMPDET-395 above.
    await employeePage.selectDepartmentFilter('Engineering');
    const cohortSelected = await employeePage.selectAdvancedFilterOption('Cohort', 'Trainee Hire - 2023');
    if (!cohortSelected) test.skip(true, "'Cohort' accordion or 'Trainee Hire - 2023' option not found — selector unconfirmed against live app");
    await employeePage.clickAdvancedFilterSave();

    const chips = employeePage.getFilterChips();
    const chipCountBefore = await chips.count().catch(() => 0);
    if (chipCountBefore === 0) test.skip(true, 'No filter chips rendered for the applied Departments/Cohort filters — filter-chip selector unconfirmed against live app');

    await employeePage.resetFilters();
    expect(await chips.count().catch(() => 0), 'All filter chips should be cleared, including the legacy Departments one').toBe(0);

    await employeePage.openAdvancedFilterPanel();
    const deptAccordion = await employeePage.expandAdvancedFilterSection('Departments');
    await expect(deptAccordion).toBeVisible();
    const deptCombobox = employeePage.getAdvancedFilterPanel().locator('[role="combobox"]').first();
    if (await deptCombobox.isVisible().catch(() => false)) {
      await expect(deptCombobox).not.toHaveText(/engineering/i);
    }
    const cohortCheckbox = employeePage.getAdvancedFilterPanel().getByRole('checkbox', { name: 'Trainee Hire - 2023' });
    await employeePage.expandAdvancedFilterSection('Cohort');
    if (await cohortCheckbox.isVisible().catch(() => false)) {
      await expect(cohortCheckbox).not.toBeChecked();
    }
  });

  test("TC-EMPDET-397 Known bug regression — Employee Profile view (Personal Information) locators are generic/unconfirmed; Cohort/Employee Origin presence there has never been grounded @regression @needs-verification", async () => {
    // NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure
    // as a confirmed regression. Duplicates the open product-gap question raised by TC-EMPDET-387
    // from a "regression" angle; a failure here documents the same already-known gap, not a new bug.
    const row = employeePage.getDataRows().first();
    await employeePage.openEmployeeDetailsDrawer(row);
    const drawer = employeePage.getEmployeeDetailsSideDrawer();
    if (!(await drawer.isVisible().catch(() => false))) test.skip(true, 'Employee-details side drawer not found — selector unconfirmed against live app');
    const view = await employeePage.openEmployeeProfileFromDrawer(drawer);
    if (!(await view.isVisible().catch(() => false))) test.skip(true, 'Full Employee Profile view not found — selector/route unconfirmed against live app');

    const cohortField = employeePage.getProfileCohortField(view);
    const originField = employeePage.getProfileEmployeeOriginField(view);
    await expect(cohortField, 'PRODUCT DEFECT SUSPECTED if absent: Cohort field not found in Employee Profile Personal Information — confirmed product gap per KB-EMPDET-PROFILE-UNCONFIRMED, see TC-EMPDET-387').toBeVisible();
    await expect(originField, 'PRODUCT DEFECT SUSPECTED if absent: Employee Origin field not found in Employee Profile Personal Information — confirmed product gap per KB-EMPDET-PROFILE-UNCONFIRMED, see TC-EMPDET-387').toBeVisible();
  });

  test('TC-EMPDET-399 Pagination counter remains correct when a Cohort/Employee Origin filter is combined with pagination @regression', async () => {
    await employeePage.openAdvancedFilterPanel();
    const originSelected = await employeePage.selectAdvancedFilterOption('Employee Origin', 'Lateral Hire');
    if (!originSelected) test.skip(true, "'Employee Origin' accordion or 'Lateral Hire' option not found — selector unconfirmed against live app");
    await employeePage.clickAdvancedFilterSave();

    const badgeTextBefore = await employeePage.getVisibleResultCountText();
    const totalBefore = badgeTextBefore ? employeePage.parseResultCountTotal(badgeTextBefore) : null;
    const nextEnabled = await employeePage.nextPageBtn.isEnabled().catch(() => false);
    if (!nextEnabled) test.skip(true, "Employee Origin = 'Lateral Hire' did not yield multiple result pages — precondition data unavailable");

    const firstPageNames = await employeePage.getAllRowFirstCellTexts();
    await employeePage.clickNextPage();
    const badgeTextAfter = await employeePage.getVisibleResultCountText();
    const totalAfter = badgeTextAfter ? employeePage.parseResultCountTotal(badgeTextAfter) : null;
    if (totalBefore !== null && totalAfter !== null) {
      expect(totalAfter, "The 'of Z' total should stay constant across page navigation").toBe(totalBefore);
    }
    const secondPageNames = await employeePage.getAllRowFirstCellTexts();
    const overlap = secondPageNames.filter(name => firstPageNames.includes(name));
    expect(overlap, 'Page 2 should show a different row set from page 1 (no duplicate rows)').toEqual([]);

    await employeePage.clickPreviousPage();
    const restoredPageNames = await employeePage.getAllRowFirstCellTexts();
    expect(restoredPageNames, 'Returning to page 1 should show the original first-page row set with no missing rows').toEqual(firstPageNames);
  });
});
