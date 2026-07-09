---
name: excel-reporter
description: 'Export test cases and test results to formatted Excel workbooks. Use when: generating test case documentation, producing run reports, sharing results with stakeholders. Produces .xlsx files in reports/excel/.'
argument-hint: 'mode=test-cases|results  input=<path-to-json>  [label=<tag>]'
---

# Excel Reporter — Enterprise Reporting Edition

Generates two types of Excel workbooks with enterprise formatting: conditional coloring, frozen headers, auto-filters, alternate row shading, and post-export validation.

## When to Use
- After the test-case-generator agent produces a JSON test-case set
- After Playwright finishes running and you need a stakeholder-friendly report
- When asked to "export to Excel", "produce a QA report", or "generate test documentation"

## Inputs
- `mode`: `test-cases` or `results`
- `input`: path to a JSON file produced by an upstream agent/skill
- `label` (optional): suffix for the output filename — the sub-feature kebab name, e.g. `employee-details-12345`

## Invocation
```bash
npm run report:excel -- --mode=test-cases --input=reports/test-cases/cases-<timestamp>.json --label=<sub-feature>
npm run report:excel -- --mode=results    --input=reports/results/results.json             --label=<run-id>
```

## Output
- Test cases → `reports/excel/test-cases-<YYYY-MM-DD_HH-MM>-<label>.xlsx`
- Results    → `reports/excel/results-<YYYY-MM-DD_HH-MM>-<label>.xlsx`

---

## Test Case Workbook

### Sheets produced
| Sheet | Contents |
|---|---|
| `Overview` | Total counts by category, priority, module; automation vs manual ratio |
| `<Module>` (one per module) | All test cases for that module with full column set |
| `Traceability` | TC ID → Zoho Task → Requirement → Category → Automation → Regression |

### Columns (per-module sheets)
| Column | Source field |
|---|---|
| Test Case ID | `id` |
| Module | `module` |
| Sub Module | `subModule` |
| Requirement ID | `requirementRef` |
| Zoho Task ID | `taskId` |
| Category | `category` |
| Priority | `priority` — color-coded: Critical=red, High=orange, Medium=yellow, Low=green |
| Risk | `severity` |
| Automation Status | Derived: `automatable=true` → Automated, `false` → Manual, `automationHint` starts with PARTIAL → Partial |
| Regression | Derived from `tags` / `category` — highlighted green when Yes |
| Preconditions | `preconditions` |
| Steps | `steps[]` — numbered, one per line |
| Expected Result | `expected` |
| Test Data | `testData` — flattened key: value |
| Role | `role` |
| Feature Flag | `featureFlag` |
| API Validation | `apiValidation` — Yes / blank |
| Tags | `tags[]` — comma-separated |

### Formatting
- Bold white-on-blue header row, height 28px
- Freeze row 1
- Auto-filter on all columns
- Alternate row shading (light gray on even rows)
- Wrap text on all cells
- Smoke category rows highlighted light blue
- Regression rows highlighted light green

---

## Results Workbook

### Sheets produced (in order)
| Sheet | Contents |
|---|---|
| `Execution Summary` | Total / Passed / Failed / Skipped / Flaky / Pass % / Duration / Browser / Environment / Date |
| `Module Summary` | Per-module: Total, Passed, Failed, Skipped, Pass % |
| `Category Summary` | Per-category (Smoke → Functional → Regression → Negative → Boundary → Security → a11y → Performance) |
| `Regression Summary` | Regression stats block + individual regression test rows |
| `Failure Details` | Failed + flaky tests only: error, screenshot, trace, video, console errors, retry count |
| `All Results` | Every test: TC ID, Module, Title, Category, Status, Duration, Regression flag, Retry count |

### Status color coding
| Status | Color |
|---|---|
| Passed | Green |
| Failed / TimedOut | Red |
| Skipped | Yellow |
| Flaky | Orange |

### Module and Category extraction
Module and category are automatically extracted from the Playwright test title:
- Module: from `TC-<MODULE>-NNN` pattern in the title
- Category: from `@smoke`, `@functional`, `@negative`, `@boundary`, `@security`, `@regression`, `@a11y`, `@performance` tags

### Flaky detection
A test is marked flaky when `t.status === 'flaky'` or when multiple attempt results exist and the last attempt passed.

---

## Input Schema — `test-cases`
```json
[
  {
    "id": "TC-EMPGOL-001",
    "module": "EMPGOL",
    "subModule": "Goals",
    "requirementRef": "AC: Admin can create a goal",
    "taskId": "12345",
    "title": "Create goal — happy path",
    "category": "smoke",
    "priority": "critical",
    "severity": "critical",
    "automatable": true,
    "automationHint": "",
    "tags": ["@smoke", "@functional"],
    "preconditions": "Logged in as ceo@simformsolutions.com (primaryPage fixture)",
    "steps": ["Navigate to Goals", "Click Add Goal", "Fill in title and description", "Click Save"],
    "expected": "Success toast appears; new goal visible in list",
    "testData": { "title": "Q3 Goal", "description": "Increase revenue by 10%" },
    "role": "Admin",
    "featureFlag": "",
    "apiValidation": true
  }
]
```

## Input Schema — `results`
Standard Playwright JSON reporter output (`reports/results/results.json`), produced by `npm test -- --reporter=json`.

---

## Report Validation
After every export, the script verifies:
- Output `.xlsx` file exists on disk
- All expected sheets are present
- Every sheet has a non-empty header row
- Every sheet has a freeze pane configured

Validation warnings are printed to stdout. If issues are found, regenerate by re-running the same command.
