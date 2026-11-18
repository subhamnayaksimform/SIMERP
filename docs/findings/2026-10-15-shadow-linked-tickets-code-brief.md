# Shadow swap linked ticket groups (SI4-T1464): code brief for QA

**Summary**
1. A shadow swap now goes out as one call, `POST /allocation-tickets/shadow-swap`. It creates a numbered **linked group** (`G-<n>`) in one go, and either every ticket is created or none is. Step 1 holds the two deallocations (main and shadow). Step 2 holds the promotion (a new allocation for the shadow) and, if requested, a new-shadow request.
2. The backend enforces the order. A step-2 ticket cannot be **approved, acknowledged or bypassed** while any step-1 ticket is not APPROVED. The server returns 409 `ALLOCATION_TICKET_172` "Complete the step 1 tickets (#DA-…, #DA-…) before actioning this ticket." Calling the API directly does not get around it.
3. Closing a step-1 ticket also closes the open step-2 tickets with it. Withdrawing an approved step-1 period is refused (409 `_182`) once a step-2 ticket is already APPROVED. Date edits re-check that step 2 starts strictly after both deallocation dates.
4. On screen: an amber **lock** icon in the new "Linked Group" column of the ticket list (link icon when not blocked), an "Action blocked." banner on ticket detail, a "Linked Tickets" card grouped by step, and Approve / Acknowledge / Bypass Approval buttons that look disabled but stay focusable, with a tooltip. Reject, shortlist and Send for Approval stay live.
5. Suspected bugs: a "shadow becomes main" swap fails outright if the shadow has logged more than 20 hours. The "+ new shadow" option silently drops the new shadow if the user clicks plain "Yes, Deallocate". Closing the step-2 promotion leaves the sibling new-shadow ticket open. Tickets raised outside the swap flow are never linked. Some copy is wrong ("no new ticket needed", "Blocked" badge).

Source: `origin/development`. Backend commits `d0cce2b1` and `d9588e5e` (PR #543); frontend commits `e9a3a002` and `646907d2` (PR #497), all on 13 Oct 2026, release note 6.4.1. Related: SI4-I560 backend `31fd61eb` (a PERMANENT replacement of a shadow keeps the pairing) and frontend `bb6ab2c4` (adds the 4th picker option "Only {shadow} released"). **SI4-T1285 "conflict resolved" (`af0ab6d9`) is a merge commit for the Working Location feature. It has nothing to do with shadows or tickets, so ignore it for this feature.**

---

## 1. Data model: main vs shadow

- **Where the pairing lives.** It sits on the **shadow's** `ProjectAssignment` row: `requestType = SHADOW_DEVELOPER` and `shadowDeveloperId = <MAIN employee id>`. The column name is misleading; on a shadow row it holds the main. Very old rows without the marker store it the other way round (on the main's row, `shadowDeveloperId` = the shadow). `resolveShadowRelation()` reads both forms (`backend src/modules/allocation-tickets/allocation-shadow-coverage.util.ts`).
- **Effect on capacity.** A shadow raises the main's allocation ceiling: 100% base, plus each shadow's coverage up to 100 per shadow, and only the 2 highest shadows count (`MAX_SHADOWS_COUNTED_TOWARD_CAP = 2`). These rules come from SI4-T1021/T1288. The error text is `TOTAL_ALLOCATION_PERCENTAGE_EXCEEDED` (`_099`): "This employee's total active allocation percentage across all projects would exceed their maximum allowed allocation (100% base, plus what each shadow developer covering them is allocated, up to 2 shadow developers)".
- **What the frontend shows.** On the shadow's row, `employee.shadowDeveloper` names the **main**. The violet badge (aria-label "Has a shadow developer") opens a hover card titled "Shadow Developer", with "Shadow Developer of: <main>" and a **"Swap Primary"** link. Note that the badge sits on the shadow's row, even though its aria-label reads "Has a shadow developer".
- **SI4-I560 (backend).** A REPLACE_ALLOCATION raised on a shadow row now carries `requestType`/`shadowForId`. A PERMANENT successor inherits the pairing; a TEMPORARY stand-in is never paired.

### Which actions create a "shadow swap"
Start from the **shadow's row** on `/my-projects/:projectId`: either the row menu "Deallocate Employee" or badge → "Swap Primary". Both open the picker "Deallocate Employee". It asks for an Allocation Type with 4 radio options:

| Picker option (UI text) | flowType | Tickets raised |
|---|---|---|
| "Shadow Developer becomes the main member" | `SHADOW_TO_MAIN` | Step 1: DA for main + DA for shadow. Step 2: NA promotion (FRESH_ALLOCATION, preferred = the shadow) |
| "Shadow Developer becomes main + new shadow requested" | `SHADOW_TO_MAIN_NEW_SHADOW` (**only if "Yes, Deallocate & Request New Allocation" is clicked**) | Step 1: 2×DA. Step 2: NA promotion (marked `UPDATE_SHADOW_TO_MAIN`, shortlist locked to the shadow) + NA new shadow (SHADOW_DEVELOPER, shadowing the promoted employee, no preference) |
| "Main and shadow both released from the project" | `BOTH_RELEASED` | Step 1 only: 2×DA (two tabs, "Main Developer" / "Shadow Developer", each with its own date and feedback). No gating |
| "Only {shadow} released from the project" | (no group) | 1 plain DA on the shadow, ungrouped (the old `remove-allocation` endpoint) |

- Deallocating the **main's own row** opens no picker. It raises one plain, ungrouped DA.
- Replacement (RA) and Update Allocation (UA) never create a group.
- Step-2 start date = deallocation date + 1 day (`shadowSwapPayload.ts:34 nextDay`).
- The promotion and new shadow copy the main's allocation type, %, end date and the shadow's tech stack.
- In the "shadow becomes main" flows the shadow's own DA is filled in by the system: reason ROLE_MISALIGNMENT, same date as the main's, `skipFeedback: true` (`shadowSwapPayload.ts:43-49`).

## 2. Linked ticket groups

### Model and creation
- New table `allocation_ticket_groups`: `groupNumber` (global counter prefix `G`, shown as `G-<n>`), `projectId`, `flowType`, `createdById`. Tickets get `groupId` and `groupStep` (1 = deallocations, 2 = follow-ups). Migration `20261012120000_add_allocation_ticket_groups`. **There is no backfill**, so swaps raised before 6.4.1 stay unlinked.
- `ShadowSwapService.create()` (`backend .../shadow-swap.service.ts`) runs these checks before writing anything:
  1. Shape rules for each flowType (`:149`).
  2. Promotion and new-shadow start dates must be strictly after both DA dates (`:228`).
  3. The caller must be the project's **PM or CSM** (`findOwnedProjectOrThrow`, `:133`, validator `:195-223`). PMO/Admin get 403 unless they own the project.
  4. Each DA runs the same rules as `remove-allocation` (`prepareRemoveAllocation`, service `:693`): you must own the assignment; feedback ratings are required when the developer has more than 20 logged hours; there must be no active UA/RA/DA ticket and no pending scheduled deallocation on that assignment; the end date cannot be before the start.
  5. The main and shadow must be two different assignments on the same project and must be a real pair (`:185`).
  6. The promotion must list exactly the shadow as its only preference (`:202`).
  7. The new shadow must be SHADOW_DEVELOPER and shadow that same employee.
  8. The promotion must be FRESH_ALLOCATION. Neither step-2 ticket may be a PR reviewer request.
- The writes run in one transaction: lock both assignments, create the group, the step-1 DAs, then the step-2 NAs. Notifications go out only after commit.
- Success toast: "Linked tickets raised as G-<n>" / "<count> tickets were raised together. Later steps unlock once the deallocations are approved."
- Failure toast: "Failed to raise the linked tickets" with the server message, falling back to "Nothing was raised. Please try again."
- Frontend pre-checks (nothing is sent): "Main developer not deallocated"; the "no tech stack" error ("The shadow developer has no tech stack on this project, so the promotion cannot be raised. Nothing was raised."); "Fill in the Shadow Developer tab before submitting. Nothing was raised."

### Order rule (backend `allocation-ticket-group.util.ts`)
- **Blocked** means some ticket in a **lower** step has a latest status other than APPROVED (`findLowerStepBlockers` `:126-137`). This is worked out from live data and never stored. A ticket that is itself APPROVED or CLOSED is never shown as blocked (`:387`).
- **Gate** (`assertGroupPrerequisitesMet` `:157-177`). It locks the group row (`SELECT … FOR UPDATE`) and then throws `409 {code: ALLOCATION_TICKET_172, message: "Complete the step {steps} tickets (#X, #Y) before actioning this ticket.", data.blockingTickets[]}`. It is called from:
  - `approve()`, inside the transaction, on **every** approval (TM/EM or PMO, first or final) (`workflow.service.ts:355`)
  - `acknowledge()` (`:434`)
  - `bypassApproval()`, as the first thing in a single transaction, so a refused bypass also rolls back any shortlist or department changes sent with it (`:651`)
- **Not gated:** `update` (shortlist, department, Send for Approval), `advance`, `reject` and `close`. PMO can prepare step 2 while step 1 is still in flight.
- **Close cascade** (`closeGroupDependents` `:186-222`). When a ticket closes, every **higher-step** non-terminal ticket gets a CLOSED timeline row plus the remark "Closed automatically because prerequisite #<ticketNumber> was closed" (`_180`), and each one gets its own close notification. It runs on the workflow `close` and when a scheduled period is withdrawn.
- **Close race guard** (`assertGroupedTicketStillOpen` `:276`). If the ticket became APPROVED or CLOSED while the close was in flight, the close returns 409 `TICKET_ALREADY_TERMINAL` "This ticket is already APPROVED or CLOSED and cannot be actioned again".
- **Withdrawal guard** (`assertNoApprovedGroupDependents` `:237`). Removing the timeline period of a grouped ticket while a higher step is APPROVED returns 409 `_182`: "This allocation period cannot be removed because a later step of its linked ticket group (#…) is already approved and depends on it".
- **Date rule on edit** (`assertGroupDateOrder` `:328`, called from `edit-allocation-ticket.service.ts` when `allocationStartDate` or `allocationEndDate` is edited, which includes edits after approval inside the 14-day window). Every live step-2 start must be strictly after every live step-1 DA end date. Otherwise it returns 400 `_174` "The promotion and new-shadow start dates must be after both deallocation dates". CLOSED members are ignored.
- **Extra check on UPDATE_ALLOCATION.** Availability is now also checked on the first of the two approvals, not just the final one (`allocation-update-availability.util.ts`). This applies to all UA tickets, not only grouped ones.

### Who does what (full flow)
| Ticket | Flow | Actors |
|---|---|---|
| DA (step 1) | lighter flow: OPEN → (AWAITING_CONFIRMATION) → APPROVED on **Acknowledge** | PMO only (`canAcknowledgeDeallocate` = DEALLOCATE on ALLOCATIONS). It cannot be rejected (`_089` "Decrease/de-allocation tickets cannot be rejected"). PM/PMO can Close it |
| NA promotion / new shadow (step 2) | full flow: OPEN → PMO_REVIEWED → IN_REVIEW (PMO assigns department + shortlists) → Send for Approval → AWAITING_CONFIRMATION → **both** PMO and the department's TM/EM approve → APPROVED (auto-applied) | PMO shortlists, sends and approves. TM/EM of the selected developer's department approves or rejects. PMO can **Bypass Approval** (skips TM/EM). Reject sends it back to IN_REVIEW |

### Screen elements (frontend, `src/constants/tickets/ticketGroupLabels.ts`)
- **Ticket list `/my-tickets`.** A new header-less 44px column "Linked Group" (screen-reader label) next to Ticket ID.
  - It shows a Link2 icon, or an amber **Lock** when blocked.
  - Tooltip: "G-12 · Step 2 of 2", plus "Waiting on earlier-step tickets in G-12 to be approved" when blocked, plus "Click to show only this group" (or "Click to show all tickets again").
  - Clicking toggles a filter chip labelled "Linked Group" (shows "Selected group" when the group's number isn't on the loaded page). The backend query param is `groupPublicId`, which also narrows the stat tiles.
  - aria-labels: "Step {s} of {t} in linked group G-n. Show only this group's tickets" and "…, blocked until earlier steps are approved. …".
- **Ticket detail `/my-tickets/:ticketId`, banner under the header:**
  - Blocked: warning with lock icon, "**Action blocked.** Complete DA-…, DA-… first. This ticket unlocks automatically once the earlier step is approved." If all the blockers are hidden from the viewer: "This ticket unlocks automatically once the earlier step is approved."
  - Not blocked: info box "**Step 2 of 2** — Part of linked group G-n. Tickets in a later step unlock once every earlier step is approved."
  - BOTH_RELEASED: "Part of linked group G-n."
- **"Linked Tickets" card** (left column, badge `G-n`).
  - Flow label: "Shadow becomes main" / "Shadow becomes main, new shadow requested" / "Main and shadow released".
  - Headings per step: "Step 1 · Deallocations", "Step 2 · Promotion" or "Step 2 · Promotion & new shadow".
  - Step state: "All approved" (green tick), "Unlocks after Step 1" (orange lock), or "x of y approved".
  - Each row: ticket ID link, type, employee chip or "Not assigned", status badge. The current row is highlighted with "This ticket".
  - "Some linked tickets belong to other departments and aren't shown." appears when the viewer can't see every member, and step counts are hidden in that case.
- **Disabled actions.** Approve, Acknowledge (Deallocate/Update), PR-reviewer Approve and **Bypass Approval** get `aria-disabled="true"`. They stay in the tab order and are visually dimmed, clicks do nothing, and they show the tooltip "Blocked until the earlier step is approved (DA-…, DA-…)." or "Blocked until the earlier step is approved."
  - Reject, Send for Approval, the shortlist and Close are **not** blocked.

## 3. Conflict detection when an approval completes

**Before the group gate existed:** each ticket was checked on its own when it was approved. That inconsistency is what the Zoho report describes.

**What runs now on approve / bypass:**
- **NA/RA:** `validateSelectedDeveloperEligibility` (`allocation-apply.service.ts:337`):
  - `assertNoOverlappingActiveAssignment` returns 409 `_098` "This employee already has an active (non-archived) allocation on this project". This is why a promotion approved before the shadow's DA failed: the shadow's own row was still open.
  - `assertAvailable` returns 400 `_099` (total % exceeded, with `data.conflicts`).
- **UA:** the same availability check, now on every approval.
- **DA approval** writes `allocationEndDate` at once (and archives the row now, or schedules the archive for a future date). So once both DAs are approved, a step-2 start on D+1 no longer overlaps.
- **Other relevant errors:**
  - `_024` "An active ticket already exists for this project assignment"
  - `_084` "This approval has already been recorded for the ticket"
  - `_161` "All four ratings and isOpenToWorkWithAgain are required because the developer has logged more than 20 hours on this project…"
  - `_088` "An APPROVED ticket cannot be closed — raise a remove-allocation ticket to end the allocation"
  - shadow-swap 400s `_174`–`_186` (the full list is in the controller `@ApiResponse`)

**Can the API be used to skip the order?** **No, for grouped tickets.** The gate runs on the server inside the transaction under the group row lock, for approve, acknowledge and bypass, whatever the role. The frontend disabling is only a convenience.

**Ways around the order that remain (worth testing):**
1. **Tickets that are not in a group.** A plain DA on the main's row plus a separate New Allocation that prefers the shadow are unrelated tickets, with no order between them. The original bug is still reproducible this way.
2. **PMO direct allocation** (`/my-tickets/direct-allocation`, `POST /allocation-tickets/direct-allocation`) ignores groups completely. It can allocate the shadow, or anyone else, while the group is pending. Direct *update* and *remove* are still blocked by the active DA ticket.
3. **Pre-6.4.1 swaps** have no group.

## 4. Edge cases (from code)

| Scenario | What the code does |
|---|---|
| Reject a step-2 NA | It goes back to IN_REVIEW and approvals are cleared. Nothing cascades. Reject is never blocked, even while the ticket is blocked |
| Reject a step-1 DA | Not possible (lighter flow, `_089`) |
| Close a step-1 DA (OPEN/AWAITING) | The DA closes and every open step-2 ticket closes with the system remark. The other step-1 DA stays open, so in a "shadow becomes main" swap the shadow is still deallocated with no promotion (see Bug 4) |
| Close the step-2 promotion | Only that ticket closes. The sibling **new-shadow** NA (also step 2) stays open and can be approved (Bug 3). The step-1 DAs still go ahead, so both developers leave |
| Approve step 2 out of order | Frontend: Approve/Bypass disabled. API: 409 `_172`. A first TM approval is refused too |
| Approve step 2 before it reaches AWAITING_CONFIRMATION | The status check runs before the gate, so you get a status error rather than `_172` |
| Approve/acknowledge the step-1 DAs in either order | Allowed: no order inside a step. Step 2 unlocks only when **both** are APPROVED |
| 3+ tickets | Only `SHADOW_TO_MAIN_NEW_SHADOW` produces 4 tickets (2+2). The two step-2 tickets are not ordered relative to each other |
| Same developer in two groups | Main with shadows A and B: a swap with A puts an active DA on the main's assignment, so a swap with B fails with 409 `_024`. The same shadow on two projects means two independent groups. After the A swap completes, B's row still says "Shadow Developer of" a main who has left (no clean-up code) |
| Bypass approval on a blocked step 2 | Frontend disabled, API 409 `_172`. Shortlist/department fields sent with the bypass are rolled back as well |
| PMO direct actions | Not group-aware (see §3) |
| Withdraw (delete scheduled change / close an APPROVED ticket that owns a period) for a step-1 DA | 409 `_182` if a step-2 ticket is APPROVED. Otherwise the withdrawal closes it and cascades |
| Edit a DA end date to on/after the promotion start, or the promotion start to on/before a DA date | 400 `_174`, edit rolled back |
| Promotion end date | Copies the main's end date. If the deallocation date is on or after the main's end date, the promotion's end comes before its start, so the swap fails NA validation (untested) |
| Swap raised by PMO / Admin / TM on a project they don't own | 403 `PROJECT_NOT_MANAGED_BY_CALLER` (only PM or CSM of the project) |
| TM/EM viewing step 2 | DA tickets are in the PMO's scope, so the Linked Tickets card may hide them: "Some linked tickets belong to other departments…", the unnamed blocked message, and no step progress |

## 5. Suspected bugs

1. **[High] "Shadow becomes main" fails completely when the shadow has logged more than 20 hours on the project.**
   - The frontend always sends the shadow's DA with `skipFeedback: true`, so no ratings go out (frontend `src/components/pm-projects/allocation-actions/shadowSwapPayload.ts:43-49`, `allocationActionUtils.ts:389`).
   - The backend demands ratings above 20 logged hours (`allocation-ticket-validator.service.ts:484-508`) and returns 400 `_161`. Because the swap is all-or-nothing, nothing is raised.
   - The user only sees "Failed to raise the linked tickets" with the ratings message, and there is no form where ratings for the shadow could be entered.
   - This behaviour existed before this change: the old separate calls failed half-way instead.
   - Any real shadow on a live project will have more than 20 hours.
2. **[Medium] The "+ new shadow" option quietly drops the new shadow.**
   - The confirmation dialog shows **both** "Yes, Deallocate" and "Yes, Deallocate & Request New Allocation" (`DeallocateEmployeeDialog.tsx:238-240`, `DeallocationConfirmationDialog.tsx:166-170`).
   - Clicking "Yes, Deallocate" after choosing "Shadow Developer becomes main + new shadow requested" sends `SHADOW_TO_MAIN` (`shadowSwapPayload.ts:69-72`), so no new-shadow ticket is created.
   - The form banner still said "A new shadow developer request has been raised."
3. **[Medium] Closing a step-2 ticket doesn't reach its step-2 sibling.**
   - The cascade only targets `groupStep > closedStep` (`allocation-ticket-group.util.ts:198-203`). Closing or abandoning the promotion leaves the new-shadow NA open.
   - If that NA is approved, the new shadow is paired to the promoted employee, who by then has been deallocated and never became main.
4. **[Medium] Closing one step-1 DA leaves the other step-1 DA live.**
   - In a "shadow becomes main" swap, closing the main's DA cancels the promotion, but the shadow's DA is still open and can be acknowledged. The shadow then leaves while the main stays.
   - Same root cause: the cascade only goes to higher steps (`:198-203`).
5. **[Medium] The order is only enforced for swaps raised through the new picker.**
   - A plain DA on the main's row (no picker) plus a separately raised NA for the shadow are unlinked, so the original "some conflicting tickets still approvable" behaviour remains.
   - PMO direct allocation ignores groups as well.
   - No migration links swaps raised before 6.4.1.
6. **[Low] On the plain "Shadow becomes main" swap, PMO is not held to the shadow.**
   - The promotion is not marked `UPDATE_SHADOW_TO_MAIN` (`shadow-swap.service.ts:348-357`), so the shortlist is unlocked and PMO can select and approve a different developer as main. The preference is checked only when the swap is created.
   - Confirm with product whether this is intended.
7. **[Low, copy] Several texts don't match what happens.**
   - The picker option says "{shadow} takes over the main allocation %, **no new ticket needed**." (`allocationActionsLabels.ts:128`), but 3 tickets and full approvals are needed.
   - The form banners say "has been deallocated / has been promoted" before anything is approved (`:141-146`).
   - Help (`src/content/help/tickets.json:44,75`) mentions a ticket "marked Blocked" / that "shows Blocked". There is no "Blocked" badge or label, only the lock icon and the "Action blocked." banner.
8. **[Low, UI] Step progress never completes if a ticket in the step is closed.** A step with a CLOSED ticket never shows "All approved", for example "1 of 2 approved" forever (`ticketGroupUtils.ts:57-71`, which counts only APPROVED).
9. **[Low, data] Leftover pairing after a swap.** When a main has two shadows (A, B), swapping with A leaves B's row still paired to the departed main. Nothing re-points or clears it.

## 6. Test setup recipe (dev)

Accounts (shared password, all `@simformsolutions.com`): Admin `ceo@`, PMO `bhumi.chauhan@`, PM `hardik.trivedi@`, TM `sudhansu.patel@`, EM `kunal.jadeja@`, CSM `tarun.sharma@`, Employee `kashyap.patel@`.

**A. Set up a main + shadow pair on a project that PM hardik.trivedi@ (or CSM tarun.sharma@) owns.**
- Option 1 (fast), as PMO:
  1. Go to `/my-tickets/direct-allocation`.
  2. Allocate main **M** to project P.
  3. Allocate shadow **S** to P as a shadow developer of M (shadow developer field = M).
- Option 2 (ticket flow):
  1. As PM, `/my-projects/new-allocation` (or project detail → New Allocation), Request Type "Shadow Developer" for M.
  2. As PMO, open the ticket in `/my-tickets`, assign department, shortlist S, Send for Approval.
  3. As TM/EM of S's department, Approve.
  4. As PMO, Approve.
- Check: on `/my-projects/<P>` the row for **S** shows the violet shadow badge, with "Shadow Developer of M" in its hover card.
- Use a **fresh shadow with ≤20 logged hours** for the happy path. Use a shadow with more than 20 hours to reproduce Bug 1.
- Make sure there are **no open UA/RA/DA tickets** on either assignment.
- If the PM can't see the team table or row actions on dev (6.2.0 nav change), use CSM tarun.sharma@. The backend accepts PM or CSM.

**B. Raise the swap** (PM or CSM):
1. Open `/my-projects/<P>`, then on **S's row** choose ⋯ → "Deallocate Employee", or hover the badge → "Swap Primary".
2. Pick an option and click Continue.
3. Fill in Deallocation Reason, Deallocation Date (and ratings for the main, or both tabs for "both released").
4. Click Submit Deallocation, then confirm with "Yes, Deallocate" or "Yes, Deallocate & Request New Allocation".
5. Expected toast: "Linked tickets raised as G-n".

**C. Approval chain:**
1. **PMO** opens `/my-tickets` and filters by the group's link icon. Open a step-2 NA: lock banner, Approve/Bypass disabled with tooltip.
2. PMO can still assign department / shortlist / **Send for Approval** on step 2.
3. **TM/EM** (department of the selected developer) opens the step-2 NA. Approve is disabled with tooltip, Reject is enabled.
4. **PMO** opens each step-1 DA and clicks **Acknowledge** (Deallocate). After the first one the step-2 ticket is still blocked; after the second, the banner switches to "Step 2 of 2" and the list icon changes from lock to link.
5. **TM/EM** approves, then **PMO** approves the step-2 NA (or PMO uses Bypass Approval). The ticket becomes APPROVED and is auto-applied.
6. Check the project team: S becomes main from D+1, and M and S's old rows end on D.

**D. API checks** (as PMO, with the token from the browser):
- `PATCH /api/v1/allocation-tickets/<step2PublicId>/approve` or `/bypass-approval` while step 1 is pending → expect 409 `ALLOCATION_TICKET_172` with `data.blockingTickets`.
- Ask before running any of these against shared dev data.

## 7. Draft test cases

| ID | Title | Role | Steps (short) | Expected |
|---|---|---|---|---|
| TC-SHDLNK-001 | Picker shows 4 options on shadow row | PM/CSM | Project detail → shadow row → Deallocate Employee | "Deallocate Employee" dialog, Allocation Type with 4 radios (texts from §1), default "Shadow Developer becomes the main member" |
| TC-SHDLNK-002 | "Swap Primary" opens the same picker | PM/CSM | Hover violet badge on shadow row → Swap Primary | Same picker opens |
| TC-SHDLNK-003 | Main's own row has no picker | PM/CSM | Deallocate main's row | Plain Deallocate form, single DA, no group |
| TC-SHDLNK-004 | Shadow→main raises 3 linked tickets | PM | Option 1, date D, confirm "Yes, Deallocate" | Toast "Linked tickets raised as G-n" / "3 tickets were raised together…"; 2 DA (step 1) + 1 NA (step 2, start D+1, preferred = shadow) |
| TC-SHDLNK-005 | Shadow→main + new shadow raises 4 tickets | PM | Option 2, confirm "Yes, Deallocate & Request New Allocation" | 4 tickets; card heading "Step 2 · Promotion & new shadow"; flow label "Shadow becomes main, new shadow requested" |
| TC-SHDLNK-006 | Option 2 + plain "Yes, Deallocate" drops new shadow (Bug 2) | PM | Option 2, confirm "Yes, Deallocate" | **Expected per banner:** 4 tickets. **Suspected actual:** 3 tickets, flow "Shadow becomes main" |
| TC-SHDLNK-007 | Both released = one-step group | PM | Option 3, fill both tabs, confirm | 2 DA in one group; banner "Part of linked group G-n."; no lock anywhere |
| TC-SHDLNK-008 | Shadow only released = no group | PM | Option 4 | 1 DA, no Linked Group icon, main row unchanged |
| TC-SHDLNK-009 | List column icon + tooltip | PMO | `/my-tickets`, hover icon on step-2 row | Amber lock; tooltip "G-n · Step 2 of 2" + "Waiting on earlier-step tickets in G-n to be approved" + "Click to show only this group" |
| TC-SHDLNK-010 | Group filter toggle | PMO | Click icon, then click again | Chip "Linked Group" limits list + stats to the group; second click clears |
| TC-SHDLNK-011 | Blocked banner + disabled actions on step 2 | PMO | Open step-2 NA at AWAITING_CONFIRMATION | Banner "Action blocked. Complete DA-x, DA-y first…"; Approve and Bypass Approval aria-disabled, tooltip "Blocked until the earlier step is approved (DA-x, DA-y)."; click does nothing |
| TC-SHDLNK-012 | Blocked buttons keyboard accessible | PMO | Tab to disabled Approve | Button receives focus, tooltip/sr-only reason announced |
| TC-SHDLNK-013 | Workflow actions stay live while blocked | PMO | On blocked step 2: assign department, shortlist, Send for Approval | All succeed; status moves to AWAITING_CONFIRMATION |
| TC-SHDLNK-014 | TM/EM cannot approve blocked step 2 | TM/EM | Open step-2 NA | Approve disabled with tooltip; Reject enabled |
| TC-SHDLNK-015 | API approve blocked → 409 | PMO (API) | PATCH `/approve` on step 2 while DAs pending | 409 `ALLOCATION_TICKET_172` "Complete the step 1 tickets (#…, #…) before actioning this ticket."; no approval recorded |
| TC-SHDLNK-016 | API bypass blocked → 409, nothing saved | PMO (API) | PATCH `/bypass-approval` with shortlist fields on blocked ticket | 409 `_172`; shortlist/department unchanged |
| TC-SHDLNK-017 | TM first approval blocked via API | TM (API) | PATCH `/approve` as TM on blocked step 2 | 409 `_172`; `tmApprovedAt` stays null |
| TC-SHDLNK-018 | Unlock after both DAs acknowledged | PMO | Acknowledge DA #1 → check; acknowledge DA #2 → check | After #1 still blocked; after #2 banner "Step 2 of 2…", list icon becomes link, card "Step 1 · Deallocations — All approved" |
| TC-SHDLNK-019 | Step-1 DAs in either order | PMO | Acknowledge shadow DA first, then main DA | Both succeed; no order inside step 1 |
| TC-SHDLNK-020 | Full approval applies swap | TM + PMO | After unlock: TM approves, PMO approves promotion | APPROVED; shadow is main from D+1; main and old shadow row end on D |
| TC-SHDLNK-021 | Close step-1 DA cascades to step 2 | PM/PMO | Close main's DA (OPEN) | Promotion (and new shadow) CLOSED with remark "Closed automatically because prerequisite #DA-x was closed"; close notifications |
| TC-SHDLNK-022 | Close step-1 DA leaves sibling DA (Bug 4) | PM/PMO | After TC-021 check shadow's DA | Suspected: still open/acknowledgeable; confirm intended behaviour |
| TC-SHDLNK-023 | Close promotion leaves new-shadow NA (Bug 3) | PM/PMO | 4-ticket group, close promotion NA | Suspected: new-shadow NA stays open/approvable |
| TC-SHDLNK-024 | Reject step 2 | TM/EM | After unlock, Reject promotion with remark | Back to IN_REVIEW, approvals cleared; DAs unaffected |
| TC-SHDLNK-025 | DA cannot be rejected | TM/PMO (API) | PATCH `/reject` on step-1 DA | 400/409 `_089` "Decrease/de-allocation tickets cannot be rejected" |
| TC-SHDLNK-026 | Withdraw approved DA period with approved step 2 | PMO | Close APPROVED step-1 DA / delete its scheduled change after step 2 approved | 409 `_182` "…a later step of its linked ticket group (#NA-…) is already approved…" |
| TC-SHDLNK-027 | Edit DA date on/after promotion start | PM/PMO | Edit main DA end date to D+1 | 400 `_174` "The promotion and new-shadow start dates must be after both deallocation dates" |
| TC-SHDLNK-028 | Edit promotion start to D | PMO/PM | Edit step-2 start date = D | 400 `_174`; unchanged |
| TC-SHDLNK-029 | Shadow >20 logged hours (Bug 1) | PM | Shadow→main with a shadow who logged >20h | Suspected: toast "Failed to raise the linked tickets" with `_161` ratings message; nothing raised; no way to enter shadow ratings |
| TC-SHDLNK-030 | All-or-nothing on failure | PM | Raise swap where main already has an open UA ticket | Error `_024`; no DA/NA/group created (list unchanged) |
| TC-SHDLNK-031 | Second swap on same main blocked | PM | Main with shadows A and B: swap A, then swap B | Second fails `_024`; nothing raised |
| TC-SHDLNK-032 | Non-owner cannot raise swap | PMO/TM (API) | POST `/allocation-tickets/shadow-swap` on a project not owned | 403 "PROJECT_NOT_MANAGED_BY_CALLER" |
| TC-SHDLNK-033 | API rule checks | PM (API) | Wrong pair / same assignment / start = D / BOTH_RELEASED with promotion / promotion preference ≠ shadow / promotion requestType SHADOW_DEVELOPER | 400 `_183` / `_179` / `_174` / `_176` / `_184` / `_186` respectively |
| TC-SHDLNK-034 | Department-scoped view hides tickets | TM/EM | Open step-2 NA whose DAs are outside TM scope | "Some linked tickets belong to other departments and aren't shown."; unnamed blocked text; no step progress counts |
| TC-SHDLNK-035 | Ungrouped bypass still possible (Bug 5) | PM + PMO | Plain DA on main row + separate NA preferring shadow; approve NA first | Not blocked by group; expect overlap 409 `_098` "already has an active (non-archived) allocation on this project" (old inconsistency stays) |
| TC-SHDLNK-036 | PMO direct allocation ignores group | PMO | While group pending, direct-allocate the shadow/another dev to project | Allowed (no group check); document outcome |
| TC-SHDLNK-037 | Linked Tickets card navigation | PMO | Click a sibling ticket ID in card | Navigates to sibling; current row marked "This ticket" |
| TC-SHDLNK-038 | Copy check | PM | Read picker option 1 description | Flag "no new ticket needed" as wrong (3 tickets + approvals) |
| TC-SHDLNK-039 | Concurrency: close step 1 while approving step 2 | PMO ×2 (API) | Fire close(DA) and approve(NA) in parallel | Only one wins; never an APPROVED promotion on top of a CLOSED DA |
| TC-SHDLNK-040 | Main end date ≤ deallocation date | PM | Main has end date E; pick deallocation date = E | Check whether the swap fails (promotion end < start); record behaviour |
