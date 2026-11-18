# Allocation Tickets — Test Cases

**Total test cases:** 8  
**Modules covered:** Allocation Tickets  
**Source:** `reports/test-cases/cases-2026-10-21-SHDLNK-i483-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| regression | 5 | 62.5% |
| negative | 2 | 25.0% |
| functional | 1 | 12.5% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 8 | 100.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 8 | 100.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| manual-retest | 8 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| live | 8 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 8 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @regression | 5 | 62.5% |
| @SI4-I483 | 5 | 62.5% |
| @SI4-T1464 | 4 | 50.0% |
| @negative | 2 | 25.0% |
| @functional | 1 | 12.5% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-SHDLNK-043](#tc-shdlnk-043-a-new-shadow-ticket-is-not-applied-while-the-person-it-shadows-has-no-main-allocation) | A new-shadow ticket is not applied while the person it shadows has no main allocation | Allocation Tickets | regression | high |
| [TC-SHDLNK-044](#tc-shdlnk-044-promotion-of-a-shadow-whose-own-row-is-still-active-is-refused-and-stays-awaiting) | Promotion of a shadow whose own row is still active is refused and stays Awaiting | Allocation Tickets | negative | high |
| [TC-SHDLNK-045](#tc-shdlnk-045-promotion-goes-through-once-the-shadow-s-own-deallocation-ends-the-day-before) | Promotion goes through once the shadow's own deallocation ends the day before | Allocation Tickets | regression | high |
| [TC-SHDLNK-046](#tc-shdlnk-046-step-2-tickets-cannot-be-approved-before-both-step-1-deallocations) | Step-2 tickets cannot be approved before both step-1 deallocations | Allocation Tickets | regression | high |
| [TC-SHDLNK-047](#tc-shdlnk-047-new-shadow-cannot-be-applied-before-the-promotion-in-the-same-group) | New shadow cannot be applied before the promotion in the same group | Allocation Tickets | regression | high |
| [TC-SHDLNK-048](#tc-shdlnk-048-full-linked-swap-ends-in-the-right-state) | Full linked swap ends in the right state | Allocation Tickets | functional | high |
| [TC-SHDLNK-049](#tc-shdlnk-049-step-1-deallocation-cannot-be-withdrawn-after-step-2-is-approved) | Step-1 deallocation cannot be withdrawn after step 2 is approved | Allocation Tickets | negative | high |
| [TC-SHDLNK-050](#tc-shdlnk-050-withdrawing-a-pending-deallocation-restores-the-assignment-s-end-date) | Withdrawing a pending deallocation restores the assignment's end date | Allocation Tickets | regression | high |

---

## Allocation Tickets

8 test cases.

### Functional (1)

#### TC-SHDLNK-048 — Full linked swap ends in the right state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @SI4-T1464 |
| **Requirement Ref** | SI4-T1464 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Linked swap order rule |

**Preconditions**

G-7 after TC-SHDLNK-047.

**Steps**

1. As PMO set department DATA ENGINEERING + Kunal on NA-0393 and Bypass TM/EM Approval
2. Read HyperScale allocations and the G-7 card

**Expected**

Bhavesh ends 31/10. Kunal is main at the main's 20% from 01/11. Prakash shadows Kunal from 01/11. The card shows both steps approved.

**Test Data**

- `group`: G-7

### Negative (2)

#### TC-SHDLNK-044 — Promotion of a shadow whose own row is still active is refused and stays Awaiting

| Field | Value |
| --- | --- |
| **Tags** | @negative, @SI4-I483 |
| **Requirement Ref** | SI4-I483 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Separate tickets |

**Preconditions**

Kunal Menon (DATA ENGINEERING) is SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end) on HyperScale, FIXED 10%, 22/10 → 31/12/2026 (NA-0389). Prakash Pillai (QA) is free. Promotion NA-0390 raised (FIXED 20% from 01/11).

**Steps**

1. As PMO open NA-0390 and click Bypass TM/EM Approval → Confirm Bypass

**Expected**

Refused with a clear message, and the ticket stays Awaiting Confirmation with nothing applied.

**Test Data**

- `ticket`: NA-0390

#### TC-SHDLNK-049 — Step-1 deallocation cannot be withdrawn after step 2 is approved

| Field | Value |
| --- | --- |
| **Tags** | @negative, @SI4-T1464 |
| **Requirement Ref** | SI4-T1464 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Linked swap order rule |

**Preconditions**

G-7 fully approved.

**Steps**

1. As PMO DELETE the pending ASSIGNMENT_DEALLOCATE scheduled change of DA-0128 and of DA-0129

**Expected**

Refused, because approved step-2 tickets depend on them.

**Test Data**

- `group`: G-7

### Regression (5)

#### TC-SHDLNK-043 — A new-shadow ticket is not applied while the person it shadows has no main allocation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I483 |
| **Requirement Ref** | SI4-I483 (video 01/09, GridCompute NA-0264/NA-0265) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | CSM + PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Separate tickets |

**Preconditions**

Kunal Menon (DATA ENGINEERING) is SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end) on HyperScale, FIXED 10%, 22/10 → 31/12/2026 (NA-0389). Prakash Pillai (QA) is free.

**Steps**

1. As CSM priya.chopra raise two NEW_ALLOCATION tickets in one request: promotion of Kunal (Fresh, FIXED 20% from 01/11) and a SHADOW_DEVELOPER ticket shadowing Kunal (FIXED 20% from 01/11)
2. As PMO set department QA + Prakash on the new-shadow ticket, then Bypass TM/EM Approval in the UI
3. As PMO set department DATA ENGINEERING + Kunal on the promotion, then Bypass TM/EM Approval in the UI

**Expected**

The two tickets are handled consistently: the new shadow is not applied (or is blocked/warned) while Kunal has no main allocation from 01/11.

**Test Data**

- `project`: HyperScale
- `shadowFor`: Kunal Menon
- `newShadow`: Prakash Pillai

#### TC-SHDLNK-045 — Promotion goes through once the shadow's own deallocation ends the day before

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I483 |
| **Requirement Ref** | SI4-I483 · SI4-T1171 (date-aware overlap check) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | CSM + PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Separate tickets |

**Preconditions**

NA-0390 refused as in TC-SHDLNK-044.

**Steps**

1. As CSM raise a deallocation for Kunal's shadow row with end date 31/10 (DA-0125)
2. As PMO acknowledge DA-0125
3. As PMO retry bypass on NA-0390

**Expected**

The promotion is approved and applied, because the old row ends before the new one starts.

**Test Data**

- `ticket`: NA-0390
- `da`: DA-0125

#### TC-SHDLNK-046 — Step-2 tickets cannot be approved before both step-1 deallocations

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I483, @SI4-T1464 |
| **Requirement Ref** | SI4-T1464 · SI4-I483 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Linked swap order rule |

**Preconditions**

Linked group G-7 raised by CSM (SHADOW_TO_MAIN_NEW_SHADOW): DA-0128 (Bhavesh), DA-0129 (Kunal), NA-0393 (promotion), NA-0394 (new shadow).

**Steps**

1. As PMO bypass NA-0394 with department + Prakash in the body
2. As PMO bypass NA-0393 with department + Kunal in the body
3. Read both tickets

**Expected**

Both refused with 409 ALLOCATION_TICKET_172 naming DA-0128/DA-0129. Nothing saved.

**Test Data**

- `group`: G-7

#### TC-SHDLNK-047 — New shadow cannot be applied before the promotion in the same group

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I483, @SI4-T1464 |
| **Requirement Ref** | SI4-I483 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Linked swap order rule |

**Preconditions**

G-7 with DA-0128 and DA-0129 acknowledged (APPROVED). NA-0393 and NA-0394 open.

**Steps**

1. As PMO set department QA + Prakash on NA-0394 and Bypass TM/EM Approval in the UI, before touching NA-0393

**Expected**

Refused (or warned) until the promotion NA-0393 is approved, so a shadow is never attached to someone who isn't main yet.

**Test Data**

- `group`: G-7

#### TC-SHDLNK-050 — Withdrawing a pending deallocation restores the assignment's end date

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Endpoint contract: "the live assignment is written back" |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000093490501 |
| **Sub Module** | Scheduled changes |

**Preconditions**

Kunal's shadow row 22/10 → 31/12 with DA-0125 approved, which set its end to 31/10 (pending ASSIGNMENT_DEALLOCATE).

**Steps**

1. As PMO DELETE /allocation-tickets/scheduled-changes/{id} for the pending deallocation
2. Read the assignment
3. Try cancel-direct-allocation on the row

**Expected**

The end date goes back to 31/12 and the row can be cancelled.

**Test Data**

- `scheduledChange`: f9d8cd5d…
