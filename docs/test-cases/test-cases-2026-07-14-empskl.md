# Skills — Test Cases

**Total test cases:** 113  
**Modules covered:** Skills  
**Source:** `reports/test-cases/cases-2026-07-14-EMPSKL.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 41 | 36.3% |
| negative | 19 | 16.8% |
| boundary | 18 | 15.9% |
| regression | 14 | 12.4% |
| security | 10 | 8.8% |
| integration | 6 | 5.3% |
| smoke | 5 | 4.4% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 48 | 42.5% |
| medium | 42 | 37.2% |
| low | 15 | 13.3% |
| critical | 8 | 7.1% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 69 | 61.1% |
| minor | 31 | 27.4% |
| critical | 13 | 11.5% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 92 | 81.4% |
| regression-derived | 21 | 18.6% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 95 | 84.1% |
| inferred | 13 | 11.5% |
| speculative | 4 | 3.5% |
| unverified-fallback | 1 | 0.9% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 83 | 73.5% |
| No | 30 | 26.5% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 53 | 46.9% |
| @regression | 30 | 26.5% |
| @boundary | 28 | 24.8% |
| @needs-verification | 25 | 22.1% |
| @negative | 20 | 17.7% |
| @security | 13 | 11.5% |
| @smoke | 5 | 4.4% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPSKL-001](#tc-empskl-001-tm-em-admin-adds-a-new-skill-via-add-new-skill-drawer-with-mixed-primary-secondary-classifications-and-save-reflects-correctly-everywhere) | TM/EM/Admin adds a new skill via 'Add New Skill' drawer with mixed Primary/Secondary classifications and Save reflects correctly everywhere | Skills | smoke | critical |
| [TC-EMPSKL-002](#tc-empskl-002-employee-self-assigns-a-skill-from-their-profile-and-it-is-reflected-correctly-in-the-skill-detail-panel-for-their-department) | Employee self-assigns a skill from their profile and it is reflected correctly in the Skill Detail Panel for their department | Skills | smoke | critical |
| [TC-EMPSKL-003](#tc-empskl-003-tm-em-admin-overrides-an-employee-s-self-classified-skill-after-one-time-confirmation-and-change-reflects-immediately-on-detail-panel-and-profile) | TM/EM/Admin overrides an employee's self-classified skill after one-time confirmation and change reflects immediately on Detail Panel and profile | Skills | smoke | critical |
| [TC-EMPSKL-004](#tc-empskl-004-skills-listing-shows-one-combined-primary-secondary-count-per-skill-with-no-per-category-breakdown-at-list-level) | Skills Listing shows one combined Primary+Secondary count per skill with no per-category breakdown at list level | Skills | smoke | critical |
| [TC-EMPSKL-005](#tc-empskl-005-selecting-a-skill-renders-primary-holders-and-secondary-holders-sub-sections-with-correct-counts-and-matching-members) | Selecting a skill renders Primary Holders and Secondary Holders sub-sections with correct counts and matching members | Skills | smoke | critical |
| [TC-EMPSKL-006](#tc-empskl-006-skills-listing-displays-all-skills-scoped-to-the-currently-selected-department-only) | Skills Listing displays all skills scoped to the currently selected department only | Skills | functional | high |
| [TC-EMPSKL-007](#tc-empskl-007-tm-em-admin-can-access-and-successfully-use-the-add-skills-control) | TM/EM/Admin can access and successfully use the 'Add Skills' control | Skills | functional | high |
| [TC-EMPSKL-008](#tc-empskl-008-selecting-a-department-from-the-mandatory-checklist-clears-the-gate-and-enables-skill-related-actions) | Selecting a department from the mandatory checklist clears the gate and enables skill-related actions | Skills | functional | high |
| [TC-EMPSKL-009](#tc-empskl-009-no-skill-selected-empty-state-shows-the-exact-unchanged-copy) | No-skill-selected empty state shows the exact unchanged copy | Skills | functional | medium |
| [TC-EMPSKL-010](#tc-empskl-010-employee-strength-x-out-of-n-header-remains-unaffected-by-skill-classification-changes) | 'Employee Strength: X out of N' header remains unaffected by skill classification changes | Skills | functional | medium |
| [TC-EMPSKL-011](#tc-empskl-011-add-skills-opens-a-drawer-titled-add-new-skill-with-subtitle-map-a-skill-to-one-or-more-departments) | 'Add Skills' opens a drawer titled 'Add New Skill' with subtitle 'Map a skill to one or more departments' | Skills | functional | medium |
| [TC-EMPSKL-012](#tc-empskl-012-all-add-new-skill-drawer-fields-remain-disabled-until-a-department-is-selected-and-enable-immediately-once-one-is) | All Add New Skill drawer fields remain disabled until a department is selected, and enable immediately once one is | Skills | functional | high |
| [TC-EMPSKL-013](#tc-empskl-013-department-checkbox-list-for-a-tm-em-shows-only-departments-they-manage-not-the-full-department-list) | Department checkbox list for a TM/EM shows only departments they manage, not the full department list | Skills | functional | high |
| [TC-EMPSKL-014](#tc-empskl-014-fuzzy-search-in-search-or-create-skill-shows-the-number-of-departments-each-matched-skill-is-already-linked-to) | Fuzzy search in Search or Create Skill shows the number of departments each matched skill is already linked to | Skills | functional | medium |
| [TC-EMPSKL-015](#tc-empskl-015-assign-to-employees-multiselect-is-scoped-by-role-admin-sees-all-employees-tm-em-see-only-their-managed-department-employees) | Assign to Employees multiselect is scoped by role: Admin sees all employees, TM/EM see only their managed-department employees | Skills | functional | high |
| [TC-EMPSKL-016](#tc-empskl-016-primary-secondary-toggle-renders-next-to-each-employee-chip-for-admin-tm-and-em) | Primary/Secondary toggle renders next to each employee chip for Admin, TM, and EM | Skills | functional | high |
| [TC-EMPSKL-017](#tc-empskl-017-one-save-action-can-assign-a-skill-to-multiple-employees-each-with-an-independently-set-primary-or-secondary-classification) | One Save action can assign a skill to multiple employees, each with an independently-set Primary or Secondary classification | Skills | functional | high |
| [TC-EMPSKL-018](#tc-empskl-018-rm-assigns-a-skill-to-a-direct-report-no-toggle-is-shown-and-the-result-is-always-saved-as-secondary) | RM assigns a skill to a direct report; no toggle is shown and the result is always saved as Secondary | Skills | functional | high |
| [TC-EMPSKL-019](#tc-empskl-019-clicking-save-persists-skill-department-logo-tags-and-all-employee-assignments-classifications-drawer-closes-and-skills-overview-updates-without-reload) | Clicking Save persists skill, department, logo, tags, and all employee assignments/classifications; drawer closes and Skills Overview updates without reload | Skills | functional | high |
| [TC-EMPSKL-020](#tc-empskl-020-clicking-cancel-on-the-add-new-skill-drawer-discards-all-changes-and-closes-the-drawer) | Clicking Cancel on the Add New Skill drawer discards all changes and closes the drawer | Skills | functional | medium |
| [TC-EMPSKL-021](#tc-empskl-021-a-brand-new-skill-created-via-create-new-skill-and-assigned-in-the-same-flow-behaves-identically-to-assigning-an-existing-skill) | A brand-new skill created via '+ Create new Skill' and assigned in the same flow behaves identically to assigning an existing skill | Skills | functional | medium |
| [TC-EMPSKL-022](#tc-empskl-022-employee-adds-a-skill-to-their-own-profile-and-chooses-the-classification-primary-or-secondary-at-the-time-of-self-assignment) | Employee adds a skill to their own profile and chooses the classification (Primary or Secondary) at the time of self-assignment | Skills | functional | high |
| [TC-EMPSKL-023](#tc-empskl-023-employee-changes-the-classification-of-their-own-already-assigned-skill-primary-secondary-at-any-time) | Employee changes the classification of their own already-assigned skill (Primary <-> Secondary) at any time | Skills | functional | high |
| [TC-EMPSKL-024](#tc-empskl-024-tags-can-be-added-to-managed-on-a-skill-at-any-time-after-creation) | Tags can be added to/managed on a skill at any time after creation | Skills | functional | medium |
| [TC-EMPSKL-025](#tc-empskl-025-tm-em-admin-can-access-and-use-the-delete-unlink-skill-control) | TM/EM/Admin can access and use the Delete/Unlink Skill control | Skills | functional | high |
| [TC-EMPSKL-026](#tc-empskl-026-delete-unlink-is-enabled-and-shows-delete-unlink-skill-confirmation-when-the-skill-has-0-combined-holders-in-department-but-is-used-in-other-departments) | Delete/unlink is enabled and shows 'Delete/Unlink Skill' confirmation when the skill has 0 combined holders in-department but is used in other departments | Skills | functional | high |
| [TC-EMPSKL-027](#tc-empskl-027-delete-unlink-is-enabled-and-shows-unlink-skill-from-department-confirmation-when-the-skill-is-dept-only-with-0-combined-holders) | Delete/unlink is enabled and shows 'Unlink Skill from Department' confirmation when the skill is dept-only with 0 combined holders | Skills | functional | medium |
| [TC-EMPSKL-028](#tc-empskl-028-fuzzy-search-with-zero-matches-shows-no-match-found-and-a-create-new-skill-option) | Fuzzy search with zero matches shows 'No match found' and a '+ Create new Skill' option | Skills | functional | medium |
| [TC-EMPSKL-029](#tc-empskl-029-admin-has-full-cross-department-access-add-classify-and-delete-unlink-skills-in-any-department) | Admin has full cross-department access: add, classify, and delete/unlink skills in any department | Skills | functional | high |
| [TC-EMPSKL-030](#tc-empskl-030-employee-profile-self-assignment-ui-renders-a-single-classification-control-not-the-multi-employee-chip-toggle-flow-used-in-skills-management) | Employee profile self-assignment UI renders a single classification control (not the multi-employee chip/toggle flow used in Skills Management) | Skills | functional | low |
| [TC-EMPSKL-031](#tc-empskl-031-override-confirmation-dialog-appears-on-every-override-attempt-not-only-the-first-attempt-for-a-given-employee-skill-pair) | Override confirmation dialog appears on every override attempt, not only the first attempt for a given employee-skill pair | Skills | functional | low |
| [TC-EMPSKL-032](#tc-empskl-032-employee-self-datascope-is-limited-to-their-own-profile-no-ability-to-assign-classify-skills-for-other-employees-or-add-catalog-level-skills) | Employee (self) dataScope is limited to their own profile — no ability to assign/classify skills for other employees or add catalog-level skills | Skills | functional | medium |
| [TC-EMPSKL-033](#tc-empskl-033-em-has-the-same-add-classify-assign-override-delete-permissions-as-tm-within-their-managed-departments) | EM has the same add/classify/assign/override/delete permissions as TM within their managed departments | Skills | functional | medium |
| [TC-EMPSKL-034](#tc-empskl-034-creating-a-skill-via-create-new-skill-persists-a-new-reusable-skill-entry-findable-in-future-searches) | Creating a skill via '+ Create new Skill' persists a new, reusable skill entry findable in future searches | Skills | functional | medium |
| [TC-EMPSKL-035](#tc-empskl-035-skill-logo-optional-url-is-saved-and-displayed-correctly-in-the-skills-listing-and-detail-panel-when-provided) | Skill Logo (optional URL) is saved and displayed correctly in the Skills Listing and Detail Panel when provided | Skills | functional | low |
| [TC-EMPSKL-036](#tc-empskl-036-assign-to-employees-multiselect-search-narrows-the-employee-list-as-the-user-types-a-name) | Assign to Employees multiselect search narrows the employee list as the user types a name | Skills | functional | low |
| [TC-EMPSKL-037](#tc-empskl-037-selected-employees-render-as-removable-chips-in-assign-to-employees-removing-a-chip-before-save-excludes-that-employee) | Selected employees render as removable chips in Assign to Employees; removing a chip before Save excludes that employee | Skills | functional | low |
| [TC-EMPSKL-038](#tc-empskl-038-tm-em-successfully-assigns-classifies-a-skill-for-an-employee-within-their-own-managed-department-in-scope-success) | TM/EM successfully assigns/classifies a skill for an employee within their own managed department (in-scope success) | Skills | functional | high |
| [TC-EMPSKL-039](#tc-empskl-039-rm-can-view-the-skill-detail-panel-consistent-with-their-view-only-direct-reports-data-scope) | RM can view the Skill Detail Panel, consistent with their view-only/direct-reports data scope | Skills | functional | medium |
| [TC-EMPSKL-040](#tc-empskl-040-a-skill-assigned-to-employees-across-multiple-departments-shows-accurate-combined-counts-independently-scoped-per-department) | A skill assigned to employees across multiple departments shows accurate combined counts independently scoped per department | Skills | functional | medium |
| [TC-EMPSKL-041](#tc-empskl-041-selected-department-has-zero-skills-the-source-s-default-empty-state-assumption-is-testable-at-least-as-a-non-blank-state) | Selected department has zero skills — the source's default empty-state assumption is testable at least as a non-blank state | Skills | functional | low |
| [TC-EMPSKL-042](#tc-empskl-042-primary-secondary-toggle-never-renders-for-rm-not-merely-disabled) | Primary/Secondary toggle never renders for RM (not merely disabled) | Skills | negative | high |
| [TC-EMPSKL-043](#tc-empskl-043-rm-has-no-ability-to-reach-the-add-skills-button-drawer) | RM has no ability to reach the 'Add Skills' button/drawer | Skills | negative | high |
| [TC-EMPSKL-044](#tc-empskl-044-rm-has-no-delete-unlink-control-available-under-any-circumstance) | RM has no delete/unlink control available under any circumstance | Skills | negative | high |
| [TC-EMPSKL-045](#tc-empskl-045-tm-em-admin-cannot-edit-skill-name-department-or-logo-after-creation) | TM/EM/Admin cannot edit Skill Name, Department, or Logo after creation | Skills | negative | medium |
| [TC-EMPSKL-046](#tc-empskl-046-all-add-new-skill-drawer-fields-are-blocked-from-interaction-before-a-department-is-selected) | All Add New Skill drawer fields are blocked from interaction before a department is selected | Skills | negative | medium |
| [TC-EMPSKL-047](#tc-empskl-047-save-is-blocked-when-search-or-create-skill-is-left-blank) | Save is blocked when Search or Create Skill is left blank | Skills | negative | medium |
| [TC-EMPSKL-048](#tc-empskl-048-employee-attempts-to-self-assign-the-same-skill-in-the-same-category-a-second-time-blocked-as-duplicate) | Employee attempts to self-assign the same skill in the same category a second time — blocked as duplicate | Skills | negative | medium |
| [TC-EMPSKL-049](#tc-empskl-049-per-employee-conflict-on-save-blocks-only-the-conflicting-employee-other-employees-in-the-same-batch-persist-normally) | Per-employee conflict on Save blocks only the conflicting employee; other employees in the same batch persist normally | Skills | negative | high |
| [TC-EMPSKL-050](#tc-empskl-050-employee-is-blocked-from-adding-a-skill-in-the-opposite-category-they-already-hold-with-the-exact-inline-message) | Employee is blocked from adding a skill in the opposite category they already hold, with the exact inline message | Skills | negative | high |
| [TC-EMPSKL-051](#tc-empskl-051-delete-unlink-is-blocked-disabled-cannot-unlink-skill-error-when-the-skill-has-any-combined-holders-1-in-department) | Delete/unlink is blocked (disabled, Cannot Unlink Skill error) when the skill has any combined holders (≥1) in-department | Skills | negative | critical |
| [TC-EMPSKL-052](#tc-empskl-052-logo-url-field-rejects-an-invalid-malformed-url-format) | Logo URL field rejects an invalid/malformed URL format | Skills | negative | low |
| [TC-EMPSKL-053](#tc-empskl-053-skill-name-entered-as-whitespace-only-is-treated-as-empty-and-rejected) | Skill Name entered as whitespace-only is treated as empty and rejected | Skills | negative | medium |
| [TC-EMPSKL-054](#tc-empskl-054-creating-a-skill-with-a-name-that-already-exists-in-the-same-department-is-prevented-as-a-duplicate) | Creating a skill with a name that already exists in the same department is prevented as a duplicate | Skills | negative | medium |
| [TC-EMPSKL-055](#tc-empskl-055-refreshing-the-browser-mid-add-new-skill-drawer-submission-does-not-create-partial-or-duplicate-records) | Refreshing the browser mid-Add-New-Skill-drawer-submission does not create partial or duplicate records | Skills | negative | medium |
| [TC-EMPSKL-056](#tc-empskl-056-a-slow-timed-out-save-shows-a-loading-indicator-and-the-ui-does-not-freeze) | A slow/timed-out Save shows a loading indicator and the UI does not freeze | Skills | negative | low |
| [TC-EMPSKL-057](#tc-empskl-057-session-expiry-http-401-during-a-skill-save-returns-the-user-to-login-without-data-loss) | Session expiry (HTTP 401) during a skill Save returns the user to login without data loss | Skills | negative | medium |
| [TC-EMPSKL-058](#tc-empskl-058-navigating-to-a-since-deleted-unlinked-skill-via-a-stale-link-id-shows-a-not-found-state-not-a-blank-screen) | Navigating to a since-deleted/unlinked skill via a stale link/ID shows a not-found state, not a blank screen | Skills | negative | medium |
| [TC-EMPSKL-059](#tc-empskl-059-a-server-error-http-500-during-save-shows-a-user-friendly-error-toast-not-a-raw-stack-trace) | A server error (HTTP 500) during Save shows a user-friendly error toast, not a raw stack trace | Skills | negative | medium |
| [TC-EMPSKL-060](#tc-empskl-060-a-service-unavailable-response-http-503-during-save-shows-a-maintenance-retry-message) | A service-unavailable response (HTTP 503) during Save shows a maintenance/retry message | Skills | negative | low |
| [TC-EMPSKL-061](#tc-empskl-061-tm-em-admin-selects-5-employees-in-one-save-explicitly-sets-primary-for-2-leaves-3-untouched-all-5-save-untouched-default-to-secondary) | TM/EM/Admin selects 5 employees in one Save; explicitly sets Primary for 2, leaves 3 untouched — all 5 save, untouched default to Secondary | Skills | boundary | high |
| [TC-EMPSKL-062](#tc-empskl-062-untouched-employee-toggles-default-to-secondary-on-save-general-boundary-case-single-employee) | Untouched employee toggles default to Secondary on Save (general boundary case, single employee) | Skills | boundary | high |
| [TC-EMPSKL-063](#tc-empskl-063-tm-overrides-one-employee-s-classification-while-that-same-employee-has-an-unrelated-opposite-category-conflict-in-the-same-batch-each-employee-s-override-conflict-is-evaluated-independently) | TM overrides one employee's classification while that same employee has an unrelated opposite-category conflict in the same batch — each employee's override/conflict is evaluated independently | Skills | boundary | medium |
| [TC-EMPSKL-064](#tc-empskl-064-admin-deletes-a-skill-with-0-primary-holders-but-12-secondary-holders-in-department-treated-as-assigned-combined-12-delete-unlink-blocked-with-exact-breakdown) | Admin deletes a skill with 0 Primary holders but 12 Secondary holders in-department — treated as assigned (combined = 12), delete/unlink blocked with exact breakdown | Skills | boundary | critical |
| [TC-EMPSKL-065](#tc-empskl-065-tm-em-views-the-skill-detail-panel-for-a-skill-with-employees-only-in-one-category-zero-primary-all-secondary-primary-shows-no-employees-in-this-category) | TM/EM views the Skill Detail Panel for a skill with employees only in one category (zero Primary, all Secondary) — Primary shows 'No employees in this category' | Skills | boundary | medium |
| [TC-EMPSKL-066](#tc-empskl-066-fuzzy-search-matching-multiple-skills-shows-an-accurate-department-link-count-per-matched-skill) | Fuzzy search matching multiple skills shows an accurate department-link count per matched skill | Skills | boundary | medium |
| [TC-EMPSKL-067](#tc-empskl-067-clicking-save-on-the-add-new-skill-drawer-twice-in-rapid-succession-creates-exactly-one-record-not-duplicates) | Clicking Save on the Add New Skill drawer twice in rapid succession creates exactly one record, not duplicates | Skills | boundary | high |
| [TC-EMPSKL-068](#tc-empskl-068-selected-department-has-zero-skills-skills-listing-shows-a-non-blank-empty-state-boundary-zero-skills-dataset) | Selected department has zero skills — Skills Listing shows a non-blank empty-state (boundary: zero-skills dataset) | Skills | boundary | low |
| [TC-EMPSKL-069](#tc-empskl-069-logo-url-field-has-no-documented-max-length-or-protocol-restriction-boundary-probe-at-an-arbitrarily-long-url) | Logo URL field has no documented max length or protocol restriction — boundary probe at an arbitrarily long URL | Skills | boundary | low |
| [TC-EMPSKL-070](#tc-empskl-070-fuzzy-search-debounce-minimum-character-threshold-and-case-sensitivity-are-unconfirmed-boundary-probe-at-1-character-and-mixed-case) | Fuzzy search debounce/minimum-character-threshold and case-sensitivity are unconfirmed — boundary probe at 1 character and mixed case | Skills | boundary | low |
| [TC-EMPSKL-071](#tc-empskl-071-assign-to-employees-is-optional-save-succeeds-with-zero-employees-selected-minimum-boundary) | Assign to Employees is optional — Save succeeds with zero employees selected (minimum boundary) | Skills | boundary | medium |
| [TC-EMPSKL-072](#tc-empskl-072-rm-attempts-via-direct-api-call-to-assign-classify-a-skill-for-an-employee-outside-their-direct-report-list-rejected-403) | RM attempts via direct API call to assign/classify a skill for an employee outside their direct-report list — rejected 403 | Skills | security | high |
| [TC-EMPSKL-073](#tc-empskl-073-tm-em-attempts-via-direct-api-call-to-assign-classify-or-delete-unlink-skills-scoped-to-a-department-they-do-not-manage-rejected-403) | TM/EM attempts via direct API call to assign, classify, or delete/unlink skills scoped to a department they do not manage — rejected 403 | Skills | security | high |
| [TC-EMPSKL-074](#tc-empskl-074-rm-session-attempts-add-skill-classify-override-or-delete-unlink-directly-via-api-bypassing-the-ui-all-rejected-403) | RM session attempts add-skill, classify, override, or delete/unlink directly via API, bypassing the UI — all rejected 403 | Skills | security | high |
| [TC-EMPSKL-075](#tc-empskl-075-overriding-an-employee-s-self-classified-skill-without-the-explicit-one-time-confirmation-scripted-bypass-must-not-take-effect) | Overriding an employee's self-classified skill without the explicit one-time confirmation (scripted bypass) must not take effect | Skills | security | high |
| [TC-EMPSKL-076](#tc-empskl-076-skill-name-tags-and-logo-url-fields-reject-sanitize-xss-payloads-script-html-injection) | Skill Name, Tags, and Logo URL fields reject/sanitize XSS payloads (script/HTML injection) | Skills | security | high |
| [TC-EMPSKL-077](#tc-empskl-077-rm-cannot-add-a-new-skill-verified-at-both-ui-control-unavailable-and-api-403-level) | RM cannot add a new skill — verified at both UI (control unavailable) and API (403) level | Skills | security | critical |
| [TC-EMPSKL-078](#tc-empskl-078-employee-self-cannot-assign-classify-skills-for-other-employees-via-direct-api-call-rejected-403) | Employee (self) cannot assign/classify skills for other employees via direct API call — rejected 403 | Skills | security | high |
| [TC-EMPSKL-079](#tc-empskl-079-each-role-s-permitted-forbidden-skill-actions-add-classify-override-delete-unlink-are-enforced-at-both-ui-and-api-level-not-merely-hidden-in-the-ui) | Each role's permitted/forbidden skill actions (add, classify, override, delete/unlink) are enforced at BOTH UI and API level, not merely hidden in the UI | Skills | security | high |
| [TC-EMPSKL-080](#tc-empskl-080-idor-check-changing-the-employeeid-in-an-assign-classify-override-api-request-url-to-target-an-employee-outside-the-caller-s-scope-returns-403-404) | IDOR check — changing the employeeId in an assign/classify/override API request/URL to target an employee outside the caller's scope returns 403/404 | Skills | security | high |
| [TC-EMPSKL-081](#tc-empskl-081-no-dedicated-em-or-rm-test-accounts-exist-em-rm-specific-skills-scenarios-remain-manual-only-until-provisioned) | No dedicated EM or RM test accounts exist — EM/RM-specific Skills scenarios remain manual-only until provisioned | Skills | security | medium |
| [TC-EMPSKL-082](#tc-empskl-082-regression-employee-profile-employee-details-section-10-3-existing-employee-details-functionality-is-unaffected-by-skills-classification-changes-made-elsewhere) | Regression — Employee Profile / Employee Details (Section 10.3): existing Employee Details functionality is unaffected by Skills classification changes made elsewhere | Skills | regression | high |
| [TC-EMPSKL-083](#tc-empskl-083-regression-department-settings-existing-department-crud-employee-count-functionality-is-unaffected-by-skills-module-changes) | Regression — Department Settings: existing department CRUD/employee-count functionality is unaffected by Skills module changes | Skills | regression | high |
| [TC-EMPSKL-084](#tc-empskl-084-regression-admin-roles-permissions-existing-role-permission-management-is-unaffected-by-skills-rbac-enforcement) | Regression — Admin / Roles & Permissions: existing role/permission management is unaffected by Skills RBAC enforcement | Skills | regression | high |
| [TC-EMPSKL-085](#tc-empskl-085-regression-ui-displayed-combined-and-split-counts-match-the-api-response-immediately-after-a-skill-save) | Regression — UI-displayed combined and split counts match the API response immediately after a skill save | Skills | regression | high |
| [TC-EMPSKL-086](#tc-empskl-086-regression-record-count-on-the-skills-listing-and-the-api-total-field-are-equal-after-an-add-delete-operation) | Regression — record count on the Skills Listing and the API 'total' field are equal after an add/delete operation | Skills | regression | high |
| [TC-EMPSKL-087](#tc-empskl-087-regression-a-newly-created-skill-assignment-is-present-in-the-listing-after-a-full-page-refresh-f5) | Regression — a newly created skill/assignment is present in the listing after a full page refresh (F5) | Skills | regression | high |
| [TC-EMPSKL-088](#tc-empskl-088-regression-updated-classification-values-are-correct-after-a-full-page-refresh-f5-persistence-also-holds-after-navigating-away-and-back) | Regression — updated classification values are correct after a full page refresh (F5); persistence also holds after navigating away and back | Skills | regression | high |
| [TC-EMPSKL-089](#tc-empskl-089-regression-a-deleted-unlinked-skill-is-absent-from-the-active-list-immediately-without-requiring-a-page-refresh) | Regression — a deleted/unlinked skill is absent from the active list immediately, without requiring a page refresh | Skills | regression | high |
| [TC-EMPSKL-090](#tc-empskl-090-regression-assigning-a-skill-increments-the-relevant-count-by-1-unlinking-removing-decrements-it-by-1-in-both-ui-and-api) | Regression — assigning a skill increments the relevant count by 1, unlinking/removing decrements it by 1, in both UI and API | Skills | regression | high |
| [TC-EMPSKL-091](#tc-empskl-091-regression-every-primary-action-button-add-skills-save-delete-unlink-is-visible-to-authorized-roles-before-and-after-a-crud-operation) | Regression — every primary action button (Add Skills, Save, Delete/Unlink) is visible to authorized roles before and after a CRUD operation | Skills | regression | medium |
| [TC-EMPSKL-092](#tc-empskl-092-regression-save-is-disabled-while-mandatory-fields-department-skill-are-empty-enabled-once-both-are-satisfied) | Regression — Save is disabled while mandatory fields (department, skill) are empty; enabled once both are satisfied | Skills | regression | medium |
| [TC-EMPSKL-093](#tc-empskl-093-regression-a-confirmation-dialog-appears-before-delete-unlink-and-override-dismissing-it-cancels-the-operation-with-no-change-made) | Regression — a confirmation dialog appears before Delete/Unlink and Override; dismissing it cancels the operation with no change made | Skills | regression | medium |
| [TC-EMPSKL-094](#tc-empskl-094-regression-a-success-toast-notification-appears-after-a-successful-skill-save-delete-containing-the-skill-name-or-a-confirmation-message) | Regression — a success toast/notification appears after a successful skill Save/Delete, containing the skill name or a confirmation message | Skills | regression | medium |
| [TC-EMPSKL-095](#tc-empskl-095-regression-a-loading-indicator-is-shown-during-skills-data-fetch-and-disappears-once-data-loads) | Regression — a loading indicator is shown during Skills data fetch and disappears once data loads | Skills | regression | medium |
| [TC-EMPSKL-096](#tc-empskl-096-integration-skills-self-assignment-reclassification-from-the-employee-profile-stays-in-sync-with-the-skills-management-view-for-the-same-employee-skill-link) | Integration — Skills self-assignment/reclassification from the Employee Profile stays in sync with the Skills Management view for the same employee-skill link | Skills | integration | high |
| [TC-EMPSKL-097](#tc-empskl-097-integration-department-selection-scoping-in-skills-depends-on-accurate-department-to-manager-and-skill-to-department-mappings-from-department-settings) | Integration — department selection/scoping in Skills depends on accurate department-to-manager and skill-to-department mappings from Department Settings | Skills | integration | high |
| [TC-EMPSKL-098](#tc-empskl-098-integration-tm-em-rm-admin-role-definitions-and-managed-department-assignments-from-admin-roles-permissions-correctly-gate-skills-actions) | Integration — TM/EM/RM/Admin role definitions and managed-department assignments from Admin/Roles & Permissions correctly gate Skills actions | Skills | integration | high |
| [TC-EMPSKL-099](#tc-empskl-099-employee-counts-reconcile-across-surfaces-skills-listing-combined-count-primary-count-secondary-count-on-the-detail-panel-the-api-response) | Employee counts reconcile across surfaces: Skills Listing combined count = Primary count + Secondary count on the Detail Panel = the API response | Skills | integration | high |
| [TC-EMPSKL-100](#tc-empskl-100-data-written-via-the-add-new-skill-drawer-or-profile-self-assignment-is-retrievable-via-the-api-with-identical-values) | Data written via the Add New Skill drawer or profile self-assignment is retrievable via the API with identical values | Skills | integration | high |
| [TC-EMPSKL-101](#tc-empskl-101-no-api-endpoints-are-confirmed-anywhere-in-the-source-for-create-assign-override-delete-unlink-all-api-parity-assertions-above-are-blocked-pending-confirmation) | No API endpoints are confirmed anywhere in the source for create/assign/override/delete-unlink — all api-parity assertions above are blocked pending confirmation | Skills | integration | medium |
| [TC-EMPSKL-102](#tc-empskl-102-skill-detail-panel-remains-scoped-to-the-selected-department-even-when-the-same-skill-is-used-in-multiple-departments) | Skill Detail Panel remains scoped to the selected department even when the same skill is used in multiple departments | Skills | functional | medium |
| [TC-EMPSKL-103](#tc-empskl-103-assign-to-employees-shows-the-correct-scoped-employee-count-for-the-current-role-department-before-any-search-term-is-typed) | Assign to Employees shows the correct scoped employee count for the current role+department before any search term is typed | Skills | functional | low |
| [TC-EMPSKL-104](#tc-empskl-104-a-skill-saves-successfully-with-only-the-mandatory-fields-provided-department-skill-name-no-logo-tags-or-employee-assignments) | A skill saves successfully with only the mandatory fields provided (department + skill name), no logo, tags, or employee assignments | Skills | functional | medium |
| [TC-EMPSKL-105](#tc-empskl-105-a-tm-em-managing-exactly-one-department-does-not-encounter-the-multi-department-selection-gate) | A TM/EM managing exactly one department does not encounter the multi-department selection gate | Skills | functional | medium |
| [TC-EMPSKL-106](#tc-empskl-106-overriding-a-classification-updates-both-the-skill-detail-panel-and-the-employee-s-profile-in-the-same-session-without-a-manual-refresh-of-either-surface) | Overriding a classification updates both the Skill Detail Panel and the employee's profile in the same session without a manual refresh of either surface | Skills | functional | medium |
| [TC-EMPSKL-107](#tc-empskl-107-skill-with-0-combined-holders-in-department-but-used-in-exactly-1-other-department-minimal-non-zero-still-shows-the-delete-unlink-skill-confirmation-not-the-dept-only-variant) | Skill with 0 combined holders in-department but used in exactly 1 other department (minimal non-zero) still shows the 'Delete/Unlink Skill' confirmation, not the dept-only variant | Skills | boundary | medium |
| [TC-EMPSKL-108](#tc-empskl-108-skill-with-exactly-1-primary-holder-minimum-non-zero-in-department-blocks-delete-unlink-identically-to-a-higher-count) | Skill with exactly 1 Primary holder (minimum non-zero) in-department blocks delete/unlink, identically to a higher count | Skills | boundary | high |
| [TC-EMPSKL-109](#tc-empskl-109-a-manager-managing-exactly-2-departments-minimum-multi-department-threshold-triggers-the-mandatory-department-selection-gate) | A manager managing exactly 2 departments (minimum multi-department threshold) triggers the mandatory department-selection gate | Skills | boundary | high |
| [TC-EMPSKL-110](#tc-empskl-110-add-new-skill-saves-successfully-with-zero-tags-since-tags-is-not-a-mandatory-field) | Add New Skill saves successfully with zero tags, since Tags is not a mandatory field | Skills | boundary | low |
| [TC-EMPSKL-111](#tc-empskl-111-assigning-a-skill-to-a-large-batch-of-employees-20-in-one-save-persists-all-20-with-their-respective-toggle-states-none-silently-dropped) | Assigning a skill to a large batch of employees (20) in one Save persists all 20 with their respective toggle states, none silently dropped | Skills | boundary | medium |
| [TC-EMPSKL-112](#tc-empskl-112-skill-name-entered-as-a-single-character-is-accepted-or-rejected-consistently-minimum-length-boundary-probe) | Skill Name entered as a single character is accepted or rejected consistently (minimum-length boundary probe) | Skills | boundary | low |
| [TC-EMPSKL-113](#tc-empskl-113-two-employees-in-the-same-save-action-are-both-left-completely-untouched-both-default-to-secondary-zero-explicit-primary-selections) | Two employees in the same Save action are both left completely untouched — both default to Secondary (zero explicit Primary selections) | Skills | boundary | medium |

---

## Skills

113 test cases.

### Boundary (18)

#### TC-EMPSKL-061 — TM/EM/Admin selects 5 employees in one Save; explicitly sets Primary for 2, leaves 3 untouched — all 5 save, untouched default to Secondary

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @functional |
| **Requirement Ref** | edgeCase: 5 employees, 2 Primary set, 3 default Secondary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add employees A-E to Assign to Employees
2. Set A and B's toggles to Primary; leave C, D, E untouched
3. Save

**Expected**

All 5 employees are saved; A and B are Primary; C, D, and E default to Secondary

**Test Data**

- `employees`: A, B, C, D, E
- `explicitPrimary`: A, B
- `untouched`: C, D, E

#### TC-EMPSKL-062 — Untouched employee toggles default to Secondary on Save (general boundary case, single employee)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @functional |
| **Requirement Ref** | testScenario: 'Untouched employee toggles default to Secondary on save'; AC: untouched toggle defaults Secondary (dup, merged) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add one employee to Assign to Employees
2. Do not interact with their toggle
3. Save

**Expected**

The employee's classification defaults to Secondary

#### TC-EMPSKL-063 — TM overrides one employee's classification while that same employee has an unrelated opposite-category conflict in the same batch — each employee's override/conflict is evaluated independently

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: override attempt with independent opposite-category conflict in same batch |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. In one Save action, attempt to override Employee X's self-classified skill AND separately assign Employee X the same skill in the opposite category via a different row
2. Save

**Expected**

Each condition (override vs. conflict) for Employee X is evaluated independently — the override confirmation and the conflict block do not interfere with each other's outcome

#### TC-EMPSKL-064 — Admin deletes a skill with 0 Primary holders but 12 Secondary holders in-department — treated as assigned (combined = 12), delete/unlink blocked with exact breakdown

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative |
| **Requirement Ref** | edgeCase: 0 Primary / 12 Secondary blocked delete with breakdown |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with 0 Primary / 12 Secondary holders in-department
2. Attempt Delete/Unlink

**Expected**

'Cannot Unlink Skill' error appears with message including 'Primary: 0, Secondary: 12'

**Test Data**

- `skillName`: Jenkins
- `primaryCount`: 0
- `secondaryCount`: 12

#### TC-EMPSKL-065 — TM/EM views the Skill Detail Panel for a skill with employees only in one category (zero Primary, all Secondary) — Primary shows 'No employees in this category'

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: zero-Primary detail panel empty state; AC: sub-section empty state when count zero |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with 0 Primary and 9 Secondary holders in-department

**Expected**

Primary Holders sub-section shows 'No employees in this category.'; Secondary Holders sub-section lists all 9 holders normally

**Test Data**

- `skillName`: Ansible
- `primaryCount`: 0
- `secondaryCount`: 9

#### TC-EMPSKL-066 — Fuzzy search matching multiple skills shows an accurate department-link count per matched skill

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: fuzzy search multiple matches, per-match count accuracy |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Type a search term matching multiple existing skills (e.g. 'Java')

**Expected**

Each matched skill shows its own accurate department-link count, independently of the others

**Test Data**

- `searchTerm`: Java
- `expectedMatches`: Java (5 departments), JavaScript (8 departments)

#### TC-EMPSKL-067 — Clicking Save on the Add New Skill drawer twice in rapid succession creates exactly one record, not duplicates

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | businessRules: idempotency — double-Save must not create duplicates; Regression: data-integrity (double-submit); Regression: reliability (rapid clicks) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill the Add New Skill drawer completely
2. Click Save twice in rapid succession (double-click or two fast clicks)

**Expected**

Exactly one skill-department link and one set of employee-skill assignments are created — no duplicates

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Also satisfies Regression: data-integrity (double-submit) and Regression: reliability (multiple rapid clicks) — merged, counted once.

#### TC-EMPSKL-068 — Selected department has zero skills — Skills Listing shows a non-blank empty-state (boundary: zero-skills dataset)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | edgeCase: selected department has zero skills; unclear #1 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); department seeded with zero skills

**Steps**

1. Select a department with zero skills

**Expected**

A non-blank empty-state message renders (exact copy unconfirmed, see unclear #1)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL/PARTIAL — exact copy unconfirmed (unclear #1); assert non-blank state only.

#### TC-EMPSKL-069 — Logo URL field has no documented max length or protocol restriction — boundary probe at an arbitrarily long URL

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear #5 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Enter an extremely long URL (2000+ chars) into the Logo field
2. Attempt Save

**Expected**

Behavior is unconfirmed — document actual acceptance/rejection to close the gap; do not assume a specific limit

**Test Data**

- `longUrl`: https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-repeated-to-2000-chars

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: Logo field length/protocol/image-type constraints are unconfirmed (unclear #5); this is a discovery probe, not an assertion of a specific limit.

#### TC-EMPSKL-070 — Fuzzy search debounce/minimum-character-threshold and case-sensitivity are unconfirmed — boundary probe at 1 character and mixed case

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear #6 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Type a single character into Search or Create Skill
2. Clear and type the skill name in all uppercase

**Expected**

Document actual debounce timing, minimum-character trigger, and case-sensitivity behavior — default assumption is ~300ms debounce, 1+ char minimum, case-insensitive (unconfirmed)

**Test Data**

- `singleChar`: t
- `mixedCase`: TYPESCRIPT

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: fuzzy search debounce/min-char/case-sensitivity rules are unconfirmed (unclear #6); this is a discovery probe.

#### TC-EMPSKL-071 — Assign to Employees is optional — Save succeeds with zero employees selected (minimum boundary)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC: Assign to Employees is optional |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select department and skill
2. Leave Assign to Employees empty
3. Save

**Expected**

Save succeeds; the skill is created/mapped to the department with zero employee assignments

#### TC-EMPSKL-107 — Skill with 0 combined holders in-department but used in exactly 1 other department (minimal non-zero) still shows the 'Delete/Unlink Skill' confirmation, not the dept-only variant

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: 0 combined, used elsewhere (boundary: minimal count of 1 other department) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with 0 combined holders in-department, used in exactly 1 other department
2. Attempt Delete/Unlink

**Expected**

'Delete/Unlink Skill' confirmation appears (same branch as the 3-department edge case), confirming the threshold is 'any other department', not a specific count

**Test Data**

- `skillName`: Perl
- `inDeptCombinedCount`: 0
- `usedInOtherDepartments`: 1

#### TC-EMPSKL-108 — Skill with exactly 1 Primary holder (minimum non-zero) in-department blocks delete/unlink, identically to a higher count

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC: delete/unlink eligibility — combined count ≥1 boundary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with exactly 1 Primary holder and 0 Secondary holders in-department
2. Attempt Delete/Unlink

**Expected**

'Cannot Unlink Skill' error appears with 'Primary: 1, Secondary: 0' — the minimum non-zero combined count (1) is sufficient to block

**Test Data**

- `skillName`: Scala
- `primaryCount`: 1
- `secondaryCount`: 0

#### TC-EMPSKL-109 — A manager managing exactly 2 departments (minimum multi-department threshold) triggers the mandatory department-selection gate

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC: multi-department manager gate — minimum threshold boundary |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a TM/EM account confirmed to manage exactly 2 departments; testUserPage's managed-department count is unconfirmed

**Steps**

1. Log in as a TM/EM managing exactly 2 departments
2. Attempt a skill action without selecting a department first

**Expected**

The mandatory department-selection gate is triggered at the minimum multi-department threshold (2), not only at higher counts

**Automation Hint**

PARTIAL — requires a confirmed 2-department TM/EM account; mark manual until provisioned.

#### TC-EMPSKL-110 — Add New Skill saves successfully with zero tags, since Tags is not a mandatory field

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC: tags may be added/managed at any time (optional at creation) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select department and skill
2. Leave the Tags field empty
3. Save

**Expected**

Save succeeds; the skill has zero tags, consistent with tags being optional/manageable later

#### TC-EMPSKL-111 — Assigning a skill to a large batch of employees (20) in one Save persists all 20 with their respective toggle states, none silently dropped

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | AC: one Save action may assign a skill to multiple employees (upper-batch boundary) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); department seeded with 20+ employees

**Steps**

1. Add 20 employees to Assign to Employees
2. Set 8 to Primary, leave 12 untouched (defaulting Secondary)
3. Save

**Expected**

All 20 assignments persist; exactly 8 are Primary and 12 are Secondary — no employee is silently dropped from the batch

**Test Data**

- `employeeCount`: 20
- `primaryCount`: 8
- `secondaryCount`: 12

#### TC-EMPSKL-112 — Skill Name entered as a single character is accepted or rejected consistently (minimum-length boundary probe)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation (below min length) — no documented minimum, probe only |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select a department
2. Enter a single character as the new skill name via '+ Create new Skill'
3. Attempt Save

**Expected**

Behavior is consistent (either accepted as a valid minimal name or rejected with a clear minimum-length error) — no documented minimum length exists in the source, so this is a discovery probe

**Test Data**

- `skillNameInput`: X

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: no minimum skill-name length is documented in the source; treat as a discovery probe rather than an assertion of a specific limit.

#### TC-EMPSKL-113 — Two employees in the same Save action are both left completely untouched — both default to Secondary (zero explicit Primary selections)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: untouched toggles default Secondary — zero-Primary boundary variant |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add Employee F and Employee G to Assign to Employees
2. Do not interact with either toggle
3. Save

**Expected**

Both employees are saved with Secondary classification — the zero-explicit-Primary boundary case behaves identically to the mixed case

**Test Data**

- `employees`: Employee F, Employee G

### Functional (41)

#### TC-EMPSKL-006 — Skills Listing displays all skills scoped to the currently selected department only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Skills Listing operates within a single department context |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Skills Management and select Department A
2. Note the skill list shown
3. Switch context to Department B

**Expected**

Department A's view shows only Department A's skills; switching to Department B shows a distinct, differently-scoped skill list — no cross-department bleed

**Test Data**

- `departmentA`: Engineering
- `departmentB`: QA

#### TC-EMPSKL-007 — TM/EM/Admin can access and successfully use the 'Add Skills' control

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Only TM, EM, and Admin can add new skills (positive access) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); repeat as punit.patel@simformsolutions.com (testUserPage fixture) for TM coverage

**Steps**

1. Navigate to Skills Management
2. Click 'Add Skills'

**Expected**

The 'Add New Skill' drawer opens for both Admin and TM roles; the button is visible and enabled

**Automation Hint**

PARTIAL — EM-role coverage requires a dedicated EM test account (none provisioned); verified for Admin and TM/testUserPage only.

#### TC-EMPSKL-008 — Selecting a department from the mandatory checklist clears the gate and enables skill-related actions

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Multi-department manager must select a department before any skill action |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a TM/EM account confirmed to manage 2+ departments — testUserPage's managed-department count is unconfirmed (see preconditions in source)

**Steps**

1. Log in as a TM/EM managing 2+ departments
2. Attempt a skill action without selecting a department (blocked)
3. Select one department checkbox
4. Retry the skill action

**Expected**

After selecting a department, the previously-blocked skill action proceeds normally

**Automation Hint**

PARTIAL — requires a confirmed multi-department TM/EM account; mark manual until provisioned.

#### TC-EMPSKL-009 — No-skill-selected empty state shows the exact unchanged copy

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: no-skill-selected empty state (unchanged) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Skills Management for a department
2. Do not select any skill from the left panel

**Expected**

Right panel shows 'No skill selected. Select a skill from the left panel to view employees.'

#### TC-EMPSKL-010 — 'Employee Strength: X out of N' header remains unaffected by skill classification changes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employee Strength header unrelated to skill classification |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the 'Employee Strength: X out of N' header value
2. Perform a skill classification change (e.g. an override or new assignment)
3. Re-check the header

**Expected**

Header value is unchanged by the skill classification operation

#### TC-EMPSKL-011 — 'Add Skills' opens a drawer titled 'Add New Skill' with subtitle 'Map a skill to one or more departments'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add New Skill drawer title/subtitle |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click 'Add Skills'

**Expected**

A right-side drawer opens titled 'Add New Skill' with subtitle 'Map a skill to one or more departments'

#### TC-EMPSKL-012 — All Add New Skill drawer fields remain disabled until a department is selected, and enable immediately once one is

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: fields disabled until department selected / enabled after |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Redesign 6.8.1 (SI4-T1672): only the skill picker and Save are gated on Department; logo/tags/employees are still interactable. Superseded by TC-EMPSKL-171 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Add New Skill drawer
2. Observe Search or Create Skill and Assign to Employees fields are disabled
3. Select at least one department checkbox

**Expected**

All other fields become enabled immediately after a department is selected

#### TC-EMPSKL-013 — Department checkbox list for a TM/EM shows only departments they manage, not the full department list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: department checklist scoped to managed departments |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as TM
2. Open the Add New Skill drawer
3. Observe the Select Department checkbox list

**Expected**

Only departments managed by the logged-in TM/EM appear in the checklist, not the org's full department list

**Automation Hint**

PARTIAL — requires confirming testUserPage's managed-department set against the full department list before asserting an exact filtered set.

#### TC-EMPSKL-014 — Fuzzy search in Search or Create Skill shows the number of departments each matched skill is already linked to

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: fuzzy search shows department-link count per match |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Add New Skill drawer, select a department
2. Type a partial skill name into Search or Create Skill

**Expected**

Matching skills appear with the number of departments each is already linked to shown alongside

**Test Data**

- `searchTerm`: Type
- `expectedMatch`: TypeScript (linked to 3 departments)

#### TC-EMPSKL-015 — Assign to Employees multiselect is scoped by role: Admin sees all employees, TM/EM see only their managed-department employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Assign to Employees scoped by role (Admin/TM/EM) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); repeat as punit.patel@simformsolutions.com (testUserPage fixture) for TM scope

**Steps**

1. Open Add New Skill drawer as Admin, open Assign to Employees
2. Repeat as TM, open Assign to Employees

**Expected**

Admin's employee list includes employees from any department; TM's employee list is restricted to their managed department(s) only

#### TC-EMPSKL-016 — Primary/Secondary toggle renders next to each employee chip for Admin, TM, and EM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: toggle visible to Admin, TM, and EM |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select a department and a skill
2. Add an employee to Assign to Employees

**Expected**

A Primary/Secondary toggle is displayed next to the employee's chip

#### TC-EMPSKL-017 — One Save action can assign a skill to multiple employees, each with an independently-set Primary or Secondary classification

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: toggle set independently per employee, one Save with mixed classifications |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add Employee A and Employee B in Assign to Employees
2. Set Employee A's toggle to Primary and Employee B's toggle to Secondary
3. Click Save

**Expected**

Both classifications persist exactly as set in the single Save action

**Test Data**

- `employees`: name: Employee A; toggle: Primary, name: Employee B; toggle: Secondary

#### TC-EMPSKL-018 — RM assigns a skill to a direct report; no toggle is shown and the result is always saved as Secondary

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | AC: RM-initiated assignments default to Secondary automatically; testScenario: 'RM-initiated assignment always defaults to Secondary, no toggle shown' (dup, merged); edgeCase: RM assigns to direct report (dup, merged) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8); no automatable fixture currently maps to RM

**Steps**

1. Log in as RM
2. Assign a skill to a direct report (no toggle available)
3. Save

**Expected**

No Primary/Secondary toggle renders for RM; the saved classification is Secondary

**Automation Hint**

PARTIAL — requires a dedicated RM test account with known direct-report seed data; currently manual-only.

#### TC-EMPSKL-019 — Clicking Save persists skill, department, logo, tags, and all employee assignments/classifications; drawer closes and Skills Overview updates without reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Save persists all fields and updates Overview without reload |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill the Add New Skill drawer completely (department, skill, logo, tags, employee assignments)
2. Click Save

**Expected**

Drawer closes; Skills Overview page updates immediately without a page reload, reflecting every field entered

**Test Data**

- `skillName`: GraphQL
- `logoUrl`: https://example.com/logo.png
- `tags`: backend

#### TC-EMPSKL-020 — Clicking Cancel on the Add New Skill drawer discards all changes and closes the drawer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Cancel discards all drawer changes |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, fill several fields
2. Click Cancel

**Expected**

Drawer closes; no skill, department link, or employee assignment is persisted

#### TC-EMPSKL-021 — A brand-new skill created via '+ Create new Skill' and assigned in the same flow behaves identically to assigning an existing skill

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | testScenario: 'New skill created and assigned in the same flow behaves identically to an existing skill'; AC: classification logic identical new vs existing (dup, merged) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select department
2. Search 'Rust' (no match), click '+ Create new Skill'
3. Assign employees with mixed Primary/Secondary toggles
4. Save

**Expected**

Classification defaults/toggles behave identically to assigning a pre-existing skill

**Test Data**

- `newSkillName`: Rust

#### TC-EMPSKL-022 — Employee adds a skill to their own profile and chooses the classification (Primary or Secondary) at the time of self-assignment

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees may add skills to own profile and set classification at self-assignment (Section 10.3) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Open own Employee Profile > Skills panel
2. Add a new skill and select Primary classification
3. Save

**Expected**

Skill is added to own profile with the chosen classification (Primary)

**Test Data**

- `skillName`: Kubernetes
- `classification`: Primary

#### TC-EMPSKL-023 — Employee changes the classification of their own already-assigned skill (Primary <-> Secondary) at any time

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employee may reclassify own already-assigned skill at any time |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture); already holds a self-assigned skill

**Steps**

1. Open own Employee Profile > Skills panel
2. Toggle an existing skill's classification from Primary to Secondary (or vice versa)
3. Save

**Expected**

Classification is updated immediately on the profile

#### TC-EMPSKL-024 — Tags can be added to/managed on a skill at any time after creation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: tags remain editable after skill creation (positive) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); skill already created

**Steps**

1. Open an existing skill's detail panel
2. Add a new tag
3. Save

**Expected**

Tag persists and displays on the Skill Detail Panel; Skill Name, Department, and Logo remain untouched

**Test Data**

- `newTag`: cloud-native

#### TC-EMPSKL-025 — TM/EM/Admin can access and use the Delete/Unlink Skill control

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Skill deletion/unlink access available to TM, EM, Admin (positive) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill in the Skills Listing
2. Locate the Delete/Unlink control

**Expected**

Delete/Unlink control is visible and enabled for Admin (and TM/EM within managed departments)

#### TC-EMPSKL-026 — Delete/unlink is enabled and shows 'Delete/Unlink Skill' confirmation when the skill has 0 combined holders in-department but is used in other departments

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | testScenario: 'Delete/unlink enabled when skill unused in-department but used elsewhere' |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with 0 combined holders in the current department but used in 3 other departments
2. Click Delete/Unlink

**Expected**

'Delete/Unlink Skill' confirmation pop-up appears (not the dept-only unlink variant)

**Test Data**

- `skillName`: COBOL
- `inDeptCombinedCount`: 0
- `usedInOtherDepartments`: 3

#### TC-EMPSKL-027 — Delete/unlink is enabled and shows 'Unlink Skill from Department' confirmation when the skill is dept-only with 0 combined holders

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary, @needs-verification |
| **Requirement Ref** | AC: delete/unlink eligibility branch 2 (dept-only, 0 combined); unclear #9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a dept-only skill with 0 combined holders in the current department
2. Click Delete/Unlink

**Expected**

'Unlink Skill from Department' confirmation pop-up appears

**Test Data**

- `skillName`: LegacyToolX
- `inDeptCombinedCount`: 0
- `usedInOtherDepartments`: 0

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: Case 2's exact existing message/flow is marked 'unchanged from existing flow' but not included in this addendum; verify actual wording before asserting exact text (unclear #9).

#### TC-EMPSKL-028 — Fuzzy search with zero matches shows 'No match found' and a '+ Create new Skill' option

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | testScenario: 'Fuzzy search shows department-link count and No match found fallback'; edgeCase: fuzzy search zero matches (dup, merged) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select a department
2. Type a search term with no matching skill

**Expected**

'No match found' text appears with a '+ Create new Skill' option

**Test Data**

- `searchTerm`: Zzxxqqnonexistent

#### TC-EMPSKL-029 — Admin has full cross-department access: add, classify, and delete/unlink skills in any department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | roleMatrix: Admin dataScope = all departments |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform an add-skill action in Department A
2. Perform a classify action in Department B
3. Perform a delete/unlink in Department C

**Expected**

All three actions succeed regardless of department, consistent with Admin's 'all departments' dataScope

#### TC-EMPSKL-030 — Employee profile self-assignment UI renders a single classification control (not the multi-employee chip/toggle flow used in Skills Management)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear #7 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Open own Employee Profile > Skills panel
2. Add a new skill

**Expected**

A single classification control is shown (no multi-employee chip list, since self-assignment applies to one profile)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: Section 10.3 (Employee Profile Skills sub-section) UI fields/validation were not included in this addendum; verify actual self-assign drawer/inline-form structure before automating (unclear #7).

#### TC-EMPSKL-031 — Override confirmation dialog appears on every override attempt, not only the first attempt for a given employee-skill pair

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear #10 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee already overridden once for a skill

**Steps**

1. Override an employee's self-classified skill once (confirm dialog)
2. Attempt to override the same employee's same skill a second time

**Expected**

The confirmation dialog appears again on the second attempt (not suppressed after the first)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: whether 'one-time' means every attempt or only the first attempt per employee-skill pair; verify actual behavior before asserting repeat-attempt dialog presence (unclear #10).

#### TC-EMPSKL-032 — Employee (self) dataScope is limited to their own profile — no ability to assign/classify skills for other employees or add catalog-level skills

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | roleMatrix: Employee (Self) dataScope = own profile only |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture); using its Employee-self view (own profile)

**Steps**

1. Open own Employee Profile > Skills panel
2. Observe available controls

**Expected**

Only self-management controls are present (add own skill, reclassify own skill); no control to assign a skill to another employee or add a new skill to the Skills Management catalog

#### TC-EMPSKL-033 — EM has the same add/classify/assign/override/delete permissions as TM within their managed departments

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | roleMatrix: Engineering Manager (EM) can[] (parity with TM) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated EM test account (not yet provisioned — see unclear #8); no automatable fixture currently maps to EM

**Steps**

1. Log in as EM
2. Add a skill, classify an employee, and delete/unlink a skill within a managed department

**Expected**

All three actions succeed within managed departments, mirroring TM's permitted actions

**Automation Hint**

PARTIAL — requires a dedicated EM test account; currently manual-only.

#### TC-EMPSKL-034 — Creating a skill via '+ Create new Skill' persists a new, reusable skill entry findable in future searches

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Search or Create Skill mandatory field creation flow |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Search 'WebAssembly' (no match), click '+ Create new Skill'
2. Complete and Save the drawer
3. Open Add New Skill drawer again and search 'WebAssembly'

**Expected**

The newly-created skill is now found as an existing match with an accurate department-link count

**Test Data**

- `newSkillName`: WebAssembly

#### TC-EMPSKL-035 — Skill Logo (optional URL) is saved and displayed correctly in the Skills Listing and Detail Panel when provided

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Logo (Optional, URL) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add a new skill with a valid Logo URL
2. Save
3. View the skill in the Skills Listing and Detail Panel

**Expected**

The logo image renders in both the listing row and the detail panel

**Test Data**

- `logoUrl`: https://example.com/assets/logo.png

#### TC-EMPSKL-036 — Assign to Employees multiselect search narrows the employee list as the user types a name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Assign to Employees is a multiselect with search |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Assign to Employees
2. Type a partial employee name

**Expected**

Employee list narrows in real time (or on submit) to matching names only

**Test Data**

- `searchTerm`: Jane

#### TC-EMPSKL-037 — Selected employees render as removable chips in Assign to Employees; removing a chip before Save excludes that employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: selected employees appear as chips |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add two employees in Assign to Employees
2. Remove one chip
3. Save

**Expected**

Only the remaining employee is saved with the skill assignment

#### TC-EMPSKL-038 — TM/EM successfully assigns/classifies a skill for an employee within their own managed department (in-scope success)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | roleMatrix: TM dataScope = managed department(s) (in-scope success) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as TM
2. Assign/classify a skill for an employee within a managed department
3. Save

**Expected**

The action succeeds; the classification is persisted and reflected in the Skill Detail Panel

#### TC-EMPSKL-039 — RM can view the Skill Detail Panel, consistent with their view-only/direct-reports data scope

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | roleMatrix: RM can[] view Skill Detail Panel |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8)

**Steps**

1. Log in as RM
2. Select a skill in the Skills Listing

**Expected**

Skill Detail Panel opens and is viewable for RM

**Automation Hint**

PARTIAL — requires a dedicated RM test account; currently manual-only.

#### TC-EMPSKL-040 — A skill assigned to employees across multiple departments shows accurate combined counts independently scoped per department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: combined count is department-scoped |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select 'TypeScript' in Department A, note the combined count
2. Switch to Department B, select 'TypeScript', note the combined count

**Expected**

Each department shows its own independent combined count; the two counts do not bleed into each other

**Test Data**

- `skillName`: TypeScript
- `deptA_count`: 247
- `deptB_count`: 12

#### TC-EMPSKL-041 — Selected department has zero skills — the source's default empty-state assumption is testable at least as a non-blank state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear #1 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); department seeded with zero skills

**Steps**

1. Select a department with zero skills mapped

**Expected**

A non-blank empty-state message is shown (default assumption: 'No skills found for this department.')

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL/PARTIAL — exact copy unconfirmed (unclear #1); assert non-blank empty-state presence, not exact text, until confirmed.

#### TC-EMPSKL-102 — Skill Detail Panel remains scoped to the selected department even when the same skill is used in multiple departments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Skill Detail Panel scoped to selected department |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select 'TypeScript' from Department A's Skills Listing
2. Note the Primary/Secondary holders shown
3. Switch to Department B and select 'TypeScript' again

**Expected**

Department A's panel never shows Department B's holders, and vice versa — the detail panel is strictly department-scoped

**Test Data**

- `skillName`: TypeScript

#### TC-EMPSKL-103 — Assign to Employees shows the correct scoped employee count for the current role+department before any search term is typed

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Assign to Employees scoped multiselect (baseline state) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select a department
2. Open Assign to Employees without typing a search term

**Expected**

The full role-scoped employee list for that department is available (unfiltered) before any search input

#### TC-EMPSKL-104 — A skill saves successfully with only the mandatory fields provided (department + skill name), no logo, tags, or employee assignments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: only Select Department and Search or Create Skill are mandatory |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Redesign 6.8.1 (SI4-T1672): Logo URL or icon file is now mandatory ('Provide logo URL or upload icon file.') plus a 'Verify before creating' step. See TC-EMPSKL-156/172 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer
2. Select a department and search/create a skill
3. Leave Logo, Tags, and Assign to Employees empty
4. Save

**Expected**

The skill is created and mapped to the department successfully with no logo, tags, or employee assignments

**Test Data**

- `skillName`: Terraform

#### TC-EMPSKL-105 — A TM/EM managing exactly one department does not encounter the multi-department selection gate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: department selection gate applies only to multi-department managers |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a TM/EM account confirmed to manage exactly 1 department; testUserPage's managed-department count is unconfirmed

**Steps**

1. Log in as a TM/EM managing exactly one department
2. Open the Add New Skill drawer

**Expected**

The single managed department is pre-selected or the gate is otherwise a non-issue — no ambiguous multi-department choice is presented

**Automation Hint**

PARTIAL — requires a confirmed single-department TM/EM account; mark manual until provisioned.

#### TC-EMPSKL-106 — Overriding a classification updates both the Skill Detail Panel and the employee's profile in the same session without a manual refresh of either surface

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: override change reflected immediately on both surfaces |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Override an employee's self-classified skill and confirm
2. Without refreshing, check the Skill Detail Panel
3. Open the employee's profile in the same session without refreshing

**Expected**

Both surfaces reflect the updated classification immediately, without either requiring a manual page reload

### Integration (6)

#### TC-EMPSKL-096 — Integration — Skills self-assignment/reclassification from the Employee Profile stays in sync with the Skills Management view for the same employee-skill link

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: Employee Profile / Employee Details — integrationNote |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture) for self-assignment; ceo@simformsolutions.com (primaryPage fixture) to verify in Skills Management

**Steps**

1. As Employee, self-assign a skill as Primary from own profile
2. As Admin, navigate to Skills Management for the employee's department
3. Select the same skill and view the Detail Panel

**Expected**

The employee appears under Primary Holders in Skills Management, consistent with the self-assignment made on the profile

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and, where possible, direct API response.

#### TC-EMPSKL-097 — Integration — department selection/scoping in Skills depends on accurate department-to-manager and skill-to-department mappings from Department Settings

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: Department Settings — integrationNote |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); requires a manager confirmed to manage 2+ departments in Department Settings

**Steps**

1. In Department Settings, confirm a manager's assigned department(s)
2. In Skills Management as that manager, verify the department checklist matches exactly

**Expected**

The department checklist shown in Skills Management exactly matches the manager's assigned departments in Department Settings

**Automation Hint**

PARTIAL — requires a confirmed multi-department manager account; mark manual until available.

#### TC-EMPSKL-098 — Integration — TM/EM/RM/Admin role definitions and managed-department assignments from Admin/Roles & Permissions correctly gate Skills actions

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: Admin / Roles & Permissions — integrationNote |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); EM/RM role verification requires dedicated accounts (see unclear #8)

**Steps**

1. In Admin > Roles & Permissions, confirm a user's assigned role and managed departments
2. In Skills Management, verify that user's available actions match exactly what their role/department assignment permits

**Expected**

Skills actions available to the user exactly match their role definition and managed-department assignment from Admin/Roles & Permissions

**Automation Hint**

PARTIAL — full role matrix verification (EM/RM) requires dedicated accounts; Admin/TM portion is automatable now.

#### TC-EMPSKL-099 — Employee counts reconcile across surfaces: Skills Listing combined count = Primary count + Secondary count on the Detail Panel = the API response

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional, @needs-verification |
| **Requirement Ref** | businessRules: api-parity — cross-surface count reconciliation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read the combined count from the Skills Listing for a known skill
2. Read the Primary and Secondary counts from the Skill Detail Panel for the same skill
3. Call the corresponding API endpoint for the same skill/department

**Expected**

Listing combined count = Primary + Secondary from the detail panel = the value in the API response — all three reconcile exactly

**Test Data**

- `skillName`: TypeScript
- `listingCombinedCount`: 247
- `primaryCount`: 180
- `secondaryCount`: 67

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. PARTIAL — requires the actual API endpoint (see unclear #4).

#### TC-EMPSKL-100 — Data written via the Add New Skill drawer or profile self-assignment is retrievable via the API with identical values

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional, @needs-verification |
| **Requirement Ref** | businessRules: api-parity — write-then-verify via API |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); confirmed API endpoint required

**Steps**

1. Save a new skill via the Add New Skill drawer (name, department, logo, tags, per-employee classification)
2. Call the corresponding API GET endpoint for the same skill

**Expected**

API response returns identical values for skill name, department, logo, tags, and per-employee classification

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. PARTIAL — requires the actual API endpoint; no endpoint is confirmed anywhere in the source (see unclear #4). Currently manual-only.

#### TC-EMPSKL-101 — No API endpoints are confirmed anywhere in the source for create/assign/override/delete-unlink — all api-parity assertions above are blocked pending confirmation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | unclear #4 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — documentation/tracking case, not an executable UI flow

**Steps**

1. Request the actual method+path for: create skill, assign/classify employee-skill link, override classification, delete/unlink skill

**Expected**

Once confirmed, update all api-parity/regression cases in this suite that currently carry a PARTIAL/manual API-verification note

**Test Data**

- `inferredGuesses`: POST /api/skills (create), POST /api/skills/{skillId}/assignments (assign/classify), PATCH /api/skills/{skillId}/assignments/{employeeId} (override), DELETE /api/departments/{deptId}/skills/{skillId} (delete/unlink)

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: no API endpoints are stated anywhere in the source (unclear #4, blocking); inferredGuess values are recorded but must not be treated as confirmed.

### Negative (19)

#### TC-EMPSKL-042 — Primary/Secondary toggle never renders for RM (not merely disabled)

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenarios: RM attempts to use/see the Primary/Secondary toggle |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8)

**Steps**

1. Log in as RM
2. Open Assign to Employees and add a direct report

**Expected**

No Primary/Secondary toggle element exists in the DOM next to the chip (not just hidden via CSS)

**Automation Hint**

PARTIAL — requires a dedicated RM test account; currently manual-only.

#### TC-EMPSKL-043 — RM has no ability to reach the 'Add Skills' button/drawer

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security, @needs-verification |
| **Requirement Ref** | negativeScenarios: RM attempts to reach the 'Add Skills' button/drawer; testScenario: 'RM cannot add a new skill' (dup, merged); unclear #2 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8)

**Steps**

1. Log in as RM
2. Navigate to Skills Management

**Expected**

'Add Skills' control is not available/usable for RM

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — requires a dedicated RM test account; currently manual-only. MANUAL — requirement unclear: whether the control is hidden entirely or shown disabled (unclear #2); assert absence from DOM per default assumption, but verify before treating a 'disabled but visible' state as a failure.

#### TC-EMPSKL-044 — RM has no delete/unlink control available under any circumstance

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security, @needs-verification |
| **Requirement Ref** | negativeScenarios: RM attempts to delete/unlink a skill; unclear #3 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8)

**Steps**

1. Log in as RM
2. Select a skill in the Skills Listing

**Expected**

No delete/unlink control is available to RM

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — requires a dedicated RM test account; currently manual-only. MANUAL — requirement unclear: whether the control is hidden entirely or shown disabled (unclear #3); verify before treating a 'disabled but visible' state as a failure.

#### TC-EMPSKL-045 — TM/EM/Admin cannot edit Skill Name, Department, or Logo after creation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | negativeScenarios: attempt to edit Skill Name/Department/Logo after creation; testScenario: 'Skill Name/Department/Logo locked after creation' (dup, merged); AC: post-creation lock (dup, merged) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); skill already created

**Steps**

1. Open an existing skill's detail panel
2. Attempt to edit Skill Name, Department, and Logo

**Expected**

All three fields are locked/read-only; edits are rejected or the controls are unavailable

#### TC-EMPSKL-046 — All Add New Skill drawer fields are blocked from interaction before a department is selected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenarios: interact with drawer fields before department selection; validationRules: Select Department mandatory |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Redesign 6.8.1 (SI4-T1672): department gate now exists for skill picker + Save only. See TC-EMPSKL-171 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer
2. Attempt to interact with Search or Create Skill / Assign to Employees before selecting a department

**Expected**

All fields remain disabled/unresponsive until at least one department checkbox is selected

#### TC-EMPSKL-047 — Save is blocked when Search or Create Skill is left blank

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenarios: Save with Search or Create Skill left blank; validationRules: Search or Create Skill mandatory |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select a department
2. Leave Search or Create Skill blank
3. Attempt Save

**Expected**

Save is blocked; an inline error indicates the field is mandatory

#### TC-EMPSKL-048 — Employee attempts to self-assign the same skill in the same category a second time — blocked as duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary, @needs-verification |
| **Requirement Ref** | negativeScenarios: self-assign same skill same category a second time |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture); already holds skill 'Docker' as Secondary

**Steps**

1. Open own Employee Profile > Skills panel
2. Attempt to add 'Docker' again as Secondary (same category already held)

**Expected**

Action is blocked as a duplicate, consistent with the one-category-per-employee rule

**Test Data**

- `skillName`: Docker
- `existingClassification`: Secondary

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: exact message for a same-category duplicate attempt is unconfirmed — parity with the opposite-category message ('This skill is already added as Secondary.') is assumed but not verified (unclear #10 note on scenario 7 parity); verify exact copy before asserting exact text.

#### TC-EMPSKL-049 — Per-employee conflict on Save blocks only the conflicting employee; other employees in the same batch persist normally

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | testScenario: 'Per-employee conflict on save blocks only the conflicting employee'; AC: per-employee conflict blocking (dup, merged); validationRules: per-employee classification conflict |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); one target employee already holds the skill in the opposite category

**Steps**

1. Add Employee C (already holds skill as Primary) and Employee D to Assign to Employees
2. Set Employee C's toggle to Secondary, Employee D's toggle to Primary
3. Save

**Expected**

Employee C shows inline '[Employee C] already has this skill as Primary.' and is not saved; Employee D saves successfully as Primary

**Test Data**

- `conflictingEmployee`: Employee C (already Primary)
- `otherEmployee`: Employee D (new)

#### TC-EMPSKL-050 — Employee is blocked from adding a skill in the opposite category they already hold, with the exact inline message

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | testScenario: 'Employee blocked from adding a skill in the opposite category they already hold'; edgeCase: opposite-category block (dup, merged); validationRules: self-assignment classification conflict |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture); already holds a skill as Secondary

**Steps**

1. Open own Employee Profile > Skills panel
2. Attempt to add the same skill as Primary

**Expected**

Inline message 'This skill is already added as Secondary.' is shown; no duplicate entry is created

**Test Data**

- `skillName`: Docker
- `existingClassification`: Secondary
- `attemptedClassification`: Primary

#### TC-EMPSKL-051 — Delete/unlink is blocked (disabled, Cannot Unlink Skill error) when the skill has any combined holders (≥1) in-department

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | testScenario: 'Delete/unlink blocked when skill is assigned in-department (combined count)' |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with ≥1 combined holder in-department
2. Attempt Delete/Unlink

**Expected**

Delete/Unlink control is disabled; 'Cannot Unlink Skill' error pop-up appears with a 'Primary: N, Secondary: N' breakdown

**Test Data**

- `skillName`: TypeScript
- `primaryCount`: 180
- `secondaryCount`: 67

#### TC-EMPSKL-052 — Logo URL field rejects an invalid/malformed URL format

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary, @needs-verification |
| **Requirement Ref** | unclear #5; Regression: validation (invalid format) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer
2. Enter 'not-a-url' in the Logo field
3. Attempt Save

**Expected**

Standard URL format validation rejects the value with an inline error

**Test Data**

- `invalidLogoUrl`: not-a-url

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: Logo field's exact length/protocol/image-type constraints are unconfirmed (unclear #5); verify actual validation before asserting a specific error message.

#### TC-EMPSKL-053 — Skill Name entered as whitespace-only is treated as empty and rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation (empty/whitespace-only) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add New Skill drawer, select a department
2. Enter only spaces into Search or Create Skill
3. Attempt Save

**Expected**

Whitespace-only input is treated as empty; Save is rejected consistent with the mandatory-field rule

**Test Data**

#### TC-EMPSKL-054 — Creating a skill with a name that already exists in the same department is prevented as a duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: validation (duplicate data) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); 'TypeScript' already exists in the department

**Steps**

1. Open Add New Skill drawer, select the same department
2. Search or attempt to create 'TypeScript' again as a new skill for the same department

**Expected**

The existing skill is matched (not duplicated); no second identical skill-department link is created

**Test Data**

- `skillName`: TypeScript

#### TC-EMPSKL-055 — Refreshing the browser mid-Add-New-Skill-drawer-submission does not create partial or duplicate records

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (browser refresh mid-flow) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill the Add New Skill drawer, click Save
2. Immediately refresh the browser (F5) before confirming completion
3. Re-check the Skills Listing

**Expected**

Either the record was fully saved once, or not at all — no partial/duplicate skill-department link or employee assignment exists

#### TC-EMPSKL-056 — A slow/timed-out Save shows a loading indicator and the UI does not freeze

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (API timeout / slow network) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Throttle network to simulate a slow API response
2. Click Save on the Add New Skill drawer

**Expected**

A loading indicator is shown while the request is in flight; the UI remains responsive, not frozen

**Automation Hint**

MANUAL/PARTIAL — requires network throttling harness not currently wired into the suite; verify manually or add route interception before automating.

#### TC-EMPSKL-057 — Session expiry (HTTP 401) during a skill Save returns the user to login without data loss

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 401) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Invalidate/expire the session token
2. Attempt to Save the Add New Skill drawer

**Expected**

User is redirected to the login page; no partial skill record is created; re-login allows retrying the same action

#### TC-EMPSKL-058 — Navigating to a since-deleted/unlinked skill via a stale link/ID shows a not-found state, not a blank screen

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 404) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); a skill has just been deleted/unlinked

**Steps**

1. Delete/unlink a skill
2. Navigate directly to that skill's stale detail URL/ID

**Expected**

A not-found state/message is shown, not a blank screen or raw error

#### TC-EMPSKL-059 — A server error (HTTP 500) during Save shows a user-friendly error toast, not a raw stack trace

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 500); Regression: ui-state (error toast) (dup, merged) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate/mock a 500 response for the skill-save API call
2. Click Save

**Expected**

A user-friendly error toast is shown; no raw stack trace or technical error is exposed

#### TC-EMPSKL-060 — A service-unavailable response (HTTP 503) during Save shows a maintenance/retry message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 503) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate/mock a 503 response for the skill-save API call
2. Click Save

**Expected**

A maintenance/retry message is shown, not a blank or broken UI

**Automation Hint**

MANUAL/PARTIAL — requires API mocking harness for 503 simulation; verify manually until wired in.

### Regression (14)

#### TC-EMPSKL-082 — Regression — Employee Profile / Employee Details (Section 10.3): existing Employee Details functionality is unaffected by Skills classification changes made elsewhere

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Employee Profile / Employee Details (regression risk: high) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform a skill classification/override in Skills Management for an employee
2. Navigate to that employee's Employee Details/Profile page
3. Verify unrelated fields (name, tabs, other sections) render correctly

**Expected**

Employee Details functionality outside the Skills sub-section is unaffected; only the Skills panel reflects the change

#### TC-EMPSKL-083 — Regression — Department Settings: existing department CRUD/employee-count functionality is unaffected by Skills module changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Department Settings (regression risk: medium) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add/classify a skill scoped to a department
2. Navigate to Department Settings for that department
3. Verify department CRUD and employee-count displays still function correctly

**Expected**

Department Settings functionality is unaffected by Skills module writes

#### TC-EMPSKL-084 — Regression — Admin / Roles & Permissions: existing role/permission management is unaffected by Skills RBAC enforcement

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Admin / Roles & Permissions (regression risk: medium) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise Skills RBAC (attempt a forbidden action as TM)
2. Navigate to Admin > Roles & Permissions
3. Verify existing role/permission CRUD still functions correctly

**Expected**

Roles & Permissions functionality is unaffected by Skills-module RBAC checks

#### TC-EMPSKL-085 — Regression — UI-displayed combined and split counts match the API response immediately after a skill save

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (UI matches API after write) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Save a new skill assignment via the Add New Skill drawer
2. Read the combined count and Primary/Secondary split shown in the UI
3. Call the corresponding API endpoint for the same skill/department

**Expected**

UI-displayed values match the API response exactly

**Automation Hint**

PARTIAL — requires the actual API endpoint (see unclear #4); currently verifiable via UI-only reconciliation until confirmed.

#### TC-EMPSKL-086 — Regression — record count on the Skills Listing and the API 'total' field are equal after an add/delete operation

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (record count consistency) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the Skills Listing row count for a department
2. Add a new skill to that department
3. Call the API list endpoint for the same department

**Expected**

Listing row count and API 'total' field are equal after the operation

**Automation Hint**

PARTIAL — requires the actual API endpoint (see unclear #4).

#### TC-EMPSKL-087 — Regression — a newly created skill/assignment is present in the listing after a full page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (create present after refresh) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a new skill and save it
2. Refresh the browser (F5)

**Expected**

The newly created skill is still present in the Skills Listing after refresh

#### TC-EMPSKL-088 — Regression — updated classification values are correct after a full page refresh (F5); persistence also holds after navigating away and back

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (update correct after refresh); Regression: simerp-module (data persistence after F5) (dup, merged) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Override/update an employee's classification
2. Refresh the browser (F5)
3. Re-open the Skill Detail Panel

**Expected**

The updated classification is correct and persisted after the refresh

#### TC-EMPSKL-089 — Regression — a deleted/unlinked skill is absent from the active list immediately, without requiring a page refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (delete/archive absent immediately) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Delete/unlink a skill eligible for removal
2. Observe the Skills Listing immediately, without refreshing

**Expected**

The skill is absent from the active list immediately, no refresh required

#### TC-EMPSKL-090 — Regression — assigning a skill increments the relevant count by 1, unlinking/removing decrements it by 1, in both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (assignment/deallocation count); Regression: simerp-module (assignment/deallocation) (dup, merged) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the combined count for a skill
2. Assign the skill to one more employee, re-check the count
3. Remove that assignment, re-check the count

**Expected**

Count increments by exactly 1 on assignment and decrements by exactly 1 on removal, matching both UI and API

**Automation Hint**

PARTIAL — API verification requires the actual endpoint (see unclear #4).

#### TC-EMPSKL-091 — Regression — every primary action button (Add Skills, Save, Delete/Unlink) is visible to authorized roles before and after a CRUD operation

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note visibility of Add Skills/Save/Delete-Unlink before an operation
2. Perform a create/update/delete operation
3. Re-check visibility of the same buttons

**Expected**

All three buttons remain visible to authorized roles both before and after the operation

#### TC-EMPSKL-092 — Regression — Save is disabled while mandatory fields (department, skill) are empty; enabled once both are satisfied

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Add New Skill drawer
2. Observe Save is disabled with no department/skill selected
3. Select a department and a skill

**Expected**

Save becomes enabled only once both mandatory fields are satisfied

#### TC-EMPSKL-093 — Regression — a confirmation dialog appears before Delete/Unlink and Override; dismissing it cancels the operation with no change made

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (confirmation dialog) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger a Delete/Unlink action, observe the confirmation dialog, dismiss it
2. Trigger an Override action, observe the confirmation dialog, dismiss it

**Expected**

Both operations are cancelled with no change made when the confirmation is dismissed

#### TC-EMPSKL-094 — Regression — a success toast/notification appears after a successful skill Save/Delete, containing the skill name or a confirmation message

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (success toast) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Save a new skill
2. Observe the resulting notification

**Expected**

A success toast appears containing the skill name or a confirmation message

#### TC-EMPSKL-095 — Regression — a loading indicator is shown during Skills data fetch and disappears once data loads

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Skills Management and observe the initial data fetch

**Expected**

A loading indicator/skeleton is visible during fetch and disappears once the Skills Listing renders

### Security (10)

#### TC-EMPSKL-072 — RM attempts via direct API call to assign/classify a skill for an employee outside their direct-report list — rejected 403

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | securityScenarios: RM API call outside direct-report scope |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8); direct API call bypassing UI

**Steps**

1. As RM, issue a direct API call to assign/classify a skill for an employee outside the RM's direct-report list

**Expected**

Request is rejected with HTTP 403, even though the UI never exposes those employees

**Automation Hint**

PARTIAL — requires a dedicated RM test account and confirmed API endpoint (see unclear #4); currently manual-only.

#### TC-EMPSKL-073 — TM/EM attempts via direct API call to assign, classify, or delete/unlink skills scoped to a department they do not manage — rejected 403

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | securityScenarios: TM/EM API call on unmanaged department; roleMatrix: TM/EM cannot[] act outside managed departments |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture, TM); a department outside their managed set; EM coverage requires a dedicated EM account (not provisioned)

**Steps**

1. As TM, issue a direct API call to assign/classify/delete a skill in a department they do not manage

**Expected**

Request is rejected with HTTP 403

**Automation Hint**

PARTIAL — confirmed API endpoint required (see unclear #4); EM-role verification requires a dedicated EM account.

#### TC-EMPSKL-074 — RM session attempts add-skill, classify, override, or delete/unlink directly via API, bypassing the UI — all rejected 403

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | securityScenarios: RM API bypass — all actions rejected; roleMatrix: RM cannot[] (comprehensive) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8)

**Steps**

1. As RM, issue direct API calls for: add-skill, classify, override, delete/unlink

**Expected**

All four request types are rejected (403), consistent with RM's UI-level restrictions

**Automation Hint**

PARTIAL — requires a dedicated RM test account and confirmed API endpoints (see unclear #4 and #8); currently manual-only.

#### TC-EMPSKL-075 — Overriding an employee's self-classified skill without the explicit one-time confirmation (scripted bypass) must not take effect

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios: override bypass without confirmation |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); confirmed API endpoint required

**Steps**

1. Attempt to override an employee's self-classified skill via a direct API call that skips the confirmation step

**Expected**

The override does not take effect without the explicit inline confirmation having been acknowledged

**Automation Hint**

PARTIAL — confirmed API endpoint required (see unclear #4); mark manual until endpoint is provided.

#### TC-EMPSKL-076 — Skill Name, Tags, and Logo URL fields reject/sanitize XSS payloads (script/HTML injection)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios: XSS payloads in Skill Name/Tags/Logo; Regression: validation (special characters) (dup, merged) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Enter each XSS payload into Skill Name, Tags, and Logo URL fields in turn
2. Save and view the value rendered in the listing, detail panel, and employee profile

**Expected**

Input is sanitized/escaped in every surface; no script executes when rendered

**Test Data**

- `xssPayloads`: <script>alert(1)</script>, ", ', --, %, null, undefined

#### TC-EMPSKL-077 — RM cannot add a new skill — verified at both UI (control unavailable) and API (403) level

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | testScenario: 'RM cannot add a new skill'; roleMatrix: RM cannot[] add new skills |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Requires a dedicated RM test account (not yet provisioned — see unclear #8)

**Steps**

1. As RM, confirm the Add Skills control is unavailable in the UI
2. As RM, issue a direct API call to create a skill

**Expected**

UI control is unavailable AND the direct API call returns 403 — both layers enforce the restriction

**Automation Hint**

PARTIAL — requires a dedicated RM test account and confirmed API endpoint; currently manual-only.

#### TC-EMPSKL-078 — Employee (self) cannot assign/classify skills for other employees via direct API call — rejected 403

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: Employee (Self) cannot[] assign/classify for others |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture); confirmed API endpoint required

**Steps**

1. As an Employee(self)-scoped session, issue a direct API call to assign/classify a skill for a different employee

**Expected**

Request is rejected with HTTP 403

**Automation Hint**

PARTIAL — confirmed API endpoint required (see unclear #4); mark manual until endpoint is provided.

#### TC-EMPSKL-079 — Each role's permitted/forbidden skill actions (add, classify, override, delete/unlink) are enforced at BOTH UI and API level, not merely hidden in the UI

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | businessRules: role-scope-assertion — UI+API enforcement parity |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Requires Admin, TM/testUserPage, and dedicated EM/RM accounts (EM/RM not yet provisioned — see unclear #8); confirmed API endpoints required (see unclear #4)

**Steps**

1. For each role (Admin, TM, EM, RM), attempt every action listed as forbidden in roleMatrix.cannot[] via both the UI and a direct API call

**Expected**

Every forbidden action is blocked at both layers — UI control hidden/disabled AND API returns 403

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. PARTIAL — requires EM/RM accounts and confirmed API endpoints; currently manual-only for those roles.

#### TC-EMPSKL-080 — IDOR check — changing the employeeId in an assign/classify/override API request/URL to target an employee outside the caller's scope returns 403/404

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Regression: rbac (IDOR) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture, TM); confirmed API endpoint required

**Steps**

1. As TM, capture a valid assign/classify request
2. Modify the employeeId in the request body/URL to an employee outside the TM's managed department
3. Resend the request

**Expected**

Request is rejected with 403 or 404 — no data belonging to the out-of-scope employee is returned or modified

**Automation Hint**

PARTIAL — confirmed API endpoint required (see unclear #4); mark manual until endpoint is provided.

#### TC-EMPSKL-081 — No dedicated EM or RM test accounts exist — EM/RM-specific Skills scenarios remain manual-only until provisioned

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | unclear #8 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Only ceo@simformsolutions.com (primaryPage, Admin) and punit.patel@simformsolutions.com (testUserPage, TM/Employee) are confirmed available

**Steps**

1. Attempt to run any EM- or RM-specific test case in this suite (toggle non-visibility, direct-report-only scope, forced-Secondary default)

**Expected**

All such cases are currently blocked from full automation and require dedicated EM and RM test accounts with known managed-department/direct-report seed data

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. MANUAL — requirement unclear: dedicated EM and RM test accounts are not yet provisioned (unclear #8); this case exists to track the gap, not to assert application behavior.

### Smoke (5)

#### TC-EMPSKL-001 — TM/EM/Admin adds a new skill via 'Add New Skill' drawer with mixed Primary/Secondary classifications and Save reflects correctly everywhere

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[0]; testScenario: 'TM/EM/Admin add a new skill with mixed Primary/Secondary classifications' (dup, merged) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); on Employee > Skills for a department with seeded employees

**Steps**

1. Navigate to Employee > Skills
2. Click 'Add Skills' in the top-right corner
3. Select the 'Engineering' department checkbox
4. In Search or Create Skill, search and select 'TypeScript'
5. In Assign to Employees, add Employee A and Employee B
6. Set Employee A's toggle to Primary; leave Employee B's toggle untouched
7. Click Save

**Expected**

Drawer closes; Skills Listing updates without a page reload and shows 'TypeScript' with combined count 2; selecting 'TypeScript' shows Primary Holders count 1 (Employee A) and Secondary Holders count 1 (Employee B, defaulted)

**Test Data**

- `departmentName`: Engineering
- `skillName`: TypeScript
- `employeesAssigned`: name: Employee A; toggle: Primary, name: Employee B; toggle: untouched

#### TC-EMPSKL-002 — Employee self-assigns a skill from their profile and it is reflected correctly in the Skill Detail Panel for their department

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

Logged in as punit.patel@simformsolutions.com (testUserPage fixture); on own Employee Profile

**Steps**

1. Open own Employee Profile > Skills panel
2. Self-assign the skill 'Docker' choosing Secondary classification
3. Save
4. Navigate to Skills Management for the employee's department and select 'Docker'

**Expected**

The employee appears under Secondary Holders in the Skill Detail Panel for their department; Secondary count reflects the +1 addition

**Test Data**

- `skillName`: Docker
- `classification`: Secondary

#### TC-EMPSKL-003 — TM/EM/Admin overrides an employee's self-classified skill after one-time confirmation and change reflects immediately on Detail Panel and profile

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[2]; testScenario: 'Override of employee self-classified skill requires confirmation' (dup, merged); AC: TM/EM/Admin override with one-time confirmation (dup, merged) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee already self-classified as Primary for a known skill

**Steps**

1. Navigate to Skills Management, select the skill the employee already self-classified
2. Attempt to change the employee's classification to Secondary via the toggle and Save
3. Confirm the inline dialog: 'This skill was self-classified by [Employee Name] as Primary. Changing it will update their profile. Continue?'
4. Save

**Expected**

Change applies only after confirming; Skill Detail Panel shows the employee under Secondary Holders immediately; the employee's own profile reflects Secondary immediately

**Test Data**

- `skillName`: TypeScript
- `employeeCurrentClassification`: Primary
- `newClassification`: Secondary

#### TC-EMPSKL-004 — Skills Listing shows one combined Primary+Secondary count per skill with no per-category breakdown at list level

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | testScenario: 'Skills Listing shows combined Primary+Secondary count per skill'; AC: combined count, no list-level breakdown (dup, merged) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Skills Management for a department containing a skill with known nonzero Primary and Secondary counts
2. Locate the skill row in the Skills Listing

**Expected**

Row shows a single combined count exactly equal to Primary+Secondary sum (e.g. 'TypeScript 247'); no Primary/Secondary split is visible at list level

**Test Data**

- `skillName`: TypeScript
- `expectedCombinedCountLabel`: TypeScript 247

#### TC-EMPSKL-005 — Selecting a skill renders Primary Holders and Secondary Holders sub-sections with correct counts and matching members

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | testScenario: 'Skill Detail Panel splits holders into Primary/Secondary sections'; AC: Primary/Secondary sub-header counts (dup, merged) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill from the Skills Listing

**Expected**

Primary Holders sub-header shows the correct count (e.g. 'Primary: 180') listing exactly the employees holding it as Primary; Secondary Holders sub-header shows the correct count (e.g. 'Secondary: 67') listing exactly the employees holding it as Secondary

**Test Data**

- `expectedPrimaryHeader`: Primary: 180
- `expectedSecondaryHeader`: Secondary: 67
