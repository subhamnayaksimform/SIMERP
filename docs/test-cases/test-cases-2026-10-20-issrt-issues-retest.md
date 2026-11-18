# Test Cases

**Total test cases:** 10  
**Modules covered:** Allocation Tickets, Notifications  
**Source:** `reports/test-cases/cases-2026-10-20-ISSRT-issues-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By module

| Module | Count | Share |
| --- | ---: | ---: |
| Allocation Tickets | 8 | 80.0% |
| Notifications | 2 | 20.0% |

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| regression | 10 | 100.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 4 | 40.0% |
| high | 3 | 30.0% |
| low | 3 | 30.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 4 | 40.0% |
| high | 3 | 30.0% |
| low | 3 | 30.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| manual-retest | 10 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| live | 10 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 10 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @regression | 10 | 100.0% |
| @SI4-I579 | 3 | 30.0% |
| @SI4-I576 | 2 | 20.0% |
| @SI4-I577 | 2 | 20.0% |
| @SI4-I578 | 1 | 10.0% |
| @SI4-I580 | 1 | 10.0% |
| @SI4-I581 | 1 | 10.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-NOTLDR-027](#tc-notldr-027-actor-in-the-chain-is-not-notified-about-their-own-action) | Actor in the chain is not notified about their own action | Notifications | regression | medium |
| [TC-NOTLDR-015](#tc-notldr-015-no-duplicate-for-a-pm-who-is-also-in-the-reporting-line) | No duplicate for a PM who is also in the reporting line | Notifications | regression | high |
| [TC-SHDLNK-029](#tc-shdlnk-029-shadow-with-over-20-logged-hours-can-become-main) | Shadow with over 20 logged hours can become main | Allocation Tickets | regression | high |
| [TC-SHDLNK-005](#tc-shdlnk-005-shadow-main-new-shadow-raises-4-tickets-at-the-main-s-allocation) | Shadow → main + new shadow raises 4 tickets at the main's allocation | Allocation Tickets | regression | high |
| [TC-SHDLNK-023](#tc-shdlnk-023-closing-the-promotion-closes-the-new-shadow-request) | Closing the promotion closes the new-shadow request | Allocation Tickets | regression | medium |
| [TC-SHDLNK-022](#tc-shdlnk-022-closing-the-main-s-da-closes-the-shadow-s-da) | Closing the main's DA closes the shadow's DA | Allocation Tickets | regression | medium |
| [TC-SHDLNK-021](#tc-shdlnk-021-closing-the-shadow-s-da-closes-the-whole-swap) | Closing the shadow's DA closes the whole swap | Allocation Tickets | regression | medium |
| [TC-SHDLNK-038](#tc-shdlnk-038-picker-form-and-confirm-text-match-what-happens) | Picker, form and confirm text match what happens | Allocation Tickets | regression | low |
| [TC-SHDLNK-041](#tc-shdlnk-041-deallocation-form-header-shows-the-main-s-department-and-allocation) | Deallocation form header shows the main's department and allocation | Allocation Tickets | regression | low |
| [TC-SHDLNK-042](#tc-shdlnk-042-a-closed-linked-group-says-it-is-closed) | A closed linked group says it is closed | Allocation Tickets | regression | low |

---

## Allocation Tickets

8 test cases.

### Regression (8)

#### TC-SHDLNK-029 — Shadow with over 20 logged hours can become main

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I576 |
| **Requirement Ref** | SI4-I576 · BE 8e239e8b |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project.

**Steps**

1. Open HyperScale as CSM → Kunal Menon's row → Deallocate Employee
2. Choose 'Shadow Developer becomes the main member' → Continue
3. Reason Role Misalignment, date 31/10/2026, all ratings 7, feedback, open to work again Yes
4. Submit Deallocation → Yes, Deallocate

**Expected**

The swap is raised as a linked group of 3 tickets. No ratings error.

**Test Data**

- `project`: HyperScale
- `main`: Bhavesh Bansal
- `shadow`: Kunal Menon
- `date`: 31/10/2026

#### TC-SHDLNK-005 — Shadow → main + new shadow raises 4 tickets at the main's allocation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I576, @SI4-I579 |
| **Requirement Ref** | SI4-I576, SI4-I579 (D3) · BE 727d480d, FE 54c6d4c6 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Raise swap |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project.

**Steps**

1. Open Kunal Menon's row → Deallocate Employee
2. Choose 'Shadow Developer becomes main + new shadow requested' → Continue
3. Fill reason, date 31/10/2026, ratings, feedback
4. Submit → Yes, Deallocate & Request New Allocation
5. Open the promotion and new-shadow tickets

**Expected**

4 linked tickets are raised. The promotion and new-shadow requests use the main's allocation (FIXED 20%, no end date).

**Test Data**

- `project`: HyperScale
- `main`: Bhavesh Bansal
- `shadow`: Kunal Menon
- `date`: 31/10/2026

#### TC-SHDLNK-023 — Closing the promotion closes the new-shadow request

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I578 |
| **Requirement Ref** | SI4-I578 · BE 9b70ada2 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project. G-3 (4 tickets) is open.

**Steps**

1. As PMO open the promotion NA-0376
2. Cancel Request → read the dialog → Close Ticket
3. Open NA-0377 and both DAs

**Expected**

The dialog warns that linked tickets close too. NA-0377 closes automatically. Both DAs stay open.

**Test Data**

- `ticket`: NA-0376

#### TC-SHDLNK-022 — Closing the main's DA closes the shadow's DA

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I577 |
| **Requirement Ref** | SI4-I577 · BE 9b70ada2, FE 4373d9cb |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project. G-3 deallocations DA-0112 (main) and DA-0113 (shadow) are AWAITING.

**Steps**

1. As PMO open DA-0112 (Bhavesh)
2. Cancel Request → Close Ticket
3. Open DA-0113 (Kunal)

**Expected**

DA-0113 closes automatically, so the shadow can't be removed on their own.

**Test Data**

- `ticket`: DA-0112

#### TC-SHDLNK-021 — Closing the shadow's DA closes the whole swap

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I577 |
| **Requirement Ref** | SI4-I577 · BE 9b70ada2 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Close cascade |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project. G-4 (3 tickets) is open.

**Steps**

1. As PMO open DA-0115 (Kunal)
2. Cancel Request → Close Ticket
3. Open DA-0114 and NA-0378

**Expected**

The main's DA and the promotion both close automatically.

**Test Data**

- `ticket`: DA-0115

#### TC-SHDLNK-038 — Picker, form and confirm text match what happens

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I579 |
| **Requirement Ref** | SI4-I579 (D4, D5) · FE 54c6d4c6, BE 13330656 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project.

**Steps**

1. Open the picker on Kunal's row and read both shadow-to-main options
2. Continue and read the form banner
3. Submit and read the confirm dialog

**Expected**

The picker says how many linked tickets are raised. The banner says 'will be deallocated' and 'nothing changes until approved'. The confirm dialog shows the main's own department and allocation.

**Test Data**

- `project`: HyperScale
- `main`: Bhavesh Bansal
- `shadow`: Kunal Menon
- `date`: 31/10/2026

#### TC-SHDLNK-041 — Deallocation form header shows the main's department and allocation

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I579 |
| **Requirement Ref** | SI4-I579 leftover (D4 form header) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | CSM |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Swap picker |

**Preconditions**

PMO has added Kunal Menon (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of Bhavesh Bansal (QA, FIXED 20%, no end date) on HyperScale. CSM priya.chopra owns the project.

**Steps**

1. Open Kunal's row → Deallocate Employee → any shadow-to-main option → Continue
2. Read the header of the 'Deallocate Bhavesh Bansal' form

**Expected**

Next to 'Main: Bhavesh Bansal' the header shows QA and Fixed · 20%.

**Test Data**

- `project`: HyperScale
- `main`: Bhavesh Bansal
- `shadow`: Kunal Menon
- `date`: 31/10/2026

#### TC-SHDLNK-042 — A closed linked group says it is closed

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | D10 (not filed in Zoho) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000094274428 |
| **Sub Module** | Ticket detail |

**Preconditions**

All 4 tickets of G-3 are CLOSED.

**Steps**

1. Open DA-0112
2. Read the step banner and the Linked Tickets card

**Expected**

The banner and card say the group was closed. No 'waiting' or 'unlocks' text.

**Test Data**

- `ticket`: DA-0112

---

## Notifications

2 test cases.

### Regression (2)

#### TC-NOTLDR-027 — Actor in the chain is not notified about their own action

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I581 |
| **Requirement Ref** | SI4-I581 · BE ad5c1662 (PR #553) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO |
| **Task Id** | 688906000094679753 |
| **Sub Module** | Duplicate removal |

**Preconditions**

PMO Palak Saxena sits in Falgun Solanki's reporting line (Bhumi → Palak → Neha → Jinal → CTO).

**Steps**

1. Log in as PMO palak.saxena
2. Direct-allocate Falgun Solanki to XCrypt (upcoming start 22/10)
3. Cancel that upcoming allocation directly (DA-0111)
4. Read Palak's notifications and the line's notifications after each action

**Expected**

Palak gets no RM copy about her own actions. Falgun, Bhumi, Neha and the CTO each still get one copy.

**Test Data**

- `employee`: Falgun Solanki
- `project`: XCrypt

#### TC-NOTLDR-015 — No duplicate for a PM who is also in the reporting line

| Field | Value |
| --- | --- |
| **Tags** | @regression, @SI4-I580 |
| **Requirement Ref** | SI4-I580 · BE c3adc107, c1af1826 (PR #551) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-retest |
| **Confidence** | live |
| **Role** | PMO / PM |
| **Task Id** | 688906000094680665 |
| **Sub Module** | Duplicate removal |

**Preconditions**

Hardik Trivedi is HyperScale's PM and a Lead in Gaurav Dutta's line. Jignesh Raval is Iti Chatterjee's RM and a PM.

**Steps**

1. PMO direct-allocates Gaurav Dutta to HyperScale
2. PMO direct-updates it 10% → 20% (UA-0134)
3. PMO direct-removes it (DA-0109)
4. PM Jignesh raises NA-0373 for Iti, PMO bypasses
5. Count Hardik's and Jignesh's notifications per action

**Expected**

Exactly 1 notification per person per action.
