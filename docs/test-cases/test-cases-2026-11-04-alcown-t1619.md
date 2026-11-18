# Allocation Tickets — Test Cases

**Total test cases:** 9  
**Modules covered:** Allocation Tickets  
**Source:** `reports/test-cases/cases-2026-11-04-ALCOWN-T1619.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| negative | 5 | 55.6% |
| functional | 4 | 44.4% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 9 | 100.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 9 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @regression | 9 | 100.0% |
| @negative | 5 | 55.6% |
| @functional | 4 | 44.4% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-ALCOWN-001](#tc-alcown-001-pmo-admin-assigns-an-owner-popup-save-gating-toast-column-details-page) | PMO/Admin assigns an owner (popup, Save gating, toast, column, details page) | Allocation Tickets | functional | high |
| [TC-ALCOWN-002](#tc-alcown-002-change-owner-a-to-b) | Change owner A to B | Allocation Tickets | functional | high |
| [TC-ALCOWN-003](#tc-alcown-003-cancel-keeps-owner-remove-owner-sets-unassigned) | Cancel keeps owner; Remove Owner sets Unassigned | Allocation Tickets | functional | high |
| [TC-ALCOWN-004](#tc-alcown-004-approved-closed-tickets-are-locked) | Approved / Closed tickets are locked | Allocation Tickets | negative | high |
| [TC-ALCOWN-005](#tc-alcown-005-interview-allocation-tab-has-no-owner-column) | Interview Allocation tab has no owner column | Allocation Tickets | functional | high |
| [TC-ALCOWN-006](#tc-alcown-006-pm-owner-visible-but-read-only) | PM: owner visible but read-only | Allocation Tickets | negative | high |
| [TC-ALCOWN-007](#tc-alcown-007-csm-owner-visible-but-read-only) | CSM: owner visible but read-only | Allocation Tickets | negative | high |
| [TC-ALCOWN-008](#tc-alcown-008-tm-owner-visible-but-read-only) | TM: owner visible but read-only | Allocation Tickets | negative | high |
| [TC-ALCOWN-009](#tc-alcown-009-em-owner-visible-but-read-only) | EM: owner visible but read-only | Allocation Tickets | negative | high |

---

## Allocation Tickets

9 test cases.

### Functional (4)

#### TC-ALCOWN-001 — PMO/Admin assigns an owner (popup, Save gating, toast, column, details page)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Title 'Assign Allocation Owner'; Save disabled until owner picked; toast 'Allocation owner updated'; column and details page show owner without refresh |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as Admin (ceo@)
2. Open My Tickets > Direct Allocation and search NA-0342
3. Click the Allocation Owner cell
4. Check title, ticket/project, Save disabled, no Remove Owner
5. Pick an owner and Save
6. Open the ticket details page

**Expected**

Title 'Assign Allocation Owner'; Save disabled until owner picked; toast 'Allocation owner updated'; column and details page show owner without refresh

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-002 — Change owner A to B

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Title 'Change Allocation Owner'; Remove Owner visible; Save disabled until a different person is picked; new owner shown |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as Admin
2. Open My Tickets > Direct Allocation and search NA-0342
3. Click the owner cell
4. Check title and Remove Owner button
5. Pick a different owner and Save

**Expected**

Title 'Change Allocation Owner'; Remove Owner visible; Save disabled until a different person is picked; new owner shown

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-003 — Cancel keeps owner; Remove Owner sets Unassigned

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Cancel changes nothing; toast 'Allocation owner removed'; cell shows Unassigned |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as Admin
2. Open My Tickets > Direct Allocation and search NA-0342
3. Open popup and Cancel
4. Reopen popup and click Remove Owner

**Expected**

Cancel changes nothing; toast 'Allocation owner removed'; cell shows Unassigned

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-005 — Interview Allocation tab has no owner column

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | No 'Allocation Owner' column |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as Admin
2. Open the Interview Allocation tab
3. Check the table headers

**Expected**

No 'Allocation Owner' column

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

### Negative (5)

#### TC-ALCOWN-004 — Approved / Closed tickets are locked

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | No popup opens for either ticket |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as Admin
2. Search NA-0475 (Closed) and UA-0144 (Approved)
3. Click each owner cell

**Expected**

No popup opens for either ticket

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-006 — PM: owner visible but read-only

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | PM |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Column visible; click opens no popup |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as PM
2. Open My Tickets
3. Check the Allocation Owner column
4. Click the owner cell

**Expected**

Column visible; click opens no popup

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-007 — CSM: owner visible but read-only

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | CSM |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Column visible; click opens no popup |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as CSM
2. Open My Tickets
3. Check the Allocation Owner column
4. Click the owner cell

**Expected**

Column visible; click opens no popup

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-008 — TM: owner visible but read-only

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | TM |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Column visible; click opens no popup |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as TM
2. Open My Tickets
3. Check the Allocation Owner column
4. Click the owner cell

**Expected**

Column visible; click opens no popup

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved

#### TC-ALCOWN-009 — EM: owner visible but read-only

| Field | Value |
| --- | --- |
| **Tags** | @regression, @negative |
| **Requirement Ref** | SI4-T1619 |
| **Priority** | high |
| **Severity** | medium |
| **Role** | EM |
| **Task Id** | SI4-T1619 |
| **Sub Module** | Allocation Owner |
| **Expected Result** | Column visible; click opens no popup |

**Preconditions**

SimERP DEV 6.8.1, My Tickets > Direct Allocation; tested 4 Nov 2026

**Steps**

1. Log in as EM
2. Open My Tickets
3. Check the Allocation Owner column
4. Click the owner cell

**Expected**

Column visible; click opens no popup

**Test Data**

- `ticket`: NA-0342 (Open)
- `locked`: NA-0475 Closed, UA-0144 Approved
