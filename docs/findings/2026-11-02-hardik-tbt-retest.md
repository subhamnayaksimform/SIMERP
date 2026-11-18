# Re-test of Hardik's items in "To be tested", 2 Nov 2026

**Environment:** SimERP DEV (UI 6.7.0, API 6.8.0). Backend restarted 30 Oct 2026 15:41 IST, after the SI4-I610 fix was merged (14:54 IST).
**Items:** SI4-I610 (bug, reported by Sweta) and SI4-T1616 (task). These are the only open Zoho items assigned to Hardik.
**Screenshots:** `reports/screenshots/2026-11-02/hardik/`

| Item | Result |
|---|---|
| SI4-I610: Ticket update and approvals not working | **Pass (live)**: a period nested inside two stacked periods is now approved, by both the acknowledge flow and the full approval flow. A half-overlap is still refused. |
| SI4-T1616: In-app + email notification when a release is published | **Pass on code and link. The live send was not tested**, because the release job has never run on dev. |

## SI4-I610: Pass (live)

The bug has no description. The fix (`0dbdf9a7`, `c422e546`) makes the overlap check accept a period that sits inside several stacked periods. On 30 Oct this was checked only at unit level. Today it was re-tested live.

**Data:** Ira Chopra on AnalytixHub (assignment `e56ca785…`, 50% from 09 Nov 2026, created today from OPP-0334).

| Step | Ticket | Period | Result |
|---|---|---|---|
| PMO direct update | UA-0136 | 40%, 10 Nov – 31 Dec | Applied |
| PMO direct update, inside UA-0136 | UA-0138 | 30%, 15 Nov – 15 Dec | Applied |
| PM maitri.bose ticket, inside both (decrease → acknowledge flow) | UA-0140 | 20%, 20 – 30 Nov | **Acknowledged and applied.** Before the fix, this was refused with "overlapping scheduled change". |
| PM ticket, inside all three (increase → PMO review → TM → PMO approve) | UA-0143 | 45%, 22 – 25 Nov | **Approved and applied** |
| PM ticket, half-overlap (crosses the end of UA-0138 on 15 Dec) | UA-0142 | 25%, 10 – 20 Dec | **Refused at final approval** (409): "This period partially overlaps an allocation change already scheduled…". This is correct. The ticket was then closed. |

The resulting timeline is correct: 9 Nov 50% · 10–14 Nov 40% · 15–19 Nov 30% · 20–21 Nov 20% · 22–25 Nov 45% · 26–30 Nov 20% · 1–15 Dec 30% · 16–31 Dec 40% · from 1 Jan 50%.

**Zoho:** we can't change the status of SI4-I610, because Sweta reported it. Only the reporter can close it.

## SI4-T1616: Pass on code and link; live send not tested

The code (`4835808f`, `23f97c1f`, `a7f0aa77`, `003e7db1`, `c0506eb6`) is on `development` and `main`. On 29 Oct it was only on `main`.

**Why there was no live send:** on dev, the `release-announcement` job (every 15 min) shows `lastRun: null`, and so does every other scheduled job. Its switch `feature.cron.releaseAnnouncement.enabled` is off. A manual "run now" obeys the switch, so it would just skip. Even with the switch on, the first run only records the existing releases and sends nothing. A notification goes out only for a release published after that. So a live test needs: switch on → first run → a new release deployed. That would email every eligible dev user.

**Unit tests** (`origin/development` @ `f0742538`, run in a separate worktree): `src/modules/releases` + the job, **5 suites, 71 tests, all pass**. Acceptance criteria covered by tests:

| Acceptance criterion | Covered by |
|---|---|
| First publish sends in-app + email to every active user whose role has content | "queues one notification per eligible user…", audience = `hasReleaseContentFor(release, access)` |
| Inactive/exited users get nothing | "only asks for active (not exited) employees" |
| User with 2+ roles gets exactly one | "…once each across multiple roles, in a single transaction" |
| Edit / re-publish sends nothing | "sends nothing for a version that was already announced", "announces a version once, however many ticks see it" |
| Hotfix triggers the same notification | `a7f0aa77`: a release with no changes is announced to everyone |
| No user opt-out | No setting exists in the code |
| Wording | In-app "New release is live – see what's new"; subject "SimERP – New release is live"; body "A new SimERP release is live. See what's new for your role." with a "See what's new" button, all as in the task. |

**Live UI checks:**
- **The link opens that role's Release Notes view:** `/whats-new` shows 32 releases for Employee (kashyap.patel), 50 for PM (gaurav.panchal) and 60 for Admin (ceo).
- **A logged-out user signs in, then lands on the same page:** opening `/whats-new` logged out goes to `/login`, which remembers `login_return_to=/whats-new`. After sign-in (the Microsoft return to `/login?success=true` was emulated), the user lands on `/whats-new`. Pass for all 3 roles.
  - Note: the `/dev-login` shortcut does not use the remembered page; it lands on `/profile`. This is test-only, because real users sign in with Microsoft.
