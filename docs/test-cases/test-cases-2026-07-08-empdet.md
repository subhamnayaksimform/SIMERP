# EMPDET — Employee Location Preference & Visa Information — Test Cases

**Total test cases:** 112  
**Modules covered:** EMPDET — Employee Location Preference & Visa Information  
**Source:** `reports/test-cases/cases-2026-07-08-EMPDET.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| boundary | 36 | 32.1% |
| functional | 35 | 31.3% |
| negative | 13 | 11.6% |
| security | 9 | 8.0% |
| regression | 8 | 7.1% |
| integration | 5 | 4.5% |
| smoke | 3 | 2.7% |
| a11y | 2 | 1.8% |
| performance | 1 | 0.9% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 52 | 46.4% |
| high | 51 | 45.5% |
| low | 6 | 5.4% |
| critical | 3 | 2.7% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 53 | 47.3% |
| minor | 48 | 42.9% |
| critical | 11 | 9.8% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 90 | 80.4% |
| regression-derived | 22 | 19.6% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 102 | 91.1% |
| speculative | 7 | 6.3% |
| inferred | 3 | 2.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 98 | 87.5% |
| No | 14 | 12.5% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 40 | 35.7% |
| @boundary | 37 | 33.0% |
| @regression | 18 | 16.1% |
| @negative | 13 | 11.6% |
| @needs-verification | 10 | 8.9% |
| @security | 9 | 8.0% |
| @integration | 5 | 4.5% |
| @smoke | 3 | 2.7% |
| @a11y | 2 | 1.8% |
| @performance | 1 | 0.9% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-001](#tc-empdet-001-critical-path-employee-sets-work-arrangement-prioritised-destinations-visible-accurately-to-rm-admin) | Critical path — Employee sets Work Arrangement + prioritised destinations, visible accurately to RM/Admin | EMPDET — Employee Location Preference & Visa Information | smoke | critical |
| [TC-EMPDET-002](#tc-empdet-002-critical-path-visa-add-auto-computes-status-on-site-foreign-destination-without-valid-visa-triggers-advisory-visa-match-gap) | Critical path — Visa add auto-computes status; on-site foreign destination without valid visa triggers advisory + Visa-Match gap | EMPDET — Employee Location Preference & Visa Information | smoke | critical |
| [TC-EMPDET-003](#tc-empdet-003-critical-path-delete-visa-record-after-confirmation-permanently-removes-it-reflected-immediately-in-listing-api) | Critical path — Delete visa record after confirmation permanently removes it, reflected immediately in listing/API | EMPDET — Employee Location Preference & Visa Information | smoke | critical |
| [TC-EMPDET-004](#tc-empdet-004-work-arrangement-mandatory-field-saves-and-renders-as-read-only-header-tag) | Work Arrangement mandatory field saves and renders as read-only header tag | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-005](#tc-empdet-005-relocation-toggle-yes-reveals-destination-section-no-hides-clears-it) | Relocation toggle Yes reveals destination section; No hides & clears it | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-006](#tc-empdet-006-adding-a-destination-appears-in-list-with-correctly-auto-assigned-priority) | Adding a destination appears in list with correctly auto-assigned Priority | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-007](#tc-empdet-007-destination-other-domestic-city-other-reveals-mandatory-specify-location-field) | Destination = 'Other Domestic City' / 'Other' reveals mandatory Specify Location field | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-008](#tc-empdet-008-work-mode-on-site-reveals-mandatory-city-address-field) | Work Mode = On-site reveals mandatory City/Address field | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-009](#tc-empdet-009-switching-work-mode-on-site-off-site-hides-city-address-field) | Switching Work Mode On-site → Off-site hides City/Address field | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-010](#tc-empdet-010-toggle-yes-with-at-least-one-destination-saves-successfully) | Toggle=Yes with at least one destination saves successfully | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-011](#tc-empdet-011-priority-auto-assigned-by-destination-add-order) | Priority auto-assigned by destination add order | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-012](#tc-empdet-012-drag-reordering-destinations-updates-priority-correctly) | Drag-reordering destinations updates Priority correctly | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-013](#tc-empdet-013-header-work-arrangement-tag-n-locations-indicator-reflect-actual-destination-count) | Header Work Arrangement tag + '+N locations' indicator reflect actual destination count | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-014](#tc-empdet-014-column-selector-enables-work-arrangement-relocation-columns-sorting-toggles-direction) | Column Selector enables Work Arrangement/Relocation columns; sorting toggles direction | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-015](#tc-empdet-015-filtering-employee-listing-by-relocation-destination-narrows-results) | Filtering Employee Listing by Relocation destination narrows results | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-016](#tc-empdet-016-admin-edits-another-employee-s-location-preference-data-successfully) | Admin edits another employee's Location Preference data successfully | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-017](#tc-empdet-017-audit-log-entry-created-for-a-location-preference-edit) | Audit log entry created for a Location Preference edit | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-018](#tc-empdet-018-legacy-profile-without-work-arrangement-shows-not-specified-tag-and-soft-prompt) | Legacy profile without Work Arrangement shows 'Not specified' tag and soft prompt | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-019](#tc-empdet-019-work-arrangement-enforced-as-mandatory-after-grace-period-elapses) | Work Arrangement enforced as mandatory after grace period elapses | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-020](#tc-empdet-020-visa-record-created-successfully-with-all-mandatory-fields-filled) | Visa record created successfully with all mandatory fields filled | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-021](#tc-empdet-021-visa-type-options-depend-on-country-other-reveals-free-text-field) | Visa Type options depend on Country; 'Other' reveals free-text field | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-022](#tc-empdet-022-visa-saves-successfully-when-issue-date-is-on-or-before-expiry-date) | Visa saves successfully when Issue Date is on or before Expiry Date | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-023](#tc-empdet-023-visa-expiry-90-days-out-shows-valid-badge) | Visa expiry > 90 days out shows 'Valid' badge | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-024](#tc-empdet-024-visa-expiry-within-90-days-shows-expiring-soon-badge) | Visa expiry within 90 days shows 'Expiring Soon' badge | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-025](#tc-empdet-025-visa-expiry-in-the-past-shows-expired-badge-record-retained-and-visible) | Visa expiry in the past shows 'Expired' badge; record retained and visible | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-026](#tc-empdet-026-confirming-duplicate-country-visa-type-prompt-with-continue-adds-second-record) | Confirming duplicate Country+Visa Type prompt with 'Continue' adds second record | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-027](#tc-empdet-027-confirming-visa-delete-with-yes-remove-permanently-deletes-the-record) | Confirming visa delete with 'Yes, Remove' permanently deletes the record | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-028](#tc-empdet-028-on-site-foreign-destination-without-valid-visa-shows-non-blocking-advisory-on-save) | On-site foreign destination without valid visa shows non-blocking advisory on save | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-029](#tc-empdet-029-visa-match-indicator-reflects-the-specific-gap-after-save) | Visa-Match Indicator reflects the specific gap after save | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-030](#tc-empdet-030-zero-visa-records-shows-empty-state-with-add-visa-button) | Zero visa records shows empty state with '+ Add Visa' button | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-031](#tc-empdet-031-notification-fires-at-90-day-and-30-day-expiry-thresholds-to-employee-rm) | Notification fires at 90-day and 30-day expiry thresholds to employee & RM | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-032](#tc-empdet-032-notification-fires-on-the-day-a-visa-expires) | Notification fires on the day a visa Expires | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-033](#tc-empdet-033-admin-adds-edits-deletes-a-visa-record-for-another-employee-successfully) | Admin adds/edits/deletes a visa record for another employee successfully | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-034](#tc-empdet-034-audit-log-entry-created-for-a-visa-create-edit-delete-action) | Audit log entry created for a visa create/edit/delete action | EMPDET — Employee Location Preference & Visa Information | functional | high |
| [TC-EMPDET-035](#tc-empdet-035-visa-status-is-read-only-and-recomputes-immediately-when-expiry-date-crosses-the-90-day-threshold) | Visa status is read-only and recomputes immediately when Expiry Date crosses the 90-day threshold | EMPDET — Employee Location Preference & Visa Information | functional | medium |
| [TC-EMPDET-036](#tc-empdet-036-header-listing-and-visa-match-indicator-update-immediately-after-add-edit-delete-without-reload) | Header, listing, and Visa-Match Indicator update immediately after add/edit/delete without reload | EMPDET — Employee Location Preference & Visa Information | functional | medium |
| [TC-EMPDET-037](#tc-empdet-037-sorting-employee-listing-by-work-arrangement-is-stable-for-tied-values-re-click-reverses-direction) | Sorting Employee Listing by Work Arrangement is stable for tied values; re-click reverses direction | EMPDET — Employee Location Preference & Visa Information | functional | medium |
| [TC-EMPDET-038](#tc-empdet-038-combined-filters-work-arrangement-destination-visa-status-narrow-records-and-counts-correctly) | Combined filters (Work Arrangement + destination + visa status) narrow records and counts correctly | EMPDET — Employee Location Preference & Visa Information | functional | medium |
| [TC-EMPDET-039](#tc-empdet-039-submitting-drawer-with-work-arrangement-blank-blocks-save) | Submitting drawer with Work Arrangement blank blocks save | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-040](#tc-empdet-040-toggle-yes-with-zero-destinations-blocks-save) | Toggle=Yes with zero destinations blocks save | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-041](#tc-empdet-041-adding-a-destination-already-present-in-the-list-is-rejected) | Adding a destination already present in the list is rejected | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-042](#tc-empdet-042-destination-other-other-domestic-city-without-specify-location-blocks-save) | Destination=Other/Other Domestic City without Specify Location blocks save | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-043](#tc-empdet-043-work-mode-on-site-without-city-address-blocks-save) | Work Mode=On-site without City/Address blocks save | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-044](#tc-empdet-044-visa-country-visa-type-expiry-date-individually-left-blank-shows-per-field-required-errors) | Visa Country/Visa Type/Expiry Date individually left blank shows per-field required errors | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-045](#tc-empdet-045-issue-date-after-expiry-date-blocks-save) | Issue Date after Expiry Date blocks save | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-046](#tc-empdet-046-cancelling-duplicate-country-visa-type-confirmation-does-not-add-a-duplicate) | Cancelling duplicate Country+Visa Type confirmation does not add a duplicate | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-047](#tc-empdet-047-cancelling-closing-delete-confirmation-makes-no-change-to-the-visa-record) | Cancelling/closing delete confirmation makes no change to the visa record | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-048](#tc-empdet-048-rm-tm-em-cannot-write-to-location-preference-visa-data-outside-view-only-scope) | RM/TM/EM cannot write to Location Preference/Visa data outside view-only scope | EMPDET — Employee Location Preference & Visa Information | negative | medium |
| [TC-EMPDET-049](#tc-empdet-049-whitespace-only-value-in-specify-location-is-treated-as-empty-and-rejected) | Whitespace-only value in Specify Location is treated as empty and rejected | EMPDET — Employee Location Preference & Visa Information | negative | low |
| [TC-EMPDET-050](#tc-empdet-050-session-expiry-http-401-mid-edit-returns-user-to-login-without-data-loss) | Session expiry (HTTP 401) mid-edit returns user to login without data loss | EMPDET — Employee Location Preference & Visa Information | negative | low |
| [TC-EMPDET-051](#tc-empdet-051-server-error-http-500-on-visa-save-shows-friendly-error-no-raw-stack-trace) | Server error (HTTP 500) on visa save shows friendly error, no raw stack trace | EMPDET — Employee Location Preference & Visa Information | negative | low |
| [TC-EMPDET-052](#tc-empdet-052-boundary-toggle-yes-no-yes-fully-clears-destination-list-not-just-hides-it) | Boundary — toggle Yes→No→Yes fully clears destination list, not just hides it | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-053](#tc-empdet-053-boundary-work-mode-on-site-off-site-on-site-clears-then-re-requires-address) | Boundary — Work Mode On-site→Off-site→On-site clears then re-requires Address | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-054](#tc-empdet-054-boundary-specify-location-cleared-when-destination-changed-away-from-other-and-back) | Boundary — Specify Location cleared when Destination changed away from Other and back | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-055](#tc-empdet-055-boundary-drag-reorder-still-functions-with-a-large-number-of-destinations) | Boundary — drag-reorder still functions with a large number of destinations | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-056](#tc-empdet-056-boundary-reordered-priority-1-persists-across-save-and-page-reload) | Boundary — reordered Priority 1 persists across save and page reload | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-057](#tc-empdet-057-boundary-dismissing-legacy-profile-soft-prompt-does-not-alter-visa-skills-data) | Boundary — dismissing legacy-profile soft prompt does not alter visa/skills data | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-058](#tc-empdet-058-boundary-mandatory-work-arrangement-enforcement-exactly-at-grace-period-cutover) | Boundary — mandatory Work Arrangement enforcement exactly at grace-period cutover | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-059](#tc-empdet-059-boundary-visa-expiry-exactly-at-the-90-day-mark-classifies-as-valid-vs-expiring-soon-per-inclusivity-rule) | Boundary — visa expiry exactly at the 90-day mark classifies as Valid vs Expiring Soon per inclusivity rule | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-060](#tc-empdet-060-boundary-visa-expiring-today-classifies-correctly-per-boundary-rule) | Boundary — visa expiring today classifies correctly per boundary rule | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-061](#tc-empdet-061-boundary-supporting-document-upload-with-oversized-or-unsupported-file-type) | Boundary — supporting document upload with oversized or unsupported file type | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-062](#tc-empdet-062-boundary-visa-type-other-free-text-accepts-special-characters-and-long-input) | Boundary — Visa Type 'Other' free-text accepts special characters and long input | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-063](#tc-empdet-063-boundary-multiple-foreign-on-site-destinations-with-only-one-valid-visa-identifies-specific-gaps) | Boundary — multiple foreign on-site destinations with only one valid visa identifies specific gaps | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-064](#tc-empdet-064-boundary-editing-expiry-date-after-a-90-day-notification-already-fired-does-not-duplicate-or-skip-notifications-incorrectly) | Boundary — editing Expiry Date after a 90-day notification already fired does not duplicate or skip notifications incorrectly | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-065](#tc-empdet-065-boundary-work-arrangement-wfh-with-a-foreign-on-site-destination-cross-check-trigger-scope) | Boundary — Work Arrangement=WFH with a foreign on-site destination cross-check trigger scope | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-066](#tc-empdet-066-boundary-work-arrangement-mandatory-validation-rule-enforced-on-empty-submit) | Boundary — Work Arrangement mandatory validation rule enforced on empty submit | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-067](#tc-empdet-067-boundary-relocation-toggle-no-precisely-hides-and-clears-destination-list-cross-field-state) | Boundary — relocation toggle=No precisely hides and clears destination list cross-field state | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-068](#tc-empdet-068-boundary-exact-duplicate-destination-value-same-case-is-rejected-on-the-cross-field-rule) | Boundary — exact-duplicate destination value (same case) is rejected on the cross-field rule | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-069](#tc-empdet-069-boundary-specify-location-is-not-required-not-shown-when-destination-is-a-non-other-value) | Boundary — Specify Location is not required/not shown when Destination is a non-Other value | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-070](#tc-empdet-070-boundary-attempting-to-save-with-work-mode-on-site-and-city-address-empty-is-blocked-at-the-field-validation-layer) | Boundary — attempting to Save with Work Mode=On-site and City/Address empty is blocked at the field-validation layer | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-071](#tc-empdet-071-boundary-exactly-1-destination-satisfies-the-at-least-one-rule-when-toggle-yes) | Boundary — exactly 1 destination satisfies the 'at least one' rule when toggle=Yes | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-072](#tc-empdet-072-boundary-removing-a-middle-priority-destination-re-numbers-remaining-priorities-sequentially) | Boundary — removing a middle-priority destination re-numbers remaining priorities sequentially | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-073](#tc-empdet-073-boundary-visa-country-field-rejects-an-unselected-placeholder-value-on-save-attempt) | Boundary — Visa Country field rejects an unselected/placeholder value on save attempt | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-074](#tc-empdet-074-boundary-changing-country-after-selecting-visa-type-resets-revalidates-the-dependent-visa-type-field) | Boundary — changing Country after selecting Visa Type resets/revalidates the dependent Visa Type field | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-075](#tc-empdet-075-boundary-expiry-date-left-at-unselected-placeholder-date-picker-state-blocks-save) | Boundary — Expiry Date left at unselected/placeholder date-picker state blocks save | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-076](#tc-empdet-076-boundary-issue-date-exactly-equal-to-expiry-date-is-allowed-not-later-than) | Boundary — Issue Date exactly equal to Expiry Date is allowed (not 'later than') | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-077](#tc-empdet-077-boundary-duplicate-check-triggers-on-country-visa-type-case-insensitive-match-usa-usa-h1b-h1b) | Boundary — duplicate check triggers on Country+Visa Type case-insensitive match ('USA'/'usa', 'H1B'/'h1b') | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-078](#tc-empdet-078-boundary-visa-saves-successfully-with-supporting-document-left-empty-optional-field) | Boundary — visa saves successfully with Supporting Document left empty (optional field) | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-079](#tc-empdet-079-boundary-on-site-foreign-destination-advisory-is-non-blocking-for-a-single-destination-single-gap-case) | Boundary — on-site foreign destination advisory is non-blocking for a single-destination single-gap case | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-080](#tc-empdet-080-boundary-visa-type-free-text-other-is-required-and-cannot-be-saved-blank-once-other-is-selected) | Boundary — Visa Type free-text ('Other') is required and cannot be saved blank once 'Other' is selected | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-081](#tc-empdet-081-double-clicking-save-on-add-visa-or-destination-add-creates-exactly-one-record-not-two) | Double-clicking Save on '+ Add Visa' or destination Add creates exactly one record, not two | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-082](#tc-empdet-082-boundary-deleting-the-last-remaining-destination-updates-the-header-n-locations-indicator-immediately) | Boundary — deleting the last remaining destination updates the header '+N locations' indicator immediately | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-083](#tc-empdet-083-boundary-combined-filters-with-zero-matching-records-show-empty-state-and-fully-restore-on-clear) | Boundary — combined filters with zero matching records show empty-state and fully restore on clear | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-084](#tc-empdet-084-boundary-sort-stability-for-tied-work-arrangement-values-does-not-shuffle-unrelated-row-order-on-re-click) | Boundary — sort stability for tied Work Arrangement values does not shuffle unrelated row order on re-click | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-085](#tc-empdet-085-boundary-visa-expiring-exactly-30-days-out-is-distinctly-tracked-for-the-30-day-notification-threshold) | Boundary — visa expiring exactly 30 days out is distinctly tracked for the 30-day notification threshold | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-086](#tc-empdet-086-boundary-moving-a-destination-directly-from-last-position-to-priority-1-and-back-reorders-correctly-and-persists) | Boundary — moving a destination directly from last position to Priority 1 (and back) reorders correctly and persists | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-087](#tc-empdet-087-boundary-specify-location-value-with-special-characters-round-trips-identically-between-ui-and-api) | Boundary — Specify Location value with special characters round-trips identically between UI and API | EMPDET — Employee Location Preference & Visa Information | boundary | medium |
| [TC-EMPDET-088](#tc-empdet-088-security-employee-cannot-edit-another-employee-s-location-preference-visa-data-idor) | Security — Employee cannot edit another employee's Location Preference/Visa data (IDOR) | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-089](#tc-empdet-089-security-employee-cannot-override-the-auto-computed-visa-status-directly) | Security — Employee cannot override the auto-computed visa status directly | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-090](#tc-empdet-090-security-rm-has-view-only-access-to-reportees-location-preference-visa-data) | Security — RM has view-only access to reportees' Location Preference/Visa data | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-091](#tc-empdet-091-security-tm-has-view-only-access-to-team-members-location-preference-visa-data) | Security — TM has view-only access to team members' Location Preference/Visa data | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-092](#tc-empdet-092-security-em-has-view-only-access-to-managed-engaged-employees-location-preference-visa-data) | Security — EM has view-only access to managed/engaged employees' Location Preference/Visa data | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-093](#tc-empdet-093-security-direct-api-write-attempts-bypassing-the-view-only-ui-are-rejected-for-rm-tm-em-roles) | Security — direct API write attempts bypassing the view-only UI are rejected for RM/TM/EM roles | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-094](#tc-empdet-094-security-free-text-fields-sanitize-script-html-payloads-xss) | Security — free-text fields sanitize script/HTML payloads (XSS) | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-095](#tc-empdet-095-security-every-create-edit-delete-action-is-audit-logged-and-the-log-is-immutable-for-non-admin) | Security — every create/edit/delete action is audit-logged and the log is immutable for non-Admin | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-096](#tc-empdet-096-security-role-scope-matrix-each-role-s-permitted-forbidden-actions-enforced-consistently-at-ui-and-api-in-the-same-session) | Security — role-scope matrix: each role's permitted/forbidden actions enforced consistently at UI and API in the same session | EMPDET — Employee Location Preference & Visa Information | security | high |
| [TC-EMPDET-097](#tc-empdet-097-regression-empdet-edit-profile-details-drawer-s-other-employee-profile-sections-unaffected-by-location-preference-visa-changes) | Regression (EMPDET) — Edit Profile Details drawer's other Employee Profile sections unaffected by Location Preference/Visa changes | EMPDET — Employee Location Preference & Visa Information | regression | high |
| [TC-EMPDET-098](#tc-empdet-098-regression-notif-existing-notification-types-still-function-alongside-new-visa-expiry-notifications) | Regression (NOTIF) — existing notification types still function alongside new visa expiry notifications | EMPDET — Employee Location Preference & Visa Information | regression | high |
| [TC-EMPDET-099](#tc-empdet-099-regression-file-shared-attachment-component-still-works-for-other-upload-use-cases-after-visa-document-upload-changes) | Regression (FILE) — shared attachment component still works for other upload use-cases after visa document upload changes | EMPDET — Employee Location Preference & Visa Information | regression | high |
| [TC-EMPDET-100](#tc-empdet-100-regression-ui-displayed-visa-destination-values-match-the-api-response-after-save) | Regression — UI-displayed visa/destination values match the API response after save | EMPDET — Employee Location Preference & Visa Information | regression | high |
| [TC-EMPDET-101](#tc-empdet-101-regression-visa-destination-counts-match-across-list-view-header-indicator-and-api-total-field) | Regression — visa/destination counts match across list view, header indicator, and API total field | EMPDET — Employee Location Preference & Visa Information | regression | high |
| [TC-EMPDET-102](#tc-empdet-102-regression-deleted-visa-record-is-absent-from-the-active-list-immediately-no-page-refresh-required) | Regression — deleted visa record is absent from the active list immediately, no page refresh required | EMPDET — Employee Location Preference & Visa Information | regression | high |
| [TC-EMPDET-103](#tc-empdet-103-regression-add-visa-button-remains-visible-to-the-owning-employee-before-and-after-adding-a-record) | Regression — '+ Add Visa' button remains visible to the owning employee before and after adding a record | EMPDET — Employee Location Preference & Visa Information | regression | medium |
| [TC-EMPDET-104](#tc-empdet-104-regression-visa-save-button-is-disabled-while-required-fields-are-empty-enabled-once-all-are-filled) | Regression — visa Save button is disabled while required fields are empty, enabled once all are filled | EMPDET — Employee Location Preference & Visa Information | regression | medium |
| [TC-EMPDET-105](#tc-empdet-105-integration-location-preference-visa-writes-are-retrievable-via-api-with-identical-values-employee-listing-reflects-changes-without-reload) | Integration — Location Preference/Visa writes are retrievable via API with identical values; Employee Listing reflects changes without reload | EMPDET — Employee Location Preference & Visa Information | integration | high |
| [TC-EMPDET-106](#tc-empdet-106-integration-empdet-drawer-level-save-cancel-behavior-consistent-across-location-preference-visa-and-core-employee-profile-sections) | Integration (EMPDET) — drawer-level Save/Cancel behavior consistent across Location Preference/Visa and core Employee Profile sections | EMPDET — Employee Location Preference & Visa Information | integration | high |
| [TC-EMPDET-107](#tc-empdet-107-integration-notif-visa-expiry-event-correctly-triggers-an-entry-in-the-notifications-module-for-employee-and-rm) | Integration (NOTIF) — visa expiry event correctly triggers an entry in the Notifications module for employee and RM | EMPDET — Employee Location Preference & Visa Information | integration | high |
| [TC-EMPDET-108](#tc-empdet-108-integration-file-uploaded-supporting-document-is-accessible-downloadable-via-the-shared-file-module-after-visa-save) | Integration (FILE) — uploaded Supporting Document is accessible/downloadable via the shared File module after visa save | EMPDET — Employee Location Preference & Visa Information | integration | high |
| [TC-EMPDET-109](#tc-empdet-109-integration-visa-data-flows-correctly-into-the-allocation-module-s-visa-match-indicator) | Integration — visa data flows correctly into the Allocation module's Visa-Match Indicator | EMPDET — Employee Location Preference & Visa Information | integration | high |
| [TC-EMPDET-110](#tc-empdet-110-accessibility-all-new-location-preference-visa-controls-are-keyboard-navigable-with-accessible-labels) | Accessibility — all new Location Preference/Visa controls are keyboard-navigable with accessible labels | EMPDET — Employee Location Preference & Visa Information | a11y | low |
| [TC-EMPDET-111](#tc-empdet-111-accessibility-destination-priority-drag-reorder-has-a-keyboard-operable-alternative) | Accessibility — destination priority drag-reorder has a keyboard-operable alternative | EMPDET — Employee Location Preference & Visa Information | a11y | low |
| [TC-EMPDET-112](#tc-empdet-112-performance-employee-listing-filtering-sorting-on-new-work-arrangement-relocation-visa-status-columns-does-not-degrade-load-time) | Performance — Employee Listing filtering/sorting on new Work Arrangement/Relocation/Visa-status columns does not degrade load time | EMPDET — Employee Location Preference & Visa Information | performance | low |

---

## EMPDET — Employee Location Preference & Visa Information

112 test cases.

### A11y (2)

#### TC-EMPDET-110 — Accessibility — all new Location Preference/Visa controls are keyboard-navigable with accessible labels

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | nfrRequirements.accessibility: keyboard-navigable controls with accessible labels |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Using only the keyboard (Tab/Shift+Tab/Enter/Space/Arrow keys), navigate through the Work Arrangement dropdown, relocation toggle, destination fields, and visa form fields
2. Inspect each control's accessible name via the accessibility tree

**Expected**

Every control is reachable and operable via keyboard alone, in a logical tab order; each has a non-empty, meaningful accessible label/ARIA attribute announced correctly

**Automation Hint**

Use testUserPage fixture; axe-core or accessibility-tree assertions

#### TC-EMPDET-111 — Accessibility — destination priority drag-reorder has a keyboard-operable alternative

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | nfrRequirements.accessibility: drag-reorder keyboard-operable alternative |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destinations USA(1), Canada(2)
2. Using the keyboard only (no mouse), attempt to reorder Canada to Priority 1 via a keyboard-operable control (e.g. move-up button or key command)

**Expected**

A keyboard-operable alternative to drag-and-drop exists and correctly reorders the destination priorities

**Test Data**

- `destinations`: USA, Canada

**Automation Hint**

PARTIAL — the drag-reorder control's exact keyboard alternative is not documented (uiElements source: inferred); phrase generically as 'the reorder control' rather than a specific selector. Use testUserPage fixture

### Boundary (36)

#### TC-EMPDET-052 — Boundary — toggle Yes→No→Yes fully clears destination list, not just hides it

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: toggle Yes->No->Yes clears fully |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set toggle=Yes, add destinations USA and Canada, Save
2. Set toggle=No, Save
3. Set toggle=Yes again

**Expected**

Destination list is empty (not just hidden) when toggled back to Yes — USA and Canada are gone, must be re-added

**Test Data**

- `destinations`: USA, Canada

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-053 — Boundary — Work Mode On-site→Off-site→On-site clears then re-requires Address

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: On-site->Off-site->On-site clears Address |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set Work Mode=On-site, enter City/Address='Boston, MA'
2. Switch to Off-site
3. Switch back to On-site

**Expected**

City/Address is cleared on switching to Off-site; on switching back to On-site the field is empty and required again (not pre-filled with 'Boston, MA')

**Test Data**

- `cityAddress`: Boston, MA

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-054 — Boundary — Specify Location cleared when Destination changed away from Other and back

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Specify Location cleared on away-transition |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Destination='Other', Specify Location='Test City'
2. Change Destination to 'USA'
3. Change Destination back to 'Other'

**Expected**

Specify Location is cleared when navigating away from Other, and remains empty (not restored to 'Test City') when Other is reselected

**Test Data**

- `specifyLocation`: Test City

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-055 — Boundary — drag-reorder still functions with a large number of destinations

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: many destinations, drag-reorder still functions |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add all 6 available destination values (USA, Canada, UK/Europe, Australia, Dubai/UAE, Other Domestic City)
2. Drag the last item to the first position

**Expected**

Reorder completes correctly across the full set with no UI breakage or lost entries

**Test Data**

- `destinationCount`: 6

**Automation Hint**

PARTIAL — drag-and-drop; manual/mocked pointer events. Use testUserPage fixture

#### TC-EMPDET-056 — Boundary — reordered Priority 1 persists across save and page reload

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: reorder persists across save+reload |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destinations USA(1), Canada(2)
2. Drag Canada to Priority 1
3. Save
4. Reload the page (F5)

**Expected**

After reload, Canada is still shown as Priority 1, USA as Priority 2

**Test Data**

- `destinations`: USA, Canada

**Automation Hint**

PARTIAL — drag-and-drop. Use testUserPage fixture

#### TC-EMPDET-057 — Boundary — dismissing legacy-profile soft prompt does not alter visa/skills data

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: legacy profile dismiss doesn't alter other data |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open a legacy profile showing 'Not specified' + soft prompt, with existing visa and skills data
2. Dismiss the soft prompt without setting Work Arrangement

**Expected**

Soft prompt closes; existing visa records and skills data remain completely unchanged

**Automation Hint**

Use testUserPage fixture; requires seeded legacy profile

#### TC-EMPDET-058 — Boundary — mandatory Work Arrangement enforcement exactly at grace-period cutover

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: grace period boundary; unclear: grace period duration |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set mocked clock to exactly the grace-period cutover instant
2. Attempt to Save profile with Work Arrangement blank

**Expected**

Enforcement (blocking save) begins exactly at cutover, not before — behavior consistent with default assumption pending confirmation

**Test Data**

- `cutoverTime`: exact grace-period end

**Automation Hint**

PARTIAL — needs mocked-clock control; exact grace period duration is an unclear item pending confirmation. Use testUserPage fixture

#### TC-EMPDET-059 — Boundary — visa expiry exactly at the 90-day mark classifies as Valid vs Expiring Soon per inclusivity rule

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: expiry exactly at 90-day boundary; unclear: 90-day boundary inclusivity/timezone |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create a visa with Expiry Date exactly 90 days from today (server/staging timezone, midnight)

**Expected**

Status badge reflects the documented boundary rule consistently (default assumption: <=90d is Expiring Soon, so exactly 90 days classifies as Expiring Soon) — flag for confirmation if actual behavior differs

**Test Data**

- `expiryDate`: today+90d exactly

**Automation Hint**

Use testUserPage fixture — day-count/timezone method is an unclear item, verify with human

#### TC-EMPDET-060 — Boundary — visa expiring today classifies correctly per boundary rule

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: expiry date is today |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create a visa with Expiry Date = today

**Expected**

Status badge shows 'Expiring Soon' (still within 0<=90 range) up until end-of-day, then transitions to 'Expired' — exact cutover timing pending confirmation

**Test Data**

- `expiryDate`: today

**Automation Hint**

Use testUserPage fixture — timezone/cutover is an unclear item, verify with human

#### TC-EMPDET-061 — Boundary — supporting document upload with oversized or unsupported file type

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Supporting Document large/unsupported file type |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. On the visa form, attempt to upload a 20 MB PDF file
2. Attempt to upload an unsupported file type (.exe)

**Expected**

Both uploads are rejected with a clear error message (exact size/type limits not documented — verify actual thresholds with product)

**Test Data**

- `file`: oversized_20MB.pdf, malware.exe

**Automation Hint**

MANUAL — requirement unclear: exact file size/type limits for Supporting Document are not specified. Use testUserPage fixture; requires file chooser interaction

#### TC-EMPDET-062 — Boundary — Visa Type 'Other' free-text accepts special characters and long input

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Visa Type Other free-text special chars/long input |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Visa Type='Other'
2. Enter a 200-character string with accented/special characters into the free-text field
3. Save

**Expected**

Value is accepted and rendered without truncation/corruption, or a clear max-length error is shown if a limit exists; no rendering break

**Test Data**

- `otherVisaType`: Spécial-Visa_Type™ #99 (long string ~200 chars)

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-063 — Boundary — multiple foreign on-site destinations with only one valid visa identifies specific gaps

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: multiple foreign on-site destinations, one valid visa |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add 3 foreign destinations, all Work Mode=On-site: USA, Canada, UK/Europe
2. Add only one valid visa record for USA
3. Save

**Expected**

Advisory/Visa-Match Indicator identifies gaps specifically for Canada and UK/Europe, not USA

**Test Data**

- `destinations`: USA (On-site), Canada (On-site), UK/Europe (On-site)
- `visa`: USA only

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-064 — Boundary — editing Expiry Date after a 90-day notification already fired does not duplicate or skip notifications incorrectly

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: notification timing after Expiry Date edit |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Seed a visa where the 90-day notification has already fired
2. Edit Expiry Date to push it out to 150 days
3. Advance mocked clock to the new 90-day point

**Expected**

A fresh 90-day notification fires at the new threshold; no duplicate/stale notification remains from the original date

**Test Data**

- `originalExpiry`: today+90d
- `newExpiry`: today+150d

**Automation Hint**

PARTIAL — mocked-clock verification required. Use testUserPage fixture

#### TC-EMPDET-065 — Boundary — Work Arrangement=WFH with a foreign on-site destination cross-check trigger scope

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: cross-feature WFH + foreign on-site destination; unclear: cross-check trigger scope |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set Work Arrangement=WFH
2. Add destination 'Canada' with Work Mode=On-site and no valid visa
3. Save

**Expected**

Per default assumption, advisory still triggers based on destination Work Mode=On-site regardless of overall Work Arrangement=WFH — confirm actual trigger scope with product

**Test Data**

- `workArrangement`: WFH
- `destination`: Canada (On-site)

**Automation Hint**

MANUAL — requirement unclear: visa cross-check trigger scope (destination Work Mode only vs overall Work Arrangement). Use testUserPage fixture

#### TC-EMPDET-066 — Boundary — Work Arrangement mandatory validation rule enforced on empty submit

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Work Arrangement mandatory |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Leave Work Arrangement dropdown at its unselected/placeholder state
2. Click Save

**Expected**

'This field is required.' error rendered inline; field retains focus/highlight

**Test Data**

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-067 — Boundary — relocation toggle=No precisely hides and clears destination list cross-field state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: toggle=No hides+clears destinations |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destination 'Australia' with toggle=Yes
2. Flip toggle to No without saving first

**Expected**

Destination section is immediately hidden in the form state (pre-save); underlying destination list is cleared from the form model

**Test Data**

- `destinations`: Australia

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-068 — Boundary — exact-duplicate destination value (same case) is rejected on the cross-field rule

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: destination duplicate cross-field |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destination 'Dubai/UAE'
2. Attempt to add the exact same value 'Dubai/UAE' again

**Expected**

Second identical add is rejected per the same-destination cross-field validation rule

**Test Data**

- `destination`: Dubai/UAE

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-069 — Boundary — Specify Location is not required/not shown when Destination is a non-Other value

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Specify Location visible/mandatory only for Other/Other Domestic City |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Destination='USA'
2. Attempt to Save without touching Specify Location

**Expected**

Specify Location field is not shown and is not required; save succeeds without it

**Test Data**

- `destination`: USA

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-070 — Boundary — attempting to Save with Work Mode=On-site and City/Address empty is blocked at the field-validation layer

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: City/Address mandatory when On-site |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set Work Mode=On-site, leave City/Address empty
2. Click Save

**Expected**

Field-level mandatory validation blocks save (distinct check from the cross-field hide/show behavior in TC-EMPDET-053)

**Test Data**

- `workMode`: On-site

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-071 — Boundary — exactly 1 destination satisfies the 'at least one' rule when toggle=Yes

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: destination list >=1 when toggle=Yes |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set toggle=Yes
2. Add exactly 1 destination 'USA'
3. Click Save

**Expected**

Save succeeds — the minimum count boundary of 1 destination satisfies the rule (0 fails per TC-EMPDET-040, 1 passes here)

**Test Data**

- `destinations`: USA

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-072 — Boundary — removing a middle-priority destination re-numbers remaining priorities sequentially

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: destination priority auto-assign/reorder integrity |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add USA, Canada, Australia (priorities 1,2,3)
2. Remove Canada (priority 2)

**Expected**

Remaining destinations re-number to USA=1, Australia=2 with no gap left at position 2

**Test Data**

- `destinations`: USA(1), Canada(2), Australia(3)

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-073 — Boundary — Visa Country field rejects an unselected/placeholder value on save attempt

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Visa Country mandatory |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Leave Country dropdown at placeholder state
2. Fill Visa Type and Expiry Date
3. Click Save

**Expected**

Save blocked with required-field error specifically on Country

**Test Data**

- `country`: (placeholder unselected)

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-074 — Boundary — changing Country after selecting Visa Type resets/revalidates the dependent Visa Type field

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Visa Type dependent dropdown by country |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Country=USA, Visa Type=H1B
2. Change Country to India (which has different Visa Type options)

**Expected**

Visa Type field resets/clears or re-validates since 'H1B' is not a valid option for India; user must reselect a valid Visa Type before saving

**Test Data**

- `country1`: USA
- `visaType1`: H1B
- `country2`: India

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-075 — Boundary — Expiry Date left at unselected/placeholder date-picker state blocks save

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Expiry Date mandatory |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill Country and Visa Type, leave the Expiry Date picker unselected
2. Click Save

**Expected**

Required-field error shown on Expiry Date; save blocked

**Test Data**

- `expiryDate`: (unselected)

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-076 — Boundary — Issue Date exactly equal to Expiry Date is allowed (not 'later than')

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Issue Date vs Expiry Date boundary (equal) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill Issue Date=2027-03-01 and Expiry Date=2027-03-01 (same day)
2. Click Save

**Expected**

Save succeeds — equal dates do not trigger the 'Issue date cannot be after the expiry date.' error since Issue Date is not later than Expiry Date

**Test Data**

- `issueDate`: 2027-03-01
- `expiryDate`: 2027-03-01

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-077 — Boundary — duplicate check triggers on Country+Visa Type case-insensitive match ('USA'/'usa', 'H1B'/'h1b')

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: duplicate Country+Visa Type case-insensitive |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Existing visa Country='USA', Visa Type='H1B'
2. Add new visa Country='usa' (lowercase), Visa Type='h1b' (lowercase)

**Expected**

Duplicate confirmation prompt appears despite the case difference, confirming case-insensitive matching

**Test Data**

- `existing`: USA/H1B
- `new`: usa/h1b

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-078 — Boundary — visa saves successfully with Supporting Document left empty (optional field)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Supporting Document optional |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill Country, Visa Type, Expiry Date
2. Leave Supporting Document unattached
3. Click Save

**Expected**

Save succeeds with no validation error for the missing optional document

**Test Data**

- `supportingDocument`: none

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-079 — Boundary — on-site foreign destination advisory is non-blocking for a single-destination single-gap case

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: on-site foreign destination vs visa records — non-blocking |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add single foreign destination 'Australia', Work Mode=On-site, no visa
2. Click Save

**Expected**

Save completes successfully despite the advisory; the operation is confirmed non-blocking for a single-gap scenario

**Test Data**

- `destination`: Australia (On-site)
- `visa`: none

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-080 — Boundary — Visa Type free-text ('Other') is required and cannot be saved blank once 'Other' is selected

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Visa Type Other reveals mandatory free-text |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Visa Type='Other'
2. Leave the revealed free-text field blank
3. Click Save

**Expected**

Save blocked with a required-field error on the free-text field

**Test Data**

- `visaType`: Other

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-081 — Double-clicking Save on '+ Add Visa' or destination Add creates exactly one record, not two

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | businessRule: idempotency; edgeCase: double-click Add Visa/destination Add |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill a valid visa form (Country=USA, Visa Type=L1, Expiry Date=2028-01-01)
2. Rapidly double-click the Save button
3. Repeat with a destination Add button using a new destination

**Expected**

Exactly one visa record and exactly one destination record are created in each case, verified in both UI list and API response — not two

**Test Data**

- `country`: USA
- `visaType`: L1

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Use testUserPage fixture; simulate rapid double-click via low-delay dispatch

#### TC-EMPDET-082 — Boundary — deleting the last remaining destination updates the header '+N locations' indicator immediately

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: cache refresh — header indicator updates without manual refresh |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Have exactly 1 destination 'USA' saved, header shows '+1 locations'
2. Delete the 'USA' destination
3. Observe header without refreshing

**Expected**

Header indicator updates to remove the '+N locations' tag (or shows '+0') immediately, without a manual page refresh

**Test Data**

- `destinations`: USA

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-083 — Boundary — combined filters with zero matching records show empty-state and fully restore on clear

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: combined filters zero-match case |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply a combination of filters guaranteed to match zero employees
2. Observe listing
3. Clear all filters

**Expected**

A non-blank empty-state message is shown for the zero-match combination; clearing filters restores the full employee list and correct total count

**Test Data**

- `filters`: workArrangement: WFO; destination: Dubai/UAE; visaStatus: Expired

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-084 — Boundary — sort stability for tied Work Arrangement values does not shuffle unrelated row order on re-click

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: sorting stability for identical values |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Identify 3 employees with identical Work Arrangement value
2. Sort ascending, note their relative order
3. Sort descending, then ascending again

**Expected**

The 3 tied employees return to the same relative order after the round-trip sort, confirming stable sort behavior at this specific tie boundary

**Test Data**

- `tiedEmployees`: 3

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-085 — Boundary — visa expiring exactly 30 days out is distinctly tracked for the 30-day notification threshold

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC: notifications fire at 30d before expiry (boundary instance) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Seed a visa with Expiry Date exactly 30 days from today
2. Advance mocked clock to that day

**Expected**

The 30-day notification threshold fires distinctly from the 90-day one already sent earlier for this record

**Test Data**

- `expiryDate`: today+30d exactly

**Automation Hint**

PARTIAL — mocked-clock verification. Use testUserPage fixture

#### TC-EMPDET-086 — Boundary — moving a destination directly from last position to Priority 1 (and back) reorders correctly and persists

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: many destinations reorder extension (extreme swap boundary) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add 4 destinations in order USA, Canada, Australia, Dubai/UAE
2. Drag 'Dubai/UAE' (position 4) directly to position 1
3. Save and reload (F5)
4. Drag it back to position 4

**Expected**

Each extreme reorder is reflected correctly immediately and persists after reload; no items are lost or duplicated in the extreme swap

**Test Data**

- `destinations`: USA(1), Canada(2), Australia(3), Dubai/UAE(4)

**Automation Hint**

PARTIAL — drag-and-drop. Use testUserPage fixture

#### TC-EMPDET-087 — Boundary — Specify Location value with special characters round-trips identically between UI and API

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: API vs UI parity across writes (value round-trip instance) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set Destination='Other', Specify Location="St. Marie's #5 – Zürich"
2. Save
3. Call GET on the employee profile API for this field

**Expected**

API response for Specify Location matches the UI-displayed value exactly, character-for-character (including apostrophe, hash, en-dash, umlaut)

**Test Data**

- `specifyLocation`: St. Marie's #5 – Zürich

**Automation Hint**

Use testUserPage fixture; direct API verification

### Functional (35)

#### TC-EMPDET-004 — Work Arrangement mandatory field saves and renders as read-only header tag

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Work Arrangement mandatory + read-only header tag |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Edit Profile Details drawer
2. Select Work Arrangement = WFO, Save, verify header tag
3. Repeat selecting WFH, Save, verify header tag
4. Repeat selecting Hybrid, Save, verify header tag

**Expected**

Each selected value persists and displays as a read-only header tag matching the saved value exactly; tag is not directly editable outside the drawer

**Test Data**

- `values`: WFO, WFH, Hybrid

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-005 — Relocation toggle Yes reveals destination section; No hides & clears it

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: relocation toggle=No hides & clears destinations |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set 'Open to relocation/travel' = Yes
2. Confirm destination section becomes visible; add destination 'Canada'; Save
3. Reopen drawer, set toggle = No; Save

**Expected**

With toggle=Yes, destination UI is visible and destination is addable; with toggle=No, destination section is hidden and the previously added 'Canada' destination is cleared (not present when toggled back)

**Test Data**

- `destination`: Canada

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-006 — Adding a destination appears in list with correctly auto-assigned Priority

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: same destination cannot be added twice (positive add flow) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set toggle=Yes
2. Add destination 'UK/Europe'
3. Save

**Expected**

Destination 'UK/Europe' appears in the list tagged Priority 1

**Test Data**

- `destination`: UK/Europe

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-007 — Destination = 'Other Domestic City' / 'Other' reveals mandatory Specify Location field

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Other/Other Domestic City reveals Specify Location |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set toggle=Yes; select Destination = 'Other Domestic City'
2. Confirm Specify Location field becomes visible; enter 'Nagpur'; Save
3. Add a second destination = 'Other'; confirm Specify Location visible again

**Expected**

Specify Location field is visible and required only for these two destination values; entered value 'Nagpur' persists after save

**Test Data**

- `values`: Other Domestic City, Other
- `specifyLocation`: Nagpur

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-008 — Work Mode = On-site reveals mandatory City/Address field

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Work Mode=On-site reveals City/Address |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destination 'USA'
2. Set its Work Mode = On-site
3. Confirm City/Address field appears; enter 'Austin, TX'
4. Save

**Expected**

City/Address field is visible and required when Work Mode=On-site; value persists after save

**Test Data**

- `destination`: USA
- `workMode`: On-site
- `cityAddress`: Austin, TX

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-009 — Switching Work Mode On-site → Off-site hides City/Address field

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: switching to Off-site hides City/Address |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Destination 'USA' with Work Mode=On-site and City/Address filled
2. Switch Work Mode to Off-site

**Expected**

City/Address field is immediately hidden from the form

**Test Data**

- `destination`: USA
- `workMode`: On-site→Off-site

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-010 — Toggle=Yes with at least one destination saves successfully

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: toggle=Yes with destinations present (positive flow) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set toggle=Yes
2. Add destination 'Dubai/UAE'
3. Click Save

**Expected**

Save succeeds with no validation error; drawer closes/shows success confirmation

**Test Data**

- `destination`: Dubai/UAE

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-011 — Priority auto-assigned by destination add order

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: priority auto-assigned by add order |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destinations in this exact order: Australia, USA, Canada
2. Save

**Expected**

Priority order is Australia=1, USA=2, Canada=3, matching add order

**Test Data**

- `destinations`: Australia, USA, Canada

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-012 — Drag-reordering destinations updates Priority correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: destination priority is drag-reorderable |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. With destinations Australia(1), USA(2), Canada(3), drag Canada to the top position

**Expected**

New order is Canada=1, Australia=2, USA=3

**Test Data**

- `destinations`: Australia, USA, Canada
- `dragFrom`: 3
- `dragTo`: 1

**Automation Hint**

PARTIAL — drag-and-drop reorder needs mocked pointer events or manual verification per automationFeasibility. Use testUserPage fixture

#### TC-EMPDET-013 — Header Work Arrangement tag + '+N locations' indicator reflect actual destination count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: header shows Work Arrangement tag + '+N locations' indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set Work Arrangement=WFH
2. Add 4 destinations
3. Save
4. View profile header

**Expected**

Header shows 'WFH' tag plus '+4 locations' indicator

**Test Data**

- `workArrangement`: WFH
- `destinations`: USA, Canada, UK/Europe, Australia

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-014 — Column Selector enables Work Arrangement/Relocation columns; sorting toggles direction

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: listing exposes Work Arrangement & Relocation columns/filters, sortable & filterable |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee Listing
2. Open Column Selector, enable 'Work Arrangement' and 'Relocation' columns
3. Click the Work Arrangement column header once
4. Click it again

**Expected**

Both columns are hidden by default then appear after enabling; first click sorts ascending with an ascending sort-indicator icon; second click reverses to descending with icon flipped

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-015 — Filtering Employee Listing by Relocation destination narrows results

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: listing filterable by Relocation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. With Relocation column/filter enabled, apply filter Destination='USA'

**Expected**

Only employees with 'USA' among their destinations are shown; record-count badge updates to match

**Test Data**

- `filterValue`: USA

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-016 — Admin edits another employee's Location Preference data successfully

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Admin views/edits all employees' data |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open punit.patel's Edit Profile Details drawer as Admin
2. Change Work Arrangement to WFO
3. Save

**Expected**

Change saves successfully and is visible in punit.patel's profile header and Employee Listing

**Test Data**

- `targetEmployee`: punit.patel
- `workArrangement`: WFO

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-017 — Audit log entry created for a Location Preference edit

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: every action audit-logged (Location Preference) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As Admin, edit punit.patel's Work Arrangement and Save
2. Open the audit log for this employee

**Expected**

A new audit entry exists with actor=ceo@simformsolutions.com, timestamp, before value and after value for Work Arrangement

**Test Data**

- `targetEmployee`: punit.patel

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-018 — Legacy profile without Work Arrangement shows 'Not specified' tag and soft prompt

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: existing profiles display 'Not specified' + soft prompt |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open a legacy profile (Work Arrangement never set) for the first time post-release

**Expected**

Header shows 'Not specified' tag plus a soft prompt encouraging completion; no error is blocking

**Test Data**

- `profile`: legacy, Work Arrangement unset

**Automation Hint**

Use testUserPage fixture; requires a seeded legacy-profile test account

#### TC-EMPDET-019 — Work Arrangement enforced as mandatory after grace period elapses

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: enforced on next save or after grace period |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. With grace period elapsed (mocked clock/config), attempt to Save profile with Work Arrangement blank

**Expected**

Save is blocked with 'This field is required.' — enforcement now active where it was previously optional

**Test Data**

- `gracePeriod`: expired

**Automation Hint**

PARTIAL — requires mocked-clock or admin-configured grace period control. Use testUserPage fixture

#### TC-EMPDET-020 — Visa record created successfully with all mandatory fields filled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Country, Visa Type, Expiry Date mandatory (positive flow) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Click '+ Add Visa'
2. Fill Country=USA, Visa Type=H1B, Expiry Date=2027-06-01
3. Save

**Expected**

Record saves and appears in the visa list with the entered values

**Test Data**

- `country`: USA
- `visaType`: H1B
- `expiryDate`: 2027-06-01

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-021 — Visa Type options depend on Country; 'Other' reveals free-text field

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Visa Type dependent on country; Other reveals free text |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Country=USA
2. Open Visa Type dropdown
3. Select 'Other'

**Expected**

Visa Type list shows country-specific options (H1B, L1, Other for USA); selecting 'Other' reveals a free-text field

**Test Data**

- `country`: USA
- `visaTypeOptions`: H1B, L1, Other

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-022 — Visa saves successfully when Issue Date is on or before Expiry Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Issue Date must not be later than Expiry Date (positive flow) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill visa form with Issue Date=2025-01-01, Expiry Date=2027-01-01
2. Save

**Expected**

Save succeeds, no cross-field validation error

**Test Data**

- `issueDate`: 2025-01-01
- `expiryDate`: 2027-01-01

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-023 — Visa expiry > 90 days out shows 'Valid' badge

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: status Valid >90d |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create visa with Expiry Date 180 days from today
2. Save

**Expected**

Status badge shows 'Valid'

**Test Data**

- `expiryDate`: today+180d

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-024 — Visa expiry within 90 days shows 'Expiring Soon' badge

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: status Expiring Soon <=90d |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create visa with Expiry Date 45 days from today
2. Save

**Expected**

Status badge shows 'Expiring Soon'

**Test Data**

- `expiryDate`: today+45d

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-025 — Visa expiry in the past shows 'Expired' badge; record retained and visible

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Expired in past, record retained not blocked |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create/seed visa record with Expiry Date 90 days in the past
2. View visa list

**Expected**

Record remains visible in the list, status badge shows 'Expired', record is not deleted or hidden

**Test Data**

- `expiryDate`: today-90d

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-026 — Confirming duplicate Country+Visa Type prompt with 'Continue' adds second record

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: duplicate prompt continue/cancel — Continue path |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Existing visa: Country=USA, Visa Type=H1B
2. Add another visa with same Country=USA, Visa Type=H1B (any case)
3. On the prompt 'A visa record for this country and type already exists. Do you want to add another?', click Continue

**Expected**

Second record with the same Country+Visa Type is added; both records visible in the list

**Test Data**

- `country`: USA
- `visaType`: H1B

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-027 — Confirming visa delete with 'Yes, Remove' permanently deletes the record

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: delete confirmation — Yes Remove path |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Click Delete icon on a visa record
2. Click 'Yes, Remove'

**Expected**

Record permanently removed from list and from subsequent API GET

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-028 — On-site foreign destination without valid visa shows non-blocking advisory on save

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: on-site foreign preference with no valid visa — advisory on save |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destination 'UK/Europe' (foreign), Work Mode=On-site, no matching visa record
2. Save

**Expected**

An advisory message is displayed (non-blocking); Save still completes

**Test Data**

- `destination`: UK/Europe
- `workMode`: On-site
- `visa`: none

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-029 — Visa-Match Indicator reflects the specific gap after save

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: gap reflected in listing/allocation Visa-Match Indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. After TC-EMPDET-028's save, navigate to Employee Listing/Allocation view as Admin
2. Locate the Visa-Match Indicator for this employee

**Expected**

Indicator shows a gap specifically for the UK/Europe destination

**Test Data**

- `destination`: UK/Europe
- `visa`: none

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-030 — Zero visa records shows empty state with '+ Add Visa' button

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: empty state 'No visa records added.' |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Visa Information section for a profile with no visa records

**Expected**

Text 'No visa records added.' is shown along with a '+ Add Visa' button

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-031 — Notification fires at 90-day and 30-day expiry thresholds to employee & RM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: notifications fire at 90d and 30d before expiry |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Seed a visa expiring in exactly 90 days; trigger/advance the notification job (mocked clock)
2. Check notification inbox for employee and RM
3. Repeat with expiry at exactly 30 days

**Expected**

Both employee and RM receive a notification at the 90-day mark and again at the 30-day mark

**Test Data**

- `expiryDate`: today+90d, today+30d

**Automation Hint**

PARTIAL — multi-day notification timing needs mocked-clock or manual verification per automationFeasibility. Use testUserPage fixture

#### TC-EMPDET-032 — Notification fires on the day a visa Expires

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: notification fires on Expired |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Seed a visa expiring today; advance/trigger notification job (mocked clock)

**Expected**

Employee and RM receive an 'Expired' notification on the expiry day

**Test Data**

- `expiryDate`: today

**Automation Hint**

PARTIAL — needs mocked-clock verification. Use testUserPage fixture

#### TC-EMPDET-033 — Admin adds/edits/deletes a visa record for another employee successfully

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Admin add/edit/delete any employee's visa data |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As Admin, open punit.patel's Visa Information section
2. Add a visa (Country=Canada, Visa Type=Work Permit, Expiry Date=2028-01-01)
3. Edit the Expiry Date to 2028-06-01
4. Delete the record with confirmation

**Expected**

All three operations succeed for Admin acting on another employee's data

**Test Data**

- `targetEmployee`: punit.patel
- `country`: Canada
- `visaType`: Work Permit

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-034 — Audit log entry created for a visa create/edit/delete action

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: every visa action audit-logged |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As Admin, add a visa record for punit.patel
2. Open the audit log

**Expected**

Audit entry exists with actor, timestamp, and after-values for the visa creation

**Test Data**

- `targetEmployee`: punit.patel

**Automation Hint**

Use primaryPage fixture

#### TC-EMPDET-035 — Visa status is read-only and recomputes immediately when Expiry Date crosses the 90-day threshold

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRule: status-transition |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create visa with Expiry Date=today+120d (status=Valid)
2. Edit Expiry Date to today+60d
3. Save

**Expected**

Status badge updates from 'Valid' to 'Expiring Soon' immediately without page reload; no UI control allows directly setting the status field

**Test Data**

- `initialExpiry`: today+120d
- `editedExpiry`: today+60d

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Use testUserPage fixture

#### TC-EMPDET-036 — Header, listing, and Visa-Match Indicator update immediately after add/edit/delete without reload

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRule: write-then-verify-no-overwrite (header/listing/visa-match) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add a destination and save
2. Observe header '+N locations' updates without a manual refresh
3. Add a visa record creating a Visa-Match gap; observe listing/indicator update live

**Expected**

All three surfaces (header indicator, Employee Listing, Visa-Match Indicator) reflect the change immediately, with no manual reload required

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Use testUserPage fixture

#### TC-EMPDET-037 — Sorting Employee Listing by Work Arrangement is stable for tied values; re-click reverses direction

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRule: write-then-verify-no-overwrite (sorting stability) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Ensure at least 3 employees share Work Arrangement='Hybrid'
2. Sort Employee Listing by Work Arrangement column ascending
3. Click the header again

**Expected**

Employees with tied 'Hybrid' value retain a stable relative order between sorts; second click reverses overall sort direction

**Test Data**

- `employeesWithSameWorkArrangement`: 3

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Use primaryPage fixture

#### TC-EMPDET-038 — Combined filters (Work Arrangement + destination + visa status) narrow records and counts correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | businessRule: write-then-verify-no-overwrite (combined filters) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply Work Arrangement=Hybrid filter
2. Additionally apply Destination=USA filter
3. Additionally apply Visa Status=Expiring Soon filter
4. Clear all filters

**Expected**

Displayed records and record-count badge narrow correctly at each step, matching the intersection of applied filters; clearing restores the full unfiltered list

**Test Data**

- `filters`: workArrangement: Hybrid; destination: USA; visaStatus: Expiring Soon

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Use primaryPage fixture

### Integration (5)

#### TC-EMPDET-105 — Integration — Location Preference/Visa writes are retrievable via API with identical values; Employee Listing reflects changes without reload

| Field | Value |
| --- | --- |
| **Tags** | @integration, @regression, @needs-verification |
| **Requirement Ref** | businessRule: api-parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Open two browser contexts: primaryPage (ceo@simformsolutions.com) + testUserPage (punit.patel)

**Steps**

1. As punit.patel, set Work Arrangement=WFO and add destination 'Canada', Save
2. Call the employee profile GET API and confirm Work Arrangement/destination values match exactly
3. As ceo@simformsolutions.com, open Employee Listing (already loaded) without reloading and locate punit.patel's row

**Expected**

API values match UI exactly; Employee Listing row reflects the new Work Arrangement/destination without requiring a manual page reload

**Test Data**

- `workArrangement`: WFO
- `destination`: Canada

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Open two browser contexts: primaryPage + testUserPage

#### TC-EMPDET-106 — Integration (EMPDET) — drawer-level Save/Cancel behavior consistent across Location Preference/Visa and core Employee Profile sections

| Field | Value |
| --- | --- |
| **Tags** | @integration, @regression |
| **Requirement Ref** | affectedModules: EMPDET integrationNote — drawer-level Save/Cancel/API-parity/double-click regressions apply |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Edit Profile Details drawer
2. Edit both a core Employee Profile field and a Location Preference field in the same session
3. Click Cancel

**Expected**

Cancel discards changes to both the core field and the Location Preference field consistently — no partial save leaking from one section to the other

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-107 — Integration (NOTIF) — visa expiry event correctly triggers an entry in the Notifications module for employee and RM

| Field | Value |
| --- | --- |
| **Tags** | @integration, @regression |
| **Requirement Ref** | affectedModules: NOTIF integrationNote — visa expiry notifications depend on shared pipeline |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Seed a visa expiring in 90 days
2. Advance/trigger the notification pipeline (mocked clock)
3. Check the Notifications module UI/API for both employee and RM

**Expected**

A notification entry is created and visible in the Notifications module for both employee and RM, correctly attributed to this visa expiry event

**Test Data**

- `expiryDate`: today+90d

**Automation Hint**

PARTIAL — mocked-clock/notification pipeline. Use testUserPage fixture

#### TC-EMPDET-108 — Integration (FILE) — uploaded Supporting Document is accessible/downloadable via the shared File module after visa save

| Field | Value |
| --- | --- |
| **Tags** | @integration, @regression |
| **Requirement Ref** | affectedModules: FILE integrationNote — Supporting Document uses shared attachment component |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Upload 'visa_supporting_doc.pdf' as Supporting Document on a visa record and Save
2. Navigate to the shared File/attachment view for this employee
3. Attempt to download the file

**Expected**

File is listed in the shared File module and downloads successfully with correct content

**Test Data**

- `file`: visa_supporting_doc.pdf

**Automation Hint**

Use testUserPage fixture; file chooser interaction

#### TC-EMPDET-109 — Integration — visa data flows correctly into the Allocation module's Visa-Match Indicator

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | Cross-module integration — Visa-Match Indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Test Data Note** | source module: HR (Employee Profile), target module: Allocation (Visa-Match Indicator) |

**Preconditions**

Open two browser contexts: primaryPage (ceo@simformsolutions.com) + testUserPage (punit.patel)

**Steps**

1. As punit.patel, add on-site foreign destination 'USA' with no valid visa, Save — confirm Visa-Match gap appears
2. Add a matching valid visa for USA, Save
3. As ceo@simformsolutions.com, view the Allocation module's Visa-Match Indicator for this employee

**Expected**

Visa-Match Indicator initially shows a gap for USA, then updates to show no gap once the matching visa is added — cross-module (HR → Allocation) sync confirmed

**Test Data**

- `destination`: USA (On-site)
- `visa`: none then added

**Automation Hint**

Open two browser contexts: primaryPage + testUserPage

### Negative (13)

#### TC-EMPDET-039 — Submitting drawer with Work Arrangement blank blocks save

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: Work Arrangement blank |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Edit Profile Details drawer
2. Leave Work Arrangement blank
3. Click Save

**Expected**

Inline error 'This field is required.' is shown under Work Arrangement; save is blocked, drawer remains open

**Test Data**

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-040 — Toggle=Yes with zero destinations blocks save

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: toggle=Yes zero destinations |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set toggle=Yes, add no destinations
2. Click Save

**Expected**

Error 'Add at least one destination or set this to No.' shown; save blocked

**Test Data**

- `toggle`: Yes

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-041 — Adding a destination already present in the list is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: duplicate destination add; unclear: duplicate destination UX |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add destination 'USA'
2. Attempt to add destination 'USA' again

**Expected**

Second add is rejected/flagged as a duplicate (per default assumption: exact-value duplicate blocked via inline error) — only one 'USA' entry present

**Test Data**

- `destination`: USA

**Automation Hint**

Use testUserPage fixture — exact UX per unclear item, verify with human

#### TC-EMPDET-042 — Destination=Other/Other Domestic City without Specify Location blocks save

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: Other without Specify Location |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Destination='Other'
2. Leave Specify Location blank
3. Click Save

**Expected**

Mandatory validation blocks save with an inline error on Specify Location

**Test Data**

- `destination`: Other

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-043 — Work Mode=On-site without City/Address blocks save

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: On-site without City/Address |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Set Work Mode=On-site
2. Leave City/Address blank
3. Click Save

**Expected**

Mandatory validation blocks save with inline error on City/Address

**Test Data**

- `workMode`: On-site

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-044 — Visa Country/Visa Type/Expiry Date individually left blank shows per-field required errors

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: visa mandatory fields blank |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill Visa Type and Expiry Date, leave Country blank; click Save — observe error
2. Fill Country and Expiry Date, leave Visa Type blank; click Save — observe error
3. Fill Country and Visa Type, leave Expiry Date blank; click Save — observe error

**Expected**

Each scenario shows 'This field is required.' under the specific blank field only; save blocked in all three cases

**Test Data**

- `cases`: Country blank, Visa Type blank, Expiry Date blank

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-045 — Issue Date after Expiry Date blocks save

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: Issue Date after Expiry Date |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Fill Issue Date=2028-01-01, Expiry Date=2027-01-01
2. Click Save

**Expected**

Error 'Issue date cannot be after the expiry date.' shown; save blocked

**Test Data**

- `issueDate`: 2028-01-01
- `expiryDate`: 2027-01-01

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-046 — Cancelling duplicate Country+Visa Type confirmation does not add a duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: duplicate visa — Cancel path |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Existing visa: Country=USA, Visa Type=H1B
2. Add another visa Country=USA, Visa Type='h1b' (lowercase)
3. On the confirmation prompt, click Cancel

**Expected**

Prompt appears due to case-insensitive match; clicking Cancel results in no second record being added

**Test Data**

- `country`: USA
- `visaType`: h1b

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-047 — Cancelling/closing delete confirmation makes no change to the visa record

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: delete Cancel/close |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Click Delete icon on a visa record
2. Click Cancel (or close the dialog via the X)

**Expected**

Record remains present and unchanged in the list

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-048 — RM/TM/EM cannot write to Location Preference/Visa data outside view-only scope

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: RM/TM/EM write attempt outside scope |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture, acting in TM capacity per test data role assignment)

**Steps**

1. As TM, open a team member's profile
2. Attempt to click any edit control on Location Preference/Visa sections

**Expected**

Edit controls are hidden or disabled/read-only for the TM; no write action succeeds

**Test Data**

- `targetEmployee`: a reportee/team member

**Automation Hint**

Use testUserPage fixture — only two seeded accounts exist; RM/EM scope simulated via role assignment on this account

#### TC-EMPDET-049 — Whitespace-only value in Specify Location is treated as empty and rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation (whitespace-only) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Select Destination='Other'
2. Enter only spaces ('   ') into Specify Location
3. Click Save

**Expected**

Field is treated as empty; 'This field is required.' error shown; save blocked

**Test Data**

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Use testUserPage fixture

#### TC-EMPDET-050 — Session expiry (HTTP 401) mid-edit returns user to login without data loss

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression, @needs-verification |
| **Requirement Ref** | Regression: reliability (HTTP 401) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Edit Profile Details drawer, begin filling a new visa record
2. Force session expiry (invalidate token) server-side or via mocked 401 response
3. Click Save

**Expected**

User is redirected to the login page; no partial/corrupt visa record is created; after re-login, prior saved data is intact

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Use testUserPage fixture

#### TC-EMPDET-051 — Server error (HTTP 500) on visa save shows friendly error, no raw stack trace

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression, @needs-verification |
| **Requirement Ref** | Regression: reliability (HTTP 500) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Mock the visa-save API endpoint to return HTTP 500
2. Attempt to save a valid visa record

**Expected**

UI shows a user-friendly error toast/message; no raw stack trace or technical error text is exposed; drawer state is not corrupted

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Use testUserPage fixture; mock API response

### Performance (1)

#### TC-EMPDET-112 — Performance — Employee Listing filtering/sorting on new Work Arrangement/Relocation/Visa-status columns does not degrade load time

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: listing filter/sort on new columns |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Load Employee Listing with 500 seeded employee records and the new columns enabled
2. Measure time to apply a Work Arrangement filter
3. Measure time to sort by the Relocation column

**Expected**

Both the filter and the sort operation complete within the 2000ms threshold with no noticeable UI degradation compared to pre-existing columns

**Test Data**

- `recordVolume`: 500
- `threshold`: 2000ms

**Automation Hint**

Use primaryPage fixture; measure via Playwright performance timing/network idle

### Regression (8)

#### TC-EMPDET-097 — Regression (EMPDET) — Edit Profile Details drawer's other Employee Profile sections unaffected by Location Preference/Visa changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: EMPDET — shared Edit Profile Details drawer regression |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Edit Profile Details drawer
2. Edit Location Preference and Visa Information sections and Save
3. Verify other Employee Profile fields (e.g. contact info, designation) in the same drawer are unchanged
4. Test drawer Save/Cancel on the unrelated sections still works correctly

**Expected**

No corruption or unintended changes to other Employee Profile drawer sections; Save/Cancel behavior for those sections remains correct

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-098 — Regression (NOTIF) — existing notification types still function alongside new visa expiry notifications

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: NOTIF — shared notification pipeline regression |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Trigger an existing, unrelated notification type (e.g. a task/goal reminder)
2. Simultaneously trigger a visa-expiry notification for the same employee

**Expected**

Both notifications are delivered correctly without one suppressing, duplicating, or corrupting the other in the shared notification pipeline

**Automation Hint**

PARTIAL — depends on notification pipeline mocking/timing. Use testUserPage fixture

#### TC-EMPDET-099 — Regression (FILE) — shared attachment component still works for other upload use-cases after visa document upload changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: FILE — shared attachment component regression |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Upload a Supporting Document to a visa record
2. Separately, use another feature that relies on the same shared attachment component (e.g. resume upload) to upload resume.pdf

**Expected**

Both uploads succeed independently; the shared attachment component behaves correctly for both use-cases with no cross-contamination

**Test Data**

- `otherAttachment`: resume.pdf

**Automation Hint**

Use testUserPage fixture; file chooser interaction

#### TC-EMPDET-100 — Regression — UI-displayed visa/destination values match the API response after save

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (UI-API value parity) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Create a visa record with Country=UAE, Visa Type=Employment Visa, Expiry Date=2028-01-01
2. Read the same fields via the profile GET API

**Expected**

Every field value shown in the UI exactly matches the API response value

**Test Data**

- `country`: UAE
- `visaType`: Employment Visa

**Automation Hint**

Use testUserPage fixture; direct API verification

#### TC-EMPDET-101 — Regression — visa/destination counts match across list view, header indicator, and API total field

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (count parity) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add 2 destinations and 2 visa records
2. Compare header '+N locations' count, visa list count, Employee Listing Relocation count, and API 'total' field for both entities

**Expected**

All four sources report the same count (2 destinations, 2 visas) with no discrepancy

**Test Data**

- `destinations`: 2
- `visas`: 2

**Automation Hint**

Use testUserPage fixture; direct API verification

#### TC-EMPDET-102 — Regression — deleted visa record is absent from the active list immediately, no page refresh required

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (delete reflected without refresh) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Delete a visa record with confirmation
2. Without refreshing the page, observe the visa list

**Expected**

Record is absent from the list immediately, no manual refresh needed

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-103 — Regression — '+ Add Visa' button remains visible to the owning employee before and after adding a record

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (button visibility) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. View Visa Information section with zero records — confirm '+ Add Visa' button visible
2. Add a visa record
3. Confirm '+ Add Visa' button is still visible after the add

**Expected**

Button remains visible to the employee both before and after the CRUD operation

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-104 — Regression — visa Save button is disabled while required fields are empty, enabled once all are filled

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (disabled/enabled state) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open '+ Add Visa' form — confirm Save button is disabled
2. Fill Country only — confirm still disabled
3. Fill Visa Type and Expiry Date to complete all mandatory fields — confirm Save becomes enabled

**Expected**

Save button state accurately reflects required-field completion at every intermediate step

**Automation Hint**

Use testUserPage fixture

### Security (9)

#### TC-EMPDET-088 — Security — Employee cannot edit another employee's Location Preference/Visa data (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: Employee cannot edit another employee's data; securityScenario: IDOR; edgeCase: role enforcement API write attempt |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage (ceo@simformsolutions.com) + testUserPage (punit.patel)

**Steps**

1. As punit.patel (testUserPage), attempt to navigate to another employee's Edit Profile Details drawer via UI
2. Confirm no edit entry point is reachable/visible
3. As punit.patel, send a direct PATCH/PUT API request to update another employee's Location Preference or Visa record by changing the ID in the request

**Expected**

UI provides no path to edit another employee's data (own-data-only scope); direct API request returns 403 and makes no change to the target's data

**Test Data**

- `targetEmployeeId`: another employee's profile ID, not punit.patel's own

**Automation Hint**

Use testUserPage fixture for the attack attempt; use primaryPage fixture to verify target data unchanged

#### TC-EMPDET-089 — Security — Employee cannot override the auto-computed visa status directly

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: Employee cannot override auto-computed visa status |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. As punit.patel, confirm no UI control exists to directly set visa status
2. Send a direct API PATCH request setting the visa status field to 'Valid' on a record that is actually Expired

**Expected**

API rejects or ignores the direct status field write; status remains server-recomputed based on Expiry Date, not the submitted value

**Test Data**

- `visaId`: own visa record
- `attemptedStatus`: Valid

**Automation Hint**

Use testUserPage fixture; direct API request

#### TC-EMPDET-090 — Security — RM has view-only access to reportees' Location Preference/Visa data

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: RM cannot edit any employee's data |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture, acting in RM capacity per test role assignment)

**Steps**

1. As RM, open a reportee's profile — confirm Location Preference/Visa sections are visible
2. Confirm all edit/add/delete controls are absent or disabled
3. Send a direct API write request against the reportee's record

**Expected**

RM can view but not edit; all write controls absent from UI; API returns 403 for write attempts

**Test Data**

- `reporteeProfile`: a reportee's profile

**Automation Hint**

Use testUserPage fixture — only two seeded accounts exist; RM role simulated via test role assignment on this account

#### TC-EMPDET-091 — Security — TM has view-only access to team members' Location Preference/Visa data

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: TM cannot edit any employee's data |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture, acting in TM capacity)

**Steps**

1. As TM, open a team member's profile — confirm Location Preference/Visa sections are visible read-only
2. Confirm all edit/add/delete controls are absent or disabled
3. Send a direct API write request against the team member's record

**Expected**

TM can view but not edit; write controls absent; API returns 403

**Test Data**

- `teamMemberProfile`: a team member's profile

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-092 — Security — EM has view-only access to managed/engaged employees' Location Preference/Visa data

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: EM cannot edit any employee's data |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture, acting in EM capacity)

**Steps**

1. As EM, open a managed employee's profile — confirm Location Preference/Visa sections are visible read-only
2. Confirm all edit/add/delete controls are absent or disabled
3. Send a direct API write request against the record

**Expected**

EM can view but not edit; write controls absent; API returns 403

**Test Data**

- `managedEmployeeProfile`: a managed/engaged employee's profile

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-093 — Security — direct API write attempts bypassing the view-only UI are rejected for RM/TM/EM roles

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: RM/TM/EM API write attempt despite view-only UI |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture, cycled through RM/TM/EM role assignments)

**Steps**

1. For each of RM, TM, EM role assignment, bypass the UI entirely and send a direct POST/PUT request to the Location Preference/Visa write endpoints for a scoped employee

**Expected**

Every request returns exactly 403 for all three roles; no data is modified in any case

**Test Data**

- `roles`: RM, TM, EM
- `endpoint`: POST/PUT Location Preference & Visa endpoints

**Automation Hint**

Use testUserPage fixture; direct API calls, parameterized per role

#### TC-EMPDET-094 — Security — free-text fields sanitize script/HTML payloads (XSS)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: free-text XSS sanitization |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Enter each XSS/injection payload into Specify Location, City/Address, and Visa Type 'Other' free-text fields in turn
2. Save each and reload the profile

**Expected**

No script executes on save or render; values are sanitized/escaped in both storage and display; no console errors indicating injection

**Test Data**

- `payloads`: <script>alert(1)</script>, ", ', --, %, null, undefined

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-095 — Security — every create/edit/delete action is audit-logged and the log is immutable for non-Admin

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: audit log completeness and immutability |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform a create, an edit, and a delete on Location Preference/Visa data (as any role)
2. As Admin, open the audit log and locate all three entries
3. As punit.patel (testUserPage), attempt to modify/delete an audit log entry via API

**Expected**

All three actions have audit entries with actor, timestamp, and before/after values; the non-Admin modification attempt on the audit log returns 403

**Automation Hint**

Open two browser contexts: primaryPage + testUserPage

#### TC-EMPDET-096 — Security — role-scope matrix: each role's permitted/forbidden actions enforced consistently at UI and API in the same session

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | businessRule: role-scope-assertion |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Open two browser contexts: primaryPage (ceo@simformsolutions.com) + testUserPage (punit.patel)

**Steps**

1. For each role in the matrix, attempt every 'can' action (expect success at UI+API) and every 'cannot' action (expect UI hidden/read-only + API 403) in a single consolidated pass across both sessions

**Expected**

Every permitted action succeeds and every forbidden action is blocked at both UI and API layers, matching the roleMatrix exactly for all 5 roles

**Test Data**

- `roles`: Employee, RM, TM, EM, Admin

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Open two browser contexts: primaryPage + testUserPage

### Smoke (3)

#### TC-EMPDET-001 — Critical path — Employee sets Work Arrangement + prioritised destinations, visible accurately to RM/Admin

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Critical path 1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Open Edit Profile Details drawer for own profile
2. Set Work Arrangement = Hybrid
3. Set 'Open to relocation/travel' = Yes
4. Add destinations USA, Canada, Other Domestic City (enter 'Pune Annex' in Specify Location for the domestic one) in that order
5. Click Save
6. Log out; log in as ceo@simformsolutions.com (primaryPage fixture)
7. Navigate to Employee Listing, open the same employee's profile/header

**Expected**

Header shows 'Hybrid' tag + '+3 locations' indicator; destinations listed with Priority 1=USA, 2=Canada, 3=Other Domestic City (Pune Annex); Admin view shows identical data; Employee Listing row (with Work Arrangement/Relocation columns enabled) matches

**Test Data**

- `workArrangement`: Hybrid
- `toggle`: Yes
- `destinations`: USA, Canada, Other Domestic City
- `specifyLocation`: Pune Annex

**Automation Hint**

Use testUserPage fixture then primaryPage fixture — two sequential sessions

#### TC-EMPDET-002 — Critical path — Visa add auto-computes status; on-site foreign destination without valid visa triggers advisory + Visa-Match gap

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Critical path 2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. In Edit Profile Details drawer, set destination 'USA' with Work Mode = On-site and City/Address = 'New York, NY'
2. Save without adding any visa record
3. Navigate to Visa Information section — confirm empty state
4. Click Save on the drawer again to trigger the on-site-foreign-without-visa check

**Expected**

Non-blocking advisory message is shown on save (record still saves); Employee Listing / allocation Visa-Match Indicator shows a gap for this employee against 'USA'

**Test Data**

- `destination`: USA
- `workMode`: On-site
- `cityAddress`: New York, NY
- `visa`: none added

**Automation Hint**

Use testUserPage fixture

#### TC-EMPDET-003 — Critical path — Delete visa record after confirmation permanently removes it, reflected immediately in listing/API

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Critical path 3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel (testUserPage fixture)

**Steps**

1. Add a visa record: Country=India, Visa Type=Work Permit, Expiry Date=2027-01-01, Save
2. Click the Delete icon on that visa record
3. Confirm 'Are you sure you want to remove this visa entry?' dialog by clicking 'Yes, Remove'

**Expected**

Record disappears from the visa list immediately (no refresh); a GET on the visa API for this employee no longer returns the record; Employee Listing/Visa-Match Indicator updates accordingly

**Test Data**

- `visa`: country: India; visaType: Work Permit; expiryDate: 2027-01-01

**Automation Hint**

Use testUserPage fixture; verify via direct API call after UI delete
