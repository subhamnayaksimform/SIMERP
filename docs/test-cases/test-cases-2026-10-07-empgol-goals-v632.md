# Goals — Test Cases

**Total test cases:** 147  
**Modules covered:** Goals  
**Source:** `reports/test-cases/cases-2026-10-07-EMPGOL-goals-v632.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 74 | 50.3% |
| security | 19 | 12.9% |
| negative | 15 | 10.2% |
| accessibility | 8 | 5.4% |
| boundary | 7 | 4.8% |
| integration | 7 | 4.8% |
| regression | 6 | 4.1% |
| smoke | 6 | 4.1% |
| performance | 5 | 3.4% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 108 | 73.5% |
| medium | 32 | 21.8% |
| critical | 7 | 4.8% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 103 | 70.1% |
| critical | 23 | 15.6% |
| minor | 21 | 14.3% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 143 | 97.3% |
| regression-derived | 4 | 2.7% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 141 | 95.9% |
| inferred | 5 | 3.4% |
| unverified-fallback | 1 | 0.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 146 | 99.3% |
| No | 1 | 0.7% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 74 | 50.3% |
| @security | 19 | 12.9% |
| @negative | 15 | 10.2% |
| @regression | 9 | 6.1% |
| @a11y | 8 | 5.4% |
| @boundary | 7 | 4.8% |
| @integration | 7 | 4.8% |
| @needs-verification | 6 | 4.1% |
| @smoke | 6 | 4.1% |
| @performance | 5 | 3.4% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPGOL-401](#tc-empgol-401-goals-opens-from-the-sidebar-employee-goals-link-on-the-dashboard-tab) | Goals opens from the sidebar Employee > Goals link on the Dashboard tab | Goals | smoke | critical |
| [TC-EMPGOL-402](#tc-empgol-402-dashboard-renders-the-filter-group-five-kpi-tiles-and-all-five-chart-list-sections) | Dashboard renders the filter group, five KPI tiles and all five chart/list sections | Goals | smoke | critical |
| [TC-EMPGOL-403](#tc-empgol-403-shared-filters-show-their-documented-defaults-on-first-load) | Shared filters show their documented defaults on first load | Goals | functional | high |
| [TC-EMPGOL-404](#tc-empgol-404-year-and-timeframe-comboboxes-offer-exactly-the-expected-options) | Year and Timeframe comboboxes offer exactly the expected options | Goals | functional | high |
| [TC-EMPGOL-405](#tc-empgol-405-department-combobox-lists-all-departments-plus-every-department-and-is-type-to-search) | Department combobox lists All Departments plus every department and is type-to-search | Goals | functional | high |
| [TC-EMPGOL-406](#tc-empgol-406-admin-rm-filter-lists-all-managers-plus-rms-and-narrows-the-dashboard-to-one-rm) | Admin RM filter lists All Managers plus RMs and narrows the dashboard to one RM | Goals | functional | high |
| [TC-EMPGOL-407](#tc-empgol-407-l-d-hours-and-billable-hours-tiles-expose-info-tooltips-with-the-documented-text) | L&D Hours and Billable Hours tiles expose info tooltips with the documented text | Goals | functional | high |
| [TC-EMPGOL-408](#tc-empgol-408-changing-timeframe-updates-the-hours-tiles-and-is-written-to-the-url) | Changing Timeframe updates the hours tiles and is written to the URL | Goals | functional | high |
| [TC-EMPGOL-409](#tc-empgol-409-changing-department-re-scopes-every-kpi-and-is-written-to-the-url) | Changing Department re-scopes every KPI and is written to the URL | Goals | functional | high |
| [TC-EMPGOL-410](#tc-empgol-410-changing-year-re-scopes-goal-kpis-including-l-d-related-figures-where-applicable) | Changing Year re-scopes goal KPIs, including L&D-related figures where applicable | Goals | functional | high |
| [TC-EMPGOL-411](#tc-empgol-411-kpi-invariants-hold-and-the-coverage-doughnut-reconciles-with-the-kpis) | KPI invariants hold and the coverage doughnut reconciles with the KPIs | Goals | functional | high |
| [TC-EMPGOL-412](#tc-empgol-412-goal-tracking-health-doughnut-shows-four-statuses-that-sum-to-goal-assignments) | Goal Tracking Health doughnut shows four statuses that sum to Goal Assignments | Goals | functional | high |
| [TC-EMPGOL-413](#tc-empgol-413-clicking-a-chart-legend-item-toggles-that-series) | Clicking a chart legend item toggles that series | Goals | functional | high |
| [TC-EMPGOL-414](#tc-empgol-414-admin-sees-rm-wise-goal-status-with-one-bar-per-rm-and-an-l-d-hours-by-rm-line) | Admin sees "RM-wise Goal Status" with one bar per RM and an L&D Hours by RM line | Goals | functional | high |
| [TC-EMPGOL-415](#tc-empgol-415-rm-chart-zoom-in-zoom-out-reset-zoom-and-ctrl-scroll-work) | RM chart Zoom in / Zoom out / Reset zoom and Ctrl+scroll work | Goals | functional | high |
| [TC-EMPGOL-416](#tc-empgol-416-pan-chart-slider-is-disabled-at-full-range-and-pans-after-zooming) | Pan chart slider is disabled at full range and pans after zooming | Goals | functional | high |
| [TC-EMPGOL-417](#tc-empgol-417-show-as-separate-charts-splits-the-combined-rm-chart-and-toggles-back) | "Show as separate charts" splits the combined RM chart and toggles back | Goals | functional | high |
| [TC-EMPGOL-418](#tc-empgol-418-rm-persona-sees-your-team-goal-status-with-one-bar-per-team-member) | RM persona sees "Your Team Goal Status" with one bar per team member | Goals | functional | high |
| [TC-EMPGOL-419](#tc-empgol-419-pmo-team-chart-caption-total-matches-total-employees) | PMO team chart caption total matches Total Employees | Goals | functional | medium |
| [TC-EMPGOL-420](#tc-empgol-420-completion-by-goal-shows-a-ranked-top-5-list-with-average-completion-bars) | Completion by Goal shows a ranked top-5 list with average completion bars | Goals | functional | high |
| [TC-EMPGOL-421](#tc-empgol-421-completion-by-goal-sort-toggle-reverses-the-order) | Completion by Goal sort toggle reverses the order | Goals | functional | high |
| [TC-EMPGOL-422](#tc-empgol-422-completion-by-goal-search-narrows-the-list-and-clearing-restores-it) | Completion by Goal search narrows the list and clearing restores it | Goals | functional | high |
| [TC-EMPGOL-423](#tc-empgol-423-rows-per-page-and-list-pagination-work-on-completion-by-goal) | Rows per page and list pagination work on Completion by Goal | Goals | functional | high |
| [TC-EMPGOL-424](#tc-empgol-424-most-at-risk-goals-lists-goals-by-delayed-employee-count-with-an-at-risk-marker) | Most At-Risk Goals lists goals by delayed-employee count with an at-risk marker | Goals | functional | high |
| [TC-EMPGOL-425](#tc-empgol-425-most-at-risk-n-emp-equals-the-delayed-rows-in-that-goal-s-assignments) | Most At-Risk "N emp" equals the Delayed rows in that goal's assignments | Goals | integration | high |
| [TC-EMPGOL-426](#tc-empgol-426-view-all-opens-a-full-list-dialog-for-both-ranked-lists) | View All opens a full-list dialog for both ranked lists | Goals | functional | high |
| [TC-EMPGOL-427](#tc-empgol-427-view-assignments-dialog-shows-the-per-employee-assignments-of-a-goal) | View assignments dialog shows the per-employee assignments of a goal | Goals | functional | high |
| [TC-EMPGOL-428](#tc-empgol-428-assignments-dialog-search-matches-employee-and-manager-names) | Assignments dialog search matches employee and manager names | Goals | functional | high |
| [TC-EMPGOL-429](#tc-empgol-429-assignments-dialog-sorting-status-filter-and-pagination-work) | Assignments dialog sorting, Status filter and pagination work | Goals | functional | high |
| [TC-EMPGOL-430](#tc-empgol-430-average-completion-in-the-list-matches-the-assignments-in-the-dialog) | Average completion % in the list matches the assignments in the dialog | Goals | integration | high |
| [TC-EMPGOL-431](#tc-empgol-431-filters-persist-when-switching-between-dashboard-and-goals-tabs) | Filters persist when switching between Dashboard and Goals tabs | Goals | functional | high |
| [TC-EMPGOL-432](#tc-empgol-432-reload-keeps-the-filtered-dashboard-filters-represented-in-the-url) | Reload keeps the filtered dashboard (filters represented in the URL) | Goals | functional | high |
| [TC-EMPGOL-433](#tc-empgol-433-search-goals-with-no-match-shows-a-readable-empty-state) | Search goals with no match shows a readable empty state | Goals | negative | medium |
| [TC-EMPGOL-434](#tc-empgol-434-a-department-with-no-goal-data-shows-empty-states-not-broken-charts) | A department with no goal data shows empty states, not broken charts | Goals | negative | medium |
| [TC-EMPGOL-435](#tc-empgol-435-dashboard-total-employees-equals-the-by-employee-result-total-for-the-same-filters) | Dashboard Total Employees equals the By Employee result total for the same filters | Goals | integration | high |
| [TC-EMPGOL-436](#tc-empgol-436-goals-tab-opens-on-by-employee-with-the-roll-up-table-and-server-side-footer) | Goals tab opens on By Employee with the roll-up table and server-side footer | Goals | smoke | critical |
| [TC-EMPGOL-437](#tc-empgol-437-deep-links-restore-the-goals-tab-and-the-by-goal-view) | Deep links restore the Goals tab and the By Goal view | Goals | functional | high |
| [TC-EMPGOL-438](#tc-empgol-438-by-employee-is-server-paged-100-rows-per-page-37-pages) | By Employee is server-paged: 100 rows per page, 37 pages | Goals | functional | high |
| [TC-EMPGOL-439](#tc-empgol-439-page-change-requests-one-server-page-instead-of-the-whole-organisation) | Page change requests one server page instead of the whole organisation | Goals | functional | high |
| [TC-EMPGOL-440](#tc-empgol-440-search-employee-filters-server-side-and-resets-to-page-1) | Search employee filters server-side and resets to page 1 | Goals | functional | high |
| [TC-EMPGOL-441](#tc-empgol-441-sorting-employee-and-reporting-manager-columns-works-ascending-and-descending) | Sorting Employee and Reporting Manager columns works ascending and descending | Goals | functional | high |
| [TC-EMPGOL-442](#tc-empgol-442-sorting-the-numeric-columns-orders-rows-numerically) | Sorting the numeric columns orders rows numerically | Goals | functional | high |
| [TC-EMPGOL-443](#tc-empgol-443-numeric-range-filter-overdue-goals-narrows-rows-and-clear-resets) | Numeric range filter (Overdue Goals) narrows rows and Clear resets | Goals | functional | high |
| [TC-EMPGOL-444](#tc-empgol-444-range-filters-on-goals-certificates-and-l-d-hours) | Range filters on Goals, Certificates and L&D Hours | Goals | functional | high |
| [TC-EMPGOL-445](#tc-empgol-445-text-column-filters-employee-reporting-manager-narrow-the-table) | Text column filters (Employee, Reporting Manager) narrow the table | Goals | functional | high |
| [TC-EMPGOL-446](#tc-empgol-446-column-filters-search-and-top-level-filters-compose) | Column filters, search and top-level filters compose | Goals | functional | high |
| [TC-EMPGOL-447](#tc-empgol-447-admin-rm-filter-in-the-shared-filter-group-narrows-by-employee) | Admin RM filter in the shared filter group narrows By Employee | Goals | functional | high |
| [TC-EMPGOL-448](#tc-empgol-448-table-options-toggle-column-visibility) | Table options toggle column visibility | Goals | functional | high |
| [TC-EMPGOL-449](#tc-empgol-449-table-options-drag-to-reorder-changes-column-order) | Table options drag-to-reorder changes column order | Goals | functional | high |
| [TC-EMPGOL-450](#tc-empgol-450-expanding-a-row-shows-the-per-goal-detail-table) | Expanding a row shows the per-goal detail table | Goals | smoke | critical |
| [TC-EMPGOL-451](#tc-empgol-451-parent-roll-up-counts-match-the-expanded-goal-rows) | Parent roll-up counts match the expanded goal rows | Goals | functional | high |
| [TC-EMPGOL-452](#tc-empgol-452-bug-empty-values-in-the-expansion-show-a-dash-instead-of-not-specified) | BUG — empty values in the expansion show a dash instead of "Not specified" | Goals | functional | high |
| [TC-EMPGOL-453](#tc-empgol-453-bug-progress-history-says-no-progress-recorded-while-completion-is-non-zero) | BUG — Progress History says "No progress recorded" while Completion % is non-zero | Goals | functional | high |
| [TC-EMPGOL-454](#tc-empgol-454-employees-with-zero-goals-and-non-zero-l-d-hours-are-explained) | Employees with zero goals and non-zero L&D Hours are explained | Goals | functional | high |
| [TC-EMPGOL-455](#tc-empgol-455-edit-goal-action-in-the-expansion-opens-the-goal-s-edit-goal-dialog) | "Edit goal" action in the expansion opens the goal's Edit Goal dialog | Goals | functional | high |
| [TC-EMPGOL-456](#tc-empgol-456-a-search-or-filter-with-no-matches-shows-a-readable-empty-state) | A search or filter with no matches shows a readable empty state | Goals | negative | medium |
| [TC-EMPGOL-457](#tc-empgol-457-range-filter-cannot-be-saved-with-minimum-above-maximum) | Range filter cannot be saved with Minimum above Maximum | Goals | negative | medium |
| [TC-EMPGOL-458](#tc-empgol-458-range-filter-at-the-extremes) | Range filter at the extremes | Goals | boundary | medium |
| [TC-EMPGOL-459](#tc-empgol-459-long-and-special-character-searches-are-handled-safely) | Long and special-character searches are handled safely | Goals | boundary | medium |
| [TC-EMPGOL-460](#tc-empgol-460-out-of-range-page-cannot-be-reached) | Out-of-range page cannot be reached | Goals | boundary | medium |
| [TC-EMPGOL-461](#tc-empgol-461-an-open-expansion-does-not-leak-into-a-new-page-or-search-result) | An open expansion does not leak into a new page or search result | Goals | regression | high |
| [TC-EMPGOL-462](#tc-empgol-462-narrow-columns-keep-sort-and-filter-buttons-visible-with-full-name-on-hover) | Narrow columns keep sort and filter buttons visible with full name on hover | Goals | functional | high |
| [TC-EMPGOL-463](#tc-empgol-463-by-goal-lists-the-goal-catalogue-with-its-columns-and-footer) | By Goal lists the goal catalogue with its columns and footer | Goals | smoke | critical |
| [TC-EMPGOL-464](#tc-empgol-464-by-goal-pagination-reaches-every-goal) | By Goal pagination reaches every goal | Goals | functional | high |
| [TC-EMPGOL-465](#tc-empgol-465-search-matches-goal-name-and-description-and-updates-the-footer) | Search matches goal name and description and updates the footer | Goals | functional | high |
| [TC-EMPGOL-466](#tc-empgol-466-goal-name-shows-the-name-first-and-the-certificate-code-in-muted-text) | Goal Name shows the name first and the certificate code in muted text | Goals | functional | high |
| [TC-EMPGOL-467](#tc-empgol-467-goal-name-sort-is-alphabetical-by-name-not-by-certificate-code) | Goal Name sort is alphabetical by name, not by certificate code | Goals | functional | high |
| [TC-EMPGOL-468](#tc-empgol-468-goal-name-and-type-column-filters) | Goal Name and Type column filters | Goals | functional | high |
| [TC-EMPGOL-469](#tc-empgol-469-assigned-count-columns-sort-numerically-with-none-treated-as-zero) | Assigned count columns sort numerically with None treated as zero | Goals | functional | high |
| [TC-EMPGOL-470](#tc-empgol-470-search-filter-and-sort-combine-without-losing-each-other) | Search, filter and sort combine without losing each other | Goals | functional | high |
| [TC-EMPGOL-471](#tc-empgol-471-assigned-emp-dept-count-opens-the-department-employees-popover) | Assigned Emp. (Dept.) count opens the "Department Employees" popover | Goals | functional | high |
| [TC-EMPGOL-472](#tc-empgol-472-assigned-emp-org-count-opens-a-department-breakdown-that-sums-to-the-count) | Assigned Emp. (Org.) count opens a department breakdown that sums to the count | Goals | functional | high |
| [TC-EMPGOL-473](#tc-empgol-473-assigned-count-columns-use-one-empty-representation) | Assigned count columns use one empty representation | Goals | functional | high |
| [TC-EMPGOL-474](#tc-empgol-474-bug-description-cell-shows-literal-undefined-or-blank-instead-of-not-specified) | BUG — Description cell shows literal "undefined" or blank instead of "Not specified" | Goals | functional | high |
| [TC-EMPGOL-475](#tc-empgol-475-long-descriptions-are-truncated-in-the-table) | Long descriptions are truncated in the table | Goals | functional | high |
| [TC-EMPGOL-476](#tc-empgol-476-add-goal-opens-the-dialog-with-every-field) | Add Goal opens the dialog with every field | Goals | smoke | critical |
| [TC-EMPGOL-477](#tc-empgol-477-goal-type-defaults-to-technical-and-certificate-code-appears-only-for-certificate) | Goal Type defaults to Technical and Certificate Code appears only for Certificate | Goals | functional | high |
| [TC-EMPGOL-478](#tc-empgol-478-a-certificate-code-typed-before-switching-back-to-technical-is-not-submitted) | A Certificate Code typed before switching back to Technical is not submitted | Goals | negative | medium |
| [TC-EMPGOL-479](#tc-empgol-479-save-stays-disabled-until-the-mandatory-fields-are-valid) | Save stays disabled until the mandatory fields are valid | Goals | functional | high |
| [TC-EMPGOL-480](#tc-empgol-480-certificate-goals-cannot-be-saved-without-a-certificate-code) | Certificate goals cannot be saved without a Certificate Code | Goals | negative | medium |
| [TC-EMPGOL-481](#tc-empgol-481-goal-name-shows-invalid-styling-only-after-interaction) | Goal Name shows invalid styling only after interaction | Goals | functional | high |
| [TC-EMPGOL-482](#tc-empgol-482-whitespace-only-goal-name-is-rejected) | Whitespace-only goal name is rejected | Goals | negative | medium |
| [TC-EMPGOL-483](#tc-empgol-483-goal-name-length-is-bounded) | Goal name length is bounded | Goals | boundary | medium |
| [TC-EMPGOL-484](#tc-empgol-484-goal-name-accepts-unicode-emoji-and-punctuation) | Goal name accepts unicode, emoji and punctuation | Goals | boundary | medium |
| [TC-EMPGOL-485](#tc-empgol-485-estimated-duration-units-show-a-real-0-and-clicking-selects-the-contents) | Estimated Duration units show a real 0 and clicking selects the contents | Goals | functional | high |
| [TC-EMPGOL-486](#tc-empgol-486-estimated-duration-rejects-negative-values) | Estimated Duration rejects negative values | Goals | boundary | medium |
| [TC-EMPGOL-487](#tc-empgol-487-estimated-duration-rejects-decimals-text-and-absurd-values) | Estimated Duration rejects decimals, text and absurd values | Goals | boundary | medium |
| [TC-EMPGOL-488](#tc-empgol-488-months-weeks-and-days-are-stored-and-shown-back-exactly) | Months, Weeks and Days are stored and shown back exactly | Goals | functional | high |
| [TC-EMPGOL-489](#tc-empgol-489-rich-text-formatting-and-undo-redo-work-independently-in-all-four-editors) | Rich-text formatting and Undo/Redo work independently in all four editors | Goals | functional | high |
| [TC-EMPGOL-490](#tc-empgol-490-rich-text-link-control-validates-the-url) | Rich-text Link control validates the URL | Goals | negative | medium |
| [TC-EMPGOL-491](#tc-empgol-491-cancel-close-and-escape-discard-a-part-filled-add-goal-dialog) | Cancel, Close and Escape discard a part-filled Add Goal dialog | Goals | functional | high |
| [TC-EMPGOL-492](#tc-empgol-492-create-a-technical-goal-with-all-the-new-fields) | Create a Technical goal with all the new fields | Goals | functional | high |
| [TC-EMPGOL-493](#tc-empgol-493-create-a-certificate-goal-and-see-the-code-in-the-name-column) | Create a Certificate goal and see the code in the Name column | Goals | functional | high |
| [TC-EMPGOL-494](#tc-empgol-494-duplicate-and-near-duplicate-names-trigger-the-duplicate-warning) | Duplicate and near-duplicate names trigger the duplicate warning | Goals | negative | medium |
| [TC-EMPGOL-495](#tc-empgol-495-double-clicking-save-creates-one-goal) | Double-clicking Save creates one goal | Goals | negative | medium |
| [TC-EMPGOL-496](#tc-empgol-496-a-failed-save-keeps-the-dialog-open-with-input-intact) | A failed save keeps the dialog open with input intact | Goals | negative | medium |
| [TC-EMPGOL-497](#tc-empgol-497-edit-goal-locks-name-and-type-and-is-pre-filled) | Edit Goal locks name and type and is pre-filled | Goals | functional | high |
| [TC-EMPGOL-498](#tc-empgol-498-edit-save-enables-only-after-a-change-and-cancel-discards) | Edit Save enables only after a change and Cancel discards | Goals | functional | high |
| [TC-EMPGOL-499](#tc-empgol-499-editing-a-goal-persists-everywhere-it-is-shown) | Editing a goal persists everywhere it is shown | Goals | functional | high |
| [TC-EMPGOL-500](#tc-empgol-500-delete-is-disabled-for-goals-with-assignments) | Delete is disabled for goals with assignments | Goals | functional | high |
| [TC-EMPGOL-501](#tc-empgol-501-delete-is-enabled-for-a-zero-assignment-goal-and-asks-for-confirmation) | Delete is enabled for a zero-assignment goal and asks for confirmation | Goals | functional | high |
| [TC-EMPGOL-502](#tc-empgol-502-a-created-goal-survives-reload-and-matches-the-api-total) | A created goal survives reload and matches the API total | Goals | regression | high |
| [TC-EMPGOL-503](#tc-empgol-503-goal-edits-propagate-to-the-by-employee-expansion) | Goal edits propagate to the By Employee expansion | Goals | integration | medium |
| [TC-EMPGOL-504](#tc-empgol-504-script-payloads-in-goal-fields-never-execute) | Script payloads in goal fields never execute | Goals | security | high |
| [TC-EMPGOL-505](#tc-empgol-505-admin-has-the-full-goals-screen-including-the-rm-filter-and-goal-write-controls) | Admin has the full Goals screen including the RM filter and goal write controls | Goals | security | high |
| [TC-EMPGOL-506](#tc-empgol-506-pmo-sees-goals-with-department-filter-no-rm-filter-and-org-wide-data) | PMO sees Goals with Department filter, no RM filter and org-wide data | Goals | security | high |
| [TC-EMPGOL-507](#tc-empgol-507-em-sees-goals-scoped-to-their-own-population) | EM sees Goals scoped to their own population | Goals | security | high |
| [TC-EMPGOL-508](#tc-empgol-508-regression-check-tm-department-picker-stays-limited-to-the-tm-s-own-departments) | REGRESSION CHECK — TM Department picker stays limited to the TM's own departments | Goals | security | critical |
| [TC-EMPGOL-509](#tc-empgol-509-tm-and-pm-cannot-widen-scope-by-injecting-a-foreign-departmentid-in-the-url) | TM and PM cannot widen scope by injecting a foreign departmentId in the URL | Goals | security | high |
| [TC-EMPGOL-510](#tc-empgol-510-tm-api-calls-with-a-foreign-departmentid-return-no-foreign-data) | TM API calls with a foreign departmentId return no foreign data | Goals | security | high |
| [TC-EMPGOL-511](#tc-empgol-511-pm-sees-goals-without-a-department-picker-scoped-to-their-own-team) | PM sees Goals without a Department picker, scoped to their own team | Goals | security | high |
| [TC-EMPGOL-512](#tc-empgol-512-rm-filter-is-admin-only-and-a-managerid-parameter-does-not-widen-scope) | RM filter is Admin-only and a managerId parameter does not widen scope | Goals | security | high |
| [TC-EMPGOL-513](#tc-empgol-513-csm-is-redirected-to-unauthorized-including-deep-links) | CSM is redirected to /unauthorized, including deep links | Goals | security | high |
| [TC-EMPGOL-514](#tc-empgol-514-employee-personas-kashyap-punit-are-redirected-to-unauthorized) | Employee personas (kashyap, punit) are redirected to /unauthorized | Goals | security | high |
| [TC-EMPGOL-515](#tc-empgol-515-new-goals-endpoints-refuse-employee-and-csm-tokens) | New Goals endpoints refuse Employee and CSM tokens | Goals | security | high |
| [TC-EMPGOL-516](#tc-empgol-516-legacy-employee-goals-and-goals-endpoints-stay-gated-for-employee-and-csm) | Legacy /employee-goals and /goals endpoints stay gated for Employee and CSM | Goals | security | high |
| [TC-EMPGOL-517](#tc-empgol-517-goal-write-apis-reject-employee-and-csm-tokens) | Goal write APIs reject Employee and CSM tokens | Goals | security | high |
| [TC-EMPGOL-518](#tc-empgol-518-goal-write-controls-per-role-match-the-permission-matrix) | Goal write controls per role match the permission matrix | Goals | security | high |
| [TC-EMPGOL-519](#tc-empgol-519-a-department-scoped-role-cannot-write-goals-outside-its-scope-via-the-api) | A department-scoped role cannot write goals outside its scope via the API | Goals | security | high |
| [TC-EMPGOL-520](#tc-empgol-520-expired-access-token-refreshes-silently) | Expired access token refreshes silently | Goals | security | high |
| [TC-EMPGOL-521](#tc-empgol-521-xss-in-every-goals-search-box-is-rendered-as-text) | XSS in every Goals search box is rendered as text | Goals | security | high |
| [TC-EMPGOL-522](#tc-empgol-522-injection-style-query-values-are-rejected-cleanly-by-the-api) | Injection-style query values are rejected cleanly by the API | Goals | security | high |
| [TC-EMPGOL-523](#tc-empgol-523-dashboard-reaches-kpis-within-the-2-3-s-target) | Dashboard reaches KPIs within the 2–3 s target | Goals | performance | high |
| [TC-EMPGOL-524](#tc-empgol-524-only-the-open-tab-loads-its-data) | Only the open tab loads its data | Goals | performance | high |
| [TC-EMPGOL-525](#tc-empgol-525-switching-back-with-the-same-filters-reuses-data) | Switching back with the same filters reuses data | Goals | performance | high |
| [TC-EMPGOL-526](#tc-empgol-526-changing-year-or-department-refreshes-only-the-open-tab) | Changing Year or Department refreshes only the open tab | Goals | performance | high |
| [TC-EMPGOL-527](#tc-empgol-527-by-employee-and-by-goal-paint-quickly) | By Employee and By Goal paint quickly | Goals | performance | high |
| [TC-EMPGOL-528](#tc-empgol-528-quickly-switching-tabs-filters-does-not-show-unable-to-reach-the-server) | Quickly switching tabs/filters does not show "Unable to reach the server" | Goals | negative | medium |
| [TC-EMPGOL-529](#tc-empgol-529-unknown-tab-and-view-parameters-fall-back-safely) | Unknown tab and view parameters fall back safely | Goals | negative | medium |
| [TC-EMPGOL-530](#tc-empgol-530-malformed-or-unknown-departmentid-in-the-url-is-handled) | Malformed or unknown departmentId in the URL is handled | Goals | negative | medium |
| [TC-EMPGOL-531](#tc-empgol-531-bug-browser-back-after-a-tab-switch-leaves-the-app) | BUG — Browser Back after a tab switch leaves the app | Goals | negative | medium |
| [TC-EMPGOL-532](#tc-empgol-532-both-tablists-support-arrow-home-end-keyboard-navigation) | Both tablists support Arrow/Home/End keyboard navigation | Goals | accessibility | medium |
| [TC-EMPGOL-533](#tc-empgol-533-bug-add-edit-goal-dialog-does-not-restore-focus-on-close) | BUG — Add/Edit Goal dialog does not restore focus on close | Goals | accessibility | medium |
| [TC-EMPGOL-534](#tc-empgol-534-dashboard-dialogs-trap-and-restore-focus) | Dashboard dialogs trap and restore focus | Goals | accessibility | medium |
| [TC-EMPGOL-535](#tc-empgol-535-one-h1-and-a-logical-heading-order) | One H1 and a logical heading order | Goals | accessibility | medium |
| [TC-EMPGOL-536](#tc-empgol-536-charts-expose-an-accessible-name-and-text-alternative) | Charts expose an accessible name and text alternative | Goals | accessibility | medium |
| [TC-EMPGOL-537](#tc-empgol-537-table-options-and-range-filter-popovers-have-accessible-names) | Table options and range-filter popovers have accessible names | Goals | accessibility | medium |
| [TC-EMPGOL-538](#tc-empgol-538-automated-axe-scan-has-no-serious-violations-status-not-by-colour-alone) | Automated axe scan has no serious violations; status not by colour alone | Goals | accessibility | medium |
| [TC-EMPGOL-539](#tc-empgol-539-result-counts-are-announced) | Result counts are announced | Goals | accessibility | medium |
| [TC-EMPGOL-540](#tc-empgol-540-responsive-layout-at-phone-and-tablet-widths) | Responsive layout at phone and tablet widths | Goals | functional | high |
| [TC-EMPGOL-541](#tc-empgol-541-employee-goals-is-not-swallowed-by-the-employee-id-route) | /employee/goals is not swallowed by the /employee/:id route | Goals | regression | high |
| [TC-EMPGOL-542](#tc-empgol-542-sibling-skills-page-is-unaffected) | Sibling Skills page is unaffected | Goals | regression | high |
| [TC-EMPGOL-543](#tc-empgol-543-one-term-for-overdue-delayed-across-the-screen) | One term for overdue/delayed across the screen | Goals | regression | high |
| [TC-EMPGOL-544](#tc-empgol-544-no-bare-dash-undefined-or-null-anywhere-on-the-goals-screen) | No bare dash, "undefined" or "null" anywhere on the Goals screen | Goals | regression | high |
| [TC-EMPGOL-545](#tc-empgol-545-department-filter-list-matches-the-department-module) | Department filter list matches the Department module | Goals | integration | high |
| [TC-EMPGOL-546](#tc-empgol-546-goals-total-employees-reconciles-with-employee-details) | Goals Total Employees reconciles with Employee Details | Goals | integration | high |
| [TC-EMPGOL-547](#tc-empgol-547-assigned-emp-org-reconciles-with-the-dashboard-assignments-dialog) | Assigned Emp. (Org.) reconciles with the dashboard assignments dialog | Goals | integration | high |

---

## Goals

147 test cases.

### Accessibility (8)

#### TC-EMPGOL-532 — Both tablists support Arrow/Home/End keyboard navigation

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-213 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Focus tab "Dashboard", press ArrowRight, End, Home
2. Repeat on tablist "Goals view"

**Expected**

Focus and selection move between tabs per WAI-ARIA tabs pattern; focus never drops to body (6.2.0 D22)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-533 — BUG — Add/Edit Goal dialog does not restore focus on close

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-331 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Tab to "Add Goal" and press Enter
2. Press Tab repeatedly
3. Press Escape

**Expected**

Focus starts in Goal Name, stays trapped inside the dialog, and returns to "Add Goal" on close. Observed 2026-10-07: after Escape focus is on <body> (6.2.0 D23 still open)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-534 — Dashboard dialogs trap and restore focus

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open View All and a View assignments dialog via keyboard
2. Tab through
3. Press Escape

**Expected**

Focus trapped; Escape and Close dismiss; focus returns to the opener button

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-535 — One H1 and a logical heading order

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-325 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Read all headings on Dashboard and Goals

**Expected**

Single H1 "Goals"; dashboard sections are h2; dialog titles h2

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-536 — Charts expose an accessible name and text alternative

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-326 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Inspect the three chart elements

**Expected**

Each chart (role=application) has an accessible name and values reachable without hover. Observed: the three role=application elements are unnamed

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-537 — Table options and range-filter popovers have accessible names

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open "Table options"
2. Open "Filter by Overdue Goals"

**Expected**

Each dialog has an accessible name (e.g. "Table options", "Filter Overdue Goals"). Observed: both are unnamed dialogs

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-538 — Automated axe scan has no serious violations; status not by colour alone

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-329 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Run axe on Dashboard, By Employee (one row expanded), By Goal, Add Goal dialog

**Expected**

No serious/critical violations; statuses carry text labels; muted certificate code meets AA contrast

**Automation Hint**

Use primaryPage fixture. @axe-core/playwright AxeBuilder.

#### TC-EMPGOL-539 — Result counts are announced

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-330 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Search in By Employee and in Completion by Goal with a screen reader or by inspecting live regions

**Expected**

"Showing …" texts are role=status live regions and update after filtering

**Automation Hint**

Use primaryPage fixture. 

### Boundary (7)

#### TC-EMPGOL-458 — Range filter at the extremes

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open "Filter by Overdue Goals"
2. Set Minimum = Maximum = upper bound (3) and Save
3. Then set the full range 0–3 and Save

**Expected**

Upper-bound filter returns only rows with Overdue Goals = 3; full range returns the unfiltered total 3648

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-459 — Long and special-character searches are handled safely

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Search a 500-character string
2. Search each of: %  _  '  "  \  *  (a single space)

**Expected**

No error toast, no 4xx/5xx; wildcards are treated literally ("%" does not return everyone); a single space behaves like empty search

**Test Data**

- `inputs`: <500 x chars>, %, _, ', ", \\, *, 

**Automation Hint**

Use primaryPage fixture. Watch responses of /employee-goals/employees for status < 400.

#### TC-EMPGOL-460 — Out-of-range page cannot be reached

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals?tab=goals&page=999
2. Go to page 37 and click Next via keyboard

**Expected**

Unknown page param is ignored and page 1 shows ("Showing 1 - 100 of 3648 results"); Next on the last page is disabled — no empty page

**Automation Hint**

Use primaryPage fixture. Observed: page param not used, page 1 rendered.

#### TC-EMPGOL-483 — Goal name length is bounded

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-286 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Enter a 255-character name
2. Then a 256-character name
3. Then a 1000-character name

**Expected**

A documented maximum is enforced (maxlength or inline error) and the stored name equals what was accepted; no 500

**Test Data**

- `lengths`: 255, 256, 1000

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-484 — Goal name accepts unicode, emoji and punctuation

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-287 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Create goal "Gœal ✓ — 日本語 🚀 & <b>"
2. Search it and open Edit

**Expected**

Name is stored and displayed exactly, sortable and searchable

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-486 — Estimated Duration rejects negative values

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-293 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type -1 in Months, -5 in Weeks, -10 in Days
2. Try to Save

**Expected**

Negative values are blocked or rejected on save with an inline message; typed input cannot bypass min=0

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-487 — Estimated Duration rejects decimals, text and absurd values

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-295 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type 1.5 / "abc" / 9999 into each unit

**Expected**

Decimals and text are rejected or normalised; an upper bound exists (e.g. Weeks <= 4/52, Days <= 31/365) or the value is normalised

**Automation Hint**

Use primaryPage fixture. 

### Functional (74)

#### TC-EMPGOL-403 — Shared filters show their documented defaults on first load

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) — Department filter starts on All Departments |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-215 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Navigate to /employee/goals with no query string
2. Read the value of each combobox in "Goal filters"

**Expected**

Year = "All Years", Department = "All Departments", RM = "All Managers", Timeframe = "Last 15 days"; no "Select a department" empty state is shown (6.2.0 defect D1 gone)

**Automation Hint**

Use primaryPage fixture. getByRole('combobox', { name: 'Year' | 'Department' | 'RM' | 'Timeframe' }) toHaveText.

#### TC-EMPGOL-404 — Year and Timeframe comboboxes offer exactly the expected options

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-219 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open combobox "Year" and read the options
2. Press Escape
3. Open combobox "Timeframe" and read the options

**Expected**

Year options: All Years, 2026, 2025 (All Years selected). Timeframe options in order: Last 5 days, Last 15 days (selected), Last 30 days, Last 3 months, Last 6 months, All time

**Test Data**

- `year`: All Years, 2026, 2025
- `timeframe`: Last 5 days, Last 15 days, Last 30 days, Last 3 months, Last 6 months, All time

**Automation Hint**

Use primaryPage fixture. getByRole('option') allInnerTexts after clicking each combobox.

#### TC-EMPGOL-405 — Department combobox lists All Departments plus every department and is type-to-search

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click combobox "Department"
2. Count the options in the suggestions listbox
3. Type "QA"

**Expected**

Listbox shows "All Departments" (selected) followed by the departments (~40 incl. ADMIN, ANDROID, QA, REACT, TECH LEADERSHIP); typing "QA" narrows the list to options containing QA

**Test Data**

- `search`: QA
- `minOptions`: 35

**Automation Hint**

Use primaryPage fixture. Combobox opens a listbox of options; type with keyboard after click and assert getByRole('option', { name: 'QA', exact: true }) visible and 'ANDROID' hidden.

#### TC-EMPGOL-406 — Admin RM filter lists All Managers plus RMs and narrows the dashboard to one RM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Note the five KPI values
2. Open combobox "RM" and type "Aarav Barot"
3. Select "Aarav Barot"

**Expected**

RM listbox starts with "All Managers" and holds ~400 managers; after selecting one RM, Total Employees drops to that RM's team size (< 3,648) and the RM chart caption no longer reads "of 400 RMs"

**Test Data**

- `rm`: Aarav Barot

**Automation Hint**

Use primaryPage fixture. getByRole('combobox', { name: 'RM' }); compare KPI group innerText before/after.

#### TC-EMPGOL-407 — L&D Hours and Billable Hours tiles expose info tooltips with the documented text

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) / Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Hover the info icon next to "L&D Hours"
2. Hover the info icon next to "Billable Hours"

**Expected**

Tooltip/accessible name reads "Non-billable hours logged in the selected timeframe" and "Billable hours logged in the selected timeframe" respectively

**Automation Hint**

Use primaryPage fixture. page.getByRole('group', { name: 'Goal KPIs' }).getByRole('img', { name: 'Non-billable hours logged in the selected timeframe' }) and the Billable one; hover and assert tooltip text.

#### TC-EMPGOL-408 — Changing Timeframe updates the hours tiles and is written to the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Note L&D Hours and Billable Hours on "Last 15 days"
2. Select Timeframe "Last 5 days" and note both values
3. Select Timeframe "All time" and note both values and the URL

**Expected**

Hours change with the timeframe and are monotonic: Last 5 days <= Last 15 days <= All time for both tiles; URL carries timeFrame=all for All time. Total Employees / Employees with Goals / Goal Assignments stay unchanged (they are not timeframe-scoped) — confirm this is intended

**Test Data**

- `observed`: 5d: 70,504h / 76,295h; 15d: 157,867h / 161,518h; all: 3,728,944h / 3,921,057h

**Automation Hint**

Use primaryPage fixture. Parse KPI numbers (strip ',' and 'h'). Observed admin: 5d 70,504h/76,295h; 15d 157,867h/161,518h; All time 3,728,944h/3,921,057h.

#### TC-EMPGOL-409 — Changing Department re-scopes every KPI and is written to the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Note the five KPI values on All Departments
2. Select Department "QA"
3. Read the KPIs and the URL

**Expected**

All KPI counts drop below the All Departments values, Employees with Goals <= Total Employees, URL gains departmentId=<QA uuid>; charts and lists refresh to the same scope

**Test Data**

- `department`: QA

**Automation Hint**

Use primaryPage fixture. expect.poll on KPI text change; assert page.url() contains 'departmentId='.

#### TC-EMPGOL-410 — Changing Year re-scopes goal KPIs, including L&D-related figures where applicable

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-221 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. On Timeframe "All time" note the KPIs for Year "All Years"
2. Select Year "2026" and note the KPIs
3. Select Year "2025" and note the KPIs

**Expected**

Employees with Goals and Goal Assignments differ between 2026 and 2025 and each is <= the All Years value; if L&D Hours stays identical across years the tile/tooltip must make clear it is timeframe-based only (6.2.0 defect D4)

**Automation Hint**

Use primaryPage fixture. Compare tuples per year.

#### TC-EMPGOL-411 — KPI invariants hold and the coverage doughnut reconciles with the KPIs

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-218 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Read Total Employees and Employees with Goals
2. Hover the "Goals Assigned" and "No Goals" segments of "Employee Goal Coverage"

**Expected**

Employees with Goals <= Total Employees; Goals Assigned segment = Employees with Goals; Goals Assigned + No Goals = Total Employees (API dashboard: employeesWithGoals + employeesWithoutGoals = totalEmployees)

**Automation Hint**

Use primaryPage fixture. Chart is an unnamed role=application; read values via hover tooltip or from GET /api/v1/employee-goals/dashboard response (page.waitForResponse).

#### TC-EMPGOL-412 — Goal Tracking Health doughnut shows four statuses that sum to Goal Assignments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-223 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Read the legend under "Goal Tracking Health"
2. Hover each segment and note the count

**Expected**

Legend lists Completed, Delayed, In Progress, Not Started; the four counts sum to the Goal Assignments KPI; colours are distinct

**Automation Hint**

Use primaryPage fixture. Legend is a list following the heading; counts from statusBreakdown in the /employee-goals/dashboard response.

#### TC-EMPGOL-413 — Clicking a chart legend item toggles that series

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — chart legend |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Delayed" in the Goal Tracking Health legend
2. Click it again

**Expected**

First click hides the Delayed segment (legend item shown as inactive); second click restores it; other segments unaffected

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Legend items are listitems; visual check via screenshot compare.

#### TC-EMPGOL-414 — Admin sees "RM-wise Goal Status" with one bar per RM and an L&D Hours by RM line

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — admins see one bar per RM |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. As Admin, scroll to the third chart

**Expected**

h2 reads "RM-wise Goal Status"; legend: Completed, Delayed, In Progress, L&D Hours by RM, Not Started; caption "Showing 1–400 of 400 RMs · Ctrl + scroll to zoom · drag slider to pan"

**Automation Hint**

Use primaryPage fixture. getByText(/Ctrl \+ scroll to zoom/).

#### TC-EMPGOL-415 — RM chart Zoom in / Zoom out / Reset zoom and Ctrl+scroll work

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — chart actions |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Confirm "Zoom out" and "Reset zoom" are disabled
2. Click "Zoom in" twice
3. Read the caption
4. Click "Zoom out" once
5. Click "Reset zoom"
6. Hold Ctrl and scroll the mouse wheel over the chart

**Expected**

After Zoom in, Zoom out and Reset zoom enable and the caption range narrows (e.g. "Showing 1–N of 400 RMs", N<400); Zoom out widens it; Reset returns to "1–400 of 400" with both buttons disabled again; Ctrl+scroll also zooms

**Automation Hint**

Use primaryPage fixture. getByRole('group', { name: 'Zoom range' }).getByRole('button', { name: 'Zoom in' }); page.keyboard.down('Control') + page.mouse.wheel(0,-300).

#### TC-EMPGOL-416 — Pan chart slider is disabled at full range and pans after zooming

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Confirm slider "Pan chart" is disabled
2. Click "Zoom in"
3. Focus the slider and press ArrowRight 3 times

**Expected**

Slider becomes enabled after zoom; the caption window shifts (start index > 1) while the window width stays the same

**Automation Hint**

Use primaryPage fixture. getByRole('slider', { name: 'Pan chart' }).

#### TC-EMPGOL-417 — "Show as separate charts" splits the combined RM chart and toggles back

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-227 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Check checkbox "Show as separate charts"
2. Observe the chart area
3. Uncheck it

**Expected**

Checked: stacked status bars and the L&D hours series render as separate charts; unchecked: single combined chart returns; no console errors

**Automation Hint**

Use primaryPage fixture. getByRole('checkbox', { name: 'Show as separate charts' }); count role=application inside the section before/after.

#### TC-EMPGOL-418 — RM persona sees "Your Team Goal Status" with one bar per team member

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — RMs see Your Team Goal Status |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | EM |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as kunal.jadeja@simformsolutions.com (emPage fixture, EM)

**Steps**

1. Navigate to /employee/goals as the EM
2. Read the third chart heading, legend and caption
3. Compare the caption total with the Total Employees KPI

**Expected**

Heading "Your Team Goal Status"; legend includes "L&D Hours by Team Member"; caption "Showing 1–372 of 372 employees" equals Total Employees (372); no "RM-wise Goal Status" heading

**Automation Hint**

Use emPage fixture. Observed EM: 372/232/791.

#### TC-EMPGOL-419 — PMO team chart caption total matches Total Employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as bhumi.chauhan@simformsolutions.com (pmoPage fixture, PMO)

**Steps**

1. Navigate to /employee/goals as PMO
2. Read Total Employees KPI
3. Read the "Your Team Goal Status" caption

**Expected**

Caption "Showing 1–X of X employees" X equals the Total Employees KPI. Observed 2026-10-07: KPI 3,648 but caption 3,644 — a 4-employee mismatch

**Automation Hint**

Use pmoPage fixture. Parse both numbers; expected to fail until fixed.

#### TC-EMPGOL-420 — Completion by Goal shows a ranked top-5 list with average completion bars

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-229 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Scroll to "Completion by Goal"
2. Read the list, the sort button and the status

**Expected**

Five buttons "View assignments for <goal>" ranked #1..#5, each with progressbar "Average completion" and a % value in non-increasing order; sort button "Sort goals: Completion, high to low"; status "Showing 1–5 of N goals"; combobox "Rows per page" = 5

**Automation Hint**

Use primaryPage fixture. Scope to the section after heading 'Completion by Goal'; parse % values.

#### TC-EMPGOL-421 — Completion by Goal sort toggle reverses the order

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Sort goals: Completion, high to low"
2. Read the list and the button name
3. Click again

**Expected**

Button name flips to a low-to-high variant and % values become non-decreasing; second click restores high-to-low

**Automation Hint**

Use primaryPage fixture. Locate the sort button by /^Sort goals: Completion/.

#### TC-EMPGOL-422 — Completion by Goal search narrows the list and clearing restores it

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type "Agile" in "Search goals" of Completion by Goal
2. Read list and status
3. Clear the box

**Expected**

Only goals containing "Agile" remain (e.g. "Agile Development Mastery"), status total shrinks accordingly; clearing restores "Showing 1–5 of N goals"

**Test Data**

- `search`: Agile

**Automation Hint**

Use primaryPage fixture. First textbox 'Search goals' belongs to Completion by Goal; second to Most At-Risk.

#### TC-EMPGOL-423 — Rows per page and list pagination work on Completion by Goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Change "Rows per page" to 10
2. Click "Next page"
3. Click "Page 1"
4. Go to the last page

**Expected**

With 10 rows the status reads "Showing 1–10 of N"; Next shows 11–20; "Previous page" disabled on page 1, "Next page" disabled on the last page; page count = ceil(N/size)

**Automation Hint**

Use primaryPage fixture. getByRole('navigation', { name: 'Goal list pages' }).

#### TC-EMPGOL-424 — Most At-Risk Goals lists goals by delayed-employee count with an at-risk marker

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Scroll to "Most At-Risk Goals"
2. Read list items and sort button
3. Toggle the sort

**Expected**

Items show img "At risk" and "N emp", ordered by N descending under "Sort goals: Employees, most first"; toggling reverses; status "Showing 1–5 of M goals"

**Automation Hint**

Use primaryPage fixture. Second "Search goals"/sort/navigation in DOM order.

#### TC-EMPGOL-426 — View All opens a full-list dialog for both ranked lists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "View All" in Completion by Goal
2. Inspect the dialog
3. Click "Close"
4. Repeat for Most At-Risk Goals

**Expected**

Dialog "Completion by Goal" shows the same ranking, its own "Search goals", sort button, "Rows per page" = 20, "Showing 1–20 of N goals", pagination and "Close"; the at-risk dialog behaves the same; Close returns to the dashboard

**Automation Hint**

Use primaryPage fixture. getByRole('dialog', { name: 'Completion by Goal' }); at-risk dialog name not yet captured — ground it.

#### TC-EMPGOL-427 — View assignments dialog shows the per-employee assignments of a goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "View assignments for <top goal>"
2. Inspect the dialog

**Expected**

Dialog named after the goal; textbox "Search employee or manager"; "N assignments"; table Employee / Reporting Manager / Status / Completion %; status "Showing 1 - x of N results"; navigation "Pagination Navigation"; "Close"

**Test Data**

- `example`: zozooo — 1 assignments, Nisha Das / Ekta Mistry / Delayed / 89%

**Automation Hint**

Use primaryPage fixture. getByRole('dialog', { name: goalName }).

#### TC-EMPGOL-428 — Assignments dialog search matches employee and manager names

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open View assignments for a goal with many assignments
2. Type an employee name
3. Clear and type a reporting manager name

**Expected**

Rows narrow to the employee; then to all rows whose Reporting Manager matches; "N assignments"/status totals update; clearing restores

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-429 — Assignments dialog sorting, Status filter and pagination work

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open View assignments for a goal with >10 assignments
2. Sort each of Employee, Reporting Manager, Status, Completion %
3. Apply "Filter by Status" = In Progress
4. Click "Next page"

**Expected**

Each sort orders the column asc then desc; filter leaves only In Progress rows; pagination moves to the next page with correct "Showing" range; Close dismisses

**Automation Hint**

Use primaryPage fixture. Column buttons 'Sort ascending' / 'Filter by <Column>' inside the dialog.

#### TC-EMPGOL-431 — Filters persist when switching between Dashboard and Goals tabs

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — filters kept when switching tabs |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-212 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Set Year 2026, Department QA, Timeframe Last 30 days on Dashboard
2. Click tab "Goals"
3. Read the filters
4. Change Timeframe to Last 5 days on Goals
5. Click tab "Dashboard"

**Expected**

All filter values carry over in both directions; there is one shared selection (6.2.0 defect D5 fixed); Dashboard numbers match the carried-over filters

**Automation Hint**

Use primaryPage fixture. Observed: Last 5 days carried to Goals and back.

#### TC-EMPGOL-432 — Reload keeps the filtered dashboard (filters represented in the URL)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-207 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Set Department QA, Timeframe All time, Year 2026
2. Read the URL
3. Reload the page

**Expected**

URL carries departmentId and timeFrame (and year); after reload all three filters and the KPIs are restored. Year must also survive reload (6.2.0 defect D19)

**Automation Hint**

Use primaryPage fixture. Observed timeFrame=all and departmentId=<uuid> in URL; verify Year.

#### TC-EMPGOL-437 — Deep links restore the Goals tab and the By Goal view

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-204 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals?tab=goals in a fresh page
2. Open /employee/goals?tab=goals&view=catalog in a fresh page

**Expected**

First lands on Goals > By Employee; second on Goals > By Goal ("Showing 1 - 100 of 545 results") — 6.2.0 defect D6 fixed

**Automation Hint**

Use primaryPage fixture. Assert tab 'Goals' and 'By Goal' aria-selected.

#### TC-EMPGOL-438 — By Employee is server-paged: 100 rows per page, 37 pages

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) — server-side paging |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-237 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Next page"
2. Read the footer and first row
3. Click "Page 37"
4. Click "Previous page" until page 1

**Expected**

Page 2 footer "Showing 101 - 200 of 3648 results" with different rows; page 37 "Showing 3601 - 3648 of 3648 results" with 48 data rows; "Next page" disabled on page 37 and "Previous page" disabled on page 1. DOM never holds more than 100 data rows (6.2.0 defect D3 fixed)

**Automation Hint**

Use primaryPage fixture. Count rows with name starting 'Show goals' or 'Hide goals'; each data row is followed by a hidden detail row.

#### TC-EMPGOL-439 — Page change requests one server page instead of the whole organisation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Record network while clicking "Page 2"

**Expected**

Exactly one GET /api/v1/employee-goals/employees with page=2 and limit in {100,200,300}; no GET /api/v1/employees page walk

**Automation Hint**

Use primaryPage fixture. page.waitForRequest(/employee-goals\/employees.*page=2/).

#### TC-EMPGOL-440 — Search employee filters server-side and resets to page 1

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-239 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Go to page 5
2. Type "Arjun Jadeja" into "Search employee"
3. Read rows and footer
4. Clear the box

**Expected**

Pager returns to page 1, only matching employees remain, footer total shrinks; clearing restores "of 3648 results"

**Test Data**

- `search`: Arjun Jadeja

**Automation Hint**

Use primaryPage fixture. Debounced search — wait for footer change with expect.poll.

#### TC-EMPGOL-441 — Sorting Employee and Reporting Manager columns works ascending and descending

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Sort ascending" in the Employee header
2. Read first 10 names
3. Click the sort button again
4. Repeat for Reporting Manager

**Expected**

Names are alphabetical A→Z then Z→A (locale compare) across the page; sort button name/indicator reflects direction; employees without a manager group at one end and read "Not specified"

**Automation Hint**

Use primaryPage fixture. columnheader 'Employee ...'.getByRole('button', { name: /^Sort/ }).

#### TC-EMPGOL-442 — Sorting the numeric columns orders rows numerically

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. For each of Goals, Overdue Goals, Certificates, L&D Hours: click its sort button twice

**Expected**

Values are numerically ascending then descending (88h > 9h, not string order) on page 1 and the order continues on page 2

**Test Data**

- `columns`: Goals, Overdue Goals, Certificates, L&D Hours

**Automation Hint**

Use primaryPage fixture. Parametrise over the four columns; strip trailing "h".

#### TC-EMPGOL-443 — Numeric range filter (Overdue Goals) narrows rows and Clear resets

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Filter by Overdue Goals"
2. Read the popover title and the min/max labels
3. Move slider "Minimum" to 1 with ArrowRight
4. Click "Save"
5. Reopen and click "Clear"

**Expected**

Popover titled "Overdue Goals" shows the data range (observed 0–3) with sliders "Minimum"/"Maximum", buttons Clear/Save/Close; after Save every row has Overdue Goals >= 1 and the footer total drops; Clear restores the full total

**Automation Hint**

Use primaryPage fixture. Popover dialog has no accessible name — locate by getByRole('dialog').filter({ hasText: 'Overdue Goals' }); drive sliders with keyboard.

#### TC-EMPGOL-444 — Range filters on Goals, Certificates and L&D Hours

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. For each column open "Filter by <column>"
2. Set Maximum to the lower bound + 1 and Save
3. Read rows and footer
4. Clear

**Expected**

All rows fall inside the chosen range for that column; totals update server-side; clearing restores 3648

**Test Data**

- `columns`: Goals, Certificates, L&D Hours

**Automation Hint**

Use primaryPage fixture. Parametrise.

#### TC-EMPGOL-445 — Text column filters (Employee, Reporting Manager) narrow the table

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-241 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Filter by Reporting Manager"
2. Search/select "Aarav Barot"
3. Apply

**Expected**

Every row shows Reporting Manager "Aarav Barot"; footer total equals that RM's team size; clearing restores

**Test Data**

- `rm`: Aarav Barot

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-446 — Column filters, search and top-level filters compose

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-245 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Apply Reporting Manager = Aarav Barot
2. Apply Overdue Goals range min 1
3. Type part of a team member name in Search employee
4. Change top Department to the RM's department
5. Clear the search only

**Expected**

Each step narrows (or keeps) the result set — totals are monotonic non-increasing; clearing the search keeps both column filters active

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-447 — Admin RM filter in the shared filter group narrows By Employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. On Goals > By Employee select combobox "RM" = "Aarav Barot"

**Expected**

All rows have Reporting Manager "Aarav Barot"; footer total equals the same count the dashboard shows for that RM

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-448 — Table options toggle column visibility

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Table options"
2. Turn switch "Certificates" off
3. Close the dialog
4. Reopen and turn it back on

**Expected**

Dialog list "Column Visibility" has switches Reporting Manager, Goals, Overdue Goals, Certificates, L&D Hours (all checked); the Certificates column disappears when off and returns when on; Employee and Show goals cannot be hidden

**Automation Hint**

Use primaryPage fixture. getByRole('list', { name: 'Column Visibility' }).getByRole('switch', { name: 'Certificates' }).

#### TC-EMPGOL-449 — Table options drag-to-reorder changes column order

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open "Table options"
2. Drag the "L&D Hours" handle ("Drag to reorder") above "Goals"
3. Close

**Expected**

Header order becomes Employee, Reporting Manager, L&D Hours, Goals, …; data cells follow their headers

**Automation Hint**

Use primaryPage fixture. PARTIAL — drag-and-drop with dnd-kit: use mouse.down/move/up on the 'Drag to reorder' button; or keyboard Space+Arrow.

#### TC-EMPGOL-451 — Parent roll-up counts match the expanded goal rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-250 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Expand an employee with Overdue Goals > 0 (e.g. Pooja Vyas 4/1/1)
2. Count rows, Delayed rows and certificate goals

**Expected**

Goals = number of nested rows; Overdue Goals = rows with Status Delayed; Certificates = certificate-type goals

**Test Data**

- `example`: Pooja Vyas — Goals 4, Overdue 1, Certificates 1

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-452 — BUG — empty values in the expansion show a dash instead of "Not specified"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — empty values read "Not specified" |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-259 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Expand "Arjun Jadeja"
2. Read Start Date / End Date of the Not Started goals

**Expected**

Missing dates (and any missing Reporting Manager) read "Not specified" per the 6.3.0 note and project convention. Observed 2026-10-07: Start Date and End Date cells render "—"

**Automation Hint**

Use primaryPage fixture. Assert no cell text equals "—", "-", "N/A", "null" inside the expansion.

#### TC-EMPGOL-453 — BUG — Progress History says "No progress recorded" while Completion % is non-zero

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-252 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Expand "Arjun Jadeja"
2. Read row "Master React Advanced Patterns"

**Expected**

Progress History is consistent with Completion % (a goal at 20% with a start date shows progress entries or a different label). Observed: "In Progress · No progress recorded · 20% · Jan 13, 2026" — 6.2.0 D8 still open

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-454 — Employees with zero goals and non-zero L&D Hours are explained

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-253 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open "Filter by Goals", set Maximum 0, Save
2. Read the L&D Hours column

**Expected**

Either L&D Hours is 0h for zero-goal employees, or the column/tooltip makes clear L&D Hours are timesheet (non-billable) hours independent of goals (6.2.0 D7)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-455 — "Edit goal" action in the expansion opens the goal's Edit Goal dialog

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-260 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Expand "Arjun Jadeja"
2. Click "Edit goal Real-time Communication"
3. Inspect, then Cancel

**Expected**

Dialog "Edit Goal" opens for that goal with Goal Name and Goal Type disabled and the descriptive fields editable; Cancel closes with no change; there is still no control to assign a goal or record progress (open product question from 6.2.0)

**Automation Hint**

Use primaryPage fixture. getByRole('button', { name: 'Edit goal Real-time Communication' }).

#### TC-EMPGOL-462 — Narrow columns keep sort and filter buttons visible with full name on hover

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — narrow columns keep sort/filter buttons visible |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Set viewport 1024×768
2. Open Goals > By Employee
3. Hover the truncated "Overdue Goals" and "L&D Hours" headers

**Expected**

Sort and filter buttons remain visible in every header; hovering a truncated header shows its full name

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-464 — By Goal pagination reaches every goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-263 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Next page"
2. Click "Page 6"

**Expected**

Page 2 "Showing 101 - 200 of 545 results"; page 6 "Showing 501 - 545 of 545 results" with 45 rows; Next disabled on page 6 (6.2.0 D2 fixed — goals beyond 100 reachable)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-465 — Search matches goal name and description and updates the footer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-264 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type "Kubernetes" in "Search"
2. Clear and search a goal known to be on page 4+
3. Clear

**Expected**

Matching goals (by name or description) are shown with an updated footer; a goal beyond the first 100 is found; clearing restores 545

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-466 — Goal Name shows the name first and the certificate code in muted text

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Find "Kubernetes Administrator (CKA)" and a Technical goal (e.g. "GraphQL API Design")

**Expected**

Certificate goal cell renders "Kubernetes Administrator (CKA)" followed by muted "CKA"; Technical goal shows only its name

**Automation Hint**

Use primaryPage fixture. Cell text concatenates as "Kubernetes Administrator (CKA)CKA" — assert first child text and muted span separately.

#### TC-EMPGOL-467 — Goal Name sort is alphabetical by name, not by certificate code

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — name sort is alphabetical |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-270 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Sort ascending" in the Goal Name header
2. Read the first 20 names
3. Click again

**Expected**

Names (excluding the muted code) are in A→Z then Z→A locale order; certificate goals sit where their names belong (6.2.0 D9 fixed)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-468 — Goal Name and Type column filters

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-268 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Filter by Goal Name" and pick "GraphQL API Design"
2. Clear
3. Click "Filter by Type" and pick "Certificate"

**Expected**

Goal Name filter lists names exactly as shown in the cells and narrows to the chosen goal; Type filter leaves only Certificate rows; footer totals update

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-469 — Assigned count columns sort numerically with None treated as zero

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Sort ascending" on Assigned Emp. (Dept.)
2. Click again
3. Repeat for Assigned Emp. (Org.)

**Expected**

Counts order numerically; "None" rows sort with 0; default listing order is Assigned Emp. descending (225, 220, 218, ...)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-470 — Search, filter and sort combine without losing each other

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-271 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Filter Type = Certificate
2. Type "Cert" in Search
3. Sort Goal Name descending
4. Go to page 2 if present

**Expected**

All three remain applied across pages; footer reflects the intersection

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-471 — Assigned Emp. (Dept.) count opens the "Department Employees" popover

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-273 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Set Department to a single department
2. Click the count button in Assigned Emp. (Dept.) for the first goal

**Expected**

Popover headed "Department Employees" lists exactly that many employees (avatar + name), all in the chosen department

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-472 — Assigned Emp. (Org.) count opens a department breakdown that sums to the count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-275 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click the count button in Assigned Emp. (Org.) for "Kubernetes Administrator (CKA)"

**Expected**

Popover headed "Organisation Employees" lists departments with "N employees" sorted descending; the sum equals the count (225); the active department's entry equals Assigned Emp. (Dept.)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-473 — Assigned count columns use one empty representation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-272 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Go to the last page where unassigned goals appear
2. Read both Assigned columns

**Expected**

Unassigned goals show one consistent value in both columns (observed "None") — never a mix of "None" and "0" in the same column

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-474 — BUG — Description cell shows literal "undefined" or blank instead of "Not specified"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — empty values read "Not specified" |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Search "TC049-1784178347632"
2. Search "TOGAF Enterprise Architecture"

**Expected**

Empty descriptions read "Not specified". Observed 2026-10-07: TC049-1784178347632 shows the literal text "undefined"; TOGAF and many TCxxx goals show an empty cell

**Test Data**

- `goals`: TC049-1784178347632, TOGAF Enterprise Architecture

**Automation Hint**

Use primaryPage fixture. Assert cell text not in ["", "undefined", "null", "—"].

#### TC-EMPGOL-475 — Long descriptions are truncated in the table

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-277 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Find a goal with a multi-paragraph description

**Expected**

Description is clamped (ellipsis / max lines) and row height stays close to its neighbours; full text available on hover or in Edit

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-477 — Goal Type defaults to Technical and Certificate Code appears only for Certificate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-280 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Add Goal
2. Open "Goal Type" and read options
3. Select Certificate
4. Select Technical again

**Expected**

Options exactly Technical, Certificate; textbox "Certificate Code" (placeholder "Enter certificate code") appears only while Certificate is selected

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-479 — Save stays disabled until the mandatory fields are valid

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-282 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Add Goal
2. Type a name
3. Clear it

**Expected**

Save disabled with empty name; enabled once a non-blank name is entered (Technical); disabled again after clearing

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-481 — Goal Name shows invalid styling only after interaction

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-284 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Add Goal and read Goal Name aria-invalid / border
2. Focus and blur the empty field

**Expected**

No invalid state on open; invalid state appears after blur/attempted save

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-485 — Estimated Duration units show a real 0 and clicking selects the contents

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — unset units show a real 0, clicking selects |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Add Goal
2. Read Months/Weeks/Days values
3. Click into "Weeks" and type "3"

**Expected**

Each spinbutton shows value 0 (not a placeholder); clicking selects the 0 so typing yields "3", not "03" or "30"

**Automation Hint**

Use primaryPage fixture. getByRole('spinbutton', { name: 'Weeks' }) toHaveValue('0') then '3'.

#### TC-EMPGOL-488 — Months, Weeks and Days are stored and shown back exactly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-296 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Create a goal with Months 1, Weeks 2, Days 3
2. Reopen it in Edit
3. Create another leaving all three at 0 and reopen

**Expected**

Edit shows 1/2/3; the all-zero goal shows 0/0/0 and the UI does not present it as a real estimate (no "0 days" duration text)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-489 — Rich-text formatting and Undo/Redo work independently in all four editors

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-290 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. In each editor type text, apply Bold, Bullet list and Quote
2. Click Undo in Learning Objectives only
3. Save and reopen in Edit

**Expected**

Undo affects only its own editor; after reload each editor keeps its formatting

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-491 — Cancel, Close and Escape discard a part-filled Add Goal dialog

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-299 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Fill name and Description, click Cancel
2. Reopen — fields are empty
3. Repeat with "Close" and with Escape

**Expected**

Each closes without creating a goal and the next open starts blank; footer total unchanged

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-492 — Create a Technical goal with all the new fields

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-300 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Open Add Goal
2. Enter "QA-EMPGOL-<timestamp>" and all four rich-text fields, Months 1
3. Save

**Expected**

Success toast; dialog closes; searching the name shows one row with Type Technical, Description, Assigned None/None and Delete enabled; footer total +1

**Automation Hint**

Use primaryPage fixture. Clean up via Delete in afterEach.

#### TC-EMPGOL-493 — Create a Certificate goal and see the code in the Name column

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-301 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Open Add Goal, choose Certificate
2. Name "QA-CERT-<timestamp>", code "QA-C1"
3. Save

**Expected**

Row shows name followed by muted "QA-C1"; Type Certificate

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-497 — Edit Goal locks name and type and is pre-filled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-305 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Edit" on "Kubernetes Administrator (CKA)"

**Expected**

Dialog "Edit Goal" ("Edit employee goal details"); Goal Name and Goal Type disabled with stored values; Certificate Code "CKA" editable; Description shows stored text; Learning Objectives / Definition of Done / Topics & Concepts / Estimated Duration editable; Save disabled

**Automation Hint**

Use primaryPage fixture. Do not save — read-only check.

#### TC-EMPGOL-498 — Edit Save enables only after a change and Cancel discards

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-307 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Edit a throwaway goal
2. Change Definition of Done
3. Change it back
4. Change again and click Cancel
5. Reopen

**Expected**

Save enables on change and disables when reverted; after Cancel the stored value is unchanged

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-499 — Editing a goal persists everywhere it is shown

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-308 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Edit a throwaway goal: new Description, Topics & Concepts, Weeks 2
2. Save
3. Reload and reopen Edit
4. Check GET /api/v1/goals for the record

**Expected**

Success toast; table row shows the new description; Edit shows all new values; API returns identical values

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-500 — Delete is disabled for goals with assignments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-311 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Read Delete on "Kubernetes Administrator (CKA)" (225/225)
2. Hover it
3. Set Department to one where its Dept. count is None and read again

**Expected**

Delete disabled in both cases (rule keys on Org count) and the hover explains why (6.2.0 D15 asked for a tooltip)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-501 — Delete is enabled for a zero-assignment goal and asks for confirmation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-314 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Create a throwaway goal
2. Click its Delete
3. Cancel the confirmation
4. Click Delete again and confirm

**Expected**

Confirmation names the goal; Cancel keeps it; confirm removes it with a success toast, the row disappears without reload and the footer total drops by 1

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-540 — Responsive layout at phone and tablet widths

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-335 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Dashboard and both Goals views at 375, 768 and 1280 px

**Expected**

No horizontal page scroll; both tabs and inner tabs fully visible; charts fit their cards; tables scroll inside their container

**Automation Hint**

Use primaryPage fixture. 

### Integration (7)

#### TC-EMPGOL-425 — Most At-Risk "N emp" equals the Delayed rows in that goal's assignments

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-230 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Note "#1 <goal> N emp" in Most At-Risk Goals
2. Click it
3. In the dialog filter Status = Delayed

**Expected**

The dialog shows exactly N rows with Status "Delayed"

**Automation Hint**

Use primaryPage fixture. Use "Filter by Status" in the dialog table.

#### TC-EMPGOL-430 — Average completion % in the list matches the assignments in the dialog

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Note "<goal> X%" in Completion by Goal
2. Open its assignments dialog
3. Average the Completion % of all rows (all pages)

**Expected**

Computed average rounds to X%; "N assignments" equals the dialog result total

**Automation Hint**

Use primaryPage fixture. Use API payload of the dialog if pagination makes UI averaging slow.

#### TC-EMPGOL-435 — Dashboard Total Employees equals the By Employee result total for the same filters

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-339 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. On Dashboard note Total Employees (All Departments)
2. Switch to Goals > By Employee
3. Read "Showing 1 - 100 of N results"
4. Repeat with Department QA

**Expected**

N equals Total Employees in both scopes (observed 3,648 = 3648 for All Departments)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-503 — Goal edits propagate to the By Employee expansion

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-317 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Edit the description of a goal that is assigned (use a non-shared test goal if available)
2. Go to By Employee, expand an employee who holds it, click "Edit goal <name>"

**Expected**

The Edit Goal dialog opened from the expansion shows the updated description

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-545 — Department filter list matches the Department module

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-337 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Read Department options on Goals as Admin
2. Compare with Department > Department Settings list

**Expected**

Same set of departments (no missing/extra)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-546 — Goals Total Employees reconciles with Employee Details

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-338 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Select Department QA on Goals
2. Open Employee Details filtered to QA

**Expected**

Employee counts match (or the difference is explained, e.g. exited employees)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-547 — Assigned Emp. (Org.) reconciles with the dashboard assignments dialog

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-340 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Read Assigned Emp. (Org.) for "Kubernetes Administrator (CKA)" (225) on By Goal
2. On Dashboard (All Years, All Departments) find it via View All and open its assignments

**Expected**

Dialog "N assignments" = 225

**Automation Hint**

Use primaryPage fixture. 

### Negative (15)

#### TC-EMPGOL-433 — Search goals with no match shows a readable empty state

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type "zzzz-no-goal-xyz" in Completion by Goal search

**Expected**

List shows a readable empty message (no rows), status reads 0 goals, pagination disabled; no error toast

**Test Data**

- `search`: zzzz-no-goal-xyz

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-434 — A department with no goal data shows empty states, not broken charts

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-232 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Select a department whose Total Employees is 0 or Goal Assignments is 0 (e.g. try "SCALA" / "L1 SUPPORT" and pick one with 0 assignments)

**Expected**

KPIs show 0, charts show a readable "no data" state, ranked lists show an empty message; no NaN/undefined/blank charts

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-456 — A search or filter with no matches shows a readable empty state

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-247 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type "zzqq-no-such-employee" in "Search employee"

**Expected**

Table shows a readable "no results" message, footer reads 0 results, pagination disabled; no error toast

**Test Data**

- `search`: zzqq-no-such-employee

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-457 — Range filter cannot be saved with Minimum above Maximum

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open "Filter by Goals"
2. Move "Maximum" down to 1
3. Try to move "Minimum" up past 1 with ArrowRight / End

**Expected**

Minimum is clamped at Maximum (sliders cannot cross) or Save is blocked with a message; never a request with min > max

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-478 — A Certificate Code typed before switching back to Technical is not submitted

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-281 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Open Add Goal, choose Certificate, type code "TMP-01"
2. Switch to Technical
3. Fill a unique name and Save
4. Inspect the POST payload and the row

**Expected**

The saved Technical goal carries no certificate code (payload has none; cell shows no muted code)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-480 — Certificate goals cannot be saved without a Certificate Code

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-283 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Add Goal, choose Certificate
2. Enter a unique name, leave Certificate Code empty

**Expected**

Save is disabled and Certificate Code is marked required. 6.2.0 D26: goals such as "demo goal123" exist as Certificate type with no code — confirm current enforcement

**Test Data**

- `existingEvidence`: demo goal123 (Certificate, no code)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-482 — Whitespace-only goal name is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-285 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Add Goal
2. Type "     " into Goal Name

**Expected**

Save stays disabled or an inline error appears; no goal named with blanks is created

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-490 — Rich-text Link control validates the URL

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-292 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. In Description click "Link" and enter javascript:alert(1)
2. Then "not a url"
3. Then https://example.com

**Expected**

Only the https link is accepted; javascript: is rejected/neutralised; malformed text gives a message

**Test Data**

- `urls`: javascript:alert(1), not a url, https://example.com

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-494 — Duplicate and near-duplicate names trigger the duplicate warning

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | KB-direct: duplicate-goal fuzzy warning |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-302 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Try to create "GraphQL API Design" (exact)
2. Then "graphql api design" and "GraphQL API Design  "
3. Then a near match "GraphQL API Designs"

**Expected**

Each attempt shows the duplicate-goal warning before creation; exact/case/whitespace variants never create a second identical-looking goal

**Automation Hint**

Use primaryPage fixture. Warning popup is a dialog/alertdialog — ground its name live.

#### TC-EMPGOL-495 — Double-clicking Save creates one goal

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-303 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Fill a unique name
2. Double-click Save

**Expected**

Exactly one POST and one row with that name

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-496 — A failed save keeps the dialog open with input intact

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-304 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Route POST /api/v1/goals to 500
2. Fill and Save

**Expected**

Readable error toast without stack trace; dialog stays open with all values

**Automation Hint**

Use primaryPage fixture. page.route('**/api/v1/goals', r => r.fulfill({ status: 500 })) for POST only.

#### TC-EMPGOL-528 — Quickly switching tabs/filters does not show "Unable to reach the server"

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) — cancelling a request no longer shows the error |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Rapidly change Timeframe 5 times and switch tabs while requests are in flight

**Expected**

Cancelled requests show no error toast; final state matches final filters

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-529 — Unknown tab and view parameters fall back safely

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals?tab=bogus
2. Open /employee/goals?tab=goals&view=bogus

**Expected**

First opens Dashboard (observed); second opens Goals > By Employee; no blank screen or error

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-530 — Malformed or unknown departmentId in the URL is handled

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-209 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals?departmentId=not-a-uuid
2. Open /employee/goals?departmentId=00000000-0000-0000-0000-000000000000

**Expected**

Readable fallback (All Departments or a message); no 400/500 toast, no blank dashboard

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-531 — BUG — Browser Back after a tab switch leaves the app

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-206 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals from the sidebar
2. Click Goals, then By Goal
3. Press browser Back

**Expected**

Back returns to the previous tab/view. Observed 2026-10-07: Back lands on about:blank (6.2.0 D25 still open); also ?view=catalog stays in the URL after returning to Dashboard

**Automation Hint**

Use primaryPage fixture. Open from an in-app page so history has a previous entry.

### Performance (5)

#### TC-EMPGOL-523 — Dashboard reaches KPIs within the 2–3 s target

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-233 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Clear cache, open /employee/goals as Admin
2. Measure time to KPI numbers

**Expected**

KPIs visible within 3 s of navigation (v6.3.1 claims 2–3 s, was 26 s). Observed 2026-10-07: ~7.1 s cold including app boot and token refresh — measure navigation→KPI separately from app boot

**Automation Hint**

Use primaryPage fixture. Use performance marks or Date.now around goto/expect; run 3 times, use median.

#### TC-EMPGOL-524 — Only the open tab loads its data

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) — each tab loads only while open |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-234 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Record network while opening the Dashboard
2. Then click tab "Goals"

**Expected**

Dashboard load calls /employee-goals/dashboard and /filter-options but NOT /employee-goals/employees; no GET /api/v1/employees page walk; Goals tab triggers /employee-goals/employees only when opened

**Automation Hint**

Use primaryPage fixture. page.on('request') collector.

#### TC-EMPGOL-525 — Switching back with the same filters reuses data

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Load Dashboard
2. Switch to Goals
3. Switch back to Dashboard without changing filters

**Expected**

No new /employee-goals/dashboard request on return; Dashboard visible within 1 s (observed 0.7 s)

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-526 — Changing Year or Department refreshes only the open tab

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Release note v6.3.1 (30 Sep 2026) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Load both tabs once
2. On Goals change Department
3. Record requests

**Expected**

Only /employee-goals/employees (and filter-options) fire; /dashboard fires later only when Dashboard is opened

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-527 — By Employee and By Goal paint quickly

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — load 10-12 s → 2-3 s |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-238 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. From a loaded Dashboard click tab "Goals"
2. Then click "By Goal"
3. Then "Next page"

**Expected**

Each paints its footer within 3 s (observed 1.4 s for By Employee; ~4.6 s for By Goal on first open — flag if > 3 s)

**Automation Hint**

Use primaryPage fixture. 

### Regression (6)

#### TC-EMPGOL-461 — An open expansion does not leak into a new page or search result

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-257 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Expand the first row
2. Click "Next page"
3. Return to page 1
4. Search another employee

**Expected**

No stale detail rows from the previous page/result are visible; rows render collapsed after navigation

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-502 — A created goal survives reload and matches the API total

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Create a throwaway goal
2. Press F5
3. Search the name
4. Compare footer total with GET /api/v1/goals total

**Expected**

Goal present after reload; footer total equals API total

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-541 — /employee/goals is not swallowed by the /employee/:id route

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-343 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals directly
2. Open /employee/goals/ with trailing slash

**Expected**

Goals screen renders, not an employee 404

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-542 — Sibling Skills page is unaffected

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-341 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open Employee > Skills
2. Return to Goals

**Expected**

Skills renders normally; Goals filters keep their values

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-543 — One term for overdue/delayed across the screen

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |
| **Supersedes** | TC-EMPGOL-254 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Compare "Overdue Goals" column, "Delayed" status, "Most At-Risk Goals" list and "At risk" icon

**Expected**

Terminology is consistent or the relationship is explained (6.2.0 D12)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-544 — No bare dash, "undefined" or "null" anywhere on the Goals screen

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) / project empty-data convention |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Cross-cutting |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Scan visible text of Dashboard, By Employee (with an expanded row), By Goal last page

**Expected**

All empty values read "Not specified"; observed violations: "—" for dates in expansion, "undefined" and blank descriptions in By Goal

**Automation Hint**

Use primaryPage fixture. Regex /^(—|-|N\/A|null|undefined)$/ over cell texts.

### Security (19)

#### TC-EMPGOL-504 — Script payloads in goal fields never execute

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-288 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin). Throwaway goal created by this test; delete it in afterEach (Delete is enabled for zero-assignment goals).

**Steps**

1. Create goals whose name is each payload
2. Paste <img src=x onerror=alert(1)> and <a href="javascript:alert(1)">x</a> into all four rich-text editors
3. View in By Goal, Edit, Name filter list, dashboard lists

**Expected**

Payloads render as text or are stripped; no dialog fires; no template evaluation ({{7*7}} stays literal)

**Test Data**

- `payloads`: <script>alert(1)</script>, "><img src=x onerror=alert(1)>, {{7*7}}

**Automation Hint**

Use primaryPage fixture. page.on('dialog') must never fire.

#### TC-EMPGOL-505 — Admin has the full Goals screen including the RM filter and goal write controls

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals
2. Open tab Goals > By Goal

**Expected**

Year, Department, RM and Timeframe filters present; chart "RM-wise Goal Status"; Add Goal, Edit and Delete controls present

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-506 — PMO sees Goals with Department filter, no RM filter and org-wide data

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as bhumi.chauhan@simformsolutions.com (pmoPage fixture, PMO)

**Steps**

1. Open /employee/goals as PMO

**Expected**

Filters Year, Department (All Departments), Timeframe — no RM combobox; chart "Your Team Goal Status"; Total Employees 3,648 (org-wide, matching Admin)

**Test Data**

- `observed`: 3,648 / 2,424 / 8,657

**Automation Hint**

Use pmoPage fixture. 

#### TC-EMPGOL-507 — EM sees Goals scoped to their own population

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | EM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as kunal.jadeja@simformsolutions.com (emPage fixture, EM)

**Steps**

1. Open /employee/goals as EM

**Expected**

Filters Year, Department, Timeframe — no RM; "Your Team Goal Status"; Total Employees 372 (not the org-wide 3,648)

**Test Data**

- `observed`: 372 / 232 / 791

**Automation Hint**

Use emPage fixture. 

#### TC-EMPGOL-508 — REGRESSION CHECK — TM Department picker stays limited to the TM's own departments

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) — TM now shows a Department picker (previously none) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture, TM)

**Steps**

1. Open /employee/goals as TM
2. Read KPIs on "All Departments"
3. Open combobox "Department" and read every option
4. Select "QA" and read KPIs

**Expected**

Options are only "All Departments" plus the TM's managed departments (observed: ANDROID, CSM, QA); "All Departments" = union of those (279 employees), never org-wide 3,648; selecting QA narrows to 93. Any other department appearing, or 3,648 on All Departments, is a data leak

**Test Data**

- `expectedOptions`: All Departments, ANDROID, CSM, QA
- `allDeptTotal`: 279
- `qaTotal`: 93

**Automation Hint**

Use tmPage fixture. Observed 2026-10-07: 4 options; 279/175/561 → QA 93/51/140. Suspected regression NOT reproduced — keep as permanent guard.

#### TC-EMPGOL-509 — TM and PM cannot widen scope by injecting a foreign departmentId in the URL

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM + PM |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-210 |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture, TM); Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture, PM)

**Steps**

1. As TM open /employee/goals?departmentId=95895a10-b036-42cf-80c1-26b71251ebd6 (MANAGEMENT)
2. Read KPIs and the Goals > By Employee footer
3. Repeat as PM

**Expected**

KPIs show 0 or fall back to the user's own scope — never MANAGEMENT data; By Employee shows 0 rows or own scope only

**Test Data**

- `foreignDepartmentId`: 95895a10-b036-42cf-80c1-26b71251ebd6

**Automation Hint**

Use tmPage fixture + pmPage. 

#### TC-EMPGOL-510 — TM API calls with a foreign departmentId return no foreign data

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture, TM)

**Steps**

1. As TM GET https://simerp-dev-api.simform.solutions/api/v1/employee-goals/dashboard?timeFrame=15d&departmentId=95895a10-b036-42cf-80c1-26b71251ebd6
2. GET https://simerp-dev-api.simform.solutions/api/v1/employee-goals/employees?page=1&limit=100&departmentId=95895a10-b036-42cf-80c1-26b71251ebd6

**Expected**

Either 403, or 200 with totalEmployees 0 / total 0 (observed: 0 and 0) — never MANAGEMENT employees

**Test Data**

- `limitAllowed`: 100, 200, 300

**Automation Hint**

Use tmPage fixture. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded.

#### TC-EMPGOL-511 — PM sees Goals without a Department picker, scoped to their own team

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as hardik.trivedi@simformsolutions.com (pmPage fixture, PM)

**Steps**

1. Open /employee/goals as PM

**Expected**

Filters only Year and Timeframe (no Department, no RM); chart "Your Team Goal Status" caption "Showing 1–92 of 92 employees" equal to Total Employees

**Automation Hint**

Use pmPage fixture. 

#### TC-EMPGOL-512 — RM filter is Admin-only and a managerId parameter does not widen scope

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture, TM)

**Steps**

1. As TM confirm no combobox "RM" on Dashboard or Goals
2. Call the dashboard API as TM adding a managerId of an RM outside the TM's departments

**Expected**

No RM combobox for TM (also PMO/EM/PM); API ignores or rejects the foreign managerId (no extra employees)

**Automation Hint**

Use tmPage fixture. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded.

#### TC-EMPGOL-513 — CSM is redirected to /unauthorized, including deep links

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-319 |

**Preconditions**

Logged in as tarun.sharma@simformsolutions.com (csmPage fixture, CSM)

**Steps**

1. As CSM open /employee/goals
2. Open /employee/goals?tab=goals&view=catalog
3. Check the sidebar

**Expected**

Both land on /unauthorized with H1 "Unauthorized", "Access Denied" and button "Go to Profile"; no Goals link in the sidebar

**Automation Hint**

Use csmPage fixture. 

#### TC-EMPGOL-514 — Employee personas (kashyap, punit) are redirected to /unauthorized

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee + Employee (punit) |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-318 |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture, Employee); Logged in as punit.patel@simformsolutions.com (testUserPage fixture, Employee (punit))

**Steps**

1. As kashyap open /employee/goals
2. As punit open /employee/goals

**Expected**

Both land on /unauthorized ("Access Denied", "Go to Profile"); no Goals sidebar link

**Automation Hint**

Use empPage fixture + testUserPage. 

#### TC-EMPGOL-515 — New Goals endpoints refuse Employee and CSM tokens

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee + CSM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture, Employee); Logged in as tarun.sharma@simformsolutions.com (csmPage fixture, CSM)

**Steps**

1. With the Employee token GET /employee-goals/dashboard?timeFrame=15d, /employee-goals/filter-options, /employee-goals/employees?page=1&limit=100
2. Repeat with the CSM token

**Expected**

Expected 403 (screen is denied to these roles). Observed 2026-10-07: 200 with empty payloads (departments [], total 0) — no data leaks, but the role gate is not enforced on these endpoints; record actual status

**Test Data**

- `endpoints`: /api/v1/employee-goals/dashboard, /api/v1/employee-goals/filter-options, /api/v1/employee-goals/employees

**Automation Hint**

Use empPage fixture + csmPage. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded.

#### TC-EMPGOL-516 — Legacy /employee-goals and /goals endpoints stay gated for Employee and CSM

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee + CSM |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-320 |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture, Employee); Logged in as tarun.sharma@simformsolutions.com (csmPage fixture, CSM)

**Steps**

1. With the Employee token GET /employee-goals?page=1&limit=100 and /goals?page=1&limit=100
2. Repeat with the CSM token

**Expected**

/goals returns 403 for both. /employee-goals must not return other people's goals — observed: Employee gets only own 4 assignments (kashyap), CSM gets 0 (6.2.0 D21 now data-scoped rather than 403)

**Automation Hint**

Use empPage fixture + csmPage. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded. Assert every returned item belongs to the caller.

#### TC-EMPGOL-517 — Goal write APIs reject Employee and CSM tokens

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee + CSM |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as kashyap.patel@simformsolutions.com (empPage fixture, Employee); Logged in as tarun.sharma@simformsolutions.com (csmPage fixture, CSM)

**Steps**

1. With the Employee token POST /api/v1/goals {name:"rbac-probe"}
2. PATCH and DELETE /api/v1/goals/<throwaway goal id>
3. Repeat with CSM

**Expected**

All return 403 and nothing is created or changed

**Automation Hint**

Use empPage fixture + csmPage. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded. Use a throwaway goal created by Admin in beforeAll; verify via Admin GET afterwards.

#### TC-EMPGOL-518 — Goal write controls per role match the permission matrix

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |
| **Role** | PMO |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-323 |

**Preconditions**

Logged in as bhumi.chauhan@simformsolutions.com (pmoPage fixture, PMO)

**Steps**

1. As PMO, EM, TM and PM open Goals > By Goal
2. Record presence of Add Goal / Edit / Delete

**Expected**

Controls shown only to roles with goal-write permission, and API writes for a role without them return 403 (6.2.0: TM had write access — confirm matrix with product)

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: no published permission matrix for goal write per role.

#### TC-EMPGOL-519 — A department-scoped role cannot write goals outside its scope via the API

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |
| **Role** | TM |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-321 |

**Preconditions**

Logged in as sudhansu.patel@simformsolutions.com (tmPage fixture, TM)

**Steps**

1. As TM PATCH a goal used only by another department
2. POST /api/v1/goals with a departmentId the TM does not manage

**Expected**

Both 403 (or rule documented as global catalogue)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded.

#### TC-EMPGOL-520 — Expired access token refreshes silently

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Access & Security |
| **Supersedes** | TC-EMPGOL-324 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Delete the accessToken cookie, keep refreshToken
2. Open /employee/goals

**Expected**

One POST /api/v1/auth/refresh, original calls retried, data shown; failed refresh routes to login without a loop

**Automation Hint**

Use primaryPage fixture. 

#### TC-EMPGOL-521 — XSS in every Goals search box is rendered as text

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Type <img src=x onerror=alert(1)> into "Search employee", By Goal "Search", both "Search goals" and "Search employee or manager"

**Expected**

No dialog fires; payload shown literally in the box; empty state rendered; API returns 2xx/400 not 500

**Automation Hint**

Use primaryPage fixture. page.on('dialog') must never fire.

#### TC-EMPGOL-522 — Injection-style query values are rejected cleanly by the API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Access & Security |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. GET /employee-goals/employees?page=1&limit=100&search=' OR 1=1--
2. GET ...&departmentId=not-a-uuid
3. GET ...&limit=5

**Expected**

Search returns 0 rows (no data explosion); bad departmentId and limit return 400 with a field message (observed limit: "limit must be one of the following values: 100, 200, 300"); never 500

**Automation Hint**

Use primaryPage fixture. Call via the fixture's context.request (cookies accessToken/refreshToken on the API origin are sent automatically) after loading any app page so the token is refreshed; API origin from env, not hard-coded.

### Smoke (6)

#### TC-EMPGOL-401 — Goals opens from the sidebar Employee > Goals link on the Dashboard tab

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) — 2-tab layout replaced the 6.2.0 3-tab layout |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-201 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open the app home page
2. Expand the "Employee" group in the sidebar
3. Click the "Goals" link

**Expected**

URL is /employee/goals; H1 "Goals"; breadcrumb Employee > Goals; top tablist shows exactly two tabs "Dashboard" and "Goals" with "Dashboard" selected (no ?tab param)

**Automation Hint**

Use primaryPage fixture. getByRole('link', { name: 'Goals' }) under the expanded Employee group; assert getByRole('heading', { level: 1, name: 'Goals' }) and getByRole('tab') names == ['Dashboard','Goals'], tab 'Dashboard' aria-selected=true.

#### TC-EMPGOL-402 — Dashboard renders the filter group, five KPI tiles and all five chart/list sections

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Dashboard |
| **Supersedes** | TC-EMPGOL-217 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Navigate to /employee/goals
2. Wait for the "Goal KPIs" group to show numbers

**Expected**

Group "Goal filters" holds Year, Department, RM and Timeframe comboboxes; group "Goal KPIs" shows Total Employees, Employees with Goals, Goal Assignments, L&D Hours, Billable Hours with numeric values; h2 headings "Goal Tracking Health", "Employee Goal Coverage", "RM-wise Goal Status", "Completion by Goal", "Most At-Risk Goals" are visible

**Test Data**

- `kpiLabels`: Total Employees, Employees with Goals, Goal Assignments, L&D Hours, Billable Hours
- `observedAdmin`: 3,648 / 2,425 / 8,661 / 157,867h / 161,518h (Last 15 days)

**Automation Hint**

Use primaryPage fixture. page.getByRole('group', { name: 'Goal KPIs' }) and page.getByRole('group', { name: 'Goal filters' }); getByRole('heading', { level: 2 }) allInnerTexts equals the five names in order.

#### TC-EMPGOL-436 — Goals tab opens on By Employee with the roll-up table and server-side footer

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-236 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Navigate to /employee/goals
2. Click tab "Goals"

**Expected**

URL ?tab=goals; tablist "Goals view" shows "By Employee" (selected) and "By Goal"; textbox "Search employee", button "Table options"; columns Show goals | Employee | Reporting Manager | Goals | Overdue Goals | Certificates | L&D Hours; footer "Showing 1 - 100 of 3648 results" and navigation "Pagination Navigation"

**Automation Hint**

Use primaryPage fixture. getByRole('tablist', { name: 'Goals view' }); page.getByText(/Showing \d+ - \d+ of \d+ results/).

#### TC-EMPGOL-450 — Expanding a row shows the per-goal detail table

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Employee |
| **Supersedes** | TC-EMPGOL-248 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click the first data row (cell "Show goals")
2. Read the nested table
3. Click again; also expand two different rows

**Expected**

Row label flips to "Hide goals" with aria-expanded=true; nested table columns Goal, Status, Progress History, Completion %, Start Date, End Date, Comment, Actions with one row per goal; second click collapses; several rows can be open independently

**Automation Hint**

Use primaryPage fixture. The expander is the row itself (tabindex=0, aria-expanded, aria-controls) — click row.getByRole('cell').first(); getByRole('button', { name: /Show goals/ }) does not exist.

#### TC-EMPGOL-463 — By Goal lists the goal catalogue with its columns and footer

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-10-07 (SimERP 6.3.2) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-262 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open /employee/goals?tab=goals
2. Click tab "By Goal"

**Expected**

URL gains view=catalog; textbox "Search", button "Add Goal"; columns Action | Goal Name | Type | Description | Assigned Emp. (Dept.) | Assigned Emp. (Org.); each row has Edit and Delete; footer "Showing 1 - 100 of 545 results"

**Automation Hint**

Use primaryPage fixture. getByRole('tab', { name: 'By Goal' }); getByRole('textbox', { name: 'Search', exact: true }).

#### TC-EMPGOL-476 — Add Goal opens the dialog with every field

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Release note v6.3.0 (29 Sep 2026) — new fields on Add/Edit |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Goals - By Goal |
| **Supersedes** | TC-EMPGOL-278 |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Click "Add Goal"

**Expected**

Dialog "Add Goal" with subtitle "Add a new employee goal": textbox "Goal Name" (placeholder "Enter goal name"), combobox "Goal Type" = Technical, rich-text editors Description, Learning Objectives, Definition of Done, Topics & Concepts (each with Bold…Redo toolbar), Estimated Duration helper text and spinbuttons Months/Weeks/Days each "0", buttons Cancel, Save (disabled), Close

**Automation Hint**

Use primaryPage fixture. page.getByRole('dialog', { name: 'Add Goal' }).
