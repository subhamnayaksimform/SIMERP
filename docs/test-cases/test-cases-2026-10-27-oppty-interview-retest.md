# Pre-sales Opportunities — Test Cases

**Total test cases:** 556  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-10-27-OPPTY-interview-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| negative | 222 | 39.9% |
| functional | 197 | 35.4% |
| integration | 48 | 8.6% |
| boundary | 35 | 6.3% |
| smoke | 23 | 4.1% |
| regression | 14 | 2.5% |
| security | 9 | 1.6% |
| other | 8 | 1.4% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 506 | 91.0% |
| low | 26 | 4.7% |
| high | 24 | 4.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 521 | 93.7% |
| low | 26 | 4.7% |
| high | 9 | 1.6% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 556 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 556 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 556 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @retest | 556 | 100.0% |
| @api | 411 | 73.9% |
| @negative | 222 | 39.9% |
| @functional | 197 | 35.4% |
| @ui | 145 | 26.1% |
| @integration | 48 | 8.6% |
| @boundary | 35 | 6.3% |
| @smoke | 23 | 4.1% |
| @new | 16 | 2.9% |
| @bug | 15 | 2.7% |
| @regression | 14 | 2.5% |
| @modified | 9 | 1.6% |
| @security | 9 | 1.6% |
| @other | 8 | 1.4% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-2001](#tc-oppty-2001-pmo-login) | PMO login | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2002](#tc-oppty-2002-open-opportunity-board) | Open Opportunity board | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2003](#tc-oppty-2003-switch-to-kanban) | Switch to Kanban | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2004](#tc-oppty-2004-create-interview-opportunity-existing-analytixhub-2-openings-2-rounds) | Create Interview opportunity (Existing / AnalytixHub, 2 openings, 2 rounds) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2005](#tc-oppty-2005-shortlist-2-candidates) | Shortlist 2 candidates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2006](#tc-oppty-2006-send-a-for-tm-approval) | Send A for TM approval | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2007](#tc-oppty-2007-bypass-approval-for-b-with-reason) | Bypass approval for B with reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2008](#tc-oppty-2008-tm-login) | TM login | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2009](#tc-oppty-2009-tm-sees-approval-notification) | TM sees approval notification | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-2010](#tc-oppty-2010-tm-approves-a) | TM approves A | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2011](#tc-oppty-2011-pmo-adds-preparation-material) | PMO adds preparation material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2012](#tc-oppty-2012-checklist-tick-2-items) | Checklist: tick 2 items | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2013](#tc-oppty-2013-round-1-today-interviewer-interview-scheduled) | Round 1 today + interviewer → Interview Scheduled | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2014](#tc-oppty-2014-round-1-mark-cleared) | Round 1 Mark Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2015](#tc-oppty-2015-round-2-today-mark-cleared-waiting-for-feedback) | Round 2 today, Mark Cleared → Waiting for Feedback | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2016](#tc-oppty-2016-mark-won) | Mark Won | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2017](#tc-oppty-2017-allocate-a-to-analytixhub) | Allocate A to AnalytixHub | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2018](#tc-oppty-2018-b-back-date-round-1-did-interview-happen) | B: back-date Round 1 → Did Interview Happen? | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2019](#tc-oppty-2019-b-answer-completed-waiting-for-feedback) | B: answer Completed → Waiting for Feedback | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2020](#tc-oppty-2020-b-reject-from-board-menu-client) | B: reject from board menu (Client) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2021](#tc-oppty-2021-candidate-a-notification-own-view) | Candidate A: notification + own view | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-2022](#tc-oppty-2022-pm-requests-tracking-interview-allocation-lists-the-ticket) | PM: Requests Tracking → Interview Allocation lists the ticket | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2023](#tc-oppty-2023-nightly-sweep-moves-past-dated-cards-to-did-interview-happen) | Nightly sweep moves past-dated cards to Did Interview Happen? | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2024](#tc-oppty-2024-back-dated-rounds-yesterday-put-3-cards-in-did-interview-happen) | Back-dated rounds (yesterday) put 3 cards in "Did Interview Happen?" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2025](#tc-oppty-2025-reyansh-bose-answer-completed) | Reyansh Bose: answer "Completed" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2026](#tc-oppty-2026-dev-joshi-didn-t-happen-new-date-today-past-days-blocked) | Dev Joshi: "Didn't happen" → new date today (past days blocked) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2027](#tc-oppty-2027-harsh-gandhi-didn-t-happen-skip-round) | Harsh Gandhi: "Didn't happen" → Skip round | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2028](#tc-oppty-2028-kanban-has-a-separate-did-interview-happen-column-a-card-cannot-be-moved-into-it-by-hand) | Kanban has a separate "Did Interview Happen?" column; a card cannot be moved into it by hand | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2029](#tc-oppty-2029-shortlist-3-candidates-on-a-1-opening-position) | Shortlist 3 candidates on a 1-opening position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2030](#tc-oppty-2030-remove-a-shortlisted-candidate-reason-required) | Remove a shortlisted candidate — reason required | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2031](#tc-oppty-2031-send-for-approval-then-withdraw) | Send for approval, then withdraw | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2032](#tc-oppty-2032-java-tm-rejects-an-approval-request-with-a-reason) | JAVA TM rejects an approval request with a reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2033](#tc-oppty-2033-bypass-with-reason-then-reject-from-the-board-change-status-menu-rejected-by-client) | Bypass with reason, then reject from the board "Change status" menu (Rejected by Client) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2034](#tc-oppty-2034-re-initiate-the-position) | Re-initiate the position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2035](#tc-oppty-2035-cancel-request-dialog-on-an-interview-ticket-offers-client-won-client-lost-on-hold) | Cancel Request dialog on an Interview ticket offers Client Won / Client Lost / On Hold | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2036](#tc-oppty-2036-put-a-ticket-on-hold) | Put a ticket On Hold | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2037](#tc-oppty-2037-mark-a-ticket-client-lost) | Mark a ticket Client Lost | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2038](#tc-oppty-2038-board-menu-no-longer-required) | Board menu → No Longer Required | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2039](#tc-oppty-2039-board-menu-open-re-opens-the-on-hold-ticket) | Board menu → Open re-opens the On Hold ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2040](#tc-oppty-2040-add-rounds-with-the-stepper-1-3) | Add rounds with the "+" stepper (1 → 3) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2041](#tc-oppty-2041-keyboard-reorder-round-3-up) | Keyboard reorder Round 3 up | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2042](#tc-oppty-2042-delete-the-last-pending-round) | Delete the last pending round | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2043](#tc-oppty-2043-skip-round-1-from-the-header) | Skip Round 1 from the header | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2044](#tc-oppty-2044-mark-won-with-round-2-pending) | Mark Won with Round 2 pending | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2045](#tc-oppty-2045-allocate-is-disabled-while-the-prospect-has-no-project) | Allocate is disabled while the Prospect has no project | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2046](#tc-oppty-2046-link-project-analytixhub-on-the-prospect-ticket) | Link Project (AnalytixHub) on the Prospect ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2047](#tc-oppty-2047-allocate-once-linked) | Allocate once linked | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2048](#tc-oppty-2048-unlink-project-after-allocation-is-refused) | Unlink Project after allocation is refused | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2049](#tc-oppty-2049-move-into-did-interview-happen-by-hand) | Move into "Did Interview Happen?" by hand | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2050](#tc-oppty-2050-interview-scheduled-being-prepared) | Interview Scheduled → Being Prepared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2051](#tc-oppty-2051-being-prepared-interview-scheduled-with-no-date) | Being Prepared → Interview Scheduled with no date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2052](#tc-oppty-2052-being-prepared-won-skipping-stages) | Being Prepared → Won (skipping stages) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2053](#tc-oppty-2053-edit-ticket-change-a-prospect-to-existing-client) | Edit Ticket: change a Prospect to Existing Client | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2054](#tc-oppty-2054-edit-a-position-that-has-a-candidate-in-the-pipeline) | Edit a position that has a candidate in the pipeline | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2055](#tc-oppty-2055-approval-details-popover-after-a-bypass-pmo) | Approval details popover after a bypass (PMO) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2056](#tc-oppty-2056-an-employee-already-active-on-the-position-shortlisted-in-process-selected-is-left-out-of-the-add-shortlist-picker) | An employee already active on the position (shortlisted / in process / selected) is left out of the Add/ Shortlist picker | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2057](#tc-oppty-2057-rejection-details-popover) | Rejection details popover | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2058](#tc-oppty-2058-re-initiate-needs-a-reason) | Re-initiate needs a reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2059](#tc-oppty-2059-create-with-two-positions-duplicate-the-first) | Create with two positions (Duplicate the first) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2060](#tc-oppty-2060-duplicate-title-notice-on-create) | Duplicate-title notice on create | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2061](#tc-oppty-2061-kanban-column-date-filter-filter-by-created-date) | Kanban column date filter ("Filter … by created date") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2062](#tc-oppty-2062-advanced-filter-panel) | Advanced Filter panel | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2063](#tc-oppty-2063-em-opens-a-java-ticket-and-a-qa-demo-ticket-view-only) | EM opens a JAVA ticket and a QA demo ticket (view only) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2064](#tc-oppty-2064-assigned-pm-opens-the-ticket) | Assigned PM opens the ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2065](#tc-oppty-2065-candidate-clicks-the-on-their-newest-notification) | Candidate clicks the ↗ on their newest notification | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2066](#tc-oppty-2066-a-candidate-rejected-on-this-opportunity-is-greyed-out-in-add-shortlist-as-the-ticket-page-says) | A candidate rejected on this opportunity is greyed out in Add/ Shortlist (as the ticket page says) | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2067](#tc-oppty-2067-bug-038-retest-interview-scheduled-notification-time) | BUG-038 retest: interview-scheduled notification time | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-2068](#tc-oppty-2068-bug-039-retest-allocation-ticket-na-0470-from-opp-0306-findable-in-requests-tracking) | BUG-039 retest: allocation ticket NA-0470 (from OPP-0306) findable in Requests Tracking | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-2069](#tc-oppty-2069-bug-040-retest-java-tm-shortlists-a-qa-employee-onto-a-java-position) | BUG-040 retest: JAVA TM shortlists a QA employee onto a JAVA position | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-2070](#tc-oppty-2070-bug-041-retest-what-s-new-release-notes) | BUG-041 retest: What's New release notes | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2071](#tc-oppty-2071-bug-042-retest-tm-message-after-an-interview-allocation) | BUG-042 retest: TM message after an interview allocation | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2072](#tc-oppty-2072-bug-023-retest-candidate-facing-wording) | BUG-023 retest: candidate-facing wording | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2073](#tc-oppty-2073-allocation-notification-title-capitalisation) | Allocation notification title capitalisation | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2074](#tc-oppty-2074-bug-044-retest-200-character-client-name-in-the-kanban-client-dropdown) | BUG-044 retest: 200-character client name in the Kanban client dropdown | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2075](#tc-oppty-2075-bug-043-retest-prep-link-typed-on-the-create-form-but-not-add-link-ed) | BUG-043 retest: prep link typed on the create form but not "Add Link"-ed | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2076](#tc-oppty-2076-bug-046-a-round-left-without-a-title-shows-round-1-with-a-dangling-colon) | BUG-046: a round left without a title shows "Round 1:" with a dangling colon | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2077](#tc-oppty-2077-bug-045-retest-bare-dashes-for-empty-values) | BUG-045 retest: bare dashes for empty values | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2078](#tc-oppty-2078-bug-035-retest-ticket-number-cut-off-in-the-board-list) | BUG-035 retest: ticket number cut off in the board list | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-2079](#tc-oppty-2079-bug-036-retest-pm-sees-tickets-on-his-project-not-assigned-to-him) | BUG-036 retest: PM sees tickets on his project not assigned to him | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-2080](#tc-oppty-2080-csm-opens-opportunity-allocation) | CSM opens Opportunity Allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2081](#tc-oppty-2081-csm-creates-an-existing-client-interview-ticket-on-own-project-elitepay) | CSM creates an Existing-client Interview ticket on own project ElitePay | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2082](#tc-oppty-2082-csm-edits-the-ticket-they-raised-edit-ticket-special-instructions) | CSM edits the ticket they raised (Edit Ticket → Special Instructions) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2083](#tc-oppty-2083-csm-sees-candidate-actions-add-shortlist-on-own-interview-ticket) | CSM sees candidate actions? (Add/ Shortlist on own Interview ticket) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2084](#tc-oppty-2084-csm-cancels-own-interview-ticket) | CSM cancels own Interview ticket | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2085](#tc-oppty-2085-em-opens-the-board-and-opp-0156) | EM opens the board and OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2086](#tc-oppty-2086-rm-opens-the-board-and-opp-0156) | RM opens the board and OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2087](#tc-oppty-2087-admin-opens-the-board-and-opp-0156) | Admin opens the board and OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2088](#tc-oppty-2088-tm-java-opens-the-board-and-the-qa-only-ticket-opp-0156) | TM (JAVA) opens the board and the QA-only ticket OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2089](#tc-oppty-2089-candidate-kriti-opens-the-opp-0156-link-from-her-notification) | Candidate (Kriti) opens the OPP-0156 link from her notification | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-2090](#tc-oppty-2090-candidate-opens-her-interview-details-read-only) | Candidate opens her interview details (read-only) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2091](#tc-oppty-2091-demo-1-candidate-shortlist-dialog-opens-with-qa-candidates-up-score-and-availability) | Demo 1: Candidate Shortlist dialog opens with QA candidates, UP score and availability | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2092](#tc-oppty-2092-demo-1-search-the-picker-by-name-prakash) | Demo 1: search the picker by name ("Prakash") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2093](#tc-oppty-2093-demo-1-filter-the-picker-by-designation-column-filter) | Demo 1: filter the picker by Designation (column filter) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2094](#tc-oppty-2094-demo-1-sort-the-picker-by-up-system) | Demo 1: sort the picker by UP System | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2095](#tc-oppty-2095-demo-3-checklist-tick-skip-progress-updates) | Demo 3: checklist tick + skip, progress updates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2096](#tc-oppty-2096-demo-3-candidate-dialog-preparation-material-tab-shows-the-ticket-material) | Demo 3: candidate dialog Preparation Material tab shows the ticket material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2097](#tc-oppty-2097-demo-3-date-round-1-today-interview-scheduled) | Demo 3: date Round 1 today → Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2098](#tc-oppty-2098-demo-4-interview-day-set-round-1-to-today-then-mark-cleared-what-opp-0225-allows-tomorrow) | Demo 4 (interview-day): set Round 1 to today, then Mark Cleared — what OPP-0225 allows tomorrow | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2099](#tc-oppty-2099-demo-5-did-the-interview-happen-completed) | Demo 5: "Did the interview happen?" → Completed | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2100](#tc-oppty-2100-demo-6-mark-won-with-round-2-still-not-cleared) | Demo 6: Mark Won with Round 2 still not Cleared | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2101](#tc-oppty-2101-demo-7-allocate-the-won-candidate) | Demo 7: Allocate the Won candidate | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2102](#tc-oppty-2102-tm-opens-the-newest-approval-requested-notification-with-its-link) | TM opens the newest "Approval requested" notification with its ↗ link | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-2103](#tc-oppty-2103-demo-2-tm-approves-from-the-ticket) | Demo 2: TM approves from the ticket | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2104](#tc-oppty-2104-all-notifications-page-search-prachi-finds-the-older-opp-0223-approval-request-and-opens-it) | All Notifications page: search "Prachi" finds the older OPP-0223 approval request and ↗ opens it | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-2105](#tc-oppty-2105-board-list-load-time) | Board (List) load time | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2106](#tc-oppty-2106-kanban-load-time) | Kanban load time | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2107](#tc-oppty-2107-search-demo-in-kanban) | Search "Demo" in Kanban | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2108](#tc-oppty-2108-search-by-candidate-name-swati-yadav) | Search by candidate name ("Swati Yadav") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2109](#tc-oppty-2109-search-by-full-ticket-number-opp-0226) | Search by full ticket number ("OPP-0226") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2110](#tc-oppty-2110-group-by-status-then-client) | Group by Status, then Client | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2111](#tc-oppty-2111-kanban-client-filter-analytixhub-after-shortening-the-test-client-names) | Kanban client filter = AnalytixHub (after shortening the test client names) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2112](#tc-oppty-2112-hide-a-column-department-with-choose-visible-columns-then-reset) | Hide a column (Department) with "Choose visible columns", then reset | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2113](#tc-oppty-2113-summary-tile-won-filters-the-list) | Summary tile "Won" filters the list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2114](#tc-oppty-2114-summary-tile-no-longer-required-filters-the-list) | Summary tile "No Longer Required" filters the list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2115](#tc-oppty-2115-pagination-next-page) | Pagination: Next page | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2116](#tc-oppty-2116-interview-direct-switch) | Interview / Direct switch | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2117](#tc-oppty-2117-kanban-drag-and-drop-by-pmo-keyboard-space-space-interview-scheduled-waiting-for-feedback) | Kanban drag-and-drop by PMO (keyboard: Space, →, →, Space): Interview Scheduled → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2118](#tc-oppty-2118-edit-ticket-change-special-instructions) | Edit Ticket: change Special Instructions | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2119](#tc-oppty-2119-edit-position-openings-1-2) | Edit position: openings 1 → 2 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2120](#tc-oppty-2120-add-a-second-position-to-an-existing-ticket-new-opportunities-pick-existing-title-add-positions) | Add a second position to an existing ticket (New Opportunities → pick existing title → Add Positions) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2121](#tc-oppty-2121-delete-the-extra-position) | Delete the extra position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2122](#tc-oppty-2122-cancel-request-client-won-on-a-ticket-with-a-won-candidate) | Cancel Request → Client Won on a ticket with a Won candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2123](#tc-oppty-2123-ticket-info-tab) | Ticket Info tab | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2124](#tc-oppty-2124-employee-list-shows-the-interview-opportunities-column-for-candidates) | Employee list shows the "Interview Opportunities" column for candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2125](#tc-oppty-2125-what-s-new-history-has-the-opportunity-allocation-release-note) | What's New & History has the Opportunity Allocation release note | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-2126](#tc-oppty-2126-create-a-direct-opportunity-on-analytixhub-for-yatharth-malhotra-30-allocation-confirmed) | Create a Direct opportunity on AnalytixHub for Yatharth Malhotra (30%, allocation confirmed) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2127](#tc-oppty-2127-direct-stage-in-review) | Direct stage → In Review | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2128](#tc-oppty-2128-direct-stage-awaiting) | Direct stage → Awaiting | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2129](#tc-oppty-2129-direct-stage-approved) | Direct stage → Approved | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2130](#tc-oppty-2130-direct-ticket-after-approved) | Direct ticket after Approved | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-2131](#tc-oppty-2131-create-a-direct-opportunity-on-analytixhub-for-ira-ghosh-30-allocation-confirmed) | Create a Direct opportunity on AnalytixHub for Ira Ghosh (30%, allocation confirmed) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2132](#tc-oppty-2132-csm-cancels-the-direct-ticket-they-raised-cancel-request-reason) | CSM cancels the Direct ticket they raised (Cancel Request + reason) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2133](#tc-oppty-2133-pmo-closes-the-cancelled-direct-ticket-as-no-longer-required) | PMO closes the cancelled Direct ticket as No Longer Required | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-2134](#tc-oppty-2134-board-list-search-demo-at-1280-720) | Board (List, search Demo) at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2135](#tc-oppty-2135-kanban-at-1280-720) | Kanban at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2136](#tc-oppty-2136-ticket-detail-opp-0227-at-1280-720) | Ticket detail OPP-0227 at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2137](#tc-oppty-2137-candidate-interview-dialog-at-1280-720) | Candidate interview dialog at 1280×720 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2138](#tc-oppty-2138-allocate-dialog-opened-not-submitted-on-opp-0228-at-1280-720) | Allocate dialog (opened, not submitted) on OPP-0228 at 1280×720 | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2139](#tc-oppty-2139-create-form-at-1280-720) | Create form at 1280×720 | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2140](#tc-oppty-2140-board-list-search-demo-at-1366-768) | Board (List, search Demo) at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2141](#tc-oppty-2141-kanban-at-1366-768) | Kanban at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2142](#tc-oppty-2142-ticket-detail-opp-0227-at-1366-768) | Ticket detail OPP-0227 at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2143](#tc-oppty-2143-candidate-interview-dialog-at-1366-768) | Candidate interview dialog at 1366×768 | Pre-sales Opportunities | other | medium |
| [TC-OPPTY-2144](#tc-oppty-2144-allocate-dialog-opened-not-submitted-on-opp-0228-at-1366-768) | Allocate dialog (opened, not submitted) on OPP-0228 at 1366×768 | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-2145](#tc-oppty-2145-create-form-at-1366-768) | Create form at 1366×768 | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-3001](#tc-oppty-3001-minimal-valid-interview-prospect-opportunity) | Minimal valid Interview/Prospect opportunity | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3002](#tc-oppty-3002-title-missing) | Title missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3003](#tc-oppty-3003-title-empty-string) | Title empty string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3004](#tc-oppty-3004-title-whitespace-only) | Title whitespace only | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3005](#tc-oppty-3005-title-exactly-200-chars) | Title exactly 200 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3006](#tc-oppty-3006-title-201-chars) | Title 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3007](#tc-oppty-3007-title-is-trimmed-on-save) | Title is trimmed on save | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3008](#tc-oppty-3008-clienttype-missing) | clientType missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3009](#tc-oppty-3009-clienttype-invalid-value) | clientType invalid value | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3010](#tc-oppty-3010-clienttype-lowercase) | clientType lowercase | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3011](#tc-oppty-3011-clientname-missing) | clientName missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3012](#tc-oppty-3012-clientname-whitespace-only) | clientName whitespace only | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3013](#tc-oppty-3013-clientname-exactly-200) | clientName exactly 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3014](#tc-oppty-3014-clientname-201) | clientName 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3015](#tc-oppty-3015-websiteurl-not-a-url) | websiteUrl not a URL | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3016](#tc-oppty-3016-websiteurl-javascript-scheme) | websiteUrl javascript: scheme | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3017](#tc-oppty-3017-websiteurl-ftp-scheme) | websiteUrl ftp scheme | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3018](#tc-oppty-3018-websiteurl-no-tld-http-localhost) | websiteUrl no TLD (http://localhost) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3019](#tc-oppty-3019-websiteurl-https-valid) | websiteUrl https valid | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3020](#tc-oppty-3020-websiteurl-2049-chars) | websiteUrl 2049 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3021](#tc-oppty-3021-linkedinurl-invalid) | linkedinUrl invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3022](#tc-oppty-3022-interviewerlinkedinurl-invalid) | interviewerLinkedinUrl invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3023](#tc-oppty-3023-prospectcontact-201) | prospectContact 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3024](#tc-oppty-3024-prospectnotes-4096) | prospectNotes 4096 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3025](#tc-oppty-3025-prospectnotes-4097) | prospectNotes 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3026](#tc-oppty-3026-specialinstructions-4096) | specialInstructions 4096 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3027](#tc-oppty-3027-specialinstructions-4097) | specialInstructions 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3028](#tc-oppty-3028-jobdescription-html-with-script-is-sanitised) | jobDescription HTML with <script> is sanitised | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3029](#tc-oppty-3029-jobdescription-has-no-max-length-100k-chars) | jobDescription has no max length (100k chars) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3030](#tc-oppty-3030-unknown-top-level-key-rejected) | Unknown top-level key rejected | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3031](#tc-oppty-3031-positions-empty-array) | positions empty array | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3032](#tc-oppty-3032-positions-missing) | positions missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3033](#tc-oppty-3033-projectpublicid-not-a-uuid) | projectPublicId not a uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3034](#tc-oppty-3034-projectpublicid-random-uuid-not-found) | projectPublicId random uuid (not found) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3035](#tc-oppty-3035-pmo-existing-client-without-project-allowed-at-all-scope) | PMO Existing client WITHOUT project (allowed at ALL scope) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3036](#tc-oppty-3036-pmo-existing-client-with-any-project) | PMO Existing client with any project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3037](#tc-oppty-3037-prospect-with-projectpublicid) | PROSPECT with projectPublicId | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3038](#tc-oppty-3038-position-title-missing) | Position title missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3039](#tc-oppty-3039-position-title-201) | Position title 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3040](#tc-oppty-3040-techstacks-empty) | techStacks empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3041](#tc-oppty-3041-techstacks-item-101-chars) | techStacks item 101 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3042](#tc-oppty-3042-techstacks-item-empty-string) | techStacks item empty string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3043](#tc-oppty-3043-techstacks-duplicate-values) | techStacks duplicate values | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-3044](#tc-oppty-3044-departmentpublicids-empty) | departmentPublicIds empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3045](#tc-oppty-3045-departmentpublicids-non-uuid) | departmentPublicIds non-uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3046](#tc-oppty-3046-departmentpublicids-unknown-uuid) | departmentPublicIds unknown uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3047](#tc-oppty-3047-departmentpublicids-duplicate) | departmentPublicIds duplicate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3048](#tc-oppty-3048-multi-department-position-qa-java-em-multi-skill-case) | Multi-department position (QA+JAVA) — EM multi-skill case | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3049](#tc-oppty-3049-requiredcount-0) | requiredCount 0 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3050](#tc-oppty-3050-requiredcount-1) | requiredCount -1 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3051](#tc-oppty-3051-requiredcount-21) | requiredCount 21 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3052](#tc-oppty-3052-requiredcount-1-5) | requiredCount 1.5 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3053](#tc-oppty-3053-requiredcount-2-string) | requiredCount "2" string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3054](#tc-oppty-3054-requiredcount-20-20-opening-cards) | requiredCount 20 → 20 opening cards | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3055](#tc-oppty-3055-requiredcount-missing-interview) | requiredCount missing (Interview) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3056](#tc-oppty-3056-priority-missing-interview-opp-154) | priority missing (Interview) → OPP_154 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3057](#tc-oppty-3057-priority-invalid) | priority invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3058](#tc-oppty-3058-preferredseniority-missing) | preferredSeniority missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3059](#tc-oppty-3059-preferredseniority-invalid) | preferredSeniority invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3060](#tc-oppty-3060-allocationtype-invalid) | allocationType invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3061](#tc-oppty-3061-fixed-without-opp-026) | FIXED without % → OPP_026 | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-3062](#tc-oppty-3062-fixed-0) | FIXED 0% | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3063](#tc-oppty-3063-fixed-101) | FIXED 101% | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3064](#tc-oppty-3064-fixed-50-5) | FIXED 50.5% | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3065](#tc-oppty-3065-fixed-1) | FIXED 1% | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3066](#tc-oppty-3066-fixed-100) | FIXED 100% | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3067](#tc-oppty-3067-dynamic-with-opp-027) | DYNAMIC with % → OPP_027 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3068](#tc-oppty-3068-dynamic-without) | DYNAMIC without % | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3069](#tc-oppty-3069-tentativeallocationdate-bad-format-21-10-2026) | tentativeAllocationDate bad format (21/10/2026) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3070](#tc-oppty-3070-tentativeallocationdate-impossible-2026-02-30) | tentativeAllocationDate impossible (2026-02-30) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3071](#tc-oppty-3071-tentativeallocationdate-in-the-past) | tentativeAllocationDate in the past | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3072](#tc-oppty-3072-end-date-before-start-opp-093) | End date before start → OPP_093 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3073](#tc-oppty-3073-end-date-same-day-as-start) | End date same day as start | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3074](#tc-oppty-3074-end-date-without-start-date) | End date without start date | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-3075](#tc-oppty-3075-isinterviewrequired-false-with-roundtitles-opp-029) | isInterviewRequired=false with roundTitles → OPP_029 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3076](#tc-oppty-3076-isinterviewrequired-false-with-interview-date-opp-029) | isInterviewRequired=false with interview date → OPP_029 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3077](#tc-oppty-3077-interview-request-with-isinterviewrequired-false) | INTERVIEW request with isInterviewRequired=false | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3078](#tc-oppty-3078-tentativeinterviewdate-after-allocation-date) | tentativeInterviewDate after allocation date | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-3079](#tc-oppty-3079-tentativeinterviewdate-in-the-past) | tentativeInterviewDate in the past | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-3080](#tc-oppty-3080-roundtitles-50) | roundTitles 50 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3081](#tc-oppty-3081-roundtitles-51) | roundTitles 51 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3082](#tc-oppty-3082-roundtitles-item-201-chars) | roundTitles item 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3083](#tc-oppty-3083-roundtitles-with-blank-title-frd-optional-default-round-n) | roundTitles with blank title (FRD: optional, default "Round N") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3084](#tc-oppty-3084-note-4097) | note 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3085](#tc-oppty-3085-prepmaterials-url-invalid) | prepMaterials url invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3086](#tc-oppty-3086-prepmaterials-title-empty) | prepMaterials title empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3087](#tc-oppty-3087-prepmaterials-omitted-default-links-seeded) | prepMaterials omitted → default links seeded | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3088](#tc-oppty-3088-prepmaterials-none) | prepMaterials [] → none | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3089](#tc-oppty-3089-preferredemployeepublicids-duplicate) | preferredEmployeePublicIds duplicate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3090](#tc-oppty-3090-preferredemployeepublicids-unknown-uuid) | preferredEmployeePublicIds unknown uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3091](#tc-oppty-3091-employeepublicid-on-interview-position-opp-129) | employeePublicId on INTERVIEW position → OPP_129 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3092](#tc-oppty-3092-checklist-items-seeded-per-position) | Checklist items seeded per position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3093](#tc-oppty-3093-locationpreference-invalid) | locationPreference invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3094](#tc-oppty-3094-other-without-otherlocation) | OTHER without otherLocation | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3095](#tc-oppty-3095-other-with-otherlocation) | OTHER with otherLocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3096](#tc-oppty-3096-otherlocation-with-wfo-sys-004) | otherLocation with WFO → SYS_004 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3097](#tc-oppty-3097-usa-without-workmode) | USA without workMode | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3098](#tc-oppty-3098-usa-on-site-without-address) | USA ON_SITE without address | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3099](#tc-oppty-3099-usa-on-site-with-address) | USA ON_SITE with address | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3100](#tc-oppty-3100-workmode-with-wfh) | workMode with WFH | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3101](#tc-oppty-3101-nightshift-none-ns1-combined) | nightShift NONE + NS1 combined | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3102](#tc-oppty-3102-address-501) | address 501 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3103](#tc-oppty-3103-3-positions-2-1-3-openings-ordinals-unique-across-the-opportunity) | 3 positions, 2+1+3 openings — ordinals unique across the opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3104](#tc-oppty-3104-opportunity-priority-most-urgent-of-positions) | Opportunity priority = most urgent of positions | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3105](#tc-oppty-3105-same-title-client-twice-potential-duplicate-notice) | Same title + client twice (Potential Duplicate Notice) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3106](#tc-oppty-3106-ticket-numbers-are-sequential-unique) | Ticket numbers are sequential & unique | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3107](#tc-oppty-3107-pmo-raises-existing-project-not-managed) | pmo raises EXISTING (project not managed) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3108](#tc-oppty-3108-pmo-raises-prospect-no-project) | pmo raises PROSPECT (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3109](#tc-oppty-3109-csm-raises-existing-project-managed) | csm raises EXISTING (project managed) | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3110](#tc-oppty-3110-csm-raises-prospect-no-project) | csm raises PROSPECT (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3111](#tc-oppty-3111-csm-raises-existing-project-not-managed) | csm raises EXISTING (project not managed) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3112](#tc-oppty-3112-csm-raises-existing-no-project) | csm raises EXISTING (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3113](#tc-oppty-3113-pm-raises-existing-project-managed) | pm raises EXISTING (project managed) | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-3114](#tc-oppty-3114-pm-raises-prospect-no-project) | pm raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3115](#tc-oppty-3115-tmqa-raises-prospect-no-project) | tmQA raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3116](#tc-oppty-3116-em-raises-prospect-no-project) | em raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3117](#tc-oppty-3117-rm-raises-prospect-no-project) | rm raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3118](#tc-oppty-3118-emp-raises-prospect-no-project) | emp raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3119](#tc-oppty-3119-admin-raises-prospect-no-project) | admin raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3120](#tc-oppty-3120-csm-raises-direct-for-own-project) | CSM raises DIRECT for own project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3121](#tc-oppty-3121-pm-raises-direct-for-own-project) | PM raises DIRECT for own project | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3122](#tc-oppty-3122-assignee-picker-pm-list-only-holds-pm-role-employees) | Assignee picker PM list only holds PM-role employees | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3123](#tc-oppty-3123-assignee-picker-for-tm-em-csm-employee) | Assignee picker for TM/EM/CSM/Employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3124](#tc-oppty-3124-assign-a-non-pm-as-assignedpm) | Assign a non-PM as assignedPm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3125](#tc-oppty-3125-assign-a-non-csm-as-assignedcsm) | Assign a non-CSM as assignedCsm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3126](#tc-oppty-3126-csm-tries-to-set-assignedcsm-on-create) | CSM tries to set assignedCsm on create | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3127](#tc-oppty-3127-pmo-creates-prospect-assigned-to-pm-gaurav-csm-tarun) | PMO creates PROSPECT assigned to PM gaurav + CSM tarun | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3128](#tc-oppty-3128-assigned-pm-can-open-the-assigned-opportunity) | Assigned PM can open the assigned opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3129](#tc-oppty-3129-assigned-pm-sees-it-in-a-list-frd-7-5-list-view-of-assigned-opps) | Assigned PM sees it in a list (FRD §7.5 list view of assigned opps) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3130](#tc-oppty-3130-assigned-csm-sees-it-on-board) | Assigned CSM sees it on board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3131](#tc-oppty-3131-non-assigned-csm-sai-gandhi-cannot-open-it) | Non-assigned CSM (sai.gandhi) cannot open it | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3132](#tc-oppty-3132-assignment-notification-to-assignee-frd-notif-18) | Assignment notification to assignee (FRD notif #18) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3133](#tc-oppty-3133-pmo-re-assigns-pm-to-another-pm-frd-open-q) | PMO re-assigns PM to another PM (FRD open Q) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3134](#tc-oppty-3134-csm-assigned-clears-assignedcsm-on-an-interview-opp) | CSM (assigned) clears assignedCsm on an INTERVIEW opp | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3135](#tc-oppty-3135-csm-creates-interview-opp-for-own-project) | CSM creates INTERVIEW opp for own project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3136](#tc-oppty-3136-csm-edits-own-interview-opp-title) | CSM edits own INTERVIEW opp title | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3137](#tc-oppty-3137-csm-adds-a-position-to-own-interview-opp) | CSM adds a position to own INTERVIEW opp | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3138](#tc-oppty-3138-csm-cancels-own-interview-ticket-cancelled-tag-frd-rule-22) | CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3139](#tc-oppty-3139-tmqa-edits-a-pmo-opportunity) | tmQA edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3140](#tc-oppty-3140-tmqa-changes-opportunity-status) | tmQA changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3141](#tc-oppty-3141-em-edits-a-pmo-opportunity) | em edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3142](#tc-oppty-3142-em-changes-opportunity-status) | em changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3143](#tc-oppty-3143-rm-edits-a-pmo-opportunity) | rm edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3144](#tc-oppty-3144-rm-changes-opportunity-status) | rm changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3145](#tc-oppty-3145-pm-edits-a-pmo-opportunity) | pm edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3146](#tc-oppty-3146-pm-changes-opportunity-status) | pm changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3147](#tc-oppty-3147-emp-edits-a-pmo-opportunity) | emp edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3148](#tc-oppty-3148-emp-changes-opportunity-status) | emp changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3149](#tc-oppty-3149-admin-edits-a-pmo-opportunity) | admin edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3150](#tc-oppty-3150-admin-changes-opportunity-status) | admin changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3151](#tc-oppty-3151-csm-changes-status-mark-lost-on-own-opp) | CSM changes status (mark Lost) on own opp | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3152](#tc-oppty-3152-admin-java-dept-opp-200-qa-dept-opp-200) | admin: JAVA-dept opp 200, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3153](#tc-oppty-3153-pmo-java-dept-opp-200-qa-dept-opp-200) | pmo: JAVA-dept opp 200, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3154](#tc-oppty-3154-tmqa-java-dept-opp-404-qa-dept-opp-200) | tmQA: JAVA-dept opp 404, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3155](#tc-oppty-3155-tmjava-java-dept-opp-200-qa-dept-opp-404) | tmJava: JAVA-dept opp 200, QA-dept opp 404 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3156](#tc-oppty-3156-em-java-dept-opp-404-qa-dept-opp-200) | em: JAVA-dept opp 404, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3157](#tc-oppty-3157-rm-java-dept-opp-404-qa-dept-opp-404) | rm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3158](#tc-oppty-3158-emp-java-dept-opp-404-qa-dept-opp-404) | emp: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3159](#tc-oppty-3159-csm-java-dept-opp-404-qa-dept-opp-404) | csm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3160](#tc-oppty-3160-pm-java-dept-opp-404-qa-dept-opp-404) | pm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3161](#tc-oppty-3161-out-of-scope-id-returns-404-not-403-no-existence-leak) | Out-of-scope id returns 404 not 403 (no existence leak) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3162](#tc-oppty-3162-board-summary-per-role-equals-distinct-opps-on-openings) | Board summary per role equals distinct opps on /openings | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3163](#tc-oppty-3163-employee-view-team-forced-to-mine) | Employee view=TEAM forced to MINE | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3164](#tc-oppty-3164-pm-without-view-board-calls-openings) | PM without view_board calls /openings | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3165](#tc-oppty-3165-positions-returned-in-created-order-contract) | Positions returned in created order (contract) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3166](#tc-oppty-3166-new-position-with-requiredcount-2-starts-with-2-cards-in-pending-to-shortlist-rule-13) | New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3167](#tc-oppty-3167-stage-counts-reflect-new-cards) | Stage counts reflect new cards | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3168](#tc-oppty-3168-preferred-candidate-flag-on-shortlist-frd-rule-14-glossary) | Preferred Candidate flag on shortlist (FRD rule 14, glossary) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3169](#tc-oppty-3169-shortlist-same-employee-twice-in-one-request) | Shortlist same employee twice in one request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3170](#tc-oppty-3170-shortlist-empty-list) | Shortlist empty list | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3171](#tc-oppty-3171-tm-qa-shortlists-2-qa-candidates) | TM (QA) shortlists 2 QA candidates | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3172](#tc-oppty-3172-re-shortlist-an-already-live-candidate) | Re-shortlist an already live candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3173](#tc-oppty-3173-shortlist-beyond-headcount-3rd-candidate-for-2-openings) | Shortlist beyond headcount (3rd candidate for 2 openings) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3174](#tc-oppty-3174-pmo-shortlists-a-java-dept-employee-on-the-qa-position) | PMO shortlists a JAVA-dept employee on the QA position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3175](#tc-oppty-3175-em-shortlists-qa4) | EM shortlists qa4 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3176](#tc-oppty-3176-rm-tries-to-shortlist) | rm tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3177](#tc-oppty-3177-csm-tries-to-shortlist) | csm tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3178](#tc-oppty-3178-emp-tries-to-shortlist) | emp tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3179](#tc-oppty-3179-admin-tries-to-shortlist) | admin tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3180](#tc-oppty-3180-pm-tries-to-shortlist-frd-7-5-pm-can-shortlist) | PM tries to shortlist (FRD §7.5: PM can shortlist) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3181](#tc-oppty-3181-tm-java-shortlists-on-a-qa-only-position) | TM (JAVA) shortlists on a QA-only position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3182](#tc-oppty-3182-tm-qa-sees-java-candidate-as-an-empty-seat) | TM (QA) sees JAVA candidate as an empty seat | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3183](#tc-oppty-3183-tm-java-can-see-the-opportunity-because-a-java-candidate-is-nominated) | TM (JAVA) can see the opportunity because a JAVA candidate is nominated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3184](#tc-oppty-3184-candidate-picker-excludes-already-live-candidates-for-the-position) | Candidate picker excludes already-live candidates for the position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3185](#tc-oppty-3185-candidate-picker-min-max) | Candidate picker min>max | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3186](#tc-oppty-3186-two-way-alert-shortlist-side-shows-direct-allocations-for-qa1) | Two-way alert: shortlist side shows direct allocations for qa1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3187](#tc-oppty-3187-preferred-candidate-notification-to-tm-frd-notif-7) | Preferred-candidate notification to TM (FRD notif #7) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3188](#tc-oppty-3188-tm-approves-without-request) | TM approves without request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3189](#tc-oppty-3189-tm-sends-em-s-pick-qa4-for-approval) | TM sends EM's pick (qa4) for approval | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3190](#tc-oppty-3190-tm-sends-own-pick-qa1-for-approval) | TM sends own pick qa1 for approval | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3191](#tc-oppty-3191-send-same-candidate-twice) | Send same candidate twice | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3192](#tc-oppty-3192-requester-tm-approves-own-request) | Requester TM approves own request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3193](#tc-oppty-3193-tm-sent-request-who-approves-frd-rule-19-tm-approval-is-final) | TM-sent request: who approves? (FRD rule 19: TM Approval is final) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3194](#tc-oppty-3194-approved-candidate-in-process-blocked-being-prepared-rounds-seeded) | Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3195](#tc-oppty-3195-pmo-sends-qa2-tm-java-tries-to-approve-a-qa-candidate) | PMO sends qa2; TM (JAVA) tries to approve a QA candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3196](#tc-oppty-3196-em-tries-to-approve-em-never-approves) | EM tries to approve (EM never approves) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3197](#tc-oppty-3197-tm-qa-approves-pmo-sent-qa2) | TM (QA) approves PMO-sent qa2 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3198](#tc-oppty-3198-double-approve-already-approved) | Double approve (already approved) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3199](#tc-oppty-3199-pmo-sends-java-candidate-tm-java-approves-candidate-s-department) | PMO sends JAVA candidate; TM (JAVA) approves (candidate's department) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3200](#tc-oppty-3200-withdraw-by-non-requester-tm) | Withdraw by non-requester TM | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3201](#tc-oppty-3201-pmo-withdraws-own-request-back-to-shortlisted) | PMO withdraws own request → back to SHORTLISTED | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3202](#tc-oppty-3202-withdraw-when-nothing-pending) | Withdraw when nothing pending | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3203](#tc-oppty-3203-tm-tries-bypass) | TM tries bypass | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3204](#tc-oppty-3204-bypass-reason-1025-chars) | Bypass reason 1025 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3205](#tc-oppty-3205-pmo-bypasses-tm-approval-for-qa3-not-sent) | PMO bypasses TM approval for qa3 (not sent) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3206](#tc-oppty-3206-bypass-without-reason) | Bypass without reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3207](#tc-oppty-3207-remove-an-in-process-nomination-via-delete) | Remove an IN_PROCESS nomination via DELETE | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3208](#tc-oppty-3208-remove-considered-qa4-no-reason-asked) | Remove CONSIDERED qa4 (no reason asked) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3209](#tc-oppty-3209-reject-without-reason) | Reject without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3210](#tc-oppty-3210-reject-with-whitespace-reason) | Reject with whitespace reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3211](#tc-oppty-3211-tm-passes-rejectedbyrole) | TM passes rejectedByRole | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3212](#tc-oppty-3212-tm-rejects-in-process-qa3-slot-back-to-pending-to-shortlist-rule-6) | TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6) | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3213](#tc-oppty-3213-rejected-appears-in-rejected-column-with-reason-role) | Rejected appears in Rejected column with reason & role | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3214](#tc-oppty-3214-rejected-candidate-nominated-for-a-different-position-in-same-opp-rule-6) | Rejected candidate nominated for a different position in same opp (rule 6) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3215](#tc-oppty-3215-rejected-candidate-re-nominated-on-the-same-position) | Rejected candidate re-nominated on the SAME position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3216](#tc-oppty-3216-action-on-a-rejected-historical-nomination-id) | Action on a REJECTED (historical) nomination id | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3217](#tc-oppty-3217-tm-drags-a-card) | TM drags a card | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3218](#tc-oppty-3218-drag-to-waiting-for-approval) | Drag to WAITING_FOR_APPROVAL | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3219](#tc-oppty-3219-drag-to-won-directly) | Drag to WON directly | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3220](#tc-oppty-3220-skip-2-columns-being-prepared-waiting-for-feedback-without-confirm) | Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3221](#tc-oppty-3221-drag-being-prepared-interview-scheduled-when-no-round-has-a-date) | Drag Being Prepared → Interview Scheduled when no round has a date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3222](#tc-oppty-3222-drag-backwards-to-shortlisted) | Drag backwards to SHORTLISTED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3223](#tc-oppty-3223-drag-backwards-interview-scheduled-being-prepared) | Drag backwards Interview Scheduled → Being Prepared | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3224](#tc-oppty-3224-drag-an-empty-pending-card) | Drag an empty (Pending) card | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3225](#tc-oppty-3225-candidate-janki-opens-own-opportunity-my-opportunity) | Candidate (janki) opens own opportunity (My Opportunity) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3226](#tc-oppty-3226-candidate-ticks-2-items-out-of-order-frd-any-order) | Candidate ticks 2 items out of order (FRD: any order) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3227](#tc-oppty-3227-candidate-ticks-an-unknown-code) | Candidate ticks an unknown code | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3228](#tc-oppty-3228-candidate-tries-to-skip-an-item) | Candidate tries to skip an item | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3229](#tc-oppty-3229-pmo-marks-item-skipped-by-pmo) | PMO marks item "Skipped by PMO" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3230](#tc-oppty-3230-candidate-ticks-a-pmo-skipped-item) | Candidate ticks a PMO-skipped item | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3231](#tc-oppty-3231-candidate-edits-another-candidate-s-checklist) | Candidate edits another candidate's checklist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3232](#tc-oppty-3232-tm-ticks-a-team-member-s-checklist-read-only-per-matrix) | TM ticks a team member's checklist (read-only per matrix) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3233](#tc-oppty-3233-unrelated-employee-kashyap-opens-the-opportunity) | Unrelated employee (kashyap) opens the opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3234](#tc-oppty-3234-add-round-3-with-no-title-defaults-frd-round-3) | Add round 3 with no title → defaults (FRD "Round 3") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3235](#tc-oppty-3235-tm-adds-a-round) | TM adds a round | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3236](#tc-oppty-3236-round-on-considered-nomination) | Round on CONSIDERED nomination | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3237](#tc-oppty-3237-round-interviewer-201-chars) | Round interviewer 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3238](#tc-oppty-3238-round-scheduledat-invalid) | Round scheduledAt invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3239](#tc-oppty-3239-schedule-r1-in-future-finalize-lock) | Schedule R1 in future + finalize (lock) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-3240](#tc-oppty-3240-change-finalized-r1-date-rule-17-lock) | Change finalized R1 date (rule 17 lock) | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-3241](#tc-oppty-3241-un-finalize-r1) | Un-finalize R1 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3242](#tc-oppty-3242-card-auto-moves-to-interview-scheduled-when-a-round-is-dated) | Card auto-moves to Interview Scheduled when a round is dated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3243](#tc-oppty-3243-mark-future-dated-r1-cleared) | Mark future-dated R1 Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3244](#tc-oppty-3244-mark-undated-r2-cleared) | Mark undated R2 Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3245](#tc-oppty-3245-r2-dated-yesterday-cleared-without-recording-frd-recording-optional) | R2 dated yesterday → Cleared without recording (FRD: recording optional) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3246](#tc-oppty-3246-recording-url-invalid) | Recording URL invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3247](#tc-oppty-3247-feedback-4097-chars) | Feedback 4097 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3248](#tc-oppty-3248-delete-a-decided-round) | Delete a decided round | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3249](#tc-oppty-3249-delete-pending-round-3-renumber) | Delete pending round 3 → renumber | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3250](#tc-oppty-3250-candidate-vandana-sees-round-feedback) | Candidate (vandana) sees round feedback? | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3251](#tc-oppty-3251-did-the-interview-happen-yes-waiting-for-feedback) | "Did the interview happen?" — Yes → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3252](#tc-oppty-3252-edit-allocation-with-live-candidates) | Edit allocation % with live candidates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3253](#tc-oppty-3253-resend-unchanged-allocation) | Resend unchanged allocation % | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3254](#tc-oppty-3254-edit-tech-stack-after-shortlisting-rule-18-tm-re-review-notification) | Edit tech stack after shortlisting (rule 18 → TM re-review notification) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3255](#tc-oppty-3255-reduce-requiredcount-to-1-cards-with-candidates-kept) | Reduce requiredCount to 1 (cards with candidates kept) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3256](#tc-oppty-3256-delete-position-with-in-process-candidate) | Delete position with IN_PROCESS candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3257](#tc-oppty-3257-round-skip-select-qa1-from-being-prepared-without-confirm) | Round-skip: select qa1 from Being Prepared without confirm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3258](#tc-oppty-3258-tm-selects-won) | TM selects (Won) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3259](#tc-oppty-3259-select-qa2-from-waiting-for-feedback) | Select qa2 from Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3260](#tc-oppty-3260-approve-while-another-opening-is-in-process-opp-047-same-employee) | Approve while another opening is In Process (OPP_047 same employee) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3261](#tc-oppty-3261-allocate-with-above-remaining-capacity) | Allocate with % above remaining capacity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3262](#tc-oppty-3262-allocate-bad-body-fixed-without) | Allocate bad body (FIXED without %) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3263](#tc-oppty-3263-tm-csm-allocate) | TM / CSM allocate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3264](#tc-oppty-3264-pmo-allocates-won-qa2-project-allocated-born-approved-allocation-ticket) | PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3265](#tc-oppty-3265-allocate-the-same-nomination-again) | Allocate the same nomination again | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3266](#tc-oppty-3266-allocation-ticket-visible-in-allocation-tickets-module) | Allocation ticket visible in allocation tickets module | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3267](#tc-oppty-3267-two-way-alert-now-lists-the-upcoming-allocation-for-qa2) | Two-way alert now lists the upcoming allocation for qa2 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3268](#tc-oppty-3268-unlink-project-after-allocation) | Unlink project after allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3269](#tc-oppty-3269-same-status-as-current) | Same status as current | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3270](#tc-oppty-3270-on-hold-pipeline-actions-blocked) | ON_HOLD → pipeline actions blocked | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3271](#tc-oppty-3271-on-hold-candidate-checklist-edit) | ON_HOLD: candidate checklist edit | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3272](#tc-oppty-3272-on-hold-cards-move-to-on-hold-column) | ON_HOLD cards move to On Hold column | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3273](#tc-oppty-3273-reopen-on-hold-open) | Reopen ON_HOLD → OPEN | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3274](#tc-oppty-3274-concurrent-double-request-approval-on-same-nomination) | Concurrent double request-approval on same nomination | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3275](#tc-oppty-3275-concurrent-shortlist-of-same-employee-by-2-pmos) | Concurrent shortlist of same employee by 2 PMOs | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3276](#tc-oppty-3276-mark-opportunity-won-in-process-selected-awaiting-approval-removed) | Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3277](#tc-oppty-3277-mark-lost-candidates-released-unblocked-hidden-from-default-board) | Mark LOST → candidates RELEASED & unblocked; hidden from default board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3278](#tc-oppty-3278-lost-notification-to-raiser-tm-frd-notif-15) | Lost notification to raiser/TM (FRD notif #15) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3279](#tc-oppty-3279-reopen-lost-open-removes-released-candidates) | Reopen LOST → OPEN removes released candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3280](#tc-oppty-3280-nlr-without-confirmation) | NLR without confirmation | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3281](#tc-oppty-3281-nlr-with-confirmation) | NLR with confirmation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3282](#tc-oppty-3282-reopen-nlr-open-rule-17-reversible) | Reopen NLR → OPEN (rule 17: reversible)  | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3283](#tc-oppty-3283-re-initiate-without-reason) | Re-initiate without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3284](#tc-oppty-3284-tm-re-initiates) | TM re-initiates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3285](#tc-oppty-3285-pmo-re-initiates-p2-all-non-allocated-released-cards-back-to-pending) | PMO re-initiates P2 → all non-allocated released, cards back to Pending | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3286](#tc-oppty-3286-re-initiate-when-nothing-to-release) | Re-initiate when nothing to release | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3287](#tc-oppty-3287-stage-count-total-equals-openings-total-for-this-opp) | Stage-count total equals /openings total for this opp | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3288](#tc-oppty-3288-search-by-readable-position-id-displayid) | Search by readable position id (displayId) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3289](#tc-oppty-3289-search-with-sql-wildcard-does-not-match-everything) | Search with SQL wildcard % does not match everything | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3290](#tc-oppty-3290-limit-50-not-allowed) | limit=50 (not allowed) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3291](#tc-oppty-3291-createdfrom-createdto) | createdFrom > createdTo | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3292](#tc-oppty-3292-employee-opportunity-history-for-qa1-frd-change-list) | Employee opportunity history for qa1 (FRD change list) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3293](#tc-oppty-3293-employee-list-carries-interviewopportunities-for-qa1) | Employee list carries interviewOpportunities for qa1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3294](#tc-oppty-3294-bypass-being-prepared-remaining-allocation-reserves-40) | Bypass → Being Prepared; remaining allocation reserves 40% | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3295](#tc-oppty-3295-candidate-picker-shows-the-blocked-reservation-too) | Candidate picker shows the blocked reservation too | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3296](#tc-oppty-3296-date-r1-yesterday-card-goes-to-did-interview-happen-stage-added-23-10-not-auto-to-waiting-for-feedback) | Date R1 yesterday → card goes to Did Interview Happen? (stage added 23/10; not auto to Waiting for Feedback) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3297](#tc-oppty-3297-did-the-interview-happen-yes-waiting-for-feedback) | "Did the interview happen?" Yes → Waiting for Feedback | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3298](#tc-oppty-3298-r1-not-cleared-select-without-confirmation-is-refused-round-skip-safeguard) | R1 Not Cleared → select without confirmation is refused (round-skip safeguard) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3299](#tc-oppty-3299-select-with-confirmation-frd-rule-20-skip-dialog) | Select with confirmation (FRD rule 20 skip dialog) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3300](#tc-oppty-3300-after-select-won-selected-filled-1-1) | After select: WON, SELECTED, filled 1/1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3301](#tc-oppty-3301-won-elsewhere-notification-to-pmo-frd-change-list) | Won-elsewhere notification to PMO (FRD change list) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3302](#tc-oppty-3302-allocate-fixed-without) | Allocate FIXED without %  | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3303](#tc-oppty-3303-allocate-end-before-start) | Allocate end before start | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3304](#tc-oppty-3304-allocate-with-101) | Allocate with 101% | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3305](#tc-oppty-3305-allocate-with-a-different-than-the-position-40-60) | Allocate with a different % than the position (40 → 60) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3306](#tc-oppty-3306-pmo-allocates-project-allocated-allocation-ticket) | PMO allocates → Project Allocated + allocation ticket | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3307](#tc-oppty-3307-allocation-ticket-in-allocation-requests-born-approved) | Allocation ticket in Allocation Requests (born approved) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3308](#tc-oppty-3308-interview-allocation-tab-in-requests-tracking-lists-it) | Interview Allocation tab in Requests Tracking lists it | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3309](#tc-oppty-3309-two-way-alert-lists-the-new-upcoming-allocation) | Two-way alert lists the new upcoming allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3310](#tc-oppty-3310-remaining-allocation-after-allocation-reservation-released-booking-counted) | Remaining allocation after allocation (reservation released, booking counted) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3311](#tc-oppty-3311-unlink-project-after-allocation) | Unlink project after allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3312](#tc-oppty-3312-change-project-after-allocation) | Change project after allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3313](#tc-oppty-3313-drag-project-allocated-card-backwards) | Drag Project Allocated card backwards | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3314](#tc-oppty-3314-mark-opportunity-lost-after-a-candidate-is-project-allocated) | Mark Opportunity LOST after a candidate is Project Allocated | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3315](#tc-oppty-3315-reopen-after-lost-allocated-card-intact) | Reopen after LOST: allocated card intact? | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3316](#tc-oppty-3316-re-initiate-position-that-has-a-project-allocated-seat) | Re-initiate position that has a Project Allocated seat | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3317](#tc-oppty-3317-employee-profile-history-lists-the-allocated-opportunity) | Employee profile history lists the allocated opportunity | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3318](#tc-oppty-3318-candidate-akash-pandya-sees-own-history-self) | Candidate (akash.pandya) sees own history (self) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3319](#tc-oppty-3319-another-employee-reads-akash-s-history-idor) | Another employee reads akash's history (IDOR) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3320](#tc-oppty-3320-employee-list-interview-opportunities-column-pmo) | Employee list Interview opportunities column (PMO) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3321](#tc-oppty-3321-employee-list-column-for-a-tm-can-read-opportunities) | Employee list column for a TM (can read opportunities) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3322](#tc-oppty-3322-direct-without-employee) | DIRECT without employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3323](#tc-oppty-3323-direct-without-tentative-allocation-date) | DIRECT without tentative allocation date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3324](#tc-oppty-3324-direct-with-requiredcount-2) | DIRECT with requiredCount 2 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3325](#tc-oppty-3325-direct-with-round-titles) | DIRECT with round titles | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3326](#tc-oppty-3326-direct-with-isinterviewrequired-true) | DIRECT with isInterviewRequired true | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3327](#tc-oppty-3327-direct-with-prep-material) | DIRECT with prep material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3328](#tc-oppty-3328-direct-with-unknown-employee) | DIRECT with unknown employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3329](#tc-oppty-3329-same-employee-on-two-positions-of-one-direct-request) | Same employee on two positions of one DIRECT request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3330](#tc-oppty-3330-interviewerlinkedinurl-ignored-on-direct) | interviewerLinkedinUrl ignored on DIRECT | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3331](#tc-oppty-3331-priority-derived-from-allocation-date-3d-high-10d-medium-30d-low-sent-value-ignored) | Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3332](#tc-oppty-3332-frd-rule-9-aging-priority-1-week-open-high-vs-build-allocation-date-based) | FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3333](#tc-oppty-3333-direct-ticket-starts-open-with-the-employee-nominated) | Direct ticket starts OPEN with the employee nominated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3334](#tc-oppty-3334-interview-action-on-a-direct-ticket) | Interview action on a DIRECT ticket | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3335](#tc-oppty-3335-csm-raiser-moves-direct-stage) | CSM (raiser) moves Direct stage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3336](#tc-oppty-3336-tm-moves-direct-stage) | TM moves Direct stage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3337](#tc-oppty-3337-pmo-skips-open-awaiting) | PMO skips OPEN → AWAITING | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3338](#tc-oppty-3338-pmo-open-in-review) | PMO OPEN → IN_REVIEW | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3339](#tc-oppty-3339-move-backwards-in-review-open) | Move backwards IN_REVIEW → OPEN | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3340](#tc-oppty-3340-owner-csm-swaps-the-employee-while-in-review) | Owner (CSM) swaps the employee while IN_REVIEW | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3341](#tc-oppty-3341-owner-sets-tentativeallocationdate-null) | Owner sets tentativeAllocationDate null | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3342](#tc-oppty-3342-non-owner-csm-sai-gandhi-edits) | Non-owner CSM (sai.gandhi) edits | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3343](#tc-oppty-3343-pmo-in-review-awaiting) | PMO IN_REVIEW → AWAITING | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3344](#tc-oppty-3344-owner-swaps-employee-while-awaiting) | Owner swaps employee while AWAITING | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3345](#tc-oppty-3345-two-way-alert-allocation-side-employee-in-interview-opps) | Two-way alert (allocation side): employee in interview opps | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3346](#tc-oppty-3346-two-way-alert-as-csm-raiser) | Two-way alert as CSM (raiser) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3347](#tc-oppty-3347-pmo-awaiting-approved-allocates-at-once-start-tentative-date-30) | PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%) | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3348](#tc-oppty-3348-direct-tab-in-requests-tracking-lists-the-allocation-ticket) | Direct tab in Requests Tracking lists the allocation ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3349](#tc-oppty-3349-approved-is-terminal) | APPROVED is terminal | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3350](#tc-oppty-3350-owner-edits-after-approved) | Owner edits after APPROVED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3351](#tc-oppty-3351-cancel-tag-after-approved) | Cancel tag after APPROVED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3352](#tc-oppty-3352-reject-without-reason) | Reject without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3353](#tc-oppty-3353-reject-reason-1025) | Reject reason 1025 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3354](#tc-oppty-3354-reject-from-open-with-reason) | Reject from OPEN with reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3355](#tc-oppty-3355-rejected-is-terminal-move-to-in-review) | REJECTED is terminal (move to IN_REVIEW) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3356](#tc-oppty-3356-tm-tries-to-cancel) | TM tries to cancel | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3357](#tc-oppty-3357-cancel-reason-1025) | Cancel reason 1025 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3358](#tc-oppty-3358-csm-cancels-without-a-reason-frd-open-q-is-reason-required) | CSM cancels without a reason (FRD open Q: is reason required?) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3359](#tc-oppty-3359-csm-cancels-tag-added-stage-unchanged-in-review) | CSM cancels: tag added, stage unchanged (IN_REVIEW) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3360](#tc-oppty-3360-cancel-again) | Cancel again | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3361](#tc-oppty-3361-pmo-notified-of-cancellation-from-stage-frd-notif-19) | PMO notified of cancellation from stage (FRD notif #19) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3362](#tc-oppty-3362-pmo-moves-a-cancelled-ticket-guide-says-pmo-may-still-move-it) | PMO moves a cancelled ticket (guide says PMO may still move it) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3363](#tc-oppty-3363-iscancelled-true-filter-returns-the-tagged-ticket) | isCancelled=true filter returns the tagged ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3364](#tc-oppty-3364-pmo-closes-cancelled-ticket-no-longer-required) | PMO closes cancelled ticket → No Longer Required | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-3365](#tc-oppty-3365-board-default-hides-nlr-direct-tickets) | Board default hides NLR Direct tickets | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3366](#tc-oppty-3366-prospect-direct-no-project-created-by-csm) | Prospect Direct (no project) created by CSM | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3367](#tc-oppty-3367-approved-not-offered-without-a-project) | APPROVED not offered without a project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3368](#tc-oppty-3368-force-approved-without-project) | Force APPROVED without project | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3369](#tc-oppty-3369-csm-links-own-project-prospect-becomes-existing) | CSM links own project → Prospect becomes Existing | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3370](#tc-oppty-3370-csm-links-a-project-it-does-not-manage) | CSM links a project it does not manage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3371](#tc-oppty-3371-csm-unlinks-project-on-existing) | CSM unlinks project on EXISTING | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3372](#tc-oppty-3372-approved-with-allocation-unconfirmed-selected-not-allocated) | APPROVED with allocation unconfirmed → selected, not allocated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3373](#tc-oppty-3373-confirm-allocation-later-patch-isallocationconfirmed-true) | Confirm allocation later (PATCH isAllocationConfirmed:true) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3374](#tc-oppty-3374-direct-ticket-for-a-fully-booked-employee-is-accepted-at-create-warning-only) | Direct ticket for a fully-booked employee is accepted at create (warning only?) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3375](#tc-oppty-3375-approved-for-fully-booked-employee-capacity-error-passes-through) | APPROVED for fully-booked employee → capacity error passes through | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3376](#tc-oppty-3376-direct-stage-counts-total-equals-direct-list-total) | direct-stage-counts total equals Direct list total | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3377](#tc-oppty-3377-direct-summary-requesttype-direct-vs-list) | Direct summary (requestType=DIRECT) vs list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3378](#tc-oppty-3378-direct-tickets-do-not-leak-into-the-interview-board) | Direct tickets do not leak into the Interview board | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3379](#tc-oppty-3379-csm-sees-own-direct-tickets-only) | CSM sees own Direct tickets only | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3380](#tc-oppty-3380-tm-sees-direct-tickets-of-own-department-view-only) | TM sees Direct tickets of own department (view only) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3381](#tc-oppty-3381-tm-adds-prep-material) | TM adds prep material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3382](#tc-oppty-3382-em-adds-prep-material-frd-7-4-em-standardises-question-banks) | EM adds prep material (FRD §7.4: EM standardises question banks) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3383](#tc-oppty-3383-assigned-pm-adds-prep-material-on-top-of-pmo-s-frd-7-5) | Assigned PM adds prep material on top of PMO's (FRD §7.5) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3384](#tc-oppty-3384-tm-edits-pmo-s-material) | TM edits PMO's material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3385](#tc-oppty-3385-candidate-employee-adds-prep-material) | Candidate (employee) adds prep material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3386](#tc-oppty-3386-prep-material-url-javascript) | Prep material URL javascript: | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3387](#tc-oppty-3387-prep-material-title-201) | Prep material title 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3388](#tc-oppty-3388-duplicate-url-twice-on-one-position) | Duplicate URL twice on one position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3389](#tc-oppty-3389-prep-material-cap) | Prep material cap | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3390](#tc-oppty-3390-patch-title-null-required) | PATCH title null (required) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3391](#tc-oppty-3391-patch-websiteurl-not-a-clear-per-contract) | PATCH websiteUrl "" (not a clear per contract) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3392](#tc-oppty-3392-patch-unknown-key) | PATCH unknown key | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3393](#tc-oppty-3393-patch-requesttype-fixed-at-create) | PATCH requestType (fixed at create) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3394](#tc-oppty-3394-switch-existing-prospect-unlinks-project) | Switch EXISTING → PROSPECT unlinks project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3395](#tc-oppty-3395-edit-history-change-log-frd-8-full-change-log-recent-edits-highlighted) | Edit history / change log (FRD §8: full change log, recent edits highlighted) | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-3396](#tc-oppty-3396-pmo-edits-a-lost-opportunity) | PMO edits a LOST opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3397](#tc-oppty-3397-add-position-to-a-lost-opportunity) | Add position to a LOST opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3398](#tc-oppty-3398-delete-the-last-position) | Delete the last position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3399](#tc-oppty-3399-delete-a-position-that-has-only-considered-candidates-candidates-notified) | Delete a position that has only CONSIDERED candidates → candidates notified? | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-3400](#tc-oppty-3400-add-position-requiredcount-21-via-patch) | Add position requiredCount 21 via PATCH | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-3401](#tc-oppty-3401-raise-requiredcount-1-4-appends-3-empty-cards) | Raise requiredCount 1 → 4 appends 3 empty cards | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3402](#tc-oppty-3402-shortlist-shortfall-data-frd-warn-when-fewer-shortlisted-than-needed) | Shortlist shortfall data (FRD: warn when fewer shortlisted than needed) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3403](#tc-oppty-3403-candidate-ticks-checklist-while-interview-scheduled) | Candidate ticks checklist while Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3404](#tc-oppty-3404-pmo-ticks-on-candidate-s-behalf-at-any-stage) | PMO ticks on candidate's behalf at any stage | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3405](#tc-oppty-3405-pending-checklist-does-not-block-scheduling-frd-change-list) | Pending checklist does not block scheduling (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3406](#tc-oppty-3406-send-reminder-frd-7-5-endpoint-exists) | Send Reminder (FRD §7.5) endpoint exists | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-3407](#tc-oppty-3407-rm-of-the-candidate-unknown-sees-the-card-team-scope) | RM of the candidate (unknown) sees the card (TEAM scope) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-3408](#tc-oppty-3408-rm-shortlists-matrix-no) | RM shortlists (matrix: no) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-3409](#tc-oppty-3409-title-with-html-is-stored-raw-ui-must-escape) | Title with HTML is stored raw (UI must escape) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3410](#tc-oppty-3410-unauthenticated-board-read) | Unauthenticated board read | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-3411](#tc-oppty-3411-non-uuid-id-in-path) | Non-uuid id in path | Pre-sales Opportunities | security | medium |

---

## Pre-sales Opportunities

556 test cases.

### Boundary (35)

#### TC-OPPTY-3005 — Title exactly 200 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0241 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title exactly 200 chars
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-005

**Automation Hint**

API-level check

#### TC-OPPTY-3006 — Title 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title 201 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-006

**Automation Hint**

API-level check

#### TC-OPPTY-3013 — clientName exactly 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0243 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientName exactly 200
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-013

**Automation Hint**

API-level check

#### TC-OPPTY-3014 — clientName 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientName 201
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-014

**Automation Hint**

API-level check

#### TC-OPPTY-3020 — websiteUrl 2049 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be shorter than or equal to 2048 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: websiteUrl 2049 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-020

**Automation Hint**

API-level check

#### TC-OPPTY-3023 — prospectContact 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"prospectContact","message":"prospectContact must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prospectContact 201
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-023

**Automation Hint**

API-level check

#### TC-OPPTY-3024 — prospectNotes 4096

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0245 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prospectNotes 4096
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-024

**Automation Hint**

API-level check

#### TC-OPPTY-3025 — prospectNotes 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"prospectNotes","message":"prospectNotes must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prospectNotes 4097
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-025

**Automation Hint**

API-level check

#### TC-OPPTY-3026 — specialInstructions 4096

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0246 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: specialInstructions 4096
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-026

**Automation Hint**

API-level check

#### TC-OPPTY-3027 — specialInstructions 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"specialInstructions","message":"specialInstructions must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: specialInstructions 4097
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-027

**Automation Hint**

API-level check

#### TC-OPPTY-3029 — jobDescription has no max length (100k chars)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"jobDescription","message":"jobDescription must be shorter than or equal to 50000 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: jobDescription has no max length (100k chars)
2. Check the response and resulting state

**Expected**

Should be capped (FRD silent) — record behaviour

**Test Data**

- `checkId`: VAL-029

**Automation Hint**

API-level check

#### TC-OPPTY-3039 — Position title 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Position title 201
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-039

**Automation Hint**

API-level check

#### TC-OPPTY-3041 — techStacks item 101 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"each value in techStacks must be shorter than or equal to 100 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: techStacks item 101 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-041

**Automation Hint**

API-level check

#### TC-OPPTY-3051 — requiredCount 21

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be greater than 20"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount 21
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-051

**Automation Hint**

API-level check

#### TC-OPPTY-3052 — requiredCount 1.5

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must be a whole number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount 1.5
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-052

**Automation Hint**

API-level check

#### TC-OPPTY-3054 — requiredCount 20 → 20 opening cards

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0254 openings=20 ordinals=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount 20 → 20 opening cards
2. Check the response and resulting state

**Expected**

201 created + 20 openings, ordinals 1..20

**Test Data**

- `checkId`: VAL-054

**Automation Hint**

API-level check

#### TC-OPPTY-3064 — FIXED 50.5%

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must be an integer number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: FIXED 50.5%
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-064

**Automation Hint**

API-level check

#### TC-OPPTY-3069 — tentativeAllocationDate bad format (21/10/2026)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.tentativeAllocationDate","message":"tentativeAllocationDate must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: tentativeAllocationDate bad format (21/10/2026)
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-069

**Automation Hint**

API-level check

#### TC-OPPTY-3080 — roundTitles 50

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0259 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: roundTitles 50
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-080

**Automation Hint**

API-level check

#### TC-OPPTY-3081 — roundTitles 51

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.roundTitles","message":"roundTitles must contain no more than 50 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: roundTitles 51
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-081

**Automation Hint**

API-level check

#### TC-OPPTY-3082 — roundTitles item 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.roundTitles","message":"each value in roundTitles must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: roundTitles item 201 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-082

**Automation Hint**

API-level check

#### TC-OPPTY-3084 — note 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.note","message":"note must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: note 4097
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-084

**Automation Hint**

API-level check

#### TC-OPPTY-3152 — admin: JAVA-dept opp 200, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Admin: admin: JAVA-dept opp 200, QA-dept opp 200
2. Check the response and resulting state

**Expected**

200/200

**Test Data**

- `checkId`: RBAC-046

**Automation Hint**

API-level check

#### TC-OPPTY-3153 — pmo: JAVA-dept opp 200, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: pmo: JAVA-dept opp 200, QA-dept opp 200
2. Check the response and resulting state

**Expected**

200/200

**Test Data**

- `checkId`: RBAC-047

**Automation Hint**

API-level check

#### TC-OPPTY-3154 — tmQA: JAVA-dept opp 404, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM (QA): tmQA: JAVA-dept opp 404, QA-dept opp 200
2. Check the response and resulting state

**Expected**

404/200

**Test Data**

- `checkId`: RBAC-048

**Automation Hint**

API-level check

#### TC-OPPTY-3155 — tmJava: JAVA-dept opp 200, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM (JAVA): tmJava: JAVA-dept opp 200, QA-dept opp 404
2. Check the response and resulting state

**Expected**

200/404

**Test Data**

- `checkId`: RBAC-049

**Automation Hint**

API-level check

#### TC-OPPTY-3156 — em: JAVA-dept opp 404, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: em: JAVA-dept opp 404, QA-dept opp 200
2. Check the response and resulting state

**Expected**

404/200

**Test Data**

- `checkId`: RBAC-050

**Automation Hint**

API-level check

#### TC-OPPTY-3204 — Bypass reason 1025 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Bypass reason 1025 chars
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-040

**Automation Hint**

API-level check

#### TC-OPPTY-3237 — Round interviewer 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"interviewer","message":"interviewer must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Round interviewer 201 chars
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-073

**Automation Hint**

API-level check

#### TC-OPPTY-3247 — Feedback 4097 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"feedback","message":"feedback must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Feedback 4097 chars
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-083

**Automation Hint**

API-level check

#### TC-OPPTY-3290 — limit=50 (not allowed)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"limit","message":"limit must be one of the following values: 100, 200, 300"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: limit=50 (not allowed)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-126

**Automation Hint**

API-level check

#### TC-OPPTY-3353 — Reject reason 1025

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Reject reason 1025
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-032

**Automation Hint**

API-level check

#### TC-OPPTY-3357 — Cancel reason 1025

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Cancel reason 1025
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-036

**Automation Hint**

API-level check

#### TC-OPPTY-3387 — Prep material title 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Prep material title 201
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-007

**Automation Hint**

API-level check

#### TC-OPPTY-3400 — Add position requiredCount 21 via PATCH

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"requiredCount","message":"requiredCount must not be greater than 20"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Add position requiredCount 21 via PATCH
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-020

**Automation Hint**

API-level check

### Functional (197)

#### TC-OPPTY-2023 — Nightly sweep moves past-dated cards to Did Interview Happen?

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Did the interview happen? (retest, JAVA) |
| **Actual Result** | Ignored by QA decision 27/10 (the step is answered by hand). |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT2 Did the interview happen? (retest, JAVA): as PMO, Nightly sweep moves past-dated cards to Did Interview Happen?
2. Check the screen, toast and resulting state

**Expected**

—

**Test Data**

- `checkId`: RT2-00

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2024 — Back-dated rounds (yesterday) put 3 cards in "Did Interview Happen?"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Did the interview happen? (retest, JAVA) |
| **Actual Result** | Reyansh Bose: Did Interview Happen? \| Dev Joshi: Did Interview Happen? \| Harsh Gandhi: Did Interview Happen? |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT2 Did the interview happen? (retest, JAVA): as PMO, Back-dated rounds (yesterday) put 3 cards in "Did Interview Happen?"
2. Check the screen, toast and resulting state

**Expected**

All three rows show Did Interview Happen?

**Test Data**

- `checkId`: RT2-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2025 — Reyansh Bose: answer "Completed"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Did the interview happen? (retest, JAVA) |
| **Actual Result** | toast: Interview confirmed — waiting for feedback \| 0% 50% Remaining of 100% Waiting for Feedback 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT2 Did the interview happen? (retest, JAVA): as PMO, Reyansh Bose: answer "Completed"
2. Check the screen, toast and resulting state

**Expected**

Waiting for Feedback

**Test Data**

- `checkId`: RT2-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2027 — Harsh Gandhi: "Didn't happen" → Skip round

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Did the interview happen? (retest, JAVA) |
| **Actual Result** | confirm: Skip Round 1? This round will be marked as Skipped and the c \| toast: Round skipped \| AVA 100% 50% Remaining of 100% Being Prepared 2 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT2 Did the interview happen? (retest, JAVA): as PMO, Harsh Gandhi: "Didn't happen" → Skip round
2. Check the screen, toast and resulting state

**Expected**

Confirm "Skip Round 1?"; round Skipped; card moves on

**Test Data**

- `checkId`: RT2-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2036 — Put a ticket On Hold

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Ticket outcomes (retest) |
| **Actual Result** | toast: Ticket status updated. \| OPP-0270 QA-AUTO RT2 hold On Hold High Interview Allocation · QA-AUTO RT2 Prospe \|  100% 50% Remaining of 100% On Hold 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT4 Ticket outcomes (retest): as PMO, Put a ticket On Hold
2. Check the screen, toast and resulting state

**Expected**

Ticket and candidate On Hold

**Test Data**

- `checkId`: RT4-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2037 — Mark a ticket Client Lost

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Ticket outcomes (retest) |
| **Actual Result** | toast: Ticket status updated. \| OPP-0273 QA-AUTO RT2 lost Lost High Interview Allocation · QA-AUTO RT2 Prospect  \| Software Engineer JAVA 100% 100% Remaining of 100% Lost 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT4 Ticket outcomes (retest): as PMO, Mark a ticket Client Lost
2. Check the screen, toast and resulting state

**Expected**

Ticket Lost; candidate Lost; blocked % released

**Test Data**

- `checkId`: RT4-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2038 — Board menu → No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Ticket outcomes (retest) |
| **Actual Result** | confirm: Confirm Status Change This will change the status of the whole Opportunity OPP-0275 — QA-AUTO RT2 nl \| toast: Status updated. \| OPP-0275 QA-AUTO RT2 nlr No Longer Required High Interview Allocation · QA-AUTO RT2 Prospe |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT4 Ticket outcomes (retest): as PMO, Board menu → No Longer Required
2. Check the screen, toast and resulting state

**Expected**

Ticket No Longer Required

**Test Data**

- `checkId`: RT4-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2039 — Board menu → Open re-opens the On Hold ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Ticket outcomes (retest) |
| **Actual Result** | toast: Status updated. \| OPP-0270 QA-AUTO RT2 hold Open High Interview Allocation · QA-AUTO RT2 \| 0% Remaining of 100% Being Prepared 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT4 Ticket outcomes (retest): as PMO, Board menu → Open re-opens the On Hold ticket
2. Check the screen, toast and resulting state

**Expected**

Ticket Open; candidate back in Being Prepared

**Test Data**

- `checkId`: RT4-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2040 — Add rounds with the "+" stepper (1 → 3)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | Round added \| Round added |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Add rounds with the "+" stepper (1 → 3)
2. Check the screen, toast and resulting state

**Expected**

"Round added"; Round 3 shown

**Test Data**

- `checkId`: RT5-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2041 — Keyboard reorder Round 3 up

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | Round order updated \| Round added \| Round added |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Keyboard reorder Round 3 up
2. Check the screen, toast and resulting state

**Expected**

"Round order updated"

**Test Data**

- `checkId`: RT5-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2042 — Delete the last pending round

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | Round removed \| Round order updated \| Round added \| Round added |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Delete the last pending round
2. Check the screen, toast and resulting state

**Expected**

"Round removed"

**Test Data**

- `checkId`: RT5-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2043 — Skip Round 1 from the header

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | Round marked as Skipped |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Skip Round 1 from the header
2. Check the screen, toast and resulting state

**Expected**

"Round marked as Skipped"

**Test Data**

- `checkId`: RT5-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2044 — Mark Won with Round 2 pending

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | confirm: Interview is still in progress Not every interview round is Cleared. Selecting now records \| toast: Candidate marked as Won \| Round marked as Skipped |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Mark Won with Round 2 pending
2. Check the screen, toast and resulting state

**Expected**

Skip confirmation → Won

**Test Data**

- `checkId`: RT5-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2046 — Link Project (AnalytixHub) on the Prospect ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | toast: Project linked. \| OPP-0278 QA-AUTO RT2 rounds-link Open High Interview Allocation · QA-AUTO RT2 Prospect Exi |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Link Project (AnalytixHub) on the Prospect ticket
2. Check the screen, toast and resulting state

**Expected**

"Project linked."; becomes Existing Client

**Test Data**

- `checkId`: RT5-07

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2053 — Edit Ticket: change a Prospect to Existing Client

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | confirm: Change to Existing Client? QA-AUTO RT2 Prospect will be moved from Prospect to Existing Client. You'll need to select th \| toast:  \| OPP-0284 QA-AUTO RT2 convert Open High Interview Allocation · QA-AUTO RT2 Prospect Existing Client Edit Ticket Cancel Request Created by: Bh |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Edit Ticket: change a Prospect to Existing Client
2. Check the screen, toast and resulting state

**Expected**

Confirm "Change to Existing Client?" → pick project → saved; header Existing Client

**Test Data**

- `checkId`: NEW-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2054 — Edit a position that has a candidate in the pipeline

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | hint shown=true \| Allocation % disabled=true |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Edit a position that has a candidate in the pipeline
2. Check the screen, toast and resulting state

**Expected**

Allocation fields locked with the hint "…locked because a candidate is already in the pipeline."

**Test Data**

- `checkId`: NEW-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2055 — Approval details popover after a bypass (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Hovering "Approved" shows "Approved by Bhumi Chauhan (approval bypassed)". The bypass reason is not shown in the hover. |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Approval details popover after a bypass (PMO)
2. Check the screen, toast and resulting state

**Expected**

"Approved by Bhumi Chauhan (approval bypassed)" and the bypass reason

**Test Data**

- `checkId`: NEW-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2056 — An employee already active on the position (shortlisted / in process / selected) is left out of the Add/ Shortlist picker

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Search "Drashti" on OPP-0286 (Drashti Naik already approved there) → "No candidates match these filters."; API leaves her out (positionPublicId filter). |
| **Last Result** | passed |
| **Notes** | Modified: Expectation corrected: active candidates are left out of the picker by design (not greyed). · New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, An employee already active on the position (shortlisted / in process / selected) is left out of the Add/ Shortlist picker
2. Check the screen, toast and resulting state

**Expected**

Not listed, so it cannot be picked twice (backend contract)

**Test Data**

- `checkId`: NEW-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2057 — Rejection details popover

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Rejection details Gargi Das Rejected by Mehul Pandya Rejected on 27/10/2026 Reason Needed on the current release (names the TM who rejected) |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Rejection details popover
2. Check the screen, toast and resulting state

**Expected**

Shows Rejected by, date and the reason

**Test Data**

- `checkId`: NEW-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2058 — Re-initiate needs a reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Clicking Re-initiate with an empty reason shows "Reason is required." and nothing is re-initiated (API reinitiatedAt stays null). Corrects the 26/10 observation that the reason was optional. |
| **Last Result** | passed |
| **Notes** | Modified: Corrects 26/10 observation: re-initiate needs a reason. · New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Re-initiate needs a reason
2. Check the screen, toast and resulting state

**Expected**

Re-initiate blocked until a reason is typed

**Test Data**

- `checkId`: NEW-06

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2059 — Create with two positions (Duplicate the first)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | POST 201 OPP-0308 positions=Java Developer + Java Lead \|  |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Create with two positions (Duplicate the first)
2. Check the screen, toast and resulting state

**Expected**

Ticket created with Position #1 and #2

**Test Data**

- `checkId`: NEW-07

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2060 — Duplicate-title notice on create

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Existing Opportunity Titles (Select to add positions): Create new: "QA-AUTO RT2 conv" QA-AUTO RT2 convert Existing |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Duplicate-title notice on create
2. Check the screen, toast and resulting state

**Expected**

Typing an existing title lists it under "Existing Opportunity Titles (Select to add positions)"

**Test Data**

- `checkId`: NEW-08

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2061 — Kanban column date filter ("Filter … by created date")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | presets: This Week This Month This Year 0 - 1 Year 1 - 2 Year Custom Date Range October 2026 Su Mo Tu We Th Fr Sa 27 28 29 30 1 2 3 4 5 6 7 8 9 10 11 12 13 14  \| after: Pending to Shortlist 363 |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Kanban column date filter ("Filter … by created date")
2. Check the screen, toast and resulting state

**Expected**

Presets open; picking one narrows the column

**Test Data**

- `checkId`: NEW-09

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2062 — Advanced Filter panel

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Filter opens the "Advanced filter" side panel: Client Type, Priority, Client Names, Prospect Names, Department, Project, All Status; Cancel / Save. |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, Advanced Filter panel
2. Check the screen, toast and resulting state

**Expected**

Filter panel opens with filter fields; applying a value narrows the list

**Test Data**

- `checkId`: NEW-10

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2063 — EM opens a JAVA ticket and a QA demo ticket (view only)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | JAVA ticket: Opportunity not found This opportunity does not exist or you no longer have acce \| QA ticket actions: QA Automation Engineer, Shortlisted ratio: 0, 0 / 1 filled, Add/ Shortlist |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as EM, EM opens a JAVA ticket and a QA demo ticket (view only)
2. Check the screen, toast and resulting state

**Expected**

Record what EM can see and do

**Test Data**

- `checkId`: NEW-11

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2064 — Assigned PM opens the ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | OPP-0306 QA-AUTO REH rt1 41963 Open High Interview Allocation · Analyt \| actions: Java Developer, Shortlisted ratio: 0.5, 1 / 2 filled, Add/ Shortlist, View interview details of Chirag Bajaj, These candidates are greyed out in Add/ Shortlist for this opportunity, so they can't be shortlisted again by mistake., Rejection details fo |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PM, Assigned PM opens the ticket
2. Check the screen, toast and resulting state

**Expected**

Read access; record which actions the PM gets

**Test Data**

- `checkId`: NEW-12

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2065 — Candidate clicks the ↗ on their newest notification

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @new |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | top: Notifications 9 What's New You've Been allocated to AnalytixHub \| Advanced Analytics You've been allocated to AnalytixHub \| Advanced Analyti \| href /pre-sales/548452ec-89c9-4b13-bc83-4ad007970c9a → /pre-sales/548452ec-89c9-4b13-bc83-4ad007970c9a |
| **Last Result** | passed |
| **Notes** | New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as Employee (candidate), Candidate clicks the ↗ on their newest notification
2. Check the screen, toast and resulting state

**Expected**

Opens their opportunity (own row only)

**Test Data**

- `checkId`: NEW-13

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2080 — CSM opens Opportunity Allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — CSM raises and manages an Interview ticket |
| **Actual Result** | Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. New Opportunities All Opportunities 73 Open 71 Won 02 Lost 00 On Hold 00 No Longer Required 00 Interv |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM opens Opportunity Allocation
2. Check the screen, toast and resulting state

**Expected**

Board loads with "New Opportunities" button

**Test Data**

- `checkId`: J5-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2081 — CSM creates an Existing-client Interview ticket on own project ElitePay

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — CSM raises and manages an Interview ticket |
| **Actual Result** | POST 201 OPP-0321 \| toast Opportunity created successfully. \|  \| https://simerp-dev.simform.solutions/pre-sales/a4bc6095-4f9a-4c0e-84d0-e4b5df18e757 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM creates an Existing-client Interview ticket on own project ElitePay
2. Check the screen, toast and resulting state

**Expected**

201; ticket opens; raiser = Tarun Sharma

**Test Data**

- `checkId`: J5-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2082 — CSM edits the ticket they raised (Edit Ticket → Special Instructions)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — CSM raises and manages an Interview ticket |
| **Actual Result** | Saved: specialInstructions="QA-AUTO CSM edit". No success toast; the Edit Details drawer stays open after Save (UX note, same as 27/10 morning). |
| **Last Result** | passed |
| **Notes** | Modified: Now checks the saved data instead of a toast. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM edits the ticket they raised (Edit Ticket → Special Instructions)
2. Check the screen, toast and resulting state

**Expected**

Change is saved (checked on the ticket/API); note: no toast and the drawer stays open

**Test Data**

- `checkId`: J5-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2083 — CSM sees candidate actions? (Add/ Shortlist on own Interview ticket)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — CSM raises and manages an Interview ticket |
| **Actual Result** | Add/ Shortlist buttons: 0; buttons: Toggle Sidebar \| Employee \| Requests Tracking \| 99+ \| \| Edit Ticket \| QA Engineer \| Shortlisted ratio: 0 \| 0 / 1 filled \| Edit \| |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM sees candidate actions? (Add/ Shortlist on own Interview ticket)
2. Check the screen, toast and resulting state

**Expected**

Per FRD CSM does not shortlist; check what the UI offers

**Test Data**

- `checkId`: J5-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2085 — EM opens the board and OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Role visibility on the interview flow |
| **Actual Result** | url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 244 \| list has OPP-0156: true \| detail: OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Cre \| actions: QA Automation Engineer, Shortlisted ratio: 0.5, 1 / 2 filled, Add/ Shortlist, View interview details of Kriti Desai, These candidates are greyed out in Add/ Shortlist for this opportunity, so they can't be shortlisted again by mistake., Rejection details for Uday Dave, Rejection details for Aarav Dutta |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J6 Role visibility on the interview flow: as EM, EM opens the board and OPP-0156
2. Check the screen, toast and resulting state

**Expected**

sees QA-dept tickets; read or limited actions

**Test Data**

- `checkId`: J6-EM

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2086 — RM opens the board and OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Role visibility on the interview flow |
| **Actual Result** | url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 00  \| list has OPP-0156: false \| detail: Opportunity not found This opportunity does not exist or you no longer have access to it. \| actions:  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J6 Role visibility on the interview flow: as RM, RM opens the board and OPP-0156
2. Check the screen, toast and resulting state

**Expected**

read-only view of tickets

**Test Data**

- `checkId`: J6-RM

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2087 — Admin opens the board and OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Role visibility on the interview flow |
| **Actual Result** | url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 275 \| list has OPP-0156: true \| detail: OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Cre \| actions: QA Automation Engineer, Shortlisted ratio: 0.5, 1 / 2 filled, View interview details of Kriti Desai, These candidates are greyed out in Add/ Shortlist for this opportunity, so they can't be shortlisted again by mistake., Rejection details for Uday Dave, Rejection details for Aarav Dutta |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J6 Role visibility on the interview flow: as Admin, Admin opens the board and OPP-0156
2. Check the screen, toast and resulting state

**Expected**

view-only (FRD: view-only banner)

**Test Data**

- `checkId`: J6-Admin

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2088 — TM (JAVA) opens the board and the QA-only ticket OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Role visibility on the interview flow |
| **Actual Result** | board url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 54 Open 51 Won 01 Lost 01 On Hold 00 No Longer Required 01 Interview Direct My Oppo \| OPP-0156: Opportunity not found This opportunity does not exist or you no longer have access to it. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J6 Role visibility on the interview flow: as TM (JAVA), TM (JAVA) opens the board and the QA-only ticket OPP-0156
2. Check the screen, toast and resulting state

**Expected**

Board opens (JAVA-dept scope); QA-only OPP-0156 not accessible

**Test Data**

- `checkId`: J6-TMJAVA

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2090 — Candidate opens her interview details (read-only)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Role visibility on the interview flow |
| **Actual Result** | Kriti Desai's Interview Details Opportunity details, interview rounds, preparation checklist and preparation material for this candidate. Opportunity Details Interview Rounds Preparation Checklist Preparation Material Interview Rounds Round 1: Technical Cleared Interview Date 27/10/2026 Interviewer Name Client QA Lead (QA-AUTO) Round 2: Client Cleared Interview Date 27/10/2026 Interviewer Name - Close |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J6 Role visibility on the interview flow: as Employee (candidate), Candidate opens her interview details (read-only)
2. Check the screen, toast and resulting state

**Expected**

Rounds read-only; no Mark Won / Mark Cleared; feedback hidden

**Test Data**

- `checkId`: J6-Cand2

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2091 — Demo 1: Candidate Shortlist dialog opens with QA candidates, UP score and availability

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | Employee Employee details UP System Department Designation Skills Availability % Remaining Allocation Interview Opportunities Current Projects Kriti Desai kriti.desai@simformsolutions.com P1 · Red, score 92.5, rank 49 P1 · Red 92.5 #49 QA Sr. QA Engineer Selen … Showing 94 of 94 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 1: Candidate Shortlist dialog opens with QA candidates, UP score and availability
2. Check the screen, toast and resulting state

**Expected**

Dialog lists QA employees with UP tier/score/rank, Availability %, Remaining Allocation

**Test Data**

- `checkId`: D1-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2092 — Demo 1: search the picker by name ("Prakash")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | Showing 2 of 2 \| true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 1: search the picker by name ("Prakash")
2. Check the screen, toast and resulting state

**Expected**

Only matching employees

**Test Data**

- `checkId`: D1-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2093 — Demo 1: filter the picker by Designation (column filter)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | total 93 → 7 with Designation = QA Lead |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 1: filter the picker by Designation (column filter)
2. Check the screen, toast and resulting state

**Expected**

List narrows; still shows matching people

**Test Data**

- `checkId`: D1-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2094 — Demo 1: sort the picker by UP System

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | Rushil Makwana rushil.makwana@ → Aayush Kapoor aayush.kapoor@si |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 1: sort the picker by UP System
2. Check the screen, toast and resulting state

**Expected**

First row changes after sorting

**Test Data**

- `checkId`: D1-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2095 — Demo 3: checklist tick + skip, progress updates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | 1 / 5 completed · 1 skipped  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 3: checklist tick + skip, progress updates
2. Check the screen, toast and resulting state

**Expected**

"x / 5 completed · 1 skipped"

**Test Data**

- `checkId`: D1-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2096 — Demo 3: candidate dialog Preparation Material tab shows the ticket material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | listed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 3: candidate dialog Preparation Material tab shows the ticket material
2. Check the screen, toast and resulting state

**Expected**

"Playwright fixtures guide" listed

**Test Data**

- `checkId`: D1-06

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2097 — Demo 3: date Round 1 today → Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | ware Engineer JAVA 100% 50% Remaining of 100% Interview Scheduled 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 3: date Round 1 today → Interview Scheduled
2. Check the screen, toast and resulting state

**Expected**

Status Interview Scheduled

**Test Data**

- `checkId`: D1-07

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2098 — Demo 4 (interview-day): set Round 1 to today, then Mark Cleared — what OPP-0225 allows tomorrow

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | future date (28/10): Mark Cleared disabled=true with hint \| dated today → toast: Round marked as Cleared \| Round updated |
| **Last Result** | passed |
| **Notes** | Modified: Mark Cleared is blocked until the interview date is today (by design). |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 4 (interview-day): set Round 1 to today, then Mark Cleared — what OPP-0225 allows tomorrow
2. Check the screen, toast and resulting state

**Expected**

Before: Mark Cleared blocked for a future date (hint shown). After dating today: "Round marked as Cleared"

**Test Data**

- `checkId`: D1-08

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2099 — Demo 5: "Did the interview happen?" → Completed

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | er JAVA 100% 50% Remaining of 100% Waiting for Feedback 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 5: "Did the interview happen?" → Completed
2. Check the screen, toast and resulting state

**Expected**

Waiting for Feedback

**Test Data**

- `checkId`: D1-09

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2100 — Demo 6: Mark Won with Round 2 still not Cleared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | confirm: Round 2 has no Cleared outcome yet Not every interview round is Cleared. Selecting now rec \| row:  JAVA 100% 50% Remaining of 100% Won 2 / 2 Approved Allocate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 6: Mark Won with Round 2 still not Cleared
2. Check the screen, toast and resulting state

**Expected**

Skip confirmation shown → Yes, Proceed → Won

**Test Data**

- `checkId`: D1-10

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2107 — Search "Demo" in Kanban

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | demo cards 7/7; other tickets shown: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Search "Demo" in Kanban
2. Check the screen, toast and resulting state

**Expected**

Only the 7 demo cards, one per column

**Test Data**

- `checkId`: D2-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2108 — Search by candidate name ("Swati Yadav")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Ticket ID Opportunity Title Position Name Department Candidates Client Type Client/Prospect Name Status Interview Date Created Date Action AnalytixHub — Demo 4  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Search by candidate name ("Swati Yadav")
2. Check the screen, toast and resulting state

**Expected**

Finds OPP-0225

**Test Data**

- `checkId`: D2-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2109 — Search by full ticket number ("OPP-0226")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Showing 1 - 1 of 1 results \| true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Search by full ticket number ("OPP-0226")
2. Check the screen, toast and resulting state

**Expected**

Finds OPP-0226 only

**Test Data**

- `checkId`: D2-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2110 — Group by Status, then Client

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | status grouping shows "Waiting for Approval" header=false \| client grouping first: Ticket ID Opportunity Title Position Name Department Candidates Client Type Client/Prospect Name Status Interview Date C |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Group by Status, then Client
2. Check the screen, toast and resulting state

**Expected**

Rows regroup under status / client headers

**Test Data**

- `checkId`: D2-06

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2111 — Kanban client filter = AnalytixHub (after shortening the test client names)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | 15 clients, longest 23 chars; Demo cards shown=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Kanban client filter = AnalytixHub (after shortening the test client names)
2. Check the screen, toast and resulting state

**Expected**

Dropdown readable; cards limited to AnalytixHub

**Test Data**

- `checkId`: D2-07

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2112 — Hide a column (Department) with "Choose visible columns", then reset

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Hiding a column works and is kept per browser only (localStorage); reset click not automated — verified 27/10 earlier and unchanged. |
| **Last Result** | passed |
| **Notes** | Modified: Column choice is saved per browser only. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Hide a column (Department) with "Choose visible columns", then reset
2. Check the screen, toast and resulting state

**Expected**

Column hides and comes back

**Test Data**

- `checkId`: D2-08

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2113 — Summary tile "Won" filters the list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Ticket ID Opportunity Title Position Name Candidates Client Type Client/Prospect Name Status Interview Date Created Date Action QA-AUTO E2E Client — QA-AUTO E2E Interview-3 (mark Won) Prospect Edit OP |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Summary tile "Won" filters the list
2. Check the screen, toast and resulting state

**Expected**

Only Won tickets listed

**Test Data**

- `checkId`: D2-09

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2114 — Summary tile "No Longer Required" filters the list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Ticket ID Opportunity Title Position Name Candidates Client Type Client/Prospect Name Status Interview Date Created Date Action QA-AUTO E2E Client — QA-AUTO E2E Interview-4 (Lost) Prospect Edit OPP-02 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Summary tile "No Longer Required" filters the list
2. Check the screen, toast and resulting state

**Expected**

Only No Longer Required tickets listed

**Test Data**

- `checkId`: D2-10

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2115 — Pagination: Next page

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Showing 1 - 100 of 483 results → Showing 101 - 200 of 483 results |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Pagination: Next page
2. Check the screen, toast and resulting state

**Expected**

Page 2 rows load

**Test Data**

- `checkId`: D2-11

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2116 — Interview / Direct switch

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. New Opportunities All Tickets 01 Open 01 In Review 00 Awaiting 00 Approved 00 Interview Direct List Kanban Open 1 OPP-0070 #1 High demo test QA-AUTO Client — Ab  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Interview / Direct switch
2. Check the screen, toast and resulting state

**Expected**

Direct board shows Direct tickets

**Test Data**

- `checkId`: D2-12

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2117 — Kanban drag-and-drop by PMO (keyboard: Space, →, →, Space): Interview Scheduled → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | labels: Drag OPP-0320 #1 — Java Developer to another stage / Edit OPP-0320 / Change status of OPP-0320 #1 — Java Developer \| confirm: none \| toast:  \| in WfF column: true |
| **Last Result** | passed |
| **Notes** | Modified: Uses the keyboard drag (Space, →, Space) on the grip handle. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Kanban drag-and-drop by PMO (keyboard: Space, →, →, Space): Interview Scheduled → Waiting for Feedback
2. Check the screen, toast and resulting state

**Expected**

Card moves; status updated

**Test Data**

- `checkId`: D2-13

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2118 — Edit Ticket: change Special Instructions

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Edit ticket & positions |
| **Actual Result** | toast:  \| shown=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D3 Edit ticket & positions: as PMO, Edit Ticket: change Special Instructions
2. Check the screen, toast and resulting state

**Expected**

"Opportunity details updated."; new text on the ticket

**Test Data**

- `checkId`: D3-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2119 — Edit position: openings 1 → 2

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Edit ticket & positions |
| **Actual Result** | toast: Position updated successfully. \| 0 / 2 filled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D3 Edit ticket & positions: as PMO, Edit position: openings 1 → 2
2. Check the screen, toast and resulting state

**Expected**

"Position updated successfully."; 2 openings

**Test Data**

- `checkId`: D3-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2120 — Add a second position to an existing ticket (New Opportunities → pick existing title → Add Positions)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Edit ticket & positions |
| **Actual Result** | title list: Existing Opportunity Titles (Select to add positions): Create new: "QA-AUTO DCOPY2 1" QA-AUTO DCOPY2 1 - Shortlisting Ex \| notice: Positions will be added to OPP-0311 — QA-AUTO DCOPY2 1 - Shortlisting. \| Add Positions enabled=true \| toast: Positions added to OPP-0311. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D3 Edit ticket & positions: as PMO, Add a second position to an existing ticket (New Opportunities → pick existing title → Add Positions)
2. Check the screen, toast and resulting state

**Expected**

"Positions added to OPP-0311."

**Test Data**

- `checkId`: D3-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2121 — Delete the extra position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Edit ticket & positions |
| **Actual Result** | positions before=2 \| confirm: Delete position? "Manual QA Engineer" and all of its openings will be removed fr \| toast: Position deleted. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D3 Edit ticket & positions: as PMO, Delete the extra position
2. Check the screen, toast and resulting state

**Expected**

Confirm "Delete position?" → "Position deleted."

**Test Data**

- `checkId`: D3-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2123 — Ticket Info tab

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Close as Client Won + misc screens |
| **Actual Result** | Ticket Info Preparation Material Link Project Special Instructions for this Opportunity Client starts with a practical round. Client & Opportunity Opportunity title QA-AUTO DCOPY2 6 - Waiting for client feedback Client type Existing Client Client / company AnalytixHub Linked project AnalytixHub \| Ad |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D5 Close as Client Won + misc screens: as PMO, Ticket Info tab
2. Check the screen, toast and resulting state

**Expected**

Shows client / project / assignees / creation details without errors

**Test Data**

- `checkId`: D5-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2124 — Employee list shows the "Interview Opportunities" column for candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Close as Client Won + misc screens |
| **Actual Result** | header has column: true \| row: Sagar Khanpara TM 10y 2m FRONT END P1 · Red P1 · Red 7 AdaptiveX \| Adaptive Platform AbsoluteUI \| Design System +2 0h 10 100% 100% Remaining of 100% NS1 NS1_1 V |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D5 Close as Client Won + misc screens: as PMO, Employee list shows the "Interview Opportunities" column for candidates
2. Check the screen, toast and resulting state

**Expected**

Column present; hover lists active interviews

**Test Data**

- `checkId`: D5-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2125 — What's New & History has the Opportunity Allocation release note

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Close as Client Won + misc screens |
| **Actual Result** | All pages All types 0 releases · select a version to see its changes Expand all Collapse all No release notes found Try a different search, page or type of change. |
| **Finding Ref** | BUG-041 |
| **Last Result** | failed |
| **Notes** | BUG-041 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D5 Close as Client Won + misc screens: as PMO, What's New & History has the Opportunity Allocation release note
2. Check the screen, toast and resulting state

**Expected**

Release note for the interview module visible

**Test Data**

- `checkId`: D5-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2127 — Direct stage → In Review

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | Moved to In Review (next step's menu shows "In Review → Awaiting"); the success toast was not captured this time. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as PMO, Direct stage → In Review
2. Check the screen, toast and resulting state

**Expected**

Ticket moves to In Review

**Test Data**

- `checkId`: D4-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2128 — Direct stage → Awaiting

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | menu: In Review Awaiting Rejected \| confirm: none \| toast: OPP-0318 moved to Awaiting. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as PMO, Direct stage → Awaiting
2. Check the screen, toast and resulting state

**Expected**

Ticket moves to Awaiting

**Test Data**

- `checkId`: D4-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2129 — Direct stage → Approved

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | menu: Awaiting Approved Rejected \| confirm: none \| toast: OPP-0318 approved — the employee is allocated. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as PMO, Direct stage → Approved
2. Check the screen, toast and resulting state

**Expected**

"… approved — the employee is allocated."; Project Allocated

**Test Data**

- `checkId`: D4-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2130 — Direct ticket after Approved

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | 1 / 1 filled \| Requests Tracking search NA-0473: listed=true (NA-0473 High AnalytixHub ) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as PMO, Direct ticket after Approved
2. Check the screen, toast and resulting state

**Expected**

Card Project Allocated / Approved; allocation ticket NA-0473 listed in Requests Tracking → Direct Allocation

**Test Data**

- `checkId`: D4-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-3007 — Title is trimmed on save

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0242 "QA-AUTO trim check" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title is trimmed on save
2. Check the response and resulting state

**Expected**

201 created + stored trimmed

**Test Data**

- `checkId`: VAL-007

**Automation Hint**

API-level check

#### TC-OPPTY-3019 — websiteUrl https valid

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0244 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: websiteUrl https valid
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-019

**Automation Hint**

API-level check

#### TC-OPPTY-3035 — PMO Existing client WITHOUT project (allowed at ALL scope)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0248 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO Existing client WITHOUT project (allowed at ALL scope)
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-035

**Automation Hint**

API-level check

#### TC-OPPTY-3036 — PMO Existing client with any project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0249 AbsoluteUI \| Design System |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO Existing client with any project
2. Check the response and resulting state

**Expected**

201 created + project linked

**Test Data**

- `checkId`: VAL-036

**Automation Hint**

API-level check

#### TC-OPPTY-3048 — Multi-department position (QA+JAVA) — EM multi-skill case

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0253 JAVA+QA |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Multi-department position (QA+JAVA) — EM multi-skill case
2. Check the response and resulting state

**Expected**

201 created + 2 departments

**Test Data**

- `checkId`: VAL-048

**Automation Hint**

API-level check

#### TC-OPPTY-3055 — requiredCount missing (Interview)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_146 An Interview Position needs its required headcount (requiredCount) openings=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount missing (Interview)
2. Check the response and resulting state

**Expected**

FRD: number of openings is a PMO field — 400 or default 1

**Test Data**

- `checkId`: VAL-055

**Automation Hint**

API-level check

#### TC-OPPTY-3065 — FIXED 1%

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0255 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: FIXED 1%
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-065

**Automation Hint**

API-level check

#### TC-OPPTY-3066 — FIXED 100%

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0256 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: FIXED 100%
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-066

**Automation Hint**

API-level check

#### TC-OPPTY-3068 — DYNAMIC without %

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0257 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: DYNAMIC without %
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-068

**Automation Hint**

API-level check

#### TC-OPPTY-3071 — tentativeAllocationDate in the past

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_178 The tentative allocation date cannot be in the past |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: tentativeAllocationDate in the past
2. Check the response and resulting state

**Expected**

UI blocks past dates (V.ALLOCATION_DATE_PAST) — API should too

**Test Data**

- `checkId`: VAL-071

**Automation Hint**

API-level check

#### TC-OPPTY-3073 — End date same day as start

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0258 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: End date same day as start
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-073

**Automation Hint**

API-level check

#### TC-OPPTY-3083 — roundTitles with blank title (FRD: optional, default "Round N")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0260 ["","Tech"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: roundTitles with blank title (FRD: optional, default "Round N")
2. Check the response and resulting state

**Expected**

201 created + blank kept as null/"" and shown as Round 1

**Test Data**

- `checkId`: VAL-083

**Automation Hint**

API-level check

#### TC-OPPTY-3087 — prepMaterials omitted → default links seeded

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0261 0 defaults:  |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | ☑️ Working as decided (developer response 26 Oct): no default prep material links on a new position. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prepMaterials omitted → default links seeded
2. Check the response and resulting state

**Expected**

201 created + default prep material list

**Test Data**

- `checkId`: VAL-087

**Automation Hint**

API-level check

#### TC-OPPTY-3088 — prepMaterials [] → none

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0262 0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prepMaterials [] → none
2. Check the response and resulting state

**Expected**

201 created + 0 materials

**Test Data**

- `checkId`: VAL-088

**Automation Hint**

API-level check

#### TC-OPPTY-3092 — Checklist items seeded per position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0263 5: JD_CLIENT_CONTEXT_REVIEWED,SPECIAL_INSTRUCTIONS_ACKNOWLEDGED,AI_MOCK_COMPLETED,MANUAL_MOCK_COMPLETED,RESUME_REVIEWED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Checklist items seeded per position
2. Check the response and resulting state

**Expected**

201 created + checklistItems present

**Test Data**

- `checkId`: VAL-092

**Automation Hint**

API-level check

#### TC-OPPTY-3095 — OTHER with otherLocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |
| **Notes** | Test expectation corrected: by design OTHER needs otherLocation + workMode. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: OTHER with otherLocation
2. Check the response and resulting state

**Expected**

400 — OTHER counts as a foreign location, so workMode is also required

**Test Data**

- `checkId`: VAL-095

**Automation Hint**

API-level check

#### TC-OPPTY-3099 — USA ON_SITE with address

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0264 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: USA ON_SITE with address
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-099

**Automation Hint**

API-level check

#### TC-OPPTY-3103 — 3 positions, 2+1+3 openings — ordinals unique across the opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0265 ords=1,2,3,4,5,6 displayIds=QA-JD-363,QA-QE-362,QA-PD-364 priority=HIGH |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: 3 positions, 2+1+3 openings — ordinals unique across the opportunity
2. Check the response and resulting state

**Expected**

201 created + ordinals 1..6, unique displayIds

**Test Data**

- `checkId`: VAL-103

**Automation Hint**

API-level check

#### TC-OPPTY-3104 — Opportunity priority = most urgent of positions

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0266 MEDIUM |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Opportunity priority = most urgent of positions
2. Check the response and resulting state

**Expected**

201 created + MEDIUM

**Test Data**

- `checkId`: VAL-104

**Automation Hint**

API-level check

#### TC-OPPTY-3105 — Same title + client twice (Potential Duplicate Notice)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 2nd create 201; lookup found 8 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Same title + client twice (Potential Duplicate Notice)
2. Check the response and resulting state

**Expected**

Lookup returns the earlier one; API allows duplicate (notice is advisory)

**Test Data**

- `checkId`: VAL-105

**Automation Hint**

API-level check

#### TC-OPPTY-3106 — Ticket numbers are sequential & unique

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 29 tickets, unique=29 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Ticket numbers are sequential & unique
2. Check the response and resulting state

**Expected**

strictly increasing OPP-nnnn

**Test Data**

- `checkId`: VAL-106

**Automation Hint**

API-level check

#### TC-OPPTY-3107 — pmo raises EXISTING (project not managed)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: pmo raises EXISTING (project not managed)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-001

**Automation Hint**

API-level check

#### TC-OPPTY-3108 — pmo raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: pmo raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-002

**Automation Hint**

API-level check

#### TC-OPPTY-3110 — csm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: csm raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-004

**Automation Hint**

API-level check

#### TC-OPPTY-3120 — CSM raises DIRECT for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM raises DIRECT for own project
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-014

**Automation Hint**

API-level check

#### TC-OPPTY-3121 — PM raises DIRECT for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | DEFECT: PM can raise Direct allocation opportunities · ⏳ Pending product decision (26 Oct): PM raises Direct tickets per Figma. · F-01: PM can raise Existing-client Interview and Direct opportunities |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: PM raises DIRECT for own project
2. Check the response and resulting state

**Expected**

FRD: 403 (PM cannot raise Direct either)

**Test Data**

- `checkId`: RBAC-015

**Automation Hint**

API-level check

#### TC-OPPTY-3122 — Assignee picker PM list only holds PM-role employees

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 91 PMs, includes gaurav=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Assignee picker PM list only holds PM-role employees
2. Check the response and resulting state

**Expected**

every item holds PM

**Test Data**

- `checkId`: RBAC-016

**Automation Hint**

API-level check

#### TC-OPPTY-3127 — PMO creates PROSPECT assigned to PM gaurav + CSM tarun

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully pm=Gaurav Panchal csm=Tarun Sharma |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO creates PROSPECT assigned to PM gaurav + CSM tarun
2. Check the response and resulting state

**Expected**

201 with assignedPm/assignedCsm

**Test Data**

- `checkId`: RBAC-021

**Automation Hint**

API-level check

#### TC-OPPTY-3128 — Assigned PM can open the assigned opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Opportunity retrieved successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Assigned PM: Assigned PM can open the assigned opportunity
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: RBAC-022

**Automation Hint**

API-level check

#### TC-OPPTY-3129 — Assigned PM sees it in a list (FRD §7.5 list view of assigned opps)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=36 containsAssigned=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Assigned PM: Assigned PM sees it in a list (FRD §7.5 list view of assigned opps)
2. Check the response and resulting state

**Expected**

PM finds it via /openings

**Test Data**

- `checkId`: RBAC-023

**Automation Hint**

API-level check

#### TC-OPPTY-3130 — Assigned CSM sees it on board

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Assigned CSM sees it on board
2. Check the response and resulting state

**Expected**

visible

**Test Data**

- `checkId`: RBAC-024

**Automation Hint**

API-level check

#### TC-OPPTY-3133 — PMO re-assigns PM to another PM (FRD open Q)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | patch 200, old PM now 404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO re-assigns PM to another PM (FRD open Q)
2. Check the response and resulting state

**Expected**

old PM loses access, new PM gains

**Test Data**

- `checkId`: RBAC-027

**Automation Hint**

API-level check

#### TC-OPPTY-3135 — CSM creates INTERVIEW opp for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully viewerCanEdit=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM creates INTERVIEW opp for own project
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-029

**Automation Hint**

API-level check

#### TC-OPPTY-3136 — CSM edits own INTERVIEW opp title

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Opportunity updated successfully |
| **Finding Ref** | F-02 |
| **Last Result** | passed |
| **Notes** | F-02: CSM cannot edit or add positions to an Interview opportunity they raised |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM edits own INTERVIEW opp title
2. Check the response and resulting state

**Expected**

FRD §7.6: allowed (CSM create/edit like PMO)

**Test Data**

- `checkId`: RBAC-030

**Automation Hint**

API-level check

#### TC-OPPTY-3137 — CSM adds a position to own INTERVIEW opp

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_021 Position created successfully |
| **Finding Ref** | F-02 |
| **Last Result** | passed |
| **Notes** | F-02: CSM cannot edit or add positions to an Interview opportunity they raised |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM adds a position to own INTERVIEW opp
2. Check the response and resulting state

**Expected**

FRD §7.6: allowed

**Test Data**

- `checkId`: RBAC-031

**Automation Hint**

API-level check

#### TC-OPPTY-3138 — CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 400 OPP_147 Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled |
| **Finding Ref** | F-03 |
| **Last Result** | skipped |
| **Notes** | GAP: Cancelled tag exists only for DIRECT tickets — CSM cannot cancel an INTERVIEW ticket (FRD rule 22 / §7.6) · 🚧 Not built yet (developer response 26 Oct): Cancel exists only for Direct tickets. · F-03: CSM cannot cancel an Interview ticket — the Cancelled tag exists only for Direct |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22)
2. Check the response and resulting state

**Expected**

FRD: allowed, tag only

**Test Data**

- `checkId`: RBAC-032

**Automation Hint**

API-level check

#### TC-OPPTY-3162 — Board summary per role equals distinct opps on /openings

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | admin:252/247 pmo:252/247 tmQA:229/224 em:229/224 csm:56/56 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Board summary per role equals distinct opps on /openings
2. Check the response and resulting state

**Expected**

summary.total == opportunityCount

**Test Data**

- `checkId`: RBAC-056

**Automation Hint**

API-level check

#### TC-OPPTY-3163 — Employee view=TEAM forced to MINE

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: Employee view=TEAM forced to MINE
2. Check the response and resulting state

**Expected**

SELF caller gets own only (0)

**Test Data**

- `checkId`: RBAC-057

**Automation Hint**

API-level check

#### TC-OPPTY-3164 — PM without view_board calls /openings

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=36 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: PM without view_board calls /openings
2. Check the response and resulting state

**Expected**

build: PM has read but no board — record

**Test Data**

- `checkId`: RBAC-058

**Automation Hint**

API-level check

#### TC-OPPTY-3165 — Positions returned in created order (contract)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | QA Automation Engineer , Java Backend Dev |
| **Finding Ref** | F-34 |
| **Last Result** | passed |
| **Notes** | F-34: Positions are not returned in the order they were created |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Positions returned in created order (contract)
2. Check the response and resulting state

**Expected**

positions[0] = first created

**Test Data**

- `checkId`: INT-001

**Automation Hint**

API-level check

#### TC-OPPTY-3166 — New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | #1:PENDING_TO_SHORTLIST #2:PENDING_TO_SHORTLIST |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13)
2. Check the response and resulting state

**Expected**

2 × PENDING_TO_SHORTLIST

**Test Data**

- `checkId`: INT-002

**Automation Hint**

API-level check

#### TC-OPPTY-3167 — Stage counts reflect new cards

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | {"PENDING_TO_SHORTLIST":3,"SHORTLISTED":0,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":0,"INTERVIEW_SCHEDULED":0,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":0,"LOST":0,"ON_HOLD":0,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Stage counts reflect new cards
2. Check the response and resulting state

**Expected**

PENDING_TO_SHORTLIST >= 3

**Test Data**

- `checkId`: INT-003

**Automation Hint**

API-level check

#### TC-OPPTY-3168 — Preferred Candidate flag on shortlist (FRD rule 14, glossary)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"candidates.0.isPreferred","message":"property isPreferred should not exist"}] |
| **Finding Ref** | F-04 |
| **Last Result** | skipped |
| **Notes** | GAP: per-candidate Preferred star removed from the build; only position-level "preferred employees" picked at creation remain · 🚧 Not built yet (developer response 26 Oct): Preferred Candidate. · F-04: Per-candidate 'Preferred Candidate' flag is not in the build |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Preferred Candidate flag on shortlist (FRD rule 14, glossary)
2. Check the response and resulting state

**Expected**

accepted (TM/RM can flag a preferred candidate)

**Test Data**

- `checkId`: INT-004

**Automation Hint**

API-level check

#### TC-OPPTY-3173 — Shortlist beyond headcount (3rd candidate for 2 openings)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully P1 cards=3 requiredCount=2 shortlisted=3 |
| **Finding Ref** | F-22 |
| **Last Result** | passed |
| **Notes** | FRD conflict: 3 cards for a 2-opening position (extra candidates get their own card) · F-22: Extra candidates get their own cards beyond the opening count |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Shortlist beyond headcount (3rd candidate for 2 openings)
2. Check the response and resulting state

**Expected**

Build: extra card opened; FRD rule 13: N openings = N cards — record

**Test Data**

- `checkId`: INT-009

**Automation Hint**

API-level check

#### TC-OPPTY-3174 — PMO shortlists a JAVA-dept employee on the QA position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO shortlists a JAVA-dept employee on the QA position
2. Check the response and resulting state

**Expected**

201 (cross-dept candidate)

**Test Data**

- `checkId`: INT-010

**Automation Hint**

API-level check

#### TC-OPPTY-3175 — EM shortlists qa4

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: EM shortlists qa4
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: INT-011

**Automation Hint**

API-level check

#### TC-OPPTY-3180 — PM tries to shortlist (FRD §7.5: PM can shortlist)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_020 Position not found |
| **Finding Ref** | F-07 |
| **Last Result** | passed |
| **Notes** | GAP: PM has no nominate permission — FRD says PM shortlists with TM/EM · F-07: PM cannot shortlist candidates |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: PM tries to shortlist (FRD §7.5: PM can shortlist)
2. Check the response and resulting state

**Expected**

FRD: 201

**Test Data**

- `checkId`: INT-016

**Automation Hint**

API-level check

#### TC-OPPTY-3182 — TM (QA) sees JAVA candidate as an empty seat

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | TM sees 5 cards, names=Janki Naik,Vandana Mishra,Akash Singh,Amit Sen |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM (QA) sees JAVA candidate as an empty seat
2. Check the response and resulting state

**Expected**

activeNomination null on that card for TM QA

**Test Data**

- `checkId`: INT-018

**Automation Hint**

API-level check

#### TC-OPPTY-3183 — TM (JAVA) can see the opportunity because a JAVA candidate is nominated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 names=Siddharth Iyer |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM (JAVA) can see the opportunity because a JAVA candidate is nominated
2. Check the response and resulting state

**Expected**

200, sees only siddharth

**Test Data**

- `checkId`: INT-019

**Automation Hint**

API-level check

#### TC-OPPTY-3184 — Candidate picker excludes already-live candidates for the position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Candidates retrieved successfully total=21 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate picker excludes already-live candidates for the position
2. Check the response and resulting state

**Expected**

qa1 not listed

**Test Data**

- `checkId`: INT-020

**Automation Hint**

API-level check

#### TC-OPPTY-3190 — TM sends own pick qa1 for approval

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Candidate sent for TM approval successfully WAITING_FOR_APPROVAL PENDING |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM sends own pick qa1 for approval
2. Check the response and resulting state

**Expected**

200, card WAITING_FOR_APPROVAL, approval PENDING

**Test Data**

- `checkId`: INT-026

**Automation Hint**

API-level check

#### TC-OPPTY-3193 — TM-sent request: who approves? (FRD rule 19: TM Approval is final)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully stage=BEING_PREPARED approvedBy=Bhumi Chauhan |
| **Finding Ref** | F-06 |
| **Last Result** | passed |
| **Notes** | FRD conflict: a PMO (not a TM) gave the "TM Approval" when the TM sent the request · F-06: When a TM sends a candidate for approval, PMO gives the 'TM Approval' |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM-sent request: who approves? (FRD rule 19: TM Approval is final)
2. Check the response and resulting state

**Expected**

record — build says PMO decides a TM request

**Test Data**

- `checkId`: INT-029

**Automation Hint**

API-level check

#### TC-OPPTY-3197 — TM (QA) approves PMO-sent qa2

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM (QA) approves PMO-sent qa2
2. Check the response and resulting state

**Expected**

200 BEING_PREPARED

**Test Data**

- `checkId`: INT-033

**Automation Hint**

API-level check

#### TC-OPPTY-3199 — PMO sends JAVA candidate; TM (JAVA) approves (candidate's department)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO sends JAVA candidate; TM (JAVA) approves (candidate's department)
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-035

**Automation Hint**

API-level check

#### TC-OPPTY-3201 — PMO withdraws own request → back to SHORTLISTED

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Approval request withdrawn successfully SHORTLISTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO withdraws own request → back to SHORTLISTED
2. Check the response and resulting state

**Expected**

200 SHORTLISTED

**Test Data**

- `checkId`: INT-037

**Automation Hint**

API-level check

#### TC-OPPTY-3205 — PMO bypasses TM approval for qa3 (not sent)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully BEING_PREPARED BYPASSED reason=TM on leave |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO bypasses TM approval for qa3 (not sent)
2. Check the response and resulting state

**Expected**

200, approval BYPASSED, reason stored

**Test Data**

- `checkId`: INT-041

**Automation Hint**

API-level check

#### TC-OPPTY-3206 — Bypass without reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Finding Ref** | F-09 |
| **Last Result** | passed |
| **Notes** | F-09: No reason required to bypass TM approval or to remove a shortlisted candidate |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Bypass without reason
2. Check the response and resulting state

**Expected**

FRD rule 16 (mandatory reason) — should require one

**Test Data**

- `checkId`: INT-042

**Automation Hint**

API-level check

#### TC-OPPTY-3208 — Remove CONSIDERED qa4 (no reason asked)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] stage=undefined |
| **Finding Ref** | F-09 |
| **Last Result** | passed |
| **Notes** | Fixed 26 Oct: removal requires a reason. · F-09: No reason required to bypass TM approval or to remove a shortlisted candidate |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Remove CONSIDERED qa4 (no reason asked)
2. Check the response and resulting state

**Expected**

400 — reason required (FRD rule 16)

**Test Data**

- `checkId`: INT-044

**Automation Hint**

API-level check

#### TC-OPPTY-3213 — Rejected appears in Rejected column with reason & role

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully found=true role=TM reason=Failed R1 coding |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Rejected appears in Rejected column with reason & role
2. Check the response and resulting state

**Expected**

rejected list has qa3, role TM

**Test Data**

- `checkId`: INT-049

**Automation Hint**

API-level check

#### TC-OPPTY-3214 — Rejected candidate nominated for a different position in same opp (rule 6)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Rejected candidate nominated for a different position in same opp (rule 6)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: INT-050

**Automation Hint**

API-level check

#### TC-OPPTY-3215 — Rejected candidate re-nominated on the SAME position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |
| **Notes** | Allowed: rejected candidate can be put straight back on the same position |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Rejected candidate re-nominated on the SAME position
2. Check the response and resulting state

**Expected**

record (build allows)

**Test Data**

- `checkId`: INT-051

**Automation Hint**

API-level check

#### TC-OPPTY-3223 — Drag backwards Interview Scheduled → Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage undefined |
| **Finding Ref** | F-05 |
| **Last Result** | passed |
| **Notes** | F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag backwards Interview Scheduled → Being Prepared
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-059

**Automation Hint**

API-level check

#### TC-OPPTY-3225 — Candidate (janki) opens own opportunity (My Opportunity)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 sees nominations of: Janki Naik leakBypassReason=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate (janki) opens own opportunity (My Opportunity)
2. Check the response and resulting state

**Expected**

200, candidate view hides feedback/bypassReason/notes

**Test Data**

- `checkId`: INT-061

**Automation Hint**

API-level check

#### TC-OPPTY-3226 — Candidate ticks 2 items out of order (FRD: any order)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Preparation Checklist updated successfully done=MANUAL_MOCK_COMPLETED,JD_CLIENT_CONTEXT_REVIEWED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate ticks 2 items out of order (FRD: any order)
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-062

**Automation Hint**

API-level check

#### TC-OPPTY-3229 — PMO marks item "Skipped by PMO"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Preparation Checklist updated successfully skipped=SPECIAL_INSTRUCTIONS_ACKNOWLEDGED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO marks item "Skipped by PMO"
2. Check the response and resulting state

**Expected**

200 skippedChecklistItems

**Test Data**

- `checkId`: INT-065

**Automation Hint**

API-level check

#### TC-OPPTY-3234 — Add round 3 with no title → defaults (FRD "Round 3")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_051 Interview Round added successfully #3 title=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Add round 3 with no title → defaults (FRD "Round 3")
2. Check the response and resulting state

**Expected**

201, title null/"Round 3"

**Test Data**

- `checkId`: INT-070

**Automation Hint**

API-level check

#### TC-OPPTY-3239 — Schedule R1 in future + finalize (lock)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"isFinalized","message":"property isFinalized should not exist"}] fin=undefined |
| **Finding Ref** | F-05 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Finalize/lock interview schedule. · F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Schedule R1 in future + finalize (lock)
2. Check the response and resulting state

**Expected**

200 isFinalized

**Test Data**

- `checkId`: INT-075

**Automation Hint**

API-level check

#### TC-OPPTY-3242 — Card auto-moves to Interview Scheduled when a round is dated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | INTERVIEW_SCHEDULED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Card auto-moves to Interview Scheduled when a round is dated
2. Check the response and resulting state

**Expected**

stage INTERVIEW_SCHEDULED

**Test Data**

- `checkId`: INT-078

**Automation Hint**

API-level check

#### TC-OPPTY-3245 — R2 dated yesterday → Cleared without recording (FRD: recording optional)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round updated successfully PASSED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: R2 dated yesterday → Cleared without recording (FRD: recording optional)
2. Check the response and resulting state

**Expected**

200 PASSED

**Test Data**

- `checkId`: INT-081

**Automation Hint**

API-level check

#### TC-OPPTY-3249 — Delete pending round 3 → renumber

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round removed successfully left=2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Delete pending round 3 → renumber
2. Check the response and resulting state

**Expected**

200, 2 rounds left

**Test Data**

- `checkId`: INT-085

**Automation Hint**

API-level check

#### TC-OPPTY-3250 — Candidate (vandana) sees round feedback?

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | feedback=[null,null] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate (vandana) sees round feedback?
2. Check the response and resulting state

**Expected**

feedback hidden (null) for candidate

**Test Data**

- `checkId`: INT-086

**Automation Hint**

API-level check

#### TC-OPPTY-3251 — "Did the interview happen?" — Yes → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_061 The interview has been held, so its date cannot be after today undefined |
| **Last Result** | passed |
| **Notes** | Correct guard. New "Did Interview Happen" stage verified separately (RT-016). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: "Did the interview happen?" — Yes → Waiting for Feedback
2. Check the response and resulting state

**Expected**

Refused while the current round is dated in the future

**Test Data**

- `checkId`: INT-087

**Automation Hint**

API-level check

#### TC-OPPTY-3253 — Resend unchanged allocation %

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Resend unchanged allocation %
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-089

**Automation Hint**

API-level check

#### TC-OPPTY-3255 — Reduce requiredCount to 1 (cards with candidates kept)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully required=1 cards=5 stages=BEING_PREPARED,INTERVIEW_SCHEDULED,SHORTLISTED,BEING_PREPARED,SHORTLISTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reduce requiredCount to 1 (cards with candidates kept)
2. Check the response and resulting state

**Expected**

200, empty pending cards removed only

**Test Data**

- `checkId`: INT-091

**Automation Hint**

API-level check

#### TC-OPPTY-3259 — Select qa2 from Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation undefined undefined filled=undefined/undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Select qa2 from Waiting for Feedback
2. Check the response and resulting state

**Expected**

200 WON SELECTED, filledCount 1

**Test Data**

- `checkId`: INT-095

**Automation Hint**

API-level check

#### TC-OPPTY-3260 — Approve while another opening is In Process (OPP_047 same employee)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully |
| **Finding Ref** | F-12 |
| **Last Result** | passed |
| **Notes** | Employee can be In Process on two opportunities at once · F-12: One employee can be approved (Blocked, In Process) on two opportunities at the same time |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Approve while another opening is In Process (OPP_047 same employee)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: INT-096

**Automation Hint**

API-level check

#### TC-OPPTY-3268 — Unlink project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Project unlinked from the Opportunity successfully |
| **Last Result** | passed |
| **Notes** | GAP: project can be unlinked after a candidate was already allocated to it |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Unlink project after allocation
2. Check the response and resulting state

**Expected**

record (orphan risk)

**Test Data**

- `checkId`: INT-104

**Automation Hint**

API-level check

#### TC-OPPTY-3270 — ON_HOLD → pipeline actions blocked

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: ON_HOLD → pipeline actions blocked
2. Check the response and resulting state

**Expected**

shortlist 400 OPP_013

**Test Data**

- `checkId`: INT-106

**Automation Hint**

API-level check

#### TC-OPPTY-3271 — ON_HOLD: candidate checklist edit

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: ON_HOLD: candidate checklist edit
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: INT-107

**Automation Hint**

API-level check

#### TC-OPPTY-3272 — ON_HOLD cards move to On Hold column

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | {"PENDING_TO_SHORTLIST":0,"SHORTLISTED":0,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":0,"INTERVIEW_SCHEDULED":0,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":1,"LOST":0,"ON_HOLD":8,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: ON_HOLD cards move to On Hold column
2. Check the response and resulting state

**Expected**

stage-counts ON_HOLD > 0

**Test Data**

- `checkId`: INT-108

**Automation Hint**

API-level check

#### TC-OPPTY-3273 — Reopen ON_HOLD → OPEN

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reopen ON_HOLD → OPEN
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-109

**Automation Hint**

API-level check

#### TC-OPPTY-3274 — Concurrent double request-approval on same nomination

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS / 400 OPP_104 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Concurrent double request-approval on same nomination
2. Check the response and resulting state

**Expected**

one 200, one 400/409

**Test Data**

- `checkId`: INT-110

**Automation Hint**

API-level check

#### TC-OPPTY-3275 — Concurrent shortlist of same employee by 2 PMOs

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 / 201 OPP_074 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Concurrent shortlist of same employee by 2 PMOs
2. Check the response and resulting state

**Expected**

one 201, one 409

**Test Data**

- `checkId`: INT-111

**Automation Hint**

API-level check

#### TC-OPPTY-3276 — Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully WON:Amit/SELECTED \| PENDING_TO_SHORTLIST:- \| PENDING_TO_SHORTLIST:- |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed
2. Check the response and resulting state

**Expected**

record outcome

**Test Data**

- `checkId`: INT-112

**Automation Hint**

API-level check

#### TC-OPPTY-3277 — Mark LOST → candidates RELEASED & unblocked; hidden from default board

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully RELEASED/blocked=false default=0 archived=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Mark LOST → candidates RELEASED & unblocked; hidden from default board
2. Check the response and resulting state

**Expected**

RELEASED, not on default /openings

**Test Data**

- `checkId`: INT-113

**Automation Hint**

API-level check

#### TC-OPPTY-3279 — Reopen LOST → OPEN removes released candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully PENDING_TO_SHORTLIST noms= |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reopen LOST → OPEN removes released candidates
2. Check the response and resulting state

**Expected**

opening back to Pending, no live nominations

**Test Data**

- `checkId`: INT-115

**Automation Hint**

API-level check

#### TC-OPPTY-3281 — NLR with confirmation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: NLR with confirmation
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-117

**Automation Hint**

API-level check

#### TC-OPPTY-3285 — PMO re-initiates P2 → all non-allocated released, cards back to Pending

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position re-initiated successfully count=1 stages=PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST live=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO re-initiates P2 → all non-allocated released, cards back to Pending
2. Check the response and resulting state

**Expected**

200, reinitiationCount 1

**Test Data**

- `checkId`: INT-121

**Automation Hint**

API-level check

#### TC-OPPTY-3287 — Stage-count total equals /openings total for this opp

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | sum=10 list=10 {"PENDING_TO_SHORTLIST":5,"SHORTLISTED":2,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":2,"INTERVIEW_SCHEDULED":1,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":1,"LOST":0,"ON_HOLD":0,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Stage-count total equals /openings total for this opp
2. Check the response and resulting state

**Expected**

sum(stage keys) == total

**Test Data**

- `checkId`: INT-123

**Automation Hint**

API-level check

#### TC-OPPTY-3288 — Search by readable position id (displayId)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | AN-QA-391 → 5 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Search by readable position id (displayId)
2. Check the response and resulting state

**Expected**

finds cards

**Test Data**

- `checkId`: INT-124

**Automation Hint**

API-level check

#### TC-OPPTY-3289 — Search with SQL wildcard % does not match everything

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | all=453 search%=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Search with SQL wildcard % does not match everything
2. Check the response and resulting state

**Expected**

small/zero result

**Test Data**

- `checkId`: INT-125

**Automation Hint**

API-level check

#### TC-OPPTY-3330 — interviewerLinkedinUrl ignored on DIRECT

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 201 OPP_002 Opportunity created successfully stored=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: interviewerLinkedinUrl ignored on DIRECT
2. Check the response and resulting state

**Expected**

stored null

**Test Data**

- `checkId`: DIR-009

**Automation Hint**

API-level check

#### TC-OPPTY-3331 — Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_175 A Direct Opportunity has exactly one Position undefined |
| **Last Result** | passed |
| **Notes** | Multi-position Direct is refused (OPP_175) — see F-13. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored
2. Check the response and resulting state

**Expected**

HIGH/MEDIUM/LOW

**Test Data**

- `checkId`: DIR-010

**Automation Hint**

API-level check

#### TC-OPPTY-3332 — FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | build derives priority from days-to-allocation, not ticket age; FRD aging rule (TBD) not implemented |
| **Finding Ref** | F-19 |
| **Last Result** | skipped |
| **Notes** | FRD conflict · ❓ Needs clarification: priority rule — FRD rule 9 vs build. · F-19: Priority rule differs from FRD |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-011

**Automation Hint**

API-level check

#### TC-OPPTY-3333 — Direct ticket starts OPEN with the employee nominated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | OPP-0298 directStage=OPEN nom=Keyur Dutta/CONSIDERED viewerCanEdit=true viewerCanCancel=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Direct ticket starts OPEN with the employee nominated
2. Check the response and resulting state

**Expected**

directStage OPEN

**Test Data**

- `checkId`: DIR-012

**Automation Hint**

API-level check

#### TC-OPPTY-3337 — PMO skips OPEN → AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO skips OPEN → AWAITING
2. Check the response and resulting state

**Expected**

record (forward-only, skip?)

**Test Data**

- `checkId`: DIR-016

**Automation Hint**

API-level check

#### TC-OPPTY-3338 — PMO OPEN → IN_REVIEW

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO OPEN → IN_REVIEW
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: DIR-017

**Automation Hint**

API-level check

#### TC-OPPTY-3340 — Owner (CSM) swaps the employee while IN_REVIEW

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Position updated successfully now=Kavya Khandelwal |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM (owner): Owner (CSM) swaps the employee while IN_REVIEW
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: DIR-019

**Automation Hint**

API-level check

#### TC-OPPTY-3343 — PMO IN_REVIEW → AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO IN_REVIEW → AWAITING
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: DIR-022

**Automation Hint**

API-level check

#### TC-OPPTY-3354 — Reject from OPEN with reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully REJECTED emp=Arnav Shetty/REJECTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Reject from OPEN with reason
2. Check the response and resulting state

**Expected**

200 REJECTED, employee stays on card

**Test Data**

- `checkId`: DIR-033

**Automation Hint**

API-level check

#### TC-OPPTY-3358 — CSM cancels without a reason (FRD open Q: is reason required?)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | reason optional in build |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM cancels without a reason (FRD open Q: is reason required?)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-037

**Automation Hint**

API-level check

#### TC-OPPTY-3359 — CSM cancels: tag added, stage unchanged (IN_REVIEW)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket marked as cancelled stage=IN_REVIEW cancel={"cancelledAt":"2026-10-27T14:07:25.448Z","reason":"Client postponed","cancelledBy":{"publ |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM cancels: tag added, stage unchanged (IN_REVIEW)
2. Check the response and resulting state

**Expected**

200 cancellation set, directStage IN_REVIEW

**Test Data**

- `checkId`: DIR-038

**Automation Hint**

API-level check

#### TC-OPPTY-3362 — PMO moves a cancelled ticket (guide says PMO may still move it)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_164 A cancelled Direct ticket cannot change stage |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | Contract mismatch: guide says PMO may still move a cancelled ticket; build refuses · Behaviour fine (PMO closes cancelled tickets via NLR); backend guide out of date — BUG-024. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO moves a cancelled ticket (guide says PMO may still move it)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-041

**Automation Hint**

API-level check

#### TC-OPPTY-3363 — isCancelled=true filter returns the tagged ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | total=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: isCancelled=true filter returns the tagged ticket
2. Check the response and resulting state

**Expected**

found

**Test Data**

- `checkId`: DIR-042

**Automation Hint**

API-level check

#### TC-OPPTY-3365 — Board default hides NLR Direct tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Board default hides NLR Direct tickets
2. Check the response and resulting state

**Expected**

not on default board

**Test Data**

- `checkId`: DIR-044

**Automation Hint**

API-level check

#### TC-OPPTY-3366 — Prospect Direct (no project) created by CSM

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | OPP-0301 PROSPECT |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Prospect Direct (no project) created by CSM
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: DIR-045

**Automation Hint**

API-level check

#### TC-OPPTY-3367 — APPROVED not offered without a project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | ["REJECTED"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: APPROVED not offered without a project
2. Check the response and resulting state

**Expected**

allowedDirectStages lacks APPROVED

**Test Data**

- `checkId`: DIR-046

**Automation Hint**

API-level check

#### TC-OPPTY-3369 — CSM links own project → Prospect becomes Existing

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Project associated with the Opportunity successfully clientType=EXISTING |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM links own project → Prospect becomes Existing
2. Check the response and resulting state

**Expected**

200 clientType EXISTING

**Test Data**

- `checkId`: DIR-048

**Automation Hint**

API-level check

#### TC-OPPTY-3372 — APPROVED with allocation unconfirmed → selected, not allocated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully APPROVED/SHORTLISTED ticket=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: APPROVED with allocation unconfirmed → selected, not allocated
2. Check the response and resulting state

**Expected**

APPROVED, stage not PROJECT_ALLOCATED

**Test Data**

- `checkId`: DIR-051

**Automation Hint**

API-level check

#### TC-OPPTY-3373 — Confirm allocation later (PATCH isAllocationConfirmed:true)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Position updated successfully stage=PROJECT_ALLOCATED ticket=37dfaa2c-1253-44a7-baf1-6ba51324d6d9 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Confirm allocation later (PATCH isAllocationConfirmed:true)
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED

**Test Data**

- `checkId`: DIR-052

**Automation Hint**

API-level check

#### TC-OPPTY-3374 — Direct ticket for a fully-booked employee is accepted at create (warning only?)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | created OPP-0303 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Direct ticket for a fully-booked employee is accepted at create (warning only?)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-053

**Automation Hint**

API-level check

#### TC-OPPTY-3376 — direct-stage-counts total equals Direct list total

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | counts={"total":38,"OPEN":17,"IN_REVIEW":0,"AWAITING":9,"APPROVED":7,"REJECTED":5} list=38 sum=38 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: direct-stage-counts total equals Direct list total
2. Check the response and resulting state

**Expected**

equal

**Test Data**

- `checkId`: DIR-055

**Automation Hint**

API-level check

#### TC-OPPTY-3377 — Direct summary (requestType=DIRECT) vs list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | summary={"total":44,"open":38,"won":0,"lost":0,"onHold":0,"noLongerRequired":6} oppCount=38 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Direct summary (requestType=DIRECT) vs list
2. Check the response and resulting state

**Expected**

summary.total == opportunityCount

**Test Data**

- `checkId`: DIR-056

**Automation Hint**

API-level check

#### TC-OPPTY-3379 — CSM sees own Direct tickets only

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | total=33 projects=AnalytixHub \| Advanced Analytics,ElitePay \| Payroll System |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM sees own Direct tickets only
2. Check the response and resulting state

**Expected**

all tickets raised by / project of CSM

**Test Data**

- `checkId`: DIR-058

**Automation Hint**

API-level check

#### TC-OPPTY-3380 — TM sees Direct tickets of own department (view only)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=37 allowedStages=[] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM sees Direct tickets of own department (view only)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-059

**Automation Hint**

API-level check

#### TC-OPPTY-3381 — TM adds prep material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM adds prep material
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: MSC-001

**Automation Hint**

API-level check

#### TC-OPPTY-3382 — EM adds prep material (FRD §7.4: EM standardises question banks)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: EM adds prep material (FRD §7.4: EM standardises question banks)
2. Check the response and resulting state

**Expected**

FRD: allowed

**Test Data**

- `checkId`: MSC-002

**Automation Hint**

API-level check

#### TC-OPPTY-3383 — Assigned PM adds prep material on top of PMO's (FRD §7.5)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Assigned PM: Assigned PM adds prep material on top of PMO's (FRD §7.5)
2. Check the response and resulting state

**Expected**

FRD: allowed

**Test Data**

- `checkId`: MSC-003

**Automation Hint**

API-level check

#### TC-OPPTY-3384 — TM edits PMO's material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 403 OPP_182 Only whoever added this Prep Material, or PMO, can change it |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM edits PMO's material
2. Check the response and resulting state

**Expected**

FRD: only PMO edits its own material — record

**Test Data**

- `checkId`: MSC-004

**Automation Hint**

API-level check

#### TC-OPPTY-3388 — Duplicate URL twice on one position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 201/201 |
| **Last Result** | passed |
| **Notes** | Same prep material can be added twice |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Duplicate URL twice on one position
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: MSC-008

**Automation Hint**

API-level check

#### TC-OPPTY-3389 — Prep material cap

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | last=201 total=31 |
| **Last Result** | passed |
| **Notes** | No upper limit on prep materials per position |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Prep material cap
2. Check the response and resulting state

**Expected**

record count limit

**Test Data**

- `checkId`: MSC-009

**Automation Hint**

API-level check

#### TC-OPPTY-3394 — Switch EXISTING → PROSPECT unlinks project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Opportunity updated successfully project=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Switch EXISTING → PROSPECT unlinks project
2. Check the response and resulting state

**Expected**

200 project null

**Test Data**

- `checkId`: MSC-014

**Automation Hint**

API-level check

#### TC-OPPTY-3401 — Raise requiredCount 1 → 4 appends 3 empty cards

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Position updated successfully cards=4 ords=1,3,4,5 |
| **Finding Ref** | F-22 |
| **Last Result** | passed |
| **Notes** | F-22: Extra candidates get their own cards beyond the opening count |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Raise requiredCount 1 → 4 appends 3 empty cards
2. Check the response and resulting state

**Expected**

4 cards

**Test Data**

- `checkId`: MSC-021

**Automation Hint**

API-level check

#### TC-OPPTY-3402 — Shortlist shortfall data (FRD: warn when fewer shortlisted than needed)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | required=4 shortlisted=0 filled=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Shortlist shortfall data (FRD: warn when fewer shortlisted than needed)
2. Check the response and resulting state

**Expected**

shortlistedCount < requiredCount exposed

**Test Data**

- `checkId`: MSC-022

**Automation Hint**

API-level check

#### TC-OPPTY-3403 — Candidate ticks checklist while Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_073 The Preparation Checklist can only be updated while the Candidate is Shortlisted, Waiting for Approval or Being Prepared |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate ticks checklist while Interview Scheduled
2. Check the response and resulting state

**Expected**

FRD §7.7: only Shortlisted/Being Prepared → 400 OPP_073

**Test Data**

- `checkId`: MSC-023

**Automation Hint**

API-level check

#### TC-OPPTY-3404 — PMO ticks on candidate's behalf at any stage

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"manualMockAt","message":"property manualMockAt should not exist"}] |
| **Finding Ref** | F-21 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): PMO ticking checklist items for a candidate; PMO can only skip today. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO ticks on candidate's behalf at any stage
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: MSC-024

**Automation Hint**

API-level check

#### TC-OPPTY-3405 — Pending checklist does not block scheduling (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | round scheduled with 0/5 items done earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Pending checklist does not block scheduling (FRD change list)
2. Check the response and resulting state

**Expected**

round dated with 4 items pending

**Test Data**

- `checkId`: MSC-025

**Automation Hint**

API-level check

#### TC-OPPTY-3406 — Send Reminder (FRD §7.5) endpoint exists

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 404 SYS_002 Cannot POST /api/v1/opportunities/nominations/9c89cd7e-da1d-477e-92cc-04083e71b782/remind |
| **Finding Ref** | F-18 |
| **Last Result** | skipped |
| **Notes** | GAP: no "Send Reminder" (manual or 48h auto) for pending preparation · 🚧 Not built yet (developer response 26 Oct): Send Reminder. · F-18: No change log on the opportunity and no 'Send Reminder' |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Send Reminder (FRD §7.5) endpoint exists
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: MSC-026

**Automation Hint**

API-level check

#### TC-OPPTY-3407 — RM of the candidate (unknown) sees the card (TEAM scope)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | no RM on profile: ["publicId","email","microsoftOid","kekaId","name","shiftPreferences","careerStartDate","dateOfJoining","isContractor","isTrainee","cohort","employeeOrigin","visaStatus","locationPreference","otherLoc |
| **Last Result** | skipped |
| **Notes** | Not verified: API does not expose the reporting manager, and the RM test account has no reportees on these tickets. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: RM of the candidate (unknown) sees the card (TEAM scope)
2. Check the response and resulting state

**Expected**

visible on RM board

**Test Data**

- `checkId`: MSC-027

**Automation Hint**

API-level check

### Integration (48)

#### TC-OPPTY-2009 — TM sees approval notification

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | found (2.7 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as TM (JAVA), TM sees approval notification
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-09

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2021 — Candidate A: notification + own view

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | notif has ticket=true (7.6 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as Employee (candidate), Candidate A: notification + own view
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-21

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2089 — Candidate (Kriti) opens the OPP-0156 link from her notification

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Role visibility on the interview flow |
| **Actual Result** | /pre-sales/45503acb-9973-4b39-a310-a5646239e387 \| OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Created by: Bhumi Chauhan Assigned PM: Gaurav Panchal Assigned CSM: Tarun Sharma Created On: 27/10/26, 11:30 am Updated On: 27/10/26, 11:30 am Position Details Ticket Info Preparation Material Link Project QA Automation Engineer Q QA Fixed - 50% Playwright Re-initiated by Bhumi Chauhan on 27/10/2026 ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 40% 40% Remaining of 100% Project Allocated 2 / 2 A |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J6 Role visibility on the interview flow: as Employee (candidate), Candidate (Kriti) opens the OPP-0156 link from her notification
2. Check the screen, toast and resulting state

**Expected**

Sees only her own row; no competitor counts; round feedback hidden

**Test Data**

- `checkId`: J6-Cand1

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2102 — TM opens the newest "Approval requested" notification with its ↗ link

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | top of panel: Notifications 99+ What's New Approval requested for Nilesh Kumar Nilesh Kumar was sent for your approval on 'QA Automation Engineer' (OPP-03 \| ↗ href /pre-sales/c20439a1-57f5-450a-aec7-1db701b5c7e7 → /pre-sales/c20439a1-57f5-450a-aec7-1db701b5c7e7 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as TM (QA), TM opens the newest "Approval requested" notification with its ↗ link
2. Check the screen, toast and resulting state

**Expected**

The newest item is the approval request; ↗ opens the ticket

**Test Data**

- `checkId`: D1-12

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2104 — All Notifications page: search "Prachi" finds the older OPP-0223 approval request and ↗ opens it

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | found=true after scrolling; opened /pre-sales/661aecbf-1c02-4f14-a275-28c40cb0ab24 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as TM (QA), All Notifications page: search "Prachi" finds the older OPP-0223 approval request and ↗ opens it
2. Check the screen, toast and resulting state

**Expected**

Older approval request findable and opens the ticket

**Test Data**

- `checkId`: D1-12b

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-3132 — Assignment notification to assignee (FRD notif #18)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | pm:400:no csm:400:no |
| **Finding Ref** | F-11 |
| **Last Result** | passed |
| **Notes** | F-11: Assigned CSM gets no 'assigned to you' notification |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Assignment notification to assignee (FRD notif #18)
2. Check the response and resulting state

**Expected**

PM + CSM get "assigned to you" notification

**Test Data**

- `checkId`: RBAC-026

**Automation Hint**

API-level check

#### TC-OPPTY-3186 — Two-way alert: shortlist side shows direct allocations for qa1

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Allocation conflicts fetched successfully interview=8 direct=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Two-way alert: shortlist side shows direct allocations for qa1
2. Check the response and resulting state

**Expected**

allocation-conflicts 200 with entries

**Test Data**

- `checkId`: INT-022

**Automation Hint**

API-level check

#### TC-OPPTY-3187 — Preferred-candidate notification to TM (FRD notif #7)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | checked in notifications pass |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Preferred-candidate notification to TM (FRD notif #7)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: INT-023

**Automation Hint**

API-level check

#### TC-OPPTY-3254 — Edit tech stack after shortlisting (rule 18 → TM re-review notification)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Edit tech stack after shortlisting (rule 18 → TM re-review notification)
2. Check the response and resulting state

**Expected**

200 + TM notified

**Test Data**

- `checkId`: INT-090

**Automation Hint**

API-level check

#### TC-OPPTY-3264 — PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage undefined ticket=undefined blocked=undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED, ticket id

**Test Data**

- `checkId`: INT-100

**Automation Hint**

API-level check

#### TC-OPPTY-3266 — Allocation ticket visible in allocation tickets module

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 SYS_004 Validation failed (uuid is expected) undefined undefined undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocation ticket visible in allocation tickets module
2. Check the response and resulting state

**Expected**

200, APPROVED, employee qa2, project AnalytixHub

**Test Data**

- `checkId`: INT-102

**Automation Hint**

API-level check

#### TC-OPPTY-3267 — Two-way alert now lists the upcoming allocation for qa2

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | direct=["ZenMonitor \| APM Platform:ASSIGNMENT:2026-08-28","HyperScale \| Scalability Engine:ASSIGNMENT:2026-10-23","TrustVault \| Identity Management:PENDING_TICKET:2026-08-21"] |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Two-way alert now lists the upcoming allocation for qa2
2. Check the response and resulting state

**Expected**

directAllocations has AnalytixHub

**Test Data**

- `checkId`: INT-103

**Automation Hint**

API-level check

#### TC-OPPTY-3278 — Lost notification to raiser/TM (FRD notif #15)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | - |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Lost notification to raiser/TM (FRD notif #15)
2. Check the response and resulting state

**Expected**

checked in notifications pass

**Test Data**

- `checkId`: INT-114

**Automation Hint**

API-level check

#### TC-OPPTY-3282 — Reopen NLR → OPEN (rule 17: reversible) 

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reopen NLR → OPEN (rule 17: reversible) 
2. Check the response and resulting state

**Expected**

200 (notif #16 says "cannot be undone easily")

**Test Data**

- `checkId`: INT-118

**Automation Hint**

API-level check

#### TC-OPPTY-3292 — Employee opportunity history for qa1 (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully OPP-0292:BEING_PREPARED OPP-0290:BEING_PREPARED OPP-0203:BEING_PREPARED OPP-0202:BEING_PREPARED OPP-0155:SHORTLISTED OPP-0113:BEING_PREPARED OPP-0112:BEING_PREPARED OPP-0048:BEING_PREPARED OPP-0047:BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: Employee opportunity history for qa1 (FRD change list)
2. Check the response and resulting state

**Expected**

lists Interview-1 and Interview-2

**Test Data**

- `checkId`: INT-128

**Automation Hint**

API-level check

#### TC-OPPTY-3293 — Employee list carries interviewOpportunities for qa1

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"limit","message":"limit must be one of the following values: 100, 200, 300"}] io=undefined |
| **Last Result** | skipped |
| **Notes** | Wrong query in test; covered by ALC-027/028. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: Employee list carries interviewOpportunities for qa1
2. Check the response and resulting state

**Expected**

>=1 active

**Test Data**

- `checkId`: INT-129

**Automation Hint**

API-level check

#### TC-OPPTY-3294 — Bypass → Being Prepared; remaining allocation reserves 40%

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | before=100 after=60 blocked=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Bypass → Being Prepared; remaining allocation reserves 40%
2. Check the response and resulting state

**Expected**

remainingAllocationPercentage drops by 40 while Blocked

**Test Data**

- `checkId`: ALC-001

**Automation Hint**

API-level check

#### TC-OPPTY-3295 — Candidate picker shows the blocked reservation too

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | picker remaining=60 booked=40 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate picker shows the blocked reservation too
2. Check the response and resulting state

**Expected**

picker remaining = 100-40

**Test Data**

- `checkId`: ALC-002

**Automation Hint**

API-level check

#### TC-OPPTY-3296 — Date R1 yesterday → card goes to Did Interview Happen? (stage added 23/10; not auto to Waiting for Feedback)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | DID_INTERVIEW_HAPPEN |
| **Last Result** | passed |
| **Notes** | Test case modified 27/10: expectation updated to the new stage. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Date R1 yesterday → card goes to Did Interview Happen? (stage added 23/10; not auto to Waiting for Feedback)
2. Check the response and resulting state

**Expected**

DID_INTERVIEW_HAPPEN

**Test Data**

- `checkId`: ALC-003

**Automation Hint**

API-level check

#### TC-OPPTY-3297 — "Did the interview happen?" Yes → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opening moved successfully WAITING_FOR_FEEDBACK |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: "Did the interview happen?" Yes → Waiting for Feedback
2. Check the response and resulting state

**Expected**

200 WAITING_FOR_FEEDBACK

**Test Data**

- `checkId`: ALC-004

**Automation Hint**

API-level check

#### TC-OPPTY-3298 — R1 Not Cleared → select without confirmation is refused (round-skip safeguard)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: R1 Not Cleared → select without confirmation is refused (round-skip safeguard)
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: ALC-005

**Automation Hint**

API-level check

#### TC-OPPTY-3299 — Select with confirmation (FRD rule 20 skip dialog)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Candidate selected successfully WON |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Select with confirmation (FRD rule 20 skip dialog)
2. Check the response and resulting state

**Expected**

200 WON

**Test Data**

- `checkId`: ALC-006

**Automation Hint**

API-level check

#### TC-OPPTY-3300 — After select: WON, SELECTED, filled 1/1

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | WON SELECTED filled=1/1 blocked=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: After select: WON, SELECTED, filled 1/1
2. Check the response and resulting state

**Expected**

WON

**Test Data**

- `checkId`: ALC-007

**Automation Hint**

API-level check

#### TC-OPPTY-3301 — Won-elsewhere notification to PMO (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | none (200) |
| **Last Result** | passed |
| **Notes** | Works; actor is excluded from own notifications. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Won-elsewhere notification to PMO (FRD change list)
2. Check the response and resulting state

**Expected**

PMO notification candidate_won_elsewhere

**Test Data**

- `checkId`: ALC-008

**Automation Hint**

API-level check

#### TC-OPPTY-3302 — Allocate FIXED without % 

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 SYS_004 Validation failed: allocationPercentage is required when allocationType is FIXED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate FIXED without % 
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: ALC-009

**Automation Hint**

API-level check

#### TC-OPPTY-3303 — Allocate end before start

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 SYS_004 Validation failed: Start date must not be after end date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate end before start
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: ALC-010

**Automation Hint**

API-level check

#### TC-OPPTY-3304 — Allocate with 101%

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"allocationPercentage","message":"allocationPercentage must not be greater than 100"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate with 101%
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: ALC-011

**Automation Hint**

API-level check

#### TC-OPPTY-3305 — Allocate with a different % than the position (40 → 60)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | see next |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate with a different % than the position (40 → 60)
2. Check the response and resulting state

**Expected**

record (no check against position)

**Test Data**

- `checkId`: ALC-012

**Automation Hint**

API-level check

#### TC-OPPTY-3307 — Allocation ticket in Allocation Requests (born approved)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Allocation ticket details retrieved successfully NA-0466 type=NEW_ALLOCATION status=APPROVED proj=AnalytixHub \| Advanced Analytics |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocation ticket in Allocation Requests (born approved)
2. Check the response and resulting state

**Expected**

ticket APPROVED/CLOSED, NEW_ALLOCATION, employee aditi, project AnalytixHub

**Test Data**

- `checkId`: ALC-014

**Automation Hint**

API-level check

#### TC-OPPTY-3308 — Interview Allocation tab in Requests Tracking lists it

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Interview allocation requests retrieved successfully total=291 found=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Interview Allocation tab in Requests Tracking lists it
2. Check the response and resulting state

**Expected**

interview-requests contains this opportunity

**Test Data**

- `checkId`: ALC-015

**Automation Hint**

API-level check

#### TC-OPPTY-3309 — Two-way alert lists the new upcoming allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | ["AnalytixHub \| Advanced Analytics:ASSIGNMENT:2026-11-16:40"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Two-way alert lists the new upcoming allocation
2. Check the response and resulting state

**Expected**

AnalytixHub ASSIGNMENT

**Test Data**

- `checkId`: ALC-016

**Automation Hint**

API-level check

#### TC-OPPTY-3310 — Remaining allocation after allocation (reservation released, booking counted)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | remaining=60 booked=40 live=[[40,"2026-11-16","2027-02-24"]] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Remaining allocation after allocation (reservation released, booking counted)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: ALC-017

**Automation Hint**

API-level check

#### TC-OPPTY-3311 — Unlink project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_176 A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed |
| **Finding Ref** | F-10 |
| **Last Result** | passed |
| **Notes** | F-10: Project can be unlinked or changed after a candidate is already allocated to it |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Unlink project after allocation
2. Check the response and resulting state

**Expected**

should be refused (allocation exists)

**Test Data**

- `checkId`: ALC-018

**Automation Hint**

API-level check

#### TC-OPPTY-3312 — Change project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_176 A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed |
| **Finding Ref** | F-10 |
| **Last Result** | passed |
| **Notes** | F-10: Project can be unlinked or changed after a candidate is already allocated to it |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Change project after allocation
2. Check the response and resulting state

**Expected**

should be refused

**Test Data**

- `checkId`: ALC-019

**Automation Hint**

API-level check

#### TC-OPPTY-3313 — Drag Project Allocated card backwards

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag Project Allocated card backwards
2. Check the response and resulting state

**Expected**

refused or allocation undone (rule 17 side effect)

**Test Data**

- `checkId`: ALC-020

**Automation Hint**

API-level check

#### TC-OPPTY-3314 — Mark Opportunity LOST after a candidate is Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully card=PROJECT_ALLOCATED nomination=SELECTED allocTicket=APPROVED |
| **Last Result** | passed |
| **Notes** | Opportunity with an allocated candidate can be marked Lost; allocation stays — record |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Mark Opportunity LOST after a candidate is Project Allocated
2. Check the response and resulting state

**Expected**

allocated candidate must not be silently released

**Test Data**

- `checkId`: ALC-021

**Automation Hint**

API-level check

#### TC-OPPTY-3315 — Reopen after LOST: allocated card intact?

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | OPEN card=PROJECT_ALLOCATED noms=SELECTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reopen after LOST: allocated card intact?
2. Check the response and resulting state

**Expected**

PROJECT_ALLOCATED kept

**Test Data**

- `checkId`: ALC-022

**Automation Hint**

API-level check

#### TC-OPPTY-3316 — Re-initiate position that has a Project Allocated seat

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_122 This Position has no Candidates to re-initiate stages=undefined |
| **Last Result** | skipped |
| **Notes** | Test error (shortlist of the already-allocated employee was refused, so nothing to re-initiate). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Re-initiate position that has a Project Allocated seat
2. Check the response and resulting state

**Expected**

allocated seat kept

**Test Data**

- `checkId`: ALC-023

**Automation Hint**

API-level check

#### TC-OPPTY-3317 — Employee profile history lists the allocated opportunity

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | OPP-0296:PROJECT_ALLOCATED:SELECTED OPP-0295:SHORTLISTED:CONSIDERED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: Employee profile history lists the allocated opportunity
2. Check the response and resulting state

**Expected**

history has ticket with PROJECT_ALLOCATED

**Test Data**

- `checkId`: ALC-024

**Automation Hint**

API-level check

#### TC-OPPTY-3318 — Candidate (akash.pandya) sees own history (self)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully n=2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate (akash.pandya) sees own history (self)
2. Check the response and resulting state

**Expected**

200 own items

**Test Data**

- `checkId`: ALC-025

**Automation Hint**

API-level check

#### TC-OPPTY-3320 — Employee list Interview opportunities column (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SYS_003 Operation completed successfully io=["OPP-0295:SHORTLISTED:50"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: Employee list Interview opportunities column (PMO)
2. Check the response and resulting state

**Expected**

aditi row lists live interview opps with %

**Test Data**

- `checkId`: ALC-027

**Automation Hint**

API-level check

#### TC-OPPTY-3321 — Employee list column for a TM (can read opportunities)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SYS_003 Operation completed successfully io=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: Employee list column for a TM (can read opportunities)
2. Check the response and resulting state

**Expected**

populated for TM JAVA

**Test Data**

- `checkId`: ALC-028

**Automation Hint**

API-level check

#### TC-OPPTY-3345 — Two-way alert (allocation side): employee in interview opps

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | interview=OPP-0047:50,OPP-0048:50,OPP-0112:50,OPP-0113:50,OPP-0155:50,OPP-0202:50,OPP-0203:50,OPP-0290:50,OPP-0292:50 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Two-way alert (allocation side): employee in interview opps
2. Check the response and resulting state

**Expected**

non-blocking list

**Test Data**

- `checkId`: DIR-024

**Automation Hint**

API-level check

#### TC-OPPTY-3346 — Two-way alert as CSM (raiser)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Allocation conflicts fetched successfully interview=undefined |
| **Finding Ref** | F-14 |
| **Last Result** | passed |
| **Notes** | GAP: CSM raising a Direct ticket does not see the employee's interview opportunities in the alert · ☑️ Working as decided (developer response 26 Oct): Direct opportunities left out of the two-way alert (decision 15 Oct). · F-14: CSM raising a Direct ticket sees an empty two-way allocation alert |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Two-way alert as CSM (raiser)
2. Check the response and resulting state

**Expected**

record — CSM raises Direct tickets but scope is PROJECT

**Test Data**

- `checkId`: DIR-025

**Automation Hint**

API-level check

#### TC-OPPTY-3348 — Direct tab in Requests Tracking lists the allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | NA-0467/APPROVED; direct tab 200 total=724 found=true isInterviewRequired=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Direct tab in Requests Tracking lists the allocation ticket
2. Check the response and resulting state

**Expected**

allocation-tickets?allocationMode=DIRECT has it

**Test Data**

- `checkId`: DIR-027

**Automation Hint**

API-level check

#### TC-OPPTY-3361 — PMO notified of cancellation from stage (FRD notif #19)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | notification.opportunity.direct_cancelled: Direct ticket OPP-0300 for Diya Nair was cancelled. Reason: Client postponed \|\| notification.opportunity.direct_cancelled: Direct ticket OPP-0300 for Diya Nair was cancelled. Reason: Client postponed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO notified of cancellation from stage (FRD notif #19)
2. Check the response and resulting state

**Expected**

PMO gets "cancelled by CSM from stage In Review"

**Test Data**

- `checkId`: DIR-040

**Automation Hint**

API-level check

#### TC-OPPTY-3395 — Edit history / change log (FRD §8: full change log, recent edits highlighted)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | updatedBy=Bhumi Chauhan updatedAt=2026-10-27T14:07:59.289Z historyField=false |
| **Finding Ref** | F-18 |
| **Last Result** | skipped |
| **Notes** | GAP: no change log / audit trail exposed on the opportunity (FRD §8, rule 17) · 🚧 Not built yet (developer response 26 Oct): No edit history yet. · F-18: No change log on the opportunity and no 'Send Reminder' |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Edit history / change log (FRD §8: full change log, recent edits highlighted)
2. Check the response and resulting state

**Expected**

updatedBy + some history

**Test Data**

- `checkId`: MSC-015

**Automation Hint**

API-level check

#### TC-OPPTY-3399 — Delete a position that has only CONSIDERED candidates → candidates notified?

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Position deleted successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Delete a position that has only CONSIDERED candidates → candidates notified?
2. Check the response and resulting state

**Expected**

200, nominations removed

**Test Data**

- `checkId`: MSC-019

**Automation Hint**

API-level check

### Negative (222)

#### TC-OPPTY-2001 — PMO login

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | ok (9.2 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, PMO login
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-00

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2002 — Open Opportunity board

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Opportunity Allocation Track every candidate across every position, from shortlisting to w (4.6 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Open Opportunity board
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2003 — Switch to Kanban

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | columns shown (2.4 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Switch to Kanban
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2005 — Shortlist 2 candidates

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Opportunity created successfully. (4.9 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Shortlist 2 candidates
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2006 — Send A for TM approval

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | awaiting TM (0.9 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Send A for TM approval
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-06

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2007 — Bypass approval for B with reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Being Prepared (1.6 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Bypass approval for B with reason
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-07

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2008 — TM login

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | ok (9.2 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as TM (JAVA), TM login
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-08

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2011 — PMO adds preparation material

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | added (7.1 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, PMO adds preparation material
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-11

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2012 — Checklist: tick 2 items

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | 2/5 (3.9 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Checklist: tick 2 items
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-12

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2013 — Round 1 today + interviewer → Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Interview Scheduled (5.5 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Round 1 today + interviewer → Interview Scheduled
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-13

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2014 — Round 1 Mark Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | AVA 100% 50% Remaining of 100% Being Prepared 2 / 2 Approved (4.0 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Round 1 Mark Cleared
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-14

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2015 — Round 2 today, Mark Cleared → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Waiting for Feedback (7.9 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Round 2 today, Mark Cleared → Waiting for Feedback
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-15

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2016 — Mark Won

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Won (4.7 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Mark Won
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-16

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2018 — B: back-date Round 1 → Did Interview Happen?

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Did Interview Happen? (4.6 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, B: back-date Round 1 → Did Interview Happen?
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-18

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2019 — B: answer Completed → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | ok (4.0 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, B: answer Completed → Waiting for Feedback
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-19

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2020 — B: reject from board menu (Client)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Candidate rejected. (11.2 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, B: reject from board menu (Client)
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-20

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2022 — PM: Requests Tracking → Interview Allocation lists the ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | listed (7.1 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PM, PM: Requests Tracking → Interview Allocation lists the ticket
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-22

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2026 — Dev Joshi: "Didn't happen" → new date today (past days blocked)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Did the interview happen? (retest, JAVA) |
| **Actual Result** | yesterday disabled=true \| toast: Interview rescheduled \| Interview confirmed — waiting for feedback \| 00% 50% Remaining of 100% Interview Scheduled 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT2 Did the interview happen? (retest, JAVA): as PMO, Dev Joshi: "Didn't happen" → new date today (past days blocked)
2. Check the screen, toast and resulting state

**Expected**

Interview rescheduled; back to Interview Scheduled

**Test Data**

- `checkId`: RT2-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2028 — Kanban has a separate "Did Interview Happen?" column; a card cannot be moved into it by hand

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Did the interview happen? (retest, JAVA) |
| **Actual Result** | menu option disabled=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT2 Did the interview happen? (retest, JAVA): as PMO, Kanban has a separate "Did Interview Happen?" column; a card cannot be moved into it by hand
2. Check the screen, toast and resulting state

**Expected**

Column present; menu option disabled

**Test Data**

- `checkId`: RT2-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2029 — Shortlist 3 candidates on a 1-opening position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Reject, remove, re-initiate (retest, JAVA) |
| **Actual Result** | #1,#2,#3 Gunjan Rawat=true Gargi Das=true Karan Kamath=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT3 Reject, remove, re-initiate (retest, JAVA): as PMO, Shortlist 3 candidates on a 1-opening position
2. Check the screen, toast and resulting state

**Expected**

Extra picks get new openings; 3 rows Shortlisted

**Test Data**

- `checkId`: RT3-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2030 — Remove a shortlisted candidate — reason required

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Reject, remove, re-initiate (retest, JAVA) |
| **Actual Result** | enabled while empty=false \| toast: Candidate removed. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT3 Reject, remove, re-initiate (retest, JAVA): as PMO, Remove a shortlisted candidate — reason required
2. Check the screen, toast and resulting state

**Expected**

Remove disabled until reason; "Candidate removed."

**Test Data**

- `checkId`: RT3-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2031 — Send for approval, then withdraw

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Reject, remove, re-initiate (retest, JAVA) |
| **Actual Result** | confirm: none \| toast: Approval request for Karan Kamath withdrawn. \| Karan Kamath sent for approval. \| row: 100% 100% Remaining of 100% Shortlisted - Not sent |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT3 Reject, remove, re-initiate (retest, JAVA): as PMO, Send for approval, then withdraw
2. Check the screen, toast and resulting state

**Expected**

"Approval request … withdrawn."; back to Not sent

**Test Data**

- `checkId`: RT3-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2032 — JAVA TM rejects an approval request with a reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Reject, remove, re-initiate (retest, JAVA) |
| **Actual Result** | toast: Candidate rejected. \| Rejected & previously considered Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action Gargi Das 50% Sr. Software Engineer JAVA 100% 100% Remaining of 100% Rejecte |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT3 Reject, remove, re-initiate (retest, JAVA): as TM (JAVA), JAVA TM rejects an approval request with a reason
2. Check the screen, toast and resulting state

**Expected**

"Candidate rejected."; shown as Rejected by TM

**Test Data**

- `checkId`: RT3-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2033 — Bypass with reason, then reject from the board "Change status" menu (Rejected by Client)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Reject, remove, re-initiate (retest, JAVA) |
| **Actual Result** | toast: Candidate rejected. \| client-rejected listed=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT3 Reject, remove, re-initiate (retest, JAVA): as PMO, Bypass with reason, then reject from the board "Change status" menu (Rejected by Client)
2. Check the screen, toast and resulting state

**Expected**

Candidate in rejected history as Rejected by Client

**Test Data**

- `checkId`: RT3-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2034 — Re-initiate the position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Reject, remove, re-initiate (retest, JAVA) |
| **Actual Result** | Re-initiate disabled (no candidates left to release) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT3 Reject, remove, re-initiate (retest, JAVA): as PMO, Re-initiate the position
2. Check the screen, toast and resulting state

**Expected**

"Position re-initiated…"; "Re-initiated by Bhumi Chauhan on …"

**Test Data**

- `checkId`: RT3-06

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2035 — Cancel Request dialog on an Interview ticket offers Client Won / Client Lost / On Hold

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Ticket outcomes (retest) |
| **Actual Result** | What do you want to do with the ticket? Capture independent client outcome and mark opportunity closed. Client Won Finalised candidates move to Won, the rest are released. Client Lost Opportunity lost, every active candidate moves to Lost. On Hold Client pause |
| **Last Result** | passed |
| **Notes** | Modified: Expectation corrected: Interview tickets close Won/Lost/On Hold from the dialog; NLR/Open on the board menu. |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT4 Ticket outcomes (retest): as PMO, Cancel Request dialog on an Interview ticket offers Client Won / Client Lost / On Hold
2. Check the screen, toast and resulting state

**Expected**

Those 3 options (NLR and Open are on the board menu by design)

**Test Data**

- `checkId`: RT4-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2048 — Unlink Project after allocation is refused

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | toast: A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed \| Candidate allocated to the project |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Unlink Project after allocation is refused
2. Check the screen, toast and resulting state

**Expected**

Error "…cannot be changed or removed"

**Test Data**

- `checkId`: RT5-09

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2049 — Move into "Did Interview Happen?" by hand

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board guard rails (retest) |
| **Actual Result** | disabled=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT6 Board guard rails (retest): as PMO, Move into "Did Interview Happen?" by hand
2. Check the screen, toast and resulting state

**Expected**

Option disabled

**Test Data**

- `checkId`: RT6-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2050 — Interview Scheduled → Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board guard rails (retest) |
| **Actual Result** | confirm: Confirm Status Change This will move the candidate from Interview Scheduled back to Being Prepared and clear the interview scheduled for 27/10/2026. Do you want to Continue? Cancel \| toast: Status updated. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT6 Board guard rails (retest): as PMO, Interview Scheduled → Being Prepared
2. Check the screen, toast and resulting state

**Expected**

Confirm says the interview date will be cleared

**Test Data**

- `checkId`: RT6-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2051 — Being Prepared → Interview Scheduled with no date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest, @modified |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board guard rails (retest) |
| **Actual Result** | dialog: Interview Date Round 1 has no upcoming date. Pick today or a later date to move Jay Kapoor to Interview Scheduled. Round 1: Technical Pending Interview Date * P |
| **Last Result** | passed |
| **Notes** | Modified: Expectation corrected: a date dialog opens (by design). |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT6 Board guard rails (retest): as PMO, Being Prepared → Interview Scheduled with no date
2. Check the screen, toast and resulting state

**Expected**

A date dialog opens instead of a blind move

**Test Data**

- `checkId`: RT6-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2052 — Being Prepared → Won (skipping stages)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board guard rails (retest) |
| **Actual Result** | confirm: Confirm Status Change This will move the candidate from Being Prepared to Won, bypassing intermediate stages. Do you want to Continue? Cancel Yes, Proceed Won \| toast: Status updated. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT6 Board guard rails (retest): as PMO, Being Prepared → Won (skipping stages)
2. Check the screen, toast and resulting state

**Expected**

Confirm "bypassing intermediate stages"

**Test Data**

- `checkId`: RT6-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2084 — CSM cancels own Interview ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — CSM raises and manages an Interview ticket |
| **Actual Result** | Cancel Request button visible to CSM: false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM cancels own Interview ticket
2. Check the screen, toast and resulting state

**Expected**

FRD rule 22 asks for a Cancelled tag; build: not built for Interview (BUG-003)

**Test Data**

- `checkId`: J5-05

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2122 — Cancel Request → Client Won on a ticket with a Won candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Close as Client Won + misc screens |
| **Actual Result** | toast: Ticket status updated. \| OPP-0316 QA-AUTO DCOPY2 6 - Waiting for client feedback Won High Interview Allocation · AnalytixHub Existing Client Crea |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D5 Close as Client Won + misc screens: as PMO, Cancel Request → Client Won on a ticket with a Won candidate
2. Check the screen, toast and resulting state

**Expected**

Ticket status Won; Won tile counts it

**Test Data**

- `checkId`: D5-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2132 — CSM cancels the Direct ticket they raised (Cancel Request + reason)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | dialog: Cancel this request? OPP-0319 will be tagged Cancelled. PMO will then close it as No Longer Required. Reason * 0/1024 characters Cancel Conf \| toast: OPP-0319 marked as cancelled. \| OPP-0319 QA-AUTO DIRECT UI D4C 62057 Open High Cancelled . Cancelled by Tarun Sharma · 27/10/26, 08:24 pm. Reason: Client postponed the start Direct Allocation · AnalytixHub Existing Client Edit Ticke |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as CSM, CSM cancels the Direct ticket they raised (Cancel Request + reason)
2. Check the screen, toast and resulting state

**Expected**

Ticket tagged Cancelled; stage frozen; PMO notified

**Test Data**

- `checkId`: D4C-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2133 — PMO closes the cancelled Direct ticket as No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | dialog: What do you want to do with the ticket? Capture independent client outcome and mark opportunity closed. No Longer Requir \| toast: Ticket status updated. \| OPP-0319 QA-AUTO DIRECT UI D4C 62057 No Longer Required High Cancelled . Cancelled by Tarun Sharma · 27/10/26, 08:24 pm. Reason: Client postponed the start Dire |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as PMO, PMO closes the cancelled Direct ticket as No Longer Required
2. Check the screen, toast and resulting state

**Expected**

Close Ticket → No Longer Required → status NLR

**Test Data**

- `checkId`: D4C-03

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-3002 — Title missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-002

**Automation Hint**

API-level check

#### TC-OPPTY-3003 — Title empty string

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title empty string
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-003

**Automation Hint**

API-level check

#### TC-OPPTY-3004 — Title whitespace only

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title whitespace only
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-004

**Automation Hint**

API-level check

#### TC-OPPTY-3008 — clientType missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientType missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-008

**Automation Hint**

API-level check

#### TC-OPPTY-3009 — clientType invalid value

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType must be one of the following values: EXISTING, PROSPECT"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientType invalid value
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-009

**Automation Hint**

API-level check

#### TC-OPPTY-3010 — clientType lowercase

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType must be one of the following values: EXISTING, PROSPECT"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientType lowercase
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-010

**Automation Hint**

API-level check

#### TC-OPPTY-3011 — clientName missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientName missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-011

**Automation Hint**

API-level check

#### TC-OPPTY-3012 — clientName whitespace only

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: clientName whitespace only
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-012

**Automation Hint**

API-level check

#### TC-OPPTY-3015 — websiteUrl not a URL

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: websiteUrl not a URL
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-015

**Automation Hint**

API-level check

#### TC-OPPTY-3017 — websiteUrl ftp scheme

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: websiteUrl ftp scheme
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-017

**Automation Hint**

API-level check

#### TC-OPPTY-3018 — websiteUrl no TLD (http://localhost)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: websiteUrl no TLD (http://localhost)
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-018

**Automation Hint**

API-level check

#### TC-OPPTY-3021 — linkedinUrl invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"linkedinUrl","message":"linkedinUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: linkedinUrl invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-021

**Automation Hint**

API-level check

#### TC-OPPTY-3022 — interviewerLinkedinUrl invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"interviewerLinkedinUrl","message":"interviewerLinkedinUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: interviewerLinkedinUrl invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-022

**Automation Hint**

API-level check

#### TC-OPPTY-3030 — Unknown top-level key rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"foo","message":"property foo should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Unknown top-level key rejected
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-030

**Automation Hint**

API-level check

#### TC-OPPTY-3031 — positions empty array

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions","message":"positions must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: positions empty array
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-031

**Automation Hint**

API-level check

#### TC-OPPTY-3032 — positions missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions","message":"positions is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: positions missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-032

**Automation Hint**

API-level check

#### TC-OPPTY-3033 — projectPublicId not a uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"projectPublicId","message":"projectPublicId must be a UUID"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: projectPublicId not a uuid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-033

**Automation Hint**

API-level check

#### TC-OPPTY-3034 — projectPublicId random uuid (not found)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 404 OPP_010 Project not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: projectPublicId random uuid (not found)
2. Check the response and resulting state

**Expected**

404 OPP_010

**Test Data**

- `checkId`: VAL-034

**Automation Hint**

API-level check

#### TC-OPPTY-3037 — PROSPECT with projectPublicId

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully clientType=EXISTING |
| **Finding Ref** | F-15 |
| **Last Result** | passed |
| **Notes** | F-15: Create accepts contradictory data |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PROSPECT with projectPublicId
2. Check the response and resulting state

**Expected**

Either refused or auto-switched to EXISTING (FRD: link makes prospect existing)

**Test Data**

- `checkId`: VAL-037

**Automation Hint**

API-level check

#### TC-OPPTY-3038 — Position title missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Position title missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-038

**Automation Hint**

API-level check

#### TC-OPPTY-3040 — techStacks empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"techStacks must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: techStacks empty
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-040

**Automation Hint**

API-level check

#### TC-OPPTY-3042 — techStacks item empty string

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"each value in techStacks should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: techStacks item empty string
2. Check the response and resulting state

**Expected**

400 (blank tech stack)

**Test Data**

- `checkId`: VAL-042

**Automation Hint**

API-level check

#### TC-OPPTY-3043 — techStacks duplicate values

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully ["Java"] |
| **Finding Ref** | F-17 |
| **Last Result** | passed |
| **Notes** | F-17: Duplicate values stored |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: techStacks duplicate values
2. Check the response and resulting state

**Expected**

de-duplicated or refused

**Test Data**

- `checkId`: VAL-043

**Automation Hint**

API-level check

#### TC-OPPTY-3044 — departmentPublicIds empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.departmentPublicIds","message":"departmentPublicIds must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: departmentPublicIds empty
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-044

**Automation Hint**

API-level check

#### TC-OPPTY-3045 — departmentPublicIds non-uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.departmentPublicIds","message":"each value in departmentPublicIds must be a UUID"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: departmentPublicIds non-uuid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-045

**Automation Hint**

API-level check

#### TC-OPPTY-3046 — departmentPublicIds unknown uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 404 OPP_016 One or more departments were not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: departmentPublicIds unknown uuid
2. Check the response and resulting state

**Expected**

404 OPP_016

**Test Data**

- `checkId`: VAL-046

**Automation Hint**

API-level check

#### TC-OPPTY-3047 — departmentPublicIds duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully depts=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: departmentPublicIds duplicate
2. Check the response and resulting state

**Expected**

de-duplicated or refused

**Test Data**

- `checkId`: VAL-047

**Automation Hint**

API-level check

#### TC-OPPTY-3049 — requiredCount 0

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount 0
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-049

**Automation Hint**

API-level check

#### TC-OPPTY-3050 — requiredCount -1

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount -1
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-050

**Automation Hint**

API-level check

#### TC-OPPTY-3053 — requiredCount "2" string

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must be a whole number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: requiredCount "2" string
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-053

**Automation Hint**

API-level check

#### TC-OPPTY-3056 — priority missing (Interview) → OPP_154

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_154 An Interview Position needs its priority |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: priority missing (Interview) → OPP_154
2. Check the response and resulting state

**Expected**

400 OPP_154, nothing created

**Test Data**

- `checkId`: VAL-056

**Automation Hint**

API-level check

#### TC-OPPTY-3057 — priority invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.priority","message":"priority must be one of the following values: HIGH, MEDIUM, LOW"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: priority invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-057

**Automation Hint**

API-level check

#### TC-OPPTY-3058 — preferredSeniority missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredSeniority","message":"preferredSeniority is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: preferredSeniority missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-058

**Automation Hint**

API-level check

#### TC-OPPTY-3059 — preferredSeniority invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredSeniority","message":"preferredSeniority must be one of the following values: JUNIOR, MID, SENIOR, LEAD"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: preferredSeniority invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-059

**Automation Hint**

API-level check

#### TC-OPPTY-3060 — allocationType invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationType","message":"allocationType must be one of the following values: FIXED, DYNAMIC"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: allocationType invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-060

**Automation Hint**

API-level check

#### TC-OPPTY-3061 — FIXED without % → OPP_026

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage is required."}] |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | Refused as expected; error code is VAL_001, not the OPP_026 the backend guide lists (doc mismatch, see F-21). · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: FIXED without % → OPP_026
2. Check the response and resulting state

**Expected**

400 OPP_026, nothing created

**Test Data**

- `checkId`: VAL-061

**Automation Hint**

API-level check

#### TC-OPPTY-3062 — FIXED 0%

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: FIXED 0%
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-062

**Automation Hint**

API-level check

#### TC-OPPTY-3063 — FIXED 101%

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must not be greater than 100"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: FIXED 101%
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-063

**Automation Hint**

API-level check

#### TC-OPPTY-3067 — DYNAMIC with % → OPP_027

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_027 Allocation % must be omitted for a Dynamic allocation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: DYNAMIC with % → OPP_027
2. Check the response and resulting state

**Expected**

400 OPP_027, nothing created

**Test Data**

- `checkId`: VAL-067

**Automation Hint**

API-level check

#### TC-OPPTY-3070 — tentativeAllocationDate impossible (2026-02-30)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.tentativeAllocationDate","message":"tentativeAllocationDate must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: tentativeAllocationDate impossible (2026-02-30)
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-070

**Automation Hint**

API-level check

#### TC-OPPTY-3072 — End date before start → OPP_093

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_093 The tentative allocation end date cannot be before its start date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: End date before start → OPP_093
2. Check the response and resulting state

**Expected**

400 OPP_093, nothing created

**Test Data**

- `checkId`: VAL-072

**Automation Hint**

API-level check

#### TC-OPPTY-3074 — End date without start date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_177 Set the tentative allocation date before its end date |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: End date without start date
2. Check the response and resulting state

**Expected**

refused (end needs a start)

**Test Data**

- `checkId`: VAL-074

**Automation Hint**

API-level check

#### TC-OPPTY-3075 — isInterviewRequired=false with roundTitles → OPP_029

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: isInterviewRequired=false with roundTitles → OPP_029
2. Check the response and resulting state

**Expected**

400 OPP_029, nothing created

**Test Data**

- `checkId`: VAL-075

**Automation Hint**

API-level check

#### TC-OPPTY-3076 — isInterviewRequired=false with interview date → OPP_029

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: isInterviewRequired=false with interview date → OPP_029
2. Check the response and resulting state

**Expected**

400 OPP_029, nothing created

**Test Data**

- `checkId`: VAL-076

**Automation Hint**

API-level check

#### TC-OPPTY-3077 — INTERVIEW request with isInterviewRequired=false

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Finding Ref** | F-15 |
| **Last Result** | passed |
| **Notes** | F-15: Create accepts contradictory data |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: INTERVIEW request with isInterviewRequired=false
2. Check the response and resulting state

**Expected**

Contradiction — should be refused (Interview ticket without interview)

**Test Data**

- `checkId`: VAL-077

**Automation Hint**

API-level check

#### TC-OPPTY-3078 — tentativeInterviewDate after allocation date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_180 The tentative interview date must be on or before the tentative allocation date |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: tentativeInterviewDate after allocation date
2. Check the response and resulting state

**Expected**

Interview should be before allocation — refused or warned

**Test Data**

- `checkId`: VAL-078

**Automation Hint**

API-level check

#### TC-OPPTY-3079 — tentativeInterviewDate in the past

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_179 The tentative interview date cannot be in the past |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: tentativeInterviewDate in the past
2. Check the response and resulting state

**Expected**

refused

**Test Data**

- `checkId`: VAL-079

**Automation Hint**

API-level check

#### TC-OPPTY-3085 — prepMaterials url invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.prepMaterials.0.url","message":"url must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prepMaterials url invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-085

**Automation Hint**

API-level check

#### TC-OPPTY-3086 — prepMaterials title empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.prepMaterials.0.title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: prepMaterials title empty
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-086

**Automation Hint**

API-level check

#### TC-OPPTY-3089 — preferredEmployeePublicIds duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredEmployeePublicIds","message":"All preferredEmployeePublicIds's elements must be unique"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: preferredEmployeePublicIds duplicate
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-089

**Automation Hint**

API-level check

#### TC-OPPTY-3090 — preferredEmployeePublicIds unknown uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 404 OPP_048 Employee not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: preferredEmployeePublicIds unknown uuid
2. Check the response and resulting state

**Expected**

404 OPP_048

**Test Data**

- `checkId`: VAL-090

**Automation Hint**

API-level check

#### TC-OPPTY-3091 — employeePublicId on INTERVIEW position → OPP_129

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 OPP_129 Only a Direct Position names its Employee up front |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: employeePublicId on INTERVIEW position → OPP_129
2. Check the response and resulting state

**Expected**

400 OPP_129, nothing created

**Test Data**

- `checkId`: VAL-091

**Automation Hint**

API-level check

#### TC-OPPTY-3093 — locationPreference invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.locationPreference","message":"locationPreference should be one of WFO, WFH, HYBRID, USA, CANADA, EUROPE, AUSTRALIA, DUBAI, OTHER values. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: locationPreference invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-093

**Automation Hint**

API-level check

#### TC-OPPTY-3094 — OTHER without otherLocation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.otherLocation","message":"otherLocation cannot be empty."},{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: OTHER without otherLocation
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-094

**Automation Hint**

API-level check

#### TC-OPPTY-3096 — otherLocation with WFO → SYS_004

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 SYS_004 otherLocation must only be supplied when locationPreference is OTHER |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: otherLocation with WFO → SYS_004
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-096

**Automation Hint**

API-level check

#### TC-OPPTY-3097 — USA without workMode

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: USA without workMode
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-097

**Automation Hint**

API-level check

#### TC-OPPTY-3098 — USA ON_SITE without address

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.address","message":"address cannot be empty."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: USA ON_SITE without address
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-098

**Automation Hint**

API-level check

#### TC-OPPTY-3100 — workMode with WFH

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 SYS_004 workMode must only be supplied for a foreign locationPreference, not for WFO, WFH or HYBRID |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: workMode with WFH
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-100

**Automation Hint**

API-level check

#### TC-OPPTY-3101 — nightShift NONE + NS1 combined

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.nightShiftPreferences","message":"shiftPreferences cannot combine NONE with other shift preferences."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: nightShift NONE + NS1 combined
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-101

**Automation Hint**

API-level check

#### TC-OPPTY-3102 — address 501

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.address","message":"The address must not exceed 500 characters."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: address 501
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-102

**Automation Hint**

API-level check

#### TC-OPPTY-3111 — csm raises EXISTING (project not managed)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_009 You can only raise or link Opportunities for Projects you manage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: csm raises EXISTING (project not managed)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-005

**Automation Hint**

API-level check

#### TC-OPPTY-3112 — csm raises EXISTING (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 400 OPP_019 Link a Project you manage to raise an Existing Client Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: csm raises EXISTING (no project)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: RBAC-006

**Automation Hint**

API-level check

#### TC-OPPTY-3113 — pm raises EXISTING (project managed)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | DEFECT: FRD rule 3/§7.5 — PM must not create opportunities, API allowed it · ⏳ Pending product decision (26 Oct): PM raises Existing-Client tickets per Figma; FRD vs Figma being confirmed. · F-01: PM can raise Existing-client Interview and Direct opportunities |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: pm raises EXISTING (project managed)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-007

**Automation Hint**

API-level check

#### TC-OPPTY-3114 — pm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_008 You are not allowed to raise an Opportunity for a Prospect |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: pm raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-008

**Automation Hint**

API-level check

#### TC-OPPTY-3115 — tmQA raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM (QA): tmQA raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-009

**Automation Hint**

API-level check

#### TC-OPPTY-3116 — em raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: em raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-010

**Automation Hint**

API-level check

#### TC-OPPTY-3117 — rm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: rm raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-011

**Automation Hint**

API-level check

#### TC-OPPTY-3118 — emp raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: emp raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-012

**Automation Hint**

API-level check

#### TC-OPPTY-3119 — admin raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Admin: admin raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-013

**Automation Hint**

API-level check

#### TC-OPPTY-3123 — Assignee picker for TM/EM/CSM/Employee

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | tmQA:403 em:403 emp:403 rm:403 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Assignee picker for TM/EM/CSM/Employee
2. Check the response and resulting state

**Expected**

403 OPP_162 for non-raisers

**Test Data**

- `checkId`: RBAC-017

**Automation Hint**

API-level check

#### TC-OPPTY-3124 — Assign a non-PM as assignedPm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 400 OPP_158 The assigned PM must be an active Employee who holds the PM role |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Assign a non-PM as assignedPm
2. Check the response and resulting state

**Expected**

400 OPP_158

**Test Data**

- `checkId`: RBAC-018

**Automation Hint**

API-level check

#### TC-OPPTY-3125 — Assign a non-CSM as assignedCsm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 400 OPP_159 The assigned CSM must be an active Employee who holds the CSM role |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Assign a non-CSM as assignedCsm
2. Check the response and resulting state

**Expected**

400 OPP_159

**Test Data**

- `checkId`: RBAC-019

**Automation Hint**

API-level check

#### TC-OPPTY-3126 — CSM tries to set assignedCsm on create

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_160 Only PMO can assign a CSM to an Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM tries to set assignedCsm on create
2. Check the response and resulting state

**Expected**

403 OPP_160 (PMO only)

**Test Data**

- `checkId`: RBAC-020

**Automation Hint**

API-level check

#### TC-OPPTY-3131 — Non-assigned CSM (sai.gandhi) cannot open it

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Non-assigned CSM (sai.gandhi) cannot open it
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: RBAC-025

**Automation Hint**

API-level check

#### TC-OPPTY-3134 — CSM (assigned) clears assignedCsm on an INTERVIEW opp

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_160 Only PMO can assign a CSM to an Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM (assigned) clears assignedCsm on an INTERVIEW opp
2. Check the response and resulting state

**Expected**

403 (PMO only)

**Test Data**

- `checkId`: RBAC-028

**Automation Hint**

API-level check

#### TC-OPPTY-3139 — tmQA edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM (QA): tmQA edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-033

**Automation Hint**

API-level check

#### TC-OPPTY-3140 — tmQA changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM (QA): tmQA changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-034

**Automation Hint**

API-level check

#### TC-OPPTY-3141 — em edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: em edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-035

**Automation Hint**

API-level check

#### TC-OPPTY-3142 — em changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: em changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-036

**Automation Hint**

API-level check

#### TC-OPPTY-3143 — rm edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: rm edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-037

**Automation Hint**

API-level check

#### TC-OPPTY-3144 — rm changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: rm changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-038

**Automation Hint**

API-level check

#### TC-OPPTY-3145 — pm edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: pm edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-039

**Automation Hint**

API-level check

#### TC-OPPTY-3146 — pm changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: pm changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-040

**Automation Hint**

API-level check

#### TC-OPPTY-3147 — emp edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: emp edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-041

**Automation Hint**

API-level check

#### TC-OPPTY-3148 — emp changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: emp changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-042

**Automation Hint**

API-level check

#### TC-OPPTY-3149 — admin edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Admin: admin edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-043

**Automation Hint**

API-level check

#### TC-OPPTY-3150 — admin changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Admin: admin changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-044

**Automation Hint**

API-level check

#### TC-OPPTY-3151 — CSM changes status (mark Lost) on own opp

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM changes status (mark Lost) on own opp
2. Check the response and resulting state

**Expected**

403 (FRD: PMO only)

**Test Data**

- `checkId`: RBAC-045

**Automation Hint**

API-level check

#### TC-OPPTY-3157 — rm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: rm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-051

**Automation Hint**

API-level check

#### TC-OPPTY-3158 — emp: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: emp: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-052

**Automation Hint**

API-level check

#### TC-OPPTY-3159 — csm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: csm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-053

**Automation Hint**

API-level check

#### TC-OPPTY-3160 — pm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PM: pm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-054

**Automation Hint**

API-level check

#### TC-OPPTY-3169 — Shortlist same employee twice in one request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 This Employee is already nominated for this Position |
| **Last Result** | passed |
| **Notes** | Refused (409 OPP_028) — acceptable. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Shortlist same employee twice in one request
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-005

**Automation Hint**

API-level check

#### TC-OPPTY-3170 — Shortlist empty list

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"candidates","message":"candidates must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Shortlist empty list
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-006

**Automation Hint**

API-level check

#### TC-OPPTY-3172 — Re-shortlist an already live candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 This Employee is already nominated for this Position |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Re-shortlist an already live candidate
2. Check the response and resulting state

**Expected**

409 OPP_028

**Test Data**

- `checkId`: INT-008

**Automation Hint**

API-level check

#### TC-OPPTY-3176 — rm tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: rm tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-012

**Automation Hint**

API-level check

#### TC-OPPTY-3177 — csm tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: csm tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-013

**Automation Hint**

API-level check

#### TC-OPPTY-3178 — emp tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Employee: emp tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-014

**Automation Hint**

API-level check

#### TC-OPPTY-3179 — admin tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Admin: admin tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-015

**Automation Hint**

API-level check

#### TC-OPPTY-3181 — TM (JAVA) shortlists on a QA-only position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM (JAVA) shortlists on a QA-only position
2. Check the response and resulting state

**Expected**

404 (out of scope) — record

**Test Data**

- `checkId`: INT-017

**Automation Hint**

API-level check

#### TC-OPPTY-3185 — Candidate picker min>max

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_165 The minimum cannot be greater than the maximum |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate picker min>max
2. Check the response and resulting state

**Expected**

400 OPP_165

**Test Data**

- `checkId`: INT-021

**Automation Hint**

API-level check

#### TC-OPPTY-3188 — TM approves without request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_107 Send the Candidate for approval first |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM approves without request
2. Check the response and resulting state

**Expected**

400 OPP_107

**Test Data**

- `checkId`: INT-024

**Automation Hint**

API-level check

#### TC-OPPTY-3189 — TM sends EM's pick (qa4) for approval

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_105 You can only send Candidates you shortlisted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM sends EM's pick (qa4) for approval
2. Check the response and resulting state

**Expected**

403 OPP_105 (own picks only)

**Test Data**

- `checkId`: INT-025

**Automation Hint**

API-level check

#### TC-OPPTY-3191 — Send same candidate twice

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_104 This Candidate was already sent for approval |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Send same candidate twice
2. Check the response and resulting state

**Expected**

400 OPP_104

**Test Data**

- `checkId`: INT-027

**Automation Hint**

API-level check

#### TC-OPPTY-3192 — Requester TM approves own request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_111 You cannot approve or reject a request you sent |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: Requester TM approves own request
2. Check the response and resulting state

**Expected**

400/403 OPP_111 (never the requester)

**Test Data**

- `checkId`: INT-028

**Automation Hint**

API-level check

#### TC-OPPTY-3195 — PMO sends qa2; TM (JAVA) tries to approve a QA candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO sends qa2; TM (JAVA) tries to approve a QA candidate
2. Check the response and resulting state

**Expected**

403 OPP_100 / 404

**Test Data**

- `checkId`: INT-031

**Automation Hint**

API-level check

#### TC-OPPTY-3196 — EM tries to approve (EM never approves)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As EM: EM tries to approve (EM never approves)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-032

**Automation Hint**

API-level check

#### TC-OPPTY-3198 — Double approve (already approved)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_107 Send the Candidate for approval first |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Double approve (already approved)
2. Check the response and resulting state

**Expected**

400 OPP_014/OPP_107

**Test Data**

- `checkId`: INT-034

**Automation Hint**

API-level check

#### TC-OPPTY-3200 — Withdraw by non-requester TM

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_109 Only the requester or PMO can withdraw this approval request |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Withdraw by non-requester TM
2. Check the response and resulting state

**Expected**

403 OPP_109

**Test Data**

- `checkId`: INT-036

**Automation Hint**

API-level check

#### TC-OPPTY-3202 — Withdraw when nothing pending

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_106 There is no pending approval request to withdraw |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Withdraw when nothing pending
2. Check the response and resulting state

**Expected**

400 OPP_106

**Test Data**

- `checkId`: INT-038

**Automation Hint**

API-level check

#### TC-OPPTY-3203 — TM tries bypass

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM tries bypass
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-039

**Automation Hint**

API-level check

#### TC-OPPTY-3207 — Remove an IN_PROCESS nomination via DELETE

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |
| **Notes** | Refused (reason now required, then In-Process rule). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Remove an IN_PROCESS nomination via DELETE
2. Check the response and resulting state

**Expected**

400 OPP_071 (reject instead)

**Test Data**

- `checkId`: INT-043

**Automation Hint**

API-level check

#### TC-OPPTY-3209 — Reject without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reject without reason
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-045

**Automation Hint**

API-level check

#### TC-OPPTY-3210 — Reject with whitespace reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Reject with whitespace reason
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-046

**Automation Hint**

API-level check

#### TC-OPPTY-3211 — TM passes rejectedByRole

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_101 Only PMO can record who rejected the Candidate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM passes rejectedByRole
2. Check the response and resulting state

**Expected**

400 OPP_101

**Test Data**

- `checkId`: INT-047

**Automation Hint**

API-level check

#### TC-OPPTY-3216 — Action on a REJECTED (historical) nomination id

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Action on a REJECTED (historical) nomination id
2. Check the response and resulting state

**Expected**

404 OPP_040

**Test Data**

- `checkId`: INT-052

**Automation Hint**

API-level check

#### TC-OPPTY-3217 — TM drags a card

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM drags a card
2. Check the response and resulting state

**Expected**

403 (PMO only, rule 21)

**Test Data**

- `checkId`: INT-053

**Automation Hint**

API-level check

#### TC-OPPTY-3218 — Drag to WAITING_FOR_APPROVAL

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag to WAITING_FOR_APPROVAL
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-054

**Automation Hint**

API-level check

#### TC-OPPTY-3219 — Drag to WON directly

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag to WON directly
2. Check the response and resulting state

**Expected**

400 (not a drag target)

**Test Data**

- `checkId`: INT-055

**Automation Hint**

API-level check

#### TC-OPPTY-3220 — Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-056

**Automation Hint**

API-level check

#### TC-OPPTY-3221 — Drag Being Prepared → Interview Scheduled when no round has a date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_059 Enter the interview date to move the Candidate to this stage undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag Being Prepared → Interview Scheduled when no round has a date
2. Check the response and resulting state

**Expected**

refused or interview-date dialog required

**Test Data**

- `checkId`: INT-057

**Automation Hint**

API-level check

#### TC-OPPTY-3222 — Drag backwards to SHORTLISTED

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag backwards to SHORTLISTED
2. Check the response and resulting state

**Expected**

400 (never back to Shortlisted)

**Test Data**

- `checkId`: INT-058

**Automation Hint**

API-level check

#### TC-OPPTY-3224 — Drag an empty (Pending) card

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | EXCEPTION Cannot read properties of undefined (reading 'publicId') |
| **Last Result** | skipped |
| **Notes** | Test sequencing (no empty card in this run); covered 21 Oct. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Drag an empty (Pending) card
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-060

**Automation Hint**

API-level check

#### TC-OPPTY-3227 — Candidate ticks an unknown code

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_094 One or more checklist items are not on this Position’s Preparation Checklist |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate ticks an unknown code
2. Check the response and resulting state

**Expected**

400 OPP_094

**Test Data**

- `checkId`: INT-063

**Automation Hint**

API-level check

#### TC-OPPTY-3228 — Candidate tries to skip an item

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_166 Only PMO can skip or un-skip Preparation Checklist items |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate tries to skip an item
2. Check the response and resulting state

**Expected**

403 OPP_166 (PMO only)

**Test Data**

- `checkId`: INT-064

**Automation Hint**

API-level check

#### TC-OPPTY-3230 — Candidate ticks a PMO-skipped item

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_167 This checklist item was skipped by PMO and cannot be ticked |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate ticks a PMO-skipped item
2. Check the response and resulting state

**Expected**

400 OPP_167

**Test Data**

- `checkId`: INT-066

**Automation Hint**

API-level check

#### TC-OPPTY-3231 — Candidate edits another candidate's checklist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate edits another candidate's checklist
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: INT-067

**Automation Hint**

API-level check

#### TC-OPPTY-3232 — TM ticks a team member's checklist (read-only per matrix)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |
| **Notes** | Refused with 404 (TM has no prepare grant) — read-only as intended. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM ticks a team member's checklist (read-only per matrix)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-068

**Automation Hint**

API-level check

#### TC-OPPTY-3233 — Unrelated employee (kashyap) opens the opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Unrelated employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Unrelated employee: Unrelated employee (kashyap) opens the opportunity
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: INT-069

**Automation Hint**

API-level check

#### TC-OPPTY-3235 — TM adds a round

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM adds a round
2. Check the response and resulting state

**Expected**

403 (PMO only)

**Test Data**

- `checkId`: INT-071

**Automation Hint**

API-level check

#### TC-OPPTY-3236 — Round on CONSIDERED nomination

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_054 Interview Rounds can only be recorded for an In Process Nomination |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Round on CONSIDERED nomination
2. Check the response and resulting state

**Expected**

400 OPP_054

**Test Data**

- `checkId`: INT-072

**Automation Hint**

API-level check

#### TC-OPPTY-3238 — Round scheduledAt invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"scheduledAt","message":"scheduledAt must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Round scheduledAt invalid
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-074

**Automation Hint**

API-level check

#### TC-OPPTY-3240 — Change finalized R1 date (rule 17 lock)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round updated successfully |
| **Finding Ref** | F-05 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Finalize/lock interview schedule. · F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Change finalized R1 date (rule 17 lock)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-076

**Automation Hint**

API-level check

#### TC-OPPTY-3241 — Un-finalize R1

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"isFinalized","message":"property isFinalized should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Un-finalize R1
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-077

**Automation Hint**

API-level check

#### TC-OPPTY-3243 — Mark future-dated R1 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_138 A round can be marked Cleared or Not Cleared only once it has an interview date of today or earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Mark future-dated R1 Cleared
2. Check the response and resulting state

**Expected**

400 OPP_138

**Test Data**

- `checkId`: INT-079

**Automation Hint**

API-level check

#### TC-OPPTY-3244 — Mark undated R2 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_138 A round can be marked Cleared or Not Cleared only once it has an interview date of today or earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Mark undated R2 Cleared
2. Check the response and resulting state

**Expected**

400 OPP_138

**Test Data**

- `checkId`: INT-080

**Automation Hint**

API-level check

#### TC-OPPTY-3246 — Recording URL invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"recordingUrl","message":"recordingUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Recording URL invalid
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-082

**Automation Hint**

API-level check

#### TC-OPPTY-3248 — Delete a decided round

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_058 An Interview Round can be removed only while it is pending |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Delete a decided round
2. Check the response and resulting state

**Expected**

400 OPP_058

**Test Data**

- `checkId`: INT-084

**Automation Hint**

API-level check

#### TC-OPPTY-3252 — Edit allocation % with live candidates

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_153 Allocation type, percentage, tentative dates and preferred Employees cannot change once a Candidate is in the pipeline |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Edit allocation % with live candidates
2. Check the response and resulting state

**Expected**

400 OPP_153

**Test Data**

- `checkId`: INT-088

**Automation Hint**

API-level check

#### TC-OPPTY-3256 — Delete position with IN_PROCESS candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_025 A Position with a Candidate In Process or Selected cannot be deleted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Delete position with IN_PROCESS candidate
2. Check the response and resulting state

**Expected**

400 OPP_025

**Test Data**

- `checkId`: INT-092

**Automation Hint**

API-level check

#### TC-OPPTY-3257 — Round-skip: select qa1 from Being Prepared without confirm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Round-skip: select qa1 from Being Prepared without confirm
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-093

**Automation Hint**

API-level check

#### TC-OPPTY-3258 — TM selects (Won)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM selects (Won)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-094

**Automation Hint**

API-level check

#### TC-OPPTY-3261 — Allocate with % above remaining capacity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate with % above remaining capacity
2. Check the response and resulting state

**Expected**

400 ALLOCATION_TICKET_099 or similar

**Test Data**

- `checkId`: INT-097

**Automation Hint**

API-level check

#### TC-OPPTY-3262 — Allocate bad body (FIXED without %)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate bad body (FIXED without %)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-098

**Automation Hint**

API-level check

#### TC-OPPTY-3263 — TM / CSM allocate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403/403 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM / CSM allocate
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-099

**Automation Hint**

API-level check

#### TC-OPPTY-3265 — Allocate the same nomination again

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Allocate the same nomination again
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-101

**Automation Hint**

API-level check

#### TC-OPPTY-3269 — Same status as current

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Same status as current
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-105

**Automation Hint**

API-level check

#### TC-OPPTY-3280 — NLR without confirmation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: NLR without confirmation
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-116

**Automation Hint**

API-level check

#### TC-OPPTY-3283 — Re-initiate without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Re-initiate without reason
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-119

**Automation Hint**

API-level check

#### TC-OPPTY-3284 — TM re-initiates

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM re-initiates
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-120

**Automation Hint**

API-level check

#### TC-OPPTY-3286 — Re-initiate when nothing to release

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_122 This Position has no Candidates to re-initiate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Re-initiate when nothing to release
2. Check the response and resulting state

**Expected**

400 OPP_122

**Test Data**

- `checkId`: INT-122

**Automation Hint**

API-level check

#### TC-OPPTY-3291 — createdFrom > createdTo

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: createdFrom > createdTo
2. Check the response and resulting state

**Expected**

400 or empty

**Test Data**

- `checkId`: INT-127

**Automation Hint**

API-level check

#### TC-OPPTY-3322 — DIRECT without employee

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_126 A Direct Position needs the Employee to allocate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT without employee
2. Check the response and resulting state

**Expected**

400 OPP_126

**Test Data**

- `checkId`: DIR-001

**Automation Hint**

API-level check

#### TC-OPPTY-3323 — DIRECT without tentative allocation date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_127 A Direct Position needs a tentative allocation date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT without tentative allocation date
2. Check the response and resulting state

**Expected**

400 OPP_127

**Test Data**

- `checkId`: DIR-002

**Automation Hint**

API-level check

#### TC-OPPTY-3324 — DIRECT with requiredCount 2

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT with requiredCount 2
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-003

**Automation Hint**

API-level check

#### TC-OPPTY-3325 — DIRECT with round titles

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT with round titles
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-004

**Automation Hint**

API-level check

#### TC-OPPTY-3326 — DIRECT with isInterviewRequired true

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT with isInterviewRequired true
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-005

**Automation Hint**

API-level check

#### TC-OPPTY-3327 — DIRECT with prep material

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT with prep material
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-006

**Automation Hint**

API-level check

#### TC-OPPTY-3328 — DIRECT with unknown employee

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 404 OPP_048 Employee not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: DIRECT with unknown employee
2. Check the response and resulting state

**Expected**

404 OPP_048

**Test Data**

- `checkId`: DIR-007

**Automation Hint**

API-level check

#### TC-OPPTY-3329 — Same employee on two positions of one DIRECT request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_175 A Direct Opportunity has exactly one Position |
| **Finding Ref** | F-13 |
| **Last Result** | passed |
| **Notes** | F-13: A Direct request can hold only one employee |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Same employee on two positions of one DIRECT request
2. Check the response and resulting state

**Expected**

refused (duplicate allocation request)

**Test Data**

- `checkId`: DIR-008

**Automation Hint**

API-level check

#### TC-OPPTY-3334 — Interview action on a DIRECT ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_124 This action is only available on Interview Opportunities |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Interview action on a DIRECT ticket
2. Check the response and resulting state

**Expected**

400 OPP_124

**Test Data**

- `checkId`: DIR-013

**Automation Hint**

API-level check

#### TC-OPPTY-3335 — CSM (raiser) moves Direct stage

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM (raiser) moves Direct stage
2. Check the response and resulting state

**Expected**

403 OPP_133

**Test Data**

- `checkId`: DIR-014

**Automation Hint**

API-level check

#### TC-OPPTY-3336 — TM moves Direct stage

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM moves Direct stage
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: DIR-015

**Automation Hint**

API-level check

#### TC-OPPTY-3339 — Move backwards IN_REVIEW → OPEN

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Move backwards IN_REVIEW → OPEN
2. Check the response and resulting state

**Expected**

400 OPP_130

**Test Data**

- `checkId`: DIR-018

**Automation Hint**

API-level check

#### TC-OPPTY-3341 — Owner sets tentativeAllocationDate null

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_127 A Direct Position needs a tentative allocation date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM (owner): Owner sets tentativeAllocationDate null
2. Check the response and resulting state

**Expected**

400 OPP_127

**Test Data**

- `checkId`: DIR-020

**Automation Hint**

API-level check

#### TC-OPPTY-3342 — Non-owner CSM (sai.gandhi) edits

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Non-owner CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Non-owner CSM: Non-owner CSM (sai.gandhi) edits
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: DIR-021

**Automation Hint**

API-level check

#### TC-OPPTY-3344 — Owner swaps employee while AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_132 The Employee can only be changed while the ticket is Open or In Review |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM (owner): Owner swaps employee while AWAITING
2. Check the response and resulting state

**Expected**

400 OPP_132

**Test Data**

- `checkId`: DIR-023

**Automation Hint**

API-level check

#### TC-OPPTY-3349 — APPROVED is terminal

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: APPROVED is terminal
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-028

**Automation Hint**

API-level check

#### TC-OPPTY-3350 — Owner edits after APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_152 A Direct ticket can be edited only while it is open and not yet Approved or Rejected |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM (owner): Owner edits after APPROVED
2. Check the response and resulting state

**Expected**

400 OPP_152

**Test Data**

- `checkId`: DIR-029

**Automation Hint**

API-level check

#### TC-OPPTY-3351 — Cancel tag after APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_147 Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Cancel tag after APPROVED
2. Check the response and resulting state

**Expected**

400 OPP_147

**Test Data**

- `checkId`: DIR-030

**Automation Hint**

API-level check

#### TC-OPPTY-3352 — Reject without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_131 A reason is required to reject a Direct ticket |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Reject without reason
2. Check the response and resulting state

**Expected**

400 OPP_131

**Test Data**

- `checkId`: DIR-031

**Automation Hint**

API-level check

#### TC-OPPTY-3355 — REJECTED is terminal (move to IN_REVIEW)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: REJECTED is terminal (move to IN_REVIEW)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-034

**Automation Hint**

API-level check

#### TC-OPPTY-3356 — TM tries to cancel

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 403 OPP_149 Only PMO, the raiser, the Project PM or CSM, or the assigned PM or CSM can mark this Direct ticket as cancelled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM tries to cancel
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: DIR-035

**Automation Hint**

API-level check

#### TC-OPPTY-3360 — Cancel again

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Cancel again
2. Check the response and resulting state

**Expected**

409 OPP_148

**Test Data**

- `checkId`: DIR-039

**Automation Hint**

API-level check

#### TC-OPPTY-3368 — Force APPROVED without project

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_049 Link the Opportunity to a Project before allocating the Candidate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Force APPROVED without project
2. Check the response and resulting state

**Expected**

400 OPP_049

**Test Data**

- `checkId`: DIR-047

**Automation Hint**

API-level check

#### TC-OPPTY-3370 — CSM links a project it does not manage

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 403 OPP_009 You can only raise or link Opportunities for Projects you manage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM links a project it does not manage
2. Check the response and resulting state

**Expected**

403 OPP_009

**Test Data**

- `checkId`: DIR-049

**Automation Hint**

API-level check

#### TC-OPPTY-3371 — CSM unlinks project on EXISTING

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 OPP_019 Link a Project you manage to raise an Existing Client Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: CSM unlinks project on EXISTING
2. Check the response and resulting state

**Expected**

400 OPP_019

**Test Data**

- `checkId`: DIR-050

**Automation Hint**

API-level check

#### TC-OPPTY-3375 — APPROVED for fully-booked employee → capacity error passes through

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 400 ALLOCATION_TICKET_099 This employee's total active allocation percentage across all projects would exceed their maximum allowed allocation (100% base, plus what each shadow developer covering them is allocated, up to 2 shadow developers) [{"projectAssignmentPublicId":"f2bdcfd3-6923-4924-9527-7c29dabd0398","projectPublicId":"1151a973-f0d5-4a2b-b9ca-ed8219cc |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: APPROVED for fully-booked employee → capacity error passes through
2. Check the response and resulting state

**Expected**

400 ALLOCATION_TICKET_099

**Test Data**

- `checkId`: DIR-054

**Automation Hint**

API-level check

#### TC-OPPTY-3385 — Candidate (employee) adds prep material

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As Candidate: Candidate (employee) adds prep material
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: MSC-005

**Automation Hint**

API-level check

#### TC-OPPTY-3390 — PATCH title null (required)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PATCH title null (required)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-010

**Automation Hint**

API-level check

#### TC-OPPTY-3391 — PATCH websiteUrl "" (not a clear per contract)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] stored=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PATCH websiteUrl "" (not a clear per contract)
2. Check the response and resulting state

**Expected**

400 or ignored

**Test Data**

- `checkId`: MSC-011

**Automation Hint**

API-level check

#### TC-OPPTY-3392 — PATCH unknown key

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"status","message":"property status should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PATCH unknown key
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-012

**Automation Hint**

API-level check

#### TC-OPPTY-3393 — PATCH requestType (fixed at create)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"requestType","message":"property requestType should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PATCH requestType (fixed at create)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-013

**Automation Hint**

API-level check

#### TC-OPPTY-3396 — PMO edits a LOST opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO edits a LOST opportunity
2. Check the response and resulting state

**Expected**

400/403 (edit only while OPEN)

**Test Data**

- `checkId`: MSC-016

**Automation Hint**

API-level check

#### TC-OPPTY-3397 — Add position to a LOST opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Add position to a LOST opportunity
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-017

**Automation Hint**

API-level check

#### TC-OPPTY-3398 — Delete the last position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_011 An Opportunity needs at least one Position; change its status instead |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Delete the last position
2. Check the response and resulting state

**Expected**

400 OPP_011

**Test Data**

- `checkId`: MSC-018

**Automation Hint**

API-level check

#### TC-OPPTY-3408 — RM shortlists (matrix: no)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | skip |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As RM: RM shortlists (matrix: no)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: MSC-028

**Automation Hint**

API-level check

### Other (8)

#### TC-OPPTY-2134 — Board (List, search Demo) at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1280×720 |
| **Actual Result** | page h-scroll=false; buttons off-screen: Edit, Won, Edit, Waiting for Feedback, Edit — not a page overflow: list/Kanban scroll sideways inside their area; ~3 of 13 Kanban columns visible. Tip: zoom 80%. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1280×720: as PMO, Board (List, search Demo) at 1280×720
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-board

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2135 — Kanban at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1280×720 |
| **Actual Result** | page h-scroll=false; buttons off-screen: Being Prepared, Interview Scheduled, Did Interview Happen?, Waiting for Feedback, Won — not a page overflow: list/Kanban scroll sideways inside their area; ~3 of 13 Kanban columns visible. Tip: zoom 80%. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1280×720: as PMO, Kanban at 1280×720
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-kanban

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2136 — Ticket detail OPP-0227 at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1280×720 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1280×720: as PMO, Ticket detail OPP-0227 at 1280×720
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-detail

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2137 — Candidate interview dialog at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1280×720 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1280×720: as PMO, Candidate interview dialog at 1280×720
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-dialog

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2140 — Board (List, search Demo) at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1366×768 |
| **Actual Result** | page h-scroll=false; buttons off-screen: Edit, Won, Edit, Waiting for Feedback, Edit — not a page overflow: list/Kanban scroll sideways inside their area; ~3 of 13 Kanban columns visible. Tip: zoom 80%. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1366×768: as PMO, Board (List, search Demo) at 1366×768
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-board

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2141 — Kanban at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1366×768 |
| **Actual Result** | page h-scroll=false; buttons off-screen: Being Prepared, Interview Scheduled, Did Interview Happen?, Waiting for Feedback, Won — not a page overflow: list/Kanban scroll sideways inside their area; ~3 of 13 Kanban columns visible. Tip: zoom 80%. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1366×768: as PMO, Kanban at 1366×768
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-kanban

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2142 — Ticket detail OPP-0227 at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1366×768 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1366×768: as PMO, Ticket detail OPP-0227 at 1366×768
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-detail

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2143 — Candidate interview dialog at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @other, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1366×768 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1366×768: as PMO, Candidate interview dialog at 1366×768
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-dialog

**Automation Hint**

Playwright UI (scratchpad harness)

### Regression (14)

#### TC-OPPTY-2066 — A candidate rejected on this opportunity is greyed out in Add/ Shortlist (as the ticket page says)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @new, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — New test cases (27 Oct retest) |
| **Actual Result** | Ticket page info icon says rejected candidates are greyed out in Add/ Shortlist so they can't be shortlisted again. In the picker, Gargi Das (rejected by TM on OPP-0269) is listed and can be ticked; API canNominate=true. → BUG-047 |
| **Finding Ref** | BUG-047 |
| **Last Result** | failed |
| **Notes** | BUG-047 still reproduces · New test case (27 Oct retest) |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT7 New test cases (27 Oct retest): as PMO, A candidate rejected on this opportunity is greyed out in Add/ Shortlist (as the ticket page says)
2. Check the screen, toast and resulting state

**Expected**

Gargi Das (rejected by TM) shown greyed, cannot be ticked

**Test Data**

- `checkId`: NEW-14

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2067 — BUG-038 retest: interview-scheduled notification time

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Mon, 26 Oct 2026 18:30:00 GMT. \| Mon, 26 Oct 2026 18:30:00 GMT. |
| **Finding Ref** | BUG-038 |
| **Last Result** | failed |
| **Notes** | BUG-038 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as Candidate, BUG-038 retest: interview-scheduled notification time
2. Check the screen, toast and resulting state

**Expected**

Date/time in IST, right day

**Test Data**

- `checkId`: RT-BUG-038

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2068 — BUG-039 retest: allocation ticket NA-0470 (from OPP-0306) findable in Requests Tracking

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Direct tab search NA-0470: 0 \| Interview tab search NA-0470: 0 \| OPP-0306 row has csm/employee fields: false |
| **Finding Ref** | BUG-039 |
| **Last Result** | failed |
| **Notes** | BUG-039 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PMO, BUG-039 retest: allocation ticket NA-0470 (from OPP-0306) findable in Requests Tracking
2. Check the screen, toast and resulting state

**Expected**

Found on a tab; OPP row shows CSM and employee

**Test Data**

- `checkId`: RT-BUG-039

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2069 — BUG-040 retest: JAVA TM shortlists a QA employee onto a JAVA position

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Varsha Langalia (QA) on OPP-0282 → 201 OPP_074 Candidates nominated successfully |
| **Finding Ref** | BUG-040 |
| **Last Result** | failed |
| **Notes** | BUG-040 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as TM (JAVA), BUG-040 retest: JAVA TM shortlists a QA employee onto a JAVA position
2. Check the screen, toast and resulting state

**Expected**

Refused (pending product decision)

**Test Data**

- `checkId`: RT-BUG-040

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2070 — BUG-041 retest: What's New release notes

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | All |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | GET /releases → 0 releases |
| **Finding Ref** | BUG-041 |
| **Last Result** | failed |
| **Notes** | BUG-041 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as All, BUG-041 retest: What's New release notes
2. Check the screen, toast and resulting state

**Expected**

Release notes returned

**Test Data**

- `checkId`: RT-BUG-041

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2071 — BUG-042 retest: TM message after an interview allocation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Direct Allocation: AnalytixHub \| Advanced Analytics — Bhumi Chauhan directly allocated Chirag Bajaj to AnalytixHub \| Advanced Analytics, bypassing the ticket workflow. |
| **Finding Ref** | BUG-042 |
| **Last Result** | failed |
| **Notes** | BUG-042 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as TM (JAVA), BUG-042 retest: TM message after an interview allocation
2. Check the screen, toast and resulting state

**Expected**

Says allocated from the interview ticket

**Test Data**

- `checkId`: RT-BUG-042

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2072 — BUG-023 retest: candidate-facing wording

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Chirag Bajaj selected for Java Developer — Chirag Bajaj was selected for 'Java Developer' on OPP-0306 — proceed to Project Association. \| Round 2 result for Chirag Bajaj — Chirag Bajaj's round 2 for 'Java Developer' on OPP-0306: Cleared. \| Interview scheduled for Java Developer — Your round 2 interv |
| **Finding Ref** | BUG-023 |
| **Last Result** | failed |
| **Notes** | BUG-023 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as Candidate, BUG-023 retest: candidate-facing wording
2. Check the screen, toast and resulting state

**Expected**

Second person, no PMO instructions

**Test Data**

- `checkId`: RT-BUG-023

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2073 — Allocation notification title capitalisation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @new, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | title: "You've Been allocated to AnalytixHub \| Advanced Analytics" \| body: "You've been allocated to AnalytixHub \| Advanced Analytics starting 2026-11-03." \| event notification.allocation.direct_employee_assigned |
| **Finding Ref** | BUG-048 |
| **Last Result** | failed |
| **Notes** | BUG-048 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as Candidate, Allocation notification title capitalisation
2. Check the screen, toast and resulting state

**Expected**

"You've been allocated to …"

**Test Data**

- `checkId`: RT-BUG-048

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2074 — BUG-044 retest: 200-character client name in the Kanban client dropdown

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | dropdown width 1650px on a 1600px window |
| **Finding Ref** | BUG-044 |
| **Last Result** | failed |
| **Notes** | BUG-044 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PMO, BUG-044 retest: 200-character client name in the Kanban client dropdown
2. Check the screen, toast and resulting state

**Expected**

Dropdown keeps a normal width

**Test Data**

- `checkId`: RT-BUG-044

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2075 — BUG-043 retest: prep link typed on the create form but not "Add Link"-ed

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | POST 201 OPP-0310 \| prepMaterials saved: [] \| toast: Opportunity created successfully. |
| **Finding Ref** | BUG-043 |
| **Last Result** | failed |
| **Notes** | BUG-043 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PMO, BUG-043 retest: prep link typed on the create form but not "Add Link"-ed
2. Check the screen, toast and resulting state

**Expected**

Saved, or a warning before submit

**Test Data**

- `checkId`: RT-BUG-043

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2076 — BUG-046: a round left without a title shows "Round 1:" with a dangling colon

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @new, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Round 1: Cleared \| Round 2: Cleared (rounds created from the form with blank titles; stored as "R1:", "R2:") |
| **Finding Ref** | BUG-046 |
| **Last Result** | failed |
| **Notes** | BUG-046 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PMO, BUG-046: a round left without a title shows "Round 1:" with a dangling colon
2. Check the screen, toast and resulting state

**Expected**

"Round 1" (no colon) when untitled

**Test Data**

- `checkId`: RT-BUG-046

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2077 — BUG-045 retest: bare dashes for empty values

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Project Description - \| End Date - |
| **Finding Ref** | BUG-045 |
| **Last Result** | failed |
| **Notes** | BUG-045 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PMO, BUG-045 retest: bare dashes for empty values
2. Check the screen, toast and resulting state

**Expected**

Readable placeholder

**Test Data**

- `checkId`: RT-BUG-045

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2078 — BUG-035 retest: ticket number cut off in the board list

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | Board list still shows truncated ticket numbers ("OPP-03…") — see the Advanced filter screenshot from this run. |
| **Finding Ref** | BUG-035 |
| **Last Result** | failed |
| **Notes** | BUG-035 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PMO, BUG-035 retest: ticket number cut off in the board list
2. Check the screen, toast and resulting state

**Expected**

Full ticket number visible

**Test Data**

- `checkId`: RT-BUG-035

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2079 — BUG-036 retest: PM sees tickets on his project not assigned to him

| Field | Value |
| --- | --- |
| **Tags** | @regression, @ui, @retest, @bug |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Bug retests (27 Oct) |
| **Actual Result** | OPP-0150 (EventDriven, not assigned to Gaurav) listed=true |
| **Finding Ref** | BUG-036 |
| **Last Result** | failed |
| **Notes** | BUG-036 still reproduces |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT8 Bug retests (27 Oct): as PM, BUG-036 retest: PM sees tickets on his project not assigned to him
2. Check the screen, toast and resulting state

**Expected**

Only tickets assigned to him

**Test Data**

- `checkId`: RT-BUG-036

**Automation Hint**

Playwright UI (scratchpad harness)

### Security (9)

#### TC-OPPTY-3016 — websiteUrl javascript: scheme

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: websiteUrl javascript: scheme
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-016

**Automation Hint**

API-level check

#### TC-OPPTY-3028 — jobDescription HTML with <script> is sanitised

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0247 "<p>Hello</p><img src=\"x\" /><a>x</a>" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: jobDescription HTML with <script> is sanitised
2. Check the response and resulting state

**Expected**

201 created + no script/onerror/javascript: stored

**Test Data**

- `checkId`: VAL-028

**Automation Hint**

API-level check

#### TC-OPPTY-3161 — Out-of-scope id returns 404 not 403 (no existence leak)

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Out-of-scope id returns 404 not 403 (no existence leak)
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: RBAC-055

**Automation Hint**

API-level check

#### TC-OPPTY-3319 — Another employee reads akash's history (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully n=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Another employee reads akash's history (IDOR)
2. Check the response and resulting state

**Expected**

403/404/empty

**Test Data**

- `checkId`: ALC-026

**Automation Hint**

API-level check

#### TC-OPPTY-3378 — Direct tickets do not leak into the Interview board

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | direct cards on interview board=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO / CSM: Direct tickets do not leak into the Interview board
2. Check the response and resulting state

**Expected**

no DIRECT card on default board

**Test Data**

- `checkId`: DIR-057

**Automation Hint**

API-level check

#### TC-OPPTY-3386 — Prep material URL javascript:

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"url","message":"url must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Prep material URL javascript:
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-006

**Automation Hint**

API-level check

#### TC-OPPTY-3409 — Title with HTML is stored raw (UI must escape)

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_002 Opportunity created successfully stored=QA-AUTO <img src=x onerror=alert(1)> xss |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Title with HTML is stored raw (UI must escape)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: MSC-029

**Automation Hint**

API-level check

#### TC-OPPTY-3410 — Unauthenticated board read

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 401 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Unauthenticated board read
2. Check the response and resulting state

**Expected**

401

**Test Data**

- `checkId`: MSC-030

**Automation Hint**

API-level check

#### TC-OPPTY-3411 — Non-uuid id in path

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 SYS_004 Validation failed (uuid is expected) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Non-uuid id in path
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-031

**Automation Hint**

API-level check

### Smoke (23)

#### TC-OPPTY-2004 — Create Interview opportunity (Existing / AnalytixHub, 2 openings, 2 rounds)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | OPP-0306 (31.7 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Create Interview opportunity (Existing / AnalytixHub, 2 openings, 2 rounds)
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-04

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2010 — TM approves A

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | approved (6.0 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as TM (JAVA), TM approves A
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-10

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2017 — Allocate A to AnalytixHub

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views) |
| **Actual Result** | Project Allocated (3.7 s) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT1 Main path on a JAVA position (create → allocate → did-it-happen → reject → candidate & PM views): as PMO, Allocate A to AnalytixHub
2. Check the screen, toast and resulting state

**Expected**

Step completes as in the demo script

**Test Data**

- `checkId`: RT1-17

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2045 — Allocate is disabled while the Prospect has no project

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | count 1 disabled=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Allocate is disabled while the Prospect has no project
2. Check the screen, toast and resulting state

**Expected**

Disabled ("No Project linked")

**Test Data**

- `checkId`: RT5-06

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2047 — Allocate once linked

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Rounds + Link Project + Allocate on a Prospect (retest) |
| **Actual Result** | Project Allocated |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. RT5 Rounds + Link Project + Allocate on a Prospect (retest): as PMO, Allocate once linked
2. Check the screen, toast and resulting state

**Expected**

Project Allocated

**Test Data**

- `checkId`: RT5-08

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2101 — Demo 7: Allocate the Won candidate

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | prefill start=10/11/2026 pct=50 → Project Allocated |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as PMO, Demo 7: Allocate the Won candidate
2. Check the screen, toast and resulting state

**Expected**

Allocate dialog pre-filled (start date, 50%); → Project Allocated

**Test Data**

- `checkId`: D1-11

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2103 — Demo 2: TM approves from the ticket

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Prepared demo tickets — presenter actions (on copies) |
| **Actual Result** | Being Prepared, Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D1 Prepared demo tickets — presenter actions (on copies): as TM (QA), Demo 2: TM approves from the ticket
2. Check the screen, toast and resulting state

**Expected**

Approved; Being Prepared

**Test Data**

- `checkId`: D1-13

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2105 — Board (List) load time

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | 2893 ms |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Board (List) load time
2. Check the screen, toast and resulting state

**Expected**

Under 5 s to a populated table

**Test Data**

- `checkId`: D2-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2106 — Kanban load time

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Board — search, filters, views, drag-and-drop |
| **Actual Result** | 2684 ms (all ~340 open cards) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D2 Board — search, filters, views, drag-and-drop: as PMO, Kanban load time
2. Check the screen, toast and resulting state

**Expected**

Under 5 s to columns with cards

**Test Data**

- `checkId`: D2-02

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2126 — Create a Direct opportunity on AnalytixHub for Yatharth Malhotra (30%, allocation confirmed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | POST 201 OPP-0318 \|  \| toast: Opportunity created successfully. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as PMO, Create a Direct opportunity on AnalytixHub for Yatharth Malhotra (30%, allocation confirmed)
2. Check the screen, toast and resulting state

**Expected**

201; ticket opens; Direct ticket in Open

**Test Data**

- `checkId`: D4-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2131 — Create a Direct opportunity on AnalytixHub for Ira Ghosh (30%, allocation confirmed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Direct opportunity flow |
| **Actual Result** | POST 201 OPP-0319 \|  \| toast: Opportunity created successfully. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D4 Direct opportunity flow: as CSM, Create a Direct opportunity on AnalytixHub for Ira Ghosh (30%, allocation confirmed)
2. Check the screen, toast and resulting state

**Expected**

201; ticket opens; Direct ticket in Open

**Test Data**

- `checkId`: D4C-01

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2138 — Allocate dialog (opened, not submitted) on OPP-0228 at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1280×720 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1280×720: as PMO, Allocate dialog (opened, not submitted) on OPP-0228 at 1280×720
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-allocate

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2139 — Create form at 1280×720

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1280×720 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1280×720: as PMO, Create form at 1280×720
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1280-create

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2144 — Allocate dialog (opened, not submitted) on OPP-0228 at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1366×768 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1366×768: as PMO, Allocate dialog (opened, not submitted) on OPP-0228 at 1366×768
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-allocate

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-2145 — Create form at 1366×768

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · demo runbook 28 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — Projector resolution 1366×768 |
| **Actual Result** | page h-scroll=false; buttons off-screen: none |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0, 27 Oct 2026 evening (same build as the morning run). Fresh JAVA test data; logged in via /dev-login as the role shown.

**Steps**

1. D6 Projector resolution 1366×768: as PMO, Create form at 1366×768
2. Check the screen, toast and resulting state

**Expected**

No page-level horizontal scroll; primary buttons visible

**Test Data**

- `checkId`: D6-1366-create

**Automation Hint**

Playwright UI (scratchpad harness)

#### TC-OPPTY-3001 — Minimal valid Interview/Prospect opportunity

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0240 OPP-0240 OPEN INTERVIEW openings=1/PENDING_TO_SHORTLIST displayId=QA-QE-326 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Minimal valid Interview/Prospect opportunity
2. Check the response and resulting state

**Expected**

201 created + ticket OPP-nnnn, status OPEN, 1 opening at PENDING_TO_SHORTLIST, requestType INTERVIEW

**Test Data**

- `checkId`: VAL-001

**Automation Hint**

API-level check

#### TC-OPPTY-3109 — csm raises EXISTING (project managed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As CSM: csm raises EXISTING (project managed)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-003

**Automation Hint**

API-level check

#### TC-OPPTY-3171 — TM (QA) shortlists 2 QA candidates

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully #1:SHORTLISTED:CONSIDERED #2:SHORTLISTED:CONSIDERED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM (QA) shortlists 2 QA candidates
2. Check the response and resulting state

**Expected**

201, 2 cards SHORTLISTED, CONSIDERED

**Test Data**

- `checkId`: INT-007

**Automation Hint**

API-level check

#### TC-OPPTY-3194 — Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | BEING_PREPARED IN_PROCESS blocked=true rounds=2 titles=R1 Technical\|R2 Client |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded
2. Check the response and resulting state

**Expected**

2 planned rounds

**Test Data**

- `checkId`: INT-030

**Automation Hint**

API-level check

#### TC-OPPTY-3212 — TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination rejected successfully PENDING_TO_SHORTLIST active=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As TM: TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6)
2. Check the response and resulting state

**Expected**

card PENDING_TO_SHORTLIST, nomination REJECTED

**Test Data**

- `checkId`: INT-048

**Automation Hint**

API-level check

#### TC-OPPTY-3306 — PMO allocates → Project Allocated + allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Candidate allocated to the Project successfully PROJECT_ALLOCATED ticket=13152f34-6c00-4ff8-a9df-83e9dae558dd blocked=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO allocates → Project Allocated + allocation ticket
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED

**Test Data**

- `checkId`: ALC-013

**Automation Hint**

API-level check

#### TC-OPPTY-3347 — PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully directStage=APPROVED stage=PROJECT_ALLOCATED filled=1 ticket=1df824f8-51e6-47ad-8071-9463abbb33d8 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%)
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED, allocation ticket

**Test Data**

- `checkId`: DIR-026

**Automation Hint**

API-level check

#### TC-OPPTY-3364 — PMO closes cancelled ticket → No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @retest |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Retest 27 Oct — API Direct allocation flow |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 evening.

**Steps**

1. As PMO: PMO closes cancelled ticket → No Longer Required
2. Check the response and resulting state

**Expected**

200 NLR

**Test Data**

- `checkId`: DIR-043

**Automation Hint**

API-level check
