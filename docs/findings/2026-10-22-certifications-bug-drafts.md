# Certifications: bug drafts (2026-10-22, not filed yet)

All three: project SimERP, assignee Bhargav Valani, link to task SI4-T1363, environment dev (simerp-dev.simform.solutions), found 14 Oct, re-confirmed in code on 22 Oct (`origin/development`).

---

## Bug 1: PMO can't see the Organisation tab, although the backend gives PMO company-wide access

**Severity:** Medium

**Steps to reproduce**
1. Log in as PMO (bhumi.chauhan@).
2. Open Employee > Certifications.
3. Call `GET /api/v1/certifications` with the same session.

**Expected result:** The screen and the API agree. If PMO has company-wide access, PMO sees the Organisation Level tab and the "Adding on behalf" switch. If not, the API returns only PMO's own certificates.

**Actual result:** PMO sees only My Certificate, with no tabs and no on-behalf switch. The API returns every certificate in the company to PMO (154 records on 14 Oct, with employee name, department and proof link).

**Cause (from code):**
- Backend: migration `20261007130000_seeder_certifications_scopes_and_partnership_rbac` gives PMO `certifications.read` and `certifications.create` with scope ALL.
- Frontend: `useCertificationAccess.ts:22` shows the Organisation tab only to Admin, Program Owner, RM or TM. PMO is not in that list, so on-behalf adding is also hidden (`canAddOnBehalf` depends on it).

**To confirm:** product decides which side is right: show the tab to PMO, or reduce PMO's API scope.

**Test case:** TC-EMPCRT-045

---

## Bug 2: The API saves certificates that the form rejects

**Severity:** Medium

**Steps to reproduce:** Send `POST /api/v1/certifications` (as any user who can add) with each of these:
1. Issue date in the future, e.g. `2027-01-01`.
2. A partnership with 12-month validity (e.g. "Partnership 1") and an expiry date of `2030-01-01`.
3. Proof link `ftp://example.com/cert.pdf`.

**Expected result:** The API rejects each one with a 400 error and the same message the form shows (for example "Expire date is beyond the partnership validity period.").

**Actual result:** All three save with 201. The future-dated one shows as Active. Because there is no edit or delete, these records stay forever. 3 such records are still on Kashyap Patel's account ("QA-NEG probe - please delete").

**Cause (from code):** The checks are only in the frontend form. `assertExpiryMatchesPartnership()` in `certifications.service.ts` only checks that the expiry is present and after the issue date. It never reads the partnership's validity. There is no future-date or http/https check on the server. (`javascript:` links are correctly rejected.)

**Test cases:** TC-EMPCRT-037, 038, 039

---

## Bug 3: Expiry banner says "Renew and update the dates here", but certificates can't be edited

**Severity:** Medium

**Steps to reproduce**
1. Log in as an employee with a certificate expiring within 30 days.
2. Open Employee > Certifications > My Certificate.
3. Read the banner, then try to update the certificate's dates.

**Expected result:** The user can update the dates, as the banner says. Or the banner text matches what is possible.

**Actual result:** The banner reads "1 certification expiring within 30 days. Renew and update the dates here — your manager has been reminded too." There is no edit or delete in the UI or the API, so the dates can't be updated. A certificate saved by mistake can't be fixed or removed either.

**Cause (from code):** `src/constants/certifications/labels.ts:32-33` (banner text). The backend certifications controller has no update or delete endpoint.

**To confirm:** product decides: add edit (and delete), or change the banner to "Add your renewed certificate here."

**Test case:** TC-EMPCRT-029

---

## Dropped after checking the code

**"Need Attention" window (TC-EMPCRT-079):** not a bug. The app is consistent: cards, tooltip and banner all use 30 days (`EXPIRING_SOON_THRESHOLD_DAYS = 30`). Reminders go out at 90, 60 and 30 days. Only the PDF says 60, so this stays a product question.
