# Live QA on dev: Lead/Senior notifications (SI4-T1527) and shadow swap linked tickets (SI4-T1464), 2026-10-15

**Summary**
1. **T1527 is deployed on dev and works for the main path.** For Urvashi Kamath (FRONT END), the RM Sagar Khanpara and both middle managers, Rajesh Kumar (EM) and David Lais (ADMIN), each got exactly one RM notification. This held for both the direct allocation and the deallocation. Nobody above the TM got anything. The QA control group (RM Ekta Mistry, TM Sudhansu Patel) was unchanged, and Amit Patel, who sits above that TM, got nothing.
2. **Duplicate bug G1 confirmed.** hardik.trivedi is the PM of HyperScale and also a Lead in Kashyap Vyas's line. He got **two** notifications for one allocation (`direct_pm_notified` + `direct_employee_rm_assigned`). He also got two for the removal (`pm_deallocated` + `developer_rm_deallocated`).
3. **T1464 ordering is enforced end to end.** G-1 had locks, the "Action blocked." banner, the Linked Tickets card and disabled Approve/Bypass buttons with tooltips for PMO, TM and EM. The API returned 409 `ALLOCATION_TICKET_172` for a PMO bypass (nothing was saved) and for a TM approve, both before any DA was approved and after only one was. Once both DAs were acknowledged, the TM approval applied the swap.
4. **Three new swap defects.**
   - Picking "+ new shadow requested" and then clicking plain "Yes, Deallocate" silently drops the new shadow (Bug 2 confirmed).
   - The promotion copies the **shadow's** allocation (Dynamic, no %) instead of the main's FIXED 20%, even though the picker says the shadow "takes over the main allocation %".
   - The confirm dialog shows the main with the shadow's department and allocation type.
5. **Data on dev.** I created 8 tickets: NA-0359..0362 and DA-0097..0100, including the first linked group, G-1. The two notification allocations were removed the same day. The ViewForge swap was left in its final state (Nimisha Bose ends 15/10, Ankita Das is main from 16/10), because that state is the test result. Not run: close-cascade, >20h, and email. Reasons are below.

Accounts: PMO bhumi.chauhan, CSM tarun.sharma, TM sudhansu.patel and EM kunal.jadeja did the actions. Recipients were read with fresh password logins, using only `GET /api/v1/notifications` plus a bell screenshot. Opening the bell did not mark anything read, and nothing else was clicked in their accounts. PMO "Login as" was not used. Evidence is in `reports/screenshots/2026-10-15/notif-shadow/`, with API bodies in `json/`.

---

## Part 1: Notifications (SI4-T1527)

### Was the change deployed?
Yes. The first event, a PMO direct allocation of Urvashi Kamath to XCrypt, gave `notification.allocation.direct_employee_rm_assigned` to **Rajesh Kumar and David Lais**. Before T1527 only the RM got this. Evidence: `json/notif-s1.json`, `s1-david.lais-bell.png`.

### Who got what

**A. Urvashi Kamath** (FRONT END). Line: Sagar Khanpara [RM] → Rajesh Kumar [EM] → David Lais [ADMIN] → CTO [TM, all depts]. Department TM abhishek.hingorani is not in the line. Project XCrypt (PM Keyur Hegde, CSM Tarun Sharma).

| Recipient | NA-0359: PMO direct allocation (10:16:58Z) | DA-0097: PMO direct remove (10:18:56Z) |
|---|---|---|
| Urvashi (employee) | `allocation.direct_employee_assigned` "You've Been allocated to XCrypt…" | `allocation_ticket.developer_deallocated` "Allocation Ended…" |
| Sagar Khanpara (RM) | `allocation.direct_employee_rm_assigned` "Team Member Assigned: Urvashi Kamath" | `allocation_ticket.developer_rm_deallocated` "Team Member Deallocated: Urvashi Kamath" |
| **Rajesh Kumar (middle, EM)** | same RM copy, 1× | same RM copy, 1× |
| **David Lais (middle, ADMIN)** | same RM copy, 1× | same RM copy, 1× |
| CTO (TM in line) | `direct_employee_rm_assigned`, **TM text** "Direct Allocation: XCrypt… Bhumi Chauhan directly allocated…" | `developer_rm_deallocated` (same as RM text) |
| abhishek.hingorani (FRONT END dept TM) | TM text copy (from the department-TM rule, not the chain) | `developer_rm_deallocated` |
| Keyur Hegde (PM) | `allocation.direct_pm_notified` | `allocation_ticket.pm_deallocated` |
| priya.sharma (abhishek's RM), tarun.sharma (CSM), bhumi (actor) | nothing | nothing |

Against the requirement:
- Everyone between the RM and the TM got the RM copy, once each, with the same text.
- The TMs only got copies they also got before T1527: the CTO and abhishek both hold FRONT END TM access, so the department-TM rule already covered them.
- Nobody above the TM was notified. The CTO is the top of the line, and abhishek's own RM got nothing.
- As predicted in the data doc, the "middle managers" here are an **EM and an Admin**, because the line climbs past the real department TM. This is a product question, not a code bug.

**B. Control group: Ankita Das** (QA). Line: Ekta Mistry [RM] → Sudhansu Patel [TM]; Sudhansu's RM is Amit Patel. Project ViewForge.

| Event | Ekta (RM) | Sudhansu (TM) | Amit Patel (above TM) | Kunal Jadeja (QA EM) |
|---|---|---|---|---|
| NA-0360 direct allocation as shadow | `direct_employee_rm_assigned` (RM text) | `direct_employee_rm_assigned` (TM text) | nothing | nothing |
| DA-0100 acknowledged | `developer_rm_deallocated` | `developer_rm_deallocated` | nothing | nothing |
| NA-0362 approved (full NA flow) | `developer_rm_assigned` | `developer_rm_assigned` + `approved` | nothing | nothing |

Recipients are unchanged: RM plus TM only. Sudhansu got the RM-type copy for his own approval. That comes from the TM rule and the missing `excludeEmployeeId` (G10), and it is not new behaviour.

**C. Dedup: Kashyap Vyas** (PROJECT MANAGEMENT). Line: Yatharth Patil [RM] → **Hardik Trivedi** → Amit Patel [EM] → Jinal Patel [ADMIN] → CTO [TM]. Hardik is the PM of HyperScale.

| Recipient | NA-0361: PMO direct allocation | DA-0098: PMO direct remove |
|---|---|---|
| **hardik.trivedi** | **2:** `allocation.direct_pm_notified` "Allocation Confirmed: HyperScale…" **and** `allocation.direct_employee_rm_assigned` "Team Member Assigned: Kashyap Vyas" | **2:** `allocation_ticket.pm_deallocated` **and** `allocation_ticket.developer_rm_deallocated` |
| Yatharth Patil (RM), Amit Patel, Jinal Patel (middle) | 1 RM copy each | 1 RM copy each |
| CTO (TM) | TM copy | n/a |
| priya.chopra (HyperScale CSM) | nothing | nothing |

Evidence: `json/notif-d2.json`, `json/notif-d3.json`, `d2-hardik.trivedi-bell.png` (both items visible in the bell).

**Why the ticket-flow version was blocked:** `POST /allocation-tickets/new-allocation` as hardik returns **403 Access forbidden**. hardik.trivedi now holds only EMPLOYEE, RM and DM, **with no PM role**, so the "PM" fixture can no longer raise tickets. Nothing was created by that call. I used the direct-allocation route the data doc names as the alternative. It exercises the same cross-event duplicate.

**Email:** not verifiable. The data doc found the `NOTIFICATION_EMAIL` sync queue empty, and there is no sent-mail API. In-app uses the same recipient resolver, so in-app is the proof here.

### TC-NOTLDR results

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-NOTLDR-001 | Employee→RM→TM: recipients unchanged | **Pass** | Ankita Das: RM + TM only across 3 events; Amit Patel nothing (`notif-p2s1.json`, `notif-p2fin.json`) |
| TC-NOTLDR-003 | Senior and Lead both notified | **Pass** (direct allocation + direct remove) | Rajesh + David 1× each (`notif-s1.json`, `notif-s4.json`) |
| TC-NOTLDR-004 | Nobody above the TM is notified | **Pass** | FRONT END: priya.sharma nothing. QA: Amit Patel nothing |
| TC-NOTLDR-009 | Deallocation via CSM flow | **Pass** (control dept only) | DA-0099/0100 acknowledgements: RM copies to Ekta and to Nimisha's RM Hardik Kulkarni. Not run for a FRONT END employee |
| TC-NOTLDR-010 | PMO direct allocation | **Pass** | NA-0359 |
| TC-NOTLDR-011 | PMO direct update / remove | **Pass** (remove only) | DA-0097: `developer_rm_deallocated` to Sagar, Rajesh, David. Direct update not run |
| TC-NOTLDR-014 | Email matches in-app | **Blocked** | No email visibility on dev |
| TC-NOTLDR-015 | No duplicate for PM who is also a Lead | **Fail** (defect D1) | hardik 2× on allocate, 2× on remove |
| TC-NOTLDR-018 | Dept TM not in the RM's line | **Observed** | FRONT END: EM + Admin get RM copies, and the real TM (abhishek) gets only his usual TM copy. Matches the code. Needs a PO decision |
| TC-NOTLDR-002/005/006/007/008/012/013/016/017/019–025 | other cases | Not run | Outside the agreed ticket budget, or no data on dev (see test-data doc) |

---

## Part 2: Shadow swap (SI4-T1464) on ViewForge

Setup: PMO direct-allocated **Ankita Das** (QA, stack Performance) as SHADOW_DEVELOPER of **Nimisha Bose** (POST-SALES BA, FIXED 20%, ends 22/12/2026). That was NA-0360, assignment `0e9f02fe…`. I used the API with the same body the `/my-tickets/direct-allocation` form sends, because the form's date pickers were slow to automate; the form itself is in `p2-direct-alloc-form-empty.png`. The ViewForge row then showed the violet badge with "Shadow Developer of Nimisha Bose" and a "Swap Primary" link (`p2-shadow-badge-hovercard.png`).

The CSM (tarun) took these steps:
1. Opened Ankita's row → Deallocate Employee. The picker showed 4 options (`p2-picker-dialog.png`).
2. Chose **"Shadow Developer becomes main + new shadow requested"** → Continue. The form banner already says "Nimisha Bose has been deallocated… Ankita Das has been promoted… A new shadow developer request has been raised." (`p2-newshadow-form.png`).
3. Filled: reason Role Misalignment, date 15/10/2026, ratings 7/7/7/7, feedback, open to work again = Yes → Submit.
4. The confirmation dialog showed **both** "Yes, Deallocate" and "Yes, Deallocate & Request New Allocation" (`p2-confirm-dialog-newshadow.png`).
5. Clicked plain **"Yes, Deallocate"**. The request body had `flowType: "SHADOW_TO_MAIN"` and **no `newShadow`**. The toast said "Linked tickets raised as G-1 / **3** tickets were raised together…". This created DA-0099 (Nimisha, step 1), DA-0100 (Ankita, step 1) and NA-0362 (promotion, step 2, start 16/10, preferred Ankita). Evidence: `json/sw3-swap-network.json`.

The approval chain, in order:

| Step | Who | Result |
|---|---|---|
| List `/my-tickets` | PMO | NA-0362: amber lock, tooltip "G-1 · Step 2 of 2 / Waiting on earlier-step tickets in G-1 to be approved / Click to show only this group". DAs show the link icon (`pmo1-list-na-icon-tooltip.png`). The same aria-label appeared for TM and EM |
| NA-0362 detail (OPEN) | PMO | Banner "Action blocked. Complete DA-0099, DA-0100 first…". Card "Linked Tickets G-1 · Shadow becomes main · Step 1 0 of 2 approved · Step 2 Unlocks after Step 1". "Bypass TM/EM Approval" `aria-disabled=true` with tooltip "Blocked until the earlier step is approved (DA-0099, DA-0100)." (`pmo1-na-detail.png`) |
| API `PATCH …/bypass-approval` with department + shortlist + active employee | PMO | **409 ALLOCATION_TICKET_172** "Complete the step 1 tickets (#DA-0099, #DA-0100) before actioning this ticket." Afterwards the ticket was still OPEN with an empty shortlist, so the rollback works (`json/api1-blocked-step2-pmo.json`) |
| API `PATCH …/approve` on OPEN | PMO | 409 "This action is not allowed in the ticket's current status". The status check runs before the gate, as the brief said |
| Assign QA, shortlist Ankita, Send for Approval | PMO | All succeeded while blocked → AWAITING_CONFIRMATION. **Note:** Send for Approval also stamped `pmoApprovedAt` (by design, `allocation-ticket-workflow.service.ts:951`). A later PMO `/approve` therefore returns `_084` "already recorded" instead of `_172` |
| NA-0362 detail | TM sudhansu | Approve `aria-disabled=true`, tooltip "Blocked until the earlier step is approved (DA-0100).", Reject live. Card: "Some linked tickets belong to other departments and aren't shown." (DA-0099, Nimisha, POST-SALES BA, is hidden) with no step count (`tm1-na-detail.png`) |
| API `PATCH …/approve` | TM sudhansu | **409 `_172`**, and `tmApprovedAt` stayed null. The 409 body lists **DA-0099 with its publicId**, the ticket the UI hides from this TM (D6) |
| NA-0362 detail | EM kunal (EM for QA and POST-SALES BA) | Sees both DAs. Approve `aria-disabled=true` with tooltip naming both, Reject live (`em1-na-detail.png`) |
| Acknowledge & Deallocate DA-0100 (shadow first) | PMO (UI) | Toast "The deallocation has been acknowledged." NA still blocked on DA-0099, card shows "1 of 2 approved" (`ack1-*.png`) |
| API approve between the two acks | TM | 409 `_172` naming only DA-0099 |
| Acknowledge & Deallocate DA-0099 | PMO (UI) | Banner changes to "Step 2 of 2 — Part of linked group G-1…". Step 1 shows "All approved", step 2 "0 of 1 approved", and Bypass is enabled (`ack2-na-after.png`) |
| Approve NA-0362 | TM sudhansu (UI) | Dialog "Approve this ticket?" → toasts "Ticket Approved: NA-0362… fully approved and applied for Ankita Das". Status APPROVED (`tm-approve-*.png`) |

The final state, from `GET /projects/fd79…`:
- Nimisha Bose: FIXED 20%, ends **2026-10-15**.
- Ankita's shadow row: ends 2026-10-15.
- New assignment for Ankita Das, `d0d7835d…`: **DYNAMIC, no %**, 2026-10-16 → 2026-12-22, upcoming, not a shadow.

So the shadow is now the main, but at the wrong allocation (D3).

Not run:
- **Close cascade (TC-021/022/023):** every ticket in G-1 ended APPROVED, so nothing was left to close, and testing it would have taken extra tickets.
- **>20h (TC-029):** not run. We were at the 8-ticket budget, and HyperScale's swap can't be raised by our accounts: hardik has no PM role and the CSM is Priya Chopra. The code says it **would** trigger. `getLoggedHoursOnProject()` reads the ALL_TIME `employeeTimeLog` keyed on **employee + project**, not on the assignment (`allocation-ticket-validator.service.ts:470-508`, threshold `PM_FEEDBACK_SKIP_MAX_HOURS = 20`). Kunal Menon (967.7h on HyperScale), re-added as a shadow, would therefore hit `_161` on a "shadow becomes main" swap.

### TC-SHDLNK results

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-SHDLNK-001 | Picker shows 4 options on shadow row | **Pass** | `p2-picker-dialog.png`; first option selected by default |
| TC-SHDLNK-002 | "Swap Primary" opens the same picker | Partial: link present, not clicked | `p2-shadow-badge-hovercard.png` |
| TC-SHDLNK-004 | Shadow→main raises 3 linked tickets | **Pass** | G-1 = DA-0099, DA-0100, NA-0362 (start 16/10, preferred Ankita) |
| TC-SHDLNK-006 | "+ new shadow" + plain "Yes, Deallocate" drops the new shadow | **Fail** (D2) | `sw3-swap-network.json`: SHADOW_TO_MAIN, 3 tickets |
| TC-SHDLNK-009 | List column icon + tooltip | **Pass** | `pmo1-list-na-icon-tooltip.png` |
| TC-SHDLNK-011 | Blocked banner + disabled actions on step 2 | **Pass** | `pmo1-na-detail.png`, `pmo2-na-awaiting-blocked.png` |
| TC-SHDLNK-013 | Workflow actions stay live while blocked | **Pass** | `json/api2-prepare-step2.json` |
| TC-SHDLNK-014 | TM/EM cannot approve blocked step 2 | **Pass** | `tm1-na-detail.png`, `em1-na-detail.png` |
| TC-SHDLNK-015 | API approve blocked → 409 | **Pass** (TM). PMO gets a status error or `_084` instead (see note) | `json/tm1-api-approve.json` |
| TC-SHDLNK-016 | API bypass blocked → 409, nothing saved | **Pass** | `json/api1-blocked-step2-pmo.json` |
| TC-SHDLNK-017 | TM first approval blocked via API | **Pass** | `tmApprovedAt` null after 409 |
| TC-SHDLNK-018 | Unlock after both DAs acknowledged | **Pass** | `ack1-na-after.png`, `ack2-na-after.png`, `json/tm2-api-approve-mid.json` |
| TC-SHDLNK-019 | Step-1 DAs in either order | **Pass** | Shadow DA first, then main |
| TC-SHDLNK-020 | Full approval applies swap | **Partial**: order and apply Pass, allocation values **Fail** (D3) | `json/tmap.json`, final project state |
| TC-SHDLNK-021/022/023 | Close cascade | **Blocked** | No open G-1 ticket left. Would need extra tickets |
| TC-SHDLNK-029 | Shadow >20h | **Not run** (budget, no owner account) | Code check: rule is per employee+project, so it would trigger |
| TC-SHDLNK-034 | Department-scoped view hides tickets | **Pass** (plus D6) | `tm1-na-detail.png` |
| TC-SHDLNK-038 | Copy check | **Fail** (D5) | `p2-picker-dialog.png`, `p2-newshadow-form.png` |
| Others | 003, 005, 007, 008, 010, 012, 024–028, 030–033, 035–037, 039, 040 | Not run | Budget |

---

## Confirmed defects

### D1: PM who is also a Lead/Senior gets duplicate notifications for one action (G1)
- **Severity:** High. It goes against the T1527 acceptance criteria.
- **Steps:**
  1. PMO direct-allocates Kashyap Vyas (line Yatharth → **Hardik** → Amit → Jinal → CTO) to HyperScale, where hardik.trivedi is the PM.
  2. PMO direct-removes the same allocation.
- **Expected:** hardik gets one notification per action.
- **Actual:**
  - On allocation: `allocation.direct_pm_notified` **and** `allocation.direct_employee_rm_assigned`, both at 10:23:51Z.
  - On removal: `allocation_ticket.pm_deallocated` **and** `allocation_ticket.developer_rm_deallocated`, both at 10:25:15Z.
- **Evidence:** `json/notif-d2.json`, `json/notif-d3.json`, `d2-hardik.trivedi-bell.png`.
- **Cause (from the brief):** duplicates are only removed inside one event (`recipient-resolver.service.ts:31-42`).
- **Not run:** the ticket-flow variant (NA → approve), because hardik has no PM role.

### D2: "Shadow becomes main + new shadow requested" with plain "Yes, Deallocate" silently drops the new shadow
- **Severity:** Medium.
- **Steps:**
  1. CSM opens ViewForge → Ankita Das (shadow) row → Deallocate Employee.
  2. Choose "Shadow Developer becomes main + new shadow requested" → Continue, fill the form → Submit Deallocation.
  3. Click **Yes, Deallocate**.
- **Expected:** 4 tickets (promotion + new shadow). Alternatively, the plain button should not be offered for this option.
- **Actual:**
  - The request sent `flowType: SHADOW_TO_MAIN` with no `newShadow`, and only 3 tickets were raised.
  - The flow label is "Shadow becomes main".
  - The form banner had said "A new shadow developer request has been raised."
- **Evidence:** `p2-newshadow-form.png`, `p2-confirm-dialog-newshadow.png`, `json/sw3-swap-network.json`.

### D3: The promotion copies the shadow's allocation, not the main's
- **Severity:** Medium. The wrong allocation is applied without any warning.
- **Steps:** same swap as D2 (also applies to plain "Shadow becomes main"), then acknowledge both DAs and have the TM approve.
- **Expected:** Ankita takes over Nimisha's allocation (FIXED 20%), as the picker says: "Ankita Das takes over the main allocation %".
- **Actual:**
  - The promotion was raised as `requestedAllocationType: DYNAMIC` with no %.
  - It was applied as DYNAMIC, 16/10–22/12/2026.
  - The end date only matched because I had given the shadow the same end date as the main.
- **Cause:** `shadowSwapPayload.ts` passes `mainEmployee: employee`, and `employee` is the **clicked shadow row**, into `buildShadowFreshAllocationRequest` and `buildNewShadowBackfillRequest`.
- **Evidence:** `json/sw3-swap-network.json` (promotion body), `json/tmap.json`, final project state above.

### D4: The deallocation confirmation shows the main with the shadow's department and allocation type
- **Severity:** Low. Same root cause as D3.
- **Steps:** as in D2, up to the confirmation dialog.
- **Expected:** Employee Nimisha Bose, Department POST-SALES BA, Allocation Type Fixed 20%.
- **Actual:** Nimisha Bose / **QA** / **Dynamic**, which are Ankita's values. The form header also shows "Department: QA … Current Allocation: Dynamic".
- **Evidence:** `p2-confirm-dialog-newshadow.png`, `p2-newshadow-form.png`.

### D5: Swap copy doesn't match what happens
- **Severity:** Low (copy).
- **Problems:**
  - The picker's option 1 says "…**no new ticket needed**", but 3 tickets and two approval stages are needed.
  - The form banner says "has been deallocated… has been promoted… a new shadow request has been raised" before anything is submitted or approved. The last part is false in the D2 path.
- **Evidence:** `p2-picker-dialog.png`, `p2-newshadow-form.png`.

### D6: The 409 `_172` response reveals step-1 tickets that are hidden from the caller
- **Severity:** Low (information disclosure).
- **Steps:** TM sudhansu (no access to POST-SALES BA) opens NA-0362. The UI hides DA-0099 and says "Some linked tickets belong to other departments and aren't shown." He then calls `PATCH /allocation-tickets/<NA-0362>/approve`.
- **Expected:** the blocking list filtered to what the caller can see, consistent with the UI.
- **Actual:** `data.blockingTickets` includes DA-0099's ticket number, publicId, type and status. The message text also names "#DA-0099".
- **Evidence:** `json/tm1-api-approve.json`.

### Observations (not defects)
- **Middle managers can be EMs and Admins.** In FRONT END, Rajesh Kumar (EM) and David Lais (ADMIN) get RM copies. In PROJECT MANAGEMENT, Amit Patel (EM) and Jinal Patel (ADMIN) do. This happens because the walk only stops at a TM with department access (here the CTO), while the real FRONT END TM, abhishek.hingorani, is not in the line. Needs a PO decision.
- **PMO approval is stamped at Send for Approval,** in the un-gated update path, even while the ticket is blocked. The final TM approval is still gated, so the order cannot be bypassed. But the "TM approves, then PMO approves" sequence in TC-020 doesn't exist for a PMO-sent ticket, and a PMO `/approve` returns `_084` instead of `_172`.
- **The TM copy of `direct_employee_rm_assigned` uses different text** ("Direct Allocation: … directly allocated …") from the RM copy ("Team Member Assigned: …"), under the same eventType.
- **The PM fixture account has no PM role.** hardik.trivedi has only EMPLOYEE/RM/DM, and `POST /allocation-tickets/new-allocation` returns 403. Any spec that uses `storageState-pm.json` to raise tickets will fail for environment reasons.
- Opening the bell panel did not mark notifications as read.

---

## Data created on dev

| # | Ticket | Project | Employee | What | Final state | Cleaned up? |
|---|---|---|---|---|---|---|
| 1 | NA-0359 (direct allocation, APPROVED) | XCrypt | Urvashi Kamath | Assignment `c89a92ff…` FIXED 10%, 15/10 → 31/10 | End trimmed to **15/10/2026** by DA-0097 (archive scheduled 16/10) | **Yes**: a one-day allocation stays in her history |
| 2 | DA-0097 (direct remove, APPROVED) | XCrypt | Urvashi Kamath | Cleanup of #1 | Applied | n/a (cleanup) |
| 3 | NA-0360 (direct allocation, APPROVED) | ViewForge | Ankita Das | Shadow of Nimisha Bose, `0e9f02fe…` DYNAMIC from 15/10 | Ended **15/10/2026** by DA-0100 | Yes (consumed by the swap) |
| 4 | NA-0361 (direct allocation, APPROVED) | HyperScale | Kashyap Vyas | Assignment `8a72c6d0…` FIXED 10%, 15/10 → 31/10 | End trimmed to **15/10/2026** by DA-0098 | **Yes**: one-day allocation in history |
| 5 | DA-0098 (direct remove, APPROVED) | HyperScale | Kashyap Vyas | Cleanup of #4 | Applied | n/a (cleanup) |
| 6 | DA-0099 (G-1 step 1, APPROVED) | ViewForge | Nimisha Bose | Main deallocated as part of the swap (was FIXED 20% to 22/12/2026) | Ends **15/10/2026** | **No**: the swap result is the test outcome |
| 7 | DA-0100 (G-1 step 1, APPROVED) | ViewForge | Ankita Das | Shadow's own deallocation | Ends 15/10/2026 | n/a |
| 8 | NA-0362 (G-1 step 2, APPROVED) | ViewForge | Ankita Das | Promotion to main, `d0d7835d…` | **DYNAMIC**, 16/10/2026 → 22/12/2026 (upcoming) | **No** |
| — | G-1 (`1887d3de…`) | ViewForge | — | First linked group on dev | All members APPROVED | — |
| — | `POST new-allocation` as hardik | HyperScale | Kashyap Vyas | Attempt | 403, nothing created | — |

To restore ViewForge to its earlier state:
1. PMO "cancel direct allocation" on Ankita's upcoming row `d0d7835d…` (its start is still in the future).
2. PMO re-adds Nimisha Bose at FIXED 20% up to 22/12/2026.

That is 2 more tickets, so I did not do it without approval.

No roles, reporting lines or permissions were changed, and no existing ticket was touched. Recipient accounts were only logged into and read, which updates their last-login time.
