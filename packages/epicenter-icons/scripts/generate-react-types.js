// generate-react-types.js
// Generates TypeScript declaration files (.d.ts) for every React icon component.

import { readdirSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const reactDir = join(__dirname, '..', '..', 'epicenter-icons-react')

// Collect all .jsx icon files (exclude README.md and any .d.ts)
const jsxFiles = readdirSync(reactDir)
  .filter(f => f.endsWith('.jsx') && f !== 'index.jsx')
  .sort()

const componentNames = jsxFiles.map(f => basename(f, '.jsx'))

// Generate individual Name.d.ts files
for (const name of componentNames) {
  const dtsContent = [
    `import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'`,
    `export const ${name}: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>`,
    '', // trailing newline
  ].join('\n')

  writeFileSync(join(reactDir, `${name}.d.ts`), dtsContent)
}

console.log(`Generated ${componentNames.length} individual .d.ts files`)
