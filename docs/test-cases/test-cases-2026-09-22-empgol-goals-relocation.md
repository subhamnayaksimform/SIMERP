# Goals — Test Cases

**Total test cases:** 143  
**Modules covered:** Goals  
**Source:** `reports/test-cases/cases-2026-09-22-EMPGOL-goals-relocation.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 84 | 58.7% |
| negative | 13 | 9.1% |
| accessibility | 11 | 7.7% |
| security | 8 | 5.6% |
| smoke | 7 | 4.9% |
| regression | 6 | 4.2% |
| boundary | 5 | 3.5% |
| integration | 5 | 3.5% |
| performance | 4 | 2.8% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 68 | 47.6% |
| medium | 42 | 29.4% |
| critical | 27 | 18.9% |
| low | 6 | 4.2% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 109 | 76.2% |
| minor | 20 | 14.0% |
| critical | 14 | 9.8% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 143 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 142 | 99.3% |
| inferred | 1 | 0.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 143 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 86 | 60.1% |
| @negative | 14 | 9.8% |
| @regression | 14 | 9.8% |
| @a11y | 12 | 8.4% |
| @security | 12 | 8.4% |
| @smoke | 7 | 4.9% |
| @integration | 6 | 4.2% |
| @boundary | 5 | 3.5% |
| @performance | 4 | 2.8% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPGOL-201](#tc-empgol-201-goals-opens-from-the-sidebar-employee-goals-link) | Goals opens from the sidebar Employee > Goals link | Goals | smoke | critical |
| [TC-EMPGOL-202](#tc-empgol-202-employee-goals-with-no-query-string-self-redirects-to-the-signed-in-user-s-own-departmentid) | /employee/goals with no query string self-redirects to the signed-in user's own departmentId | Goals | functional | high |
| [TC-EMPGOL-203](#tc-empgol-203-bug-the-dashboard-tab-ignores-the-departmentid-already-present-in-its-own-url) | BUG — the Dashboard tab ignores the departmentId already present in its own URL | Goals | functional | critical |
| [TC-EMPGOL-204](#tc-empgol-204-bug-tab-in-the-url-does-not-restore-the-selected-tab-on-load) | BUG — ?tab= in the URL does not restore the selected tab on load | Goals | functional | high |
| [TC-EMPGOL-205](#tc-empgol-205-clicking-each-tab-writes-the-matching-tab-value-into-the-url) | Clicking each tab writes the matching tab value into the URL | Goals | functional | medium |
| [TC-EMPGOL-206](#tc-empgol-206-browser-back-after-switching-tabs-returns-to-the-previous-tab-not-out-of-the-app) | Browser Back after switching tabs returns to the previous tab, not out of the app | Goals | negative | medium |
| [TC-EMPGOL-207](#tc-empgol-207-reloading-the-page-preserves-tab-department-and-year-selections) | Reloading the page preserves tab, department and year selections | Goals | functional | high |
| [TC-EMPGOL-208](#tc-empgol-208-a-departmentid-that-does-not-exist-is-rejected-with-a-readable-message) | A departmentId that does not exist is rejected with a readable message | Goals | negative | high |
| [TC-EMPGOL-209](#tc-empgol-209-a-malformed-non-uuid-departmentid-is-handled-without-a-validation-crash) | A malformed (non-UUID) departmentId is handled without a validation crash | Goals | negative | high |
| [TC-EMPGOL-210](#tc-empgol-210-security-a-department-scoped-user-cannot-read-another-department-by-editing-departmentid-in-the-url) | SECURITY — a department-scoped user cannot read another department by editing departmentId in the URL | Goals | security | critical |
| [TC-EMPGOL-211](#tc-empgol-211-dashboard-is-the-default-tab-on-a-first-visit) | Dashboard is the default tab on a first visit | Goals | smoke | high |
| [TC-EMPGOL-212](#tc-empgol-212-bug-the-three-tabs-each-keep-a-separate-unsynchronised-department-selection) | BUG — the three tabs each keep a separate, unsynchronised department selection | Goals | functional | high |
| [TC-EMPGOL-213](#tc-empgol-213-tab-strip-supports-arrow-key-navigation-and-home-end) | Tab strip supports Arrow-key navigation and Home/End | Goals | accessibility | medium |
| [TC-EMPGOL-214](#tc-empgol-214-only-the-active-tab-panel-is-exposed-inactive-panels-are-hidden-from-assistive-tech) | Only the active tab panel is exposed; inactive panels are hidden from assistive tech | Goals | accessibility | medium |
| [TC-EMPGOL-215](#tc-empgol-215-admin-sees-the-department-empty-state-until-a-department-is-chosen) | Admin sees the department empty state until a department is chosen | Goals | functional | high |
| [TC-EMPGOL-216](#tc-empgol-216-a-department-scoped-role-gets-no-department-picker-and-lands-straight-on-data) | A department-scoped role gets no department picker and lands straight on data | Goals | functional | high |
| [TC-EMPGOL-217](#tc-empgol-217-dashboard-shows-the-four-kpi-cards-with-the-expected-labels) | Dashboard shows the four KPI cards with the expected labels | Goals | smoke | critical |
| [TC-EMPGOL-218](#tc-empgol-218-employees-with-goals-never-exceeds-total-employees) | Employees with Goals never exceeds Total Employees | Goals | functional | high |
| [TC-EMPGOL-219](#tc-empgol-219-year-filter-offers-all-years-plus-only-the-years-that-actually-hold-data) | Year filter offers All Years plus only the years that actually hold data | Goals | functional | medium |
| [TC-EMPGOL-220](#tc-empgol-220-changing-the-year-re-scopes-employees-with-goals-and-total-goal-assignments) | Changing the year re-scopes Employees with Goals and Total Goal Assignments | Goals | functional | high |
| [TC-EMPGOL-221](#tc-empgol-221-bug-total-l-d-hours-ignores-the-year-filter) | BUG — Total L&D Hours ignores the Year filter | Goals | functional | high |
| [TC-EMPGOL-222](#tc-empgol-222-the-selected-year-is-carried-in-the-url-so-a-filtered-dashboard-can-be-shared) | The selected year is carried in the URL so a filtered dashboard can be shared | Goals | functional | medium |
| [TC-EMPGOL-223](#tc-empgol-223-goal-tracking-health-donut-renders-the-four-tracking-statuses) | Goal Tracking Health donut renders the four tracking statuses | Goals | functional | high |
| [TC-EMPGOL-224](#tc-empgol-224-donut-charts-expose-their-values-without-requiring-a-hover) | Donut charts expose their values without requiring a hover | Goals | functional | medium |
| [TC-EMPGOL-225](#tc-empgol-225-employee-goal-coverage-donut-reconciles-with-the-kpi-cards) | Employee Goal Coverage donut reconciles with the KPI cards | Goals | functional | high |
| [TC-EMPGOL-226](#tc-empgol-226-rm-wise-goal-status-chart-plots-one-stacked-bar-per-reporting-manager-plus-the-l-d-hours-line) | RM-wise goal status chart plots one stacked bar per reporting manager plus the L&D hours line | Goals | functional | high |
| [TC-EMPGOL-227](#tc-empgol-227-show-as-separate-charts-splits-the-combined-rm-chart-and-can-be-toggled-back) | "Show as separate charts" splits the combined RM chart and can be toggled back | Goals | functional | medium |
| [TC-EMPGOL-228](#tc-empgol-228-rm-chart-legend-groups-the-status-series-together-instead-of-interleaving-the-l-d-line) | RM chart legend groups the status series together instead of interleaving the L&D line | Goals | functional | low |
| [TC-EMPGOL-229](#tc-empgol-229-avg-completion-by-goal-ranks-goals-and-shows-an-accurate-count-in-its-header) | AVG COMPLETION % BY GOAL ranks goals and shows an accurate count in its header | Goals | functional | high |
| [TC-EMPGOL-230](#tc-empgol-230-most-at-risk-goals-delayed-lists-only-goals-with-delayed-assignments) | MOST AT-RISK GOALS (DELAYED) lists only goals with delayed assignments | Goals | functional | high |
| [TC-EMPGOL-231](#tc-empgol-231-switching-department-refreshes-every-dashboard-widget-together) | Switching department refreshes every dashboard widget together | Goals | regression | high |
| [TC-EMPGOL-232](#tc-empgol-232-a-department-with-no-goal-data-shows-an-empty-state-rather-than-zeros-with-broken-charts) | A department with no goal data shows an empty state rather than zeros-with-broken-charts | Goals | negative | medium |
| [TC-EMPGOL-233](#tc-empgol-233-performance-the-admin-goals-landing-takes-26-seconds-to-reach-even-its-empty-state) | PERFORMANCE — the Admin Goals landing takes 26 seconds to reach even its empty state | Goals | performance | critical |
| [TC-EMPGOL-234](#tc-empgol-234-performance-selecting-a-department-triggers-14-sequential-employee-goals-page-fetches) | PERFORMANCE — selecting a department triggers 14 sequential employee-goals page fetches | Goals | performance | high |
| [TC-EMPGOL-235](#tc-empgol-235-the-showing-data-for-dept-label-always-matches-the-active-department) | The "Showing data for <DEPT>" label always matches the active department | Goals | functional | medium |
| [TC-EMPGOL-236](#tc-empgol-236-employee-goals-tab-lists-employees-with-their-goal-roll-up-columns) | Employee Goals tab lists employees with their goal roll-up columns | Goals | smoke | critical |
| [TC-EMPGOL-237](#tc-empgol-237-bug-employee-goals-renders-every-employee-row-at-once-with-no-pagination) | BUG — Employee Goals renders every employee row at once with no pagination | Goals | performance | critical |
| [TC-EMPGOL-238](#tc-empgol-238-performance-the-employee-goals-tab-takes-16-6-seconds-to-paint-its-first-row) | PERFORMANCE — the Employee Goals tab takes 16.6 seconds to paint its first row | Goals | performance | critical |
| [TC-EMPGOL-239](#tc-empgol-239-search-employee-narrows-the-table-to-matching-names) | Search employee narrows the table to matching names | Goals | functional | high |
| [TC-EMPGOL-240](#tc-empgol-240-search-goal-filters-employees-down-to-those-holding-a-matching-goal) | Search goal filters employees down to those holding a matching goal | Goals | functional | high |
| [TC-EMPGOL-241](#tc-empgol-241-reporting-manager-filter-lists-the-managers-present-in-scope-and-filters-correctly) | Reporting Manager filter lists the managers present in scope and filters correctly | Goals | functional | high |
| [TC-EMPGOL-242](#tc-empgol-242-tracking-status-filter-offers-exactly-the-four-goal-statuses) | Tracking Status filter offers exactly the four goal statuses | Goals | functional | high |
| [TC-EMPGOL-243](#tc-empgol-243-tracking-status-filter-keeps-only-employees-holding-a-goal-in-that-status) | Tracking Status filter keeps only employees holding a goal in that status | Goals | functional | high |
| [TC-EMPGOL-244](#tc-empgol-244-no-goals-assigned-toggle-isolates-employees-with-zero-goals) | "No Goals Assigned" toggle isolates employees with zero goals | Goals | functional | high |
| [TC-EMPGOL-245](#tc-empgol-245-filters-compose-status-goal-search-and-department-narrow-together) | Filters compose — status, goal search and department narrow together | Goals | functional | high |
| [TC-EMPGOL-246](#tc-empgol-246-clear-resets-every-employee-goals-filter-at-once) | "Clear" resets every Employee Goals filter at once | Goals | functional | medium |
| [TC-EMPGOL-247](#tc-empgol-247-a-filter-combination-with-no-matches-shows-a-readable-empty-state) | A filter combination with no matches shows a readable empty state | Goals | negative | medium |
| [TC-EMPGOL-248](#tc-empgol-248-expanding-a-row-reveals-the-per-goal-detail-table) | Expanding a row reveals the per-goal detail table | Goals | smoke | critical |
| [TC-EMPGOL-249](#tc-empgol-249-bug-the-row-expander-is-not-a-button-and-cannot-be-reached-or-operated-by-keyboard) | BUG — the row expander is not a button and cannot be reached or operated by keyboard | Goals | accessibility | high |
| [TC-EMPGOL-250](#tc-empgol-250-the-goals-count-in-the-parent-row-equals-the-number-of-rows-in-its-expansion) | The Goals count in the parent row equals the number of rows in its expansion | Goals | functional | high |
| [TC-EMPGOL-251](#tc-empgol-251-the-certificates-count-matches-the-certificate-type-goals-in-the-expansion) | The Certificates count matches the certificate-type goals in the expansion | Goals | functional | high |
| [TC-EMPGOL-252](#tc-empgol-252-bug-progress-history-reads-no-progress-recorded-for-goals-that-clearly-have-progress) | BUG — Progress History reads "No progress recorded" for goals that clearly have progress | Goals | functional | high |
| [TC-EMPGOL-253](#tc-empgol-253-bug-l-d-hours-are-reported-for-employees-with-zero-goals) | BUG — L&D Hours are reported for employees with zero goals | Goals | functional | high |
| [TC-EMPGOL-254](#tc-empgol-254-overdue-goals-and-the-delayed-status-use-one-consistent-term) | Overdue Goals and the "Delayed" status use one consistent term | Goals | functional | medium |
| [TC-EMPGOL-255](#tc-empgol-255-overdue-goals-count-matches-the-delayed-goals-in-the-expansion) | Overdue Goals count matches the delayed goals in the expansion | Goals | functional | high |
| [TC-EMPGOL-256](#tc-empgol-256-several-rows-can-be-expanded-at-the-same-time-and-collapse-independently) | Several rows can be expanded at the same time and collapse independently | Goals | functional | medium |
| [TC-EMPGOL-257](#tc-empgol-257-an-open-expansion-does-not-survive-into-an-unrelated-filtered-result-as-stale-content) | An open expansion does not survive into an unrelated filtered result as stale content | Goals | regression | medium |
| [TC-EMPGOL-258](#tc-empgol-258-employees-with-no-reporting-manager-render-a-readable-placeholder) | Employees with no reporting manager render a readable placeholder | Goals | functional | low |
| [TC-EMPGOL-259](#tc-empgol-259-missing-start-and-end-dates-in-the-expansion-render-a-readable-placeholder) | Missing start and end dates in the expansion render a readable placeholder | Goals | functional | low |
| [TC-EMPGOL-260](#tc-empgol-260-the-employee-goals-tab-is-read-only-no-assignment-or-progress-editing-is-offered) | The Employee Goals tab is read-only — no assignment or progress editing is offered | Goals | functional | high |
| [TC-EMPGOL-261](#tc-empgol-261-numeric-roll-up-columns-are-right-aligned-and-consistently-formatted) | Numeric roll-up columns are right-aligned and consistently formatted | Goals | functional | low |
| [TC-EMPGOL-262](#tc-empgol-262-goal-management-lists-the-goal-catalogue-with-its-six-columns) | Goal Management lists the goal catalogue with its six columns | Goals | smoke | critical |
| [TC-EMPGOL-263](#tc-empgol-263-bug-only-the-first-100-of-426-goals-are-reachable-there-is-no-pagination) | BUG — only the first 100 of 426 goals are reachable; there is no pagination | Goals | functional | critical |
| [TC-EMPGOL-264](#tc-empgol-264-goal-search-filters-the-catalogue-and-updates-the-results-footer) | Goal search filters the catalogue and updates the results footer | Goals | functional | high |
| [TC-EMPGOL-265](#tc-empgol-265-search-finds-goals-that-live-beyond-the-first-100-rows) | Search finds goals that live beyond the first 100 rows | Goals | functional | high |
| [TC-EMPGOL-266](#tc-empgol-266-column-filter-filter-by-goal-name-offers-the-distinct-goal-names-and-filters-on-selection) | Column filter "Filter by Goal Name" offers the distinct goal names and filters on selection | Goals | functional | medium |
| [TC-EMPGOL-267](#tc-empgol-267-column-filter-list-shows-raw-goal-names-while-the-table-shows-certificate-prefixed-names) | Column filter list shows raw goal names while the table shows certificate-prefixed names | Goals | functional | medium |
| [TC-EMPGOL-268](#tc-empgol-268-column-filter-filter-by-type-narrows-to-technical-or-certificate) | Column filter "Filter by Type" narrows to Technical or Certificate | Goals | functional | medium |
| [TC-EMPGOL-269](#tc-empgol-269-sorting-by-goal-name-orders-the-column-ascending-and-descending) | Sorting by Goal Name orders the column ascending and descending | Goals | functional | medium |
| [TC-EMPGOL-270](#tc-empgol-270-bug-sorting-uses-the-raw-goal-name-while-the-column-displays-the-certificate-prefixed-name) | BUG — sorting uses the raw goal name while the column displays the certificate-prefixed name | Goals | functional | high |
| [TC-EMPGOL-271](#tc-empgol-271-search-column-filter-and-sort-can-be-combined-without-losing-each-other) | Search, column filter and sort can be combined without losing each other | Goals | functional | medium |
| [TC-EMPGOL-272](#tc-empgol-272-assigned-emp-dept-and-org-use-one-consistent-empty-representation) | Assigned Emp. (Dept.) and (Org.) use one consistent empty representation | Goals | functional | medium |
| [TC-EMPGOL-273](#tc-empgol-273-the-department-assigned-count-opens-a-department-employees-popover-listing-those-employees) | The department-assigned count opens a "Department Employees" popover listing those employees | Goals | functional | high |
| [TC-EMPGOL-274](#tc-empgol-274-the-organisation-assigned-count-opens-a-department-wise-breakdown) | The organisation-assigned count opens a department-wise breakdown | Goals | functional | high |
| [TC-EMPGOL-275](#tc-empgol-275-the-organisation-breakdown-sums-to-the-organisation-assigned-count) | The organisation breakdown sums to the organisation-assigned count | Goals | functional | high |
| [TC-EMPGOL-276](#tc-empgol-276-the-popover-heading-spelling-matches-the-column-header) | The popover heading spelling matches the column header | Goals | functional | low |
| [TC-EMPGOL-277](#tc-empgol-277-a-very-long-description-does-not-blow-out-the-row-height) | A very long description does not blow out the row height | Goals | functional | medium |
| [TC-EMPGOL-278](#tc-empgol-278-add-goal-opens-the-side-panel-with-every-goal-field) | Add Goal opens the side panel with every goal field | Goals | smoke | critical |
| [TC-EMPGOL-279](#tc-empgol-279-goal-type-defaults-to-technical-and-offers-exactly-two-options) | Goal Type defaults to Technical and offers exactly two options | Goals | functional | high |
| [TC-EMPGOL-280](#tc-empgol-280-certificate-code-appears-only-when-goal-type-is-certificate) | Certificate Code appears only when Goal Type is Certificate | Goals | functional | high |
| [TC-EMPGOL-281](#tc-empgol-281-a-certificate-code-typed-before-switching-the-type-back-is-not-silently-resubmitted) | A Certificate Code typed before switching the type back is not silently resubmitted | Goals | negative | medium |
| [TC-EMPGOL-282](#tc-empgol-282-save-stays-disabled-until-the-mandatory-fields-are-valid) | Save stays disabled until the mandatory fields are valid | Goals | functional | high |
| [TC-EMPGOL-283](#tc-empgol-283-certificate-goals-cannot-be-saved-without-a-certificate-code) | Certificate goals cannot be saved without a Certificate Code | Goals | negative | high |
| [TC-EMPGOL-284](#tc-empgol-284-goal-name-shows-its-invalid-styling-only-after-the-user-has-interacted-with-it) | Goal Name shows its invalid styling only after the user has interacted with it | Goals | functional | low |
| [TC-EMPGOL-285](#tc-empgol-285-a-whitespace-only-goal-name-is-rejected) | A whitespace-only goal name is rejected | Goals | negative | high |
| [TC-EMPGOL-286](#tc-empgol-286-goal-name-length-is-bounded) | Goal name length is bounded | Goals | boundary | high |
| [TC-EMPGOL-287](#tc-empgol-287-goal-name-accepts-unicode-emoji-and-punctuation-without-corruption) | Goal name accepts unicode, emoji and punctuation without corruption | Goals | boundary | medium |
| [TC-EMPGOL-288](#tc-empgol-288-security-script-payloads-in-the-goal-name-are-never-executed) | SECURITY — script payloads in the goal name are never executed | Goals | security | critical |
| [TC-EMPGOL-289](#tc-empgol-289-security-the-rich-text-fields-sanitise-pasted-html) | SECURITY — the rich-text fields sanitise pasted HTML | Goals | security | critical |
| [TC-EMPGOL-290](#tc-empgol-290-rich-text-formatting-survives-a-save-and-reload-in-all-four-editors) | Rich-text formatting survives a save and reload in all four editors | Goals | functional | high |
| [TC-EMPGOL-291](#tc-empgol-291-rich-text-undo-and-redo-work-per-editor-and-do-not-cross-contaminate) | Rich-text Undo and Redo work per editor and do not cross-contaminate | Goals | functional | medium |
| [TC-EMPGOL-292](#tc-empgol-292-the-rich-text-link-control-validates-the-url-it-is-given) | The rich-text Link control validates the URL it is given | Goals | negative | medium |
| [TC-EMPGOL-293](#tc-empgol-293-estimated-duration-rejects-negative-values) | Estimated Duration rejects negative values | Goals | boundary | high |
| [TC-EMPGOL-294](#tc-empgol-294-estimated-duration-rejects-decimal-and-non-numeric-input) | Estimated Duration rejects decimal and non-numeric input | Goals | boundary | medium |
| [TC-EMPGOL-295](#tc-empgol-295-estimated-duration-has-an-upper-bound) | Estimated Duration has an upper bound | Goals | boundary | medium |
| [TC-EMPGOL-296](#tc-empgol-296-months-weeks-and-days-combine-into-one-coherent-duration) | Months, Weeks and Days combine into one coherent duration | Goals | functional | medium |
| [TC-EMPGOL-297](#tc-empgol-297-estimated-duration-is-left-blank-when-nothing-is-entered) | Estimated Duration is left blank when nothing is entered | Goals | functional | medium |
| [TC-EMPGOL-298](#tc-empgol-298-cancel-discards-a-part-filled-add-goal-panel) | Cancel discards a part-filled Add Goal panel | Goals | functional | high |
| [TC-EMPGOL-299](#tc-empgol-299-the-panel-close-x-and-the-escape-key-behave-the-same-as-cancel) | The panel close (X) and the Escape key behave the same as Cancel | Goals | functional | medium |
| [TC-EMPGOL-300](#tc-empgol-300-creating-a-technical-goal-end-to-end) | Creating a Technical goal end to end | Goals | functional | critical |
| [TC-EMPGOL-301](#tc-empgol-301-creating-a-certificate-goal-end-to-end) | Creating a Certificate goal end to end | Goals | functional | critical |
| [TC-EMPGOL-302](#tc-empgol-302-creating-a-goal-with-a-name-that-already-exists-is-handled-explicitly) | Creating a goal with a name that already exists is handled explicitly | Goals | negative | high |
| [TC-EMPGOL-303](#tc-empgol-303-double-clicking-save-does-not-create-two-goals) | Double-clicking Save does not create two goals | Goals | negative | high |
| [TC-EMPGOL-304](#tc-empgol-304-a-failed-save-keeps-the-panel-open-with-the-user-s-input-intact) | A failed save keeps the panel open with the user's input intact | Goals | negative | high |
| [TC-EMPGOL-305](#tc-empgol-305-edit-goal-locks-the-identity-fields-and-leaves-the-descriptive-ones-editable) | Edit Goal locks the identity fields and leaves the descriptive ones editable | Goals | functional | critical |
| [TC-EMPGOL-306](#tc-empgol-306-the-edit-panel-is-pre-populated-with-the-goal-s-stored-values) | The Edit panel is pre-populated with the goal's stored values | Goals | functional | high |
| [TC-EMPGOL-307](#tc-empgol-307-edit-save-stays-disabled-until-something-actually-changes) | Edit Save stays disabled until something actually changes | Goals | functional | medium |
| [TC-EMPGOL-308](#tc-empgol-308-editing-a-goal-persists-the-new-values-everywhere-they-are-shown) | Editing a goal persists the new values everywhere they are shown | Goals | functional | critical |
| [TC-EMPGOL-309](#tc-empgol-309-certificate-code-is-editable-on-a-certificate-goal-and-hidden-on-a-technical-one) | Certificate Code is editable on a Certificate goal and hidden on a Technical one | Goals | functional | high |
| [TC-EMPGOL-310](#tc-empgol-310-cancelling-an-edit-discards-the-changes) | Cancelling an edit discards the changes | Goals | functional | high |
| [TC-EMPGOL-311](#tc-empgol-311-delete-is-disabled-for-a-goal-that-has-assigned-employees) | Delete is disabled for a goal that has assigned employees | Goals | functional | critical |
| [TC-EMPGOL-312](#tc-empgol-312-delete-is-enabled-only-when-a-goal-has-zero-assignments-across-the-whole-organisation) | Delete is enabled only when a goal has zero assignments across the whole organisation | Goals | functional | critical |
| [TC-EMPGOL-313](#tc-empgol-313-delete-is-blocked-when-the-department-count-is-zero-but-other-departments-still-use-the-goal) | Delete is blocked when the department count is zero but other departments still use the goal | Goals | negative | critical |
| [TC-EMPGOL-314](#tc-empgol-314-deleting-a-goal-asks-for-confirmation-first) | Deleting a goal asks for confirmation first | Goals | functional | critical |
| [TC-EMPGOL-315](#tc-empgol-315-a-deleted-goal-disappears-from-every-other-surface) | A deleted goal disappears from every other surface | Goals | regression | high |
| [TC-EMPGOL-316](#tc-empgol-316-a-newly-created-goal-appears-in-the-dashboard-and-employee-goals-surfaces) | A newly created goal appears in the dashboard and Employee Goals surfaces | Goals | integration | high |
| [TC-EMPGOL-317](#tc-empgol-317-editing-a-goal-name-adjacent-field-is-reflected-in-the-employee-goals-expansion) | Editing a goal name-adjacent field is reflected in the Employee Goals expansion | Goals | integration | medium |
| [TC-EMPGOL-318](#tc-empgol-318-security-a-base-employee-cannot-reach-the-goals-screen) | SECURITY — a base Employee cannot reach the Goals screen | Goals | security | critical |
| [TC-EMPGOL-319](#tc-empgol-319-security-a-csm-cannot-reach-the-goals-screen) | SECURITY — a CSM cannot reach the Goals screen | Goals | security | critical |
| [TC-EMPGOL-320](#tc-empgol-320-security-the-goals-apis-reject-roles-that-are-denied-the-screen) | SECURITY — the goals APIs reject roles that are denied the screen | Goals | security | critical |
| [TC-EMPGOL-321](#tc-empgol-321-security-a-department-scoped-role-cannot-write-goals-outside-its-scope-via-the-api) | SECURITY — a department-scoped role cannot write goals outside its scope via the API | Goals | security | critical |
| [TC-EMPGOL-322](#tc-empgol-322-pm-and-tm-both-get-the-full-three-tab-goals-screen-for-their-own-department) | PM and TM both get the full three-tab Goals screen for their own department | Goals | functional | high |
| [TC-EMPGOL-323](#tc-empgol-323-write-controls-on-goal-management-respect-the-signed-in-role) | Write controls on Goal Management respect the signed-in role | Goals | security | high |
| [TC-EMPGOL-324](#tc-empgol-324-an-expired-session-refreshes-silently-instead-of-dumping-the-user-on-an-error) | An expired session refreshes silently instead of dumping the user on an error | Goals | functional | high |
| [TC-EMPGOL-325](#tc-empgol-325-the-goals-screen-has-one-h1-and-a-sensible-heading-hierarchy) | The Goals screen has one H1 and a sensible heading hierarchy | Goals | accessibility | medium |
| [TC-EMPGOL-326](#tc-empgol-326-every-chart-carries-a-text-alternative) | Every chart carries a text alternative | Goals | accessibility | high |
| [TC-EMPGOL-327](#tc-empgol-327-goal-status-is-not-conveyed-by-colour-alone) | Goal status is not conveyed by colour alone | Goals | accessibility | high |
| [TC-EMPGOL-328](#tc-empgol-328-status-badges-and-muted-text-meet-wcag-aa-contrast) | Status badges and muted text meet WCAG AA contrast | Goals | accessibility | medium |
| [TC-EMPGOL-329](#tc-empgol-329-every-interactive-control-has-an-accessible-name) | Every interactive control has an accessible name | Goals | accessibility | medium |
| [TC-EMPGOL-330](#tc-empgol-330-filter-and-search-results-are-announced-to-assistive-technology) | Filter and search results are announced to assistive technology | Goals | accessibility | medium |
| [TC-EMPGOL-331](#tc-empgol-331-opening-the-add-edit-panel-traps-and-restores-focus-correctly) | Opening the Add/Edit panel traps and restores focus correctly | Goals | accessibility | high |
| [TC-EMPGOL-332](#tc-empgol-332-the-goals-tables-are-navigable-by-screen-reader) | The Goals tables are navigable by screen reader | Goals | accessibility | medium |
| [TC-EMPGOL-333](#tc-empgol-333-the-tab-strip-stays-fully-reachable-on-a-phone) | The tab strip stays fully reachable on a phone | Goals | functional | high |
| [TC-EMPGOL-334](#tc-empgol-334-dashboard-charts-fit-their-cards-on-a-phone) | Dashboard charts fit their cards on a phone | Goals | functional | high |
| [TC-EMPGOL-335](#tc-empgol-335-no-horizontal-page-scroll-at-phone-tablet-and-laptop-widths) | No horizontal page scroll at phone, tablet and laptop widths | Goals | functional | medium |
| [TC-EMPGOL-336](#tc-empgol-336-wide-tables-scroll-horizontally-within-their-container-on-small-screens) | Wide tables scroll horizontally within their container on small screens | Goals | functional | medium |
| [TC-EMPGOL-337](#tc-empgol-337-the-department-list-matches-the-department-module) | The department list matches the Department module | Goals | integration | medium |
| [TC-EMPGOL-338](#tc-empgol-338-total-employees-reconciles-with-the-employee-module-for-the-same-department) | Total Employees reconciles with the Employee module for the same department | Goals | integration | high |
| [TC-EMPGOL-339](#tc-empgol-339-employee-goals-row-count-matches-the-dashboard-total-employees-for-the-same-scope) | Employee Goals row count matches the dashboard Total Employees for the same scope | Goals | functional | high |
| [TC-EMPGOL-340](#tc-empgol-340-assigned-counts-on-goal-management-reconcile-with-the-employee-goals-expansions) | Assigned counts on Goal Management reconcile with the Employee Goals expansions | Goals | integration | high |
| [TC-EMPGOL-341](#tc-empgol-341-goals-changes-do-not-disturb-the-sibling-skills-tab) | Goals changes do not disturb the sibling Skills tab | Goals | regression | medium |
| [TC-EMPGOL-342](#tc-empgol-342-regression-the-old-sidebar-path-and-the-employee-page-tab-strip-no-longer-conflict) | REGRESSION — the old sidebar path and the Employee-page tab strip no longer conflict | Goals | regression | high |
| [TC-EMPGOL-343](#tc-empgol-343-regression-employee-goals-is-not-swallowed-by-the-employee-id-route) | REGRESSION — /employee/goals is not swallowed by the /employee/:id route | Goals | regression | critical |

---

## Goals

143 test cases.

### Accessibility (11)

#### TC-EMPGOL-213 — Tab strip supports Arrow-key navigation and Home/End

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Focus the Dashboard tab with the keyboard
2. Press ArrowRight, then ArrowRight again, then ArrowLeft
3. Press Home and End

**Expected**

Focus moves Dashboard → Employee Goals → Goal Management and back, Home returns to Dashboard, End moves to Goal Management, and Enter/Space activates the focused tab (WAI-ARIA tabs pattern)

**Automation Hint**

Assert document.activeElement carries role=tab and its text changes with each key press.

#### TC-EMPGOL-214 — Only the active tab panel is exposed; inactive panels are hidden from assistive tech

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open Goals
2. Inspect each element with role="tab" and its associated tabpanel

**Expected**

Each tab has aria-controls pointing at a tabpanel, the selected tab has aria-selected="true" and the other panels are hidden (hidden attribute or aria-hidden), so a screen reader reads one dataset at a time

#### TC-EMPGOL-249 — BUG — the row expander is not a button and cannot be reached or operated by keyboard

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Open the Employee Goals tab
2. Tab through the table with the keyboard and try to reach a row expander
3. Try to expand a row with Enter or Space

**Expected**

The expander is a focusable control with role="button" and aria-expanded that toggles on Enter/Space. Observed today: it is a bare table cell holding an sr-only label and an icon, so it is unreachable by keyboard and never announces its expanded state.

**Test Data**

- `observedMarkup`: <td><span class="sr-only">Show goals</span><svg …/></td> — no role, no tabindex, no aria-expanded

**Automation Hint**

Assert the expander matches role=button and exposes aria-expanded that flips on activation.

#### TC-EMPGOL-325 — The Goals screen has one H1 and a sensible heading hierarchy

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Open each of the three tabs
2. List the heading elements in order

**Expected**

Exactly one H1 ("Goals") with card titles as H2 and no skipped levels. Verified on the Dashboard tab (H1 + five H2); confirm the other two tabs, which currently expose no headings for their tables.

#### TC-EMPGOL-326 — Every chart carries a text alternative

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Open the Dashboard tab
2. Inspect each chart svg for role="img" and an aria-label or an associated description

**Expected**

Each chart exposes a label and a summary of its data (or an adjacent data table), so the dashboard is usable without sight. Roughly half the svgs are currently unlabelled.

**Test Data**

- `observed`: 32 svg elements on the Dashboard tab, only 15 with a role or aria-label

#### TC-EMPGOL-327 — Goal status is not conveyed by colour alone

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. View the donut charts and the status badges in the Employee Goals expansion in greyscale
2. Attempt to distinguish Completed / Delayed / In Progress / Not Started

**Expected**

Each status is distinguishable without colour — the badges carry their text (they do), and the donut segments carry labels, patterns or values (they currently do not)

#### TC-EMPGOL-328 — Status badges and muted text meet WCAG AA contrast

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Measure the contrast ratio of the Not Started / In Progress / Completed / Delayed badges, the muted "Progress History" text and the chart legends against their backgrounds

**Expected**

At least 4.5:1 for body text and 3:1 for large text and meaningful graphical boundaries

#### TC-EMPGOL-329 — Every interactive control has an accessible name

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Enumerate every button on each tab
2. Check each for visible text, aria-label or an sr-only label

**Expected**

No control is nameless — the icon-only Edit/Delete controls and the sort/filter icons must all announce their purpose and their target row

**Test Data**

- `observed`: 1 button on the Dashboard tab has no text, aria-label or sr-only label

#### TC-EMPGOL-330 — Filter and search results are announced to assistive technology

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. With a screen reader active, change the Tracking Status filter on the Employee Goals tab

**Expected**

The new result count is announced via a live region. One live region exists on the page today — confirm it is the one carrying the result counts and not only the loading state.

#### TC-EMPGOL-331 — Opening the Add/Edit panel traps and restores focus correctly

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal with the keyboard
2. Tab through the panel to its end and past it
3. Close it with Escape

**Expected**

Focus moves into the panel on open, is trapped inside it while open, and returns to the Add Goal button on close

#### TC-EMPGOL-332 — The Goals tables are navigable by screen reader

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Inspect both tables for caption/aria-label, scope on header cells and the association between a parent row and its expansion

**Expected**

Each table has an accessible name, headers carry scope, and the nested goal table is announced as belonging to the employee row that opened it

### Boundary (5)

#### TC-EMPGOL-286 — Goal name length is bounded

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Enter goal names at each boundary length
2. Attempt to save each

**Expected**

A documented maximum is enforced in the UI (maxlength or a validation message) and the same limit is enforced by the API — the field currently has no maxlength, so an unbounded string reaches the server and then renders into the listing and every chart label

**Test Data**

- `lengths`: 1, 2, 255, 256, 1000, 5000
- `observed`: the input carries no maxlength attribute

#### TC-EMPGOL-287 — Goal name accepts unicode, emoji and punctuation without corruption

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Create a goal with each name
2. Read it back in the listing, the Edit panel, the column filter and the dashboard ranked list

**Expected**

The name round-trips byte-for-byte in all four places with no mojibake and no HTML escaping artefacts

**Test Data**

- `names`: Goal — “quoted” & <ok>, लक्ष्य 目标, Rocket 🚀 Goal

#### TC-EMPGOL-293 — Estimated Duration rejects negative values

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Type a negative number into each of the Months, Weeks and Days inputs
2. Attempt to save

**Expected**

Negative values are blocked by the min=0 constraint and also rejected on save — typed (as opposed to spinner) input must not bypass the constraint

**Test Data**

- `inputs`: -1 in Months, -5 in Weeks, -10 in Days
- `observed`: inputs carry min=0 but no max and no step

#### TC-EMPGOL-294 — Estimated Duration rejects decimal and non-numeric input

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Enter each value into the Months field
2. Attempt to save and re-open the goal

**Expected**

Only whole numbers are stored; scientific notation and text are rejected rather than silently coerced

**Test Data**

- `inputs`: 1.5, 1e3, abc, 1,5

#### TC-EMPGOL-295 — Estimated Duration has an upper bound

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Enter a very large number into Months and save
2. Re-open the goal and read the value

**Expected**

A sensible maximum is enforced (a goal cannot take 999,999,999 months) and no integer-overflow error reaches the user

**Test Data**

- `inputs`: 999999999, 2147483648
- `observed`: no max attribute on any of the three inputs

### Functional (84)

#### TC-EMPGOL-202 — /employee/goals with no query string self-redirects to the signed-in user's own departmentId

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Navigate directly to /employee/goals with no query string
2. Wait for the screen to settle
3. Read the final URL

**Expected**

The URL is rewritten to /employee/goals?departmentId=<uuid> where the uuid is the department the signed-in user belongs to (different per user — MANAGEMENT for the CEO, the TM's own department for the TM)

**Automation Hint**

Assert the final URL carries a departmentId UUID and that two different role fixtures land on two different UUIDs.

#### TC-EMPGOL-203 — BUG — the Dashboard tab ignores the departmentId already present in its own URL

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Navigate to /employee/goals?departmentId=95895a10-b036-42cf-80c1-26b71251ebd6
2. Wait for loading to finish
3. Read the Department picker label and the dashboard body

**Expected**

The Department picker shows MANAGEMENT and the dashboard renders its KPI cards and charts for MANAGEMENT. Observed today: the picker reads "Select department" and the body shows the "Select a department — Choose a department above to view its goals dashboard." empty state, even though the same departmentId IS honoured by the Goal Management tab on the same screen.

**Test Data**

- `url`: /employee/goals?departmentId=95895a10-b036-42cf-80c1-26b71251ebd6
- `department`: MANAGEMENT

**Automation Hint**

Assert the empty-state copy is absent and the picker text equals the department named by the id.

#### TC-EMPGOL-204 — BUG — ?tab= in the URL does not restore the selected tab on load

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Navigate directly to /employee/goals?tab=management
2. Wait for the screen to settle
3. Read which tab has aria-selected="true"
4. Repeat with ?tab=employee-goals

**Expected**

The tab named in the URL is the selected tab. Observed today: Dashboard is selected regardless — the tab param is written on click but never read on load, so every shared Goals link opens on Dashboard.

**Test Data**

- `params`: tab=management, tab=employee-goals

**Automation Hint**

Assert getByRole('tab', { name: 'Goal Management' }) has aria-selected true after a direct navigation.

#### TC-EMPGOL-205 — Clicking each tab writes the matching tab value into the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Open Goals
2. Click "Employee Goals" and read the URL
3. Click "Goal Management" and read the URL
4. Click "Dashboard" and read the URL

**Expected**

Employee Goals sets tab=employee-goals, Goal Management sets tab=management, and Dashboard clears the param or sets tab=dashboard — the two spellings are consistent with what the loader expects

**Test Data**

- `Employee Goals`: tab=employee-goals
- `Goal Management`: tab=management

**Automation Hint**

Capture page.url() after each tab click; the values must round-trip with the deep-link test above.

#### TC-EMPGOL-207 — Reloading the page preserves tab, department and year selections

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Open Goals, select department QA and year 2025
2. Switch to the Employee Goals tab
3. Reload the browser

**Expected**

After the reload the Employee Goals tab is still selected, the department is still QA and the year is still 2025 — all three survive because they are all represented in the URL

**Automation Hint**

Depends on the tab-param and year-param defects being fixed; assert all three independently so the test reports which one regressed.

#### TC-EMPGOL-212 — BUG — the three tabs each keep a separate, unsynchronised department selection

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. On the Dashboard tab select department QA and wait for the charts
2. Switch to the Employee Goals tab and read its Department filter
3. Switch to the Goal Management tab and read its department combobox

**Expected**

All three tabs reflect the one department the user chose. Observed today: Dashboard=QA, Employee Goals resets to "All Departments", Goal Management stays on "MANAGEMENT" — three independent department controls on one screen, so the numbers across tabs describe three different populations.

**Automation Hint**

Read the three control labels after one selection and assert they agree.

#### TC-EMPGOL-215 — Admin sees the department empty state until a department is chosen

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Open /employee/goals as an Admin
2. Wait for loading to finish without touching the picker

**Expected**

The dashboard body shows "Select a department" / "Choose a department above to view its goals dashboard." and no KPI cards or charts render

**Automation Hint**

This is the intended empty state; it becomes wrong only because the URL already names a department — pair with the departmentId-hydration defect.

#### TC-EMPGOL-216 — A department-scoped role gets no department picker and lands straight on data

| Field | Value |
| --- | --- |
| **Tags** | @functional, @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open /employee/goals as the TM persona
2. Look for a Department control next to the Year control

**Expected**

No Department picker is rendered (only Year), and the dashboard renders immediately for the user's own department — the department is not user-selectable for this role

**Automation Hint**

Assert getByRole('combobox') returns only the Year control for this fixture.

#### TC-EMPGOL-218 — Employees with Goals never exceeds Total Employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read Total Employees and Employees with Goals
3. Repeat for three different departments

**Expected**

Employees with Goals <= Total Employees for every department, and the Employee Goal Coverage donut splits exactly into those two numbers

**Automation Hint**

Numeric invariant — assert across several departments in a loop.

#### TC-EMPGOL-219 — Year filter offers All Years plus only the years that actually hold data

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab and wait for data
2. Open the Year combobox

**Expected**

The options are "All Years", 2026 and 2025 — years derived from the data, not a hardcoded range, and no year with zero records is listed

**Automation Hint**

Before a department is chosen the list collapses to just "All Years"; assert the populated case after data loads.

#### TC-EMPGOL-220 — Changing the year re-scopes Employees with Goals and Total Goal Assignments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Read the KPI cards with Year = All Years
2. Switch to 2026 and read again
3. Switch to 2025 and read again
4. Switch back to All Years

**Expected**

Employees with Goals and Total Goal Assignments both change per year and return to the original values when All Years is reselected

**Test Data**

- `2025`: 118 / 178
- `2026`: 158 / 305
- `All Years`: 173 / 559

#### TC-EMPGOL-221 — BUG — Total L&D Hours ignores the Year filter

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Read Total L&D Hours with Year = All Years
2. Switch to 2026 and read it again
3. Switch to 2025 and read it again

**Expected**

Total L&D Hours changes with the selected year the same way the other two data-driven cards do. Observed today: it stays at exactly 11877h for all three selections, so a per-year L&D figure read off this dashboard is wrong.

**Test Data**

- `observed`: All Years=11877h, 2026=11877h, 2025=11877h while the other cards changed

**Automation Hint**

Assert the three L&D values are not all identical while withGoals/assignments do differ — that combination is the defect signature.

#### TC-EMPGOL-222 — The selected year is carried in the URL so a filtered dashboard can be shared

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Select Year = 2025 on the Dashboard tab
2. Read the URL

**Expected**

The URL gains a year param. Observed today: the URL is unchanged, so a year-filtered dashboard cannot be bookmarked or shared and a reload silently reverts to All Years.

#### TC-EMPGOL-223 — Goal Tracking Health donut renders the four tracking statuses

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read the GOAL TRACKING HEALTH card legend and segments

**Expected**

The legend lists Completed, Delayed, In Progress and Not Started, the donut has a segment per non-zero status, and the segment values sum to Total Goal Assignments

#### TC-EMPGOL-224 — Donut charts expose their values without requiring a hover

| Field | Value |
| --- | --- |
| **Tags** | @functional, @a11y |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read the two donut cards without moving the mouse

**Expected**

Each segment's count or percentage is readable from the card (data labels, a centre total, or values printed in the legend). Observed today: both donuts show colour-only segments with a bare text legend — a user must hover each slice to learn any number, and a keyboard or screen-reader user cannot get them at all.

#### TC-EMPGOL-225 — Employee Goal Coverage donut reconciles with the KPI cards

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Read Total Employees and Employees with Goals from the KPI cards
2. Hover the "Goals Assigned" and "No Goals" segments of the coverage donut

**Expected**

Goals Assigned equals Employees with Goals, No Goals equals Total Employees minus Employees with Goals, and the two segments sum to Total Employees

#### TC-EMPGOL-226 — RM-wise goal status chart plots one stacked bar per reporting manager plus the L&D hours line

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read the RM-WISE GOAL STATUS chart

**Expected**

Every reporting manager in the selected department has a bar stacked by Completed/Delayed/In Progress/Not Started, the "L&D Hours by RM" line is drawn against the right-hand axis, and both axes are labelled with units

#### TC-EMPGOL-227 — "Show as separate charts" splits the combined RM chart and can be toggled back

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Tick "Show as separate charts" on the RM-WISE GOAL STATUS card
2. Observe the rendering
3. Untick it

**Expected**

The stacked bar and the L&D line render as separate charts while ticked (the L&D series leaves the combined legend), the same managers appear in both modes, and unticking restores the combined chart with no data loss

#### TC-EMPGOL-228 — RM chart legend groups the status series together instead of interleaving the L&D line

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read the RM-WISE GOAL STATUS legend left to right

**Expected**

The four status series read in a meaningful order with the "L&D Hours by RM" line series separated or last. Observed today the legend is alphabetical — Completed, Delayed, In Progress, L&D Hours by RM, Not Started — which drops a line series into the middle of the stack order and splits "Not Started" away from the other statuses.

#### TC-EMPGOL-229 — AVG COMPLETION % BY GOAL ranks goals and shows an accurate count in its header

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read the AVG COMPLETION % BY GOAL card header and its rows

**Expected**

The header count matches the number of rows listed, rows are numbered #1..#N in descending completion order, and every percentage is between 0% and 100%

#### TC-EMPGOL-230 — MOST AT-RISK GOALS (DELAYED) lists only goals with delayed assignments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab
2. Read the MOST AT-RISK GOALS (DELAYED) card
3. Cross-check one listed goal on the Employee Goals tab filtered to Tracking Status = Delayed

**Expected**

Every listed goal has at least one delayed assignment, the header count matches the row count, and the per-goal employee counts agree with the Employee Goals tab

#### TC-EMPGOL-235 — The "Showing data for <DEPT>" label always matches the active department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Select department QA
2. Read the small right-aligned "Showing data for" label
3. Switch departments and read it again

**Expected**

The label names the department currently driving the charts, and it is present whenever a department is active (it is absent for department-scoped roles, where it would be the clearest confirmation of scope)

#### TC-EMPGOL-239 — Search employee narrows the table to matching names

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Open the Employee Goals tab
2. Type an employee name into "Search employee"

**Expected**

Only rows whose Employee cell matches remain; the search is case-insensitive and matches on partial names

**Test Data**

- `query`: Arjun Jadeja

#### TC-EMPGOL-240 — Search goal filters employees down to those holding a matching goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Open the Employee Goals tab
2. Type "react" into "Search goal"
3. Expand one of the remaining rows

**Expected**

Every remaining employee holds at least one goal whose name matches "react", and expanding a row proves the match

**Test Data**

- `query`: react

#### TC-EMPGOL-241 — Reporting Manager filter lists the managers present in scope and filters correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Open the Reporting Manager combobox
2. Pick a manager
3. Read the Reporting Manager column of the remaining rows

**Expected**

The list starts with "All Managers" followed by managers sorted by name, and after selection every row shows that manager

#### TC-EMPGOL-242 — Tracking Status filter offers exactly the four goal statuses

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Open the Tracking Status combobox

**Expected**

The options are All Statuses, Not Started, In Progress, Completed and Delayed — matching the statuses used by the dashboard donut and the expanded goal rows

#### TC-EMPGOL-243 — Tracking Status filter keeps only employees holding a goal in that status

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Select Tracking Status = Delayed
2. Expand two of the remaining rows

**Expected**

Each remaining employee has at least one goal in the chosen status, visible in the expanded child table

**Test Data**

- `status`: Delayed
- `observedRows`: 35

#### TC-EMPGOL-244 — "No Goals Assigned" toggle isolates employees with zero goals

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Note the unfiltered row count
2. Switch "No Goals Assigned" on
3. Read the Goals column of the remaining rows
4. Switch it off again

**Expected**

With the toggle on every remaining row shows Goals = 0, and switching it off restores the full list

**Test Data**

- `observed`: 279 rows unfiltered, 106 rows with the toggle on

#### TC-EMPGOL-245 — Filters compose — status, goal search and department narrow together

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Apply Tracking Status = Delayed
2. Add the goal search "react"
3. Add a Reporting Manager
4. Read the row count after each step

**Expected**

Each added filter narrows the result further (AND semantics), never widens it, and the counts are consistent when filters are removed in reverse order

**Test Data**

- `combination`: Tracking Status=Delayed + Search goal="react"
- `observed`: 279 → 35 → 2 rows

#### TC-EMPGOL-246 — "Clear" resets every Employee Goals filter at once

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Apply the employee search, goal search, a manager, a status and the No Goals toggle
2. Click "Clear"

**Expected**

All five controls return to their defaults, the toggle switches off and the full unfiltered row count is restored

#### TC-EMPGOL-250 — The Goals count in the parent row equals the number of rows in its expansion

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Pick three employees with different Goals counts
2. Expand each
3. Count the nested rows

**Expected**

The nested row count equals the parent Goals value for every employee — the roll-up and the detail never disagree

#### TC-EMPGOL-251 — The Certificates count matches the certificate-type goals in the expansion

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Pick an employee with Certificates >= 1
2. Expand the row and identify which nested goals are certificate-type

**Expected**

The Certificates column equals the number of certificate-type goals listed. Today the nested table gives no type indicator at all, so this roll-up cannot be verified from the UI — the goal name is also shown without the certificate-code prefix that Goal Management uses.

#### TC-EMPGOL-252 — BUG — Progress History reads "No progress recorded" for goals that clearly have progress

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Expand an employee holding an In Progress goal
2. Compare the Progress History cell with the Completion % and Start Date cells

**Expected**

A goal with a non-zero completion percentage and a start date shows its progress entries. Observed today: Progress History says "No progress recorded" for every row inspected, including ones at 20% with a start date — either the column is not wired to the includeHistory payload or it should not be shown.

**Test Data**

- `example`: Arjun Jadeja / Master React Advanced Patterns — Status "In Progress", Completion 20%, Start Date Jan 13 2026, Progress History "No progress recorded"

#### TC-EMPGOL-253 — BUG — L&D Hours are reported for employees with zero goals

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Switch the "No Goals Assigned" toggle on
2. Read the L&D Hours column of the remaining rows

**Expected**

An employee with no goal assignments shows 0h, or the UI explains where non-goal L&D hours come from. Observed today: many zero-goal employees carry double-digit L&D hours, which means either the roll-up counts unassigned/deleted goals or the two columns are sourced from unrelated records.

**Test Data**

- `examples`: Drashti Parekh — Goals 0, Certificates 0, L&D Hours 11h, Falgun Patel — Goals 0, L&D Hours 88h

#### TC-EMPGOL-254 — Overdue Goals and the "Delayed" status use one consistent term

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Read the Employee Goals column header "Overdue Goals"
2. Read the Tracking Status options
3. Read the dashboard card "MOST AT-RISK GOALS (DELAYED)"

**Expected**

One term is used throughout. Observed today the same concept is called "Overdue" in the table, "Delayed" in the filter and the status badge, and "At-Risk (Delayed)" on the dashboard.

#### TC-EMPGOL-255 — Overdue Goals count matches the delayed goals in the expansion

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Filter Tracking Status = Delayed
2. Pick a row with Overdue Goals >= 1 and expand it
3. Count the nested goals whose status is Delayed

**Expected**

The Overdue Goals value equals the number of Delayed goals in the expansion

#### TC-EMPGOL-256 — Several rows can be expanded at the same time and collapse independently

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Expand three different employee rows
2. Collapse the middle one

**Expected**

All three expansions can coexist, the label toggles between "Show goals" and "Hide goals" per row, and collapsing one leaves the others open

#### TC-EMPGOL-258 — Employees with no reporting manager render a readable placeholder

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open the Employee Goals tab
2. Find rows whose Reporting Manager cell is empty

**Expected**

Per the empty-data convention already agreed for this system, an unassigned manager reads as words (e.g. "No manager assigned") rather than a bare em dash. Observed today: "—".

#### TC-EMPGOL-259 — Missing start and end dates in the expansion render a readable placeholder

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Expand an employee with a Not Started goal
2. Read the Start Date and End Date cells

**Expected**

Not-yet-set dates read as words rather than a bare em dash, consistent with the same convention

#### TC-EMPGOL-260 — The Employee Goals tab is read-only — no assignment or progress editing is offered

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Expand several employee rows as an Admin
2. Look for any control to assign a goal, change a status, edit a completion percentage or add a comment

**Expected**

Confirms the intended scope of this tab. Observed today there is no interactive element anywhere inside the expansion, and no assign action on the tab — so with the Assign-to field also gone from the Add/Edit Goal panel, this build has no UI path to assign a goal to an employee or record progress at all. Confirm with the product owner whether assignment is expected to live elsewhere.

#### TC-EMPGOL-261 — Numeric roll-up columns are right-aligned and consistently formatted

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Read the Goals, Overdue Goals, Certificates and L&D Hours columns

**Expected**

All four are right-aligned, integers carry no decimals, and L&D Hours consistently carries the "h" suffix including at zero ("0h")

#### TC-EMPGOL-263 — BUG — only the first 100 of 426 goals are reachable; there is no pagination

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open the Goal Management tab
2. Read the results footer
3. Scroll to the bottom of the table and look for pagination controls
4. Try to reach goal number 101

**Expected**

All 426 goals are reachable by paging, infinite scroll or a page-size control. Observed today: the footer advertises 426 results, only 100 render, and no control exists to reach the other 326 — they can only be found by guessing a search term.

**Test Data**

- `observed`: footer reads "Showing 1 - 100 of 426 results"; 100 rows in the DOM; no next/previous/page-size controls; API called with limit=100

**Automation Hint**

Parse the footer total, compare with the rendered row count, and assert pagination controls exist when total > rendered.

#### TC-EMPGOL-264 — Goal search filters the catalogue and updates the results footer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Type a term into the Search box
2. Read the rows and the footer

**Expected**

Only matching goals remain, the footer total updates to the filtered count, and the search matches on goal name case-insensitively

**Test Data**

- `query`: kubernetes
- `observed`: Showing 1 - 2 of 2 results

#### TC-EMPGOL-265 — Search finds goals that live beyond the first 100 rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Identify a goal that is not in the first 100 rows (e.g. via the API or the column filter list)
2. Search for it by name

**Expected**

The goal is found — confirming the search runs server-side over all 426 records and is not merely filtering the 100 already loaded

#### TC-EMPGOL-266 — Column filter "Filter by Goal Name" offers the distinct goal names and filters on selection

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click the filter icon in the Goal Name header
2. Select one or more names
3. Apply

**Expected**

A searchable checkbox list of distinct goal names appears and the table narrows to the selected names; the filter can be cleared

#### TC-EMPGOL-267 — Column filter list shows raw goal names while the table shows certificate-prefixed names

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open the Goal Name column filter and note how a certificate goal is labelled
2. Find the same goal in the table

**Expected**

The same goal reads the same way in both places. Observed today the filter shows the bare name while the table prefixes the certificate code, so users cannot match one list against the other.

**Test Data**

- `example`: filter list shows "8i0"; the table row reads "TOGAF-90= - 8i0"

#### TC-EMPGOL-268 — Column filter "Filter by Type" narrows to Technical or Certificate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click the filter icon in the Type header
2. Select Certificate and apply
3. Repeat for Technical

**Expected**

The list offers exactly Technical and Certificate and every remaining row carries the selected type badge

#### TC-EMPGOL-269 — Sorting by Goal Name orders the column ascending and descending

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click the sort control in the Goal Name header
2. Read the first rows
3. Click again for descending

**Expected**

Rows reorder alphabetically and the sort direction indicator reflects the active state

#### TC-EMPGOL-270 — BUG — sorting uses the raw goal name while the column displays the certificate-prefixed name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Sort the Goal Name column ascending
2. Read the first three rows as they are displayed

**Expected**

The visible column reads in alphabetical order. Observed today it does not: the sort key is the stored name ("8i0") but the cell renders "TOGAF-90= - 8i0", so every certificate goal lands in a position that looks random to the user.

**Test Data**

- `observed`: ascending sort puts "TOGAF-90= - 8i0" first, then "Agile Development Mastery", then "API Gateway Implementation"

**Automation Hint**

Collect the displayed cell strings and assert they are sorted — do not re-derive the underlying name.

#### TC-EMPGOL-271 — Search, column filter and sort can be combined without losing each other

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Search a term
2. Add a Type column filter
3. Sort by Goal Name
4. Clear the search only

**Expected**

All three narrow together, the footer count reflects the combination, and clearing one control leaves the other two applied

#### TC-EMPGOL-272 — Assigned Emp. (Dept.) and (Org.) use one consistent empty representation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Read the Assigned Emp. (Dept.) column across all rows
2. Collect the distinct values used for "no employees"

**Expected**

A zero-assignment cell always renders the same way — "0" or "None", never a mix of both in one column

**Test Data**

- `observed`: some rows show "None" in the Dept. column while others show a numeric "1"

#### TC-EMPGOL-273 — The department-assigned count opens a "Department Employees" popover listing those employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click the number in the Assigned Emp. (Dept.) cell of a goal
2. Read the popover

**Expected**

A popover headed "Department Employees" lists exactly that many employees by name, all belonging to the department in the tab's combobox

#### TC-EMPGOL-274 — The organisation-assigned count opens a department-wise breakdown

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click the number in the Assigned Emp. (Org.) cell of a goal
2. Read the popover

**Expected**

A popover headed "Organisation Employees" lists each department with its employee count, sorted descending

#### TC-EMPGOL-275 — The organisation breakdown sums to the organisation-assigned count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Pick three goals with different org counts
2. Open each org popover and sum the per-department counts

**Expected**

The sum equals the number on the button for every goal, and the department-assigned count equals the entry for the currently selected department

#### TC-EMPGOL-276 — The popover heading spelling matches the column header

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Read the "Assigned Emp. (Org.)" column header
2. Open the popover and read its heading

**Expected**

One spelling is used. Observed today the column abbreviates "Org." while the popover reads "Organisation Employees" — harmless but worth settling alongside the Overdue/Delayed wording.

#### TC-EMPGOL-277 — A very long description does not blow out the row height

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Find the TOGAF-9 goal in the listing
2. Compare its row height with its neighbours

**Expected**

The Description cell truncates with an ellipsis (and reveals the rest on hover or in the Edit panel) so all rows stay a uniform height

**Test Data**

- `example`: the TOGAF-9 goal carries a multi-paragraph description

#### TC-EMPGOL-279 — Goal Type defaults to Technical and offers exactly two options

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal
2. Read the Goal Type value
3. Open the dropdown

**Expected**

The field arrives pre-selected as Technical and lists exactly Technical and Certificate

#### TC-EMPGOL-280 — Certificate Code appears only when Goal Type is Certificate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal with type Technical and confirm no Certificate Code field
2. Switch the type to Certificate
3. Switch back to Technical

**Expected**

Certificate Code appears when Certificate is chosen and disappears again on switching back

#### TC-EMPGOL-282 — Save stays disabled until the mandatory fields are valid

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal and read the Save button state
2. Enter a goal name
3. Read it again

**Expected**

Save is disabled on open (verified) and enables only once Goal Name is filled for a Technical goal

#### TC-EMPGOL-284 — Goal Name shows its invalid styling only after the user has interacted with it

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click "Add Goal"
2. Without typing anything, look at the Goal Name field border

**Expected**

The field is neutral until it is touched and left empty. Observed today it renders in the red invalid state the instant the panel opens, which reads as an error the user has not made yet.

#### TC-EMPGOL-290 — Rich-text formatting survives a save and reload in all four editors

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Apply bold, italic, underline, strikethrough, code, alignment, a link, a bullet list, a numbered list and a quote in each of the four editors
2. Save the goal
3. Re-open it in the Edit panel

**Expected**

Every formatting mark is preserved exactly, in the right editor, with no markup leaking as visible text

#### TC-EMPGOL-291 — Rich-text Undo and Redo work per editor and do not cross-contaminate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Type into Description then Learning Objectives
2. Press Undo in the Learning Objectives toolbar several times

**Expected**

Only the Learning Objectives content is undone; Description is untouched. Redo is disabled until an undo has happened (verified disabled on open).

#### TC-EMPGOL-296 — Months, Weeks and Days combine into one coherent duration

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Fill all three duration inputs and save
2. Re-open the goal in the Edit panel

**Expected**

All three values are stored and shown back unchanged; the UI makes clear whether they add together or are alternatives, and out-of-range parts (e.g. Weeks=8) are either normalised or bounded

**Test Data**

- `input`: Months=1, Weeks=2, Days=3

#### TC-EMPGOL-297 — Estimated Duration is left blank when nothing is entered

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Create a goal without touching the duration inputs
2. Re-open it in the Edit panel and inspect the API payload

**Expected**

The stored duration is null/empty rather than three zeros, so "no estimate" is distinguishable from "estimated at zero"

#### TC-EMPGOL-298 — Cancel discards a part-filled Add Goal panel

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal, fill the name and some rich text
2. Click Cancel
3. Re-open Add Goal

**Expected**

No goal is created, the listing is unchanged, and the panel re-opens empty with Goal Type back at Technical

#### TC-EMPGOL-299 — The panel close (X) and the Escape key behave the same as Cancel

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal and fill some fields
2. Close with the X
3. Repeat and close with Escape

**Expected**

Both discard the draft without creating a goal, and both either warn about unsaved changes or discard consistently with Cancel — the three exits must not disagree

#### TC-EMPGOL-300 — Creating a Technical goal end to end

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal
2. Fill Goal Name, Description, Learning Objectives, Definition of Done, Topics & Concepts and Estimated Duration
3. Save
4. Search for the goal in the listing and open it in the Edit panel

**Expected**

A success toast appears, the panel closes, the listing shows the goal with type Technical and zero assigned employees, and every field written is returned unchanged by the Edit panel and the API

**Test Data**

- `name`: E2E Technical Goal <timestamp>
- `type`: Technical

#### TC-EMPGOL-301 — Creating a Certificate goal end to end

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal, set type Certificate, fill the name and Certificate Code
2. Save
3. Find the goal in the listing

**Expected**

The goal is created and the listing renders it as "E2E-001 - E2E Cert Goal <timestamp>" with the Certificate type badge

**Test Data**

- `name`: E2E Cert Goal <timestamp>
- `certificateCode`: E2E-001

#### TC-EMPGOL-305 — Edit Goal locks the identity fields and leaves the descriptive ones editable

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click Edit on any goal
2. Inspect the enabled/disabled state of every field

**Expected**

Goal Name and Goal Type are disabled; Description, Learning Objectives, Definition of Done, Topics & Concepts and the three Estimated Duration inputs are editable. Verified today — and note the panel offers no explanation for why the two fields are locked.

#### TC-EMPGOL-306 — The Edit panel is pre-populated with the goal's stored values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Pick a goal with a description and open Edit
2. Compare every field against the listing row and the API payload

**Expected**

Goal Name, Goal Type, Description and the three new rich-text fields all show the stored values, with formatting preserved; empty fields are genuinely empty rather than showing another goal's content

#### TC-EMPGOL-307 — Edit Save stays disabled until something actually changes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Edit on a goal and read the Save state
2. Type a character into Description and read it again
3. Undo the change and read it once more

**Expected**

Save is disabled on open (verified), enables on the first real change, and disables again if the content is returned to its original value

#### TC-EMPGOL-308 — Editing a goal persists the new values everywhere they are shown

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Edit a goal's Description, Learning Objectives, Definition of Done, Topics & Concepts and Estimated Duration
2. Save
3. Re-open the goal, reload the page, and check the listing Description cell

**Expected**

A success toast appears, the listing updates without a full reload, and every edited value survives a reload and matches the API

#### TC-EMPGOL-309 — Certificate Code is editable on a Certificate goal and hidden on a Technical one

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Edit on a Certificate goal and look for Certificate Code
2. Open Edit on a Technical goal and look again

**Expected**

Certificate Code is present and editable for Certificate goals only; since Goal Type is locked in Edit, there is no way to make it appear on a Technical goal

#### TC-EMPGOL-310 — Cancelling an edit discards the changes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Edit, change the Description
2. Click Cancel
3. Re-open the same goal

**Expected**

The original Description is intact and the listing is unchanged

#### TC-EMPGOL-311 — Delete is disabled for a goal that has assigned employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Read the Delete control on rows with a non-zero Assigned Emp. (Org.) value
2. Hover it

**Expected**

Delete is disabled and a tooltip explains why (e.g. "Goal is assigned to N employees"). Verified disabled today; the missing part is the explanation — a disabled control with no reason is the most common support question this screen will generate.

**Test Data**

- `observed`: all 100 visible rows had Delete disabled, and all carried a non-zero organisation-assigned count

#### TC-EMPGOL-312 — Delete is enabled only when a goal has zero assignments across the whole organisation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Create a new goal (it has no assignments)
2. Find it in the listing and read its Delete control

**Expected**

Delete is enabled for the brand-new goal, confirming the rule keys on the organisation-level count and not on the department-scoped one

#### TC-EMPGOL-314 — Deleting a goal asks for confirmation first

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click Delete on a deletable goal
2. Read the dialog
3. Cancel it and confirm the goal still exists
4. Repeat and confirm

**Expected**

A confirmation dialog names the goal, Cancel leaves it untouched, and confirming removes it with a success toast and an immediate listing refresh

#### TC-EMPGOL-322 — PM and TM both get the full three-tab Goals screen for their own department

| Field | Value |
| --- | --- |
| **Tags** | @functional, @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

PM persona (pmPage) and TM persona (tmPage)

**Steps**

1. Load /employee/goals as each persona
2. Read the tab strip, the presence of a department picker and the KPI values

**Expected**

Both see all three tabs, neither gets a department picker, and each sees its own department's numbers (observed: TM 279/173/559, PM 92/48/155)

#### TC-EMPGOL-324 — An expired session refreshes silently instead of dumping the user on an error

| Field | Value |
| --- | --- |
| **Tags** | @functional, @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Load /employee/goals with an expired access token
2. Watch the network log

**Expected**

The 401s trigger one token refresh and the original calls are retried transparently; the user sees data, not an error. Confirm the refresh is not re-triggered on every request and that a failed refresh routes to login rather than looping.

**Test Data**

- `observed`: first load issues three 401s, then POST /api/v1/auth/refresh 201, then the same three calls succeed

#### TC-EMPGOL-333 — The tab strip stays fully reachable on a phone

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture) at 375x812

**Steps**

1. Open /employee/goals at a 375px viewport
2. Look at the tab strip

**Expected**

All three tabs are reachable. Observed today: "Goal Management" is cut off at the right edge with no scroll affordance or overflow treatment, so the third tab looks unavailable on a phone.

#### TC-EMPGOL-334 — Dashboard charts fit their cards on a phone

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture) at 375x812

**Steps**

1. Open the Dashboard tab at 375px
2. Scroll through the donut charts and the RM-wise chart

**Expected**

Each chart and its legend fit inside the card. Observed today the GOAL TRACKING HEALTH donut and its legend overflow the card boundary.

#### TC-EMPGOL-335 — No horizontal page scroll at phone, tablet and laptop widths

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Load the Goals screen at each viewport
2. Compare document.scrollWidth with window.innerWidth

**Expected**

No horizontal overflow at any of the three. Verified passing today — keep as a regression guard while the chart and tab-strip overflow issues are fixed.

**Test Data**

- `viewports`: 375x812, 768x1024, 1280x800

#### TC-EMPGOL-336 — Wide tables scroll horizontally within their container on small screens

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture) at 375x812

**Steps**

1. Open the Employee Goals and Goal Management tabs at 375px
2. Try to reach the right-most columns

**Expected**

The table scrolls horizontally inside its own container (or collapses to a card layout) so every column is reachable without the page itself scrolling sideways

#### TC-EMPGOL-339 — Employee Goals row count matches the dashboard Total Employees for the same scope

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture)

**Steps**

1. Read Total Employees on the Dashboard tab
2. Switch to Employee Goals with no filters applied and count the rows

**Expected**

The two agree for a department-scoped role (verified at 279 for the TM). For an Admin they cannot agree until the two tabs share one department selection — see the unsynchronised-filters defect.

### Integration (5)

#### TC-EMPGOL-316 — A newly created goal appears in the dashboard and Employee Goals surfaces

| Field | Value |
| --- | --- |
| **Tags** | @regression, @integration |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Create a goal from Goal Management
2. Switch to the Dashboard tab and to the Employee Goals goal search
3. Look for the new goal

**Expected**

The new goal is searchable on the Employee Goals tab and, once it has assignments, appears in the dashboard ranked lists — the three tabs read one catalogue

#### TC-EMPGOL-317 — Editing a goal name-adjacent field is reflected in the Employee Goals expansion

| Field | Value |
| --- | --- |
| **Tags** | @integration, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Edit a goal that is assigned to at least one employee
2. Switch to Employee Goals and expand an employee holding it

**Expected**

The expansion shows the updated goal, with no page reload needed and no stale cached copy

#### TC-EMPGOL-337 — The department list matches the Department module

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open the Dashboard department picker and record all 41 options
2. Compare with the Department module listing

**Expected**

The same departments appear in both, with the same names and no stale or missing entries

#### TC-EMPGOL-338 — Total Employees reconciles with the Employee module for the same department

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Note Total Employees for a department on the Goals dashboard
2. Filter the Employee Details listing to the same department and count

**Expected**

The two counts agree, or any difference (e.g. past employees excluded) is deliberate and documented

#### TC-EMPGOL-340 — Assigned counts on Goal Management reconcile with the Employee Goals expansions

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Pick a goal and note its Assigned Emp. (Dept.) count
2. On Employee Goals, filter to the same department and count the employees whose expansion lists that goal

**Expected**

The two counts match exactly — the catalogue roll-up and the per-employee detail describe the same assignments

### Negative (13)

#### TC-EMPGOL-206 — Browser Back after switching tabs returns to the previous tab, not out of the app

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open Goals on the Dashboard tab
2. Click "Goal Management"
3. Press the browser Back button

**Expected**

The Dashboard tab is shown again. Observed today: Back leaves the app entirely (lands on about:blank) because the tab change replaces the history entry instead of pushing one.

**Automation Hint**

page.goBack() then assert the URL is still under /employee/goals.

#### TC-EMPGOL-208 — A departmentId that does not exist is rejected with a readable message

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Navigate to /employee/goals?departmentId=00000000-0000-0000-0000-000000000000
2. Wait for the screen to settle

**Expected**

The screen shows a clear "department not found" message or falls back to the department picker — it does not show a blank dashboard, a raw API error, or spin on "Loading data..." forever

**Test Data**

- `departmentId`: 00000000-0000-0000-0000-000000000000

**Automation Hint**

Assert no unhandled error toast and that the page reaches a terminal state within the normal load budget.

#### TC-EMPGOL-209 — A malformed (non-UUID) departmentId is handled without a validation crash

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Navigate to /employee/goals?departmentId=not-a-uuid
2. Watch the network calls and the rendered page

**Expected**

No "Validation failed (uuid is expected)" toast reaches the user; the screen degrades to the department picker or a readable error. This is the exact failure mode the old /employee/:id route produced, so it is an explicit regression guard.

**Test Data**

- `departmentId`: not-a-uuid

**Automation Hint**

Assert the page body does not contain "Validation failed" or "uuid is expected".

#### TC-EMPGOL-232 — A department with no goal data shows an empty state rather than zeros-with-broken-charts

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Select a department with no goal assignments (e.g. one of the single-employee departments)
2. Wait for the dashboard to settle

**Expected**

The KPIs show 0, the charts either render an explicit "no data" message or an empty plot area with axes — no NaN, no "Infinity%", no blank card and no console error

#### TC-EMPGOL-247 — A filter combination with no matches shows a readable empty state

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Search for an employee name that does not exist
2. Read the table area

**Expected**

A clear "no results" message with a way back (Clear), not a blank table body or a stuck loading state

#### TC-EMPGOL-281 — A Certificate Code typed before switching the type back is not silently resubmitted

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal, set type Certificate, enter a certificate code
2. Switch the type back to Technical
3. Save and inspect the created goal

**Expected**

The saved Technical goal carries no certificate code — the hidden field is cleared, not merely hidden

#### TC-EMPGOL-283 — Certificate goals cannot be saved without a Certificate Code

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal, set type Certificate
2. Enter a goal name but leave Certificate Code empty
3. Read the Save button state

**Expected**

Save remains disabled and the Certificate Code field is marked required (verified disabled today — confirm the field also carries a visible required marker, which it currently does not)

#### TC-EMPGOL-285 — A whitespace-only goal name is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open Add Goal
2. Type only spaces into Goal Name
3. Attempt to save

**Expected**

Save stays disabled or the save is rejected with a validation message — a goal named only of whitespace is never created

**Test Data**

- `name`: "   "

#### TC-EMPGOL-292 — The rich-text Link control validates the URL it is given

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Use the Link button in the Description toolbar with each value
2. Save and re-open

**Expected**

Only a valid http(s) URL is accepted; javascript: is rejected or neutralised and malformed input produces a validation message

**Test Data**

- `urls`: javascript:alert(1), not a url, https://example.com

#### TC-EMPGOL-302 — Creating a goal with a name that already exists is handled explicitly

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Note an existing goal name
2. Create a new goal with exactly that name
3. Then try again with the same name in different casing and with trailing spaces

**Expected**

The behaviour is deliberate and consistent — either a duplicate warning blocks it, or duplicates are allowed for all three variants. What must not happen is exact duplicates being blocked while case- or whitespace-variants slip through and produce two goals that look identical in every list.

#### TC-EMPGOL-303 — Double-clicking Save does not create two goals

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Fill the Add Goal panel
2. Click Save twice in rapid succession
3. Search the listing for the goal name

**Expected**

Exactly one goal is created; Save disables itself or shows a busy state on the first click

#### TC-EMPGOL-304 — A failed save keeps the panel open with the user's input intact

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Fill the Add Goal panel
2. Block or fail the POST /api/v1/goals request
3. Click Save

**Expected**

An error toast explains the failure, the panel stays open with every field still populated, and no phantom row is added to the listing

#### TC-EMPGOL-313 — Delete is blocked when the department count is zero but other departments still use the goal

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Find a goal showing "None"/0 in Assigned Emp. (Dept.) but a non-zero Assigned Emp. (Org.)
2. Read its Delete control
3. Attempt the delete via the API as well

**Expected**

Delete stays disabled in the UI and the API rejects the request — a department-scoped zero must never be mistaken for an organisation-wide zero

### Performance (4)

#### TC-EMPGOL-233 — PERFORMANCE — the Admin Goals landing takes 26 seconds to reach even its empty state

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Clear the network log and navigate to /employee/goals as an Admin
2. Measure the time until the page stops showing "Loading data..."
3. Count the API calls made during that period

**Expected**

The screen reaches a usable state within a few seconds. Observed today: 26 seconds, during which the client walks /api/v1/employees page by page (13 requests at limit=300) to assemble the full ~3,900-employee roster in the browser. The roster should be filtered and aggregated server-side for the selected department instead.

**Test Data**

- `observed`: 26s to first terminal state; 13 sequential GET /employees?page=N&limit=300 calls on load

**Automation Hint**

Count responses matching /\/employees\?page=/ and assert the count and the wall-clock budget.

#### TC-EMPGOL-234 — PERFORMANCE — selecting a department triggers 14 sequential employee-goals page fetches

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Select a department on the Dashboard tab with the network log open
2. Count the /employee-goals requests and measure the time to first chart

**Expected**

The dashboard is served by an aggregate endpoint scoped to the chosen department. Observed today: the client downloads every employee-goal record in the organisation (14 pages, includeHistory=true) and aggregates client-side, then throws most of it away to show one department.

**Test Data**

- `observed`: GET /api/v1/employee-goals?page=1..14&limit=300&includeHistory=true; ~8.5s to render

**Automation Hint**

Assert the page-N request count stays within a small bound — this is the single biggest lever on this screen.

#### TC-EMPGOL-237 — BUG — Employee Goals renders every employee row at once with no pagination

| Field | Value |
| --- | --- |
| **Tags** | @performance, @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. Open the Employee Goals tab as an Admin
2. Count the rows in the table body
3. Look for a pagination footer or page-size control

**Expected**

The table paginates or virtualises. Observed today: all 3,648 employee rows are in the DOM simultaneously with no pagination footer and no page-size control, which is what makes this tab unusable on a normal machine.

**Test Data**

- `observed`: 3648 <tr> elements in the DOM, no "Showing X of Y" footer, no page controls, no virtualisation

**Automation Hint**

Assert page.locator('tbody tr').count() stays under a sane bound, or that pagination controls exist.

#### TC-EMPGOL-238 — PERFORMANCE — the Employee Goals tab takes 16.6 seconds to paint its first row

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin)

**Steps**

1. From the Dashboard tab, click Employee Goals and start a timer
2. Stop when the first table row is visible

**Expected**

The first rows paint within a few seconds. Observed today: 16.6 seconds for the Admin scope.

**Test Data**

- `observed`: 16.6s from tab click to first visible row (Admin, full org)

**Automation Hint**

Measure with waitFor({state:"visible"}) on the first row and assert the elapsed budget.

### Regression (6)

#### TC-EMPGOL-231 — Switching department refreshes every dashboard widget together

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Select department QA and record the KPIs, both donuts, the RM chart manager list and both ranked lists
2. Switch to another department
3. Record all of them again

**Expected**

All widgets update to the new department in one pass — no card keeps a stale value from the previous department, and the "Showing data for <DEPT>" label matches the picker

**Automation Hint**

Snapshot each widget before and after; the failure mode to catch is a partial refresh where one card lags.

#### TC-EMPGOL-257 — An open expansion does not survive into an unrelated filtered result as stale content

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Expand an employee row
2. Change the Reporting Manager filter so that employee is filtered out
3. Clear the filter again

**Expected**

No orphaned child table is left behind while the parent is filtered out, and no other employee inherits the expansion state

#### TC-EMPGOL-315 — A deleted goal disappears from every other surface

| Field | Value |
| --- | --- |
| **Tags** | @regression, @integration |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Delete a goal
2. Check the Goal Name column filter list
3. Check the dashboard AVG COMPLETION % BY GOAL list and the goal search on the Employee Goals tab

**Expected**

The goal is gone from the listing, the column filter list, the dashboard rankings and the goal search — no surface keeps a stale copy

#### TC-EMPGOL-341 — Goals changes do not disturb the sibling Skills tab

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Create and edit a goal
2. Navigate to Employee > Skills and exercise its listing and filters

**Expected**

Skills is unaffected — the relocation of Goals to its own route must not have disturbed the shared Employee shell, its sidebar links or its breadcrumb

#### TC-EMPGOL-342 — REGRESSION — the old sidebar path and the Employee-page tab strip no longer conflict

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Open /employee and look for a "Goals" tab in the Employee page tab strip
2. Open the sidebar Employee group and click Goals

**Expected**

There is exactly one way into Goals and it lands on /employee/goals. Goals has moved twice now — from a sidebar sub-link, to a tab on /employee, and now back to its own route — so an orphaned second entry point is the likely leftover to catch here.

#### TC-EMPGOL-343 — REGRESSION — /employee/goals is not swallowed by the /employee/:id route

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Navigate directly to /employee/goals
2. Watch for "Employee not found" or "Validation failed (uuid is expected)" toasts

**Expected**

The Goals screen loads. A previous build parsed the literal word "goals" as an employee id and 404'd — this guards the route ordering that fixed it.

### Security (8)

#### TC-EMPGOL-210 — SECURITY — a department-scoped user cannot read another department by editing departmentId in the URL

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. As the TM persona load /employee/goals and record all four KPI values
2. Load /employee/goals?departmentId=95895a10-b036-42cf-80c1-26b71251ebd6 (a department the TM does not manage)
3. Record the four KPI values again

**Expected**

Both loads show identical KPIs — the TM keeps seeing only their own department and the injected departmentId is ignored. Verified passing today (279 / 173 / 559 / 11877h in both cases); keep as a permanent regression guard.

**Test Data**

- `foreignDepartmentId`: 95895a10-b036-42cf-80c1-26b71251ebd6 (MANAGEMENT)

**Automation Hint**

Assert the two KPI tuples are equal AND equal to the TM's own-department baseline.

#### TC-EMPGOL-288 — SECURITY — script payloads in the goal name are never executed

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Create a goal with each payload as its name
2. View it in the Goal Management listing, the Edit panel, the Employee Goals expansion and the dashboard ranked lists

**Expected**

The payload is rendered as literal text everywhere, no dialog fires, no template expression is evaluated, and no console error appears

**Test Data**

- `payloads`: <script>alert(1)</script>, "><img src=x onerror=alert(1)>, {{7*7}}

#### TC-EMPGOL-289 — SECURITY — the rich-text fields sanitise pasted HTML

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Paste each payload into Description, Learning Objectives, Definition of Done and Topics & Concepts
2. Save and re-open the goal

**Expected**

Event handlers, javascript: URLs and iframes are stripped on save; only the editor's own formatting survives. Four rich-text editors on one panel means four separate sanitisation paths to verify.

**Test Data**

- `payloads`: <img src=x onerror=alert(1)>, <a href="javascript:alert(1)">link</a>, <iframe src="https://example.com"></iframe>

#### TC-EMPGOL-318 — SECURITY — a base Employee cannot reach the Goals screen

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the Employee persona (empPage fixture)

**Steps**

1. Navigate to /employee/goals
2. Read the resulting page and the sidebar

**Expected**

Redirected to /unauthorized with the "Access Denied — You don't have permission to view this page." message, and no Goals link in the sidebar. Verified today; keep as a permanent regression guard.

#### TC-EMPGOL-319 — SECURITY — a CSM cannot reach the Goals screen

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the CSM persona (csmPage fixture)

**Steps**

1. Navigate to /employee/goals
2. Read the resulting page and the sidebar

**Expected**

Redirected to /unauthorized; the CSM sidebar offers only My Projects and Requests Tracking. Verified today.

#### TC-EMPGOL-320 — SECURITY — the goals APIs reject roles that are denied the screen

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

A valid access token for the Employee persona and for the CSM persona

**Steps**

1. Call each endpoint directly with an Employee token
2. Repeat with a CSM token

**Expected**

Every call is rejected with 401/403 — the block is enforced server-side, not only by the route guard that produced /unauthorized

**Test Data**

- `endpoints`: GET /api/v1/goals, GET /api/v1/employee-goals, POST /api/v1/goals, PATCH /api/v1/goals/:id, DELETE /api/v1/goals/:id

#### TC-EMPGOL-321 — SECURITY — a department-scoped role cannot write goals outside its scope via the API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

A valid access token for the TM persona

**Steps**

1. As the TM, call PATCH and DELETE on a goal that belongs to another department
2. Call POST /api/v1/goals with a departmentId the TM does not manage

**Expected**

All three are rejected with 403; the department scope proven for reads must hold for writes too

#### TC-EMPGOL-323 — Write controls on Goal Management respect the signed-in role

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Each of the Admin, TM and PM personas

**Steps**

1. Open the Goal Management tab as each role
2. Record whether Add Goal, Edit and Delete are present and enabled

**Expected**

The control states match the documented permission matrix for each role, and any control a role must not have is absent rather than merely disabled

### Smoke (7)

#### TC-EMPGOL-201 — Goals opens from the sidebar Employee > Goals link

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin — department picker available)

**Steps**

1. Open the app
2. Expand the "Employee" group in the sidebar
3. Click "Goals"

**Expected**

The Goals screen loads at /employee/goals, the breadcrumb reads Employee > Goals, the H1 is "Goals" and the tab strip shows Dashboard, Employee Goals and Goal Management

**Automation Hint**

Assert page.url() matches /\/employee\/goals/ and getByRole('tab') returns exactly those three names.

#### TC-EMPGOL-211 — Dashboard is the default tab on a first visit

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open /employee/goals with no tab param
2. Read aria-selected across the tab strip

**Expected**

Exactly one tab is selected and it is Dashboard

#### TC-EMPGOL-217 — Dashboard shows the four KPI cards with the expected labels

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department, no department picker)

**Steps**

1. Open the Dashboard tab and wait for data
2. Read the four KPI cards

**Expected**

Total Employees, Employees with Goals, Total Goal Assignments and Total L&D Hours are all present, each with a numeric value; L&D Hours is suffixed with "h"

#### TC-EMPGOL-236 — Employee Goals tab lists employees with their goal roll-up columns

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Open Goals and switch to the Employee Goals tab
2. Wait for the table
3. Read the column headers

**Expected**

The table has an expander column plus Employee, Reporting Manager, Goals, Overdue Goals, Certificates and L&D Hours, and at least one data row renders

#### TC-EMPGOL-248 — Expanding a row reveals the per-goal detail table

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as the TM persona (tmPage fixture — scoped to own department)

**Steps**

1. Search for an employee with a non-zero Goals count
2. Click the expander in the first cell

**Expected**

A nested table appears with columns Goal, Status, Progress History, Completion %, Start Date, End Date and Comment, and one row per assigned goal

#### TC-EMPGOL-262 — Goal Management lists the goal catalogue with its six columns

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Switch to the Goal Management tab
2. Read the column headers

**Expected**

Columns are Action, Goal Name, Type, Description, Assigned Emp. (Dept.) and Assigned Emp. (Org.), with an "Add Goal" button and a department combobox above the table

#### TC-EMPGOL-278 — Add Goal opens the side panel with every goal field

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live observation 2026-09-22 — Goals relocated to /employee/goals and rebuilt as a 3-tab sub-app (Dashboard / Employee Goals / Goal Management) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture, Admin) on the Goal Management tab

**Steps**

1. Click "Add Goal"
2. Read the panel

**Expected**

A side panel titled "Add Goal" / "Add a new employee goal" shows Goal Name*, Goal Type*, Description, Learning Objectives, Definition of Done, Topics & Concepts and Estimated Duration (Months / Weeks / Days), with Cancel and Save
