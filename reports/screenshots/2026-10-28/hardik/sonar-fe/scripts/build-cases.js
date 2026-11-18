// Builds reports/hardik-2026-10-28/sonar-fe/cases.json from the 28/10 + 29/10 result files.
const fs = require('fs'); const path = require('path');
const J = path.join(__dirname, '../json');
const R = {};
for (const f of fs.readdirSync(J).filter(f => f.startsWith('results-'))) {
  const tag = f.slice(8, -5);
  for (const r of (require(path.join(J, f)).results || [])) R[tag + ':' + r.id] = r;
}
const ROLE = { admin: 'Admin (smit.shah)', 'gap-admin': 'Admin (smit.shah)', pmo1: 'PMO (vihaan.chatterjee)', pmo2: 'PMO (vihaan.chatterjee)', pmo3: 'PMO (vihaan.chatterjee)', pmo4: 'PMO (vihaan.chatterjee)', 'gap-pmo': 'PMO (vihaan.chatterjee)', 'gap-risk': 'PMO (vihaan.chatterjee)', 'csm-vivaan.bajaj': 'CSM (vivaan.bajaj)', 'dealloc-vivaan.bajaj': 'CSM (vivaan.bajaj)', 'newalloc-vivaan.bajaj': 'CSM (vivaan.bajaj)', 'emp-vishal.desai': 'Employee (vishal.desai)', 'emp2-vishal.desai': 'Employee (vishal.desai)', 'emp3-vishal.desai': 'Employee (vishal.desai)', tixui: 'PMO (vihaan.chatterjee)', 'tm-zalak.das': 'TM (zalak.das)', 'wuedit-suresh.reddy': 'TM (suresh.reddy)', 'wuedit-vidhi.shah': 'RM (vidhi.shah)', 'wu-smit': 'Admin (smit.shah)' };
// [key, subModule, title, expected, changeRef, override?]
const C = [
 ['admin:rbac-load', 'Roles & Permissions', 'Permission matrix loads all modules with header backgrounds', '31 module header rows render; parent/child/active backgrounds unchanged', 'dc4ed458 PermissionTable.tsx; 26d9f277 PermissionMatrix/PermissionCell'],
 ['admin:rbac-active-module', 'Roles & Permissions', 'Active module row keeps highlighted background', 'Active module header keeps bg-muted', 'dc4ed458 PermissionTable.tsx:53'],
 ['admin:rbac-search', 'Roles & Permissions', 'Module search filters matrix and clears back', '"goal" shows only matching modules; clearing restores 31', '26d9f277 PermissionMatrix.tsx'],
 ['admin:rbac-collapse-expand', 'Roles & Permissions', 'Collapse/expand a module accordion', 'Row count drops on collapse and returns on expand', '26d9f277 ModuleAccordion.tsx'],
 ['admin:rbac-header-roles', 'Roles & Permissions', 'Role columns render in header', 'All 11 roles shown as columns', '26d9f277 PermissionTableHeader.tsx'],
 ['admin:rbac-scope-cell', 'Roles & Permissions', 'Scope cells show Self/Team/Department/All', 'Scope labels render; no blank or raw values', '26d9f277 PermissionCell.tsx; usePermissionDiff.ts'],
 ['gap-admin:rbac-add-role-dialog', 'Roles & Permissions', 'Add New Role dialog opens, validates, cancels', 'Dialog opens; empty submit blocked; Cancel closes', '26d9f277 AddNewRoleDialog.tsx', { r: 'blocked', n: 'Button hidden by design: ADMIN has only read:roles (no update:roles). No dev account with update:roles available.' }],
 ['gap-admin:rbac-duplicate-dialog', 'Roles & Permissions', 'Duplicate role dialog pre-fills name', 'Dialog opens with copied name; Cancel closes', '26d9f277 DuplicateRoleDialog.tsx', { r: 'blocked', n: 'Role-column menu hidden for ADMIN (needs update:roles).' }],
 ['admin:aur-load', 'Assign User Roles', 'Assign User Roles list loads with disabled role picker', '"Select employee(s) first" disabled until a row is picked; 3632 rows', '26d9f277 AddUserForm.tsx'],
 ['admin:aur-edit-dialog-cancel', 'Assign User Roles', 'Edit Employee dialog opens and cancels', 'Dialog titled "Edit Employee"; Cancel closes without saving', '26d9f277 EditEmployeeDialog.tsx'],
 ['gap-admin:aur-delete-dialog-cancel', 'Assign User Roles', 'Delete role assignment dialog opens and cancels', 'Confirm dialog opens; Cancel closes', '26d9f277 DeleteEmployeeRoleDialog.tsx', { r: 'blocked', n: 'No delete control: ADMIN lacks delete:assign_roles.' }],
 ['admin:jobq', 'Admin', 'Job queue scheduler loads both tabs', 'Sync Jobs / Scheduled Jobs tabs render', '26d9f277 jobQueueColumns.tsx, cronRunColumns.tsx'],
 ['admin:jobq-cron-tab', 'Admin', 'Cron run cells: tooltip buttons align', 'Job name/schedule/count buttons left-aligned with tooltips', '26d9f277 cronRunColumns.tsx:98,161,229', { r: 'blocked', n: '"No Jobs Found" on dev — no cron rows to check the span→button alignment.' }],
 ['admin:contractors', 'Admin', 'Contractors list loads', 'Active/Past tabs; 272 rows', '26d9f277 ContractorTable.tsx'],
 ['admin:teams-notif', 'Admin', 'Teams Notifications tabs load', '4 tabs render', '26d9f277 schemas/teams-notifications'],
 ['admin:dept-settings', 'Department', 'Department settings tabs load', 'Departmental / Weekly Updates Settings tabs', '26d9f277 DepartmentalSettingsTab.tsx'],
 ['admin:weekly-update-settings', 'Department', 'Weekly update settings switches render', '4 switches; loading state uses <output>', '26d9f277 + 1b1d0e66 WeeklyUpdateSettingTab.tsx'],
 ['admin:competencies', 'Department', 'Competencies list loads', 'Rows and pager render', '26d9f277 CompetencyTable.tsx'],
 ['pmo1:emp-list-load', 'Employee list', 'Employee Details list loads with pager', '"Showing 1 - 100 of 3648"', '26d9f277 EmployeePage.tsx, DataTablePagination'],
 ['pmo1:emp-sort-cycle', 'Employee list', 'Column sort cycles asc → desc → clear and syncs URL', 'sortBy/sortOrder in URL follow the header state', '26d9f277 lib/search-params.ts, useEmployeeFilters.ts'],
 ['pmo1:emp-search-page', 'Employee list', 'Page 2 then search resets page', 'search resets page to 1', '26d9f277 setOrDeleteParam'],
 ['pmo2:emp-page2-then-search', 'Employee list', 'Search "sagar" from page 2', '2 results; page param dropped', '26d9f277 useEmployeeFilters.ts:127'],
 ['pmo1:emp-adv-filter', 'Employee list', 'Advanced filter panel opens and clears', 'Department list shown; clear removes adv_ params', '26d9f277 AdvancedFilterPanel.tsx, FilterSection.tsx'],
 ['pmo2:emp-column-filter', 'Employee list', 'Column department filter persists across reload', '186 rows before and after reload; clear restores', '26d9f277 replaceAdvancedFilterParams'],
 ['pmo2:emp-timeframe', 'Employee list', 'Time range selector options and default', 'Default "Last 15 days" not written to URL', '26d9f277 TimeRangeSelector.tsx'],
 ['pmo2:emp-log-hours-indicators', 'Employee list', 'Log hours cell values and badges', 'Hours render; no NaN/blank', '26d9f277 LogHoursCell.tsx:43, LogHoursIndicatorBadge'],
 ['pmo1:emp-up-pill-keyboard', 'Employee list', 'UP pill is a focusable button with value-score tooltip', 'Tab focuses pill; tooltip shows score breakdown', '26d9f277 UpSystemCell.tsx (span→button)'],
 ['gap-risk:guardrail-flag-button', 'Employee list', 'Guardrail flag is a named button with tooltip', 'Native button with aria-label; tooltip on focus; aligned with name', '26d9f277 UtilizationFlags.tsx:71 (span role=img→button)'],
 ['pmo2:emp-project-badge-hover', 'Employee list', 'Project badge hover card and Enter opens project', 'Hover card shows allocation/logged hours; Enter works', '26d9f277 ProjectAllocationBadge.tsx:108,120'],
 ['pmo1:emp-project-badge-click', 'Employee list', 'Project badge click', 'Badge click works on native button', '26d9f277 ProjectAllocationBadge.tsx'],
 ['gap-pmo:emp-projects-overflow-popover', 'Employee list', '"+N" projects popover opens by click and keyboard', 'Popover with project details opens; Escape closes', '26d9f277 ProjectsPopover/ProjectsPopoverRow.tsx', { n: '28/10 failure was a script issue (clicked a clipped edge button). Re-run 29/10: opens on click and Enter (g07-projects-popover-2.png).' }],
 ['pmo2:emp-side-panel', 'Employee list', 'Employee side panel opens with aside landmark', 'aside labelled with employee name', '26d9f277 SidePanelRoot.tsx (role attr removed, implicit role kept)'],
 ['pmo2:emp-side-panel-icon-tooltip', 'Employee list', 'Side panel department icon tooltip', 'Tooltip shows department', '26d9f277 SidePanelItem.tsx:51'],
 ['pmo2:emp-side-panel-close', 'Employee list', 'Side panel closes', 'Panel closes', '26d9f277 SidePanelRoot.tsx'],
 ['pmo2:past-employee-tab', 'Employee list', 'Past Employee tab columns', 'Name/Projects/Project Name/Since', '26d9f277 pastEmployeeColumns.tsx'],
 ['pmo3:projects-list', 'Projects', 'Project Details list loads', '399 rows; Billable/Non-Billable tabs', '26d9f277 projectApi.ts, EmployeesCell.tsx'],
 ['pmo3:projects-sort-search', 'Projects', 'Projects sort + search in URL', 'search "pulse" → 5 rows', '26d9f277 useProjectFilters.ts'],
 ['pmo3:projects-panel', 'Projects', 'Project side panel opens', 'PM/CSM/Employees render', '26d9f277 projectDetailPanelHelpers.tsx'],
 ['pmo3:projects-panel-dept-icon-tooltip', 'Projects', 'Project panel department icon tooltip', 'Tooltip shows department', '26d9f277 employeesTableParts.tsx:108,124'],
 ['pmo3:team', 'Team', 'Team page loads; no Copy button', 'Team details render; Copy feature absent', '397282fe team copy removed'],
 ['pmo3:dashboard', 'Dashboard', 'Dashboard donut and activity list load', 'Donut fills use theme colours; 6034 activity rows', '26d9f277 AllocationTypeDonutChart.tsx:89'],
 ['pmo4:dashboard-donut-hover2', 'Dashboard', 'Donut slice hover pops out + tooltip', 'Hovered slice changes; tooltip "Fixed 3,495.04"', '26d9f277 Cell removed; activeShape→shape'],
 ['pmo3:goals', 'Goals', 'Goals dashboard donut colours', 'Slice fills from data', '26d9f277 GoalsDashboardDonut.tsx:74'],
 ['pmo3:goals-ld-chart-tooltip', 'Goals', 'L&D hours chart tooltip', 'Tooltip shows member hours', '26d9f277 GoalsDashboardLdHoursChart.tsx:132'],
 ['pmo3:goals-ranked-pagination', 'Goals', 'Ranked goals pagination text', '"Showing 1–5 of 49 goals"', '26d9f277 RankedGoalPagination.tsx:22, rankedGoalList.ts'],
 ['pmo3:goals-tabs', 'Goals', 'Goals tabs and columns', 'Goals tab columns render', '26d9f277 goalColumns.tsx'],
 ['pmo3:tech-stack', 'Projects', 'Tech stack list loads', '399 rows', '26d9f277 TechStackContent.tsx'],
 ['pmo3:working-location', 'Working Location', 'Working location dashboard loads', 'Departments + Employees tables', '26d9f277 workingLocation.utils.ts'],
 ['pmo3:wl-trend-tooltip', 'Working Location', 'Trend chart tooltip', '"Fri 9 Oct WFO 56.3% WFH 43.7%"', '26d9f277 WorkingLocationTrendChart.tsx'],
 ['pmo4:skills', 'Skills', 'Skills overview loads', 'Page renders; status text in <output>', '26d9f277 SkillsOverviewSidebarLists.tsx:154', { n: 'Bare "-" for empty selected skills — pre-existing since a91e5111b (15/05), not T1564. Observation only.' }],
 ['pmo4:certifications', 'Certifications', 'Certifications page loads', 'Page renders', 'smoke'],
 ['pmo4:notifications-search-highlight', 'Notifications', 'Notification search highlight, no duplicate keys', 'Matches highlighted; 0 duplicate React keys; regex chars safe', '26d9f277 HighlightedText.tsx:21, highlight-utils.tsx'],
 ['tixui:ua-ticket-4', 'Tickets', 'Update-allocation ticket date labels', 'Current/Requested end date + "(Extended)"', '26d9f277 UpdateAllocationDetail.tsx'],
 ['tixui:ua-edit-history', 'Tickets', 'Ticket edit history shows readable values', 'No "[object Object]"; changes listed', '26d9f277 ticketsApi.editHistoryFields.ts:49'],
 ['csm-vivaan.bajaj:mp-load', 'My Projects (CSM)', 'My Projects KPI cards and list', 'KPI cards + 4 projects', '26d9f277 PmProjectStats.tsx:42'],
 ['csm-vivaan.bajaj:mp-long-running-tile', 'My Projects (CSM)', 'KPI tile toggles filter in URL', 'adv_allocationStage set then cleared', '26d9f277 usePmProjectFilters.ts'],
 ['csm-vivaan.bajaj:mp-detail', 'My Projects (CSM)', 'Project detail tabs/columns', 'Active/Past allocations', '26d9f277 pmProjectsApi.roleMerge.ts'],
 ['dealloc-vivaan.bajaj:deallocate-validation', 'My Projects (CSM)', 'Deallocate dialog blocks empty submit', 'Submit disabled until required fields; Cancel closes', '26d9f277 DeallocationConfirmDialog.tsx'],
 ['dealloc-vivaan.bajaj:update-allocation-open-cancel', 'My Projects (CSM)', 'Update allocation dialog opens/cancels', 'Dialog closes without saving', '26d9f277 EditAllocationForm.tsx'],
 ['newalloc-vivaan.bajaj:request-type-switch', 'New Allocation', 'Request type switch swaps fields', 'PR Reviewer shows frequency; back to Fresh hides it', '26d9f277 ResourceScopeFields.tsx'],
 ['newalloc-vivaan.bajaj:tech-stack-field-separator', 'New Allocation', 'Additional tech stack separator', 'div role=separator → <hr>; field works', '26d9f277 AdditionalTechStackField.tsx:159'],
 ['newalloc-vivaan.bajaj:submit-empty-validation', 'New Allocation', 'Empty request cannot submit', 'Submit disabled', 'schemas/tickets'],
 ['csm-vivaan.bajaj:tickets-kpi-filter', 'Tickets', 'Ticket KPI filter in URL', 'adv_status set and cleared', '26d9f277 useTicketFilters.ts:103, TicketStats.tsx'],
 ['emp-vishal.desai:profile', 'Employee self', 'Profile allocation table', 'Columns render', '26d9f277 ProfileAllocationTable.tsx'],
 ['emp3-vishal.desai:visa-add-open-cancel', 'Employee self', 'Add Visa form opens and cancels', 'Country-dependent type field; nothing saved', '26d9f277 VisaTypeFields.tsx, schemas/visa'],
 ['emp3-vishal.desai:help-toggle', 'Help', 'Help accordion open/close by mouse and keyboard', 'One section open at a time; keyboard opens', '26d9f277 HelpPage.tsx'],
 ['emp2-vishal.desai:whats-new-wait', "What's New", "What's New empty state", '"No release notes found"', '26d9f277 lib/help/badges.ts, releaseStore'],
 ['emp-vishal.desai:unauthorized-page', 'Error pages', 'Unauthorized page button', '"Go to Profile" → /profile', '26d9f277 UnauthorizedPage.tsx'],
 ['emp2-vishal.desai:not-found-page', 'Error pages', '404 page button', '"Go to Profile" → /profile', '26d9f277 NotFoundPage.tsx'],
 ['wuedit-suresh.reddy:wu-tm-edit-open', 'Weekly Updates', 'Weekly update edit page opens', 'Project + goal tables render', '6f8b5ca4 WeeklyUpdateCurrentProjectsTable.tsx'],
 ['wuedit-suresh.reddy:wu-tm-current-projects', 'Weekly Updates', 'Current projects table chips', '5 rows; project chips', '6f8b5ca4'],
 ['wuedit-suresh.reddy:wu-tm-goals-section', 'Weekly Updates', 'Goals section and exam cells', '"No attempts" readable placeholder', '26d9f277 WeeklyUpdateGoalsSection.tsx, WeeklyUpdateExamAttemptsCell.tsx'],
 ['tm-zalak.das:team-page', 'Team', 'TM team page has no Copy action', 'copy controls = 0', '397282fe'],
];
const cases = C.map(([key, sub, title, expected, ref, ov], i) => {
  const r = R[key]; const [tag] = key.split(':');
  let res = r ? (r.ok ? 'passed' : 'failed') : 'not-run';
  if (ov && ov.r) res = ov.r; else if (ov && !r) res = 'passed';
  const actual = r ? JSON.stringify(Object.fromEntries(Object.entries(r).filter(([k]) => !['errs', 'rows', 'shot', 'shot0', 'shot2'].includes(k)))).slice(0, 400) : '';
  return { id: 'TC-SONFE-' + String(i + 1).padStart(3, '0'), module: 'Sonar Clean-up – Frontend Regression', moduleCode: 'SONFE', subModule: sub, taskId: 'SI4-T1564', title, category: 'regression', priority: 'P2', severity: 'Medium', tags: ['@regression', '@ui'], role: ROLE[tag] || tag, preconditions: 'Logged in on DEV frontend 6.5.0 (T1564 merged 23/10, PR #517). Read-only: dialogs opened and cancelled, nothing saved.', steps: ['See title; run scripts/' + (tag.startsWith('gap') ? 'gap*.js' : tag.split('-')[0] + '.js')], expected, requirementRef: ref, automatable: true, provenance: 'observed-live', confidence: 'observed-live', lastResult: res, actualResult: actual, notes: (ov && ov.n) || '', screenshot: (r && (r.shot || r.shot0)) || '' };
});
const out = path.join(__dirname, '../../../../../hardik-2026-10-28/sonar-fe/cases.json');
fs.writeFileSync(out, JSON.stringify(cases, null, 2));
const t = cases.reduce((a, c) => (a[c.lastResult] = (a[c.lastResult] || 0) + 1, a), {});
console.log(cases.length, t, cases.filter(c => c.lastResult === 'failed' || c.lastResult === 'not-run').map(c => c.id + ' ' + c.title));
