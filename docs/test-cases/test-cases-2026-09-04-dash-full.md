# Dashboard — Test Cases

**Total test cases:** 139  
**Modules covered:** Dashboard  
**Source:** `reports/test-cases/cases-2026-09-04-DASH-full.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| regression | 32 | 23.0% |
| boundary | 31 | 22.3% |
| functional | 30 | 21.6% |
| security | 21 | 15.1% |
| negative | 11 | 7.9% |
| accessibility | 8 | 5.8% |
| integration | 3 | 2.2% |
| smoke | 3 | 2.2% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 64 | 46.0% |
| medium | 50 | 36.0% |
| critical | 18 | 12.9% |
| low | 7 | 5.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 83 | 59.7% |
| minor | 37 | 26.6% |
| critical | 19 | 13.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 66 | 47.5% |
| live-DOM-grounded | 60 | 43.2% |
| regression-derived | 9 | 6.5% |
| requirement-unclear | 2 | 1.4% |
| confirmed-defect | 1 | 0.7% |
| team-baseline-needed | 1 | 0.7% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| live-DOM-grounded | 60 | 43.2% |
| requirement-grounded | 54 | 38.8% |
| inferred | 15 | 10.8% |
| speculative | 6 | 4.3% |
| requirement-unclear | 2 | 1.4% |
| confirmed-defect | 1 | 0.7% |
| team-baseline-needed | 1 | 0.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 132 | 95.0% |
| partial | 4 | 2.9% |
| No | 3 | 2.2% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @regression | 41 | 29.5% |
| @functional | 37 | 26.6% |
| @boundary | 35 | 25.2% |
| @negative | 23 | 16.5% |
| @security | 11 | 7.9% |
| @a11y | 8 | 5.8% |
| @smoke | 3 | 2.2% |
| @needs-verification | 1 | 0.7% |

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
| [TC-DASH-078](#tc-dash-078-axe-scan-of-dashboard-reports-no-critical-or-serious-accessibility-violations) | Axe scan of /dashboard reports no critical or serious accessibility violations | Dashboard | accessibility | high |
| [TC-DASH-079](#tc-dash-079-all-4-charts-expose-a-text-alternative-chart-data-is-not-conveyed-by-canvas-svg-pixels-alone) | All 4 charts expose a text alternative — chart data is not conveyed by canvas/SVG pixels alone | Dashboard | accessibility | high |
| [TC-DASH-080](#tc-dash-080-period-filter-is-fully-operable-by-keyboard-alone-tab-enter-arrows-escape) | Period filter is fully operable by keyboard alone (Tab, Enter, Arrows, Escape) | Dashboard | accessibility | high |
| [TC-DASH-081](#tc-dash-081-all-activity-table-uses-real-table-semantics-and-announces-sort-state-via-aria-sort) | All Activity table uses real table semantics and announces sort state via aria-sort | Dashboard | accessibility | high |
| [TC-DASH-082](#tc-dash-082-net-utilisation-sign-is-conveyed-by-text-not-colour-alone) | Net Utilisation sign is conveyed by text, not colour alone | Dashboard | accessibility | medium |
| [TC-DASH-083](#tc-dash-083-export-confirmation-dialog-is-a-focus-trapped-modal-with-an-accessible-name-and-escape-to-close) | Export confirmation dialog is a focus-trapped modal with an accessible name and Escape-to-close | Dashboard | accessibility | medium |
| [TC-DASH-084](#tc-dash-084-every-interactive-dashboard-control-has-a-visible-focus-indicator) | Every interactive dashboard control has a visible focus indicator | Dashboard | accessibility | medium |
| [TC-DASH-085](#tc-dash-085-dashboard-has-one-h1-a-logical-heading-order-and-named-landmark-regions) | Dashboard has one h1, a logical heading order, and named landmark regions | Dashboard | accessibility | medium |
| [TC-DASH-086](#tc-dash-086-export-dialog-offers-both-csv-and-excel-formats-plus-an-explicit-cancel) | Export dialog offers both CSV and Excel formats plus an explicit cancel | Dashboard | functional | high |
| [TC-DASH-087](#tc-dash-087-excel-export-downloads-a-valid-xlsx-containing-the-same-5-sections-as-the-csv-export) | Excel export downloads a valid .xlsx containing the same 5 sections as the CSV export | Dashboard | functional | high |
| [TC-DASH-088](#tc-dash-088-excel-export-summary-values-exactly-match-the-overview-api-for-the-same-filter) | Excel export Summary values exactly match the overview API for the same filter | Dashboard | regression | high |
| [TC-DASH-089](#tc-dash-089-cancelling-the-export-dialog-downloads-nothing-and-leaves-the-dashboard-state-untouched) | Cancelling the export dialog downloads nothing and leaves the dashboard state untouched | Dashboard | negative | medium |
| [TC-DASH-090](#tc-dash-090-export-in-a-zero-data-scope-produces-a-headers-only-file-not-a-corrupt-or-empty-download) | Export in a zero-data scope produces a headers-only file, not a corrupt or empty download | Dashboard | boundary | medium |
| [TC-DASH-091](#tc-dash-091-export-honours-the-department-filter-not-just-the-period-filter) | Export honours the Department filter, not just the period filter | Dashboard | regression | high |
| [TC-DASH-092](#tc-dash-092-search-with-no-matches-shows-an-explicit-empty-state-and-keeps-the-table-headers) | Search with no matches shows an explicit empty state and keeps the table headers | Dashboard | negative | high |
| [TC-DASH-093](#tc-dash-093-search-input-containing-a-script-payload-is-rendered-as-literal-text-no-xss-execution) | Search input containing a script payload is rendered as literal text — no XSS execution | Dashboard | security | critical |
| [TC-DASH-094](#tc-dash-094-search-with-sql-meta-characters-returns-a-safe-response-no-500-and-no-database-error-text) | Search with SQL meta-characters returns a safe response — no 500 and no database error text | Dashboard | security | high |
| [TC-DASH-095](#tc-dash-095-search-accepts-a-256-character-string-without-crashing) | Search accepts a 256+ character string without crashing | Dashboard | boundary | medium |
| [TC-DASH-096](#tc-dash-096-search-is-case-insensitive-and-matches-partial-substrings-across-both-employee-name-and-projects) | Search is case-insensitive and matches partial substrings across both Employee Name and Projects | Dashboard | functional | high |
| [TC-DASH-097](#tc-dash-097-search-tolerates-surrounding-whitespace-and-non-ascii-characters) | Search tolerates surrounding whitespace and non-ASCII characters | Dashboard | boundary | medium |
| [TC-DASH-098](#tc-dash-098-department-status-search-combine-as-and-each-narrows-the-other-none-replaces-the-other) | Department + Status + Search combine as AND — each narrows the other, none replaces the other | Dashboard | functional | critical |
| [TC-DASH-099](#tc-dash-099-clearing-the-search-restores-the-full-row-set-for-the-active-period-and-department) | Clearing the search restores the full row set for the active period and department | Dashboard | functional | high |
| [TC-DASH-100](#tc-dash-100-changing-the-period-keeps-the-department-selection-applied) | Changing the period keeps the Department selection applied | Dashboard | functional | high |
| [TC-DASH-101](#tc-dash-101-resetting-department-to-all-departments-restores-org-wide-figures-for-pmo) | Resetting Department to 'All Departments' restores org-wide figures for PMO | Dashboard | functional | high |
| [TC-DASH-102](#tc-dash-102-a-department-with-no-allocations-in-the-selected-period-shows-zeroed-kpis-and-an-empty-table-not-an-error) | A department with no allocations in the selected period shows zeroed KPIs and an empty table, not an error | Dashboard | boundary | medium |
| [TC-DASH-103](#tc-dash-103-switching-filters-never-leaves-stale-pre-filter-data-on-screen) | Switching filters never leaves stale pre-filter data on screen | Dashboard | negative | high |
| [TC-DASH-104](#tc-dash-104-filter-state-in-the-url-a-dashboard-link-is-shareable-or-the-gap-is-documented) | Filter state in the URL — a dashboard link is shareable, or the gap is documented | Dashboard | functional | medium |
| [TC-DASH-105](#tc-dash-105-browser-back-after-a-period-change-returns-to-the-previous-filter-state) | Browser Back after a period change returns to the previous filter state | Dashboard | regression | medium |
| [TC-DASH-106](#tc-dash-106-navigating-away-to-employee-and-back-re-fetches-no-stale-kpi-values) | Navigating away to Employee and back re-fetches — no stale KPI values | Dashboard | regression | high |
| [TC-DASH-107](#tc-dash-107-after-logout-direct-navigation-to-dashboard-redirects-to-login-and-renders-no-cached-data) | After logout, direct navigation to /dashboard redirects to login and renders no cached data | Dashboard | security | critical |
| [TC-DASH-108](#tc-dash-108-an-invalid-or-expired-session-token-on-dashboard-triggers-re-auth-without-a-partial-data-render) | An invalid or expired session token on /dashboard triggers re-auth without a partial data render | Dashboard | security | high |
| [TC-DASH-109](#tc-dash-109-default-landing-screen-after-login-record-the-actual-behaviour-frd-oq-d02-still-open) | Default landing screen after login — record the actual behaviour (FRD OQ-D02 still open) | Dashboard | functional | medium |
| [TC-DASH-110](#tc-dash-110-all-activity-loads-further-rows-on-demand-and-each-batch-matches-the-activity-api-s-page-n) | All Activity loads further rows on demand and each batch matches the activity API's page N | Dashboard | functional | critical |
| [TC-DASH-111](#tc-dash-111-paging-through-all-activity-yields-no-duplicated-and-no-skipped-records) | Paging through All Activity yields no duplicated and no skipped records | Dashboard | boundary | high |
| [TC-DASH-112](#tc-dash-112-rapid-scrolling-does-not-fire-duplicate-requests-for-the-same-activity-page) | Rapid scrolling does not fire duplicate requests for the same activity page | Dashboard | boundary | medium |
| [TC-DASH-113](#tc-dash-113-sorting-a-column-sorts-the-entire-dataset-server-side-not-just-the-rows-already-loaded) | Sorting a column sorts the entire dataset server-side, not just the rows already loaded | Dashboard | functional | high |
| [TC-DASH-114](#tc-dash-114-activity-api-clamps-an-out-of-range-limit-instead-of-honouring-it) | Activity API clamps an out-of-range limit instead of honouring it | Dashboard | boundary | medium |
| [TC-DASH-115](#tc-dash-115-dashboard-overview-endpoint-returns-401-without-an-authorization-header) | Dashboard overview endpoint returns 401 without an Authorization header | Dashboard | security | critical |
| [TC-DASH-116](#tc-dash-116-a-scope-widening-query-param-does-not-widen-the-response-beyond-the-caller-s-authority) | A scope-widening query param does not widen the response beyond the caller's authority | Dashboard | security | critical |
| [TC-DASH-117](#tc-dash-117-another-role-s-record-identifier-cannot-be-read-through-the-dashboard-activity-endpoint) | Another role's record identifier cannot be read through the dashboard activity endpoint | Dashboard | security | critical |
| [TC-DASH-118](#tc-dash-118-malformed-or-injected-date-params-are-validated-no-500-and-no-stack-trace) | Malformed or injected date params are validated — no 500 and no stack trace | Dashboard | security | high |
| [TC-DASH-119](#tc-dash-119-projectlimit-is-validated-huge-and-negative-values-do-not-produce-an-unbounded-response-or-a-crash) | projectLimit is validated — huge and negative values do not produce an unbounded response or a crash | Dashboard | security | medium |
| [TC-DASH-120](#tc-dash-120-dashboard-api-responses-are-not-cached-in-a-way-that-outlives-the-session) | Dashboard API responses are not cached in a way that outlives the session | Dashboard | security | medium |
| [TC-DASH-121](#tc-dash-121-kpi-hours-use-a-thousands-separator-and-a-consistent-unit-matching-the-live-captured-format) | KPI hours use a thousands separator and a consistent unit, matching the live-captured format | Dashboard | functional | medium |
| [TC-DASH-122](#tc-dash-122-fractional-hours-round-consistently-across-kpi-card-chart-and-export) | Fractional hours round consistently across KPI card, chart and export | Dashboard | boundary | high |
| [TC-DASH-123](#tc-dash-123-negative-net-utilisation-shows-an-explicit-minus-sign-and-agrees-with-the-api-s-netdirection) | Negative Net Utilisation shows an explicit minus sign and agrees with the API's netDirection | Dashboard | boundary | high |
| [TC-DASH-124](#tc-dash-124-period-boundaries-are-timezone-consistent-a-record-on-the-first-or-last-day-is-counted-exactly-once) | Period boundaries are timezone-consistent — a record on the first or last day is counted exactly once | Dashboard | boundary | high |
| [TC-DASH-125](#tc-dash-125-trend-chart-bucket-labels-match-the-granularity-the-api-actually-returned-for-each-period-option) | Trend chart bucket labels match the granularity the API actually returned for each period option | Dashboard | boundary | medium |
| [TC-DASH-126](#tc-dash-126-trend-chart-tooltip-values-match-the-api-bucket-for-the-hovered-x-position) | Trend chart tooltip values match the API bucket for the hovered x-position | Dashboard | functional | high |
| [TC-DASH-127](#tc-dash-127-donut-segment-legend-hover-shows-fixed-and-dynamic-hours-matching-allocationtypedistribution) | Donut segment/legend hover shows Fixed and Dynamic hours matching allocationTypeDistribution | Dashboard | functional | medium |
| [TC-DASH-128](#tc-dash-128-net-utilisation-breakdown-bars-use-the-same-buckets-as-the-trend-chart) | Net Utilisation Breakdown bars use the same buckets as the trend chart | Dashboard | functional | medium |
| [TC-DASH-129](#tc-dash-129-a-single-bucket-period-still-renders-chart-axes-and-labels-legibly) | A single-bucket period still renders chart axes and labels legibly | Dashboard | boundary | medium |
| [TC-DASH-130](#tc-dash-130-a-loading-state-is-shown-while-the-overview-call-is-in-flight-and-is-always-replaced) | A loading state is shown while the overview call is in flight and is always replaced | Dashboard | functional | high |
| [TC-DASH-131](#tc-dash-131-a-slow-api-keeps-the-loading-state-and-eventually-renders-no-premature-empty-state) | A slow API keeps the loading state and eventually renders — no premature empty state | Dashboard | negative | medium |
| [TC-DASH-132](#tc-dash-132-an-activity-api-failure-degrades-only-the-table-kpi-cards-and-charts-still-render) | An activity API failure degrades only the table — KPI cards and charts still render | Dashboard | negative | high |
| [TC-DASH-133](#tc-dash-133-pmo-org-wide-dashboard-reaches-first-meaningful-render-within-an-agreed-budget) | PMO org-wide dashboard reaches first meaningful render within an agreed budget | Dashboard | regression | medium |
| [TC-DASH-134](#tc-dash-134-three-quick-period-switches-render-only-the-last-selection-no-out-of-order-response-wins) | Three quick period switches render only the last selection — no out-of-order response wins | Dashboard | boundary | high |
| [TC-DASH-135](#tc-dash-135-em-sees-exactly-their-own-departments-in-the-department-filter-no-others) | EM sees exactly their own departments in the Department filter — no others | Dashboard | security | critical |
| [TC-DASH-136](#tc-dash-136-department-filter-option-contents-are-correctly-scoped-for-every-role-that-has-the-filter) | Department filter option contents are correctly scoped for every role that has the filter | Dashboard | security | high |
| [TC-DASH-137](#tc-dash-137-till-date-period-option-is-absent-documents-the-frd-section-6-1-gap) | 'Till Date' period option is absent — documents the FRD Section 6.1 gap | Dashboard | boundary | low |
| [TC-DASH-138](#tc-dash-138-def-dash-001-retest-employee-sidebar-link-and-dashboard-access-once-the-frontend-fix-lands) | DEF-DASH-001 retest — Employee sidebar link and /dashboard access once the frontend fix lands | Dashboard | regression | critical |
| [TC-DASH-139](#tc-dash-139-upcoming-changes-results-reconcile-with-the-allocation-requests-module-s-approved-future-records) | Upcoming Changes results reconcile with the Allocation Requests module's approved future records | Dashboard | integration | high |
| [TC-DASH-140](#tc-dash-140-all-kpi-cards-and-charts-remain-visible-at-1280x720-and-1440x900-without-page-level-horizontal-scroll) | All KPI cards and charts remain visible at 1280x720 and 1440x900 without page-level horizontal scroll | Dashboard | boundary | medium |
| [TC-DASH-141](#tc-dash-141-all-activity-table-scrolls-inside-its-own-container-the-page-body-never-scrolls-horizontally) | All Activity table scrolls inside its own container — the page body never scrolls horizontally | Dashboard | boundary | medium |

---

## Dashboard

139 test cases.

### Accessibility (8)

#### TC-DASH-078 — Axe scan of /dashboard reports no critical or serious accessibility violations

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | AC2 + qa-conventions a11y rule (module had zero a11y cases before this pass) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO and wait for KPI cards + all 4 charts to render
2. Run an @axe-core/playwright AxeBuilder scan against the whole page
3. Filter results to impact 'critical' and 'serious'

**Expected**

Zero violations at critical/serious impact. Any moderate/minor findings are reported but do not fail the test.

**Test Data**

- `impactsFailed`: critical, serious

**Automation Hint**

Use primaryPage fixture. new AxeBuilder({page}).analyze(); assert violations.filter(v => ['critical','serious'].includes(v.impact)) is empty. Requires @axe-core/playwright to be installed.

#### TC-DASH-079 — All 4 charts expose a text alternative — chart data is not conveyed by canvas/SVG pixels alone

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | AC5/AC6/AC7/AC8 + a11y |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO
2. Inspect each chart container: Allocation vs De-allocation Trend, Allocation Type Distribution, Allocated Hours by Project, Net Utilisation Breakdown
3. For each, look for an accessible name (aria-label / aria-labelledby / <title> in SVG / role='img' + label) and a data table or aria-describedby summary

**Expected**

Every one of the 4 charts has a non-empty accessible name. At least the numeric values are reachable by a screen reader — either as SVG <text> nodes, a visually-hidden table, or aria-describedby text. A chart whose only representation is an unlabelled <canvas> is a violation.

**Automation Hint**

Use primaryPage fixture. Reuse dashboardPage.trendChart / allocationTypeDonut / projectBarChart / netUtilisationBreakdownChart locators; assert (await el.getAttribute('aria-label')) is truthy or an inner accessible-name source exists.

#### TC-DASH-080 — Period filter is fully operable by keyboard alone (Tab, Enter, Arrows, Escape)

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | AC3 + a11y |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard and press Tab until 'Change the dashboard period' receives focus
2. Press Enter (or Space) to open the popover
3. Press ArrowDown/ArrowUp to move through the 6 options
4. Press Enter on 'This Month'
5. Reopen the popover and press Escape

**Expected**

The button is reachable by Tab and shows a visible focus ring. Enter/Space opens the popover and moves focus into it. Arrow keys move the active option. Enter applies 'This Month' (button label updates, data refreshes). Escape closes the popover and returns focus to the trigger button. No mouse used at any point.

**Automation Hint**

Use primaryPage fixture. Keyboard-only: page.keyboard.press('Tab'/'Enter'/'ArrowDown'/'Escape'); assert dashboardPage.periodFilterBtn is focused after Escape via expect(locator).toBeFocused().

#### TC-DASH-081 — All Activity table uses real table semantics and announces sort state via aria-sort

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | AC9 + a11y |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard and scroll to the All Activity table
2. Inspect the table element's role and its header cells
3. Click the 'Hrs / Day' column header once, then again
4. Read the aria-sort attribute on that header after each click

**Expected**

The table exposes role='table' (or a native <table>) with role='columnheader' header cells carrying the 8 documented column names. After the first click aria-sort is 'ascending', after the second 'descending' — not absent, and not conveyed only by an arrow glyph.

**Automation Hint**

Use primaryPage fixture. dashboardPage.allActivityTable.getByRole('columnheader'); assert count === 8 and aria-sort flips. Pairs with the existing TC-DASH-011 which only checks the visual sort.

#### TC-DASH-082 — Net Utilisation sign is conveyed by text, not colour alone

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | AC4 + WCAG 1.4.1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO (Net Utilisation is currently negative, -11,126hrs)
2. Read the accessible text content of the Net Utilisation KPI card
3. Re-render the page in a forced-colours / grayscale context (emulateMedia forced-colors or a CSS filter) and read it again

**Expected**

The card's text itself carries the minus sign or an explicit word ('deficit'/'negative'/'down'), so the direction survives with colour removed. Failing this means red/green is the only signal — a WCAG 1.4.1 use-of-colour violation.

**Automation Hint**

Use primaryPage fixture. dashboardPage.getNetUtilisationHours() plus a raw textContent assertion for /-|negative|deficit/i. Related to TC-DASH-027 (legibility) but this one is specifically the colour-independence check.

#### TC-DASH-083 — Export confirmation dialog is a focus-trapped modal with an accessible name and Escape-to-close

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | AC12 + a11y |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard and click 'Export Data'
2. Check the dialog's role and accessible name
3. Tab repeatedly through the dialog and confirm focus never leaves it
4. Press Escape

**Expected**

The dialog has role='dialog' (or alertdialog) with aria-modal='true' and a non-empty accessible name. Focus moves into the dialog on open, is trapped inside while it is open, and returns to the 'Export Data' button after Escape closes it without exporting anything.

**Automation Hint**

Use primaryPage fixture. dashboardPage.exportDataBtn.click(); page.getByRole('dialog'); loop page.keyboard.press('Tab') and assert the focused element stays inside the dialog.

#### TC-DASH-084 — Every interactive dashboard control has a visible focus indicator

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | a11y — WCAG 2.4.7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard
2. Tab through the page and collect each focused control: period filter, department combobox, Upcoming Changes, Export Data, All Activity search box, each sortable column header
3. For each, compare the computed outline/box-shadow/border between the focused and unfocused state

**Expected**

Each control shows a visually distinguishable focus style (outline, ring or shadow) when focused. No control relies on the UA default having been removed with `outline: none` and nothing replacing it.

**Automation Hint**

Use primaryPage fixture. For each locator: focus(), then compare getComputedStyle outline/boxShadow against the blurred state via page.evaluate on the element itself (style read only — not an assertion substitute).

#### TC-DASH-085 — Dashboard has one h1, a logical heading order, and named landmark regions

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | a11y — WCAG 1.3.1 / 2.4.1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard
2. Collect all headings in DOM order with their levels
3. Collect landmark roles present on the page (banner, navigation, main, region)

**Expected**

Exactly one h1 ('Dashboard'). Heading levels never skip a level going down (no h2 -> h4). A <main> landmark wraps the dashboard content and the sidebar is inside a navigation landmark, so a screen-reader user can jump straight to the dashboard body.

**Automation Hint**

Use primaryPage fixture. page.getByRole('heading') with level filters; page.getByRole('main') / getByRole('navigation') presence assertions.

### Boundary (31)

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

#### TC-DASH-090 — Export in a zero-data scope produces a headers-only file, not a corrupt or empty download

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC12 + edge case: empty scope |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture); /dashboard loaded

**Steps**

1. Log in as the PM persona (smallest dataset) and select a period/department combination with no records
2. Confirm the KPI cards read zero and the All Activity table is empty
3. Export as CSV, then as Excel
4. Parse both files

**Expected**

Both files download successfully and parse. Each section retains its header row with zero data rows; the Summary section reads 0 for hours and counts. Neither file is zero-byte, truncated or unparseable, and no error toast appears.

**Automation Hint**

Use pmPage fixture. Pick the empty scope by reading dashboardPage.getTotalAllocationHours() === 0 first; skip-with-note only if no genuinely empty scope can be reached for this role.

#### TC-DASH-095 — Search accepts a 256+ character string without crashing

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary — AC9 search input |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Type a 300-character alphanumeric string into the All Activity search box
2. Observe the input value, the request sent, and the table

**Expected**

The input either accepts the full string or truncates it at a documented maxlength — either is acceptable. The page does not error, the request completes with a non-5xx status, and the table shows the empty state. No layout break from the long value.

**Test Data**

- `length`: 300

**Automation Hint**

Use primaryPage fixture. 'a'.repeat(300); assert the resulting input value length and that the activity response status < 500.

#### TC-DASH-097 — Search tolerates surrounding whitespace and non-ASCII characters

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary — AC9 search input |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Search a known-matching fragment wrapped in leading and trailing spaces
2. Compare the row count against the same fragment searched untrimmed
3. Search a string containing accented and non-Latin characters (e.g. 'José', 'Zoë', '日本')

**Expected**

The padded search returns the same rows as the trimmed search — surrounding whitespace is ignored. The non-ASCII search completes with a non-5xx status and either matches correctly or shows the empty state; it never mangles characters or throws an encoding error.

**Test Data**

- `terms`:   <known-fragment>  , José, Zoë, 日本

**Automation Hint**

Use primaryPage fixture. Compare getAllActivityRowCount() for '  frag  ' vs 'frag'; then assert response status < 500 for each unicode term.

#### TC-DASH-102 — A department with no allocations in the selected period shows zeroed KPIs and an empty table, not an error

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary — AC11 + empty-state handling |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Select the narrowest period available ('This Week')
2. Step through the department options until one yields no records
3. Observe the KPI cards, all 4 charts and the All Activity table

**Expected**

KPI cards read 0hrs / 0 allocations / 0 deallocations with Net Utilisation 0. Charts render an empty-but-valid state (axes or an explicit 'no data' message) rather than collapsing to zero height or throwing. The table shows its empty state. No error toast, no console exception.

**Automation Hint**

Use primaryPage fixture. Iterate getDepartmentFilterOptionsText(); pick the first option where getTotalAllocationHours() === 0. Related to TC-DASH-019 but department-scoped.

#### TC-DASH-111 — Paging through All Activity yields no duplicated and no skipped records

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC9 — pagination integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture); /dashboard loaded

**Steps**

1. Log in as the PM persona so the dataset is small enough to traverse fully
2. Read the activity API's `total` for the active period
3. Page/scroll through the entire All Activity table to the end
4. Collect every row's unique record identity and compare against the API's full item set

**Expected**

The number of distinct records rendered equals the API's `total`. No publicId appears twice and none from the API set is missing. Traversal terminates rather than looping.

**Automation Hint**

Use pmPage fixture (smallest sampled dataset, ~6 allocations) so full traversal is feasible in a test. Use fetchActivity() to build the expected identity set; dedupe rendered rows by employee+project+startDate when publicId is not exposed in the DOM.

#### TC-DASH-112 — Rapid scrolling does not fire duplicate requests for the same activity page

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC9 — concurrency on the table loader |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Instrument every GET /api/v1/dashboard/activity request and record its page param
2. Scroll the All Activity table to the bottom several times in quick succession
3. Wait for network idle and review the recorded page params

**Expected**

Each page number is requested at most once. No page param repeats, and the rendered rows contain no duplicate records — the loader guards against concurrent fetches instead of firing one per scroll event.

**Automation Hint**

Use primaryPage fixture. page.on('request') collecting URL page params; assert new Set(pages).size === pages.length. Same class of race as TC-DASH-023 but on the table loader.

#### TC-DASH-114 — Activity API clamps an out-of-range limit instead of honouring it

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary — activity API parameter validation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Call GET /api/v1/dashboard/activity?duration=this_year&page=1&limit=100000 with the PMO session
2. Also call it with limit=0 and limit=-5
3. Inspect each status, the returned item count and the echoed limit

**Expected**

The oversized limit is clamped to a documented server maximum (returned item count <= that maximum) or rejected with 400 — it does not return all 5939 records in one unbounded response. limit=0 and limit=-5 are rejected or normalised to a sane default, never a 500 and never an infinite/empty loop.

**Automation Hint**

Use primaryPage fixture. dashboardPage.fetchActivity() with explicit limit values via the page's own request context so the session token is reused.

#### TC-DASH-122 — Fractional hours round consistently across KPI card, chart and export

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC4 + AC12 — rounding consistency across surfaces |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture the overview API's raw totalAllocatedHoursPerDay (unrounded)
2. Read the KPI card's displayed value
3. Read the corresponding total from the exported CSV
4. Compare all three

**Expected**

The KPI card and the export apply the same rounding rule to the same raw API value — they agree with each other exactly and each is within one rounding unit of the raw figure. A card showing 3,231 while the export shows 3,230 (or 3,231.4) is a reportable inconsistency.

**Automation Hint**

Use primaryPage fixture. fetchOverview() for the raw value, getTotalAllocationHours() for the card, exportAndParseCsv() for the export; compare all three in one test.

#### TC-DASH-123 — Negative Net Utilisation shows an explicit minus sign and agrees with the API's netDirection

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC4 + AC13 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture the overview API's netUtilizationHoursPerDay and netDirection
2. Read the Net Utilisation card's displayed text
3. Confirm the sign in the text matches the sign of the API value and the netDirection label

**Expected**

For the current PMO scope (negative, -11,126hrs) the card text contains an explicit minus sign, the number's absolute value matches the API, and netDirection agrees with that sign. No display of a negative figure as a bare positive number.

**Automation Hint**

Use primaryPage fixture. Combine fetchOverview() with getNetUtilisationHours() and a raw text assertion. Sharpens TC-DASH-046 (API-only) and TC-DASH-027 (legibility-only) into a UI-vs-API sign check.

#### TC-DASH-124 — Period boundaries are timezone-consistent — a record on the first or last day is counted exactly once

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary — AC3 date-range semantics |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Read the period's fromDate/toDate from the overview API response
2. Select a Custom Date Range whose start equals the previous period's end date
3. Compare the two periods' allocation counts and identify records dated exactly on the shared boundary date
4. Repeat with the browser timezone set to a large offset (e.g. Pacific/Kiritimati vs Pacific/Midway)

**Expected**

A record dated on a boundary day appears in exactly one of the two adjacent periods, not both and not neither. The same query returns the same counts regardless of the browser's timezone — boundaries are resolved server-side, not from the client clock.

**Automation Hint**

Use primaryPage fixture; run the second half in a context created with timezoneId set. Extends TC-DASH-062..068, which validated range arithmetic but not boundary-day membership or timezone independence.

#### TC-DASH-125 — Trend chart bucket labels match the granularity the API actually returned for each period option

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC5 + AC3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. For each of the 6 period options in turn, capture trend.granularity and buckets[] from the overview API
2. Read the trend chart's x-axis labels
3. Compare the label count and label format against the returned granularity

**Expected**

The axis label count equals buckets.length for every period, and the label format matches the granularity the API reported (e.g. daily labels for This Week, monthly for This Year). The UI does not hardcode monthly labels for a period the API bucketed differently.

**Automation Hint**

Use primaryPage fixture. Loop selectPeriod() over all 6 options, capturing the overview response each time; compare against the chart's rendered SVG text nodes.

#### TC-DASH-129 — A single-bucket period still renders chart axes and labels legibly

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary — AC5/AC8 minimum data |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Select a Custom Date Range narrow enough that the API returns exactly one trend bucket (e.g. a single day)
2. Confirm trend.buckets.length === 1 in the response
3. Inspect the trend chart and the Net Utilisation Breakdown chart

**Expected**

Both charts render with a visible axis and a labelled single data point, not a blank canvas, a zero-width bar, or a broken axis. The KPI cards remain consistent with that single bucket.

**Automation Hint**

Use primaryPage fixture. applyCustomDateRange(sameDay, sameDay); verify buckets.length via fetchOverview() before asserting on the chart. Complements TC-DASH-024 (multi-year, the opposite extreme).

#### TC-DASH-134 — Three quick period switches render only the last selection — no out-of-order response wins

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC3 — request race / stale-response handling |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Instrument the overview requests and responses
2. Select 'This Week', then immediately 'This Month', then immediately 'This Year' without waiting for each to settle
3. Let the network settle
4. Compare the rendered KPI values and period label against the API response for 'This Year'

**Expected**

The final render matches 'This Year' exactly and the button label reads 'This Year'. An earlier, slower response must not overwrite the latest selection's data — stale requests are cancelled or discarded by sequence. Extends TC-DASH-023 from a double-click to a three-deep out-of-order race.

**Automation Hint**

Use primaryPage fixture. Fire three selectPeriod() calls without awaiting settle between them; then compare against fetchOverview('this_year'). Optionally delay the first response via page.route to force the race deterministically.

#### TC-DASH-137 — 'Till Date' period option is absent — documents the FRD Section 6.1 gap

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Unclear item: 'Till Date' filter option not found live |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-unclear |
| **Confidence** | requirement-unclear |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Open 'Change the dashboard period' and capture every option label
2. Also open the All Activity table's own column filters and the Upcoming Changes filter and capture their options
3. Search all captured labels for 'Till Date'

**Expected**

The global period filter exposes exactly the 6 live options and no 'Till Date'. The test records whether 'Till Date' exists anywhere else in the dashboard's filter surfaces. Outcome is documentation of the FRD-vs-live gap, not a failure, until the product decision is confirmed.

**Automation Hint**

MANUAL/documenting — requirement unclear: FRD Section 6.1 documents a 'Till Date' option that the live popover does not expose (per reports/knowledge-base/dom-snapshots/DASH.json). Automate the capture via getPeriodFilterOptionLabels() + openColumnFilter() + openUpcomingChangesFilter(); assert the 6 known options and log the absence.

#### TC-DASH-140 — All KPI cards and charts remain visible at 1280x720 and 1440x900 without page-level horizontal scroll

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Layout — AC4..AC8 at the two common staging viewports |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard at a 1280x720 viewport
2. Confirm all 4 KPI cards and all 4 charts are present and visible
3. Compare document scrollWidth against the viewport width
4. Repeat at 1440x900

**Expected**

At both viewports every KPI card and chart is visible (scrolling vertically is fine) and the document does not scroll horizontally — no chart or card is clipped off-screen or overlapping another.

**Automation Hint**

Use primaryPage fixture. page.setViewportSize() for each size; assert toBeVisible() on each card/chart locator and compare scrollWidth to clientWidth.

#### TC-DASH-141 — All Activity table scrolls inside its own container — the page body never scrolls horizontally

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Layout — AC9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard at 1280x720 and scroll to All Activity
2. Confirm all 8 columns are reachable
3. Check whether the table's own container scrolls horizontally
4. Check the document's horizontal overflow

**Expected**

All 8 columns are reachable — either they all fit or the table's own container scrolls horizontally. The page body itself does not scroll horizontally, so the sidebar and KPI cards never shift out of place while reading the table.

**Automation Hint**

Use primaryPage fixture. Compare the table container's scrollWidth/clientWidth against the document's; assert all 8 columnheaders are reachable.

### Functional (30)

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

#### TC-DASH-086 — Export dialog offers both CSV and Excel formats plus an explicit cancel

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC12 — existing TC-DASH-069..077 exercise the CSV branch only |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO
2. Click 'Export Data'
3. Enumerate the controls inside the confirmation dialog

**Expected**

The dialog exposes a CSV choice, an Excel choice, and a cancel/close affordance, and repeats the scoping notice 'Export files will strictly include records within your permitted view authority'. Both format choices are enabled.

**Automation Hint**

Use primaryPage fixture. dashboardPage.exportDataBtn.click(); assert dialog.getByRole('button', {name: /csv/i}) and /excel|xlsx/i are both visible and enabled.

#### TC-DASH-087 — Excel export downloads a valid .xlsx containing the same 5 sections as the CSV export

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC12 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO with the default period
2. Click 'Export Data' and choose Excel
3. Save the download and open the workbook
4. List its sheets/sections and compare against the CSV export's 5 sections

**Expected**

A non-zero .xlsx file downloads with a sensible filename. It parses without error and contains the same five logical sections as the CSV export: Summary, Trend, Allocation Type, Hours by Project, All Activity. No section present in the CSV is missing from the workbook.

**Automation Hint**

Use primaryPage fixture. page.waitForEvent('download') then read with the exceljs dependency already used by the excel-reporter skill. Mirrors dashboardPage.exportAndParseCsv() — an exportAndParseXlsx() helper is the natural addition.

#### TC-DASH-096 — Search is case-insensitive and matches partial substrings across both Employee Name and Projects

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Read an employee name and a project name from the first All Activity row
2. Search a lowercase mid-word fragment of the employee name
3. Clear, then search an UPPERCASE mid-word fragment of the project name
4. Compare the matched rows against the search term in each case

**Expected**

Both searches return at least the originating row. Matching ignores case and does not require a prefix — a fragment from the middle of the value matches. Every returned row contains the fragment in either its Employee Name or Projects cell.

**Automation Hint**

Use primaryPage fixture. dashboardPage.getRowCellText(row, 'Employee Name'/'Projects') to derive the fragment at runtime rather than hardcoding a name. Deepens TC-DASH-010.

#### TC-DASH-098 — Department + Status + Search combine as AND — each narrows the other, none replaces the other

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 + AC11 — filters were only ever tested one at a time |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. As PMO, record the unfiltered All Activity row count
2. Select a specific department; record the count
3. Additionally filter Status to 'Allocation'; record the count
4. Additionally search an employee-name fragment; record the count
5. Spot-check the remaining rows against all three criteria

**Expected**

Each added filter produces a row count less than or equal to the previous step — never a jump back up, which would mean a filter was dropped. Every remaining row satisfies all three conditions simultaneously: correct department, Status 'Allocation', and the search fragment present.

**Automation Hint**

Use primaryPage fixture. Chain selectDepartment() -> filterStatusTo('Allocation') -> searchAllActivity(); assert monotonically non-increasing counts and per-row cell checks.

#### TC-DASH-099 — Clearing the search restores the full row set for the active period and department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Record the row count for the current period/department
2. Search a term that narrows the table
3. Clear the search box
4. Compare the restored count against the original

**Expected**

The row count returns to exactly the pre-search value and the previously active period and department filters are still applied — clearing the search must not silently reset the other filters to their defaults.

**Automation Hint**

Use primaryPage fixture. dashboardPage.clearAllActivitySearch(); assert the count equals the baseline and departmentFilter still shows the selected department.

#### TC-DASH-100 — Changing the period keeps the Department selection applied

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC3 + AC11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Select a specific department and note the KPI totals
2. Change the period from the default to 'This Month'
3. Read the department combobox's displayed value and the new KPI totals
4. Cross-check the totals against the overview API called with the same department + period

**Expected**

The department combobox still shows the selected department after the period change (it does not silently revert to 'All Departments'), and the refreshed KPI totals correspond to that department for the new period — matching the API response for the same pair.

**Automation Hint**

Use primaryPage fixture. selectDepartment() then selectPeriod('This Month'); assert the combobox text and compare against fetchOverview() for that combination.

#### TC-DASH-101 — Resetting Department to 'All Departments' restores org-wide figures for PMO

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Record the org-wide KPI totals with the default 'All Departments'
2. Select a specific department and confirm the totals shrink
3. Reselect 'All Departments'
4. Compare against the originally recorded org-wide totals

**Expected**

Selecting a department strictly reduces the totals; reselecting 'All Departments' restores them to exactly the original org-wide values. No stale intermediate state and no double-applied filter.

**Automation Hint**

Use primaryPage fixture. selectDepartment(/All Departments/) for the reset; compare getTotalAllocationHours()/getTotalAllocationCount() against the baseline.

#### TC-DASH-104 — Filter state in the URL — a dashboard link is shareable, or the gap is documented

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Gap — no URL-state requirement exists in the FRD; behaviour to be recorded |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard and note the URL
2. Select 'This Month' and a specific department
3. Note the URL again
4. Open the resulting URL in a fresh context with the same account

**Expected**

Either the URL carries the period and department as query params and the fresh context loads with both already applied — or the URL is unchanged, in which case the test records that dashboard filter state is not shareable/deep-linkable and flags it as a UX gap rather than failing.

**Automation Hint**

Use primaryPage fixture. Compare page.url() before/after; if params are present, assert a fresh page.goto(url) restores the state. Documenting assertion — do not force a pass.

#### TC-DASH-109 — Default landing screen after login — record the actual behaviour (FRD OQ-D02 still open)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Unclear item: OQ-D02 default landing screen (severity: blocking) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-unclear |
| **Confidence** | requirement-unclear |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Start a fresh authenticated session for each role fixture (PMO, PM, TM, EM, CSM, Employee)
2. Complete login and let the app settle without clicking anything
3. Record the landing URL and heading for each role

**Expected**

The landing screen is captured per role as evidence for the still-open FRD question. Expected today: non-Employee roles land on their existing default (not necessarily /dashboard) and the Employee role must not land on /dashboard given DEF-DASH-001. This case documents; it does not assert a preferred answer until OQ-D02 is confirmed.

**Automation Hint**

MANUAL/documenting — requirement unclear: FRD Section 3 lists Default Landing Screen as 'OQ-D02 — Pending confirmation' (owner Sweta Parmar). Automate the capture (page.url() per fixture) but do not assert an expected landing route until the product answer lands.

#### TC-DASH-110 — All Activity loads further rows on demand and each batch matches the activity API's page N

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 — the activity API confirmed 5939 records / 60 pages for PMO+this_year, so the UI paginates behind the scenes |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO on the period whose activity total is largest
2. Record the initially rendered row count and capture the first activity API response (page=1)
3. Trigger the next batch (scroll the table to its end, or use its pager control)
4. Capture the follow-up activity response and compare the newly appended rows against its items[]

**Expected**

The UI requests page=2 with the same limit and appends exactly those items in the same order. Rendered row count grows by the returned item count. The first row of the new batch equals items[0] of the page-2 response field-for-field (employee, project, hoursPerDay, status, dates).

**Automation Hint**

Use primaryPage fixture. Collect page.on('response') for /dashboard/activity across the interaction; compare against getRowCellText per column. Complements TC-DASH-057, which only checked row 1 of page 1.

#### TC-DASH-113 — Sorting a column sorts the entire dataset server-side, not just the rows already loaded

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC9 — sort correctness over a paginated dataset |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard and let only the first batch of All Activity rows render
2. Sort by 'Hrs / Day' descending
3. Read the top row's value
4. Compare it against the maximum hoursPerDay across the activity API's full result set for the same filter

**Expected**

The top row after sorting holds the maximum value across the whole dataset, not merely the maximum among the initially loaded batch — and the sort request is sent to the API (sort/order params) rather than being applied only in the browser. If sorting is client-side-only over a partial dataset, this is a correctness defect to report.

**Automation Hint**

Use primaryPage fixture. fetchActivity() across pages to compute the true max; capture whether a sort param appears on the activity request. Extends TC-DASH-011 (which only checked the toggle).

#### TC-DASH-121 — KPI hours use a thousands separator and a consistent unit, matching the live-captured format

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC4 — live-captured formatting baseline |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO (totals are in the thousands)
2. Read the raw text of each KPI card
3. Compare the formatting against the live-captured baseline: 'Total Allocation 3,231hrs 2013 allocations'

**Expected**

Hour values above 999 render with a thousands separator and the 'hrs' unit suffix. The count line reads as a plain integer with its noun ('2013 allocations'). Formatting is consistent across all three cards — one card must not show 3231 while another shows 14,357.

**Automation Hint**

Use primaryPage fixture. Regex-assert the card text against /\d{1,3}(,\d{3})*hrs/ for four-digit-plus values across all three cards.

#### TC-DASH-126 — Trend chart tooltip values match the API bucket for the hovered x-position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC5 + UI-vs-API parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture the overview API's trend.buckets[]
2. Hover the trend chart at the first, middle and last data point
3. Read the tooltip's allocated and de-allocated values at each position
4. Compare against the corresponding bucket

**Expected**

Each tooltip's allocated/de-allocated hours match that bucket's allocatedHoursPerDay/deallocatedHoursPerDay, and the tooltip's period label matches the bucket's label. Extends the existing UI-vs-API parity set, which covered the KPI cards, donut, bars and table but never chart tooltips.

**Automation Hint**

Use primaryPage fixture. Hover via locator.hover() on the chart at computed x offsets from boundingBox(); read the tooltip by role/text. Skip-with-note if the chart library renders no tooltip.

#### TC-DASH-127 — Donut segment/legend hover shows Fixed and Dynamic hours matching allocationTypeDistribution

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC6 + UI-vs-API parity |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture allocationTypeDistribution.slices[] from the overview API
2. Hover the Fixed segment, then the Dynamic segment (or their legend entries)
3. Read the hours and percentage shown in each hover state

**Expected**

Each hover reveals that slice's hours and sharePercentage exactly as the API reported them, and the two hovered percentages sum to 100%. Deepens TC-DASH-055, which compared only the statically rendered percentages.

**Automation Hint**

Use primaryPage fixture. dashboardPage.allocationTypeDonut plus getAllocationTypeBreakdown() for the static values; hover the segments for the interactive ones.

#### TC-DASH-128 — Net Utilisation Breakdown bars use the same buckets as the trend chart

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC8 + AC5 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture trend.buckets[] once from the overview API
2. Read the Net Utilisation Breakdown chart's grouped bar values and x labels
3. Read the trend chart's series values and x labels
4. Compare the two charts against each other and against the API

**Expected**

Both charts show the same number of buckets with the same labels, and their per-bucket allocated/de-allocated values agree with each other and with the API. The two charts cannot disagree about the same underlying buckets.

**Automation Hint**

Use primaryPage fixture. dashboardPage.netUtilisationBreakdownChart and trendChart; compare against a single fetchOverview() capture. AC8 previously had presence-only coverage.

#### TC-DASH-130 — A loading state is shown while the overview call is in flight and is always replaced

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC3/AC4 — loading-state handling (previously untested) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Throttle or delay the overview response via request interception
2. Load /dashboard
3. Observe the KPI card and chart regions while the request is pending
4. Let the response complete and observe again

**Expected**

A skeleton/spinner/loading affordance is visible in the KPI and chart regions while the request is pending — not a flash of zeros that could be mistaken for real data. Once the response arrives the loading state is fully replaced by rendered values and no loading element remains in the DOM.

**Automation Hint**

Use primaryPage fixture. page.route with a delayed fulfil; assert the loading locator is visible during and hidden after. No waitForTimeout — gate on the route handler and expect(...).toBeHidden().

### Integration (3)

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

#### TC-DASH-139 — Upcoming Changes results reconcile with the Allocation Requests module's approved future records

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | AC10 + affectedModules: Allocation Requests |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. As PMO, open the Allocation Requests module and list approved requests with a future start date
2. Return to /dashboard and apply the Upcoming Changes filter over the same future window
3. Filter All Activity to Status 'Upcoming Allocation'
4. Compare the two sets employee-by-employee

**Expected**

Every approved future allocation request in the window appears as an Upcoming Allocation row on the dashboard with the same employee, project and start date, and the dashboard shows no upcoming row lacking a corresponding approved request. Both views agree on the count.

**Automation Hint**

Use primaryPage fixture. Combine openUpcomingChangesFilter() and filterStatusTo('Upcoming Allocation') with the Allocation Requests module's own list/API. Deepens TC-DASH-040 from one record to full set reconciliation.

### Negative (11)

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

#### TC-DASH-089 — Cancelling the export dialog downloads nothing and leaves the dashboard state untouched

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC12 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Note the current period label and KPI values
2. Click 'Export Data'
3. Dismiss the dialog via cancel, then repeat via the Escape key
4. Wait a short settle window for any download event

**Expected**

No download event fires in either dismissal path. The dialog closes, the period filter label and all KPI values are unchanged, and no export request is sent to the API.

**Automation Hint**

Use primaryPage fixture. Race page.waitForEvent('download') against a short expect.poll timeout and assert the download never resolved; also assert no matching request via page.on('request').

#### TC-DASH-092 — Search with no matches shows an explicit empty state and keeps the table headers

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC9 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Scroll to All Activity and note the current row count
2. Type a string guaranteed not to match any employee or project (e.g. 'zzqqxx-no-such-record')
3. Observe the table body and headers

**Expected**

Row count drops to zero and an explicit 'no records found' style message is shown. The 8 column headers remain visible so the table is not replaced by a blank area, and no error toast or console error appears.

**Test Data**

- `searchTerm`: zzqqxx-no-such-record

**Automation Hint**

Use primaryPage fixture. dashboardPage.searchAllActivity('zzqqxx-no-such-record'); assert getAllActivityRowCount() === 0 and a /no .*(record|result|data)/i message is visible.

#### TC-DASH-103 — Switching filters never leaves stale pre-filter data on screen

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC11 — stale-render risk |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Record the org-wide KPI totals and the first All Activity row
2. Select a department whose totals are known to differ
3. Immediately read the KPI cards and the first table row after the loading state resolves

**Expected**

Once loading resolves, no KPI card and no visible table row still carries a pre-filter value. Specifically, the first row's employee/project is either from the selected department or the table is empty — the old row must not persist under the new filter.

**Automation Hint**

Use primaryPage fixture. Wait for the activity response for the filtered request before asserting, then compare the first row against the pre-filter capture and assert they differ (or the table is empty).

#### TC-DASH-131 — A slow API keeps the loading state and eventually renders — no premature empty state

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC3 — distinguishing slow from empty (related to TC-DASH-019) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Delay the overview response well beyond the normal render time (but inside the test timeout)
2. Load /dashboard
3. Watch for any 'no data' or empty-state message appearing before the response arrives
4. Confirm the final render after the response

**Expected**

No empty-state or error message appears while the request is still pending — a slow response must not be presented as 'no data'. When the response finally arrives, the real values render correctly.

**Automation Hint**

Use primaryPage fixture. page.route with a controlled delay; assert the empty-state locator is never visible during the pending window, then assert the populated render.

#### TC-DASH-132 — An activity API failure degrades only the table — KPI cards and charts still render

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC9 — partial-failure resilience |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Let /api/v1/dashboard/overview succeed normally
2. Force /api/v1/dashboard/activity to return 500
3. Load /dashboard
4. Observe the KPI cards, all 4 charts and the All Activity table

**Expected**

The KPI cards and all 4 charts render normally from the successful overview call. Only the All Activity table shows an error/retry state. The whole page must not blank out because one of the two endpoints failed. Sharpens TC-DASH-018, which failed both endpoints together.

**Automation Hint**

Use primaryPage fixture. Extend dashboardPage.mockDashboardApiFailure() to accept a per-endpoint pattern so only the activity route is failed.

### Regression (32)

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

#### TC-DASH-088 — Excel export Summary values exactly match the overview API for the same filter

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC12 + AC4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture GET /api/v1/dashboard/overview for the active period
2. Export via Excel for that same period
3. Read Total Allocation hours/count, Total Deallocation hours/count and Net Utilisation from the workbook's Summary section
4. Compare each against the API's summary object

**Expected**

Every Summary figure in the workbook equals the API's corresponding field exactly (totalAllocatedHoursPerDay, allocationCount, totalDeallocatedHoursPerDay, deallocationCount, netUtilizationHoursPerDay). No rounding drift between the two export formats either — the Excel numbers equal the CSV numbers for the same filter.

**Automation Hint**

Use primaryPage fixture. dashboardPage.fetchOverview() for the baseline; parse the xlsx. Excel twin of the existing TC-DASH-070.

#### TC-DASH-091 — Export honours the Department filter, not just the period filter

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC11 + AC12 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. As PMO, select a specific department in 'Filter the dashboard by department'
2. Record the on-screen KPI totals and All Activity row count for that department
3. Export as CSV
4. Compare the exported Summary and All Activity row count against the on-screen department-filtered values

**Expected**

The exported Summary matches the department-filtered KPI totals — not the org-wide 'All Departments' figures — and the All Activity row count matches the department-filtered total. Extends TC-DASH-069, which only proved the period filter is respected.

**Automation Hint**

Use primaryPage fixture. dashboardPage.selectDepartment(...) then exportAndParseCsv(); guard on selectDepartment() returning true.

#### TC-DASH-105 — Browser Back after a period change returns to the previous filter state

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC3 — navigation resilience |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard on the default period and record the KPI totals
2. Select 'This Month' and record the new totals
3. Press browser Back
4. Observe the period button label, KPI cards and charts

**Expected**

The page returns to a coherent state — the period label and totals match one of the two visited states, with charts fully rendered. It must not show a blank chart area, a permanently stuck loading state, or a label that disagrees with the displayed numbers.

**Automation Hint**

Use primaryPage fixture. page.goBack(); then assert periodFilterBtn text and getTotalAllocationHours() are mutually consistent with one captured state.

#### TC-DASH-106 — Navigating away to Employee and back re-fetches — no stale KPI values

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AC1 + AC4 — cross-module navigation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard and record the KPI totals
2. Navigate to the Employee module via the sidebar
3. Navigate back to Dashboard via the sidebar
4. Watch for a fresh GET /api/v1/dashboard/overview and compare the rendered values against its payload

**Expected**

Returning to Dashboard issues a fresh overview request and the rendered KPI values match that new response. Nothing is served from a stale in-memory cache that could disagree with the API.

**Automation Hint**

Use primaryPage fixture. Register page.on('response') before the return navigation; assert the overview call fired and its summary matches the rendered cards.

#### TC-DASH-133 — PMO org-wide dashboard reaches first meaningful render within an agreed budget

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | NFR — performance at the largest sampled scope (no perf case existed) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | team-baseline-needed |
| **Confidence** | team-baseline-needed |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO (largest scope: 2013 allocations, 4775 deallocations, 5939 activity records)
2. Measure from navigation start until the KPI cards show non-placeholder values and all 4 charts are visible
3. Repeat 3 times and take the median

**Expected**

Median time to a fully rendered dashboard stays within the agreed budget for the staging environment. The figure is recorded on every run so a regression shows up as a trend, not as a one-off flake. Baseline the budget on the first run rather than asserting an invented threshold.

**Automation Hint**

Use primaryPage fixture. Time around navigateToDashboard() plus expect(...).toBeVisible() on the charts; log the measurement. Treat a first-run measurement as the baseline to agree with the team, not a hard fail.

#### TC-DASH-138 — DEF-DASH-001 retest — Employee sidebar link and /dashboard access once the frontend fix lands

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Known bug: DEF-DASH-001 (Zoho 688906000093525946) — frontend-only, backend already scopes Employee correctly |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | confirmed-defect |
| **Confidence** | confirmed-defect |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture); /dashboard loaded

**Steps**

1. Log in as the Employee persona
2. Check whether a 'Dashboard' link exists in the sidebar
3. Navigate directly to /dashboard
4. If access is granted, compare the rendered KPI totals against the overview API's own-scoped response for this account

**Expected**

While the defect is open this fails as designed (no sidebar link; /dashboard redirects to /unauthorized) — the failure is the confirmation. Once fixed, the link is present, /dashboard renders, and the displayed totals match the API's own-scoped payload (which already returns 200 with correct data), confirming a frontend-only fix with no scope leak.

**Automation Hint**

Use empPage fixture. Combine getSidebarItemLabels(), isUnauthorized() and probeOverviewStatus()/fetchOverview() in one case so the fix is verified end-to-end. Companion to TC-DASH-021/022 (UI block) and TC-DASH-061 (API returns 200) — this is the close-out check for Zoho bug 688906000093525946.

### Security (21)

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

#### TC-DASH-093 — Search input containing a script payload is rendered as literal text — no XSS execution

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — input handling on AC9 search (no injection case existed) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Attach a listener for JS dialogs and for uncaught page errors
2. Type <script>alert('xss')</script> into the All Activity search box
3. Then type <img src=x onerror=alert(1)> and repeat
4. Inspect how the term is echoed back in the UI (search box value, any 'results for ...' label, empty-state message)

**Expected**

No dialog is raised and no script executes for either payload. If the term is echoed anywhere in the UI it appears as escaped literal text. The page stays functional and clearing the search restores the full row set.

**Test Data**

- `payloads`: <script>alert('xss')</script>, <img src=x onerror=alert(1)>

**Automation Hint**

Use primaryPage fixture. page.on('dialog', ...) must never fire; assert via textContent that the payload appears escaped, never as a live element (locator('script, img[onerror]') count unchanged).

#### TC-DASH-094 — Search with SQL meta-characters returns a safe response — no 500 and no database error text

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — AC9 search input |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture the activity API request/response while searching
2. Search for  ' OR 1=1 --
3. Search for  '; DROP TABLE allocations; --
4. Inspect both the HTTP status and the rendered output

**Expected**

Each search returns 200 (or a validated 400) with a normal empty/filtered result. Never a 500. No SQL fragment, driver name, table name or stack trace appears in the response body or on screen. The row count does not jump to a larger set than the unfiltered view — proving the clause was not interpreted.

**Test Data**

- `payloads`: ' OR 1=1 --, '; DROP TABLE allocations; --

**Automation Hint**

Use primaryPage fixture. page.on('response') filter on /dashboard/activity; assert status < 500 and body has no /sql|syntax error|postgres|sequelize/i.

#### TC-DASH-107 — After logout, direct navigation to /dashboard redirects to login and renders no cached data

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — session teardown (no such case existed) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Load /dashboard as PMO and confirm the KPI cards are populated
2. Log out through the application's own logout action
3. Navigate directly to /dashboard
4. Also press browser Back to the dashboard URL

**Expected**

Both the direct navigation and the Back navigation land on the login screen (or /unauthorized) with no KPI values, no chart data and no table rows visible at any point — not even a brief flash of the previous session's numbers from cache.

**Automation Hint**

Use primaryPage fixture in a dedicated context so the shared storageState is not invalidated for other tests. Assert the dashboard heading is absent and no numeric KPI text is present after navigation.

#### TC-DASH-108 — An invalid or expired session token on /dashboard triggers re-auth without a partial data render

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — session expiry (no such case existed) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. In an isolated context, load /dashboard successfully
2. Corrupt or clear the auth token in storage / force the dashboard API to answer 401
3. Trigger a data refresh by changing the period
4. Observe the page

**Expected**

The app redirects to login or shows an explicit session-expired prompt. It does not render half a dashboard, leave a permanent spinner, or display an unhandled error. No stale data from before the token was invalidated remains on screen.

**Automation Hint**

Use primaryPage fixture in an isolated context. page.route the dashboard API to fulfil with 401, or clear the token, then selectPeriod(); assert on the redirect/prompt.

#### TC-DASH-115 — Dashboard overview endpoint returns 401 without an Authorization header

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — API authentication (only scoping was covered before) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. From an unauthenticated request context, call GET https://simerp-dev-api.simform.solutions/api/v1/dashboard/overview?duration=this_year
2. Repeat for /api/v1/dashboard/activity
3. Inspect the status and body of each

**Expected**

Both endpoints return 401 (or 403). Neither returns 200, and no response body contains summary figures, employee names, project names or any allocation data. This is the unauthenticated counterpart to TC-DASH-060/061, which only covered authenticated-but-scoped callers.

**Automation Hint**

Use a bare request context (playwright request.newContext() with no storageState) so no cookie or bearer token is attached; assert status and that the body has no /totalAllocated|employee|project/i.

#### TC-DASH-116 — A scope-widening query param does not widen the response beyond the caller's authority

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — horizontal privilege escalation via params (AC13 asserted server-side scoping but not param tampering) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture); /dashboard loaded

**Steps**

1. Using the PM session, capture the legitimate overview response and its totals (PM scope is ~10hrs)
2. Re-call the endpoint appending plausible scope-override params: departmentId, employeeId, userId, scope=all, portalWide=true
3. Compare each response's totals against the legitimate PM baseline and against the known PMO org-wide totals

**Expected**

Every tampered call returns either the same PM-scoped totals (params ignored) or 400/403. None returns totals approaching the PMO org-wide figures. Scope is derived from the token server-side and cannot be overridden from the query string.

**Test Data**

- `params`: departmentId, employeeId, userId, scope=all, portalWide=true

**Automation Hint**

Use pmPage fixture, calling through the page's authenticated request context. Assert each response's totalAllocatedHoursPerDay equals the PM baseline, never the org-wide value.

#### TC-DASH-117 — Another role's record identifier cannot be read through the dashboard activity endpoint

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — IDOR check on the activity endpoint |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture); /dashboard loaded

**Steps**

1. As PMO, capture a publicId from an out-of-scope activity record (a different department/project)
2. Switch to the PM session
3. Request that specific record through the activity endpoint using any id-accepting param the API exposes
4. Inspect the response

**Expected**

The PM session cannot retrieve the out-of-scope record: the response is 403/404 or simply omits it. The record's employee name, project and hours must not appear in any PM-session response.

**Automation Hint**

Open two contexts: primaryPage + pmPage. Capture the id via fetchActivity() on the PMO session, then probe from the PM session's request context. If the endpoint accepts no per-id param, record that as the reason it is not exploitable.

#### TC-DASH-118 — Malformed or injected date params are validated — no 500 and no stack trace

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — API input validation on the custom-range params |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Call the overview endpoint with duration=custom and fromDate='not-a-date'
2. Repeat with fromDate="2026-01-01' OR 1=1--"
3. Repeat with fromDate after toDate
4. Inspect each status and body

**Expected**

Each returns 400 with a clean validation message, or a safely normalised 200. Never a 500. No response body contains a stack trace, ORM/driver name, SQL fragment or file path. The reversed range specifically returns a validation error or an empty result — not a negative/garbage aggregate.

**Test Data**

- `payloads`: not-a-date, 2026-01-01' OR 1=1--, reversed range

**Automation Hint**

Use primaryPage fixture via its authenticated request context. Assert status !== 500 and body has no /at .*\.js:|sequelize|postgres|syntax error/i. API-level twin of the UI-level TC-DASH-020.

#### TC-DASH-119 — projectLimit is validated — huge and negative values do not produce an unbounded response or a crash

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Boundary/security — overview API parameter validation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Call the overview endpoint with projectLimit=999999
2. Repeat with projectLimit=-1 and projectLimit=abc
3. Inspect each status, the projectBreakdown.items length and the isTruncated/otherProjects fields

**Expected**

The huge value is clamped to a server maximum (items length stays bounded well under the 399 total project count, or the request is rejected) — it does not stream every project in one response. Negative and non-numeric values return 400 or fall back to the default of 6. No 500 in any case, and otherProjects/totalProjectCount stay arithmetically consistent with whatever items[] was returned.

**Automation Hint**

Use primaryPage fixture. Reuse dashboardPage.fetchOverview()'s projectLimit argument; assert items.length is bounded and the rollup still reconciles (as TC-DASH-053 does for the default).

#### TC-DASH-120 — Dashboard API responses are not cached in a way that outlives the session

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Security — cache/session hygiene |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. Capture the response headers of GET /api/v1/dashboard/overview and /activity
2. Inspect Cache-Control, Pragma and any Set-Cookie flags
3. Log out, then use browser Back to the dashboard and inspect whether data reappears from cache

**Expected**

The dashboard responses carry no-store (or equivalent no-cache/private + must-revalidate) so scoped allocation data is not written to a shared or disk cache. After logout, Back does not resurface the data from cache. Auth cookies, if used, are HttpOnly and Secure.

**Automation Hint**

Use primaryPage fixture in an isolated context (logout is destructive to shared state). Read headers via page.on('response'); pairs with TC-DASH-107.

#### TC-DASH-135 — EM sees exactly their own departments in the Department filter — no others

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC11 + AC13 — unclear item: department filter option list never captured |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as kunal.jadeja@simformsolutions.com (emPage fixture); /dashboard loaded

**Steps**

1. Log in as the EM persona and open /dashboard
2. Open 'Filter the dashboard by department' and list every option
3. As PMO, list the full department option set for comparison
4. Select each EM-visible option in turn and confirm data returns

**Expected**

The EM's option list is a strict subset of the PMO's full list, containing only departments this EM manages plus 'All Departments'. No department outside their authority is listed even as a disabled option, and every listed option returns data within their scope.

**Automation Hint**

Open two contexts: emPage + primaryPage. dashboardPage.getDepartmentFilterOptionsText() on both and assert subset. Closes the 'department option list contents not captured' gap; TC-DASH-034 only checked totals.

#### TC-DASH-136 — Department filter option contents are correctly scoped for every role that has the filter

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | AC11 + AC13 — unclear item: department filter option list never captured |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | live-DOM-grounded |
| **Confidence** | live-DOM-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); /dashboard loaded

**Steps**

1. For each role with the department filter (PMO, TM, EM), open the combobox and capture its option list
2. For each role without it (PM, CSM), confirm the combobox is absent
3. Compare the three captured lists

**Expected**

PMO's list is the full department set. TM's and EM's are strict, non-empty subsets of it, limited to their own departments. PM and CSM have no department combobox at all. No role's list contains a department outside its authority.

**Automation Hint**

Open contexts for primaryPage + testUserPage + emPage + pmPage + csmPage. Combine isDepartmentFilterVisible() and getDepartmentFilterOptionsText(); assert the subset relations. Extends TC-DASH-031/032 from presence-only to contents.

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
