# Allocation Tickets — Test Cases

**Total test cases:** 48  
**Modules covered:** Allocation Tickets  
**Source:** `reports/test-cases/cases-2026-10-21-SHDLNK-e2e-full.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 15 | 31.3% |
| negative | 14 | 29.2% |
| regression | 7 | 14.6% |
| security | 5 | 10.4% |
| boundary | 3 | 6.3% |
| smoke | 2 | 4.2% |
| accessibility | 1 | 2.1% |
| integration | 1 | 2.1% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 17 | 35.4% |
| medium | 17 | 35.4% |
| critical | 8 | 16.7% |
| low | 6 | 12.5% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 18 | 37.5% |
| high | 16 | 33.3% |
| critical | 8 | 16.7% |
| low | 6 | 12.5% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| code-review | 24 | 50.0% |
| observed-live | 16 | 33.3% |
| manual-retest | 8 | 16.7% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| code-review | 24 | 50.0% |
| observed-live | 16 | 33.3% |
| live | 8 | 16.7% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 46 | 95.8% |
| Yes | 2 | 4.2% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 15 | 31.3% |
| @negative | 14 | 29.2% |
| @regression | 7 | 14.6% |
| @security | 5 | 10.4% |
| @SI4-I483 | 5 | 10.4% |
| @SI4-T1464 | 4 | 8.3% |
| @boundary | 3 | 6.3% |
| @smoke | 2 | 4.2% |
| @a11y | 1 | 2.1% |
| @integration | 1 | 2.1% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-SHDLNK-001](#tc-shdlnk-001-picker-shows-4-options-on-shadow-row) | Picker shows 4 options on shadow row | Allocation Tickets | smoke | high |
| [TC-SHDLNK-002](#tc-shdlnk-002-swap-primary-opens-the-same-picker) | "Swap Primary" opens the same picker | Allocation Tickets | functional | medium |
| [TC-SHDLNK-003](#tc-shdlnk-003-main-s-own-row-has-no-picker) | Main's own row has no picker | Allocation Tickets | negative | medium |
| [TC-SHDLNK-004](#tc-shdlnk-004-shadow-main-raises-3-linked-tickets) | Shadow→main raises 3 linked tickets | Allocation Tickets | smoke | critical |
| [TC-SHDLNK-005](#tc-shdlnk-005-shadow-main-new-shadow-raises-4-tickets) | Shadow→main + new shadow raises 4 tickets | Allocation Tickets | functional | high |
| [TC-SHDLNK-006](#tc-shdlnk-006-option-2-plain-yes-deallocate-drops-new-shadow-bug-2) | Option 2 + plain "Yes, Deallocate" drops new shadow (Bug 2) | Allocation Tickets | negative | high |
| [TC-SHDLNK-007](#tc-shdlnk-007-both-released-one-step-group) | Both released = one-step group | Allocation Tickets | functional | medium |
| [TC-SHDLNK-008](#tc-shdlnk-008-shadow-only-released-no-group) | Shadow only released = no group | Allocation Tickets | functional | medium |
| [TC-SHDLNK-009](#tc-shdlnk-009-list-column-icon-tooltip) | List column icon + tooltip | Allocation Tickets | functional | medium |
| [TC-SHDLNK-010](#tc-shdlnk-010-group-filter-toggle) | Group filter toggle | Allocation Tickets | functional | low |
| [TC-SHDLNK-011](#tc-shdlnk-011-blocked-banner-disabled-actions-on-step-2) | Blocked banner + disabled actions on step 2 | Allocation Tickets | functional | critical |
| [TC-SHDLNK-012](#tc-shdlnk-012-blocked-buttons-keyboard-accessible) | Blocked buttons keyboard accessible | Allocation Tickets | accessibility | low |
| [TC-SHDLNK-013](#tc-shdlnk-013-workflow-actions-stay-live-while-blocked) | Workflow actions stay live while blocked | Allocation Tickets | functional | high |
| [TC-SHDLNK-014](#tc-shdlnk-014-tm-em-cannot-approve-blocked-step-2) | TM/EM cannot approve blocked step 2 | Allocation Tickets | negative | critical |
| [TC-SHDLNK-015](#tc-shdlnk-015-api-approve-blocked-409) | API approve blocked → 409 | Allocation Tickets | security | critical |
| [TC-SHDLNK-016](#tc-shdlnk-016-api-bypass-blocked-409-nothing-saved) | API bypass blocked → 409, nothing saved | Allocation Tickets | security | critical |
| [TC-SHDLNK-017](#tc-shdlnk-017-tm-first-approval-blocked-via-api) | TM first approval blocked via API | Allocation Tickets | security | critical |
| [TC-SHDLNK-018](#tc-shdlnk-018-unlock-after-both-das-acknowledged) | Unlock after both DAs acknowledged | Allocation Tickets | functional | critical |
| [TC-SHDLNK-019](#tc-shdlnk-019-step-1-das-in-either-order) | Step-1 DAs in either order | Allocation Tickets | functional | medium |
| [TC-SHDLNK-020](#tc-shdlnk-020-full-approval-applies-swap) | Full approval applies swap | Allocation Tickets | integration | critical |
| [TC-SHDLNK-021](#tc-shdlnk-021-close-step-1-da-cascades-to-step-2) | Close step-1 DA cascades to step 2 | Allocation Tickets | functional | high |
| [TC-SHDLNK-022](#tc-shdlnk-022-close-step-1-da-leaves-sibling-da-bug-4) | Close step-1 DA leaves sibling DA (Bug 4) | Allocation Tickets | negative | medium |
| [TC-SHDLNK-023](#tc-shdlnk-023-close-promotion-leaves-new-shadow-na-bug-3) | Close promotion leaves new-shadow NA (Bug 3) | Allocation Tickets | negative | medium |
| [TC-SHDLNK-024](#tc-shdlnk-024-reject-step-2) | Reject step 2 | Allocation Tickets | functional | medium |
| [TC-SHDLNK-025](#tc-shdlnk-025-da-cannot-be-rejected) | DA cannot be rejected | Allocation Tickets | negative | medium |
| [TC-SHDLNK-026](#tc-shdlnk-026-withdraw-approved-da-period-with-approved-step-2) | Withdraw approved DA period with approved step 2 | Allocation Tickets | negative | high |
| [TC-SHDLNK-027](#tc-shdlnk-027-edit-da-date-on-after-promotion-start) | Edit DA date on/after promotion start | Allocation Tickets | boundary | medium |
| [TC-SHDLNK-028](#tc-shdlnk-028-edit-promotion-start-to-d) | Edit promotion start to D | Allocation Tickets | boundary | medium |
| [TC-SHDLNK-029](#tc-shdlnk-029-shadow-20-logged-hours-bug-1) | Shadow >20 logged hours (Bug 1) | Allocation Tickets | negative | high |
| [TC-SHDLNK-030](#tc-shdlnk-030-all-or-nothing-on-failure) | All-or-nothing on failure | Allocation Tickets | negative | high |
| [TC-SHDLNK-031](#tc-shdlnk-031-second-swap-on-same-main-blocked) | Second swap on same main blocked | Allocation Tickets | negative | medium |
| [TC-SHDLNK-032](#tc-shdlnk-032-non-owner-cannot-raise-swap) | Non-owner cannot raise swap | Allocation Tickets | security | high |
| [TC-SHDLNK-033](#tc-shdlnk-033-api-rule-checks) | API rule checks | Allocation Tickets | negative | medium |
| [TC-SHDLNK-034](#tc-shdlnk-034-department-scoped-view-hides-tickets) | Department-scoped view hides tickets | Allocation Tickets | security | medium |
| [TC-SHDLNK-035](#tc-shdlnk-035-ungrouped-bypass-still-possible-bug-5) | Ungrouped bypass still possible (Bug 5) | Allocation Tickets | regression | medium |
| [TC-SHDLNK-036](#tc-shdlnk-036-pmo-direct-allocation-ignores-group) | PMO direct allocation ignores group | Allocation Tickets | regression | low |
| [TC-SHDLNK-037](#tc-shdlnk-037-linked-tickets-card-navigation) | Linked Tickets card navigation | Allocation Tickets | functional | low |
| [TC-SHDLNK-038](#tc-shdlnk-038-copy-check) | Copy check | Allocation Tickets | functional | low |
| [TC-SHDLNK-039](#tc-shdlnk-039-concurrency-close-step-1-while-approving-step-2) | Concurrency: close step 1 while approving step 2 | Allocation Tickets | negative | medium |
| [TC-SHDLNK-040](#tc-shdlnk-040-main-end-date-deallocation-date) | Main end date ≤ deallocation date | Allocation Tickets | boundary | low |
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

48 test cases.

### Accessibility (1)

#### TC-SHDLNK-012 — Blocked buttons keyboard accessible

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open the blocked step-2 NA
2. Tab to the disabled Approve button

**Expected**

Button receives focus; tooltip / sr-only reason is announced

### Boundary (3)

#### TC-SHDLNK-027 — Edit DA date on/after promotion start

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Withdraw / edit |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Edit the main's DA end date to D+1

**Expected**

400 _174 "The promotion and new-shadow start dates must be after both deallocation dates"

#### TC-SHDLNK-028 — Edit promotion start to D

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / PM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Withdraw / edit |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Edit the step-2 start date to D

**Expected**

400 _174; date unchanged

#### TC-SHDLNK-040 — Main end date ≤ deallocation date

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). The main has end date E.

**Steps**

1. Open the picker on S's row
2. Pick deallocation date = E
3. Confirm the swap

**Expected**

Check whether the swap fails (promotion end < start); record behaviour

### Functional (15)

#### TC-SHDLNK-002 — "Swap Primary" opens the same picker

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM (project owner) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open /my-projects/<project>
2. Hover the violet shadow badge on S's row
3. Click Swap Primary

**Expected**

The same picker opens

#### TC-SHDLNK-005 — Shadow→main + new shadow raises 4 tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 2 (Shadow becomes main + new shadow requested) → Continue
3. Fill the form → Submit
4. Confirm "Yes, Deallocate & Request New Allocation"

**Expected**

4 tickets; card heading "Step 2 · Promotion & new shadow"; flow label "Shadow becomes main, new shadow requested"

#### TC-SHDLNK-007 — Both released = one-step group

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 3 (both released)
3. Fill both tabs
4. Confirm

**Expected**

2 DA in one group; banner "Part of linked group G-n."; no lock anywhere

#### TC-SHDLNK-008 — Shadow only released = no group

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 4 (shadow only released)
3. Fill and confirm

**Expected**

1 DA; no Linked Group icon; main row unchanged

#### TC-SHDLNK-009 — List column icon + tooltip

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket list |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open /my-tickets
2. Hover the Linked Group icon on the step-2 row

**Expected**

Amber lock; tooltip "G-n · Step 2 of 2" + "Waiting on earlier-step tickets in G-n to be approved" + "Click to show only this group"

#### TC-SHDLNK-010 — Group filter toggle

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket list |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open /my-tickets
2. Click the Linked Group icon
3. Click it again

**Expected**

Chip "Linked Group" limits the list and stats to the group; second click clears

#### TC-SHDLNK-011 — Blocked banner + disabled actions on step 2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open the step-2 NA at AWAITING_CONFIRMATION
2. Read the banner
3. Hover Approve and Bypass Approval
4. Click Approve

**Expected**

Banner "Action blocked. Complete DA-x, DA-y first…"; Approve and Bypass Approval aria-disabled with tooltip "Blocked until the earlier step is approved (DA-x, DA-y)."; click does nothing

#### TC-SHDLNK-013 — Workflow actions stay live while blocked

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open the blocked step-2 NA
2. Assign department
3. Shortlist a developer
4. Click Send for Approval

**Expected**

All succeed; status moves to AWAITING_CONFIRMATION

#### TC-SHDLNK-018 — Unlock after both DAs acknowledged

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Acknowledge DA #1
2. Check the step-2 NA
3. Acknowledge DA #2
4. Check the step-2 NA and list icon

**Expected**

After #1 still blocked; after #2 banner "Step 2 of 2…", list icon becomes link, card "Step 1 · Deallocations — All approved"

#### TC-SHDLNK-019 — Step-1 DAs in either order

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Acknowledge the shadow's DA first
2. Then acknowledge the main's DA

**Expected**

Both succeed; no order inside step 1

#### TC-SHDLNK-021 — Close step-1 DA cascades to step 2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Close the main's DA while it is OPEN
2. Check the step-2 tickets and notifications

**Expected**

Promotion (and new shadow) CLOSED with remark "Closed automatically because prerequisite #DA-x was closed"; close notifications sent

#### TC-SHDLNK-024 — Reject step 2

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | TM / EM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). Step 2 unlocked.

**Steps**

1. Reject the promotion NA with a remark
2. Check the promotion and the DAs

**Expected**

Back to IN_REVIEW, approvals cleared; DAs unaffected

#### TC-SHDLNK-037 — Linked Tickets card navigation

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Open a group ticket
2. Click a sibling ticket ID in the Linked Tickets card

**Expected**

Navigates to the sibling; current row marked "This ticket"

#### TC-SHDLNK-038 — Copy check

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Read option 1's description

**Expected**

Flag "no new ticket needed" as wrong (3 tickets + approvals)

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

### Integration (1)

#### TC-SHDLNK-020 — Full approval applies swap

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM + PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Apply swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). Both DAs acknowledged.

**Steps**

1. As TM, approve the promotion NA
2. As PMO, approve the promotion NA
3. Open the project team

**Expected**

APPROVED; shadow is main from D+1; main and old shadow row end on D

### Negative (14)

#### TC-SHDLNK-003 — Main's own row has no picker

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM (project owner) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open /my-projects/<project>
2. On M's row choose Deallocate Employee

**Expected**

Plain Deallocate form; a single DA; no group

#### TC-SHDLNK-006 — Option 2 + plain "Yes, Deallocate" drops new shadow (Bug 2)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 2) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 2 → Continue
3. Fill the form → Submit
4. Confirm with plain "Yes, Deallocate"

**Expected**

Expected per banner: 4 tickets. Suspected actual: 3 tickets, flow "Shadow becomes main"

#### TC-SHDLNK-014 — TM/EM cannot approve blocked step 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM / EM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. As TM/EM, open the step-2 NA
2. Hover Approve
3. Check Reject

**Expected**

Approve disabled with tooltip; Reject enabled

#### TC-SHDLNK-022 — Close step-1 DA leaves sibling DA (Bug 4)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. After TC-SHDLNK-021, open the shadow's DA

**Expected**

Suspected: still open/acknowledgeable; confirm intended behaviour

#### TC-SHDLNK-023 — Close promotion leaves new-shadow NA (Bug 3)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 3) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 4-ticket swap group exists.

**Steps**

1. Close the promotion NA
2. Open the new-shadow NA

**Expected**

Suspected: new-shadow NA stays open/approvable

#### TC-SHDLNK-025 — DA cannot be rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | TM / PMO (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Call PATCH /reject on a step-1 DA

**Expected**

400/409 _089 "Decrease/de-allocation tickets cannot be rejected"

#### TC-SHDLNK-026 — Withdraw approved DA period with approved step 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Withdraw / edit |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). Step 2 APPROVED.

**Steps**

1. Close the APPROVED step-1 DA, or delete its scheduled change

**Expected**

409 _182 "…a later step of its linked ticket group (#NA-…) is already approved…"

#### TC-SHDLNK-029 — Shadow >20 logged hours (Bug 1)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 1) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main + shadow pair where the shadow has logged more than 20 hours on the project.

**Steps**

1. Open the picker on the shadow's row
2. Choose option 1 → Continue
3. Fill and confirm

**Expected**

Suspected: toast "Failed to raise the linked tickets" with _161 ratings message; nothing raised; no way to enter shadow ratings

#### TC-SHDLNK-030 — All-or-nothing on failure

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, the main already has an open UA ticket). 

**Steps**

1. Raise a swap from the shadow's row
2. Check the ticket list

**Expected**

Error _024; no DA/NA/group created (list unchanged)

#### TC-SHDLNK-031 — Second swap on same main blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main with two shadows A and B.

**Steps**

1. Raise a swap with shadow A
2. Raise a swap with shadow B

**Expected**

Second fails with _024; nothing raised

#### TC-SHDLNK-033 — API rule checks

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. POST shadow-swap with a wrong pair
2. …with the same assignment twice
3. …with start = D
4. …BOTH_RELEASED with a promotion
5. …with promotion preference ≠ shadow
6. …with promotion requestType SHADOW_DEVELOPER

**Expected**

400 _183 / _179 / _174 / _176 / _184 / _186 respectively

#### TC-SHDLNK-039 — Concurrency: close step 1 while approving step 2

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO ×2 (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Fire close(DA) and approve(NA) in parallel

**Expected**

Only one wins; never an APPROVED promotion on top of a CLOSED DA

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

### Regression (7)

#### TC-SHDLNK-035 — Ungrouped bypass still possible (Bug 5)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md (Bug 5) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PM + PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ungrouped tickets |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Raise a plain DA on the main's row
2. Raise a separate NA preferring the shadow
3. Approve the NA first

**Expected**

Not blocked by a group; expect overlap 409 _098 "already has an active (non-archived) allocation on this project" (old inconsistency stays)

#### TC-SHDLNK-036 — PMO direct allocation ignores group

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ungrouped tickets |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. While the group is pending, direct-allocate the shadow or another developer to the project

**Expected**

Allowed (no group check); document outcome

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

### Security (5)

#### TC-SHDLNK-015 — API approve blocked → 409

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. While the DAs are pending, call PATCH /api/v1/allocation-tickets/<step-2 id>/approve

**Expected**

409 ALLOCATION_TICKET_172 "Complete the step 1 tickets (#…, #…) before actioning this ticket."; no approval recorded

#### TC-SHDLNK-016 — API bypass blocked → 409, nothing saved

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. Call PATCH /api/v1/allocation-tickets/<step-2 id>/bypass-approval with department + shortlist fields
2. Re-read the ticket

**Expected**

409 _172; shortlist/department unchanged

#### TC-SHDLNK-017 — TM first approval blocked via API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Approval order |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). 

**Steps**

1. As TM, call PATCH /approve on the blocked step-2 NA
2. Re-read the ticket

**Expected**

409 _172; tmApprovedAt stays null

#### TC-SHDLNK-032 — Non-owner cannot raise swap

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO / TM (API) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Call POST /allocation-tickets/shadow-swap on a project the caller does not own

**Expected**

403 "PROJECT_NOT_MANAGED_BY_CALLER"

#### TC-SHDLNK-034 — Department-scoped view hides tickets

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM / EM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). A 'shadow becomes main' swap has been raised (linked group G-n: step 1 = 2 DAs, step 2 = promotion NA). The step-1 DAs are outside the TM's department scope.

**Steps**

1. As TM/EM, open the step-2 NA

**Expected**

"Some linked tickets belong to other departments and aren't shown."; unnamed blocked text; no step progress counts

### Smoke (2)

#### TC-SHDLNK-001 — Picker shows 4 options on shadow row

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM (project owner) |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open /my-projects/<project>
2. On S's row choose ⋯ → Deallocate Employee

**Expected**

"Deallocate Employee" dialog with Allocation Type and 4 radios; default "Shadow Developer becomes the main member"

#### TC-SHDLNK-004 — Shadow→main raises 3 linked tickets

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1464 · docs/findings/2026-10-15-shadow-linked-tickets-code-brief.md |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM / CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

A main (M) + shadow (S) pair exists on a project owned by the PM/CSM (shadow ≤20 logged hours, no open UA/RA/DA tickets on either assignment). 

**Steps**

1. Open the picker on S's row
2. Choose option 1 (Shadow becomes main) → Continue
3. Fill reason and deallocation date D
4. Submit Deallocation
5. Confirm "Yes, Deallocate"

**Expected**

Toast "Linked tickets raised as G-n" / "3 tickets were raised together…"; 2 DA (step 1) + 1 NA (step 2, start D+1, preferred = shadow)
