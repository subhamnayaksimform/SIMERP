# Pre-sales Opportunities — Test Cases

**Total test cases:** 496  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-10-27-OPPTY-interview-e2e.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| negative | 198 | 39.9% |
| functional | 191 | 38.5% |
| integration | 47 | 9.5% |
| boundary | 37 | 7.5% |
| smoke | 14 | 2.8% |
| security | 9 | 1.8% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 462 | 93.1% |
| low | 19 | 3.8% |
| high | 15 | 3.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 468 | 94.4% |
| low | 19 | 3.8% |
| high | 9 | 1.8% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 496 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 496 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 496 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @api | 411 | 82.9% |
| @regression | 411 | 82.9% |
| @negative | 198 | 39.9% |
| @functional | 191 | 38.5% |
| @ui | 85 | 17.1% |
| @integration | 47 | 9.5% |
| @boundary | 37 | 7.5% |
| @smoke | 14 | 2.8% |
| @gap | 10 | 2.0% |
| @security | 9 | 1.8% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-701](#tc-oppty-701-open-create-new-opportunity-form) | Open Create New Opportunity form | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-702](#tc-oppty-702-fill-every-interview-existing-client-field-project-analytixhub-pm-csm-2-openings-2-rounds-prep-link) | Fill every Interview / Existing Client field (project AnalytixHub, PM, CSM, 2 openings, 2 rounds, prep link) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-703](#tc-oppty-703-submit-create-opportunity) | Submit Create Opportunity | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-704](#tc-oppty-704-prep-material-typed-in-the-create-form-but-not-add-link-ed) | Prep material typed in the create form but not "Add Link"-ed | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-705](#tc-oppty-705-ticket-detail-after-create-shows-header-assignees-and-position) | Ticket detail after create shows header, assignees and position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-706](#tc-oppty-706-pick-2-candidates-in-the-candidate-shortlist-dialog) | Pick 2 candidates in the Candidate Shortlist dialog | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-707](#tc-oppty-707-two-way-allocation-alert-when-shortlisting-someone-with-a-direct-allocation) | Two-way allocation alert when shortlisting someone with a direct allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-708](#tc-oppty-708-shortlist-kriti-desai-uday-dave) | Shortlist Kriti Desai + Uday Dave | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-709](#tc-oppty-709-pmo-sends-kriti-desai-for-tm-approval) | PMO sends Kriti Desai for TM approval | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-710](#tc-oppty-710-bypass-tm-approval-for-uday-dave-with-an-empty-reason) | Bypass TM approval for Uday Dave with an empty reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-711](#tc-oppty-711-bypass-tm-approval-for-uday-dave-with-a-reason) | Bypass TM approval for Uday Dave with a reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-712](#tc-oppty-712-tm-gets-an-in-app-notification-for-the-approval-request) | TM gets an in-app notification for the approval request | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-713](#tc-oppty-713-tm-finds-opp-0156-on-the-opportunity-board) | TM finds OPP-0156 on the Opportunity board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-714](#tc-oppty-714-tm-approves-kriti-desai) | TM approves Kriti Desai | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-715](#tc-oppty-715-pmo-adds-preparation-material-from-the-ticket-s-preparation-material-tab) | PMO adds preparation material from the ticket's Preparation Material tab | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-716](#tc-oppty-716-candidate-dialog-opportunity-details-tab) | Candidate dialog — Opportunity Details tab | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-717](#tc-oppty-717-empty-values-in-the-candidate-dialog-use-a-readable-placeholder) | Empty values in the candidate dialog use a readable placeholder | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-718](#tc-oppty-718-tick-2-checklist-items-and-skip-one-pmo) | Tick 2 checklist items and skip one (PMO) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-719](#tc-oppty-719-candidate-dialog-preparation-material-tab-shows-the-ticket-material) | Candidate dialog — Preparation Material tab shows the ticket material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-720](#tc-oppty-720-round-date-picker-range) | Round date picker range | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-721](#tc-oppty-721-set-round-1-interview-date-to-today) | Set Round 1 interview date to today | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-722](#tc-oppty-722-enter-interviewer-recording-url-and-feedback-on-round-1-saves-on-blur) | Enter interviewer, recording URL and feedback on Round 1 (saves on blur) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-723](#tc-oppty-723-mark-round-1-cleared) | Mark Round 1 Cleared | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-724](#tc-oppty-724-date-round-2-today-card-moves-to-interview-scheduled) | Date Round 2 today → card moves to Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-725](#tc-oppty-725-mark-round-2-cleared-last-round) | Mark Round 2 Cleared (last round) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-726](#tc-oppty-726-mark-won-from-the-candidate-dialog) | Mark Won from the candidate dialog | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-727](#tc-oppty-727-allocate-dialog-pre-fills-from-the-position) | Allocate dialog pre-fills from the position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-728](#tc-oppty-728-submit-allocate-50-green-development-work) | Submit Allocate (50%, Green, Development Work) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-729](#tc-oppty-729-allocation-ticket-na-0450-from-the-interview-won-allocate-can-be-found-in-requests-tracking) | Allocation ticket NA-0450 (from the interview Won → Allocate) can be found in Requests Tracking | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-730](#tc-oppty-730-interview-allocation-row-for-opp-0156-shows-csm-and-allocated-employee) | Interview Allocation row for OPP-0156 shows CSM and allocated employee | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-731](#tc-oppty-731-assigned-pm-sees-opp-0156-under-requests-tracking-interview-allocation) | Assigned PM sees OPP-0156 under Requests Tracking → Interview Allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-732](#tc-oppty-732-candidate-cannot-open-the-opportunity-board) | Candidate cannot open the Opportunity board | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-733](#tc-oppty-733-set-round-1-date-to-yesterday-interview-day-already-over) | Set Round 1 date to yesterday (interview day already over) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-734](#tc-oppty-734-prompt-did-the-interview-happen-shows-on-round-1) | Prompt "Did the interview happen?" shows on Round 1 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-735](#tc-oppty-735-didn-t-happen-reschedule-to-today) | Didn't happen → reschedule to today | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-736](#tc-oppty-736-back-date-again-then-answer-completed) | Back-date again, then answer Completed | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-737](#tc-oppty-737-old-card-opp-0066-r1-dated-20-10-unanswered-after-4-nights) | Old card OPP-0066 (R1 dated 20/10, unanswered) after 4 nights | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-738](#tc-oppty-738-edit-the-interviewer-on-opp-0066-round-1-any-round-write-re-derives-the-stage) | Edit the interviewer on OPP-0066 Round 1 (any round write re-derives the stage) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-739](#tc-oppty-739-didn-t-happen-skip-round-opp-0047-round-1-dated-19-10) | Didn't happen → Skip round (OPP-0047 Round 1, dated 19/10) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-740](#tc-oppty-740-kanban-where-did-interview-happen-cards-sit) | Kanban: where "Did Interview Happen?" cards sit | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-741](#tc-oppty-741-mark-round-1-not-cleared-for-a-waiting-for-feedback-candidate) | Mark Round 1 Not Cleared for a Waiting-for-Feedback candidate | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-742](#tc-oppty-742-reject-an-in-process-candidate-after-a-not-cleared-round-from-the-board-change-status-menu) | Reject an In Process candidate after a Not Cleared round, from the board "Change status" menu | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-743](#tc-oppty-743-shortlist-3-candidates-when-only-1-opening-is-empty) | Shortlist 3 candidates when only 1 opening is empty | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-744](#tc-oppty-744-remove-a-shortlisted-candidate-rushil-makwana-reason-required) | Remove a shortlisted candidate (Rushil Makwana) — reason required | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-745](#tc-oppty-745-send-diya-nair-for-approval-then-withdraw-the-request) | Send Diya Nair for approval, then withdraw the request | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-746](#tc-oppty-746-tm-rejects-aarav-dutta-s-approval-request-with-a-reason) | TM rejects Aarav Dutta's approval request with a reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-747](#tc-oppty-747-re-initiate-the-position-with-a-reason) | Re-initiate the position with a reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-748](#tc-oppty-748-cancel-request-dialog-lists-the-outcomes) | Cancel Request dialog lists the outcomes | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-749](#tc-oppty-749-put-opp-0157-on-hold) | Put OPP-0157 On Hold | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-750](#tc-oppty-750-mark-opp-0158-client-lost) | Mark OPP-0158 Client Lost | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-751](#tc-oppty-751-board-status-menu-no-longer-required-on-opp-0159) | Board status menu → No Longer Required on OPP-0159 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-752](#tc-oppty-752-board-summary-tiles-after-the-closes) | Board summary tiles after the closes | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-753](#tc-oppty-753-re-open-the-on-hold-ticket-opp-0157-from-the-board-status-menu) | Re-open the On Hold ticket OPP-0157 from the board status menu | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-754](#tc-oppty-754-csm-opens-opportunity-allocation) | CSM opens Opportunity Allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-755](#tc-oppty-755-csm-creates-an-existing-client-interview-ticket-on-own-project-elitepay) | CSM creates an Existing-client Interview ticket on own project ElitePay | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-756](#tc-oppty-756-csm-edits-the-ticket-they-raised-edit-ticket-special-instructions) | CSM edits the ticket they raised (Edit Ticket → Special Instructions) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-757](#tc-oppty-757-csm-sees-candidate-actions-add-shortlist-on-own-interview-ticket) | CSM sees candidate actions? (Add/ Shortlist on own Interview ticket) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-758](#tc-oppty-758-csm-cancels-own-interview-ticket) | CSM cancels own Interview ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-759](#tc-oppty-759-admin-opens-the-board-and-opp-0156) | Admin opens the board and OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-760](#tc-oppty-760-candidate-kriti-opens-the-opp-0156-link-from-her-notification) | Candidate (Kriti) opens the OPP-0156 link from her notification | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-761](#tc-oppty-761-candidate-opens-her-interview-details-read-only) | Candidate opens her interview details (read-only) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-762](#tc-oppty-762-em-opens-the-board-and-opp-0156) | EM opens the board and OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-763](#tc-oppty-763-tm-shortlists-an-employee-from-another-department-onto-their-own-department-s-position) | TM shortlists an employee from another department onto their own department's position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-764](#tc-oppty-764-rm-opens-the-board-and-opp-0156) | RM opens the board and OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-765](#tc-oppty-765-tm-java-opens-the-board-and-the-qa-only-ticket-opp-0156) | TM (JAVA) opens the board and the QA-only ticket OPP-0156 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-766](#tc-oppty-766-add-a-round-with-the-number-of-rounds-stepper) | Add a round with the Number of Rounds stepper | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-767](#tc-oppty-767-reorder-rounds-with-the-keyboard-drag-handle-space-arrowup-space) | Reorder rounds with the keyboard (drag handle: Space, ArrowUp, Space) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-768](#tc-oppty-768-delete-the-last-pending-round) | Delete the last pending round | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-769](#tc-oppty-769-skip-round-1-from-the-round-header) | Skip Round 1 from the round header | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-770](#tc-oppty-770-mark-won-while-round-2-is-still-pending) | Mark Won while Round 2 is still pending | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-771](#tc-oppty-771-allocate-is-blocked-while-the-prospect-ticket-has-no-project) | Allocate is blocked while the Prospect ticket has no project | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-772](#tc-oppty-772-link-project-tab-associate-project-analytixhub-on-a-prospect-ticket) | Link Project tab → Associate Project (AnalytixHub) on a Prospect ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-773](#tc-oppty-773-allocate-nimisha-kumar-once-the-project-is-linked) | Allocate Nimisha Kumar once the project is linked | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-774](#tc-oppty-774-try-to-unlink-or-change-the-project-after-a-candidate-is-allocated) | Try to unlink or change the project after a candidate is allocated | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-775](#tc-oppty-775-move-a-card-into-did-interview-happen-from-the-menu) | Move a card INTO "Did Interview Happen?" from the menu | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-776](#tc-oppty-776-move-an-interview-scheduled-card-back-to-being-prepared) | Move an Interview Scheduled card back to Being Prepared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-777](#tc-oppty-777-move-a-being-prepared-card-no-dated-round-to-interview-scheduled) | Move a Being Prepared card (no dated round) to Interview Scheduled | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-778](#tc-oppty-778-skip-ahead-being-prepared-won-from-the-menu) | Skip ahead Being Prepared → Won from the menu | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-779](#tc-oppty-779-second-pmo-creates-a-prospect-interview-ticket-no-project) | Second PMO creates a Prospect Interview ticket (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-780](#tc-oppty-780-edit-the-position-add-java-as-a-second-department-and-a-prep-link-via-add-link) | Edit the position: add JAVA as a second department and a prep link via "Add Link" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-781](#tc-oppty-781-java-tm-opens-the-qa-java-ticket-and-the-shortlist-dialog) | JAVA TM opens the QA+JAVA ticket and the shortlist dialog | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-782](#tc-oppty-782-every-interview-step-notifies-the-right-people) | Every interview step notifies the right people | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-783](#tc-oppty-783-interview-scheduled-notification-shows-the-interview-date-in-the-viewer-s-time) | Interview-scheduled notification shows the interview date in the viewer's time | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-784](#tc-oppty-784-allocation-notification-after-an-interview-won-allocate) | Allocation notification after an interview Won → Allocate | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-785](#tc-oppty-785-candidate-facing-wording-known-bug-023) | Candidate-facing wording (known BUG-023) | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-1001](#tc-oppty-1001-minimal-valid-interview-prospect-opportunity) | Minimal valid Interview/Prospect opportunity | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1002](#tc-oppty-1002-title-missing) | Title missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1003](#tc-oppty-1003-title-empty-string) | Title empty string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1004](#tc-oppty-1004-title-whitespace-only) | Title whitespace only | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1005](#tc-oppty-1005-title-exactly-200-chars) | Title exactly 200 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1006](#tc-oppty-1006-title-201-chars) | Title 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1007](#tc-oppty-1007-title-is-trimmed-on-save) | Title is trimmed on save | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1008](#tc-oppty-1008-clienttype-missing) | clientType missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1009](#tc-oppty-1009-clienttype-invalid-value) | clientType invalid value | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1010](#tc-oppty-1010-clienttype-lowercase) | clientType lowercase | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1011](#tc-oppty-1011-clientname-missing) | clientName missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1012](#tc-oppty-1012-clientname-whitespace-only) | clientName whitespace only | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1013](#tc-oppty-1013-clientname-exactly-200) | clientName exactly 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1014](#tc-oppty-1014-clientname-201) | clientName 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1015](#tc-oppty-1015-websiteurl-not-a-url) | websiteUrl not a URL | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1016](#tc-oppty-1016-websiteurl-javascript-scheme) | websiteUrl javascript: scheme | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1017](#tc-oppty-1017-websiteurl-ftp-scheme) | websiteUrl ftp scheme | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1018](#tc-oppty-1018-websiteurl-no-tld-http-localhost) | websiteUrl no TLD (http://localhost) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1019](#tc-oppty-1019-websiteurl-https-valid) | websiteUrl https valid | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1020](#tc-oppty-1020-websiteurl-2049-chars) | websiteUrl 2049 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1021](#tc-oppty-1021-linkedinurl-invalid) | linkedinUrl invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1022](#tc-oppty-1022-interviewerlinkedinurl-invalid) | interviewerLinkedinUrl invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1023](#tc-oppty-1023-prospectcontact-201) | prospectContact 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1024](#tc-oppty-1024-prospectnotes-4096) | prospectNotes 4096 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1025](#tc-oppty-1025-prospectnotes-4097) | prospectNotes 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1026](#tc-oppty-1026-specialinstructions-4096) | specialInstructions 4096 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1027](#tc-oppty-1027-specialinstructions-4097) | specialInstructions 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1028](#tc-oppty-1028-jobdescription-html-with-script-is-sanitised) | jobDescription HTML with <script> is sanitised | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1029](#tc-oppty-1029-jobdescription-has-no-max-length-100k-chars) | jobDescription has no max length (100k chars) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1030](#tc-oppty-1030-unknown-top-level-key-rejected) | Unknown top-level key rejected | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1031](#tc-oppty-1031-positions-empty-array) | positions empty array | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1032](#tc-oppty-1032-positions-missing) | positions missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1033](#tc-oppty-1033-projectpublicid-not-a-uuid) | projectPublicId not a uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1034](#tc-oppty-1034-projectpublicid-random-uuid-not-found) | projectPublicId random uuid (not found) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1035](#tc-oppty-1035-pmo-existing-client-without-project-allowed-at-all-scope) | PMO Existing client WITHOUT project (allowed at ALL scope) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1036](#tc-oppty-1036-pmo-existing-client-with-any-project) | PMO Existing client with any project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1037](#tc-oppty-1037-prospect-with-projectpublicid) | PROSPECT with projectPublicId | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1038](#tc-oppty-1038-position-title-missing) | Position title missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1039](#tc-oppty-1039-position-title-201) | Position title 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1040](#tc-oppty-1040-techstacks-empty) | techStacks empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1041](#tc-oppty-1041-techstacks-item-101-chars) | techStacks item 101 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1042](#tc-oppty-1042-techstacks-item-empty-string) | techStacks item empty string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1043](#tc-oppty-1043-techstacks-duplicate-values) | techStacks duplicate values | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-1044](#tc-oppty-1044-departmentpublicids-empty) | departmentPublicIds empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1045](#tc-oppty-1045-departmentpublicids-non-uuid) | departmentPublicIds non-uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1046](#tc-oppty-1046-departmentpublicids-unknown-uuid) | departmentPublicIds unknown uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1047](#tc-oppty-1047-departmentpublicids-duplicate) | departmentPublicIds duplicate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1048](#tc-oppty-1048-multi-department-position-qa-java-em-multi-skill-case) | Multi-department position (QA+JAVA) — EM multi-skill case | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1049](#tc-oppty-1049-requiredcount-0) | requiredCount 0 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1050](#tc-oppty-1050-requiredcount-1) | requiredCount -1 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1051](#tc-oppty-1051-requiredcount-21) | requiredCount 21 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1052](#tc-oppty-1052-requiredcount-1-5) | requiredCount 1.5 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1053](#tc-oppty-1053-requiredcount-2-string) | requiredCount "2" string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1054](#tc-oppty-1054-requiredcount-20-20-opening-cards) | requiredCount 20 → 20 opening cards | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1055](#tc-oppty-1055-requiredcount-missing-interview) | requiredCount missing (Interview) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1056](#tc-oppty-1056-priority-missing-interview-opp-154) | priority missing (Interview) → OPP_154 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1057](#tc-oppty-1057-priority-invalid) | priority invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1058](#tc-oppty-1058-preferredseniority-missing) | preferredSeniority missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1059](#tc-oppty-1059-preferredseniority-invalid) | preferredSeniority invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1060](#tc-oppty-1060-allocationtype-invalid) | allocationType invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1061](#tc-oppty-1061-fixed-without-opp-026) | FIXED without % → OPP_026 | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-1062](#tc-oppty-1062-fixed-0) | FIXED 0% | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1063](#tc-oppty-1063-fixed-101) | FIXED 101% | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1064](#tc-oppty-1064-fixed-50-5) | FIXED 50.5% | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1065](#tc-oppty-1065-fixed-1) | FIXED 1% | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1066](#tc-oppty-1066-fixed-100) | FIXED 100% | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1067](#tc-oppty-1067-dynamic-with-opp-027) | DYNAMIC with % → OPP_027 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1068](#tc-oppty-1068-dynamic-without) | DYNAMIC without % | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1069](#tc-oppty-1069-tentativeallocationdate-bad-format-21-10-2026) | tentativeAllocationDate bad format (21/10/2026) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1070](#tc-oppty-1070-tentativeallocationdate-impossible-2026-02-30) | tentativeAllocationDate impossible (2026-02-30) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1071](#tc-oppty-1071-tentativeallocationdate-in-the-past) | tentativeAllocationDate in the past | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1072](#tc-oppty-1072-end-date-before-start-opp-093) | End date before start → OPP_093 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1073](#tc-oppty-1073-end-date-same-day-as-start) | End date same day as start | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1074](#tc-oppty-1074-end-date-without-start-date) | End date without start date | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-1075](#tc-oppty-1075-isinterviewrequired-false-with-roundtitles-opp-029) | isInterviewRequired=false with roundTitles → OPP_029 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1076](#tc-oppty-1076-isinterviewrequired-false-with-interview-date-opp-029) | isInterviewRequired=false with interview date → OPP_029 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1077](#tc-oppty-1077-interview-request-with-isinterviewrequired-false) | INTERVIEW request with isInterviewRequired=false | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1078](#tc-oppty-1078-tentativeinterviewdate-after-allocation-date) | tentativeInterviewDate after allocation date | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-1079](#tc-oppty-1079-tentativeinterviewdate-in-the-past) | tentativeInterviewDate in the past | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-1080](#tc-oppty-1080-roundtitles-50) | roundTitles 50 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1081](#tc-oppty-1081-roundtitles-51) | roundTitles 51 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1082](#tc-oppty-1082-roundtitles-item-201-chars) | roundTitles item 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1083](#tc-oppty-1083-roundtitles-with-blank-title-frd-optional-default-round-n) | roundTitles with blank title (FRD: optional, default "Round N") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1084](#tc-oppty-1084-note-4097) | note 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1085](#tc-oppty-1085-prepmaterials-url-invalid) | prepMaterials url invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1086](#tc-oppty-1086-prepmaterials-title-empty) | prepMaterials title empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1087](#tc-oppty-1087-prepmaterials-omitted-default-links-seeded) | prepMaterials omitted → default links seeded | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1088](#tc-oppty-1088-prepmaterials-none) | prepMaterials [] → none | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1089](#tc-oppty-1089-preferredemployeepublicids-duplicate) | preferredEmployeePublicIds duplicate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1090](#tc-oppty-1090-preferredemployeepublicids-unknown-uuid) | preferredEmployeePublicIds unknown uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1091](#tc-oppty-1091-employeepublicid-on-interview-position-opp-129) | employeePublicId on INTERVIEW position → OPP_129 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1092](#tc-oppty-1092-checklist-items-seeded-per-position) | Checklist items seeded per position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1093](#tc-oppty-1093-locationpreference-invalid) | locationPreference invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1094](#tc-oppty-1094-other-without-otherlocation) | OTHER without otherLocation | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1095](#tc-oppty-1095-other-with-otherlocation) | OTHER with otherLocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1096](#tc-oppty-1096-otherlocation-with-wfo-sys-004) | otherLocation with WFO → SYS_004 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1097](#tc-oppty-1097-usa-without-workmode) | USA without workMode | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1098](#tc-oppty-1098-usa-on-site-without-address) | USA ON_SITE without address | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1099](#tc-oppty-1099-usa-on-site-with-address) | USA ON_SITE with address | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1100](#tc-oppty-1100-workmode-with-wfh) | workMode with WFH | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1101](#tc-oppty-1101-nightshift-none-ns1-combined) | nightShift NONE + NS1 combined | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1102](#tc-oppty-1102-address-501) | address 501 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1103](#tc-oppty-1103-3-positions-2-1-3-openings-ordinals-unique-across-the-opportunity) | 3 positions, 2+1+3 openings — ordinals unique across the opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1104](#tc-oppty-1104-opportunity-priority-most-urgent-of-positions) | Opportunity priority = most urgent of positions | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1105](#tc-oppty-1105-same-title-client-twice-potential-duplicate-notice) | Same title + client twice (Potential Duplicate Notice) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1106](#tc-oppty-1106-ticket-numbers-are-sequential-unique) | Ticket numbers are sequential & unique | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1107](#tc-oppty-1107-pmo-raises-existing-project-not-managed) | pmo raises EXISTING (project not managed) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1108](#tc-oppty-1108-pmo-raises-prospect-no-project) | pmo raises PROSPECT (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1109](#tc-oppty-1109-csm-raises-existing-project-managed) | csm raises EXISTING (project managed) | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1110](#tc-oppty-1110-csm-raises-prospect-no-project) | csm raises PROSPECT (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1111](#tc-oppty-1111-csm-raises-existing-project-not-managed) | csm raises EXISTING (project not managed) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1112](#tc-oppty-1112-csm-raises-existing-no-project) | csm raises EXISTING (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1113](#tc-oppty-1113-pm-raises-existing-project-managed) | pm raises EXISTING (project managed) | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-1114](#tc-oppty-1114-pm-raises-prospect-no-project) | pm raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1115](#tc-oppty-1115-tmqa-raises-prospect-no-project) | tmQA raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1116](#tc-oppty-1116-em-raises-prospect-no-project) | em raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1117](#tc-oppty-1117-rm-raises-prospect-no-project) | rm raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1118](#tc-oppty-1118-emp-raises-prospect-no-project) | emp raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1119](#tc-oppty-1119-admin-raises-prospect-no-project) | admin raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1120](#tc-oppty-1120-csm-raises-direct-for-own-project) | CSM raises DIRECT for own project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1121](#tc-oppty-1121-pm-raises-direct-for-own-project) | PM raises DIRECT for own project | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1122](#tc-oppty-1122-assignee-picker-pm-list-only-holds-pm-role-employees) | Assignee picker PM list only holds PM-role employees | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1123](#tc-oppty-1123-assignee-picker-for-tm-em-csm-employee) | Assignee picker for TM/EM/CSM/Employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1124](#tc-oppty-1124-assign-a-non-pm-as-assignedpm) | Assign a non-PM as assignedPm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1125](#tc-oppty-1125-assign-a-non-csm-as-assignedcsm) | Assign a non-CSM as assignedCsm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1126](#tc-oppty-1126-csm-tries-to-set-assignedcsm-on-create) | CSM tries to set assignedCsm on create | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1127](#tc-oppty-1127-pmo-creates-prospect-assigned-to-pm-gaurav-csm-tarun) | PMO creates PROSPECT assigned to PM gaurav + CSM tarun | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1128](#tc-oppty-1128-assigned-pm-can-open-the-assigned-opportunity) | Assigned PM can open the assigned opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1129](#tc-oppty-1129-assigned-pm-sees-it-in-a-list-frd-7-5-list-view-of-assigned-opps) | Assigned PM sees it in a list (FRD §7.5 list view of assigned opps) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1130](#tc-oppty-1130-assigned-csm-sees-it-on-board) | Assigned CSM sees it on board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1131](#tc-oppty-1131-non-assigned-csm-sai-gandhi-cannot-open-it) | Non-assigned CSM (sai.gandhi) cannot open it | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1132](#tc-oppty-1132-assignment-notification-to-assignee-frd-notif-18) | Assignment notification to assignee (FRD notif #18) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1133](#tc-oppty-1133-pmo-re-assigns-pm-to-another-pm-frd-open-q) | PMO re-assigns PM to another PM (FRD open Q) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1134](#tc-oppty-1134-csm-assigned-clears-assignedcsm-on-an-interview-opp) | CSM (assigned) clears assignedCsm on an INTERVIEW opp | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1135](#tc-oppty-1135-csm-creates-interview-opp-for-own-project) | CSM creates INTERVIEW opp for own project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1136](#tc-oppty-1136-csm-edits-own-interview-opp-title) | CSM edits own INTERVIEW opp title | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1137](#tc-oppty-1137-csm-adds-a-position-to-own-interview-opp) | CSM adds a position to own INTERVIEW opp | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1138](#tc-oppty-1138-csm-cancels-own-interview-ticket-cancelled-tag-frd-rule-22) | CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1139](#tc-oppty-1139-tmqa-edits-a-pmo-opportunity) | tmQA edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1140](#tc-oppty-1140-tmqa-changes-opportunity-status) | tmQA changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1141](#tc-oppty-1141-em-edits-a-pmo-opportunity) | em edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1142](#tc-oppty-1142-em-changes-opportunity-status) | em changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1143](#tc-oppty-1143-rm-edits-a-pmo-opportunity) | rm edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1144](#tc-oppty-1144-rm-changes-opportunity-status) | rm changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1145](#tc-oppty-1145-pm-edits-a-pmo-opportunity) | pm edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1146](#tc-oppty-1146-pm-changes-opportunity-status) | pm changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1147](#tc-oppty-1147-emp-edits-a-pmo-opportunity) | emp edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1148](#tc-oppty-1148-emp-changes-opportunity-status) | emp changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1149](#tc-oppty-1149-admin-edits-a-pmo-opportunity) | admin edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1150](#tc-oppty-1150-admin-changes-opportunity-status) | admin changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1151](#tc-oppty-1151-csm-changes-status-mark-lost-on-own-opp) | CSM changes status (mark Lost) on own opp | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1152](#tc-oppty-1152-admin-java-dept-opp-200-qa-dept-opp-200) | admin: JAVA-dept opp 200, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1153](#tc-oppty-1153-pmo-java-dept-opp-200-qa-dept-opp-200) | pmo: JAVA-dept opp 200, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1154](#tc-oppty-1154-tmqa-java-dept-opp-404-qa-dept-opp-200) | tmQA: JAVA-dept opp 404, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1155](#tc-oppty-1155-tmjava-java-dept-opp-200-qa-dept-opp-404) | tmJava: JAVA-dept opp 200, QA-dept opp 404 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1156](#tc-oppty-1156-em-java-dept-opp-404-qa-dept-opp-200) | em: JAVA-dept opp 404, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1157](#tc-oppty-1157-rm-java-dept-opp-404-qa-dept-opp-404) | rm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1158](#tc-oppty-1158-emp-java-dept-opp-404-qa-dept-opp-404) | emp: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1159](#tc-oppty-1159-csm-java-dept-opp-404-qa-dept-opp-404) | csm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1160](#tc-oppty-1160-pm-java-dept-opp-404-qa-dept-opp-404) | pm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1161](#tc-oppty-1161-out-of-scope-id-returns-404-not-403-no-existence-leak) | Out-of-scope id returns 404 not 403 (no existence leak) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1162](#tc-oppty-1162-board-summary-per-role-equals-distinct-opps-on-openings) | Board summary per role equals distinct opps on /openings | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1163](#tc-oppty-1163-employee-view-team-forced-to-mine) | Employee view=TEAM forced to MINE | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1164](#tc-oppty-1164-pm-without-view-board-calls-openings) | PM without view_board calls /openings | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1165](#tc-oppty-1165-positions-returned-in-created-order-contract) | Positions returned in created order (contract) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1166](#tc-oppty-1166-new-position-with-requiredcount-2-starts-with-2-cards-in-pending-to-shortlist-rule-13) | New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1167](#tc-oppty-1167-stage-counts-reflect-new-cards) | Stage counts reflect new cards | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1168](#tc-oppty-1168-preferred-candidate-flag-on-shortlist-frd-rule-14-glossary) | Preferred Candidate flag on shortlist (FRD rule 14, glossary) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1169](#tc-oppty-1169-shortlist-same-employee-twice-in-one-request) | Shortlist same employee twice in one request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1170](#tc-oppty-1170-shortlist-empty-list) | Shortlist empty list | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1171](#tc-oppty-1171-tm-qa-shortlists-2-qa-candidates) | TM (QA) shortlists 2 QA candidates | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1172](#tc-oppty-1172-re-shortlist-an-already-live-candidate) | Re-shortlist an already live candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1173](#tc-oppty-1173-shortlist-beyond-headcount-3rd-candidate-for-2-openings) | Shortlist beyond headcount (3rd candidate for 2 openings) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1174](#tc-oppty-1174-pmo-shortlists-a-java-dept-employee-on-the-qa-position) | PMO shortlists a JAVA-dept employee on the QA position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1175](#tc-oppty-1175-em-shortlists-qa4) | EM shortlists qa4 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1176](#tc-oppty-1176-rm-tries-to-shortlist) | rm tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1177](#tc-oppty-1177-csm-tries-to-shortlist) | csm tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1178](#tc-oppty-1178-emp-tries-to-shortlist) | emp tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1179](#tc-oppty-1179-admin-tries-to-shortlist) | admin tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1180](#tc-oppty-1180-pm-tries-to-shortlist-frd-7-5-pm-can-shortlist) | PM tries to shortlist (FRD §7.5: PM can shortlist) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1181](#tc-oppty-1181-tm-java-shortlists-on-a-qa-only-position) | TM (JAVA) shortlists on a QA-only position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1182](#tc-oppty-1182-tm-qa-sees-java-candidate-as-an-empty-seat) | TM (QA) sees JAVA candidate as an empty seat | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1183](#tc-oppty-1183-tm-java-can-see-the-opportunity-because-a-java-candidate-is-nominated) | TM (JAVA) can see the opportunity because a JAVA candidate is nominated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1184](#tc-oppty-1184-candidate-picker-excludes-already-live-candidates-for-the-position) | Candidate picker excludes already-live candidates for the position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1185](#tc-oppty-1185-candidate-picker-min-max) | Candidate picker min>max | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1186](#tc-oppty-1186-two-way-alert-shortlist-side-shows-direct-allocations-for-qa1) | Two-way alert: shortlist side shows direct allocations for qa1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1187](#tc-oppty-1187-preferred-candidate-notification-to-tm-frd-notif-7) | Preferred-candidate notification to TM (FRD notif #7) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1188](#tc-oppty-1188-tm-approves-without-request) | TM approves without request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1189](#tc-oppty-1189-tm-sends-em-s-pick-qa4-for-approval) | TM sends EM's pick (qa4) for approval | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1190](#tc-oppty-1190-tm-sends-own-pick-qa1-for-approval) | TM sends own pick qa1 for approval | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1191](#tc-oppty-1191-send-same-candidate-twice) | Send same candidate twice | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1192](#tc-oppty-1192-requester-tm-approves-own-request) | Requester TM approves own request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1193](#tc-oppty-1193-tm-sent-request-who-approves-frd-rule-19-tm-approval-is-final) | TM-sent request: who approves? (FRD rule 19: TM Approval is final) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1194](#tc-oppty-1194-approved-candidate-in-process-blocked-being-prepared-rounds-seeded) | Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1195](#tc-oppty-1195-pmo-sends-qa2-tm-java-tries-to-approve-a-qa-candidate) | PMO sends qa2; TM (JAVA) tries to approve a QA candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1196](#tc-oppty-1196-em-tries-to-approve-em-never-approves) | EM tries to approve (EM never approves) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1197](#tc-oppty-1197-tm-qa-approves-pmo-sent-qa2) | TM (QA) approves PMO-sent qa2 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1198](#tc-oppty-1198-double-approve-already-approved) | Double approve (already approved) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1199](#tc-oppty-1199-pmo-sends-java-candidate-tm-java-approves-candidate-s-department) | PMO sends JAVA candidate; TM (JAVA) approves (candidate's department) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1200](#tc-oppty-1200-withdraw-by-non-requester-tm) | Withdraw by non-requester TM | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1201](#tc-oppty-1201-pmo-withdraws-own-request-back-to-shortlisted) | PMO withdraws own request → back to SHORTLISTED | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1202](#tc-oppty-1202-withdraw-when-nothing-pending) | Withdraw when nothing pending | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1203](#tc-oppty-1203-tm-tries-bypass) | TM tries bypass | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1204](#tc-oppty-1204-bypass-reason-1025-chars) | Bypass reason 1025 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1205](#tc-oppty-1205-pmo-bypasses-tm-approval-for-qa3-not-sent) | PMO bypasses TM approval for qa3 (not sent) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1206](#tc-oppty-1206-bypass-without-reason) | Bypass without reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1207](#tc-oppty-1207-remove-an-in-process-nomination-via-delete) | Remove an IN_PROCESS nomination via DELETE | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1208](#tc-oppty-1208-remove-considered-qa4-no-reason-asked) | Remove CONSIDERED qa4 (no reason asked) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1209](#tc-oppty-1209-reject-without-reason) | Reject without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1210](#tc-oppty-1210-reject-with-whitespace-reason) | Reject with whitespace reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1211](#tc-oppty-1211-tm-passes-rejectedbyrole) | TM passes rejectedByRole | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1212](#tc-oppty-1212-tm-rejects-in-process-qa3-slot-back-to-pending-to-shortlist-rule-6) | TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6) | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1213](#tc-oppty-1213-rejected-appears-in-rejected-column-with-reason-role) | Rejected appears in Rejected column with reason & role | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1214](#tc-oppty-1214-rejected-candidate-nominated-for-a-different-position-in-same-opp-rule-6) | Rejected candidate nominated for a different position in same opp (rule 6) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1215](#tc-oppty-1215-rejected-candidate-re-nominated-on-the-same-position) | Rejected candidate re-nominated on the SAME position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1216](#tc-oppty-1216-action-on-a-rejected-historical-nomination-id) | Action on a REJECTED (historical) nomination id | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1217](#tc-oppty-1217-tm-drags-a-card) | TM drags a card | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1218](#tc-oppty-1218-drag-to-waiting-for-approval) | Drag to WAITING_FOR_APPROVAL | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1219](#tc-oppty-1219-drag-to-won-directly) | Drag to WON directly | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1220](#tc-oppty-1220-skip-2-columns-being-prepared-waiting-for-feedback-without-confirm) | Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1221](#tc-oppty-1221-drag-being-prepared-interview-scheduled-when-no-round-has-a-date) | Drag Being Prepared → Interview Scheduled when no round has a date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1222](#tc-oppty-1222-drag-backwards-to-shortlisted) | Drag backwards to SHORTLISTED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1223](#tc-oppty-1223-drag-backwards-interview-scheduled-being-prepared) | Drag backwards Interview Scheduled → Being Prepared | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1224](#tc-oppty-1224-drag-an-empty-pending-card) | Drag an empty (Pending) card | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1225](#tc-oppty-1225-candidate-janki-opens-own-opportunity-my-opportunity) | Candidate (janki) opens own opportunity (My Opportunity) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1226](#tc-oppty-1226-candidate-ticks-2-items-out-of-order-frd-any-order) | Candidate ticks 2 items out of order (FRD: any order) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1227](#tc-oppty-1227-candidate-ticks-an-unknown-code) | Candidate ticks an unknown code | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1228](#tc-oppty-1228-candidate-tries-to-skip-an-item) | Candidate tries to skip an item | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1229](#tc-oppty-1229-pmo-marks-item-skipped-by-pmo) | PMO marks item "Skipped by PMO" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1230](#tc-oppty-1230-candidate-ticks-a-pmo-skipped-item) | Candidate ticks a PMO-skipped item | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1231](#tc-oppty-1231-candidate-edits-another-candidate-s-checklist) | Candidate edits another candidate's checklist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1232](#tc-oppty-1232-tm-ticks-a-team-member-s-checklist-read-only-per-matrix) | TM ticks a team member's checklist (read-only per matrix) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1233](#tc-oppty-1233-unrelated-employee-kashyap-opens-the-opportunity) | Unrelated employee (kashyap) opens the opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1234](#tc-oppty-1234-add-round-3-with-no-title-defaults-frd-round-3) | Add round 3 with no title → defaults (FRD "Round 3") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1235](#tc-oppty-1235-tm-adds-a-round) | TM adds a round | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1236](#tc-oppty-1236-round-on-considered-nomination) | Round on CONSIDERED nomination | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1237](#tc-oppty-1237-round-interviewer-201-chars) | Round interviewer 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1238](#tc-oppty-1238-round-scheduledat-invalid) | Round scheduledAt invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1239](#tc-oppty-1239-schedule-r1-in-future-finalize-lock) | Schedule R1 in future + finalize (lock) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-1240](#tc-oppty-1240-change-finalized-r1-date-rule-17-lock) | Change finalized R1 date (rule 17 lock) | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-1241](#tc-oppty-1241-un-finalize-r1) | Un-finalize R1 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1242](#tc-oppty-1242-card-auto-moves-to-interview-scheduled-when-a-round-is-dated) | Card auto-moves to Interview Scheduled when a round is dated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1243](#tc-oppty-1243-mark-future-dated-r1-cleared) | Mark future-dated R1 Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1244](#tc-oppty-1244-mark-undated-r2-cleared) | Mark undated R2 Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1245](#tc-oppty-1245-r2-dated-yesterday-cleared-without-recording-frd-recording-optional) | R2 dated yesterday → Cleared without recording (FRD: recording optional) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1246](#tc-oppty-1246-recording-url-invalid) | Recording URL invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1247](#tc-oppty-1247-feedback-4097-chars) | Feedback 4097 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1248](#tc-oppty-1248-delete-a-decided-round) | Delete a decided round | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1249](#tc-oppty-1249-delete-pending-round-3-renumber) | Delete pending round 3 → renumber | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1250](#tc-oppty-1250-candidate-vandana-sees-round-feedback) | Candidate (vandana) sees round feedback? | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1251](#tc-oppty-1251-did-the-interview-happen-yes-waiting-for-feedback) | "Did the interview happen?" — Yes → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1252](#tc-oppty-1252-edit-allocation-with-live-candidates) | Edit allocation % with live candidates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1253](#tc-oppty-1253-resend-unchanged-allocation) | Resend unchanged allocation % | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1254](#tc-oppty-1254-edit-tech-stack-after-shortlisting-rule-18-tm-re-review-notification) | Edit tech stack after shortlisting (rule 18 → TM re-review notification) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1255](#tc-oppty-1255-reduce-requiredcount-to-1-cards-with-candidates-kept) | Reduce requiredCount to 1 (cards with candidates kept) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1256](#tc-oppty-1256-delete-position-with-in-process-candidate) | Delete position with IN_PROCESS candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1257](#tc-oppty-1257-round-skip-select-qa1-from-being-prepared-without-confirm) | Round-skip: select qa1 from Being Prepared without confirm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1258](#tc-oppty-1258-tm-selects-won) | TM selects (Won) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1259](#tc-oppty-1259-select-qa2-from-waiting-for-feedback) | Select qa2 from Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1260](#tc-oppty-1260-approve-while-another-opening-is-in-process-opp-047-same-employee) | Approve while another opening is In Process (OPP_047 same employee) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1261](#tc-oppty-1261-allocate-with-above-remaining-capacity) | Allocate with % above remaining capacity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1262](#tc-oppty-1262-allocate-bad-body-fixed-without) | Allocate bad body (FIXED without %) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1263](#tc-oppty-1263-tm-csm-allocate) | TM / CSM allocate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1264](#tc-oppty-1264-pmo-allocates-won-qa2-project-allocated-born-approved-allocation-ticket) | PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1265](#tc-oppty-1265-allocate-the-same-nomination-again) | Allocate the same nomination again | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1266](#tc-oppty-1266-allocation-ticket-visible-in-allocation-tickets-module) | Allocation ticket visible in allocation tickets module | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1267](#tc-oppty-1267-two-way-alert-now-lists-the-upcoming-allocation-for-qa2) | Two-way alert now lists the upcoming allocation for qa2 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1268](#tc-oppty-1268-unlink-project-after-allocation) | Unlink project after allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1269](#tc-oppty-1269-same-status-as-current) | Same status as current | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1270](#tc-oppty-1270-on-hold-pipeline-actions-blocked) | ON_HOLD → pipeline actions blocked | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1271](#tc-oppty-1271-on-hold-candidate-checklist-edit) | ON_HOLD: candidate checklist edit | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1272](#tc-oppty-1272-on-hold-cards-move-to-on-hold-column) | ON_HOLD cards move to On Hold column | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1273](#tc-oppty-1273-reopen-on-hold-open) | Reopen ON_HOLD → OPEN | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1274](#tc-oppty-1274-concurrent-double-request-approval-on-same-nomination) | Concurrent double request-approval on same nomination | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1275](#tc-oppty-1275-concurrent-shortlist-of-same-employee-by-2-pmos) | Concurrent shortlist of same employee by 2 PMOs | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1276](#tc-oppty-1276-mark-opportunity-won-in-process-selected-awaiting-approval-removed) | Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1277](#tc-oppty-1277-mark-lost-candidates-released-unblocked-hidden-from-default-board) | Mark LOST → candidates RELEASED & unblocked; hidden from default board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1278](#tc-oppty-1278-lost-notification-to-raiser-tm-frd-notif-15) | Lost notification to raiser/TM (FRD notif #15) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1279](#tc-oppty-1279-reopen-lost-open-removes-released-candidates) | Reopen LOST → OPEN removes released candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1280](#tc-oppty-1280-nlr-without-confirmation) | NLR without confirmation | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1281](#tc-oppty-1281-nlr-with-confirmation) | NLR with confirmation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1282](#tc-oppty-1282-reopen-nlr-open-rule-17-reversible) | Reopen NLR → OPEN (rule 17: reversible)  | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1283](#tc-oppty-1283-re-initiate-without-reason) | Re-initiate without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1284](#tc-oppty-1284-tm-re-initiates) | TM re-initiates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1285](#tc-oppty-1285-pmo-re-initiates-p2-all-non-allocated-released-cards-back-to-pending) | PMO re-initiates P2 → all non-allocated released, cards back to Pending | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1286](#tc-oppty-1286-re-initiate-when-nothing-to-release) | Re-initiate when nothing to release | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1287](#tc-oppty-1287-stage-count-total-equals-openings-total-for-this-opp) | Stage-count total equals /openings total for this opp | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1288](#tc-oppty-1288-search-by-readable-position-id-displayid) | Search by readable position id (displayId) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1289](#tc-oppty-1289-search-with-sql-wildcard-does-not-match-everything) | Search with SQL wildcard % does not match everything | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1290](#tc-oppty-1290-limit-50-not-allowed) | limit=50 (not allowed) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1291](#tc-oppty-1291-createdfrom-createdto) | createdFrom > createdTo | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1292](#tc-oppty-1292-employee-opportunity-history-for-qa1-frd-change-list) | Employee opportunity history for qa1 (FRD change list) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1293](#tc-oppty-1293-employee-list-carries-interviewopportunities-for-qa1) | Employee list carries interviewOpportunities for qa1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1294](#tc-oppty-1294-bypass-being-prepared-remaining-allocation-reserves-40) | Bypass → Being Prepared; remaining allocation reserves 40% | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1295](#tc-oppty-1295-candidate-picker-shows-the-blocked-reservation-too) | Candidate picker shows the blocked reservation too | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1296](#tc-oppty-1296-date-r1-yesterday-card-goes-to-interview-scheduled-not-auto-to-waiting-for-feedback) | Date R1 yesterday → card goes to Interview Scheduled (not auto to Waiting for Feedback) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1297](#tc-oppty-1297-did-the-interview-happen-yes-waiting-for-feedback) | "Did the interview happen?" Yes → Waiting for Feedback | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1298](#tc-oppty-1298-r1-not-cleared-select-without-confirmation-is-refused-round-skip-safeguard) | R1 Not Cleared → select without confirmation is refused (round-skip safeguard) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1299](#tc-oppty-1299-select-with-confirmation-frd-rule-20-skip-dialog) | Select with confirmation (FRD rule 20 skip dialog) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1300](#tc-oppty-1300-after-select-won-selected-filled-1-1) | After select: WON, SELECTED, filled 1/1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1301](#tc-oppty-1301-won-elsewhere-notification-to-pmo-frd-change-list) | Won-elsewhere notification to PMO (FRD change list) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1302](#tc-oppty-1302-allocate-fixed-without) | Allocate FIXED without %  | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1303](#tc-oppty-1303-allocate-end-before-start) | Allocate end before start | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1304](#tc-oppty-1304-allocate-with-101) | Allocate with 101% | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1305](#tc-oppty-1305-allocate-with-a-different-than-the-position-40-60) | Allocate with a different % than the position (40 → 60) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1306](#tc-oppty-1306-pmo-allocates-project-allocated-allocation-ticket) | PMO allocates → Project Allocated + allocation ticket | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1307](#tc-oppty-1307-allocation-ticket-in-allocation-requests-born-approved) | Allocation ticket in Allocation Requests (born approved) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1308](#tc-oppty-1308-interview-allocation-tab-in-requests-tracking-lists-it) | Interview Allocation tab in Requests Tracking lists it | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1309](#tc-oppty-1309-two-way-alert-lists-the-new-upcoming-allocation) | Two-way alert lists the new upcoming allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1310](#tc-oppty-1310-remaining-allocation-after-allocation-reservation-released-booking-counted) | Remaining allocation after allocation (reservation released, booking counted) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1311](#tc-oppty-1311-unlink-project-after-allocation) | Unlink project after allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1312](#tc-oppty-1312-change-project-after-allocation) | Change project after allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1313](#tc-oppty-1313-drag-project-allocated-card-backwards) | Drag Project Allocated card backwards | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1314](#tc-oppty-1314-mark-opportunity-lost-after-a-candidate-is-project-allocated) | Mark Opportunity LOST after a candidate is Project Allocated | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1315](#tc-oppty-1315-reopen-after-lost-allocated-card-intact) | Reopen after LOST: allocated card intact? | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1316](#tc-oppty-1316-re-initiate-position-that-has-a-project-allocated-seat) | Re-initiate position that has a Project Allocated seat | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1317](#tc-oppty-1317-employee-profile-history-lists-the-allocated-opportunity) | Employee profile history lists the allocated opportunity | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1318](#tc-oppty-1318-candidate-akash-pandya-sees-own-history-self) | Candidate (akash.pandya) sees own history (self) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1319](#tc-oppty-1319-another-employee-reads-akash-s-history-idor) | Another employee reads akash's history (IDOR) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1320](#tc-oppty-1320-employee-list-interview-opportunities-column-pmo) | Employee list Interview opportunities column (PMO) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1321](#tc-oppty-1321-employee-list-column-for-a-tm-can-read-opportunities) | Employee list column for a TM (can read opportunities) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1322](#tc-oppty-1322-direct-without-employee) | DIRECT without employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1323](#tc-oppty-1323-direct-without-tentative-allocation-date) | DIRECT without tentative allocation date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1324](#tc-oppty-1324-direct-with-requiredcount-2) | DIRECT with requiredCount 2 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1325](#tc-oppty-1325-direct-with-round-titles) | DIRECT with round titles | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1326](#tc-oppty-1326-direct-with-isinterviewrequired-true) | DIRECT with isInterviewRequired true | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1327](#tc-oppty-1327-direct-with-prep-material) | DIRECT with prep material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1328](#tc-oppty-1328-direct-with-unknown-employee) | DIRECT with unknown employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1329](#tc-oppty-1329-same-employee-on-two-positions-of-one-direct-request) | Same employee on two positions of one DIRECT request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1330](#tc-oppty-1330-interviewerlinkedinurl-ignored-on-direct) | interviewerLinkedinUrl ignored on DIRECT | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1331](#tc-oppty-1331-priority-derived-from-allocation-date-3d-high-10d-medium-30d-low-sent-value-ignored) | Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1332](#tc-oppty-1332-frd-rule-9-aging-priority-1-week-open-high-vs-build-allocation-date-based) | FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1333](#tc-oppty-1333-direct-ticket-starts-open-with-the-employee-nominated) | Direct ticket starts OPEN with the employee nominated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1334](#tc-oppty-1334-interview-action-on-a-direct-ticket) | Interview action on a DIRECT ticket | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1335](#tc-oppty-1335-csm-raiser-moves-direct-stage) | CSM (raiser) moves Direct stage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1336](#tc-oppty-1336-tm-moves-direct-stage) | TM moves Direct stage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1337](#tc-oppty-1337-pmo-skips-open-awaiting) | PMO skips OPEN → AWAITING | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1338](#tc-oppty-1338-pmo-open-in-review) | PMO OPEN → IN_REVIEW | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1339](#tc-oppty-1339-move-backwards-in-review-open) | Move backwards IN_REVIEW → OPEN | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1340](#tc-oppty-1340-owner-csm-swaps-the-employee-while-in-review) | Owner (CSM) swaps the employee while IN_REVIEW | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1341](#tc-oppty-1341-owner-sets-tentativeallocationdate-null) | Owner sets tentativeAllocationDate null | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1342](#tc-oppty-1342-non-owner-csm-sai-gandhi-edits) | Non-owner CSM (sai.gandhi) edits | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1343](#tc-oppty-1343-pmo-in-review-awaiting) | PMO IN_REVIEW → AWAITING | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1344](#tc-oppty-1344-owner-swaps-employee-while-awaiting) | Owner swaps employee while AWAITING | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1345](#tc-oppty-1345-two-way-alert-allocation-side-employee-in-interview-opps) | Two-way alert (allocation side): employee in interview opps | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1346](#tc-oppty-1346-two-way-alert-as-csm-raiser) | Two-way alert as CSM (raiser) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1347](#tc-oppty-1347-pmo-awaiting-approved-allocates-at-once-start-tentative-date-30) | PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%) | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1348](#tc-oppty-1348-direct-tab-in-requests-tracking-lists-the-allocation-ticket) | Direct tab in Requests Tracking lists the allocation ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1349](#tc-oppty-1349-approved-is-terminal) | APPROVED is terminal | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1350](#tc-oppty-1350-owner-edits-after-approved) | Owner edits after APPROVED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1351](#tc-oppty-1351-cancel-tag-after-approved) | Cancel tag after APPROVED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1352](#tc-oppty-1352-reject-without-reason) | Reject without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1353](#tc-oppty-1353-reject-reason-1025) | Reject reason 1025 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1354](#tc-oppty-1354-reject-from-open-with-reason) | Reject from OPEN with reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1355](#tc-oppty-1355-rejected-is-terminal-move-to-in-review) | REJECTED is terminal (move to IN_REVIEW) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1356](#tc-oppty-1356-tm-tries-to-cancel) | TM tries to cancel | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1357](#tc-oppty-1357-cancel-reason-1025) | Cancel reason 1025 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1358](#tc-oppty-1358-csm-cancels-without-a-reason-frd-open-q-is-reason-required) | CSM cancels without a reason (FRD open Q: is reason required?) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1359](#tc-oppty-1359-csm-cancels-tag-added-stage-unchanged-in-review) | CSM cancels: tag added, stage unchanged (IN_REVIEW) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1360](#tc-oppty-1360-cancel-again) | Cancel again | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1361](#tc-oppty-1361-pmo-notified-of-cancellation-from-stage-frd-notif-19) | PMO notified of cancellation from stage (FRD notif #19) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1362](#tc-oppty-1362-pmo-moves-a-cancelled-ticket-guide-says-pmo-may-still-move-it) | PMO moves a cancelled ticket (guide says PMO may still move it) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1363](#tc-oppty-1363-iscancelled-true-filter-returns-the-tagged-ticket) | isCancelled=true filter returns the tagged ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1364](#tc-oppty-1364-pmo-closes-cancelled-ticket-no-longer-required) | PMO closes cancelled ticket → No Longer Required | Pre-sales Opportunities | smoke | medium |
| [TC-OPPTY-1365](#tc-oppty-1365-board-default-hides-nlr-direct-tickets) | Board default hides NLR Direct tickets | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1366](#tc-oppty-1366-prospect-direct-no-project-created-by-csm) | Prospect Direct (no project) created by CSM | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1367](#tc-oppty-1367-approved-not-offered-without-a-project) | APPROVED not offered without a project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1368](#tc-oppty-1368-force-approved-without-project) | Force APPROVED without project | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1369](#tc-oppty-1369-csm-links-own-project-prospect-becomes-existing) | CSM links own project → Prospect becomes Existing | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1370](#tc-oppty-1370-csm-links-a-project-it-does-not-manage) | CSM links a project it does not manage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1371](#tc-oppty-1371-csm-unlinks-project-on-existing) | CSM unlinks project on EXISTING | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1372](#tc-oppty-1372-approved-with-allocation-unconfirmed-selected-not-allocated) | APPROVED with allocation unconfirmed → selected, not allocated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1373](#tc-oppty-1373-confirm-allocation-later-patch-isallocationconfirmed-true) | Confirm allocation later (PATCH isAllocationConfirmed:true) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1374](#tc-oppty-1374-direct-ticket-for-a-fully-booked-employee-is-accepted-at-create-warning-only) | Direct ticket for a fully-booked employee is accepted at create (warning only?) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1375](#tc-oppty-1375-approved-for-fully-booked-employee-capacity-error-passes-through) | APPROVED for fully-booked employee → capacity error passes through | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1376](#tc-oppty-1376-direct-stage-counts-total-equals-direct-list-total) | direct-stage-counts total equals Direct list total | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1377](#tc-oppty-1377-direct-summary-requesttype-direct-vs-list) | Direct summary (requestType=DIRECT) vs list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1378](#tc-oppty-1378-direct-tickets-do-not-leak-into-the-interview-board) | Direct tickets do not leak into the Interview board | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1379](#tc-oppty-1379-csm-sees-own-direct-tickets-only) | CSM sees own Direct tickets only | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1380](#tc-oppty-1380-tm-sees-direct-tickets-of-own-department-view-only) | TM sees Direct tickets of own department (view only) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1381](#tc-oppty-1381-tm-adds-prep-material) | TM adds prep material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1382](#tc-oppty-1382-em-adds-prep-material-frd-7-4-em-standardises-question-banks) | EM adds prep material (FRD §7.4: EM standardises question banks) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1383](#tc-oppty-1383-assigned-pm-adds-prep-material-on-top-of-pmo-s-frd-7-5) | Assigned PM adds prep material on top of PMO's (FRD §7.5) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1384](#tc-oppty-1384-tm-edits-pmo-s-material) | TM edits PMO's material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1385](#tc-oppty-1385-candidate-employee-adds-prep-material) | Candidate (employee) adds prep material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1386](#tc-oppty-1386-prep-material-url-javascript) | Prep material URL javascript: | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1387](#tc-oppty-1387-prep-material-title-201) | Prep material title 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1388](#tc-oppty-1388-duplicate-url-twice-on-one-position) | Duplicate URL twice on one position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1389](#tc-oppty-1389-prep-material-cap) | Prep material cap | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1390](#tc-oppty-1390-patch-title-null-required) | PATCH title null (required) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1391](#tc-oppty-1391-patch-websiteurl-not-a-clear-per-contract) | PATCH websiteUrl "" (not a clear per contract) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1392](#tc-oppty-1392-patch-unknown-key) | PATCH unknown key | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1393](#tc-oppty-1393-patch-requesttype-fixed-at-create) | PATCH requestType (fixed at create) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1394](#tc-oppty-1394-switch-existing-prospect-unlinks-project) | Switch EXISTING → PROSPECT unlinks project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1395](#tc-oppty-1395-edit-history-change-log-frd-8-full-change-log-recent-edits-highlighted) | Edit history / change log (FRD §8: full change log, recent edits highlighted) | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-1396](#tc-oppty-1396-pmo-edits-a-lost-opportunity) | PMO edits a LOST opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1397](#tc-oppty-1397-add-position-to-a-lost-opportunity) | Add position to a LOST opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1398](#tc-oppty-1398-delete-the-last-position) | Delete the last position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1399](#tc-oppty-1399-delete-a-position-that-has-only-considered-candidates-candidates-notified) | Delete a position that has only CONSIDERED candidates → candidates notified? | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-1400](#tc-oppty-1400-add-position-requiredcount-21-via-patch) | Add position requiredCount 21 via PATCH | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-1401](#tc-oppty-1401-raise-requiredcount-1-4-appends-3-empty-cards) | Raise requiredCount 1 → 4 appends 3 empty cards | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1402](#tc-oppty-1402-shortlist-shortfall-data-frd-warn-when-fewer-shortlisted-than-needed) | Shortlist shortfall data (FRD: warn when fewer shortlisted than needed) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1403](#tc-oppty-1403-candidate-ticks-checklist-while-interview-scheduled) | Candidate ticks checklist while Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1404](#tc-oppty-1404-pmo-ticks-on-candidate-s-behalf-at-any-stage) | PMO ticks on candidate's behalf at any stage | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1405](#tc-oppty-1405-pending-checklist-does-not-block-scheduling-frd-change-list) | Pending checklist does not block scheduling (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1406](#tc-oppty-1406-send-reminder-frd-7-5-endpoint-exists) | Send Reminder (FRD §7.5) endpoint exists | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-1407](#tc-oppty-1407-rm-of-the-candidate-unknown-sees-the-card-team-scope) | RM of the candidate (unknown) sees the card (TEAM scope) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-1408](#tc-oppty-1408-rm-shortlists-matrix-no) | RM shortlists (matrix: no) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-1409](#tc-oppty-1409-title-with-html-is-stored-raw-ui-must-escape) | Title with HTML is stored raw (UI must escape) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1410](#tc-oppty-1410-unauthenticated-board-read) | Unauthenticated board read | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-1411](#tc-oppty-1411-non-uuid-id-in-path) | Non-uuid id in path | Pre-sales Opportunities | security | medium |

---

## Pre-sales Opportunities

496 test cases.

### Boundary (37)

#### TC-OPPTY-720 — Round date picker range

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | yesterday=enabled today=enabled 04/11=absent — matches design (getRoundDateBounds min=null). Note: API also accepts a round date after the tentative allocation date (05/11 > 03/11). |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Round date picker range
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Past days allowed (to record a held interview); no upper bound until an outcome is recorded

**Test Data**

- `checkId`: J1-17

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-729 — Allocation ticket NA-0450 (from the interview Won → Allocate) can be found in Requests Tracking

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Not found in either tab. Direct Allocation tab sends allocationMode=DIRECT (excludes isInterviewRequired tickets); Interview Allocation tab excludes tickets linked to a nomination (nomination: null) and shows only the OPP-0156 row. API /allocation-tickets?search=NA-0450 does return it. |
| **Finding Ref** | N-03 |
| **Last Result** | failed |
| **Notes** | N-03: Allocation ticket made from an interview (NA-0450) is not findable in Requests Tracking; row shows CSM/Employee as "—" |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Allocation ticket NA-0450 (from the interview Won → Allocate) can be found in Requests Tracking
2. Check the screen, toast and the resulting card / ticket state

**Expected**

PMO can find NA-0450 by ticket number in Requests Tracking

**Test Data**

- `checkId`: J1-26

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-1005 — Title exactly 200 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0162 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title exactly 200 chars
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1006 — Title 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title 201 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1013 — clientName exactly 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0164 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientName exactly 200
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1014 — clientName 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientName 201
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1020 — websiteUrl 2049 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be shorter than or equal to 2048 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: websiteUrl 2049 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1023 — prospectContact 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"prospectContact","message":"prospectContact must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prospectContact 201
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1024 — prospectNotes 4096

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0166 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prospectNotes 4096
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1025 — prospectNotes 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"prospectNotes","message":"prospectNotes must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prospectNotes 4097
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1026 — specialInstructions 4096

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0167 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: specialInstructions 4096
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1027 — specialInstructions 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"specialInstructions","message":"specialInstructions must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: specialInstructions 4097
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1029 — jobDescription has no max length (100k chars)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"jobDescription","message":"jobDescription must be shorter than or equal to 50000 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: jobDescription has no max length (100k chars)
2. Check the response and resulting state

**Expected**

Should be capped (FRD silent) — record behaviour

**Test Data**

- `checkId`: VAL-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1039 — Position title 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Position title 201
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1041 — techStacks item 101 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"each value in techStacks must be shorter than or equal to 100 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: techStacks item 101 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1051 — requiredCount 21

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be greater than 20"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount 21
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1052 — requiredCount 1.5

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must be a whole number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount 1.5
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1054 — requiredCount 20 → 20 opening cards

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0175 openings=20 ordinals=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount 20 → 20 opening cards
2. Check the response and resulting state

**Expected**

201 created + 20 openings, ordinals 1..20

**Test Data**

- `checkId`: VAL-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1064 — FIXED 50.5%

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must be an integer number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: FIXED 50.5%
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-064

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1069 — tentativeAllocationDate bad format (21/10/2026)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.tentativeAllocationDate","message":"tentativeAllocationDate must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: tentativeAllocationDate bad format (21/10/2026)
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-069

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1080 — roundTitles 50

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0180 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: roundTitles 50
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-080

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1081 — roundTitles 51

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.roundTitles","message":"roundTitles must contain no more than 50 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: roundTitles 51
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-081

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1082 — roundTitles item 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.roundTitles","message":"each value in roundTitles must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: roundTitles item 201 chars
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-082

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1084 — note 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.note","message":"note must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: note 4097
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-084

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1152 — admin: JAVA-dept opp 200, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Admin: admin: JAVA-dept opp 200, QA-dept opp 200
2. Check the response and resulting state

**Expected**

200/200

**Test Data**

- `checkId`: RBAC-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1153 — pmo: JAVA-dept opp 200, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: pmo: JAVA-dept opp 200, QA-dept opp 200
2. Check the response and resulting state

**Expected**

200/200

**Test Data**

- `checkId`: RBAC-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1154 — tmQA: JAVA-dept opp 404, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM (QA): tmQA: JAVA-dept opp 404, QA-dept opp 200
2. Check the response and resulting state

**Expected**

404/200

**Test Data**

- `checkId`: RBAC-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1155 — tmJava: JAVA-dept opp 200, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM (JAVA): tmJava: JAVA-dept opp 200, QA-dept opp 404
2. Check the response and resulting state

**Expected**

200/404

**Test Data**

- `checkId`: RBAC-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1156 — em: JAVA-dept opp 404, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: em: JAVA-dept opp 404, QA-dept opp 200
2. Check the response and resulting state

**Expected**

404/200

**Test Data**

- `checkId`: RBAC-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1204 — Bypass reason 1025 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Bypass reason 1025 chars
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1237 — Round interviewer 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"interviewer","message":"interviewer must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Round interviewer 201 chars
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-073

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1247 — Feedback 4097 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"feedback","message":"feedback must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Feedback 4097 chars
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-083

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1290 — limit=50 (not allowed)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"limit","message":"limit must be one of the following values: 100, 200, 300"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: limit=50 (not allowed)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-126

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1353 — Reject reason 1025

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Reject reason 1025
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1357 — Cancel reason 1025

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Cancel reason 1025
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1387 — Prep material title 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Prep material title 201
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1400 — Add position requiredCount 21 via PATCH

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"requiredCount","message":"requiredCount must not be greater than 20"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Add position requiredCount 21 via PATCH
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-020

**Automation Hint**

API-level check (scratchpad harness)

### Functional (191)

#### TC-OPPTY-704 — Prep material typed in the create form but not "Add Link"-ed

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Title "Playwright basics" + URL typed in the draft row, Create Opportunity submitted → position.prepMaterials = [] (draft silently dropped; by code design the draft is local state). No warning. |
| **Finding Ref** | N-06 |
| **Last Result** | failed |
| **Notes** | N-06: Prep material typed on the create form is dropped silently unless "Add Link" is clicked |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Prep material typed in the create form but not "Add Link"-ed
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Either saved, or the user is warned before submit

**Test Data**

- `checkId`: J1-03b

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-705 — Ticket detail after create shows header, assignees and position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Edit Ticket Cancel Request Created by: Bhumi Chauhan Assigned PM: Gaurav Panchal Assigned CSM: Tarun Sharma Created On: 27/10/26, 11:30 am Updated On: 27/10/26, 11:30 am Position Details Ticket Info Preparation Material Link Project Special Instructions for this Opportunity QA-AUTO: client starts with a practica |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Ticket detail after create shows header, assignees and position
2. Check the screen, toast and the resulting card / ticket state

**Expected**

OPP number, Open, Existing Client, Assigned PM Gaurav, Assigned CSM Tarun, 2 openings, R1/R2 plan

**Test Data**

- `checkId`: J1-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-706 — Pick 2 candidates in the Candidate Shortlist dialog

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Add 2 Candidates enabled=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Pick 2 candidates in the Candidate Shortlist dialog
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Submit reads "Add 2 Candidates"

**Test Data**

- `checkId`: J1-05

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-707 — Two-way allocation alert when shortlisting someone with a direct allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | "Employee has a direct allocation" — Kriti Desai, HyperScale 10%; Continue Shortlisting → shortlisted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Two-way allocation alert when shortlisting someone with a direct allocation
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Confirm dialog lists the existing allocation; Continue Shortlisting proceeds

**Test Data**

- `checkId`: J1-05b

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-708 — Shortlist Kriti Desai + Uday Dave

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Candidates shortlisted. \| ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 90% 90% Remaining of 100% Shortlisted - Not sent OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 100% Remaining of 100% Shortlisted - Not sent |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Shortlist Kriti Desai + Uday Dave
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Toast "Candidates shortlisted."; both rows appear as Shortlisted, approval Not sent

**Test Data**

- `checkId`: J1-06

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-709 — PMO sends Kriti Desai for TM approval

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Kriti Desai sent for approval. \| row: OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 90% 90% Remaining of 100% Waiting for Approval - Awaiting TM approval QA TM |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, PMO sends Kriti Desai for TM approval
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Approval column shows "Sent for approval / Awaiting TM approval"

**Test Data**

- `checkId`: J1-07

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-711 — Bypass TM approval for Uday Dave with a reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Approval bypassed. \| Kriti Desai sent for approval. \| row: OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 50% Remaining of 100% Being Prepared 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Bypass TM approval for Uday Dave with a reason
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Approved by Bhumi Chauhan (approval bypassed); opening moves to Being Prepared

**Test Data**

- `checkId`: J1-09

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-712 — TM gets an in-app notification for the approval request

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Notifications 99+ What's New Approval requested for Kriti Desai Kriti Desai was sent for your approval on 'QA Automation Engineer' (OPP-0156). Oct 27, 2026 · 11:33 AM New position 'QA Automation Engineer' on OPP-0156 'QA Automation Engineer' was added under QA-AUTO UI J1 86003 (Analytix) and is ready for shortlisting. Oct 27, 2026 · 11:30 AM Alloca |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as TM (QA), TM gets an in-app notification for the approval request
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Bell lists "approval requested" for Kriti Desai / OPP-0156

**Test Data**

- `checkId`: J1-10

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-713 — TM finds OPP-0156 on the Opportunity board

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Ticket ID Opportunity Title Position Name Department Candidates Client Type Client/Prospect Name Status Interview Date Created Date Action Analytix — QA-AUTO UI J1 86003 Existing Client OPP-0156 #1 QA-AUTO UI J1 86003 QA Automation Engineer QA Kriti Desai Existing Client Analytix Waiting for Approva |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as TM (QA), TM finds OPP-0156 on the Opportunity board
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Row(s) for OPP-0156 visible to the QA TM

**Test Data**

- `checkId`: J1-11

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-715 — PMO adds preparation material from the ticket's Preparation Material tab

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Preparation material added. \| Preparation Material Link Project Special Instructions for this Opportunity QA-AUTO: client starts with a practical round View Other Positions QA Automation Engineer Add Material QA Automation Engineer Playwright fixtures https://playwright.dev/docs/test-fixtures |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, PMO adds preparation material from the ticket's Preparation Material tab
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Drawer saves; link listed under the position

**Test Data**

- `checkId`: J1-13

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-716 — Candidate dialog — Opportunity Details tab

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Kriti Desai's Interview Details Opportunity details, interview rounds, preparation checklist and preparation material for this candidate. Opportunity Details Interview Rounds Preparation Checklist Preparation Material Project Summary Client Name Analytix Project Description - Project & Scope Details Tech Stack Playwright Allocation Details Start Date 03/11/2026 End Date - Allocation Mode Fixed 50% |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Candidate dialog — Opportunity Details tab
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Shows project summary, tech stack, allocation 50% Fixed, start date 03/11/2026

**Test Data**

- `checkId`: J1-14

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-717 — Empty values in the candidate dialog use a readable placeholder

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Opportunity Details tab: "Project Description -", "End Date -"; Interview Rounds read-only: "Interviewer Name -"; Requests Tracking Interview row: CSM "—", Employee "—". |
| **Finding Ref** | N-07 |
| **Last Result** | failed |
| **Notes** | N-07: Empty values shown as bare dashes in the candidate dialog and Requests Tracking |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Empty values in the candidate dialog use a readable placeholder
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Readable word placeholder (team convention), never a bare dash

**Test Data**

- `checkId`: J1-14b

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-718 — Tick 2 checklist items and skip one (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | 2 / 5 completed · 1 skipped  \| toast Checklist updated \| Checklist updated \| Checklist updated \| Preparation material added. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Tick 2 checklist items and skip one (PMO)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Progress shows 2 / 5 completed · 1 skipped

**Test Data**

- `checkId`: J1-15

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-719 — Candidate dialog — Preparation Material tab shows the ticket material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Preparation Material Add Preparation Material Title Preparation Material URL Add Link Playwright fixtures https://playwright.dev/docs/test-fixtures 27/10/2026 Close |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Candidate dialog — Preparation Material tab shows the ticket material
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Playwright fixtures link listed

**Test Data**

- `checkId`: J1-16

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-721 — Set Round 1 interview date to today

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Round updated \| Unable to reach the server. Please check your connection. \| Round 1: Technical Scheduled Skip Delete Interview Date 27/10/2026 Interviewer Name Recording URL (Optional) Did the interview happen? Scheduled for 27/10/2026. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Set Round 1 interview date to today
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Round updated"; card stage becomes Interview Scheduled

**Test Data**

- `checkId`: J1-18

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-722 — Enter interviewer, recording URL and feedback on Round 1 (saves on blur)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Round updated \| Round updated \| Round updated |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Enter interviewer, recording URL and feedback on Round 1 (saves on blur)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Each field saves ("Round updated")

**Test Data**

- `checkId`: J1-19

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-723 — Mark Round 1 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Round marked as Cleared \| Round updated \| Round updated \| Round updated \| Round 1: Technical Cleared Round 2: Client Pending Skip Delete Interview Date Pick a date Interviewer Name Recording URL (Optional) Add Feedback Set an interview date of today or earlier before marking the round Cleared or Not Cleared Not Cleared Mar |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Mark Round 1 Cleared
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Round marked as Cleared"; date/outcome locked; Round 2 becomes current

**Test Data**

- `checkId`: J1-20

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-724 — Date Round 2 today → card moves to Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 90% 40% Remaining of 100% Interview Scheduled 2 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Date Round 2 today → card moves to Interview Scheduled
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Status column: Interview Scheduled, Round 2 / 2

**Test Data**

- `checkId`: J1-21

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-725 — Mark Round 2 Cleared (last round)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Round marked as Cleared \| row: OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 90% 40% Remaining of 100% Waiting for Feedback 2 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Mark Round 2 Cleared (last round)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

All rounds Cleared → stage Waiting for Feedback

**Test Data**

- `checkId`: J1-22

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-726 — Mark Won from the candidate dialog

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | confirm: none \| toast: Candidate marked as Won \| row: OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 90% 40% Remaining of 100% Won 2 / 2 Approved Allocate \| actions: How remaining allocation is calculated, View interview details of Kriti Desai, Allocate Kriti Desai to the project |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Mark Won from the candidate dialog
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Candidate marked as Won; status Won; Allocate action appears

**Test Data**

- `checkId`: J1-23

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-727 — Allocate dialog pre-fills from the position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | start=03/11/2026 pct="50" ; header: Allocate Kriti Desai Hand the selected candidate over to AnalytixHub \| Advanced Analytics. A direct allocation is created for them on submit. Kriti Desai Sr. QA Engineer  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Allocate dialog pre-fills from the position
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Start date 03/11/2026, Fixed and 50% pre-filled; candidate remaining 40% shown

**Test Data**

- `checkId`: J1-24

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-730 — Interview Allocation row for OPP-0156 shows CSM and allocated employee

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Row: OPP-0156 High AnalytixHub \| QA \| CSM — \| Employee — \| Open. API interview-requests item carries no csm/employee fields. Bare dashes also break the empty-value convention. |
| **Finding Ref** | N-03 |
| **Last Result** | failed |
| **Notes** | N-03: Allocation ticket made from an interview (NA-0450) is not findable in Requests Tracking; row shows CSM/Employee as "—" |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Interview Allocation row for OPP-0156 shows CSM and allocated employee
2. Check the screen, toast and the resulting card / ticket state

**Expected**

CSM Tarun Sharma; Employee Kriti Desai (allocated)

**Test Data**

- `checkId`: J1-26b

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-731 — Assigned PM sees OPP-0156 under Requests Tracking → Interview Allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | d Date Last Updated OPP-0156 High AnalytixHub \| Advanced Analytics Q QA — — Open 27/10/2026 Today OPP-0151 High No project linked Q QA — — Open 26/10/2026 Yesterday OPP-0150 High EventDriven \| CQRS Framework Q QA — — Open 26/10/2026 Yesterday OPP-0139 High No project linked Q QA — — Open 26/10/2026 Yesterday OPP-0126 H |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PM, Assigned PM sees OPP-0156 under Requests Tracking → Interview Allocation
2. Check the screen, toast and the resulting card / ticket state

**Expected**

OPP-0156 listed with Kriti Desai Project Allocated

**Test Data**

- `checkId`: J1-27

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-733 — Set Round 1 date to yesterday (interview day already over)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | toast: Round updated \| row: OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 50% Remaining of 100% Did Interview Happen? 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Set Round 1 date to yesterday (interview day already over)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Card moves to "Did Interview Happen" straight away (stage is derived on the write)

**Test Data**

- `checkId`: J2-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-734 — Prompt "Did the interview happen?" shows on Round 1

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | Did the interview happen? Scheduled for 26/10/2026. Confirming moves the candidate to Waiting for Feedback. Completed Didn't happen Add Feedback Not Cleared Mar |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Prompt "Did the interview happen?" shows on Round 1
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Prompt with Completed / Didn't happen and the scheduled date

**Test Data**

- `checkId`: J2-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-735 — Didn't happen → reschedule to today

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | yesterday disabled in new-date picker=true \| toast: Interview rescheduled \| row: OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 50% Remaining of 100% Interview Scheduled 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Didn't happen → reschedule to today
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Interview rescheduled"; card back to Interview Scheduled

**Test Data**

- `checkId`: J2-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-737 — Old card OPP-0066 (R1 dated 20/10, unanswered) after 4 nights

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | OPP-0066 #1 Ankita Das 50% Sr. QA Engineer QA 100% 0% Remaining of 110% Interview Scheduled 1 / 1 Approved — API stage still INTERVIEW_SCHEDULED; stage-counts DID_INTERVIEW_HAPPEN=0 on 27/10 11:10. Sweep is gated by feature.cron.opportunities.lapsedInterview.enabled (off when missing). |
| **Finding Ref** | N-01 |
| **Last Result** | failed |
| **Notes** | N-01: Nightly "lapsed interview" sweep does not run on dev — past-dated cards stay in Interview Scheduled |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Old card OPP-0066 (R1 dated 20/10, unanswered) after 4 nights
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Nightly sweep (00:05 IST) should have moved it to Did Interview Happen?

**Test Data**

- `checkId`: J2-05

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-738 — Edit the interviewer on OPP-0066 Round 1 (any round write re-derives the stage)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | toast: Round updated \| row: OPP-0066 #1 Ankita Das 50% Sr. QA Engineer QA 100% 0% Remaining of 110% Did Interview Happen? 1 / 1 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Edit the interviewer on OPP-0066 Round 1 (any round write re-derives the stage)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Card moves to Did Interview Happen? after the save

**Test Data**

- `checkId`: J2-06

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-739 — Didn't happen → Skip round (OPP-0047 Round 1, dated 19/10)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | confirm: Skip Round 1? This round will be marked as Skipped and the candidate moves on to the next round. Cancel Skip Round \| toast: Round marked as Skipped \| row: OPP-0047 #2 Vandana Mishra 50% Sr. QA Engineer QA 80% 15% Remaining of 135% Waiting for Feedback 2 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Didn't happen → Skip round (OPP-0047 Round 1, dated 19/10)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Skip confirm "Skip Round 1?"; "Round skipped"; card moves on

**Test Data**

- `checkId`: J2-07

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-740 — Kanban: where "Did Interview Happen?" cards sit

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | columns: Pending to Shortlist \| Shortlisted \| Waiting for Approval \| Being Prepared \| Interview Scheduled \| Did Interview Happen? \| Waiting for Feedback \| Won \| Project Allocated \| Rejected \| Lost \| On Hold \| No Longer Required \| Advanced filter \|\| near IS: Interview Scheduled 2 OPP-0123 #1 High QA Engineer QA-AUTO RT Client — QA-AUTO E2E Misc Playwright Ankita Das 0% Remaining allocation: 0% 0/1 Round 0% Interview: 27/10/2026 Did it happen? Interview Scheduled 19h ago OPP-0112 #2 High QA Automation Engineer AnalytixHub — QA-AUTO E2E Interview-1 Playwr |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Kanban: where "Did Interview Happen?" cards sit
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Cards share the Interview Scheduled column (no separate column) and are marked

**Test Data**

- `checkId`: J2-08

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-741 — Mark Round 1 Not Cleared for a Waiting-for-Feedback candidate

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | confirm: none \| toast: Round marked as Not Cleared \| Round updated \| #2 row: OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 50% Remaining of 100% Being Prepared 1 / 2 Approved \| Rejected & previously considered Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action Aarav Dutta 50% Sr. QA Engineer QA 100% 1% Remaining of 100% Rejected by TM on 27/10/2026 - — Not Cleared does not reject; the card silently moves on to Round 2 (Being Prepared). Observation: the ticket page row has no Reject action for In Process candidates — only the board Change-status menu offers Rejected. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as PMO, Mark Round 1 Not Cleared for a Waiting-for-Feedback candidate
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Outcome recorded; PMO decides on rejection (FRD: Select after Not Cleared needs confirmation)

**Test Data**

- `checkId`: J3-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-742 — Reject an In Process candidate after a Not Cleared round, from the board "Change status" menu

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | menu: Pending to Shortlist Shortlisted Waiting for Approval Being Prepared Interview Scheduled Did Interview Happen? Waiting for Feedback Won Project Allocated Rejected Lost On Hold No Longer Required \| dialog: Reject candidate? Uday Dave will be moved to the rejected history of this position and the opening will go back to Pending to Shortlist. Rejected by PMO Client  \| toast: Candidate rejected. \| Rejected & previously considered Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action Uday Dave 50% QA Lead QA 100% 100% Remaining of 100% Rejected by Client on 27/10/2026 1 / 2 Aarav Dutta 50% Sr. QA Engineer QA 100% 1% Remaining of 100% Rejected by TM on 27/10/2026 - |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as PMO, Reject an In Process candidate after a Not Cleared round, from the board "Change status" menu
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Rejected option asks for reason + Rejected by; candidate → rejected history

**Test Data**

- `checkId`: J3-01b

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-743 — Shortlist 3 candidates when only 1 opening is empty

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | toast: Candidates shortlisted. \| ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 40% 40% Remaining of 100% Project Allocated 2 / 2 Approved OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 50% Remaining of 100% Waiting for Feedback 1 / 2 Approved OPP-0156 #3 Diya Nair 50% Lead Engineer QA 100% 100% Remaining of 100% Shortlisted - Not sent OPP-0156 #4 Aarav Dutta 50% Sr. QA Engineer QA 100% 1% Remaining of 100% Shortlisted - Not sent OPP-0156 #5 Rushil Makwana 50% QA Lead QA 100% 55% Remaining of 100% Shortlisted - Not sen |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as PMO, Shortlist 3 candidates when only 1 opening is empty
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Extra picks get their own new openings (dialog says so); 3 rows Shortlisted

**Test Data**

- `checkId`: J3-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-745 — Send Diya Nair for approval, then withdraw the request

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | toast: Approval request for Diya Nair withdrawn. \| Diya Nair sent for approval. \| row: OPP-0156 #3 Diya Nair 50% Lead Engineer QA 100% 100% Remaining of 100% Shortlisted - Not sent |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as PMO, Send Diya Nair for approval, then withdraw the request
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Approval request for Diya Nair withdrawn."; back to Not sent

**Test Data**

- `checkId`: J3-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-746 — TM rejects Aarav Dutta's approval request with a reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | dialog: Reject candidate? Aarav Dutta will be moved to the rejected history of this position and the opening will go back to Pending to Shortlist. Reason * Cancel Rejec \| toast: Candidate rejected. \| Rejected & previously considered Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action Aarav Dutta 50% Sr. QA Engineer QA 100% 1% Remaining of 100% Rejected by TM on 27/10/2026 - |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as TM (QA), TM rejects Aarav Dutta's approval request with a reason
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Rejected by TM; moves to rejected history

**Test Data**

- `checkId`: J3-05

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-747 — Re-initiate the position with a reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | enabled while empty=true \| toast: Position re-initiated. Released candidates can be shortlisted again. \| QA Automation Engineer Q QA Fixed - 50% Playwright Shortlisted ratio: 0.5 1 / 2 filled Re-initiate Add/ Shortlist Edit Delete Candidates shortlisted: 1 of 2 — 1 more needed. Add/ Shortlist Re-initiated by Bhumi Chauhan on 27/10/2026 ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 40% 40% Remaining of 100% Project Allocated 2 / 2 Approved Rejected & previously considered Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action Uday Dave 50% QA Lead QA 100% 100% Remaining of 100% Rejected by Client on 27/10/2026 1 / 2 Aarav Dutta |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as PMO, Re-initiate the position with a reason
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Non-allocated candidates (Diya Nair) released; allocated Kriti stays; "Re-initiated by Bhumi Chauhan on …"

**Test Data**

- `checkId`: J3-06

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-748 — Cancel Request dialog lists the outcomes

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J4 Ticket outcome (On Hold / Lost / No Longer Required) |
| **Actual Result** | What do you want to do with the ticket? Capture independent client outcome and mark opportunity closed. Client Won Finalised candidates move to Won, the rest are released. Client Lost Opportunity lost, every active candidate moves to Lost. On Hold Client paused, candidates are On Hold & can be resumed later. Cancel Confirm Close |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J4 Ticket outcome (On Hold / Lost / No Longer Required): as PMO, Cancel Request dialog lists the outcomes
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Interview ticket: Client Won / Client Lost / On Hold (NLR + Re-open are on the board status menu by design)

**Test Data**

- `checkId`: J4-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-749 — Put OPP-0157 On Hold

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J4 Ticket outcome (On Hold / Lost / No Longer Required) |
| **Actual Result** | toast: Ticket status updated. \| OPP-0157 QA-AUTO UI J4 hold 32038 On Hold High Interview Allocation · QA-AUTO Client Prospect Edit Ticket Cancel Request Created by: Bhumi Chauhan Created On: 27/10/26, 11:53 am Updated On: 27/10/26, 11:54 am Position Details Ticket Info Preparation Material L \| ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0157 #1 Nimisha Kumar 50% QA Lead QA 80% 30% Remaining of 100% On Hold 1 / 1 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J4 Ticket outcome (On Hold / Lost / No Longer Required): as PMO, Put OPP-0157 On Hold
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Ticket status On Hold; candidate On Hold; counts in the On Hold tile

**Test Data**

- `checkId`: J4-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-751 — Board status menu → No Longer Required on OPP-0159

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J4 Ticket outcome (On Hold / Lost / No Longer Required) |
| **Actual Result** | menu: Pending to Shortlist Shortlisted Waiting for Approval Being Prepared Interview Scheduled Did Interview Happen? Waiting for Feedback Won Project Allocated Rejected Lost On Hold No Longer Required \| confirm: Confirm Status Change This will change the status of the whole Opportunity OPP-0159 — QA-AUTO UI J4 nlr 36771 — to No Longer Required. Every opening of this Opp \| toast: Status updated. \| OPP-0159 QA-AUTO UI J4 nlr 36771 No Longer Required High Interview Allocation · QA-AUTO Client Prospect Created by: Bhumi Chauhan Created On |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J4 Ticket outcome (On Hold / Lost / No Longer Required): as PMO, Board status menu → No Longer Required on OPP-0159
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Ticket closes No Longer Required; listed under the NLR tile with a red border

**Test Data**

- `checkId`: J4-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-752 — Board summary tiles after the closes

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J4 Ticket outcome (On Hold / Lost / No Longer Required) |
| **Actual Result** | Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. New Opportunities All Opportunities 135 Open 129 Won 02 Lost 01 On Hold 00 No Longer Required 03 Interview Direct Group by Filter List Kanban Ticket ID Opportuni |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J4 Ticket outcome (On Hold / Lost / No Longer Required): as PMO, Board summary tiles after the closes
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Lost and No Longer Required tiles increase

**Test Data**

- `checkId`: J4-05

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-753 — Re-open the On Hold ticket OPP-0157 from the board status menu

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J4 Ticket outcome (On Hold / Lost / No Longer Required) |
| **Actual Result** | menu: Open Pending to Shortlist Shortlisted Waiting for Approval Being Prepared Interview Scheduled Did Interview Happen? Waiting for Feedback Won Project Allocated Rejected Lost On Hold No Longer Required \| confirm: Confirm Status Change This will change the status of the whole Opportunity OPP-0157 — QA-AUTO UI J4 hold 32038 — to Open. Every opening of this Opportunity is a \| toast: Status updated. \| OPP-0157 QA-AUTO UI J4 hold 32038 Open High Interview Allocation · QA-AUTO Client Prospect Edit Ticket Cancel Request Created by: Bhumi Chau \| vailability % Remaining Allocation Status Round Approval Action OPP-0157 #1 Nimisha Kumar 50% QA Lead QA 80% 30% Remaining of 100% Being Prepared 1 / 1 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J4 Ticket outcome (On Hold / Lost / No Longer Required): as PMO, Re-open the On Hold ticket OPP-0157 from the board status menu
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Menu offers Re-open / a pipeline stage; ticket back to Open, candidate resumes

**Test Data**

- `checkId`: J4-06

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-754 — CSM opens Opportunity Allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J5 CSM raises and manages an Interview ticket |
| **Actual Result** | Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. New Opportunities All Opportunities 20 Open 20 Won 00 Lost 00 On Hold 00 No Longer Required 00 Interv |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM opens Opportunity Allocation
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Board loads with "New Opportunities" button

**Test Data**

- `checkId`: J5-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-755 — CSM creates an Existing-client Interview ticket on own project ElitePay

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J5 CSM raises and manages an Interview ticket |
| **Actual Result** | POST 201 OPP-0160 \| toast Opportunity created successfully. \|  \| https://simerp-dev.simform.solutions/pre-sales/d0eff4fb-251a-47c2-8220-a3343614e870 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM creates an Existing-client Interview ticket on own project ElitePay
2. Check the screen, toast and the resulting card / ticket state

**Expected**

201; ticket opens; raiser = Tarun Sharma

**Test Data**

- `checkId`: J5-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-756 — CSM edits the ticket they raised (Edit Ticket → Special Instructions)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J5 CSM raises and manages an Interview ticket |
| **Actual Result** | Saved — ticket now shows Special Instructions "QA-AUTO CSM edit". Note: the Edit Details drawer stayed open after Save and no success toast was caught. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM edits the ticket they raised (Edit Ticket → Special Instructions)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Opportunity details updated." (fixed 26/10, FRD §7.6)

**Test Data**

- `checkId`: J5-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-757 — CSM sees candidate actions? (Add/ Shortlist on own Interview ticket)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J5 CSM raises and manages an Interview ticket |
| **Actual Result** | Add/ Shortlist buttons: 0; buttons: Toggle Sidebar \| Employee \| Requests Tracking \| 66 \| \| Edit Ticket \| QA Engineer \| Shortlisted ratio: 0 \| 0 / 1 filled \| Edit \| |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM sees candidate actions? (Add/ Shortlist on own Interview ticket)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Per FRD CSM does not shortlist; check what the UI offers

**Test Data**

- `checkId`: J5-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-758 — CSM cancels own Interview ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J5 CSM raises and manages an Interview ticket |
| **Actual Result** | Cancel Request button visible to CSM: false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J5 CSM raises and manages an Interview ticket: as CSM, CSM cancels own Interview ticket
2. Check the screen, toast and the resulting card / ticket state

**Expected**

FRD rule 22 asks for a Cancelled tag; build: not built for Interview (BUG-003)

**Test Data**

- `checkId`: J5-05

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-759 — Admin opens the board and OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 136 \| list has OPP-0156: true \| detail: OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Cre \| actions: QA Automation Engineer, Shortlisted ratio: 0.5, 1 / 2 filled, View interview details of Kriti Desai, These candidates are greyed out in Add/ Shortlist for this opportunity, so they can't be shortlisted again by mistake., Rejection details for Uday Dave, Rejection details for Aarav Dutta |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as Admin, Admin opens the board and OPP-0156
2. Check the screen, toast and the resulting card / ticket state

**Expected**

view-only (FRD: view-only banner)

**Test Data**

- `checkId`: J6-Admin

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-760 — Candidate (Kriti) opens the OPP-0156 link from her notification

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | /pre-sales/45503acb-9973-4b39-a310-a5646239e387 \| OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Created by: Bhumi Chauhan Assigned PM: Gaurav Panchal Assigned CSM: Tarun Sharma Created On: 27/10/26, 11:30 am Updated On: 27/10/26, 11:30 am Position Details Ticket Info Preparation Material Link Project QA Automation Engineer Q QA Fixed - 50% Playwright Re-initiated by Bhumi Chauhan on 27/10/2026 ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 40% 40% Remaining of 100% Project Allocated 2 / 2 A |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as Employee (candidate), Candidate (Kriti) opens the OPP-0156 link from her notification
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Sees only her own row; no competitor counts; round feedback hidden

**Test Data**

- `checkId`: J6-Cand1

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-761 — Candidate opens her interview details (read-only)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | Kriti Desai's Interview Details Opportunity details, interview rounds, preparation checklist and preparation material for this candidate. Opportunity Details Interview Rounds Preparation Checklist Preparation Material Interview Rounds Round 1: Technical Cleared Interview Date 27/10/2026 Interviewer Name Client QA Lead (QA-AUTO) Round 2: Client Cleared Interview Date 27/10/2026 Interviewer Name - Close |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as Employee (candidate), Candidate opens her interview details (read-only)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Rounds read-only; no Mark Won / Mark Cleared; feedback hidden

**Test Data**

- `checkId`: J6-Cand2

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-762 — EM opens the board and OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 129 \| list has OPP-0156: true \| detail: OPP-0156 QA-AUTO UI J1 86003 Open High Interview Allocation · Analytix Existing Client Cre \| actions: QA Automation Engineer, Shortlisted ratio: 0.5, 1 / 2 filled, Add/ Shortlist, View interview details of Kriti Desai, These candidates are greyed out in Add/ Shortlist for this opportunity, so they can't be shortlisted again by mistake., Rejection details for Uday Dave, Rejection details for Aarav Dutta |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as EM, EM opens the board and OPP-0156
2. Check the screen, toast and the resulting card / ticket state

**Expected**

sees QA-dept tickets; read or limited actions

**Test Data**

- `checkId`: J6-EM

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-764 — RM opens the board and OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 00  \| list has OPP-0156: false \| detail: Opportunity not found This opportunity does not exist or you no longer have access to it. \| actions:  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as RM, RM opens the board and OPP-0156
2. Check the screen, toast and the resulting card / ticket state

**Expected**

read-only view of tickets

**Test Data**

- `checkId`: J6-RM

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-765 — TM (JAVA) opens the board and the QA-only ticket OPP-0156

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | board url /pre-sales \| Opportunity Allocation Track every candidate across every position, from shortlisting to won/lost. All Opportunities 17 Open 17 Won 00 Lost 00 On Hold 00 No Longer Required 00 Interview Direct My Oppo \| OPP-0156: Opportunity not found This opportunity does not exist or you no longer have access to it. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as TM (JAVA), TM (JAVA) opens the board and the QA-only ticket OPP-0156
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Board opens (JAVA-dept scope); QA-only OPP-0156 not accessible

**Test Data**

- `checkId`: J6-TMJAVA

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-766 — Add a round with the Number of Rounds stepper

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | toast: Round added \| Round 2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Add a round with the Number of Rounds stepper
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Round 2 appears ("Round added")

**Test Data**

- `checkId`: J7-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-767 — Reorder rounds with the keyboard (drag handle: Space, ArrowUp, Space)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | before: Round 2 / Round 3 \| after: Round 2 / Round 3 \| toast: Round order updated \| Round added \| Round added |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Reorder rounds with the keyboard (drag handle: Space, ArrowUp, Space)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Round order updated"; Round 3 becomes Round 2

**Test Data**

- `checkId`: J7-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-768 — Delete the last pending round

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | confirm: Remove Round 3? This round and its details will be removed from the candidate, and the rounds after  \| toast: Round removed \| Round order updated \| Round added \| Round 2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Delete the last pending round
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Confirm "Remove Round 3?"; "Round removed"

**Test Data**

- `checkId`: J7-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-769 — Skip Round 1 from the round header

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | toast: Round marked as Skipped \| Round removed \| Round order updated \| Round 2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Skip Round 1 from the round header
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Confirm "Skip Round 1?"; Round 1 Skipped

**Test Data**

- `checkId`: J7-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-770 — Mark Won while Round 2 is still pending

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | confirm: Round 2 has no Cleared outcome yet Not every interview round is Cleared. Selecting now records the rounds still pending as Skipped. Do you want to mark the candidate Won? Cancel Yes, Proceed \| toast: Candidate marked as Won \| Round marked as Skipped \| Round removed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Mark Won while Round 2 is still pending
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Skip confirmation: "Round 2 has no Cleared outcome yet … records the rounds still pending as Skipped"

**Test Data**

- `checkId`: J7-05

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-772 — Link Project tab → Associate Project (AnalytixHub) on a Prospect ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | dialog: Link to Existing Project? You'll need to select the client's existing Zoho project from the dropdown before you can save. Link Zoho Project * Select project Keep Prospect Confirm Close \| toast: Project linked. \| OPP-0157 QA-AUTO UI J4 hold 32038 Open High Interview Allocation · QA-AUTO Client Existing Client Edit Ticket Cancel Request Created by: Bhumi Chauhan Created On: 27/10/26, 11:53 am Updated On: 27/10/ |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Link Project tab → Associate Project (AnalytixHub) on a Prospect ticket
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Link to Existing Project?" confirm; ticket becomes Existing Client; "Project linked."

**Test Data**

- `checkId`: J7-07

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-773 — Allocate Nimisha Kumar once the project is linked

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | POST 200 SUCCESS Candidate allocated to the Project successfully \| row: OPP-0157 #1 Nimisha Kumar 50% QA Lead QA 30% 30% Remaining of 100% Project Allocated 2 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Allocate Nimisha Kumar once the project is linked
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Allocation created; Project Allocated

**Test Data**

- `checkId`: J7-08

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-779 — Second PMO creates a Prospect Interview ticket (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (2nd) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J9 Prospect, two departments |
| **Actual Result** | POST 201 OPP-0195 \|  |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J9 Prospect, two departments: as PMO (2nd), Second PMO creates a Prospect Interview ticket (no project)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

201

**Test Data**

- `checkId`: J9-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-780 — Edit the position: add JAVA as a second department and a prep link via "Add Link"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (2nd) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J9 Prospect, two departments |
| **Actual Result** | toast: New ticket OPP-0204 raised QA-AUTO E2E Interview-3 (mark Won) for QA-AUTO E2E Client has been raised as OPP-0204. \| Position updated successfully. \| OPP-0202 marked open QA-AUTO E2E Interview-1 (AnalytixHub) is now open. \| OPP-0202 marked on hold QA-AUTO E2E Interview-1 (AnalytixHub) is now on hold. \| OPP-0202 linked to AnalytixHub \| Advanced Analytics QA-AUTO E2E Interview-1 (AnalytixHub) is now linked to Project AnalytixHub \| Advanced Analytics. \| OPP-0202 unlinked from AnalytixHub \| Advanced Analytics QA-AUTO E2E Interview-1 (AnalytixHub) is no longer linked to Project AnalytixHub \| Advanced Analytics. \| SDET Q QA J JAVA Fixed - 50% Playwright Shortlisted ratio: 0 0 / 1 filled Re-initiate Add/ Shortlist Edit Delete Candida |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J9 Prospect, two departments: as PMO (2nd), Edit the position: add JAVA as a second department and a prep link via "Add Link"
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Position saved with QA + JAVA and 1 prep material

**Test Data**

- `checkId`: J9-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-781 — JAVA TM opens the QA+JAVA ticket and the shortlist dialog

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J9 Prospect, two departments |
| **Actual Result** | OPP-0195 QA-AUTO UI J9 prospect 46545 Open High Interview Allocation · QA-AUTO ProspectCo J9 Prospect Created by: Vihaan Chatterjee Created On: 27/10/26, 12:16  \|\| dialog: Candidate Shortlist Pick up to 100 employees. Picks beyond the empty openings get a new opening each on this position. Position Title: SDET Tech Stack: Playwright Search candidates Department JAVA QA Select Employee Employee details UP System Department Designation Skills Availability % Remaining Allocation Interview Opportunities Current Projects Mehul Pandya mehul.pandya@simformsolutions.com P1 · Red, score 100, rank 1 P1 · Red 100 #1 JAVA Team Manager PostgreSQL Microservices +4 100% 100% Rem |
| **Finding Ref** | N-04 |
| **Last Result** | failed |
| **Notes** | N-04: TM can shortlist employees of other departments onto their own department's position |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J9 Prospect, two departments: as TM (JAVA), JAVA TM opens the QA+JAVA ticket and the shortlist dialog
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Ticket visible; picker scoped to JAVA candidates only

**Test Data**

- `checkId`: J9-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-1007 — Title is trimmed on save

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0163 "QA-AUTO trim check" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title is trimmed on save
2. Check the response and resulting state

**Expected**

201 created + stored trimmed

**Test Data**

- `checkId`: VAL-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1019 — websiteUrl https valid

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0165 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: websiteUrl https valid
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1035 — PMO Existing client WITHOUT project (allowed at ALL scope)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0169 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO Existing client WITHOUT project (allowed at ALL scope)
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1036 — PMO Existing client with any project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0170 AbsoluteUI \| Design System |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO Existing client with any project
2. Check the response and resulting state

**Expected**

201 created + project linked

**Test Data**

- `checkId`: VAL-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1048 — Multi-department position (QA+JAVA) — EM multi-skill case

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0174 QA+JAVA |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Multi-department position (QA+JAVA) — EM multi-skill case
2. Check the response and resulting state

**Expected**

201 created + 2 departments

**Test Data**

- `checkId`: VAL-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1055 — requiredCount missing (Interview)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_146 An Interview Position needs its required headcount (requiredCount) openings=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount missing (Interview)
2. Check the response and resulting state

**Expected**

FRD: number of openings is a PMO field — 400 or default 1

**Test Data**

- `checkId`: VAL-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1065 — FIXED 1%

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0176 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: FIXED 1%
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-065

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1066 — FIXED 100%

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0177 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: FIXED 100%
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-066

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1068 — DYNAMIC without %

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0178 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: DYNAMIC without %
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-068

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1071 — tentativeAllocationDate in the past

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_178 The tentative allocation date cannot be in the past |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: tentativeAllocationDate in the past
2. Check the response and resulting state

**Expected**

UI blocks past dates (V.ALLOCATION_DATE_PAST) — API should too

**Test Data**

- `checkId`: VAL-071

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1073 — End date same day as start

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0179 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: End date same day as start
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-073

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1083 — roundTitles with blank title (FRD: optional, default "Round N")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0181 ["","Tech"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: roundTitles with blank title (FRD: optional, default "Round N")
2. Check the response and resulting state

**Expected**

201 created + blank kept as null/"" and shown as Round 1

**Test Data**

- `checkId`: VAL-083

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1087 — prepMaterials omitted → default links seeded

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0182 0 defaults:  |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | ☑️ Working as decided (developer response 26 Oct): no default prep material links on a new position. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prepMaterials omitted → default links seeded
2. Check the response and resulting state

**Expected**

201 created + default prep material list

**Test Data**

- `checkId`: VAL-087

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1088 — prepMaterials [] → none

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0183 0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prepMaterials [] → none
2. Check the response and resulting state

**Expected**

201 created + 0 materials

**Test Data**

- `checkId`: VAL-088

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1092 — Checklist items seeded per position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0184 5: JD_CLIENT_CONTEXT_REVIEWED,SPECIAL_INSTRUCTIONS_ACKNOWLEDGED,AI_MOCK_COMPLETED,MANUAL_MOCK_COMPLETED,RESUME_REVIEWED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Checklist items seeded per position
2. Check the response and resulting state

**Expected**

201 created + checklistItems present

**Test Data**

- `checkId`: VAL-092

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1095 — OTHER with otherLocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |
| **Notes** | Test expectation corrected: by design OTHER needs otherLocation + workMode. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: OTHER with otherLocation
2. Check the response and resulting state

**Expected**

400 — OTHER counts as a foreign location, so workMode is also required

**Test Data**

- `checkId`: VAL-095

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1099 — USA ON_SITE with address

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0185 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: USA ON_SITE with address
2. Check the response and resulting state

**Expected**

201 created

**Test Data**

- `checkId`: VAL-099

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1103 — 3 positions, 2+1+3 openings — ordinals unique across the opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0186 ords=1,2,3,4,5,6 displayIds=QA-QE-260,QA-PD-262,QA-JD-261 priority=HIGH |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: 3 positions, 2+1+3 openings — ordinals unique across the opportunity
2. Check the response and resulting state

**Expected**

201 created + ordinals 1..6, unique displayIds

**Test Data**

- `checkId`: VAL-103

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1104 — Opportunity priority = most urgent of positions

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0187 MEDIUM |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Opportunity priority = most urgent of positions
2. Check the response and resulting state

**Expected**

201 created + MEDIUM

**Test Data**

- `checkId`: VAL-104

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1105 — Same title + client twice (Potential Duplicate Notice)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 2nd create 201; lookup found 6 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Same title + client twice (Potential Duplicate Notice)
2. Check the response and resulting state

**Expected**

Lookup returns the earlier one; API allows duplicate (notice is advisory)

**Test Data**

- `checkId`: VAL-105

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1106 — Ticket numbers are sequential & unique

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 29 tickets, unique=29 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Ticket numbers are sequential & unique
2. Check the response and resulting state

**Expected**

strictly increasing OPP-nnnn

**Test Data**

- `checkId`: VAL-106

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1107 — pmo raises EXISTING (project not managed)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: pmo raises EXISTING (project not managed)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1108 — pmo raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: pmo raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1110 — csm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: csm raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1120 — CSM raises DIRECT for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM raises DIRECT for own project
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1121 — PM raises DIRECT for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | ⏳ Pending product decision (26 Oct): PM raises Direct tickets per Figma. · F-01: PM can raise Existing-client Interview and Direct opportunities |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: PM raises DIRECT for own project
2. Check the response and resulting state

**Expected**

FRD: 403 (PM cannot raise Direct either)

**Test Data**

- `checkId`: RBAC-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1122 — Assignee picker PM list only holds PM-role employees

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 91 PMs, includes gaurav=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Assignee picker PM list only holds PM-role employees
2. Check the response and resulting state

**Expected**

every item holds PM

**Test Data**

- `checkId`: RBAC-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1127 — PMO creates PROSPECT assigned to PM gaurav + CSM tarun

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully pm=Gaurav Panchal csm=Tarun Sharma |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO creates PROSPECT assigned to PM gaurav + CSM tarun
2. Check the response and resulting state

**Expected**

201 with assignedPm/assignedCsm

**Test Data**

- `checkId`: RBAC-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1128 — Assigned PM can open the assigned opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Opportunity retrieved successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Assigned PM: Assigned PM can open the assigned opportunity
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: RBAC-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1129 — Assigned PM sees it in a list (FRD §7.5 list view of assigned opps)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=24 containsAssigned=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Assigned PM: Assigned PM sees it in a list (FRD §7.5 list view of assigned opps)
2. Check the response and resulting state

**Expected**

PM finds it via /openings

**Test Data**

- `checkId`: RBAC-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1130 — Assigned CSM sees it on board

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Assigned CSM sees it on board
2. Check the response and resulting state

**Expected**

visible

**Test Data**

- `checkId`: RBAC-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1133 — PMO re-assigns PM to another PM (FRD open Q)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | patch 200, old PM now 404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO re-assigns PM to another PM (FRD open Q)
2. Check the response and resulting state

**Expected**

old PM loses access, new PM gains

**Test Data**

- `checkId`: RBAC-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1135 — CSM creates INTERVIEW opp for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully viewerCanEdit=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM creates INTERVIEW opp for own project
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1136 — CSM edits own INTERVIEW opp title

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Opportunity updated successfully |
| **Finding Ref** | F-02 |
| **Last Result** | passed |
| **Notes** | F-02: CSM cannot edit or add positions to an Interview opportunity they raised |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM edits own INTERVIEW opp title
2. Check the response and resulting state

**Expected**

FRD §7.6: allowed (CSM create/edit like PMO)

**Test Data**

- `checkId`: RBAC-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1137 — CSM adds a position to own INTERVIEW opp

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_021 Position created successfully |
| **Finding Ref** | F-02 |
| **Last Result** | passed |
| **Notes** | F-02: CSM cannot edit or add positions to an Interview opportunity they raised |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM adds a position to own INTERVIEW opp
2. Check the response and resulting state

**Expected**

FRD §7.6: allowed

**Test Data**

- `checkId`: RBAC-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1138 — CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 400 OPP_147 Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled |
| **Finding Ref** | F-03 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Cancel exists only for Direct tickets. · F-03: CSM cannot cancel an Interview ticket — the Cancelled tag exists only for Direct |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22)
2. Check the response and resulting state

**Expected**

FRD: allowed, tag only

**Test Data**

- `checkId`: RBAC-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1162 — Board summary per role equals distinct opps on /openings

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | admin:175/171 pmo:175/171 tmQA:167/163 em:167/163 csm:26/26 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Board summary per role equals distinct opps on /openings
2. Check the response and resulting state

**Expected**

summary.total == opportunityCount

**Test Data**

- `checkId`: RBAC-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1163 — Employee view=TEAM forced to MINE

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: Employee view=TEAM forced to MINE
2. Check the response and resulting state

**Expected**

SELF caller gets own only (0)

**Test Data**

- `checkId`: RBAC-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1164 — PM without view_board calls /openings

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=24 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: PM without view_board calls /openings
2. Check the response and resulting state

**Expected**

build: PM has read but no board — record

**Test Data**

- `checkId`: RBAC-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1165 — Positions returned in created order (contract)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | Java Backend Dev , QA Automation Engineer |
| **Finding Ref** | F-34 |
| **Last Result** | skipped |
| **Notes** | Ignored by QA lead (26 Oct): position order. · F-34: Positions are not returned in the order they were created |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Positions returned in created order (contract)
2. Check the response and resulting state

**Expected**

positions[0] = first created

**Test Data**

- `checkId`: INT-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1166 — New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | #1:PENDING_TO_SHORTLIST #2:PENDING_TO_SHORTLIST |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13)
2. Check the response and resulting state

**Expected**

2 × PENDING_TO_SHORTLIST

**Test Data**

- `checkId`: INT-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1167 — Stage counts reflect new cards

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | {"PENDING_TO_SHORTLIST":3,"SHORTLISTED":0,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":0,"INTERVIEW_SCHEDULED":0,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":0,"LOST":0,"ON_HOLD":0,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Stage counts reflect new cards
2. Check the response and resulting state

**Expected**

PENDING_TO_SHORTLIST >= 3

**Test Data**

- `checkId`: INT-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1168 — Preferred Candidate flag on shortlist (FRD rule 14, glossary)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"candidates.0.isPreferred","message":"property isPreferred should not exist"}] |
| **Finding Ref** | F-04 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Preferred Candidate. · F-04: Per-candidate 'Preferred Candidate' flag is not in the build |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Preferred Candidate flag on shortlist (FRD rule 14, glossary)
2. Check the response and resulting state

**Expected**

accepted (TM/RM can flag a preferred candidate)

**Test Data**

- `checkId`: INT-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1173 — Shortlist beyond headcount (3rd candidate for 2 openings)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully P1 cards=1 requiredCount=1 shortlisted=0 |
| **Finding Ref** | F-22 |
| **Last Result** | passed |
| **Notes** | F-22: Extra candidates get their own cards beyond the opening count |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Shortlist beyond headcount (3rd candidate for 2 openings)
2. Check the response and resulting state

**Expected**

Build: extra card opened; FRD rule 13: N openings = N cards — record

**Test Data**

- `checkId`: INT-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1174 — PMO shortlists a JAVA-dept employee on the QA position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO shortlists a JAVA-dept employee on the QA position
2. Check the response and resulting state

**Expected**

201 (cross-dept candidate)

**Test Data**

- `checkId`: INT-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1175 — EM shortlists qa4

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: EM shortlists qa4
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: INT-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1180 — PM tries to shortlist (FRD §7.5: PM can shortlist)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | Retest 26 Oct (RT-001/002): PM shortlists on assigned OPP-0042 and own-project OPP-0039 → 201. (This check targets an opportunity outside his scope, where 404 is correct.) |
| **Finding Ref** | F-07 |
| **Last Result** | passed |
| **Notes** | F-07: PM cannot shortlist candidates |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: PM tries to shortlist (FRD §7.5: PM can shortlist)
2. Check the response and resulting state

**Expected**

FRD: 201

**Test Data**

- `checkId`: INT-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1182 — TM (QA) sees JAVA candidate as an empty seat

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | TM sees 0 cards, names= |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM (QA) sees JAVA candidate as an empty seat
2. Check the response and resulting state

**Expected**

activeNomination null on that card for TM QA

**Test Data**

- `checkId`: INT-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1183 — TM (JAVA) can see the opportunity because a JAVA candidate is nominated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 names=Siddharth Iyer |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM (JAVA) can see the opportunity because a JAVA candidate is nominated
2. Check the response and resulting state

**Expected**

200, sees only siddharth

**Test Data**

- `checkId`: INT-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1184 — Candidate picker excludes already-live candidates for the position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | janki.naik is NOT listed; the 21 hits are other employees named Janki (re-checked) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate picker excludes already-live candidates for the position
2. Check the response and resulting state

**Expected**

qa1 not listed

**Test Data**

- `checkId`: INT-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1190 — TM sends own pick qa1 for approval

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Candidate sent for TM approval successfully WAITING_FOR_APPROVAL PENDING |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM sends own pick qa1 for approval
2. Check the response and resulting state

**Expected**

200, card WAITING_FOR_APPROVAL, approval PENDING

**Test Data**

- `checkId`: INT-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1193 — TM-sent request: who approves? (FRD rule 19: TM Approval is final)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully stage=BEING_PREPARED approvedBy=Bhumi Chauhan |
| **Finding Ref** | F-06 |
| **Last Result** | skipped |
| **Notes** | FRD conflict: a PMO (not a TM) gave the "TM Approval" when the TM sent the request · F-06: When a TM sends a candidate for approval, PMO gives the 'TM Approval' |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM-sent request: who approves? (FRD rule 19: TM Approval is final)
2. Check the response and resulting state

**Expected**

record — build says PMO decides a TM request

**Test Data**

- `checkId`: INT-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1197 — TM (QA) approves PMO-sent qa2

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM (QA) approves PMO-sent qa2
2. Check the response and resulting state

**Expected**

200 BEING_PREPARED

**Test Data**

- `checkId`: INT-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1199 — PMO sends JAVA candidate; TM (JAVA) approves (candidate's department)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO sends JAVA candidate; TM (JAVA) approves (candidate's department)
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1201 — PMO withdraws own request → back to SHORTLISTED

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Approval request withdrawn successfully SHORTLISTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO withdraws own request → back to SHORTLISTED
2. Check the response and resulting state

**Expected**

200 SHORTLISTED

**Test Data**

- `checkId`: INT-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1205 — PMO bypasses TM approval for qa3 (not sent)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully BEING_PREPARED BYPASSED reason=TM on leave |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO bypasses TM approval for qa3 (not sent)
2. Check the response and resulting state

**Expected**

200, approval BYPASSED, reason stored

**Test Data**

- `checkId`: INT-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1206 — Bypass without reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Finding Ref** | F-09 |
| **Last Result** | passed |
| **Notes** | F-09: No reason required to bypass TM approval or to remove a shortlisted candidate |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Bypass without reason
2. Check the response and resulting state

**Expected**

FRD rule 16 (mandatory reason) — should require one

**Test Data**

- `checkId`: INT-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1208 — Remove CONSIDERED qa4 (no reason asked)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] stage=undefined |
| **Finding Ref** | F-09 |
| **Last Result** | passed |
| **Notes** | Fixed 26 Oct: removal requires a reason. · F-09: No reason required to bypass TM approval or to remove a shortlisted candidate |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Remove CONSIDERED qa4 (no reason asked)
2. Check the response and resulting state

**Expected**

400 — reason required (FRD rule 16)

**Test Data**

- `checkId`: INT-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1213 — Rejected appears in Rejected column with reason & role

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully found=true role=TM reason=Failed R1 coding |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Rejected appears in Rejected column with reason & role
2. Check the response and resulting state

**Expected**

rejected list has qa3, role TM

**Test Data**

- `checkId`: INT-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1214 — Rejected candidate nominated for a different position in same opp (rule 6)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Rejected candidate nominated for a different position in same opp (rule 6)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: INT-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1215 — Rejected candidate re-nominated on the SAME position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |
| **Notes** | Allowed: rejected candidate can be put straight back on the same position |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Rejected candidate re-nominated on the SAME position
2. Check the response and resulting state

**Expected**

record (build allows)

**Test Data**

- `checkId`: INT-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1223 — Drag backwards Interview Scheduled → Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | Retest 26 Oct (RT-015): Interview Scheduled → Being Prepared 200; UI now confirms before the date is cleared. |
| **Finding Ref** | F-05 |
| **Last Result** | passed |
| **Notes** | F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag backwards Interview Scheduled → Being Prepared
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-059

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1225 — Candidate (janki) opens own opportunity (My Opportunity)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 sees nominations of: Janki Naik leakBypassReason=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate (janki) opens own opportunity (My Opportunity)
2. Check the response and resulting state

**Expected**

200, candidate view hides feedback/bypassReason/notes

**Test Data**

- `checkId`: INT-061

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1226 — Candidate ticks 2 items out of order (FRD: any order)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Preparation Checklist updated successfully done=MANUAL_MOCK_COMPLETED,JD_CLIENT_CONTEXT_REVIEWED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate ticks 2 items out of order (FRD: any order)
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-062

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1229 — PMO marks item "Skipped by PMO"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Preparation Checklist updated successfully skipped=SPECIAL_INSTRUCTIONS_ACKNOWLEDGED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO marks item "Skipped by PMO"
2. Check the response and resulting state

**Expected**

200 skippedChecklistItems

**Test Data**

- `checkId`: INT-065

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1234 — Add round 3 with no title → defaults (FRD "Round 3")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_051 Interview Round added successfully #3 title=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Add round 3 with no title → defaults (FRD "Round 3")
2. Check the response and resulting state

**Expected**

201, title null/"Round 3"

**Test Data**

- `checkId`: INT-070

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1239 — Schedule R1 in future + finalize (lock)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"isFinalized","message":"property isFinalized should not exist"}] fin=undefined |
| **Finding Ref** | F-05 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Finalize/lock interview schedule. · F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Schedule R1 in future + finalize (lock)
2. Check the response and resulting state

**Expected**

200 isFinalized

**Test Data**

- `checkId`: INT-075

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1242 — Card auto-moves to Interview Scheduled when a round is dated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | INTERVIEW_SCHEDULED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Card auto-moves to Interview Scheduled when a round is dated
2. Check the response and resulting state

**Expected**

stage INTERVIEW_SCHEDULED

**Test Data**

- `checkId`: INT-078

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1245 — R2 dated yesterday → Cleared without recording (FRD: recording optional)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round updated successfully PASSED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: R2 dated yesterday → Cleared without recording (FRD: recording optional)
2. Check the response and resulting state

**Expected**

200 PASSED

**Test Data**

- `checkId`: INT-081

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1249 — Delete pending round 3 → renumber

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round removed successfully left=2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Delete pending round 3 → renumber
2. Check the response and resulting state

**Expected**

200, 2 rounds left

**Test Data**

- `checkId`: INT-085

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1250 — Candidate (vandana) sees round feedback?

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | feedback=[null,null] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate (vandana) sees round feedback?
2. Check the response and resulting state

**Expected**

feedback hidden (null) for candidate

**Test Data**

- `checkId`: INT-086

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1251 — "Did the interview happen?" — Yes → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_061 The interview has been held, so its date cannot be after today undefined |
| **Last Result** | passed |
| **Notes** | Correct guard. New "Did Interview Happen" stage verified separately (RT-016). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: "Did the interview happen?" — Yes → Waiting for Feedback
2. Check the response and resulting state

**Expected**

Refused while the current round is dated in the future

**Test Data**

- `checkId`: INT-087

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1253 — Resend unchanged allocation %

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Resend unchanged allocation %
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-089

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1255 — Reduce requiredCount to 1 (cards with candidates kept)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully required=1 cards=3 stages=SHORTLISTED,SHORTLISTED,SHORTLISTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reduce requiredCount to 1 (cards with candidates kept)
2. Check the response and resulting state

**Expected**

200, empty pending cards removed only

**Test Data**

- `checkId`: INT-091

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1259 — Select qa2 from Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation undefined undefined filled=undefined/undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Select qa2 from Waiting for Feedback
2. Check the response and resulting state

**Expected**

200 WON SELECTED, filledCount 1

**Test Data**

- `checkId`: INT-095

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1260 — Approve while another opening is In Process (OPP_047 same employee)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully |
| **Finding Ref** | F-12 |
| **Last Result** | passed |
| **Notes** | Employee can be In Process on two opportunities at once · F-12: One employee can be approved (Blocked, In Process) on two opportunities at the same time |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Approve while another opening is In Process (OPP_047 same employee)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: INT-096

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1268 — Unlink project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | Retest 26 Oct on allocated OPP-0054 (RT-004/005): change/unlink → 400 OPP_176. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Unlink project after allocation
2. Check the response and resulting state

**Expected**

record (orphan risk)

**Test Data**

- `checkId`: INT-104

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1270 — ON_HOLD → pipeline actions blocked

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: ON_HOLD → pipeline actions blocked
2. Check the response and resulting state

**Expected**

shortlist 400 OPP_013

**Test Data**

- `checkId`: INT-106

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1271 — ON_HOLD: candidate checklist edit

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: ON_HOLD: candidate checklist edit
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: INT-107

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1272 — ON_HOLD cards move to On Hold column

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | {"PENDING_TO_SHORTLIST":0,"SHORTLISTED":0,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":0,"INTERVIEW_SCHEDULED":0,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":1,"LOST":0,"ON_HOLD":8,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: ON_HOLD cards move to On Hold column
2. Check the response and resulting state

**Expected**

stage-counts ON_HOLD > 0

**Test Data**

- `checkId`: INT-108

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1273 — Reopen ON_HOLD → OPEN

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reopen ON_HOLD → OPEN
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-109

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1274 — Concurrent double request-approval on same nomination

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS / 400 OPP_104 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Concurrent double request-approval on same nomination
2. Check the response and resulting state

**Expected**

one 200, one 400/409

**Test Data**

- `checkId`: INT-110

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1275 — Concurrent shortlist of same employee by 2 PMOs

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 / 409 OPP_028 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Concurrent shortlist of same employee by 2 PMOs
2. Check the response and resulting state

**Expected**

one 201, one 409

**Test Data**

- `checkId`: INT-111

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1276 — Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully WON:Amit/SELECTED \| PENDING_TO_SHORTLIST:- \| PENDING_TO_SHORTLIST:- |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed
2. Check the response and resulting state

**Expected**

record outcome

**Test Data**

- `checkId`: INT-112

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1277 — Mark LOST → candidates RELEASED & unblocked; hidden from default board

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully RELEASED/blocked=false default=0 archived=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Mark LOST → candidates RELEASED & unblocked; hidden from default board
2. Check the response and resulting state

**Expected**

RELEASED, not on default /openings

**Test Data**

- `checkId`: INT-113

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1279 — Reopen LOST → OPEN removes released candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully PENDING_TO_SHORTLIST noms= |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reopen LOST → OPEN removes released candidates
2. Check the response and resulting state

**Expected**

opening back to Pending, no live nominations

**Test Data**

- `checkId`: INT-115

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1281 — NLR with confirmation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: NLR with confirmation
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: INT-117

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1285 — PMO re-initiates P2 → all non-allocated released, cards back to Pending

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position re-initiated successfully count=1 stages=PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST live=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO re-initiates P2 → all non-allocated released, cards back to Pending
2. Check the response and resulting state

**Expected**

200, reinitiationCount 1

**Test Data**

- `checkId`: INT-121

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1287 — Stage-count total equals /openings total for this opp

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | sum=10 list=10 {"PENDING_TO_SHORTLIST":5,"SHORTLISTED":2,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":2,"INTERVIEW_SCHEDULED":1,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":1,"LOST":0,"ON_HOLD":0,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Stage-count total equals /openings total for this opp
2. Check the response and resulting state

**Expected**

sum(stage keys) == total

**Test Data**

- `checkId`: INT-123

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1288 — Search by readable position id (displayId)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | AN-JB-281 → 5 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Search by readable position id (displayId)
2. Check the response and resulting state

**Expected**

finds cards

**Test Data**

- `checkId`: INT-124

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1289 — Search with SQL wildcard % does not match everything

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | all=327 search%=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Search with SQL wildcard % does not match everything
2. Check the response and resulting state

**Expected**

small/zero result

**Test Data**

- `checkId`: INT-125

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1330 — interviewerLinkedinUrl ignored on DIRECT

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 201 OPP_002 Opportunity created successfully stored=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: interviewerLinkedinUrl ignored on DIRECT
2. Check the response and resulting state

**Expected**

stored null

**Test Data**

- `checkId`: DIR-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1331 — Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | Re-run as 4 single-position tickets: +3d HIGH, +10d MEDIUM, +30d LOW, −3d HIGH; sent priority ignored |
| **Last Result** | passed |
| **Notes** | Multi-position Direct is refused (OPP_175) — see F-13. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored
2. Check the response and resulting state

**Expected**

HIGH/MEDIUM/LOW

**Test Data**

- `checkId`: DIR-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1332 — FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | build derives priority from days-to-allocation, not ticket age; FRD aging rule (TBD) not implemented |
| **Finding Ref** | F-19 |
| **Last Result** | skipped |
| **Notes** | ❓ Needs clarification: priority rule — FRD rule 9 vs build. · F-19: Priority rule differs from FRD |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1333 — Direct ticket starts OPEN with the employee nominated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | OPP-0209 directStage=OPEN nom=Gargi Soni/CONSIDERED viewerCanEdit=true viewerCanCancel=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Direct ticket starts OPEN with the employee nominated
2. Check the response and resulting state

**Expected**

directStage OPEN

**Test Data**

- `checkId`: DIR-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1337 — PMO skips OPEN → AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO skips OPEN → AWAITING
2. Check the response and resulting state

**Expected**

record (forward-only, skip?)

**Test Data**

- `checkId`: DIR-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1338 — PMO OPEN → IN_REVIEW

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO OPEN → IN_REVIEW
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: DIR-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1340 — Owner (CSM) swaps the employee while IN_REVIEW

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Position updated successfully now=Ekta Rathod |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM (owner): Owner (CSM) swaps the employee while IN_REVIEW
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: DIR-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1343 — PMO IN_REVIEW → AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO IN_REVIEW → AWAITING
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: DIR-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1354 — Reject from OPEN with reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully REJECTED emp=Arnav Shetty/REJECTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Reject from OPEN with reason
2. Check the response and resulting state

**Expected**

200 REJECTED, employee stays on card

**Test Data**

- `checkId`: DIR-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1358 — CSM cancels without a reason (FRD open Q: is reason required?)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | reason optional in build |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM cancels without a reason (FRD open Q: is reason required?)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1359 — CSM cancels: tag added, stage unchanged (IN_REVIEW)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket marked as cancelled stage=IN_REVIEW cancel={"cancelledAt":"2026-10-27T06:48:41.702Z","reason":"Client postponed","cancelledBy":{"publ |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM cancels: tag added, stage unchanged (IN_REVIEW)
2. Check the response and resulting state

**Expected**

200 cancellation set, directStage IN_REVIEW

**Test Data**

- `checkId`: DIR-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1362 — PMO moves a cancelled ticket (guide says PMO may still move it)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_164 A cancelled Direct ticket cannot change stage |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | Behaviour fine (PMO closes cancelled tickets via NLR); backend guide out of date — BUG-024. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO moves a cancelled ticket (guide says PMO may still move it)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1363 — isCancelled=true filter returns the tagged ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | total=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: isCancelled=true filter returns the tagged ticket
2. Check the response and resulting state

**Expected**

found

**Test Data**

- `checkId`: DIR-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1365 — Board default hides NLR Direct tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Board default hides NLR Direct tickets
2. Check the response and resulting state

**Expected**

not on default board

**Test Data**

- `checkId`: DIR-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1366 — Prospect Direct (no project) created by CSM

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | OPP-0212 PROSPECT |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Prospect Direct (no project) created by CSM
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: DIR-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1367 — APPROVED not offered without a project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | ["REJECTED"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: APPROVED not offered without a project
2. Check the response and resulting state

**Expected**

allowedDirectStages lacks APPROVED

**Test Data**

- `checkId`: DIR-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1369 — CSM links own project → Prospect becomes Existing

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Project associated with the Opportunity successfully clientType=EXISTING |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM links own project → Prospect becomes Existing
2. Check the response and resulting state

**Expected**

200 clientType EXISTING

**Test Data**

- `checkId`: DIR-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1372 — APPROVED with allocation unconfirmed → selected, not allocated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully APPROVED/SHORTLISTED ticket=null |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: APPROVED with allocation unconfirmed → selected, not allocated
2. Check the response and resulting state

**Expected**

APPROVED, stage not PROJECT_ALLOCATED

**Test Data**

- `checkId`: DIR-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1373 — Confirm allocation later (PATCH isAllocationConfirmed:true)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Position updated successfully stage=PROJECT_ALLOCATED ticket=de71ea55-1d6c-4057-83ff-4cc938390b05 |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Confirm allocation later (PATCH isAllocationConfirmed:true)
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED

**Test Data**

- `checkId`: DIR-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1374 — Direct ticket for a fully-booked employee is accepted at create (warning only?)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | created OPP-0215 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Direct ticket for a fully-booked employee is accepted at create (warning only?)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1376 — direct-stage-counts total equals Direct list total

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | counts={"total":29,"OPEN":14,"IN_REVIEW":0,"AWAITING":7,"APPROVED":4,"REJECTED":4} list=29 sum=29 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: direct-stage-counts total equals Direct list total
2. Check the response and resulting state

**Expected**

equal

**Test Data**

- `checkId`: DIR-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1377 — Direct summary (requestType=DIRECT) vs list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | summary={"total":33,"open":29,"won":0,"lost":0,"onHold":0,"noLongerRequired":4} oppCount=29 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Direct summary (requestType=DIRECT) vs list
2. Check the response and resulting state

**Expected**

summary.total == opportunityCount

**Test Data**

- `checkId`: DIR-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1379 — CSM sees own Direct tickets only

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | total=25 projects=AnalytixHub \| Advanced Analytics,ElitePay \| Payroll System |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM sees own Direct tickets only
2. Check the response and resulting state

**Expected**

all tickets raised by / project of CSM

**Test Data**

- `checkId`: DIR-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1380 — TM sees Direct tickets of own department (view only)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=28 allowedStages=[] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM sees Direct tickets of own department (view only)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: DIR-059

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1381 — TM adds prep material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM adds prep material
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: MSC-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1382 — EM adds prep material (FRD §7.4: EM standardises question banks)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: EM adds prep material (FRD §7.4: EM standardises question banks)
2. Check the response and resulting state

**Expected**

FRD: allowed

**Test Data**

- `checkId`: MSC-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1383 — Assigned PM adds prep material on top of PMO's (FRD §7.5)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Assigned PM: Assigned PM adds prep material on top of PMO's (FRD §7.5)
2. Check the response and resulting state

**Expected**

FRD: allowed

**Test Data**

- `checkId`: MSC-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1384 — TM edits PMO's material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 403 OPP_182 Only whoever added this Prep Material, or PMO, can change it |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM edits PMO's material
2. Check the response and resulting state

**Expected**

FRD: only PMO edits its own material — record

**Test Data**

- `checkId`: MSC-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1388 — Duplicate URL twice on one position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 201/201 |
| **Last Result** | passed |
| **Notes** | Same prep material can be added twice |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Duplicate URL twice on one position
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: MSC-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1389 — Prep material cap

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | last=201 total=31 |
| **Last Result** | passed |
| **Notes** | No upper limit on prep materials per position |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Prep material cap
2. Check the response and resulting state

**Expected**

record count limit

**Test Data**

- `checkId`: MSC-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1394 — Switch EXISTING → PROSPECT unlinks project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Opportunity updated successfully project=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Switch EXISTING → PROSPECT unlinks project
2. Check the response and resulting state

**Expected**

200 project null

**Test Data**

- `checkId`: MSC-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1401 — Raise requiredCount 1 → 4 appends 3 empty cards

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Position updated successfully cards=4 ords=1,3,4,5 |
| **Finding Ref** | F-22 |
| **Last Result** | passed |
| **Notes** | F-22: Extra candidates get their own cards beyond the opening count |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Raise requiredCount 1 → 4 appends 3 empty cards
2. Check the response and resulting state

**Expected**

4 cards

**Test Data**

- `checkId`: MSC-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1402 — Shortlist shortfall data (FRD: warn when fewer shortlisted than needed)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | required=4 shortlisted=0 filled=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Shortlist shortfall data (FRD: warn when fewer shortlisted than needed)
2. Check the response and resulting state

**Expected**

shortlistedCount < requiredCount exposed

**Test Data**

- `checkId`: MSC-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1403 — Candidate ticks checklist while Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_073 The Preparation Checklist can only be updated while the Candidate is Shortlisted, Waiting for Approval or Being Prepared |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate ticks checklist while Interview Scheduled
2. Check the response and resulting state

**Expected**

FRD §7.7: only Shortlisted/Being Prepared → 400 OPP_073

**Test Data**

- `checkId`: MSC-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1404 — PMO ticks on candidate's behalf at any stage

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"manualMockAt","message":"property manualMockAt should not exist"}] |
| **Finding Ref** | F-21 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): PMO ticking checklist items for a candidate; PMO can only skip today. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO ticks on candidate's behalf at any stage
2. Check the response and resulting state

**Expected**

200

**Test Data**

- `checkId`: MSC-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1405 — Pending checklist does not block scheduling (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | round scheduled with 0/5 items done earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Pending checklist does not block scheduling (FRD change list)
2. Check the response and resulting state

**Expected**

round dated with 4 items pending

**Test Data**

- `checkId`: MSC-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1406 — Send Reminder (FRD §7.5) endpoint exists

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 404 SYS_002 Cannot POST /api/v1/opportunities/nominations/e21d8268-41dc-4b8b-89f3-5be03e23ad3a/remind |
| **Finding Ref** | F-18 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Send Reminder. · F-18: No change log on the opportunity and no 'Send Reminder' |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Send Reminder (FRD §7.5) endpoint exists
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: MSC-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1407 — RM of the candidate (unknown) sees the card (TEAM scope)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | no RM on profile: ["publicId","email","microsoftOid","kekaId","name","shiftPreferences","careerStartDate","dateOfJoining","isContractor","isTrainee","cohort","employeeOrigin","visaStatus","locationPreference","otherLoc |
| **Last Result** | skipped |
| **Notes** | Not verified: API does not expose the reporting manager, and the RM test account has no reportees on these tickets. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: RM of the candidate (unknown) sees the card (TEAM scope)
2. Check the response and resulting state

**Expected**

visible on RM board

**Test Data**

- `checkId`: MSC-027

**Automation Hint**

API-level check (scratchpad harness)

### Integration (47)

#### TC-OPPTY-782 — Every interview step notifies the right people

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate / PM / CSM / TM / PMO (2nd) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J10 Notifications along the interview flow |
| **Actual Result** | All delivered (checked via API for Kriti, Uday, Aarav, Diya, Rushil, Nimisha, Manan, Vandana, PM Gaurav, CSM Tarun, TM Sudhansu, PMO Vihaan). PM/CSM got "assigned to OPP-0156" (BUG-011 fix holds). |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J10 Notifications along the interview flow: as Candidate / PM / CSM / TM / PMO (2nd), Every interview step notifies the right people
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Shortlisted, approved, prep material, interview scheduled, round result, selected, rejected, removed, re-initiated, on hold / lost / NLR / reopened

**Test Data**

- `checkId`: J10-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-783 — Interview-scheduled notification shows the interview date in the viewer's time

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J10 Notifications along the interview flow |
| **Actual Result** | Body uses raw GMT: "…scheduled for Tue, 27 Oct 2026 05:30:00 GMT" (11:00 IST). A date picked as a whole day is stored at IST midnight, so Kriti's 27/10 rounds read "Mon, 26 Oct 2026 18:30:00 GMT" — the wrong day. |
| **Finding Ref** | N-02 |
| **Last Result** | failed |
| **Notes** | N-02: Interview-scheduled notification prints raw GMT; whole-day dates show the previous day |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J10 Notifications along the interview flow: as Candidate, Interview-scheduled notification shows the interview date in the viewer's time
2. Check the screen, toast and the resulting card / ticket state

**Expected**

e.g. "Tue 27 Oct 2026, 11:00 AM" (IST)

**Test Data**

- `checkId`: J10-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-784 — Allocation notification after an interview Won → Allocate

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J10 Notifications along the interview flow |
| **Actual Result** | TM got "Direct Allocation: AnalytixHub — Bhumi Chauhan directly allocated Kriti Desai to AnalytixHub, bypassing the ticket workflow." — wrong for an allocation that came through the interview ticket (NA-0450). |
| **Finding Ref** | N-05 |
| **Last Result** | failed |
| **Notes** | N-05: TM is told an interview allocation was a "Direct Allocation … bypassing the ticket workflow" |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J10 Notifications along the interview flow: as TM (QA), Allocation notification after an interview Won → Allocate
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Message says the candidate was allocated from OPP-0156

**Test Data**

- `checkId`: J10-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-785 — Candidate-facing wording (known BUG-023)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J10 Notifications along the interview flow |
| **Actual Result** | Still third person: to Kriti "Kriti Desai was selected … — proceed to Project Association."; to Uday "Uday Dave was rejected … — the slot is open again." (already reported as BUG-023) |
| **Finding Ref** | BUG-023 |
| **Last Result** | failed |
| **Notes** | BUG-023: Notification content issues (known, needs clarification) |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J10 Notifications along the interview flow: as Candidate, Candidate-facing wording (known BUG-023)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Second person, no PMO instructions

**Test Data**

- `checkId`: J10-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-1132 — Assignment notification to assignee (FRD notif #18)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | Retest 26 Oct (RT-007/008): PM and CSM both got "You've been assigned to OPP-0126". |
| **Finding Ref** | F-11 |
| **Last Result** | passed |
| **Notes** | F-11: Assigned CSM gets no 'assigned to you' notification |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Assignment notification to assignee (FRD notif #18)
2. Check the response and resulting state

**Expected**

PM + CSM get "assigned to you" notification

**Test Data**

- `checkId`: RBAC-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1186 — Two-way alert: shortlist side shows direct allocations for qa1

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Allocation conflicts fetched successfully interview=6 direct=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Two-way alert: shortlist side shows direct allocations for qa1
2. Check the response and resulting state

**Expected**

allocation-conflicts 200 with entries

**Test Data**

- `checkId`: INT-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1187 — Preferred-candidate notification to TM (FRD notif #7)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | checked in notifications pass |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Preferred-candidate notification to TM (FRD notif #7)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: INT-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1254 — Edit tech stack after shortlisting (rule 18 → TM re-review notification)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Edit tech stack after shortlisting (rule 18 → TM re-review notification)
2. Check the response and resulting state

**Expected**

200 + TM notified

**Test Data**

- `checkId`: INT-090

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1264 — PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage undefined ticket=undefined blocked=undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED, ticket id

**Test Data**

- `checkId`: INT-100

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1266 — Allocation ticket visible in allocation tickets module

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 SYS_004 Validation failed (uuid is expected) undefined undefined undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocation ticket visible in allocation tickets module
2. Check the response and resulting state

**Expected**

200, APPROVED, employee qa2, project AnalytixHub

**Test Data**

- `checkId`: INT-102

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1267 — Two-way alert now lists the upcoming allocation for qa2

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | direct=["ZenMonitor \| APM Platform:ASSIGNMENT:2026-08-28","HyperScale \| Scalability Engine:ASSIGNMENT:2026-10-23","TrustVault \| Identity Management:PENDING_TICKET:2026-08-21"] |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Two-way alert now lists the upcoming allocation for qa2
2. Check the response and resulting state

**Expected**

directAllocations has AnalytixHub

**Test Data**

- `checkId`: INT-103

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1278 — Lost notification to raiser/TM (FRD notif #15)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | - |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Lost notification to raiser/TM (FRD notif #15)
2. Check the response and resulting state

**Expected**

checked in notifications pass

**Test Data**

- `checkId`: INT-114

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1282 — Reopen NLR → OPEN (rule 17: reversible) 

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reopen NLR → OPEN (rule 17: reversible) 
2. Check the response and resulting state

**Expected**

200 (notif #16 says "cannot be undone easily")

**Test Data**

- `checkId`: INT-118

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1292 — Employee opportunity history for qa1 (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully OPP-0203:BEING_PREPARED OPP-0202:BEING_PREPARED OPP-0155:SHORTLISTED OPP-0113:BEING_PREPARED OPP-0112:BEING_PREPARED OPP-0048:BEING_PREPARED OPP-0047:BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: Employee opportunity history for qa1 (FRD change list)
2. Check the response and resulting state

**Expected**

lists Interview-1 and Interview-2

**Test Data**

- `checkId`: INT-128

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1293 — Employee list carries interviewOpportunities for qa1

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"limit","message":"limit must be one of the following values: 100, 200, 300"}] io=undefined |
| **Last Result** | skipped |
| **Notes** | Wrong query in test; covered by ALC-027/028. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: Employee list carries interviewOpportunities for qa1
2. Check the response and resulting state

**Expected**

>=1 active

**Test Data**

- `checkId`: INT-129

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1294 — Bypass → Being Prepared; remaining allocation reserves 40%

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | before=100 after=60 blocked=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Bypass → Being Prepared; remaining allocation reserves 40%
2. Check the response and resulting state

**Expected**

remainingAllocationPercentage drops by 40 while Blocked

**Test Data**

- `checkId`: ALC-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1295 — Candidate picker shows the blocked reservation too

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | picker remaining=undefined booked=undefined |
| **Last Result** | passed |
| **Notes** | Script searched a hard-coded employee (akash.pandya); picker for the actual candidate Neha Mukherjee shows remaining 60 / booked 40 = correct. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate picker shows the blocked reservation too
2. Check the response and resulting state

**Expected**

picker remaining = 100-40

**Test Data**

- `checkId`: ALC-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1296 — Date R1 yesterday → card goes to Interview Scheduled (not auto to Waiting for Feedback)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | DID_INTERVIEW_HAPPEN |
| **Last Result** | passed |
| **Notes** | Expectation predates 23/10: a round dated yesterday now correctly derives DID_INTERVIEW_HAPPEN (new stage). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Date R1 yesterday → card goes to Interview Scheduled (not auto to Waiting for Feedback)
2. Check the response and resulting state

**Expected**

INTERVIEW_SCHEDULED

**Test Data**

- `checkId`: ALC-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1297 — "Did the interview happen?" Yes → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opening moved successfully WAITING_FOR_FEEDBACK |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: "Did the interview happen?" Yes → Waiting for Feedback
2. Check the response and resulting state

**Expected**

200 WAITING_FOR_FEEDBACK

**Test Data**

- `checkId`: ALC-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1298 — R1 Not Cleared → select without confirmation is refused (round-skip safeguard)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: R1 Not Cleared → select without confirmation is refused (round-skip safeguard)
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: ALC-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1299 — Select with confirmation (FRD rule 20 skip dialog)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Candidate selected successfully WON |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Select with confirmation (FRD rule 20 skip dialog)
2. Check the response and resulting state

**Expected**

200 WON

**Test Data**

- `checkId`: ALC-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1300 — After select: WON, SELECTED, filled 1/1

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | WON SELECTED filled=1/1 blocked=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: After select: WON, SELECTED, filled 1/1
2. Check the response and resulting state

**Expected**

WON

**Test Data**

- `checkId`: ALC-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1301 — Won-elsewhere notification to PMO (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | Not sent to the acting PMO (actor excluded); delivered to the other PMO (vihaan.chatterjee): notification.opportunity.candidate_won_elsewhere |
| **Last Result** | passed |
| **Notes** | Works; actor is excluded from own notifications. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Won-elsewhere notification to PMO (FRD change list)
2. Check the response and resulting state

**Expected**

PMO notification candidate_won_elsewhere

**Test Data**

- `checkId`: ALC-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1302 — Allocate FIXED without % 

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 SYS_004 Validation failed: allocationPercentage is required when allocationType is FIXED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate FIXED without % 
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: ALC-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1303 — Allocate end before start

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 SYS_004 Validation failed: Start date must not be after end date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate end before start
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: ALC-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1304 — Allocate with 101%

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"allocationPercentage","message":"allocationPercentage must not be greater than 100"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate with 101%
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: ALC-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1305 — Allocate with a different % than the position (40 → 60)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | see next |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate with a different % than the position (40 → 60)
2. Check the response and resulting state

**Expected**

record (no check against position)

**Test Data**

- `checkId`: ALC-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1307 — Allocation ticket in Allocation Requests (born approved)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Allocation ticket details retrieved successfully NA-0456 type=NEW_ALLOCATION status=APPROVED proj=AnalytixHub \| Advanced Analytics |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocation ticket in Allocation Requests (born approved)
2. Check the response and resulting state

**Expected**

ticket APPROVED/CLOSED, NEW_ALLOCATION, employee aditi, project AnalytixHub

**Test Data**

- `checkId`: ALC-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1308 — Interview Allocation tab in Requests Tracking lists it

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Interview allocation requests retrieved successfully total=218 found=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Interview Allocation tab in Requests Tracking lists it
2. Check the response and resulting state

**Expected**

interview-requests contains this opportunity

**Test Data**

- `checkId`: ALC-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1309 — Two-way alert lists the new upcoming allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | ["AnalytixHub \| Advanced Analytics:ASSIGNMENT:2026-11-16:40"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Two-way alert lists the new upcoming allocation
2. Check the response and resulting state

**Expected**

AnalytixHub ASSIGNMENT

**Test Data**

- `checkId`: ALC-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1310 — Remaining allocation after allocation (reservation released, booking counted)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | remaining=undefined booked=undefined live=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Remaining allocation after allocation (reservation released, booking counted)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: ALC-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1311 — Unlink project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_176 A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed |
| **Finding Ref** | F-10 |
| **Last Result** | passed |
| **Notes** | F-10: Project can be unlinked or changed after a candidate is already allocated to it |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Unlink project after allocation
2. Check the response and resulting state

**Expected**

should be refused (allocation exists)

**Test Data**

- `checkId`: ALC-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1312 — Change project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_176 A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed |
| **Finding Ref** | F-10 |
| **Last Result** | passed |
| **Notes** | F-10: Project can be unlinked or changed after a candidate is already allocated to it |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Change project after allocation
2. Check the response and resulting state

**Expected**

should be refused

**Test Data**

- `checkId`: ALC-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1313 — Drag Project Allocated card backwards

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag Project Allocated card backwards
2. Check the response and resulting state

**Expected**

refused or allocation undone (rule 17 side effect)

**Test Data**

- `checkId`: ALC-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1314 — Mark Opportunity LOST after a candidate is Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully card=PROJECT_ALLOCATED nomination=SELECTED allocTicket=APPROVED |
| **Last Result** | passed |
| **Notes** | Opportunity with an allocated candidate can be marked Lost; allocation stays — record |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Mark Opportunity LOST after a candidate is Project Allocated
2. Check the response and resulting state

**Expected**

allocated candidate must not be silently released

**Test Data**

- `checkId`: ALC-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1315 — Reopen after LOST: allocated card intact?

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | OPEN card=PROJECT_ALLOCATED noms=SELECTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reopen after LOST: allocated card intact?
2. Check the response and resulting state

**Expected**

PROJECT_ALLOCATED kept

**Test Data**

- `checkId`: ALC-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1316 — Re-initiate position that has a Project Allocated seat

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_122 This Position has no Candidates to re-initiate stages=undefined |
| **Last Result** | skipped |
| **Notes** | Test error (shortlist of the already-allocated employee was refused, so nothing to re-initiate). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Re-initiate position that has a Project Allocated seat
2. Check the response and resulting state

**Expected**

allocated seat kept

**Test Data**

- `checkId`: ALC-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1317 — Employee profile history lists the allocated opportunity

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | OPP-0219:PROJECT_ALLOCATED:SELECTED OPP-0218:SHORTLISTED:CONSIDERED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: Employee profile history lists the allocated opportunity
2. Check the response and resulting state

**Expected**

history has ticket with PROJECT_ALLOCATED

**Test Data**

- `checkId`: ALC-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1318 — Candidate (akash.pandya) sees own history (self)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully n=2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate (akash.pandya) sees own history (self)
2. Check the response and resulting state

**Expected**

200 own items

**Test Data**

- `checkId`: ALC-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1320 — Employee list Interview opportunities column (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SYS_003 Operation completed successfully io=["OPP-0053:SHORTLISTED:50","OPP-0153:BEING_PREPARED:50","OPP-0206:SHORTLISTED:50"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: Employee list Interview opportunities column (PMO)
2. Check the response and resulting state

**Expected**

aditi row lists live interview opps with %

**Test Data**

- `checkId`: ALC-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1321 — Employee list column for a TM (can read opportunities)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SYS_003 Operation completed successfully io=3 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: Employee list column for a TM (can read opportunities)
2. Check the response and resulting state

**Expected**

populated for TM JAVA

**Test Data**

- `checkId`: ALC-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1345 — Two-way alert (allocation side): employee in interview opps

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | interview=OPP-0047:50,OPP-0048:50,OPP-0112:50,OPP-0113:50,OPP-0155:50,OPP-0202:50,OPP-0203:50 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Two-way alert (allocation side): employee in interview opps
2. Check the response and resulting state

**Expected**

non-blocking list

**Test Data**

- `checkId`: DIR-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1346 — Two-way alert as CSM (raiser)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Allocation conflicts fetched successfully interview=undefined |
| **Finding Ref** | F-14 |
| **Last Result** | passed |
| **Notes** | ☑️ Working as decided (developer response 26 Oct): Direct opportunities left out of the two-way alert (decision 15 Oct). · F-14: CSM raising a Direct ticket sees an empty two-way allocation alert |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Two-way alert as CSM (raiser)
2. Check the response and resulting state

**Expected**

record — CSM raises Direct tickets but scope is PROJECT

**Test Data**

- `checkId`: DIR-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1348 — Direct tab in Requests Tracking lists the allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | NA-0453/APPROVED; direct tab 200 total=714 found=true isInterviewRequired=false |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Direct tab in Requests Tracking lists the allocation ticket
2. Check the response and resulting state

**Expected**

allocation-tickets?allocationMode=DIRECT has it

**Test Data**

- `checkId`: DIR-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1361 — PMO notified of cancellation from stage (FRD notif #19)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | notification.opportunity.direct_cancelled: Direct ticket OPP-0211 for Divya Rathod was cancelled. Reason: Client postponed \|\| notification.opportunity.direct_cancelled: Direct ticket OPP-0211 for Divya Rathod was cancelled. Reason: Client postponed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO notified of cancellation from stage (FRD notif #19)
2. Check the response and resulting state

**Expected**

PMO gets "cancelled by CSM from stage In Review"

**Test Data**

- `checkId`: DIR-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1395 — Edit history / change log (FRD §8: full change log, recent edits highlighted)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | updatedBy=Bhumi Chauhan updatedAt=2026-10-27T06:49:20.405Z historyField=false |
| **Finding Ref** | F-18 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): No edit history yet. · F-18: No change log on the opportunity and no 'Send Reminder' |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Edit history / change log (FRD §8: full change log, recent edits highlighted)
2. Check the response and resulting state

**Expected**

updatedBy + some history

**Test Data**

- `checkId`: MSC-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1399 — Delete a position that has only CONSIDERED candidates → candidates notified?

| Field | Value |
| --- | --- |
| **Tags** | @integration, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Position deleted successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Delete a position that has only CONSIDERED candidates → candidates notified?
2. Check the response and resulting state

**Expected**

200, nominations removed

**Test Data**

- `checkId`: MSC-019

**Automation Hint**

API-level check (scratchpad harness)

### Negative (198)

#### TC-OPPTY-710 — Bypass TM approval for Uday Dave with an empty reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | confirm enabled with empty reason=false; dialog: Bypass TM approval Are you sure you want to bypass TM approval? This action will be recorded for audit and is visible only to PMO. Reason for bypassing Cancel Confirm Bypass Close |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Bypass TM approval for Uday Dave with an empty reason
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Confirm blocked until a reason is entered

**Test Data**

- `checkId`: J1-08

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-732 — Candidate cannot open the Opportunity board

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | https://simerp-dev.simform.solutions/unauthorized \| Access Denied You don't have permission to view this page. Go to Profile |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as Employee (candidate), Candidate cannot open the Opportunity board
2. Check the screen, toast and the resulting card / ticket state

**Expected**

/pre-sales → unauthorized for an Employee

**Test Data**

- `checkId`: J1-28

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-744 — Remove a shortlisted candidate (Rushil Makwana) — reason required

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J3 Reject, remove, re-initiate |
| **Actual Result** | enabled while empty=false \| toast: Candidate removed. \| still listed=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J3 Reject, remove, re-initiate: as PMO, Remove a shortlisted candidate (Rushil Makwana) — reason required
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Remove blocked until reason; then "Candidate removed."

**Test Data**

- `checkId`: J3-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-750 — Mark OPP-0158 Client Lost

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J4 Ticket outcome (On Hold / Lost / No Longer Required) |
| **Actual Result** | toast: Ticket status updated. \| OPP-0158 QA-AUTO UI J4 lost 35064 Lost High Interview Allocation · QA-AUTO Client Prospect Created by: Bhumi Chauhan Created On: 27/10/26, 11:53 am Updated On: 27/10/26, 11:54 am Position Details Ticket Info Preparation Material Link Project QA Engineer Q QA F \| ID Candidate Allocation % Designation Department Availability % Remaining Allocation Status Round Approval Action OPP-0158 #1 Manan Kapoor 50% QA Lead QA 82% 50% Remaining of 100% Lost 1 / 1 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J4 Ticket outcome (On Hold / Lost / No Longer Required): as PMO, Mark OPP-0158 Client Lost
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Ticket Lost; active candidate moves to Lost; blocked % released

**Test Data**

- `checkId`: J4-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-763 — TM shortlists an employee from another department onto their own department's position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J6 Role visibility on the interview flow |
| **Actual Result** | mehul.pandya (JAVA TM) shortlisted Vandana Mishra (QA) onto JAVA-only OPP-0214 → 201; also Diya Nair (QA) onto QA+JAVA OPP-0195 → 201. Candidate list for the TM returns all 3,649 employees. Reverse is blocked: QA TM on the JAVA-only position → 404 OPP_020. |
| **Finding Ref** | N-04 |
| **Last Result** | failed |
| **Notes** | N-04: TM can shortlist employees of other departments onto their own department's position |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J6 Role visibility on the interview flow: as TM (JAVA), TM shortlists an employee from another department onto their own department's position
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Only JAVA employees can be shortlisted onto a JAVA position by the JAVA TM

**Test Data**

- `checkId`: J6-RBAC1

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-771 — Allocate is blocked while the Prospect ticket has no project

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | allocate buttons=1 disabled=true \| OPP-0157 #1 Nimisha Kumar 50% QA Lead QA 80% 30% Remaining of 100% Won 2 / 2 Approved Allocate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Allocate is blocked while the Prospect ticket has no project
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Allocate action disabled with "No Project linked"

**Test Data**

- `checkId`: J7-06

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-774 — Try to unlink or change the project after a candidate is allocated

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J7 Round management + Link Project + Allocate (Prospect) |
| **Actual Result** | unlink: enabled, change: enabled \| toast: A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed \| Candidate allocated to the project \| Link Project Link Project AnalytixHub \| Advanced Analytics Linked through the client's existing Zoho project. Change Project Unlink Project |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J7 Round management + Link Project + Allocate (Prospect): as PMO, Try to unlink or change the project after a candidate is allocated
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Unlink / Change disabled or refused (OPP_176, fixed 26/10)

**Test Data**

- `checkId`: J7-09

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-775 — Move a card INTO "Did Interview Happen?" from the menu

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J8 Board stage moves (guard rails) |
| **Actual Result** | before: OPP-0123 #1 QA-AUTO E2E Misc QA Engineer QA Ankita Das Existing Client QA-AUTO RT Client Interview Scheduled 27/10/2026 4:41 PM 19h ago \| disabled=true \| confirm:  \| toast:  \| after: OPP-0123 #1 QA-AUTO E2E Misc QA Engineer QA Ankita Das Existing Client QA-AUTO RT Client Interview Scheduled 27/10/2026 4:41 PM 19h ago |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J8 Board stage moves (guard rails): as PMO, Move a card INTO "Did Interview Happen?" from the menu
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Not allowed (stage is system-set): option disabled or refused

**Test Data**

- `checkId`: J8-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-776 — Move an Interview Scheduled card back to Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J8 Board stage moves (guard rails) |
| **Actual Result** | confirm: Confirm Status Change This will move the candidate from Interview Scheduled back to Being Prepared and clear the interview scheduled for 27/10/2026. Do you want to Continue? Cancel Yes, Proceed Being Prepared \| toast: Status updated. \| after: OPP-0123 #1 QA-AUTO E2E Misc QA Engineer QA Ankita Das Existing Client QA-AUTO RT Client Being Prepared Not scheduled 19h ago |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J8 Board stage moves (guard rails): as PMO, Move an Interview Scheduled card back to Being Prepared
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Confirm first that the scheduled interview date will be cleared (UI fix 26/10)

**Test Data**

- `checkId`: J8-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-777 — Move a Being Prepared card (no dated round) to Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J8 Board stage moves (guard rails) |
| **Actual Result** | disabled=false \| confirm: Interview Date Round 1 has no upcoming date. Pick today or a later date to move Ankita Das to Interview Scheduled. Round 1: R1 Pending Interview Date  \| toast:  \| after: OPP-0123 #1 QA-AUTO E2E Misc QA Engineer QA Ankita Das Existing Client QA-AUTO RT Client Being Prepared Not scheduled 19h ago — By design: a date dialog opens ("Round 1 has no upcoming date. Pick today or a later date…") instead of a blind move. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J8 Board stage moves (guard rails): as PMO, Move a Being Prepared card (no dated round) to Interview Scheduled
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Refused — a round needs a date first

**Test Data**

- `checkId`: J8-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-778 — Skip ahead Being Prepared → Won from the menu

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J8 Board stage moves (guard rails) |
| **Actual Result** | confirm: Confirm Status Change This will move the candidate from Being Prepared to Won, bypassing intermediate stages. Do you want to Continue? Cancel Yes, Proceed Won \| toast: Status updated. \| after: OPP-0123 #1 QA-AUTO E2E Misc QA Engineer QA Ankita Das Existing Client QA-AUTO RT Client Won Not scheduled 19h ago — Confirm says "bypassing intermediate stages" — skip confirmation present. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J8 Board stage moves (guard rails): as PMO, Skip ahead Being Prepared → Won from the menu
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Skip confirmation; rounds still pending recorded as Skipped

**Test Data**

- `checkId`: J8-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-1002 — Title missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1003 — Title empty string

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title empty string
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1004 — Title whitespace only

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title whitespace only
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1008 — clientType missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientType missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1009 — clientType invalid value

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType must be one of the following values: EXISTING, PROSPECT"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientType invalid value
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1010 — clientType lowercase

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType must be one of the following values: EXISTING, PROSPECT"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientType lowercase
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1011 — clientName missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientName missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1012 — clientName whitespace only

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: clientName whitespace only
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1015 — websiteUrl not a URL

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: websiteUrl not a URL
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1017 — websiteUrl ftp scheme

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: websiteUrl ftp scheme
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1018 — websiteUrl no TLD (http://localhost)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: websiteUrl no TLD (http://localhost)
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1021 — linkedinUrl invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"linkedinUrl","message":"linkedinUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: linkedinUrl invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1022 — interviewerLinkedinUrl invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"interviewerLinkedinUrl","message":"interviewerLinkedinUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: interviewerLinkedinUrl invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1030 — Unknown top-level key rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"foo","message":"property foo should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Unknown top-level key rejected
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1031 — positions empty array

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions","message":"positions must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: positions empty array
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1032 — positions missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions","message":"positions is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: positions missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1033 — projectPublicId not a uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"projectPublicId","message":"projectPublicId must be a UUID"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: projectPublicId not a uuid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1034 — projectPublicId random uuid (not found)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 404 OPP_010 Project not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: projectPublicId random uuid (not found)
2. Check the response and resulting state

**Expected**

404 OPP_010

**Test Data**

- `checkId`: VAL-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1037 — PROSPECT with projectPublicId

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully clientType=EXISTING |
| **Finding Ref** | F-15 |
| **Last Result** | passed |
| **Notes** | F-15: Create accepts contradictory data |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PROSPECT with projectPublicId
2. Check the response and resulting state

**Expected**

Either refused or auto-switched to EXISTING (FRD: link makes prospect existing)

**Test Data**

- `checkId`: VAL-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1038 — Position title missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Position title missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1040 — techStacks empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"techStacks must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: techStacks empty
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1042 — techStacks item empty string

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"each value in techStacks should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: techStacks item empty string
2. Check the response and resulting state

**Expected**

400 (blank tech stack)

**Test Data**

- `checkId`: VAL-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1043 — techStacks duplicate values

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully ["Java"] |
| **Finding Ref** | F-17 |
| **Last Result** | passed |
| **Notes** | F-17: Duplicate values stored |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: techStacks duplicate values
2. Check the response and resulting state

**Expected**

de-duplicated or refused

**Test Data**

- `checkId`: VAL-043

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1044 — departmentPublicIds empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.departmentPublicIds","message":"departmentPublicIds must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: departmentPublicIds empty
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1045 — departmentPublicIds non-uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.departmentPublicIds","message":"each value in departmentPublicIds must be a UUID"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: departmentPublicIds non-uuid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1046 — departmentPublicIds unknown uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 404 OPP_016 One or more departments were not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: departmentPublicIds unknown uuid
2. Check the response and resulting state

**Expected**

404 OPP_016

**Test Data**

- `checkId`: VAL-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1047 — departmentPublicIds duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully depts=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: departmentPublicIds duplicate
2. Check the response and resulting state

**Expected**

de-duplicated or refused

**Test Data**

- `checkId`: VAL-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1049 — requiredCount 0

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount 0
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1050 — requiredCount -1

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount -1
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1053 — requiredCount "2" string

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must be a whole number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: requiredCount "2" string
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1056 — priority missing (Interview) → OPP_154

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_154 An Interview Position needs its priority |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: priority missing (Interview) → OPP_154
2. Check the response and resulting state

**Expected**

400 OPP_154, nothing created

**Test Data**

- `checkId`: VAL-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1057 — priority invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.priority","message":"priority must be one of the following values: HIGH, MEDIUM, LOW"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: priority invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1058 — preferredSeniority missing

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredSeniority","message":"preferredSeniority is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: preferredSeniority missing
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1059 — preferredSeniority invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredSeniority","message":"preferredSeniority must be one of the following values: JUNIOR, MID, SENIOR, LEAD"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: preferredSeniority invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-059

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1060 — allocationType invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationType","message":"allocationType must be one of the following values: FIXED, DYNAMIC"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: allocationType invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-060

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1061 — FIXED without % → OPP_026

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage is required."}] |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | Refused as expected; error code is VAL_001, not the OPP_026 the backend guide lists (doc mismatch, see F-21). · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: FIXED without % → OPP_026
2. Check the response and resulting state

**Expected**

400 OPP_026, nothing created

**Test Data**

- `checkId`: VAL-061

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1062 — FIXED 0%

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: FIXED 0%
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-062

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1063 — FIXED 101%

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must not be greater than 100"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: FIXED 101%
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-063

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1067 — DYNAMIC with % → OPP_027

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_027 Allocation % must be omitted for a Dynamic allocation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: DYNAMIC with % → OPP_027
2. Check the response and resulting state

**Expected**

400 OPP_027, nothing created

**Test Data**

- `checkId`: VAL-067

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1070 — tentativeAllocationDate impossible (2026-02-30)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.tentativeAllocationDate","message":"tentativeAllocationDate must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: tentativeAllocationDate impossible (2026-02-30)
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-070

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1072 — End date before start → OPP_093

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_093 The tentative allocation end date cannot be before its start date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: End date before start → OPP_093
2. Check the response and resulting state

**Expected**

400 OPP_093, nothing created

**Test Data**

- `checkId`: VAL-072

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1074 — End date without start date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_177 Set the tentative allocation date before its end date |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: End date without start date
2. Check the response and resulting state

**Expected**

refused (end needs a start)

**Test Data**

- `checkId`: VAL-074

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1075 — isInterviewRequired=false with roundTitles → OPP_029

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: isInterviewRequired=false with roundTitles → OPP_029
2. Check the response and resulting state

**Expected**

400 OPP_029, nothing created

**Test Data**

- `checkId`: VAL-075

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1076 — isInterviewRequired=false with interview date → OPP_029

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: isInterviewRequired=false with interview date → OPP_029
2. Check the response and resulting state

**Expected**

400 OPP_029, nothing created

**Test Data**

- `checkId`: VAL-076

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1077 — INTERVIEW request with isInterviewRequired=false

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Finding Ref** | F-15 |
| **Last Result** | skipped |
| **Notes** | F-15: Create accepts contradictory data |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: INTERVIEW request with isInterviewRequired=false
2. Check the response and resulting state

**Expected**

Contradiction — should be refused (Interview ticket without interview)

**Test Data**

- `checkId`: VAL-077

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1078 — tentativeInterviewDate after allocation date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_180 The tentative interview date must be on or before the tentative allocation date |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: tentativeInterviewDate after allocation date
2. Check the response and resulting state

**Expected**

Interview should be before allocation — refused or warned

**Test Data**

- `checkId`: VAL-078

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1079 — tentativeInterviewDate in the past

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_179 The tentative interview date cannot be in the past |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: tentativeInterviewDate in the past
2. Check the response and resulting state

**Expected**

refused

**Test Data**

- `checkId`: VAL-079

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1085 — prepMaterials url invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.prepMaterials.0.url","message":"url must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prepMaterials url invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-085

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1086 — prepMaterials title empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.prepMaterials.0.title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: prepMaterials title empty
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-086

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1089 — preferredEmployeePublicIds duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredEmployeePublicIds","message":"All preferredEmployeePublicIds's elements must be unique"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: preferredEmployeePublicIds duplicate
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-089

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1090 — preferredEmployeePublicIds unknown uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 404 OPP_048 Employee not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: preferredEmployeePublicIds unknown uuid
2. Check the response and resulting state

**Expected**

404 OPP_048

**Test Data**

- `checkId`: VAL-090

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1091 — employeePublicId on INTERVIEW position → OPP_129

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 OPP_129 Only a Direct Position names its Employee up front |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: employeePublicId on INTERVIEW position → OPP_129
2. Check the response and resulting state

**Expected**

400 OPP_129, nothing created

**Test Data**

- `checkId`: VAL-091

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1093 — locationPreference invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.locationPreference","message":"locationPreference should be one of WFO, WFH, HYBRID, USA, CANADA, EUROPE, AUSTRALIA, DUBAI, OTHER values. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: locationPreference invalid
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-093

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1094 — OTHER without otherLocation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.otherLocation","message":"otherLocation cannot be empty."},{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: OTHER without otherLocation
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-094

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1096 — otherLocation with WFO → SYS_004

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 SYS_004 otherLocation must only be supplied when locationPreference is OTHER |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: otherLocation with WFO → SYS_004
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-096

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1097 — USA without workMode

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: USA without workMode
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-097

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1098 — USA ON_SITE without address

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.address","message":"address cannot be empty."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: USA ON_SITE without address
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-098

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1100 — workMode with WFH

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 SYS_004 workMode must only be supplied for a foreign locationPreference, not for WFO, WFH or HYBRID |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: workMode with WFH
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-100

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1101 — nightShift NONE + NS1 combined

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.nightShiftPreferences","message":"shiftPreferences cannot combine NONE with other shift preferences."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: nightShift NONE + NS1 combined
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-101

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1102 — address 501

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.address","message":"The address must not exceed 500 characters."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: address 501
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-102

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1111 — csm raises EXISTING (project not managed)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_009 You can only raise or link Opportunities for Projects you manage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: csm raises EXISTING (project not managed)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1112 — csm raises EXISTING (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 400 OPP_019 Link a Project you manage to raise an Existing Client Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: csm raises EXISTING (no project)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: RBAC-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1113 — pm raises EXISTING (project managed)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | ⏳ Pending product decision (26 Oct): PM raises Existing-Client tickets per Figma; FRD vs Figma being confirmed. · F-01: PM can raise Existing-client Interview and Direct opportunities |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: pm raises EXISTING (project managed)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1114 — pm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_008 You are not allowed to raise an Opportunity for a Prospect |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: pm raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1115 — tmQA raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM (QA): tmQA raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1116 — em raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: em raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1117 — rm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: rm raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1118 — emp raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: emp raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1119 — admin raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Admin: admin raises PROSPECT (no project)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: RBAC-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1123 — Assignee picker for TM/EM/CSM/Employee

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | tmQA:403 em:403 emp:403 rm:403 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Assignee picker for TM/EM/CSM/Employee
2. Check the response and resulting state

**Expected**

403 OPP_162 for non-raisers

**Test Data**

- `checkId`: RBAC-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1124 — Assign a non-PM as assignedPm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 400 OPP_158 The assigned PM must be an active Employee who holds the PM role |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Assign a non-PM as assignedPm
2. Check the response and resulting state

**Expected**

400 OPP_158

**Test Data**

- `checkId`: RBAC-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1125 — Assign a non-CSM as assignedCsm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 400 OPP_159 The assigned CSM must be an active Employee who holds the CSM role |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Assign a non-CSM as assignedCsm
2. Check the response and resulting state

**Expected**

400 OPP_159

**Test Data**

- `checkId`: RBAC-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1126 — CSM tries to set assignedCsm on create

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_160 Only PMO can assign a CSM to an Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM tries to set assignedCsm on create
2. Check the response and resulting state

**Expected**

403 OPP_160 (PMO only)

**Test Data**

- `checkId`: RBAC-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1131 — Non-assigned CSM (sai.gandhi) cannot open it

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Non-assigned CSM (sai.gandhi) cannot open it
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: RBAC-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1134 — CSM (assigned) clears assignedCsm on an INTERVIEW opp

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_160 Only PMO can assign a CSM to an Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM (assigned) clears assignedCsm on an INTERVIEW opp
2. Check the response and resulting state

**Expected**

403 (PMO only)

**Test Data**

- `checkId`: RBAC-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1139 — tmQA edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM (QA): tmQA edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1140 — tmQA changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM (QA): tmQA changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1141 — em edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: em edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1142 — em changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: em changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1143 — rm edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: rm edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1144 — rm changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: rm changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1145 — pm edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: pm edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1146 — pm changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: pm changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1147 — emp edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: emp edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1148 — emp changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: emp changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1149 — admin edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Admin: admin edits a PMO opportunity
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-043

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1150 — admin changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Admin: admin changes opportunity status
2. Check the response and resulting state

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1151 — CSM changes status (mark Lost) on own opp

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM changes status (mark Lost) on own opp
2. Check the response and resulting state

**Expected**

403 (FRD: PMO only)

**Test Data**

- `checkId`: RBAC-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1157 — rm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: rm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1158 — emp: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: emp: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1159 — csm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: csm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1160 — pm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PM: pm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and resulting state

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1169 — Shortlist same employee twice in one request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 This Employee is already nominated for this Position |
| **Last Result** | passed |
| **Notes** | Refused (409 OPP_028) — acceptable. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Shortlist same employee twice in one request
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1170 — Shortlist empty list

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"candidates","message":"candidates must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Shortlist empty list
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1172 — Re-shortlist an already live candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 This Employee is already nominated for this Position |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Re-shortlist an already live candidate
2. Check the response and resulting state

**Expected**

409 OPP_028

**Test Data**

- `checkId`: INT-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1176 — rm tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: rm tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1177 — csm tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: csm tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1178 — emp tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Employee: emp tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1179 — admin tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Admin: admin tries to shortlist
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: INT-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1181 — TM (JAVA) shortlists on a QA-only position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM (JAVA) shortlists on a QA-only position
2. Check the response and resulting state

**Expected**

404 (out of scope) — record

**Test Data**

- `checkId`: INT-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1185 — Candidate picker min>max

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_165 The minimum cannot be greater than the maximum |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate picker min>max
2. Check the response and resulting state

**Expected**

400 OPP_165

**Test Data**

- `checkId`: INT-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1188 — TM approves without request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_107 Send the Candidate for approval first |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM approves without request
2. Check the response and resulting state

**Expected**

400 OPP_107

**Test Data**

- `checkId`: INT-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1189 — TM sends EM's pick (qa4) for approval

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_105 You can only send Candidates you shortlisted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM sends EM's pick (qa4) for approval
2. Check the response and resulting state

**Expected**

403 OPP_105 (own picks only)

**Test Data**

- `checkId`: INT-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1191 — Send same candidate twice

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_104 This Candidate was already sent for approval |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Send same candidate twice
2. Check the response and resulting state

**Expected**

400 OPP_104

**Test Data**

- `checkId`: INT-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1192 — Requester TM approves own request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_111 You cannot approve or reject a request you sent |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: Requester TM approves own request
2. Check the response and resulting state

**Expected**

400/403 OPP_111 (never the requester)

**Test Data**

- `checkId`: INT-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1195 — PMO sends qa2; TM (JAVA) tries to approve a QA candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO sends qa2; TM (JAVA) tries to approve a QA candidate
2. Check the response and resulting state

**Expected**

403 OPP_100 / 404

**Test Data**

- `checkId`: INT-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1196 — EM tries to approve (EM never approves)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As EM: EM tries to approve (EM never approves)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1198 — Double approve (already approved)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_107 Send the Candidate for approval first |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Double approve (already approved)
2. Check the response and resulting state

**Expected**

400 OPP_014/OPP_107

**Test Data**

- `checkId`: INT-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1200 — Withdraw by non-requester TM

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_109 Only the requester or PMO can withdraw this approval request |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Withdraw by non-requester TM
2. Check the response and resulting state

**Expected**

403 OPP_109

**Test Data**

- `checkId`: INT-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1202 — Withdraw when nothing pending

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_106 There is no pending approval request to withdraw |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Withdraw when nothing pending
2. Check the response and resulting state

**Expected**

400 OPP_106

**Test Data**

- `checkId`: INT-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1203 — TM tries bypass

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM tries bypass
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1207 — Remove an IN_PROCESS nomination via DELETE

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |
| **Notes** | Refused (reason now required, then In-Process rule). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Remove an IN_PROCESS nomination via DELETE
2. Check the response and resulting state

**Expected**

400 OPP_071 (reject instead)

**Test Data**

- `checkId`: INT-043

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1209 — Reject without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reject without reason
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1210 — Reject with whitespace reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Reject with whitespace reason
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1211 — TM passes rejectedByRole

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_101 Only PMO can record who rejected the Candidate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM passes rejectedByRole
2. Check the response and resulting state

**Expected**

400 OPP_101

**Test Data**

- `checkId`: INT-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1216 — Action on a REJECTED (historical) nomination id

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Action on a REJECTED (historical) nomination id
2. Check the response and resulting state

**Expected**

404 OPP_040

**Test Data**

- `checkId`: INT-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1217 — TM drags a card

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM drags a card
2. Check the response and resulting state

**Expected**

403 (PMO only, rule 21)

**Test Data**

- `checkId`: INT-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1218 — Drag to WAITING_FOR_APPROVAL

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag to WAITING_FOR_APPROVAL
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1219 — Drag to WON directly

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag to WON directly
2. Check the response and resulting state

**Expected**

400 (not a drag target)

**Test Data**

- `checkId`: INT-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1220 — Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1221 — Drag Being Prepared → Interview Scheduled when no round has a date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_059 Enter the interview date to move the Candidate to this stage undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag Being Prepared → Interview Scheduled when no round has a date
2. Check the response and resulting state

**Expected**

refused or interview-date dialog required

**Test Data**

- `checkId`: INT-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1222 — Drag backwards to SHORTLISTED

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag backwards to SHORTLISTED
2. Check the response and resulting state

**Expected**

400 (never back to Shortlisted)

**Test Data**

- `checkId`: INT-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1224 — Drag an empty (Pending) card

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | EXCEPTION Cannot read properties of undefined (reading 'publicId') |
| **Last Result** | skipped |
| **Notes** | Test sequencing (no empty card in this run); covered 21 Oct. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Drag an empty (Pending) card
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-060

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1227 — Candidate ticks an unknown code

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_094 One or more checklist items are not on this Position’s Preparation Checklist |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate ticks an unknown code
2. Check the response and resulting state

**Expected**

400 OPP_094

**Test Data**

- `checkId`: INT-063

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1228 — Candidate tries to skip an item

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_166 Only PMO can skip or un-skip Preparation Checklist items |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate tries to skip an item
2. Check the response and resulting state

**Expected**

403 OPP_166 (PMO only)

**Test Data**

- `checkId`: INT-064

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1230 — Candidate ticks a PMO-skipped item

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_167 This checklist item was skipped by PMO and cannot be ticked |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate ticks a PMO-skipped item
2. Check the response and resulting state

**Expected**

400 OPP_167

**Test Data**

- `checkId`: INT-066

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1231 — Candidate edits another candidate's checklist

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate edits another candidate's checklist
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: INT-067

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1232 — TM ticks a team member's checklist (read-only per matrix)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |
| **Notes** | Refused with 404 (TM has no prepare grant) — read-only as intended. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM ticks a team member's checklist (read-only per matrix)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-068

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1233 — Unrelated employee (kashyap) opens the opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Unrelated employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Unrelated employee: Unrelated employee (kashyap) opens the opportunity
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: INT-069

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1235 — TM adds a round

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM adds a round
2. Check the response and resulting state

**Expected**

403 (PMO only)

**Test Data**

- `checkId`: INT-071

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1236 — Round on CONSIDERED nomination

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_054 Interview Rounds can only be recorded for an In Process Nomination |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Round on CONSIDERED nomination
2. Check the response and resulting state

**Expected**

400 OPP_054

**Test Data**

- `checkId`: INT-072

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1238 — Round scheduledAt invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"scheduledAt","message":"scheduledAt must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Round scheduledAt invalid
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-074

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1240 — Change finalized R1 date (rule 17 lock)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round updated successfully |
| **Finding Ref** | F-05 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Finalize/lock interview schedule. · F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Change finalized R1 date (rule 17 lock)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-076

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1241 — Un-finalize R1

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"isFinalized","message":"property isFinalized should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Un-finalize R1
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-077

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1243 — Mark future-dated R1 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_138 A round can be marked Cleared or Not Cleared only once it has an interview date of today or earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Mark future-dated R1 Cleared
2. Check the response and resulting state

**Expected**

400 OPP_138

**Test Data**

- `checkId`: INT-079

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1244 — Mark undated R2 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_138 A round can be marked Cleared or Not Cleared only once it has an interview date of today or earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Mark undated R2 Cleared
2. Check the response and resulting state

**Expected**

400 OPP_138

**Test Data**

- `checkId`: INT-080

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1246 — Recording URL invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"recordingUrl","message":"recordingUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Recording URL invalid
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-082

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1248 — Delete a decided round

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_058 An Interview Round can be removed only while it is pending |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Delete a decided round
2. Check the response and resulting state

**Expected**

400 OPP_058

**Test Data**

- `checkId`: INT-084

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1252 — Edit allocation % with live candidates

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_153 Allocation type, percentage, tentative dates and preferred Employees cannot change once a Candidate is in the pipeline |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Edit allocation % with live candidates
2. Check the response and resulting state

**Expected**

400 OPP_153

**Test Data**

- `checkId`: INT-088

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1256 — Delete position with IN_PROCESS candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_025 A Position with a Candidate In Process or Selected cannot be deleted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Delete position with IN_PROCESS candidate
2. Check the response and resulting state

**Expected**

400 OPP_025

**Test Data**

- `checkId`: INT-092

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1257 — Round-skip: select qa1 from Being Prepared without confirm

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Round-skip: select qa1 from Being Prepared without confirm
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-093

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1258 — TM selects (Won)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM selects (Won)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-094

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1261 — Allocate with % above remaining capacity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate with % above remaining capacity
2. Check the response and resulting state

**Expected**

400 ALLOCATION_TICKET_099 or similar

**Test Data**

- `checkId`: INT-097

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1262 — Allocate bad body (FIXED without %)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate bad body (FIXED without %)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-098

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1263 — TM / CSM allocate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403/403 |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM / CSM allocate
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-099

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1265 — Allocate the same nomination again

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | EXCEPTION Cannot read properties of undefined (reading 'publicId') |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Allocate the same nomination again
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-101

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1269 — Same status as current

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Same status as current
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-105

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1280 — NLR without confirmation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: NLR without confirmation
2. Check the response and resulting state

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-116

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1283 — Re-initiate without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Re-initiate without reason
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: INT-119

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1284 — TM re-initiates

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM re-initiates
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: INT-120

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1286 — Re-initiate when nothing to release

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_122 This Position has no Candidates to re-initiate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Re-initiate when nothing to release
2. Check the response and resulting state

**Expected**

400 OPP_122

**Test Data**

- `checkId`: INT-122

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1291 — createdFrom > createdTo

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: createdFrom > createdTo
2. Check the response and resulting state

**Expected**

400 or empty

**Test Data**

- `checkId`: INT-127

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1322 — DIRECT without employee

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_126 A Direct Position needs the Employee to allocate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT without employee
2. Check the response and resulting state

**Expected**

400 OPP_126

**Test Data**

- `checkId`: DIR-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1323 — DIRECT without tentative allocation date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_127 A Direct Position needs a tentative allocation date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT without tentative allocation date
2. Check the response and resulting state

**Expected**

400 OPP_127

**Test Data**

- `checkId`: DIR-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1324 — DIRECT with requiredCount 2

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT with requiredCount 2
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1325 — DIRECT with round titles

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT with round titles
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1326 — DIRECT with isInterviewRequired true

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT with isInterviewRequired true
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1327 — DIRECT with prep material

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT with prep material
2. Check the response and resulting state

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1328 — DIRECT with unknown employee

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 404 OPP_048 Employee not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: DIRECT with unknown employee
2. Check the response and resulting state

**Expected**

404 OPP_048

**Test Data**

- `checkId`: DIR-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1329 — Same employee on two positions of one DIRECT request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_175 A Direct Opportunity has exactly one Position |
| **Finding Ref** | F-13 |
| **Last Result** | passed |
| **Notes** | F-13: A Direct request can hold only one employee |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Same employee on two positions of one DIRECT request
2. Check the response and resulting state

**Expected**

refused (duplicate allocation request)

**Test Data**

- `checkId`: DIR-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1334 — Interview action on a DIRECT ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_124 This action is only available on Interview Opportunities |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Interview action on a DIRECT ticket
2. Check the response and resulting state

**Expected**

400 OPP_124

**Test Data**

- `checkId`: DIR-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1335 — CSM (raiser) moves Direct stage

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM (raiser) moves Direct stage
2. Check the response and resulting state

**Expected**

403 OPP_133

**Test Data**

- `checkId`: DIR-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1336 — TM moves Direct stage

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM moves Direct stage
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: DIR-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1339 — Move backwards IN_REVIEW → OPEN

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Move backwards IN_REVIEW → OPEN
2. Check the response and resulting state

**Expected**

400 OPP_130

**Test Data**

- `checkId`: DIR-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1341 — Owner sets tentativeAllocationDate null

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_127 A Direct Position needs a tentative allocation date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM (owner): Owner sets tentativeAllocationDate null
2. Check the response and resulting state

**Expected**

400 OPP_127

**Test Data**

- `checkId`: DIR-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1342 — Non-owner CSM (sai.gandhi) edits

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Non-owner CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Non-owner CSM: Non-owner CSM (sai.gandhi) edits
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: DIR-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1344 — Owner swaps employee while AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_132 The Employee can only be changed while the ticket is Open or In Review |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM (owner): Owner swaps employee while AWAITING
2. Check the response and resulting state

**Expected**

400 OPP_132

**Test Data**

- `checkId`: DIR-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1349 — APPROVED is terminal

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: APPROVED is terminal
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1350 — Owner edits after APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_152 A Direct ticket can be edited only while it is open and not yet Approved or Rejected |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM (owner): Owner edits after APPROVED
2. Check the response and resulting state

**Expected**

400 OPP_152

**Test Data**

- `checkId`: DIR-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1351 — Cancel tag after APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_147 Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Cancel tag after APPROVED
2. Check the response and resulting state

**Expected**

400 OPP_147

**Test Data**

- `checkId`: DIR-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1352 — Reject without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_131 A reason is required to reject a Direct ticket |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Reject without reason
2. Check the response and resulting state

**Expected**

400 OPP_131

**Test Data**

- `checkId`: DIR-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1355 — REJECTED is terminal (move to IN_REVIEW)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: REJECTED is terminal (move to IN_REVIEW)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: DIR-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1356 — TM tries to cancel

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 403 OPP_149 Only PMO, the raiser, the Project PM or CSM, or the assigned PM or CSM can mark this Direct ticket as cancelled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM tries to cancel
2. Check the response and resulting state

**Expected**

403/404

**Test Data**

- `checkId`: DIR-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1360 — Cancel again

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | Re-checked with a reason: first 200, second 409 OPP_148 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Cancel again
2. Check the response and resulting state

**Expected**

409 OPP_148

**Test Data**

- `checkId`: DIR-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1368 — Force APPROVED without project

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_049 Link the Opportunity to a Project before allocating the Candidate |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Force APPROVED without project
2. Check the response and resulting state

**Expected**

400 OPP_049

**Test Data**

- `checkId`: DIR-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1370 — CSM links a project it does not manage

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 403 OPP_009 You can only raise or link Opportunities for Projects you manage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM links a project it does not manage
2. Check the response and resulting state

**Expected**

403 OPP_009

**Test Data**

- `checkId`: DIR-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1371 — CSM unlinks project on EXISTING

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 OPP_019 Link a Project you manage to raise an Existing Client Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: CSM unlinks project on EXISTING
2. Check the response and resulting state

**Expected**

400 OPP_019

**Test Data**

- `checkId`: DIR-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1375 — APPROVED for fully-booked employee → capacity error passes through

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 400 ALLOCATION_TICKET_099 This employee's total active allocation percentage across all projects would exceed their maximum allowed allocation (100% base, plus what each shadow developer covering them is allocated, up to 2 shadow developers) [{"projectAssignmentPublicId":"f2bdcfd3-6923-4924-9527-7c29dabd0398","projectPublicId":"1151a973-f0d5-4a2b-b9ca-ed8219cc |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: APPROVED for fully-booked employee → capacity error passes through
2. Check the response and resulting state

**Expected**

400 ALLOCATION_TICKET_099

**Test Data**

- `checkId`: DIR-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1385 — Candidate (employee) adds prep material

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As Candidate: Candidate (employee) adds prep material
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: MSC-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1390 — PATCH title null (required)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PATCH title null (required)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1391 — PATCH websiteUrl "" (not a clear per contract)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] stored=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PATCH websiteUrl "" (not a clear per contract)
2. Check the response and resulting state

**Expected**

400 or ignored

**Test Data**

- `checkId`: MSC-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1392 — PATCH unknown key

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"status","message":"property status should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PATCH unknown key
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1393 — PATCH requestType (fixed at create)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"requestType","message":"property requestType should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PATCH requestType (fixed at create)
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1396 — PMO edits a LOST opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO edits a LOST opportunity
2. Check the response and resulting state

**Expected**

400/403 (edit only while OPEN)

**Test Data**

- `checkId`: MSC-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1397 — Add position to a LOST opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Add position to a LOST opportunity
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1398 — Delete the last position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_011 An Opportunity needs at least one Position; change its status instead |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Delete the last position
2. Check the response and resulting state

**Expected**

400 OPP_011

**Test Data**

- `checkId`: MSC-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1408 — RM shortlists (matrix: no)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | skip |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As RM: RM shortlists (matrix: no)
2. Check the response and resulting state

**Expected**

403

**Test Data**

- `checkId`: MSC-028

**Automation Hint**

API-level check (scratchpad harness)

### Security (9)

#### TC-OPPTY-1016 — websiteUrl javascript: scheme

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: websiteUrl javascript: scheme
2. Check the response and resulting state

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1028 — jobDescription HTML with <script> is sanitised

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0168 "<p>Hello</p><img src=\"x\" /><a>x</a>" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: jobDescription HTML with <script> is sanitised
2. Check the response and resulting state

**Expected**

201 created + no script/onerror/javascript: stored

**Test Data**

- `checkId`: VAL-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1161 — Out-of-scope id returns 404 not 403 (no existence leak)

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Out-of-scope id returns 404 not 403 (no existence leak)
2. Check the response and resulting state

**Expected**

404

**Test Data**

- `checkId`: RBAC-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1319 — Another employee reads akash's history (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully n=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Another employee reads akash's history (IDOR)
2. Check the response and resulting state

**Expected**

403/404/empty

**Test Data**

- `checkId`: ALC-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1378 — Direct tickets do not leak into the Interview board

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | direct cards on interview board=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO / CSM: Direct tickets do not leak into the Interview board
2. Check the response and resulting state

**Expected**

no DIRECT card on default board

**Test Data**

- `checkId`: DIR-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1386 — Prep material URL javascript:

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"url","message":"url must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Prep material URL javascript:
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1409 — Title with HTML is stored raw (UI must escape)

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_002 Opportunity created successfully stored=QA-AUTO <img src=x onerror=alert(1)> xss |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Title with HTML is stored raw (UI must escape)
2. Check the response and resulting state

**Expected**

record

**Test Data**

- `checkId`: MSC-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1410 — Unauthenticated board read

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 401 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Unauthenticated board read
2. Check the response and resulting state

**Expected**

401

**Test Data**

- `checkId`: MSC-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1411 — Non-uuid id in path

| Field | Value |
| --- | --- |
| **Tags** | @security, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 SYS_004 Validation failed (uuid is expected) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Non-uuid id in path
2. Check the response and resulting state

**Expected**

400

**Test Data**

- `checkId`: MSC-031

**Automation Hint**

API-level check (scratchpad harness)

### Smoke (14)

#### TC-OPPTY-701 — Open Create New Opportunity form

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | Create New Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Open Create New Opportunity form
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Form loads with request-type cards

**Test Data**

- `checkId`: J1-01

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-702 — Fill every Interview / Existing Client field (project AnalytixHub, PM, CSM, 2 openings, 2 rounds, prep link)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | no counter (0 left) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Fill every Interview / Existing Client field (project AnalytixHub, PM, CSM, 2 openings, 2 rounds, prep link)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Form accepts all values; required-field counter reaches 0

**Test Data**

- `checkId`: J1-02

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-703 — Submit Create Opportunity

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | POST 201 OPP-0156 \| toast: Opportunity created successfully. \| url https://simerp-dev.simform.solutions/pre-sales/45503acb-9973-4b39-a310-a5646239e387 \| errs Edit Ticket;Cancel Request;QA-AUTO: client starts with a practical round;Shortlisted ratio: 0;Re-initiate;Add/ Shortlist;Edit;Delete;Add/ Shortlist;Add/ Shortlist |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Submit Create Opportunity
2. Check the screen, toast and the resulting card / ticket state

**Expected**

201, success toast, redirect to the new ticket

**Test Data**

- `checkId`: J1-03

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-714 — TM approves Kriti Desai

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | toast: Approval recorded. \| row: OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 90% 40% Remaining of 100% Being Prepared 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as TM (QA), TM approves Kriti Desai
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Approval shows Approved by Sudhansu Patel; opening moves to Being Prepared

**Test Data**

- `checkId`: J1-12

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-728 — Submit Allocate (50%, Green, Development Work)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J1 Interview happy path |
| **Actual Result** | POST 200 {"publicId":"4ee06860-22cd-4cfe-86d4-9c1efd582975","ordinal":1,"seatId":"OPP-0156 #1","stage":"PROJECT_ALLOCATED","directStage":null,"stageEnteredAt":"2026-10-27T06:09:58.819Z","createdAt":"2026-10-27T06:00:11.376Z","position":{"publicId":"b294c5d3-a \| toast:  \| row: OPP-0156 #1 Kriti Desai 50% Sr. QA Engineer QA 40% 40% Remaining of 100% Project Allocated 2 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J1 Interview happy path: as PMO, Submit Allocate (50%, Green, Development Work)
2. Check the screen, toast and the resulting card / ticket state

**Expected**

Allocation created; candidate moves to Project Allocated; filled 1 / 2

**Test Data**

- `checkId`: J1-25

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-736 — Back-date again, then answer Completed

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 (Interview Flow change list) · SI4-T1267 commits 27182b16, ddc13177, 89e87d20, dca84369 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview flow — J2 Did the interview happen? |
| **Actual Result** | toast: Interview confirmed — waiting for feedback \| row: OPP-0156 #2 Uday Dave 50% QA Lead QA 100% 50% Remaining of 100% Waiting for Feedback 1 / 2 Approved |
| **Last Result** | passed |

**Preconditions**

SimERP DEV 6.5.0 (simerp-dev.simform.solutions), 27 Oct 2026, build with the 26/10 fixes. Logged in through /dev-login as the role shown. Test data titled "QA-AUTO UI …".

**Steps**

1. J2 Did the interview happen?: as PMO, Back-date again, then answer Completed
2. Check the screen, toast and the resulting card / ticket state

**Expected**

"Interview confirmed — waiting for feedback"; card to Waiting for Feedback

**Test Data**

- `checkId`: J2-04

**Automation Hint**

Playwright UI journey (scratchpad harness)

#### TC-OPPTY-1001 — Minimal valid Interview/Prospect opportunity

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0161 OPP-0161 OPEN INTERVIEW openings=1/PENDING_TO_SHORTLIST displayId=QA-QE-224 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Minimal valid Interview/Prospect opportunity
2. Check the response and resulting state

**Expected**

201 created + ticket OPP-nnnn, status OPEN, 1 opening at PENDING_TO_SHORTLIST, requestType INTERVIEW

**Test Data**

- `checkId`: VAL-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1109 — csm raises EXISTING (project managed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As CSM: csm raises EXISTING (project managed)
2. Check the response and resulting state

**Expected**

201

**Test Data**

- `checkId`: RBAC-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1171 — TM (QA) shortlists 2 QA candidates

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully #1:SHORTLISTED:CONSIDERED #2:SHORTLISTED:CONSIDERED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM (QA) shortlists 2 QA candidates
2. Check the response and resulting state

**Expected**

201, 2 cards SHORTLISTED, CONSIDERED

**Test Data**

- `checkId`: INT-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1194 — Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | BEING_PREPARED IN_PROCESS blocked=true rounds=2 titles=R1 Technical\|R2 Client |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded
2. Check the response and resulting state

**Expected**

2 planned rounds

**Test Data**

- `checkId`: INT-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1212 — TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination rejected successfully PENDING_TO_SHORTLIST active=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As TM: TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6)
2. Check the response and resulting state

**Expected**

card PENDING_TO_SHORTLIST, nomination REJECTED

**Test Data**

- `checkId`: INT-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1306 — PMO allocates → Project Allocated + allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Candidate allocated to the Project successfully PROJECT_ALLOCATED ticket=491de591-b4f6-4f14-8616-6ec0c8cb6b15 blocked=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO allocates → Project Allocated + allocation ticket
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED

**Test Data**

- `checkId`: ALC-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1347 — PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%)

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully directStage=APPROVED stage=PROJECT_ALLOCATED filled=1 ticket=f769076a-1a73-46c5-950f-6cdacb0db0dd |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%)
2. Check the response and resulting state

**Expected**

200 PROJECT_ALLOCATED, allocation ticket

**Test Data**

- `checkId`: DIR-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-1364 — PMO closes cancelled ticket → No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @api, @regression |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | API regression — Direct allocation flow |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV API, 27 Oct 2026 (same suite as 21/10 and 26/10; real allocations allowed this run).

**Steps**

1. As PMO: PMO closes cancelled ticket → No Longer Required
2. Check the response and resulting state

**Expected**

200 NLR

**Test Data**

- `checkId`: DIR-043

**Automation Hint**

API-level check (scratchpad harness)
