# Unspecified module — Test Cases

**Total test cases:** 70  
**Modules covered:** Unspecified module  
**Source:** `reports/test-cases/cases-EMPDET-manual.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 28 | 40.0% |
| regression | 12 | 17.1% |
| negative | 10 | 14.3% |
| boundary | 8 | 11.4% |
| security | 5 | 7.1% |
| a11y | 4 | 5.7% |
| smoke | 3 | 4.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 36 | 51.4% |
| medium | 18 | 25.7% |
| critical | 15 | 21.4% |
| low | 1 | 1.4% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 32 | 45.7% |
| @regression | 21 | 30.0% |
| @negative | 10 | 14.3% |
| @boundary | 9 | 12.9% |
| @smoke | 7 | 10.0% |
| @security | 6 | 8.6% |
| @a11y | 4 | 5.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-001](#tc-empdet-001-current-employee-tab-loads-with-active-employees-matching-api-smoke) | Current Employee tab loads with active employees matching API @smoke |  | smoke | critical |
| [TC-EMPDET-002](#tc-empdet-002-past-employee-tab-loads-with-archived-employees-only-smoke) | Past Employee tab loads with archived employees only @smoke |  | smoke | critical |
| [TC-EMPDET-003](#tc-empdet-003-edit-employee-via-drawer-save-persists-to-grid-and-api-smoke) | Edit employee via drawer — save persists to grid and API @smoke |  | smoke | critical |
| [TC-EMPDET-004](#tc-empdet-004-search-by-employee-name-partial-match-case-insensitive-functional) | Search by employee name — partial match, case-insensitive @functional |  | functional | critical |
| [TC-EMPDET-005](#tc-empdet-005-search-by-employee-email-partial-match-functional) | Search by employee email — partial match @functional |  | functional | high |
| [TC-EMPDET-006](#tc-empdet-006-search-by-project-name-returns-all-assigned-employees-functional) | Search by project name — returns all assigned employees @functional |  | functional | high |
| [TC-EMPDET-007](#tc-empdet-007-sort-by-name-asc-then-desc-preserves-search-and-filters-functional) | Sort by Name ASC then DESC preserves search and filters @functional |  | functional | high |
| [TC-EMPDET-008](#tc-empdet-008-sort-by-department-reporting-manager-availability-log-hours-functional) | Sort by Department, Reporting Manager, Availability, Log Hours @functional |  | functional | high |
| [TC-EMPDET-009](#tc-empdet-009-apply-basic-filter-single-department-functional) | Apply Basic Filter — single Department @functional |  | functional | high |
| [TC-EMPDET-010](#tc-empdet-010-apply-multiple-basic-filters-simultaneously-intersection-functional) | Apply multiple Basic Filters simultaneously — intersection @functional |  | functional | high |
| [TC-EMPDET-011](#tc-empdet-011-reset-basic-filters-restores-full-dataset-functional) | Reset Basic Filters restores full dataset @functional |  | functional | high |
| [TC-EMPDET-012](#tc-empdet-012-advanced-filter-panel-opens-within-1-second-with-all-18-fields-functional) | Advanced Filter panel opens within 1 second with all 18 fields @functional |  | functional | high |
| [TC-EMPDET-013](#tc-empdet-013-advanced-filter-save-applies-all-filters-and-updates-count-functional) | Advanced Filter — Save applies all filters and updates count @functional |  | functional | high |
| [TC-EMPDET-014](#tc-empdet-014-advanced-filter-cancel-discards-unsaved-changes-functional) | Advanced Filter — Cancel discards unsaved changes @functional |  | functional | high |
| [TC-EMPDET-015](#tc-empdet-015-advanced-filter-department-designation-combination-functional) | Advanced Filter — Department + Designation combination @functional |  | functional | high |
| [TC-EMPDET-016](#tc-empdet-016-search-after-advanced-filter-both-criteria-satisfied-simultaneously-functional) | Search after Advanced Filter — both criteria satisfied simultaneously @functional |  | functional | high |
| [TC-EMPDET-017](#tc-empdet-017-sorting-after-filtering-sort-applies-within-filtered-set-functional) | Sorting after filtering — sort applies within filtered set @functional |  | functional | high |
| [TC-EMPDET-018](#tc-empdet-018-pagination-preserves-filter-and-search-state-across-pages-functional) | Pagination preserves filter and search state across pages @functional |  | functional | high |
| [TC-EMPDET-019](#tc-empdet-019-edit-employee-cancel-discards-all-changes-functional) | Edit employee — Cancel discards all changes @functional |  | functional | high |
| [TC-EMPDET-020](#tc-empdet-020-pagination-next-previous-navigation-with-no-duplicates-or-missing-records-functional) | Pagination — next/previous navigation with no duplicates or missing records @functional |  | functional | high |
| [TC-EMPDET-021](#tc-empdet-021-pagination-page-size-change-updates-records-per-page-functional) | Pagination page size change updates records per page @functional |  | functional | medium |
| [TC-EMPDET-022](#tc-empdet-022-api-vs-ui-data-parity-all-grid-column-values-match-api-functional) | API vs UI data parity — all grid column values match API @functional |  | functional | critical |
| [TC-EMPDET-023](#tc-empdet-023-last-updated-field-sourced-from-api-not-computed-on-frontend-functional) | Last Updated field sourced from API — not computed on frontend @functional |  | functional | critical |
| [TC-EMPDET-024](#tc-empdet-024-skills-n-expansion-shows-all-skills-matching-api-functional) | Skills +N expansion shows all skills matching API @functional |  | functional | medium |
| [TC-EMPDET-025](#tc-empdet-025-search-with-no-matching-results-shows-empty-state-and-zero-count-negative) | Search with no matching results shows empty state and zero count @negative |  | negative | medium |
| [TC-EMPDET-026](#tc-empdet-026-advanced-filter-combination-returns-no-results-empty-state-negative) | Advanced filter combination returns no results — empty state @negative |  | negative | medium |
| [TC-EMPDET-027](#tc-empdet-027-advanced-filter-availability-101-is-rejected-with-validation-error-negative) | Advanced Filter — Availability % = 101 is rejected with validation error @negative |  | negative | high |
| [TC-EMPDET-028](#tc-empdet-028-advanced-filter-experience-1-is-rejected-with-validation-error-negative) | Advanced Filter — Experience = -1 is rejected with validation error @negative |  | negative | high |
| [TC-EMPDET-029](#tc-empdet-029-advanced-filter-available-since-end-date-before-start-date-rejected-negative) | Advanced Filter — Available Since end date before start date rejected @negative |  | negative | high |
| [TC-EMPDET-030](#tc-empdet-030-api-failure-500-shows-user-friendly-error-no-crash-negative) | API failure (500) shows user-friendly error — no crash @negative |  | negative | high |
| [TC-EMPDET-031](#tc-empdet-031-xss-injection-in-search-field-safely-escaped-negative) | XSS injection in search field — safely escaped @negative |  | negative | high |
| [TC-EMPDET-032](#tc-empdet-032-edit-drawer-save-attempted-with-required-field-cleared-inline-validation-negative) | Edit Drawer Save attempted with required field cleared — inline validation @negative |  | negative | high |
| [TC-EMPDET-033](#tc-empdet-033-double-click-save-in-edit-drawer-no-duplicate-update-negative) | Double-click Save in Edit Drawer — no duplicate update @negative |  | negative | high |
| [TC-EMPDET-034](#tc-empdet-034-null-reporting-manager-renders-gracefully-no-js-crash-boundary) | Null Reporting Manager renders gracefully — no JS crash @boundary |  | boundary | medium |
| [TC-EMPDET-035](#tc-empdet-035-null-skills-and-null-projects-render-gracefully-boundary) | Null Skills and null Projects render gracefully @boundary |  | boundary | medium |
| [TC-EMPDET-036](#tc-empdet-036-pagination-first-page-previous-button-disabled-boundary) | Pagination first page — Previous button disabled @boundary |  | boundary | medium |
| [TC-EMPDET-037](#tc-empdet-037-pagination-last-page-next-button-disabled-boundary) | Pagination last page — Next button disabled @boundary |  | boundary | medium |
| [TC-EMPDET-038](#tc-empdet-038-availability-boundary-values-0-and-100-are-accepted-boundary) | Availability % boundary values — 0 and 100 are accepted @boundary |  | boundary | medium |
| [TC-EMPDET-039](#tc-empdet-039-search-with-maximum-length-string-255-chars-no-crash-boundary) | Search with maximum length string (255 chars) — no crash @boundary |  | boundary | low |
| [TC-EMPDET-040](#tc-empdet-040-large-dataset-500-employees-meets-performance-targets-boundary) | Large dataset — 500+ employees meets performance targets @boundary |  | boundary | high |
| [TC-EMPDET-041](#tc-empdet-041-employee-count-mismatch-grid-rows-result-badge-and-api-total-all-match-regression) | Employee count mismatch — grid rows, result badge, and API total all match @regression |  | regression | critical |
| [TC-EMPDET-042](#tc-empdet-042-edit-button-visibility-present-for-all-rows-for-admin-role-regression) | Edit button visibility — present for all rows for Admin role @regression |  | regression | high |
| [TC-EMPDET-043](#tc-empdet-043-edited-employee-remains-in-list-not-lost-after-save-regression) | Edited employee remains in list — not lost after save @regression |  | regression | high |
| [TC-EMPDET-044](#tc-empdet-044-filter-reset-regression-all-chips-cleared-and-full-list-restored-regression) | Filter reset regression — all chips cleared and full list restored @regression |  | regression | high |
| [TC-EMPDET-045](#tc-empdet-045-duplicate-rows-regression-no-duplicate-ids-after-pagination-regression) | Duplicate rows regression — no duplicate IDs after pagination @regression |  | regression | critical |
| [TC-EMPDET-046](#tc-empdet-046-tab-independence-filter-on-current-tab-does-not-affect-past-tab-regression) | Tab independence — filter on Current tab does not affect Past tab @regression |  | regression | high |
| [TC-EMPDET-047](#tc-empdet-047-sorting-state-preserved-after-advanced-filter-apply-regression) | Sorting state preserved after Advanced Filter apply @regression |  | regression | high |
| [TC-EMPDET-048](#tc-empdet-048-archived-employee-absent-from-current-tab-and-search-regression) | Archived employee absent from Current tab and search @regression |  | regression | critical |
| [TC-EMPDET-049](#tc-empdet-049-api-count-regression-ui-total-matches-api-x-total-count-or-total-field-regression) | API count regression — UI total matches API X-Total-Count or total field @regression |  | regression | critical |
| [TC-EMPDET-050](#tc-empdet-050-feature-flag-regression-advanced-filter-fields-visible-when-flag-enabled-regression) | Feature flag regression — advanced filter fields visible when flag enabled @regression |  | regression | high |
| [TC-EMPDET-051](#tc-empdet-051-employee-role-edit-action-icon-not-visible-read-only-enforcement-security) | Employee role — Edit Action icon not visible (read-only enforcement) @security |  | security | critical |
| [TC-EMPDET-052](#tc-empdet-052-employee-role-direct-api-put-returns-403-security) | Employee role — direct API PUT returns 403 @security |  | security | critical |
| [TC-EMPDET-053](#tc-empdet-053-resource-manager-data-scoped-to-own-department-only-security) | Resource Manager — data scoped to own department only @security |  | security | critical |
| [TC-EMPDET-054](#tc-empdet-054-feature-flag-disabled-employee-details-nav-absent-from-dom-and-api-returns-403-security) | Feature flag disabled — Employee Details nav absent from DOM and API returns 403 @security |  | security | critical |
| [TC-EMPDET-055](#tc-empdet-055-idor-employee-role-user-cannot-access-another-employee-s-data-security) | IDOR — Employee-role user cannot access another employee's data @security |  | security | critical |
| [TC-EMPDET-056](#tc-empdet-056-keyboard-navigation-tab-order-is-logical-through-grid-and-controls-a11y) | Keyboard navigation — tab order is logical through grid and controls @a11y |  | a11y | medium |
| [TC-EMPDET-057](#tc-empdet-057-search-input-and-filter-button-have-accessible-labels-a11y) | Search input and filter button have accessible labels @a11y |  | a11y | medium |
| [TC-EMPDET-058](#tc-empdet-058-edit-drawer-is-keyboard-accessible-open-fill-submit-via-keyboard-a11y) | Edit Drawer is keyboard accessible — open, fill, submit via keyboard @a11y |  | a11y | medium |
| [TC-EMPDET-059](#tc-empdet-059-pagination-controls-are-keyboard-navigable-a11y) | Pagination controls are keyboard navigable @a11y |  | a11y | medium |
| [TC-EMPDET-060](#tc-empdet-060-performance-employee-list-loads-within-2-seconds-functional) | Performance — employee list loads within 2 seconds @functional |  | functional | high |
| [TC-EMPDET-061](#tc-empdet-061-performance-search-responds-within-1-second-functional) | Performance — search responds within 1 second @functional |  | functional | high |
| [TC-EMPDET-062](#tc-empdet-062-advanced-filter-combinations-project-skills-returns-intersection-functional) | Advanced Filter combinations — Project + Skills returns intersection @functional |  | functional | high |
| [TC-EMPDET-063](#tc-empdet-063-advanced-filter-availability-log-hours-combination-functional) | Advanced Filter — Availability + Log Hours combination @functional |  | functional | medium |
| [TC-EMPDET-064](#tc-empdet-064-advanced-filter-multiple-ratings-simultaneously-functional) | Advanced Filter — Multiple Ratings simultaneously @functional |  | functional | medium |
| [TC-EMPDET-065](#tc-empdet-065-advanced-filter-preserved-values-selections-persist-until-explicitly-cleared-functional) | Advanced Filter preserved values — selections persist until explicitly cleared @functional |  | functional | medium |
| [TC-EMPDET-066](#tc-empdet-066-allocation-sync-availability-updates-after-project-assignment-change-regression) | Allocation sync — availability % updates after project assignment change @regression |  | regression | high |
| [TC-EMPDET-067](#tc-empdet-067-department-change-sync-employee-moves-between-department-filter-results-regression) | Department change sync — employee moves between department filter results @regression |  | regression | high |
| [TC-EMPDET-068](#tc-empdet-068-single-search-result-grid-renders-correctly-showing-1-of-1-boundary) | Single search result — grid renders correctly showing 1 of 1 @boundary |  | boundary | medium |
| [TC-EMPDET-069](#tc-empdet-069-special-characters-in-search-no-crash-correct-matching-negative) | Special characters in search — no crash, correct matching @negative |  | negative | medium |
| [TC-EMPDET-070](#tc-empdet-070-filtering-after-search-results-satisfy-both-search-term-and-filter-functional) | Filtering after search — results satisfy both search term and filter @functional |  | functional | high |

---

## Unspecified module

70 test cases.

### A11y (4)

#### TC-EMPDET-056 — Keyboard navigation — tab order is logical through grid and controls @a11y

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Priority** | medium |
| **Expected Result** | Tab key moves focus through interactive elements in logical order; no focus traps; all elements reachable by keyboard |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Press Tab repeatedly from page load
3. Verify focus moves logically through: tabs, search, filter button, sort controls, grid rows, pagination

#### TC-EMPDET-057 — Search input and filter button have accessible labels @a11y

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Priority** | medium |
| **Expected Result** | Search input has a non-empty aria-label or associated visible label; Filter button has a non-empty aria-label or visible text; no unlabelled interactive elements |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Inspect the search input for aria-label or associated label element
2. Inspect the Advanced Filter button for aria-label or visible text

#### TC-EMPDET-058 — Edit Drawer is keyboard accessible — open, fill, submit via keyboard @a11y

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Priority** | medium |
| **Expected Result** | Edit Drawer can be fully operated via keyboard; focus is managed correctly when drawer opens and closes; no keyboard traps inside drawer |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Focus the Edit Action icon via Tab
2. Press Enter to open the drawer
3. Tab through fields inside the drawer
4. Modify a field
5. Tab to Save and press Enter
6. Verify drawer closes and grid updates

#### TC-EMPDET-059 — Pagination controls are keyboard navigable @a11y

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Priority** | medium |
| **Expected Result** | Pagination Next and Previous buttons are focusable and activatable via keyboard; navigation works correctly |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 2 pages exist

**Steps**

1. Tab to the pagination Next button
2. Press Enter
3. Verify navigation to page 2
4. Tab to Previous button
5. Press Enter — verify return to page 1

### Boundary (8)

#### TC-EMPDET-034 — Null Reporting Manager renders gracefully — no JS crash @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | medium |
| **Expected Result** | Grid row renders without errors or broken layout; null field shows graceful placeholder (e.g. '-' or blank); sorting by Reporting Manager with null values does not crash |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 1 employee has no Reporting Manager assigned

**Steps**

1. Navigate to Employee > Employee Details
2. Locate an employee with no Reporting Manager
3. Observe the Reporting Manager cell
4. Click the Name column to sort by Reporting Manager
5. Observe sort result

#### TC-EMPDET-035 — Null Skills and null Projects render gracefully @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | medium |
| **Expected Result** | Skills cell renders gracefully without +N control; Projects cell shows placeholder; no JS error; layout not broken |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 1 employee with no skills and 1 with no projects exist

**Steps**

1. Navigate to Employee > Employee Details
2. Locate employees with no Skills and no Projects
3. Observe the Skills and Projects cells

#### TC-EMPDET-036 — Pagination first page — Previous button disabled @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | medium |
| **Expected Result** | Previous button is disabled on the first page; clicking it does not navigate or throw an error |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Observe the Pagination Previous button on page 1

#### TC-EMPDET-037 — Pagination last page — Next button disabled @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | medium |
| **Expected Result** | Next button is disabled on the last page; clicking it does not navigate or throw an error |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 2 pages of employees exist

**Steps**

1. Navigate to Employee > Employee Details
2. Navigate to the last page
3. Observe the Pagination Next button

#### TC-EMPDET-038 — Availability % boundary values — 0 and 100 are accepted @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | medium |
| **Expected Result** | Both 0 and 100 are accepted as valid boundary values; filter applied without validation error; results update |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Open Advanced Filter
2. Enter 0 in Availability % — click Save — verify no error
3. Reopen Advanced Filter
4. Enter 100 — click Save — verify no error

#### TC-EMPDET-039 — Search with maximum length string (255 chars) — no crash @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | low |
| **Expected Result** | No crash or JS error; empty-state message shown (no match); result count = 0 |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Paste a 255-character string into the search input
3. Observe result

#### TC-EMPDET-040 — Large dataset — 500+ employees meets performance targets @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | high |
| **Expected Result** | All performance targets met: list < 2s, search < 1s, filter < 2s, pagination < 2s; no duplicate or missing records; pagination accurate |

**Preconditions**

- `0`: Staging has 500+ active employees

**Steps**

1. Note the time and navigate to Employee > Employee Details
2. Verify load within 2 seconds
3. Perform a search and verify response within 1 second
4. Apply a filter and verify within 2 seconds
5. Navigate page 2 and verify within 2 seconds

#### TC-EMPDET-068 — Single search result — grid renders correctly showing 1 of 1 @boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Priority** | medium |
| **Expected Result** | Exactly 1 row shown; count label shows 1; pagination shows 1 of 1; no error |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: A uniquely named employee exists

**Steps**

1. Navigate to Employee > Employee Details
2. Search for the unique employee's full exact name
3. Observe grid and pagination

### Functional (28)

#### TC-EMPDET-004 — Search by employee name — partial match, case-insensitive @functional

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Priority** | critical |
| **Expected Result** | Results update instantly without page reload; all returned rows contain the partial search term in Name (case-insensitive); result count updates to reflect filtered total |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 3 employees with similar partial names exist

**Steps**

1. Navigate to Employee > Employee Details
2. Type a partial name (e.g. first 3 letters) in the search input using mixed case
3. Observe results update
4. Verify each returned row contains the partial name in the Name column (case-insensitive)

#### TC-EMPDET-005 — Search by employee email — partial match @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Results include employees whose email contains the search term; results update instantly without page reload; count is accurate |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Type a partial email domain (e.g. '@simform') in the search input
3. Observe results

#### TC-EMPDET-006 — Search by project name — returns all assigned employees @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | All employees assigned to the searched project appear; employees not on that project do not appear; result count is accurate |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: A project with exactly 2 known assigned employees exists

**Steps**

1. Navigate to Employee > Employee Details
2. Type the project name in the search input
3. Observe results

#### TC-EMPDET-007 — Sort by Name ASC then DESC preserves search and filters @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | First click produces ASC alphabetical order; second click toggles to DESC; active search term and filter are preserved after each sort toggle; sort completes within 2 seconds |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Apply a Department filter
3. Enter a search term
4. Click the Name column header once (ASC)
5. Verify sort order
6. Click Name column header again (DESC)
7. Verify sort order

#### TC-EMPDET-008 — Sort by Department, Reporting Manager, Availability, Log Hours @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Each column sorts correctly in both ASC and DESC directions; filter and search state preserved after sort; each sort completes within 2 seconds |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Click Department column header — verify ASC order
3. Click again — verify DESC order
4. Repeat for Reporting Manager, Availability, Log Hours columns

#### TC-EMPDET-009 — Apply Basic Filter — single Department @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Only employees from the selected department appear; result count updates accordingly; API response matches UI filtered results |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 2 departments with employees exist

**Steps**

1. Navigate to Employee > Employee Details
2. Select a department from the Basic Filter panel
3. Observe grid results

#### TC-EMPDET-010 — Apply multiple Basic Filters simultaneously — intersection @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Only employees matching ALL selected criteria appear; result count is accurate; no duplicate or missing records |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Employees with known Department, Skills, and Night Shift values exist

**Steps**

1. Navigate to Employee > Employee Details
2. Select a Department filter
3. Select a Skills filter
4. Select Night Shift = Yes
5. Observe results

#### TC-EMPDET-011 — Reset Basic Filters restores full dataset @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Priority** | high |
| **Expected Result** | All filter selections are cleared; full employee list for the current tab is restored; result count returns to the unfiltered total |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Basic filters are applied

**Steps**

1. Navigate to Employee > Employee Details
2. Apply Department and Skills filters
3. Note the filtered count
4. Click the Reset button
5. Observe results

#### TC-EMPDET-012 — Advanced Filter panel opens within 1 second with all 18 fields @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Panel opens within 1 second; all 18 filter fields present; Save and Cancel buttons visible |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Note the time
3. Click the Advanced Filter button
4. Verify the panel opens within 1 second
5. Verify all 18 filter fields are visible: Department, Designation, Available Since, Log Hours (Last 15 Days), Availability % (Last 15 Days), Projects, Reporting Manager, Experience, Employee, Technology Stack, Night Shift Preference, Leave & Status, Overall Rating, AI Rating, Communication Rating
6. Verify Save and Cancel buttons are present

#### TC-EMPDET-013 — Advanced Filter — Save applies all filters and updates count @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Results reflect all applied filter criteria simultaneously; result count updates; selected filter values persist after Save; API and UI results are consistent |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter panel
3. Select Department = Engineering, Designation = Senior Engineer
4. Click Save
5. Observe results and count

#### TC-EMPDET-014 — Advanced Filter — Cancel discards unsaved changes @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Filter values revert to last-applied state; employee list remains unchanged from before Cancel; no new filter applied |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Apply a filter and Save (note the result count)
3. Open Advanced Filter again
4. Change to a different filter value
5. Click Cancel
6. Observe results

#### TC-EMPDET-015 — Advanced Filter — Department + Designation combination @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Only employees matching both Engineering department AND Backend Engineer designation are shown; no employees from other departments appear; count is accurate |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Employees with known department and designation exist

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Select Department = Engineering
4. Select Designation = Backend Engineer
5. Click Save

#### TC-EMPDET-016 — Search after Advanced Filter — both criteria satisfied simultaneously @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Priority** | high |
| **Expected Result** | Results satisfy both active filter (Engineering) and search term simultaneously; count is accurate for the intersection; neither search nor filter state is cleared by the other |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Apply Advanced Filter: Department = Engineering
3. Click Save
4. Enter a partial name in the search input
5. Observe results

#### TC-EMPDET-017 — Sorting after filtering — sort applies within filtered set @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Priority** | high |
| **Expected Result** | Sort applies within the filtered result set only; filter state is not cleared after sort; sorted order is correct; sort completes within 2 seconds |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Apply a Department filter
3. Click Name column to sort ASC
4. Observe results

#### TC-EMPDET-018 — Pagination preserves filter and search state across pages @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Priority** | high |
| **Expected Result** | Page 2 results still satisfy active filter criteria; search term remains in search field; result count is consistent; no duplicate or missing records between page 1 and page 2 |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Enough employees to produce at least 2 pages with active filter

**Steps**

1. Navigate to Employee > Employee Details
2. Apply a filter and enter a search term
3. Navigate to page 2 using the Next button
4. Observe results, search field, and filter state

#### TC-EMPDET-019 — Edit employee — Cancel discards all changes @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Grid still displays the original pre-edit Designation; API GET returns the original value; drawer is closed after Cancel |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Hover over first row and click Edit Action icon
3. Note the current Designation value
4. Change the Designation to a new value
5. Click Cancel
6. Observe grid row

#### TC-EMPDET-020 — Pagination — next/previous navigation with no duplicates or missing records @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Each page shows the correct set of records; no duplicate records across pages; total record count across all pages equals API total; each navigation completes within 2 seconds |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 2 pages of employees exist

**Steps**

1. Navigate to Employee > Employee Details
2. Note employee IDs on page 1
3. Click Next — note IDs on page 2
4. Verify no overlap between page 1 and page 2 IDs
5. Click Previous — verify page 1 IDs match original

#### TC-EMPDET-021 — Pagination page size change updates records per page @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | medium |
| **Expected Result** | Grid shows exactly the selected number of records (fewer on last page); total count and page count update accordingly; no duplicates or missing records |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: More than 10 employees exist

**Steps**

1. Navigate to Employee > Employee Details
2. Change page size selector to 10
3. Observe the grid
4. Change page size to 50
5. Observe the grid

#### TC-EMPDET-022 — API vs UI data parity — all grid column values match API @functional

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional, @regression |
| **Priority** | critical |
| **Expected Result** | Every grid column value matches the corresponding API field; Last Updated matches API lastUpdated/updatedAt; employee count badge matches API total |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Capture network response from GET /api/employees
3. For the first 5 employees, compare: Name, Designation, Experience, Department, Reporting Manager, Projects, Log Hours, Night Shift, Skills, Availability
4. Also compare the result count badge against the API total field

#### TC-EMPDET-023 — Last Updated field sourced from API — not computed on frontend @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Priority** | critical |
| **Expected Result** | Last Updated displayed in UI exactly matches the API updatedAt/lastUpdated timestamp; value is not computed on the frontend; value does not update when no change is saved |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Capture API response and note the lastUpdated/updatedAt field for an employee
3. Edit that employee and Save
4. Capture API response again
5. Compare the Last Updated value in UI with the API updatedAt value

#### TC-EMPDET-024 — Skills +N expansion shows all skills matching API @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | medium |
| **Expected Result** | N equals the number of skills not initially visible; clicking +N expands to show all skills; expanded list matches API skills array |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 1 employee has 6+ skills

**Steps**

1. Navigate to Employee > Employee Details
2. Find an employee with +N shown in Skills column
3. Note the N value
4. Click the +N control to expand
5. Compare expanded list against API skills array for that employee

#### TC-EMPDET-060 — Performance — employee list loads within 2 seconds @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Employee grid fully visible within 2 seconds of navigation |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Note the time
2. Navigate to Employee > Employee Details
3. Observe when the grid is fully loaded

#### TC-EMPDET-061 — Performance — search responds within 1 second @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Search results update within 1 second of typing |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Note the time
3. Type a single character in the search input
4. Observe when results update

#### TC-EMPDET-062 — Advanced Filter combinations — Project + Skills returns intersection @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Only employees assigned to Project Alpha AND having React skill are shown; count is accurate; no missing or extra records |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Employees with known project and skill assignments exist

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Select Project = 'Project Alpha'
4. Select Technology Stack / Skills = 'React'
5. Click Save

#### TC-EMPDET-063 — Advanced Filter — Availability + Log Hours combination @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | medium |
| **Expected Result** | Only employees matching both availability and log hours ranges shown; no duplicates; count accurate |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Set Availability % = 50-100
4. Set Log Hours Last 15 Days = 0-40
5. Click Save

#### TC-EMPDET-064 — Advanced Filter — Multiple Ratings simultaneously @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | medium |
| **Expected Result** | Only employees meeting both rating criteria shown; count accurate; no duplicates |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Employees with known rating values exist

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Set Overall Rating >= 3
4. Set Communication Rating >= 3
5. Click Save

#### TC-EMPDET-065 — Advanced Filter preserved values — selections persist until explicitly cleared @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | medium |
| **Expected Result** | Previously selected filter value (Department = Engineering) is still selected in the Advanced Filter panel |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter, select Department = Engineering, click Save
3. Navigate away and return to Employee Details
4. Open Advanced Filter again

#### TC-EMPDET-070 — Filtering after search — results satisfy both search term and filter @functional

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Priority** | high |
| **Expected Result** | Results satisfy both active search term and department filter simultaneously; search term not cleared when filter is applied; count is accurate |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Enter a partial name in the search input
3. Now apply a Department filter from the Basic Filter panel
4. Observe results

### Negative (10)

#### TC-EMPDET-025 — Search with no matching results shows empty state and zero count @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Priority** | medium |
| **Expected Result** | Grid shows zero rows; empty-state message is displayed; result count shows 0; no error or broken UI state |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Type 'XYZNOTEXIST_99999' in the search input
3. Observe grid and result count

#### TC-EMPDET-026 — Advanced filter combination returns no results — empty state @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | medium |
| **Expected Result** | Grid shows zero rows; empty-state message is displayed; count shows 0; UI remains stable with no JS error |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Select Department = Finance AND Designation = Backend Engineer (combination unlikely to match)
4. Click Save

#### TC-EMPDET-027 — Advanced Filter — Availability % = 101 is rejected with validation error @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | high |
| **Expected Result** | Validation error shown: 'Availability percentage must be between 0 and 100'; filter is not applied; grid unchanged |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Enter 101 in the Availability % field
4. Click Save

#### TC-EMPDET-028 — Advanced Filter — Experience = -1 is rejected with validation error @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | high |
| **Expected Result** | Validation error shown: 'Experience must be a non-negative number'; filter not applied; grid unchanged |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Enter -1 in the Experience field
4. Click Save

#### TC-EMPDET-029 — Advanced Filter — Available Since end date before start date rejected @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | high |
| **Expected Result** | Validation error shown: 'End date must be on or after start date'; filter not applied; grid unchanged |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Set Available Since start date to 2025-06-15 and end date to 2025-06-01
4. Click Save

#### TC-EMPDET-030 — API failure (500) shows user-friendly error — no crash @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | high |
| **Expected Result** | UI displays a user-friendly error or retry message; no unhandled JS errors in console; page remains navigable; no stale data shown |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Ability to intercept network requests (route mock)

**Steps**

1. Intercept GET /api/employees and return HTTP 500
2. Navigate to Employee > Employee Details
3. Observe the page state

#### TC-EMPDET-031 — XSS injection in search field — safely escaped @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Priority** | high |
| **Expected Result** | No alert dialog or script execution occurs; input is rendered as escaped literal text; no unhandled JS error or broken UI state |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Enter '<script>alert(1)</script>' in the search input
3. Observe the page

#### TC-EMPDET-032 — Edit Drawer Save attempted with required field cleared — inline validation @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | high |
| **Expected Result** | Inline validation error shown for the empty required field; form is not submitted; employee record unchanged |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Edit Drawer for any employee
3. Clear a mandatory field (e.g. Name or Department)
4. Click Save

#### TC-EMPDET-033 — Double-click Save in Edit Drawer — no duplicate update @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Priority** | high |
| **Expected Result** | Only one update is applied; no duplicate employee entry; API returns a single record with the intended updated values; no error shown |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Open Edit Drawer for an employee
3. Modify a field
4. Click Save twice in rapid succession
5. Observe grid and API response

#### TC-EMPDET-069 — Special characters in search — no crash, correct matching @negative

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Priority** | medium |
| **Expected Result** | No crash or JS error for any special character input; results show 0 matches gracefully; no script execution |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Enter each of the following in sequence: "<script>", '"test"', '\\', '%20', '&&'
3. Observe the page after each entry

### Regression (12)

#### TC-EMPDET-041 — Employee count mismatch — grid rows, result badge, and API total all match @regression

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @regression |
| **Priority** | critical |
| **Expected Result** | Result badge count, total paginated rows, and API count all match exactly; discrepancy is a defect |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Capture the result count badge value
3. Count the total rows across all pages
4. Call GET /api/employees/count and note API total

#### TC-EMPDET-042 — Edit button visibility — present for all rows for Admin role @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | Edit Action icon appears consistently on hover for all rows; no rows missing the edit icon; icon remains after CRUD operations without page reload |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Hover over each visible employee row
3. Verify Edit Action icon appears on each row

#### TC-EMPDET-043 — Edited employee remains in list — not lost after save @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | Edited employee still appears in the grid after save; their ID is present; updated Designation shown correctly; no disappearance without page reload |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Note the ID of the first employee
3. Open Edit Drawer, modify Designation, Save
4. Scroll through the grid or search for the employee

#### TC-EMPDET-044 — Filter reset regression — all chips cleared and full list restored @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | All filter chips are cleared; full employee list restored; result count returns to unfiltered total; no partial filter state remains |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Apply Department and Skills filters
3. Verify filter chips are visible
4. Click Reset
5. Observe chips, grid, and count

#### TC-EMPDET-045 — Duplicate rows regression — no duplicate IDs after pagination @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | critical |
| **Expected Result** | No duplicate IDs within or across pages; every employee appears exactly once |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 2 pages exist

**Steps**

1. Navigate to Employee > Employee Details
2. Collect all employee IDs on page 1
3. Navigate to page 2 — collect IDs
4. Check for overlap between page 1 and page 2 IDs

#### TC-EMPDET-046 — Tab independence — filter on Current tab does not affect Past tab @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Priority** | high |
| **Expected Result** | Past Employee tab shows unfiltered results; no filter chips from Current tab carry over; switching back to Current tab preserves its previously applied filters |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Apply a Department filter on Current Employee tab
3. Switch to Past Employee tab
4. Observe filter state and results

#### TC-EMPDET-047 — Sorting state preserved after Advanced Filter apply @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | Sort indicator still active after filter apply; results remain sorted ASC by Name within the filtered set |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Sort by Name ASC — verify sort indicator visible
3. Open Advanced Filter, select a Department, click Save
4. Observe sort indicator and order

#### TC-EMPDET-048 — Archived employee absent from Current tab and search @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | critical |
| **Expected Result** | Archived employee does not appear in Current Employee tab or its search results; no archived badge visible in Current tab results |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 1 archived employee exists

**Steps**

1. Navigate to Employee > Employee Details — Past Employee tab
2. Note the name of an archived employee
3. Switch to Current Employee tab
4. Search for the archived employee's name

#### TC-EMPDET-049 — API count regression — UI total matches API X-Total-Count or total field @regression

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @regression |
| **Priority** | critical |
| **Expected Result** | UI total matches API total exactly; mismatch is a defect |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Navigate to Employee > Employee Details
2. Capture API response headers or body for the employee list endpoint
3. Note the total from X-Total-Count header or body.total field
4. Compare with the UI result count badge and pagination total

#### TC-EMPDET-050 — Feature flag regression — advanced filter fields visible when flag enabled @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | All expected non-flagged filter fields present in the DOM; no missing fields when feature flag is enabled |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: Employee Details feature flag is enabled

**Steps**

1. Navigate to Employee > Employee Details
2. Open Advanced Filter
3. Verify core fields are present: Department, Designation, Projects, Reporting Manager

#### TC-EMPDET-066 — Allocation sync — availability % updates after project assignment change @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | Availability % in Employee Details reflects the updated allocation immediately; Projects column also updated; no page reload required |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: An employee with a known availability % exists

**Steps**

1. Note the current Availability % for an employee in Employee Details
2. Allocate/deallocate that employee from a project via the Allocation module
3. Return to Employee Details
4. Observe the Availability % for that employee

#### TC-EMPDET-067 — Department change sync — employee moves between department filter results @regression

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Priority** | high |
| **Expected Result** | Employee no longer appears in old department filter; appears in new department filter; no duplicate or orphan entries |

**Preconditions**

- `0`: User is logged in as Admin

**Steps**

1. Change an employee's department from Engineering to Finance via Employee Profile
2. Navigate to Employee Details
3. Apply Department = Engineering filter — verify employee not present
4. Apply Department = Finance filter — verify employee present

### Security (5)

#### TC-EMPDET-051 — Employee role — Edit Action icon not visible (read-only enforcement) @security

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Priority** | critical |
| **Expected Result** | Edit Action icon is not visible or not clickable for Employee role; no edit-related UI elements accessible |

**Preconditions**

- `0`: Logged in as Employee-role user

**Steps**

1. Navigate to Employee > Employee Details
2. Hover over employee rows
3. Check for Edit Action icon

#### TC-EMPDET-052 — Employee role — direct API PUT returns 403 @security

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Priority** | critical |
| **Expected Result** | API returns 403 Forbidden; no changes applied to the employee record |

**Preconditions**

- `0`: Logged in as Employee-role user with an active session token

**Steps**

1. Using the Employee session, call PUT /api/employees/:id with modified data
2. Observe API response

#### TC-EMPDET-053 — Resource Manager — data scoped to own department only @security

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Priority** | critical |
| **Expected Result** | All visible employees belong to RM's department; clearing/resetting filters does not reveal employees from other departments; result count matches RM's department headcount |

**Preconditions**

- `0`: Logged in as Resource Manager scoped to Engineering department

**Steps**

1. Navigate to Employee > Employee Details
2. Observe the employee list
3. Reset all filters
4. Observe again

#### TC-EMPDET-054 — Feature flag disabled — Employee Details nav absent from DOM and API returns 403 @security

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Priority** | critical |
| **Expected Result** | Navigation link is absent from the DOM (not hidden via CSS); direct route returns 403 or redirect; API returns 403, not 200 with empty data |

**Preconditions**

- `0`: Employee Details feature flag is disabled
- `1`: Logged in as Admin

**Steps**

1. Navigate to the application
2. Check DOM for Employee Details navigation link
3. Attempt to navigate directly to /employee/employee-details
4. Call GET /api/employees directly

#### TC-EMPDET-055 — IDOR — Employee-role user cannot access another employee's data @security

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Priority** | critical |
| **Expected Result** | API returns 403 Forbidden or only the permitted subset of fields; no sensitive data from Employee B exposed |

**Preconditions**

- `0`: Two Employee-role accounts exist with different IDs

**Steps**

1. Log in as Employee A
2. Call GET /api/employees/:id where :id belongs to Employee B
3. Observe API response

### Smoke (3)

#### TC-EMPDET-001 — Current Employee tab loads with active employees matching API @smoke

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Priority** | critical |
| **Expected Result** | Current Employee tab is active by default; grid shows active employees only; all column values match API response; result count matches API total; page loads within 2 seconds |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 25 active employees exist

**Steps**

1. Navigate to Employee > Employee Details
2. Observe the active tab and grid content
3. Capture API response from GET /api/employees?tab=current
4. Compare grid values with API response for Name, Designation, Department, Reporting Manager, Projects, Log Hours, Skills, Night Shift

#### TC-EMPDET-002 — Past Employee tab loads with archived employees only @smoke

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Priority** | critical |
| **Expected Result** | Only archived/deallocated employees are shown; no active employees appear; result count matches API total for archived employees; load time under 2 seconds |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 3 archived employees exist

**Steps**

1. Navigate to Employee > Employee Details
2. Click the 'Past Employee' tab
3. Observe grid content
4. Capture API response from GET /api/employees?tab=past
5. Compare grid values with API response

#### TC-EMPDET-003 — Edit employee via drawer — save persists to grid and API @smoke

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Priority** | critical |
| **Expected Result** | Edit Drawer opens pre-populated; after Save, updated Designation appears in grid without page reload; API GET returns the updated value; edit icon remains visible on the row |

**Preconditions**

- `0`: User is logged in as Admin
- `1`: At least 1 active employee exists

**Steps**

1. Navigate to Employee > Employee Details
2. Hover over the first employee row and click the Edit Action icon
3. Verify Edit Drawer opens with existing values pre-populated
4. Modify the Designation field
5. Click Save
6. Observe the grid row
7. Call GET /api/employees/:id to verify persisted value
