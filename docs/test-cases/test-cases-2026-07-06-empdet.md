# Employee Details — Test Cases

**Total test cases:** 28  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-07-06-EMPDET.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 15 | 53.6% |
| negative | 10 | 35.7% |
| smoke | 3 | 10.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 17 | 60.7% |
| critical | 7 | 25.0% |
| medium | 4 | 14.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 25 | 89.3% |
| critical | 3 | 10.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 28 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 28 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 28 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 18 | 64.3% |
| @negative | 10 | 35.7% |
| @regression | 5 | 17.9% |
| @boundary | 4 | 14.3% |
| @security | 4 | 14.3% |
| @smoke | 3 | 10.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-001](#tc-empdet-001-smoke-admin-searches-filters-sorts-and-paginates-employee-grid-with-count-matching-api) | Smoke — Admin searches, filters, sorts, and paginates Employee Grid with count matching API | Employee Details | smoke | critical |
| [TC-EMPDET-002](#tc-empdet-002-smoke-authorized-user-edits-employee-via-edit-drawer-unauthorized-user-blocked-at-ui-and-api) | Smoke — Authorized user edits employee via Edit Drawer; unauthorized user blocked at UI and API | Employee Details | smoke | critical |
| [TC-EMPDET-003](#tc-empdet-003-smoke-current-past-employee-tab-switch-maintains-independent-state-and-correct-membership) | Smoke — Current/Past Employee tab switch maintains independent state and correct membership | Employee Details | smoke | critical |
| [TC-EMPDET-004](#tc-empdet-004-view-all-employees-rendered-in-centralized-employee-grid) | View all employees rendered in centralized Employee Grid | Employee Details | functional | high |
| [TC-EMPDET-005](#tc-empdet-005-current-employee-tab-and-past-employee-tab-correctly-separate-active-vs-archived-employees) | Current Employee tab and Past Employee tab correctly separate active vs archived employees | Employee Details | functional | high |
| [TC-EMPDET-006](#tc-empdet-006-search-locates-employees-by-name-email-and-project-case-insensitive-partial-match) | Search locates employees by Name, Email, and Project (case-insensitive, partial match) | Employee Details | functional | high |
| [TC-EMPDET-007](#tc-empdet-007-apply-single-basic-filter-department-narrows-grid-and-updates-count) | Apply single Basic Filter (Department) narrows grid and updates count | Employee Details | functional | high |
| [TC-EMPDET-008](#tc-empdet-008-advanced-filter-panel-save-applies-combined-criteria-together) | Advanced Filter panel — Save applies combined criteria together | Employee Details | functional | high |
| [TC-EMPDET-009](#tc-empdet-009-multiple-basic-filters-combine-using-and-logic-not-or) | Multiple Basic Filters combine using AND logic, not OR | Employee Details | functional | high |
| [TC-EMPDET-010](#tc-empdet-010-sort-employee-grid-ascending-then-descending-on-repeat-column-header-click) | Sort employee grid ascending then descending on repeat column-header click | Employee Details | functional | medium |
| [TC-EMPDET-011](#tc-empdet-011-user-reviews-project-assignments-skills-reporting-hierarchy-availability-and-logged-hours-per-employee-row) | User reviews project assignments, skills, reporting hierarchy, availability and logged hours per employee row | Employee Details | functional | high |
| [TC-EMPDET-012](#tc-empdet-012-cancel-in-edit-drawer-discards-changes-and-leaves-backend-grid-unchanged) | Cancel in Edit Drawer discards changes and leaves backend/grid unchanged | Employee Details | functional | high |
| [TC-EMPDET-013](#tc-empdet-013-pagination-through-large-dataset-returns-no-duplicate-or-missing-employee-records) | Pagination through large dataset returns no duplicate or missing employee records | Employee Details | functional | high |
| [TC-EMPDET-014](#tc-empdet-014-employee-count-header-and-last-updated-value-are-always-sourced-from-backend-api-never-frontend-calculated) | Employee Count header and Last Updated value are always sourced from backend API, never frontend-calculated | Employee Details | functional | critical |
| [TC-EMPDET-015](#tc-empdet-015-search-filter-and-sort-operate-together-without-resetting-each-other-pagination-preserves-active-state) | Search, filter, and sort operate together without resetting each other; pagination preserves active state | Employee Details | functional | high |
| [TC-EMPDET-016](#tc-empdet-016-reset-clears-all-basic-filters-and-restores-unfiltered-list-scoped-to-the-active-tab-only) | Reset clears all Basic Filters and restores unfiltered list scoped to the active tab only | Employee Details | functional | high |
| [TC-EMPDET-017](#tc-empdet-017-advanced-filter-panel-cancel-discards-unsaved-edits-and-restores-last-applied-filter-state) | Advanced Filter panel Cancel discards unsaved edits and restores last-applied filter state | Employee Details | functional | medium |
| [TC-EMPDET-018](#tc-empdet-018-filter-chip-is-displayed-per-applied-filter-and-can-be-individually-removed) | Filter chip is displayed per applied filter and can be individually removed | Employee Details | functional | medium |
| [TC-EMPDET-019](#tc-empdet-019-unauthorized-user-attempts-to-open-edit-drawer-via-ui-or-direct-api-call) | Unauthorized user attempts to open Edit Drawer via UI or direct API call | Employee Details | negative | critical |
| [TC-EMPDET-020](#tc-empdet-020-direct-url-access-to-employee-details-page-without-a-valid-session) | Direct URL access to Employee Details page without a valid session | Employee Details | negative | high |
| [TC-EMPDET-021](#tc-empdet-021-search-input-containing-an-sql-injection-payload) | Search input containing an SQL injection payload | Employee Details | negative | critical |
| [TC-EMPDET-022](#tc-empdet-022-search-input-containing-script-tags-xss-payload) | Search input containing script tags / XSS payload | Employee Details | negative | critical |
| [TC-EMPDET-023](#tc-empdet-023-advanced-filter-available-since-end-date-earlier-than-start-date-is-rejected) | Advanced Filter — 'Available Since' end date earlier than start date is rejected | Employee Details | negative | high |
| [TC-EMPDET-024](#tc-empdet-024-advanced-filter-submitted-with-availability-101-or-experience-1) | Advanced Filter submitted with Availability % = 101 or Experience = -1 | Employee Details | negative | high |
| [TC-EMPDET-025](#tc-empdet-025-api-returns-500-502-503-while-loading-the-employee-grid) | API returns 500/502/503 while loading the employee grid | Employee Details | negative | high |
| [TC-EMPDET-026](#tc-empdet-026-session-expires-while-the-edit-drawer-is-open-and-the-user-attempts-save) | Session expires while the Edit Drawer is open and the user attempts Save | Employee Details | negative | high |
| [TC-EMPDET-027](#tc-empdet-027-double-click-rapid-repeated-save-clicks-in-the-edit-drawer) | Double-click / rapid repeated Save clicks in the Edit Drawer | Employee Details | negative | high |
| [TC-EMPDET-028](#tc-empdet-028-network-disconnects-during-save-submission) | Network disconnects during Save submission | Employee Details | negative | medium |

---

## Employee Details

28 test cases.

### Functional (15)

#### TC-EMPDET-004 — View all employees rendered in centralized Employee Grid

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Users can view all employees in a centralized Employee Grid. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee Details
3. Observe the grid

**Expected**

One row is rendered per employee returned by the API; Name, Designation, Experience, Department, Reporting Manager, Projects, Skills, Availability, Log Hours, and Night Shift columns are populated per row

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-005 — Current Employee tab and Past Employee tab correctly separate active vs archived employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Users can distinguish between active and archived employees; BR-004 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Note all employee IDs listed on Current Employee tab
3. Switch to Past Employee tab and note all employee IDs listed

**Expected**

Current tab lists only employees whose lifecycle state = Active; Past tab lists only Archived employees; no employee ID appears in both lists

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-006 — Search locates employees by Name, Email, and Project (case-insensitive, partial match)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Users can locate employees quickly via Search; SR-003, SR-004 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Enter 'shar' (lowercase partial) in Search box
3. Clear and enter an email fragment 'nayak'
4. Clear and enter a project name fragment 'phoenix'

**Expected**

Each search returns all employees whose Name, Email, or Project contains the term case-insensitively; result count updates immediately; underlying employee data unchanged

**Test Data**

- `nameFragment`: shar
- `emailFragment`: nayak
- `projectFragment`: phoenix

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-007 — Apply single Basic Filter (Department) narrows grid and updates count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Basic Filters (Department) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open Basic Filter panel
3. Select Department = 'Engineering'
4. Apply filter

**Expected**

Grid shows only Engineering department employees; count badge updates to match; a filter chip 'Engineering' is displayed and individually removable

**Test Data**

- `department`: Engineering

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-008 — Advanced Filter panel — Save applies combined criteria together

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Advanced Filters; businessRule: Advanced Filters Save applies all selected criteria together (kb) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open Advanced Filter panel
3. Select Designation, Experience, and Technology Stack criteria without clicking Save
4. Click Save

**Expected**

Grid is unaffected until Save is clicked; on Save, all selected advanced criteria apply together; count and grid update to reflect the combined criteria

**Test Data**

- `designation`: QA Engineer
- `experienceMin`: 2
- `technologyStack`: Playwright

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-009 — Multiple Basic Filters combine using AND logic, not OR

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | testScenario: Apply multiple filters combined (AND logic); BR-018 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Apply Department = 'Engineering'
3. Additionally apply Night Shift = 'Yes'

**Expected**

Only records matching BOTH Department='Engineering' AND Night Shift='Yes' are shown; count reflects the intersection, not the union

**Test Data**

- `department`: Engineering
- `nightShift`: Yes

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-010 — Sort employee grid ascending then descending on repeat column-header click

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Users can sort employee information by sortable columns |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Click the 'Experience' column header once
3. Click it again

**Expected**

First click sorts ascending with an ascending sort indicator icon; second click sorts descending with a descending indicator; rows reorder correctly both times

**Test Data**

- `sortColumn`: Experience

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-011 — User reviews project assignments, skills, reporting hierarchy, availability and logged hours per employee row

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Users can review project assignments, skills, reporting hierarchy, availability, and logged hours per employee |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); at least one employee has many projects and skills

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Locate the employee row seeded with many projects/skills
3. Observe the Projects and Skills badges
4. Hover over the Reporting Manager cell
5. Observe the Availability and Log Hours cell values

**Expected**

Projects/Skills badges display correct visible items with a '+N' overflow badge when the list exceeds visible slots; Reporting Manager hover card shows manager name/details; Availability and Log Hours values match the backend record

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-012 — Cancel in Edit Drawer discards changes and leaves backend/grid unchanged

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | testScenario: Cancel in Edit Drawer discards changes; businessRule: Cancel on Edit Drawer must discard all changes; grid must show original pre-edit values (kb) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open the Edit Drawer for an employee
3. Change the Designation field to 'Temp Title'
4. Click Cancel
5. Reopen the Edit Drawer for the same employee

**Expected**

No backend update occurs; grid retains original pre-edit Designation value; reopening the drawer shows the original value, not 'Temp Title'

**Test Data**

- `field`: Designation
- `attemptedValue`: Temp Title

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-013 — Pagination through large dataset returns no duplicate or missing employee records

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | AC: Employee list supports pagination without duplicate or missing records |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); 500+ seeded records

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Collect employee IDs shown on page 1
3. Click Next through to the last page, collecting IDs on each page
4. Click Previous back to page 1

**Expected**

The union of all collected IDs has no duplicates and no gaps versus the API total; boundary Previous/Next buttons are disabled at the first/last page respectively

**Test Data**

- `pageSize`: 25

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-014 — Employee Count header and Last Updated value are always sourced from backend API, never frontend-calculated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC9; BR-037; validationRule: Employee Count display must equal backend total; validationRule: Last Updated must be sourced from backend API; businessRule: Employee count in grid/badge/API must match (kb, inferred); businessRule: Last Updated must come from API only (kb, inferred); businessRule: Employee counts must match and update immediately after search/filter/pagination/tab-switch (regression-derived, speculative) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Intercept the employee-list API response and note its 'total' and 'lastUpdated' fields
3. Compare against the displayed Employee Count badge and Last Updated text

**Expected**

Displayed Employee Count equals the API 'total' field exactly; displayed Last Updated equals the API-provided timestamp exactly (normalized for timezone); neither value is ever computed client-side

**Automation Hint**

Use primaryPage fixture. Intercept via page.waitForResponse; normalize timezone before comparing timestamps.

#### TC-EMPDET-015 — Search, filter, and sort operate together without resetting each other; pagination preserves active state

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC10 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Enter search term 'a'
3. Apply Department = 'Engineering'
4. Sort by Name
5. Navigate to page 2

**Expected**

After each step, the previously applied search/filter/sort remain active; navigating to page 2 preserves the search term, Department filter, and Name sort

**Test Data**

- `searchTerm`: a
- `department`: Engineering
- `sortColumn`: Name

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-016 — Reset clears all Basic Filters and restores unfiltered list scoped to the active tab only

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | testScenario: Reset clears all filters; businessRule: Reset on Basic Filters clears all criteria and restores unfiltered list for current tab only (kb) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. On Current Employee tab, apply Department = 'Engineering' and Night Shift = 'Yes'
3. Switch to Past Employee tab and apply a different filter
4. Return to Current Employee tab and click Reset

**Expected**

All filter chips are removed from Current tab; full unfiltered Current-tab list is restored; Past tab's separately applied filter remains unaffected

**Test Data**

- `department`: Engineering

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-017 — Advanced Filter panel Cancel discards unsaved edits and restores last-applied filter state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | testScenario: Advanced Filter panel Cancel discards unsaved changes; businessRule: Advanced Filters Cancel reverts to last-applied filter state (kb) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Apply and Save Advanced Filter Department = 'Engineering'
3. Reopen Advanced Filter panel, additionally select Designation = 'QA Engineer' without saving
4. Click Cancel

**Expected**

Panel closes without applying the Designation edit; grid still reflects only the last-applied Department = 'Engineering' filter

**Test Data**

- `lastApplied`: department: Engineering
- `unsaved`: designation: QA Engineer

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-018 — Filter chip is displayed per applied filter and can be individually removed

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | testScenario: Apply Basic Filter — filter chip displayed and individually removable |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Apply Department = 'Engineering' and Night Shift = 'Yes'
3. Click the 'x' on the Department filter chip only

**Expected**

Two filter chips are shown after applying both filters; removing the Department chip removes only that filter, leaving Night Shift active and the grid updated accordingly

**Test Data**

- `department`: Engineering
- `nightShift`: Yes

**Automation Hint**

Use primaryPage fixture.

### Negative (10)

#### TC-EMPDET-019 — Unauthorized user attempts to open Edit Drawer via UI or direct API call

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenario 1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture) scoped to a read-only/Employee-level role

**Steps**

1. Log in as punit.patel@simformsolutions.com (testUserPage fixture)
2. Attempt to click the Edit action on an employee row
3. Call the employee update API directly with valid record data

**Expected**

Edit control is hidden/disabled in UI; backend API rejects the direct request with 401/403 regardless of UI state

**Automation Hint**

Use testUserPage fixture.

#### TC-EMPDET-020 — Direct URL access to Employee Details page without a valid session

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario 2 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

No authenticated session (cleared storage state)

**Steps**

1. Clear all cookies/storage state
2. Navigate directly to the Employee Details URL

**Expected**

User is redirected to login / session-expired handling; no employee data is exposed in the page or network responses

**Automation Hint**

Use a fresh browser context with no storageState.

#### TC-EMPDET-021 — Search input containing an SQL injection payload

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenario 3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Enter "' OR '1'='1" into the Search box
3. Submit the search

**Expected**

Input is escaped/sanitized; no injection executes; results are either empty or safely matched with no backend error/stack trace leaked

**Test Data**

- `payload`: ' OR '1'='1

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-022 — Search input containing script tags / XSS payload

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenario 4 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Enter '<script>alert(1)</script>' into the Search box
3. Submit the search

**Expected**

Payload is rendered as literal text in the search box/results area; no script execution occurs; no JS dialog appears

**Test Data**

- `payload`: <script>alert(1)</script>

**Automation Hint**

Use primaryPage fixture. Assert via page.on('dialog') never fires.

#### TC-EMPDET-023 — Advanced Filter — 'Available Since' end date earlier than start date is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenario 5; validationRule: Available Since end date must not be before start date |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open Advanced Filter panel
3. Set 'Available Since' start date = 2026-06-01 and end date = 2026-05-01
4. Attempt to Save

**Expected**

A validation error is shown; the filter is not applied; grid remains unchanged

**Test Data**

- `startDate`: 2026-06-01
- `endDate`: 2026-05-01

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-024 — Advanced Filter submitted with Availability % = 101 or Experience = -1

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenario 6; validationRule: Availability % must be 0-100; validationRule: Experience must be non-negative; Known bug: EC-EMPDET-003 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open Advanced Filter panel
3. Enter Availability % = 101
4. Enter Experience = -1
5. Attempt to apply/Save

**Expected**

Both values are rejected with validation feedback before Save/apply; filter is not applied

**Test Data**

- `availabilityPct`: 101
- `experience`: -1

**Automation Hint**

Use primaryPage fixture.

#### TC-EMPDET-025 — API returns 500/502/503 while loading the employee grid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario 7 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); network mocked to force 5xx on employee-list API

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Mock the employee-list API to return HTTP 500
3. Navigate to Employee Details

**Expected**

A user-friendly error state is shown; no stale/duplicate data displayed; a Retry option is offered if implemented; no raw stack trace visible; no console errors

**Test Data**

- `mockStatus`: 500

**Automation Hint**

Use primaryPage fixture. Use page.route to force the 5xx response.

#### TC-EMPDET-026 — Session expires while the Edit Drawer is open and the user attempts Save

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenario 8 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open the Edit Drawer for an employee and change a field
3. Invalidate/expire the session token server-side
4. Click Save

**Expected**

Save is blocked; user is notified of session expiry; no partial update occurs on the backend

**Automation Hint**

Use primaryPage fixture. Expire session via API/storage manipulation before clicking Save.

#### TC-EMPDET-027 — Double-click / rapid repeated Save clicks in the Edit Drawer

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenario 9; validationRule: Edit Drawer Save duplicate/rapid submissions must be prevented; businessRule: Saving must prevent duplicate submissions (idempotency); businessRule: Submitting Save twice must not create duplicate update (regression-derived, speculative); Known bug: EC-EMPDET-004 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open the Edit Drawer for an employee and change Designation to 'Lead QA Engineer'
3. Rapidly double-click the Save button

**Expected**

Exactly one update request/persisted change occurs; no duplicate record or corrupted data results

**Test Data**

- `field`: Designation
- `newValue`: Lead QA Engineer

**Automation Hint**

Use primaryPage fixture. Assert via network log that only one PUT/PATCH request was sent.

#### TC-EMPDET-028 — Network disconnects during Save submission

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario 10 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open the Edit Drawer for an employee and change a field
3. Simulate offline network
4. Click Save

**Expected**

Save fails gracefully; no partial backend update occurs; user is informed and can retry once back online

**Automation Hint**

Use primaryPage fixture. Use page.context().setOffline(true) to simulate disconnect.

### Smoke (3)

#### TC-EMPDET-001 — Smoke — Admin searches, filters, sorts, and paginates Employee Grid with count matching API

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); Current Employee tab has 500+ seeded records

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee Details (Current Employee tab, default)
3. Enter 'Sharma' in the Search box
4. Apply Department = 'Engineering' Basic Filter
5. Click the 'Experience' column header to sort ascending
6. Navigate to page 2 using pagination controls

**Expected**

At every step the header Employee Count badge equals the grid row count and equals the API 'total' field for the same query; no console errors; no stale count shown

**Test Data**

- `searchTerm`: Sharma
- `department`: Engineering
- `sortColumn`: Experience

**Automation Hint**

Use primaryPage fixture. Intercept API response via page.waitForResponse and compare its total to header text and grid row count after each action.

#### TC-EMPDET-002 — Smoke — Authorized user edits employee via Edit Drawer; unauthorized user blocked at UI and API

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[1]; businessRule: Any employee data displayed in UI must be retrievable via API with identical values, including after Edit save (speculative); businessRule: After Edit Drawer save, grid must reflect changes immediately without page reload (inferred/speculative) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture) and punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Open Employee Details → Current Employee tab
3. Click the Edit action on any employee row
4. Update the 'Designation' field to 'Senior QA Engineer'
5. Click Save
6. In a second context, log in as punit.patel@simformsolutions.com (testUserPage fixture)
7. Attempt to open the Edit Drawer for the same employee and call the update API directly

**Expected**

Drawer pre-populates current backend values; after Save, grid shows 'Senior QA Engineer' immediately without page reload; drawer closes; punit.patel's Edit control is hidden/disabled in UI and a direct API update attempt returns 401/403; all fields shown match the API GET response for the record, including after the save (BR: UI/API parity after Edit save; grid reflects change immediately without reload)

**Test Data**

- `field`: Designation
- `newValue`: Senior QA Engineer

**Automation Hint**

Open two browser contexts: primaryPage + testUserPage.

#### TC-EMPDET-003 — Smoke — Current/Past Employee tab switch maintains independent state and correct membership

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[2]; businessRule BR-004: archived employee must never appear in Current tab; businessRule: search/filter/sort/pagination state independent per tab |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. On Current Employee tab, apply search term 'Patel', Department filter 'Engineering', sort by Name
3. Switch to Past Employee tab
4. Switch back to Current Employee tab

**Expected**

Past Employee tab shows only archived employees, none from Current; no active employees appear in Past; Current tab's search/filter/sort from step 2 persists on return; Past tab's own state was independent and unaffected by Current tab's filters

**Test Data**

- `searchTerm`: Patel
- `department`: Engineering
- `sortColumn`: Name

**Automation Hint**

Use primaryPage fixture.
