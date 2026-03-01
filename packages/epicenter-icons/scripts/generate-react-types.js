// generate-react-types.js
// Generates TypeScript declaration files (.d.ts) for every React icon component
// and a barrel index.d.ts that re-exports them all with a shared IconComponent type.

import { readdirSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const reactDir = join(__dirname, '..', '..', 'epicenter-icons-react')

// Collect all .jsx icon files (exclude index.js, README.md, and any .d.ts)
const jsxFiles = readdirSync(reactDir)
  .filter(f => f.endsWith('.jsx') && f !== 'index.jsx')
  .sort()

const componentNames = jsxFiles.map(f => basename(f, '.jsx'))

// 1. Generate individual Name.d.ts files
for (const name of componentNames) {
  const dtsContent = [
    `import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'`,
    `export const ${name}: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>`,
    '', // trailing newline
  ].join('\n')

  writeFileSync(join(reactDir, `${name}.d.ts`), dtsContent)
}

// 2. Generate react/index.d.ts
const indexLines = [
  `import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'`,
  `export type IconComponent = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>`,
  '',
  ...componentNames.map(name => `export const ${name}: IconComponent`),
  '', // trailing newline
]

writeFileSync(join(reactDir, 'index.d.ts'), indexLines.join('\n'))

console.log(`Generated ${componentNames.length} individual .d.ts files and index.d.ts`)
