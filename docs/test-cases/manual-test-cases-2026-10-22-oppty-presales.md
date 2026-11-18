# Pre-sales Opportunities — Detailed Manual Test Cases

**Module:** Opportunity Allocation (Interview & Direct) · **Environment:** SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026  
**Source:** FRD *SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0* + Interview Flow change list; results from the live run of 21–22 Oct 2026  
**Total:** 141 test cases · retest 26 Oct 2026 on the build with the 26 Oct fixes: Pass 114 · Fail 5 · Needs clarification 1 · Not built 6 · As designed 5 · Pending decision 5 · Not required 1 · Ignored 1 · Retired 1 · Not run 2  
**Status legend:** Pass / Fail = retested 26 Oct · Not built = feature not built yet (dev response 26 Oct) · As designed = behaviour confirmed as a decision, test expectation updated · Pending decision = waiting for product (FRD vs Figma) · Retired = field removed, case no longer applies · Not run = not re-verified on screen · Needs clarification = question open with QA lead/product · Not required / Ignored = closed by QA lead (26 Oct).  
**Coverage notes:** Results come from the live run (API + UI). Steps marked "(API)" are checked with a logged-in session against the REST API; all other steps are UI steps. Exact icon/button names for approve/reject/bypass actions are described by function where the label was not captured. Bugs: [2026-10-22-presales-opportunities-bug-reports.md](../findings/2026-10-22-presales-opportunities-bug-reports.md). Automated check log (436 checks): [test-cases-2026-10-21-oppty-presales-e2e.md](test-cases-2026-10-21-oppty-presales-e2e.md).

## Test accounts (password from `.env`)

| Role | Account |
|---|---|
| PMO | bhumi.chauhan@ (second PMO: vihaan.chatterjee@) |
| Admin | ceo@ |
| TM (QA dept) | sudhansu.patel@ |
| TM (JAVA dept) | mehul.pandya@ |
| EM | kunal.jadeja@ |
| RM | deepak.rao@ |
| PM | gaurav.panchal@ (manages EventDriven \| CQRS Framework) |
| CSM | tarun.sharma@ (manages AnalytixHub, ElitePay); second CSM sai.gandhi@ |
| Employee | kashyap.patel@ |
| Candidates | janki.naik@, vandana.mishra@, akash.singh@ (QA); siddharth.iyer@, aditi.reddy@, akash.pandya@ (JAVA) |

## Summary by module (retest 26 Oct)

| Module | Cases | Pass | Fail | Needs clarification | Not built | As designed | Pending decision | Not required | Ignored | Retired | Not run |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| M01 Access & Navigation | 15 | 12 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| M02 Create Opportunity — Client & Opportunity details | 13 | 12 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| M03 Create Opportunity — Position fields | 14 | 11 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| M04 Create Opportunity — Direct | 6 | 4 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| M05 Board — list, Kanban, filters, tiles | 10 | 8 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| M06 Opportunity detail & editing | 9 | 8 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| M07 Shortlisting | 10 | 9 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| M08 TM approval & bypass | 7 | 5 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| M09 Reject, stage moves & interview rounds | 8 | 6 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| M10 Preparation checklist & material | 8 | 7 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| M11 Won, allocation & cross-module integration | 10 | 8 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 |
| M12 Opportunity status lifecycle | 7 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M13 Direct ticket lifecycle & cancellation | 8 | 7 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| M14 Notifications | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M15 Security | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| M16 Retest additions (26 Oct 2026) | 10 | 5 | 3 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |

## Index

| ID | Title | Type | Priority | 22 Oct | Retest 26 Oct | Bug |
|---|---|---|---|---|---|---|
| [TC-OPPM-001](#tc-oppm-001) | PMO sees Opportunity Allocation and the New Opportunities button | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-002](#tc-oppm-002) | Admin can open the board; New Opportunities button is NOT visible | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-003](#tc-oppm-003) | TM can open the board; New Opportunities button is NOT visible | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-004](#tc-oppm-004) | EM can open the board; New Opportunities button is NOT visible | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-005](#tc-oppm-005) | RM can open the board; New Opportunities button is NOT visible | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-006](#tc-oppm-006) | CSM can open the board; New Opportunities button is visible | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-007](#tc-oppm-007) | PM has no board but can reach the Create form by URL | Negative | High | ❌ Fail | ⏳ Pending decision | BUG-001 |
| [TC-OPPM-008](#tc-oppm-008) | PM can find the opportunities assigned to them | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-009](#tc-oppm-009) | PM tracks Direct opportunities raised on his project | Positive | High | ❌ Fail | ❓ Needs clarification | BUG-033 |
| [TC-OPPM-010](#tc-oppm-010) | PM opens an assigned opportunity read-only | Positive | Medium | ❌ Fail | ✅ Pass | BUG-031 |
| [TC-OPPM-011](#tc-oppm-011) | PM loses access when re-assigned | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-012](#tc-oppm-012) | Employee (not a candidate) has no access | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-013](#tc-oppm-013) | My / Team Opportunity tabs only for TM and RM | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-014](#tc-oppm-014) | View-only banner for non-PMO roles, including Admin | Positive | Low | ❌ Fail | ☑️ As designed | BUG-022 |
| [TC-OPPM-015](#tc-oppm-015) | Only PMO can drag Kanban cards | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-016](#tc-oppm-016) | Request type and client type are mandatory before the rest of the form unlocks | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-017](#tc-oppm-017) | Create a minimal Interview / Prospect opportunity (happy path) | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-018](#tc-oppm-018) | Existing Client requires picking a Zoho project for PM/CSM, optional for PMO | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-019](#tc-oppm-019) | CSM cannot link a project they do not manage | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-020](#tc-oppm-020) | Prospect opportunity must not carry a linked project | Negative | Medium | ❌ Fail | ✅ Pass | BUG-015 |
| [TC-OPPM-021](#tc-oppm-021) | Opportunity Title: required, trimmed, max 200 characters | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-022](#tc-oppm-022) | Client / Company Name: required, trimmed, max 200 characters | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-023](#tc-oppm-023) | Website / LinkedIn / Interviewer LinkedIn URL validation | Negative | Medium | ❌ Fail | ✅ Pass | BUG-028 |
| [TC-OPPM-024](#tc-oppm-024) | Long text fields: Prospect notes, Special Instructions (4,096), Prospect contact (200) | Edge Case | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-025](#tc-oppm-025) | Job Description rich text is sanitised | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-026](#tc-oppm-026) | Potential Duplicate notice for an existing title | Positive | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-027](#tc-oppm-027) | Assign to PM / Assign to CSM | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-028](#tc-oppm-028) | Raiser matrix — who may create which ticket (FRD rule 3) | Negative | High | ❌ Fail | ⏳ Pending decision | BUG-001 |
| [TC-OPPM-029](#tc-oppm-029) | Empty submit shows a message on every missing required field | Negative | Medium | ❌ Fail | ❌ Fail | BUG-028 |
| [TC-OPPM-030](#tc-oppm-030) | Position Title: required, max 200 | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-031](#tc-oppm-031) | Tech Stack: at least one, each ≤100 chars, no blank or duplicate values | Edge Case | Medium | ❌ Fail | ✅ Pass | BUG-019 |
| [TC-OPPM-032](#tc-oppm-032) | Department: at least one; multiple departments allowed | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-033](#tc-oppm-033) | Number of Openings: 1–20, whole numbers only | Edge Case | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-034](#tc-oppm-034) | Priority and Preferred Seniority are mandatory for Interview positions | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-035](#tc-oppm-035) | Allocation Mode Fixed needs a whole 1–100 %; Dynamic needs none | Edge Case | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-036](#tc-oppm-036) | Tentative allocation / interview dates are sensible | Edge Case | Medium | ❌ Fail | ✅ Pass | BUG-018 |
| [TC-OPPM-037](#tc-oppm-037) | Interview Required = No on an Interview opportunity | Negative | Medium | ❌ Fail | 🗄 Retired | BUG-015 |
| [TC-OPPM-038](#tc-oppm-038) | Interview rounds: 0–50 planned, titles optional (default Round N) | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-039](#tc-oppm-039) | Preparation Material rows | Positive | Medium | ❌ Fail | ☑️ As designed | BUG-024 |
| [TC-OPPM-040](#tc-oppm-040) | Location preference block rules | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-041](#tc-oppm-041) | Multiple positions: New Position, Duplicate, Remove; seat numbers unique | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-042](#tc-oppm-042) | "Client Facing" field is removed (FRD change list) | Positive | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-043](#tc-oppm-043) | Create a Direct ticket for one employee (happy path) | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-044](#tc-oppm-044) | Direct ticket needs employee and tentative allocation date | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-045](#tc-oppm-045) | Direct ticket refuses interview-only fields | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-046](#tc-oppm-046) | Several employees in one Direct request (FRD: one row per employee → one ticket per row) | Positive | Medium | ❌ Fail | ⏳ Pending decision | BUG-013 |
| [TC-OPPM-047](#tc-oppm-047) | Direct priority is derived from the tentative allocation date | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-048](#tc-oppm-048) | PM raises a Direct ticket | Negative | High | ❌ Fail | ⏳ Pending decision | BUG-001 |
| [TC-OPPM-049](#tc-oppm-049) | Kanban columns and order | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-050](#tc-oppm-050) | Summary tiles reconcile with the board | Positive | Medium | ❌ Fail | ✅ Pass | BUG-031 |
| [TC-OPPM-051](#tc-oppm-051) | Readable ticket ID shown on the list | Positive | Medium | ❌ Fail | ☑️ As designed | BUG-016 |
| [TC-OPPM-052](#tc-oppm-052) | Search by ticket, title, client, position, candidate | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-053](#tc-oppm-053) | Lost / No Longer Required hidden by default; NLR highlighted | Positive | Medium | ❌ Fail | ✅ Pass | BUG-029 |
| [TC-OPPM-054](#tc-oppm-054) | Created-date range filter presets | Positive | Low | ❌ Fail | 🚧 Not built | BUG-027 |
| [TC-OPPM-055](#tc-oppm-055) | Advanced filter (client type, priority, client, prospect, department, project, status) | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-056](#tc-oppm-056) | Interview vs Direct switch keeps the boards separate | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-057](#tc-oppm-057) | Empty values use a readable placeholder | Positive | Low | ❌ Fail | ✅ Pass | BUG-031 |
| [TC-OPPM-058](#tc-oppm-058) | Department scope on the board | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-059](#tc-oppm-059) | Detail page shows the full ticket information | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-060](#tc-oppm-060) | Edit a single position in a side drawer | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-061](#tc-oppm-061) | Position allocation fields lock once a candidate is in the pipeline | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-062](#tc-oppm-062) | Change Number of Openings on an existing position | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-063](#tc-oppm-063) | Delete position rules | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-064](#tc-oppm-064) | Who may edit an Interview opportunity | Negative | High | ❌ Fail | ✅ Pass | BUG-002 |
| [TC-OPPM-065](#tc-oppm-065) | Change log of edits | Positive | Low | ❌ Fail | 🚧 Not built | BUG-020 |
| [TC-OPPM-066](#tc-oppm-066) | Project link / unlink | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-067](#tc-oppm-067) | Project cannot change after a candidate is allocated | Negative | High | ❌ Fail | ✅ Pass | BUG-010 |
| [TC-OPPM-068](#tc-oppm-068) | TM shortlists two QA candidates from the picker | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-069](#tc-oppm-069) | Shortlisting more candidates than openings | Edge Case | Medium | ✅ Pass | ✅ Pass | BUG-025 |
| [TC-OPPM-070](#tc-oppm-070) | Shortlist shortfall warning | Positive | Low | ✅ Pass | ✅ Pass | BUG-031 |
| [TC-OPPM-071](#tc-oppm-071) | Cannot shortlist the same live candidate twice | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-072](#tc-oppm-072) | Rejected candidate may be shortlisted again / on another position | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-073](#tc-oppm-073) | Cross-department candidate is an empty seat for the other TM | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-074](#tc-oppm-074) | Roles that cannot shortlist | Negative | High | ❌ Fail | ✅ Pass | BUG-007 |
| [TC-OPPM-075](#tc-oppm-075) | Preferred Candidate flag | Positive | Medium | ❌ Fail | 🚧 Not built | BUG-004 |
| [TC-OPPM-076](#tc-oppm-076) | Remove a shortlisted candidate needs a reason | Negative | Medium | ❌ Fail | ✅ Pass | BUG-009 |
| [TC-OPPM-077](#tc-oppm-077) | Candidate picker filters | Positive | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-078](#tc-oppm-078) | PMO sends a candidate for TM approval; TM of candidate's department approves | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-079](#tc-oppm-079) | TM sends own pick; who approves? | Negative | High | ❌ Fail | ⏳ Pending decision | BUG-006 |
| [TC-OPPM-080](#tc-oppm-080) | Approval guard rails | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-081](#tc-oppm-081) | Withdraw an approval request | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-082](#tc-oppm-082) | PMO bypasses TM approval | Positive | High | ❌ Fail | ✅ Pass | BUG-009 |
| [TC-OPPM-083](#tc-oppm-083) | Same employee approved on two opportunities at once | Negative | Medium | ❌ Fail | ❌ Fail | BUG-012 |
| [TC-OPPM-084](#tc-oppm-084) | Concurrent approval requests | Edge Case | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-085](#tc-oppm-085) | TM rejects with a reason; slot reopens | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-086](#tc-oppm-086) | PMO records a client rejection | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-087](#tc-oppm-087) | Board drag rules (PMO) | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-088](#tc-oppm-088) | Dragging back from Interview Scheduled keeps the schedule | Negative | High | ❌ Fail | ⏸ Not run | BUG-005 |
| [TC-OPPM-089](#tc-oppm-089) | Interview rounds: add, date, decide, delete | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-090](#tc-oppm-090) | Finalize an interview schedule (lock) | Positive | High | ❌ Fail | 🚧 Not built | BUG-005 |
| [TC-OPPM-091](#tc-oppm-091) | "Did the interview happen?" step | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-092](#tc-oppm-092) | Candidate never sees feedback or bypass reasons | Negative | High | ❌ Fail | ✅ Pass | BUG-030 |
| [TC-OPPM-093](#tc-oppm-093) | Candidate ticks checklist items in any order | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-094](#tc-oppm-094) | PMO marks an item "Skipped by PMO" | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-095](#tc-oppm-095) | Checklist editing window for the candidate | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-096](#tc-oppm-096) | Pending checklist never blocks scheduling | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-097](#tc-oppm-097) | Other people cannot tick someone else's checklist | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-098](#tc-oppm-098) | Add / edit prep material per role | Positive | Medium | ❌ Fail | ✅ Pass | BUG-008 |
| [TC-OPPM-099](#tc-oppm-099) | Prep material validation | Edge Case | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-100](#tc-oppm-100) | Send Reminder for pending preparation | Positive | Low | ❌ Fail | 🚧 Not built | BUG-020 |
| [TC-OPPM-101](#tc-oppm-101) | Full happy path: shortlist → bypass → interview → Won → Project Allocated | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-102](#tc-oppm-102) | Select after a Not Cleared round needs confirmation | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-103](#tc-oppm-103) | Round-skip to Won from Being Prepared | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-104](#tc-oppm-104) | Allocate dialog validation | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-105](#tc-oppm-105) | Allocate is blocked without a linked project | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-106](#tc-oppm-106) | Won-elsewhere notification | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-107](#tc-oppm-107) | Two-way allocation alert | Positive | High | ❌ Fail | ☑️ As designed | BUG-014 |
| [TC-OPPM-108](#tc-oppm-108) | Employee list "Interview Opportunities" column | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-109](#tc-oppm-109) | Employee profile — opportunity history | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-110](#tc-oppm-110) | Requests Tracking — Interview and Direct tabs | Positive | Medium | ❌ Fail | ➖ Not required | BUG-026 |
| [TC-OPPM-111](#tc-oppm-111) | On Hold blocks pipeline actions | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-112](#tc-oppm-112) | Mark Lost releases candidates | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-113](#tc-oppm-113) | No Longer Required needs confirmation | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-114](#tc-oppm-114) | Mark Won at opportunity level | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-115](#tc-oppm-115) | Lost on an opportunity that already has an allocation | Edge Case | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-116](#tc-oppm-116) | Re-initiate a position | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-117](#tc-oppm-117) | Roles that cannot change status | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-118](#tc-oppm-118) | PMO moves Direct ticket Open → In Review → Awaiting → Approved (allocates) | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-119](#tc-oppm-119) | Only PMO moves Direct tickets | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-120](#tc-oppm-120) | Owner edits / swaps the employee while Open or In Review | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-121](#tc-oppm-121) | Reject a Direct ticket needs a reason | Negative | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-122](#tc-oppm-122) | CSM cancels a Direct ticket (tag only) and PMO closes it | Positive | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-123](#tc-oppm-123) | CSM cancels an Interview ticket | Positive | High | ❌ Fail | 🚧 Not built | BUG-003 |
| [TC-OPPM-124](#tc-oppm-124) | Prospect Direct ticket cannot be approved until a project is linked | Positive | Medium | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-125](#tc-oppm-125) | Approve now, confirm allocation later | Positive | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-126](#tc-oppm-126) | Candidate notifications along the pipeline | Positive | Medium | ❌ Fail | ✅ Pass | BUG-023 |
| [TC-OPPM-127](#tc-oppm-127) | Assignment notifications to PM and CSM | Positive | Medium | ❌ Fail | ✅ Pass | BUG-011 |
| [TC-OPPM-128](#tc-oppm-128) | TM notified when a position is edited after shortlisting (rule 18) | Positive | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-129](#tc-oppm-129) | Notification links open the right page | Positive | Low | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-130](#tc-oppm-130) | Unauthenticated and malformed requests | Negative | High | ✅ Pass | ✅ Pass |  |
| [TC-OPPM-131](#tc-oppm-131) | HTML in titles is shown as text | Negative | High | ⏸ Not run | ⏸ Not run |  |
| [TC-OPPM-132](#tc-oppm-132) | "Did Interview Happen" stage after the interview day passes | Positive | High | — | ✅ Pass |  |
| [TC-OPPM-133](#tc-oppm-133) | "Interview Required" field removed from Interview positions | Positive | Low | — | ✅ Pass |  |
| [TC-OPPM-134](#tc-oppm-134) | Positions are listed in the order they were created | Positive | Low | — | 🚫 Ignored | BUG-034 |
| [TC-OPPM-135](#tc-oppm-135) | Removing a shortlisted candidate needs a reason (owners notified, not the candidate) | Negative | Medium | — | ✅ Pass |  |
| [TC-OPPM-136](#tc-oppm-136) | Project locked once a candidate is allocated | Negative | High | — | ✅ Pass |  |
| [TC-OPPM-137](#tc-oppm-137) | Ticket number fully visible in the board list | Positive | Low | — | ❌ Fail | BUG-035 |
| [TC-OPPM-138](#tc-oppm-138) | Candidate breadcrumb on the opportunity page | Positive | Low | — | ☑️ As designed | BUG-030 |
| [TC-OPPM-139](#tc-oppm-139) | PM sees only opportunities assigned to him | Negative | High | — | ❌ Fail | BUG-036 |
| [TC-OPPM-140](#tc-oppm-140) | An employee already allocated or fully booked cannot be approved on another opportunity | Negative | High | — | ❌ Fail | BUG-012 |
| [TC-OPPM-141](#tc-oppm-141) | Rejection notification goes only to the rejected candidate | Positive | Medium | — | ✅ Pass |  |

## M01 Access & Navigation

### TC-OPPM-001

**PMO sees Opportunity Allocation and the New Opportunities button**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** PMO account (bhumi.chauhan@simformsolutions.com).

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as bhumi.chauhan@simformsolutions.com (password from .env). | Lands on Employee Details. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. | Opportunity Allocation page opens at /pre-sales with tiles All Tickets / Open / Won / Lost / On Hold. |
| 3 | Look at the top-right of the page. | "New Opportunities" button is visible. |
| 4 | Look at the Interview / Direct switch and the List / Kanban switch. | Both switches are visible; Interview is selected by default. |

### TC-OPPM-002

**Admin can open the board; New Opportunities button is NOT visible**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | Admin | Pass | Pass | — |

**Preconditions:** Admin account (ceo@simformsolutions.com).

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as ceo@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. | Board opens at /pre-sales. |
| 3 | Check for the "New Opportunities" button. | Button is NOT visible. |
| 4 | Open /pre-sales/new directly in the address bar. | Redirected to /unauthorized. |

### TC-OPPM-003

**TM can open the board; New Opportunities button is NOT visible**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | TM | Pass | Pass | — |

**Preconditions:** TM account (sudhansu.patel@simformsolutions.com).

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as sudhansu.patel@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. | Board opens at /pre-sales. |
| 3 | Check for the "New Opportunities" button. | Button is NOT visible. |
| 4 | Open /pre-sales/new directly in the address bar. | Redirected to /unauthorized. |

### TC-OPPM-004

**EM can open the board; New Opportunities button is NOT visible**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | EM | Pass | Pass | — |

**Preconditions:** EM account (kunal.jadeja@simformsolutions.com).

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as kunal.jadeja@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. | Board opens at /pre-sales. |
| 3 | Check for the "New Opportunities" button. | Button is NOT visible. |
| 4 | Open /pre-sales/new directly in the address bar. | Redirected to /unauthorized. |

### TC-OPPM-005

**RM can open the board; New Opportunities button is NOT visible**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | RM | Pass | Pass | — |

**Preconditions:** RM account (deepak.rao@simformsolutions.com).

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as deepak.rao@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. | Board opens at /pre-sales. |
| 3 | Check for the "New Opportunities" button. | Button is NOT visible. |
| 4 | Open /pre-sales/new directly in the address bar. | Redirected to /unauthorized. |

### TC-OPPM-006

**CSM can open the board; New Opportunities button is visible**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | CSM | Pass | Pass | — |

**Preconditions:** CSM account (tarun.sharma@simformsolutions.com).

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as tarun.sharma@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. | Board opens at /pre-sales. |
| 3 | Check for the "New Opportunities" button. | Button is visible. |
| 4 | Open /pre-sales/new directly in the address bar. | Create form opens. |

### TC-OPPM-007

**PM has no board but can reach the Create form by URL**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PM | Fail | Pending decision | BUG-001 |

**Preconditions:** PM account gaurav.panchal@simformsolutions.com (manages EventDriven | CQRS Framework).

**Test data**

| Field | Value |
|---|---|
| URL 1 | /pre-sales |
| URL 2 | /pre-sales/new |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). | Lands on Profile. |
| 2 | Expand Requests Tracking in the sidebar. | Only "Project Allocation" is listed — no "Opportunity Allocation". |
| 3 | Open /pre-sales in the address bar. | Redirected to /unauthorized. |
| 4 | Open /pre-sales/new in the address bar. | FRD rule 3 / §7.5: PM must not be able to create → page should be blocked. |

### TC-OPPM-008

**PM can find the opportunities assigned to them**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PM | Pass | Pass | — |

**Preconditions:** PMO has created an opportunity with Assign to PM = Gaurav Panchal (e.g. OPP-0042, Prospect, no project).

**Test data**

| Field | Value |
|---|---|
| Assigned opportunity | OPP-0042 |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Project Allocation. | Allocation tickets page opens with "Direct Allocation" and "Interview Allocation" tabs (the Interview / Direct flag of FRD §7.5). |
| 3 | Open the "Interview Allocation" tab. | Lists the PM's opportunities: the assigned OPP-0042 ("No project linked") and opportunities on projects he manages (e.g. OPP-0039 EventDriven); tiles All / Open / Won / Lost / On Hold. |
| 4 | Open the "Direct Allocation" tab. | Direct tickets of the PM's projects listed. |
| 5 | Open OPP-0042 from the list. | Opportunity detail opens read-only. |

### TC-OPPM-009

**PM tracks Direct opportunities raised on his project**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PM | Fail | Needs clarification | BUG-033 |

**Preconditions:** PM gaurav.panchal raised Direct opportunity OPP-0041 on EventDriven | CQRS Framework; still Open (not approved).

**Test data**

| Field | Value |
|---|---|
| Ticket | OPP-0041 |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Requests Tracking → Project Allocation → "Direct Allocation" tab. | OPP-0041 listed with its stage (Open / In Review / Awaiting). |
| 3 | Search OPP-0041. | Found. |

### TC-OPPM-010

**PM opens an assigned opportunity read-only**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PM | Fail | Pass | BUG-031 |

**Preconditions:** OPP-0042 assigned to PM gaurav.panchal.

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Requests Tracking → Project Allocation → Interview Allocation → switch to Kanban. | Cards of the PM's 3 opportunities shown by stage. |
| 3 | Switch to List and click OPP-0042. | Detail opens: header shows Assigned PM and Assigned CSM; tabs Position Details / Ticket Info / Preparation Material / Link Project. |
| 4 | Look for Edit Ticket, Cancel Request, Add/ Shortlist. | None shown (read-only). |
| 5 | Read the shortfall message. | Correct grammar ("1 candidate") and wording suitable for a PM who cannot shortlist. |

### TC-OPPM-011

**PM loses access when re-assigned**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO, PM | Pass | Pass | — |

**Preconditions:** OPP-0042 assigned to gaurav.panchal.

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO change Assign to PM to another PM. | Saved. |
| 2 | As gaurav.panchal open OPP-0042 / Interview Allocation tab. | No longer listed; direct link → not found. |
| 3 | As PMO assign gaurav back. | Listed again. |

### TC-OPPM-012

**Employee (not a candidate) has no access**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Negative | Employee | Pass | Pass | — |

**Preconditions:** Plain employee account kashyap.patel@simformsolutions.com with no candidacies.

**Test data**

| Field | Value |
|---|---|
| URL | /pre-sales |

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as kashyap.patel@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Look for Opportunity Allocation in the sidebar. | Not present. |
| 3 | Open /pre-sales. | Redirected to /unauthorized. |
| 4 | Open /pre-sales/<any opportunity id> for an opportunity they are not a candidate on. | Opportunity not shown (not found / unauthorized). |

### TC-OPPM-013

**My / Team Opportunity tabs only for TM and RM**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | TM, RM, EM, CSM | Pass | Pass | — |

**Preconditions:** Accounts for TM, RM, EM and CSM.

| # | Step | Expected result |
|---|---|---|
| 1 | Log in as TM and open Opportunity Allocation. | "My Opportunity" and "Team Opportunity" tabs are shown. |
| 2 | Log in as RM and open Opportunity Allocation. | Both tabs are shown. |
| 3 | Log in as EM and open Opportunity Allocation. | Tabs are NOT shown (FRD change list). |
| 4 | Log in as CSM and open Opportunity Allocation. | Tabs are NOT shown. |

### TC-OPPM-014

**View-only banner for non-PMO roles, including Admin**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | Admin, TM, EM, RM, CSM | Fail | As designed | BUG-022 |

**Preconditions:** Accounts for each role.

**Test data**

| Field | Value |
|---|---|
| Banner text | You have department / view-scoped access. Kanban card dragging is exclusively managed by IS-PMO. |

| # | Step | Expected result |
|---|---|---|
| 1 | Log in as TM, open Opportunity Allocation, switch to Kanban. | Banner text shown exactly as in test data. |
| 2 | Repeat for EM, RM and CSM. | Banner shown for each. |
| 3 | Log in as Admin, open Opportunity Allocation, switch to Kanban. | FRD §7.1: banner shown for Admin. |

### TC-OPPM-015

**Only PMO can drag Kanban cards**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | Admin, TM, EM, RM, CSM | Pass | Pass | — |

**Preconditions:** At least one card in Shortlisted or later.

| # | Step | Expected result |
|---|---|---|
| 1 | Log in as PMO, open Kanban. | Every card shows a drag handle (⋮⋮) and an edit pencil. |
| 2 | Log in as Admin, open Kanban and try to drag a card to another column. | No drag handle; card does not move. |
| 3 | Repeat with TM, EM, RM and CSM. | No drag handle for any of them. |


## M02 Create Opportunity — Client & Opportunity details

### TC-OPPM-016

**Request type and client type are mandatory before the rest of the form unlocks**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO, on /pre-sales/new.

| # | Step | Expected result |
|---|---|---|
| 1 | Do not choose a request type. Look at the Opportunity Details section. | Section is greyed out with the hint "Select the opportunity request type and client type to fill in the rest." |
| 2 | Choose "Interview Opportunity". | Request type is selected; form still greyed until a client type is chosen. |
| 3 | Choose Client Type = Prospect. | Opportunity Details and Position #1 become editable. |

### TC-OPPM-017

**Create a minimal Interview / Prospect opportunity (happy path)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Client Type | Prospect |
| Client / Company Name | QA Test ProspectCo |
| Opportunity Title | QA Test Platform Enhancement |
| Position Title | QA Automation Engineer |
| Tech Stack | Playwright |
| Department | QA |
| Number of Openings | 2 |
| Priority | High |
| Preferred Seniority | Mid Level |
| Allocation Mode / % | Fixed / 50 |
| Tentative Allocation Date | today + 14 days |
| Number of Rounds | 2 |

| # | Step | Expected result |
|---|---|---|
| 1 | Choose Client Type = Prospect and type the client name; pick "Create new …". | Client name is set. |
| 2 | Type the Opportunity Title. | Title accepted; if a similar title exists a Potential Duplicate notice appears. |
| 3 | Fill Position #1 with the test data. | Footer counter "N required fields left" drops to 0 and "Create Opportunity" is enabled. |
| 4 | Click "Create Opportunity". | Success toast; redirected to the new ticket. Header shows OPP-nnnn, title, status Open, priority High, "Interview Allocation". |
| 5 | Open the board (Kanban). | Two cards for this position in "Pending to Shortlist" (one per opening), e.g. OPP-nnnn #1 and #2. |

### TC-OPPM-018

**Existing Client requires picking a Zoho project for PM/CSM, optional for PMO**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, CSM | Pass | Pass | — |

**Preconditions:** On /pre-sales/new.

**Test data**

| Field | Value |
|---|---|
| Project (CSM) | AnalytixHub \| Advanced Analytics |

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO choose Existing Client. | "Link Zoho Project (Optional)" — project not mandatory. |
| 2 | As CSM choose Existing Client. | "Link Zoho Project *" — mandatory; dropdown lists only projects the CSM manages. |
| 3 | As CSM leave the project empty and try to create. | Cannot create: project required. |
| 4 | As CSM pick AnalytixHub and create. | Opportunity created, linked to AnalytixHub, client type Existing Client. |

### TC-OPPM-019

**CSM cannot link a project they do not manage**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | CSM | Pass | Pass | — |

**Preconditions:** CSM tarun.sharma; project AbsoluteUI | Design System is not managed by him.

**Test data**

| Field | Value |
|---|---|
| Project | AbsoluteUI \| Design System |

| # | Step | Expected result |
|---|---|---|
| 1 | As CSM open the project dropdown. | AbsoluteUI is not offered. |
| 2 | (API) POST /api/v1/opportunities with projectPublicId of AbsoluteUI. | 403 OPP_009 "You can only raise or link Opportunities for Projects you manage". |

### TC-OPPM-020

**Prospect opportunity must not carry a linked project**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Fail | Pass | BUG-015 |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Client Type | Prospect |
| Project | any |

| # | Step | Expected result |
|---|---|---|
| 1 | Choose Client Type = Prospect. | Link Zoho Project field is hidden for Prospect. |
| 2 | (API) Create with clientType PROSPECT and a projectPublicId. | Refused (400), or saved as Existing Client — never a Prospect with a linked project. |

### TC-OPPM-021

**Opportunity Title: required, trimmed, max 200 characters**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Empty | "" |
| Spaces only | "   " |
| 200 chars | a × 200 |
| 201 chars | a × 201 |
| Padded | "   QA trim check   " |

| # | Step | Expected result |
|---|---|---|
| 1 | Leave Opportunity Title empty and try to create. | Required-field message; cannot create. |
| 2 | Enter spaces only. | Treated as empty; cannot create. |
| 3 | Enter exactly 200 characters and create. | Created; full value saved. |
| 4 | Enter 201 characters. | Blocked with "max 200 characters" message (API: 400 VAL_001). |
| 5 | Enter a value with leading/trailing spaces and create. | Saved trimmed ("QA trim check"). |

### TC-OPPM-022

**Client / Company Name: required, trimmed, max 200 characters**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Empty | "" |
| Spaces only | "   " |
| 200 chars | a × 200 |
| 201 chars | a × 201 |
| Padded | "   QA trim check   " |

| # | Step | Expected result |
|---|---|---|
| 1 | Leave Client / Company Name empty and try to create. | Required-field message; cannot create. |
| 2 | Enter spaces only. | Treated as empty; cannot create. |
| 3 | Enter exactly 200 characters and create. | Created; full value saved. |
| 4 | Enter 201 characters. | Blocked with "max 200 characters" message (API: 400 VAL_001). |
| 5 | Enter a value with leading/trailing spaces and create. | Saved trimmed ("QA trim check"). |

### TC-OPPM-023

**Website / LinkedIn / Interviewer LinkedIn URL validation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Negative | PMO | Fail | Pass | BUG-028 |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Invalid | not a url · linkedin.com/company/x · ftp://files.example.com · javascript:alert(1) · http://localhost |
| Too long | https://example.com/ + 2,029 chars (2,049 total) |
| Valid | https://example.com/a?b=c |

| # | Step | Expected result |
|---|---|---|
| 1 | Enter each invalid value in Website URL and leave the field. | Inline "invalid URL" message for each; cannot create. |
| 2 | Repeat in LinkedIn URL and Interviewer LinkedIn. | Same validation. |
| 3 | Enter the 2,049-character URL. | Blocked: max 2,048 characters. |
| 4 | Enter the valid URL and create. | Created; URL saved and shown on Ticket Info. |
| 5 | Check the Interviewer LinkedIn placeholder. | Placeholder shows a person-profile URL (e.g. https://linkedin.com/in/…). |

### TC-OPPM-024

**Long text fields: Prospect notes, Special Instructions (4,096), Prospect contact (200)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Special Instructions | 4,096 / 4,097 chars |
| Prospect notes | 4,096 / 4,097 chars |
| Prospect contact | 200 / 201 chars |

| # | Step | Expected result |
|---|---|---|
| 1 | Enter 4,096 characters in Special Instructions and create. | Saved. |
| 2 | Enter 4,097 characters. | Blocked with a max-length message. |
| 3 | Repeat for prospect notes and prospect contact (200/201). | Same behaviour at each limit. |

### TC-OPPM-025

**Job Description rich text is sanitised**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| JD (HTML view / API) | <p>Hello</p><script>alert(1)</script><img src=x onerror=alert(2)><a href="javascript:alert(3)">x</a> |

| # | Step | Expected result |
|---|---|---|
| 1 | Paste the test HTML into Job Description (or send via API) and create. | Created. |
| 2 | Open the ticket → Ticket Info. | No alert pops up; stored JD is <p>Hello</p><img src="x" /><a>x</a> — script, onerror and javascript: removed. |
| 3 | Enter a JD longer than 50,000 characters. | Refused: max 50,000 characters. |

### TC-OPPM-026

**Potential Duplicate notice for an existing title**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** An opportunity "QA-AUTO DUP CHECK" already exists.

**Test data**

| Field | Value |
|---|---|
| Opportunity Title | QA-AUTO DUP CHECK |

| # | Step | Expected result |
|---|---|---|
| 1 | Type the existing title in Opportunity Title. | Dropdown lists the existing opportunity (ticket, client, status) as a possible duplicate. |
| 2 | Continue and create anyway. | Allowed (notice is advisory); a second ticket is created. |

### TC-OPPM-027

**Assign to PM / Assign to CSM**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, CSM | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity Allocation → New Opportunities. "Interview Opportunity" selected.

**Test data**

| Field | Value |
|---|---|
| Assign to PM | Gaurav Panchal |
| Assign to CSM | Tarun Sharma |

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO open "Assign to PM". | Lists only employees holding the PM role. |
| 2 | As PMO pick both PM and CSM and create. | Ticket Info shows Assigned PM and Assigned CSM. |
| 3 | As CSM open the Create form. | "Assign to CSM" is not offered (only PMO may assign a CSM). |
| 4 | (API) As CSM send assignedCsmPublicId. | 403 OPP_160 "Only PMO can assign a CSM". |
| 5 | (API) Send a non-PM employee as assignedPmPublicId. | 400 OPP_158. |

### TC-OPPM-028

**Raiser matrix — who may create which ticket (FRD rule 3)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | All roles | Fail | Pending decision | BUG-001 |

**Preconditions:** Accounts for every role.

**Test data**

| Field | Value |
|---|---|
| Expected | PMO ✔/✔ · CSM ✔/✔ · PM ✘/✘ · TM/EM/RM/Admin/Employee ✘ |

| # | Step | Expected result |
|---|---|---|
| 1 | PMO creates an Existing-client and a Prospect opportunity. | Both created. |
| 2 | CSM creates Existing (own project) and Prospect. | Both created. |
| 3 | TM, EM, RM, Admin, Employee try to create (UI button / API). | Refused (no button; API 403). |
| 4 | PM creates an Existing-client opportunity for own project (via /pre-sales/new or API). | Refused per FRD. |
| 5 | PM creates a Direct opportunity for own project. | Refused per FRD. |


## M03 Create Opportunity — Position fields

### TC-OPPM-029

**Empty submit shows a message on every missing required field**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Negative | PMO | Fail | Fail | BUG-028 |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

| # | Step | Expected result |
|---|---|---|
| 1 | Leave every Position #1 field empty and click into / out of each field. | Each required field (Position Title, Tech Stack, Department, Priority, Preferred Seniority, Allocation %) shows its own message. |
| 2 | Look at the footer. | "N required fields left" counter is shown and "Create Opportunity" is disabled. |
| 3 | Look at Tentative Allocation Date. | Not required (no *) → must not be outlined red without a message. |

### TC-OPPM-030

**Position Title: required, max 200**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Values | empty · 200 chars · 201 chars |

| # | Step | Expected result |
|---|---|---|
| 1 | Leave Position Title empty. | "Title is required". |
| 2 | Enter 200 characters and create. | Created. |
| 3 | Enter 201 characters. | Blocked: max 200. |

### TC-OPPM-031

**Tech Stack: at least one, each ≤100 chars, no blank or duplicate values**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Fail | Pass | BUG-019 |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Values | (none) · "" · 101-char value · Java, Java, java |

| # | Step | Expected result |
|---|---|---|
| 1 | Create with no tech stack. | Blocked: tech stack required. |
| 2 | (API) Send an empty string as a tech stack. | 400 "each value in techStacks should not be empty". |
| 3 | (API) Send a 101-character tech stack. | 400 max 100. |
| 4 | (API) Send ["Java","Java","java"]. | Duplicates removed (case-insensitive) or refused. |

### TC-OPPM-032

**Department: at least one; multiple departments allowed**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Departments | QA + JAVA |

| # | Step | Expected result |
|---|---|---|
| 1 | Create with no department. | Blocked: department required. |
| 2 | Pick QA and JAVA and create. | Created; position shows both department chips. |
| 3 | Log in as TM (QA) and as TM (JAVA). | Both TMs can see this position (department scope). |

### TC-OPPM-033

**Number of Openings: 1–20, whole numbers only**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Values | 0 · 1 · 20 · 21 · 1.5 |

| # | Step | Expected result |
|---|---|---|
| 1 | Use the stepper to go below 1. | Minus button disabled at 1. |
| 2 | Set 20 and create. | Created; board shows 20 "Pending to Shortlist" cards numbered #1–#20. |
| 3 | (API) Send 0, 21 and 1.5. | 400 for each (min 1, max 20, whole number). |

### TC-OPPM-034

**Priority and Preferred Seniority are mandatory for Interview positions**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Negative | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Priority | High / Medium / Low |
| Seniority | Junior / Mid / Senior / Lead |

| # | Step | Expected result |
|---|---|---|
| 1 | Leave Priority empty and try to create. | Blocked (API: 400 OPP_154 "An Interview Position needs its priority"). |
| 2 | Leave Preferred Seniority empty. | Blocked. |
| 3 | Create two positions with priorities Low and Medium. | Opportunity header shows Medium (most urgent of its positions). |

### TC-OPPM-035

**Allocation Mode Fixed needs a whole 1–100 %; Dynamic needs none**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Fixed % | empty · 0 · 1 · 50.5 · 100 · 101 |
| Dynamic | with/without % |

| # | Step | Expected result |
|---|---|---|
| 1 | Choose Fixed and leave Allocation % empty. | Blocked: % required. |
| 2 | Enter 0, 50.5 and 101 in turn. | Each blocked with a range/whole-number message. |
| 3 | Enter 1, then 100, and create. | Both created. |
| 4 | Choose Dynamic. | Allocation % field is hidden/disabled; created without a %. |
| 5 | (API) Send Dynamic with allocationPercentage 50. | 400 OPP_027. |

### TC-OPPM-036

**Tentative allocation / interview dates are sensible**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Edge Case | PMO | Fail | Pass | BUG-018 |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Allocation date | yesterday · today+10 |
| End date | before start · same day · without start |
| Interview date | past · after allocation date |

| # | Step | Expected result |
|---|---|---|
| 1 | Pick a past Tentative Allocation Date in the date picker. | Past days are disabled in the picker. |
| 2 | (API) Send a past tentativeAllocationDate. | Refused (server should match the UI). |
| 3 | Set End date earlier than start. | Blocked: end before start (OPP_093). |
| 4 | Set End date = start date. | Allowed. |
| 5 | (API) Send an end date with no start date. | Refused. |
| 6 | (API) Send a past tentativeInterviewDate, or one after the allocation date. | Refused or warned. |

### TC-OPPM-037

**Interview Required = No on an Interview opportunity**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Fail | Retired | BUG-015 |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Interview Required | No |

| # | Step | Expected result |
|---|---|---|
| 1 | On an Interview Opportunity, set Interview Required = No. | Rounds and interview date are hidden. |
| 2 | Try to create. | Refused — an Interview opportunity must need an interview (otherwise use Direct). |
| 3 | (API) Send isInterviewRequired false with roundTitles. | 400 OPP_029. |

### TC-OPPM-038

**Interview rounds: 0–50 planned, titles optional (default Round N)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Rounds | 2 (titles "", "Tech") · 50 · 51 |
| Title | 201 chars |

| # | Step | Expected result |
|---|---|---|
| 1 | Click + on Number of Rounds twice. | Two round-title inputs appear. |
| 2 | Leave round 1 title blank, round 2 = "Tech"; create. | Created; round 1 shown as "Round 1". |
| 3 | (API) Send 50 round titles, then 51. | 50 accepted; 51 refused. |
| 4 | (API) Send a 201-character round title. | Refused (max 200). |

### TC-OPPM-039

**Preparation Material rows**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Fail | As designed | BUG-024 |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Title | QA question bank |
| URL | ftp:/bad · https://example.com/qa-bank |

| # | Step | Expected result |
|---|---|---|
| 1 | Enter a title and URL "ftp:/bad". | Inline "invalid URL" message. |
| 2 | Enter a valid https URL and click "Add Link". | Row added as a chip with the title. |
| 3 | Remove the chip with ×. | Row removed. |
| 4 | Create with no prep material rows. | Created; contract says default links are seeded when omitted — check whether any appear. |

### TC-OPPM-040

**Location preference block rules**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Cases | Other (no city) · Other + city + work mode · USA (no work mode) · USA On-site (no address) · USA On-site + address · WFH + work mode · Night shift None + NS1 |

| # | Step | Expected result |
|---|---|---|
| 1 | Choose Other without a city. | Blocked: location and work mode required. |
| 2 | Choose Other + Singapore + Off-site. | Allowed. |
| 3 | Choose USA without work mode. | Blocked. |
| 4 | Choose USA + On-site without address. | Blocked: address required. |
| 5 | Choose USA + On-site + address (≤500 chars). | Allowed; 501 chars refused. |
| 6 | Combine Night Shift "No Preference" with NS1. | Not allowed. |

### TC-OPPM-041

**Multiple positions: New Position, Duplicate, Remove; seat numbers unique**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

**Test data**

| Field | Value |
|---|---|
| Positions | QA (2 openings), Java (1), Python (3) |

| # | Step | Expected result |
|---|---|---|
| 1 | Fill Position #1, click "New Position", fill #2, click "Duplicate" on #2 and edit to #3. | Three position blocks numbered #1–#3. |
| 2 | Click "Remove" on a block, then re-add it. | Block removed / re-added. |
| 3 | Create. | Board shows 6 cards with seat numbers #1–#6 across the opportunity; each position gets a readable ID. |

### TC-OPPM-042

**"Client Facing" field is removed (FRD change list)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Trivial | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO on /pre-sales/new; Interview Opportunity + Prospect chosen; client name and title filled.

| # | Step | Expected result |
|---|---|---|
| 1 | Review every field in Position #1. | No "Client Facing" field. |


## M04 Create Opportunity — Direct

### TC-OPPM-043

**Create a Direct ticket for one employee (happy path)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | CSM | Pass | Pass | — |

**Preconditions:** Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Test data**

| Field | Value |
|---|---|
| Position Title | QA Lead (direct) |
| Employee | a QA employee with 100% remaining |
| Allocation | Fixed 30% |
| Tentative Allocation Date | today + 15 |

| # | Step | Expected result |
|---|---|---|
| 1 | Check the form. | Interview Details, Rounds and Preparation Material are not shown; an Employee picker is shown; Interviewer LinkedIn is not shown. |
| 2 | Pick the employee and fill the test data; create. | Ticket created with status Open and the employee on it. |
| 3 | Open the board, switch to "Direct". | Ticket appears under Open. |

### TC-OPPM-044

**Direct ticket needs employee and tentative allocation date**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | CSM | Pass | Pass | — |

**Preconditions:** Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

| # | Step | Expected result |
|---|---|---|
| 1 | Leave Employee empty and try to create. | Blocked (API 400 OPP_126). |
| 2 | Leave Tentative Allocation Date empty. | Blocked (API 400 OPP_127). |

### TC-OPPM-045

**Direct ticket refuses interview-only fields**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Negative | CSM | Pass | Pass | — |

**Preconditions:** Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Test data**

| Field | Value |
|---|---|
| API fields | requiredCount 2 · roundTitles · isInterviewRequired true · prepMaterials |

| # | Step | Expected result |
|---|---|---|
| 1 | (API) Send each field on a Direct position. | Each refused with 400 OPP_128. |
| 2 | (API) Send interviewerLinkedinUrl. | Ignored; stored as empty. |

### TC-OPPM-046

**Several employees in one Direct request (FRD: one row per employee → one ticket per row)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | CSM | Fail | Pending decision | BUG-013 |

**Preconditions:** Logged in as CSM tarun.sharma on /pre-sales/new; "Direct Opportunity" + Existing Client + project AnalytixHub chosen.

**Test data**

| Field | Value |
|---|---|
| Employees | 2 |

| # | Step | Expected result |
|---|---|---|
| 1 | Try to add a second position/row with a second employee. | FRD: allowed; each row becomes its own ticket. |
| 2 | (API) Send two positions on one Direct request. | Build refuses: 400 OPP_175 "A Direct Opportunity has exactly one Position". |

### TC-OPPM-047

**Direct priority is derived from the tentative allocation date**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** PMO on the Direct form.

**Test data**

| Field | Value |
|---|---|
| Dates | today+3 · today+10 · today+30 · today−3 |
| Sent priority | Low |

| # | Step | Expected result |
|---|---|---|
| 1 | Create four Direct tickets with the test dates (and priority Low via API). | Priorities: +3 High, +10 Medium, +30 Low, −3 High; the sent priority is ignored. |

### TC-OPPM-048

**PM raises a Direct ticket**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PM | Fail | Pending decision | BUG-001 |

**Preconditions:** PM gaurav.panchal; project EventDriven.

| # | Step | Expected result |
|---|---|---|
| 1 | As PM open /pre-sales/new, choose Direct, project EventDriven, pick an employee and create. | FRD: refused — PM cannot raise tickets. |


## M05 Board — list, Kanban, filters, tiles

### TC-OPPM-049

**Kanban columns and order**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

| # | Step | Expected result |
|---|---|---|
| 1 | Click Requests Tracking → Opportunity Allocation in the sidebar. Click Kanban. | Columns in order: Pending to Shortlist, Shortlisted, Waiting for Approval, Being Prepared, Interview Scheduled, Waiting for Feedback, Won, Project Allocated, Rejected, Lost, On Hold, No Longer Required. |
| 2 | Compare each column badge with the cards in it. | Badge = number of cards. |

### TC-OPPM-050

**Summary tiles reconcile with the board**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Fail | Pass | BUG-031 |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

| # | Step | Expected result |
|---|---|---|
| 1 | Read the tiles All Tickets / Open / Won / Lost / On Hold. | All = Open + Won + Lost + On Hold (+ No Longer Required if counted). |
| 2 | Compare "All Tickets" with the number of cards/rows. | Labels make clear whether tickets (cards) or opportunities are counted. |

### TC-OPPM-051

**Readable ticket ID shown on the list**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Fail | As designed | BUG-016 |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

**Test data**

| Field | Value |
|---|---|
| Expected format | client + position initials + number, e.g. AN-QA-60 |

| # | Step | Expected result |
|---|---|---|
| 1 | Open the List view and read the Ticket ID column. | Full readable ID visible, not truncated. |
| 2 | Search the readable ID (e.g. AN-QA-60) in the search box. | Matching cards returned. |

### TC-OPPM-052

**Search by ticket, title, client, position, candidate**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

**Test data**

| Field | Value |
|---|---|
| Searches | OPP-0047 · Janki · AnalytixHub · % |

| # | Step | Expected result |
|---|---|---|
| 1 | Search each value. | Only matching cards shown. |
| 2 | Search "%". | No wildcard effect (0 results), not everything. |

### TC-OPPM-053

**Lost / No Longer Required hidden by default; NLR highlighted**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Fail | Pass | BUG-029 |

**Preconditions:** One opportunity marked Lost and one No Longer Required.

| # | Step | Expected result |
|---|---|---|
| 1 | Open the board with default filters. | Lost and NLR tickets not in the stage columns. |
| 2 | Open the Lost / No Longer Required columns (or Status filter). | Tickets listed there. |
| 3 | Look at the NLR ticket styling. | FRD: red-border highlight. |

### TC-OPPM-054

**Created-date range filter presets**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | Fail | Not built | BUG-027 |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

**Test data**

| Field | Value |
|---|---|
| FRD presets | Day 1–365 · Last 1 / 3 / 6 months |

| # | Step | Expected result |
|---|---|---|
| 1 | Open the created-date range control. | FRD presets available. |
| 2 | Pick a custom From > To range. | No results (or blocked), no error. |

### TC-OPPM-055

**Advanced filter (client type, priority, client, prospect, department, project, status)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

**Test data**

| Field | Value |
|---|---|
| Filter | Department = JAVA |

| # | Step | Expected result |
|---|---|---|
| 1 | Click Filter → set Department = JAVA → Save. | Only cards whose position is in JAVA; tiles/badges update to match. |
| 2 | Clear the filter. | All cards back. |

### TC-OPPM-056

**Interview vs Direct switch keeps the boards separate**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

| # | Step | Expected result |
|---|---|---|
| 1 | On Interview, look for Direct tickets. | None shown. |
| 2 | Switch to Direct. | Direct list/Kanban with Open / In Review / Awaiting / Approved / Rejected; counts equal rows. |

### TC-OPPM-057

**Empty values use a readable placeholder**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Trivial | Positive | PMO | Fail | Pass | BUG-031 |

**Preconditions:** Logged in as PMO; several QA test opportunities exist in different stages.

| # | Step | Expected result |
|---|---|---|
| 1 | Find a row with no candidate in the List view. | Candidates cell shows a word (e.g. "No candidate"), not a bare "-". |

### TC-OPPM-058

**Department scope on the board**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | TM (QA), TM (JAVA), EM, CSM, RM | Pass | Pass | — |

**Preconditions:** One QA-only and one JAVA-only opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | As TM (QA) search both tickets. | Sees QA one only; JAVA one not found. |
| 2 | As TM (JAVA). | Sees JAVA one only. |
| 3 | As EM kunal.jadeja (QA, Python…). | Sees QA one only. |
| 4 | As CSM / RM not linked to either. | Sees neither. |
| 5 | (API) Open the hidden one by id. | 404 (not 403) — no existence leak. |


## M06 Opportunity detail & editing

### TC-OPPM-059

**Detail page shows the full ticket information**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

| # | Step | Expected result |
|---|---|---|
| 1 | Open the ticket from the board. | Header: OPP-nnnn, title, status, priority, Interview Allocation, client, client type; Created by / Created On / Updated On. |
| 2 | Check the tabs. | Position Details, Ticket Info, Preparation Material, Link Project. |
| 3 | Open Ticket Info. | Every value entered on the form is shown (FRD change list). |
| 4 | Look at each position header. | Departments, allocation, tech stack chips, "Shortlisted …", "x / N filled", Re-initiate, Add/ Shortlist, Edit, Delete. |

### TC-OPPM-060

**Edit a single position in a side drawer**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Test data**

| Field | Value |
|---|---|
| New tech stack | Playwright, Cypress |

| # | Step | Expected result |
|---|---|---|
| 1 | Click Edit on the QA position. | Right-side drawer opens with only that position. |
| 2 | Change Tech Stack and save. | Saved; header chips updated. |
| 3 | Click "Edit Ticket" at the top. | Whole-opportunity edit opens. |

### TC-OPPM-061

**Position allocation fields lock once a candidate is in the pipeline**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). At least one candidate shortlisted on QA position.

**Test data**

| Field | Value |
|---|---|
| Allocation % | 50 → 80 |

| # | Step | Expected result |
|---|---|---|
| 1 | Edit the QA position and change Allocation % to 80; save. | Refused: "Allocation type, percentage, tentative dates and preferred Employees cannot change once a Candidate is in the pipeline" (OPP_153). |
| 2 | Save with 50 unchanged and a different title. | Saved. |

### TC-OPPM-062

**Change Number of Openings on an existing position**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Test data**

| Field | Value |
|---|---|
| Openings | 1 → 4, then 4 → 1 |

| # | Step | Expected result |
|---|---|---|
| 1 | Raise openings from 1 to 4. | Three new empty cards in Pending to Shortlist. |
| 2 | Lower to 1. | Only empty Pending cards are removed; cards holding candidates stay. |

### TC-OPPM-063

**Delete position rules**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

| # | Step | Expected result |
|---|---|---|
| 1 | Delete a position whose candidate is Being Prepared (In Process). | Refused (OPP_025). |
| 2 | Delete a position whose candidates are only Shortlisted. | Deleted with its cards. |
| 3 | Delete the last remaining position. | Refused: "An Opportunity needs at least one Position; change its status instead". |

### TC-OPPM-064

**Who may edit an Interview opportunity**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | CSM, TM, EM, Admin | Fail | Pass | BUG-002 |

**Preconditions:** Interview opportunity raised by CSM tarun.sharma on his project.

**Test data**

| Field | Value |
|---|---|
| Change | Special Instructions |

| # | Step | Expected result |
|---|---|---|
| 1 | As the raising CSM click Edit Ticket and change Special Instructions. | FRD §7.6: allowed (CSM edits like PMO). |
| 2 | As the raising CSM add a new position. | FRD §7.6: allowed. |
| 3 | As TM, EM, Admin try the same. | Refused / no Edit button. |

### TC-OPPM-065

**Change log of edits**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | Fail | Not built | BUG-020 |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

| # | Step | Expected result |
|---|---|---|
| 1 | Edit the title, then a position. | A change log lists who changed what and when; recent edits are highlighted (FRD §8). |

### TC-OPPM-066

**Project link / unlink**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, CSM | Pass | Pass | — |

**Preconditions:** Prospect opportunity without project.

**Test data**

| Field | Value |
|---|---|
| Project | ElitePay \| Payroll System (CSM-managed) |

| # | Step | Expected result |
|---|---|---|
| 1 | As CSM open Link Project and pick ElitePay. | Linked; client type changes to Existing Client. |
| 2 | As CSM try to link a project they do not manage. | Refused (OPP_009). |
| 3 | As CSM try to unlink. | Refused (Existing opportunity must keep a project they manage). |

### TC-OPPM-067

**Project cannot change after a candidate is allocated**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PMO | Fail | Pass | BUG-010 |

**Preconditions:** Opportunity with a candidate in Project Allocated on AnalytixHub.

**Test data**

| Field | Value |
|---|---|
| New project | ElitePay |

| # | Step | Expected result |
|---|---|---|
| 1 | Link Project → change to ElitePay. | Refused — allocation already exists on AnalytixHub. |
| 2 | Unlink the project. | Refused. |


## M07 Shortlisting

### TC-OPPM-068

**TM shortlists two QA candidates from the picker**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | TM (QA) | Pass | Pass | — |

**Preconditions:** Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Test data**

| Field | Value |
|---|---|
| Candidates | Janki Naik, Vandana Mishra |

| # | Step | Expected result |
|---|---|---|
| 1 | Open the ticket → QA position → "Add/ Shortlist". | Candidate Shortlist dialog: position title + tech stack, department filter pre-set to QA, columns Employee / UP System / Department / Designation / Skills / Availability. |
| 2 | Check each row. | Each employee has a redirect arrow that opens Employee Details in a new tab. |
| 3 | Tick Janki and Vandana; click "Add 2 Candidates". | Both added: two cards in Shortlisted, status Considered, Approval "Not sent". |
| 4 | Re-open the picker. | Janki and Vandana are no longer listed for this position. |

### TC-OPPM-069

**Shortlisting more candidates than openings**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Edge Case | EM | Pass | Pass | BUG-025 |

**Preconditions:** Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Test data**

| Field | Value |
|---|---|
| Candidates | 3rd candidate Akash Singh |

| # | Step | Expected result |
|---|---|---|
| 1 | As EM shortlist a third candidate on the 2-opening position. | Build: extra card #3 created; FRD rule 13 says N openings = N cards — confirm intended behaviour. |
| 2 | Check "x / N filled" and "Shortlisted" figures. | Shortlisted 3, filled 0/2. |

### TC-OPPM-070

**Shortlist shortfall warning**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | Pass | Pass | BUG-031 |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

| # | Step | Expected result |
|---|---|---|
| 1 | Look at the Java position header with no candidates. | "Shortlisted …: 0" shown in red as a warning (label should read as a count, not a ratio). |

### TC-OPPM-071

**Cannot shortlist the same live candidate twice**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | TM (QA) | Pass | Pass | — |

**Preconditions:** Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki already shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | (API) Nominate Janki again on the same position. | 409 OPP_028 "already nominated". |
| 2 | Two PMOs nominate the same employee at the same moment. | One succeeds, the other gets 409. |

### TC-OPPM-072

**Rejected candidate may be shortlisted again / on another position**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Akash Singh was rejected on QA position.

| # | Step | Expected result |
|---|---|---|
| 1 | Shortlist Akash Singh on the Java position of the same opportunity. | Allowed (rule 6). |
| 2 | Shortlist him again on the QA position. | Allowed; old rejection kept under "Rejected & previously considered". |

### TC-OPPM-073

**Cross-department candidate is an empty seat for the other TM**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | PMO, TM (QA), TM (JAVA) | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Test data**

| Field | Value |
|---|---|
| Candidate | Siddharth Iyer (JAVA) on the QA position |

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO shortlist Siddharth (JAVA) on the QA position. | Added. |
| 2 | As TM (QA) open the ticket. | Siddharth's name is not visible to the QA TM (empty seat). |
| 3 | As TM (JAVA) open the ticket. | Ticket visible; only Siddharth's row shown. |

### TC-OPPM-074

**Roles that cannot shortlist**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | RM, CSM, Admin, Employee, PM | Fail | Pass | BUG-007 |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

| # | Step | Expected result |
|---|---|---|
| 1 | As RM, CSM, Admin, Employee open the ticket. | No "Add/ Shortlist" action; API 403. |
| 2 | As PM (assigned) try to shortlist. | FRD §7.5: PM can shortlist — expected to be allowed. |

### TC-OPPM-075

**Preferred Candidate flag**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | TM (QA) | Fail | Not built | BUG-004 |

**Preconditions:** Logged in as TM (QA) sudhansu.patel. Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Two candidates shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | Mark Janki as Preferred Candidate. | FRD rule 14: star shown on her card, auto-highlighted for TM; one per position. |
| 2 | Mark Vandana as Preferred. | Star moves to Vandana. |

### TC-OPPM-076

**Remove a shortlisted candidate needs a reason**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Fail | Pass | BUG-009 |

**Preconditions:** A candidate in Shortlisted (Not sent).

| # | Step | Expected result |
|---|---|---|
| 1 | Click the delete (bin) action on the candidate row. | FRD rule 16: a reason is asked; confirmation shown. |
| 2 | Confirm. | Card goes back to Pending to Shortlist; candidate notified with the reason. |

### TC-OPPM-077

**Candidate picker filters**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic).

**Test data**

| Field | Value |
|---|---|
| Filters | UP tier, skills, designation, availability min > max |

| # | Step | Expected result |
|---|---|---|
| 1 | Sort by UP System; filter by skill and designation. | List narrows correctly; "Showing x of y" updates. |
| 2 | (API) Set minimum remaining allocation 80 and maximum 20. | 400 OPP_165 "The minimum cannot be greater than the maximum". |


## M08 TM approval & bypass

### TC-OPPM-078

**PMO sends a candidate for TM approval; TM of candidate's department approves**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | PMO, TM (QA) | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki (shortlisted by TM QA) and Vandana (shortlisted by PMO) in Shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO click the send-for-approval action on Vandana. | Card moves to Waiting for Approval; Approval = Pending. |
| 2 | As TM (QA) open the ticket and approve Vandana. | Card moves to Being Prepared; Approval = Approved; lock icon on the name; Round shows 0/2 (two planned rounds seeded). |
| 3 | Check Vandana's Remaining Allocation. | Reduced by 50% (reserved while Blocked). |

### TC-OPPM-079

**TM sends own pick; who approves?**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | TM (QA), PMO | Fail | Pending decision | BUG-006 |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki (shortlisted by TM QA) and Vandana (shortlisted by PMO) in Shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | As TM (QA) send Janki for approval. | Waiting for Approval. |
| 2 | As the same TM approve Janki. | Refused: "You cannot approve or reject a request you sent". |
| 3 | As PMO approve Janki. | FRD rule 19: TM Approval is final and owned by TM — PMO should not be the approver of a "TM Approval". |

### TC-OPPM-080

**Approval guard rails**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | TM, EM, PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Janki (shortlisted by TM QA) and Vandana (shortlisted by PMO) in Shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | TM approves a candidate that was never sent. | Refused: "Send the Candidate for approval first". |
| 2 | TM sends a candidate shortlisted by the EM. | Refused: "You can only send Candidates you shortlisted". |
| 3 | Send the same candidate twice. | Refused: "already sent". |
| 4 | EM tries to approve. | Refused (403). |
| 5 | TM (JAVA) tries to approve a QA candidate. | Not found (out of scope). |

### TC-OPPM-081

**Withdraw an approval request**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO, TM | Pass | Pass | — |

**Preconditions:** Candidate in Waiting for Approval sent by PMO.

| # | Step | Expected result |
|---|---|---|
| 1 | As TM (not the requester) withdraw. | Refused: only the requester or PMO. |
| 2 | As PMO withdraw. | Card back to Shortlisted; Approval Not sent. |
| 3 | Withdraw again. | Refused: nothing pending. |

### TC-OPPM-082

**PMO bypasses TM approval**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Fail | Pass | BUG-009 |

**Preconditions:** Candidate in Shortlisted (not sent).

**Test data**

| Field | Value |
|---|---|
| Reason | TM on leave |
| Long reason | 1,025 chars |

| # | Step | Expected result |
|---|---|---|
| 1 | Bypass with a 1,025-character reason. | Refused (max 1,024). |
| 2 | Bypass with reason "TM on leave". | Being Prepared; Approval = Bypassed; reason stored and visible to PMO. |
| 3 | Bypass another candidate with no reason. | FRD rule 16: reason required — should be refused. |
| 4 | As TM try to bypass. | Refused (403). |

### TC-OPPM-083

**Same employee approved on two opportunities at once**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Fail | Fail | BUG-012 |

**Preconditions:** Janki is Being Prepared (In Process) on opportunity A and shortlisted on opportunity B.

| # | Step | Expected result |
|---|---|---|
| 1 | On opportunity B, bypass/approve Janki. | Warning or block: employee already In Process (Blocked) on opportunity A. |
| 2 | Check Janki's Remaining Allocation. | Both reservations counted. |

### TC-OPPM-084

**Concurrent approval requests**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Edge Case | PMO, PMO2 | Pass | Pass | — |

**Preconditions:** Candidate in Shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | Two PMOs click send-for-approval at the same moment. | Exactly one succeeds; the other sees "already sent" and the page refreshes. |


## M09 Reject, stage moves & interview rounds

### TC-OPPM-085

**TM rejects with a reason; slot reopens**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | TM (QA) | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Test data**

| Field | Value |
|---|---|
| Reason | Failed R1 coding |

| # | Step | Expected result |
|---|---|---|
| 1 | Reject Akash with an empty or whitespace reason. | Refused: reason required. |
| 2 | Reject with the test reason. | Card returns to Pending to Shortlist (empty seat). |
| 3 | Open the Rejected column. | Akash listed with "Rejected by TM", date and reason. |
| 4 | Under the position, "Rejected & previously considered". | Akash row with status Rejected by TM. |

### TC-OPPM-086

**PMO records a client rejection**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Test data**

| Field | Value |
|---|---|
| Rejected by | Client |
| Reason | Client declined after R1 |

| # | Step | Expected result |
|---|---|---|
| 1 | Reject a candidate choosing "Client" as the rejecter. | Rejected column shows Rejected by Client. |
| 2 | As TM try to set rejecter = Client. | Refused: "Only PMO can record who rejected the Candidate". |

### TC-OPPM-087

**Board drag rules (PMO)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PMO, TM | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

| # | Step | Expected result |
|---|---|---|
| 1 | As TM drag a card. | Not possible (no handle; API 403). |
| 2 | As PMO drag Being Prepared → Waiting for Feedback (skip a column). | Confirmation required ("This change skips a step"). |
| 3 | As PMO drag to Waiting for Approval or Won. | Not allowed. |
| 4 | As PMO drag Being Prepared → Interview Scheduled with no interview date. | Interview-date dialog / refused "Enter the interview date". |
| 5 | Drag any card back to Shortlisted. | Not allowed. |

### TC-OPPM-088

**Dragging back from Interview Scheduled keeps the schedule**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PMO | Fail | Not run | BUG-005 |

**Preconditions:** Card in Interview Scheduled with round 1 dated in 3 days.

| # | Step | Expected result |
|---|---|---|
| 1 | Drag the card back to Being Prepared. | Confirmation that the scheduled interview will be cleared, or the move is blocked. |
| 2 | Open the candidate's Interview Rounds. | Without confirmation the date must not be lost. |

### TC-OPPM-089

**Interview rounds: add, date, decide, delete**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub with position "QA Automation Engineer" (dept QA, 2 openings, Fixed 50%, rounds "R1 Technical","R2 Client") and position "Java Backend Dev" (dept JAVA, 1 opening, Dynamic). Vandana and Akash Singh in Being Prepared.

**Test data**

| Field | Value |
|---|---|
| Interviewer | Client CTO |
| Long interviewer | 201 chars |
| Feedback | 4,097 chars |

| # | Step | Expected result |
|---|---|---|
| 1 | Open Vandana → Interview Rounds; add a round with no title. | Round 3 added, shown as "Round 3". |
| 2 | Set round 1 date in 2 days and interviewer "Client CTO". | Card moves to Interview Scheduled. |
| 3 | Mark round 1 Cleared. | Refused: date must be today or earlier. |
| 4 | Set round 2 to yesterday and mark Cleared without recording URL. | Saved (recording optional). |
| 5 | Enter recording URL "teams recording". | Invalid URL message. |
| 6 | Enter 201-char interviewer / 4,097-char feedback. | Refused at the limits. |
| 7 | Delete the decided round 2. | Refused: only pending rounds can be removed. |
| 8 | Delete pending round 3. | Removed; remaining rounds renumbered. |

### TC-OPPM-090

**Finalize an interview schedule (lock)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Fail | Not built | BUG-005 |

**Preconditions:** Round dated in the future.

| # | Step | Expected result |
|---|---|---|
| 1 | Finalize the round schedule. | FRD rule 17: schedule locked. |
| 2 | Try to change the date or interviewer. | Refused while finalized. |

### TC-OPPM-091

**"Did the interview happen?" step**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Card in Interview Scheduled; current round dated yesterday.

| # | Step | Expected result |
|---|---|---|
| 1 | Answer Yes / drag to Waiting for Feedback. | Card moves to Waiting for Feedback. |
| 2 | On another card answer No (clear the date). | Card returns to Being Prepared. |
| 3 | Try Yes while the current round is dated in the future. | Refused: date cannot be after today. |

### TC-OPPM-092

**Candidate never sees feedback or bypass reasons**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | Candidate (Vandana) | Fail | Pass | BUG-030 |

**Preconditions:** Round 2 Cleared with feedback "Strong"; another candidate bypassed with reason.

| # | Step | Expected result |
|---|---|---|
| 1 | Log in as vandana.mishra and open the ticket from Profile → Opportunities. | Only her own row is shown. |
| 2 | Open her Interview Rounds. | Outcome visible; feedback text NOT shown. |
| 3 | Look for other candidates' names, bypass reasons, PMO notes. | None visible. |
| 4 | Look at the position header. | Count of competing candidates should not be shown to a candidate. |


## M10 Preparation checklist & material

### TC-OPPM-093

**Candidate ticks checklist items in any order**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | Candidate (Janki) | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank". Janki in Being Prepared.

**Test data**

| Field | Value |
|---|---|
| Items | Manual mock completed, then JD/client context reviewed |

| # | Step | Expected result |
|---|---|---|
| 1 | Log in as janki.naik → Profile → Opportunities → open the ticket → Preparation Checklist. | 5 items listed. |
| 2 | Tick item 4, then item 1. | Both saved (any order allowed). |
| 3 | Untick item 4. | Saved. |

### TC-OPPM-094

**PMO marks an item "Skipped by PMO"**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO, Candidate | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank". Janki in Being Prepared.

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO mark item 2 Skipped by PMO. | Item shows Skipped by PMO. |
| 2 | As Janki try to tick item 2. | Refused: skipped by PMO. |
| 3 | As Janki try to skip an item. | Refused: only PMO can skip. |

### TC-OPPM-095

**Checklist editing window for the candidate**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Negative | Candidate | Pass | Pass | — |

**Preconditions:** Candidate whose card is Interview Scheduled.

| # | Step | Expected result |
|---|---|---|
| 1 | Tick an item. | Refused: only while Shortlisted, Waiting for Approval or Being Prepared. |
| 2 | As PMO tick the same item. | Allowed at any stage. |
| 3 | Put the opportunity On Hold and tick as candidate. | Refused while not Open. |

### TC-OPPM-096

**Pending checklist never blocks scheduling**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Candidate with 0/5 items done.

| # | Step | Expected result |
|---|---|---|
| 1 | Date round 1. | Allowed; card moves to Interview Scheduled. |

### TC-OPPM-097

**Other people cannot tick someone else's checklist**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | Candidate, TM | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank".

| # | Step | Expected result |
|---|---|---|
| 1 | As Janki try to edit Vandana's checklist (API with her nomination id). | Not found. |
| 2 | As TM tick a team member's checklist. | Refused (read-only). |

### TC-OPPM-098

**Add / edit prep material per role**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, TM, EM, PM | Fail | Pass | BUG-008 |

**Preconditions:** Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank".

**Test data**

| Field | Value |
|---|---|
| Material | title + https URL |

| # | Step | Expected result |
|---|---|---|
| 1 | As TM add material. | Added. |
| 2 | As EM add material. | FRD §7.4: allowed. |
| 3 | As assigned PM add material on top of PMO's. | FRD §7.5: allowed. |
| 4 | As TM edit PMO's "QA question bank". | FRD rule 5: only the owner edits — refused. |
| 5 | As Employee add material. | Refused. |

### TC-OPPM-099

**Prep material validation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity on AnalytixHub, QA position with 5 checklist items and PMO prep material "QA question bank".

**Test data**

| Field | Value |
|---|---|
| URL | javascript:alert(1) |
| Title | 201 chars |

| # | Step | Expected result |
|---|---|---|
| 1 | Add material with a javascript: URL. | Refused. |
| 2 | Add with a 201-char title. | Refused. |
| 3 | Add the same link twice. | Duplicate prevented or warned. |

### TC-OPPM-100

**Send Reminder for pending preparation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PM / PMO | Fail | Not built | BUG-020 |

**Preconditions:** Candidate with pending items.

| # | Step | Expected result |
|---|---|---|
| 1 | Click "Send Reminder". | FRD §7.5: candidate (and TM) notified. |


## M11 Won, allocation & cross-module integration

### TC-OPPM-101

**Full happy path: shortlist → bypass → interview → Won → Project Allocated**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | PMO | Pass | Pass | — |

**Preconditions:** Interview opportunity OPP on AnalytixHub, Java position Fixed 40%, start today+20, end today+120; candidate Akash Pandya (100% remaining) also shortlisted on another open opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | Shortlist Akash and bypass approval (reason "fast track"). | Being Prepared; Remaining Allocation 100% → 60%. |
| 2 | Date round 1 yesterday. | Interview Scheduled. |
| 3 | Confirm "the interview happened". | Waiting for Feedback. |
| 4 | Mark round 1 Cleared, then Select (Won). | Card in Won; nomination Selected; "1 / 1 filled". |
| 5 | Click Allocate; enter Fixed 40%, start/end dates, status Green, WFO; submit. | Card in Project Allocated; an approved NA ticket is created. |
| 6 | Open Requests Tracking → Project Allocation, find the NA ticket. | NEW_ALLOCATION, APPROVED, employee Akash Pandya, project AnalytixHub. |

### TC-OPPM-102

**Select after a Not Cleared round needs confirmation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Pass | Pass | — |

**Preconditions:** Candidate in Waiting for Feedback; round 1 Not Cleared.

| # | Step | Expected result |
|---|---|---|
| 1 | Click Select (Won). | Confirmation: "Skip remaining interview rounds and mark as Selected?" |
| 2 | Confirm. | Won. |

### TC-OPPM-103

**Round-skip to Won from Being Prepared**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Candidate in Being Prepared.

| # | Step | Expected result |
|---|---|---|
| 1 | Click Select (Won). | Confirmation dialog shown (rule 20). |
| 2 | Cancel. | Nothing changes. |
| 3 | Confirm. | Won. |
| 4 | As TM try to select. | Refused. |

### TC-OPPM-104

**Allocate dialog validation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Pass | Pass | — |

**Preconditions:** Candidate in Won.

**Test data**

| Field | Value |
|---|---|
| Cases | Fixed without % · end before start · 101% · employee over capacity |

| # | Step | Expected result |
|---|---|---|
| 1 | Submit Fixed with no %. | Refused. |
| 2 | End date before start. | Refused. |
| 3 | 101%. | Refused. |
| 4 | Allocate an employee already at 100%. | Refused with the over-capacity message listing current allocations. |
| 5 | As TM / CSM try to allocate. | Refused. |

### TC-OPPM-105

**Allocate is blocked without a linked project**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Pass | Pass | — |

**Preconditions:** Prospect opportunity, candidate in Won.

| # | Step | Expected result |
|---|---|---|
| 1 | Click Allocate. | Disabled / refused: "Link the Opportunity to a Project before allocating". |

### TC-OPPM-106

**Won-elsewhere notification**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, PMO2 | Pass | Pass | — |

**Preconditions:** Interview opportunity OPP on AnalytixHub, Java position Fixed 40%, start today+20, end today+120; candidate Akash Pandya (100% remaining) also shortlisted on another open opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | Mark Akash Won on this opportunity while he is still shortlisted on another open one. | Other PMOs get "candidate won elsewhere" listing the other opportunity (actor does not notify themselves). |

### TC-OPPM-107

**Two-way allocation alert**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO, CSM | Fail | As designed | BUG-014 |

**Preconditions:** Janki shortlisted on two interview opportunities.

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO start a Direct ticket / new allocation for Janki. | Alert lists her interview opportunities with allocation % (does not block). |
| 2 | As PMO shortlist an employee with a current/upcoming allocation. | Alert lists the direct allocations. |
| 3 | As CSM start a Direct ticket for Janki. | Same alert shown to the CSM. |

### TC-OPPM-108

**Employee list "Interview Opportunities" column**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO, TM | Pass | Pass | — |

**Preconditions:** Janki on two open interview opportunities.

| # | Step | Expected result |
|---|---|---|
| 1 | Employee Details → search janki.naik. | Interview Opportunities column shows 2. |
| 2 | Hover the cell. | Lists both opportunities with allocation %. |

### TC-OPPM-109

**Employee profile — opportunity history**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Minor | Positive | PMO, Candidate | Pass | Pass | — |

**Preconditions:** Akash Pandya allocated via an opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | Open Akash's profile → Opportunities. | Every opportunity he was shortlisted for, with stage and status (incl. Project Allocated). |
| 2 | As a different employee open Akash's history (API). | Empty / not allowed. |

### TC-OPPM-110

**Requests Tracking — Interview and Direct tabs**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Fail | Not required | BUG-026 |

**Preconditions:** Opportunities in several statuses.

| # | Step | Expected result |
|---|---|---|
| 1 | Open Requests Tracking → Project Allocation → Interview tab. | Opportunities listed; tiles All/Open/Won/Lost/On Hold. |
| 2 | Compare tiles with the board. | Lost counts only Lost opportunities; No Longer Required has its own figure. |


## M12 Opportunity status lifecycle

### TC-OPPM-111

**On Hold blocks pipeline actions**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

| # | Step | Expected result |
|---|---|---|
| 1 | Cancel Request / status → On Hold. | Cards move to the On Hold column. |
| 2 | Try to shortlist, approve or tick checklist. | Refused: "not allowed while the Opportunity is not open". |
| 3 | Re-open (status Open). | Cards back in their stages. |

### TC-OPPM-112

**Mark Lost releases candidates**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

| # | Step | Expected result |
|---|---|---|
| 1 | Set status Lost. | Candidates Released and unblocked; ticket hidden from default board; visible in Lost column. |
| 2 | Re-open. | Released candidates removed; cards back to Pending to Shortlist. |

### TC-OPPM-113

**No Longer Required needs confirmation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

| # | Step | Expected result |
|---|---|---|
| 1 | Choose No Longer Required. | Confirmation pop-up shown first. |
| 2 | Confirm. | Archived as NLR (red-border highlight per FRD). |
| 3 | Set to the same status again. | Refused. |

### TC-OPPM-114

**Mark Won at opportunity level**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO | Pass | Pass | — |

**Preconditions:** Position with 1 In Process, 1 awaiting approval, 1 shortlisted.

| # | Step | Expected result |
|---|---|---|
| 1 | Set opportunity status Won. | In Process candidate → Selected/Won; awaiting and shortlisted candidates removed. |

### TC-OPPM-115

**Lost on an opportunity that already has an allocation**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Edge Case | PMO | Pass | Pass | — |

**Preconditions:** One candidate in Project Allocated.

| # | Step | Expected result |
|---|---|---|
| 1 | Set status Lost. | Allocated candidate stays Project Allocated; allocation ticket unchanged. |
| 2 | Re-open. | Allocated card intact. |

### TC-OPPM-116

**Re-initiate a position**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, TM | Pass | Pass | — |

**Preconditions:** Position with candidates shortlisted and approved.

**Test data**

| Field | Value |
|---|---|
| Reason | Client rejected all |

| # | Step | Expected result |
|---|---|---|
| 1 | As TM click Re-initiate. | Not available. |
| 2 | As PMO Re-initiate without reason. | Refused. |
| 3 | Re-initiate with the reason. | All non-allocated candidates released; cards back to Pending; "Re-initiated by … on …" shown. |
| 4 | Re-initiate again with no candidates. | Refused: nothing to re-initiate. |

### TC-OPPM-117

**Roles that cannot change status**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | CSM, TM, EM, RM, PM, Admin, Employee | Pass | Pass | — |

**Preconditions:** Logged in as PMO. Opportunity with one candidate In Process and one awaiting approval.

| # | Step | Expected result |
|---|---|---|
| 1 | Each role tries Cancel Request / Lost / On Hold. | No action offered; API 403. |


## M13 Direct ticket lifecycle & cancellation

### TC-OPPM-118

**PMO moves Direct ticket Open → In Review → Awaiting → Approved (allocates)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Positive | PMO | Pass | Pass | — |

**Preconditions:** Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

| # | Step | Expected result |
|---|---|---|
| 1 | Board → Direct → set the ticket status to In Review. | Saved. |
| 2 | Try Open → Awaiting directly, or back to Open. | Not allowed (forward one step only). |
| 3 | Set Awaiting, then Approved. | Approved; employee allocated immediately (NA ticket APPROVED, start = tentative date); stage Project Allocated. |
| 4 | Requests Tracking → Direct tab. | NA ticket listed. |
| 5 | Try to change an Approved ticket. | Not allowed (terminal). |

### TC-OPPM-119

**Only PMO moves Direct tickets**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | CSM, TM | Pass | Pass | — |

**Preconditions:** Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

| # | Step | Expected result |
|---|---|---|
| 1 | As the raising CSM change the status. | No status dropdown / API 403. |
| 2 | As TM. | Refused. |

### TC-OPPM-120

**Owner edits / swaps the employee while Open or In Review**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | CSM | Pass | Pass | — |

**Preconditions:** Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

| # | Step | Expected result |
|---|---|---|
| 1 | As CSM swap the employee while In Review. | Saved; new employee on the ticket. |
| 2 | After PMO moves it to Awaiting, swap again. | Refused (only while Open / In Review). |
| 3 | After Approved, edit anything. | Refused. |
| 4 | Another CSM (not owner) tries to edit. | Not found. |

### TC-OPPM-121

**Reject a Direct ticket needs a reason**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | Pass | Pass | — |

**Preconditions:** Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15.

**Test data**

| Field | Value |
|---|---|
| Reason | Employee committed elsewhere |

| # | Step | Expected result |
|---|---|---|
| 1 | Reject without reason. | Refused. |
| 2 | Reject with 1,025 chars. | Refused. |
| 3 | Reject with the reason. | Rejected; employee stays on the card; terminal. |

### TC-OPPM-122

**CSM cancels a Direct ticket (tag only) and PMO closes it**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | CSM, PMO | Pass | Pass | — |

**Preconditions:** Direct ticket raised by CSM tarun.sharma on AnalytixHub for a free QA employee, Fixed 30%, start today+15. Status In Review.

**Test data**

| Field | Value |
|---|---|
| Reason | Client postponed |

| # | Step | Expected result |
|---|---|---|
| 1 | As CSM cancel without a reason. | Refused: reason required. |
| 2 | Cancel with the reason (confirm the pop-up). | Cancelled tag shown; stage stays In Review. |
| 3 | Cancel again. | Refused: already cancelled. |
| 4 | Check PMO notifications. | PMO notified: ticket cancelled, with reason. |
| 5 | As PMO set the opportunity to No Longer Required. | Closed; hidden from default board. |

### TC-OPPM-123

**CSM cancels an Interview ticket**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | CSM, PMO | Fail | Not built | BUG-003 |

**Preconditions:** Interview opportunity raised by the CSM.

| # | Step | Expected result |
|---|---|---|
| 1 | As CSM open the ticket and cancel it. | FRD rule 22: Cancelled tag added, stage unchanged, PMO notified. |

### TC-OPPM-124

**Prospect Direct ticket cannot be approved until a project is linked**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | CSM, PMO | Pass | Pass | — |

**Preconditions:** Direct ticket for a Prospect (no project), in Awaiting.

**Test data**

| Field | Value |
|---|---|
| Project | ElitePay |

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO open the status dropdown. | Approved not offered. |
| 2 | As CSM link ElitePay. | Client type becomes Existing. |
| 3 | As PMO set Approved. | Allowed; allocation created. |

### TC-OPPM-125

**Approve now, confirm allocation later**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | Pass | Pass | — |

**Preconditions:** Direct ticket created with "confirm allocation" unticked.

| # | Step | Expected result |
|---|---|---|
| 1 | Move to Approved. | Employee selected but not yet allocated. |
| 2 | Confirm the allocation from the ticket. | Allocation created; stage Project Allocated. |


## M14 Notifications

### TC-OPPM-126

**Candidate notifications along the pipeline**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | Candidate | Fail | Pass | BUG-023 |

**Preconditions:** Candidate goes through shortlist → approve → interview scheduled → reject.

| # | Step | Expected result |
|---|---|---|
| 1 | Shortlist the candidate. | "You've been shortlisted … — pending preparation." |
| 2 | Approve. | Approval notification. |
| 3 | Schedule an interview. | Interview scheduled notification. |
| 4 | Reject one of three shortlisted candidates with a reason. | Only the rejected candidate receives the rejection notification (plus PMO/owners); the other candidates on the position do not. |

### TC-OPPM-127

**Assignment notifications to PM and CSM**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PM, CSM | Fail | Pass | BUG-011 |

**Preconditions:** PMO creates an opportunity assigned to PM gaurav and CSM tarun.

| # | Step | Expected result |
|---|---|---|
| 1 | Check the PM's bell. | "You've been assigned to OPP-nnnn". |
| 2 | Check the CSM's bell. | Same notification for the CSM. |

### TC-OPPM-128

**TM notified when a position is edited after shortlisting (rule 18)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | TM | Pass | Pass | — |

**Preconditions:** Candidates shortlisted; PMO edits tech stack.

| # | Step | Expected result |
|---|---|---|
| 1 | PMO changes the tech stack. | TM receives "position updated — please re-review". |

### TC-OPPM-129

**Notification links open the right page**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | Any | Pass | Pass | — |

**Preconditions:** Notification for an opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | Click the notification. | Opens the opportunity detail. |
| 2 | Click one for an opportunity the user was removed from. | Graceful "not available" message, no broken page. |


## M15 Security

### TC-OPPM-130

**Unauthenticated and malformed requests**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | None | Pass | Pass | — |

**Preconditions:** No session.

| # | Step | Expected result |
|---|---|---|
| 1 | (API) GET /api/v1/opportunities/openings without cookies. | 401. |
| 2 | (API) GET /api/v1/opportunities/abc. | 400 (uuid expected). |
| 3 | (API) POST with an unknown field. | 400 "property … should not exist". |

### TC-OPPM-131

**HTML in titles is shown as text**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | PMO | Not run | Not run | — |

**Preconditions:** Opportunity titled QA-AUTO <img src=x onerror=alert(1)> xss.

| # | Step | Expected result |
|---|---|---|
| 1 | Open the board and the ticket. | Title shown as literal text; no script runs. |


## M16 Retest additions (26 Oct 2026)

### TC-OPPM-132

**"Did Interview Happen" stage after the interview day passes**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Positive | PMO | — | Pass | — |

**Preconditions:** Candidate In Process with one planned round.

**Test data**

| Field | Value |
|---|---|
| Round date | yesterday, then +2 days |

| # | Step | Expected result |
|---|---|---|
| 1 | Date round 1 yesterday. | Card moves to "Did Interview Happen" (shares the Interview Scheduled slot); stage counts include it. |
| 2 | Try to drag a card into "Did Interview Happen". | Not allowed (OPP_014). |
| 3 | Reschedule the round to 2 days ahead. | Card back to Interview Scheduled. |
| 4 | Date it yesterday again and confirm the interview happened (move to Waiting for Feedback). | Card in Waiting for Feedback; one step, no skip confirmation. |

### TC-OPPM-133

**"Interview Required" field removed from Interview positions**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | — | Pass | — |

**Preconditions:** On /pre-sales/new with Interview Opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | Look at Interview Details on Position #1. | Only Tentative Interview Date; no Interview Required Yes/No. |
| 2 | (API) Send isInterviewRequired on a position. | 400 "property isInterviewRequired should not exist". |

### TC-OPPM-134

**Positions are listed in the order they were created**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | — | Ignored | BUG-034 |

**Preconditions:** PMO on /pre-sales/new.

**Test data**

| Field | Value |
|---|---|
| Positions | A-first, B-second, C-third |

| # | Step | Expected result |
|---|---|---|
| 1 | Create an opportunity with the three positions in that order. | Created. |
| 2 | Open Position Details and Ticket Info. | Positions shown A, B, C. |
| 3 | Repeat with 4 more opportunities. | Always A, B, C. |

### TC-OPPM-135

**Removing a shortlisted candidate needs a reason (owners notified, not the candidate)**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Negative | PMO | — | Pass | — |

**Preconditions:** Candidate in Shortlisted.

**Test data**

| Field | Value |
|---|---|
| Reason | Client changed scope |

| # | Step | Expected result |
|---|---|---|
| 1 | Click remove (bin) on the candidate. | Dialog asks for a reason; empty reason blocked (API 400). |
| 2 | Enter the reason and confirm. | Card back to Pending to Shortlist; reason stored; PMO/raiser notified. |

### TC-OPPM-136

**Project locked once a candidate is allocated**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PMO | — | Pass | — |

**Preconditions:** OPP-0054 with a candidate in Project Allocated (NA-0416).

| # | Step | Expected result |
|---|---|---|
| 1 | Link Project → choose ElitePay. | Refused: "A Candidate is already allocated to the linked Project…" (OPP_176). |
| 2 | Unlink the project. | Refused (OPP_176). |
| 3 | Change the project on an opportunity with no allocation. | Allowed. |

### TC-OPPM-137

**Ticket number fully visible in the board list**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Minor | Positive | PMO | — | Fail | BUG-035 |

**Preconditions:** Board in List view (search by OPP number is the agreed way to find tickets).

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as bhumi.chauhan@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Click Requests Tracking → Opportunity Allocation in the sidebar. Open List view. | Board list shown. |
| 3 | Read the Ticket ID column. | Full number visible (e.g. OPP-0112), not "OPP-011…". |

### TC-OPPM-138

**Candidate breadcrumb on the opportunity page**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Low | Trivial | Positive | Candidate | — | As designed | BUG-030 |

**Preconditions:** janki.naik is a candidate on an open opportunity.

| # | Step | Expected result |
|---|---|---|
| 1 | Open https://simerp-dev.simform.solutions/dev-login and sign in as janki.naik@simformsolutions.com (password from .env). | Login succeeds. |
| 2 | Profile → Opportunities → open the opportunity. | Detail opens with only her row; no shortlisted count. |
| 3 | Read the breadcrumb. | Points to a page she can open (e.g. Profile / Opportunities), not "Requests Tracking". |

### TC-OPPM-139

**PM sees only opportunities assigned to him**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Major | Negative | PMO, PM | — | Fail | BUG-036 |

**Preconditions:** PM gaurav.panchal manages EventDriven | CQRS Framework.

**Test data**

| Field | Value |
|---|---|
| OPP-0150 | PMO-raised on EventDriven, not assigned |
| OPP-0151 | assigned to the PM |
| OPP-0152 | unrelated |

| # | Step | Expected result |
|---|---|---|
| 1 | As PMO create the three opportunities in the test data. | Created. |
| 2 | Open https://simerp-dev.simform.solutions/dev-login and sign in as gaurav.panchal@simformsolutions.com (password from .env). Requests Tracking → Project Allocation → Interview Allocation. | Only OPP-0151 (assigned) is listed. |
| 3 | Open OPP-0150 by link. | Not available to the PM. |
| 4 | Open OPP-0152 by link. | Not available to the PM. |

### TC-OPPM-140

**An employee already allocated or fully booked cannot be approved on another opportunity**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| High | Critical | Negative | PMO, TM | — | Fail | BUG-012 |

**Preconditions:** Akash Pandya allocated 40% (NA-0416); Nisha Das fully booked (0% remaining).

**Test data**

| Field | Value |
|---|---|
| Position | Fixed 50% |

| # | Step | Expected result |
|---|---|---|
| 1 | Shortlist Akash Pandya on a new 50% position and have the TM approve. | Refused or warned — he is already allocated elsewhere. |
| 2 | Shortlist Nisha Das on a new 50% position and bypass approval as PMO. | Refused — she has 0% remaining. |
| 3 | Open each employee's profile → Opportunities. | No over-booked reservations. |

### TC-OPPM-141

**Rejection notification goes only to the rejected candidate**

| Priority | Severity | Type | Role | Result 22 Oct | Retest 26 Oct | Linked bug |
|---|---|---|---|---|---|---|
| Medium | Major | Positive | PMO, Candidates | — | Pass | — |

**Preconditions:** Three candidates shortlisted on one position (Janki Naik, Vandana Mishra, Akash Singh).

**Test data**

| Field | Value |
|---|---|
| Reason | RT3 recipients probe |

| # | Step | Expected result |
|---|---|---|
| 1 | Reject Akash Singh with the reason. | Rejected. |
| 2 | Log in as akash.singh and open the bell. | Rejection notification received. |
| 3 | Log in as janki.naik and vandana.mishra and open the bell. | No rejection notification about Akash. |
| 4 | Log in as a second PMO. | Notification received with the reason. |
