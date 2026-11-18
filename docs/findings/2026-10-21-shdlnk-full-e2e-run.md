# Shadow swap linked tickets: full end-to-end run, 2026-10-21

Dev (SimERP 6.5.0), Chromium, fresh password logins. All 48 SHDLNK cases were run: TC-SHDLNK-001..040 for SI4-T1464 and TC-SHDLNK-043..050 for SI4-I483. Each case was run in the UI or against the API as the role it names: CSM priya.chopra, PMO bhumi.chauhan, QA TM sudhansu.patel, DATA ENGINEERING TM saumil.chhaya. **Zoho, 21/10 (at the user's request):** filed SI4-I590 (F1) and SI4-I591 (D2), both Medium and assigned to Parshva, and linked them to SI4-T1464. Added re-test comments to SI4-I483, I586 and I587, which all stay Open. Moved SI4-T1464 from To be tested to **In progress**, with a results comment.

**Result: 44 pass, 4 fail.** Two of the failures are known open issues (I483, I586). The other two are D2 (still not filed) and one new finding (F1).

| Case | Result | What happened |
|---|---|---|
| TC-SHDLNK-006 | **Fail** (D2, filed as SI4-I591) | Choosing option 2 and then clicking plain "Yes, Deallocate" sends `SHADOW_TO_MAIN`. Only 3 tickets are raised (G-10), so the new shadow is dropped without any message. The form banner still says "a new shadow developer is requested for them". |
| TC-SHDLNK-015 | **Fail** (new F1, filed as SI4-I590) | Send for Approval on a blocked step-2 NA records the PMO approval (`pmoApprovedAt`) while step 1 is still pending. After that, PMO's `/approve` returns "approval already recorded" instead of `_172`. |
| TC-SHDLNK-043 | **Fail** (SI4-I483, open) | When the new shadow and the promotion are separate tickets, the new shadow is still applied (Suresh shadows Kriti from 08/11), even though the promotion was refused and Kriti had no main allocation. |
| TC-SHDLNK-047 | **Fail** (SI4-I586, open) | In a 4-ticket group, the new-shadow NA can be approved and applied before the promotion. Meera became the shadow of Mansi while Mansi was not yet main. |

Re-checks of fixed issues: SI4-I576 (a shadow with more than 20 h; Mansi has 603.7 h) passes, SI4-I577 (TC-021/022) passes, and SI4-I578 (TC-023) passes. SI4-I587 also passes: withdrawing a pending DA puts the end date back (TC-050).

## New finding

**F1 (Medium suggested): a step-2 ticket gets an approval while it is still blocked.**
- **Steps:** On NA-0405 (G-8), with DA-0132 and DA-0133 still Awaiting, PMO assigned the department, shortlisted Neel, marked him as the final selection, and clicked Send for Approval.
- **Result:** The ticket moved to AWAITING_CONFIRMATION with `approvals.pmoApprovedAt` set at 11:40. That is before either DA was acknowledged.
- **Why it matters:** The group gate covers `/approve`, `/acknowledge` and `/bypass-approval`, but not the auto-approval on the update ("Send for Approval") path. The final approval is still gated (TM `/approve` → 409 `_172`, TC-017), so nothing is applied out of order. But PMO never approves after step 2 unlocks: TM's single approval finalizes the ticket.
- **Expected:** No approval is recorded while the ticket is blocked, or the auto-approval is recorded only once step 2 unlocks.

## Smaller notes (not failures)
- **I579 leftover, still there.** The "Deallocate <main>" form header shows the shadow's department and % (Manish Desai is shown as "DATA ENGINEERING, Fixed · 10%", which are Mansi's values).
- **TC-040.** If the deallocation date is the main's own end date (14/11), the swap fails with "End date must be after start date", because the promotion copies the main's end date. The calendar allows that date, and the message doesn't tell the user to pick an earlier one.
- **TC-034.** A TM who can see only some blockers gets "Complete DA-0137 first", which names just the visible DA. It reads as if only one ticket is left.
- **TC-021.** The DATA ENGINEERING TM, whose department the closed NA-0410 was assigned to, gets no close notification. PMO gets one for each ticket.
- **TC-020.** After G-8, Uday Dave is still "shadow of Ankita Das", whose row ends 31/10. This is known: there is no clean-up for a second shadow.
- **Error codes.** Most business errors return `code: SYS_004` with the right message, not their own code (`_024`, `_089`, `_174`.. `_186`). Only `_172`, `_182` and the success codes show their real code. Non-owner swaps get 403 `AUTH_004` "Access forbidden", not `PROJECT_NOT_MANAGED_BY_CALLER`.
- **BOTH_RELEASED.** Closing one DA in a one-step group also closes the other DA.

## Data on dev (HyperScale)
Pairs created as PMO: Ankita Das as main with Neel Pillai and Uday Dave as shadows, Riddhi Verma (end 14/11) as main with Kriti Desai as shadow, and Mansi Raval as shadow of Manish Desai. Prakash Pillai and Yamini Langalia were first added as shadows of Ekta Mistry. Ekta already had an old open DA-0025 (10/08), which blocked every swap on her, so it served as TC-030's precondition.

| Group / tickets | Case(s) | Final state |
|---|---|---|
| G-8: DA-0132, DA-0133, NA-0405 | 004, 009–020, 024–028, 036, 037, 049 | **Applied**: Neel main FIXED 20% from 01/11; Ankita ends 31/10 |
| G-9: DA-0134/0135, NA-0408/0409 | 005, 022, 023, 029 | All CLOSED |
| G-10: DA-0136/0137, NA-0410 | 006, 021, 034 | All CLOSED |
| G-11: DA-0139/0140 | 007 | CLOSED |
| G-12: DA-0141/0142, NA-0411 | 039, 050 | CLOSED (DA-0142 withdrawn) |
| NA-0412/0413, DA-0143/0144 (ungrouped) | 035, 043–045 | Applied, then the Kriti main and Suresh shadow rows (from 08/11) were cancelled (DA-0150/0151). Riddhi and Kriti end 07/11 |
| G-13: DA-0145/0146, NA-0414/0415 | 046–048 | **Applied**: Manish ends 31/10; Mansi main FIXED 20% from 01/11; Meera Soni shadows Mansi from 01/11 |
| DA-0138 | 008 | Approved: Yamini ends 31/10 |
| Clean-up: DA-0147, DA-0148, DA-0149 | — | Prakash and Uday end 21/10; Tanmay's future row from TC-036 cancelled |

Evidence: `reports/screenshots/2026-10-21/shdlnk-e2e/` (API bodies in `json/`). Results: `reports/results/results-2026-10-21-shdlnk-e2e.json`. Excel: `reports/excel/*-2026-10-21_17-38-SHDLNK-e2e.xlsx`. Report: `reports/html/qa-report-shdlnk-e2e-2026-10-21.html`.
