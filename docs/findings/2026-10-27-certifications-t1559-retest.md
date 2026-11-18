# Certifications: SI4-T1559 re-test (2026-10-27)

Environment: dev (simerp-dev.simform.solutions), UI label 6.5.0. Chromium. Previous run: `2026-10-23-certifications-t1559-test-results.md`.

## What changed since 23/10

Bhargav merged more SI4-T1559 work on 26/10 (frontend PRs #522, #525; backend PR #577):

- The second tab is now named by the viewer's permission scope: **Organisation Level** (Admin, PMO, Program Owner), **Department Level** (TM, EM) or **Team Level** (PM).
- Department and Team Level show a flat list, one row per certificate, with the employee's photo and department.
- Department filter on Department Level only. Team Level ignores any `departmentId` in the URL.
- Only Admin and Program Owners can open the holders view.
- `GET /certifications` takes `departmentId` and returns `employee.photoUrl`.

## Suite result

78 tests, **71 pass, 7 fail**.

| Test | Result | Why |
|---|---|---|
| 088, 093, 090, 095 | Fail | Still open bugs 1–4 (below) |
| 041 | Fail | Test is out of date: PM's tab is now "Team Level" |
| 071 | Fail | Test is out of date: PMO now gets the on-behalf switch (scope `create: ALL`) |
| 104 | Fail | Test data: a second "QA-E2E sample certificate" was added for Abhishek Hingorani on 23/10 12:14 (not by our suite), so the holders page shows 2 rows |

## New behaviour checked (all pass)

| Role | Tab | Data seen | On-behalf switch |
|---|---|---|---|
| Admin | Organisation Level (+ New Joiners, Recently Resigned) | 316 certs, 26 departments | Yes |
| PMO | Organisation Level | 316 (same as Admin) | Yes (new) |
| PM | Team Level, no department filter | 13 certs, own team only | Yes |
| TM | Department Level + filter | 5 certs | Yes |
| EM | Department Level + filter | 40 certs, 3 departments | Yes |
| CSM, Employee | No tabs | Own only | No |

- Department filter (EM): OPEN SOURCE → 20 rows, all OPEN SOURCE; cards and footer update; same as the API.
- Team Level (PM) with another department's id in the URL: still shows the full team (13).
- PM opening a holders link directly: shown the Team Level list instead.
- API: invalid `departmentId` → 400 "departmentId should be valid uuid"; unknown department → 0 rows; `photoUrl` returned.

## Bugs still open (not fixed, not yet filed)

| # | Bug | Severity |
|---|---|---|
| 1 | Edit lets you pick and save an expiry past the certificate's validity (Add blocks it). TC-EMPCRT-088 | Medium |
| 2 | Server accepts a future issue date, an expiry past validity and `ftp://` links on create and edit. TC-EMPCRT-093 | Medium |
| 3 | A saved Exam Email can't be cleared: Save stays disabled. TC-EMPCRT-090 | Low |
| 4 | Level option reads "Advance" instead of "Advanced". TC-EMPCRT-095 | Low |
| 5 | Old free-text titles (incl. junk like "12edf", "1454", "defq") are still pick-list certificate types; no delete | Medium |
| 6 | Recently Resigned still has no Edit action for Admin | Low |

## Questions for product

1. PMO now sees Organisation Level and can add on behalf of anyone, but can only edit their own certificates. Intended? (This also answers the old case 045: UI and API now match.)
2. PM / TM / EM can add on behalf too, but can't edit what they added (same as before).
