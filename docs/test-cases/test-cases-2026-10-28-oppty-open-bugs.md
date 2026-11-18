# Pre-sales Opportunities — Test Cases

**Total test cases:** 12  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-10-28-OPPTY-open-bugs.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| regression | 12 | 100.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| low | 7 | 58.3% |
| medium | 4 | 33.3% |
| high | 1 | 8.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| low | 7 | 58.3% |
| medium | 4 | 33.3% |
| high | 1 | 8.3% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 12 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 12 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 12 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @bug | 12 | 100.0% |
| @regression | 12 | 100.0% |
| @low | 7 | 58.3% |
| @medium | 4 | 33.3% |
| @high | 1 | 8.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPTY-5001](#tc-oppty-5001-bug-012-an-employee-can-be-approved-on-another-opportunity-beyond-their-free-capacity-with-no-warning) | BUG-012: An employee can be approved on another opportunity beyond their free capacity, with no warning | Pre-sales Opportunities | regression | high |
| [TC-OPPTY-5002](#tc-oppty-5002-bug-036-pm-sees-and-can-act-on-opportunities-on-her-project-that-are-not-assigned-to-her) | BUG-036: PM sees and can act on opportunities on her project that are not assigned to her | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-5003](#tc-oppty-5003-bug-038-interview-scheduled-notification-shows-gmt-date-only-rounds-show-the-previous-day) | BUG-038: "Interview scheduled" notification shows GMT; date-only rounds show the previous day | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-5004](#tc-oppty-5004-bug-039-allocation-ticket-created-from-an-interview-can-t-be-found-in-requests-tracking-row-shows-csm-employee-as) | BUG-039: Allocation ticket created from an interview can't be found in Requests Tracking; row shows CSM/Employee as "—" | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-5005](#tc-oppty-5005-bug-040-tm-can-shortlist-employees-of-other-departments) | BUG-040: TM can shortlist employees of other departments | Pre-sales Opportunities | regression | medium |
| [TC-OPPTY-5006](#tc-oppty-5006-bug-028-empty-create-form-shows-only-8-required-fields-left-no-message-on-each-field) | BUG-028: Empty create form shows only "8 required fields left", no message on each field | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-5007](#tc-oppty-5007-bug-042-tm-told-an-interview-allocation-was-a-direct-allocation-bypassing-the-ticket-workflow) | BUG-042: TM told an interview allocation was a "Direct Allocation … bypassing the ticket workflow" | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-5008](#tc-oppty-5008-bug-044-a-200-character-client-name-stretches-the-kanban-client-dropdown-across-the-screen) | BUG-044: A 200-character client name stretches the Kanban client dropdown across the screen | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-5009](#tc-oppty-5009-bug-045-empty-values-shown-as-a-bare) | BUG-045: Empty values shown as a bare "-" | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-5010](#tc-oppty-5010-bug-047-rejected-candidates-can-be-shortlisted-again-though-the-page-says-they-are-greyed-out) | BUG-047: Rejected candidates can be shortlisted again, though the page says they are greyed out | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-5011](#tc-oppty-5011-bug-021-priority-comes-from-the-allocation-date-not-ticket-age-frd-rule-9) | BUG-021: Priority comes from the allocation date, not ticket age (FRD rule 9) | Pre-sales Opportunities | regression | low |
| [TC-OPPTY-5012](#tc-oppty-5012-bug-023-candidate-notifications-are-third-person-with-pmo-instructions) | BUG-023: Candidate notifications are third person with PMO instructions | Pre-sales Opportunities | regression | low |

---

## Pre-sales Opportunities

12 test cases.

### Regression (12)

#### TC-OPPTY-5001 — BUG-012: An employee can be approved on another opportunity beyond their free capacity, with no warning

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @high |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — High |
| **Actual Result** | Before: 0% Sr. QA Engineer QA 50% 40% Remaining of 100% Shortlisted - Not sent \| bypass dialog warned about other allocation: false \| toast: Approval bypassed. \| after:  QA Engineer QA 50% 0% Remaining of 100% Being Prepared 1 / 1 Approved |
| **Finding Ref** | BUG-012 |
| **Last Result** | failed |
| **Notes** | Severity HIGH — Over-allocation: people end up booked over 100% without anyone noticing; QA lead rule says it must be blocked. Status: Open · Zoho SI4-I598. Area: Approval / capacity. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-012 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-012
- `status`: Open · Zoho SI4-I598
- `area`: Approval / capacity

**Automation Hint**

Playwright UI

#### TC-OPPTY-5002 — BUG-036: PM sees and can act on opportunities on her project that are not assigned to her

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @medium |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM maitri.bose |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Medium |
| **Actual Result** | maitri.bose (PM of AnalytixHub) — OPP-0323 (no PM assigned) listed=true; opens=true; Add/ Shortlist=true |
| **Finding Ref** | BUG-036 |
| **Last Result** | failed |
| **Notes** | Severity MEDIUM — Wrong access scope: a PM can shortlist on tickets that are not hers. Workaround: none in the UI. Status: Open · Zoho SI4-I597. Area: RBAC / PM scope. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-036 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-036
- `status`: Open · Zoho SI4-I597
- `area`: RBAC / PM scope

**Automation Hint**

Playwright UI

#### TC-OPPTY-5003 — BUG-038: "Interview scheduled" notification shows GMT; date-only rounds show the previous day

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @medium |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | candidate laxmi.khandelwal |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Medium |
| **Actual Result** | scheduled for Java Developer Your round 1 interview for 'Java Developer' on OPP-0322 is scheduled for Wed, 28 Oct 2026 12:30:00 GMT (round set to 28 Oct 18:00 IST) |
| **Finding Ref** | BUG-038 |
| **Last Result** | failed |
| **Notes** | Severity MEDIUM — Candidates can read the wrong day/time for their interview. The dialog shows the right date, so there is a workaround. Status: Open · Zoho SI4-I599. Area: Notifications. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-038 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-038
- `status`: Open · Zoho SI4-I599
- `area`: Notifications

**Automation Hint**

Playwright UI

#### TC-OPPTY-5004 — BUG-039: Allocation ticket created from an interview can't be found in Requests Tracking; row shows CSM/Employee as "—"

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @medium |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Medium |
| **Actual Result** | Direct tab search NA-0470 (Chirag Bajaj, from OPP-0306): No tickets found \| Interview tab row: OPP-0306 High AnalytixHub \| Advanced Analytics J JAVA — — Open 27/10/2026 Yesterday OPP-0305 High No project linked Q QA |
| **Finding Ref** | BUG-039 |
| **Last Result** | failed |
| **Notes** | Severity MEDIUM — Interview hires are not traceable from Requests Tracking. API still finds the ticket. Status: Open · Zoho SI4-I600. Area: Requests Tracking. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-039 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-039
- `status`: Open · Zoho SI4-I600
- `area`: Requests Tracking

**Automation Hint**

Playwright UI

#### TC-OPPTY-5005 — BUG-040: TM can shortlist employees of other departments

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @medium |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM mehul.pandya |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Medium |
| **Actual Result** | JAVA TM on OPP-0324: QA employee Kavya Khandelwal listed and tickable=true (Kavya Khandelwal kavya.khandelwal@simformsolutions.com P3 · Green, score 38.9, rank 2512 P) |
| **Finding Ref** | BUG-040 |
| **Last Result** | failed |
| **Notes** | Severity MEDIUM — Possible scope leak across departments; needs a product rule first. Status: Needs decision · Zoho SI4-I601. Area: Shortlisting / RBAC. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-040 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-040
- `status`: Needs decision · Zoho SI4-I601
- `area`: Shortlisting / RBAC

**Automation Hint**

Playwright UI

#### TC-OPPTY-5006 — BUG-028: Empty create form shows only "8 required fields left", no message on each field

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | Counter: "8 required fields left" \| per-field messages shown: 0 () \| Create button enabled=false |
| **Finding Ref** | BUG-028 |
| **Last Result** | failed |
| **Notes** | Severity LOW — Usability: users can't see which fields are missing; submit stays disabled so no bad data. Status: Open · Zoho SI4-I602. Area: Create form. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-028 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-028
- `status`: Open · Zoho SI4-I602
- `area`: Create form

**Automation Hint**

Playwright UI

#### TC-OPPTY-5007 — BUG-042: TM told an interview allocation was a "Direct Allocation … bypassing the ticket workflow"

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM mehul.pandya |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | Direct Allocation: AnalytixHub \| Advanced Analytics Bhumi Chauhan directly allocated Chirag Bajaj to AnalytixHub \| Advanced Analytics, bypassing the ticket workflow. |
| **Finding Ref** | BUG-042 |
| **Last Result** | failed |
| **Notes** | Severity LOW — Misleading message; no data impact. Status: Open · Zoho SI4-I603. Area: Notifications. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-042 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-042
- `status`: Open · Zoho SI4-I603
- `area`: Notifications

**Automation Hint**

Playwright UI

#### TC-OPPTY-5008 — BUG-044: A 200-character client name stretches the Kanban client dropdown across the screen

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | Dropdown width 1650px on a 1600px window with a 200-character client name |
| **Finding Ref** | BUG-044 |
| **Last Result** | failed |
| **Notes** | Severity LOW — Layout break only with very long names. Status: Open · Zoho SI4-I604. Area: Board filters. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-044 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-044
- `status`: Open · Zoho SI4-I604
- `area`: Board filters

**Automation Hint**

Playwright UI

#### TC-OPPTY-5009 — BUG-045: Empty values shown as a bare "-"

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | Project Description - \| End Date - |
| **Finding Ref** | BUG-045 |
| **Last Result** | failed |
| **Notes** | Severity LOW — Cosmetic (team empty-value rule). Status: Open · Zoho SI4-I605. Area: Candidate dialog. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-045 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-045
- `status`: Open · Zoho SI4-I605
- `area`: Candidate dialog

**Automation Hint**

Playwright UI

#### TC-OPPTY-5010 — BUG-047: Rejected candidates can be shortlisted again, though the page says they are greyed out

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | OPP-0322: Gunjan Rawat (rejected by TM on this ticket) listed and tickable=true |
| **Finding Ref** | BUG-047 |
| **Last Result** | failed |
| **Notes** | Severity LOW — Hint and behaviour disagree; needs a rule. Status: Needs decision · Zoho SI4-I606. Area: Shortlisting. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-047 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-047
- `status`: Needs decision · Zoho SI4-I606
- `area`: Shortlisting

**Automation Hint**

Playwright UI

#### TC-OPPTY-5011 — BUG-021: Priority comes from the allocation date, not ticket age (FRD rule 9)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO vihaan.chatterjee |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | Direct Kanban (PMO): each card's High / Medium / Low comes from the days until its tentative allocation date (≤7 High, ≤14 Medium, later Low — "Set from the tentative allocation date… Updated daily" hint on the form), not from ticket age as FRD rule 9 describes. Priorities on board: {"Medium":26,"High":9,"Low":5} |
| **Finding Ref** | BUG-021 |
| **Last Result** | failed |
| **Notes** | Severity LOW — FRD vs build difference; product decision. Status: Needs clarification · Zoho SI4-I607. Area: Priority. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-021 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-021
- `status`: Needs clarification · Zoho SI4-I607
- `area`: Priority

**Automation Hint**

Playwright UI

#### TC-OPPTY-5012 — BUG-023: Candidate notifications are third person with PMO instructions

| Field | Value |
| --- | --- |
| **Tags** | @regression, @bug, @low |
| **Requirement Ref** | FRD RoleWise v2.0 · QA lead decisions 26 Oct |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | candidate chirag.bajaj |
| **Task Id** | SI4-T1267 / SI4-T1446 |
| **Sub Module** | Open bugs — Low |
| **Actual Result** | Chirag Bajaj was selected for 'Java Developer' on OPP-0306 — proceed to Project Association. |
| **Finding Ref** | BUG-023 |
| **Last Result** | failed |
| **Notes** | Severity LOW — Copy; product to confirm wording. Status: Needs clarification · Zoho SI4-I608. Area: Notifications. |

**Preconditions**

SimERP DEV 6.5.0, re-verified live 28 Oct 2026 (steps and screenshots in docs/findings/2026-10-28-open-bugs-interview-flow.docx).

**Steps**

1. See BUG-023 in the open-bugs document for the exact steps

**Expected**

Behaviour as per FRD / QA lead rule

**Test Data**

- `bug`: BUG-023
- `status`: Needs clarification · Zoho SI4-I608
- `area`: Notifications

**Automation Hint**

Playwright UI
