# My Projects — Test Cases

**Total test cases:** 25  
**Modules covered:** My Projects  
**Source:** `reports/test-cases/cases-2026-10-15-PASTAL-past-allocation-move.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 8 | 32.0% |
| regression | 8 | 32.0% |
| boundary | 3 | 12.0% |
| integration | 2 | 8.0% |
| security | 2 | 8.0% |
| negative | 1 | 4.0% |
| smoke | 1 | 4.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 12 | 48.0% |
| high | 7 | 28.0% |
| low | 5 | 20.0% |
| critical | 1 | 4.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 12 | 48.0% |
| high | 7 | 28.0% |
| low | 5 | 20.0% |
| critical | 1 | 4.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| code-review | 13 | 52.0% |
| observed-live | 12 | 48.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| code-review | 13 | 52.0% |
| observed-live | 12 | 48.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 19 | 76.0% |
| No | 6 | 24.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 8 | 32.0% |
| @regression | 8 | 32.0% |
| @boundary | 3 | 12.0% |
| @integration | 2 | 8.0% |
| @security | 2 | 8.0% |
| @negative | 1 | 4.0% |
| @smoke | 1 | 4.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-PASTAL-001](#tc-pastal-001-dormant-unallocated-logger-appears-in-past-tab) | Dormant unallocated logger appears in Past tab | My Projects | smoke | critical |
| [TC-PASTAL-002](#tc-pastal-002-dormant-logger-absent-from-active-tab-and-counts) | Dormant logger absent from Active tab and counts | My Projects | functional | high |
| [TC-PASTAL-003](#tc-pastal-003-unallocated-but-recent-logger-stays-active) | Unallocated but recent logger stays Active | My Projects | regression | high |
| [TC-PASTAL-004](#tc-pastal-004-allocated-employee-with-no-recent-hours-stays-active) | Allocated employee with no recent hours stays Active | My Projects | regression | high |
| [TC-PASTAL-005](#tc-pastal-005-deallocated-archived-employee-still-in-past-with-reason) | Deallocated (ARCHIVED) employee still in Past with reason | My Projects | regression | medium |
| [TC-PASTAL-006](#tc-pastal-006-offboarded-employee-still-in-past) | Offboarded employee still in Past | My Projects | regression | medium |
| [TC-PASTAL-007](#tc-pastal-007-same-behaviour-for-csm) | Same behaviour for CSM | My Projects | functional | high |
| [TC-PASTAL-008](#tc-pastal-008-timeframe-switch-does-not-change-membership) | Timeframe switch does not change membership | My Projects | functional | medium |
| [TC-PASTAL-009](#tc-pastal-009-past-tab-hours-per-timeframe) | Past-tab hours per timeframe | My Projects | boundary | medium |
| [TC-PASTAL-010](#tc-pastal-010-list-card-excludes-dormant-logger) | List card excludes dormant logger | My Projects | functional | medium |
| [TC-PASTAL-011](#tc-pastal-011-list-total-hours-vs-detail-total-b1) | List total hours vs detail total (B1) | My Projects | regression | medium |
| [TC-PASTAL-012](#tc-pastal-012-pr-reviewer-dormant-logger-b2) | PR reviewer + dormant logger (B2) | My Projects | regression | medium |
| [TC-PASTAL-013](#tc-pastal-013-projects-page-side-panel-consistency-b3) | Projects page / side panel consistency (B3) | My Projects | integration | medium |
| [TC-PASTAL-014](#tc-pastal-014-move-back-after-logging-hours) | Move back after logging hours | My Projects | functional | high |
| [TC-PASTAL-015](#tc-pastal-015-hours-on-a-different-project-don-t-move-back) | Hours on a different project don't move back | My Projects | negative | medium |
| [TC-PASTAL-016](#tc-pastal-016-boundary-last-hours-on-sync-date-3-months) | Boundary: last hours on sync date − 3 months | My Projects | boundary | medium |
| [TC-PASTAL-017](#tc-pastal-017-future-dated-zoho-entry) | Future-dated Zoho entry | My Projects | boundary | low |
| [TC-PASTAL-018](#tc-pastal-018-archived-employee-who-logs-again) | ARCHIVED employee who logs again | My Projects | functional | low |
| [TC-PASTAL-019](#tc-pastal-019-search-on-past-tab-finds-dormant-logger) | Search on Past tab finds dormant logger | My Projects | functional | low |
| [TC-PASTAL-020](#tc-pastal-020-past-tab-empty-fields-are-readable) | Past-tab empty fields are readable | My Projects | functional | low |
| [TC-PASTAL-021](#tc-pastal-021-api-contract) | API contract | My Projects | integration | medium |
| [TC-PASTAL-022](#tc-pastal-022-rbac-pmo-admin-cannot-read-pm-projects) | RBAC: PMO/Admin cannot read pm-projects | My Projects | security | high |
| [TC-PASTAL-023](#tc-pastal-023-rbac-pm-cannot-read-another-pm-s-project) | RBAC: PM cannot read another PM's project | My Projects | security | high |
| [TC-PASTAL-024](#tc-pastal-024-stale-missing-3m-sync-b4) | Stale/missing 3m sync (B4) | My Projects | regression | medium |
| [TC-PASTAL-025](#tc-pastal-025-stats-unaffected) | Stats unaffected | My Projects | regression | low |

---

## My Projects

25 test cases.

### Boundary (3)

#### TC-PASTAL-009 — Past-tab hours per timeframe

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Timeframe filter |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Read the dormant row's hours at 3m
2. Read them at 6m
3. Read them at all

**Expected**

0 h at 3m/30d/15d/5d; > 0 at all (and at 6m if within 6 months)

#### TC-PASTAL-016 — Boundary: last hours on sync date − 3 months

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | 3-month window |

**Preconditions**

Needs a Zoho time entry and a Zoho sync (cannot be done in SimERP). Needs a Zoho entry dated exactly on the boundary.

**Steps**

1. Create a Zoho entry dated exactly sync date − 3 months
2. Sync and check the tab
3. Repeat with an entry one day earlier

**Expected**

Active (inclusive); a day earlier → Past

#### TC-PASTAL-017 — Future-dated Zoho entry

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | 3-month window |

**Preconditions**

Needs a Zoho time entry and a Zoho sync (cannot be done in SimERP). A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Dormant person gets a future-dated Zoho entry
2. Sync
3. Reload the project detail

**Expected**

Becomes Active (no upper bound) — confirm intended

### Functional (8)

#### TC-PASTAL-002 — Dormant logger absent from Active tab and counts

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Active Allocations tab |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Open the same project's Active tab
2. Search for the candidate
3. Compare tab badges with GET /pm-projects/:id employees / pastEmployees lengths

**Expected**

Candidate not in Active; badges match the API

#### TC-PASTAL-007 — Same behaviour for CSM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | CSM (tarun.sharma@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Past Allocations tab |

**Preconditions**

Logged in as CSM on a project where he is CSM.

**Steps**

1. Repeat TC-PASTAL-001
2. Repeat TC-PASTAL-002
3. Repeat TC-PASTAL-003

**Expected**

Same Active/Past split as for the PM

#### TC-PASTAL-008 — Timeframe switch does not change membership

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Timeframe filter |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Open the project detail
2. Switch timeframe 5d → 15d → 30d → 3m → 6m → all
3. Check the candidate's tab each time

**Expected**

Dormant person stays in Past under every timeframe; only hours change

#### TC-PASTAL-010 — List card excludes dormant logger

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Project list |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Open /my-projects
2. Set timeframe 6m, then all
3. Inspect the project card members

**Expected**

Dormant person is not on the project card

#### TC-PASTAL-014 — Move back after logging hours

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM + Zoho user |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Move back |

**Preconditions**

Needs a Zoho time entry and a Zoho sync (cannot be done in SimERP). A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Dormant person logs time on the project in Zoho
2. Admin runs the Zoho sync (or wait for 05:30 IST)
3. Reload the project detail

**Expected**

Moves to Active, still "Not Allocated"; no notification; no ticket/assignment created

#### TC-PASTAL-018 — ARCHIVED employee who logs again

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Move back |

**Preconditions**

Needs a Zoho time entry and a Zoho sync (cannot be done in SimERP). A deallocated (ARCHIVED) employee on the project.

**Steps**

1. Deallocated employee logs new hours in Zoho
2. Sync
3. Reload the project detail

**Expected**

Stays Past (per code) — confirm with PO

#### TC-PASTAL-019 — Search on Past tab finds dormant logger

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Past Allocations tab |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Open the Past tab and type the candidate's name in search
2. Open the Active tab and search the same name

**Expected**

Row found on Past; search on Active does not find it

#### TC-PASTAL-020 — Past-tab empty fields are readable

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Past Allocations tab |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Inspect the dormant row's cells in the Past tab

**Expected**

Placeholders are words ("Not Allocated", "Not specified"); no bare dash/null

### Integration (2)

#### TC-PASTAL-013 — Projects page / side panel consistency (B3)

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md (B3) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / Admin |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Cross-screen |

**Preconditions**

Logged in as PMO or Admin. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Open /projects → the same project
2. Open the employee profile → project side panel
3. Compare with /my-projects as PM

**Expected**

Code predicts the dormant logger is still shown as active there; raise with PO

#### TC-PASTAL-021 — API contract

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | API |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Call GET /pm-projects/:id
2. Inspect the dormant row

**Expected**

Dormant row only in pastEmployees, temporaryReplacement: null, no allocationFeedback

### Negative (1)

#### TC-PASTAL-015 — Hours on a different project don't move back

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Move back |

**Preconditions**

Needs a Zoho time entry and a Zoho sync (cannot be done in SimERP). A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Dormant person logs recent hours only on another project
2. Wait for/run the sync
3. Reload this project's detail

**Expected**

Still Past on this project

### Regression (8)

#### TC-PASTAL-003 — Unallocated but recent logger stays Active

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Active Allocations tab |

**Preconditions**

Logged in as PM. A "Not Allocated" row with hours > 0 at 3 Months exists.

**Steps**

1. Open the project detail at timeframe 3 Months
2. Find the Not Allocated row with hours > 0

**Expected**

Row stays in Active

#### TC-PASTAL-004 — Allocated employee with no recent hours stays Active

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Active Allocations tab |

**Preconditions**

Logged in as PM. An allocated row with 0 h at timeFrame=3m exists (check via API).

**Steps**

1. Call GET /pm-projects/:id?timeFrame=3m and pick an allocated row with 0 h
2. Open the project detail Active and Past tabs

**Expected**

Row stays Active; not in Past

#### TC-PASTAL-005 — Deallocated (ARCHIVED) employee still in Past with reason

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Past Allocations tab |

**Preconditions**

Logged in as PM. Project has a deallocated (ARCHIVED) member.

**Steps**

1. Open the Past Allocations tab
2. Find the ARCHIVED rows and read the reason

**Expected**

ARCHIVED rows unchanged; exit reason shown where recorded

#### TC-PASTAL-006 — Offboarded employee still in Past

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Past Allocations tab |

**Preconditions**

Logged in as PM. Project has an offboarded (deletedAt) member.

**Steps**

1. Open the Past Allocations tab
2. Find the offboarded rows

**Expected**

deletedAt rows are in Past

#### TC-PASTAL-011 — List total hours vs detail total (B1)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md (B1) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Project list |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Set timeframe all on /my-projects and note the card total
2. Open the project detail at timeframe all and note the total
3. Compare

**Expected**

Expected equal. Code predicts the list total is lower → defect candidate

#### TC-PASTAL-012 — PR reviewer + dormant logger (B2)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md (B2) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Active/Past split |

**Preconditions**

Logged in as PM. A PR reviewer who also has unallocated hours older than 3 months exists.

**Steps**

1. Open the project detail
2. Look for the PR reviewer in Active and in Past

**Expected**

Expected one row. Code predicts it appears in both tabs → defect candidate

#### TC-PASTAL-024 — Stale/missing 3m sync (B4)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md (B4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin (observe only) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Sync dependency |

**Preconditions**

Logged in as Admin. Observe only — do not trigger sync failures.

**Steps**

1. Check GET /sync-queue/jobs/summary (or /admin/job-queue-scheduler)
2. If the 3m job FAILED while others COMPLETED, review Past tabs

**Expected**

Risk: unallocated loggers wrongly in Past; record observations only

#### TC-PASTAL-025 — Stats unaffected

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | API |

**Preconditions**

Logged in as PM.

**Steps**

1. Call GET /pm-projects/stats before
2. Call it after the change / compare with the cards

**Expected**

Counts unchanged (assignment-based)

### Security (2)

#### TC-PASTAL-022 — RBAC: PMO/Admin cannot read pm-projects

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO, Admin |
| **Task Id** | 688906000094517275 |
| **Sub Module** | API |

**Preconditions**

Logged in as PMO, then Admin.

**Steps**

1. Call GET /pm-projects/:id

**Expected**

403 (no pm_projects.read)

#### TC-PASTAL-023 — RBAC: PM cannot read another PM's project

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | API |

**Preconditions**

Logged in as PM; the publicId of a project not owned by this user is known.

**Steps**

1. Call GET /pm-projects/:otherId

**Expected**

404

### Smoke (1)

#### TC-PASTAL-001 — Dormant unallocated logger appears in Past tab

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1526 · docs/findings/2026-10-15-past-allocation-move-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (hardik.trivedi@simformsolutions.com) |
| **Task Id** | 688906000094517275 |
| **Sub Module** | Past Allocations tab |

**Preconditions**

Logged in as PM. A project with a known dormant unallocated logger: a pastEmployees row with no assignment/allocation fields, no deletedAt and hoursLogged = 0 at timeFrame=3m but > 0 at timeFrame=all (see brief §6). 

**Steps**

1. Open /my-projects/<projectId>
2. Open the Past Allocations tab
3. Find the candidate

**Expected**

Candidate is listed in Past with Allocation "Not Allocated"; not in Active
