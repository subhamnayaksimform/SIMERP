# SI4-I483 re-test: shadow developer tickets approved inconsistently, 2026-10-21

**Issue:** SI4-I483 "Multiple tickets can be approved inconsistently, resulting in shadow developer allocation conflicts and allocating shadow to main is not being approved" (Major, Open, raised 01/09/2026 on 5.3.0).
**Build:** dev, SimERP 6.4.2 at the start of the run and **6.5.0** by the end (frontend SI4-T1446 interview module merged 12:26). Chromium, fresh password logins: CSM priya.chopra, PMO bhumi.chauhan.
**Attachment:** the Zoho attachment is a 57 s screen recording. The `.env` token can't download it (WorkDrive scope), but it is byte-identical to `~/Downloads/2026-09-01 18-27-34.mkv` (18,909,683 bytes).

## Verdict

| Part of I483 | Result |
|---|---|
| "Some conflicting tickets are still allowed to be approved" when the tickets are raised **separately** | **Still reproduces.** Same outcome as the video. |
| Same thing inside the **linked shadow swap** (SI4-T1464) | **Partly fixed.** Step 2 is locked until both step-1 deallocations are approved. Inside step 2 there is no order: the new shadow can be applied before the promotion. |
| "Allocating shadow to main is not being approved" | **Fixed** once the shadow's own deallocation is approved with an earlier end date. The promotion goes through in both paths. |

**Recommendation:** keep I483 open, or close it and raise the remaining gap as a new bug. The remaining gap: a SHADOW_DEVELOPER ticket can be approved and applied while the person it shadows has no main allocation on the project for those dates.

## What the video shows (5.3.0, GridCompute, 01/09)
- PM Darshan Rathod raised separate tickets for Karan Contractor (QA, 45%):
  - DA-0079: Karan's deallocation. Approved.
  - NA-0264: Karan, Fresh Allocation, 45% from 01/09.
  - NA-0265: **Shadow Developer of Karan Contractor** (Prachi Dave, ADMIN), 45% from 01/09.
- PMO bypassed NA-0265 and it was approved and applied.
- PMO then bypassed NA-0264. It failed with "Something went wrong. This employee already has an active (non-archived) allocation on this project" and stayed Awaiting.
- Result: Prachi is a shadow of Karan, but Karan's new main allocation was never approved.

## Setup
PMO direct-allocated **Kunal Menon** (DATA ENGINEERING) as SHADOW of **Bhavesh Bansal** (QA, FIXED 20%, no end) on HyperScale: FIXED 10%, 22/10 → 31/12/2026 (NA-0389). **Prakash Pillai** (QA) was used as the new shadow.

## Path B: separate tickets, as in the video. Reproduces
1. CSM priya.chopra raised two separate NEW_ALLOCATION tickets in one request (`POST /allocation-tickets/new-allocation`, 201). Nothing linked them, and nothing checked one against the other:
   - **NA-0390:** Kunal, Fresh, FIXED 20% from 01/11 (the promotion).
   - **NA-0391:** SHADOW_DEVELOPER, shadow for Kunal, FIXED 20% from 01/11.
2. PMO set the department and employee on each (`PATCH`, 200, `warnings: []`). There was no warning on either ticket.
3. PMO bypassed **NA-0391** in the UI. The toast said "The allocation has been applied". The ticket is **APPROVED**, and Prakash is now a shadow of Kunal from 01/11 (`b2-bypass-new-shadow-*.png`).
4. PMO bypassed **NA-0390** in the UI. It was refused with **409** "This employee already has an active (non-archived) allocation on this project". Two toasts appeared:
   - "Action Required: NA-0390 … could not be applied after approval … The ticket has reverted to Awaiting Confirmation"
   - "Something went wrong. Please try again."

   The ticket stayed **AWAITING_CONFIRMATION** (`b3-bypass-promotion-*.png`). This is the same as the video: one conflicting ticket was blocked and the other was applied.
5. Follow-up: CSM raised **DA-0125** to end Kunal's shadow row on 31/10, and PMO acknowledged it. The PMO retry of NA-0390 then **succeeded** (200, APPROVED). So the promotion itself is no longer stuck once the shadow's row ends first. The date-aware overlap check from SI4-T1171 (26/08) is what allows it.

**Why (code, `origin/development`):**
- Tickets raised separately have no group, so the step gate is skipped (`allocation-ticket-group.util.ts:164-167`).
- When a SHADOW_DEVELOPER ticket is applied, only the new shadow's own overlap and capacity are checked (`allocation-apply.service.ts:404-433`). The row is then written with `shadowDeveloperId = ticket.shadowForId` (`:1485`).
- Nothing checks that the shadowFor person has a main allocation covering the start date.
- At creation, `resolveShadowForId` (`allocation-ticket-validator.service.ts:274-291`) only requires *some* non-deleted assignment on the project.

## Path A: linked shadow swap (T1464). Order rule holds, but step 2 has no order
1. CSM raised a `SHADOW_TO_MAIN_NEW_SHADOW` swap: **G-7** = DA-0128 (Bhavesh), DA-0129 (Kunal), NA-0393 (promotion), NA-0394 (new shadow). Main and shadow DA date 31/10, follow-ups from 01/11.
   - The swap was sent through the API with the same body the UI sent this morning.
   - On 6.5.0, the CSM's HyperScale "Active Allocations" table no longer lists Kunal's row, which starts 22/10, so the swap could not be started from the UI.
2. Before step 1, PMO bypassed NA-0394 and NA-0393 (with department and employee in the body). **Both were refused with 409 `ALLOCATION_TICKET_172`** "Complete the step 1 tickets (#DA-0128, #DA-0129) before actioning this ticket". Both stayed OPEN with no department and no selection, so the rollback works.
3. PMO acknowledged DA-0128 and DA-0129. Both are APPROVED.
4. PMO bypassed the **new shadow NA-0394 first**, in the UI. It was **applied** while the promotion NA-0393 was still open. There was no warning, and the group card raised no objection (`a3-bypass-new-shadow-first-*.png`).
5. PMO bypassed the promotion **NA-0393**. It was applied (`a4-bypass-promotion-*.png`).
6. End state was correct:
   - Bhavesh ends 31/10.
   - Kunal is main, FIXED 20% from 01/11.
   - Prakash is shadow of Kunal, FIXED 20% from 01/11.
   - The G-7 card shows both steps "All approved" (`a5-g7-final-card.png`).

**Remaining risk (from code, not run live):** the promotion and the new shadow are both step 2 (`shadow-swap.service.ts:326`). So the new shadow can be applied first. If the promotion is then closed, or its apply fails, the new shadow stays applied: the cascade only closes tickets that are not yet terminal (`allocation-ticket-group.util.ts:186-198`). That is the I483 end state inside the linked flow. Suggested fix, either of:
- Make the new shadow step 3, or make it depend on the promotion.
- At apply time, check that the shadowFor person has a main allocation covering the start date.

## Other observations
- **Withdrawing a pending deallocation doesn't put the end date back (Low/Medium, new).**
  - DA-0125 had set Kunal's shadow row to end 31/10. `DELETE /allocation-tickets/scheduled-changes/{id}` returned 200 and marked the ASSIGNMENT_DEALLOCATE row SUPERSEDED.
  - The assignment still shows **end 31/10** (it was 31/12 before). The endpoint's own description says the live assignment is written back.
  - Afterwards `cancel-direct-allocation` on that row returned 409 "This allocation already has a de-allocation scheduled", even though the only scheduled deallocation had been withdrawn.
- **Good guard:** after G-7's step 2 was approved, withdrawing either step-1 deallocation is refused with 409 `ALLOCATION_TICKET_182` ("a later step of its linked ticket group (#NA-0393, #NA-0394) is already approved and depends on it").
- **6.5.0:** the CSM project table hides allocations that start in the future, so a shadow whose row starts tomorrow can't be swapped from the UI until that day. This may be intended, but it's worth confirming.

## Data created on dev
| Ticket | What | Final state |
|---|---|---|
| NA-0389 | Direct: Kunal shadow of Bhavesh, `ef00c89f…`, 22/10 → 31/12 | Row now **ends 31/10** (see below) |
| NA-0390, NA-0391 | Path B separate promotion + new shadow | APPROVED. Rows cancelled by DA-0127 / DA-0126 |
| DA-0125 | Path B: end Kunal's shadow row on 31/10 | APPROVED. Scheduled change withdrawn, but the end date stayed 31/10 |
| DA-0126, DA-0127 | Cleanup: cancel Prakash's and Kunal's upcoming rows (Path B) | APPROVED |
| G-7: DA-0128, DA-0129, NA-0393, NA-0394 | Path A linked swap | All APPROVED |
| DA-0130, DA-0131 | Cleanup: cancel Prakash's and Kunal's upcoming rows (Path A) | APPROVED |

**Still to restore:** **Bhavesh Bansal now ends on 31/10** (was no end date) and **Kunal has a shadow row 22/10 → 31/10** on HyperScale. Both deallocations are locked by `_182`. Restoring Bhavesh needs one more direct allocation from 01/11 (or a PMO edit). Kunal's row will end on its own on 31/10.

Evidence: `reports/screenshots/2026-10-21/i483/` (screenshots and `json/` API bodies). Video frames came from the local copy of the attachment.

## Filed in Zoho (21/10)
- **SI4-I586** (High, Parshva): Shadow swap: the new shadow can be approved before the promotion, leaving a shadow attached to someone who is not main. Covers TC-SHDLNK-047.
- **SI4-I587** (Medium, Hardik): Withdrawing a pending deallocation does not restore the assignment's end date. Covers TC-SHDLNK-050.
- **SI4-I483:** re-test comment added (still reproduces via separate tickets; TC-SHDLNK-043). Left Open.
