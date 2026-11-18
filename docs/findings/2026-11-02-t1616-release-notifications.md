# SI4-T1616: release notifications (dev: Hardik), re-test 2 Nov 2026

**Task:** Send in-app and email notification to users when a release is published. This is the same Zoho task as the earlier SI4-T1548 (id 688906000094684300).
**Environment:** SimERP DEV, UI 6.7.0, API 6.8.0. Code: `origin/development` of backend and frontend.
**Screenshots:** `reports/screenshots/2026-11-02/t1616/`

## Summary
The feature code is now on `development`, which was not the case on 29 Oct (commits a7f0aa77, 003e7db1, 7311c378). Every acceptance criterion that can be checked without sending passes. **The sending itself cannot be tested on dev.** The master switch for scheduled jobs, `feature.cron.enabled`, is **off**. Because of that, no scheduled job on dev has ever run, including `release-announcement`, and a manual "run now" is skipped too. Turning the switch on would also start every other job (visa/certification emails, allocation checks, and so on), so it was not touched.

## Results

| # | Acceptance criterion | Result | How it was checked |
|---|---|---|---|
| 1 | First publish sends 1 in-app + 1 email to every active user whose role has content | **Blocked on dev** (code OK) | Cron never ran (`lastRun: null`), master flag off. The code writes the in-app rows and email jobs in one transaction for the audience. Unit tests pass. |
| 2 | Roles with no content in the release get nothing | Pass (code + API) | The audience uses `hasReleaseContentFor`, the same rule as `GET /releases`. Release counts differ by role: admin 60, PMO 56, TM 55, PM 50, CSM 49, Employee 32. |
| 3 | Inactive / exited users skipped | Pass (code) | Only employees with `deletedAt = null` are included. The Zoho sync soft-deletes relieved employees ("Soft-delete relieved employees"). |
| 4 | Multi-role user gets exactly one notification + one email | Pass (code + unit tests) | One recipient per employee, with role permissions merged. |
| 5 | Link opens the user's role-specific Release Notes | Pass | The link is `/whats-new`. The page shows only that role's releases (screenshots 3-*). |
| 6 | Logged-out user logs in, then is taken to the same page | Pass for Microsoft sign-in | The app saves `/whats-new` before sign-in. Replaying the Microsoft return step (`/login?success=true`) lands on `/whats-new` for both the employee and the PMO. Without a saved page the user lands on `/profile`. **Note:** the dev-only "Login with Credentials" (`/dev-login`) ignores the saved page and lands on `/profile`. Real users don't see it. |
| 7 | Editing / re-publishing sends nothing | Pass (code + unit tests) | A unique `version` claim. An already-announced version is never sent again. |
| 8 | Hotfix triggers the same notification | Pass (code) | Every `RELEASED`, non-baseline version is announced, including releases with no changes. |
| 9 | No user setting to turn it off | Pass (code) | Sent as a broadcast. There's no preference check. |
| 10 | Wording | Pass | In-app title "New release is live – see what's new" (no body). Email subject "SimERP – New release is live", sender name "SimERP", body "A new SimERP release is live. See what's new for your role." with a "See what's new" button. |
| — | Unit tests | **134/134 pass** | 7 suites (`src/modules/releases`, `release-announcement.job`, `email-provider.service`, `notification-content`) on `origin/development`, run in a temporary worktree. |

## Good to know for a live test
- The first run ever only records a baseline: every release already live is marked as seen, and **nothing is sent**. Sending happens on a later run, after a frontend deploy adds a new release version.
- When it does run, it emails **every eligible active user on dev**. Agree on that with the team before turning on `feature.cron.enabled`.
- The production-like path is Microsoft sign-in. The credentials login on dev doesn't keep the return page.
