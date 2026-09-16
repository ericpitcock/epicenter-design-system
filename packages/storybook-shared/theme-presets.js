/**
 * Theme seeds for Storybook — shared by the Vue and React previews.
 *
 * Every value here is written onto document.documentElement.style, which is
 * exactly what a consumer's theme.css does to :root, so a preset exercises the
 * same code path as a real rebrand. Nothing is recomputed in JS: the derived
 * ramps are read back from the stylesheet with getComputedStyle, so the
 * playground is a test of the CSS, not a second implementation of it.
 */

/** The seeds a preset or the playground may set. Mirrors tokens/theme.yaml. */
export const SEEDS = [
  '--primary-color',
  '--primary-color--contrast',
  '--accent-hue-shift',
  '--neutral-color',
  '--status-danger-color',
  '--status-warning-color',
  '--status-success-color',
  '--status-info-color',
  '--link-color',
]

/** The steps derived from the brand seeds, in swatch order. */
export const DERIVED = [
  '--primary-color--100',
  '--primary-color--200',
  '--primary-color--300',
  '--primary-color--400',
  '--primary-color--500',
  '--primary-color',
  '--primary-color--600',
  '--primary-color--700',
  '--primary-color--800',
  '--primary-color--900',
  '--primary-color--1000',
  '--accent-color',
  '--accent-color--600',
  '--accent-color--700',
]

/**
 * Toolbar presets. `Indigo` is the shipped default; `Magenta` is the
 * payday-worksheet brand, so a regression that only shows off the default hue
 * has a real consumer to show up in.
 */
export const PRESETS = {
  'Indigo (default)': {},
  Magenta: {
    '--primary-color': 'oklch(0.6 0.2 320)',
    '--neutral-color': 'oklch(0.5 0.012 320)',
  },
  Teal: {
    '--primary-color': 'oklch(0.68 0.13 190)',
    '--primary-color--contrast': 'oklch(0.2 0.03 190)',
    '--neutral-color': 'oklch(0.5 0.008 200)',
  },
  Warm: {
    '--primary-color': 'oklch(0.62 0.17 45)',
    '--neutral-color': 'oklch(0.5 0.015 60)',
    '--status-info-color': 'oklch(0.62 0.13 250)',
  },
}

const rootOf = element => element ?? document.documentElement

/** Clear every seed, then set the given ones. Unknown names are ignored. */
export const applySeeds = (seeds = {}, element) => {
  const root = rootOf(element)
  for (const name of SEEDS) root.style.removeProperty(name)
  for (const [name, value] of Object.entries(seeds)) {
    if (SEEDS.includes(name) && value != null && value !== '') root.style.setProperty(name, value)
  }
}

export const clearSeeds = element => applySeeds({}, element)

/** The seeds as the stylesheet currently resolves them. */
export const readSeeds = element => {
  const computed = getComputedStyle(rootOf(element))
  return Object.fromEntries(SEEDS.map(name => [name, computed.getPropertyValue(name).trim()]))
}

/** The derived ramp as the stylesheet currently resolves it. */
export const readDerived = element => {
  const computed = getComputedStyle(rootOf(element))
  return Object.fromEntries(DERIVED.map(name => [name, computed.getPropertyValue(name).trim()]))
}

/** A theme.css body holding only the seeds that differ from the defaults. */
export const serializeThemeCss = seeds => {
  const lines = Object.entries(seeds)
    .filter(([name, value]) => SEEDS.includes(name) && value != null && value !== '')
    .map(([name, value]) => `  ${name}: ${value};`)
  return `:root {\n${lines.join('\n')}\n}\n`
}
