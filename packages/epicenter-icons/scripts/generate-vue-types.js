// generate-vue-types.js
// Generates TypeScript declaration files (.d.ts) for every Vue icon component.

import { readdirSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const vueDir = join(__dirname, '..', '..', 'epicenter-icons-vue')

// Collect all .js icon files (exclude any non-icon files)
const jsFiles = readdirSync(vueDir)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .sort()

const componentNames = jsFiles.map(f => basename(f, '.js'))

// Generate individual Name.d.ts files
for (const name of componentNames) {
  const dtsContent = [
    `import { FunctionalComponent, SVGAttributes } from 'vue'`,
    `declare const ${name}: FunctionalComponent<SVGAttributes>`,
    `export default ${name}`,
    '', // trailing newline
  ].join('\n')

  writeFileSync(join(vueDir, `${name}.d.ts`), dtsContent)
}

console.log(`Generated ${componentNames.length} Vue .d.ts files`)
