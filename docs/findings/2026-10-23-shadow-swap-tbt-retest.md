# Shadow swap TBT issues re-test — 23 Oct 2026

Dev (https://simerp-dev.simform.solutions, What's New still shows 6.5.0; frontend bundle redeployed 23/10 08:38 GMT), Chromium.
Roles: CSM priya.chopra, PMO bhumi.chauhan, QA TM sudhansu.patel.

Issues in **ToBeTested** in Zoho with "Shadow swap" in the title: SI4-I586, SI4-I590, SI4-I591 (all assigned to Parshva).

Fix commits (`origin/development`, 22/10, Parshva Vora):

| Issue | Backend | Frontend |
|---|---|---|
| SI4-I586 | `499b1628` hold the new shadow until the promotion is approved; `50f86cc0` docs | `eafae0ad` banner names what a blocked ticket waits on; `1b452318` banner copy |
| SI4-I590 | `7b8011b2` refuse Send for Approval / advance on a blocked linked ticket | `206a2cfd` disable Send for Approval while blocked |
| SI4-I591 | — | `b14bc5c2` raise the new shadow whenever its swap option is picked |

## Results

| Issue | Result | What was seen |
|---|---|---|
| SI4-I591 | **Pass** | Option "Shadow Developer becomes main + new shadow requested": the confirmation dialog now offers only **Yes, Deallocate & Request New Allocation** (no plain "Yes, Deallocate"). Submitting it sent `SHADOW_TO_MAIN_NEW_SHADOW` with a `newShadow` block and raised **G-14 with 4 tickets** (DA-0152, DA-0153, NA-0422 promotion, NA-0423 new shadow). Toast: "Linked tickets raised as G-14 · 4 tickets were raised together." Regression: option "becomes the main member" still offers the plain **Yes, Deallocate** only. |
| SI4-I579 leftover | **Fixed** | The Deallocate form header now shows the main's own values (Tanmay Parekh: QA, Fixed · 20%; Riddhi Verma: QA, Fixed · 20%), not the shadow's. |
| SI4-I590 | **Pass** | With DA-0152/0153 still Awaiting, PMO on the promotion NA-0422: assign department 200, shortlist Urvashi 200 (shortlisting stays open), **Send for Approval (`activeEmployeePublicId`) → 409 `ALLOCATION_TICKET_172` "Complete the step 1 tickets (#DA-0152, #DA-0153)…"**. Re-read: still IN_REVIEW, `approvals` = `{}` (nothing recorded). UI: banner "Action blocked. Complete DA-0152, DA-0153 first. This ticket unlocks automatically once they are approved."; **Send for Approval** and **Bypass TM/EM Approval** are disabled, tooltip "Blocked until these are approved: DA-0152, DA-0153." Once step 1 was approved, Send for Approval worked and recorded the PMO approval at that point (09:52), and the TM approval then finalized it — the correct order. |
| SI4-I586 | **Pass** | Before step 1: NA-0423 (new shadow) `blockedBy` = DA-0152 + DA-0153 + **NA-0422**. After PMO acknowledged both DAs: NA-0422 unblocked, NA-0423 **still blocked by NA-0422**. On NA-0423 with QA + Suresh Mukherjee shortlisted: Send for Approval → 409 and **Bypass → 409 "Complete the step 2 tickets (#NA-0422) before actioning this ticket."**; approve → 409. UI: "Action blocked. Complete NA-0422 first.", Bypass disabled. After the promotion was approved (PMO send + TM approve), NA-0423 unblocked and PMO bypass applied it. |

No new defects.

Minor note (not filed): on a blocked ticket the `/advance` call returns 400 "A developer must be selected…" rather than the group 409, because Send for Approval was refused first, so no developer is selected. The gate in `advance()` is therefore not reachable through the normal flow; nothing is applied out of order.

## Data left on dev (HyperScale)

New pair created for this run (direct allocations by PMO, 23/10): Tanmay Parekh main Fixed 20%, Urvashi Kotak shadow Fixed 10%.

| Group / ticket | Status | Effect |
|---|---|---|
| G-14: DA-0152 (Tanmay), DA-0153 (Urvashi shadow row) | Approved | Both rows end 31/10/2026 |
| G-14: NA-0422 promotion | Approved | Urvashi Kotak main, Fixed 20%, from 01/11/2026, no end |
| G-14: NA-0423 new shadow | Approved (PMO bypass) | Suresh Mukherjee shadow of Urvashi, Fixed 20%, from 01/11/2026, no end |

Riddhi Verma / Kriti Desai (end 07/11) already have scheduled end dates, so they can't be used for another swap; use a fresh pair next time.

## Evidence

`reports/screenshots/2026-10-23/shadow-tbt/` — `i591-plain-confirm.png`, `i591-submit-after.png`, `i591-mainonly-confirm.png`, `i590-NA-0422.png`, `i590-NA-0423.png`, `i586-NA-0423-after-step1.png`, `g14-final-card.png`; API/network JSON in `json/`.
