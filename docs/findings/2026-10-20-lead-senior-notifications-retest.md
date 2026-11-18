# Live QA on dev: Lead/Senior notifications (SI4-T1527) re-test, 2026-10-20 (evening)

**Summary**
1. **Build:** dev 6.4.2. Since the 19/10 run, three backend commits changed the notification code: `c3adc107` and `c1af1826` (SI4-I580, no double copy for a PM/requester who is also in the line) and `ad5c1662` (SI4-I581, the actor gets no RM copy of their own action). The backend head is `ddaa6583`. Both bugs were re-tested this afternoon and closed in Zoho (`2026-10-20-tbt-issues-retest.md`).
2. **Result: pass.** Across 5 actions (9 API calls, 5 tickets), each manager between the RM and the TM got exactly one RM copy. Nobody above the TM got anything, and nobody got two copies of the same notification. This covers the full increase flow with PMO + TM/EM approval, which had never been run before.
3. **D1 is fixed in this run as well.** Hardik Trivedi, the KubeDash PM who is also a Lead in Gaurav Dutta's line, got only the PM copy on the direct allocation. The RM copies on the ticket flows came through as normal.
4. **Two cases run for the first time:** TC-017 (the RM is the TM) **passes**. TC-018/020 (the employee's RM has left) behaves as the code intends: nobody in the line is notified, and only the department TMs are. That behaviour still needs the PO's answer (Q10).
5. **No new defects.** Two notes about the TM and the PM, both from before T1527, are listed under Observations.
6. **Data:** 1 UA, 3 DA and 3 direct allocations, all closed or cancelled the same day. Gaurav Dutta keeps a one-day KubeDash row (20/10, 20%).

Method: same as 19/10. Each recipient logs in with a fresh password login, and their inbox is read through `GET /api/v1/notifications` only. A snapshot is taken before and after every action, and new items are matched by timestamp. Evidence: `reports/screenshots/2026-10-20/t1527/json/` (`snap-*`, `diff-*`, `e*.json`). Scripts: `reports/screenshots/2026-10-20/t1527/scripts/`. The reporting lines were rebuilt as Admin from `GET /employees` + `GET /employee-roles` (`scripts/out/`), and they are unchanged since 19/10.

---

## Test data

| Employee | Dept | Line (RM → … → TM) | Middle managers |
|---|---|---|---|
| Gaurav Dutta | PROJECT MANAGEMENT | Kartik Hegde [RM] → **Hardik Trivedi** → Amit Patel [EM] → Jinal Patel [ADMIN] → CTO [TM] | Hardik, Amit, Jinal |
| Tanmay Arora | L1 SUPPORT | **Urvi Trivedi [RM + TM]** (her own RM is Rajesh Kumar, above the TM) | none |
| Vandana Das | FRONT END | Manan Kulkarni (left, soft-deleted) → … | none (the line can't be walked) |

Project: **KubeDash** (PM Hardik Trivedi, CSM Ravi Vyas). HyperScale could not be used, because Gaurav still has this morning's one-day row there (409 "already has an active allocation").

---

## Who got what

### A. Gaurav Dutta on KubeDash: full lifecycle

| Recipient | E1 PMO direct allocation 10% (12:46:18Z) | E2 UA-0135 CSM increase 10→20%, PMO + EM approve (12:54:22Z) | E3 DA-0117 CSM deallocation, PMO acknowledge (12:58:06Z) |
|---|---|---|---|
| Gaurav (employee) | `direct_employee_assigned` | `developer_updated` | `developer_deallocated` "effective 2026-10-20" |
| Kartik Hegde (RM) | `direct_employee_rm_assigned` 1× | `developer_rm_updated` 1× | `developer_rm_deallocated` 1× |
| **Hardik Trivedi (middle + project PM)** | **1:** `direct_pm_notified` only (D1 fixed) | 1: `developer_rm_updated` | 1: `developer_rm_deallocated` |
| Amit Patel (middle, EM) | 1× | 1× | 1× |
| Jinal Patel (middle, ADMIN) | 1× | 1× | 1× |
| CTO (TM) | TM text "Direct Allocation: … Bhumi Chauhan directly allocated…" | **2:** `developer_rm_updated` + `approved` "Ticket Approved: UA-0135" (see Observations) | `developer_rm_deallocated` |
| Ravi Vyas (CSM, requester) | nothing | `pm_updated` | `pm_deallocated` |
| Bhumi Chauhan (PMO actor) | nothing | `approved` (as the counterpart PMO) | nothing |
| Foram Malhotra (EM, final approver) | — | nothing (actor) | — |
| CEO (above the TM) | nothing | nothing | nothing |

E2 steps: Ravi raises UA-0135 (OPEN). PMO advances it 3 times, OPEN → PMO_REVIEWED → IN_REVIEW → AWAITING_CONFIRMATION, and PMO's approval is recorded at that point. Then Foram Malhotra (EM for PROJECT MANAGEMENT) approves, and the ticket goes to APPROVED. While the ticket was in progress, only the CTO got a notification (`assigned_to_department`). Nobody in the line got anything before the final approval. That is correct.

Note: the CTO's own `/approve` was refused with 409 "already recorded". The CTO also holds the ADMIN role, and for them the app records the approval as the PMO side, which is already filled. So a plain TM/EM has to give the TM side for PROJECT MANAGEMENT.

Evidence: `diff-E1-after.json`, `diff-E2c-after.json`, `diff-E3b-after.json`, plus `e1-*`, `e2a-*` … `e2c-*`, `e3a-*`, `e3b-*`.

### B. Tanmay Arora: the RM is the TM (TC-017)

| Recipient | E4a PMO direct allocation, upcoming 22/10 (12:59:44Z) | E4b DA-0118 PMO cancel upcoming (13:01:08Z) |
|---|---|---|
| Tanmay (employee) | `direct_employee_assigned` | `allocation_cancelled` |
| **Urvi Trivedi (RM and TM)** | **1:** TM text "Direct Allocation: …" | **1:** `allocation_cancelled` |
| CTO (2nd L1 SUPPORT TM) | 1× TM text | 1× |
| Rajesh Kumar (Urvi's RM, above the TM) | nothing | nothing |
| Hardik (KubeDash PM) | `direct_pm_notified` | nothing (as on 19/10) |
| Bhumi (PMO actor), CEO | nothing | nothing |

Evidence: `diff-E4a-after.json` (the E4a rows are at 12:59:44Z; earlier rows in that file come from section A), `diff-E4b-after.json`.

### C. Vandana Das: the RM has left (TC-018/020)

| Recipient | E5a PMO direct allocation, upcoming 22/10 (13:02:29Z) | E5b DA-0119 PMO cancel upcoming |
|---|---|---|
| Vandana (employee) | `direct_employee_assigned` | `allocation_cancelled` |
| CTO, Abhishek Hingorani (FRONT END TMs) | 1× TM text each | 1× each |
| Hardik (PM) | `direct_pm_notified` | nothing |
| Bhumi (actor), CEO | nothing | nothing |

Nobody in the line was notified: the RM is soft-deleted, so the walk stops there. This matches the code brief ("RM deleted → nobody in the line is told"). The requirement review suggests the Lead/Senior should still be told in this case (Q10). **Still waiting on the PO.**

Evidence: `diff-E5a-after.json`, `diff-E5b-after.json`.

---

## TC-NOTLDR status after this run

| ID | Title | Result | Run |
|---|---|---|---|
| 001 | Employee→RM→TM unchanged | Pass | 15/10, 19/10 |
| 002 | One Lead between RM and TM | Pass (partial, direct allocation only) | 19/10 |
| 003 | Senior and Lead both notified | **Pass** | 19/10, **20/10** |
| 004 | Nobody above the TM | **Pass** (CEO 0 on all 5 actions; Rajesh Kumar 0 on TC-017) | 19/10, **20/10** |
| 005 | PMO bypass reaches middle managers | Pass | 19/10 |
| 006 | Replacement | Not run | — |
| 007 | Increase, full flow | **Pass, now including PMO + TM/EM approval** (UA-0135) | **20/10** |
| 008 | Decrease | Pass | 19/10 |
| 009 | Deallocation via CSM flow | **Pass** (DA-0117) | 19/10, **20/10** |
| 010 | PMO direct allocation | **Pass** | 19/10, **20/10** |
| 011 | PMO direct update / remove | Pass | 15/10, 19/10, 20/10 (I580) |
| 012 | Cancel upcoming | **Pass** (DA-0118, DA-0119). Revert and withdraw not run | 19/10, **20/10** |
| 013 / 024 | PR reviewer flows | Not run | — |
| 014 | Email matches in-app | **Blocked** (no sent-mail view on dev, empty email queue) | 19/10 |
| 015 | No duplicate for a PM who is also a Lead | **Pass** (D1 / SI4-I580 fixed and closed) | 20/10 |
| 016 / 029 / 030 | Middle manager holding a TM role | Blocked (no such data on dev) | — |
| 017 | RM is the TM | **Pass** | **20/10** |
| 018 / 020 | Line doesn't reach a TM / RM has left | **Behaves as coded** (RM gone → nobody in the line is told); PO answer needed (Q2/Q10) | **20/10** |
| 019 / 028 / 031 | Soft-deleted middle manager / replacement outgoing line / line change | Not run | — |
| 021 | MS Teams unchanged | Pass (code) | 19/10 |
| 022 | Same in every department | Pass: PROJECT MANAGEMENT, PMO, FRONT END, L1 SUPPORT, CMS | 15/10–20/10 |
| 023 | Non-allocation RM notifications unchanged | Pass (code) | 19/10 |
| 025 | In-app link for middle managers | Not run (code read only) | — |
| 026 | EM/Admin in the line get the RM copy | Observed again (Amit Patel, Jinal Patel); PO answer needed (Q1) | 19/10, 20/10 |
| 027 | Actor not notified of own action | **Pass** (D11 / SI4-I581 fixed and closed; Foram and Bhumi got nothing for their own actions today) | 20/10 |

---

## Observations (none of them are T1527 regressions)
- **The TM gets 2 notifications when a full-flow ticket is approved.** On UA-0135 the CTO got `developer_rm_updated` and also `approved` "Ticket Approved: UA-0135". The second one comes from `buildFullApprovalRecipients()` (`@ticket-department-tm` + `@role:PMO`), which is older than T1527. The task says the TM's notifications must not change, so this is not a T1527 bug. Still, it is the same "two notices for one action" pattern that AC4 rules out for everyone else. Worth asking the PO if they want it cleaned up separately.
- **The PM is not told when an upcoming allocation is cancelled** (DA-0118, DA-0119). It was the same on 19/10. Outside T1527.
- **Since SI4-I581, the PMO who cancels no longer gets their own `allocation_cancelled`.** On 19/10, Palak got it through `@role:PMO`. Today Bhumi got nothing for DA-0118/0119. This is expected after the fix.
- **An Admin's approval counts as the PMO side.** The CTO (ADMIN + TM) could not give the TM approval. Not a T1527 issue, but anyone testing the full flow in PROJECT MANAGEMENT needs Foram Malhotra or Amit Patel (both EM) for the TM side.

## Still open for T1527 (questions for the PO, not defects)
- **Q1:** should EMs and Admins who sit in the line (Amit Patel, Jinal Patel, Neha Gupta, David Lais) get the RM copy? Today they do.
- **Q2/Q10:** when the RM has left, or the line never reaches a TM, should the Lead/Senior still be told? Today nobody in the line is.

---

## Data created on dev

| # | Ticket | Employee | What | Final state |
|---|---|---|---|---|
| 1 | direct allocation (no ticket number) | Gaurav Dutta | KubeDash FIXED 10%, 20/10 → 30/11 | Ended 20/10 by #3 |
| 2 | UA-0135 (APPROVED) | Gaurav Dutta | 10% → 20% | Applied |
| 3 | DA-0117 (APPROVED) | Gaurav Dutta | End 20/10 | **One-day row stays (20/10, 20%)** |
| 4 | direct allocation | Tanmay Arora | KubeDash 10%, upcoming 22/10 | Cancelled by #5 |
| 5 | DA-0118 (APPROVED) | Tanmay Arora | Cancel upcoming | Removed whole |
| 6 | direct allocation | Vandana Das | KubeDash 10%, upcoming 22/10 | Cancelled by #7 |
| 7 | DA-0119 (APPROVED) | Vandana Das | Cancel upcoming | Removed whole |

Final state (`json/fin-kubedash.json`): KubeDash lists only Gaurav's ended row. Tanmay and Vandana are not on it. No roles, lines or permissions were changed, and nothing was filed or posted in Zoho.
