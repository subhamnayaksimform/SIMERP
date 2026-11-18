# Bug reports — Interview module full end-to-end run, 4 Nov 2026

**Environment:** SimERP DEV, https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1). UI 6.8.1, backend build 452 (includes PR #614). Chromium. Log in at `/dev-login` as PMO vihaan.chatterjee (standard dev password).
**Verified:** both bugs were reproduced on 4 Nov 2026 on a fresh ticket. Numbering continues the earlier interview series (last was BUG-055).
**Scope:** the SI4-T1267 (backend) and SI4-T1446 (frontend) interview module. Full run: `docs/findings/2026-11-04-interview-module-full-e2e.md`.
**Screenshots:** `reports/screenshots/2026-11-04/interview-retest/`
**Zoho:** BUG-056 filed as SI4-I632 (Medium), BUG-057 as SI4-I633 (Low), 4 Nov 2026. Both assigned to Hardik Metaliya and linked to task SI4-T1267 (backend). Screenshots not attached.

## Summary

| ID | Severity | Status | Bug | Area | Suggested owner |
|---|---|---|---|---|---|
| [BUG-056](#bug-056) | **Medium** | Open | A Won seat on a closed position sits in the "No Longer Required" Kanban column instead of Won | Backend (column filter) | Hardik |
| [BUG-057](#bug-057) | Low | Open | The API accepts a Direct ticket for a Prospect client with no project | Backend validation | Hardik |
| Question | — | Needs decision | Close, Re-initiate and single Release treat a Won candidate differently | Backend | Product / QA lead |

**Severity:** Medium means a main flow shows wrong information and a workaround exists. Low is an edge case with no normal-use path.

---

## BUG-056

**A Won seat on a closed position sits in the "No Longer Required" Kanban column instead of Won**

| Field | Details |
|---|---|
| Severity / Status | Medium / Open |
| Account | PMO vihaan.chatterjee |
| Data | OPP-0348 "QA-AUTO E2E won+open 04-11": one position, 2 seats. Seat 1 Neel Menon Won, seat 2 Falgun Thakor shortlisted. The same happens on OPP-0349. |

**Steps to reproduce**
1. Create an Interview opportunity with one position and 2 openings, and shortlist two candidates.
2. Send candidate 1 for approval, approve it as the TM, then mark the candidate Selected (confirm the round skip). The seat is **Won**.
3. On the position, click **No Longer Required** and enter a reason.
4. Open **Opportunity Allocation**, search the ticket and switch to **Kanban**. Scroll to the right-hand columns.

**Expected:** Neel Menon's card stays in the **Won** column (the candidate is still Won and still blocked, and the Won count stays 1). Only the released seat goes to No Longer Required. This is the same rule SI4-I628 applied to Project Allocated seats.
**Actual:** both cards are in **No Longer Required** ("No Longer Required column, 2 cards"). The Won column is empty. `GET /opportunities/openings/stage-counts?search=OPP-0348` returns WON 0 and NO_LONGER_REQUIRED 2, while `GET /opportunities/openings?withArchived=true&search=OPP-0348` shows seat 1 as stage WON, nomination SELECTED, blocked true. The detail page also still lists Neel Menon as Won.
**Cause (likely):** the fix for SI4-I628 (`buildOpeningStatusFilter()`, PR #614) lets only a PROJECT_ALLOCATED opening keep its own column on a closed position. A Won (Selected, not yet allocated) opening is not covered.
**Suggestion:** treat Won like Project Allocated in that filter.
**Screenshots:** `G-closedwon-detail.png`, `G-closedwon-list.png`, `G-closedwon-kanban.png` (the Kanban image shows the left-hand columns only; the counts are in the API output above)

---

## BUG-057

**The API accepts a Direct ticket for a Prospect client with no project**

| Field | Details |
|---|---|
| Severity / Status | Low / Open |
| Account | PMO vihaan.chatterjee |
| Data | OPP-0352 (cancelled after the test) |

**Steps to reproduce**
1. Send `POST /opportunities` with `requestType: "DIRECT"`, `clientType: "PROSPECT"`, no `projectPublicId`, and one position with an employee.
2. Open the ticket on the board.

**Expected:** refused with a validation error. A Direct ticket allocates an employee straight to an existing client's project (the ticket is created for an existing client with a linked project).
**Actual:** 201. The ticket shows on the board as a Direct ticket with project "null" and the stage moves to IN_REVIEW, but it can never be allocated because there is no project.
**Note:** I did not check whether the on-screen form prevents this. A Direct ticket for an existing client with a project, and every other invalid Direct input I tried (two positions, an interview date, no employee), are refused correctly.
**Evidence:** API only (no screenshot).

---

## Question for the team (not a bug)

The description of `POST /opportunities/positions/:id/close` says Selected candidates without an allocation ticket are released. In practice the Won candidate stays. `POST …/reinitiate` does release Won candidates, and releasing one Won candidate on its own is refused (OPP_185). Which behaviour is intended?

## Re-test, 4 Nov 2026 evening (build 453, PR #619)
- **SI4-I632 (BUG-056): pass.** After closing a position with a Won seat, the Won column keeps the card (WON 1, No Longer Required 1) in the API counts and on the Kanban screen. The candidate stays Won and blocked, the other seat is released, and filled never exceeds required. Reopen works, a fully filled position still can't be closed, and the Project Allocated fix (SI4-I628) still holds. Screenshot `R-I632-kanban.png`.
- **SI4-I633 (BUG-057): still reproduces, but the developer says it is by design.** Hardik's comment: a Direct ticket for a Prospect without a project is allowed, a project can be linked later, and allocation is blocked until then. I confirmed the creation and the later link: linking a project turns the client into Existing. I did not reach the "Link the Opportunity to a Project before allocating" message safely. My report said the ticket "can never be allocated", which was wrong.
