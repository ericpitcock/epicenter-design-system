/**
 * Validates the Epicenter custom-property contract and emits the machine-readable
 * property API to dist/custom-properties.json.
 *
 * Checks
 *   undeclared  var(--x) where --x is never declared and is not third-party
 *   unused      a --ep-* property that no rule ever consumes (dead API surface)
 *   grammar     a --ep-* name that does not satisfy the Layer 4 grammar
 *   placement   a --ep-* property declared somewhere other than its root class,
 *               or a modifier introducing a name the root block never declares
 *   literals    a raw number or color in scss/components/ that should be a property
 *
 * Each check is gated separately by GATE below. A check that is gated off is
 * still reported, it just does not fail the build. Flip each flag to true as the
 * corresponding migration phase lands, so the contract can never regress once won.
 *
 * Usage:
 *   node scripts/validate-properties.mjs           report + gate
 *   node scripts/validate-properties.mjs --strict  gate on every check
 *   node scripts/validate-properties.mjs --json    machine-readable report
 */

import fs from 'fs'
import path, { join, relative, resolve } from 'path'
import process from 'process'
import { fileURLToPath } from 'url'

import { glob } from 'glob'
import scssParser from 'postcss-scss'

import {
  LITERAL_ALLOWLIST,
  PROPERTY_GROUP_OF,
  expectsTokenDefault,
  isExternal,
  isThemeableProperty,
  parseComponentProperty
} from './property-model.mjs'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')
const packageDir = resolve(__dirname, '..')
const repoRoot = resolve(packageDir, '../..')
const scssDir = join(packageDir, 'scss')
const componentsDir = join(scssDir, 'components')
const distDir = join(packageDir, 'dist')

const strict = process.argv.includes('--strict')
const asJson = process.argv.includes('--json')

/**
 * Everything except literalDefaults is enforced. Do not turn one off to get a build
 * through — the report names the file and line, and every one of these was a real
 * defect when the contract was first applied.
 */
const GATE = {
  undeclared: true,
  grammar: true,
  unused: true,
  placement: true,
  literals: true,

  // Advisory by design: a component property's default may legitimately be a
  // literal when no global token carries that value. See findLiterals.
  literalDefaults: false
}

// ---------------------------------------------------------------------------
// Selector resolution
// ---------------------------------------------------------------------------

/** Resolve a nested SCSS rule to its full selector list, expanding `&`. */
const resolveSelectors = rule => {
  const chain = []
  for (let node = rule; node && node.type !== 'root'; node = node.parent) {
    if (node.type === 'rule') chain.unshift(node.selector)
  }

  let resolved = ['']
  for (const selector of chain) {
    const parts = selector.split(',').map(part => part.trim()).filter(Boolean)
    const next = []
    for (const parent of resolved) {
      for (const part of parts) {
        next.push(
          part.includes('&')
            ? part.replace(/&/g, parent)
            : parent ? `${parent} ${part}` : part
        )
      }
    }
    resolved = next
  }

  return resolved.filter(Boolean)
}

// ---------------------------------------------------------------------------
// Value scanning
// ---------------------------------------------------------------------------

/**
 * Every `--custom-property` referenced through var() in a value.
 *
 * Names ending in a dash are skipped: those come from string concatenation in
 * framework code — `'var(--chart-sequence-' + index + ')'` — where the real name
 * is only known at runtime.
 */
const referencedProperties = value => {
  const found = new Set()
  const pattern = /var\(\s*(--[a-zA-Z0-9-]+)/g
  let match
  while ((match = pattern.exec(value)) !== null) {
    if (!match[1].endsWith('-')) found.add(match[1])
  }
  return found
}

/**
 * Remove every var() call so only the author's own literals remain.
 *
 * A calc() that references a custom property is dropped whole: its numbers are
 * coefficients deriving a value from a property, not an uncontrolled literal.
 * `calc(var(--ep-checkbox-size) * 2 / 7)` scales with the property, so the 2 and
 * the 7 are part of the relationship, not a hole in the contract.
 */
const stripVars = value => {
  let out = value
  let previous

  do {
    previous = out
    out = out.replace(/calc\(([^()]|\([^()]*\))*var\(([^()]|\([^()]*\))*\)([^()]|\([^()]*\))*\)/g, ' ')
  } while (out !== previous)

  do {
    previous = out
    out = out.replace(/var\(\s*--[a-zA-Z0-9-]+\s*(,[^()]*)?\)/g, ' ')
  } while (out !== previous)

  return out
}

const COLOR_LITERAL = /(#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab)\s*\()/
const NUMBER_LITERAL = /(?:^|[\s(,/])(-?\d*\.?\d+)(px|rem|em|%|s|ms|vh|vw|vmin|vmax|ch|ex|fr|deg)?(?=$|[\s),/;])/

/**
 * Literals in a declaration value that the contract says should be a token.
 *
 * Applies both to plain declarations (`padding: 1.4rem`) and to the defaults of
 * component properties (`--ep-button-border-radius: 0.3rem`) — the latter is
 * where most of them hide, since a default is supposed to name a global token.
 */
const findLiterals = (prop, value) => {
  const trimmed = value.trim()
  if (LITERAL_ALLOWLIST.has(trimmed.toLowerCase())) return []

  const bare = stripVars(value)
    .replace(/#\{[^}]*\}/g, ' ')     // SCSS interpolation
    .replace(/"[^"]*"|'[^']*'/g, ' ') // quoted strings (font stacks, wght axes)

  const literals = []
  if (COLOR_LITERAL.test(bare)) literals.push('color literal')

  for (const token of bare.split(/[\s,/]+/)) {
    if (!token || LITERAL_ALLOWLIST.has(token.toLowerCase())) continue
    if (NUMBER_LITERAL.test(` ${token} `)) literals.push(token)
  }

  return literals.length ? [`${prop}: ${trimmed}`.trim(), ...new Set(literals)].slice(0, 1) : []
}

// ---------------------------------------------------------------------------
// Per-file metadata
// ---------------------------------------------------------------------------

/**
 * A component file owns one block, named after the file. Both the block name and
 * the root selector can be overridden with a leading comment, so a component
 * whose outermost element is a wrapper stays self-describing:
 *
 *   // @block table
 *   // @root .ep-table-container
 */
const readFileMeta = (root, filePath) => {
  const block = path.basename(filePath).replace(/^_/, '').replace(/\.scss$/, '')
  const meta = { block, rootSelector: `.ep-${block}` }

  root.walkComments(comment => {
    const blockMatch = comment.text.match(/@block\s+([a-z0-9-]+)/)
    // Capture the rest of the line: a root can be a descendant selector with
    // spaces in it, e.g. `.ep-table thead th div.ep-table-sortable-header`.
    const rootMatch = comment.text.match(/@root\s+(.+)/)
    if (blockMatch) {
      meta.block = blockMatch[1]
      if (!rootMatch) meta.rootSelector = `.ep-${blockMatch[1]}`
    }
    if (rootMatch) meta.rootSelector = rootMatch[1]
  })

  return meta
}

// ---------------------------------------------------------------------------
// Collection
// ---------------------------------------------------------------------------

const declarations = new Map() // name -> [{ file, line, selector, value, isRoot, block }]
const usages = new Map()       // name -> [{ file, line }]
const components = new Map()   // block -> { block, rootSelector, file, properties: [] }
const overrides = []           // one component reconfiguring another
const issues = {
  undeclared: [],
  grammar: [],
  unused: [],
  placement: [],
  literals: [],
  literalDefaults: []
}

const record = (map, name, entry) => {
  if (!map.has(name)) map.set(name, [])
  map.get(name).push(entry)
}

const scssFiles = glob
  .sync(join(scssDir, '**/*.scss'))
  .filter(file => !file.includes(`${path.sep}vendor${path.sep}`))
  .sort()

// Pass 1 — parse everything and register the blocks, so that pass 2 can tell a
// cross-component override (a carousel configuring its buttons) apart from a
// genuinely misnamespaced property.
const parsed = []

for (const file of scssFiles) {
  const rel = relative(repoRoot, file)
  const source = fs.readFileSync(file, 'utf8')

  let root
  try {
    root = scssParser.parse(source, { from: file })
  } catch (error) {
    console.error(`✖ could not parse ${rel}: ${error.message}`)
    process.exitCode = 1
    continue
  }

  const meta = file.startsWith(componentsDir) ? readFileMeta(root, file) : null
  parsed.push({ file, rel, root, meta })

  if (meta && !components.has(meta.block)) {
    components.set(meta.block, {
      block: meta.block,
      class: meta.rootSelector,
      file: rel,
      properties: []
    })
  }
}

/** Longest matching registered block for an `--ep-*` name, or null. */
const blockOf = name => {
  const body = name.slice('--ep-'.length)
  let best = null
  for (const block of components.keys()) {
    if (body !== block && !body.startsWith(`${block}-`)) continue
    if (!best || block.length > best.length) best = block
  }
  return best
}

// Pass 2 — validate.
for (const { rel, root, meta } of parsed) {
  const isComponent = Boolean(meta)

  root.walkDecls(decl => {
    const line = decl.source?.start?.line ?? 0

    for (const name of referencedProperties(decl.value)) {
      record(usages, name, { file: rel, line })
    }

    if (!decl.prop.startsWith('--')) {
      if (isComponent && isThemeableProperty(decl.prop)) {
        for (const literal of findLiterals(decl.prop, decl.value)) {
          issues.literals.push({ file: rel, line, detail: literal })
        }
      }
      return
    }

    const selectors = resolveSelectors(decl.parent)
    const selector = selectors[0] ?? ':root'
    const isRootBlock = Boolean(meta) && selectors.includes(meta.rootSelector)

    record(declarations, decl.prop, {
      file: rel,
      line,
      selector,
      value: decl.value,
      isRoot: isRootBlock,
      block: meta?.block ?? null
    })

    if (!decl.prop.startsWith('--ep-')) return

    // Some --ep-* namespaces belong to sibling packages rather than to this one:
    // --ep-icon-* is declared and consumed by @ericpitcock/epicenter-icons-*.
    // Components here only set them, so there is no local block to check against.
    if (isExternal(decl.prop)) return

    if (!meta) {
      issues.placement.push({
        file: rel,
        line,
        detail: `${decl.prop} declared outside scss/components/ — global tokens must not carry the --ep- prefix`
      })
      return
    }

    const body = decl.prop.slice('--ep-'.length)
    const ownsIt = body === meta.block || body.startsWith(`${meta.block}-`)

    // A component may reconfigure a component it renders — `.ep-menu` setting
    // `--ep-menu-item-*`, `.ep-carousel` setting `--ep-button-*`. That is the
    // contract working as intended, so long as the target property really exists.
    if (!ownsIt) {
      const owner = blockOf(decl.prop)
      if (!owner) {
        issues.grammar.push({
          file: rel,
          line,
          detail: `${decl.prop} — no component owns this namespace`
        })
        return
      }
      const shape = parseComponentProperty(decl.prop, owner)
      if (shape.error) {
        issues.grammar.push({ file: rel, line, detail: `${decl.prop} — ${shape.error}` })
        return
      }
      overrides.push({ file: rel, line, name: decl.prop, owner })
      return
    }

    // -- grammar -----------------------------------------------------------
    const shape = parseComponentProperty(decl.prop, meta.block)
    if (shape.error) {
      issues.grammar.push({ file: rel, line, detail: `${decl.prop} — ${shape.error}` })
      return
    }

    // -- literal defaults --------------------------------------------------
    // Advisory, not a contract violation. The property itself is the control
    // point, so a literal default is only a missed opportunity to reuse a global
    // token — and inventing a token for every one-off density value would be
    // worse than the literal it replaced.
    if (expectsTokenDefault(shape.property)) {
      for (const literal of findLiterals(decl.prop, decl.value)) {
        issues.literalDefaults.push({ file: rel, line, detail: literal })
      }
    }

    // -- placement ---------------------------------------------------------
    const entry = components.get(meta.block)
    const known = entry.properties.find(property => property.name === decl.prop)

    if (isRootBlock) {
      if (known?.declaredInRoot) {
        issues.placement.push({
          file: rel,
          line,
          detail: `${decl.prop} declared twice in ${meta.rootSelector}`
        })
      } else if (known) {
        known.declaredInRoot = true
        known.default = decl.value
      } else {
        entry.properties.push({
          name: decl.prop,
          default: decl.value,
          group: PROPERTY_GROUP_OF[shape.property],
          part: shape.part,
          state: shape.state,
          property: shape.property,
          declaredInRoot: true
        })
      }
    } else if (!known) {
      entry.properties.push({
        name: decl.prop,
        default: decl.value,
        group: PROPERTY_GROUP_OF[shape.property],
        part: shape.part,
        state: shape.state,
        property: shape.property,
        declaredInRoot: false
      })
      issues.placement.push({
        file: rel,
        line,
        detail: `${decl.prop} first declared in "${selector}" — every property must be declared in ${meta.rootSelector} and only reassigned by modifiers`
      })
    }
  })

  // Custom properties can also be referenced from at-rule params, e.g. @media.
  root.walkAtRules(atRule => {
    if (!atRule.params) return
    const line = atRule.source?.start?.line ?? 0
    for (const name of referencedProperties(atRule.params)) {
      record(usages, name, { file: rel, line })
    }
  })
}

// ---------------------------------------------------------------------------
// Compiled output — picks up properties emitted by mixins and @each/@for loops,
// which a static read of the source cannot resolve (the brand ramp, the
// Highcharts palette). Source stays authoritative for grammar and placement.
// ---------------------------------------------------------------------------

const distCSS = join(distDir, 'epicenter-design-system.css')

if (fs.existsSync(distCSS)) {
  const compiled = scssParser.parse(fs.readFileSync(distCSS, 'utf8'), { from: distCSS })
  compiled.walkDecls(decl => {
    if (!decl.prop.startsWith('--') || declarations.has(decl.prop)) return
    record(declarations, decl.prop, {
      file: 'dist/epicenter-design-system.css',
      line: 0,
      selector: resolveSelectors(decl.parent)[0] ?? ':root',
      value: decl.value,
      isRoot: false,
      block: null,
      generated: true
    })
  })
} else {
  console.warn('⚠ dist/epicenter-design-system.css not found — run the build first for a complete report\n')
}

// ---------------------------------------------------------------------------
// Framework packages — they consume the contract and may set properties inline
// ---------------------------------------------------------------------------

const frameworkDeclarations = new Set()

const frameworkFiles = glob.sync(
  join(repoRoot, 'packages/epicenter-components-{vue,react}/{src,storybook}/**/*.{vue,ts,tsx,js,jsx,scss}')
)

for (const file of frameworkFiles) {
  const rel = relative(repoRoot, file)
  const source = fs.readFileSync(file, 'utf8')

  for (const name of referencedProperties(source)) {
    record(usages, name, { file: rel, line: 0 })
  }

  // A framework file that *sets* a property is either reconfiguring a component
  // (so the name must exist in the stylesheet) or declaring a local one of its
  // own. Record both: the first as a usage to be checked, the second so it is
  // not then reported as undeclared.
  const setPattern = /['"]?(--[a-zA-Z0-9-]+)['"]?\s*:/g
  let match
  while ((match = setPattern.exec(source)) !== null) {
    const name = match[1]
    frameworkDeclarations.add(name)
    if (name.startsWith('--ep-')) record(usages, name, { file: rel, line: 0 })
  }
}

// ---------------------------------------------------------------------------
// Cross-checks
// ---------------------------------------------------------------------------

// Anything not owned by a third party is ours to declare. An allowlist would
// have to be kept in step with every new token family, and a name it failed to
// cover — `--error-color` was one — would go unreported.
for (const [name, sites] of usages) {
  if (declarations.has(name) || isExternal(name)) continue

  // A name a framework file declares locally is that file's own business; only
  // report it if the stylesheet is expected to own it.
  if (frameworkDeclarations.has(name) && !name.startsWith('--ep-')) continue

  const scssSites = sites.filter(site => site.file.includes('epicenter-styles'))
  const where = (scssSites.length ? scssSites : sites).slice(0, 3)
  issues.undeclared.push({
    file: where[0].file,
    line: where[0].line,
    detail: `${name} is referenced ${sites.length}× but never declared`
  })
}

// A cross-component override must target a property its owner actually declares,
// otherwise it is a silent no-op.
for (const override of overrides) {
  const owner = components.get(override.owner)
  if (owner?.properties.some(property => property.name === override.name)) continue
  issues.undeclared.push({
    file: override.file,
    line: override.line,
    detail: `${override.name} is set here but ${owner?.class ?? override.owner} never declares it`
  })
}

for (const [name, sites] of declarations) {
  if (!name.startsWith('--ep-')) continue
  // Externally-owned namespaces are consumed by the package that declares them,
  // not by anything here, so "no rule consumes it" is expected.
  if (isExternal(name)) continue
  const consumed = (usages.get(name) ?? []).some(
    site => site.file.includes('epicenter-styles')
  )
  if (consumed) continue

  issues.unused.push({
    file: sites[0].file,
    line: sites[0].line,
    detail: `${name} is declared but no rule consumes it`
  })
}

// ---------------------------------------------------------------------------
// Emit the property API
// ---------------------------------------------------------------------------

const globals = [...declarations.entries()]
  .filter(([name]) => !name.startsWith('--ep-'))
  .map(([name, sites]) => ({
    name,
    default: sites[sites.length - 1].value,
    file: sites[0].file,
    themeAware: sites.some(site => site.value.includes('light-dark('))
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

const componentApi = [...components.values()]
  .map(component => ({
    ...component,
    properties: component.properties
      .map(({ declaredInRoot, ...property }) => property)
      .sort((a, b) => a.name.localeCompare(b.name))
  }))
  .sort((a, b) => a.block.localeCompare(b.block))

fs.mkdirSync(distDir, { recursive: true })
fs.writeFileSync(
  join(distDir, 'custom-properties.json'),
  `${JSON.stringify({ globals, components: componentApi }, null, 2)}\n`
)

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

const ORDER = ['undeclared', 'grammar', 'placement', 'unused', 'literals', 'literalDefaults']
const LABEL = {
  undeclared: 'Referenced but never declared',
  grammar: 'Does not satisfy the Layer 4 grammar',
  placement: 'Declared in the wrong place',
  unused: 'Declared but never consumed',
  literals: 'Raw literal in a rule — no property controls this value',
  literalDefaults: 'Property default is a literal where a global token may fit (advisory)'
}

if (asJson) {
  console.log(JSON.stringify(issues, null, 2))
} else {
  const totalProperties = componentApi.reduce(
    (sum, component) => sum + component.properties.length, 0
  )
  console.log(
    `\n🔎 ${componentApi.length} components, ${totalProperties} component properties, ${globals.length} global tokens\n`
  )

  for (const key of ORDER) {
    const found = issues[key]
    const gated = strict || GATE[key]
    if (!found.length) {
      console.log(`✅ ${LABEL[key]}: none`)
      continue
    }

    const icon = gated ? '✖' : '⚠'
    console.log(`\n${icon} ${LABEL[key]} — ${found.length}${gated ? '' : ' (not yet gated)'}`)
    for (const issue of found.slice(0, 40)) {
      console.log(`   ${issue.file}:${issue.line}  ${issue.detail}`)
    }
    if (found.length > 40) console.log(`   … and ${found.length - 40} more`)
  }
  console.log('')
}

const failed = ORDER.filter(key => (strict || GATE[key]) && issues[key].length)

if (failed.length) {
  console.error(`❌ Property contract violated: ${failed.join(', ')}`)
  process.exit(1)
}
