import { EpHeader } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { paddedBg } from '@sb/helpers/decorators.js'
import { computed } from 'vue'

export default {
  title: 'Components/Container/Header',
  component: EpHeader,
  decorators: [withCssProps('header', { except: ['--ep-header-border-color', '--ep-header-border-radius', '--ep-header-border-style', '--ep-header-border-width', '--ep-header-center-flex', '--ep-header-center-gap', '--ep-header-center-padding', '--ep-header-height', '--ep-header-left-flex', '--ep-header-left-gap', '--ep-header-left-padding', '--ep-header-margin', '--ep-header-overflow', '--ep-header-padding', '--ep-header-right-flex', '--ep-header-right-gap', '--ep-header-right-padding', '--ep-header-width'] }), paddedBg],
  argTypes: {
    sticky: {
      name: '--ep-header-position: sticky',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Container'
      },
    },
    stickyTop: {
      name: '--ep-header-top',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    width: {
      name: '--ep-header-width',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    height: {
      name: '--ep-header-height',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    padding: {
      name: '--ep-header-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    margin: {
      name: '--ep-header-margin',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    backgroundColor: {
      name: '--ep-header-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Container'
      },
    },
    borderRadius: {
      name: '--ep-header-border-radius',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    borderWidth: {
      name: '--ep-header-border-width',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    borderStyle: {
      name: '--ep-header-border-style',
      options: [
        'solid',
        'dotted',
        'dashed',
      ],
      control: {
        type: 'select'
      },
      table: {
        category: 'Container'
      },
    },
    borderColor: {
      name: '--ep-header-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Container'
      },
    },
    shadowed: {
      name: '--ep-header-shadow',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Container'
      },
    },
    overflow: {
      name: '--ep-header-overflow',
      options: [
        'visible',
        'hidden',
        'scroll',
        'auto',
      ],
      control: {
        type: 'select'
      },
      table: {
        category: 'Container'
      },
    },
    itemGap: {
      name: '--ep-header-content-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    leftFlex: {
      name: '--ep-header-left-flex',
      control: {
        type: 'text'
      },
      table: {
        category: 'Left Section'
      },
    },
    leftGap: {
      name: '--ep-header-left-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Left Section'
      },
    },
    leftJustify: {
      name: '--ep-header-left-justify-content',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: {
        type: 'select'
      },
      table: {
        category: 'Left Section'
      },
    },
    leftPadding: {
      name: '--ep-header-left-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Left Section'
      },
    },
    centerFlex: {
      name: '--ep-header-center-flex',
      control: {
        type: 'text'
      },
      table: {
        category: 'Center Section'
      },
    },
    centerGap: {
      name: '--ep-header-center-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Center Section'
      },
    },
    centerJustify: {
      name: '--ep-header-center-justify-content',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: {
        type: 'select'
      },
      table: {
        category: 'Center Section'
      },
    },
    centerPadding: {
      name: '--ep-header-center-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Center Section'
      },
    },
    rightFlex: {
      name: '--ep-header-right-flex',
      control: {
        type: 'text'
      },
      table: {
        category: 'Right Section'
      },
    },
    rightGap: {
      name: '--ep-header-right-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Right Section'
      },
    },
    rightJustify: {
      name: '--ep-header-right-justify-content',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: {
        type: 'select'
      },
      table: {
        category: 'Right Section'
      },
    },
    rightPadding: {
      name: '--ep-header-right-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Right Section'
      },
    },
    styles: { table: { disable: true } },
  
    ...cssPropArgTypes('header', { except: ['--ep-header-border-color', '--ep-header-border-radius', '--ep-header-border-style', '--ep-header-border-width', '--ep-header-center-flex', '--ep-header-center-gap', '--ep-header-center-padding', '--ep-header-height', '--ep-header-left-flex', '--ep-header-left-gap', '--ep-header-left-padding', '--ep-header-margin', '--ep-header-overflow', '--ep-header-padding', '--ep-header-right-flex', '--ep-header-right-gap', '--ep-header-right-padding', '--ep-header-width'] }),
  }
}

export const Header = args => ({
  components: { EpHeader },
  setup() {
    const styles = computed(() => ({
      '--ep-header-position': args.sticky ? 'sticky' : 'relative',
      '--ep-header-top': args.sticky ? args.stickyTop : 'auto',
      '--ep-header-width': args.width,
      '--ep-header-height': args.height,
      '--ep-header-padding': args.padding,
      '--ep-header-margin': args.margin,
      '--ep-header-bg-color': args.backgroundColor,
      '--ep-header-border-radius': args.borderRadius,
      '--ep-header-border-width': args.borderWidth,
      '--ep-header-border-style': args.borderStyle,
      '--ep-header-border-color': args.borderColor,
      '--ep-header-shadow': args.shadowed ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      // '--ep-header-z-index':
      '--ep-header-content-gap': args.itemGap,
      '--ep-header-left-flex': args.leftFlex,
      '--ep-header-left-gap': args.leftGap,
      '--ep-header-left-justify-content': args.leftJustify,
      '--ep-header-left-padding': args.leftPadding,
      '--ep-header-center-flex': args.centerFlex,
      '--ep-header-center-gap': args.centerGap,
      '--ep-header-center-justify-content': args.centerJustify,
      '--ep-header-center-padding': args.centerPadding,
      '--ep-header-right-flex': args.rightFlex,
      '--ep-header-right-gap': args.rightGap,
      '--ep-header-right-justify-content': args.rightJustify,
      '--ep-header-right-padding': args.rightPadding,
    }))

    return { args, styles }
  },
  template: `
    <ep-header
      v-bind="args"
      :style="styles"
    >
      <template #left>
        <div style="display: grid; place-content: center; width: 150px; height: 100%; border: 1px dashed skyblue;">Left Item</div>
      </template>
      <template #center>
        <div style="display: grid; place-content: center; width: 100%; height: 100%; border: 1px dashed skyblue;">Center Item</div>
      </template>
      <template #right>
        <div style="display: grid; place-content: center; width: 125px; height: 100%; border: 1px dashed skyblue;">Right Item</div>
        <div style="display: grid; place-content: center; width: 125px; height: 100%; border: 1px dashed skyblue;">Right Item</div>
        <div style="display: grid; place-content: center; width: 125px; height: 100%; border: 1px dashed skyblue;">Right Item</div>
      </template>
    </ep-header>
  `
})
Header.args = {
  width: '100%',
  height: '6.1rem',
  padding: '1rem',
  margin: '0',
  backgroundColor: 'transparent',
  borderRadius: '0',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  overflow: 'hidden',
  itemGap: '3rem',
  leftFlex: '1',
  leftGap: '3rem',
  leftJustify: 'flex-start',
  leftPadding: '0',
  centerFlex: '1',
  centerGap: '3rem',
  centerJustify: 'center',
  centerPadding: '0',
  rightFlex: '1',
  rightGap: '3rem',
  rightJustify: 'flex-end',
  rightPadding: '0',
  sticky: false,
  stickyTop: '0',
  shadowed: false,
}