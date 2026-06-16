# SIM ERP — AI QA Flow

An AI-driven QA automation pipeline for SIM ERP, built on VS Code Copilot's agent customization framework.

## Pipeline

```
Zoho Tasks → Requirements → Test Cases (Excel) → Playwright Automation → Execution → Bug Reports (Zoho)
```

## Agents

| Agent | Role |
|-------|------|
| `@qa-orchestrator` | Coordinates the full pipeline |
| `@requirement-analyzer` | Parses Zoho tasks into structured requirements |
| `@test-case-generator` | Generates categorized test cases & exports to Excel |
| `@automation-generator` | Converts test cases into Playwright code |
| `@bug-reporter` | Creates bug reports in Zoho from test failures |

## Skills (slash commands)

| Skill | Purpose |
|-------|---------|
| `/zoho-tasks` | Fetch & filter Zoho Project tasks |
| `/excel-reporter` | Export test cases / results to Excel |
| `/playwright-runner` | Run Playwright tests & collect artifacts |
| `/zoho-bug-report` | Create bugs in Zoho |

## Quick Start

```bash
npm install
npx playwright install
cp .env.example .env   # fill in credentials
```

### Run the full pipeline (in VS Code Chat)
```
@qa-orchestrator Run the QA pipeline for sprint 24 high-priority tasks
```

### Invoke individual agents
```
@requirement-analyzer Analyze task #12345
@test-case-generator Generate tests for the Customer Master module
@automation-generator Convert these test cases to Playwright
@bug-reporter Report bugs from last test run
```

### CLI usage
```bash
npm run fetch:tasks
npm test
npm run report:excel
```

## Folder Structure

```
.github/
├── agents/                       # 5 .agent.md files
├── skills/                       # 4 skill folders with SKILL.md + scripts
├── instructions/                 # QA conventions
└── prompts/                      # Quick-action slash prompts
tests/
├── e2e/                          # Generated Playwright specs
├── page-objects/                 # Generated page objects
└── playwright.config.ts
reports/
├── test-cases/                   # Excel test-case docs
└── results/                      # Excel test results + HTML report
```
