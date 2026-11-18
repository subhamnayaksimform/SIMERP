# Pre-sales Opportunities — Test Cases

**Total test cases:** 141  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-10-22-OPPM-presales-manual.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 82 | 58.2% |
| negative | 44 | 31.2% |
| boundary | 15 | 10.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 66 | 46.8% |
| high | 56 | 39.7% |
| low | 19 | 13.5% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 77 | 54.6% |
| minor | 46 | 32.6% |
| critical | 15 | 10.6% |
| trivial | 3 | 2.1% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 141 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 141 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 141 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @manual | 141 | 100.0% |
| @BUG-031 | 4 | 2.8% |
| @BUG-001 | 3 | 2.1% |
| @BUG-005 | 2 | 1.4% |
| @BUG-009 | 2 | 1.4% |
| @BUG-012 | 2 | 1.4% |
| @BUG-015 | 2 | 1.4% |
| @BUG-020 | 2 | 1.4% |
| @BUG-028 | 2 | 1.4% |
| @BUG-030 | 2 | 1.4% |
| @BUG-002 | 1 | 0.7% |
| @BUG-003 | 1 | 0.7% |
| @BUG-004 | 1 | 0.7% |
| @BUG-006 | 1 | 0.7% |
| @BUG-007 | 1 | 0.7% |
| @BUG-008 | 1 | 0.7% |
| @BUG-010 | 1 | 0.7% |
| @BUG-011 | 1 | 0.7% |
| @BUG-013 | 1 | 0.7% |
| @BUG-014 | 1 | 0.7% |
| @BUG-016 | 1 | 0.7% |
| @BUG-018 | 1 | 0.7% |
| @BUG-019 | 1 | 0.7% |
| @BUG-022 | 1 | 0.7% |
| @BUG-023 | 1 | 0.7% |
| @BUG-024 | 1 | 0.7% |
| @BUG-025 | 1 | 0.7% |
| @BUG-026 | 1 | 0.7% |
| @BUG-027 | 1 | 0.7% |
| @BUG-029 | 1 | 0.7% |
| @BUG-033 | 1 | 0.7% |
| @BUG-034 | 1 | 0.7% |
| @BUG-035 | 1 | 0.7% |
| @BUG-036 | 1 | 0.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPM-001](#tc-oppm-001-pmo-sees-opportunity-allocation-and-the-new-opportunities-button) | PMO sees Opportunity Allocation and the New Opportunities button | Pre-sales Opportunities | functional | high |
| [TC-OPPM-002](#tc-oppm-002-admin-can-open-the-board-new-opportunities-button-is-not-visible) | Admin can open the board; New Opportunities button is NOT visible | Pre-sales Opportunities | functional | high |
| [TC-OPPM-003](#tc-oppm-003-tm-can-open-the-board-new-opportunities-button-is-not-visible) | TM can open the board; New Opportunities button is NOT visible | Pre-sales Opportunities | functional | high |
| [TC-OPPM-004](#tc-oppm-004-em-can-open-the-board-new-opportunities-button-is-not-visible) | EM can open the board; New Opportunities button is NOT visible | Pre-sales Opportunities | functional | high |
| [TC-OPPM-005](#tc-oppm-005-rm-can-open-the-board-new-opportunities-button-is-not-visible) | RM can open the board; New Opportunities button is NOT visible | Pre-sales Opportunities | functional | high |
| [TC-OPPM-006](#tc-oppm-006-csm-can-open-the-board-new-opportunities-button-is-visible) | CSM can open the board; New Opportunities button is visible | Pre-sales Opportunities | functional | high |
| [TC-OPPM-007](#tc-oppm-007-pm-has-no-board-but-can-reach-the-create-form-by-url) | PM has no board but can reach the Create form by URL | Pre-sales Opportunities | negative | high |
| [TC-OPPM-008](#tc-oppm-008-pm-can-find-the-opportunities-assigned-to-them) | PM can find the opportunities assigned to them | Pre-sales Opportunities | functional | high |
| [TC-OPPM-009](#tc-oppm-009-pm-tracks-direct-opportunities-raised-on-his-project) | PM tracks Direct opportunities raised on his project | Pre-sales Opportunities | functional | high |
| [TC-OPPM-010](#tc-oppm-010-pm-opens-an-assigned-opportunity-read-only) | PM opens an assigned opportunity read-only | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-011](#tc-oppm-011-pm-loses-access-when-re-assigned) | PM loses access when re-assigned | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-012](#tc-oppm-012-employee-not-a-candidate-has-no-access) | Employee (not a candidate) has no access | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-013](#tc-oppm-013-my-team-opportunity-tabs-only-for-tm-and-rm) | My / Team Opportunity tabs only for TM and RM | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-014](#tc-oppm-014-view-only-banner-for-non-pmo-roles-including-admin) | View-only banner for non-PMO roles, including Admin | Pre-sales Opportunities | functional | low |
| [TC-OPPM-015](#tc-oppm-015-only-pmo-can-drag-kanban-cards) | Only PMO can drag Kanban cards | Pre-sales Opportunities | negative | high |
| [TC-OPPM-016](#tc-oppm-016-request-type-and-client-type-are-mandatory-before-the-rest-of-the-form-unlocks) | Request type and client type are mandatory before the rest of the form unlocks | Pre-sales Opportunities | functional | high |
| [TC-OPPM-017](#tc-oppm-017-create-a-minimal-interview-prospect-opportunity-happy-path) | Create a minimal Interview / Prospect opportunity (happy path) | Pre-sales Opportunities | functional | high |
| [TC-OPPM-018](#tc-oppm-018-existing-client-requires-picking-a-zoho-project-for-pm-csm-optional-for-pmo) | Existing Client requires picking a Zoho project for PM/CSM, optional for PMO | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-019](#tc-oppm-019-csm-cannot-link-a-project-they-do-not-manage) | CSM cannot link a project they do not manage | Pre-sales Opportunities | negative | high |
| [TC-OPPM-020](#tc-oppm-020-prospect-opportunity-must-not-carry-a-linked-project) | Prospect opportunity must not carry a linked project | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-021](#tc-oppm-021-opportunity-title-required-trimmed-max-200-characters) | Opportunity Title: required, trimmed, max 200 characters | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-022](#tc-oppm-022-client-company-name-required-trimmed-max-200-characters) | Client / Company Name: required, trimmed, max 200 characters | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-023](#tc-oppm-023-website-linkedin-interviewer-linkedin-url-validation) | Website / LinkedIn / Interviewer LinkedIn URL validation | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-024](#tc-oppm-024-long-text-fields-prospect-notes-special-instructions-4-096-prospect-contact-200) | Long text fields: Prospect notes, Special Instructions (4,096), Prospect contact (200) | Pre-sales Opportunities | boundary | low |
| [TC-OPPM-025](#tc-oppm-025-job-description-rich-text-is-sanitised) | Job Description rich text is sanitised | Pre-sales Opportunities | negative | high |
| [TC-OPPM-026](#tc-oppm-026-potential-duplicate-notice-for-an-existing-title) | Potential Duplicate notice for an existing title | Pre-sales Opportunities | functional | low |
| [TC-OPPM-027](#tc-oppm-027-assign-to-pm-assign-to-csm) | Assign to PM / Assign to CSM | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-028](#tc-oppm-028-raiser-matrix-who-may-create-which-ticket-frd-rule-3) | Raiser matrix — who may create which ticket (FRD rule 3) | Pre-sales Opportunities | negative | high |
| [TC-OPPM-029](#tc-oppm-029-empty-submit-shows-a-message-on-every-missing-required-field) | Empty submit shows a message on every missing required field | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-030](#tc-oppm-030-position-title-required-max-200) | Position Title: required, max 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-031](#tc-oppm-031-tech-stack-at-least-one-each-100-chars-no-blank-or-duplicate-values) | Tech Stack: at least one, each ≤100 chars, no blank or duplicate values | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-032](#tc-oppm-032-department-at-least-one-multiple-departments-allowed) | Department: at least one; multiple departments allowed | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-033](#tc-oppm-033-number-of-openings-1-20-whole-numbers-only) | Number of Openings: 1–20, whole numbers only | Pre-sales Opportunities | boundary | high |
| [TC-OPPM-034](#tc-oppm-034-priority-and-preferred-seniority-are-mandatory-for-interview-positions) | Priority and Preferred Seniority are mandatory for Interview positions | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-035](#tc-oppm-035-allocation-mode-fixed-needs-a-whole-1-100-dynamic-needs-none) | Allocation Mode Fixed needs a whole 1–100 %; Dynamic needs none | Pre-sales Opportunities | boundary | high |
| [TC-OPPM-036](#tc-oppm-036-tentative-allocation-interview-dates-are-sensible) | Tentative allocation / interview dates are sensible | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-037](#tc-oppm-037-interview-required-no-on-an-interview-opportunity) | Interview Required = No on an Interview opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-038](#tc-oppm-038-interview-rounds-0-50-planned-titles-optional-default-round-n) | Interview rounds: 0–50 planned, titles optional (default Round N) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-039](#tc-oppm-039-preparation-material-rows) | Preparation Material rows | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-040](#tc-oppm-040-location-preference-block-rules) | Location preference block rules | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-041](#tc-oppm-041-multiple-positions-new-position-duplicate-remove-seat-numbers-unique) | Multiple positions: New Position, Duplicate, Remove; seat numbers unique | Pre-sales Opportunities | functional | high |
| [TC-OPPM-042](#tc-oppm-042-client-facing-field-is-removed-frd-change-list) | "Client Facing" field is removed (FRD change list) | Pre-sales Opportunities | functional | low |
| [TC-OPPM-043](#tc-oppm-043-create-a-direct-ticket-for-one-employee-happy-path) | Create a Direct ticket for one employee (happy path) | Pre-sales Opportunities | functional | high |
| [TC-OPPM-044](#tc-oppm-044-direct-ticket-needs-employee-and-tentative-allocation-date) | Direct ticket needs employee and tentative allocation date | Pre-sales Opportunities | negative | high |
| [TC-OPPM-045](#tc-oppm-045-direct-ticket-refuses-interview-only-fields) | Direct ticket refuses interview-only fields | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-046](#tc-oppm-046-several-employees-in-one-direct-request-frd-one-row-per-employee-one-ticket-per-row) | Several employees in one Direct request (FRD: one row per employee → one ticket per row) | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-047](#tc-oppm-047-direct-priority-is-derived-from-the-tentative-allocation-date) | Direct priority is derived from the tentative allocation date | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-048](#tc-oppm-048-pm-raises-a-direct-ticket) | PM raises a Direct ticket | Pre-sales Opportunities | negative | high |
| [TC-OPPM-049](#tc-oppm-049-kanban-columns-and-order) | Kanban columns and order | Pre-sales Opportunities | functional | high |
| [TC-OPPM-050](#tc-oppm-050-summary-tiles-reconcile-with-the-board) | Summary tiles reconcile with the board | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-051](#tc-oppm-051-readable-ticket-id-shown-on-the-list) | Readable ticket ID shown on the list | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-052](#tc-oppm-052-search-by-ticket-title-client-position-candidate) | Search by ticket, title, client, position, candidate | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-053](#tc-oppm-053-lost-no-longer-required-hidden-by-default-nlr-highlighted) | Lost / No Longer Required hidden by default; NLR highlighted | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-054](#tc-oppm-054-created-date-range-filter-presets) | Created-date range filter presets | Pre-sales Opportunities | functional | low |
| [TC-OPPM-055](#tc-oppm-055-advanced-filter-client-type-priority-client-prospect-department-project-status) | Advanced filter (client type, priority, client, prospect, department, project, status) | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-056](#tc-oppm-056-interview-vs-direct-switch-keeps-the-boards-separate) | Interview vs Direct switch keeps the boards separate | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-057](#tc-oppm-057-empty-values-use-a-readable-placeholder) | Empty values use a readable placeholder | Pre-sales Opportunities | functional | low |
| [TC-OPPM-058](#tc-oppm-058-department-scope-on-the-board) | Department scope on the board | Pre-sales Opportunities | negative | high |
| [TC-OPPM-059](#tc-oppm-059-detail-page-shows-the-full-ticket-information) | Detail page shows the full ticket information | Pre-sales Opportunities | functional | high |
| [TC-OPPM-060](#tc-oppm-060-edit-a-single-position-in-a-side-drawer) | Edit a single position in a side drawer | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-061](#tc-oppm-061-position-allocation-fields-lock-once-a-candidate-is-in-the-pipeline) | Position allocation fields lock once a candidate is in the pipeline | Pre-sales Opportunities | negative | high |
| [TC-OPPM-062](#tc-oppm-062-change-number-of-openings-on-an-existing-position) | Change Number of Openings on an existing position | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-063](#tc-oppm-063-delete-position-rules) | Delete position rules | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-064](#tc-oppm-064-who-may-edit-an-interview-opportunity) | Who may edit an Interview opportunity | Pre-sales Opportunities | negative | high |
| [TC-OPPM-065](#tc-oppm-065-change-log-of-edits) | Change log of edits | Pre-sales Opportunities | functional | low |
| [TC-OPPM-066](#tc-oppm-066-project-link-unlink) | Project link / unlink | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-067](#tc-oppm-067-project-cannot-change-after-a-candidate-is-allocated) | Project cannot change after a candidate is allocated | Pre-sales Opportunities | negative | high |
| [TC-OPPM-068](#tc-oppm-068-tm-shortlists-two-qa-candidates-from-the-picker) | TM shortlists two QA candidates from the picker | Pre-sales Opportunities | functional | high |
| [TC-OPPM-069](#tc-oppm-069-shortlisting-more-candidates-than-openings) | Shortlisting more candidates than openings | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-070](#tc-oppm-070-shortlist-shortfall-warning) | Shortlist shortfall warning | Pre-sales Opportunities | functional | low |
| [TC-OPPM-071](#tc-oppm-071-cannot-shortlist-the-same-live-candidate-twice) | Cannot shortlist the same live candidate twice | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-072](#tc-oppm-072-rejected-candidate-may-be-shortlisted-again-on-another-position) | Rejected candidate may be shortlisted again / on another position | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-073](#tc-oppm-073-cross-department-candidate-is-an-empty-seat-for-the-other-tm) | Cross-department candidate is an empty seat for the other TM | Pre-sales Opportunities | negative | high |
| [TC-OPPM-074](#tc-oppm-074-roles-that-cannot-shortlist) | Roles that cannot shortlist | Pre-sales Opportunities | negative | high |
| [TC-OPPM-075](#tc-oppm-075-preferred-candidate-flag) | Preferred Candidate flag | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-076](#tc-oppm-076-remove-a-shortlisted-candidate-needs-a-reason) | Remove a shortlisted candidate needs a reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-077](#tc-oppm-077-candidate-picker-filters) | Candidate picker filters | Pre-sales Opportunities | functional | low |
| [TC-OPPM-078](#tc-oppm-078-pmo-sends-a-candidate-for-tm-approval-tm-of-candidate-s-department-approves) | PMO sends a candidate for TM approval; TM of candidate's department approves | Pre-sales Opportunities | functional | high |
| [TC-OPPM-079](#tc-oppm-079-tm-sends-own-pick-who-approves) | TM sends own pick; who approves? | Pre-sales Opportunities | negative | high |
| [TC-OPPM-080](#tc-oppm-080-approval-guard-rails) | Approval guard rails | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-081](#tc-oppm-081-withdraw-an-approval-request) | Withdraw an approval request | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-082](#tc-oppm-082-pmo-bypasses-tm-approval) | PMO bypasses TM approval | Pre-sales Opportunities | functional | high |
| [TC-OPPM-083](#tc-oppm-083-same-employee-approved-on-two-opportunities-at-once) | Same employee approved on two opportunities at once | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-084](#tc-oppm-084-concurrent-approval-requests) | Concurrent approval requests | Pre-sales Opportunities | boundary | low |
| [TC-OPPM-085](#tc-oppm-085-tm-rejects-with-a-reason-slot-reopens) | TM rejects with a reason; slot reopens | Pre-sales Opportunities | functional | high |
| [TC-OPPM-086](#tc-oppm-086-pmo-records-a-client-rejection) | PMO records a client rejection | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-087](#tc-oppm-087-board-drag-rules-pmo) | Board drag rules (PMO) | Pre-sales Opportunities | negative | high |
| [TC-OPPM-088](#tc-oppm-088-dragging-back-from-interview-scheduled-keeps-the-schedule) | Dragging back from Interview Scheduled keeps the schedule | Pre-sales Opportunities | negative | high |
| [TC-OPPM-089](#tc-oppm-089-interview-rounds-add-date-decide-delete) | Interview rounds: add, date, decide, delete | Pre-sales Opportunities | functional | high |
| [TC-OPPM-090](#tc-oppm-090-finalize-an-interview-schedule-lock) | Finalize an interview schedule (lock) | Pre-sales Opportunities | functional | high |
| [TC-OPPM-091](#tc-oppm-091-did-the-interview-happen-step) | "Did the interview happen?" step | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-092](#tc-oppm-092-candidate-never-sees-feedback-or-bypass-reasons) | Candidate never sees feedback or bypass reasons | Pre-sales Opportunities | negative | high |
| [TC-OPPM-093](#tc-oppm-093-candidate-ticks-checklist-items-in-any-order) | Candidate ticks checklist items in any order | Pre-sales Opportunities | functional | high |
| [TC-OPPM-094](#tc-oppm-094-pmo-marks-an-item-skipped-by-pmo) | PMO marks an item "Skipped by PMO" | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-095](#tc-oppm-095-checklist-editing-window-for-the-candidate) | Checklist editing window for the candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-096](#tc-oppm-096-pending-checklist-never-blocks-scheduling) | Pending checklist never blocks scheduling | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-097](#tc-oppm-097-other-people-cannot-tick-someone-else-s-checklist) | Other people cannot tick someone else's checklist | Pre-sales Opportunities | negative | high |
| [TC-OPPM-098](#tc-oppm-098-add-edit-prep-material-per-role) | Add / edit prep material per role | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-099](#tc-oppm-099-prep-material-validation) | Prep material validation | Pre-sales Opportunities | boundary | low |
| [TC-OPPM-100](#tc-oppm-100-send-reminder-for-pending-preparation) | Send Reminder for pending preparation | Pre-sales Opportunities | functional | low |
| [TC-OPPM-101](#tc-oppm-101-full-happy-path-shortlist-bypass-interview-won-project-allocated) | Full happy path: shortlist → bypass → interview → Won → Project Allocated | Pre-sales Opportunities | functional | high |
| [TC-OPPM-102](#tc-oppm-102-select-after-a-not-cleared-round-needs-confirmation) | Select after a Not Cleared round needs confirmation | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-103](#tc-oppm-103-round-skip-to-won-from-being-prepared) | Round-skip to Won from Being Prepared | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-104](#tc-oppm-104-allocate-dialog-validation) | Allocate dialog validation | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-105](#tc-oppm-105-allocate-is-blocked-without-a-linked-project) | Allocate is blocked without a linked project | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-106](#tc-oppm-106-won-elsewhere-notification) | Won-elsewhere notification | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-107](#tc-oppm-107-two-way-allocation-alert) | Two-way allocation alert | Pre-sales Opportunities | functional | high |
| [TC-OPPM-108](#tc-oppm-108-employee-list-interview-opportunities-column) | Employee list "Interview Opportunities" column | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-109](#tc-oppm-109-employee-profile-opportunity-history) | Employee profile — opportunity history | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-110](#tc-oppm-110-requests-tracking-interview-and-direct-tabs) | Requests Tracking — Interview and Direct tabs | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-111](#tc-oppm-111-on-hold-blocks-pipeline-actions) | On Hold blocks pipeline actions | Pre-sales Opportunities | functional | high |
| [TC-OPPM-112](#tc-oppm-112-mark-lost-releases-candidates) | Mark Lost releases candidates | Pre-sales Opportunities | functional | high |
| [TC-OPPM-113](#tc-oppm-113-no-longer-required-needs-confirmation) | No Longer Required needs confirmation | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-114](#tc-oppm-114-mark-won-at-opportunity-level) | Mark Won at opportunity level | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-115](#tc-oppm-115-lost-on-an-opportunity-that-already-has-an-allocation) | Lost on an opportunity that already has an allocation | Pre-sales Opportunities | boundary | medium |
| [TC-OPPM-116](#tc-oppm-116-re-initiate-a-position) | Re-initiate a position | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-117](#tc-oppm-117-roles-that-cannot-change-status) | Roles that cannot change status | Pre-sales Opportunities | negative | high |
| [TC-OPPM-118](#tc-oppm-118-pmo-moves-direct-ticket-open-in-review-awaiting-approved-allocates) | PMO moves Direct ticket Open → In Review → Awaiting → Approved (allocates) | Pre-sales Opportunities | functional | high |
| [TC-OPPM-119](#tc-oppm-119-only-pmo-moves-direct-tickets) | Only PMO moves Direct tickets | Pre-sales Opportunities | negative | high |
| [TC-OPPM-120](#tc-oppm-120-owner-edits-swaps-the-employee-while-open-or-in-review) | Owner edits / swaps the employee while Open or In Review | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-121](#tc-oppm-121-reject-a-direct-ticket-needs-a-reason) | Reject a Direct ticket needs a reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-122](#tc-oppm-122-csm-cancels-a-direct-ticket-tag-only-and-pmo-closes-it) | CSM cancels a Direct ticket (tag only) and PMO closes it | Pre-sales Opportunities | functional | high |
| [TC-OPPM-123](#tc-oppm-123-csm-cancels-an-interview-ticket) | CSM cancels an Interview ticket | Pre-sales Opportunities | functional | high |
| [TC-OPPM-124](#tc-oppm-124-prospect-direct-ticket-cannot-be-approved-until-a-project-is-linked) | Prospect Direct ticket cannot be approved until a project is linked | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-125](#tc-oppm-125-approve-now-confirm-allocation-later) | Approve now, confirm allocation later | Pre-sales Opportunities | functional | low |
| [TC-OPPM-126](#tc-oppm-126-candidate-notifications-along-the-pipeline) | Candidate notifications along the pipeline | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-127](#tc-oppm-127-assignment-notifications-to-pm-and-csm) | Assignment notifications to PM and CSM | Pre-sales Opportunities | functional | medium |
| [TC-OPPM-128](#tc-oppm-128-tm-notified-when-a-position-is-edited-after-shortlisting-rule-18) | TM notified when a position is edited after shortlisting (rule 18) | Pre-sales Opportunities | functional | low |
| [TC-OPPM-129](#tc-oppm-129-notification-links-open-the-right-page) | Notification links open the right page | Pre-sales Opportunities | functional | low |
| [TC-OPPM-130](#tc-oppm-130-unauthenticated-and-malformed-requests) | Unauthenticated and malformed requests | Pre-sales Opportunities | negative | high |
| [TC-OPPM-131](#tc-oppm-131-html-in-titles-is-shown-as-text) | HTML in titles is shown as text | Pre-sales Opportunities | negative | high |
| [TC-OPPM-132](#tc-oppm-132-did-interview-happen-stage-after-the-interview-day-passes) | "Did Interview Happen" stage after the interview day passes | Pre-sales Opportunities | functional | high |
| [TC-OPPM-133](#tc-oppm-133-interview-required-field-removed-from-interview-positions) | "Interview Required" field removed from Interview positions | Pre-sales Opportunities | functional | low |
| [TC-OPPM-134](#tc-oppm-134-positions-are-listed-in-the-order-they-were-created) | Positions are listed in the order they were created | Pre-sales Opportunities | functional | low |
| [TC-OPPM-135](#tc-oppm-135-removing-a-shortlisted-candidate-needs-a-reason-owners-notified-not-the-candidate) | Removing a shortlisted candidate needs a reason (owners notified, not the candidate) | Pre-sales Opportunities | negative | medium |
| [TC-OPPM-136](#tc-oppm-136-project-locked-once-a-candidate-is-allocated) | Project locked once a candidate is allocated | Pre-sales Opportunities | negative | high |
| [TC-OPPM-137](#tc-oppm-137-ticket-number-fully-visible-in-the-board-list) | Ticket number fully visible in the board list | Pre-sales Opportunities | functional | low |
| [TC-OPPM-138](#tc-oppm-138-candidate-breadcrumb-on-the-opportunity-page) | Candidate breadcrumb on the opportunity page | Pre-sales Opportunities | functional | low |
| [TC-OPPM-139](#tc-oppm-139-pm-sees-only-opportunities-assigned-to-him) | PM sees only opportunities assigned to him | Pre-sales Opportunities | negative | high |
| [TC-OPPM-140](#tc-oppm-140-an-employee-already-allocated-or-fully-booked-cannot-be-approved-on-another-opportunity) | An employee already allocated or fully booked cannot be approved on another opportunity | Pre-sales Opportunities | negative | high |
| [TC-OPPM-141](#tc-oppm-141-rejection-notification-goes-only-to-the-rejected-candidate) | Rejection notification goes only to the rejected candidate | Pre-sales Opportunities | functional | medium |

---

## Pre-sales Opportunities

141 test cases.

### Boundary (15)

#### TC-OPPM-021 — Opportunity Title: required, trimmed, max 200 characters

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Leave Opportunity Title empty and try to create. → Expected: Required-field message; cannot create.
2. Enter spaces only. → Expected: Treated as empty; cannot create.
3. Enter exactly 200 characters and create. → Expected: Created; full value saved.
4. Enter 201 characters. → Expected: Blocked with "max 200 characters" message (API: 400 VAL_001).
5. Enter a value with leading/trailing spaces and create. → Expected: Saved trimmed ("QA trim check").

**Expected**

Saved trimmed ("QA trim check").

**Test Data**

- `Empty`: ""
- `Spaces only`: "   "
- `200 chars`: a × 200
- `201 chars`: a × 201
- `Padded`: "   QA trim check   "

#### TC-OPPM-022 — Client / Company Name: required, trimmed, max 200 characters

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Leave Client / Company Name empty and try to create. → Expected: Required-field message; cannot create.
2. Enter spaces only. → Expected: Treated as empty; cannot create.
3. Enter exactly 200 characters and create. → Expected: Created; full value saved.
4. Enter 201 characters. → Expected: Blocked with "max 200 characters" message (API: 400 VAL_001).
5. Enter a value with leading/trailing spaces and create. → Expected: Saved trimmed ("QA trim check").

**Expected**

Saved trimmed ("QA trim check").

**Test Data**

- `Empty`: ""
- `Spaces only`: "   "
- `200 chars`: a × 200
- `201 chars`: a × 201
- `Padded`: "   QA trim check   "

#### TC-OPPM-024 — Long text fields: Prospect notes, Special Instructions (4,096), Prospect contact (200)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Enter 4,096 characters in Special Instructions and create. → Expected: Saved.
2. Enter 4,097 characters. → Expected: Blocked with a max-length message.
3. Repeat for prospect notes and prospect contact (200/201). → Expected: Same behaviour at each limit.

**Expected**

Same behaviour at each limit.

**Test Data**

- `Special Instructions`: 4,096 / 4,097 chars
- `Prospect notes`: 4,096 / 4,097 chars
- `Prospect contact`: 200 / 201 chars

#### TC-OPPM-030 — Position Title: required, max 200

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Leave Position Title empty. → Expected: "Title is required".
2. Enter 200 characters and create. → Expected: Created.
3. Enter 201 characters. → Expected: Blocked: max 200.

**Expected**

Blocked: max 200.

**Test Data**

- `Values`: empty · 200 chars · 201 chars

#### TC-OPPM-031 — Tech Stack: at least one, each ≤100 chars, no blank or duplicate values

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-019 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Bug Ref** | BUG-019 |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Create with no tech stack. → Expected: Blocked: tech stack required.
2. (API) Send an empty string as a tech stack. → Expected: 400 "each value in techStacks should not be empty".
3. (API) Send a 101-character tech stack. → Expected: 400 max 100.
4. (API) Send ["Java","Java","java"]. → Expected: Duplicates removed (case-insensitive) or refused.

**Expected**

Duplicates removed (case-insensitive) or refused.

**Test Data**

- `Values`: (none) · "" · 101-char value · Java, Java, java

#### TC-OPPM-033 — Number of Openings: 1–20, whole numbers only

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Use the stepper to go below 1. → Expected: Minus button disabled at 1.
2. Set 20 and create. → Expected: Created; board shows 20 "Pending to Shortlist" cards numbered #1–#20.
3. (API) Send 0, 21 and 1.5. → Expected: 400 for each (min 1, max 20, whole number).

**Expected**

400 for each (min 1, max 20, whole number).

**Test Data**

- `Values`: 0 · 1 · 20 · 21 · 1.5

#### TC-OPPM-035 — Allocation Mode Fixed needs a whole 1–100 %; Dynamic needs none

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Choose Fixed and leave Allocation % empty. → Expected: Blocked: % required.
2. Enter 0, 50.5 and 101 in turn. → Expected: Each blocked with a range/whole-number message.
3. Enter 1, then 100, and create. → Expected: Both created.
4. Choose Dynamic. → Expected: Allocation % field is hidden/disabled; created without a %.
5. (API) Send Dynamic with allocationPercentage 50. → Expected: 400 OPP_027.

**Expected**

400 OPP_027.

**Test Data**

- `Fixed %`: empty · 0 · 1 · 50.5 · 100 · 101
- `Dynamic`: with/without %

#### TC-OPPM-036 — Tentative allocation / interview dates are sensible

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-018 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Bug Ref** | BUG-018 |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Pick a past Tentative Allocation Date in the date picker. → Expected: Past days are disabled in the picker.
2. (API) Send a past tentativeAllocationDate. → Expected: Refused (server should match the UI).
3. Set End date earlier than start. → Expected: Blocked: end before start (OPP_093).
4. Set End date = start date. → Expected: Allowed.
5. (API) Send an end date with no start date. → Expected: Refused.
6. (API) Send a past tentativeInterviewDate, or one after the allocation date. → Expected: Refused or warned.

**Expected**

Refused or warned.

**Test Data**

- `Allocation date`: yesterday · today+10
- `End date`: before start · same day · without start
- `Interview date`: past · after allocation date

#### TC-OPPM-038 — Interview rounds: 0–50 planned, titles optional (default Round N)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Click + on Number of Rounds twice. → Expected: Two round-title inputs appear.
2. Leave round 1 title blank, round 2 = "Tech"; create. → Expected: Created; round 1 shown as "Round 1".
3. (API) Send 50 round titles, then 51. → Expected: 50 accepted; 51 refused.
4. (API) Send a 201-character round title. → Expected: Refused (max 200).

**Expected**

Refused (max 200).

**Test Data**

- `Rounds`: 2 (titles "", "Tech") · 50 · 51
- `Title`: 201 chars

#### TC-OPPM-040 — Location preference block rules

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Choose Other without a city. → Expected: Blocked: location and work mode required.
2. Choose Other + Singapore + Off-site. → Expected: Allowed.
3. Choose USA without work mode. → Expected: Blocked.
4. Choose USA + On-site without address. → Expected: Blocked: address required.
5. Choose USA + On-site + address (≤500 chars). → Expected: Allowed; 501 chars refused.
6. Combine Night Shift "No Preference" with NS1. → Expected: Not allowed.

**Expected**

Not allowed.

**Test Data**

- `Cases`: Other (no city) · Other + city + work mode · USA (no work mode) · USA On-site (no address) · USA On-site + address · WFH + work mode · Night shift None + NS1

#### TC-OPPM-062 — Change Number of Openings on an existing position

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Raise openings from 1 to 4. → Expected: Three new empty cards in Pending to Shortlist.
2. Lower to 1. → Expected: Only empty Pending cards are removed; cards holding candidates stay.

**Expected**

Only empty Pending cards are removed; cards holding candidates stay.

**Test Data**

- `Openings`: 1 → 4, then 4 → 1

#### TC-OPPM-069 — Shortlisting more candidates than openings

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-025 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Bug Ref** | BUG-025 |
| **Last Result** | Pass |

**Preconditions**

Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. As EM shortlist a third candidate on the 2-opening position. → Expected: Build: extra card #3 created; FRD rule 13 says N openings = N cards — confirm intended behaviour.
2. Check "x / N filled" and "Shortlisted" figures. → Expected: Shortlisted 3, filled 0/2.

**Expected**

Shortlisted 3, filled 0/2.

**Test Data**

- `Candidates`: 3rd candidate Akash Singh

#### TC-OPPM-084 — Concurrent approval requests

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, PMO2 |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Last Result** | Pass |

**Preconditions**

Candidate in Shortlisted.

**Steps**

1. Two PMOs click send-for-approval at the same moment. → Expected: Exactly one succeeds; the other sees "already sent" and the page refreshes.

**Expected**

Exactly one succeeds; the other sees "already sent" and the page refreshes.

#### TC-OPPM-099 — Prep material validation

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank".

**Steps**

1. Add material with a javascript: URL. → Expected: Refused.
2. Add with a 201-char title. → Expected: Refused.
3. Add the same link twice. → Expected: Duplicate prevented or warned.

**Expected**

Duplicate prevented or warned.

**Test Data**

- `URL`: javascript:alert(1)
- `Title`: 201 chars

#### TC-OPPM-115 — Lost on an opportunity that already has an allocation

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

One candidate in Project Allocated.

**Steps**

1. Set status Lost. → Expected: Allocated candidate stays Project Allocated; allocation ticket unchanged.
2. Re-open. → Expected: Allocated card intact.

**Expected**

Allocated card intact.

### Functional (82)

#### TC-OPPM-001 — PMO sees Opportunity Allocation and the New Opportunities button

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

PMO account (bhumi.chauhan@simformsolutions.com).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as bhumi.chauhan@simformsolutions.com (password from .env). → Expected: Lands on Employee Details.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. → Expected: Opportunity Allocation page opens at /pre-sales with tiles All Tickets / Open / Won / Lost / On Hold.
3. Look at the top-right of the page. → Expected: "New Opportunities" button is visible.
4. Look at the Interview / Direct switch and the List / Kanban switch. → Expected: Both switches are visible; Interview is selected by default.

**Expected**

Both switches are visible; Interview is selected by default.

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-002 — Admin can open the board; New Opportunities button is NOT visible

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

Admin account (ceo@simformsolutions.com).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as ceo@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. → Expected: Board opens at /pre-sales.
3. Check for the "New Opportunities" button. → Expected: Button is NOT visible.
4. Open /pre-sales/new directly in the address bar. → Expected: Redirected to /unauthorized.

**Expected**

Redirected to /unauthorized.

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-003 — TM can open the board; New Opportunities button is NOT visible

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

TM account (sudhansu.patel@simformsolutions.com).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as sudhansu.patel@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. → Expected: Board opens at /pre-sales.
3. Check for the "New Opportunities" button. → Expected: Button is NOT visible.
4. Open /pre-sales/new directly in the address bar. → Expected: Redirected to /unauthorized.

**Expected**

Redirected to /unauthorized.

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-004 — EM can open the board; New Opportunities button is NOT visible

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

EM account (kunal.jadeja@simformsolutions.com).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as kunal.jadeja@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. → Expected: Board opens at /pre-sales.
3. Check for the "New Opportunities" button. → Expected: Button is NOT visible.
4. Open /pre-sales/new directly in the address bar. → Expected: Redirected to /unauthorized.

**Expected**

Redirected to /unauthorized.

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-005 — RM can open the board; New Opportunities button is NOT visible

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

RM account (deepak.rao@simformsolutions.com).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as deepak.rao@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. → Expected: Board opens at /pre-sales.
3. Check for the "New Opportunities" button. → Expected: Button is NOT visible.
4. Open /pre-sales/new directly in the address bar. → Expected: Redirected to /unauthorized.

**Expected**

Redirected to /unauthorized.

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-006 — CSM can open the board; New Opportunities button is visible

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

CSM account (tarun.sharma@simformsolutions.com).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as tarun.sharma@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. → Expected: Board opens at /pre-sales.
3. Check for the "New Opportunities" button. → Expected: Button is visible.
4. Open /pre-sales/new directly in the address bar. → Expected: Create form opens.

**Expected**

Create form opens.

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-008 — PM can find the opportunities assigned to them

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

PMO has created an opportunity with Assign to PM = Gaurav Panchal (e.g. OPP-0042, Prospect, no project).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Project Allocation. → Expected: Allocation tickets page opens with "Direct Allocation" and "Interview Allocation" tabs (the Interview / Direct flag of FRD §7.5).
3. Open the "Interview Allocation" tab. → Expected: Lists the PM's opportunities: the assigned OPP-0042 ("No project linked") and opportunities on projects he manages (e.g. OPP-0039 EventDriven); tiles All / Open / Won / Lost / On Hold.
4. Open the "Direct Allocation" tab. → Expected: Direct tickets of the PM's projects listed.
5. Open OPP-0042 from the list. → Expected: Opportunity detail opens read-only.

**Expected**

Opportunity detail opens read-only.

**Test Data**

- `Assigned opportunity`: OPP-0042

#### TC-OPPM-009 — PM tracks Direct opportunities raised on his project

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-033 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Bug Ref** | BUG-033 |
| **Last Result** | Needs clarification |

**Preconditions**

PM gaurav.panchal raised Direct opportunity OPP-0041 on EventDriven | CQRS Framework; still Open (not approved).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Requests Tracking → Project Allocation → "Direct Allocation" tab. → Expected: OPP-0041 listed with its stage (Open / In Review / Awaiting).
3. Search OPP-0041. → Expected: Found.

**Expected**

Found.

**Test Data**

- `Ticket`: OPP-0041

#### TC-OPPM-010 — PM opens an assigned opportunity read-only

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-031 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Bug Ref** | BUG-031 |
| **Last Result** | Pass |

**Preconditions**

OPP-0042 assigned to PM gaurav.panchal.

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Requests Tracking → Project Allocation → Interview Allocation → switch to Kanban. → Expected: Cards of the PM's 3 opportunities shown by stage.
3. Switch to List and click OPP-0042. → Expected: Detail opens: header shows Assigned PM and Assigned CSM; tabs Position Details / Ticket Info / Preparation Material / Link Project.
4. Look for Edit Ticket, Cancel Request, Add/ Shortlist. → Expected: None shown (read-only).
5. Read the shortfall message. → Expected: Correct grammar ("1 candidate") and wording suitable for a PM who cannot shortlist.

**Expected**

Correct grammar ("1 candidate") and wording suitable for a PM who cannot shortlist.

#### TC-OPPM-013 — My / Team Opportunity tabs only for TM and RM

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM, RM, EM, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

Accounts for TM, RM, EM and CSM.

**Steps**

1. Log in as TM and open Opportunity Allocation. → Expected: "My Opportunity" and "Team Opportunity" tabs are shown.
2. Log in as RM and open Opportunity Allocation. → Expected: Both tabs are shown.
3. Log in as EM and open Opportunity Allocation. → Expected: Tabs are NOT shown (FRD change list).
4. Log in as CSM and open Opportunity Allocation. → Expected: Tabs are NOT shown.

**Expected**

Tabs are NOT shown.

#### TC-OPPM-014 — View-only banner for non-PMO roles, including Admin

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-022 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin, TM, EM, RM, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Bug Ref** | BUG-022 |
| **Last Result** | As designed |

**Preconditions**

Accounts for each role.

**Steps**

1. Log in as TM, open Opportunity Allocation, switch to Kanban. → Expected: Banner text shown exactly as in test data.
2. Repeat for EM, RM and CSM. → Expected: Banner shown for each.
3. Log in as Admin, open Opportunity Allocation, switch to Kanban. → Expected: FRD §7.1: banner shown for Admin.

**Expected**

FRD §7.1: banner shown for Admin.

**Test Data**

- `Banner text`: You have department / view-scoped access. Kanban card dragging is exclusively managed by IS-PMO.

#### TC-OPPM-016 — Request type and client type are mandatory before the rest of the form unlocks

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO, on /pre-sales/new.

**Steps**

1. Do not choose a request type. Look at the Opportunity Details section. → Expected: Section is greyed out with the hint "Select the opportunity request type and client type to fill in the rest."
2. Choose "Interview Opportunity". → Expected: Request type is selected; form still greyed until a client type is chosen.
3. Choose Client Type = Prospect. → Expected: Opportunity Details and Position #1 become editable.

**Expected**

Opportunity Details and Position #1 become editable.

#### TC-OPPM-017 — Create a minimal Interview / Prospect opportunity (happy path)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Choose Client Type = Prospect and type the client name; pick "Create new …". → Expected: Client name is set.
2. Type the Opportunity Title. → Expected: Title accepted; if a similar title exists a Potential Duplicate notice appears.
3. Fill Position #1 with the test data. → Expected: Footer counter "N required fields left" drops to 0 and "Create Opportunity" is enabled.
4. Click "Create Opportunity". → Expected: Success toast; redirected to the new ticket. Header shows OPP-nnnn, title, status Open, priority High, "Interview Allocation".
5. Open the board (Kanban). → Expected: Two cards for this position in "Pending to Shortlist" (one per opening), e.g. OPP-nnnn #1 and #2.

**Expected**

Two cards for this position in "Pending to Shortlist" (one per opening), e.g. OPP-nnnn #1 and #2.

**Test Data**

- `Client Type`: Prospect
- `Client / Company Name`: QA Test ProspectCo
- `Opportunity Title`: QA Test Platform Enhancement
- `Position Title`: QA Automation Engineer
- `Tech Stack`: Playwright
- `Department`: QA
- `Number of Openings`: 2
- `Priority`: High
- `Preferred Seniority`: Mid Level
- `Allocation Mode / %`: Fixed / 50
- `Tentative Allocation Date`: today + 14 days
- `Number of Rounds`: 2

#### TC-OPPM-018 — Existing Client requires picking a Zoho project for PM/CSM, optional for PMO

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

On /pre-sales/new.

**Steps**

1. As PMO choose Existing Client. → Expected: "Link Zoho Project (Optional)" — project not mandatory.
2. As CSM choose Existing Client. → Expected: "Link Zoho Project *" — mandatory; dropdown lists only projects the CSM manages.
3. As CSM leave the project empty and try to create. → Expected: Cannot create: project required.
4. As CSM pick AnalytixHub and create. → Expected: Opportunity created, linked to AnalytixHub, client type Existing Client.

**Expected**

Opportunity created, linked to AnalytixHub, client type Existing Client.

**Test Data**

- `Project (CSM)`: AnalytixHub | Advanced Analytics

#### TC-OPPM-026 — Potential Duplicate notice for an existing title

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

An opportunity "QA-AUTO DUP CHECK" already exists.

**Steps**

1. Type the existing title in Opportunity Title. → Expected: Dropdown lists the existing opportunity (ticket, client, status) as a possible duplicate.
2. Continue and create anyway. → Expected: Allowed (notice is advisory); a second ticket is created.

**Expected**

Allowed (notice is advisory); a second ticket is created.

**Test Data**

- `Opportunity Title`: QA-AUTO DUP CHECK

#### TC-OPPM-027 — Assign to PM / Assign to CSM

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. As PMO open "Assign to PM". → Expected: Lists only employees holding the PM role.
2. As PMO pick both PM and CSM and create. → Expected: Ticket Info shows Assigned PM and Assigned CSM.
3. As CSM open the Create form. → Expected: "Assign to CSM" is not offered (only PMO may assign a CSM).
4. (API) As CSM send assignedCsmPublicId. → Expected: 403 OPP_160 "Only PMO can assign a CSM".
5. (API) Send a non-PM employee as assignedPmPublicId. → Expected: 400 OPP_158.

**Expected**

400 OPP_158.

**Test Data**

- `Assign to PM`: Gaurav Panchal
- `Assign to CSM`: Tarun Sharma

#### TC-OPPM-032 — Department: at least one; multiple departments allowed

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Create with no department. → Expected: Blocked: department required.
2. Pick QA and JAVA and create. → Expected: Created; position shows both department chips.
3. Log in as TM (QA) and as TM (JAVA). → Expected: Both TMs can see this position (department scope).

**Expected**

Both TMs can see this position (department scope).

**Test Data**

- `Departments`: QA + JAVA

#### TC-OPPM-039 — Preparation Material rows

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-024 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Bug Ref** | BUG-024 |
| **Last Result** | As designed |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Enter a title and URL "ftp:/bad". → Expected: Inline "invalid URL" message.
2. Enter a valid https URL and click "Add Link". → Expected: Row added as a chip with the title.
3. Remove the chip with ×. → Expected: Row removed.
4. Create with no prep material rows. → Expected: Created; contract says default links are seeded when omitted — check whether any appear.

**Expected**

Created; contract says default links are seeded when omitted — check whether any appear.

**Test Data**

- `Title`: QA question bank
- `URL`: ftp:/bad · https://example.com/qa-bank

#### TC-OPPM-041 — Multiple positions: New Position, Duplicate, Remove; seat numbers unique

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Fill Position #1, click "New Position", fill #2, click "Duplicate" on #2 and edit to #3. → Expected: Three position blocks numbered #1–#3.
2. Click "Remove" on a block, then re-add it. → Expected: Block removed / re-added.
3. Create. → Expected: Board shows 6 cards with seat numbers #1–#6 across the opportunity; each position gets a readable ID.

**Expected**

Board shows 6 cards with seat numbers #1–#6 across the opportunity; each position gets a readable ID.

**Test Data**

- `Positions`: QA (2 openings), Java (1), Python (3)

#### TC-OPPM-042 — "Client Facing" field is removed (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Review every field in Position #1. → Expected: No "Client Facing" field.

**Expected**

No "Client Facing" field.

#### TC-OPPM-043 — Create a Direct ticket for one employee (happy path)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M04 Create Opportunity — Direct |
| **Last Result** | Pass |

**Preconditions**

Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Steps**

1. Check the form. → Expected: Interview Details, Rounds and Preparation Material are not shown; an Employee picker is shown; Interviewer LinkedIn is not shown.
2. Pick the employee and fill the test data; create. → Expected: Ticket created with status Open and the employee on it.
3. Open the board, switch to "Direct". → Expected: Ticket appears under Open.

**Expected**

Ticket appears under Open.

**Test Data**

- `Position Title`: QA Lead (direct)
- `Employee`: a QA employee with 100% remaining
- `Allocation`: Fixed 30%
- `Tentative Allocation Date`: today + 15

#### TC-OPPM-046 — Several employees in one Direct request (FRD: one row per employee → one ticket per row)

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-013 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M04 Create Opportunity — Direct |
| **Bug Ref** | BUG-013 |
| **Last Result** | Pending decision |

**Preconditions**

Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Steps**

1. Try to add a second position/row with a second employee. → Expected: FRD: allowed; each row becomes its own ticket.
2. (API) Send two positions on one Direct request. → Expected: Build refuses: 400 OPP_175 "A Direct Opportunity has exactly one Position".

**Expected**

Build refuses: 400 OPP_175 "A Direct Opportunity has exactly one Position".

**Test Data**

- `Employees`: 2

#### TC-OPPM-047 — Direct priority is derived from the tentative allocation date

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M04 Create Opportunity — Direct |
| **Last Result** | Pass |

**Preconditions**

PMO on the Direct form.

**Steps**

1. Create four Direct tickets with the test dates (and priority Low via API). → Expected: Priorities: +3 High, +10 Medium, +30 Low, −3 High; the sent priority is ignored.

**Expected**

Priorities: +3 High, +10 Medium, +30 Low, −3 High; the sent priority is ignored.

**Test Data**

- `Dates`: today+3 · today+10 · today+30 · today−3
- `Sent priority`: Low

#### TC-OPPM-049 — Kanban columns and order

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Click Requests Tracking → Opportunity Allocation in the sidebar. Click Kanban. → Expected: Columns in order: Pending to Shortlist, Shortlisted, Waiting for Approval, Being Prepared, Interview Scheduled, Waiting for Feedback, Won, Project Allocated, Rejected, Lost, On Hold, No Longer Required.
2. Compare each column badge with the cards in it. → Expected: Badge = number of cards.

**Expected**

Badge = number of cards.

#### TC-OPPM-050 — Summary tiles reconcile with the board

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-031 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Bug Ref** | BUG-031 |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Read the tiles All Tickets / Open / Won / Lost / On Hold. → Expected: All = Open + Won + Lost + On Hold (+ No Longer Required if counted).
2. Compare "All Tickets" with the number of cards/rows. → Expected: Labels make clear whether tickets (cards) or opportunities are counted.

**Expected**

Labels make clear whether tickets (cards) or opportunities are counted.

#### TC-OPPM-051 — Readable ticket ID shown on the list

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-016 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Bug Ref** | BUG-016 |
| **Last Result** | As designed |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Open the List view and read the Ticket ID column. → Expected: Full readable ID visible, not truncated.
2. Search the readable ID (e.g. AN-QA-60) in the search box. → Expected: Matching cards returned.

**Expected**

Matching cards returned.

**Test Data**

- `Expected format`: client + position initials + number, e.g. AN-QA-60

#### TC-OPPM-052 — Search by ticket, title, client, position, candidate

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Search each value. → Expected: Only matching cards shown.
2. Search "%". → Expected: No wildcard effect (0 results), not everything.

**Expected**

No wildcard effect (0 results), not everything.

**Test Data**

- `Searches`: OPP-0047 · Janki · AnalytixHub · %

#### TC-OPPM-053 — Lost / No Longer Required hidden by default; NLR highlighted

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-029 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Bug Ref** | BUG-029 |
| **Last Result** | Pass |

**Preconditions**

One opportunity marked Lost and one No Longer Required.

**Steps**

1. Open the board with default filters. → Expected: Lost and NLR tickets not in the stage columns.
2. Open the Lost / No Longer Required columns (or Status filter). → Expected: Tickets listed there.
3. Look at the NLR ticket styling. → Expected: FRD: red-border highlight.

**Expected**

FRD: red-border highlight.

#### TC-OPPM-054 — Created-date range filter presets

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-027 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Bug Ref** | BUG-027 |
| **Last Result** | Not built |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Open the created-date range control. → Expected: FRD presets available.
2. Pick a custom From > To range. → Expected: No results (or blocked), no error.

**Expected**

No results (or blocked), no error.

**Test Data**

- `FRD presets`: Day 1–365 · Last 1 / 3 / 6 months

#### TC-OPPM-055 — Advanced filter (client type, priority, client, prospect, department, project, status)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Click Filter → set Department = JAVA → Save. → Expected: Only cards whose position is in JAVA; tiles/badges update to match.
2. Clear the filter. → Expected: All cards back.

**Expected**

All cards back.

**Test Data**

- `Filter`: Department = JAVA

#### TC-OPPM-056 — Interview vs Direct switch keeps the boards separate

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. On Interview, look for Direct tickets. → Expected: None shown.
2. Switch to Direct. → Expected: Direct list/Kanban with Open / In Review / Awaiting / Approved / Rejected; counts equal rows.

**Expected**

Direct list/Kanban with Open / In Review / Awaiting / Approved / Rejected; counts equal rows.

#### TC-OPPM-057 — Empty values use a readable placeholder

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-031 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Bug Ref** | BUG-031 |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO; several QA test opportunities exist in different stages.

**Steps**

1. Find a row with no candidate in the List view. → Expected: Candidates cell shows a word (e.g. "No candidate"), not a bare "-".

**Expected**

Candidates cell shows a word (e.g. "No candidate"), not a bare "-".

#### TC-OPPM-059 — Detail page shows the full ticket information

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Open the ticket from the board. → Expected: Header: OPP-nnnn, title, status, priority, Interview Allocation, client, client type; Created by / Created On / Updated On.
2. Check the tabs. → Expected: Position Details, Ticket Info, Preparation Material, Link Project.
3. Open Ticket Info. → Expected: Every value entered on the form is shown (FRD change list).
4. Look at each position header. → Expected: Departments, allocation, tech stack chips, "Shortlisted …", "x / N filled", Re-initiate, Add/ Shortlist, Edit, Delete.

**Expected**

Departments, allocation, tech stack chips, "Shortlisted …", "x / N filled", Re-initiate, Add/ Shortlist, Edit, Delete.

#### TC-OPPM-060 — Edit a single position in a side drawer

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Click Edit on the QA position. → Expected: Right-side drawer opens with only that position.
2. Change Tech Stack and save. → Expected: Saved; header chips updated.
3. Click "Edit Ticket" at the top. → Expected: Whole-opportunity edit opens.

**Expected**

Whole-opportunity edit opens.

**Test Data**

- `New tech stack`: Playwright, Cypress

#### TC-OPPM-065 — Change log of edits

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-020 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Bug Ref** | BUG-020 |
| **Last Result** | Not built |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Edit the title, then a position. → Expected: A change log lists who changed what and when; recent edits are highlighted (FRD §8).

**Expected**

A change log lists who changed what and when; recent edits are highlighted (FRD §8).

#### TC-OPPM-066 — Project link / unlink

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Last Result** | Pass |

**Preconditions**

Prospect opportunity without project.

**Steps**

1. As CSM open Link Project and pick ElitePay. → Expected: Linked; client type changes to Existing Client.
2. As CSM try to link a project they do not manage. → Expected: Refused (OPP_009).
3. As CSM try to unlink. → Expected: Refused (Existing opportunity must keep a project they manage).

**Expected**

Refused (Existing opportunity must keep a project they manage).

**Test Data**

- `Project`: ElitePay | Payroll System (CSM-managed)

#### TC-OPPM-068 — TM shortlists two QA candidates from the picker

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Last Result** | Pass |

**Preconditions**

Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Open the ticket → QA position → "Add/ Shortlist". → Expected: Candidate Shortlist dialog: position title + tech stack, department filter pre-set to QA, columns Employee / UP System / Department / Designation / Skills / Availability.
2. Check each row. → Expected: Each employee has a redirect arrow that opens Employee Details in a new tab.
3. Tick Janki and Vandana; click "Add 2 Candidates". → Expected: Both added: two cards in Shortlisted, status Considered, Approval "Not sent".
4. Re-open the picker. → Expected: Janki and Vandana are no longer listed for this position.

**Expected**

Janki and Vandana are no longer listed for this position.

**Test Data**

- `Candidates`: Janki Naik, Vandana Mishra

#### TC-OPPM-070 — Shortlist shortfall warning

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-031 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Bug Ref** | BUG-031 |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Look at the Java position header with no candidates. → Expected: "Shortlisted …: 0" shown in red as a warning (label should read as a count, not a ratio).

**Expected**

"Shortlisted …: 0" shown in red as a warning (label should read as a count, not a ratio).

#### TC-OPPM-072 — Rejected candidate may be shortlisted again / on another position

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Last Result** | Pass |

**Preconditions**

Akash Singh was rejected on QA position.

**Steps**

1. Shortlist Akash Singh on the Java position of the same opportunity. → Expected: Allowed (rule 6).
2. Shortlist him again on the QA position. → Expected: Allowed; old rejection kept under "Rejected & previously considered".

**Expected**

Allowed; old rejection kept under "Rejected & previously considered".

#### TC-OPPM-075 — Preferred Candidate flag

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-004 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Bug Ref** | BUG-004 |
| **Last Result** | Not built |

**Preconditions**

Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Two candidates shortlisted.

**Steps**

1. Mark Janki as Preferred Candidate. → Expected: FRD rule 14: star shown on her card, auto-highlighted for TM; one per position.
2. Mark Vandana as Preferred. → Expected: Star moves to Vandana.

**Expected**

Star moves to Vandana.

#### TC-OPPM-077 — Candidate picker filters

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Sort by UP System; filter by skill and designation. → Expected: List narrows correctly; "Showing x of y" updates.
2. (API) Set minimum remaining allocation 80 and maximum 20. → Expected: 400 OPP_165 "The minimum cannot be greater than the maximum".

**Expected**

400 OPP_165 "The minimum cannot be greater than the maximum".

**Test Data**

- `Filters`: UP tier, skills, designation, availability min > max

#### TC-OPPM-078 — PMO sends a candidate for TM approval; TM of candidate's department approves

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki (shortlisted by TM QA) and Vandana (shortlisted by PMO) in Shortlisted.

**Steps**

1. As PMO click the send-for-approval action on Vandana. → Expected: Card moves to Waiting for Approval; Approval = Pending.
2. As TM (QA) open the ticket and approve Vandana. → Expected: Card moves to Being Prepared; Approval = Approved; lock icon on the name; Round shows 0/2 (two planned rounds seeded).
3. Check Vandana's Remaining Allocation. → Expected: Reduced by 50% (reserved while Blocked).

**Expected**

Reduced by 50% (reserved while Blocked).

#### TC-OPPM-081 — Withdraw an approval request

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Last Result** | Pass |

**Preconditions**

Candidate in Waiting for Approval sent by PMO.

**Steps**

1. As TM (not the requester) withdraw. → Expected: Refused: only the requester or PMO.
2. As PMO withdraw. → Expected: Card back to Shortlisted; Approval Not sent.
3. Withdraw again. → Expected: Refused: nothing pending.

**Expected**

Refused: nothing pending.

#### TC-OPPM-082 — PMO bypasses TM approval

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-009 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Bug Ref** | BUG-009 |
| **Last Result** | Pass |

**Preconditions**

Candidate in Shortlisted (not sent).

**Steps**

1. Bypass with a 1,025-character reason. → Expected: Refused (max 1,024).
2. Bypass with reason "TM on leave". → Expected: Being Prepared; Approval = Bypassed; reason stored and visible to PMO.
3. Bypass another candidate with no reason. → Expected: FRD rule 16: reason required — should be refused.
4. As TM try to bypass. → Expected: Refused (403).

**Expected**

Refused (403).

**Test Data**

- `Reason`: TM on leave
- `Long reason`: 1,025 chars

#### TC-OPPM-085 — TM rejects with a reason; slot reopens

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Steps**

1. Reject Akash with an empty or whitespace reason. → Expected: Refused: reason required.
2. Reject with the test reason. → Expected: Card returns to Pending to Shortlist (empty seat).
3. Open the Rejected column. → Expected: Akash listed with "Rejected by TM", date and reason.
4. Under the position, "Rejected & previously considered". → Expected: Akash row with status Rejected by TM.

**Expected**

Akash row with status Rejected by TM.

**Test Data**

- `Reason`: Failed R1 coding

#### TC-OPPM-086 — PMO records a client rejection

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Steps**

1. Reject a candidate choosing "Client" as the rejecter. → Expected: Rejected column shows Rejected by Client.
2. As TM try to set rejecter = Client. → Expected: Refused: "Only PMO can record who rejected the Candidate".

**Expected**

Refused: "Only PMO can record who rejected the Candidate".

**Test Data**

- `Rejected by`: Client
- `Reason`: Client declined after R1

#### TC-OPPM-089 — Interview rounds: add, date, decide, delete

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Steps**

1. Open Vandana → Interview Rounds; add a round with no title. → Expected: Round 3 added, shown as "Round 3".
2. Set round 1 date in 2 days and interviewer "Client CTO". → Expected: Card moves to Interview Scheduled.
3. Mark round 1 Cleared. → Expected: Refused: date must be today or earlier.
4. Set round 2 to yesterday and mark Cleared without recording URL. → Expected: Saved (recording optional).
5. Enter recording URL "teams recording". → Expected: Invalid URL message.
6. Enter 201-char interviewer / 4,097-char feedback. → Expected: Refused at the limits.
7. Delete the decided round 2. → Expected: Refused: only pending rounds can be removed.
8. Delete pending round 3. → Expected: Removed; remaining rounds renumbered.

**Expected**

Removed; remaining rounds renumbered.

**Test Data**

- `Interviewer`: Client CTO
- `Long interviewer`: 201 chars
- `Feedback`: 4,097 chars

#### TC-OPPM-090 — Finalize an interview schedule (lock)

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-005 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Bug Ref** | BUG-005 |
| **Last Result** | Not built |

**Preconditions**

Round dated in the future.

**Steps**

1. Finalize the round schedule. → Expected: FRD rule 17: schedule locked.
2. Try to change the date or interviewer. → Expected: Refused while finalized.

**Expected**

Refused while finalized.

#### TC-OPPM-091 — "Did the interview happen?" step

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Last Result** | Pass |

**Preconditions**

Card in Interview Scheduled; current round dated yesterday.

**Steps**

1. Answer Yes / drag to Waiting for Feedback. → Expected: Card moves to Waiting for Feedback.
2. On another card answer No (clear the date). → Expected: Card returns to Being Prepared.
3. Try Yes while the current round is dated in the future. → Expected: Refused: date cannot be after today.

**Expected**

Refused: date cannot be after today.

#### TC-OPPM-093 — Candidate ticks checklist items in any order

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate (Janki) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank". Janki in Being Prepared.

**Steps**

1. Log in as janki.naik → Profile → Opportunities → open the ticket → Preparation Checklist. → Expected: 5 items listed.
2. Tick item 4, then item 1. → Expected: Both saved (any order allowed).
3. Untick item 4. → Expected: Saved.

**Expected**

Saved.

**Test Data**

- `Items`: Manual mock completed, then JD/client context reviewed

#### TC-OPPM-094 — PMO marks an item "Skipped by PMO"

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank". Janki in Being Prepared.

**Steps**

1. As PMO mark item 2 Skipped by PMO. → Expected: Item shows Skipped by PMO.
2. As Janki try to tick item 2. → Expected: Refused: skipped by PMO.
3. As Janki try to skip an item. → Expected: Refused: only PMO can skip.

**Expected**

Refused: only PMO can skip.

#### TC-OPPM-096 — Pending checklist never blocks scheduling

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Last Result** | Pass |

**Preconditions**

Candidate with 0/5 items done.

**Steps**

1. Date round 1. → Expected: Allowed; card moves to Interview Scheduled.

**Expected**

Allowed; card moves to Interview Scheduled.

#### TC-OPPM-098 — Add / edit prep material per role

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-008 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM, EM, PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Bug Ref** | BUG-008 |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank".

**Steps**

1. As TM add material. → Expected: Added.
2. As EM add material. → Expected: FRD §7.4: allowed.
3. As assigned PM add material on top of PMO's. → Expected: FRD §7.5: allowed.
4. As TM edit PMO's "QA question bank". → Expected: FRD rule 5: only the owner edits — refused.
5. As Employee add material. → Expected: Refused.

**Expected**

Refused.

**Test Data**

- `Material`: title + https URL

#### TC-OPPM-100 — Send Reminder for pending preparation

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-020 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Bug Ref** | BUG-020 |
| **Last Result** | Not built |

**Preconditions**

Candidate with pending items.

**Steps**

1. Click "Send Reminder". → Expected: FRD §7.5: candidate (and TM) notified.

**Expected**

FRD §7.5: candidate (and TM) notified.

#### TC-OPPM-101 — Full happy path: shortlist → bypass → interview → Won → Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity OPP on AnalytixHub, Java position Fixed 40%, start today+20, end today+120; candidate Akash Pandya (100% remaining) also shortlisted on another open opportunity.

**Steps**

1. Shortlist Akash and bypass approval (reason "fast track"). → Expected: Being Prepared; Remaining Allocation 100% → 60%.
2. Date round 1 yesterday. → Expected: Interview Scheduled.
3. Confirm "the interview happened". → Expected: Waiting for Feedback.
4. Mark round 1 Cleared, then Select (Won). → Expected: Card in Won; nomination Selected; "1 / 1 filled".
5. Click Allocate; enter Fixed 40%, start/end dates, status Green, WFO; submit. → Expected: Card in Project Allocated; an approved NA ticket is created.
6. Open Requests Tracking → Project Allocation, find the NA ticket. → Expected: NEW_ALLOCATION, APPROVED, employee Akash Pandya, project AnalytixHub.

**Expected**

NEW_ALLOCATION, APPROVED, employee Akash Pandya, project AnalytixHub.

#### TC-OPPM-103 — Round-skip to Won from Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Candidate in Being Prepared.

**Steps**

1. Click Select (Won). → Expected: Confirmation dialog shown (rule 20).
2. Cancel. → Expected: Nothing changes.
3. Confirm. → Expected: Won.
4. As TM try to select. → Expected: Refused.

**Expected**

Refused.

#### TC-OPPM-106 — Won-elsewhere notification

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, PMO2 |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity OPP on AnalytixHub, Java position Fixed 40%, start today+20, end today+120; candidate Akash Pandya (100% remaining) also shortlisted on another open opportunity.

**Steps**

1. Mark Akash Won on this opportunity while he is still shortlisted on another open one. → Expected: Other PMOs get "candidate won elsewhere" listing the other opportunity (actor does not notify themselves).

**Expected**

Other PMOs get "candidate won elsewhere" listing the other opportunity (actor does not notify themselves).

#### TC-OPPM-107 — Two-way allocation alert

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-014 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Bug Ref** | BUG-014 |
| **Last Result** | As designed |

**Preconditions**

Janki shortlisted on two interview opportunities.

**Steps**

1. As PMO start a Direct ticket / new allocation for Janki. → Expected: Alert lists her interview opportunities with allocation % (does not block).
2. As PMO shortlist an employee with a current/upcoming allocation. → Expected: Alert lists the direct allocations.
3. As CSM start a Direct ticket for Janki. → Expected: Same alert shown to the CSM.

**Expected**

Same alert shown to the CSM.

#### TC-OPPM-108 — Employee list "Interview Opportunities" column

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Janki on two open interview opportunities.

**Steps**

1. Employee Details → search janki.naik. → Expected: Interview Opportunities column shows 2.
2. Hover the cell. → Expected: Lists both opportunities with allocation %.

**Expected**

Lists both opportunities with allocation %.

#### TC-OPPM-109 — Employee profile — opportunity history

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Akash Pandya allocated via an opportunity.

**Steps**

1. Open Akash's profile → Opportunities. → Expected: Every opportunity he was shortlisted for, with stage and status (incl. Project Allocated).
2. As a different employee open Akash's history (API). → Expected: Empty / not allowed.

**Expected**

Empty / not allowed.

#### TC-OPPM-110 — Requests Tracking — Interview and Direct tabs

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-026 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Bug Ref** | BUG-026 |
| **Last Result** | Not required |

**Preconditions**

Opportunities in several statuses.

**Steps**

1. Open Requests Tracking → Project Allocation → Interview tab. → Expected: Opportunities listed; tiles All/Open/Won/Lost/On Hold.
2. Compare tiles with the board. → Expected: Lost counts only Lost opportunities; No Longer Required has its own figure.

**Expected**

Lost counts only Lost opportunities; No Longer Required has its own figure.

#### TC-OPPM-111 — On Hold blocks pipeline actions

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

**Steps**

1. Cancel Request / status → On Hold. → Expected: Cards move to the On Hold column.
2. Try to shortlist, approve or tick checklist. → Expected: Refused: "not allowed while the Opportunity is not open".
3. Re-open (status Open). → Expected: Cards back in their stages.

**Expected**

Cards back in their stages.

#### TC-OPPM-112 — Mark Lost releases candidates

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

**Steps**

1. Set status Lost. → Expected: Candidates Released and unblocked; ticket hidden from default board; visible in Lost column.
2. Re-open. → Expected: Released candidates removed; cards back to Pending to Shortlist.

**Expected**

Released candidates removed; cards back to Pending to Shortlist.

#### TC-OPPM-113 — No Longer Required needs confirmation

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

**Steps**

1. Choose No Longer Required. → Expected: Confirmation pop-up shown first.
2. Confirm. → Expected: Archived as NLR (red-border highlight per FRD).
3. Set to the same status again. → Expected: Refused.

**Expected**

Refused.

#### TC-OPPM-114 — Mark Won at opportunity level

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

Position with 1 In Process, 1 awaiting approval, 1 shortlisted.

**Steps**

1. Set opportunity status Won. → Expected: In Process candidate → Selected/Won; awaiting and shortlisted candidates removed.

**Expected**

In Process candidate → Selected/Won; awaiting and shortlisted candidates removed.

#### TC-OPPM-116 — Re-initiate a position

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

Position with candidates shortlisted and approved.

**Steps**

1. As TM click Re-initiate. → Expected: Not available.
2. As PMO Re-initiate without reason. → Expected: Refused.
3. Re-initiate with the reason. → Expected: All non-allocated candidates released; cards back to Pending; "Re-initiated by … on …" shown.
4. Re-initiate again with no candidates. → Expected: Refused: nothing to re-initiate.

**Expected**

Refused: nothing to re-initiate.

**Test Data**

- `Reason`: Client rejected all

#### TC-OPPM-118 — PMO moves Direct ticket Open → In Review → Awaiting → Approved (allocates)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

**Steps**

1. Board → Direct → set the ticket status to In Review. → Expected: Saved.
2. Try Open → Awaiting directly, or back to Open. → Expected: Not allowed (forward one step only).
3. Set Awaiting, then Approved. → Expected: Approved; employee allocated immediately (NA ticket APPROVED, start = tentative date); stage Project Allocated.
4. Requests Tracking → Direct tab. → Expected: NA ticket listed.
5. Try to change an Approved ticket. → Expected: Not allowed (terminal).

**Expected**

Not allowed (terminal).

#### TC-OPPM-120 — Owner edits / swaps the employee while Open or In Review

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

**Steps**

1. As CSM swap the employee while In Review. → Expected: Saved; new employee on the ticket.
2. After PMO moves it to Awaiting, swap again. → Expected: Refused (only while Open / In Review).
3. After Approved, edit anything. → Expected: Refused.
4. Another CSM (not owner) tries to edit. → Expected: Not found.

**Expected**

Not found.

#### TC-OPPM-122 — CSM cancels a Direct ticket (tag only) and PMO closes it

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM, PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15. Status In Review.

**Steps**

1. As CSM cancel without a reason. → Expected: Refused: reason required.
2. Cancel with the reason (confirm the pop-up). → Expected: Cancelled tag shown; stage stays In Review.
3. Cancel again. → Expected: Refused: already cancelled.
4. Check PMO notifications. → Expected: PMO notified: ticket cancelled, with reason.
5. As PMO set the opportunity to No Longer Required. → Expected: Closed; hidden from default board.

**Expected**

Closed; hidden from default board.

**Test Data**

- `Reason`: Client postponed

#### TC-OPPM-123 — CSM cancels an Interview ticket

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-003 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM, PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Bug Ref** | BUG-003 |
| **Last Result** | Not built |

**Preconditions**

Interview opportunity raised by the CSM.

**Steps**

1. As CSM open the ticket and cancel it. → Expected: FRD rule 22: Cancelled tag added, stage unchanged, PMO notified.

**Expected**

FRD rule 22: Cancelled tag added, stage unchanged, PMO notified.

#### TC-OPPM-124 — Prospect Direct ticket cannot be approved until a project is linked

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM, PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket for a Prospect (no project), in Awaiting.

**Steps**

1. As PMO open the status dropdown. → Expected: Approved not offered.
2. As CSM link ElitePay. → Expected: Client type becomes Existing.
3. As PMO set Approved. → Expected: Allowed; allocation created.

**Expected**

Allowed; allocation created.

**Test Data**

- `Project`: ElitePay

#### TC-OPPM-125 — Approve now, confirm allocation later

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket created with "confirm allocation" unticked.

**Steps**

1. Move to Approved. → Expected: Employee selected but not yet allocated.
2. Confirm the allocation from the ticket. → Expected: Allocation created; stage Project Allocated.

**Expected**

Allocation created; stage Project Allocated.

#### TC-OPPM-126 — Candidate notifications along the pipeline

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-023 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M14 Notifications |
| **Bug Ref** | BUG-023 |
| **Last Result** | Pass |

**Preconditions**

Candidate goes through shortlist → approve → interview scheduled → reject.

**Steps**

1. Shortlist the candidate. → Expected: "You've been shortlisted … — pending preparation."
2. Approve. → Expected: Approval notification.
3. Schedule an interview. → Expected: Interview scheduled notification.
4. Reject one of three shortlisted candidates with a reason. → Expected: Only the rejected candidate receives the rejection notification (plus PMO/owners); the other candidates on the position do not.

**Expected**

Only the rejected candidate receives the rejection notification (plus PMO/owners); the other candidates on the position do not.

#### TC-OPPM-127 — Assignment notifications to PM and CSM

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-011 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M14 Notifications |
| **Bug Ref** | BUG-011 |
| **Last Result** | Pass |

**Preconditions**

PMO creates an opportunity assigned to PM gaurav and CSM tarun.

**Steps**

1. Check the PM's bell. → Expected: "You've been assigned to OPP-nnnn".
2. Check the CSM's bell. → Expected: Same notification for the CSM.

**Expected**

Same notification for the CSM.

#### TC-OPPM-128 — TM notified when a position is edited after shortlisting (rule 18)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M14 Notifications |
| **Last Result** | Pass |

**Preconditions**

Candidates shortlisted; PMO edits tech stack.

**Steps**

1. PMO changes the tech stack. → Expected: TM receives "position updated — please re-review".

**Expected**

TM receives "position updated — please re-review".

#### TC-OPPM-129 — Notification links open the right page

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M14 Notifications |
| **Last Result** | Pass |

**Preconditions**

Notification for an opportunity.

**Steps**

1. Click the notification. → Expected: Opens the opportunity detail.
2. Click one for an opportunity the user was removed from. → Expected: Graceful "not available" message, no broken page.

**Expected**

Graceful "not available" message, no broken page.

#### TC-OPPM-132 — "Did Interview Happen" stage after the interview day passes

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Last Result** | Pass |

**Preconditions**

Candidate In Process with one planned round.

**Steps**

1. Date round 1 yesterday. → Expected: Card moves to "Did Interview Happen" (shares the Interview Scheduled slot); stage counts include it.
2. Try to drag a card into "Did Interview Happen". → Expected: Not allowed (OPP_014).
3. Reschedule the round to 2 days ahead. → Expected: Card back to Interview Scheduled.
4. Date it yesterday again and confirm the interview happened (move to Waiting for Feedback). → Expected: Card in Waiting for Feedback; one step, no skip confirmation.

**Expected**

Card in Waiting for Feedback; one step, no skip confirmation.

**Test Data**

- `Round date`: yesterday, then +2 days

#### TC-OPPM-133 — "Interview Required" field removed from Interview positions

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Last Result** | Pass |

**Preconditions**

On /pre-sales/new with Interview Opportunity.

**Steps**

1. Look at Interview Details on Position #1. → Expected: Only Tentative Interview Date; no Interview Required Yes/No.
2. (API) Send isInterviewRequired on a position. → Expected: 400 "property isInterviewRequired should not exist".

**Expected**

400 "property isInterviewRequired should not exist".

#### TC-OPPM-134 — Positions are listed in the order they were created

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-034 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Bug Ref** | BUG-034 |
| **Last Result** | Ignored |

**Preconditions**

PMO on /pre-sales/new.

**Steps**

1. Create an opportunity with the three positions in that order. → Expected: Created.
2. Open Position Details and Ticket Info. → Expected: Positions shown A, B, C.
3. Repeat with 4 more opportunities. → Expected: Always A, B, C.

**Expected**

Always A, B, C.

**Test Data**

- `Positions`: A-first, B-second, C-third

#### TC-OPPM-137 — Ticket number fully visible in the board list

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-035 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Bug Ref** | BUG-035 |
| **Last Result** | Fail |

**Preconditions**

Board in List view (search by OPP number is the agreed way to find tickets).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as bhumi.chauhan@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Click Requests Tracking → Opportunity Allocation in the sidebar. Open List view. → Expected: Board list shown.
3. Read the Ticket ID column. → Expected: Full number visible (e.g. OPP-0112), not "OPP-011…".

**Expected**

Full number visible (e.g. OPP-0112), not "OPP-011…".

#### TC-OPPM-138 — Candidate breadcrumb on the opportunity page

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-030 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | trivial |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Bug Ref** | BUG-030 |
| **Last Result** | As designed |

**Preconditions**

janki.naik is a candidate on an open opportunity.

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as janki.naik@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Profile → Opportunities → open the opportunity. → Expected: Detail opens with only her row; no shortlisted count.
3. Read the breadcrumb. → Expected: Points to a page she can open (e.g. Profile / Opportunities), not "Requests Tracking".

**Expected**

Points to a page she can open (e.g. Profile / Opportunities), not "Requests Tracking".

#### TC-OPPM-141 — Rejection notification goes only to the rejected candidate

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, Candidates |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Last Result** | Pass |

**Preconditions**

Three candidates shortlisted on one position (Janki Naik, Vandana Mishra, Akash Singh).

**Steps**

1. Reject Akash Singh with the reason. → Expected: Rejected.
2. Log in as akash.singh and open the bell. → Expected: Rejection notification received.
3. Log in as janki.naik and vandana.mishra and open the bell. → Expected: No rejection notification about Akash.
4. Log in as a second PMO. → Expected: Notification received with the reason.

**Expected**

Notification received with the reason.

**Test Data**

- `Reason`: RT3 recipients probe

### Negative (44)

#### TC-OPPM-007 — PM has no board but can reach the Create form by URL

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-001 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Bug Ref** | BUG-001 |
| **Last Result** | Pending decision |

**Preconditions**

PM account gaurav.panchal@simformsolutions.com (manages EventDriven | CQRS Framework).

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). → Expected: Lands on Profile.
2. Expand Requests Tracking in the sidebar. → Expected: Only "Project Allocation" is listed — no "Opportunity Allocation".
3. Open /pre-sales in the address bar. → Expected: Redirected to /unauthorized.
4. Open /pre-sales/new in the address bar. → Expected: FRD rule 3 / §7.5: PM must not be able to create → page should be blocked.

**Expected**

FRD rule 3 / §7.5: PM must not be able to create → page should be blocked.

**Test Data**

- `URL 1`: /pre-sales
- `URL 2`: /pre-sales/new

#### TC-OPPM-011 — PM loses access when re-assigned

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

OPP-0042 assigned to gaurav.panchal.

**Steps**

1. As PMO change Assign to PM to another PM. → Expected: Saved.
2. As gaurav.panchal open OPP-0042 / Interview Allocation tab. → Expected: No longer listed; direct link → not found.
3. As PMO assign gaurav back. → Expected: Listed again.

**Expected**

Listed again.

#### TC-OPPM-012 — Employee (not a candidate) has no access

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

Plain employee account kashyap.patel@simformsolutions.com with no candidacies.

**Steps**

1. Open https://simerp-dev.simform.solutions/dev-login and sign in as kashyap.patel@simformsolutions.com (password from .env). → Expected: Login succeeds.
2. Look for Opportunity Allocation in the sidebar. → Expected: Not present.
3. Open /pre-sales. → Expected: Redirected to /unauthorized.
4. Open /pre-sales/<any opportunity id> for an opportunity they are not a candidate on. → Expected: Opportunity not shown (not found / unauthorized).

**Expected**

Opportunity not shown (not found / unauthorized).

**Test Data**

- `URL`: /pre-sales

#### TC-OPPM-015 — Only PMO can drag Kanban cards

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin, TM, EM, RM, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M01 Access & Navigation |
| **Last Result** | Pass |

**Preconditions**

At least one card in Shortlisted or later.

**Steps**

1. Log in as PMO, open Kanban. → Expected: Every card shows a drag handle (⋮⋮) and an edit pencil.
2. Log in as Admin, open Kanban and try to drag a card to another column. → Expected: No drag handle; card does not move.
3. Repeat with TM, EM, RM and CSM. → Expected: No drag handle for any of them.

**Expected**

No drag handle for any of them.

#### TC-OPPM-019 — CSM cannot link a project they do not manage

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

CSM tarun.sharma; project AbsoluteUI | Design System is not managed by him.

**Steps**

1. As CSM open the project dropdown. → Expected: AbsoluteUI is not offered.
2. (API) POST /api/v1/opportunities with projectPublicId of AbsoluteUI. → Expected: 403 OPP_009 "You can only raise or link Opportunities for Projects you manage".

**Expected**

403 OPP_009 "You can only raise or link Opportunities for Projects you manage".

**Test Data**

- `Project`: AbsoluteUI | Design System

#### TC-OPPM-020 — Prospect opportunity must not carry a linked project

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-015 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Bug Ref** | BUG-015 |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Choose Client Type = Prospect. → Expected: Link Zoho Project field is hidden for Prospect.
2. (API) Create with clientType PROSPECT and a projectPublicId. → Expected: Refused (400), or saved as Existing Client — never a Prospect with a linked project.

**Expected**

Refused (400), or saved as Existing Client — never a Prospect with a linked project.

**Test Data**

- `Client Type`: Prospect
- `Project`: any

#### TC-OPPM-023 — Website / LinkedIn / Interviewer LinkedIn URL validation

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-028 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Bug Ref** | BUG-028 |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Enter each invalid value in Website URL and leave the field. → Expected: Inline "invalid URL" message for each; cannot create.
2. Repeat in LinkedIn URL and Interviewer LinkedIn. → Expected: Same validation.
3. Enter the 2,049-character URL. → Expected: Blocked: max 2,048 characters.
4. Enter the valid URL and create. → Expected: Created; URL saved and shown on Ticket Info.
5. Check the Interviewer LinkedIn placeholder. → Expected: Placeholder shows a person-profile URL (e.g. https://linkedin.com/in/…).

**Expected**

Placeholder shows a person-profile URL (e.g. https://linkedin.com/in/…).

**Test Data**

- `Invalid`: not a url · linkedin.com/company/x · ftp://files.example.com · javascript:alert(1) · http://localhost
- `Too long`: https://example.com/ + 2,029 chars (2,049 total)
- `Valid`: https://example.com/a?b=c

#### TC-OPPM-025 — Job Description rich text is sanitised

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Steps**

1. Paste the test HTML into Job Description (or send via API) and create. → Expected: Created.
2. Open the ticket → Ticket Info. → Expected: No alert pops up; stored JD is <p>Hello</p><img src="x" /><a>x</a> — script, onerror and javascript: removed.
3. Enter a JD longer than 50,000 characters. → Expected: Refused: max 50,000 characters.

**Expected**

Refused: max 50,000 characters.

**Test Data**

- `JD (HTML view / API)`: <p>Hello</p><script>alert(1)</script><img src=x onerror=alert(2)><a href="javascript:alert(3)">x</a>

#### TC-OPPM-028 — Raiser matrix — who may create which ticket (FRD rule 3)

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-001 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | All roles |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M02 Create Opportunity — Client & Opportunity details |
| **Bug Ref** | BUG-001 |
| **Last Result** | Pending decision |

**Preconditions**

Accounts for every role.

**Steps**

1. PMO creates an Existing-client and a Prospect opportunity. → Expected: Both created.
2. CSM creates Existing (own project) and Prospect. → Expected: Both created.
3. TM, EM, RM, Admin, Employee try to create (UI button / API). → Expected: Refused (no button; API 403).
4. PM creates an Existing-client opportunity for own project (via /pre-sales/new or API). → Expected: Refused per FRD.
5. PM creates a Direct opportunity for own project. → Expected: Refused per FRD.

**Expected**

Refused per FRD.

**Test Data**

- `Expected`: PMO ✔/✔ · CSM ✔/✔ · PM ✘/✘ · TM/EM/RM/Admin/Employee ✘

#### TC-OPPM-029 — Empty submit shows a message on every missing required field

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-028 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Bug Ref** | BUG-028 |
| **Last Result** | Fail |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Leave every Position #1 field empty and click into / out of each field. → Expected: Each required field (Position Title, Tech Stack, Department, Priority, Preferred Seniority, Allocation %) shows its own message.
2. Look at the footer. → Expected: "N required fields left" counter is shown and "Create Opportunity" is disabled.
3. Look at Tentative Allocation Date. → Expected: Not required (no *) → must not be outlined red without a message.

**Expected**

Not required (no *) → must not be outlined red without a message.

#### TC-OPPM-034 — Priority and Preferred Seniority are mandatory for Interview positions

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. Leave Priority empty and try to create. → Expected: Blocked (API: 400 OPP_154 "An Interview Position needs its priority").
2. Leave Preferred Seniority empty. → Expected: Blocked.
3. Create two positions with priorities Low and Medium. → Expected: Opportunity header shows Medium (most urgent of its positions).

**Expected**

Opportunity header shows Medium (most urgent of its positions).

**Test Data**

- `Priority`: High / Medium / Low
- `Seniority`: Junior / Mid / Senior / Lead

#### TC-OPPM-037 — Interview Required = No on an Interview opportunity

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-015 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M03 Create Opportunity — Position fields |
| **Bug Ref** | BUG-015 |
| **Last Result** | Retired |

**Preconditions**

Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Steps**

1. On an Interview Opportunity, set Interview Required = No. → Expected: Rounds and interview date are hidden.
2. Try to create. → Expected: Refused — an Interview opportunity must need an interview (otherwise use Direct).
3. (API) Send isInterviewRequired false with roundTitles. → Expected: 400 OPP_029.

**Expected**

400 OPP_029.

**Test Data**

- `Interview Required`: No

#### TC-OPPM-044 — Direct ticket needs employee and tentative allocation date

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M04 Create Opportunity — Direct |
| **Last Result** | Pass |

**Preconditions**

Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Steps**

1. Leave Employee empty and try to create. → Expected: Blocked (API 400 OPP_126).
2. Leave Tentative Allocation Date empty. → Expected: Blocked (API 400 OPP_127).

**Expected**

Blocked (API 400 OPP_127).

#### TC-OPPM-045 — Direct ticket refuses interview-only fields

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M04 Create Opportunity — Direct |
| **Last Result** | Pass |

**Preconditions**

Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Steps**

1. (API) Send each field on a Direct position. → Expected: Each refused with 400 OPP_128.
2. (API) Send interviewerLinkedinUrl. → Expected: Ignored; stored as empty.

**Expected**

Ignored; stored as empty.

**Test Data**

- `API fields`: requiredCount 2 · roundTitles · isInterviewRequired true · prepMaterials

#### TC-OPPM-048 — PM raises a Direct ticket

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-001 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M04 Create Opportunity — Direct |
| **Bug Ref** | BUG-001 |
| **Last Result** | Pending decision |

**Preconditions**

PM gaurav.panchal; project EventDriven.

**Steps**

1. As PM open /pre-sales/new, choose Direct, project EventDriven, pick an employee and create. → Expected: FRD: refused — PM cannot raise tickets.

**Expected**

FRD: refused — PM cannot raise tickets.

#### TC-OPPM-058 — Department scope on the board

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA), TM (JAVA), EM, CSM, RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M05 Board — list, Kanban, filters, tiles |
| **Last Result** | Pass |

**Preconditions**

One QA-only and one JAVA-only opportunity.

**Steps**

1. As TM (QA) search both tickets. → Expected: Sees QA one only; JAVA one not found.
2. As TM (JAVA). → Expected: Sees JAVA one only.
3. As EM kunal.jadeja (QA, Python…). → Expected: Sees QA one only.
4. As CSM / RM not linked to either. → Expected: Sees neither.
5. (API) Open the hidden one by id. → Expected: 404 (not 403) — no existence leak.

**Expected**

404 (not 403) — no existence leak.

#### TC-OPPM-061 — Position allocation fields lock once a candidate is in the pipeline

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). At least one candidate shortlisted on QA position.

**Steps**

1. Edit the QA position and change Allocation % to 80; save. → Expected: Refused: "Allocation type, percentage, tentative dates and preferred Employees cannot change once a Candidate is in the pipeline" (OPP_153).
2. Save with 50 unchanged and a different title. → Expected: Saved.

**Expected**

Saved.

**Test Data**

- `Allocation %`: 50 → 80

#### TC-OPPM-063 — Delete position rules

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. Delete a position whose candidate is Being Prepared (In Process). → Expected: Refused (OPP_025).
2. Delete a position whose candidates are only Shortlisted. → Expected: Deleted with its cards.
3. Delete the last remaining position. → Expected: Refused: "An Opportunity needs at least one Position; change its status instead".

**Expected**

Refused: "An Opportunity needs at least one Position; change its status instead".

#### TC-OPPM-064 — Who may edit an Interview opportunity

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-002 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM, TM, EM, Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Bug Ref** | BUG-002 |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity raised by CSM tarun.sharma on his project.

**Steps**

1. As the raising CSM click Edit Ticket and change Special Instructions. → Expected: FRD §7.6: allowed (CSM edits like PMO).
2. As the raising CSM add a new position. → Expected: FRD §7.6: allowed.
3. As TM, EM, Admin try the same. → Expected: Refused / no Edit button.

**Expected**

Refused / no Edit button.

**Test Data**

- `Change`: Special Instructions

#### TC-OPPM-067 — Project cannot change after a candidate is allocated

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-010 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M06 Opportunity detail & editing |
| **Bug Ref** | BUG-010 |
| **Last Result** | Pass |

**Preconditions**

Opportunity with a candidate in Project Allocated on AnalytixHub.

**Steps**

1. Link Project → change to ElitePay. → Expected: Refused — allocation already exists on AnalytixHub.
2. Unlink the project. → Expected: Refused.

**Expected**

Refused.

**Test Data**

- `New project`: ElitePay

#### TC-OPPM-071 — Cannot shortlist the same live candidate twice

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Last Result** | Pass |

**Preconditions**

Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki already shortlisted.

**Steps**

1. (API) Nominate Janki again on the same position. → Expected: 409 OPP_028 "already nominated".
2. Two PMOs nominate the same employee at the same moment. → Expected: One succeeds, the other gets 409.

**Expected**

One succeeds, the other gets 409.

#### TC-OPPM-073 — Cross-department candidate is an empty seat for the other TM

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM (QA), TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. As PMO shortlist Siddharth (JAVA) on the QA position. → Expected: Added.
2. As TM (QA) open the ticket. → Expected: Siddharth's name is not visible to the QA TM (empty seat).
3. As TM (JAVA) open the ticket. → Expected: Ticket visible; only Siddharth's row shown.

**Expected**

Ticket visible; only Siddharth's row shown.

**Test Data**

- `Candidate`: Siddharth Iyer (JAVA) on the QA position

#### TC-OPPM-074 — Roles that cannot shortlist

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-007 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM, CSM, Admin, Employee, PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Bug Ref** | BUG-007 |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Steps**

1. As RM, CSM, Admin, Employee open the ticket. → Expected: No "Add/ Shortlist" action; API 403.
2. As PM (assigned) try to shortlist. → Expected: FRD §7.5: PM can shortlist — expected to be allowed.

**Expected**

FRD §7.5: PM can shortlist — expected to be allowed.

#### TC-OPPM-076 — Remove a shortlisted candidate needs a reason

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-009 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M07 Shortlisting |
| **Bug Ref** | BUG-009 |
| **Last Result** | Pass |

**Preconditions**

A candidate in Shortlisted (Not sent).

**Steps**

1. Click the delete (bin) action on the candidate row. → Expected: FRD rule 16: a reason is asked; confirmation shown.
2. Confirm. → Expected: Card goes back to Pending to Shortlist; candidate notified with the reason.

**Expected**

Card goes back to Pending to Shortlist; candidate notified with the reason.

#### TC-OPPM-079 — TM sends own pick; who approves?

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-006 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA), PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Bug Ref** | BUG-006 |
| **Last Result** | Pending decision |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki (shortlisted by TM QA) and Vandana (shortlisted by PMO) in Shortlisted.

**Steps**

1. As TM (QA) send Janki for approval. → Expected: Waiting for Approval.
2. As the same TM approve Janki. → Expected: Refused: "You cannot approve or reject a request you sent".
3. As PMO approve Janki. → Expected: FRD rule 19: TM Approval is final and owned by TM — PMO should not be the approver of a "TM Approval".

**Expected**

FRD rule 19: TM Approval is final and owned by TM — PMO should not be the approver of a "TM Approval".

#### TC-OPPM-080 — Approval guard rails

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM, EM, PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki (shortlisted by TM QA) and Vandana (shortlisted by PMO) in Shortlisted.

**Steps**

1. TM approves a candidate that was never sent. → Expected: Refused: "Send the Candidate for approval first".
2. TM sends a candidate shortlisted by the EM. → Expected: Refused: "You can only send Candidates you shortlisted".
3. Send the same candidate twice. → Expected: Refused: "already sent".
4. EM tries to approve. → Expected: Refused (403).
5. TM (JAVA) tries to approve a QA candidate. → Expected: Not found (out of scope).

**Expected**

Not found (out of scope).

#### TC-OPPM-083 — Same employee approved on two opportunities at once

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-012 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M08 TM approval & bypass |
| **Bug Ref** | BUG-012 |
| **Last Result** | Fail |

**Preconditions**

Janki is Being Prepared (In Process) on opportunity A and shortlisted on opportunity B.

**Steps**

1. On opportunity B, bypass/approve Janki. → Expected: Warning or block: employee already In Process (Blocked) on opportunity A.
2. Check Janki's Remaining Allocation. → Expected: Both reservations counted.

**Expected**

Both reservations counted.

#### TC-OPPM-087 — Board drag rules (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Steps**

1. As TM drag a card. → Expected: Not possible (no handle; API 403).
2. As PMO drag Being Prepared → Waiting for Feedback (skip a column). → Expected: Confirmation required ("This change skips a step").
3. As PMO drag to Waiting for Approval or Won. → Expected: Not allowed.
4. As PMO drag Being Prepared → Interview Scheduled with no interview date. → Expected: Interview-date dialog / refused "Enter the interview date".
5. Drag any card back to Shortlisted. → Expected: Not allowed.

**Expected**

Not allowed.

#### TC-OPPM-088 — Dragging back from Interview Scheduled keeps the schedule

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-005 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Bug Ref** | BUG-005 |
| **Last Result** | Not run |

**Preconditions**

Card in Interview Scheduled with round 1 dated in 3 days.

**Steps**

1. Drag the card back to Being Prepared. → Expected: Confirmation that the scheduled interview will be cleared, or the move is blocked.
2. Open the candidate's Interview Rounds. → Expected: Without confirmation the date must not be lost.

**Expected**

Without confirmation the date must not be lost.

#### TC-OPPM-092 — Candidate never sees feedback or bypass reasons

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-030 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate (Vandana) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M09 Reject, stage moves & interview rounds |
| **Bug Ref** | BUG-030 |
| **Last Result** | Pass |

**Preconditions**

Round 2 Cleared with feedback "Strong"; another candidate bypassed with reason.

**Steps**

1. Log in as vandana.mishra and open the ticket from Profile → Opportunities. → Expected: Only her own row is shown.
2. Open her Interview Rounds. → Expected: Outcome visible; feedback text NOT shown.
3. Look for other candidates' names, bypass reasons, PMO notes. → Expected: None visible.
4. Look at the position header. → Expected: Count of competing candidates should not be shown to a candidate.

**Expected**

Count of competing candidates should not be shown to a candidate.

#### TC-OPPM-095 — Checklist editing window for the candidate

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Last Result** | Pass |

**Preconditions**

Candidate whose card is Interview Scheduled.

**Steps**

1. Tick an item. → Expected: Refused: only while Shortlisted, Waiting for Approval or Being Prepared.
2. As PMO tick the same item. → Expected: Allowed at any stage.
3. Put the opportunity On Hold and tick as candidate. → Expected: Refused while not Open.

**Expected**

Refused while not Open.

#### TC-OPPM-097 — Other people cannot tick someone else's checklist

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M10 Preparation checklist & material |
| **Last Result** | Pass |

**Preconditions**

Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank".

**Steps**

1. As Janki try to edit Vandana's checklist (API with her nomination id). → Expected: Not found.
2. As TM tick a team member's checklist. → Expected: Refused (read-only).

**Expected**

Refused (read-only).

#### TC-OPPM-102 — Select after a Not Cleared round needs confirmation

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Candidate in Waiting for Feedback; round 1 Not Cleared.

**Steps**

1. Click Select (Won). → Expected: Confirmation: "Skip remaining interview rounds and mark as Selected?"
2. Confirm. → Expected: Won.

**Expected**

Won.

#### TC-OPPM-104 — Allocate dialog validation

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Candidate in Won.

**Steps**

1. Submit Fixed with no %. → Expected: Refused.
2. End date before start. → Expected: Refused.
3. 101%. → Expected: Refused.
4. Allocate an employee already at 100%. → Expected: Refused with the over-capacity message listing current allocations.
5. As TM / CSM try to allocate. → Expected: Refused.

**Expected**

Refused.

**Test Data**

- `Cases`: Fixed without % · end before start · 101% · employee over capacity

#### TC-OPPM-105 — Allocate is blocked without a linked project

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M11 Won, allocation & cross-module integration |
| **Last Result** | Pass |

**Preconditions**

Prospect opportunity, candidate in Won.

**Steps**

1. Click Allocate. → Expected: Disabled / refused: "Link the Opportunity to a Project before allocating".

**Expected**

Disabled / refused: "Link the Opportunity to a Project before allocating".

#### TC-OPPM-117 — Roles that cannot change status

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM, TM, EM, RM, PM, Admin, Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M12 Opportunity status lifecycle |
| **Last Result** | Pass |

**Preconditions**

Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

**Steps**

1. Each role tries Cancel Request / Lost / On Hold. → Expected: No action offered; API 403.

**Expected**

No action offered; API 403.

#### TC-OPPM-119 — Only PMO moves Direct tickets

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

**Steps**

1. As the raising CSM change the status. → Expected: No status dropdown / API 403.
2. As TM. → Expected: Refused.

**Expected**

Refused.

#### TC-OPPM-121 — Reject a Direct ticket needs a reason

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M13 Direct ticket lifecycle & cancellation |
| **Last Result** | Pass |

**Preconditions**

Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

**Steps**

1. Reject without reason. → Expected: Refused.
2. Reject with 1,025 chars. → Expected: Refused.
3. Reject with the reason. → Expected: Rejected; employee stays on the card; terminal.

**Expected**

Rejected; employee stays on the card; terminal.

**Test Data**

- `Reason`: Employee committed elsewhere

#### TC-OPPM-130 — Unauthenticated and malformed requests

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | None |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M15 Security |
| **Last Result** | Pass |

**Preconditions**

No session.

**Steps**

1. (API) GET /api/v1/opportunities/openings without cookies. → Expected: 401.
2. (API) GET /api/v1/opportunities/abc. → Expected: 400 (uuid expected).
3. (API) POST with an unknown field. → Expected: 400 "property … should not exist".

**Expected**

400 "property … should not exist".

#### TC-OPPM-131 — HTML in titles is shown as text

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M15 Security |
| **Last Result** | Not run |

**Preconditions**

Opportunity titled QA-AUTO <img src=x onerror=alert(1)> xss.

**Steps**

1. Open the board and the ticket. → Expected: Title shown as literal text; no script runs.

**Expected**

Title shown as literal text; no script runs.

#### TC-OPPM-135 — Removing a shortlisted candidate needs a reason (owners notified, not the candidate)

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Last Result** | Pass |

**Preconditions**

Candidate in Shortlisted.

**Steps**

1. Click remove (bin) on the candidate. → Expected: Dialog asks for a reason; empty reason blocked (API 400).
2. Enter the reason and confirm. → Expected: Card back to Pending to Shortlist; reason stored; PMO/raiser notified.

**Expected**

Card back to Pending to Shortlist; reason stored; PMO/raiser notified.

**Test Data**

- `Reason`: Client changed scope

#### TC-OPPM-136 — Project locked once a candidate is allocated

| Field | Value |
| --- | --- |
| **Tags** | @manual |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Last Result** | Pass |

**Preconditions**

OPP-0054 with a candidate in Project Allocated (NA-0416).

**Steps**

1. Link Project → choose ElitePay. → Expected: Refused: "A Candidate is already allocated to the linked Project…" (OPP_176).
2. Unlink the project. → Expected: Refused (OPP_176).
3. Change the project on an opportunity with no allocation. → Expected: Allowed.

**Expected**

Allowed.

#### TC-OPPM-139 — PM sees only opportunities assigned to him

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-036 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Bug Ref** | BUG-036 |
| **Last Result** | Fail |

**Preconditions**

PM gaurav.panchal manages EventDriven | CQRS Framework.

**Steps**

1. As PMO create the three opportunities in the test data. → Expected: Created.
2. Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). Requests Tracking → Project Allocation → Interview Allocation. → Expected: Only OPP-0151 (assigned) is listed.
3. Open OPP-0150 by link. → Expected: Not available to the PM.
4. Open OPP-0152 by link. → Expected: Not available to the PM.

**Expected**

Not available to the PM.

**Test Data**

- `OPP-0150`: PMO-raised on EventDriven, not assigned
- `OPP-0151`: assigned to the PM
- `OPP-0152`: unrelated

#### TC-OPPM-140 — An employee already allocated or fully booked cannot be approved on another opportunity

| Field | Value |
| --- | --- |
| **Tags** | @manual, @BUG-012 |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO, TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | M16 Retest additions (26 Oct 2026) |
| **Bug Ref** | BUG-012 |
| **Last Result** | Fail |

**Preconditions**

Akash Pandya allocated 40% (NA-0416); Nisha Das fully booked (0% remaining).

**Steps**

1. Shortlist Akash Pandya on a new 50% position and have the TM approve. → Expected: Refused or warned — he is already allocated elsewhere.
2. Shortlist Nisha Das on a new 50% position and bypass approval as PMO. → Expected: Refused — she has 0% remaining.
3. Open each employee's profile → Opportunities. → Expected: No over-booked reservations.

**Expected**

No over-booked reservations.

**Test Data**

- `Position`: Fixed 50%
