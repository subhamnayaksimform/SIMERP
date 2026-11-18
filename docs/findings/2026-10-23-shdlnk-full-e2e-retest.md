# Shadow swap linked tickets (SI4-T1464): full end-to-end re-test, 2026-10-23

Dev (What's New still shows 6.5.0; frontend redeployed 23/10 08:38 GMT with Parshva's 22/10 fixes for SI4-I586, I590, I591), Chromium, fresh password logins. All 48 SHDLNK cases were run again: TC-SHDLNK-001..040 for SI4-T1464 and TC-SHDLNK-043..050 for SI4-I483. Roles: CSM priya.chopra, PMO bhumi.chauhan, QA TM sudhansu.patel, DATA ENGINEERING TM saumil.chhaya. Zoho was not changed.

**Result: 47 pass, 1 fail.** The 21/10 run was 44 pass, 4 fail. Three of those failures are now fixed (006 → SI4-I591, 015 → SI4-I590, 047 → SI4-I586). The one left is TC-SHDLNK-043 (SI4-I483, still open): it uses separate tickets, not a linked group, so the I586 fix does not cover it.

| Case | 21/10 | 23/10 | Note |
|---|---|---|---|
| TC-SHDLNK-006 | Fail (SI4-I591) | **Pass** | Option 2 now offers only "Yes, Deallocate & Request New Allocation"; 4 tickets raised (G-14, G-16). |
| TC-SHDLNK-015 | Fail (SI4-I590) | **Pass** | Send for Approval on a blocked ticket → 409 `_172`, nothing recorded; the PMO approval is recorded only after step 1. |
| TC-SHDLNK-047 | Fail (SI4-I586) | **Pass** | The new-shadow ticket waits for the promotion: 409 "Complete the step 2 tickets (#NA-0422)". |
| TC-SHDLNK-043 | Fail (SI4-I483) | **Fail** | Separate tickets: the new shadow (Nimisha → Kartik) was applied while Kartik's promotion had just been refused. |

**Cases whose expected text changed** (updated in `cases-2026-10-23-SHDLNK-e2e-full.json`): 006, 011, 013, 014, 015 and 047. The I590 fix means a blocked step-2 ticket can no longer reach Awaiting. So while it is blocked, PMO sees Send for Approval disabled, and the TM has no Approve button at all, not a disabled one. Shortlisting still works.

Re-checks of earlier fixes still hold: SI4-I576 (TC-029, Zalak Chopra has 876.59 h), I577 (TC-022), I578 (TC-023), I587 (TC-050). The SI4-I579 leftover is fixed: the Deallocate form header shows the main's own department and %.

## Smaller notes (not failures, same as 21/10 unless marked)
- **New copy, minor:** the refusal on a new-shadow ticket reads "Complete the step 1, 2 tickets (#DA-…, #DA-…, #NA-…)".
- **TC-033:** a promotion typed SHADOW_DEVELOPER is now refused by field validation ("promotion.shadowForPublicId is required") rather than "must be a FRESH_ALLOCATION request". Still a 400, and nothing is created.
- **TC-040:** a deallocation date equal to the main's own end date (20/11) fails with "End date must be after start date". The message doesn't tell the user to pick an earlier date.
- **TC-034:** a TM who can see only some blockers gets "Complete DA-0161 first", which names just the visible DA.
- **TC-021:** the DATA ENGINEERING TM gets the "New Ticket for Review" notice but no close notice when the group is cancelled. PMO gets one for each ticket.
- **TC-020:** the second shadow (Iti Trivedi) is still "shadow of Smriti Iyer" after Smriti's row ends 31/10. There is no clean-up for a second shadow.
- **TC-012:** the blocked-button tooltip opens on hover only, not on keyboard focus. The text is still exposed through aria-describedby.
- **Error codes:** most business errors still return `code: SYS_004` with the right message. Non-owner swaps get 403 `AUTH_004`.

## Data on dev (HyperScale)
New pairs were created as PMO on 23/10 (direct allocations, all from 23/10): Smriti Iyer main with Fenil Kamath and Iti Trivedi as shadows; Vandana Mishra main with Zalak Chopra as shadow; Karan Contractor main (end 20/11) with Aarav Patel (DATA ENGINEERING) as shadow; Yash Sinha main with Kartik Dabhi as shadow.

| Group / tickets | Case(s) | Final state |
|---|---|---|
| G-14: DA-0152/0153, NA-0422/0423 (I586/I590/I591 re-test, earlier today) | 005, 006, 015, 047, 048 | **Applied**: Tanmay Parekh ends 31/10; Urvashi Kotak main from 01/11; Suresh Mukherjee shadows Urvashi from 01/11 |
| G-15: DA-0154/0155, NA-0433 | 004, 009–020, 024–028, 031, 036, 037, 049 | **Applied**: Fenil main FIXED 20% from 01/11; Smriti ends 31/10; Iti still "shadow of Smriti" to 31/12 |
| G-16: DA-0156/0157, NA-0436/0437 | 005, 006, 022, 023, 029, 046 | All CLOSED; Vandana and Zalak unchanged |
| G-17: DA-0158/0159 | 007 | CLOSED |
| G-18: DA-0160/0161, NA-0438 | 034, 021 (raised by mistake with D = 01/11 while setting up 040) | All CLOSED |
| G-19: DA-0162/0163, NA-0439 | 039, 050 | CLOSED; DA-0163 withdrawn, Aarav back to 20/11 |
| DA-0164, DA-0165 | 030, 008 | CLOSED; Karan and Aarav unchanged (end 20/11) |
| NA-0440/0441, DA-0166/0167 (ungrouped) | 035, 043–045 | **Applied**: Yash ends 31/10; Kartik main FIXED 20% from 01/11; Nimisha Kumar shadows Kartik from 01/11 |
| DA-0168 | 036 clean-up | Janki Naik's future row (01/11–31/12) cancelled |

## Files
- Test cases: `reports/test-cases/cases-2026-10-23-SHDLNK-e2e-full.json`, `docs/test-cases/test-cases-2026-10-23-shdlnk-e2e-full.md`
- Results: `reports/results/results-2026-10-23-shdlnk-e2e.json`
- Excel: `reports/excel/test-cases-2026-10-23_18-24-SHDLNK-e2e.xlsx`, `reports/excel/results-2026-10-23_18-24-SHDLNK-e2e.xlsx`
- HTML: `reports/html/qa-report-shdlnk-e2e-2026-10-23.html`
- Evidence: `reports/screenshots/2026-10-23/shdlnk-full/` (API bodies in `json/`) and `reports/screenshots/2026-10-23/shadow-tbt/`
- Earlier today, the I586/I590/I591 re-test: `docs/findings/2026-10-23-shadow-swap-tbt-retest.md`

## TC-SHDLNK-043 retry with different data (later on 23/10)

Run at the user's request to confirm the one failure. Evidence: `reports/screenshots/2026-10-23/i483-retry/json/i483-retry.json` and `i483-cleanup.json`. **Confirmed: still fails.**

| Variant | Data | Result |
|---|---|---|
| V1, PMO bypass | Vandana Mishra main, Zalak Chopra shadow. Separate NA-0442 (promotion of Zalak) + NA-0443 (new shadow for Zalak), plain DA-0169 on Vandana | Promotion bypass → 409 "already has an active (non-archived) allocation". New-shadow bypass → **200 "approved and applied"**: Vihaan Patil became shadow of Zalak from 01/11 while Zalak was only a shadow. |
| V2, normal approval (no bypass, no DA, promotion untouched) | Karan Contractor main, Aarav Patel shadow. NA-0444 (promotion, left OPEN) + NA-0445 (new shadow for Aarav) | PMO Send for Approval + **one TM approval** (sudhansu.patel) → APPROVED and applied: Urvashi Saxena became shadow of Aarav Patel from 01/11, i.e. **a shadow of a shadow**, with no deallocation and no promotion anywhere. |
| V3, shadow for someone not on the project | SHADOW_DEVELOPER request with shadowFor = Janki Naik (no row on HyperScale) | Refused at creation: 400 "The selected Shadow For developer is not currently assigned to this project". |

So the only check is "the person is on the project". There is no "the person is the main from the start date" check, on create or on apply, and it is not specific to bypass. V2 is a stronger reproduction than the original I483 report, because it needs no promotion or deallocation at all.

Clean-up: Vihaan's and Urvashi Saxena's future shadow rows cancelled; NA-0442, NA-0444 and DA-0169 closed (NA-0443/NA-0445 stay APPROVED, rows cancelled). Vandana/Zalak and Karan/Aarav are back to their original state.
