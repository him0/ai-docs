# Rules 📋
## Rule Base
The content defined in the _rules directory is described in .clinerules, .cursorrules, and .github/copilot-instructions.md, so if you have already referred to them, there is no need to check the content again.

# Knowledge 📚
## Knowledge Base
Please accumulate knowledge in the _knowledge directory as needed.
Also, refer to and utilize the knowledge accumulated in _knowledge.

### File Naming Convention
- Format: `{unixtime}_{category}_{scope}_{action}.md`
- Example: `1741372939_frontend_component_guidelines.md`

#### Category
Technical Areas:
- `frontend`: Frontend general
- `backend`: Backend general
- `env`: Environment related
- `test`: Testing related
- `deploy`: Deployment related
- `arch`: Architecture
- `infra`: Infrastructure related
- `security`: Security related

Domain & Business:
- `domain`: Domain knowledge general
- `biz`: Business logic
- `workflow`: Business workflows
- `spec`: Specifications/requirements

Technical Debt & Improvements:
- `debt`: Technical debt
- `todo`: Planned improvements
- `legacy`: Legacy code

#### Scope
Target Elements:
- `component`: Components
- `docker`: Docker environment
- `e2e`: E2E testing
- `api`: API related
- `style`: Styling
- `auth`: Authentication/Authorization
- `db`: Database
etc.

#### Action
Knowledge Types:
- `guidelines`: Conventions/Guidelines
- `setup`: Setup procedures
- `troubleshooting`: Troubleshooting
- `best_practices`: Best practices
- `migration`: Migration procedures
- `optimization`: Optimization
- `spec`: Specifications/Requirements
- `workflow`: Business workflows
- `rules`: Business rules
- `replacement`: Replacement plans
- `cleanup`: Organization/Cleanup plans

### Knowledge Structure
Each knowledge file should follow this recommended structure:

```markdown
# Title (clearly state the purpose)

## Metadata
- tags: Related keywords (comma separated)
- priority: Importance level (high/medium/low)
- scope: Impact area
- last_review: Review date
- status: Status (active/planned/deprecated)
- target_date: Planned improvement date (for improvement-related)
- impact: Impact level (high/medium/low)

## Overview
The problem or purpose this knowledge addresses

## Details
Explanation of specific content

## Notes (if needed)
Points requiring special attention

## Update History
- YYYY/MM/DD: Update details
```

### Naming Examples
```markdown
# Technical Related
1741372939_frontend_component_guidelines.md
1741373088_env_docker_setup.md
1741373124_test_e2e_troubleshooting.md

# Domain Knowledge
1741373200_domain_invoice_spec.md
1741373201_domain_approval_workflow.md
1741373202_biz_calculation_rules.md

# Planned Improvements & Technical Debt
1741373300_todo_api_migration.md
1741373301_debt_deprecated_components.md
1741373302_legacy_function_cleanup.md
```

## Refresh Knowledge
### Review and Maintenance
- Regular reviews (recommended: every 6 months)
- Record review date in metadata
- When outdated information is discovered:
  1. Identify differences
  2. Determine if updates are necessary
  3. Propose updates to users

### Archiving Criteria
- Completely outdated information
- Information replaced by newer knowledge
- Information about technologies no longer used in the project

## Converting Knowledge to Rules
### Conversion Criteria
Consider converting knowledge to Rules when it meets these conditions:
- Frequently referenced by multiple team members
- Directly impacts project quality
- Unlikely to change over the long term
- Relates to compliance or important development conventions

### Conversion Process
1. Review the knowledge content
2. Identify parts that can be universally applied as Rules
3. Restructure as specific guidelines
4. Propose conversion to Rules to users
