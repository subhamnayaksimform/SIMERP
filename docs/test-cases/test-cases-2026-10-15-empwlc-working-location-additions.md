# Working Location — Test Cases

**Total test cases:** 9  
**Modules covered:** Working Location  
**Source:** `reports/test-cases/cases-2026-10-15-EMPWLC-working-location-additions.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| security | 5 | 55.6% |
| functional | 3 | 33.3% |
| regression | 1 | 11.1% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 3 | 33.3% |
| low | 3 | 33.3% |
| medium | 3 | 33.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 3 | 33.3% |
| low | 3 | 33.3% |
| medium | 3 | 33.3% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| code-review | 9 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| code-review | 9 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 8 | 88.9% |
| No | 1 | 11.1% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @security | 5 | 55.6% |
| @functional | 3 | 33.3% |
| @regression | 1 | 11.1% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPWLC-088](#tc-empwlc-088-pmo-login-as-a-plain-employee-wl-becomes-self-only) | PMO Login As a plain Employee: WL becomes self-only | Working Location | security | high |
| [TC-EMPWLC-089](#tc-empwlc-089-pmo-login-as-a-tm-dashboard-limited-to-the-tm-s-departments) | PMO Login As a TM: dashboard limited to the TM's departments | Working Location | security | high |
| [TC-EMPWLC-090](#tc-empwlc-090-pmo-login-as-a-csm-pm-project-column-has-no-overall) | PMO Login As a CSM/PM: project column has no Overall | Working Location | security | medium |
| [TC-EMPWLC-091](#tc-empwlc-091-pmo-cannot-login-as-an-admin) | PMO cannot Login As an Admin | Working Location | security | high |
| [TC-EMPWLC-092](#tc-empwlc-092-dashboard-filters-after-reload-or-back) | Dashboard filters after reload or Back | Working Location | functional | low |
| [TC-EMPWLC-093](#tc-empwlc-093-department-drill-down-does-not-re-scope-the-kpis-or-trend) | Department drill-down does not re-scope the KPIs or trend | Working Location | functional | low |
| [TC-EMPWLC-094](#tc-empwlc-094-tm-who-is-also-an-rm-reportees-outside-the-tm-s-departments) | TM who is also an RM: reportees outside the TM's departments | Working Location | security | medium |
| [TC-EMPWLC-095](#tc-empwlc-095-project-table-active-past-split-after-si4-t1526) | Project table Active/Past split after SI4-T1526 | Working Location | regression | medium |
| [TC-EMPWLC-096](#tc-empwlc-096-unassigned-logger-rows-on-the-pm-page-show-a-clear-wl-state) | Unassigned logger rows on the PM page show a clear WL state | Working Location | functional | low |

---

## Working Location

9 test cases.

### Functional (3)

#### TC-EMPWLC-092 — Dashboard filters after reload or Back

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin / PMO |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Dashboard filters |

**Preconditions**

Logged in with dashboard access. 

**Steps**

1. Open /working-location
2. Pick "Last 90 days"
3. Click a department
4. Reload the page
5. Navigate away and press Back

**Expected**

Currently resets to the default window with no department: useWorkingLocationOverviewFilters keeps state in React only, not in the URL. Record this as a usability gap. Other modules (Certifications TC-016) keep filters in the URL.

#### TC-EMPWLC-093 — Department drill-down does not re-scope the KPIs or trend

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin / PMO |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Dashboard filters |

**Preconditions**

Logged in with dashboard access. 

**Steps**

1. Open /working-location
2. Note the KPI row and trend
3. Click a department row
4. Compare the KPI row, trend and Employees table

**Expected**

Only the Employees table filters (GET /employees?departmentId). The KPI row and trend stay company-wide, because overview has no departmentId parameter. Confirm this is the intended UX.

#### TC-EMPWLC-096 — Unassigned logger rows on the PM page show a clear WL state

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | CSM (tarun.sharma@simformsolutions.com) |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Project WL column |

**Preconditions**

CSM project where an Active row has logged time but no assignment. 

**Steps**

1. Open the project detail Active tab
2. Read the Working Location cell of the unassigned logger row

**Expected**

The SELF scope only covers assignedProjects, so the cell gets no data. It should read "No record", not an error or "unavailable".

### Regression (1)

#### TC-EMPWLC-095 — Project table Active/Past split after SI4-T1526

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-T1526 indirect) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | CSM (tarun.sharma@simformsolutions.com) |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Project WL column |

**Preconditions**

CSM project with a logger who has no assignment and no logs in the last 3 months. 

**Steps**

1. Open the project detail
2. Check which tab the logger is under
3. Count Active rows with WL data vs the WL column

**Expected**

The logger is under Past, not Active. The Active WL column count equals the Active rows that have WL data.

### Security (5)

#### TC-EMPWLC-088 — PMO Login As a plain Employee: WL becomes self-only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md (FRD §6, SI4-T1525) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Login As scope |

**Preconditions**

Fresh PMO login (not the shared storageState); SI4-T1525 deployed. 

**Steps**

1. PMO → Login as an Employee
2. Open own profile and check the Working Location card
3. Open /working-location
4. Call GET /working-location/list?employeeIds=<another employee>
5. Return to PMO

**Expected**

The own card shows Overall. The dashboard is denied (no view_overview). Another employee's id returns 404 or is omitted.

#### TC-EMPWLC-089 — PMO Login As a TM: dashboard limited to the TM's departments

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md (FRD §6, SI4-T1525) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Login As scope |

**Preconditions**

Fresh PMO login (not the shared storageState); SI4-T1525 deployed. 

**Steps**

1. PMO → Login as the TM account
2. Open /working-location
3. Compare the department rollup with the TM's own GET overview
4. Return to PMO

**Expected**

The department rollup equals the TM's own GET overview (same as TC-060). It is not global.

#### TC-EMPWLC-090 — PMO Login As a CSM/PM: project column has no Overall

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md (FRD §6, SI4-T1525) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Login As scope |

**Preconditions**

Fresh PMO login (not the shared storageState); SI4-T1525 deployed. 

**Steps**

1. PMO → Login as the CSM
2. Open a project detail
3. Open the Working Location popup on a row
4. Inspect the API windows
5. Return to PMO

**Expected**

Only 15/30/90 rows. The API windows has no Overall for project staff.

#### TC-EMPWLC-091 — PMO cannot Login As an Admin

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-T1525) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Login As scope |

**Preconditions**

Fresh PMO login (not the shared storageState); SI4-T1525 deployed. 

**Steps**

1. Open ceo@'s profile
2. Click Login as → Yes, Login
3. Check the session

**Expected**

403 AUTH_022. The session does not change. (Shared with the Admin/Users suite.)

#### TC-EMPWLC-094 — TM who is also an RM: reportees outside the TM's departments

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1375 · docs/findings/2026-10-15-certs-wl-code-changes.md (FRD §4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | TM who is also an RM |
| **Task Id** | 688906000093883190 |
| **Sub Module** | Role scope |

**Preconditions**

Needs data: a TM with a direct report in a department they don't manage. 

**Steps**

1. Log in as the TM+RM
2. Look for the out-of-department reportee in Working Location views/list

**Expected**

Per the code, only the broadest scope (DEPARTMENT) is applied, combined with self/PM/CSM but not TEAM. The out-of-department reportee is invisible. That may break FRD §4 (RM: own direct reports).
