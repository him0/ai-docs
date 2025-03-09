# AI Document Management

This directory manages scripts that generate instruction files for AI assistants (GitHub Copilot, Cline, Cursor).

## Structure 📁

- `_knowledge/`: Markdown files storing project knowledge
  - Used to accumulate and reference knowledge for the project
- `_rules/`: Markdown files defining rules
  - Each file can define rules for specific AI assistants using `[prefix]` tags
- `build.ts`: Script for generating instructions for AI assistants

## Generated Files 📝

The script generates the following files:
- `.github/copilot-instructions.md`: Rules for GitHub Copilot
- `.clinerules`: Rules for Cline
- `.cursorrules`: Rules for Cursor

## Usage 🚀

### Preview Mode

To check the content of files to be generated:

```bash
pnpm run preview
```

### File Generation

To actually generate the files:

```bash
pnpm run build
```

## How to Write Rules ✍️

In Markdown files within the `_rules/` directory, you can define rules for specific AI assistants using prefix tags:

```markdown
# [copilot] Section Name
Rules for GitHub Copilot

# [cline] Section Name
Rules for Cline

# [cursor] Section Name
Rules for Cursor

# Common Section Name
Rules shared by all AI assistants
```

Sections without tags are shared across all AI assistants.

## Knowledge Management 📚

The `_knowledge/` directory stores project-specific knowledge that can be referenced by team members and AI tools. Knowledge files help document project-specific information, best practices, technical decisions, and other important contextual information.
