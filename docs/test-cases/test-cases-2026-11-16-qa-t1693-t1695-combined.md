# Employee — Test Cases

**Total test cases:** 37  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-11-16-QA-T1693-T1695-combined.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| security | 11 | 29.7% |
| functional | 10 | 27.0% |
| negative | 8 | 21.6% |
| regression | 4 | 10.8% |
| boundary | 3 | 8.1% |
| smoke | 1 | 2.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 21 | 56.8% |
| medium | 14 | 37.8% |
| low | 2 | 5.4% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 16 | 43.2% |
| high | 15 | 40.5% |
| low | 6 | 16.2% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @security | 11 | 29.7% |
| @functional | 10 | 27.0% |
| @negative | 8 | 21.6% |
| @regression | 4 | 10.8% |
| @boundary | 3 | 8.1% |
| @smoke | 1 | 2.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPGOL-548](#tc-empgol-548-rm-sees-goals-with-by-employee-and-by-goal-tabs-and-no-add-goal) | RM sees Goals with By Employee and By Goal tabs and no Add Goal | Employee | smoke | high |
| [TC-EMPGOL-549](#tc-empgol-549-rm-opens-a-goal-read-only-goal-details-drawer-no-edit-delete) | RM opens a goal: read-only Goal Details drawer, no Edit/Delete | Employee | functional | high |
| [TC-EMPGOL-550](#tc-empgol-550-tm-opens-a-goal-read-only-goal-details-drawer-no-edit-delete) | TM opens a goal: read-only Goal Details drawer, no Edit/Delete | Employee | functional | medium |
| [TC-EMPGOL-551](#tc-empgol-551-em-opens-a-goal-read-only-goal-details-drawer-no-edit-delete) | EM opens a goal: read-only Goal Details drawer, no Edit/Delete | Employee | functional | medium |
| [TC-EMPGOL-552](#tc-empgol-552-admin-keeps-add-goal-and-the-editable-edit-goal-dialog) | Admin keeps Add Goal and the editable Edit Goal dialog | Employee | regression | high |
| [TC-EMPGOL-553](#tc-empgol-553-rm-get-goals-returns-the-full-catalog-same-total-as-admin) | RM GET /goals returns the full catalog (same total as Admin) | Employee | functional | high |
| [TC-EMPGOL-554](#tc-empgol-554-rm-goal-details-list-only-their-own-team-org-counts-match-admin) | RM goal details list only their own team; org counts match Admin | Employee | security | high |
| [TC-EMPGOL-555](#tc-empgol-555-employee-and-csm-are-still-blocked-from-the-goal-catalog) | Employee and CSM are still blocked from the goal catalog | Employee | security | high |
| [TC-EMPGOL-556](#tc-empgol-556-rm-sees-and-can-sort-by-accountgrade-project-description-stays-hidden) | RM sees and can sort by accountGrade; project description stays hidden | Employee | functional | high |
| [TC-EMPGOL-557](#tc-empgol-557-no-project-is-listed-twice-on-a-team-member-profile-rm-and-admin) | No project is listed twice on a team member profile (RM and Admin) | Employee | regression | high |
| [TC-EMPGOL-558](#tc-empgol-558-rm-tm-em-cannot-edit-or-delete-a-catalog-goal-through-the-api-f-1) | RM/TM/EM cannot edit or delete a catalog goal through the API (F-1) | Employee | security | medium |
| [TC-EMPSKL-150](#tc-empskl-150-admin-adds-a-new-skill-through-the-drawer) | Admin adds a new skill through the drawer | Employee | functional | high |
| [TC-EMPSKL-151](#tc-empskl-151-admin-edits-the-skill-adds-a-tag-and-assigns-an-employee) | Admin edits the skill: adds a tag and assigns an employee | Employee | functional | high |
| [TC-EMPSKL-152](#tc-empskl-152-integration-assignment-shows-in-table-stat-cards-and-every-api-view) | Integration: assignment shows in table, stat cards and every API view | Employee | regression | high |
| [TC-EMPSKL-153](#tc-empskl-153-delete-is-blocked-while-an-employee-holds-the-skill-dialog-in-the-ui-400-from-the-api) | Delete is blocked while an employee holds the skill (dialog in the UI, 400 from the API) | Employee | negative | high |
| [TC-EMPSKL-154](#tc-empskl-154-cancel-on-the-delete-dialog-changes-nothing) | Cancel on the delete dialog changes nothing | Employee | negative | medium |
| [TC-EMPSKL-155](#tc-empskl-155-unassigning-the-employee-and-deleting-the-skill-restores-the-totals) | Unassigning the employee and deleting the skill restores the totals | Employee | functional | high |
| [TC-EMPSKL-156](#tc-empskl-156-blank-logo-url-is-blocked-with-a-visible-message-not-a-silent-no-op-old-defect-fixed) | Blank Logo URL is blocked with a visible message, not a silent no-op (old defect fixed) | Employee | regression | high |
| [TC-EMPSKL-157](#tc-empskl-157-duplicate-skill-name-is-rejected-and-no-second-row-appears) | Duplicate skill name is rejected and no second row appears | Employee | negative | medium |
| [TC-EMPSKL-158](#tc-empskl-158-invalid-input-is-refused-with-400-never-5xx) | Invalid input is refused with 400, never 5xx | Employee | negative | medium |
| [TC-EMPSKL-159](#tc-empskl-159-unusual-skill-names-are-stored-and-shown-as-plain-text) | Unusual skill names are stored and shown as plain text | Employee | boundary | medium |
| [TC-EMPSKL-160](#tc-empskl-160-search-edge-cases-case-spaces-wildcard-and-quote-characters) | Search edge cases: case, spaces, wildcard and quote characters | Employee | boundary | low |
| [TC-EMPSKL-161](#tc-empskl-161-cancel-and-escape-discard-the-add-drawer-without-saving) | Cancel and Escape discard the Add drawer without saving | Employee | negative | low |
| [TC-EMPSKL-162](#tc-empskl-162-bad-ids-malformed-400-unknown-404-never-500) | Bad ids: malformed -> 400, unknown -> 404, never 500 | Employee | negative | medium |
| [TC-EMPSKL-163](#tc-empskl-163-unlink-from-department-is-blocked-while-a-dept-employee-holds-the-skill) | Unlink from department is blocked while a dept employee holds the skill | Employee | negative | medium |
| [TC-EMPSKL-164](#tc-empskl-164-employee-list-is-paged-and-consistent-for-a-large-skill) | Employee list is paged and consistent for a large skill | Employee | boundary | medium |
| [TC-EMPSKL-165](#tc-empskl-165-primary-secondary-tab-filters-employees-by-proficiency) | Primary / Secondary tab filters employees by proficiency | Employee | functional | medium |
| [TC-EMPSKL-166](#tc-empskl-166-ui-access-matrix-per-role-page-add-skills-edit-stat-cards) | UI access matrix per role (page, Add Skills, Edit, stat cards) | Employee | security | high |
| [TC-EMPSKL-167](#tc-empskl-167-read-apis-are-data-scoped-no-role-sees-more-than-admin-employee-csm-see-nothing) | Read APIs are data-scoped: no role sees more than Admin, Employee/CSM see nothing | Employee | security | high |
| [TC-EMPSKL-168](#tc-empskl-168-out-of-scope-department-data-is-not-readable-by-a-tm) | Out-of-scope department data is not readable by a TM | Employee | security | high |
| [TC-EMPSKL-169](#tc-empskl-169-employee-and-csm-cannot-add-or-delete-skills-anonymous-callers-get-401) | Employee and CSM cannot add or delete skills; anonymous callers get 401 | Employee | security | high |
| [TC-EMPSKL-170](#tc-empskl-170-tm-em-and-pm-cannot-delete-a-global-skill-they-do-not-own) | TM, EM and PM cannot delete a global skill they do not own | Employee | security | high |
| [TC-EMPSKL-171](#tc-empskl-171-add-drawer-skill-picker-and-save-stay-disabled-until-a-department-is-chosen) | Add drawer: skill picker and Save stay disabled until a department is chosen | Employee | functional | medium |
| [TC-EMPSKL-172](#tc-empskl-172-verify-before-creating-step-cancel-creates-nothing-confirm-creates-once) | 'Verify before creating' step: Cancel creates nothing, Confirm creates once | Employee | negative | medium |
| [TC-EMPSKL-173](#tc-empskl-173-employee-and-csm-cannot-change-the-tags-of-a-global-skill) | Employee and CSM cannot change the tags of a global skill | Employee | security | high |
| [TC-EMPSKL-174](#tc-empskl-174-tm-em-and-pm-cannot-change-tags-of-a-skill-outside-their-department) | TM, EM and PM cannot change tags of a skill outside their department | Employee | security | high |
| [TC-EMPSKL-175](#tc-empskl-175-tm-em-see-add-skills-but-the-api-refuses-the-create) | TM / EM see Add Skills but the API refuses the create | Employee | security | medium |

---

## Employee

37 test cases.

### Boundary (3)

#### TC-EMPSKL-159 — Unusual skill names are stored and shown as plain text

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | No 5xx; no script runs; no injected <img> is rendered |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Create skills named with <img onerror>, quotes/%/_, 120 characters, unicode
2. Search them in the list

**Expected**

No 5xx; no script runs; no injected <img> is rendered

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-160 — Search edge cases: case, spaces, wildcard and quote characters

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Case/space variants find the skill; special characters never return 5xx |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Search a skill in lower, upper and padded case
2. Search %, _, quote, SQL text, <script>, backslash, 300 characters

**Expected**

Case/space variants find the skill; special characters never return 5xx

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-164 — Employee list is paged and consistent for a large skill

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | List count equals employees total; no duplicate employees; page 999 is empty with 200 |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Find the skill with most employees in any department
2. Read page 1 (limit 100), then page 999

**Expected**

List count equals employees total; no duplicate employees; page 999 is empty with 200

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

### Functional (10)

#### TC-EMPGOL-549 — RM opens a goal: read-only Goal Details drawer, no Edit/Delete

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | RM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | "Goal Details" drawer opens with the clicked goal; every input is disabled, rich-text editors are not editable, no Save/Update/Delete |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Open Goals > By Goal as RM
2. Check the first row has no Edit/Delete
3. Click the goal name

**Expected**

"Goal Details" drawer opens with the clicked goal; every input is disabled, rich-text editors are not editable, no Save/Update/Delete

#### TC-EMPGOL-550 — TM opens a goal: read-only Goal Details drawer, no Edit/Delete

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | TM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | Same read-only drawer as RM |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Open Goals > By Goal as TM
2. Click the goal name

**Expected**

Same read-only drawer as RM

#### TC-EMPGOL-551 — EM opens a goal: read-only Goal Details drawer, no Edit/Delete

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | EM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | Same read-only drawer as RM |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Open Goals > By Goal as EM
2. Click the goal name

**Expected**

Same read-only drawer as RM

#### TC-EMPGOL-553 — RM GET /goals returns the full catalog (same total as Admin)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | RM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | RM gets 200 and the same total as Admin, including RMs who manage no team |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. GET /goals?page=1&limit=100 as RM and as Admin

**Expected**

RM gets 200 and the same total as Admin, including RMs who manage no team

#### TC-EMPGOL-556 — RM sees and can sort by accountGrade; project description stays hidden

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | RM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | Every project has accountGrade; no description field; sorted list is in descending grade order |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. GET /projects?page=1&limit=100 as RM
2. GET same with sortBy=accountGrade&sortOrder=desc

**Expected**

Every project has accountGrade; no description field; sorted list is in descending grade order

#### TC-EMPSKL-150 — Admin adds a new skill through the drawer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | POST /skills/add returns 201; toast 'Skill created and mapped successfully'; skill appears with 0 employees; Total skills +1 and Unassigned +1 |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Open Skills > Add Skills
2. Pick Department ADMIN
3. Search a new skill name > Create New Skill
4. Enter logo link and a tag
5. Save, then Confirm & Create

**Expected**

POST /skills/add returns 201; toast 'Skill created and mapped successfully'; skill appears with 0 employees; Total skills +1 and Unassigned +1

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-151 — Admin edits the skill: adds a tag and assigns an employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | PATCH returns 200; toast 'Skill updated successfully' |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Select the new skill > Edit
2. Add tag 'second-tag'
3. Assign Dhruv Chopra
4. Update

**Expected**

PATCH returns 200; toast 'Skill updated successfully'

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-155 — Unassigning the employee and deleting the skill restores the totals

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | DELETE returns 200; skill gone from list; Total skills and Unassigned back to the starting numbers |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Unassign the employee
2. Select the skill > Unlink Skill > Delete

**Expected**

DELETE returns 200; skill gone from list; Total skills and Unassigned back to the starting numbers

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-165 — Primary / Secondary tab filters employees by proficiency

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Every returned employee holds the skill at that proficiency |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Call department-employees with proficiency=PRIMARY, then SECONDARY

**Expected**

Every returned employee holds the skill at that proficiency

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-171 — Add drawer: skill picker and Save stay disabled until a department is chosen

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Both disabled at first; skill picker enables after a department; Save still needs a skill |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Open Add Skills
2. Check skill picker and Save
3. Pick a department

**Expected**

Both disabled at first; skill picker enables after a department; Save still needs a skill

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

### Negative (8)

#### TC-EMPSKL-153 — Delete is blocked while an employee holds the skill (dialog in the UI, 400 from the API)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | UI shows 'Cannot Delete Skill - remove all employees mapped...' and sends no request; API returns 400; skill still exists |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Select the assigned skill
2. Click Unlink Skill
3. Read the dialog, click Okay
4. Call DELETE /skills/:id directly

**Expected**

UI shows 'Cannot Delete Skill - remove all employees mapped...' and sends no request; API returns 400; skill still exists

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-154 — Cancel on the delete dialog changes nothing

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Dialog closes, no DELETE request, skill still listed |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Unassign the employee
2. Select the skill > Unlink Skill
3. Click Cancel

**Expected**

Dialog closes, no DELETE request, skill still listed

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-157 — Duplicate skill name is rejected and no second row appears

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Second request is refused (>=400); only one skill with that name exists |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Create a skill via API
2. Create the same name again, then the lower-case name

**Expected**

Second request is refused (>=400); only one skill with that name exists

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-158 — Invalid input is refused with 400, never 5xx

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Every case returns 4xx and nothing is created |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. POST /skills/add with: bad logo URL, no department, non-uuid department, duplicate department, no name/skillId, both name and skillId, empty name

**Expected**

Every case returns 4xx and nothing is created

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-161 — Cancel and Escape discard the Add drawer without saving

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Drawer closes; no write request is sent |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Open Add Skills > Cancel
2. Open again > press Escape

**Expected**

Drawer closes; no write request is sent

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-162 — Bad ids: malformed -> 400, unknown -> 404, never 500

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | All return 4xx, none 5xx |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. PATCH/DELETE/unlink with a malformed and an unknown id
2. Stats/employees with unknown department, bad limit and page 0

**Expected**

All return 4xx, none 5xx

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-163 — Unlink from department is blocked while a dept employee holds the skill

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | First call 400, second call 200 |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Create a skill and assign Dhruv
2. DELETE /skills/:id/department/:dept
3. Unassign Dhruv and retry

**Expected**

First call 400, second call 200

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-172 — 'Verify before creating' step: Cancel creates nothing, Confirm creates once

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Cancel sends no request; Confirm sends exactly one create |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Fill a new skill > Save
2. Click Cancel on the verify dialog
3. Save again > Confirm & Create

**Expected**

Cancel sends no request; Confirm sends exactly one create

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

### Regression (4)

#### TC-EMPGOL-552 — Admin keeps Add Goal and the editable Edit Goal dialog

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Admin |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | Add Goal is visible; Edit Goal dialog opens with Save |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Open Goals > By Goal as Admin
2. Click Edit on the first goal
3. Cancel

**Expected**

Add Goal is visible; Edit Goal dialog opens with Save

#### TC-EMPGOL-557 — No project is listed twice on a team member profile (RM and Admin)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | RM/Admin |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | No project appears twice in projects or pastProjects |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. For every RM team member, GET /employees/:id as RM and Admin
2. Check projects and pastProjects for repeats

**Expected**

No project appears twice in projects or pastProjects

#### TC-EMPSKL-152 — Integration: assignment shows in table, stat cards and every API view

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Tags saved; Dhruv listed by employees API; list count equals employee total; With employees +1 and Unassigned back to baseline; row visible in the table |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Read skill list API
2. Read department-employees API
3. Read department-skill-stats and summary
4. Open the skill in the UI

**Expected**

Tags saved; Dhruv listed by employees API; list count equals employee total; With employees +1 and Unassigned back to baseline; row visible in the table

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-156 — Blank Logo URL is blocked with a visible message, not a silent no-op (old defect fixed)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | 'Provide logo URL or upload icon file.' shown under both logo fields; no request sent; skill not created. (Earlier build: Save did nothing silently) |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Add Skills > pick Department > new skill name
2. Leave Logo URL empty and click Save

**Expected**

'Provide logo URL or upload icon file.' shown under both logo fields; no request sent; skill not created. (Earlier build: Save did nothing silently)

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

### Security (11)

#### TC-EMPGOL-554 — RM goal details list only their own team; org counts match Admin

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | RM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | Every employee the RM sees is in their team (or the RM himself) and in Admin's list; Admin sees more names; org-wide counts are identical |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Collect the RM's By Employee list (all pages)
2. For 15 assigned goals, GET /goals/:id as RM and Admin
3. Compare assigned employees and organizationWiseCount

**Expected**

Every employee the RM sees is in their team (or the RM himself) and in Admin's list; Admin sees more names; org-wide counts are identical

#### TC-EMPGOL-555 — Employee and CSM are still blocked from the goal catalog

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee/CSM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | API 403; UI redirects to /unauthorized |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. GET /goals as Employee and CSM
2. Open /employee/goals?tab=goals&view=catalog

**Expected**

API 403; UI redirects to /unauthorized

#### TC-EMPGOL-558 — RM/TM/EM cannot edit or delete a catalog goal through the API (F-1)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | RM/TM/EM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | All refused with 403, matching the read-only UI (currently 200/200/201 — open question F-1) |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Admin creates an AUTO-GOAL-RMV goal
2. As RM, TM, EM: PATCH it, DELETE it, POST a new goal
3. Admin hard-deletes everything

**Expected**

All refused with 403, matching the read-only UI (currently 200/200/201 — open question F-1)

#### TC-EMPSKL-166 — UI access matrix per role (page, Add Skills, Edit, stat cards)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | All roles |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Employee and CSM are sent to /unauthorized; other roles open the page with scoped numbers |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Open /employee/skills as Admin, PMO, PM, TM, EM, punit, Employee, CSM

**Expected**

Employee and CSM are sent to /unauthorized; other roles open the page with scoped numbers

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-167 — Read APIs are data-scoped: no role sees more than Admin, Employee/CSM see nothing

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | TM/EM/PM/Employee/CSM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Totals never exceed Admin's; Employee and CSM get 0 |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. GET /skills/summary as each role

**Expected**

Totals never exceed Admin's; Employee and CSM get 0

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-168 — Out-of-scope department data is not readable by a TM

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | TM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | No skills or employees are returned |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Pick a department outside the TM's list
2. GET stats and employees for it as TM

**Expected**

No skills or employees are returned

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-169 — Employee and CSM cannot add or delete skills; anonymous callers get 401

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee/CSM/anonymous |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Employee/CSM get 403; anonymous gets 401; skill untouched |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. POST /skills/add and DELETE /skills/:id as Employee and CSM
2. Call summary/add/delete with no login

**Expected**

Employee/CSM get 403; anonymous gets 401; skill untouched

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-170 — TM, EM and PM cannot delete a global skill they do not own

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | TM/EM/PM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Refused (403) for every role |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Admin creates a skill linked only to ADMIN dept
2. Each role calls DELETE /skills/:id

**Expected**

Refused (403) for every role

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-173 — Employee and CSM cannot change the tags of a global skill

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee/CSM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Both get 403 and tags stay unchanged |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Admin creates a skill
2. Employee, then CSM, call PATCH /skills/:id with tags

**Expected**

Both get 403 and tags stay unchanged

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-174 — TM, EM and PM cannot change tags of a skill outside their department

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | high |
| **Role** | TM/EM/PM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Each is refused (403) |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Admin creates a skill linked only to ADMIN dept
2. Each role calls PATCH /skills/:id with tags

**Expected**

Each is refused (403)

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

#### TC-EMPSKL-175 — TM / EM see Add Skills but the API refuses the create

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | TM/EM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Button visibility matches the API permission |

**Preconditions**

SimERP DEV 6.8.1 (api simerp-dev-api /api/v1); throwaway skills named AUTO-SKL-<timestamp> are created and removed; Dhruv Chopra (ADMIN dept) is assigned then unassigned

**Steps**

1. Open Skills as TM and EM
2. Check the Add Skills button
3. POST /skills/add

**Expected**

Button visibility matches the API permission

**Test Data**

- `department`: ADMIN
- `logo`: cdn-icons-png.flaticon.com/512/5968/5968292.png

### Smoke (1)

#### TC-EMPGOL-548 — RM sees Goals with By Employee and By Goal tabs and no Add Goal

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1682 |
| **Priority** | high |
| **Severity** | high |
| **Role** | RM |
| **Task Id** | SI4-T1693 |
| **Sub Module** | Goals — RM read-only view (T1682) |
| **Expected Result** | Dashboard, Goals, By Employee and By Goal tabs are shown; the catalog lists goals; there is no Add Goal button |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1). RM = hardik.trivedi (RM + DM, goal scope TEAM). Only writes: throwaway AUTO-GOAL-RMV-* goals created and hard-deleted by Admin.

**Steps**

1. Log in as RM
2. Open Employee > Goals > Goals tab
3. Switch to By Goal

**Expected**

Dashboard, Goals, By Employee and By Goal tabs are shown; the catalog lists goals; there is no Add Goal button
