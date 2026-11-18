# Competencies — Test Cases

**Total test cases:** 83  
**Modules covered:** Competencies  
**Source:** `reports/test-cases/cases-2026-07-14-DEPTCMP.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 20 | 24.1% |
| negative | 19 | 22.9% |
| regression | 16 | 19.3% |
| boundary | 15 | 18.1% |
| security | 8 | 9.6% |
| smoke | 3 | 3.6% |
| integration | 2 | 2.4% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 41 | 49.4% |
| high | 38 | 45.8% |
| critical | 3 | 3.6% |
| low | 1 | 1.2% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 44 | 53.0% |
| minor | 29 | 34.9% |
| critical | 10 | 12.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 80 | 96.4% |
| regression-derived | 3 | 3.6% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 72 | 86.7% |
| inferred | 7 | 8.4% |
| speculative | 2 | 2.4% |
| unverified-fallback | 2 | 2.4% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 63 | 75.9% |
| No | 20 | 24.1% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 30 | 36.1% |
| @regression | 30 | 36.1% |
| @negative | 25 | 30.1% |
| @boundary | 20 | 24.1% |
| @security | 15 | 18.1% |
| @needs-verification | 11 | 13.3% |
| @smoke | 3 | 3.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-DEPTCMP-001](#tc-deptcmp-001-tm-em-admin-adds-a-competency-end-to-end-and-it-appears-in-the-listing) | TM/EM/Admin adds a competency end-to-end and it appears in the listing | Competencies | smoke | critical |
| [TC-DEPTCMP-002](#tc-deptcmp-002-tm-em-admin-edits-an-existing-competency-and-the-listing-updates-immediately) | TM/EM/Admin edits an existing competency and the listing updates immediately | Competencies | smoke | critical |
| [TC-DEPTCMP-003](#tc-deptcmp-003-rm-opens-the-competencies-listing-and-confirms-no-add-edit-delete-controls-are-available) | RM opens the Competencies Listing and confirms no add/edit/delete controls are available | Competencies | smoke | critical |
| [TC-DEPTCMP-004](#tc-deptcmp-004-only-the-currently-selected-department-s-competencies-are-shown-in-the-listing) | Only the currently selected department's competencies are shown in the listing | Competencies | functional | high |
| [TC-DEPTCMP-005](#tc-deptcmp-005-competency-row-displays-all-required-columns-with-correct-values) | Competency row displays all required columns with correct values | Competencies | functional | high |
| [TC-DEPTCMP-006](#tc-deptcmp-006-progress-percentage-equals-the-average-progress-of-employees-assigned-to-the-linked-goal) | Progress percentage equals the average progress of employees assigned to the linked goal | Competencies | functional | high |
| [TC-DEPTCMP-007](#tc-deptcmp-007-add-competency-all-non-department-fields-stay-disabled-until-a-department-is-selected-then-enable-immediately) | Add Competency: all non-Department fields stay disabled until a Department is selected, then enable immediately | Competencies | functional | high |
| [TC-DEPTCMP-008](#tc-deptcmp-008-goal-dropdown-is-scoped-to-only-the-goals-belonging-to-the-selected-department) | Goal dropdown is scoped to only the goals belonging to the selected Department | Competencies | functional | high |
| [TC-DEPTCMP-009](#tc-deptcmp-009-newly-created-competency-defaults-to-the-current-calendar-year) | Newly created competency defaults to the current calendar year | Competencies | functional | medium |
| [TC-DEPTCMP-010](#tc-deptcmp-010-add-competency-captures-a-minimal-valid-submission-with-only-mandatory-fields-department-goal) | Add Competency captures a minimal valid submission with only mandatory fields (Department + Goal) | Competencies | functional | high |
| [TC-DEPTCMP-011](#tc-deptcmp-011-add-competency-captures-description-text-and-displays-it-correctly) | Add Competency captures Description text and displays it correctly | Competencies | functional | medium |
| [TC-DEPTCMP-012](#tc-deptcmp-012-add-competency-with-targeted-members-all-behaves-correctly-for-no-of-employees) | Add Competency with Targeted Members = 'All' behaves correctly for No of Employees | Competencies | functional | medium |
| [TC-DEPTCMP-013](#tc-deptcmp-013-add-competency-with-targeted-members-selected-requires-accepts-a-specific-no-of-employees-value) | Add Competency with Targeted Members = 'Selected' requires/accepts a specific No of Employees value | Competencies | functional | medium |
| [TC-DEPTCMP-014](#tc-deptcmp-014-add-competency-accepts-each-valid-status-value-at-creation-not-started-in-progress-completed) | Add Competency accepts each valid Status value at creation (Not Started, In progress, Completed) | Competencies | functional | medium |
| [TC-DEPTCMP-015](#tc-deptcmp-015-add-competency-accepts-each-valid-priority-value-at-creation-high-medium-low) | Add Competency accepts each valid Priority value at creation (High, Medium, Low) | Competencies | functional | medium |
| [TC-DEPTCMP-016](#tc-deptcmp-016-edit-competency-description-field-updates-and-persists-in-the-listing) | Edit Competency: Description field updates and persists in the listing | Competencies | functional | high |
| [TC-DEPTCMP-017](#tc-deptcmp-017-edit-competency-targeted-members-field-updates-and-persists) | Edit Competency: Targeted Members field updates and persists | Competencies | functional | high |
| [TC-DEPTCMP-018](#tc-deptcmp-018-edit-competency-no-of-employees-field-updates-and-persists) | Edit Competency: No of Employees field updates and persists | Competencies | functional | high |
| [TC-DEPTCMP-019](#tc-deptcmp-019-edit-competency-status-field-updates-with-a-valid-forward-transition-and-persists) | Edit Competency: Status field updates with a valid forward transition and persists | Competencies | functional | high |
| [TC-DEPTCMP-020](#tc-deptcmp-020-edit-competency-priority-field-updates-and-persists) | Edit Competency: Priority field updates and persists | Competencies | functional | high |
| [TC-DEPTCMP-021](#tc-deptcmp-021-tm-em-admin-deletes-an-existing-competency-and-it-is-removed-from-the-listing) | TM/EM/Admin deletes an existing competency and it is removed from the listing | Competencies | functional | high |
| [TC-DEPTCMP-022](#tc-deptcmp-022-rm-s-competencies-listing-renders-with-zero-functional-add-edit-delete-controls-in-the-dom) | RM's Competencies Listing renders with zero functional add/edit/delete controls in the DOM | Competencies | functional | high |
| [TC-DEPTCMP-023](#tc-deptcmp-023-multi-department-manager-must-explicitly-select-a-department-before-add-edit-delete-actions-are-enabled) | Multi-department manager must explicitly select a department before add/edit/delete actions are enabled | Competencies | functional | high |
| [TC-DEPTCMP-024](#tc-deptcmp-024-rm-attempts-to-add-a-competency-action-is-blocked) | RM attempts to add a competency — action is blocked | Competencies | negative | high |
| [TC-DEPTCMP-025](#tc-deptcmp-025-rm-attempts-to-edit-an-existing-competency-action-is-blocked) | RM attempts to edit an existing competency — action is blocked | Competencies | negative | high |
| [TC-DEPTCMP-026](#tc-deptcmp-026-rm-attempts-to-delete-an-existing-competency-action-is-blocked) | RM attempts to delete an existing competency — action is blocked | Competencies | negative | high |
| [TC-DEPTCMP-027](#tc-deptcmp-027-submit-add-competency-without-selecting-a-department-submission-cannot-occur) | Submit Add Competency without selecting a Department — submission cannot occur | Competencies | negative | medium |
| [TC-DEPTCMP-028](#tc-deptcmp-028-select-a-department-but-leave-goal-unselected-then-attempt-to-save-validation-blocks-submission) | Select a Department but leave Goal unselected, then attempt to save — validation blocks submission | Competencies | negative | medium |
| [TC-DEPTCMP-029](#tc-deptcmp-029-multi-department-manager-attempts-add-edit-delete-without-selecting-a-department-first-action-is-blocked) | Multi-department manager attempts add/edit/delete without selecting a department first — action is blocked | Competencies | negative | medium |
| [TC-DEPTCMP-030](#tc-deptcmp-030-no-of-employees-field-rejects-non-numeric-input) | No of Employees field rejects non-numeric input | Competencies | negative | medium |
| [TC-DEPTCMP-031](#tc-deptcmp-031-description-field-containing-only-whitespace-is-treated-as-empty) | Description field containing only whitespace is treated as empty | Competencies | negative | medium |
| [TC-DEPTCMP-032](#tc-deptcmp-032-description-field-rejects-truncates-a-value-exceeding-the-documented-max-length) | Description field rejects/truncates a value exceeding the documented max length | Competencies | negative | medium |
| [TC-DEPTCMP-033](#tc-deptcmp-033-description-field-sanitizes-special-injection-characters-across-the-full-test-set) | Description field sanitizes special/injection characters across the full test set | Competencies | negative | high |
| [TC-DEPTCMP-034](#tc-deptcmp-034-creating-a-second-competency-for-the-same-department-goal-combination-is-permitted-per-current-default-assumption-not-blocked-as-a-duplicate) | Creating a second competency for the same Department+Goal combination is permitted (per current default assumption), not blocked as a duplicate | Competencies | negative | medium |
| [TC-DEPTCMP-035](#tc-deptcmp-035-refreshing-the-browser-mid-add-competency-form-fill-does-not-submit-partial-data) | Refreshing the browser mid-Add-Competency-form-fill does not submit partial data | Competencies | negative | medium |
| [TC-DEPTCMP-036](#tc-deptcmp-036-slow-network-on-competencies-fetch-shows-a-loading-indicator-without-freezing-the-ui) | Slow network on Competencies fetch shows a loading indicator without freezing the UI | Competencies | negative | medium |
| [TC-DEPTCMP-037](#tc-deptcmp-037-session-expiry-http-401-during-a-competencies-action-returns-the-user-to-login-without-data-loss) | Session expiry (HTTP 401) during a Competencies action returns the user to login without data loss | Competencies | negative | medium |
| [TC-DEPTCMP-038](#tc-deptcmp-038-a-403-permission-denied-response-on-a-competencies-action-shows-a-user-friendly-message) | A 403 permission-denied response on a Competencies action shows a user-friendly message | Competencies | negative | medium |
| [TC-DEPTCMP-039](#tc-deptcmp-039-navigating-to-a-non-existent-competency-record-shows-a-not-found-state-not-a-blank-screen) | Navigating to a non-existent competency record shows a not-found state, not a blank screen | Competencies | negative | medium |
| [TC-DEPTCMP-040](#tc-deptcmp-040-a-503-service-unavailable-response-on-competencies-shows-a-maintenance-retry-message) | A 503 service-unavailable response on Competencies shows a maintenance/retry message | Competencies | negative | medium |
| [TC-DEPTCMP-041](#tc-deptcmp-041-a-failed-save-on-add-edit-competency-offers-a-retry-without-requiring-a-full-page-reload) | A failed Save on Add/Edit Competency offers a retry without requiring a full page reload | Competencies | negative | medium |
| [TC-DEPTCMP-042](#tc-deptcmp-042-attempting-to-delete-a-competency-documents-current-undocumented-deletion-condition-behavior) | Attempting to delete a Competency documents current (undocumented) deletion-condition behavior | Competencies | negative | medium |
| [TC-DEPTCMP-043](#tc-deptcmp-043-competency-with-0-targeted-members-renders-gracefully-in-the-listing) | Competency with 0 targeted members renders gracefully in the listing | Competencies | boundary | medium |
| [TC-DEPTCMP-044](#tc-deptcmp-044-competency-with-0-progress-displays-cleanly-when-no-employees-have-started-the-linked-goal) | Competency with 0% progress displays cleanly when no employees have started the linked goal | Competencies | boundary | medium |
| [TC-DEPTCMP-045](#tc-deptcmp-045-department-with-no-goals-defined-shows-an-empty-goal-dropdown-and-blocks-competency-creation) | Department with no goals defined shows an empty Goal dropdown and blocks competency creation | Competencies | boundary | high |
| [TC-DEPTCMP-046](#tc-deptcmp-046-progress-average-calculation-handles-a-linked-goal-with-zero-assigned-employees-without-dividing-by-zero) | Progress average calculation handles a linked goal with zero assigned employees without dividing by zero | Competencies | boundary | high |
| [TC-DEPTCMP-047](#tc-deptcmp-047-switching-the-selected-department-mid-form-resets-and-re-disables-dependent-add-competency-fields) | Switching the selected Department mid-form resets and re-disables dependent Add Competency fields | Competencies | boundary | medium |
| [TC-DEPTCMP-048](#tc-deptcmp-048-competency-with-a-blank-optional-description-renders-without-error) | Competency with a blank (optional) Description renders without error | Competencies | boundary | low |
| [TC-DEPTCMP-049](#tc-deptcmp-049-no-of-employees-display-behavior-differs-correctly-between-targeted-members-all-and-selected) | No of Employees display/behavior differs correctly between Targeted Members = 'All' and 'Selected' | Competencies | boundary | medium |
| [TC-DEPTCMP-050](#tc-deptcmp-050-tm-em-admin-managing-multiple-departments-repeatedly-switches-departments-without-state-leaking-between-them) | TM/EM/Admin managing multiple departments repeatedly switches departments without state leaking between them | Competencies | boundary | medium |
| [TC-DEPTCMP-051](#tc-deptcmp-051-double-clicking-save-on-add-competency-creates-exactly-one-competency-record) | Double-clicking Save on Add Competency creates exactly one competency record | Competencies | boundary | medium |
| [TC-DEPTCMP-052](#tc-deptcmp-052-clearing-the-department-selection-after-choosing-one-re-disables-dependent-add-competency-fields) | Clearing the Department selection after choosing one re-disables dependent Add Competency fields | Competencies | boundary | medium |
| [TC-DEPTCMP-053](#tc-deptcmp-053-direct-api-attempt-to-create-a-competency-with-a-goal-id-belonging-to-a-different-department-is-rejected) | Direct API attempt to create a competency with a Goal ID belonging to a different Department is rejected | Competencies | boundary | high |
| [TC-DEPTCMP-054](#tc-deptcmp-054-direct-api-attempt-to-submit-an-out-of-enum-targeted-members-value-is-rejected) | Direct API attempt to submit an out-of-enum Targeted Members value is rejected | Competencies | boundary | medium |
| [TC-DEPTCMP-055](#tc-deptcmp-055-no-of-employees-rejects-0-negative-and-implausibly-large-numeric-values) | No of Employees rejects 0, negative, and implausibly large numeric values | Competencies | boundary | medium |
| [TC-DEPTCMP-056](#tc-deptcmp-056-direct-api-attempt-to-submit-an-out-of-enum-status-value-is-rejected) | Direct API attempt to submit an out-of-enum Status value is rejected | Competencies | boundary | medium |
| [TC-DEPTCMP-057](#tc-deptcmp-057-direct-api-attempt-to-submit-an-out-of-enum-priority-value-is-rejected) | Direct API attempt to submit an out-of-enum Priority value is rejected | Competencies | boundary | medium |
| [TC-DEPTCMP-058](#tc-deptcmp-058-rm-role-cannot-add-edit-delete-a-competency-enforced-at-both-ui-and-api-level) | RM role — cannot add/edit/delete a competency, enforced at both UI and API level | Competencies | security | high |
| [TC-DEPTCMP-059](#tc-deptcmp-059-tm-role-cannot-act-on-competencies-for-departments-they-do-not-manage-and-cannot-act-without-selecting-a-department-when-managing-multiple) | TM role — cannot act on competencies for departments they do not manage, and cannot act without selecting a department when managing multiple | Competencies | security | high |
| [TC-DEPTCMP-060](#tc-deptcmp-060-em-role-cannot-act-on-competencies-for-departments-they-do-not-manage-and-cannot-act-without-selecting-a-department-when-managing-multiple) | EM role — cannot act on competencies for departments they do not manage, and cannot act without selecting a department when managing multiple | Competencies | security | high |
| [TC-DEPTCMP-061](#tc-deptcmp-061-rm-session-direct-api-call-to-create-update-delete-a-competency-is-rejected-with-403) | RM session direct API call to create/update/delete a competency is rejected with 403 | Competencies | security | high |
| [TC-DEPTCMP-062](#tc-deptcmp-062-tm-em-cannot-edit-or-delete-a-competency-belonging-to-a-department-they-do-not-manage-idor-check) | TM/EM cannot edit or delete a competency belonging to a department they do not manage (IDOR check) | Competencies | security | high |
| [TC-DEPTCMP-063](#tc-deptcmp-063-xss-payload-entered-into-the-description-field-is-sanitized-not-executed) | XSS payload entered into the Description field is sanitized, not executed | Competencies | security | high |
| [TC-DEPTCMP-064](#tc-deptcmp-064-each-role-s-permitted-forbidden-competency-actions-are-enforced-consistently-at-both-ui-and-api-level-role-scope-assertion) | Each role's permitted/forbidden Competency actions are enforced consistently at both UI and API level (role-scope assertion) | Competencies | security | high |
| [TC-DEPTCMP-065](#tc-deptcmp-065-regression-spot-check-competencies-changes-do-not-break-the-affected-empgol-goals-module) | Regression spot-check — Competencies changes do not break the affected EMPGOL (Goals) module | Competencies | regression | high |
| [TC-DEPTCMP-066](#tc-deptcmp-066-ui-displayed-competency-values-match-the-api-response-after-save) | UI-displayed competency values match the API response after save | Competencies | regression | high |
| [TC-DEPTCMP-067](#tc-deptcmp-067-competency-record-count-is-consistent-across-list-view-summary-dashboard-widget-if-any-and-api-total) | Competency record count is consistent across list view, summary/dashboard widget (if any), and API total | Competencies | regression | high |
| [TC-DEPTCMP-068](#tc-deptcmp-068-a-newly-created-competency-is-present-in-the-list-after-a-full-page-refresh-f5) | A newly created competency is present in the list after a full page refresh (F5) | Competencies | regression | high |
| [TC-DEPTCMP-069](#tc-deptcmp-069-updated-competency-field-values-are-correct-after-a-full-page-refresh-f5) | Updated competency field values are correct after a full page refresh (F5) | Competencies | regression | high |
| [TC-DEPTCMP-070](#tc-deptcmp-070-a-deleted-competency-is-absent-from-the-active-list-immediately-without-a-page-refresh) | A deleted competency is absent from the active list immediately, without a page refresh | Competencies | regression | high |
| [TC-DEPTCMP-071](#tc-deptcmp-071-primary-action-buttons-add-edit-delete-remain-visible-to-permitted-roles-before-and-after-a-crud-operation) | Primary action buttons (Add/Edit/Delete) remain visible to permitted roles before and after a CRUD operation | Competencies | regression | medium |
| [TC-DEPTCMP-072](#tc-deptcmp-072-save-button-on-add-competency-is-disabled-while-required-fields-are-empty-and-enables-once-they-are-filled) | Save button on Add Competency is disabled while required fields are empty and enables once they are filled | Competencies | regression | medium |
| [TC-DEPTCMP-073](#tc-deptcmp-073-row-level-edit-delete-icons-appear-on-hover-for-every-row-including-the-first-and-last-row) | Row-level Edit/Delete icons appear on hover for every row, including the first and last row | Competencies | regression | medium |
| [TC-DEPTCMP-074](#tc-deptcmp-074-icon-only-edit-delete-buttons-show-a-readable-tooltip-on-hover) | Icon-only Edit/Delete buttons show a readable tooltip on hover | Competencies | regression | medium |
| [TC-DEPTCMP-075](#tc-deptcmp-075-a-success-toast-appears-after-create-update-delete-and-names-the-competency-or-confirms-the-action) | A success toast appears after Create/Update/Delete and names the competency or confirms the action | Competencies | regression | medium |
| [TC-DEPTCMP-076](#tc-deptcmp-076-an-error-toast-appears-on-a-server-error-without-exposing-a-raw-stack-trace) | An error toast appears on a server error without exposing a raw stack trace | Competencies | regression | medium |
| [TC-DEPTCMP-077](#tc-deptcmp-077-a-loading-indicator-is-shown-during-competency-data-fetch-and-disappears-once-data-loads) | A loading indicator is shown during competency data fetch and disappears once data loads | Competencies | regression | medium |
| [TC-DEPTCMP-078](#tc-deptcmp-078-an-empty-state-message-is-shown-when-the-selected-department-has-no-competencies) | An empty-state message is shown when the selected department has no competencies | Competencies | regression | medium |
| [TC-DEPTCMP-079](#tc-deptcmp-079-a-5xx-api-error-on-the-competencies-listing-shows-a-user-friendly-error-message-not-a-blank-screen) | A 5xx API error on the Competencies Listing shows a user-friendly error message, not a blank screen | Competencies | regression | medium |
| [TC-DEPTCMP-080](#tc-deptcmp-080-rm-read-only-role-can-view-competency-records-for-their-department-while-all-write-controls-remain-absent) | RM (read-only role) can view competency records for their department while all write controls remain absent | Competencies | security | high |
| [TC-DEPTCMP-081](#tc-deptcmp-081-allocated-members-count-on-the-competency-row-matches-the-actual-assigned-employee-count-from-the-linked-goal-and-api) | Allocated Members count on the competency row matches the actual assigned-employee count from the linked goal (and API) | Competencies | regression | high |
| [TC-DEPTCMP-082](#tc-deptcmp-082-integration-goal-assignment-progress-changes-in-empgol-correctly-recalculate-the-linked-competency-s-progress-and-goal-dropdown-data) | Integration — Goal assignment/progress changes in EMPGOL correctly recalculate the linked Competency's Progress % and Goal dropdown data | Competencies | integration | high |
| [TC-DEPTCMP-083](#tc-deptcmp-083-integration-a-goal-auto-deleted-for-reaching-zero-assignment-does-not-leave-an-orphaned-broken-competency-link) | Integration — a Goal auto-deleted for reaching zero assignment does not leave an orphaned/broken Competency link | Competencies | integration | high |

---

## Competencies

83 test cases.

### Boundary (15)

#### TC-DEPTCMP-043 — Competency with 0 targeted members renders gracefully in the listing

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Competency with 0 targeted members displayed in listing |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. View/create a competency with 0 targeted members
2. Read the Targeted Members column

**Expected**

Targeted Members column shows 0 or an empty state cleanly, without a crash or 'NaN'

**Test Data**

- `targetedMembers`: 0

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-044 — Competency with 0% progress displays cleanly when no employees have started the linked goal

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Competency with 0% progress because no employees have started the linked goal |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. View a competency whose linked goal has no employee progress yet
2. Read the Progress column

**Expected**

Progress column shows 0% cleanly, not an error or 'NaN'

**Test Data**

- `progress`: 0

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-045 — Department with no goals defined shows an empty Goal dropdown and blocks competency creation

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative |
| **Requirement Ref** | edgeCases: Department has no goals defined — Goal dropdown empty, blocking competency creation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency
2. Select a Department that has zero Goals defined
3. Inspect the Goal dropdown
4. Attempt to save

**Expected**

Goal dropdown shows an empty/no-options state | Save is not possible without a Goal being selectable

**Test Data**

- `department`: New Department With No Goals

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-046 — Progress average calculation handles a linked goal with zero assigned employees without dividing by zero

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Progress average calculation when the linked goal has zero employees assigned (potential divide-by-zero) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. View a competency whose linked goal currently has zero employees assigned
2. Read the Progress column

**Expected**

Progress displays a clean fallback value (e.g. 0% or an explicit 'No data' state), not a divide-by-zero error, NaN, or crash

**Test Data**

- `assignedEmployees`: 0

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-047 — Switching the selected Department mid-form resets and re-disables dependent Add Competency fields

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Switching the selected Department after partially filling the Add Competency form |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency and select Department A
2. Select a Goal and fill in Description
3. Change the Department selector to Department B

**Expected**

Goal and other dependent fields reset (cleared) and re-disable until a new selection is made for Department B; no stale Department-A data remains

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-048 — Competency with a blank (optional) Description renders without error

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Description left blank (optional field) — listing renders without error |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a competency leaving Description blank
2. View it in the listing

**Expected**

Listing renders the competency with no description shown and no error

**Test Data**

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-049 — No of Employees display/behavior differs correctly between Targeted Members = 'All' and 'Selected'

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Targeted Members = 'All' vs 'Selected' — No of Employees value display/behavior differs |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create/view a competency with Targeted Members = 'All' and note the No of Employees display
2. Create/view a second competency with Targeted Members = 'Selected' and No of Employees = 3, and note its display

**Expected**

No of Employees value/behavior visibly differs between the two Targeted Members settings, consistent with the documented (or default-assumed) relationship

**Test Data**

- `targetedMembersAll`: All
- `targetedMembersSelected`: Selected
- `noOfEmployees`: 3

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-050 — TM/EM/Admin managing multiple departments repeatedly switches departments without state leaking between them

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: TM/EM/Admin managing multiple departments switches between departments repeatedly |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as an account managing 3 departments
2. Switch between all 3 departments in sequence in the Competencies Listing and Add Competency form
3. Verify listing contents and form field state after each switch

**Expected**

Competencies Listing and Add Competency form state reflect only the currently selected department after each switch — no data or field state leaks from a previously selected department

**Test Data**

- `departments`: Engineering, Marketing, Sales

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-051 — Double-clicking Save on Add Competency creates exactly one competency record

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | edgeCases: Click Save on Add Competency twice in quick succession; businessRules: idempotency (double-click Save must not create two records); Regression: data-integrity (double-click save creates exactly one record); Regression: reliability (multiple rapid clicks) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal, fill remaining fields
2. Rapidly double-click (and separately, triple-click) the Save button
3. Check the Competencies Listing and API record count for that Department/Goal

**Expected**

Exactly one competency record exists for that Department/Goal combination after the rapid double/triple submit — no duplicate records

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Use primaryPage fixture.

#### TC-DEPTCMP-052 — Clearing the Department selection after choosing one re-disables dependent Add Competency fields

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules: Department — mandatory dropdown, must be selected before other fields enable |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency and select a Department
2. Clear/deselect the Department (if the control allows it)
3. Inspect Goal and other dependent fields

**Expected**

Dependent fields return to a disabled state consistent with no Department being selected

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-053 — Direct API attempt to create a competency with a Goal ID belonging to a different Department is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @security, @needs-verification |
| **Requirement Ref** | validationRules: Goal — options scoped to only the goals belonging to the currently selected Department |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Identify a Goal ID belonging to Department B
2. Send a direct API create-competency request scoping it to Department A but referencing Department B's Goal ID

**Expected**

Request is rejected (validation error or 400/403), preventing a cross-department Goal/Department mismatch from being persisted

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — real API endpoint/path is unconfirmed (see apiEndpoints[] in req JSON, all marked 'unclear'); automate once the actual endpoint is confirmed.

#### TC-DEPTCMP-054 — Direct API attempt to submit an out-of-enum Targeted Members value is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative, @needs-verification |
| **Requirement Ref** | validationRules: Targeted Members — dropdown restricted to allowed values [All, Selected] |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Send a direct API create/update-competency request with Targeted Members = 'Everyone' (not in [All, Selected])

**Expected**

Request is rejected with a validation error; no competency is persisted with the invalid enum value

**Test Data**

- `invalidValue`: Everyone

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — real API endpoint/path is unconfirmed (see apiEndpoints[] in req JSON); automate once the actual endpoint is confirmed.

#### TC-DEPTCMP-055 — No of Employees rejects 0, negative, and implausibly large numeric values

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative |
| **Requirement Ref** | validationRules: No of Employees — numeric boundary (min/max not explicitly documented in source) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency with Targeted Members = 'Selected'
2. Attempt to enter No of Employees = 0, then -1, then 999999 across separate attempts
3. Attempt to save each

**Expected**

0 and negative values are rejected with a validation error; an implausibly large value is either rejected or capped/flagged, never silently accepted as a valid headcount

**Test Data**

- `values`: 0, -1, 999999

**Automation Hint**

Use primaryPage fixture. Regression: validation (below min value / exceeds plausible max)

#### TC-DEPTCMP-056 — Direct API attempt to submit an out-of-enum Status value is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative, @needs-verification |
| **Requirement Ref** | validationRules: Status — dropdown restricted to allowed values [Not Started, In progress, Completed] |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Send a direct API create/update-competency request with Status = 'On Hold' (not in [Not Started, In progress, Completed])

**Expected**

Request is rejected with a validation error; no competency is persisted with the invalid Status enum value

**Test Data**

- `invalidValue`: On Hold

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — real API endpoint/path is unconfirmed (see apiEndpoints[] in req JSON); automate once the actual endpoint is confirmed.

#### TC-DEPTCMP-057 — Direct API attempt to submit an out-of-enum Priority value is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative, @needs-verification |
| **Requirement Ref** | validationRules: Priority — dropdown restricted to allowed values [High, Medium, Low] |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Send a direct API create/update-competency request with Priority = 'Critical' (not in [High, Medium, Low])

**Expected**

Request is rejected with a validation error; no competency is persisted with the invalid Priority enum value

**Test Data**

- `invalidValue`: Critical

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — real API endpoint/path is unconfirmed (see apiEndpoints[] in req JSON); automate once the actual endpoint is confirmed.

### Functional (20)

#### TC-DEPTCMP-004 — Only the currently selected department's competencies are shown in the listing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: All competencies for the currently selected department are visible; only one department's competencies are shown at a time |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Department → Competencies
2. Select Department A and note the listed competencies
3. Switch the Department selector to Department B

**Expected**

Listing shows only Department A's competencies while A is selected | Listing shows only Department B's competencies after switching, with no leftover rows from A

**Test Data**

- `departmentA`: Engineering
- `departmentB`: Marketing

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-005 — Competency row displays all required columns with correct values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Each competency row displays Department Name, Competency Name, Targeted Members, Progress, Status, Priority, Allocated Members |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Department → Competencies
2. Locate an existing competency row
3. Read each of the 7 documented columns for that row

**Expected**

Row displays Department Name, Competency Name, Targeted Members, Progress, Status, Priority, and Allocated Members, each with a non-corrupted value matching the record

**Test Data**

- `columns`: Department Name, Competency Name, Targeted Members, Progress, Status, Priority, Allocated Members

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-006 — Progress percentage equals the average progress of employees assigned to the linked goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Progress is displayed as a percentage representing the average progress of all employees assigned to the linked goal |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Seed a Department Goal with 5 employees at progress values [0, 25, 50, 75, 100]
2. Create/open the Competency linked to that Goal
3. Read the Progress % shown on the competency row

**Expected**

Displayed Progress % equals 50 (the average of the 5 seeded values)

**Test Data**

- `employees`: 5
- `progressValues`: 0, 25, 50, 75, 100
- `expectedAverage`: 50

**Automation Hint**

PARTIAL — requires precise multi-employee goal-progress test data seeding, likely via API rather than UI, to make the expected average deterministic. Use primaryPage fixture for UI verification once seeded.

#### TC-DEPTCMP-007 — Add Competency: all non-Department fields stay disabled until a Department is selected, then enable immediately

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: In Add Competency, all fields other than Department remain disabled until a Department is selected |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency without selecting a Department
2. Inspect Goal, Description, Targeted Members, No of Employees, Status, and Priority fields
3. Select a Department
4. Re-inspect the same fields

**Expected**

All non-Department fields are disabled before a Department is chosen | All fields become enabled immediately after a Department is selected

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-008 — Goal dropdown is scoped to only the goals belonging to the selected Department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: The Goal dropdown in Add Competency lists only goals belonging to the selected Department |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency and select Department A
2. Record the options listed in the Goal dropdown
3. Change the Department selection to Department B
4. Record the Goal dropdown options again

**Expected**

Goal dropdown for Department A lists only Department A's goals | Goal dropdown updates to show only Department B's goals after switching, with no cross-department leakage

**Test Data**

- `departmentA`: Engineering
- `departmentB`: Marketing

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-009 — Newly created competency defaults to the current calendar year

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: A new competency is created for the current year by default |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a new competency via Add Competency
2. Inspect the year value associated with the created competency (UI or API)

**Expected**

The created competency's year equals the current calendar year

**Automation Hint**

PARTIAL — whether a Year field/control is even visible/editable is unresolved (see unclear[] on year-change capability); assertion may need to be against an API/DB field rather than a visible UI control. Use primaryPage fixture.

#### TC-DEPTCMP-010 — Add Competency captures a minimal valid submission with only mandatory fields (Department + Goal)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can successfully add a competency for a department they manage |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency
2. Select Department and Goal only, leaving Description/Targeted Members/No of Employees/Status/Priority at their defaults
3. Click Save

**Expected**

Competency is created successfully for the department the current user manages, with default values applied to the untouched optional fields

**Test Data**

- `department`: Engineering
- `goal`: Improve Code Review Skills

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-011 — Add Competency captures Description text and displays it correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Competency captures Description, Targeted Members, No of Employees, Status, and Priority |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Enter Description = 'Quarterly code-quality improvement initiative'
3. Save

**Expected**

Competency is created with the entered Description visible in the listing/detail view

**Test Data**

- `description`: Quarterly code-quality improvement initiative

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-012 — Add Competency with Targeted Members = 'All' behaves correctly for No of Employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Competency captures Targeted Members ([All/Selected]) and No of Employees |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Set Targeted Members = 'All'
3. Observe the No of Employees field's state/value
4. Save

**Expected**

When Targeted Members = 'All', No of Employees reflects/derives the full department headcount (or is disabled per current app behavior) and the competency saves successfully

**Test Data**

- `targetedMembers`: All

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-013 — Add Competency with Targeted Members = 'Selected' requires/accepts a specific No of Employees value

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Competency captures Targeted Members ([All/Selected]) and No of Employees |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Set Targeted Members = 'Selected'
3. Enter No of Employees = 3
4. Save

**Expected**

Competency is created with Targeted Members = 'Selected' and No of Employees = 3 shown correctly in the listing

**Test Data**

- `targetedMembers`: Selected
- `noOfEmployees`: 3

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-014 — Add Competency accepts each valid Status value at creation (Not Started, In progress, Completed)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Competency captures Status ([Not Started, In progress, Completed]) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create three competencies (or edit Status on three test records) setting Status to each of 'Not Started', 'In progress', 'Completed' in turn
2. Save each

**Expected**

Each competency saves successfully and the Status column displays the exact selected value for each of the three records

**Test Data**

- `statuses`: Not Started, In progress, Completed

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-015 — Add Competency accepts each valid Priority value at creation (High, Medium, Low)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Competency captures Priority ([High, Medium, Low]) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create three competencies (or edit Priority on three test records) setting Priority to each of 'High', 'Medium', 'Low' in turn
2. Save each

**Expected**

Each competency saves successfully and the Priority column displays the exact selected value for each of the three records

**Test Data**

- `priorities`: High, Medium, Low

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-016 — Edit Competency: Description field updates and persists in the listing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can edit Description on an existing competency |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Edit Competency on an existing record
2. Change only the Description field
3. Save

**Expected**

Listing shows the new Description immediately; no other field is altered

**Test Data**

- `newDescription`: Revised description after edit

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-017 — Edit Competency: Targeted Members field updates and persists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can edit Targeted Members on an existing competency |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Edit Competency on an existing record with Targeted Members = 'All'
2. Change Targeted Members to 'Selected'
3. Save

**Expected**

Listing shows Targeted Members = 'Selected' immediately after save

**Test Data**

- `newTargetedMembers`: Selected

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-018 — Edit Competency: No of Employees field updates and persists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can edit No of Employees on an existing competency |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Edit Competency on an existing record
2. Change No of Employees to 7
3. Save

**Expected**

Listing shows No of Employees = 7 immediately after save

**Test Data**

- `newNoOfEmployees`: 7

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-019 — Edit Competency: Status field updates with a valid forward transition and persists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can edit Status on an existing competency; Regression: simerp-module (status changes reflected immediately in list view) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Edit Competency on a record with Status = 'Not Started'
2. Change Status to 'In progress'
3. Save

**Expected**

Listing shows Status = 'In progress' immediately after save | Row reflects the new status without requiring navigation away and back

**Test Data**

- `from`: Not Started
- `to`: In progress

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-020 — Edit Competency: Priority field updates and persists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can edit Priority on an existing competency |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Edit Competency on an existing record
2. Change Priority to 'Low'
3. Save

**Expected**

Listing shows Priority = 'Low' immediately after save

**Test Data**

- `newPriority`: Low

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-021 — TM/EM/Admin deletes an existing competency and it is removed from the listing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM, EM, and Admin roles can delete an existing competency |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate an existing competency row
2. Trigger the delete action and confirm the confirmation dialog
3. Observe the listing

**Expected**

The competency no longer appears in the listing immediately after confirming deletion

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-022 — RM's Competencies Listing renders with zero functional add/edit/delete controls in the DOM

| Field | Value |
| --- | --- |
| **Tags** | @functional, @security |
| **Requirement Ref** | AC: RM role can view all competencies for their department but has no visible or functional add/edit/delete controls |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the RM stand-in account
2. Navigate to Department → Competencies for the RM's department
3. Inspect the DOM/accessibility tree for any Add/Edit/Delete control

**Expected**

All competencies for the RM's department are visible (read-only) | No Add competency control, and no row-level Edit/Delete control, is present anywhere on the page

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-023 — Multi-department manager must explicitly select a department before add/edit/delete actions are enabled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Users who manage multiple departments must explicitly select a department before add/edit/delete actions are enabled |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as an account managing 2+ departments
2. Navigate to Department → Competencies without selecting a department
3. Inspect the state of Add/Edit/Delete controls
4. Select a department
5. Re-inspect the same controls

**Expected**

Add/Edit/Delete controls are disabled/non-functional before a department is explicitly selected | Controls become enabled immediately once a department is chosen

**Test Data**

- `departments`: Engineering, Marketing

**Automation Hint**

Use primaryPage fixture

### Integration (2)

#### TC-DEPTCMP-082 — Integration — Goal assignment/progress changes in EMPGOL correctly recalculate the linked Competency's Progress % and Goal dropdown data

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[EMPGOL].integrationNote: Goal-assignment/progress changes can silently break Competency progress display and Goal dropdown data source |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. In the Goals (EMPGOL) module, change an employee's progress on a Goal that is linked to an existing Competency
2. Navigate to Department → Competencies and locate the linked Competency
3. Also verify the Goal dropdown in Add Competency still correctly reflects the department's current goal set

**Expected**

The Competency's displayed Progress % recalculates to reflect the new goal-progress average | The Goal dropdown's data source remains correctly scoped to the department after the EMPGOL-side change

**Test Data**

- `sourceModule`: EMPGOL
- `targetModule`: DEPTCMP
- `role`: Admin

**Automation Hint**

Multi-module flow — requires separate storageState fixtures for each role involved. Verify both via UI navigation and direct API response. Use primaryPage fixture.

#### TC-DEPTCMP-083 — Integration — a Goal auto-deleted for reaching zero assignment does not leave an orphaned/broken Competency link

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | KB-informed: reports/knowledge-base/modules/employee/goals.json edgeCase (goal auto-deletion at zero assignment) — orphaned Competency-Goal link risk |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a Competency linked to a Goal that currently has employees assigned
2. In the Goals (EMPGOL) module, unassign all employees from that Goal until it reaches zero department- and organization-assigned employees (which the Goals KB indicates triggers automatic DB-level removal of the goal)
3. Return to Department → Competencies and inspect the previously linked Competency

**Expected**

The Competency does not silently break, error, or display corrupted data when its linked Goal is auto-deleted; the app either blocks the Goal's deletion while a Competency still references it, or gracefully surfaces the orphaned state

**Test Data**

- `sourceModule`: EMPGOL
- `targetModule`: DEPTCMP

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. This risk is derived by cross-referencing reports/knowledge-base/modules/employee/goals.json ("Goal with zero...assigned employees is removed entirely from the database") with the Competency-Goal link. Use primaryPage fixture; requires API-level goal-unassignment setup.

### Negative (19)

#### TC-DEPTCMP-024 — RM attempts to add a competency — action is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenarios: RM attempts to add a competency |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the RM stand-in account
2. Attempt to invoke the add-competency action (UI and/or direct API call)

**Expected**

No new competency is created | UI presents no functional add control for RM

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-025 — RM attempts to edit an existing competency — action is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenarios: RM attempts to edit an existing competency |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the RM stand-in account
2. Attempt to edit an existing competency (UI and/or direct API call)

**Expected**

Competency values remain unchanged | No functional edit control is available to RM

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-026 — RM attempts to delete an existing competency — action is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenarios: RM attempts to delete an existing competency |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the RM stand-in account
2. Attempt to delete an existing competency (UI and/or direct API call)

**Expected**

Competency remains present in the listing | No functional delete control is available to RM

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-027 — Submit Add Competency without selecting a Department — submission cannot occur

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenarios: submit Add Competency without selecting a Department |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency
2. Leave Department unselected
3. Attempt to fill/save any other field

**Expected**

Goal and all other fields remain disabled | No competency is created

**Automation Hint**

Use primaryPage fixture. Regression: validation (required field left blank)

#### TC-DEPTCMP-028 — Select a Department but leave Goal unselected, then attempt to save — validation blocks submission

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenarios: select a Department but not a Goal, then attempt to save |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency
2. Select a Department
3. Leave Goal unselected
4. Attempt to click Save

**Expected**

Validation blocks submission since Goal is mandatory | No competency is created

**Automation Hint**

Use primaryPage fixture. Regression: validation (required field left blank)

#### TC-DEPTCMP-029 — Multi-department manager attempts add/edit/delete without selecting a department first — action is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: multi-department manager attempts add/edit/delete without first selecting a department |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as an account managing 2+ departments
2. Without selecting a department, attempt to trigger add/edit/delete

**Expected**

Action is blocked until a department is explicitly chosen

**Test Data**

- `departments`: Engineering, Marketing

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-030 — No of Employees field rejects non-numeric input

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation (invalid format — letters in numeric field) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department, Goal, and Targeted Members = 'Selected'
2. Enter 'abc' into No of Employees
3. Attempt to save

**Expected**

Field rejects non-numeric input with an inline validation error; no competency is created

**Test Data**

- `invalidValue`: abc

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-031 — Description field containing only whitespace is treated as empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation (empty/whitespace-only text field) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Enter a Description consisting only of spaces
3. Save

**Expected**

Whitespace-only Description is treated as empty (trimmed/rejected), not stored as a non-empty value

**Test Data**

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-032 — Description field rejects/truncates a value exceeding the documented max length

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation (exceeds max length — undocumented limit) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Enter a Description one character beyond the assumed max length (2001 chars, since no max is documented in source)
3. Attempt to save

**Expected**

Value is rejected or truncated at the application's actual max length; no silent data loss or server error

**Test Data**

- `description`: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. PARTIAL — max length for Description is not documented in source; verify the actual application-enforced limit before asserting a specific boundary. Use primaryPage fixture.

#### TC-DEPTCMP-033 — Description field sanitizes special/injection characters across the full test set

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | Regression: validation (special characters in free-text field) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Enter each of the following into Description across separate attempts: <script>alert(1)</script>, ", ', --, %, null, undefined
3. Save each and view the competency in the listing/detail view

**Expected**

No script executes; no SQL-error or raw-server-error is surfaced; each payload renders as literal escaped text or is rejected with a clear validation message

**Test Data**

- `payloads`: <script>alert(1)</script>, ", ', --, %, null, undefined

**Automation Hint**

Use primaryPage fixture. Related to security XSS case (TC-DEPTCMP security) — this case covers the broader special-character set beyond pure script injection.

#### TC-DEPTCMP-034 — Creating a second competency for the same Department+Goal combination is permitted (per current default assumption), not blocked as a duplicate

| Field | Value |
| --- | --- |
| **Tags** | @negative, @needs-verification |
| **Requirement Ref** | unclear[]: Multiple competencies per department vs. Availability Matrix interaction; Regression: validation (duplicate data) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add a competency for Department A + Goal X
2. Add a second, distinct competency for the same Department A + Goal X combination (not a rapid double-click — a deliberate second creation)
3. Observe whether both records are created or the second is blocked as a duplicate

**Expected**

Per the requirement's defaultAssumption, both competencies are created independently (multiple competencies per department ARE allowed); if the app instead blocks this as a duplicate, flag for product clarification rather than treating as a confirmed bug

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. This behavior is governed by a blocking unclear[] item ("Can multiple competencies be added, given the same capability exists in Availability Matrix?") — verify actual app behavior before treating either outcome as pass/fail. Use primaryPage fixture.

#### TC-DEPTCMP-035 — Refreshing the browser mid-Add-Competency-form-fill does not submit partial data

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (browser refresh mid-flow) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency and partially fill Department, Goal, and Description
2. Refresh the browser (F5) before clicking Save
3. Return to the Competencies Listing

**Expected**

No partial/incomplete competency record is created; no existing record is corrupted

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-036 — Slow network on Competencies fetch shows a loading indicator without freezing the UI

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (API timeout / slow network) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Throttle network conditions or simulate a delayed API response for the competencies list endpoint
2. Navigate to Department → Competencies
3. Observe the page during the delay

**Expected**

A loading indicator is visible during the delay; the UI remains responsive and does not freeze

**Test Data**

- `throttle`: slow-3g-or-simulated-delay

**Automation Hint**

Use primaryPage fixture; simulate via Playwright route interception with an added delay

#### TC-DEPTCMP-037 — Session expiry (HTTP 401) during a Competencies action returns the user to login without data loss

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 401) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate/force session expiry (e.g. invalidate the session token)
2. Attempt a Competencies action (e.g. Save on Edit Competency)

**Expected**

User is redirected to the login page | No corrupted partial write occurs on the server

**Automation Hint**

Use primaryPage fixture; simulate via route interception returning 401

#### TC-DEPTCMP-038 — A 403 permission-denied response on a Competencies action shows a user-friendly message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 403 user-friendly message) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. As a restricted role, trigger an action that the API rejects with 403
2. Observe the UI response

**Expected**

A user-friendly permission-denied message is shown; no raw error/stack trace is exposed

**Automation Hint**

Use testUserPage fixture; simulate via route interception returning 403 if the real restricted action is unavailable

#### TC-DEPTCMP-039 — Navigating to a non-existent competency record shows a not-found state, not a blank screen

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 404) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate directly to a competency detail/edit URL with a non-existent ID

**Expected**

A not-found page/message is shown; the screen is not blank and no raw error is exposed

**Test Data**

- `fakeId`: non-existent-competency-id-99999

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-040 — A 503 service-unavailable response on Competencies shows a maintenance/retry message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (HTTP 503) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate the competencies API returning 503
2. Navigate to Department → Competencies

**Expected**

A maintenance or retry message is shown instead of a blank page or raw error

**Automation Hint**

Use primaryPage fixture; simulate via route interception returning 503

#### TC-DEPTCMP-041 — A failed Save on Add/Edit Competency offers a retry without requiring a full page reload

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability (retry behaviour) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate the create/update competency API call failing once
2. Observe the UI's response to the failure
3. Retry the Save action

**Expected**

UI offers a retry path (e.g. re-clickable Save) without requiring a full page reload; the retry succeeds once the simulated failure is cleared

**Automation Hint**

Use primaryPage fixture; simulate via route interception failing once then succeeding

#### TC-DEPTCMP-042 — Attempting to delete a Competency documents current (undocumented) deletion-condition behavior

| Field | Value |
| --- | --- |
| **Tags** | @negative, @needs-verification |
| **Requirement Ref** | unclear[]: Competency deletion conditions unspecified |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a competency and, if possible, put it into different states (e.g. Status = In progress, with employees assigned via No of Employees)
2. Attempt to delete the competency in each state
3. Record whether deletion succeeds unconditionally or is blocked in any state

**Expected**

Document the application's actual current behavior for competency deletion across states — do NOT assert a specific pass/fail until a human confirms whether any deletion conditions exist

**Automation Hint**

MANUAL — deletion conditions for Competency are undocumented in source (see unclear[] in req JSON); verify actual app behavior before asserting pass/fail

### Regression (16)

#### TC-DEPTCMP-065 — Regression spot-check — Competencies changes do not break the affected EMPGOL (Goals) module

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: EMPGOL (regressionRisk: high); Regression: simerp-module (cross-module synchronization) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add/edit a competency linked to a specific Goal
2. Navigate to the Goals (EMPGOL) module immediately after
3. Verify the Goal's own listing, assigned-employee count, and progress data are unaffected/consistent

**Expected**

EMPGOL Goals module data remains correct and consistent after a Competencies-side change; no cross-module corruption

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-066 — UI-displayed competency values match the API response after save

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (UI value matches API value after save); Regression: simerp-module (API and UI consistency) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create/edit a competency with specific field values
2. Save
3. Fetch the same record via the corresponding API endpoint and compare all fields to the UI

**Expected**

Every field displayed in the UI matches exactly the value returned by the API for that record

**Automation Hint**

Use primaryPage fixture. Real API endpoint is unconfirmed (see apiEndpoints[] in req JSON) — confirm before automating the API-side assertion.

#### TC-DEPTCMP-067 — Competency record count is consistent across list view, summary/dashboard widget (if any), and API total

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (record count consistency across list/summary/API) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add/delete a competency
2. Compare the record count shown on the Competencies list view, any summary card/widget, and the API's total field

**Expected**

All three counts (list view, summary/widget, API total) are equal after the operation

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-068 — A newly created competency is present in the list after a full page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (new record present after F5); Regression: simerp-module (data persistence) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a new competency
2. Perform a full page refresh (F5)
3. Locate the competency in the listing

**Expected**

The newly created competency is present and correct in the listing after the refresh

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-069 — Updated competency field values are correct after a full page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (updated values correct after F5); Regression: simerp-module (data persistence) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Edit an existing competency's fields
2. Save
3. Perform a full page refresh (F5)
4. Re-inspect the competency's field values

**Expected**

All updated field values remain correct after the refresh — no reversion to stale data

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-070 — A deleted competency is absent from the active list immediately, without a page refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity (deleted record absent from active list, no refresh required) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Delete an existing competency
2. Observe the listing immediately, without refreshing

**Expected**

The deleted competency is absent from the active list immediately, with no manual refresh required

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-071 — Primary action buttons (Add/Edit/Delete) remain visible to permitted roles before and after a CRUD operation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (button visibility) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. As a permitted role, note visibility of Add/Edit/Delete controls before a CRUD operation
2. Perform a create, edit, and delete in sequence
3. Re-check visibility of the same controls after each

**Expected**

Add/Edit/Delete controls remain visible to the permitted role both before and after every CRUD operation

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-072 — Save button on Add Competency is disabled while required fields are empty and enables once they are filled

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (disabled/enabled Save button state) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency
2. Observe Save button state with Department/Goal empty
3. Fill Department and Goal
4. Re-observe Save button state

**Expected**

Save is disabled while Department/Goal are empty; Save becomes enabled once all required fields are filled

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-073 — Row-level Edit/Delete icons appear on hover for every row, including the first and last row

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (hover actions on rows) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Department → Competencies with multiple rows
2. Hover over the first row, a middle row, and the last row
3. Observe row-level Edit/Delete affordances on each

**Expected**

Edit/Delete icons appear on hover for every row tested, including the first and last row

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-074 — Icon-only Edit/Delete buttons show a readable tooltip on hover

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (tooltips on icon-only buttons) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover over an icon-only Edit or Delete button on a competency row

**Expected**

A tooltip with a readable label (e.g. 'Edit', 'Delete') appears

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-075 — A success toast appears after Create/Update/Delete and names the competency or confirms the action

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (success toast) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform a Create, then an Update, then a Delete on a competency in sequence
2. Observe the notification after each

**Expected**

A success toast/notification appears after each operation, containing the competency name or a clear confirmation message

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-076 — An error toast appears on a server error without exposing a raw stack trace

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (error toast); Regression: reliability (HTTP 500) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate a 500 error from the competency create/update/delete API
2. Attempt the operation
3. Observe the notification

**Expected**

An error toast with a user-friendly message appears; no raw stack trace or technical error is exposed

**Automation Hint**

Use primaryPage fixture; simulate via route interception. Also covers Regression: reliability (HTTP 500 user-friendly error)

#### TC-DEPTCMP-077 — A loading indicator is shown during competency data fetch and disappears once data loads

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (loading indicator) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Department → Competencies
2. Observe the page immediately on navigation, before data has loaded
3. Wait for data to load

**Expected**

A spinner/skeleton is visible during the fetch and disappears once data has loaded

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-078 — An empty-state message is shown when the selected department has no competencies

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (empty state) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a Department with zero competencies created
2. Observe the Competencies Listing

**Expected**

A non-blank empty-state message is shown, not a blank table

**Test Data**

- `department`: Department With Zero Competencies

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-079 — A 5xx API error on the Competencies Listing shows a user-friendly error message, not a blank screen

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state (error state on 5xx) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate the competencies list API returning a 5xx error
2. Navigate to Department → Competencies

**Expected**

A user-friendly error message is shown in place of the listing; the screen is not blank

**Automation Hint**

Use primaryPage fixture; simulate via route interception

#### TC-DEPTCMP-081 — Allocated Members count on the competency row matches the actual assigned-employee count from the linked goal (and API)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | unclear[]: 'Allocated members' field definition and distinction from 'Targeted members'; Regression: simerp-module (employee count consistency) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the Allocated Members value on a competency row
2. Compare it against the actual number of employees assigned to the linked Goal (via Goals module / API)

**Expected**

Allocated Members count on the competency row matches the linked goal's actual assigned-employee count and the API response, consistent with the assumed Allocated-vs-Targeted distinction

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Use primaryPage fixture.

### Security (8)

#### TC-DEPTCMP-058 — RM role — cannot add/edit/delete a competency, enforced at both UI and API level

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: RM — cannot add/edit/delete competency; edgeCases: use an RM session to attempt every write action via UI and API |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the RM stand-in account
2. Confirm no add/edit/delete control is present in the UI
3. Attempt a direct API call to create/update/delete a competency

**Expected**

No add/edit/delete control is present or functional in the UI for RM | Direct API write attempts return 403

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-059 — TM role — cannot act on competencies for departments they do not manage, and cannot act without selecting a department when managing multiple

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: TM — cannot act on unmanaged departments / cannot act without selecting a department |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the TM account (testUserPage)
2. Attempt to edit/delete a competency belonging to a department not managed by this TM
3. If this TM manages multiple departments, attempt add/edit/delete without first selecting a department

**Expected**

Cross-department action is denied (UI hides the control and/or API returns 403) | Action without department selection is blocked

**Automation Hint**

Use testUserPage fixture

#### TC-DEPTCMP-060 — EM role — cannot act on competencies for departments they do not manage, and cannot act without selecting a department when managing multiple

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: EM — cannot act on unmanaged departments / cannot act without selecting a department |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as an EM-role account
2. Attempt to edit/delete a competency belonging to a department not managed by this EM
3. If this EM manages multiple departments, attempt add/edit/delete without first selecting a department

**Expected**

Cross-department action is denied (UI hides the control and/or API returns 403) | Action without department selection is blocked

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-061 — RM session direct API call to create/update/delete a competency is rejected with 403

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios: RM session attempts a direct API call to create/update/delete a competency |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Authenticate as the RM stand-in account to obtain a valid session/token
2. Bypass the UI entirely and send a direct API request to create, update, and delete a competency in turn

**Expected**

All three direct API write requests are rejected with exactly 403, not merely hidden in the UI

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json Once a real RM account exists, automate via API request with RM auth token.

#### TC-DEPTCMP-062 — TM/EM cannot edit or delete a competency belonging to a department they do not manage (IDOR check)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenarios: TM/EM managing Department A attempts to edit/delete a competency belonging to Department B |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the TM account (testUserPage), which manages Department A
2. Identify a competency belonging to Department B (not managed by this TM)
3. Attempt to edit/delete that competency via UI navigation and, if the endpoint is known, via direct API request with Department B's competency ID

**Expected**

Action is denied — object-level authorization prevents cross-department writes; UI hides the control and/or API returns 403/404

**Automation Hint**

Use testUserPage fixture. EM-side equivalent cannot be independently verified — no dedicated EM test account provisioned.

#### TC-DEPTCMP-063 — XSS payload entered into the Description field is sanitized, not executed

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | securityScenarios: XSS payload entered into the Description free-text field |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add Competency, select Department and Goal
2. Enter '<script>alert("xss")</script>' into Description
3. Save and view the competency in the listing/detail view

**Expected**

Payload is rendered as literal escaped text; no script executes at any point

**Test Data**

- `payload`: <script>alert('xss')</script>

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-064 — Each role's permitted/forbidden Competency actions are enforced consistently at both UI and API level (role-scope assertion)

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | businessRules[testPattern=role-scope-assertion]: each role's permitted/forbidden Competency actions enforced at UI and API level |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Open two browser contexts: primaryPage (ceo@simformsolutions.com) + testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. For each role (RM, TM, EM, Admin), enumerate the permitted/forbidden actions per roleMatrix
2. For each forbidden action, verify the corresponding UI control is hidden/disabled AND the corresponding API call returns 403
3. For each permitted action, verify the corresponding UI control is present AND the corresponding API call succeeds

**Expected**

Every role's permitted and forbidden Competency actions match roleMatrix expectations at both UI and API level, with no gaps

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

#### TC-DEPTCMP-080 — RM (read-only role) can view competency records for their department while all write controls remain absent

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Regression: rbac (read-only role can view but not write) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as the RM stand-in account
2. Confirm competency records for the RM's department are visible
3. Confirm no write/delete control is present anywhere on the page

**Expected**

RM can view all competency records for their department | Every write/delete-type control is absent from the page

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json

### Smoke (3)

#### TC-DEPTCMP-001 — TM/EM/Admin adds a competency end-to-end and it appears in the listing

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Department → Competencies
2. Select Department 'Engineering'
3. Click 'Add competency'
4. Select Goal 'Improve Code Review Skills' from the Goal dropdown
5. Set Status = 'In progress', Priority = 'High', leave Description/Targeted Members/No of Employees at defaults
6. Click Save

**Expected**

New competency row appears in the Competencies Listing with correct Department Name, Competency Name, Status, Priority | No page reload was required for the row to appear

**Test Data**

- `department`: Engineering
- `goal`: Improve Code Review Skills
- `status`: In progress
- `priority`: High

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-002 — TM/EM/Admin edits an existing competency and the listing updates immediately

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

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Department → Competencies and locate an existing competency row
2. Click Edit Competency
3. Change Description, Targeted Members, No of Employees, Status, and Priority to new values
4. Click Save

**Expected**

Listing reflects the updated Description/Targeted Members/No of Employees/Status/Priority immediately without reload

**Test Data**

- `newDescription`: Updated description text
- `targetedMembers`: Selected
- `noOfEmployees`: 4
- `status`: Completed
- `priority`: Medium

**Automation Hint**

Use primaryPage fixture

#### TC-DEPTCMP-003 — RM opens the Competencies Listing and confirms no add/edit/delete controls are available

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @security |
| **Requirement Ref** | criticalPaths[2] |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Navigate to Department → Competencies as the RM stand-in account
2. Observe the Competencies Listing for the RM's department
3. Inspect the page for an 'Add competency' control and any row-level Edit/Delete affordance

**Expected**

Competencies for the RM's department are visible | No functional Add/Edit/Delete control is present or usable anywhere on the page

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-DEPTCMP-doc.json
