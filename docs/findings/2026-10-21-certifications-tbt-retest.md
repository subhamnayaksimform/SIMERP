# Certifications — "To be tested" re-test (2026-10-21)

Environment: dev (`simerp-dev.simform.solutions`). The 4 Certifications issues filed on 2026-10-20 (SI4-I582..I585, assigned to Bhargav Valani) moved to **ToBeTested** on 21/10.

## Fix commits (origin/development)

| Issue | Repo | Commits | Change |
|---|---|---|---|
| SI4-I582 | backend | `2a9c5916`, `79b1e786` (PR #558) | Organisation counts now count **distinct employees**, both in the catalogue rows and in the summary cards |
| SI4-I583 | frontend | `81dce4cb` (PR #509) | Add form validates on change, so a title over 200 chars shows an inline error |
| SI4-I584 | frontend | `993fcf2a` (PR #509) | Empty designation badge is hidden instead of showing "N/A" |
| SI4-I585 | frontend | `993fcf2a` (PR #509) | Screen-reader label uses "1 employee" (singular) |

## Results

| Issue | Test | Chromium | Firefox | Verdict |
|---|---|---|---|---|
| SI4-I582 | TC-EMPCRT-013 | Pass | Pass | **Pass** — every catalogue row now has Employees = Active + Expired |
| SI4-I583 | TC-EMPCRT-033 | Pass | Pass | **Pass** |
| SI4-I584 | TC-EMPCRT-050 | Pass | Pass | **Pass** (see note 2) |
| SI4-I585 | TC-EMPCRT-051 | Pass | Pass | **Pass** |

WebKit could not open the page at all ("WebKit encountered an internal error" on `page.goto`). That is a local browser problem, not related to these fixes.

## Full Certifications suite (Chromium): 43 / 48 pass

| Test | Cause | Type |
|---|---|---|
| TC-EMPCRT-012 Total = Active + Expired | Side effect of the I582 fix (below) | **Product — new finding** |
| TC-EMPCRT-042 Employee org summary = own cert count | Same I582 change: summary total is now 1 (one person) instead of 2 (two certs) | Test expectation out of date |
| TC-EMPCRT-066 / 067 journey | The "QA-E2E on-behalf 2026-10-15 - please delete" cert is gone. Devs cleaned up test data; the self-add cert is still there | Test data |
| TC-EMPCRT-001 smoke | Sidebar button is now named "Employee Has changes" (new-changes badge), so the exact-name locator missed it | Test locator — **fixed**, passes now |

## New finding — Organisation summary cards mislabelled after the I582 fix

The I582 fix changed the 4 summary cards on Organisation Level from counting certificates to counting **distinct employees**, but the labels still talk about certificates:

- Card reads **"Total certifications"** and shows **36**. Active + Expired = **62**.
- "Need Attention" tooltip still says "Active certifications expiring within 30 days."
- The backend's own API docs now say "active + expired may exceed total", so the cards no longer add up by design.

The original issue was only about the catalogue **rows** (Employees column). The cards were not part of it. Either the cards should go back to counting certificates, or the labels and tooltip should say "employees". Product owner / Bhargav to confirm which.

## Notes

1. TC-EMPCRT-042 and TC-EMPCRT-012 should be updated once the card question above is answered.
2. I584: the empty designation is now **hidden**, not shown as a word. Our empty-data convention says missing values should show a readable word placeholder. Hiding a badge is acceptable for a badge, but worth confirming.
3. The same exact-name `'Employee'` sidebar locator is used in `tests/page-objects/employee/goals.page.ts:255` and `tests/e2e/employee/goals/performance.spec.ts:35`, so Goals tests may hit the same problem.
4. 2026-10-21: SI4-I582..I585 closed in Zoho at the user's request. The card-label finding is filed as **SI4-I588** (Medium, Bhargav). Data check: Admin card shows 36 but there are 160 certificates (117 active, 43 expired) held by 36 people; PM card shows 2 for 3 certificates.

## Full re-test + end-to-end journey (later on 2026-10-21)

**Full suite, Chromium + Firefox: 88 / 96 pass.** Both browsers fail the same 4 tests: 012 and 042 (card change above) and 066/067 (deleted test data, fixed below). Nothing else broke.

**End-to-end journey, run through the real UI.** You approved saving 2 certificates under the existing partnership "QA-E2E Partner 2026-10-15" on Employee kashyap.patel. Neither can be deleted.

| Step | Result |
|---|---|
| Employee adds a cert for themselves | Pass. Expire Date auto-filled to 21/10/2027 from the 1-year partnership. API 201, status Active. "Certification added." toast shows and the drawer closes. |
| Admin adds a cert on behalf of Kashyap Patel | Pass. The on-behalf switch and employee picker work. API 201, Active. The cert is in Kashyap's list (3 → 4), not in Admin's (stays 1). |
| Shows in Organisation catalogue and holders page | Pass (TC-EMPCRT-067) |
| Partnership filter, validity auto-fill, role scoping of the picker | Pass (063, 064, 068–071) |
| Employee gets a notification | **No.** Kashyap's notifications say "You are all caught up". This is the same as on 15/10, and it is still an open product question. |
| Org "Total certifications" card | Stayed at **36** after both saves, because it now counts people. This confirms the card-label finding above. |

`journey.spec.ts` now points at the new records. It passes 9/9 on Chromium and Firefox.

| Saved record | ID |
|---|---|
| QA-E2E self-add 2026-10-21 - please delete (added by kashyap.patel) | `81aa68bf-0739-4027-80de-a0eb93d214c8` |
| QA-E2E on-behalf 2026-10-21 - please delete (added by Admin for kashyap.patel) | `010d4226-f784-4210-96dc-dcd02db8c518` |

The 2026-10-15 self-add cert (`00ebc2dd-…`) and the 2026-10-15 partnership are still on dev.

Notes:
- **Expected failures:** after this, the only Certifications tests that still fail are 012 and 042. They wait on the card-label answer.
- **Test-writing tip:** in the on-behalf drawer, wait for the employee picker to close before you open Partnership. Otherwise the Partnership list re-renders and the click misses.
