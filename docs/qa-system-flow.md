# QA system flow

How the QA system fits together: what runs, what depends on what, and how a Zoho task becomes a test result and a closed task. Diagrams are Mermaid (render on GitHub and in the published Artifact page). Edit `scripts` or this file when the process changes.

Legend: amber = you decide or approve, blue = runs by itself, green = stored data, purple = outside system, dashed grey = optional, uses Claude.

## 1. The whole system on one screen

Read it from the top down. Things come in at the top, get turned into test cases, then tests, then results, and the results end up as reports and bug reports at the bottom.

![Whole system](qa-system-flow-overview.svg)

Bugs go back to Zoho. Past bugs are saved as 'bug memory', so the next set of test cases already knows what went wrong before.

## 2. How a task is handled

This is what happens from the moment a developer says a task is ready until it is closed. The amber boxes are your decisions. Nothing reaches Zoho until you see exactly what will be sent and press Send to Zoho.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontFamily":"IBM Plex Sans, system-ui, sans-serif","fontSize":"15px","lineColor":"#6b7488","primaryTextColor":"#1c2230","edgeLabelBackground":"#ffffff"}}}%%
flowchart TD
  A["Zoho task or bug<br/>assigned to a developer"]:::ext
  B["Developer fixes it and<br/>sets status To be tested"]:::ext
  C["Auto-sync every 2 hours<br/>pulls in tasks and bugs"]:::auto
  Q["Your dashboard list<br/>everything in To be tested"]:::auto
  L["Matching tests<br/>and their last pass rate"]:::data
  T{"Tests exist<br/>for it?"}
  F["Write new tests<br/>Claude helps, costs tokens"]:::ai
  E["Run the tests<br/>no Claude, no tokens"]:::auto
  H["Results and screenshots<br/>shown on the dashboard"]:::data
  P{"Passed?"}
  J["Suggested status: Closed<br/>YOU approve"]:::human
  K["YOU decide: real bug, not a bug,<br/>or already known and ignored"]:::human
  O["Bug drafted from the template<br/>filed on its own or linked, your choice"]:::human
  S["Assignee rule: backend Hardik,<br/>frontend Parshva. Screenshots by hand"]:::human
  M["Dashboard shows the exact fields<br/>you press Send to Zoho"]:::human
  N["Zoho updated<br/>and the change is logged"]:::auto
  A --> B --> C --> Q --> L --> T
  T -->|"yes"| E
  T -->|"no"| F --> E
  E --> H --> P
  P -->|"yes"| J --> M
  P -->|"no"| K -->|"real bug"| O --> S --> M
  K -->|"not a bug"| M
  M --> N
  N -.->|"developer fixes, sets To be tested again"| B

  classDef human fill:#fde7b0,stroke:#b4540a,stroke-width:2px,color:#1c2230,rx:8,ry:8
  classDef auto fill:#dfeaf7,stroke:#3d6b8f,color:#1c2230,rx:8,ry:8
  classDef ext fill:#e6e0f7,stroke:#4b3fb5,color:#1c2230,rx:8,ry:8
  classDef data fill:#e1f0e3,stroke:#2f6b3a,color:#1c2230,rx:8,ry:8
  classDef ai fill:#f4f4f4,stroke:#6b7280,stroke-dasharray:5 3,color:#1c2230,rx:8,ry:8
  class T,P decision
  classDef decision fill:#ffffff,stroke:#6b7280,stroke-width:2px,color:#1c2230
```

Zoho status names other than To be tested, Closed and Not a Bug are the usual Zoho flow. To confirm in Zoho.

## 3. From a requirement to a report

The steps run in order. At each step you choose which earlier file to use, so it never quietly picks the newest one. The dashed boxes are shortcuts if you only want part of the steps.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontFamily":"IBM Plex Sans, system-ui, sans-serif","fontSize":"15px","lineColor":"#6b7488","primaryTextColor":"#1c2230","edgeLabelBackground":"#ffffff"}}}%%
flowchart TD
  KS["Refresh bug memory<br/>optional"]:::auto
  ZT["Fetch Zoho tasks<br/>or a feature description"]:::ext
  RA["Read the requirement<br/>adds past problems"]:::auto
  TG["Write test cases<br/>each gets a new ID<br/>saved as files and Excel"]:::auto
  CK{"Safety check<br/>any case lost or ID reused?"}
  WN["Big warning shown,<br/>the run continues"]:::human
  AG["Write automated tests<br/>then check the code builds"]:::auto
  TR["Run the tests<br/>logs in first"]:::auto
  BR["Draft bug reports<br/>from the failures"]:::human
  PR["Final report<br/>one HTML page"]:::data
  KS --> RA
  ZT --> RA --> TG --> CK
  CK -->|"ok, new cases recorded"| AG
  CK -->|"problem"| WN
  AG --> TR --> PR
  TR -->|"failures"| BR --> PR
  E1["Shortcut: write and run together"]:::ai -.-> AG
  E2["Shortcut: run existing tests"]:::ai -.-> TR
  E3["Shortcut: start from saved test cases"]:::ai -.-> AG

  classDef human fill:#fde7b0,stroke:#b4540a,stroke-width:2px,color:#1c2230,rx:8,ry:8
  classDef auto fill:#dfeaf7,stroke:#3d6b8f,color:#1c2230,rx:8,ry:8
  classDef ext fill:#e6e0f7,stroke:#4b3fb5,color:#1c2230,rx:8,ry:8
  classDef data fill:#e1f0e3,stroke:#2f6b3a,color:#1c2230,rx:8,ry:8
  classDef ai fill:#f4f4f4,stroke:#6b7280,stroke-dasharray:5 3,color:#1c2230,rx:8,ry:8
  class CK decision
  classDef decision fill:#ffffff,stroke:#6b7280,stroke-width:2px,color:#1c2230
```

The safety check only warns. It never stops the run.

## 4. What runs on its own

Two timers keep Zoho data fresh and notice when the app is updated. Claude is only used when you press a sparkle button or use the QA Workspace, and it always uses your own login.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontFamily":"IBM Plex Sans, system-ui, sans-serif","fontSize":"15px","lineColor":"#6b7488","primaryTextColor":"#1c2230","edgeLabelBackground":"#ffffff"}}}%%
flowchart TD
  CR["Timer on this computer (cron)"]:::auto
  SY["Zoho sync<br/>saves tasks and bugs locally"]:::auto
  DW["Deploy watcher<br/>checks if the app was updated"]:::auto
  DC{"Was the app<br/>updated or restarted?"}
  HC["After-deploy check<br/>quick API checks + 221 key tests"]:::auto
  OD["Ops Dashboard (port 4400)<br/>never uses Claude, a check enforces it"]:::auto
  WS["QA Workspace (port 4321)<br/>run tests, write test cases<br/>jobs keep going if it restarts"]:::auto
  CL["Claude<br/>your own login, costs tokens"]:::ai
  ZO["Zoho Projects"]:::ext
  DV["SimERP dev"]:::ext
  CR -->|"every 2 hours"| SY
  CR -->|"every 10 minutes"| DW
  ZO -->|"reads"| SY
  DV -->|"probe"| DW
  DW --> DC
  DC -->|"yes"| HC
  DC -->|"no"| DW
  HC -->|"summary and artifacts"| OD
  SY --> OD
  OD -->|"Send to Zoho only after you confirm"| ZO
  OD -.->|"sparkle actions and assistant"| CL
  WS -.->|"writing test cases"| CL
  WS -->|"test runs"| DV
  HC -.->|"waits if a Workspace run is active<br/>they share the same logins"| WS

  classDef human fill:#fde7b0,stroke:#b4540a,stroke-width:2px,color:#1c2230,rx:8,ry:8
  classDef auto fill:#dfeaf7,stroke:#3d6b8f,color:#1c2230,rx:8,ry:8
  classDef ext fill:#e6e0f7,stroke:#4b3fb5,color:#1c2230,rx:8,ry:8
  classDef data fill:#e1f0e3,stroke:#2f6b3a,color:#1c2230,rx:8,ry:8
  classDef ai fill:#f4f4f4,stroke:#6b7280,stroke-dasharray:5 3,color:#1c2230,rx:8,ry:8
  class DC decision
  classDef decision fill:#ffffff,stroke:#6b7280,stroke-width:2px,color:#1c2230
```

No tokens are used by: the Zoho sync, the deploy watcher, the after-deploy check, running tests, or the case commands. Tokens are used by: the sparkle buttons, the assistant, 'New requirement', and this chat.

## 5. Keeping old test cases honest

Test cases get old when the app changes. Nothing is ever deleted: a case is marked when it passes, flagged when its feature changes, and only retired with a reason.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontFamily":"IBM Plex Sans, system-ui, sans-serif","fontSize":"15px","lineColor":"#6b7488","primaryTextColor":"#1c2230","edgeLabelBackground":"#ffffff"}}}%%
flowchart TD
  NX["Get a free ID<br/>new cases get new IDs"]:::auto
  NC["New or changed cases written"]:::data
  CK["Safety check<br/>fails if a case is lost<br/>or an ID is reused"]:::auto
  SN["Save a list<br/>of every case seen"]:::data
  RUN["A test run"]:::auto
  FR["After a run<br/>passed cases get verified today"]:::auto
  LG["Case history<br/>who, when, why"]:::data
  ST["Review list<br/>A likely outdated, B maybe,<br/>C not run lately"]:::auto
  RV["YOU review each flagged case"]:::human
  MK["Mark it<br/>still valid or needs rework"]:::human
  RT["Retire it<br/>needs a reason, and a replacement<br/>for important cases"]:::human
  KP["The case is kept,<br/>just marked retired"]:::data
  NX --> NC --> CK -->|"ok"| SN
  RUN --> FR --> LG
  LG --> ST
  AP["App changes and<br/>module list"]:::ext -->|"what changed, old names"| ST
  ST --> RV
  RV -->|"still valid"| MK --> LG
  RV -->|"no longer applies"| RT --> LG
  RT --> KP

  classDef human fill:#fde7b0,stroke:#b4540a,stroke-width:2px,color:#1c2230,rx:8,ry:8
  classDef auto fill:#dfeaf7,stroke:#3d6b8f,color:#1c2230,rx:8,ry:8
  classDef ext fill:#e6e0f7,stroke:#4b3fb5,color:#1c2230,rx:8,ry:8
  classDef data fill:#e1f0e3,stroke:#2f6b3a,color:#1c2230,rx:8,ry:8
  classDef ai fill:#f4f4f4,stroke:#6b7280,stroke-dasharray:5 3,color:#1c2230,rx:8,ry:8
  classDef decision fill:#ffffff,stroke:#6b7280,stroke-width:2px,color:#1c2230
```

After every test run, mark the passed cases as verified so they stop showing as 'not run lately'.

## 0. The short version

1. A developer finishes a task and sets it to To be tested in Zoho.
2. It appears on your dashboard (a timer pulls it in every 2 hours).
3. The tests run. If there are none, Claude can help write them.
4. You decide: fixed, a real bug, or not a bug.
5. You press Send to Zoho. A real bug goes back to the developer and the loop starts again.

## 6. What depends on what

| Piece | Needs | Needed by | If it is missing or broken |
| --- | --- | --- | --- |
| Zoho login token (.env) | A Zoho Self Client login that still works | Task and bug sync, the To-be-tested queue, bug filing, task fetch | Sync logs ok:false and exits quietly, so data goes stale without any alert. Fix: npm run zoho:reauth |
| SimERP dev site and API | A working dev deploy | Every test, every health run | Runs fail. deploy-watch notes a deploy that happened while dev was down and starts the health run when it is back |
| Saved role logins (global-setup) | Valid dev accounts in .env; a session is reused for up to 72 hours and checked with a live request | Every spec, every role | Re-logs in by itself. If auto-login fails a browser window waits for a person, so a run can hang at login |
| Knowledge base | Zoho bugs (kb:update) and past analyses | Requirement analyzer, case generator | Cases are still produced but lose known edge cases from past bugs |
| Case IDs and the snapshot | IDs that are never reused | Specs, reports, Excel, the lifecycle ledger | A reused ID silently overwrote older cases in 'newest file wins' reports. cases:check now fails on it |
| Module registry | Current names, routes, old names, app code folders | Stale review, renames | Old names are not detected; code-change signals fall back to age only |
| App repos next to this one | A local copy of the backend and frontend (SIMERP DEV) | Stale review, reading task commits as the spec for empty Zoho tasks | Only age and naming are used. Commits may be out of date until fetched |
| Timer on this computer (cron) | The computer being on | Zoho sync (2 h), deploy-watch (10 min) | Nothing runs and nothing catches up while it is off |
| One job at a time | Shared logins and a single queue | QA Workspace runs, health runs, Ops Dashboard runs | A second job waits for the first. Health runs wait for Workspace runs |
| Claude Code CLI | Your own Claude login (no API key) | Only the sparkle actions, assistant, pipeline AI steps, 'New requirement' | Everything else still works. Core Ops Dashboard has no Claude code at all |
| You and the QA lead | Decisions | Anything sent to Zoho, real allocations on dev, what counts as a bug | Nothing external happens without your OK. Rulings (not a bug, ignore) are kept so they are not raised again |

## 7. A real example: the interview re-test on 2 November

One real task, with the steps that were actually taken.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontFamily":"IBM Plex Sans, system-ui, sans-serif","fontSize":"15px","lineColor":"#6b7488","primaryTextColor":"#1c2230","edgeLabelBackground":"#ffffff"}}}%%
flowchart TD
  S1["29 Oct - 2 Nov<br/>Tasks T1267 and T1446<br/>merged: release, close,<br/>pills, stats"]:::ext
  S2["2 Nov morning<br/>Dev deploy build 448 failed<br/>unit tests used past dates"]:::ext
  S3["PR 613 fixes the tests<br/>build 449 goes live"]:::ext
  S4["Check the build is live<br/>uptime reset, new routes answer"]:::auto
  S5["Your 14-section list<br/>turned into 61 cases with steps"]:::data
  S6["API checks first,<br/>screen checks for visuals"]:::auto
  S7["53 pass, 8 fail<br/>QA report page published"]:::data
  S8["7 bugs written up<br/>BUG-049 to BUG-055"]:::human
  S9["You said file them<br/>SI4-I625 to SI4-I631"]:::human
  S10["Linked: front end to T1446,<br/>back end to T1267"]:::ext
  S11["Passed cases marked<br/>verified on 6.8.0"]:::auto
  S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8 --> S9 --> S10
  S7 --> S11

  classDef human fill:#fde7b0,stroke:#b4540a,stroke-width:2px,color:#1c2230,rx:8,ry:8
  classDef auto fill:#dfeaf7,stroke:#3d6b8f,color:#1c2230,rx:8,ry:8
  classDef ext fill:#e6e0f7,stroke:#4b3fb5,color:#1c2230,rx:8,ry:8
  classDef data fill:#e1f0e3,stroke:#2f6b3a,color:#1c2230,rx:8,ry:8
  classDef ai fill:#f4f4f4,stroke:#6b7280,stroke-dasharray:5 3,color:#1c2230,rx:8,ry:8
  classDef decision fill:#ffffff,stroke:#6b7280,stroke-width:2px,color:#1c2230
```

61 test cases, 53 passed, 7 bugs filed (SI4-I625 to SI4-I631).


## Words used here

- **To be tested**: The Zoho status that means a developer says the work is ready for QA.
- **Test case**: One written check, for example: release a candidate and see that the seat is freed.
- **Automated test**: A test case turned into a script that clicks through the app by itself.
- **After-deploy check**: Quick tests that start by themselves when the app is updated.
- **Bug memory**: A saved list of problems found before, so new test cases cover them.
- **Case history**: The record of when each test case last passed, and which ones were retired.
- **Token**: What AI services charge by. Using Claude costs tokens. The sync, the tests and the case commands do not.
- **Pipeline**: The steps in order, from a requirement to a report.
- **Cron**: A timer on this computer that starts a job on a schedule.