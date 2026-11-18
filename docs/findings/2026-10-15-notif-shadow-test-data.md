# Test data for SI4-T1527 (Lead/Senior notifications) and SI4-T1464 (shadow swap): dev, 2026-10-15

**How this was gathered.** Read-only. Only GET calls and page views, using the Admin session (`ceo@`, `tests/fixtures/storageState.json`) and the PMO session (`bhumi.chauhan@`, `storageState-pmo.json`). Both access tokens had expired. Opening a page let the app refresh them through its normal `POST /auth/refresh`, and the refreshed state was saved back to the same fixture files. Nothing was created, edited or approved. The PM, CSM and TM sessions were not used.

Sources: `GET /employees?limit=300` (all 3,648 employees, including `team.reportingManager`), `GET /employee-roles` (roles and department access for 3,632 people), `GET /employees/:id` (used to re-check each chain one step at a time), `GET /projects`, `GET /projects/:id`, `GET /allocation-tickets` as PMO (576 tickets), and `GET /notifications`. The chain rule is the one in the code brief: walk `team.rmEmployeeId` up from the RM and stop at the first person who holds the **TM role with department access** to the employee's home department.

---

## 0. Things that change how the tests should be read

1. **`cto@` holds TM (and EM) with access to all 40 departments, and every reporting line ends at the CTO.** So no chain on dev "fails to reach a TM". When a line skips the real department TM, it keeps climbing to the CTO, and everyone on the way counts as a "middle manager".
2. **In the 34 ordinary technical departments, every line is flat.** It is either Employee → RM → dept TM (2,993 people) or RM == TM (327 people). **No ordinary employee has exactly one person between the RM and the TM.** Chains with one or more people in between appear only in **FRONT END, PROJECT MANAGEMENT and PROJECT MANAGEMENT OFFICE**, and among people who hold TM/EM roles themselves.
3. **FRONT END is the "TM not in the RM's upward line" case in practice.** The department TM `abhishek.hingorani@` reports to `priya.sharma@` and is in no FRONT END line. FRONT END lines run `… → sagar.khanpara → rajesh.kumar (EM) → david.lais (ADMIN) → cto (TM)`. Under the code the walk stops at the CTO, so **an EM and an Admin get the RM copy**, and the real department TM gets nothing new. The same happens in PROJECT MANAGEMENT (no TM other than the CTO: `amit.patel` EM and `jinal.patel` Admin get notified) and in PMO (`neha.gupta` EM and `jinal.patel` Admin). Ask the PO whether that is intended.
4. **Approver accounts.** `sudhansu.patel@` is TM for **QA, ANDROID, CSM**. `kunal.jadeja@` is **EM** (not TM) for **QA, POST-SALES BA, OPEN SOURCE, PYTHON**. Only the **QA** control-group employees have `sudhansu` as the TM in their chain. For the FRONT END, PROJECT MANAGEMENT and PMO candidates, the department TM/EM approvers are people we have no accounts for (`abhishek.hingorani`, `rishi.bhatia`, `rajesh.kumar`, `amit.patel`, `foram.malhotra`, `cto`). For those, drive the events with **PMO bypass** or **PMO direct allocation**, neither of which needs a TM approval.
5. **Notice period and PIP don't matter.** The code only checks `deletedAt`. `sagar.khanpara@` (Lead/Senior for 63 FRONT END people) is on NOTICE_PERIOD with a last working date of 2026-10-02 and is still in the line.

---

## GOAL 1: Notifications (SI4-T1527)

### a) Control group: Employee → RM → TM (TM = sudhansu.patel, QA). Approvers: sudhansu (TM) and kunal (EM)

All of these are QA, no role, not on notice or PIP, with no open tickets. Each chain was re-checked through `GET /employees/:id`.

| Employee | Email | publicId | Free % | RM (roles) | TM |
|---|---|---|---|---|---|
| **Ankita Das** | ankita.das@ | `3b99da7c-21f0-4179-8273-972663422709` | 100 | Ekta Mistry (RM) | Sudhansu Patel (TM/RM) |
| **Prakash Pillai** | prakash.pillai@ | `da3c4542-13bb-452b-b619-42095c913d94` | 100 | Charmi Sen (RM, on PIP) | Sudhansu Patel |
| **Kriti Desai** | kriti.desai@ | `58891c8e-f56a-4fc3-bad4-a0bc5c12fceb` | 100 | Kavya Naik (RM) | Sudhansu Patel |
| Yamini Langalia | yamini.langalia@ | `30529afd-9eac-4664-b383-1f9ae1e85335` | 100 | Bhavesh Bansal (RM) | Sudhansu Patel |
| Kartik Dabhi | kartik.dabhi@ | `a3c7173d-5129-4875-b776-aa5bb13d1ee7` | 100 (FlowState, DYNAMIC 0%) | Diya Nair (RM) | Sudhansu Patel |

Expected: only the RM gets `developer_rm_*`, and sudhansu's copies are the same as before the release. There are 28 more free QA employees like these.

### b) Exactly one person between RM and TM (Lead)

**No ordinary employee on dev has this shape.** Every case below involves someone who holds a TM, EM or RM role:

| Employee | Email | publicId | Dept | Chain (RM → Lead → TM) | Notes |
|---|---|---|---|---|---|
| **Sagar Khanpara** | sagar.khanpara@ | `818aa719-2170-486e-bf21-87f4f1e137e6` | FRONT END | Rajesh Kumar [EM] → **David Lais [ADMIN]** → CTO [TM-all] | RM/GOAL_MANAGER role. 100% free. **NOTICE_PERIOD**. Has open DA-0060 (AWAITING_CONFIRMATION) |
| Hardik Trivedi | hardik.trivedi@ | `5f1a4477-84fe-46aa-8360-ca4e0a16983c` | PROJECT MGMT | Amit Patel [EM] → **Jinal Patel [ADMIN]** → CTO | The PM account another tester is using. Don't use |
| Any department TM (e.g. Urvi Trivedi, L1 SUPPORT) | urvi.trivedi@ | n/a | L1 SUPPORT | Rajesh Kumar [EM] → David Lais [ADMIN] → CTO | 37 department TMs have this shape. Allocating a department TM is high-risk |

Options: use Sagar Khanpara (after checking DA-0060). Or treat (b) as not reproducible with ordinary data and ask for a seeded line (an RM whose RM is not the TM, e.g. move one QA RM's team under another QA RM). That would be a data change, so get approval first.

### c) Two or more people between RM and TM (Senior + Lead)

The two FRONT END groups were re-checked through `GET /employees/:id`. None of these employees has an open ticket.

| Employee | Email | publicId | Dept | Free % | Full chain (RM → … → TM) | # middle |
|---|---|---|---|---|---|---|
| **Urvashi Kamath** | urvashi.kamath@ | `f33a8f2b-9d83-43ef-8dce-362f2c627313` | FRONT END | 100 | Sagar Khanpara [RM/GOAL_MGR] → Rajesh Kumar [EM] → David Lais [ADMIN] → CTO [ADMIN/RM/TM/EM] | 2 |
| **Mohit Kavad** | mohit.k@ | `aed8fd7e-9029-4168-aa47-01c21f785a87` | FRONT END | 100 | same as above | 2 |
| **Pooja Menon** | pooja.menon@ | `32aa85a9-5415-40c0-bec2-d52a365a9e0e` | FRONT END | 77 (GatewayPro 23%) | Lalit Mehta [RM] → Sagar Khanpara → Rajesh Kumar [EM] → David Lais [ADMIN] → CTO | 3 |
| Kashyap Vyas | kashyap.vyas@ | `9e022354-91e9-4046-b120-57626ad9c5a6` | PROJECT MGMT | 100 | Yatharth Patil [PM/DM] → **Hardik Trivedi [RM/DM]** → Amit Patel [EM] → Jinal Patel [ADMIN] → CTO | 3 |
| Mansi Barot | mansi.barot@ | `1ada54a2-a413-4129-82b4-60459dfc210c` | PROJECT MGMT | 70 (UILabs 30%) | Tejas Limbachiya [RM/PM/DM] → **Hardik Trivedi** → Amit Patel [EM] → Jinal Patel [ADMIN] → CTO | 3 |

Expected under the code: the RM plus every middle person (Sagar, Rajesh Kumar, David Lais) gets `developer_rm_*`. The CTO, as TM, gets only the usual TM copies. The real FRONT END TM, Abhishek Hingorani, gets nothing new. Also avoid Omkar Yadav and Tarun Dabhi, who are 100% booked.

Counts: FRONT END has 9 people with 2 in between and 63 with 3. PROJECT MANAGEMENT has 9 and 83. PMO has 9 and 83. Many FRONT END ones are on notice or PIP.

### d) Edge cases

| Case | Employee / setup | Details |
|---|---|---|
| **PM who is also a Lead/Senior (G1 dedup)** | **Kashyap Vyas** (`9e022354-…`, 100% free) or Mansi Barot. PM **hardik.trivedi** raises the request on **HyperScale** (`3d138a89-4d06-4839-8091-436fba0a2dd6`) or **KubeDash** (`a912a7d7-c99c-4a9c-9958-ed94797fd5a6`) | Hardik is in the middle of the line for 83 PROJECT MANAGEMENT employees, all under his 9 direct reports. Expected per the acceptance criteria: one notification. Code today: `pm_allocated` plus `developer_rm_assigned`, so two. The department approver is not one of our accounts, so use PMO bypass, or PMO direct allocation (PM copy plus chain copy) |
| PM who is the RM (existing dup, not new) | Hardik's direct reports: yatharth.patil, tejas.limbachiya, hetvi.nagar, jignesh.raval, kartik.hegde, nisha.patil, varsha.rawat, dhrumil.parekh, laxmi.shetty (all PM/DM role holders) | Was already doubled before T1527 |
| CSM tarun.sharma@ in a chain | n/a | No one reports to Tarun, and he is in nobody's line. His own line is Nikhil Rathod → Rajan Kale [TM CSM] |
| **RM == TM** | **Kavya Naik** `4d944f8d-98a3-4ff8-97be-2b46de7915f0` (100% free); **Manish Desai** `0fb86650-9b25-4e21-9126-f3f7f7f318d8` (39% free); Dev Mukherjee `7be81750-dc23-4c4c-a4f7-194040cd3d63` (75% free, currently a shadow on BoundaryX) | QA leads whose RM is **sudhansu.patel** (the TM). Expected: Sudhansu gets RM + TM copies, nobody above him is added (Amit Patel / Jinal Patel / CTO get nothing) |
| **Department TM not in the RM's line** | Any FRONT END employee from (c) | See §0.3. Abhishek Hingorani (FRONT END TM) is skipped, and the EM and Admin above get RM copies. The same happens for ANDROID, where `sudhansu` holds ANDROID TM but is in no ANDROID line. There the walk stops at `shaurya.modi` (ANDROID TM), so the effect is harmless |
| RM who has left (LWD passed, hidden from the employee list) | **Nilesh Modi** `4fea71a3-07fb-44a4-bb72-60216105712f` (RM Suresh Kapoor, LWD 2026-09-11); **Vandana Das** `7cb4c7fb-a9c2-4b44-a309-fbd35bbfd117` (RM Manan Kulkarni, LWD 2026-09-15). Both FRONT END, 100% free | 18 FRONT END employees still report to these two. Both RMs are hidden from `GET /employees` but `GET /employees/:id` returns 200, so they are probably **not** soft-deleted. If that's right, the walk goes on: exited RM → Sagar → Rajesh → David → CTO, and an exited person is notified. If they are soft-deleted, G4 applies (nobody). The test tells you which. (Note: `jalpan.p@` is also in this group) |
| No team, so no RM at all | 15 trainees with `@simform.test` emails (e.g. aarav.patel@simform.test `1a833d1e-97f0-4bb3-aee4-9ed0014279ee`) | `team = null`: no RM and no chain. This is not G5 (no department) |
| PMO in the chain (G10, actor notified of own action) | PMO **bhumi.chauhan** is the RM of 6 PMO-dept employees: Falgun Solanki `127b8e94-81ab-4175-928a-cb79933d7058`, Nikhil Joshi `ba5bb211-…`, Arjun Khandelwal `93b66c7b-…`, Neel Jobanputra `f14ac90c-…`, Aayush Patel `e4de4bb3-…`, Sai Limbachiya `009fbb96-…`. Their line is Bhumi → **Palak Saxena [PMO/DM]** → Neha Gupta [EM] → Jinal Patel [ADMIN] → CTO | When Bhumi direct-allocates or acknowledges one of them, check whether Bhumi gets her own RM copy |
| Middle person who is a TM of a different department (G6) | **None on dev** | Nobody in the middle of any line holds the TM role |
| Cycle (G3) | **None on dev** | |

### Is the T1527 backend deployed on dev?

**Could not confirm with read-only access.**
- PR #545 merged to `development` today. The frontend shows **6.4.2**, and the latest What's New entry is v6.4.0. Release notes don't cover backend-only changes.
- Neither Admin (`ceo@`) nor PMO (`bhumi`) is in the middle of any reporting line, so their notifications can't show the change.
  - Admin: 5 notifications (`period_cancelled`, `roles_updated`).
  - PMO: 467 notifications. The latest 100 are `created`, `allocation_revised`, `auto_apply_failed`, `pr_reviewer_requested`, `period_cancelled` and `closed`.
- The `eventType` format is `notification.allocation_ticket.<event>`, e.g. `notification.allocation_ticket.allocation_revised`.
- Email: `GET /sync-queue/jobs?dataType=NOTIFICATION_EMAIL` returns **0 jobs**, and so does the unfiltered call. Either email is off, or jobs are cleaned up straight away. In-app is the only practical proof.
- **How to confirm:** run one covered event for a (c) employee, for example PMO direct allocation of Urvashi Kamath. Then, via login-as, check `GET /notifications` for **David Lais** or **Rajesh Kumar**: look for a new `notification.allocation_ticket.developer_rm_*` or `…direct_employee_rm_assigned`. If nothing new shows up there while Sagar (her RM) does get one, the change is not deployed.

---

## GOAL 2: Shadow swap (SI4-T1464)

**The linked-groups backend is on dev.**
- Ticket list items have a `group` field, and `GET /allocation-tickets?groupPublicId=<uuid>` is accepted (an unknown parameter is rejected with 400).
- **No linked groups exist yet.** All 576 tickets have `group: null`, so there are no G-n tickets in Requests Tracking.

### Existing main + shadow pairs on hardik.trivedi@ (PM) projects

Tarun Sharma's 4 CSM projects have no shadow pairs.

On each shadow row, `shadowDeveloper` names the **main**. Hours are `totalHoursLogged` on that project.

| Project (PM / CSM) | Shadow (dept, hours) | Main (alloc, hours, end) | Blockers |
|---|---|---|---|
| HyperScale `3d138a89-…` (Hardik / Priya Chopra) | **Aarav Dutta** (QA, 0h) `da678e90-41e1-4fb9-a311-8e38e2d7d745` | Aarushi Thakkar (MS AI, FIXED 55%, 876.9h, ends 2026-11-17) `75ce777d-…` | Main has **UA-0007 OPEN** on this assignment, so the swap fails with `_024`. Aarav is 99% booked on DataBricks (1% free), so the 55% promotion would fail `_099` at approval |
| HyperScale | **Neel Rathod** (QA, 0h) `d7afe738-4e5d-40b0-926d-68d5d1cf73c9` | Keyur Dutta (QA, DYNAMIC, 0h, no end). Keyur is himself the shadow of the departed Sachin Iyer | Keyur's assignment has **RA-0005 OPEN** (shadow replacement), so `_024` |
| HyperScale | Kashyap Makwana (QA, 0h) `2cc51c8a-…` | Sachin Iyer (GOLANG, 5%, 949h, **ended 2026-08-03**) | Main has **UA-0028 AWAITING_CONFIRMATION**. The main's end date has passed, so the promotion end would come before its start (TC-040) |
| HyperScale | Keyur Dutta (QA, 0h) | Sachin Iyer (as above) | as above, plus RA-0005 |
| HyperScale | Ankita Desai (DESIGN, 0h), row ended 2026-08-22 | Darshan Thakor (DESIGN, 25%, 450h, ended 2026-07-24) | Shadow has DA-0018 AWAITING. Both rows have ended. Stale |
| KubeDash `a912a7d7-…` (Hardik / Ravi Vyas) | **Diya Nair** (QA, 0h) `ba4e7184-5d3c-4bfe-ac87-4bc56d00d3c7` | Hardik Arora (IOT, 60%, 1,787h, **ended 2026-06-28**, no current allocation) | No open ticket on either KubeDash assignment. The main's end date has passed, so this is the TC-040 "promotion end < start" case. Usable only for that edge test |

**Shadow with ≤20h:** every existing shadow has 0h, but each pair above is blocked. **Shadow with >20h:** **none exist** on Hardik's or Tarun's projects. Across all of dev the only live shadow with hours is Shaurya Agarwal (QA, on PIP), with **exactly 20h** on CapacityX (PM Feni Vasani, not our accounts; RA-0001 is open). That is a ≤20 boundary case, not >20.

### Recommended setup (PMO via `/my-tickets/direct-allocation`. These are state changes, so approve them first)

Tarun Sharma's projects have **zero open tickets**, which makes them the cleanest place for a swap. Hardik's HyperScale/KubeDash have about 50 open NA/UA/RA/DA tickets.

**Pair 1 (≤20h happy path), on a Tarun Sharma (CSM) project.** The step-2 promotion goes to the QA department, so sudhansu (TM) or kunal (EM) can approve it.

| Role | Candidate | Notes |
|---|---|---|
| Project | **ViewForge \| BI Dashboard** `fd79a71e-c3c3-4c75-8a06-38509a14c7a3` (PM Tirth Chopra, CSM Tarun). Alternatives: XCrypt `c20430eb-7e7e-44e6-b769-3c7756e6a9e2`, ElitePay `cc091428-4a4b-410e-9f32-f282b374d8e6` | No open tickets |
| Main (existing member) | **Nimisha Bose** `91da7795-4b70-4b60-aab6-837abe5de0b0` (POST-SALES BA, FIXED 20%, 0h, ends 2026-12-22, 80% free). Alternatives: Ananya Hegde on XCrypt (55%, ends 2027-05-31), Jay Modi on ElitePay (45%, ends 2027-01-08) | Future end date and no tickets |
| Shadow (new, 0h) | **Ankita Das** `3b99da7c-…` or **Prakash Pillai** `da3c4542-…` or Kriti Desai `58891c8e-…` (all QA, 100% free, no tickets) | Promotion takes the main's %. All 100% free |

**Pair 2 (>20h, Bug 1 / TC-SHDLNK-029).**
- Because the swap fails when it is created, no approver is needed.
- The only person with >20h on one of these projects who is free and now off the project is **Kunal Menon** `f94d6cb2-e5b5-4c14-99d2-3fbd28a1cde9` (DATA ENGINEERING, 100% free).
  - He logged **967.7h on HyperScale**, and that row has been archived (ended 2026-08-31).
  - Re-add him to HyperScale as the shadow of a live HyperScale main. Bhavesh Bansal (QA, 20%, no end date) and Manish Desai (QA, 20%, no end date) both have no open tickets on HyperScale.
- **Caveat:** this only reproduces the bug if the >20h rule counts hours per employee-and-project rather than per assignment. Check `allocation-ticket-validator.service.ts:484-508`.
- If the rule counts per assignment, no >20h shadow can be made on dev without timesheet data.
- Tarun's projects have no free past member with >20h who is still in the employee list. Ankita Contractor, Rohan Kulkarni and Aarav Rawat are hidden or have left.

**Other free employees in the approvers' departments** (no current allocation, no open tickets, no role, not on notice or PIP):
- **QA (28):** Yamini Langalia, Ankita Das, Neel Pillai `30aad891-…`, Prakash Pillai, Riddhi Verma `5f78306e-…`, Kriti Desai.
- **ANDROID (44)**, approver sudhansu (shared TM with shaurya.modi): Yamini Bhatt `708cde67-…`, Foram Roy `e28860d1-…`, Jay Roy `b7e4498a-…`.
- **POST-SALES BA (42)**, kunal EM: Sunil Singh `09e88354-…`, Pranav Thakor `7aceedaa-…`.
- **OPEN SOURCE (53)**, kunal EM: Chetan Desai `40292916-…`.
- **PYTHON (60)**, kunal EM: Varun Nagar `29b01c62-…`.
- **CSM:** none free.

### Linked groups / shadow-swap tickets in Requests Tracking

None. 0 of 576 tickets have a `group`. The newest tickets are UA-0129 and UA-0128 (DataBricks, today, APPROVED) and RA-0015 (GridCompute, 2026-10-13). None are grouped.
