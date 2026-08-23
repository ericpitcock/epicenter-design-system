import { EpAppImage } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'
import { computed } from 'vue'

const imageLabels = {
  '/sea-downtown-landscape.png': 'Downtown Landscape',
  '/sea-downtown-portrait.png': 'Downtown Portrait',
  '/sea-portrait-drawing.png': 'Portrait Drawing',
  '/sea-trail-landscape.png': 'Trail Landscape',
}

const anchorOptions = [
  'top left',
  'top',
  'top right',
  'left',
  'center',
  'right',
  'bottom left',
  'bottom',
  'bottom right',
]

export default {
  title: 'Components/Ep App Image',
  component: EpAppImage,
  decorators: [withCssProps('app-image', { except: ['--ep-app-image-aspect-ratio', '--ep-app-image-inset'] })],
  // Decorators are applied per-story, not here — SplitViewport needs a
  // full-bleed stage, and story decorators add to meta decorators rather
  // than replacing them.
  argTypes: {
    src: {
      options: Object.keys(imageLabels),
      control: {
        type: 'select',
        labels: imageLabels,
      },
      description: 'Image source URL',
    },
    srcset: {
      control: 'text',
      description: 'Responsive candidates, e.g. "/img-800.png 800w, /img-1600.png 1600w"',
    },
    sizes: {
      control: 'text',
      description: 'Emitted as an attribute only when srcset is present (default "auto")',
    },
    aspectRatio: {
      control: 'text',
      description: 'Required container ratio: "3/2", 1.5, or the literal "auto" opt-out',
    },
    width: {
      control: 'number',
      description: 'Intrinsic width hint; sizes the image in free mode',
    },
    height: {
      control: 'number',
      description: 'Intrinsic height hint; sizes the image in free mode',
    },
    loading: {
      options: ['lazy', 'eager'],
      control: 'inline-radio',
    },
    fetchPriority: {
      options: ['auto', 'high', 'low'],
      control: 'inline-radio',
      description: 'high + lazy is contradictory and logs a dev warning',
    },
    decoding: {
      options: ['async', 'sync', 'auto'],
      control: 'inline-radio',
    },
    crossorigin: {
      options: ['anonymous', 'use-credentials'],
      control: 'select',
    },
    referrerpolicy: {
      control: 'text',
    },
    mode: {
      options: ['fit', 'free'],
      control: 'inline-radio',
      description: 'fit: image fills the box via object-fit · free: image at its own size, clipped by the box',
    },
    fit: {
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      control: 'select',
      description: 'object-fit — fit mode only',
    },
    anchor: {
      options: anchorOptions,
      control: 'select',
      description: 'Position anchor; also the default transform-origin for zoom',
    },
    inset: {
      control: 'object',
      description: 'free mode only — per-side override of anchor, e.g. { "bottom": "-10%", "right": "20px" }',
    },
    offsetX: {
      control: 'text',
      description: 'Extra translate, composes with anchor — include units ("24px", "-5%")',
    },
    offsetY: {
      control: 'text',
      description: 'Extra translate, composes with anchor — include units ("24px", "-5%")',
    },
    zoom: {
      control: {
        type: 'range',
        min: 0,
        max: 12,
        step: 0.1,
      },
      description: 'v-model:zoom — rendered value is clamped to [minZoom, maxZoom] without mutating your ref',
    },
    minZoom: {
      control: 'number',
    },
    maxZoom: {
      control: 'number',
    },
    origin: {
      control: 'text',
      description: 'transform-origin override; defaults to anchor',
    },
    radius: {
      control: 'text',
      description: 'Corner radius, e.g. "1rem" — falls back to the --image-radius token when unset',
    },
    fadeDuration: {
      control: {
        type: 'range',
        min: 0,
        max: 2000,
        step: 50,
      },
      description: 'Fade-in duration (ms) once the image is decoded',
    },
    alt: {
      control: 'text',
      description: 'Required unless decorative — enforced at the type level',
    },
    decorative: {
      control: 'boolean',
      description: 'Renders alt="" for purely decorative images',
    },
  
    ...cssPropArgTypes('app-image', { except: ['--ep-app-image-aspect-ratio', '--ep-app-image-inset'] }),
  },
}

const Template = (args) => ({
  components: { EpAppImage },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 500px; max-width: 100%;">
      <EpAppImage v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.decorators = [centeredSurface]
Default.args = {
  src: '/sea-downtown-landscape.png',
  aspectRatio: '3/2',
  alt: 'Seattle downtown landscape view',
  mode: 'fit',
  fit: 'cover',
  anchor: 'center',
  loading: 'lazy',
  fetchPriority: 'auto',
  decoding: 'async',
  offsetX: '0px',
  offsetY: '0px',
  zoom: 1,
  minZoom: 0.1,
  maxZoom: 10,
  fadeDuration: 200,
  decorative: false,
}

export const FreeMode = Template.bind({})
FreeMode.decorators = [centeredSurface]
FreeMode.args = {
  ...Default.args,
  src: '/sea-portrait-drawing.png',
  alt: 'Seattle portrait drawing, freely cropped',
  mode: 'free',
  anchor: 'bottom right',
  inset: { bottom: '-10%', right: '20px' },
  zoom: 0.4,
}

const formatInset = (inset) => {
  if (!inset) return '—'
  const sides = ['top', 'right', 'bottom', 'left']
    .filter((side) => inset[side] != null)
    .map((side) => `${side}: ${inset[side]}`)
  return sides.length ? sides.join(', ') : '—'
}

// Full-bleed split stage: left half is a live readout, right half is the
// EpAppImage container. Fixed positioning guarantees an exact viewport box
// regardless of any ancestor padding — hence no decorator on this story.
export const SplitViewport = (args) => ({
  components: { EpAppImage },
  setup() {
    const clampedZoom = computed(() => {
      const min = args.minZoom ?? 0.1
      const max = args.maxZoom ?? 10
      return Math.min(max, Math.max(min, args.zoom ?? 1))
    })

    const rows = computed(() => [
      ['mode', args.mode],
      ['fit', args.mode === 'free' ? '— free mode' : args.fit],
      ['anchor', args.anchor],
      ['transform-origin', args.origin || `${args.anchor} (from anchor)`],
      ['inset', args.mode === 'free' ? formatInset(args.inset) : '— fit mode'],
      ['offsetX / offsetY', `${args.offsetX ?? 0}  /  ${args.offsetY ?? 0}`],
      [
        'zoom',
        args.zoom === clampedZoom.value
          ? String(args.zoom)
          : `${args.zoom} → clamped to ${clampedZoom.value}`,
      ],
      ['zoom range', `${args.minZoom} – ${args.maxZoom}`],
      ['aspect-ratio', String(args.aspectRatio)],
      ['radius', args.radius ?? 'token default'],
    ])

    return { args, rows }
  },
  template: `
    <div style="
      position: fixed;
      inset: 0;
      display: grid;
      /* minmax(0, …) — a bare 1fr is minmax(auto, 1fr), which lets a tall
         image's intrinsic height grow the track past the viewport. */
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: minmax(0, 1fr);
    ">
      <div style="
        min-height: 0;
        overflow-y: auto;
        padding: 2rem;
        background-color: var(--interface-surface);
        color: var(--text-color);
      ">
        <h2 style="margin: 0 0 0.5rem; font-size: 1rem;">Positioning &amp; zoom</h2>
        <p style="margin: 0 0 1.5rem; opacity: 0.7;">
          The right half is the EpAppImage container, edge to edge. Adjust the
          Controls panel and watch the values below.
        </p>
        <dl style="margin: 0;">
          <div
            v-for="[label, value] in rows"
            :key="label"
            style="
              display: flex;
              justify-content: space-between;
              gap: 1.5rem;
              padding: 0.5rem 0;
              border-bottom: 1px solid var(--border-color);
            "
          >
            <dt style="opacity: 0.6;">{{ label }}</dt>
            <dd style="margin: 0; text-align: right;">{{ value }}</dd>
          </div>
        </dl>
      </div>
      <EpAppImage v-bind="args" />
    </div>
  `
})

SplitViewport.parameters = { layout: 'fullscreen' }
SplitViewport.args = {
  ...Default.args,
  src: '/sea-downtown-portrait.png',
  alt: 'Seattle downtown portrait view',
  aspectRatio: 'auto',
  radius: '0px',
  loading: 'eager',
}
