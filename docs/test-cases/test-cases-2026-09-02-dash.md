# Dashboard — Test Cases

**Total test cases:** 75  
**Modules covered:** Dashboard  
**Source:** `reports/test-cases/cases-2026-09-02-DASH.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| regression | 26 | 34.7% |
| boundary | 15 | 20.0% |
| functional | 14 | 18.7% |
| security | 9 | 12.0% |
| negative | 6 | 8.0% |
| smoke | 3 | 4.0% |
| integration | 2 | 2.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 35 | 46.7% |
| medium | 25 | 33.3% |
| critical | 9 | 12.0% |
| low | 6 | 8.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 45 | 60.0% |
| minor | 22 | 29.3% |
| critical | 8 | 10.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 66 | 88.0% |
| regression-derived | 9 | 12.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 54 | 72.0% |
| inferred | 15 | 20.0% |
| speculative | 6 | 8.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 68 | 90.7% |
| partial | 4 | 5.3% |
| No | 3 | 4.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @regression | 34 | 45.3% |
| @functional | 20 | 26.7% |
| @boundary | 18 | 24.0% |
| @security | 11 | 14.7% |
| @negative | 7 | 9.3% |
| @smoke | 3 | 4.0% |
| @needs-verification | 1 | 1.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-DASH-001](#tc-dash-001-dashboard-is-the-first-sidebar-item-above-employee-and-loads-for-pmo) | Dashboard is the first sidebar item, above Employee, and loads for PMO | Dashboard | smoke | critical |
| [TC-DASH-002](#tc-dash-002-dashboard-renders-all-4-kpi-cards-and-4-charts-for-pmo-on-first-load) | Dashboard renders all 4 KPI cards and 4 charts for PMO on first load | Dashboard | smoke | critical |
| [TC-DASH-003](#tc-dash-003-export-data-button-triggers-an-export-without-error-smoke) | Export Data button triggers an export without error (smoke) | Dashboard | smoke | critical |
| [TC-DASH-004](#tc-dash-004-change-the-dashboard-period-exposes-exactly-the-6-documented-options) | Change the dashboard period exposes exactly the 6 documented options | Dashboard | functional | high |
| [TC-DASH-005](#tc-dash-005-selecting-this-month-updates-the-period-button-label-and-kpi-values) | Selecting 'This Month' updates the period button label and KPI values | Dashboard | functional | high |
| [TC-DASH-006](#tc-dash-006-selecting-custom-date-range-reveals-a-start-end-date-picker) | Selecting 'Custom Date Range' reveals a start/end date picker | Dashboard | functional | high |
| [TC-DASH-007](#tc-dash-007-net-utilisation-equals-total-allocation-minus-total-deallocation-pmo) | Net Utilisation equals Total Allocation minus Total Deallocation (PMO) | Dashboard | functional | high |
| [TC-DASH-008](#tc-dash-008-allocation-type-distribution-donut-fixed-dynamic-sums-to-100) | Allocation Type Distribution donut Fixed% + Dynamic% sums to 100% | Dashboard | functional | medium |
| [TC-DASH-009](#tc-dash-009-allocated-hours-by-project-bar-chart-is-sorted-highest-first-with-an-n-other-projects-rollup) | Allocated Hours by Project bar chart is sorted highest-first with an 'N other projects' rollup | Dashboard | functional | medium |
| [TC-DASH-010](#tc-dash-010-all-activity-table-search-narrows-rows-to-matching-employee-project-text) | All Activity table Search narrows rows to matching employee/project text | Dashboard | functional | high |
| [TC-DASH-011](#tc-dash-011-all-activity-table-column-sort-toggles-ascending-descending) | All Activity table column sort toggles ascending/descending | Dashboard | functional | high |
| [TC-DASH-012](#tc-dash-012-all-activity-table-status-filter-narrows-to-the-selected-status-only) | All Activity table Status filter narrows to the selected status only | Dashboard | functional | high |
| [TC-DASH-013](#tc-dash-013-upcoming-changes-filter-is-independent-of-the-global-period-filter) | Upcoming Changes filter is independent of the global period filter | Dashboard | functional | medium |
| [TC-DASH-014](#tc-dash-014-department-filter-is-present-and-functional-for-pmo) | Department filter is present and functional for PMO | Dashboard | functional | high |
| [TC-DASH-015](#tc-dash-015-employee-avatar-name-renders-per-row-in-all-activity) | Employee avatar/name renders per row in All Activity | Dashboard | functional | low |
| [TC-DASH-016](#tc-dash-016-dynamic-allocation-rows-show-a-no-fixed-percentage-explanatory-tooltip-text-instead-of-a) | Dynamic allocation rows show a 'no fixed percentage' explanatory tooltip/text instead of a % | Dashboard | functional | low |
| [TC-DASH-017](#tc-dash-017-all-activity-table-filters-employee-name-projects-narrow-rows-independently) | All Activity table filters (Employee Name / Projects) narrow rows independently | Dashboard | functional | medium |
| [TC-DASH-018](#tc-dash-018-dashboard-api-failure-shows-a-user-friendly-error-state-not-a-blank-screen) | Dashboard API failure shows a user-friendly error state, not a blank screen | Dashboard | negative | high |
| [TC-DASH-019](#tc-dash-019-dashboard-with-zero-data-in-scope-shows-an-empty-state-not-an-error) | Dashboard with zero data in scope shows an empty state, not an error | Dashboard | negative | medium |
| [TC-DASH-020](#tc-dash-020-custom-date-range-with-end-date-before-start-date-is-rejected-or-auto-corrected) | Custom Date Range with end date before start date is rejected or auto-corrected | Dashboard | negative | medium |
| [TC-DASH-021](#tc-dash-021-employee-role-direct-navigation-to-dashboard-is-blocked-access-denied) | Employee role: direct navigation to /dashboard is blocked (Access Denied) | Dashboard | negative | high |
| [TC-DASH-022](#tc-dash-022-employee-role-dashboard-link-is-entirely-absent-from-the-sidebar) | Employee role: 'Dashboard' link is entirely absent from the sidebar | Dashboard | negative | high |
| [TC-DASH-023](#tc-dash-023-rapid-double-click-on-the-period-filter-option-does-not-race-duplicate-the-data-request) | Rapid double-click on the period filter option does not race/duplicate the data request | Dashboard | negative | low |
| [TC-DASH-024](#tc-dash-024-custom-date-range-spanning-multiple-years-renders-the-trend-chart-without-error) | Custom Date Range spanning multiple years renders the trend chart without error | Dashboard | boundary | medium |
| [TC-DASH-025](#tc-dash-025-1-2-years-option-with-1-year-of-org-history-shows-an-empty-but-valid-older-bucket) | '1 - 2 Years' option with < 1 year of org history shows an empty-but-valid older bucket | Dashboard | boundary | low |
| [TC-DASH-026](#tc-dash-026-all-activity-table-renders-its-full-row-set-with-no-client-side-pagination-flag-as-a-performance-ux-risk) | All Activity table renders its full row set with no client-side pagination — flag as a performance/UX risk | Dashboard | boundary | medium |
| [TC-DASH-027](#tc-dash-027-net-utilisation-negative-value-is-legibly-distinguished-not-just-a-hidden-css-class) | Net Utilisation negative value is legibly distinguished, not just a hidden CSS class | Dashboard | boundary | medium |
| [TC-DASH-028](#tc-dash-028-fixed-dynamic-donut-with-0-dynamic-still-renders-a-visible-non-collapsed-legend-entry) | Fixed/Dynamic donut with 0% Dynamic still renders a visible (non-collapsed) legend entry | Dashboard | boundary | low |
| [TC-DASH-029](#tc-dash-029-pm-role-smallest-sampled-dataset-6-allocations-still-renders-every-chart-section-without-a-broken-empty-looking-layout) | PM role (smallest sampled dataset, 6 allocations) still renders every chart section without a broken/empty-looking layout | Dashboard | boundary | medium |
| [TC-DASH-030](#tc-dash-030-pmo-sees-strictly-larger-org-wide-kpi-totals-than-pm-tm-employee-scoped-sessions-for-the-same-period) | PMO sees strictly larger (org-wide) KPI totals than PM/TM/Employee-scoped sessions for the same period | Dashboard | security | critical |
| [TC-DASH-031](#tc-dash-031-department-filter-is-present-for-pmo-tm-but-absent-for-pm) | Department filter is present for PMO/TM but absent for PM | Dashboard | security | high |
| [TC-DASH-032](#tc-dash-032-department-filter-is-present-for-tm-but-absent-for-the-employee-equivalent-test-user) | Department filter is present for TM but absent for the Employee-equivalent test user | Dashboard | security | high |
| [TC-DASH-034](#tc-dash-034-em-role-data-scoping-own-department-s-only-confirmed-live-via-kunal-jadeja-simformsolutions-com) | EM role data scoping (own department(s) only) — CONFIRMED live via kunal.jadeja@simformsolutions.com | Dashboard | security | high |
| [TC-DASH-035](#tc-dash-035-csm-role-data-scoping-assigned-projects-only-confirmed-live-via-tarun-sharma-simformsolutions-com) | CSM role data scoping (assigned projects only) — CONFIRMED live via tarun.sharma@simformsolutions.com | Dashboard | security | high |
| [TC-DASH-036](#tc-dash-036-export-data-is-available-to-every-scoped-role-and-does-not-leak-out-of-scope-data) | Export Data is available to every scoped role and does not leak out-of-scope data | Dashboard | security | high |
| [TC-DASH-037](#tc-dash-037-regression-pm-projects-dashboard-is-unmodified-by-the-new-dashboard-module) | Regression: PM Projects Dashboard is unmodified by the new Dashboard module | Dashboard | regression | high |
| [TC-DASH-038](#tc-dash-038-regression-existing-sidebar-items-below-dashboard-keep-their-prior-order) | Regression: existing sidebar items below Dashboard keep their prior order | Dashboard | regression | high |
| [TC-DASH-039](#tc-dash-039-regression-an-employee-s-dashboard-row-stays-consistent-with-their-employee-details-record) | Regression: an employee's Dashboard row stays consistent with their Employee Details record | Dashboard | regression | medium |
| [TC-DASH-040](#tc-dash-040-regression-an-allocation-request-approval-surfaces-as-an-upcoming-allocation-on-the-dashboard) | Regression: an Allocation Request approval surfaces as an Upcoming Allocation on the Dashboard | Dashboard | regression | medium |
| [TC-DASH-041](#tc-dash-041-regression-page-refresh-f5-on-dashboard-preserves-the-selected-period-filter-within-the-session) | Regression: page refresh (F5) on /dashboard preserves the selected period filter within the session | Dashboard | regression | medium |
| [TC-DASH-042](#tc-dash-042-regression-dashboard-kpi-totals-match-the-allocation-requests-module-s-own-totals-for-the-same-scope-period) | Regression: Dashboard KPI totals match the Allocation Requests module's own totals for the same scope/period | Dashboard | regression | medium |
| [TC-DASH-043](#tc-dash-043-integration-dashboard-scoping-is-consistent-with-employee-details-own-department-scoping-for-the-same-tm) | Integration — Dashboard scoping is consistent with Employee Details' own department scoping for the same TM | Dashboard | integration | high |
| [TC-DASH-044](#tc-dash-044-integration-dashboard-s-allocation-type-distribution-fixed-dynamic-matches-an-individual-employee-s-allocation-type-on-employee-details) | Integration — Dashboard's Allocation Type Distribution (Fixed/Dynamic) matches an individual employee's allocation type on Employee Details | Dashboard | integration | medium |
| [TC-DASH-045](#tc-dash-045-api-net-utilisation-exactly-equals-total-allocation-minus-total-deallocation) | API: Net Utilisation exactly equals Total Allocation minus Total Deallocation | Dashboard | regression | high |
| [TC-DASH-046](#tc-dash-046-api-netdirection-field-matches-the-actual-sign-of-netutilizationhoursperday) | API: netDirection field matches the actual sign of netUtilizationHoursPerDay | Dashboard | regression | medium |
| [TC-DASH-047](#tc-dash-047-api-sum-of-trend-buckets-allocation-deallocation-counts-equals-summary-counts-exactly) | API: sum of trend.buckets[] allocation/deallocation counts equals summary counts exactly | Dashboard | regression | high |
| [TC-DASH-048](#tc-dash-048-api-sum-of-trend-buckets-hours-reconciles-with-summary-total-hours) | API: sum of trend.buckets[] hours reconciles with summary total hours | Dashboard | regression | high |
| [TC-DASH-049](#tc-dash-049-api-each-trend-bucket-s-nethoursperday-equals-its-own-allocated-minus-deallocated) | API: each trend bucket's netHoursPerDay equals its own allocated minus deallocated | Dashboard | regression | medium |
| [TC-DASH-050](#tc-dash-050-api-allocation-type-distribution-totals-and-per-type-allocation-counts-reconcile-with-summary) | API: Allocation Type Distribution totals and per-type allocation counts reconcile with summary | Dashboard | regression | high |
| [TC-DASH-051](#tc-dash-051-api-each-allocation-type-slice-s-sharepercentage-matches-its-own-hours-over-total-calculation) | API: each allocation-type slice's sharePercentage matches its own hours-over-total calculation | Dashboard | regression | medium |
| [TC-DASH-052](#tc-dash-052-api-project-breakdown-totals-reconcile-and-items-are-sorted-strictly-descending-by-hours) | API: Project Breakdown totals reconcile and items are sorted strictly descending by hours | Dashboard | regression | high |
| [TC-DASH-053](#tc-dash-053-api-n-other-projects-rollup-count-reconciles-exactly-with-totalprojectcount) | API: 'N other projects' rollup count reconciles exactly with totalProjectCount | Dashboard | boundary | medium |
| [TC-DASH-054](#tc-dash-054-ui-vs-api-parity-kpi-cards-allocation-deallocation-hours-counts-net-exactly-match-the-overview-api) | UI vs API parity: KPI cards (allocation/deallocation hours+counts, net) exactly match the overview API | Dashboard | regression | critical |
| [TC-DASH-055](#tc-dash-055-ui-vs-api-parity-donut-chart-fixed-dynamic-percentages-match-allocationtypedistribution) | UI vs API parity: donut chart Fixed/Dynamic percentages match allocationTypeDistribution | Dashboard | regression | high |
| [TC-DASH-056](#tc-dash-056-ui-vs-api-parity-bar-chart-top-project-hours-match-projectbreakdown-items-in-the-same-order) | UI vs API parity: bar chart top-project hours match projectBreakdown.items in the same order | Dashboard | regression | high |
| [TC-DASH-057](#tc-dash-057-ui-vs-api-parity-all-activity-table-s-first-row-matches-the-activity-api-s-first-item-exactly) | UI vs API parity: All Activity table's first row matches the activity API's first item exactly | Dashboard | regression | high |
| [TC-DASH-058](#tc-dash-058-api-activity-endpoint-s-total-record-count-is-stable-across-repeated-identical-calls) | API: activity endpoint's total record count is stable across repeated identical calls | Dashboard | boundary | medium |
| [TC-DASH-059](#tc-dash-059-istruncated-flag-vs-an-actually-truncated-projectbreakdown-semantics-unconfirmed) | isTruncated flag vs. an actually-truncated projectBreakdown — semantics unconfirmed | Dashboard | boundary | low |
| [TC-DASH-060](#tc-dash-060-api-level-role-scoping-every-role-s-overview-summary-is-server-side-scoped-not-just-hidden-in-the-ui) | API-level role scoping: every role's overview summary is server-side scoped, not just hidden in the UI | Dashboard | security | critical |
| [TC-DASH-061](#tc-dash-061-employee-role-the-real-dashboard-overview-api-returns-200-with-correctly-own-scoped-data-def-dash-001-is-frontend-only-not-a-backend-rbac-gap) | Employee role: the real dashboard overview API returns 200 with correctly own-scoped data — DEF-DASH-001 is frontend-only, not a backend RBAC gap | Dashboard | security | high |
| [TC-DASH-062](#tc-dash-062-api-this-year-period-s-fromdate-todate-exactly-span-jan-1-dec-31-of-the-current-year) | API: This Year period's fromDate/toDate exactly span Jan 1 - Dec 31 of the current year | Dashboard | boundary | medium |
| [TC-DASH-063](#tc-dash-063-this-week-filter-produces-the-correct-monday-sunday-date-range) | 'This Week' filter produces the correct Monday-Sunday date range | Dashboard | boundary | high |
| [TC-DASH-064](#tc-dash-064-this-month-filter-produces-the-correct-calendar-month-date-range) | 'This Month' filter produces the correct calendar-month date range | Dashboard | boundary | high |
| [TC-DASH-066](#tc-dash-066-0-1-year-filter-produces-a-rolling-1-year-window-ending-today) | '0 - 1 Year' filter produces a rolling 1-year window ending today | Dashboard | boundary | high |
| [TC-DASH-067](#tc-dash-067-1-2-years-filter-produces-a-window-immediately-preceding-0-1-year-with-no-gap-or-overlap) | '1 - 2 Years' filter produces a window immediately preceding '0 - 1 Year' with no gap or overlap | Dashboard | boundary | medium |
| [TC-DASH-068](#tc-dash-068-custom-date-range-applies-the-exact-selected-start-end-dates) | Custom Date Range applies the exact selected start/end dates | Dashboard | boundary | medium |
| [TC-DASH-069](#tc-dash-069-export-respects-the-currently-selected-period-filter-not-always-the-default) | Export respects the currently selected period filter, not always the default | Dashboard | regression | high |
| [TC-DASH-070](#tc-dash-070-exported-csv-summary-section-exactly-matches-the-overview-api-for-the-same-filter) | Exported CSV Summary section exactly matches the overview API for the same filter | Dashboard | regression | critical |
| [TC-DASH-071](#tc-dash-071-exported-csv-trend-section-exactly-matches-the-overview-api-s-monthly-buckets) | Exported CSV Trend section exactly matches the overview API's monthly buckets | Dashboard | regression | high |
| [TC-DASH-072](#tc-dash-072-exported-csv-allocation-type-section-exactly-matches-the-overview-api-s-distribution) | Exported CSV Allocation Type section exactly matches the overview API's distribution | Dashboard | regression | medium |
| [TC-DASH-073](#tc-dash-073-exported-csv-hours-by-project-section-sums-to-the-same-total-as-the-summary-section-full-uncapped-list) | Exported CSV Hours by Project section sums to the same total as the Summary section (full, uncapped list) | Dashboard | regression | high |
| [TC-DASH-074](#tc-dash-074-exported-csv-hours-by-project-row-count-matches-the-overview-api-s-totalprojectcount) | Exported CSV Hours by Project row count matches the overview API's totalProjectCount | Dashboard | regression | medium |
| [TC-DASH-075](#tc-dash-075-exported-csv-all-activity-row-count-exactly-matches-the-activity-api-s-total-field-full-export-not-paginated) | Exported CSV All Activity row count exactly matches the activity API's total field (full export, not paginated) | Dashboard | regression | critical |
| [TC-DASH-076](#tc-dash-076-exported-csv-all-activity-row-level-fields-match-the-activity-api-for-a-spot-checked-record) | Exported CSV All Activity row-level fields match the activity API for a spot-checked record | Dashboard | regression | high |
| [TC-DASH-077](#tc-dash-077-export-respects-role-based-scoping-at-the-content-level-not-just-the-trigger) | Export respects role-based scoping at the content level, not just the trigger | Dashboard | security | critical |

---

## Dashboard

75 test cases.

### Boundary (15)

#### TC-DASH-024 — Custom Date Range spanning multiple years renders the trend chart without error

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select Custom Date Range spanning 4 years
3. Apply

**Expected**

Trend line chart and grouped bar chart render without truncation/crash for a wide multi-year bucket range.

**Test Data**

- `start`: 2023-01-01
- `end`: 2026-12-31

#### TC-DASH-025 — '1 - 2 Years' option with < 1 year of org history shows an empty-but-valid older bucket

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[1] |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select '1 - 2 Years'

**Expected**

If the org genuinely has < 1 year of history, KPI cards/charts show a valid zero/empty state for that bucket, not an error.

**Automation Hint**

MANUAL — depends on actual seeded data age, which is out of this run's control; automate only once a known-empty historical window exists in the test dataset.

#### TC-DASH-026 — All Activity table renders its full row set with no client-side pagination — flag as a performance/UX risk

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard as PMO (org-wide scope, largest dataset)
2. Count the rendered rows in the All Activity table

**Expected**

OBSERVATION (2026-09-02 grounding pass): a single DOM capture for the PMO/org-wide view returned 900+ table rows in one page load, with no visible pagination controls. Assert the table either (a) implements virtualization/windowing (only a bounded DOM node count regardless of total rows) or (b) has real pagination — flag as a defect if it is a genuine unbounded full-dataset render.

**Automation Hint**

Count actual DOM rows via getDataRows().count() vs. any stated total; a DOM row count in the hundreds+ with no page-size control is the signal to flag.

#### TC-DASH-027 — Net Utilisation negative value is legibly distinguished, not just a hidden CSS class

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[3], FRD Section 9.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard (live data currently shows a negative Net Utilisation for every role sampled)
2. Inspect the Net Utilisation KPI card

**Expected**

The negative value is visually/programmatically distinguishable (e.g. a leading '-' sign at minimum; FRD Section 9.1/9.2 also call for a ↓ red directional indicator) — assert at minimum the numeric sign is present in the accessible text.

**Automation Hint**

UNVERIFIED whether a ↑/↓ icon is actually rendered — only the KPI text ('Net Utilisation -11,126hrs') was captured; treat the icon assertion as best-effort/non-blocking, the numeric sign assertion as the hard requirement.

#### TC-DASH-028 — Fixed/Dynamic donut with 0% Dynamic still renders a visible (non-collapsed) legend entry

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC6 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard for a role where Dynamic is 0% (e.g. PM/TM personas observed live)
2. Inspect the donut legend

**Expected**

Both 'Fixed' and 'Dynamic' legend entries remain visible even when one is 0% — legend does not silently drop a zero-value series.

**Automation Hint**

GROUNDED: PM/TM/Employee-scope snapshots all showed 'Dynamic 0h (0%)' still present in the legend text.

#### TC-DASH-029 — PM role (smallest sampled dataset, 6 allocations) still renders every chart section without a broken/empty-looking layout

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC13 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture)

**Steps**

1. Log in as hardik.trivedi@simformsolutions.com (pmPage)
2. Navigate to /dashboard

**Expected**

All 4 chart sections and the All Activity table render correctly for a small (10hrs/6 allocations) dataset — no layout break, no NaN/undefined text.

**Automation Hint**

GROUNDED: DASH_PM.json snapshot confirms full page renders correctly at this data volume.

#### TC-DASH-053 — API: 'N other projects' rollup count reconciles exactly with totalProjectCount

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Regression: data-integrity — rollup bucket label accuracy |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Parse the numeric prefix of projectBreakdown.otherProjects.projectName (e.g. '393 other projects' -> 393)
3. Add projectBreakdown.items.length

**Expected**

items.length + parsed-other-count === projectBreakdown.totalProjectCount exactly (e.g. 6 + 393 === 399).

**Automation Hint**

GROUNDED live 2026-09-02: confirmed exact for PMO/this_year (6 + 393 = 399).

#### TC-DASH-058 — API: activity endpoint's total record count is stable across repeated identical calls

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Regression: data-integrity — pagination stability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/activity?duration=this_year&page=1&limit=100 twice in quick succession
2. Compare the two responses' total field

**Expected**

Both calls return the same total (no spurious drift between two back-to-back reads of the same unchanged data); items.length on each page never exceeds the requested limit.

**Automation Hint**

GROUNDED live 2026-09-02: PMO/this_year had total=5939 across 60 pages of 100 — the UI never renders all 5939 in one DOM (confirmed via an earlier ~900-row DOM snapshot, itself a mid-scroll-load state, not the full set) — see TC-DASH-026.

#### TC-DASH-059 — isTruncated flag vs. an actually-truncated projectBreakdown — semantics unconfirmed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — truncation flag accuracy |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Compare projectBreakdown.totalProjectCount to projectBreakdown.items.length

**Expected**

UNCONFIRMED (2026-09-02): isTruncated is a top-level field, sibling to projectBreakdown and loggedHoursTimeframe, not nested inside projectBreakdown — its intended meaning is not documented. Observed live: projectBreakdown IS genuinely truncated (399 total, 6 individually listed, an explicit rollup present) yet isTruncated read false. Recorded as an observation for the backend team to confirm, not asserted as a hard defect, since it may legitimately describe loggedHoursTimeframe truncation instead.

#### TC-DASH-062 — API: This Year period's fromDate/toDate exactly span Jan 1 - Dec 31 of the current year

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3, Regression: data-integrity — period boundary correctness |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview?duration=this_year&projectLimit=6
2. Read data.period.fromDate and data.period.toDate

**Expected**

period.fromDate === '<currentYear>-01-01' and period.toDate === '<currentYear>-12-31' — the period boundary is computed correctly server-side, not off-by-one or silently defaulting to a different range.

**Test Data**

- `duration`: this_year

**Automation Hint**

GROUNDED live 2026-09-02: confirmed fromDate='2026-01-01', toDate='2026-12-31' for duration=this_year.

#### TC-DASH-063 — 'This Week' filter produces the correct Monday-Sunday date range

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3, FRD Section 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select 'This Week' from the period filter
3. Read the API's period.fromDate/toDate for duration=this_week

**Expected**

period.fromDate is the Monday of the current week; period.toDate is the following Sunday.

**Automation Hint**

GROUNDED live 2026-09-02: confirmed duration param 'this_week'; e.g. for 'today'=2026-09-02 (Wed), fromDate=2026-08-31 (Mon), toDate=2026-09-06 (Sun).

#### TC-DASH-064 — 'This Month' filter produces the correct calendar-month date range

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3, FRD Section 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select 'This Month' from the period filter
3. Read the API's period.fromDate/toDate for duration=this_month

**Expected**

period.fromDate is the 1st of the current month; period.toDate is the last day of the current month.

**Automation Hint**

GROUNDED live 2026-09-02: confirmed duration param 'this_month'.

#### TC-DASH-066 — '0 - 1 Year' filter produces a rolling 1-year window ending today

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3, FRD Section 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select '0 - 1 Year' from the period filter
3. Read the API's period.fromDate/toDate for duration=last_one_year

**Expected**

period.toDate is today; period.fromDate is exactly one year before today (a rolling window, not calendar-year-aligned).

**Automation Hint**

GROUNDED live 2026-09-02: confirmed duration param 'last_one_year'; e.g. today=2026-09-02, fromDate=2025-09-03, toDate=2026-09-02.

#### TC-DASH-067 — '1 - 2 Years' filter produces a window immediately preceding '0 - 1 Year' with no gap or overlap

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3, FRD Section 5 — cross-window data-integrity check |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Read period for duration=last_one_year (0-1 Year)
3. Read period for duration=one_to_two_years (1-2 Years)

**Expected**

'1 - 2 Years'.toDate is exactly one day before '0 - 1 Year'.fromDate — the two windows are contiguous, with no day double-counted and no day skipped.

**Automation Hint**

GROUNDED live 2026-09-02: confirmed duration param 'one_to_two_years'; e.g. one_to_two_years toDate=2025-09-02, last_one_year fromDate=2025-09-03 — contiguous.

#### TC-DASH-068 — Custom Date Range applies the exact selected start/end dates

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3, FRD Section 5 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open Custom Date Range and enter a specific start/end date
3. Read the resulting period.fromDate/toDate

**Expected**

period matches exactly the dates entered.

**Test Data**

- `start`: 01/01/2026
- `end`: 31/03/2026

**Automation Hint**

UNVERIFIED — the date-input control does not expose standard textbox/input[type=date] roles (confirmed live: page.getByRole('textbox') only finds the unrelated All Activity search box while this popover is open), likely a custom masked/calendar widget. Automate once its real interaction pattern is grounded.

### Functional (14)

#### TC-DASH-004 — Change the dashboard period exposes exactly the 6 documented options

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC3 / FRD Section 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Click the 'Change the dashboard period' button

**Expected**

A popover/dialog opens listing exactly: This Week, This Month, This Year, 0 - 1 Year, 1 - 2 Years, Custom Date Range — no more, no less.

**Test Data**

- `expectedOptions`: This Week, This Month, This Year, 0 - 1 Year, 1 - 2 Years, Custom Date Range

**Automation Hint**

GROUNDED live (2026-09-02): popover is role=dialog with all 6 option buttons as direct children — see reports/knowledge-base/dom-snapshots/DASH.json state 'after-click-change-the-dashboard-period'.

#### TC-DASH-005 — Selecting 'This Month' updates the period button label and KPI values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Note the current Total Allocation KPI value
3. Open the period filter and select 'This Month'

**Expected**

Period button label updates to 'This Month'; Total Allocation KPI value updates (or is asserted-consistent) to reflect only the current month's data — a network response for the dashboard data is observed after selection.

#### TC-DASH-006 — Selecting 'Custom Date Range' reveals a start/end date picker

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC3 / FRD Section 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open the period filter
3. Select 'Custom Date Range'
4. Enter a valid start and end date and apply

**Expected**

A date-range picker (start/end) is shown; applying a valid range refreshes the dashboard without error.

**Test Data**

- `start`: 2026-01-01
- `end`: 2026-03-31

**Automation Hint**

UNVERIFIED — exact date-input control shape (two <input type=date> vs a calendar popover) was not captured live; probe generically for input[type=date] or a role=dialog calendar and fall back gracefully.

#### TC-DASH-007 — Net Utilisation equals Total Allocation minus Total Deallocation (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC4, FRD Section 9.2 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Parse Total Allocation hours, Total Deallocation hours, and Net Utilisation hours from the KPI cards

**Expected**

Net Utilisation (numeric, signed) === Total Allocation − Total Deallocation, exactly (both are already hour-weighted totals, not headcounts).

**Automation Hint**

Parse '3,231hrs' style strings by stripping commas/'hrs'; Net Utilisation may render as e.g. '-11,126hrs' — parse the leading sign too.

#### TC-DASH-008 — Allocation Type Distribution donut Fixed% + Dynamic% sums to 100%

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC6, FRD Section 6.3 hour-weighting |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Read the donut chart's accessible summary text (Fixed N%, Dynamic M%)

**Expected**

Fixed% + Dynamic% === 100% (within 1% rounding tolerance); total hours label matches the sum of the two hour values shown.

**Automation Hint**

GROUNDED live: img has an accessible name/summary text like 'Fixed 3,219h (100%). Dynamic 12h (0%)' — parse from the chart's aria text, not pixel geometry.

#### TC-DASH-009 — Allocated Hours by Project bar chart is sorted highest-first with an 'N other projects' rollup

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Read the 'Allocated Hours by Project' chart's per-project hour values in rendered order

**Expected**

Values are in strictly descending order (top projects first); if more projects exist than shown individually, a final '<N> other projects' bucket is present with a non-zero hour total.

#### TC-DASH-010 — All Activity table Search narrows rows to matching employee/project text

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9, qa-conventions Search regression pattern |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Scroll to 'All Activity'
3. Type 'Nair' into the Search textbox

**Expected**

All visible rows contain 'Nair' in the Employee Name (or Projects) cell; clearing the search restores the full row set.

**Test Data**

- `searchTerm`: Nair

#### TC-DASH-011 — All Activity table column sort toggles ascending/descending

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Click the 'Sort ascending' control on the Employee Name column header
3. Click it again

**Expected**

First click orders rows A→Z by Employee Name; second click reverses to Z→A (or an equivalent documented toggle behavior).

#### TC-DASH-012 — All Activity table Status filter narrows to the selected status only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open 'Filter by Status' on the Status column
3. Select 'Upcoming Allocation' only and apply

**Expected**

Every visible row's Status cell reads 'Upcoming Allocation'; clearing the filter restores mixed statuses.

**Test Data**

- `status`: Upcoming Allocation

**Automation Hint**

GROUNDED: Status badge values seen live include at least 'Upcoming Allocation'; other values (e.g. 'Allocation', 'Deallocation') are inferred by symmetry with the Status column's purpose, not directly observed — verify all option values on first automation run.

#### TC-DASH-013 — Upcoming Changes filter is independent of the global period filter

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC10, FRD Section 8.1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open 'Upcoming Changes' and select a future custom range
3. Change the global period filter to 'This Week'

**Expected**

Changing the global period filter does not silently reset or clear the Upcoming Changes selection — the two controls operate independently, per FRD Section 8.1.

**Automation Hint**

UNVERIFIED exact popover shape for Upcoming Changes — only the trigger button and its aria-label were grounded live; verify option content on first automation run.

#### TC-DASH-014 — Department filter is present and functional for PMO

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Locate the 'Filter the dashboard by department' combobox (default 'All Departments')
3. Open it and select a specific department

**Expected**

Combobox is visible with default 'All Departments'; selecting a specific department refreshes the KPI cards/table to a scoped (smaller or equal) dataset.

**Automation Hint**

UNVERIFIED — the open option list was not successfully captured live in this pass; verify the combobox's actual open/select interaction (native <select> vs Radix listbox) on first automation run.

#### TC-DASH-015 — Employee avatar/name renders per row in All Activity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Inspect the first row of the All Activity table

**Expected**

Row shows an employee avatar image plus a readable name/designation label (e.g. 'Diya Nair LE 2') in the Employee Name cell.

#### TC-DASH-016 — Dynamic allocation rows show a 'no fixed percentage' explanatory tooltip/text instead of a %

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9, FRD Allocation Type field |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Locate a row whose Allocation % cell reads 'Dynamic'

**Expected**

The cell shows 'Dynamic' with accessible text 'Dynamic allocations store no fixed percentage. Hours come from the logged share of the project.' rather than a raw blank or 0%.

#### TC-DASH-017 — All Activity table filters (Employee Name / Projects) narrow rows independently

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open 'Filter by Projects' on the Projects column and select one project

**Expected**

Only rows for the selected project remain visible; the filter can be cleared to restore the full set.

### Integration (2)

#### TC-DASH-043 — Integration — Dashboard scoping is consistent with Employee Details' own department scoping for the same TM

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT-DASH-01 — cross-module department scope consistency |
| **Automatable** | partial |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture)

**Steps**

1. Log in as sudhansu.patel@simformsolutions.com (tmPage)
2. Note the department(s) available in the Dashboard's department filter
3. Navigate to Employee → Employee Details and check the department filter/scope available there for the same TM

**Expected**

The set of departments a TM can see/filter by is the same across both the Dashboard and Employee Details modules — no module-specific scoping drift.

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation.

#### TC-DASH-044 — Integration — Dashboard's Allocation Type Distribution (Fixed/Dynamic) matches an individual employee's allocation type on Employee Details

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | INT-DASH-02 — cross-module allocation-type consistency |
| **Automatable** | partial |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Pick a specific 'Dynamic' allocation row on the Dashboard's All Activity table
2. Open that same employee's project allocation detail on Employee Details

**Expected**

The allocation type (Fixed/Dynamic) shown for that employee/project pairing agrees across both modules.

**Automation Hint**

Multi-module flow — verify via UI navigation, correlating by exact employee name + project name.

### Negative (6)

#### TC-DASH-018 — Dashboard API failure shows a user-friendly error state, not a blank screen

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 500) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Intercept the dashboard data request and force a 500 response
2. Navigate to /dashboard

**Expected**

A readable error message/toast is shown; no raw stack trace or fully blank page.

**Test Data**

- `mockStatus`: 500

**Automation Hint**

page.route(/dashboard|allocation/i, route => route.fulfill({status:500, body: '{"message":"Internal Server Error"}'})) — endpoint path unconfirmed, use a broad regex.

#### TC-DASH-019 — Dashboard with zero data in scope shows an empty state, not an error

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | edgeCases[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select a Custom Date Range far in the future with no allocation data

**Expected**

KPI cards show 0/blank values, charts render an empty/zero state, and the All Activity table shows a non-blank empty-state message — no crash or console error.

**Test Data**

- `customRange`: far-future range with no allocations

#### TC-DASH-020 — Custom Date Range with end date before start date is rejected or auto-corrected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | validationRules[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open Custom Date Range
3. Enter an end date earlier than the start date and attempt to apply

**Expected**

The UI rejects the invalid range (inline validation) or auto-corrects it — it must not silently query the API with start > end.

**Test Data**

- `start`: 2026-06-30
- `end`: 2026-01-01

#### TC-DASH-021 — Employee role: direct navigation to /dashboard is blocked (Access Denied)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | AC2 / FRD Section 3, Section 10 — DEF-DASH-001 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture)

**Steps**

1. Log in as kashyap.patel@simformsolutions.com (empPage)
2. Navigate directly to /dashboard

**Expected**

CONFIRMED DEFECT (DEF-DASH-001): app redirects to /unauthorized, heading 'Access Denied', 'You don't have permission to view this page.' — this CONTRADICTS FRD Section 3/10, which lists Employee as an accessible role scoped to 'own allocations only'. This test currently fails against the FRD's stated requirement; treat a FAIL here as confirming the known defect, not an automation bug.

**Automation Hint**

GROUNDED live 2026-09-02 via reports/knowledge-base/dom-snapshots/DASH_EMP.json.

#### TC-DASH-022 — Employee role: 'Dashboard' link is entirely absent from the sidebar

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | AC1/AC2 — DEF-DASH-001 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture)

**Steps**

1. Log in as kashyap.patel@simformsolutions.com (empPage)
2. Observe the sidebar nav list

**Expected**

CONFIRMED DEFECT (DEF-DASH-001): sidebar shows only 'Employee' and 'Help & Support' — no 'Dashboard' entry at all, for a role the FRD lists as accessible.

#### TC-DASH-023 — Rapid double-click on the period filter option does not race/duplicate the data request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | edgeCases[4] |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Open the period filter
3. Click 'This Month' twice in rapid succession

**Expected**

KPI cards settle on a single consistent value for 'This Month' — no flicker between stale and fresh data, no duplicate/conflicting network calls causing a visibly wrong final state.

### Regression (26)

#### TC-DASH-037 — Regression: PM Projects Dashboard is unmodified by the new Dashboard module

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[PM Projects], FRD Section 2.2 note |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture)

**Steps**

1. Log in as hardik.trivedi@simformsolutions.com (pmPage)
2. Navigate to the existing PM Projects section (PMPROJ)
3. Verify it still renders project-level data as before

**Expected**

PM Projects Dashboard is present, unchanged, and unaffected by the new top-level Dashboard module, per FRD's explicit 'additive change only' note.

#### TC-DASH-038 — Regression: existing sidebar items below Dashboard keep their prior order

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC1, FRD Section 4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Read the full sidebar list order

**Expected**

Order is: Dashboard, Employee, Team, Requests Tracking, Projects, Department, Admin, (Help & Support) — Dashboard is the only new insertion, at position 1.

**Automation Hint**

GROUNDED live 2026-09-02 via DASH.json's captured sidebar list.

#### TC-DASH-039 — Regression: an employee's Dashboard row stays consistent with their Employee Details record

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[Employee Details] |
| **Automatable** | partial |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Pick an employee visible in the Dashboard's All Activity table
2. Navigate to Employee → Employee Details and open that same employee

**Expected**

Project name(s)/allocation data shown for that employee on the Dashboard are consistent with their Employee Details project allocations.

**Automation Hint**

PARTIAL — requires correlating a specific employee's name across two independently-owned modules; use a search on Employee Details by the exact name captured from the Dashboard row.

#### TC-DASH-040 — Regression: an Allocation Request approval surfaces as an Upcoming Allocation on the Dashboard

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[Allocation Requests] |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. MANUAL: create/approve a new allocation ticket in Allocation Requests (ALCTKT) with a future start date
2. Navigate to /dashboard and check the All Activity table for the new row

**Expected**

The newly-approved allocation appears in the Dashboard's All Activity table with Status 'Upcoming Allocation' and matching employee/project/date fields.

**Automation Hint**

MANUAL-only for this run — writing a new allocation ticket is a state-mutating cross-module action outside this pass's scope; automate once a disposable/test project+employee pairing is designated safe to allocate.

#### TC-DASH-041 — Regression: page refresh (F5) on /dashboard preserves the selected period filter within the session

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FRD Section 5 'persists during the session' |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Change the period filter to 'This Month'
3. Reload the page (F5)

**Expected**

Per FRD Section 5 ('The selected filter persists during the session until the user changes it'), the period filter is still 'This Month' after reload — or, if it resets to default, that is a gap worth flagging distinctly from a crash.

**Automation Hint**

NOTE: underlying persistence mechanism (sessionStorage vs URL param vs server-side) is unconfirmed — treat a reset-to-default outcome as a finding to report, not necessarily a hard failure, until product confirms intended behavior.

#### TC-DASH-042 — Regression: Dashboard KPI totals match the Allocation Requests module's own totals for the same scope/period

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[Allocation Requests], Regression: api-parity pattern |
| **Automatable** | partial |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note Dashboard's Total Allocation count for 'This Year'
2. Navigate to Allocation Requests and find an equivalent org-wide allocation count/total for the same period, if surfaced there

**Expected**

The two totals are consistent (same underlying data source), or any documented difference in definition (e.g. tickets vs. active allocations) is understood and does not indicate silent data drift.

**Automation Hint**

PARTIAL — Allocation Requests module may not expose a directly comparable aggregate; treat as best-effort cross-check, not a strict equality assertion.

#### TC-DASH-045 — API: Net Utilisation exactly equals Total Allocation minus Total Deallocation

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (API self-consistency) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview?duration=this_year&projectLimit=6 directly
2. Read data.summary.totalAllocatedHoursPerDay, totalDeallocatedHoursPerDay, netUtilizationHoursPerDay

**Expected**

netUtilizationHoursPerDay === totalAllocatedHoursPerDay - totalDeallocatedHoursPerDay, exactly (floating-point tolerance 0.01).

**Test Data**

- `duration`: this_year

**Automation Hint**

Stronger, API-level replacement for TC-DASH-007's UI-text-parsing approach — no rendering/rounding-display ambiguity.

#### TC-DASH-046 — API: netDirection field matches the actual sign of netUtilizationHoursPerDay

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity, FRD Section 9.2 directional indicator |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Read summary.netUtilizationHoursPerDay and summary.netDirection

**Expected**

netDirection === 'down' when netUtilizationHoursPerDay < 0; 'up' when > 0.

#### TC-DASH-047 — API: sum of trend.buckets[] allocation/deallocation counts equals summary counts exactly

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — chart/summary reconciliation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Sum trend.buckets[].allocationCount and trend.buckets[].deallocationCount across all 12 monthly buckets
3. Compare to summary.allocationCount / summary.deallocationCount

**Expected**

Sum of bucket allocationCount === summary.allocationCount; sum of bucket deallocationCount === summary.deallocationCount (exact integers, no rounding tolerance needed).

**Automation Hint**

GROUNDED live 2026-09-02: PMO/this_year had summary.allocationCount=2013, deallocationCount=4775 across 12 monthly buckets.

#### TC-DASH-048 — API: sum of trend.buckets[] hours reconciles with summary total hours

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — trend chart vs KPI card |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Sum trend.buckets[].allocatedHoursPerDay and .deallocatedHoursPerDay
3. Compare to summary.totalAllocatedHoursPerDay / totalDeallocatedHoursPerDay

**Expected**

Bucket-summed hours match the summary totals within a small floating-point tolerance (0.5 hrs, to allow for per-bucket rounding).

#### TC-DASH-049 — API: each trend bucket's netHoursPerDay equals its own allocated minus deallocated

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — per-bucket arithmetic |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. For every bucket in trend.buckets[], compute allocatedHoursPerDay - deallocatedHoursPerDay

**Expected**

Every bucket's netHoursPerDay equals its own allocatedHoursPerDay - deallocatedHoursPerDay (tolerance 0.01), for all 12 buckets independently — not just in aggregate.

#### TC-DASH-050 — API: Allocation Type Distribution totals and per-type allocation counts reconcile with summary

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — donut chart vs KPI card, FRD Section 6.3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Read allocationTypeDistribution.totalHoursPerDay and .slices[]

**Expected**

totalHoursPerDay === summary.totalAllocatedHoursPerDay; sum of slices[].hoursPerDay ≈ totalHoursPerDay (tolerance 0.1); sum of slices[].allocationCount === summary.allocationCount (exact).

**Automation Hint**

GROUNDED live 2026-09-02: FIXED allocationCount=1006 + DYNAMIC allocationCount=1007 = 2013 = summary.allocationCount, confirmed exact.

#### TC-DASH-051 — API: each allocation-type slice's sharePercentage matches its own hours-over-total calculation

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — percentage computation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. For each slice, compute hoursPerDay / totalHoursPerDay * 100

**Expected**

Each slice's sharePercentage matches the computed value within 0.5 percentage points.

#### TC-DASH-052 — API: Project Breakdown totals reconcile and items are sorted strictly descending by hours

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — project bar chart vs KPI card, AC7 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview
2. Read projectBreakdown.totalAllocatedHoursPerDay, .items[], .otherProjects

**Expected**

totalAllocatedHoursPerDay === summary.totalAllocatedHoursPerDay; sum of items[].allocatedHoursPerDay + otherProjects.allocatedHoursPerDay ≈ totalAllocatedHoursPerDay (tolerance 0.5); items[] are in strictly non-increasing order by allocatedHoursPerDay.

**Automation Hint**

API-level, authoritative version of the UI-level TC-DASH-009 sort check — no chart-label-parsing ambiguity.

#### TC-DASH-054 — UI vs API parity: KPI cards (allocation/deallocation hours+counts, net) exactly match the overview API

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | AC4, Regression: data-integrity — UI/API parity |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard (default This Year)
2. Parse Total Allocation hours/count, Total Deallocation hours/count, Net Utilisation from the rendered KPI cards
3. Call GET /api/v1/dashboard/overview?duration=this_year&projectLimit=6 directly
4. Compare every parsed UI value to the corresponding API field

**Expected**

UI Total Allocation hours === API summary.totalAllocatedHoursPerDay (tolerance 0.5 for display rounding); UI allocation count === API allocationCount exactly; same for Deallocation hours/count; UI Net Utilisation === API netUtilizationHoursPerDay.

**Automation Hint**

This is the headline 'is the displayed data actually correct' test — everything else in this batch either checks API self-consistency or feeds this comparison.

#### TC-DASH-055 — UI vs API parity: donut chart Fixed/Dynamic percentages match allocationTypeDistribution

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC6, Regression: data-integrity — UI/API parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Parse Fixed%/Dynamic% from the donut chart's rendered text
3. Call GET /api/v1/dashboard/overview directly
4. Compare to allocationTypeDistribution.slices[]

**Expected**

UI Fixed% and Dynamic% match the API's corresponding slices[].sharePercentage within 1 percentage point (display rounds to 2 decimals, API may carry more precision).

#### TC-DASH-056 — UI vs API parity: bar chart top-project hours match projectBreakdown.items in the same order

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC7, Regression: data-integrity — UI/API parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Parse per-project hour values from the bar chart (excluding the rollup bucket)
3. Call GET /api/v1/dashboard/overview directly
4. Compare to projectBreakdown.items[].allocatedHoursPerDay in the same order

**Expected**

UI-parsed per-project hour values equal the API's items[].allocatedHoursPerDay, in the same rendered order, within a 0.5hr display-rounding tolerance.

#### TC-DASH-057 — UI vs API parity: All Activity table's first row matches the activity API's first item exactly

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC9, Regression: data-integrity — table vs API parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Read the first row's Employee Name, Projects, Allocation %, Status cells
3. Call GET /api/v1/dashboard/activity?duration=this_year&page=1&limit=100 directly
4. Compare to items[0]'s employee.name, project.name, allocationPercentage/allocationType, status

**Expected**

UI first row's Employee Name === API items[0].employee.name; Projects cell contains items[0].project.name; Allocation % cell matches items[0].allocationPercentage (or 'Dynamic' when allocationType==='DYNAMIC'); Status cell corresponds to items[0].status (e.g. 'upcoming_allocation' -> 'Upcoming Allocation').

**Automation Hint**

Assumes the table's default sort order matches the API's default (page=1) order — if the UI applies a different default client-side sort, compare against the UI's own currently-displayed sort key instead of assuming row 1 == API item 1.

#### TC-DASH-069 — Export respects the currently selected period filter, not always the default

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | AC3, AC12, Regression: data-integrity — export vs filter consistency |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Select 'This Week'
3. Export as CSV and read its Summary section's Period start/end
4. Select 'This Year'
5. Export as CSV again and read its Summary section's Period start/end

**Expected**

The two exports have different Period start/end values, each matching the filter that was selected at export time — export is not silently always exporting the default/full-year range.

**Automation Hint**

GROUNDED live 2026-09-02: exported filename itself also encodes the period, e.g. 'dashboard-2026-01-01-to-2026-12-31.csv' for This Year.

#### TC-DASH-070 — Exported CSV Summary section exactly matches the overview API for the same filter

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC4, AC12, Regression: data-integrity — export vs API parity |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard (default This Year)
2. Call GET /api/v1/dashboard/overview directly
3. Export as CSV and parse its '# Summary' section

**Expected**

Every CSV Summary metric (Total allocated hours/day, Total de-allocated hours/day, Net utilization hours/day, Allocation count, De-allocation count, Period start/end) exactly matches the corresponding API field.

**Automation Hint**

GROUNDED live 2026-09-02: CSV Summary section is Metric/Value pairs — parsed via DashboardPage.exportAndParseCsv().

#### TC-DASH-071 — Exported CSV Trend section exactly matches the overview API's monthly buckets

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC5, Regression: data-integrity — export vs API parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview directly
2. Export as CSV and parse its '# Trend' section
3. Compare each month row

**Expected**

Every CSV Trend row's Allocated/De-allocated/Net Hours-per-Day and Allocations/De-allocations count exactly matches the API's corresponding trend bucket, for all 12 months.

#### TC-DASH-072 — Exported CSV Allocation Type section exactly matches the overview API's distribution

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC6, Regression: data-integrity — export vs API parity |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview directly
2. Export as CSV and parse its '# Allocation Type' section

**Expected**

FIXED and DYNAMIC rows' Hours/Day, Allocations count, and Share % exactly match the API's allocationTypeDistribution.slices[].

#### TC-DASH-073 — Exported CSV Hours by Project section sums to the same total as the Summary section (full, uncapped list)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC7, AC12, Regression: data-integrity — full export reconciliation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Export as CSV and parse its '# Hours by Project' and '# Summary' sections
2. Sum every project row's Allocated Hours/Day

**Expected**

The sum of ALL project rows' Allocated Hours/Day equals the Summary's 'Total allocated hours/day' (tolerance 0.5hr) — the export lists every project individually (not capped to a top-N-plus-rollup like the on-screen chart or the overview API's projectBreakdown), so this is a stronger check than TC-DASH-052/056.

**Automation Hint**

GROUNDED live 2026-09-02: confirmed the export's Hours by Project section has ~400 individual project rows, not the 6-plus-rollup shape the UI/overview-API show.

#### TC-DASH-074 — Exported CSV Hours by Project row count matches the overview API's totalProjectCount

| Field | Value |
| --- | --- |
| **Tags** | @regression, @boundary |
| **Requirement Ref** | AC7, Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/overview directly, read projectBreakdown.totalProjectCount
2. Export as CSV and count rows in the '# Hours by Project' section

**Expected**

The CSV's Hours by Project row count equals projectBreakdown.totalProjectCount exactly.

#### TC-DASH-075 — Exported CSV All Activity row count exactly matches the activity API's total field (full export, not paginated)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @boundary |
| **Requirement Ref** | AC9, AC12, Regression: data-integrity — full export reconciliation |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/activity directly, read data.total
2. Export as CSV and count rows in the '# All Activity' section

**Expected**

The CSV's All Activity row count equals the activity API's total field exactly — the export contains every record, unlike the paginated UI table (see TC-DASH-026/058).

**Automation Hint**

GROUNDED live 2026-09-02: confirmed exactly 5939 CSV data rows === activity API's total for PMO/this_year.

#### TC-DASH-076 — Exported CSV All Activity row-level fields match the activity API for a spot-checked record

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC9, AC12, Regression: data-integrity — export row-level parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Call GET /api/v1/dashboard/activity directly, take items[0]
2. Export as CSV, find the matching row by employee name + project name in the '# All Activity' section

**Expected**

The matching CSV row's Allocation Type, Allocation %, Hours/Day, Log Hours, Status, Start Date, and End Date all match the API item's corresponding fields exactly.

**Automation Hint**

CSV columns confirmed live: Employee, Employee Code, Designation, Department, Project, Allocation Type, Allocation %, Hours/Day, Log Hours, Status, Start Date, End Date — richer than the UI table (includes Employee Code/Designation/Department, not shown on-screen).

### Security (9)

#### TC-DASH-030 — PMO sees strictly larger (org-wide) KPI totals than PM/TM/Employee-scoped sessions for the same period

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | AC13, roleMatrix[] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open 4 browser contexts: primaryPage (PMO) + pmPage (PM) + tmPage (TM) + testUserPage

**Steps**

1. Load /dashboard as primaryPage, pmPage, tmPage, testUserPage (all default 'This Year')
2. Parse Total Allocation hours for each

**Expected**

PMO total > TM total > PM/testUser totals (or at minimum PMO total is the maximum across all 4) — confirms server-side role scoping, not a client-side filter over the same payload.

**Test Data**

- `period`: This Year

**Automation Hint**

GROUNDED live 2026-09-02: PMO=3,231hrs/2013 allocations, TM=433hrs/234, PM=10hrs/6, testUser(punit)=6hrs/8 — use these as a sanity floor, not an exact-match assertion (data changes over time).

#### TC-DASH-031 — Department filter is present for PMO/TM but absent for PM

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | AC11, roleMatrix[PM].cannot |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage + pmPage

**Steps**

1. Load /dashboard as primaryPage (PMO)
2. Load /dashboard as pmPage (PM)
3. Check for the 'Filter the dashboard by department' combobox in each

**Expected**

Combobox is present for PMO; absent for PM — matches FRD's 'PM = own projects only, no department concept' scoping.

**Automation Hint**

GROUNDED live: DASH.json (PMO) has the combobox; DASH_PM.json does not.

#### TC-DASH-032 — Department filter is present for TM but absent for the Employee-equivalent test user

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | AC11, roleMatrix[Employee] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: tmPage + testUserPage

**Steps**

1. Load /dashboard as tmPage
2. Load /dashboard as testUserPage
3. Check for the department filter combobox in each

**Expected**

Combobox present for TM; absent for testUserPage — matches FRD's Employee 'own allocations only' scoping (no department dimension to filter).

**Automation Hint**

GROUNDED live: DASH_TM.json has the combobox; DASH_PUNIT.json does not.

#### TC-DASH-034 — EM role data scoping (own department(s) only) — CONFIRMED live via kunal.jadeja@simformsolutions.com

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[EM] — UNVERIFIED |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open three browser contexts: primaryPage + emPage (kunal.jadeja@simformsolutions.com) + tmPage

**Steps**

1. MANUAL: obtain an EM-role test account
2. Verify /dashboard scopes data to the EM's own department(s), matching TM's observed scoping pattern

**Expected**

CONFIRMED (2026-09-02): EM total allocation hours <= PMO org-wide total; department filter is present for EM, matching TM's own-department(s) scoping shape.

#### TC-DASH-035 — CSM role data scoping (assigned projects only) — CONFIRMED live via tarun.sharma@simformsolutions.com

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[CSM] — UNVERIFIED |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open three browser contexts: primaryPage + csmPage (tarun.sharma@simformsolutions.com) + pmPage

**Steps**

1. MANUAL: obtain a CSM-role test account
2. Verify /dashboard scopes data to only the CSM's assigned projects

**Expected**

CONFIRMED (2026-09-02): CSM total allocation hours <= PMO org-wide total; department filter is absent for CSM, matching PM's own-projects scoping shape.

#### TC-DASH-036 — Export Data is available to every scoped role and does not leak out-of-scope data

| Field | Value |
| --- | --- |
| **Tags** | @security, @functional |
| **Requirement Ref** | AC12, FRD Section 11 'must respect role-based data scoping' |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Open two browser contexts: primaryPage (PMO) + pmPage (PM)

**Steps**

1. Trigger Export Data as pmPage (PM, own-projects scope)
2. Inspect the exported response/file for any row outside PM's own projects

**Expected**

Exported data respects the same role scoping as the on-screen KPIs/table — no PMO-only/other-role rows present in a PM's export.

**Automation Hint**

PARTIAL — exact export file format/schema is undocumented (FRD Section 11 still open on OQ-D03); assert on whatever response/file the trigger produces rather than a fixed schema.

#### TC-DASH-060 — API-level role scoping: every role's overview summary is server-side scoped, not just hidden in the UI

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | AC13, DEF-DASH-001 context, Regression: rbac |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open six browser contexts: primaryPage + pmPage + tmPage + testUserPage + emPage + csmPage

**Steps**

1. Call GET /api/v1/dashboard/overview?duration=this_year&projectLimit=6 directly (bypassing the UI) using each role's own request context: primaryPage (PMO), pmPage (PM), tmPage (TM), testUserPage, emPage (EM), csmPage (CSM)
2. Compare summary.totalAllocatedHoursPerDay across all six

**Expected**

PMO's total is the maximum across all six; every other role's total is strictly <= PMO's — proving scoping is enforced by the API itself, not merely by what the frontend chooses to render.

**Automation Hint**

Stronger, direct-API version of TC-DASH-030/034/035 — those parsed UI text; this hits the real endpoint with each role's own session cookies/token, ruling out 'the API returns everything and the UI just hides it' as an explanation for the observed scoping.

#### TC-DASH-061 — Employee role: the real dashboard overview API returns 200 with correctly own-scoped data — DEF-DASH-001 is frontend-only, not a backend RBAC gap

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | DEF-DASH-001, Step 6 RBAC pattern (API 403) (merged TC-DASH-033) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture)

**Steps**

1. Log in as kashyap.patel@simformsolutions.com (empPage)
2. Call GET https://simerp-dev-api.simform.solutions/api/v1/dashboard/overview?duration=this_year&projectLimit=6 directly using empPage's own request context

**Expected**

CONFIRMED (2026-09-02, revised from an earlier wrong assumption): API returns 200 with correctly Employee-scoped data (own allocations only, e.g. totalAllocatedHoursPerDay=0, deallocationCount=2 for kashyap.patel) — far smaller than PMO org-wide scale. This proves the backend already implements the FRD-intended Employee scope correctly and is willing to serve it; DEF-DASH-001 is a frontend-only bug (missing nav link + an overly broad route guard), not a backend access-control gap. No data-exposure/IDOR risk.

**Automation Hint**

Supersedes TC-DASH-033 (merged). Root-cause refinement: makes the Zoho bug more actionable (frontend fix only, no backend change needed).

#### TC-DASH-077 — Export respects role-based scoping at the content level, not just the trigger

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | FRD Section 11 'must respect role-based data scoping', AC13 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage (PMO) + pmPage (PM)

**Steps**

1. Export as CSV as primaryPage (PMO)
2. Export as CSV as pmPage (PM)
3. Compare the two exports' Summary 'Total allocated hours/day' and All Activity row counts

**Expected**

PM's exported totals and row count are strictly smaller than PMO's, and PM's All Activity rows contain only PM-scoped employees/projects — proving export scoping is enforced in the actual file content, not just that the Export button is present/absent per role (extends TC-DASH-036).

**Automation Hint**

This is the strongest form of the export-scoping check — earlier tests (TC-DASH-036) only verified the export trigger fired without error; this verifies the downloaded file's actual content is correctly scoped.

### Smoke (3)

#### TC-DASH-001 — Dashboard is the first sidebar item, above Employee, and loads for PMO

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | AC1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage)
2. Observe the left sidebar nav list
3. Click the 'Dashboard' link

**Expected**

Sidebar's first listitem is the 'Dashboard' link; the next listitem is 'Employee'. Clicking it navigates to /dashboard and renders heading 'Dashboard' with the KPI cards visible.

#### TC-DASH-002 — Dashboard renders all 4 KPI cards and 4 charts for PMO on first load

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | AC4-AC8 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Observe KPI cards and chart section headings

**Expected**

Total Allocation, Total Deallocation and Net Utilisation KPI values are visible; 'Allocation vs De-allocation Trend', 'Allocation Type Distribution', 'Allocated Hours by Project', and 'Net Utilisation Breakdown' chart sections are all visible.

#### TC-DASH-003 — Export Data button triggers an export without error (smoke)

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | AC12, critical path 3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to /dashboard
2. Click 'Export dashboard data' ('Export Data')

**Expected**

No uncaught page error/console error occurs; either a file download event fires or a matching export API response (2xx) is observed.

**Automation Hint**

Use page.waitForEvent('download', {timeout}).catch(()=>null) raced against page.waitForResponse(/export/i).catch(()=>null); assert at least one resolved OR no error toast appeared.
