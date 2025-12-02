import { useClipboard } from '@vueuse/core'
import blinder from 'color-blind'
import { computed, ref, watch } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpStatusIndicator from '@/components/status-indicator/EpStatusIndicator.vue'

import chartSeq from '../../../../packages/epicenter-styles/tokens/color/chart-sequence.yaml'
import { paddedBg } from '../../../helpers/decorators.js'

// Industry-standard colorblind-safe palettes
const colorPalettes = {
  epicenter: { colors: null, count: 14 }, // Will be populated from YAML
  okabeIto: {
    colors: [
      '#E69F00', // Orange
      '#56B4E9', // Sky Blue
      '#009E73', // Bluish Green
      '#F0E442', // Yellow
      '#0072B2', // Blue
      '#D55E00', // Vermillion
      '#CC79A7', // Reddish Purple
      '#000000'  // Black
    ],
    count: 8
  },
  paulTolBright: {
    colors: [
      '#4477AA', // Blue
      '#EE6677', // Red
      '#228833', // Green
      '#CCBB44', // Yellow
      '#66CCEE', // Cyan
      '#AA3377', // Purple
      '#BBBBBB'  // Grey
    ],
    count: 7
  },
  paulTolMuted: {
    colors: [
      '#332288', // Indigo
      '#88CCEE', // Cyan
      '#44AA99', // Teal
      '#117733', // Green
      '#999933', // Olive
      '#DDCC77', // Sand
      '#CC6677', // Rose
      '#882255', // Wine
      '#AA4499'  // Purple
    ],
    count: 9
  },
  paulTolVibrant: {
    colors: [
      '#EE7733', // Orange
      '#0077BB', // Blue
      '#33BBEE', // Cyan
      '#EE3377', // Magenta
      '#CC3311', // Red
      '#009988', // Teal
      '#BBBBBB'  // Grey
    ],
    count: 7
  }
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

    const getColorCount = () => {
      const activePalette = getActivePalette()
      return activePalette ? activePalette.count : 14
    }

    const getColor = (index) => {
      const paddedIndex = index < 10 ? `0${index}` : index

      // Always use the HSL values from args (which are populated from presets via watch)
      return `hsl(${args[`hue${paddedIndex}`] + args.globalHue}, ${args[`saturation${paddedIndex}`] + args.globalSaturation}%, ${args[`lightness${paddedIndex}`] + args.globalLightness}%)`
    }

    const colorCount = computed(() => getColorCount())

    const applyColorBlindness = (color, type) => {
      if (!type) return color
      return blinder[type](color)
    }

    const getStylesForVision = (visionType) => {
      const styles = {}
      const count = getColorCount()
      for (let i = 0; i < count; i++) {
        const paddedIndex = i < 10 ? `0${i}` : i
        const originalColor = getColor(i)
        const transformedColor = applyColorBlindness(originalColor, visionType)
        styles[`--chart-sequence-${paddedIndex}`] = transformedColor
      }
      return styles
    }

    const styles = computed(() => {
      const result = {}
      const count = getColorCount()
      for (let i = 0; i < count; i++) {
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

    // Generate pie chart segments dynamically
    const getPieSegments = (count) => {
      const segments = []
      const anglePerSegment = 360 / count

      for (let i = 0; i < count; i++) {
        const startAngle = i * anglePerSegment - 90 // Start from top
        const endAngle = (i + 1) * anglePerSegment - 90

        const x1 = 87.11 + 87.11 * Math.cos((startAngle * Math.PI) / 180)
        const y1 = 87.06 + 87.06 * Math.sin((startAngle * Math.PI) / 180)
        const x2 = 87.11 + 87.11 * Math.cos((endAngle * Math.PI) / 180)
        const y2 = 87.06 + 87.06 * Math.sin((endAngle * Math.PI) / 180)

        const largeArcFlag = anglePerSegment > 180 ? 1 : 0

        segments.push({
          index: i,
          path: `M 87.11,87.06 L ${x1},${y1} A 87.11,87.06 0 ${largeArcFlag} 1 ${x2},${y2} Z`
        })
      }

      return segments
    }

    // Watch for preset changes and update args directly
    watch(() => args.preset, (newPreset, oldPreset) => {
      // Only update if preset actually changed (not initial load)
      if (oldPreset && newPreset !== oldPreset) {
        const activePalette = getActivePalette()

        if (activePalette) {
          // Convert preset hex colors to HSL and update args directly
          for (let i = 0; i < 14; i++) {
            const paddedIndex = i < 10 ? `0${i}` : i

            if (i < activePalette.count) {
              const hsl = hexToHSL(activePalette.colors[i])
              args[`hue${paddedIndex}`] = hsl.h
              args[`saturation${paddedIndex}`] = hsl.s
              args[`lightness${paddedIndex}`] = hsl.l
            } else {
              // Set unused colors to transparent/neutral
              args[`hue${paddedIndex}`] = 0
              args[`saturation${paddedIndex}`] = 0
              args[`lightness${paddedIndex}`] = 0
            }
          }

          // Reset global adjustments
          args.globalHue = 0
          args.globalSaturation = 0
          args.globalLightness = 0
        }
      }
    })

    return { args, styles, copyStylesToClipboard, visionTypes, getStylesForVision, colorCount, getPieSegments }
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
                  v-for="(n, index) in colorCount"
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
                <path 
                  v-for="segment in getPieSegments(colorCount)"
                  :key="segment.index"
                  :d="segment.path"
                  :style="{ 
                    fill: vision.transform 
                      ? getStylesForVision(vision.transform)['--chart-sequence-' + (segment.index < 10 ? '0' + segment.index : segment.index)]
                      : 'var(--chart-sequence-' + (segment.index < 10 ? '0' + segment.index : segment.index) + ')'
                  }" 
                />
              </svg>
              
              <div style="display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 0;">
                <ep-status-indicator 
                  v-for="(n, index) in colorCount" 
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


