# Employee Details — Test Cases

**Total test cases:** 24  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-08-20-EMPDET-cohort-origin.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 12 | 50.0% |
| regression | 4 | 16.7% |
| boundary | 3 | 12.5% |
| integration | 3 | 12.5% |
| negative | 1 | 4.2% |
| smoke | 1 | 4.2% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 11 | 45.8% |
| medium | 10 | 41.7% |
| low | 2 | 8.3% |
| critical | 1 | 4.2% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 19 | 79.2% |
| minor | 4 | 16.7% |
| critical | 1 | 4.2% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 21 | 87.5% |
| regression-derived | 3 | 12.5% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 23 | 95.8% |
| unverified-fallback | 1 | 4.2% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 24 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 16 | 66.7% |
| @regression | 9 | 37.5% |
| @boundary | 3 | 12.5% |
| @needs-verification | 3 | 12.5% |
| @negative | 1 | 4.2% |
| @security | 1 | 4.2% |
| @smoke | 1 | 4.2% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-376](#tc-empdet-376-employee-origin-filter-narrows-grid-happy-path-campus-hire) | Employee Origin filter narrows grid — happy path (Campus Hire) | Employee Details | smoke | critical |
| [TC-EMPDET-377](#tc-empdet-377-cohort-accordion-option-list-matches-source-table-values-exactly) | Cohort accordion option list matches source-table values exactly | Employee Details | functional | high |
| [TC-EMPDET-378](#tc-empdet-378-employee-origin-accordion-exposes-exactly-two-values-lateral-hire-campus-hire) | Employee Origin accordion exposes exactly two values: Lateral Hire, Campus Hire | Employee Details | functional | high |
| [TC-EMPDET-379](#tc-empdet-379-cohort-filter-narrows-grid-to-the-exact-selected-value) | Cohort filter narrows grid to the exact selected value | Employee Details | functional | high |
| [TC-EMPDET-380](#tc-empdet-380-cohort-employee-origin-combined-filter-logically-consistent-pair-matches-cohort-only-result-set) | Cohort + Employee Origin combined filter (logically consistent pair) matches Cohort-only result set | Employee Details | functional | high |
| [TC-EMPDET-381](#tc-empdet-381-employee-origin-filter-combined-with-existing-departments-filter-and-intersection) | Employee Origin filter combined with existing Departments filter — AND intersection | Employee Details | functional | medium |
| [TC-EMPDET-382](#tc-empdet-382-table-options-toggle-cohort-and-employee-origin-columns-visible) | Table options — toggle Cohort and Employee Origin columns visible | Employee Details | functional | high |
| [TC-EMPDET-383](#tc-empdet-383-cohort-and-employee-origin-columns-default-to-hidden-on-first-load) | Cohort and Employee Origin columns default to hidden on first load | Employee Details | functional | medium |
| [TC-EMPDET-384](#tc-empdet-384-grid-cohort-employee-origin-cell-values-match-the-applied-filter-value) | Grid Cohort/Employee Origin cell values match the applied filter value | Employee Details | functional | high |
| [TC-EMPDET-385](#tc-empdet-385-cancel-on-advanced-filter-discards-unsaved-cohort-employee-origin-selection) | Cancel on Advanced Filter discards unsaved Cohort/Employee Origin selection | Employee Details | functional | medium |
| [TC-EMPDET-386](#tc-empdet-386-clear-all-removes-cohort-and-employee-origin-filter-chips-and-restores-unfiltered-list) | Clear all removes Cohort and Employee Origin filter chips and restores unfiltered list | Employee Details | functional | medium |
| [TC-EMPDET-387](#tc-empdet-387-employee-profile-view-displays-cohort-and-employee-origin-personal-information-section-open-product-gap-question) | Employee Profile view displays Cohort and Employee Origin (Personal Information section) — open product-gap question | Employee Details | functional | high |
| [TC-EMPDET-388](#tc-empdet-388-employee-origin-cohort-logical-consistency-holds-across-sampled-employees) | Employee Origin / Cohort logical consistency holds across sampled employees | Employee Details | integration | medium |
| [TC-EMPDET-389](#tc-empdet-389-filter-profile-cross-check-grid-filter-value-matches-profile-view-value-for-the-same-employee) | Filter → Profile cross-check: grid filter value matches Profile view value for the same employee | Employee Details | integration | medium |
| [TC-EMPDET-390](#tc-empdet-390-search-filters-textbox-surfaces-the-cohort-and-employee-origin-accordion-sections) | 'Search filters' textbox surfaces the Cohort and Employee Origin accordion sections | Employee Details | functional | low |
| [TC-EMPDET-391](#tc-empdet-391-null-cohort-employee-origin-renders-an-explicit-empty-state-dash-never-blank-or-undefined) | Null Cohort/Employee Origin renders an explicit empty-state dash, never blank or 'undefined' | Employee Details | boundary | medium |
| [TC-EMPDET-392](#tc-empdet-392-contradictory-cohort-employee-origin-combination-yields-zero-results-via-the-normal-empty-state) | Contradictory Cohort + Employee Origin combination yields zero results via the normal empty-state | Employee Details | boundary | medium |
| [TC-EMPDET-393](#tc-empdet-393-employee-profile-renders-gracefully-for-an-employee-with-null-cohort-employee-origin) | Employee Profile renders gracefully for an employee with null Cohort/Employee Origin | Employee Details | boundary | low |
| [TC-EMPDET-394](#tc-empdet-394-xss-payload-in-search-filters-textbox-is-escaped-not-executed) | XSS payload in 'Search filters' textbox is escaped, not executed | Employee Details | negative | medium |
| [TC-EMPDET-395](#tc-empdet-395-existing-departments-filter-behaviour-is-unaffected-by-the-new-cohort-employee-origin-sections) | Existing Departments filter behaviour is unaffected by the new Cohort/Employee Origin sections | Employee Details | regression | high |
| [TC-EMPDET-396](#tc-empdet-396-reset-clear-all-clears-legacy-filters-together-with-new-cohort-employee-origin-sections) | Reset/Clear-all clears legacy filters together with new Cohort/Employee Origin sections | Employee Details | regression | medium |
| [TC-EMPDET-397](#tc-empdet-397-known-bug-regression-employee-profile-view-personal-information-locators-are-generic-unconfirmed-cohort-employee-origin-presence-there-has-never-been-grounded) | Known bug regression — Employee Profile view (Personal Information) locators are generic/unconfirmed; Cohort/Employee Origin presence there has never been grounded | Employee Details | regression | high |
| [TC-EMPDET-398](#tc-empdet-398-cohort-employee-origin-ui-values-exactly-match-the-zoho-analytics-source-table-data-via-the-api-no-relabeling) | Cohort/Employee Origin UI values exactly match the Zoho Analytics source-table data via the API — no relabeling | Employee Details | integration | high |
| [TC-EMPDET-399](#tc-empdet-399-pagination-counter-remains-correct-when-a-cohort-employee-origin-filter-is-combined-with-pagination) | Pagination counter remains correct when a Cohort/Employee Origin filter is combined with pagination | Employee Details | regression | high |

---

## Employee Details

24 test cases.

### Boundary (3)

#### TC-EMPDET-391 — Null Cohort/Employee Origin renders an explicit empty-state dash, never blank or 'undefined'

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Null Cohort/Employee Origin — column cell shows an explicit dash, not blank |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). At least one employee has a null/blank Cohort or Employee Origin value. Cohort/Employee Origin columns toggled visible.

**Steps**

1. Toggle Cohort and Employee Origin columns visible
2. Locate the employee row with a null Cohort or null Employee Origin value
3. Inspect that row's Cohort/Employee Origin cell text

**Expected**

The cell shows an explicit empty-state character (e.g. '—'), never a blank cell, 'undefined', or 'null'.

**Test Data**

- `expectedEmptyState`: —

**Automation Hint**

Assert cell.textContent() is exactly '—' (or the app's confirmed empty-state glyph) — not empty string, not /undefined|null/i.

#### TC-EMPDET-392 — Contradictory Cohort + Employee Origin combination yields zero results via the normal empty-state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Contradictory Cohort + Employee Origin combination — zero results, no error |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Open Advanced Filter, select Cohort = 'Trainee Hire - 2023' AND Employee Origin = 'Lateral Hire' (a logically contradictory pair)
2. Click 'Save'
3. Observe the grid

**Expected**

The grid shows zero rows and the standard empty-state message; the result-count badge reads 0. No JS error, crash, or raw error message is shown.

**Test Data**

- `cohortFilterValue`: Trainee Hire - 2023
- `originFilterValue`: Lateral Hire

**Automation Hint**

Assert the grid's empty-state locator (shared with other zero-result scenarios) is visible and result-count = 0; assert no console error / unhandled exception was raised.

#### TC-EMPDET-393 — Employee Profile renders gracefully for an employee with null Cohort/Employee Origin

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | edgeCase: Employee Profile view for an employee with null Cohort/Employee Origin — renders without a crash or 'undefined'/'null' leak |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Target employee has a null Cohort or null Employee Origin value.

**Steps**

1. Open the Employee Profile view for an employee known to have a null Cohort or Employee Origin value
2. Inspect the Personal Information section

**Expected**

The Personal Information section renders without a JS crash; if Cohort/Employee Origin fields are present at all (open question — see TC-EMPDET-387), a null value shows an explicit empty-state, never a literal 'undefined'/'null' text leak.

**Automation Hint**

openEmployeeProfileFromDrawer(drawer); use the existing getProfileUndefinedLeak(view) helper to assert no undefined/null leak text is present anywhere in the Personal Information section, and that the view rendered (no uncaught page error).

### Functional (12)

#### TC-EMPDET-377 — Cohort accordion option list matches source-table values exactly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Advanced Filter panel exposes a 'Cohort' accordion section whose selectable values exactly match the source table |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). At least two distinct Cohort year values exist (e.g. a 2023 batch and a 2024/2025 batch) for both Trainee and Experienced hire types.

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture) and navigate to Employee → Employee Details
2. Open the Advanced Filter panel and expand the 'Cohort' accordion section
3. Enumerate every selectable option's visible text inside the expanded section

**Expected**

Every listed Cohort option matches the pattern '<Trainee|Experienced> Hire - <year>' with a well-formed 4-digit year; no relabeled, truncated, or unexpected value is present; the option set is a subset of the Zoho Analytics source-table's distinct Cohort values.

**Test Data**

- `expectedCohortPattern`: ^(Trainee|Experienced) Hire - \d{4}$
- `sampleValues`: Trainee Hire - 2023, Trainee Hire - 2025, Experienced Hire - 2023, Experienced Hire - 2024

**Automation Hint**

expandAdvancedFilterSection('Cohort'); enumerate option labels via the panel's checkbox/option locators and assert each against /^(Trainee|Experienced) Hire - \d{4}$/. Cross-reference the full set against the source-table export if available.

#### TC-EMPDET-378 — Employee Origin accordion exposes exactly two values: Lateral Hire, Campus Hire

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Advanced Filter panel exposes an 'Employee Origin' accordion section with exactly two selectable values |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture) and navigate to Employee → Employee Details
2. Open the Advanced Filter panel and expand the 'Employee Origin' accordion section
3. Enumerate every selectable option's visible text

**Expected**

Exactly two options are present, with visible text 'Lateral Hire' and 'Campus Hire' — no third value, no relabeling.

**Test Data**

- `expectedOptions`: Lateral Hire, Campus Hire
- `expectedCount`: 2

**Automation Hint**

expandAdvancedFilterSection('Employee Origin'); assert option count === 2 and option text set equals ['Lateral Hire', 'Campus Hire'].

#### TC-EMPDET-379 — Cohort filter narrows grid to the exact selected value

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Selecting a Cohort value and clicking Save narrows the grid to only employees whose Cohort equals that value |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). At least one employee has Cohort = 'Trainee Hire - 2023'.

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture) and navigate to Employee → Employee Details
2. Open the Advanced Filter panel, expand 'Cohort', select 'Trainee Hire - 2023'
3. Click 'Save'
4. Toggle the Cohort column visible (Table options) and inspect every visible row's Cohort cell

**Expected**

Every row shown has Cohort exactly equal to 'Trainee Hire - 2023'; the result-count badge equals the grid row count and the API total for the same filter.

**Test Data**

- `cohortFilterValue`: Trainee Hire - 2023

**Automation Hint**

expandAdvancedFilterSection('Cohort') → check 'Trainee Hire - 2023' → clickAdvancedFilterSave(); toggleColumnVisibility('Cohort') to assert per-row values via the grid's Cohort cell locator.

#### TC-EMPDET-380 — Cohort + Employee Origin combined filter (logically consistent pair) matches Cohort-only result set

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Cohort and Employee Origin filters can be combined using AND semantics |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). At least one employee has Cohort = 'Trainee Hire - 2023' (implying Employee Origin = 'Campus Hire').

**Steps**

1. Apply Cohort = 'Trainee Hire - 2023' alone; Save; record the result count and row set
2. Reopen Advanced Filter, additionally select Employee Origin = 'Campus Hire' (AND with the existing Cohort selection); Save
3. Compare the new result count and row set to the Cohort-only baseline

**Expected**

Because 'Trainee Hire - 2023' Cohort implies 'Campus Hire' Origin, the combined-filter result set is identical to the Cohort-only result set (same count, same rows) — no employee is dropped or added by adding the redundant-but-consistent Origin criterion.

**Test Data**

- `cohortFilterValue`: Trainee Hire - 2023
- `originFilterValue`: Campus Hire

**Automation Hint**

Capture the Cohort-only row-id set, then apply the combined filter and assert set equality (not just count equality) against the baseline.

#### TC-EMPDET-381 — Employee Origin filter combined with existing Departments filter — AND intersection

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Cohort and Employee Origin filters can be combined with existing filters (e.g. Departments) using AND semantics |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). At least one Department has both Campus Hire and Lateral Hire employees.

**Steps**

1. Open Advanced Filter, expand 'Departments', select 'Frontend'; expand 'Employee Origin', select 'Campus Hire'
2. Click 'Save'
3. Inspect the resulting grid rows

**Expected**

Grid shows only employees who are in the 'Frontend' department AND have Employee Origin = 'Campus Hire' — the AND-intersection of both criteria, not the union; result count matches this intersection.

**Test Data**

- `department`: Frontend
- `originFilterValue`: Campus Hire

**Automation Hint**

expandAdvancedFilterSection('Departments') then expandAdvancedFilterSection('Employee Origin') within the same panel session before a single clickAdvancedFilterSave() call.

#### TC-EMPDET-382 — Table options — toggle Cohort and Employee Origin columns visible

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Cohort and Employee Origin are listed in the Table options Column Visibility dialog and can be toggled on/off and reordered |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Click 'Table options' to open the Column Visibility dialog
2. Toggle the 'Cohort' switch on, then the 'Employee Origin' switch on
3. Close the dialog
4. Observe the grid header

**Expected**

Both 'Cohort' and 'Employee Origin' columns appear in the grid header immediately after closing the dialog, in a reorderable position like any other column.

**Test Data**

- `columns`: Cohort, Employee Origin

**Automation Hint**

Confirmed live pattern (employee-details.page.ts openTableOptions()/getColumnVisibilitySwitch()/toggleColumnVisibility()): await toggleColumnVisibility('Cohort'); await toggleColumnVisibility('Employee Origin'); then assert the grid header contains both column labels.

#### TC-EMPDET-383 — Cohort and Employee Origin columns default to hidden on first load

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Cohort and Employee Origin are listed in the Table options dialog, default OFF |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture), with no prior column-visibility customization for this session/user (fresh storageState or cleared column preference).

**Steps**

1. Navigate to Employee → Employee Details without any prior column customization
2. Open 'Table options'
3. Inspect the state of the 'Cohort' and 'Employee Origin' switches

**Expected**

Both the 'Cohort' switch and the 'Employee Origin' switch are OFF; neither column appears in the grid header by default.

**Automation Hint**

getColumnVisibilitySwitch(dialog, 'Cohort') / (dialog, 'Employee Origin') — assert aria-checked=false / Radix switch data-state='unchecked' on first load.

#### TC-EMPDET-384 — Grid Cohort/Employee Origin cell values match the applied filter value

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: When Cohort/Employee Origin columns are visible, each row's cell shows that employee's exact value |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Cohort and Employee Origin columns toggled visible.

**Steps**

1. Toggle the Cohort and Employee Origin columns visible via Table options
2. Open Advanced Filter, select Cohort = 'Experienced Hire - 2024', Save
3. Read every visible row's Cohort cell text

**Expected**

Every row's Cohort cell shows exactly 'Experienced Hire - 2024' and its Employee Origin cell shows exactly 'Lateral Hire' (consistent with the business rule); no cell is blank, 'undefined', or mismatched.

**Test Data**

- `cohortFilterValue`: Experienced Hire - 2024

**Automation Hint**

After Save, iterate visible grid rows and assert getByRole('cell') text for the Cohort/Employee Origin columns equals the filter value / its implied Origin.

#### TC-EMPDET-385 — Cancel on Advanced Filter discards unsaved Cohort/Employee Origin selection

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Clicking Cancel on the Advanced Filter panel after selecting a Cohort/Employee Origin value discards the unsaved selection |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). No filter currently applied.

**Steps**

1. Open Advanced Filter, expand 'Cohort', select 'Trainee Hire - 2023'
2. Click 'Cancel' (not Save)
3. Reopen the Advanced Filter panel and re-expand 'Cohort'
4. Observe the grid

**Expected**

No Cohort value is checked when the panel is reopened; the grid remains unfiltered (same row/result count as before the selection was made).

**Test Data**

- `cohortFilterValue`: Trainee Hire - 2023

**Automation Hint**

clickAdvancedFilterCancel(); reopen via openAdvancedFilterPanel() and re-expand the section to assert the checkbox is unchecked.

#### TC-EMPDET-386 — Clear all removes Cohort and Employee Origin filter chips and restores unfiltered list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: Clicking 'Clear all' / Reset removes any applied Cohort/Employee Origin selection and restores the unfiltered list |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Apply a Cohort filter and an Employee Origin filter together; Save
2. Confirm both filter chips are present
3. Click 'Clear all'
4. Observe the filter chips and the grid

**Expected**

Both the Cohort chip and the Employee Origin chip are removed; the grid returns to the full unfiltered list with the original total result count.

**Test Data**

- `cohortFilterValue`: Trainee Hire - 2023
- `originFilterValue`: Campus Hire

**Automation Hint**

getFilterChips() before/after clicking resetFiltersBtn ('Clear all'); assert chip count returns to 0 and result count returns to the pre-filter baseline.

#### TC-EMPDET-387 — Employee Profile view displays Cohort and Employee Origin (Personal Information section) — open product-gap question

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | AC: The Employee Profile view displays the employee's Cohort and Employee Origin values, most plausibly inside Personal Information; unclear: exact placement not specified by the requester |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Target employee's grid Cohort/Employee Origin values are known beforehand for cross-check.

**Steps**

1. Open an employee's details drawer from the grid, then click 'View Employee Profile' to open the full Employee Profile view
2. Locate the 'Personal Information' section
3. Look for 'Cohort' and 'Employee Origin' labeled fields within it

**Expected**

The Personal Information section displays 'Cohort' and 'Employee Origin' fields whose values equal the same employee's grid/filter values. If the fields are genuinely absent from the rendered DOM, this must be reported as a confirmed product gap (feature not yet implemented in the Profile view), not treated as a failed automation script.

**Test Data**

- `expectedSection`: Personal Information

**Automation Hint**

MANUAL note — requirement unclear: exact placement of Cohort/Employee Origin within the Profile view is not confirmed (see requirements doc `unclear[]`); Personal Information is the default assumption by analogy to other identity fields, but is not grounded. Use openEmployeeProfileFromDrawer(drawer) → getProfileSection(view, 'Personal Information'); isVisible()-guard the Cohort/Employee Origin field locators (per getEmployeeProfileView()'s own comment: no confirmed testid/route exists yet) and branch: if visible, assert value equality with the grid; if absent, log as a product gap, not a test failure.

#### TC-EMPDET-390 — 'Search filters' textbox surfaces the Cohort and Employee Origin accordion sections

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | validationRules: typing 'Cohort' or 'Employee Origin' into 'Search filters' must surface the matching accordion section button |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Open Advanced Filter panel
2. Type 'Cohort' into the panel's 'Search filters' textbox
3. Observe which accordion section buttons remain visible
4. Clear the textbox and type 'Employee Origin'; repeat the observation

**Expected**

Typing 'Cohort' surfaces the 'Cohort' accordion section button and hides unrelated sections; typing 'Employee Origin' surfaces the 'Employee Origin' section button. Both sections are reachable via this search mechanism.

**Test Data**

- `searchTerms`: Cohort, Employee Origin

**Automation Hint**

Fill the panel's 'Search filters...' textbox (getByPlaceholder('Search filters...')) and assert the filtered set of visible accordion buttons via panel.locator('button[aria-expanded]').

### Integration (3)

#### TC-EMPDET-388 — Employee Origin / Cohort logical consistency holds across sampled employees

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | BusinessRule: Employee Origin must be logically consistent with Cohort (Trainee Hire → Campus Hire; Experienced Hire → Lateral Hire) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Cohort and Employee Origin columns toggled visible; dataset contains both hire types across multiple years.

**Steps**

1. Toggle Cohort and Employee Origin columns visible
2. Sample at least 15 employees spanning both Employee Origin values and multiple Cohort years
3. For each sampled employee, read both the Cohort and Employee Origin cell values

**Expected**

Every sampled employee whose Cohort starts with 'Trainee Hire' has Employee Origin = 'Campus Hire'; every sampled employee whose Cohort starts with 'Experienced Hire' has Employee Origin = 'Lateral Hire'. No exception is found.

**Test Data**

- `sampleSize`: 15

**Automation Hint**

Read the Cohort+Employee Origin cell pair for each of N sampled rows via the grid row locator; assert the pairing rule programmatically rather than visually.

#### TC-EMPDET-389 — Filter → Profile cross-check: grid filter value matches Profile view value for the same employee

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | INT-EMPDET-COHORT-01 — Employee List filter and Employee Profile agree on Cohort/Employee Origin for the same employee \| AC: Filter → Profile cross-check |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Open the Employee screen, open Advanced Filter, select Cohort = 'Trainee Hire - 2023', Save
2. From the filtered grid, open one matching employee's details drawer, then open their full Employee Profile view
3. Read the Cohort and Employee Origin values shown in the Profile's Personal Information section (guarded — see TC-EMPDET-387 open question)

**Expected**

The Profile view's Cohort value equals 'Trainee Hire - 2023' (the value used to filter the grid), and its Employee Origin value is 'Campus Hire', consistent with the Trainee→Campus business rule. If the Profile view does not expose these fields at all, this is reported as the same open product-gap question as TC-EMPDET-387, not a fresh integration defect.

**Test Data**

- `cohortFilterValue`: Trainee Hire - 2023

**Automation Hint**

Multi-step UI flow within a single primaryPage session. Chain expandAdvancedFilterSection('Cohort') → clickAdvancedFilterSave() → open the matched row's drawer → openEmployeeProfileFromDrawer(drawer) → getProfileSection(view, 'Personal Information'); isVisible()-guard before asserting value equality.

#### TC-EMPDET-398 — Cohort/Employee Origin UI values exactly match the Zoho Analytics source-table data via the API — no relabeling

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | BusinessRule (testPattern: api-parity): Cohort and Employee Origin filter option lists and per-row values must exactly match the Zoho Analytics source-table values — no client-side relabeling, truncation, or reformatting |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Direct access to the employee-list API response (or an equivalent authoritative source-table export) for comparison.

**Steps**

1. Capture the full set of Cohort accordion option labels and the full set of Employee Origin accordion option labels from the UI
2. Capture per-row Cohort and Employee Origin cell values for a sample of employees (columns toggled visible)
3. Fetch the corresponding values directly from the employee-list API response for the same employees
4. Compare UI values to API values field-for-field

**Expected**

Every UI-rendered Cohort/Employee Origin value (both the filter option lists and the per-row grid cells) matches the API/source-table value exactly — no client-side relabeling, truncation, casing change, or reformatting of any kind.

**Automation Hint**

Cross-check UI-rendered accordion option lists AND grid column cell values against the underlying employee-list API response field-for-field; fail on any string mismatch, not just semantic mismatch.

### Negative (1)

#### TC-EMPDET-394 — XSS payload in 'Search filters' textbox is escaped, not executed

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenario: XSS payload entered into the Advanced Filter panel's 'Search filters' textbox |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Open the Advanced Filter panel
2. Enter '<script>alert(1)</script>' into the 'Search filters' textbox
3. Observe the panel's behavior
4. Clear the textbox and confirm the Cohort and Employee Origin sections are still reachable

**Expected**

The payload is rendered as escaped literal text (or produces no matching sections, per normal search-miss behavior); no script executes (no alert dialog, no console injection); after clearing, the Cohort and Employee Origin accordion buttons remain reachable exactly as before.

**Test Data**

- `payload`: <script>alert(1)</script>

**Automation Hint**

Assert no page.on('dialog') fires during/after the fill; assert textbox value round-trips as literal text; re-verify expandAdvancedFilterSection('Cohort') still works after the payload is cleared.

### Regression (4)

#### TC-EMPDET-395 — Existing Departments filter behaviour is unaffected by the new Cohort/Employee Origin sections

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | BusinessRule (regression-derived): Applying an existing Employee List filter must produce results/counts unaffected by the addition of Cohort/Employee Origin as new filter dimensions |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Baseline Departments-only filter result count from before this feature shipped is known/reproducible.

**Steps**

1. Open Advanced Filter, expand 'Departments' only, select 'Frontend' (no Cohort/Employee Origin involved)
2. Click 'Save'
3. Compare the result count and row set to the known pre-feature baseline for this same filter

**Expected**

Result count and grid rows for the Departments-only filter are unchanged from pre-feature behaviour — the addition of Cohort/Employee Origin as new filter dimensions has no side effect on unrelated filters.

**Test Data**

- `department`: Frontend

**Automation Hint**

Reuse the existing Departments-filter regression assertion (selectDepartmentColumnFilter or the Advanced Filter 'Departments' accordion) unmodified; this case exists purely to catch a regression, not to test new behaviour.

#### TC-EMPDET-396 — Reset/Clear-all clears legacy filters together with new Cohort/Employee Origin sections

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | regression: Reset/Clear-all still clears legacy filters when Cohort/Employee Origin panel sections are also present |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Apply Departments = 'Frontend' AND Cohort = 'Trainee Hire - 2023' together; Save
2. Confirm both filter chips are present
3. Click 'Reset' / 'Clear all'
4. Reopen Advanced Filter and inspect both the 'Departments' and 'Cohort' sections

**Expected**

ALL criteria are cleared — both the legacy Departments selection and the new Cohort selection — not just the legacy one; the grid returns to the full unfiltered list.

**Test Data**

- `department`: Frontend
- `cohortFilterValue`: Trainee Hire - 2023

**Automation Hint**

getFilterChips() count must be 0 after reset; re-expand both 'Departments' and 'Cohort' sections and assert no option remains checked in either.

#### TC-EMPDET-397 — Known bug regression — Employee Profile view (Personal Information) locators are generic/unconfirmed; Cohort/Employee Origin presence there has never been grounded

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: KB-EMPDET-PROFILE-UNCONFIRMED |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture).

**Steps**

1. Open any employee's full Employee Profile view
2. Attempt to locate Cohort and Employee Origin fields inside the Personal Information section using generic role/text locators (no confirmed testid exists)
3. Record whether the fields are found, and if found, whether their values are correct

**Expected**

Either the fields are found and correct, or their genuine absence is logged as a confirmed product gap for follow-up — the test must not be treated as a false-positive automation failure either way.

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Guard every Employee Profile assertion with isVisible()-checks (see getProfileSection()/getProfileUndefinedLeak() in tests/page-objects/employee/employee-details.page.ts, whose own comments confirm no testid/route exists yet for this view) and treat a genuinely-absent Cohort/Employee Origin field as a confirmed product gap to report, not an automation bug.

#### TC-EMPDET-399 — Pagination counter remains correct when a Cohort/Employee Origin filter is combined with pagination

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: regressionAreas — Pagination counter wrong after search/filter combination (reports/knowledge-base/modules/employee/employee-details.json) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). Chosen Cohort or Employee Origin filter value yields more than one page of results (>100 rows, current page size).

**Steps**

1. Apply Employee Origin = 'Lateral Hire' (chosen because it yields multiple result pages); Save
2. Read the 'Showing X - Y of Z' status line and note Z
3. Navigate to page 2 via pagination controls
4. Read the status line again and note the new X - Y range
5. Navigate back to page 1

**Expected**

The 'of Z' total stays constant across page navigation and equals the result-count badge and API total; the X - Y range advances correctly per page; returning to page 1 shows the original first-page row set with no duplicate or missing rows.

**Test Data**

- `originFilterValue`: Lateral Hire

**Automation Hint**

Use parseResultCountTotal() on the status text before and after pagination to assert the total is stable; assert the visible row set differs between page 1 and page 2 with no overlap/gap.

### Smoke (1)

#### TC-EMPDET-376 — Employee Origin filter narrows grid — happy path (Campus Hire)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths: Open Advanced Filter panel → select Employee Origin = Campus Hire → Save → grid narrows with matching result count |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture). At least one employee with Employee Origin = 'Campus Hire' and at least one with 'Lateral Hire' exist in the dataset.

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture) and navigate to Employee → Employee Details (Current Employee tab)
2. Click the 'Open advanced filter' (Filter) button to open the Advanced Filter panel
3. Expand the 'Employee Origin' accordion section
4. Select the 'Campus Hire' option
5. Click 'Save'
6. Observe the grid rows and the result-count status line

**Expected**

Grid shows only employees whose Employee Origin equals 'Campus Hire'; no row with Employee Origin = 'Lateral Hire' is present; the visible result-count badge, the grid row count, and the underlying API response's total for the same filter all match exactly.

**Test Data**

- `originFilterValue`: Campus Hire

**Automation Hint**

Use primaryPage fixture. openAdvancedFilterPanel() → expandAdvancedFilterSection('Employee Origin') → check the 'Campus Hire' option → clickAdvancedFilterSave(). Read the count via getVisibleResultCountText() + parseResultCountTotal() and cross-check against the employee-list API response total.
