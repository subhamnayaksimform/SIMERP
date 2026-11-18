# Interview flow (Pre-sales Opportunities) — end-to-end test, 27 Oct 2026

**Feature:** Opportunity Allocation → Interview tickets (`/pre-sales`) — backend SI4-T1267, frontend SI4-T1446
**Environment:** SimERP DEV 6.5.0 (`simerp-dev.simform.solutions`), `development` as of 26/10 14:53 (includes the 26/10 QA-fix merges, backend PR #578 and frontend PR #526). Chromium, logins through `/dev-login`.
**New since the 26/10 re-test:** the *Did Interview Happen?* stage, the nightly lapsed-interview job and the removal of *Interview Required* (SI4-T1267, 23/10). The 26/10 re-test barely covered these.
**Earlier rounds:** [2026-10-22-presales-opportunities-e2e.md](2026-10-22-presales-opportunities-e2e.md) (21–22/10 run + 26/10 re-test).

## Retest — 27 Oct evening

Full retest on the same build with fresh JAVA data: every flow passes again (main path 22/22, other flows 29/29, demo coverage 54/55, roles 11/11, API 390 + 21 classified of 411); all open bugs still reproduce; 3 new Low bugs (N-10 … N-12 / BUG-046 … BUG-048). Cases: [test-cases-2026-10-27-oppty-interview-retest.md](../test-cases/test-cases-2026-10-27-oppty-interview-retest.md). Report: https://claude.ai/artifact/1YoxGrEcUawxfV1tGqJwpm

## Result

| | Checks | Passed | Failed | Other |
|---|---|---|---|---|
| UI journeys (10 journeys, 8 roles) | 85 | 75 | 10 | — |
| API regression (same suite as 21/10 and 26/10) | 411 | 375 | 0 new | 36 already classified on 26/10 (not built / as designed / pending decision / won't fix) |
| **Total** | **496** | **450** | **10** | 36 |

Test cases: [docs/test-cases/test-cases-2026-10-27-oppty-interview-e2e.md](../test-cases/test-cases-2026-10-27-oppty-interview-e2e.md) (`TC-OPPTY-701…785` UI, `TC-OPPTY-1001…1411` API). Source JSON: `reports/test-cases/cases-2026-10-27-OPPTY-interview-e2e.json`. Screenshots: `reports/screenshots/2026-10-27/interview-e2e/`.

**API regression:** no regressions against 26/10. The allocation checks that 26/10 skipped (the NOALLOC guard) were run for real this time, and all pass: Direct AWAITING → APPROVED allocates, the Direct tab lists the ticket, APPROVED is terminal, allocation without a project is refused, and the capacity error passes through. Two failing rows were test artefacts and were corrected: ALC-002 searched a hard-coded employee, and ALC-003 expected the stage from before 23/10.

## Journeys covered

| Journey | Roles | Result |
|---|---|---|
| J1 Happy path in the UI: create (Existing Client, 2 openings, 2 rounds) → shortlist → send for TM approval / bypass with reason → TM approves → prep material + checklist → date rounds → Mark Cleared → Waiting for Feedback → Mark Won → Allocate (NA-0450) | PMO, TM (QA), PM, Employee | 28 / 32 |
| J2 *Did the interview happen?*: back-dated round, *Didn't happen* → reschedule, *Completed*, *Skip round*, Kanban column, lapsed sweep | PMO | 7 / 8 |
| J3 Reject (by Client, by TM), remove shortlisted (reason), withdraw approval request, extra picks beyond the openings, re-initiate | PMO, TM (QA) | 7 / 7 |
| J4 Ticket outcome: On Hold, Client Lost, No Longer Required, re-open, board tiles | PMO | 6 / 6 |
| J5 CSM raises an Existing-client Interview ticket on their own project and edits it | CSM | 5 / 5 |
| J6 Role visibility: EM, RM, Admin, TM (JAVA), candidate's own view | EM, RM, Admin, TM, Employee | 6 / 7 |
| J7 Rounds: add, keyboard reorder, delete, skip, Mark Won with pending rounds → Link Project on a Prospect → Allocate → unlink blocked | PMO | 9 / 9 |
| J8 Board guard rails: move into *Did Interview Happen?*, back to Being Prepared, forward without a date, skip ahead | PMO | 4 / 4 |
| J9 Prospect ticket raised by the second PMO, second department added | PMO (2nd), TM (JAVA) | 2 / 3 |
| J10 Notifications along the whole flow (12 accounts) | all | 1 / 4 |

**Works well:** every main step of the interview flow works end to end in the UI. The 26/10 fixes hold:
- A bypass needs a reason, and so does removing a shortlisted candidate.
- Moving a card back to Being Prepared asks first before it clears the date.
- The project cannot be unlinked after an allocation.
- The CSM who raised a ticket can edit it.
- The assigned PM and CSM get the "assigned to you" notification.
- A candidate does not see competing candidates or round feedback.

The new *Did the interview happen?* prompt works: *Completed* moves the card to Waiting for Feedback. *Didn't happen* lets you pick a new date (past days are blocked) or skip the round. You cannot drag a card into the stage by hand.

## New findings

| ID | Severity | Finding | Test cases |
|---|---|---|---|
| N-01 | ⚪ Ignored (27/10: answered by hand) | The nightly "lapsed interview" job does not run on dev. Cards whose interview date has passed stay in *Interview Scheduled* | TC-OPPTY-737 |
| N-02 | 🟠 Medium | The *Interview scheduled* notification prints the time in raw GMT, and a whole-day date shows as the previous day | TC-OPPTY-783 |
| N-03 | 🟠 Medium | The allocation ticket created from an interview (NA-0450) cannot be found in Requests Tracking, and the Interview Allocation row shows CSM and Employee as "—" | TC-OPPTY-729, 730 |
| N-04 | 🟠 Medium (needs decision) | A TM can shortlist employees from other departments onto their own department's position | TC-OPPTY-763, 781 |
| N-05 | 🟡 Low | The TM is told an interview allocation was a "Direct Allocation … bypassing the ticket workflow" | TC-OPPTY-784 |
| N-06 | 🟡 Low | Prep material typed on the create form is silently dropped unless *Add Link* is clicked | TC-OPPTY-704 |
| N-07 | 🟡 Low | Empty values show as bare dashes in the candidate dialog and in Requests Tracking | TC-OPPTY-717 |
| N-08 | 🟡 Low | A 200-character client name (the allowed maximum) stretches the Kanban *All Clients* dropdown across the whole screen | demo-readiness D2-07 |
| N-10 | 🟡 Low | Untitled rounds show "Round 1:" with a dangling colon (BUG-046, found in the evening retest) | RT-BUG-046 |
| N-11 | 🟡 Low (decision) | Rejected candidates can be shortlisted again although the ticket page says they are greyed out (BUG-047) | NEW-14 |
| N-12 | 🟡 Low | Candidate allocation message: "You've Been allocated", raw date, direct-allocation event (BUG-048) | RT-BUG-048 |
| N-09 | 🟡 Low (demo risk) | *What's New & History* is empty on dev: `GET /releases` returns `[]` for every role (27/10, after SI4-T1548 merged 26/10) | demo-readiness D5-04 |

### N-01 — The nightly "lapsed interview" job does not run on dev (IGNORED)

**27 Oct:** set aside. The *Did Interview Happen?* step will be answered by hand later, so this is not reported to developers.

- **What happens:** OPP-0066 (Ankita Das, Round 1 dated 20/10, unanswered) and OPP-0047 (Round 1 dated 19/10) were still in *Interview Scheduled* on 27/10 at 11:10. Four nightly runs (00:05 IST) have passed since the job was merged on 23/10, and `stage-counts` shows `DID_INTERVIEW_HAPPEN: 0`.
- **Why:** the job only runs when `feature.cron.opportunities.lapsedInterview.enabled` is set. A missing value counts as off (`lapsed-interview-stage.job.ts`).
- **Proof that the rest works:** editing the interviewer name on OPP-0066 re-derived the stage on save, and the card moved to *Did Interview Happen?* straight away.
- **Impact:** without any round edit, the board never asks "did it happen?" for interviews in the past. The new stage only appears by accident.
- **Ask:** switch the flag on in dev (and confirm it for staging and prod), then re-check after one night.

### N-02 — The *Interview scheduled* notification shows raw GMT
- **What happens:** the notification body says "…scheduled for **Tue, 27 Oct 2026 05:30:00 GMT**" for an 11:00 IST interview. A round dated as a whole day is stored at IST midnight. So Kriti Desai's rounds on **27/10** read "**Mon, 26 Oct 2026 18:30:00 GMT**", which is the wrong day for her.
- **Expected:** the date and time in IST (or the viewer's time zone), e.g. "Tue 27 Oct 2026, 11:00 AM". Show no time at all when only a day was picked.

### N-03 — The interview's allocation ticket is invisible in Requests Tracking
- **What happens:** Won → Allocate on OPP-0156 created **NA-0450** (NEW_ALLOCATION, APPROVED, `isInterviewRequired: true`). As PMO, searching "NA-0450" or "Kriti" finds nothing on either Requests Tracking tab:
  - The *Direct Allocation* tab sends `allocationMode=DIRECT`, which leaves out interview tickets.
  - The *Interview Allocation* tab leaves out any ticket linked to a nomination (`nomination: null`) and shows only the OPP-0156 row.
  - `GET /allocation-tickets?search=NA-0450` does return it.
- **And:** the OPP-0156 row shows **CSM "—"** and **Employee "—"**, although Tarun Sharma is assigned and Kriti Desai is allocated. The `interview-requests` response has no CSM or employee fields.
- **Note:** the 22/10 run saw these tickets in Requests Tracking. The tab split / list rules changed that.
- **Ask:** make NA tickets from interviews findable (e.g. include them in the Interview tab search, or link them from the OPP row), and fill in the CSM and allocated employees on the row.

### N-04 — A TM can shortlist other departments' employees (needs decision)
- **What happens:** mehul.pandya (JAVA TM) shortlisted **Vandana Mishra (QA)** onto the JAVA-only position on OPP-0214 → 201. He also shortlisted Diya Nair (QA) onto the QA+JAVA position on OPP-0195 → 201. The TM's candidate list (`/opportunities/candidates`) returns all 3,649 employees in every department, the same as PMO.
- **What is enforced:** the position scope. A QA TM on the JAVA-only position gets 404 OPP_020.
- **Question for product:** should a TM shortlist only employees of their own department(s)?

### N-05 — Misleading allocation notification to the TM
- After PMO allocated the Won candidate on OPP-0156, the QA TM got "Direct Allocation: AnalytixHub — Bhumi Chauhan **directly allocated Kriti Desai** to AnalytixHub, **bypassing the ticket workflow**." The allocation came through the interview ticket (NA-0450), so this wording is wrong.

### N-06 — Prep material on the create form is dropped silently
- Typing a title and URL in the Preparation Material row and then clicking *Create Opportunity* without *Add Link* saves the position with `prepMaterials: []`. By design the row is only a draft, but nothing warns the user.
- **Ask:** add the filled draft row on submit, or block submit with "Click Add Link to keep this material".

### N-07 — Bare dashes for empty values
- Candidate dialog → Opportunity Details: "Project Description -", "End Date -". Interview Rounds (read-only): "Interviewer Name -". Requests Tracking → Interview Allocation: CSM "—", Employee "—". Our rule is a readable word placeholder ("Not provided", "Not assigned").

## Known bugs seen again (already reported; not re-raised)

- **BUG-023** (needs clarification): candidate notifications are still in the third person and include PMO instructions. For example, to Kriti: "Kriti Desai was selected … — proceed to Project Association". To Uday: "Uday Dave was rejected … — the slot is open again".
- **BUG-036** (open): the PM's Interview Allocation tab still lists OPP-0150 (his project, not assigned to him).
- **BUG-035** (open): the board's Ticket ID column still truncates ("OPP-015…").

## Observations (no ticket suggested)

- The *Did it happen?* prompt already shows on the interview day itself, before the day is over. The card stays in *Interview Scheduled* until the next day. This is fine if intended.
- *Not Cleared* only records the outcome. The card moves on to the next round and PMO must reject from the board's *Change status* menu, because the ticket page row has no Reject action for in-process candidates. This matches TC-OPPM-102, but it is easy to miss.
- Re-initiate accepts an empty reason (the field is optional).
- Unlink / Change Project stay clickable after an allocation. The server refuses with a clear message, but the buttons could be disabled.
- The CSM's *Edit Details* drawer stayed open after a successful save.
- Linking a project does not fill in Client Name. Client Name can differ from the linked project (e.g. "QA-AUTO Client" linked to AnalytixHub).
- The RM account (deepak.rao) sees an empty board ("All Opportunities 00").
- Once, right after login, the JAVA TM saw *Access Denied* on `/pre-sales`. A re-run on its own opened the board normally, so this is not reproducible.

## Test data left on dev

All titles start with `QA-AUTO`:
- **UI tickets:** OPP-0156 … OPP-0160 and OPP-0195.
- **API regression tickets:** about 40 more (OPP-0161 … OPP-0214).
- **Real allocations created (as agreed):**
  - NA-0450: Kriti Desai 50% on AnalytixHub from 03/11/2026 (OPP-0156)
  - Nimisha Kumar 50% on AnalytixHub (OPP-0157)
  - Neha Mukherjee 40% on AnalytixHub (API ALC run)
  - Direct allocation NA-0453 (API DIR-026) plus DIR-052
- **Other data:** OPP-0066 is now in *Did Interview Happen?*. OPP-0047 Round 1 was skipped and the card is in Waiting for Feedback. OPP-0123 was moved to Won by the guard-rail test.
