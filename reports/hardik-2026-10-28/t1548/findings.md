# SI4-T1548 – Release notifications & What's New from the API – findings (28/10/2026)

**Developer:** Hardik Metaliya · **Merged:** 26/10 · **Env:** dev (frontend v6.5.0, API /api/v1)
**Commits:** backend `4835808f`, `e5d35ef0`, `23f97c1f` · frontend `0d86f73c`, `567c4cf1`
**Accounts used:** ceo@ (Admin/PMO), kashyap.patel@ (Employee), kunal.jadeja@ (EM).
**Result:** 38 cases: 20 passed, 8 failed, 10 blocked. Cases: `reports/hardik-2026-10-28/t1548/cases.json`.

## How the feature works (from the code)
- **Where the notes come from:** the frontend build encrypts all release notes into `releases.enc.json` (next to index.html) using `RELEASE_CONTENT_KEY`. The backend downloads `${FRONTEND_URL}/releases.enc.json`, decrypts it with the same key, and `GET /releases` returns only the changes each user's permissions can open. Notes are no longer in the JS bundle.
- **How a release gets "published":** there is no admin button. A cron job `release-announcement` runs every 15 minutes and sends a notification for any released version it has not seen yet. The first run only records a baseline and sends nothing. It needs both `feature.cron.enabled` (global switch) and `feature.cron.releaseAnnouncement.enabled`.
- **Who gets notified:** every active employee who would see at least one change from the new release. Admins (`releases.view_all`) count as seeing everything. One notification per person.
- **Text:** in-app title "New release is live – see what's new", empty body. Email subject "SimERP – New release is live", sender "SimERP", button "See what's new" → `/whats-new`.
- **Click:** opens `/whats-new` for every role.

## BUG-T1548-01 – What's New & History is empty for every role on dev (deployment/config gap)
**Severity:** Medium (feature does nothing on dev; same risk on staging/prod if the key is missed). **Type:** config gap, not a code defect.
**Steps:** 1) Sign in as any role (tried Admin, Employee, EM). 2) Open What's New & History, or call `GET /api/v1/releases`. 3) Open `https://simerp-dev.simform.solutions/releases.enc.json`.
**Expected:** the API returns the shipped releases (40 released versions in source, newest 6.5.0), filtered by role. `releases.enc.json` is a small encrypted JSON envelope `{v, iv, tag, data}`.
**Actual:** `GET /releases` → `200 {"code":"REL_001","message":"Release notes fetched successfully.","data":[]}` for all 3 roles, with or without `includePlanned=true`. The page shows "0 releases" / "No release notes found". `releases.enc.json` returns 200 text/html, 1344 bytes: the normal index.html, not the encrypted file.
**Why:** the dev frontend was built without `RELEASE_CONTENT_KEY`, so the build skipped the file with only a warning (`frontend/vite.config.ts:48-50`). The backend gets index.html instead of the envelope, or has no key itself (`release-content.service.ts:112`). It logs "Release content unavailable" and returns an empty list on purpose (`release-content.service.ts:92`, `:104`), so the API still says "fetched successfully". We can't see whether the backend key is set; the frontend file is missing either way.
**Ask:** set the same `RELEASE_CONTENT_KEY` (base64, 32 bytes) in the dev frontend build env and the dev backend env, then redeploy the frontend. Check staging/prod the same way. Suggestion: fail the build when the key is missing outside local dev, or show the problem somewhere, because an empty "success" hides it.
**Evidence:** `reports/screenshots/2026-10-28/hardik/t1548/admin-whats-new.png`, `employee-whats-new.png`, `em-whats-new.png`; `…/t1548/json/02-*.json`. Explains N-09 (27/10).

## BUG-T1548-02 – Empty What's New tells users to change filters that are not set
**Severity:** Low
**Steps:** open What's New while there are no release notes, with no search and no filter.
**Expected:** "No releases yet – Release notes will appear here after the next release." (label already exists, `src/constants/help/labels.ts:78-79`).
**Actual:** "No release notes found – Try a different search, page or type of change." and "0 releases · select a version to see its changes".
**Likely cause:** `frontend/src/pages/whats-new/WhatsNewPage.tsx:57-58` always uses EMPTY_TITLE/EMPTY_DESCRIPTION and never NO_RELEASES_*. The label predates T1548, but T1548 is what makes an empty list possible.
**Evidence:** `reports/screenshots/2026-10-28/hardik/t1548/employee-whats-new.png`, `em-whats-new-search-no-match.png`

## Not a T1548 defect, but it blocks testing: no cron job runs on dev
- `feature.cron.enabled` is false on dev. All 15 jobs, including release-announcement, have `lastRun: null`. The per-job flag is true (added by the migration).
- Admin run-now (`POST /sync-queue/cron-runs/release-announcement/run`) returned 202 "triggered" but was silently skipped (`abstract-cron-job.ts:225`): no run row, no notification. Nothing on screen says it was skipped (older behaviour).
- We did not turn the global switch on, because that would also start Zoho sync, allocation changes and 12 other jobs. Even with it on, the job would fail until BUG-T1548-01 is fixed.
- Blocked: notification text, click-through, read/unread, email, one-per-user, baseline first run.
- Side note (outside T1548): 6 jobs in the scheduler "All Jobs" dropdown still show raw names. The new job is labelled "New Release Notifications".
- Dev-only: the "Login with Credentials" page (`DevLoginPage.tsx:55`) ignores the remembered return page; only the Microsoft login path uses it. Not reported.

## What works
- `GET /releases`: 401 with no session, a fake token, or after logout; 400 with a clear message for a bad includePlanned; 404 for detail/POST (read-only API).
- Permissions seeded as designed: every role has `releases.read`, only ADMIN has `releases.view_all` (permissions API + Roles & Permissions "Releases → View / View All").
- Release note text is no longer in the JS bundle (296 JS files scanned, 0 hits); the app calls `GET /releases?includePlanned=true`.
- Only Admin can see or trigger scheduled jobs (Employee/EM get 403). The job is registered every 15 min with a proper label; an unknown job name returns 404.
- After sign-in the user goes back to the page they asked for (`/whats-new`, `/help?module=profile`). Off-site values (`//evil…`, `/\evil…`, `https://evil…`) and `/login` are ignored: no open redirect.
- Help & Support is still scoped by role (Admin 74 guides/22 pages, EM 49/16, Employee 14/3).
- The bell is unchanged for existing notifications (title, body, time, unread dot, link). Its What's New tab shows a readable "You're up to date".
- No bare dash/N-A/null on What's New, Help or the bell for any of the 3 roles. Accessible names are present.
