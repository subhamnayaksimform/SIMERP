# Employee Details — Test Cases

**Total test cases:** 15  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-07-14-EMPDET-pip-lean.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| boundary | 3 | 20.0% |
| functional | 3 | 20.0% |
| security | 3 | 20.0% |
| smoke | 3 | 20.0% |
| negative | 2 | 13.3% |
| regression | 1 | 6.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 6 | 40.0% |
| critical | 5 | 33.3% |
| medium | 4 | 26.7% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 7 | 46.7% |
| critical | 5 | 33.3% |
| minor | 3 | 20.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 15 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 14 | 93.3% |
| unverified-fallback | 1 | 6.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 14 | 93.3% |
| No | 1 | 6.7% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 4 | 26.7% |
| @security | 4 | 26.7% |
| @boundary | 3 | 20.0% |
| @negative | 3 | 20.0% |
| @regression | 3 | 20.0% |
| @smoke | 3 | 20.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-260](#tc-empdet-260-employee-list-shows-pip-indicator-only-for-active-pip-employees-with-accurate-tooltip-days-left) | Employee List shows PIP indicator only for active-PIP employees with accurate tooltip/Days Left | Employee Details | smoke | critical |
| [TC-EMPDET-261](#tc-empdet-261-pip-indicator-visibility-respects-existing-rbac-unauthorized-user-never-sees-pip-indicator-tooltip) | PIP indicator visibility respects existing RBAC — unauthorized user never sees PIP indicator/tooltip | Employee Details | smoke | critical |
| [TC-EMPDET-262](#tc-empdet-262-existing-search-sort-filter-and-pagination-continue-to-function-correctly-with-the-pip-indicator-present) | Existing search, sort, filter, and pagination continue to function correctly with the PIP indicator present | Employee Details | smoke | critical |
| [TC-EMPDET-268](#tc-empdet-268-employee-with-no-pip-record-at-all-does-not-display-the-pip-indicator) | Employee with no PIP record at all does not display the PIP indicator | Employee Details | functional | high |
| [TC-EMPDET-269](#tc-empdet-269-employee-with-a-future-upcoming-pip-start-date-in-the-future-does-not-display-the-indicator-yet) | Employee with a future/upcoming PIP (Start Date in the future) does not display the indicator yet | Employee Details | functional | high |
| [TC-EMPDET-270](#tc-empdet-270-employee-with-a-completed-cancelled-pip-status-does-not-display-the-indicator) | Employee with a completed/cancelled PIP status does not display the indicator | Employee Details | functional | high |
| [TC-EMPDET-278](#tc-empdet-278-invalid-pip-date-range-start-date-end-date-does-not-crash-the-page-or-misleadingly-show-an-active-indicator) | Invalid PIP date range (Start Date > End Date) does not crash the page or misleadingly show an active indicator | Employee Details | negative | medium |
| [TC-EMPDET-279](#tc-empdet-279-pip-end-date-has-passed-but-status-still-reads-active-indicator-must-not-misleadingly-imply-an-ongoing-pip) | PIP End Date has passed but Status still reads Active — indicator must not misleadingly imply an ongoing PIP | Employee Details | negative | high |
| [TC-EMPDET-284](#tc-empdet-284-pip-indicator-displays-correctly-when-pip-start-date-is-exactly-today-inclusive-lower-boundary) | PIP indicator displays correctly when PIP Start Date is exactly today (inclusive lower boundary) | Employee Details | boundary | medium |
| [TC-EMPDET-285](#tc-empdet-285-pip-indicator-displays-correctly-when-pip-end-date-is-exactly-today-inclusive-upper-boundary) | PIP indicator displays correctly when PIP End Date is exactly today (inclusive upper boundary) | Employee Details | boundary | medium |
| [TC-EMPDET-287](#tc-empdet-287-missing-blank-pip-reason-renders-a-graceful-fallback-in-the-tooltip-without-breaking-layout) | Missing/blank PIP Reason renders a graceful fallback in the tooltip without breaking layout | Employee Details | boundary | medium |
| [TC-EMPDET-308](#tc-empdet-308-existing-employee-list-search-filter-sort-pagination-behavior-is-fully-intact-end-to-end-after-the-pip-indicator-is-added) | Existing Employee List search/filter/sort/pagination behavior is fully intact end-to-end after the PIP indicator is added | Employee Details | regression | high |
| [TC-EMPDET-311](#tc-empdet-311-reporting-manager-cannot-view-pip-data-for-employees-outside-their-own-team-scope) | Reporting Manager cannot view PIP data for employees outside their own team scope | Employee Details | security | critical |
| [TC-EMPDET-312](#tc-empdet-312-employee-tm-viewer-role-never-sees-the-pip-indicator-or-tooltip-for-any-other-employee-s-row) | Employee/TM viewer role never sees the PIP indicator or tooltip for any other employee's row | Employee Details | security | critical |
| [TC-EMPDET-315](#tc-empdet-315-pip-reason-free-text-is-escaped-and-rendered-as-literal-text-in-the-tooltip-no-xss-execution) | PIP Reason free-text is escaped and rendered as literal text in the tooltip — no XSS execution | Employee Details | security | high |

---

## Employee Details

15 test cases.

### Boundary (3)

#### TC-EMPDET-284 — PIP indicator displays correctly when PIP Start Date is exactly today (inclusive lower boundary)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP starts today |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date = today

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee whose PIP starts today
3. Observe the PIP tag and Days Left value

**Expected**

PIP tag is shown (Start Date is inclusive); Days Left equals PIP End Date minus today

**Test Data**

- `pipStartDate`: today
- `pipEndDate`: today+15d

#### TC-EMPDET-285 — PIP indicator displays correctly when PIP End Date is exactly today (inclusive upper boundary)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP ends today |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP End Date = today

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee whose PIP ends today
3. Observe the PIP tag and Days Left value

**Expected**

PIP tag is shown on the last inclusive day; Days Left equals 0

**Test Data**

- `pipEndDate`: today

#### TC-EMPDET-287 — Missing/blank PIP Reason renders a graceful fallback in the tooltip without breaking layout

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Missing PIP reason |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP and blank/null Reason

**Steps**

1. Navigate to Employee Details (Current tab)
2. Hover the PIP tag for the employee with a blank Reason
3. Observe the Reason field in the tooltip

**Expected**

Tooltip renders without breaking; Reason field shows a graceful placeholder (assumed '-' or blank) instead of 'null'/'undefined' or a broken layout

**Test Data**

**Automation Hint**

Exact fallback copy for a missing PIP Reason is not specified in source — assumption only; verify actual copy once implemented.

### Functional (3)

#### TC-EMPDET-268 — Employee with no PIP record at all does not display the PIP indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees without an active PIP do not display the indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with zero PIP records

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate an employee with no PIP record
3. Observe the name cell

**Expected**

No PIP tag is rendered for this employee

#### TC-EMPDET-269 — Employee with a future/upcoming PIP (Start Date in the future) does not display the indicator yet

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees without an active PIP do not display the indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date > today

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with an upcoming PIP
3. Observe the name cell

**Expected**

No PIP tag is rendered until the PIP Start Date is reached

**Test Data**

- `pipStartDate`: today+7d
- `pipEndDate`: today+30d

#### TC-EMPDET-270 — Employee with a completed/cancelled PIP status does not display the indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees without an active PIP do not display the indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Status = Completed or Cancelled

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with a Completed/Cancelled PIP
3. Observe the name cell

**Expected**

No PIP tag is rendered for a Completed or Cancelled PIP record

**Test Data**

- `pipStatus`: Completed

### Negative (2)

#### TC-EMPDET-278 — Invalid PIP date range (Start Date > End Date) does not crash the page or misleadingly show an active indicator

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | NegativeScenario: Invalid PIP date range |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date > PIP End Date (corrupted data)

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with the invalid PIP date range
3. Observe the row and console for errors

**Expected**

No JavaScript crash/console error occurs; the PIP tag does not misleadingly present the record as an active, in-range PIP

**Test Data**

- `pipStartDate`: 2026-08-15
- `pipEndDate`: 2026-08-01

#### TC-EMPDET-279 — PIP End Date has passed but Status still reads Active — indicator must not misleadingly imply an ongoing PIP

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | NegativeScenario: PIP End Date passed, Status still Active |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP End Date in the past and PIP Status = Active (stale-status test data)

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with the expired-but-Active PIP record
3. Observe the PIP tag/tooltip

**Expected**

MANUAL — cannot assert a single fixed outcome: the requirement leaves the exact expiry behavior (auto-hide vs. Overdue status) undecided. At minimum, the indicator must not misleadingly imply an ongoing/current PIP.

**Test Data**

- `pipEndDate`: today-3d
- `pipStatus`: Active

**Automation Hint**

MANUAL — requirement unclear: PIP expiry behavior (auto-hide vs. Overdue status) is not yet decided per FR#5 — automation-generator and test-runner should treat this as blocked until the business decision is made.

### Regression (1)

#### TC-EMPDET-308 — Existing Employee List search/filter/sort/pagination behavior is fully intact end-to-end after the PIP indicator is added

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AffectedModule: Employee Details — Search/Filter/Sort/Pagination |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); full regression pass across Current tab

**Steps**

1. Run a full search/filter/sort/pagination pass across the Current tab with the PIP indicator present
2. Cross-check grid row count, result-count badge, and API total at each step

**Expected**

Every existing S/F/S/P behavior and count-matching rule continues to hold exactly as before this feature was added

### Security (3)

#### TC-EMPDET-311 — Reporting Manager cannot view PIP data for employees outside their own team scope

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | RoleMatrix: Reporting Manager cannot view PIP info for employees outside own scope |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) using test data scoped as a Reporting Manager for a specific team (a dedicated RM-role fixture/session is not available in this environment — Admin session used as a stand-in via scoped test data, not session identity; flag if a true RM login becomes available)

**Steps**

1. As the RM-scoped session, view the Employee List filtered/scoped to own team — confirm PIP tag visible for own-team members with active PIP
2. Attempt to view or navigate to an employee outside the RM's own team scope who also has an active PIP
3. Observe whether PIP data is visible for the out-of-scope employee

**Expected**

PIP indicator/tooltip is visible only for employees within the RM's own team scope; PIP data for employees outside that scope is not visible via UI or accessible via a direct API call for the same employee ID

**Test Data**

- `ownTeamEmployee`: in-scope, active PIP
- `otherTeamEmployee`: out-of-scope, active PIP

**Automation Hint**

No dedicated Reporting Manager fixture/session exists in this repo's auth setup (only primaryPage/Admin and testUserPage/Employee-TM) — a true RM-role session needs to be provisioned before this can be automated as written.

#### TC-EMPDET-312 — Employee/TM viewer role never sees the PIP indicator or tooltip for any other employee's row

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | RoleMatrix: Employee/TM viewer cannot view PIP indicator/tooltip for other employees; Regression: rbac — unauthorized role UI check |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture, Employee/TM viewer)

**Steps**

1. As testUserPage, navigate to Employee → Employee Details
2. Scan every visible row, including ones known to have an active PIP for other employees
3. Confirm no PIP tag/tooltip is rendered anywhere in the DOM for this session

**Expected**

No PIP tag or tooltip is present anywhere in the DOM for the Employee/TM viewer session, for any employee row other than possibly their own

#### TC-EMPDET-315 — PIP Reason free-text is escaped and rendered as literal text in the tooltip — no XSS execution

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | SecurityScenario: PIP Reason rendered safely (XSS) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Reason containing script/HTML payloads

**Steps**

1. Set the employee's PIP Reason field to contain '<script>alert(1)</script>' and other special characters
2. Navigate to Employee Details (Current tab) and hover the PIP tag
3. Observe the tooltip content and monitor for any script execution/dialog

**Expected**

No script executes (no alert/dialog fires); the payload renders as literal escaped text in the tooltip, consistent with the KB's existing search-input XSS handling for this module

**Test Data**

- `pipReason`: <script>alert(1)</script> " ' -- % null undefined

### Smoke (3)

#### TC-EMPDET-260 — Employee List shows PIP indicator only for active-PIP employees with accurate tooltip/Days Left

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | CriticalPath 1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); Current tab; at least one employee with an active PIP (Start Date <= today <= End Date, Status Active)

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee → Employee Details (Current tab)
3. Locate the row for the employee with an active PIP
4. Observe the PIP tag beside the employee name
5. Hover the PIP tag and read the tooltip

**Expected**

PIP tag is visible beside the employee's name; tooltip shows Status: PIP, Reason, Period (Start Date – End Date), and Days Left; Days Left equals PIP End Date minus current date

**Test Data**

- `pipStartDate`: today-5d
- `pipEndDate`: today+10d
- `pipStatus`: Active
- `pipReason`: Performance concerns Q2

**Automation Hint**

No confirmed live selector for the PIP tag/tooltip exists yet — automation-generator needs a live-app grounding pass before writing locators; use role/label-based selector, not an invented testid.

#### TC-EMPDET-261 — PIP indicator visibility respects existing RBAC — unauthorized user never sees PIP indicator/tooltip

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @security |
| **Requirement Ref** | CriticalPath 2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Two sessions: ceo@simformsolutions.com (primaryPage, Admin) with an active PIP employee visible; punit.patel@simformsolutions.com (testUserPage, Employee/TM viewer, no PIP-view permission)

**Steps**

1. As primaryPage, confirm the PIP tag is visible for the target employee
2. As testUserPage, navigate to Employee → Employee Details
3. Locate the same employee's row
4. Observe whether the PIP tag/tooltip is present

**Expected**

PIP tag and tooltip are completely absent from the DOM for the unauthorized/lower-privilege session, even though the same employee shows the tag for the authorized session

**Test Data**

- `employeeWithActivePip`: target employee row

**Automation Hint**

Open two browser contexts: primaryPage + testUserPage. Exact role/permission matrix for PIP visibility is unconfirmed — verify current default behavior, not an assumed matrix.

#### TC-EMPDET-262 — Existing search, sort, filter, and pagination continue to function correctly with the PIP indicator present

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @regression |
| **Requirement Ref** | CriticalPath 3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); Current tab; grid has 2+ pages of employees, some with active PIP

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee → Employee Details (Current tab)
3. Search by an employee name that has an active PIP
4. Clear search, sort by Name ascending then descending
5. Apply a Department filter, then navigate to page 2 and back to page 1

**Expected**

Search returns the correct employee with PIP tag intact; sort order is correct both directions; filter results/counts are correct; pagination returns the same records with PIP tags intact; grid row count, badge count, and API total all match at each step

**Test Data**

- `searchTerm`: employee surname
- `sortColumn`: Name
- `filterField`: Department
