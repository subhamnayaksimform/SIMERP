# Certifications: SI4-T1559 test results (2026-10-23)

Environment: dev (simerp-dev.simform.solutions), SimERP 6.5.0. Change list: `2026-10-23-certifications-t1559-changes.md`.
Test cases: `reports/test-cases/cases-2026-10-23-EMPCRT-certifications-t1559.json` (26 cases: 18 new, 8 rewritten), rendered in `docs/test-cases/test-cases-2026-10-23-empcrt-certifications-t1559.md`.

## What works

| Area | Result |
|---|---|
| **Edit** | Works for own certificates. Partnership and Certificate are locked. Only changed fields are sent. Toast "Certification updated successfully". Values persist. Expiry before issue, invalid email, `javascript:` links, moving to another employee, and link + file together are all rejected. |
| **Who can edit** | Owner only, plus Admin (any, including resigned employees). PM, PMO, TM, EM and CSM get 404 on someone else's certificate. |
| **Certificate types** | Only Admin sees Add Certificate Type; other roles get 403. API rejects empty and over-long titles, missing or extra validity, validity 0, unknown category, unknown partnership, and duplicate titles (409, case-insensitive). The type created through the UI appears in the employee's list as "title · Level", and a 6-month type pre-fills expiry to today + 6 months. |
| **Add Certification** | Partnership → Certificate list shows exactly that partnership's types. Expiry is pre-filled and capped at the validity in the calendar. Never-expiring types show "This certificate never expires.". Exam Email is optional and validated. |
| **Employee saves a cert of the new type** | Saved (201), Active, expiry 23/04/2027, email stored. Shows in My Certificate and the Organisation catalogue (1 employee, 1 active). |
| **Recently Resigned** | Admin only (all other roles: no tab, API 403). All 29 rows (6 people) joined within the last 6 months and resigned; Left / On notice matches the last working day. Employment filter and search work. Footer total matches the API. |
| **Add Partnership** | Now only name, website and badge colour. Invalid website shows a message. A 300-character name shows "Must be 150 characters or fewer." |

## Bugs found

| # | Bug | Severity | Evidence |
|---|---|---|---|
| 1 | **Edit lets you pick and save an expiry past the certificate's validity.** Add blocks those days in the calendar; Edit doesn't. Saved 29/10/2027 on a 1-year cert issued 21/10/2026 (restored). | Medium | TC-EMPCRT-088; screenshot `reports/2026-10-23-edit-expiry-past-validity.png` |
| 2 | **Server still accepts a future issue date, an expiry past validity and `ftp://` links, now also through Edit.** All three returned 200. Same gap as create (037–039), never filed. | Medium | TC-EMPCRT-093 |
| 3 | **An Exam Email can't be removed once saved.** Clearing the field keeps Save disabled. The API does clear it on an empty value, but the frontend never sends one (its code comment says the API can't, which is out of date). | Low | TC-EMPCRT-090 |
| 4 | **Level option reads "Advance"** instead of "Advanced" in Add Certificate Type (value is ADVANCED). | Low | TC-EMPCRT-095 |
| 5 | **Old free-text titles became pick-list certificates, including test junk.** The migration turned every typed title into a certificate type that employees now pick from: "12edf", "1454", "defq", "Test", "New one", "P1", "partnership 1", "Cloud", "Cloud 1", "QA-NEG probe - please delete", and the QA-E2E titles. There is no delete for types. On production, typos and spelling variants of the same certificate would each become a separate entry. | Medium | API `GET /certifications/types` |
| 6 | **Admin can't edit a resigned employee's certificate in the UI.** The backend was changed so "the Recently Resigned tab rows are editable", but that tab has no Edit action. | Low | Recently Resigned has no Actions column |

## Questions for product

1. A PM or TM can add a certificate on behalf of a team member but can't edit it afterwards (edit is owner, Admin or Program Owner only). Intended?
2. Add Partnership allows a duplicate name ("AWS"): Save is enabled. Not submitted, so the server response is unknown. Should names be unique?
3. Recently Resigned is not in the Certificate Tracking journey doc. Is the 6-month window right?

## Test data

| What | Detail |
|---|---|
| New certificate type (approved) | "QA-E2E type 2026-10-23 - please delete", QA-E2E Partner 2026-10-15, 6 months, Fundamental (`275b4357-272c-4e7c-af0f-48b27c1c91dc`) |
| New certificate (approved) | Same title, on kashyap.patel, 23/10/2026 → 23/04/2027, Exam Email kashyap.qa@example.com (`f0849b17-1459-4751-b207-e1cc3f280844`) |
| Edited and restored | "QA-E2E self-add 2026-10-21 - please delete" (kashyap.patel); one Omkar Das seed certificate (Exam Email set by Admin, then cleared) |
| Seed data now on dev | The new seed script added certificates and resigned joiners (Omkar Das, Jagruti Rao, Kartik Gajjar, Ritika Dodia, Karan Gandhi). It also gave **kashyap.patel** (our Employee test account) a resignation: joined 15/07/2026, last working day 21/10/2026, shown as "Left". |

## Automated suite after the update (61 tests per browser)

| Browser | Pass | Fail | Notes |
|---|---|---|---|
| Chromium | 57 | 4 | The 4 failures are bugs 1–4 above (088, 093, 090, 095). 031 passed on retry. |
| Firefox | 57 | 4 | Same 4 bugs. 13 tests first failed because of a local network outage (`NS_ERROR_UNKNOWN_HOST`) and all passed on re-run; 041 passed on retry. |

Changes to the suite: page object re-grounded (Certificate pick-list, Exam Email, Edit, `apiPatch`, certificate-type lookups, more reliable date picking). 16 broken tests fixed or rewritten (033 is now the Exam Email check, since free-text titles are gone; 069 checks the slimmer Add Partnership). New files: `edit.spec.ts` (086–093), `certificate-types.spec.ts` (094–098), `recently-resigned.spec.ts` (099–102), and journey 103. Edit tests restore the QA record in `finally` plus an `afterAll` safety net. 

## Clean re-run for the report (later on 2026-10-23)

Chromium + Firefox: **114 / 122 pass**. The 8 failures are bugs 1–4 on each browser. 097 (Chromium) and 001 (Firefox) passed on retry. No network errors.

- Test cases (95, whole module): `reports/excel/test-cases-2026-10-23_13-43-EMPCRT-certifications-t1559.xlsx` (source `reports/test-cases/cases-2026-10-23-EMPCRT-certifications-all.json`)
- Results: `reports/excel/results-2026-10-23_13-43-EMPCRT-certifications-t1559.xlsx` (source `reports/results/results-2026-10-23-empcrt-t1559.json`)
- QA report: `reports/html/qa-report-2026-10-23_13-43.html`, published at https://claude.ai/artifact/Xh4hSbGvrEMWAzponTFHwf

## Full end-to-end flow (later on 2026-10-23)

The 4 failing tests were re-run on both browsers with no retries. They fail every time, so they are real bugs, not flakiness.

| Step | Result |
|---|---|
| Admin adds a certificate **on behalf** of kashyap.patel with the new form (approved, "QA-E2E sample certificate", id `812dc23e-1cc8-40e1-8bbb-0b49fdb6b73c`) | **Pass.** Save stays disabled until an employee is picked. Expiry pre-fills to 23/10/2027. 201, Active, Exam Email stored. Toast "Certification added." |
| It lands in the right places | **Pass.** It's in Kashyap's list (with Edit) and not in Admin's. Org total 313 → 314, active +1. The catalogue row and holders page show Kashyap Patel. It's in Recently Resigned (Kashyap is "Left" in the seed data). PM (other department) can't see it (404) and can't edit it (404). Owner and Admin can edit it. |
| Employee gets a notification | **No.** Kashyap has 0 notifications. The backend sends none on add or edit. Still an open product question. The expiry banner says "your manager has been reminded too", which can't be checked from the UI. |
| Expiry moved into the past | **Pass.** Status becomes Expired in the API and the list. The Expired filter finds it. Org cards: active −1, expired +1. Catalogue row: active 0, expired 1. |
| Expiry within 30 days | **Pass.** Banner "1 certification expiring within 30 days. Renew and update the dates here — your manager has been reminded too." Need Attention +1. |
| Proof replaced with a PDF through Edit | **Pass.** Stored on CloudFront and downloads as a PDF. The View proof link updates. |
| Search in My Certificate | **Pass** ("sample" → 1 row; URL keeps `?search=`). |

All edited records were restored. New automated tests: 104 (on-behalf flow), 105 (Expired), 106 (Need Attention), 107 (proof file). Edit tests now use a separate QA record per browser, so Chromium and Firefox don't collide.

**Suite now: 70 tests per browser.** Chromium + Firefox: 132 / 140 pass (2 on retry). The 8 failures are bugs 1–4 on each browser.

## Final report run (later on 2026-10-23)

Chromium and Firefox were run separately (each with a fresh session) and their results combined: **132 / 140 pass** (2 on retry). The 8 failures are bugs 1–4 on each browser.

An earlier combined run (12.5 minutes) showed 15 failures. The extra 7 were test problems, now fixed:
- **Expired sessions.** The saved logins were a day old. Direct API calls made before any page loaded got 401 (the app renews the session only when a page opens). The clean-up step and TC-EMPCRT-091 now open the app first.
- **Timeouts.** Tests that open the app as 6–7 roles (091, 094, 099) now get 3 minutes.
- **List loading.** 097 now waits for the certificate list to load.

Follow-up for the test setup: `tests/global-setup.ts` reuses a saved session if it is still alive and never checks how long it has left, so a long run can outlive it.

- Test cases (99): `reports/excel/test-cases-2026-10-23_16-22-EMPCRT-certifications-fullflow.xlsx`
- Results (140 runs): `reports/excel/results-2026-10-23_16-22-EMPCRT-certifications-fullflow.xlsx` (source `reports/results/results-2026-10-23-empcrt-fullflow.json`)
- QA report: `reports/html/qa-report-2026-10-23_16-22.html`, published at https://claude.ai/artifact/1y5agei1xFabsAzJrgTPXL
