# SI4-T1685 — Certification Module CR — test results (16/11/2026)

**Task:** SI4-T1685 "Certification Module CR" (Bhargav Valani, To be tested, tasklist *Certification Module Enhancements*)
**Build:** dev 6.9.0 — backend PR #633 (`83cc4bf4`, `95d5485b`, `e27f4f65`), frontend PR #565 (`778a2ae7`, `487c3d81`, `b9850239`), merged 13/11
**Tested by:** QA, Chromium, Admin / Employee / TM / PMO accounts
**Cases:** `reports/test-cases/cases-2026-11-16-EMPCRT-T1685-certification-cr.json` (TC-EMPCRT-108..138) · Markdown: `docs/test-cases/test-cases-2026-11-16-empcrt-t1685-certification-cr.md`
**Automation:** `tests/e2e/employee/certifications/t1685-cr.spec.ts` — **17 pass / 5 fail** (all 5 failures = CR points not built)
**Evidence:** `reports/results/2026-11-16-t1685/` (screens, CSV exports, API dumps, one-off scripts)

## Verdict

**Partly done — not ready to close.** Delete, the Program-Manager table view, filters and CSV export work well and no defects were found in them. Five CR points are not built at all and four are only partly done.

## CR point by point

| # | CR point | Result | Notes |
|---|---|---|---|
| 1 | Delete certificate for wrong entry | ✅ Pass | Own rows (Employee), any row (Admin / Program Owner). Reason required (Wrong entry / Duplicate entry / Added for the wrong employee / Other). Soft delete, Undo from toast for 5 min, only by the deleter. Other people's certs → 404 for Employee and TM. |
| 2 | Certification column in Employee popup + Employee table (TM view) | ❌ Not built | Employee table (TM and Admin) has no Certification column or filter. Name popup shows Projects / PR Reviewer / Goals only. No code in the PRs. |
| 3 | Certification view on detailed profile, with Skills | ❌ Not built | Profile shows Skills, Visa, Projects, Goals… no Certifications. |
| 4 | Mark reminder as Acknowledge / "I don't have any certificate" | ⚠ Partial | New joiners who got a reminder see a banner on My Certificate with a **No** button → Admin's Follow-Up becomes "Don't hold any certificate" (seen for Drashti Vyas). No "Acknowledge" for expiry reminders. Tested read-only. |
| 5.1 | PM tabular view, one row per certificate | ✅ Pass | Organisation Level → Group by None: 317 rows (= Total card), each with employee, dates, exam email, badge link. Group by Certificate / Employee also available. |
| 5.2 | Filters: exam code, expiry, employee search, department | ✅ Pass | Search covers title (holds the exam code), partnership and employee name. Expiry "within N days" / date range, status, partnership, multi-select department — counts verified via API. Minor: search placeholder still says "Search title or partnership.." although it also finds employee names. |
| 5.3 / 10 | Download as CSV | ✅ Pass | Export on all four tabs; follows the active filter; New Joiners / Resigned export is Admin / PO only (403 for Employee, TM, PMO). |
| 6.1 | Fix 8 duplicate imported certificates | ✅ Pass (dev) | 0 duplicates among 317 certificates (same employee + type + issue date, or same employee + title). Not checked on production. |
| 6.2 | Fix 110 import errors (valid emails → "Employee not found") | ⚠ Can't verify | Import now treats @simform.com and @simformsolutions.com as one mailbox (since T1363). The 110-row source file is not available to re-check. |
| 7 | "Expire date" → "Expiry Date" | ⚠ Partial | Form and table say "Expiry Date". The Help guide still says "Expire Date". |
| 8 | "Or drop your certificate badge file here" | ✅ Pass | |
| 9 | Exam Email not optional | ✅ Pass | Required (*) on Add; Save stays disabled until filled. On Edit it may stay blank for old records (by design, commit `487c3d81`). |
| 9.1 | Placeholder "username@outlook.com or username@simformsolutions.com" | ❌ Not built | Placeholder is `username@simform.com`. |
| 10a | "Update proof" → "Update Badge link" | ❌ Not built | Edit form field is "Badge link"; "Current Proof" and side panel "Proof / View Proof" remain. |
| 11 | Need Attention (30) — how to find them | ✅ Pass | Clicking the card filters the list to exactly 30 (active, expiring within 30 days); a chip shows the filter. |
| 13 | New-joiner reminder email with Yes/No | ❌ Not built | Email template unchanged. The Yes/No is in-app only (point 4). |
| 14 | Expiry email to employee only (not Program Owner) | ✅ Pass (code) | Recipient is the holder only, at 90/60/30/expired; RM and Program Owner removed. Live send not triggered. |

## Defects

No functional defects found in what was built. On 17/11 (user-approved) the 5 unbuilt CR points were filed in Zoho, assigned to Bhargav and linked to SI4-T1685:

| Zoho | Issue | Severity | Case |
|---|---|---|---|
| SI4-I641 | Employee Details table has no Certification column (TM view) | Medium | TC-EMPCRT-126 |
| SI4-I642 | Employee short profile popup does not show certifications | Medium | TC-EMPCRT-127 |
| SI4-I643 | Employee profile page has no Certifications section next to Skills | Medium | TC-EMPCRT-128 |
| SI4-I644 | Exam Email placeholder not changed | Low | TC-EMPCRT-124 |
| SI4-I645 | Proof field not renamed to "Update Badge link" | Low | TC-EMPCRT-125 |

Not filed (left to the user): reminder email Yes/No (CR 13), Help guide "Expire Date" (CR 7), and the old open bugs 088 / 093 / 095. Screenshots not attached (Zoho attachment API returns 6500).

## Data changes on dev (user-approved)

- Deleted for good: "QA-NEG probe - please delete" (`bbff2ac5…`, kashyap.patel). Org total now 316. The other two QA-NEG records had already been removed.
- The delete → Undo → delete flow ran twice on that record; audit log will show it.

## Not tested

- Admin on-behalf delete through to the end (dialog checked only; no approved junk record left).
- Live email sends (expiry and new-joiner reminders) — would mail real employees.
- Firefox.

## Old certifications suite — updated for 6.9.0 (16/11)

Before: 36 / 70 failing on 6.9.0 (renamed form labels, flat Organisation list, Group by Certificate replacing the catalogue, column Department filter, required Exam Email, new expiry banner text, Exam Email can't be cleared on Edit).

After: **69 / 72 pass** (Chromium). The 3 failures are the known open product bugs, unchanged since 23/10: TC-EMPCRT-088 (Edit calendar allows expiry past validity), 093 (server accepts future issue date / past-validity expiry / ftp:// on edit), 095 ("Advance" level label).

- Shared page object updated (labels, `readCatalogue()` now reads Group by Certificate, multi-select `pickDepartment()`, `groupBy()`, `deleteButton()`, `dropZone`).
- Replaced (feature removed/changed — retired in the ledger with replaced-by): 013→139, 019→140, 020→141, 051→142, 090→143. Cases: `reports/test-cases/cases-2026-11-16-EMPCRT-suite-update-6.9.0.json`.
- edit.spec now restores its QA records at the start of the run too. A failed restore (blank Exam Email refused) had left "QA-E2E self-add 2026-10-21" with issue 2027-01-01 / ftp link; it is back to its original values. Firefox records: the deleted QA-NEG probe was replaced by "QA-E2E on-behalf 2026-10-21".
- Firefox not re-run.
