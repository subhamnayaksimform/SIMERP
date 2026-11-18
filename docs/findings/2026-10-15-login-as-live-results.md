# Login as (Admin + PMO) — live QA results, dev 6.4.2

**Summary**
1. Checked all 41 draft cases live on https://simerp-dev.simform.solutions (6.4.2) on 2026-10-15 (40 run, 1 not run): **37 Pass, 1 Fail (024/B4), 1 Blocked (041), 1 Cannot verify (043/B1), 1 Not run (044)**. Several Passes carry a confirmed UX/docs gap (020, 025, 015, 045).
2. The main flows work as specified. PMO and Admin can start Login as from the full profile, the Employee Details side panel and the project side panel. They see the confirm dialog and land on `/profile` with the yellow banner. "Return to PMO" / "Return to Admin" restores the original account.
3. Permissions hold: PMO → Admin is refused (403 AUTH_022), EM/Employee get 403, self/unknown/past targets are refused, chaining is refused (AUTH_016), and old cookies are revoked on start and on exit.
4. Confirmed defects: **B4** (past employee profile without `?type=past` shows a working-looking "Login as" button), **B3** (an impersonation session lasts as long as a normal login: 1 day access / 7 days refresh), and **B8** (a second tab silently becomes the impersonated user). UX gaps **B5/B6** and docs drift **B12** are also confirmed.
5. **B1 (audit of actions done while impersonating) cannot be verified via UI or API.** There is no audit/activity view for testers, and the app stored and showed the test edit only against Kashyap. TC-ADMLGA-044 was not run (it needs approval to change roles).

Accounts used: Admin `ceo@`, PMO `bhumi.chauhan@`, EM `kunal.jadeja@`, Employee `kashyap.patel@`. Every Admin/PMO scenario used a fresh `/dev-login` in a new browser context. Shared `storageState*.json` files were not used. hardik.trivedi@, tarun.sharma@ and sudhansu.patel@ were never logged in as or impersonated.
Other targets (read-only lookup via `GET /employee-roles`, Admin): PM `yatharth.patil@`, TM `zalak.das@`, EM `arnav.raval@`, CSM `diya.joshi@`, second PMO `vihaan.chatterjee@`, past employee `krishna.trivedi@` (deleted 2026-09-16).
Screenshots: `reports/screenshots/2026-10-15/login-as/`.

---

## Results

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-ADMLGA-001 | PMO sees Login as on employee profile | Pass | "Login as Kashyap" in profile header. `001-pmo-profile-login-as-kashyap.png` |
| TC-ADMLGA-002 | PMO sees Login as in Employee Details side panel | Pass | Panel shows "Login as Kashyap" next to the reporting-manager area. `002-pmo-side-panel-login-as.png` |
| TC-ADMLGA-003 | Confirm dialog text | Pass | `role=alertdialog`; title "Login as Kashyap Patel?"; body "Are you sure you want to log in as Kashyap Patel? This action is intended for support & troubleshooting purposes."; buttons Cancel / Yes, Login. `003-confirm-dialog.png` |
| TC-ADMLGA-004 | Cancel does nothing | Pass | Cancel and Escape both close the dialog, 0 calls to `/auth/impersonate`, still Bhumi, no banner |
| TC-ADMLGA-005 | PMO logs in as employee | Pass | Full reload to `/profile`; banner "You are currently logged in as Kashyap Patel" + "Return to PMO"; yellow dot on avatar; sidebar shows only Employee. `005-pmo-as-kashyap-profile-banner.png` |
| TC-ADMLGA-006 | Banner persists across pages and reload | Pass | Banner present on /whats-new, /profile, /working-location (→ /unauthorized for an employee) and after F5. `006-banner-after-reload.png` |
| TC-ADMLGA-007 | Return to PMO | Pass | Lands on `/employee?sortBy=availabilityPercentage&sortOrder=desc` (PMO default page, not the profile they came from) as Bhumi; no banner; no SSO prompt. `007-after-return-to-pmo.png` |
| TC-ADMLGA-008 | Admin logs in as employee and returns | Pass | Banner "Return to Admin", metadata `impersonatorRole: "ADMIN"`; return lands on /employee as ceo@. `008-admin-as-kashyap-banner.png`, `008-after-return-to-admin.png` |
| TC-ADMLGA-009 | Admin logs in as PMO | Pass | Admin → Bhumi allowed; banner "Return to Admin"; PMO menus (Overview…Projects, Admin) visible. `009-admin-as-pmo.png` |
| TC-ADMLGA-010 | Login as from side panel (Admin) | Pass | Admin → Zalak Das (TM) from the Employee Details panel → `/profile` as zalak.das, returned OK. `010-admin-side-panel-zalak.png`, `010-admin-as-zalak-profile.png` |
| TC-ADMLGA-011 | Login as from project team side panel | Pass | Projects → employee chip "Reyansh Vyas" opens the panel with "Login as Reyansh" (same component; start not repeated from here). `011-project-employee-panel.png` |
| TC-ADMLGA-012 | PMO logs in as PM / TM / EM / CSM | Pass | Each started (200) and exited with "Return to PMO". Sidebars: PM yatharth = Overview/Employee/My Projects/Requests Tracking; TM zalak and EM arnav = +Team/Projects/Department; CSM diya = Employee/My Projects/Requests Tracking. `012-pmo-as-{pm,tm,em,csm}.png` |
| TC-ADMLGA-013 | PMO logs in as another PMO | Pass | Second PMO `vihaan.chatterjee@` used as a target only: allowed (200), banner "Return to PMO", Admin menu visible to the impersonated PMO. `012-pmo-as-pmo2.png` |
| TC-ADMLGA-014 | Data as seen by employee | Pass | `GET /employees/permissions` while impersonating is byte-identical (975 chars) to Kashyap's own login |
| TC-ADMLGA-015 | What's New / help entry | Pass (docs drift, B12) | PMO: Help → "See SimERP as someone else (Login as)" present; Kashyap: search "Login as" → "No help found". 6.4.2 is only under "Preview planned release". Its entries say "**Admins** can now start Login as straight from the employee side panel" (PMO can too), and the help steps still say "Open the employee's full profile" only. `015-whats-new-642-pmo.png`, `015-help-topic.png`, `015-help-search-kashyap.png` |
| TC-ADMLGA-020 | PMO cannot log in as Admin | Pass (UX gap B5) | "Login as Chief" is visible on ceo@'s profile and panel. Confirming shows toast "Only an administrator can log in as another administrator"; still Bhumi, no banner. `020-pmo-sees-login-as-on-admin.png`, `020-pmo-admin-target-refused.png` |
| TC-ADMLGA-021 | Button hidden on own profile and own panel | Pass | PMO: 0 buttons on `/employee/<own id>` and `/profile`; Admin: 0 on own profile. PMO's own row is not listed in Employee Details (search "Bhumi Chauhan" → no rows), so the own-panel check was not reachable. `021-pmo-own-profile-no-button.png` |
| TC-ADMLGA-022 | Button hidden for non-permitted roles | Pass | EM: 0 on Kashyap profile and on Vidhi Shah panel. Employee: other profiles redirect to /unauthorized. `022-em-profile-no-button.png`, `022-em-panel-no-button.png`, `022-employee-other-profile-no-button.png` |
| TC-ADMLGA-023 | Button hidden for past employee (tab) | Pass | Past Employee tab → Krishna Trivedi panel: 0 buttons; `/employee/<id>?type=past`: 0 buttons. `023-past-employee-panel.png`, `023-past-profile-type-past.png` |
| TC-ADMLGA-024 | Past employee via plain profile URL | **Fail (B4)** | `/employee/62c09498-…` without `?type=past` shows "Login as Krishna"; Yes, Login → toast "The user you are trying to impersonate does not exist". `024-past-profile-no-param.png`, `024-past-profile-confirm-toast.png` |
| TC-ADMLGA-025 | No chaining while impersonating | Pass (UX gap B6) | Admin-as-Bhumi and PMO-as-Vihaan both still see "Login as Kashyap"; confirm → toast "You are already impersonating a user. Exit the current session before starting another."; API → 403 same message; identity unchanged. `025-admin-as-pmo-chaining-toast.png`, `025-chaining-refused-toast.png`, `B6-login-as-visible-while-impersonating-pmo.png` |
| TC-ADMLGA-026 | Logout while impersonating | Pass | User menu → Logout → "Confirm Logout?" → /login; metadata 401. Fresh PMO login afterwards: normal session, no banner. `026-after-logout-while-impersonating.png` |
| TC-ADMLGA-030 | API refuses non-permitted roles | Pass | EM and Employee `POST /auth/impersonate/<id>` → 403 "Access forbidden"; metadata afterwards still their own account (cookies unchanged) |
| TC-ADMLGA-031 | Self via API | Pass | 400 "You cannot impersonate your own account" |
| TC-ADMLGA-032 | Invalid / unknown id | Pass | `not-a-uuid` → 400 "Validation failed (uuid is expected)"; random UUID → 404 "The user you are trying to impersonate does not exist" |
| TC-ADMLGA-033 | Admin target via API | Pass | 403 "Only an administrator can log in as another administrator"; PMO session still valid afterwards |
| TC-ADMLGA-034 | Exit without impersonation | Pass | 400 "No active impersonation session found" |
| TC-ADMLGA-035 | Exit with no cookies | Pass | 401 "Unauthorized access" |
| TC-ADMLGA-036 | Original session revoked on start | Pass | Replaying the PMO's pre-start cookies → `GET /employees/metadata` 401 |
| TC-ADMLGA-037 | Impersonated session revoked on exit | Pass | Replaying saved impersonation cookies after Return: metadata 401, exit-impersonation 401, refresh 401 "Invalid or revoked refresh token" |
| TC-ADMLGA-038 | Metadata flags | Pass | PMO-started: `isImpersonating:true, impersonatorRole:"PMO"`; Admin-started: `"ADMIN"`; normal sessions: `false/null` |
| TC-ADMLGA-039 | Refresh keeps impersonation | Pass | `POST /auth/refresh` 201 → still kashyap, `imp=true by=PMO`; exit worked afterwards |
| TC-ADMLGA-040 | Cross-origin request blocked | Pass | `Origin: https://evil.example` → 403 "Access forbidden", no impersonation. Note: a request with no Origin header (non-browser client) is accepted (200), which is expected because browsers always send Origin on cross-site POST. That session was exited immediately |
| TC-ADMLGA-041 | Target lastLoginAt not touched | Blocked | `lastLoginAt` is not exposed in any UI or API response (`GET /employees/:id` as Admin has no login field) |
| TC-ADMLGA-042 | Real user unaffected | Pass | Kashyap's own parallel session stayed `kashyap imp=false` (200) before, during and after the PMO impersonation |
| TC-ADMLGA-043 | Audit of actions during impersonation (B1) | Cannot verify via UI | One edit made as PMO-as-Kashyap and reverted (see below). The app has no audit or activity view: Admin menu = Roles & Permissions / Assign User Roles / Contractors; `/audit-logs`, `/audit`, `/activity-logs` API → 404. The profile only shows Kashyap. `B1-admin-menu-no-audit-view.png` |
| TC-ADMLGA-044 | Rights removed mid-session | Not run — needs approval | Requires removing the PMO role |
| TC-ADMLGA-045 | Second tab picks up impersonation | Pass (behaviour documented, B8) | Before reload, tab 2 (still showing PMO's Employee Details, no banner) was already making API calls as `kashyap imp=true`. After reload it shows the banner (and /unauthorized, since Employee cannot open /employee). `045-second-tab-after-reload.png` |
| TC-ADMLGA-050 | Keyboard flow | Pass | Login as focusable, Enter opens dialog; initial focus = Cancel; Tab cycles Yes, Login ↔ Cancel only (focus trapped); Enter on Yes, Login starts; Return to PMO focusable and Enter exits |
| TC-ADMLGA-051 | Banner hover style | Pass | Return button bg `oklch(0.681 0.162 75.834)` / white text before and during hover. `051-return-button-hover.png` |
| TC-ADMLGA-052 | Avatar menu label | Pass | `aria-label="kashyap.patel@simformsolutions.com - User menu - You are currently logged in as Kashyap Patel"` |
| A11y banner (B11) | Banner role | Info (confirmed) | Banner is `role="alert"` on every page, so it is announced on each page load |
| Admin regression | Admin still works as before | Pass | Admin start/return works; /admin/roles, /employee, /projects reachable after returning |

---

## Confirmed defects

### D1 — Past employee profile (no `?type=past`) offers "Login as" that always fails (B4)
- **Severity:** Low
- **Steps:** Log in as PMO (or Admin). Open `https://simerp-dev.simform.solutions/employee/62c09498-41fe-4a00-9f75-c96deb378783` (Krishna Trivedi, past employee) without `?type=past`. Click "Login as Krishna" → Yes, Login.
- **Expected:** No Login as button for a past employee, the same as with `?type=past` and in the Past Employee panel.
- **Actual:** The button is shown. Confirming gives the toast "The user you are trying to impersonate does not exist" (API 404). The page decides "past" from the URL, not from the data.
- **Evidence:** `024-past-profile-no-param.png`, `024-past-profile-confirm-toast.png`; with `?type=past`: `023-past-profile-type-past.png`.
- Side note: the same past-employee profile header shows a "Notice Period" badge, although the employee was deleted on 16 Sep 2026.

### D2 — Impersonation session has no shorter time limit (B3)
- **Severity:** Medium (security hardening)
- **Steps:** As PMO, Login as Kashyap. Inspect the API cookies, then call `POST /auth/refresh`.
- **Expected:** A support/troubleshooting session should have a short limit (e.g. 30–60 min), with no long-lived refresh.
- **Actual:** Started 2026-10-15T09:44:29Z with `accessToken` expiring 2026-10-16T09:44:29Z (24 h) and `refreshToken` expiring 2026-10-22T09:44:29Z (7 days). This is the same as a normal login (EM login: 24 h / 7 days). Refresh works and keeps the impersonation (`imp=true by=PMO`).
- **Evidence:** cookie expiries captured in the run log (no screenshot possible; cookies are httpOnly).

### D3 — Other open tabs silently become the impersonated user (B8)
- **Severity:** Low
- **Steps:** As PMO, open Employee Details in tab 2. In tab 1, Login as Kashyap. Go back to tab 2 without reloading.
- **Expected:** Tab 2 is told that the session changed (banner, or a forced reload).
- **Actual:** Tab 2 keeps showing the PMO UI with no banner, but every API call it makes now runs as Kashyap (`kashyap imp=true`). The banner only appears after a reload.
- **Evidence:** `045-second-tab-after-reload.png`; run log.

### D4 — PMO is shown "Login as" on Admin profiles and panels (B5)
- **Severity:** Low (UX)
- **Steps:** As PMO, open `/employee/d0837174-…` (ceo@) or ceo@'s side panel.
- **Expected:** The button is hidden or disabled for a target the PMO can never open.
- **Actual:** "Login as Chief" is shown. It fails only after confirm, with the toast "Only an administrator can log in as another administrator".
- **Evidence:** `020-pmo-sees-login-as-on-admin.png`, `020-pmo-admin-target-refused.png`.

### D5 — "Login as" still offered while already impersonating a PMO/Admin (B6)
- **Severity:** Low (UX)
- **Steps:** Admin → Login as Bhumi (PMO), or PMO → Login as Vihaan (PMO). Open any employee profile.
- **Expected:** The button is hidden during an impersonation session.
- **Actual:** "Login as Kashyap" is visible. Confirming gives "You are already impersonating a user. Exit the current session before starting another."
- **Evidence:** `B6-login-as-visible-while-impersonating-pmo.png`, `025-admin-as-pmo-chaining-toast.png`.

### D6 — Release note / help text does not match behaviour (B12)
- **Severity:** Low (docs)
- **Actual:** The 6.4.2 note says "**Admins** can now start Login as straight from the employee side panel" (PMO can too). The help topic "See SimERP as someone else (Login as)" step 1 says "Open the employee's full profile" and does not mention the side panels. The project side panel entry point is not documented anywhere.
- **Evidence:** `015-whats-new-642-pmo.png`, `015-help-topic.png`.

### Not confirmed
- **B1 (audit attribution):** Cannot verify via UI. PMO-as-Kashyap made one edit through `PATCH /profile`: LinkedIn `null` → `https://www.linkedin.com/in/qa-login-as-b1-check` at 2026-10-15T09:45:06Z (200 PROF_003), then reverted to `null` (200). The app has no audit or activity view and no audit API. Nothing in the profile or the metadata shows who made the edit; the change only appears as Kashyap's own data. The code shows the profile update service writes no audit record at all (only a plain `logger.log`). A developer must check server logs for 09:45:06Z to confirm what actor, if any, was recorded. Why the API was used instead of the Edit Profile form: the form has a required Location Preference that is empty for Kashyap and pre-filled to WFO, so saving it could not be reverted to the original empty value. The API call is the same endpoint the form uses, sending only `linkedinUrl`.
- **B2/B9:** Not tested (TC-044 needs approval).

---

## Clean-up confirmation
- Every impersonation was exited. Each scenario ended with "Return to PMO/Admin" (UI), a logout (026), or a safety `POST /auth/exit-impersonation`; one session was started by the TC-040 no-Origin probe and exited immediately. Each script's final metadata check reported "not impersonating" for every Admin/PMO/EM/Employee context. Impersonated sessions: Kashyap (×6), Yatharth, Zalak (×2), Arnav, Diya, Vihaan, Bhumi (by Admin), all exited.
- The PMO-as-Kashyap profile edit was reverted. Kashyap's `linkedinUrl` was `null` before, the test URL after the edit, and `null` again after the revert. This was re-checked with a fresh Kashyap login at the end (`linkedinUrl = null`, `isImpersonating = false`).
- No roles or permissions were changed. hardik.trivedi@, tarun.sharma@ and sudhansu.patel@ were not touched, and no shared `storageState*.json` file was read or written.
