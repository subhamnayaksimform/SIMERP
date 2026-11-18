# Live QA on dev: shadow swap linked tickets (SI4-T1464) retest, 2026-10-19

**Summary**
1. **Build:** the dev frontend shows **SimERP 6.4.2** in the sidebar. What's New still lists v6.4.0 as current. There is no version endpoint on the API (`/health`, `/version` return 404). No T1464 code changed since 13 Oct: frontend `origin/development` head is `26373b31` (16 Oct, T1375), backend `7602c0ba` (15 Oct, T1524). `feat/SI4-T1464` is fully merged.
2. **The order rule still holds.** On the new group G-2, a PMO bypass and a TM approve were both refused with 409 `ALLOCATION_TICKET_172`, and nothing was saved. The lock icon, the "Action blocked." banner and the disabled Approve / Bypass buttons all showed. The disabled Bypass button can be reached with the keyboard, shows its tooltip on focus, and does nothing on Enter.
3. **"+ new shadow" works when the right button is clicked.** "Yes, Deallocate & Request New Allocation" raised 4 linked tickets as G-2 (DA-0101, DA-0102, NA-0365, NA-0366).
4. **Old defects:** D3, D4, D5 and D6 are still present. D2 was not re-run, but the same two buttons are still offered and the code is unchanged.
5. **Close cascade tested for the first time.** Closing a step-1 DA closes the open step-2 tickets, with the system remark. But:
   - closing the promotion leaves the new-shadow ticket open (D8);
   - closing the main's DA leaves the shadow's DA open and still acknowledgeable (D9).
6. **>20h shadow tested for the first time.** "Shadow becomes main" fails completely for a shadow with more than 20 logged hours. Nothing is raised, and the user cannot fix it from the form (D7, High).
7. **Data.** I created 10 tickets (budget ~12). XCrypt, HyperScale and ViewForge are back to the intended end state. Ended one-day rows remain visible in "Active Allocations" until dev's archive job runs (details at the end).

Accounts: PMO bhumi.chauhan, CSM tarun.sharma (XCrypt, ViewForge), CSM priya.chopra@simformsolutions.com (HyperScale), TM sudhansu.patel. All logins were fresh password logins, one at a time. PMO "Login as" was not used. Evidence is in `reports/screenshots/2026-10-19/shadow-swap/`, with API bodies in `json/`.

---

## Old defects: status

| ID | Defect | Status on 2026-10-19 | Evidence |
|---|---|---|---|
| D2 | "+ new shadow" then plain "Yes, Deallocate" drops the new shadow | **Still present (by UI and code, not re-run).** After choosing option 2, the confirm dialog still offers both "Yes, Deallocate" and "Yes, Deallocate & Request New Allocation". `shadowSwapPayload.ts` is unchanged, and it only sends `SHADOW_TO_MAIN_NEW_SHADOW` when the second button is used. Not re-clicked, to save tickets | `s2-confirm-dialog.png` |
| D3 | The promotion copies the shadow's allocation, not the main's | **Still present.** Main Ananya Hegde has FIXED 55% to 31/05/2027. Shadow Prakash Pillai had FIXED 10% to 31/12/2026. The promotion NA-0365 was raised as **FIXED 10%, 01/11 → 31/12/2026**. The new-shadow ticket NA-0366 also copied the shadow's values. On ViewForge, Ankita's G-1 promotion row was still DYNAMIC with no % (16/10 → 22/12) this morning, before the restore | `json/s2-swap-network.json`, `json/p1-g2-tickets-initial.json`, `json/st-projects.json` |
| D4 | The confirm dialog shows the main with the shadow's department and allocation | **Still present.** It shows Ananya Hegde / **QA** / **Fixed · 10%** (she is MEAN STACK, 55%). On HyperScale it shows Bhavesh Bansal / **DATA ENGINEERING** / **Fixed · 10%** (he is QA, 20%). The form header has the same values | `s2-confirm-dialog.png`, `s2-newshadow-form.png`, `h1-confirm.png` |
| D5 | Swap copy doesn't match what happens | **Still present.** Option 1 still says "takes over the main allocation %, no new ticket needed". The option 2 form still says "has been deallocated… has been promoted… A new shadow developer request has been raised" before anything is submitted. The option 1 form now also says Kunal "will continue with the existing allocation", which is wrong too: a new allocation is raised, at the shadow's own 10% | `s2-picker.png`, `s2-newshadow-form.png`, `h1-form-filled.png` |
| D6 | The 409 `_172` body names step-1 tickets hidden from the caller | **Still present.** TM sudhansu's UI and `GET` hide DA-0101 (Ananya, MEAN STACK): `blockedBy` lists only DA-0102, `hasHiddenTickets: true`, and the banner says "Complete DA-0102 first". His `PATCH …/approve` response still lists **DA-0101** with its publicId and status, and the message names "#DA-0101" | `json/p4-tm-approve-blocked.json`, `p4-tm-nap-detail.png` |

---

## What I did

**1. Free checks, no tickets.**
- `/my-tickets`, G-1 link icon on NA-0362: the list narrows to the 3 G-1 tickets, the stat tiles narrow too ("All Tickets 03"), and a "Linked Group: Is G-1" chip appears. A second click clears it.
- In the NA-0362 Linked Tickets card, clicking DA-0099 opens `/my-tickets/3d78e476…`, and DA-0099 is marked "This ticket".

**2. New shadow plus close cascade (6 tickets).**
- PMO direct-allocated **Prakash Pillai** (QA, 100% free, 0 h on XCrypt) as SHADOW of **Ananya Hegde** on XCrypt (NA-0364). I used FIXED 10% and an end date of 31/12/2026, both different from the main's, so D3 would be easy to see.
- As CSM tarun, I checked Swap Primary and the main's row (TC-002, TC-003), then ran a set of refused API probes (below).
- I raised the swap: option 2 → Role Misalignment, date 31/10/2026, ratings 7 → **"Yes, Deallocate & Request New Allocation"**.
  - Toast: "Linked tickets raised as G-2 / 4 tickets were raised together…".
  - Body: `flowType: SHADOW_TO_MAIN_NEW_SHADOW`. The promotion has `allocationRequestCreationType: UPDATE_SHADOW_TO_MAIN` and preference = Prakash. The new shadow is `SHADOW_DEVELOPER`, `shadowFor` = Prakash, with no preference.
  - Both DAs went straight to AWAITING_CONFIRMATION, and both NAs to OPEN, blocked.
- Close cascade, as PMO in the UI ("Cancel Request" → "Close this ticket?" → Close Ticket):
  1. Closed the promotion **NA-0365** first, after preparing it to AWAITING. **NA-0366 stayed OPEN**, still blocked by DA-0101/DA-0102. Both DAs stayed AWAITING (D8).
  2. Closed the main's DA **DA-0101**. Toasts: "Ticket Closed: NA-0366" and "Ticket Closed: DA-0101". NA-0366 got the remark "Closed automatically because prerequisite #DA-0101 was closed". **DA-0102 stayed AWAITING, with "Acknowledge & Deallocate" enabled** (D9).
  3. Closed DA-0102 as cleanup. The whole group is now CLOSED.
- PMO direct-removed Prakash with end date 19/10/2026 (DA-0103). Ananya is unchanged: FIXED 55%, 09/05/2026 → 31/05/2027.

**3. >20h (2 tickets).**
- PMO re-added **Kunal Menon** (DATA ENGINEERING, 100% free) to HyperScale as SHADOW of **Bhavesh Bansal** (QA, FIXED 20%, no end, no open tickets) (NA-0367). His new row immediately showed **967.74 h** in the project API, which confirms the hours are counted per employee and project, not per assignment. The CSM table showed 40.32 h, which is still over 20.
- As priya.chopra: option 1 "Shadow Developer becomes the main member", date 31/10, main ratings 7 → "Yes, Deallocate".
  - The request was 400: "All four ratings and isOpenToWorkWithAgain are required because the developer has logged more than 20 hours on this project…".
  - Toast: "Failed to raise the linked tickets" plus that text. The form stayed open.
  - Nothing was created: the ticket total and numbering went straight from NA-0367 to the cleanup DA-0104.
- PMO direct-removed Kunal with end date 19/10 (DA-0104).

**4. ViewForge restore (2 tickets).**
- I considered a cheaper path: a PMO post-approval edit of NA-0362 (`activeEmployeePublicId` = Nimisha, inside the 14-day window) would need 0 tickets. I rejected it because it would rewrite the G-1 test record and needs a department change.
- Instead: PMO direct-removed Ankita's row `d0d7835d…` with end 18/10/2026 (DA-0105), then direct-allocated **Nimisha Bose FIXED 20%, 19/10/2026 → 22/12/2026** (NA-0368).

### Refused API probes (nothing created)

| Probe | Caller | Result |
|---|---|---|
| Swap on XCrypt by a non-owner | PMO | **403** "Access forbidden" (generic `CheckAbility` refusal, not `PROJECT_NOT_MANAGED_BY_CALLER`) |
| Promotion start = deallocation date | CSM | 400 "The promotion and new-shadow start dates must be after both deallocation dates" (`_174`) |
| BOTH_RELEASED with a promotion | CSM | 400 `_176` |
| Promotion preference = someone else (Kriti Desai) | CSM | 400 `_184` |
| Main and shadow are the same assignment | CSM | 400 `_179` |
| Promotion requestType SHADOW_DEVELOPER | CSM | 400 `_186` |
| NEW_SHADOW flow, new shadow shadowing the main | CSM | 400 `_185` |
| NEW_SHADOW flow without `newShadow` | CSM | 400 `_177` |
| The same G-2 swap sent again while G-2 is open | CSM | **409** "An active ticket already exists for this project assignment" (`_024`) |
| `PATCH approve` on OPEN NA-0365 | PMO | 409 "not allowed in the ticket's current status" (status check runs first, as before) |
| `PATCH bypass-approval` + department + shortlist on NA-0365 | PMO | 409 `_172` naming DA-0101 and DA-0102. Afterwards the ticket was still OPEN with no department and an empty shortlist, so the rollback works |
| `PATCH reject` on DA-0101 | PMO | 409 "Decrease/de-allocation tickets cannot be rejected" |
| `PATCH edit` DA-0101 end date → 01/11 (= promotion start) | PMO | 400 `_174`, end date still 31/10 |
| `PATCH edit` NA-0365 start → 31/10 (= DA date) | PMO | 400 `_174`, start still 01/11 |
| `PATCH approve` on AWAITING NA-0365 | TM | 409 `_172` (D6 body), `tmApprovedAt` still empty |

Note: these 400/409 bodies carry only `message`, with no `code` field, except the `_172` gate, which returns `code` and `data`. The codes above are matched by message text.

Evidence: `json/neg-bhumi.json`, `json/neg-tarun.json`, `json/p2-api-checks-pmo.json`, `json/p3-tc030-repeat-swap-csm.json`, `json/p4-tm-approve-blocked.json`.

---

## TC-SHDLNK results (this run)

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-SHDLNK-001 | Picker shows 4 options on shadow row | **Pass** | `s2-picker.png` |
| TC-SHDLNK-002 | "Swap Primary" opens the same picker | **Pass** (was Partial). Hover card → Swap Primary opens "Deallocate Employee" with the same 4 options. Cancel closes it, nothing sent | `s1-badge-hovercard.png`, `s1-tc002-swap-primary-picker.png` |
| TC-SHDLNK-003 | Main's own row has no picker | **Pass**. Ananya's row → Deallocate Employee goes straight to the plain form (MEAN STACK, Fixed 55%). Cancelled | `s1-tc003-main-row-deallocate.png` |
| TC-SHDLNK-005 | Shadow→main + new shadow raises 4 tickets | **Pass**. G-2: 2 DA step 1, 2 NA step 2. Card heading "Step 2 · Promotion & new shadow", flow "Shadow becomes main, new shadow requested" | `s2-after-request-new.png`, `json/s2-swap-network.json`, `p1-na0366-detail-blocked.png` |
| TC-SHDLNK-006 | Option 2 + plain "Yes, Deallocate" | **Not re-run** (D2 still offered, see table above) | `s2-confirm-dialog.png` |
| TC-SHDLNK-009 | List column icon + tooltip | **Pass**. NA-0365/0366: blocked aria-label, tooltip "G-2 · Step 2 of 2 / Waiting on earlier-step tickets in G-2 to be approved / Click to show only this group" | `p1-list-na0366-lock-tooltip.png` |
| TC-SHDLNK-010 | Group filter toggle | **Pass** (note: the icon's aria-label still says "Show only this group's tickets" while the filter is on and a click would clear it) | `r1-tc010-group-filter-on.png`, `r1-tc010-group-filter-off.png` |
| TC-SHDLNK-011 | Blocked banner + disabled actions | **Pass**. "Action blocked. Complete DA-0101, DA-0102 first…", Bypass `aria-disabled=true` with tooltip | `p1-na0366-detail-blocked.png` |
| TC-SHDLNK-012 | Blocked buttons keyboard accessible | **Pass**. Bypass is in the tab order, the tooltip shows on focus, it has `aria-describedby`, and Enter opens nothing | `p1-tc012-bypass-keyboard-focus.png` |
| TC-SHDLNK-013 | Workflow actions stay live while blocked | **Pass**. Department + shortlist + Send for Approval on NA-0365 → AWAITING_CONFIRMATION (PMO approval stamped at send, as before) | `json/p4-prepare-nap.json` |
| TC-SHDLNK-014 | TM cannot approve blocked step 2 | **Pass**. Approve `aria-disabled=true`, tooltip "(DA-0102)", Reject live | `p4-tm-nap-detail.png` |
| TC-SHDLNK-015 | API approve blocked → 409 | **Pass** (TM `_172`). PMO on OPEN gets the status error first, as before | `json/p4-tm-approve-blocked.json`, `json/p2-api-checks-pmo.json` |
| TC-SHDLNK-016 | API bypass blocked → 409, nothing saved | **Pass** | `json/p2-api-checks-pmo.json` |
| TC-SHDLNK-017 | TM first approval blocked via API | **Pass**. Approvals still show only the PMO stamp | `json/p4-tm-approve-blocked.json` |
| TC-SHDLNK-021 | Close step-1 DA cascades to step 2 | **Pass**. NA-0366 CLOSED with remark "Closed automatically because prerequisite #DA-0101 was closed", close toasts for both | `json/c2-close-main-da.json`, `c2-close-main-da-after.png` |
| TC-SHDLNK-022 | Close step-1 DA leaves sibling DA | **Fail** (D9). DA-0102 stayed AWAITING with "Acknowledge & Deallocate" enabled | `c2-DA2.png`, `json/c2-state.json` |
| TC-SHDLNK-023 | Close promotion leaves new-shadow NA | **Fail** (D8). NA-0366 stayed OPEN | `c1-NAP.png`, `json/c1-state.json` |
| TC-SHDLNK-025 | DA cannot be rejected | **Pass** (409 "Decrease/de-allocation tickets cannot be rejected") | `json/p2-api-checks-pmo.json` |
| TC-SHDLNK-027 | Edit DA date on/after promotion start | **Pass** (400 `_174`, unchanged) | `json/p2-api-checks-pmo.json` |
| TC-SHDLNK-028 | Edit promotion start to D | **Pass** (400 `_174`, unchanged) | `json/p2-api-checks-pmo.json` |
| TC-SHDLNK-029 | Shadow >20 logged hours | **Fail** (D7). 400 ratings error, nothing raised, no way to enter the shadow's ratings | `h1-*.png`, `json/h1-over20h-swap.json` |
| TC-SHDLNK-030 | All-or-nothing on failure | **Pass** (variant: same swap re-sent while G-2 open → 409 `_024`, no tickets; the >20h failure also created nothing) | `json/p3-tc030-repeat-swap-csm.json`, `json/rm2-remove-kunalm.json` |
| TC-SHDLNK-031 | Second swap on same main blocked | **Partial**. Same pair re-sent → `_024`. A main with two different shadows was not set up | `json/p3-tc030-repeat-swap-csm.json` |
| TC-SHDLNK-032 | Non-owner cannot raise swap | **Pass** (PMO 403, generic "Access forbidden" text) | `json/neg-bhumi.json` |
| TC-SHDLNK-033 | API rule checks | **Pass** (all 7 probes refused with the expected message) | `json/neg-tarun.json` |
| TC-SHDLNK-034 | Department-scoped view hides tickets | **Pass** (plus D6). TM sees "Some linked tickets belong to other departments and aren't shown.", and only DA-0102 and NA-0365 | `p4-tm-nap-detail.png` |
| TC-SHDLNK-037 | Linked Tickets card navigation | **Pass** | `r1-tc037-card-nav-da0099.png` |
| TC-SHDLNK-038 | Copy check | **Fail** (D5) | `s2-picker.png`, `h1-form-filled.png` |
| Not run | 004, 018–020 (passed on 15/10, needs full approvals), 007, 008, 024, 026, 035, 036, 039, 040 | Not run | Budget, or not needed after 15/10. 007/008/036 each need extra tickets. 024/026 need step 1 approved, which would actually deallocate the main. 039 is a race test. 040 has no usable pair on our projects |

---

## New defects

### D7: "Shadow becomes main" cannot be raised when the shadow has logged more than 20 hours
- **Severity:** High. Any real shadow on a live project will pass 20 hours, and then the swap is impossible from the UI.
- **Steps:**
  1. PMO allocates Kunal Menon (967.74 h logged on HyperScale from an earlier assignment) as SHADOW of Bhavesh Bansal on HyperScale.
  2. As CSM priya.chopra: Kunal's row → Deallocate Employee → "Shadow Developer becomes the main member" → Continue.
  3. Fill reason, date 31/10/2026, all four ratings and feedback (for the main) → Submit → Yes, Deallocate.
- **Expected:** 3 linked tickets, or a form that asks for the shadow's ratings too.
- **Actual:**
  - `POST /allocation-tickets/shadow-swap` → 400 "All four ratings and isOpenToWorkWithAgain are required because the developer has logged more than 20 hours on this project…".
  - Toast: "Failed to raise the linked tickets" with that text. The user had already filled every rating on the form, so the message reads as wrong.
  - Nothing is created, and there is no field anywhere for the shadow's ratings.
- **Evidence:** `h1-form-filled.png`, `h1-confirm.png`, `h1-after-submit-toast.png`, `json/h1-over20h-swap.json` (the `shadowDeallocation` has no ratings).
- **Cause:** frontend `shadowSwapPayload.ts` `buildShadowOwnDeallocationValues()` always sends the shadow's DA with `skipFeedback: true`. The backend runs `prepareRemoveAllocation` on it, which needs ratings above 20 h (`allocation-ticket-validator.service.ts`, `_161`). The hours are read per employee and project, so hours from an older assignment on the same project count too.
- Same for option 2 (+ new shadow), which uses the same shadow DA builder.

### D8: Closing the promotion leaves the new-shadow ticket open
- **Severity:** Medium.
- **Steps:**
  1. Raise G-2 (option 2, "Yes, Deallocate & Request New Allocation").
  2. PMO closes the promotion NA-0365 (Cancel Request → Close Ticket).
- **Expected:** the new-shadow request NA-0366, which shadows the promoted employee, closes too, or the user is warned.
- **Actual:**
  - NA-0366 stays OPEN and is still waiting only on step 1.
  - If both DAs are then acknowledged, both developers leave, and NA-0366 unlocks: a shadow for an employee who has left the project and was never promoted.
  - The close dialog says nothing about linked tickets.
- **Evidence:** `c1-close-promotion-dialog.png`, `c1-NAP.png`, `json/c1-state.json`.
- **Cause:** `closeGroupDependents()` (`backend allocation-ticket-group.util.ts:186-222`) only closes members with `groupStep > closedStep`. Siblings in the same step are never touched.

### D9: Closing the main's DA leaves the shadow's DA open and acknowledgeable
- **Severity:** Medium.
- **Steps:** on G-2, PMO closes DA-0101 (Ananya, main).
- **Expected:** the swap is called off as a whole, so DA-0102 (Prakash's own deallocation) also closes, or the user is asked.
- **Actual:**
  - Step 2 was closed (correct).
  - DA-0102 stayed AWAITING_CONFIRMATION, with **"Acknowledge & Deallocate" enabled**, and no banner or warning.
  - Acknowledging it would remove the shadow while the main stays, which is not what the CSM asked for.
- **Evidence:** `c2-close-main-da-after.png`, `c2-DA2.png`, `json/c2-state.json`.
- **Cause:** the same step filter as D8.

### D10: A cancelled group still says it is waiting
- **Severity:** Low (UI).
- **Steps:** after all four G-2 tickets were CLOSED, open any of them.
- **Expected:** the card and banner say the group was closed or cancelled.
- **Actual:**
  - Banner: "Step 1 of 2 — Part of linked group G-2. Tickets in a later step unlock once every earlier step is approved."
  - Card: "Step 1 · Deallocations **0 of 2 approved**" and "Step 2 · Promotion & new shadow **Unlocks after Step 1**".
  - The same thing happens mid-way. With DA-0101 closed, DA-0102 still shows "0 of 2 approved" and step 2 "Unlocks after Step 1", although step 2 can never unlock.
- **Evidence:** `c4-g2-all-closed-card.png`, `c2-DA2.png`.
- **Cause:** `groupTicketsByStep()` (`frontend src/components/tickets/ticket-detail/ticketGroupUtils.ts` ~57-71) counts only APPROVED and treats any non-APPROVED earlier ticket, CLOSED included, as "locked".

---

## Observations (not defects, or minor)
- **No warning before closing a grouped ticket.** The close dialog is the generic "This closes the ticket without completing the allocation workflow". It does not say that later steps will close too (they do), or that siblings will not (D8, D9).
- **Group icon aria-label doesn't flip.** With the group filter on, the icon still reads "…Show only this group's tickets". The tooltip has a "Click to show all tickets again" text, but the aria-label has no clear variant.
- **PMO non-owner swap returns a generic 403** ("Access forbidden"), not the documented `PROJECT_NOT_MANAGED_BY_CALLER`. The plain "Access forbidden" text suggests it is refused at the route's ability check before the ownership check runs (not confirmed in code).
- **TM UI names only visible blockers.** For TM sudhansu the banner said "Complete DA-0102 first" while DA-0101 was also blocking. That is consistent with the hidden-ticket design, but the step-1 count is hidden and the named list is incomplete.
- **Ended rows stay in "Active Allocations".** Rows that ended on or before today still sit in the CSM's Active tab, many from months ago (for example Urvashi Kulkarni, ended 13/08). That suggests the daily archive job is not running on dev. As a result, Ankita's old ViewForge shadow row (`0e9f02fe…`, ended 15/10) is listed again next to Nimisha's new row, still with the violet "Shadow Developer of Nimisha Bose" badge (`z-final-viewforge.png`). The same applies to Prakash on XCrypt and Kunal on HyperScale (ended 19/10). Not caused by T1464.
- **The plain option ("shadow becomes main") offers only "Yes, Deallocate"** in the confirm dialog. The two-button dialog appears only for option 2, so D2 is limited to option 2.
- The approved NA-0362 page still offers PMO "Update Final Selection" (the post-approval re-selection), even for a promotion inside a linked group. Not tested.

---

## Data created on dev (10 tickets)

| # | Ticket | Project | Employee | What | Final state | Cleaned up? |
|---|---|---|---|---|---|---|
| 1 | NA-0364 (direct allocation, APPROVED) | XCrypt | Prakash Pillai | Shadow of Ananya Hegde, `4186a764…` FIXED 10%, 19/10 → 31/12 | End trimmed to **19/10/2026** by #6 | Yes. A one-day row stays in his history, and is listed under Active until archived |
| 2 | DA-0101 (G-2 step 1) | XCrypt | Ananya Hegde | Main's deallocation in the swap | **CLOSED** by me (TC-021) | Yes. Ananya unchanged: FIXED 55%, 09/05/2026 → 31/05/2027 |
| 3 | DA-0102 (G-2 step 1) | XCrypt | Prakash Pillai | Shadow's own deallocation | **CLOSED** by me (cleanup after TC-022) | Yes |
| 4 | NA-0365 (G-2 step 2, promotion) | XCrypt | Prakash Pillai | FIXED 10%, 01/11 → 31/12 (D3) | **CLOSED** by me (TC-023). Before that, PMO had set dept QA, shortlisted Prakash and sent it for approval | Yes |
| 5 | NA-0366 (G-2 step 2, new shadow) | XCrypt | — | Shadow of Prakash, FIXED 10% | **CLOSED automatically** by the cascade from DA-0101 | Yes |
| 6 | DA-0103 (direct remove, APPROVED) | XCrypt | Prakash Pillai | Cleanup of #1 | Applied | n/a |
| 7 | NA-0367 (direct allocation, APPROVED) | HyperScale | Kunal Menon | Shadow of Bhavesh Bansal, `89c7a281…` FIXED 10%, 19/10 → 31/12 | End trimmed to **19/10/2026** by #8 | Yes (one-day row) |
| 8 | DA-0104 (direct remove, APPROVED) | HyperScale | Kunal Menon | Cleanup of #7 | Applied | n/a |
| 9 | DA-0105 (direct remove, APPROVED) | ViewForge | Ankita Das | Ends the G-1 promotion row `d0d7835d…` (DYNAMIC from 16/10) | Ends **18/10/2026** | Yes (restore) |
| 10 | NA-0368 (direct allocation, APPROVED) | ViewForge | Nimisha Bose | Restores the main: `6554552b…` FIXED 20%, **19/10/2026 → 22/12/2026** | Active | Yes (restore) |
| — | G-2 (`e272a12c…`) | XCrypt | — | Second linked group on dev | All 4 members CLOSED | — |
| — | 1 refused swap (>20h), 1 refused repeat swap, 8 refused API probes | XCrypt / HyperScale | — | Attempts | Nothing created | — |

**ViewForge now:** Nimisha Bose is main, FIXED 20%, to 22/12/2026. She has a 3-day gap (16–18/10) between her old row (ended 15/10) and the new one. Ankita Das is off the project: her rows end 15/10 and 18/10. Her old shadow row is still listed under Active with the shadow badge until the archive job runs (see Observations). G-1's tickets are unchanged and still APPROVED.

No roles, reporting lines or permissions were changed. No ticket or allocation I did not create was touched. No emails or reminders were sent, and nothing was filed in Zoho. The app's own in-app notifications for these actions (ticket created/closed, sent for approval, direct allocation and removal) went out as usual. I did not read them.
