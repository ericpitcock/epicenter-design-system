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
    ...chartSequenceColorArgTypes(14)
  },
}

export const ChartPalette = (args) => ({
  setup() {
    const styles = computed(() => ({
      '--chart-sequence-00': `hsl(${args.hue0}, ${args.saturation0}%, ${args.lightness0}%)`,
      '--chart-sequence-01': `hsl(${args.hue1}, ${args.saturation1}%, ${args.lightness1}%)`,
      '--chart-sequence-02': `hsl(${args.hue2}, ${args.saturation2}%, ${args.lightness2}%)`,
      '--chart-sequence-03': `hsl(${args.hue3}, ${args.saturation3}%, ${args.lightness3}%)`,
      '--chart-sequence-04': `hsl(${args.hue4}, ${args.saturation4}%, ${args.lightness4}%)`,
      '--chart-sequence-05': `hsl(${args.hue5}, ${args.saturation5}%, ${args.lightness5}%)`,
      '--chart-sequence-06': `hsl(${args.hue6}, ${args.saturation6}%, ${args.lightness6}%)`,
      '--chart-sequence-07': `hsl(${args.hue7}, ${args.saturation7}%, ${args.lightness7}%)`,
      '--chart-sequence-08': `hsl(${args.hue8}, ${args.saturation8}%, ${args.lightness8}%)`,
      '--chart-sequence-09': `hsl(${args.hue9}, ${args.saturation9}%, ${args.lightness9}%)`,
      '--chart-sequence-10': `hsl(${args.hue10}, ${args.saturation10}%, ${args.lightness10}%)`,
      '--chart-sequence-11': `hsl(${args.hue11}, ${args.saturation11}%, ${args.lightness11}%)`,
      '--chart-sequence-12': `hsl(${args.hue12}, ${args.saturation12}%, ${args.lightness12}%)`,
      '--chart-sequence-13': `hsl(${args.hue13}, ${args.saturation13}%, ${args.lightness13}%)`,
    }))

    return { args, styles }
  },
  template: `
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-00'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-01'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-02'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-03'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-04'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-05'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-06'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-07'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-08'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-09'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-10'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-11'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-12'] }" />
    <div :style="{ width: '50px', height: '50px', backgroundColor: styles['--chart-sequence-13'] }" />
  `
})

ChartPalette.args = {
  hue0: 220,
  saturation0: 100,
  lightness0: 60,
  hue1: 220,
  saturation1: 100,
  lightness1: 60,
  hue2: 220,
  saturation2: 100,
  lightness2: 60,
  hue3: 220,
  saturation3: 100,
  lightness3: 60,
  hue4: 220,
  saturation4: 100,
  lightness4: 60,
  hue5: 220,
  saturation5: 100,
  lightness5: 60,
  hue6: 220,
  saturation6: 100,
  lightness6: 60,
  hue7: 220,
  saturation7: 100,
  lightness7: 60,
  hue8: 220,
  saturation8: 100,
  lightness8: 60,
  hue9: 220,
  saturation9: 100,
  lightness9: 60,
  hue10: 220,
  saturation10: 100,
  lightness10: 60,
  hue11: 220,
  saturation11: 100,
  lightness11: 60,
  hue12: 220,
  saturation12: 100,
  lightness12: 60,
  hue13: 220,
  saturation13: 100,
  lightness13: 60,
}
