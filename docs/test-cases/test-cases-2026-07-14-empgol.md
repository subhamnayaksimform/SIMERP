# Goals — Test Cases

**Total test cases:** 104  
**Modules covered:** Goals  
**Source:** `reports/test-cases/cases-2026-07-14-EMPGOL.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 36 | 34.6% |
| boundary | 24 | 23.1% |
| regression | 16 | 15.4% |
| negative | 11 | 10.6% |
| security | 10 | 9.6% |
| integration | 4 | 3.8% |
| smoke | 3 | 2.9% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 54 | 51.9% |
| medium | 33 | 31.7% |
| critical | 12 | 11.5% |
| low | 5 | 4.8% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 56 | 53.8% |
| minor | 45 | 43.3% |
| critical | 3 | 2.9% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 83 | 79.8% |
| regression-derived | 21 | 20.2% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 77 | 74.0% |
| inferred | 12 | 11.5% |
| speculative | 9 | 8.7% |
| unverified-fallback | 6 | 5.8% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 91 | 87.5% |
| No | 13 | 12.5% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 41 | 39.4% |
| @regression | 32 | 30.8% |
| @boundary | 29 | 27.9% |
| @needs-verification | 27 | 26.0% |
| @negative | 19 | 18.3% |
| @security | 11 | 10.6% |
| @smoke | 3 | 2.9% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPGOL-001](#tc-empgol-001-admin-creates-a-new-goal-and-it-appears-in-goals-listing-sorted-by-allocated-employee-count-with-correct-counts) | Admin creates a new Goal and it appears in Goals Listing sorted by allocated-employee count with correct counts | Goals | smoke | critical |
| [TC-EMPGOL-002](#tc-empgol-002-tm-assigns-an-employee-to-an-existing-goal-and-the-change-reflects-immediately-in-goals-listing-counts-and-the-employee-s-employee-details-modal-profile-goals-tab) | TM assigns an employee to an existing Goal and the change reflects immediately in Goals Listing counts and the employee's Employee Details modal / profile Goals tab | Goals | smoke | critical |
| [TC-EMPGOL-003](#tc-empgol-003-deleting-a-goal-is-gated-by-the-assigned-employee-conditional-rules-and-removes-the-goal-entirely-from-the-database-when-allowed) | Deleting a Goal is gated by the assigned-employee conditional rules and removes the goal entirely from the database when allowed | Goals | smoke | critical |
| [TC-EMPGOL-004](#tc-empgol-004-goals-listing-displays-every-goal-for-admin-with-row-count-matching-the-api-total) | Goals Listing displays every goal for Admin with row count matching the API total | Goals | functional | high |
| [TC-EMPGOL-005](#tc-empgol-005-tm-s-goals-listing-shows-only-employees-within-their-managed-department-s-for-each-goal) | TM's Goals Listing shows only employees within their managed department(s) for each goal | Goals | functional | high |
| [TC-EMPGOL-006](#tc-empgol-006-rm-s-goals-listing-shows-only-their-own-team-s-members-for-each-goal) | RM's Goals Listing shows only their own team's members for each goal | Goals | functional | high |
| [TC-EMPGOL-007](#tc-empgol-007-goals-listing-default-view-no-filters-is-sorted-in-descending-order-of-allocated-employee-count) | Goals Listing default view (no filters) is sorted in descending order of allocated-employee count | Goals | functional | high |
| [TC-EMPGOL-008](#tc-empgol-008-rm-creates-a-new-goal-with-mandatory-fields-goal-name-goal-type) | RM creates a new goal with mandatory fields (Goal Name, Goal Type) | Goals | functional | high |
| [TC-EMPGOL-009](#tc-empgol-009-tm-creates-a-new-goal-with-mandatory-fields-goal-name-goal-type) | TM creates a new goal with mandatory fields (Goal Name, Goal Type) | Goals | functional | high |
| [TC-EMPGOL-010](#tc-empgol-010-em-creates-a-new-goal-with-mandatory-fields-goal-name-goal-type) | EM creates a new goal with mandatory fields (Goal Name, Goal Type) | Goals | functional | high |
| [TC-EMPGOL-011](#tc-empgol-011-admin-creates-a-new-goal-with-mandatory-fields-goal-name-goal-type) | Admin creates a new goal with mandatory fields (Goal Name, Goal Type) | Goals | functional | high |
| [TC-EMPGOL-012](#tc-empgol-012-manager-with-access-to-2-departments-filters-a-goal-s-employee-list-to-a-single-selected-department) | Manager with access to 2+ departments filters a goal's employee list to a single selected department | Goals | functional | medium |
| [TC-EMPGOL-013](#tc-empgol-013-fuzzy-search-in-add-goal-s-goal-name-field-surfaces-matching-existing-goals-with-their-assigned-employee-counts) | Fuzzy search in Add Goal's Goal Name field surfaces matching existing goals with their assigned-employee counts | Goals | functional | high |
| [TC-EMPGOL-014](#tc-empgol-014-selecting-an-existing-goal-from-the-fuzzy-search-suggestion-list-reuses-it-instead-of-creating-a-duplicate) | Selecting an existing goal from the fuzzy-search suggestion list reuses it instead of creating a duplicate | Goals | functional | high |
| [TC-EMPGOL-015](#tc-empgol-015-typing-a-goal-name-with-no-matching-suggestion-creates-a-new-goal-after-the-duplicate-check-warning-is-acknowledged) | Typing a goal name with no matching suggestion creates a new goal after the duplicate-check warning is acknowledged | Goals | functional | high |
| [TC-EMPGOL-016](#tc-empgol-016-duplicate-goal-warning-popup-shows-the-exact-specified-message-when-creating-a-new-goal) | Duplicate-goal warning popup shows the exact specified message when creating a new goal | Goals | functional | high |
| [TC-EMPGOL-017](#tc-empgol-017-immutability-notice-is-shown-below-the-goal-name-and-goal-type-fields-in-add-goal) | Immutability notice is shown below the Goal Name and Goal Type fields in Add Goal | Goals | functional | medium |
| [TC-EMPGOL-018](#tc-empgol-018-add-goal-fields-render-with-correct-types-goal-name-dropdown-goal-type-dropdown-technical-certificate-assign-to-multiselect-certificate-code-description) | Add Goal fields render with correct types: Goal Name dropdown, Goal Type dropdown (Technical/Certificate), Assign to multiselect, Certificate Code, Description | Goals | functional | high |
| [TC-EMPGOL-019](#tc-empgol-019-assign-to-multiselect-in-add-goal-offers-only-employees-the-admin-has-access-to-org-wide) | Assign to multiselect in Add Goal offers only employees the Admin has access to (org-wide) | Goals | functional | high |
| [TC-EMPGOL-020](#tc-empgol-020-certificate-code-field-is-enabled-only-when-goal-type-certificate) | Certificate Code field is enabled only when Goal Type = Certificate | Goals | functional | high |
| [TC-EMPGOL-021](#tc-empgol-021-description-field-in-add-goal-supports-rich-text-formatting) | Description field in Add Goal supports rich-text formatting | Goals | functional | medium |
| [TC-EMPGOL-022](#tc-empgol-022-department-dropdown-in-add-goal-shows-only-departments-managed-by-the-logged-in-tm-em-admin) | Department dropdown in Add Goal shows only departments managed by the logged-in TM/EM/Admin | Goals | functional | medium |
| [TC-EMPGOL-023](#tc-empgol-023-add-goal-opens-as-a-side-panel-when-the-add-goal-action-is-triggered) | Add Goal opens as a side panel when the 'Add Goal' action is triggered | Goals | functional | high |
| [TC-EMPGOL-024](#tc-empgol-024-creating-a-goal-with-no-employees-assigned-still-creates-the-goal-record-shown-with-0-0-counts) | Creating a goal with no employees assigned still creates the goal record, shown with 0/0 counts | Goals | functional | high |
| [TC-EMPGOL-025](#tc-empgol-025-after-creation-description-on-an-existing-goal-is-editable-and-persists) | After creation, Description on an existing goal is editable and persists | Goals | functional | high |
| [TC-EMPGOL-026](#tc-empgol-026-after-creation-certificate-code-on-an-existing-certificate-type-goal-is-editable-and-persists) | After creation, Certificate Code on an existing Certificate-type goal is editable and persists | Goals | functional | high |
| [TC-EMPGOL-027](#tc-empgol-027-after-creation-goal-name-and-goal-type-fields-are-not-editable) | After creation, Goal Name and Goal Type fields are not editable | Goals | functional | high |
| [TC-EMPGOL-028](#tc-empgol-028-assigned-employees-list-shown-when-admin-edits-a-goal-is-not-scope-restricted-org-wide) | Assigned Employees list shown when Admin edits a goal is not scope-restricted (org-wide) | Goals | functional | medium |
| [TC-EMPGOL-029](#tc-empgol-029-assigned-employees-list-shown-when-tm-edits-a-goal-is-restricted-to-their-managed-department-s) | Assigned Employees list shown when TM edits a goal is restricted to their managed department(s) | Goals | functional | medium |
| [TC-EMPGOL-030](#tc-empgol-030-goals-assigned-to-an-employee-are-visible-on-that-employee-s-employee-details-modal) | Goals assigned to an employee are visible on that employee's Employee Details modal | Goals | functional | high |
| [TC-EMPGOL-031](#tc-empgol-031-admin-edits-an-existing-goal-via-the-row-level-edit-option-on-the-goals-table) | Admin edits an existing goal via the row-level Edit option on the Goals table | Goals | functional | high |
| [TC-EMPGOL-032](#tc-empgol-032-editing-employees-assigned-to-a-goal-via-the-edit-flow-adds-and-removes-employees-correctly) | Editing employees assigned to a goal via the edit flow adds and removes employees correctly | Goals | functional | high |
| [TC-EMPGOL-033](#tc-empgol-033-rm-assigns-a-goal-to-an-employee-they-manage) | RM assigns a goal to an employee they manage | Goals | functional | high |
| [TC-EMPGOL-034](#tc-empgol-034-tm-assigns-a-goal-to-an-employee-within-their-managed-department) | TM assigns a goal to an employee within their managed department | Goals | functional | high |
| [TC-EMPGOL-035](#tc-empgol-035-em-assigns-a-goal-to-an-employee-within-their-managed-department) | EM assigns a goal to an employee within their managed department | Goals | functional | high |
| [TC-EMPGOL-036](#tc-empgol-036-admin-assigns-a-goal-to-any-employee-in-the-organization) | Admin assigns a goal to any employee in the organization | Goals | functional | high |
| [TC-EMPGOL-037](#tc-empgol-037-goals-assigned-to-the-logged-in-employee-are-visible-in-the-goals-tab-of-their-own-profile-page) | Goals assigned to the logged-in employee are visible in the Goals tab of their own profile page | Goals | functional | high |
| [TC-EMPGOL-038](#tc-empgol-038-switching-goal-type-from-certificate-to-technical-and-back-before-saving-toggles-certificate-code-enablement-correctly) | Switching Goal Type from Certificate to Technical and back before saving toggles Certificate Code enablement correctly | Goals | functional | medium |
| [TC-EMPGOL-039](#tc-empgol-039-admin-s-goal-employee-list-shows-employees-across-all-departments-org-wide-scope-unlike-rm-tm-em) | Admin's goal employee list shows employees across all departments (org-wide scope), unlike RM/TM/EM | Goals | functional | medium |
| [TC-EMPGOL-040](#tc-empgol-040-saving-a-new-goal-without-selecting-a-goal-name-is-blocked) | Saving a new goal without selecting a Goal Name is blocked | Goals | negative | medium |
| [TC-EMPGOL-041](#tc-empgol-041-saving-a-new-goal-without-selecting-a-goal-type-is-blocked) | Saving a new goal without selecting a Goal Type is blocked | Goals | negative | medium |
| [TC-EMPGOL-042](#tc-empgol-042-attempting-to-edit-goal-name-via-the-ui-on-an-already-created-goal-is-rejected) | Attempting to edit Goal Name via the UI on an already-created goal is rejected | Goals | negative | medium |
| [TC-EMPGOL-043](#tc-empgol-043-attempting-to-edit-goal-type-via-the-ui-on-an-already-created-goal-is-rejected) | Attempting to edit Goal Type via the UI on an already-created goal is rejected | Goals | negative | medium |
| [TC-EMPGOL-044](#tc-empgol-044-attempting-to-delete-a-goal-assigned-to-at-least-one-employee-is-blocked) | Attempting to delete a goal assigned to at least one employee is blocked | Goals | negative | high |
| [TC-EMPGOL-045](#tc-empgol-045-attempting-to-delete-a-goal-with-0-own-department-employees-but-assigned-elsewhere-is-blocked) | Attempting to delete a goal with 0 own-department employees but assigned elsewhere is blocked | Goals | negative | high |
| [TC-EMPGOL-046](#tc-empgol-046-rm-attempting-to-assign-a-goal-to-an-employee-outside-their-own-team-cannot-select-that-employee) | RM attempting to assign a goal to an employee outside their own team cannot select that employee | Goals | negative | high |
| [TC-EMPGOL-047](#tc-empgol-047-tm-attempting-to-assign-a-goal-to-an-employee-outside-their-managed-department-s-cannot-select-that-employee) | TM attempting to assign a goal to an employee outside their managed department(s) cannot select that employee | Goals | negative | high |
| [TC-EMPGOL-048](#tc-empgol-048-submitting-a-goal-name-containing-only-whitespace-is-rejected-as-empty) | Submitting a Goal Name containing only whitespace is rejected as empty | Goals | negative | medium |
| [TC-EMPGOL-049](#tc-empgol-049-special-characters-and-script-payloads-in-description-are-rejected-or-sanitized-not-executed) | Special characters and script payloads in Description are rejected or sanitized, not executed | Goals | negative | high |
| [TC-EMPGOL-050](#tc-empgol-050-attempting-to-create-a-goal-with-a-name-identical-to-an-existing-goal-via-direct-duplicate-entry-is-prevented) | Attempting to create a goal with a name identical to an existing goal via direct duplicate entry is prevented | Goals | negative | medium |
| [TC-EMPGOL-051](#tc-empgol-051-goal-with-0-department-assigned-and-0-organization-assigned-employees-is-removed-entirely-from-the-database) | Goal with 0 department-assigned and 0 organization-assigned employees is removed entirely from the database | Goals | boundary | high |
| [TC-EMPGOL-052](#tc-empgol-052-goal-with-0-employees-in-the-user-s-own-department-but-employees-assigned-elsewhere-has-delete-disabled) | Goal with 0 employees in the user's own department but employees assigned elsewhere has Delete disabled | Goals | boundary | high |
| [TC-EMPGOL-053](#tc-empgol-053-goal-assigned-to-exactly-one-employee-any-department-has-delete-disabled) | Goal assigned to exactly one employee (any department) has Delete disabled | Goals | boundary | high |
| [TC-EMPGOL-054](#tc-empgol-054-newly-created-goal-with-0-assigned-employees-has-delete-enabled) | Newly created goal with 0 assigned employees has Delete enabled | Goals | boundary | medium |
| [TC-EMPGOL-055](#tc-empgol-055-multi-department-manager-toggling-per-goal-single-department-view-at-the-boundary-of-exactly-2-departments) | Multi-department manager toggling per-goal single-department view at the boundary of exactly 2 departments | Goals | boundary | medium |
| [TC-EMPGOL-056](#tc-empgol-056-fuzzy-search-matches-a-goal-name-with-a-single-character-difference-and-still-triggers-the-duplicate-warning) | Fuzzy search matches a goal name with a single-character difference and still triggers the duplicate warning | Goals | boundary | medium |
| [TC-EMPGOL-057](#tc-empgol-057-rm-s-goal-employee-list-at-the-boundary-of-a-team-with-exactly-1-member) | RM's goal employee list at the boundary of a team with exactly 1 member | Goals | boundary | low |
| [TC-EMPGOL-058](#tc-empgol-058-tm-em-s-goal-employee-list-is-limited-strictly-to-their-own-managed-department-s-excluding-adjacent-departments) | TM/EM's goal employee list is limited strictly to their own managed department(s), excluding adjacent departments | Goals | boundary | medium |
| [TC-EMPGOL-059](#tc-empgol-059-two-or-more-goals-with-an-identical-allocated-employee-count-both-appear-in-the-listing-without-one-displacing-the-other) | Two or more goals with an identical allocated-employee count both appear in the listing without one displacing the other | Goals | boundary | low |
| [TC-EMPGOL-060](#tc-empgol-060-editing-assigned-employees-on-a-goal-originally-created-by-a-differently-scoped-user-offers-only-the-current-editor-s-accessible-employees) | Editing Assigned Employees on a goal originally created by a differently-scoped user offers only the current editor's accessible employees | Goals | boundary | medium |
| [TC-EMPGOL-061](#tc-empgol-061-rm-s-assign-to-field-on-add-goal-excludes-employees-outside-the-rm-s-own-team-at-the-field-level) | RM's Assign to field on Add Goal excludes employees outside the RM's own team at the field level | Goals | boundary | medium |
| [TC-EMPGOL-062](#tc-empgol-062-department-assigned-organization-assigned-and-sort-driving-allocated-counts-reconcile-with-the-api-response-for-a-given-goal) | Department-assigned, organization-assigned, and sort-driving allocated counts reconcile with the API response for a given goal | Goals | boundary | high |
| [TC-EMPGOL-063](#tc-empgol-063-a-confirmation-step-precedes-the-automatic-db-level-removal-path-triggered-by-unassigning-a-goal-s-last-employee) | A confirmation step precedes the automatic DB-level removal path triggered by unassigning a goal's last employee | Goals | boundary | medium |
| [TC-EMPGOL-064](#tc-empgol-064-goal-name-field-accepts-a-value-at-the-maximum-documented-length-without-truncation) | Goal Name field accepts a value at the maximum documented length without truncation | Goals | boundary | low |
| [TC-EMPGOL-065](#tc-empgol-065-description-field-accepts-a-value-one-character-beyond-an-assumed-maximum-length) | Description field accepts a value one character beyond an assumed maximum length | Goals | boundary | low |
| [TC-EMPGOL-066](#tc-empgol-066-certificate-code-field-accepts-an-empty-value-when-goal-type-certificate-field-is-optional) | Certificate Code field accepts an empty value when Goal Type = Certificate (field is optional) | Goals | boundary | medium |
| [TC-EMPGOL-067](#tc-empgol-067-assign-to-field-accepts-0-selections-field-is-optional-on-add-goal) | Assign to field accepts 0 selections (field is optional) on Add Goal | Goals | boundary | medium |
| [TC-EMPGOL-068](#tc-empgol-068-goal-type-dropdown-offers-exactly-the-two-documented-values-no-others) | Goal Type dropdown offers exactly the two documented values, no others | Goals | boundary | medium |
| [TC-EMPGOL-069](#tc-empgol-069-assigning-an-employee-to-a-goal-increments-the-assigned-count-by-exactly-1-in-both-ui-and-api) | Assigning an employee to a goal increments the assigned count by exactly 1 in both UI and API | Goals | boundary | high |
| [TC-EMPGOL-070](#tc-empgol-070-deallocating-unassigning-an-employee-from-a-goal-decrements-the-assigned-count-by-exactly-1-in-both-ui-and-api) | Deallocating (unassigning) an employee from a goal decrements the assigned count by exactly 1 in both UI and API | Goals | boundary | high |
| [TC-EMPGOL-071](#tc-empgol-071-newly-created-goal-is-present-in-the-goals-listing-after-a-full-page-refresh-f5) | Newly created goal is present in the Goals Listing after a full page refresh (F5) | Goals | boundary | high |
| [TC-EMPGOL-072](#tc-empgol-072-updated-description-certificate-code-values-on-a-goal-are-correct-after-a-full-page-refresh-f5) | Updated Description/Certificate Code values on a goal are correct after a full page refresh (F5) | Goals | boundary | high |
| [TC-EMPGOL-073](#tc-empgol-073-a-deleted-auto-removed-goal-is-absent-from-the-active-list-immediately-no-page-refresh-required) | A deleted/auto-removed goal is absent from the active list immediately — no page refresh required | Goals | boundary | high |
| [TC-EMPGOL-074](#tc-empgol-074-record-count-on-goals-listing-and-the-api-total-field-are-equal-immediately-after-creating-a-goal) | Record count on Goals Listing and the API total field are equal immediately after creating a goal | Goals | boundary | high |
| [TC-EMPGOL-075](#tc-empgol-075-assign-to-multiselect-never-offers-employees-outside-the-logged-in-user-s-access-scope) | Assign to multiselect never offers employees outside the logged-in user's access scope | Goals | security | critical |
| [TC-EMPGOL-076](#tc-empgol-076-rm-cannot-assign-a-goal-to-an-employee-outside-their-own-team-ui-and-api) | RM cannot assign a goal to an employee outside their own team (UI and API) | Goals | security | critical |
| [TC-EMPGOL-077](#tc-empgol-077-tm-em-cannot-assign-a-goal-to-an-employee-outside-their-managed-department-s-ui-and-api) | TM/EM cannot assign a goal to an employee outside their managed department(s) (UI and API) | Goals | security | critical |
| [TC-EMPGOL-078](#tc-empgol-078-admin-can-assign-goals-to-any-employee-across-the-organization) | Admin can assign goals to any employee across the organization | Goals | security | high |
| [TC-EMPGOL-079](#tc-empgol-079-direct-api-attempt-to-edit-goal-name-or-goal-type-on-an-existing-goal-is-rejected-server-side) | Direct API attempt to edit Goal Name or Goal Type on an existing goal is rejected server-side | Goals | security | critical |
| [TC-EMPGOL-080](#tc-empgol-080-direct-api-attempt-to-delete-a-goal-with-assigned-employees-is-rejected) | Direct API attempt to delete a goal with assigned employees is rejected | Goals | security | critical |
| [TC-EMPGOL-081](#tc-empgol-081-xss-payload-in-the-description-rich-text-field-is-sanitized-everywhere-it-is-rendered) | XSS payload in the Description rich-text field is sanitized everywhere it is rendered | Goals | security | critical |
| [TC-EMPGOL-082](#tc-empgol-082-employee-role-cannot-create-edit-assign-or-delete-goals-no-write-controls-are-exposed) | Employee role cannot create, edit, assign, or delete goals — no write controls are exposed | Goals | security | high |
| [TC-EMPGOL-083](#tc-empgol-083-restricted-role-cannot-access-another-employee-s-or-department-s-goal-scoped-data-by-manipulating-a-goal-employee-id-in-the-url-or-request-idor) | Restricted role cannot access another employee's or department's goal-scoped data by manipulating a goal/employee ID in the URL or request (IDOR) | Goals | security | critical |
| [TC-EMPGOL-084](#tc-empgol-084-each-role-s-forbidden-goal-actions-are-enforced-at-both-ui-control-hidden-disabled-and-api-403-level-not-merely-ui-restricted) | Each role's forbidden goal actions are enforced at both UI (control hidden/disabled) and API (403) level, not merely UI-restricted | Goals | security | critical |
| [TC-EMPGOL-085](#tc-empgol-085-goals-listing-re-sorts-and-refreshes-immediately-after-an-assignment-change-without-a-page-reload) | Goals Listing re-sorts and refreshes immediately after an assignment change, without a page reload | Goals | regression | high |
| [TC-EMPGOL-086](#tc-empgol-086-double-clicking-save-on-add-goal-in-quick-succession-creates-exactly-one-goal-record) | Double-clicking Save on Add Goal in quick succession creates exactly one goal record | Goals | regression | critical |
| [TC-EMPGOL-087](#tc-empgol-087-regression-a-change-to-a-goal-in-this-module-is-reflected-correctly-in-employee-details-affected-module) | Regression: A change to a goal in this module is reflected correctly in Employee Details (affected module) | Goals | regression | high |
| [TC-EMPGOL-088](#tc-empgol-088-regression-department-dropdown-per-goal-department-toggle-and-delete-eligibility-logic-depend-on-accurate-department-manager-mappings-department-settings) | Regression: Department dropdown, per-goal department toggle, and delete-eligibility logic depend on accurate department-manager mappings (Department Settings) | Goals | regression | medium |
| [TC-EMPGOL-089](#tc-empgol-089-regression-rm-tm-em-admin-role-definitions-from-roles-permissions-correctly-gate-goal-create-assign-edit-delete-actions) | Regression: RM/TM/EM/Admin role definitions from Roles & Permissions correctly gate Goal create/assign/edit/delete actions | Goals | regression | medium |
| [TC-EMPGOL-090](#tc-empgol-090-ui-displayed-goal-values-match-the-corresponding-api-response-after-save) | UI-displayed goal values match the corresponding API response after save | Goals | regression | high |
| [TC-EMPGOL-091](#tc-empgol-091-success-toast-appears-after-creating-editing-or-deleting-a-goal-and-names-the-goal) | Success toast appears after creating, editing, or deleting a goal and names the goal | Goals | regression | medium |
| [TC-EMPGOL-092](#tc-empgol-092-error-toast-not-a-raw-stack-trace-appears-when-a-goal-server-operation-fails) | Error toast (not a raw stack trace) appears when a goal server operation fails | Goals | regression | medium |
| [TC-EMPGOL-093](#tc-empgol-093-a-confirmation-dialog-appears-before-deleting-a-goal-and-dismissing-it-cancels-the-deletion-with-no-change-made) | A confirmation dialog appears before deleting a goal, and dismissing it cancels the deletion with no change made | Goals | regression | high |
| [TC-EMPGOL-094](#tc-empgol-094-empty-state-message-is-shown-when-the-goals-listing-has-no-records-matching-the-current-filter) | Empty-state message is shown when the Goals Listing has no records matching the current filter | Goals | regression | medium |
| [TC-EMPGOL-095](#tc-empgol-095-goals-listing-table-reflects-a-create-update-delete-change-without-a-manual-page-reload) | Goals Listing table reflects a Create/Update/Delete change without a manual page reload | Goals | regression | high |
| [TC-EMPGOL-096](#tc-empgol-096-browser-refresh-mid-way-through-filling-the-add-goal-side-panel-does-not-submit-partial-data-or-corrupt-existing-records) | Browser refresh mid-way through filling the Add Goal side panel does not submit partial data or corrupt existing records | Goals | regression | medium |
| [TC-EMPGOL-097](#tc-empgol-097-clicking-save-3x-rapidly-on-add-goal-results-in-exactly-one-goal-record-not-multiple) | Clicking Save 3x rapidly on Add Goal results in exactly one goal record, not multiple | Goals | regression | medium |
| [TC-EMPGOL-098](#tc-empgol-098-a-500-server-error-while-saving-a-goal-shows-a-user-friendly-error-message-not-a-raw-stack-trace) | A 500 server error while saving a goal shows a user-friendly error message, not a raw stack trace | Goals | regression | medium |
| [TC-EMPGOL-099](#tc-empgol-099-session-expiry-http-401-while-on-the-goals-page-returns-the-user-to-the-login-page-without-data-loss) | Session expiry (HTTP 401) while on the Goals page returns the user to the login page without data loss | Goals | regression | medium |
| [TC-EMPGOL-100](#tc-empgol-100-auto-save-draft-behavior-on-the-add-goal-side-panel-navigating-away-and-returning-shows-no-duplicated-or-lost-draft-state) | Auto-save/draft behavior on the Add Goal side panel: navigating away and returning shows no duplicated or lost draft state | Goals | regression | low |
| [TC-EMPGOL-101](#tc-empgol-101-integration-goal-assignment-edit-delete-is-reflected-in-employee-details-modal-and-profile-goals-tab-without-reopening-or-reloading) | Integration — Goal assignment/edit/delete is reflected in Employee Details modal and profile Goals tab without reopening or reloading | Goals | integration | high |
| [TC-EMPGOL-102](#tc-empgol-102-integration-department-dropdown-per-goal-department-toggle-delete-eligibility-logic-in-goals-matches-department-settings-department-manager-mappings) | Integration — Department dropdown / per-goal department toggle / delete-eligibility logic in Goals matches Department Settings' department-manager mappings | Goals | integration | high |
| [TC-EMPGOL-103](#tc-empgol-103-integration-roles-permissions-role-definitions-correctly-gate-goal-create-assign-edit-delete-actions-for-rm-tm-em-admin) | Integration — Roles & Permissions role definitions correctly gate Goal create/assign/edit/delete actions for RM/TM/EM/Admin | Goals | integration | high |
| [TC-EMPGOL-104](#tc-empgol-104-integration-employee-count-consistency-across-the-goals-card-summary-the-listing-and-the-api-response-after-an-assignment-change) | Integration — Employee count consistency across the Goals card/summary, the listing, and the API response after an assignment change | Goals | integration | high |

---

## Goals

104 test cases.

### Boundary (24)

#### TC-EMPGOL-051 — Goal with 0 department-assigned and 0 organization-assigned employees is removed entirely from the database

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases: Goal with zero department-assigned and zero organization-assigned employees is removed entirely from the database. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Ensure a goal has 0 department-assigned and 0 organization-assigned employees (unassign the last employee if needed)
3. Refresh the Goals Listing

**Expected**

The goal no longer appears anywhere in the Goals Listing after the triggering condition (removed from the database)

**Test Data**

- `goalName`: Fully Unassigned Goal

**Automation Hint**

UI can confirm the goal disappears from the listing; true DB-level removal vs. soft-delete requires backend/API verification beyond UI assertions.

#### TC-EMPGOL-052 — Goal with 0 employees in the user's own department but employees assigned elsewhere has Delete disabled

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative |
| **Requirement Ref** | edgeCases: Goal has zero employees assigned within the user's own department but is used by employees of other departments. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Locate a goal with 0 employees in punit's own department but assigned to employees of a different department
3. Observe the Delete option

**Expected**

Delete option is disabled for this goal, even though the count is 0 for the user's own department

#### TC-EMPGOL-053 — Goal assigned to exactly one employee (any department) has Delete disabled

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @negative |
| **Requirement Ref** | edgeCases: Goal is assigned to at least one employee (any department) — Delete option is disabled and deletion is blocked entirely. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Locate a goal assigned to exactly 1 employee
3. Observe the Delete option

**Expected**

Delete option is disabled and deletion is blocked entirely

#### TC-EMPGOL-054 — Newly created goal with 0 assigned employees has Delete enabled

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Delete enabled for a newly created goal with 0 assigned employees. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Create a new goal with 0 assigned employees
3. Observe the Delete option for the new goal
4. Click Delete and confirm

**Expected**

Delete control is enabled; deleting removes the goal from the listing

**Test Data**

- `goalName`: Freshly Created Zero-Assignment Goal

#### TC-EMPGOL-055 — Multi-department manager toggling per-goal single-department view at the boundary of exactly 2 departments

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: User with access to multiple departments toggles the per-goal department filter. |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires a TM/EM account confirmed to manage 2+ departments (see unclear)

**Steps**

1. Log in as a manager with exactly 2 managed departments
2. Open a goal assigned to employees in both departments
3. Toggle the per-goal department filter to each of the 2 departments in turn

**Expected**

Employee list narrows correctly for each of the 2 departments; toggling off restores the combined list

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-056 — Fuzzy search matches a goal name with a single-character difference and still triggers the duplicate warning

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Fuzzy search for Goal Name returns an existing goal with a very similar (not identical) name. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type 'NodeJS Basics' (differs from existing 'Node.js Basics' by punctuation only)

**Expected**

The near-identical existing goal appears as a fuzzy-search suggestion, and the duplicate-goal warning popup appears if the user proceeds to create a new goal instead of selecting it

**Test Data**

- `existing`: Node.js Basics
- `typed`: NodeJS Basics

#### TC-EMPGOL-057 — RM's goal employee list at the boundary of a team with exactly 1 member

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: RM views a goal's employee list — only members of their own team are visible. |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM managing exactly 1 team member
2. Open a goal assigned to that member and to other employees org-wide
3. Observe the employee list for the goal

**Expected**

Only the single team member is visible; no other org-wide assignees leak into the RM's view

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-058 — TM/EM's goal employee list is limited strictly to their own managed department(s), excluding adjacent departments

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: TM/EM views a goal's employee list — only employees belonging to their own managed department(s) are visible. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Open a goal assigned to employees in punit's department and in an adjacent department
3. Observe the employee list for the goal

**Expected**

Only employees of punit's managed department(s) are listed

#### TC-EMPGOL-059 — Two or more goals with an identical allocated-employee count both appear in the listing without one displacing the other

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | edgeCases: Multiple goals have an identical number of allocated employees — sort order/stability for tied counts is unspecified. |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Identify or create two goals with an identical allocated-employee count
3. Observe both goals in the Goals Listing

**Expected**

Both goals are present in the listing; relative order between tied goals is stable across a page refresh (exact tie-break rule is unconfirmed — only assert stability, not a specific order)

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Tie-break ordering is unspecified in the source.

#### TC-EMPGOL-060 — Editing Assigned Employees on a goal originally created by a differently-scoped user offers only the current editor's accessible employees

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: TM/EM/Admin edits the Assigned Employees list on an existing goal — the employee list offered is scoped to the current editor's access. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Open the edit panel for a goal originally created by Admin (org-wide scope)
3. Open Assigned Employees selector

**Expected**

Only employees within punit's managed department(s) are offered, regardless of the goal's original creator's broader scope

#### TC-EMPGOL-061 — RM's Assign to field on Add Goal excludes employees outside the RM's own team at the field level

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases: Assign to field on Add Goal is limited to employees the creating user has access to. |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM
2. Click 'Add Goal'
3. Open the Assign to multiselect and search for an employee outside the RM's own team

**Expected**

No matching option is returned for that employee

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-062 — Department-assigned, organization-assigned, and sort-driving allocated counts reconcile with the API response for a given goal

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | businessRules: Employee counts shown for a goal must always reconcile with each other and with the underlying API response. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Note a goal's department-assigned count, organization-assigned count, and displayed sort position
3. Call the corresponding goals API endpoint directly
4. Compare all three UI values against the API response

**Expected**

Department-assigned count, organization-assigned count, and sort-position-driving count in the UI exactly match the API response

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. API endpoint for goals is unconfirmed (see apiEndpoints[] in req-2026-07-14-EMPGOL-doc.json) — use whatever endpoint is discovered via network interception if a documented one is unavailable.

#### TC-EMPGOL-063 — A confirmation step precedes the automatic DB-level removal path triggered by unassigning a goal's last employee

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | businessRules: Any destructive action on a goal must be preceded by a confirmation step before executing. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open a goal with exactly 1 assigned employee (its last one)
3. Unassign that employee via the edit flow

**Expected**

A confirmation step is presented before the goal is auto-removed from the database as a result of reaching 0/0 assignment

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Whether a confirmation dialog exists for this auto-removal path is not stated in the source.

#### TC-EMPGOL-064 — Goal Name field accepts a value at the maximum documented length without truncation

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Enter a 100-character Goal Name (assumed max length; unconfirmed in source)
4. Save

**Expected**

The full value is accepted and displayed without truncation, or a documented max-length error appears if the app enforces a shorter limit

**Test Data**

- `goalNameMaxLength`: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. No max length for Goal Name is documented in the source; 100 chars is an assumed probe value.

#### TC-EMPGOL-065 — Description field accepts a value one character beyond an assumed maximum length

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Enter a 5001-character Description (assumed max 5000; unconfirmed in source)
4. Save

**Expected**

Either the value is accepted in full, or a max-length validation error is shown — no server error or silent truncation

**Test Data**

- `descriptionLength`: 5001

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. No documented max length for Description in the source.

#### TC-EMPGOL-066 — Certificate Code field accepts an empty value when Goal Type = Certificate (field is optional)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules: Certificate Code — optional field. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Select Goal Type = 'Certificate'
4. Leave Certificate Code empty
5. Save

**Expected**

Goal is created successfully with no Certificate Code value (field is optional per spec)

#### TC-EMPGOL-067 — Assign to field accepts 0 selections (field is optional) on Add Goal

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules: Assign to — optional multiselect checkbox. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Fill only Goal Name and Goal Type, select 0 employees in Assign to
4. Save

**Expected**

Goal is created successfully with 0 assigned employees

#### TC-EMPGOL-068 — Goal Type dropdown offers exactly the two documented values, no others

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules: Goal Type — allowed values Technical, Certificate. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Open the Goal Type dropdown

**Expected**

Exactly 'Technical' and 'Certificate' are offered; no undocumented third value is present

#### TC-EMPGOL-069 — Assigning an employee to a goal increments the assigned count by exactly 1 in both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Assignment / Deallocation: Assigned count increments by 1 in both UI and API. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Note a goal's current assigned count via UI and API
3. Assign one additional employee
4. Re-check the count via UI and API

**Expected**

The count increments by exactly 1 in both the UI and the API response

#### TC-EMPGOL-070 — Deallocating (unassigning) an employee from a goal decrements the assigned count by exactly 1 in both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Assignment / Deallocation: Deallocated count decrements by 1 in both UI and API. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Note a goal's current assigned count via UI and API
3. Unassign one employee via the edit flow
4. Re-check the count via UI and API

**Expected**

The count decrements by exactly 1 in both the UI and the API response

#### TC-EMPGOL-071 — Newly created goal is present in the Goals Listing after a full page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Regression: data-integrity — Create → present after F5. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Create a new goal
3. Perform a full page refresh (F5)

**Expected**

The newly created goal is still present in the Goals Listing after the refresh

**Test Data**

- `goalName`: Refresh Persistence Goal

#### TC-EMPGOL-072 — Updated Description/Certificate Code values on a goal are correct after a full page refresh (F5)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Regression: data-integrity — Update → correct after F5. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Edit and save a goal's Description and Certificate Code
3. Perform a full page refresh (F5)
4. Reopen the goal's edit panel

**Expected**

Description and Certificate Code values remain exactly as saved after the refresh

#### TC-EMPGOL-073 — A deleted/auto-removed goal is absent from the active list immediately — no page refresh required

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Regression: data-integrity — Delete → absent from active list without refresh. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Delete a 0-assignment goal
3. Observe the Goals Listing immediately, without refreshing

**Expected**

The deleted goal is absent from the active list immediately, with no manual refresh required

#### TC-EMPGOL-074 — Record count on Goals Listing and the API total field are equal immediately after creating a goal

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — record count parity across list and API total. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Note the current goal count in the listing and via the API total field
3. Create a new goal
4. Re-check both counts

**Expected**

The listing's displayed goal count and the API's total field are equal both before and after the creation

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

### Functional (36)

#### TC-EMPGOL-004 — Goals Listing displays every goal for Admin with row count matching the API total

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: All goals are visible in the Goals Listing. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to Employee → Goals
3. Observe the Goals Listing

**Expected**

All goals are visible; the number of rows equals the API's total goal count

#### TC-EMPGOL-005 — TM's Goals Listing shows only employees within their managed department(s) for each goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: All employees associated with a goal are visible, except employees the logged-in user does not have access permissions to view. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Navigate to Employee → Goals
3. Open the employee list for a goal assigned to employees in both punit's department and another department

**Expected**

Only employees within punit.patel@simformsolutions.com's managed department(s) are listed; employees outside that scope are not visible even though the goal's organization-level count is higher

#### TC-EMPGOL-006 — RM's Goals Listing shows only their own team's members for each goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: All employees associated with a goal are visible, except employees the logged-in user does not have access permissions to view. |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM
2. Navigate to Employee → Goals
3. Open the employee list for a goal with members both inside and outside the RM's team

**Expected**

Only the RM's own team members are visible for the goal, even though the goal's total organization-level count is higher

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-007 — Goals Listing default view (no filters) is sorted in descending order of allocated-employee count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Goals are sorted in descending order of number of people allocated to the goal. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to Employee → Goals
3. Read the allocated-employee count column top to bottom

**Expected**

Counts are in strictly descending order (ties permitted); no goal appears out of order

#### TC-EMPGOL-008 — RM creates a new goal with mandatory fields (Goal Name, Goal Type)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: New goals can be added by RM, TM, EM, and Admin. |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM
2. Navigate to Employee → Goals
3. Click 'Add Goal'
4. Fill Goal Name and Goal Type
5. Click Save

**Expected**

Goal is created successfully and appears in Goals Listing

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-009 — TM creates a new goal with mandatory fields (Goal Name, Goal Type)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: New goals can be added by RM, TM, EM, and Admin. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Navigate to Employee → Goals
3. Click 'Add Goal'
4. Fill Goal Name = 'TM Created Goal', Goal Type = 'Technical'
5. Click Save

**Expected**

Goal is created successfully and appears in Goals Listing

**Test Data**

- `goalName`: TM Created Goal
- `goalType`: Technical

#### TC-EMPGOL-010 — EM creates a new goal with mandatory fields (Goal Name, Goal Type)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: New goals can be added by RM, TM, EM, and Admin. |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated EM test account (see unclear)

**Steps**

1. Log in as an EM
2. Navigate to Employee → Goals
3. Click 'Add Goal'
4. Fill Goal Name and Goal Type
5. Click Save

**Expected**

Goal is created successfully and appears in Goals Listing

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-011 — Admin creates a new goal with mandatory fields (Goal Name, Goal Type)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: New goals can be added by RM, TM, EM, and Admin. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to Employee → Goals
3. Click 'Add Goal'
4. Fill Goal Name = 'Admin Created Goal', Goal Type = 'Certificate', Certificate Code = 'CERT-ADM-01'
5. Click Save

**Expected**

Goal is created successfully and appears in Goals Listing with the Certificate Code saved

**Test Data**

- `goalName`: Admin Created Goal
- `goalType`: Certificate
- `certificateCode`: CERT-ADM-01

#### TC-EMPGOL-012 — Manager with access to 2+ departments filters a goal's employee list to a single selected department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: If the logged-in user has access to multiple departments, an option exists to view employees of only one selected department, per goal. |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires a TM/EM account confirmed to manage 2+ departments (see unclear)

**Steps**

1. Log in as a manager with 2+ managed departments
2. Open a goal with employees assigned across those departments
3. Select one department from the per-goal department filter

**Expected**

Employee list for the goal narrows to the selected department only; clearing the selection restores the full multi-department list

**Automation Hint**

MANUAL — punit.patel@simformsolutions.com's managed department count is unconfirmed; requires provisioning per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-013 — Fuzzy search in Add Goal's Goal Name field surfaces matching existing goals with their assigned-employee counts

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: In Add Goal, the user can search a goal name with fuzzy search support; relevant existing goals appear based on the input, along with the number of employees assigned to each. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type 'Node' into the Goal Name field

**Expected**

Goals matching 'Node' (e.g. 'NodeJS Basics') appear as suggestions, each showing its current assigned-employee count

**Test Data**

- `typedText`: Node

#### TC-EMPGOL-014 — Selecting an existing goal from the fuzzy-search suggestion list reuses it instead of creating a duplicate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: If the goal already exists, the user selects it from the suggested list; if it does not exist, a new goal is created. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type 'React Cert' into Goal Name
4. Select 'React Certification' from the suggestion list
5. Complete and Save

**Expected**

The existing 'React Certification' goal record is reused (its employee count reflects the new assignment); no second 'React Certification' goal is created

**Test Data**

- `goalName`: React Certification

#### TC-EMPGOL-015 — Typing a goal name with no matching suggestion creates a new goal after the duplicate-check warning is acknowledged

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: If the goal already exists, the user selects it from the suggested list; if it does not exist, a new goal is created. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type 'Fully Unique Goal Name XYZ' into Goal Name (no suggestions appear)
4. Acknowledge the duplicate-goal warning popup
5. Fill Goal Type and Save

**Expected**

A new goal record 'Fully Unique Goal Name XYZ' is created and appears in Goals Listing

**Test Data**

- `goalName`: Fully Unique Goal Name XYZ

#### TC-EMPGOL-016 — Duplicate-goal warning popup shows the exact specified message when creating a new goal

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: If the user is creating a new goal, a popup warning is shown. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type 'NodeJS Basics' (fuzzy-similar to existing 'Node.js Basics')
4. Proceed towards creating a new goal rather than selecting the suggestion

**Expected**

A popup appears with the text: "Before creating a new goal, please check whether a similar goal already exists. Create a new goal only if no existing goal matches your requirement."

**Test Data**

- `goalName`: NodeJS Basics
- `similarExisting`: Node.js Basics

#### TC-EMPGOL-017 — Immutability notice is shown below the Goal Name and Goal Type fields in Add Goal

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | AC: Below the Goal Name and Goal Type fields in Add Goal, a message is shown that these field values cannot be edited once added. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Observe the area below the Goal Name and Goal Type fields

**Expected**

A message is shown indicating these field values cannot be edited once added

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert the generic presence of helper text below the two fields by role/text-contains, not an exact copy string — exact wording is unconfirmed (see unclear[]).

#### TC-EMPGOL-018 — Add Goal fields render with correct types: Goal Name dropdown, Goal Type dropdown (Technical/Certificate), Assign to multiselect, Certificate Code, Description

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Goal fields: Goal Name, Goal Type, Assign to, Certificate Code, Description. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Inspect each field in the side panel

**Expected**

Goal Name is a mandatory dropdown with fuzzy search; Goal Type is a mandatory dropdown offering exactly 'Technical' and 'Certificate'; Assign to is an optional multiselect checkbox; Certificate Code is optional/conditional; Description is an optional rich-text textbox

#### TC-EMPGOL-019 — Assign to multiselect in Add Goal offers only employees the Admin has access to (org-wide)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Goal fields: Assign to (Optional, Multiselect Checkbox, restricted to employees the user has access to). |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Open the Assign to multiselect

**Expected**

All organization employees are selectable (Admin has full access)

#### TC-EMPGOL-020 — Certificate Code field is enabled only when Goal Type = Certificate

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | AC: Certificate Code (Optional, Conditional — enabled only when Goal Type = Certificate). |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Select Goal Type = 'Technical'
4. Observe Certificate Code field
5. Change Goal Type to 'Certificate'
6. Observe Certificate Code field again

**Expected**

Certificate Code is disabled/non-interactable when Goal Type = Technical; it becomes enabled/interactable when Goal Type = Certificate

#### TC-EMPGOL-021 — Description field in Add Goal supports rich-text formatting

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Description (Optional, Textbox, rich text supported). |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. In Description, apply bold and a bullet list to sample text
4. Save the goal
5. Reopen the goal's edit panel

**Expected**

Rich-text formatting (bold, bullet list) is preserved and rendered correctly on reopen

#### TC-EMPGOL-022 — Department dropdown in Add Goal shows only departments managed by the logged-in TM/EM/Admin

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | AC: A Department dropdown should be added showing only the departments managed by the logged-in user. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Click 'Add Goal'
3. Open the Department dropdown (if present)

**Expected**

Only the departments managed by punit.patel@simformsolutions.com are listed

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. This is a proposed addition per the requirements doc, not a confirmed existing control; skip/xfail if the Department dropdown does not exist yet in the current build.

#### TC-EMPGOL-023 — Add Goal opens as a side panel when the 'Add Goal' action is triggered

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add Goal opens as a side panel triggered by an 'Add Goal' action. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to Employee → Goals
3. Click 'Add Goal'

**Expected**

A side panel opens containing the Add Goal form fields

#### TC-EMPGOL-024 — Creating a goal with no employees assigned still creates the goal record, shown with 0/0 counts

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | AC: If the user does not assign any employees while creating the goal, the goal is still created and appears in the table showing '0'/'0'. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Fill Goal Name and Goal Type only, leave Assign to empty
4. Click Save

**Expected**

Goal is created and appears in the table showing '0' for department-assigned and '0' for organization-assigned employees

**Test Data**

- `goalName`: No Assignees Goal
- `goalType`: Technical

#### TC-EMPGOL-025 — After creation, Description on an existing goal is editable and persists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: After goal creation, only Description (rich text), Certificate Code, and Assigned Employees remain editable. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for an existing goal
3. Update Description text
4. Click Save
5. Reopen the goal's edit panel

**Expected**

Description reflects the updated text on reopen

#### TC-EMPGOL-026 — After creation, Certificate Code on an existing Certificate-type goal is editable and persists

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: After goal creation, only Description (rich text), Certificate Code, and Assigned Employees remain editable. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for 'React Certification' (Goal Type = Certificate)
3. Update Certificate Code to 'CERT-2026-EDIT'
4. Click Save
5. Reopen the goal's edit panel

**Expected**

Certificate Code reflects 'CERT-2026-EDIT' on reopen

**Test Data**

- `goalName`: React Certification
- `newCertificateCode`: CERT-2026-EDIT

#### TC-EMPGOL-027 — After creation, Goal Name and Goal Type fields are not editable

| Field | Value |
| --- | --- |
| **Tags** | @functional, @negative |
| **Requirement Ref** | AC: Goal Name and Goal Type are not editable once added. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for an existing goal
3. Attempt to change Goal Name and Goal Type

**Expected**

Goal Name and Goal Type fields are disabled/read-only in the edit panel; no change is possible

#### TC-EMPGOL-028 — Assigned Employees list shown when Admin edits a goal is not scope-restricted (org-wide)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: The Assigned Employees list shown when editing a goal is scoped to the access the logged-in user has. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for an existing goal
3. Open Assigned Employees selector

**Expected**

All organization employees are available for selection

#### TC-EMPGOL-029 — Assigned Employees list shown when TM edits a goal is restricted to their managed department(s)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: The Assigned Employees list shown when editing a goal is scoped to the access the logged-in user has. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Open the edit panel for a goal within scope
3. Open Assigned Employees selector

**Expected**

Only employees within punit.patel@simformsolutions.com's managed department(s) are selectable, even if the goal was originally created by a different-scoped user

#### TC-EMPGOL-030 — Goals assigned to an employee are visible on that employee's Employee Details modal

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: Goals are visible on the employee's details modal. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to Employee → Employee Details
3. Open the details modal for an employee with assigned goals

**Expected**

The assigned goals list appears in the details modal and matches the Goals Listing data for that employee

#### TC-EMPGOL-031 — Admin edits an existing goal via the row-level Edit option on the Goals table

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: The user can edit an existing goal via an edit option on the table. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Navigate to Employee → Goals
3. Click the Edit option on an existing goal row

**Expected**

The edit panel opens pre-populated with the goal's current editable field values

#### TC-EMPGOL-032 — Editing employees assigned to a goal via the edit flow adds and removes employees correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: The user can edit the employees assigned to the goal (subject to the editable-fields rule). |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for a goal
3. Add one employee and remove one existing employee in Assigned Employees
4. Click Save

**Expected**

The goal's assigned-employee count reflects exactly one net addition/removal as specified; both changes persist

#### TC-EMPGOL-033 — RM assigns a goal to an employee they manage

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: RM can assign goals to the employees they are managing. |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM
2. Open a goal's Assign to / Assigned Employees selector
3. Select an employee the RM manages
4. Save

**Expected**

The employee is successfully assigned to the goal

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-034 — TM assigns a goal to an employee within their managed department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM and EM can assign goals to any employee from the department(s) they are managing. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Open a goal's Assigned Employees selector
3. Select an employee within punit's managed department
4. Save

**Expected**

The employee is successfully assigned to the goal; the goal's department-assigned count increments by 1

#### TC-EMPGOL-035 — EM assigns a goal to an employee within their managed department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: TM and EM can assign goals to any employee from the department(s) they are managing. |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated EM test account (see unclear)

**Steps**

1. Log in as an EM
2. Open a goal's Assigned Employees selector
3. Select an employee within the EM's managed department
4. Save

**Expected**

The employee is successfully assigned to the goal

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-036 — Admin assigns a goal to any employee in the organization

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Admin can assign goals to any employee. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open a goal's Assigned Employees selector
3. Select an employee from a department Admin does not directly manage
4. Save

**Expected**

The employee is successfully assigned to the goal regardless of department

#### TC-EMPGOL-037 — Goals assigned to the logged-in employee are visible in the Goals tab of their own profile page

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Goals are visible in the Goals tab on the user's (employee's) profile page. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Navigate to own profile page
3. Open the Goals tab

**Expected**

The Goals tab lists all goals assigned to punit.patel@simformsolutions.com, matching Goals Listing data

#### TC-EMPGOL-038 — Switching Goal Type from Certificate to Technical and back before saving toggles Certificate Code enablement correctly

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary, @needs-verification |
| **Requirement Ref** | edgeCases: Goal Type switched between Technical and Certificate before saving. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Select Goal Type = 'Certificate', enter a Certificate Code
4. Switch Goal Type to 'Technical'
5. Switch Goal Type back to 'Certificate'

**Expected**

Certificate Code field re-enables when switching back to Certificate; whether the previously entered value is retained or cleared is unconfirmed — assert only that the field is enabled and does not error, do not hard-assert a specific retained/cleared value

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Retention behavior is explicitly unclear[] in req-2026-07-14-EMPGOL-doc.json.

#### TC-EMPGOL-039 — Admin's goal employee list shows employees across all departments (org-wide scope), unlike RM/TM/EM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: All employees associated with a goal are visible, except employees the logged-in user does not have access permissions to view. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the employee list for a goal assigned to employees across 2+ departments
3. Observe the full employee list

**Expected**

Employees from every department assigned to the goal are visible to Admin, with no department-based filtering applied

### Integration (4)

#### TC-EMPGOL-101 — Integration — Goal assignment/edit/delete is reflected in Employee Details modal and profile Goals tab without reopening or reloading

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | affectedModules: EMPDET — integrationNote. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open an employee's Employee Details modal and keep it open
3. In a separate action, assign/edit/delete a goal for that employee
4. Return to the still-open Employee Details modal / navigate to profile Goals tab

**Expected**

The Employee Details modal and profile Goals tab both reflect the goal assignment/edit/delete change immediately, without requiring the modal to be reopened or the page reloaded

#### TC-EMPGOL-102 — Integration — Department dropdown / per-goal department toggle / delete-eligibility logic in Goals matches Department Settings' department-manager mappings

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional, @needs-verification |
| **Requirement Ref** | affectedModules: DEPTSET — integrationNote. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Note managed department(s) in Department Settings
3. In Goals, verify the Department dropdown options, per-goal department toggle options, and delete-eligibility computations all use the same department set

**Expected**

All three Goals-module features consistently reflect the exact department-manager mapping defined in Department Settings, with no mismatch

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-103 — Integration — Roles & Permissions role definitions correctly gate Goal create/assign/edit/delete actions for RM/TM/EM/Admin

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional, @needs-verification |
| **Requirement Ref** | affectedModules: ADMROL — integrationNote. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) and punit.patel@simformsolutions.com (testUserPage fixture) — open two browser contexts: primaryPage + testUserPage

**Steps**

1. Log in as ceo@simformsolutions.com and confirm punit.patel@simformsolutions.com's role in Roles & Permissions
2. Log in as punit.patel@simformsolutions.com and attempt each Goal action (create/assign/edit/delete)
3. Cross-check which actions succeeded against the role's permitted actions in Roles & Permissions

**Expected**

Exactly the actions permitted for punit's role in Roles & Permissions succeed in Goals; all others are blocked

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-104 — Integration — Employee count consistency across the Goals card/summary, the listing, and the API response after an assignment change

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: simerp-module — employee count consistency across surfaces. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Assign an employee to a goal
3. Compare the goal's employee count on any summary card/widget, the Goals Listing row, and the API response

**Expected**

All three surfaces show the identical updated count immediately after the assignment

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

### Negative (11)

#### TC-EMPGOL-040 — Saving a new goal without selecting a Goal Name is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: User attempts to save a new goal without selecting a Goal Name. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Fill Goal Type only, leave Goal Name empty
4. Click Save

**Expected**

Save is blocked; an inline validation error is shown on the Goal Name field

#### TC-EMPGOL-041 — Saving a new goal without selecting a Goal Type is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: User attempts to save a new goal without selecting a Goal Type. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Fill Goal Name only, leave Goal Type empty
4. Click Save

**Expected**

Save is blocked; an inline validation error is shown on the Goal Type field

#### TC-EMPGOL-042 — Attempting to edit Goal Name via the UI on an already-created goal is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: User attempts to edit Goal Name or Goal Type on an already-created goal. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for an existing goal
3. Attempt to click/type into the Goal Name field

**Expected**

Goal Name field is locked/non-editable; no change is accepted

#### TC-EMPGOL-043 — Attempting to edit Goal Type via the UI on an already-created goal is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: User attempts to edit Goal Name or Goal Type on an already-created goal. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open the edit panel for an existing goal
3. Attempt to click/change the Goal Type field

**Expected**

Goal Type field is locked/non-editable; no change is accepted

#### TC-EMPGOL-044 — Attempting to delete a goal assigned to at least one employee is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: User attempts to delete a goal that is assigned to at least one employee. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Locate a goal assigned to at least one employee
3. Observe the Delete option

**Expected**

Delete option is disabled; deletion does not proceed

**Test Data**

- `goalName`: Goal with 1 assignee

#### TC-EMPGOL-045 — Attempting to delete a goal with 0 own-department employees but assigned elsewhere is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: User attempts to delete a goal with 0 employees in their own department but employees assigned in other departments. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Locate a goal with 0 employees in punit's department but employees assigned in another department
3. Observe the Delete option

**Expected**

Delete option is disabled; deletion does not proceed

#### TC-EMPGOL-046 — RM attempting to assign a goal to an employee outside their own team cannot select that employee

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: RM attempts to assign a goal to an employee outside their own team. |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM
2. Open a goal's Assign to selector
3. Search for an employee outside the RM's own team

**Expected**

The employee is not selectable/assignable in the UI

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-047 — TM attempting to assign a goal to an employee outside their managed department(s) cannot select that employee

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenarios: TM/EM attempts to assign a goal to an employee outside their managed department(s). |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Open a goal's Assign to selector
3. Search for an employee outside punit's managed department(s)

**Expected**

The employee is not selectable/assignable in the UI

#### TC-EMPGOL-048 — Submitting a Goal Name containing only whitespace is rejected as empty

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary, @needs-verification |
| **Requirement Ref** | Regression: validation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type only spaces into a free-text field where typing is possible (Goal Name search input) and attempt to submit as a new goal
4. Click Save

**Expected**

Whitespace-only input is treated as empty; Save is blocked with the same validation error as an empty Goal Name

**Test Data**

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Exact client-side trimming behavior is not documented in the source.

#### TC-EMPGOL-049 — Special characters and script payloads in Description are rejected or sanitized, not executed

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | Regression: validation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open Add Goal / edit-goal Description field
3. Enter each payload value in turn and Save
4. View the goal in Goals Listing, edit panel, and Employee Details modal

**Expected**

No script executes anywhere the Description is rendered; payload text is escaped/sanitized or a validation error is shown

**Test Data**

- `payloads`: <script>alert(1)</script>, ", ', --, %, null, undefined

#### TC-EMPGOL-050 — Attempting to create a goal with a name identical to an existing goal via direct duplicate entry is prevented

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal'
3. Type the exact existing goal name 'React Certification'
4. Attempt to proceed as if creating a new goal rather than selecting the exact match

**Expected**

The exact match is surfaced as the existing goal (not created again); a duplicate-prevention indication is shown if the user tries to force a new record

**Test Data**

- `goalName`: React Certification

### Regression (16)

#### TC-EMPGOL-085 — Goals Listing re-sorts and refreshes immediately after an assignment change, without a page reload

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | testScenarios: Goals Listing re-sorts and refreshes immediately after assignment change. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Note a goal's current sort position and count
3. Assign an additional employee to that goal
4. Observe the Goals Listing without reloading

**Expected**

The goal's count updates immediately and its sort position updates immediately, without a manual refresh

#### TC-EMPGOL-086 — Double-clicking Save on Add Goal in quick succession creates exactly one goal record

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | testScenarios: Double-click Save on Add Goal does not create duplicate goal records. |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal', fill Goal Name and Goal Type
3. Click Save twice in rapid succession

**Expected**

Exactly one new goal record exists after the double-click; the listing shows no duplicate entries

**Test Data**

- `goalName`: Double Click Guard Goal

#### TC-EMPGOL-087 — Regression: A change to a goal in this module is reflected correctly in Employee Details (affected module)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: EMPDET — Goals visible on employee details modal; assignment must reflect immediately. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Assign a goal to an employee
3. Navigate to Employee → Employee Details and open that employee's details modal

**Expected**

The newly assigned goal is reflected correctly in Employee Details without requiring the modal to be reopened or the page reloaded

#### TC-EMPGOL-088 — Regression: Department dropdown, per-goal department toggle, and delete-eligibility logic depend on accurate department-manager mappings (Department Settings)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | affectedModules: DEPTSET — accurate department-to-manager mappings. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. In Department Settings, confirm punit's managed department(s)
3. Return to Goals and verify the Department dropdown / per-goal toggle / delete-eligibility results match that same department set

**Expected**

The department set used by Goals module features exactly matches the department-manager mapping shown in Department Settings

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-089 — Regression: RM/TM/EM/Admin role definitions from Roles & Permissions correctly gate Goal create/assign/edit/delete actions

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | affectedModules: ADMROL — role definitions must be correctly resolved to gate Goal actions. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) and punit.patel@simformsolutions.com (testUserPage fixture) — open two browser contexts: primaryPage + testUserPage

**Steps**

1. Log in as ceo@simformsolutions.com, confirm punit.patel@simformsolutions.com's role assignment in Roles & Permissions (Admin module)
2. Log in as punit.patel@simformsolutions.com and verify Goals module actions available match that role's defined permissions

**Expected**

Goal action availability (create/assign/edit/delete) for punit's role matches the permission set defined in Roles & Permissions

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-090 — UI-displayed goal values match the corresponding API response after save

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — UI/API parity after write. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Create/update a goal with specific field values
3. Fetch the goal via its API endpoint
4. Compare every UI-displayed field against the API response

**Expected**

Every field visible in the UI matches the API response exactly

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-091 — Success toast appears after creating, editing, or deleting a goal and names the goal

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional, @needs-verification |
| **Requirement Ref** | Regression: ui-state — success toast. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Create a goal, then edit it, then delete a 0-assignment goal
3. Observe the notification after each operation

**Expected**

A success toast appears after each operation, containing the goal name or a confirmation message

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Toast presence/copy is not explicitly documented in the source.

#### TC-EMPGOL-092 — Error toast (not a raw stack trace) appears when a goal server operation fails

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative, @needs-verification |
| **Requirement Ref** | Regression: ui-state — error toast. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Simulate/force a server error during a goal create or update (e.g. via a blocked/mocked API response)
3. Observe the resulting UI message

**Expected**

A user-friendly error toast appears; no raw stack trace or technical error text is exposed

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-093 — A confirmation dialog appears before deleting a goal, and dismissing it cancels the deletion with no change made

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: ui-state — confirmation dialog before destructive action. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click Delete on a 0-assignment goal
3. Dismiss/cancel the resulting confirmation dialog
4. Observe the Goals Listing

**Expected**

A confirmation dialog appears before the destructive action executes; dismissing it leaves the goal unchanged in the listing

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-094 — Empty-state message is shown when the Goals Listing has no records matching the current filter

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional, @needs-verification |
| **Requirement Ref** | Regression: ui-state — empty state. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Apply a department filter (if available) that matches no goals, or search a goal name that matches nothing

**Expected**

A non-blank empty-state message is shown instead of an empty table

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-095 — Goals Listing table reflects a Create/Update/Delete change without a manual page reload

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: ui-state — table refresh after CRUD. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Create a new goal
3. Observe the table without reloading
4. Edit the goal's Description
5. Observe the table without reloading

**Expected**

The table reflects both the creation and the edit immediately, without a manual page reload

#### TC-EMPGOL-096 — Browser refresh mid-way through filling the Add Goal side panel does not submit partial data or corrupt existing records

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative |
| **Requirement Ref** | Regression: reliability — browser refresh mid-flow. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open Add Goal, partially fill Goal Name only
3. Refresh the browser mid-flow
4. Check the Goals Listing for any partial/corrupt record

**Expected**

No partial goal record is created; no existing record is corrupted

#### TC-EMPGOL-097 — Clicking Save 3x rapidly on Add Goal results in exactly one goal record, not multiple

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: reliability — multiple rapid clicks. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Click 'Add Goal', fill Goal Name and Goal Type
3. Click Save 3 times in rapid succession

**Expected**

Exactly one goal record is created; no duplicates appear in the listing

**Test Data**

- `goalName`: Triple Click Guard Goal

#### TC-EMPGOL-098 — A 500 server error while saving a goal shows a user-friendly error message, not a raw stack trace

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative, @needs-verification |
| **Requirement Ref** | Regression: reliability — HTTP 500. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Mock/force the goal-save API response to return HTTP 500
3. Attempt to save a goal

**Expected**

A user-friendly error message/toast is shown; no raw stack trace or technical detail is exposed to the user

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-099 — Session expiry (HTTP 401) while on the Goals page returns the user to the login page without data loss

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative, @needs-verification |
| **Requirement Ref** | Regression: reliability — HTTP 401. |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Simulate session expiry (invalidate the auth token/cookie)
3. Attempt a Goals action (e.g. open Add Goal)

**Expected**

The user is redirected to the login page; no in-progress form data silently corrupts existing records

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. 

#### TC-EMPGOL-100 — Auto-save/draft behavior on the Add Goal side panel: navigating away and returning shows no duplicated or lost draft state

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: simerp-module — auto-save/draft. |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Open Add Goal, partially fill fields
3. Navigate away from the Goals page without saving
4. Return to Goals and reopen Add Goal

**Expected**

Either the panel opens blank (no auto-save exists) or, if auto-save/draft exists, the last state is shown without data loss or duplication — no scenario should produce a corrupted or duplicated draft

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. It is unconfirmed whether Add Goal has auto-save/draft functionality at all.

### Security (10)

#### TC-EMPGOL-075 — Assign to multiselect never offers employees outside the logged-in user's access scope

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | testScenarios: Assign to multiselect is scoped to accessible employees. |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Click 'Add Goal'
3. Search the Assign to multiselect for an employee outside punit's managed department(s)

**Expected**

No matching option is returned for that employee

#### TC-EMPGOL-076 — RM cannot assign a goal to an employee outside their own team (UI and API)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | testScenarios: RM can only assign goals to employees they manage. |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

MANUAL — requires dedicated RM test account (see unclear)

**Steps**

1. Log in as an RM
2. Attempt to select an out-of-team employee in Assign to (UI)
3. Attempt a direct API call to assign that employee to a goal

**Expected**

UI: the employee is not selectable. API: the request is rejected (403-equivalent)

**Automation Hint**

MANUAL — no RM/EM test account provisioned; requires dedicated account per unclear[] in req-2026-07-14-EMPGOL-doc.json

#### TC-EMPGOL-077 — TM/EM cannot assign a goal to an employee outside their managed department(s) (UI and API)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | testScenarios: TM/EM can only assign goals within their managed department(s). |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Attempt to select an out-of-department employee in Assign to (UI)
3. Attempt a direct API call to assign that employee to a goal

**Expected**

UI: the employee is not selectable. API: the request is rejected (403-equivalent)

#### TC-EMPGOL-078 — Admin can assign goals to any employee across the organization

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | testScenarios: Admin can assign goals to any employee. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Select and assign an employee from a department Admin doesn't directly manage
3. Save

**Expected**

Admin can select and successfully assign any employee regardless of department

#### TC-EMPGOL-079 — Direct API attempt to edit Goal Name or Goal Type on an existing goal is rejected server-side

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | securityScenarios: A user attempts to edit Goal Name or Goal Type via a direct API request after creation. |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Identify the goal update API endpoint via network interception
3. Send a direct PATCH request changing Goal Name and/or Goal Type on an existing goal

**Expected**

The API rejects the change, or silently ignores the immutable fields; Goal Name/Goal Type remain unchanged after the attempt

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Endpoint is unconfirmed (see apiEndpoints[] in req-2026-07-14-EMPGOL-doc.json); requires request-context access beyond a UI-only Playwright flow.

#### TC-EMPGOL-080 — Direct API attempt to delete a goal with assigned employees is rejected

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | securityScenarios: A user attempts to delete a goal via direct API call when the UI shows Delete disabled. |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Identify the goal delete API endpoint via network interception
3. Send a direct DELETE request for a goal that has assigned employees

**Expected**

API responds with an error/403-equivalent; the goal remains present after the attempt

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Endpoint is unconfirmed; requires request-context access beyond a UI-only Playwright flow.

#### TC-EMPGOL-081 — XSS payload in the Description rich-text field is sanitized everywhere it is rendered

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | securityScenarios: Description field is submitted containing script/HTML payloads (XSS). |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com
2. Enter a script/HTML payload into a goal's Description
3. Save
4. View the goal in Goals Listing, the edit panel, and the Employee Details modal

**Expected**

No script executes in any of the three surfaces; the payload is sanitized/escaped on render

**Test Data**

- `payload`: <script>alert('xss')</script>

#### TC-EMPGOL-082 — Employee role cannot create, edit, assign, or delete goals — no write controls are exposed

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | roleMatrix: Employee cannot create, edit, assign, or delete goals. |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in with an Employee-role account viewing their own profile Goals tab
2. Observe for any Create/Edit/Assign/Delete controls related to goals

**Expected**

No goal write-action controls (Add Goal, Edit, Delete, Assign) are visible to the Employee role; only read access to their own assigned goals is present

#### TC-EMPGOL-083 — Restricted role cannot access another employee's or department's goal-scoped data by manipulating a goal/employee ID in the URL or request (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression, @needs-verification |
| **Requirement Ref** | Regression: rbac — IDOR. |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com
2. Identify a goal or employee-goal-assignment ID outside punit's scope from a captured API response
3. Attempt to fetch/modify it directly by substituting that ID in a request within the app

**Expected**

The request is rejected with 403 or 404; no out-of-scope data or write access is returned

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Goal-related API surface is unconfirmed in the source; use network interception to identify the actual endpoint.

#### TC-EMPGOL-084 — Each role's forbidden goal actions are enforced at both UI (control hidden/disabled) and API (403) level, not merely UI-restricted

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression, @needs-verification |
| **Requirement Ref** | businessRules: Each role's permitted and forbidden goal actions must be enforced at both UI level and API level. |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) and punit.patel@simformsolutions.com (testUserPage fixture) — open two browser contexts: primaryPage + testUserPage

**Steps**

1. Log in as punit.patel@simformsolutions.com (TM scope)
2. Confirm a forbidden action's control is absent/disabled in the UI
3. Attempt the same action via a direct API call bypassing the UI

**Expected**

UI: control is absent/disabled. API: the same action returns 403, confirming enforcement is not UI-only

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Requires the goal write API endpoints, which are unconfirmed in the source.

### Smoke (3)

#### TC-EMPGOL-001 — Admin creates a new Goal and it appears in Goals Listing sorted by allocated-employee count with correct counts

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

1. Log in as ceo@simformsolutions.com (Admin)
2. Navigate to Employee → Goals
3. Click 'Add Goal'
4. In the side panel, enter Goal Name = 'Playwright Smoke Goal', Goal Type = 'Technical', leave Assign to empty
5. Click Save

**Expected**

Goal appears in Goals Listing with department-assigned = 0 and organization-assigned = 0; listing re-sorts by descending allocated-employee count with the new goal correctly positioned; side panel closes

**Test Data**

- `goalName`: Playwright Smoke Goal
- `goalType`: Technical

**Automation Hint**

Use primaryPage fixture. RM/TM/EM variants of this critical path are covered by TC-EMPGOL-008/009/010 (functional).

#### TC-EMPGOL-002 — TM assigns an employee to an existing Goal and the change reflects immediately in Goals Listing counts and the employee's Employee Details modal / profile Goals tab

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

Logged in as punit.patel@simformsolutions.com (testUserPage fixture)

**Steps**

1. Log in as punit.patel@simformsolutions.com (TM/Employee)
2. Navigate to Employee → Goals
3. Open the edit panel for an existing goal within the user's managed department
4. Add one additional employee to Assigned Employees and Save
5. Open the added employee's Employee Details modal / profile Goals tab

**Expected**

Goals Listing shows the incremented assigned-employee count for the goal without a page reload; the employee's Employee Details modal and profile Goals tab both list the newly assigned goal

**Test Data**

- `goalName`: React Certification

**Automation Hint**

Use testUserPage fixture.

#### TC-EMPGOL-003 — Deleting a Goal is gated by the assigned-employee conditional rules and removes the goal entirely from the database when allowed

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[2] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Log in as ceo@simformsolutions.com (Admin)
2. Create a new goal with 0 assigned employees
3. Locate the goal row in Goals Listing and observe the Delete option is enabled
4. Click Delete and confirm

**Expected**

Delete option is enabled for the 0-assignment goal; after confirming deletion the goal no longer appears anywhere in the Goals Listing

**Test Data**

- `goalName`: Zero-Assignment Smoke Goal

**Automation Hint**

Use primaryPage fixture.
