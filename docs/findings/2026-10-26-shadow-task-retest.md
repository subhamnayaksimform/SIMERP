# SI4-T1464 shadow task — re-test, 26 Oct 2026

- **Environment:** https://simerp-dev.simform.solutions (dev, development branch as of 26/10 14:53, includes SI4-T1566 "allocation owner" changes)
- **Roles:** CSM priya.chopra · PMO bhumi.chauhan · TM sudhansu.patel
- **Project:** HyperScale
- **Context:** On 23/10 the full T1464 run was 47/48; the only fail (TC-SHDLNK-043) was filed as **SI4-I593** (In Progress, Parshva). No fix for I593 has been merged to `development` since then.

## Results

| # | Check | Result |
|---|---|---|
| A | **SI4-I593 / TC-043** — plain SHADOW_DEVELOPER ticket for Aarav Patel, who is only a shadow (of Karan Contractor) | **FAIL — still reproduces** |
| B | Shadow ticket for someone with no row on the project (Janki Naik) | Pass — 400 "The selected Shadow For developer is not currently assigned to this project" |
| C | Regression after T1566: linked swap option 2 (Vandana main / Zalak shadow) | Pass |

### A — SI4-I593 still reproduces
1. CSM raised NA-0446 on HyperScale: one SHADOW_DEVELOPER line, Shadow For = Aarav Patel, Fixed 20%, from 01/11/2026 → 201.
2. PMO assigned QA, shortlisted Urvashi Saxena, Send for Approval → AWAITING_CONFIRMATION, no warning.
3. TM approved → **APPROVED and applied**.

Result on HyperScale: Urvashi Saxena 20% from 01/11, **shadow of Aarav Patel**, who is himself a shadow of Karan Contractor (shadow of a shadow). Same as reported on 23/10.

Evidence: `reports/screenshots/2026-10-26/shadow-retest/i593-NA-0446-approved.png`, `.../json/rt26.json`.

### C — linked swap regression (G-20)
- Swap raised 201: DA-0172, DA-0173 (step 1), NA-0447 promotion, NA-0448 new shadow (step 2).
- NA-0447 blocked by DA-0172+DA-0173; NA-0448 blocked by both DAs + NA-0447.
- Early bypass of NA-0448 → 409 `_172` "Complete the step 1, 2 tickets…"; early bypass of NA-0447 → 409 `_172` "Complete the step 1 tickets…".
- Closing main DA-0172 auto-closed DA-0173, NA-0447 and NA-0448. Rows unchanged.

### Note
- `allocationOwner` is `null` on NA-0446 (a ticket created today after T1566 shipped). Not a shadow issue; worth a look under T1566.

## Clean-up
- Urvashi Saxena's wrong row cancelled (DA-0174). NA-0446 stays APPROVED (history).
- Final state: Karan Contractor main / Aarav Patel shadow (to 20/11); Vandana Mishra main / Zalak Chopra shadow (to 31/12). Both pairs clean and reusable.

## Recommendation
Keep SI4-T1464 out of Closed until SI4-I593 is fixed. Nothing new to file.
