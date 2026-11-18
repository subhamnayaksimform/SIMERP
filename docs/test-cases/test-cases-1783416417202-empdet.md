# Employee Details — Test Cases

**Total test cases:** 130  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-1783416417202-EMPDET.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| boundary | 48 | 36.9% |
| regression | 27 | 20.8% |
| functional | 18 | 13.8% |
| security | 12 | 9.2% |
| integration | 7 | 5.4% |
| negative | 7 | 5.4% |
| performance | 7 | 5.4% |
| smoke | 3 | 2.3% |
| a11y | 1 | 0.8% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 57 | 43.8% |
| high | 49 | 37.7% |
| critical | 15 | 11.5% |
| low | 9 | 6.9% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| minor | 79 | 60.8% |
| major | 37 | 28.5% |
| critical | 14 | 10.8% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 79 | 60.8% |
| regression-derived | 51 | 39.2% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 85 | 65.4% |
| inferred | 41 | 31.5% |
| unverified-fallback | 4 | 3.1% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 118 | 90.8% |
| No | 12 | 9.2% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @boundary | 56 | 43.1% |
| @regression | 49 | 37.7% |
| @needs-verification | 45 | 34.6% |
| @functional | 19 | 14.6% |
| @security | 18 | 13.8% |
| @negative | 12 | 9.2% |
| @performance | 9 | 6.9% |
| @smoke | 3 | 2.3% |
| @a11y | 1 | 0.8% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-001](#tc-empdet-001-current-employee-tab-loads-with-count-matching-api) | Current Employee tab loads with count matching API | Employee Details | smoke | critical |
| [TC-EMPDET-002](#tc-empdet-002-past-employee-tab-loads-with-only-archived-employees) | Past Employee tab loads with only archived employees | Employee Details | smoke | critical |
| [TC-EMPDET-003](#tc-empdet-003-admin-edits-employee-via-drawer-and-grid-reflects-change-immediately) | Admin edits employee via drawer and grid reflects change immediately | Employee Details | smoke | critical |
| [TC-EMPDET-004](#tc-empdet-004-search-by-partial-name-returns-matching-employees) | Search by partial name returns matching employees | Employee Details | functional | high |
| [TC-EMPDET-005](#tc-empdet-005-search-by-full-email-returns-exact-match) | Search by full email returns exact match | Employee Details | functional | high |
| [TC-EMPDET-006](#tc-empdet-006-search-by-project-name-filters-employees-on-that-project) | Search by project name filters employees on that project | Employee Details | functional | high |
| [TC-EMPDET-007](#tc-empdet-007-apply-single-basic-filter-department-filters-grid) | Apply single Basic Filter (Department) filters grid | Employee Details | functional | high |
| [TC-EMPDET-008](#tc-empdet-008-apply-multiple-basic-filters-in-combination-and-logic) | Apply multiple Basic Filters in combination (AND logic) | Employee Details | functional | high |
| [TC-EMPDET-009](#tc-empdet-009-reset-basic-filters-restores-full-unfiltered-list) | Reset Basic Filters restores full unfiltered list | Employee Details | functional | high |
| [TC-EMPDET-010](#tc-empdet-010-advanced-filter-save-applies-all-criteria-to-grid) | Advanced Filter Save applies all criteria to grid | Employee Details | functional | high |
| [TC-EMPDET-011](#tc-empdet-011-advanced-filter-cancel-reverts-to-last-applied-state) | Advanced Filter Cancel reverts to last-applied state | Employee Details | functional | high |
| [TC-EMPDET-012](#tc-empdet-012-sort-by-name-column-toggles-ascending-and-descending) | Sort by Name column toggles ascending and descending | Employee Details | functional | medium |
| [TC-EMPDET-013](#tc-empdet-013-sort-by-experience-produces-stable-order-with-tie-breaking) | Sort by Experience produces stable order with tie-breaking | Employee Details | functional | medium |
| [TC-EMPDET-014](#tc-empdet-014-pagination-preserves-search-and-filter-state-across-pages) | Pagination preserves search and filter state across pages | Employee Details | functional | high |
| [TC-EMPDET-015](#tc-empdet-015-page-size-selector-changes-number-of-rows-displayed) | Page size selector changes number of rows displayed | Employee Details | functional | medium |
| [TC-EMPDET-016](#tc-empdet-016-edit-drawer-loads-correct-employee-data-for-selected-row) | Edit Drawer loads correct employee data for selected row | Employee Details | functional | high |
| [TC-EMPDET-017](#tc-empdet-017-cancel-on-edit-drawer-discards-changes-without-updating-grid) | Cancel on Edit Drawer discards changes without updating grid | Employee Details | functional | high |
| [TC-EMPDET-018](#tc-empdet-018-reporting-manager-hover-card-shows-correct-manager-info) | Reporting Manager hover card shows correct manager info | Employee Details | functional | medium |
| [TC-EMPDET-019](#tc-empdet-019-n-overflow-badge-shows-correct-hidden-projects-count) | '+N' overflow badge shows correct hidden projects count | Employee Details | functional | medium |
| [TC-EMPDET-020](#tc-empdet-020-skills-n-overflow-badge-shows-correct-hidden-skills-count) | Skills '+N' overflow badge shows correct hidden skills count | Employee Details | functional | medium |
| [TC-EMPDET-021](#tc-empdet-021-tab-switch-resets-search-and-filter-state-independently) | Tab switch resets search and filter state independently | Employee Details | functional | high |
| [TC-EMPDET-022](#tc-empdet-022-edit-drawer-save-with-required-field-empty-shows-validation-error) | Edit Drawer Save with required field empty shows validation error | Employee Details | negative | high |
| [TC-EMPDET-023](#tc-empdet-023-advanced-filter-end-date-earlier-than-start-date-shows-validation-error) | Advanced Filter end date earlier than start date shows validation error | Employee Details | negative | medium |
| [TC-EMPDET-024](#tc-empdet-024-advanced-filter-availability-101-is-rejected) | Advanced Filter Availability % = 101 is rejected | Employee Details | negative | medium |
| [TC-EMPDET-025](#tc-empdet-025-advanced-filter-experience-1-is-rejected) | Advanced Filter Experience = -1 is rejected | Employee Details | negative | medium |
| [TC-EMPDET-026](#tc-empdet-026-xss-payload-in-search-box-does-not-execute) | XSS payload in search box does not execute | Employee Details | negative | high |
| [TC-EMPDET-027](#tc-empdet-027-sql-injection-in-search-box-does-not-leak-data-or-errors) | SQL injection in search box does not leak data or errors | Employee Details | negative | high |
| [TC-EMPDET-028](#tc-empdet-028-unauthenticated-direct-url-access-shows-access-denied) | Unauthenticated direct URL access shows access denied | Employee Details | negative | critical |
| [TC-EMPDET-029](#tc-empdet-029-search-with-empty-string-shows-full-unfiltered-list) | Search with empty string shows full unfiltered list | Employee Details | boundary | medium |
| [TC-EMPDET-030](#tc-empdet-030-search-with-single-character-returns-partial-matches) | Search with single character returns partial matches | Employee Details | boundary | medium |
| [TC-EMPDET-031](#tc-empdet-031-search-with-300-character-string-does-not-crash-or-degrade) | Search with 300-character string does not crash or degrade | Employee Details | boundary | medium |
| [TC-EMPDET-032](#tc-empdet-032-search-with-unicode-name-returns-correct-matches) | Search with Unicode name (é, ñ, 中) returns correct matches | Employee Details | boundary | medium |
| [TC-EMPDET-033](#tc-empdet-033-search-with-emoji-input-handled-gracefully) | Search with emoji input handled gracefully | Employee Details | boundary | low |
| [TC-EMPDET-034](#tc-empdet-034-search-results-update-count-badge-instantly-on-input) | Search results update count badge instantly on input | Employee Details | boundary | medium |
| [TC-EMPDET-035](#tc-empdet-035-first-page-previous-button-is-disabled) | First page Previous button is disabled | Employee Details | boundary | medium |
| [TC-EMPDET-036](#tc-empdet-036-last-page-next-button-is-disabled) | Last page Next button is disabled | Employee Details | boundary | medium |
| [TC-EMPDET-037](#tc-empdet-037-single-employee-record-shows-no-pagination-controls-or-disabled) | Single employee record shows no pagination controls or disabled | Employee Details | boundary | low |
| [TC-EMPDET-038](#tc-empdet-038-zero-employees-shows-empty-state-not-empty-pagination) | Zero employees shows empty state, not empty pagination | Employee Details | boundary | medium |
| [TC-EMPDET-039](#tc-empdet-039-page-navigation-does-not-duplicate-or-drop-records) | Page navigation does not duplicate or drop records | Employee Details | boundary | high |
| [TC-EMPDET-040](#tc-empdet-040-adding-employee-while-on-last-page-updates-pagination-correctly) | Adding employee while on last page updates pagination correctly | Employee Details | boundary | medium |
| [TC-EMPDET-041](#tc-empdet-041-applying-filter-with-zero-matching-results-shows-empty-state) | Applying filter with zero matching results shows empty state | Employee Details | boundary | medium |
| [TC-EMPDET-042](#tc-empdet-042-conflicting-advanced-filter-combination-yields-zero-results-gracefully) | Conflicting advanced filter combination yields zero results gracefully | Employee Details | boundary | medium |
| [TC-EMPDET-043](#tc-empdet-043-sort-order-preserved-after-applying-a-basic-filter) | Sort order preserved after applying a Basic Filter | Employee Details | boundary | high |
| [TC-EMPDET-044](#tc-empdet-044-filter-chips-removed-fully-after-reset-no-residual-state) | Filter chips removed fully after Reset — no residual state | Employee Details | boundary | high |
| [TC-EMPDET-045](#tc-empdet-045-multiple-advanced-filter-fields-combined-produce-correct-and-results) | Multiple Advanced Filter fields combined produce correct AND results | Employee Details | boundary | medium |
| [TC-EMPDET-046](#tc-empdet-046-advanced-filter-multiple-rating-filters-combined-overall-ai-communication) | Advanced Filter multiple rating filters combined (Overall + AI + Communication) | Employee Details | boundary | medium |
| [TC-EMPDET-047](#tc-empdet-047-advanced-filter-availability-0-is-accepted) | Advanced Filter Availability % = 0 is accepted | Employee Details | boundary | medium |
| [TC-EMPDET-048](#tc-empdet-048-advanced-filter-availability-100-is-accepted) | Advanced Filter Availability % = 100 is accepted | Employee Details | boundary | medium |
| [TC-EMPDET-049](#tc-empdet-049-advanced-filter-availability-1-is-rejected) | Advanced Filter Availability % = -1 is rejected | Employee Details | boundary | medium |
| [TC-EMPDET-050](#tc-empdet-050-advanced-filter-availability-101-is-rejected) | Advanced Filter Availability % = 101 is rejected | Employee Details | boundary | medium |
| [TC-EMPDET-051](#tc-empdet-051-advanced-filter-experience-0-is-accepted) | Advanced Filter Experience = 0 is accepted | Employee Details | boundary | medium |
| [TC-EMPDET-052](#tc-empdet-052-advanced-filter-experience-2-5-fractional-is-accepted) | Advanced Filter Experience = 2.5 (fractional) is accepted | Employee Details | boundary | medium |
| [TC-EMPDET-053](#tc-empdet-053-advanced-filter-experience-1-is-rejected) | Advanced Filter Experience = -1 is rejected | Employee Details | boundary | medium |
| [TC-EMPDET-054](#tc-empdet-054-advanced-filter-available-since-valid-date-range-accepted) | Advanced Filter Available Since valid date range accepted | Employee Details | boundary | medium |
| [TC-EMPDET-055](#tc-empdet-055-advanced-filter-same-day-start-and-end-date-is-accepted) | Advanced Filter same-day start and end date is accepted | Employee Details | boundary | low |
| [TC-EMPDET-056](#tc-empdet-056-advanced-filter-end-date-day-before-start-date-is-rejected) | Advanced Filter end date = day before start date is rejected | Employee Details | boundary | medium |
| [TC-EMPDET-057](#tc-empdet-057-employee-with-no-reporting-manager-renders-cell-gracefully) | Employee with no Reporting Manager renders cell gracefully | Employee Details | boundary | medium |
| [TC-EMPDET-058](#tc-empdet-058-employee-with-no-skills-renders-skills-cell-without-n-chip) | Employee with no Skills renders Skills cell without +N chip | Employee Details | boundary | low |
| [TC-EMPDET-059](#tc-empdet-059-employee-with-null-department-renders-department-badge-gracefully) | Employee with null Department renders Department badge gracefully | Employee Details | boundary | medium |
| [TC-EMPDET-060](#tc-empdet-060-employee-with-null-projects-renders-projects-cell-gracefully) | Employee with null Projects renders Projects cell gracefully | Employee Details | boundary | medium |
| [TC-EMPDET-061](#tc-empdet-061-edit-drawer-save-with-very-long-text-in-optional-field-is-handled) | Edit Drawer Save with very long text in optional field is handled | Employee Details | boundary | low |
| [TC-EMPDET-062](#tc-empdet-062-edit-drawer-save-with-special-characters-in-fields-is-handled) | Edit Drawer Save with special characters in fields is handled | Employee Details | boundary | medium |
| [TC-EMPDET-063](#tc-empdet-063-double-click-save-in-edit-drawer-submits-only-one-update) | Double-click Save in Edit Drawer submits only one update | Employee Details | boundary | high |
| [TC-EMPDET-064](#tc-empdet-064-close-edit-drawer-with-unsaved-changes-shows-confirmation-dialog) | Close Edit Drawer with unsaved changes shows confirmation dialog | Employee Details | boundary | medium |
| [TC-EMPDET-065](#tc-empdet-065-overallocated-employee-100-availability-displayed-with-visual-flag) | Overallocated employee (>100% availability) displayed with visual flag | Employee Details | boundary | medium |
| [TC-EMPDET-066](#tc-empdet-066-circular-or-self-reporting-manager-displayed-gracefully) | Circular or self-reporting manager displayed gracefully | Employee Details | boundary | medium |
| [TC-EMPDET-067](#tc-empdet-067-broken-avatar-image-url-falls-back-to-placeholder) | Broken avatar image URL falls back to placeholder | Employee Details | boundary | low |
| [TC-EMPDET-068](#tc-empdet-068-disabled-feature-flag-hides-navigation-entry-entirely) | Disabled feature flag hides navigation entry entirely | Employee Details | boundary | high |
| [TC-EMPDET-069](#tc-empdet-069-session-timeout-mid-edit-blocks-save-and-prompts-re-auth) | Session timeout mid-edit blocks save and prompts re-auth | Employee Details | boundary | high |
| [TC-EMPDET-070](#tc-empdet-070-browser-refresh-during-edit-drawer-save-does-not-corrupt-record) | Browser refresh during Edit Drawer save does not corrupt record | Employee Details | boundary | medium |
| [TC-EMPDET-071](#tc-empdet-071-concurrent-edit-conflict-two-users-editing-same-employee) | Concurrent edit conflict — two users editing same employee | Employee Details | boundary | high |
| [TC-EMPDET-072](#tc-empdet-072-employee-count-0-shows-empty-state-not-zero-count-grid) | Employee count = 0 shows empty state not zero-count grid | Employee Details | boundary | medium |
| [TC-EMPDET-073](#tc-empdet-073-employee-count-1-shows-single-record-with-no-pagination) | Employee count = 1 shows single record with no pagination | Employee Details | boundary | low |
| [TC-EMPDET-074](#tc-empdet-074-employee-count-500-list-loads-within-2-seconds) | Employee count = 500+ list loads within 2 seconds | Employee Details | boundary | high |
| [TC-EMPDET-075](#tc-empdet-075-last-updated-value-matches-api-response-not-client-side-computed) | Last Updated value matches API response — not client-side computed | Employee Details | boundary | critical |
| [TC-EMPDET-076](#tc-empdet-076-grid-values-match-api-response-for-allocation-and-log-hours) | Grid values match API response for Allocation % and Log Hours | Employee Details | boundary | critical |
| [TC-EMPDET-077](#tc-empdet-077-admin-sees-edit-action-on-all-employee-rows) | Admin sees Edit action on all employee rows | Employee Details | security | critical |
| [TC-EMPDET-078](#tc-empdet-078-restricted-role-tm-does-not-see-edit-action-in-ui) | Restricted role (TM) does not see Edit action in UI | Employee Details | security | critical |
| [TC-EMPDET-079](#tc-empdet-079-restricted-role-direct-api-patch-returns-403-forbidden) | Restricted role direct API PATCH returns 403 Forbidden | Employee Details | security | critical |
| [TC-EMPDET-080](#tc-empdet-080-idor-restricted-role-cannot-access-another-employee-s-record-via-api) | IDOR — restricted role cannot access another employee's record via API | Employee Details | security | critical |
| [TC-EMPDET-081](#tc-empdet-081-feature-flag-disabled-edit-control-hidden-for-all-roles-including-admin) | Feature flag disabled — Edit control hidden for ALL roles including Admin | Employee Details | security | high |
| [TC-EMPDET-082](#tc-empdet-082-feature-flag-disabled-api-edit-endpoint-returns-403) | Feature flag disabled — API edit endpoint returns 403 | Employee Details | security | high |
| [TC-EMPDET-083](#tc-empdet-083-hr-role-can-edit-employee-records) | HR role can edit employee records | Employee Details | security | high |
| [TC-EMPDET-084](#tc-empdet-084-employee-role-cannot-see-edit-action) | Employee role cannot see Edit action | Employee Details | security | high |
| [TC-EMPDET-085](#tc-empdet-085-resource-manager-sees-only-employees-within-their-scope) | Resource Manager sees only employees within their scope | Employee Details | security | high |
| [TC-EMPDET-086](#tc-empdet-086-xss-payload-in-search-does-not-inject-into-dom) | XSS payload in search does not inject into DOM | Employee Details | security | high |
| [TC-EMPDET-087](#tc-empdet-087-direct-url-access-without-auth-redirects-to-login) | Direct URL access without auth redirects to login | Employee Details | security | critical |
| [TC-EMPDET-088](#tc-empdet-088-session-expiry-during-edit-blocks-save-without-data-corruption) | Session expiry during edit blocks save without data corruption | Employee Details | security | high |
| [TC-EMPDET-089](#tc-empdet-089-keyboard-only-navigation-through-search-filters-grid-and-edit-drawer) | Keyboard-only navigation through search, filters, grid, and Edit Drawer | Employee Details | a11y | medium |
| [TC-EMPDET-090](#tc-empdet-090-employee-list-loads-within-2-seconds) | Employee list loads within 2 seconds | Employee Details | performance | high |
| [TC-EMPDET-091](#tc-empdet-091-search-results-update-within-1-second) | Search results update within 1 second | Employee Details | performance | high |
| [TC-EMPDET-092](#tc-empdet-092-filter-apply-completes-within-2-seconds) | Filter apply completes within 2 seconds | Employee Details | performance | high |
| [TC-EMPDET-093](#tc-empdet-093-sort-completes-within-2-seconds) | Sort completes within 2 seconds | Employee Details | performance | medium |
| [TC-EMPDET-094](#tc-empdet-094-pagination-navigation-completes-within-2-seconds) | Pagination navigation completes within 2 seconds | Employee Details | performance | medium |
| [TC-EMPDET-095](#tc-empdet-095-filter-panel-opens-within-1-second) | Filter panel opens within 1 second | Employee Details | performance | medium |
| [TC-EMPDET-096](#tc-empdet-096-ui-remains-responsive-with-500-employee-records) | UI remains responsive with 500+ employee records | Employee Details | performance | high |
| [TC-EMPDET-097](#tc-empdet-097-reg-null-reporting-manager-cell-renders-without-js-crash) | [REG] Null Reporting Manager cell renders without JS crash | Employee Details | regression | medium |
| [TC-EMPDET-098](#tc-empdet-098-reg-null-skills-cell-shows-no-broken-n-chip) | [REG] Null Skills cell shows no broken +N chip | Employee Details | regression | low |
| [TC-EMPDET-099](#tc-empdet-099-reg-null-department-and-projects-fall-back-gracefully) | [REG] Null Department and Projects fall back gracefully | Employee Details | regression | medium |
| [TC-EMPDET-100](#tc-empdet-100-reg-single-search-result-shows-1-of-1-pagination) | [REG] Single search result shows '1 of 1' pagination | Employee Details | regression | low |
| [TC-EMPDET-101](#tc-empdet-101-reg-zero-results-search-shows-empty-state-message-and-count-0) | [REG] Zero results search shows empty state message and count=0 | Employee Details | regression | medium |
| [TC-EMPDET-102](#tc-empdet-102-reg-500-records-all-performance-targets-met-and-pagination-accurate) | [REG] 500+ records — all performance targets met and pagination accurate | Employee Details | regression | high |
| [TC-EMPDET-103](#tc-empdet-103-reg-api-500-error-shows-user-friendly-error-no-js-crash) | [REG] API 500 error shows user-friendly error, no JS crash | Employee Details | regression | high |
| [TC-EMPDET-104](#tc-empdet-104-reg-xss-in-search-escaped-correctly-in-rendered-output) | [REG] XSS in search escaped correctly in rendered output | Employee Details | regression | critical |
| [TC-EMPDET-105](#tc-empdet-105-reg-special-characters-in-search-produce-correct-matches) | [REG] Special characters in search produce correct matches | Employee Details | regression | medium |
| [TC-EMPDET-106](#tc-empdet-106-reg-pagination-boundary-archive-employee-on-last-page-keeps-integrity) | [REG] Pagination boundary — archive employee on last page keeps integrity | Employee Details | regression | high |
| [TC-EMPDET-107](#tc-empdet-107-reg-advanced-filter-invalid-date-range-shows-validation-error) | [REG] Advanced filter invalid date range shows validation error | Employee Details | regression | medium |
| [TC-EMPDET-108](#tc-empdet-108-reg-advanced-filter-out-of-range-values-rejected) | [REG] Advanced filter out-of-range values rejected | Employee Details | regression | medium |
| [TC-EMPDET-109](#tc-empdet-109-reg-tab-switch-clears-search-state-no-cross-tab-search-pollution) | [REG] Tab switch clears search state — no cross-tab search pollution | Employee Details | regression | medium |
| [TC-EMPDET-110](#tc-empdet-110-reg-double-click-save-creates-exactly-one-update) | [REG] Double-click Save creates exactly one update | Employee Details | regression | high |
| [TC-EMPDET-111](#tc-empdet-111-reg-employee-count-mismatch-add-employee-syncs-grid-badge-and-api) | [REG] Employee count mismatch — add employee syncs grid, badge, and API | Employee Details | regression | critical |
| [TC-EMPDET-112](#tc-empdet-112-reg-archive-employee-syncs-grid-badge-and-api-count) | [REG] Archive employee syncs grid, badge, and API count | Employee Details | regression | critical |
| [TC-EMPDET-113](#tc-empdet-113-reg-api-vs-ui-data-parity-for-allocation-and-log-hours) | [REG] API vs UI data parity for Allocation % and Log Hours | Employee Details | regression | high |
| [TC-EMPDET-114](#tc-empdet-114-reg-feature-flag-visibility-edit-hidden-for-all-roles-when-disabled) | [REG] Feature flag visibility — Edit hidden for all roles when disabled | Employee Details | regression | high |
| [TC-EMPDET-115](#tc-empdet-115-reg-edit-button-consistently-present-on-hover-after-crud-operations) | [REG] Edit button consistently present on hover after CRUD operations | Employee Details | regression | high |
| [TC-EMPDET-116](#tc-empdet-116-reg-sort-order-preserved-after-applying-then-clearing-filter) | [REG] Sort order preserved after applying then clearing filter | Employee Details | regression | medium |
| [TC-EMPDET-117](#tc-empdet-117-reg-filter-chip-fully-removed-after-reset-no-residual-state) | [REG] Filter chip fully removed after Reset — no residual state | Employee Details | regression | high |
| [TC-EMPDET-118](#tc-empdet-118-reg-archived-employee-absent-from-reporting-manager-dropdown-in-edit-drawer) | [REG] Archived employee absent from Reporting Manager dropdown in Edit Drawer | Employee Details | regression | high |
| [TC-EMPDET-119](#tc-empdet-119-reg-edit-drawer-no-auto-save-navigating-away-does-not-create-partial-record) | [REG] Edit Drawer no auto-save — navigating away does not create partial record | Employee Details | regression | medium |
| [TC-EMPDET-120](#tc-empdet-120-reg-invalid-lifecycle-transition-rejected-archived-to-active-via-api-bypass) | [REG] Invalid lifecycle transition rejected — Archived to Active via API bypass | Employee Details | regression | high |
| [TC-EMPDET-121](#tc-empdet-121-reg-grid-reflects-create-update-archive-immediately-without-manual-refresh) | [REG] Grid reflects create/update/archive immediately without manual refresh | Employee Details | regression | high |
| [TC-EMPDET-122](#tc-empdet-122-reg-action-buttons-edit-remain-on-updated-row-after-save) | [REG] Action buttons (Edit) remain on updated row after save | Employee Details | regression | high |
| [TC-EMPDET-123](#tc-empdet-123-reg-pagination-does-not-duplicate-or-drop-records-mid-session-data-change) | [REG] Pagination does not duplicate or drop records mid-session data change | Employee Details | regression | high |
| [TC-EMPDET-124](#tc-empdet-124-int-renamed-department-updates-filter-options-and-employee-badge) | [INT] Renamed Department updates filter options and employee badge | Employee Details | integration | medium |
| [TC-EMPDET-125](#tc-empdet-125-int-archived-manager-handled-gracefully-in-hover-card-and-grid) | [INT] Archived manager handled gracefully in hover card and grid | Employee Details | integration | high |
| [TC-EMPDET-126](#tc-empdet-126-int-skills-column-matches-skills-service-data-exactly-including-n-count) | [INT] Skills column matches Skills Service data exactly including +N count | Employee Details | integration | medium |
| [TC-EMPDET-127](#tc-empdet-127-int-archived-project-does-not-appear-in-active-employee-s-project-badges) | [INT] Archived project does not appear in active employee's Project badges | Employee Details | integration | medium |
| [TC-EMPDET-128](#tc-empdet-128-int-allocation-service-sync-availability-and-log-hours-not-stale) | [INT] Allocation Service sync — Availability % and Log Hours not stale | Employee Details | integration | high |
| [TC-EMPDET-129](#tc-empdet-129-int-tm-role-scope-consistency-between-employee-details-and-allocation-views) | [INT] TM role scope consistency between Employee Details and Allocation views | Employee Details | integration | medium |
| [TC-EMPDET-130](#tc-empdet-130-int-all-role-gated-ui-controls-have-corresponding-backend-403-enforcement) | [INT] All role-gated UI controls have corresponding backend 403 enforcement | Employee Details | integration | critical |

---

## Employee Details

130 test cases.

### A11y (1)

#### TC-EMPDET-089 — Keyboard-only navigation through search, filters, grid, and Edit Drawer

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | nfrRequirements.accessibility, acceptanceCriteria via keyboard |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Tab through all interactive elements
4. Open Edit Drawer via keyboard
5. Tab through drawer fields
6. Close drawer via keyboard

**Expected**

All interactive elements reachable via Tab; focus trap active in drawer; focus returns to Edit button on close; visible focus indicators on all elements

**Test Data**

- `inputMethod`: keyboard-only

**Automation Hint**

Axe or manual keyboard test; assert focus-trap in drawer

### Boundary (48)

#### TC-EMPDET-029 — Search with empty string shows full unfiltered list

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Clear search box (or leave empty)
4. Observe grid

**Expected**

Full employee list shown; count equals unfiltered API total

**Test Data**

**Automation Hint**

Assert row count == API total when search is empty

#### TC-EMPDET-030 — Search with single character returns partial matches

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type single character 'a' in search
4. Observe results

**Expected**

All employees whose name/email/project contains 'a' (case-insensitive) shown; no crash

**Test Data**

- `searchTerm`: a

**Automation Hint**

Assert results non-empty; all contain 'a' case-insensitively

#### TC-EMPDET-031 — Search with 300-character string does not crash or degrade

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[7] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Paste 300-character string into search
4. Observe behavior

**Expected**

No crash, no JS error; either empty state shown or results returned within 1 second

**Test Data**

- `searchTerm`: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

**Automation Hint**

Assert no console errors; page remains responsive

#### TC-EMPDET-032 — Search with Unicode name (é, ñ, 中) returns correct matches

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | testDataHints[0], edgeCases[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with a Unicode name exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search for 'José'
4. Observe results

**Expected**

Employee with Unicode name found; no encoding error

**Test Data**

- `searchTerm`: José

**Automation Hint**

Assert row with Unicode name visible

#### TC-EMPDET-033 — Search with emoji input handled gracefully

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[6] |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type emoji in search box
4. Observe behavior

**Expected**

No crash; empty state or zero results shown; no JS error

**Test Data**

- `searchTerm`: 😊

**Automation Hint**

Assert page stable; no unhandled exception

#### TC-EMPDET-034 — Search results update count badge instantly on input

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | acceptanceCriteria[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type 'Raj' character by character
4. Observe count badge after each keystroke

**Expected**

Count badge updates in real-time as search term changes; never shows stale count

**Test Data**

- `searchTerm`: Raj

**Automation Hint**

Assert count badge matches visible rows after each keystroke

#### TC-EMPDET-035 — First page Previous button is disabled

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | acceptanceCriteria[5] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ employees exist

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Ensure page 1 is active
4. Check Previous button state

**Expected**

Previous button disabled on first page; clicking does nothing

**Test Data**

- `page`: 1

**Automation Hint**

Assert Previous button has disabled attribute or aria-disabled=true

#### TC-EMPDET-036 — Last page Next button is disabled

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | acceptanceCriteria[5] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ employees exist

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Navigate to last page
4. Check Next button state

**Expected**

Next button disabled on last page; no action on click

**Test Data**

- `page`: last

**Automation Hint**

Assert Next button disabled on last page

#### TC-EMPDET-037 — Single employee record shows no pagination controls or disabled

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-04 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Search term yields exactly 1 result

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search for a term matching exactly 1 employee
4. Check pagination area

**Expected**

Pagination shows '1 of 1'; Previous and Next both disabled

**Test Data**

- `searchTerm`: unique_employee_name

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert pagination text '1 of 1'; both nav buttons disabled

#### TC-EMPDET-038 — Zero employees shows empty state, not empty pagination

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-05 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search for a term matching no employees
4. Observe grid area

**Expected**

Empty state message shown; count badge = 0; pagination hidden or disabled; no JS error

**Test Data**

- `searchTerm`: zzznomatch999

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert STATE_EMPTY element visible; count badge text = '0'

#### TC-EMPDET-039 — Page navigation does not duplicate or drop records

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | businessRules[19], acceptanceCriteria[11] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ employees exist

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Collect all employee IDs on page 1
4. Navigate to page 2
5. Collect IDs
6. Assert no overlap

**Expected**

No employee ID appears on more than one page; no gaps in total count

**Automation Hint**

Accumulate IDs across pages; assert set size == API total

#### TC-EMPDET-040 — Adding employee while on last page updates pagination correctly

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-10 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Currently on last page of employee list

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Navigate to last page
4. Add a new employee record (via API or admin action)
5. Observe pagination

**Expected**

Total count increments; new page created if threshold exceeded; no duplicate rows

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert total count +1; verify new record visible without duplicate

#### TC-EMPDET-041 — Applying filter with zero matching results shows empty state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | acceptanceCriteria[11], edgeCases[8] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Apply Department filter with a value matching no employees
4. Observe grid

**Expected**

Empty state shown; count = 0; filter chip visible for recovery; no error

**Test Data**

- `department`: NonExistentDept

**Automation Hint**

Assert STATE_EMPTY; count=0; filter chip present

#### TC-EMPDET-042 — Conflicting advanced filter combination yields zero results gracefully

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[8] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Set conflicting filter values (e.g., Availability=100% AND Experience=50 years)
4. Apply
5. Observe

**Expected**

Zero results shown with empty state message; no error or crash

**Test Data**

- `availability`: 100
- `experience`: 50

**Automation Hint**

Assert empty state; no console errors

#### TC-EMPDET-043 — Sort order preserved after applying a Basic Filter

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-SORT |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Sort by Name ascending
4. Apply Department filter
5. Verify sort still active

**Expected**

Name column still sorted ascending after filter applied; sort icon remains visible

**Test Data**

- `sortColumn`: Name
- `filter`: Department=Engineering

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert row order is still alphabetical within filtered results

#### TC-EMPDET-044 — Filter chips removed fully after Reset — no residual state

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-FILTER-RESET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Apply Department + Manager + Skills filters
4. Click Reset
5. Verify UI state

**Expected**

All three filter chips removed; full unfiltered dataset restored; count reverts to unfiltered total

**Test Data**

- `filters`: Department, Manager, Skills

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert zero filter chips visible; count == unfiltered API total

#### TC-EMPDET-045 — Multiple Advanced Filter fields combined produce correct AND results

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | acceptanceCriteria[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Availability=50, Experience=2, Department=Engineering
5. Save
6. Observe

**Expected**

Grid shows only employees satisfying ALL three criteria simultaneously

**Test Data**

- `availability`: 50
- `experience`: 2
- `department`: Engineering

**Automation Hint**

Assert each visible row satisfies all three filter conditions

#### TC-EMPDET-046 — Advanced Filter multiple rating filters combined (Overall + AI + Communication)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[9] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Overall, AI, and Communication rating filters simultaneously
5. Save

**Expected**

Grid filtered by all three rating dimensions; no crash; results accurate

**Test Data**

- `ratingFilters`: Overall, AI, Communication

**Automation Hint**

Assert row count plausible; no JS error

#### TC-EMPDET-047 — Advanced Filter Availability % = 0 is accepted

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[2], testDataHints[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Availability % = 0
5. Save

**Expected**

Filter accepted; grid shows employees with 0% availability

**Test Data**

- `availability`: 0

**Automation Hint**

Assert no validation error at boundary value 0

#### TC-EMPDET-048 — Advanced Filter Availability % = 100 is accepted

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Availability % = 100
5. Save

**Expected**

Filter accepted; grid shows employees with 100% availability

**Test Data**

- `availability`: 100

**Automation Hint**

Assert no validation error at boundary value 100

#### TC-EMPDET-049 — Advanced Filter Availability % = -1 is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[2], testDataHints[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Availability % = -1
5. Click Save

**Expected**

Validation error shown; filter not applied

**Test Data**

- `availability`: -1

**Automation Hint**

Assert error message; count unchanged

#### TC-EMPDET-050 — Advanced Filter Availability % = 101 is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[2], testDataHints[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Availability % = 101
5. Click Save

**Expected**

Validation error shown; filter not applied

**Test Data**

- `availability`: 101

**Automation Hint**

Assert error; count unchanged

#### TC-EMPDET-051 — Advanced Filter Experience = 0 is accepted

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Experience = 0
5. Save

**Expected**

Filter accepted; results show employees with 0 years experience

**Test Data**

- `experience`: 0

**Automation Hint**

Assert no validation error

#### TC-EMPDET-052 — Advanced Filter Experience = 2.5 (fractional) is accepted

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | testDataHints[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Experience = 2.5
5. Save

**Expected**

Fractional value accepted; results filtered accordingly

**Test Data**

- `experience`: 2.5

**Automation Hint**

Assert no error; grid updates

#### TC-EMPDET-053 — Advanced Filter Experience = -1 is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Experience = -1
5. Click Save

**Expected**

Value rejected with validation error

**Test Data**

- `experience`: -1

**Automation Hint**

Assert error message on Experience field

#### TC-EMPDET-054 — Advanced Filter Available Since valid date range accepted

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set start=2025-01-01, end=2025-12-31
5. Save

**Expected**

Date range accepted; grid filtered to employees available in that range

**Test Data**

- `startDate`: 2025-01-01
- `endDate`: 2025-12-31

**Automation Hint**

Assert no validation error; results shown

#### TC-EMPDET-055 — Advanced Filter same-day start and end date is accepted

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[1] |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set start = end = 2025-06-15
5. Save

**Expected**

Same-day range accepted; results filtered (may be empty but no validation error)

**Test Data**

- `startDate`: 2025-06-15
- `endDate`: 2025-06-15

**Automation Hint**

Assert no error on equal dates

#### TC-EMPDET-056 — Advanced Filter end date = day before start date is rejected

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | validationRules[1], knownBugEdgeCases: EMPDET-EC-11 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Set start=2025-06-15, end=2025-06-14
4. Save

**Expected**

Validation error shown for invalid date range

**Test Data**

- `startDate`: 2025-06-15
- `endDate`: 2025-06-14

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert error message on date fields

#### TC-EMPDET-057 — Employee with no Reporting Manager renders cell gracefully

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-01 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with null Reporting Manager exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find an employee row with no Reporting Manager
4. Observe the Reporting Manager cell

**Expected**

Cell shows a placeholder (e.g., '—' or 'N/A'); no JS crash; no hover card on empty cell

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no error; cell renders without crash

#### TC-EMPDET-058 — Employee with no Skills renders Skills cell without +N chip

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-02 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with no skills exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee row with no skills
4. Observe Skills cell

**Expected**

Skills cell shows empty/placeholder state; no broken '+N' chip

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no +N element; no JS error

#### TC-EMPDET-059 — Employee with null Department renders Department badge gracefully

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-03 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with null Department exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with no Department
4. Observe Department badge

**Expected**

Department badge shows placeholder or empty state; no crash

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no error; badge element stable

#### TC-EMPDET-060 — Employee with null Projects renders Projects cell gracefully

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-03 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with no projects exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with no Projects
4. Observe Projects cell

**Expected**

Projects cell shows empty/placeholder; no crash; no broken badges

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no JS error; cell renders

#### TC-EMPDET-061 — Edit Drawer Save with very long text in optional field is handled

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules general |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Paste 1000-character string in an optional text field
5. Click Save

**Expected**

Either saved successfully or rejected with clear max-length message; no silent truncation without notice

**Test Data**

- `field`: notes
- `value`: <1000-character x-filled string>

**Automation Hint**

Assert either success or visible validation message

#### TC-EMPDET-062 — Edit Drawer Save with special characters in fields is handled

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRules[0] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Enter name with apostrophe and hyphen
5. Save
6. Verify grid

**Expected**

Special characters saved correctly; grid reflects exact value without encoding artifacts

**Test Data**

- `field`: name
- `value`: O'Brien-Smith, Jr.

**Automation Hint**

Assert grid cell text == entered value

#### TC-EMPDET-063 — Double-click Save in Edit Drawer submits only one update

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | businessRules[10], knownBugEdgeCases: EMPDET-EC-14 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Change Designation
5. Rapidly double-click Save

**Expected**

Only one API PATCH call made; record not duplicated or corrupted

**Test Data**

- `field`: designation
- `value`: QA Lead

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Intercept network; assert exactly 1 PATCH request

#### TC-EMPDET-064 — Close Edit Drawer with unsaved changes shows confirmation dialog

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | businessRules[13], edgeCases |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Change Designation
5. Click × (close button)
6. Observe

**Expected**

Confirmation dialog appears before discarding changes; dismissing leaves data unchanged

**Test Data**

- `field`: designation
- `value`: Director

**Automation Hint**

Assert dialog visible; assert dismissing leaves drawer open or reverts changes per UX decision

#### TC-EMPDET-065 — Overallocated employee (>100% availability) displayed with visual flag

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | edgeCases[3], unclear: overallocation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with >100% allocation exists in test data

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with allocation >100%
4. Observe Availability indicator

**Expected**

Availability shown with a visual flag (e.g., red indicator); no JS crash; value displayed accurately

**Test Data**

- `availability`: 120

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Assert BADGE_AVAILABILITY has overallocation class or red styling

#### TC-EMPDET-066 — Circular or self-reporting manager displayed gracefully

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee whose Reporting Manager is themselves or in a circular chain exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with circular/self reporting chain
4. Hover on Reporting Manager cell

**Expected**

Hover card renders without infinite loop; no JS crash; displays available manager info

**Automation Hint**

Assert no infinite re-render; page stable

#### TC-EMPDET-067 — Broken avatar image URL falls back to placeholder

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[1] |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee with a broken avatar URL exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee row with broken avatar
4. Observe EMP_AVATAR element

**Expected**

Placeholder image or initials shown; no broken image icon; no JS error

**Automation Hint**

Assert img fallback or initials element visible

#### TC-EMPDET-068 — Disabled feature flag hides navigation entry entirely

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | edgeCases[5], businessRules[12] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Feature flag for Employee Details disabled in test environment

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Observe navigation menu

**Expected**

Employee Details navigation entry is completely hidden; direct URL returns 403/404

**Automation Hint**

Assert nav item not in DOM; direct URL blocked

#### TC-EMPDET-069 — Session timeout mid-edit blocks save and prompts re-auth

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[4], negativeScenarios[6] |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Ability to expire session token in test environment

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Expire session token
5. Attempt Save

**Expected**

Save blocked; user notified of expired session; prompted to re-authenticate; no partial data corruption

**Automation Hint**

Manual or session-expiry API mock required

#### TC-EMPDET-070 — Browser refresh during Edit Drawer save does not corrupt record

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCases[7] |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Change Designation
5. Click Save
6. Immediately refresh browser

**Expected**

Record either saved or not saved; no partial/corrupt state; grid reflects consistent value

**Test Data**

- `field`: designation
- `value`: Architect

**Automation Hint**

Manual timing required; assert data integrity via API GET after refresh

#### TC-EMPDET-071 — Concurrent edit conflict — two users editing same employee

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | edgeCases[6], unclear: real-time conflict resolution |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json), punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Navigate to Employee > Employee Details; Two browser sessions open simultaneously

**Steps**

1. User A opens Edit Drawer for Employee X
2. User B also opens Edit Drawer for Employee X
3. User A saves first
4. User B attempts to save

**Expected**

Conflict detected; User B shown conflict/stale-data message; no silent overwrite without warning

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Manual test; requires two simultaneous sessions

#### TC-EMPDET-072 — Employee count = 0 shows empty state not zero-count grid

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | testDataHints[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Past Employee tab with no archived employees

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Switch to Past tab when no archived employees exist
4. Observe

**Expected**

Empty state shown; badge = 0; no table with zero rows rendered

**Test Data**

- `tab`: Past
- `count`: 0

**Automation Hint**

Assert STATE_EMPTY visible; count badge = '0'

#### TC-EMPDET-073 — Employee count = 1 shows single record with no pagination

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | testDataHints[2], knownBugEdgeCases: EMPDET-EC-04 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Exactly 1 employee matches current filter

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Filter to yield exactly 1 result
4. Check pagination area

**Expected**

Single record shown; pagination shows '1 of 1'; Next/Prev disabled

**Test Data**

- `searchTerm`: unique_employee

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert pagination state for 1 record

#### TC-EMPDET-074 — Employee count = 500+ list loads within 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @performance, @needs-verification |
| **Requirement Ref** | nfrRequirements.performance[0], knownBugEdgeCases: EMPDET-EC-06 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 500+ employee records in staging

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Measure time from navigation to full list render

**Expected**

Page fully rendered within 2 seconds; no timeout; correct count shown

**Test Data**

- `count`: 500

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Use performance.now() or Playwright tracing; assert < 2000ms

#### TC-EMPDET-075 — Last Updated value matches API response — not client-side computed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | BR-EMP_HEADER, acceptanceCriteria[8] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Note Last Updated value on page
4. Call employee API directly
5. Compare timestamps

**Expected**

Last Updated on UI exactly matches API response timestamp; no client-side offset or reformatting that changes the value

**Test Data**

- `field`: lastUpdated

**Automation Hint**

Assert UI timestamp == API timestamp field

#### TC-EMPDET-076 — Grid values match API response for Allocation % and Log Hours

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression, @needs-verification |
| **Requirement Ref** | BR-039, knownBugEdgeCases: REG-API-UI |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Note Allocation % and Log Hours for 3 employees
4. Call employee API for same employees
5. Compare values

**Expected**

All UI values exactly match API response; no stale or client-calculated values

**Test Data**

- `fields`: allocationPct, logHours

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Intercept network response; assert displayed values match response body

### Functional (18)

#### TC-EMPDET-004 — Search by partial name returns matching employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[1], testScenarios[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type 'Raj' in search box
4. Observe results

**Expected**

Only employees whose name contains 'Raj' (case-insensitive) are shown; count badge updates

**Test Data**

- `searchTerm`: Raj

**Automation Hint**

getByTestId('emp-search') fill 'Raj'; assert all visible rows contain 'raj' case-insensitive

#### TC-EMPDET-005 — Search by full email returns exact match

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Paste full email into search box
4. Observe results

**Expected**

Exactly one employee matching that email is shown

**Test Data**

- `searchTerm`: john.doe@simformsolutions.com

**Automation Hint**

Fill search with known email; assert exactly 1 row

#### TC-EMPDET-006 — Search by project name filters employees on that project

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least one employee assigned to a known project

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type project name in search box
4. Observe results

**Expected**

Only employees assigned to ProjectAlpha are displayed

**Test Data**

- `searchTerm`: ProjectAlpha

**Automation Hint**

Fill search with project name; verify badge shows project name in each row

#### TC-EMPDET-007 — Apply single Basic Filter (Department) filters grid

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[2], BR-020 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Employees exist in at least 2 departments

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Filter panel
4. Select Department = Engineering
5. Observe grid

**Expected**

Only Engineering department employees shown; count badge updates; filter chip visible

**Test Data**

- `department`: Engineering

**Automation Hint**

Select department filter; assert all rows show Engineering badge

#### TC-EMPDET-008 — Apply multiple Basic Filters in combination (AND logic)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[2], businessRules[6] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Filter panel
4. Select Department = Engineering AND Night Shift = Yes
5. Apply
6. Observe grid

**Expected**

Grid shows only employees matching ALL selected criteria; count reflects combined filter

**Test Data**

- `department`: Engineering
- `nightShift`: Yes

**Automation Hint**

Assert each row satisfies both filter conditions

#### TC-EMPDET-009 — Reset Basic Filters restores full unfiltered list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | BR-020, acceptanceCriteria[5] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; A Basic Filter is currently applied

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Apply a Department filter
4. Click Reset
5. Observe grid

**Expected**

All filter chips cleared; full employee list restored for current tab; count returns to unfiltered total

**Automation Hint**

Assert no filter chips visible; row count == unfiltered API total

#### TC-EMPDET-010 — Advanced Filter Save applies all criteria to grid

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | acceptanceCriteria[3], businessRules[8] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter panel
4. Set Availability % = 50, Experience = 3
5. Click Save
6. Observe grid

**Expected**

Grid updates with employees matching all advanced criteria; count badge updates; filter chips shown

**Test Data**

- `availability`: 50
- `experience`: 3

**Automation Hint**

Assert grid refreshes only after Save, not during field entry

#### TC-EMPDET-011 — Advanced Filter Cancel reverts to last-applied state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | businessRules[8] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Advanced filter with Availability=50 previously applied

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter panel
4. Change Availability % to 80
5. Click Cancel
6. Observe grid

**Expected**

Grid still shows Availability=50 results; panel closes without applying new values

**Automation Hint**

Assert grid row count unchanged from pre-Cancel state

#### TC-EMPDET-012 — Sort by Name column toggles ascending and descending

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[4], businessRules[17] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Click Name column header
4. Verify ascending order
5. Click Name again
6. Verify descending order

**Expected**

First click: A→Z order; second click: Z→A order; sort icon reflects direction

**Test Data**

- `sortColumn`: Name

**Automation Hint**

Compare first and last row text for each direction

#### TC-EMPDET-013 — Sort by Experience produces stable order with tie-breaking

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | businessRules[17] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Multiple employees with identical experience values exist

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Click Experience column header
4. Note order of employees with equal experience
5. Click again for descending

**Expected**

Employees with equal experience retain a consistent secondary order on both sort directions

**Test Data**

- `sortColumn`: Experience

**Automation Hint**

Assert equal-value rows appear in same relative order regardless of direction

#### TC-EMPDET-014 — Pagination preserves search and filter state across pages

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | acceptanceCriteria[5], businessRules[19] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ active employees exist

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search for 'a'
4. Navigate to page 2
5. Verify results still filtered

**Expected**

Search term and filter remain active on page 2; no duplicate or missing rows; boundary buttons disabled appropriately

**Test Data**

- `searchTerm`: a
- `page`: 2

**Automation Hint**

Assert search input still contains 'a' after page navigation

#### TC-EMPDET-015 — Page size selector changes number of rows displayed

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | uiElements: Pagination controls |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ employees exist

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Change page size selector to 25
4. Observe grid

**Expected**

Grid shows exactly 25 rows; pagination total reflects correct page count

**Test Data**

- `pageSize`: 25

**Automation Hint**

Assert row count == 25 (or total if < 25)

#### TC-EMPDET-016 — Edit Drawer loads correct employee data for selected row

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | acceptanceCriteria[6] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Note Name and Designation of row 1
4. Hover row 1, click Edit
5. Verify drawer content

**Expected**

Edit Drawer opens with the exact employee's current data pre-populated

**Test Data**

- `employeeRow`: 1

**Automation Hint**

Assert drawer title or field values match row 1 visible data

#### TC-EMPDET-017 — Cancel on Edit Drawer discards changes without updating grid

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | BR-029, acceptanceCriteria[6] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer for row 1
4. Change Designation to 'Chief Officer'
5. Click Cancel
6. Verify grid row 1

**Expected**

Grid row 1 Designation unchanged; no API update call made

**Test Data**

- `field`: designation
- `newValue`: Chief Officer

**Automation Hint**

Assert row 1 Designation equals original value after Cancel

#### TC-EMPDET-018 — Reporting Manager hover card shows correct manager info

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | uiElements: Reporting Manager + hover card |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least one employee has a reporting manager assigned

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Hover over Reporting Manager cell of any employee
4. Observe hover card

**Expected**

Hover card displays reporting manager's name, designation, and contact info correctly

**Automation Hint**

Trigger hover on EMP_REPORTING_MANAGER element; assert card content

#### TC-EMPDET-019 — '+N' overflow badge shows correct hidden projects count

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-02 pattern, uiElements: BADGE_OVERFLOW |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least one employee has more projects than visible columns

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find a row with '+N' project overflow badge
4. Note the N value
5. Hover or click +N badge

**Expected**

N equals the number of hidden projects; all projects visible on expand without duplicates

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert badge count + visible badges == total projects from API for that employee

#### TC-EMPDET-020 — Skills '+N' overflow badge shows correct hidden skills count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | uiElements: BADGE_SKILL |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least one employee has more skills than visible

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find a row with '+N' skills overflow badge
4. Verify N count

**Expected**

N correctly reflects number of hidden skills; no duplication on expand

**Automation Hint**

Assert badge + visible == total skills from API

#### TC-EMPDET-021 — Tab switch resets search and filter state independently

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression, @needs-verification |
| **Requirement Ref** | BR-010, knownBugEdgeCases: EMPDET-EC-13 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search 'Smith' on Current tab
4. Switch to Past tab
5. Verify search is cleared
6. Switch back to Current tab

**Expected**

Search term does not carry over between tabs; each tab maintains independent state

**Test Data**

- `searchTerm`: Smith

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert search input empty after tab switch; row count differs

### Integration (7)

#### TC-EMPDET-124 — [INT] Renamed Department updates filter options and employee badge

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Department Service |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Access to Department Service config; At least one employee in a renameable department

**Steps**

1. Rename a department via Department Service
2. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
3. Navigate to Employee > Employee Details
4. Check Department filter options and affected employee badges

**Expected**

Filter dropdown shows new department name; affected employees' badges reflect rename; no stale OldName entries

**Test Data**

- `operation`: rename
- `department`: OldName->NewName

**Automation Hint**

Manual config change; assert filter option updated

#### TC-EMPDET-125 — [INT] Archived manager handled gracefully in hover card and grid

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Reporting Manager Service |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least one employee whose Reporting Manager has since been archived

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with an archived Reporting Manager
4. Hover the Reporting Manager cell

**Expected**

Hover card renders gracefully with archived manager info (or placeholder); no crash

**Automation Hint**

Assert no JS error; hover card stable

#### TC-EMPDET-126 — [INT] Skills column matches Skills Service data exactly including +N count

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Skills Service |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with known skills set
4. Count visible badges + N overflow
5. Call Skills Service API for same employee

**Expected**

Total badge count + N == Skills Service total for that employee; no extra or missing skills

**Test Data**

- `employee`: skills-heavy-employee

**Automation Hint**

Assert badge + N value == API skills count

#### TC-EMPDET-127 — [INT] Archived project does not appear in active employee's Project badges

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Projects Service |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; An employee previously on an archived project

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee previously on archived project
4. Observe Projects badges

**Expected**

Archived project badge absent from grid display; only active projects shown

**Automation Hint**

Assert archived project name absent from BADGE_PROJECT elements

#### TC-EMPDET-128 — [INT] Allocation Service sync — Availability % and Log Hours not stale

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | affectedModules: Allocation Service (historically prone) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Update an employee's allocation via Allocation Service
3. Navigate to Employee Details
4. Check the employee's Availability % and Log Hours

**Expected**

Values reflect the latest allocation data without manual refresh; no stale cached values

**Test Data**

- `fields`: availabilityPct, logHours

**Automation Hint**

Assert displayed values match Allocation Service response

#### TC-EMPDET-129 — [INT] TM role scope consistency between Employee Details and Allocation views

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | affectedModules: Authentication Service, unclear: RM/TM scope |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json)
2. Navigate to Employee > Employee Details
3. Note which employees are visible
4. Navigate to Allocation module if accessible
5. Compare employee lists

**Expected**

Same employees visible in both views for TM role; no scope inconsistency between modules

**Test Data**

- `role`: TM

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Manual cross-module comparison; assert set equality

#### TC-EMPDET-130 — [INT] All role-gated UI controls have corresponding backend 403 enforcement

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | affectedModules: Authorization Service, businessRules[13] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Navigate to Employee > Employee Details; List of all Admin-only API endpoints for Employee Details

**Steps**

1. Log in as punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json)
2. For each Admin-only API endpoint, make a direct request
3. Verify response status

**Expected**

Every role-gated UI action is also blocked at API level with 403; no UI-only enforcement

**Test Data**

- `roles`: TM, Employee
- `expectedStatus`: 403

**Automation Hint**

Loop through known endpoints; assert all return 403 for restricted roles

### Negative (7)

#### TC-EMPDET-022 — Edit Drawer Save with required field empty shows validation error

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | validationRules[4] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Clear Employee Name field
5. Click Save

**Expected**

Validation error shown on Employee Name field; record not saved; drawer remains open

**Test Data**

- `field`: employeeName

**Automation Hint**

Assert error message visible; no API PATCH call made

#### TC-EMPDET-023 — Advanced Filter end date earlier than start date shows validation error

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | validationRules[1] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Available Since start=2025-06-01, end=2025-05-01
5. Click Save

**Expected**

Validation error shown; filter not applied; grid unchanged

**Test Data**

- `startDate`: 2025-06-01
- `endDate`: 2025-05-01

**Automation Hint**

Assert error message on date range fields; row count unchanged

#### TC-EMPDET-024 — Advanced Filter Availability % = 101 is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | validationRules[2] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Availability % = 101
5. Click Save

**Expected**

Value rejected with validation error; filter not applied

**Test Data**

- `availability`: 101

**Automation Hint**

Assert input marked invalid; no filter applied

#### TC-EMPDET-025 — Advanced Filter Experience = -1 is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | validationRules[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Advanced Filter
4. Set Experience = -1
5. Click Save

**Expected**

Value rejected with validation error; filter not applied

**Test Data**

- `experience`: -1

**Automation Hint**

Assert input marked invalid

#### TC-EMPDET-026 — XSS payload in search box does not execute

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-08, validationRules[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type '<script>alert(1)</script>' in search box
4. Observe browser

**Expected**

No JS alert fires; input rendered as escaped text or rejected; no DOM injection

**Test Data**

- `searchTerm`: <script>alert(1)</script>

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no dialog; assert input value is escaped string not executed

#### TC-EMPDET-027 — SQL injection in search box does not leak data or errors

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | securityScenarios[1], validationRules[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Type SQL injection string into search box
4. Observe results and network

**Expected**

No backend error exposed; no unexpected data returned; treated as literal search term

**Test Data**

- `searchTerm`: ' OR '1'='1

**Automation Hint**

Assert no 500 error; no unexpected employee rows

#### TC-EMPDET-028 — Unauthenticated direct URL access shows access denied

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | securityScenarios[2], negativeScenarios[5] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

No active session; Navigate to Employee > Employee Details

**Steps**

1. Open Employee Details URL in a fresh unauthenticated browser session

**Expected**

Redirected to login page or shown access-denied message; no employee data exposed

**Test Data**

- `url`: /employee/details

**Automation Hint**

Use page.goto without storageState; assert redirect or 401/403

### Performance (7)

#### TC-EMPDET-090 — Employee list loads within 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @performance |
| **Requirement Ref** | nfrRequirements.performance[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 500+ employees in staging

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Start timer
3. Navigate to Employee > Employee Details
4. Wait for grid to render
5. Stop timer

**Expected**

Grid fully rendered (all rows visible, count badge showing) within 2000ms

**Test Data**

- `threshold`: 2000

**Automation Hint**

Playwright performance.now() or page.waitForLoadState; assert < 2000ms

#### TC-EMPDET-091 — Search results update within 1 second

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @performance |
| **Requirement Ref** | nfrRequirements.performance[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Start timer
4. Type search term
5. Wait for results
6. Stop timer

**Expected**

Search results displayed within 1000ms of final keystroke

**Test Data**

- `threshold`: 1000

**Automation Hint**

Assert time from input to grid update < 1000ms

#### TC-EMPDET-092 — Filter apply completes within 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance[2] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Filter panel
4. Select a filter
5. Start timer
6. Click Apply/Save
7. Stop timer on grid update

**Expected**

Grid reflects filter within 2000ms

**Test Data**

- `threshold`: 2000

**Automation Hint**

Assert filter response < 2000ms

#### TC-EMPDET-093 — Sort completes within 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance[3] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Start timer
4. Click column header to sort
5. Wait for reorder
6. Stop timer

**Expected**

Sorted grid visible within 2000ms

**Test Data**

- `threshold`: 2000

**Automation Hint**

Assert sort response < 2000ms

#### TC-EMPDET-094 — Pagination navigation completes within 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance[4] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ employees

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Start timer
4. Click Next page
5. Wait for grid update
6. Stop timer

**Expected**

Next page loaded and rendered within 2000ms

**Test Data**

- `threshold`: 2000

**Automation Hint**

Assert page transition < 2000ms

#### TC-EMPDET-095 — Filter panel opens within 1 second

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance[5] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Start timer
4. Click Filter button
5. Wait for panel to open
6. Stop timer

**Expected**

Filter panel fully visible within 1000ms

**Test Data**

- `threshold`: 1000

**Automation Hint**

Assert panel render < 1000ms

#### TC-EMPDET-096 — UI remains responsive with 500+ employee records

| Field | Value |
| --- | --- |
| **Tags** | @performance, @boundary, @needs-verification |
| **Requirement Ref** | nfrRequirements.performance[6], knownBugEdgeCases: EMPDET-EC-06 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 500+ employees in staging

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Interact with search, filter, sort, and pagination sequentially
4. Measure each operation

**Expected**

All operations (search, filter, sort, pagination) complete within documented targets even with 500+ records; no lag or freeze

**Test Data**

- `count`: 500

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Run each operation; assert all within respective time limits

### Regression (27)

#### TC-EMPDET-097 — [REG] Null Reporting Manager cell renders without JS crash

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-01 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Employee with no Reporting Manager exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Locate employee with no Reporting Manager
4. Observe cell and hover

**Expected**

Placeholder rendered; no JS exception; no hover card crash on empty cell

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no console.error; cell shows placeholder

#### TC-EMPDET-098 — [REG] Null Skills cell shows no broken +N chip

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-02 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Employee with no skills exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with no skills
4. Observe Skills cell

**Expected**

Empty/placeholder shown; no broken +N chip rendered

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert +N element absent; no error

#### TC-EMPDET-099 — [REG] Null Department and Projects fall back gracefully

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-03 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Employee with null Department and Projects exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Find employee with no Department and no Projects
4. Observe both cells

**Expected**

Both cells render placeholder; no crash; no broken badge

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no error; cells visible

#### TC-EMPDET-100 — [REG] Single search result shows '1 of 1' pagination

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-04 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search for term matching exactly 1 employee

**Expected**

Pagination shows '1 of 1'; Prev and Next disabled

**Test Data**

- `searchTerm`: unique_name

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert pagination text '1 of 1'

#### TC-EMPDET-101 — [REG] Zero results search shows empty state message and count=0

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-05 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search for non-existent term

**Expected**

Empty state shown; count badge = 0; no broken grid

**Test Data**

- `searchTerm`: zzznomatch999

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert STATE_EMPTY; badge text = '0'

#### TC-EMPDET-102 — [REG] 500+ records — all performance targets met and pagination accurate

| Field | Value |
| --- | --- |
| **Tags** | @regression, @performance, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-06 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 500+ employees in staging

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Time all operations
4. Paginate through several pages

**Expected**

All perf targets met; no missing or duplicate rows across pages

**Test Data**

- `count`: 500

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert all timing assertions; count cross-check

#### TC-EMPDET-103 — [REG] API 500 error shows user-friendly error, no JS crash

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-07 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Ability to mock API 500 response

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Mock employee API to return 500
3. Navigate to Employee > Employee Details
4. Observe error state

**Expected**

STATE_API_ERROR element shown; user-friendly message displayed; no white screen or unhandled rejection

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Use route.fulfill({status:500}); assert STATE_API_ERROR visible

#### TC-EMPDET-104 — [REG] XSS in search escaped correctly in rendered output

| Field | Value |
| --- | --- |
| **Tags** | @regression, @security, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-08 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Enter XSS payload in search
4. Observe DOM rendering

**Expected**

Payload rendered as escaped text; no script execution; no alert dialog

**Test Data**

- `searchTerm`: <script>alert(1)</script>

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert no dialog opened; assert innerHTML contains escaped characters

#### TC-EMPDET-105 — [REG] Special characters in search produce correct matches

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-09 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Employee with hyphenated or accented name exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search 'O'Brien'
4. Observe results

**Expected**

Employee with apostrophe in name found; no encoding error; no empty result

**Test Data**

- `searchTerm`: O'Brien

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert row with O'Brien visible

#### TC-EMPDET-106 — [REG] Pagination boundary — archive employee on last page keeps integrity

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-10 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; On last page of employee list

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Navigate to last page
4. Archive an employee on last page
5. Observe pagination and rows

**Expected**

Total count decrements; pages update correctly; no duplicate or missing rows

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert count -1; verify no duplicate across pages

#### TC-EMPDET-107 — [REG] Advanced filter invalid date range shows validation error

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-11 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Set end date before start date in Advanced Filter
4. Save

**Expected**

Validation error shown; filter not applied

**Test Data**

- `startDate`: 2025-06-15
- `endDate`: 2025-06-01

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert error message on date fields

#### TC-EMPDET-108 — [REG] Advanced filter out-of-range values rejected

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-12 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Enter Availability=101 and Experience=-1 in Advanced Filter
4. Save

**Expected**

Both values rejected with field-level validation errors

**Test Data**

- `availability`: 101
- `experience`: -1

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert two distinct error messages

#### TC-EMPDET-109 — [REG] Tab switch clears search state — no cross-tab search pollution

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-13 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Search 'Smith' on Current tab
4. Switch to Past tab
5. Verify search cleared
6. Switch back

**Expected**

Search term and results do not persist across tab switches

**Test Data**

- `searchTerm`: Smith

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert search input empty on tab switch

#### TC-EMPDET-110 — [REG] Double-click Save creates exactly one update

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-14 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Change Designation
5. Rapidly double-click Save

**Expected**

Exactly one PATCH request made; record not duplicated

**Test Data**

- `field`: designation
- `value`: Lead

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Intercept network; assert PATCH count == 1

#### TC-EMPDET-111 — [REG] Employee count mismatch — add employee syncs grid, badge, and API

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-EMPDET-COUNT |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Note current count (grid, badge, API)
4. Add a new employee
5. Verify all three counts

**Expected**

Grid row count, badge count, and API total all increment by 1 immediately; no manual refresh needed

**Test Data**

- `operation`: add

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert all three counts == N+1 after add

#### TC-EMPDET-112 — [REG] Archive employee syncs grid, badge, and API count

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-EMPDET-COUNT |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Note current count
4. Archive an employee
5. Verify all three counts

**Expected**

Grid, badge, and API total all decrement by 1 immediately; archived employee moves to Past tab

**Test Data**

- `operation`: archive

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert count N-1; employee absent from Current tab

#### TC-EMPDET-113 — [REG] API vs UI data parity for Allocation % and Log Hours

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-API-UI |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Note Allocation % and Log Hours for 3 rows
4. Call API for same employees
5. Compare

**Expected**

All UI values exactly match API response; no stale or client-calculated data

**Test Data**

- `fields`: allocationPct, logHours

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Intercept API; assert displayed fields == response body fields

#### TC-EMPDET-114 — [REG] Feature flag visibility — Edit hidden for all roles when disabled

| Field | Value |
| --- | --- |
| **Tags** | @regression, @security, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-FLAG-VIS |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Feature flag disabled in test environment

**Steps**

1. Disable feature flag
2. Log in as Admin, HR, TM, Employee sequentially
3. Navigate to Employee > Employee Details
4. Check Edit icon for each

**Expected**

Edit icon absent for ALL roles; direct API call blocked (403/404)

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Manual flag toggle required; assert icon not in DOM for each role

#### TC-EMPDET-115 — [REG] Edit button consistently present on hover after CRUD operations

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-HOVER |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Perform a CRUD operation
4. Hover last row, newly added row, and a row after page navigation
5. Check Edit icon

**Expected**

Edit icon present on ALL hovered rows the role can edit; no disappearing after CRUD

**Test Data**

- `rows`: first, last, newly-added, post-pagination

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert ICON_EDIT visible on hover for multiple rows post-CRUD

#### TC-EMPDET-116 — [REG] Sort order preserved after applying then clearing filter

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-SORT |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Sort by Name ascending
4. Apply Department filter
5. Verify sort still active
6. Clear filter
7. Verify sort still active

**Expected**

Name sort persists through filter apply and clear; sort icon remains; order is correct

**Test Data**

- `sortColumn`: Name

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert sort icon visible and rows in alphabetical order after both filter states

#### TC-EMPDET-117 — [REG] Filter chip fully removed after Reset — no residual state

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: REG-FILTER-RESET |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Apply 3 filters
4. Click Reset
5. Verify all chips removed and full list shown

**Expected**

Zero filter chips visible; count returns to unfiltered total; full dataset restored

**Test Data**

- `filters`: Department, Manager, Skills

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert chip count == 0; count == unfiltered API total

#### TC-EMPDET-118 — [REG] Archived employee absent from Reporting Manager dropdown in Edit Drawer

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | businessRules[11] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least one archived employee exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer for any employee
4. Open Reporting Manager dropdown
5. Search for archived employee name

**Expected**

Archived employee does not appear in Reporting Manager picker; only active employees listed

**Automation Hint**

Assert archived employee name absent from dropdown options

#### TC-EMPDET-119 — [REG] Edit Drawer no auto-save — navigating away does not create partial record

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | businessRules[9] |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Open Edit Drawer
4. Change a field
5. Navigate away without saving
6. Return to Employee Details

**Expected**

No partial update persisted; grid shows original value; no duplicate record created

**Test Data**

- `field`: designation
- `value`: Partial Value

**Automation Hint**

Assert API GET returns original value

#### TC-EMPDET-120 — [REG] Invalid lifecycle transition rejected — Archived to Active via API bypass

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | businessRules[14] |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Knowledge of archived employee ID and state-change endpoint

**Steps**

1. Log in as Admin
2. Attempt direct API call to transition archived employee to Active bypassing normal workflow

**Expected**

API rejects invalid transition with appropriate error; employee state unchanged

**Test Data**

- `transition`: Archived->Active
- `method`: API

**Automation Hint**

Assert response status 400 or 422; verify employee still in Archived state

#### TC-EMPDET-121 — [REG] Grid reflects create/update/archive immediately without manual refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | businessRules[18] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Perform each operation
4. Verify grid updates after each without full page reload

**Expected**

After each operation grid reflects the change; count updates; no manual refresh required

**Test Data**

- `operations`: create, update, archive

**Automation Hint**

Assert grid changes without page navigation event

#### TC-EMPDET-122 — [REG] Action buttons (Edit) remain on updated row after save

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | businessRules[16] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Edit row 1 and Save
4. Immediately hover row 1 again
5. Check Edit icon

**Expected**

Edit icon still visible on the updated row after save; not disappeared

**Test Data**

- `operation`: edit

**Automation Hint**

Assert ICON_EDIT visible after drawer closes on same row

#### TC-EMPDET-123 — [REG] Pagination does not duplicate or drop records mid-session data change

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | businessRules[19] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; 30+ employees

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Navigate to page 2
4. Archive an employee on page 1 via another tab
5. Check page 2 and overall pagination

**Expected**

Total count decrements; no record appears twice; no record missing from full traversal

**Automation Hint**

Assert unique IDs across all pages == API total after change

### Security (12)

#### TC-EMPDET-077 — Admin sees Edit action on all employee rows

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[0], businessRules[15] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Hover each row on page 1
4. Check for Edit action icon

**Expected**

Edit action icon present and clickable on every row for Admin role

**Test Data**

- `role`: Admin

**Automation Hint**

Assert ICON_EDIT visible on hover for each row

#### TC-EMPDET-078 — Restricted role (TM) does not see Edit action in UI

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | roleMatrix[3], businessRules[13] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json)
2. Navigate to Employee > Employee Details
3. Hover employee rows
4. Check for Edit action icon

**Expected**

Edit action icon absent or disabled for TM role; no way to trigger Edit via UI

**Test Data**

- `role`: TM

**Automation Hint**

Assert ICON_EDIT not visible or disabled for testUserPage

#### TC-EMPDET-079 — Restricted role direct API PATCH returns 403 Forbidden

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | acceptanceCriteria[9], businessRules[13], roleMatrix[3] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Navigate to Employee > Employee Details; Knowledge of employee ID and PATCH endpoint

**Steps**

1. Log in as punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json)
2. Make direct API PATCH call to employee update endpoint with valid payload

**Expected**

API returns 403 Forbidden; employee record unchanged

**Test Data**

- `method`: PATCH
- `expectedStatus`: 403

**Automation Hint**

Use page.request.patch(); assert response.status() == 403

#### TC-EMPDET-080 — IDOR — restricted role cannot access another employee's record via API

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | securityScenarios[2] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Knowledge of another employee's ID outside the user's permitted scope

**Steps**

1. Log in as punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json)
2. Make direct API GET call with an employee ID outside permitted scope

**Expected**

API returns 403 or 404; no employee data returned

**Test Data**

- `method`: GET
- `employeeId`: out-of-scope-id

**Automation Hint**

Assert response.status() in [403, 404]; response body contains no employee fields

#### TC-EMPDET-081 — Feature flag disabled — Edit control hidden for ALL roles including Admin

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression, @needs-verification |
| **Requirement Ref** | businessRules[12], knownBugEdgeCases: REG-FLAG-VIS |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Feature flag for Edit action disabled in test environment

**Steps**

1. Disable Edit feature flag
2. Log in as Admin
3. Navigate to Employee > Employee Details
4. Hover rows and check Edit icon

**Expected**

Edit icon absent for Admin; direct API PATCH returns 403/404

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Manual flag toggle required; assert icon not in DOM

#### TC-EMPDET-082 — Feature flag disabled — API edit endpoint returns 403

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | businessRules[12] |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Feature flag for Edit action disabled

**Steps**

1. Disable Edit feature flag
2. Log in as Admin
3. Make direct API PATCH call

**Expected**

API returns 403 or 404 regardless of role when flag disabled

**Test Data**

- `method`: PATCH
- `expectedStatus`: 403

**Automation Hint**

Manual flag toggle; assert API blocked

#### TC-EMPDET-083 — HR role can edit employee records

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix[1] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

hr.user@simformsolutions.com (HR role fixture); Navigate to Employee > Employee Details

**Steps**

1. Log in as HR role user
2. Navigate to Employee > Employee Details
3. Hover row, click Edit
4. Make a change
5. Save

**Expected**

HR user can open Edit Drawer, make changes, and save successfully; grid reflects update

**Test Data**

- `role`: HR

**Automation Hint**

Use HR role storageState if available

#### TC-EMPDET-084 — Employee role cannot see Edit action

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | roleMatrix[4] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

punit.patel@simformsolutions.com (testUserPage fixture, storageState-punit.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as Employee role user
2. Navigate to Employee > Employee Details
3. Hover all rows
4. Check Edit icon presence

**Expected**

Edit icon absent for Employee role

**Test Data**

- `role`: Employee

**Automation Hint**

Assert ICON_EDIT not visible for Employee role

#### TC-EMPDET-085 — Resource Manager sees only employees within their scope

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | roleMatrix[2], unclear: RM exact scope |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

rm.user@simformsolutions.com (RM role fixture); Navigate to Employee > Employee Details

**Steps**

1. Log in as RM user
2. Navigate to Employee > Employee Details
3. Observe employee list

**Expected**

Only employees within RM's assigned scope (department/project) shown; employees outside scope absent

**Test Data**

- `role`: RM

**Automation Hint**

NOTE: underlying rule is unverified-fallback — verify with a human before treating a failure as a confirmed regression. Compare RM view vs Admin view; assert subset relationship

#### TC-EMPDET-086 — XSS payload in search does not inject into DOM

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | knownBugEdgeCases: EMPDET-EC-08 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Enter img XSS payload in search
4. Observe DOM

**Expected**

No onerror fires; payload rendered as escaped text; no JS execution

**Test Data**

- `searchTerm`: <img src=x onerror=alert(1)>

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Assert page.evaluate returns no alert dialog; check innerHTML is escaped

#### TC-EMPDET-087 — Direct URL access without auth redirects to login

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | testScenarios[18] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

No session

**Steps**

1. Open Employee Details URL without authentication
2. Observe response

**Expected**

Redirected to login page or 401/403 shown; no employee data in response

**Test Data**

- `url`: /employee/details

**Automation Hint**

page.goto without storageState; assert URL redirected or status blocked

#### TC-EMPDET-088 — Session expiry during edit blocks save without data corruption

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | negativeScenarios[6], affectedModules: Authentication Service |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Session expiry mechanism available in test env

**Steps**

1. Log in as Admin
2. Open Edit Drawer
3. Expire session via test mechanism
4. Attempt Save

**Expected**

Save fails gracefully; user prompted to re-authenticate; no partial update persisted

**Automation Hint**

Manual/mock session expiry required

### Smoke (3)

#### TC-EMPDET-001 — Current Employee tab loads with count matching API

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | acceptanceCriteria[0], BR-002 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; Observe Current Employee tab

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Verify Current Employee tab is active by default
4. Count grid rows
5. Fetch employee count from API

**Expected**

Current tab shows only active employees; grid row count == badge count == API total

**Test Data**

- `tab`: Current

**Automation Hint**

Use primaryPage fixture. Assert getByTestId('emp-count-badge') text == grid rows == API response total.

#### TC-EMPDET-002 — Past Employee tab loads with only archived employees

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | acceptanceCriteria[0], BR-003 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least 1 archived employee exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Click Past Employee tab
4. Count grid rows
5. Verify no active employee appears

**Expected**

Past tab shows only archived/deallocated employees; no active employee visible; count matches API archived total

**Test Data**

- `tab`: Past

**Automation Hint**

Assert getByTestId('tab-past') active; grid rows all have archived status

#### TC-EMPDET-003 — Admin edits employee via drawer and grid reflects change immediately

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | acceptanceCriteria[6], BR-031 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Task Id** | DOC-1783333539767 |

**Preconditions**

subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json); Navigate to Employee > Employee Details; At least 1 editable employee record exists

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture, storageState.json)
2. Navigate to Employee > Employee Details
3. Hover row 1, click Edit
4. Change Designation field
5. Click Save
6. Observe grid row 1 without page reload

**Expected**

Grid reflects updated Designation immediately without reload; Last Updated timestamp matches API response

**Test Data**

- `field`: designation
- `oldValue`: Engineer
- `newValue`: Senior Engineer

**Automation Hint**

Use primaryPage fixture. Assert drawer closes, row value updates, no full navigation.
