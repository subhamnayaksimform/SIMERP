# Live QA on dev: Lead/Senior notifications (SI4-T1527) retest, 2026-10-19

**Summary**
1. **Build:** dev shows SimERP 6.4.2. No T1527 code has changed since the merge on 15 Oct (`c1eca0f1`). The recipient resolver's last commit is still `40810c76`, and the backend head is `7602c0ba`.
2. **D1 is still present, and it also happens in the direct update.** hardik.trivedi is the PM of HyperScale and a Lead in Gaurav Dutta's line. For one action he got **2** notifications on the direct allocation (`direct_pm_notified` + `direct_employee_rm_assigned`) and **2** on the direct update (`pm_updated` + `developer_rm_updated`).
3. **Ticket-flow version of D1:** no PM or CSM who can raise tickets sits *between* the RM and the TM on dev. So I used the closest real case: a PM who is the employee's **RM** raises the ticket. Jignesh Raval raised NA-0370 for his own report Iti Chatterjee, and on approval he got **2** (`pm_allocated` + `developer_rm_assigned`). That double already existed for RMs before T1527, but it still breaks AC4. Within a single event the duplicate *is* removed: on the cancellation Jignesh is both requester and RM, and he got 1.
4. **The main T1527 rule held in every event I ran.** Across 9 actions in 2 departments (PROJECT MANAGEMENT and PMO), each manager between the RM and the TM got exactly one RM copy. That covers direct allocation, direct update, increase (bypass), decrease (acknowledge), CSM deallocation, NA with PMO bypass, PM cancel of an upcoming allocation, and PMO direct cancel. Nobody above the TM (the CEO) got anything.
5. **One finding newly confirmed live (D11, G10 in the code brief): the person who acts is notified about their own action when they sit in the line.** PMO Palak Saxena, a middle manager for Falgun Solanki, direct-allocated him and got the RM copy "Team Member Assigned: Falgun Solanki" for her own action.
6. **Data:** I created 9 tickets (budget ~10). All three test allocations were removed or cancelled the same day. Nothing is left open. Gaurav Dutta keeps a one-day HyperScale row (19/10/2026) in his history.

Accounts: PMO bhumi.chauhan and Palak.Saxena (PMO), CSM priya.chopra (HyperScale/ConfigHub), PM jignesh.raval (ConfigHub). All are fresh password logins, one at a time. Recipients were read only through `GET /api/v1/notifications`. No bell was opened and nothing was clicked in their accounts. PMO "Login as" was not used. Before every action I took a snapshot of each recipient, and each notification is matched to its action by timestamp, employee and project. Evidence is in `reports/screenshots/2026-10-19/notifications/json/`: `snap-*.json` are the snapshots, `diff-*.json` show what was new per recipient, and `h*/j*/p*.json` hold the request and response bodies. The helper scripts are in `../scripts/`.

Today's earlier shadow-swap retest (NA-0364..0368, DA-0101..0105) had already put notifications into hardik.trivedi and cto. Those are excluded by timestamp. The `H0-before` snapshot shows them.

---

## Test data (checked today)

The reporting lines were rebuilt from `GET /employees` (as Admin; the PMO view no longer returns `team`) plus `GET /employee-roles`. I used the same rule as the code: walk up from the RM and stop at the first person with the TM role and access to the employee's department.

| Employee | Dept | Line (RM → … → TM) | Middle managers |
|---|---|---|---|
| Gaurav Dutta | PROJECT MANAGEMENT | Kartik Hegde [RM/PM] → **Hardik Trivedi** [RM/DM] → Amit Patel [EM] → Jinal Patel [ADMIN] → CTO [TM] | Hardik, Amit, Jinal |
| Iti Chatterjee | PROJECT MANAGEMENT | **Jignesh Raval** [RM/PM] → Hardik Trivedi → Amit Patel → Jinal Patel → CTO | Hardik, Amit, Jinal |
| Falgun Solanki | PMO | Bhumi Chauhan [PMO] → **Palak Saxena** [PMO/DM] → Neha Gupta [EM/DM] → Jinal Patel → CTO | Palak, Neha, Jinal |

The CTO's own RM is the CEO, who is the "above the TM" control. CTO is the only TM with access to PROJECT MANAGEMENT and PMO.

What the data allows on dev:
- **Project owner in the middle of a line:** only **hardik.trivedi**, and he has no PM role (RM/DM only), so he cannot raise tickets. No CSM sits in anyone's line. The only PMO in the middle is Palak Saxena.
- **One middle manager (TC-002):** 39 people, every one of them a TM, RM or PMO role holder. No ordinary employee has this shape.
- **Middle manager with a TM role (TC-016/029/030):** none on dev.
- **Line that never reaches a TM (TC-018):** only 18 FRONT END employees whose RM has left (hidden from the list), plus the CFO. Not tested (see below).

---

## Who got what

### A. HyperScale lifecycle: Gaurav Dutta (PM Hardik Trivedi, CSM Priya Chopra)

| Recipient | NA-0369 PMO direct allocation 10% (11:13:44Z) | UA-0131 PMO direct update 10→20% (11:15:45Z) | UA-0132 CSM increase 20→30%, PMO bypass (11:19:00Z) | UA-0133 CSM decrease 30→20%, PMO acknowledge (11:21:50Z) | DA-0106 CSM deallocation, PMO acknowledge (11:24:32Z) |
|---|---|---|---|---|---|
| Gaurav (employee) | `direct_employee_assigned` | `developer_updated` | `developer_updated` | `developer_updated` | `developer_deallocated` "…ended, effective 2026-10-19" |
| Kartik Hegde (RM) | `direct_employee_rm_assigned` 1× | `developer_rm_updated` 1× | `developer_rm_updated` 1× | `developer_rm_updated` 1× | `developer_rm_deallocated` 1× |
| **Hardik Trivedi (middle + project PM)** | **2:** `direct_employee_rm_assigned` + `direct_pm_notified` | **2:** `developer_rm_updated` + `pm_updated` | 1: `developer_rm_updated` | 1: `developer_rm_updated` | 1: `developer_rm_deallocated` |
| Amit Patel (middle, EM) | 1× RM copy | 1× | 1× | 1× | 1× |
| Jinal Patel (middle, ADMIN) | 1× RM copy | 1× | 1× | 1× | 1× |
| CTO (TM) | TM text "Direct Allocation: … Bhumi Chauhan directly allocated…" | `developer_rm_updated` (RM text) | `developer_rm_updated` with bypass text "Approval Bypassed: UA-0132" | `developer_rm_updated` | `developer_rm_deallocated` |
| Priya Chopra (CSM, requester for UA-0132/0133/DA-0106) | nothing | nothing | `pm_updated` | `pm_updated` | `pm_deallocated` |
| CEO (above the TM) | nothing | nothing | nothing | nothing | nothing |

Notes:
- In the ticket flows (UA-0132, UA-0133, DA-0106) the PM copy goes only to the **requester** (`@ticket-requester`), Priya. Hardik is the project PM but not the requester, so he got just one RM copy there. The duplicate only shows up in the direct routes, which use `@assignment-pm` / `@ticket-pm` (the project's PM).
- The increase was finalised by PMO bypass. The TM is the CTO, and we have no TM-approval account for PROJECT MANAGEMENT, so the "PMO + TM approve" path was not run.

Evidence: `json/diff-H1-after.json` … `json/diff-H5-after.json`, `json/h1-*.json` … `json/h5b-*.json`.

### B. ConfigHub: PM in the line raises the ticket. Iti Chatterjee (PM Jignesh Raval = Iti's RM, CSM Priya Chopra)

| Recipient | NA-0370 raised by Jignesh, PMO bypass with dept + selection (11:28:19Z) | DA-0107 Jignesh "cancel upcoming allocation", PMO acknowledge (11:31:25Z) |
|---|---|---|
| Iti (employee) | `developer_assigned` (start 21/10) | `allocation_cancelled` |
| **Jignesh Raval (RM + requester PM)** | **2:** `developer_rm_assigned` + `pm_allocated` | 1: `allocation_cancelled` (RM and requester rules are merged inside one event) |
| Hardik Trivedi (middle) | 1: `developer_rm_assigned` | 1: `allocation_cancelled` |
| Amit Patel (middle) | 1 | 1 |
| Jinal Patel (middle) | 1 | 1 |
| CTO (TM) | `developer_rm_assigned` with bypass text "Approval Bypassed: NA-0370" | `allocation_cancelled` |
| Priya Chopra (CSM, not requester) | nothing | nothing |
| CEO | nothing | nothing |

Evidence: `json/diff-J2-after.json`, `json/diff-J3-after.json`, `json/j1-*.json` … `json/j3b-*.json`.

### C. XCrypt: actor in the line. Falgun Solanki (actor Palak Saxena, PMO, middle manager)

| Recipient | NA-0371 Palak direct-allocates (upcoming, 11:34:14Z) | DA-0108 Palak cancels upcoming (direct, 11:35:49Z) |
|---|---|---|
| Falgun (employee) | `direct_employee_assigned` | `allocation_cancelled` |
| Bhumi Chauhan (RM, PMO) | `direct_employee_rm_assigned` 1× | `allocation_cancelled` 1× |
| **Palak Saxena (middle and the actor)** | **`direct_employee_rm_assigned` "Team Member Assigned: Falgun Solanki"** about her own action | `allocation_cancelled` 1× (she is also PMO, and this event goes to all PMO, so this one would arrive anyway) |
| Neha Gupta (middle, EM) | 1× | 1× |
| Jinal Patel (middle, ADMIN) | 1× | 1× |
| CTO (TM) | TM text "Palak Saxena directly allocated…" | `allocation_cancelled` |
| Keyur Hegde (XCrypt PM) | `direct_pm_notified` | **nothing** (see Observations) |
| Tarun Sharma (XCrypt CSM), CEO | nothing | nothing |

Evidence: `json/diff-P1-after.json`, `json/diff-P2-after.json`.

### D. Read-only checks of events other people created after the deploy (no tickets)

| Event | Line | Who got what | Evidence |
|---|---|---|---|
| NA-0363, direct allocation of **Sagar Khanpara** (FRONT END) to AbsoluteUI by Vihaan Chatterjee, 15/10 12:33Z | Rajesh Kumar [RM] → **David Lais** [one middle] → CTO | Rajesh 1×, David 1× (`direct_employee_rm_assigned`). CTO and abhishek.hingorani got the TM text. priya.sharma, the CEO and the actor got nothing | `json/z-na0363-existing.json` |
| UA-0130, CEO direct update of **Kabir Soni** (CMS, flat line), 16/10 | Mansi Shah [RM] → Vikrant Dobariya [TM] | Mansi and Vikrant 1× `developer_rm_updated` each. Vikrant's RM priya.sharma got nothing | `json/z-ua0130-kabir-soni.json` |

---

## TC-NOTLDR results (this run)

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-NOTLDR-001 | Employee→RM→TM: recipients unchanged | **Pass** (read-only, CMS, UA-0130). QA passed on 15/10 | `z-ua0130-kabir-soni.json` |
| TC-NOTLDR-002 | One Lead between RM and TM | **Pass (partial)**. Sagar Khanpara via the existing NA-0363 *direct allocation*: David Lais got 1 RM copy. The NA full-approval path was not run (no ordinary employee has this line shape) | `z-na0363-existing.json` |
| TC-NOTLDR-003 | Senior and Lead both notified | **Pass**. 3 middle managers got 1 each on every event, in PROJECT MANAGEMENT and PMO | `diff-H*`, `diff-J*`, `diff-P*` |
| TC-NOTLDR-004 | Nobody above the TM | **Pass**. The CEO got nothing on all 9 events; priya.sharma got nothing on NA-0363/UA-0130 | snapshots |
| TC-NOTLDR-005 | PMO bypass reaches middle managers | **Pass**. NA-0370: Hardik, Amit and Jinal each got the plain RM copy, and the CTO got the bypass override text. The same held for UA-0132 | `diff-J2-after.json`, `diff-H3-after.json` |
| TC-NOTLDR-006 | Replacement | Not run | Budget |
| TC-NOTLDR-007 | Increase (full flow) | **Pass** (finalised by PMO bypass; TM-approve path not run) | `diff-H3-after.json` |
| TC-NOTLDR-008 | Decrease (lighter flow) | **Pass** | `diff-H4-after.json` |
| TC-NOTLDR-009 | Deallocation via CSM flow | **Pass**, PROJECT MANAGEMENT (DA-0106: Kartik, Hardik, Amit and Jinal 1× each, with the effective date in the text). **The FRONT END variant was not run**, so I could use the budget on cases that had never been run. FRONT END deallocation was covered by the direct remove on 15/10 | `diff-H5-after.json` |
| TC-NOTLDR-010 | PMO direct allocation | **Pass** (NA-0369, NA-0371) | `diff-H1-after.json`, `diff-P1-after.json` |
| TC-NOTLDR-011 | PMO direct update / remove | **Pass**. Update UA-0131: the RM and the 3 middle managers got `developer_rm_updated` 1× each (Hardik also got the D1 extra). Remove passed on 15/10 | `diff-H2-after.json` |
| TC-NOTLDR-012 | Revert / cancel / withdraw | **Pass for cancel-upcoming** (PM route DA-0107 and PMO direct route DA-0108: the RM and every middle manager got `allocation_cancelled` 1×). Revert and withdraw not run | `diff-J3-after.json`, `diff-P2-after.json` |
| TC-NOTLDR-013 | PR reviewer flows | Not run | Budget |
| TC-NOTLDR-014 | Email matches in-app | **Blocked**. `GET /sync-queue/jobs?dataType=NOTIFICATION_EMAIL` returned 0 jobs before and after the 9 events (and 0 jobs unfiltered). There is no sent-mail view on dev | `tc014-email-queue.json`, `fin-state.json` |
| TC-NOTLDR-015 | No duplicate for a PM who is also a Lead | **Fail (D1)**. Hardik got 2 on the direct allocation and 2 on the direct update. The ticket-flow variant with a PM *in the middle* is not possible on dev; the RM-as-PM variant (Jignesh) also got 2 on NA approval | `diff-H1-after.json`, `diff-H2-after.json`, `diff-J2-after.json` |
| TC-NOTLDR-016 | Lead is also the assigned-department TM | **Blocked (no data)**. No middle manager on dev holds a TM role. CSM-requester-in-line variant: no CSM sits in any line | chain analysis |
| TC-NOTLDR-017 | RM is the TM | Not run. It would cost 2 tickets, and there were no read-only events (sudhansu's direct reports have no allocation notifications since 15/10) | `z-tc017-sudhansu-reports.json` |
| TC-NOTLDR-018 | Line does not reach a TM | Not run. The only real cases are FRONT END employees whose RM has left (for example Vandana Das, Nilesh Modi), and they would also test TC-020. Left out to stay within budget | — |
| TC-NOTLDR-019 / 020 | Soft-deleted manager / inactive RM | Not run (019: no data; 020: see 018) | — |
| TC-NOTLDR-021 | MS Teams unchanged | **Pass (code)**. No commits to `teams-notifications` since 18/08, and that module does not use `RecipientResolverService` | `git log` on `origin/development` |
| TC-NOTLDR-022 | Same in every department | **Pass for the departments that have middle managers**: FRONT END (15/10 and NA-0363), PROJECT MANAGEMENT, PMO. Flat lines unchanged in QA and CMS. The other technical departments have no middle managers on dev | all |
| TC-NOTLDR-023 | Non-allocation RM notifications unchanged | **Pass (code)**. Visa expiry, certification expiry and notice-period rules use `@employee-rm` without `withReportingLine`, so RM only. No such events reached Sagar, Rajesh, David, Kartik or Hardik since 15/10, so nothing could be seen live | `z-tc023-nonalloc.json`, code |
| TC-NOTLDR-024 | Actor exclusion in PR-reviewer flows | Not run | Budget |
| TC-NOTLDR-025 | In-app link for middle managers | Not run (code read only). The link is built only for allocation-ticket events with a `ticketPublicId`, and only when the viewer has `allocation_tickets.read`. Direct-allocation events have no link. Not clicked, because recipients' accounts are read-only | FE `notificationRedirect.ts` |
| TC-NOTLDR-026 | Dept TM not in line: EM/Admin get RM copy | **Observed** (needs PO answer to Q1). Amit Patel (EM), Neha Gupta (EM), Jinal Patel (ADMIN) and David Lais (ADMIN) all got RM copies | all |
| TC-NOTLDR-027 | Actor in the chain not notified of own action | **Fail** against the suggested answer to Q4 (D11). Palak got the RM copy of her own direct allocation | `diff-P1-after.json` |
| TC-NOTLDR-028 / 029 / 030 / 031 | Replacement outgoing line / other assigned dept / other-dept TM in middle / line change | Not run (028, 031: budget; 029, 030: no data, no middle manager with a TM role) | — |

---

## D1 status

**Still present (re-checked 2026-10-19). It now also covers the direct update and, through the RM-as-PM case, the normal ticket flow.**

| Path | Person | Notifications for one action |
|---|---|---|
| PMO direct allocation (NA-0369) | Hardik (project PM + Lead) | `direct_pm_notified` + `direct_employee_rm_assigned` (both 11:13:44Z) |
| PMO direct update (UA-0131) | Hardik | `pm_updated` + `developer_rm_updated` (both 11:15:45Z) |
| NA raised by PM, PMO bypass (NA-0370) | Jignesh (requester PM + RM) | `pm_allocated` + `developer_rm_assigned` (11:28:18.9Z / 11:28:19.0Z) |
| Ticket flows raised by a CSM (UA-0132/0133, DA-0106) | Hardik (project PM, not the requester) | 1 (RM copy only). Ticket-flow PM copies go to the requester |
| PM cancel upcoming (DA-0107) | Jignesh (requester + RM) | 1. The requester and RM rules are in the same event, so the duplicate is removed |

Cause (unchanged): duplicates are removed only inside one event (`recipient-resolver.service.ts:31-42`). The PM copy (`@ticket-requester`, or `@ticket-pm` / `@assignment-pm` on the direct routes) and the RM copy are separate events. The PM-in-the-middle ticket-flow case was not run because hardik.trivedi has no PM role and is the only project owner sitting in the middle of any line on dev.

---

## New defects

### D11: A manager in the reporting line who performs the action is notified about it (G10, now confirmed live)
- **Severity:** Low. It goes against the suggested answer to Q4 and adds to inbox noise. It is not a wrong-recipient leak.
- **Steps:**
  1. Log in as Palak.Saxena (PMO). She is a middle manager in Falgun Solanki's line: Bhumi → Palak → Neha → Jinal → CTO.
  2. `POST /allocation-tickets/direct-allocation` for Falgun to XCrypt (FIXED 10%, 21/10–30/11/2026).
  3. Read Palak's `GET /notifications`.
- **Expected (per Q4 suggestion, TC-NOTLDR-027):** the actor gets no RM copy about her own action.
- **Actual:** Palak got `notification.allocation.direct_employee_rm_assigned` "Team Member Assigned: Falgun Solanki", 11:34:14.363Z. Bhumi (the RM) got the same one.
- **Evidence:** `json/diff-P1-after.json`, `json/p1-palak-direct-allocation.json`.
- **Cause:** `direct-allocation.service.ts:373` (`emitDirectAllocationNotifications`) and the `DEVELOPER_RM_*` events in `allocation-ticket-notification.service.ts:733-841` pass no `excludeEmployeeId`. `resolve()` only drops the actor when one is passed. T1527 makes this more likely, because PMO users and other approvers now sit in more people's lines.
- Still waiting on the PO's answer to Q4. If the PO accepts self-notification, close this.

No other new defects. Each middle manager got exactly one copy of each RM notification on every event I ran.

---

## Observations
- **PMO view of employees no longer returns `team`.** `GET /employees` and `GET /employees/:id` as PMO (bhumi) have no `team`/reporting-manager field. As Admin (ceo@) they do. Any spec or data script that reads reporting lines as PMO will now find nothing.
- **Ticket-flow PM copies go to the requester, not to the project PM.** Hardik (HyperScale PM) got no PM copy for the CSM's increase, decrease and deallocation. The direct routes notify the project PM instead. The two rules differ, and this explains why D1 shows up only in some paths.
- **The PMO direct cancel does not notify the project PM.** DA-0108 sent `allocation_cancelled` to the employee, the line, the TM, the requester (Palak) and all PMO, but **not** to Keyur Hegde (XCrypt PM). The matching direct allocation did notify him (`direct_pm_notified`). This is outside T1527 (`buildAllocationTakenBackRecipients` uses `@ticket-requester`, which is the PMO actor on the direct route). Worth asking whether the PM should hear about a cancellation.
- **Cancellation and revert events go to `@role:PMO`**, so every PMO user, including the one who acted, gets them. In DA-0108 that hides whether the actor would have been dropped from the line copy.
- **The CTO's TM copy changes text by path.** For a direct allocation it is "Direct Allocation: … X directly allocated…", for a bypass it is "Approval Bypassed: …", and otherwise it matches the RM text. All of these come under the same `developer_rm_*` / `direct_employee_rm_assigned` eventType. This is not new.
- **EMs and Admins as "middle managers"** (Q1) again: Amit Patel, Neha Gupta, Jinal Patel and David Lais got every RM copy. Jinal Patel sits in the PROJECT MANAGEMENT and PMO lines, so she got 9 copies today from my actions alone.

---

## Data created on dev (9 tickets)

| # | Ticket | Project | Employee | What | Final state | Cleaned up? |
|---|---|---|---|---|---|---|
| 1 | NA-0369 (PMO direct allocation, APPROVED) | HyperScale | Gaurav Dutta | Assignment `c3b65d73…` FIXED 10%, 19/10 → 30/11/2026 | End trimmed to **19/10/2026** by #5 | **Yes**. A one-day row stays in his history (listed under Active until dev's archive job runs) |
| 2 | UA-0131 (PMO direct update, APPROVED) | HyperScale | Gaurav Dutta | 10% → 20% (TC-011) | Applied | n/a |
| 3 | UA-0132 (CSM increase, PMO bypass, APPROVED) | HyperScale | Gaurav Dutta | 20% → 30% (TC-007/005) | Applied | n/a |
| 4 | UA-0133 (CSM decrease, PMO acknowledge, APPROVED) | HyperScale | Gaurav Dutta | 30% → 20% (TC-008) | Applied | n/a |
| 5 | DA-0106 (CSM deallocation, PMO acknowledge, APPROVED) | HyperScale | Gaurav Dutta | End 19/10/2026 (TC-009, cleanup of #1) | Applied; ends 19/10 at 20% | Yes |
| 6 | NA-0370 (raised by PM Jignesh, PMO bypass, APPROVED) | ConfigHub | Iti Chatterjee | Assignment `691b9f09…` FIXED 10%, 21/10 → 30/11 (upcoming) | Cancelled by #7 | Yes |
| 7 | DA-0107 (PM cancel upcoming, PMO acknowledge, APPROVED) | ConfigHub | Iti Chatterjee | Cancellation (TC-012) | Assignment removed whole | Yes. Iti no longer on ConfigHub |
| 8 | NA-0371 (Palak direct allocation, APPROVED) | XCrypt | Falgun Solanki | Assignment `a84ca3ed…` FIXED 10%, 21/10 → 30/11 (upcoming) | Cancelled by #9 | Yes |
| 9 | DA-0108 (Palak direct cancel, APPROVED) | XCrypt | Falgun Solanki | Cancellation (TC-012/027) | Assignment removed whole | Yes. Falgun no longer on XCrypt |
| — | `POST update-allocation` without `newStartDate` | HyperScale | Gaurav Dutta | First attempt at #3 | 400 validation, nothing created (the JSON file holds the successful retry) | — |

Final state checked with `GET /projects/:id` (`json/fin-state.json`): HyperScale lists Gaurav only with his ended row (20%, 19/10–19/10). ConfigHub and XCrypt no longer list Iti or Falgun.

No roles, reporting lines or permissions were changed. No ticket or allocation I did not create was touched; NA-0363 and UA-0130 were only read. Nothing was filed in Zoho or posted anywhere. The app's own notifications for these actions (ticket created, PMO notices, PM/CSM copies) went out as usual. Recipients' accounts were only logged into and read, which updates their last-login time.
