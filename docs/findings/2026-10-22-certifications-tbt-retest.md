# Certifications — "To be tested" re-test (2026-10-22)

Environment: dev (`simerp-dev.simform.solutions`). Two Certifications issues are in **ToBeTested** in Zoho.

| Issue | Fix | Result |
|---|---|---|
| SI4-I588 Summary cards count employees but say "certifications" | Backend `cc90681d` + `f0a6598e` (PR #561, merged 21/10 20:03, committed under the SI4-I582 key). The 4 Organisation summary cards count **certificates** again. Catalogue rows still count distinct employees. | **Pass** — TC-EMPCRT-012 (Total = Active + Expired) and 042 pass on Chromium and Firefox. |
| SI4-I572 Add Certification form validation UI | Frontend PR #499 (14/10). Already passed on 20/10. Still open only because the user could not close it (6401). | **Pass** again — 024 (expiry auto-fill/lock) and 030 (proof link) pass. |

## Runs

- Full Certifications suite, Chromium: **48 / 48 pass** (2.2 min). The 2 failures from 21/10 (012, 042) are fixed. Journey 063–071 still pass, so the 21/10 test data is still on dev.
- Firefox, 011/012/013/024/030/042: 6 / 6 pass. 030 needed one retry (flaky on Firefox, passed on retry).

## Still open (not part of these issues)

- No employee notification when a cert is added on behalf (product question since 15/10).
- API still accepts future issue date, expiry past partnership validity, `ftp://` proof links (manual cases 037–039).

## Full task re-test (SI4-T1363), later on 2026-10-22

Full Certifications suite, Chromium + Firefox: **96 / 96 pass** (4.7 min). One test, TC-EMPCRT-001 on Firefox, failed once and passed on retry (flaky, same kind as 030 earlier). No real failures.

Zoho: closing SI4-I588 and SI4-I572 was blocked by the local permission check, so both are still ToBeTested. The user closes them.
