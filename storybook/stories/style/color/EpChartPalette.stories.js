import { useClipboard } from '@vueuse/core'
import blinder from 'color-blind'
import { computed, ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpStatusIndicator from '@/components/status-indicator/EpStatusIndicator.vue'

import chartSeq from '../../../../packages/epicenter-styles/tokens/color/chart-sequence.yaml'
import { paddedBg } from '../../../helpers/decorators.js'

// Industry-standard colorblind-safe palettes
const colorPalettes = {
  epicenter: null, // Will be populated from YAML
  okabeIto: [
    '#E69F00', // Orange
    '#56B4E9', // Sky Blue
    '#009E73', // Bluish Green
    '#F0E442', // Yellow
    '#0072B2', // Blue
    '#D55E00', // Vermillion
    '#CC79A7', // Reddish Purple
    '#000000', // Black
    '#E69F00', // Repeat for 14 colors
    '#56B4E9',
    '#009E73',
    '#F0E442',
    '#0072B2',
    '#D55E00'
  ],
  paulTolBright: [
    '#4477AA', // Blue
    '#EE6677', // Red
    '#228833', // Green
    '#CCBB44', // Yellow
    '#66CCEE', // Cyan
    '#AA3377', // Purple
    '#BBBBBB', // Grey
    '#4477AA', // Repeat for 14 colors
    '#EE6677',
    '#228833',
    '#CCBB44',
    '#66CCEE',
    '#AA3377',
    '#BBBBBB'
  ],
  paulTolMuted: [
    '#332288', // Indigo
    '#88CCEE', // Cyan
    '#44AA99', // Teal
    '#117733', // Green
    '#999933', // Olive
    '#DDCC77', // Sand
    '#CC6677', // Rose
    '#882255', // Wine
    '#AA4499', // Purple
    '#332288', // Repeat for 14 colors
    '#88CCEE',
    '#44AA99',
    '#117733',
    '#999933'
  ],
  paulTolVibrant: [
    '#EE7733', // Orange
    '#0077BB', // Blue
    '#33BBEE', // Cyan
    '#EE3377', // Magenta
    '#CC3311', // Red
    '#009988', // Teal
    '#BBBBBB', // Grey
    '#EE7733', // Repeat for 14 colors
    '#0077BB',
    '#33BBEE',
    '#EE3377',
    '#CC3311',
    '#009988',
    '#BBBBBB'
  ]
}

// Helper to convert hex to HSL
const hexToHSL = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { h: 0, s: 0, l: 0 }

  let r = parseInt(result[1], 16) / 255
  let g = parseInt(result[2], 16) / 255
  let b = parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}

let data = {}

for (const [key, value] of Object.entries(chartSeq)) {
  // index = last two digits of key
  const index = key.slice(-2)

  // Parse the HSL values
  const [hue, saturation, lightness] = value.dark
    .split(',')
    .map((v) => v.trim().replace('%', ''))
    .map(Number)

  // Use the full index (with leading zeros) as the key
  data[`hue${index}`] = hue
  data[`saturation${index}`] = saturation
  data[`lightness${index}`] = lightness
}

const chartSequenceColorArgTypes = (count) => {
  const argTypes = {}
  for (let i = 0; i < count; i++) {
    // if index is less than 10, add a leading zero
    const index = i < 10 ? `0${i}` : i
    argTypes[`hue${index}`] = {
      name: `Hue ${index}`,
      control: {
        type: 'range',
        min: 0,
        max: 360,
        step: 1
      },
      table: {
        category: `Chart Sequence ${index}`
      }
    }
    argTypes[`saturation${index}`] = {
      name: `Saturation ${index}`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Chart Sequence ${index}`
      }
    }
    argTypes[`lightness${index}`] = {
      name: `Lightness ${index}`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Chart Sequence ${index}`
      }
    }
  }
  return argTypes
}

export default {
  title: 'Style/Chart Palette',
  decorators: [paddedBg],
  argTypes: {
    preset: {
      name: 'Preset Palette',
      control: {
        type: 'select'
      },
      options: ['Epicenter (Default)', 'Okabe-Ito', 'Paul Tol Bright', 'Paul Tol Muted', 'Paul Tol Vibrant'],
      table: {
        category: 'Presets'
      }
    },
    globalHue: {
      name: 'Global Hue',
      control: {
        type: 'range',
        min: -180,
        max: 180,
        step: 1
      }
    },
    globalSaturation: {
      name: 'Global Saturation',
      control: {
        type: 'range',
        min: -100,
        max: 100,
        step: 1
      }
    },
    globalLightness: {
      name: 'Global Lightness',
      control: {
        type: 'range',
        min: -100,
        max: 100,
        step: 1
      }
    },
    ...chartSequenceColorArgTypes(14)
  },
}

export const ChartPalette = (args) => ({
  components: { EpButton, EpStatusIndicator },
  setup() {
    // Define color vision types
    const visionTypes = [
      { key: 'normal', label: 'Normal Vision', transform: null },
      { key: 'protanopia', label: 'Protanopia (Red-Blind)', transform: 'protanopia' },
      { key: 'protanomaly', label: 'Protanomaly (Red-Weak)', transform: 'protanomaly' },
      { key: 'deuteranopia', label: 'Deuteranopia (Green-Blind)', transform: 'deuteranopia' },
      { key: 'deuteranomaly', label: 'Deuteranomaly (Green-Weak)', transform: 'deuteranomaly' },
      { key: 'tritanopia', label: 'Tritanopia (Blue-Blind)', transform: 'tritanopia' },
      { key: 'tritanomaly', label: 'Tritanomaly (Blue-Weak)', transform: 'tritanomaly' },
      { key: 'achromatomaly', label: 'Achromatomaly (Blue Cone Monochromacy)', transform: 'achromatomaly' },
      { key: 'achromatopsia', label: 'Achromatopsia (Monochromacy)', transform: 'achromatopsia' }
    ]

    // Get the active palette based on preset selection
    const getActivePalette = () => {
      const presetMap = {
        'Okabe-Ito': colorPalettes.okabeIto,
        'Paul Tol Bright': colorPalettes.paulTolBright,
        'Paul Tol Muted': colorPalettes.paulTolMuted,
        'Paul Tol Vibrant': colorPalettes.paulTolVibrant
      }
      return presetMap[args.preset] || null
    }

    const getColor = (index) => {
      const paddedIndex = index < 10 ? `0${index}` : index
      const activePalette = getActivePalette()

      // If a preset is selected, use hex colors directly
      if (activePalette) {
        return activePalette[index]
      }

      // Otherwise use the custom HSL values from args
      return `hsl(${args[`hue${paddedIndex}`] + args.globalHue}, ${args[`saturation${paddedIndex}`] + args.globalSaturation}%, ${args[`lightness${paddedIndex}`] + args.globalLightness}%)`
    }

    const applyColorBlindness = (color, type) => {
      if (!type) return color
      return blinder[type](color)
    }

    const getStylesForVision = (visionType) => {
      const styles = {}
      for (let i = 0; i < 14; i++) {
        const paddedIndex = i < 10 ? `0${i}` : i
        const originalColor = getColor(i)
        const transformedColor = applyColorBlindness(originalColor, visionType)
        styles[`--chart-sequence-${paddedIndex}`] = transformedColor
      }
      return styles
    }

    const styles = computed(() => {
      const result = {}
      for (let i = 0; i < 14; i++) {
        const paddedIndex = i < 10 ? `0${i}` : i
        result[`--chart-sequence-${paddedIndex}`] = getColor(i)
      }
      return result
    })

    const source = ref('')
    const {
      copy,
      // copied
    } = useClipboard({ source })

    const copyStylesToClipboard = () => {
      const styleString = Object.entries(styles.value)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')
      copy(styleString)
    }

    return { args, styles, copyStylesToClipboard, visionTypes, getStylesForVision }
  },
  template: `
    <div :style="styles">
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <ep-button class="ep-button-var--primary" @click="copyStylesToClipboard">
            Copy styles
          </ep-button>
          <div style="font-size: 14px; color: var(--text-secondary);">
            Active Palette: <strong>{{ args.preset }}</strong>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 40px;">
          <div 
            v-for="vision in visionTypes" 
            :key="vision.key"
            style="display: flex; flex-direction: column; gap: 16px; padding: 20px; background: var(--surface-1); border-radius: 8px;"
          >
            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">{{ vision.label }}</h3>
            
            <div style="display: flex; gap: 20px; align-items: center;">
              <div style="display: flex; flex-direction: column; flex-shrink: 0;">
                <div
                  v-for="(n, index) in 14"
                  :key="index"
                  :style="{ 
                    height: '20px', 
                    width: '20px', 
                    backgroundColor: vision.transform 
                      ? getStylesForVision(vision.transform)['--chart-sequence-' + (index < 10 ? '0' + index : index)]
                      : 'var(--chart-sequence-' + (index < 10 ? '0' + index : index) + ')'
                  }"
                />
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="160px" height="160px" viewBox="0 0 174.22 174.12" style="flex-shrink: 0; flex: 2; height: 100%;">
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-13'] : 'var(--chart-sequence-13)' }" d="M87.12,87.06L79.54.33c2.49-.22,5.09-.33,7.59-.33v87.06Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-12'] : 'var(--chart-sequence-12)' }" d="M87.12,87.06L72.01,1.32c2.46-.43,5.04-.77,7.53-.99l7.59,86.73Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-11'] : 'var(--chart-sequence-11)' }" d="M87.12,87.06L58.78,4.74c4.77-1.64,8.25-2.54,13.23-3.42l15.12,85.74Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-10'] : 'var(--chart-sequence-10)' }" d="M87.12,87.06L44.92,10.92c4.42-2.45,9.09-4.53,13.86-6.17l28.34,82.32Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-09'] : 'var(--chart-sequence-09)' }" d="M87.12,87.06L27.75,23.39c5.52-5.15,10.57-8.81,17.17-12.47l42.21,76.15Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-08'] : 'var(--chart-sequence-08)' }" d="M87.12,87.06L10.25,46.19c4.74-8.92,10.11-15.91,17.5-22.8l59.38,63.67Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-07'] : 'var(--chart-sequence-07)' }" d="M87.12,87.06L1.13,73.44c1.58-9.97,4.38-18.34,9.12-27.25l76.87,40.87Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-06'] : 'var(--chart-sequence-06)' }" d="M87.12,87.06L3.03,109.6c-3.27-12.22-3.87-23.66-1.89-36.15l85.99,13.62Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-05'] : 'var(--chart-sequence-05)' }" d="M87.12,87.06l-52.4,69.53c-16.17-12.18-26.46-27.44-31.7-47l84.1-22.53Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-04'] : 'var(--chart-sequence-04)' }" d="M87.12,87.06v87.06c-20.24,0-36.23-5.35-52.4-17.53l52.4-69.53Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-03'] : 'var(--chart-sequence-03)' }" d="M87.12,87.06l53.6,68.61c-15.95,12.46-33.36,18.46-53.6,18.46v-87.06Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-02'] : 'var(--chart-sequence-02)' }" d="M87.12,87.06l86.85,6.07c-1.76,25.23-13.32,46.96-33.25,62.53l-53.6-68.61Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-01'] : 'var(--chart-sequence-01)' }" d="M87.12,87.06l63.67-59.38c17.25,18.5,24.94,40.22,23.18,65.45l-86.85-6.07Z"/>
                <path :style="{ fill: vision.transform ? getStylesForVision(vision.transform)['--chart-sequence-00'] : 'var(--chart-sequence-00)' }" d="M87.12,87.06V0c25.29,0,46.42,9.19,63.67,27.69l-63.67,59.38Z"/>
              </svg>
              
              <div style="display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 0;">
                <ep-status-indicator 
                  v-for="(n, index) in 14" 
                  :key="index"
                  :style="{ 
                    '--ep-status-indicator-dot-bg': vision.transform 
                      ? getStylesForVision(vision.transform)['--chart-sequence-' + (index < 10 ? '0' + index : index)]
                      : 'var(--chart-sequence-' + (index < 10 ? '0' + index : index) + ')',
                    '--ep-status-indicator-dot-border': vision.transform 
                      ? getStylesForVision(vision.transform)['--chart-sequence-' + (index < 10 ? '0' + index : index)]
                      : 'var(--chart-sequence-' + (index < 10 ? '0' + index : index) + ')'
                  }"
                >
                  Chart Sequence {{ index }}
                </ep-status-indicator>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

ChartPalette.args = {
  preset: 'Epicenter (Default)',
  globalHue: 0,
  globalSaturation: 0,
  globalLightness: 0,
  ...data
}


