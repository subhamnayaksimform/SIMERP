# Test Cases

**Total test cases:** 148  
**Modules covered:** Allocation Tickets, Certifications, Notifications  
**Source:** `reports/test-cases/cases-2026-10-19-TBT-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By module

| Module | Count | Share |
| --- | ---: | ---: |
| Allocation Tickets | 40 | 27.0% |
| Certifications | 77 | 52.0% |
| Notifications | 31 | 20.9% |

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 66 | 44.6% |
| negative | 33 | 22.3% |
| security | 17 | 11.5% |
| boundary | 12 | 8.1% |
| smoke | 8 | 5.4% |
| regression | 6 | 4.1% |
| accessibility | 4 | 2.7% |
| integration | 2 | 1.4% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 53 | 35.8% |
| high | 49 | 33.1% |
| low | 27 | 18.2% |
| critical | 19 | 12.8% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 55 | 37.2% |
| high | 47 | 31.8% |
| low | 28 | 18.9% |
| critical | 18 | 12.2% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 69 | 46.6% |
| code-review | 51 | 34.5% |
| requirement-vs-live | 14 | 9.5% |
| live-ui | 9 | 6.1% |
| code-derived | 5 | 3.4% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 69 | 46.6% |
| code-review | 51 | 34.5% |
| verified-live | 23 | 15.5% |
| code-derived | 5 | 3.4% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 88 | 59.5% |
| Yes | 60 | 40.5% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 66 | 44.6% |
| @negative | 33 | 22.3% |
| @regression | 20 | 13.5% |
| @security | 17 | 11.5% |
| @boundary | 13 | 8.8% |
| @smoke | 8 | 5.4% |
| @a11y | 4 | 2.7% |
| @integration | 2 | 1.4% |
| @profile | 2 | 1.4% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-SHDLNK-001](#tc-shdlnk-001-picker-shows-4-options-on-shadow-row) | Picker shows 4 options on shadow row | Allocation Tickets | smoke | high |
| [TC-SHDLNK-002](#tc-shdlnk-002-swap-primary-opens-the-same-picker) | "Swap Primary" opens the same picker | Allocation Tickets | functional | medium |
| [TC-SHDLNK-003](#tc-shdlnk-003-main-s-own-row-has-no-picker) | Main's own row has no picker | Allocation Tickets | negative | medium |
| [TC-SHDLNK-004](#tc-shdlnk-004-shadow-main-raises-3-linked-tickets) | Shadow→main raises 3 linked tickets | Allocation Tickets | smoke | critical |
| [TC-SHDLNK-005](#tc-shdlnk-005-shadow-main-new-shadow-raises-4-tickets) | Shadow→main + new shadow raises 4 tickets | Allocation Tickets | functional | high |
| [TC-SHDLNK-006](#tc-shdlnk-006-option-2-plain-yes-deallocate-drops-new-shadow-bug-2) | Option 2 + plain "Yes, Deallocate" drops new shadow (Bug 2) | Allocation Tickets | negative | high |
| [TC-SHDLNK-007](#tc-shdlnk-007-both-released-one-step-group) | Both released = one-step group | Allocation Tickets | functional | medium |
| [TC-SHDLNK-008](#tc-shdlnk-008-shadow-only-released-no-group) | Shadow only released = no group | Allocation Tickets | functional | medium |
| [TC-SHDLNK-009](#tc-shdlnk-009-list-column-icon-tooltip) | List column icon + tooltip | Allocation Tickets | functional | medium |
| [TC-SHDLNK-010](#tc-shdlnk-010-group-filter-toggle) | Group filter toggle | Allocation Tickets | functional | low |
| [TC-SHDLNK-011](#tc-shdlnk-011-blocked-banner-disabled-actions-on-step-2) | Blocked banner + disabled actions on step 2 | Allocation Tickets | functional | critical |
| [TC-SHDLNK-012](#tc-shdlnk-012-blocked-buttons-keyboard-accessible) | Blocked buttons keyboard accessible | Allocation Tickets | accessibility | low |
| [TC-SHDLNK-013](#tc-shdlnk-013-workflow-actions-stay-live-while-blocked) | Workflow actions stay live while blocked | Allocation Tickets | functional | high |
| [TC-SHDLNK-014](#tc-shdlnk-014-tm-em-cannot-approve-blocked-step-2) | TM/EM cannot approve blocked step 2 | Allocation Tickets | negative | critical |
| [TC-SHDLNK-015](#tc-shdlnk-015-api-approve-blocked-409) | API approve blocked → 409 | Allocation Tickets | security | critical |
| [TC-SHDLNK-016](#tc-shdlnk-016-api-bypass-blocked-409-nothing-saved) | API bypass blocked → 409, nothing saved | Allocation Tickets | security | critical |
| [TC-SHDLNK-017](#tc-shdlnk-017-tm-first-approval-blocked-via-api) | TM first approval blocked via API | Allocation Tickets | security | critical |
| [TC-SHDLNK-018](#tc-shdlnk-018-unlock-after-both-das-acknowledged) | Unlock after both DAs acknowledged | Allocation Tickets | functional | critical |
| [TC-SHDLNK-019](#tc-shdlnk-019-step-1-das-in-either-order) | Step-1 DAs in either order | Allocation Tickets | functional | medium |
| [TC-SHDLNK-020](#tc-shdlnk-020-full-approval-applies-swap) | Full approval applies swap | Allocation Tickets | integration | critical |
| [TC-SHDLNK-021](#tc-shdlnk-021-close-step-1-da-cascades-to-step-2) | Close step-1 DA cascades to step 2 | Allocation Tickets | functional | high |
| [TC-SHDLNK-022](#tc-shdlnk-022-close-step-1-da-leaves-sibling-da-bug-4) | Close step-1 DA leaves sibling DA (Bug 4) | Allocation Tickets | negative | medium |
| [TC-SHDLNK-023](#tc-shdlnk-023-close-promotion-leaves-new-shadow-na-bug-3) | Close promotion leaves new-shadow NA (Bug 3) | Allocation Tickets | negative | medium |
| [TC-SHDLNK-024](#tc-shdlnk-024-reject-step-2) | Reject step 2 | Allocation Tickets | functional | medium |
| [TC-SHDLNK-025](#tc-shdlnk-025-da-cannot-be-rejected) | DA cannot be rejected | Allocation Tickets | negative | medium |
| [TC-SHDLNK-026](#tc-shdlnk-026-withdraw-approved-da-period-with-approved-step-2) | Withdraw approved DA period with approved step 2 | Allocation Tickets | negative | high |
| [TC-SHDLNK-027](#tc-shdlnk-027-edit-da-date-on-after-promotion-start) | Edit DA date on/after promotion start | Allocation Tickets | boundary | medium |
| [TC-SHDLNK-028](#tc-shdlnk-028-edit-promotion-start-to-d) | Edit promotion start to D | Allocation Tickets | boundary | medium |
| [TC-SHDLNK-029](#tc-shdlnk-029-shadow-20-logged-hours-bug-1) | Shadow >20 logged hours (Bug 1) | Allocation Tickets | negative | high |
| [TC-SHDLNK-030](#tc-shdlnk-030-all-or-nothing-on-failure) | All-or-nothing on failure | Allocation Tickets | negative | high |
| [TC-SHDLNK-031](#tc-shdlnk-031-second-swap-on-same-main-blocked) | Second swap on same main blocked | Allocation Tickets | negative | medium |
| [TC-SHDLNK-032](#tc-shdlnk-032-non-owner-cannot-raise-swap) | Non-owner cannot raise swap | Allocation Tickets | security | high |
| [TC-SHDLNK-033](#tc-shdlnk-033-api-rule-checks) | API rule checks | Allocation Tickets | negative | medium |
| [TC-SHDLNK-034](#tc-shdlnk-034-department-scoped-view-hides-tickets) | Department-scoped view hides tickets | Allocation Tickets | security | medium |
| [TC-SHDLNK-035](#tc-shdlnk-035-ungrouped-bypass-still-possible-bug-5) | Ungrouped bypass still possible (Bug 5) | Allocation Tickets | regression | medium |
| [TC-SHDLNK-036](#tc-shdlnk-036-pmo-direct-allocation-ignores-group) | PMO direct allocation ignores group | Allocation Tickets | regression | low |
| [TC-SHDLNK-037](#tc-shdlnk-037-linked-tickets-card-navigation) | Linked Tickets card navigation | Allocation Tickets | functional | low |
| [TC-SHDLNK-038](#tc-shdlnk-038-copy-check) | Copy check | Allocation Tickets | functional | low |
| [TC-SHDLNK-039](#tc-shdlnk-039-concurrency-close-step-1-while-approving-step-2) | Concurrency: close step 1 while approving step 2 | Allocation Tickets | negative | medium |
| [TC-SHDLNK-040](#tc-shdlnk-040-main-end-date-deallocation-date) | Main end date ≤ deallocation date | Allocation Tickets | boundary | low |
| [TC-NOTLDR-001](#tc-notldr-001-employee-rm-tm-recipients-unchanged) | Employee→RM→TM: recipients unchanged | Notifications | regression | high |
| [TC-NOTLDR-002](#tc-notldr-002-one-lead-between-rm-and-tm-is-notified-fresh-allocation) | One Lead between RM and TM is notified (fresh allocation) | Notifications | smoke | critical |
| [TC-NOTLDR-003](#tc-notldr-003-senior-and-lead-both-notified) | Senior and Lead both notified | Notifications | functional | critical |
| [TC-NOTLDR-004](#tc-notldr-004-nobody-above-the-tm-is-notified) | Nobody above the TM is notified | Notifications | negative | high |
| [TC-NOTLDR-005](#tc-notldr-005-pmo-bypass-reaches-middle-managers) | PMO bypass reaches middle managers | Notifications | functional | high |
| [TC-NOTLDR-006](#tc-notldr-006-replacement-notifies-the-new-developer-s-chain) | Replacement notifies the new developer's chain | Notifications | functional | medium |
| [TC-NOTLDR-007](#tc-notldr-007-increase-full-flow) | Increase (full flow) | Notifications | functional | high |
| [TC-NOTLDR-008](#tc-notldr-008-decrease-lighter-flow) | Decrease (lighter flow) | Notifications | functional | high |
| [TC-NOTLDR-009](#tc-notldr-009-deallocation-via-csm-flow) | Deallocation via CSM flow | Notifications | functional | high |
| [TC-NOTLDR-010](#tc-notldr-010-pmo-direct-allocation) | PMO direct allocation | Notifications | functional | high |
| [TC-NOTLDR-011](#tc-notldr-011-pmo-direct-update-remove-placeholder-tickets) | PMO direct update / remove (placeholder tickets) | Notifications | functional | high |
| [TC-NOTLDR-012](#tc-notldr-012-revert-cancel-withdraw-scheduled-change) | Revert / cancel / withdraw scheduled change | Notifications | functional | medium |
| [TC-NOTLDR-013](#tc-notldr-013-pr-reviewer-assign-update-remove) | PR reviewer assign / update / remove | Notifications | functional | medium |
| [TC-NOTLDR-014](#tc-notldr-014-email-matches-in-app-for-middle-managers) | Email matches in-app for middle managers | Notifications | integration | medium |
| [TC-NOTLDR-015](#tc-notldr-015-no-duplicate-for-a-pm-who-is-also-a-lead-acceptance-criteria) | No duplicate for a PM who is also a Lead (acceptance criteria) | Notifications | negative | critical |
| [TC-NOTLDR-016](#tc-notldr-016-no-duplicate-when-a-lead-is-also-the-assigned-department-tm) | No duplicate when a Lead is also the assigned-department TM | Notifications | negative | medium |
| [TC-NOTLDR-017](#tc-notldr-017-rm-is-the-tm) | RM is the TM | Notifications | boundary | medium |
| [TC-NOTLDR-018](#tc-notldr-018-chain-does-not-reach-a-tm) | Chain does not reach a TM | Notifications | boundary | medium |
| [TC-NOTLDR-019](#tc-notldr-019-soft-deleted-manager-in-the-chain) | Soft-deleted manager in the chain | Notifications | boundary | low |
| [TC-NOTLDR-020](#tc-notldr-020-inactive-rm) | Inactive RM | Notifications | boundary | low |
| [TC-NOTLDR-021](#tc-notldr-021-ms-teams-group-cards-unchanged) | MS Teams group cards unchanged | Notifications | regression | low |
| [TC-NOTLDR-022](#tc-notldr-022-same-behaviour-in-every-department) | Same behaviour in every department | Notifications | regression | medium |
| [TC-NOTLDR-023](#tc-notldr-023-non-allocation-rm-notifications-unchanged) | Non-allocation RM notifications unchanged | Notifications | regression | low |
| [TC-NOTLDR-024](#tc-notldr-024-actor-exclusion-still-works-in-pr-reviewer-flows) | Actor exclusion still works in PR-reviewer flows | Notifications | negative | medium |
| [TC-NOTLDR-025](#tc-notldr-025-in-app-link-for-middle-managers) | In-app link for middle managers | Notifications | functional | low |
| [TC-NOTLDR-026](#tc-notldr-026-department-tm-is-not-in-the-line-em-admin-above-the-rm) | Department TM is not in the line: EM/Admin above the RM | Notifications | boundary | high |
| [TC-NOTLDR-027](#tc-notldr-027-actor-in-the-chain-is-not-notified-about-their-own-action) | Actor in the chain is not notified about their own action | Notifications | negative | medium |
| [TC-NOTLDR-028](#tc-notldr-028-replacement-outgoing-developer-s-line) | Replacement: outgoing developer's line | Notifications | functional | medium |
| [TC-NOTLDR-029](#tc-notldr-029-ticket-assigned-to-a-department-other-than-the-employee-s-home-department) | Ticket assigned to a department other than the employee's home department | Notifications | boundary | medium |
| [TC-NOTLDR-030](#tc-notldr-030-tm-of-another-department-in-the-middle-of-the-line) | TM of another department in the middle of the line | Notifications | boundary | low |
| [TC-NOTLDR-031](#tc-notldr-031-reporting-line-changes-between-ticket-creation-and-approval) | Reporting line changes between ticket creation and approval | Notifications | boundary | low |
| [TC-EMPCRT-001](#tc-empcrt-001-certifications-opens-from-employee-certifications-with-three-tabs-for-admin) | Certifications opens from Employee > Certifications with three tabs for Admin | Certifications | smoke | critical |
| [TC-EMPCRT-002](#tc-empcrt-002-employee-sees-only-their-own-list-with-no-tabs) | Employee sees only their own list with no tabs | Certifications | smoke | critical |
| [TC-EMPCRT-003](#tc-empcrt-003-organisation-level-shows-kpi-cards-and-the-certification-catalogue) | Organisation Level shows KPI cards and the certification catalogue | Certifications | smoke | critical |
| [TC-EMPCRT-004](#tc-empcrt-004-new-joiners-list-loads-for-admin) | New Joiners List loads for Admin | Certifications | smoke | high |
| [TC-EMPCRT-005](#tc-empcrt-005-add-certification-drawer-opens-with-all-required-fields) | Add Certification drawer opens with all required fields | Certifications | smoke | critical |
| [TC-EMPCRT-010](#tc-empcrt-010-my-certificate-rows-match-the-certifications-mine-api) | My Certificate rows match the /certifications/mine API | Certifications | functional | high |
| [TC-EMPCRT-011](#tc-empcrt-011-organisation-kpi-cards-match-certifications-organisation-summary) | Organisation KPI cards match /certifications/organisation/summary | Certifications | functional | high |
| [TC-EMPCRT-012](#tc-empcrt-012-total-certifications-active-expired) | Total certifications = Active + Expired | Certifications | functional | high |
| [TC-EMPCRT-013](#tc-empcrt-013-each-catalogue-row-employees-active-expired) | Each catalogue row: Employees = Active + Expired | Certifications | functional | high |
| [TC-EMPCRT-014](#tc-empcrt-014-search-filters-the-catalogue-by-title-or-partnership-and-is-kept-in-the-url) | Search filters the catalogue by title or partnership and is kept in the URL | Certifications | functional | medium |
| [TC-EMPCRT-015](#tc-empcrt-015-search-with-no-match-shows-the-empty-state) | Search with no match shows the empty state | Certifications | functional | medium |
| [TC-EMPCRT-016](#tc-empcrt-016-department-filter-re-scopes-table-and-kpis-and-survives-reload) | Department filter re-scopes table and KPIs and survives reload | Certifications | functional | high |
| [TC-EMPCRT-017](#tc-empcrt-017-partnership-filter-lists-every-partnership-from-the-api) | Partnership filter lists every partnership from the API | Certifications | functional | medium |
| [TC-EMPCRT-018](#tc-empcrt-018-status-filter-offers-active-and-expired) | Status filter offers Active and Expired | Certifications | functional | medium |
| [TC-EMPCRT-019](#tc-empcrt-019-view-employees-holding-opens-the-certificate-holders-page-with-matching-rows) | 'View employees holding' opens the Certificate Holders page with matching rows | Certifications | functional | high |
| [TC-EMPCRT-020](#tc-empcrt-020-clicking-an-expired-count-lists-the-expired-holders) | Clicking an Expired count lists the expired holders | Certifications | functional | medium |
| [TC-EMPCRT-021](#tc-empcrt-021-new-joiners-follow-up-follows-certifications-added) | New Joiners: Follow-Up follows Certifications Added | Certifications | functional | high |
| [TC-EMPCRT-022](#tc-empcrt-022-admin-can-add-on-behalf-of-another-employee) | Admin can add on behalf of another employee | Certifications | functional | high |
| [TC-EMPCRT-023](#tc-empcrt-023-never-expires-partnership-disables-expire-date) | Never-expires partnership disables Expire Date | Certifications | functional | high |
| [TC-EMPCRT-024](#tc-empcrt-024-standard-partnership-auto-fills-expire-date-from-the-partnership-validity) | Standard partnership auto-fills Expire Date from the partnership validity | Certifications | functional | high |
| [TC-EMPCRT-025](#tc-empcrt-025-save-certification-enables-only-when-every-required-field-is-filled) | Save Certification enables only when every required field is filled | Certifications | functional | high |
| [TC-EMPCRT-026](#tc-empcrt-026-uploading-a-valid-pdf-counts-as-proof) | Uploading a valid PDF counts as proof | Certifications | functional | medium |
| [TC-EMPCRT-027](#tc-empcrt-027-cancel-closes-the-drawer-without-saving) | Cancel closes the drawer without saving | Certifications | functional | medium |
| [TC-EMPCRT-028](#tc-empcrt-028-tab-deep-links-open-the-right-tab) | Tab deep links open the right tab | Certifications | functional | medium |
| [TC-EMPCRT-029](#tc-empcrt-029-employee-saves-a-certification-and-it-appears-as-active) | Employee saves a certification and it appears as Active | Certifications | functional | critical |
| [TC-EMPCRT-030](#tc-empcrt-030-proof-link-must-start-with-http-or-https) | Proof link must start with http:// or https:// | Certifications | negative | high |
| [TC-EMPCRT-031](#tc-empcrt-031-proof-file-over-5-mb-is-rejected) | Proof file over 5 MB is rejected | Certifications | negative | high |
| [TC-EMPCRT-032](#tc-empcrt-032-issue-date-cannot-be-in-the-future-ui) | Issue date cannot be in the future (UI) | Certifications | negative | high |
| [TC-EMPCRT-033](#tc-empcrt-033-title-longer-than-200-characters-shows-a-message) | Title longer than 200 characters shows a message | Certifications | negative | low |
| [TC-EMPCRT-034](#tc-empcrt-034-wrong-file-type-is-not-accepted-as-proof) | Wrong file type is not accepted as proof | Certifications | negative | low |
| [TC-EMPCRT-035](#tc-empcrt-035-api-rejects-expiry-on-or-before-issue-date) | API rejects expiry on or before issue date | Certifications | negative | high |
| [TC-EMPCRT-036](#tc-empcrt-036-api-rejects-other-invalid-saves) | API rejects other invalid saves | Certifications | negative | high |
| [TC-EMPCRT-037](#tc-empcrt-037-api-rejects-a-future-issue-date) | API rejects a future issue date | Certifications | negative | high |
| [TC-EMPCRT-038](#tc-empcrt-038-api-rejects-expiry-beyond-the-partnership-validity) | API rejects expiry beyond the partnership validity | Certifications | negative | high |
| [TC-EMPCRT-039](#tc-empcrt-039-api-rejects-non-http-s-proof-links) | API rejects non-http(s) proof links | Certifications | negative | medium |
| [TC-EMPCRT-040](#tc-empcrt-040-employee-cannot-reach-organisation-or-new-joiners-by-url) | Employee cannot reach Organisation or New Joiners by URL | Certifications | security | critical |
| [TC-EMPCRT-041](#tc-empcrt-041-pm-and-tm-see-my-certificate-organisation-level-only) | PM and TM see My Certificate + Organisation Level only | Certifications | security | high |
| [TC-EMPCRT-042](#tc-empcrt-042-employee-api-new-joiners-and-program-owners-are-forbidden-other-data-limited-to-self) | Employee API: New Joiners and Program Owners are forbidden; other data limited to self | Certifications | security | critical |
| [TC-EMPCRT-043](#tc-empcrt-043-employee-cannot-add-a-certification-for-someone-else-via-the-api) | Employee cannot add a certification for someone else via the API | Certifications | security | critical |
| [TC-EMPCRT-044](#tc-empcrt-044-only-admin-sees-add-partnership-add-program-owner-and-only-on-organisation-level) | Only Admin sees Add Partnership / Add Program Owner, and only on Organisation Level | Certifications | security | high |
| [TC-EMPCRT-045](#tc-empcrt-045-pmo-ui-and-api-agree-on-organisation-access) | PMO: UI and API agree on organisation access | Certifications | security | high |
| [TC-EMPCRT-050](#tc-empcrt-050-empty-values-use-a-readable-word-not-n-a) | Empty values use a readable word, not N/A | Certifications | accessibility | low |
| [TC-EMPCRT-051](#tc-empcrt-051-count-button-labels-read-correctly-for-1-holder) | Count button labels read correctly for 1 holder | Certifications | accessibility | low |
| [TC-EMPCRT-052](#tc-empcrt-052-add-certification-drawer-is-fully-labelled) | Add Certification drawer is fully labelled | Certifications | accessibility | medium |
| [TC-EMPCRT-053](#tc-empcrt-053-proof-link-error-appears-while-typing-without-blur) | Proof link error appears while typing, without blur | Certifications | negative | medium |
| [TC-EMPCRT-054](#tc-empcrt-054-proof-link-host-must-have-a-dot-and-a-letter-tld-or-be-a-valid-ipv4-address) | Proof link host must have a dot and a letter TLD, or be a valid IPv4 address | Certifications | negative | medium |
| [TC-EMPCRT-055](#tc-empcrt-055-clearing-a-bad-proof-link-removes-the-old-url-error) | Clearing a bad proof link removes the old URL error | Certifications | negative | low |
| [TC-EMPCRT-056](#tc-empcrt-056-expire-date-follows-the-issue-date-every-time-not-only-the-first-fill) | Expire Date follows the issue date every time (not only the first fill) | Certifications | functional | high |
| [TC-EMPCRT-057](#tc-empcrt-057-switching-between-never-expires-and-standard-partnerships-resets-expire-date) | Switching between never-expires and standard partnerships resets Expire Date | Certifications | functional | medium |
| [TC-EMPCRT-058](#tc-empcrt-058-month-end-and-leap-day-expiry-calculation) | Month-end and leap-day expiry calculation | Certifications | boundary | medium |
| [TC-EMPCRT-059](#tc-empcrt-059-add-partnership-website-uses-the-same-host-rule) | Add Partnership website uses the same host rule | Certifications | negative | medium |
| [TC-EMPCRT-060](#tc-empcrt-060-linkedin-field-info-tooltip) | LinkedIn field info tooltip | Certifications | functional | low |
| [TC-EMPCRT-061](#tc-empcrt-061-country-subdomain-linkedin-url-is-accepted-and-normalised) | Country-subdomain LinkedIn URL is accepted and normalised | Certifications | functional | low |
| [TC-EMPCRT-062](#tc-empcrt-062-pmo-login-as-an-employee-certifications-follow-the-impersonated-user) | PMO "Login as" an Employee: Certifications follow the impersonated user | Certifications | security | high |
| [TC-EMPCRT-063](#tc-empcrt-063-a-partnership-added-by-admin-is-selectable-in-the-employee-add-certification-form) | A partnership added by Admin is selectable in the Employee Add Certification form | Certifications | functional | high |
| [TC-EMPCRT-064](#tc-empcrt-064-the-new-partnership-s-1-year-validity-auto-fills-expire-date) | The new partnership's 1-year validity auto-fills Expire Date | Certifications | functional | medium |
| [TC-EMPCRT-065](#tc-empcrt-065-a-self-added-certification-shows-in-the-employee-s-my-certificate-list) | A self-added certification shows in the Employee's My Certificate list | Certifications | functional | high |
| [TC-EMPCRT-066](#tc-empcrt-066-a-certification-added-on-behalf-lands-on-the-chosen-employee-not-on-the-adder) | A certification added on behalf lands on the chosen employee, not on the adder | Certifications | functional | high |
| [TC-EMPCRT-067](#tc-empcrt-067-saved-certifications-roll-up-to-the-organisation-catalogue-and-holders-page) | Saved certifications roll up to the Organisation catalogue and holders page | Certifications | functional | high |
| [TC-EMPCRT-068](#tc-empcrt-068-the-organisation-partnership-filter-lists-the-new-partnership) | The Organisation Partnership filter lists the new partnership | Certifications | functional | low |
| [TC-EMPCRT-069](#tc-empcrt-069-add-partnership-save-stays-disabled-until-name-and-expiration-are-complete) | Add Partnership: Save stays disabled until name and expiration are complete | Certifications | functional | medium |
| [TC-EMPCRT-070](#tc-empcrt-070-on-behalf-employee-picker-is-scoped-to-the-manager-s-own-departments) | On-behalf employee picker is scoped to the manager's own departments | Certifications | security | high |
| [TC-EMPCRT-071](#tc-empcrt-071-employee-csm-and-pmo-get-no-on-behalf-switch) | Employee, CSM and PMO get no on-behalf switch | Certifications | security | high |
| [TC-EMPCRT-072](#tc-empcrt-072-after-saving-a-certification-saved-confirmation-screen-is-shown) | After saving, a "Certification Saved" confirmation screen is shown | Certifications | functional | medium |
| [TC-EMPCRT-073](#tc-empcrt-073-manager-hr-and-the-employee-are-notified-when-a-certification-is-saved) | Manager, HR and the employee are notified when a certification is saved | Certifications | functional | medium |
| [TC-EMPCRT-074](#tc-empcrt-074-certificate-title-is-picked-from-a-master-list-with-fuzzy-search) | Certificate Title is picked from a master list with fuzzy search | Certifications | functional | high |
| [TC-EMPCRT-075](#tc-empcrt-075-em-can-add-a-certification-on-behalf-of-their-department) | EM can add a certification on behalf of their department | Certifications | security | medium |
| [TC-EMPCRT-076](#tc-empcrt-076-rm-can-add-only-for-direct-reportees) | RM can add only for direct reportees | Certifications | security | medium |
| [TC-EMPCRT-077](#tc-empcrt-077-employee-profile-shows-a-read-only-certifications-card-with-an-add-certification-button) | Employee profile shows a read-only Certifications card with an Add Certification button | Certifications | functional | low |
| [TC-EMPCRT-078](#tc-empcrt-078-add-partnership-is-visible-only-to-chintan) | Add Partnership is visible only to Chintan | Certifications | security | medium |
| [TC-EMPCRT-079](#tc-empcrt-079-need-attention-uses-one-agreed-reminder-window) | "Need Attention" uses one agreed reminder window | Certifications | functional | medium |
| [TC-EMPCRT-080](#tc-empcrt-080-records-show-days-left-days-overdue-expiry-tags) | Records show days-left / days-overdue expiry tags | Certifications | functional | low |
| [TC-EMPCRT-081](#tc-empcrt-081-partnership-list-matches-the-agreed-list) | Partnership list matches the agreed list | Certifications | functional | low |
| [TC-EMPCRT-082](#tc-empcrt-082-employee-can-confirm-i-don-t-have-any-active-certification-for-now) | Employee can confirm "I don't have any active certification for now" | Certifications | functional | low |
| [TC-EMPCRT-083](#tc-empcrt-083-add-partnership-rejects-a-duplicate-partnership-name) | Add Partnership rejects a duplicate partnership name | Certifications | negative | medium |
| [TC-EMPCRT-084](#tc-empcrt-084-add-partnership-shows-messages-for-an-invalid-website-and-an-over-long-name) | Add Partnership shows messages for an invalid website and an over-long name | Certifications | negative | low |
| [TC-EMPCRT-085](#tc-empcrt-085-org-wide-table-and-tab-names-match-the-journey) | Org Wide table and tab names match the journey | Certifications | functional | low |

---

## Allocation Tickets

40 test cases.

### Accessibility (1)

#### TC-SHDLNK-012 — Blocked buttons keyboard accessible

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open the blocked step-2 NA
2. Tab to the disabled Approve button

**Expected**

Button receives focus; tooltip / sr-only reason is announced

### Boundary (3)

#### TC-SHDLNK-027 — Edit DA date on/after promotion start

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Withdraw / edit |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Edit the main's DA end date to D+1

**Expected**

400 _174 "The promotion and new-shadow start dates must be after both deallocation dates"

#### TC-SHDLNK-028 — Edit promotion start to D

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Withdraw / edit |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Edit the step-2 start date to D

**Expected**

400 _174; date unchanged

#### TC-SHDLNK-040 — Main end date ≤ deallocation date

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). The main has end date E.

**Steps**

1. Open the picker on S's row
2. Pick deallocation date = E
3. Confirm the swap

**Expected**

Check whether the swap fails (promotion end < start); record behaviour

### Functional (14)

#### TC-SHDLNK-002 — "Swap Primary" opens the same picker

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM (project owner) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open /my-projects/<project>
2. Hover the violet shadow badge on S's row
3. Click Swap Primary

**Expected**

The same picker opens

#### TC-SHDLNK-005 — Shadow→main + new shadow raises 4 tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 2 (Shadow becomes main + new shadow requested) → Continue
3. Fill the form → Submit
4. Confirm "Yes, Deallocate & Request New Allocation"

**Expected**

4 tickets; card heading "Step 2 · Promotion & new shadow"; flow label "Shadow becomes main, new shadow requested"

#### TC-SHDLNK-007 — Both released = one-step group

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 3 (both released)
3. Fill both tabs
4. Confirm

**Expected**

2 DA in one group; banner "Part of linked group G-n."; no lock anywhere

#### TC-SHDLNK-008 — Shadow only released = no group

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 4 (shadow only released)
3. Fill and confirm

**Expected**

1 DA; no Linked Group icon; main row unchanged

#### TC-SHDLNK-009 — List column icon + tooltip

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket list |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open /my-tickets
2. Hover the Linked Group icon on the step-2 row

**Expected**

Amber lock; tooltip "G-n · Step 2 of 2" + "Waiting on earlier-step tickets in G-n to be approved" + "Click to show only this group"

#### TC-SHDLNK-010 — Group filter toggle

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket list |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open /my-tickets
2. Click the Linked Group icon
3. Click it again

**Expected**

Chip "Linked Group" limits the list and stats to the group; second click clears

#### TC-SHDLNK-011 — Blocked banner + disabled actions on step 2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open the step-2 NA at AWAITING_CONFIRMATION
2. Read the banner
3. Hover Approve and Bypass Approval
4. Click Approve

**Expected**

Banner "Action blocked. Complete DA-x, DA-y first…"; Approve and Bypass Approval aria-disabled with tooltip "Blocked until the earlier step is approved (DA-x, DA-y)."; click does nothing

#### TC-SHDLNK-013 — Workflow actions stay live while blocked

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open the blocked step-2 NA
2. Assign department
3. Shortlist a developer
4. Click Send for Approval

**Expected**

All succeed; status moves to AWAITING_CONFIRMATION

#### TC-SHDLNK-018 — Unlock after both DAs acknowledged

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Acknowledge DA #1
2. Check the step-2 NA
3. Acknowledge DA #2
4. Check the step-2 NA and list icon

**Expected**

After #1 still blocked; after #2 banner "Step 2 of 2…", list icon becomes link, card "Step 1 · Deallocations — All approved"

#### TC-SHDLNK-019 — Step-1 DAs in either order

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Acknowledge the shadow's DA first
2. Then acknowledge the main's DA

**Expected**

Both succeed; no order inside step 1

#### TC-SHDLNK-021 — Close step-1 DA cascades to step 2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Close the main's DA while it is OPEN
2. Check the step-2 tickets and notifications

**Expected**

Promotion (and new shadow) CLOSED with remark "Closed automatically because prerequisite #DA-x was closed"; close notifications sent

#### TC-SHDLNK-024 — Reject step 2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | TM / EM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). Step 2 unlocked.

**Steps**

1. Reject the promotion NA with a remark
2. Check the promotion and the DAs

**Expected**

Back to IN_REVIEW, approvals cleared; DAs unaffected

#### TC-SHDLNK-037 — Linked Tickets card navigation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open a group ticket
2. Click a sibling ticket ID in the Linked Tickets card

**Expected**

Navigates to the sibling; current row marked "This ticket"

#### TC-SHDLNK-038 — Copy check

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Read option 1's description

**Expected**

Flag "no new ticket needed" as wrong (3 tickets + approvals)

### Integration (1)

#### TC-SHDLNK-020 — Full approval applies swap

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM + PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Apply swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). Both DAs acknowledged.

**Steps**

1. As TM, approve the promotion NA
2. As PMO, approve the promotion NA
3. Open the project team

**Expected**

APPROVED; shadow is main from D+1; main and old shadow row end on D

### Negative (12)

#### TC-SHDLNK-003 — Main's own row has no picker

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM (project owner) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open /my-projects/<project>
2. On M's row choose Deallocate Employee

**Expected**

Plain Deallocate form; a single DA; no group

#### TC-SHDLNK-006 — Option 2 + plain "Yes, Deallocate" drops new shadow (Bug 2)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 2) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 2 → Continue
3. Fill the form → Submit
4. Confirm with plain "Yes, Deallocate"

**Expected**

Expected per banner: 4 tickets. Suspected actual: 3 tickets, flow "Shadow becomes main"

#### TC-SHDLNK-014 — TM/EM cannot approve blocked step 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM / EM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. As TM/EM, open the step-2 NA
2. Hover Approve
3. Check Reject

**Expected**

Approve disabled with tooltip; Reject enabled

#### TC-SHDLNK-022 — Close step-1 DA leaves sibling DA (Bug 4)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. After TC-SHDLNK-021, open the shadow's DA

**Expected**

Suspected: still open/acknowledgeable; confirm intended behaviour

#### TC-SHDLNK-023 — Close promotion leaves new-shadow NA (Bug 3)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 3) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 4-ticket swap group exists.

**Steps**

1. Close the promotion NA
2. Open the new-shadow NA

**Expected**

Suspected: new-shadow NA stays open/approvable

#### TC-SHDLNK-025 — DA cannot be rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | TM / PMO (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Call PATCH /reject on a step-1 DA

**Expected**

400/409 _089 "Decrease/de-allocation tickets cannot be rejected"

#### TC-SHDLNK-026 — Withdraw approved DA period with approved step 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Withdraw / edit |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). Step 2 APPROVED.

**Steps**

1. Close the APPROVED step-1 DA, or delete its scheduled change

**Expected**

409 _182 "…a later step of its linked ticket group (#NA-…) is already approved…"

#### TC-SHDLNK-029 — Shadow >20 logged hours (Bug 1)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 1) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main + shadow pair where the shadow has logged more than 20 hours on the project.

**Steps**

1. Open the picker on the shadow's row
2. Choose option 1 → Continue
3. Fill and confirm

**Expected**

Suspected: toast "Failed to raise the linked tickets" with _161 ratings message; nothing raised; no way to enter shadow ratings

#### TC-SHDLNK-030 — All-or-nothing on failure

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, the main already has an open UA ticket). 

**Steps**

1. Raise a swap from the shadow's row
2. Check the ticket list

**Expected**

Error _024; no DA/NA/group created (list unchanged)

#### TC-SHDLNK-031 — Second swap on same main blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main with two shadows A and B.

**Steps**

1. Raise a swap with shadow A
2. Raise a swap with shadow B

**Expected**

Second fails with _024; nothing raised

#### TC-SHDLNK-033 — API rule checks

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. POST shadow-swap with a wrong pair
2. …with the same assignment twice
3. …with start = D
4. …BOTH_RELEASED with a promotion
5. …with promotion preference ≠ shadow
6. …with promotion requestType SHADOW_DEVELOPER

**Expected**

400 _183 / _179 / _174 / _176 / _184 / _186 respectively

#### TC-SHDLNK-039 — Concurrency: close step 1 while approving step 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO ×2 (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Fire close(DA) and approve(NA) in parallel

**Expected**

Only one wins; never an APPROVED promotion on top of a CLOSED DA

### Regression (2)

#### TC-SHDLNK-035 — Ungrouped bypass still possible (Bug 5)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 5) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM + PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ungrouped tickets |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Raise a plain DA on the main's row
2. Raise a separate NA preferring the shadow
3. Approve the NA first

**Expected**

Not blocked by a group; expect overlap 409 _098 "already has an active (non-archived) allocation on this project" (old inconsistency stays)

#### TC-SHDLNK-036 — PMO direct allocation ignores group

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ungrouped tickets |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. While the group is pending, direct-allocate the shadow or another developer to the project

**Expected**

Allowed (no group check); document outcome

### Security (5)

#### TC-SHDLNK-015 — API approve blocked → 409

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. While the DAs are pending, call PATCH /api/v1/allocation-tickets/<step-2 id>/approve

**Expected**

409 ALLOCATION_TICKET_172 "Complete the step 1 tickets (#…, #…) before actioning this ticket."; no approval recorded

#### TC-SHDLNK-016 — API bypass blocked → 409, nothing saved

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Call PATCH /api/v1/allocation-tickets/<step-2 id>/bypass-approval with department + shortlist fields
2. Re-read the ticket

**Expected**

409 _172; shortlist/department unchanged

#### TC-SHDLNK-017 — TM first approval blocked via API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. As TM, call PATCH /approve on the blocked step-2 NA
2. Re-read the ticket

**Expected**

409 _172; tmApprovedAt stays null

#### TC-SHDLNK-032 — Non-owner cannot raise swap

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / TM (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Call POST /allocation-tickets/shadow-swap on a project the caller does not own

**Expected**

403 "PROJECT_NOT_MANAGED_BY_CALLER"

#### TC-SHDLNK-034 — Department-scoped view hides tickets

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM / EM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). The step-1 DAs are outside the TM's department scope.

**Steps**

1. As TM/EM, open the step-2 NA

**Expected**

"Some linked tickets belong to other departments and aren't shown."; unnamed blocked text; no step progress counts

### Smoke (2)

#### TC-SHDLNK-001 — Picker shows 4 options on shadow row

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM (project owner) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open /my-projects/<project>
2. On S's row choose ⋯ → Deallocate Employee

**Expected**

"Deallocate Employee" dialog with Allocation Type and 4 radios; default "Shadow Developer becomes the main member"

#### TC-SHDLNK-004 — Shadow→main raises 3 linked tickets

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 1 (Shadow becomes main) → Continue
3. Fill reason and deallocation date D
4. Submit Deallocation
5. Confirm "Yes, Deallocate"

**Expected**

Toast "Linked tickets raised as G-n" / "3 tickets were raised together…"; 2 DA (step 1) + 1 NA (step 2, start D+1, preferred = shadow)

---

## Certifications

77 test cases.

### Accessibility (3)

#### TC-EMPCRT-050 — Empty values use a readable word, not N/A

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | New Joiners List |
| **Notes** | Currently FAILS: Aarav Patel shows 'N/A' as designation. |

**Preconditions**

Logged in as Admin

**Steps**

1. Open New Joiners List
2. Read each employee's designation line

**Expected**

No cell shows a bare 'N/A', '-' or 'null' (project empty-data convention)

#### TC-EMPCRT-051 — Count button labels read correctly for 1 holder

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the 'Show the N employees holding' count buttons |
| **Lifecycle Status** | superseded |
| **Notes** | Currently reads 'Show the 1 employees holding …'. |
| **Replaced By** | TC-EMPCRT-142 |

**Preconditions**

A catalogue row has 1 employee

**Steps**

1. Inspect the Employees count button's accessible name

**Expected**

'Show the 1 employee holding X' (singular)

#### TC-EMPCRT-052 — Add Certification drawer is fully labelled

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Open the drawer
2. Check accessible names

**Expected**

Every field, the switch (admin), date buttons and the upload zone have accessible names; Close button present

### Boundary (1)

#### TC-EMPCRT-058 — Month-end and leap-day expiry calculation

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. Needs a monthly-validity partnership, or Partnership 1 with Feb 29 as the issue date. 

**Steps**

1. With a 1-month partnership, pick issue date 2026-01-31 and read Expire Date
2. With Partnership 1 (12 months), pick issue date 2024-02-29 and read Expire Date
3. Compare with what the API stores/accepts for the same values

**Expected**

date-fns clamps to the month end: 2026-02-28 and 2025-02-28. The API accepts the same value (UI and API agree).

**Test Data**

- `issueDates`: 2026-01-31, 2024-02-29

### Functional (40)

#### TC-EMPCRT-010 — My Certificate rows match the /certifications/mine API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Admin has at least one certification

**Steps**

1. Open My Certificate
2. Read the row count and the 'Showing x - y of N' footer
3. Call GET /api/v1/certifications/mine?page=1&limit=100

**Expected**

UI row count and footer total equal API data.total; each row's title appears in the API items

#### TC-EMPCRT-011 — Organisation KPI cards match /certifications/organisation/summary

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Read the 4 KPI numbers
3. Call GET /certifications/organisation/summary

**Expected**

Total, Active, Expired, Need Attention equal API total/active/expired/needAttention

#### TC-EMPCRT-012 — Total certifications = Active + Expired

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Read KPI cards

**Expected**

Total == Active + Expired

#### TC-EMPCRT-013 — Each catalogue row: Employees = Active + Expired

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the catalogue count columns; Organisation Level is grouped by certificate now |
| **Lifecycle Status** | superseded |
| **Notes** | Currently FAILS: when one employee holds the same title more than once, Employees counts people (1) but Active/Expired count certificates (3) — row 'QA-NEG probe - please delete' shows 1 / 3 / 0. |
| **Replaced By** | TC-EMPCRT-139 |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. For every row read Employees, Active, Expired

**Expected**

Employees equals Active + Expired on every row (blank counts read as 0)

#### TC-EMPCRT-014 — Search filters the catalogue by title or partnership and is kept in the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Type 'snow' in the search box

**Expected**

Only rows whose title or partnership contains 'snow' remain; URL gains search=snow; KPI cards re-scope

#### TC-EMPCRT-015 — Search with no match shows the empty state

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Search for 'zzzqqq-no-match'

**Expected**

'No certifications found' + 'No certifications match your search or filters.'

#### TC-EMPCRT-016 — Department filter re-scopes table and KPIs and survives reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Pick FRONT END in the department filter
3. Reload

**Expected**

URL gains departmentId=<id>; KPI Total equals summary API for that department; after reload FRONT END still selected and same rows

#### TC-EMPCRT-017 — Partnership filter lists every partnership from the API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open My Certificate
2. Open the Partnership column filter

**Expected**

Options equal the names from GET /certifications/partnerships, sorted A–Z; Clear and Save buttons present

#### TC-EMPCRT-018 — Status filter offers Active and Expired

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open the Status column filter

**Expected**

Options exactly Active, Expired

#### TC-EMPCRT-019 — 'View employees holding' opens the Certificate Holders page with matching rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Certificate Holders |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the View employees holding button; holders route kept only for old links |
| **Lifecycle Status** | superseded |
| **Replaced By** | TC-EMPCRT-140 |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Click the eye icon on 'AWS Developer - Associate'

**Expected**

URL /employee/certifications/holders?partnershipId=…&title=…; holder rows = that row's Employees count; Active/Expired statuses match the row's counts

#### TC-EMPCRT-020 — Clicking an Expired count lists the expired holders

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the per-certificate expired count popover |
| **Lifecycle Status** | superseded |
| **Replaced By** | TC-EMPCRT-141 |

**Preconditions**

A catalogue row has Expired > 0

**Steps**

1. Click the Expired count badge on a row

**Expected**

Popover titled Expired lists exactly that many employee names

#### TC-EMPCRT-021 — New Joiners: Follow-Up follows Certifications Added

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | New Joiners List |

**Preconditions**

Logged in as Admin

**Steps**

1. Open New Joiners List

**Expected**

Rows with Certifications Added = Yes show 'No action needed'; rows with No show a 'Send Reminder' button (or 'No action needed')

#### TC-EMPCRT-022 — Admin can add on behalf of another employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Add Certification
2. Turn on 'Adding on Behalf of another employee'

**Expected**

A 'Select Employee' searchable combobox appears above Partnership

#### TC-EMPCRT-023 — Never-expires partnership disables Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Open Add Certification
2. Pick partnership Claude (NEVER_EXPIRES)

**Expected**

Expire Date is disabled and empty; hint 'This partnership never expires.'; asterisk removed

#### TC-EMPCRT-024 — Standard partnership auto-fills Expire Date from the partnership validity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Pick Partnership 1 (12 months)
2. Pick today as the issue date
3. Switch to AWS (3 years)

**Expected**

Expire Date = today + 12 months for Partnership 1 and today + 3 years for AWS; field is read-only

#### TC-EMPCRT-025 — Save Certification enables only when every required field is filled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill partnership, title, issue date, proof URL one by one

**Expected**

Save stays disabled until the last required field is filled, then enables

#### TC-EMPCRT-026 — Uploading a valid PDF counts as proof

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill the form without a link
2. Upload a small PDF

**Expected**

File name shows in the drop zone; Save enables

#### TC-EMPCRT-027 — Cancel closes the drawer without saving

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill some fields
2. Click Cancel

**Expected**

Drawer closes; no POST /certifications sent; list unchanged

#### TC-EMPCRT-028 — Tab deep links open the right tab

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open ?tab=organisation
2. Open ?tab=new-joiners

**Expected**

Matching tab is selected on load

#### TC-EMPCRT-029 — Employee saves a certification and it appears as Active

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |
| **Notes** | Manual only: there is no edit or delete (UI or API), so every automated run would leave a permanent record on dev. |

**Preconditions**

Employee has no matching cert; test data can be cleaned up

**Steps**

1. Add a cert with Partnership 1, issue date in the past, proof link
2. Save

**Expected**

Toast 'Certification added.'; row appears with Status Active and correct dates; Organisation totals go up by 1

#### TC-EMPCRT-056 — Expire Date follows the issue date every time (not only the first fill)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Select Partnership 1 (12 months)
2. Pick an issue date of today−10 and read Expire Date
3. Change the issue date to today−40 and read Expire Date
4. Check whether Expire Date is editable

**Expected**

Expire Date first shows (today−10)+12 months, then (today−40)+12 months. The field stays disabled.

**Test Data**

- `partnership`: Partnership 1 (12 months)
- `issueDates`: today-10, today-40

#### TC-EMPCRT-057 — Switching between never-expires and standard partnerships resets Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Pick an issue date
2. Select AWS (3y) and read Expire Date
3. Select Claude (never expires) and read Expire Date
4. Select Partnership 1 (12m) and read Expire Date

**Expected**

Shows +3y, then empty and disabled with "This partnership never expires.", then +12m. There is no leftover value from the earlier partnership.

**Test Data**

- `partnerships`: AWS (3y), Claude (never), Partnership 1 (12m)

#### TC-EMPCRT-060 — LinkedIn field info tooltip

| Field | Value |
| --- | --- |
| **Tags** | @functional, @profile |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Profile edit (EMPDET) |

**Preconditions**

Logged in. 

**Steps**

1. Open Profile → Edit
2. Hover the info icon next to "LinkedIn Profile URL"
3. Tab to the icon with the keyboard

**Expected**

Tooltip "Example: https://www.linkedin.com/in/your-name". The icon has an aria-label and is reachable with the keyboard (tabIndex=0). Better placed in the profile (EMPDET) suite.

#### TC-EMPCRT-061 — Country-subdomain LinkedIn URL is accepted and normalised

| Field | Value |
| --- | --- |
| **Tags** | @functional, @profile |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I571) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Profile edit (EMPDET) |

**Preconditions**

Logged in. Record the original LinkedIn value to restore it. 

**Steps**

1. Open Profile → Edit
2. Enter in.linkedin.com/in/qa-test in LinkedIn Profile URL
3. Save and read the stored/shown value
4. Restore the original value

**Expected**

Accepted. It is shown or saved as https://www.linkedin.com/in/qa-test. Better placed in the EMPDET suite.

**Test Data**

- `linkedin`: in.linkedin.com/in/qa-test

#### TC-EMPCRT-063 — A partnership added by Admin is selectable in the Employee Add Certification form

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Employee → Certifications
2. Click Add Certification
3. Open the Partnership dropdown

**Expected**

"QA-E2E Partner 2026-10-15" is listed.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-064 — The new partnership's 1-year validity auto-fills Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Certification |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Add Certification
2. Choose QA-E2E Partner 2026-10-15
3. Pick today as Issue Date
4. Do not save

**Expected**

Expire Date = today + 1 year and is read-only.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-065 — A self-added certification shows in the Employee's My Certificate list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | My Certificate |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Employee → Certifications

**Expected**

Row "QA-E2E self-add 2026-10-15 - please delete" shows QA-E2E Partner 2026-10-15, Active, 15/10/2026, 15/10/2027.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-066 — A certification added on behalf lands on the chosen employee, not on the adder

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) + Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add on Behalf |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. As Employee, open My Certificate
2. As Admin, open My Certificate

**Expected**

The on-behalf record is in the Employee's list and not in Admin's own list. Saved directly, no approval step.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-067 — Saved certifications roll up to the Organisation catalogue and holders page

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Organisation Level, search QA-E2E
2. Check both rows
3. Open the holders view for the self-add row

**Expected**

Each row: Employees 1, Active 1, Expired 0. Holders page lists Kashyap Patel, DATA ENGINEERING.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-068 — The Organisation Partnership filter lists the new partnership

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Organisation Level
2. Open Filter by Partnership

**Expected**

QA-E2E Partner 2026-10-15 is an option.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-069 — Add Partnership: Save stays disabled until name and expiration are complete

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Organisation Level open.

**Steps**

1. Open Add Partnership
2. Type a name
3. Choose Standard Expiration
4. Enter 2 in Expiration Time
5. Cancel

**Expected**

Save disabled when empty; enabled with name (Never Expires default); disabled again on Standard until a duration is entered. Nothing saved.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-072 — After saving, a "Certification Saved" confirmation screen is shown

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Certification |

**Preconditions**

Valid Add Certification form.

**Steps**

1. Save a certification

**Expected**

PDF: confirmation screen with partnership + status badges, title, issued/expires dates, "Notification sent" note, visibility note and View My Certifications / Add Another. DEV 2026-10-15: drawer closes with a "Certification added." toast only — FAILS against the PDF.

#### TC-EMPCRT-073 — Manager, HR and the employee are notified when a certification is saved

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) + Admin (ceo@simformsolutions.com) |
| **Sub Module** | Notifications |

**Preconditions**

A certification saved for kashyap.patel (self and on behalf).

**Steps**

1. Check the notification bell / GET /notifications for the employee and for their RM

**Expected**

PDF: manager + HR notified; renewal reminder 90 days before expiry. DEV 2026-10-15: employee received no notification after the on-behalf save; RM (Rohan Yadav) and HR have no test account, so they could not be checked.

#### TC-EMPCRT-074 — Certificate Title is picked from a master list with fuzzy search

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Certification |

**Preconditions**

Add Certification drawer open, Microsoft chosen.

**Steps**

1. Type "Azure" in Certification Title

**Expected**

PDF: searchable select, selection-only from the master list. DEV: free-text box ("Certification name"), no suggestions — any text is saved (e.g. the existing "1454" record). FAILS against the PDF.

#### TC-EMPCRT-077 — Employee profile shows a read-only Certifications card with an Add Certification button

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Employee Profile |

**Preconditions**

Open Employee → Kashyap Patel.

**Steps**

1. Look for a Certifications card next to Ratings / Location / Visa

**Expected**

PDF marks this as a GAP (not built). DEV: no card — matches the PDF. Re-test when built.

#### TC-EMPCRT-079 — "Need Attention" uses one agreed reminder window

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

Organisation Level open.

**Steps**

1. Hover the Need Attention info icon

**Expected**

PDF says 60 days ("past the 60-day reminder stage") and the confirmation copy says 90 days; DEV tooltip says "Active certifications expiring within 30 days". Three different numbers — product must pick one.

#### TC-EMPCRT-080 — Records show days-left / days-overdue expiry tags

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

Holders page open.

**Steps**

1. Look at a record's expiry

**Expected**

PDF: CONFIRMED expiry indicator tags. DEV: only Active/Expired status, no day counts. FAILS against the PDF.

#### TC-EMPCRT-081 — Partnership list matches the agreed list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Add Certification drawer open.

**Steps**

1. Open the Partnership dropdown

**Expected**

PDF list: Microsoft, AWS, Databricks, DataDog, dbtLabs, Claude, Snowflake, GCP, IBM, Lovable, Other. DEV: Databricks, dbtLabs, Lovable and Other are missing; test entries NPTEL, Partnership 1, Partnership 2 (and now QA-E2E) are present.

#### TC-EMPCRT-082 — Employee can confirm "I don't have any active certification for now"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | My Certificate |

**Preconditions**

Employee with no certifications.

**Steps**

1. Look for the button

**Expected**

PDF lists it as a suggestion only. DEV: not present. Track if product accepts it.

#### TC-EMPCRT-085 — Org Wide table and tab names match the journey

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

Certifications open.

**Steps**

1. Compare tabs and Organisation table columns

**Expected**

PDF: tabs My Certifications / Department Level / Org Wide / New Joiners List; table per record (Title, Partnership, Employee, Dept, Status, Link). DEV: My Certificate / Organisation Level / New Joiners List; table is a catalogue grouped by title with Employees/Active/Expired counts and a holders drill-down. Wording/layout deviation — confirm with product.

### Negative (16)

#### TC-EMPCRT-030 — Proof link must start with http:// or https://

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Type 'notaurl', 'ftp://x.com', 'javascript:alert(1)' in Proof of Certification, blurring each time

**Expected**

Each shows 'Enter a valid URL starting with http:// or https://.'; https://example.com shows no error

#### TC-EMPCRT-031 — Proof file over 5 MB is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Upload a 6 MB PDF

**Expected**

'The file must be 5 MB or smaller.'; Save stays disabled

#### TC-EMPCRT-032 — Issue date cannot be in the future (UI)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Open the Issue Date calendar

**Expected**

Tomorrow and later days are disabled

#### TC-EMPCRT-033 — Title longer than 200 characters shows a message

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |
| **Notes** | Currently FAILS: Save silently disables with no message (the string exists in the app but is never shown). |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill a valid form
2. Enter a 201-character title

**Expected**

Save disabled AND the message 'Must be 200 characters or fewer.' is shown next to the field

#### TC-EMPCRT-034 — Wrong file type is not accepted as proof

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |
| **Notes** | Observation: no message is shown either — the user gets no feedback. |

**Preconditions**

Logged in as Employee

**Steps**

1. Upload a .txt file

**Expected**

File is not attached; Save stays disabled

#### TC-EMPCRT-035 — API rejects expiry on or before issue date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. POST /api/v1/certifications with expiryDate = issueDate, then expiryDate < issueDate

**Expected**

400 'Expiry date must be after the issue date' both times

#### TC-EMPCRT-036 — API rejects other invalid saves

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. POST with: no proof; blank title; 201-char title; expiry for a never-expires partnership; unknown partnershipId; javascript: proof URL; dd/mm/yyyy date

**Expected**

Each returns 400/404 with a field message; nothing is created

#### TC-EMPCRT-037 — API rejects a future issue date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |
| **Notes** | DEFECT: API returns 201 and the cert shows as Active with a future issue date. Manual only — automating would create a permanent record each run. |

**Preconditions**

Employee session

**Steps**

1. POST with issueDate 2027-01-01, expiryDate 2028-01-01

**Expected**

400 — matches the UI rule that future days are disabled

#### TC-EMPCRT-038 — API rejects expiry beyond the partnership validity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |
| **Notes** | DEFECT: API returns 201. The UI auto-fills expiry, but any client or script can bypass it. |

**Preconditions**

Employee session

**Steps**

1. POST for Partnership 1 (12 months) with issue 2026-10-12, expiry 2030-01-01

**Expected**

400 'Expire date is beyond the partnership validity period.'

#### TC-EMPCRT-039 — API rejects non-http(s) proof links

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |
| **Notes** | DEFECT: API returns 201 for ftp:// (javascript: is rejected). |

**Preconditions**

Employee session

**Steps**

1. POST with proofUrl ftp://example.com/x

**Expected**

400 — the UI only allows http/https

#### TC-EMPCRT-053 — Proof link error appears while typing, without blur

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Type notaurl in Proof link
2. Do not tab out; read the field error
3. Replace the value with https://example.com/x
4. Do not press Save

**Expected**

"Enter a valid URL starting with http:// or https://." is visible straight away. Typing https://example.com/x clears it. Save is never pressed.

**Test Data**

- `invalid`: notaurl
- `valid`: https://example.com/x

#### TC-EMPCRT-054 — Proof link host must have a dot and a letter TLD, or be a valid IPv4 address

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Enter each of https://dddddd, https://localhost/x, http://999.1.1.1/x, https://a.b1 in Proof link and check the error and Save
2. Enter each of https://credly.com/b/1, https://in.credly.com/x, http://10.0.0.1/x and check the error and Save

**Expected**

The first four show the invalid-URL message and keep Save disabled. The last three are accepted. Note for product: private IPs pass in the UI.

**Test Data**

- `rejected`: https://dddddd, https://localhost/x, http://999.1.1.1/x, https://a.b1
- `accepted`: https://credly.com/b/1, https://in.credly.com/x, http://10.0.0.1/x

#### TC-EMPCRT-055 — Clearing a bad proof link removes the old URL error

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Type notaurl in Proof link (error shows)
2. Clear the field
3. Read the field message and Save state

**Expected**

The invalid-URL message disappears. Record what replaces it: "Add a verification link or upload the certificate." is expected because of the shared proof-required rule. It should not stay blank with Save enabled.

#### TC-EMPCRT-059 — Add Partnership website uses the same host rule

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Partnership |

**Preconditions**

Logged in as Admin. 

**Steps**

1. Open Certifications → Organisation Level → Add Partnership
2. Enter Website = https://dddddd and do not save
3. Replace with https://aws.amazon.com

**Expected**

Invalid-URL message for https://dddddd. https://aws.amazon.com is accepted.

#### TC-EMPCRT-083 — Add Partnership rejects a duplicate partnership name

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Add Partnership open.

**Steps**

1. Type "AWS" as the name
2. Observe Save (do not submit unless a throwaway env)

**Expected**

Expected: duplicate blocked with a message. DEV UI: Save is enabled for "AWS"; server response not tested to avoid creating a duplicate on dev.

#### TC-EMPCRT-084 — Add Partnership shows messages for an invalid website and an over-long name

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Add Partnership open.

**Steps**

1. Enter "not a url" as website
2. Enter a 300-character name

**Expected**

Expected: inline messages. DEV: invalid website just disables Save with no message; 300-character name accepted with no message or limit.

### Security (12)

#### TC-EMPCRT-040 — Employee cannot reach Organisation or New Joiners by URL

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Employee

**Steps**

1. Open ?tab=organisation
2. Open ?tab=new-joiners

**Expected**

No tabs, no KPI cards, no org or new-joiner data rendered

#### TC-EMPCRT-041 — PM and TM see My Certificate + Organisation Level only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi), TM (sudhansu.patel) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as PM / TM

**Steps**

1. Open the page
2. Open ?tab=new-joiners

**Expected**

Tabs exactly My Certificate, Organisation Level; new-joiners link falls back to My Certificate

#### TC-EMPCRT-042 — Employee API: New Joiners and Program Owners are forbidden; other data limited to self

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. GET /certifications/new-joiners
2. GET /certifications/program-owners
3. GET /certifications and /certifications/mine
4. GET /certifications/organisation/summary

**Expected**

403, 403; /certifications returns only the employee's own certificates; the org summary total equals the employee's own total

#### TC-EMPCRT-043 — Employee cannot add a certification for someone else via the API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. POST /certifications with employeeId of another employee

**Expected**

403 Access forbidden; nothing created

#### TC-EMPCRT-044 — Only Admin sees Add Partnership / Add Program Owner, and only on Organisation Level

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin, PM, Employee |
| **Sub Module** | My Certificate |

**Preconditions**

Sessions for each

**Steps**

1. Open Organisation Level as Admin
2. Open the page as PM and Employee

**Expected**

Admin: both buttons on Organisation Level, not on My Certificate; PM/Employee: neither button; Employee: no 'Adding on Behalf' switch

#### TC-EMPCRT-045 — PMO: UI and API agree on organisation access

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan) |
| **Sub Module** | My Certificate |
| **Notes** | NEEDS PRODUCT DECISION: PMO UI shows only My Certificate, yet the API returns all 154 org certs incl. every employee's name, department and proof link. |

**Preconditions**

PMO session

**Steps**

1. Open the page as PMO
2. GET /certifications/organisation and /certifications

**Expected**

Either PMO sees the Organisation tab, or the API returns no org-wide data

#### TC-EMPCRT-062 — PMO "Login as" an Employee: Certifications follow the impersonated user

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1485 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-T1525 follow-on) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094355907 |
| **Sub Module** | Scope |

**Preconditions**

Fresh PMO login (not the shared storageState). SI4-T1525 deployed. 

**Steps**

1. PMO → Login as kashyap.patel
2. Open Employee → Certifications
3. Call GET /certifications and /certifications/organisation
4. Call the New Joiners and Program Owners endpoints
5. Return to PMO

**Expected**

Only My Certificate is shown. The API returns only kashyap's own certificates, and New Joiners and Program Owners return 403. Covers T1525 and scope together.

#### TC-EMPCRT-070 — On-behalf employee picker is scoped to the manager's own departments

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | PM (hardik.trivedi) + TM (sudhansu.patel) |
| **Sub Module** | Add on Behalf |

**Preconditions**

Add Certification drawer open, on-behalf switch on.

**Steps**

1. Open Select Employee
2. Read every option's department

**Expected**

PM sees only PROJECT MANAGEMENT; TM sees only ANDROID / QA / CSM.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-071 — Employee, CSM and PMO get no on-behalf switch

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee, CSM, PMO |
| **Sub Module** | Add on Behalf |

**Preconditions**

Add Certification drawer open.

**Steps**

1. Look for "Adding on Behalf of another employee"

**Expected**

The switch is not shown.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-075 — EM can add a certification on behalf of their department

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | EM (kunal.jadeja) |
| **Sub Module** | Add on Behalf |

**Preconditions**

Add Certification drawer open.

**Steps**

1. Look for the on-behalf switch

**Expected**

PDF: TM/EM can add on behalf for their department. DEV: no switch for EM. Open question for product.

#### TC-EMPCRT-076 — RM can add only for direct reportees

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | PM/RM (hardik.trivedi) |
| **Sub Module** | Add on Behalf |

**Preconditions**

On-behalf picker open.

**Steps**

1. Compare picker list to the account's direct reportees

**Expected**

PDF: RM → direct reportees only. DEV: PM sees all 92 PROJECT MANAGEMENT employees (department scope, not reportee scope). Open question.

#### TC-EMPCRT-078 — Add Partnership is visible only to Chintan

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Organisation Level open.

**Steps**

1. Look for Add Partnership as the CEO Admin account

**Expected**

PDF: only Chintan sees the button. DEV: any Admin (ceo@) sees and can use it. Open question.

### Smoke (5)

#### TC-EMPCRT-001 — Certifications opens from Employee > Certifications with three tabs for Admin

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open the app
2. Expand Employee in the sidebar
3. Click Certifications

**Expected**

URL /employee/certifications; heading 'Certifications'; tabs My Certificate / Organisation Level / New Joiners List with My Certificate selected; 'Add Certification' button visible

**Automation Hint**

sidebar link href=/employee/certifications; getByRole('tab')

#### TC-EMPCRT-002 — Employee sees only their own list with no tabs

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as plain Employee

**Steps**

1. Open /employee/certifications

**Expected**

Page loads; no tablist; table headers Certification Title, Partnership, Status, Issue Date, Expiry Date, Actions; 'Add Certification' visible

#### TC-EMPCRT-003 — Organisation Level shows KPI cards and the certification catalogue

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open /employee/certifications?tab=organisation

**Expected**

KPI cards Total certifications, Active, Expired, Need Attention; table with Certification Title, Partnership, Employees, Active, Expired, Actions; at least one row

#### TC-EMPCRT-004 — New Joiners List loads for Admin

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | New Joiners List |

**Preconditions**

Logged in as Admin

**Steps**

1. Open /employee/certifications?tab=new-joiners

**Expected**

Table headers Employee Name, Department, Date of Joining, Certifications Added, Follow-Up; rows load

#### TC-EMPCRT-005 — Add Certification drawer opens with all required fields

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Click Add Certification

**Expected**

Drawer 'Add Certification' with Partnership*, Certification Title*, Issue Date*, Expire Date*, Proof of Certification* (link or file); Save Certification disabled

---

## Notifications

31 test cases.

### Boundary (8)

#### TC-NOTLDR-017 — RM is the TM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee whose RM holds TM for the department.

**Steps**

1. Trigger any covered allocation event for the employee
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM/TM gets the usual copies; nobody above is added

#### TC-NOTLDR-018 — Chain does not reach a TM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G2) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee D whose upward line never hits a TM for D's department.

**Steps**

1. Raise a New Allocation for D
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Only the RM is notified (by code design). Raise with the PO whether this matches the requirement (G2)

#### TC-NOTLDR-019 — Soft-deleted manager in the chain

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Line RM→X(deleted)→Lead→TM (DB/staging data needed).

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

X gets nothing; Lead is still notified

#### TC-NOTLDR-020 — Inactive RM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G4) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee whose RM is soft-deleted but the team still points to them.

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Code: RM, Senior and Lead all get nothing. Confirm the expected behaviour (G4)

#### TC-NOTLDR-026 — Department TM is not in the line: EM/Admin above the RM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q1) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee in a department whose TM is not in the reporting line (e.g. Urvashi Kamath, FRONT END: Sagar Khanpara → Rajesh Kumar [EM] → David Lais [ADMIN] → CTO).

**Steps**

1. As PMO, direct-allocate the employee to a project
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per PO decision on Q1. Code today: the EM and the Admin each get one RM copy; the department TM gets only their usual TM copy. If EM/leadership must be excluded, this fails.

#### TC-NOTLDR-029 — Ticket assigned to a department other than the employee's home department

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q8) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B (home department X, line RM → Lead → TM of X). A TM of department Y exists who is not in B's line.

**Steps**

1. Raise a New Allocation for B and assign it to department Y
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

The chain is worked out from B's home department X: RM + Lead get the RM copy. The TM of Y gets only the TM copies it gets today, and only once.

#### TC-NOTLDR-030 — TM of another department in the middle of the line

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q9) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee whose line is RM → P → TM, where P holds the TM role for a different department only.

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

P is treated as a middle manager and gets one RM copy; the walk continues to the employee's own TM. Confirm with PO (Q9).

#### TC-NOTLDR-031 — Reporting line changes between ticket creation and approval

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q12) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B with line RM → Lead L1 → TM. An admin can change B's RM's team so the Lead becomes L2.

**Steps**

1. Raise a New Allocation for B
2. Before approval, change the line so L2 replaces L1
3. Complete approval
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

L2 (the line at approval time) gets the RM copy; L1 gets nothing (Q12).

### Functional (12)

#### TC-NOTLDR-003 — Senior and Lead both notified

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C with line RM→Senior→Lead→TM.

**Steps**

1. Raise a New Allocation ticket for employee C
2. Complete full approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM, Senior and Lead each get exactly one developer_rm_assigned

#### TC-NOTLDR-005 — PMO bypass reaches middle managers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B (RM→Lead→TM).

**Steps**

1. Raise a New Allocation ticket for employee B
2. As PMO, bypass approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Lead gets developer_rm_assigned (RM copy, no bypass wording); TM gets its bypass-override copy as before

#### TC-NOTLDR-006 — Replacement notifies the new developer's chain

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: An existing developer to be replaced by employee B.

**Steps**

1. Raise a REPLACE ticket replacing the existing developer with employee B
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

B's RM + Lead are notified; the outgoing developer's chain gets nothing (behaviour unchanged, note it)

#### TC-NOTLDR-007 — Increase (full flow)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B has an active allocation.

**Steps**

1. Raise an UPDATE (increase) ticket for B
2. Approve as PMO and TM
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get developer_rm_updated

#### TC-NOTLDR-008 — Decrease (lighter flow)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B has an active allocation.

**Steps**

1. Raise an UPDATE (decrease) ticket for B
2. As PMO, acknowledge
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get developer_rm_updated

#### TC-NOTLDR-009 — Deallocation via CSM flow

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C allocated on a CSM project.

**Steps**

1. As CSM, submit a deallocation
2. Confirm the dialog
3. As PMO, click Acknowledge & Deallocate
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM, Senior, Lead get developer_rm_deallocated; the email shows the effective end date

#### TC-NOTLDR-010 — PMO direct allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C.

**Steps**

1. As PMO, open /my-tickets/direct-allocation
2. Directly allocate employee C to a project
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM, Senior, Lead get direct_employee_rm_assigned; employee and PM copies unchanged

#### TC-NOTLDR-011 — PMO direct update / remove (placeholder tickets)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B allocated.

**Steps**

1. As PMO, directly update B's allocation
2. As PMO, directly remove B's allocation
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get developer_rm_updated, then developer_rm_deallocated

#### TC-NOTLDR-012 — Revert / cancel / withdraw scheduled change

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B has a scheduled future change.

**Steps**

1. Revert an allocation period
2. Cancel an upcoming allocation
3. Withdraw a scheduled change
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get allocation_reverted / allocation_cancelled / period_cancelled

#### TC-NOTLDR-013 — PR reviewer assign / update / remove

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B as PR reviewer candidate.

**Steps**

1. Approve a PR-reviewer ticket for B
2. Change B's review frequency
3. Remove B as PR reviewer
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get pr_reviewer_rm_assigned, pr_reviewer.rm_updated, pr_reviewer.rm_deallocated

#### TC-NOTLDR-025 — In-app link for middle managers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G9) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Notification link |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Lead (with or without DM role) received the notification from TC-NOTLDR-002.

**Steps**

1. As the Lead, click the notification
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Link is hidden when the user has no ticket-read permission; if shown, record whether the ticket opens (G9)

#### TC-NOTLDR-028 — Replacement: outgoing developer's line

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q7) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Ticket types |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Developer O allocated on a project; O's line is RM → Lead → TM. Replacement developer B.

**Steps**

1. Raise a Replacement ticket replacing O with B
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per PO decision on Q7. Code today: O, O's RM and O's Lead get nothing; B's RM and line get the assigned copy.

### Integration (1)

#### TC-NOTLDR-014 — Email matches in-app for middle managers

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Channels |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B; email delivery or redirect available on the environment.

**Steps**

1. Run TC-NOTLDR-002
2. Open the Lead's and the RM's emails and compare
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

One email to the Lead with the same subject/body as the RM's, greeting with the Lead's name

### Negative (5)

#### TC-NOTLDR-004 — Nobody above the TM is notified

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C; note who the TM's own RM/EM is.

**Steps**

1. Perform the same action as TC-NOTLDR-003
2. Check the TM's own manager/EM
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

The TM's manager/EM gets no RM copy

#### TC-NOTLDR-015 — No duplicate for a PM who is also a Lead (acceptance criteria)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G1) |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: PM P is the Lead in employee X's chain and raises the ticket for X.

**Steps**

1. As PM P, raise a New Allocation for X
2. Complete approval
3. As P, count notifications for this action
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per acceptance criteria: P gets one notification. Code today: P gets pm_allocated + developer_rm_assigned (two). Expect failure (G1)

#### TC-NOTLDR-016 — No duplicate when a Lead is also the assigned-department TM

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Multi-department setup where the Lead holds TM for the ticket's assigned department.

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Exactly one developer_rm_assigned for that person

#### TC-NOTLDR-024 — Actor exclusion still works in PR-reviewer flows

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Acting PM is the Lead in the reviewer's chain.

**Steps**

1. As the PM, change the reviewer's frequency
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

The acting PM/Lead gets no pr_reviewer.rm_updated about their own change

#### TC-NOTLDR-027 — Actor in the chain is not notified about their own action

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: A PMO user who sits between the RM and TM in employee B's line.

**Steps**

1. Raise a New Allocation for B
2. As that PMO user, bypass TM/EM approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per Q4 suggestion: the acting PMO gets no RM copy about their own bypass. Code today: they get it (G10).

### Regression (4)

#### TC-NOTLDR-001 — Employee→RM→TM: recipients unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee A whose RM reports directly to the department TM.

**Steps**

1. Raise a fresh New Allocation ticket for employee A
2. Approve it as PMO and as TM
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM gets "developer RM assigned"; TM gets its usual copies; nobody else in the line gets anything new

#### TC-NOTLDR-021 — MS Teams group cards unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Channels |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Teams webhook configured for the department.

**Steps**

1. Run TC-NOTLDR-002
2. Check the Teams card content and recipients
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Teams card content and recipients are the same as before the release; no Lead mentions

#### TC-NOTLDR-022 — Same behaviour in every department

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: A B-type employee (RM→Lead→TM) in two or more departments.

**Steps**

1. Raise and approve a New Allocation in each department
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

A Lead is notified in each department

#### TC-NOTLDR-023 — Non-allocation RM notifications unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B with a visa or certification expiring, or a notice period starting.

**Steps**

1. Trigger or wait for the nightly job
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Only the RM is notified; the Lead is not

### Smoke (1)

#### TC-NOTLDR-002 — One Lead between RM and TM is notified (fresh allocation)

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B with line RM→Lead→TM.

**Steps**

1. Raise a New Allocation ticket for employee B
2. Complete full approval (PMO + TM)
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Lead gets the same in-app title/body and email as the RM; TM unchanged
