# Admin — Test Cases

**Total test cases:** 41  
**Modules covered:** Admin  
**Source:** `reports/test-cases/cases-2026-10-15-ADMLGA-login-as-user.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| security | 16 | 39.0% |
| functional | 11 | 26.8% |
| negative | 6 | 14.6% |
| smoke | 5 | 12.2% |
| accessibility | 3 | 7.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 15 | 36.6% |
| medium | 14 | 34.1% |
| critical | 7 | 17.1% |
| low | 5 | 12.2% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 15 | 36.6% |
| medium | 13 | 31.7% |
| critical | 7 | 17.1% |
| low | 6 | 14.6% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 39 | 95.1% |
| code-review | 2 | 4.9% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 39 | 95.1% |
| code-review | 2 | 4.9% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 36 | 87.8% |
| No | 5 | 12.2% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @security | 16 | 39.0% |
| @functional | 11 | 26.8% |
| @negative | 6 | 14.6% |
| @smoke | 5 | 12.2% |
| @a11y | 3 | 7.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-ADMLGA-001](#tc-admlga-001-pmo-sees-login-as-on-employee-profile) | PMO sees Login as on employee profile | Admin | smoke | high |
| [TC-ADMLGA-002](#tc-admlga-002-pmo-sees-login-as-in-employee-details-side-panel) | PMO sees Login as in Employee Details side panel | Admin | smoke | high |
| [TC-ADMLGA-003](#tc-admlga-003-confirm-dialog-text) | Confirm dialog text | Admin | functional | medium |
| [TC-ADMLGA-004](#tc-admlga-004-cancel-does-nothing) | Cancel does nothing | Admin | functional | medium |
| [TC-ADMLGA-005](#tc-admlga-005-pmo-logs-in-as-employee) | PMO logs in as employee | Admin | smoke | critical |
| [TC-ADMLGA-006](#tc-admlga-006-banner-persists-across-pages-and-reload) | Banner persists across pages and reload | Admin | functional | high |
| [TC-ADMLGA-007](#tc-admlga-007-return-to-pmo) | Return to PMO | Admin | smoke | critical |
| [TC-ADMLGA-008](#tc-admlga-008-admin-logs-in-as-employee-and-returns) | Admin logs in as employee and returns | Admin | smoke | high |
| [TC-ADMLGA-009](#tc-admlga-009-admin-logs-in-as-pmo) | Admin logs in as PMO | Admin | functional | high |
| [TC-ADMLGA-010](#tc-admlga-010-login-as-from-side-panel-admin) | Login as from side panel (Admin) | Admin | functional | high |
| [TC-ADMLGA-011](#tc-admlga-011-login-as-from-project-team-side-panel) | Login as from project team side panel | Admin | functional | medium |
| [TC-ADMLGA-012](#tc-admlga-012-pmo-logs-in-as-pm-tm-em-csm) | PMO logs in as PM / TM / EM / CSM | Admin | functional | high |
| [TC-ADMLGA-013](#tc-admlga-013-pmo-logs-in-as-another-pmo) | PMO logs in as another PMO | Admin | functional | medium |
| [TC-ADMLGA-014](#tc-admlga-014-data-as-seen-by-employee) | Data as seen by employee | Admin | functional | medium |
| [TC-ADMLGA-015](#tc-admlga-015-what-s-new-help-entry) | What's New / help entry | Admin | functional | low |
| [TC-ADMLGA-020](#tc-admlga-020-pmo-cannot-log-in-as-admin) | PMO cannot log in as Admin | Admin | negative | critical |
| [TC-ADMLGA-021](#tc-admlga-021-button-hidden-on-own-profile-and-own-panel) | Button hidden on own profile and own panel | Admin | negative | high |
| [TC-ADMLGA-022](#tc-admlga-022-button-hidden-for-non-permitted-roles) | Button hidden for non-permitted roles | Admin | negative | high |
| [TC-ADMLGA-023](#tc-admlga-023-button-hidden-for-past-employee-tab) | Button hidden for past employee (tab) | Admin | negative | medium |
| [TC-ADMLGA-024](#tc-admlga-024-past-employee-via-plain-profile-url) | Past employee via plain profile URL | Admin | negative | medium |
| [TC-ADMLGA-025](#tc-admlga-025-no-chaining-while-impersonating) | No chaining while impersonating | Admin | negative | high |
| [TC-ADMLGA-026](#tc-admlga-026-logout-while-impersonating) | Logout while impersonating | Admin | functional | high |
| [TC-ADMLGA-030](#tc-admlga-030-api-refuses-non-permitted-roles) | API refuses non-permitted roles | Admin | security | critical |
| [TC-ADMLGA-031](#tc-admlga-031-self-via-api) | Self via API | Admin | security | high |
| [TC-ADMLGA-032](#tc-admlga-032-invalid-unknown-id) | Invalid / unknown id | Admin | security | medium |
| [TC-ADMLGA-033](#tc-admlga-033-admin-target-via-api) | Admin target via API | Admin | security | critical |
| [TC-ADMLGA-034](#tc-admlga-034-exit-without-impersonation) | Exit without impersonation | Admin | security | medium |
| [TC-ADMLGA-035](#tc-admlga-035-exit-with-no-cookies) | Exit with no cookies | Admin | security | medium |
| [TC-ADMLGA-036](#tc-admlga-036-original-session-is-revoked-on-start) | Original session is revoked on start | Admin | security | critical |
| [TC-ADMLGA-037](#tc-admlga-037-impersonated-session-revoked-on-exit) | Impersonated session revoked on exit | Admin | security | critical |
| [TC-ADMLGA-038](#tc-admlga-038-metadata-flags) | Metadata flags | Admin | security | medium |
| [TC-ADMLGA-039](#tc-admlga-039-refresh-keeps-impersonation) | Refresh keeps impersonation | Admin | security | medium |
| [TC-ADMLGA-040](#tc-admlga-040-cross-origin-request-blocked) | Cross-origin request blocked | Admin | security | high |
| [TC-ADMLGA-041](#tc-admlga-041-target-lastloginat-not-touched) | Target lastLoginAt not touched | Admin | security | low |
| [TC-ADMLGA-042](#tc-admlga-042-real-user-unaffected) | Real user unaffected | Admin | security | high |
| [TC-ADMLGA-043](#tc-admlga-043-audit-of-actions-during-impersonation) | Audit of actions during impersonation | Admin | security | high |
| [TC-ADMLGA-044](#tc-admlga-044-rights-removed-mid-session) | Rights removed mid-session | Admin | security | medium |
| [TC-ADMLGA-045](#tc-admlga-045-second-tab-picks-up-impersonation) | Second tab picks up impersonation | Admin | security | low |
| [TC-ADMLGA-050](#tc-admlga-050-keyboard-flow) | Keyboard flow | Admin | accessibility | medium |
| [TC-ADMLGA-051](#tc-admlga-051-banner-hover-style) | Banner hover style | Admin | accessibility | low |
| [TC-ADMLGA-052](#tc-admlga-052-avatar-menu-label) | Avatar menu label | Admin | accessibility | low |

---

## Admin

41 test cases.

### Accessibility (3)

#### TC-ADMLGA-050 — Keyboard flow

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Keyboard |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO on Kashyap Patel's profile.

**Steps**

1. Tab to "Login as Kashyap" and press Enter
2. Tab through the dialog
3. Tab to "Yes, Login" and press Enter
4. Tab to "Return to PMO" and press Enter

**Expected**

All controls are reachable and operable by keyboard; focus is trapped in the dialog

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-051 — Banner hover style

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1531 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094559186 |
| **Sub Module** | Impersonation banner |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Hover over "Return to PMO"
2. Check background and text colour before and during hover

**Expected**

Button stays yellow with white text (T1531 fix)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-052 — Avatar menu label

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Header avatar |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Inspect the user menu button's aria-label

**Expected**

aria-label "<email> - User menu - You are currently logged in as Kashyap Patel"

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

### Functional (11)

#### TC-ADMLGA-003 — Confirm dialog text

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Confirm dialog |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO on Kashyap Patel's profile.

**Steps**

1. Click "Login as Kashyap"
2. Read the dialog title, body and buttons

**Expected**

Dialog title "Login as Kashyap Patel?"; body "Are you sure you want to log in as Kashyap Patel? This action is intended for support & troubleshooting purposes."; buttons "Yes, Login" / "Cancel"

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-004 — Cancel does nothing

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Confirm dialog |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO on Kashyap Patel's profile; network log open.

**Steps**

1. Click "Login as Kashyap"
2. Click Cancel
3. Check the header, banner and network log

**Expected**

Dialog closes; user is still the PMO; no banner; no request to /auth/impersonate

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-006 — Banner persists across pages and reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Impersonation banner |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel (TC-ADMLGA-005).

**Steps**

1. Navigate to several pages (e.g. /whats-new, /profile)
2. Press F5 on a page
3. Check for the banner on each page

**Expected**

The impersonation banner is shown on every page and after reload

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-009 — Admin logs in as PMO

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Start impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as Admin.

**Steps**

1. Open Bhumi Chauhan's (PMO) profile
2. Click "Login as Bhumi" → "Yes, Login"
3. Check the banner and menus
4. Click "Return to Admin"

**Expected**

Allowed; banner shows "Return to Admin"; PMO pages are visible

**Test Data**

- `target`: bhumi.chauhan@ (PMO)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-010 — Login as from side panel (Admin)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1531 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000094559186 |
| **Sub Module** | Employee side panel |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as Admin.

**Steps**

1. Open Employee Details
2. Click a TM employee row (e.g. Sudhansu Patel) to open the side panel
3. Click "Login as <name>" → "Yes, Login"
4. Return to Admin

**Expected**

Impersonation starts and lands on /profile of the TM employee

**Test Data**

- `target`: a TM account

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-011 — Login as from project team side panel

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1531 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094559186 |
| **Sub Module** | Project side panel |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Open Projects
2. Open a project
3. Click a team member to open the side panel
4. Look for "Login as <name>"

**Expected**

"Login as <name>" is visible and works (or log as a gap if not intended)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-012 — PMO logs in as PM / TM / EM / CSM

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Start impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO; one PM, TM, EM and CSM target identified.

**Steps**

1. Repeat TC-ADMLGA-005 for a PM target
2. Repeat for a TM target
3. Repeat for an EM target
4. Repeat for a CSM target
5. For each, check the sidebar then Return to PMO

**Expected**

Each impersonation succeeds and the UI matches that role (e.g. CSM sees the project team table)

**Test Data**

- `targets`: one PM, TM, EM and CSM account

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-013 — PMO logs in as another PMO

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Start impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO; a second PMO account exists.

**Steps**

1. Open the second PMO's profile
2. Click "Login as <name>" → "Yes, Login"
3. Return to PMO

**Expected**

Allowed (by current code)

**Test Data**

- `target`: second PMO account

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-014 — Data as seen by employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Impersonated session |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel; a separate real Kashyap login is available.

**Steps**

1. As PMO-as-Kashyap, open Kashyap's dashboard and note data/permissions
2. In a real Kashyap login, open the same pages
3. Compare

**Expected**

Same data and permissions in both sessions

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-015 — What's New / help entry

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com); Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Help / What's New |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO and Employee accounts available.

**Steps**

1. As PMO, open What's New 6.4.2
2. As PMO, open Help → "See SimERP as someone else (Login as)"
3. As Employee, search Help for "Login as"

**Expected**

Entries are visible to the PMO (requires impersonate) and not visible to the Employee

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-026 — Logout while impersonating

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Exit impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Open the user menu
2. Click Logout and confirm
3. Log back in as PMO

**Expected**

Goes to the login page; both sessions are gone; logging back in gives a normal PMO session with no banner

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

### Negative (6)

#### TC-ADMLGA-020 — PMO cannot log in as Admin

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md (B5) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Admin protection |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Open ceo@ (Admin) profile
2. Click "Login as Chief"
3. Click "Yes, Login"
4. Check toast, banner and account

**Expected**

Toast "Only an administrator can log in as another administrator"; still PMO; no banner. Note: the button is visible (B5)

**Test Data**

- `target`: ceo@ (Admin)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-021 — Button hidden on own profile and own panel

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com); Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Visibility rules |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO, then as Admin.

**Steps**

1. Open own profile (/employee/<own id> and /profile)
2. Open own side panel in Employee Details (if listed)
3. Repeat as Admin

**Expected**

No Login as button on own profile or own panel

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-022 — Button hidden for non-permitted roles

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM, TM, EM, CSM, Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Visibility rules |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as each non-permitted role in turn.

**Steps**

1. Log in as PM, TM, EM, CSM and Employee in turn
2. Open another employee's profile where reachable
3. Open another employee's side panel where reachable

**Expected**

No Login as button for any of these roles

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-023 — Button hidden for past employee (tab)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Visibility rules |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO; a past employee exists.

**Steps**

1. Open Employee Details → Past Employee tab
2. Open a past employee's side panel
3. Open the past employee's profile from the tab (?type=past)

**Expected**

No Login as button on the panel or the profile

**Test Data**

- `target`: a past (soft-deleted) employee

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-024 — Past employee via plain profile URL

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md (B4) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Visibility rules |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO; past employee publicId known.

**Steps**

1. Open /employee/<past publicId> without ?type=past
2. Look for the Login as button
3. If shown, click it → "Yes, Login"

**Expected**

Expected: button hidden. Code shows the button and confirming gives "The user you are trying to impersonate does not exist" (B4)

**Test Data**

- `target`: past employee publicId

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-025 — No chaining while impersonating

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md (B6) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com) impersonating PMO |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Chaining |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Admin is logged in as Bhumi (PMO).

**Steps**

1. Open Kashyap Patel's profile
2. Click "Login as Kashyap" → "Yes, Login"
3. Check toast and identity

**Expected**

Toast "You are already impersonating a user. Exit the current session before starting another."; stays as Bhumi (button visibility itself is B6)

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

### Security (16)

#### TC-ADMLGA-030 — API refuses non-permitted roles

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM, TM, EM, CSM, Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: start |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as each non-permitted role; API origin /api/v1.

**Steps**

1. As each role, call POST /auth/impersonate/<other publicId> with the account's cookie
2. Call GET /employees/metadata afterwards

**Expected**

403; cookies unchanged (still own account)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-031 — Self via API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: start |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Call POST /auth/impersonate/<own publicId>

**Expected**

400 "You cannot impersonate your own account"

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-032 — Invalid / unknown id

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: start |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Call POST /auth/impersonate/not-a-uuid
2. Call POST /auth/impersonate/<random UUID>

**Expected**

400 (validation) for the non-UUID; 404 "The user you are trying to impersonate does not exist" for the random UUID

**Test Data**

- `ids`: not-a-uuid, random v4 UUID

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-033 — Admin target via API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: admin protection |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Call POST /auth/impersonate/<ceo publicId>
2. Call GET /employees/metadata

**Expected**

403 AUTH_022; PMO session still valid afterwards

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-034 — Exit without impersonation

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: exit |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO has a normal (non-impersonated) session.

**Steps**

1. Call POST /auth/exit-impersonation

**Expected**

400 "No active impersonation session found"

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-035 — Exit with no cookies

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Unauthenticated |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: exit |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). No session cookies.

**Steps**

1. Call POST /auth/exit-impersonation with no cookies

**Expected**

401

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-036 — Original session is revoked on start

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Save the PMO's cookies
2. Start Login as Kashyap
3. Replay the saved PMO cookies on any API (e.g. GET /employees/metadata)

**Expected**

401

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-037 — Impersonated session revoked on exit

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Save the impersonation cookies
2. Click Return to PMO
3. Replay the saved cookies on an API
4. Call POST /auth/exit-impersonation with the saved cookies

**Expected**

401 on both (cannot mint a second PMO session from an old token)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-038 — Metadata flags

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee; Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | API: metadata |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Impersonation sessions started by PMO and by Admin; a normal session.

**Steps**

1. As PMO-as-Kashyap, call GET /employees/metadata
2. As Admin-as-Kashyap, call it again
3. In a normal session, call it again

**Expected**

isImpersonating: true, impersonatorRole: "PMO"; Admin-started → "ADMIN"; normal session → false / null

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-039 — Refresh keeps impersonation

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Call POST /auth/refresh
2. Call GET /employees/metadata
3. Call POST /auth/exit-impersonation

**Expected**

Still impersonating after refresh; exit works

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-040 — Cross-origin request blocked

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | CORS / CSRF |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Send POST /auth/impersonate/<id> with header Origin: https://evil.example

**Expected**

403 from the CORS middleware; no impersonation

**Test Data**

- `origin`: https://evil.example

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-041 — Target lastLoginAt not touched

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as Admin.

**Steps**

1. Note Kashyap's last login time
2. Impersonate Kashyap and return
3. Check Kashyap's last login time again

**Expected**

Unchanged

#### TC-ADMLGA-042 — Real user unaffected

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) + Employee (two browsers) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Kashyap is logged in in browser 2.

**Steps**

1. Browser 2: Kashyap uses the app
2. Browser 1: PMO logs in as Kashyap and acts
3. Browser 2: Kashyap keeps acting
4. Browser 1: Return to PMO
5. Browser 2: check Kashyap's session

**Expected**

Kashyap's own session keeps working throughout

#### TC-ADMLGA-043 — Audit of actions during impersonation

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md (B1) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Audit |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Make a harmless edit as Kashyap (e.g. own profile field)
2. Check the audit/log or createdBy for the record
3. Revert the edit

**Expected**

Expected: record shows it was done by PMO on behalf of Kashyap. Code: shows only Kashyap (B1) — log as defect if confirmed

#### TC-ADMLGA-044 — Rights removed mid-session

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md (B2, B9) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin (ceo@simformsolutions.com) + PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Approval to change roles; restore immediately afterwards.

**Steps**

1. PMO starts Login as Kashyap
2. Admin removes the PMO role from the PMO account
3. PMO keeps using the app and calls refresh
4. Admin restores the PMO role

**Expected**

Expected: session ends. Code: continues; exit label falls back to "Return to Admin" (B2, B9)

#### TC-ADMLGA-045 — Second tab picks up impersonation

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md (B8) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Session handling |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO in two tabs.

**Steps**

1. Open tab 1 and tab 2 as PMO
2. In tab 1, Login as Kashyap
3. Go to tab 2 without reloading and act
4. Reload tab 2

**Expected**

Tab 2 is now Kashyap with the banner (shared cookies) — document behaviour (B8)

### Smoke (5)

#### TC-ADMLGA-001 — PMO sees Login as on employee profile

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Profile header |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Log in as PMO
2. Open /employee/<Kashyap Patel publicId>
3. Look at the profile header actions

**Expected**

Button "Login as Kashyap" is visible in the profile header

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-002 — PMO sees Login as in Employee Details side panel

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1531 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094559186 |
| **Sub Module** | Employee side panel |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO.

**Steps**

1. Log in as PMO
2. Open Employee Details
3. Click the Kashyap Patel row to open the side panel
4. Look next to the reporting-manager name

**Expected**

Side panel shows "Login as Kashyap" next to the reporting manager; long RM names truncate with an ellipsis and the button stays visible

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-005 — PMO logs in as employee

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Start impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as PMO on Kashyap Patel's profile.

**Steps**

1. Click "Login as Kashyap"
2. Click "Yes, Login"
3. Wait for the full reload
4. Check the URL, banner, exit button, avatar and sidebar

**Expected**

Reloads to /profile showing Kashyap's profile; banner "You are currently logged in as Kashyap Patel"; exit button "Return to PMO"; yellow dot on the avatar; sidebar shows Employee-level menus only

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-007 — Return to PMO

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) impersonating Employee |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Exit impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). PMO is logged in as Kashyap Patel.

**Steps**

1. Click "Return to PMO" in the banner
2. Wait for the reload
3. Check the account, banner and menus

**Expected**

Reload lands on the PMO default page as Bhumi; banner gone; PMO menus back; no SSO prompt

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)

#### TC-ADMLGA-008 — Admin logs in as employee and returns

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1525 · docs/findings/2026-10-15-login-as-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000094517128 |
| **Sub Module** | Start / exit impersonation |

**Preconditions**

Fresh /dev-login in a new browser context (not the shared storageState). Logged in as Admin.

**Steps**

1. Open Kashyap Patel's profile
2. Click "Login as Kashyap" → "Yes, Login"
3. Check the banner exit label
4. Click "Return to Admin"

**Expected**

Banner shows "Return to Admin"; returning restores the Admin session

**Test Data**

- `target`: Kashyap Patel (kashyap.patel@simformsolutions.com, Employee)

**Automation Hint**

Fresh login per test, serial mode; always end with Return to … or logout (Login as revokes the starting session)
