# SI4-T1527: Allocation notifications for Leads/Seniors between RM and TM (code brief)

**Summary**
1. Backend only: PR #545, commits `d8e931b4` and `40810c76`, merged to `origin/development` as `c1eca0f1` on 2026-10-15. The frontend has no T1527 commits. All of the change is in the recipient resolver.
2. To build the chain, the code starts at the RM and climbs `employee.team.rmEmployeeId` with one recursive SQL query. It stops at the first person who holds the **TM role for the employee's own department**. People in between get the RM's notifications (same event, same copy, in-app and email). MS Teams is not touched.
3. Every allocation-ticket event that reaches the RM is covered: approved, bypassed, NA/RA assigned, increase/decrease updated, deallocated, PR-reviewer, revert/cancel, direct allocation, and direct update/remove. Only `ASSIGNMENT_CREATED` (`POST /assigned-projects`, API only) still goes to the RM alone.
4. Main risks: (a) **duplicate removal only works inside one event**. A PM who is also a Lead still gets two notifications for the same approval (PM copy + RM copy), which conflicts with the acceptance criteria. (b) If the department TM is not in the RM's upward chain (cross-department reporting, a missing link, a deleted team), **nobody** extra is notified and nothing is logged. (c) A soft-deleted RM means no middle managers either.
5. To test on dev, use the bell and the `/notifications` page (or `GET /api/v1/notifications` as each person). Email may be turned off or redirected on dev. In-app and email use the same recipient resolver, so in-app is a reliable stand-in for email.

---

## 0. Source

| Item | Value |
|---|---|
| Commits | `d8e931b4` feat (2026-10-14), `40810c76` review fix (2026-10-15), merge `c1eca0f1` (PR #545) |
| Core file | `src/modules/notifications/dispatch/recipient-resolver.service.ts` (line numbers below are from `origin/development`) |
| Changed call sites | `allocation-ticket-notification.service.ts:372,415`, `direct-allocation.service.ts:373`, `projects-pr-reviewer-notification.util.ts:53,92`, `recipient.types.ts:20,27` |
| Unrelated to T1527 but in the merge | `visaStatus` added to the employee list DTO/select (`employees.service.ts:1810`, `employee-response.dto.ts`). It came in through the branch sync and is not part of this feature. |

## 1. How the chain is computed

**Data source.** This is the same team structure the RM and TM lookups already use. An employee's manager is `employees.teamId -> teams.rmEmployeeId`. The same source is used by `core/casl/team-hierarchy.util.ts` for TEAM scope. There is no separate hierarchy table.

**Entry points**
- `@ticket-developer-rm` (ticket flows): `resolveTicketDeveloperRm()` at `recipient-resolver.service.ts:359-373`. It **always** adds the chain. The developer is `selectedDeveloper` if that person has a team RM, otherwise `projectAssignment.employee` (lines 368-371). The department is the **developer's own home department**, not the ticket's assigned department.
- `@employee-rm` (direct/PR flows): `resolveEmployeeRm()` at `:120-129`. It adds the chain only when `withReportingLine: true` is set (`:127-128`).
- `@rm`: `:92`. Plain RM only, and not used by any caller.

**Walk** (`resolveRmAndReportingLine()` at `:151-175`)
- No department on the employee: returns the RM only (`:152`).
- Recursive CTE (`:155-167`): row 0 is the RM. Each step joins `teams t ON t.id = c.teamId AND t.deletedAt IS NULL` and then `employees m ON m.id = t.rmEmployeeId`, while `depth < 15` (`REPORTING_LINE_MAX_DEPTH`, `:7`).
- At the same time it loads the department TMs (`resolveDepartmentTm()` at `:232-250`). A TM is an `employeeRole` with role name `TM`, role not deleted, employee not deleted, and an `EmployeeDeptAccess` row for the department. Access is based on department access rows, **not** the TM's own home department.
- If the RM is missing or soft-deleted, the result is `[]`, so **the RM is dropped and so are all middle managers** (`:171`).

**`collectManagersBelowTm()` at `:181-198`**

| Situation | Result |
|---|---|
| RM holds the TM role for the department (RM == TM) | RM only (`:186`) |
| Employee→RM→TM | RM only |
| Employee→RM→Lead→TM | RM + Lead |
| Employee→RM→Senior→Lead→TM | RM + Senior + Lead (in walk order) |
| The chain never reaches a TM for the employee's department (top of org, null team, deleted team, cross-department chain, TM sits outside this line) | RM only. **All** middle managers are dropped (`:197`) |
| Cycle: someone already visited appears again, e.g. a Lead who belongs to their own team | RM only. Everything is dropped (`:193`) |
| Soft-deleted manager in the middle | Skipped but walked past (`:195`) |
| Soft-deleted team on the path | Walk stops there (SQL join), so no TM is reached and the result is RM only |
| Depth limit: TM more than 15 hops above the RM | Treated as "no TM reached", so RM only |
| Someone in the middle is a TM of a *different* department (no access to this one) | Treated as a normal middle manager and notified. The walk continues |
| Soft-deleted TM in the chain | Not counted as a TM, so the walk continues past them |
| "Inactive" employees | Only `deletedAt` counts. There is no other active flag. People on notice or on a PIP are still notified |

## 2. Event coverage (every place the RM is notified)

**Covered (middle managers now included).** File paths are relative to `src/modules/`.

| # | Event | Recipient rule location | Trigger / ticket type |
|---|---|---|---|
| 1 | `ALLOCATION_TICKET_DEVELOPER_RM_ASSIGNED` | `allocation-tickets/allocation-ticket-notification.service.ts:738` | NA (fresh) and Replacement, on full approval (`emitApproved` :167, called from workflow :383) or PMO bypass (`emitApprovalBypassed` :225, from workflow :694) |
| 2 | `ALLOCATION_TICKET_DEVELOPER_RM_UPDATED` | `...notification.service.ts:803` | Increase (full flow, approve/bypass) and Decrease (lighter flow, `emitAcknowledged` :264, from workflow :451) |
| 3 | `ALLOCATION_TICKET_DEVELOPER_RM_DEALLOCATED` | `...notification.service.ts:835` | Deallocation ticket (CSM submit → confirm → PMO Acknowledge & Deallocate → `emitAcknowledged`) |
| 4 | `ALLOCATION_TICKET_APPROVED` / `_APPROVAL_BYPASSED` (generic RM copy) | `...notification.service.ts:660` via `buildDeveloperAndRmRecipients` | Only for ticket types other than NA/RA/UA. In practice this never fires for the RM today (deallocation never reaches approve/bypass) |
| 5 | `ALLOCATION_TICKET_PR_REVIEWER_RM_ASSIGNED` | `...notification.service.ts:771` | PR-reviewer ticket approved or bypassed |
| 6 | `ALLOCATION_TICKET_ALLOCATION_REVERTED` / `_ALLOCATION_CANCELLED` / `_PERIOD_CANCELLED` | `...notification.service.ts:460` (`buildAllocationTakenBackRecipients`) | Revert period, cancel upcoming allocation, withdraw scheduled change (`allocation-scheduled-change.service.ts:589`) |
| 7 | `ALLOCATION_TICKET_DEVELOPER_RM_DEALLOCATED` (direct remove, placeholder ticket) | `allocation-tickets/remove-allocation.service.ts:436` | PMO direct remove allocation |
| 8 | `ALLOCATION_TICKET_DEVELOPER_RM_UPDATED` (direct update, placeholder ticket) | `allocation-tickets/update-allocation.service.ts:1570` | PMO direct update allocation |
| 9 | `ALLOCATION_DIRECT_EMPLOYEE_RM_ASSIGNED` | `allocation-tickets/direct-allocation.service.ts:373` (`withReportingLine: true`) | PMO direct allocation (`/my-tickets/direct-allocation`) |
| 10 | `PR_REVIEWER_RM_DEALLOCATED` | `...notification.service.ts:372` and `projects/projects-pr-reviewer-notification.util.ts:53` | Direct PR-reviewer removal |
| 11 | `PR_REVIEWER_RM_UPDATED` | `...notification.service.ts:415` and `projects/projects-pr-reviewer-notification.util.ts:92` | PR-reviewer frequency/date change |

**Not covered (RM notified, middle managers not)**

| Event | Location | Note |
|---|---|---|
| `ASSIGNMENT_CREATED` | `project-assignment/project-assignments.service.ts:247` | `POST /assigned-projects`. The frontend never calls `ASSIGNED_PROJECTS.CREATE`, so this is API-only or legacy. It is still an allocation event, so this is a gap if the API is used |
| `EMPLOYEE_NOTICE_PERIOD_STARTED` | `zoho-analytics/employees-metadata.service.ts:862` | Not an allocation event. Excluded on purpose |
| Visa expiry | `visa/visa-expiry-notification.service.ts:124` | Excluded on purpose |
| Certification expiry | `certifications/certification-expiry-notification.service.ts:269` | Excluded on purpose |

**Not RM events today, so nothing changes.** Ticket created (PMO only), assigned to department (TM), developer selected (PMO/TM), rejected (the other approver), intermediate TM/PMO approvals, auto-apply failed, revised, baseline recomputed. The RM is told only about final outcomes, so "approvals / fully approved / flow completed" for the RM means the rows above.

**Gap that already existed (not new).** On a permanent replacement, the *outgoing* developer's assignment ends, but neither the outgoing developer nor their RM gets any notification. Their chain therefore gets nothing either.

## 3. Duplicate removal and channels

- **Within one event**, `resolve()` at `recipient-resolver.service.ts:31-42` removes duplicates by **email**. The first matching rule wins. `excludeEmployeeId` (the person who did the action) is removed. So within `DEVELOPER_RM_*`, someone who is both in the chain and the ticket-department TM (only possible when the assigned department differs from the home department) gets one copy. The TM bypass override copy still applies through matching email sets.
- **Across events there is no duplicate removal.** On approval, the requester (PM/CSM) gets `PM_ALLOCATED/UPDATED/DEALLOCATED` (`@ticket-requester`, `:876-930`) as a separate event from `DEVELOPER_RM_*`. Direct update/remove use `@ticket-pm` (`update-allocation.service.ts:1578`, `remove-allocation.service.ts:444`). A PM who is also a Lead or Senior therefore gets **two** in-app notifications and two emails for one action. PMO members who are also in the chain also get both the `APPROVED` copy and the RM copy. `DEVELOPER_RM_*` events pass no `excludeEmployeeId`, so a PMO user in the chain who bypasses or acknowledges is notified about their own action. These problems already existed for an RM who is PM or PMO, but the acceptance criteria name the PM-plus-Lead case explicitly.
- **Channels.** `NotificationEventListener.handleNotificationEvent()` (`notifications/events/notification-event.listener.ts:99-105`) creates the in-app notification immediately, then queues the email (`SyncDataType.NOTIFICATION_EMAIL`). Both use the same resolver, so middle managers get both channels. In-app is resolved at event time and email when the queue job runs, so if the reporting line changes in between, the two channels could differ (an edge case). One email is rendered per recipient with `recipientName`.
- **MS Teams.** `teams-notifications/*` never uses `RecipientResolverService` or `payload.recipients`, and there are no T1527 changes there, so Teams is unchanged.
- **Content.** Middle managers get the RM template as is: "your team member, X, has been assigned / updated / deallocated…" (`notifications/templates/allocation-ticket-developer-rm-*.hbs`, `allocation-direct-employee-rm-assigned.hbs`, `allocation-ticket-pr-reviewer-rm-*.hbs`). That matches "same content", although for a Senior or Lead X is not a direct team member.

## 4. Suspected bugs and gaps

| ID | Severity | Finding | Where |
|---|---|---|---|
| G1 | High (acceptance criteria) | Duplicates are not removed across events. A PM (or CSM requester / PMO) who is also a Lead or Senior in the chain gets the PM copy **and** the RM copy for the same action | `recipient-resolver.service.ts:31-42` (per-event only); `allocation-ticket-notification.service.ts:190,251,283` emit both |
| G2 | Medium | If the department's TM is not in the RM's upward chain, all middle managers are dropped with no log. Causes: cross-department reporting, a TM who is not the Lead's manager, a gap in the team links, a deleted team in between, or more than 15 levels. "Same in all departments" depends entirely on the team data being complete up to a TM | `:190-197`, `:163` |
| G3 | Medium | A cycle anywhere before a TM (for example a Senior who is a member of their own team) drops **everyone** above the RM, including valid managers found before the loop | `:193` |
| G4 | Low/Med | A soft-deleted RM returns `[]`, so Lead and Senior get nothing even though they are active (before this change the RM simply got nothing). This is a product decision | `:171` |
| G5 | Low | An employee with no department: the chain is skipped and only the RM is notified | `:152` |
| G6 | Low | A TM of another department in the middle of the chain is notified as a middle manager and the walk continues past them. Might be wanted ("everyone between") | `:191` uses home-department TMs only |
| G7 | Low (existing, now larger) | `resolveTicketDeveloperRm` fallback: on a REPLACE ticket whose new developer has no team RM, the walk switches to the *outgoing* developer's RM and chain. Those people then get "your team member <new dev> assigned" | `:368-372` |
| G8 | Low | `ASSIGNMENT_CREATED` (`POST /assigned-projects`) still notifies only the RM | `project-assignments.service.ts:247` |
| G9 | Info | For DM-role Leads, the in-app "view" link goes to `/my-tickets/:id`. Ticket TEAM scope is direct-reportee PM/CSM projects only, so the link may fail (404 or empty). The RM already has the same behaviour | FE `components/notifications/notificationRedirect.ts:31-37`; BE `allocation-ticket-scope.strategy.ts` TEAM branch |
| G10 | Info | `DEVELOPER_RM_*` events have no `excludeEmployeeId`, so a PMO or TM actor who is in the chain is notified about their own action | `allocation-ticket-notification.service.ts:733-841` |

## 5. How to verify on dev

**Where notifications appear**
- In-app: the bell / Notification Center (`components/notifications/NotificationCenter.tsx`) and the `/notifications` page. Live updates arrive over the socket namespace `/notifications`.
- API, as each recipient: `GET /api/v1/notifications` (paginated, own notifications only; every role has `notifications.read`). Check `eventType` (for example `notification.allocation_ticket.developer_rm_assigned`), `title`, `body`, and `metadata.context.ticketPublicId`. Use login-as / role fixtures to switch between the RM, Lead, Senior, TM, PM and Employee.
- Email: there is no API that shows sent mail. `email.config.ts` controls delivery: `EMAIL_NOTIFICATIONS_ENABLED` (off means suppressed) and `EMAIL_LOCAL_REDIRECT_TO` (all mail goes to one inbox, but logs still name the real recipient). Ask dev ops which applies on dev. `GET /api/v1/sync-queue/jobs?dataType=NOTIFICATION_EMAIL` (needs SCHEDULER read, so Admin) shows each email job's status and `metadata` (the recipient **rules** and eventType, not the resolved addresses). Backend logs show `[EmailProviderService] Mail sent to <email>` for each recipient. Since email uses the same resolver as in-app, in-app is the main proof and email only needs to be spot-checked.
- DB (if you have access): `notifications` table filtered by `recipientId` + `eventType` + `createdAt`.

**Finding a suitable reporting line**
- Employee profile (`/employee/:id`, `GET /api/v1/employees/:publicId`) shows `team.reportingManager`. Open the RM's profile to see *their* RM, and keep going up until you reach someone with the TM role.
- `/team` page and `GET /api/v1/teams?departmentId=<uuid>`: RM columns with their members. `GET /api/v1/teams/reporting-managers?departmentId=` lists all RMs.
- TM holders and their department access: Admin → Assign User Roles (`/roles/user-assignments`). The TM must have **department access** to the employee's department.
- Pick three employees: (A) RM directly under the TM, (B) one person between RM and TM, (C) two or more people between. Also, if possible, (D) a chain that ends without reaching the department TM, and (E) a PM who is also a Lead in some employee's chain.

**Flows**
- NA (fresh): PM `/my-projects/new-allocation` → PMO assigns department → TM shortlists and selects → PMO + TM approve (or PMO bypass) → `DEVELOPER_RM_ASSIGNED`.
- Replacement: same as NA with REPLACE_ALLOCATION. The **new** developer's chain is notified.
- Increase: UPDATE_ALLOCATION, full approval → `DEVELOPER_RM_UPDATED`.
- Decrease: UPDATE_ALLOCATION, lighter flow, PMO acknowledges → `DEVELOPER_RM_UPDATED`.
- Deallocation: CSM submits → confirm dialog → PMO "Acknowledge & Deallocate" → `DEVELOPER_RM_DEALLOCATED`.
- Direct allocation (PMO `/my-tickets/direct-allocation`) → `ALLOCATION_DIRECT_EMPLOYEE_RM_ASSIGNED`. PMO direct update/remove (placeholder tickets) → `DEVELOPER_RM_UPDATED/DEALLOCATED`.
- Revert / cancel upcoming / withdraw scheduled change → `ALLOCATION_REVERTED/CANCELLED/PERIOD_CANCELLED`.
- PR reviewer: assign (ticket), update frequency/dates, remove.

## 6. Draft test cases

Common setup: login-as accounts for PMO, PM, CSM, TM, and the RM/Senior/Lead of the chosen employees. Before each action, note the latest notification time for each person (or mark all as read).

| ID | Title | Setup | Steps | Expected |
|---|---|---|---|---|
| TC-NOTLDR-001 | Employee→RM→TM: recipients unchanged | Employee A (RM reports directly to dept TM) | Fresh NA ticket for A, approved by PMO+TM | RM gets "developer RM assigned"; TM gets its usual copies; nobody else in the line gets anything new |
| TC-NOTLDR-002 | One Lead between RM and TM is notified (fresh allocation) | Employee B (RM→Lead→TM) | NA ticket for B, full approval | Lead gets the same in-app title/body and email as the RM; TM unchanged |
| TC-NOTLDR-003 | Senior and Lead both notified | Employee C (RM→Senior→Lead→TM) | NA ticket for C, full approval | RM, Senior and Lead each get exactly one `developer_rm_assigned` |
| TC-NOTLDR-004 | Nobody above the TM is notified | Employee C; note who the TM's own RM/EM is | Same as 003 | The TM's manager/EM gets no RM copy |
| TC-NOTLDR-005 | PMO bypass reaches middle managers | Employee B | NA ticket, PMO bypasses approval | Lead gets `developer_rm_assigned` (RM copy, no bypass wording); TM gets its bypass-override copy as before |
| TC-NOTLDR-006 | Replacement notifies the new developer's chain | Replace an existing developer with Employee B | REPLACE ticket, approval | B's RM + Lead notified; the outgoing developer's chain gets nothing (behaviour unchanged, note it) |
| TC-NOTLDR-007 | Increase (full flow) | B has an active allocation | UPDATE increase, PMO+TM approve | RM + Lead get `developer_rm_updated` |
| TC-NOTLDR-008 | Decrease (lighter flow) | B has an active allocation | UPDATE decrease, PMO acknowledges | RM + Lead get `developer_rm_updated` |
| TC-NOTLDR-009 | Deallocation via CSM flow | C allocated on a CSM project | CSM submit → confirm → PMO Acknowledge & Deallocate | RM, Senior, Lead get `developer_rm_deallocated`; the email shows the effective end date |
| TC-NOTLDR-010 | PMO direct allocation | Employee C | PMO direct allocation | RM, Senior, Lead get `direct_employee_rm_assigned`; employee and PM copies unchanged |
| TC-NOTLDR-011 | PMO direct update / remove (placeholder tickets) | B allocated | PMO direct update, then direct remove | RM + Lead get `developer_rm_updated`, then `developer_rm_deallocated` |
| TC-NOTLDR-012 | Revert / cancel / withdraw scheduled change | B has a scheduled future change | Revert a period; cancel an upcoming allocation; withdraw a scheduled change | RM + Lead get `allocation_reverted` / `allocation_cancelled` / `period_cancelled` |
| TC-NOTLDR-013 | PR reviewer assign / update / remove | B as PR reviewer candidate | Approve PR-reviewer ticket; change frequency; remove | RM + Lead get `pr_reviewer_rm_assigned`, `pr_reviewer.rm_updated`, `pr_reviewer.rm_deallocated` |
| TC-NOTLDR-014 | Email matches in-app for middle managers | Employee B; email delivery or redirect available | Run 002 | One email to the Lead with the same subject/body as the RM's, greeting with the Lead's name |
| TC-NOTLDR-015 | No duplicate for a PM who is also a Lead (acceptance criteria) | PM P is the Lead in employee X's chain and raises the ticket for X | NA for X, approval | **Per acceptance criteria:** P gets one notification. **Code today:** P gets `pm_allocated` + `developer_rm_assigned` (two). Expect failure (G1) |
| TC-NOTLDR-016 | No duplicate when a Lead is also the assigned-department TM | Multi-department setup where the Lead holds TM for the ticket's assigned department | NA approval | Exactly one `developer_rm_assigned` for that person |
| TC-NOTLDR-017 | RM is the TM | Employee whose RM holds TM for the department | Any covered event | RM/TM gets the usual copies; nobody above is added |
| TC-NOTLDR-018 | Chain does not reach a TM | Employee D whose upward line never hits a TM for D's department | NA approval | Only the RM is notified (by code design). Raise with the PO whether this matches the requirement (G2) |
| TC-NOTLDR-019 | Soft-deleted manager in the chain | Line RM→X(deleted)→Lead→TM (DB/staging data needed) | NA approval | X gets nothing; Lead is still notified |
| TC-NOTLDR-020 | Inactive RM | Employee whose RM is soft-deleted but the team still points to them | NA approval | Code: RM, Senior and Lead all get nothing. Confirm the expected behaviour (G4) |
| TC-NOTLDR-021 | MS Teams group cards unchanged | Teams webhook configured for the department | Run 002 | Teams card content and recipients are the same as before the release; no Lead mentions |
| TC-NOTLDR-022 | Same behaviour in every department | Pick a B-type employee in two or more different departments | NA approval in each | A Lead is notified in each department |
| TC-NOTLDR-023 | Non-allocation RM notifications unchanged | B with a visa or certification expiring, or a notice period starting | Trigger or wait for the nightly job | Only the RM is notified; the Lead is not |
| TC-NOTLDR-024 | Actor exclusion still works in PR-reviewer flows | Acting PM is the Lead in the reviewer's chain | PM changes the reviewer's frequency | The acting PM/Lead gets no `pr_reviewer.rm_updated` about their own change |
| TC-NOTLDR-025 | In-app link for middle managers | Lead (with or without DM role) | Click the notification from 002 | Link is hidden when the user has no ticket-read permission; if shown, record whether the ticket opens (G9) |
