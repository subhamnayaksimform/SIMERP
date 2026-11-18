# Employee Details — Test Cases

**Total test cases:** 62  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-07-14-EMPDET-pip.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| boundary | 20 | 32.3% |
| functional | 15 | 24.2% |
| negative | 6 | 9.7% |
| security | 6 | 9.7% |
| integration | 5 | 8.1% |
| regression | 3 | 4.8% |
| smoke | 3 | 4.8% |
| a11y | 2 | 3.2% |
| performance | 2 | 3.2% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 28 | 45.2% |
| high | 24 | 38.7% |
| critical | 6 | 9.7% |
| low | 4 | 6.5% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 30 | 48.4% |
| minor | 26 | 41.9% |
| critical | 6 | 9.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 57 | 91.9% |
| regression-derived | 5 | 8.1% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 49 | 79.0% |
| speculative | 5 | 8.1% |
| unverified-fallback | 5 | 8.1% |
| inferred | 3 | 4.8% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 56 | 90.3% |
| No | 6 | 9.7% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @boundary | 21 | 33.9% |
| @functional | 17 | 27.4% |
| @regression | 14 | 22.6% |
| @security | 8 | 12.9% |
| @negative | 7 | 11.3% |
| @needs-verification | 5 | 8.1% |
| @integration | 3 | 4.8% |
| @smoke | 3 | 4.8% |
| @a11y | 2 | 3.2% |
| @performance | 2 | 3.2% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-260](#tc-empdet-260-employee-list-shows-pip-indicator-only-for-active-pip-employees-with-accurate-tooltip-days-left) | Employee List shows PIP indicator only for active-PIP employees with accurate tooltip/Days Left | Employee Details | smoke | critical |
| [TC-EMPDET-261](#tc-empdet-261-pip-indicator-visibility-respects-existing-rbac-unauthorized-user-never-sees-pip-indicator-tooltip) | PIP indicator visibility respects existing RBAC — unauthorized user never sees PIP indicator/tooltip | Employee Details | smoke | critical |
| [TC-EMPDET-262](#tc-empdet-262-existing-search-sort-filter-and-pagination-continue-to-function-correctly-with-the-pip-indicator-present) | Existing search, sort, filter, and pagination continue to function correctly with the PIP indicator present | Employee Details | smoke | critical |
| [TC-EMPDET-263](#tc-empdet-263-pip-tag-renders-as-a-pip-text-tag-positioned-immediately-beside-the-employee-name) | PIP tag renders as a 'PIP' text/tag positioned immediately beside the employee name | Employee Details | functional | high |
| [TC-EMPDET-264](#tc-empdet-264-pip-tooltip-shows-status-field-value-pip) | PIP tooltip shows Status field value 'PIP' | Employee Details | functional | high |
| [TC-EMPDET-265](#tc-empdet-265-pip-tooltip-shows-the-employee-s-configured-pip-reason-text) | PIP tooltip shows the employee's configured PIP Reason text | Employee Details | functional | high |
| [TC-EMPDET-266](#tc-empdet-266-pip-tooltip-shows-period-as-start-date-end-date-in-correct-format) | PIP tooltip shows Period as 'Start Date – End Date' in correct format | Employee Details | functional | high |
| [TC-EMPDET-267](#tc-empdet-267-days-left-is-recalculated-dynamically-against-the-current-date-not-a-stale-cached-value) | Days Left is recalculated dynamically against the current date, not a stale cached value | Employee Details | functional | high |
| [TC-EMPDET-268](#tc-empdet-268-employee-with-no-pip-record-at-all-does-not-display-the-pip-indicator) | Employee with no PIP record at all does not display the PIP indicator | Employee Details | functional | high |
| [TC-EMPDET-269](#tc-empdet-269-employee-with-a-future-upcoming-pip-start-date-in-the-future-does-not-display-the-indicator-yet) | Employee with a future/upcoming PIP (Start Date in the future) does not display the indicator yet | Employee Details | functional | high |
| [TC-EMPDET-270](#tc-empdet-270-employee-with-a-completed-cancelled-pip-status-does-not-display-the-indicator) | Employee with a completed/cancelled PIP status does not display the indicator | Employee Details | functional | high |
| [TC-EMPDET-271](#tc-empdet-271-existing-search-by-name-still-correctly-locates-an-employee-who-has-an-active-pip-indicator) | Existing search by name still correctly locates an employee who has an active PIP indicator | Employee Details | functional | high |
| [TC-EMPDET-272](#tc-empdet-272-pip-indicator-renders-correctly-for-employees-across-multiple-paginated-pages) | PIP indicator renders correctly for employees across multiple paginated pages | Employee Details | functional | medium |
| [TC-EMPDET-273](#tc-empdet-273-current-tab-shows-pip-indicators-only-for-active-employees-past-archived-tab-never-shows-a-pip-indicator) | Current tab shows PIP indicators only for active employees; Past (archived) tab never shows a PIP indicator | Employee Details | functional | high |
| [TC-EMPDET-274](#tc-empdet-274-pip-related-search-filter-sort-pagination-state-does-not-carry-over-between-current-and-past-tabs) | PIP-related search/filter/sort/pagination state does not carry over between Current and Past tabs | Employee Details | functional | medium |
| [TC-EMPDET-275](#tc-empdet-275-pip-indicator-never-reflects-a-stale-prior-state-once-the-record-is-genuinely-no-longer-active) | PIP indicator never reflects a stale prior state once the record is genuinely no longer active | Employee Details | functional | medium |
| [TC-EMPDET-276](#tc-empdet-276-applying-an-existing-basic-filter-produces-results-counts-unaffected-by-the-new-pip-indicator-column) | Applying an existing Basic filter produces results/counts unaffected by the new PIP indicator/column | Employee Details | functional | medium |
| [TC-EMPDET-277](#tc-empdet-277-sorting-by-name-and-other-columns-remains-stable-and-unaffected-by-the-new-pip-indicator-column) | Sorting by Name (and other columns) remains stable and unaffected by the new PIP indicator/column | Employee Details | functional | medium |
| [TC-EMPDET-278](#tc-empdet-278-invalid-pip-date-range-start-date-end-date-does-not-crash-the-page-or-misleadingly-show-an-active-indicator) | Invalid PIP date range (Start Date > End Date) does not crash the page or misleadingly show an active indicator | Employee Details | negative | medium |
| [TC-EMPDET-279](#tc-empdet-279-pip-end-date-has-passed-but-status-still-reads-active-indicator-must-not-misleadingly-imply-an-ongoing-pip) | PIP End Date has passed but Status still reads Active — indicator must not misleadingly imply an ongoing PIP | Employee Details | negative | high |
| [TC-EMPDET-280](#tc-empdet-280-unauthorized-no-permission-user-attempting-to-view-employee-list-sees-no-pip-data-with-graceful-messaging-not-a-broken-ui) | Unauthorized/no-permission user attempting to view Employee List sees no PIP data, with graceful messaging (not a broken UI) | Employee Details | negative | medium |
| [TC-EMPDET-281](#tc-empdet-281-pip-status-suggesting-a-completed-cancelled-state-must-not-be-overridden-by-a-date-range-that-still-looks-active) | PIP Status suggesting a completed/cancelled state must not be overridden by a date range that still looks 'active' | Employee Details | negative | medium |
| [TC-EMPDET-282](#tc-empdet-282-pip-data-fetch-under-a-slow-timed-out-network-shows-a-loading-indicator-and-does-not-freeze-the-employee-list) | PIP data fetch under a slow/timed-out network shows a loading indicator and does not freeze the Employee List | Employee Details | negative | medium |
| [TC-EMPDET-283](#tc-empdet-283-a-server-error-5xx-on-the-pip-data-sub-call-shows-a-friendly-fallback-not-a-blank-broken-pip-column) | A server error (5xx) on the PIP-data sub-call shows a friendly fallback, not a blank/broken PIP column | Employee Details | negative | medium |
| [TC-EMPDET-284](#tc-empdet-284-pip-indicator-displays-correctly-when-pip-start-date-is-exactly-today-inclusive-lower-boundary) | PIP indicator displays correctly when PIP Start Date is exactly today (inclusive lower boundary) | Employee Details | boundary | medium |
| [TC-EMPDET-285](#tc-empdet-285-pip-indicator-displays-correctly-when-pip-end-date-is-exactly-today-inclusive-upper-boundary) | PIP indicator displays correctly when PIP End Date is exactly today (inclusive upper boundary) | Employee Details | boundary | medium |
| [TC-EMPDET-286](#tc-empdet-286-pip-end-date-in-the-past-with-status-still-active-days-left-boundary-behavior) | PIP End Date in the past with Status still Active — Days Left boundary behavior | Employee Details | boundary | high |
| [TC-EMPDET-287](#tc-empdet-287-missing-blank-pip-reason-renders-a-graceful-fallback-in-the-tooltip-without-breaking-layout) | Missing/blank PIP Reason renders a graceful fallback in the tooltip without breaking layout | Employee Details | boundary | medium |
| [TC-EMPDET-288](#tc-empdet-288-a-very-long-pip-reason-300-characters-wraps-or-truncates-gracefully-in-the-tooltip-without-breaking-layout) | A very long PIP Reason (300+ characters) wraps or truncates gracefully in the tooltip without breaking layout | Employee Details | boundary | medium |
| [TC-EMPDET-289](#tc-empdet-289-employee-with-multiple-active-pip-records-indicator-reflects-a-single-well-defined-record) | Employee with multiple active PIP records — indicator reflects a single, well-defined record | Employee Details | boundary | low |
| [TC-EMPDET-290](#tc-empdet-290-invalid-pip-date-range-start-date-end-date-does-not-satisfy-the-active-pip-condition-indicator-does-not-display) | Invalid PIP date range (Start Date > End Date) does not satisfy the active-PIP condition — indicator does not display | Employee Details | boundary | medium |
| [TC-EMPDET-291](#tc-empdet-291-null-or-missing-pip-start-end-date-does-not-display-the-indicator-and-does-not-crash-the-row) | Null or missing PIP Start/End Date does not display the indicator and does not crash the row | Employee Details | boundary | medium |
| [TC-EMPDET-292](#tc-empdet-292-pip-indicator-renders-correctly-for-the-first-row-of-a-page-and-the-last-row-of-the-last-page) | PIP indicator renders correctly for the first row of a page and the last row of the last page | Employee Details | boundary | medium |
| [TC-EMPDET-293](#tc-empdet-293-notice-period-pip-coexistence-cannot-be-verified-no-live-notice-period-indicator-exists-to-test-alongside-pip) | Notice Period + PIP coexistence cannot be verified — no live Notice Period indicator exists to test alongside PIP | Employee Details | boundary | medium |
| [TC-EMPDET-294](#tc-empdet-294-pip-indicator-only-ever-reflects-a-genuinely-active-in-range-pip-across-the-full-status-lifecycle-upcoming-active-expired-overdue-completed-cancelled) | PIP indicator only ever reflects a genuinely active, in-range PIP across the full status lifecycle (Upcoming → Active → Expired/Overdue → Completed/Cancelled) | Employee Details | boundary | high |
| [TC-EMPDET-295](#tc-empdet-295-pip-fields-status-reason-start-end-date-shown-in-the-indicator-tooltip-match-the-underlying-data-source-exactly-field-by-field) | PIP fields (Status/Reason/Start/End Date) shown in the indicator/tooltip match the underlying data source exactly, field by field | Employee Details | boundary | high |
| [TC-EMPDET-296](#tc-empdet-296-a-session-with-partial-permission-can-view-the-employee-list-generally-but-not-pip-data-specifically-sees-the-row-with-pip-fields-suppressed-nothing-else-affected) | A session with partial permission (can view the Employee List generally, but not PIP data specifically) sees the row with PIP fields suppressed, nothing else affected | Employee Details | boundary | high |
| [TC-EMPDET-297](#tc-empdet-297-chained-basic-advanced-filter-combination-remains-unaffected-by-the-new-pip-indicator-column) | Chained Basic + Advanced filter combination remains unaffected by the new PIP indicator/column | Employee Details | boundary | medium |
| [TC-EMPDET-298](#tc-empdet-298-sorting-with-multiple-employees-sharing-the-same-pip-status-maintains-stable-secondary-ordering) | Sorting with multiple employees sharing the same PIP status maintains stable secondary ordering | Employee Details | boundary | medium |
| [TC-EMPDET-299](#tc-empdet-299-pip-indicator-does-not-display-when-the-date-range-is-active-but-pip-status-explicitly-is-not-active) | PIP indicator does not display when the date range is active but PIP Status explicitly is not Active | Employee Details | boundary | medium |
| [TC-EMPDET-300](#tc-empdet-300-pip-indicator-does-not-display-when-status-reads-active-but-the-date-range-is-not-currently-active) | PIP indicator does not display when Status reads Active but the date range is not currently active | Employee Details | boundary | medium |
| [TC-EMPDET-301](#tc-empdet-301-invalid-pip-date-range-start-date-end-date-is-handled-gracefully-at-the-data-validation-layer-not-just-visually) | Invalid PIP date range (Start Date > End Date) is handled gracefully at the data/validation layer, not just visually | Employee Details | boundary | medium |
| [TC-EMPDET-302](#tc-empdet-302-days-left-is-recomputed-on-every-reload-render-rather-than-served-from-a-stale-cached-value) | Days Left is recomputed on every reload/render rather than served from a stale cached value | Employee Details | boundary | medium |
| [TC-EMPDET-303](#tc-empdet-303-missing-pip-reason-at-the-data-layer-does-not-throw-a-rendering-exception-in-the-tooltip-component) | Missing PIP Reason at the data layer does not throw a rendering exception in the tooltip component | Employee Details | boundary | medium |
| [TC-EMPDET-304](#tc-empdet-304-pip-tooltip-is-operable-and-dismissible-via-keyboard) | PIP tooltip is operable and dismissible via keyboard | Employee Details | a11y | low |
| [TC-EMPDET-305](#tc-empdet-305-pip-indicator-has-an-accessible-name-label-readable-by-assistive-technology-not-conveyed-by-color-icon-alone) | PIP indicator has an accessible name/label readable by assistive technology, not conveyed by color/icon alone | Employee Details | a11y | low |
| [TC-EMPDET-306](#tc-empdet-306-pip-tooltip-opens-on-hover-without-noticeable-delay) | PIP tooltip opens on hover without noticeable delay | Employee Details | performance | low |
| [TC-EMPDET-307](#tc-empdet-307-adding-the-pip-indicator-column-has-no-measurable-impact-on-employee-list-load-search-filter-sort-or-pagination-performance) | Adding the PIP indicator/column has no measurable impact on Employee List load, search, filter, sort, or pagination performance | Employee Details | performance | medium |
| [TC-EMPDET-308](#tc-empdet-308-existing-employee-list-search-filter-sort-pagination-behavior-is-fully-intact-end-to-end-after-the-pip-indicator-is-added) | Existing Employee List search/filter/sort/pagination behavior is fully intact end-to-end after the PIP indicator is added | Employee Details | regression | high |
| [TC-EMPDET-309](#tc-empdet-309-pip-indicator-cannot-yet-be-reconciled-with-the-leave-compliance-details-notice-period-scoped-view-dependent-module-not-implemented) | PIP indicator cannot yet be reconciled with the Leave & Compliance Details (Notice Period) scoped view — dependent module not implemented | Employee Details | regression | medium |
| [TC-EMPDET-310](#tc-empdet-310-pip-visibility-rules-are-consistent-with-the-same-admin-roles-permissions-matrix-already-enforced-elsewhere-in-the-employee-list) | PIP visibility rules are consistent with the same Admin > Roles & Permissions matrix already enforced elsewhere in the Employee List | Employee Details | regression | high |
| [TC-EMPDET-311](#tc-empdet-311-reporting-manager-cannot-view-pip-data-for-employees-outside-their-own-team-scope) | Reporting Manager cannot view PIP data for employees outside their own team scope | Employee Details | security | critical |
| [TC-EMPDET-312](#tc-empdet-312-employee-tm-viewer-role-never-sees-the-pip-indicator-or-tooltip-for-any-other-employee-s-row) | Employee/TM viewer role never sees the PIP indicator or tooltip for any other employee's row | Employee Details | security | critical |
| [TC-EMPDET-313](#tc-empdet-313-a-user-with-no-pip-view-permission-at-all-sees-the-pip-feature-fully-suppressed-app-wide-not-just-per-row) | A user with no PIP-view permission at all sees the PIP feature fully suppressed app-wide, not just per-row | Employee Details | security | high |
| [TC-EMPDET-314](#tc-empdet-314-direct-api-call-for-pip-fields-by-an-unauthorized-caller-is-rejected-or-omits-pip-data-object-level-authorization-idor-check) | Direct API call for PIP fields by an unauthorized caller is rejected or omits PIP data (object-level authorization / IDOR check) | Employee Details | security | critical |
| [TC-EMPDET-315](#tc-empdet-315-pip-reason-free-text-is-escaped-and-rendered-as-literal-text-in-the-tooltip-no-xss-execution) | PIP Reason free-text is escaped and rendered as literal text in the tooltip — no XSS execution | Employee Details | security | high |
| [TC-EMPDET-316](#tc-empdet-316-each-role-s-permitted-and-forbidden-access-to-pip-data-is-enforced-consistently-at-both-ui-and-api-level-across-the-full-role-matrix) | Each role's permitted and forbidden access to PIP data is enforced consistently at both UI and API level across the full role matrix | Employee Details | security | high |
| [TC-EMPDET-317](#tc-empdet-317-pip-indicator-does-not-disturb-existing-count-matching-or-tab-independence-rules-across-the-employee-details-module) | PIP indicator does not disturb existing count-matching or tab-independence rules across the Employee Details module | Employee Details | integration | high |
| [TC-EMPDET-318](#tc-empdet-318-pip-status-shown-in-the-employee-list-cannot-yet-be-reconciled-against-the-future-leave-compliance-details-scoped-view) | PIP status shown in the Employee List cannot yet be reconciled against the future Leave & Compliance Details scoped view | Employee Details | integration | medium |
| [TC-EMPDET-319](#tc-empdet-319-pip-visibility-change-requires-no-separate-new-configuration-in-admin-roles-permissions-beyond-the-existing-employee-list-entries) | PIP visibility change requires no separate/new configuration in Admin > Roles & Permissions beyond the existing Employee List entries | Employee Details | integration | high |
| [TC-EMPDET-320](#tc-empdet-320-pip-fields-returned-by-the-underlying-api-data-source-exactly-match-what-the-employee-list-indicator-tooltip-displays-api-contract-validation) | PIP fields returned by the underlying API/data source exactly match what the Employee List indicator/tooltip displays (API-contract validation) | Employee Details | integration | high |
| [TC-EMPDET-321](#tc-empdet-321-employee-count-consistency-grid-rows-result-count-badge-api-total-is-unaffected-by-the-pip-indicator-column-across-the-module) | Employee count consistency (grid rows, result-count badge, API total) is unaffected by the PIP indicator/column across the module | Employee Details | integration | high |

---

## Employee Details

62 test cases.

### A11y (2)

#### TC-EMPDET-304 — PIP tooltip is operable and dismissible via keyboard

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | NFR: Tooltip must be operable/dismissible consistent with existing tooltip accessibility pattern |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP

**Steps**

1. Tab through the Employee List rows via keyboard until focus reaches the PIP tag
2. Trigger the tooltip via keyboard (Enter/Space, or focus-triggered open per implementation)
3. Press Escape or Tab away and confirm the tooltip closes

**Expected**

PIP tag is reachable via keyboard Tab order; the tooltip can be opened and dismissed without a mouse, consistent with the existing Notice Period tooltip's accessibility pattern (pattern itself not separately specified in source)

**Automation Hint**

Exact keyboard interaction pattern for tooltips is not separately specified in source — verify against the app's existing tooltip a11y convention once available.

#### TC-EMPDET-305 — PIP indicator has an accessible name/label readable by assistive technology, not conveyed by color/icon alone

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | NFR: Accessibility — tooltip/indicator must be perceivable via assistive technology |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP

**Steps**

1. Inspect the PIP tag's accessible name via the browser accessibility tree or an automated a11y scan
2. Confirm the tag conveys its meaning via text/aria-label, not color alone

**Expected**

The PIP tag exposes an accessible name (e.g. via text content or aria-label) that a screen reader announces meaningfully; the indicator is not conveyed by color/styling alone

**Automation Hint**

Use @axe-core/playwright to scan the Employee List row containing the PIP tag.

### Boundary (20)

#### TC-EMPDET-284 — PIP indicator displays correctly when PIP Start Date is exactly today (inclusive lower boundary)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP starts today |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date = today

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee whose PIP starts today
3. Observe the PIP tag and Days Left value

**Expected**

PIP tag is shown (Start Date is inclusive); Days Left equals PIP End Date minus today

**Test Data**

- `pipStartDate`: today
- `pipEndDate`: today+15d

#### TC-EMPDET-285 — PIP indicator displays correctly when PIP End Date is exactly today (inclusive upper boundary)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP ends today |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP End Date = today

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee whose PIP ends today
3. Observe the PIP tag and Days Left value

**Expected**

PIP tag is shown on the last inclusive day; Days Left equals 0

**Test Data**

- `pipEndDate`: today

#### TC-EMPDET-286 — PIP End Date in the past with Status still Active — Days Left boundary behavior

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP has expired but status remains Active |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP End Date in the past, Status = Active

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with the expired-but-Active PIP
3. Observe Days Left / any indicator state

**Expected**

MANUAL — Days Left going negative/zero and whether the tag auto-hides or flips to an 'Overdue' state cannot be asserted until the expiry-behavior decision is made.

**Test Data**

- `pipEndDate`: today-3d
- `pipStatus`: Active

**Automation Hint**

MANUAL — requirement unclear: PIP expiry behavior (auto-hide vs. Overdue status) is not yet decided per FR#5.

#### TC-EMPDET-287 — Missing/blank PIP Reason renders a graceful fallback in the tooltip without breaking layout

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Missing PIP reason |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP and blank/null Reason

**Steps**

1. Navigate to Employee Details (Current tab)
2. Hover the PIP tag for the employee with a blank Reason
3. Observe the Reason field in the tooltip

**Expected**

Tooltip renders without breaking; Reason field shows a graceful placeholder (assumed '-' or blank) instead of 'null'/'undefined' or a broken layout

**Test Data**

**Automation Hint**

Exact fallback copy for a missing PIP Reason is not specified in source — assumption only; verify actual copy once implemented.

#### TC-EMPDET-288 — A very long PIP Reason (300+ characters) wraps or truncates gracefully in the tooltip without breaking layout

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Long PIP reason |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with an active PIP and a 300+ character Reason string

**Steps**

1. Navigate to Employee Details (Current tab)
2. Hover the PIP tag for the employee with the long Reason
3. Observe the tooltip layout

**Expected**

Tooltip wraps or truncates the long Reason gracefully; no layout overflow, clipping outside the viewport, or broken tooltip positioning

**Test Data**

- `pipReason`: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

**Automation Hint**

Exact overflow/truncation rule (wrap vs. ellipsis vs. scroll) is not specified in source — assumption only.

#### TC-EMPDET-289 — Employee with multiple active PIP records — indicator reflects a single, well-defined record

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Multiple PIP records for one employee |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with 2+ simultaneously active PIP records

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with multiple active PIP records
3. Hover the PIP tag and read the tooltip

**Expected**

Exactly one PIP tag is shown (not duplicated); tooltip reflects the PIP record with the nearest End Date (soonest Days Left), per assumed default — behavior is unconfirmed in source

**Test Data**

- `pipRecords`: start: today-10d; end: today+5d, start: today-2d; end: today+20d

**Automation Hint**

PARTIAL — requirement does not state which record should be reflected when multiple are simultaneously active; automated assertion is only valid once this default is confirmed.

#### TC-EMPDET-290 — Invalid PIP date range (Start Date > End Date) does not satisfy the active-PIP condition — indicator does not display

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Invalid date range (Start Date > End Date) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date > PIP End Date

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with the inverted date range
3. Observe the name cell for a PIP tag

**Expected**

No PIP tag is shown — an inverted range structurally fails the 'today between Start and End inclusive' condition, independent of any Status value

**Test Data**

- `pipStartDate`: 2026-09-01
- `pipEndDate`: 2026-08-15

#### TC-EMPDET-291 — Null or missing PIP Start/End Date does not display the indicator and does not crash the row

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Null or missing PIP dates |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with null/missing PIP Start Date or End Date

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with a null PIP date field
3. Observe the row for errors or an incorrectly shown tag

**Expected**

No PIP tag is shown for incomplete date data; the row renders normally with no console error

**Test Data**

- `pipEndDate`: 2026-08-01

#### TC-EMPDET-292 — PIP indicator renders correctly for the first row of a page and the last row of the last page

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @regression |
| **Requirement Ref** | EdgeCase: Employee appears correctly in search/sorting/pagination results |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); grid sorted/paginated with active-PIP employees at the first and last row positions

**Steps**

1. Sort the grid so an active-PIP employee lands as the very first row
2. Paginate to the last page and confirm an active-PIP employee lands as the very last row
3. Observe the PIP tag at both boundary positions

**Expected**

PIP tag renders correctly and is not clipped/hidden at either the first row of the first page or the last row of the last page

#### TC-EMPDET-293 — Notice Period + PIP coexistence cannot be verified — no live Notice Period indicator exists to test alongside PIP

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Employee has both Notice Period AND PIP indicators simultaneously |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with both an active Notice Period and an active PIP

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate an employee with both an active Notice Period and an active PIP record
3. Observe the row for both indicators

**Expected**

MANUAL — cannot be automated or even manually verified today: codebase grounding confirms no live inline 'Notice Period' indicator exists in the Employee List (only a separate, not-yet-built Leave & Compliance Details screen, itself 404 in-app as of 2026-07-13). This case is deferred until that reference indicator exists.

**Automation Hint**

MANUAL — requirement unclear: the reference 'Notice Period indicator' this AC/edge case assumes does not exist live in the Employee List today.

#### TC-EMPDET-294 — PIP indicator only ever reflects a genuinely active, in-range PIP across the full status lifecycle (Upcoming → Active → Expired/Overdue → Completed/Cancelled)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP Status transitions through every plausible boundary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee whose PIP record is progressed through each lifecycle stage

**Steps**

1. Observe the indicator while the PIP is Upcoming (Start Date in future) — expect no tag
2. Observe while Active (in range) — expect tag shown
3. Observe at/after End Date — expect behavior per the (currently undecided) expiry rule
4. Observe once Completed/Cancelled — expect no tag

**Expected**

Upcoming and Completed/Cancelled legs are fully automatable now (no tag expected in either). The Expired/Overdue leg is blocked pending the PIP-expiry-behavior decision — do not assert a fixed outcome for that leg only.

**Test Data**

- `stages`: Upcoming, Active, Expired-or-Overdue, Completed/Cancelled

**Automation Hint**

PARTIAL — the Expired/Overdue leg of this lifecycle depends on the undecided expiry-behavior business decision; automate the Upcoming and Completed/Cancelled legs now, defer the Expired/Overdue assertion.

#### TC-EMPDET-295 — PIP fields (Status/Reason/Start/End Date) shown in the indicator/tooltip match the underlying data source exactly, field by field

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: PIP fields in indicator/tooltip vs. API/data source |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with a fully populated PIP record

**Steps**

1. Hover the PIP tag and record the Status, Reason, Period, and Days Left values shown
2. Retrieve the same employee's PIP fields directly from the underlying data source/API
3. Compare each field value one-to-one

**Expected**

Every tooltip field value is byte-for-byte identical to the corresponding data-source/API value for that employee — no transformation, truncation, or mismatch

**Test Data**

- `pipStatus`: Active
- `pipReason`: Attendance and delivery concerns
- `pipStartDate`: 2026-07-01
- `pipEndDate`: 2026-07-31

**Automation Hint**

API/data source for PIP fields is unconfirmed — likely GET /api/employees extended with PIP fields, pending confirmation (dependencies[]).

#### TC-EMPDET-296 — A session with partial permission (can view the Employee List generally, but not PIP data specifically) sees the row with PIP fields suppressed, nothing else affected

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @security |
| **Requirement Ref** | EdgeCase: restricted-role session attempting to view PIP via UI and API |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

A session scoped to view general Employee List data but explicitly denied PIP-field visibility (permission matrix not yet confirmed — closest available session: punit.patel@simformsolutions.com, testUserPage fixture)

**Steps**

1. As the partial-permission session, navigate to Employee Details (Current tab)
2. Locate the employee row that would show a PIP tag for an authorized viewer
3. Confirm the rest of the row (name, department, projects, etc.) renders normally

**Expected**

Only the PIP tag/tooltip is suppressed for this row; every other column/value on the same row renders exactly as it would for a fully authorized viewer — the PIP suppression is scoped to PIP data only, not the whole row

**Automation Hint**

Exact partial-permission scenario (view-list-but-not-PIP) is not separately confirmed in the role matrix — closest proxy session used; flag as unconfirmed if testUserPage turns out to have no Employee List access at all.

#### TC-EMPDET-297 — Chained Basic + Advanced filter combination remains unaffected by the new PIP indicator/column

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Apply Basic/Advanced filter combination |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); mixed set of PIP and non-PIP employees

**Steps**

1. Apply a Basic filter (Department = Engineering)
2. Additionally apply an Advanced filter (Availability % >= 50) on top
3. Observe the combined filtered result set and count badge

**Expected**

The chained Basic+Advanced filter result set and count badge are correct and identical to pre-PIP-feature behavior for the same filter combination

**Test Data**

- `basicFilter`: Department = Engineering
- `advancedFilter`: Availability % >= 50

#### TC-EMPDET-298 — Sorting with multiple employees sharing the same PIP status maintains stable secondary ordering

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | EdgeCase: Sort stability with tied PIP status |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); 3+ employees all with PIP Status = Active

**Steps**

1. Sort the grid by Name with several employees sharing the same active PIP status
2. Record the resulting order
3. Re-sort by the same column again

**Expected**

Employees with identical PIP status maintain a stable, repeatable secondary sort order (e.g. by Name) — no random reshuffling between identical sorts

#### TC-EMPDET-299 — PIP indicator does not display when the date range is active but PIP Status explicitly is not Active

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | ValidationRule: PIP Status field must independently equal Active in addition to the date-range check |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with Start Date <= today <= End Date but PIP Status = Completed

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee whose dates look active but Status says Completed
3. Observe the PIP tag

**Expected**

No PIP tag is shown — the explicit Status field must independently equal Active in addition to the date-range check

**Test Data**

- `pipStartDate`: today-3d
- `pipEndDate`: today+3d
- `pipStatus`: Completed

#### TC-EMPDET-300 — PIP indicator does not display when Status reads Active but the date range is not currently active

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | ValidationRule: current date vs PIP Start/End Date cross-field check |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Status = Active but PIP End Date already passed (or Start Date in the future)

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee whose Status says Active but the date range is out of range
3. Observe the PIP tag

**Expected**

No PIP tag is shown — both the Status field AND the date-range check must independently pass; Status alone is not sufficient

**Test Data**

- `pipStatus`: Active
- `pipEndDate`: today-10d

#### TC-EMPDET-301 — Invalid PIP date range (Start Date > End Date) is handled gracefully at the data/validation layer, not just visually

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | ValidationRule: PIP End Date must not be earlier than PIP Start Date; invalid range must be handled gracefully |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee record with PIP Start Date > PIP End Date

**Steps**

1. Load the Employee List with the corrupted-range record present
2. Open browser dev tools / monitor network+console during load
3. Confirm no unhandled exception or failed API call results from this record

**Expected**

The invalid range is handled gracefully at the component/data layer — no unhandled JS exception, no failed/malformed API call attributable to this record

**Test Data**

- `pipStartDate`: 2026-09-10
- `pipEndDate`: 2026-09-01

#### TC-EMPDET-302 — Days Left is recomputed on every reload/render rather than served from a stale cached value

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | ValidationRule: Days Left must be recalculated on each load/render, not cached |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with an active PIP

**Steps**

1. Hover the PIP tag and note the Days Left value
2. Reload the page (F5) without changing the date
3. Hover the PIP tag again and compare Days Left

**Expected**

Days Left value after reload is recomputed against the current date/render, not served from a stale cache — value matches on both reads (same day) and would change correctly across a day boundary

#### TC-EMPDET-303 — Missing PIP Reason at the data layer does not throw a rendering exception in the tooltip component

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | ValidationRule: missing/blank PIP Reason must not break tooltip rendering |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee record with PIP Reason = null/undefined at the data layer

**Steps**

1. Load the Employee List with a PIP record whose Reason is null/undefined
2. Hover the PIP tag for that employee
3. Monitor the console for a rendering exception

**Expected**

No JS exception is thrown by the tooltip component when Reason is null/undefined; the component defensively handles the missing value

**Test Data**

### Functional (15)

#### TC-EMPDET-263 — PIP tag renders as a 'PIP' text/tag positioned immediately beside the employee name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Active PIP employees display the PIP indicator beside their name |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP

**Steps**

1. Navigate to Employee → Employee Details (Current tab)
2. Locate an employee row with an active PIP
3. Observe the tag's position relative to the employee name

**Expected**

A 'PIP' tag/label is rendered immediately adjacent to the employee name, legible and not overlapping other row content

**Test Data**

- `pipStatus`: Active

**Automation Hint**

Do not assume a specific testid/selector exists for the tag — describe by role/label until grounded against a live build.

#### TC-EMPDET-264 — PIP tooltip shows Status field value 'PIP'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Tooltip shows Status/Reason/Period/Days Left |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP

**Steps**

1. Navigate to Employee Details (Current tab)
2. Hover the PIP tag for an active-PIP employee
3. Read the Status field in the tooltip

**Expected**

Tooltip Status field reads 'PIP'

**Test Data**

- `expectedStatusLabel`: PIP

#### TC-EMPDET-265 — PIP tooltip shows the employee's configured PIP Reason text

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Tooltip shows Status/Reason/Period/Days Left |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP and a populated Reason field

**Steps**

1. Navigate to Employee Details (Current tab)
2. Hover the PIP tag
3. Read the Reason field in the tooltip

**Expected**

Tooltip Reason field exactly matches the employee's configured PIP Reason value

**Test Data**

- `pipReason`: Missed 2 consecutive sprint goals

#### TC-EMPDET-266 — PIP tooltip shows Period as 'Start Date – End Date' in correct format

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Tooltip shows Status/Reason/Period/Days Left |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP

**Steps**

1. Navigate to Employee Details (Current tab)
2. Hover the PIP tag
3. Read the Period field in the tooltip

**Expected**

Tooltip Period field displays 'PIP Start Date – PIP End Date' using the app's standard date format, matching the underlying record

**Test Data**

- `pipStartDate`: 2026-07-01
- `pipEndDate`: 2026-07-31

**Automation Hint**

Exact date display format not specified in source — verify against app's existing date-format convention elsewhere in Employee Details.

#### TC-EMPDET-267 — Days Left is recalculated dynamically against the current date, not a stale cached value

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: Days Left updates dynamically based on current date |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP End Date 10 days from today

**Steps**

1. Hover the PIP tag on day 0, note Days Left value
2. Advance/mock the system date by 1 day (or revisit the next calendar day)
3. Reload the Employee List and hover the PIP tag again

**Expected**

Days Left value decreases by exactly 1 and is computed fresh on each render — never a value cached from the previous load

**Test Data**

- `pipEndDate`: today+10d
- `expectedDaysLeftDay0`: 10
- `expectedDaysLeftDay1`: 9

**Automation Hint**

Requires date mocking (e.g. Playwright clock API) or a scheduled re-run across a real day boundary.

#### TC-EMPDET-268 — Employee with no PIP record at all does not display the PIP indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees without an active PIP do not display the indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with zero PIP records

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate an employee with no PIP record
3. Observe the name cell

**Expected**

No PIP tag is rendered for this employee

#### TC-EMPDET-269 — Employee with a future/upcoming PIP (Start Date in the future) does not display the indicator yet

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees without an active PIP do not display the indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date > today

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with an upcoming PIP
3. Observe the name cell

**Expected**

No PIP tag is rendered until the PIP Start Date is reached

**Test Data**

- `pipStartDate`: today+7d
- `pipEndDate`: today+30d

#### TC-EMPDET-270 — Employee with a completed/cancelled PIP status does not display the indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Employees without an active PIP do not display the indicator |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Status = Completed or Cancelled

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with a Completed/Cancelled PIP
3. Observe the name cell

**Expected**

No PIP tag is rendered for a Completed or Cancelled PIP record

**Test Data**

- `pipStatus`: Completed

#### TC-EMPDET-271 — Existing search by name still correctly locates an employee who has an active PIP indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: Search continues to work correctly with the PIP indicator present |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); Current tab

**Steps**

1. Navigate to Employee Details (Current tab)
2. Type the name of an employee with an active PIP into the search box
3. Observe the filtered result

**Expected**

Search returns exactly the matching employee row, with the PIP tag still rendered correctly

**Test Data**

- `searchTerm`: employee name with active PIP

#### TC-EMPDET-272 — PIP indicator renders correctly for employees across multiple paginated pages

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | AC: Pagination continues to work correctly with the PIP indicator present |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); grid with 2+ pages, PIP employees spread across pages

**Steps**

1. Navigate to Employee Details (Current tab)
2. Note which employees on page 1 have an active PIP
3. Go to page 2, then back to page 1

**Expected**

PIP tags render correctly and consistently for the same employees before and after pagination round-trip; no tags lost, duplicated, or misapplied to the wrong row

**Test Data**

- `pageSize`: configured page size

#### TC-EMPDET-273 — Current tab shows PIP indicators only for active employees; Past (archived) tab never shows a PIP indicator

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Business rule: Current tab shows only active employees; Past tab shows only archived — never mix |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); an employee who was on active PIP prior to being archived/deallocated

**Steps**

1. Navigate to Employee Details, Current tab — confirm active employees with active PIP show the tag
2. Navigate to the Past employees tab
3. Locate the archived employee who previously had an active PIP

**Expected**

Past tab never displays a PIP tag for any row, even for an employee who had an active PIP before archival — Current/Past separation is never mixed

#### TC-EMPDET-274 — PIP-related search/filter/sort/pagination state does not carry over between Current and Past tabs

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Business rule: Search, filter, sort, and pagination state are INDEPENDENT per tab |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. On Current tab, search/sort/filter to a subset that includes PIP-flagged employees
2. Switch to Past tab
3. Switch back to Current tab

**Expected**

Past tab shows its own default state; returning to Current tab does not silently retain the previous PIP-related search/filter/sort criteria

#### TC-EMPDET-275 — PIP indicator never reflects a stale prior state once the record is genuinely no longer active

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Business rule: PIP status must only reflect valid state transitions, never a stale prior state |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee whose PIP has moved from Active through to Completed/Cancelled

**Steps**

1. Observe the PIP tag while the record is Active
2. Advance to a state where the PIP Status is Completed/Cancelled (post date-range or explicit status change)
3. Reload the Employee List

**Expected**

The PIP tag/tooltip never shows the prior 'Active' state once the record has genuinely transitioned away from active — no stale state leakage

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-276 — Applying an existing Basic filter produces results/counts unaffected by the new PIP indicator/column

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Business rule: Applying an existing filter must produce results unaffected by the PIP indicator |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); mixed set of PIP and non-PIP employees

**Steps**

1. Apply a Basic filter (e.g. Department = Engineering)
2. Note the filtered row count and result-count badge
3. Compare against the API-returned count for the same filter

**Expected**

Filtered result rows and the result-count badge are identical to what they would be without the PIP indicator/column present — the API-returned filtered total also matches

**Test Data**

- `filterField`: Department
- `filterValue`: Engineering

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-277 — Sorting by Name (and other columns) remains stable and unaffected by the new PIP indicator/column

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Business rule: Sorting must remain stable and unaffected by the PIP indicator |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); grid with employees, several sharing PIP status

**Steps**

1. Sort the grid by Name ascending
2. Note the resulting row order
3. Sort descending, then back to ascending

**Expected**

Sort order is unchanged from pre-PIP behavior; rows sharing the same PIP status maintain stable secondary ordering (no unexpected reordering)

**Test Data**

- `sortColumn`: Name

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Integration (5)

#### TC-EMPDET-317 — PIP indicator does not disturb existing count-matching or tab-independence rules across the Employee Details module

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | AffectedModule integrationNote: Employee Details — Search/Filter/Sort/Pagination |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. With the PIP indicator present, verify grid row count, result-count badge, and API total match on the Current tab
2. Verify Current/Past tab independence still holds (no PIP-related state or records crossing tabs)
3. Verify search/filter/sort/pagination state remains independent per tab

**Expected**

All existing count-matching and tab-independence business rules continue to hold exactly as documented in the KB, with the PIP indicator present

#### TC-EMPDET-318 — PIP status shown in the Employee List cannot yet be reconciled against the future Leave & Compliance Details scoped view

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AffectedModule integrationNote: Leave & Compliance Details reconciliation (EMPLEV, not yet implemented) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt to cross-navigate from an employee's PIP tag in the Employee List to the Leave & Compliance Details scoped view for the same employee
2. Observe the result

**Expected**

MANUAL — deferred: the target reconciliation screen (EMPLEV, Leave & Compliance Details) is confirmed not implemented live (404 in-app as of 2026-07-13); no reconciliation is possible to test until it exists.

**Automation Hint**

MANUAL — requirement unclear: reconciliation target module does not exist live.

#### TC-EMPDET-319 — PIP visibility change requires no separate/new configuration in Admin > Roles & Permissions beyond the existing Employee List entries

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | AffectedModule integrationNote: Admin / Roles & Permissions (RBAC) must reuse existing matrix |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Admin → Roles & Permissions
2. Locate the permission entries governing Employee List visibility
3. Confirm these same entries also govern PIP-field visibility, with no separate/orphaned toggle required
4. Cross-navigate back to Employee Details and confirm the permission change (if toggled) is reflected

**Expected**

Toggling the existing Employee List permission entry in Admin > Roles & Permissions correctly changes PIP visibility in Employee Details — confirming the two modules share the same permission entry rather than needing separate configuration

#### TC-EMPDET-320 — PIP fields returned by the underlying API/data source exactly match what the Employee List indicator/tooltip displays (API-contract validation)

| Field | Value |
| --- | --- |
| **Tags** | @integration, @needs-verification |
| **Requirement Ref** | BusinessRule: api-parity — PIP fields in indicator/tooltip must exactly match API/data-source values |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with a fully populated PIP record

**Steps**

1. Call the underlying employees API/data source directly for a target employee and capture PIP Status/Reason/Start/End Date
2. Compare each field against what the Employee List UI displays in the tag/tooltip for the same employee
3. Repeat for a second employee whose PIP is inactive (verify absent fields are consistently omitted/null on both sides)

**Expected**

API response and UI display are in full parity for every PIP field, for both an active-PIP and a non-active-PIP employee — no cross-module data drift between the data source and the Employee List surface

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Endpoint/data source for PIP fields is unconfirmed in source — treat as the most plausible GET /api/employees extension pending confirmation.

#### TC-EMPDET-321 — Employee count consistency (grid rows, result-count badge, API total) is unaffected by the PIP indicator/column across the module

| Field | Value |
| --- | --- |
| **Tags** | @integration |
| **Requirement Ref** | BusinessRule: api-parity — employee count in grid/badge/API must always match |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Load the Employee List with the PIP indicator present
2. Compare grid row count, the result-count badge, and the API 'total' field
3. Repeat after applying a filter and after paginating

**Expected**

Grid rows, result-count badge, and API total remain equal to each other at every step — the PIP indicator/column introduces no discrepancy in this existing KB-mandated invariant

### Negative (6)

#### TC-EMPDET-278 — Invalid PIP date range (Start Date > End Date) does not crash the page or misleadingly show an active indicator

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | NegativeScenario: Invalid PIP date range |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Start Date > PIP End Date (corrupted data)

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with the invalid PIP date range
3. Observe the row and console for errors

**Expected**

No JavaScript crash/console error occurs; the PIP tag does not misleadingly present the record as an active, in-range PIP

**Test Data**

- `pipStartDate`: 2026-08-15
- `pipEndDate`: 2026-08-01

#### TC-EMPDET-279 — PIP End Date has passed but Status still reads Active — indicator must not misleadingly imply an ongoing PIP

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | NegativeScenario: PIP End Date passed, Status still Active |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP End Date in the past and PIP Status = Active (stale-status test data)

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with the expired-but-Active PIP record
3. Observe the PIP tag/tooltip

**Expected**

MANUAL — cannot assert a single fixed outcome: the requirement leaves the exact expiry behavior (auto-hide vs. Overdue status) undecided. At minimum, the indicator must not misleadingly imply an ongoing/current PIP.

**Test Data**

- `pipEndDate`: today-3d
- `pipStatus`: Active

**Automation Hint**

MANUAL — requirement unclear: PIP expiry behavior (auto-hide vs. Overdue status) is not yet decided per FR#5 — automation-generator and test-runner should treat this as blocked until the business decision is made.

#### TC-EMPDET-280 — Unauthorized/no-permission user attempting to view Employee List sees no PIP data, with graceful messaging (not a broken UI)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | NegativeScenario: unauthorized user views Employee List |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture) as a no/low-permission viewer

**Steps**

1. As testUserPage, navigate directly to the Employee List URL
2. Observe the page for any PIP-related UI fragment, loading spinner stuck, or partial/error state

**Expected**

The page renders cleanly with no PIP indicator/tooltip artifacts and no broken UI fragment — this is a distinct assertion from the security/hidden-element check: it verifies graceful degradation/UX rather than element presence

#### TC-EMPDET-281 — PIP Status suggesting a completed/cancelled state must not be overridden by a date range that still looks 'active'

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation — invalid PIP status transition |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Status = Cancelled/Completed but Start Date <= today <= End Date

**Steps**

1. Navigate to Employee Details (Current tab)
2. Locate the employee with Status=Cancelled/Completed but an 'active-looking' date range
3. Observe the PIP tag

**Expected**

No PIP tag is shown — an explicit Cancelled/Completed Status always overrides a date range that would otherwise look active; no invalid status transition is displayed

**Test Data**

- `pipStatus`: Cancelled
- `pipStartDate`: today-2d
- `pipEndDate`: today+5d

#### TC-EMPDET-282 — PIP data fetch under a slow/timed-out network shows a loading indicator and does not freeze the Employee List

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — API timeout / slow network |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); network throttled or PIP-data sub-call delayed beyond threshold

**Steps**

1. Throttle network or intercept the PIP-data request with an artificial delay
2. Navigate to Employee Details (Current tab)
3. Observe the grid and PIP column while the response is pending

**Expected**

A loading indicator (spinner/skeleton) is shown for the PIP column/indicator while data is pending; the rest of the grid remains interactive and does not freeze

**Test Data**

- `throttle`: slow 3g or intercepted delayed response

**Automation Hint**

Use Playwright route interception to simulate delay — do not use page.waitForTimeout for the assertion itself.

#### TC-EMPDET-283 — A server error (5xx) on the PIP-data sub-call shows a friendly fallback, not a blank/broken PIP column

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — HTTP 500 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); PIP-data endpoint/sub-call intercepted to return 500

**Steps**

1. Intercept the PIP-data request and force a 500 response
2. Navigate to Employee Details (Current tab)
3. Observe the row for an employee that would otherwise show a PIP tag

**Expected**

The row renders without crashing; the PIP column shows a friendly fallback (e.g. blank or a subtle 'unavailable' state) rather than a raw error, broken layout, or blank screen for the whole grid

**Test Data**

- `mockStatus`: 500

**Automation Hint**

Endpoint/data source for PIP fields is unconfirmed (dependencies[] notes this) — mock at the most plausible layer (GET /api/employees) pending confirmation.

### Performance (2)

#### TC-EMPDET-306 — PIP tooltip opens on hover without noticeable delay

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | NFR: Tooltip must open on hover without noticeable delay |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with active PIP

**Steps**

1. Hover the PIP tag and measure the time from hover to tooltip fully visible
2. Repeat across 3 samples

**Expected**

Tooltip opens within an assumed near-instant threshold (<300ms) with no visible lag; exact numeric NFR target is not specified in source — this is an assumption

**Test Data**

- `assumedThresholdMs`: 300

**Automation Hint**

No numeric hover-open latency target is specified in source — using an assumed 300ms threshold; confirm the real target once specified.

#### TC-EMPDET-307 — Adding the PIP indicator/column has no measurable impact on Employee List load, search, filter, sort, or pagination performance

| Field | Value |
| --- | --- |
| **Tags** | @performance, @regression |
| **Requirement Ref** | NFR: No measurable performance impact from adding the PIP indicator |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); dataset with a realistic mix of PIP and non-PIP employees (500+ records recommended)

**Steps**

1. Measure Employee List initial load time with the PIP column present
2. Measure search response time
3. Measure filter, sort, and pagination response times

**Expected**

All measured timings remain within the existing KB performance targets (list load <2s, search <1s, filter/sort/pagination <2s) — the PIP indicator introduces no regression

**Test Data**

- `listLoadTarget`: <2s
- `searchTarget`: <1s
- `filterTarget`: <2s
- `sortTarget`: <2s
- `paginationTarget`: <2s

### Regression (3)

#### TC-EMPDET-308 — Existing Employee List search/filter/sort/pagination behavior is fully intact end-to-end after the PIP indicator is added

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AffectedModule: Employee Details — Search/Filter/Sort/Pagination |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); full regression pass across Current tab

**Steps**

1. Run a full search/filter/sort/pagination pass across the Current tab with the PIP indicator present
2. Cross-check grid row count, result-count badge, and API total at each step

**Expected**

Every existing S/F/S/P behavior and count-matching rule continues to hold exactly as before this feature was added

#### TC-EMPDET-309 — PIP indicator cannot yet be reconciled with the Leave & Compliance Details (Notice Period) scoped view — dependent module not implemented

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AffectedModule: Leave & Compliance Details (Notice Period / PIP scoped views, EMPLEV — not yet implemented) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Attempt to navigate to the Leave & Compliance Details / Notice Period scoped view referenced as this feature's reconciliation target
2. Observe the result

**Expected**

MANUAL — confirmed out of scope for now: the target screen returns an in-app 404 as of 2026-07-13 and has no live 'Leave' tab in the Employee sidebar. This case is deferred until that module is built.

**Automation Hint**

MANUAL — requirement unclear: reconciliation target module (EMPLEV, Leave & Compliance Details) does not exist live.

#### TC-EMPDET-310 — PIP visibility rules are consistent with the same Admin > Roles & Permissions matrix already enforced elsewhere in the Employee List

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | AffectedModule: Admin / Roles & Permissions (RBAC) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Admin → Roles & Permissions
2. Locate the existing Employee List visibility/permission entries
3. Cross-check that PIP-field visibility is governed by the same entries rather than requiring an undocumented separate permission toggle

**Expected**

PIP indicator/tooltip visibility reuses the existing Employee List permission configuration in Admin > Roles & Permissions — no orphaned or undocumented separate PIP-only permission toggle is required

**Automation Hint**

Exact role/permission matrix for PIP visibility is unconfirmed (roleMatrix entries marked 'assumed, not confirmed') — verify against whatever Admin actually exposes.

### Security (6)

#### TC-EMPDET-311 — Reporting Manager cannot view PIP data for employees outside their own team scope

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | RoleMatrix: Reporting Manager cannot view PIP info for employees outside own scope |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture) using test data scoped as a Reporting Manager for a specific team (a dedicated RM-role fixture/session is not available in this environment — Admin session used as a stand-in via scoped test data, not session identity; flag if a true RM login becomes available)

**Steps**

1. As the RM-scoped session, view the Employee List filtered/scoped to own team — confirm PIP tag visible for own-team members with active PIP
2. Attempt to view or navigate to an employee outside the RM's own team scope who also has an active PIP
3. Observe whether PIP data is visible for the out-of-scope employee

**Expected**

PIP indicator/tooltip is visible only for employees within the RM's own team scope; PIP data for employees outside that scope is not visible via UI or accessible via a direct API call for the same employee ID

**Test Data**

- `ownTeamEmployee`: in-scope, active PIP
- `otherTeamEmployee`: out-of-scope, active PIP

**Automation Hint**

No dedicated Reporting Manager fixture/session exists in this repo's auth setup (only primaryPage/Admin and testUserPage/Employee-TM) — a true RM-role session needs to be provisioned before this can be automated as written.

#### TC-EMPDET-312 — Employee/TM viewer role never sees the PIP indicator or tooltip for any other employee's row

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | RoleMatrix: Employee/TM viewer cannot view PIP indicator/tooltip for other employees; Regression: rbac — unauthorized role UI check |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture, Employee/TM viewer)

**Steps**

1. As testUserPage, navigate to Employee → Employee Details
2. Scan every visible row, including ones known to have an active PIP for other employees
3. Confirm no PIP tag/tooltip is rendered anywhere in the DOM for this session

**Expected**

No PIP tag or tooltip is present anywhere in the DOM for the Employee/TM viewer session, for any employee row other than possibly their own

#### TC-EMPDET-313 — A user with no PIP-view permission at all sees the PIP feature fully suppressed app-wide, not just per-row

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SecurityScenario: unauthorized user attempts to view PIP indicator/tooltip via UI |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as punit.patel@simformsolutions.com (testUserPage fixture) as a representative no-PIP-permission session

**Steps**

1. As testUserPage, navigate to Employee Details
2. Open the Column setting dropdown (if present) and confirm no PIP column/toggle option is offered
3. Confirm no PIP tag appears for ANY row, not merely the ones checked individually

**Expected**

The PIP feature is suppressed app-wide for this session — no PIP tag on any row, and no PIP-related toggle/option surfaced anywhere in the Employee List UI (e.g. column settings)

#### TC-EMPDET-314 — Direct API call for PIP fields by an unauthorized caller is rejected or omits PIP data (object-level authorization / IDOR check)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SecurityScenario: unauthorized caller retrieves PIP data directly via API; Regression: rbac — IDOR check |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

An API client/session without PIP-view authorization (proxy: punit.patel@simformsolutions.com testUserPage's authenticated context, used for its API token)

**Steps**

1. Using the unauthorized session's credentials/token, call the underlying employees API endpoint directly for a target employee with an active PIP
2. Also attempt calling it with a manipulated/guessed employee ID belonging to a different employee (IDOR check)
3. Inspect the response status and body

**Expected**

The API either returns 403 for the unauthorized caller, or returns 200 with PIP fields (Status/Reason/Start/End Date) omitted/nulled from the response body; the IDOR attempt via a manipulated employee ID behaves identically

**Test Data**

- `targetEmployeeId`: an employee ID with an active PIP

**Automation Hint**

Endpoint/method is unconfirmed in source (dependencies[] notes GET /api/employees as the most plausible extension point, not confirmed) — verify against the actual endpoint once implemented.

#### TC-EMPDET-315 — PIP Reason free-text is escaped and rendered as literal text in the tooltip — no XSS execution

| Field | Value |
| --- | --- |
| **Tags** | @security, @negative |
| **Requirement Ref** | SecurityScenario: PIP Reason rendered safely (XSS) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); employee with PIP Reason containing script/HTML payloads

**Steps**

1. Set the employee's PIP Reason field to contain '<script>alert(1)</script>' and other special characters
2. Navigate to Employee Details (Current tab) and hover the PIP tag
3. Observe the tooltip content and monitor for any script execution/dialog

**Expected**

No script executes (no alert/dialog fires); the payload renders as literal escaped text in the tooltip, consistent with the KB's existing search-input XSS handling for this module

**Test Data**

- `pipReason`: <script>alert(1)</script> " ' -- % null undefined

#### TC-EMPDET-316 — Each role's permitted and forbidden access to PIP data is enforced consistently at both UI and API level across the full role matrix

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | BusinessRule: role-scope-assertion — PIP RBAC enforced at UI and API level for every role |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Three sessions/perspectives: ceo@simformsolutions.com (primaryPage, Admin — full access assumed), RM-scoped test data (no dedicated fixture — see caveat), punit.patel@simformsolutions.com (testUserPage, Employee/TM viewer — no access)

**Steps**

1. For each role (Admin, Reporting Manager, Employee/TM), attempt to view the PIP indicator/tooltip via UI for the same target employee
2. For each role, attempt the equivalent direct API call for the same target employee
3. Tabulate UI-visible vs. API-visible results per role and compare against the (assumed, not fully confirmed) role matrix

**Expected**

UI-level visibility and API-level data exposure are consistent with each other for every role — no role sees data via API that is hidden in the UI, or vice versa; results match the assumed role matrix and any mismatch is flagged for follow-up since the matrix itself is not fully confirmed

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Smoke (3)

#### TC-EMPDET-260 — Employee List shows PIP indicator only for active-PIP employees with accurate tooltip/Days Left

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | CriticalPath 1 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); Current tab; at least one employee with an active PIP (Start Date <= today <= End Date, Status Active)

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee → Employee Details (Current tab)
3. Locate the row for the employee with an active PIP
4. Observe the PIP tag beside the employee name
5. Hover the PIP tag and read the tooltip

**Expected**

PIP tag is visible beside the employee's name; tooltip shows Status: PIP, Reason, Period (Start Date – End Date), and Days Left; Days Left equals PIP End Date minus current date

**Test Data**

- `pipStartDate`: today-5d
- `pipEndDate`: today+10d
- `pipStatus`: Active
- `pipReason`: Performance concerns Q2

**Automation Hint**

No confirmed live selector for the PIP tag/tooltip exists yet — automation-generator needs a live-app grounding pass before writing locators; use role/label-based selector, not an invented testid.

#### TC-EMPDET-261 — PIP indicator visibility respects existing RBAC — unauthorized user never sees PIP indicator/tooltip

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @security |
| **Requirement Ref** | CriticalPath 2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Two sessions: ceo@simformsolutions.com (primaryPage, Admin) with an active PIP employee visible; punit.patel@simformsolutions.com (testUserPage, Employee/TM viewer, no PIP-view permission)

**Steps**

1. As primaryPage, confirm the PIP tag is visible for the target employee
2. As testUserPage, navigate to Employee → Employee Details
3. Locate the same employee's row
4. Observe whether the PIP tag/tooltip is present

**Expected**

PIP tag and tooltip are completely absent from the DOM for the unauthorized/lower-privilege session, even though the same employee shows the tag for the authorized session

**Test Data**

- `employeeWithActivePip`: target employee row

**Automation Hint**

Open two browser contexts: primaryPage + testUserPage. Exact role/permission matrix for PIP visibility is unconfirmed — verify current default behavior, not an assumed matrix.

#### TC-EMPDET-262 — Existing search, sort, filter, and pagination continue to function correctly with the PIP indicator present

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @regression |
| **Requirement Ref** | CriticalPath 3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture); Current tab; grid has 2+ pages of employees, some with active PIP

**Steps**

1. Log in as ceo@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee → Employee Details (Current tab)
3. Search by an employee name that has an active PIP
4. Clear search, sort by Name ascending then descending
5. Apply a Department filter, then navigate to page 2 and back to page 1

**Expected**

Search returns the correct employee with PIP tag intact; sort order is correct both directions; filter results/counts are correct; pagination returns the same records with PIP tags intact; grid row count, badge count, and API total all match at each step

**Test Data**

- `searchTerm`: employee surname
- `sortColumn`: Name
- `filterField`: Department
