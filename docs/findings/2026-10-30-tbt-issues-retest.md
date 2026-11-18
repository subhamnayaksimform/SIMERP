# TBT issues re-test — 30 Oct 2026

Environment: dev (`simerp-dev.simform.solutions`), API 6.8.0 (= backend `origin/development` 01e28a9a), UI 6.7.0 (= frontend `origin/development` 13a1283c). Chromium.
Scope: all 16 SimERP Zoho issues in "To be tested" after the 19:20 IST sync.

## Summary

| Issue | Title (short) | Fix | Result |
|---|---|---|---|
| SI4-I616 | Employee notes API has no permission check | BE `da8ce997` | **Pass** |
| SI4-I617 | Zoho sync jobs log employee emails | BE `d610350a` | **Pass** (migration CLI scripts left, as the bug allowed) |
| SI4-I618 | Route ids put into API paths unencoded | FE `e57972e0`, `08e62887` | **Pass** |
| SI4-I619 | Vulnerable prosemirror-view copy / old dompurify | FE `6d51cf37` | **Pass** |
| SI4-I613 | "No Night Shift Added" misses NULL rows | BE `034c6578` (under T1575) | **Pass** |
| SI4-I614 | Night shift chip shows "NOT_ADDED" | FE `82ebc8d0` (under T1575) | **Pass** |
| SI4-I595 | Edit Permanent Replacement forces skipped feedback | BE `c624aa47`, `52616ade`; FE `6355feff`, `ee5e2ecb` (now on development) | **Pass** |
| SI4-I610 | Ticket update and approvals not working | BE `0dbdf9a7`, `c422e546` | **Pass at unit level**; not reproduced live |
| SI4-I548 | Dev slow / sometimes not loading | none (dev: network/DevOps) | **Pass now**: pages load in ~1.3 s |
| SI4-I615 | Shreyansh: not all logged-hour projects visible | none (dev: by design) | **Works as designed** per dev reply |
| SI4-I572 | Certifications form UI | FE `b620446f`, `3c69f98d` | Pass (20/10), no change since |
| SI4-I563 | PROD designation design on Employee page | FE `4d97dba5`, `e306351c` | Employee page pass; **Team Details side effect still there** |
| SI4-I457 | Notice period status not shown | none | Still as on 20/10: NP Status cell blank by design |
| SI4-I458 | PIP status not updated | none | Still as on 20/10: nothing moves `pipStatus` after the end date |
| SI4-I510 | [Prod] Prem Patel / Intree allocation | none (dev: data, 0% row) | Not testable on dev |
| SI4-I567 | Prod: Sagar Khanpara cannot log in | none (dev: VPN/network) | Not testable on dev |

## Zoho outcome (30/10, 19:50 IST, on the user's instructions)
- Every one of the 16 got a re-test comment.
- **Closed (10):** I616, I617, I618, I619, I613, I614, I548, I457, I458, I615.
- **Still "To be tested" (6):** I595, I572, I610, I563, I510, I567. Zoho answered `6401 Unauthorized Access` to the status change. All six were reported by someone else (Parshva, Bhargav, Sweta), and our account can only change the status of issues it reported. Their comments already say "Closing", so the reporters need to close them.
- **New bug:** **SI4-I624** (Low, UI/Usability, Bhargav, standalone) for the I563 side effect on Team Details. Measured today: 96 of 189 badges wrap, at 1440 and 1280 px. Screenshot `img/2026-10-30-tbt/team-details-badge-wrap-1440.png`, to be attached by hand.

Backend unit tests from `origin/development` (employee-notes, zoho-analytics PIP/leave/project-metadata, all allocation-tickets, employee filter registry): **73 suites, 2,474 tests, all pass**.

## Details

### SI4-I616 — Pass
Note `0cb1388d…` (on Smriti Arora) and her profile, per role:

| Role | Note | Profile |
|---|---|---|
| Employee (kashyap.patel) | 403 AUTH_004 | 403 |
| CSM (tarun.sharma) | 403 | 403 |
| Punit (TM-ish) | 403 | 403 |
| PM / TM / EM (out of scope) | 404 | 404 |
| PMO, Admin | 200 | 200 |

The note now follows exactly the same access as the employee profile. PATCH, DELETE and POST as Employee also give 403. I used dummy ids and empty bodies, so no data changed.

### SI4-I617 — Pass
I scanned every `logger.*` call in backend `src/` on `origin/development`. In `src/modules`, no message text contains an email any more. What's left:
- the leave summary, which logs only a count of unknown emails;
- email-provider messages with fixed text.

The audit lines in project-metadata now log `hasOwnerEmail` / `hasCsmEmail` flags. The remaining email log lines are all in the hand-run `src/sync-migration/*` scripts. The bug called those lower priority, and the commit leaves them for a follow-up.

### SI4-I618 — Pass
As Admin, `/employee/..%2Froles`, `..%2Fauth%2Fme` and `..%2Femployees%2F<id>` now call `GET /employees/..%2Froles` (encoded) instead of `/roles`. The API answers 400 "uuid is expected". A normal `/employee/<uuid>` still loads. `src/constants/endpoints.ts` has 84 `apiPath` uses and no raw template builders left.

### SI4-I619 — Pass
On `development`, `yarn.lock` has a single `prosemirror-view` entry (1.42.4) and `dompurify` 3.4.17, both pinned in `resolutions`.

### SI4-I613 / SI4-I614 — Pass
- API (Admin): `shiftPreferences:["NOT_ADDED"]` returns 17. A full scan of 3,648 current employees finds exactly 17 with an empty or NULL preference, and none are missed.
- The reminder job uses the same `MISSING_NIGHT_SHIFT_WHERE` rule.
- UI: the column filter shows "Showing 1 - 17 of 17", and the chip reads "Night Shift Preference: Is No Night Shift Added". `NOT_ADDED` appears nowhere on the page. Screenshot: `img/2026-10-30-tbt/i613-i614-filtered.png`.

### SI4-I595 — Pass
The fix is now on `development`. On 29/10 it was only on main/release.

Test setup: PM keyur.hegde, ticket RA-0017 (XCrypt, Ananya Hegde, 0 h, feedback skipped).
- The ticket API now returns `targetTotalHoursLogged: 0`.
- The edit drawer shows "Employee Feedback Was Skipped" and a ticked "Skip employee feedback" checkbox, with no rating fields. Unticking the box brings the ratings back.
- I changed allocation from 55% to 50% with feedback still skipped. Save → 200 "Allocation ticket edited successfully". I then set it back to 55% the same way (also 200).
- RA-0017 is still OPEN at 55%.

Screenshots: `i595-drawer-skip.png`, `i595-drawer-unticked.png`, `i595-saved-50.png`.

### SI4-I610 — Pass at unit level only
The Zoho issue has no description. The fix is backend-only. Approving an update whose period sits inside two already-stacked periods was refused with OVERLAPPING_SCHEDULED_CHANGE; the classifier now accepts it. Half-overlaps are still refused. The new tests pass (nested in inner, nested in outer, half-overlap refused), and so does the whole allocation-tickets suite. Not reproduced live: that needs two approved, stacked update tickets on one employee plus a third to approve.

### SI4-I548 — Pass now
As Admin, `/`, `/employee`, `/projects` and `/dashboard` load in 0.7–1.3 s. The slowest API call is the `/projects` list at about 1.9 s. The rest of the time to network idle (4–7 s) is external `i.pravatar.cc` avatar images from the seed data. Today's 3 ops health probes were all up, at about 1.3 s each. The developer's reply: network or DevOps side.

### SI4-I615 — Works as designed (developer reply)
Hardik: the profile only lists projects the person is allocated to in SimERP (active or archived). Hours logged without an allocation are only shown to non-employee roles (RM, TM, PM). The reporter needs to accept this, or raise it as a change request.

### Unchanged since 20/10 (no new commits; `TeamMemberRow.tsx:45` still has `max-w-[60%]`)
- **I563:** the Employee page is fixed. On Team Details, the role and experience badges still wrap onto two lines (see `2026-10-20-tbt-issues-retest.md`).
- **I457 / I458:** same as 20/10. These need the reporter's intent.
- **I510 / I567:** prod data and network issues that can't be tested on dev.
- **I572:** passed on 20/10, no change since.
