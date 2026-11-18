# SI4-T1549 Start → End Hours / Work Pattern — re-test 04/11/2026 (dev)

Spec: `tests/e2e/retests/si4-t1549.spec.ts` · evidence: `reports/2026-11-04-t1549/` (read-only run, admin).

| Item | Zoho | Result |
|---|---|---|
| N1 flag contradicts min/hr | SI4-I621 | PASS — 3,648 rows × 30/60/90 days: no flag/density mismatch |
| N2 header ⓘ tooltips | SI4-I622 | PASS — both open on hover with the full text (click opens nothing; hover-only) |
| N3 no hours but flag shown | SI4-I623 | PASS — 0 rows with `startHours: null` + a flag, all 3 periods |
| G1 "Data as of" | — | Still open — not shown, `lastSyncedAt` null |
| G2 column named "Active Hours" | — | Still open — header "Start → End Hours" |
| G3 IST in the cell | — | Still open — IST only in tooltip/hover |

Zoho: SI4-I621, I622, I623 moved To be tested → Closed on 04/11 (no comments added). G1–G3 remain unfiled.

## Final end-to-end verification (04/11, dev 6.8.1, same day)

Spec `tests/e2e/retests/si4-t1549-e2e.spec.ts`, results `reports/2026-11-04-t1549-e2e/results.json` (+ screenshots). 45 checks: **40 pass, 5 fail**.

- Pass: columns on Active tab only; all 8 roles (Admin/PMO/TM/EM show, RM/DM hidden, PM/CSM/Employee blocked); range + hover card (IST, min/hr); badges; thresholds and no-flag-without-hours on all 3,648 rows × 30/60/90; coverage-note and no-data rows; filter (single choice, default 30, Save), shared by both columns, kept in URL/reload, hover follows period; API 30/60/90 differ, 45/365/abc → 400; sort both columns asc/desc correct on all rows, no-data last; ⓘ tooltips open on hover.
- Fail (open, requirement gaps, unfiled): G1 no "Data as of" (`lastSyncedAt` null, no note); G2 header is "Start → End Hours"; G3 no IST in the cell (only tooltip/hover).
- Open question: `employee-activity-sync` cron (02:15) still `lastRun: null` — nightly refresh unproven.
- Not re-checked in the UI this run: the "+1" label (API has 2 rows with close after midnight; UI-verified 30/10).
