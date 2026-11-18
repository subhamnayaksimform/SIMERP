# Employee Details — Test Cases

**Total test cases:** 54  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-08-19-EMPDET.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 29 | 53.7% |
| boundary | 6 | 11.1% |
| negative | 6 | 11.1% |
| integration | 4 | 7.4% |
| smoke | 4 | 7.4% |
| security | 3 | 5.6% |
| regression | 2 | 3.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 27 | 50.0% |
| medium | 19 | 35.2% |
| critical | 4 | 7.4% |
| low | 4 | 7.4% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 37 | 68.5% |
| minor | 13 | 24.1% |
| critical | 4 | 7.4% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 42 | 77.8% |
| regression-derived | 12 | 22.2% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 32 | 59.3% |
| speculative | 12 | 22.2% |
| inferred | 10 | 18.5% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 54 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 37 | 68.5% |
| @needs-verification | 21 | 38.9% |
| @regression | 13 | 24.1% |
| @boundary | 9 | 16.7% |
| @negative | 6 | 11.1% |
| @security | 4 | 7.4% |
| @smoke | 4 | 7.4% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-322](#tc-empdet-322-editable-field-inventory-edit-drawer-exposes-every-currently-editable-field-and-no-more) | Editable-field inventory — Edit Drawer exposes every currently-editable field and no more | Employee Details | boundary | high |
| [TC-EMPDET-323](#tc-empdet-323-editing-a-locked-field-designation-is-not-possible-via-the-edit-drawer) | Editing a locked field (Designation) is not possible via the Edit Drawer | Employee Details | negative | medium |
| [TC-EMPDET-324](#tc-empdet-324-sorting-each-sortable-column-toggles-ascending-descending-with-a-visible-indicator) | Sorting each sortable column toggles ascending/descending with a visible indicator | Employee Details | functional | medium |
| [TC-EMPDET-325](#tc-empdet-325-sort-stability-when-multiple-rows-share-the-same-value-in-the-sorted-column) | Sort stability when multiple rows share the same value in the sorted column | Employee Details | boundary | low |
| [TC-EMPDET-326](#tc-empdet-326-advanced-filter-panel-apply-a-field-filter-and-save-persists-the-applied-criteria) | Advanced Filter panel — apply a field filter and Save persists the applied criteria | Employee Details | functional | high |
| [TC-EMPDET-327](#tc-empdet-327-advanced-filter-panel-clear-all-resets-every-applied-criterion-and-restores-the-unfiltered-list) | Advanced Filter panel — Clear All resets every applied criterion and restores the unfiltered list | Employee Details | functional | high |
| [TC-EMPDET-328](#tc-empdet-328-advanced-filter-combining-multiple-fields-narrows-results-to-the-intersection-of-all-criteria) | Advanced Filter — combining multiple fields narrows results to the intersection of all criteria | Employee Details | functional | medium |
| [TC-EMPDET-329](#tc-empdet-329-advanced-filter-save-with-no-criteria-changed-is-a-no-op-and-leaves-the-current-list-untouched) | Advanced Filter — Save with no criteria changed is a no-op and leaves the current list untouched | Employee Details | boundary | low |
| [TC-EMPDET-330](#tc-empdet-330-column-preference-control-hiding-a-column-removes-it-from-the-grid-immediately) | Column Preference control — hiding a column removes it from the grid immediately | Employee Details | functional | medium |
| [TC-EMPDET-331](#tc-empdet-331-column-preference-control-re-enabling-a-hidden-column-restores-it-to-the-grid) | Column Preference control — re-enabling a hidden column restores it to the grid | Employee Details | functional | medium |
| [TC-EMPDET-332](#tc-empdet-332-column-preference-selection-persists-across-a-page-refresh-f5) | Column Preference selection persists across a page refresh (F5) | Employee Details | boundary | low |
| [TC-EMPDET-333](#tc-empdet-333-search-by-employee-name-filters-the-grid-to-matching-rows) | Search by employee name filters the grid to matching rows | Employee Details | functional | high |
| [TC-EMPDET-334](#tc-empdet-334-search-by-employee-email-filters-the-grid-to-matching-rows) | Search by employee email filters the grid to matching rows | Employee Details | functional | high |
| [TC-EMPDET-335](#tc-empdet-335-search-by-project-name-returns-only-employees-allocated-to-that-project) | Search by project name returns only employees allocated to that project | Employee Details | functional | high |
| [TC-EMPDET-336](#tc-empdet-336-search-with-no-matches-shows-the-empty-state-and-a-zero-count) | Search with no matches shows the empty state and a zero count | Employee Details | boundary | medium |
| [TC-EMPDET-337](#tc-empdet-337-clearing-the-search-field-restores-the-full-unfiltered-list) | Clearing the search field restores the full unfiltered list | Employee Details | functional | medium |
| [TC-EMPDET-338](#tc-empdet-338-clicking-a-project-in-the-employee-s-details-opens-a-popup-with-project-info-an-edit-section-and-a-deallocate-button) | Clicking a project in the employee's details opens a popup with project info, an Edit section, and a Deallocate button | Employee Details | smoke | critical |
| [TC-EMPDET-339](#tc-empdet-339-editing-the-allocation-end-date-in-the-project-popup-persists-and-reflects-immediately) | Editing the allocation end date in the project popup persists and reflects immediately | Employee Details | functional | high |
| [TC-EMPDET-340](#tc-empdet-340-editing-other-editable-fields-in-the-project-popup-e-g-allocation-persists-correctly) | Editing other editable fields in the project popup (e.g. allocation %) persists correctly | Employee Details | functional | medium |
| [TC-EMPDET-341](#tc-empdet-341-setting-allocation-end-date-before-the-allocation-start-date-is-rejected) | Setting allocation end date before the allocation start date is rejected | Employee Details | negative | medium |
| [TC-EMPDET-342](#tc-empdet-342-clicking-deallocate-opens-a-popup-requiring-details-before-confirming) | Clicking Deallocate opens a popup requiring details before confirming | Employee Details | functional | high |
| [TC-EMPDET-343](#tc-empdet-343-completing-the-deallocate-popup-removes-the-allocation-and-triggers-an-in-app-notification) | Completing the Deallocate popup removes the allocation and triggers an in-app notification | Employee Details | functional | high |
| [TC-EMPDET-344](#tc-empdet-344-cancelling-the-deallocate-confirmation-makes-no-change-to-the-allocation) | Cancelling the Deallocate confirmation makes no change to the allocation | Employee Details | negative | high |
| [TC-EMPDET-345](#tc-empdet-345-submitting-the-deallocate-popup-with-a-required-field-missing-is-blocked-with-a-validation-message) | Submitting the Deallocate popup with a required field missing is blocked with a validation message | Employee Details | negative | medium |
| [TC-EMPDET-346](#tc-empdet-346-clicking-an-employee-row-not-a-project-opens-a-popup-showing-projects-and-other-details-correctly) | Clicking an employee row (not a project) opens a popup showing projects and other details correctly | Employee Details | smoke | critical |
| [TC-EMPDET-347](#tc-empdet-347-from-the-employee-popup-view-employee-profile-opens-the-full-profile-view) | From the employee popup, 'View Employee Profile' opens the full profile view | Employee Details | smoke | critical |
| [TC-EMPDET-348](#tc-empdet-348-employee-profile-personal-information-section-displays-all-confirmed-fields) | Employee Profile — Personal Information section displays all confirmed fields | Employee Details | functional | high |
| [TC-EMPDET-349](#tc-empdet-349-employee-profile-edit-button-makes-personal-information-fields-editable-and-save-persists-changes) | Employee Profile — Edit button makes Personal Information fields editable and Save persists changes | Employee Details | functional | high |
| [TC-EMPDET-350](#tc-empdet-350-employee-profile-skills-section-shows-the-employee-s-skills-segregated-into-primary-and-secondary) | Employee Profile — Skills section shows the employee's skills segregated into Primary and Secondary | Employee Details | functional | high |
| [TC-EMPDET-351](#tc-empdet-351-employee-profile-modifying-a-skill-s-classification-from-the-profile-reflects-in-the-skills-module) | Employee Profile — modifying a skill's classification from the profile reflects in the Skills module | Employee Details | integration | high |
| [TC-EMPDET-352](#tc-empdet-352-employee-profile-a-linkedin-profile-url-can-be-added-and-is-saved-displayed-correctly) | Employee Profile — a LinkedIn profile URL can be added and is saved/displayed correctly | Employee Details | functional | medium |
| [TC-EMPDET-353](#tc-empdet-353-employee-profile-an-invalid-non-url-value-in-the-linkedin-field-is-rejected) | Employee Profile — an invalid (non-URL) value in the LinkedIn field is rejected | Employee Details | negative | low |
| [TC-EMPDET-354](#tc-empdet-354-employee-profile-visa-information-a-new-visa-record-can-be-added) | Employee Profile — Visa Information: a new visa record can be added | Employee Details | functional | high |
| [TC-EMPDET-355](#tc-empdet-355-employee-profile-visa-information-an-existing-visa-record-can-be-edited) | Employee Profile — Visa Information: an existing visa record can be edited | Employee Details | functional | high |
| [TC-EMPDET-356](#tc-empdet-356-employee-profile-visa-information-deleting-a-record-requires-confirmation-and-removes-it-once-confirmed) | Employee Profile — Visa Information: deleting a record requires confirmation and removes it once confirmed | Employee Details | functional | high |
| [TC-EMPDET-357](#tc-empdet-357-employee-profile-visa-information-cancelling-the-delete-confirmation-leaves-the-record-unchanged) | Employee Profile — Visa Information: cancelling the delete confirmation leaves the record unchanged | Employee Details | negative | medium |
| [TC-EMPDET-358](#tc-empdet-358-employee-profile-projects-section-lists-every-project-the-employee-is-currently-allocated-to-read-only) | Employee Profile — Projects section lists every project the employee is currently allocated to (read-only) | Employee Details | functional | high |
| [TC-EMPDET-359](#tc-empdet-359-employee-profile-pr-reviewer-section-shows-the-confirmed-project-frequency-table) | Employee Profile — PR Reviewer section shows the confirmed Project/Frequency table | Employee Details | functional | medium |
| [TC-EMPDET-360](#tc-empdet-360-employee-profile-goals-section-shows-the-goals-assigned-to-this-employee) | Employee Profile — Goals section shows the goals assigned to this employee | Employee Details | integration | high |
| [TC-EMPDET-361](#tc-empdet-361-login-as-employee-from-the-profile-switches-the-session-into-that-employee-s-view) | 'Login as Employee' from the profile switches the session into that employee's view | Employee Details | smoke | critical |
| [TC-EMPDET-362](#tc-empdet-362-while-impersonating-the-employee-s-project-view-matches-what-they-would-see-logged-in-themselves) | While impersonating, the employee's project view matches what they would see logged in themselves | Employee Details | functional | high |
| [TC-EMPDET-363](#tc-empdet-363-while-impersonating-adding-self-assigning-a-skill-succeeds-and-reflects-on-the-real-employee-s-record) | While impersonating, adding/self-assigning a skill succeeds and reflects on the real employee's record | Employee Details | integration | high |
| [TC-EMPDET-364](#tc-empdet-364-while-impersonating-editing-visa-information-if-permitted-for-that-employee-succeeds) | While impersonating, editing Visa Information (if permitted for that employee) succeeds | Employee Details | functional | medium |
| [TC-EMPDET-365](#tc-empdet-365-while-impersonating-an-action-not-permitted-for-the-employee-s-actual-role-is-blocked-or-hidden) | While impersonating, an action not permitted for the employee's actual role is blocked or hidden | Employee Details | security | high |
| [TC-EMPDET-366](#tc-empdet-366-exiting-impersonation-returns-cleanly-to-the-original-admin-session-with-no-residual-employee-scoped-state) | Exiting impersonation returns cleanly to the original Admin session with no residual employee-scoped state | Employee Details | functional | high |
| [TC-EMPDET-367](#tc-empdet-367-impersonation-never-allows-escalation-beyond-the-impersonated-employee-s-own-data-scope-idor-style-check) | Impersonation never allows escalation beyond the impersonated employee's own data scope (IDOR-style check) | Employee Details | security | high |
| [TC-EMPDET-368](#tc-empdet-368-past-employees-tab-viewing-a-past-employee-s-profile-shows-their-historical-information) | Past Employees tab — viewing a past employee's profile shows their historical information | Employee Details | functional | high |
| [TC-EMPDET-369](#tc-empdet-369-past-employees-login-as-employee-impersonation-is-available-from-the-past-employee-s-profile) | Past Employees — 'Login as Employee' / impersonation is available from the past employee's profile | Employee Details | functional | medium |
| [TC-EMPDET-370](#tc-empdet-370-past-employee-profile-remains-read-only-apart-from-the-impersonation-entry-point) | Past Employee profile remains read-only apart from the impersonation entry point | Employee Details | regression | high |
| [TC-EMPDET-371](#tc-empdet-371-allocation-end-date-shown-in-the-project-popup-matches-the-value-returned-by-the-corresponding-api-endpoint-after-save) | Allocation End Date shown in the project popup matches the value returned by the corresponding API endpoint after save | Employee Details | integration | medium |
| [TC-EMPDET-372](#tc-empdet-372-after-deallocation-the-project-s-allocation-count-decrements-everywhere-without-a-page-refresh) | After deallocation, the project's allocation count decrements everywhere without a page refresh | Employee Details | regression | medium |
| [TC-EMPDET-373](#tc-empdet-373-double-clicking-save-on-the-employee-profile-edit-form-does-not-create-a-duplicate-write-or-corrupt-data) | Double-clicking Save on the Employee Profile edit form does not create a duplicate write or corrupt data | Employee Details | boundary | medium |
| [TC-EMPDET-374](#tc-empdet-374-the-in-app-deallocation-notification-content-correctly-identifies-the-employee-and-project) | The in-app deallocation notification content correctly identifies the employee and project | Employee Details | functional | medium |
| [TC-EMPDET-375](#tc-empdet-375-restricted-role-session-cannot-use-login-as-employee-to-impersonate-a-higher-privilege-user) | Restricted-role session cannot use 'Login as Employee' to impersonate a higher-privilege user | Employee Details | security | high |

---

## Employee Details

54 test cases.

### Boundary (6)

#### TC-EMPDET-322 — Editable-field inventory — Edit Drawer exposes every currently-editable field and no more

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check edit functionality for employee, check for different fields that are editable |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee → Employee Details (Current Employee tab)
2. Open the Edit Drawer for the first employee row
3. List every field visible in the drawer and record whether each is enabled (editable) or disabled (read-only)

**Expected**

Field-by-field editable/read-only state is captured; Designation is confirmed disabled (locked); Overall Rating is confirmed editable — matches the live-confirmed behaviour already recorded in employee-details.page.ts

**Test Data**

- `note`: Enumerate every field rendered in the Edit Drawer and its enabled/disabled state

**Automation Hint**

Reuse getDrawerOverallRatingValue()/setDrawerOverallRating() patterns from employee-details.page.ts; assert Designation field's disabled attribute explicitly rather than skipping it.

#### TC-EMPDET-325 — Sort stability when multiple rows share the same value in the sorted column

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: sorting (SIM ERP intelligent coverage) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Sort by a column where multiple rows share an identical value (e.g. Department)
2. Record the relative order of the tied rows
3. Re-apply the same sort and compare

**Expected**

Tied rows keep a stable, repeatable relative order across repeated sorts of the same direction

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Secondary sort key not documented in requirements.

#### TC-EMPDET-329 — Advanced Filter — Save with no criteria changed is a no-op and leaves the current list untouched

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: ui-state (SIM ERP intelligent coverage) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Advanced Filter without changing any field
2. Click Save

**Expected**

Grid and result-count remain unchanged; no error is thrown

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-332 — Column Preference selection persists across a page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: ui-state (SIM ERP intelligent coverage) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hide a column via Column Preference
2. Refresh the page (F5)
3. Observe whether the column remains hidden

**Expected**

Behaviour is either: preference persists per-user across reload, OR resets to default — whichever is the intended design; test documents actual behaviour for human confirmation

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Persistence mechanism (localStorage/API/session) not specified in requirements.

#### TC-EMPDET-336 — Search with no matches shows the empty state and a zero count

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Manual requirement (2026-08-19): use search button for name, email or project |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Type a search term guaranteed not to match any employee/email/project
2. Observe the grid

**Expected**

Empty-state message is shown; result-count badge shows 0; no JS error

**Test Data**

- `searchTerm`: zzzznonexistentqqq

#### TC-EMPDET-373 — Double-clicking Save on the Employee Profile edit form does not create a duplicate write or corrupt data

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — rapid double-submit |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Employee Profile edit form
2. Change a field
3. Click Save twice in rapid succession

**Expected**

Exactly one update is applied; no duplicate record or corrupted field value results

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Functional (29)

#### TC-EMPDET-324 — Sorting each sortable column toggles ascending/descending with a visible indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): check filters and sorting from the table |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee → Employee Details
2. Click each sortable column header once — assert ascending order and a visible sort-direction indicator
3. Click the same header again — assert descending order and the indicator flips

**Expected**

Each sortable column toggles order on repeat click; sort indicator icon always matches current direction

**Test Data**

- `columns`: Name, Department, Designation, Experience

#### TC-EMPDET-326 — Advanced Filter panel — apply a field filter and Save persists the applied criteria

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check filters from the advanced filter button for some fields randomly (check the save button) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Advanced Filter panel
2. Set a value for one field (e.g. Department = Engineering)
3. Click Save
4. Observe the grid and the result-count badge

**Expected**

Grid shows only rows matching the applied criteria; result-count badge matches the filtered row count; filter panel reflects the applied state when reopened

**Test Data**

- `field`: Department
- `value`: Engineering

#### TC-EMPDET-327 — Advanced Filter panel — Clear All resets every applied criterion and restores the unfiltered list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): check filters from the advanced filter button (check the clear all button) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply two or more Advanced Filter criteria and Save
2. Reopen the Advanced Filter panel and click Clear All
3. Observe the panel fields and the grid

**Expected**

All filter fields in the panel reset to empty/default; grid returns to the full unfiltered list for the current tab; result-count badge equals the total row count

#### TC-EMPDET-328 — Advanced Filter — combining multiple fields narrows results to the intersection of all criteria

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check filters from the advanced filter button for some fields randomly |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Advanced Filter and set values on two different fields simultaneously
2. Click Save
3. Verify every visible row satisfies BOTH criteria

**Expected**

Grid shows only rows matching the AND-combination of all applied Advanced Filter criteria, not the union

**Test Data**

- `fields`: Department, Experience range

#### TC-EMPDET-330 — Column Preference control — hiding a column removes it from the grid immediately

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check for user column preference button too |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Column Preference control above the Employee grid
2. Deselect one currently-visible column
3. Close the control and observe the grid header

**Expected**

The deselected column's header and cells are no longer rendered in the grid

**Automation Hint**

Exact dropdown item labels are unconfirmed against the live app (see employee-details.json edgeCases) — describe the control generically by role/position rather than a guessed label.

#### TC-EMPDET-331 — Column Preference control — re-enabling a hidden column restores it to the grid

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check for user column preference button too |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hide a column via Column Preference
2. Reopen Column Preference and re-select the same column

**Expected**

The column reappears in the grid at its previous position with correct data

#### TC-EMPDET-333 — Search by employee name filters the grid to matching rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): use search button for name, email or project |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read a real employee name from the first grid row
2. Type it into the search field
3. Observe filtered results

**Expected**

Only rows whose name matches the search term remain visible; result-count badge reflects the filtered count

#### TC-EMPDET-334 — Search by employee email filters the grid to matching rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): use search button for name, email or project |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read a real employee email from the grid/drawer
2. Type it into the search field
3. Observe filtered results

**Expected**

Only the row(s) matching that email remain visible

#### TC-EMPDET-335 — Search by project name returns only employees allocated to that project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): use search button for name, email or project |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read a real project name from an employee's allocated-projects list
2. Type it into the search field
3. Observe filtered results

**Expected**

Only employees allocated to that project remain visible in the grid

#### TC-EMPDET-337 — Clearing the search field restores the full unfiltered list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): use search button for name, email or project |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Search by name, project, or email
2. Clear the search field
3. Observe the grid

**Expected**

Full employee list is restored; result-count badge equals the total row count

#### TC-EMPDET-339 — Editing the allocation end date in the project popup persists and reflects immediately

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): try editing and change allocation end date too and any other field that is editable |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the project popup for an allocated project
2. In the Edit section, change the Allocation End Date to a new valid date
3. Save

**Expected**

Popup closes or shows success; reopening the same project popup shows the updated end date without a page reload

**Test Data**

- `newEndDate`: +30 days from current allocation end date

#### TC-EMPDET-340 — Editing other editable fields in the project popup (e.g. allocation %) persists correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): try editing and change allocation end date too and any other field that is editable |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the project popup Edit section
2. Enumerate which fields besides Allocation End Date are editable
3. Modify one such field and save

**Expected**

Saved value reflects immediately in the popup and in the employee's project list, without page reload

#### TC-EMPDET-342 — Clicking Deallocate opens a popup requiring details before confirming

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): when selecting deallocate employee there should be a pop up opened and try to fill these details |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the project popup for an allocated project
2. Click Deallocate
3. Observe the resulting popup

**Expected**

A dedicated Deallocate popup opens with fields to fill in before the action can be confirmed

**Automation Hint**

Deallocation flow is already documented as stacked 3 dialog layers deep in employee-details.json edgeCases — verify the confirmation layer is reachable without breaking the underlying drawer stack.

#### TC-EMPDET-343 — Completing the Deallocate popup removes the allocation and triggers an in-app notification

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): when selecting deallocate employee ... check if notification is received in app |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Deallocate popup for an allocated project
2. Fill in the required deallocation details (e.g. reason/date)
3. Confirm the deallocation
4. Check the in-app notification center/bell icon

**Expected**

Employee is deallocated from the project; the project no longer appears in their allocated-projects list; a new in-app notification referencing this deallocation (employee/project) appears

**Automation Hint**

Exact notification UI location is unconfirmed against the live app — describe generically (notification bell/center) rather than a specific selector.

#### TC-EMPDET-348 — Employee Profile — Personal Information section displays all confirmed fields

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): a employee can see personal information and edit data using edit button |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open an employee's full profile
2. Locate the Personal Information section
3. Verify each displayed field has a value or an explicit empty-state (not blank/undefined)

**Expected**

Personal Information renders correctly for every field, with no 'undefined'/blank leaks

#### TC-EMPDET-349 — Employee Profile — Edit button makes Personal Information fields editable and Save persists changes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): an employee can see personal information and edit data using edit button |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open an employee's full profile
2. Click Edit on the Personal Information section
3. Modify one editable field
4. Save

**Expected**

Field becomes editable only after clicking Edit; Save persists the new value and the profile reflects it immediately without reload

#### TC-EMPDET-350 — Employee Profile — Skills section shows the employee's skills segregated into Primary and Secondary

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): they can modify skills too and segregate them with primary or secondary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open an employee's full profile
2. Locate the Skills section

**Expected**

Skills are shown grouped/labelled by Primary and Secondary classification, consistent with the Skills module's own classification for this employee

**Automation Hint**

Cross-check against the Skills module's Skill Detail Panel for the same employee for consistency (integration).

#### TC-EMPDET-352 — Employee Profile — a LinkedIn profile URL can be added and is saved/displayed correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): linkedin profile can be added to the profile as well |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open an employee's full profile in edit mode
2. Enter a valid LinkedIn profile URL
3. Save
4. Reopen the profile

**Expected**

LinkedIn URL is saved and displayed, ideally as a clickable link opening the correct profile

**Test Data**

- `linkedInUrl`: https://www.linkedin.com/in/sample-profile

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Field location/label not present in any prior KB/design-brief capture — this is a newly reported feature (2026-08-19).

#### TC-EMPDET-354 — Employee Profile — Visa Information: a new visa record can be added

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): visa information can be edited, deleted or a new one can be added |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open an employee's full profile
2. Locate the Visa Information section and choose to add a new record
3. Fill in the required fields
4. Save

**Expected**

New visa record appears in the Visa Information list with the entered values, without page reload

**Test Data**

- `note`: Exact required fields (country, visa type, number, expiry date) unconfirmed against live app

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Newly reported feature (2026-08-19) — field set unconfirmed.

#### TC-EMPDET-355 — Employee Profile — Visa Information: an existing visa record can be edited

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): visa information can be edited, deleted or a new one can be added |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Visa Information section for an employee with an existing visa record
2. Edit the record (e.g. change expiry date)
3. Save

**Expected**

Updated values are reflected in the Visa Information list immediately, without page reload

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-356 — Employee Profile — Visa Information: deleting a record requires confirmation and removes it once confirmed

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): visa information can be edited, deleted or a new one can be added |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Visa Information section for an employee with an existing visa record
2. Click Delete on that record
3. Confirm the resulting confirmation dialog

**Expected**

A confirmation dialog appears before deletion; once confirmed, the record is removed from the list immediately

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Confirmation-before-destructive-action is an established SIM ERP pattern elsewhere in this module.

#### TC-EMPDET-358 — Employee Profile — Projects section lists every project the employee is currently allocated to (read-only)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): employee can see all the projects and pr reviewer where they are already allocated |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the full profile for an employee allocated to one or more projects
2. Locate the Projects section

**Expected**

All currently-allocated projects are listed; count matches the employee's allocation count shown elsewhere (grid/popup); no edit controls are exposed here (read-only view)

#### TC-EMPDET-359 — Employee Profile — PR Reviewer section shows the confirmed Project/Frequency table

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): employee can see all the projects and pr reviewer where they are already allocated |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the full profile for an employee registered as a PR Reviewer on at least one project
2. Open the 'PR Reviewer' popup/section

**Expected**

A dialog titled 'PR Reviewer' shows a table with Project and Frequency columns; frequency values are one of the confirmed set (Occasionally/Very Rarely/Not at all/Frequently/etc.)

**Test Data**

- `columns`: Project, Frequency
- `confirmedFrequencyValues`: Occasionally, Very Rarely, Not at all, Frequently

**Automation Hint**

Verbatim title and column layout confirmed via figma-employee-module-design-brief.md node 26709:253255 — safe to assert the literal title text.

#### TC-EMPDET-362 — While impersonating, the employee's project view matches what they would see logged in themselves

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): how the project will be visible to them where we can perform all the action that a employee can perform |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture), then impersonating a target employee

**Steps**

1. Start impersonating an employee via 'Login as Employee'
2. Navigate to their Projects view
3. Compare against that employee's actual allocation data (as seen from the Admin's Employee Details view)

**Expected**

Impersonated view shows exactly the projects that employee is allocated to — nothing more, nothing less

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-364 — While impersonating, editing Visa Information (if permitted for that employee) succeeds

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): add skill and visa information or whatever is editable for the employee |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Impersonating a target employee via 'Login as Employee'

**Steps**

1. While impersonating, open Visa Information
2. Add or edit a visa record as that employee
3. Exit impersonation and verify from the Admin view

**Expected**

The visa change made while impersonating is present on the employee's actual record

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-366 — Exiting impersonation returns cleanly to the original Admin session with no residual employee-scoped state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @security, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): we can imitate as the employee in the system (implies a return path exists) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Impersonating a target employee via 'Login as Employee'

**Steps**

1. While impersonating, note the current nav/permissions
2. Use the exit-impersonation control to return to the Admin session
3. Verify the Admin's own nav/permissions and data scope are restored

**Expected**

Admin session is fully restored (own permissions, own data scope); no leftover employee-scoped UI state remains

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Exit mechanism unconfirmed against live app.

#### TC-EMPDET-368 — Past Employees tab — viewing a past employee's profile shows their historical information

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): for the past employee section we can see their information |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Switch to the Past Employees tab
2. Open the full profile for a past employee

**Expected**

Profile opens showing that employee's historical information (personal info, prior projects, skills, etc.)

#### TC-EMPDET-369 — Past Employees — 'Login as Employee' / impersonation is available from the past employee's profile

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): similarly we can imitate using their profile [for past employees] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a past employee's full profile
2. Locate and use the impersonation control

**Expected**

Impersonation is available and behaves consistently with the active-employee flow

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-374 — The in-app deallocation notification content correctly identifies the employee and project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check if notification is received in app |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Complete a Deallocate flow for a known employee/project pair
2. Open the resulting in-app notification
3. Read its content

**Expected**

Notification text correctly names the deallocated employee and the project, not a generic/blank message

**Automation Hint**

Depends on TC-EMPDET-343 confirming the notification exists — this case verifies content correctness specifically.

### Integration (4)

#### TC-EMPDET-351 — Employee Profile — modifying a skill's classification from the profile reflects in the Skills module

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): they can modify skills too and segregate them with primary or secondary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. From the employee profile's Skills section, change one skill from Secondary to Primary (or vice versa)
2. Save
3. Navigate to Employee → Skills and open the Skill Detail Panel for the same skill/department

**Expected**

The employee appears under the newly-set classification (Primary/Secondary) in the Skills module without any further action

**Automation Hint**

Multi-module flow — verify both surfaces reconcile to the same underlying data.

#### TC-EMPDET-360 — Employee Profile — Goals section shows the goals assigned to this employee

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): employee can see goals too |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the full profile for an employee with at least one assigned Goal
2. Locate the Goals section
3. Cross-check against Employee → Goals listing for the same employee

**Expected**

Goals assigned to the employee are listed and match what the Goals module shows for that employee (same names, no missing/extra entries)

**Automation Hint**

Multi-module flow — cross-reference GoalsPage assignment data for the same employee.

#### TC-EMPDET-363 — While impersonating, adding/self-assigning a skill succeeds and reflects on the real employee's record

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): we can perform all the action that a employee can perform according to the permission it have like for example add skill |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Impersonating a target employee via 'Login as Employee'

**Steps**

1. While impersonating, add/self-assign a new skill exactly as that employee would
2. Exit impersonation back to Admin
3. Open the real employee's profile/Skills section

**Expected**

The skill added while impersonating is present on the employee's actual record — no data is lost or attributed to the wrong account

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Multi-module flow.

#### TC-EMPDET-371 — Allocation End Date shown in the project popup matches the value returned by the corresponding API endpoint after save

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — API/UI value parity after write |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Edit and save the Allocation End Date via the project popup
2. Capture the PUT/PATCH response or the subsequent GET for that allocation
3. Compare the API value with the UI-displayed value

**Expected**

UI-displayed Allocation End Date exactly matches the API's stored value

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Negative (6)

#### TC-EMPDET-323 — Editing a locked field (Designation) is not possible via the Edit Drawer

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | KB-direct: employee-details.json historicalBugs — confirmed locked field |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Edit Drawer for any employee
2. Attempt to interact with the Designation field

**Expected**

Designation field is disabled and cannot be modified through the UI; no write attempt reaches the API for this field

**Automation Hint**

Confirmed live 2026-08-19 per employee-details.page.ts header comment — assert `disabled` attribute rather than attempting a fill and expecting a rejection.

#### TC-EMPDET-341 — Setting allocation end date before the allocation start date is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation (cross-field date rule, implicit from allocation end-date editability) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the project popup Edit section
2. Set Allocation End Date to a date earlier than the Allocation Start Date
3. Attempt to save

**Expected**

A validation error is shown; the invalid date is not persisted

**Test Data**

- `endDate`: before startDate

#### TC-EMPDET-344 — Cancelling the Deallocate confirmation makes no change to the allocation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | KB-direct: employee-details.json businessRules — confirmation-before-destructive-action |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Deallocate popup
2. Fill in some/all fields
3. Cancel/dismiss instead of confirming

**Expected**

Employee remains allocated to the project exactly as before; no partial deallocation occurs

**Automation Hint**

Ties to the existing confirmed business rule: destructive actions require confirmation and cancel must make no change.

#### TC-EMPDET-345 — Submitting the Deallocate popup with a required field missing is blocked with a validation message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Manual requirement (2026-08-19): when selecting deallocate employee there should be a pop up opened and try to fill these details |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Deallocate popup
2. Leave a required field empty
3. Attempt to confirm

**Expected**

Deallocation is blocked; an inline validation message identifies the missing field; no partial deallocation occurs

#### TC-EMPDET-353 — Employee Profile — an invalid (non-URL) value in the LinkedIn field is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation (implicit from LinkedIn URL field) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the LinkedIn field in edit mode
2. Enter a value that is not a valid URL
3. Attempt to save

**Expected**

A validation error is shown; the invalid value is not persisted

**Test Data**

- `invalidValue`: not-a-url

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-357 — Employee Profile — Visa Information: cancelling the delete confirmation leaves the record unchanged

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression, @needs-verification |
| **Requirement Ref** | Regression: confirmation dialog cancel-makes-no-change pattern |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click Delete on a visa record
2. Cancel/dismiss the confirmation dialog instead of confirming

**Expected**

The visa record remains present and unchanged in the list

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Regression (2)

#### TC-EMPDET-370 — Past Employee profile remains read-only apart from the impersonation entry point

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: employee-details.json edgeCases — archived/past-employee read-only rule |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a past employee's full profile
2. Enumerate every control on the page (excluding the impersonation entry point)

**Expected**

No edit affordance is present anywhere on a past employee's profile besides the ability to log in / view as them

**Automation Hint**

Ties to existing confirmed KB rule: 'Archived/Past-employee side drawer must remain read-only (no edit affordance beyond the close icon)'.

#### TC-EMPDET-372 — After deallocation, the project's allocation count decrements everywhere without a page refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — count consistency after Deallocation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the allocation/employee count for a project before deallocating one employee
2. Complete the Deallocate flow for that employee
3. Without reloading, re-check the count on the employee list, the project popup, and (if reachable) the API

**Expected**

All three sources (list, popup, API) show the decremented count immediately, with no page refresh required

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Security (3)

#### TC-EMPDET-365 — While impersonating, an action not permitted for the employee's actual role is blocked or hidden

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | Regression: rbac (impersonation must respect the impersonated employee's own permission scope) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Impersonating a target employee whose role lacks a specific permission (e.g. cannot delete Goals)

**Steps**

1. While impersonating, attempt an action the impersonated employee's role does not permit (e.g. delete a Goal)
2. Observe the UI and, if possible, the API response

**Expected**

The action's control is hidden/disabled in the UI; a direct API attempt (if exercised) returns 403 — impersonation never grants MORE access than the real employee has

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Severity capped per low-confidence provenance rule despite being a security case.

#### TC-EMPDET-367 — Impersonation never allows escalation beyond the impersonated employee's own data scope (IDOR-style check)

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | Regression: rbac — IDOR |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Impersonating a target employee

**Steps**

1. While impersonating employee A, attempt to access employee B's private data by changing an ID in the URL or a request payload

**Expected**

Access is denied (403/404); impersonation is scoped strictly to the one employee it was started for

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Severity capped per low-confidence provenance rule despite being a security case.

#### TC-EMPDET-375 — Restricted-role session cannot use 'Login as Employee' to impersonate a higher-privilege user

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | Regression: rbac — impersonation privilege-escalation guard |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a non-Admin (TM/Employee) session, attempt to locate or invoke a 'Login as Employee' control for any employee, especially one with higher privilege

**Expected**

The impersonation control is absent for non-privileged roles, or — at minimum — cannot target a higher-privilege account; a direct API attempt (if exercised) returns 403

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Severity capped per low-confidence provenance rule despite being a security case.

### Smoke (4)

#### TC-EMPDET-338 — Clicking a project in the employee's details opens a popup with project info, an Edit section, and a Deallocate button

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): check for any project in the employee detail — there should be a pop up opened and an edit section should be there and deallocate button should also be there |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open an employee row with at least one allocated project
2. Click on that project entry
3. Observe the resulting popup/drawer

**Expected**

A popup opens showing the project's allocation details, an Edit section for editable fields, and a Deallocate button

#### TC-EMPDET-346 — Clicking an employee row (not a project) opens a popup showing projects and other details correctly

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): when clicked on any employee there is a pop up opened from there check if projects and other details are visible properly |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click on an employee row (outside of a specific project entry)
2. Observe the resulting popup

**Expected**

A popup opens showing the employee's projects and other summary details, all correctly rendered (no blank/broken sections)

#### TC-EMPDET-347 — From the employee popup, 'View Employee Profile' opens the full profile view

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): in the same popup there is an option to view the employee profile where all the details will be visible |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the employee popup for any employee
2. Click the option to view the employee's profile
3. Observe the resulting profile view

**Expected**

Full employee profile opens with all detail sections (personal info, skills, projects, goals, etc.) visible

**Automation Hint**

Exact control label ('View Profile'/'View Employee Profile') unconfirmed against live app — locate generically by role/text near the popup's action area.

#### TC-EMPDET-361 — 'Login as Employee' from the profile switches the session into that employee's view

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): there will be an option to login as employee and then we can imitate as the employee in the system |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the full profile for an active employee
2. Click the option to log in / view as that employee
3. Observe the resulting session/view

**Expected**

The app now presents the impersonated employee's own view (their nav, permissions, and data scope) rather than the Admin's

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Control label/mechanism unconfirmed against live app; describe generically ('login as employee' action) rather than a guessed selector.
