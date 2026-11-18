# Employee — Test Cases

**Total test cases:** 11  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-11-16-EMPGOL-T1693-rm-goal-view.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 5 | 45.5% |
| security | 3 | 27.3% |
| regression | 2 | 18.2% |
| smoke | 1 | 9.1% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 8 | 72.7% |
| medium | 3 | 27.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 8 | 72.7% |
| medium | 3 | 27.3% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 5 | 45.5% |
| @security | 3 | 27.3% |
| @regression | 2 | 18.2% |
| @smoke | 1 | 9.1% |

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

---

## Employee

11 test cases.

### Functional (5)

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

### Regression (2)

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

### Security (3)

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
