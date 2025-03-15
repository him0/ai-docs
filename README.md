# AI Rule Forge

AI Document Management. Manage rules and knowledge for GitHub Copilot, Cline, Cursor, and other AI tools.

## Overview

ai-rule-forge is a tool for managing rules and knowledge for AI tools (GitHub Copilot, Cline, Cursor, etc.).
It allows you to generate configuration files for various AI tools from a single source.

## Usage

### Initialize a New Project

```bash
npx https://github.com/him0/ai-rule-forge init

This command will:
- Create the `ai-docs/` directory
- Create the `ai-docs/_rules/` directory
- Create basic rule files
- Create necessary configuration files
```


### Edit Rules

Edit Markdown files in the `ai-docs/_rules/` directory to define rules for AI tools.
You can use numeric prefixes (e.g., `01_security.md`) to control the order.

### Apply Rules

```bash
npx https://github.com/him0/ai-rule-forge compile
```

This command reads rule files from the `ai-docs/_rules/` directory and generates:
- `.github/copilot-instructions.md` (for GitHub Copilot)
- `.clinerules` (for Cline)
- `.cursorrules` (for Cursor)

### Preview

```bash
npx https://github.com/him0/ai-rule-forge preview
```

This command previews the content of the files that will be generated.

## Writing Rules

Rules are written in standard Markdown, but you can specify rules that apply only to specific AI tools:

```markdown
# Security [copilot]
This section applies only to GitHub Copilot.

# Communication [cline]
This section applies only to Cline.

# General Guidelines
This section applies to all AI tools.
```
