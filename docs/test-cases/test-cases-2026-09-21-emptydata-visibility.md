# Test Cases

**Total test cases:** 14  
**Modules covered:** Dashboard, Employee Details, PM Projects, Project Details  
**Source:** `reports/test-cases/cases-2026-09-21-EMPTYDATA-visibility.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By module

| Module | Count | Share |
| --- | ---: | ---: |
| Dashboard | 1 | 7.1% |
| Employee Details | 8 | 57.1% |
| PM Projects | 1 | 7.1% |
| Project Details | 4 | 28.6% |

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 5 | 35.7% |
| negative | 3 | 21.4% |
| boundary | 2 | 14.3% |
| integration | 2 | 14.3% |
| regression | 2 | 14.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 5 | 35.7% |
| medium | 5 | 35.7% |
| critical | 4 | 28.6% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 10 | 71.4% |
| critical | 3 | 21.4% |
| minor | 1 | 7.1% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 14 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 14 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 13 | 92.9% |
| No | 1 | 7.1% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 10 | 71.4% |
| @regression | 8 | 57.1% |
| @negative | 3 | 21.4% |
| @boundary | 2 | 14.3% |
| @a11y | 1 | 7.1% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-428](#tc-empdet-428-visa-column-shows-a-readable-label-instead-of-a-bare-dash-when-no-visa-is-recorded) | Visa column shows a readable label instead of a bare dash when no visa is recorded | Employee Details | functional | high |
| [TC-EMPDET-429](#tc-empdet-429-the-visa-column-uses-one-consistent-empty-treatment-across-every-row) | The Visa column uses one consistent empty treatment across every row | Employee Details | regression | high |
| [TC-EMPDET-430](#tc-empdet-430-empty-values-are-announced-to-screen-readers-not-left-as-bare-punctuation) | Empty values are announced to screen readers, not left as bare punctuation | Employee Details | functional | medium |
| [TC-EMPDET-431](#tc-empdet-431-past-employee-rows-never-render-an-empty-name) | Past Employee rows never render an empty Name | Employee Details | negative | critical |
| [TC-DASH-142](#tc-dash-142-activity-rows-never-render-an-empty-employee-name) | Activity rows never render an empty Employee Name | Dashboard | negative | critical |
| [TC-PROJDET-001](#tc-projdet-001-tech-stacks-shows-a-readable-label-when-a-project-has-no-stack-recorded) | Tech Stacks shows a readable label when a project has no stack recorded | Project Details | functional | high |
| [TC-PROJDET-002](#tc-projdet-002-ag-column-shows-a-readable-label-when-no-value-is-assigned) | AG column shows a readable label when no value is assigned | Project Details | functional | high |
| [TC-PROJDET-003](#tc-projdet-003-numeric-columns-distinguish-a-real-zero-from-an-unknown-value) | Numeric columns distinguish a real zero from an unknown value | Project Details | boundary | high |
| [TC-PROJDET-004](#tc-projdet-004-a-single-column-never-mixes-two-different-empty-treatments) | A single column never mixes two different empty treatments | Project Details | regression | critical |
| [TC-PMPROJ-096](#tc-pmproj-096-csm-my-projects-uses-the-same-empty-treatment-as-the-admin-projects-screen) | CSM My Projects uses the same empty treatment as the admin Projects screen | PM Projects | integration | medium |
| [TC-EMPDET-432](#tc-empdet-432-no-screen-renders-a-raw-null-undefined-or-nan-in-place-of-a-value) | No screen renders a raw null, undefined or NaN in place of a value | Employee Details | negative | critical |
| [TC-EMPDET-433](#tc-empdet-433-sorting-a-column-with-missing-values-keeps-every-row-and-groups-the-empties-predictably) | Sorting a column with missing values keeps every row and groups the empties predictably | Employee Details | boundary | medium |
| [TC-EMPDET-434](#tc-empdet-434-filtering-a-column-with-missing-values-offers-an-explicit-no-value-choice) | Filtering a column with missing values offers an explicit "no value" choice | Employee Details | functional | medium |
| [TC-EMPDET-435](#tc-empdet-435-exported-data-represents-missing-values-the-same-way-the-screen-does) | Exported data represents missing values the same way the screen does | Employee Details | integration | medium |

---

## Dashboard

1 test case.

### Negative (1)

#### TC-DASH-142 — Activity rows never render an empty Employee Name

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Dashboard
2. Read the Employee Name cell of every activity row

**Expected**

Every activity row names the employee it refers to; an empty name is reported as a data defect, not relabelled

**Test Data**

- `observedToday`: — in 2 rows of the Employee Name column

**Automation Hint**

Same treatment as TC-EMPDET-431 — this is a data-integrity check, not a copy check.

---

## Employee Details

8 test cases.

### Boundary (1)

#### TC-EMPDET-433 — Sorting a column with missing values keeps every row and groups the empties predictably

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee and record the row count
2. Sort by a column that contains missing values
3. Sort the other way

**Expected**

The row count is unchanged in both directions and rows with no value group together at one end — replacing the dash with words must not make them sort as ordinary text in the middle of real values

**Test Data**

- `column`: Visa

**Automation Hint**

Guards the most likely regression from this change: a label like "Not added" sorting alphabetically among real values.

### Functional (3)

#### TC-EMPDET-428 — Visa column shows a readable label instead of a bare dash when no visa is recorded

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Read the Visa cell of every row on the first page

**Expected**

No Visa cell renders a bare "—", "NA", "null" or an empty string; each empty value shows human-readable wording (at least two letters) that says the visa has not been added

**Test Data**

- `column`: Visa
- `rawPlaceholders`: —, –, -, --, N/A, NA, null, undefined, NaN, (blank)
- `observedToday`: — in 17 of 17 sampled rows

**Automation Hint**

Assert against the raw-placeholder list and a "contains letters" check — do not hardcode the exact wording, it is allowed to differ per field.

#### TC-EMPDET-430 — Empty values are announced to screen readers, not left as bare punctuation

| Field | Value |
| --- | --- |
| **Tags** | @functional, @a11y |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Inspect the accessible name/text of an empty Visa cell

**Expected**

The cell exposes meaningful text (or an aria-label/title) describing what is missing; a screen reader never reads out a lone dash character

**Test Data**

- `column`: Visa

**Automation Hint**

Read innerText plus aria-label/title on the cell and its child; assert at least one carries letters.

#### TC-EMPDET-434 — Filtering a column with missing values offers an explicit "no value" choice

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Open the filter for a column that has missing values
3. Read the available options

**Expected**

The filter lets a user select the missing-value group explicitly (the way UP (Manual) offers "Not set"), so records with no value remain findable

**Test Data**

- `column`: Visa

**Automation Hint**

UP (Manual) already does this — use it as the reference implementation.

### Integration (1)

#### TC-EMPDET-435 — Exported data represents missing values the same way the screen does

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to a screen offering an export
2. Export the current view
3. Open the file and inspect the columns that were empty on screen

**Expected**

The export carries either an empty cell or the same wording shown on screen — never a stray dash that a spreadsheet could misread as a formula or a negative number

**Automation Hint**

MANUAL — needs a downloaded file opened in a spreadsheet; automate only once an export endpoint is confirmed.

### Negative (2)

#### TC-EMPDET-431 — Past Employee rows never render an empty Name

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Open the Past Employee tab
3. Read the Name cell of every row

**Expected**

Every row shows a real employee name. A "—" under Name is missing DATA, not a formatting choice, and must be reported as a defect rather than restyled

**Test Data**

- `tab`: Past Employee
- `observedToday`: — in 6 rows of the Name column

**Automation Hint**

Keep this separate from the placeholder-wording cases: a nameless person record points at a broken join/backfill, and a nicer label would hide it.

#### TC-EMPDET-432 — No screen renders a raw null, undefined or NaN in place of a value

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Visit each list screen in turn (Employee, Projects, Dashboard, Competencies, Goals, Team)
2. Scan every rendered cell for raw language-level empty values

**Expected**

No cell anywhere renders "null", "undefined", "NaN" or "[object Object]" — these leak implementation detail regardless of what the chosen empty wording is

**Test Data**

- `forbidden`: null, undefined, NaN, [object Object]

**Automation Hint**

Cheap page-wide text scan; run it on every screen in the sweep list.

### Regression (1)

#### TC-EMPDET-429 — The Visa column uses one consistent empty treatment across every row

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee
2. Collect the Visa value of every row on the first page
3. Reduce the empty ones to their distinct text

**Expected**

All empty Visa cells render the SAME text — a column never mixes two treatments (today the Projects "Employees" column mixes "—" and "NA")

**Test Data**

- `column`: Visa

**Automation Hint**

Distinct-value assertion: the set of empty-cell strings for one column must have size <= 1.

---

## PM Projects

1 test case.

### Integration (1)

#### TC-PMPROJ-096 — CSM My Projects uses the same empty treatment as the admin Projects screen

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as tarun.sharma@simformsolutions.com (csmPage fixture)

**Steps**

1. Open My Projects as the CSM persona
2. Read the AG cell of every row
3. Compare the empty wording with the admin Projects screen for the same column

**Expected**

The same column shows the same empty wording on both screens — the treatment is a property of the field, not of the screen it happens to appear on

**Test Data**

- `column`: AG
- `observedToday`: — in 1 cell

**Automation Hint**

Cross-screen consistency: read both surfaces in one test and compare the strings.

---

## Project Details

4 test cases.

### Boundary (1)

#### TC-PROJDET-003 — Numeric columns distinguish a real zero from an unknown value

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Projects
2. Read the Total Hours and Employees cells across the first page
3. Compare against the same projects’ values from the API

**Expected**

A count that is genuinely zero renders as 0 (with its unit where applicable); a value that is unknown/not recorded renders as wording — the two are never collapsed into the same dash

**Test Data**

- `columns`: Total Hours, Employees
- `observedToday`: Total Hours — ×2; Employees — ×1 and NA ×1

**Automation Hint**

Needs the API comparison to tell "zero" from "unknown" — assert the rendering matches which of the two the data actually is.

### Functional (2)

#### TC-PROJDET-001 — Tech Stacks shows a readable label when a project has no stack recorded

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Projects
2. Read the Tech Stacks cell of every row on the first page

**Expected**

No Tech Stacks cell renders a bare placeholder; an empty stack reads as wording a user can understand

**Test Data**

- `column`: Tech Stacks
- `observedToday`: — in 99 cells

**Automation Hint**

Highest-volume offender found in the sweep — 99 cells on one page.

#### TC-PROJDET-002 — AG column shows a readable label when no value is assigned

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Projects
2. Read the AG cell of every row on the first page

**Expected**

No AG cell renders a bare placeholder; the empty state is expressed in words

**Test Data**

- `column`: AG
- `observedToday`: — in 21 cells

**Automation Hint**

The same column also appears on the CSM My Projects screen — see TC-PMPROJ-096.

### Regression (1)

#### TC-PROJDET-004 — A single column never mixes two different empty treatments

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Task: If any of the data is missing or not added, improve the visibility and avoid showing "—" for empty data (across the system) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Projects
2. Collect every empty-looking value in the Employees column
3. Reduce them to their distinct text

**Expected**

Exactly one empty treatment is used per column — the current mix of "—" and "NA" in Employees is the specific inconsistency this task exists to remove

**Test Data**

- `column`: Employees
- `observedToday`: the same column renders both "—" and "NA"

**Automation Hint**

This is the clearest evidence that no convention exists today; keep it even after the fix lands.
