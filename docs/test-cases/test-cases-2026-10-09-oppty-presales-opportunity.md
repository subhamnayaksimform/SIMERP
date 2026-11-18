# Allocation & Deallocation — Test Cases

**Total test cases:** 168  
**Modules covered:** Allocation & Deallocation  
**Source:** `reports/test-cases/cases-2026-10-09-OPPTY-presales-opportunity.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 89 | 53.0% |
| negative | 31 | 18.5% |
| security | 14 | 8.3% |
| smoke | 12 | 7.1% |
| integration | 11 | 6.5% |
| boundary | 6 | 3.6% |
| accessibility | 3 | 1.8% |
| performance | 1 | 0.6% |
| regression | 1 | 0.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 75 | 44.6% |
| medium | 68 | 40.5% |
| critical | 19 | 11.3% |
| low | 6 | 3.6% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 75 | 44.6% |
| minor | 68 | 40.5% |
| critical | 19 | 11.3% |
| trivial | 6 | 3.6% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 168 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 112 | 66.7% |
| assumption | 56 | 33.3% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 168 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 89 | 53.0% |
| @negative | 31 | 18.5% |
| @security | 14 | 8.3% |
| @smoke | 12 | 7.1% |
| @integration | 11 | 6.5% |
| @regression | 11 | 6.5% |
| @boundary | 6 | 3.6% |
| @a11y | 3 | 1.8% |
| @performance | 1 | 0.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-001](#tc-oppty-001-pmo-can-open-the-add-new-opportunity-form) | PMO can open the Add New Opportunity form | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-002](#tc-oppty-002-pmo-creates-an-interview-existing-client-opportunity) | PMO creates an Interview–Existing Client Opportunity | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-003](#tc-oppty-003-pmo-creates-an-interview-prospect-opportunity) | PMO creates an Interview–Prospect Opportunity | Allocation & Deallocation | functional | high |
| [TC-OPPTY-004](#tc-oppty-004-pmo-creates-a-direct-existing-client-request-project-allocation) | PMO creates a Direct–Existing Client request (Project Allocation) | Allocation & Deallocation | functional | high |
| [TC-OPPTY-005](#tc-oppty-005-pmo-creates-a-direct-prospect-request-prospect-allocation) | PMO creates a Direct–Prospect request (Prospect Allocation) | Allocation & Deallocation | functional | high |
| [TC-OPPTY-006](#tc-oppty-006-csm-creates-an-opportunity-for-an-existing-client) | CSM creates an Opportunity for an existing client | Allocation & Deallocation | functional | high |
| [TC-OPPTY-007](#tc-oppty-007-csm-creates-an-opportunity-for-a-prospect) | CSM creates an Opportunity for a prospect | Allocation & Deallocation | functional | high |
| [TC-OPPTY-008](#tc-oppty-008-existing-client-selection-auto-pulls-the-linked-project-data) | Existing Client selection auto-pulls the linked project data | Allocation & Deallocation | functional | high |
| [TC-OPPTY-009](#tc-oppty-009-switching-client-type-clears-the-other-section-s-values) | Switching Client Type clears the other section's values | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-010](#tc-oppty-010-pm-has-no-add-new-opportunity-action) | PM has no Add New Opportunity action | Allocation & Deallocation | negative | critical |
| [TC-OPPTY-011](#tc-oppty-011-opportunity-cannot-be-saved-without-the-mandatory-fields) | Opportunity cannot be saved without the mandatory fields | Allocation & Deallocation | negative | high |
| [TC-OPPTY-012](#tc-oppty-012-existing-client-without-a-project-selected-cannot-be-saved) | Existing Client without a project selected cannot be saved | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-013](#tc-oppty-013-closed-or-archived-projects-are-not-offered-for-existing-client) | Closed or archived projects are not offered for Existing Client | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-014](#tc-oppty-014-double-clicking-save-creates-only-one-opportunity) | Double-clicking Save creates only one Opportunity | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-015](#tc-oppty-015-long-and-special-character-text-in-opportunity-fields) | Long and special-character text in Opportunity fields | Allocation & Deallocation | boundary | medium |
| [TC-OPPTY-016](#tc-oppty-016-duplicate-opportunity-for-the-same-prospect-shows-a-warning) | Duplicate Opportunity for the same prospect shows a warning | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-017](#tc-oppty-017-pmo-adds-a-position-with-openings-to-an-opportunity) | PMO adds a Position with openings to an Opportunity | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-018](#tc-oppty-018-position-inherits-opportunity-level-details) | Position inherits Opportunity-level details | Allocation & Deallocation | functional | high |
| [TC-OPPTY-019](#tc-oppty-019-csm-adds-and-edits-a-position) | CSM adds and edits a Position | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-020](#tc-oppty-020-pm-cannot-edit-position-details) | PM cannot edit Position details | Allocation & Deallocation | negative | high |
| [TC-OPPTY-021](#tc-oppty-021-number-of-openings-rejects-0-negative-and-decimal-values) | Number of openings rejects 0, negative and decimal values | Allocation & Deallocation | boundary | high |
| [TC-OPPTY-022](#tc-oppty-022-upper-limit-for-number-of-openings) | Upper limit for number of openings | Allocation & Deallocation | boundary | medium |
| [TC-OPPTY-023](#tc-oppty-023-openings-cannot-be-reduced-below-positions-already-filled) | Openings cannot be reduced below positions already filled | Allocation & Deallocation | negative | high |
| [TC-OPPTY-024](#tc-oppty-024-increasing-openings-on-a-fully-filled-position-reopens-it) | Increasing openings on a fully filled Position reopens it | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-025](#tc-oppty-025-deleting-a-position-with-candidates-in-interview-needs-confirmation) | Deleting a Position with candidates in interview needs confirmation | Allocation & Deallocation | negative | high |
| [TC-OPPTY-026](#tc-oppty-026-editing-a-position-after-shortlisting-started-notifies-tm) | Editing a Position after shortlisting started notifies TM | Allocation & Deallocation | functional | high |
| [TC-OPPTY-027](#tc-oppty-027-multi-department-position-is-visible-to-every-department-involved) | Multi-department Position is visible to every department involved | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-028](#tc-oppty-028-complex-position-edits-open-in-a-side-drawer) | Complex Position edits open in a side drawer | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-029](#tc-oppty-029-add-a-candidate-to-a-position) | Add a candidate to a Position | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-030](#tc-oppty-030-tm-shortlists-a-candidate) | TM shortlists a candidate | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-031](#tc-oppty-031-shortlisting-drawer-shows-all-required-fields) | Shortlisting Drawer shows all required fields | Allocation & Deallocation | functional | high |
| [TC-OPPTY-032](#tc-oppty-032-employee-profile-link-in-the-drawer-opens-the-right-profile) | Employee Profile link in the drawer opens the right profile | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-033](#tc-oppty-033-default-candidate-sort-uses-utilization-priority-and-skill-match) | Default candidate sort uses Utilization Priority and skill match | Allocation & Deallocation | functional | high |
| [TC-OPPTY-034](#tc-oppty-034-preferred-candidate-flag-is-highlighted-on-the-shortlisting-screen) | Preferred Candidate flag is highlighted on the shortlisting screen | Allocation & Deallocation | functional | high |
| [TC-OPPTY-035](#tc-oppty-035-pm-can-shortlist-candidates-on-an-assigned-opportunity) | PM can shortlist candidates on an assigned Opportunity | Allocation & Deallocation | functional | high |
| [TC-OPPTY-036](#tc-oppty-036-removing-a-shortlisted-candidate-requires-a-reason) | Removing a shortlisted candidate requires a reason | Allocation & Deallocation | negative | high |
| [TC-OPPTY-037](#tc-oppty-037-reason-cannot-be-only-spaces-or-one-character) | Reason cannot be only spaces or one character | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-038](#tc-oppty-038-same-employee-cannot-be-added-twice-to-the-same-position) | Same employee cannot be added twice to the same Position | Allocation & Deallocation | negative | high |
| [TC-OPPTY-039](#tc-oppty-039-candidate-in-process-on-position-a-cannot-be-added-to-position-b-at-the-same-time) | Candidate In Process on Position A cannot be added to Position B at the same time | Allocation & Deallocation | negative | high |
| [TC-OPPTY-040](#tc-oppty-040-rejected-candidate-can-be-nominated-to-another-position) | Rejected candidate can be nominated to another Position | Allocation & Deallocation | functional | high |
| [TC-OPPTY-041](#tc-oppty-041-rejecting-a-candidate-reopens-the-slot) | Rejecting a candidate reopens the slot | Allocation & Deallocation | functional | high |
| [TC-OPPTY-042](#tc-oppty-042-per-position-candidate-tabs-show-processed-selected-rejected) | Per-Position candidate tabs show Processed / Selected / Rejected | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-043](#tc-oppty-043-warning-when-the-candidate-has-no-free-availability) | Warning when the candidate has no free availability | Allocation & Deallocation | negative | high |
| [TC-OPPTY-044](#tc-oppty-044-candidate-on-leave-or-serving-notice-is-flagged-in-the-drawer) | Candidate on leave or serving notice is flagged in the drawer | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-045](#tc-oppty-045-inactive-exited-employees-cannot-be-nominated) | Inactive / exited employees cannot be nominated | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-046](#tc-oppty-046-preferred-flag-clears-when-the-candidate-is-rejected) | Preferred flag clears when the candidate is Rejected | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-047](#tc-oppty-047-candidate-moves-through-the-full-pipeline-to-project-allocated) | Candidate moves through the full pipeline to Project Allocated | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-048](#tc-oppty-048-tm-assigns-an-interviewer) | TM assigns an interviewer | Allocation & Deallocation | functional | high |
| [TC-OPPTY-049](#tc-oppty-049-scheduling-an-interview-notifies-candidate-and-interviewer) | Scheduling an interview notifies candidate and interviewer | Allocation & Deallocation | functional | high |
| [TC-OPPTY-050](#tc-oppty-050-finalized-interview-schedule-is-locked) | Finalized interview schedule is locked | Allocation & Deallocation | functional | high |
| [TC-OPPTY-051](#tc-oppty-051-interview-cannot-be-scheduled-in-the-past) | Interview cannot be scheduled in the past | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-052](#tc-oppty-052-round-skip-asks-for-confirmation-and-marks-the-candidate-selected) | Round-skip asks for confirmation and marks the candidate Selected | Allocation & Deallocation | functional | high |
| [TC-OPPTY-053](#tc-oppty-053-cancelling-the-round-skip-dialog-changes-nothing) | Cancelling the round-skip dialog changes nothing | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-054](#tc-oppty-054-tm-approval-happens-after-shortlisting-and-before-being-prepared) | TM Approval happens after Shortlisting and before Being Prepared | Allocation & Deallocation | functional | critical |
| [TC-OPPTY-055](#tc-oppty-055-candidate-cannot-reach-being-prepared-without-tm-approval-or-bypass) | Candidate cannot reach Being Prepared without TM Approval or Bypass | Allocation & Deallocation | negative | critical |
| [TC-OPPTY-056](#tc-oppty-056-tm-rejects-at-the-approval-gate) | TM rejects at the approval gate | Allocation & Deallocation | negative | high |
| [TC-OPPTY-057](#tc-oppty-057-interview-recording-is-attached-when-rounds-are-cleared) | Interview recording is attached when rounds are cleared | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-058](#tc-oppty-058-interview-recording-rejects-unsupported-or-too-large-files) | Interview recording rejects unsupported or too-large files | Allocation & Deallocation | boundary | low |
| [TC-OPPTY-059](#tc-oppty-059-multi-opening-position-stays-active-until-all-openings-fill) | Multi-opening Position stays active until all openings fill | Allocation & Deallocation | functional | high |
| [TC-OPPTY-060](#tc-oppty-060-status-change-via-single-click-dropdown) | Status change via single-click dropdown | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-061](#tc-oppty-061-status-changes-can-be-reverted-and-are-logged) | Status changes can be reverted and are logged | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-062](#tc-oppty-062-reverting-project-allocated-does-not-leave-an-orphan-allocation) | Reverting Project Allocated does not leave an orphan allocation | Allocation & Deallocation | negative | high |
| [TC-OPPTY-063](#tc-oppty-063-candidate-stuck-in-waiting-for-feedback-is-flagged-by-aging) | Candidate stuck in Waiting for Feedback is flagged by aging | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-064](#tc-oppty-064-interview-kanban-loads-with-all-pipeline-columns) | Interview Kanban loads with all pipeline columns | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-065](#tc-oppty-065-direct-allocation-opens-as-a-list-view) | Direct Allocation opens as a List View | Allocation & Deallocation | smoke | high |
| [TC-OPPTY-066](#tc-oppty-066-kanban-defaults-hide-lost-and-no-longer-required) | Kanban defaults hide Lost and No Longer Required | Allocation & Deallocation | functional | high |
| [TC-OPPTY-067](#tc-oppty-067-kanban-date-range-filter-options-work) | Kanban date-range filter options work | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-068](#tc-oppty-068-date-filter-boundaries-include-the-edge-day) | Date filter boundaries include the edge day | Allocation & Deallocation | boundary | medium |
| [TC-OPPTY-069](#tc-oppty-069-board-sorts-by-ticket-id-position-and-interview-date) | Board sorts by Ticket ID, Position and Interview Date | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-070](#tc-oppty-070-global-filters-department-project-status) | Global filters: department, project, status | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-071](#tc-oppty-071-empty-filter-result-shows-an-empty-state-message) | Empty filter result shows an empty-state message | Allocation & Deallocation | functional | low |
| [TC-OPPTY-072](#tc-oppty-072-pm-list-shows-an-interview-direct-flag-on-every-row) | PM list shows an Interview / Direct flag on every row | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-073](#tc-oppty-073-recently-edited-fields-are-highlighted) | Recently edited fields are highlighted | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-074](#tc-oppty-074-counts-on-the-board-match-the-list-and-dashboard) | Counts on the board match the list and dashboard | Allocation & Deallocation | regression | medium |
| [TC-OPPTY-075](#tc-oppty-075-kanban-loads-quickly-with-a-large-data-set) | Kanban loads quickly with a large data set | Allocation & Deallocation | performance | medium |
| [TC-OPPTY-076](#tc-oppty-076-pmo-can-drag-kanban-cards) | PMO can drag Kanban cards | Allocation & Deallocation | functional | critical |
| [TC-OPPTY-077](#tc-oppty-077-admin-cannot-drag-cards-and-sees-the-view-only-banner) | Admin cannot drag cards and sees the view-only banner | Allocation & Deallocation | security | critical |
| [TC-OPPTY-078](#tc-oppty-078-csm-cannot-drag-cards-or-change-status) | CSM cannot drag cards or change status | Allocation & Deallocation | security | critical |
| [TC-OPPTY-079](#tc-oppty-079-employee-cannot-move-cards-on-the-main-pipeline) | Employee cannot move cards on the main pipeline | Allocation & Deallocation | security | critical |
| [TC-OPPTY-080](#tc-oppty-080-status-change-is-blocked-at-the-api-for-non-pmo-roles) | Status change is blocked at the API for non-PMO roles | Allocation & Deallocation | security | critical |
| [TC-OPPTY-081](#tc-oppty-081-pm-tm-write-scope-on-their-own-tickets) | PM/TM write scope on their own tickets | Allocation & Deallocation | security | high |
| [TC-OPPTY-082](#tc-oppty-082-csm-cancels-a-ticket-and-a-cancelled-tag-is-added) | CSM cancels a ticket and a Cancelled tag is added | Allocation & Deallocation | smoke | high |
| [TC-OPPTY-083](#tc-oppty-083-dismissing-the-cancel-pop-up-changes-nothing) | Dismissing the cancel pop-up changes nothing | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-084](#tc-oppty-084-pmo-moves-a-cancelled-ticket-to-no-longer-required) | PMO moves a Cancelled ticket to No Longer Required | Allocation & Deallocation | functional | high |
| [TC-OPPTY-085](#tc-oppty-085-only-pmo-can-move-a-ticket-to-no-longer-required) | Only PMO can move a ticket to No Longer Required | Allocation & Deallocation | security | high |
| [TC-OPPTY-086](#tc-oppty-086-cancelled-ticket-stops-reminders-and-alerts-participants) | Cancelled ticket stops reminders and alerts participants | Allocation & Deallocation | functional | high |
| [TC-OPPTY-087](#tc-oppty-087-removing-a-cancelled-tag-before-archive) | Removing a Cancelled tag before archive | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-088](#tc-oppty-088-cancelling-a-ticket-that-is-already-project-allocated) | Cancelling a ticket that is already Project Allocated | Allocation & Deallocation | negative | high |
| [TC-OPPTY-089](#tc-oppty-089-marking-an-opportunity-lost-closes-open-candidates) | Marking an Opportunity Lost closes open candidates | Allocation & Deallocation | functional | high |
| [TC-OPPTY-090](#tc-oppty-090-csm-cannot-mark-an-opportunity-lost) | CSM cannot mark an Opportunity Lost | Allocation & Deallocation | negative | high |
| [TC-OPPTY-091](#tc-oppty-091-archived-tickets-can-be-viewed-with-filters) | Archived tickets can be viewed with filters | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-092](#tc-oppty-092-on-hold-ticket) | On Hold ticket | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-093](#tc-oppty-093-pmo-assigns-an-opportunity-to-a-pm) | PMO assigns an Opportunity to a PM | Allocation & Deallocation | smoke | critical |
| [TC-OPPTY-094](#tc-oppty-094-pmo-assigns-an-opportunity-to-a-csm) | PMO assigns an Opportunity to a CSM | Allocation & Deallocation | functional | high |
| [TC-OPPTY-095](#tc-oppty-095-pm-sees-only-opportunities-assigned-to-them) | PM sees only Opportunities assigned to them | Allocation & Deallocation | security | critical |
| [TC-OPPTY-096](#tc-oppty-096-reassignment-removes-the-previous-pm-s-access) | Reassignment removes the previous PM's access | Allocation & Deallocation | security | high |
| [TC-OPPTY-097](#tc-oppty-097-admin-is-limited-to-their-department) | Admin is limited to their department | Allocation & Deallocation | security | high |
| [TC-OPPTY-098](#tc-oppty-098-assigned-followers-on-prospect-tickets-get-access) | Assigned followers on prospect tickets get access | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-099](#tc-oppty-099-candidate-cannot-see-other-candidates-or-confidential-deal-data) | Candidate cannot see other candidates or confidential deal data | Allocation & Deallocation | security | high |
| [TC-OPPTY-100](#tc-oppty-100-rejected-candidate-loses-access-to-position-prep-material) | Rejected candidate loses access to Position prep material | Allocation & Deallocation | security | medium |
| [TC-OPPTY-101](#tc-oppty-101-dual-role-pm-tm-sees-both-lists) | Dual role PM + TM sees both lists | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-102](#tc-oppty-102-pmo-adds-prep-material-and-question-bank-to-a-position) | PMO adds prep material and question bank to a Position | Allocation & Deallocation | smoke | high |
| [TC-OPPTY-103](#tc-oppty-103-pm-adds-prep-material-on-top-of-pmo-s) | PM adds prep material on top of PMO's | Allocation & Deallocation | functional | high |
| [TC-OPPTY-104](#tc-oppty-104-pm-cannot-edit-or-delete-pmo-material) | PM cannot edit or delete PMO material | Allocation & Deallocation | security | high |
| [TC-OPPTY-105](#tc-oppty-105-pm-edits-or-deletes-their-own-material) | PM edits or deletes their own material | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-106](#tc-oppty-106-invalid-prep-material-url-is-rejected) | Invalid prep-material URL is rejected | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-107](#tc-oppty-107-candidate-sees-inherited-material-and-completes-checklist-items) | Candidate sees inherited material and completes checklist items | Allocation & Deallocation | functional | high |
| [TC-OPPTY-108](#tc-oppty-108-checklist-is-locked-outside-shortlisted-being-prepared) | Checklist is locked outside Shortlisted / Being Prepared | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-109](#tc-oppty-109-send-reminder-notifies-pending-candidates) | Send Reminder notifies pending candidates | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-110](#tc-oppty-110-em-department-question-bank-is-available-to-positions-in-that-department) | EM department question bank is available to Positions in that department | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-111](#tc-oppty-111-project-linked-at-opportunity-creation) | Project linked at Opportunity creation | Allocation & Deallocation | functional | high |
| [TC-OPPTY-112](#tc-oppty-112-prospect-opportunity-linked-to-a-project-later) | Prospect Opportunity linked to a project later | Allocation & Deallocation | functional | high |
| [TC-OPPTY-113](#tc-oppty-113-ticket-details-has-3-tabs) | Ticket Details has 3 tabs | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-114](#tc-oppty-114-cannot-link-a-closed-project) | Cannot link a closed project | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-115](#tc-oppty-115-employee-allocated-via-an-opportunity-can-be-deallocated) | Employee allocated via an Opportunity can be deallocated | Allocation & Deallocation | functional | high |
| [TC-OPPTY-116](#tc-oppty-116-pmo-acknowledges-the-deallocation) | PMO acknowledges the deallocation | Allocation & Deallocation | functional | high |
| [TC-OPPTY-117](#tc-oppty-117-pm-tracks-deallocations-in-request-tracking) | PM tracks deallocations in Request Tracking | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-118](#tc-oppty-118-admin-views-an-open-deallocation-in-ticket-details) | Admin views an open deallocation in Ticket Details | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-119](#tc-oppty-119-tm-tracks-deallocations-for-their-team) | TM tracks deallocations for their team | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-120](#tc-oppty-120-notification-1-new-opportunity-raised) | Notification #1: New Opportunity raised | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-121](#tc-oppty-121-notification-2-position-added) | Notification #2: Position added | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-122](#tc-oppty-122-notification-5-ticket-reaches-shortlisting) | Notification #5: Ticket reaches shortlisting | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-123](#tc-oppty-123-notification-12-final-approval-granted) | Notification #12: Final approval granted | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-124](#tc-oppty-124-notification-14-project-linked) | Notification #14: Project linked | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-125](#tc-oppty-125-moving-a-ticket-to-no-longer-required-notifies-participants) | Moving a ticket to No Longer Required notifies participants | Allocation & Deallocation | negative | medium |
| [TC-OPPTY-126](#tc-oppty-126-dual-role-user-gets-one-notification-not-duplicates) | Dual-role user gets one notification, not duplicates | Allocation & Deallocation | functional | low |
| [TC-OPPTY-127](#tc-oppty-127-notification-link-to-a-ticket-the-user-lost-access-to) | Notification link to a ticket the user lost access to | Allocation & Deallocation | negative | low |
| [TC-OPPTY-128](#tc-oppty-128-employee-sees-their-opportunities-on-profile-and-kanban) | Employee sees their Opportunities on Profile and Kanban | Allocation & Deallocation | smoke | high |
| [TC-OPPTY-129](#tc-oppty-129-next-steps-callout-shows-on-the-ticket-card) | Next Steps callout shows on the ticket card | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-130](#tc-oppty-130-dashboard-shows-projects-peer-reviews-allocations-interviews) | Dashboard shows Projects / Peer Reviews / Allocations & Interviews | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-131](#tc-oppty-131-month-wise-activity-timeline) | Month-wise activity timeline | Allocation & Deallocation | functional | low |
| [TC-OPPTY-132](#tc-oppty-132-kanban-status-change-is-possible-by-keyboard) | Kanban status change is possible by keyboard | Allocation & Deallocation | accessibility | medium |
| [TC-OPPTY-133](#tc-oppty-133-shortlisting-drawer-is-accessible) | Shortlisting Drawer is accessible | Allocation & Deallocation | accessibility | medium |
| [TC-OPPTY-134](#tc-oppty-134-status-and-priority-are-not-shown-by-colour-only) | Status and priority are not shown by colour only | Allocation & Deallocation | accessibility | low |
| [TC-OPPTY-135](#tc-oppty-135-project-allocated-creates-exactly-one-allocation-in-the-existing-allocation-system) | Project Allocated creates exactly one allocation in the existing allocation system | Allocation & Deallocation | integration | critical |
| [TC-OPPTY-136](#tc-oppty-136-over-allocation-is-prevented-across-opportunity-and-na-ticket) | Over-allocation is prevented across Opportunity and NA ticket | Allocation & Deallocation | integration | critical |
| [TC-OPPTY-137](#tc-oppty-137-utilization-priority-change-reflects-in-candidate-sort) | Utilization Priority change reflects in candidate sort | Allocation & Deallocation | integration | high |
| [TC-OPPTY-138](#tc-oppty-138-allocation-recalculates-availability-and-utilization-priority) | Allocation recalculates availability and Utilization Priority | Allocation & Deallocation | integration | high |
| [TC-OPPTY-139](#tc-oppty-139-deallocation-ratings-reach-employee-ratings-only-after-acknowledgment) | Deallocation ratings reach Employee Ratings only after acknowledgment | Allocation & Deallocation | integration | high |
| [TC-OPPTY-140](#tc-oppty-140-zoho-pm-change-on-a-linked-project) | Zoho PM change on a linked project | Allocation & Deallocation | integration | high |
| [TC-OPPTY-141](#tc-oppty-141-key-skills-and-match-come-from-the-skills-module) | Key Skills and match % come from the Skills module | Allocation & Deallocation | integration | medium |
| [TC-OPPTY-142](#tc-oppty-142-tm-of-dept-a-cannot-approve-a-dept-b-candidate) | TM of Dept A cannot approve a Dept B candidate | Allocation & Deallocation | integration | medium |
| [TC-OPPTY-143](#tc-oppty-143-new-permissions-are-configurable-in-admin-roles) | New permissions are configurable in Admin > Roles | Allocation & Deallocation | integration | medium |
| [TC-OPPTY-144](#tc-oppty-144-allocated-candidate-sees-the-project-in-their-profile) | Allocated candidate sees the project in their profile | Allocation & Deallocation | integration | medium |
| [TC-OPPTY-145](#tc-oppty-145-candidate-on-leave-during-interview) | Candidate on leave during interview | Allocation & Deallocation | integration | medium |
| [TC-OPPTY-146](#tc-oppty-146-pmo-bypasses-tm-approval) | PMO bypasses TM Approval | Allocation & Deallocation | functional | high |
| [TC-OPPTY-147](#tc-oppty-147-only-pmo-can-bypass) | Only PMO can bypass | Allocation & Deallocation | security | high |
| [TC-OPPTY-148](#tc-oppty-148-bypass-is-not-offered-for-pr-reviewer-requests) | Bypass is not offered for PR Reviewer requests | Allocation & Deallocation | negative | high |
| [TC-OPPTY-149](#tc-oppty-149-approving-when-every-seat-is-held-creates-an-approved-backup) | Approving when every seat is held creates an Approved · Backup | Allocation & Deallocation | functional | high |
| [TC-OPPTY-150](#tc-oppty-150-pmo-fills-a-free-seat-from-the-backup) | PMO fills a free seat from the backup | Allocation & Deallocation | functional | high |
| [TC-OPPTY-151](#tc-oppty-151-pmo-swaps-a-held-seat-with-the-backup) | PMO swaps a held seat with the backup | Allocation & Deallocation | functional | high |
| [TC-OPPTY-152](#tc-oppty-152-fill-seat-re-checks-the-backup-s-availability) | Fill Seat re-checks the backup's availability | Allocation & Deallocation | negative | high |
| [TC-OPPTY-153](#tc-oppty-153-backups-are-released-when-all-seats-are-won) | Backups are released when all seats are Won | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-154](#tc-oppty-154-maximum-number-of-backups-per-seat) | Maximum number of backups per seat | Allocation & Deallocation | boundary | medium |
| [TC-OPPTY-155](#tc-oppty-155-being-prepared-blocks-the-seat-and-shows-the-checklist) | Being Prepared blocks the seat and shows the checklist | Allocation & Deallocation | functional | high |
| [TC-OPPTY-156](#tc-oppty-156-same-person-cannot-block-seats-on-two-opportunities-at-once) | Same person cannot block seats on two Opportunities at once | Allocation & Deallocation | negative | high |
| [TC-OPPTY-157](#tc-oppty-157-round-not-cleared-rejects-the-candidate-cleared-goes-to-next-round) | Round not cleared rejects the candidate; cleared goes to next round | Allocation & Deallocation | functional | high |
| [TC-OPPTY-158](#tc-oppty-158-rejecting-from-any-stage-reopens-the-seat) | Rejecting from any stage reopens the seat | Allocation & Deallocation | functional | high |
| [TC-OPPTY-159](#tc-oppty-159-rejected-candidate-can-be-shortlisted-again) | Rejected candidate can be shortlisted again | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-160](#tc-oppty-160-project-allocated-candidates-cannot-be-rejected) | Project Allocated candidates cannot be rejected | Allocation & Deallocation | negative | high |
| [TC-OPPTY-161](#tc-oppty-161-prospect-won-needs-a-linked-project-before-allocation) | Prospect Won needs a linked project before allocation | Allocation & Deallocation | functional | high |
| [TC-OPPTY-162](#tc-oppty-162-cancel-request-client-won-moves-in-process-cards-to-won) | Cancel Request — Client Won moves in-process cards to Won | Allocation & Deallocation | functional | high |
| [TC-OPPTY-163](#tc-oppty-163-cancel-request-on-hold-freezes-all-cards) | Cancel Request — On Hold freezes all cards | Allocation & Deallocation | functional | high |
| [TC-OPPTY-164](#tc-oppty-164-cancel-request-lost-releases-candidates) | Cancel Request — Lost releases candidates | Allocation & Deallocation | functional | high |
| [TC-OPPTY-165](#tc-oppty-165-cancel-request-no-longer-required-needs-confirmation) | Cancel Request — No Longer Required needs confirmation | Allocation & Deallocation | functional | high |
| [TC-OPPTY-166](#tc-oppty-166-reopen-a-lost-no-longer-required-ticket) | Reopen a Lost / No Longer Required ticket | Allocation & Deallocation | functional | medium |
| [TC-OPPTY-167](#tc-oppty-167-only-pmo-can-use-the-cancel-request-dialog) | Only PMO can use the Cancel Request dialog | Allocation & Deallocation | security | high |
| [TC-OPPTY-168](#tc-oppty-168-my-opportunity-and-team-opportunity-tabs) | My Opportunity and Team Opportunity tabs | Allocation & Deallocation | functional | medium |

---

## Allocation & Deallocation

168 test cases.

### Accessibility (3)

#### TC-OPPTY-132 — Kanban status change is possible by keyboard

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 UX; WCAG 2.1.1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Accessibility |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Tab to a card
2. Change status with keyboard only

**Expected**

Status can be changed without a mouse (dropdown or keyboard drag)

#### TC-OPPTY-133 — Shortlisting Drawer is accessible

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — WCAG 2.1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Accessibility |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM

**Steps**

1. Open the drawer by keyboard
2. Check focus, labels, Esc to close

**Expected**

Focus moves into the drawer and returns on close; fields have labels; axe scan has no serious issues

#### TC-OPPTY-134 — Status and priority are not shown by colour only

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — WCAG 1.4.1 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Accessibility |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. View red-border archive, aging flags and highlights

**Expected**

Each has a text label or icon besides colour

### Boundary (6)

#### TC-OPPTY-015 — Long and special-character text in Opportunity fields

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §3.3 field validations |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Max lengths not defined in FRD (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO

**Steps**

1. Create an Opportunity whose title/notes contain 500+ characters, emoji, quotes and <script>alert(1)</script>
2. Save and reopen it

**Expected**

Saved text displays exactly as entered (escaped, not executed); a max-length error appears if a limit exists

#### TC-OPPTY-021 — Number of openings rejects 0, negative and decimal values

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #2 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Add a Position
2. Try openings = 0, -1, 1.5, and a letter
3. Save each time

**Expected**

Each invalid value is rejected with a clear error; 1 is accepted

**Test Data**

- `openings`: 0, -1, 1.5, a, 1

#### TC-OPPTY-022 — Upper limit for number of openings

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Max openings not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO

**Steps**

1. Add a Position with openings = 99, then 100, then 999

**Expected**

Values within the agreed max save; above it shows a max-limit error

#### TC-OPPTY-058 — Interview recording rejects unsupported or too-large files

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §3.3 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Allowed formats/sizes not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO

**Steps**

1. Upload a .exe file
2. Upload a file above the size limit

**Expected**

Both rejected with clear messages

#### TC-OPPTY-068 — Date filter boundaries include the edge day

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.4 #33 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Tickets created exactly 30 and 31 days ago

**Steps**

1. Apply Last 1 month

**Expected**

Inclusion of the 30/31-day tickets matches the agreed rule consistently

#### TC-OPPTY-154 — Maximum number of backups per seat

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Review D10 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Limit not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM

**Steps**

1. Approve backups until the limit, then one more

**Expected**

Extra backup blocked with a clear message (or no limit, per decision)

### Functional (89)

#### TC-OPPTY-003 — PMO creates an Interview–Prospect Opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rules 2, 11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Add New Opportunity
2. Select Client Type = Prospective Client
3. Fill Prospect + pre-sales fields
4. Set Interview Required = Yes and save

**Expected**

Opportunity saved; Client Details shows Prospect/Opportunity fields (not project fields); card appears on the Interview Kanban

#### TC-OPPTY-004 — PMO creates a Direct–Existing Client request (Project Allocation)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rules 2, 4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; An active existing-client project exists

**Steps**

1. Open Add New Opportunity
2. Select Existing Client + project
3. Set Interview Required = No
4. Save

**Expected**

Request appears in the Direct Allocation List View under the "Project Allocation" sub-filter, not on the Kanban

#### TC-OPPTY-005 — PMO creates a Direct–Prospect request (Prospect Allocation)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 2 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Add New Opportunity
2. Select Prospective Client
3. Set Interview Required = No
4. Save

**Expected**

Request appears in the Direct Allocation List View under the "Prospect Allocation" sub-filter

#### TC-OPPTY-006 — CSM creates an Opportunity for an existing client

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 3; §7.6 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM; CSM is CSM on at least one active project

**Steps**

1. Open Add New Opportunity
2. Select Existing Client and the project
3. Fill required fields and save

**Expected**

Opportunity saved; CSM sees it in their list

#### TC-OPPTY-007 — CSM creates an Opportunity for a prospect

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 3; §7.6 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM

**Steps**

1. Open Add New Opportunity
2. Select Prospective Client
3. Fill required fields and save

**Expected**

Opportunity saved; CSM sees it in their list

#### TC-OPPTY-008 — Existing Client selection auto-pulls the linked project data

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Client Details; §4 rule 11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Project "P1" has client, PM and department data in SimERP

**Steps**

1. Open Add New Opportunity
2. Select Client Type = Existing Client
3. Choose project P1

**Expected**

Client Details auto-fills from P1 (client name, project, PM); auto-filled fields match the project record

#### TC-OPPTY-009 — Switching Client Type clears the other section's values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 11 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Add New Opportunity
2. Select Existing Client and a project
3. Switch Client Type to Prospective Client
4. Switch back to Existing Client

**Expected**

Switching swaps the field set; no stale project data is submitted with a prospect; no errors

#### TC-OPPTY-016 — Duplicate Opportunity for the same prospect shows a warning

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Duplicate handling not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; An open Opportunity already exists for prospect "Acme"

**Steps**

1. Create a new Opportunity for prospect "Acme"

**Expected**

System warns that an open Opportunity exists for Acme (or blocks it) before saving

#### TC-OPPTY-018 — Position inherits Opportunity-level details

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 1 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Opportunity has client details and special instructions

**Steps**

1. Add a Position to the Opportunity
2. Open the Position details

**Expected**

Opportunity-level details (client, type, special instructions) are shown on the Position without re-entry

#### TC-OPPTY-019 — CSM adds and edits a Position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.6 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM; CSM owns or is assigned an Opportunity

**Steps**

1. Open the Opportunity
2. Add a Position
3. Edit its Tech Stack
4. Save

**Expected**

Position created and edited; change appears in the audit log

#### TC-OPPTY-024 — Increasing openings on a fully filled Position reopens it

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 13; Review §5.1 #4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Position has 1 opening, filled

**Steps**

1. Edit the Position
2. Set openings = 2
3. Save

**Expected**

One new slot appears as "Pending to Shortlist"; the ticket becomes active again; notification #13 fires

#### TC-OPPTY-026 — Editing a Position after shortlisting started notifies TM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 18; §11 #3; §8 UX |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Position has at least one Shortlisted candidate

**Steps**

1. Edit the Position Tech Stack
2. Save

**Expected**

TM receives "Position '{title}' updated — please re-review shortlist"; edited fields are highlighted

#### TC-OPPTY-027 — Multi-department Position is visible to every department involved

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | EM |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Which department's TM approves is not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as EM; Position needs React (Dept A) and Node (Dept B)

**Steps**

1. Log in as EM for Dept A and B
2. Open the Position

**Expected**

Position shows both departments; candidates from both departments can be nominated

#### TC-OPPTY-028 — Complex Position edits open in a side drawer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 UX rules |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open a Position
2. Click edit on Position title / tech requirements / JD

**Expected**

A side-drawer editor opens, not a full-screen form

#### TC-OPPTY-031 — Shortlisting Drawer shows all required fields

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Shortlisting Drawer; §7.3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; Position has candidate E1

**Steps**

1. Click E1's name on the shortlisting screen

**Expected**

Drawer opens with Availability Date, Utilization Priority, Key Skills, Shift Preference, Current Allocations, Visa Status and a link to the full Employee Profile; values match E1's profile

#### TC-OPPTY-032 — Employee Profile link in the drawer opens the right profile

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Shortlisting Drawer |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM

**Steps**

1. Open the drawer for E1
2. Click the Employee Profile link

**Expected**

E1's full profile opens; returning keeps the shortlisting screen state

#### TC-OPPTY-033 — Default candidate sort uses Utilization Priority and skill match

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 14 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Exact sort formula (tier, Value Score, seniority) not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; Bench employee B (P1) and partly allocated employee A (P3) both match the skills

**Steps**

1. Open candidate selection for the Position

**Expected**

B is listed above A by default

#### TC-OPPTY-034 — Preferred Candidate flag is highlighted on the shortlisting screen

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 14; §11 #7 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Who sets the flag (PMO/TM/RM) is inconsistent (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; Candidate E1 is flagged Preferred

**Steps**

1. Open the shortlisting screen

**Expected**

E1 is visually highlighted as Preferred; notification #7 sent

#### TC-OPPTY-035 — PM can shortlist candidates on an assigned Opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.5; §4 rule 24 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; PM is assigned the Opportunity

**Steps**

1. Open the Position
2. Shortlist candidate E1

**Expected**

E1 is Shortlisted; TM Approval is still pending

#### TC-OPPTY-040 — Rejected candidate can be nominated to another Position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2; §4 rule 6 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 was Rejected on Position A

**Steps**

1. Add E1 to Position B in the same Opportunity

**Expected**

E1 added to Position B as "Considered"; Position A history keeps the rejection

#### TC-OPPTY-041 — Rejecting a candidate reopens the slot

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 6; §11 #10 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 is in Waiting for Feedback

**Steps**

1. Mark E1 Rejected with a reason

**Expected**

E1 tag = Rejected; the slot returns to "Pending to Shortlist"; PMO and raiser get notification #10; reason in audit log

#### TC-OPPTY-042 — Per-Position candidate tabs show Processed / Selected / Rejected

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.2; §8 UX |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Position has candidates in each state

**Steps**

1. Open the Position
2. Switch between Processed, Selected and Rejected tabs

**Expected**

Each tab lists only the matching candidates; counts add up to the total

#### TC-OPPTY-044 — Candidate on leave or serving notice is flagged in the drawer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.2 #15 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not in FRD drawer field list (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 has approved leave next week; E2 is serving notice

**Steps**

1. Open the drawer for E1 and E2

**Expected**

Leave dates and notice-period status are visible

#### TC-OPPTY-046 — Preferred flag clears when the candidate is Rejected

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.2 #18 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not defined in FRD (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 is Preferred

**Steps**

1. Reject E1

**Expected**

Preferred highlight is removed from E1

#### TC-OPPTY-048 — TM assigns an interviewer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §5 flow F5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | No notification defined for interviewer assignment (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 is Being Prepared

**Steps**

1. Open E1's card
2. Assign interviewer "I1"

**Expected**

I1 is saved on the card

#### TC-OPPTY-049 — Scheduling an interview notifies candidate and interviewer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §11 #9 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 is Being Prepared with interviewer I1

**Steps**

1. Set interview date/time
2. Save

**Expected**

E1 moves to Interview Scheduled; E1 and I1 receive notification #9 with the date and time

#### TC-OPPTY-050 — Finalized interview schedule is locked

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 17 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Who can unlock not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 has a finalized interview schedule

**Steps**

1. Try to edit the interview date

**Expected**

Edit is locked; an explicit unlock (with permission) is needed

#### TC-OPPTY-052 — Round-skip asks for confirmation and marks the candidate Selected

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 20; §11 #11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Who can skip (PMO only vs TM/EM) and whether TM Approval still applies (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 cleared Round 1

**Steps**

1. Choose "Skip Interview Rounds"
2. Confirm "Skip remaining interview rounds and mark as Selected?"

**Expected**

E1 jumps to Won / Selected; the skip and the user who did it are in the audit log

#### TC-OPPTY-054 — TM Approval happens after Shortlisting and before Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — TM Approval gate; FRD §4 rule 19 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 picked in Shortlisting (not sent)

**Steps**

1. Open the Position card
2. Approve E1

**Expected**

E1 moves to Being Prepared with the seat blocked; no further PM approval step exists; approval logged with approver name

#### TC-OPPTY-057 — Interview recording is attached when rounds are cleared

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §5 flow F9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Storage, format, size and access not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 cleared all rounds

**Steps**

1. Attach an interview recording
2. Mark Won

**Expected**

Recording is saved and visible to PMO/TM

#### TC-OPPTY-059 — Multi-opening Position stays active until all openings fill

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 13; §11 #13 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Position has 2 openings; E1 approved

**Steps**

1. Check the ticket after E1 is approved

**Expected**

Ticket stays active; 1 opening still "Pending to Shortlist"; notification #13 "still has 1 opening(s)" sent to PMO/TM

#### TC-OPPTY-060 — Status change via single-click dropdown

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 UX |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 is Shortlisted

**Steps**

1. Change E1's status using the card dropdown (no drag)

**Expected**

Status updates in one click; board does not need horizontal scrolling

#### TC-OPPTY-061 — Status changes can be reverted and are logged

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 17 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 moved Shortlisted → Being Prepared

**Steps**

1. Revert E1 to Shortlisted

**Expected**

Status reverted; full trail of both changes kept

#### TC-OPPTY-063 — Candidate stuck in Waiting for Feedback is flagged by aging

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Aging rule inverted / TBD in FRD (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 has been in Waiting for Feedback for more than 7 days

**Steps**

1. Open the Kanban

**Expected**

Card shows the aging priority flag

#### TC-OPPTY-066 — Kanban defaults hide Lost and No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 7 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; There are active, Lost and No Longer Required tickets

**Steps**

1. Open the Kanban without changing filters

**Expected**

Only active tickets shown; Lost and No Longer Required hidden

#### TC-OPPTY-067 — Kanban date-range filter options work

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Which date the filter uses is not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Tickets exist across the last 12 months

**Steps**

1. Select Last 1 month, then 3, then 6 months, then a custom Day 1–365 range

**Expected**

Each filter shows only tickets inside the range

#### TC-OPPTY-069 — Board sorts by Ticket ID, Position and Interview Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 UX |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Sort by each option

**Expected**

Order is correct and stable for equal values

#### TC-OPPTY-070 — Global filters: department, project, status

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 UX |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Apply each filter alone, then combined
2. Clear filters

**Expected**

Results match each filter; clearing restores the full list

#### TC-OPPTY-071 — Empty filter result shows an empty-state message

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — KB allocation-requests empty-state rule |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Apply a filter combination with no matches

**Expected**

Clear empty-state message, not a blank board

#### TC-OPPTY-072 — PM list shows an Interview / Direct flag on every row

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 24; §7.5 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; PM is assigned one Interview and one Direct Opportunity

**Steps**

1. Open the PM Opportunities list

**Expected**

Each row shows the correct Interview or Direct flag

#### TC-OPPTY-073 — Recently edited fields are highlighted

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 UX |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; A Position field was edited today

**Steps**

1. Open the ticket

**Expected**

Changed field highlighted with an alert banner; change log shows old and new values

#### TC-OPPTY-076 — PMO can drag Kanban cards

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 21 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Board Permissions |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Ticket in Shortlisted

**Steps**

1. Drag the card to Being Prepared

**Expected**

Card moves; status saved; audit entry created

#### TC-OPPTY-084 — PMO moves a Cancelled ticket to No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 No Longer Required; §4 rule 22 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Ticket has the Cancelled tag

**Steps**

1. Move the ticket to No Longer Required
2. Confirm

**Expected**

Ticket archived; red border shown in the archive view; hidden from the default Kanban

#### TC-OPPTY-086 — Cancelled ticket stops reminders and alerts participants

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L2 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | FRD does not freeze anything on cancel (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Ticket tagged Cancelled with a scheduled interview

**Steps**

1. Check reminders and notifications after the tag

**Expected**

Candidate and interviewer are told; reminders stop

#### TC-OPPTY-087 — Removing a Cancelled tag before archive

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §9 open question |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | CSM |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Tag removal not decided (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as CSM; Ticket tagged Cancelled, not yet NLR

**Steps**

1. Remove the Cancelled tag

**Expected**

Tag removed and logged; PMO informed

#### TC-OPPTY-089 — Marking an Opportunity Lost closes open candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Lost; §11 #15 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Cascade to candidates not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Opportunity has 2 Positions with candidates in progress

**Steps**

1. Mark the Opportunity Lost

**Expected**

Opportunity = Lost; in-progress candidates are closed and notified; notification #15 sent; archived

#### TC-OPPTY-091 — Archived tickets can be viewed with filters

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2; §4 rule 7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open the archive / include Lost and NLR in filters

**Expected**

Archived tickets are listed with their last stage and the red-border highlight for NLR

#### TC-OPPTY-092 — On Hold ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 side statuses |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | On Hold rules not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Active ticket

**Steps**

1. Put the ticket On Hold
2. Resume it

**Expected**

On Hold shown on card; resume returns it to the previous stage; both logged

#### TC-OPPTY-094 — PMO assigns an Opportunity to a CSM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 23; §7.6 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Assign CSM "CSM1"

**Expected**

CSM1 sees it alongside the Opportunities they created

#### TC-OPPTY-098 — Assigned followers on prospect tickets get access

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 10; §11 #17 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Follower vs default access not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Prospect ticket

**Steps**

1. Add a follower

**Expected**

Follower can view the ticket and gets notification #17

#### TC-OPPTY-101 — Dual role PM + TM sees both lists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.5 #37 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PM |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Dual-role behaviour not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PM; User has PM and TM roles

**Steps**

1. Open Opportunities

**Expected**

Assigned PM list and TM shortlisting/approval queue both available; cannot approve their own shortlist alone

#### TC-OPPTY-103 — PM adds prep material on top of PMO's

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 5; §7.5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; Position has PMO material

**Steps**

1. Add new material as PM

**Expected**

PM material listed separately; PMO material unchanged

#### TC-OPPTY-105 — PM edits or deletes their own material

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §9 open question |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PM |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not decided (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PM; PM added material earlier

**Steps**

1. Edit then delete it

**Expected**

Allowed (or blocked) per the final decision

#### TC-OPPTY-107 — Candidate sees inherited material and completes checklist items

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; Employee is Shortlisted

**Steps**

1. Open My Opportunities > Prep Checklist
2. Tick an item

**Expected**

Material visible; ticked item saved

#### TC-OPPTY-109 — Send Reminder notifies pending candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.5 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; Candidate has incomplete prep

**Steps**

1. Click Send Reminder

**Expected**

Candidate (and TM) get a reminder; button gives feedback

#### TC-OPPTY-110 — EM department question bank is available to Positions in that department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | EM |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as EM; EM maintains a question bank for Dept A

**Steps**

1. Create a Position in Dept A

**Expected**

Department question bank is offered/attached

#### TC-OPPTY-111 — Project linked at Opportunity creation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 12; §11 #14 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Project Association |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Create an Opportunity with a project linked

**Expected**

Project Association tab shows the project; notification #14

#### TC-OPPTY-112 — Prospect Opportunity linked to a project later

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 12 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Project Association |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Manual vs automatic trigger not decided (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Prospect Opportunity with a Won candidate

**Steps**

1. Open Project Association
2. Select the new project from the dropdown
3. Save

**Expected**

Project linked; PM (new owner) and PMO notified

#### TC-OPPTY-113 — Ticket Details has 3 tabs

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §9 tab structure |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Project Association |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Ticket Details

**Expected**

Tabs: Position Details, Preparation Material, Project Association

#### TC-OPPTY-115 — Employee allocated via an Opportunity can be deallocated

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §5 flow K–L; live deallocation flow |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | CSM |
| **Sub Module** | Deallocation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | FRD initiation flow missing; assumed same as live 3-step flow (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as CSM; E1 reached Project Allocated through an Opportunity

**Steps**

1. Raise deallocation for E1 (reason, date, ratings, feedback)
2. Confirm in the second dialog

**Expected**

DA ticket created in Open/Awaiting; visible in Allocations Request Tracking

#### TC-OPPTY-116 — PMO acknowledges the deallocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Live deallocation flow (verified 2026-09-24) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Deallocation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Open DA ticket for E1

**Steps**

1. Open the DA ticket
2. Click Acknowledge & Deallocate
3. Confirm

**Expected**

Allocation ends on the deallocation date; ratings appear on Employee Ratings

#### TC-OPPTY-117 — PM tracks deallocations in Request Tracking

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.5 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Deallocation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; DA ticket exists on PM's project

**Steps**

1. Open Allocations Request Tracking

**Expected**

DA ticket listed with its status

#### TC-OPPTY-118 — Admin views an open deallocation in Ticket Details

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §6 Admin screens |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Deallocation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Admin; Open DA ticket

**Steps**

1. Open the ticket via the eye icon

**Expected**

Deallocation status Open shown, read-only

#### TC-OPPTY-119 — TM tracks deallocations for their team

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Deallocation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM

**Steps**

1. Open deallocation tracking as TM

**Expected**

Only deallocations for TM's team shown

#### TC-OPPTY-120 — Notification #1: New Opportunity raised

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §11 #1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Trigger: New Opportunity raised
2. Check notifications of every role in the table, and of one role not in it

**Expected**

PMO, TM (if Interview) receive "New ticket #{ticketId} raised for {Position}" with placeholders filled and a working link; other roles receive nothing

#### TC-OPPTY-121 — Notification #2: Position added

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §11 #2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Trigger: Position added
2. Check notifications of every role in the table, and of one role not in it

**Expected**

TM, EM (if multi-dept) receive "New Position '{title}' added under {Opportunity}" with placeholders filled and a working link; other roles receive nothing

#### TC-OPPTY-122 — Notification #5: Ticket reaches shortlisting

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §11 #5 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Trigger: Ticket reaches shortlisting
2. Check notifications of every role in the table, and of one role not in it

**Expected**

TM receive "Ticket #{ticketId} ready for shortlisting review" with placeholders filled and a working link; other roles receive nothing

#### TC-OPPTY-123 — Notification #12: Final approval granted

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §11 #12 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Trigger: Final approval granted
2. Check notifications of every role in the table, and of one role not in it

**Expected**

PMO, PM/CSM raiser, TM, Employee receive "{Candidate} approved for {Position} — proceed to Project Association" with placeholders filled and a working link; other roles receive nothing

#### TC-OPPTY-124 — Notification #14: Project linked

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §11 #14 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Trigger: Project linked
2. Check notifications of every role in the table, and of one role not in it

**Expected**

PM (new owner), PMO receive "{Opportunity} linked to Project {projectName}" with placeholders filled and a working link; other roles receive nothing

#### TC-OPPTY-126 — Dual-role user gets one notification, not duplicates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.6 #39 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; User is PM + TM on the same ticket

**Steps**

1. Trigger an event that notifies both PM and TM

**Expected**

User receives a single notification

#### TC-OPPTY-129 — Next Steps callout shows on the ticket card

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Employee View |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; Employee is Shortlisted

**Steps**

1. Open the ticket card

**Expected**

"Next Steps" callout visible; no extra status column

#### TC-OPPTY-130 — Dashboard shows Projects / Peer Reviews / Allocations & Interviews

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Employee View |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee

**Steps**

1. Open the Employee Dashboard

**Expected**

Three sections render with correct data

#### TC-OPPTY-131 — Month-wise activity timeline

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Employee View |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; Employee has activity in several months

**Steps**

1. Open Profile timeline

**Expected**

Activities grouped by month, newest first

#### TC-OPPTY-146 — PMO bypasses TM Approval

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — TM Approval "Approve or Bypass" |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Bypass reason/notification not stated (review D12) (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 in Shortlisting awaiting TM

**Steps**

1. Choose Bypass
2. Enter a reason
3. Confirm

**Expected**

E1 moves to Being Prepared; bypass, reason and PMO name logged; TM notified

#### TC-OPPTY-149 — Approving when every seat is held creates an Approved · Backup

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Approved · Backup — "every seat held" |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; Position has 1 seat, already held by E1

**Steps**

1. Approve E2

**Expected**

E2 shows as "Approved · Backup", holds no seat, waits for PMO; E1 unaffected

#### TC-OPPTY-150 — PMO fills a free seat from the backup

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Fill Seat / Swap |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 rejected (seat free); E2 is Approved · Backup

**Steps**

1. Choose "Fill Seat" for E2

**Expected**

E2 moves to Being Prepared with the seat blocked; no second TM approval needed

#### TC-OPPTY-151 — PMO swaps a held seat with the backup

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Fill Seat / Swap |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Where the swapped-out candidate goes is not stated (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 in Being Prepared; E2 is Approved · Backup

**Steps**

1. Choose "Swap" between E1 and E2
2. Give a reason

**Expected**

E2 takes the seat in Being Prepared; E1 is released (tagged with the reason); both notified

#### TC-OPPTY-153 — Backups are released when all seats are Won

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Review D10 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not stated (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; All seats Won; E3 still Approved · Backup

**Steps**

1. Check E3 after the last seat is Won

**Expected**

E3 released and notified

#### TC-OPPTY-155 — Being Prepared blocks the seat and shows the checklist

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Being Prepared — "Seat blocked" |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; E1 approved

**Steps**

1. Open E1's card as the candidate

**Expected**

Seat shown as blocked; Preparation Checklist available to the candidate

#### TC-OPPTY-157 — Round not cleared rejects the candidate; cleared goes to next round

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — next round loop; Reject Candidate |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 in Waiting for Feedback, Round 1 of 2

**Steps**

1. Mark Round 1 cleared
2. Schedule Round 2
3. Mark Round 2 not cleared

**Expected**

After Round 1, E1 loops back to Interview Scheduled; after Round 2 not cleared, E1 goes to Rejected and the seat reopens

#### TC-OPPTY-158 — Rejecting from any stage reopens the seat

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Reject Candidate · Remove · Re-initiate |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Candidates in Shortlisting, Being Prepared, Interview Scheduled, Waiting for Feedback and Won

**Steps**

1. Reject each with a reason

**Expected**

Each goes to the Rejected column; each seat returns to Pending to Shortlist; who rejected (PMO/Client/TM) recorded

#### TC-OPPTY-159 — Rejected candidate can be shortlisted again

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Rejected column — "Can be shortlisted again" |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 in the Rejected column

**Steps**

1. Shortlist E1 again

**Expected**

E1 back in Shortlisting; history keeps the earlier rejection

#### TC-OPPTY-161 — Prospect Won needs a linked project before allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Needs a linked project |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Prospect Opportunity; E1 Won; no project linked

**Steps**

1. Try to move E1 to Project Allocated
2. Link the project
3. Try again

**Expected**

First attempt blocked with "Link Project first"; after linking, an approved allocation is created

#### TC-OPPTY-162 — Cancel Request — Client Won moves in-process cards to Won

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Whole ticket: Client Won |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Rule when cards outnumber seats (review D13) (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Ticket with candidates in process, awaiting approval and backups

**Steps**

1. Open Cancel Request
2. Choose Client Won

**Expected**

In-process cards move to Won; awaiting-approval cards and backups handled as defined

#### TC-OPPTY-163 — Cancel Request — On Hold freezes all cards

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Whole ticket: On Hold |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Interviews and seat blocks during hold (review D14) (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Active ticket

**Steps**

1. Choose On Hold
2. Try to move any card

**Expected**

Ticket in On Hold column; cards frozen in place and cannot move until resumed

#### TC-OPPTY-164 — Cancel Request — Lost releases candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Whole ticket: Lost |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Active ticket with candidates

**Steps**

1. Choose Lost
2. Confirm

**Expected**

Ticket in Lost column; candidates released and notified; seats freed

#### TC-OPPTY-165 — Cancel Request — No Longer Required needs confirmation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Whole ticket: No Longer Required |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Active ticket

**Steps**

1. Choose No Longer Required
2. Cancel the confirmation
3. Choose again and confirm

**Expected**

First time nothing changes; second time ticket moves to No Longer Required and candidates are released

#### TC-OPPTY-166 — Reopen a Lost / No Longer Required ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Whole ticket: Open (reopen) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Who can reopen, and from which states (review D16) (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Ticket in Lost

**Steps**

1. Reopen it

**Expected**

Ticket returns to Open; released candidates are cleared off their cards; seats back to Pending to Shortlist

#### TC-OPPTY-168 — My Opportunity and Team Opportunity tabs

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — board tabs |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; TM has own and team Opportunities

**Steps**

1. Open My Opportunity, then Team Opportunity

**Expected**

Each tab lists only the matching Opportunities

### Integration (11)

#### TC-OPPTY-135 — Project Allocated creates exactly one allocation in the existing allocation system

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §2 C1/C2, §6 X1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Relationship to v2.3 ticketing not decided (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 approved for a Position on project P1

**Steps**

1. Move E1 to Project Allocated
2. Open PM Projects for P1, Requests tracking, and E1's allocations

**Expected**

One allocation with the requested % appears everywhere; no duplicate NA ticket

#### TC-OPPTY-136 — Over-allocation is prevented across Opportunity and NA ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L3, §6 X2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 is 60% allocated and Selected on an Opportunity needing 60%

**Steps**

1. Approve E1

**Expected**

Blocked or warned that E1 would exceed 100%

#### TC-OPPTY-137 — Utilization Priority change reflects in candidate sort

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 manual priority = Not set

**Steps**

1. Set E1 manual priority to P1 in Employee Details
2. Open candidate selection

**Expected**

E1 moves up the default sort; drawer shows P1

#### TC-OPPTY-138 — Allocation recalculates availability and Utilization Priority

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 bench, P1

**Steps**

1. Allocate E1 at 100% via an Opportunity
2. Open Employee Details

**Expected**

Effective Availability drops; tier/Value Score recalculate

#### TC-OPPTY-139 — Deallocation ratings reach Employee Ratings only after acknowledgment

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM; E1 allocated via an Opportunity

**Steps**

1. Deallocate E1 (CSM)
2. Check Employee Ratings
3. PMO acknowledges
4. Check again

**Expected**

Ratings absent before acknowledgment, present after

#### TC-OPPTY-140 — Zoho PM change on a linked project

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §2 C5, §6 X5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not decided (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Opportunity linked to P1; PM1 assigned

**Steps**

1. Change P1's PM to PM2 in Zoho
2. Run the sync

**Expected**

Ownership follows the agreed rule (PM2 inherits or manual assignment kept)

#### TC-OPPTY-141 — Key Skills and match % come from the Skills module

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Match % formula not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 has skills React, Node

**Steps**

1. Add skill Go to E1 in Skills
2. Open the drawer and candidate list

**Expected**

Key Skills shows Go; match % updates

#### TC-OPPTY-142 — TM of Dept A cannot approve a Dept B candidate

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X8 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; Multi-department Position

**Steps**

1. Try to approve a Dept B candidate as TM of Dept A

**Expected**

Blocked

#### TC-OPPTY-143 — New permissions are configurable in Admin > Roles

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X10 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Admin > Roles
2. Find Opportunity permissions (create, assign, cancel, move stage, skip, approve)

**Expected**

Permissions listed and changes take effect in UI and API

#### TC-OPPTY-144 — Allocated candidate sees the project in their profile

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X11 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; E1 reached Project Allocated

**Steps**

1. Open E1 Profile > Projects and Dashboard

**Expected**

Project listed; Allocations & Interviews section updated

#### TC-OPPTY-145 — Candidate on leave during interview

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X6 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Integration |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 has leave overlapping the interview date

**Steps**

1. Schedule the interview on a leave day

**Expected**

Warning about the leave

### Negative (31)

#### TC-OPPTY-010 — PM has no Add New Opportunity action

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 3; §7.5 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM

**Steps**

1. Open the Opportunities list as PM

**Expected**

No "Add New Opportunity" or "New Allocation Request" button anywhere for PM

#### TC-OPPTY-011 — Opportunity cannot be saved without the mandatory fields

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.2 fields owned |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Add New Opportunity
2. Leave Opportunity Request Type, Client Type and Interview Required empty
3. Click Save

**Expected**

Save blocked; each mandatory field shows an inline error; nothing is created

#### TC-OPPTY-012 — Existing Client without a project selected cannot be saved

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 11 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Add New Opportunity
2. Select Existing Client
3. Do not pick a project
4. Save

**Expected**

Save blocked with a "project required" error

#### TC-OPPTY-013 — Closed or archived projects are not offered for Existing Client

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #8 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | FRD does not say which projects are selectable (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Project "Pclosed" is closed

**Steps**

1. Open Add New Opportunity
2. Select Existing Client
3. Search for Pclosed in the project picker

**Expected**

Pclosed is not listed (or is listed as disabled)

#### TC-OPPTY-014 — Double-clicking Save creates only one Opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — KB allocation-requests double-submit rule |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Fill a valid Opportunity form
2. Double-click Save quickly

**Expected**

Exactly one Opportunity and ticket ID created

#### TC-OPPTY-020 — PM cannot edit Position details

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PM |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Rule 18 / notification #3 still say PM edits Positions (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PM; PM is assigned an Opportunity with a Position

**Steps**

1. Open the assigned Opportunity
2. Open the Position

**Expected**

Position fields are read-only for PM; no Edit or Save controls

#### TC-OPPTY-023 — Openings cannot be reduced below positions already filled

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Position has 3 openings, 2 filled

**Steps**

1. Edit the Position
2. Set openings = 1
3. Save

**Expected**

Save blocked with an error that 2 openings are already filled

#### TC-OPPTY-025 — Deleting a Position with candidates in interview needs confirmation

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Position deletion not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Position has a candidate in "Interview Scheduled"

**Steps**

1. Try to delete the Position

**Expected**

Confirmation dialog warns about active candidates; on confirm, candidates and interviewers are notified and history is kept

#### TC-OPPTY-036 — Removing a shortlisted candidate requires a reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 16; §11 #8 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 is Shortlisted

**Steps**

1. Remove E1 from the shortlist
2. Leave the reason empty and confirm

**Expected**

Blocked until a reason is entered; with a reason, E1 and the raiser get notification #8 including the reason

#### TC-OPPTY-037 — Reason cannot be only spaces or one character

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Minimum reason length not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 is Shortlisted

**Steps**

1. Remove E1 with reason "   ", then "."

**Expected**

Both rejected as invalid reasons

#### TC-OPPTY-038 — Same employee cannot be added twice to the same Position

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.2 #12 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; E1 is already a candidate on Position A

**Steps**

1. Add E1 to Position A again

**Expected**

Blocked with "already a candidate" message

#### TC-OPPTY-039 — Candidate In Process on Position A cannot be added to Position B at the same time

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Candidate status tag |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Block vs warning not decided; v2.3 uses a warning (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 is "In Process" on Position A in the same Opportunity

**Steps**

1. Add E1 to Position B

**Expected**

Blocked (or warned) because E1 is already In Process

#### TC-OPPTY-043 — Warning when the candidate has no free availability

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L3 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | FRD has no availability check (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as TM; E1 is already 100% allocated

**Steps**

1. Open the drawer for E1
2. Try to shortlist E1

**Expected**

Clear warning that E1 has 0% availability before shortlisting

#### TC-OPPTY-045 — Inactive / exited employees cannot be nominated

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.2 #15 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Employee X has left the company

**Steps**

1. Search for X when adding a candidate

**Expected**

X is not offered

#### TC-OPPTY-051 — Interview cannot be scheduled in the past

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.3 #21 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Schedule E1's interview for yesterday

**Expected**

Rejected with a date error

#### TC-OPPTY-053 — Cancelling the round-skip dialog changes nothing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 confirmation modals |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 cleared Round 1

**Steps**

1. Choose "Skip Interview Rounds"
2. Click Cancel

**Expected**

E1 stays in its current stage; nothing logged

#### TC-OPPTY-055 — Candidate cannot reach Being Prepared without TM Approval or Bypass

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — TM Approval gate |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 in Shortlisting

**Steps**

1. Try to move E1 straight to Being Prepared (UI drag and API)

**Expected**

Blocked until TM approves or PMO bypasses

#### TC-OPPTY-056 — TM rejects at the approval gate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Reject path from TM Approval |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; E1 in Shortlisting awaiting approval

**Steps**

1. Reject E1 with a reason

**Expected**

E1 goes to the Rejected column tagged "Before TM Approval"; the seat returns to Pending to Shortlist

#### TC-OPPTY-062 — Reverting Project Allocated does not leave an orphan allocation

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L6 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Side effects of reverts not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 is Project Allocated and has a project allocation

**Steps**

1. Try to revert E1 to Won

**Expected**

Either blocked, or the allocation is removed in the same action with a clear warning

#### TC-OPPTY-083 — Dismissing the cancel pop-up changes nothing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8 confirmation modals |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM

**Steps**

1. Click Cancel
2. Close the confirmation pop-up

**Expected**

No tag added; no notification

#### TC-OPPTY-088 — Cancelling a ticket that is already Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.4 #27 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | CSM |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as CSM; Ticket in Project Allocated

**Steps**

1. Try to cancel it

**Expected**

Blocked or redirected to the deallocation flow

#### TC-OPPTY-090 — CSM cannot mark an Opportunity Lost

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.6 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM

**Steps**

1. Look for a "Lost" action as CSM; try the API

**Expected**

Not available; API 403

#### TC-OPPTY-106 — Invalid prep-material URL is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L11 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Add "not a url" and "javascript:alert(1)" as links

**Expected**

Both rejected with a validation error

#### TC-OPPTY-108 — Checklist is locked outside Shortlisted / Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | Employee |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Probably should include Interview Scheduled (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as Employee; Employee is in Interview Scheduled

**Steps**

1. Try to tick a checklist item

**Expected**

Item cannot be changed

#### TC-OPPTY-114 — Cannot link a closed project

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.1 #8 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Project Association |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Try to link a closed project

**Expected**

Not offered or blocked

#### TC-OPPTY-125 — Moving a ticket to No Longer Required notifies participants

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §3.2 I6 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | §11 #16 is a confirmation dialog, not a notification (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO

**Steps**

1. Move a ticket to No Longer Required

**Expected**

Raiser, TM and in-progress candidates are notified

#### TC-OPPTY-127 — Notification link to a ticket the user lost access to

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §5.6 #41 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Notifications |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; PM was reassigned off the ticket

**Steps**

1. Click an old notification for that ticket

**Expected**

Friendly "no access" page, not an error

#### TC-OPPTY-148 — Bypass is not offered for PR Reviewer requests

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — v2.3 PR Reviewer rule; review D12 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not stated on the diagram (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; Position is a PR Reviewer request

**Steps**

1. Open the approval gate

**Expected**

Bypass hidden or disabled

#### TC-OPPTY-152 — Fill Seat re-checks the backup's availability

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Review D10 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not stated (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E2 is a backup but was since allocated 100% elsewhere

**Steps**

1. Choose "Fill Seat" for E2

**Expected**

Warning or block: E2 has no availability

#### TC-OPPTY-156 — Same person cannot block seats on two Opportunities at once

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Review D11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not stated (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 is in Being Prepared on Opportunity A

**Steps**

1. Approve E1 for Opportunity B

**Expected**

Blocked or warned

#### TC-OPPTY-160 — Project Allocated candidates cannot be rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Review D9/D5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not stated (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; E1 Project Allocated

**Steps**

1. Look for Reject on E1

**Expected**

Not available; deallocation flow is the only exit

### Performance (1)

#### TC-OPPTY-075 — Kanban loads quickly with a large data set

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — NFR — not in FRD |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | No performance target in FRD (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO; 500+ active tickets

**Steps**

1. Open the Kanban
2. Drag a card

**Expected**

Board loads within the agreed time (e.g. < 3 s) and dragging stays smooth

### Regression (1)

#### TC-OPPTY-074 — Counts on the board match the list and dashboard

| Field | Value |
| --- | --- |
| **Tags** | @regression, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §6 X9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Note counts per stage on the Kanban
2. Compare with the list view and dashboard

**Expected**

Counts are identical everywhere

### Security (14)

#### TC-OPPTY-077 — Admin cannot drag cards and sees the view-only banner

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Admin |
| **Sub Module** | Board Permissions |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Admin

**Steps**

1. Open the Kanban as Admin
2. Try to drag a card

**Expected**

Banner "You have department / view-scoped access. Kanban card dragging is exclusively managed by IS-PMO." shown; card does not move

#### TC-OPPTY-078 — CSM cannot drag cards or change status

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 21; §7.6 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Board Permissions |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM

**Steps**

1. Open the Kanban as CSM
2. Try to drag a card and use the status dropdown

**Expected**

Neither is possible

#### TC-OPPTY-079 — Employee cannot move cards on the main pipeline

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Board Permissions |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; Employee is a candidate

**Steps**

1. Open the employee Kanban
2. Try to drag own card

**Expected**

Card does not move

#### TC-OPPTY-080 — Status change is blocked at the API for non-PMO roles

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L7 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Board Permissions |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM; Valid CSM, Admin and PM sessions

**Steps**

1. Send the status-change API request directly with each session

**Expected**

API returns 403 for each; status unchanged

#### TC-OPPTY-081 — PM/TM write scope on their own tickets

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 21 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PM |
| **Sub Module** | Board Permissions |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | PM/TM write scope not re-verified (FRD §9) (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PM; PM is assigned a ticket

**Steps**

1. Try to change the ticket stage as PM, then as TM

**Expected**

Matches the confirmed permission matrix

#### TC-OPPTY-085 — Only PMO can move a ticket to No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 No Longer Required |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM; Ticket has the Cancelled tag

**Steps**

1. As CSM, TM, PM and Admin, try to move it to No Longer Required (UI and API)

**Expected**

Blocked for all non-PMO roles

#### TC-OPPTY-095 — PM sees only Opportunities assigned to them

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 23 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; PM1 assigned Opp A; Opp B assigned to PM2

**Steps**

1. Open the list as PM1
2. Open Opp B by direct URL
3. Call the Opp B API

**Expected**

Only Opp A listed; Opp B URL and API return 403

#### TC-OPPTY-096 — Reassignment removes the previous PM's access

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PM |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Reassignment rules not decided (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PM; Opp A assigned to PM1

**Steps**

1. PMO reassigns Opp A to PM2
2. PM1 refreshes and opens Opp A

**Expected**

PM1 no longer sees Opp A; PM2 does; history kept

#### TC-OPPTY-097 — Admin is limited to their department

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.1 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | Admin |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Admin scope contradictory in FRD (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as Admin; Admin of Dept A; ticket in Dept B

**Steps**

1. Open the Dept B ticket by URL and via API

**Expected**

Access denied

#### TC-OPPTY-099 — Candidate cannot see other candidates or confidential deal data

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §3.3; §4 L10 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | Employee |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Field-level visibility not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as Employee; Employee is a candidate on a prospect Opportunity

**Steps**

1. Open the Opportunity from the employee view

**Expected**

Only own candidacy and prep material shown; no other candidates or deal value

#### TC-OPPTY-100 — Rejected candidate loses access to Position prep material

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — Review §4 L8 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | Employee |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | Not defined (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as Employee; Employee was Rejected

**Steps**

1. Open the old prep material link

**Expected**

Access denied or hidden

#### TC-OPPTY-104 — PM cannot edit or delete PMO material

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PM |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PM; Position has PMO material

**Steps**

1. Look for edit/delete on PMO items; try the API

**Expected**

No controls; API 403

#### TC-OPPTY-147 — Only PMO can bypass

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — TM ⇄ PMO on the approval gate |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM

**Steps**

1. As TM, PM, CSM and Admin, look for Bypass; call the bypass API

**Expected**

Bypass not shown; API 403 for every non-PMO role

#### TC-OPPTY-167 — Only PMO can use the Cancel Request dialog

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — Cancel Request dialog (PMO) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | CSM |
| **Sub Module** | Approval, Backup & Ticket States |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | FRD gives CSM a Cancelled tag (review D2) (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as CSM

**Steps**

1. As CSM, TM, PM and Admin, look for Cancel Request; call its API

**Expected**

Not available; API 403

### Smoke (12)

#### TC-OPPTY-001 — PMO can open the Add New Opportunity form

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 3; §7.2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Opportunities list open

**Steps**

1. Open the Opportunities list
2. Click "Add New Opportunity"

**Expected**

Form opens with mandatory fields Opportunity Request Type*, Client Type*, Interview Required* and a Client Details section

#### TC-OPPTY-002 — PMO creates an Interview–Existing Client Opportunity

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rules 2, 4 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Opportunity Creation |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; An active existing-client project exists

**Steps**

1. Open Add New Opportunity
2. Select Client Type = Existing Client and pick the project
3. Set Interview Required = Yes
4. Fill required fields and save

**Expected**

Opportunity saved with a ticket ID; appears on the Interview Kanban in the first stage; success toast shown

#### TC-OPPTY-017 — PMO adds a Position with openings to an Opportunity

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Position; §7.2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Position Setup |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; An Interview Opportunity exists

**Steps**

1. Open the Opportunity
2. Add Position "Senior Backend Engineer"
3. Fill Job Description, Tech Stack, Department
4. Set Number of Candidate Openings = 2
5. Save

**Expected**

Position listed under the Opportunity with 2 openings shown as "Pending to Shortlist"

#### TC-OPPTY-029 — Add a candidate to a Position

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §2 Candidate; §11 #4 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Position with 1 opening exists

**Steps**

1. Open the Position
2. Add employee "E1" as a candidate

**Expected**

E1 listed as Candidate 1 with tag "Considered"; E1 receives notification #4

#### TC-OPPTY-030 — TM shortlists a candidate

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §8; §11 #6 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | TM |
| **Sub Module** | Candidate & Shortlisting |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as TM; Position has candidate E1 in "Pending to Shortlist"

**Steps**

1. Open the Position
2. Shortlist E1

**Expected**

E1 moves to "Shortlisted"; tag becomes "In Process"; E1 gets "Candidate Shortlisted – Pending Preparation"

#### TC-OPPTY-047 — Candidate moves through the full pipeline to Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — pipeline order (TM Approval before Being Prepared) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Interview Pipeline |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Interview Opportunity with 1 opening and candidate E1

**Steps**

1. Move E1: Pending to Shortlist → Shortlisting
2. TM approves E1
3. Move E1: Being Prepared → Interview Scheduled → Waiting for Feedback (Round cleared) → Won
4. Allocate → Project Allocated

**Expected**

Each stage change is saved and logged; the matching notification fires at each step; E1 ends in Project Allocated with an approved allocation

#### TC-OPPTY-064 — Interview Kanban loads with all pipeline columns

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Flow diagram "SimERP Opportunity Flow" (screenshot reviewed 2026-10-09) — columns and board tabs |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | assumption |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |
| **Open Question** | FRD §8 column list differs from the diagram (see docs/findings/2026-10-09-presales-opportunity-frd-v2-review.md) |

**Preconditions**

Logged in as PMO

**Steps**

1. Open the Interview Opportunities Kanban

**Expected**

Columns in order: Create Opportunity, Pending to Shortlist, Shortlisting, Being Prepared, Interview Scheduled, Waiting for Feedback, Won, Project Allocated, plus Rejected, On Hold, Lost, No Longer Required; board tabs Interview / List / Kanban / My Opportunity / Team Opportunity

#### TC-OPPTY-065 — Direct Allocation opens as a List View

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rules 2, 4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Kanban & List Views |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open Direct Allocation

**Expected**

Flat list view with Project Allocation and Prospect Allocation sub-filters; no Kanban

#### TC-OPPTY-082 — CSM cancels a ticket and a Cancelled tag is added

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 22; §11 #19 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Sub Module** | Cancellation & Archive |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as CSM; Ticket in Being Prepared

**Steps**

1. Open the ticket
2. Click Cancel
3. Confirm in the pop-up

**Expected**

Cancelled tag shown; ticket stays in Being Prepared; PMO gets notification #19 naming the stage

#### TC-OPPTY-093 — PMO assigns an Opportunity to a PM

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 23; §11 #18 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Assignment & Access |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO; Unassigned Opportunity

**Steps**

1. Open the Opportunity
2. Assign PM "PM1"

**Expected**

PM1 sees it in their list; PM1 gets notification #18

#### TC-OPPTY-102 — PMO adds prep material and question bank to a Position

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §4 rule 5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Sub Module** | Preparation Material |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as PMO

**Steps**

1. Open the Position > Preparation Material
2. Add a document link and a question-bank URL
3. Save

**Expected**

Material shown on the Position and inherited by every candidate

#### TC-OPPTY-128 — Employee sees their Opportunities on Profile and Kanban

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD Allocation & Deallocation (Pre-sales Opportunity) v2.0, 25-Sep-2026 — §7.7 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Sub Module** | Employee View |
| **Feature Status** | planned — not yet developed; selectors and routes unknown |

**Preconditions**

Logged in as Employee; Employee is a candidate on 2 Opportunities

**Steps**

1. Open Profile > Opportunities
2. Open the employee Kanban

**Expected**

Both candidacies shown with current stage; read-only
