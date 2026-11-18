# Allocation Requests — Test Cases

**Total test cases:** 191  
**Modules covered:** Allocation Requests  
**Source:** `reports/test-cases/cases-2026-08-06-ALCTKT.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 54 | 28.3% |
| boundary | 52 | 27.2% |
| security | 31 | 16.2% |
| negative | 30 | 15.7% |
| regression | 13 | 6.8% |
| integration | 8 | 4.2% |
| smoke | 3 | 1.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 109 | 57.1% |
| medium | 68 | 35.6% |
| critical | 14 | 7.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 99 | 51.8% |
| minor | 59 | 30.9% |
| critical | 33 | 17.3% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 165 | 86.4% |
| regression-derived | 26 | 13.6% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 182 | 95.3% |
| speculative | 9 | 4.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 191 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 65 | 34.0% |
| @boundary | 60 | 31.4% |
| @regression | 37 | 19.4% |
| @security | 31 | 16.2% |
| @negative | 30 | 15.7% |
| @needs-verification | 9 | 4.7% |
| @smoke | 3 | 1.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-ALCTKT-001](#tc-alctkt-001-pm-raises-a-fresh-allocation-na-ticket-and-it-progresses-through-full-dual-approval-to-approved-with-a-projectassignment-auto-created) | PM raises a Fresh Allocation NA ticket and it progresses through full dual approval to APPROVED with a ProjectAssignment auto-created | Allocation Requests | smoke | critical |
| [TC-ALCTKT-002](#tc-alctkt-002-pm-raises-a-ua-ticket-increasing-allocation-and-it-progresses-through-full-dual-approval-to-approved-updating-only-the-changed-fields-on-the-existing-projectassignment) | PM raises a UA ticket increasing allocation and it progresses through full dual approval to APPROVED, updating only the changed fields on the existing ProjectAssignment | Allocation Requests | smoke | critical |
| [TC-ALCTKT-003](#tc-alctkt-003-pm-raises-a-ua-ticket-decreasing-de-allocating-and-it-follows-the-lighter-acknowledgement-flow-to-approved-updating-or-soft-deleting-the-projectassignment) | PM raises a UA ticket decreasing/de-allocating and it follows the lighter acknowledgement flow to APPROVED, updating or soft-deleting the ProjectAssignment | Allocation Requests | smoke | critical |
| [TC-ALCTKT-004](#tc-alctkt-004-pm-projects-page-shows-active-and-completed-archived-projects-in-separate-views) | PM Projects page shows Active and Completed/Archived projects in separate views | Allocation Requests | functional | high |
| [TC-ALCTKT-005](#tc-alctkt-005-pm-projects-page-supports-search-by-project-name) | PM Projects page supports search by project name | Allocation Requests | functional | high |
| [TC-ALCTKT-006](#tc-alctkt-006-pm-projects-page-sorts-by-project-name-a-z-and-by-last-updated-date) | PM Projects page sorts by project name A-Z and by last updated date | Allocation Requests | functional | high |
| [TC-ALCTKT-007](#tc-alctkt-007-pm-projects-page-paginates-at-100-200-300-items-per-page-and-the-summary-bar-total-matches-the-api) | PM Projects page paginates at 100/200/300 items per page and the summary bar total matches the API | Allocation Requests | functional | high |
| [TC-ALCTKT-008](#tc-alctkt-008-opening-a-project-from-pm-projects-shows-every-allocated-developer-with-full-details) | Opening a project from PM Projects shows every allocated developer with full details | Allocation Requests | functional | high |
| [TC-ALCTKT-009](#tc-alctkt-009-per-project-developer-list-supports-search-by-developer-name) | Per-project developer list supports search by developer name | Allocation Requests | functional | high |
| [TC-ALCTKT-010](#tc-alctkt-010-per-project-developer-list-sorts-by-developer-name-allocation-and-start-date) | Per-project developer list sorts by developer name, allocation %, and start date | Allocation Requests | functional | high |
| [TC-ALCTKT-011](#tc-alctkt-011-per-project-developer-list-filters-by-leave-status-and-notice-period) | Per-project developer list filters by leave status and notice period | Allocation Requests | functional | high |
| [TC-ALCTKT-012](#tc-alctkt-012-fixed-allocation-update-allocation-action-opens-a-panel-to-modify-allocation-terms-and-creates-a-ua-ticket) | Fixed allocation Update Allocation action opens a panel to modify allocation terms and creates a UA ticket | Allocation Requests | functional | high |
| [TC-ALCTKT-013](#tc-alctkt-013-fixed-allocation-update-allocation-surfaces-ratings-feedback-reason-fields-when-new-allocation-percentage-0) | Fixed allocation Update Allocation surfaces ratings/feedback/reason fields when New Allocation Percentage = 0 | Allocation Requests | functional | high |
| [TC-ALCTKT-014](#tc-alctkt-014-fixed-allocation-update-allocation-surfaces-ratings-feedback-reason-fields-when-relative-reduction-is-70) | Fixed allocation Update Allocation surfaces ratings/feedback/reason fields when relative reduction is >=70% | Allocation Requests | functional | high |
| [TC-ALCTKT-015](#tc-alctkt-015-dynamic-allocation-s-percentage-field-is-disabled-on-update-allocation) | Dynamic allocation's percentage field is disabled on Update Allocation | Allocation Requests | functional | high |
| [TC-ALCTKT-016](#tc-alctkt-016-dynamic-allocation-update-allocation-always-follows-the-lighter-acknowledgement-flow-and-archives-the-projectassignment-on-apply) | Dynamic allocation Update Allocation always follows the lighter acknowledgement flow and archives the ProjectAssignment on apply | Allocation Requests | functional | high |
| [TC-ALCTKT-017](#tc-alctkt-017-a-note-explaining-dynamic-allocation-s-maximum-availability-is-shown-wherever-dynamic-allocation-is-displayed-or-requested) | A note explaining Dynamic allocation's maximum availability is shown wherever Dynamic allocation is displayed or requested | Allocation Requests | functional | high |
| [TC-ALCTKT-018](#tc-alctkt-018-requests-page-summary-bar-counts-tickets-by-state-open-in-review-awaiting-confirmation-approved-closed) | Requests page summary bar counts tickets by state (Open/In Review/Awaiting Confirmation/Approved/Closed) | Allocation Requests | functional | high |
| [TC-ALCTKT-019](#tc-alctkt-019-requests-table-shows-the-documented-columns-ticket-id-type-project-developer-tech-stack-state-created-date-last-updated) | Requests table shows the documented columns (Ticket ID, Type, Project, Developer, Tech Stack, State, Created Date, Last Updated) | Allocation Requests | functional | high |
| [TC-ALCTKT-020](#tc-alctkt-020-requests-page-supports-search-by-ticket-id-and-by-project-name) | Requests page supports search by ticket ID and by project name | Allocation Requests | functional | high |
| [TC-ALCTKT-021](#tc-alctkt-021-requests-page-filters-by-state-type-project-and-date-range) | Requests page filters by state, type, project, and date range | Allocation Requests | functional | high |
| [TC-ALCTKT-022](#tc-alctkt-022-requests-page-sorts-by-created-date-descending-by-default-and-supports-last-updated-and-ticket-id-sort) | Requests page sorts by created date descending by default, and supports last updated and ticket ID sort | Allocation Requests | functional | high |
| [TC-ALCTKT-023](#tc-alctkt-023-requests-page-paginates-at-100-200-300-items-per-page) | Requests page paginates at 100/200/300 items per page | Allocation Requests | functional | high |
| [TC-ALCTKT-024](#tc-alctkt-024-create-request-button-opens-a-modal-offering-new-allocation-update-allocation-and-replacement-but-only-na-ua-ticket-types-are-stored) | Create Request button opens a modal offering New Allocation, Update Allocation, and Replacement, but only NA/UA ticket types are stored | Allocation Requests | functional | high |
| [TC-ALCTKT-025](#tc-alctkt-025-a-new-allocation-submission-requesting-multiple-resources-creates-one-independently-trackable-ticket-per-resource) | A New Allocation submission requesting multiple resources creates one independently-trackable ticket per resource | Allocation Requests | functional | high |
| [TC-ALCTKT-026](#tc-alctkt-026-na-ticket-fields-display-correctly-including-allocation-percentage-shown-converted-to-hours) | NA ticket fields display correctly including Allocation Percentage shown converted to hours | Allocation Requests | functional | high |
| [TC-ALCTKT-027](#tc-alctkt-027-request-type-pr-reviewer-follows-the-standard-ticket-lifecycle-with-no-pmo-bypass-option-and-on-approval-is-recorded-as-an-other-allocation-pr-reviewer) | Request Type = PR Reviewer follows the standard ticket lifecycle with no PMO bypass option, and on approval is recorded as an 'other allocation' PR reviewer | Allocation Requests | functional | high |
| [TC-ALCTKT-028](#tc-alctkt-028-request-type-estimation-makes-end-date-optional-and-creates-a-short-duration-projectassignment-on-approval) | Request Type = Estimation makes End Date optional and creates a short-duration ProjectAssignment on approval | Allocation Requests | functional | high |
| [TC-ALCTKT-029](#tc-alctkt-029-update-allocation-ua-form-shows-the-documented-field-set) | Update Allocation (UA) form shows the documented field set | Allocation Requests | functional | high |
| [TC-ALCTKT-030](#tc-alctkt-030-deallocation-ratings-are-visible-to-rm-tm-em-admin-and-pmo-on-a-ticket-a-pm-sees-only-ratings-they-themselves-added) | Deallocation ratings are visible to RM, TM, EM, Admin, and PMO on a ticket; a PM sees only ratings they themselves added | Allocation Requests | functional | high |
| [TC-ALCTKT-031](#tc-alctkt-031-bypass-approval-checkbox-is-visible-to-pmo-only-on-any-full-flow-ticket) | Bypass Approval checkbox is visible to PMO only, on any full-flow ticket | Allocation Requests | functional | high |
| [TC-ALCTKT-032](#tc-alctkt-032-replacement-request-pre-fills-and-locks-department-tech-stack-and-additionally-requires-replacement-of-type-reason) | Replacement request pre-fills and locks department/tech-stack, and additionally requires Replacement Of/Type/Reason | Allocation Requests | functional | high |
| [TC-ALCTKT-033](#tc-alctkt-033-ticket-ids-are-zero-padded-4-digit-sequential-per-type-prefix-and-never-reset-yearly) | Ticket IDs are zero-padded 4-digit sequential per type prefix and never reset yearly | Allocation Requests | functional | high |
| [TC-ALCTKT-034](#tc-alctkt-034-ticket-detail-route-uses-the-human-readable-ticket-id-as-its-url-parameter) | Ticket detail route uses the human-readable ticket ID as its URL parameter | Allocation Requests | functional | high |
| [TC-ALCTKT-035](#tc-alctkt-035-a-ticket-raised-by-the-pm-can-be-closed-by-the-raising-pm-from-open) | A ticket raised by the PM can be closed by the raising PM from OPEN | Allocation Requests | functional | high |
| [TC-ALCTKT-036](#tc-alctkt-036-pmo-can-close-a-ticket-in-open-in-review-or-awaiting-confirmation-but-not-approved) | PMO can close a ticket in OPEN, IN_REVIEW, or AWAITING_CONFIRMATION, but not APPROVED | Allocation Requests | functional | high |
| [TC-ALCTKT-037](#tc-alctkt-037-on-approved-the-system-auto-applies-the-allocation-change-na-creates-a-projectassignment-ua-with-0-updates-only-changed-fields-ua-with-0-soft-deletes) | On APPROVED, the system auto-applies the allocation change: NA creates a ProjectAssignment, UA with %>0 updates only changed fields, UA with %=0 soft-deletes | Allocation Requests | functional | high |
| [TC-ALCTKT-038](#tc-alctkt-038-during-in-review-pmo-and-the-assigned-department-s-tm-em-build-a-shortlist-not-visible-to-the-pm-then-pmo-selects-the-final-developer) | During IN_REVIEW, PMO and the assigned department's TM/EM build a shortlist not visible to the PM, then PMO selects the final developer | Allocation Requests | functional | high |
| [TC-ALCTKT-039](#tc-alctkt-039-on-click-of-save-approve-for-any-ticket-action-a-confirmation-dialog-appears-before-the-change-is-applied) | On click of Save/Approve for any ticket action, a confirmation dialog appears before the change is applied | Allocation Requests | functional | high |
| [TC-ALCTKT-040](#tc-alctkt-040-pmo-requests-page-shows-every-ticket-org-wide-with-pmo-specific-search-ticket-id-project-pm-developer-and-filters-department-tech-stack-pm) | PMO Requests page shows every ticket org-wide with PMO-specific search (ticket ID/project/PM/developer) and filters (department, tech-stack, PM) | Allocation Requests | functional | high |
| [TC-ALCTKT-041](#tc-alctkt-041-pmo-requests-page-s-pending-actions-section-aggregates-awaiting-acknowledgement-tickets-de-allocation-reminders-and-failed-auto-applies) | PMO Requests page's Pending Actions section aggregates awaiting-acknowledgement tickets, de-allocation reminders, and failed auto-applies | Allocation Requests | functional | high |
| [TC-ALCTKT-042](#tc-alctkt-042-approver-tm-em-department-requests-tab-is-scoped-to-their-department-s-with-a-pending-my-approval-sub-view-of-awaiting-confirmation-tickets) | Approver (TM/EM) Department Requests tab is scoped to their department(s), with a Pending My Approval sub-view of AWAITING_CONFIRMATION tickets | Allocation Requests | functional | high |
| [TC-ALCTKT-043](#tc-alctkt-043-a-dual-role-pm-tm-user-sees-two-independently-scoped-tabs-my-requests-and-department-requests-with-no-data-bleed) | A dual-role (PM+TM) user sees two independently-scoped tabs — 'My Requests' and 'Department Requests' — with no data bleed | Allocation Requests | functional | high |
| [TC-ALCTKT-044](#tc-alctkt-044-a-dual-role-pm-rm-user-sees-a-single-ticket-table-only-since-rm-has-no-approval-queue) | A dual-role (PM+RM) user sees a single ticket table only, since RM has no approval queue | Allocation Requests | functional | high |
| [TC-ALCTKT-045](#tc-alctkt-045-pmo-direct-allocation-add-allocation-creates-a-projectassignment-directly-with-no-ticket-shortlist-or-approval-step-and-notifies-all-4-recipients) | PMO Direct Allocation (Add Allocation) creates a ProjectAssignment directly with no ticket, shortlist, or approval step, and notifies all 4 recipients | Allocation Requests | functional | high |
| [TC-ALCTKT-046](#tc-alctkt-046-tickets-are-never-hard-deleted-cancellation-closure-archival-is-always-soft-delete) | Tickets are never hard-deleted; cancellation/closure/archival is always soft-delete | Allocation Requests | functional | high |
| [TC-ALCTKT-047](#tc-alctkt-047-full-flow-ticket-reaches-approved-only-when-both-pmo-and-tm-em-approvals-are-recorded) | Full-flow ticket reaches APPROVED only when both PMO and TM/EM approvals are recorded | Allocation Requests | functional | high |
| [TC-ALCTKT-048](#tc-alctkt-048-editing-ticket-assignment-details-after-either-approval-invalidates-all-approvals-and-reverts-the-ticket-to-awaiting-confirmation) | Editing ticket assignment details after either approval invalidates all approvals and reverts the ticket to AWAITING_CONFIRMATION | Allocation Requests | functional | high |
| [TC-ALCTKT-049](#tc-alctkt-049-pr-reviewer-na-tickets-follow-the-standard-full-approval-lifecycle-but-disallow-bypass-unlike-other-na-request-types) | PR Reviewer NA tickets follow the standard full-approval lifecycle but disallow Bypass, unlike other NA request types | Allocation Requests | functional | high |
| [TC-ALCTKT-050](#tc-alctkt-050-a-soft-deleted-projectassignment-does-not-appear-in-the-ua-developer-dropdown-shortlist-candidate-pools-or-the-duplicate-active-ticket-check) | A soft-deleted ProjectAssignment does not appear in the UA Developer dropdown, shortlist candidate pools, or the duplicate-active-ticket check | Allocation Requests | functional | high |
| [TC-ALCTKT-051](#tc-alctkt-051-a-ticket-rejects-every-structurally-invalid-state-transition-at-both-ui-and-api-level) | A ticket rejects every structurally-invalid state transition at both UI and API level | Allocation Requests | functional | high |
| [TC-ALCTKT-052](#tc-alctkt-052-pmo-s-bypass-approval-requires-no-reason-but-always-records-bypassedat-bypassedbyid-and-notifies-the-bypassed-tm-em) | PMO's Bypass Approval requires no reason but always records bypassedAt/bypassedById and notifies the bypassed TM/EM | Allocation Requests | functional | high |
| [TC-ALCTKT-053](#tc-alctkt-053-ticket-state-summary-tiles-always-sum-to-the-same-total-as-the-unfiltered-ticket-list) | Ticket-state summary tiles always sum to the same total as the unfiltered ticket list | Allocation Requests | functional | high |
| [TC-ALCTKT-054](#tc-alctkt-054-the-requests-table-and-summary-bar-counts-reflect-a-new-ticket-or-state-change-immediately-without-a-manual-page-refresh) | The Requests table and summary-bar counts reflect a new ticket or state change immediately, without a manual page refresh | Allocation Requests | functional | high |
| [TC-ALCTKT-055](#tc-alctkt-055-paginated-requests-tables-do-not-duplicate-or-drop-tickets-across-100-200-300-page-size-navigation) | Paginated Requests tables do not duplicate or drop tickets across 100/200/300 page-size navigation | Allocation Requests | functional | high |
| [TC-ALCTKT-056](#tc-alctkt-056-sorting-the-requests-table-produces-a-stable-order-even-for-rows-with-identical-sort-key-values) | Sorting the Requests table produces a stable order even for rows with identical sort-key values | Allocation Requests | functional | high |
| [TC-ALCTKT-057](#tc-alctkt-057-applying-requests-table-filters-updates-both-the-displayed-tickets-and-the-summary-bar-counts-together) | Applying Requests-table filters updates both the displayed tickets and the summary-bar counts together | Allocation Requests | functional | high |
| [TC-ALCTKT-058](#tc-alctkt-058-negative-pm-attempts-to-select-or-change-the-department-on-any-ticket) | Negative — PM attempts to select or change the department on any ticket | Allocation Requests | negative | high |
| [TC-ALCTKT-059](#tc-alctkt-059-negative-pm-attempts-to-close-a-ticket-that-has-already-reached-approved) | Negative — PM attempts to close a ticket that has already reached APPROVED | Allocation Requests | negative | high |
| [TC-ALCTKT-060](#tc-alctkt-060-negative-tm-em-attempts-to-reject-a-lighter-flow-ua-decrease-de-allocation-ticket) | Negative — TM/EM attempts to reject a lighter-flow (UA decrease/de-allocation) ticket | Allocation Requests | negative | high |
| [TC-ALCTKT-061](#tc-alctkt-061-negative-a-non-pmo-role-pm-tm-em-rm-attempts-to-use-bypass-approval-or-add-allocation-via-ui-or-direct-api-call) | Negative — A non-PMO role (PM, TM, EM, RM) attempts to use Bypass Approval or Add Allocation, via UI or direct API call | Allocation Requests | negative | high |
| [TC-ALCTKT-062](#tc-alctkt-062-negative-user-attempts-to-convert-a-dynamic-allocation-to-fixed-via-update-allocation) | Negative — User attempts to convert a Dynamic allocation to Fixed via Update Allocation | Allocation Requests | negative | high |
| [TC-ALCTKT-063](#tc-alctkt-063-negative-user-attempts-to-change-the-technology-stack-on-a-replacement-request) | Negative — User attempts to change the technology stack on a Replacement request | Allocation Requests | negative | high |
| [TC-ALCTKT-064](#tc-alctkt-064-negative-pm-attempts-to-create-a-second-ua-ticket-for-an-employee-project-combination-that-already-has-an-active-ticket) | Negative — PM attempts to create a second UA ticket for an employee+project combination that already has an active ticket | Allocation Requests | negative | high |
| [TC-ALCTKT-065](#tc-alctkt-065-negative-a-user-attempts-to-approve-a-full-flow-ticket-that-already-reached-approved-or-a-ticket-that-is-closed) | Negative — A user attempts to approve a full-flow ticket that already reached APPROVED, or a ticket that is CLOSED | Allocation Requests | negative | high |
| [TC-ALCTKT-066](#tc-alctkt-066-negative-pmo-attempts-to-assign-department-shortlist-select-final-developer-on-a-ua-increase-ticket-full-flow-no-department-selection-or-shortlist-step) | Negative — PMO attempts to Assign Department / Shortlist / Select Final Developer on a UA increase ticket (full flow, no department selection or shortlist step) | Allocation Requests | negative | high |
| [TC-ALCTKT-067](#tc-alctkt-067-negative-a-pm-attempts-to-view-a-ticket-belonging-to-a-project-they-do-not-manage) | Negative — A PM attempts to view a ticket belonging to a project they do not manage | Allocation Requests | negative | high |
| [TC-ALCTKT-068](#tc-alctkt-068-negative-tm-attempts-to-approve-reject-a-ticket-assigned-to-a-department-other-than-their-own) | Negative — TM attempts to approve/reject a ticket assigned to a department other than their own | Allocation Requests | negative | high |
| [TC-ALCTKT-069](#tc-alctkt-069-negative-pmo-attempts-to-select-a-final-developer-whose-current-availability-is-less-than-the-ticket-s-requested-allocation-percentage) | Negative — PMO attempts to select a final developer whose current availability is less than the ticket's requested allocation percentage | Allocation Requests | negative | high |
| [TC-ALCTKT-070](#tc-alctkt-070-negative-a-user-attempts-to-submit-a-ua-decrease-de-allocation-ticket-at-70-relative-reduction-without-filling-all-four-ratings-and-the-de-allocation-reason) | Negative — A user attempts to submit a UA decrease/de-allocation ticket at ≥70% relative reduction without filling all four ratings and the De-allocation Reason | Allocation Requests | negative | high |
| [TC-ALCTKT-071](#tc-alctkt-071-submitting-the-na-form-with-each-required-field-individually-left-blank-shows-the-correct-inline-error) | Submitting the NA form with each required field individually left blank shows the correct inline error | Allocation Requests | negative | medium |
| [TC-ALCTKT-072](#tc-alctkt-072-entering-a-non-integer-value-in-allocation-percentage-is-rejected-as-an-invalid-format) | Entering a non-integer value in Allocation Percentage is rejected as an invalid format | Allocation Requests | negative | medium |
| [TC-ALCTKT-073](#tc-alctkt-073-submitting-developer-feedback-containing-only-whitespace-is-treated-as-empty) | Submitting Developer Feedback containing only whitespace is treated as empty | Allocation Requests | negative | medium |
| [TC-ALCTKT-074](#tc-alctkt-074-entering-a-value-one-character-beyond-de-allocation-reason-s-fixed-option-constraint-is-rejected) | Entering a value one character beyond De-allocation Reason's fixed-option constraint is rejected | Allocation Requests | negative | medium |
| [TC-ALCTKT-075](#tc-alctkt-075-entering-allocation-percentage-below-the-documented-minimum-0-for-na-is-rejected) | Entering Allocation Percentage below the documented minimum (0 for NA) is rejected | Allocation Requests | negative | medium |
| [TC-ALCTKT-076](#tc-alctkt-076-entering-xss-script-payloads-into-free-text-fields-is-sanitized-and-does-not-execute) | Entering XSS/script payloads into free-text fields is sanitized and does not execute | Allocation Requests | negative | medium |
| [TC-ALCTKT-077](#tc-alctkt-077-attempting-to-raise-a-ticket-with-duplicate-identifying-data-is-prevented) | Attempting to raise a ticket with duplicate identifying data is prevented | Allocation Requests | negative | medium |
| [TC-ALCTKT-078](#tc-alctkt-078-attempting-an-invalid-ticket-status-transition-e-g-closed-back-to-open-without-a-defined-restore-path-is-rejected) | Attempting an invalid ticket status transition (e.g. Closed back to Open without a defined restore path) is rejected | Allocation Requests | negative | medium |
| [TC-ALCTKT-079](#tc-alctkt-079-refreshing-the-browser-mid-way-through-the-na-ticket-form-does-not-submit-partial-data) | Refreshing the browser mid-way through the NA ticket form does not submit partial data | Allocation Requests | negative | medium |
| [TC-ALCTKT-080](#tc-alctkt-080-clicking-the-create-request-submit-button-3x-rapidly-results-in-exactly-one-operation) | Clicking the Create Request submit button 3x rapidly results in exactly one operation | Allocation Requests | negative | medium |
| [TC-ALCTKT-081](#tc-alctkt-081-when-the-ticket-creation-api-takes-longer-than-expected-a-loading-indicator-is-shown-and-the-ui-does-not-freeze) | When the ticket-creation API takes longer than expected, a loading indicator is shown and the UI does not freeze | Allocation Requests | negative | medium |
| [TC-ALCTKT-082](#tc-alctkt-082-session-expiry-http-401-during-ticket-actions-returns-the-user-to-login-without-data-loss) | Session expiry (HTTP 401) during ticket actions returns the user to login without data loss | Allocation Requests | negative | medium |
| [TC-ALCTKT-083](#tc-alctkt-083-a-permission-denied-response-http-403-on-a-ticket-action-shows-a-user-friendly-message) | A permission-denied response (HTTP 403) on a ticket action shows a user-friendly message | Allocation Requests | negative | medium |
| [TC-ALCTKT-084](#tc-alctkt-084-navigating-to-a-non-existent-ticket-id-shows-a-not-found-page-not-a-blank-screen) | Navigating to a non-existent ticket ID shows a not-found page, not a blank screen | Allocation Requests | negative | medium |
| [TC-ALCTKT-085](#tc-alctkt-085-a-server-error-http-500-during-ticket-submission-shows-a-user-friendly-error-toast-not-a-raw-stack-trace) | A server error (HTTP 500) during ticket submission shows a user-friendly error toast, not a raw stack trace | Allocation Requests | negative | medium |
| [TC-ALCTKT-086](#tc-alctkt-086-a-service-unavailable-response-http-503-shows-a-maintenance-retry-message) | A service-unavailable response (HTTP 503) shows a maintenance/retry message | Allocation Requests | negative | medium |
| [TC-ALCTKT-087](#tc-alctkt-087-if-a-retryable-ticket-action-fails-the-ui-offers-a-retry-option-without-a-full-page-reload) | If a retryable ticket action fails, the UI offers a retry option without a full page reload | Allocation Requests | negative | medium |
| [TC-ALCTKT-088](#tc-alctkt-088-boundary-allocation-percentage-na-ticket-integer-1-100-required-only-when-allocation-type-fixed-not-applicable-for-dynamic) | Boundary — Allocation Percentage (NA ticket): Integer 1–100, required only when Allocation Type = Fixed; not applicable for Dynamic | Allocation Requests | boundary | medium |
| [TC-ALCTKT-089](#tc-alctkt-089-boundary-new-allocation-percentage-ua-ticket-integer-0-100-0-full-deallocation-disabled-for-dynamic-allocations-the-update-allocation-action-sets-0-internally) | Boundary — New Allocation Percentage (UA ticket): Integer 0–100 (0 = full deallocation); disabled for Dynamic allocations — the Update Allocation action sets 0% internally | Allocation Requests | boundary | medium |
| [TC-ALCTKT-090](#tc-alctkt-090-boundary-relative-reduction-current-new-current-0-70-triggers-mandatory-de-allocation-reason-4-ratings-open-to-work-with-again) | Boundary — Relative Reduction: (current% − new%) ÷ current% ≥ 0.70 triggers mandatory De-allocation Reason + 4 ratings + Open to Work With Again | Allocation Requests | boundary | medium |
| [TC-ALCTKT-091](#tc-alctkt-091-boundary-de-allocation-reason-required-when-new-allocation-percentage-0-or-relative-reduction-70-allowed-values-project-closure-performance-issues-role-misalignment-downsizing) | Boundary — De-allocation Reason: Required when New Allocation Percentage = 0 or relative reduction ≥70%; allowed values: Project Closure / Performance Issues / Role Misalignment / Downsizing | Allocation Requests | boundary | medium |
| [TC-ALCTKT-092](#tc-alctkt-092-boundary-core-skill-communication-attitude-justice-to-role-rating-integer-1-10-each-required-under-the-same-0-70-condition-as-de-allocation-reason) | Boundary — Core Skill / Communication / Attitude / Justice to Role Rating: Integer 1–10, each required under the same 0%/≥70% condition as De-allocation Reason | Allocation Requests | boundary | medium |
| [TC-ALCTKT-093](#tc-alctkt-093-boundary-open-to-work-with-again-yes-no-required-under-the-same-0-70-condition) | Boundary — Open to Work With Again: Yes/No, required under the same 0%/≥70% condition | Allocation Requests | boundary | medium |
| [TC-ALCTKT-094](#tc-alctkt-094-boundary-developer-feedback-optional-free-text-shown-under-the-same-0-70-condition) | Boundary — Developer Feedback: Optional free text, shown under the same 0%/≥70% condition | Allocation Requests | boundary | medium |
| [TC-ALCTKT-095](#tc-alctkt-095-boundary-ticket-number-zero-padded-4-digit-sequential-integer-per-type-na-0001-ua-0001-no-yearly-reset-system-generated-via-na-ticket-seq-ua-ticket-seq) | Boundary — Ticket Number: Zero-padded 4-digit sequential integer per type (NA-0001, UA-0001); no yearly reset; system-generated via na_ticket_seq/ua_ticket_seq | Allocation Requests | boundary | medium |
| [TC-ALCTKT-096](#tc-alctkt-096-boundary-preferred-seniority-enum-junior-mid-senior-lead) | Boundary — Preferred Seniority: Enum: Junior / Mid / Senior / Lead | Allocation Requests | boundary | medium |
| [TC-ALCTKT-097](#tc-alctkt-097-boundary-start-date-na-ticket-cannot-be-in-the-past-today) | Boundary — Start Date (NA ticket): Cannot be in the past (>= today) | Allocation Requests | boundary | medium |
| [TC-ALCTKT-098](#tc-alctkt-098-boundary-end-date-na-ticket-optional-must-be-after-start-date-if-provided) | Boundary — End Date (NA ticket): Optional; must be after Start Date if provided | Allocation Requests | boundary | medium |
| [TC-ALCTKT-099](#tc-alctkt-099-boundary-new-start-date-new-end-date-ua-ticket-optional-leave-blank-to-keep-current-value) | Boundary — New Start Date / New End Date (UA ticket): Optional; leave blank to keep current value | Allocation Requests | boundary | medium |
| [TC-ALCTKT-100](#tc-alctkt-100-boundary-developer-preference-optional-dropdown-of-any-active-employee) | Boundary — Developer Preference: Optional dropdown of any active employee | Allocation Requests | boundary | medium |
| [TC-ALCTKT-101](#tc-alctkt-101-boundary-replacement-type-required-on-replacement-requests-enum-permanent-temporary) | Boundary — Replacement Type: Required on Replacement requests; enum Permanent / Temporary | Allocation Requests | boundary | medium |
| [TC-ALCTKT-102](#tc-alctkt-102-boundary-replacement-reason-required-on-replacement-requests-values-performance-issues-role-misalignment-long-leaves-allocation-optimisation) | Boundary — Replacement Reason: Required on Replacement requests; values: Performance Issues / Role Misalignment / Long leaves / Allocation optimisation | Allocation Requests | boundary | medium |
| [TC-ALCTKT-103](#tc-alctkt-103-boundary-replacement-department-tech-stack-pre-populated-from-the-original-developer-s-assignment-and-non-editable-on-replacement-requests) | Boundary — Replacement department & tech stack: Pre-populated from the original developer's assignment and non-editable on Replacement requests | Allocation Requests | boundary | medium |
| [TC-ALCTKT-104](#tc-alctkt-104-boundary-new-allocation-type-ua-a-dynamic-allocation-cannot-be-converted-to-fixed-via-ua-changing-to-fixed-requires-raising-a-new-fixed-na-ticket-instead) | Boundary — New Allocation Type (UA): A Dynamic allocation cannot be converted to Fixed via UA; changing to Fixed requires raising a new Fixed NA ticket instead | Allocation Requests | boundary | medium |
| [TC-ALCTKT-105](#tc-alctkt-105-boundary-interview-required-required-yes-no-flag-informational-only-for-pmo-tm-em-review-not-a-separate-lifecycle-step) | Boundary — Interview Required: Required Yes/No flag (informational only for PMO/TM/EM review; not a separate lifecycle step) | Allocation Requests | boundary | medium |
| [TC-ALCTKT-106](#tc-alctkt-106-boundary-client-facing-required-yes-no-flag) | Boundary — Client Facing: Required Yes/No flag | Allocation Requests | boundary | medium |
| [TC-ALCTKT-107](#tc-alctkt-107-boundary-shadow-for-required-dropdown-developers-currently-on-the-selected-project-when-request-type-shadow-developer) | Boundary — Shadow For: Required dropdown (developers currently on the selected project) when Request Type = Shadow Developer | Allocation Requests | boundary | medium |
| [TC-ALCTKT-108](#tc-alctkt-108-boundary-pr-review-frequency-required-dropdown-frequently-occasionally-rarely-not-at-all-when-request-type-pr-reviewer) | Boundary — PR Review Frequency: Required dropdown (Frequently / Occasionally / Rarely / Not at all) when Request Type = PR Reviewer | Allocation Requests | boundary | medium |
| [TC-ALCTKT-109](#tc-alctkt-109-boundary-primary-tech-stack-required-dropdown-sourced-from-the-simerp-tech-stack-list) | Boundary — Primary Tech Stack: Required dropdown sourced from the SimERP Tech Stack list | Allocation Requests | boundary | medium |
| [TC-ALCTKT-110](#tc-alctkt-110-boundary-project-na-ua-required-dropdown-restricted-to-the-pm-s-active-projects-only) | Boundary — Project (NA/UA): Required dropdown restricted to the PM's active projects only | Allocation Requests | boundary | medium |
| [TC-ALCTKT-111](#tc-alctkt-111-boundary-developer-ua-required-dropdown-restricted-to-developers-currently-allocated-to-the-selected-project-doc-footnote-states-an-exception-except-for-pm-whose-exact-meaning-is-unconfirmed-see-unclear) | Boundary — Developer (UA): Required dropdown restricted to developers currently allocated to the selected project (doc footnote states an exception '(Except for PM)' whose exact meaning is unconfirmed — see unclear[]) | Allocation Requests | boundary | medium |
| [TC-ALCTKT-112](#tc-alctkt-112-boundary-edge-case-relative-reduction-computed-exactly-at-the-70-boundary-e-g-100-30-or-50-15-per-the-doc-s-own-example) | Boundary/edge case — Relative reduction computed exactly at the 70% boundary (e.g. 100%→30%, or 50%→15% per the doc's own example) ... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-113](#tc-alctkt-113-boundary-edge-case-new-allocation-percentage-set-to-exactly-0-must-surface-the-ratings-feedback-de-allocation-reason-fields-even) | Boundary/edge case — New Allocation Percentage set to exactly 0 must surface the ratings/feedback/de-allocation-reason fields even ... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-114](#tc-alctkt-114-boundary-edge-case-a-dynamic-allocation-s-update-allocation-action-must-always-route-through-the-lighter-acknowledgement-flow-ev) | Boundary/edge case — A dynamic allocation's Update Allocation action must always route through the lighter acknowledgement flow, ev... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-115](#tc-alctkt-115-boundary-edge-case-attempting-to-raise-a-second-ua-ticket-for-the-same-employee-project-combination-while-one-is-already-active) | Boundary/edge case — Attempting to raise a second UA ticket for the same employee+project combination while one is already active (... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-116](#tc-alctkt-116-boundary-edge-case-adding-a-developer-to-a-shortlist-who-is-already-shortlisted-on-another-active-ticket-must-show-a-non-blocking) | Boundary/edge case — Adding a developer to a shortlist who is already shortlisted on another active ticket must show a non-blocking... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-117](#tc-alctkt-117-boundary-edge-case-if-a-ticket-s-assignment-details-are-modified-after-one-or-both-approval-parties-have-approved-both-approvals) | Boundary/edge case — If a ticket's assignment details are modified after one or both approval parties have approved, both approvals... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-118](#tc-alctkt-118-boundary-edge-case-if-the-target-projectassignment-was-soft-deleted-by-a-different-concurrently-approved-ticket-before-this-tick) | Boundary/edge case — If the target ProjectAssignment was soft-deleted by a different, concurrently-approved ticket before this tick... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-119](#tc-alctkt-119-boundary-edge-case-pr-reviewer-na-tickets-must-not-have-a-bypass-approval-option-available-to-pmo-unlike-fresh-allocation-shadow) | Boundary/edge case — PR Reviewer NA tickets must not have a Bypass Approval option available to PMO, unlike Fresh Allocation/Shadow... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-120](#tc-alctkt-120-boundary-edge-case-on-na-ua-approval-a-pr-reviewer-request-type-must-not-create-a-normal-projectassignment-it-must-be-recorded) | Boundary/edge case — On NA/UA approval, a PR Reviewer request type must not create a normal ProjectAssignment — it must be recorded... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-121](#tc-alctkt-121-boundary-edge-case-if-the-pm-assigned-to-a-project-changes-via-the-nightly-zoho-sync-all-existing-tickets-for-that-project-must) | Boundary/edge case — If the PM assigned to a project changes via the nightly Zoho sync, all existing tickets for that project must ... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-122](#tc-alctkt-122-boundary-edge-case-an-unmatched-projectmanageremail-during-the-nightly-zoho-project-metadata-sync-must-leave-project-projectmanag) | Boundary/edge case — An unmatched projectManagerEmail during the nightly Zoho PROJECT_METADATA sync must leave Project.projectManag... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-123](#tc-alctkt-123-boundary-edge-case-a-pmo-direct-allocation-add-allocation-must-succeed-with-no-ticket-no-shortlist-and-no-approval-step-whil) | Boundary/edge case — A PMO Direct Allocation (Add Allocation) must succeed with no ticket, no shortlist, and no approval step, whil... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-124](#tc-alctkt-124-boundary-edge-case-a-shared-ticket-detail-url-e-g-allocation-tickets-na-0042-opened-by-a-user-without-casl-visibility-to-that) | Boundary/edge case — A shared ticket detail URL (e.g. /allocation-tickets/NA-0042) opened by a user without CASL visibility to that... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-125](#tc-alctkt-125-boundary-edge-case-changing-a-replacement-request-s-technology-stack-a-scope-swap-must-be-blocked-disallowed-on-the-replaceme) | Boundary/edge case — Changing a Replacement request's technology stack (a 'scope swap') must be blocked/disallowed on the replaceme... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-126](#tc-alctkt-126-boundary-edge-case-carried-forward-from-the-kt-transcript-unconfirmed-against-the-finalized-doc-non-blocking-see-unclear-t) | Boundary/edge case — Carried forward from the KT transcript, unconfirmed against the finalized doc (non-blocking, see unclear[]): t... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-127](#tc-alctkt-127-boundary-edge-case-carried-forward-from-the-kt-transcript-unconfirmed-against-the-finalized-doc-non-blocking-see-unclear-t) | Boundary/edge case — Carried forward from the KT transcript, unconfirmed against the finalized doc (non-blocking, see unclear[]): t... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-128](#tc-alctkt-128-boundary-edge-case-ticket-state-count-tiles-open-in-review-awaiting-confirmation-approved-closed-on-pmo-requests-pm-requests) | Boundary/edge case — Ticket-state count tiles (Open/In Review/Awaiting Confirmation/Approved/Closed) on PMO Requests, PM Requests, ... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-129](#tc-alctkt-129-boundary-edge-case-create-an-na-or-ua-ticket-via-the-ui-then-fetch-the-same-ticket-via-its-api-endpoint-and-confirm-ticket-type) | Boundary/edge case — Create an NA or UA ticket via the UI, then fetch the same ticket via its API endpoint and confirm ticket type,... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-130](#tc-alctkt-130-boundary-edge-case-double-click-or-rapidly-re-submit-the-create-request-na-ua-replacement-form-and-verify-only-the-expected-num) | Boundary/edge case — Double-click or rapidly re-submit the Create Request (NA/UA/Replacement) form and verify only the expected num... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-131](#tc-alctkt-131-boundary-edge-case-a-soft-deleted-archived-projectassignment-must-not-appear-in-the-ua-ticket-s-developer-dropdown-in-shortl) | Boundary/edge case — A soft-deleted (archived) ProjectAssignment must not appear in the UA ticket's 'Developer' dropdown, in shortl... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-132](#tc-alctkt-132-boundary-edge-case-each-role-s-permitted-forbidden-ticket-actions-pm-raise-close-only-tm-em-department-scoped-shortlist-approve) | Boundary/edge case — Each role's permitted/forbidden ticket actions (PM raise/close-only; TM/EM department-scoped shortlist/approve... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-133](#tc-alctkt-133-boundary-edge-case-attempt-every-structurally-invalid-ticket-transition-e-g-open-directly-to-approved-in-review-directly-to-cl) | Boundary/edge case — Attempt every structurally-invalid ticket transition (e.g. OPEN directly to APPROVED, IN_REVIEW directly to CL... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-134](#tc-alctkt-134-boundary-edge-case-after-a-pmo-direct-allocation-a-ticket-state-transition-or-a-new-ticket-creation-the-requests-table-and-its) | Boundary/edge case — After a PMO Direct Allocation, a ticket state transition, or a new ticket creation, the Requests table and its... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-135](#tc-alctkt-135-boundary-edge-case-create-enough-tickets-to-exceed-one-page-at-the-100-items-per-page-setting-and-verify-navigating-to-page-2-sho) | Boundary/edge case — Create enough tickets to exceed one page at the 100-items-per-page setting and verify navigating to page 2 sho... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-136](#tc-alctkt-136-boundary-edge-case-sort-the-requests-table-by-ticket-id-created-date-and-last-updated-with-multiple-tickets-sharing-identical-v) | Boundary/edge case — Sort the Requests table by Ticket ID, Created Date, and Last Updated with multiple tickets sharing identical v... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-137](#tc-alctkt-137-boundary-edge-case-apply-a-filter-combination-e-g-state-closed-type-na-a-date-range-with-no-matching-tickets-that-matches) | Boundary/edge case — Apply a filter combination (e.g. state=Closed + type=NA + a date range with no matching tickets) that matches ... | Allocation Requests | boundary | medium |
| [TC-ALCTKT-138](#tc-alctkt-138-a-ua-ticket-for-an-employee-project-combination-with-an-existing-active-ticket-is-blocked-the-same-is-not-true-for-na) | A UA ticket for an employee+project combination with an existing active ticket is blocked; the same is not true for NA | Allocation Requests | boundary | high |
| [TC-ALCTKT-139](#tc-alctkt-139-submitting-the-create-request-form-twice-in-quick-succession-does-not-create-duplicate-tickets-beyond-the-number-of-resources-requested) | Submitting the Create Request form twice in quick succession does not create duplicate tickets beyond the number of resources requested | Allocation Requests | boundary | high |
| [TC-ALCTKT-140](#tc-alctkt-140-pm-cannot-assign-change-department-on-a-ticket) | PM cannot: assign/change department on a ticket | Allocation Requests | security | high |
| [TC-ALCTKT-141](#tc-alctkt-141-pm-cannot-shortlist-or-view-the-shortlist) | PM cannot: shortlist or view the shortlist | Allocation Requests | security | high |
| [TC-ALCTKT-142](#tc-alctkt-142-pm-cannot-approve-reject-bypass-or-acknowledge-any-ticket) | PM cannot: approve, reject, bypass, or acknowledge any ticket | Allocation Requests | security | high |
| [TC-ALCTKT-143](#tc-alctkt-143-pm-cannot-edit-an-allocation-directly-no-inline-editing) | PM cannot: edit an allocation directly (no inline editing) | Allocation Requests | security | high |
| [TC-ALCTKT-144](#tc-alctkt-144-pm-cannot-view-tickets-for-projects-they-do-not-manage) | PM cannot: view tickets for projects they do not manage | Allocation Requests | security | high |
| [TC-ALCTKT-145](#tc-alctkt-145-pm-cannot-convert-a-dynamic-allocation-to-fixed-via-ua) | PM cannot: convert a Dynamic allocation to Fixed via UA | Allocation Requests | security | high |
| [TC-ALCTKT-146](#tc-alctkt-146-pmo-cannot-reject-a-lighter-flow-decrease-de-allocation-ticket-acknowledgement-only) | PMO cannot: reject a lighter-flow (decrease/de-allocation) ticket — acknowledgement only | Allocation Requests | security | high |
| [TC-ALCTKT-147](#tc-alctkt-147-pmo-cannot-combine-the-pmo-role-with-rm-tm-em-standalone-role) | PMO cannot: combine the PMO role with RM/TM/EM (standalone role) | Allocation Requests | security | high |
| [TC-ALCTKT-148](#tc-alctkt-148-tm-cannot-assign-change-department-on-a-ticket) | TM cannot: assign/change department on a ticket | Allocation Requests | security | high |
| [TC-ALCTKT-149](#tc-alctkt-149-tm-cannot-act-on-tickets-outside-their-own-department) | TM cannot: act on tickets outside their own department | Allocation Requests | security | high |
| [TC-ALCTKT-150](#tc-alctkt-150-tm-cannot-bypass-pmo-s-or-their-own-approval-requirement) | TM cannot: bypass PMO's or their own approval requirement | Allocation Requests | security | high |
| [TC-ALCTKT-151](#tc-alctkt-151-tm-cannot-act-on-lighter-flow-decrease-de-allocation-tickets-pmo-only) | TM cannot: act on lighter-flow (decrease/de-allocation) tickets — PMO-only | Allocation Requests | security | high |
| [TC-ALCTKT-152](#tc-alctkt-152-em-cannot-assign-change-department-on-a-ticket) | EM cannot: assign/change department on a ticket | Allocation Requests | security | high |
| [TC-ALCTKT-153](#tc-alctkt-153-em-cannot-act-on-tickets-outside-departments-they-manage) | EM cannot: act on tickets outside departments they manage | Allocation Requests | security | high |
| [TC-ALCTKT-154](#tc-alctkt-154-em-cannot-bypass-pmo-s-approval-requirement) | EM cannot: bypass PMO's approval requirement | Allocation Requests | security | high |
| [TC-ALCTKT-155](#tc-alctkt-155-em-cannot-act-on-lighter-flow-tickets-pmo-only) | EM cannot: act on lighter-flow tickets — PMO-only | Allocation Requests | security | high |
| [TC-ALCTKT-156](#tc-alctkt-156-rm-cannot-raise-view-approve-reject-bypass-or-acknowledge-any-allocation-ticket) | RM cannot: raise, view, approve, reject, bypass, or acknowledge any allocation ticket | Allocation Requests | security | high |
| [TC-ALCTKT-157](#tc-alctkt-157-rm-cannot-access-pm-projects-or-requests-pages-no-pm-pmo-tm-em-role) | RM cannot: access PM Projects or Requests pages (no PM/PMO/TM/EM role) | Allocation Requests | security | high |
| [TC-ALCTKT-158](#tc-alctkt-158-employee-cannot-initiate-view-or-act-on-any-allocation-ticket) | Employee cannot: initiate, view, or act on any allocation ticket | Allocation Requests | security | high |
| [TC-ALCTKT-159](#tc-alctkt-159-employee-cannot-view-another-employee-s-deallocation-ratings) | Employee cannot: view another employee's deallocation ratings | Allocation Requests | security | high |
| [TC-ALCTKT-160](#tc-alctkt-160-security-a-pm-attempts-to-open-another-pm-s-project-ticket-via-direct-url-manipulation-e-g-allocation-tickets-ua-0099-for-a-project-they-don-t-manage) | Security — A PM attempts to open another PM's project ticket via direct URL manipulation (e.g. /allocation-tickets/UA-0099 for a project they don't manage) | Allocation Requests | security | critical |
| [TC-ALCTKT-161](#tc-alctkt-161-security-a-tm-em-attempts-to-call-the-approve-reject-acknowledge-endpoints-for-a-ticket-outside-their-department-via-direct-api-request-bypassing-the-ui-s-disabled-hidden-controls) | Security — A TM/EM attempts to call the approve/reject/acknowledge endpoints for a ticket outside their department via direct API request, bypassing the UI's disabled/hidden controls | Allocation Requests | security | critical |
| [TC-ALCTKT-162](#tc-alctkt-162-security-free-text-fields-developer-feedback-are-submitted-with-script-html-payloads) | Security — Free-text fields (Developer Feedback) are submitted with script/HTML payloads | Allocation Requests | security | critical |
| [TC-ALCTKT-163](#tc-alctkt-163-security-a-role-other-than-rm-tm-em-admin-pmo-for-that-developer-e-g-another-employee-or-a-pm-who-did-not-add-the-rating-attempts-to-view-deallocation-ratings-on-a-ticket) | Security — A role other than RM/TM/EM/Admin/PMO for that developer (e.g. another employee, or a PM who did not add the rating) attempts to view deallocation ratings on a ticket | Allocation Requests | security | critical |
| [TC-ALCTKT-164](#tc-alctkt-164-security-an-employee-role-user-attempts-to-access-the-pm-projects-or-requests-pages-directly-by-url) | Security — An Employee-role user attempts to access the PM Projects or Requests pages directly by URL | Allocation Requests | security | critical |
| [TC-ALCTKT-165](#tc-alctkt-165-security-pmo-bypass-and-add-allocation-actions-are-performed) | Security — PMO Bypass and Add Allocation actions are performed | Allocation Requests | security | critical |
| [TC-ALCTKT-166](#tc-alctkt-166-security-a-shared-ticket-detail-url-is-opened-by-a-recipient-named-in-a-notification-but-who-has-since-lost-casl-visibility-to-that-ticket-project-e-g-role-changed) | Security — A shared ticket detail URL is opened by a recipient named in a notification but who has since lost CASL visibility to that ticket/project (e.g. role changed) | Allocation Requests | security | critical |
| [TC-ALCTKT-167](#tc-alctkt-167-only-pmo-holds-the-add-allocation-casl-permission-pm-tm-and-rm-are-denied-it-regardless-of-any-other-role-held) | Only PMO holds the Add Allocation CASL permission; PM, TM, and RM are denied it regardless of any other role held | Allocation Requests | security | critical |
| [TC-ALCTKT-168](#tc-alctkt-168-ticket-ownership-belongs-to-the-project-not-the-raising-pm-a-pm-change-via-nightly-zoho-sync-transfers-ticket-visibility-to-the-new-pm) | Ticket ownership belongs to the project, not the raising PM; a PM change via nightly Zoho sync transfers ticket visibility to the new PM | Allocation Requests | security | critical |
| [TC-ALCTKT-169](#tc-alctkt-169-pm-scope-project-based-visibility-applies-only-within-pm-projects-requests-on-every-other-page-only-the-paired-org-hierarchy-role-s-scope-applies) | PM scope (project-based visibility) applies only within PM Projects/Requests; on every other page only the paired org-hierarchy role's scope applies | Allocation Requests | security | critical |
| [TC-ALCTKT-170](#tc-alctkt-170-every-role-action-boundary-pm-raise-close-only-tm-em-department-scoped-shortlist-approve-reject-pmo-org-wide-assign-bypass-acknowledge-direct-allocate-is-enforced-at-both-ui-and-api-403-level) | Every role/action boundary (PM raise/close-only, TM/EM department-scoped shortlist/approve/reject, PMO org-wide assign/bypass/acknowledge/direct-allocate) is enforced at both UI and API (403) level | Allocation Requests | security | critical |
| [TC-ALCTKT-171](#tc-alctkt-171-regression-empdet-high-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — EMPDET (high risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-172](#tc-alctkt-172-regression-deptset-medium-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — DEPTSET (medium risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-173](#tc-alctkt-173-regression-projtch-medium-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — PROJTCH (medium risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-174](#tc-alctkt-174-regression-admrol-critical-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — ADMROL (critical risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-175](#tc-alctkt-175-regression-pmproj-high-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — PMPROJ (high risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-176](#tc-alctkt-176-regression-teamdet-medium-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — TEAMDET (medium risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-177](#tc-alctkt-177-regression-empalc-medium-risk-existing-functionality-unaffected-by-alctkt-changes) | Regression — EMPALC (medium risk): existing functionality unaffected by ALCTKT changes | Allocation Requests | regression | high |
| [TC-ALCTKT-178](#tc-alctkt-178-ui-displayed-ticket-allocation-values-match-the-api-response-after-save) | UI-displayed ticket/allocation values match the API response after save | Allocation Requests | regression | high |
| [TC-ALCTKT-179](#tc-alctkt-179-ticket-counts-on-the-summary-bar-list-view-and-api-total-field-are-all-equal) | Ticket counts on the summary bar, list view, and API total field are all equal | Allocation Requests | regression | high |
| [TC-ALCTKT-180](#tc-alctkt-180-a-newly-created-ticket-is-present-in-the-list-after-a-full-page-refresh-f5) | A newly created ticket is present in the list after a full page refresh (F5) | Allocation Requests | regression | high |
| [TC-ALCTKT-181](#tc-alctkt-181-updated-ticket-allocation-field-values-are-correct-after-a-full-page-refresh) | Updated ticket/allocation field values are correct after a full page refresh | Allocation Requests | regression | high |
| [TC-ALCTKT-182](#tc-alctkt-182-a-closed-approved-then-soft-deleted-projectassignment-is-absent-from-the-active-allocation-list-without-requiring-a-refresh) | A closed/approved-then-soft-deleted ProjectAssignment is absent from the active allocation list without requiring a refresh | Allocation Requests | regression | high |
| [TC-ALCTKT-183](#tc-alctkt-183-assignment-deallocation-counts-increment-decrement-by-exactly-1-in-both-ui-and-api) | Assignment/deallocation counts increment/decrement by exactly 1 in both UI and API | Allocation Requests | regression | high |
| [TC-ALCTKT-184](#tc-alctkt-184-integration-alctkt-empdet) | Integration — ALCTKT ↔ EMPDET | Allocation Requests | integration | high |
| [TC-ALCTKT-185](#tc-alctkt-185-integration-alctkt-deptset) | Integration — ALCTKT ↔ DEPTSET | Allocation Requests | integration | high |
| [TC-ALCTKT-186](#tc-alctkt-186-integration-alctkt-projtch) | Integration — ALCTKT ↔ PROJTCH | Allocation Requests | integration | high |
| [TC-ALCTKT-187](#tc-alctkt-187-integration-alctkt-admrol) | Integration — ALCTKT ↔ ADMROL | Allocation Requests | integration | high |
| [TC-ALCTKT-188](#tc-alctkt-188-integration-alctkt-pmproj) | Integration — ALCTKT ↔ PMPROJ | Allocation Requests | integration | high |
| [TC-ALCTKT-189](#tc-alctkt-189-integration-alctkt-teamdet) | Integration — ALCTKT ↔ TEAMDET | Allocation Requests | integration | high |
| [TC-ALCTKT-190](#tc-alctkt-190-integration-alctkt-empalc) | Integration — ALCTKT ↔ EMPALC | Allocation Requests | integration | high |
| [TC-ALCTKT-191](#tc-alctkt-191-integration-nightly-zoho-project-metadata-sync-correctly-updates-project-projectmanagerid-consumed-by-pm-projects-requests-scoping) | Integration — nightly Zoho PROJECT_METADATA sync correctly updates Project.projectManagerId consumed by PM Projects/Requests scoping | Allocation Requests | integration | medium |

---

## Allocation Requests

191 test cases.

### Boundary (52)

#### TC-ALCTKT-088 — Boundary — Allocation Percentage (NA ticket): Integer 1–100, required only when Allocation Type = Fixed; not applicable for Dynamic

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[0]: Allocation Percentage (NA ticket) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Allocation Percentage (NA ticket) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Integer 1–100, required only when Allocation Type = Fixed; not applicable for Dynamic

**Test Data**

- `field`: Allocation Percentage (NA ticket)
- `rule`: Integer 1–100, required only when Allocation Type = Fixed; not applicable for Dynamic
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-089 — Boundary — New Allocation Percentage (UA ticket): Integer 0–100 (0 = full deallocation); disabled for Dynamic allocations — the Update Allocation action sets 0% internally

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[1]: New Allocation Percentage (UA ticket) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the New Allocation Percentage (UA ticket) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Integer 0–100 (0 = full deallocation); disabled for Dynamic allocations — the Update Allocation action sets 0% internally

**Test Data**

- `field`: New Allocation Percentage (UA ticket)
- `rule`: Integer 0–100 (0 = full deallocation); disabled for Dynamic allocations — the Update Allocation action sets 0% internally
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-090 — Boundary — Relative Reduction: (current% − new%) ÷ current% ≥ 0.70 triggers mandatory De-allocation Reason + 4 ratings + Open to Work With Again

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[2]: Relative Reduction |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Relative Reduction control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: (current% − new%) ÷ current% ≥ 0.70 triggers mandatory De-allocation Reason + 4 ratings + Open to Work With Again

**Test Data**

- `field`: Relative Reduction
- `rule`: (current% − new%) ÷ current% ≥ 0.70 triggers mandatory De-allocation Reason + 4 ratings + Open to Work With Again
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-091 — Boundary — De-allocation Reason: Required when New Allocation Percentage = 0 or relative reduction ≥70%; allowed values: Project Closure / Performance Issues / Role Misalignment / Downsizing

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[3]: De-allocation Reason |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the De-allocation Reason control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required when New Allocation Percentage = 0 or relative reduction ≥70%; allowed values: Project Closure / Performance Issues / Role Misalignment / Downsizing

**Test Data**

- `field`: De-allocation Reason
- `rule`: Required when New Allocation Percentage = 0 or relative reduction ≥70%; allowed values: Project Closure / Performance Issues / Role Misalignment / Downsizing
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-092 — Boundary — Core Skill / Communication / Attitude / Justice to Role Rating: Integer 1–10, each required under the same 0%/≥70% condition as De-allocation Reason

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[4]: Core Skill / Communication / Attitude / Justice to Role Rating |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Core Skill / Communication / Attitude / Justice to Role Rating control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Integer 1–10, each required under the same 0%/≥70% condition as De-allocation Reason

**Test Data**

- `field`: Core Skill / Communication / Attitude / Justice to Role Rating
- `rule`: Integer 1–10, each required under the same 0%/≥70% condition as De-allocation Reason
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-093 — Boundary — Open to Work With Again: Yes/No, required under the same 0%/≥70% condition

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[5]: Open to Work With Again |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Open to Work With Again control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Yes/No, required under the same 0%/≥70% condition

**Test Data**

- `field`: Open to Work With Again
- `rule`: Yes/No, required under the same 0%/≥70% condition
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-094 — Boundary — Developer Feedback: Optional free text, shown under the same 0%/≥70% condition

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[6]: Developer Feedback |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Developer Feedback control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Optional free text, shown under the same 0%/≥70% condition

**Test Data**

- `field`: Developer Feedback
- `rule`: Optional free text, shown under the same 0%/≥70% condition
- `validationType`: sync

#### TC-ALCTKT-095 — Boundary — Ticket Number: Zero-padded 4-digit sequential integer per type (NA-0001, UA-0001); no yearly reset; system-generated via na_ticket_seq/ua_ticket_seq

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[7]: Ticket Number |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Ticket Number control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Zero-padded 4-digit sequential integer per type (NA-0001, UA-0001); no yearly reset; system-generated via na_ticket_seq/ua_ticket_seq

**Test Data**

- `field`: Ticket Number
- `rule`: Zero-padded 4-digit sequential integer per type (NA-0001, UA-0001); no yearly reset; system-generated via na_ticket_seq/ua_ticket_seq
- `validationType`: sync

#### TC-ALCTKT-096 — Boundary — Preferred Seniority: Enum: Junior / Mid / Senior / Lead

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[8]: Preferred Seniority |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Preferred Seniority control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Enum: Junior / Mid / Senior / Lead

**Test Data**

- `field`: Preferred Seniority
- `rule`: Enum: Junior / Mid / Senior / Lead
- `validationType`: sync

#### TC-ALCTKT-097 — Boundary — Start Date (NA ticket): Cannot be in the past (>= today)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[9]: Start Date (NA ticket) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Start Date (NA ticket) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Cannot be in the past (>= today)

**Test Data**

- `field`: Start Date (NA ticket)
- `rule`: Cannot be in the past (>= today)
- `validationType`: sync

#### TC-ALCTKT-098 — Boundary — End Date (NA ticket): Optional; must be after Start Date if provided

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[10]: End Date (NA ticket) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the End Date (NA ticket) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Optional; must be after Start Date if provided

**Test Data**

- `field`: End Date (NA ticket)
- `rule`: Optional; must be after Start Date if provided
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-099 — Boundary — New Start Date / New End Date (UA ticket): Optional; leave blank to keep current value

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[11]: New Start Date / New End Date (UA ticket) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the New Start Date / New End Date (UA ticket) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Optional; leave blank to keep current value

**Test Data**

- `field`: New Start Date / New End Date (UA ticket)
- `rule`: Optional; leave blank to keep current value
- `validationType`: sync

#### TC-ALCTKT-100 — Boundary — Developer Preference: Optional dropdown of any active employee

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[12]: Developer Preference |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Developer Preference control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Optional dropdown of any active employee

**Test Data**

- `field`: Developer Preference
- `rule`: Optional dropdown of any active employee
- `validationType`: sync

#### TC-ALCTKT-101 — Boundary — Replacement Type: Required on Replacement requests; enum Permanent / Temporary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[13]: Replacement Type |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Replacement Type control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required on Replacement requests; enum Permanent / Temporary

**Test Data**

- `field`: Replacement Type
- `rule`: Required on Replacement requests; enum Permanent / Temporary
- `validationType`: sync

#### TC-ALCTKT-102 — Boundary — Replacement Reason: Required on Replacement requests; values: Performance Issues / Role Misalignment / Long leaves / Allocation optimisation

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[14]: Replacement Reason |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Replacement Reason control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required on Replacement requests; values: Performance Issues / Role Misalignment / Long leaves / Allocation optimisation

**Test Data**

- `field`: Replacement Reason
- `rule`: Required on Replacement requests; values: Performance Issues / Role Misalignment / Long leaves / Allocation optimisation
- `validationType`: sync

#### TC-ALCTKT-103 — Boundary — Replacement department & tech stack: Pre-populated from the original developer's assignment and non-editable on Replacement requests

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[15]: Replacement department & tech stack |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Replacement department & tech stack control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Pre-populated from the original developer's assignment and non-editable on Replacement requests

**Test Data**

- `field`: Replacement department & tech stack
- `rule`: Pre-populated from the original developer's assignment and non-editable on Replacement requests
- `validationType`: sync

#### TC-ALCTKT-104 — Boundary — New Allocation Type (UA): A Dynamic allocation cannot be converted to Fixed via UA; changing to Fixed requires raising a new Fixed NA ticket instead

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[16]: New Allocation Type (UA) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the New Allocation Type (UA) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: A Dynamic allocation cannot be converted to Fixed via UA; changing to Fixed requires raising a new Fixed NA ticket instead

**Test Data**

- `field`: New Allocation Type (UA)
- `rule`: A Dynamic allocation cannot be converted to Fixed via UA; changing to Fixed requires raising a new Fixed NA ticket instead
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-105 — Boundary — Interview Required: Required Yes/No flag (informational only for PMO/TM/EM review; not a separate lifecycle step)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[17]: Interview Required |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Interview Required control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required Yes/No flag (informational only for PMO/TM/EM review; not a separate lifecycle step)

**Test Data**

- `field`: Interview Required
- `rule`: Required Yes/No flag (informational only for PMO/TM/EM review; not a separate lifecycle step)
- `validationType`: sync

#### TC-ALCTKT-106 — Boundary — Client Facing: Required Yes/No flag

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[18]: Client Facing |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Client Facing control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required Yes/No flag

**Test Data**

- `field`: Client Facing
- `rule`: Required Yes/No flag
- `validationType`: sync

#### TC-ALCTKT-107 — Boundary — Shadow For: Required dropdown (developers currently on the selected project) when Request Type = Shadow Developer

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[19]: Shadow For |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Shadow For control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required dropdown (developers currently on the selected project) when Request Type = Shadow Developer

**Test Data**

- `field`: Shadow For
- `rule`: Required dropdown (developers currently on the selected project) when Request Type = Shadow Developer
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-108 — Boundary — PR Review Frequency: Required dropdown (Frequently / Occasionally / Rarely / Not at all) when Request Type = PR Reviewer

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[20]: PR Review Frequency |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the PR Review Frequency control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required dropdown (Frequently / Occasionally / Rarely / Not at all) when Request Type = PR Reviewer

**Test Data**

- `field`: PR Review Frequency
- `rule`: Required dropdown (Frequently / Occasionally / Rarely / Not at all) when Request Type = PR Reviewer
- `validationType`: cross-field

**Automation Hint**

Cross-field rule — verify dependent field state changes together (e.g. disabled/required toggling).

#### TC-ALCTKT-109 — Boundary — Primary Tech Stack: Required dropdown sourced from the SimERP Tech Stack list

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[21]: Primary Tech Stack |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Primary Tech Stack control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required dropdown sourced from the SimERP Tech Stack list

**Test Data**

- `field`: Primary Tech Stack
- `rule`: Required dropdown sourced from the SimERP Tech Stack list
- `validationType`: sync

#### TC-ALCTKT-110 — Boundary — Project (NA/UA): Required dropdown restricted to the PM's active projects only

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[22]: Project (NA/UA) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Project (NA/UA) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required dropdown restricted to the PM's active projects only

**Test Data**

- `field`: Project (NA/UA)
- `rule`: Required dropdown restricted to the PM's active projects only
- `validationType`: sync

#### TC-ALCTKT-111 — Boundary — Developer (UA): Required dropdown restricted to developers currently allocated to the selected project (doc footnote states an exception '(Except for PM)' whose exact meaning is unconfirmed — see unclear[])

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[23]: Developer (UA) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Developer (UA) control on its owning form
2. Enter a value at, just beyond, and (where applicable) just below the documented boundary
3. Attempt to submit at each boundary value

**Expected**

In-range/valid boundary values are accepted; out-of-range or disallowed values are rejected per the rule: Required dropdown restricted to developers currently allocated to the selected project (doc footnote states an exception '(Except for PM)' whose exact meaning is unconfirmed — see unclear[])

**Test Data**

- `field`: Developer (UA)
- `rule`: Required dropdown restricted to developers currently allocated to the selected project (doc footnote states an exception '(Except for PM)' whose exact meaning is unconfirmed — see unclear[])
- `validationType`: sync

#### TC-ALCTKT-112 — Boundary/edge case — Relative reduction computed exactly at the 70% boundary (e.g. 100%→30%, or 50%→15% per the doc's own example) ...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Relative reduction computed exactly at the 70% boundary (e.g. 100%→30%, or 50%→15% per the doc's own example) must trigger the mandatory ratings/feedback/reason fields; a reduction just under 70% (e.g. 50%→16%) must not.

#### TC-ALCTKT-113 — Boundary/edge case — New Allocation Percentage set to exactly 0 must surface the ratings/feedback/de-allocation-reason fields even ...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

New Allocation Percentage set to exactly 0 must surface the ratings/feedback/de-allocation-reason fields even when the relative-reduction formula alone would not reach 70% (0% is always full deallocation).

#### TC-ALCTKT-114 — Boundary/edge case — A dynamic allocation's Update Allocation action must always route through the lighter acknowledgement flow, ev...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

A dynamic allocation's Update Allocation action must always route through the lighter acknowledgement flow, even though the same action name ('Update Allocation') routes Fixed allocations through either flow depending on increase/decrease.

#### TC-ALCTKT-115 — Boundary/edge case — Attempting to raise a second UA ticket for the same employee+project combination while one is already active (...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Attempting to raise a second UA ticket for the same employee+project combination while one is already active (OPEN/IN_REVIEW/AWAITING_CONFIRMATION) must be blocked with a conflict error; the same attempt for an NA ticket (no specific developer at creation) must not be blocked.

#### TC-ALCTKT-116 — Boundary/edge case — Adding a developer to a shortlist who is already shortlisted on another active ticket must show a non-blocking...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Adding a developer to a shortlist who is already shortlisted on another active ticket must show a non-blocking warning, not prevent the addition.

#### TC-ALCTKT-117 — Boundary/edge case — If a ticket's assignment details are modified after one or both approval parties have approved, both approvals...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

If a ticket's assignment details are modified after one or both approval parties have approved, both approvals must be invalidated and the ticket must revert to AWAITING_CONFIRMATION, not remain APPROVED or stay pending only the missing approval.

#### TC-ALCTKT-118 — Boundary/edge case — If the target ProjectAssignment was soft-deleted by a different, concurrently-approved ticket before this tick...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

If the target ProjectAssignment was soft-deleted by a different, concurrently-approved ticket before this ticket's auto-apply runs, the apply transaction must fail, the ticket must revert to AWAITING_CONFIRMATION (not stay APPROVED with a broken reference), and PMO must be notified with a retry prompt.

**Automation Hint**

May require backend/test-data setup beyond pure UI automation to force the exact timing/condition.

#### TC-ALCTKT-119 — Boundary/edge case — PR Reviewer NA tickets must not have a Bypass Approval option available to PMO, unlike Fresh Allocation/Shadow...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

PR Reviewer NA tickets must not have a Bypass Approval option available to PMO, unlike Fresh Allocation/Shadow Developer/Estimation NA tickets on the same full-flow lifecycle.

#### TC-ALCTKT-120 — Boundary/edge case — On NA/UA approval, a PR Reviewer request type must not create a normal ProjectAssignment — it must be recorded...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

On NA/UA approval, a PR Reviewer request type must not create a normal ProjectAssignment — it must be recorded as an 'other allocation' PR reviewer, and must be allowed to push the project's total allocation over 100% without being blocked.

#### TC-ALCTKT-121 — Boundary/edge case — If the PM assigned to a project changes via the nightly Zoho sync, all existing tickets for that project must ...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

If the PM assigned to a project changes via the nightly Zoho sync, all existing tickets for that project must become visible to the new PM and no longer visible to the previous PM (tickets are project-owned, not PM-owned).

**Automation Hint**

May require backend/test-data setup beyond pure UI automation to force the exact timing/condition.

#### TC-ALCTKT-122 — Boundary/edge case — An unmatched projectManagerEmail during the nightly Zoho PROJECT_METADATA sync must leave Project.projectManag...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

An unmatched projectManagerEmail during the nightly Zoho PROJECT_METADATA sync must leave Project.projectManagerId null and log a warning, rather than silently keeping a stale PM assignment or erroring the whole sync.

**Automation Hint**

May require backend/test-data setup beyond pure UI automation to force the exact timing/condition.

#### TC-ALCTKT-123 — Boundary/edge case — A PMO Direct Allocation (Add Allocation) must succeed with no ticket, no shortlist, and no approval step, whil...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

A PMO Direct Allocation (Add Allocation) must succeed with no ticket, no shortlist, and no approval step, while still recording createdById and firing the same 4-recipient notification (PM, department TM/EM, employee's RM, employee) as a ticket-driven APPROVED allocation.

#### TC-ALCTKT-124 — Boundary/edge case — A shared ticket detail URL (e.g. /allocation-tickets/NA-0042) opened by a user without CASL visibility to that...

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

A shared ticket detail URL (e.g. /allocation-tickets/NA-0042) opened by a user without CASL visibility to that ticket must return 403, not the ticket detail page.

#### TC-ALCTKT-125 — Boundary/edge case — Changing a Replacement request's technology stack (a 'scope swap') must be blocked/disallowed on the replaceme...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[13] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Changing a Replacement request's technology stack (a 'scope swap') must be blocked/disallowed on the replacement form itself — department and tech stack fields must render non-editable, pre-populated from the developer being replaced.

#### TC-ALCTKT-126 — Boundary/edge case — Carried forward from the KT transcript, unconfirmed against the finalized doc (non-blocking, see unclear[]): t...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[14] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Carried forward from the KT transcript, unconfirmed against the finalized doc (non-blocking, see unclear[]): the finalized spec's ticket-state KPI tiles are Open/In Review/Awaiting Confirmation/Approved/Closed (5 states); the transcript observed an 'All Tickets' aggregate (46) inconsistent with a single filtered tile (61) under an apparently different tile set — verify the All-tickets aggregate always equals the sum of the current 5 state tiles on both PMO and Approver Requests summary bars.

#### TC-ALCTKT-127 — Boundary/edge case — Carried forward from the KT transcript, unconfirmed against the finalized doc (non-blocking, see unclear[]): t...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[15] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Carried forward from the KT transcript, unconfirmed against the finalized doc (non-blocking, see unclear[]): the transcript described a red, blocking warning when selecting/finalizing a candidate whose currently available allocation % is below the ticket's requested %, and availability shown as inflated by 100% per shadow-developer assignment the candidate holds elsewhere; the finalized spec does not explicitly restate either UI behavior — verify both against the live app before asserting on them as hard requirements.

#### TC-ALCTKT-128 — Boundary/edge case — Ticket-state count tiles (Open/In Review/Awaiting Confirmation/Approved/Closed) on PMO Requests, PM Requests, ...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[16] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Ticket-state count tiles (Open/In Review/Awaiting Confirmation/Approved/Closed) on PMO Requests, PM Requests, and Approver Requests summary bars must always sum to the same total shown by an unfiltered/all-tickets view of that same table (regression-derived, count-consistency risk, basis: summary bar shows 'Count of tickets by state' per §4.2/§6.1/§7.1).

#### TC-ALCTKT-129 — Boundary/edge case — Create an NA or UA ticket via the UI, then fetch the same ticket via its API endpoint and confirm ticket type,...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[17] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Create an NA or UA ticket via the UI, then fetch the same ticket via its API endpoint and confirm ticket type, state, project, developer, and allocation percentage match exactly (regression-derived, API/UI parity risk, basis: NA/UA creation and ticket-detail viewing are UI-driven write/read flows per §4.2.1/§4.2.2).

#### TC-ALCTKT-130 — Boundary/edge case — Double-click or rapidly re-submit the Create Request (NA/UA/Replacement) form and verify only the expected num...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[18] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Double-click or rapidly re-submit the Create Request (NA/UA/Replacement) form and verify only the expected number of tickets are created — one per resource requested, not duplicated per resource (regression-derived, double-submit risk, basis: NA form submission is an explicit multi-resource Create flow per §4.2.1).

#### TC-ALCTKT-131 — Boundary/edge case — A soft-deleted (archived) ProjectAssignment must not appear in the UA ticket's 'Developer' dropdown, in shortl...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[19] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

A soft-deleted (archived) ProjectAssignment must not appear in the UA ticket's 'Developer' dropdown, in shortlist candidate pools, or count toward the active-ticket duplicate-block check (regression-derived, stale-reference risk, basis: §5.1 tickets/assignments are never hard-deleted, and §4.2.2's Developer dropdown is scoped to 'developers currently allocated').

#### TC-ALCTKT-132 — Boundary/edge case — Each role's permitted/forbidden ticket actions (PM raise/close-only; TM/EM department-scoped shortlist/approve...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[20] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Each role's permitted/forbidden ticket actions (PM raise/close-only; TM/EM department-scoped shortlist/approve/reject; PMO org-wide assign-department/shortlist/bypass/acknowledge/direct-allocate) must be enforced at both UI (control hidden/disabled) and API (403) level, including the dedicated PMO-only Add Allocation CASL permission (regression-derived, basis: §3.1–3.2/§6.3/§11 describe distinct, explicitly-denied permission boundaries per role).

#### TC-ALCTKT-133 — Boundary/edge case — Attempt every structurally-invalid ticket transition (e.g. OPEN directly to APPROVED, IN_REVIEW directly to CL...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[21] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Attempt every structurally-invalid ticket transition (e.g. OPEN directly to APPROVED, IN_REVIEW directly to CLOSED-after-approval, AWAITING_CONFIRMATION back to OPEN) via both the UI and a direct API call to the relevant PATCH endpoint; both must be rejected (regression-derived, basis: §5.2's two explicit state machines define the only valid transitions).

#### TC-ALCTKT-134 — Boundary/edge case — After a PMO Direct Allocation, a ticket state transition, or a new ticket creation, the Requests table and its...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[22] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

After a PMO Direct Allocation, a ticket state transition, or a new ticket creation, the Requests table and its summary-bar counts must reflect the change immediately without a manual page refresh (regression-derived, cache-refresh risk, basis: Requests pages are live list views per §4.2/§6.1/§7.1).

#### TC-ALCTKT-135 — Boundary/edge case — Create enough tickets to exceed one page at the 100-items-per-page setting and verify navigating to page 2 sho...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[23] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Create enough tickets to exceed one page at the 100-items-per-page setting and verify navigating to page 2 shows the next tickets with no duplication or omission, on PM Requests, PMO Requests, and Approver Requests tables independently (regression-derived, basis: §9 defines 100/200/300 pagination on all three Requests tables).

#### TC-ALCTKT-136 — Boundary/edge case — Sort the Requests table by Ticket ID, Created Date, and Last Updated with multiple tickets sharing identical v...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[24] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Sort the Requests table by Ticket ID, Created Date, and Last Updated with multiple tickets sharing identical values in the sorted column, and verify a stable secondary order rather than the rows shuffling on re-render (regression-derived, basis: §4.2/§6.1/§7.1 each list 2-3 sortable columns).

#### TC-ALCTKT-137 — Boundary/edge case — Apply a filter combination (e.g. state=Closed + type=NA + a date range with no matching tickets) that matches ...

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[25] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Set up the specific data/state condition described by this edge case
2. Perform the action that exercises the edge case
3. Verify the system's behaviour matches the documented expectation exactly

**Expected**

Apply a filter combination (e.g. state=Closed + type=NA + a date range with no matching tickets) that matches zero tickets and verify an explicit empty-state message is shown rather than a blank or stale table; then clear all filters and verify the full unfiltered list returns (regression-derived, basis: §4.2/§6.1/§7.1/§9 each define multi-select state/type/date-range filters).

#### TC-ALCTKT-138 — A UA ticket for an employee+project combination with an existing active ticket is blocked; the same is not true for NA

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | businessRules[testPattern=idempotency]: UA duplicate-active-ticket block |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt the duplicate/rapid-resubmit scenario described
2. Verify the resulting ticket count and any conflict error shown

**Expected**

A UA ticket for an employee+project combination with an existing active ticket is blocked; the same is not true for NA

#### TC-ALCTKT-139 — Submitting the Create Request form twice in quick succession does not create duplicate tickets beyond the number of resources requested

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=idempotency]: double-submit no duplicates |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt the duplicate/rapid-resubmit scenario described
2. Verify the resulting ticket count and any conflict error shown

**Expected**

Submitting the Create Request form twice in quick succession does not create duplicate tickets beyond the number of resources requested

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

### Functional (54)

#### TC-ALCTKT-004 — PM Projects page shows Active and Completed/Archived projects in separate views

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM Projects page separate Active/Completed views |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to PM & PMO → PM Projects
2. Observe the Active projects view
3. Switch to the Completed/Archived view

**Expected**

Active view lists only projects with an active status; Completed/Archived view lists only completed/archived projects; the two lists never overlap

**Test Data**

- `views`: Active, Completed/Archived

#### TC-ALCTKT-005 — PM Projects page supports search by project name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM Projects search by project name |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to PM Projects
2. Type a known project name into the search field

**Expected**

Only projects whose name matches the search term remain visible; clearing the search restores the full list

**Test Data**

- `searchTerm`: seeded active project name

#### TC-ALCTKT-006 — PM Projects page sorts by project name A-Z and by last updated date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM Projects sort by name and last updated |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to PM Projects
2. Click the Project Name column header
3. Click again to reverse order
4. Click the Last Updated column header

**Expected**

Clicking Project Name sorts rows alphabetically ascending, then descending on second click | Clicking Last Updated sorts rows by date

**Test Data**

- `sortColumns`: Project Name, Last Updated

#### TC-ALCTKT-007 — PM Projects page paginates at 100/200/300 items per page and the summary bar total matches the API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM Projects pagination and summary bar |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to PM Projects
2. Open the page-size control and select 100, then 200, then 300
3. Note the summary bar's total active projects count at each size

**Expected**

Row count per page matches the selected page size (or fewer on the last page) | The summary bar's total active projects count is identical across all 3 page-size selections and matches the API's total

**Test Data**

- `pageSizes`: 100, 200, 300

#### TC-ALCTKT-008 — Opening a project from PM Projects shows every allocated developer with full details

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: per-project developer list full detail |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project from PM Projects
2. Observe the developer list

**Expected**

Every currently-allocated developer row shows name, job title, department, allocation type, allocation %, start/end date, hours logged (sourced from Zoho Analytics), leave details (upcoming/current/past), and notice-period status

**Test Data**

- `fields`: name, job title, department, allocation type, allocation %, start/end date, hours logged, leave details, notice-period status

#### TC-ALCTKT-009 — Per-project developer list supports search by developer name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: per-project developer list search |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer list
2. Type a known developer's name into the search field

**Expected**

Only the matching developer row(s) remain visible; clearing the search restores the full list

**Test Data**

- `searchTerm`: seeded developer name

#### TC-ALCTKT-010 — Per-project developer list sorts by developer name, allocation %, and start date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: per-project developer list sort, no pagination |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer list
2. Click each sortable column header in turn and verify order changes

**Expected**

Each column sorts ascending on first click and descending on second click; the list is not paginated (all rows visible)

**Test Data**

- `sortColumns`: Developer Name, Allocation %, Start Date

#### TC-ALCTKT-011 — Per-project developer list filters by leave status and notice period

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: per-project developer list filter by leave/notice |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer list
2. Apply the leave-status filter
3. Clear it, then apply the notice-period filter

**Expected**

Filtering by leave status shows only developers matching that status | Filtering by notice period shows only developers in notice; clearing either filter restores the full list

**Test Data**

- `leaveStatusFilter`: On Leave
- `noticePeriodFilter`: In Notice

#### TC-ALCTKT-012 — Fixed allocation Update Allocation action opens a panel to modify allocation terms and creates a UA ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Fixed Update Allocation opens panel, creates UA ticket |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer with a Fixed allocation
2. Click Update Allocation
3. Modify allocation terms and submit

**Expected**

A panel opens allowing modification of allocation terms | Submitting creates a UA ticket with a UA-#### ID

**Test Data**

- `allocationType`: Fixed

#### TC-ALCTKT-013 — Fixed allocation Update Allocation surfaces ratings/feedback/reason fields when New Allocation Percentage = 0

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: 0% always surfaces mandatory fields |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Update Allocation for a Fixed 40% allocation
2. Set New Allocation Percentage = 0

**Expected**

De-allocation Reason, all 4 ratings, and Open to Work With Again fields appear and are required before submit

**Test Data**

- `currentAllocation`: 40
- `newAllocation`: 0

#### TC-ALCTKT-014 — Fixed allocation Update Allocation surfaces ratings/feedback/reason fields when relative reduction is >=70%

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: >=70% relative reduction surfaces mandatory fields |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Update Allocation for a Fixed 100% allocation
2. Set New Allocation Percentage = 30 (70% relative reduction)

**Expected**

De-allocation Reason, all 4 ratings, and Open to Work With Again fields appear and are required before submit

**Test Data**

- `currentAllocation`: 100
- `newAllocation`: 30

#### TC-ALCTKT-015 — Dynamic allocation's percentage field is disabled on Update Allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Dynamic percentage field disabled |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer with a Dynamic allocation
2. Click Update Allocation
3. Attempt to edit the Allocation Percentage field

**Expected**

The Allocation Percentage control is disabled/read-only for Dynamic allocations

**Test Data**

- `allocationType`: Dynamic

#### TC-ALCTKT-016 — Dynamic allocation Update Allocation always follows the lighter acknowledgement flow and archives the ProjectAssignment on apply

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Dynamic UA always lighter flow, archives assignment |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Submit Update Allocation on a Dynamic assignment
2. Observe the ticket internally sets allocation to 0% and end date to today
3. As PMO, Acknowledge the ticket

**Expected**

Ticket follows OPEN→AWAITING_CONFIRMATION→APPROVED with no IN_REVIEW stage, regardless of the underlying assignment's size | On APPROVED, the ProjectAssignment is archived (soft-deleted)

**Test Data**

- `allocationType`: Dynamic

#### TC-ALCTKT-017 — A note explaining Dynamic allocation's maximum availability is shown wherever Dynamic allocation is displayed or requested

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Dynamic allocation note shown consistently |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the NA ticket form and select Allocation Type = Dynamic
2. Open an existing Dynamic allocation's detail/Update Allocation panel

**Expected**

Both locations display a note stating Dynamic allocation implies a maximum availability of 1-2 hours/day or 10-20 hours/month, and that a significant spike in work requires a new Fixed NA ticket rather than a UA conversion

**Test Data**

- `expectedNoteFragment`: 1-2 hours/day or 10-20 hours/month

#### TC-ALCTKT-018 — Requests page summary bar counts tickets by state (Open/In Review/Awaiting Confirmation/Approved/Closed)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Requests summary bar state counts |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Observe the 5 summary-bar state tiles

**Expected**

Each tile shows a count for its respective state; each tile's count matches the number of rows in the table when filtered to that single state

**Test Data**

- `states`: Open, In Review, Awaiting Confirmation, Approved, Closed

#### TC-ALCTKT-019 — Requests table shows the documented columns (Ticket ID, Type, Project, Developer, Tech Stack, State, Created Date, Last Updated)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Requests table columns |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Observe the table header row

**Expected**

All 8 documented columns are present and populated for every ticket row

**Test Data**

- `columns`: Ticket ID, Type, Project, Developer, Tech Stack, State, Created Date, Last Updated

#### TC-ALCTKT-020 — Requests page supports search by ticket ID and by project name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Requests search by ticket ID/project name |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Search by a known ticket ID
3. Clear, then search by a known project name

**Expected**

Searching by ticket ID returns exactly that ticket | Searching by project name returns only tickets for that project

**Test Data**

- `searchByTicketId`: NA-0001
- `searchByProjectName`: seeded project

#### TC-ALCTKT-021 — Requests page filters by state, type, project, and date range

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Requests filter by state/type/project/date range |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Apply a state filter
3. Add a type filter
4. Add a date-range filter

**Expected**

Each applied filter narrows the visible tickets to only those matching all active filter criteria; clearing all filters restores the unfiltered list

**Test Data**

- `stateFilter`: Open
- `typeFilter`: NA
- `dateRange`: last 30 days

#### TC-ALCTKT-022 — Requests page sorts by created date descending by default, and supports last updated and ticket ID sort

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Requests default/alternate sort |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page with no sort applied
2. Observe default order
3. Click Last Updated column header
4. Click Ticket ID column header

**Expected**

Default order is created date descending (newest first) | Clicking Last Updated re-sorts by that column | Clicking Ticket ID re-sorts by that column

**Test Data**

- `defaultSort`: Created Date desc

#### TC-ALCTKT-023 — Requests page paginates at 100/200/300 items per page

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Requests pagination |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Select page size 100, then 200, then 300

**Expected**

Row count per page matches the selected page size (or fewer on the last page) for each of the 3 settings

**Test Data**

- `pageSizes`: 100, 200, 300

#### TC-ALCTKT-024 — Create Request button opens a modal offering New Allocation, Update Allocation, and Replacement, but only NA/UA ticket types are stored

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Create Request modal 3 options, 2 stored types |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Click Create Request
3. Observe the 3 options in the modal
4. Select Replacement and submit a valid Replacement request
5. Fetch the created ticket via its API endpoint

**Expected**

Modal shows exactly 3 options | The Replacement submission is persisted with ticket type = UA and a replacement flag set to true — no third ticket type exists in the API response

**Test Data**

- `modalOptions`: New Allocation, Update Allocation, Replacement

#### TC-ALCTKT-025 — A New Allocation submission requesting multiple resources creates one independently-trackable ticket per resource

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: NA multi-resource submission creates separate tickets |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Create Request → New Allocation
2. Add 3 resource requests in one submission with a shared Project but distinct Tech Stack/Seniority per resource
3. Submit

**Expected**

3 separate NA tickets are created, each with its own ticket ID and independent state | The shared Project field is applied to all 3; per-resource fields (Tech Stack, Seniority) are independently correct on each ticket

**Test Data**

- `resourceCount`: 3

#### TC-ALCTKT-026 — NA ticket fields display correctly including Allocation Percentage shown converted to hours

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: NA allocation % shown converted to hours |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Create Request → New Allocation, Allocation Type = Fixed
2. Set Allocation Percentage = 50

**Expected**

The form shows the percentage converted to a daily-hours equivalent (e.g. '4 hrs/day' for 50%) alongside the raw percentage

**Test Data**

- `allocationPercentage`: 50
- `expectedHoursDisplay`: 4 hrs/day

#### TC-ALCTKT-027 — Request Type = PR Reviewer follows the standard ticket lifecycle with no PMO bypass option, and on approval is recorded as an 'other allocation' PR reviewer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PR Reviewer lifecycle and other-allocation recording |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create an NA ticket with Request Type = PR Reviewer
2. As PMO, open the ticket while IN_REVIEW
3. Drive the ticket through the full flow to APPROVED

**Expected**

The Bypass Approval checkbox is not available/visible on this ticket even to PMO | On approval, the developer is added as an 'other allocation' PR reviewer (not a normal ProjectAssignment) and is surfaced via a marker column on project allocation views

**Test Data**

- `requestType`: PR Reviewer
- `prReviewFrequency`: Frequently

#### TC-ALCTKT-028 — Request Type = Estimation makes End Date optional and creates a short-duration ProjectAssignment on approval

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Estimation optional End Date and approval behaviour |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create an NA ticket with Request Type = Estimation, leaving End Date blank
2. Submit
3. Drive the ticket through the full flow to APPROVED

**Expected**

Submission succeeds with End Date blank | On approval, a short-duration ProjectAssignment is created like any other allocation

**Test Data**

- `requestType`: Estimation

#### TC-ALCTKT-029 — Update Allocation (UA) form shows the documented field set

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: UA field set |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Update Allocation on an existing Fixed allocation

**Expected**

The form shows Project, Developer (dropdown of developers currently allocated to the selected project), New Allocation Type, New Allocation Percentage, New Start Date, and New End Date, with New Start/End Date optional

**Test Data**

- `fields`: Project, Developer, New Allocation Type, New Allocation Percentage, New Start Date, New End Date

#### TC-ALCTKT-030 — Deallocation ratings are visible to RM, TM, EM, Admin, and PMO on a ticket; a PM sees only ratings they themselves added

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: deallocation ratings visibility by role |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As PMO, open a UA ticket with recorded deallocation ratings
2. As a PM who did not add those ratings, open the same ticket

**Expected**

PMO sees the full ratings section | The PM viewing the ticket sees no ratings (or only ratings they themselves previously entered for that developer)

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-031 — Bypass Approval checkbox is visible to PMO only, on any full-flow ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Bypass checkbox PMO-only visibility |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage + testUserPage

**Steps**

1. As PMO, open a full-flow ticket in IN_REVIEW
2. As TM/EM (punit.patel@simformsolutions.com), open the same ticket

**Expected**

PMO sees the Bypass Approval checkbox | The TM/EM view does not show a Bypass Approval control anywhere on the ticket

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-032 — Replacement request pre-fills and locks department/tech-stack, and additionally requires Replacement Of/Type/Reason

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Replacement pre-fill and additional required fields |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Create Request → Replacement for an existing assignment
2. Observe Department and Tech Stack fields
3. Fill Replacement Of, Replacement Type, Replacement Reason and submit

**Expected**

Department and Tech Stack are pre-populated from the original assignment and are non-editable | Replacement Of, Replacement Type, and Replacement Reason are required and validated before submit

**Test Data**

- `replacementType`: Permanent
- `replacementReason`: Performance Issues

#### TC-ALCTKT-033 — Ticket IDs are zero-padded 4-digit sequential per type prefix and never reset yearly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: ticket ID format and sequencing |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create several NA tickets and several UA tickets in sequence
2. Observe the assigned ticket IDs

**Expected**

NA tickets are numbered NA-0001, NA-0002, ... sequentially; UA tickets are numbered UA-0001, UA-0002, ... independently; numbering does not reset even across a year boundary in the underlying sequence

**Test Data**

- `expectedFormat`: NA-0001, UA-0001

#### TC-ALCTKT-034 — Ticket detail route uses the human-readable ticket ID as its URL parameter

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: ticket detail URL uses human-readable ID |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a ticket's detail view
2. Observe the browser URL

**Expected**

The URL contains the human-readable ticket ID (e.g. /allocation-tickets/NA-0042), not an internal numeric/UUID identifier

**Test Data**

- `exampleRoute`: /allocation-tickets/NA-0042

#### TC-ALCTKT-035 — A ticket raised by the PM can be closed by the raising PM from OPEN

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PM can close own OPEN ticket |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As the raising PM, open a ticket in OPEN state
2. Click Close

**Expected**

The ticket transitions to a closed (soft-deleted) state; it no longer appears in active Requests views by default

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-036 — PMO can close a ticket in OPEN, IN_REVIEW, or AWAITING_CONFIRMATION, but not APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PMO close permitted states, APPROVED excluded |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As PMO, close a ticket in IN_REVIEW
2. As PMO, attempt to close a different ticket that is already APPROVED

**Expected**

The IN_REVIEW ticket closes successfully | The Close action is unavailable/rejected for the APPROVED ticket — ending an approved allocation requires a new UA ticket at 0%

#### TC-ALCTKT-037 — On APPROVED, the system auto-applies the allocation change: NA creates a ProjectAssignment, UA with %>0 updates only changed fields, UA with %=0 soft-deletes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: auto-apply transaction on APPROVED |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Drive an NA ticket to APPROVED and inspect the resulting ProjectAssignment
2. Drive a UA-increase ticket to APPROVED and inspect the updated ProjectAssignment
3. Drive a UA-to-0% ticket to APPROVED and inspect the ProjectAssignment

**Expected**

NA APPROVED creates a new ProjectAssignment (status=GREEN, typeOfWork=DEVELOPMENT_WORK) | UA %>0 APPROVED updates only the changed fields, leaving others intact | UA %=0 APPROVED sets allocationEndDate then soft-deletes the ProjectAssignment

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-038 — During IN_REVIEW, PMO and the assigned department's TM/EM build a shortlist not visible to the PM, then PMO selects the final developer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: shortlist visibility and final-developer selection |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As PMO, assign a department to an NA ticket (moves to IN_REVIEW)
2. As PMO and TM/EM, add candidates to the shortlist
3. As the raising PM, open the same ticket
4. As PMO, select one final developer

**Expected**

The shortlist is visible to PMO and TM/EM but not rendered for the PM viewing the same ticket | Selecting a final developer moves the ticket to AWAITING_CONFIRMATION and notifies TM/EM

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-039 — On click of Save/Approve for any ticket action, a confirmation dialog appears before the change is applied

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: confirmation dialog on Save/Approve |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open any ticket action (e.g. Approve, Save on Update Allocation)
2. Click the action button

**Expected**

A confirmation dialog appears asking the user to confirm the change before it is applied; dismissing it cancels the operation with no change made

#### TC-ALCTKT-040 — PMO Requests page shows every ticket org-wide with PMO-specific search (ticket ID/project/PM/developer) and filters (department, tech-stack, PM)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PMO Requests org-wide search/filter |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As PMO, navigate to PMO Requests
2. Search by PM name and by developer name
3. Apply department and tech-stack filters

**Expected**

PMO Requests shows tickets from every PM org-wide; searching by PM name or developer name narrows correctly; department/tech-stack filters narrow correctly

**Test Data**

- `searchFields`: ticket ID, project name, PM name, developer name
- `filters`: department, tech-stack, PM

#### TC-ALCTKT-041 — PMO Requests page's Pending Actions section aggregates awaiting-acknowledgement tickets, de-allocation reminders, and failed auto-applies

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PMO Pending Actions aggregation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create at least one ticket awaiting PMO acknowledgement
2. Force one auto-apply failure (soft-deleted target assignment)
3. As PMO, open the Pending Actions section

**Expected**

Pending Actions lists the ticket awaiting acknowledgement, an upcoming de-allocation reminder (if any), and the failed auto-apply awaiting retry — all in one aggregated view

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-042 — Approver (TM/EM) Department Requests tab is scoped to their department(s), with a Pending My Approval sub-view of AWAITING_CONFIRMATION tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Approver Department Requests + Pending My Approval |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As TM/EM (punit.patel@simformsolutions.com), navigate to Requests → Department Requests
2. Observe the tickets shown
3. Open the Pending My Approval sub-view

**Expected**

Department Requests shows only tickets for the approver's department(s) (EM sees all departments they manage) | Pending My Approval shows only AWAITING_CONFIRMATION full-flow tickets awaiting their approval

#### TC-ALCTKT-043 — A dual-role (PM+TM) user sees two independently-scoped tabs — 'My Requests' and 'Department Requests' — with no data bleed

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: dual-role (PM+TM) separate tabs |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user holding both PM and TM roles, navigate to Requests
2. Observe 'My Requests' tab contents
3. Observe 'Department Requests' tab contents

**Expected**

My Requests shows only PM-raised tickets for their managed projects | Department Requests shows only their department's approval queue | No ticket appears in both tabs unless it is genuinely both

**Automation Hint**

PARTIAL — requires a test account provisioned with both PM and TM roles simultaneously; not currently confirmed available (see unclear[]).

#### TC-ALCTKT-044 — A dual-role (PM+RM) user sees a single ticket table only, since RM has no approval queue

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: dual-role (PM+RM) single table |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user holding both PM and RM roles, navigate to Requests

**Expected**

Only a single table (the PM 'My Requests' view) is shown — no separate approver tab is rendered, since RM has no approval queue

**Automation Hint**

PARTIAL — requires a test account provisioned with both PM and RM roles simultaneously; not currently confirmed available (see unclear[]).

#### TC-ALCTKT-045 — PMO Direct Allocation (Add Allocation) creates a ProjectAssignment directly with no ticket, shortlist, or approval step, and notifies all 4 recipients

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PMO Direct Allocation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As PMO, open a project and use Add Allocation on a developer
2. Fill the allocation details and submit
3. Check the Requests list and the project's ProjectAssignment list

**Expected**

No AllocationTicket record is created for this action | A ProjectAssignment is created directly with createdById recorded | PM, department TM/EM, employee's RM, and the employee all receive an in-app + email notification

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-046 — Tickets are never hard-deleted; cancellation/closure/archival is always soft-delete

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | businessRules[testPattern=status-transition]: Tickets never hard-deleted |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Close a ticket
2. Query the tickets table/API directly for that ticket

**Expected**

The ticket record still exists with deletedAt populated — it is never physically removed

#### TC-ALCTKT-047 — Full-flow ticket reaches APPROVED only when both PMO and TM/EM approvals are recorded

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | businessRules[testPattern=status-transition]: Full-flow requires both approvals |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Record only the PMO approval on a full-flow AWAITING_CONFIRMATION ticket
2. Observe ticket state
3. Record the TM/EM approval

**Expected**

Ticket remains AWAITING_CONFIRMATION after only one approval | Ticket moves to APPROVED only once both approvals are present

#### TC-ALCTKT-048 — Editing ticket assignment details after either approval invalidates all approvals and reverts the ticket to AWAITING_CONFIRMATION

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | businessRules[testPattern=status-transition]: Edit after approval invalidates approvals |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Record the PMO approval on a full-flow ticket
2. Edit the ticket's assignment details (e.g. allocation %)
3. Observe ticket state and recorded approvals

**Expected**

The previously-recorded approval is invalidated | The ticket reverts to AWAITING_CONFIRMATION, not remaining APPROVED or partially-approved

#### TC-ALCTKT-049 — PR Reviewer NA tickets follow the standard full-approval lifecycle but disallow Bypass, unlike other NA request types

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | businessRules[testPattern=status-transition]: PR Reviewer disallows Bypass |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a PR Reviewer NA ticket in IN_REVIEW as PMO
2. Open a Fresh Allocation NA ticket in IN_REVIEW as PMO for comparison

**Expected**

The PR Reviewer ticket has no Bypass Approval option | The Fresh Allocation ticket does show Bypass Approval to PMO

#### TC-ALCTKT-050 — A soft-deleted ProjectAssignment does not appear in the UA Developer dropdown, shortlist candidate pools, or the duplicate-active-ticket check

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=status-transition]: Soft-deleted assignment excluded from dropdown/shortlist/dup-check |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Soft-delete a ProjectAssignment via an approved 0% UA ticket
2. Open a new UA ticket's Developer dropdown for that project
3. Attempt to shortlist that same developer on an NA ticket for that project
4. Attempt to raise a second UA ticket for that now-soft-deleted employee+project pair

**Expected**

The soft-deleted assignment's developer does not appear in the Developer dropdown | Does not appear as a shortlist candidate | Does not count toward the duplicate-active-ticket conflict check

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-ALCTKT-051 — A ticket rejects every structurally-invalid state transition at both UI and API level

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=status-transition]: Invalid transitions rejected UI+API |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt to move an OPEN ticket directly to APPROVED via the UI
2. Attempt the same via a direct PATCH API call to the approve/acknowledge endpoint
3. Attempt to move an already-APPROVED ticket back to AWAITING_CONFIRMATION via API

**Expected**

Every structurally-invalid transition is rejected at the UI (no control offers it) and at the API (error response, no state change)

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-ALCTKT-052 — PMO's Bypass Approval requires no reason but always records bypassedAt/bypassedById and notifies the bypassed TM/EM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | businessRules[testPattern=write-then-verify-no-overwrite]: Bypass no reason but audited |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As PMO, use Bypass Approval on an IN_REVIEW full-flow ticket without entering any reason
2. Fetch the ticket via its API endpoint

**Expected**

Submission succeeds with no reason field | bypassedAt and bypassedById are populated in the API response | The department's TM/EM receives a bypass notification

#### TC-ALCTKT-053 — Ticket-state summary tiles always sum to the same total as the unfiltered ticket list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=write-then-verify-no-overwrite]: KPI tiles sum to unfiltered total |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page with no filters applied
2. Sum the Open/In Review/Awaiting Confirmation/Approved/Closed tile counts
3. Compare against the unfiltered table's total row count

**Expected**

The sum of the 5 state tiles equals the unfiltered table's total count, on PM, PMO, and Approver Requests views

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-ALCTKT-054 — The Requests table and summary-bar counts reflect a new ticket or state change immediately, without a manual page refresh

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=write-then-verify-no-overwrite]: Live update without manual refresh |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. With the Requests page open, create a new ticket in another tab/session
2. Return to the open Requests page tab without reloading

**Expected**

The new ticket appears in the table and the summary-bar counts update without requiring F5

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-ALCTKT-055 — Paginated Requests tables do not duplicate or drop tickets across 100/200/300 page-size navigation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=write-then-verify-no-overwrite]: Pagination no dup/drop across page sizes |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. With more than 100 tickets, view page 1 and note the last ticket ID
2. Navigate to page 2 and note the first ticket ID
3. Switch page size to 200, then 300, and re-check total count

**Expected**

Page 2's first ticket is distinct from page 1's last ticket, with no gap or repeat | The underlying total ticket count is identical regardless of the selected page size

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-ALCTKT-056 — Sorting the Requests table produces a stable order even for rows with identical sort-key values

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=write-then-verify-no-overwrite]: Stable sort order for ties |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create 2+ tickets with the same Created Date (or Last Updated) value
2. Sort the Requests table by that column
3. Re-render the page (e.g. navigate away and back) and re-check order

**Expected**

Rows with identical sort-key values maintain a stable relative order across re-renders, rather than shuffling

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-ALCTKT-057 — Applying Requests-table filters updates both the displayed tickets and the summary-bar counts together

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=write-then-verify-no-overwrite]: Filters update table+summary together |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Requests page
2. Apply a state filter (e.g. state=Open)
3. Observe both the table rows and the summary-bar tile counts
4. Clear the filter

**Expected**

Filtered table rows and summary-bar counts update together to reflect only the filtered state | Clearing the filter restores the full unfiltered list and counts

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

### Integration (8)

#### TC-ALCTKT-184 — Integration — ALCTKT ↔ EMPDET

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[0].integrationNote: EMPDET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to EMPDET immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

PMO's Direct Allocation and availability/leave/notice-period data shown per developer are sourced from Employee Details; deallocation ratings are also employee-scoped.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: EMPDET

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-185 — Integration — ALCTKT ↔ DEPTSET

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[1].integrationNote: DEPTSET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to DEPTSET immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

Department dropdown/assignment on tickets and the TM/EM department-scoped approval queues are sourced from Department Settings.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: DEPTSET

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-186 — Integration — ALCTKT ↔ PROJTCH

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[2].integrationNote: PROJTCH |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to PROJTCH immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

Primary/Required Tech Stack fields on NA tickets reuse the Tech Stack catalogue, including any newly-added custom skills.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: PROJTCH

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-187 — Integration — ALCTKT ↔ ADMROL

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[3].integrationNote: ADMROL |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to ADMROL immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

PM/PMO/TM/EM permission boundaries (department-assignment, approval, bypass, direct-allocation) are enforced entirely via CASL roles/permissions (PM_PROJECTS, ALLOCATION_TICKETS modules) configured here.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: ADMROL

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-188 — Integration — ALCTKT ↔ PMPROJ

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[4].integrationNote: PMPROJ |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to PMPROJ immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

PM Projects page and its per-developer ticket actions (Update Allocation, etc.) are the entry point into this ticketing workflow; the sibling sub-feature analyzed in parallel.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: PMPROJ

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-189 — Integration — ALCTKT ↔ TEAMDET

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[5].integrationNote: TEAMDET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to TEAMDET immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

TM/EM Requests (Department Requests) approval queue sits alongside their existing team-management views.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: TEAMDET

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-190 — Integration — ALCTKT ↔ EMPALC

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules[6].integrationNote: EMPALC |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform the ALCTKT-side operation described by this module's integration note
2. Navigate to EMPALC immediately afterward
3. Verify the data/behaviour described in the integration note is correctly reflected

**Expected**

An earlier KT-transcript-based analysis of this same feature was persisted under the EMPALC KB file (reports/knowledge-base/modules/employee/allocation-correction.json) before the PMPROJ/ALCTKT split existed; verify no duplicate/conflicting automation exists under EMPALC once this module ships.

**Test Data**

- `sourceModule`: ALCTKT
- `targetModule`: EMPALC

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response.

#### TC-ALCTKT-191 — Integration — nightly Zoho PROJECT_METADATA sync correctly updates Project.projectManagerId consumed by PM Projects/Requests scoping

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | dependencies: Zoho Analytics nightly PROJECT_METADATA sync |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger (or wait for) the nightly PROJECT_METADATA sync with a changed projectManagerEmail on a project
2. Verify Project.projectManagerId is updated to the new PM
3. Log in as the new PM and verify all existing tickets for that project are now visible; log in as the previous PM and verify they are no longer visible

**Expected**

Project.projectManagerId reflects the synced PM; ticket visibility transfers fully to the new PM within the sync's up-to-24h lag window

**Test Data**

- `sourceModule`: Zoho Analytics
- `targetModule`: ALCTKT

**Automation Hint**

Requires backend/test-data control over the Zoho sync input or direct DB seeding of Project.projectManagerId to avoid waiting for the real nightly job.

### Negative (30)

#### TC-ALCTKT-058 — Negative — PM attempts to select or change the department on any ticket

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: PM attempts to select or change the department on any ticket
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Department is never a PM-editable field on NA/UA forms — assignment is PMO/TM-EM driven within the ticket lifecycle, per §4.2.1/§4.2.2/§6.2/§11 (UA department auto-inference).

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-059 — Negative — PM attempts to close a ticket that has already reached APPROVED

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: PM attempts to close a ticket that has already reached APPROVED
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Action is unavailable/rejected — APPROVED tickets cannot be closed; ending an approved allocation requires a new UA at 0%.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-060 — Negative — TM/EM attempts to reject a lighter-flow (UA decrease/de-allocation) ticket

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: TM/EM attempts to reject a lighter-flow (UA decrease/de-allocation) ticket
2. Observe the system's response at UI and (where applicable) API level

**Expected**

No reject action exists for lighter-flow tickets — de-allocations cannot be refused; only PMO can Acknowledge.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-061 — Negative — A non-PMO role (PM, TM, EM, RM) attempts to use Bypass Approval or Add Allocation, via UI or direct API call

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[3] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: A non-PMO role (PM, TM, EM, RM) attempts to use Bypass Approval or Add Allocation, via UI or direct API call
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Action is unavailable in the UI and rejected (403) at the API level — both are PMO-exclusive.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-062 — Negative — User attempts to convert a Dynamic allocation to Fixed via Update Allocation

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[4] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: User attempts to convert a Dynamic allocation to Fixed via Update Allocation
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Not permitted — the New Allocation Type control cannot select Fixed for a Dynamic assignment via UA; a new Fixed NA ticket is required instead.

#### TC-ALCTKT-063 — Negative — User attempts to change the technology stack on a Replacement request

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[5] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: User attempts to change the technology stack on a Replacement request
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Department and tech-stack fields are pre-populated and non-editable on Replacement requests; a scope swap requires a de-allocation plus a new NA ticket.

#### TC-ALCTKT-064 — Negative — PM attempts to create a second UA ticket for an employee+project combination that already has an active ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[6] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: PM attempts to create a second UA ticket for an employee+project combination that already has an active ticket
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Request is blocked at creation with a conflict error.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-065 — Negative — A user attempts to approve a full-flow ticket that already reached APPROVED, or a ticket that is CLOSED

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[7] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: A user attempts to approve a full-flow ticket that already reached APPROVED, or a ticket that is CLOSED
2. Observe the system's response at UI and (where applicable) API level

**Expected**

No Approve/Reject/Acknowledge action is available for tickets outside AWAITING_CONFIRMATION; the transition is rejected.

#### TC-ALCTKT-066 — Negative — PMO attempts to Assign Department / Shortlist / Select Final Developer on a UA increase ticket (full flow, no department selection or shortlist step)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[8] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: PMO attempts to Assign Department / Shortlist / Select Final Developer on a UA increase ticket (full flow, no department selection or shortlist step)
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Those NA-only actions are not available for UA tickets — UA increase uses Review and Advance / Send for Approval instead, with department auto-inferred.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-067 — Negative — A PM attempts to view a ticket belonging to a project they do not manage

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[9] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: A PM attempts to view a ticket belonging to a project they do not manage
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Ticket is absent from their Requests list and direct access via the shareable ticket URL returns 403 (CASL-enforced).

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-068 — Negative — TM attempts to approve/reject a ticket assigned to a department other than their own

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[10] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: TM attempts to approve/reject a ticket assigned to a department other than their own
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Action is rejected — TM approval scope is limited to their single department; only an EM may act across multiple departments they manage.

#### TC-ALCTKT-069 — Negative — PMO attempts to select a final developer whose current availability is less than the ticket's requested allocation percentage

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[11] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: PMO attempts to select a final developer whose current availability is less than the ticket's requested allocation percentage
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Carried forward from KT transcript (unconfirmed against finalized doc — see unclear[]): expected to be blocked with a visible warning; verify actual live behaviour before hard-asserting, since §5.4/§6.2 do not explicitly restate an availability check or warning.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-070 — Negative — A user attempts to submit a UA decrease/de-allocation ticket at ≥70% relative reduction without filling all four ratings and the De-allocation Reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios[12] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: A user attempts to submit a UA decrease/de-allocation ticket at ≥70% relative reduction without filling all four ratings and the De-allocation Reason
2. Observe the system's response at UI and (where applicable) API level

**Expected**

Submission is blocked until De-allocation Reason and all four ratings (and Open to Work With Again) are provided; Developer Feedback alone remains optional.

#### TC-ALCTKT-071 — Submitting the NA form with each required field individually left blank shows the correct inline error

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Create Request → New Allocation
2. Leave Project blank, fill all else, submit
3. Repeat individually for Primary Tech Stack, Start Date, Allocation Type

**Expected**

Each individually-blank required field shows its own inline validation error; submission is blocked until all are filled

#### TC-ALCTKT-072 — Entering a non-integer value in Allocation Percentage is rejected as an invalid format

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the NA form, Allocation Type = Fixed
2. Enter 'abc' into Allocation Percentage
3. Attempt to submit

**Expected**

Submission is rejected with a format-validation error; no ticket is created

**Test Data**

- `input`: abc

#### TC-ALCTKT-073 — Submitting Developer Feedback containing only whitespace is treated as empty

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Update Allocation at a >=70% reduction
2. Enter only spaces into Developer Feedback
3. Submit

**Expected**

The whitespace-only feedback is treated as empty (not saved as meaningful content), consistent with its optional status

**Test Data**

#### TC-ALCTKT-074 — Entering a value one character beyond De-allocation Reason's fixed-option constraint is rejected

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Update Allocation requiring De-allocation Reason
2. Attempt to submit a value not in the 4 allowed options

**Expected**

Submission is rejected — only the 4 documented enum values are accepted, no free text

**Test Data**

- `input`: Project ClosureX

#### TC-ALCTKT-075 — Entering Allocation Percentage below the documented minimum (0 for NA) is rejected

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the NA form, Allocation Type = Fixed
2. Enter Allocation Percentage = 0
3. Submit

**Expected**

Submission is rejected — NA Allocation Percentage must be 1–100, 0 is not permitted on NA (only UA allows 0)

**Test Data**

- `input`: 0
- `context`: NA ticket, Fixed

#### TC-ALCTKT-076 — Entering XSS/script payloads into free-text fields is sanitized and does not execute

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Update Allocation's Developer Feedback field
2. Enter each payload in turn and submit
3. View the ticket detail where feedback is rendered

**Expected**

No script executes on render; the payload is escaped/sanitized or rejected with a validation error

**Test Data**

- `payloads`: <script>alert(1)</script>, ", ', --, %, null, undefined

#### TC-ALCTKT-077 — Attempting to raise a ticket with duplicate identifying data is prevented

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Raise a UA ticket for an employee+project pair
2. Attempt to raise a second UA ticket for the exact same employee+project pair while the first is still active

**Expected**

The duplicate UA request is blocked with a conflict error

#### TC-ALCTKT-078 — Attempting an invalid ticket status transition (e.g. Closed back to Open without a defined restore path) is rejected

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Close a ticket
2. Attempt to reopen it directly to OPEN via UI/API

**Expected**

The transition is rejected — no restore-to-OPEN path exists for a closed ticket

#### TC-ALCTKT-079 — Refreshing the browser mid-way through the NA ticket form does not submit partial data

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill half the NA form fields
2. Refresh the browser (F5) before submitting

**Expected**

No partial ticket is created; no existing record is corrupted; the form resets to empty on reload

#### TC-ALCTKT-080 — Clicking the Create Request submit button 3x rapidly results in exactly one operation

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill a valid NA form for a single resource
2. Click Submit 3 times in rapid succession

**Expected**

Exactly one NA ticket is created, not 3

#### TC-ALCTKT-081 — When the ticket-creation API takes longer than expected, a loading indicator is shown and the UI does not freeze

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Submit a ticket while network is artificially throttled
2. Observe the UI during the wait

**Expected**

A loading indicator/spinner is visible during the wait; the UI remains responsive (not frozen) until the response arrives

#### TC-ALCTKT-082 — Session expiry (HTTP 401) during ticket actions returns the user to login without data loss

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate an expired session
2. Attempt a ticket action (e.g. Approve)

**Expected**

The user is redirected to the login page; no partial ticket state change is committed

#### TC-ALCTKT-083 — A permission-denied response (HTTP 403) on a ticket action shows a user-friendly message

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a non-privileged role, force-call a restricted ticket endpoint (e.g. bypass) directly

**Expected**

A user-friendly permission-denied message is shown, not a raw error/stack trace

#### TC-ALCTKT-084 — Navigating to a non-existent ticket ID shows a not-found page, not a blank screen

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate directly to /allocation-tickets/NA-9999 (a non-existent ticket)

**Expected**

A not-found page/message is shown, not a blank screen or raw error

**Test Data**

- `url`: /allocation-tickets/NA-9999

#### TC-ALCTKT-085 — A server error (HTTP 500) during ticket submission shows a user-friendly error toast, not a raw stack trace

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Force a 500 response while submitting a ticket action

**Expected**

A user-friendly error toast/page is shown; no raw stack trace or technical error is exposed

#### TC-ALCTKT-086 — A service-unavailable response (HTTP 503) shows a maintenance/retry message

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Force a 503 response while loading the Requests page

**Expected**

A maintenance or retry message is shown instead of a blank/broken page

#### TC-ALCTKT-087 — If a retryable ticket action fails, the UI offers a retry option without a full page reload

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Force a transient failure on a ticket action (e.g. Approve)
2. Observe the resulting UI state

**Expected**

A retry option is offered inline; retrying does not require a full page reload

### Regression (13)

#### TC-ALCTKT-171 — Regression — EMPDET (high risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[0]: EMPDET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches EMPDET data (per its integration note)
2. Navigate to the EMPDET module and verify its existing views/behaviour are unaffected

**Expected**

PMO's Direct Allocation and availability/leave/notice-period data shown per developer are sourced from Employee Details; deallocation ratings are also employee-scoped.

**Test Data**

- `affectedModule`: EMPDET
- `regressionRisk`: high

#### TC-ALCTKT-172 — Regression — DEPTSET (medium risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[1]: DEPTSET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches DEPTSET data (per its integration note)
2. Navigate to the DEPTSET module and verify its existing views/behaviour are unaffected

**Expected**

Department dropdown/assignment on tickets and the TM/EM department-scoped approval queues are sourced from Department Settings.

**Test Data**

- `affectedModule`: DEPTSET
- `regressionRisk`: medium

#### TC-ALCTKT-173 — Regression — PROJTCH (medium risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[2]: PROJTCH |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches PROJTCH data (per its integration note)
2. Navigate to the PROJTCH module and verify its existing views/behaviour are unaffected

**Expected**

Primary/Required Tech Stack fields on NA tickets reuse the Tech Stack catalogue, including any newly-added custom skills.

**Test Data**

- `affectedModule`: PROJTCH
- `regressionRisk`: medium

#### TC-ALCTKT-174 — Regression — ADMROL (critical risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[3]: ADMROL |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches ADMROL data (per its integration note)
2. Navigate to the ADMROL module and verify its existing views/behaviour are unaffected

**Expected**

PM/PMO/TM/EM permission boundaries (department-assignment, approval, bypass, direct-allocation) are enforced entirely via CASL roles/permissions (PM_PROJECTS, ALLOCATION_TICKETS modules) configured here.

**Test Data**

- `affectedModule`: ADMROL
- `regressionRisk`: critical

#### TC-ALCTKT-175 — Regression — PMPROJ (high risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[4]: PMPROJ |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches PMPROJ data (per its integration note)
2. Navigate to the PMPROJ module and verify its existing views/behaviour are unaffected

**Expected**

PM Projects page and its per-developer ticket actions (Update Allocation, etc.) are the entry point into this ticketing workflow; the sibling sub-feature analyzed in parallel.

**Test Data**

- `affectedModule`: PMPROJ
- `regressionRisk`: high

#### TC-ALCTKT-176 — Regression — TEAMDET (medium risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[5]: TEAMDET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches TEAMDET data (per its integration note)
2. Navigate to the TEAMDET module and verify its existing views/behaviour are unaffected

**Expected**

TM/EM Requests (Department Requests) approval queue sits alongside their existing team-management views.

**Test Data**

- `affectedModule`: TEAMDET
- `regressionRisk`: medium

#### TC-ALCTKT-177 — Regression — EMPALC (medium risk): existing functionality unaffected by ALCTKT changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules[6]: EMPALC |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an ALCTKT ticket operation that touches EMPALC data (per its integration note)
2. Navigate to the EMPALC module and verify its existing views/behaviour are unaffected

**Expected**

An earlier KT-transcript-based analysis of this same feature was persisted under the EMPALC KB file (reports/knowledge-base/modules/employee/allocation-correction.json) before the PMPROJ/ALCTKT split existed; verify no duplicate/conflicting automation exists under EMPALC once this module ships.

**Test Data**

- `affectedModule`: EMPALC
- `regressionRisk`: medium

#### TC-ALCTKT-178 — UI-displayed ticket/allocation values match the API response after save

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create/update a ticket via the UI
2. Fetch the same ticket via its API endpoint

**Expected**

All UI-displayed fields (type, state, project, developer, allocation %) match the API response exactly

#### TC-ALCTKT-179 — Ticket counts on the summary bar, list view, and API total field are all equal

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the Requests summary-bar total
2. Note the table's visible row count across all pages
3. Fetch the API's total count field

**Expected**

All three counts are equal after any create/update operation

#### TC-ALCTKT-180 — A newly created ticket is present in the list after a full page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a new ticket
2. Refresh the page (F5)

**Expected**

The new ticket is still present in the Requests list after the refresh

#### TC-ALCTKT-181 — Updated ticket/allocation field values are correct after a full page refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Update a ticket's fields (e.g. via a status transition)
2. Refresh the page (F5)

**Expected**

The updated field values persist correctly after refresh

#### TC-ALCTKT-182 — A closed/approved-then-soft-deleted ProjectAssignment is absent from the active allocation list without requiring a refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Approve a 0% UA ticket, soft-deleting the ProjectAssignment
2. Observe the project's active developer list immediately, with no refresh

**Expected**

The de-allocated developer disappears from the active list immediately, no page refresh required

#### TC-ALCTKT-183 — Assignment/deallocation counts increment/decrement by exactly 1 in both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note a project's current allocated-developer count
2. Approve an NA ticket adding one developer
3. Approve a 0% UA ticket removing one developer
4. Re-check the count via UI and API

**Expected**

The count increments by exactly 1 after the NA approval and decrements by exactly 1 after the UA de-allocation approval, consistently in UI and API

### Security (31)

#### TC-ALCTKT-140 — PM cannot: assign/change department on a ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PM].cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PM role, attempt: assign/change department on a ticket
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "assign/change department on a ticket" is not available in the UI for PM, and a direct API call attempting it returns 403

**Test Data**

- `role`: PM
- `dataScope`: own managed projects and their tickets only

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-141 — PM cannot: shortlist or view the shortlist

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PM].cannot[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PM role, attempt: shortlist or view the shortlist
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "shortlist or view the shortlist" is not available in the UI for PM, and a direct API call attempting it returns 403

**Test Data**

- `role`: PM
- `dataScope`: own managed projects and their tickets only

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-142 — PM cannot: approve, reject, bypass, or acknowledge any ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PM].cannot[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PM role, attempt: approve, reject, bypass, or acknowledge any ticket
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "approve, reject, bypass, or acknowledge any ticket" is not available in the UI for PM, and a direct API call attempting it returns 403

**Test Data**

- `role`: PM
- `dataScope`: own managed projects and their tickets only

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-143 — PM cannot: edit an allocation directly (no inline editing)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PM].cannot[3] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PM role, attempt: edit an allocation directly (no inline editing)
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "edit an allocation directly (no inline editing)" is not available in the UI for PM, and a direct API call attempting it returns 403

**Test Data**

- `role`: PM
- `dataScope`: own managed projects and their tickets only

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-144 — PM cannot: view tickets for projects they do not manage

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PM].cannot[4] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PM role, attempt: view tickets for projects they do not manage
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "view tickets for projects they do not manage" is not available in the UI for PM, and a direct API call attempting it returns 403

**Test Data**

- `role`: PM
- `dataScope`: own managed projects and their tickets only

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-145 — PM cannot: convert a Dynamic allocation to Fixed via UA

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PM].cannot[5] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PM role, attempt: convert a Dynamic allocation to Fixed via UA
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "convert a Dynamic allocation to Fixed via UA" is not available in the UI for PM, and a direct API call attempting it returns 403

**Test Data**

- `role`: PM
- `dataScope`: own managed projects and their tickets only

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-146 — PMO cannot: reject a lighter-flow (decrease/de-allocation) ticket — acknowledgement only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PMO].cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PMO role, attempt: reject a lighter-flow (decrease/de-allocation) ticket — acknowledgement only
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "reject a lighter-flow (decrease/de-allocation) ticket — acknowledgement only" is not available in the UI for PMO, and a direct API call attempting it returns 403

**Test Data**

- `role`: PMO
- `dataScope`: system-wide (all projects, all departments, all tickets)

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-147 — PMO cannot: combine the PMO role with RM/TM/EM (standalone role)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=PMO].cannot[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the PMO role, attempt: combine the PMO role with RM/TM/EM (standalone role)
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "combine the PMO role with RM/TM/EM (standalone role)" is not available in the UI for PMO, and a direct API call attempting it returns 403

**Test Data**

- `role`: PMO
- `dataScope`: system-wide (all projects, all departments, all tickets)

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-148 — TM cannot: assign/change department on a ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=TM].cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the TM role, attempt: assign/change department on a ticket
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "assign/change department on a ticket" is not available in the UI for TM, and a direct API call attempting it returns 403

**Test Data**

- `role`: TM
- `dataScope`: own single department's full-flow tickets

#### TC-ALCTKT-149 — TM cannot: act on tickets outside their own department

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=TM].cannot[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the TM role, attempt: act on tickets outside their own department
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "act on tickets outside their own department" is not available in the UI for TM, and a direct API call attempting it returns 403

**Test Data**

- `role`: TM
- `dataScope`: own single department's full-flow tickets

#### TC-ALCTKT-150 — TM cannot: bypass PMO's or their own approval requirement

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=TM].cannot[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the TM role, attempt: bypass PMO's or their own approval requirement
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "bypass PMO's or their own approval requirement" is not available in the UI for TM, and a direct API call attempting it returns 403

**Test Data**

- `role`: TM
- `dataScope`: own single department's full-flow tickets

#### TC-ALCTKT-151 — TM cannot: act on lighter-flow (decrease/de-allocation) tickets — PMO-only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=TM].cannot[3] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the TM role, attempt: act on lighter-flow (decrease/de-allocation) tickets — PMO-only
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "act on lighter-flow (decrease/de-allocation) tickets — PMO-only" is not available in the UI for TM, and a direct API call attempting it returns 403

**Test Data**

- `role`: TM
- `dataScope`: own single department's full-flow tickets

#### TC-ALCTKT-152 — EM cannot: assign/change department on a ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=EM].cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the EM role, attempt: assign/change department on a ticket
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "assign/change department on a ticket" is not available in the UI for EM, and a direct API call attempting it returns 403

**Test Data**

- `role`: EM
- `dataScope`: all departments they manage

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-153 — EM cannot: act on tickets outside departments they manage

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=EM].cannot[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the EM role, attempt: act on tickets outside departments they manage
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "act on tickets outside departments they manage" is not available in the UI for EM, and a direct API call attempting it returns 403

**Test Data**

- `role`: EM
- `dataScope`: all departments they manage

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-154 — EM cannot: bypass PMO's approval requirement

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=EM].cannot[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the EM role, attempt: bypass PMO's approval requirement
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "bypass PMO's approval requirement" is not available in the UI for EM, and a direct API call attempting it returns 403

**Test Data**

- `role`: EM
- `dataScope`: all departments they manage

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-155 — EM cannot: act on lighter-flow tickets — PMO-only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=EM].cannot[3] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a user with the EM role, attempt: act on lighter-flow tickets — PMO-only
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "act on lighter-flow tickets — PMO-only" is not available in the UI for EM, and a direct API call attempting it returns 403

**Test Data**

- `role`: EM
- `dataScope`: all departments they manage

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-156 — RM cannot: raise, view, approve, reject, bypass, or acknowledge any allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=RM].cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the RM role, attempt: raise, view, approve, reject, bypass, or acknowledge any allocation ticket
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "raise, view, approve, reject, bypass, or acknowledge any allocation ticket" is not available in the UI for RM, and a direct API call attempting it returns 403

**Test Data**

- `role`: RM
- `dataScope`: notification recipient only, own team members

#### TC-ALCTKT-157 — RM cannot: access PM Projects or Requests pages (no PM/PMO/TM/EM role)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=RM].cannot[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the RM role, attempt: access PM Projects or Requests pages (no PM/PMO/TM/EM role)
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "access PM Projects or Requests pages (no PM/PMO/TM/EM role)" is not available in the UI for RM, and a direct API call attempting it returns 403

**Test Data**

- `role`: RM
- `dataScope`: notification recipient only, own team members

#### TC-ALCTKT-158 — Employee cannot: initiate, view, or act on any allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=Employee].cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the Employee role, attempt: initiate, view, or act on any allocation ticket
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "initiate, view, or act on any allocation ticket" is not available in the UI for Employee, and a direct API call attempting it returns 403

**Test Data**

- `role`: Employee
- `dataScope`: own record only (notifications)

#### TC-ALCTKT-159 — Employee cannot: view another employee's deallocation ratings

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[role=Employee].cannot[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a user with the Employee role, attempt: view another employee's deallocation ratings
2. Verify the corresponding UI control is absent/disabled
3. Attempt the equivalent action via direct API call

**Expected**

The action "view another employee's deallocation ratings" is not available in the UI for Employee, and a direct API call attempting it returns 403

**Test Data**

- `role`: Employee
- `dataScope`: own record only (notifications)

#### TC-ALCTKT-160 — Security — A PM attempts to open another PM's project ticket via direct URL manipulation (e.g. /allocation-tickets/UA-0099 for a project they don't manage)

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

Open two browser contexts: primaryPage + testUserPage

**Steps**

1. Attempt: A PM attempts to open another PM's project ticket via direct URL manipulation (e.g. /allocation-tickets/UA-0099 for a project they don't manage)
2. Observe the system's response at UI and API level

**Expected**

CASL denies access; the API returns 403 rather than the ticket detail.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-161 — Security — A TM/EM attempts to call the approve/reject/acknowledge endpoints for a ticket outside their department via direct API request, bypassing the UI's disabled/hidden controls

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

Open two browser contexts: primaryPage + testUserPage

**Steps**

1. Attempt: A TM/EM attempts to call the approve/reject/acknowledge endpoints for a ticket outside their department via direct API request, bypassing the UI's disabled/hidden controls
2. Observe the system's response at UI and API level

**Expected**

API-level CASL check rejects the request (403) independent of UI state.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-162 — Security — Free-text fields (Developer Feedback) are submitted with script/HTML payloads

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[3] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: Free-text fields (Developer Feedback) are submitted with script/HTML payloads
2. Observe the system's response at UI and API level

**Expected**

Input is sanitized/escaped on render wherever the feedback is later displayed (ticket detail); no script executes.

#### TC-ALCTKT-163 — Security — A role other than RM/TM/EM/Admin/PMO for that developer (e.g. another employee, or a PM who did not add the rating) attempts to view deallocation ratings on a ticket

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[4] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage + testUserPage

**Steps**

1. Attempt: A role other than RM/TM/EM/Admin/PMO for that developer (e.g. another employee, or a PM who did not add the rating) attempts to view deallocation ratings on a ticket
2. Observe the system's response at UI and API level

**Expected**

Ratings section is not rendered / access denied for that viewer, per the documented ratings-visibility rule (§4.2.2).

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-164 — Security — An Employee-role user attempts to access the PM Projects or Requests pages directly by URL

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[5] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage + testUserPage

**Steps**

1. Attempt: An Employee-role user attempts to access the PM Projects or Requests pages directly by URL
2. Observe the system's response at UI and API level

**Expected**

Access denied (403 / redirect) — these pages require PM, PMO, TM, or EM role via CASL PM_PROJECTS/ALLOCATION_TICKETS permissions.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-165 — Security — PMO Bypass and Add Allocation actions are performed

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[7] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: PMO Bypass and Add Allocation actions are performed
2. Observe the system's response at UI and API level

**Expected**

An audit trail is recorded and retrievable: bypassedAt/bypassedById for bypass, createdById for direct allocation — both attributable to the acting PMO employee.

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-166 — Security — A shared ticket detail URL is opened by a recipient named in a notification but who has since lost CASL visibility to that ticket/project (e.g. role changed)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios[8] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt: A shared ticket detail URL is opened by a recipient named in a notification but who has since lost CASL visibility to that ticket/project (e.g. role changed)
2. Observe the system's response at UI and API level

**Expected**

Returns 403 rather than the ticket detail, per §11 Ticket ID storage decision.

#### TC-ALCTKT-167 — Only PMO holds the Add Allocation CASL permission; PM, TM, and RM are denied it regardless of any other role held

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | businessRules[testPattern=role-scope-assertion]: Only PMO holds Add Allocation |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise the described role/action boundary as the relevant role(s)
2. Verify UI-level control absence and API-level 403 response

**Expected**

Only PMO holds the Add Allocation CASL permission; PM, TM, and RM are denied it regardless of any other role held

#### TC-ALCTKT-168 — Ticket ownership belongs to the project, not the raising PM; a PM change via nightly Zoho sync transfers ticket visibility to the new PM

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | businessRules[testPattern=role-scope-assertion]: ticket ownership follows project |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise the described role/action boundary as the relevant role(s)
2. Verify UI-level control absence and API-level 403 response

**Expected**

Ticket ownership belongs to the project, not the raising PM; a PM change via nightly Zoho sync transfers ticket visibility to the new PM

**Automation Hint**

Requires simulating/waiting on the nightly Zoho PROJECT_METADATA sync or directly manipulating Project.projectManagerId in test data.

#### TC-ALCTKT-169 — PM scope (project-based visibility) applies only within PM Projects/Requests; on every other page only the paired org-hierarchy role's scope applies

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | businessRules[testPattern=role-scope-assertion]: PM scope confined to PM Projects/Requests |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise the described role/action boundary as the relevant role(s)
2. Verify UI-level control absence and API-level 403 response

**Expected**

PM scope (project-based visibility) applies only within PM Projects/Requests; on every other page only the paired org-hierarchy role's scope applies

#### TC-ALCTKT-170 — Every role/action boundary (PM raise/close-only, TM/EM department-scoped shortlist/approve/reject, PMO org-wide assign/bypass/acknowledge/direct-allocate) is enforced at both UI and API (403) level

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=role-scope-assertion]: role boundaries enforced UI+API (merged summary — see per-role roleMatrix.cannot cases for individual coverage) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise the described role/action boundary as the relevant role(s)
2. Verify UI-level control absence and API-level 403 response

**Expected**

Every role/action boundary (PM raise/close-only, TM/EM department-scoped shortlist/approve/reject, PMO org-wide assign/bypass/acknowledge/direct-allocate) is enforced at both UI and API (403) level

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

### Smoke (3)

#### TC-ALCTKT-001 — PM raises a Fresh Allocation NA ticket and it progresses through full dual approval to APPROVED with a ProjectAssignment auto-created

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to PM & PMO → PM Projects, open a project with an assigned PM
2. Click Create Request → select New Allocation
3. Fill Project, Primary Tech Stack, Start Date, Allocation Type = Fixed, Allocation Percentage = 50, Request Type = Fresh Allocation, Interview Required and Client Facing flags, and submit
4. As PMO, open the new ticket from PMO Requests and use Assign Department
5. Add a candidate to the shortlist, then Select Final Developer (ticket moves to AWAITING_CONFIRMATION)
6. As the assigned department's TM/EM, Approve the ticket; as PMO, Approve the ticket

**Expected**

Ticket ID matches NA-#### format | Ticket state transitions OPEN→IN_REVIEW→AWAITING_CONFIRMATION→APPROVED | A new ProjectAssignment is created with status=GREEN and typeOfWork=DEVELOPMENT_WORK | PM, developer, developer's RM, PMO, and TM/EM all receive an in-app + email notification

**Test Data**

- `requestType`: Fresh Allocation
- `allocationType`: Fixed
- `allocationPercentage`: 50
- `project`: seeded active project with PM assigned

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-002 — PM raises a UA ticket increasing allocation and it progresses through full dual approval to APPROVED, updating only the changed fields on the existing ProjectAssignment

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer with an existing Fixed ProjectAssignment at 30%
2. Use Update Allocation → set New Allocation Percentage = 60 (an increase) → submit, creating a UA ticket
3. As PMO, Review and Advance the ticket (OPEN→IN_REVIEW)
4. As PMO, Send for Approval (IN_REVIEW→AWAITING_CONFIRMATION)
5. As TM/EM, Approve; as PMO, Approve

**Expected**

Ticket state transitions OPEN→IN_REVIEW→AWAITING_CONFIRMATION→APPROVED | Only allocation percentage (and any changed start/end dates) are updated on the existing ProjectAssignment — all other fields (developer, project, department, tech stack) remain unchanged | PM and developer's RM are notified

**Test Data**

- `currentAllocation`: 30
- `newAllocation`: 60
- `allocationType`: Fixed

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].

#### TC-ALCTKT-003 — PM raises a UA ticket decreasing/de-allocating and it follows the lighter acknowledgement flow to APPROVED, updating or soft-deleting the ProjectAssignment

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[2] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a project's developer with an existing Fixed ProjectAssignment at 50%
2. Use Update Allocation → set New Allocation Percentage = 0
3. Fill the mandatory De-allocation Reason, all 4 ratings, and Open to Work With Again → submit, creating a UA ticket
4. Observe the ticket auto-moves OPEN→AWAITING_CONFIRMATION with no IN_REVIEW stage
5. As PMO, click Acknowledge

**Expected**

Ticket state transitions OPEN→AWAITING_CONFIRMATION→APPROVED with no IN_REVIEW stage and no reject option available | ProjectAssignment.allocationEndDate is set to the acknowledgement date, then the ProjectAssignment is soft-deleted | PM and the developer's RM are notified

**Test Data**

- `currentAllocation`: 50
- `newAllocation`: 0
- `deallocationReason`: Project Closure
- `ratings`: coreSkill: 8; communication: 8; attitude: 9; justiceToRole: 8
- `openToWorkAgain`: Yes

**Automation Hint**

PARTIAL — requires coordinated PM/PMO/TM-EM sessions across an async multi-step workflow; only ceo@simformsolutions.com (Admin, substituting PMO-adjacent system-wide access) and punit.patel@simformsolutions.com (TM/Employee) are confirmed test accounts — see unclear[].
