import { paddedSurface } from '../../../helpers/decorators.js'
import { computed } from 'vue'

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
  decorators: [paddedSurface],
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

    return { args, styles }
  },
  template: `
    <div
      v-for="(n, index) in 14"
      :key="index"
      :class="'color' + index"
      :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-' + (index < 10 ? '0' + index : index)] }"
    />
  `
})

ChartPalette.args = {
  globalHue: 0,
  globalSaturation: 0,
  globalLightness: 0,
  hue0: 262,
  saturation0: 83,
  lightness0: 58,
  hue1: 199,
  saturation1: 89,
  lightness1: 48,
  hue2: 175,
  saturation2: 77,
  lightness2: 26,
  hue3: 329,
  saturation3: 86,
  lightness3: 70,
  hue4: 0,
  saturation4: 84,
  lightness4: 60,
  hue5: 0,
  saturation5: 86,
  lightness5: 97, // Lightness has two values
  hue6: 142,
  saturation6: 69,
  lightness6: 58,
  hue7: 217,
  saturation7: 91,
  lightness7: 60,
  hue8: 333,
  saturation8: 71,
  lightness8: 51,
  hue9: 45,
  saturation9: 93,
  lightness9: 47,
  hue10: 173,
  saturation10: 80,
  lightness10: 40,
  hue11: 201,
  saturation11: 94,
  lightness11: 86, // Lightness has two values
  hue12: 26,
  saturation12: 90,
  lightness12: 37,
  hue13: 269,
  saturation13: 97,
  lightness13: 85,
}


