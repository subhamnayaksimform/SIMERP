---
name: excel-reporter
description: 'Export test cases and test results to formatted Excel workbooks. Use when: generating test case documentation, producing run reports, sharing results with stakeholders. Produces .xlsx files in reports/test-cases/ and reports/results/.'
argument-hint: 'mode=test-cases|results  input=<path-to-json>'
---

# Excel Reporter

Generates Excel workbooks for two purposes:
1. **Test case documentation** — one sheet per module with columns: ID, Title, Category, Preconditions, Steps, Expected Result, Priority, Linked Task.
2. **Test execution results** — summary sheet (pass/fail/skip counts) + detail sheet (test, status, duration, error, screenshot path).

## When to Use
- After the test-case-generator agent produces a JSON test-case set
- After Playwright finishes running and you need a stakeholder-friendly report
- When asked to "export to Excel" or "produce a QA report"

## Inputs
- `mode`: `test-cases` or `results`
- `input`: path to a JSON file produced by an upstream agent/skill

## Procedure
1. Validate the input JSON shape (see schemas below).
2. Run the script: [generate-excel.ts](./scripts/generate-excel.ts)
   ```bash
   npm run report:excel -- --mode=test-cases --input=reports/test-cases/cases-<timestamp>.json
   npm run report:excel -- --mode=results    --input=reports/results/results.json
   ```
3. Confirm the output `.xlsx` was created and report the path back to the caller.

## Input Schema — `test-cases`
```json
[
  {
    "id": "TC-001",
    "module": "Customer Master",
    "taskId": "12345",
    "title": "Bulk import - happy path",
    "category": "smoke",
    "priority": "high",
    "preconditions": "User logged in as admin",
    "steps": ["Open Customer Master", "Click Import", "Upload sample.csv"],
    "expected": "100 customers imported and listed"
  }
]
```

## Input Schema — `results`
Playwright JSON reporter output (`reports/results/results.json`).

## Output
- Test cases  → `reports/test-cases/test-cases-<timestamp>.xlsx`
- Results     → `reports/results/results-<timestamp>.xlsx`
