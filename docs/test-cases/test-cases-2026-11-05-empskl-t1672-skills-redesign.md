# Employee — Test Cases

**Total test cases:** 15  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-11-05-EMPSKL-T1672-skills-redesign.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 11 | 73.3% |
| negative | 3 | 20.0% |
| smoke | 1 | 6.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 15 | 100.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 15 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 14 | 93.3% |
| @negative | 3 | 20.0% |
| @smoke | 1 | 6.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPSKL-135](#tc-empskl-135-page-shows-title-description-department-picker-and-add-skills) | Page shows title, description, department picker and Add Skills | Employee | smoke | high |
| [TC-EMPSKL-136](#tc-empskl-136-four-stat-cards-match-the-summary-api) | Four stat cards match the summary API | Employee | functional | high |
| [TC-EMPSKL-137](#tc-empskl-137-edit-and-delete-are-disabled-until-one-skill-is-selected) | Edit and Delete are disabled until one skill is selected | Employee | functional | high |
| [TC-EMPSKL-138](#tc-empskl-138-primary-secondary-tabs-change-per-skill-counts) | Primary / Secondary tabs change per-skill counts | Employee | functional | high |
| [TC-EMPSKL-139](#tc-empskl-139-search-narrows-the-skill-list) | Search narrows the skill list | Employee | functional | high |
| [TC-EMPSKL-140](#tc-empskl-140-search-with-no-match-shows-an-empty-state) | Search with no match shows an empty state | Employee | negative | high |
| [TC-EMPSKL-141](#tc-empskl-141-selecting-a-skill-shows-its-employees) | Selecting a skill shows its employees | Employee | functional | high |
| [TC-EMPSKL-142](#tc-empskl-142-edit-is-enabled-for-one-skill-and-the-edit-drawer-opens) | Edit is enabled for one skill and the Edit drawer opens | Employee | functional | high |
| [TC-EMPSKL-143](#tc-empskl-143-edit-is-disabled-when-two-skills-are-selected) | Edit is disabled when two skills are selected | Employee | functional | high |
| [TC-EMPSKL-144](#tc-empskl-144-add-skills-drawer-opens) | Add Skills drawer opens | Employee | functional | high |
| [TC-EMPSKL-145](#tc-empskl-145-department-switch-reloads-the-skill-list) | Department switch reloads the skill list | Employee | functional | high |
| [TC-EMPSKL-146](#tc-empskl-146-team-manager-can-open-skills-and-sees-scoped-stats) | Team Manager can open Skills and sees scoped stats | Employee | functional | high |
| [TC-EMPSKL-147](#tc-empskl-147-engineering-manager-can-open-skills-and-sees-scoped-stats) | Engineering Manager can open Skills and sees scoped stats | Employee | functional | high |
| [TC-EMPSKL-148](#tc-empskl-148-employee-is-blocked-from-skills) | Employee is blocked from Skills | Employee | negative | high |
| [TC-EMPSKL-149](#tc-empskl-149-csm-is-blocked-from-skills) | CSM is blocked from Skills | Employee | negative | high |

---

## Employee

15 test cases.

### Functional (11)

#### TC-EMPSKL-136 — Four stat cards match the summary API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Total 484, Departments 41, With employees 224, Unassigned 260 - same as the API; With + Unassigned = Total |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Open Skills
2. Read the 4 cards
3. Compare with GET /skills/summary

**Expected**

Total 484, Departments 41, With employees 224, Unassigned 260 - same as the API; With + Unassigned = Total

#### TC-EMPSKL-137 — Edit and Delete are disabled until one skill is selected

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Edit is aria-disabled with a tooltip explaining why |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Open Skills
2. Hover Edit with nothing selected

**Expected**

Edit is aria-disabled with a tooltip explaining why

#### TC-EMPSKL-138 — Primary / Secondary tabs change per-skill counts

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Each tab calls department-skill-stats with the matching proficiency; skill list stays the same, counts change |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Click Primary, then Secondary, then All
2. Check the API calls

**Expected**

Each tab calls department-skill-stats with the matching proficiency; skill list stays the same, counts change

#### TC-EMPSKL-139 — Search narrows the skill list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Only matching skills remain |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Type 'Adobe' in Search

**Expected**

Only matching skills remain

#### TC-EMPSKL-141 — Selecting a skill shows its employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | 'Employee Strength: 2 Employees (2% of total)'; table has Employees, Availability, Skills Type, Last Updated columns |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Click Adobe XD

**Expected**

'Employee Strength: 2 Employees (2% of total)'; table has Employees, Availability, Skills Type, Last Updated columns

#### TC-EMPSKL-142 — Edit is enabled for one skill and the Edit drawer opens

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Edit drawer opens |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Select one skill
2. Click Edit

**Expected**

Edit drawer opens

#### TC-EMPSKL-143 — Edit is disabled when two skills are selected

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Edit becomes aria-disabled; table shows both skills' employees |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Select Adobe XD and Agile

**Expected**

Edit becomes aria-disabled; table shows both skills' employees

#### TC-EMPSKL-144 — Add Skills drawer opens

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Drawer with Department / Logo / Tags fields opens |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Click Add Skills

**Expected**

Drawer with Department / Logo / Tags fields opens

#### TC-EMPSKL-145 — Department switch reloads the skill list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Skill list reloads for that department (350 -> 7) |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Open the department picker (41 options)
2. Pick the 2nd department

**Expected**

Skill list reloads for that department (350 -> 7)

#### TC-EMPSKL-146 — Team Manager can open Skills and sees scoped stats

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | TM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Page loads, cards 19/3/16/3, Add Skills + Edit shown, no API errors |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Log in as TM
2. Open Skills

**Expected**

Page loads, cards 19/3/16/3, Add Skills + Edit shown, no API errors

#### TC-EMPSKL-147 — Engineering Manager can open Skills and sees scoped stats

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | EM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Page loads, cards 31/4/29/2, no API errors |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Log in as EM
2. Open Skills

**Expected**

Page loads, cards 31/4/29/2, no API errors

### Negative (3)

#### TC-EMPSKL-140 — Search with no match shows an empty state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | 'No skills matched your search.' is shown |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Type 'zzzznomatch' in Search

**Expected**

'No skills matched your search.' is shown

#### TC-EMPSKL-148 — Employee is blocked from Skills

| Field | Value |
| --- | --- |
| **Tags** | @functional, @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Employee |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Redirected to /unauthorized |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Log in as Employee
2. Open /employee/skills

**Expected**

Redirected to /unauthorized

#### TC-EMPSKL-149 — CSM is blocked from Skills

| Field | Value |
| --- | --- |
| **Tags** | @functional, @negative |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | CSM |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Redirected to /unauthorized |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Log in as CSM
2. Open /employee/skills

**Expected**

Redirected to /unauthorized

### Smoke (1)

#### TC-EMPSKL-135 — Page shows title, description, department picker and Add Skills

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1672 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1672 |
| **Sub Module** | Skills Overview (redesign) |
| **Expected Result** | Title 'Skills Overview', 'Skills usage across employees.', department picker and Add Skills button are visible |

**Preconditions**

SimERP DEV 6.8.1, /employee/skills; tested 5 Nov 2026 (read-only, no data changed)

**Steps**

1. Log in as Admin
2. Open Employee > Skills

**Expected**

Title 'Skills Overview', 'Skills usage across employees.', department picker and Add Skills button are visible
