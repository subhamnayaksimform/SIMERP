# SI4-T1692 — Contractors as Preferred Employees, candidate visibility, Teams TM cards, allocation-ticket edit fixes

- **Task:** SI4-T1692 (Hardik), Zoho status "To be tested". Backend PR #636 + frontend PR #566, both merged to `development` 16/11 14:30.
- **Tested:** 17/11/2026 on dev **6.9.0** (API restarted ~02:00 17/11, after the merge), by API + Playwright UI.
- **Accounts:** PMO vihaan.chatterjee, TM sudhansu.patel (QA), CSM tarun.sharma (AnalytixHub), RM deepak.rao, PM maitri.bose, plain-Employee QA accounts (Riddhi Verma, Yamini Langalia, Yash Sinha, Urvashi Kotak, Punit Patil, Sneha Yadav, Arnav Shetty, Neel Rathod, Deepak Contractor, Iti Trivedi, Swati Malhotra).
- **Evidence:** `reports/screenshots/2026-11-17/t1692/` (screenshots) and `…/scripts/*-results.json`, `teams-trigger-log.json`.

## Result

**No new defects found.** Everything that could be tested on dev works as the task describes. Two parts are **blocked by test data / access**, and there are two minor observations.

| Area | Result |
|---|---|
| 1. Contractors as Preferred Employees | Pass for everything testable. **Contractor-with-no-department checks blocked** (none exist on dev). |
| 2. Candidate visibility until cleared | **Pass** (Interview + Direct, re-initiate, delete, Not Found vs Unauthorized). |
| 3. Teams cards to TM channel | Events triggered, all actions succeed; card code reviewed. **Card delivery/content not verified** — needs someone to look at the Teams channel. |
| 4. Allocation ticket edit fixes | **Pass** (back to Fixed allowed + % restored, Dynamic-today still refused, cleared dates stay cleared). |
| Regression | Pass (TM/PMO full detail, TM/RM/CSM boards, PM rule unchanged, picker without contractors unchanged). |

## 1. Contractors as Preferred Employees

| Check | Result |
|---|---|
| Picker API with `includeContractors=true` and no department works (returns dept-less contractors only — 0 on dev) | Pass |
| QA + `includeContractors` = QA employees + dept-less contractors (94 = 94 + 0) | Pass |
| Contractors who **have** a department (11 in QA) come back with `isContractor: true` and their department; UI shows the department badge, not "Contractor" | Pass |
| Create page: Preferred Employee field is enabled before any department is chosen; list is empty on dev (no dept-less contractors) | Pass |
| Save QA employee + ANDROID employee + contractor (Uday Dave, QA) → detail returns all 3 with `isContractor` | Pass (OPP-0378) |
| Ticket Info shows the saved preferred employees by name | Pass |
| Edit drawer, **without opening the Preferred Employee dropdown**, remove ANDROID → Feni Kotak (ANDROID) dropped, Tanvi Parekh + Uday Dave stay; saved and still there on reopen | Pass |
| A contractor with **no department** shows a "Contractor" badge, survives a department removal, and is offered before any department is chosen | **Blocked** — all 272 contractors on dev have a department, and `PATCH /contractors/:id` cannot clear one. Needs a developer to clear one contractor's department (the task says this). |

## 2. Candidate visibility until cleared (OPP-0374, Direct OPP-0375/0376/0377)

| Check | Result |
|---|---|
| TM shortlists a plain Employee → not on their My Opportunities (API), no notification, detail API 403 `OPP_193`, UI redirects to **/unauthorized** | Pass |
| Approval requested but not yet approved → still nothing, 403 | Pass |
| TM approves (Yamini) / PMO bypasses (Riddhi) → appears on board, detail opens, notification "You've been approved for …" | Pass |
| Cleared candidate sees only their own card and position; no preferred employees, position note, prospect notes (API + UI Ticket Info) | Pass |
| Never-shortlisted Employee opens the real URL → **Not Found** (API 404 `OPP_001`, UI "Opportunity not found"); invalid id → Not Found; malformed id → 400 | Pass |
| Rejected before approval (Arnav) → no notification, not on board or Rejected column | Pass |
| Re-initiate Position A → cleared Riddhi + Yamini notified; pending Urvashi not | Pass |
| Delete a Position with a pending candidate (Punit) → Punit never notified. (Delete is refused while an approved candidate is In Process — existing rule `OPP_025`; per code only awaiting-approval candidates are removed on delete, so nobody is ever notified by a delete.) | Pass |
| Direct: Open and In Review → Employee hears nothing, detail 403, not on board | Pass |
| Direct: reject from In Review → Employee hears nothing | Pass |
| Direct: Awaiting → Employee notified, ticket on their Direct board (`requestType=DIRECT`) and detail opens | Pass |
| Direct: reject from Awaiting → Employee gets "…is now rejected." with **no ticket link** (no `opportunityPublicId` in context) and no reason | Pass |
| TM and PMO still see full detail incl. prospect notes | Pass |

Note: a plain Employee has **no board screen** in the UI (`/pre-sales` → Unauthorized) — by design, the role has `opportunities.read` but not `view_board` (RBAC seed 2026-10-19). "Appears on their board" was verified through the board API (`view=MINE`), plus notification + direct link in the UI.

## 3. Teams notifications to TM channels

Department webhooks on dev exist only for **QA** and **ANDROID**, both pointing to the same Power Automate flow. I cannot see that channel, so delivery and card content were **not verified**. All actions below succeeded (a Teams problem never blocked anything).

Code review of `teams-notification-dispatch.service.ts` (PR #636): one card per Opportunity for create (departments of all Positions, de-duplicated); add/delete Position cards use that Position's departments, including a deleted one; candidate cards go to the **candidate's own department**, falling back to the Positions' departments when the candidate has none; card fields are opportunity, position, candidate, department, round (IST formatter), round result, Direct stage — **no reason, feedback or rating fields exist**.

Events triggered on 17/11/2026 (IST), for whoever checks the channel:

| Time (IST) | Event |
|---|---|
| ~11:10–11:14 | OPP-0374 created (QA, 2 positions → expect **one** QA card); shortlists, approval requested, TM approved, bypasses, reject (Arnav), re-initiate A, release Sneha, Position B deleted |
| 11:14:30–11:15 | Direct OPP-0375/0376 (QA): Open → In Review → Rejected / Awaiting → Rejected |
| 11:16:17 | Direct OPP-0377 created → In Review → Awaiting |
| 11:17:23 | OPP-0378 created (QA + ANDROID → expect one card in **each**) |
| 11:43:18 | Position added on OPP-0374 |
| 11:43:21 | ANDROID employee Rushil Thakor shortlisted on a **QA** position → card should go to the **ANDROID** channel |
| 11:43:24 / 11:43:26 | Approval requested / withdrawn (Rushil) |
| 11:43:30 | Preparation completed (Neel Rathod) |
| 11:43:32 / 11:43:34 | Interview scheduled — round at 20/11 15:30 IST and 23/11 11:00 IST (times on card must be IST) |
| 11:43:38 | Interview cancelled (round 2) |
| 11:43:48 | Direct OPP-0377 cancelled |
| 11:44:42 | Candidate withdrawn (Rushil) |
| 11:44:46 | Round result Cleared — feedback "secret QA feedback should not be on card" must **not** show |
| 11:44:48 | Candidate selected (Neel) |
| 11:44:50 / 11:44:52 | OPP-0378 status → On Hold → Open |

Not testable: contractor-with-no-department fallback (no such contractor), and "Teams failure never blocks" with a broken webhook (would need changing the shared webhook config).

### Re-run with the user's test webhook (17/11, JAVA department)

The user supplied a Power Automate webhook; it was added as a **new** DEPARTMENT config for **JAVA** (QA/ANDROID configs untouched; URL kept out of the repo). Every event in the task was triggered on OPP-0379 (2 JAVA positions), OPP-0380 (JAVA + QA) and Direct OPP-0381 — all 25 actions succeeded. Times and the expected card for each are in `reports/screenshots/2026-11-17/t1692/scripts/teams-java-log.json`. A broken-signature test (webhook URL temporarily broken, then restored) confirmed a Teams failure does not block the action. Card content still has to be confirmed in the channel.

## 4. Allocation ticket edit fixes (AnalytixHub)

| Check | Result |
|---|---|
| UA-0147 (Prakash Rao, live Fixed 35%) requested Dynamic → PMO edits back to Fixed 20% in the UI → saved FIXED 20 | Pass |
| Round trip Fixed 20 → Dynamic (shows 0) → Fixed shows **20**, not 0; nothing left to save | Pass |
| UA-0146 (Jay Kapoor, live **Dynamic**) → Fixed refused: UI "Cannot change to Fixed allocation. Deallocate the employee first."; API 400 "requestedAllocationType cannot be changed from DYNAMIC back to FIXED" | Pass |
| Clear End Date + Effective From in the UI → Save enabled, saved, reopen shows both blank, API returns them empty | Pass (UA-0147) |
| Clear end date via API (`null`) sticks | Pass (UA-0146) |

## Observations (not defects, for the dev's awareness)

- **O-1 (cosmetic):** In the Preferred Employee dropdown, already-selected people whose page has not loaded yet are pinned at the top with **no email and no department badge** (e.g. Tanvi Parekh, Uday Dave). Once you scroll and their page loads they show normally. This matches the code comment ("department's name arrives with the first page") but looks inconsistent. Screenshot `u3-pref-dropdown.png`.
- **O-2 (outside this task):** UA-0145 (Sai Garg, Fixed 10% → Dynamic). Switching back to Fixed in the drawer shows a **blank** % (the ticket never had one) and Save stays disabled with "Conflict — This window overlaps the change marked on the timeline" against UA-0088, an older approved change on Sai's assignment. The backend accepts the same edit (PATCH 200). Only happens on Sai's history; a clean allocation (UA-0147) works. Screenshot `u9-ua145-back-to-fixed.png`.

## Data left on dev (all created 17/11 in this run)

- Interview OPP-0374 (QA; Neel Rathod now **Selected/Won, not allocated**), OPP-0378 (QA, preferred employees).
- Direct OPP-0375 (rejected), OPP-0376 (rejected), OPP-0377 (cancelled).
- Teams run: OPP-0379 (Payal Patel Selected/unallocated), OPP-0380, Direct OPP-0381 (cancelled); **JAVA department Teams webhook config** (`bef890f6-…`) pointing at the user's test flow — remove or deactivate when done.
- Report: 42 cases TC-OPPTY-5013…5054 (`reports/test-cases/cases-2026-11-18-OPPTY-T1692.json`), 32 passed / 10 skipped / 0 failed; QA report https://claude.ai/artifact/YQ14FSxR7d71K63KkKYWGL.
- **Open allocation tickets on real allocations — not acknowledged:** UA-0145 (Sai Garg, Awaiting, now requests Fixed 20%), UA-0146 (Jay Kapoor, Open), UA-0147 (Prakash Rao, Awaiting, Fixed 20%). If anyone presses "Acknowledge & Update Allocation" these allocations change — cancel them when done.
