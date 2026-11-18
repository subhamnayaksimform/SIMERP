# QA Ops Dashboard

A local page (http://localhost:4400) that brings together your Zoho work, the To-be-tested queue, the automation suite with its run history, and every generated report.

**Claude is optional.** Everything core runs without it: Zoho sync and status changes, health runs, the test suite, ▶ Run on existing tests, reports and cron. Claude (the Claude Code CLI, with your own login and no API key) is used only for the ✨ actions:

| ✨ Action | Where | What Claude does | Writes to Zoho? |
|---|---|---|---|
| Re-test with Claude | a bug's detail panel, the To-be-tested list, chat | Writes a Playwright re-test at `tests/e2e/retests/<bug>.spec.ts` following the repo conventions, then runs it. The dashboard **re-runs the spec itself** and suggests Closed (fixed) or Reopen (still failing). | Only when you press a status button on the Running tab |
| Testing pipeline | a task with no tests (or *Extend tests*) | Follows the repo's agents: requirements → test cases (each with the task's `taskId`) → Playwright automation. You pick the test types and can add free-text instructions. The new tests then run. | No |
| Update module tests | Test suite card ✨ | Adds or updates a module's cases and specs from your instructions | No |
| Improve with Claude | any New bug form | Rewrites the title and description into the bug format; you review it before sending | Only after your usual confirm |
| Assistant (💬 Ask) | every page | Answers from a snapshot of the dashboard's data plus the repo's test files. To *do* something it shows action buttons, and each one goes through the normal confirm dialog. It has no network, shell or Zoho access. | Only via a button you click |

Each Claude job shows its cost (about $0.25–1 for small jobs). `npm run ops:check-deps` checks that only `scripts/ops/ai.ts` and `scripts/ops/activity-run.ts` can start Claude.

## Start / stop

```bash
npm run ops            # start in the background and open the browser
npm run ops:status     # is it running?
npm run ops:stop       # stop it (cron jobs keep running)
npm run ops:dev        # foreground, for working on ops-dashboard/ itself
```

## Pages

Every number, chart segment, bar and list item is clickable and opens the page, item or report behind it. A task or bug opens in a **detail panel** with these tabs: Overview (hours: baseline planned, logged by everyone, logged by me), Tests, Linked bugs/tasks (each with its own status control), Comments and Attachments. Reports open **inside the dashboard**; *Open in new tab* is optional. Test cases open in a case viewer showing steps, expected result, linked tasks and recent results.

| Page | What it shows | What you can do |
|---|---|---|
| Running | Every test run and Claude job: live status, log, results, failure screenshots, cost | Stop, open the item, approve the suggested status after a re-test |
| Overview | Tiles for To be tested, My open tasks, Open bugs, Health report and Test suite. Charts: pending to-be-tested tasks and issues over time (one point per sync), system health (pass rate per health run, API response time), open bugs by status and by assignee. Plus re-test readiness and a live feed | Click anything to open it with that filter applied |
| To be tested | Every Zoho task and bug in "To be tested", for all assignees. Each one shows its linked test modules (`TC-<CODE>`) with a ring for the last run's pass rate | Link or unlink test modules, **▶ Run** a module's tests through the QA Workspace, QA Approve / Close or Send back / Reopen, Report bug (pre-filled from a failed test) |
| Test suite | Every module in the suite: last-run pass rate (ring), pass-rate trend, case count, and how long since it last ran. Sort by group, lowest pass rate, most cases, or oldest run | ▶ Run a module (no Claude), open its details (recent runs, tests failing in the last report, searchable test cases), open its last report |
| Task ↔ tests | Every Zoho task or bug that past test work was done for: its exact linked test cases per module, how many are automated, the result of the newest run that covered them, plus its docs and reports. Also lists test cases written from documents rather than a Zoho task | Filter (To be tested, open, closed, bugs, mine, not in Zoho), see the case IDs and why they're linked, ▶ Run the module, assign a document source to its task. **My work** and **Bugs** get a *Tests* column that links here |
| Runs & reports | Pass rate per run over time (1M/3M/All), tests that failed most across the last 25 runs (marked flaky or always failing), and every QA report and pipeline report | Open any report in a new tab |
| My work | Tasks where I am an owner, with hours (baseline planned, mine, everyone's), linked tests and linked bugs. Includes an hours summary | Search and filter, change a task's status, open details, run tests or the testing pipeline, create a task |
| Bugs | Reported by me / Assigned to me / All, with the linked task and tests | Filter by status, severity and assignee, change status, open details, re-test with Claude, create a bug |
| Health | Status, deployed version, API checks, regression results and API availability. Charts: passed vs failed per health run, API response time, failures by module. Plus a timeline of deploys and health runs | ▶ Run health check (API checks and/or the regression suite), pick a run to see its failures, **Report to Zoho** on any failure (pre-filled bug, with a duplicate warning) |
| Activity | The sync log and everything sent to Zoho from the dashboard | — |

Before anything is sent to Zoho, the dashboard shows exactly which fields will be sent and waits for you to press **Send to Zoho**. Every send is recorded in `reports/ops/data/actions-log.json`. Bugs are created on their own, not linked to a task.

## Health: what runs after a deploy

The **deploy watcher** (`scripts/ops/deploy-watch.ts`) runs from cron every 10 minutes. On each run it:
1. calls `GET /api/v1/health-check` on the API and records whether it's up, how long it took, the `X-API-Version` and the uptime
2. loads the frontend and fingerprints its asset file names

It decides a **deploy** happened when the API version changes, the API uptime resets (a restart), or the frontend build changes. It then starts a **health run** (`scripts/ops/health-check.ts`), which runs:
- **the API checks** in `tests/e2e/health/api-health.spec.ts` (`TC-APIH-*`, tag `@api-health`, about 1 minute):
  - health-check and its version header
  - 401 when there's no session
  - 20 core read endpoints, each returning 200 JSON within `API_HEALTH_SLOW_MS` (5 s)
  - role checks: Employee gets 403 on employees, PM gets 403 on roles, Admin gets 200 on roles
- **the regression suite**: every `@regression` test (221 UI tests).

Both are plain Playwright with the normal global-setup login. A health run waits while a QA Workspace test run is in progress, so the two never share the same logins. Summaries are written to `reports/ops/health/runs/` and failure screenshots to `reports/ops/health/artifacts/`, which keeps the last 40 runs.

```bash
npm run ops:watch                                   # probe once (what cron does)
npm run ops:health -- --env=dev --suites=api        # API checks only
npm run ops:health -- --env=dev                     # API checks + regression suite
```

Health runs work on **dev** only, because the saved role logins are dev accounts. To have staging or local probed for uptime, version and response time, set `OPS_STAGING_URL`/`OPS_STAGING_API_URL` or `OPS_LOCAL_URL`/`OPS_LOCAL_API_URL`.

**Report to Zoho** fills in a bug from a fixed template: environment, version, check, endpoint and HTTP status, error, steps to reproduce, and the screenshot path. It warns you if an open bug already mentions the test ID. As usual, nothing is sent until you confirm. Screenshots have to be attached in Zoho by hand, because Zoho's file upload doesn't work through the API.

## Where the suite data comes from

All of it is read-only and rule-based:
- **Modules and test cases:** the QA Workspace index (`ui/indexer.ts`).
- **Runs:** QA Workspace run history (`reports/ui-history/history.json`) plus every `reports/html/qa-report-*.html`. Each QA report carries its results as `REPORT_DATA`. A workspace run and the QA report made from it are merged into one run.
- **A module's "last run"** is its newest run that covered at least 25% of its biggest run. This is the same rule the QA Workspace uses.
- **Pipeline reports:** the stat tiles in `reports/html/pipeline-report-*.html`.
- **Cache:** parsed summaries are kept in `reports/ops/data/reports-index.json` and refreshed when a report file changes.

## How past tests are linked to tasks

`scripts/ops/task-links.ts` reads all past work. The rules are fixed; no AI is involved. It uses these sources, strongest first:
1. **Test cases written for the task.** Each case in `reports/test-cases/*.json` has a `taskId`: either a Zoho ID such as `688906000094274428`, or text such as `SI4-T1267 / SI4-T1446`. This is case-level and covers about 1,600 cases.
2. **Tests tagged with the key** (for example `@T1549`) inside a QA report.
3. **Files named after the task:** test-case docs, findings and QA reports, such as `…-t1549-retest.md` or `qa-report-t1527-retest.html`. The `TC-` IDs inside them are linked.
4. **A requirements JSON** whose `taskId` matches the task. This links the whole module.
5. **Manual links** added on the dashboard or in the QA Workspace. These also link the whole module.

A file that only *mentions* a task among many others shows as "also mentioned in" and never counts as a test link. Bugs (`SI4-I…`) are linked the same way as tasks.

- **Last result:** the newest QA report that ran at least 25% of the task's own cases, best coverage first.
- **Keys not in Zoho:** keys that don't exist in the SimERP Zoho project (T1559, T1527, T1525, T1464, T1380) stay linked and are marked "not in Zoho". They're probably in another project or were deleted.
- **Document sources:** cases written from a document (`DOC-…`, `FRD-…`) are listed separately. Pick the task each belongs to once; the choice is saved in `reports/ops/data/source-links.json`.

## How To-be-tested items find their tests

The rules are fixed; no AI is involved. They are checked in this order:
1. **Links you add on the card.** These are saved in the QA Workspace's `reports/ui-history/task-links.json`, so both apps show them.
2. **Links from an analysed requirement** in the QA Workspace.
3. **QA reports with tests tagged with the key** (for example `@T1549`).
4. **Docs and specs that mention the item key** (for example `SI4-T1549` or `T1549`). The module codes come from the `TC-<CODE>` IDs inside those files.

Modules whose name shares a word with the item's title are shown as **suggestions** only.

**No suite yet?** A task card offers **✨ Generate tests with Claude**:
- The dialog first checks that Claude is available, using the QA Workspace's own setup check.
- It then starts the workspace's `new-requirement` pipeline for that Zoho task, with automation turned on by default.
- When the job finishes, the new `TC-<CODE>` module is linked to the task, so **▶ Run** works straight away.

Bugs can't go through the pipeline because it reads Zoho *tasks*. For a bug, link a module by hand.

**▶ Run** sends a `run-tests` job for that module to the QA Workspace on http://localhost:4321, starting the workspace first if it's off. That gives both apps one job runner, one run history and one set of reports. The QA Workspace runs one job at a time.

## Bug ↔ task links, hours, subtasks

- **Bug ↔ task links:** a bug is linked to a task when its title or description names the task, for example "Task: SI4-T1549". The reverse also works. Zoho's formal bug association can't be read through its REST API.
- **Hours:**
  - *baseline planned* comes from `owners_and_work.total_work`
  - *logged by everyone* comes from `log_hours`
  - *logged by me* is your own time logs from the last 6 months (v1 `/logs/`)
- **Subtasks:** these are included, and each one records its parent.

## Test types

Every ▶ Run dialog lets you choose the test types: smoke, functional, negative, boundary, regression, security, a11y or integration. Leave them all unticked to run every type. You can run a task's own linked cases or its whole module. Runs go through the dashboard's own runner, one at a time: it shares the slot with health runs and waits for QA Workspace jobs.

## Cron: sync every 2 hours, deploy watch every 10 minutes

```bash
npm run ops:sync                     # sync once now (same as "Sync now" on the page)
npm run ops:cron:install             # show the crontab block that would be added
npm run ops:cron:install -- --yes    # add it; the rest of your crontab is kept
npm run ops:cron:status
npm run ops:cron:uninstall
```

- To change the schedule, set `OPS_SYNC_CRON` in `.env` (for example `0 */1 * * *`) and run install again.
- Each job runs under `flock`, so a slow run is never overlapped by the next one.
- Logs go to `reports/ops/logs/`.

## Files

- `scripts/lib/zoho-rest.ts`: the Zoho REST client. It handles the token cache, the 18-digit IDs, and the form-encoded writes.
- `scripts/ops/sync-zoho.ts`: pulls tasks and bugs into `reports/ops/data/work.json` and records the changes in `sync-log.json`.
- `scripts/ops/ops-cron.ts`: the crontab installer.
- `scripts/ops/check-deps.js`: `npm run ops:check-deps` fails if any dashboard file imports Claude, AI or MCP code.
- `ops-dashboard/`: `server.ts` (localhost-only HTTP server), `launch.js` (start/stop), and `public/` (the page).

## When something breaks

- **"Token refresh failed" / OAuth errors:** run `npm run zoho:reauth -- <grant-code>`. Generate the code in the Zoho API Console under Self Client.
- **Status change says "Zoho kept the status as …":** Zoho rejected the change (for example because of a workflow rule). Change it in Zoho itself.
