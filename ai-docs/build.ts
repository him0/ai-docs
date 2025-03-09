import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';

// Constants
const RULES_DIR = join(__dirname, '_rules');
const RULE_PREFIXES = ['copilot', 'cline', 'cursor'];
const OUTPUT_PATHS = {
  copilot: join(__dirname, '..', '.github', 'copilot-instructions.md'),
  cline: join(__dirname, '..', '.clinerules'),
  cursor: join(__dirname, '..', '.cursorrules')
};

// Function to filter content based on prefix
const filterContentByPrefix = (content: string, prefix: string): string => {
  const lines = content.split('\n');
  const result: string[] = [];
  let includeSection = true;
  let inSection = false;

  for (const line of lines) {
    if (line.startsWith('#')) {
      // Start of a new section
      inSection = false;
      if (line.includes(`[${prefix}]`)) {
        includeSection = true;
        inSection = true;
        result.push(line.replace(`[${prefix}]`, '').trim());
      } else if (line.includes('[')) {
        includeSection = false;
      } else {
        includeSection = !inSection;
        result.push(line);
      }
    } else if (includeSection && line.trim() !== '') {
      result.push(line);
    }
  }

  return result.join('\n');
}

// File generation process
const generateFiles = (preview: boolean = false) => {
  // Load and concatenate rule files
  const ruleFiles = readdirSync(RULES_DIR)
    .filter(file => file.endsWith('.md'))
    .sort();

  // Generate content for each prefix
  const contents = RULE_PREFIXES.map(prefix => {
    const filteredContent = ruleFiles
      .map(file => {
        const content = readFileSync(join(RULES_DIR, file), 'utf-8');
        return filterContentByPrefix(content, prefix);
      })
      .filter(content => content.trim() !== '')
      .join('\n\n');
    return { prefix, content: filteredContent };
  });

  if (preview) {
    // Preview mode: just display the content
    contents.forEach(({ prefix, content }) => {
      console.log(`\n=== ${prefix.toUpperCase()} PREVIEW ===\n`);
      console.log(content);
      console.log('\n=== END PREVIEW ===\n');
    });
  } else {
    // Actual file generation
    // Create output directories
    Object.values(OUTPUT_PATHS).forEach(path => {
      mkdirSync(dirname(path), { recursive: true });
    });

    // Write files
    contents.forEach(({ prefix, content }) => {
      writeFileSync(OUTPUT_PATHS[prefix as keyof typeof OUTPUT_PATHS], content + '\n');
    });

    console.log('✨ Generated files successfully!');
  }
};

// Determine preview mode from command line arguments
const isPreview = process.argv.includes('--preview');
generateFiles(isPreview);
