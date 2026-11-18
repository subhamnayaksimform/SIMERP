# Interview module: full re-test and final check, 4 Nov 2026

**Environment:** SimERP DEV, UI 6.8.1, backend build 452 (includes PR #614) and frontend PR #553. Chromium. PMO vihaan.chatterjee; role checks with ceo, bhumi.chauhan, tarun.sharma, kunal.jadeja, sudhansu.patel, kashyap.patel, hardik.trivedi.
**Method:** API checks for the logic, plus screen checks of the board, Kanban, detail page, shortlist picker and employee list. Fresh throwaway ticket **OPP-0345** (2 positions, 4 seats), plus the earlier OPP-0334/0335/0344.
**Result:** no new bugs found. All seven fixed bugs (SI4-I625 to I631) still pass and are closed in Zoho.
**Evidence:** `reports/screenshots/2026-11-04/interview-retest/` (screenshots F-*.png, `scripts/`, `json/`).

| Area | Result |
|---|---|
| Create ticket | Pass. Empty or space-only title, no positions, count 0 or 9999, bad website, end date before start, percentage 0 or 150, no department: all refused (400). |
| Shortlist | Pass. Same person twice refused (OPP_028). Someone rejected for a position can't be shortlisted on it again (OPP_183). A released person can be shortlisted again. Extra picks beyond the empty seats get a new seat each (the picker says so). |
| Reject | Pass. Reason required. Client and PMO rejections recorded with their role and shown as "Rejected by Client" / "Rejected by PMO". |
| Release | Pass. Empty, space-only and 501-character reasons refused. HTML and emoji reasons accepted. A second release of the same person returns 404. Released people show with a "Released" badge on the detail page. |
| Close and reopen | Pass. Reason required. Shortlisting on a closed position refused (OPP_187). Closing twice (OPP_188) and reopening twice (OPP_189) refused. Close releases live candidates. Reopen returns the seats to Pending to Shortlist. Filled never exceeded required at any step. |
| Ticket status | Pass. Won on a ticket with nothing filled is allowed, with the new warning on screen. Shortlist, close and release are refused on a Won ticket (OPP_013). Going to No Longer Required needs a confirmation (OPP_015). |
| Permissions | Pass. Release and Close: ceo (Admin) and PMO allowed; CSM, EM, TM, Employee and the ex-PM account get 403. Create: ceo, PMO and CSM allowed; the rest get 403. Detail page: 404 for roles that don't own the ticket. |
| Screens | Pass. No errors in the list, Kanban, detail or picker. Counts on the Kanban match the board. |
| Employee list | Pass. Pills as fixed (I625). |

**Not covered this round:** the TM approval step and a candidate going all the way to Won and Project Allocated (my approval request was refused on a payload mistake, so I used OPP-0334 and OPP-0335 for those, which already have Won and Allocated seats); interview rounds (refused on my test data, OPP_054); Direct tickets; the over-allocation hover; the preparation checklist. These passed on 2 Nov and no related change shipped since.

**Observations, not bugs:**
- The detail page shows a bare "-" in the Round column for Rejected and Released rows. The project convention is a readable word. This was already like that before the fixes and isn't new, so I haven't filed it. Say if you want it filed.
- What's New has no interview entry yet.
- Extra seats created by over-shortlisting stay on the position after the candidates are released or rejected (OPP-0345 shows 6 pending seats for 3 required). The picker states this, so it looks intended.

**Data left on dev (all QA-AUTO):** OPP-0345 "QA-AUTO full module retest 04-11" set to No Longer Required (QA-AUTO Full Retest Client; Mehul Pandya, Karan Modi, Gunjan Rawat, Varsha Limbachiya, Sachin Mistry, Kabir Reddy, Kashyap Rao and Yatharth Malhotra were shortlisted, rejected or released on it; nobody is allocated). OPP-0344 is Open again (Dev A open, Dev B closed).
