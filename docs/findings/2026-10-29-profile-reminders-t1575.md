# Profile reminders + "No … Added" filters: SI4-T1575 test (2026-10-29)

Developer: Bhargav. Merged 27–28/10 (backend PRs #587, #591; frontend PR #529). Environment: dev (simerp-dev.simform.solutions), UI 6.5.0, Chromium.

## What the task adds

1. **Employee list filters**: Skills, Visa Status and Night Shift Preference each get a "No … Added" option, listed first.
   - No Skills Added: no active skills.
   - No Visa Added: no visa record and not ticked "I do not currently hold any visa".
   - No Night Shift Added: no preference recorded ("No Preference" counts as recorded).
   - Picked together with real options it is OR (either one matches).
2. **Profile reminders** (job `profile-reminders`): every second Monday 09:00 IST from 2 Nov 2026. Each employee with a gap gets an in-app notification for each gap and one email. Each reporting manager gets one digest. Reminders clear when the gap is filled. Off by default (`feature.cron.profile.reminders.enabled = false`).
3. **Deep links** from the reminders: `/profile?section=skills|visa|nightShift&edit=true` opens that editor.

## Results

| # | Check | Result |
|---|---|---|
| 1 | Filter options exist and are listed first (API + advanced filter panel) | Pass |
| 2 | No Skills Added: filter result equals every employee with 0 skills (Admin 1325, PMO 1325, PM 92, TM 93, EM 0) | Pass |
| 3 | No Visa Added: equals everyone without a visa and without the opt-out; no overlap with visa holders or opted-out people | Pass |
| 4 | No Night Shift Added: equals everyone with no preference | **Fail** (bug A) |
| 5 | NOT_ADDED + a real option = union of the two (shift and visa) | Pass |
| 6 | All three NOT_ADDED together = people missing all three | Pass |
| 7 | Bad values: junk shift/visa value → 400 with the allowed list | Pass |
| 8 | Bad values: junk or lower-case skill value → 200 with 0 rows (no error) | Note: inconsistent with shift/visa, low impact |
| 9 | Role scope: PM/TM/EM see only their own people; Employee/CSM get 403 on the list | Pass |
| 10 | UI: picking each option sends `NOT_ADDED` and the count matches the API | Pass |
| 11 | UI: applied-filter chip text | **Fail** for night shift (bug B); skills and visa chips are fine |
| 12 | Deep links (Employee kashyap.patel): skills opens the skills panel, visa opens Add Visa, nightShift opens Edit Profile; the URL params are then removed. Unknown section or `edit=false` opens nothing | Pass |
| 13 | Job is deployed: `profile-reminders` is listed in the scheduler | Pass |
| 14 | Reminder sending, emails, digest, clearing on save | **Not tested** (see below) |

## Bugs

**A. "No Night Shift Added" misses 16 of 17 employees (Medium) — filed SI4-I613**
Admin list: 17 current employees have an empty night shift preference, but the filter returns only 1 (Gaurav Dutta). The 16 missed are test/seed accounts (`*@simform.test`, `john.doe2@example.com`). The likely cause is that their value is stored as NULL, not as an empty list: the rule `shiftPreferences: { isEmpty: true }` does not match NULL. The reminder job uses the same rule (`MISSING_NIGHT_SHIFT_WHERE`), so these people would also get no night shift reminder. Not confirmed in the database.

**B. Night shift filter chip shows "NOT_ADDED" (Low) — filed SI4-I614**
After applying "No Night Shift Added", the chip above the table reads `Night Shift Preference: Is NOT_ADDED`. Other night shift options show their names ("No Preference", "Night Shift L1 (10 PM…"). The Skills and Visa Status chips show "No Skills Added" / "No Visa Added" correctly.
Screenshots: `img/2026-10-29-t1575/night-shift-chip-raw.png`, `night-shift-chip-mixed.png`.

## Not tested, and why

Running the reminder job ("Run now" on the scheduler) would send real emails and notifications to everyone with a gap. On dev today that is about **3,635 employees without a visa** and **1,325 without skills**. Not done without approval.

To test this safely we need one of:
- a local stack with a small data set, or
- dev with email turned off and only a few employees in the gap.

## Question for product

Almost everyone (3,635 of 3,648) has "No Visa Added", because hardly anyone has ticked "I do not currently hold any visa". When the flag is turned on, nearly the whole company gets a reminder on the first run. Is that intended?
