# Re-test of SI4-I581 and the shadow swap issues (SI4-I576..I579), 2026-10-20

Dev (SimERP 6.4.2), Chromium, fresh password logins. The user asked to re-test SI4-I581 and check that the other issues from the 19/10 run are fixed too. Nothing was changed in Zoho.

| Issue | Title | Fix commit | Zoho status | Result |
|---|---|---|---|---|
| SI4-I581 | Manager in the line notified about their own action | BE `ad5c1662` (PR #553) | Closed | **Pass** (re-tested earlier today, see `2026-10-20-tbt-issues-retest.md`) |
| SI4-I580 | PM in the line gets two notifications | BE `c3adc107`, `c1af1826` (PR #551) | Closed | **Pass** (same file) |
| SI4-I576 | "Shadow becomes main" fails when the shadow has over 20 h | BE `8e239e8b` | Open | **Pass**: close |
| SI4-I577 | Closing the main's DA leaves the shadow's DA open | BE `9b70ada2`, FE `4373d9cb` | Open | **Pass**: close |
| SI4-I578 | Closing the promotion leaves the new-shadow request open | BE `9b70ada2` (no commit of its own) | Open | **Pass**: close |
| SI4-I579 | Picker and form text promise things that don't happen (+ D3/D4) | BE `727d480d`, `13330656`, FE `54c6d4c6` | Open | **Pass, one small leftover**: the form header (see below) |

The fixes are deployed: the new copy is in the live frontend bundle, and `GET /pm-projects/{id}` now returns the main's `allocationType`, `allocationPercentage`, end date and `departmentName` on `shadowDeveloper`.

## Setup
PMO bhumi.chauhan direct-allocated **Kunal Menon** (DATA ENGINEERING, 967.74 h logged on HyperScale) as SHADOW of **Bhavesh Bansal** (QA, FIXED 20%, no end) on HyperScale, FIXED 10%, 20/10 → 31/12/2026. The swaps were raised as CSM priya.chopra in the UI.

## SI4-I576: Pass
- **Option 2** (+ new shadow): G-3 raised with 4 tickets (DA-0112, DA-0113, NA-0376, NA-0377). Yesterday the same pair got a 400 ratings error and nothing was raised.
- **Option 1** (shadow becomes main, the reported flow): G-4 raised with 3 tickets (DA-0114, DA-0115, NA-0378).
- The form still asks for ratings only for the main. The shadow's DA is sent without ratings, and the backend now accepts that.

## SI4-I578: Pass
PMO closed the promotion NA-0376. NA-0377 (the new shadow) closed with it, with the remark "Closed automatically because prerequisite #NA-0376 was closed". Both DAs stayed AWAITING, which is correct.

## SI4-I577: Pass, both ways
- G-3: PMO closed the main's DA-0112. DA-0113 (Kunal) closed with the remark "…prerequisite #DA-0112 was closed".
- G-4: PMO closed the shadow's DA-0115. DA-0114 (Bhavesh) and the promotion NA-0378 both closed.
- The close dialog on a linked ticket now says: "This ticket is part of linked group G-3. Linked tickets that depend on it will be closed too."

## SI4-I579: Pass, with one small leftover
- **Picker copy:** "Kunal Menon takes over the main developer's allocation. Raises 3 linked tickets that need approval before anything changes." (option 2 says 4).
- **Form banner:** "Bhavesh Bansal **will be** deallocated… Once the linked tickets are approved, Kunal Menon is promoted… Nothing changes until then."
- **D3 (promotion values):** the promotion and the new shadow now ask for **FIXED 20%, no end date** (the main's), not the shadow's 10% to 31/12.
- **D4 (confirm dialog):** it now shows Bhavesh Bansal / **QA** / **Fixed · 20%**.
- **Leftover:** the "Deallocate Bhavesh Bansal" form header still shows **Department: DATA ENGINEERING** and **Current Allocation: Fixed · 10%**, which are Kunal's values, next to "Main: Bhavesh Bansal". This is minor, because the confirm dialog is now correct. It can be raised as a comment on I579 or as a new Low bug.
- Note: the promotion's department stack is Kunal's own (DATA ENGINEERING / Tableau), not the main's QA. That seems right, because Kunal is the one being promoted.

## Still open, not filed in Zoho
- **D10:** a fully closed group still says "Step 1 · Deallocations 0 of 2 approved", "Unlocks after Step 1" and "Tickets in a later step unlock once every earlier step is approved" (`c4-g3-all-closed-card.png`).
- **D2:** option 2 still offers both "Yes, Deallocate" and "Yes, Deallocate & Request New Allocation". Not re-run.

## Data created on dev (8 tickets, all closed or applied)
| Ticket | What | Final state |
|---|---|---|
| (direct) | Kunal Menon shadow of Bhavesh on HyperScale, `f954cf8a…` | End trimmed to 20/10/2026 by DA-0116 |
| DA-0112, DA-0113, NA-0376, NA-0377 (G-3) | Option 2 swap | All CLOSED |
| DA-0114, DA-0115, NA-0378 (G-4) | Option 1 swap | All CLOSED |
| DA-0116 | Cleanup direct remove of Kunal | APPROVED |

Bhavesh Bansal is unchanged (FIXED 20% from 25/08/2026, no end). Kunal has a one-day row (20/10) that shows under Active until the archive job runs.

Evidence: `reports/screenshots/2026-10-20/shadow-swap/` (`s1-*`, `s2-*`, `c1-*`..`c4-*`), API bodies in `json/`.
