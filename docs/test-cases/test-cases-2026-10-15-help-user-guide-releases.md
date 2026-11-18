# Help & Support — Test Cases

**Total test cases:** 38  
**Modules covered:** Help & Support  
**Source:** `reports/test-cases/cases-2026-10-15-HELP-user-guide-releases.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 20 | 52.6% |
| regression | 7 | 18.4% |
| negative | 5 | 13.2% |
| smoke | 3 | 7.9% |
| accessibility | 2 | 5.3% |
| boundary | 1 | 2.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 14 | 36.8% |
| high | 12 | 31.6% |
| low | 12 | 31.6% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 14 | 36.8% |
| high | 12 | 31.6% |
| low | 12 | 31.6% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 35 | 92.1% |
| code-review | 3 | 7.9% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 35 | 92.1% |
| code-review | 3 | 7.9% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 38 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 20 | 52.6% |
| @regression | 7 | 18.4% |
| @negative | 5 | 13.2% |
| @smoke | 3 | 7.9% |
| @a11y | 2 | 5.3% |
| @boundary | 1 | 2.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-HELP-001](#tc-help-001-footer-links-visible) | Footer links visible | Help & Support | smoke | high |
| [TC-HELP-002](#tc-help-002-what-s-new-loads) | What's New loads | Help & Support | smoke | high |
| [TC-HELP-003](#tc-help-003-help-loads) | Help loads | Help & Support | smoke | high |
| [TC-HELP-004](#tc-help-004-current-badge-matches-deployed-version) | Current badge matches deployed version | Help & Support | functional | high |
| [TC-HELP-005](#tc-help-005-planned-toggle) | Planned toggle | Help & Support | functional | medium |
| [TC-HELP-006](#tc-help-006-filter-by-page) | Filter by page | Help & Support | functional | medium |
| [TC-HELP-007](#tc-help-007-filter-by-type) | Filter by type | Help & Support | functional | medium |
| [TC-HELP-008](#tc-help-008-search-release-notes) | Search release notes | Help & Support | functional | medium |
| [TC-HELP-009](#tc-help-009-no-match-empty-state) | No-match empty state | Help & Support | negative | medium |
| [TC-HELP-010](#tc-help-010-expand-collapse-all) | Expand/Collapse all | Help & Support | functional | low |
| [TC-HELP-011](#tc-help-011-empty-release-card) | Empty release card | Help & Support | functional | low |
| [TC-HELP-012](#tc-help-012-baseline-card) | Baseline card | Help & Support | functional | low |
| [TC-HELP-013](#tc-help-013-page-chip-deep-link) | Page chip deep link | Help & Support | functional | medium |
| [TC-HELP-014](#tc-help-014-help-deep-link) | Help deep link | Help & Support | functional | medium |
| [TC-HELP-015](#tc-help-015-unknown-module-param) | Unknown module param | Help & Support | negative | low |
| [TC-HELP-016](#tc-help-016-module-the-user-cannot-open) | Module the user cannot open | Help & Support | negative | high |
| [TC-HELP-017](#tc-help-017-help-search) | Help search | Help & Support | functional | medium |
| [TC-HELP-018](#tc-help-018-terms-tab-search) | Terms tab search | Help & Support | functional | low |
| [TC-HELP-019](#tc-help-019-help-no-match) | Help no-match | Help & Support | negative | low |
| [TC-HELP-020](#tc-help-020-one-guide-open-at-a-time) | One guide open at a time | Help & Support | functional | low |
| [TC-HELP-021](#tc-help-021-what-s-new-for-you-card) | "What's new for you" card | Help & Support | functional | medium |
| [TC-HELP-022](#tc-help-022-contact-support) | Contact support | Help & Support | functional | medium |
| [TC-HELP-023](#tc-help-023-role-filtered-help) | Role-filtered help | Help & Support | functional | high |
| [TC-HELP-024](#tc-help-024-permission-gated-guides) | Permission-gated guides | Help & Support | functional | high |
| [TC-HELP-025](#tc-help-025-role-filtered-release-notes) | Role-filtered release notes | Help & Support | functional | high |
| [TC-HELP-026](#tc-help-026-sidebar-badge-appears) | Sidebar badge appears | Help & Support | regression | high |
| [TC-HELP-027](#tc-help-027-badge-clears-on-visit) | Badge clears on visit | Help & Support | regression | high |
| [TC-HELP-028](#tc-help-028-badges-during-login-as) | Badges during Login as | Help & Support | regression | medium |
| [TC-HELP-029](#tc-help-029-bell-dot-and-tab-dot) | Bell dot and tab dot | Help & Support | regression | high |
| [TC-HELP-030](#tc-help-030-bell-dot-clears) | Bell dot clears | Help & Support | regression | high |
| [TC-HELP-031](#tc-help-031-bell-panel-content) | Bell panel content | Help & Support | functional | medium |
| [TC-HELP-032](#tc-help-032-bell-header-vs-items) | Bell header vs items | Help & Support | functional | low |
| [TC-HELP-033](#tc-help-033-seen-state-per-browser) | Seen state per browser | Help & Support | regression | low |
| [TC-HELP-034](#tc-help-034-search-length-cap) | Search length cap | Help & Support | boundary | low |
| [TC-HELP-035](#tc-help-035-content-chunk-fails) | Content chunk fails | Help & Support | negative | low |
| [TC-HELP-036](#tc-help-036-certifications-working-location-coverage) | Certifications / Working Location coverage | Help & Support | regression | medium |
| [TC-HELP-037](#tc-help-037-keyboard-and-aria) | Keyboard and ARIA | Help & Support | accessibility | medium |
| [TC-HELP-038](#tc-help-038-collapsed-sidebar) | Collapsed sidebar | Help & Support | accessibility | low |

---

## Help & Support

38 test cases.

### Accessibility (2)

#### TC-HELP-037 — Keyboard and ARIA

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New / Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Tab through the filters and cards
2. Check accessible names
3. Run axe

**Expected**

Filters have aria-labels ("Filter by page", "Filter by type of change", "Search release notes"/"Search help"). Guide triggers are announced as "Show steps for {title}". The group badge dot is named "Has changes". Focus is visible. axe reports no serious issues

#### TC-HELP-038 — Collapsed sidebar

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Sidebar footer |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Collapse the sidebar to the icon rail
2. Hover/focus the footer icons

**Expected**

The footer links are still reachable with tooltips. Item badges are hidden; check whether any indicator remains (product question)

### Boundary (1)

#### TC-HELP-034 — Search length cap

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New / Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Paste 300 characters into the What's New search
2. Paste 300 characters into the Help search
3. Type leading spaces then text with inner spaces

**Expected**

Input is capped at SEARCH_MAX_LENGTH. Leading spaces are trimmed, inner spaces kept

### Functional (20)

#### TC-HELP-004 — Current badge matches deployed version

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md (C1) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Read the version label under SimERP in the sidebar
2. Open /whats-new
3. Read the version of the card with the Current badge

**Expected**

They should match. Expected to fail today (6.4.2 vs 6.4.0), see C1

#### TC-HELP-005 — Planned toggle

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Tick "Preview planned release"
3. Untick it

**Expected**

6.4.1 and 6.4.2 appear with the Planned badge and the text "Planned release, not live yet."; untick hides them

#### TC-HELP-006 — Filter by page

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Set Page = Goals

**Expected**

Only releases with Goals changes remain, and each shows only its Goals changes. The count text updates

#### TC-HELP-007 — Filter by type

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Open the type filter and check the options
3. Set Type = Fixed

**Expected**

Only Fixed changes. "In release" (Existing) is not offered as a type

#### TC-HELP-008 — Search release notes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new with planned on
2. Search "linkedin"
3. Search "LINKEDIN"

**Expected**

Case-insensitive match on the 6.4.2 LinkedIn note

#### TC-HELP-010 — Expand/Collapse all

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Click Expand all
3. Click Collapse all

**Expected**

All non-empty cards open, then all close

#### TC-HELP-011 — Empty release card

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Find "Behind-the-scenes update" (e.g. 6.1.0)
3. Try to expand it

**Expected**

Summary "No changes you will notice.", no count, the card cannot be expanded

#### TC-HELP-012 — Baseline card

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Open v3.0.0

**Expected**

Baseline badge, "N in release", items typed "In release"

#### TC-HELP-013 — Page chip deep link

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Expand a change
3. Click its page chip (e.g. "Goals")

**Expected**

Navigates to /help?module=goals and Help is filtered to Goals

#### TC-HELP-014 — Help deep link

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help?module=tickets

**Expected**

The page filter shows "Project Allocation" and only those guides are listed

#### TC-HELP-017 — Help search

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help, How to tab
2. Search "visa"

**Expected**

Only guides whose title, summary, steps or tips mention visa (Profile visa, Details filter)

#### TC-HELP-018 — Terms tab search

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help
2. Open Terms & numbers
3. Search "NS1"

**Expected**

The night-shift codes card appears with its code badge

#### TC-HELP-020 — One guide open at a time

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help
2. Open guide A
3. Open guide B

**Expected**

A collapses and B shows numbered steps and "Tip:" lines

#### TC-HELP-021 — "What's new for you" card

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help with All pages and empty search
2. Click All releases
3. Return, then set a page filter or a search

**Expected**

The card shows the newest released version with its updates and an All releases button that goes to /whats-new. The card hides when a page filter or search is set

#### TC-HELP-022 — Contact support

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help
2. Click Contact support

**Expected**

Opens the Microsoft Forms URL in a new tab with rel="noopener noreferrer"

#### TC-HELP-023 — Role-filtered help

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. Employee and Admin accounts available. 

**Steps**

1. As Employee, open /help and note the page list
2. As Admin, open /help and compare

**Expected**

Employee sees only Getting started, My Profile, Notifications (+ self-scope pages). No Employee Details, Admin or Department guides. Fewer guides in the stats

#### TC-HELP-024 — Permission-gated guides

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM vs TM vs PMO |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help as PM, TM and PMO in turn
2. Check for the bypass, approve, shortlist, directAllocation, upManual and loginAs guides

**Expected**

Each guide appears only for roles holding the matching action/subject

#### TC-HELP-025 — Role-filtered release notes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. As Employee, open /whats-new

**Expected**

No notes that touch only Employee Details/Goals/Tickets. A release whose changes are all hidden is dropped. "N changes for you" counts only what is visible

#### TC-HELP-031 — Bell panel content

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Bell (What's New tab) |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open the bell → What's New tab
2. Click "View What's New & History"

**Expected**

At most 5 items, each with a type badge, title and description. "+N more" when there are more. View What's New & History goes to /whats-new and closes the popover

#### TC-HELP-032 — Bell header vs items

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md (C8) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Bell (What's New tab) |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open the bell → What's New tab
2. Compare "What's new for you in v{x}" with the items' versions

**Expected**

Flags C8: items from older versions appear under a single version header

### Negative (5)

#### TC-HELP-009 — No-match empty state

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Search "zzqqxx"

**Expected**

"No release notes found · Try a different search, page or type of change." Count shows 0 releases

#### TC-HELP-015 — Unknown module param

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help?module=foo

**Expected**

Falls back to "All pages", no error

#### TC-HELP-016 — Module the user cannot open

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. As Employee, open /help?module=roles

**Expected**

Falls back to "All pages". No Roles & Permissions guides are shown

#### TC-HELP-019 — Help no-match

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help
2. Search "zzqqxx" on How to
3. Search "zzqqxx" on Terms & numbers

**Expected**

"No help found" / "No terms found" with "Try a different search or page."

#### TC-HELP-035 — Content chunk fails

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md (C9) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Block the release-notes JS chunk (route abort)
2. Open /whats-new

**Expected**

The page does not crash. Expected "No releases yet" (today shows "No release notes found · try a different search", see C9)

### Regression (7)

#### TC-HELP-026 — Sidebar badge appears

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Fresh user (cleared localStorage) |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Sidebar badges |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Clear help_seen_* from localStorage
2. Reload inside the 14-day window
3. Hover a badge

**Expected**

Within a few seconds, nav items for pages changed in the release show a badge (e.g. Goals "Changed"). A collapsed group shows a dot. The tooltip reads "{label} in v{version}"

#### TC-HELP-027 — Badge clears on visit

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Fresh user |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Sidebar badges |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Click the badged item (e.g. Goals)
2. Check localStorage help_seen_<id>
3. Reload

**Expected**

Its badge is gone. localStorage.help_seen_<id>.goals = latest released version. It stays gone after reload

#### TC-HELP-028 — Badges during Login as

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin → Login as Employee |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Sidebar badges |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. As Admin, Login as an employee
2. Check the badges and the bell
3. Return to Admin and check the admin's own state

**Expected**

Badges reflect the employee's permissions and the employee's seen key. After return, the admin's own state is unchanged

#### TC-HELP-029 — Bell dot and tab dot

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Fresh user |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Bell (What's New tab) |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. The account has no unread notifications. 

**Steps**

1. Clear the seen map
2. Reload
3. Look at the bell and its What's New tab

**Expected**

The bell shows a red dot (when there are no unread notifications) and the What's New tab shows a dot

#### TC-HELP-030 — Bell dot clears

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Fresh user |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Bell (What's New tab) |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open the bell → What's New tab and wait for the list
2. Reload
3. Repeat with a cleared seen map by opening /whats-new directly

**Expected**

Both dots clear and stay cleared after reload. Opening /whats-new directly also clears them

#### TC-HELP-033 — Seen state per browser

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Any |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Sidebar badges |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Complete TC-HELP-027
2. Log in in a new browser profile

**Expected**

The badges come back (state is per browser). Document this as expected behaviour

#### TC-HELP-036 — Certifications / Working Location coverage

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md (C2, C3) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New / Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Search Help for "certification" and "working location"
2. Search What's New for the same words (planned on and off)

**Expected**

Guides and release notes exist. Expected to fail today (C2, C3)

### Smoke (3)

#### TC-HELP-001 — Footer links visible

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Sidebar footer |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Log in
2. Look at the sidebar footer
3. Click "What's New & History"
4. Go back and click "Help & Support"

**Expected**

"What's New & History" and "Help & Support" are visible and open /whats-new and /help

#### TC-HELP-002 — What's New loads

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | What's New |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /whats-new
2. Wait for loading to finish

**Expected**

Loading state, then release cards newest first. The heading/title reads "What's New". The Current card is expanded

#### TC-HELP-003 — Help loads

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1459 · docs/findings/2026-10-15-user-guide-releases-code-brief.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin |
| **Task Id** | 688906000094232924 |
| **Sub Module** | Help |

**Preconditions**

Logged in. The badge window is active (a release marked released in the last 14 days), or localStorage is seeded. 

**Steps**

1. Open /help

**Expected**

Intro card, "N guides for you", "N pages covered", How to tab active, guides grouped by page
