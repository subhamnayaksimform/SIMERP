# Login as User (Admin + PMO) — code brief for QA

**Summary**
1. SI4-T1525 gives PMO the same "Login as <first name>" (impersonate) power Admin already had (SI4-T1013); a PMO can never log in as an Admin (403 "Only an administrator can log in as another administrator").
2. SI4-T1531 adds the same button to the employee side panel (slider) on Employee Details (and the project team side panel, which reuses it), next to the reporting manager.
3. While impersonating, a yellow banner on every page says "You are currently logged in as **<Name>**" with a "Return to Admin" / "Return to PMO" button.
4. Backend: `POST /auth/impersonate/:publicId` (CASL `employees.impersonate`) and public `POST /auth/exit-impersonation`; start/exit/denied are audited, but everything done *during* impersonation is logged as the impersonated user.
5. Starting impersonation revokes the Admin/PMO's own session (cookies are swapped) — this breaks shared `storageState` fixtures, so automation must log in fresh for these tests.

Source: `origin/development` of `SIMERP DEV/backend` (commits 65b8ad51, b81c96ba; base feature 3f41efc5) and `SIMERP DEV/frontend` (5fe2a49b, 735b31dc for T1525; ad5cadc5, 3a371294 for T1531; base 62fe357f). Read from code only — nothing tested live yet. Release: What's New 6.4.2.

---

## 1. What was built

### Entry points
| Where | Route / component | Shown when |
|---|---|---|
| Full employee profile header | `/employee/:id` → `EmployeeViewHeader.tsx:144` | Viewer has `impersonate` on `employees`, the profile is not their own, and the URL has no `?type=past` |
| Employee side panel (slider) — **new in T1531** | Employee Details list → click an employee → `detailPanelHelpers.tsx:269` (`PanelImpersonateButton`), right of the reporting-manager name, small size | Same ability + not self + panel not loading + not opened from the Past Employee tab |
| Project page side panel | `EmployeeFromProjectSidePanel.tsx` reuses the same `EmployeeDetailSidePanel`, so the button also shows there | Same rules (not mentioned in the release note) |

### Exact UI strings (`src/constants/impersonation/labels.ts`)
| Element | Text |
|---|---|
| Button | `Login as <FirstName>` (only the first word of the name, e.g. "Login as Kashyap"), icon SquareUser |
| Confirm dialog title | `Login as <Full Name>?` |
| Confirm dialog body | `Are you sure you want to log in as **<Full Name>**? This action is intended for support & troubleshooting purposes.` |
| Confirm / cancel | `Yes, Login` / `Cancel` |
| Banner (`role="alert"`, yellow, every page via `MainLayout`) | `You are currently logged in as **<Name>**` |
| Exit button in banner | `Return to Admin` (Admin started it, and also the fallback) / `Return to PMO` (PMO started it) |
| Avatar in header | small yellow dot on the avatar; user menu aria-label becomes `<email> - User menu - You are currently logged in as <Name>` |
| Start-failure toast | Server message if any, else `Could not start impersonation. Please try again.` |
| Exit-failure toast | Always `Could not exit impersonation. Please try again.` (server message not shown) |

### Server messages (`auth-messages.constant.ts`)
| Code | HTTP | Message |
|---|---|---|
| AUTH_013 | 200 | Impersonation session started |
| AUTH_014 | 200 | Returned to your account |
| AUTH_015 | 400 | You cannot impersonate your own account |
| AUTH_016 | 403 | You are already impersonating a user. Exit the current session before starting another. |
| AUTH_017 | 400 | No active impersonation session found |
| AUTH_018 | 404 | The user you are trying to impersonate does not exist |
| AUTH_022 | 403 | Only an administrator can log in as another administrator |

### Flow
1. Click "Login as X" → confirm "Yes, Login" → `POST /auth/impersonate/<publicId>`.
2. On success the browser does a full reload to `/profile` (the impersonated user's own profile). Navigation, menus and permissions are now exactly the target's.
3. Banner shows on every page. Click "Return to Admin/PMO" → `POST /auth/exit-impersonation` → full reload to `/login`, which redirects to the Admin/PMO's default landing page (not back to the employee they were viewing).
4. Logout from the user menu while impersonating ends the impersonated session and goes to `/login`; the Admin/PMO must sign in again (their own session was already revoked at step 1).

Help topic "See SimERP as someone else (Login as)" (`content/help/details.json`) still says "Open the employee's full profile" — it does not mention the side panel.

---

## 2. Who can use it

| Role | Sees button / can call API | Notes |
|---|---|---|
| ADMIN (ceo@) | Yes | Can impersonate anyone, including other Admins (holds `employees.impersonate_admin`) |
| PMO (bhumi.chauhan@) | Yes (new) | Can impersonate anyone **except** a user who holds `employees.impersonate_admin` (= ADMIN role) |
| PM, TM, EM, CSM, Employee | No | No `employees.impersonate` grant; API returns 403 |

Target restrictions (backend `auth.service.ts:554-618`):
- Self → 400 AUTH_015 (button also hidden on own profile/panel).
- Admin target by a PMO → 403 AUTH_022, audited as DENIED. The button is **still shown** to the PMO on an Admin's profile; refusal only appears as a toast after confirm.
- PMO → another PMO: allowed (a PMO target is not protected).
- Past employee (soft-deleted, `deletedAt` set) → 404 AUTH_018. UI hides the button only when the page knows it is a past employee (see bug B4).
- There is no other "inactive" state on Employee (no status/isActive column); notice-period / PIP employees are impersonatable.
- Chaining: an impersonated session can never start another impersonation → 403 AUTH_016 (`auth.controller.ts:263`). Relevant when an Admin impersonates a PMO/Admin — that session still holds the `impersonate` ability, so the "Login as" buttons are still visible to them.

---

## 3. Backend details

**Endpoints**
- `POST /auth/impersonate/:publicId` — `@CheckAbility(Action.IMPERSONATE, ModuleName.EMPLOYEES)`, `ParseUUIDPipe` on the id (non-UUID → 400). `auth.controller.ts:254-282`.
- `POST /auth/exit-impersonation` — `@Public()`, cookie-driven. `auth.controller.ts:300-314`.
- `GET /employees/metadata` now returns `isImpersonating: boolean` and `impersonatorRole: 'ADMIN' | 'PMO' | null` (ADMIN wins if the impersonator holds both; null if not impersonating or the impersonator no longer holds either role).

**Permissions (migrations)**
- `20260804000100_seeder_impersonation_rbac` — `employees.impersonate` to ADMIN, scope ALL.
- `20261013100000_seeder_pmo_impersonation_rbac` — `employees.impersonate` to PMO (ALL) + new `employees.impersonate_admin` to ADMIN only. Upsert, restores soft-deleted grants.
- The admin-protection rule is grant-based: anyone whose roles include `impersonate_admin` is protected; anyone holding it can open them.

**Token/session handling**
- Start: verifies target exists (not deleted), not self, impersonator not deleted, admin-protection check → **revokes the impersonator's current access+refresh rows** (`auth.service.ts:602`) → mints a new session for the target with JWT claim `impersonatedBy=<impersonator id>`; `refresh_tokens.impersonatedBy` is filled on both rows → cookies replaced.
- Same lifetimes as normal sessions: access `jwt.accessTokenExpire` (default 1d), refresh `jwt.refreshTokenExpire` (default 7d). No shorter limit for impersonation.
- Refresh keeps the `impersonatedBy` claim (`auth.service.ts:838`).
- Exit: verifies the access token and that its session row is still live (needed because the route is public), reads `impersonatedBy`, checks the impersonator still exists (not deleted), revokes the impersonated session, mints a fresh session for the impersonator with no SSO (`auth.service.ts:628-660`). It does **not** check the impersonator still holds the impersonate permission — they simply get their own normal session back.
- Session revocation emits `SESSION_REVOKED` so the notification socket for the old session is closed.
- `lastLoginAt` of the target is **not** updated by impersonation (good — worth a check).
- Target's own sessions are untouched; the real user can be logged in at the same time. There is no single-session-per-user rule anywhere in auth (login never revokes other sessions).
- CSRF: cookies are `SameSite=None`, but `cors.middleware.ts` rejects any request whose Origin is not on the allow-list with 403, which blocks cross-site POSTs from a browser.

**Audit logging**
- `IMPERSONATE` success: actorId = impersonator publicId, targetId = target publicId.
- `IMPERSONATE` DENIED (admin target): reason `target holds employees.impersonate_admin`.
- `EXIT_IMPERSONATION`: actor = impersonator.
- `TOKEN_REFRESH` gets `metadata.isImpersonation`.
- Not audited: self / not-found / non-permitted (403 from CASL guard) attempts are only generic errors.

---

## 4. Risks and suspected bugs

| # | Severity | Finding | Where |
|---|---|---|---|
| B1 | High (audit) | Actions done **while impersonating** are logged and stored as the impersonated user. `logger.audit` falls back to the request's userId (= target), and nothing in request context carries `impersonatedBy`. `createdBy`-style DB columns will also name the target. A PMO's edits made "as Kashyap" are indistinguishable from Kashyap's own, except by joining `refresh_tokens.impersonatedBy` by time. | `backend/src/common/services/logger.service.ts:163`; `src/core/guards/auth.guard.ts:76` |
| B2 | Medium | The impersonation session is not tied to the impersonator's ongoing rights. If the PMO's role is removed (or PMO grant revoked) mid-session, the session keeps working and keeps refreshing for up to 7 days. Guard only checks the target's session row and that the target is not deleted. | `auth.guard.ts:71`; `auth.service.ts:838` |
| B3 | Medium | No shorter time limit on impersonation: same 1d access / 7d refresh as a normal login. | `auth.service.ts` `generateAuthTokens` |
| B4 | Low | Profile page decides "past employee" from the URL (`?type=past`), not from data. Opening a past employee's profile link without that param shows "Login as X"; confirming gives the 404 toast "The user you are trying to impersonate does not exist". | `frontend/src/pages/employee-view/EmployeeViewPage.tsx:203`, `EmployeeViewHeader.tsx:115,144` |
| B5 | Low (UX) | PMO sees "Login as <Admin>" on Admin profiles/panels; it only fails after confirm (by design per release note, but a hidden/disabled button would be better). | `ImpersonateUserButton.tsx:32-37` |
| B6 | Low (UX) | While impersonating a PMO/Admin, "Login as" buttons still appear; clicking gives 403 AUTH_016. | `ImpersonateUserButton.tsx:32` |
| B7 | Low | Exit-failure toast ignores the server message, always generic. If the impersonator was deleted meanwhile, exit returns 401 → frontend refresh/retry → likely redirect to login. | `frontend/src/hooks/auth/mutations.ts:67-68` |
| B8 | Low | Starting impersonation revokes the Admin/PMO's own session **before** minting the new one; if minting fails, they are simply logged out. Other open tabs of the Admin/PMO silently become the impersonated user on their next request (shared cookies), with no banner until they reload. | `auth.service.ts:602-604` |
| B9 | Low | "Return to Admin" is the fallback label, so a session started by a PMO whose PMO role was later removed (or any other role granted `impersonate` through Roles admin) shows "Return to Admin". | `ImpersonationBanner.tsx:25`, `employee-impersonator-role.util.ts` |
| B10 | Info | PMO can impersonate any non-admin role, including roles with permissions PMO lacks (e.g. CSM-only project team table, goal_manager). Effectively PMO ≈ union of all non-admin permissions. Confirm this is intended. | design |
| B11 | Info | Banner uses `role="alert"`, so screen readers announce it on every page load. | `ImpersonationBanner.tsx:29` |
| B12 | Info | Docs drift: help topic says "Open the employee's full profile" only; T1531 release note says "Admins can now start Login as…" (PMO too); project side panel entry point not mentioned. | `content/help/details.json`, `releases/6.4.2/changes/SI4-T1531.json` |
| B13 | Info | Impersonator receives the target's in-app notifications during the session and may mark them read on the target's behalf. | notifications gateway |

**Automation warning:** "Login as" revokes the session it was started from. Do not run these tests on the shared `storageState` for ceo@/bhumi.chauhan@ while other tests use it in parallel — use a fresh login per test (e.g. dev-login inside the test) and run the file in serial mode, and always end with "Return to …" or a logout.

---

## 5. Draft test cases

Accounts: **A** = ceo@ (Admin), **P** = bhumi.chauhan@ (PMO), **PM** = hardik.trivedi@, **TM** = sudhansu.patel@, **EM** = kunal.jadeja@, **CSM** = tarun.sharma@, **E** = kashyap.patel@ (all @simformsolutions.com, shared password). Preconditions for all: fresh login (not the shared storage state).

### Positive
| ID | Title | Role | Steps | Expected |
|---|---|---|---|---|
| TC-ADMLGA-001 | PMO sees Login as on employee profile | P | Open `/employee/<E publicId>` | Button "Login as Kashyap" visible in header |
| TC-ADMLGA-002 | PMO sees Login as in Employee Details side panel | P | Employee Details → click Kashyap Patel row | Side panel shows "Login as Kashyap" next to reporting manager; long RM names truncate with ellipsis, button stays visible |
| TC-ADMLGA-003 | Confirm dialog text | P | Click "Login as Kashyap" | Dialog title "Login as Kashyap Patel?", body "Are you sure you want to log in as Kashyap Patel? This action is intended for support & troubleshooting purposes.", buttons "Yes, Login" / "Cancel" |
| TC-ADMLGA-004 | Cancel does nothing | P | Open dialog → Cancel | Dialog closes, still PMO, no banner, no network call to /auth/impersonate |
| TC-ADMLGA-005 | PMO logs in as employee | P | Login as Kashyap → Yes, Login | Reloads to `/profile` showing Kashyap's profile; banner "You are currently logged in as Kashyap Patel"; exit button "Return to PMO"; yellow dot on avatar; sidebar shows Employee-level menus only |
| TC-ADMLGA-006 | Banner persists across pages and reload | P (as E) | Navigate several pages, press F5 | Banner on every page after reload |
| TC-ADMLGA-007 | Return to PMO | P (as E) | Click "Return to PMO" | Reload → lands on PMO default page as Bhumi; banner gone; PMO menus back; no SSO prompt |
| TC-ADMLGA-008 | Admin logs in as employee and returns | A | Login as Kashyap (profile) → Return to Admin | Banner shows "Return to Admin"; return restores Admin |
| TC-ADMLGA-009 | Admin logs in as PMO | A | Login as Bhumi | Allowed; banner "Return to Admin"; PMO pages visible |
| TC-ADMLGA-010 | Login as from side panel (Admin) | A | Employee Details → open TM panel → Login as Sudhansu | Impersonation starts, lands on `/profile` of Sudhansu |
| TC-ADMLGA-011 | Login as from project team side panel | P | Projects → a project → click a team member to open side panel | "Login as <name>" visible and works (or log as gap if not intended) |
| TC-ADMLGA-012 | PMO logs in as PM / TM / EM / CSM | P | Repeat 005 for PM, TM, EM, CSM | Each succeeds; UI matches that role (e.g. CSM sees project team table) |
| TC-ADMLGA-013 | PMO logs in as another PMO | P (needs a 2nd PMO account) | Login as other PMO | Allowed (by current code) |
| TC-ADMLGA-014 | Data as seen by employee | P (as E) | Compare Kashyap's dashboard with a real Kashyap login | Same data and permissions |
| TC-ADMLGA-015 | What's New / help entry | P | Open What's New 6.4.2 and Help → "See SimERP as someone else (Login as)" | Entries visible to P (requires impersonate); not visible to E |

### Negative / permission
| ID | Title | Role | Steps | Expected |
|---|---|---|---|---|
| TC-ADMLGA-020 | PMO cannot log in as Admin | P | Open ceo@ profile → Login as → Yes, Login | Toast "Only an administrator can log in as another administrator"; still PMO; no banner. Note: button is visible (B5) |
| TC-ADMLGA-021 | Button hidden on own profile and own panel | P, A | Open own profile and own side panel | No Login as button |
| TC-ADMLGA-022 | Button hidden for non-permitted roles | PM, TM, EM, CSM, E | Open another employee's profile/panel (where reachable) | No Login as button |
| TC-ADMLGA-023 | Button hidden for past employee (tab) | P | Employee Details → Past Employee tab → open a past employee panel / profile | No Login as button |
| TC-ADMLGA-024 | Past employee via plain profile URL | P | Open `/employee/<past publicId>` without `?type=past` | Expected hidden; code shows button → confirm gives "The user you are trying to impersonate does not exist" (B4) |
| TC-ADMLGA-025 | No chaining while impersonating | A as P | While logged in as Bhumi, open Kashyap → Login as → confirm | Toast "You are already impersonating a user. Exit the current session before starting another."; stays as Bhumi (button visibility itself is B6) |
| TC-ADMLGA-026 | Logout while impersonating | P (as E) | User menu → Logout → confirm | Goes to login; both sessions gone; logging back in gives normal PMO session, no banner |

### Security / API (call with the account's cookie; use the API origin /api/v1)
| ID | Title | Role | Steps | Expected |
|---|---|---|---|---|
| TC-ADMLGA-030 | API refuses non-permitted roles | PM, TM, EM, CSM, E | `POST /auth/impersonate/<other publicId>` | 403; cookies unchanged |
| TC-ADMLGA-031 | Self via API | P | `POST /auth/impersonate/<own publicId>` | 400 "You cannot impersonate your own account" |
| TC-ADMLGA-032 | Invalid / unknown id | P | Non-UUID id; random UUID | 400 (validation); 404 "The user you are trying to impersonate does not exist" |
| TC-ADMLGA-033 | Admin target via API | P | `POST /auth/impersonate/<ceo publicId>` | 403 AUTH_022; PMO session still valid afterwards |
| TC-ADMLGA-034 | Exit without impersonation | P (normal session) | `POST /auth/exit-impersonation` | 400 "No active impersonation session found" |
| TC-ADMLGA-035 | Exit with no cookies | none | `POST /auth/exit-impersonation` with no cookies | 401 |
| TC-ADMLGA-036 | Original session is revoked on start | P | Save P's cookies → start Login as → replay old cookies on any API | 401 |
| TC-ADMLGA-037 | Impersonated session revoked on exit | P | Save impersonation cookies → Return to PMO → replay saved cookies, and call exit-impersonation with them | 401 on both (cannot mint a 2nd PMO session from an old token) |
| TC-ADMLGA-038 | Metadata flags | P (as E) | `GET /employees/metadata` | `isImpersonating: true`, `impersonatorRole: "PMO"`; for Admin-started → `"ADMIN"`; normal session → `false` / `null` |
| TC-ADMLGA-039 | Refresh keeps impersonation | P (as E) | Call `/auth/refresh`, then metadata, then exit | Still impersonating after refresh; exit works |
| TC-ADMLGA-040 | Cross-origin request blocked | P | Send `POST /auth/impersonate/<id>` with `Origin: https://evil.example` | 403 from CORS middleware; no impersonation |
| TC-ADMLGA-041 | Target lastLoginAt not touched | A | Note E's last login → impersonate E → check | Unchanged |
| TC-ADMLGA-042 | Real user unaffected | P + E (two browsers) | E logged in; P logs in as E; both act; P returns | E's own session keeps working throughout |
| TC-ADMLGA-043 | Audit of actions during impersonation | P (as E) | Make a harmless edit as E (e.g. own skill/profile field); check audit/log or createdBy | Expected: record shows it was done by PMO on behalf of E. Code: shows only E (B1) — log as defect if confirmed |
| TC-ADMLGA-044 | Rights removed mid-session | A + P | P starts Login as E; A removes P's PMO role; P keeps using app / refresh | Expected: session ends. Code: continues; exit label falls back to "Return to Admin" (B2, B9). Restore the role afterwards |
| TC-ADMLGA-045 | Second tab picks up impersonation | P | Tab 1 and Tab 2 as P; Login as E in Tab 1; reload Tab 2 | Tab 2 is now E with banner (shared cookies) — document behaviour (B8) |

### Accessibility / UI
| ID | Title | Role | Steps | Expected |
|---|---|---|---|---|
| TC-ADMLGA-050 | Keyboard flow | P | Tab to Login as → Enter → Tab to Yes, Login → Enter; Tab to Return to PMO → Enter | All reachable and operable by keyboard; focus trapped in dialog |
| TC-ADMLGA-051 | Banner hover style | P (as E) | Hover "Return to PMO" | Stays yellow with white text (T1531 fix) |
| TC-ADMLGA-052 | Avatar menu label | P (as E) | Inspect user menu button | aria-label "<email> - User menu - You are currently logged in as Kashyap Patel" |

### Account suitability
- **ceo@ (Admin)**: 008-010, 025 (as impersonator of P), 041, 044 (to remove/restore P's role). Also the protected target for 020/033.
- **bhumi.chauhan@ (PMO)**: main actor for most positive, negative and API cases.
- **kashyap.patel@ (Employee)**: default target; 042 second browser; 022/030 as a non-permitted caller.
- **hardik.trivedi@, sudhansu.patel@, kunal.jadeja@, tarun.sharma@**: targets for 012 and non-permitted callers for 022/030.
- **TC-ADMLGA-013** needs a second PMO account (not in the list). **TC-ADMLGA-044** changes roles — run only with care and restore immediately.
