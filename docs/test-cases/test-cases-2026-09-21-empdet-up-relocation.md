# Employee Details — Test Cases

**Total test cases:** 28  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-09-21-EMPDET-up-relocation.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 12 | 42.9% |
| security | 5 | 17.9% |
| regression | 4 | 14.3% |
| boundary | 3 | 10.7% |
| smoke | 3 | 10.7% |
| integration | 1 | 3.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 16 | 57.1% |
| medium | 8 | 28.6% |
| critical | 4 | 14.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 15 | 53.6% |
| critical | 9 | 32.1% |
| minor | 4 | 14.3% |

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
| @functional | 20 | 71.4% |
| @regression | 11 | 39.3% |
| @security | 6 | 21.4% |
| @boundary | 3 | 10.7% |
| @smoke | 3 | 10.7% |
| @negative | 1 | 3.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-400](#tc-empdet-400-standalone-utilization-priority-route-is-no-longer-accessible) | Standalone Utilization Priority route is no longer accessible | Employee Details | smoke | critical |
| [TC-EMPDET-401](#tc-empdet-401-utilization-priority-is-absent-from-the-sidebar-navigation-for-every-role-that-had-it) | Utilization Priority is absent from the sidebar navigation for every role that had it | Employee Details | smoke | critical |
| [TC-EMPDET-402](#tc-empdet-402-employee-table-exposes-up-system-and-up-manual-columns) | Employee table exposes UP (System) and UP (Manual) columns | Employee Details | smoke | critical |
| [TC-EMPDET-403](#tc-empdet-403-up-system-renders-the-computed-tier-as-a-coloured-pill) | UP (System) renders the computed tier as a coloured pill | Employee Details | functional | high |
| [TC-EMPDET-404](#tc-empdet-404-up-system-is-read-only-the-cell-offers-no-editing-control) | UP (System) is read-only — the cell offers no editing control | Employee Details | functional | high |
| [TC-EMPDET-405](#tc-empdet-405-up-manual-dropdown-offers-exactly-the-four-documented-values) | UP (Manual) dropdown offers exactly the four documented values | Employee Details | functional | high |
| [TC-EMPDET-406](#tc-empdet-406-setting-up-manual-persists-across-a-full-page-reload) | Setting UP (Manual) persists across a full page reload | Employee Details | functional | high |
| [TC-EMPDET-407](#tc-empdet-407-setting-up-manual-leaves-up-system-unchanged-for-the-same-employee) | Setting UP (Manual) leaves UP (System) unchanged for the same employee | Employee Details | functional | critical |
| [TC-EMPDET-408](#tc-empdet-408-up-manual-can-be-returned-to-not-set) | UP (Manual) can be returned to "Not set" | Employee Details | boundary | medium |
| [TC-EMPDET-409](#tc-empdet-409-a-confirmation-toast-appears-after-a-up-manual-change) | A confirmation toast appears after a UP (Manual) change | Employee Details | regression | medium |
| [TC-EMPDET-410](#tc-empdet-410-hovering-up-system-shows-the-per-employee-value-score-breakdown) | Hovering UP (System) shows the per-employee Value Score breakdown | Employee Details | functional | high |
| [TC-EMPDET-411](#tc-empdet-411-an-info-icon-is-rendered-beside-the-up-system-value) | An info icon is rendered beside the UP (System) value | Employee Details | functional | medium |
| [TC-EMPDET-412](#tc-empdet-412-the-tooltip-breakdown-is-per-employee-not-a-shared-static-block) | The tooltip breakdown is per-employee, not a shared static block | Employee Details | functional | medium |
| [TC-EMPDET-413](#tc-empdet-413-the-tooltip-s-weighted-components-sum-to-its-stated-final-value-score) | The tooltip’s weighted components sum to its stated Final Value Score | Employee Details | boundary | medium |
| [TC-EMPDET-414](#tc-empdet-414-sorting-by-up-system-reorders-the-list-and-is-reflected-in-the-url) | Sorting by UP (System) reorders the list and is reflected in the URL | Employee Details | functional | high |
| [TC-EMPDET-415](#tc-empdet-415-sorting-by-up-manual-reorders-the-list-independently-of-up-system) | Sorting by UP (Manual) reorders the list independently of UP (System) | Employee Details | functional | medium |
| [TC-EMPDET-416](#tc-empdet-416-default-sort-on-first-load-is-up-system) | Default sort on first load is UP (System) | Employee Details | regression | high |
| [TC-EMPDET-417](#tc-empdet-417-filtering-by-up-system-narrows-the-list-to-the-chosen-tiers) | Filtering by UP (System) narrows the list to the chosen tiers | Employee Details | functional | high |
| [TC-EMPDET-418](#tc-empdet-418-filtering-by-up-manual-offers-not-set-alongside-the-three-tiers) | Filtering by UP (Manual) offers "Not set" alongside the three tiers | Employee Details | functional | high |
| [TC-EMPDET-419](#tc-empdet-419-up-system-and-up-manual-filters-combine-as-an-intersection) | UP (System) and UP (Manual) filters combine as an intersection | Employee Details | boundary | medium |
| [TC-EMPDET-420](#tc-empdet-420-clearing-a-up-filter-restores-the-unfiltered-list) | Clearing a UP filter restores the unfiltered list | Employee Details | regression | medium |
| [TC-EMPDET-421](#tc-empdet-421-tm-can-edit-up-manual) | TM can edit UP (Manual) | Employee Details | security | high |
| [TC-EMPDET-422](#tc-empdet-422-em-can-edit-up-manual) | EM can edit UP (Manual) | Employee Details | security | high |
| [TC-EMPDET-423](#tc-empdet-423-pmo-can-edit-up-manual) | PMO can edit UP (Manual) | Employee Details | security | high |
| [TC-EMPDET-424](#tc-empdet-424-a-non-privileged-role-cannot-change-up-manual-from-the-ui) | A non-privileged role cannot change UP (Manual) from the UI | Employee Details | security | high |
| [TC-EMPDET-425](#tc-empdet-425-a-non-privileged-session-is-rejected-at-the-api-when-setting-up-manual) | A non-privileged session is rejected at the API when setting UP (Manual) | Employee Details | security | high |
| [TC-EMPDET-426](#tc-empdet-426-up-system-shown-in-the-employee-table-matches-the-value-the-api-reports) | UP (System) shown in the Employee table matches the value the API reports | Employee Details | integration | high |
| [TC-EMPDET-427](#tc-empdet-427-existing-employee-table-columns-are-unaffected-by-the-relocation) | Existing Employee table columns are unaffected by the relocation | Employee Details | regression | high |

---

## Employee Details

28 test cases.

### Boundary (3)

#### TC-EMPDET-408 — UP (Manual) can be returned to "Not set"

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @functional |
| **Requirement Ref** | Scope: plus Not set (blank/default) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Set UP (Manual) on a row to P1 · Red
3. Re-open the dropdown and select "Not set"
4. Reload the page

**Expected**

The cell returns to the blank/default state and no tier pill is shown for UP (Manual)

**Test Data**

- `valueToSet`: Not set

#### TC-EMPDET-413 — The tooltip’s weighted components sum to its stated Final Value Score

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | AC: computed values are identical to the retired module (no data/logic regression) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Hover a UP (System) value
3. Parse the three weighted component values and the Final Value Score

**Expected**

The three component results add up to the Final Value Score (within rounding), and the score maps to the tier shown in the pill

**Test Data**

- `weights`: availability: 50%; rating: 30%; seniority: 20%

**Automation Hint**

Parse numbers from the tooltip text; allow a 0.1 tolerance for the displayed rounding.

#### TC-EMPDET-419 — UP (System) and UP (Manual) filters combine as an intersection

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @functional |
| **Requirement Ref** | Scope: filter by UP (System), UP (Manual), or both combined |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Filter UP (System) to one tier
3. Additionally filter UP (Manual) to one value
4. Read the remaining rows

**Expected**

Only rows satisfying both criteria remain — the combined result is a subset of each filter applied alone

**Test Data**

- `system`: P1 · Red
- `manual`: Not set

**Automation Hint**

Record the row count after each filter so the subset relationship can be asserted without depending on absolute counts.

### Functional (12)

#### TC-EMPDET-403 — UP (System) renders the computed tier as a coloured pill

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: UP (System) — displays the computed tier as a coloured pill |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Read the UP (System) cell of the first rows

**Expected**

Each populated UP (System) cell shows exactly one of "P1 · Red", "P2 · Amber" or "P3 · Green", rendered as a pill/badge, not plain text

**Test Data**

- `allowedValues`: P1 · Red, P2 · Amber, P3 · Green

**Automation Hint**

The pill is a span with border-badge-<colour>-* classes; assert on the text plus a non-empty badge class rather than on the colour value itself.

#### TC-EMPDET-404 — UP (System) is read-only — the cell offers no editing control

| Field | Value |
| --- | --- |
| **Tags** | @functional, @security |
| **Requirement Ref** | AC: UP (System) is read-only |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Inspect a UP (System) cell for an editable control
3. Click the UP (System) value

**Expected**

The cell contains no combobox, input or select; clicking the value does not open an editor

**Automation Hint**

Contrast with the UP (Manual) cell in the same row, which does expose role="combobox".

#### TC-EMPDET-405 — UP (Manual) dropdown offers exactly the four documented values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: UP (Manual) — editable dropdown with P1/P2/P3 plus Not set (blank/default) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Open the UP (Manual) dropdown on the first row
3. Read every option

**Expected**

The option list is exactly Not set, P1 · Red, P2 · Amber, P3 · Green — no extra or missing values

**Test Data**

- `expectedOptions`: Not set, P1 · Red, P2 · Amber, P3 · Green

#### TC-EMPDET-406 — Setting UP (Manual) persists across a full page reload

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: UP (Manual) persists independently of UP (System) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Note the first row’s current UP (Manual) value
3. Select a different value in the UP (Manual) dropdown
4. Reload the page (F5)

**Expected**

The UP (Manual) cell shows the newly selected value after the reload

**Test Data**

- `valueToSet`: P3 · Green

**Automation Hint**

Writes real data — capture the original value first and restore it in afterEach.

#### TC-EMPDET-407 — Setting UP (Manual) leaves UP (System) unchanged for the same employee

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Scope: Setting it does not affect UP (System) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Record the first row’s UP (System) value
3. Set a different UP (Manual) value on that row
4. Reload the page

**Expected**

UP (System) reads exactly the same value as before the change; only UP (Manual) differs

**Test Data**

- `valueToSet`: P2 · Amber

**Automation Hint**

Restore the original UP (Manual) value afterwards.

#### TC-EMPDET-410 — Hovering UP (System) shows the per-employee Value Score breakdown

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Info icon beside UP (System) shows the per-employee calculation breakdown on hover |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Hover the UP (System) value on the first row
3. Read the tooltip

**Expected**

A tooltip headed "How Value Score is Calculated" lists Effective Availability, Rating and Seniority with their weightings, and a "Final Value Score = <n> → <tier>" line

**Test Data**

- `expectedLines`: How Value Score is Calculated, Effective Availability, Rating, Seniority, Final Value Score

**Automation Hint**

The pill itself is the tooltip trigger (data-slot="tooltip-trigger"); read the tooltip via [data-slot="tooltip-content"].

#### TC-EMPDET-411 — An info icon is rendered beside the UP (System) value

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: Beside the UP (System) value, show an info icon |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Inspect the UP (System) cell of a populated row for an info icon next to the pill

**Expected**

An info icon is visible beside the UP (System) value and is the hover target for the calculation breakdown

**Automation Hint**

Scope the icon lookup to the UP (System) CELL — the column HEADER has its own icon buttons (sort and filter) that must not be mistaken for this one.

#### TC-EMPDET-412 — The tooltip breakdown is per-employee, not a shared static block

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: Values in the tooltip are per-employee |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Hover UP (System) on row 1 and record the breakdown
3. Hover UP (System) on a row with a different Availability % and record the breakdown

**Expected**

The two tooltips differ — each shows that employee’s own Effective Availability, Rating, Seniority and Final Value Score

**Test Data**

- `rowsCompared`: 2

**Automation Hint**

Pick the two rows by differing Availability % so the comparison is meaningful even as data changes.

#### TC-EMPDET-414 — Sorting by UP (System) reorders the list and is reflected in the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: Both columns support the same sort behaviour as today |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Click the sort control on the UP (System) column header
3. Read the resulting order and the URL

**Expected**

Rows are ordered by tier (P1 → P3 ascending) and the URL carries sortBy=upSystem with the chosen direction

**Test Data**

- `expectedSortKey`: upSystem

#### TC-EMPDET-415 — Sorting by UP (Manual) reorders the list independently of UP (System)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: sort by either |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Click the sort control on the UP (Manual) column header
3. Read the resulting order

**Expected**

Rows are ordered by the manual tier; "Not set" rows group together at one end rather than being dropped from the list

#### TC-EMPDET-417 — Filtering by UP (System) narrows the list to the chosen tiers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: filter by UP (System) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Open the UP (System) column filter
3. Select a single tier and save

**Expected**

Only rows whose UP (System) matches the selected tier remain, and the result count updates accordingly

**Test Data**

- `filterValue`: P1 · Red
- `options`: P1 · Red, P2 · Amber, P3 · Green

**Automation Hint**

The filter is a per-column popover opened from the header button labelled "Filter by UP (System)".

#### TC-EMPDET-418 — Filtering by UP (Manual) offers "Not set" alongside the three tiers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Scope: filter by UP (Manual) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Open the UP (Manual) column filter
3. Read the available options
4. Select "Not set" and save

**Expected**

The filter offers the three tiers plus "Not set"; selecting "Not set" returns only rows with no manual override

**Test Data**

- `options`: P1 · Red, P2 · Amber, P3 · Green, Not set

### Integration (1)

#### TC-EMPDET-426 — UP (System) shown in the Employee table matches the value the API reports

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | AC: computed values are identical to the retired module (no data/logic regression) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Read the UP (System) pill for the first rows
3. Fetch the same employees from the employee/utilization-priority API

**Expected**

Every row’s displayed tier equals the tier the API returns for that employee — the relocation changed placement only, not values

**Automation Hint**

Compare tier labels after normalising "P1 · Red" against the API’s enum form (e.g. P1_RED).

### Regression (4)

#### TC-EMPDET-409 — A confirmation toast appears after a UP (Manual) change

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — success feedback after a write |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Change UP (Manual) on the first row

**Expected**

A success toast confirming the manual priority update is shown

**Test Data**

- `expectedToast`: Manual priority updated.

**Automation Hint**

Toasts render in ol.toaster li — see BasePage.getSuccessToast().

#### TC-EMPDET-416 — Default sort on first load is UP (System)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Scope: Default sort remains UP (System) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Employee with no sort parameters in the URL
2. Read the applied sort

**Expected**

The list is sorted by UP (System) by default

**Test Data**

- `expectedDefaultSort`: upSystem

**Automation Hint**

Assert the applied sort, not just the URL — the app may apply a default without writing it to the query string.

#### TC-EMPDET-420 — Clearing a UP filter restores the unfiltered list

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: filter state |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee and record the unfiltered result count
2. Apply a UP (System) filter
3. Clear the filter

**Expected**

The result count returns to the pre-filter value and no UP filter chip/indicator remains

#### TC-EMPDET-427 — Existing Employee table columns are unaffected by the relocation

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Out of scope: Changes to other Employee table columns |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Read all column headers
3. Spot-check the values in the pre-existing columns for the first rows

**Expected**

The previously existing columns are all still present and populated; adding the two UP columns has not displaced or blanked any of them

**Test Data**

- `columnsChecked`: Availability %, Skills, Projects, Remaining Allocation

### Security (5)

#### TC-EMPDET-421 — TM can edit UP (Manual)

| Field | Value |
| --- | --- |
| **Tags** | @security, @functional |
| **Requirement Ref** | AC: UP (Manual) dropdown is editable only by TM/EM/PMO |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture)

**Steps**

1. Log in as the TM persona
2. Navigate to Employee
3. Open the UP (Manual) dropdown on a row in scope

**Expected**

The dropdown is enabled and a value can be selected and saved

**Automation Hint**

Restore the original value afterwards.

#### TC-EMPDET-422 — EM can edit UP (Manual)

| Field | Value |
| --- | --- |
| **Tags** | @security, @functional |
| **Requirement Ref** | AC: UP (Manual) dropdown is editable only by TM/EM/PMO |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as kunal.jadeja@simformsolutions.com (emPage fixture)

**Steps**

1. Log in as the EM persona
2. Navigate to Employee
3. Open the UP (Manual) dropdown on a row in scope

**Expected**

The dropdown is enabled and a value can be selected and saved

**Automation Hint**

Restore the original value afterwards.

#### TC-EMPDET-423 — PMO can edit UP (Manual)

| Field | Value |
| --- | --- |
| **Tags** | @security, @functional |
| **Requirement Ref** | AC: UP (Manual) dropdown is editable only by TM/EM/PMO |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as bhumi.chauhan@simformsolutions.com (pmoPage fixture)

**Steps**

1. Log in as the PMO persona
2. Navigate to Employee
3. Open the UP (Manual) dropdown on a row

**Expected**

The dropdown is enabled and a value can be selected and saved

**Automation Hint**

Restore the original value afterwards.

#### TC-EMPDET-424 — A non-privileged role cannot change UP (Manual) from the UI

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | AC: read-only for all other roles |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture)

**Steps**

1. Log in as a role outside TM/EM/PMO
2. Navigate to Employee
3. Inspect the UP (Manual) column

**Expected**

No editable UP (Manual) control is reachable for this role — the value is either absent or rendered read-only

**Test Data**

- `role`: PM

**Automation Hint**

The requirement says non-privileged roles see the columns READ-ONLY; the build currently omits both UP columns entirely for PM. Assert "cannot edit" and report the visibility difference separately rather than failing on it.

#### TC-EMPDET-425 — A non-privileged session is rejected at the API when setting UP (Manual)

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | AC: editable only by TM/EM/PMO — enforced server-side, not only in the UI |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture)

**Steps**

1. Log in as a role outside TM/EM/PMO
2. Send a direct PATCH to the manual-priority endpoint for any employee

**Expected**

The API responds 401/403 and the stored UP (Manual) value is unchanged

**Test Data**

- `endpoint`: PATCH /api/v1/utilization-priority/{employeeId}/manual
- `expectedStatus`: 401, 403

**Automation Hint**

Use the API origin (https://simerp-dev-api.simform.solutions) — a bare /api/... path hits the frontend, whose SPA answers 200 for anything.

### Smoke (3)

#### TC-EMPDET-400 — Standalone Utilization Priority route is no longer accessible

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @regression |
| **Requirement Ref** | AC: Standalone Utilization Priority module/menu is no longer accessible |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate directly to /utilization-priority

**Expected**

The route does not render the retired list view — a "404 – Page Not Found" screen is shown instead

**Test Data**

- `route`: /utilization-priority

**Automation Hint**

Assert the 404 heading rather than a redirect; the app renders an in-app not-found page, it does not redirect.

#### TC-EMPDET-401 — Utilization Priority is absent from the sidebar navigation for every role that had it

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @regression |
| **Requirement Ref** | Scope: Remove the Utilization Priority menu/nav entry and its dedicated page |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in and load any authenticated page
2. Read every sidebar nav link label

**Expected**

No nav entry named "Utilization Priority" exists (Projects → Utilization Priority is gone); the remaining links are unchanged

**Test Data**

- `rolesChecked`: Admin, PMO

**Automation Hint**

Run for primaryPage and pmoPage — PMO is the role that previously owned the screen.

#### TC-EMPDET-402 — Employee table exposes UP (System) and UP (Manual) columns

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | AC: Employee table shows UP (System) and UP (Manual) columns |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Read the table column headers

**Expected**

Both "UP (System)" and "UP (Manual)" appear as column headers in the employee table
