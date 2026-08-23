/**
 * Applies the v2 custom-property renames.
 *
 * The same tool the design system used on itself, published so consumers can run
 * it against their own code:
 *
 *   npx @ericpitcock/epicenter-styles/scripts/codemod-v2.mjs src/
 *   node codemod-v2.mjs --dry-run src/ app/styles/
 *
 * Rewrites every occurrence of a renamed property — declarations, var()
 * references, inline styles in .vue/.tsx, and object keys in JS/TS. Defaults to
 * the current directory. Pass --dry-run to preview.
 *
 * The rename table lives in rename-map.json next to this script.
 */

import fs from 'fs'
import path, { join, resolve } from 'path'
import process from 'process'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

const EXTENSIONS = new Set(['.css', '.scss', '.sass', '.less', '.vue', '.ts', '.tsx', '.js', '.jsx', '.html', '.svelte', '.md'])
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', 'storybook-static', 'storybook-react-static', '.next', 'coverage'])

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const targets = args.filter(arg => !arg.startsWith('--'))

const renames = Object.entries(
  JSON.parse(fs.readFileSync(join(__dirname, '..', 'rename-map.json'), 'utf8'))
)
  .filter(([key]) => key.startsWith('--'))
  // Longest first: --ep-input-height must be rewritten before --ep-input, or a
  // shorter key would claim the prefix and corrupt the longer name.
  .sort(([a], [b]) => b.length - a.length)

const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// A rename must not fire on a longer name that merely starts with it, so require
// the next character to be something other than a name character or dash.
const patterns = renames.map(([from, to]) => ({
  from,
  to,
  pattern: new RegExp(`${escape(from)}(?![\\w-])`, 'g')
}))

const walk = function* (target) {
  const stats = fs.statSync(target)
  if (stats.isFile()) {
    yield target
    return
  }
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    if (entry.name.startsWith('.') && entry.name !== '.storybook') continue
    const full = join(target, entry.name)
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      yield* walk(full)
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      yield full
    }
  }
}

let filesChanged = 0
let totalReplacements = 0
const perProperty = new Map()

for (const target of targets.length ? targets : [process.cwd()]) {
  if (!fs.existsSync(target)) {
    console.error(`✖ no such path: ${target}`)
    process.exitCode = 1
    continue
  }

  for (const file of walk(target)) {
    const original = fs.readFileSync(file, 'utf8')
    let updated = original
    let fileReplacements = 0

    for (const { from, to, pattern } of patterns) {
      pattern.lastIndex = 0
      const count = (updated.match(pattern) ?? []).length
      if (!count) continue
      updated = updated.replace(pattern, to)
      fileReplacements += count
      perProperty.set(from, (perProperty.get(from) ?? 0) + count)
    }

    if (!fileReplacements) continue

    filesChanged += 1
    totalReplacements += fileReplacements
    console.log(`  ${fileReplacements.toString().padStart(4)}  ${path.relative(process.cwd(), file)}`)
    if (!dryRun) fs.writeFileSync(file, updated)
  }
}

console.log(
  `\n${dryRun ? 'Would rewrite' : 'Rewrote'} ${totalReplacements} occurrence(s) across ${filesChanged} file(s).`
)

if (perProperty.size) {
  console.log('\nBy property:')
  for (const [name, count] of [...perProperty].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${count.toString().padStart(4)}  ${name}`)
  }
}
