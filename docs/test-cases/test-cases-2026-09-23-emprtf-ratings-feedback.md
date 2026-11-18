# Ratings & Feedback — Test Cases

**Total test cases:** 61  
**Modules covered:** Ratings & Feedback  
**Source:** `reports/test-cases/cases-2026-09-23-EMPRTF-ratings-feedback.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 21 | 34.4% |
| security | 9 | 14.8% |
| smoke | 8 | 13.1% |
| a11y | 7 | 11.5% |
| negative | 6 | 9.8% |
| boundary | 5 | 8.2% |
| regression | 5 | 8.2% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 24 | 39.3% |
| medium | 19 | 31.1% |
| critical | 18 | 29.5% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 24 | 39.3% |
| minor | 19 | 31.1% |
| critical | 18 | 29.5% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| live-grounded | 50 | 82.0% |
| code-grounded | 7 | 11.5% |
| frd-unverified | 4 | 6.6% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| live-grounded | 50 | 82.0% |
| code-grounded | 7 | 11.5% |
| frd-unverified | 4 | 6.6% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 57 | 93.4% |
| No | 4 | 6.6% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 21 | 34.4% |
| @security | 9 | 14.8% |
| @smoke | 8 | 13.1% |
| @a11y | 7 | 11.5% |
| @negative | 6 | 9.8% |
| @boundary | 5 | 8.2% |
| @regression | 5 | 8.2% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPRTF-001](#tc-emprtf-001-employee-ratings-opens-from-the-overview-group-in-the-sidebar) | Employee Ratings opens from the Overview group in the sidebar | Ratings & Feedback | smoke | critical |
| [TC-EMPRTF-002](#tc-emprtf-002-the-list-renders-one-row-per-employee-not-one-row-per-de-allocation) | The list renders one row per employee, not one row per de-allocation | Ratings & Feedback | smoke | critical |
| [TC-EMPRTF-003](#tc-emprtf-003-the-list-exposes-all-seven-columns-with-action-first) | The list exposes all seven columns with Action first | Ratings & Feedback | smoke | high |
| [TC-EMPRTF-004](#tc-emprtf-004-the-row-action-opens-the-per-employee-detail-view) | The row action opens the per-employee detail view | Ratings & Feedback | smoke | critical |
| [TC-EMPRTF-005](#tc-emprtf-005-the-detail-view-lists-one-row-per-de-allocation-with-full-attribution) | The detail view lists one row per de-allocation with full attribution | Ratings & Feedback | smoke | critical |
| [TC-EMPRTF-006](#tc-emprtf-006-each-de-allocation-shows-all-four-ratings-the-reallocate-flag-and-its-feedback) | Each de-allocation shows all four ratings, the reallocate flag and its feedback | Ratings & Feedback | smoke | critical |
| [TC-EMPRTF-007](#tc-emprtf-007-the-detail-view-summarises-avg-rating-the-four-dimension-breakdown-and-the-reallocate-split) | The detail view summarises Avg Rating, the four-dimension Breakdown and the reallocate split | Ratings & Feedback | smoke | high |
| [TC-EMPRTF-009](#tc-emprtf-009-the-list-reports-its-total-result-count-and-paginates) | The list reports its total result count and paginates | Ratings & Feedback | smoke | medium |
| [TC-EMPRTF-020](#tc-emprtf-020-search-filters-the-list-by-employee-name) | Search filters the list by employee name | Ratings & Feedback | functional | high |
| [TC-EMPRTF-021](#tc-emprtf-021-the-department-column-filter-restricts-rows-to-the-chosen-departments) | The Department column filter restricts rows to the chosen departments | Ratings & Feedback | functional | high |
| [TC-EMPRTF-022](#tc-emprtf-022-the-department-filter-is-multi-select-and-widens-the-result-set) | The Department filter is multi-select and widens the result set | Ratings & Feedback | functional | medium |
| [TC-EMPRTF-023](#tc-emprtf-023-the-project-filter-restricts-the-list-to-employees-de-allocated-from-that-project) | The Project filter restricts the list to employees de-allocated from that project | Ratings & Feedback | functional | high |
| [TC-EMPRTF-024](#tc-emprtf-024-the-de-allocation-date-range-filter-restricts-the-list-by-date) | The de-allocation date range filter restricts the list by date | Ratings & Feedback | functional | high |
| [TC-EMPRTF-031](#tc-emprtf-031-the-employee-column-sorts-alphabetically) | The Employee column sorts alphabetically | Ratings & Feedback | functional | medium |
| [TC-EMPRTF-032](#tc-emprtf-032-the-de-allocations-column-sorts-numerically) | The De-allocations column sorts numerically | Ratings & Feedback | functional | medium |
| [TC-EMPRTF-033](#tc-emprtf-033-the-avg-rating-column-sorts-numerically) | The Avg Rating column sorts numerically | Ratings & Feedback | functional | medium |
| [TC-EMPRTF-036](#tc-emprtf-036-avg-rating-is-the-mean-of-the-four-rating-dimensions-not-the-mean-of-the-overall-column) | Avg Rating is the mean of the four rating dimensions, not the mean of the Overall column | Ratings & Feedback | functional | critical |
| [TC-EMPRTF-037](#tc-emprtf-037-the-de-allocations-count-equals-the-number-of-detail-rows) | The De-allocations count equals the number of detail rows | Ratings & Feedback | functional | high |
| [TC-EMPRTF-038](#tc-emprtf-038-the-reallocate-split-matches-the-per-de-allocation-flags) | The Reallocate split matches the per-de-allocation flags | Ratings & Feedback | functional | high |
| [TC-EMPRTF-039](#tc-emprtf-039-latest-feedback-is-the-most-recent-de-allocation-date-for-that-employee) | Latest Feedback is the most recent de-allocation date for that employee | Ratings & Feedback | functional | high |
| [TC-EMPRTF-040](#tc-emprtf-040-the-breakdown-figures-are-the-per-dimension-means-across-de-allocations) | The Breakdown figures are the per-dimension means across de-allocations | Ratings & Feedback | functional | high |
| [TC-EMPRTF-041](#tc-emprtf-041-avg-rating-equals-the-mean-of-the-four-breakdown-dimensions) | Avg Rating equals the mean of the four Breakdown dimensions | Ratings & Feedback | functional | high |
| [TC-EMPRTF-043](#tc-emprtf-043-the-breadcrumb-returns-from-the-detail-view-to-the-list) | The breadcrumb returns from the detail view to the list | Ratings & Feedback | functional | medium |
| [TC-EMPRTF-044](#tc-emprtf-044-admin-gets-an-edit-control-on-every-de-allocation-row) | Admin gets an Edit control on every de-allocation row | Ratings & Feedback | functional | high |
| [TC-EMPRTF-045](#tc-emprtf-045-the-edit-feedback-dialog-pre-fills-every-field-from-the-stored-record) | The Edit Feedback dialog pre-fills every field from the stored record | Ratings & Feedback | functional | high |
| [TC-EMPRTF-046](#tc-emprtf-046-saving-an-edit-updates-the-row-and-the-list-aggregates) | Saving an edit updates the row and the list aggregates | Ratings & Feedback | functional | critical |
| [TC-EMPRTF-047](#tc-emprtf-047-cancelling-an-edit-discards-the-changes) | Cancelling an edit discards the changes | Ratings & Feedback | functional | high |
| [TC-EMPRTF-048](#tc-emprtf-048-the-detail-search-filters-by-project-feedback-text-or-person) | The detail search filters by project, feedback text or person | Ratings & Feedback | functional | medium |
| [TC-EMPRTF-060](#tc-emprtf-060-a-plain-employee-cannot-reach-the-employee-ratings-list) | A plain employee cannot reach the Employee Ratings list | Ratings & Feedback | security | critical |
| [TC-EMPRTF-061](#tc-emprtf-061-a-plain-employee-is-not-offered-the-employee-ratings-nav-entry) | A plain employee is not offered the Employee Ratings nav entry | Ratings & Feedback | security | high |
| [TC-EMPRTF-066](#tc-emprtf-066-a-pm-sees-no-more-employees-than-admin-does) | A PM sees no more employees than Admin does | Ratings & Feedback | security | critical |
| [TC-EMPRTF-070](#tc-emprtf-070-a-tm-sees-no-more-employees-than-admin-does) | A TM sees no more employees than Admin does | Ratings & Feedback | security | critical |
| [TC-EMPRTF-072](#tc-emprtf-072-a-non-admin-cannot-edit-a-feedback-record) | A non-admin cannot edit a feedback record | Ratings & Feedback | security | critical |
| [TC-EMPRTF-073](#tc-emprtf-073-the-ratings-api-refuses-an-unprivileged-session) | The ratings API refuses an unprivileged session | Ratings & Feedback | security | critical |
| [TC-EMPRTF-090](#tc-emprtf-090-a-search-matching-nothing-empties-the-table-without-erroring) | A search matching nothing empties the table without erroring | Ratings & Feedback | negative | medium |
| [TC-EMPRTF-093](#tc-emprtf-093-a-rating-below-the-allowed-minimum-is-rejected) | A rating below the allowed minimum is rejected | Ratings & Feedback | negative | high |
| [TC-EMPRTF-094](#tc-emprtf-094-a-rating-above-the-allowed-maximum-is-rejected) | A rating above the allowed maximum is rejected | Ratings & Feedback | negative | high |
| [TC-EMPRTF-095](#tc-emprtf-095-a-non-numeric-rating-is-rejected) | A non-numeric rating is rejected | Ratings & Feedback | negative | medium |
| [TC-EMPRTF-096](#tc-emprtf-096-clearing-a-rating-does-not-silently-store-zero) | Clearing a rating does not silently store zero | Ratings & Feedback | negative | critical |
| [TC-EMPRTF-098](#tc-emprtf-098-feedback-beyond-the-stored-maximum-is-capped-or-rejected) | Feedback beyond the stored maximum is capped or rejected | Ratings & Feedback | negative | medium |
| [TC-EMPRTF-112](#tc-emprtf-112-every-avg-rating-sits-inside-the-1-10-scale) | Every Avg Rating sits inside the 1-10 scale | Ratings & Feedback | boundary | high |
| [TC-EMPRTF-113](#tc-emprtf-113-ratings-render-to-two-decimal-places-not-rounded-to-integers) | Ratings render to two decimal places, not rounded to integers | Ratings & Feedback | boundary | medium |
| [TC-EMPRTF-115](#tc-emprtf-115-an-employee-with-a-single-de-allocation-shows-exactly-one-detail-row) | An employee with a single de-allocation shows exactly one detail row | Ratings & Feedback | boundary | medium |
| [TC-EMPRTF-116](#tc-emprtf-116-for-a-single-de-allocation-avg-rating-is-that-record-s-four-dimension-mean) | For a single de-allocation, Avg Rating is that record's four-dimension mean | Ratings & Feedback | boundary | high |
| [TC-EMPRTF-118](#tc-emprtf-118-every-listed-employee-has-at-least-one-de-allocation) | Every listed employee has at least one de-allocation | Ratings & Feedback | boundary | medium |
| [TC-EMPRTF-130](#tc-emprtf-130-the-list-is-a-properly-structured-data-table) | The list is a properly structured data table | Ratings & Feedback | a11y | medium |
| [TC-EMPRTF-131](#tc-emprtf-131-row-actions-are-individually-identifiable-by-accessible-name) | Row actions are individually identifiable by accessible name | Ratings & Feedback | a11y | high |
| [TC-EMPRTF-132](#tc-emprtf-132-column-sort-and-filter-controls-name-the-column-they-act-on) | Column sort and filter controls name the column they act on | Ratings & Feedback | a11y | medium |
| [TC-EMPRTF-133](#tc-emprtf-133-the-list-is-reachable-and-operable-by-keyboard) | The list is reachable and operable by keyboard | Ratings & Feedback | a11y | high |
| [TC-EMPRTF-134](#tc-emprtf-134-the-edit-feedback-dialog-is-a-labelled-dialog-that-closes-on-escape) | The Edit Feedback dialog is a labelled dialog that closes on Escape | Ratings & Feedback | a11y | high |
| [TC-EMPRTF-135](#tc-emprtf-135-ratings-are-readable-as-text-not-conveyed-by-colour-alone) | Ratings are readable as text, not conveyed by colour alone | Ratings & Feedback | a11y | medium |
| [TC-EMPRTF-136](#tc-emprtf-136-the-list-passes-an-automated-accessibility-scan-with-no-serious-violations) | The list passes an automated accessibility scan with no serious violations | Ratings & Feedback | a11y | medium |
| [TC-EMPRTF-151](#tc-emprtf-151-a-skipped-rating-is-never-counted-as-zero) | A skipped rating is never counted as zero | Ratings & Feedback | regression | critical |
| [TC-EMPRTF-152](#tc-emprtf-152-every-de-allocation-row-carries-a-reason) | Every de-allocation row carries a reason | Ratings & Feedback | regression | medium |
| [TC-EMPRTF-155](#tc-emprtf-155-a-de-allocation-is-never-listed-twice-for-the-same-employee) | A de-allocation is never listed twice for the same employee | Ratings & Feedback | regression | high |
| [TC-EMPRTF-157](#tc-emprtf-157-list-aggregates-stay-consistent-with-the-detail-rows-across-several-employees) | List aggregates stay consistent with the detail rows across several employees | Ratings & Feedback | regression | critical |
| [TC-EMPRTF-158](#tc-emprtf-158-long-feedback-is-reachable-in-full-rather-than-silently-truncated) | Long feedback is reachable in full rather than silently truncated | Ratings & Feedback | regression | medium |
| [TC-EMPRTF-200](#tc-emprtf-200-feedback-skipped-at-de-allocation-is-excluded-from-the-console-rather-than-shown-blank) | Feedback skipped at de-allocation is excluded from the console rather than shown blank | Ratings & Feedback | functional | high |
| [TC-EMPRTF-201](#tc-emprtf-201-a-viewer-never-sees-feedback-in-which-they-are-the-rated-employee) | A viewer never sees feedback in which they are the rated employee | Ratings & Feedback | security | critical |
| [TC-EMPRTF-202](#tc-emprtf-202-an-employee-never-sees-a-ratings-feedback-section-on-their-own-profile) | An employee never sees a Ratings & Feedback section on their own profile | Ratings & Feedback | security | critical |
| [TC-EMPRTF-203](#tc-emprtf-203-a-pm-inherits-visibility-of-feedback-submitted-by-the-previous-pm-after-project-reassignment) | A PM inherits visibility of feedback submitted by the previous PM after project reassignment | Ratings & Feedback | security | critical |

---

## Ratings & Feedback

61 test cases.

### A11y (7)

#### TC-EMPRTF-130 — The list is a properly structured data table

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Inspect the table semantics

**Expected**

Seven column headers are exposed and every data row has a matching cell count

**Automation Hint**

Assert header count is 7 and sampled rows have 7 cells.

#### TC-EMPRTF-131 — Row actions are individually identifiable by accessible name

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Inspect each row's action control

**Expected**

Each action is named "View ratings and feedback for <employee>", so the control is distinguishable out of visual context

**Automation Hint**

Assert the action names are unique across rows.

#### TC-EMPRTF-132 — Column sort and filter controls name the column they act on

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Inspect the header controls

**Expected**

Each filter control is named "Filter by <column>" rather than sharing a generic label

**Automation Hint**

Assert a 'Filter by <column>' button exists for Department, De-allocations, Avg Rating and Reallocate.

#### TC-EMPRTF-133 — The list is reachable and operable by keyboard

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Focus the search box
2. Tab forward until a row action receives focus

**Expected**

A row action is reachable by keyboard within a reasonable number of tab stops and focus is visible throughout

**Automation Hint**

Tab up to 40 times and assert a 'View ratings and feedback for' control gains focus.

#### TC-EMPRTF-134 — The Edit Feedback dialog is a labelled dialog that closes on Escape

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Press Escape

**Expected**

The dialog exposes role=dialog with an "Edit Feedback" heading and closes on Escape

**Automation Hint**

Assert role=dialog and that it is hidden after Escape.

#### TC-EMPRTF-135 — Ratings are readable as text, not conveyed by colour alone

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Inspect the Avg Rating cells

**Expected**

Every rating carries a readable numeric value, so meaning does not depend on colour perception

**Automation Hint**

Assert every Avg Rating cell parses to a number.

#### TC-EMPRTF-136 — The list passes an automated accessibility scan with no serious violations

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Run an axe-core scan

**Expected**

No serious or critical violations are reported

**Automation Hint**

NOT AUTOMATED: @axe-core/playwright is not a dependency of this repo. Install it, then add the scan.

### Boundary (5)

#### TC-EMPRTF-112 — Every Avg Rating sits inside the 1-10 scale

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Read every Avg Rating value

**Expected**

No value falls below 1 or above 10

**Automation Hint**

Assert each parsed rating is within [1, 10].

#### TC-EMPRTF-113 — Ratings render to two decimal places, not rounded to integers

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback — Decimal(4,2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Read the four rating columns

**Expected**

Each value shows two decimals, preserving the Decimal(4,2) precision

**Automation Hint**

Assert each rating cell matches /^\d+\.\d{2}$/.

#### TC-EMPRTF-115 — An employee with a single de-allocation shows exactly one detail row

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Sort by De-allocations ascending
2. Open the lowest-count employee

**Expected**

The detail view shows exactly one row

**Automation Hint**

Assert the detail row count is 1.

#### TC-EMPRTF-116 — For a single de-allocation, Avg Rating is that record's four-dimension mean

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee with exactly one de-allocation
2. Average that row's four ratings

**Expected**

The list's Avg Rating equals the mean of that single record's four ratings

**Automation Hint**

Assert listed average === (core + comm + beh + overall) / 4.

#### TC-EMPRTF-118 — Every listed employee has at least one de-allocation

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Read every De-allocations count

**Expected**

No employee is listed with a zero count — an employee with no feedback should not appear at all

**Automation Hint**

Assert every parsed count is greater than 0.

### Functional (21)

#### TC-EMPRTF-020 — Search filters the list by employee name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Type part of an employee's name into "Search name..."

**Expected**

Only employees whose name contains the term remain, matched case-insensitively

**Automation Hint**

Assert every remaining name contains the lowercase fragment.

#### TC-EMPRTF-021 — The Department column filter restricts rows to the chosen departments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the "Filter by Department" popover
2. Tick a department
3. Click Save

**Expected**

Only employees in that department remain listed

**Automation Hint**

Assert every Department cell equals the chosen value.

#### TC-EMPRTF-022 — The Department filter is multi-select and widens the result set

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Filter by one department and note the result count
2. Add a second department to the filter

**Expected**

Selecting a second department returns at least as many rows as one department alone, and never more than the unfiltered total

**Automation Hint**

Compare the reported result counts across the three states.

#### TC-EMPRTF-023 — The Project filter restricts the list to employees de-allocated from that project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Choose a project in the Project combobox

**Expected**

Only employees with a de-allocation on that project remain, and their aggregates recompute over the filtered records

**Automation Hint**

Assert every detail row for a filtered employee shows the selected project.

#### TC-EMPRTF-024 — The de-allocation date range filter restricts the list by date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Click "Filter by de-allocation date range"
3. Choose a range that excludes some records

**Expected**

Only de-allocations inside the range are counted, and the aggregates recompute accordingly

**Automation Hint**

Assert every detail row's De-allocated On date falls inside the chosen range.

#### TC-EMPRTF-031 — The Employee column sorts alphabetically

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Click Sort ascending on the Employee column

**Expected**

Rows order by employee name A to Z

**Automation Hint**

Assert the name list equals its own locale sort.

#### TC-EMPRTF-032 — The De-allocations column sorts numerically

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Click Sort ascending on the De-allocations column

**Expected**

Rows order by de-allocation count ascending

**Automation Hint**

Assert the count list is non-decreasing.

#### TC-EMPRTF-033 — The Avg Rating column sorts numerically

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Click Sort ascending on the Avg Rating column

**Expected**

Rows order by average rating ascending

**Automation Hint**

Assert the rating list is non-decreasing.

#### TC-EMPRTF-036 — Avg Rating is the mean of the four rating dimensions, not the mean of the Overall column

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Note an employee's Avg Rating on the list
2. Open their detail view
3. Average Core, Comm., Beh. and Overall across every de-allocation row

**Expected**

The list figure equals the mean of ALL FOUR dimensions across all de-allocations — not the average of the Overall column alone. Verified live: Kavya Mehta (8+8+9+9)/4 = 8.50 and Rachna Gupta (1.15+1+1+1)/4 = 1.04 both match their listed Avg Rating.

**Automation Hint**

Compute both candidate means from the detail rows and assert the listed value matches the four-dimension one, and differs from the Overall-only one where those two diverge.

#### TC-EMPRTF-037 — The De-allocations count equals the number of detail rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Note an employee's De-allocations count
2. Open their detail view and count the rows

**Expected**

The two numbers are equal

**Automation Hint**

Assert detail row count === the list cell value.

#### TC-EMPRTF-038 — The Reallocate split matches the per-de-allocation flags

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Note a row's "N Yes · M No" split
2. Open the detail view and tally the Reallocate column

**Expected**

The tallies match and together equal the De-allocations count

**Automation Hint**

Assert yes + no === row count and the Yes tally matches.

#### TC-EMPRTF-039 — Latest Feedback is the most recent de-allocation date for that employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Note a row's Latest Feedback date
2. Open the detail view and read every De-allocated On date

**Expected**

The list date equals the newest date among the detail rows

**Automation Hint**

Assert max(detail dates) equals the listed date.

#### TC-EMPRTF-040 — The Breakdown figures are the per-dimension means across de-allocations

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Average each rating column separately
3. Compare against the Breakdown block

**Expected**

Core Skill, Comm., Behaviour and Overall in the Breakdown each equal the mean of their own column

**Automation Hint**

Assert each breakdown value matches its column mean to two decimals.

#### TC-EMPRTF-041 — Avg Rating equals the mean of the four Breakdown dimensions

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Note an employee's Avg Rating
2. Open the detail view and average the four Breakdown figures

**Expected**

The two agree — Avg Rating is the mean of the Breakdown dimensions

**Automation Hint**

Assert listed average === mean of the four breakdown values, to two decimals.

#### TC-EMPRTF-043 — The breadcrumb returns from the detail view to the list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Click the "Employee Ratings" breadcrumb

**Expected**

The list returns

**Automation Hint**

Assert the list heading is visible and the URL is /employee-ratings.

#### TC-EMPRTF-044 — Admin gets an Edit control on every de-allocation row

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view as Admin

**Expected**

Every row offers an "Edit feedback for <project>" control

**Automation Hint**

Assert the edit-button count equals the row count.

#### TC-EMPRTF-045 — The Edit Feedback dialog pre-fills every field from the stored record

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open a de-allocation row's Edit control

**Expected**

A dialog titled "Edit Feedback" opens with Core Skill, Comm., Behaviour, Overall, Feedback and "Open to work with again" pre-filled from the record

**Automation Hint**

Compare each dialog field against the row's cell values before editing.

#### TC-EMPRTF-046 — Saving an edit updates the row and the list aggregates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Change the Overall rating
3. Save
4. Return to the list

**Expected**

The detail row shows the new value and the employee's Avg Rating recomputes to include it

**Automation Hint**

Compare Avg Rating before and after against the expected four-dimension mean. Restore the original value afterwards.

#### TC-EMPRTF-047 — Cancelling an edit discards the changes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Change a rating
3. Click Cancel

**Expected**

The dialog closes and the row keeps its original values

**Automation Hint**

Assert the cell text is unchanged after cancelling.

#### TC-EMPRTF-048 — The detail search filters by project, feedback text or person

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Type a project name into "Search project, feedback or people..."

**Expected**

Only de-allocations matching that project, feedback text or named person remain

**Automation Hint**

Assert the remaining rows all reference the search term in one of those fields.

#### TC-EMPRTF-200 — Feedback skipped at de-allocation is excluded from the console rather than shown blank

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD v1.1 design-reference prototype (artifact AsLKUWN4Zxyxu6U2GQHMDz) — supplied FRD PDF was blank; NOT yet observed in the built screen |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | frd-unverified |
| **Confidence** | frd-unverified |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Record a de-allocation with the feedback block omitted (PMO full/direct skip, or PM under-20-logged-hours skip)
2. Open /employee-ratings

**Expected**

Per FRD v1.1 the skipped de-allocation is excluded and a banner reports how many were skipped. NOT OBSERVED in the built screen — no skipped-feedback banner is rendered. Confirm with the BA whether this was descoped.

**Automation Hint**

Manual until the banner exists; there is nothing to assert against today.

### Negative (6)

#### TC-EMPRTF-090 — A search matching nothing empties the table without erroring

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Search for a string that matches no employee

**Expected**

The table empties and no page error is raised

**Automation Hint**

Assert row count 0 and that no pageerror fired.

#### TC-EMPRTF-093 — A rating below the allowed minimum is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Set Core Skill to 0
3. Save

**Expected**

The value is rejected and the record keeps its previous rating — the scale starts at 1

**Automation Hint**

Assert the cell does not read 0.00 and still shows the original value.

#### TC-EMPRTF-094 — A rating above the allowed maximum is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Set Overall to 11
3. Save

**Expected**

The value is rejected and the record keeps its previous rating

**Automation Hint**

Assert the cell does not read 11.00 and still shows the original value.

#### TC-EMPRTF-095 — A non-numeric rating is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Type letters into Behaviour
3. Save

**Expected**

The input is rejected and the record is unchanged

**Automation Hint**

Assert the cell still shows its original value.

#### TC-EMPRTF-096 — Clearing a rating does not silently store zero

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Clear the Comm. rating
3. Save

**Expected**

Either the save is blocked or the rating is stored as unrated — never as 0.00, which on a 1-10 scale reads as a genuine low score

**Automation Hint**

Assert the cell does not read 0.00.

#### TC-EMPRTF-098 — Feedback beyond the stored maximum is capped or rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open the Edit Feedback dialog
2. Paste 4097 characters into Feedback

**Expected**

The field caps at 4096 characters or the save is rejected — developerFeedback is VarChar(4096)

**Automation Hint**

Assert the field's value length is at most 4096.

### Regression (5)

#### TC-EMPRTF-151 — A skipped rating is never counted as zero

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback — nullable rating columns, skipped stored NULL never 0 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Read every Avg Rating

**Expected**

No employee shows an average of 0 — a NULL (skipped) rating must be excluded from the mean, not counted as zero

**Automation Hint**

Assert every Avg Rating is greater than 0.

#### TC-EMPRTF-152 — Every de-allocation row carries a reason

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Read the Reason column

**Expected**

No row renders with an empty reason

**Automation Hint**

Assert every Reason cell is non-empty.

#### TC-EMPRTF-155 — A de-allocation is never listed twice for the same employee

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback — @@unique([ticketId, employeeId]) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Compare project and date across rows

**Expected**

No project/date pair repeats — one feedback row per employee per ticket

**Automation Hint**

Assert the project|date keys are unique.

#### TC-EMPRTF-157 — List aggregates stay consistent with the detail rows across several employees

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. For each of the first three employees, note the De-allocations count and Avg Rating
2. Open each detail view and re-derive both

**Expected**

Both figures reconcile for every sampled employee, not just the first

**Automation Hint**

Loop over three rows asserting count and four-dimension mean each time.

#### TC-EMPRTF-158 — Long feedback is reachable in full rather than silently truncated

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Click "Read the full feedback for <project>"

**Expected**

The complete feedback text is revealed in a dialog or popover

**Automation Hint**

Assert a dialog or tooltip becomes visible after clicking.

### Security (9)

#### TC-EMPRTF-060 — A plain employee cannot reach the Employee Ratings list

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use the empPage fixture (storageState-emp.json).

**Steps**

1. Sign in as a plain employee
2. Navigate directly to /employee-ratings

**Expected**

Access is refused — the ratings table never renders. De-allocation feedback is performance data about named colleagues and must not be readable by an unprivileged account.

**Automation Hint**

Assert the table is not visible within 5s for the emp session.

#### TC-EMPRTF-061 — A plain employee is not offered the Employee Ratings nav entry

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use the empPage fixture.

**Steps**

1. Sign in as a plain employee
2. Expand the Overview group in the sidebar

**Expected**

No "Employee Ratings" link is present

**Automation Hint**

Assert the link has count 0 for the emp session.

#### TC-EMPRTF-066 — A PM sees no more employees than Admin does

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use the pmPage fixture alongside primaryPage.

**Steps**

1. Capture the Admin-visible employee list
2. Sign in as PM and capture theirs

**Expected**

Every employee the PM can see is also visible to Admin — a scoped role can never exceed the unscoped baseline

**Automation Hint**

Assert the PM name set is a subset of the Admin name set.

#### TC-EMPRTF-070 — A TM sees no more employees than Admin does

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use the tmPage fixture alongside primaryPage.

**Steps**

1. Capture the Admin-visible employee list
2. Sign in as TM and capture theirs

**Expected**

The TM's visible set is a subset of Admin's

**Automation Hint**

Assert the TM name set is a subset of the Admin name set.

#### TC-EMPRTF-072 — A non-admin cannot edit a feedback record

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

A non-admin session that can reach the detail view.

**Steps**

1. Sign in as a non-admin role with access
2. Open a de-allocation row

**Expected**

No Edit control is offered, and an update sent directly to the API is rejected

**Automation Hint**

Assert the edit button count is 0, then assert a direct PATCH returns 403.

#### TC-EMPRTF-073 — The ratings API refuses an unprivileged session

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SIMERP DEV backend/src/database/models/allocation-ticket.prisma — model EmployeeAllocationFeedback |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-grounded |
| **Confidence** | code-grounded |

**Preconditions**

Use the empPage fixture.

**Steps**

1. Obtain an unprivileged session
2. Call the employee-ratings API directly

**Expected**

The API responds with an error status and never returns rating or feedback data — scope is enforced server-side, not just hidden in the UI

**Automation Hint**

Assert response.ok() is false for the emp session.

#### TC-EMPRTF-201 — A viewer never sees feedback in which they are the rated employee

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD v1.1 design-reference prototype (artifact AsLKUWN4Zxyxu6U2GQHMDz) — supplied FRD PDF was blank; NOT yet observed in the built screen |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | frd-unverified |
| **Confidence** | frd-unverified |

**Preconditions**

A manager account that has itself been de-allocated with feedback recorded.

**Steps**

1. Sign in as that manager
2. Open /employee-ratings and search for their own name

**Expected**

Per FRD v1.1 the manager's own records are hidden from them while remaining visible to other authorised viewers, with the stored average unaffected. Self-exclusion behaviour is NOT yet confirmed on the built screen.

**Automation Hint**

Needs a seeded manager who is also a rated employee before this can be automated reliably.

#### TC-EMPRTF-202 — An employee never sees a Ratings & Feedback section on their own profile

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD v1.1 design-reference prototype (artifact AsLKUWN4Zxyxu6U2GQHMDz) — supplied FRD PDF was blank; NOT yet observed in the built screen |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | frd-unverified |
| **Confidence** | frd-unverified |

**Preconditions**

Use the empPage fixture.

**Steps**

1. Sign in as a rated employee
2. Open their own profile

**Expected**

Per FRD v1.1 (FR-17) no ratings or feedback section appears. The profile embed was NOT found in the built screen — verify whether FR-17 shipped.

**Automation Hint**

Assert no 'Ratings & Feedback' heading on the own-profile page.

#### TC-EMPRTF-203 — A PM inherits visibility of feedback submitted by the previous PM after project reassignment

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD v1.1 design-reference prototype (artifact AsLKUWN4Zxyxu6U2GQHMDz) — supplied FRD PDF was blank; NOT yet observed in the built screen |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | frd-unverified |
| **Confidence** | frd-unverified |

**Preconditions**

A project reassigned between two PMs, carrying feedback from the first.

**Steps**

1. Sign in as the new PM
2. Open the affected employee's detail view

**Expected**

Per FRD v1.1 (EC-5, FR-14, BR-6) visibility follows CURRENT project ownership, not original authorship. The built screen shows Submitted By, Project Manager and CSM as separate columns, which suggests the data supports this, but the scoping rule itself is unverified.

**Automation Hint**

Requires a seeded project reassignment before it can be automated.

### Smoke (8)

#### TC-EMPRTF-001 — Employee Ratings opens from the Overview group in the sidebar

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Log in as Admin
2. Expand the "Overview" group in the sidebar
3. Click "Employee Ratings"

**Expected**

The list loads at /employee-ratings and the H1 reads "Employee Ratings & Feedback". Note the link only renders once Overview is expanded — it is not visible on a collapsed sidebar.

**Automation Hint**

Click Overview, then the 'Employee Ratings' link; assert the URL contains /employee-ratings.

#### TC-EMPRTF-002 — The list renders one row per employee, not one row per de-allocation

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Read every row's employee name

**Expected**

Each employee occupies exactly one row regardless of how many de-allocations they have

**Automation Hint**

Assert new Set(names).size === names.length.

#### TC-EMPRTF-003 — The list exposes all seven columns with Action first

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Read the column headers in order

**Expected**

Columns are Action, Employee, Department, De-allocations, Avg Rating, Latest Feedback, Reallocate — Action is the FIRST column

**Automation Hint**

Assert header[0] is 'Action' and the remaining six follow in that order.

#### TC-EMPRTF-004 — The row action opens the per-employee detail view

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Click "View ratings and feedback for <employee>" on the first row

**Expected**

The detail view loads at /employee-ratings/<uuid> with the employee's name as the H1 and an "Employee Ratings" breadcrumb back to the list

**Automation Hint**

Assert the URL matches /employee-ratings/<36-char uuid> and the heading contains the employee name.

#### TC-EMPRTF-005 — The detail view lists one row per de-allocation with full attribution

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Read the table

**Expected**

One row per de-allocation showing Project, Reason, De-allocated On, the four ratings, Reallocate, Submitted By, Project Manager, CSM and Feedback

**Automation Hint**

Assert the detail row count equals the list's De-allocations value for that employee.

#### TC-EMPRTF-006 — Each de-allocation shows all four ratings, the reallocate flag and its feedback

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Read the first de-allocation row

**Expected**

Core, Comm., Beh. and Overall each show a two-decimal value, Reallocate reads Yes or No, and a "Read the full feedback" control exposes the feedback text

**Automation Hint**

Assert each rating cell matches /^\d+\.\d{2}$/ and the reallocate cell is Yes or No.

#### TC-EMPRTF-007 — The detail view summarises Avg Rating, the four-dimension Breakdown and the reallocate split

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open an employee's detail view
2. Read the summary block above the table

**Expected**

The header shows Avg Rating, a Breakdown of Core Skill / Comm. / Behaviour / Overall, and an "Open to reallocate" N Yes · M No split

**Automation Hint**

Assert all four breakdown dimensions parse to numbers.

#### TC-EMPRTF-009 — The list reports its total result count and paginates

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live DOM capture 2026-09-23, SimERP 6.2.0 at simerp-dev — /employee-ratings (Overview > Employee Ratings); snapshots EMPRTF / EMPRTF_DETAIL / EMPRTF_EDIT / EMPRTF_FILTER / EMPRTF_NAV |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-grounded |
| **Confidence** | live-grounded |

**Preconditions**

Use primaryPage fixture (SIMERP_USERNAME, Admin). At least one employee has de-allocation feedback recorded.

**Steps**

1. Open /employee-ratings
2. Read the status line below the table

**Expected**

A "Showing X - Y of N results" status is shown with Previous/Next pagination controls

**Automation Hint**

Assert the reported total is greater than zero.
