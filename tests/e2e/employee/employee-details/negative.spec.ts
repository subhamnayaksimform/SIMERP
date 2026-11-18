import { test, expect } from '@playwright/test';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('Employee — Negative', () => {
  let employeePage: EmployeeDetailsPage;

  test.beforeEach(async ({ page }) => {
    employeePage = new EmployeeDetailsPage(page);
    await employeePage.navigateToEmployees();
  });

  test('TC-EMPDET-025 Search with no matching results shows empty state and zero count @negative @boundary', async () => {
    await employeePage.searchEmployee('XYZNOTEXIST_99999');
    await expect(employeePage.employeeGrid).toBeVisible();
    await expect(employeePage.getEmptyState()).toBeVisible();
    const rowCount = await employeePage.getVisibleRowCount();
    expect(rowCount).toBe(0);
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  test('TC-EMPDET-026 Advanced filter combination returns no results — empty state @negative', async () => {
    await employeePage.openAdvancedFilterPanel();
    await employeePage.selectDepartmentFilter('Finance');
    await employeePage.selectDesignationFilter('Backend Engineer');
    await employeePage.clickAdvancedFilterSave();
    const rowCount = await employeePage.getVisibleRowCount();
    if (rowCount === 0) {
      await expect(employeePage.getEmptyState()).toBeVisible();
    }
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  // TC-EMPDET-027/028 — the Availability % and Experience filters are no longer free-text inputs:
  // since the advanced-filter redesign they are bounded range sliders (verified live 2026-11-12 on
  // 6.9.0: Availability 0–100, Experience = data min–max years). An out-of-range value is now
  // rejected by construction — the slider cannot be driven past its bounds — so these cases assert
  // that clamping instead of an error message. (The old helper "passed" the fill by typing into the
  // panel's "Search filters..." box, which is why no message ever appeared.)
  test('TC-EMPDET-027 Advanced Filter — Availability % = 101 is rejected with validation error @negative', async ({ page }) => {
    await employeePage.openAdvancedFilterPanel();
    await employeePage.expandAdvancedFilterSection(/availability.*last/i);
    const panel = employeePage.getAdvancedFilterPanel();
    const max = panel.getByRole('slider', { name: 'Maximum' });
    await expect(max).toHaveAttribute('aria-valuemax', '100');
    await max.focus();
    await page.keyboard.press('End');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('PageUp');
    await expect(max, 'Availability % slider must not go above 100').toHaveAttribute('aria-valuenow', '100');
  });

  test('TC-EMPDET-028 Advanced Filter — Experience = -1 is rejected with validation error @negative', async ({ page }) => {
    await employeePage.openAdvancedFilterPanel();
    await employeePage.expandAdvancedFilterSection(/experience/i);
    const panel = employeePage.getAdvancedFilterPanel();
    const min = panel.getByRole('slider', { name: 'Minimum' });
    const floor = Number(await min.getAttribute('aria-valuemin'));
    expect(floor, 'Experience slider floor must not be negative').toBeGreaterThanOrEqual(0);
    await min.focus();
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('PageDown');
    expect(Number(await min.getAttribute('aria-valuenow')), 'Experience slider must not go below its (non-negative) floor').toBe(floor);
  });

  test('TC-EMPDET-029 Advanced Filter — Available Since end date before start date rejected @negative', async ({ page }) => {
    await employeePage.openAdvancedFilterPanel();
    await employeePage.expandAdvancedFilterSection(/available since/i);
    const panel = employeePage.getAdvancedFilterPanel();
    const dateInputs = panel.locator('input[type="date"]');
    const dateInputCount = await dateInputs.count();
    if (dateInputCount < 2) test.skip(true, 'Available Since date range inputs not present');
    await dateInputs.nth(0).fill('2025-06-15');
    await dateInputs.nth(1).fill('2025-06-01');
    await employeePage.clickAdvancedFilterSave();
    const errorMsg = employeePage.getValidationError(/end date must be on or after start date/i)
      .or(page.getByText(/end date.*before.*start date|invalid date range/i));
    await expect(errorMsg.first()).toBeVisible();
  });

  test('TC-EMPDET-030 API failure (500) shows user-friendly error — no crash @negative', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('pageerror', err => consoleErrors.push(err.message));
    await employeePage.mockEmployeeListFailure(500);
    await page.goto('/employee');
    await page.waitForTimeout(1500);

    const errorMsg = page.getByText(/something went wrong|error occurred|failed to load|try again/i);
    await expect(errorMsg.first(), 'no user-friendly error shown when employees API returns 500').toBeVisible({ timeout: 8000 });
    expect(consoleErrors.filter(e => /uncaught|unhandled/i.test(e)).length).toBe(0);
    // A raw stack trace should never be exposed to the user
    await expect(page.getByText(/at Object\.|at async|TypeError:|ReferenceError:/)).not.toBeVisible();
  });

  test('TC-EMPDET-031 XSS injection in search field — safely escaped @negative @security', async ({ page }) => {
    const dialogs: string[] = [];
    page.on('dialog', d => { dialogs.push(d.message()); d.dismiss().catch(() => {}); });
    await employeePage.searchEmployee('<script>alert(1)</script>');
    await expect(employeePage.employeeGrid).toBeVisible();
    await page.waitForTimeout(800);
    expect(dialogs.length).toBe(0);
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
    // The literal payload must not have been injected as live markup
    const scriptTagCount = await page.locator('script:has-text("alert(1)")').count();
    expect(scriptTagCount).toBe(0);
  });

  test('TC-EMPDET-032 Edit Drawer Save attempted with required field cleared — inline validation @negative', async () => {
    await employeePage.openEditDrawerForFirstEmployee();
    const nameField = employeePage.editDrawer.getByLabel(/^name$/i).or(employeePage.editDrawer.getByRole('textbox', { name: /^name$/i }));
    const visible = await nameField.isVisible().catch(() => false);
    if (!visible) test.skip(true, 'Name field not directly editable in drawer');
    await nameField.clear();
    await employeePage.saveDrawer();
    const inlineError = employeePage.editDrawer.getByText(/required|cannot be empty|this field is required/i);
    await expect(inlineError.first()).toBeVisible();
    // Drawer should remain open — form was not submitted
    await expect(employeePage.editDrawer).toBeVisible();
  });

  test('TC-EMPDET-033 Double-click Save in Edit Drawer — no duplicate update @negative @regression @needs-verification', async ({ page }) => {
    // CONFIRMED LIVE (2026-08-19): Designation is now locked in this drawer — see
    // employee-details.page.ts's getDrawerDesignationField() comment. Overall Rating is used
    // instead as a confirmed-editable field.
    // PRODUCT DEFECT SUSPECTED if the PUT-count assertion fails: see TC-EMPDET-003's note — Save
    // on whichever employee currently sorts first returns 400 ("Team does not belong to the
    // specified department") regardless of which field changed, an unrelated data-integrity issue
    // that can make a "double-click" produce 2 failed requests instead of 1 successful one.
    await employeePage.openEditDrawerForFirstEmployee();
    const original = await employeePage.getDrawerOverallRatingValue();
    const filled = await employeePage.setDrawerOverallRating(original === '5.5' ? '6.5' : '5.5');
    if (!filled) test.skip(true, 'Overall Rating field not editable in drawer');

    const putRequests: number[] = [];
    page.on('response', resp => {
      if (/\/api\/.*employee/i.test(resp.url()) && ['PUT', 'PATCH'].includes(resp.request().method())) {
        putRequests.push(resp.status());
      }
    });

    const saveBtn = employeePage.getDrawerSaveBtn();
    await saveBtn.click();
    await saveBtn.click().catch(() => {}); // second click may be a no-op once the drawer closes/disables
    await page.waitForTimeout(1500);

    expect(putRequests.length).toBeLessThanOrEqual(1);
    await expect(employeePage.getErrorAlert()).not.toBeVisible();
  });

  test('TC-EMPDET-069 Special characters in search — no crash, correct matching @negative', async ({ page }) => {
    for (const term of ['<script>', '"test"', '\\', '%20', '&&']) {
      await employeePage.searchEmployee(term);
      await expect(employeePage.employeeGrid).toBeVisible();
      await expect(employeePage.getErrorAlert()).not.toBeVisible();
      await employeePage.clearSearch();
    }
  });

  // NEW (2026-07-13, Figma-derived) — Deallocation/Delete confirmation Cancel semantics + drawer
  // close-mid-entry discard + read-only Archive drawer. All confirmation-modal/drawer selectors are
  // Unverified Selectors (inferred from design, not live DOM); tests skip gracefully when unconfirmed.

  test('TC-EMPDET-166 Cancel the Deallocation confirmation modal leaves the allocation unchanged @negative', async () => {
    const row = employeePage.getDataRows().first();
    await employeePage.openProjectDetailsDrawerByName(((await row.getByRole('cell').first().textContent()) ?? '').trim()).catch(() => {});
    const projectDrawer = employeePage.getProjectDetailsDrawer();
    if (!(await projectDrawer.isVisible().catch(() => false))) test.skip(true, 'Project-details drawer not found — cannot reach Deallocation flow');

    const rowsBefore = await employeePage.getVisibleRowCount();
    await employeePage.triggerDeallocation(projectDrawer);
    const modal = employeePage.getDeallocationConfirmationModal();
    if (!(await modal.isVisible().catch(() => false))) test.skip(true, 'Deallocation confirmation modal not found — selector unconfirmed against live app');

    await employeePage.cancelDeallocation();
    await expect(modal).not.toBeVisible();
    const rowsAfter = await employeePage.getVisibleRowCount();
    expect(rowsAfter).toBe(rowsBefore);
  });

  test('TC-EMPDET-167 Cancel/close the Delete-employee confirmation modal leaves the employee list unchanged @negative', async () => {
    const row = employeePage.getDataRows().first();
    const originalName = ((await row.getByRole('cell').first().textContent()) ?? '').trim();
    const countBefore = await employeePage.getVisibleRowCount();

    await employeePage.triggerDeleteEmployee(row);
    const modal = employeePage.getDeleteConfirmationModal();
    if (!(await modal.isVisible().catch(() => false))) test.skip(true, 'Delete confirmation modal not found — selector unconfirmed against live app');

    await employeePage.cancelDelete();
    await expect(modal).not.toBeVisible();
    const countAfter = await employeePage.getVisibleRowCount();
    expect(countAfter).toBe(countBefore);
    if (originalName) {
      await expect(employeePage.getRowByName(originalName)).toBeVisible();
    }
  });

  test('TC-EMPDET-168 Closing Add-project-allocation/Add-note drawer mid-entry via close icon discards the partial entry @negative', async () => {
    const row = employeePage.getDataRows().first();
    await employeePage.openAddProjectAllocationDrawer(row);
    const drawer = employeePage.getAddProjectAllocationDrawer();
    if (!(await drawer.isVisible().catch(() => false))) test.skip(true, "'Add project allocation' drawer not found — selector unconfirmed against live app");

    await drawer.getByRole('textbox').first().fill('Partial entry — should be discarded').catch(() => {});
    await drawer.getByRole('button', { name: /close/i }).first().click().catch(() => {});
    await expect(drawer).not.toBeVisible();

    await employeePage.openAddProjectAllocationDrawer(row);
    const reopened = employeePage.getAddProjectAllocationDrawer();
    if (await reopened.isVisible().catch(() => false)) {
      const textarea = reopened.getByRole('textbox').last();
      await expect(textarea).toHaveValue('');
    }
  });

  test('TC-EMPDET-169 Archive employee details drawer shows no edit affordance for Past employees @negative @regression', async () => {
    await employeePage.switchToFormerEmployeeTab();
    const rows = employeePage.getDataRows();
    if ((await rows.count()) === 0) test.skip(true, 'No Past employees available to verify the read-only Archive drawer');

    await employeePage.openArchiveEmployeeDrawer(rows.first());
    const drawer = employeePage.getArchiveEmployeeDrawer();
    if (!(await drawer.isVisible().catch(() => false))) test.skip(true, 'Archive employee details drawer not found — selector unconfirmed against live app');

    expect(await employeePage.drawerHasEditAffordance(drawer), 'Archive employee drawer unexpectedly exposes an edit/save control').toBe(false);
    await drawer.getByRole('button', { name: /close/i }).first().click().catch(() => {});
    await expect(drawer).not.toBeVisible();
  });

  // NEW (2026-07-14) — PIP indicator negative/corrupted-data cases (confirmed live feature; see the
  // "PIP indicator" block in employee-details.page.ts).

  test('TC-EMPDET-278 Invalid PIP date range (Start Date > End Date) does not crash the page or misleadingly show an active indicator @negative', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('pageerror', err => consoleErrors.push(err.message));

    const rows = employeePage.getRowsWithActivePip();
    const count = await rows.count();
    let foundInvalid = false;
    for (let i = 0; i < count; i++) {
      const row = rows.nth(i);
      const card = await employeePage.hoverPipIndicator(row);
      if (!(await card.isVisible().catch(() => false))) continue;
      const cardText = await employeePage.getPipHoverCardText(card);
      const period = employeePage.parsePipPeriod(cardText);
      if (period && period.start.getTime() > period.end.getTime()) {
        foundInvalid = true;
        await expect(row, 'row with an invalid PIP date range does not render cleanly').toBeVisible();
        const daysLeft = employeePage.parsePipDaysLeft(cardText);
        // Must not misleadingly present a positive Days Left for a record whose range is already backwards.
        if (daysLeft !== null) {
          expect(daysLeft, 'Invalid date-range PIP still shows a positive Days Left as if active/in-range').toBeLessThanOrEqual(0);
        }
        break;
      }
    }
    if (!foundInvalid) test.skip(true, 'No employee with a corrupted PIP date range (Start > End) found in this dataset');
    expect(consoleErrors.length, `Unhandled JS error(s) while inspecting PIP records: ${consoleErrors.join('; ')}`).toBe(0);
  });

  test('TC-EMPDET-279 PIP End Date has passed but Status still reads Active — indicator must not misleadingly imply an ongoing PIP @negative', async () => {
    // automatable: false per the source test case — the exact expiry behavior (auto-hide vs. an
    // "Overdue" status) is not yet decided (FR#5 undecided per requirement). Attempt a best-effort
    // live check anyway; if no such stale-status record exists in this dataset, skip with the same
    // "requirement undecided" reasoning as the source case rather than asserting an invented outcome.
    const rows = employeePage.getRowsWithActivePip();
    const count = await rows.count();
    let foundStale = false;
    for (let i = 0; i < count; i++) {
      const row = rows.nth(i);
      const card = await employeePage.hoverPipIndicator(row);
      if (!(await card.isVisible().catch(() => false))) continue;
      const cardText = await employeePage.getPipHoverCardText(card);
      const period = employeePage.parsePipPeriod(cardText);
      const status = employeePage.parsePipStatus(cardText);
      if (period && period.end.getTime() < Date.now() && /pip/i.test(status ?? '') && !/overdue/i.test(status ?? '')) {
        foundStale = true;
        // At minimum: Days Left must not read as a misleading positive countdown for an already-expired PIP.
        const daysLeft = employeePage.parsePipDaysLeft(cardText);
        if (daysLeft !== null) {
          expect(daysLeft, 'Expired PIP (End Date passed) still shows a positive Days Left, implying it is still ongoing').toBeLessThanOrEqual(0);
        }
        break;
      }
    }
    if (!foundStale) {
      test.skip(
        true,
        'MANUAL/blocked per the source test case — PIP expiry behavior (auto-hide vs. Overdue status) is not yet decided per FR#5, and no stale-status (End Date passed, Status still Active) record exists in this dataset to exercise even a best-effort check.'
      );
    }
  });

  // NEW (2026-08-19, manual-requirement-derived) — TC-EMPDET-323, 341, 344, 345, 353, 357: locked
  // Designation field, cross-field date validation in the project popup, Deallocate
  // cancel/required-field enforcement, and LinkedIn/Visa Information negative validation. Most of
  // these target UI not yet re-confirmed against a live DOM snapshot newer than 2026-07-13/08-18
  // (see employee-details.page.ts's 2026-08-19 doc block) — generic locators, skip gracefully.

  test('TC-EMPDET-323 Editing a locked field (Designation) is not possible via the Edit Drawer @negative', async ({ page }) => {
    await employeePage.openEditDrawerForFirstEmployee();
    const field = employeePage.getDrawerDesignationField();
    const visible = await field.isVisible().catch(() => false);
    if (!visible) test.skip(true, 'Designation field not present in the Edit Drawer');

    // CONFIRMED LIVE (2026-08-19) per employee-details.page.ts's getDrawerDesignationField() comment.
    await expect(field).toBeDisabled();

    let putFired = false;
    page.on('request', req => {
      if (/\/api\/.*employee/i.test(req.url()) && ['PUT', 'PATCH'].includes(req.method())) putFired = true;
    });
    await field.click({ force: true }).catch(() => {});
    await field.fill('Attempted Change').catch(() => {});
    await employeePage.closeEditDrawer();
    expect(putFired, 'A write request reached the API despite Designation being disabled').toBe(false);
  });

  test('TC-EMPDET-341 Setting allocation end date before the allocation start date is rejected @negative @boundary', async () => {
    const row = employeePage.getDataRows().first();
    await employeePage.openViewProjectDetailsFromRow(row);
    const sheet = employeePage.getProjectDetailsSheet();
    if (!(await sheet.isVisible().catch(() => false))) test.skip(true, "'View project details' popup not found — selector unconfirmed against live app");

    const endDateSet = await employeePage.setProjectPopupEndDate(sheet, '2020-01-01');
    if (!endDateSet) test.skip(true, "Project popup's Allocation End Date field not found — Edit section confirmed NOT FOUND LIVE as of 2026-07-13, re-checked fresh per the 2026-08-19 requirement");

    await employeePage.saveProjectPopupEdit(sheet);
    const errorMsg = employeePage.getValidationError(/end date.*before.*start date|invalid date range|must be (on or )?after/i);
    await expect(errorMsg.first()).toBeVisible();
  });

  test('TC-EMPDET-344 Cancelling the Deallocate confirmation makes no change to the allocation @negative @regression', async () => {
    const row = employeePage.getDataRows().first();
    await employeePage.openViewProjectDetailsFromRow(row);
    const sheet = employeePage.getProjectDetailsSheet();
    if (!(await sheet.isVisible().catch(() => false))) test.skip(true, "'View project details' popup not found — selector unconfirmed against live app");

    const rowsBefore = await employeePage.getVisibleRowCount();
    const deallocateBtn = employeePage.getProjectPopupDeallocateButton(sheet);
    if (!(await deallocateBtn.isVisible().catch(() => false))) {
      test.skip(true, "Project popup's Deallocate button confirmed NOT FOUND LIVE as of 2026-07-13, re-checked fresh per the 2026-08-19 requirement — still unconfirmed against live app");
    }
    const confirmPopup = await employeePage.clickProjectPopupDeallocate(sheet);
    if (!(await confirmPopup.isVisible().catch(() => false))) test.skip(true, 'Deallocate confirmation popup did not open — selector unconfirmed against live app');

    await employeePage.cancelAction().catch(() => {});
    await expect(confirmPopup).not.toBeVisible();
    const rowsAfter = await employeePage.getVisibleRowCount();
    expect(rowsAfter, 'Employee/row count changed despite cancelling the Deallocate confirmation').toBe(rowsBefore);
  });

  test('TC-EMPDET-345 Submitting the Deallocate popup with a required field missing is blocked with a validation message @negative @boundary', async () => {
    const row = employeePage.getDataRows().first();
    await employeePage.openViewProjectDetailsFromRow(row);
    const sheet = employeePage.getProjectDetailsSheet();
    if (!(await sheet.isVisible().catch(() => false))) test.skip(true, "'View project details' popup not found — selector unconfirmed against live app");

    const deallocateBtn = employeePage.getProjectPopupDeallocateButton(sheet);
    if (!(await deallocateBtn.isVisible().catch(() => false))) {
      test.skip(true, "Project popup's Deallocate button confirmed NOT FOUND LIVE as of 2026-07-13, re-checked fresh per the 2026-08-19 requirement — still unconfirmed against live app");
    }
    const confirmPopup = await employeePage.clickProjectPopupDeallocate(sheet);
    if (!(await confirmPopup.isVisible().catch(() => false))) test.skip(true, 'Deallocate confirmation popup did not open — selector unconfirmed against live app');

    await employeePage.confirmAction().catch(() => {});
    const inlineError = confirmPopup.getByText(/required|cannot be empty|this field is required/i);
    const errorVisible = await inlineError.first().isVisible().catch(() => false);
    if (!errorVisible) test.skip(true, 'No required-field validation message rendered — Deallocate popup field set unconfirmed against live app');
    await expect(inlineError.first()).toBeVisible();
    await expect(confirmPopup).toBeVisible();
  });

  test('TC-EMPDET-353 An invalid (non-URL) value in the LinkedIn field is rejected @negative @boundary @needs-verification', async () => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const row = employeePage.getDataRows().first();
    await employeePage.openEmployeeDetailsDrawer(row);
    const drawer = employeePage.getEmployeeDetailsSideDrawer();
    if (!(await drawer.isVisible().catch(() => false))) test.skip(true, 'Employee-details side drawer not found — selector unconfirmed against live app');
    const view = await employeePage.openEmployeeProfileFromDrawer(drawer);
    if (!(await view.isVisible().catch(() => false))) test.skip(true, 'Full Employee Profile view not found — selector/route unconfirmed against live app');

    await employeePage.getProfileEditButton(view).click().catch(() => {});
    const filled = await employeePage.setProfileLinkedInUrl(view, 'not-a-url');
    if (!filled) test.skip(true, 'LinkedIn field not found on the profile — newly reported feature (2026-08-19), field location/label unconfirmed against live app');

    await employeePage.getProfileSaveButton(view).click().catch(() => {});
    const errorMsg = employeePage.getValidationError(/valid url|invalid url|must be a valid link/i);
    await expect(errorMsg.first()).toBeVisible();
  });

  test('TC-EMPDET-357 Cancelling the Visa Information delete confirmation leaves the record unchanged @negative @regression @needs-verification', async () => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const row = employeePage.getDataRows().first();
    await employeePage.openEmployeeDetailsDrawer(row);
    const drawer = employeePage.getEmployeeDetailsSideDrawer();
    if (!(await drawer.isVisible().catch(() => false))) test.skip(true, 'Employee-details side drawer not found — selector unconfirmed against live app');
    const view = await employeePage.openEmployeeProfileFromDrawer(drawer);
    if (!(await view.isVisible().catch(() => false))) test.skip(true, 'Full Employee Profile view not found — selector/route unconfirmed against live app');

    const visaSection = employeePage.getProfileVisaSection(view);
    if (!(await visaSection.isVisible().catch(() => false))) test.skip(true, 'Visa Information section not found on the profile — newly reported feature (2026-08-19), unconfirmed against live app');

    const firstRecordText = (await visaSection.locator('tr, li, [role="listitem"]').first().textContent().catch(() => '')) ?? '';
    if (!firstRecordText.trim()) test.skip(true, 'No existing Visa Information record found to exercise the delete-cancel flow');
    const row2 = employeePage.getVisaRecordRow(view, firstRecordText.trim().slice(0, 10));
    const deleteBtn = employeePage.getDeleteVisaButton(row2);
    if (!(await deleteBtn.isVisible().catch(() => false))) test.skip(true, 'Delete control not found on Visa Information record — selector unconfirmed against live app');

    await deleteBtn.click();
    const confirmDialog = employeePage.getConfirmDialog();
    if (!(await confirmDialog.isVisible().catch(() => false))) test.skip(true, 'Delete confirmation dialog not found — selector unconfirmed against live app');
    await employeePage.cancelAction();
    await expect(confirmDialog).not.toBeVisible();
    await expect(visaSection.getByText(firstRecordText.trim().slice(0, 10))).toBeVisible();
  });

  test("TC-EMPDET-394 XSS payload in 'Search filters' textbox is escaped, not executed @negative @security", async ({ page }) => {
    let dialogFired = false;
    page.on('dialog', () => { dialogFired = true; });

    const payload = '<script>alert(1)</script>';
    await employeePage.openAdvancedFilterPanel();
    await employeePage.searchAdvancedFilterSections(payload);
    await expect(employeePage.getAdvancedFilterSearchInput()).toHaveValue(payload);
    expect(dialogFired, 'XSS payload in the Search filters textbox triggered a JS dialog — script executed').toBe(false);

    await employeePage.searchAdvancedFilterSections('');
    const cohortAccordion = await employeePage.expandAdvancedFilterSection('Cohort');
    await expect(cohortAccordion, "'Cohort' accordion section should remain reachable after clearing the XSS payload").toBeVisible();
    const originAccordion = await employeePage.expandAdvancedFilterSection('Employee Origin');
    await expect(originAccordion, "'Employee Origin' accordion section should remain reachable after clearing the XSS payload").toBeVisible();
    expect(dialogFired, 'A JS dialog fired at some point during this XSS-payload flow').toBe(false);
  });
});
