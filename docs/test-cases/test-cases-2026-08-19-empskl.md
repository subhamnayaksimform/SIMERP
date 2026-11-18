# Skills — Test Cases

**Total test cases:** 18  
**Modules covered:** Skills  
**Source:** `reports/test-cases/cases-2026-08-19-EMPSKL.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 10 | 55.6% |
| boundary | 3 | 16.7% |
| negative | 2 | 11.1% |
| smoke | 2 | 11.1% |
| integration | 1 | 5.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 8 | 44.4% |
| medium | 6 | 33.3% |
| critical | 2 | 11.1% |
| low | 2 | 11.1% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 12 | 66.7% |
| minor | 4 | 22.2% |
| critical | 2 | 11.1% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 15 | 83.3% |
| regression-derived | 3 | 16.7% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 14 | 77.8% |
| speculative | 3 | 16.7% |
| inferred | 1 | 5.6% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 18 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 12 | 66.7% |
| @boundary | 6 | 33.3% |
| @needs-verification | 4 | 22.2% |
| @negative | 2 | 11.1% |
| @regression | 2 | 11.1% |
| @smoke | 2 | 11.1% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPSKL-117](#tc-empskl-117-add-new-skill-drawer-selecting-an-existing-skill-from-search-results-and-assigning-employees-succeeds-end-to-end) | Add New Skill drawer — selecting an existing skill from search results and assigning employees succeeds end-to-end | Skills | smoke | critical |
| [TC-EMPSKL-118](#tc-empskl-118-add-new-skill-drawer-typing-a-name-with-no-existing-match-offers-create-new-skill-and-any-resulting-option-in-the-field-is-selectable) | Add New Skill drawer — typing a name with no existing match offers 'Create new Skill' and any resulting option in the field is selectable | Skills | functional | high |
| [TC-EMPSKL-119](#tc-empskl-119-selecting-a-department-in-skills-scopes-the-listing-to-that-department-s-skills-employees-only) | Selecting a Department in Skills scopes the listing to that department's skills/employees only | Skills | functional | high |
| [TC-EMPSKL-120](#tc-empskl-120-selecting-one-department-and-skill-opens-the-skill-detail-panel-where-assigned-employees-can-be-edited) | Selecting one department and skill opens the Skill Detail Panel where assigned employees can be edited | Skills | functional | high |
| [TC-EMPSKL-121](#tc-empskl-121-tags-on-a-skill-can-be-used-to-search-filter-the-skills-listing) | Tags on a skill can be used to search/filter the Skills Listing | Skills | functional | medium |
| [TC-EMPSKL-122](#tc-empskl-122-employees-in-the-skill-detail-panel-are-sorted-by-availability-in-descending-order) | Employees in the Skill Detail Panel are sorted by Availability % in descending order | Skills | functional | high |
| [TC-EMPSKL-123](#tc-empskl-123-employees-with-tied-availability-maintain-a-stable-secondary-sort-order) | Employees with tied Availability % maintain a stable secondary sort order | Skills | boundary | low |
| [TC-EMPSKL-124](#tc-empskl-124-selecting-multiple-skills-together-shows-the-combined-union-list-of-employees-holding-any-of-them) | Selecting multiple skills together shows the combined (union) list of employees holding any of them | Skills | smoke | critical |
| [TC-EMPSKL-125](#tc-empskl-125-multi-skill-selection-an-employee-holding-more-than-one-selected-skill-appears-only-once-with-no-duplicate-row) | Multi-skill selection — an employee holding more than one selected skill appears only once, with no duplicate row | Skills | boundary | medium |
| [TC-EMPSKL-126](#tc-empskl-126-filtering-the-skill-detail-panel-by-primary-narrows-the-list-to-primary-holders-only) | Filtering the Skill Detail Panel by 'Primary' narrows the list to Primary holders only | Skills | functional | high |
| [TC-EMPSKL-127](#tc-empskl-127-filtering-the-skill-detail-panel-by-secondary-narrows-the-list-to-secondary-holders-only) | Filtering the Skill Detail Panel by 'Secondary' narrows the list to Secondary holders only | Skills | functional | high |
| [TC-EMPSKL-128](#tc-empskl-128-clearing-the-primary-secondary-filter-restores-the-full-combined-holder-list) | Clearing the Primary/Secondary filter restores the full combined holder list | Skills | functional | medium |
| [TC-EMPSKL-129](#tc-empskl-129-deleting-a-skill-that-still-has-employees-assigned-in-the-selected-department-is-blocked) | Deleting a skill that still has employees assigned in the selected department is blocked | Skills | negative | high |
| [TC-EMPSKL-130](#tc-empskl-130-removing-every-assigned-employee-one-by-one-then-deleting-the-skill-succeeds-once-the-count-reaches-zero) | Removing every assigned employee one-by-one, then deleting the skill, succeeds once the count reaches zero | Skills | functional | high |
| [TC-EMPSKL-131](#tc-empskl-131-a-skill-with-zero-employees-in-the-current-department-but-assigned-elsewhere-still-requires-delete-confirmation) | A skill with zero employees in the current department but assigned elsewhere still requires delete confirmation | Skills | negative | medium |
| [TC-EMPSKL-132](#tc-empskl-132-availability-shown-in-the-skill-detail-panel-matches-the-value-returned-by-the-api-for-the-same-employee) | Availability % shown in the Skill Detail Panel matches the value returned by the API for the same employee | Skills | integration | medium |
| [TC-EMPSKL-133](#tc-empskl-133-double-clicking-save-on-the-add-new-skill-drawer-does-not-create-duplicate-records) | Double-clicking Save on the Add New Skill drawer does not create duplicate records | Skills | boundary | medium |
| [TC-EMPSKL-134](#tc-empskl-134-multi-skill-selection-can-be-cleared-restoring-the-single-skill-or-unselected-skill-detail-panel-view) | Multi-skill selection can be cleared, restoring the single-skill (or unselected) Skill Detail Panel view | Skills | functional | low |

---

## Skills

18 test cases.

### Boundary (3)

#### TC-EMPSKL-123 — Employees with tied Availability % maintain a stable secondary sort order

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: sorting (SIM ERP intelligent coverage) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill where two or more employees share an identical Availability %
2. Record their relative order
3. Reload and re-check the order

**Expected**

Tied employees keep a stable, repeatable relative order

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

#### TC-EMPSKL-125 — Multi-skill selection — an employee holding more than one selected skill appears only once, with no duplicate row

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | Manual requirement (2026-08-19): we can see multiple skills together to see employees with those selected skills |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select two skills known to share at least one common employee
2. Observe the combined employee list
3. Search for that employee's name in the result set

**Expected**

The shared employee appears exactly once in the combined list, not once per matching skill

#### TC-EMPSKL-133 — Double-clicking Save on the Add New Skill drawer does not create duplicate records

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — rapid double-submit |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Fill in the Add New Skill drawer completely
2. Click Save twice in rapid succession

**Expected**

Exactly one skill/employee-assignment record is created, not two

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Functional (10)

#### TC-EMPSKL-118 — Add New Skill drawer — typing a name with no existing match offers 'Create new Skill' and any resulting option in the field is selectable

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): add skill we can create skills and select skills, add anything that is showing in that field |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Add New Skill drawer
2. Type a skill name guaranteed not to already exist
3. Confirm 'No match found' and '+ Create new Skill' are shown
4. Select 'Create new Skill' and complete any required fields (e.g. Logo URL)
5. Assign employees and save

**Expected**

New skill is created and appears in the Skills Listing with the assigned employees

**Test Data**

- `newSkillName`: unique per-run generated name

**Automation Hint**

New-skill Save silently no-ops unless Logo URL is filled — confirmed live per skills.page.ts comment; fill it to avoid a false negative.

#### TC-EMPSKL-119 — Selecting a Department in Skills scopes the listing to that department's skills/employees only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): later select department from selecting the department we can view all the employees |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee → Skills
2. Select a specific Department
3. Observe the Skills Listing

**Expected**

Only skills/employees relevant to the selected department are shown

#### TC-EMPSKL-120 — Selecting one department and skill opens the Skill Detail Panel where assigned employees can be edited

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): by selecting one department and skill we can edit the skill too and modify the employees |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a Department, then a skill in the Skills Listing
2. Open the Skill Detail Panel's edit control
3. Add or remove an employee from the assignment
4. Save

**Expected**

Skill Detail Panel reflects the modified employee list immediately, without reload; combined count updates to match

#### TC-EMPSKL-121 — Tags on a skill can be used to search/filter the Skills Listing

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | Manual requirement (2026-08-19): also check the tags — they can be used to search the skill too |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | inferred |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Identify a tag associated with an existing skill
2. Type that tag into the search field
3. Observe the Skills Listing

**Expected**

Skills carrying the searched tag appear in the results, in addition to (or instead of) name-based matches

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression. Tag-based search behavior not previously captured in KB.

#### TC-EMPSKL-122 — Employees in the Skill Detail Panel are sorted by Availability % in descending order

| Field | Value |
| --- | --- |
| **Tags** | @functional, @boundary |
| **Requirement Ref** | Manual requirement (2026-08-19): the employees visible will have availability percentage shown in decreasing order |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with multiple assigned employees
2. Read each employee's Availability % as displayed
3. Compare consecutive rows

**Expected**

Availability % values are in strictly non-increasing (descending) order top to bottom

#### TC-EMPSKL-126 — Filtering the Skill Detail Panel by 'Primary' narrows the list to Primary holders only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): skills can also be filtered using primary and secondary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with both Primary and Secondary holders
2. Apply the Primary filter

**Expected**

Only employees classified Primary for this skill remain visible; the panel's count matches the filtered row count

#### TC-EMPSKL-127 — Filtering the Skill Detail Panel by 'Secondary' narrows the list to Secondary holders only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): skills can also be filtered using primary and secondary |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with both Primary and Secondary holders
2. Apply the Secondary filter

**Expected**

Only employees classified Secondary for this skill remain visible

#### TC-EMPSKL-128 — Clearing the Primary/Secondary filter restores the full combined holder list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Manual requirement (2026-08-19): skills can also be filtered using primary and secondary |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Apply the Primary or Secondary filter on the Skill Detail Panel
2. Clear the filter

**Expected**

Full combined Primary + Secondary holder list is restored

#### TC-EMPSKL-130 — Removing every assigned employee one-by-one, then deleting the skill, succeeds once the count reaches zero

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): to delete any skills we need to make sure that all the employees are removed one by one |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with a small number of assigned employees in the current department
2. Remove each assigned employee one at a time until the count is 0
3. Attempt to delete/unlink the skill

**Expected**

Delete/unlink succeeds once — and only once — the department's assigned-employee count for this skill is 0

#### TC-EMPSKL-134 — Multi-skill selection can be cleared, restoring the single-skill (or unselected) Skill Detail Panel view

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): we can see multiple skills together to see employees with those selected skills |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select two or more skills to view the combined employee list
2. Deselect all but one (or all) skills

**Expected**

Panel returns to showing the single selected skill's holders, or the default/no-selection state, with no leftover combined-list rows

### Integration (1)

#### TC-EMPSKL-132 — Availability % shown in the Skill Detail Panel matches the value returned by the API for the same employee

| Field | Value |
| --- | --- |
| **Tags** | @regression, @needs-verification |
| **Requirement Ref** | Regression: data-integrity — API/UI value parity |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | regression-derived |
| **Confidence** | speculative |
| **Lifecycle Reason** | Skills redesigned (SI4-T1672, /employee/skills); old tab-based flow gone; covered by TC-EMPSKL-150..175 |
| **Lifecycle Status** | needs-review |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Read the Availability % for the top-sorted employee in a Skill Detail Panel
2. Fetch the corresponding employee/availability API endpoint
3. Compare values

**Expected**

UI-displayed Availability % exactly matches the API value

**Automation Hint**

NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.

### Negative (2)

#### TC-EMPSKL-129 — Deleting a skill that still has employees assigned in the selected department is blocked

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | KB-direct: employee-details/skills.json edgeCases — delete blocked while holders remain |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with one or more assigned employees in the current department
2. Attempt to delete/unlink the skill

**Expected**

Delete/unlink is blocked; a message shows the Primary/Secondary breakdown of remaining holders

#### TC-EMPSKL-131 — A skill with zero employees in the current department but assigned elsewhere still requires delete confirmation

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | KB-direct: employee-details/skills.json edgeCases — cross-department skill usage confirmation |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Select a skill with 0 employees in the current department but known to have holders in at least one other department
2. Attempt to delete/unlink

**Expected**

A delete/unlink confirmation pop-up is still shown (classification/other-department usage does not silently bypass the confirmation)

### Smoke (2)

#### TC-EMPSKL-117 — Add New Skill drawer — selecting an existing skill from search results and assigning employees succeeds end-to-end

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): using add skill we can create skills and select skills, add anything that is showing in that field, assign employee |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Employee → Skills
2. Open the Add New Skill drawer
3. Select a Department
4. Search for an existing skill name and select it from the results
5. Assign at least one employee
6. Save

**Expected**

Drawer closes; the skill+department+employee assignment appears in the Skills Listing without reload

**Automation Hint**

Reuse SkillsPage.searchOrCreateSkill()/selectSkillFromSearchResults() from skills.page.ts.

#### TC-EMPSKL-124 — Selecting multiple skills together shows the combined (union) list of employees holding any of them

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @functional |
| **Requirement Ref** | Manual requirement (2026-08-19): we can see multiple skills together to see employees with those selected skills |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as ceo@simformsolutions.com (primaryPage fixture)

**Steps**

1. In the Skills Listing, select two or more skills simultaneously (multi-select)
2. Observe the resulting employee list

**Expected**

The employee list shows the union of employees who hold ANY of the selected skills

**Automation Hint**

Multi-skill selection UI/control unconfirmed against live app — locate generically (checkbox/multi-select on skill rows).
