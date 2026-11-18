# Employee Details — Test Cases

**Total test cases:** 129  
**Modules covered:** Employee Details  
**Source:** `reports/test-cases/cases-2026-07-13-EMPDET.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| regression | 36 | 27.9% |
| functional | 32 | 24.8% |
| boundary | 22 | 17.1% |
| negative | 13 | 10.1% |
| security | 10 | 7.8% |
| performance | 6 | 4.7% |
| integration | 4 | 3.1% |
| a11y | 3 | 2.3% |
| smoke | 3 | 2.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 53 | 41.1% |
| high | 48 | 37.2% |
| critical | 14 | 10.9% |
| low | 14 | 10.9% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 73 | 56.6% |
| minor | 46 | 35.7% |
| critical | 10 | 7.8% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 99 | 76.7% |
| regression-derived | 30 | 23.3% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 104 | 80.6% |
| unverified-fallback | 11 | 8.5% |
| inferred | 10 | 7.8% |
| speculative | 4 | 3.1% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 109 | 84.5% |
| No | 20 | 15.5% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @regression | 47 | 36.4% |
| @functional | 44 | 34.1% |
| @boundary | 26 | 20.2% |
| @needs-verification | 22 | 17.1% |
| @negative | 14 | 10.9% |
| @security | 10 | 7.8% |
| @smoke | 7 | 5.4% |
| @performance | 6 | 4.7% |
| @a11y | 3 | 2.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-131](#tc-empdet-131-rm-hovers-active-employee-row-and-drills-into-view-project-details-side-sheet) | RM hovers active-employee row and drills into View project details side sheet | Employee Details | smoke | critical |
| [TC-EMPDET-132](#tc-empdet-132-rm-adds-a-project-allocation-via-tentative-projects-shortlist-and-grid-reflects-it-without-reload) | RM adds a project allocation via tentative-projects shortlist and grid reflects it without reload | Employee Details | smoke | critical |
| [TC-EMPDET-133](#tc-empdet-133-rm-deletes-archives-an-employee-deallocates-a-lingering-project-and-the-employee-moves-to-past-employees) | RM deletes/archives an employee, deallocates a lingering project, and the employee moves to Past employees | Employee Details | smoke | critical |
| [TC-EMPDET-134](#tc-empdet-134-employee-details-page-renders-title-subtitle-and-last-updated-timestamp) | Employee Details page renders title, subtitle, and Last Updated timestamp | Employee Details | functional | high |
| [TC-EMPDET-135](#tc-empdet-135-tabs-switch-between-the-active-employee-view-and-the-past-employees-view) | Tabs switch between the active employee view and the Past employees view | Employee Details | functional | high |
| [TC-EMPDET-136](#tc-empdet-136-hovering-a-row-reveals-the-row-level-action-menu) | Hovering a row reveals the row-level action menu | Employee Details | functional | high |
| [TC-EMPDET-137](#tc-empdet-137-hover-popup-shows-allocation-and-logged-hours-with-variance-phrase) | Hover popup shows Allocation % and Logged Hours % with variance phrase | Employee Details | functional | high |
| [TC-EMPDET-138](#tc-empdet-138-hover-popup-shows-allocation-since-duration-total-logged-hours-and-shadow-developer-of) | Hover popup shows Allocation Since, Duration, Total logged hours, and Shadow Developer of | Employee Details | functional | high |
| [TC-EMPDET-139](#tc-empdet-139-hover-popup-shows-the-per-project-table-projects-allocation-logged-hours) | Hover popup shows the per-project table (Projects / Allocation / Logged Hours %) | Employee Details | functional | high |
| [TC-EMPDET-140](#tc-empdet-140-hover-popup-shows-the-2-bucket-billability-split-non-billable-billable) | Hover popup shows the 2-bucket billability split (Non-billable/Billable) | Employee Details | functional | high |
| [TC-EMPDET-141](#tc-empdet-141-view-project-details-side-sheet-shows-the-expanded-3-bucket-billability-breakdown) | View project details side sheet shows the expanded 3-bucket billability breakdown | Employee Details | functional | high |
| [TC-EMPDET-142](#tc-empdet-142-view-project-details-side-sheet-shows-the-projects-allocation-logged-hours-table) | View project details side sheet shows the Projects/Allocation/Logged Hours % table | Employee Details | functional | medium |
| [TC-EMPDET-143](#tc-empdet-143-skill-column-filter-opens-the-pr-reviewer-popup-with-the-4-point-frequency-scale) | Skill column filter opens the 'PR Reviewer' popup with the 4-point frequency scale | Employee Details | functional | medium |
| [TC-EMPDET-144](#tc-empdet-144-column-setting-dropdown-opens-adjacent-to-the-table) | Column setting dropdown opens adjacent to the table | Employee Details | functional | low |
| [TC-EMPDET-145](#tc-empdet-145-add-project-allocation-drawer-opens-with-7-inputs-notes-textarea-and-cancel-submit) | Add project allocation drawer opens with 7 inputs + notes textarea and Cancel/Submit | Employee Details | functional | critical |
| [TC-EMPDET-146](#tc-empdet-146-submitting-add-project-allocation-persists-a-new-row-and-grid-hover-summary-updates-without-reload) | Submitting Add project allocation persists a new row and grid/hover summary updates without reload | Employee Details | functional | critical |
| [TC-EMPDET-147](#tc-empdet-147-adding-a-project-to-the-tentative-shortlist-renders-it-as-a-removable-mini-table-row) | Adding a project to the tentative shortlist renders it as a removable mini-table row | Employee Details | functional | medium |
| [TC-EMPDET-148](#tc-empdet-148-removing-a-tentative-project-row-restores-the-empty-state) | Removing a tentative-project row restores the empty state | Employee Details | functional | medium |
| [TC-EMPDET-149](#tc-empdet-149-clicking-an-active-employee-row-opens-the-employee-details-side-drawer-with-identity-header) | Clicking an active-employee row opens the employee-details side drawer with identity header | Employee Details | functional | high |
| [TC-EMPDET-150](#tc-empdet-150-employee-details-drawer-s-two-sections-independently-expand-collapse) | Employee-details drawer's two sections independently expand/collapse | Employee Details | functional | medium |
| [TC-EMPDET-151](#tc-empdet-151-project-details-drawer-distinguishes-the-employee-s-own-role-from-their-reporting-manager-via-separate-icons) | Project-details drawer distinguishes the employee's own role from their reporting manager via separate icons | Employee Details | functional | medium |
| [TC-EMPDET-152](#tc-empdet-152-skills-detail-drawer-shows-all-technologies-46-header-with-the-badge-list) | Skills detail drawer shows 'All Technologies (46)' header with the badge list | Employee Details | functional | medium |
| [TC-EMPDET-153](#tc-empdet-153-last-15-days-logs-table-variant-shows-paginated-log-rows) | Last-15-days logs table variant shows paginated log rows | Employee Details | functional | medium |
| [TC-EMPDET-154](#tc-empdet-154-last-15-days-logs-add-edit-form-variant-shows-6-inputs-notes-textarea) | Last-15-days logs add/edit form variant shows 6 inputs + notes textarea | Employee Details | functional | medium |
| [TC-EMPDET-155](#tc-empdet-155-add-note-dialog-creates-a-new-note) | Add note dialog creates a new note | Employee Details | functional | medium |
| [TC-EMPDET-156](#tc-empdet-156-edit-note-dialog-opens-pre-filled-with-the-existing-note-s-values) | Edit note dialog opens pre-filled with the existing note's values | Employee Details | functional | medium |
| [TC-EMPDET-157](#tc-empdet-157-action-edit-employee-drawer-opens-with-15-inputs-across-3-sections-2-date-pickers) | Action - edit employee drawer opens with 15 inputs across 3 sections + 2 date pickers | Employee Details | functional | critical |
| [TC-EMPDET-158](#tc-empdet-158-saving-the-edit-employee-drawer-persists-changes-and-updates-the-grid-immediately-without-reload) | Saving the edit-employee drawer persists changes and updates the grid immediately without reload | Employee Details | functional | critical |
| [TC-EMPDET-159](#tc-empdet-159-cancel-on-edit-drawer-discards-all-changes-grid-shows-original-pre-edit-values) | Cancel on Edit Drawer discards all changes; grid shows original pre-edit values | Employee Details | functional | high |
| [TC-EMPDET-160](#tc-empdet-160-saving-the-edit-employee-drawer-also-refreshes-any-open-hover-popup-expanded-project-details-sheet-for-the-same-employee) | Saving the edit-employee drawer also refreshes any open hover popup / expanded project-details sheet for the same employee | Employee Details | functional | high |
| [TC-EMPDET-161](#tc-empdet-161-past-employees-retain-project-details-drawer-drill-down-parity-with-active-employees) | Past employees retain project-details drawer drill-down parity with active employees | Employee Details | functional | high |
| [TC-EMPDET-162](#tc-empdet-162-clicking-a-per-project-row-inside-the-hover-popup-opens-the-project-details-drawer) | Clicking a per-project row inside the hover popup opens the project-details drawer | Employee Details | functional | medium |
| [TC-EMPDET-163](#tc-empdet-163-last-updated-timestamp-reflects-the-actual-last-updated-time-returned-by-the-api) | 'Last Updated:' timestamp reflects the actual last-updated time returned by the API | Employee Details | functional | medium |
| [TC-EMPDET-164](#tc-empdet-164-column-setting-dropdown-toggle-changes-visible-columns) | Column setting dropdown toggle changes visible columns | Employee Details | functional | low |
| [TC-EMPDET-165](#tc-empdet-165-add-project-allocation-form-field-requiredness-manual-clarification) | Add-project-allocation form field requiredness (Manual clarification) | Employee Details | functional | medium |
| [TC-EMPDET-166](#tc-empdet-166-cancel-the-deallocation-confirmation-modal-leaves-the-allocation-unchanged) | Cancel the Deallocation confirmation modal leaves the allocation unchanged | Employee Details | negative | critical |
| [TC-EMPDET-167](#tc-empdet-167-cancel-close-the-delete-employee-confirmation-modal-leaves-the-employee-list-unchanged) | Cancel/close the Delete-employee confirmation modal leaves the employee list unchanged | Employee Details | negative | critical |
| [TC-EMPDET-168](#tc-empdet-168-closing-add-project-allocation-add-note-drawer-mid-entry-via-close-icon-discards-the-partial-entry) | Closing Add-project-allocation/Add-note drawer mid-entry via close icon discards the partial entry | Employee Details | negative | medium |
| [TC-EMPDET-169](#tc-empdet-169-archive-employee-details-drawer-shows-no-edit-affordance-for-past-employees) | Archive employee details drawer shows no edit affordance for Past employees | Employee Details | negative | high |
| [TC-EMPDET-170](#tc-empdet-170-submitting-add-project-allocation-or-add-note-with-a-required-field-left-blank-shows-an-inline-error) | Submitting Add-project-allocation or Add-note with a required field left blank shows an inline error | Employee Details | negative | medium |
| [TC-EMPDET-171](#tc-empdet-171-whitespace-only-text-in-the-add-note-textarea-is-treated-as-empty-and-rejected) | Whitespace-only text in the Add-note textarea is treated as empty and rejected | Employee Details | negative | medium |
| [TC-EMPDET-172](#tc-empdet-172-text-one-character-beyond-the-documented-max-length-in-the-note-textarea-is-rejected) | Text one character beyond the documented max length in the note textarea is rejected | Employee Details | negative | medium |
| [TC-EMPDET-173](#tc-empdet-173-reactivating-an-archived-employee-outside-the-defined-restore-flow-is-rejected) | Reactivating an archived employee outside the defined Restore flow is rejected | Employee Details | negative | high |
| [TC-EMPDET-174](#tc-empdet-174-refreshing-the-browser-mid-form-on-add-project-allocation-edit-employee-does-not-submit-partial-data) | Refreshing the browser mid-form on Add-project-allocation/Edit-employee does not submit partial data | Employee Details | negative | medium |
| [TC-EMPDET-175](#tc-empdet-175-clicking-submit-save-3x-rapidly-on-add-note-results-in-exactly-one-operation) | Clicking Submit/Save 3x rapidly on Add-note results in exactly one operation | Employee Details | negative | medium |
| [TC-EMPDET-176](#tc-empdet-176-http-401-session-expiry-returns-the-user-to-the-login-page-without-data-loss) | HTTP 401 session expiry returns the user to the login page without data loss | Employee Details | negative | medium |
| [TC-EMPDET-177](#tc-empdet-177-navigating-to-a-non-existent-employee-record-shows-a-not-found-page-not-a-blank-screen) | Navigating to a non-existent employee record shows a not-found page, not a blank screen | Employee Details | negative | medium |
| [TC-EMPDET-178](#tc-empdet-178-http-503-service-unavailable-response-shows-a-maintenance-retry-message) | HTTP 503 service-unavailable response shows a maintenance/retry message | Employee Details | negative | medium |
| [TC-EMPDET-179](#tc-empdet-179-skills-detail-header-count-46-reconciles-with-rendered-badges-via-a-pagination-show-more-mechanism) | Skills detail header count (46) reconciles with rendered badges via a pagination/show-more mechanism | Employee Details | boundary | medium |
| [TC-EMPDET-180](#tc-empdet-180-tentative-projects-list-shows-the-exact-empty-state-copy-before-any-project-is-added) | Tentative projects list shows the exact empty-state copy before any project is added | Employee Details | boundary | medium |
| [TC-EMPDET-181](#tc-empdet-181-column-setting-dropdown-opens-without-crashing-despite-unconfirmed-toggle-labels) | Column setting dropdown opens without crashing despite unconfirmed toggle labels | Employee Details | boundary | low |
| [TC-EMPDET-182](#tc-empdet-182-hidden-table-row-variant-on-the-column-setting-screen-renders-a-correct-empty-loading-state) | Hidden Table Row variant on the Column-setting screen renders a correct empty/loading state | Employee Details | boundary | medium |
| [TC-EMPDET-183](#tc-empdet-183-hidden-table-row-variant-on-the-add-project-screen-renders-a-correct-empty-loading-state) | Hidden Table Row variant on the Add-project screen renders a correct empty/loading state | Employee Details | boundary | medium |
| [TC-EMPDET-184](#tc-empdet-184-hidden-table-row-variant-on-the-skills-screen-renders-a-correct-empty-loading-state) | Hidden Table Row variant on the Skills screen renders a correct empty/loading state | Employee Details | boundary | medium |
| [TC-EMPDET-185](#tc-empdet-185-hidden-table-row-variant-on-the-past-employees-screen-renders-a-correct-empty-loading-state) | Hidden Table Row variant on the Past-employees screen renders a correct empty/loading state | Employee Details | boundary | medium |
| [TC-EMPDET-186](#tc-empdet-186-deallocation-confirmation-modal-is-reachable-dismissible-without-breaking-the-3-layer-drawer-stack) | Deallocation confirmation modal is reachable/dismissible without breaking the 3-layer drawer stack | Employee Details | boundary | high |
| [TC-EMPDET-187](#tc-empdet-187-hover-row-action-menu-allocation-summary-is-consistent-for-the-last-visible-row) | Hover row action menu/allocation summary is consistent for the last visible row | Employee Details | boundary | medium |
| [TC-EMPDET-188](#tc-empdet-188-hover-row-action-menu-allocation-summary-is-consistent-for-the-first-row-of-a-newly-loaded-page) | Hover row action menu/allocation summary is consistent for the first row of a newly loaded page | Employee Details | boundary | medium |
| [TC-EMPDET-189](#tc-empdet-189-hover-row-action-menu-allocation-summary-is-consistent-for-a-newly-added-row) | Hover row action menu/allocation summary is consistent for a newly added row | Employee Details | boundary | medium |
| [TC-EMPDET-190](#tc-empdet-190-edit-note-dialog-does-not-silently-persist-partial-edits-when-cancel-is-used) | Edit note dialog does not silently persist partial edits when Cancel is used | Employee Details | boundary | medium |
| [TC-EMPDET-191](#tc-empdet-191-billability-breakdown-reconciles-between-the-hover-popup-2-bucket-and-the-expanded-sheet-3-bucket) | Billability breakdown reconciles between the hover popup (2-bucket) and the expanded sheet (3-bucket) | Employee Details | boundary | high |
| [TC-EMPDET-192](#tc-empdet-192-the-two-date-pickers-in-the-edit-employee-drawer-enforce-a-logical-end-not-before-start-relationship) | The two date pickers in the Edit-employee drawer enforce a logical end-not-before-start relationship | Employee Details | boundary | medium |
| [TC-EMPDET-193](#tc-empdet-193-edit-employee-drawer-s-3-section-titles-and-15-field-labels-clarification-needed-before-locking-selectors) | Edit-employee drawer's 3 section titles and 15 field labels — clarification needed before locking selectors | Employee Details | boundary | medium |
| [TC-EMPDET-194](#tc-empdet-194-semantics-ordering-requirement-of-the-two-date-pickers-clarification-needed) | Semantics/ordering requirement of the two date pickers — clarification needed | Employee Details | boundary | low |
| [TC-EMPDET-195](#tc-empdet-195-hidden-delete-trash-icon-trigger-condition-within-the-edit-employee-form-clarification-needed) | Hidden delete/trash icon trigger condition within the Edit-employee form — clarification needed | Employee Details | boundary | low |
| [TC-EMPDET-196](#tc-empdet-196-metadata-only-export-limitation-confirm-real-copy-on-the-21-structural-only-screens-before-locking-selectors) | Metadata-only export limitation — confirm real copy on the 21 structural-only screens before locking selectors | Employee Details | boundary | high |
| [TC-EMPDET-197](#tc-empdet-197-total-logged-hours-equals-the-sum-of-per-project-logged-hours-for-the-employee) | Total logged hours equals the sum of per-project logged hours for the employee | Employee Details | boundary | low |
| [TC-EMPDET-198](#tc-empdet-198-exact-confirmation-dialog-copy-for-delete-employee-and-deallocation-clarification-needed) | Exact confirmation-dialog copy for Delete-employee and Deallocation — clarification needed | Employee Details | boundary | low |
| [TC-EMPDET-199](#tc-empdet-199-double-clicking-save-on-add-project-allocation-add-note-tentative-projects-confirm-does-not-create-duplicates) | Double-clicking Save on Add-project-allocation/Add-note/tentative-projects-confirm does not create duplicates | Employee Details | boundary | high |
| [TC-EMPDET-200](#tc-empdet-200-a-drawer-hover-surface-with-zero-skills-does-not-render-a-broken-n-overflow-chip-at-the-low-boundary) | A drawer/hover surface with zero skills does not render a broken '+N' overflow chip at the low boundary | Employee Details | boundary | medium |
| [TC-EMPDET-201](#tc-empdet-201-keyboard-navigation-reaches-all-interactive-controls-in-the-employee-details-and-project-details-drawers) | Keyboard navigation reaches all interactive controls in the employee-details and project-details drawers | Employee Details | a11y | medium |
| [TC-EMPDET-202](#tc-empdet-202-close-icons-and-collapsible-sections-carry-accessible-names) | Close icons and collapsible sections carry accessible names | Employee Details | a11y | medium |
| [TC-EMPDET-203](#tc-empdet-203-hover-revealed-allocation-summary-content-is-announced-reachable-via-keyboard-equivalent-focus) | Hover-revealed allocation summary content is announced/reachable via keyboard-equivalent focus | Employee Details | a11y | low |
| [TC-EMPDET-204](#tc-empdet-204-performance-employee-details-list-loads-in-under-2-seconds) | Performance — Employee Details list loads in under 2 seconds | Employee Details | performance | low |
| [TC-EMPDET-205](#tc-empdet-205-performance-search-responds-in-under-1-second) | Performance — Search responds in under 1 second | Employee Details | performance | low |
| [TC-EMPDET-206](#tc-empdet-206-performance-filter-apply-completes-in-under-2-seconds) | Performance — Filter apply completes in under 2 seconds | Employee Details | performance | low |
| [TC-EMPDET-207](#tc-empdet-207-performance-sort-apply-completes-in-under-2-seconds) | Performance — Sort apply completes in under 2 seconds | Employee Details | performance | low |
| [TC-EMPDET-208](#tc-empdet-208-performance-pagination-navigation-completes-in-under-2-seconds) | Performance — Pagination navigation completes in under 2 seconds | Employee Details | performance | low |
| [TC-EMPDET-209](#tc-empdet-209-performance-opening-the-advanced-filter-panel-completes-in-under-1-second) | Performance — Opening the (Advanced) filter panel completes in under 1 second | Employee Details | performance | low |
| [TC-EMPDET-210](#tc-empdet-210-rm-cannot-view-edit-employees-outside-own-reporting-chain-ui-api) | RM cannot view/edit employees outside own reporting chain (UI + API) | Employee Details | security | critical |
| [TC-EMPDET-211](#tc-empdet-211-rm-cannot-modify-admin-level-settings-ui-api) | RM cannot modify Admin-level settings (UI + API) | Employee Details | security | critical |
| [TC-EMPDET-212](#tc-empdet-212-employee-rating-subject-cannot-edit-own-allocation-notes-ui-api) | Employee (rating subject) cannot edit own allocation/notes (UI + API) | Employee Details | security | high |
| [TC-EMPDET-213](#tc-empdet-213-employee-cannot-access-other-employees-records-idor) | Employee cannot access other employees' records (IDOR) | Employee Details | security | critical |
| [TC-EMPDET-214](#tc-empdet-214-rm-attempting-to-view-an-out-of-scope-employee-s-drawer-hover-summary-is-blocked-at-both-ui-and-api) | RM attempting to view an out-of-scope employee's drawer/hover summary is blocked at both UI and API | Employee Details | security | critical |
| [TC-EMPDET-215](#tc-empdet-215-xss-payload-in-note-allocation-free-text-fields-is-sanitized-everywhere-it-is-displayed) | XSS payload in note/allocation free-text fields is sanitized everywhere it is displayed | Employee Details | security | high |
| [TC-EMPDET-216](#tc-empdet-216-a-user-without-rm-admin-permission-attempting-archive-delete-deallocate-directly-is-rejected-at-ui-and-api) | A user without RM/Admin permission attempting Archive/Delete/Deallocate directly is rejected at UI and API | Employee Details | security | high |
| [TC-EMPDET-217](#tc-empdet-217-rm-performing-archive-delete-deallocate-edit-is-recorded-in-an-audit-trail) | RM performing Archive/Delete/Deallocate/Edit is recorded in an audit trail | Employee Details | security | medium |
| [TC-EMPDET-218](#tc-empdet-218-each-role-s-permitted-and-forbidden-actions-are-enforced-at-both-ui-and-api-level) | Each role's permitted and forbidden actions are enforced at both UI and API level | Employee Details | security | critical |
| [TC-EMPDET-219](#tc-empdet-219-role-boundary-for-delete-archive-deallocate-beyond-rm-e-g-admin-clarification-needed) | Role boundary for Delete/Archive/Deallocate beyond RM (e.g. Admin) — clarification needed | Employee Details | security | medium |
| [TC-EMPDET-220](#tc-empdet-220-employee-details-base-listing-search-filter-pagination-regression-doubles-as-a-base-module-regression-cross-module-chrome) | Employee Details base listing/search/filter/pagination regression doubles as a base-module regression (cross-module chrome) | Employee Details | integration | high |
| [TC-EMPDET-221](#tc-empdet-221-skills-detail-view-pr-reviewer-popup-data-stays-consistent-with-the-skills-module-empskl) | Skills detail view / PR-Reviewer popup data stays consistent with the Skills module (EMPSKL) | Employee Details | integration | high |
| [TC-EMPDET-222](#tc-empdet-222-hover-allocation-summary-add-allocation-deallocation-stay-consistent-with-the-projects-allocation-module) | Hover allocation summary / Add-allocation / Deallocation stay consistent with the Projects/Allocation module | Employee Details | integration | high |
| [TC-EMPDET-223](#tc-empdet-223-allocation-logged-hours-and-billability-split-values-match-exactly-across-hover-popup-expanded-sheet-and-api) | Allocation %, Logged Hours %, and Billability-split values match exactly across hover popup, expanded sheet, and API | Employee Details | integration | high |
| [TC-EMPDET-224](#tc-empdet-224-known-bug-regression-null-reporting-manager-cell-renders-gracefully) | Known bug regression — Null Reporting Manager cell renders gracefully | Employee Details | regression | high |
| [TC-EMPDET-225](#tc-empdet-225-known-bug-regression-null-skills-cell-renders-without-a-broken-n-chip) | Known bug regression — Null Skills cell renders without a broken +N chip | Employee Details | regression | high |
| [TC-EMPDET-226](#tc-empdet-226-known-bug-regression-null-department-projects-graceful-fallback-display) | Known bug regression — Null Department/Projects graceful fallback display | Employee Details | regression | high |
| [TC-EMPDET-227](#tc-empdet-227-known-bug-regression-pagination-boundary-archive-add-employee-on-last-page-produces-no-duplicates-or-missing-records) | Known bug regression — Pagination boundary: archive/add employee on last page produces no duplicates or missing records | Employee Details | regression | high |
| [TC-EMPDET-228](#tc-empdet-228-known-bug-regression-double-click-save-in-edit-drawer-causes-no-duplicate-update-corruption) | Known bug regression — Double-click Save in Edit Drawer causes no duplicate update/corruption | Employee Details | regression | high |
| [TC-EMPDET-229](#tc-empdet-229-known-bug-regression-zero-search-results-show-empty-state-and-a-0-count-badge) | Known bug regression — Zero search results show empty-state and a 0 count badge | Employee Details | regression | high |
| [TC-EMPDET-230](#tc-empdet-230-known-bug-regression-xss-in-search-input-is-escaped-no-script-execution) | Known bug regression — XSS in search input is escaped, no script execution | Employee Details | regression | high |
| [TC-EMPDET-231](#tc-empdet-231-known-bug-regression-tab-switch-with-active-search-does-not-persist-search-to-the-other-tab) | Known bug regression — Tab switch with active search does not persist search to the other tab | Employee Details | regression | high |
| [TC-EMPDET-232](#tc-empdet-232-regression-base-table-tabs-columns-chrome-still-functions-correctly-after-rm-view-changes) | Regression — base table/tabs/columns chrome still functions correctly after RM-view changes | Employee Details | regression | high |
| [TC-EMPDET-233](#tc-empdet-233-regression-skills-derived-data-detail-drawer-pr-reviewer-popup-stays-consistent-after-skills-module-changes) | Regression — Skills-derived data (detail drawer / PR-Reviewer popup) stays consistent after Skills-module changes | Employee Details | regression | medium |
| [TC-EMPDET-234](#tc-empdet-234-regression-projects-allocation-data-stays-consistent-after-projects-module-side-changes) | Regression — Projects/Allocation data stays consistent after Projects-module-side changes | Employee Details | regression | high |
| [TC-EMPDET-235](#tc-empdet-235-kb-direct-single-search-result-shows-1-of-1-with-pagination-controls-disabled) | KB-direct — Single search result shows '1 of 1' with pagination controls disabled | Employee Details | regression | high |
| [TC-EMPDET-236](#tc-empdet-236-kb-direct-large-dataset-500-records-meets-all-performance-targets-with-accurate-pagination) | KB-direct — Large dataset (500+ records) meets all performance targets with accurate pagination | Employee Details | regression | high |
| [TC-EMPDET-237](#tc-empdet-237-kb-direct-api-500-error-shows-a-user-friendly-message-no-js-crash) | KB-direct — API 500 error shows a user-friendly message, no JS crash | Employee Details | regression | high |
| [TC-EMPDET-238](#tc-empdet-238-kb-direct-special-characters-in-search-hyphens-apostrophes-accents-unicode-match-correctly) | KB-direct — Special characters in search (hyphens, apostrophes, accents, Unicode) match correctly | Employee Details | regression | medium |
| [TC-EMPDET-239](#tc-empdet-239-kb-direct-advanced-filter-rejects-available-since-end-date-before-start-date) | KB-direct — Advanced filter rejects Available Since end date before start date | Employee Details | regression | medium |
| [TC-EMPDET-240](#tc-empdet-240-kb-direct-advanced-filter-rejects-out-of-range-availability-experience-values) | KB-direct — Advanced filter rejects out-of-range Availability %/Experience values | Employee Details | regression | medium |
| [TC-EMPDET-241](#tc-empdet-241-kb-direct-feature-flag-disabled-mid-session-is-handled-gracefully-no-crash) | KB-direct — Feature flag disabled mid-session is handled gracefully, no crash | Employee Details | regression | high |
| [TC-EMPDET-242](#tc-empdet-242-kb-direct-search-filter-sort-and-pagination-state-are-independent-per-tab) | KB-direct — Search, filter, sort, and pagination state are independent per tab | Employee Details | regression | high |
| [TC-EMPDET-243](#tc-empdet-243-kb-direct-all-grid-values-exactly-match-the-corresponding-api-response-for-every-field) | KB-direct — All grid values exactly match the corresponding API response for every field | Employee Details | regression | high |
| [TC-EMPDET-244](#tc-empdet-244-kb-direct-reset-on-basic-filters-clears-all-criteria-and-restores-the-unfiltered-list-for-the-current-tab-only) | KB-direct — Reset on Basic Filters clears all criteria and restores the unfiltered list for the current tab only | Employee Details | regression | medium |
| [TC-EMPDET-245](#tc-empdet-245-kb-direct-advanced-filters-save-applies-all-criteria-cancel-reverts-to-the-last-applied-state) | KB-direct — Advanced Filters: Save applies all criteria; Cancel reverts to the last-applied state | Employee Details | regression | medium |
| [TC-EMPDET-246](#tc-empdet-246-data-integrity-ui-displayed-allocation-employee-values-match-the-api-response-after-save-incl-employee-count-parity) | Data integrity — UI-displayed allocation/employee values match the API response after save (incl. employee count parity) | Employee Details | regression | high |
| [TC-EMPDET-247](#tc-empdet-247-data-integrity-newly-created-allocation-note-is-present-after-a-full-page-refresh) | Data integrity — newly created allocation/note is present after a full page refresh | Employee Details | regression | high |
| [TC-EMPDET-248](#tc-empdet-248-data-integrity-updated-employee-field-values-are-correct-after-a-full-page-refresh) | Data integrity — updated employee field values are correct after a full page refresh | Employee Details | regression | high |
| [TC-EMPDET-249](#tc-empdet-249-data-integrity-archived-employee-is-absent-from-the-active-list-immediately-no-refresh-required) | Data integrity — archived employee is absent from the active list immediately, no refresh required | Employee Details | regression | high |
| [TC-EMPDET-250](#tc-empdet-250-data-integrity-double-clicking-save-on-add-project-allocation-add-note-edit-employee-produces-exactly-one-record-update) | Data integrity — double-clicking Save on Add-project-allocation/Add-note/Edit-employee produces exactly one record/update | Employee Details | regression | high |
| [TC-EMPDET-251](#tc-empdet-251-data-integrity-assigned-allocation-count-increments-by-1-and-deallocated-count-decrements-by-1-in-both-ui-and-api) | Data integrity — assigned allocation count increments by 1 and deallocated count decrements by 1, in both UI and API | Employee Details | regression | high |
| [TC-EMPDET-252](#tc-empdet-252-ui-regression-hover-action-icons-appear-for-every-row-including-first-and-last-row-of-a-page) | UI regression — hover action icons appear for every row, including first and last row of a page | Employee Details | regression | medium |
| [TC-EMPDET-253](#tc-empdet-253-ui-regression-hovering-icon-only-action-buttons-shows-a-tooltip-with-a-readable-label) | UI regression — hovering icon-only action buttons shows a tooltip with a readable label | Employee Details | regression | medium |
| [TC-EMPDET-254](#tc-empdet-254-ui-regression-success-toast-appears-after-create-update-delete-archive-with-entity-name-or-confirmation-message) | UI regression — success toast appears after Create/Update/Delete/Archive with entity name or confirmation message | Employee Details | regression | medium |
| [TC-EMPDET-255](#tc-empdet-255-ui-regression-error-toast-on-server-error-does-not-expose-a-raw-stack-trace) | UI regression — error toast on server error does not expose a raw stack trace | Employee Details | regression | medium |
| [TC-EMPDET-256](#tc-empdet-256-ui-regression-loading-indicator-is-visible-during-data-fetch-and-disappears-once-loaded) | UI regression — loading indicator is visible during data fetch and disappears once loaded | Employee Details | regression | medium |
| [TC-EMPDET-257](#tc-empdet-257-ui-regression-list-table-reflects-create-update-delete-archive-without-a-manual-page-reload) | UI regression — list/table reflects Create/Update/Delete/Archive without a manual page reload | Employee Details | regression | medium |
| [TC-EMPDET-258](#tc-empdet-258-ui-regression-sorting-filtering-update-the-record-count-badge-consistently-clearing-restores-the-full-list) | UI regression — sorting/filtering update the record-count badge consistently; clearing restores the full list | Employee Details | regression | medium |
| [TC-EMPDET-259](#tc-empdet-259-module-specific-regression-archived-record-never-appears-in-active-dropdowns-search-results-or-list-filters) | Module-specific regression — archived record never appears in active dropdowns, search results, or list filters | Employee Details | regression | high |

---

## Employee Details

129 test cases.

### A11y (3)

#### TC-EMPDET-201 — Keyboard navigation reaches all interactive controls in the employee-details and project-details drawers

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | testScenario: Keyboard/accessibility pass over drawers and popups |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open employee-details drawer
2. Tab through all interactive controls
3. Repeat for project-details drawer

**Expected**

All interactive controls (close icon, collapsible sections, action buttons) are reachable via keyboard in a logical order

**Automation Hint**

PARTIAL — several controls carry only placeholder text; accessible-name assertions may need adjustment once real copy is confirmed.

#### TC-EMPDET-202 — Close icons and collapsible sections carry accessible names

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

1. Open the employee-details drawer
2. Inspect accessible name of the close icon and each collapsible section header via a11y tree

**Expected**

Close icon and each collapsible section header have a non-empty accessible name

**Automation Hint**

Use @axe-core/playwright where installed.

#### TC-EMPDET-203 — Hover-revealed allocation summary content is announced/reachable via keyboard-equivalent focus

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | nfrRequirements.accessibility |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Focus an employee row via keyboard (Tab)
2. Trigger the equivalent of the hover allocation summary via keyboard/focus

**Expected**

Allocation summary content is reachable/announced without requiring mouse hover

**Automation Hint**

PARTIAL — keyboard-equivalent trigger for hover-only content is not confirmed in source.

### Boundary (22)

#### TC-EMPDET-179 — Skills detail header count (46) reconciles with rendered badges via a pagination/show-more mechanism

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Skills detail view header count vs rendered badges |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); target employee has 46 skills

**Steps**

1. Open Skills detail view for an employee with 46 skills
2. Count rendered badges, expanding any 'show more' control if present

**Expected**

Header count (46) equals the total number of badges once any confirmed pagination/show-more is fully expanded — not a silent truncation

**Test Data**

- `headerCount`: 46
- `capturedBadges`: 33

#### TC-EMPDET-180 — Tentative projects list shows the exact empty-state copy before any project is added

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase + validationRule: Tentative projects empty state |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add project allocation with no tentative projects yet added

**Expected**

Text 'No tentative projects selected. Use the dropdown above to add projects.' is shown verbatim

#### TC-EMPDET-181 — Column setting dropdown opens without crashing despite unconfirmed toggle labels

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Column setting dropdown labels unrecoverable |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click Column setting
2. Observe no crash/console error

**Expected**

Dropdown opens cleanly with no JS error, regardless of exact item labels

#### TC-EMPDET-182 — Hidden Table Row variant on the Column-setting screen renders a correct empty/loading state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hidden Table Row variant (Column setting) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger a loading/empty condition on the Column-setting-adjacent table

**Expected**

A proper empty/error/loading row state renders — no raw broken/hidden row leaks into the UI

#### TC-EMPDET-183 — Hidden Table Row variant on the Add-project screen renders a correct empty/loading state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hidden Table Row variant (Add-project) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger a loading/empty condition in the Add-project allocation drawer's list area

**Expected**

A proper empty/error/loading row state renders

#### TC-EMPDET-184 — Hidden Table Row variant on the Skills screen renders a correct empty/loading state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hidden Table Row variant (Skills) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Skills detail view for an employee with zero skills

**Expected**

A proper empty state renders, not a raw broken/hidden row

#### TC-EMPDET-185 — Hidden Table Row variant on the Past-employees screen renders a correct empty/loading state

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hidden Table Row variant (Past-employees) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Filter/search Past employees to zero matches

**Expected**

A proper empty state renders on the Past-employees table

#### TC-EMPDET-186 — Deallocation confirmation modal is reachable/dismissible without breaking the 3-layer drawer stack

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Deallocation stacked 3 dialog layers deep |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open project drawer → log form dialog → trigger Deallocation confirmation modal
2. Dismiss the modal without confirming

**Expected**

Modal is reachable and dismissible; the underlying drawer stack remains open and intact, not closed/broken

#### TC-EMPDET-187 — Hover row action menu/allocation summary is consistent for the last visible row

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hover consistency — last visible row |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Scroll to the last visible row on the current page
2. Hover it

**Expected**

Row action menu and allocation summary render identically to any other row (no viewport clipping)

#### TC-EMPDET-188 — Hover row action menu/allocation summary is consistent for the first row of a newly loaded page

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hover consistency — first row after pagination |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); list has 2+ pages

**Steps**

1. Navigate to page 2
2. Hover the first row

**Expected**

Row action menu and allocation summary render identically post-pagination

#### TC-EMPDET-189 — Hover row action menu/allocation summary is consistent for a newly added row

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: hover consistency — newly added row |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add/restore an employee so a new row appears
2. Hover the new row

**Expected**

Row action menu and allocation summary render identically for the newly added row

#### TC-EMPDET-190 — Edit note dialog does not silently persist partial edits when Cancel is used

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Add note / Edit note pre-fill and Cancel semantics |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); employee has an existing note

**Steps**

1. Open Edit note
2. Modify the text
3. Click Cancel
4. Reopen Edit note

**Expected**

Reopened note shows the original pre-edit text — Cancel did not persist the partial edit

#### TC-EMPDET-191 — Billability breakdown reconciles between the hover popup (2-bucket) and the expanded sheet (3-bucket)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Billability breakdown inconsistency 2-bucket vs 3-bucket |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover a row and note the 2-bucket split
2. Open 'View project details' for the same employee/project and note the 3-bucket split
3. Compare Non-billable values and the Billable+Not-allotted sum against the hover popup's Billable value

**Expected**

Non-billable matches exactly; Billable(3-bucket) + Not allotted equals Billable(2-bucket) — the two surfaces reconcile to the same underlying data

**Test Data**

- `hoverSplit`: Non-billable 70% / Billable 30%
- `sheetSplit`: Non-billable 70% / Billable 20% / Not allotted 10%

#### TC-EMPDET-192 — The two date pickers in the Edit-employee drawer enforce a logical end-not-before-start relationship

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: two date pickers cross-field validation |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Action - edit employee
2. Set the second date picker to a date before the first

**Expected**

MANUAL — exact field semantics (which date is start/end) unconfirmed; verify against live app, then assert a validation error on illogical ordering

**Automation Hint**

MANUAL — requirement unclear: semantics of the two date pickers not confirmed.

#### TC-EMPDET-193 — Edit-employee drawer's 3 section titles and 15 field labels — clarification needed before locking selectors

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Action - edit employee field/section labels |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with design/dev the 3 section titles and 15 field labels for Action - edit employee

**Expected**

MANUAL — cannot finalize field-level assertions until real copy is confirmed

**Automation Hint**

MANUAL — requirement unclear: Action - edit employee field/section labels.

#### TC-EMPDET-194 — Semantics/ordering requirement of the two date pickers — clarification needed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Semantics of the two date pickers |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with design/dev what the two Calendar instances represent in both the Edit Employee and Employee Ratings drawers

**Expected**

MANUAL — cannot lock final cross-field validation assertions until confirmed

**Automation Hint**

MANUAL — requirement unclear: semantics of the two date pickers.

#### TC-EMPDET-195 — Hidden delete/trash icon trigger condition within the Edit-employee form — clarification needed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Hidden delete/trash icon condition |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with design/dev under what condition the hidden delete/trash icon appears within the Edit Employee form

**Expected**

MANUAL — trigger condition (e.g. hover over a removable sub-item) is unconfirmed

**Automation Hint**

MANUAL — requirement unclear: hidden delete/trash icon condition.

#### TC-EMPDET-196 — Metadata-only export limitation — confirm real copy on the 21 structural-only screens before locking selectors

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Metadata-only export limitation |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requires a follow-up live-app/screenshot pass

**Steps**

1. Re-run a get_design_context/screenshot pass (quota permitting) or a live-app walkthrough of the 21 placeholder-only screens

**Expected**

MANUAL — until real copy/CSS states are confirmed, treat all placeholder text in this brief as non-authoritative

**Automation Hint**

MANUAL — requirement unclear: entire brief built from structural-only export.

#### TC-EMPDET-197 — Total logged hours equals the sum of per-project logged hours for the employee

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Total logged hours aggregation |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an employee row allocated to multiple projects
2. Sum the per-project Logged Hours values
3. Compare against the top-level 'Total logged hours' figure

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Total logged hours should equal the sum across all of the employee's projects

**Test Data**

- `totalLoggedHours`: 398 Hours

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-198 — Exact confirmation-dialog copy for Delete-employee and Deallocation — clarification needed

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | unclear: Exact confirmation dialog copy |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with design/dev the exact confirmation dialog message and button text for Delete Employee and for Deallocation

**Expected**

MANUAL — placeholder-only screens; assume standard 'Are you sure?' copy pending confirmation

**Automation Hint**

MANUAL — requirement unclear: exact confirmation dialog copy.

#### TC-EMPDET-199 — Double-clicking Save on Add-project-allocation/Add-note/tentative-projects-confirm does not create duplicates

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | BR: Submitting Add project allocation/Add note/tentative projects twice must not create duplicate records |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add project allocation (or Add note)
2. Fill valid data
3. Double-click Save/Submit rapidly

**Expected**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Exactly one record is created, not two

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-200 — A drawer/hover surface with zero skills does not render a broken '+N' overflow chip at the low boundary

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | KB-direct: Null Skills — Skills cell renders without +N chip (drawer variant) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); employee has zero skills

**Steps**

1. Open the Skills detail drawer for an employee with zero skills

**Expected**

No '+N' overflow chip renders and no crash occurs; a clean empty state is shown

### Functional (32)

#### TC-EMPDET-134 — Employee Details page renders title, subtitle, and Last Updated timestamp

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: page header verbatim copy |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee → Employee Details

**Expected**

Page title 'Employee Details', subtitle 'Manage employee data, skills, and department assignments.', and a 'Last Updated:' timestamp are all visible

#### TC-EMPDET-135 — Tabs switch between the active employee view and the Past employees view

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: employee list organized via Tabs |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Observe the default (active) tab is selected
2. Click the Past-employees tab
3. Click back to the active tab

**Expected**

Tab switch changes the data source only; layout/columns remain identical between both tabs

**Automation Hint**

Exact tab label copy not confirmed — assert by tab position/role, not by invented label text.

#### TC-EMPDET-136 — Hovering a row reveals the row-level action menu

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: hover reveals row action menu |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover any employee row

**Expected**

A row action menu appears on hover

#### TC-EMPDET-137 — Hover popup shows Allocation % and Logged Hours % with variance phrase

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: hover allocation summary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an employee row with an active allocation
2. Read the Allocation % and Logged Hours % figures

**Expected**

Allocation % (e.g. 50%) and Logged Hours % with a variance phrase (e.g. '30% more') are shown

**Test Data**

- `allocationPct`: 50
- `loggedHoursPct`: 80
- `variancePhrase`: 30% more

#### TC-EMPDET-138 — Hover popup shows Allocation Since, Duration, Total logged hours, and Shadow Developer of

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: hover allocation summary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an employee row with an active allocation
2. Read Allocation Since, Duration, Total logged hours, and Shadow Developer of fields

**Expected**

All four fields render with realistic values (e.g. 'Allocation Since: 1.5 months ago', 'Duration: Ending in 13 days', 'Total logged hours: 398 Hours')

**Test Data**

- `allocationSince`: 1.5 months ago
- `duration`: Ending in 13 days
- `totalLoggedHours`: 398 Hours

#### TC-EMPDET-139 — Hover popup shows the per-project table (Projects / Allocation / Logged Hours %)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: hover allocation summary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an employee row allocated to 2+ projects
2. Read the per-project table

**Expected**

Table lists each project with its own Allocation and Logged Hours % columns

**Test Data**

- `projects`: ShowSYNC | Equestrian Platform, Privilee

#### TC-EMPDET-140 — Hover popup shows the 2-bucket billability split (Non-billable/Billable)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: hover allocation summary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an employee row
2. Read the billability split section

**Expected**

Non-billable 70% / Billable 30% (or equivalent 2-bucket split) is shown

**Test Data**

- `nonBillablePct`: 70
- `billablePct`: 30

#### TC-EMPDET-141 — View project details side sheet shows the expanded 3-bucket billability breakdown

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: View project details side sheet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. From the row hover menu, click 'View project details'
2. Read the billability breakdown

**Expected**

Sheet opens showing Non-billable 70% / Billable 20% / Not allotted 10% (3 buckets, including 'Not allotted')

**Test Data**

- `nonBillablePct`: 70
- `billablePct`: 20
- `notAllottedPct`: 10

#### TC-EMPDET-142 — View project details side sheet shows the Projects/Allocation/Logged Hours % table

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: View project details side sheet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open 'View project details' from the row hover menu
2. Read the Projects/Allocation/Logged Hours % table

**Expected**

Table renders with the same 3 columns as documented

#### TC-EMPDET-143 — Skill column filter opens the 'PR Reviewer' popup with the 4-point frequency scale

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PR Reviewer popup |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger the Skill column filter/action
2. Observe the popup

**Expected**

Popup titled 'PR Reviewer' shows a Projects/Frequency table using exactly the 4-point scale: Not at all / Very Rarely / Occasionally / Frequently

**Test Data**

- `scale`: Not at all, Very Rarely, Occasionally, Frequently

#### TC-EMPDET-144 — Column setting dropdown opens adjacent to the table

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Column setting dropdown exists |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click the Column setting control adjacent to the table

**Expected**

Dropdown opens without error

**Automation Hint**

Exact menu item labels are unconfirmed — assert only that the dropdown opens, not specific item text.

#### TC-EMPDET-145 — Add project allocation drawer opens with 7 inputs + notes textarea and Cancel/Submit

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add project allocation drawer |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the row hover/action menu
2. Click 'Add project'

**Expected**

'Add project allocation' drawer opens with 7 input fields, a notes textarea, and a Cancel/Submit action pair

**Automation Hint**

PARTIAL — field labels unconfirmed (structural-only screen); assert by field count/order.

#### TC-EMPDET-146 — Submitting Add project allocation persists a new row and grid/hover summary updates without reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | testScenario: Add project allocation via drawer form |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open 'Add project allocation'
2. Fill required fields with valid data
3. Click Submit

**Expected**

New allocation row is persisted; the grid and hover allocation summary reflect it immediately, no page reload

**Test Data**

- `project`: Privilee

**Automation Hint**

PARTIAL — exact required-ness of the 7 fields unconfirmed.

#### TC-EMPDET-147 — Adding a project to the tentative shortlist renders it as a removable mini-table row

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | testScenario: Tentative projects shortlist add/remove flow |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open 'Add project allocation'
2. Use the dropdown to add 'SimShow' to the tentative-projects shortlist

**Expected**

The added project renders as a removable row with its own action button in a mini-table

**Test Data**

- `project`: SimShow

**Automation Hint**

Per-row action button semantics are inferred, not confirmed.

#### TC-EMPDET-148 — Removing a tentative-project row restores the empty state

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | testScenario: Tentative projects shortlist add/remove flow |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); a tentative project row exists

**Steps**

1. Click the remove action on a tentative-project row

**Expected**

Row is removed; empty-state text "No tentative projects selected. Use the dropdown above to add projects." returns

#### TC-EMPDET-149 — Clicking an active-employee row opens the employee-details side drawer with identity header

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Side drawer - employee details |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click an active employee row

**Expected**

Side drawer opens showing the employee's name, avatar, and badge

**Test Data**

- `employee`: Keyur Patel

#### TC-EMPDET-150 — Employee-details drawer's two sections independently expand/collapse

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Side drawer - employee details |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); employee drawer open

**Steps**

1. Toggle the first collapsible section
2. Toggle the second collapsible section independently

**Expected**

Each section expands/collapses independently of the other

#### TC-EMPDET-151 — Project-details drawer distinguishes the employee's own role from their reporting manager via separate icons

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Side drawer - project details |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Drill into 'ShowSYNC | Equestrian Platform' from a project row
2. Observe the User and UserCog icon rows

**Expected**

Drawer shows a User-icon row for the employee's own role and a separate UserCog-icon row for the reporting manager on that project

**Test Data**

- `project`: ShowSYNC | Equestrian Platform

#### TC-EMPDET-152 — Skills detail drawer shows 'All Technologies (46)' header with the badge list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Skills detail view drawer |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); target employee has 46 skills

**Steps**

1. Open the Skills detail view for the employee

**Expected**

Header text reads 'All Technologies (46)' verbatim; a flat badge/tag list of technologies renders below it

**Test Data**

- `skillCount`: 46

#### TC-EMPDET-153 — Last-15-days logs table variant shows paginated log rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: last 15 days logs view |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); project-details drawer open

**Steps**

1. From the project-details drawer, open the last-15-days logs view (table variant)

**Expected**

A read-only table of log rows renders with its own pagination controls

**Automation Hint**

Trigger condition distinguishing view vs add/edit variant is inferred, not confirmed.

#### TC-EMPDET-154 — Last-15-days logs add/edit form variant shows 6 inputs + notes textarea

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: last 15 days logs add/edit form |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); project-details drawer open

**Steps**

1. From the same trigger point, open the add/edit log form variant

**Expected**

Form shows 6 inputs + a notes textarea + submit/cancel controls, reachable from the same trigger as the table variant

**Automation Hint**

PARTIAL — field labels unconfirmed.

#### TC-EMPDET-155 — Add note dialog creates a new note

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Add note dialog |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); employee has no existing note

**Steps**

1. Open 'Add note' for an employee with no existing note
2. Fill the input + textarea
3. Submit

**Expected**

A new note is created and visible afterward

**Test Data**

- `noteText`: Follow up on Q3 allocation review

#### TC-EMPDET-156 — Edit note dialog opens pre-filled with the existing note's values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Edit note dialog |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); employee has an existing note

**Steps**

1. Open 'Edit note' for an employee with an existing note

**Expected**

Same form component opens pre-filled with the existing note's values

#### TC-EMPDET-157 — Action - edit employee drawer opens with 15 inputs across 3 sections + 2 date pickers

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | AC: Action - edit employee drawer |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the row action menu
2. Click Edit

**Expected**

Large edit drawer opens with 15 input fields across at least 3 titled sections and 2 date pickers, plus a conditionally-hidden delete/trash icon

**Automation Hint**

PARTIAL — section/field labels unconfirmed (structural-only screen).

#### TC-EMPDET-158 — Saving the edit-employee drawer persists changes and updates the grid immediately without reload

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | BR: After Edit Drawer save, grid must reflect changes immediately without page reload |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Action - edit employee
2. Modify a field in each of the 3 sections
3. Click Save

**Expected**

Grid reflects the updated values immediately, no page reload

#### TC-EMPDET-159 — Cancel on Edit Drawer discards all changes; grid shows original pre-edit values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | BR: Cancel on Edit Drawer must discard all changes; grid shows original pre-edit values |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Action - edit employee
2. Modify a field
3. Click Cancel

**Expected**

Drawer closes; grid still shows the original pre-edit values, no partial save occurred

#### TC-EMPDET-160 — Saving the edit-employee drawer also refreshes any open hover popup / expanded project-details sheet for the same employee

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | BR: Saving edit employee drawer must cause grid AND every open hover/side-drawer allocation view to reflect updated values immediately |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); hover popup or project-details sheet open for the target employee

**Steps**

1. With the hover popup or project-details sheet still open for an employee, open Action - edit employee in a second interaction
2. Save a change
3. Re-check the still-open hover popup/sheet

**Expected**

The hover popup / expanded project-details sheet reflects the updated values immediately, without a page reload

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Multi-surface simultaneous-open state may not be reproducible in a single browser context.

#### TC-EMPDET-161 — Past employees retain project-details drawer drill-down parity with active employees

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Past employees retain project-detail drill-down parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); Past employees tab has a record with historical projects

**Steps**

1. Switch to Past employees
2. Click a past-employee row's historical project

**Expected**

The same project-details side drawer opens successfully as it would for an active employee

#### TC-EMPDET-162 — Clicking a per-project row inside the hover popup opens the project-details drawer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: hover allocation summary + Side drawer - project details |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an employee row
2. Click a project row inside the per-project table

**Expected**

Project-details side drawer opens for that project

#### TC-EMPDET-163 — 'Last Updated:' timestamp reflects the actual last-updated time returned by the API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | KB-direct: Last Updated must come from API only; any frontend computation is a defect |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Load Employee Details
2. Compare the displayed 'Last Updated:' value against the API response's timestamp field

**Expected**

Displayed timestamp equals the API value exactly — no client-side computation/formatting drift

#### TC-EMPDET-164 — Column setting dropdown toggle changes visible columns

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: Column setting dropdown contents |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Column setting dropdown
2. Toggle a column's visibility checkbox

**Expected**

MANUAL — exact menu item labels/behavior unconfirmed; verify against the live app before automating

**Automation Hint**

MANUAL — requirement unclear: Column setting dropdown contents (exact toggle labels not recoverable from source).

#### TC-EMPDET-165 — Add-project-allocation form field requiredness (Manual clarification)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: Add-project-allocation form field labels |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed before automation

**Steps**

1. Confirm with product/design the exact 7 field labels and which are mandatory in the Add Project Allocation drawer

**Expected**

MANUAL — cannot script required-field assertions until field labels/required-ness are confirmed

**Automation Hint**

MANUAL — requirement unclear: 7 field labels + required-ness in Add Project Allocation drawer not captured (placeholder-only screen).

### Integration (4)

#### TC-EMPDET-220 — Employee Details base listing/search/filter/pagination regression doubles as a base-module regression (cross-module chrome)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[0]: Employee Details (base listing/search/filter/pagination) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise base list/search/filter/pagination on the RM view
2. Verify the same chrome/behavior on any other entry point into the base Employee Details module

**Expected**

Table chrome, search, filter, and pagination behave identically wherever the shared base component is used — a regression in one doubles as a regression in the other

**Automation Hint**

Multi-module flow — verify via UI navigation across both entry points.

#### TC-EMPDET-221 — Skills detail view / PR-Reviewer popup data stays consistent with the Skills module (EMPSKL)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[1]: Skills |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Update a skill/PR-review frequency value in the Skills module (EMPSKL)
2. Return to Employee Details and re-open the Skills detail drawer / PR Reviewer popup for the same employee

**Expected**

The updated skill/PR-review data is reflected consistently in the Employee Details surfaces

**Automation Hint**

PARTIAL — requires cross-module fixture/API access to EMPSKL; verify manually first.

#### TC-EMPDET-222 — Hover allocation summary / Add-allocation / Deallocation stay consistent with the Projects/Allocation module

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[2]: Projects / Allocation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Add a project allocation via the Employee Details drawer
2. Navigate to the Projects/Allocation module and verify the same allocation appears
3. Deallocate from Employee Details and re-verify in Projects/Allocation

**Expected**

Allocation and deallocation performed in Employee Details are reflected correctly in the Projects/Allocation module

**Automation Hint**

Multi-module flow — requires separate navigation/API checks against the Projects module.

#### TC-EMPDET-223 — Allocation %, Logged Hours %, and Billability-split values match exactly across hover popup, expanded sheet, and API

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | BR: Allocation %/Logged Hours %/Billability-split must match across hover popup, sheet, and API (api-parity) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read Allocation %, Logged Hours %, and billability-split values from the hover popup
2. Read the same values from the expanded 'View project details' sheet
3. Read the equivalent values from the underlying API response

**Expected**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. All three surfaces show exactly matching values

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Negative (13)

#### TC-EMPDET-166 — Cancel the Deallocation confirmation modal leaves the allocation unchanged

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @negative |
| **Requirement Ref** | negativeScenario: Cancel the Deallocation confirmation modal |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger deallocation from the project drawer
2. Click Cancel on the confirmation modal

**Expected**

Project allocation remains unchanged; no deallocation occurs

#### TC-EMPDET-167 — Cancel/close the Delete-employee confirmation modal leaves the employee list unchanged

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @negative |
| **Requirement Ref** | negativeScenario: Cancel/close the Delete-employee confirmation modal |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger Delete on an employee
2. Click Cancel on the confirmation modal

**Expected**

Employee remains in the active list unchanged; no deletion/archival occurs

#### TC-EMPDET-168 — Closing Add-project-allocation/Add-note drawer mid-entry via close icon discards the partial entry

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | negativeScenario: Close Add-project-allocation/Add-note drawer mid-entry |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open 'Add project allocation' (or 'Add note')
2. Partially fill fields without submitting
3. Click the close icon
4. Reopen the drawer

**Expected**

No partial/incomplete record is created; reopening shows a fresh/empty form

#### TC-EMPDET-169 — Archive employee details drawer shows no edit affordance for Past employees

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | testScenario: Archive employee details drawer is read-only for Past employees |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); Past employees tab has records

**Steps**

1. Open a Past-employee row's drawer

**Expected**

No edit/save controls are present; the close icon closes the drawer without prompting for unsaved changes

#### TC-EMPDET-170 — Submitting Add-project-allocation or Add-note with a required field left blank shows an inline error

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation — required field |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add project allocation (or Add note)
2. Leave a required field blank
3. Attempt Submit

**Expected**

Correct inline error appears; record is not created

**Automation Hint**

PARTIAL — exact required-ness of individual fields is unconfirmed.

#### TC-EMPDET-171 — Whitespace-only text in the Add-note textarea is treated as empty and rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation — empty/whitespace-only |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add note
2. Enter only spaces in the textarea
3. Attempt Submit

**Expected**

Submission is rejected as if the field were empty

**Test Data**

#### TC-EMPDET-172 — Text one character beyond the documented max length in the note textarea is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation — exceeds max length |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add note
2. Enter text one character beyond the max length
3. Attempt Submit

**Expected**

MANUAL — max length is not documented in source; verify the live app's limit before automating this boundary

**Automation Hint**

MANUAL — requirement unclear: note textarea max length not specified.

#### TC-EMPDET-173 — Reactivating an archived employee outside the defined Restore flow is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | Regression: validation — invalid status transition |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); an archived employee exists

**Steps**

1. From Past employees, attempt any direct status-change action that is not the documented Restore step

**Expected**

MANUAL — no Restore flow/UI is confirmed in source; verify against the live app before automating

**Automation Hint**

MANUAL — requirement unclear: Restore flow for archived employees not documented.

#### TC-EMPDET-174 — Refreshing the browser mid-form on Add-project-allocation/Edit-employee does not submit partial data

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — browser refresh mid-flow |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add project allocation (or Edit employee)
2. Partially fill the form
3. Refresh the browser (F5)

**Expected**

No partial record is created and no existing record is corrupted

#### TC-EMPDET-175 — Clicking Submit/Save 3x rapidly on Add-note results in exactly one operation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — multiple rapid clicks |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Add note
2. Fill valid data
3. Click Submit 3× in rapid succession

**Expected**

Exactly one note is created, not multiple

#### TC-EMPDET-176 — HTTP 401 session expiry returns the user to the login page without data loss

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — HTTP 401 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate session expiry (401) while on Employee Details
2. Observe redirect behavior

**Expected**

User is returned to the login page without unsaved in-progress work silently corrupted

**Automation Hint**

MANUAL/PARTIAL — requires backend-level session invalidation hook to simulate reliably.

#### TC-EMPDET-177 — Navigating to a non-existent employee record shows a not-found page, not a blank screen

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — HTTP 404 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate directly to an employee-detail URL/record ID that does not exist

**Expected**

A user-friendly not-found state is shown, not a blank screen

**Test Data**

- `invalidEmployeeId`: nonexistent-999999

#### TC-EMPDET-178 — HTTP 503 service-unavailable response shows a maintenance/retry message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Regression: reliability — HTTP 503 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate a 503 response from the Employee Details API (mock/intercept)

**Expected**

A maintenance or retry message is shown, not a raw error or blank screen

**Automation Hint**

PARTIAL — requires network mocking/route interception.

### Performance (6)

#### TC-EMPDET-204 — Performance — Employee Details list loads in under 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: List load < 2s |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee Details
2. Measure time to interactive/list render

**Expected**

List load completes in under 2 seconds

**Test Data**

- `threshold`: 2s

#### TC-EMPDET-205 — Performance — Search responds in under 1 second

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: Search < 1s |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Type a search term
2. Measure time to filtered results

**Expected**

Search results render in under 1 second

**Test Data**

- `threshold`: 1s

#### TC-EMPDET-206 — Performance — Filter apply completes in under 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: Filter < 2s |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply a filter
2. Measure time to updated results

**Expected**

Filter apply completes in under 2 seconds

**Test Data**

- `threshold`: 2s

#### TC-EMPDET-207 — Performance — Sort apply completes in under 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: Sort < 2s |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click a sortable column header
2. Measure time to re-sorted results

**Expected**

Sort completes in under 2 seconds

**Test Data**

- `threshold`: 2s

#### TC-EMPDET-208 — Performance — Pagination navigation completes in under 2 seconds

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: Pagination < 2s |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to the next page
2. Measure time to render

**Expected**

Page navigation completes in under 2 seconds

**Test Data**

- `threshold`: 2s

#### TC-EMPDET-209 — Performance — Opening the (Advanced) filter panel completes in under 1 second

| Field | Value |
| --- | --- |
| **Tags** | @performance |
| **Requirement Ref** | nfrRequirements.performance: Open filter panel < 1s |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Click to open the filter panel
2. Measure time to fully rendered panel

**Expected**

Filter panel opens in under 1 second

**Test Data**

- `threshold`: 1s

### Regression (36)

#### TC-EMPDET-224 — Known bug regression — Null Reporting Manager cell renders gracefully

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-01 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); an employee with no assigned RM exists

**Steps**

1. Render the row for an employee with no assigned Reporting Manager

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Cell shows a graceful fallback (e.g. '-' or 'Not assigned') with no console/JS error

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-225 — Known bug regression — Null Skills cell renders without a broken +N chip

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-02 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); an employee with zero skills exists

**Steps**

1. Render the row for an employee with zero skills

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. No '+N' overflow chip renders and no crash occurs

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-226 — Known bug regression — Null Department/Projects graceful fallback display

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-03 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); an employee with no Department/Projects exists

**Steps**

1. Render the row/drawer for an employee with no Department or no Projects

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Graceful fallback shown rather than a blank/broken cell

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-227 — Known bug regression — Pagination boundary: archive/add employee on last page produces no duplicates or missing records

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-04 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); on the last page of the list

**Steps**

1. While viewing the last page, archive or add an employee

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. No duplicate or missing rows result

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-228 — Known bug regression — Double-click Save in Edit Drawer causes no duplicate update/corruption

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-05 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Action - edit employee
2. Modify a field
3. Double-click Save rapidly

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Only a single update is applied, no corrupted/duplicate state

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-229 — Known bug regression — Zero search results show empty-state and a 0 count badge

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-06 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Search/filter to zero matches

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Empty-state message and a 0 count badge are shown, not a blank table

**Test Data**

- `searchTerm`: zzzznotfound

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-230 — Known bug regression — XSS in search input is escaped, no script execution

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-07 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Enter '<script>alert(1)</script>' into the search input

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Input is escaped on render; no script execution

**Test Data**

- `payload`: <script>alert(1)</script>

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-231 — Known bug regression — Tab switch with active search does not persist search to the other tab

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Known bug: EC-EMPDET-KB-08 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | inferred |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Search on the active-employee tab
2. Switch to Past employees

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Search term/filter state does not carry over to the Past-employees tab

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-232 — Regression — base table/tabs/columns chrome still functions correctly after RM-view changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: affectedModule — Employee Details (base listing/search/filter/pagination) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise the base table's search/filter/sort/pagination after making any RM-view-specific change (e.g. adding an allocation)

**Expected**

Base table chrome continues to behave exactly as before the RM-view-specific change

#### TC-EMPDET-233 — Regression — Skills-derived data (detail drawer / PR-Reviewer popup) stays consistent after Skills-module changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: affectedModule — Skills |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Change a skill/PR-review value in the Skills module
2. Re-open the Skills detail drawer / PR Reviewer popup in Employee Details

**Expected**

Employee Details surfaces reflect the change consistently

**Automation Hint**

PARTIAL — requires cross-module test data setup.

#### TC-EMPDET-234 — Regression — Projects/Allocation data stays consistent after Projects-module-side changes

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: affectedModule — Projects / Allocation |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Change a project's allocation data in the Projects module
2. Re-open the hover allocation summary in Employee Details for the affected employee

**Expected**

Employee Details hover summary reflects the Projects-module change consistently

#### TC-EMPDET-235 — KB-direct — Single search result shows '1 of 1' with pagination controls disabled

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Single search result — grid shows '1 of 1', pagination controls disabled |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Search to a single matching result

**Expected**

Grid shows '1 of 1' (or equivalent); pagination controls are disabled

#### TC-EMPDET-236 — KB-direct — Large dataset (500+ records) meets all performance targets with accurate pagination

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Large dataset (500+ records) — perf targets met, pagination accurate |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); dataset seeded with 500+ employees

**Steps**

1. Load Employee Details against a 500+ record dataset
2. Measure list load, search, filter, sort, pagination timings
3. Verify pagination page counts/totals are accurate

**Expected**

All performance targets are met; pagination remains accurate at volume

**Test Data**

- `recordCount`: 500

**Automation Hint**

PARTIAL — requires a seeded large dataset environment.

#### TC-EMPDET-237 — KB-direct — API 500 error shows a user-friendly message, no JS crash

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: API 500 error — user-friendly error displayed, no JS crash |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate a 500 response from the Employee Details list API (mock/intercept)

**Expected**

User-friendly error is displayed; no JS crash occurs

**Automation Hint**

PARTIAL — requires network mocking/route interception.

#### TC-EMPDET-238 — KB-direct — Special characters in search (hyphens, apostrophes, accents, Unicode) match correctly

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Special characters in search — correct matching |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Search using names containing hyphens, apostrophes, accented characters, and Unicode

**Expected**

Matching records are found correctly for every special-character variant

**Test Data**

- `searchTerms`: O'Brien, Renée, 田中, Anne-Marie

#### TC-EMPDET-239 — KB-direct — Advanced filter rejects Available Since end date before start date

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Advanced filter — Available Since end < start — validation error shown |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Advanced Filters
2. Set Available Since end date earlier than the start date
3. Attempt to apply

**Expected**

Validation error is shown; filter is not applied

**Test Data**

- `start`: 2026-08-01
- `end`: 2026-07-01

#### TC-EMPDET-240 — KB-direct — Advanced filter rejects out-of-range Availability %/Experience values

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Advanced filter — Availability % = 101 or Experience = -1 — rejected |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Advanced Filters
2. Enter Availability % = 101
3. Enter Experience = -1
4. Attempt to apply

**Expected**

Both out-of-range values are rejected

**Test Data**

- `availabilityPct`: 101
- `experienceYears`: -1

#### TC-EMPDET-241 — KB-direct — Feature flag disabled mid-session is handled gracefully, no crash

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Feature flag disabled mid-session — graceful handling, no crash |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. While viewing Employee Details, simulate the governing feature flag being toggled off mid-session

**Expected**

UI degrades gracefully (e.g. gated controls disappear/disable) with no crash

**Automation Hint**

PARTIAL — requires feature-flag toggling harness.

#### TC-EMPDET-242 — KB-direct — Search, filter, sort, and pagination state are independent per tab

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Search/filter/sort/pagination state independent per tab |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply a search, filter, sort, and page-2 navigation on the active tab
2. Switch to Past employees
3. Switch back to the active tab

**Expected**

State on the active tab is fully preserved on return; the Past-employees tab never inherited any of that state

#### TC-EMPDET-243 — KB-direct — All grid values exactly match the corresponding API response for every field

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: All grid values must exactly match the corresponding API response |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read every visible column value for a sample of rows
2. Compare each against the corresponding field in the API list response

**Expected**

All grid values match the API response exactly, for every field, not only Allocation %

#### TC-EMPDET-244 — KB-direct — Reset on Basic Filters clears all criteria and restores the unfiltered list for the current tab only

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Reset on Basic Filters clears all criteria, current tab only |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply Basic Filters on the active tab
2. Click Reset

**Expected**

All criteria are cleared; full unfiltered list is restored for the current tab only

#### TC-EMPDET-245 — KB-direct — Advanced Filters: Save applies all criteria; Cancel reverts to the last-applied state

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | KB-direct: Advanced Filters Save/Cancel semantics |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open Advanced Filters with an already-applied criterion
2. Change several criteria without saving
3. Click Cancel
4. Reopen and change criteria, then click Save

**Expected**

Cancel reverts to the last-applied filter state; Save applies all newly selected criteria

#### TC-EMPDET-246 — Data integrity — UI-displayed allocation/employee values match the API response after save (incl. employee count parity)

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — API parity + employee count consistency; KB-direct: Employee count in grid rows/badge/API total must always match |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Save an edit to an employee/allocation
2. Compare the UI-displayed value against the API response for the same record
3. Compare the grid row count, result-count badge, and API total field

**Expected**

UI value matches the API response exactly; grid row count, result-count badge, and API total are all equal

#### TC-EMPDET-247 — Data integrity — newly created allocation/note is present after a full page refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — Create persists across refresh |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Create a new allocation (or note)
2. Refresh the page (F5)

**Expected**

The newly created record is still present after refresh

#### TC-EMPDET-248 — Data integrity — updated employee field values are correct after a full page refresh

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — Update persists across refresh |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Edit an employee field and Save
2. Refresh the page (F5)

**Expected**

Updated field value is still correct after refresh

#### TC-EMPDET-249 — Data integrity — archived employee is absent from the active list immediately, no refresh required

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — Delete/Archive removes from active list immediately |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Archive/delete an employee
2. Observe the active list immediately, without refreshing

**Expected**

The archived/deleted employee is absent from the active list without needing a refresh

#### TC-EMPDET-250 — Data integrity — double-clicking Save on Add-project-allocation/Add-note/Edit-employee produces exactly one record/update

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — double-click submit creates exactly one record |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill any of the Create/Update forms with valid data
2. Double-click Save/Submit in rapid succession

**Expected**

Exactly one record is created/updated, not two

#### TC-EMPDET-251 — Data integrity — assigned allocation count increments by 1 and deallocated count decrements by 1, in both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: data-integrity — assignment/deallocation count parity |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Note the current allocation count for an employee
2. Add a project allocation and re-check the count (UI + API)
3. Deallocate a project and re-check the count (UI + API)

**Expected**

Count increments by exactly 1 on assignment and decrements by exactly 1 on deallocation, matching in both UI and API

#### TC-EMPDET-252 — UI regression — hover action icons appear for every row, including first and last row of a page

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — hover actions |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover the first row of the current page
2. Hover the last row of the current page

**Expected**

Row action icons appear for both the first and last row

#### TC-EMPDET-253 — UI regression — hovering icon-only action buttons shows a tooltip with a readable label

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — tooltips |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Hover an icon-only row action button

**Expected**

A tooltip with a readable label appears

**Automation Hint**

The primary action button in this section may not carry a confirmed label — describe generically if unconfirmed.

#### TC-EMPDET-254 — UI regression — success toast appears after Create/Update/Delete/Archive with entity name or confirmation message

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — success toast |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform a successful Create (Add note), Update (Edit employee), and Delete/Archive

**Expected**

A success toast appears after each, containing the entity name or a confirmation message

#### TC-EMPDET-255 — UI regression — error toast on server error does not expose a raw stack trace

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — error toast |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Simulate a server error during a write operation (mock/intercept)

**Expected**

An error notification appears without exposing a raw stack trace

**Automation Hint**

PARTIAL — requires network mocking/route interception.

#### TC-EMPDET-256 — UI regression — loading indicator is visible during data fetch and disappears once loaded

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — loading indicator |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Trigger a data fetch (e.g. page load, filter apply)
2. Observe the loading indicator appear then disappear once data renders

**Expected**

A spinner/skeleton is visible during fetch and disappears once data loads

#### TC-EMPDET-257 — UI regression — list/table reflects Create/Update/Delete/Archive without a manual page reload

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — table refresh |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Perform Create/Update/Delete/Archive
2. Observe the list/table without manually reloading

**Expected**

List/table reflects the change without a manual page reload

#### TC-EMPDET-258 — UI regression — sorting/filtering update the record-count badge consistently; clearing restores the full list

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | Regression: ui-state — sorting/filtering/pagination |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | regression-derived |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply a sort
2. Apply a filter
3. Observe the record-count badge after each
4. Clear the filter

**Expected**

Sort/filter updates the displayed records and the record-count badge consistently; clearing the filter restores the full list and count

#### TC-EMPDET-259 — Module-specific regression — archived record never appears in active dropdowns, search results, or list filters

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: simerp-module — archived record visibility |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); an archived employee exists

**Steps**

1. Open any active-scoped dropdown that lists employees (e.g. reporting-manager picker)
2. Search/filter the active list for the archived employee's name

**Expected**

The archived employee does not appear in any active dropdown, active search result, or active list filter — visible only under the explicit Past-employees view

### Security (10)

#### TC-EMPDET-210 — RM cannot view/edit employees outside own reporting chain (UI + API)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: RM cannot[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage (subham.nayak@simformsolutions.com) + testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. As the RM, attempt to open a side drawer/hover summary for an employee outside their reporting chain via UI
2. Attempt the equivalent action via direct API call with the out-of-scope employee ID

**Expected**

UI does not expose the out-of-scope record; direct API call returns 403/404 rather than the record

**Automation Hint**

PARTIAL — enforcement mechanism (UI filtering vs API 403) not confirmed; verify against live app.

#### TC-EMPDET-211 — RM cannot modify Admin-level settings (UI + API)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: RM cannot[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) with RM-scoped role

**Steps**

1. Attempt to access an Admin-level settings action/route as RM
2. Attempt the equivalent API call

**Expected**

Admin-level controls are absent from RM's UI; direct API call returns 403

#### TC-EMPDET-212 — Employee (rating subject) cannot edit own allocation/notes (UI + API)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: Employee cannot[0] |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) with Employee role

**Steps**

1. As Employee, attempt to open Add/Edit allocation or note controls for own record
2. Attempt the equivalent write via direct API call

**Expected**

Write controls are absent/disabled in UI; API call returns 403

#### TC-EMPDET-213 — Employee cannot access other employees' records (IDOR)

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: Employee cannot[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) with Employee role

**Steps**

1. As Employee, attempt to open another employee's record via direct URL/ID substitution
2. Attempt the equivalent direct API call

**Expected**

Access is blocked in UI and API returns 403/404

#### TC-EMPDET-214 — RM attempting to view an out-of-scope employee's drawer/hover summary is blocked at both UI and API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: RM opens drawer for out-of-scope employee |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Open two browser contexts: primaryPage (subham.nayak@simformsolutions.com) + testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. Attempt to open the employee-details or project-details side drawer for an employee outside the RM's reporting chain

**Expected**

Access should be blocked or the record excluded at both UI and API level

**Automation Hint**

PARTIAL — exact enforcement mechanism not confirmed; needs live-app/backend confirmation.

#### TC-EMPDET-215 — XSS payload in note/allocation free-text fields is sanitized everywhere it is displayed

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: XSS in free-text inputs |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Submit '<script>alert(1)</script>' into the Add-note textarea
2. Submit the same payload into the Add-project-allocation notes textarea
3. View the note in the notes list/timeline and in the allocation table

**Expected**

Payload is escaped everywhere it is displayed; no script execution/alert triggered

**Test Data**

- `payload`: <script>alert(1)</script>

#### TC-EMPDET-216 — A user without RM/Admin permission attempting Archive/Delete/Deallocate directly is rejected at UI and API

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | securityScenario: unauthorized Archive/Delete/Deallocate |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) with a non-privileged role

**Steps**

1. As a non-privileged user, attempt Archive/Delete/Deallocate via any exposed UI control
2. Attempt the equivalent direct API call

**Expected**

Action rejected at both UI (buttons hidden/disabled) and API (403) levels

#### TC-EMPDET-217 — RM performing Archive/Delete/Deallocate/Edit is recorded in an audit trail

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | securityScenario: audit trail on destructive/edit actions |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

N/A — audit logging is an inferred governance expectation, not confirmed in source

**Steps**

1. Perform Archive/Delete/Deallocate/Edit as RM
2. Check for an audit log entry with actor, timestamp, before/after state

**Expected**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. An audit trail entry is recorded

**Automation Hint**

NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression. Audit trail existence/location is not confirmed in source.

#### TC-EMPDET-218 — Each role's permitted and forbidden actions are enforced at both UI and API level

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | BR: Each role's permitted and forbidden actions must be enforced at UI and API level (role-scope-assertion) |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Open two browser contexts: primaryPage (subham.nayak@simformsolutions.com) + testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. For each role (RM/Employee/Admin), attempt each permitted and each forbidden action (view allocation, add/edit allocation, add/edit notes, edit/delete/archive employee) via UI
2. Repeat each forbidden action via direct API call

**Expected**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Permitted actions succeed; forbidden actions are hidden/disabled in UI and return 403 via API

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPDET-219 — Role boundary for Delete/Archive/Deallocate beyond RM (e.g. Admin) — clarification needed

| Field | Value |
| --- | --- |
| **Tags** | @security, @needs-verification |
| **Requirement Ref** | unclear: Role boundary for Delete/Archive/Deallocate actions |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — requirement clarification needed

**Steps**

1. Confirm with product/dev whether Admin (or any role beyond RM) can perform Delete/Archive/Deallocate, and whether scope is enforced server-side

**Expected**

MANUAL — cannot finalize the full role matrix for destructive actions until confirmed

**Automation Hint**

MANUAL — requirement unclear: role boundary for Delete/Archive/Deallocate actions.

### Smoke (3)

#### TC-EMPDET-131 — RM hovers active-employee row and drills into View project details side sheet

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); on Employee Details, Current tab; at least one employee with a primary + tentative allocation

**Steps**

1. Log in as subham.nayak@simformsolutions.com (primaryPage fixture)
2. Navigate to Employee → Employee Details (Current tab)
3. Hover the row for an employee with an active allocation
4. Observe the inline allocation/utilization summary popup
5. From the row hover menu, open 'View project details'

**Expected**

Hover popup shows Allocation %, Logged Hours % with variance phrase, Allocation Since, Duration, Total logged hours, per-project table, and 2-bucket billability split; 'View project details' side sheet opens showing the 3-bucket billability breakdown (Non-billable/Billable/Not allotted) and the Projects/Allocation/Logged Hours % table

**Test Data**

- `employee`: Keyur Patel
- `allocationPct`: 50
- `loggedHoursPct`: 80

**Automation Hint**

Hover-triggered UI can be flaky headless — use explicit hover + toBeVisible waits, not click.

#### TC-EMPDET-132 — RM adds a project allocation via tentative-projects shortlist and grid reflects it without reload

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | criticalPaths[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); on Employee Details, Current tab

**Steps**

1. Open the row hover menu for an employee and choose 'Add project'
2. In the 'Add project allocation' drawer, add 'ShowSYNC | Equestrian Platform' to the tentative-projects shortlist
3. Verify it renders as a removable mini-table row
4. Confirm/submit the allocation
5. Observe the grid/hover allocation summary without refreshing the page

**Expected**

Drawer opens with 7 inputs + notes textarea; tentative project appears as a removable row before confirm; after submit the allocation is persisted and the grid/hover summary reflects the new allocation immediately, no page reload

**Test Data**

- `project`: ShowSYNC | Equestrian Platform

**Automation Hint**

Exact field labels for the 7 inputs are unconfirmed (structural-only screen) — assert by input order/role, not by invented labels.

#### TC-EMPDET-133 — RM deletes/archives an employee, deallocates a lingering project, and the employee moves to Past employees

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @negative |
| **Requirement Ref** | criticalPaths[2] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); target employee has an active project allocation

**Steps**

1. Open the row action menu for the target employee and choose Delete
2. Confirm the delete/archive confirmation modal
3. Open the project drawer for the same (now archived) employee and trigger Deallocation
4. Confirm the Deallocation confirmation popup
5. Navigate to the Past employees tab

**Expected**

Employee is removed from the active list immediately; a subsequent deallocation flow (base table → project drawer → log form dialog → confirmation modal) completes; the employee now appears under Past employees with a read-only Archive employee details drawer (no edit affordance beyond the close icon)
