# SI4-T1575 profile reminders: re-test (2026-10-30)

Environment: dev, API 6.8.0, UI 6.7.0 (backend 32ff7e87 / frontend 6e2af70f, which include the I613/I614 fixes). Chromium. First run: `2026-10-29-profile-reminders-t1575.md`.

## Changes since 29/10
Only the two QA fixes: BE `034c6578` (I613, NULL night shift) and FE `82ebc8d0` (I614, chip label). Both pass, and both issues are closed in Zoho.

## Results

| # | Check | Result |
|---|---|---|
| 1 | No Night Shift Added = everyone with no preference (17 of 3,648) | **Pass** (failed on 29/10) |
| 2 | Night shift chip reads "No Night Shift Added" | **Pass** (failed on 29/10) |
| 3 | No Skills Added = 1,325 = employees with 0 skills; No Visa Added = 3,635 = visaStatus NOT_SET with no visa | Pass |
| 4 | NOT_ADDED + NONE = 17 + 1,530 = 1,547 (OR); all three together = 17 | Pass |
| 5 | Junk shift value → 400 | Pass |
| 6 | Role scope: Admin/PMO 1,325, PM 92, TM 93, EM 0; Employee/CSM 403 | Pass (same as 29/10) |
| 7 | Deep links as Employee: skills → skills side panel; visa → inline Add Visa form; nightShift → Edit Profile; `edit=false` / unknown section → nothing | Pass. The first visa try hit a one-off "Unable to reach the server" → Access Denied; the next 4 tries were fine |
| 8 | Clear on save: skills, visa (3 paths incl. "I have no visas") and profile saves all call `clearResolvedReminders` | Pass (code) |
| 9 | Unit tests on origin/development: profile-reminder, cron, profile, skills, visa, notification dispatch | **37 suites / 650 tests pass** |
| 10 | Job on dev: `profile-reminders` listed, `lastRun: null`, flag `feature.cron.profile.reminders.enabled = false` | Deployed, never run |
| 11 | Real sending: in-app + email, manager digest, clearing a live reminder | **Not tested.** "Run now" sends right away, even in an off week, to about 3,635 real people |

Possible issue checked and ruled out: `clearResolvedReminders` reads `shiftPreferences.length`, and the column can be NULL. Prisma returns NULL lists as `[]`, so this is safe. On dev, the 16 NULL rows come back as `[]` from a plain select with no `?? []` anywhere.

## Differences from the task text (for the PO; not filed as bugs)
1. **Every two weeks, not weekly.** The task says "weekly" 3 times. Commit `14f6daf4` deliberately changed it to every second Monday from 2 Nov, and the email says "every two weeks".
2. **Night shift reminder added.** The task covers only skills and visa; the build also reminds about a missing night shift preference.
3. **No single "Incomplete Profiles" filter.** The task asks for one; the build has a "No … Added" option in each of the Skills, Visa Status and Night Shift columns.
4. Open from 29/10: 3,635 of 3,648 employees have "No Visa Added", so turning the flag on reminds almost the whole company.

## Verdict
Everything testable without sending real reminders passes, and no new defects were found. Before the task can be fully signed off, two things are still needed:
- the PO's OK on differences 1–3;
- one controlled sending run, either on a local stack or on dev with email off and a small audience.
