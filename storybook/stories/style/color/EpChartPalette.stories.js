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
      // '--chart-sequence-00': `hsl(${args.hue0}, ${args.saturation0}%, ${args.lightness0}%)`,
      // '--chart-sequence-01': `hsl(${args.hue1}, ${args.saturation1}%, ${args.lightness1}%)`,
      // '--chart-sequence-02': `hsl(${args.hue2}, ${args.saturation2}%, ${args.lightness2}%)`,
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
    <div v-for="i in 14" :key="i" :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-' + (i < 10 ? '0' + i : i)] }" />
  `
})

ChartPalette.args = {
  globalHue: 0,
  globalSaturation: 0,
  globalLightness: 0,
  hue0: 220,
  saturation0: 100,
  lightness0: 50,
  hue1: 260,
  saturation1: 100,
  lightness1: 60,
  hue2: 300,
  saturation2: 100,
  lightness2: 70,
  hue3: 340,
  saturation3: 100,
  lightness3: 80,
  hue4: 20,
  saturation4: 100,
  lightness4: 90,
  hue5: 60,
  saturation5: 100,
  lightness5: 40,
  hue6: 100,
  saturation6: 100,
  lightness6: 30,
  hue7: 140,
  saturation7: 100,
  lightness7: 20,
  hue8: 180,
  saturation8: 100,
  lightness8: 10,
  hue9: 200,
  saturation9: 100,
  lightness9: 45,
  hue10: 240,
  saturation10: 100,
  lightness10: 55,
  hue11: 280,
  saturation11: 100,
  lightness11: 65,
  hue12: 320,
  saturation12: 100,
  lightness12: 75,
  hue13: 0,
  saturation13: 100,
  lightness13: 85,
}


