/**
 * Shared model for the Epicenter custom-property contract.
 *
 * This is the machine-readable form of NAMING.md. The validator, the rename-map
 * generator and the docs generator all read the vocabulary from here so there is
 * exactly one place to change when the contract changes.
 */

/**
 * Layer 4 property vocabulary. A component property name must END with one of
 * these. Order matters only for readability; matching is longest-first.
 */
export const PROPERTY_GROUPS = {
  box: [
    'width', 'min-width', 'max-width',
    'height', 'min-height', 'max-height',
    'size', 'aspect-ratio'
  ],
  spacing: [
    'padding', 'padding-inline', 'padding-block',
    'padding-inline-start', 'padding-inline-end',
    'padding-block-start', 'padding-block-end',
    'gap', 'row-gap', 'column-gap',
    'margin', 'margin-inline', 'margin-block',
    'margin-inline-start', 'margin-inline-end',
    'margin-block-start', 'margin-block-end'
  ],
  surface: [
    'bg-color', 'bg-image', 'backdrop-filter'
  ],
  border: [
    'border-width', 'border-style', 'border-color', 'border-radius'
  ],
  text: [
    'text-color', 'text-align', 'text-transform',
    'font-size', 'font-family', 'font-weight', 'font-variation-settings',
    'line-height', 'letter-spacing', 'white-space', 'caret-color',
    'text-decoration-color', 'text-decoration-style', 'text-underline-offset'
  ],
  effect: [
    'shadow', 'opacity', 'transition', 'transform', 'filter',
    'translate', 'translate-x', 'translate-y', 'scale', 'rotate',
    'transform-origin', 'corner-shape', 'angle',
    'duration', 'delay', 'timing-function',
    'outline-color', 'outline-width', 'outline-offset', 'outline-style'
  ],
  layout: [
    'display', 'flex', 'flex-direction', 'align-items', 'justify-content',
    'overflow', 'z-index', 'position', 'resize',
    'top', 'right', 'bottom', 'left', 'inset',
    // Distance a thing is pushed from its anchor — tooltips from their trigger,
    // a framed container from the viewport edge.
    'offset', 'offset-x', 'offset-y',
    // CSS anchor positioning: where an anchored panel sits relative to its
    // anchor, and which flip tactics apply when it would overflow the viewport.
    'position-area', 'position-try-fallbacks',
    'stroke-width', 'stroke-color', 'fill-color',
    'cursor', 'vertical-align', 'object-fit', 'object-position'
  ]
}

/** Flat list of every legal trailing property token, longest first. */
export const PROPERTIES = Object.values(PROPERTY_GROUPS)
  .flat()
  .sort((a, b) => b.length - a.length)

/** Which group a property token belongs to. */
export const PROPERTY_GROUP_OF = Object.fromEntries(
  Object.entries(PROPERTY_GROUPS).flatMap(([group, props]) =>
    props.map(prop => [prop, group])
  )
)

/**
 * Closed set of state words. A state may only appear immediately before the
 * property token. `active` means `:active` only — selection is `selected`.
 */
export const STATES = [
  'hover',
  'active',
  'focus',
  'selected',
  'checked',
  'indeterminate',
  'disabled',
  'error',
  'loading',
  'open'
]

/**
 * Values that may appear as literals inside scss/components/ without being
 * routed through a custom property.
 */
export const LITERAL_ALLOWLIST = new Set([
  '0', '1', 'auto', 'none', 'inherit', 'initial', 'unset', 'currentcolor',
  'transparent', '100%', '50%', '1px'
])

/**
 * CSS properties whose values are a theming decision, so a literal there is a
 * hole in the contract. Structural mechanics — `transform: translateX(-50%)`,
 * `flex`, `display`, grid placement — are deliberately absent: routing those
 * through custom properties would be noise, not control.
 */
const THEMEABLE_PATTERNS = [
  /^(padding|margin)(-(inline|block|top|right|bottom|left))?(-(start|end))?$/,
  /^(row-|column-)?gap$/,
  /^(min-|max-)?(width|height)$/,
  /^flex-basis$/,
  /^border(-(top|right|bottom|left|inline|block))?(-(start|end))?(-(width|style|color|radius))?$/,
  /^border-(top|bottom)-(left|right)-radius$/,
  /^(background|background-color|background-image)$/,
  /^color$/,
  /^(fill|stroke|stroke-width)$/,
  /^font(-(size|family|weight|style|variation-settings))?$/,
  /^(line-height|letter-spacing|text-indent)$/,
  /^(box-shadow|text-shadow|opacity|backdrop-filter)$/,
  /^transition(-(duration|delay|timing-function))?$/,
  /^animation-(duration|delay)$/,
  /^outline(-(width|offset|color|style))?$/,
  /^z-index$/,
  /^(top|right|bottom|left|inset)(-(inline|block))?(-(start|end))?$/
]

export const isThemeableProperty = prop =>
  THEMEABLE_PATTERNS.some(pattern => pattern.test(prop))

/**
 * Contract property tokens whose value is a keyword or a structural choice, so a
 * literal default is fine. Everything else should default to a global token.
 */
const KEYWORD_VALUED = new Set([
  'display', 'flex', 'flex-direction', 'align-items', 'justify-content',
  'overflow', 'position', 'cursor', 'vertical-align', 'resize',
  'object-fit', 'object-position', 'white-space', 'text-align', 'text-transform',
  'border-style', 'outline-style', 'font-family', 'aspect-ratio',
  'corner-shape', 'transform-origin'
])

/** True when a component property's default should name a token, not a literal. */
export const expectsTokenDefault = propertyToken => !KEYWORD_VALUED.has(propertyToken)

/**
 * Custom-property namespaces owned by third parties. Referencing one of these
 * without declaring it is expected — the vendor library declares it.
 */
export const EXTERNAL_PREFIXES = [
  // Owned by @ericpitcock/epicenter-icons-*, which ships its own base.scss
  // declaring and consuming these. This package only ever *sets* them, to
  // configure an icon a component renders.
  '--ep-icon-',
  '--highcharts-',
  '--mapbox-',
  '--flatpickr-',
  '--shiki-',
  '--vp-'
]

/**
 * Split an `--ep-*` name into its parts.
 *
 * Returns `{ block, part, state, property }` or `{ error }` describing why the
 * name does not satisfy the Layer 4 grammar.
 *
 * @param {string} name  full property name, e.g. `--ep-menu-item-hover-bg-color`
 * @param {string} block the component block the file owns, e.g. `menu`
 */
export const parseComponentProperty = (name, block) => {
  if (!/^--ep-[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
    return { error: 'not kebab-case ascii' }
  }

  const body = name.slice('--ep-'.length)

  if (body !== block && !body.startsWith(`${block}-`)) {
    return { error: `namespace does not match block "${block}"` }
  }

  // Longest-first so `border-color` wins over `color`-like shorter tokens.
  const property = PROPERTIES.find(
    prop => body === prop || body.endsWith(`-${prop}`)
  )

  if (!property) {
    return { error: 'does not end in a known property token' }
  }

  const middle = body
    .slice(block.length, body.length - property.length)
    .replace(/^-|-$/g, '')

  if (!middle) {
    return { block, part: null, state: null, property }
  }

  const segments = middle.split('-')
  const firstState = segments.findIndex(segment => STATES.includes(segment))

  if (firstState === -1) {
    return { block, part: middle, state: null, property }
  }

  // States occupy a contiguous run immediately before the property token. A run
  // rather than a single word, because compound states are real — a radio that
  // is both checked and disabled fills differently from one that is only
  // disabled (`--ep-radio-checked-disabled-bg-color`).
  const stateRun = segments.slice(firstState)
  const offender = stateRun.find(segment => !STATES.includes(segment))

  if (offender) {
    return {
      error: `"${offender}" follows the state "${segments[firstState]}" — states must sit immediately before "${property}"`
    }
  }

  return {
    block,
    part: segments.slice(0, firstState).join('-') || null,
    state: stateRun.join('-'),
    property
  }
}

/** True when `name` is declared by a third-party library rather than by us. */
export const isExternal = name =>
  EXTERNAL_PREFIXES.some(prefix => name.startsWith(prefix))
