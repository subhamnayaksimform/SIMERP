# Pre-sales Opportunities — Test Cases

**Total test cases:** 89  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-10-27-OPPTY-demo-readiness.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 53 | 59.6% |
| smoke | 15 | 16.9% |
| other | 10 | 11.2% |
| negative | 6 | 6.7% |
| integration | 5 | 5.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 74 | 83.1% |
| high | 15 | 16.9% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 87 | 97.8% |
| low | 2 | 2.2% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 89 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 89 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 89 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @demo | 89 | 100.0% |
| @ui | 89 | 100.0% |
| @functional | 53 | 59.6% |
| @smoke | 15 | 16.9% |
| @other | 10 | 11.2% |
| @negative | 6 | 6.7% |
| @integration | 5 | 5.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-901](#tc-oppty-901-pmo-login) | PMO login | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-902](#tc-oppty-902-open-opportunity-board) | Open Opportunity board | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-903](#tc-oppty-903-switch-to-kanban) | Switch to Kanban | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-904](#tc-oppty-904-create-interview-opportunity-existing-analytixhub-2-openings-2-rounds) | Create Interview opportunity (Existing / AnalytixHub, 2 openings, 2 rounds) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-905](#tc-oppty-905-shortlist-2-candidates) | Shortlist 2 candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-906](#tc-oppty-906-send-a-for-tm-approval) | Send A for TM approval | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-907](#tc-oppty-907-bypass-approval-for-b-with-reason) | Bypass approval for B with reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-908](#tc-oppty-908-tm-login) | TM login | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-909](#tc-oppty-909-tm-sees-approval-notification) | TM sees approval notification | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-910](#tc-oppty-910-tm-approves-a) | TM approves A | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-911](#tc-oppty-911-pmo-adds-preparation-material) | PMO adds preparation material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-912](#tc-oppty-912-checklist-tick-2-items) | Checklist: tick 2 items | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-913](#tc-oppty-913-round-1-today-interviewer-interview-scheduled) | Round 1 today + interviewer → Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-914](#tc-oppty-914-round-1-mark-cleared) | Round 1 Mark Cleared | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-915](#tc-oppty-915-round-2-today-mark-cleared-waiting-for-feedback) | Round 2 today, Mark Cleared → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-916](#tc-oppty-916-mark-won) | Mark Won | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-917](#tc-oppty-917-allocate-a-to-analytixhub) | Allocate A to AnalytixHub | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-918](#tc-oppty-918-b-back-date-round-1-did-interview-happen) | B: back-date Round 1 → Did Interview Happen? | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-919](#tc-oppty-919-b-answer-completed-waiting-for-feedback) | B: answer Completed → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-920](#tc-oppty-920-b-reject-from-board-menu-client) | B: reject from board menu (Client) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-921](#tc-oppty-921-candidate-a-notification-own-view) | Candidate A: notification + own view | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-922](#tc-oppty-922-pm-requests-tracking-interview-allocation-lists-the-ticket) | PM: Requests Tracking → Interview Allocation lists the ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-923](#tc-oppty-923-prepared-ticket-opp-0222-shortlisting-sits-in-pending-to-shortlist) | Prepared ticket OPP-0222 "Shortlisting" sits in Pending to Shortlist | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-924](#tc-oppty-924-prepared-ticket-opp-0223-awaiting-tm-approval-sits-in-waiting-for-approval) | Prepared ticket OPP-0223 "Awaiting TM approval" sits in Waiting for Approval | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-925](#tc-oppty-925-prepared-ticket-opp-0224-preparation-sits-in-being-prepared) | Prepared ticket OPP-0224 "Preparation" sits in Being Prepared | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-926](#tc-oppty-926-prepared-ticket-opp-0225-interview-tomorrow-sits-in-interview-scheduled) | Prepared ticket OPP-0225 "Interview tomorrow" sits in Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-927](#tc-oppty-927-prepared-ticket-opp-0226-did-the-interview-happen-sits-in-did-interview-happen) | Prepared ticket OPP-0226 "Did the interview happen" sits in Did Interview Happen? | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-928](#tc-oppty-928-prepared-ticket-opp-0227-waiting-for-client-feedback-sits-in-waiting-for-feedback) | Prepared ticket OPP-0227 "Waiting for client feedback" sits in Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-929](#tc-oppty-929-prepared-ticket-opp-0228-won-ready-to-allocate-sits-in-won) | Prepared ticket OPP-0228 "Won - ready to allocate" sits in Won | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-930](#tc-oppty-930-search-demo-hides-the-180-qa-auto-test-tickets) | Search "Demo" hides the ~180 QA-AUTO test tickets | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-931](#tc-oppty-931-same-account-logged-in-twice-your-session-was-taken-over-by-another-tab) | Same account logged in twice ("Your session was taken over by another tab") | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-932](#tc-oppty-932-login-lifetime-covers-the-demo) | Login lifetime covers the demo | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-933](#tc-oppty-933-no-interview-code-pending-to-merge-before-the-demo) | No interview code pending to merge before the demo | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-934](#tc-oppty-934-reserved-live-demo-candidates-are-free) | Reserved live-demo candidates are free | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-935](#tc-oppty-935-demo-1-candidate-shortlist-dialog-opens-with-qa-candidates-up-score-and-availability) | Demo 1: Candidate Shortlist dialog opens with QA candidates, UP score and availability | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-936](#tc-oppty-936-demo-1-search-the-picker-by-name-prakash) | Demo 1: search the picker by name ("Prakash") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-937](#tc-oppty-937-demo-1-filter-the-picker-by-designation-column-filter) | Demo 1: filter the picker by Designation (column filter) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-938](#tc-oppty-938-demo-1-sort-the-picker-by-up-system) | Demo 1: sort the picker by UP System | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-939](#tc-oppty-939-demo-3-checklist-tick-skip-progress-updates) | Demo 3: checklist tick + skip, progress updates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-940](#tc-oppty-940-demo-3-candidate-dialog-preparation-material-tab-shows-the-ticket-material) | Demo 3: candidate dialog Preparation Material tab shows the ticket material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-941](#tc-oppty-941-demo-3-date-round-1-today-interview-scheduled) | Demo 3: date Round 1 today → Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-942](#tc-oppty-942-demo-4-interview-day-set-round-1-to-today-then-mark-cleared-what-opp-0225-allows-tomorrow) | Demo 4 (interview-day): set Round 1 to today, then Mark Cleared — what OPP-0225 allows tomorrow | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-943](#tc-oppty-943-demo-5-did-the-interview-happen-completed) | Demo 5: "Did the interview happen?" → Completed | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-944](#tc-oppty-944-demo-6-mark-won-with-round-2-still-not-cleared) | Demo 6: Mark Won with Round 2 still not Cleared | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-945](#tc-oppty-945-demo-7-allocate-the-won-candidate) | Demo 7: Allocate the Won candidate | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-946](#tc-oppty-946-tm-opens-the-newest-approval-requested-notification-with-its-link) | TM opens the newest "Approval requested" notification with its ↗ link | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-947](#tc-oppty-947-all-notifications-page-search-prachi-finds-the-older-opp-0223-approval-request-and-opens-it) | All Notifications page: search "Prachi" finds the older OPP-0223 approval request and ↗ opens it | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-948](#tc-oppty-948-demo-2-tm-approves-from-the-ticket) | Demo 2: TM approves from the ticket | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-949](#tc-oppty-949-board-list-load-time) | Board (List) load time | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-950](#tc-oppty-950-kanban-load-time) | Kanban load time | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-951](#tc-oppty-951-search-demo-in-kanban) | Search "Demo" in Kanban | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-952](#tc-oppty-952-search-by-candidate-name-swati-yadav) | Search by candidate name ("Swati Yadav") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-953](#tc-oppty-953-search-by-full-ticket-number-opp-0226) | Search by full ticket number ("OPP-0226") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-954](#tc-oppty-954-group-by-status-then-client) | Group by Status, then Client | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-955](#tc-oppty-955-kanban-client-filter-analytixhub-dropdown-readable-after-test-data-fix) | Kanban client filter = AnalytixHub (dropdown readable after test-data fix) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-956](#tc-oppty-956-hide-a-column-department-with-choose-visible-columns-then-reset) | Hide a column (Department) with "Choose visible columns", then reset | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-957](#tc-oppty-957-summary-tile-won-filters-the-list) | Summary tile "Won" filters the list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-958](#tc-oppty-958-summary-tile-no-longer-required-filters-the-list) | Summary tile "No Longer Required" filters the list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-959](#tc-oppty-959-pagination-next-page) | Pagination: Next page | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-960](#tc-oppty-960-interview-direct-switch) | Interview / Direct switch | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-961](#tc-oppty-961-kanban-drag-and-drop-by-pmo-keyboard-space-space-interview-scheduled-waiting-for-feedback) | Kanban drag-and-drop by PMO (keyboard: Space, →, →, Space): Interview Scheduled → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-962](#tc-oppty-962-edit-ticket-change-special-instructions) | Edit Ticket: change Special Instructions | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-963](#tc-oppty-963-edit-position-openings-1-2) | Edit position: openings 1 → 2 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-964](#tc-oppty-964-add-a-second-position-to-an-existing-ticket-new-opportunities-pick-existing-title-add-positions) | Add a second position to an existing ticket (New Opportunities → pick existing title → Add Positions) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-965](#tc-oppty-965-delete-the-extra-position) | Delete the extra position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-966](#tc-oppty-966-create-a-direct-opportunity-on-analytixhub-for-omkar-barot-30-allocation-confirmed) | Create a Direct opportunity on AnalytixHub for Omkar Barot (30%, allocation confirmed) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-967](#tc-oppty-967-direct-stage-in-review) | Direct stage → In Review | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-968](#tc-oppty-968-direct-stage-awaiting) | Direct stage → Awaiting | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-969](#tc-oppty-969-direct-stage-approved) | Direct stage → Approved | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-970](#tc-oppty-970-direct-ticket-after-approved) | Direct ticket after Approved | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-971](#tc-oppty-971-create-a-direct-opportunity-on-analytixhub-for-arnav-shetty-30-allocation-confirmed) | Create a Direct opportunity on AnalytixHub for Arnav Shetty (30%, allocation confirmed) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-972](#tc-oppty-972-csm-cancels-the-direct-ticket-they-raised-cancel-request-reason) | CSM cancels the Direct ticket they raised (Cancel Request + reason) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-973](#tc-oppty-973-pmo-closes-the-cancelled-direct-ticket-as-no-longer-required) | PMO closes the cancelled Direct ticket as No Longer Required | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-974](#tc-oppty-974-cancel-request-client-won-on-a-ticket-with-a-won-candidate) | Cancel Request → Client Won on a ticket with a Won candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-975](#tc-oppty-975-ticket-info-tab) | Ticket Info tab | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-976](#tc-oppty-976-employee-list-shows-the-interview-opportunities-column-for-candidates) | Employee list shows the "Interview Opportunities" column for candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-977](#tc-oppty-977-what-s-new-history-has-the-opportunity-allocation-release-note) | What's New & History has the Opportunity Allocation release note | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-978](#tc-oppty-978-allocate-dialog-opened-not-submitted-on-opp-0228-at-1280-720) | Allocate dialog (opened, not submitted) on OPP-0228 at 1280×720 | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-979](#tc-oppty-979-board-list-search-demo-at-1280-720) | Board (List, search Demo) at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-980](#tc-oppty-980-create-form-at-1280-720) | Create form at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-981](#tc-oppty-981-ticket-detail-opp-0227-at-1280-720) | Ticket detail OPP-0227 at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-982](#tc-oppty-982-candidate-interview-dialog-at-1280-720) | Candidate interview dialog at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-983](#tc-oppty-983-kanban-at-1280-720) | Kanban at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-984](#tc-oppty-984-allocate-dialog-opened-not-submitted-on-opp-0228-at-1366-768) | Allocate dialog (opened, not submitted) on OPP-0228 at 1366×768 | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-985](#tc-oppty-985-board-list-search-demo-at-1366-768) | Board (List, search Demo) at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-986](#tc-oppty-986-create-form-at-1366-768) | Create form at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-987](#tc-oppty-987-ticket-detail-opp-0227-at-1366-768) | Ticket detail OPP-0227 at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-988](#tc-oppty-988-candidate-interview-dialog-at-1366-768) | Candidate interview dialog at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-989](#tc-oppty-989-kanban-at-1366-768) | Kanban at 1366×768 | Pre-sales Opportunities | other | medium |

---

## Pre-sales Opportunities

89 test cases.

### Functional (53)

#### TC-OPPTY-903 — Switch to Kanban

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (1.9s) \| r2: passed (1.8s) \| r3: passed (1.8s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Switch to Kanban

**Expected**

Kanban shows all stage columns incl. Did Interview Happen?

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-905 — Shortlist 2 candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (5.0s) \| r2: passed (5.0s) \| r3: passed (5.0s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Shortlist 2 candidates

**Expected**

Both shortlisted; two-way allocation alert handled

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-906 — Send A for TM approval

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (2.7s) \| r2: passed (2.2s) \| r3: passed (1.0s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Send A for TM approval

**Expected**

Awaiting TM approval

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-911 — PMO adds preparation material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (6.3s) \| r2: passed (7.8s) \| r3: passed (5.9s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. PMO adds preparation material

**Expected**

"Preparation material added."; link listed

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-912 — Checklist: tick 2 items

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (4.1s) \| r2: passed (4.0s) \| r3: passed (4.1s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Checklist: tick 2 items

**Expected**

2 / 5 completed

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-913 — Round 1 today + interviewer → Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (5.5s) \| r2: passed (5.5s) \| r3: passed (5.5s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Round 1 today + interviewer → Interview Scheduled

**Expected**

Status Interview Scheduled

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-914 — Round 1 Mark Cleared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (4.1s) \| r2: passed (4.0s) \| r3: passed (4.0s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Round 1 Mark Cleared

**Expected**

Round 1 Cleared

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-915 — Round 2 today, Mark Cleared → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (8.1s) \| r2: passed (8.2s) \| r3: passed (7.9s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Round 2 today, Mark Cleared → Waiting for Feedback

**Expected**

Waiting for Feedback

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-916 — Mark Won

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (4.8s) \| r2: passed (4.8s) \| r3: passed (4.9s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Mark Won

**Expected**

Won; Allocate button

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-918 — B: back-date Round 1 → Did Interview Happen?

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (3.9s) \| r2: passed (4.0s) \| r3: passed (4.1s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. B: back-date Round 1 → Did Interview Happen?

**Expected**

Card moves to Did Interview Happen?

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-919 — B: answer Completed → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (4.1s) \| r2: passed (4.1s) \| r3: passed (4.1s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. B: answer Completed → Waiting for Feedback

**Expected**

Waiting for Feedback

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-923 — Prepared ticket OPP-0222 "Shortlisting" sits in Pending to Shortlist

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0222 "Shortlisting" sits in Pending to Shortlist

**Expected**

Board list + Kanban show OPP-0222 in Pending to Shortlist; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0222
- `candidate`: —

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-924 — Prepared ticket OPP-0223 "Awaiting TM approval" sits in Waiting for Approval

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0223 "Awaiting TM approval" sits in Waiting for Approval

**Expected**

Board list + Kanban show OPP-0223 in Waiting for Approval; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0223
- `candidate`: Prachi Pillai

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-925 — Prepared ticket OPP-0224 "Preparation" sits in Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0224 "Preparation" sits in Being Prepared

**Expected**

Board list + Kanban show OPP-0224 in Being Prepared; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0224
- `candidate`: Divya Rathod

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-926 — Prepared ticket OPP-0225 "Interview tomorrow" sits in Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0225 "Interview tomorrow" sits in Interview Scheduled

**Expected**

Board list + Kanban show OPP-0225 in Interview Scheduled; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0225
- `candidate`: Swati Yadav

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-927 — Prepared ticket OPP-0226 "Did the interview happen" sits in Did Interview Happen?

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0226 "Did the interview happen" sits in Did Interview Happen?

**Expected**

Board list + Kanban show OPP-0226 in Did Interview Happen?; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0226
- `candidate`: Kartik Reddy

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-928 — Prepared ticket OPP-0227 "Waiting for client feedback" sits in Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0227 "Waiting for client feedback" sits in Waiting for Feedback

**Expected**

Board list + Kanban show OPP-0227 in Waiting for Feedback; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0227
- `candidate`: Vikram Dave

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-929 — Prepared ticket OPP-0228 "Won - ready to allocate" sits in Won

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo data — prepared ticket per stage |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Prepared ticket OPP-0228 "Won - ready to allocate" sits in Won

**Expected**

Board list + Kanban show OPP-0228 in Won; detail and candidate dialog open without errors

**Test Data**

- `ticket`: OPP-0228
- `candidate`: Hardik Chaudhari

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-930 — Search "Demo" hides the ~180 QA-AUTO test tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo environment |
| **Actual Result** | check: passed |
| **Last Result** | passed |
| **Notes** | User chose to leave QA-AUTO data in place. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Search "Demo" hides the ~180 QA-AUTO test tickets

**Expected**

Only the 7 demo tickets listed

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-932 — Login lifetime covers the demo

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | All |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo environment |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Login lifetime covers the demo

**Expected**

A login on demo morning lasts the whole demo

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-933 — No interview code pending to merge before the demo

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | — |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo environment |
| **Actual Result** | check: passed |
| **Last Result** | passed |
| **Notes** | Re-check What's New version on demo morning. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. No interview code pending to merge before the demo

**Expected**

Build stays as tested

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-934 — Reserved live-demo candidates are free

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo environment |
| **Actual Result** | check: passed |
| **Last Result** | passed |
| **Notes** | Spare: Keyur Dutta |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Reserved live-demo candidates are free

**Expected**

100% remaining, no other interview, 100% availability

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-935 — Demo 1: Candidate Shortlist dialog opens with QA candidates, UP score and availability

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 1: Candidate Shortlist dialog opens with QA candidates, UP score and availability

**Expected**

Dialog lists QA employees with UP tier/score/rank, Availability %, Remaining Allocation

**Test Data**

- `checkId`: D1-01

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-936 — Demo 1: search the picker by name ("Prakash")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 1: search the picker by name ("Prakash")

**Expected**

Only matching employees

**Test Data**

- `checkId`: D1-02

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-937 — Demo 1: filter the picker by Designation (column filter)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 1: filter the picker by Designation (column filter)

**Expected**

List narrows; still shows matching people

**Test Data**

- `checkId`: D1-03

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-938 — Demo 1: sort the picker by UP System

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 1: sort the picker by UP System

**Expected**

First row changes after sorting

**Test Data**

- `checkId`: D1-04

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-939 — Demo 3: checklist tick + skip, progress updates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 3: checklist tick + skip, progress updates

**Expected**

"x / 5 completed · 1 skipped"

**Test Data**

- `checkId`: D1-05

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-940 — Demo 3: candidate dialog Preparation Material tab shows the ticket material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 3: candidate dialog Preparation Material tab shows the ticket material

**Expected**

"Playwright fixtures guide" listed

**Test Data**

- `checkId`: D1-06

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-941 — Demo 3: date Round 1 today → Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 3: date Round 1 today → Interview Scheduled

**Expected**

Status Interview Scheduled

**Test Data**

- `checkId`: D1-07

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-942 — Demo 4 (interview-day): set Round 1 to today, then Mark Cleared — what OPP-0225 allows tomorrow

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 4 (interview-day): set Round 1 to today, then Mark Cleared — what OPP-0225 allows tomorrow

**Expected**

Before: Mark Cleared blocked for a future date (hint shown). After dating today: "Round marked as Cleared"

**Test Data**

- `checkId`: D1-08

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-943 — Demo 5: "Did the interview happen?" → Completed

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 5: "Did the interview happen?" → Completed

**Expected**

Waiting for Feedback

**Test Data**

- `checkId`: D1-09

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-944 — Demo 6: Mark Won with Round 2 still not Cleared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 6: Mark Won with Round 2 still not Cleared

**Expected**

Skip confirmation shown → Yes, Proceed → Won

**Test Data**

- `checkId`: D1-10

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-951 — Search "Demo" in Kanban

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Search "Demo" in Kanban

**Expected**

Only the 7 demo cards, one per column

**Test Data**

- `checkId`: D2-03

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-952 — Search by candidate name ("Swati Yadav")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Search by candidate name ("Swati Yadav")

**Expected**

Finds OPP-0225

**Test Data**

- `checkId`: D2-04

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-953 — Search by full ticket number ("OPP-0226")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Search by full ticket number ("OPP-0226")

**Expected**

Finds OPP-0226 only

**Test Data**

- `checkId`: D2-05

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-954 — Group by Status, then Client

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Group by Status, then Client

**Expected**

Rows regroup under status / client headers

**Test Data**

- `checkId`: D2-06

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-955 — Kanban client filter = AnalytixHub (dropdown readable after test-data fix)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Kanban client filter = AnalytixHub (dropdown readable after test-data fix)

**Expected**

Dropdown lists short client names; cards limited to AnalytixHub

**Test Data**

- `checkId`: D2-07

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-956 — Hide a column (Department) with "Choose visible columns", then reset

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Hide a column (Department) with "Choose visible columns", then reset

**Expected**

Column hides and comes back

**Test Data**

- `checkId`: D2-08

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-957 — Summary tile "Won" filters the list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Summary tile "Won" filters the list

**Expected**

Only Won tickets listed

**Test Data**

- `checkId`: D2-09

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-958 — Summary tile "No Longer Required" filters the list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Summary tile "No Longer Required" filters the list

**Expected**

Only No Longer Required tickets listed

**Test Data**

- `checkId`: D2-10

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-959 — Pagination: Next page

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Pagination: Next page

**Expected**

Page 2 rows load

**Test Data**

- `checkId`: D2-11

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-960 — Interview / Direct switch

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Interview / Direct switch

**Expected**

Direct board shows Direct tickets

**Test Data**

- `checkId`: D2-12

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-961 — Kanban drag-and-drop by PMO (keyboard: Space, →, →, Space): Interview Scheduled → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Kanban drag-and-drop by PMO (keyboard: Space, →, →, Space): Interview Scheduled → Waiting for Feedback

**Expected**

Card moves; status updated

**Test Data**

- `checkId`: D2-13

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-962 — Edit Ticket: change Special Instructions

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D3 Edit ticket & positions |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Edit Ticket: change Special Instructions

**Expected**

"Opportunity details updated."; new text on the ticket

**Test Data**

- `checkId`: D3-01

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-963 — Edit position: openings 1 → 2

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D3 Edit ticket & positions |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Edit position: openings 1 → 2

**Expected**

"Position updated successfully."; 2 openings

**Test Data**

- `checkId`: D3-02

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-964 — Add a second position to an existing ticket (New Opportunities → pick existing title → Add Positions)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D3 Edit ticket & positions |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Add a second position to an existing ticket (New Opportunities → pick existing title → Add Positions)

**Expected**

"Positions added to OPP-0230."

**Test Data**

- `checkId`: D3-03

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-965 — Delete the extra position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D3 Edit ticket & positions |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Delete the extra position

**Expected**

Confirm "Delete position?" → "Position deleted."

**Test Data**

- `checkId`: D3-04

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-967 — Direct stage → In Review

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Direct stage → In Review

**Expected**

Ticket moves to In Review

**Test Data**

- `checkId`: D4-02

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-968 — Direct stage → Awaiting

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Direct stage → Awaiting

**Expected**

Ticket moves to Awaiting

**Test Data**

- `checkId`: D4-03

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-970 — Direct ticket after Approved

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Direct ticket after Approved

**Expected**

Card Project Allocated / Approved; allocation ticket NA-0463 listed in Requests Tracking → Direct Allocation

**Test Data**

- `checkId`: D4-05

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-975 — Ticket Info tab

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D5 Close as Client Won + misc screens |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Ticket Info tab

**Expected**

Shows client / project / assignees / creation details without errors

**Test Data**

- `checkId`: D5-02

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-976 — Employee list shows the "Interview Opportunities" column for candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D5 Close as Client Won + misc screens |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Employee list shows the "Interview Opportunities" column for candidates

**Expected**

Column present; hover lists active interviews

**Test Data**

- `checkId`: D5-03

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-977 — What's New & History has the Opportunity Allocation release note

| Field | Value |
| --- | --- |
| **Tags** | @functional, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D5 Close as Client Won + misc screens |
| **Actual Result** | check: failed |
| **Last Result** | failed |
| **Notes** | Demo risk: release notes API returns [] for every role on dev (possibly related to SI4-T1548, 26/10). Avoid What's New in the demo or ask dev to publish the notes. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. What's New & History has the Opportunity Allocation release note

**Expected**

Release note for the interview module visible

**Test Data**

- `checkId`: D5-04

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

### Integration (5)

#### TC-OPPTY-909 — TM sees approval notification

| Field | Value |
| --- | --- |
| **Tags** | @integration, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (3.5s) \| r2: passed (3.6s) \| r3: passed (3.6s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. TM sees approval notification

**Expected**

Bell lists "Approval requested" for the new ticket

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-921 — Candidate A: notification + own view

| Field | Value |
| --- | --- |
| **Tags** | @integration, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (6.8s) \| r2: failed (2.7s) — Local network drop on the tester machine (DNS), not the app — same step passed in r1 and r3 \| r3: passed (8.1s) \| r2-rerun: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Candidate A: notification + own view

**Expected**

Candidate sees the ticket in notifications; only own row

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-922 — PM: Requests Tracking → Interview Allocation lists the ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (6.7s) \| r2: skipped — previous step stopped the run (local network drop) \| r3: passed (7.2s) \| r2-rerun: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. PM: Requests Tracking → Interview Allocation lists the ticket

**Expected**

Ticket listed on the PM's Interview Allocation tab

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-946 — TM opens the newest "Approval requested" notification with its ↗ link

| Field | Value |
| --- | --- |
| **Tags** | @integration, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. TM opens the newest "Approval requested" notification with its ↗ link

**Expected**

The newest item is the approval request; ↗ opens the ticket

**Test Data**

- `checkId`: D1-12

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-947 — All Notifications page: search "Prachi" finds the older OPP-0223 approval request and ↗ opens it

| Field | Value |
| --- | --- |
| **Tags** | @integration, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. All Notifications page: search "Prachi" finds the older OPP-0223 approval request and ↗ opens it

**Expected**

Older approval request findable and opens the ticket

**Test Data**

- `checkId`: D1-12b

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

### Negative (6)

#### TC-OPPTY-907 — Bypass approval for B with reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (1.7s) \| r2: passed (1.7s) \| r3: passed (1.7s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Bypass approval for B with reason

**Expected**

Reason required; Being Prepared

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-920 — B: reject from board menu (Client)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (11.1s) \| r2: passed (14.2s) \| r3: passed (11.6s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. B: reject from board menu (Client)

**Expected**

"Candidate rejected."

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-931 — Same account logged in twice ("Your session was taken over by another tab")

| Field | Value |
| --- | --- |
| **Tags** | @negative, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / TM |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo environment |
| **Actual Result** | check: passed |
| **Last Result** | passed |
| **Notes** | Runbook: one browser profile per account; no test logins during the demo. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Same account logged in twice ("Your session was taken over by another tab")

**Expected**

Demo session keeps working

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-972 — CSM cancels the Direct ticket they raised (Cancel Request + reason)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. CSM cancels the Direct ticket they raised (Cancel Request + reason)

**Expected**

Ticket tagged Cancelled; stage frozen; PMO notified

**Test Data**

- `checkId`: D4C-02

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-973 — PMO closes the cancelled Direct ticket as No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @negative, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. PMO closes the cancelled Direct ticket as No Longer Required

**Expected**

Close Ticket → No Longer Required → status NLR

**Test Data**

- `checkId`: D4C-03

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-974 — Cancel Request → Client Won on a ticket with a Won candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D5 Close as Client Won + misc screens |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Cancel Request → Client Won on a ticket with a Won candidate

**Expected**

Ticket status Won; Won tile counts it

**Test Data**

- `checkId`: D5-01

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

### Other (10)

#### TC-OPPTY-979 — Board (List, search Demo) at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1280×720 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Board (List, search Demo) at 1280×720

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-board

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-980 — Create form at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1280×720 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Create form at 1280×720

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-create

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-981 — Ticket detail OPP-0227 at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1280×720 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Ticket detail OPP-0227 at 1280×720

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-detail

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-982 — Candidate interview dialog at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1280×720 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Candidate interview dialog at 1280×720

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-dialog

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-983 — Kanban at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1280×720 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Kanban at 1280×720

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-kanban

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-985 — Board (List, search Demo) at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1366×768 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Board (List, search Demo) at 1366×768

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-board

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-986 — Create form at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1366×768 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Create form at 1366×768

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-create

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-987 — Ticket detail OPP-0227 at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1366×768 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Ticket detail OPP-0227 at 1366×768

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-detail

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-988 — Candidate interview dialog at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1366×768 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Candidate interview dialog at 1366×768

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-dialog

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-989 — Kanban at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1366×768 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Kanban at 1366×768

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-kanban

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

### Smoke (15)

#### TC-OPPTY-901 — PMO login

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (8.5s) \| r2: passed (15.2s) \| r3: passed (13.3s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. PMO login

**Expected**

Lands on the app after /dev-login

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-902 — Open Opportunity board

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (4.5s) \| r2: passed (7.0s) \| r3: passed (8.5s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Open Opportunity board

**Expected**

Board loads with tiles and list

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-904 — Create Interview opportunity (Existing / AnalytixHub, 2 openings, 2 rounds)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (31.1s) \| r2: passed (36.2s) \| r3: passed (31.1s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Create Interview opportunity (Existing / AnalytixHub, 2 openings, 2 rounds)

**Expected**

201; success toast; ticket page opens

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-908 — TM login

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (10.1s) \| r2: passed (10.0s) \| r3: passed (9.9s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. TM login

**Expected**

TM lands on the app

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-910 — TM approves A

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (6.1s) \| r2: passed (7.1s) \| r3: passed (6.0s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. TM approves A

**Expected**

Approved; Being Prepared

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-917 — Allocate A to AnalytixHub

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | Demo rehearsal — live demo path (3 runs) |
| **Actual Result** | r1: passed (4.2s) \| r2: passed (4.3s) \| r3: passed (4.1s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Allocate A to AnalytixHub

**Expected**

Project Allocated

**Test Data**

- `candidates`: r1: Gargi Soni + Varsha Langalia; r2: Vihaan Patil + Nilesh Kumar; r3: Nandini Kapoor + Kavya Khandelwal

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-945 — Demo 7: Allocate the Won candidate

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 7: Allocate the Won candidate

**Expected**

Allocate dialog pre-filled (start date, 50%); → Project Allocated

**Test Data**

- `checkId`: D1-11

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-948 — Demo 2: TM approves from the ticket

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D1 Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Demo 2: TM approves from the ticket

**Expected**

Approved; Being Prepared

**Test Data**

- `checkId`: D1-13

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-949 — Board (List) load time

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Board (List) load time

**Expected**

Under 5 s to a populated table

**Test Data**

- `checkId`: D2-01

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-950 — Kanban load time

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D2 Board — search, filters, views, drag-and-drop |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Kanban load time

**Expected**

Under 5 s to columns with cards

**Test Data**

- `checkId`: D2-02

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-966 — Create a Direct opportunity on AnalytixHub for Omkar Barot (30%, allocation confirmed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Create a Direct opportunity on AnalytixHub for Omkar Barot (30%, allocation confirmed)

**Expected**

201; ticket opens; Direct ticket in Open

**Test Data**

- `checkId`: D4-01

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-969 — Direct stage → Approved

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Direct stage → Approved

**Expected**

"… approved — the employee is allocated."; Project Allocated

**Test Data**

- `checkId`: D4-04

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-971 — Create a Direct opportunity on AnalytixHub for Arnav Shetty (30%, allocation confirmed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D4 Direct opportunity flow |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Create a Direct opportunity on AnalytixHub for Arnav Shetty (30%, allocation confirmed)

**Expected**

201; ticket opens; Direct ticket in Open

**Test Data**

- `checkId`: D4C-01

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-978 — Allocate dialog (opened, not submitted) on OPP-0228 at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1280×720 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Allocate dialog (opened, not submitted) on OPP-0228 at 1280×720

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-allocate

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)

#### TC-OPPTY-984 — Allocate dialog (opened, not submitted) on OPP-0228 at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @demo, @ui |
| **Requirement Ref** | Demo runbook docs/findings/2026-10-28-interview-demo-runbook.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 — demo 28 Oct 2026 |
| **Sub Module** | D6 Projector resolution 1366×768 |
| **Actual Result** | check: passed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026. Fresh /dev-login per role in its own browser context. Free QA candidates (100% remaining).

**Steps**

1. Allocate dialog (opened, not submitted) on OPP-0228 at 1366×768

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-allocate

**Automation Hint**

Playwright rehearsal script (scratchpad rehearse.cjs)
