/* eslint-env node */
import fs from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

/**
 * This package published raw src/ until now, so nothing ever checked its
 * output. `npm publish` should not be the first thing to look at dist/.
 */

const packageDir = resolve(fileURLToPath(import.meta.url), '../..')
const distDir = join(packageDir, 'dist')
const pkg = JSON.parse(fs.readFileSync(join(packageDir, 'package.json'), 'utf8'))

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const fullPath = join(dir, entry.name)
  return entry.isDirectory() ? walk(fullPath) : [fullPath]
})

const failures = []
const fail = (message) => failures.push(message)

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ does not exist')
  process.exit(1)
}

const files = walk(distDir)
const rel = (file) => file.slice(distDir.length + 1)

// --- No source ships -------------------------------------------------------

const source = files.filter((file) => file.endsWith('.tsx') || (file.endsWith('.ts') && !file.endsWith('.d.ts')))
if (source.length > 0) {
  fail(`dist/ contains ${source.length} uncompiled source file(s): ${source.slice(0, 5).map(rel).join(', ')}`)
}

// --- Both halves are present ----------------------------------------------

const modules = files.filter((file) => file.endsWith('.mjs'))
const declarations = files.filter((file) => file.endsWith('.d.ts'))

if (modules.length === 0) fail('dist/ contains no .mjs output')
if (declarations.length === 0) fail('dist/ contains no .d.ts output')

// Chunks are implementation detail and not addressable; every other module is
// something a consumer can import, so it needs its declaration alongside.
for (const module of modules) {
  if (rel(module).startsWith('chunks/')) continue
  if (!fs.existsSync(module.replace(/\.mjs$/, '.d.ts'))) fail(`missing declaration for ${rel(module)}`)
}

// --- No dependency stylesheet got inlined ---------------------------------

// Every `import './x.css'` left in the output must resolve to a file sitting
// beside its module, or the component ships unstyled.
for (const module of modules) {
  const contents = fs.readFileSync(module, 'utf8')
  for (const [, specifier] of contents.matchAll(/from '(\.[^']*\.css)'|import\('(\.[^']*\.css)'\)/g)) {
    if (!specifier) continue
    if (!fs.existsSync(join(dirname(module), specifier))) {
      fail(`${rel(module)} imports ${specifier}, which is not in dist/`)
    }
  }
}

// --- Every path the exports map advertises resolves ------------------------

for (const [subpath, target] of Object.entries(pkg.exports ?? {})) {
  const targets = typeof target === 'string' ? [target] : Object.values(target)

  for (const candidate of targets) {
    if (!candidate.includes('*')) {
      if (!fs.existsSync(join(packageDir, candidate))) fail(`exports["${subpath}"] → ${candidate} does not exist`)
      continue
    }

    const [prefix, suffix] = candidate.split('*')
    const matched = files.some((file) => `./dist/${rel(file)}`.startsWith(prefix) && file.endsWith(suffix))
    if (!matched) fail(`exports["${subpath}"] → ${candidate} matches no file`)
  }
}

// --- Report ----------------------------------------------------------------

if (failures.length > 0) {
  console.error('❌ dist/ verification failed:')
  for (const failure of failures) console.error(`   • ${failure}`)
  process.exit(1)
}

console.log(`✅ dist/ verified — ${modules.length} modules, ${declarations.length} declarations`)
