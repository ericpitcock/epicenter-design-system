import { paddedBg } from '../../../helpers/decorators.js'
import { computed } from 'vue'
import EpButton from '@/components/button/EpButton.vue'
import EpStatusIndicator from '@/components/status-indicator/EpStatusIndicator.vue'

const htmlStyles = window.getComputedStyle(document.querySelector('html'))
let data = {}
for (let index = 0; index < 14; index++) {
  const cssVar = index < 10 ? `--chart-sequence-0${index}` : `--chart-sequence-${index}`
  let value = htmlStyles.getPropertyValue(cssVar)
  // split the value into an array of hue, saturation, and lightness
  value = value.match(/\d+/g)
  const [hue, saturation, lightness] = value

  data[`hue${index}`] = Number(hue)
  data[`saturation${index}`] = Number(saturation)
  data[`lightness${index}`] = Number(lightness)
}

const chartSequenceColorArgTypes = (count) => {
  const argTypes = {}
  for (let i = 0; i < count; i++) {
    argTypes[`hue${i}`] = {
      name: `Hue ${i}`,
      control: {
        type: 'range',
        min: 0,
        max: 360,
        step: 1
      },
      table: {
        category: `Chart Sequence ${i}`
      }
    }
    argTypes[`saturation${i}`] = {
      name: `Saturation ${i}`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Chart Sequence ${i}`
      }
    }
    argTypes[`lightness${i}`] = {
      name: `Lightness ${i}`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Chart Sequence ${i}`
      }
    }
  }
  return argTypes
}

export default {
  title: 'Style/Chart Palette',
  decorators: [paddedBg],
  argTypes: {
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
    const styles = computed(() => ({
      '--chart-sequence-00': `hsl(${args.hue0 + args.globalHue}, ${args.saturation0 + args.globalSaturation}%, ${args.lightness0 + args.globalLightness}%)`,
      '--chart-sequence-01': `hsl(${args.hue1 + args.globalHue}, ${args.saturation1 + args.globalSaturation}%, ${args.lightness1 + args.globalLightness}%)`,
      '--chart-sequence-02': `hsl(${args.hue2 + args.globalHue}, ${args.saturation2 + args.globalSaturation}%, ${args.lightness2 + args.globalLightness}%)`,
      '--chart-sequence-03': `hsl(${args.hue3 + args.globalHue}, ${args.saturation3 + args.globalSaturation}%, ${args.lightness3 + args.globalLightness}%)`,
      '--chart-sequence-04': `hsl(${args.hue4 + args.globalHue}, ${args.saturation4 + args.globalSaturation}%, ${args.lightness4 + args.globalLightness}%)`,
      '--chart-sequence-05': `hsl(${args.hue5 + args.globalHue}, ${args.saturation5 + args.globalSaturation}%, ${args.lightness5 + args.globalLightness}%)`,
      '--chart-sequence-06': `hsl(${args.hue6 + args.globalHue}, ${args.saturation6 + args.globalSaturation}%, ${args.lightness6 + args.globalLightness}%)`,
      '--chart-sequence-07': `hsl(${args.hue7 + args.globalHue}, ${args.saturation7 + args.globalSaturation}%, ${args.lightness7 + args.globalLightness}%)`,
      '--chart-sequence-08': `hsl(${args.hue8 + args.globalHue}, ${args.saturation8 + args.globalSaturation}%, ${args.lightness8 + args.globalLightness}%)`,
      '--chart-sequence-09': `hsl(${args.hue9 + args.globalHue}, ${args.saturation9 + args.globalSaturation}%, ${args.lightness9 + args.globalLightness}%)`,
      '--chart-sequence-10': `hsl(${args.hue10 + args.globalHue}, ${args.saturation10 + args.globalSaturation}%, ${args.lightness10 + args.globalLightness}%)`,
      '--chart-sequence-11': `hsl(${args.hue11 + args.globalHue}, ${args.saturation11 + args.globalSaturation}%, ${args.lightness11 + args.globalLightness}%)`,
      '--chart-sequence-12': `hsl(${args.hue12 + args.globalHue}, ${args.saturation12 + args.globalSaturation}%, ${args.lightness12 + args.globalLightness}%)`,
      '--chart-sequence-13': `hsl(${args.hue13 + args.globalHue}, ${args.saturation13 + args.globalSaturation}%, ${args.lightness13 + args.globalLightness}%)`,
    }))

    const copyStylesToClipboard = () => {
      const styleString = Object.entries(styles.value)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')
      navigator.clipboard.writeText(styleString)
    }

    return { args, styles, copyStylesToClipboard }
  },
  template: `
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '50px', height: '100%', ...styles }">
      <ep-button label="Copy Styles" @click="copyStylesToClipboard" />
      <div style="display: flex; gap: 50px; height: 100%;">
        <div style="display: flex; flex-direction: column;">
          <div
            v-for="(n, index) in 14"
            :key="index"
            :class="'color' + index"
            :style="{ flex: '1', width: '20px', backgroundColor: 'var(--chart-sequence-' + (index < 10 ? '0' + index : index) + ')'}"
          />
        </div>
        <div style="flex: 1; display: flex; gap: 50px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="300px" viewBox="0 0 174.22 174.12">
            <path style="fill: var(--chart-sequence-13)" d="M87.12,87.06L79.54.33c2.49-.22,5.09-.33,7.59-.33v87.06Z"/>
            <path style="fill: var(--chart-sequence-12)" d="M87.12,87.06L72.01,1.32c2.46-.43,5.04-.77,7.53-.99l7.59,86.73Z"/>
            <path style="fill: var(--chart-sequence-11)" d="M87.12,87.06L58.78,4.74c4.77-1.64,8.25-2.54,13.23-3.42l15.12,85.74Z"/>
            <path style="fill: var(--chart-sequence-10)" d="M87.12,87.06L44.92,10.92c4.42-2.45,9.09-4.53,13.86-6.17l28.34,82.32Z"/>
            <path style="fill: var(--chart-sequence-09)" d="M87.12,87.06L27.75,23.39c5.52-5.15,10.57-8.81,17.17-12.47l42.21,76.15Z"/>
            <path style="fill: var(--chart-sequence-08)" d="M87.12,87.06L10.25,46.19c4.74-8.92,10.11-15.91,17.5-22.8l59.38,63.67Z"/>
            <path style="fill: var(--chart-sequence-07)" d="M87.12,87.06L1.13,73.44c1.58-9.97,4.38-18.34,9.12-27.25l76.87,40.87Z"/>
            <path style="fill: var(--chart-sequence-06)" d="M87.12,87.06L3.03,109.6c-3.27-12.22-3.87-23.66-1.89-36.15l85.99,13.62Z"/>
            <path style="fill: var(--chart-sequence-05)" d="M87.12,87.06l-52.4,69.53c-16.17-12.18-26.46-27.44-31.7-47l84.1-22.53Z"/>
            <path style="fill: var(--chart-sequence-04)" d="M87.12,87.06v87.06c-20.24,0-36.23-5.35-52.4-17.53l52.4-69.53Z"/>
            <path style="fill: var(--chart-sequence-03)" d="M87.12,87.06l53.6,68.61c-15.95,12.46-33.36,18.46-53.6,18.46v-87.06Z"/>
            <path style="fill: var(--chart-sequence-02)" d="M87.12,87.06l86.85,6.07c-1.76,25.23-13.32,46.96-33.25,62.53l-53.6-68.61Z"/>
            <path style="fill: var(--chart-sequence-01)" d="M87.12,87.06l63.67-59.38c17.25,18.5,24.94,40.22,23.18,65.45l-86.85-6.07Z"/>
            <path style="fill: var(--chart-sequence-00)" d="M87.12,87.06V0c25.29,0,46.42,9.19,63.67,27.69l-63.67,59.38Z"/>
          </svg>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <ep-status-indicator v-for="(n, index) in 14" :style="{ '--ep-status-indicator-dot-bg': 'var(--chart-sequence-' + (index < 10 ? '0' + index : index) + ')', '--ep-status-indicator-dot-border': 'var(--chart-sequence-' + (index < 10 ? '0' + index : index) + ')' }">
              Chart Sequence {{ index }}
            </ep-status-indicator>
          </div>
        </div>
      </div>
    </div>
  `
})

ChartPalette.args = {
  globalHue: 0,
  globalSaturation: 0,
  globalLightness: 0,
  ...data
}


