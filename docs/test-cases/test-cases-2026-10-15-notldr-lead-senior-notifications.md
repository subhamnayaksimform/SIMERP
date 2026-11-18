# Notifications — Test Cases

**Total test cases:** 31  
**Modules covered:** Notifications  
**Source:** `reports/test-cases/cases-2026-10-15-NOTLDR-lead-senior-notifications.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 12 | 38.7% |
| boundary | 8 | 25.8% |
| negative | 5 | 16.1% |
| regression | 4 | 12.9% |
| integration | 1 | 3.2% |
| smoke | 1 | 3.2% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 12 | 38.7% |
| high | 9 | 29.0% |
| low | 7 | 22.6% |
| critical | 3 | 9.7% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 12 | 38.7% |
| high | 10 | 32.3% |
| low | 7 | 22.6% |
| critical | 2 | 6.5% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| code-review | 17 | 54.8% |
| observed-live | 9 | 29.0% |
| code-derived | 5 | 16.1% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| code-review | 17 | 54.8% |
| observed-live | 9 | 29.0% |
| code-derived | 5 | 16.1% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 31 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 12 | 38.7% |
| @boundary | 8 | 25.8% |
| @negative | 5 | 16.1% |
| @regression | 4 | 12.9% |
| @integration | 1 | 3.2% |
| @smoke | 1 | 3.2% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-NOTLDR-001](#tc-notldr-001-employee-rm-tm-recipients-unchanged) | Employee→RM→TM: recipients unchanged | Notifications | regression | high |
| [TC-NOTLDR-002](#tc-notldr-002-one-lead-between-rm-and-tm-is-notified-fresh-allocation) | One Lead between RM and TM is notified (fresh allocation) | Notifications | smoke | critical |
| [TC-NOTLDR-003](#tc-notldr-003-senior-and-lead-both-notified) | Senior and Lead both notified | Notifications | functional | critical |
| [TC-NOTLDR-004](#tc-notldr-004-nobody-above-the-tm-is-notified) | Nobody above the TM is notified | Notifications | negative | high |
| [TC-NOTLDR-005](#tc-notldr-005-pmo-bypass-reaches-middle-managers) | PMO bypass reaches middle managers | Notifications | functional | high |
| [TC-NOTLDR-006](#tc-notldr-006-replacement-notifies-the-new-developer-s-chain) | Replacement notifies the new developer's chain | Notifications | functional | medium |
| [TC-NOTLDR-007](#tc-notldr-007-increase-full-flow) | Increase (full flow) | Notifications | functional | high |
| [TC-NOTLDR-008](#tc-notldr-008-decrease-lighter-flow) | Decrease (lighter flow) | Notifications | functional | high |
| [TC-NOTLDR-009](#tc-notldr-009-deallocation-via-csm-flow) | Deallocation via CSM flow | Notifications | functional | high |
| [TC-NOTLDR-010](#tc-notldr-010-pmo-direct-allocation) | PMO direct allocation | Notifications | functional | high |
| [TC-NOTLDR-011](#tc-notldr-011-pmo-direct-update-remove-placeholder-tickets) | PMO direct update / remove (placeholder tickets) | Notifications | functional | high |
| [TC-NOTLDR-012](#tc-notldr-012-revert-cancel-withdraw-scheduled-change) | Revert / cancel / withdraw scheduled change | Notifications | functional | medium |
| [TC-NOTLDR-013](#tc-notldr-013-pr-reviewer-assign-update-remove) | PR reviewer assign / update / remove | Notifications | functional | medium |
| [TC-NOTLDR-014](#tc-notldr-014-email-matches-in-app-for-middle-managers) | Email matches in-app for middle managers | Notifications | integration | medium |
| [TC-NOTLDR-015](#tc-notldr-015-no-duplicate-for-a-pm-who-is-also-a-lead-acceptance-criteria) | No duplicate for a PM who is also a Lead (acceptance criteria) | Notifications | negative | critical |
| [TC-NOTLDR-016](#tc-notldr-016-no-duplicate-when-a-lead-is-also-the-assigned-department-tm) | No duplicate when a Lead is also the assigned-department TM | Notifications | negative | medium |
| [TC-NOTLDR-017](#tc-notldr-017-rm-is-the-tm) | RM is the TM | Notifications | boundary | medium |
| [TC-NOTLDR-018](#tc-notldr-018-chain-does-not-reach-a-tm) | Chain does not reach a TM | Notifications | boundary | medium |
| [TC-NOTLDR-019](#tc-notldr-019-soft-deleted-manager-in-the-chain) | Soft-deleted manager in the chain | Notifications | boundary | low |
| [TC-NOTLDR-020](#tc-notldr-020-inactive-rm) | Inactive RM | Notifications | boundary | low |
| [TC-NOTLDR-021](#tc-notldr-021-ms-teams-group-cards-unchanged) | MS Teams group cards unchanged | Notifications | regression | low |
| [TC-NOTLDR-022](#tc-notldr-022-same-behaviour-in-every-department) | Same behaviour in every department | Notifications | regression | medium |
| [TC-NOTLDR-023](#tc-notldr-023-non-allocation-rm-notifications-unchanged) | Non-allocation RM notifications unchanged | Notifications | regression | low |
| [TC-NOTLDR-024](#tc-notldr-024-actor-exclusion-still-works-in-pr-reviewer-flows) | Actor exclusion still works in PR-reviewer flows | Notifications | negative | medium |
| [TC-NOTLDR-025](#tc-notldr-025-in-app-link-for-middle-managers) | In-app link for middle managers | Notifications | functional | low |
| [TC-NOTLDR-026](#tc-notldr-026-department-tm-is-not-in-the-line-em-admin-above-the-rm) | Department TM is not in the line: EM/Admin above the RM | Notifications | boundary | high |
| [TC-NOTLDR-027](#tc-notldr-027-actor-in-the-chain-is-not-notified-about-their-own-action) | Actor in the chain is not notified about their own action | Notifications | negative | medium |
| [TC-NOTLDR-028](#tc-notldr-028-replacement-outgoing-developer-s-line) | Replacement: outgoing developer's line | Notifications | functional | medium |
| [TC-NOTLDR-029](#tc-notldr-029-ticket-assigned-to-a-department-other-than-the-employee-s-home-department) | Ticket assigned to a department other than the employee's home department | Notifications | boundary | medium |
| [TC-NOTLDR-030](#tc-notldr-030-tm-of-another-department-in-the-middle-of-the-line) | TM of another department in the middle of the line | Notifications | boundary | low |
| [TC-NOTLDR-031](#tc-notldr-031-reporting-line-changes-between-ticket-creation-and-approval) | Reporting line changes between ticket creation and approval | Notifications | boundary | low |

---

## Notifications

31 test cases.

### Boundary (8)

#### TC-NOTLDR-017 — RM is the TM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee whose RM holds TM for the department.

**Steps**

1. Trigger any covered allocation event for the employee
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM/TM gets the usual copies; nobody above is added

#### TC-NOTLDR-018 — Chain does not reach a TM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G2) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee D whose upward line never hits a TM for D's department.

**Steps**

1. Raise a New Allocation for D
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Only the RM is notified (by code design). Raise with the PO whether this matches the requirement (G2)

#### TC-NOTLDR-019 — Soft-deleted manager in the chain

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Line RM→X(deleted)→Lead→TM (DB/staging data needed).

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

X gets nothing; Lead is still notified

#### TC-NOTLDR-020 — Inactive RM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G4) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee whose RM is soft-deleted but the team still points to them.

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Code: RM, Senior and Lead all get nothing. Confirm the expected behaviour (G4)

#### TC-NOTLDR-026 — Department TM is not in the line: EM/Admin above the RM

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q1) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee in a department whose TM is not in the reporting line (e.g. Urvashi Kamath, FRONT END: Sagar Khanpara → Rajesh Kumar [EM] → David Lais [ADMIN] → CTO).

**Steps**

1. As PMO, direct-allocate the employee to a project
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per PO decision on Q1. Code today: the EM and the Admin each get one RM copy; the department TM gets only their usual TM copy. If EM/leadership must be excluded, this fails.

#### TC-NOTLDR-029 — Ticket assigned to a department other than the employee's home department

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q8) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B (home department X, line RM → Lead → TM of X). A TM of department Y exists who is not in B's line.

**Steps**

1. Raise a New Allocation for B and assign it to department Y
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

The chain is worked out from B's home department X: RM + Lead get the RM copy. The TM of Y gets only the TM copies it gets today, and only once.

#### TC-NOTLDR-030 — TM of another department in the middle of the line

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q9) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee whose line is RM → P → TM, where P holds the TM role for a different department only.

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

P is treated as a middle manager and gets one RM copy; the walk continues to the employee's own TM. Confirm with PO (Q9).

#### TC-NOTLDR-031 — Reporting line changes between ticket creation and approval

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q12) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B with line RM → Lead L1 → TM. An admin can change B's RM's team so the Lead becomes L2.

**Steps**

1. Raise a New Allocation for B
2. Before approval, change the line so L2 replaces L1
3. Complete approval
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

L2 (the line at approval time) gets the RM copy; L1 gets nothing (Q12).

### Functional (12)

#### TC-NOTLDR-003 — Senior and Lead both notified

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C with line RM→Senior→Lead→TM.

**Steps**

1. Raise a New Allocation ticket for employee C
2. Complete full approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM, Senior and Lead each get exactly one developer_rm_assigned

#### TC-NOTLDR-005 — PMO bypass reaches middle managers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B (RM→Lead→TM).

**Steps**

1. Raise a New Allocation ticket for employee B
2. As PMO, bypass approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Lead gets developer_rm_assigned (RM copy, no bypass wording); TM gets its bypass-override copy as before

#### TC-NOTLDR-006 — Replacement notifies the new developer's chain

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: An existing developer to be replaced by employee B.

**Steps**

1. Raise a REPLACE ticket replacing the existing developer with employee B
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

B's RM + Lead are notified; the outgoing developer's chain gets nothing (behaviour unchanged, note it)

#### TC-NOTLDR-007 — Increase (full flow)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B has an active allocation.

**Steps**

1. Raise an UPDATE (increase) ticket for B
2. Approve as PMO and TM
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get developer_rm_updated

#### TC-NOTLDR-008 — Decrease (lighter flow)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B has an active allocation.

**Steps**

1. Raise an UPDATE (decrease) ticket for B
2. As PMO, acknowledge
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get developer_rm_updated

#### TC-NOTLDR-009 — Deallocation via CSM flow

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C allocated on a CSM project.

**Steps**

1. As CSM, submit a deallocation
2. Confirm the dialog
3. As PMO, click Acknowledge & Deallocate
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM, Senior, Lead get developer_rm_deallocated; the email shows the effective end date

#### TC-NOTLDR-010 — PMO direct allocation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C.

**Steps**

1. As PMO, open /my-tickets/direct-allocation
2. Directly allocate employee C to a project
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM, Senior, Lead get direct_employee_rm_assigned; employee and PM copies unchanged

#### TC-NOTLDR-011 — PMO direct update / remove (placeholder tickets)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B allocated.

**Steps**

1. As PMO, directly update B's allocation
2. As PMO, directly remove B's allocation
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get developer_rm_updated, then developer_rm_deallocated

#### TC-NOTLDR-012 — Revert / cancel / withdraw scheduled change

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B has a scheduled future change.

**Steps**

1. Revert an allocation period
2. Cancel an upcoming allocation
3. Withdraw a scheduled change
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get allocation_reverted / allocation_cancelled / period_cancelled

#### TC-NOTLDR-013 — PR reviewer assign / update / remove

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B as PR reviewer candidate.

**Steps**

1. Approve a PR-reviewer ticket for B
2. Change B's review frequency
3. Remove B as PR reviewer
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM + Lead get pr_reviewer_rm_assigned, pr_reviewer.rm_updated, pr_reviewer.rm_deallocated

#### TC-NOTLDR-025 — In-app link for middle managers

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G9) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Notification link |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Lead (with or without DM role) received the notification from TC-NOTLDR-002.

**Steps**

1. As the Lead, click the notification
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Link is hidden when the user has no ticket-read permission; if shown, record whether the ticket opens (G9)

#### TC-NOTLDR-028 — Replacement: outgoing developer's line

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q7) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Ticket types |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Developer O allocated on a project; O's line is RM → Lead → TM. Replacement developer B.

**Steps**

1. Raise a Replacement ticket replacing O with B
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per PO decision on Q7. Code today: O, O's RM and O's Lead get nothing; B's RM and line get the assigned copy.

### Integration (1)

#### TC-NOTLDR-014 — Email matches in-app for middle managers

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Channels |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B; email delivery or redirect available on the environment.

**Steps**

1. Run TC-NOTLDR-002
2. Open the Lead's and the RM's emails and compare
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

One email to the Lead with the same subject/body as the RM's, greeting with the Lead's name

### Negative (5)

#### TC-NOTLDR-004 — Nobody above the TM is notified

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee C; note who the TM's own RM/EM is.

**Steps**

1. Perform the same action as TC-NOTLDR-003
2. Check the TM's own manager/EM
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

The TM's manager/EM gets no RM copy

#### TC-NOTLDR-015 — No duplicate for a PM who is also a Lead (acceptance criteria)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md (G1) |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: PM P is the Lead in employee X's chain and raises the ticket for X.

**Steps**

1. As PM P, raise a New Allocation for X
2. Complete approval
3. As P, count notifications for this action
4. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per acceptance criteria: P gets one notification. Code today: P gets pm_allocated + developer_rm_assigned (two). Expect failure (G1)

#### TC-NOTLDR-016 — No duplicate when a Lead is also the assigned-department TM

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Multi-department setup where the Lead holds TM for the ticket's assigned department.

**Steps**

1. Raise a New Allocation for the employee
2. Complete approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Exactly one developer_rm_assigned for that person

#### TC-NOTLDR-024 — Actor exclusion still works in PR-reviewer flows

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Acting PM is the Lead in the reviewer's chain.

**Steps**

1. As the PM, change the reviewer's frequency
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

The acting PM/Lead gets no pr_reviewer.rm_updated about their own change

#### TC-NOTLDR-027 — Actor in the chain is not notified about their own action

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-requirement-review.md (Q4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-derived |
| **Confidence** | code-derived |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: A PMO user who sits between the RM and TM in employee B's line.

**Steps**

1. Raise a New Allocation for B
2. As that PMO user, bypass TM/EM approval
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Per Q4 suggestion: the acting PMO gets no RM copy about their own bypass. Code today: they get it (G10).

### Regression (4)

#### TC-NOTLDR-001 — Employee→RM→TM: recipients unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee A whose RM reports directly to the department TM.

**Steps**

1. Raise a fresh New Allocation ticket for employee A
2. Approve it as PMO and as TM
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

RM gets "developer RM assigned"; TM gets its usual copies; nobody else in the line gets anything new

#### TC-NOTLDR-021 — MS Teams group cards unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Channels |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Teams webhook configured for the department.

**Steps**

1. Run TC-NOTLDR-002
2. Check the Teams card content and recipients
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Teams card content and recipients are the same as before the release; no Lead mentions

#### TC-NOTLDR-022 — Same behaviour in every department

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: A B-type employee (RM→Lead→TM) in two or more departments.

**Steps**

1. Raise and approve a New Allocation in each department
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

A Lead is notified in each department

#### TC-NOTLDR-023 — Non-allocation RM notifications unchanged

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Event coverage |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B with a visa or certification expiring, or a notice period starting.

**Steps**

1. Trigger or wait for the nightly job
2. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Only the RM is notified; the Lead is not

### Smoke (1)

#### TC-NOTLDR-002 — One Lead between RM and TM is notified (fresh allocation)

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1527 · docs/findings/2026-10-15-lead-senior-notifications-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM / CSM / TM (actors); RM, Senior, Lead, TM (recipients) |
| **Task Id** | 688906000094517381 |
| **Sub Module** | Reporting-line resolution |

**Preconditions**

Login/role accounts for PMO, PM, CSM, TM and the RM/Senior/Lead of the chosen employee. Before the action, note each recipient's latest notification time (or mark all as read). Setup: Employee B with line RM→Lead→TM.

**Steps**

1. Raise a New Allocation ticket for employee B
2. Complete full approval (PMO + TM)
3. As each recipient, open the bell / /notifications page (or GET /api/v1/notifications) and record eventType, title and body

**Expected**

Lead gets the same in-app title/body and email as the RM; TM unchanged
