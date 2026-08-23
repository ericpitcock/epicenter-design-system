import { defineComponent, h, onScopeDispose, watchEffect } from 'vue'

import customProperties from '../../../epicenter-styles/dist/custom-properties.json'

/**
 * Storybook controls for a component's CSS custom properties.
 *
 * The property list is read from dist/custom-properties.json, which the styles
 * build emits, so these controls cannot drift out of step with the stylesheet —
 * add a property to a component's SCSS and it shows up here on the next build.
 *
 * Usage in a story:
 *
 *   import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
 *
 *   export default {
 *     decorators: [withCssProps('badge'), centeredSurface],
 *     argTypes: { ...yourArgTypes, ...cssPropArgTypes('badge') }
 *   }
 */

const blocks = Object.fromEntries(
  customProperties.components.map(component => [component.block, component])
)

// Property tokens that are not worth a control: structural mechanics a designer
// would not reach for, and which mostly break the layout when changed.
const SKIPPED = new Set([
  'display', 'position', 'flex', 'flex-direction', 'align-items',
  'justify-content', 'overflow', 'z-index', 'vertical-align',
  'top', 'right', 'bottom', 'left', 'inset',
  'translate', 'translate-x', 'translate-y', 'transform-origin',
  'object-fit', 'object-position', 'aspect-ratio', 'corner-shape', 'white-space'
])

const KEYWORD_OPTIONS = {
  'border-style': ['solid', 'dashed', 'dotted', 'double', 'none'],
  'outline-style': ['solid', 'dashed', 'dotted', 'none'],
  'text-align': ['left', 'center', 'right'],
  'text-transform': ['none', 'uppercase', 'lowercase', 'capitalize'],
  'cursor': ['auto', 'default', 'pointer', 'text', 'not-allowed'],
  'resize': ['none', 'both', 'horizontal', 'vertical']
}

const NUMBER_TOKENS = new Set([
  'opacity', 'scale', 'rotate', 'stroke-width', 'line-height', 'duration', 'delay'
])

/** The control a property's type calls for. */
const controlFor = property => {
  if (property.property.endsWith('-color')) return { type: 'color' }
  if (KEYWORD_OPTIONS[property.property]) {
    return { type: 'select', options: KEYWORD_OPTIONS[property.property] }
  }
  if (NUMBER_TOKENS.has(property.property)) return { type: 'number' }
  // Everything else takes a CSS length, which needs its unit — a number control
  // would silently drop the `rem`.
  return { type: 'text' }
}

/**
 * A stable, URL-safe arg key for a property: the part after `--ep-<block>-`,
 * camel-cased. `--ep-button-hover-bg-color` on block `button` → `hoverBgColor`.
 */
export const argKeyFor = (block, name) =>
  name
    .slice(`--ep-${block}-`.length)
    .replace(/-([a-z0-9])/g, (_, character) => character.toUpperCase())

const categoryFor = (property, hasStates) => {
  if (!property.state) return hasStates ? 'Base Styles' : 'Styles'
  const label = property.state
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
  return `${label} Styles`
}

/** Properties of a block that are worth exposing as controls. */
const controllable = (block, { only, except = [] } = {}) => {
  const entry = blocks[block]
  if (!entry) {
    console.warn(`[cssProperties] no block "${block}" in custom-properties.json`)
    return []
  }
  return entry.properties.filter(property => {
    if (except.includes(property.name)) return false
    if (only) return only.includes(property.name)
    return !SKIPPED.has(property.property)
  })
}

/**
 * argTypes for every custom property a component exposes.
 *
 * @param {string} block            the component's block, e.g. 'badge'
 * @param {object} [options]
 * @param {string[]} [options.only]   expose only these property names
 * @param {string[]} [options.except] exclude these property names
 * @param {object} [options.if]       Storybook `if` condition, applied to every
 *                                    control — used by EpButton to reveal them
 *                                    only when the Custom style is selected
 */
export const cssPropArgTypes = (block, options = {}) => {
  const properties = controllable(block, options)
  const hasStates = properties.some(property => property.state)

  return Object.fromEntries(
    properties.map(property => [
      argKeyFor(block, property.name),
      {
        ...(options.if ? { if: options.if } : {}),
        name: property.name,
        control: controlFor(property),
        table: {
          category: categoryFor(property, hasStates),
          defaultValue: { summary: property.default }
        }
      }
    ])
  )
}

/**
 * Whether an `if` gate — the same shape Storybook uses to show/hide a control —
 * currently holds. Without this the properties would keep applying after the
 * user switched away from the variant that revealed them.
 */
const gateOpen = (condition, args) => {
  if (!condition) return true
  const value = args[condition.arg]
  if ('eq' in condition) return value === condition.eq
  if ('neq' in condition) return value !== condition.neq
  return Boolean(value)
}

/** The CSS text for whichever properties the user has actually set. */
const ruleFor = (block, args, options) => {
  const entry = blocks[block]
  if (!entry) return ''
  if (!gateOpen(options.if, args)) return ''

  const declarations = controllable(block, options)
    .map(property => [property.name, args[argKeyFor(block, property.name)]])
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([name, value]) => `  ${name}: ${value};`)

  return declarations.length
    ? `${entry.class} {\n${declarations.join('\n')}\n}`
    : ''
}

let styleSeq = 0

/**
 * Applies the controls as a real stylesheet rule targeting the component's root
 * class, rather than an inline style on one element.
 *
 * Two reasons. It is what a consumer actually writes — and because every
 * component declares its defaults on its own root class, a value inherited from
 * an ancestor would lose to them, so a wrapper's inline style would do nothing.
 * It also reaches every instance in a story that renders several.
 */
export const withCssProps = (block, options = {}) => (story, context) =>
  defineComponent({
    setup() {
      const id = `ep-css-props-${styleSeq++}`
      const element = document.createElement('style')
      element.id = id
      document.head.appendChild(element)

      watchEffect(() => {
        element.textContent = ruleFor(block, context.args, options)
      })

      onScopeDispose(() => element.remove())
      return () => h(story())
    }
  })

/**
 * The same properties as an inline style object, for stories that would rather
 * bind `:style` directly on the component.
 */
export const cssPropStyles = (block, args, options = {}) =>
  Object.fromEntries(
    controllable(block, options)
      .map(property => [property.name, args[argKeyFor(block, property.name)]])
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
  )
