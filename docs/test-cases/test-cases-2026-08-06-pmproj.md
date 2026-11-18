# PM Projects — Test Cases

**Total test cases:** 95  
**Modules covered:** PM Projects  
**Source:** `reports/test-cases/cases-2026-08-06-PMPROJ.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 36 | 37.9% |
| boundary | 21 | 22.1% |
| negative | 13 | 13.7% |
| security | 12 | 12.6% |
| regression | 6 | 6.3% |
| integration | 4 | 4.2% |
| smoke | 3 | 3.2% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 47 | 49.5% |
| high | 35 | 36.8% |
| critical | 10 | 10.5% |
| low | 3 | 3.2% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 49 | 51.6% |
| minor | 32 | 33.7% |
| critical | 14 | 14.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 75 | 78.9% |
| regression-derived | 20 | 21.1% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 83 | 87.4% |
| speculative | 5 | 5.3% |
| unverified-fallback | 5 | 5.3% |
| inferred | 2 | 2.1% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 87 | 91.6% |
| No | 8 | 8.4% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 42 | 44.2% |
| @regression | 23 | 24.2% |
| @boundary | 22 | 23.2% |
| @negative | 13 | 13.7% |
| @needs-verification | 12 | 12.6% |
| @security | 12 | 12.6% |
| @smoke | 3 | 3.2% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-PMPROJ-001](#tc-pmproj-001-pm-projects-page-loads-scoped-to-the-pm-s-managed-projects-split-into-active-and-completed-archived-sections) | PM Projects page loads scoped to the PM's managed projects, split into Active and Completed/Archived sections | PM Projects | smoke | critical |
| [TC-PMPROJ-002](#tc-pmproj-002-opening-a-managed-project-shows-the-developer-list-with-correct-per-developer-allocation-hours-logged-leave-and-notice-period-data) | Opening a managed project shows the developer list with correct per-developer allocation, hours-logged, leave, and notice-period data | PM Projects | smoke | critical |
| [TC-PMPROJ-003](#tc-pmproj-003-update-allocation-opens-the-correct-entry-point-for-both-fixed-and-dynamic-allocation-developers-including-the-dynamic-allocation-expectation-note) | Update Allocation opens the correct entry point for both Fixed and Dynamic allocation developers, including the dynamic allocation expectation note | PM Projects | smoke | critical |
| [TC-PMPROJ-004](#tc-pmproj-004-active-section-of-the-project-list-shows-only-the-pm-s-currently-active-managed-projects) | Active section of the project list shows only the PM's currently active managed projects | PM Projects | functional | high |
| [TC-PMPROJ-005](#tc-pmproj-005-completed-archived-section-of-the-project-list-shows-only-the-pm-s-completed-or-archived-managed-projects) | Completed/Archived section of the project list shows only the PM's completed or archived managed projects | PM Projects | functional | high |
| [TC-PMPROJ-006](#tc-pmproj-006-search-project-list-by-project-name-returns-matching-projects-and-excludes-non-matching-ones) | Search project list by project name returns matching projects and excludes non-matching ones | PM Projects | functional | high |
| [TC-PMPROJ-007](#tc-pmproj-007-project-list-defaults-to-sort-by-project-name-ascending-a-z) | Project list defaults to sort by project name ascending (A–Z) | PM Projects | functional | medium |
| [TC-PMPROJ-008](#tc-pmproj-008-sorting-the-project-list-by-last-updated-date-orders-correctly-and-re-clicking-toggles-direction) | Sorting the project list by last updated date orders correctly and re-clicking toggles direction | PM Projects | functional | medium |
| [TC-PMPROJ-009](#tc-pmproj-009-selecting-each-pagination-page-size-100-200-300-displays-the-corresponding-number-of-rows) | Selecting each pagination page size (100/200/300) displays the corresponding number of rows | PM Projects | functional | medium |
| [TC-PMPROJ-010](#tc-pmproj-010-summary-bar-total-active-projects-count-matches-rendered-row-count-and-api-total) | Summary bar total active-projects count matches rendered row count and API total | PM Projects | functional | high |
| [TC-PMPROJ-011](#tc-pmproj-011-clicking-a-project-row-opens-its-developer-list-detail-view) | Clicking a project row opens its developer list detail view | PM Projects | functional | high |
| [TC-PMPROJ-012](#tc-pmproj-012-developer-row-displays-name-job-title-and-department-correctly) | Developer row displays name, job title, and department correctly | PM Projects | functional | high |
| [TC-PMPROJ-013](#tc-pmproj-013-developer-row-displays-allocation-type-allocation-start-date-and-end-date-correctly) | Developer row displays allocation type, allocation %, start date, and end date correctly | PM Projects | functional | high |
| [TC-PMPROJ-014](#tc-pmproj-014-developer-row-displays-hours-logged-on-this-project-sourced-from-zoho-analytics) | Developer row displays hours logged on this project sourced from Zoho Analytics | PM Projects | functional | high |
| [TC-PMPROJ-015](#tc-pmproj-015-developer-row-displays-leave-details-upcoming-current-and-past-correctly) | Developer row displays leave details (upcoming, current, and past) correctly | PM Projects | functional | high |
| [TC-PMPROJ-016](#tc-pmproj-016-developer-row-displays-notice-period-status-when-the-developer-is-serving-notice) | Developer row displays notice period status when the developer is serving notice | PM Projects | functional | high |
| [TC-PMPROJ-017](#tc-pmproj-017-search-developer-list-by-developer-name-returns-matching-developers-and-excludes-non-matching-ones) | Search developer list by developer name returns matching developers and excludes non-matching ones | PM Projects | functional | medium |
| [TC-PMPROJ-018](#tc-pmproj-018-developer-list-defaults-to-sort-by-developer-name-ascending-a-z) | Developer list defaults to sort by developer name ascending (A–Z) | PM Projects | functional | medium |
| [TC-PMPROJ-019](#tc-pmproj-019-sorting-the-developer-list-by-allocation-orders-developers-correctly) | Sorting the developer list by allocation % orders developers correctly | PM Projects | functional | medium |
| [TC-PMPROJ-020](#tc-pmproj-020-sorting-the-developer-list-by-start-date-orders-developers-correctly) | Sorting the developer list by start date orders developers correctly | PM Projects | functional | medium |
| [TC-PMPROJ-021](#tc-pmproj-021-filtering-the-developer-list-by-leave-status-narrows-the-list-to-matching-developers) | Filtering the developer list by leave status narrows the list to matching developers | PM Projects | functional | high |
| [TC-PMPROJ-022](#tc-pmproj-022-filtering-the-developer-list-by-notice-period-narrows-the-list-to-matching-developers) | Filtering the developer list by notice period narrows the list to matching developers | PM Projects | functional | high |
| [TC-PMPROJ-023](#tc-pmproj-023-combining-leave-status-and-notice-period-filters-applies-and-semantics-narrowing-to-developers-matching-both) | Combining leave-status and notice-period filters applies AND semantics, narrowing to developers matching both | PM Projects | functional | high |
| [TC-PMPROJ-024](#tc-pmproj-024-developer-list-renders-without-any-pagination-controls-regardless-of-developer-count) | Developer list renders without any pagination controls regardless of developer count | PM Projects | functional | medium |
| [TC-PMPROJ-025](#tc-pmproj-025-update-allocation-on-a-fixed-allocation-developer-opens-the-correct-ua-ticket-entry-panel) | Update Allocation on a Fixed-allocation developer opens the correct UA ticket entry panel | PM Projects | functional | high |
| [TC-PMPROJ-026](#tc-pmproj-026-update-allocation-on-a-dynamic-allocation-developer-renders-the-allocation-percentage-field-disabled) | Update Allocation on a Dynamic-allocation developer renders the allocation-percentage field disabled | PM Projects | functional | high |
| [TC-PMPROJ-027](#tc-pmproj-027-update-allocation-on-a-dynamic-allocation-developer-raises-a-ua-ticket-that-internally-sets-allocation-to-0-and-end-date-to-current-date) | Update Allocation on a Dynamic-allocation developer raises a UA ticket that internally sets allocation to 0% and end date to current date | PM Projects | functional | high |
| [TC-PMPROJ-028](#tc-pmproj-028-dynamic-allocation-expectation-note-is-visible-wherever-a-dynamic-allocation-is-displayed-or-requested) | Dynamic allocation expectation note is visible wherever a dynamic allocation is displayed or requested | PM Projects | functional | medium |
| [TC-PMPROJ-029](#tc-pmproj-029-pm-s-project-visibility-scope-applies-only-to-the-pm-projects-and-requests-pages-the-org-role-governs-all-other-pages) | PM's project-visibility scope applies only to the PM Projects and Requests pages; the org role governs all other pages | PM Projects | functional | medium |
| [TC-PMPROJ-030](#tc-pmproj-030-pagination-across-the-100-200-300-page-size-options-does-not-duplicate-or-drop-projects) | Pagination across the 100/200/300 page-size options does not duplicate or drop projects | PM Projects | functional | high |
| [TC-PMPROJ-031](#tc-pmproj-031-sorting-the-project-list-and-developer-list-by-each-sortable-column-produces-a-stable-order-including-toggling-direction-on-re-click) | Sorting the project list and developer list by each sortable column produces a stable order, including toggling direction on re-click | PM Projects | functional | medium |
| [TC-PMPROJ-032](#tc-pmproj-032-developer-list-filters-update-the-displayed-developers-correctly-clearing-filters-restores-the-full-list-a-zero-match-combination-shows-an-explicit-empty-state) | Developer-list filters update the displayed developers correctly; clearing filters restores the full list; a zero-match combination shows an explicit empty state | PM Projects | functional | medium |
| [TC-PMPROJ-033](#tc-pmproj-033-once-a-dynamic-update-allocation-ticket-is-approved-and-the-projectassignment-is-archived-the-developer-no-longer-appears-in-that-project-s-developer-list) | Once a Dynamic Update Allocation ticket is approved and the ProjectAssignment is archived, the developer no longer appears in that project's developer list | PM Projects | functional | high |
| [TC-PMPROJ-034](#tc-pmproj-034-admin-ceo-simformsolutions-com-can-view-the-pm-projects-page-consistent-with-existing-full-system-access-precedent) | Admin (ceo@simformsolutions.com) can view the PM Projects page, consistent with existing full-system-access precedent | PM Projects | functional | medium |
| [TC-PMPROJ-035](#tc-pmproj-035-manual-dedicated-pm-pmo-dual-role-test-accounts-must-be-provisioned-before-role-scoped-pm-projects-flows-can-be-fully-automated) | [MANUAL] Dedicated PM/PMO/dual-role test accounts must be provisioned before role-scoped PM Projects flows can be fully automated | PM Projects | functional | high |
| [TC-PMPROJ-036](#tc-pmproj-036-manual-old-pm-post-reassignment-data-display-is-explicitly-deferred-and-out-of-scope-for-this-qa-pass) | [MANUAL] Old-PM post-reassignment data display is explicitly deferred and out of scope for this QA pass | PM Projects | functional | low |
| [TC-PMPROJ-037](#tc-pmproj-037-manual-confirm-whether-pmo-s-add-allocation-direct-allocation-entry-point-appears-on-the-pm-projects-page) | [MANUAL] Confirm whether PMO's 'Add Allocation' (Direct Allocation) entry point appears on the PM Projects page | PM Projects | functional | low |
| [TC-PMPROJ-038](#tc-pmproj-038-manual-confirm-pm-projects-api-endpoint-paths-methods-before-automating-api-level-assertions) | [MANUAL] Confirm PM Projects API endpoint paths/methods before automating API-level assertions | PM Projects | functional | medium |
| [TC-PMPROJ-039](#tc-pmproj-039-manual-confirm-whether-the-pr-reviewer-other-allocation-marker-column-appears-on-the-pm-projects-developer-list) | [MANUAL] Confirm whether the PR Reviewer 'Other Allocation' marker column appears on the PM Projects developer list | PM Projects | functional | low |
| [TC-PMPROJ-040](#tc-pmproj-040-org-only-role-without-a-paired-pm-role-cannot-navigate-directly-to-the-pm-projects-page-url-route) | Org-only role without a paired PM role cannot navigate directly to the PM Projects page URL/route | PM Projects | negative | high |
| [TC-PMPROJ-041](#tc-pmproj-041-pm-attempting-to-open-a-project-s-detail-view-for-a-project-they-do-not-currently-manage-is-denied) | PM attempting to open a project's detail view for a project they do not currently manage is denied | PM Projects | negative | high |
| [TC-PMPROJ-042](#tc-pmproj-042-pm-cannot-directly-modify-a-developer-s-allocation-percentage-inline-on-the-pm-projects-page) | PM cannot directly modify a developer's allocation percentage inline on the PM Projects page | PM Projects | negative | high |
| [TC-PMPROJ-043](#tc-pmproj-043-an-invalid-unsupported-pagination-page-size-value-is-rejected-or-falls-back-to-a-valid-option) | An invalid/unsupported pagination page-size value is rejected or falls back to a valid option | PM Projects | negative | medium |
| [TC-PMPROJ-044](#tc-pmproj-044-special-characters-and-reserved-values-entered-into-project-developer-name-search-fields-are-handled-safely) | Special characters and reserved values entered into project/developer name search fields are handled safely | PM Projects | negative | medium |
| [TC-PMPROJ-045](#tc-pmproj-045-rapid-multiple-clicks-on-update-allocation-open-exactly-one-panel-ticket-not-multiple) | Rapid multiple clicks on Update Allocation open exactly one panel/ticket, not multiple | PM Projects | negative | medium |
| [TC-PMPROJ-046](#tc-pmproj-046-session-expiry-http-401-while-browsing-pm-projects-returns-the-user-to-login-without-data-loss) | Session expiry (HTTP 401) while browsing PM Projects returns the user to login without data loss | PM Projects | negative | medium |
| [TC-PMPROJ-047](#tc-pmproj-047-a-permission-denied-403-response-on-pm-projects-shows-a-user-friendly-message-not-a-raw-error) | A permission-denied (403) response on PM Projects shows a user-friendly message, not a raw error | PM Projects | negative | medium |
| [TC-PMPROJ-048](#tc-pmproj-048-navigating-to-a-non-existent-or-removed-project-shows-a-not-found-page-not-a-blank-screen) | Navigating to a non-existent or removed project shows a not-found page, not a blank screen | PM Projects | negative | medium |
| [TC-PMPROJ-049](#tc-pmproj-049-a-server-error-http-500-on-pm-projects-shows-a-user-friendly-error-not-a-raw-stack-trace) | A server error (HTTP 500) on PM Projects shows a user-friendly error, not a raw stack trace | PM Projects | negative | medium |
| [TC-PMPROJ-050](#tc-pmproj-050-a-service-unavailable-http-503-response-on-pm-projects-shows-a-maintenance-or-retry-message) | A service-unavailable (HTTP 503) response on PM Projects shows a maintenance or retry message | PM Projects | negative | medium |
| [TC-PMPROJ-051](#tc-pmproj-051-a-slow-timed-out-api-response-shows-a-loading-indicator-and-does-not-freeze-the-ui) | A slow/timed-out API response shows a loading indicator and does not freeze the UI | PM Projects | negative | medium |
| [TC-PMPROJ-052](#tc-pmproj-052-refreshing-the-browser-while-the-update-allocation-panel-is-open-does-not-submit-partial-ticket-data-or-corrupt-existing-records) | Refreshing the browser while the Update Allocation panel is open does not submit partial ticket data or corrupt existing records | PM Projects | negative | medium |
| [TC-PMPROJ-053](#tc-pmproj-053-pm-with-zero-currently-managed-projects-sees-an-empty-state-and-a-0-active-projects-summary-count) | PM with zero currently-managed projects sees an empty state and a 0 active-projects summary count | PM Projects | boundary | medium |
| [TC-PMPROJ-054](#tc-pmproj-054-a-project-reassigned-to-a-new-pm-via-the-nightly-zoho-sync-is-visible-to-the-new-pm-and-no-longer-visible-to-the-previous-pm) | A project reassigned to a new PM via the nightly Zoho sync is visible to the new PM and no longer visible to the previous PM | PM Projects | boundary | medium |
| [TC-PMPROJ-055](#tc-pmproj-055-a-project-with-a-null-projectmanagerid-unmatched-zoho-email-does-not-appear-on-any-pm-s-project-list) | A project with a null projectManagerId (unmatched Zoho email) does not appear on any PM's project list | PM Projects | boundary | medium |
| [TC-PMPROJ-056](#tc-pmproj-056-developer-list-for-a-project-with-zero-currently-allocated-developers-shows-an-empty-state-and-no-pagination-controls) | Developer list for a project with zero currently-allocated developers shows an empty state and no pagination controls | PM Projects | boundary | medium |
| [TC-PMPROJ-057](#tc-pmproj-057-a-developer-serving-notice-and-on-active-upcoming-leave-shows-both-indicators-together-without-either-overwriting-the-other) | A developer serving notice AND on active/upcoming leave shows both indicators together without either overwriting the other | PM Projects | boundary | medium |
| [TC-PMPROJ-058](#tc-pmproj-058-dynamic-allocation-developer-row-renders-the-allocation-percentage-field-disabled-not-hidden-with-the-expectation-note-visible) | Dynamic-allocation developer row renders the allocation-percentage field disabled (not hidden) with the expectation note visible | PM Projects | boundary | medium |
| [TC-PMPROJ-059](#tc-pmproj-059-pagination-behaves-correctly-at-exact-page-size-thresholds-100-200-300-and-one-project-beyond-each) | Pagination behaves correctly at exact page-size thresholds (100, 200, 300) and one project beyond each | PM Projects | boundary | medium |
| [TC-PMPROJ-060](#tc-pmproj-060-sorting-the-project-list-by-last-updated-date-with-two-or-more-projects-sharing-an-identical-timestamp-produces-a-stable-secondary-order) | Sorting the project list by last updated date with two or more projects sharing an identical timestamp produces a stable secondary order | PM Projects | boundary | medium |
| [TC-PMPROJ-061](#tc-pmproj-061-searching-project-developer-names-with-special-characters-apostrophes-accents-or-unicode-matches-correctly-without-crashing) | Searching project/developer names with special characters, apostrophes, accents, or Unicode matches correctly without crashing | PM Projects | boundary | medium |
| [TC-PMPROJ-062](#tc-pmproj-062-hours-logged-on-this-project-clearly-reflects-its-zoho-sourced-non-real-time-nature-when-stale-relative-to-a-very-recent-time-entry) | 'Hours logged on this project' clearly reflects its Zoho-sourced, non-real-time nature when stale relative to a very recent time entry | PM Projects | boundary | medium |
| [TC-PMPROJ-063](#tc-pmproj-063-combining-leave-status-and-notice-period-filters-on-an-edge-dataset-applies-and-semantics-excluding-partial-matches) | Combining leave-status and notice-period filters on an edge dataset applies AND semantics, excluding partial matches | PM Projects | boundary | medium |
| [TC-PMPROJ-064](#tc-pmproj-064-a-project-transitioning-from-active-to-completed-archived-mid-session-moves-sections-without-a-manual-refresh-discrepancy) | A project transitioning from Active to Completed/Archived mid-session moves sections without a manual-refresh discrepancy | PM Projects | boundary | medium |
| [TC-PMPROJ-065](#tc-pmproj-065-a-dual-role-pm-rm-tm-em-user-opening-pm-projects-sees-pm-scoped-data-only-unaffected-by-their-org-role) | A dual-role (PM + RM/TM/EM) user opening PM Projects sees PM-scoped data only, unaffected by their org role | PM Projects | boundary | medium |
| [TC-PMPROJ-066](#tc-pmproj-066-navigating-the-project-list-across-all-available-page-sizes-does-not-duplicate-or-drop-any-project) | Navigating the project list across all available page sizes does not duplicate or drop any project | PM Projects | boundary | medium |
| [TC-PMPROJ-067](#tc-pmproj-067-sorting-the-project-list-and-developer-list-by-each-sortable-column-with-duplicate-values-in-the-sorted-column-produces-stable-ordering) | Sorting the project list and developer list by each sortable column with duplicate values in the sorted column produces stable ordering | PM Projects | boundary | medium |
| [TC-PMPROJ-068](#tc-pmproj-068-applying-developer-list-filters-individually-and-combined-including-a-zero-match-combination-shows-the-correct-results-or-an-explicit-empty-state) | Applying developer-list filters individually and combined, including a zero-match combination, shows the correct results or an explicit empty state | PM Projects | boundary | medium |
| [TC-PMPROJ-069](#tc-pmproj-069-after-a-dynamic-update-allocation-ticket-is-approved-and-the-projectassignment-is-archived-the-developer-disappears-from-the-developer-list-without-a-manual-refresh) | After a Dynamic Update Allocation ticket is approved and the ProjectAssignment is archived, the developer disappears from the developer list without a manual refresh | PM Projects | boundary | medium |
| [TC-PMPROJ-070](#tc-pmproj-070-a-session-without-pm-or-pmo-role-is-denied-access-to-the-pm-projects-page-route-at-both-ui-and-api-levels) | A session without PM or PMO role is denied access to the PM Projects page/route at both UI and API levels | PM Projects | boundary | medium |
| [TC-PMPROJ-071](#tc-pmproj-071-the-pagination-page-size-control-never-offers-or-accepts-a-value-outside-100-200-300-even-via-manipulated-state) | The pagination page-size control never offers or accepts a value outside 100/200/300, even via manipulated state | PM Projects | boundary | medium |
| [TC-PMPROJ-072](#tc-pmproj-072-developer-list-filter-values-are-constrained-to-the-system-defined-leave-status-and-notice-period-option-sets) | Developer-list filter values are constrained to the system-defined leave-status and notice-period option sets | PM Projects | boundary | medium |
| [TC-PMPROJ-073](#tc-pmproj-073-a-project-with-a-status-value-not-covered-by-the-unconfirmed-active-project-statuses-constant-is-classified-without-crashing) | A project with a status value not covered by the (unconfirmed) ACTIVE_PROJECT_STATUSES constant is classified without crashing | PM Projects | boundary | medium |
| [TC-PMPROJ-074](#tc-pmproj-074-pm-cannot-view-or-open-a-project-they-do-not-currently-manage-enforced-at-both-ui-and-api) | PM cannot view or open a project they do not currently manage — enforced at both UI and API | PM Projects | security | critical |
| [TC-PMPROJ-075](#tc-pmproj-075-pm-cannot-directly-modify-edit-a-developer-s-allocation-inline-no-inline-edit-control-exists-and-the-api-rejects-a-direct-allocation-write) | PM cannot directly modify/edit a developer's allocation inline — no inline-edit control exists, and the API rejects a direct allocation write | PM Projects | security | critical |
| [TC-PMPROJ-076](#tc-pmproj-076-pm-cannot-access-any-page-besides-pm-projects-and-requests-under-pm-scope-access-to-other-modules-is-governed-solely-by-org-role) | PM cannot access any page besides PM Projects and Requests under PM scope — access to other modules is governed solely by org role | PM Projects | security | critical |
| [TC-PMPROJ-077](#tc-pmproj-077-pm-cannot-see-the-shortlist-or-ticket-approval-details-alctkt-scope-from-the-pm-projects-page) | PM cannot see the shortlist or ticket-approval details (ALCTKT scope) from the PM Projects page | PM Projects | security | critical |
| [TC-PMPROJ-078](#tc-pmproj-078-pmo-role-cannot-be-combined-with-rm-tm-or-em-roles-on-a-single-user-profile) | PMO role cannot be combined with RM, TM, or EM roles on a single user profile | PM Projects | security | high |
| [TC-PMPROJ-079](#tc-pmproj-079-an-org-only-role-no-pm-role-is-denied-all-access-to-the-pm-projects-page-and-its-developer-lists) | An org-only role (no PM role) is denied all access to the PM Projects page and its developer lists | PM Projects | security | critical |
| [TC-PMPROJ-080](#tc-pmproj-080-a-dual-role-pm-rm-tm-em-user-s-org-role-must-not-affect-pm-projects-page-visibility) | A dual-role (PM + RM/TM/EM) user's org role must not affect PM Projects page visibility | PM Projects | security | high |
| [TC-PMPROJ-081](#tc-pmproj-081-pm-cannot-access-another-pm-s-project-details-via-direct-url-api-manipulation-idor) | PM cannot access another PM's project details via direct URL/API manipulation (IDOR) | PM Projects | security | critical |
| [TC-PMPROJ-082](#tc-pmproj-082-a-non-pm-pmo-role-attempts-to-load-the-pm-projects-page-or-its-underlying-api-directly-denied-per-the-pm-projects-casl-permission-module) | A non-PM/PMO role attempts to load the PM Projects page or its underlying API directly — denied per the PM_PROJECTS CASL permission module | PM Projects | security | critical |
| [TC-PMPROJ-083](#tc-pmproj-083-script-html-payloads-submitted-via-project-or-developer-name-search-sort-inputs-are-sanitized-on-render) | Script/HTML payloads submitted via project or developer name search/sort inputs are sanitized on render | PM Projects | security | high |
| [TC-PMPROJ-084](#tc-pmproj-084-a-dual-role-session-is-checked-for-org-role-scoped-data-e-g-broader-department-employee-data-leaking-into-the-pm-projects-page) | A dual-role session is checked for org-role-scoped data (e.g. broader department employee data) leaking into the PM Projects page | PM Projects | security | high |
| [TC-PMPROJ-085](#tc-pmproj-085-each-role-s-pm-projects-access-is-enforced-consistently-at-both-ui-and-api-levels-across-pm-pmo-and-org-only-roles) | Each role's PM Projects access is enforced consistently at both UI and API levels across PM, PMO, and org-only roles | PM Projects | security | high |
| [TC-PMPROJ-086](#tc-pmproj-086-update-allocation-actions-correctly-hand-off-to-the-alctkt-ticket-lifecycle-and-ticket-side-changes-are-reflected-back-on-the-pm-projects-developer-list) | Update Allocation actions correctly hand off to the ALCTKT ticket lifecycle, and ticket-side changes are reflected back on the PM Projects developer list | PM Projects | regression | high |
| [TC-PMPROJ-087](#tc-pmproj-087-per-developer-fields-shown-on-pm-projects-name-title-department-leave-notice-period-match-the-same-employee-record-shown-on-employee-details) | Per-developer fields shown on PM Projects (name, title, department, leave, notice period) match the same Employee record shown on Employee Details | PM Projects | regression | high |
| [TC-PMPROJ-088](#tc-pmproj-088-project-list-data-status-projectmanagerid-derived-scoping-on-pm-projects-is-consistent-with-the-projects-module-s-project-details-data-model) | Project list data (status, projectManagerId-derived scoping) on PM Projects is consistent with the Projects module's Project Details data model | PM Projects | regression | high |
| [TC-PMPROJ-089](#tc-pmproj-089-a-change-to-the-pm-projects-casl-permission-in-roles-permissions-immediately-affects-pm-projects-page-access) | A change to the PM_PROJECTS CASL permission in Roles & Permissions immediately affects PM Projects page access | PM Projects | regression | high |
| [TC-PMPROJ-090](#tc-pmproj-090-update-allocation-button-visibility-and-fixed-dynamic-enabled-disabled-state-remain-correct-after-list-refresh-sort-or-filter-operations) | Update Allocation button visibility and Fixed/Dynamic enabled-disabled state remain correct after list refresh, sort, or filter operations | PM Projects | regression | medium |
| [TC-PMPROJ-091](#tc-pmproj-091-a-loading-indicator-is-shown-while-the-project-list-and-developer-list-data-fetch-and-disappears-once-loaded) | A loading indicator is shown while the project list and developer list data fetch, and disappears once loaded | PM Projects | regression | medium |
| [TC-PMPROJ-092](#tc-pmproj-092-integration-update-allocation-entry-points-correctly-hand-off-into-the-alctkt-ticket-lifecycle-and-reflect-ticket-side-changes-back-on-pm-projects) | Integration — Update Allocation entry points correctly hand off into the ALCTKT ticket lifecycle and reflect ticket-side changes back on PM Projects | PM Projects | integration | high |
| [TC-PMPROJ-093](#tc-pmproj-093-integration-per-developer-fields-on-pm-projects-are-sourced-consistently-from-employee-records-shared-with-employee-details) | Integration — per-developer fields on PM Projects are sourced consistently from Employee records shared with Employee Details | PM Projects | integration | high |
| [TC-PMPROJ-094](#tc-pmproj-094-integration-project-status-and-project-projectmanagerid-are-consistent-between-pm-projects-and-the-projects-module-s-project-details-data-model) | Integration — Project.status and Project.projectManagerId are consistent between PM Projects and the Projects module's Project Details data model | PM Projects | integration | high |
| [TC-PMPROJ-095](#tc-pmproj-095-integration-the-pm-projects-casl-permission-module-roles-permissions-correctly-gates-pm-projects-page-and-api-access-end-to-end) | Integration — the PM_PROJECTS CASL permission module (Roles & Permissions) correctly gates PM Projects page and API access end-to-end | PM Projects | integration | high |

---

## PM Projects

95 test cases.

### Boundary (21)

#### TC-PMPROJ-053 — PM with zero currently-managed projects sees an empty state and a 0 active-projects summary count

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Log in as a PM with no managed projects
2. Navigate to PM Projects

**Expected**

Project list shows a non-blank empty-state message; summary bar shows 0 active projects

**Automation Hint**

PARTIAL — requires a PM-role test account with zero currently-managed projects.

#### TC-PMPROJ-054 — A project reassigned to a new PM via the nightly Zoho sync is visible to the new PM and no longer visible to the previous PM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Reassign a project's projectManagerId in the source system
2. After the next sync cycle, check the previous PM's project list
3. Check the new PM's project list, including existing tickets for the project

**Expected**

Previous PM no longer sees the project (allowing for documented sync lag); new PM sees the project, including all its existing tickets

**Automation Hint**

PARTIAL — requires coordinating a Zoho PROJECT_METADATA sync change across two PM sessions; up to 24h sync lag is acceptable per source, making deterministic automation difficult.

#### TC-PMPROJ-055 — A project with a null projectManagerId (unmatched Zoho email) does not appear on any PM's project list

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed/identify a project with Project.projectManagerId = null
2. Check it does not appear under any PM account's project list

**Expected**

The project does not incorrectly appear on any PM's project list

**Automation Hint**

PARTIAL — requires seeding a project whose Zoho projectManagerEmail does not match any Employee.email.

#### TC-PMPROJ-056 — Developer list for a project with zero currently-allocated developers shows an empty state and no pagination controls

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a project with no currently-allocated developers

**Expected**

Developer list shows a non-blank empty-state message; no pagination controls are rendered

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-057 — A developer serving notice AND on active/upcoming leave shows both indicators together without either overwriting the other

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[4] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Identify a developer who is both serving notice and has an active/upcoming leave record
2. View their developer-list row

**Expected**

Both the notice-period indicator and the leave-details indicator are visible simultaneously on the same row

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a developer serving notice with a leave record.

#### TC-PMPROJ-058 — Dynamic-allocation developer row renders the allocation-percentage field disabled (not hidden) with the expectation note visible

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[5] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. View a Dynamic-allocation developer's row and Update Allocation panel

**Expected**

The percentage field is present in the DOM but disabled/read-only, not simply hidden; the dynamic allocation expectation note is visible

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-059 — Pagination behaves correctly at exact page-size thresholds (100, 200, 300) and one project beyond each

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[6] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed exactly 100 projects and verify one full page at page-size 100 with no second page
2. Seed 101 projects and verify a second page with exactly 1 project
3. Repeat for the 200/201 and 300/301 thresholds

**Expected**

Page-count and page-size behaviour are correct at each exact threshold and at threshold+1, with no duplicate/missing project

**Test Data**

- `thresholds`: 100, 101, 200, 201, 300, 301

**Automation Hint**

PARTIAL — requires seeding at least 301 projects to exercise all thresholds.

#### TC-PMPROJ-060 — Sorting the project list by last updated date with two or more projects sharing an identical timestamp produces a stable secondary order

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[7] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed 2+ projects with identical 'last updated' timestamps
2. Sort by last updated
3. Re-sort and compare the resulting order

**Expected**

Projects with identical last-updated timestamps maintain a stable, repeatable relative order across repeated sorts

**Automation Hint**

PARTIAL — requires seeding 2+ projects with identical 'last updated' timestamps.

#### TC-PMPROJ-061 — Searching project/developer names with special characters, apostrophes, accents, or Unicode matches correctly without crashing

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[8] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed a project/developer name containing an apostrophe, an accented character, and a Unicode character
2. Search using each variant

**Expected**

Each search correctly matches the corresponding record; no crash or rendering error occurs

**Test Data**

- `names`: O'Brien Project, Café Migration, 项目名称

**Automation Hint**

PARTIAL — requires seeding project/developer names with these exact characters.

#### TC-PMPROJ-062 — 'Hours logged on this project' clearly reflects its Zoho-sourced, non-real-time nature when stale relative to a very recent time entry

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[9] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Log a very recent time entry for a developer in the source system
2. Before the next Zoho sync, view the developer's hours-logged value on PM Projects

**Expected**

The UI does not imply real-time accuracy for hours logged (e.g. a 'data as of last sync' indicator or equivalent Zoho-sourced framing is present) rather than silently showing a stale number as current

**Automation Hint**

PARTIAL — depends on the external nightly Zoho Analytics sync timing; hard to deterministically seed a 'very recent, not yet synced' time entry in test.

#### TC-PMPROJ-063 — Combining leave-status and notice-period filters on an edge dataset applies AND semantics, excluding partial matches

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[10] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed one developer matching leave-status only, one matching notice-period only, and one matching both
2. Apply both filters together

**Expected**

Only the developer matching both criteria remains visible; the leave-only and notice-only developers are excluded

**Automation Hint**

PARTIAL — requires seeding developers matching leave-only, notice-only, and both criteria.

#### TC-PMPROJ-064 — A project transitioning from Active to Completed/Archived mid-session moves sections without a manual-refresh discrepancy

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[11] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Change a project's status to Completed/Archived in the source system while its PM's session remains open on PM Projects
2. Return to the page without a manual browser refresh

**Expected**

The project moves from the Active section to the Completed/Archived section correctly, without requiring a manual page reload to resolve a stale display

**Automation Hint**

PARTIAL — requires changing a project's status in the source system while a PM session remains open.

#### TC-PMPROJ-065 — A dual-role (PM + RM/TM/EM) user opening PM Projects sees PM-scoped data only, unaffected by their org role

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[12] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated dual-role test account

**Steps**

1. Log in as a dual-role PM+org user
2. Navigate to PM Projects

**Expected**

Only the user's own managed projects are shown (PM scope); no broader org-role data (e.g. multi-department breadth) leaks into this page

**Automation Hint**

PARTIAL — requires a dedicated dual-role test account, not yet confirmed available; see unclear[].

#### TC-PMPROJ-066 — Navigating the project list across all available page sizes does not duplicate or drop any project

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[13] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed a dataset exceeding 300 projects
2. Traverse every page at page-size 100 recording project IDs
3. Repeat at page-size 200 and 300
4. Compare the three ID sets

**Expected**

The complete, deduplicated set of project IDs is identical across all three page-size traversals

**Automation Hint**

PARTIAL — requires seeding a dataset exceeding 300 projects.

#### TC-PMPROJ-067 — Sorting the project list and developer list by each sortable column with duplicate values in the sorted column produces stable ordering

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[14] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed duplicate values in project name/last-updated and in developer name/allocation %/start date
2. Sort by each column

**Expected**

Each sort produces a stable, repeatable order even when multiple records share the same value in the sorted column

**Automation Hint**

PARTIAL — requires seeding duplicate values in each sortable column.

#### TC-PMPROJ-068 — Applying developer-list filters individually and combined, including a zero-match combination, shows the correct results or an explicit empty state

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[15] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Apply the leave-status filter alone
2. Apply the notice-period filter alone
3. Apply a combination known to match zero developers

**Expected**

Individual filters narrow correctly; the zero-match combination shows an explicit empty-state message rather than a blank or stale list

**Automation Hint**

PARTIAL — requires seeding a filter combination matching zero developers.

#### TC-PMPROJ-069 — After a Dynamic Update Allocation ticket is approved and the ProjectAssignment is archived, the developer disappears from the developer list without a manual refresh

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[16] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Approve a Dynamic Update Allocation ticket for a developer on a managed project
2. Immediately re-check the developer list without triggering a manual refresh

**Expected**

The developer is absent from the developer list immediately after archival, with no manual refresh needed

**Automation Hint**

NOTE: cross-references TC-PMPROJ-033 (functional/businessRule) and TC-PMPROJ-086 (regression/ALCTKT) — this case emphasizes the zero-lag boundary condition specifically. Requires coordinating an ALCTKT ticket approval (cross-agent scope).

#### TC-PMPROJ-070 — A session without PM or PMO role is denied access to the PM Projects page/route at both UI and API levels

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[17] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Attempt to load the PM Projects route directly via URL
3. Call the underlying API directly

**Expected**

Access is denied at the UI (route inaccessible/redirected) and at the API (403) for this boundary condition

#### TC-PMPROJ-071 — The pagination page-size control never offers or accepts a value outside 100/200/300, even via manipulated state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Inspect the page-size selector's available options
2. Attempt to force a non-listed value via URL/query-param manipulation

**Expected**

The selector exposes exactly 100/200/300; a manipulated out-of-range value is rejected or falls back to a valid option

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account or confirmed API endpoint.

#### TC-PMPROJ-072 — Developer-list filter values are constrained to the system-defined leave-status and notice-period option sets

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Inspect the filter dropdown options for leave status and notice period
2. Attempt to pass an unlisted value via manipulated request/state

**Expected**

Only the defined option set is offered in the UI; an unlisted manipulated value is ignored, rejected, or has no effect on results

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account or confirmed API endpoint.

#### TC-PMPROJ-073 — A project with a status value not covered by the (unconfirmed) ACTIVE_PROJECT_STATUSES constant is classified without crashing

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | validationRules[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed/identify a project with an edge-case or undocumented status value
2. View its section placement on PM Projects

**Expected**

The project is deterministically classified into either the Active or the Completed/Archived section (binary classification) without a crash or blank rendering, even though the exact status-string mapping is unconfirmed

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Exact ACTIVE_PROJECT_STATUSES values are unconfirmed (see unclear[]); this case only asserts graceful binary classification, not specific status strings.

### Functional (36)

#### TC-PMPROJ-004 — Active section of the project list shows only the PM's currently active managed projects

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM Projects page shows Active and Completed/Archived projects separately |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM Projects
2. Locate the Active projects section
3. Cross-check each listed project's status against ACTIVE_PROJECT_STATUSES

**Expected**

Only projects whose Project.status maps to an active value under ACTIVE_PROJECT_STATUSES appear in the Active section; no completed/archived project appears there

**Test Data**

- `activeProjectCount`: >=1

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-005 — Completed/Archived section of the project list shows only the PM's completed or archived managed projects

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM Projects page shows Active and Completed/Archived projects separately |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM Projects
2. Locate the Completed/Archived projects section
3. Cross-check each listed project's status against ACTIVE_PROJECT_STATUSES

**Expected**

Only projects whose status maps to Completed/Archived under ACTIVE_PROJECT_STATUSES appear in this section; no active project appears there

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-006 — Search project list by project name returns matching projects and excludes non-matching ones

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Project list supports search by project name |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Note a known managed project name, e.g. 'Atlas Platform Revamp'
2. Type a partial match ('Atlas') into the project search field
3. Clear and type a non-matching string ('zzz-nonexistent-zzz')

**Expected**

Matching project(s) shown for the partial-match query; typing a non-matching string shows no rows / empty state

**Test Data**

- `searchTerm`: Atlas
- `nonMatchTerm`: zzz-nonexistent-zzz

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-007 — Project list defaults to sort by project name ascending (A–Z)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Project list supports sort by project name (default) and last updated date |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM Projects without applying any sort
2. Observe the order of the project list

**Expected**

Projects are ordered alphabetically A–Z by project name by default

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-008 — Sorting the project list by last updated date orders correctly and re-clicking toggles direction

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Project list supports sort by project name (default) and last updated date |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Click the 'Last Updated' column header
2. Observe the resulting order and the sort indicator
3. Click the same header again

**Expected**

First click sorts by last-updated date in one direction (newest first); second click reverses to oldest first; a sort indicator icon reflects the current direction

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-009 — Selecting each pagination page size (100/200/300) displays the corresponding number of rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Project list supports pagination with selectable page sizes of 100, 200, or 300 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open the page-size selector
2. Select 100 and observe the row count is at most 100
3. Select 200 and observe the row count is at most 200
4. Select 300 and observe the row count is at most 300

**Expected**

Selecting 100/200/300 displays up to that many rows per page respectively; no other page-size value is offered

**Test Data**

- `pageSizes`: 100, 200, 300

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a seeded dataset large enough to populate each page size.

#### TC-PMPROJ-010 — Summary bar total active-projects count matches rendered row count and API total

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: summary bar shows total active projects count |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM Projects
2. Read the summary bar's total active-projects count
3. Count the rows rendered in the Active section
4. Capture the API's active-project total for the same request

**Expected**

Summary bar count equals the number of rendered Active-section rows and equals the API's active-project total

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and confirmed API endpoint (see unclear[]).

#### TC-PMPROJ-011 — Clicking a project row opens its developer list detail view

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: clicking a project opens the developer list |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM Projects
2. Click a project row
3. Observe the resulting view

**Expected**

Detail view opens listing all developers currently allocated to the selected project

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-012 — Developer row displays name, job title, and department correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: each developer row displays name, job title, department, allocation, dates, hours, leave, notice |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Read the name, job title, and department on a known developer's row

**Expected**

Name, job title, and department match the developer's Employee record

**Test Data**

- `developerName`: Jane Doe

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-013 — Developer row displays allocation type, allocation %, start date, and end date correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: each developer row displays name, job title, department, allocation, dates, hours, leave, notice |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Read allocation type, allocation %, start date, and end date on a known developer's row

**Expected**

Allocation type (Fixed/Dynamic), allocation %, start date, and end date match the underlying ProjectAssignment record

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-014 — Developer row displays hours logged on this project sourced from Zoho Analytics

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: each developer row displays name, job title, department, allocation, dates, hours, leave, notice |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Read the hours-logged value on a known developer's row

**Expected**

Hours-logged value matches the Zoho Analytics-sourced figure for that developer/project pair

**Automation Hint**

PARTIAL — 'hours logged' depends on an external, latency-bound nightly Zoho Analytics sync; hard to deterministically seed in test.

#### TC-PMPROJ-015 — Developer row displays leave details (upcoming, current, and past) correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: each developer row displays name, job title, department, allocation, dates, hours, leave, notice |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Read the upcoming, current, and past leave entries on a known developer's row

**Expected**

Upcoming, current, and past leave entries for the developer are shown and match the developer's leave records

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a developer with known leave records.

#### TC-PMPROJ-016 — Developer row displays notice period status when the developer is serving notice

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: each developer row displays name, job title, department, allocation, dates, hours, leave, notice |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Identify a developer serving notice and read their row
3. Identify a developer not serving notice and read their row

**Expected**

Notice period indicator/status is shown for the developer currently serving notice; absent for the developer not serving notice

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a developer serving notice.

#### TC-PMPROJ-017 — Search developer list by developer name returns matching developers and excludes non-matching ones

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports search by developer name |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Type a partial match into the developer search field
3. Clear and type a non-matching string

**Expected**

Matching developer(s) shown for the partial-match query; non-matching query yields no rows/empty state

**Test Data**

- `searchTerm`: Jane
- `nonMatchTerm`: zzz-nonexistent-zzz

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-018 — Developer list defaults to sort by developer name ascending (A–Z)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports sort by developer name (default), allocation %, start date |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list without applying any sort
2. Observe the order

**Expected**

Developers are ordered alphabetically A–Z by developer name by default

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-019 — Sorting the developer list by allocation % orders developers correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports sort by developer name (default), allocation %, start date |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Click the Allocation % column header
3. Observe the order

**Expected**

Developers are ordered correctly by allocation % ascending; clicking again reverses order

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-020 — Sorting the developer list by start date orders developers correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports sort by developer name (default), allocation %, start date |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Click the Start Date column header
3. Observe the order

**Expected**

Developers are ordered correctly by start date ascending; clicking again reverses order

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-021 — Filtering the developer list by leave status narrows the list to matching developers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports filter by leave status and notice period |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Apply the Leave Status filter with a known value
3. Observe the filtered results

**Expected**

Only developers matching the selected leave-status value remain visible

**Test Data**

- `leaveStatus`: On Leave

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and seeded developers with known leave-status values.

#### TC-PMPROJ-022 — Filtering the developer list by notice period narrows the list to matching developers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports filter by leave status and notice period |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Apply the Notice Period filter with a known value
3. Observe the filtered results

**Expected**

Only developers matching the selected notice-period value remain visible

**Test Data**

- `noticePeriod`: Serving Notice

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and seeded developers with known notice-period values.

#### TC-PMPROJ-023 — Combining leave-status and notice-period filters applies AND semantics, narrowing to developers matching both

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list supports filter by leave status and notice period |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Apply both the Leave Status and Notice Period filters together
3. Observe the filtered results

**Expected**

Only developers matching both the leave-status and notice-period criteria remain visible

**Test Data**

- `leaveStatus`: On Leave
- `noticePeriod`: Serving Notice

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and seeded developers covering all filter combinations.

#### TC-PMPROJ-024 — Developer list renders without any pagination controls regardless of developer count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: developer list has no pagination |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a project with a large number of currently-allocated developers
2. Scroll to the bottom of the developer list

**Expected**

No pagination controls (page numbers, next/prev, page-size selector) are rendered on the developer list; all developers render in one continuous list

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a project with a large number of allocated developers.

#### TC-PMPROJ-025 — Update Allocation on a Fixed-allocation developer opens the correct UA ticket entry panel

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Update Allocation action available for Fixed allocations |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Click 'Update Allocation' on a Fixed-allocation developer row
3. Observe the panel that opens

**Expected**

Panel opens with an editable allocation-percentage field, creating a UA ticket entry point into the ALCTKT workflow; no direct allocation change occurs on this page

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account. Deeper ALCTKT ticket-lifecycle assertions are out of PMPROJ scope.

#### TC-PMPROJ-026 — Update Allocation on a Dynamic-allocation developer renders the allocation-percentage field disabled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Update Allocation action for Dynamic allocations — percentage field disabled |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Click 'Update Allocation' on a Dynamic-allocation developer row
3. Inspect the allocation-percentage field

**Expected**

Allocation-percentage field renders disabled/read-only, not editable

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-027 — Update Allocation on a Dynamic-allocation developer raises a UA ticket that internally sets allocation to 0% and end date to current date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Dynamic Update Allocation sets 0% and current end date |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Trigger 'Update Allocation' on a Dynamic-allocation developer row and submit
3. Inspect the resulting UA ticket payload in ALCTKT

**Expected**

The submitted UA ticket specifies allocation percentage = 0 and allocation end date = current date

**Automation Hint**

PARTIAL — the internal 0%/current-date values are set by the ALCTKT ticket workflow on approval, not directly observable on the PMPROJ page; verify via ticket payload/API where available.

#### TC-PMPROJ-028 — Dynamic allocation expectation note is visible wherever a dynamic allocation is displayed or requested

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: dynamic allocation expectation note shown wherever displayed/requested |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. View a Dynamic-allocation developer row on the developer list
2. Open its Update Allocation panel

**Expected**

The note clarifying dynamic allocation implies 1–2 hours/day or 10–20 hours/month availability is visible both on the developer list row and inside the Update Allocation panel

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-029 — PM's project-visibility scope applies only to the PM Projects and Requests pages; the org role governs all other pages

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM scope applies only to PM Projects and Requests pages |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. While logged in under a PM-scoped session, navigate away from PM Projects to another module (e.g. Employee Details)
2. Observe the resulting access

**Expected**

Navigating to any other module reflects the user's org role permissions, unaffected by their PM scope

**Automation Hint**

PARTIAL — requires a dedicated PM+org dual-context session to confirm the boundary; see unclear[].

#### TC-PMPROJ-030 — Pagination across the 100/200/300 page-size options does not duplicate or drop projects

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRules: pagination correctness |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Seed/identify a dataset spanning more than 300 projects
2. At page-size 100, traverse every page capturing all project IDs
3. Repeat the traversal at page-size 200, then at page-size 300
4. Diff the three captured ID sets

**Expected**

The full set of project IDs collected is identical across all three page sizes — no project duplicated or dropped

**Test Data**

- `pageSizes`: 100, 200, 300

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Navigate across page-size boundaries and diff the full project-ID set.

#### TC-PMPROJ-031 — Sorting the project list and developer list by each sortable column produces a stable order, including toggling direction on re-click

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRules: sort stability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. For each sortable column on both lists, click the header and capture the resulting order
2. Click the same header again and capture the resulting order
3. Compare both captures for correctness and direction toggle

**Expected**

Each column sorts correctly on first click and reverses on second click; the sort indicator reflects the active column/direction; order remains stable across repeated identical sorts

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Sort by project name and last updated (project list), and developer name, allocation %, start date (developer list); re-click each header and confirm direction toggles.

#### TC-PMPROJ-032 — Developer-list filters update the displayed developers correctly; clearing filters restores the full list; a zero-match combination shows an explicit empty state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRules: filter correctness |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Apply the leave-status filter alone and note the results
2. Clear the filter and confirm the full unfiltered developer list is restored
3. Apply a leave-status + notice-period combination known to match zero developers

**Expected**

Filters narrow results correctly; clearing restores the unfiltered full developer list; the zero-match combination shows an explicit empty-state message, not a blank or stale list

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-PMPROJ-033 — Once a Dynamic Update Allocation ticket is approved and the ProjectAssignment is archived, the developer no longer appears in that project's developer list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRules: status-transition — Dynamic UA archival visibility |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Identify a Dynamic-allocation developer on a managed project's developer list
2. Trigger and approve their Update Allocation ticket via ALCTKT (cross-module)
3. Return to the project's developer list without any manual refresh beyond normal navigation

**Expected**

The developer is no longer present in the developer list once the ProjectAssignment is archived; no manual page refresh is required to see the removal

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Requires coordinating an ALCTKT ticket approval (cross-agent scope) followed by a PM Projects session check — see also TC-PMPROJ-069 (boundary edge case) and TC-PMPROJ-086 (regression/ALCTKT).

#### TC-PMPROJ-034 — Admin (ceo@simformsolutions.com) can view the PM Projects page, consistent with existing full-system-access precedent

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: Admin role access to PM Projects page |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to PM & PMO → PM Projects

**Expected**

PM Projects page loads without an access-denied error for the Admin account

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Confirm whether Admin has PM Projects visibility (unclear[]: 'Admin role access to PM Projects page') before hardening this assertion.

#### TC-PMPROJ-035 — [MANUAL] Dedicated PM/PMO/dual-role test accounts must be provisioned before role-scoped PM Projects flows can be fully automated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: Dedicated PM/PMO test accounts (blocking) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — blocked pending dedicated PM/PMO test account provisioning

**Steps**

1. Request dedicated PM, PMO, and dual-role test accounts from the project team
2. Once provisioned, add credentials to .env and re-run all PARTIAL-flagged PM Projects test cases

**Expected**

Dedicated PM/PMO/dual-role test accounts are provisioned and confirmed, unblocking full automation of role-scoped test cases

**Automation Hint**

MANUAL — requirement unclear: neither ceo@simformsolutions.com nor punit.patel@simformsolutions.com is confirmed to hold a PM or PMO persona; request dedicated PM, PMO, and dual-role (PM+TM/EM/RM) test accounts before automating role-scoped PM Projects visibility end-to-end.

#### TC-PMPROJ-036 — [MANUAL] Old-PM post-reassignment data display is explicitly deferred and out of scope for this QA pass

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: Old project data after PM change (deferred) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — documentation/scope-confirmation task

**Steps**

1. Confirm with the product team that the old PM's post-reassignment data-display flow remains deferred to a future sprint
2. Do not attempt to validate unbuilt behaviour

**Expected**

Confirmed out-of-scope status is documented; no test coverage is attempted for this flow this sprint

**Automation Hint**

MANUAL — requirement unclear: §12/§4.1 defer this flow to a future sprint; only the already-explicit new-PM-sees-it/old-PM-loses-visibility boundary is covered (see TC-PMPROJ-054).

#### TC-PMPROJ-037 — [MANUAL] Confirm whether PMO's 'Add Allocation' (Direct Allocation) entry point appears on the PM Projects page

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: Location of PMO's Add Allocation entry point |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — documentation/scope-confirmation task

**Steps**

1. Confirm with product/design which page hosts the PMO Direct Allocation entry point
2. If confirmed to be on PM Projects, add corresponding acceptance criteria and re-run test-case-generator

**Expected**

Location of the PMO Direct Allocation entry point is confirmed; PMPROJ scope updated if it is found to belong on this page

**Automation Hint**

MANUAL — requirement unclear: §6.3 describes PMO's exclusive Direct Allocation action but does not state which page surfaces it; assumed out of PMPROJ scope pending confirmation.

#### TC-PMPROJ-038 — [MANUAL] Confirm PM Projects API endpoint paths/methods before automating API-level assertions

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: PM Projects API endpoints unconfirmed |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — documentation/confirmation task

**Steps**

1. Backend team confirms actual endpoint paths/methods for the PM project list and project developer list
2. Update automation-generator's API-assertion helpers once confirmed

**Expected**

Confirmed endpoint paths/methods are documented, unblocking API-level parity assertions across this test suite

**Automation Hint**

MANUAL — requirement unclear: no method+path is stated in source for the PM project-list or developer-list endpoints; all apiEndpoints entries are unconfirmed REST-convention guesses.

#### TC-PMPROJ-039 — [MANUAL] Confirm whether the PR Reviewer 'Other Allocation' marker column appears on the PM Projects developer list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: PR Reviewer 'Other Allocation' marker column placement |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — documentation/scope-confirmation task

**Steps**

1. Confirm with frontend design whether/where the PR Reviewer marker column appears on the PM Projects developer list
2. Add a uiElement and test case once the column and its label are finalized

**Expected**

Marker column presence and label are confirmed or ruled out for this page's developer list

**Automation Hint**

MANUAL — requirement unclear: §11 states a marker column identifies PR Reviewers on 'project allocation views' but placement/labelling is undecided; not included as a confirmed developer-list column.

### Integration (4)

#### TC-PMPROJ-092 — Integration — Update Allocation entry points correctly hand off into the ALCTKT ticket lifecycle and reflect ticket-side changes back on PM Projects

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: ALCTKT — Update Allocation entry point / ALCTKT ticket lifecycle hand-off |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Trigger Update Allocation on a Fixed-allocation developer and confirm the UA ticket is created in ALCTKT referencing the correct project/developer
3. Trigger Update Allocation on a Dynamic-allocation developer, then approve the resulting UA ticket in ALCTKT
4. Return to the PM Projects developer list

**Expected**

UA ticket is correctly created and linked to the source project/developer for both Fixed and Dynamic actions; after the Dynamic UA is approved and the ProjectAssignment archived, the developer no longer appears in the PM Projects developer list

**Test Data**

- `sourceModule`: PMPROJ
- `targetModule`: ALCTKT
- `allocationTypes`: Fixed, Dynamic

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved (PM session for PMPROJ, appropriate approver session for ALCTKT). Verify both via UI navigation and direct API response.

#### TC-PMPROJ-093 — Integration — per-developer fields on PM Projects are sourced consistently from Employee records shared with Employee Details

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: EMPDET — shared Employee record fields |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Note a developer's name, job title, department, leave details, and notice-period status on a PM Projects developer-list row
2. Navigate to the same employee's record in Employee Details
3. Compare each field

**Expected**

Name, job title, department, leave details, and notice-period status are identical between the PM Projects developer list and the Employee Details record for the same Employee entity

**Test Data**

- `sourceModule`: PMPROJ
- `targetModule`: EMPDET
- `employeeId`: shared Employee entity ID

**Automation Hint**

Multi-module flow — requires separate storageState fixtures if role differs between pages. Verify both via UI navigation and direct API response.

#### TC-PMPROJ-094 — Integration — Project.status and Project.projectManagerId are consistent between PM Projects and the Projects module's Project Details data model

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: PROJDET — shared Project data model |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Note a project's status and Active/Archived section on PM Projects
2. Navigate to the same project's record in Project Details
3. Compare Project.status and projectManagerId

**Expected**

Project.status and Project.projectManagerId values are identical between PM Projects and Project Details for the same Project entity

**Test Data**

- `sourceModule`: PMPROJ
- `targetModule`: PROJDET
- `projectId`: shared Project entity ID

**Automation Hint**

Multi-module flow — requires separate storageState fixtures if role differs between pages. Verify both via UI navigation and direct API response.

#### TC-PMPROJ-095 — Integration — the PM_PROJECTS CASL permission module (Roles & Permissions) correctly gates PM Projects page and API access end-to-end

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: ADMROL — PM_PROJECTS CASL permission gating |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — Admin, for permission configuration

**Steps**

1. As Admin, inspect the PM_PROJECTS permission definition in Roles & Permissions
2. Confirm a role granted PM_PROJECTS can access the PM Projects page and API
3. Confirm a role without PM_PROJECTS is denied at both UI and API

**Expected**

PM_PROJECTS permission grants/denies PM Projects page and API access exactly as configured in Roles & Permissions, enforced server-side

**Test Data**

- `sourceModule`: ADMROL
- `targetModule`: PMPROJ
- `permission`: PM_PROJECTS

**Automation Hint**

Multi-module flow — requires an Admin session (Roles & Permissions) plus role-specific sessions to verify resulting access. Verify both via UI navigation and direct API response.

### Negative (13)

#### TC-PMPROJ-040 — Org-only role without a paired PM role cannot navigate directly to the PM Projects page URL/route

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Attempt direct navigation to the PM Projects route URL
3. Call the PM Projects list API directly

**Expected**

Access is denied — page is not rendered / user is redirected; the direct API call returns 403

**Test Data**

- `route`: /pm-projects

#### TC-PMPROJ-041 — PM attempting to open a project's detail view for a project they do not currently manage is denied

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. As a PM session, obtain the project ID of a project not managed by this PM
2. Navigate directly to that project's detail URL

**Expected**

Access is denied (403/not found); the project also does not appear in this PM's own project list

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a project managed by a different PM.

#### TC-PMPROJ-042 — PM cannot directly modify a developer's allocation percentage inline on the PM Projects page

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a project's developer list
2. Inspect the allocation % cell for any inline-edit control
3. Attempt to interact with the allocation % cell directly

**Expected**

No inline-edit control is available on the allocation % cell; the only allocation-change entry point is the Update Allocation action, which opens a ticket panel

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-043 — An invalid/unsupported pagination page-size value is rejected or falls back to a valid option

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Manipulate the page-size query parameter/UI state to an unsupported value (e.g. 50)
2. Observe the resulting behaviour

**Expected**

The request is rejected, or the page size falls back to the nearest valid option (100/200/300); no crash occurs

**Test Data**

- `invalidPageSize`: 50

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account or a confirmed API endpoint.

#### TC-PMPROJ-044 — Special characters and reserved values entered into project/developer name search fields are handled safely

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Enter each of `<script>alert(1)</script>`, `"`, `'`, `--`, `%`, `null`, `undefined` one at a time into the project-name search field
2. Repeat with the developer-name search field

**Expected**

No script executes; each input is either sanitized/escaped in the rendered list or produces a correct 'no results' state — no application crash or raw error

**Test Data**

- `payloads`: <script>alert(1)</script>, ", ', --, %, null, undefined

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account to reach the search fields.

#### TC-PMPROJ-045 — Rapid multiple clicks on Update Allocation open exactly one panel/ticket, not multiple

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a project's developer list
2. Click 'Update Allocation' on a developer row 3 times in rapid succession

**Expected**

Exactly one Update Allocation panel/ticket-entry flow is triggered; no duplicate panels or duplicate tickets are created

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-046 — Session expiry (HTTP 401) while browsing PM Projects returns the user to login without data loss

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Simulate/force session expiry while on the PM Projects page
2. Attempt an action (e.g. search)

**Expected**

User is redirected to the login page; no partial data corruption occurs; re-authenticating returns to a consistent state

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and a way to force session expiry (e.g. clearing storageState mid-test).

#### TC-PMPROJ-047 — A permission-denied (403) response on PM Projects shows a user-friendly message, not a raw error

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Trigger a 403 response (via an intercepted/mocked API response or an unauthorized action) while on the PM Projects page
2. Observe the resulting UI

**Expected**

UI shows a user-friendly permission-denied message; no raw error/stack trace is exposed

**Automation Hint**

PARTIAL — requires mocking/intercepting a 403 API response.

#### TC-PMPROJ-048 — Navigating to a non-existent or removed project shows a not-found page, not a blank screen

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate directly to a PM Projects detail URL using a project ID that does not exist

**Expected**

A clear not-found page/message is shown; the screen is not blank and no raw error is exposed

**Test Data**

- `projectId`: non-existent-id-999999

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-049 — A server error (HTTP 500) on PM Projects shows a user-friendly error, not a raw stack trace

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Trigger/mock a 500 response from the PM Projects list or developer-list API
2. Observe the resulting UI

**Expected**

A user-friendly error toast/page is shown; no raw stack trace or technical error detail is exposed

**Automation Hint**

PARTIAL — requires mocking/intercepting a 500 API response.

#### TC-PMPROJ-050 — A service-unavailable (HTTP 503) response on PM Projects shows a maintenance or retry message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Trigger/mock a 503 response from the PM Projects API
2. Observe the resulting UI

**Expected**

A maintenance or retry message is shown to the user; the page does not appear broken or blank

**Automation Hint**

PARTIAL — requires mocking/intercepting a 503 API response.

#### TC-PMPROJ-051 — A slow/timed-out API response shows a loading indicator and does not freeze the UI

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Throttle/delay the PM Projects list or developer-list API response beyond the expected threshold
2. Observe the page during the delay

**Expected**

A loading indicator (spinner/skeleton) is shown during the delay; the UI remains responsive and does not freeze

**Automation Hint**

PARTIAL — requires throttling/delaying the API response beyond the expected threshold.

#### TC-PMPROJ-052 — Refreshing the browser while the Update Allocation panel is open does not submit partial ticket data or corrupt existing records

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open the Update Allocation panel for a developer
2. Without submitting, refresh the browser (F5)
3. Re-open the project's developer list

**Expected**

No partial/incomplete UA ticket is created; the developer's existing allocation data is unchanged and correct

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

### Regression (6)

#### TC-PMPROJ-086 — Update Allocation actions correctly hand off to the ALCTKT ticket lifecycle, and ticket-side changes are reflected back on the PM Projects developer list

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: ALCTKT (regressionRisk: high); Regression: data-integrity (assignment/deallocation count) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Trigger a Fixed Update Allocation and confirm the resulting ALCTKT ticket references the correct project/developer
2. Trigger and approve a Dynamic Update Allocation and confirm the assigned-developer count on PM Projects decrements by 1 in both UI and API after archival

**Expected**

UA tickets created from PM Projects correctly reference the source project/developer in ALCTKT; after a Dynamic UA is approved, the developer-list assigned count decrements by 1 in both the UI and the API response

**Automation Hint**

PARTIAL — requires coordinating cross-module ALCTKT ticket creation/approval alongside a PM Projects session.

#### TC-PMPROJ-087 — Per-developer fields shown on PM Projects (name, title, department, leave, notice period) match the same Employee record shown on Employee Details

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: EMPDET (regressionRisk: medium) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Note a developer's fields on a PM Projects developer-list row
2. Navigate to that employee's Employee Details record
3. Compare name, job title, department, leave details, and notice-period status

**Expected**

Name, job title, department, leave details, and notice-period status match exactly between PM Projects and Employee Details for the same employee

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account plus cross-navigation to Employee Details for the same employee.

#### TC-PMPROJ-088 — Project list data (status, projectManagerId-derived scoping) on PM Projects is consistent with the Projects module's Project Details data model

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: PROJDET (regressionRisk: medium) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Note a project's status and section (Active/Archived) on PM Projects
2. Navigate to the same project in Project Details
3. Compare status

**Expected**

Project status and classification are consistent between PM Projects and Project Details for the same project

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account plus cross-navigation to Project Details for the same project.

#### TC-PMPROJ-089 — A change to the PM_PROJECTS CASL permission in Roles & Permissions immediately affects PM Projects page access

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: ADMROL (regressionRisk: medium) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — Admin, for permission configuration

**Steps**

1. As Admin, revoke the PM_PROJECTS permission for a PM's role in Roles & Permissions
2. As that PM, attempt to access PM Projects
3. Restore the permission and re-verify access is regained

**Expected**

Revoking PM_PROJECTS denies the PM access to the page (UI+API); restoring the permission regains access

**Automation Hint**

MANUAL — requires an Admin session modifying CASL permissions in Roles & Permissions (ADMROL) plus a PM-role session to verify the resulting access change; no dedicated PM test account currently exists.

#### TC-PMPROJ-090 — Update Allocation button visibility and Fixed/Dynamic enabled-disabled state remain correct after list refresh, sort, or filter operations

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (button visibility / disabled-enabled state) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. On a project's developer list, sort by allocation %
2. Filter by leave status, then clear the filter
3. Check the Update Allocation button state on Fixed and Dynamic rows after each operation

**Expected**

The Update Allocation button remains visible for every developer row, with the percentage field correctly enabled (Fixed) or disabled (Dynamic), unaffected by sort/filter/refresh operations

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-091 — A loading indicator is shown while the project list and developer list data fetch, and disappears once loaded

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (loading indicator) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM Projects and observe the initial load
2. Click into a project and observe the developer-list load

**Expected**

A spinner or skeleton screen is visible during each fetch and disappears once data has loaded, with no flash of an empty/broken state

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

### Security (12)

#### TC-PMPROJ-074 — PM cannot view or open a project they do not currently manage — enforced at both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: PM.cannot[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. As a PM session, attempt to list/search for a project managed by a different PM
2. Attempt direct API access to that project's ID

**Expected**

The project does not appear in this PM's project list (UI); the direct API call for that project's data returns 403/omitted

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account plus a project managed by a different PM.

#### TC-PMPROJ-075 — PM cannot directly modify/edit a developer's allocation inline — no inline-edit control exists, and the API rejects a direct allocation write

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: PM.cannot[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Inspect the developer list DOM for an inline-edit control on allocation %
2. Attempt a direct API PATCH/PUT to the allocation field

**Expected**

No inline-edit control exists in the UI; a direct API write attempt to the allocation field is rejected (403/405 or equivalent)

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account and confirmed API endpoint paths (see unclear[]).

#### TC-PMPROJ-076 — PM cannot access any page besides PM Projects and Requests under PM scope — access to other modules is governed solely by org role

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: PM.cannot[2] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM-only test account

**Steps**

1. As a PM-scoped session with no additional org privileges, attempt to navigate to another module (e.g. Department Settings, Admin)

**Expected**

Access to modules other than PM Projects/Requests is denied or governed strictly by the org role, with PM scope granting no additional access

**Automation Hint**

PARTIAL — requires a dedicated PM-only (no additional org role) test account.

#### TC-PMPROJ-077 — PM cannot see the shortlist or ticket-approval details (ALCTKT scope) from the PM Projects page

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: PM.cannot[3] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. As a PM session, inspect the PM Projects page and its Update Allocation panel for any shortlist/approval UI or data

**Expected**

No shortlist or ticket-approval UI/data is present anywhere on the PM Projects page or its Update Allocation panel

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-078 — PMO role cannot be combined with RM, TM, or EM roles on a single user profile

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: PMO.cannot[0] |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — Admin, for role-assignment inspection

**Steps**

1. As Admin, attempt to assign both PMO and RM/TM/EM to the same user profile via Roles & Permissions / Assign User Roles

**Expected**

The system prevents or flags the PMO role from being combined with RM/TM/EM on the same profile

**Automation Hint**

MANUAL — this is a role-assignment/admin-configuration constraint (Roles & Permissions), not a PM Projects page UI check; requires an Admin session verifying role-assignment rules. No PMO test account currently exists (see unclear[]).

#### TC-PMPROJ-079 — An org-only role (no PM role) is denied all access to the PM Projects page and its developer lists

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: RM/TM/EM.cannot[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Confirm no PM Projects nav entry is present
3. Attempt direct route navigation
4. Call the underlying API directly

**Expected**

No PM Projects nav entry is visible; direct route navigation is denied; the API returns 403

#### TC-PMPROJ-080 — A dual-role (PM + RM/TM/EM) user's org role must not affect PM Projects page visibility

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: PM+RM/TM/EM.cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as dual-role-session placeholder pending a dedicated dual-role test account

**Steps**

1. Log in as a dual-role PM+org user
2. Compare PM Projects page contents against the same user's known PM-only managed-project set

**Expected**

PM Projects page shows exactly the PM-scoped project set; the user's org-role breadth has no bearing on this page's contents

**Automation Hint**

PARTIAL — requires a dedicated dual-role test account, not yet confirmed available; see unclear[].

#### TC-PMPROJ-081 — PM cannot access another PM's project details via direct URL/API manipulation (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-A-session placeholder pending dedicated PM test accounts

**Steps**

1. As PM-A, capture PM-B's project ID
2. Navigate directly to PM-B's project detail URL using PM-A's session
3. Call the API with PM-B's project ID

**Expected**

Request is denied (403) or the project is omitted from the response; the project is not present in PM-A's own project list

**Automation Hint**

PARTIAL — requires two distinct PM-role test accounts.

#### TC-PMPROJ-082 — A non-PM/PMO role attempts to load the PM Projects page or its underlying API directly — denied per the PM_PROJECTS CASL permission module

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As punit.patel@simformsolutions.com, load the PM Projects route directly
2. Call the PM Projects API directly

**Expected**

Access is denied at both the UI (page/route inaccessible) and API (403) levels

#### TC-PMPROJ-083 — Script/HTML payloads submitted via project or developer name search/sort inputs are sanitized on render

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Submit `<script>alert(1)</script>` and other HTML payloads into the project-name search field
2. Repeat with the developer-name search field
3. Attempt the same via a sort/query-param manipulation

**Expected**

The payload is escaped/sanitized in the rendered list and detail view; no script executes

**Test Data**

- `payload`: <img src=x onerror=alert(1)>

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account.

#### TC-PMPROJ-084 — A dual-role session is checked for org-role-scoped data (e.g. broader department employee data) leaking into the PM Projects page

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[3] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as dual-role-session placeholder pending a dedicated dual-role test account

**Steps**

1. Log in as a dual-role PM+EM user with known multi-department org scope
2. Inspect the PM Projects page's project and developer lists for any data outside the user's PM-managed set

**Expected**

PM Projects page shows PM-scoped project/developer data only; no org-role-scoped data (e.g. other departments' employees) appears

**Automation Hint**

PARTIAL — requires a dedicated dual-role test account (e.g. PM+EM with multi-department scope), not yet confirmed available; see unclear[].

#### TC-PMPROJ-085 — Each role's PM Projects access is enforced consistently at both UI and API levels across PM, PMO, and org-only roles

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | businessRules: role-scope-assertion |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) and punit.patel@simformsolutions.com (testUserPage fixture) — two contexts required

**Steps**

1. As PM, confirm own-scope-only access at both UI and API
2. As an org-only role (punit.patel), confirm full denial at both UI and API
3. As PMO/Admin (if applicable), confirm org-wide access

**Expected**

PM sees only managed projects at both UI and API; org-only role has zero access at both UI and API; PMO/Admin (if applicable) sees the full organisation-wide set — all consistently enforced server-side, not just hidden client-side

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. This case consolidates TC-PMPROJ-074/079/082 (UI+API enforcement across roles) into one cross-role summary assertion.

### Smoke (3)

#### TC-PMPROJ-001 — PM Projects page loads scoped to the PM's managed projects, split into Active and Completed/Archived sections

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Log in as ceo@simformsolutions.com and navigate to PM & PMO → PM Projects
2. Observe the project list on page load
3. Identify the Active section and the Completed/Archived section

**Expected**

Project list contains only projects where Project.projectManagerId equals the current PM's employee ID (per nightly Zoho PROJECT_METADATA sync); Active and Completed/Archived projects render in visually separate sections

**Test Data**

- `expectedProjectManagerId`: current PM's employee ID (Zoho-synced)

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account (not yet confirmed available). See unclear[]: 'Dedicated PM/PMO test accounts'.

#### TC-PMPROJ-002 — Opening a managed project shows the developer list with correct per-developer allocation, hours-logged, leave, and notice-period data

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Navigate to PM & PMO → PM Projects
2. Click a project row for a project with at least one Fixed and one Dynamic allocation developer
3. Observe the developer list rows

**Expected**

Each developer row displays name, job title, department, allocation type, allocation %, start/end date, hours logged on this project (Zoho Analytics-sourced), leave details (upcoming/current/past), and notice period status; values match the underlying source records

**Test Data**

- `projectName`: Atlas Platform Revamp

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account; 'hours logged' is sourced from an external nightly Zoho Analytics sync that is hard to deterministically seed in test. See unclear[].

#### TC-PMPROJ-003 — Update Allocation opens the correct entry point for both Fixed and Dynamic allocation developers, including the dynamic allocation expectation note

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[2] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) — used as PM-session placeholder pending a dedicated PM test account

**Steps**

1. Open a managed project's developer list
2. Click 'Update Allocation' on a Fixed-allocation developer row and observe the panel; close it
3. Click 'Update Allocation' on a Dynamic-allocation developer row
4. Observe the panel, the disabled percentage field, and the expectation note

**Expected**

Fixed-allocation Update Allocation opens an editable-percentage UA ticket entry panel (ALCTKT hand-off); Dynamic-allocation Update Allocation opens a panel with the percentage field disabled and the expectation note '1–2 hours/day or 10–20 hours/month' visible

**Test Data**

- `fixedDeveloper`: Fixed-allocation developer row
- `dynamicDeveloper`: Dynamic-allocation developer row

**Automation Hint**

PARTIAL — requires a dedicated PM-role test account; only the ALCTKT entry point is asserted here, not the ticket lifecycle.
