# Hardik's "To be tested" tasks, 13 Nov 2026

**Environment:** SimERP DEV, API 6.9.0 (backend restarted ~01:46 IST 13/11, after all three PRs were merged on 12/11).
**Items:** SI4-T1672, SI4-T1682, SI4-T1680. These are the only open Zoho tasks assigned to Hardik in "To be tested".
**Evidence:** `reports/results/2026-11-13-hardik/` (suite log, probe JSON, screenshots).

| Task | Result |
|---|---|
| SI4-T1672 Skill Management redesign (+ fixes for SI4-I635/I636/I637) | **Pass.** Suite 26/26. All three bugs we filed are fixed. |
| SI4-T1682 RM can view goals + account grade + duplicate project | **Pass**, with 1 finding (F-1) to raise. |
| SI4-T1680 Interview tracker sheet import | **Pass** (dry run on a local DB copy + check on dev). |

## SI4-T1672: Pass

Backend `bd995777`, `95801a6b`, `934e21a3`; frontend `9b3ec45e`.

- `tests/e2e/employee/skills-redesign` (TC-EMPSKL-150..175): **26/26 pass**.
- **SI4-I635 fixed**: Employee/CSM `PATCH /skills/:id` → 403 (TC-173). TM/EM/PM cannot change tags of a skill outside their department (TC-174).
- **SI4-I636 fixed**: TM/EM/PM `DELETE` of a skill not in their department → 403 (TC-170).
- **SI4-I637 fixed** (Zoho status was "Reopen"):
  - TM: the Add drawer lists only ANDROID, CSM and QA, the same as `/skills/manager-departments`. EM: only OPEN SOURCE, POST-SALES BA, PYTHON and QA.
  - Adding a skill to their own department works (201).
  - Adding to ADMIN → 403. No orphan skill is left behind, and a retry is still 403, not "name exists".
  - TC-EMPSKL-175 has been rewritten to check this behaviour; the old version asserted the bug.

## SI4-T1682: Pass, with one finding

Backend `ef039c0f`, `10503ac5`; frontend `c4a2ee4c`. Task text: show account grade to RM; no duplicate project after allocate → deallocate → allocate; RM can view goals and their details.

Account used: hardik.trivedi (RM + DM; goal scope TEAM = members of teams he manages, 92 people).

| Check | Result |
|---|---|
| Goals page as RM / TM / EM | Goals → By Employee / **By Goal** tabs now visible. No "Add Goal". |
| Open a goal (RM, EM) | "Goal Details" drawer, read-only: 0 editable fields, no Save. |
| `GET /goals` as RM | 547 goals (full catalog). Assignments shown: only the RM's 92 team members + himself. **No one outside the team.** |
| Goal detail as RM | Names only for the team. Org-wide counts per department are shown (numbers only, no names). This matches the commit ("organization-wide"). |
| Employee | `GET /goals` → 403. No change. |
| Account grade | RM gets `accountGrade` on all 139 projects and can sort by it (200). RM still does not get `description`, as intended by the migration. |
| Duplicate project | 92 team members' profiles checked as RM and as Admin: **no project shown twice** in `projects` or `pastProjects`. |

### F-1: RM, TM and EM can create, edit and delete any catalog goal through the API

The UI shows the By Goal catalog to these roles as **read-only** (frontend comment: "RM/TM/EM get it read-only"). The API does not enforce that:

| Role | `PATCH /goals/:id` on an Admin-created goal | `DELETE /goals/:id` | `POST /goals` (new catalog goal) |
|---|---|---|---|
| RM (hardik.trivedi) | 200, description changed | 200, goal gone (404) | 201 |
| TM (sudhansu.patel) | 200 | 200 | 201 |
| EM (kunal.jadeja) | 200 | 200 | 201 |

Throwaway `AUTO-GOAL-*` goals only. All were hard-deleted by Admin afterwards.

- **Cause:** these roles hold `goals.create/update/delete`. The frontend comment says TM/EM need them "for other surfaces".
- **What T1682 changed:** goal TEAM scope is now `{}` (organisation-wide) even for an RM with no teams. So any RM can now reach every goal, including RMs who manage no team.
- **Same pattern as SI4-I635:** the UI hides the action, but the API allows it.
- **Open question for Hardik/PO:** should catalog edit/delete be limited to Admin and Goal Manager at the API level?
- **Not filed in Zoho.**

## SI4-T1680: Pass

Backend `40a6f118`, `a4ae4518`. This is a one-time seeder migration (`20261105120000_seeder_interview_tracker_import`). It imports PMO's interview tracker sheet as Opportunities: 9 sheet tickets → 11 Opportunities, 27 positions, 16 candidates.

**On dev:** the migration is applied, but nothing was imported. None of the sheet clients exist (DIRTT, Alpha 10x, Kapitus…), and `opportunities/lookup?search=DIRTT` returns nothing. This is the designed behaviour: dev does not have the sheet's people.

**Dry run on the local DB** (Docker Postgres, schema fully up to date). Everything ran in one transaction and was **rolled back**; the local DB was checked unchanged afterwards. Setup: 25 local employees were given the sheet emails, laxit was made PMO, the PMs were given PM, and the CSMs were given CSM except rushabh.shah, who was left without it on purpose.

| Check | Result |
|---|---|
| Created | OPP-0001..0011: 11 opportunities, 27 positions, 32 openings, 19 nominations (16 candidates + 3 Direct), 120 checklist items, 2 interview rounds |
| Notifications | 0 before, 0 after: none sent |
| Stages | CV Shared → Being Prepared (blocked, approval bypassed). Interview on 05/11 and 06/11 → "Did Interview Happen?" with round 1 on that date, because the date has passed. Direct ×3 → Shortlisted / Open. All match the sheet. |
| Raised by | laxit (PMO importer) on all 11 |
| PM/CSM without the role | rushabh.shah left unassigned, with a NOTICE (3 tickets) |
| Run again | All 11 skipped ("already exists"). No duplicates. |
| One person missing (puja.dubey removed) | Nothing imported: "no single active Employee for puja.dubey@simform.com" |

**Notes (not bugs):**
- "Active" means only `deletedAt IS NULL`; exit status is not checked.
- adarsh.m and smit.patel are each nominated and blocked on 2 tickets at the same time, because the sheet lists them that way.
