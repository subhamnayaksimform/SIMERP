# Opportunity Allocation — Test Cases

**Total test cases:** 42  
**Modules covered:** Opportunity Allocation  
**Source:** `reports/test-cases/cases-2026-11-18-OPPTY-T1692.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 23 | 54.8% |
| regression | 8 | 19.0% |
| security | 7 | 16.7% |
| negative | 4 | 9.5% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 25 | 59.5% |
| medium | 8 | 19.0% |
| critical | 7 | 16.7% |
| low | 2 | 4.8% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 25 | 59.5% |
| medium | 8 | 19.0% |
| critical | 7 | 16.7% |
| low | 2 | 4.8% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 23 | 54.8% |
| @regression | 8 | 19.0% |
| @security | 7 | 16.7% |
| @negative | 4 | 9.5% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-5013](#tc-oppty-5013-picker-accepts-includecontractors-with-no-department) | Picker accepts includeContractors with no department | Opportunity Allocation | functional | high |
| [TC-OPPTY-5014](#tc-oppty-5014-department-includecontractors-returns-department-employees-plus-dept-less-contractors) | Department + includeContractors returns department employees plus dept-less contractors | Opportunity Allocation | functional | medium |
| [TC-OPPTY-5015](#tc-oppty-5015-contractor-who-has-a-department-shows-the-department-badge-not-contractor) | Contractor who has a department shows the department badge, not "Contractor" | Opportunity Allocation | functional | medium |
| [TC-OPPTY-5016](#tc-oppty-5016-every-picker-row-carries-iscontractor) | Every picker row carries isContractor | Opportunity Allocation | functional | low |
| [TC-OPPTY-5017](#tc-oppty-5017-invalid-includecontractors-value-is-refused) | Invalid includeContractors value is refused | Opportunity Allocation | negative | low |
| [TC-OPPTY-5018](#tc-oppty-5018-preferred-employee-field-is-usable-before-any-department-is-chosen) | Preferred Employee field is usable before any department is chosen | Opportunity Allocation | functional | high |
| [TC-OPPTY-5019](#tc-oppty-5019-save-department-employees-contractor-as-preferred-detail-returns-all-with-iscontractor) | Save department employees + contractor as preferred, detail returns all with isContractor | Opportunity Allocation | functional | high |
| [TC-OPPTY-5020](#tc-oppty-5020-ticket-info-shows-saved-preferred-employees-by-name) | Ticket Info shows saved preferred employees by name | Opportunity Allocation | functional | medium |
| [TC-OPPTY-5021](#tc-oppty-5021-removing-a-department-without-opening-the-dropdown-drops-its-employees-others-stay) | Removing a department without opening the dropdown drops its employees; others stay | Opportunity Allocation | regression | high |
| [TC-OPPTY-5022](#tc-oppty-5022-contractor-with-no-department-shows-the-contractor-badge) | Contractor with no department shows the "Contractor" badge | Opportunity Allocation | functional | high |
| [TC-OPPTY-5023](#tc-oppty-5023-dept-less-contractor-is-offered-before-any-department-is-chosen) | Dept-less contractor is offered before any department is chosen | Opportunity Allocation | functional | high |
| [TC-OPPTY-5024](#tc-oppty-5024-dept-less-contractor-stays-when-a-department-is-removed-badge-kept-on-reopen) | Dept-less contractor stays when a department is removed; badge kept on reopen | Opportunity Allocation | regression | high |
| [TC-OPPTY-5025](#tc-oppty-5025-tm-shortlisted-employee-does-not-see-the-opportunity-before-clearance) | TM-shortlisted Employee does not see the opportunity before clearance | Opportunity Allocation | security | critical |
| [TC-OPPTY-5026](#tc-oppty-5026-pending-candidate-opening-the-url-is-redirected-to-unauthorized) | Pending candidate opening the URL is redirected to Unauthorized | Opportunity Allocation | security | critical |
| [TC-OPPTY-5027](#tc-oppty-5027-approval-requested-but-not-approved-still-nothing) | Approval requested but not approved: still nothing | Opportunity Allocation | security | high |
| [TC-OPPTY-5028](#tc-oppty-5028-tm-approval-clears-the-candidate) | TM approval clears the candidate | Opportunity Allocation | functional | critical |
| [TC-OPPTY-5029](#tc-oppty-5029-pmo-bypass-clears-the-candidate) | PMO bypass clears the candidate | Opportunity Allocation | functional | critical |
| [TC-OPPTY-5030](#tc-oppty-5030-cleared-candidate-sees-only-own-card-no-preferred-employees-notes-prospect-notes) | Cleared candidate sees only own card, no preferred employees/notes/prospect notes | Opportunity Allocation | security | high |
| [TC-OPPTY-5031](#tc-oppty-5031-never-shortlisted-employee-gets-not-found-not-unauthorized) | Never-shortlisted Employee gets Not Found, not Unauthorized | Opportunity Allocation | security | critical |
| [TC-OPPTY-5032](#tc-oppty-5032-invalid-opportunity-id-gives-not-found) | Invalid opportunity id gives Not Found | Opportunity Allocation | negative | medium |
| [TC-OPPTY-5033](#tc-oppty-5033-candidate-rejected-before-approval-hears-nothing) | Candidate rejected before approval hears nothing | Opportunity Allocation | functional | high |
| [TC-OPPTY-5034](#tc-oppty-5034-re-initiate-notifies-only-cleared-candidates) | Re-initiate notifies only cleared candidates | Opportunity Allocation | functional | high |
| [TC-OPPTY-5035](#tc-oppty-5035-deleting-a-position-with-a-pending-candidate-does-not-notify-them) | Deleting a position with a pending candidate does not notify them | Opportunity Allocation | functional | high |
| [TC-OPPTY-5036](#tc-oppty-5036-direct-ticket-open-in-review-employee-hears-nothing) | Direct ticket Open / In Review: employee hears nothing | Opportunity Allocation | security | high |
| [TC-OPPTY-5037](#tc-oppty-5037-direct-rejected-from-in-review-employee-hears-nothing) | Direct rejected from In Review: employee hears nothing | Opportunity Allocation | functional | high |
| [TC-OPPTY-5038](#tc-oppty-5038-direct-awaiting-clears-the-employee) | Direct Awaiting clears the employee | Opportunity Allocation | functional | high |
| [TC-OPPTY-5039](#tc-oppty-5039-direct-rejected-from-awaiting-notification-without-link-or-reason) | Direct rejected from Awaiting: notification without link or reason | Opportunity Allocation | functional | high |
| [TC-OPPTY-5040](#tc-oppty-5040-opportunity-with-2-positions-sends-one-card) | Opportunity with 2 positions sends ONE card | Opportunity Allocation | functional | high |
| [TC-OPPTY-5041](#tc-oppty-5041-position-added-deleted-status-changed-each-send-one-card) | Position added / deleted / status changed each send one card | Opportunity Allocation | functional | high |
| [TC-OPPTY-5042](#tc-oppty-5042-candidate-events-send-a-card-to-the-candidate-s-own-department) | Candidate events send a card to the candidate's own department | Opportunity Allocation | functional | high |
| [TC-OPPTY-5043](#tc-oppty-5043-qa-employee-on-a-java-position-card-goes-to-qa-channel-not-java) | QA employee on a JAVA position: card goes to QA channel, not JAVA | Opportunity Allocation | functional | high |
| [TC-OPPTY-5044](#tc-oppty-5044-cards-show-round-time-in-ist-and-no-reasons-feedback-or-ratings) | Cards show round time in IST and no reasons, feedback or ratings | Opportunity Allocation | security | high |
| [TC-OPPTY-5045](#tc-oppty-5045-direct-stage-changed-and-direct-cancelled-send-cards) | Direct stage changed and Direct cancelled send cards | Opportunity Allocation | functional | medium |
| [TC-OPPTY-5046](#tc-oppty-5046-teams-delivery-failure-never-blocks-the-action) | Teams delivery failure never blocks the action | Opportunity Allocation | negative | critical |
| [TC-OPPTY-5047](#tc-oppty-5047-contractor-with-no-department-falls-back-to-the-position-s-departments) | Contractor with no department falls back to the position's departments | Opportunity Allocation | functional | medium |
| [TC-OPPTY-5048](#tc-oppty-5048-fixed-dynamic-ticket-can-be-edited-back-to-fixed) | Fixed→Dynamic ticket can be edited back to Fixed | Opportunity Allocation | regression | critical |
| [TC-OPPTY-5049](#tc-oppty-5049-back-to-fixed-restores-the-saved-percentage-not-0) | Back to Fixed restores the saved percentage, not 0 | Opportunity Allocation | regression | high |
| [TC-OPPTY-5050](#tc-oppty-5050-live-dynamic-allocation-still-cannot-be-edited-to-fixed) | Live Dynamic allocation still cannot be edited to Fixed | Opportunity Allocation | negative | high |
| [TC-OPPTY-5051](#tc-oppty-5051-cleared-end-date-and-effective-date-stay-cleared) | Cleared end date and effective date stay cleared | Opportunity Allocation | regression | high |
| [TC-OPPTY-5052](#tc-oppty-5052-tm-and-pmo-still-see-full-detail-with-notes) | TM and PMO still see full detail with notes | Opportunity Allocation | regression | high |
| [TC-OPPTY-5053](#tc-oppty-5053-tm-rm-and-csm-boards-load-as-before-pm-rule-unchanged) | TM, RM and CSM boards load as before; PM rule unchanged | Opportunity Allocation | regression | medium |
| [TC-OPPTY-5054](#tc-oppty-5054-preferred-employee-picker-unchanged-for-users-who-never-pick-a-contractor) | Preferred Employee picker unchanged for users who never pick a contractor | Opportunity Allocation | regression | medium |

---

## Opportunity Allocation

42 test cases.

### Functional (23)

#### TC-OPPTY-5013 — Picker accepts includeContractors with no department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s1.js |
| **Expected Result** | 200; only contractors with no department are returned (0 on dev) |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. GET /opportunities/candidates?includeContractors=true with no department

**Expected**

200; only contractors with no department are returned (0 on dev)

#### TC-OPPTY-5014 — Department + includeContractors returns department employees plus dept-less contractors

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s1.js |
| **Expected Result** | Totals differ only by dept-less contractors (94 = 94 + 0) |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Query QA with and without includeContractors

**Expected**

Totals differ only by dept-less contractors (94 = 94 + 0)

#### TC-OPPTY-5015 — Contractor who has a department shows the department badge, not "Contractor"

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u3.js / u4.js |
| **Expected Result** | Row shows QA badge; API isContractor=true with department QA |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open Preferred Employee dropdown on a QA position
2. Find Uday Dave (QA contractor)

**Expected**

Row shows QA badge; API isContractor=true with department QA

#### TC-OPPTY-5016 — Every picker row carries isContractor

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | low |
| **Severity** | low |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s1.js |
| **Expected Result** | isContractor boolean on every row |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Inspect candidate rows

**Expected**

isContractor boolean on every row

#### TC-OPPTY-5018 — Preferred Employee field is usable before any department is chosen

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u5.js |
| **Expected Result** | Field enabled and opens; list holds only dept-less contractors |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. /pre-sales/new
2. Pick Interview + Prospect
3. Open Preferred Employee with no department

**Expected**

Field enabled and opens; list holds only dept-less contractors

#### TC-OPPTY-5019 — Save department employees + contractor as preferred, detail returns all with isContractor

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s1.js |
| **Expected Result** | All 3 saved and returned |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Create opportunity with QA+ANDROID position
2. Preferred: Tanvi Parekh, Feni Kotak, Uday Dave

**Expected**

All 3 saved and returned

**Test Data**

- `note`: OPP-0378

#### TC-OPPTY-5020 — Ticket Info shows saved preferred employees by name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u2.js |
| **Expected Result** | Tanvi Parekh, Feni Kotak, Uday Dave listed |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open OPP-0378 > Ticket Info

**Expected**

Tanvi Parekh, Feni Kotak, Uday Dave listed

#### TC-OPPTY-5022 — Contractor with no department shows the "Contractor" badge

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | manual / blocked |
| **Expected Result** | Contractor badge shown |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open Preferred Employee
2. Find a dept-less contractor

**Expected**

Contractor badge shown

**Test Data**

- `note`: BLOCKED: no contractor without a department on dev (3,649 employees checked 17-18/11)

#### TC-OPPTY-5023 — Dept-less contractor is offered before any department is chosen

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | manual / blocked |
| **Expected Result** | Contractor listed with Contractor badge |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open field with no department

**Expected**

Contractor listed with Contractor badge

**Test Data**

- `note`: BLOCKED: no dept-less contractor on dev

#### TC-OPPTY-5028 — TM approval clears the candidate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | On board (view=MINE), detail opens, "You've been approved" notification |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. TM approves Yamini

**Expected**

On board (view=MINE), detail opens, "You've been approved" notification

#### TC-OPPTY-5029 — PMO bypass clears the candidate

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | On board, detail opens, notification received |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. PMO bypasses Riddhi

**Expected**

On board, detail opens, notification received

#### TC-OPPTY-5033 — Candidate rejected before approval hears nothing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | No notification, not on board or Rejected column |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Shortlist Arnav
2. PMO rejects before approval

**Expected**

No notification, not on board or Rejected column

#### TC-OPPTY-5034 — Re-initiate notifies only cleared candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | Riddhi and Yamini notified; Urvashi not |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Riddhi+Yamini cleared, Urvashi pending
2. Re-initiate Position A

**Expected**

Riddhi and Yamini notified; Urvashi not

#### TC-OPPTY-5035 — Deleting a position with a pending candidate does not notify them

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2b.js |
| **Expected Result** | Punit never notified |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Punit pending on B
2. Release cleared Sneha
3. Delete B

**Expected**

Punit never notified

**Test Data**

- `note`: Delete is refused while an approved candidate is In Process (existing rule OPP_025)

#### TC-OPPTY-5037 — Direct rejected from In Review: employee hears nothing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2b.js |
| **Expected Result** | No notification |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Reject OPP-0375 from In Review

**Expected**

No notification

#### TC-OPPTY-5038 — Direct Awaiting clears the employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2e.js |
| **Expected Result** | Notified; on Direct board; detail opens |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Move Direct to Awaiting

**Expected**

Notified; on Direct board; detail opens

**Test Data**

- `note`: OPP-0377

#### TC-OPPTY-5039 — Direct rejected from Awaiting: notification without link or reason

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2e.js |
| **Expected Result** | "…is now rejected." with no opportunity link and no reason |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Reject OPP-0376 from Awaiting

**Expected**

"…is now rejected." with no opportunity link and no reason

#### TC-OPPTY-5040 — Opportunity with 2 positions sends ONE card

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | One NEW OPPORTUNITY card in JAVA channel |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Create OPP-0379 with 2 JAVA positions

**Expected**

One NEW OPPORTUNITY card in JAVA channel

**Test Data**

- `note`: Action succeeded; Check card in the JAVA test channel (teams-java-log.json has exact IST times)

#### TC-OPPTY-5041 — Position added / deleted / status changed each send one card

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | One card each; deleted position card still sent |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Add + delete "Teams C"
2. OPP-0380 On Hold then Open

**Expected**

One card each; deleted position card still sent

**Test Data**

- `note`: Actions succeeded; Check card in the JAVA test channel (teams-java-log.json has exact IST times)

#### TC-OPPTY-5042 — Candidate events send a card to the candidate's own department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO / TM |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | One card per event in JAVA channel |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Shortlist, approval requested/withdrawn, approved, rejected, withdrawn, prep completed, scheduled, cancelled, round result, selected

**Expected**

One card per event in JAVA channel

**Test Data**

- `note`: Actions succeeded; Check card in the JAVA test channel (teams-java-log.json has exact IST times)

#### TC-OPPTY-5043 — QA employee on a JAVA position: card goes to QA channel, not JAVA

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | No card in JAVA channel |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Shortlist Yash Sinha on JAVA position

**Expected**

No card in JAVA channel

**Test Data**

- `note`: Check card in the JAVA test channel (teams-java-log.json has exact IST times)

#### TC-OPPTY-5045 — Direct stage changed and Direct cancelled send cards

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | Cards with Direct Stage |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. OPP-0381 In Review → Awaiting → Cancelled

**Expected**

Cards with Direct Stage

**Test Data**

- `note`: Check card in the JAVA test channel (teams-java-log.json has exact IST times)

#### TC-OPPTY-5047 — Contractor with no department falls back to the position's departments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | manual / blocked |
| **Expected Result** | Card in position department channel |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Shortlist dept-less contractor

**Expected**

Card in position department channel

**Test Data**

- `note`: BLOCKED: no dept-less contractor on dev

### Negative (4)

#### TC-OPPTY-5017 — Invalid includeContractors value is refused

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | low |
| **Severity** | low |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s1.js |
| **Expected Result** | 400 VAL_001 |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. includeContractors=notbool

**Expected**

400 VAL_001

#### TC-OPPTY-5032 — Invalid opportunity id gives Not Found

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js / u5.js |
| **Expected Result** | 404 / 400, never 403 |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open zero UUID and malformed id

**Expected**

404 / 400, never 403

#### TC-OPPTY-5046 — Teams delivery failure never blocks the action

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | Shortlist succeeds (201); delivery resumes after restore |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Break JAVA webhook signature
2. Shortlist Aditya Verma
3. Restore webhook

**Expected**

Shortlist succeeds (201); delivery resumes after restore

#### TC-OPPTY-5050 — Live Dynamic allocation still cannot be edited to Fixed

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1692 4 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 4. Allocation ticket edit fixes |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u12.js / s4d.js |
| **Expected Result** | UI "Cannot change to Fixed allocation…"; API 400 DYNAMIC→FIXED message |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. UA-0146 (Jay Kapoor, live Dynamic)
2. Choose Fixed

**Expected**

UI "Cannot change to Fixed allocation…"; API 400 DYNAMIC→FIXED message

### Regression (8)

#### TC-OPPTY-5021 — Removing a department without opening the dropdown drops its employees; others stay

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u3.js |
| **Expected Result** | Feni Kotak removed; Tanvi Parekh + Uday Dave stay; still there on reopen |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Edit position
2. Remove ANDROID
3. Save without opening Preferred Employee

**Expected**

Feni Kotak removed; Tanvi Parekh + Uday Dave stay; still there on reopen

#### TC-OPPTY-5024 — Dept-less contractor stays when a department is removed; badge kept on reopen

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 1 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 1. Contractors as Preferred Employees |
| **Automation** | manual / blocked |
| **Expected Result** | Contractor stays with Contractor badge |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Save employee + dept-less contractor
2. Remove the employee's department

**Expected**

Contractor stays with Contractor badge

**Test Data**

- `note`: BLOCKED: no dept-less contractor on dev

#### TC-OPPTY-5048 — Fixed→Dynamic ticket can be edited back to Fixed

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 4 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 4. Allocation ticket edit fixes |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u11.js |
| **Expected Result** | Saved FIXED 20 |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. UA-0147 (Prakash Rao, live Fixed) requests Dynamic
2. Edit → Fixed 20% → Save

**Expected**

Saved FIXED 20

#### TC-OPPTY-5049 — Back to Fixed restores the saved percentage, not 0

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 4 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 4. Allocation ticket edit fixes |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u12.js |
| **Expected Result** | Field shows 20 again; nothing to save |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Fixed 20 → Dynamic → Fixed

**Expected**

Field shows 20 again; nothing to save

#### TC-OPPTY-5051 — Cleared end date and effective date stay cleared

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 4 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 4. Allocation ticket edit fixes |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u12.js / s4d.js |
| **Expected Result** | Both blank; API empty |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Clear End Date + Effective From
2. Save
3. Reopen

**Expected**

Both blank; API empty

#### TC-OPPTY-5052 — TM and PMO still see full detail with notes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 Regression |
| **Priority** | high |
| **Severity** | high |
| **Role** | TM / PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 Regression |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | Full detail incl. prospect notes |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open detail as TM and PMO

**Expected**

Full detail incl. prospect notes

#### TC-OPPTY-5053 — TM, RM and CSM boards load as before; PM rule unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 Regression |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | TM / RM / CSM / PM |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 Regression |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/r1.js |
| **Expected Result** | Boards 200; PM 404 |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Load boards; PM opens unassigned prospect ticket

**Expected**

Boards 200; PM 404

#### TC-OPPTY-5054 — Preferred Employee picker unchanged for users who never pick a contractor

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1692 Regression |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 Regression |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u3.js |
| **Expected Result** | Lists department employees with badges, as before |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Pick department employees only

**Expected**

Lists department employees with badges, as before

### Security (7)

#### TC-OPPTY-5025 — TM-shortlisted Employee does not see the opportunity before clearance

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | Not on My Opportunities; no notification; detail API 403 |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. TM shortlists Riddhi Verma
2. Log in as Riddhi

**Expected**

Not on My Opportunities; no notification; detail API 403

**Test Data**

- `note`: OPP-0374

#### TC-OPPTY-5026 — Pending candidate opening the URL is redirected to Unauthorized

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/u6.js |
| **Expected Result** | Redirect to /unauthorized "You do not have access to this opportunity" |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Shortlist Neel Rathod (pending)
2. Open /pre-sales/<id> as Neel

**Expected**

Redirect to /unauthorized "You do not have access to this opportunity"

#### TC-OPPTY-5027 — Approval requested but not approved: still nothing

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js |
| **Expected Result** | No notification; 403 |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. PMO requests TM approval for Yamini
2. Log in as Yamini

**Expected**

No notification; 403

#### TC-OPPTY-5030 — Cleared candidate sees only own card, no preferred employees/notes/prospect notes

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js / u7.js |
| **Expected Result** | Only own card and position; notes, prospect notes and preferred employees hidden |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Open detail as cleared candidate (API + UI Ticket Info)

**Expected**

Only own card and position; notes, prospect notes and preferred employees hidden

#### TC-OPPTY-5031 — Never-shortlisted Employee gets Not Found, not Unauthorized

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | critical |
| **Severity** | critical |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2.js / u5.js |
| **Expected Result** | API 404 OPP_001; UI "Opportunity not found" |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Yash Sinha opens real opportunity URL

**Expected**

API 404 OPP_001; UI "Opportunity not found"

#### TC-OPPTY-5036 — Direct ticket Open / In Review: employee hears nothing

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 2 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 2. Candidate visibility until cleared |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/s2b.js |
| **Expected Result** | No notification, 403, not on board |
| **Result17 Nov** | passed |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Create Direct for Deepak / Iti
2. Move to In Review

**Expected**

No notification, 403, not on board

**Test Data**

- `note`: OPP-0375/0376

#### TC-OPPTY-5044 — Cards show round time in IST and no reasons, feedback or ratings

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1692 3 |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1692 |
| **Sub Module** | Interview flow — T1692 3. Teams notifications to TM channel |
| **Automation** | reports/screenshots/2026-11-17/t1692/scripts/t1.js |
| **Expected Result** | IST time; none of the SECRET texts appear. Code review: card has no reason/feedback/rating fields |
| **Result17 Nov** | skipped |

**Preconditions**

SimERP DEV 6.9.0 (API simerp-dev-api /api/v1); SI4-T1692 merged 16/11 (backend PR #636, frontend PR #566). PMO=vihaan.chatterjee, TM QA=sudhansu.patel, TM JAVA=mehul.pandya, CSM=tarun.sharma, plain Employees from QA/JAVA.

**Steps**

1. Round 20 Nov 15:30 IST; reject reason SECRET-REASON-123; feedback SECRET-FEEDBACK-456; cancel SECRET-CANCEL-789

**Expected**

IST time; none of the SECRET texts appear. Code review: card has no reason/feedback/rating fields

**Test Data**

- `note`: Code review passes; Check card in the JAVA test channel (teams-java-log.json has exact IST times)
