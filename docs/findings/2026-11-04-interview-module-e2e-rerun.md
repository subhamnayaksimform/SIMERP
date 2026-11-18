# Interview module: full end-to-end re-run, 4 Nov 2026 (evening)

**Environment:** SimERP DEV, build 453 / release 6.8.2 (includes PR #619). PMO vihaan.chatterjee, TM mehul.pandya, ceo for Admin. Fresh tickets only; earlier test cases were not reused.
**Result:** 124 checks, no new defects. Every check passed except three that I explain below, and none of the three is a defect.
**Evidence:** `reports/screenshots/2026-11-04/interview-retest/scripts/run2/` (`g2r`, `g3r`, `g4r`, `h1r`, `r1` result files, `run2.log`).

| Area | Checks | Result |
|---|---|---|
| Approval, TM approval, rounds, stage rules, select, close/reopen, reinitiate, ticket status | 38 | All pass |
| Positions, ticket edit, prep materials, board filters/search/limits, endpoints, picker | 49 | All pass. The Won seat on a closed position now stays in the Won column (SI4-I632 fixed); prep material edit/delete work |
| Direct tickets | 15 | All pass (a Prospect Direct ticket without a project is allowed by design, SI4-I633) |
| SI4-I632 / I633 re-test | 15 | 13 pass; 2 expectations of mine were wrong (see below) |
| Earlier fixes I625 to I631 | 7 + 1 | All pass |
| Total | 124 | |

**The three that did not pass first time**
- Two of the I633 checks expected a Direct ticket without a project to be refused. The developer says that is by design (project is optional at creation and can be linked later), so these are not defects.
- The I625 check read Hardik Desai's row, but he has no active opportunities any more, because my earlier cleanup closed his tickets. Re-checked with Siddharth Iyer (7 opportunities): the row shows "OPP-0046 Dynamic +6" at 1280, 1600 and 1900 px. Pass.

**Cleanup:** only tickets created in this run (OPP-0362 and later) were closed or cancelled.
