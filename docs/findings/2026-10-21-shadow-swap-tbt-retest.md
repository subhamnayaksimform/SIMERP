# Re-test of the shadow swap issues in "To be tested" (SI4-I576..I579), 2026-10-21

Dev (SimERP 6.4.2), Chromium, fresh password logins. SI4-I576, I577, I578 and I579 moved to **ToBeTested** in Zoho since yesterday's run (`2026-10-20-shadow-swap-issues-retest.md`). No Zoho comments on any of them. No new shadow swap fix commits since 20/10. Today's backend merge of SI4-T1267 (interview module, PR #557) only adds 46 lines to the swap-related files, so the full flow was re-run to check for regressions. Nothing was changed in Zoho.

| Issue | Title | Result |
|---|---|---|
| SI4-I576 | "Shadow becomes main" fails when the shadow has over 20 h | **Pass**: close |
| SI4-I577 | Closing the main's DA leaves the shadow's DA open | **Pass, both ways**: close |
| SI4-I578 | Closing the promotion leaves the new-shadow request open | **Pass**: close |
| SI4-I579 | Picker and form text promise things that don't happen | **Pass, same small leftover as 20/10**: the form header |

## Setup
PMO bhumi.chauhan direct-allocated **Kunal Menon** (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of **Bhavesh Bansal** (QA, FIXED 20%, no end) on HyperScale, FIXED 10%, 21/10 → 31/12/2026. The swaps were raised as CSM priya.chopra in the UI.

## SI4-I576: Pass
- **Option 2** (+ new shadow): G-5 raised with 4 tickets (DA-0120, DA-0121, NA-0386, NA-0387). `flowType: SHADOW_TO_MAIN_NEW_SHADOW`, 201.
- **Option 1** (shadow becomes main, the reported flow): G-6 raised with 3 tickets (DA-0122, DA-0123, NA-0388). `flowType: SHADOW_TO_MAIN`, 201.
- Ratings are sent only for the main; the shadow's DA has none, and the backend accepts it.

## SI4-I578: Pass
PMO closed the promotion NA-0386. NA-0387 (new shadow) closed with the remark "Closed automatically because prerequisite #NA-0386 was closed". Both DAs stayed AWAITING_CONFIRMATION, which is correct.

## SI4-I577: Pass, both ways
- G-5: PMO closed the main's DA-0120. DA-0121 (Kunal) closed with "…prerequisite #DA-0120 was closed".
- G-6: PMO closed the shadow's DA-0123. DA-0122 (Bhavesh) and the promotion NA-0388 both closed with "…prerequisite #DA-0123 was closed".
- The close dialog says: "This ticket is part of linked group G-5. Linked tickets that depend on it will be closed too."

## SI4-I579: Pass, with the same leftover
- **Picker:** "Kunal Menon takes over the main developer's allocation. Raises 3 linked tickets that need approval before anything changes." (option 2 says 4).
- **Form banner:** "Bhavesh Bansal will be deallocated… Once the linked tickets are approved, Kunal Menon is promoted… Nothing changes until then."
- **Promotion values (D3):** promotion and new shadow ask for **FIXED 20%** (the main's), not the shadow's 10%.
- **Confirm dialog (D4):** Bhavesh Bansal / **QA** / **Fixed · 20%**.
- **Leftover (unchanged since 20/10):** the "Deallocate Bhavesh Bansal" form header still shows **Department: DATA ENGINEERING** and **Current Allocation: Fixed · 10%** (Kunal's values) next to "Main: Bhavesh Bansal". Minor; can go as a comment on I579 or a new Low bug.

## Still open, not filed in Zoho
- **D10:** the fully closed G-5 card still says "Step 1 · Deallocations 0 of 2 approved", "Unlocks after Step 1" and "Tickets in a later step unlock once every earlier step is approved" (`c4-g5-all-closed-card.png`).
- **D2:** option 2's confirm dialog still offers both "Yes, Deallocate" and "Yes, Deallocate & Request New Allocation". Not re-run.

## Data created on dev (8 tickets, all closed or applied)
| Ticket | What | Final state |
|---|---|---|
| (direct) | Kunal Menon shadow of Bhavesh on HyperScale, `e42fa570…` | End trimmed to 21/10/2026 by DA-0124 |
| DA-0120, DA-0121, NA-0386, NA-0387 (G-5) | Option 2 swap | All CLOSED |
| DA-0122, DA-0123, NA-0388 (G-6) | Option 1 swap | All CLOSED |
| DA-0124 | Cleanup direct remove of Kunal | APPROVED |

Bhavesh Bansal is unchanged (FIXED 20% from 25/08/2026, no end). Kunal now has two one-day rows on HyperScale (20/10 and 21/10) until the archive job runs.

Evidence: `reports/screenshots/2026-10-21/shadow-swap/` (`s1-*`, `s2-*`, `c1-*`..`c4-*`), API bodies in `json/`.
