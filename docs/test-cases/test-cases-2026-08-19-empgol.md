# Goals — Test Cases

**Total test cases:** 12  
**Modules covered:** Goals  
**Source:** `reports/test-cases/cases-2026-08-19-EMPGOL.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 8 | 66.7% |
| negative | 2 | 16.7% |
| integration | 1 | 8.3% |
| smoke | 1 | 8.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 6 | 50.0% |
| medium | 5 | 41.7% |
| critical | 1 | 8.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 10 | 83.3% |
| critical | 1 | 8.3% |
| minor | 1 | 8.3% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 11 | 91.7% |
| regression-derived | 1 | 8.3% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 11 | 91.7% |
| speculative | 1 | 8.3% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 12 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 9 | 75.0% |
| @regression | 4 | 33.3% |
| @boundary | 2 | 16.7% |
| @negative | 2 | 16.7% |
| @needs-verification | 1 | 8.3% |
| @smoke | 1 | 8.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPGOL-105](#tc-empgol-105-filtering-the-goals-listing-by-department-narrows-the-list-to-that-department-s-relevant-goals) | Filtering the Goals Listing by Department narrows the list to that department's relevant goals | Goals | functional | high |
| [TC-EMPGOL-106](#tc-empgol-106-clearing-the-department-filter-restores-the-full-goals-listing) | Clearing the department filter restores the full Goals Listing | Goals | functional | medium |
| [TC-EMPGOL-107](#tc-empgol-107-add-goal-button-creates-a-new-goal-that-appears-correctly-under-the-currently-selected-department-filter) | Add Goal button creates a new goal that appears correctly under the currently selected department filter | Goals | smoke | critical |
| [TC-EMPGOL-108](#tc-empgol-108-editing-an-existing-goal-only-allows-changing-certificate-code-or-description-other-fields-are-locked) | Editing an existing goal only allows changing Certificate Code or Description — other fields are locked | Goals | functional | high |
| [TC-EMPGOL-109](#tc-empgol-109-attempting-to-modify-a-locked-field-e-g-goal-name-type-on-an-existing-goal-is-rejected) | Attempting to modify a locked field (e.g. Goal Name/Type) on an existing goal is rejected | Goals | negative | medium |
| [TC-EMPGOL-110](#tc-empgol-110-editing-certificate-code-on-an-existing-goal-persists-and-reflects-immediately-in-the-listing) | Editing Certificate Code on an existing goal persists and reflects immediately in the listing | Goals | functional | high |
| [TC-EMPGOL-111](#tc-empgol-111-editing-description-on-an-existing-goal-persists-and-reflects-immediately) | Editing Description on an existing goal persists and reflects immediately | Goals | functional | high |
| [TC-EMPGOL-112](#tc-empgol-112-editing-certificate-code-to-an-empty-value-on-a-certificate-type-goal-is-rejected) | Editing Certificate Code to an empty value on a Certificate-type goal is rejected | Goals | negative | medium |
| [TC-EMPGOL-113](#tc-empgol-113-assigned-employees-list-for-a-goal-is-scoped-to-the-currently-selected-department-filter) | Assigned-employees list for a goal is scoped to the currently selected department filter | Goals | functional | high |
| [TC-EMPGOL-114](#tc-empgol-114-switching-the-department-filter-while-viewing-a-goal-s-assignees-updates-the-list-to-the-newly-selected-department) | Switching the department filter while viewing a goal's assignees updates the list to the newly selected department | Goals | functional | medium |
| [TC-EMPGOL-115](#tc-empgol-115-organization-level-assigned-employee-count-column-shows-the-total-across-all-departments-independent-of-the-current-filter) | Organization-level assigned-employee count column shows the total across all departments, independent of the current filter | Goals | functional | high |
| [TC-EMPGOL-116](#tc-empgol-116-department-assigned-and-organization-assigned-counts-reconcile-with-the-underlying-api-totals) | Department-assigned and organization-assigned counts reconcile with the underlying API totals | Goals | integration | medium |

---

## Goals

12 test cases.

### Functional (8)

#### TC-EMPGOL-105 — Filtering the Goals Listing by Department narrows the list to that department's relevant goals

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): we can filter goals based on different departments |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee → Goals
2. Apply the department filter, selecting one department
3. Observe the Goals Listing

**Expected**

Goals Listing narrows to goals relevant to/assigned within the selected department

#### TC-EMPGOL-106 — Clearing the department filter restores the full Goals Listing

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): we can filter goals based on different departments |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply a department filter on the Goals Listing
2. Clear it

**Expected**

Full, unfiltered Goals Listing is restored

#### TC-EMPGOL-108 — Editing an existing goal only allows changing Certificate Code or Description — other fields are locked

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | Manual requirement (2026-08-19): once goal is made we can only edit certificate code or description from edit button |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Edit panel for an existing goal
2. Enumerate every field shown and record its enabled/disabled state

**Expected**

Only Certificate Code and Description are editable; Goal Name, Goal Type, and any other originally-set fields are disabled/read-only

**Automation Hint**

This is a newly reported constraint (2026-08-19) not previously captured in employee-details/goals.json — worth persisting to the Goals KB file once confirmed live.

#### TC-EMPGOL-110 — Editing Certificate Code on an existing goal persists and reflects immediately in the listing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): once goal is made we can only edit certificate code or description from edit button |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Edit panel for a Certificate-type goal
2. Change the Certificate Code
3. Save

**Expected**

New Certificate Code is saved and shown in the listing/detail view without a page reload

**Test Data**

- `newCertificateCode`: CERT-2026-TEST

#### TC-EMPGOL-111 — Editing Description on an existing goal persists and reflects immediately

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): once goal is made we can only edit certificate code or description from edit button |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Edit panel for an existing goal
2. Change the Description
3. Save

**Expected**

New Description is saved and shown without a page reload

**Test Data**

- `newDescription`: Updated via manual-requirement test 2026-08-19

#### TC-EMPGOL-113 — Assigned-employees list for a goal is scoped to the currently selected department filter

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): we can see assigned employees to this goal in the department we have selected |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a department filter
2. Open a goal's assigned-employees list

**Expected**

Only employees belonging to the currently selected department are listed for this goal

#### TC-EMPGOL-114 — Switching the department filter while viewing a goal's assignees updates the list to the newly selected department

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): we can see assigned employees to this goal in the department we have selected |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a goal's assigned-employees list while Department A is selected
2. Switch the filter to Department B
3. Re-check the assigned-employees list

**Expected**

List updates to show only Department B's assignees for that goal, without a page reload

#### TC-EMPGOL-115 — Organization-level assigned-employee count column shows the total across all departments, independent of the current filter

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): another column shows number of employees in the goal in the organizational level |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the organization-level count column for a goal with no department filter applied
2. Apply a department filter that narrows the department-scoped count
3. Re-check the organization-level count column

**Expected**

Organization-level count remains the same total regardless of the department filter; only the department-scoped count changes

### Integration (1)

#### TC-EMPGOL-116 — Department-assigned and organization-assigned counts reconcile with the underlying API totals

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | KB-direct: goals.json businessRules — employee-count reconciliation across surfaces |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read the department-assigned and organization-assigned counts for a goal from the UI
2. Fetch the corresponding goal API endpoint
3. Compare all three values

**Expected**

UI department count, UI organization count, and API totals all match exactly

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Negative (2)

#### TC-EMPGOL-109 — Attempting to modify a locked field (e.g. Goal Name/Type) on an existing goal is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): once goal is made we can only edit certificate code or description from edit button |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Edit panel for an existing goal
2. Attempt to interact with a locked field (e.g. Goal Name)

**Expected**

Field is disabled and cannot be changed through the UI; no write attempt reaches the API for this field

#### TC-EMPGOL-112 — Editing Certificate Code to an empty value on a Certificate-type goal is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation (required field on Certificate-type goal) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Edit panel for a Certificate-type goal
2. Clear the Certificate Code field
3. Attempt to save

**Expected**

Validation error is shown; empty Certificate Code is not persisted for a Certificate-type goal

**Test Data**

### Smoke (1)

#### TC-EMPGOL-107 — Add Goal button creates a new goal that appears correctly under the currently selected department filter

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): we can add or create goals using add goal button |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a specific department filter
2. Click Add Goal and fill in the mandatory fields
3. Save

**Expected**

New goal appears in the Goals Listing for the currently selected department, with correct initial (zero) assignment counts

**Test Data**

- `goalNamePrefix`: MANUAL-2026-08-19

**Automation Hint**

Reuse GoalsPage.createUniqueGoalName()/openAddGoalPanel() pattern from goals.page.ts.
