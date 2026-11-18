# Pre-sales Opportunities — Test Cases

**Total test cases:** 459  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-10-21-OPPTY-presales-e2e.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| negative | 192 | 41.8% |
| functional | 164 | 35.7% |
| integration | 48 | 10.5% |
| boundary | 37 | 8.1% |
| security | 10 | 2.2% |
| smoke | 8 | 1.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 412 | 89.8% |
| low | 29 | 6.3% |
| high | 18 | 3.9% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 420 | 91.5% |
| low | 29 | 6.3% |
| high | 10 | 2.2% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 459 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 459 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 459 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @negative | 192 | 41.8% |
| @functional | 164 | 35.7% |
| @gap | 60 | 13.1% |
| @integration | 48 | 10.5% |
| @boundary | 37 | 8.1% |
| @ui | 25 | 5.4% |
| @security | 10 | 2.2% |
| @smoke | 8 | 1.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-201](#tc-oppty-201-minimal-valid-interview-prospect-opportunity) | Minimal valid Interview/Prospect opportunity | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-202](#tc-oppty-202-title-missing) | Title missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-203](#tc-oppty-203-title-empty-string) | Title empty string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-204](#tc-oppty-204-title-whitespace-only) | Title whitespace only | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-205](#tc-oppty-205-title-exactly-200-chars) | Title exactly 200 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-206](#tc-oppty-206-title-201-chars) | Title 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-207](#tc-oppty-207-title-is-trimmed-on-save) | Title is trimmed on save | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-208](#tc-oppty-208-clienttype-missing) | clientType missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-209](#tc-oppty-209-clienttype-invalid-value) | clientType invalid value | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-210](#tc-oppty-210-clienttype-lowercase) | clientType lowercase | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-211](#tc-oppty-211-clientname-missing) | clientName missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-212](#tc-oppty-212-clientname-whitespace-only) | clientName whitespace only | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-213](#tc-oppty-213-clientname-exactly-200) | clientName exactly 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-214](#tc-oppty-214-clientname-201) | clientName 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-215](#tc-oppty-215-websiteurl-not-a-url) | websiteUrl not a URL | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-216](#tc-oppty-216-websiteurl-javascript-scheme) | websiteUrl javascript: scheme | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-217](#tc-oppty-217-websiteurl-ftp-scheme) | websiteUrl ftp scheme | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-218](#tc-oppty-218-websiteurl-no-tld-http-localhost) | websiteUrl no TLD (http://localhost) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-219](#tc-oppty-219-websiteurl-https-valid) | websiteUrl https valid | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-220](#tc-oppty-220-websiteurl-2049-chars) | websiteUrl 2049 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-221](#tc-oppty-221-linkedinurl-invalid) | linkedinUrl invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-222](#tc-oppty-222-interviewerlinkedinurl-invalid) | interviewerLinkedinUrl invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-223](#tc-oppty-223-prospectcontact-201) | prospectContact 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-224](#tc-oppty-224-prospectnotes-4096) | prospectNotes 4096 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-225](#tc-oppty-225-prospectnotes-4097) | prospectNotes 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-226](#tc-oppty-226-specialinstructions-4096) | specialInstructions 4096 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-227](#tc-oppty-227-specialinstructions-4097) | specialInstructions 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-228](#tc-oppty-228-jobdescription-html-with-script-is-sanitised) | jobDescription HTML with <script> is sanitised | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-229](#tc-oppty-229-jobdescription-has-no-max-length-100k-chars) | jobDescription has no max length (100k chars) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-230](#tc-oppty-230-unknown-top-level-key-rejected) | Unknown top-level key rejected | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-231](#tc-oppty-231-positions-empty-array) | positions empty array | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-232](#tc-oppty-232-positions-missing) | positions missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-233](#tc-oppty-233-projectpublicid-not-a-uuid) | projectPublicId not a uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-234](#tc-oppty-234-projectpublicid-random-uuid-not-found) | projectPublicId random uuid (not found) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-235](#tc-oppty-235-pmo-existing-client-without-project-allowed-at-all-scope) | PMO Existing client WITHOUT project (allowed at ALL scope) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-236](#tc-oppty-236-pmo-existing-client-with-any-project) | PMO Existing client with any project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-237](#tc-oppty-237-prospect-with-projectpublicid) | PROSPECT with projectPublicId | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-238](#tc-oppty-238-position-title-missing) | Position title missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-239](#tc-oppty-239-position-title-201) | Position title 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-240](#tc-oppty-240-techstacks-empty) | techStacks empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-241](#tc-oppty-241-techstacks-item-101-chars) | techStacks item 101 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-242](#tc-oppty-242-techstacks-item-empty-string) | techStacks item empty string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-243](#tc-oppty-243-techstacks-duplicate-values) | techStacks duplicate values | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-244](#tc-oppty-244-departmentpublicids-empty) | departmentPublicIds empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-245](#tc-oppty-245-departmentpublicids-non-uuid) | departmentPublicIds non-uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-246](#tc-oppty-246-departmentpublicids-unknown-uuid) | departmentPublicIds unknown uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-247](#tc-oppty-247-departmentpublicids-duplicate) | departmentPublicIds duplicate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-248](#tc-oppty-248-multi-department-position-qa-java-em-multi-skill-case) | Multi-department position (QA+JAVA) — EM multi-skill case | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-249](#tc-oppty-249-requiredcount-0) | requiredCount 0 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-250](#tc-oppty-250-requiredcount-1) | requiredCount -1 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-251](#tc-oppty-251-requiredcount-21) | requiredCount 21 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-252](#tc-oppty-252-requiredcount-1-5) | requiredCount 1.5 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-253](#tc-oppty-253-requiredcount-2-string) | requiredCount "2" string | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-254](#tc-oppty-254-requiredcount-20-20-opening-cards) | requiredCount 20 → 20 opening cards | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-255](#tc-oppty-255-requiredcount-missing-interview) | requiredCount missing (Interview) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-256](#tc-oppty-256-priority-missing-interview-opp-154) | priority missing (Interview) → OPP_154 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-257](#tc-oppty-257-priority-invalid) | priority invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-258](#tc-oppty-258-preferredseniority-missing) | preferredSeniority missing | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-259](#tc-oppty-259-preferredseniority-invalid) | preferredSeniority invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-260](#tc-oppty-260-allocationtype-invalid) | allocationType invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-261](#tc-oppty-261-fixed-without-opp-026) | FIXED without % → OPP_026 | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-262](#tc-oppty-262-fixed-0) | FIXED 0% | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-263](#tc-oppty-263-fixed-101) | FIXED 101% | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-264](#tc-oppty-264-fixed-50-5) | FIXED 50.5% | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-265](#tc-oppty-265-fixed-1) | FIXED 1% | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-266](#tc-oppty-266-fixed-100) | FIXED 100% | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-267](#tc-oppty-267-dynamic-with-opp-027) | DYNAMIC with % → OPP_027 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-268](#tc-oppty-268-dynamic-without) | DYNAMIC without % | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-269](#tc-oppty-269-tentativeallocationdate-bad-format-21-10-2026) | tentativeAllocationDate bad format (21/10/2026) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-270](#tc-oppty-270-tentativeallocationdate-impossible-2026-02-30) | tentativeAllocationDate impossible (2026-02-30) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-271](#tc-oppty-271-tentativeallocationdate-in-the-past) | tentativeAllocationDate in the past | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-272](#tc-oppty-272-end-date-before-start-opp-093) | End date before start → OPP_093 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-273](#tc-oppty-273-end-date-same-day-as-start) | End date same day as start | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-274](#tc-oppty-274-end-date-without-start-date) | End date without start date | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-275](#tc-oppty-275-isinterviewrequired-false-with-roundtitles-opp-029) | isInterviewRequired=false with roundTitles → OPP_029 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-276](#tc-oppty-276-isinterviewrequired-false-with-interview-date-opp-029) | isInterviewRequired=false with interview date → OPP_029 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-277](#tc-oppty-277-interview-request-with-isinterviewrequired-false) | INTERVIEW request with isInterviewRequired=false | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-278](#tc-oppty-278-tentativeinterviewdate-after-allocation-date) | tentativeInterviewDate after allocation date | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-279](#tc-oppty-279-tentativeinterviewdate-in-the-past) | tentativeInterviewDate in the past | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-280](#tc-oppty-280-roundtitles-50) | roundTitles 50 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-281](#tc-oppty-281-roundtitles-51) | roundTitles 51 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-282](#tc-oppty-282-roundtitles-item-201-chars) | roundTitles item 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-283](#tc-oppty-283-roundtitles-with-blank-title-frd-optional-default-round-n) | roundTitles with blank title (FRD: optional, default "Round N") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-284](#tc-oppty-284-note-4097) | note 4097 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-285](#tc-oppty-285-prepmaterials-url-invalid) | prepMaterials url invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-286](#tc-oppty-286-prepmaterials-title-empty) | prepMaterials title empty | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-287](#tc-oppty-287-prepmaterials-omitted-default-links-seeded) | prepMaterials omitted → default links seeded | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-288](#tc-oppty-288-prepmaterials-none) | prepMaterials [] → none | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-289](#tc-oppty-289-preferredemployeepublicids-duplicate) | preferredEmployeePublicIds duplicate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-290](#tc-oppty-290-preferredemployeepublicids-unknown-uuid) | preferredEmployeePublicIds unknown uuid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-291](#tc-oppty-291-employeepublicid-on-interview-position-opp-129) | employeePublicId on INTERVIEW position → OPP_129 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-292](#tc-oppty-292-checklist-items-seeded-per-position) | Checklist items seeded per position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-293](#tc-oppty-293-locationpreference-invalid) | locationPreference invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-294](#tc-oppty-294-other-without-otherlocation) | OTHER without otherLocation | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-295](#tc-oppty-295-other-with-otherlocation) | OTHER with otherLocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-296](#tc-oppty-296-otherlocation-with-wfo-sys-004) | otherLocation with WFO → SYS_004 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-297](#tc-oppty-297-usa-without-workmode) | USA without workMode | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-298](#tc-oppty-298-usa-on-site-without-address) | USA ON_SITE without address | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-299](#tc-oppty-299-usa-on-site-with-address) | USA ON_SITE with address | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-300](#tc-oppty-300-workmode-with-wfh) | workMode with WFH | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-301](#tc-oppty-301-nightshift-none-ns1-combined) | nightShift NONE + NS1 combined | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-302](#tc-oppty-302-address-501) | address 501 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-303](#tc-oppty-303-3-positions-2-1-3-openings-ordinals-unique-across-the-opportunity) | 3 positions, 2+1+3 openings — ordinals unique across the opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-304](#tc-oppty-304-opportunity-priority-most-urgent-of-positions) | Opportunity priority = most urgent of positions | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-305](#tc-oppty-305-same-title-client-twice-potential-duplicate-notice) | Same title + client twice (Potential Duplicate Notice) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-306](#tc-oppty-306-ticket-numbers-are-sequential-unique) | Ticket numbers are sequential & unique | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-307](#tc-oppty-307-pmo-raises-existing-project-not-managed) | pmo raises EXISTING (project not managed) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-308](#tc-oppty-308-pmo-raises-prospect-no-project) | pmo raises PROSPECT (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-309](#tc-oppty-309-csm-raises-existing-project-managed) | csm raises EXISTING (project managed) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-310](#tc-oppty-310-csm-raises-prospect-no-project) | csm raises PROSPECT (no project) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-311](#tc-oppty-311-csm-raises-existing-project-not-managed) | csm raises EXISTING (project not managed) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-312](#tc-oppty-312-csm-raises-existing-no-project) | csm raises EXISTING (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-313](#tc-oppty-313-pm-raises-existing-project-managed) | pm raises EXISTING (project managed) | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-314](#tc-oppty-314-pm-raises-prospect-no-project) | pm raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-315](#tc-oppty-315-tmqa-raises-prospect-no-project) | tmQA raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-316](#tc-oppty-316-em-raises-prospect-no-project) | em raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-317](#tc-oppty-317-rm-raises-prospect-no-project) | rm raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-318](#tc-oppty-318-emp-raises-prospect-no-project) | emp raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-319](#tc-oppty-319-admin-raises-prospect-no-project) | admin raises PROSPECT (no project) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-320](#tc-oppty-320-csm-raises-direct-for-own-project) | CSM raises DIRECT for own project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-321](#tc-oppty-321-pm-raises-direct-for-own-project) | PM raises DIRECT for own project | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-322](#tc-oppty-322-assignee-picker-pm-list-only-holds-pm-role-employees) | Assignee picker PM list only holds PM-role employees | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-323](#tc-oppty-323-assignee-picker-for-tm-em-csm-employee) | Assignee picker for TM/EM/CSM/Employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-324](#tc-oppty-324-assign-a-non-pm-as-assignedpm) | Assign a non-PM as assignedPm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-325](#tc-oppty-325-assign-a-non-csm-as-assignedcsm) | Assign a non-CSM as assignedCsm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-326](#tc-oppty-326-csm-tries-to-set-assignedcsm-on-create) | CSM tries to set assignedCsm on create | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-327](#tc-oppty-327-pmo-creates-prospect-assigned-to-pm-gaurav-csm-tarun) | PMO creates PROSPECT assigned to PM gaurav + CSM tarun | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-328](#tc-oppty-328-assigned-pm-can-open-the-assigned-opportunity) | Assigned PM can open the assigned opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-329](#tc-oppty-329-assigned-pm-sees-it-in-a-list-frd-7-5-list-view-of-assigned-opps) | Assigned PM sees it in a list (FRD §7.5 list view of assigned opps) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-330](#tc-oppty-330-assigned-csm-sees-it-on-board) | Assigned CSM sees it on board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-331](#tc-oppty-331-non-assigned-csm-sai-gandhi-cannot-open-it) | Non-assigned CSM (sai.gandhi) cannot open it | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-332](#tc-oppty-332-assignment-notification-to-assignee-frd-notif-18) | Assignment notification to assignee (FRD notif #18) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-333](#tc-oppty-333-pmo-re-assigns-pm-to-another-pm-frd-open-q) | PMO re-assigns PM to another PM (FRD open Q) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-334](#tc-oppty-334-csm-assigned-clears-assignedcsm-on-an-interview-opp) | CSM (assigned) clears assignedCsm on an INTERVIEW opp | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-335](#tc-oppty-335-csm-creates-interview-opp-for-own-project) | CSM creates INTERVIEW opp for own project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-336](#tc-oppty-336-csm-edits-own-interview-opp-title) | CSM edits own INTERVIEW opp title | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-337](#tc-oppty-337-csm-adds-a-position-to-own-interview-opp) | CSM adds a position to own INTERVIEW opp | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-338](#tc-oppty-338-csm-cancels-own-interview-ticket-cancelled-tag-frd-rule-22) | CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-339](#tc-oppty-339-tmqa-edits-a-pmo-opportunity) | tmQA edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-340](#tc-oppty-340-tmqa-changes-opportunity-status) | tmQA changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-341](#tc-oppty-341-em-edits-a-pmo-opportunity) | em edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-342](#tc-oppty-342-em-changes-opportunity-status) | em changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-343](#tc-oppty-343-rm-edits-a-pmo-opportunity) | rm edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-344](#tc-oppty-344-rm-changes-opportunity-status) | rm changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-345](#tc-oppty-345-pm-edits-a-pmo-opportunity) | pm edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-346](#tc-oppty-346-pm-changes-opportunity-status) | pm changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-347](#tc-oppty-347-emp-edits-a-pmo-opportunity) | emp edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-348](#tc-oppty-348-emp-changes-opportunity-status) | emp changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-349](#tc-oppty-349-admin-edits-a-pmo-opportunity) | admin edits a PMO opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-350](#tc-oppty-350-admin-changes-opportunity-status) | admin changes opportunity status | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-351](#tc-oppty-351-csm-changes-status-mark-lost-on-own-opp) | CSM changes status (mark Lost) on own opp | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-352](#tc-oppty-352-admin-java-dept-opp-200-qa-dept-opp-200) | admin: JAVA-dept opp 200, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-353](#tc-oppty-353-pmo-java-dept-opp-200-qa-dept-opp-200) | pmo: JAVA-dept opp 200, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-354](#tc-oppty-354-tmqa-java-dept-opp-404-qa-dept-opp-200) | tmQA: JAVA-dept opp 404, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-355](#tc-oppty-355-tmjava-java-dept-opp-200-qa-dept-opp-404) | tmJava: JAVA-dept opp 200, QA-dept opp 404 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-356](#tc-oppty-356-em-java-dept-opp-404-qa-dept-opp-200) | em: JAVA-dept opp 404, QA-dept opp 200 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-357](#tc-oppty-357-rm-java-dept-opp-404-qa-dept-opp-404) | rm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-358](#tc-oppty-358-emp-java-dept-opp-404-qa-dept-opp-404) | emp: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-359](#tc-oppty-359-csm-java-dept-opp-404-qa-dept-opp-404) | csm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-360](#tc-oppty-360-pm-java-dept-opp-404-qa-dept-opp-404) | pm: JAVA-dept opp 404, QA-dept opp 404 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-361](#tc-oppty-361-out-of-scope-id-returns-404-not-403-no-existence-leak) | Out-of-scope id returns 404 not 403 (no existence leak) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-362](#tc-oppty-362-board-summary-per-role-equals-distinct-opps-on-openings) | Board summary per role equals distinct opps on /openings | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-363](#tc-oppty-363-employee-view-team-forced-to-mine) | Employee view=TEAM forced to MINE | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-364](#tc-oppty-364-pm-without-view-board-calls-openings) | PM without view_board calls /openings | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-365](#tc-oppty-365-positions-returned-in-created-order-contract) | Positions returned in created order (contract) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-366](#tc-oppty-366-new-position-with-requiredcount-2-starts-with-2-cards-in-pending-to-shortlist-rule-13) | New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-367](#tc-oppty-367-stage-counts-reflect-new-cards) | Stage counts reflect new cards | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-368](#tc-oppty-368-preferred-candidate-flag-on-shortlist-frd-rule-14-glossary) | Preferred Candidate flag on shortlist (FRD rule 14, glossary) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-369](#tc-oppty-369-shortlist-same-employee-twice-in-one-request) | Shortlist same employee twice in one request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-370](#tc-oppty-370-shortlist-empty-list) | Shortlist empty list | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-371](#tc-oppty-371-tm-qa-shortlists-2-qa-candidates) | TM (QA) shortlists 2 QA candidates | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-372](#tc-oppty-372-re-shortlist-an-already-live-candidate) | Re-shortlist an already live candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-373](#tc-oppty-373-shortlist-beyond-headcount-3rd-candidate-for-2-openings) | Shortlist beyond headcount (3rd candidate for 2 openings) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-374](#tc-oppty-374-pmo-shortlists-a-java-dept-employee-on-the-qa-position) | PMO shortlists a JAVA-dept employee on the QA position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-375](#tc-oppty-375-em-shortlists-qa4) | EM shortlists qa4 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-376](#tc-oppty-376-rm-tries-to-shortlist) | rm tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-377](#tc-oppty-377-csm-tries-to-shortlist) | csm tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-378](#tc-oppty-378-emp-tries-to-shortlist) | emp tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-379](#tc-oppty-379-admin-tries-to-shortlist) | admin tries to shortlist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-380](#tc-oppty-380-pm-tries-to-shortlist-frd-7-5-pm-can-shortlist) | PM tries to shortlist (FRD §7.5: PM can shortlist) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-381](#tc-oppty-381-tm-java-shortlists-on-a-qa-only-position) | TM (JAVA) shortlists on a QA-only position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-382](#tc-oppty-382-tm-qa-sees-java-candidate-as-an-empty-seat) | TM (QA) sees JAVA candidate as an empty seat | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-383](#tc-oppty-383-tm-java-can-see-the-opportunity-because-a-java-candidate-is-nominated) | TM (JAVA) can see the opportunity because a JAVA candidate is nominated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-384](#tc-oppty-384-candidate-picker-excludes-already-live-candidates-for-the-position) | Candidate picker excludes already-live candidates for the position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-385](#tc-oppty-385-candidate-picker-min-max) | Candidate picker min>max | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-386](#tc-oppty-386-two-way-alert-shortlist-side-shows-direct-allocations-for-qa1) | Two-way alert: shortlist side shows direct allocations for qa1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-387](#tc-oppty-387-preferred-candidate-notification-to-tm-frd-notif-7) | Preferred-candidate notification to TM (FRD notif #7) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-388](#tc-oppty-388-tm-approves-without-request) | TM approves without request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-389](#tc-oppty-389-tm-sends-em-s-pick-qa4-for-approval) | TM sends EM's pick (qa4) for approval | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-390](#tc-oppty-390-tm-sends-own-pick-qa1-for-approval) | TM sends own pick qa1 for approval | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-391](#tc-oppty-391-send-same-candidate-twice) | Send same candidate twice | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-392](#tc-oppty-392-requester-tm-approves-own-request) | Requester TM approves own request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-393](#tc-oppty-393-tm-sent-request-who-approves-frd-rule-19-tm-approval-is-final) | TM-sent request: who approves? (FRD rule 19: TM Approval is final) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-394](#tc-oppty-394-approved-candidate-in-process-blocked-being-prepared-rounds-seeded) | Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-395](#tc-oppty-395-pmo-sends-qa2-tm-java-tries-to-approve-a-qa-candidate) | PMO sends qa2; TM (JAVA) tries to approve a QA candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-396](#tc-oppty-396-em-tries-to-approve-em-never-approves) | EM tries to approve (EM never approves) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-397](#tc-oppty-397-tm-qa-approves-pmo-sent-qa2) | TM (QA) approves PMO-sent qa2 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-398](#tc-oppty-398-double-approve-already-approved) | Double approve (already approved) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-399](#tc-oppty-399-pmo-sends-java-candidate-tm-java-approves-candidate-s-department) | PMO sends JAVA candidate; TM (JAVA) approves (candidate's department) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-400](#tc-oppty-400-withdraw-by-non-requester-tm) | Withdraw by non-requester TM | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-401](#tc-oppty-401-pmo-withdraws-own-request-back-to-shortlisted) | PMO withdraws own request → back to SHORTLISTED | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-402](#tc-oppty-402-withdraw-when-nothing-pending) | Withdraw when nothing pending | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-403](#tc-oppty-403-tm-tries-bypass) | TM tries bypass | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-404](#tc-oppty-404-bypass-reason-1025-chars) | Bypass reason 1025 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-405](#tc-oppty-405-pmo-bypasses-tm-approval-for-qa3-not-sent) | PMO bypasses TM approval for qa3 (not sent) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-406](#tc-oppty-406-bypass-without-reason) | Bypass without reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-407](#tc-oppty-407-remove-an-in-process-nomination-via-delete) | Remove an IN_PROCESS nomination via DELETE | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-408](#tc-oppty-408-remove-considered-qa4-no-reason-asked) | Remove CONSIDERED qa4 (no reason asked) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-409](#tc-oppty-409-reject-without-reason) | Reject without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-410](#tc-oppty-410-reject-with-whitespace-reason) | Reject with whitespace reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-411](#tc-oppty-411-tm-passes-rejectedbyrole) | TM passes rejectedByRole | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-412](#tc-oppty-412-tm-rejects-in-process-qa3-slot-back-to-pending-to-shortlist-rule-6) | TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-413](#tc-oppty-413-rejected-appears-in-rejected-column-with-reason-role) | Rejected appears in Rejected column with reason & role | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-414](#tc-oppty-414-rejected-candidate-nominated-for-a-different-position-in-same-opp-rule-6) | Rejected candidate nominated for a different position in same opp (rule 6) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-415](#tc-oppty-415-rejected-candidate-re-nominated-on-the-same-position) | Rejected candidate re-nominated on the SAME position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-416](#tc-oppty-416-action-on-a-rejected-historical-nomination-id) | Action on a REJECTED (historical) nomination id | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-417](#tc-oppty-417-tm-drags-a-card) | TM drags a card | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-418](#tc-oppty-418-drag-to-waiting-for-approval) | Drag to WAITING_FOR_APPROVAL | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-419](#tc-oppty-419-drag-to-won-directly) | Drag to WON directly | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-420](#tc-oppty-420-skip-2-columns-being-prepared-waiting-for-feedback-without-confirm) | Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-421](#tc-oppty-421-drag-being-prepared-interview-scheduled-when-no-round-has-a-date) | Drag Being Prepared → Interview Scheduled when no round has a date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-422](#tc-oppty-422-drag-backwards-to-shortlisted) | Drag backwards to SHORTLISTED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-423](#tc-oppty-423-drag-backwards-interview-scheduled-being-prepared) | Drag backwards Interview Scheduled → Being Prepared | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-424](#tc-oppty-424-drag-an-empty-pending-card) | Drag an empty (Pending) card | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-425](#tc-oppty-425-candidate-janki-opens-own-opportunity-my-opportunity) | Candidate (janki) opens own opportunity (My Opportunity) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-426](#tc-oppty-426-candidate-ticks-2-items-out-of-order-frd-any-order) | Candidate ticks 2 items out of order (FRD: any order) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-427](#tc-oppty-427-candidate-ticks-an-unknown-code) | Candidate ticks an unknown code | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-428](#tc-oppty-428-candidate-tries-to-skip-an-item) | Candidate tries to skip an item | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-429](#tc-oppty-429-pmo-marks-item-skipped-by-pmo) | PMO marks item "Skipped by PMO" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-430](#tc-oppty-430-candidate-ticks-a-pmo-skipped-item) | Candidate ticks a PMO-skipped item | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-431](#tc-oppty-431-candidate-edits-another-candidate-s-checklist) | Candidate edits another candidate's checklist | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-432](#tc-oppty-432-tm-ticks-a-team-member-s-checklist-read-only-per-matrix) | TM ticks a team member's checklist (read-only per matrix) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-433](#tc-oppty-433-unrelated-employee-kashyap-opens-the-opportunity) | Unrelated employee (kashyap) opens the opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-434](#tc-oppty-434-add-round-3-with-no-title-defaults-frd-round-3) | Add round 3 with no title → defaults (FRD "Round 3") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-435](#tc-oppty-435-tm-adds-a-round) | TM adds a round | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-436](#tc-oppty-436-round-on-considered-nomination) | Round on CONSIDERED nomination | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-437](#tc-oppty-437-round-interviewer-201-chars) | Round interviewer 201 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-438](#tc-oppty-438-round-scheduledat-invalid) | Round scheduledAt invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-439](#tc-oppty-439-schedule-r1-in-future-finalize-lock) | Schedule R1 in future + finalize (lock) | Pre-sales Opportunities | functional | high |
| [TC-OPPTY-440](#tc-oppty-440-change-finalized-r1-date-rule-17-lock) | Change finalized R1 date (rule 17 lock) | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-441](#tc-oppty-441-un-finalize-r1) | Un-finalize R1 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-442](#tc-oppty-442-card-auto-moves-to-interview-scheduled-when-a-round-is-dated) | Card auto-moves to Interview Scheduled when a round is dated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-443](#tc-oppty-443-mark-future-dated-r1-cleared) | Mark future-dated R1 Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-444](#tc-oppty-444-mark-undated-r2-cleared) | Mark undated R2 Cleared | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-445](#tc-oppty-445-r2-dated-yesterday-cleared-without-recording-frd-recording-optional) | R2 dated yesterday → Cleared without recording (FRD: recording optional) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-446](#tc-oppty-446-recording-url-invalid) | Recording URL invalid | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-447](#tc-oppty-447-feedback-4097-chars) | Feedback 4097 chars | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-448](#tc-oppty-448-delete-a-decided-round) | Delete a decided round | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-449](#tc-oppty-449-delete-pending-round-3-renumber) | Delete pending round 3 → renumber | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-450](#tc-oppty-450-candidate-vandana-sees-round-feedback) | Candidate (vandana) sees round feedback? | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-451](#tc-oppty-451-did-the-interview-happen-yes-waiting-for-feedback) | "Did the interview happen?" — Yes → Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-452](#tc-oppty-452-edit-allocation-with-live-candidates) | Edit allocation % with live candidates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-453](#tc-oppty-453-resend-unchanged-allocation) | Resend unchanged allocation % | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-454](#tc-oppty-454-edit-tech-stack-after-shortlisting-rule-18-tm-re-review-notification) | Edit tech stack after shortlisting (rule 18 → TM re-review notification) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-455](#tc-oppty-455-reduce-requiredcount-to-1-cards-with-candidates-kept) | Reduce requiredCount to 1 (cards with candidates kept) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-456](#tc-oppty-456-delete-position-with-in-process-candidate) | Delete position with IN_PROCESS candidate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-457](#tc-oppty-457-round-skip-select-qa1-from-being-prepared-without-confirm) | Round-skip: select qa1 from Being Prepared without confirm | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-458](#tc-oppty-458-tm-selects-won) | TM selects (Won) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-459](#tc-oppty-459-select-qa2-from-waiting-for-feedback) | Select qa2 from Waiting for Feedback | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-460](#tc-oppty-460-approve-while-another-opening-is-in-process-opp-047-same-employee) | Approve while another opening is In Process (OPP_047 same employee) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-461](#tc-oppty-461-allocate-with-above-remaining-capacity) | Allocate with % above remaining capacity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-462](#tc-oppty-462-allocate-bad-body-fixed-without) | Allocate bad body (FIXED without %) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-463](#tc-oppty-463-tm-csm-allocate) | TM / CSM allocate | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-464](#tc-oppty-464-pmo-allocates-won-qa2-project-allocated-born-approved-allocation-ticket) | PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-465](#tc-oppty-465-allocate-the-same-nomination-again) | Allocate the same nomination again | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-466](#tc-oppty-466-allocation-ticket-visible-in-allocation-tickets-module) | Allocation ticket visible in allocation tickets module | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-467](#tc-oppty-467-two-way-alert-now-lists-the-upcoming-allocation-for-qa2) | Two-way alert now lists the upcoming allocation for qa2 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-468](#tc-oppty-468-unlink-project-after-allocation) | Unlink project after allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-469](#tc-oppty-469-same-status-as-current) | Same status as current | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-470](#tc-oppty-470-on-hold-pipeline-actions-blocked) | ON_HOLD → pipeline actions blocked | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-471](#tc-oppty-471-on-hold-candidate-checklist-edit) | ON_HOLD: candidate checklist edit | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-472](#tc-oppty-472-on-hold-cards-move-to-on-hold-column) | ON_HOLD cards move to On Hold column | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-473](#tc-oppty-473-reopen-on-hold-open) | Reopen ON_HOLD → OPEN | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-474](#tc-oppty-474-concurrent-double-request-approval-on-same-nomination) | Concurrent double request-approval on same nomination | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-475](#tc-oppty-475-concurrent-shortlist-of-same-employee-by-2-pmos) | Concurrent shortlist of same employee by 2 PMOs | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-476](#tc-oppty-476-mark-opportunity-won-in-process-selected-awaiting-approval-removed) | Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-477](#tc-oppty-477-mark-lost-candidates-released-unblocked-hidden-from-default-board) | Mark LOST → candidates RELEASED & unblocked; hidden from default board | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-478](#tc-oppty-478-lost-notification-to-raiser-tm-frd-notif-15) | Lost notification to raiser/TM (FRD notif #15) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-479](#tc-oppty-479-reopen-lost-open-removes-released-candidates) | Reopen LOST → OPEN removes released candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-480](#tc-oppty-480-nlr-without-confirmation) | NLR without confirmation | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-481](#tc-oppty-481-nlr-with-confirmation) | NLR with confirmation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-482](#tc-oppty-482-reopen-nlr-open-rule-17-reversible) | Reopen NLR → OPEN (rule 17: reversible)  | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-483](#tc-oppty-483-re-initiate-without-reason) | Re-initiate without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-484](#tc-oppty-484-tm-re-initiates) | TM re-initiates | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-485](#tc-oppty-485-pmo-re-initiates-p2-all-non-allocated-released-cards-back-to-pending) | PMO re-initiates P2 → all non-allocated released, cards back to Pending | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-486](#tc-oppty-486-re-initiate-when-nothing-to-release) | Re-initiate when nothing to release | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-487](#tc-oppty-487-stage-count-total-equals-openings-total-for-this-opp) | Stage-count total equals /openings total for this opp | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-488](#tc-oppty-488-search-by-readable-position-id-displayid) | Search by readable position id (displayId) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-489](#tc-oppty-489-search-with-sql-wildcard-does-not-match-everything) | Search with SQL wildcard % does not match everything | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-490](#tc-oppty-490-limit-50-not-allowed) | limit=50 (not allowed) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-491](#tc-oppty-491-createdfrom-createdto) | createdFrom > createdTo | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-492](#tc-oppty-492-employee-opportunity-history-for-qa1-frd-change-list) | Employee opportunity history for qa1 (FRD change list) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-493](#tc-oppty-493-employee-list-carries-interviewopportunities-for-qa1) | Employee list carries interviewOpportunities for qa1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-494](#tc-oppty-494-bypass-being-prepared-remaining-allocation-reserves-40) | Bypass → Being Prepared; remaining allocation reserves 40% | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-495](#tc-oppty-495-candidate-picker-shows-the-blocked-reservation-too) | Candidate picker shows the blocked reservation too | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-496](#tc-oppty-496-date-r1-yesterday-card-goes-to-interview-scheduled-not-auto-to-waiting-for-feedback) | Date R1 yesterday → card goes to Interview Scheduled (not auto to Waiting for Feedback) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-497](#tc-oppty-497-did-the-interview-happen-yes-waiting-for-feedback) | "Did the interview happen?" Yes → Waiting for Feedback | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-498](#tc-oppty-498-r1-not-cleared-select-without-confirmation-is-refused-round-skip-safeguard) | R1 Not Cleared → select without confirmation is refused (round-skip safeguard) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-499](#tc-oppty-499-select-with-confirmation-frd-rule-20-skip-dialog) | Select with confirmation (FRD rule 20 skip dialog) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-500](#tc-oppty-500-after-select-won-selected-filled-1-1) | After select: WON, SELECTED, filled 1/1 | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-501](#tc-oppty-501-won-elsewhere-notification-to-pmo-frd-change-list) | Won-elsewhere notification to PMO (FRD change list) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-502](#tc-oppty-502-allocate-fixed-without) | Allocate FIXED without %  | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-503](#tc-oppty-503-allocate-end-before-start) | Allocate end before start | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-504](#tc-oppty-504-allocate-with-101) | Allocate with 101% | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-505](#tc-oppty-505-allocate-with-a-different-than-the-position-40-60) | Allocate with a different % than the position (40 → 60) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-506](#tc-oppty-506-pmo-allocates-project-allocated-allocation-ticket) | PMO allocates → Project Allocated + allocation ticket | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-507](#tc-oppty-507-allocation-ticket-in-allocation-requests-born-approved) | Allocation ticket in Allocation Requests (born approved) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-508](#tc-oppty-508-interview-allocation-tab-in-requests-tracking-lists-it) | Interview Allocation tab in Requests Tracking lists it | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-509](#tc-oppty-509-two-way-alert-lists-the-new-upcoming-allocation) | Two-way alert lists the new upcoming allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-510](#tc-oppty-510-remaining-allocation-after-allocation-reservation-released-booking-counted) | Remaining allocation after allocation (reservation released, booking counted) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-511](#tc-oppty-511-unlink-project-after-allocation) | Unlink project after allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-512](#tc-oppty-512-change-project-after-allocation) | Change project after allocation | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-513](#tc-oppty-513-drag-project-allocated-card-backwards) | Drag Project Allocated card backwards | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-514](#tc-oppty-514-mark-opportunity-lost-after-a-candidate-is-project-allocated) | Mark Opportunity LOST after a candidate is Project Allocated | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-515](#tc-oppty-515-reopen-after-lost-allocated-card-intact) | Reopen after LOST: allocated card intact? | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-516](#tc-oppty-516-re-initiate-position-that-has-a-project-allocated-seat) | Re-initiate position that has a Project Allocated seat | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-517](#tc-oppty-517-employee-profile-history-lists-the-allocated-opportunity) | Employee profile history lists the allocated opportunity | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-518](#tc-oppty-518-candidate-akash-pandya-sees-own-history-self) | Candidate (akash.pandya) sees own history (self) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-519](#tc-oppty-519-another-employee-reads-akash-s-history-idor) | Another employee reads akash's history (IDOR) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-520](#tc-oppty-520-employee-list-interview-opportunities-column-pmo) | Employee list Interview opportunities column (PMO) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-521](#tc-oppty-521-employee-list-column-for-a-tm-can-read-opportunities) | Employee list column for a TM (can read opportunities) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-522](#tc-oppty-522-direct-without-employee) | DIRECT without employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-523](#tc-oppty-523-direct-without-tentative-allocation-date) | DIRECT without tentative allocation date | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-524](#tc-oppty-524-direct-with-requiredcount-2) | DIRECT with requiredCount 2 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-525](#tc-oppty-525-direct-with-round-titles) | DIRECT with round titles | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-526](#tc-oppty-526-direct-with-isinterviewrequired-true) | DIRECT with isInterviewRequired true | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-527](#tc-oppty-527-direct-with-prep-material) | DIRECT with prep material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-528](#tc-oppty-528-direct-with-unknown-employee) | DIRECT with unknown employee | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-529](#tc-oppty-529-same-employee-on-two-positions-of-one-direct-request) | Same employee on two positions of one DIRECT request | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-530](#tc-oppty-530-interviewerlinkedinurl-ignored-on-direct) | interviewerLinkedinUrl ignored on DIRECT | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-531](#tc-oppty-531-priority-derived-from-allocation-date-3d-high-10d-medium-30d-low-sent-value-ignored) | Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-532](#tc-oppty-532-frd-rule-9-aging-priority-1-week-open-high-vs-build-allocation-date-based) | FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-533](#tc-oppty-533-direct-ticket-starts-open-with-the-employee-nominated) | Direct ticket starts OPEN with the employee nominated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-534](#tc-oppty-534-interview-action-on-a-direct-ticket) | Interview action on a DIRECT ticket | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-535](#tc-oppty-535-csm-raiser-moves-direct-stage) | CSM (raiser) moves Direct stage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-536](#tc-oppty-536-tm-moves-direct-stage) | TM moves Direct stage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-537](#tc-oppty-537-pmo-skips-open-awaiting) | PMO skips OPEN → AWAITING | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-538](#tc-oppty-538-pmo-open-in-review) | PMO OPEN → IN_REVIEW | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-539](#tc-oppty-539-move-backwards-in-review-open) | Move backwards IN_REVIEW → OPEN | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-540](#tc-oppty-540-owner-csm-swaps-the-employee-while-in-review) | Owner (CSM) swaps the employee while IN_REVIEW | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-541](#tc-oppty-541-owner-sets-tentativeallocationdate-null) | Owner sets tentativeAllocationDate null | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-542](#tc-oppty-542-non-owner-csm-sai-gandhi-edits) | Non-owner CSM (sai.gandhi) edits | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-543](#tc-oppty-543-pmo-in-review-awaiting) | PMO IN_REVIEW → AWAITING | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-544](#tc-oppty-544-owner-swaps-employee-while-awaiting) | Owner swaps employee while AWAITING | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-545](#tc-oppty-545-two-way-alert-allocation-side-employee-in-interview-opps) | Two-way alert (allocation side): employee in interview opps | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-546](#tc-oppty-546-two-way-alert-as-csm-raiser) | Two-way alert as CSM (raiser) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-547](#tc-oppty-547-pmo-awaiting-approved-allocates-at-once-start-tentative-date-30) | PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%) | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-548](#tc-oppty-548-direct-tab-in-requests-tracking-lists-the-allocation-ticket) | Direct tab in Requests Tracking lists the allocation ticket | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-549](#tc-oppty-549-approved-is-terminal) | APPROVED is terminal | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-550](#tc-oppty-550-owner-edits-after-approved) | Owner edits after APPROVED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-551](#tc-oppty-551-cancel-tag-after-approved) | Cancel tag after APPROVED | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-552](#tc-oppty-552-reject-without-reason) | Reject without reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-553](#tc-oppty-553-reject-reason-1025) | Reject reason 1025 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-554](#tc-oppty-554-reject-from-open-with-reason) | Reject from OPEN with reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-555](#tc-oppty-555-rejected-is-terminal-move-to-in-review) | REJECTED is terminal (move to IN_REVIEW) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-556](#tc-oppty-556-tm-tries-to-cancel) | TM tries to cancel | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-557](#tc-oppty-557-cancel-reason-1025) | Cancel reason 1025 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-558](#tc-oppty-558-csm-cancels-without-a-reason-frd-open-q-is-reason-required) | CSM cancels without a reason (FRD open Q: is reason required?) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-559](#tc-oppty-559-csm-cancels-tag-added-stage-unchanged-in-review) | CSM cancels: tag added, stage unchanged (IN_REVIEW) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-560](#tc-oppty-560-cancel-again) | Cancel again | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-561](#tc-oppty-561-pmo-notified-of-cancellation-from-stage-frd-notif-19) | PMO notified of cancellation from stage (FRD notif #19) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-562](#tc-oppty-562-pmo-moves-a-cancelled-ticket-guide-says-pmo-may-still-move-it) | PMO moves a cancelled ticket (guide says PMO may still move it) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-563](#tc-oppty-563-iscancelled-true-filter-returns-the-tagged-ticket) | isCancelled=true filter returns the tagged ticket | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-564](#tc-oppty-564-pmo-closes-cancelled-ticket-no-longer-required) | PMO closes cancelled ticket → No Longer Required | Pre-sales Opportunities | smoke | high |
| [TC-OPPTY-565](#tc-oppty-565-board-default-hides-nlr-direct-tickets) | Board default hides NLR Direct tickets | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-566](#tc-oppty-566-prospect-direct-no-project-created-by-csm) | Prospect Direct (no project) created by CSM | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-567](#tc-oppty-567-approved-not-offered-without-a-project) | APPROVED not offered without a project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-568](#tc-oppty-568-force-approved-without-project) | Force APPROVED without project | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-569](#tc-oppty-569-csm-links-own-project-prospect-becomes-existing) | CSM links own project → Prospect becomes Existing | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-570](#tc-oppty-570-csm-links-a-project-it-does-not-manage) | CSM links a project it does not manage | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-571](#tc-oppty-571-csm-unlinks-project-on-existing) | CSM unlinks project on EXISTING | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-572](#tc-oppty-572-approved-with-allocation-unconfirmed-selected-not-allocated) | APPROVED with allocation unconfirmed → selected, not allocated | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-573](#tc-oppty-573-confirm-allocation-later-patch-isallocationconfirmed-true) | Confirm allocation later (PATCH isAllocationConfirmed:true) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-574](#tc-oppty-574-direct-ticket-for-a-fully-booked-employee-is-accepted-at-create-warning-only) | Direct ticket for a fully-booked employee is accepted at create (warning only?) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-575](#tc-oppty-575-approved-for-fully-booked-employee-capacity-error-passes-through) | APPROVED for fully-booked employee → capacity error passes through | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-576](#tc-oppty-576-direct-stage-counts-total-equals-direct-list-total) | direct-stage-counts total equals Direct list total | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-577](#tc-oppty-577-direct-summary-requesttype-direct-vs-list) | Direct summary (requestType=DIRECT) vs list | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-578](#tc-oppty-578-direct-tickets-do-not-leak-into-the-interview-board) | Direct tickets do not leak into the Interview board | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-579](#tc-oppty-579-csm-sees-own-direct-tickets-only) | CSM sees own Direct tickets only | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-580](#tc-oppty-580-tm-sees-direct-tickets-of-own-department-view-only) | TM sees Direct tickets of own department (view only) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-581](#tc-oppty-581-tm-adds-prep-material) | TM adds prep material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-582](#tc-oppty-582-em-adds-prep-material-frd-7-4-em-standardises-question-banks) | EM adds prep material (FRD §7.4: EM standardises question banks) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-583](#tc-oppty-583-assigned-pm-adds-prep-material-on-top-of-pmo-s-frd-7-5) | Assigned PM adds prep material on top of PMO's (FRD §7.5) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-584](#tc-oppty-584-tm-edits-pmo-s-material) | TM edits PMO's material | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-585](#tc-oppty-585-candidate-employee-adds-prep-material) | Candidate (employee) adds prep material | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-586](#tc-oppty-586-prep-material-url-javascript) | Prep material URL javascript: | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-587](#tc-oppty-587-prep-material-title-201) | Prep material title 201 | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-588](#tc-oppty-588-duplicate-url-twice-on-one-position) | Duplicate URL twice on one position | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-589](#tc-oppty-589-prep-material-cap) | Prep material cap | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-590](#tc-oppty-590-patch-title-null-required) | PATCH title null (required) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-591](#tc-oppty-591-patch-websiteurl-not-a-clear-per-contract) | PATCH websiteUrl "" (not a clear per contract) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-592](#tc-oppty-592-patch-unknown-key) | PATCH unknown key | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-593](#tc-oppty-593-patch-requesttype-fixed-at-create) | PATCH requestType (fixed at create) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-594](#tc-oppty-594-switch-existing-prospect-unlinks-project) | Switch EXISTING → PROSPECT unlinks project | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-595](#tc-oppty-595-edit-history-change-log-frd-8-full-change-log-recent-edits-highlighted) | Edit history / change log (FRD §8: full change log, recent edits highlighted) | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-596](#tc-oppty-596-pmo-edits-a-lost-opportunity) | PMO edits a LOST opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-597](#tc-oppty-597-add-position-to-a-lost-opportunity) | Add position to a LOST opportunity | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-598](#tc-oppty-598-delete-the-last-position) | Delete the last position | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-599](#tc-oppty-599-delete-a-position-that-has-only-considered-candidates-candidates-notified) | Delete a position that has only CONSIDERED candidates → candidates notified? | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-600](#tc-oppty-600-add-position-requiredcount-21-via-patch) | Add position requiredCount 21 via PATCH | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-601](#tc-oppty-601-raise-requiredcount-1-4-appends-3-empty-cards) | Raise requiredCount 1 → 4 appends 3 empty cards | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-602](#tc-oppty-602-shortlist-shortfall-data-frd-warn-when-fewer-shortlisted-than-needed) | Shortlist shortfall data (FRD: warn when fewer shortlisted than needed) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-603](#tc-oppty-603-candidate-ticks-checklist-while-interview-scheduled) | Candidate ticks checklist while Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-604](#tc-oppty-604-pmo-ticks-on-candidate-s-behalf-at-any-stage) | PMO ticks on candidate's behalf at any stage | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-605](#tc-oppty-605-pending-checklist-does-not-block-scheduling-frd-change-list) | Pending checklist does not block scheduling (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-606](#tc-oppty-606-send-reminder-frd-7-5-endpoint-exists) | Send Reminder (FRD §7.5) endpoint exists | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-607](#tc-oppty-607-rm-of-the-candidate-unknown-sees-the-card-team-scope) | RM of the candidate (unknown) sees the card (TEAM scope) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-608](#tc-oppty-608-rm-shortlists-matrix-no) | RM shortlists (matrix: no) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-609](#tc-oppty-609-title-with-html-is-stored-raw-ui-must-escape) | Title with HTML is stored raw (UI must escape) | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-610](#tc-oppty-610-unauthenticated-board-read) | Unauthenticated board read | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-611](#tc-oppty-611-non-uuid-id-in-path) | Non-uuid id in path | Pre-sales Opportunities | security | medium |
| [TC-OPPTY-612](#tc-oppty-612-opportunity-allocation-nav-entry-per-role) | "Opportunity Allocation" nav entry per role | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-613](#tc-oppty-613-pm-can-find-the-opportunities-assigned-to-them-frd-7-5-list-view-with-interview-direct-flag) | PM can find the opportunities assigned to them (FRD §7.5 list view with Interview/Direct flag) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-614](#tc-oppty-614-pm-opens-pre-sales-new-by-url) | PM opens /pre-sales/new by URL | Pre-sales Opportunities | negative | high |
| [TC-OPPTY-615](#tc-oppty-615-new-opportunities-button-visibility) | "New Opportunities" button visibility | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-616](#tc-oppty-616-my-team-opportunity-tabs-frd-change-list) | My / Team Opportunity tabs (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-617](#tc-oppty-617-admin-view-only-banner-frd-7-1) | Admin view-only banner (FRD §7.1) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-618](#tc-oppty-618-drag-handles-only-for-pmo-rule-21) | Drag handles only for PMO (rule 21) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-619](#tc-oppty-619-column-order-and-names) | Column order and names | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-620](#tc-oppty-620-readable-ticket-id-shown-frd-change-list-e-g-gl-fe-112) | Readable ticket ID shown (FRD change list, e.g. "GL-FE-112") | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-621](#tc-oppty-621-created-date-filter-presets-rule-7) | Created-date filter presets (rule 7) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-622](#tc-oppty-622-no-longer-required-highlight-glossary) | No Longer Required highlight (glossary) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-623](#tc-oppty-623-summary-tiles-vs-board) | Summary tiles vs board | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-624](#tc-oppty-624-client-facing-field-removed-frd-change-list) | "Client Facing" field removed (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-625](#tc-oppty-625-interview-vs-direct-switch-changes-the-fields) | Interview vs Direct switch changes the fields | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-626](#tc-oppty-626-empty-submit-shows-clear-errors-on-every-missing-required-field) | Empty submit shows clear errors on every missing required field | Pre-sales Opportunities | negative | low |
| [TC-OPPTY-627](#tc-oppty-627-interviewer-linkedin-placeholder) | Interviewer LinkedIn placeholder | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-628](#tc-oppty-628-tabs-full-ticket-info-frd-change-list) | Tabs + full ticket info (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-629](#tc-oppty-629-redirect-arrow-to-employee-details-on-each-row-frd-change-list) | Redirect arrow to employee details on each row (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-630](#tc-oppty-630-shortlist-shortfall-warning-frd-change-list) | Shortlist shortfall warning (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-631](#tc-oppty-631-shortlisting-drawer-availability-date-utilization-priority-key-skills-shift-current-allocations-visa-profile-link) | Shortlisting Drawer (Availability Date, Utilization Priority, Key Skills, Shift, Current Allocations, Visa, profile link) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-632](#tc-oppty-632-interview-opportunities-column-frd-change-list) | "Interview Opportunities" column (FRD change list) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-633](#tc-oppty-633-opportunity-history-on-employee-profile) | Opportunity history on employee profile | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-634](#tc-oppty-634-candidate-opens-own-opportunity) | Candidate opens own opportunity | Pre-sales Opportunities | security | low |
| [TC-OPPTY-635](#tc-oppty-635-personal-read-mostly-kanban-of-own-allocations-rule-4-7-7) | Personal read-mostly Kanban of own allocations (rule 4, §7.7) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-636](#tc-oppty-636-empty-values-house-rule) | Empty values (house rule) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-637](#tc-oppty-637-pm-shortlists-on-an-opportunity-assigned-to-him-opp-0042) | PM shortlists on an opportunity assigned to him (OPP-0042) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-638](#tc-oppty-638-pm-shortlists-on-an-opportunity-on-his-own-project-opp-0039) | PM shortlists on an opportunity on his own project (OPP-0039) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-639](#tc-oppty-639-pm-cannot-shortlist-on-an-opportunity-outside-his-scope) | PM cannot shortlist on an opportunity outside his scope | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-640](#tc-oppty-640-change-project-on-opp-0054-candidate-already-allocated) | Change project on OPP-0054 (candidate already allocated) | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-641](#tc-oppty-641-unlink-project-on-opp-0054) | Unlink project on OPP-0054 | Pre-sales Opportunities | negative | medium |
| [TC-OPPTY-642](#tc-oppty-642-project-still-editable-on-an-opportunity-with-no-allocation) | Project still editable on an opportunity with no allocation | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-643](#tc-oppty-643-pm-notified-of-assignment-opp-0126) | PM notified of assignment (OPP-0126) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-644](#tc-oppty-644-csm-notified-of-assignment-opp-0126) | CSM notified of assignment (OPP-0126) | Pre-sales Opportunities | integration | medium |
| [TC-OPPTY-645](#tc-oppty-645-approve-an-employee-already-in-process-on-another-opportunity) | Approve an employee already In Process on another opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-646](#tc-oppty-646-rejected-candidate-gets-a-candidate-facing-message-with-reason) | Rejected candidate gets a candidate-facing message with reason | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-647](#tc-oppty-647-em-new-position-notifications-only-for-multi-department-positions) | EM "New position" notifications only for multi-department positions | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-648](#tc-oppty-648-requests-tracking-interview-tab-tiles-keep-lost-and-nlr-apart) | Requests Tracking Interview tab tiles keep Lost and NLR apart | Pre-sales Opportunities | integration | low |
| [TC-OPPTY-649](#tc-oppty-649-pm-s-direct-allocation-tab-shows-his-open-direct-opportunity-opp-0041) | PM's Direct Allocation tab shows his open Direct opportunity OPP-0041 | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-650](#tc-oppty-650-positions-returned-in-created-order-5-repeats) | Positions returned in created order (5 repeats) | Pre-sales Opportunities | functional | low |
| [TC-OPPTY-651](#tc-oppty-651-api-drag-interview-scheduled-being-prepared-still-clears-the-date-ui-now-confirms-first) | API: drag Interview Scheduled → Being Prepared still clears the date (UI now confirms first) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-652](#tc-oppty-652-round-dated-yesterday-card-in-did-interview-happen-stage-counts-has-the-key) | Round dated yesterday → card in "Did Interview Happen"; stage-counts has the key | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-653](#tc-oppty-653-pmo-cannot-drag-a-card-into-did-interview-happen) | PMO cannot drag a card into "Did Interview Happen" | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-654](#tc-oppty-654-rescheduling-to-a-future-day-moves-the-card-back-to-interview-scheduled) | Rescheduling to a future day moves the card back to Interview Scheduled | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-655](#tc-oppty-655-confirming-the-interview-happened-moves-the-card-to-waiting-for-feedback-one-step) | Confirming the interview happened moves the card to Waiting for Feedback (one step) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-656](#tc-oppty-656-pm-sees-an-opportunity-on-his-project-that-is-not-assigned-to-him-opp-0150) | PM sees an opportunity on his project that is NOT assigned to him (OPP-0150) | Pre-sales Opportunities | functional | medium |
| [TC-OPPTY-657](#tc-oppty-657-approve-an-employee-already-allocated-elsewhere-akash-pandya-40-via-na-0416-for-50) | Approve an employee already allocated elsewhere (Akash Pandya, 40% via NA-0416) for 50% | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-658](#tc-oppty-658-approve-a-fully-booked-employee-nisha-das-0-remaining-for-50) | Approve a fully booked employee (Nisha Das, 0% remaining) for 50% | Pre-sales Opportunities | boundary | medium |
| [TC-OPPTY-659](#tc-oppty-659-rejection-notification-goes-only-to-the-rejected-candidate-not-other-candidates) | Rejection notification goes only to the rejected candidate (not other candidates) | Pre-sales Opportunities | integration | medium |

---

## Pre-sales Opportunities

459 test cases.

### Boundary (37)

#### TC-OPPTY-205 — Title exactly 200 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0073 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title exactly 200 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-206 — Title 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title 201 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-213 — clientName exactly 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0075 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientName exactly 200
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-214 — clientName 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientName 201
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-220 — websiteUrl 2049 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be shorter than or equal to 2048 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: websiteUrl 2049 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-223 — prospectContact 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"prospectContact","message":"prospectContact must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prospectContact 201
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-224 — prospectNotes 4096

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0077 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prospectNotes 4096
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-225 — prospectNotes 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"prospectNotes","message":"prospectNotes must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prospectNotes 4097
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-226 — specialInstructions 4096

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0078 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: specialInstructions 4096
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-227 — specialInstructions 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"specialInstructions","message":"specialInstructions must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: specialInstructions 4097
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-229 — jobDescription has no max length (100k chars)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"jobDescription","message":"jobDescription must be shorter than or equal to 50000 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: jobDescription has no max length (100k chars)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Should be capped (FRD silent) — record behaviour

**Test Data**

- `checkId`: VAL-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-239 — Position title 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Position title 201
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-241 — techStacks item 101 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"each value in techStacks must be shorter than or equal to 100 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: techStacks item 101 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-251 — requiredCount 21

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be greater than 20"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount 21
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-252 — requiredCount 1.5

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must be a whole number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount 1.5
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-254 — requiredCount 20 → 20 opening cards

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0086 openings=20 ordinals=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount 20 → 20 opening cards
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + 20 openings, ordinals 1..20

**Test Data**

- `checkId`: VAL-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-264 — FIXED 50.5%

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must be an integer number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: FIXED 50.5%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-064

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-269 — tentativeAllocationDate bad format (21/10/2026)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.tentativeAllocationDate","message":"tentativeAllocationDate must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: tentativeAllocationDate bad format (21/10/2026)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-069

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-280 — roundTitles 50

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0091 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: roundTitles 50
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-080

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-281 — roundTitles 51

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.roundTitles","message":"roundTitles must contain no more than 50 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: roundTitles 51
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-081

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-282 — roundTitles item 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.roundTitles","message":"each value in roundTitles must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: roundTitles item 201 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-082

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-284 — note 4097

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.note","message":"note must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: note 4097
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-084

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-352 — admin: JAVA-dept opp 200, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Admin: admin: JAVA-dept opp 200, QA-dept opp 200
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200/200

**Test Data**

- `checkId`: RBAC-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-353 — pmo: JAVA-dept opp 200, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: pmo: JAVA-dept opp 200, QA-dept opp 200
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200/200

**Test Data**

- `checkId`: RBAC-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-354 — tmQA: JAVA-dept opp 404, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM (QA): tmQA: JAVA-dept opp 404, QA-dept opp 200
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404/200

**Test Data**

- `checkId`: RBAC-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-355 — tmJava: JAVA-dept opp 200, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (JAVA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM (JAVA): tmJava: JAVA-dept opp 200, QA-dept opp 404
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200/404

**Test Data**

- `checkId`: RBAC-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-356 — em: JAVA-dept opp 404, QA-dept opp 200

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404/200 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: em: JAVA-dept opp 404, QA-dept opp 200
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404/200

**Test Data**

- `checkId`: RBAC-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-404 — Bypass reason 1025 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Bypass reason 1025 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-437 — Round interviewer 201 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"interviewer","message":"interviewer must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Round interviewer 201 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-073

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-447 — Feedback 4097 chars

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"feedback","message":"feedback must be shorter than or equal to 4096 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Feedback 4097 chars
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-083

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-490 — limit=50 (not allowed)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"limit","message":"limit must be one of the following values: 100, 200, 300"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: limit=50 (not allowed)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-126

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-553 — Reject reason 1025

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Reject reason 1025
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: DIR-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-557 — Cancel reason 1025

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason must be shorter than or equal to 1024 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Cancel reason 1025
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: DIR-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-587 — Prep material title 201

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title must be shorter than or equal to 200 characters"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Prep material title 201
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-600 — Add position requiredCount 21 via PATCH

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"requiredCount","message":"requiredCount must not be greater than 20"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Add position requiredCount 21 via PATCH
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-657 — Approve an employee already allocated elsewhere (Akash Pandya, 40% via NA-0416) for 50%

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 Nomination approved successfully, no warning |
| **Finding Ref** | F-12 |
| **Last Result** | failed |
| **Notes** | F-12: One employee can be approved (Blocked, In Process) on two opportunities at the same time |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Approve an employee already allocated elsewhere (Akash Pandya, 40% via NA-0416) for 50%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Refused or warned

**Test Data**

- `checkId`: RT-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-658 — Approve a fully booked employee (Nisha Das, 0% remaining) for 50%

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 TM Approval bypassed successfully; remaining shows 0% |
| **Finding Ref** | F-12 |
| **Last Result** | failed |
| **Notes** | F-12: One employee can be approved (Blocked, In Process) on two opportunities at the same time |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Approve a fully booked employee (Nisha Das, 0% remaining) for 50%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Refused or warned

**Test Data**

- `checkId`: RT-022

**Automation Hint**

API-level check (scratchpad harness)

### Functional (164)

#### TC-OPPTY-207 — Title is trimmed on save

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0074 "QA-AUTO trim check" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title is trimmed on save
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + stored trimmed

**Test Data**

- `checkId`: VAL-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-219 — websiteUrl https valid

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0076 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: websiteUrl https valid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-235 — PMO Existing client WITHOUT project (allowed at ALL scope)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0080 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO Existing client WITHOUT project (allowed at ALL scope)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-236 — PMO Existing client with any project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0081 AbsoluteUI \| Design System |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO Existing client with any project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + project linked

**Test Data**

- `checkId`: VAL-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-248 — Multi-department position (QA+JAVA) — EM multi-skill case

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0085 QA+JAVA |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Multi-department position (QA+JAVA) — EM multi-skill case
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + 2 departments

**Test Data**

- `checkId`: VAL-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-255 — requiredCount missing (Interview)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_146 An Interview Position needs its required headcount (requiredCount) openings=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount missing (Interview)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: number of openings is a PMO field — 400 or default 1

**Test Data**

- `checkId`: VAL-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-265 — FIXED 1%

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0087 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: FIXED 1%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-065

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-266 — FIXED 100%

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0088 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: FIXED 100%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-066

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-268 — DYNAMIC without %

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0089 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: DYNAMIC without %
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-068

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-271 — tentativeAllocationDate in the past

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_178 The tentative allocation date cannot be in the past |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: tentativeAllocationDate in the past
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

UI blocks past dates (V.ALLOCATION_DATE_PAST) — API should too

**Test Data**

- `checkId`: VAL-071

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-273 — End date same day as start

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0090 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: End date same day as start
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-073

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-283 — roundTitles with blank title (FRD: optional, default "Round N")

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0092 ["","Tech"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: roundTitles with blank title (FRD: optional, default "Round N")
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + blank kept as null/"" and shown as Round 1

**Test Data**

- `checkId`: VAL-083

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-287 — prepMaterials omitted → default links seeded

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0093 0 defaults:  |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | ☑️ Working as decided (developer response 26 Oct): no default prep material links on a new position. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prepMaterials omitted → default links seeded
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + default prep material list

**Test Data**

- `checkId`: VAL-087

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-288 — prepMaterials [] → none

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0094 0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prepMaterials [] → none
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + 0 materials

**Test Data**

- `checkId`: VAL-088

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-292 — Checklist items seeded per position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0095 5: JD_CLIENT_CONTEXT_REVIEWED,SPECIAL_INSTRUCTIONS_ACKNOWLEDGED,AI_MOCK_COMPLETED,MANUAL_MOCK_COMPLETED,RESUME_REVIEWED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Checklist items seeded per position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + checklistItems present

**Test Data**

- `checkId`: VAL-092

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-295 — OTHER with otherLocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |
| **Notes** | Test expectation corrected: by design OTHER needs otherLocation + workMode. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: OTHER with otherLocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 — OTHER counts as a foreign location, so workMode is also required

**Test Data**

- `checkId`: VAL-095

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-299 — USA ON_SITE with address

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully OPP-0096 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: USA ON_SITE with address
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created

**Test Data**

- `checkId`: VAL-099

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-303 — 3 positions, 2+1+3 openings — ordinals unique across the opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0097 ords=1,2,3,4,5,6 displayIds=QA-JD-130,QA-PD-131,QA-QE-129 priority=HIGH |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: 3 positions, 2+1+3 openings — ordinals unique across the opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + ordinals 1..6, unique displayIds

**Test Data**

- `checkId`: VAL-103

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-304 — Opportunity priority = most urgent of positions

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0098 MEDIUM |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Opportunity priority = most urgent of positions
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + MEDIUM

**Test Data**

- `checkId`: VAL-104

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-305 — Same title + client twice (Potential Duplicate Notice)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 2nd create 201; lookup found 4 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Same title + client twice (Potential Duplicate Notice)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Lookup returns the earlier one; API allows duplicate (notice is advisory)

**Test Data**

- `checkId`: VAL-105

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-306 — Ticket numbers are sequential & unique

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 29 tickets, unique=29 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Ticket numbers are sequential & unique
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

strictly increasing OPP-nnnn

**Test Data**

- `checkId`: VAL-106

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-307 — pmo raises EXISTING (project not managed)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: pmo raises EXISTING (project not managed)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RBAC-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-308 — pmo raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: pmo raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RBAC-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-310 — csm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: csm raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RBAC-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-320 — CSM raises DIRECT for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM raises DIRECT for own project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RBAC-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-321 — PM raises DIRECT for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | ⏳ Pending product decision (26 Oct): PM raises Direct tickets per Figma. · F-01: PM can raise Existing-client Interview and Direct opportunities |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM raises DIRECT for own project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: 403 (PM cannot raise Direct either)

**Test Data**

- `checkId`: RBAC-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-322 — Assignee picker PM list only holds PM-role employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 91 PMs, includes gaurav=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Assignee picker PM list only holds PM-role employees
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

every item holds PM

**Test Data**

- `checkId`: RBAC-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-327 — PMO creates PROSPECT assigned to PM gaurav + CSM tarun

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully pm=Gaurav Panchal csm=Tarun Sharma |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO creates PROSPECT assigned to PM gaurav + CSM tarun
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 with assignedPm/assignedCsm

**Test Data**

- `checkId`: RBAC-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-328 — Assigned PM can open the assigned opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Opportunity retrieved successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Assigned PM: Assigned PM can open the assigned opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: RBAC-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-329 — Assigned PM sees it in a list (FRD §7.5 list view of assigned opps)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=8 containsAssigned=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Assigned PM: Assigned PM sees it in a list (FRD §7.5 list view of assigned opps)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

PM finds it via /openings

**Test Data**

- `checkId`: RBAC-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-330 — Assigned CSM sees it on board

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Assigned CSM sees it on board
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

visible

**Test Data**

- `checkId`: RBAC-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-333 — PMO re-assigns PM to another PM (FRD open Q)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | patch 200, old PM now 404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO re-assigns PM to another PM (FRD open Q)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

old PM loses access, new PM gains

**Test Data**

- `checkId`: RBAC-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-335 — CSM creates INTERVIEW opp for own project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully viewerCanEdit=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM creates INTERVIEW opp for own project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RBAC-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-336 — CSM edits own INTERVIEW opp title

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Opportunity updated successfully |
| **Finding Ref** | F-02 |
| **Last Result** | passed |
| **Notes** | F-02: CSM cannot edit or add positions to an Interview opportunity they raised |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM edits own INTERVIEW opp title
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD §7.6: allowed (CSM create/edit like PMO)

**Test Data**

- `checkId`: RBAC-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-337 — CSM adds a position to own INTERVIEW opp

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_021 Position created successfully |
| **Finding Ref** | F-02 |
| **Last Result** | passed |
| **Notes** | F-02: CSM cannot edit or add positions to an Interview opportunity they raised |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM adds a position to own INTERVIEW opp
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD §7.6: allowed

**Test Data**

- `checkId`: RBAC-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-338 — CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 400 OPP_147 Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled |
| **Finding Ref** | F-03 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Cancel exists only for Direct tickets. · F-03: CSM cannot cancel an Interview ticket — the Cancelled tag exists only for Direct |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM cancels own INTERVIEW ticket (Cancelled tag, FRD rule 22)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: allowed, tag only

**Test Data**

- `checkId`: RBAC-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-362 — Board summary per role equals distinct opps on /openings

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | admin:94/93 pmo:94/93 tmQA:88/87 em:88/87 csm:13/13 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Board summary per role equals distinct opps on /openings
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

summary.total == opportunityCount

**Test Data**

- `checkId`: RBAC-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-363 — Employee view=TEAM forced to MINE

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: Employee view=TEAM forced to MINE
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

SELF caller gets own only (0)

**Test Data**

- `checkId`: RBAC-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-364 — PM without view_board calls /openings

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=8 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM without view_board calls /openings
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

build: PM has read but no board — record

**Test Data**

- `checkId`: RBAC-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-365 — Positions returned in created order (contract)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | Java Backend Dev , QA Automation Engineer |
| **Finding Ref** | F-34 |
| **Last Result** | skipped |
| **Notes** | Ignored by QA lead (26 Oct): position order. · F-34: Positions are not returned in the order they were created |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Positions returned in created order (contract)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

positions[0] = first created

**Test Data**

- `checkId`: INT-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-366 — New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | #1:PENDING_TO_SHORTLIST #2:PENDING_TO_SHORTLIST |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: New position with requiredCount 2 starts with 2 cards in Pending to Shortlist (rule 13)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

2 × PENDING_TO_SHORTLIST

**Test Data**

- `checkId`: INT-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-367 — Stage counts reflect new cards

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | {"PENDING_TO_SHORTLIST":3,"SHORTLISTED":0,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":0,"INTERVIEW_SCHEDULED":0,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":0,"LOST":0,"ON_HOLD":0,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Stage counts reflect new cards
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

PENDING_TO_SHORTLIST >= 3

**Test Data**

- `checkId`: INT-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-368 — Preferred Candidate flag on shortlist (FRD rule 14, glossary)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"candidates.0.isPreferred","message":"property isPreferred should not exist"}] |
| **Finding Ref** | F-04 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Preferred Candidate. · F-04: Per-candidate 'Preferred Candidate' flag is not in the build |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Preferred Candidate flag on shortlist (FRD rule 14, glossary)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

accepted (TM/RM can flag a preferred candidate)

**Test Data**

- `checkId`: INT-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-373 — Shortlist beyond headcount (3rd candidate for 2 openings)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully P1 cards=1 requiredCount=1 shortlisted=0 |
| **Finding Ref** | F-22 |
| **Last Result** | passed |
| **Notes** | F-22: Extra candidates get their own cards beyond the opening count |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Shortlist beyond headcount (3rd candidate for 2 openings)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Build: extra card opened; FRD rule 13: N openings = N cards — record

**Test Data**

- `checkId`: INT-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-374 — PMO shortlists a JAVA-dept employee on the QA position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO shortlists a JAVA-dept employee on the QA position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 (cross-dept candidate)

**Test Data**

- `checkId`: INT-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-375 — EM shortlists qa4

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: EM shortlists qa4
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: INT-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-380 — PM tries to shortlist (FRD §7.5: PM can shortlist)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | Retest 26 Oct (RT-001/002): PM shortlists on assigned OPP-0042 and own-project OPP-0039 → 201. (This check targets an opportunity outside his scope, where 404 is correct.) |
| **Finding Ref** | F-07 |
| **Last Result** | passed |
| **Notes** | F-07: PM cannot shortlist candidates |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM tries to shortlist (FRD §7.5: PM can shortlist)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: 201

**Test Data**

- `checkId`: INT-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-382 — TM (QA) sees JAVA candidate as an empty seat

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | TM sees 0 cards, names= |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM (QA) sees JAVA candidate as an empty seat
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

activeNomination null on that card for TM QA

**Test Data**

- `checkId`: INT-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-383 — TM (JAVA) can see the opportunity because a JAVA candidate is nominated

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 names=Siddharth Iyer |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM (JAVA) can see the opportunity because a JAVA candidate is nominated
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, sees only siddharth

**Test Data**

- `checkId`: INT-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-384 — Candidate picker excludes already-live candidates for the position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | janki.naik is NOT listed; the 21 hits are other employees named Janki (re-checked) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate picker excludes already-live candidates for the position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

qa1 not listed

**Test Data**

- `checkId`: INT-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-390 — TM sends own pick qa1 for approval

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Candidate sent for TM approval successfully WAITING_FOR_APPROVAL PENDING |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM sends own pick qa1 for approval
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, card WAITING_FOR_APPROVAL, approval PENDING

**Test Data**

- `checkId`: INT-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-393 — TM-sent request: who approves? (FRD rule 19: TM Approval is final)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully stage=BEING_PREPARED approvedBy=Bhumi Chauhan |
| **Finding Ref** | F-06 |
| **Last Result** | skipped |
| **Notes** | ⏳ Pending product decision (26 Oct): PMO can approve any pick today. · F-06: When a TM sends a candidate for approval, PMO gives the 'TM Approval' |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM-sent request: who approves? (FRD rule 19: TM Approval is final)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record — build says PMO decides a TM request

**Test Data**

- `checkId`: INT-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-397 — TM (QA) approves PMO-sent qa2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM (QA) approves PMO-sent qa2
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 BEING_PREPARED

**Test Data**

- `checkId`: INT-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-399 — PMO sends JAVA candidate; TM (JAVA) approves (candidate's department)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination approved successfully BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO sends JAVA candidate; TM (JAVA) approves (candidate's department)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: INT-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-401 — PMO withdraws own request → back to SHORTLISTED

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Approval request withdrawn successfully SHORTLISTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO withdraws own request → back to SHORTLISTED
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 SHORTLISTED

**Test Data**

- `checkId`: INT-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-405 — PMO bypasses TM approval for qa3 (not sent)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully BEING_PREPARED BYPASSED reason=TM on leave |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO bypasses TM approval for qa3 (not sent)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, approval BYPASSED, reason stored

**Test Data**

- `checkId`: INT-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-406 — Bypass without reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Finding Ref** | F-09 |
| **Last Result** | passed |
| **Notes** | F-09: No reason required to bypass TM approval or to remove a shortlisted candidate |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Bypass without reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD rule 16 (mandatory reason) — should require one

**Test Data**

- `checkId`: INT-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-408 — Remove CONSIDERED qa4 (no reason asked)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] stage=undefined |
| **Finding Ref** | F-09 |
| **Last Result** | passed |
| **Notes** | Fixed 26 Oct: removal requires a reason. · F-09: No reason required to bypass TM approval or to remove a shortlisted candidate |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Remove CONSIDERED qa4 (no reason asked)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 — reason required (FRD rule 16)

**Test Data**

- `checkId`: INT-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-413 — Rejected appears in Rejected column with reason & role

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully found=true role=TM reason=Failed R1 coding |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Rejected appears in Rejected column with reason & role
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

rejected list has qa3, role TM

**Test Data**

- `checkId`: INT-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-414 — Rejected candidate nominated for a different position in same opp (rule 6)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Rejected candidate nominated for a different position in same opp (rule 6)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: INT-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-415 — Rejected candidate re-nominated on the SAME position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Rejected candidate re-nominated on the SAME position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record (build allows)

**Test Data**

- `checkId`: INT-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-423 — Drag backwards Interview Scheduled → Being Prepared

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | Retest 26 Oct (RT-015): Interview Scheduled → Being Prepared 200; UI now confirms before the date is cleared. |
| **Finding Ref** | F-05 |
| **Last Result** | passed |
| **Notes** | F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag backwards Interview Scheduled → Being Prepared
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: INT-059

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-425 — Candidate (janki) opens own opportunity (My Opportunity)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 sees nominations of: Janki Naik leakBypassReason=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate (janki) opens own opportunity (My Opportunity)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, candidate view hides feedback/bypassReason/notes

**Test Data**

- `checkId`: INT-061

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-426 — Candidate ticks 2 items out of order (FRD: any order)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Preparation Checklist updated successfully done=MANUAL_MOCK_COMPLETED,JD_CLIENT_CONTEXT_REVIEWED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate ticks 2 items out of order (FRD: any order)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: INT-062

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-429 — PMO marks item "Skipped by PMO"

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Preparation Checklist updated successfully skipped=SPECIAL_INSTRUCTIONS_ACKNOWLEDGED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO marks item "Skipped by PMO"
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 skippedChecklistItems

**Test Data**

- `checkId`: INT-065

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-434 — Add round 3 with no title → defaults (FRD "Round 3")

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_051 Interview Round added successfully #3 title=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Add round 3 with no title → defaults (FRD "Round 3")
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201, title null/"Round 3"

**Test Data**

- `checkId`: INT-070

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-439 — Schedule R1 in future + finalize (lock)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"isFinalized","message":"property isFinalized should not exist"}] fin=undefined |
| **Finding Ref** | F-05 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Finalize/lock interview schedule. · F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Schedule R1 in future + finalize (lock)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 isFinalized

**Test Data**

- `checkId`: INT-075

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-442 — Card auto-moves to Interview Scheduled when a round is dated

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | INTERVIEW_SCHEDULED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Card auto-moves to Interview Scheduled when a round is dated
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

stage INTERVIEW_SCHEDULED

**Test Data**

- `checkId`: INT-078

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-445 — R2 dated yesterday → Cleared without recording (FRD: recording optional)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round updated successfully PASSED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: R2 dated yesterday → Cleared without recording (FRD: recording optional)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 PASSED

**Test Data**

- `checkId`: INT-081

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-449 — Delete pending round 3 → renumber

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round removed successfully left=2 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Delete pending round 3 → renumber
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, 2 rounds left

**Test Data**

- `checkId`: INT-085

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-450 — Candidate (vandana) sees round feedback?

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | feedback=[null,null] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate (vandana) sees round feedback?
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

feedback hidden (null) for candidate

**Test Data**

- `checkId`: INT-086

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-451 — "Did the interview happen?" — Yes → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_061 The interview has been held, so its date cannot be after today undefined |
| **Last Result** | passed |
| **Notes** | Correct guard. New "Did Interview Happen" stage verified separately (RT-016). |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: "Did the interview happen?" — Yes → Waiting for Feedback
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Refused while the current round is dated in the future

**Test Data**

- `checkId`: INT-087

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-453 — Resend unchanged allocation %

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Resend unchanged allocation %
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: INT-089

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-455 — Reduce requiredCount to 1 (cards with candidates kept)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully required=1 cards=3 stages=SHORTLISTED,SHORTLISTED,SHORTLISTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reduce requiredCount to 1 (cards with candidates kept)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, empty pending cards removed only

**Test Data**

- `checkId`: INT-091

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-459 — Select qa2 from Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation undefined undefined filled=undefined/undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Select qa2 from Waiting for Feedback
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 WON SELECTED, filledCount 1

**Test Data**

- `checkId`: INT-095

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-460 — Approve while another opening is In Process (OPP_047 same employee)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully |
| **Finding Ref** | F-12 |
| **Last Result** | passed |
| **Notes** | F-12: One employee can be approved (Blocked, In Process) on two opportunities at the same time |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Approve while another opening is In Process (OPP_047 same employee)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: INT-096

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-468 — Unlink project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | Retest 26 Oct on allocated OPP-0054 (RT-004/005): change/unlink → 400 OPP_176. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Unlink project after allocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record (orphan risk)

**Test Data**

- `checkId`: INT-104

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-470 — ON_HOLD → pipeline actions blocked

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: ON_HOLD → pipeline actions blocked
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

shortlist 400 OPP_013

**Test Data**

- `checkId`: INT-106

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-471 — ON_HOLD: candidate checklist edit

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: ON_HOLD: candidate checklist edit
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: INT-107

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-472 — ON_HOLD cards move to On Hold column

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | {"PENDING_TO_SHORTLIST":0,"SHORTLISTED":0,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":0,"INTERVIEW_SCHEDULED":0,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":1,"LOST":0,"ON_HOLD":8,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: ON_HOLD cards move to On Hold column
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

stage-counts ON_HOLD > 0

**Test Data**

- `checkId`: INT-108

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-473 — Reopen ON_HOLD → OPEN

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reopen ON_HOLD → OPEN
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: INT-109

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-474 — Concurrent double request-approval on same nomination

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS / 400 OPP_104 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Concurrent double request-approval on same nomination
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

one 200, one 400/409

**Test Data**

- `checkId`: INT-110

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-475 — Concurrent shortlist of same employee by 2 PMOs

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 / 409 OPP_028 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Concurrent shortlist of same employee by 2 PMOs
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

one 201, one 409

**Test Data**

- `checkId`: INT-111

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-476 — Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully WON:Amit/SELECTED \| PENDING_TO_SHORTLIST:- \| PENDING_TO_SHORTLIST:- |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Mark Opportunity WON: IN_PROCESS → SELECTED, awaiting-approval removed
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record outcome

**Test Data**

- `checkId`: INT-112

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-477 — Mark LOST → candidates RELEASED & unblocked; hidden from default board

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully RELEASED/blocked=false default=0 archived=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Mark LOST → candidates RELEASED & unblocked; hidden from default board
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

RELEASED, not on default /openings

**Test Data**

- `checkId`: INT-113

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-479 — Reopen LOST → OPEN removes released candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully PENDING_TO_SHORTLIST noms= |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reopen LOST → OPEN removes released candidates
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

opening back to Pending, no live nominations

**Test Data**

- `checkId`: INT-115

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-481 — NLR with confirmation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: NLR with confirmation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: INT-117

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-485 — PMO re-initiates P2 → all non-allocated released, cards back to Pending

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position re-initiated successfully count=1 stages=PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST,PENDING_TO_SHORTLIST live=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO re-initiates P2 → all non-allocated released, cards back to Pending
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, reinitiationCount 1

**Test Data**

- `checkId`: INT-121

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-487 — Stage-count total equals /openings total for this opp

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | sum=10 list=10 {"PENDING_TO_SHORTLIST":5,"SHORTLISTED":2,"WAITING_FOR_APPROVAL":0,"BEING_PREPARED":2,"INTERVIEW_SCHEDULED":1,"DID_INTERVIEW_HAPPEN":0,"WAITING_FOR_FEEDBACK":0,"WON":0,"PROJECT_ALLOCATED":0,"REJECTED":1,"LOST":0,"ON_HOLD":0,"NO_LONGER_REQUIRED":0} |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Stage-count total equals /openings total for this opp
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

sum(stage keys) == total

**Test Data**

- `checkId`: INT-123

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-488 — Search by readable position id (displayId)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | AN-JB-149 → 5 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Search by readable position id (displayId)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

finds cards

**Test Data**

- `checkId`: INT-124

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-489 — Search with SQL wildcard % does not match everything

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | all=182 search%=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Search with SQL wildcard % does not match everything
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

small/zero result

**Test Data**

- `checkId`: INT-125

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-530 — interviewerLinkedinUrl ignored on DIRECT

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 201 OPP_002 Opportunity created successfully stored=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: interviewerLinkedinUrl ignored on DIRECT
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

stored null

**Test Data**

- `checkId`: DIR-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-531 — Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | Re-run as 4 single-position tickets: +3d HIGH, +10d MEDIUM, +30d LOW, −3d HIGH; sent priority ignored |
| **Last Result** | passed |
| **Notes** | Multi-position Direct is refused (OPP_175) — see F-13. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Priority derived from allocation date (+3d HIGH, +10d MEDIUM, +30d LOW), sent value ignored
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

HIGH/MEDIUM/LOW

**Test Data**

- `checkId`: DIR-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-532 — FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | build derives priority from days-to-allocation, not ticket age; FRD aging rule (TBD) not implemented |
| **Finding Ref** | F-19 |
| **Last Result** | skipped |
| **Notes** | ❓ Needs clarification: priority rule — FRD rule 9 vs build. · F-19: Priority rule differs from FRD |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: FRD rule 9 aging priority (>1 week open = High) vs build (allocation-date based)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: DIR-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-533 — Direct ticket starts OPEN with the employee nominated

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | OPP-0117 directStage=OPEN nom=Gargi Soni/CONSIDERED viewerCanEdit=true viewerCanCancel=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Direct ticket starts OPEN with the employee nominated
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

directStage OPEN

**Test Data**

- `checkId`: DIR-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-537 — PMO skips OPEN → AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO skips OPEN → AWAITING
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record (forward-only, skip?)

**Test Data**

- `checkId`: DIR-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-538 — PMO OPEN → IN_REVIEW

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO OPEN → IN_REVIEW
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: DIR-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-540 — Owner (CSM) swaps the employee while IN_REVIEW

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Position updated successfully now=Ekta Rathod |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM (owner): Owner (CSM) swaps the employee while IN_REVIEW
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: DIR-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-543 — PMO IN_REVIEW → AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO IN_REVIEW → AWAITING
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: DIR-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-554 — Reject from OPEN with reason

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully REJECTED emp=Arnav Shetty/REJECTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Reject from OPEN with reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 REJECTED, employee stays on card

**Test Data**

- `checkId`: DIR-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-558 — CSM cancels without a reason (FRD open Q: is reason required?)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | Re-checked: cancel without reason → 400 (reason is now mandatory, resolving FRD open question) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM cancels without a reason (FRD open Q: is reason required?)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: DIR-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-559 — CSM cancels: tag added, stage unchanged (IN_REVIEW)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket marked as cancelled stage=IN_REVIEW cancel={"cancelledAt":"2026-10-26T11:11:02.142Z","reason":"Client postponed","cancelledBy":{"publ |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM cancels: tag added, stage unchanged (IN_REVIEW)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 cancellation set, directStage IN_REVIEW

**Test Data**

- `checkId`: DIR-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-562 — PMO moves a cancelled ticket (guide says PMO may still move it)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_164 A cancelled Direct ticket cannot change stage |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | Behaviour fine (PMO closes cancelled tickets via NLR); backend guide out of date — BUG-024. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO moves a cancelled ticket (guide says PMO may still move it)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: DIR-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-563 — isCancelled=true filter returns the tagged ticket

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | total=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: isCancelled=true filter returns the tagged ticket
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

found

**Test Data**

- `checkId`: DIR-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-565 — Board default hides NLR Direct tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Board default hides NLR Direct tickets
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

not on default board

**Test Data**

- `checkId`: DIR-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-566 — Prospect Direct (no project) created by CSM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | OPP-0120 PROSPECT |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Prospect Direct (no project) created by CSM
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: DIR-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-567 — APPROVED not offered without a project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | ["REJECTED"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: APPROVED not offered without a project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

allowedDirectStages lacks APPROVED

**Test Data**

- `checkId`: DIR-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-569 — CSM links own project → Prospect becomes Existing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Project associated with the Opportunity successfully clientType=EXISTING |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM links own project → Prospect becomes Existing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 clientType EXISTING

**Test Data**

- `checkId`: DIR-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-572 — APPROVED with allocation unconfirmed → selected, not allocated

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation undefined/undefined ticket=undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: APPROVED with allocation unconfirmed → selected, not allocated
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

APPROVED, stage not PROJECT_ALLOCATED

**Test Data**

- `checkId`: DIR-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-573 — Confirm allocation later (PATCH isAllocationConfirmed:true)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation stage=SHORTLISTED ticket=null |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Confirm allocation later (PATCH isAllocationConfirmed:true)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 PROJECT_ALLOCATED

**Test Data**

- `checkId`: DIR-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-574 — Direct ticket for a fully-booked employee is accepted at create (warning only?)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | created OPP-0122 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Direct ticket for a fully-booked employee is accepted at create (warning only?)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: DIR-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-576 — direct-stage-counts total equals Direct list total

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | counts={"total":21,"OPEN":11,"IN_REVIEW":0,"AWAITING":5,"APPROVED":2,"REJECTED":3} list=21 sum=21 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: direct-stage-counts total equals Direct list total
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

equal

**Test Data**

- `checkId`: DIR-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-577 — Direct summary (requestType=DIRECT) vs list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | summary={"total":24,"open":21,"won":0,"lost":0,"onHold":0,"noLongerRequired":3} oppCount=21 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Direct summary (requestType=DIRECT) vs list
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

summary.total == opportunityCount

**Test Data**

- `checkId`: DIR-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-579 — CSM sees own Direct tickets only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | total=18 projects=AnalytixHub \| Advanced Analytics,ElitePay \| Payroll System |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM sees own Direct tickets only
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

all tickets raised by / project of CSM

**Test Data**

- `checkId`: DIR-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-580 — TM sees Direct tickets of own department (view only)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=20 allowedStages=[] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM sees Direct tickets of own department (view only)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: DIR-059

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-581 — TM adds prep material

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM adds prep material
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: MSC-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-582 — EM adds prep material (FRD §7.4: EM standardises question banks)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: EM adds prep material (FRD §7.4: EM standardises question banks)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: allowed

**Test Data**

- `checkId`: MSC-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-583 — Assigned PM adds prep material on top of PMO's (FRD §7.5)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Assigned PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_081 Prep Material added successfully |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Assigned PM: Assigned PM adds prep material on top of PMO's (FRD §7.5)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: allowed

**Test Data**

- `checkId`: MSC-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-584 — TM edits PMO's material

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 403 OPP_182 Only whoever added this Prep Material, or PMO, can change it |
| **Finding Ref** | F-08 |
| **Last Result** | passed |
| **Notes** | F-08: Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM edits PMO's material
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD: only PMO edits its own material — record

**Test Data**

- `checkId`: MSC-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-588 — Duplicate URL twice on one position

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 201/201 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Duplicate URL twice on one position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: MSC-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-589 — Prep material cap

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | last=201 total=31 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Prep material cap
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record count limit

**Test Data**

- `checkId`: MSC-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-594 — Switch EXISTING → PROSPECT unlinks project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Opportunity updated successfully project=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Switch EXISTING → PROSPECT unlinks project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 project null

**Test Data**

- `checkId`: MSC-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-601 — Raise requiredCount 1 → 4 appends 3 empty cards

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Position updated successfully cards=4 ords=1,3,4,5 |
| **Finding Ref** | F-22 |
| **Last Result** | passed |
| **Notes** | F-22: Extra candidates get their own cards beyond the opening count |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Raise requiredCount 1 → 4 appends 3 empty cards
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

4 cards

**Test Data**

- `checkId`: MSC-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-602 — Shortlist shortfall data (FRD: warn when fewer shortlisted than needed)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | required=4 shortlisted=0 filled=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Shortlist shortfall data (FRD: warn when fewer shortlisted than needed)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

shortlistedCount < requiredCount exposed

**Test Data**

- `checkId`: MSC-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-603 — Candidate ticks checklist while Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_073 The Preparation Checklist can only be updated while the Candidate is Shortlisted, Waiting for Approval or Being Prepared |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate ticks checklist while Interview Scheduled
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

FRD §7.7: only Shortlisted/Being Prepared → 400 OPP_073

**Test Data**

- `checkId`: MSC-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-604 — PMO ticks on candidate's behalf at any stage

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"manualMockAt","message":"property manualMockAt should not exist"}] |
| **Finding Ref** | F-21 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): PMO ticking checklist items for a candidate; PMO can only skip today. · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO ticks on candidate's behalf at any stage
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: MSC-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-605 — Pending checklist does not block scheduling (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | round scheduled with 0/5 items done earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Pending checklist does not block scheduling (FRD change list)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

round dated with 4 items pending

**Test Data**

- `checkId`: MSC-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-606 — Send Reminder (FRD §7.5) endpoint exists

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 404 SYS_002 Cannot POST /api/v1/opportunities/nominations/5141ae0b-aa97-45ab-b291-f372336369ec/remind |
| **Finding Ref** | F-18 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Send Reminder. · F-18: No change log on the opportunity and no 'Send Reminder' |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Send Reminder (FRD §7.5) endpoint exists
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: MSC-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-607 — RM of the candidate (unknown) sees the card (TEAM scope)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | no RM on profile: ["publicId","email","microsoftOid","kekaId","name","shiftPreferences","careerStartDate","dateOfJoining","isContractor","isTrainee","cohort","employeeOrigin","visaStatus","locationPreference","otherLoc |
| **Last Result** | skipped |
| **Notes** | Not verified: API does not expose the reporting manager, and the RM test account has no reportees on these tickets. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: RM of the candidate (unknown) sees the card (TEAM scope)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

visible on RM board

**Test Data**

- `checkId`: MSC-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-612 — "Opportunity Allocation" nav entry per role

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | All roles |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Navigation |
| **Actual Result** | PMO/Admin/TM/EM/RM/CSM: Requests Tracking → Opportunity Allocation (/pre-sales). PM and Employee: not in nav, /pre-sales → /unauthorized |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/r-pmo-presales.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. "Opportunity Allocation" nav entry per role

**Expected**

PMO, Admin, TM, EM, RM, CSM see it; PM and Employee do not

**Test Data**

- `checkId`: UI-001

**Automation Hint**

Playwright UI

#### TC-OPPTY-613 — PM can find the opportunities assigned to them (FRD §7.5 list view with Interview/Direct flag)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Navigation |
| **Actual Result** | Requests Tracking → Project Allocation → "Interview Allocation" tab lists the PM's opportunities (OPP-0066, OPP-0042 assigned/no project, OPP-0039); separate "Direct Allocation" tab. /pre-sales is intentionally not available to PM. |
| **Last Result** | passed |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/pm-my-tickets-interview.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. PM can find the opportunities assigned to them (FRD §7.5 list view with Interview/Direct flag)

**Expected**

A list of assigned opportunities

**Test Data**

- `checkId`: UI-002

**Automation Hint**

Playwright UI

#### TC-OPPTY-615 — "New Opportunities" button visibility

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board |
| **Actual Result** | Shown for PMO and CSM only; TM/EM/RM/Admin → /pre-sales/new redirects to /unauthorized |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/r-csm-presales.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. "New Opportunities" button visibility

**Expected**

Only raisers (PMO, CSM)

**Test Data**

- `checkId`: UI-004

**Automation Hint**

Playwright UI

#### TC-OPPTY-616 — My / Team Opportunity tabs (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM, RM, EM, CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board |
| **Actual Result** | TM (QA, JAVA) and RM show My Opportunity / Team Opportunity; EM, CSM, PMO, Admin do not |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/kr-tmqa.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. My / Team Opportunity tabs (FRD change list)

**Expected**

Only TM and RM

**Test Data**

- `checkId`: UI-005

**Automation Hint**

Playwright UI

#### TC-OPPTY-617 — Admin view-only banner (FRD §7.1)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board |
| **Actual Result** | ☑️ Working as decided (developer response 26 Oct): Admin banner hidden on purpose (text not true for Admin). — Banner shown for TM/EM/RM/CSM, but NOT for Admin |
| **Finding Ref** | F-25 |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/kr-admin.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Admin view-only banner (FRD §7.1)

**Expected**

"You have department / view-scoped access. Kanban card dragging is exclusively managed by IS-PMO."

**Test Data**

- `checkId`: UI-006

**Automation Hint**

Playwright UI

#### TC-OPPTY-618 — Drag handles only for PMO (rule 21)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | All roles |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Kanban |
| **Actual Result** | PMO: 92 drag grips + edit pencils; Admin/TM/EM/RM/CSM: 0 grips |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/kr-pmo.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Drag handles only for PMO (rule 21)

**Expected**

Only PMO can drag

**Test Data**

- `checkId`: UI-007

**Automation Hint**

Playwright UI

#### TC-OPPTY-619 — Column order and names

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Kanban |
| **Actual Result** | All 12 columns in that order; column badges equal card counts |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/b-pmo-kanban-full.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Column order and names

**Expected**

Pending to Shortlist → Shortlisted → Waiting for Approval → Being Prepared → Interview Scheduled → Waiting for Feedback → Won → Project Allocated + Rejected, Lost, On Hold, No Longer Required

**Test Data**

- `checkId`: UI-008

**Automation Hint**

Playwright UI

#### TC-OPPTY-620 — Readable ticket ID shown (FRD change list, e.g. "GL-FE-112")

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board list |
| **Actual Result** | ☑️ Working as decided (developer response 26 Oct): readable ID removed 19 Oct; search by OPP number. — Ticket ID column is truncated to "OPP-00…"; the API's displayId (e.g. AN-QA-60) is not rendered anywhere in the frontend |
| **Finding Ref** | F-26 |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/01-pmo-presales.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Readable ticket ID shown (FRD change list, e.g. "GL-FE-112")

**Expected**

Short readable ID on the list

**Test Data**

- `checkId`: UI-009

**Automation Hint**

Playwright UI

#### TC-OPPTY-621 — Created-date filter presets (rule 7)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board |
| **Actual Result** | 🚧 Not built yet (developer response 26 Oct): date presets. — Presets are This week / This month / This year / Last year / Previous year |
| **Finding Ref** | F-27 |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Created-date filter presets (rule 7)

**Expected**

Day 1–365 / Last 1, 3, 6 months

**Test Data**

- `checkId`: UI-010

**Automation Hint**

Playwright UI

#### TC-OPPTY-622 — No Longer Required highlight (glossary)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board |
| **Actual Result** | Retest 26 Oct: No Longer Required rows have a red border. |
| **Finding Ref** | F-28 |
| **Last Result** | passed |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/rt-nlr.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. No Longer Required highlight (glossary)

**Expected**

Red-border highlight in archive view

**Test Data**

- `checkId`: UI-011

**Automation Hint**

Playwright UI

#### TC-OPPTY-623 — Summary tiles vs board

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board |
| **Actual Result** | Retest 26 Oct: tiles "All Opportunities 112 · Open 108 · Won 02 · Lost 00 · On Hold 00 · No Longer Required 02". |
| **Finding Ref** | F-31 |
| **Last Result** | passed |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/rt-board-list.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Summary tiles vs board

**Expected**

Tiles reconcile with what is shown

**Test Data**

- `checkId`: UI-012

**Automation Hint**

Playwright UI

#### TC-OPPTY-624 — "Client Facing" field removed (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Create form |
| **Actual Result** | Not present on Position Details |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/f4-pmo-twopos.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. "Client Facing" field removed (FRD change list)

**Expected**

Not present

**Test Data**

- `checkId`: UI-013

**Automation Hint**

Playwright UI

#### TC-OPPTY-625 — Interview vs Direct switch changes the fields

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Create form |
| **Actual Result** | Interview shows Interview Details, Rounds stepper, Preparation Material; Direct shows Employee picker without interview sections |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/f-pmo-direct.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Interview vs Direct switch changes the fields

**Expected**

Direct hides rounds/interview/prep and adds an Employee picker

**Test Data**

- `checkId`: UI-014

**Automation Hint**

Playwright UI

#### TC-OPPTY-627 — Interviewer LinkedIn placeholder

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Create form |
| **Actual Result** | Retest 26 Oct: Interviewer LinkedIn placeholder https://linkedin.com/in/.. |
| **Finding Ref** | F-29 |
| **Last Result** | passed |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/rt-form-empty.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Interviewer LinkedIn placeholder

**Expected**

A person profile URL

**Test Data**

- `checkId`: UI-016

**Automation Hint**

Playwright UI

#### TC-OPPTY-628 — Tabs + full ticket info (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Opportunity detail |
| **Actual Result** | Tabs: Position Details, Ticket Info, Preparation Material, Link Project |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/d-pmo-0047.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Tabs + full ticket info (FRD change list)

**Expected**

Position Details / Preparation Material / Project Association + full ticket info

**Test Data**

- `checkId`: UI-017

**Automation Hint**

Playwright UI

#### TC-OPPTY-629 — Redirect arrow to employee details on each row (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Shortlist dialog |
| **Actual Result** | Present (external-link icon next to every employee); UP tier/score, department, designation, skills, availability shown |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/d2-pmo-0047-shortlist.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Redirect arrow to employee details on each row (FRD change list)

**Expected**

Arrow icon per row

**Test Data**

- `checkId`: UI-018

**Automation Hint**

Playwright UI

#### TC-OPPTY-630 — Shortlist shortfall warning (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Opportunity detail |
| **Actual Result** | "Shortlisted ratio: 0" turns red on Java Backend Dev — works as a warning, but the label says "ratio" and shows a plain count |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/d-pmo-0047.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Shortlist shortfall warning (FRD change list)

**Expected**

Warning when fewer shortlisted than needed

**Test Data**

- `checkId`: UI-019

**Automation Hint**

Playwright UI

#### TC-OPPTY-631 — Shortlisting Drawer (Availability Date, Utilization Priority, Key Skills, Shift, Current Allocations, Visa, profile link)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Shortlisting drawer |
| **Actual Result** | 🚧 Not built yet (developer response 26 Oct): Shortlisting drawer. — No drawer in the build (only the picker table); FRD lists the richer drawer under Milestone 2 |
| **Finding Ref** | F-32 |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Shortlisting Drawer (Availability Date, Utilization Priority, Key Skills, Shift, Current Allocations, Visa, profile link)

**Expected**

Drawer opens from candidate name

**Test Data**

- `checkId`: UI-020

**Automation Hint**

Playwright UI

#### TC-OPPTY-632 — "Interview Opportunities" column (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Employee list |
| **Actual Result** | Column present (last column); data populated from API (verified ALC-027) |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/c-pmo-emplist.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. "Interview Opportunities" column (FRD change list)

**Expected**

Column on the employee list

**Test Data**

- `checkId`: UI-021

**Automation Hint**

Playwright UI

#### TC-OPPTY-633 — Opportunity history on employee profile

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Profile |
| **Actual Result** | Profile has an "Opportunities" tab |
| **Last Result** | passed |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/c-janki-profile.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Opportunity history on employee profile

**Expected**

Profile lists opportunities

**Test Data**

- `checkId`: UI-022

**Automation Hint**

Playwright UI

#### TC-OPPTY-635 — Personal read-mostly Kanban of own allocations (rule 4, §7.7)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Navigation |
| **Actual Result** | 🚧 Not built yet (developer response 26 Oct): employee Kanban. — /pre-sales → /unauthorized; no board for employees (Profile → Opportunities tab only) |
| **Finding Ref** | F-30 |
| **Last Result** | skipped |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/c-janki-board.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Personal read-mostly Kanban of own allocations (rule 4, §7.7)

**Expected**

A board/kanban for the employee

**Test Data**

- `checkId`: UI-024

**Automation Hint**

Playwright UI

#### TC-OPPTY-636 — Empty values (house rule)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Board list |
| **Actual Result** | Retest 26 Oct: empty cells read "No candidate". |
| **Finding Ref** | F-31 |
| **Last Result** | passed |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/rt-nlr.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Empty values (house rule)

**Expected**

A readable word, never a bare dash

**Test Data**

- `checkId`: UI-025

**Automation Hint**

Playwright UI

#### TC-OPPTY-637 — PM shortlists on an opportunity assigned to him (OPP-0042)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM shortlists on an opportunity assigned to him (OPP-0042)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RT-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-638 — PM shortlists on an opportunity on his own project (OPP-0039)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM shortlists on an opportunity on his own project (OPP-0039)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RT-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-642 — Project still editable on an opportunity with no allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 SUCCESS Project associated with the Opportunity successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Project still editable on an opportunity with no allocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200

**Test Data**

- `checkId`: RT-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-645 — Approve an employee already In Process on another opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 SUCCESS TM Approval bypassed successfully warnings=null |
| **Finding Ref** | F-12 |
| **Last Result** | failed |
| **Notes** | F-12: One employee can be approved (Blocked, In Process) on two opportunities at the same time |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Approve an employee already In Process on another opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

warning or refusal

**Test Data**

- `checkId`: RT-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-646 — Rejected candidate gets a candidate-facing message with reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | Akash Singh was rejected for 'QA Engineer' on OPP-0129 — the slot is open again. |
| **Finding Ref** | F-20 |
| **Last Result** | passed |
| **Notes** | Recipients verified (RT-023). Wording (third person, no reason) is part of the BUG-023 clarification. · F-20: Notification content issues |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Rejected candidate gets a candidate-facing message with reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Only the rejected candidate (and PMO/owners) receive the rejection

**Test Data**

- `checkId`: RT-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-649 — PM's Direct Allocation tab shows his open Direct opportunity OPP-0041

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | total=0 containsOPP-0041=false |
| **Finding Ref** | F-33 |
| **Last Result** | skipped |
| **Notes** | ❓ Needs clarification: should a PM see a Direct request he raised himself (not assigned)? · F-33: PM cannot see a Direct opportunity on his project until it is approved |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM's Direct Allocation tab shows his open Direct opportunity OPP-0041
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

listed

**Test Data**

- `checkId`: RT-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-650 — Positions returned in created order (5 repeats)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | BCA/BCA ABC/ABC ACB/ACB BAC/BAC BAC/BAC |
| **Finding Ref** | F-34 |
| **Last Result** | skipped |
| **Notes** | Ignored by QA lead (26 Oct): position order. · F-34: Positions are not returned in the order they were created |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Positions returned in created order (5 repeats)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

always created order

**Test Data**

- `checkId`: RT-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-651 — API: drag Interview Scheduled → Being Prepared still clears the date (UI now confirms first)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 SUCCESS Opening moved successfully now=BEING_PREPARED date=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: API: drag Interview Scheduled → Being Prepared still clears the date (UI now confirms first)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: RT-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-652 — Round dated yesterday → card in "Did Interview Happen"; stage-counts has the key

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | DID_INTERVIEW_HAPPEN; stage-counts DID_INTERVIEW_HAPPEN=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Round dated yesterday → card in "Did Interview Happen"; stage-counts has the key
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

as described

**Test Data**

- `checkId`: RT-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-653 — PMO cannot drag a card into "Did Interview Happen"

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO cannot drag a card into "Did Interview Happen"
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

as described

**Test Data**

- `checkId`: RT-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-654 — Rescheduling to a future day moves the card back to Interview Scheduled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | INTERVIEW_SCHEDULED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Rescheduling to a future day moves the card back to Interview Scheduled
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

as described

**Test Data**

- `checkId`: RT-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-655 — Confirming the interview happened moves the card to Waiting for Feedback (one step)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 SUCCESS Opening moved successfully → WAITING_FOR_FEEDBACK |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Confirming the interview happened moves the card to Waiting for Feedback (one step)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

as described

**Test Data**

- `checkId`: RT-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-656 — PM sees an opportunity on his project that is NOT assigned to him (OPP-0150)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 200 — visible on detail page and in Interview Allocation tab; Add/ Shortlist offered |
| **Finding Ref** | F-36 |
| **Last Result** | failed |
| **Notes** | F-36: PM sees and can act on opportunities on his project that are not assigned to him |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM sees an opportunity on his project that is NOT assigned to him (OPP-0150)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Not visible (PM sees only assigned)

**Test Data**

- `checkId`: RT-020

**Automation Hint**

API-level check (scratchpad harness)

### Integration (48)

#### TC-OPPTY-332 — Assignment notification to assignee (FRD notif #18)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | Retest 26 Oct (RT-007/008): PM and CSM both got "You've been assigned to OPP-0126". |
| **Finding Ref** | F-11 |
| **Last Result** | passed |
| **Notes** | F-11: Assigned CSM gets no 'assigned to you' notification |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Assignment notification to assignee (FRD notif #18)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

PM + CSM get "assigned to you" notification

**Test Data**

- `checkId`: RBAC-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-386 — Two-way alert: shortlist side shows direct allocations for qa1

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Allocation conflicts fetched successfully interview=3 direct=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Two-way alert: shortlist side shows direct allocations for qa1
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

allocation-conflicts 200 with entries

**Test Data**

- `checkId`: INT-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-387 — Preferred-candidate notification to TM (FRD notif #7)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | checked in notifications pass |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Preferred-candidate notification to TM (FRD notif #7)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: INT-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-454 — Edit tech stack after shortlisting (rule 18 → TM re-review notification)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Position updated successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Edit tech stack after shortlisting (rule 18 → TM re-review notification)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 + TM notified

**Test Data**

- `checkId`: INT-090

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-464 — PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation undefined ticket=undefined blocked=undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO allocates Won qa2 → Project Allocated + born-approved allocation ticket
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 PROJECT_ALLOCATED, ticket id

**Test Data**

- `checkId`: INT-100

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-466 — Allocation ticket visible in allocation tickets module

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 SYS_004 Validation failed (uuid is expected) undefined undefined undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocation ticket visible in allocation tickets module
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, APPROVED, employee qa2, project AnalytixHub

**Test Data**

- `checkId`: INT-102

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-467 — Two-way alert now lists the upcoming allocation for qa2

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | direct=["ZenMonitor \| APM Platform:ASSIGNMENT:2026-08-28","HyperScale \| Scalability Engine:ASSIGNMENT:2026-10-23","TrustVault \| Identity Management:PENDING_TICKET:2026-08-21"] |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Two-way alert now lists the upcoming allocation for qa2
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

directAllocations has AnalytixHub

**Test Data**

- `checkId`: INT-103

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-478 — Lost notification to raiser/TM (FRD notif #15)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | - |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Lost notification to raiser/TM (FRD notif #15)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

checked in notifications pass

**Test Data**

- `checkId`: INT-114

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-482 — Reopen NLR → OPEN (rule 17: reversible) 

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reopen NLR → OPEN (rule 17: reversible) 
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 (notif #16 says "cannot be undone easily")

**Test Data**

- `checkId`: INT-118

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-492 — Employee opportunity history for qa1 (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully OPP-0113:BEING_PREPARED OPP-0112:BEING_PREPARED OPP-0048:BEING_PREPARED OPP-0047:BEING_PREPARED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: Employee opportunity history for qa1 (FRD change list)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

lists Interview-1 and Interview-2

**Test Data**

- `checkId`: INT-128

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-493 — Employee list carries interviewOpportunities for qa1

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"limit","message":"limit must be one of the following values: 100, 200, 300"}] io=undefined |
| **Last Result** | skipped |
| **Notes** | Wrong query in test; covered by ALC-027/028. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: Employee list carries interviewOpportunities for qa1
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

>=1 active

**Test Data**

- `checkId`: INT-129

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-494 — Bypass → Being Prepared; remaining allocation reserves 40%

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | before=100 after=60 blocked=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Bypass → Being Prepared; remaining allocation reserves 40%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

remainingAllocationPercentage drops by 40 while Blocked

**Test Data**

- `checkId`: ALC-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-495 — Candidate picker shows the blocked reservation too

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | picker remaining=60 booked=40 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate picker shows the blocked reservation too
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

picker remaining = 100-40

**Test Data**

- `checkId`: ALC-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-496 — Date R1 yesterday → card goes to Interview Scheduled (not auto to Waiting for Feedback)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | INTERVIEW_SCHEDULED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Date R1 yesterday → card goes to Interview Scheduled (not auto to Waiting for Feedback)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

INTERVIEW_SCHEDULED

**Test Data**

- `checkId`: ALC-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-497 — "Did the interview happen?" Yes → Waiting for Feedback

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opening moved successfully WAITING_FOR_FEEDBACK |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: "Did the interview happen?" Yes → Waiting for Feedback
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 WAITING_FOR_FEEDBACK

**Test Data**

- `checkId`: ALC-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-498 — R1 Not Cleared → select without confirmation is refused (round-skip safeguard)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: R1 Not Cleared → select without confirmation is refused (round-skip safeguard)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_015

**Test Data**

- `checkId`: ALC-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-499 — Select with confirmation (FRD rule 20 skip dialog)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Candidate selected successfully WON |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Select with confirmation (FRD rule 20 skip dialog)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 WON

**Test Data**

- `checkId`: ALC-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-500 — After select: WON, SELECTED, filled 1/1

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | WON SELECTED filled=1/1 blocked=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: After select: WON, SELECTED, filled 1/1
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

WON

**Test Data**

- `checkId`: ALC-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-501 — Won-elsewhere notification to PMO (FRD change list)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | Not sent to the acting PMO (actor excluded); delivered to the other PMO (vihaan.chatterjee): notification.opportunity.candidate_won_elsewhere |
| **Last Result** | passed |
| **Notes** | Works; actor is excluded from own notifications. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Won-elsewhere notification to PMO (FRD change list)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

PMO notification candidate_won_elsewhere

**Test Data**

- `checkId`: ALC-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-502 — Allocate FIXED without % 

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 400 SYS_004 Validation failed: allocationPercentage is required when allocationType is FIXED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate FIXED without % 
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: ALC-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-503 — Allocate end before start

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 400 SYS_004 Validation failed: Start date must not be after end date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate end before start
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: ALC-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-504 — Allocate with 101%

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"allocationPercentage","message":"allocationPercentage must not be greater than 100"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate with 101%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: ALC-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-505 — Allocate with a different % than the position (40 → 60)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | see next |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate with a different % than the position (40 → 60)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record (no check against position)

**Test Data**

- `checkId`: ALC-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-507 — Allocation ticket in Allocation Requests (born approved)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Allocation ticket details retrieved successfully NA-0416 type=NEW_ALLOCATION status=APPROVED proj=AnalytixHub \| Advanced Analytics |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocation ticket in Allocation Requests (born approved)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

ticket APPROVED/CLOSED, NEW_ALLOCATION, employee aditi, project AnalytixHub

**Test Data**

- `checkId`: ALC-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-508 — Interview Allocation tab in Requests Tracking lists it

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Interview allocation requests retrieved successfully total=84 found=true |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Interview Allocation tab in Requests Tracking lists it
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

interview-requests contains this opportunity

**Test Data**

- `checkId`: ALC-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-509 — Two-way alert lists the new upcoming allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | ["FlowState \| Process Automation:ASSIGNMENT:2026-07-20:null","AnalytixHub \| Advanced Analytics:ASSIGNMENT:2026-11-10:40"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Two-way alert lists the new upcoming allocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

AnalytixHub ASSIGNMENT

**Test Data**

- `checkId`: ALC-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-510 — Remaining allocation after allocation (reservation released, booking counted)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | remaining=60 booked=40 live=[[40,"2026-11-10","2027-02-18"]] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Remaining allocation after allocation (reservation released, booking counted)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: ALC-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-511 — Unlink project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | Retest 26 Oct (RT-004/005): OPP-0054 change/unlink → 400 OPP_176. |
| **Finding Ref** | F-10 |
| **Last Result** | passed |
| **Notes** | F-10: Project can be unlinked or changed after a candidate is already allocated to it |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Unlink project after allocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

should be refused (allocation exists)

**Test Data**

- `checkId`: ALC-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-512 — Change project after allocation

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | Retest 26 Oct (RT-004): change to ElitePay → 400 OPP_176. |
| **Finding Ref** | F-10 |
| **Last Result** | passed |
| **Notes** | F-10: Project can be unlinked or changed after a candidate is already allocated to it |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Change project after allocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

should be refused

**Test Data**

- `checkId`: ALC-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-513 — Drag Project Allocated card backwards

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag Project Allocated card backwards
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

refused or allocation undone (rule 17 side effect)

**Test Data**

- `checkId`: ALC-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-514 — Mark Opportunity LOST after a candidate is Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully card=PROJECT_ALLOCATED nomination=SELECTED allocTicket=APPROVED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Mark Opportunity LOST after a candidate is Project Allocated
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

allocated candidate must not be silently released

**Test Data**

- `checkId`: ALC-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-515 — Reopen after LOST: allocated card intact?

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | OPEN card=PROJECT_ALLOCATED noms=SELECTED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reopen after LOST: allocated card intact?
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

PROJECT_ALLOCATED kept

**Test Data**

- `checkId`: ALC-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-516 — Re-initiate position that has a Project Allocated seat

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 400 OPP_122 This Position has no Candidates to re-initiate stages=undefined |
| **Last Result** | skipped |
| **Notes** | Test error (shortlist of the already-allocated employee was refused, so nothing to re-initiate). |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Re-initiate position that has a Project Allocated seat
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

allocated seat kept

**Test Data**

- `checkId`: ALC-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-517 — Employee profile history lists the allocated opportunity

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | OPP-0054:PROJECT_ALLOCATED:SELECTED OPP-0053:SHORTLISTED:CONSIDERED OPP-0052:PENDING_TO_SHORTLIST:RELEASED OPP-0047:PENDING_TO_SHORTLIST:RELEASED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: Employee profile history lists the allocated opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

history has ticket with PROJECT_ALLOCATED

**Test Data**

- `checkId`: ALC-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-518 — Candidate (akash.pandya) sees own history (self)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully n=4 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate (akash.pandya) sees own history (self)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 own items

**Test Data**

- `checkId`: ALC-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-520 — Employee list Interview opportunities column (PMO)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SYS_003 Operation completed successfully io=["OPP-0053:SHORTLISTED:50"] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: Employee list Interview opportunities column (PMO)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

aditi row lists live interview opps with %

**Test Data**

- `checkId`: ALC-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-521 — Employee list column for a TM (can read opportunities)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SYS_003 Operation completed successfully io=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: Employee list column for a TM (can read opportunities)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

populated for TM JAVA

**Test Data**

- `checkId`: ALC-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-545 — Two-way alert (allocation side): employee in interview opps

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | interview=OPP-0047:50,OPP-0048:50,OPP-0112:50,OPP-0113:50 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Two-way alert (allocation side): employee in interview opps
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

non-blocking list

**Test Data**

- `checkId`: DIR-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-546 — Two-way alert as CSM (raiser)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Allocation conflicts fetched successfully interview=undefined |
| **Finding Ref** | F-14 |
| **Last Result** | passed |
| **Notes** | ☑️ Working as decided (developer response 26 Oct): Direct opportunities left out of the two-way alert (decision 15 Oct). · F-14: CSM raising a Direct ticket sees an empty two-way allocation alert |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Two-way alert as CSM (raiser)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record — CSM raises Direct tickets but scope is PROJECT

**Test Data**

- `checkId`: DIR-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-548 — Direct tab in Requests Tracking lists the allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | undefined/undefined; direct tab 200 total=704 found=false isInterviewRequired=undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Direct tab in Requests Tracking lists the allocation ticket
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

allocation-tickets?allocationMode=DIRECT has it

**Test Data**

- `checkId`: DIR-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-561 — PMO notified of cancellation from stage (FRD notif #19)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | notification.opportunity.direct_cancelled: Direct ticket OPP-0119 for Divya Rathod was cancelled. Reason: Client postponed \|\| notification.opportunity.direct_cancelled: Direct ticket OPP-0119 for Divya Rathod was cancelled. Reason: Client postponed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO notified of cancellation from stage (FRD notif #19)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

PMO gets "cancelled by CSM from stage In Review"

**Test Data**

- `checkId`: DIR-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-595 — Edit history / change log (FRD §8: full change log, recent edits highlighted)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | updatedBy=Bhumi Chauhan updatedAt=2026-10-26T11:11:34.905Z historyField=false |
| **Finding Ref** | F-18 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): No edit history yet. · F-18: No change log on the opportunity and no 'Send Reminder' |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Edit history / change log (FRD §8: full change log, recent edits highlighted)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

updatedBy + some history

**Test Data**

- `checkId`: MSC-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-599 — Delete a position that has only CONSIDERED candidates → candidates notified?

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 200 SUCCESS Position deleted successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Delete a position that has only CONSIDERED candidates → candidates notified?
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200, nominations removed

**Test Data**

- `checkId`: MSC-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-643 — PM notified of assignment (OPP-0126)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | You've been assigned to OPP-0126 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM notified of assignment (OPP-0126)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

notification present

**Test Data**

- `checkId`: RT-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-644 — CSM notified of assignment (OPP-0126)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | You've been assigned to OPP-0126 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM notified of assignment (OPP-0126)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

notification present

**Test Data**

- `checkId`: RT-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-647 — EM "New position" notifications only for multi-department positions

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 1 notification(s): New position 'QA Engineer' on OPP-0130 |
| **Finding Ref** | F-20 |
| **Last Result** | skipped |
| **Notes** | ❓ Needs clarification: EM "New position" notifications for single-department positions. · F-20: Notification content issues |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: EM "New position" notifications only for multi-department positions
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

no notification for a QA-only position

**Test Data**

- `checkId`: RT-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-648 — Requests Tracking Interview tab tiles keep Lost and NLR apart

| Field | Value |
| --- | --- |
| **Tags** | @integration, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | board {"total":106,"open":102,"won":2,"lost":0,"onHold":0,"noLongerRequired":2} \| tracking {"all":138,"open":119,"won":15,"lost":4,"onHold":0} |
| **Finding Ref** | F-23 |
| **Last Result** | skipped |
| **Notes** | Not required (QA lead 26 Oct): Lost vs No Longer Required tiles on Requests Tracking. · F-23: Requests Tracking → Interview tab tiles mix Lost with No Longer Required / Closed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Requests Tracking Interview tab tiles keep Lost and NLR apart
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

NLR not counted as Lost; tickets not mixed

**Test Data**

- `checkId`: RT-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-659 — Rejection notification goes only to the rejected candidate (not other candidates)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | Akash Singh received; other candidates Janki Naik, Vandana Mishra did not; PMO2 received with reason |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Rejection notification goes only to the rejected candidate (not other candidates)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Rejected candidate + PMO/owners only

**Test Data**

- `checkId`: RT-023

**Automation Hint**

API-level check (scratchpad harness)

### Negative (192)

#### TC-OPPTY-202 — Title missing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title missing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-203 — Title empty string

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title empty string
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-204 — Title whitespace only

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title whitespace only
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-208 — clientType missing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientType missing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-209 — clientType invalid value

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType must be one of the following values: EXISTING, PROSPECT"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientType invalid value
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-210 — clientType lowercase

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientType","message":"clientType must be one of the following values: EXISTING, PROSPECT"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientType lowercase
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-211 — clientName missing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientName missing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-212 — clientName whitespace only

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"clientName","message":"clientName should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: clientName whitespace only
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-215 — websiteUrl not a URL

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: websiteUrl not a URL
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-217 — websiteUrl ftp scheme

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: websiteUrl ftp scheme
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-218 — websiteUrl no TLD (http://localhost)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: websiteUrl no TLD (http://localhost)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-221 — linkedinUrl invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"linkedinUrl","message":"linkedinUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: linkedinUrl invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-222 — interviewerLinkedinUrl invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"interviewerLinkedinUrl","message":"interviewerLinkedinUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: interviewerLinkedinUrl invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-022

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-230 — Unknown top-level key rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"foo","message":"property foo should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Unknown top-level key rejected
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-231 — positions empty array

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions","message":"positions must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: positions empty array
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-232 — positions missing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions","message":"positions is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: positions missing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-233 — projectPublicId not a uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"projectPublicId","message":"projectPublicId must be a UUID"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: projectPublicId not a uuid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-234 — projectPublicId random uuid (not found)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 404 OPP_010 Project not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: projectPublicId random uuid (not found)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404 OPP_010

**Test Data**

- `checkId`: VAL-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-237 — PROSPECT with projectPublicId

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully clientType=EXISTING |
| **Finding Ref** | F-15 |
| **Last Result** | passed |
| **Notes** | F-15: Create accepts contradictory data |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PROSPECT with projectPublicId
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Either refused or auto-switched to EXISTING (FRD: link makes prospect existing)

**Test Data**

- `checkId`: VAL-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-238 — Position title missing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Position title missing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-240 — techStacks empty

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"techStacks must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: techStacks empty
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-242 — techStacks item empty string

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.techStacks","message":"each value in techStacks should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: techStacks item empty string
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 (blank tech stack)

**Test Data**

- `checkId`: VAL-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-243 — techStacks duplicate values

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully ["Java"] |
| **Finding Ref** | F-17 |
| **Last Result** | passed |
| **Notes** | F-17: Duplicate values stored |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: techStacks duplicate values
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

de-duplicated or refused

**Test Data**

- `checkId`: VAL-043

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-244 — departmentPublicIds empty

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.departmentPublicIds","message":"departmentPublicIds must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: departmentPublicIds empty
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-245 — departmentPublicIds non-uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.departmentPublicIds","message":"each value in departmentPublicIds must be a UUID"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: departmentPublicIds non-uuid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-246 — departmentPublicIds unknown uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 404 OPP_016 One or more departments were not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: departmentPublicIds unknown uuid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404 OPP_016

**Test Data**

- `checkId`: VAL-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-247 — departmentPublicIds duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP_002 Opportunity created successfully depts=1 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: departmentPublicIds duplicate
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

de-duplicated or refused

**Test Data**

- `checkId`: VAL-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-249 — requiredCount 0

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount 0
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-250 — requiredCount -1

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount -1
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-253 — requiredCount "2" string

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.requiredCount","message":"requiredCount must be a whole number"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: requiredCount "2" string
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-256 — priority missing (Interview) → OPP_154

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_154 An Interview Position needs its priority |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: priority missing (Interview) → OPP_154
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_154, nothing created

**Test Data**

- `checkId`: VAL-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-257 — priority invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.priority","message":"priority must be one of the following values: HIGH, MEDIUM, LOW"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: priority invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-258 — preferredSeniority missing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredSeniority","message":"preferredSeniority is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: preferredSeniority missing
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-259 — preferredSeniority invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredSeniority","message":"preferredSeniority must be one of the following values: JUNIOR, MID, SENIOR, LEAD"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: preferredSeniority invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-059

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-260 — allocationType invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationType","message":"allocationType must be one of the following values: FIXED, DYNAMIC"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: allocationType invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-060

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-261 — FIXED without % → OPP_026

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage is required."}] |
| **Finding Ref** | F-21 |
| **Last Result** | passed |
| **Notes** | Refused as expected; error code is VAL_001, not the OPP_026 the backend guide lists (doc mismatch, see F-21). · F-21: Backend frontend guide is out of date with the deployed API |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: FIXED without % → OPP_026
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_026, nothing created

**Test Data**

- `checkId`: VAL-061

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-262 — FIXED 0%

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must not be less than 1"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: FIXED 0%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-062

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-263 — FIXED 101%

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.allocationPercentage","message":"allocationPercentage must not be greater than 100"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: FIXED 101%
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-063

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-267 — DYNAMIC with % → OPP_027

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_027 Allocation % must be omitted for a Dynamic allocation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: DYNAMIC with % → OPP_027
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_027, nothing created

**Test Data**

- `checkId`: VAL-067

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-270 — tentativeAllocationDate impossible (2026-02-30)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.tentativeAllocationDate","message":"tentativeAllocationDate must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: tentativeAllocationDate impossible (2026-02-30)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-070

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-272 — End date before start → OPP_093

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_093 The tentative allocation end date cannot be before its start date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: End date before start → OPP_093
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_093, nothing created

**Test Data**

- `checkId`: VAL-072

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-274 — End date without start date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_177 Set the tentative allocation date before its end date |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: End date without start date
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

refused (end needs a start)

**Test Data**

- `checkId`: VAL-074

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-275 — isInterviewRequired=false with roundTitles → OPP_029

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: isInterviewRequired=false with roundTitles → OPP_029
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_029, nothing created

**Test Data**

- `checkId`: VAL-075

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-276 — isInterviewRequired=false with interview date → OPP_029

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: isInterviewRequired=false with interview date → OPP_029
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_029, nothing created

**Test Data**

- `checkId`: VAL-076

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-277 — INTERVIEW request with isInterviewRequired=false

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Finding Ref** | F-15 |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). · F-15: Create accepts contradictory data |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: INTERVIEW request with isInterviewRequired=false
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Contradiction — should be refused (Interview ticket without interview)

**Test Data**

- `checkId`: VAL-077

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-278 — tentativeInterviewDate after allocation date

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_180 The tentative interview date must be on or before the tentative allocation date |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: tentativeInterviewDate after allocation date
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

Interview should be before allocation — refused or warned

**Test Data**

- `checkId`: VAL-078

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-279 — tentativeInterviewDate in the past

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_179 The tentative interview date cannot be in the past |
| **Finding Ref** | F-16 |
| **Last Result** | passed |
| **Notes** | F-16: API accepts dates the UI forbids or that make no sense |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: tentativeInterviewDate in the past
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

refused

**Test Data**

- `checkId`: VAL-079

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-285 — prepMaterials url invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.prepMaterials.0.url","message":"url must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prepMaterials url invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-085

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-286 — prepMaterials title empty

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.prepMaterials.0.title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: prepMaterials title empty
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-086

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-289 — preferredEmployeePublicIds duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.preferredEmployeePublicIds","message":"All preferredEmployeePublicIds's elements must be unique"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: preferredEmployeePublicIds duplicate
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-089

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-290 — preferredEmployeePublicIds unknown uuid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 404 OPP_048 Employee not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: preferredEmployeePublicIds unknown uuid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404 OPP_048

**Test Data**

- `checkId`: VAL-090

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-291 — employeePublicId on INTERVIEW position → OPP_129

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 OPP_129 Only a Direct Position names its Employee up front |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: employeePublicId on INTERVIEW position → OPP_129
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_129, nothing created

**Test Data**

- `checkId`: VAL-091

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-293 — locationPreference invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.locationPreference","message":"locationPreference should be one of WFO, WFH, HYBRID, USA, CANADA, EUROPE, AUSTRALIA, DUBAI, OTHER values. |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: locationPreference invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-093

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-294 — OTHER without otherLocation

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.otherLocation","message":"otherLocation cannot be empty."},{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: OTHER without otherLocation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-094

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-296 — otherLocation with WFO → SYS_004

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 SYS_004 otherLocation must only be supplied when locationPreference is OTHER |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: otherLocation with WFO → SYS_004
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-096

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-297 — USA without workMode

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.workMode","message":"workMode is required."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: USA without workMode
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-097

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-298 — USA ON_SITE without address

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.address","message":"address cannot be empty."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: USA ON_SITE without address
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-098

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-300 — workMode with WFH

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 SYS_004 workMode must only be supplied for a foreign locationPreference, not for WFO, WFH or HYBRID |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: workMode with WFH
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-100

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-301 — nightShift NONE + NS1 combined

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.nightShiftPreferences","message":"shiftPreferences cannot combine NONE with other shift preferences."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: nightShift NONE + NS1 combined
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-101

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-302 — address 501

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.address","message":"The address must not exceed 500 characters."}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: address 501
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-102

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-311 — csm raises EXISTING (project not managed)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_009 You can only raise or link Opportunities for Projects you manage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: csm raises EXISTING (project not managed)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-312 — csm raises EXISTING (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 400 OPP_019 Link a Project you manage to raise an Existing Client Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: csm raises EXISTING (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: RBAC-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-313 — pm raises EXISTING (project managed)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | ⏳ Pending product decision (26 Oct): PM raises Existing-Client tickets per Figma; FRD vs Figma being confirmed. · F-01: PM can raise Existing-client Interview and Direct opportunities |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: pm raises EXISTING (project managed)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-314 — pm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_008 You are not allowed to raise an Opportunity for a Prospect |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: pm raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-315 — tmQA raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM (QA): tmQA raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-009

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-316 — em raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: em raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-317 — rm raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: rm raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-318 — emp raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: emp raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-319 — admin raises PROSPECT (no project)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Admin: admin raises PROSPECT (no project)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: RBAC-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-323 — Assignee picker for TM/EM/CSM/Employee

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | tmQA:403 em:403 emp:403 rm:403 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Assignee picker for TM/EM/CSM/Employee
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_162 for non-raisers

**Test Data**

- `checkId`: RBAC-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-324 — Assign a non-PM as assignedPm

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 400 OPP_158 The assigned PM must be an active Employee who holds the PM role |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Assign a non-PM as assignedPm
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_158

**Test Data**

- `checkId`: RBAC-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-325 — Assign a non-CSM as assignedCsm

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 400 OPP_159 The assigned CSM must be an active Employee who holds the CSM role |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Assign a non-CSM as assignedCsm
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_159

**Test Data**

- `checkId`: RBAC-019

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-326 — CSM tries to set assignedCsm on create

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_160 Only PMO can assign a CSM to an Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM tries to set assignedCsm on create
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_160 (PMO only)

**Test Data**

- `checkId`: RBAC-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-331 — Non-assigned CSM (sai.gandhi) cannot open it

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Non-assigned CSM (sai.gandhi) cannot open it
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404

**Test Data**

- `checkId`: RBAC-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-334 — CSM (assigned) clears assignedCsm on an INTERVIEW opp

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_160 Only PMO can assign a CSM to an Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM (assigned) clears assignedCsm on an INTERVIEW opp
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 (PMO only)

**Test Data**

- `checkId`: RBAC-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-339 — tmQA edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM (QA): tmQA edits a PMO opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-033

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-340 — tmQA changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (QA) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM (QA): tmQA changes opportunity status
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-341 — em edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: em edits a PMO opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-342 — em changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: em changes opportunity status
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-343 — rm edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: rm edits a PMO opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-037

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-344 — rm changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: rm changes opportunity status
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-345 — pm edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: pm edits a PMO opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-346 — pm changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: pm changes opportunity status
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-040

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-347 — emp edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: emp edits a PMO opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-041

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-348 — emp changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: emp changes opportunity status
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-042

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-349 — admin edits a PMO opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 OPP_151 You are not allowed to edit this Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Admin: admin edits a PMO opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: RBAC-043

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-350 — admin changes opportunity status

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Admin: admin changes opportunity status
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404 (PMO only)

**Test Data**

- `checkId`: RBAC-044

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-351 — CSM changes status (mark Lost) on own opp

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM changes status (mark Lost) on own opp
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 (FRD: PMO only)

**Test Data**

- `checkId`: RBAC-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-357 — rm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: rm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-051

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-358 — emp: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: emp: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-359 — csm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: csm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-360 — pm: JAVA-dept opp 404, QA-dept opp 404

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404/404 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: pm: JAVA-dept opp 404, QA-dept opp 404
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404/404

**Test Data**

- `checkId`: RBAC-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-369 — Shortlist same employee twice in one request

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 This Employee is already nominated for this Position |
| **Last Result** | passed |
| **Notes** | Refused (409 OPP_028) — acceptable. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Shortlist same employee twice in one request
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-370 — Shortlist empty list

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"candidates","message":"candidates must contain at least 1 elements"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Shortlist empty list
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-372 — Re-shortlist an already live candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 409 OPP_028 This Employee is already nominated for this Position |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Re-shortlist an already live candidate
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

409 OPP_028

**Test Data**

- `checkId`: INT-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-376 — rm tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: rm tries to shortlist
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: INT-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-377 — csm tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: csm tries to shortlist
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: INT-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-378 — emp tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Employee: emp tries to shortlist
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: INT-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-379 — admin tries to shortlist

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Admin: admin tries to shortlist
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: INT-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-381 — TM (JAVA) shortlists on a QA-only position

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM (JAVA) shortlists on a QA-only position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404 (out of scope) — record

**Test Data**

- `checkId`: INT-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-385 — Candidate picker min>max

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_165 The minimum cannot be greater than the maximum |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate picker min>max
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_165

**Test Data**

- `checkId`: INT-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-388 — TM approves without request

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_107 Send the Candidate for approval first |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM approves without request
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_107

**Test Data**

- `checkId`: INT-024

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-389 — TM sends EM's pick (qa4) for approval

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_105 You can only send Candidates you shortlisted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM sends EM's pick (qa4) for approval
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_105 (own picks only)

**Test Data**

- `checkId`: INT-025

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-391 — Send same candidate twice

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_104 This Candidate was already sent for approval |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Send same candidate twice
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_104

**Test Data**

- `checkId`: INT-027

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-392 — Requester TM approves own request

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_111 You cannot approve or reject a request you sent |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: Requester TM approves own request
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400/403 OPP_111 (never the requester)

**Test Data**

- `checkId`: INT-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-395 — PMO sends qa2; TM (JAVA) tries to approve a QA candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO sends qa2; TM (JAVA) tries to approve a QA candidate
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_100 / 404

**Test Data**

- `checkId`: INT-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-396 — EM tries to approve (EM never approves)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | EM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As EM: EM tries to approve (EM never approves)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: INT-032

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-398 — Double approve (already approved)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_107 Send the Candidate for approval first |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Double approve (already approved)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_014/OPP_107

**Test Data**

- `checkId`: INT-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-400 — Withdraw by non-requester TM

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_109 Only the requester or PMO can withdraw this approval request |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Withdraw by non-requester TM
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_109

**Test Data**

- `checkId`: INT-036

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-402 — Withdraw when nothing pending

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_106 There is no pending approval request to withdraw |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Withdraw when nothing pending
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_106

**Test Data**

- `checkId`: INT-038

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-403 — TM tries bypass

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM tries bypass
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: INT-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-407 — Remove an IN_PROCESS nomination via DELETE

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |
| **Notes** | Refused (reason now required, then In-Process rule). |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Remove an IN_PROCESS nomination via DELETE
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_071 (reject instead)

**Test Data**

- `checkId`: INT-043

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-409 — Reject without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reject without reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-045

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-410 — Reject with whitespace reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Reject with whitespace reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-046

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-411 — TM passes rejectedByRole

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_101 Only PMO can record who rejected the Candidate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM passes rejectedByRole
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_101

**Test Data**

- `checkId`: INT-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-416 — Action on a REJECTED (historical) nomination id

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Action on a REJECTED (historical) nomination id
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404 OPP_040

**Test Data**

- `checkId`: INT-052

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-417 — TM drags a card

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM drags a card
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 (PMO only, rule 21)

**Test Data**

- `checkId`: INT-053

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-418 — Drag to WAITING_FOR_APPROVAL

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag to WAITING_FOR_APPROVAL
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-419 — Drag to WON directly

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag to WON directly
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 (not a drag target)

**Test Data**

- `checkId`: INT-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-420 — Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Skip 2 columns (Being Prepared → Waiting for Feedback) without confirm
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-056

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-421 — Drag Being Prepared → Interview Scheduled when no round has a date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_059 Enter the interview date to move the Candidate to this stage undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag Being Prepared → Interview Scheduled when no round has a date
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

refused or interview-date dialog required

**Test Data**

- `checkId`: INT-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-422 — Drag backwards to SHORTLISTED

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag backwards to SHORTLISTED
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 (never back to Shortlisted)

**Test Data**

- `checkId`: INT-058

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-424 — Drag an empty (Pending) card

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | EXCEPTION Cannot read properties of undefined (reading 'publicId') |
| **Last Result** | skipped |
| **Notes** | Test sequencing (no empty card in this run); covered 21 Oct. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Drag an empty (Pending) card
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-060

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-427 — Candidate ticks an unknown code

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_094 One or more checklist items are not on this Position’s Preparation Checklist |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate ticks an unknown code
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_094

**Test Data**

- `checkId`: INT-063

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-428 — Candidate tries to skip an item

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 OPP_166 Only PMO can skip or un-skip Preparation Checklist items |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate tries to skip an item
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_166 (PMO only)

**Test Data**

- `checkId`: INT-064

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-430 — Candidate ticks a PMO-skipped item

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_167 This checklist item was skipped by PMO and cannot be ticked |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate ticks a PMO-skipped item
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_167

**Test Data**

- `checkId`: INT-066

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-431 — Candidate edits another candidate's checklist

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate edits another candidate's checklist
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404

**Test Data**

- `checkId`: INT-067

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-432 — TM ticks a team member's checklist (read-only per matrix)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_040 Nomination not found |
| **Last Result** | passed |
| **Notes** | Refused with 404 (TM has no prepare grant) — read-only as intended. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM ticks a team member's checklist (read-only per matrix)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: INT-068

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-433 — Unrelated employee (kashyap) opens the opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Unrelated employee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Unrelated employee: Unrelated employee (kashyap) opens the opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404

**Test Data**

- `checkId`: INT-069

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-435 — TM adds a round

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM adds a round
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 (PMO only)

**Test Data**

- `checkId`: INT-071

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-436 — Round on CONSIDERED nomination

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_054 Interview Rounds can only be recorded for an In Process Nomination |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Round on CONSIDERED nomination
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_054

**Test Data**

- `checkId`: INT-072

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-438 — Round scheduledAt invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"scheduledAt","message":"scheduledAt must be a valid ISO 8601 date string"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Round scheduledAt invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-074

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-440 — Change finalized R1 date (rule 17 lock)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Interview Round updated successfully |
| **Finding Ref** | F-05 |
| **Last Result** | skipped |
| **Notes** | 🚧 Not built yet (developer response 26 Oct): Finalize/lock interview schedule. · F-05: Interview schedule cannot be locked, and dragging a card back silently wipes the interview date |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Change finalized R1 date (rule 17 lock)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-076

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-441 — Un-finalize R1

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"isFinalized","message":"property isFinalized should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Un-finalize R1
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-077

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-443 — Mark future-dated R1 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_138 A round can be marked Cleared or Not Cleared only once it has an interview date of today or earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Mark future-dated R1 Cleared
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_138

**Test Data**

- `checkId`: INT-079

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-444 — Mark undated R2 Cleared

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_138 A round can be marked Cleared or Not Cleared only once it has an interview date of today or earlier |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Mark undated R2 Cleared
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_138

**Test Data**

- `checkId`: INT-080

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-446 — Recording URL invalid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"recordingUrl","message":"recordingUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Recording URL invalid
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-082

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-448 — Delete a decided round

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_058 An Interview Round can be removed only while it is pending |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Delete a decided round
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_058

**Test Data**

- `checkId`: INT-084

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-452 — Edit allocation % with live candidates

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_153 Allocation type, percentage, tentative dates and preferred Employees cannot change once a Candidate is in the pipeline |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Edit allocation % with live candidates
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_153

**Test Data**

- `checkId`: INT-088

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-456 — Delete position with IN_PROCESS candidate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_025 A Position with a Candidate In Process or Selected cannot be deleted |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Delete position with IN_PROCESS candidate
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_025

**Test Data**

- `checkId`: INT-092

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-457 — Round-skip: select qa1 from Being Prepared without confirm

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Round-skip: select qa1 from Being Prepared without confirm
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-093

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-458 — TM selects (Won)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM selects (Won)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: INT-094

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-461 — Allocate with % above remaining capacity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate with % above remaining capacity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 ALLOCATION_TICKET_099 or similar

**Test Data**

- `checkId`: INT-097

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-462 — Allocate bad body (FIXED without %)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate bad body (FIXED without %)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-098

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-463 — TM / CSM allocate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 0/0 |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM / CSM allocate
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: INT-099

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-465 — Allocate the same nomination again

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | EXCEPTION Cannot read properties of undefined (reading 'publicId') |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Allocate the same nomination again
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-101

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-469 — Same status as current

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_014 This change is not allowed from the current stage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Same status as current
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-105

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-480 — NLR without confirmation

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_015 This change skips a step and needs a confirmation |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: NLR without confirmation
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_015

**Test Data**

- `checkId`: INT-116

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-483 — Re-initiate without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"reason","message":"reason should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Re-initiate without reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: INT-119

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-484 — TM re-initiates

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM re-initiates
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: INT-120

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-486 — Re-initiate when nothing to release

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 400 OPP_122 This Position has no Candidates to re-initiate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Re-initiate when nothing to release
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_122

**Test Data**

- `checkId`: INT-122

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-491 — createdFrom > createdTo

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Openings retrieved successfully total=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: createdFrom > createdTo
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 or empty

**Test Data**

- `checkId`: INT-127

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-522 — DIRECT without employee

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_126 A Direct Position needs the Employee to allocate |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT without employee
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_126

**Test Data**

- `checkId`: DIR-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-523 — DIRECT without tentative allocation date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_127 A Direct Position needs a tentative allocation date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT without tentative allocation date
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_127

**Test Data**

- `checkId`: DIR-002

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-524 — DIRECT with requiredCount 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT with requiredCount 2
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-525 — DIRECT with round titles

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT with round titles
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-526 — DIRECT with isInterviewRequired true

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"positions.0.isInterviewRequired","message":"property isInterviewRequired should not exist"}] |
| **Last Result** | skipped |
| **Notes** | 🗄 Retired — "Interview Required" field removed by decision (23 Oct). |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT with isInterviewRequired true
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-527 — DIRECT with prep material

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_128 A Direct Position has one Employee and no interview plan or preparation material |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT with prep material
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_128

**Test Data**

- `checkId`: DIR-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-528 — DIRECT with unknown employee

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 404 OPP_048 Employee not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: DIRECT with unknown employee
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404 OPP_048

**Test Data**

- `checkId`: DIR-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-529 — Same employee on two positions of one DIRECT request

| Field | Value |
| --- | --- |
| **Tags** | @negative, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_175 A Direct Opportunity has exactly one Position |
| **Finding Ref** | F-13 |
| **Last Result** | passed |
| **Notes** | F-13: A Direct request can hold only one employee |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Same employee on two positions of one DIRECT request
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

refused (duplicate allocation request)

**Test Data**

- `checkId`: DIR-008

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-534 — Interview action on a DIRECT ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_124 This action is only available on Interview Opportunities |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Interview action on a DIRECT ticket
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_124

**Test Data**

- `checkId`: DIR-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-535 — CSM (raiser) moves Direct stage

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM (raiser) moves Direct stage
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_133

**Test Data**

- `checkId`: DIR-014

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-536 — TM moves Direct stage

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM moves Direct stage
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: DIR-015

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-539 — Move backwards IN_REVIEW → OPEN

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Move backwards IN_REVIEW → OPEN
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_130

**Test Data**

- `checkId`: DIR-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-541 — Owner sets tentativeAllocationDate null

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_127 A Direct Position needs a tentative allocation date |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM (owner): Owner sets tentativeAllocationDate null
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_127

**Test Data**

- `checkId`: DIR-020

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-542 — Non-owner CSM (sai.gandhi) edits

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Non-owner CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Non-owner CSM: Non-owner CSM (sai.gandhi) edits
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: DIR-021

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-544 — Owner swaps employee while AWAITING

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_132 The Employee can only be changed while the ticket is Open or In Review |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM (owner): Owner swaps employee while AWAITING
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_132

**Test Data**

- `checkId`: DIR-023

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-549 — APPROVED is terminal

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Direct ticket stage updated successfully |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: APPROVED is terminal
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: DIR-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-550 — Owner edits after APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (owner) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_152 A Direct ticket can be edited only while it is open and not yet Approved or Rejected |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM (owner): Owner edits after APPROVED
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_152

**Test Data**

- `checkId`: DIR-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-551 — Cancel tag after APPROVED

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_147 Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Cancel tag after APPROVED
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_147

**Test Data**

- `checkId`: DIR-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-552 — Reject without reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_131 A reason is required to reject a Direct ticket |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Reject without reason
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_131

**Test Data**

- `checkId`: DIR-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-555 — REJECTED is terminal (move to IN_REVIEW)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_130 This Direct stage change is not allowed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: REJECTED is terminal (move to IN_REVIEW)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: DIR-034

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-556 — TM tries to cancel

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 403 OPP_149 Only PMO, the raiser, the Project PM or CSM, or the assigned PM or CSM can mark this Direct ticket as cancelled |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM tries to cancel
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404

**Test Data**

- `checkId`: DIR-035

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-560 — Cancel again

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | Re-checked with a reason: first 200, second 409 OPP_148 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Cancel again
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

409 OPP_148

**Test Data**

- `checkId`: DIR-039

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-568 — Force APPROVED without project

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Force APPROVED without project
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_049

**Test Data**

- `checkId`: DIR-047

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-570 — CSM links a project it does not manage

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 403 OPP_009 You can only raise or link Opportunities for Projects you manage |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM links a project it does not manage
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403 OPP_009

**Test Data**

- `checkId`: DIR-049

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-571 — CSM unlinks project on EXISTING

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 400 OPP_019 Link a Project you manage to raise an Existing Client Opportunity |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: CSM unlinks project on EXISTING
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_019

**Test Data**

- `checkId`: DIR-050

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-575 — APPROVED for fully-booked employee → capacity error passes through

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation "" |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: APPROVED for fully-booked employee → capacity error passes through
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 ALLOCATION_TICKET_099

**Test Data**

- `checkId`: DIR-054

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-585 — Candidate (employee) adds prep material

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Candidate |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 403 AUTH_004 Access forbidden |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As Candidate: Candidate (employee) adds prep material
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: MSC-005

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-590 — PATCH title null (required)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"title","message":"title should not be empty"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PATCH title null (required)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-010

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-591 — PATCH websiteUrl "" (not a clear per contract)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] stored=undefined |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PATCH websiteUrl "" (not a clear per contract)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 or ignored

**Test Data**

- `checkId`: MSC-011

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-592 — PATCH unknown key

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"status","message":"property status should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PATCH unknown key
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-012

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-593 — PATCH requestType (fixed at create)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"requestType","message":"property requestType should not exist"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PATCH requestType (fixed at create)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-596 — PMO edits a LOST opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO edits a LOST opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400/403 (edit only while OPEN)

**Test Data**

- `checkId`: MSC-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-597 — Add position to a LOST opportunity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_013 This action is not allowed while the Opportunity is not open |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Add position to a LOST opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-017

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-598 — Delete the last position

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 OPP_011 An Opportunity needs at least one Position; change its status instead |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Delete the last position
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_011

**Test Data**

- `checkId`: MSC-018

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-608 — RM shortlists (matrix: no)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | skip |
| **Last Result** | skipped |
| **Notes** | Depends on MSC-027. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As RM: RM shortlists (matrix: no)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403

**Test Data**

- `checkId`: MSC-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-614 — PM opens /pre-sales/new by URL

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Create form |
| **Actual Result** | ⏳ Pending product decision (26 Oct): PM create page per Figma. — Full "Create New Opportunity" form renders for the PM (Existing Client only, project required). Matches API (F-01). |
| **Finding Ref** | F-01 |
| **Last Result** | skipped |
| **Notes** | Screenshot: /tmp/claude-1002/-home-subham-SIMERP-new-project/2fba0c33-ce00-4694-b54e-c5d03e0473a9/scratchpad/ui/shots/r-pm-new.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. PM opens /pre-sales/new by URL

**Expected**

FRD: PM cannot create — page blocked

**Test Data**

- `checkId`: UI-003

**Automation Hint**

Playwright UI

#### TC-OPPTY-626 — Empty submit shows clear errors on every missing required field

| Field | Value |
| --- | --- |
| **Tags** | @negative, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Create form |
| **Actual Result** | BUG-028 — marked as a bug by QA lead (TC-OPPM-029). — Retest 26 Oct: date field no longer outlined red; empty form still only shows "8 required fields left". |
| **Finding Ref** | F-29 |
| **Last Result** | failed |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/rt-form-empty.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Empty submit shows clear errors on every missing required field

**Expected**

Each required field shows its own message

**Test Data**

- `checkId`: UI-015

**Automation Hint**

Playwright UI

#### TC-OPPTY-639 — PM cannot shortlist on an opportunity outside his scope

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 404 OPP_020 Position not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PM: PM cannot shortlist on an opportunity outside his scope
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404

**Test Data**

- `checkId`: RT-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-640 — Change project on OPP-0054 (candidate already allocated)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 400 OPP_176 A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Change project on OPP-0054 (candidate already allocated)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_176

**Test Data**

- `checkId`: RT-004

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-641 — Unlink project on OPP-0054

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Targeted bug retests (26 Oct 2026) |
| **Actual Result** | 400 OPP_176 A Candidate is already allocated to the linked Project, so the Project cannot be changed or removed |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Unlink project on OPP-0054
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 OPP_176

**Test Data**

- `checkId`: RT-005

**Automation Hint**

API-level check (scratchpad harness)

### Security (10)

#### TC-OPPTY-216 — websiteUrl javascript: scheme

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"websiteUrl","message":"websiteUrl must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: websiteUrl javascript: scheme
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400 VAL_001, nothing created

**Test Data**

- `checkId`: VAL-016

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-228 — jobDescription HTML with <script> is sanitised

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0079 "<p>Hello</p><img src=\"x\" /><a>x</a>" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: jobDescription HTML with <script> is sanitised
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + no script/onerror/javascript: stored

**Test Data**

- `checkId`: VAL-028

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-361 — Out-of-scope id returns 404 not 403 (no existence leak)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 404 OPP_001 Opportunity not found |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Out-of-scope id returns 404 not 403 (no existence leak)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

404

**Test Data**

- `checkId`: RBAC-055

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-519 — Another employee reads akash's history (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Opportunity history fetched successfully n=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Another employee reads akash's history (IDOR)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

403/404/empty

**Test Data**

- `checkId`: ALC-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-578 — Direct tickets do not leak into the Interview board

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | direct cards on interview board=0 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO / CSM: Direct tickets do not leak into the Interview board
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

no DIRECT card on default board

**Test Data**

- `checkId`: DIR-057

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-586 — Prep material URL javascript:

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 VAL_001 Validation failed [{"field":"url","message":"url must be a URL address"}] |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Prep material URL javascript:
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-006

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-609 — Title with HTML is stored raw (UI must escape)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 201 OPP_002 Opportunity created successfully stored=QA-AUTO <img src=x onerror=alert(1)> xss |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Title with HTML is stored raw (UI must escape)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

record

**Test Data**

- `checkId`: MSC-029

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-610 — Unauthenticated board read

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 401 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Unauthenticated board read
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

401

**Test Data**

- `checkId`: MSC-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-611 — Non-uuid id in path

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Prep material, edits, positions, checklist, security |
| **Actual Result** | 400 SYS_004 Validation failed (uuid is expected) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Non-uuid id in path
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

400

**Test Data**

- `checkId`: MSC-031

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-634 — Candidate opens own opportunity

| Field | Value |
| --- | --- |
| **Tags** | @security, @ui, @gap |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (candidate) |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | UI — Opportunity detail |
| **Actual Result** | Ignored by QA lead (26 Oct): candidate opens own opportunity (breadcrumb is expected). — Retest 26 Oct: shortlisted count no longer shown to the candidate ✓; breadcrumb still "Requests Tracking" ✗. |
| **Finding Ref** | F-30 |
| **Last Result** | skipped |
| **Notes** | Screenshot: /home/subham/SIMERP new project/reports/screenshots/2026-10-22/oppty/rt-candidate.png |

**Preconditions**

SimERP DEV UI, 21 Oct 2026, logged in as the role shown.

**Steps**

1. Candidate opens own opportunity

**Expected**

Sees only own candidacy, no edit actions

**Test Data**

- `checkId`: UI-023

**Automation Hint**

Playwright UI

### Smoke (8)

#### TC-OPPTY-201 — Minimal valid Interview/Prospect opportunity

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Create Opportunity — field validation |
| **Actual Result** | 201 OPP-0072 OPP-0072 OPEN INTERVIEW openings=1/PENDING_TO_SHORTLIST displayId=QA-QE-93 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Minimal valid Interview/Prospect opportunity
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201 created + ticket OPP-nnnn, status OPEN, 1 opening at PENDING_TO_SHORTLIST, requestType INTERVIEW

**Test Data**

- `checkId`: VAL-001

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-309 — csm raises EXISTING (project managed)

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Roles, assignment & visibility |
| **Actual Result** | 201 OPP_002 Opportunity created successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As CSM: csm raises EXISTING (project managed)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201

**Test Data**

- `checkId`: RBAC-003

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-371 — TM (QA) shortlists 2 QA candidates

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 201 OPP_074 Candidates nominated successfully #1:SHORTLISTED:CONSIDERED #2:SHORTLISTED:CONSIDERED |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM (QA) shortlists 2 QA candidates
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

201, 2 cards SHORTLISTED, CONSIDERED

**Test Data**

- `checkId`: INT-007

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-394 — Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | BEING_PREPARED IN_PROCESS blocked=true rounds=2 titles=R1 Technical\|R2 Client |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: Approved candidate: IN_PROCESS, Blocked, BEING_PREPARED, rounds seeded
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

2 planned rounds

**Test Data**

- `checkId`: INT-030

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-412 — TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6)

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Interview pipeline (end to end) |
| **Actual Result** | 200 SUCCESS Nomination rejected successfully PENDING_TO_SHORTLIST active=null |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As TM: TM rejects IN_PROCESS qa3 → slot back to Pending to Shortlist (rule 6)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

card PENDING_TO_SHORTLIST, nomination REJECTED

**Test Data**

- `checkId`: INT-048

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-506 — PMO allocates → Project Allocated + allocation ticket

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Won → Project Allocation (integration) |
| **Actual Result** | 200 SUCCESS Candidate allocated to the Project successfully PROJECT_ALLOCATED ticket=2f6d2cab-7ada-45ac-9e64-2df79ac680b5 blocked=false |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO allocates → Project Allocated + allocation ticket
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 PROJECT_ALLOCATED

**Test Data**

- `checkId`: ALC-013

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-547 — PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%)

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 0 SKIPPED_NOALLOC skipped: would create a real allocation directStage=undefined stage=undefined filled=undefined ticket=undefined |
| **Last Result** | skipped |
| **Notes** | Not re-run 26 Oct: would create a real allocation on dev. Allocation path verified 21 Oct (ALC-013/014, DIR-026/027) and still covered by RT checks. |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO AWAITING → APPROVED allocates at once (start=tentative date, 30%)
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 PROJECT_ALLOCATED, allocation ticket

**Test Data**

- `checkId`: DIR-026

**Automation Hint**

API-level check (scratchpad harness)

#### TC-OPPTY-564 — PMO closes cancelled ticket → No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0 · backend docs/frontend-guide-opportunities.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Direct allocation flow |
| **Actual Result** | 200 SUCCESS Opportunity status changed successfully |
| **Last Result** | passed |

**Preconditions**

SimERP DEV (simerp-dev.simform.solutions, 21 Oct 2026). Logged in through /dev-login as the role shown. Test data titled "QA-AUTO …".

**Steps**

1. As PMO: PMO closes cancelled ticket → No Longer Required
2. Check the response and the resulting state (board card / nomination / allocation)

**Expected**

200 NLR

**Test Data**

- `checkId`: DIR-043

**Automation Hint**

API-level check (scratchpad harness)
