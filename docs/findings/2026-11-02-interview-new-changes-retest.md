# Interview module: re-test of the new changes, 2 Nov 2026

**Environment:** SimERP DEV. Backend build 449 (6.8.0, deployed around 15:20 IST after #611 and #613; the earlier build 448 failed its unit tests). The UI shows 6.7.0.
**Method:** API checks for the logic, plus Chromium screen checks for the visual items. PMO account: vihaan.chatterjee. Role checks used kashyap.patel, tarun.sharma, gaurav.panchal, maitri.bose, deepak.rao, kunal.jadeja, sudhansu.patel, mehul.pandya, bhumi.chauhan and ceo.
**Screenshots:** `reports/screenshots/2026-11-02/interview-retest/`

## Bugs found

| # | Area | Problem | Evidence |
|---|---|---|---|
| R-01 | Employee list › Active Opportunities | Anyone with **2 or more** opportunities shows only "+N" and no pill. The column is a fixed 180 px (about 155 px usable), a pill is about 128 px, and the overflow rule reserves 36 px for "+N" (128 + 6 + 36 > 155). Resizing the window or the side panel changes nothing, because the column width stays fixed. | x1-employees-hardik.png ("+9"), David Lais 3 opportunities → "+3" |
| R-02 | Board › Kanban, closed position | The Project Allocated card on a closed position (OPP-0334 #1, Ira Chopra) sits in the **No Longer Required** column, and the Project Allocated column is empty. Its label and outline are correct. | S6-OPP-0334-No-Longer-Required-column.png |
| R-03 | Opportunity detail | Released candidates (one-by-one release or position close) vanish from the detail page. Only Rejected candidates are listed under "Rejected & previously considered". "Released" shows only on the board and in profile history. | x9-A-detail.png (Java Lead: Smit, Uday not shown) |
| R-04 | Permissions | ADMIN (ceo) gets 403 on Release, Close and Reopen. The ADMIN role on dev has only `read` and `view_board` for opportunities, so it can't edit, shortlist or create either. Needs a decision: role config or expected? | perm-matrix |

Minor items (not chased, per user): Release Save isn't greyed out when empty, but the click is blocked with "Reason is required."; "Upcoming" employees in the project panel show "0d ago"; after a partly filled position is closed, the stats can read filled 1 / required 0.

## Results by section

| # | Section | Result |
|---|---|---|
| 1 | Active Opportunities column | Interview pill is violet, Direct blue, unconfirmed Direct amber/dashed. Dash when none. Won, On Hold, Lost and No Longer Required hide pills; unconfirmed Direct on Won/On Hold hidden. "+N" list shows all of them. Pill opens its ticket. 0→1 after refresh shows the pill (fix works). **Fail: R-01** (only "+N" for 2+; resize has no effect). |
| 2 | Employee details header | Pass. "Active opportunities" row and amber "Unconfirmed allocations" row; unconfirmed shows only once; scope per role correct (TM/EM their dept, RM can't open). Revoking permission while logged in was **not run** (needs a role change on dev). |
| 3 | Project side panel filter | Pass. AnalytixHub All 48 / Active 26 / Upcoming 18 / Inactive 4, the same as the API, and Upcoming matches start dates. Empty state not checked. |
| 4 | Client rejection warning | Pass. Same client (case and spaces ignored) warns "Rejected before by … You can still add them"; other client shows no warning; rejected twice shows the latest. Note: a PMO/TM rejection also triggers it (not only CLIENT). |
| 5 | Release per candidate | Pass: reason required (empty, spaces, over 500 characters refused), seat back to Pending to Shortlist, free seat +1, re-shortlist works, profile history moves to Past, pills/alerts drop it, Won can't be released (409 OPP_185), Rounds tab shows "No interview rounds were held", refused when not Open (409 OPP_013). **R-03** on the detail page. |
| 6 | Close / Reopen position | Pass: reason required, live candidates released, banner with date/by/reason, shortlist blocked (OPP_187), partial close keeps Won and Project Allocated seats, red outline in list and Kanban, Reopen works. Two-tab concurrency: Release, Close and Reopen each show "This action is not allowed while the Opportunity is not open". **R-02.** |
| 7 | Header stats | Pass. Whole-opportunity counts, the same on every card, update after shortlist, reject, release and close (closed positions leave "required", by design). |
| 8 | Direct allocation status | Pass. Neither option preselected; Create blocked with "Select whether the allocation is confirmed."; pills reflect the status. The prefill rule is only checked in the code. |
| 9 | Over-allocation warning | Pass. Ticket shortlist hover: "Would take Ankita Dave to 110% allocation (60% + 50%). Already allocated on JourneyX (60% (5 hrs/day))." (throwaway ticket NA-0475, closed afterwards) |
| 10 | Interview Rounds tab | Pass. No rounds plus planned: "No rounds scheduled yet. Press + to create the 2 planned rounds." with the list; Released shows the ended message. Rejected wasn't opened (no screen path found). |
| 11 | Preparation checklist | Pass. All 275 open interview tickets have OBS & System check and none has Resume; new (OPP-0343) and old (OPP-0333) both show it on screen. |
| 12 | Small UI items | Breadcrumb shows the ticket number (pass). The rest were skipped (minor). |
| 13 | Regression | What's New lists 6.6.0 Certifications and 6.7.0 as released. The 6.8.0 planned entry wasn't checked. No 404s on any opportunity action in the UI runs. Other items not run. |
| 14 | Permissions | Release/Close/Reopen: PMO allowed; TM, EM, RM, PM, CSM and Employee get 403. **R-04** for Admin. Employee sees no pills for others (403 on the employee list). |

## Bug re-check (evening, same build 449)
R-01 still fails (Hardik Desai shows only "+6"). R-02 still fails (the No Longer Required column has 2 cards and the Project Allocated column 0). R-03 still fails (released candidates aren't on the detail page). R-04 still fails (ceo gets 403 on close).

## Edge cases (realistic user scenarios), 17 run on OPP-0344
13 pass, 3 new problems:
- **E-11:** an opportunity whose every position is No Longer Required can still be marked **Won** (0 filled, nothing won). No block or warning.
- **E-15:** a **PMO/TM** rejection triggers the same "Rejected before by <client>" warning, which tells the user the client rejected the person when the client didn't.
- **E-17:** after a position with a Won/allocated seat is closed, the header reads filled 1 / required 0 (OPP-0334).

Notes, not bugs: the headcount of a closed position can still be edited (it stays closed). Deleting a closed position also removes the released employees' entries from their profile history.
Passing edge cases: release while waiting for TM approval (the stale approve is refused), re-shortlist a released person, double-click Release (one success), a 500-character reason, an HTML/emoji reason stored as text, Re-initiate refused on a closed position, re-shortlist after Reopen, TM approve after close refused, Close and Release racing, Release/Close refused on Direct, the rejection warning kept after the rejecting ticket closes, the warning following a client rename.

## Data left on dev (all QA-AUTO)
Also OPP-0344 "QA-AUTO edge cases 02-11" (positions closed/deleted during the tests). OPP-0336 was closed as No Longer Required, and OPP-0344's client was renamed to "QA-AUTO Rejection Client".

OPP-0335 … OPP-0343 (prospects plus two Direct tickets on AnalytixHub, OPP-0338 open and OPP-0339 approved-unconfirmed, **no real allocation**). OPP-0334's position was raised to 2 seats and closed (Ira Chopra is still Project Allocated). NA-0475 was created and closed. Hardik Desai is shortlisted on 9 QA-AUTO tickets.
