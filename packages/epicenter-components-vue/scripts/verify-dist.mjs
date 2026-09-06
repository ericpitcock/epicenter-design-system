/* eslint-env node */
import fs from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

/**
 * `build-storybook` used to be the thing that proved dist/ was usable, because
 * the static build resolved the package there. It resolves to src/ now (a
 * compiled dist has no .vue files, so vue-docgen would emit no prop tables), so
 * nothing else exercises the published artifact before `npm publish` does.
 *
 * This is that check: a broken build fails here rather than in a consumer.
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

const source = files.filter((file) => file.endsWith('.vue') || (file.endsWith('.ts') && !file.endsWith('.d.ts')))
if (source.length > 0) {
  fail(`dist/ contains ${source.length} uncompiled source file(s): ${source.slice(0, 5).map(rel).join(', ')}`)
}

// --- Both halves are present ----------------------------------------------

const modules = files.filter((file) => file.endsWith('.mjs'))
const declarations = files.filter((file) => file.endsWith('.d.ts'))

if (modules.length === 0) fail('dist/ contains no .mjs output')
if (declarations.length === 0) fail('dist/ contains no .d.ts output')

// Every entry module needs the declaration that sits beside it. Chunks are
// implementation detail and are not addressable, so they are exempt.
for (const module of modules) {
  if (rel(module).startsWith('chunks/')) continue
  const declaration = module.replace(/\.mjs$/, '.d.ts')
  if (!fs.existsSync(declaration)) fail(`missing declaration for ${rel(module)}`)
}

// --- Nothing still points at a .vue file ----------------------------------

for (const declaration of declarations) {
  const contents = fs.readFileSync(declaration, 'utf8')
  if (/\.vue['"]/.test(contents)) fail(`${rel(declaration)} still imports a .vue specifier`)
}

// --- Vue SFCs carry no <style> block, so nothing should emit CSS ----------

const css = files.filter((file) => file.endsWith('.css'))
if (css.length > 0) {
  fail(`dist/ emitted CSS (${css.map(rel).join(', ')}) — styles belong in @ericpitcock/epicenter-styles`)
}

// --- Every path the exports map advertises resolves ------------------------

for (const [subpath, target] of Object.entries(pkg.exports ?? {})) {
  const targets = typeof target === 'string' ? [target] : Object.values(target)

  for (const candidate of targets) {
    if (!candidate.includes('*')) {
      if (!fs.existsSync(join(packageDir, candidate))) fail(`exports["${subpath}"] → ${candidate} does not exist`)
      continue
    }

    // A pattern is satisfied if at least one file matches it.
    const [prefix, suffix] = candidate.split('*')
    const matched = files.some((file) => {
      const path = `./${rel(file)}`
      return `./dist/${rel(file)}`.startsWith(prefix) && path.endsWith(suffix)
    })
    if (!matched) fail(`exports["${subpath}"] → ${candidate} matches no file`)
  }
}

// --- No optional peer subpath is imported at all -----------------------------

// A consumer's bundler can resolve the bare specifier of an optional peer it has
// not installed — Vite hands back a stub that throws only if the code actually
// runs, which is what should happen when someone renders EpMap without
// mapbox-gl. It cannot do the same for a *subpath*: Vite rewrites
// `mapbox-gl/dist/mapbox-gl.css` to a `__vite-optional-peer-dep:` specifier that
// its own import-analysis then refuses to resolve, whether the import is static
// or dynamic. These chunks sit in the barrel's graph, so one such import breaks
// every consumer's dev server — including apps that never render the component.
// Stylesheets of optional peers are therefore the consumer's to import.
const optionalPeers = Object.entries(pkg.peerDependenciesMeta ?? {})
  .filter(([, meta]) => meta?.optional)
  .map(([name]) => name)

for (const module of modules) {
  const contents = fs.readFileSync(module, 'utf8')

  for (const peer of optionalPeers) {
    const subpathImport = new RegExp(`['"]${peer}/[^'"]+['"]`)
    const match = contents.match(subpathImport)
    if (match) {
      fail(`${rel(module)} imports ${match[0]} — a subpath of the optional peer "${peer}" cannot be resolved by a consumer that has not installed it`)
    }
  }
}

// --- Report ----------------------------------------------------------------

if (failures.length > 0) {
  console.error('❌ dist/ verification failed:')
  for (const failure of failures) console.error(`   • ${failure}`)
  process.exit(1)
}

console.log(`✅ dist/ verified — ${modules.length} modules, ${declarations.length} declarations`)
