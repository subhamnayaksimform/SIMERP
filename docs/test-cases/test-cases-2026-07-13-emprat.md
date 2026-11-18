# Ratings — Test Cases

**Total test cases:** 28  
**Modules covered:** Ratings  
**Source:** `reports/test-cases/cases-2026-07-13-EMPRAT.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 8 | 28.6% |
| boundary | 7 | 25.0% |
| regression | 3 | 10.7% |
| security | 3 | 10.7% |
| integration | 2 | 7.1% |
| negative | 2 | 7.1% |
| smoke | 2 | 7.1% |
| a11y | 1 | 3.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 13 | 46.4% |
| medium | 11 | 39.3% |
| critical | 3 | 10.7% |
| low | 1 | 3.6% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 15 | 53.6% |
| minor | 8 | 28.6% |
| critical | 5 | 17.9% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 28 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 22 | 78.6% |
| unverified-fallback | 4 | 14.3% |
| speculative | 2 | 7.1% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 18 | 64.3% |
| No | 10 | 35.7% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 10 | 35.7% |
| @boundary | 9 | 32.1% |
| @needs-verification | 5 | 17.9% |
| @regression | 5 | 17.9% |
| @security | 3 | 10.7% |
| @smoke | 3 | 10.7% |
| @negative | 2 | 7.1% |
| @a11y | 1 | 3.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPRAT-001](#tc-emprat-001-rm-admin-edits-overall-ai-communication-rating-via-anchored-popup-and-save-persists-reflects-immediately) | RM/Admin edits Overall/AI/Communication rating via anchored popup and Save persists/reflects immediately | Ratings | smoke | critical |
| [TC-EMPRAT-002](#tc-emprat-002-rm-admin-applies-advanced-filter-by-rating-single-and-combined-clear-restores-the-full-list) | RM/Admin applies Advanced Filter by Rating (single and combined); Clear restores the full list | Ratings | smoke | critical |
| [TC-EMPRAT-003](#tc-emprat-003-ratings-tab-exists-within-the-same-shell-as-employee-leave-reusing-identical-table-chrome) | Ratings tab exists within the same shell as Employee/Leave, reusing identical table chrome | Ratings | functional | high |
| [TC-EMPRAT-004](#tc-emprat-004-overall-rating-popup-is-a-compact-anchored-single-input-cancel-save-popup) | Overall rating popup is a compact anchored single-input + Cancel/Save popup | Ratings | functional | high |
| [TC-EMPRAT-005](#tc-emprat-005-ai-rating-and-communication-rating-use-the-exact-same-compact-popup-pattern-as-overall-rating) | AI rating and Communication rating use the exact same compact popup pattern as Overall rating | Ratings | functional | high |
| [TC-EMPRAT-006](#tc-emprat-006-advanced-filter-by-rating-side-panel-shows-a-live-result-count) | Advanced Filter by Rating side panel shows a live result count | Ratings | functional | high |
| [TC-EMPRAT-007](#tc-emprat-007-action-edit-employee-employee-ratings-opens-a-672px-drawer-with-14-inputs-across-3-sections-2-date-pickers) | 'Action - edit employee - Employee Ratings' opens a 672px drawer with 14 inputs across 3 sections + 2 date pickers | Ratings | functional | critical |
| [TC-EMPRAT-008](#tc-emprat-008-cancel-on-the-rating-category-popup-discards-the-change) | Cancel on the rating category popup discards the change | Ratings | functional | high |
| [TC-EMPRAT-009](#tc-emprat-009-saving-the-employee-ratings-edit-drawer-updates-the-ratings-table-immediately-without-a-page-reload) | Saving the Employee Ratings edit drawer updates the Ratings table immediately without a page reload | Ratings | functional | high |
| [TC-EMPRAT-010](#tc-emprat-010-submitting-the-rating-popup-with-the-input-left-empty-is-rejected-or-save-is-disabled) | Submitting the rating popup with the input left empty is rejected or Save is disabled | Ratings | negative | medium |
| [TC-EMPRAT-011](#tc-emprat-011-advanced-filter-combination-matching-zero-rating-records-shows-an-empty-state-0-results-show) | Advanced Filter combination matching zero rating records shows an empty-state / '0 results show' | Ratings | negative | medium |
| [TC-EMPRAT-012](#tc-emprat-012-v1-7-filters-vs-v2-9-filters-confirm-which-advanced-filter-variant-is-the-current-live-build) | V1 (7 filters) vs V2 (9 filters) — confirm which Advanced Filter variant is the current live build | Ratings | boundary | high |
| [TC-EMPRAT-013](#tc-emprat-013-rating-popup-positioned-near-the-table-edge-last-row-does-not-render-off-screen-or-clipped) | Rating popup positioned near the table edge/last row does not render off-screen or clipped | Ratings | boundary | medium |
| [TC-EMPRAT-014](#tc-emprat-014-ratings-tab-s-small-row-count-2-reflects-a-genuine-small-rated-team-sample-not-a-filter-bug-hiding-rows) | Ratings tab's small row count (2) reflects a genuine small rated-team sample, not a filter/bug hiding rows | Ratings | boundary | low |
| [TC-EMPRAT-015](#tc-emprat-015-rating-input-format-range-for-overall-ai-communication-clarification-needed) | Rating input format/range for Overall/AI/Communication — clarification needed | Ratings | boundary | high |
| [TC-EMPRAT-016](#tc-emprat-016-overall-ai-and-communication-rating-popups-share-identical-dialog-dimensions-and-button-behavior) | Overall, AI, and Communication rating popups share identical dialog dimensions and button behavior | Ratings | boundary | medium |
| [TC-EMPRAT-017](#tc-emprat-017-relationship-between-the-employee-ratings-drawer-14-inputs-and-the-general-edit-employee-drawer-15-inputs-clarification-needed) | Relationship between the Employee Ratings drawer (14 inputs) and the general Edit Employee drawer (15 inputs) — clarification needed | Ratings | boundary | medium |
| [TC-EMPRAT-018](#tc-emprat-018-double-clicking-save-on-a-rating-popup-does-not-create-duplicate-rating-records-or-a-conflicting-overwrite) | Double-clicking Save on a rating popup does not create duplicate rating records or a conflicting overwrite | Ratings | boundary | high |
| [TC-EMPRAT-019](#tc-emprat-019-rating-popups-anchored-near-a-row-remain-keyboard-reachable-and-screen-reader-announced) | Rating popups anchored near a row remain keyboard-reachable and screen-reader-announced | Ratings | a11y | medium |
| [TC-EMPRAT-020](#tc-emprat-020-an-employee-rating-subject-cannot-open-edit-their-own-rating-popup-or-employee-ratings-edit-drawer) | An Employee (rating subject) cannot open/edit their own rating popup or Employee Ratings edit drawer | Ratings | security | high |
| [TC-EMPRAT-021](#tc-emprat-021-a-rater-views-edits-ratings-for-an-employee-outside-their-permitted-scope-idor) | A rater views/edits ratings for an employee outside their permitted scope (IDOR) | Ratings | security | high |
| [TC-EMPRAT-022](#tc-emprat-022-employee-rating-subject-cannot-edit-their-own-or-others-ratings) | Employee (rating subject) cannot edit their own or others' ratings | Ratings | security | high |
| [TC-EMPRAT-023](#tc-emprat-023-integration-ratings-tab-shares-chrome-with-employee-leave-tabs-a-shared-shell-regression-affects-all-three) | Integration — Ratings tab shares chrome with Employee/Leave tabs; a shared-shell regression affects all three | Ratings | integration | high |
| [TC-EMPRAT-024](#tc-emprat-024-integration-employee-ratings-drawer-and-general-edit-employee-drawer-may-share-an-underlying-form-section-component) | Integration — Employee Ratings drawer and general Edit Employee drawer may share an underlying form-section component | Ratings | integration | medium |
| [TC-EMPRAT-025](#tc-emprat-025-regression-ratings-tab-s-shared-chrome-continues-to-function-correctly-after-employee-leave-tab-changes) | Regression — Ratings tab's shared chrome continues to function correctly after Employee/Leave tab changes | Ratings | regression | medium |
| [TC-EMPRAT-026](#tc-emprat-026-regression-a-fix-break-in-the-general-edit-employee-drawer-does-not-silently-affect-the-employee-ratings-drawer) | Regression — a fix/break in the general Edit Employee drawer does not silently affect the Employee Ratings drawer | Ratings | regression | medium |
| [TC-EMPRAT-027](#tc-emprat-027-rating-category-popup-shared-component-regression-check-across-overall-ai-communication) | Rating category popup shared-component regression check across Overall/AI/Communication | Ratings | regression | medium |
| [TC-EMPRAT-028](#tc-emprat-028-advanced-filter-by-rating-narrows-and-widens-correctly-as-criteria-are-added-removed-one-at-a-time) | Advanced Filter by Rating narrows and widens correctly as criteria are added/removed one at a time | Ratings | functional | medium |

---

## Ratings

28 test cases.

### A11y (1)

#### TC-EMPRAT-019 — Rating popups anchored near a row remain keyboard-reachable and screen-reader-announced

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | nfrRequirements.accessibility |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Tab to a row's rating trigger via keyboard
2. Open the popup via keyboard
3. Verify screen-reader announcement of the popup

**Expected**

Popup is reachable and operable via keyboard and carries an accessible name/announcement

**Automation Hint**

PARTIAL — popups show only placeholder 'SheetHeader' text in this export; accessible-name coverage cannot be fully confirmed yet.

### Boundary (7)

#### TC-EMPRAT-012 — V1 (7 filters) vs V2 (9 filters) — confirm which Advanced Filter variant is the current live build

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Advanced Filter variant currently live |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed before locking a fixed filter-row count

**Steps**

1. Confirm with design/dev which Advanced Filter by Rating variant (7-criteria V1 or 9-criteria V2) reflects the current live build

**Expected**

MANUAL — cannot assert a fixed filter-row count until confirmed

**Automation Hint**

MANUAL — requirement unclear: Advanced Filter variant currently live.

#### TC-EMPRAT-013 — Rating popup positioned near the table edge/last row does not render off-screen or clipped

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: rating popup near table edge |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a rating popup for the last visible row near the viewport edge

**Expected**

Popup (~260x190px) remains fully visible, not clipped or off-screen

#### TC-EMPRAT-014 — Ratings tab's small row count (2) reflects a genuine small rated-team sample, not a filter/bug hiding rows

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | edgeCase: small row count on Ratings base view |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Compare the Ratings tab's row count against the Employee tab's row count for the same team
2. Confirm with product whether Ratings is intentionally scoped to only rated employees

**Expected**

MANUAL — confirm expected row-count relationship between Ratings and Employee tabs before asserting a fixed minimum

**Automation Hint**

MANUAL — requirement unclear: expected Ratings tab row count relative to Employee tab.

#### TC-EMPRAT-015 — Rating input format/range for Overall/AI/Communication — clarification needed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Rating scale/format |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with design/dev the exact accepted format/range for the Overall, AI, and Communication rating values

**Expected**

MANUAL — cannot finalize input validation assertions until format/range confirmed

**Automation Hint**

MANUAL — requirement unclear: rating scale/format.

#### TC-EMPRAT-016 — Overall, AI, and Communication rating popups share identical dialog dimensions and button behavior

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: rating category popup pattern consistency |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open each of the Overall, AI, and Communication rating popups
2. Compare dimensions and Cancel/Save behavior

**Expected**

All three popups share identical dialog dimensions and button behavior

#### TC-EMPRAT-017 — Relationship between the Employee Ratings drawer (14 inputs) and the general Edit Employee drawer (15 inputs) — clarification needed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: relationship between the two 'edit employee' drawers |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with design/dev whether the two drawers share an underlying form-section component

**Expected**

MANUAL — if they share a component, a change to one may unintentionally affect the other; not confirmed in source

**Automation Hint**

MANUAL — requirement unclear: relationship between the two edit-employee drawers.

#### TC-EMPRAT-018 — Double-clicking Save on a rating popup does not create duplicate rating records or a conflicting overwrite

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | BR: Double-clicking Save in the rating popup must not create duplicates (idempotency) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a rating popup
2. Change the value
3. Double-click Save rapidly

**Expected**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. No duplicate rating record and no conflicting overwrite occurs

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Functional (8)

#### TC-EMPRAT-003 — Ratings tab exists within the same shell as Employee/Leave, reusing identical table chrome

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Ratings tab shares shell chrome |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to the Ratings tab

**Expected**

Tab is selectable and loads without error; Tabs, search input, column DropdownMenus, Table Headers, and Pagination all render as on the Employee/Leave tabs

#### TC-EMPRAT-004 — Overall rating popup is a compact anchored single-input + Cancel/Save popup

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Overall rating popup |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Overall rating popup for a row

**Expected**

Popup renders a single input with a Cancel/Save button pair, implying a single scalar rating value

#### TC-EMPRAT-005 — AI rating and Communication rating use the exact same compact popup pattern as Overall rating

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: AI/Communication rating popup shared pattern |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the AI rating popup
2. Open the Communication rating popup

**Expected**

Both open the same single-input + Cancel/Save popup pattern as Overall rating, confirming a shared reusable component

#### TC-EMPRAT-006 — Advanced Filter by Rating side panel shows a live result count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Advanced Filter by Rating side panel |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Advanced Filter by Rating panel
2. Apply a criterion

**Expected**

Panel shows a live result count in the verbatim pattern '<N> results show'

**Test Data**

- `resultCountText`: 2 results show

**Automation Hint**

PARTIAL — must confirm whether 7 (V1) or 9 (V2) filter rows are live before asserting a fixed row count.

#### TC-EMPRAT-007 — 'Action - edit employee - Employee Ratings' opens a 672px drawer with 14 inputs across 3 sections + 2 date pickers

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | AC: Employee Ratings edit drawer |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Employee Ratings edit action for a row

**Expected**

A large (672px) edit drawer opens with 14 inputs across at least 3 titled sections plus 2 date pickers

**Automation Hint**

PARTIAL — field/section labels unconfirmed (structural-only screen).

#### TC-EMPRAT-008 — Cancel on the rating category popup discards the change

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | testScenario: Edit Overall/AI/Communication rating via popup — Cancel discards |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Overall rating popup
2. Change the value
3. Click Cancel
4. Reopen the popup

**Expected**

Value reverts to the original; Cancel discarded the change

#### TC-EMPRAT-009 — Saving the Employee Ratings edit drawer updates the Ratings table immediately without a page reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | BR: Saving Employee Ratings edit drawer must reflect updated values immediately |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Employee Ratings edit drawer
2. Modify a field in each of the 3 sections
3. Click Save

**Expected**

Ratings table reflects the updated values immediately, no page reload — mirroring the base Employee edit drawer's cache-refresh requirement

#### TC-EMPRAT-028 — Advanced Filter by Rating narrows and widens correctly as criteria are added/removed one at a time

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | testScenario: Advanced Filter by Rating — single and combined criteria |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply one filter criterion and note the row set/result count
2. Add a second criterion and note the narrower row set/result count
3. Remove the second criterion and verify the row set/result count returns to the single-criterion state

**Expected**

Row set and live result count update correctly and reversibly as criteria are added and removed one at a time

**Automation Hint**

PARTIAL — must confirm whether 7 (V1) or 9 (V2) filter criteria are live before finalizing per-filter assertions.

### Integration (2)

#### TC-EMPRAT-023 — Integration — Ratings tab shares chrome with Employee/Leave tabs; a shared-shell regression affects all three

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[0]: Employee Details (base Reporting Manager view) — shared shell |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate between Employee, Leave, and Ratings tabs
2. Verify Tabs/search/column DropdownMenus/Pagination chrome is shared and consistent

**Expected**

A regression in the shared shell would identically affect all three tabs; chrome behaves consistently across them

**Automation Hint**

Multi-module flow — verify shared-shell chrome across Employee/Leave/Ratings tabs.

#### TC-EMPRAT-024 — Integration — Employee Ratings drawer and general Edit Employee drawer may share an underlying form-section component

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[1]: Action - edit employee (Reporting Manager section) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Modify a shared-looking form section in the general Edit Employee drawer
2. Check the Employee Ratings drawer for any unintended side effect

**Expected**

A fix/regression in one drawer's shared form-section component does not silently affect the other, or if it does, the relationship is documented

**Automation Hint**

PARTIAL — whether the two drawers truly share a component is unconfirmed; requires dev confirmation first.

### Negative (2)

#### TC-EMPRAT-010 — Submitting the rating popup with the input left empty is rejected or Save is disabled

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenario: rating popup submitted empty |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open a rating popup
2. Clear the input
3. Attempt Save

**Expected**

MANUAL — a validation error is shown or Save is disabled; exact required-ness not confirmed in source

**Automation Hint**

MANUAL — requirement unclear: rating input required-ness/format not confirmed.

#### TC-EMPRAT-011 — Advanced Filter combination matching zero rating records shows an empty-state / '0 results show'

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenario: Advanced Filter combination matches zero records |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Combine Advanced Filter criteria to match zero records

**Expected**

An empty-state / '0 results show' message is displayed rather than a blank or broken panel

### Regression (3)

#### TC-EMPRAT-025 — Regression — Ratings tab's shared chrome continues to function correctly after Employee/Leave tab changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: affectedModule — Employee Details (base Reporting Manager view) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. After a change to the Employee Details tab's shared shell, exercise Tabs/search/Pagination on the Ratings tab

**Expected**

Shared chrome continues to behave exactly as before on the Ratings tab

#### TC-EMPRAT-026 — Regression — a fix/break in the general Edit Employee drawer does not silently affect the Employee Ratings drawer

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: affectedModule — Action - edit employee (Reporting Manager section) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. After any change to the general Edit Employee drawer, open and exercise the Employee Ratings drawer end-to-end

**Expected**

Employee Ratings drawer's save/cancel/section behavior remains unaffected

**Automation Hint**

PARTIAL — depends on confirming whether the two drawers actually share a component.

#### TC-EMPRAT-027 — Rating category popup shared-component regression check across Overall/AI/Communication

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | testScenario: Rating category popup shared-component regression check |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise open/save/cancel mechanics identically on the Overall, AI, and Communication rating popups

**Expected**

All three popups behave identically; a fix/break in one category's popup does not silently diverge from the others

### Security (3)

#### TC-EMPRAT-020 — An Employee (rating subject) cannot open/edit their own rating popup or Employee Ratings edit drawer

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: Employee attempts to edit own rating |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) as Employee

**Steps**

1. As the rating subject, attempt to open/edit the Overall/AI/Communication rating popup for own record
2. Attempt to open the Employee Ratings edit drawer for own record

**Expected**

MANUAL — edit access should be restricted to RM/Admin; Employee should see ratings read-only at most — not confirmed in source

**Automation Hint**

PARTIAL — role boundary not confirmed; verify against live app.

#### TC-EMPRAT-021 — A rater views/edits ratings for an employee outside their permitted scope (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: rater views/edits out-of-scope ratings (IDOR) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. As a rater, attempt to view/edit ratings for an employee outside permitted scope via row/drawer ID substitution

**Expected**

MANUAL — access should be blocked or scoped per role; not confirmed in source

**Automation Hint**

PARTIAL — enforcement mechanism unconfirmed; verify against live app/backend.

#### TC-EMPRAT-022 — Employee (rating subject) cannot edit their own or others' ratings

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: Employee cannot edit own or others' ratings |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) as Employee

**Steps**

1. As Employee, attempt any rating-write action (popup or drawer) for own or others' records via UI and direct API

**Expected**

MANUAL — write controls absent/disabled in UI; API returns 403 — not confirmed in source

**Automation Hint**

PARTIAL — role boundary unconfirmed; verify against live app.

### Smoke (2)

#### TC-EMPRAT-001 — RM/Admin edits Overall/AI/Communication rating via anchored popup and Save persists/reflects immediately

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); on the Ratings tab

**Steps**

1. Open the Overall rating popup for an employee
2. Change the value
3. Click Save

**Expected**

Popup opens anchored to the correct row/category; Save persists the new value, closes the popup, and the table reflects it immediately

**Automation Hint**

PARTIAL — exact input format/range unconfirmed.

#### TC-EMPRAT-002 — RM/Admin applies Advanced Filter by Rating (single and combined); Clear restores the full list

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); on the Ratings tab

**Steps**

1. Apply one filter criterion
2. Apply a combination of criteria
3. Click Clear

**Expected**

Single filter updates rows + live result count; combined filters narrow further; Clear restores the full unfiltered list

**Automation Hint**

Must confirm the live filter variant (V1=7 vs V2=9 criteria) before finalizing per-filter assertions.
