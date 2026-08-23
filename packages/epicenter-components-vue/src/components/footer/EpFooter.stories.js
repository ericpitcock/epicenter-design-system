import { EpFooter } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { paddedBg } from '@sb/helpers/decorators.js'
import { computed } from 'vue'

export default {
  title: 'Components/Container/Footer',
  component: EpFooter,
  decorators: [withCssProps('footer', { except: ['--ep-footer-border-color', '--ep-footer-border-radius', '--ep-footer-border-style', '--ep-footer-border-width', '--ep-footer-center-flex', '--ep-footer-center-gap', '--ep-footer-center-padding', '--ep-footer-height', '--ep-footer-left-flex', '--ep-footer-left-gap', '--ep-footer-left-padding', '--ep-footer-margin', '--ep-footer-overflow', '--ep-footer-padding', '--ep-footer-right-flex', '--ep-footer-right-gap', '--ep-footer-right-padding', '--ep-footer-width'] }), paddedBg],
  argTypes: {
    sticky: {
      name: '--ep-footer-position: sticky',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Container'
      },
    },
    stickyBottom: {
      name: '--ep-footer-bottom',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    width: {
      name: '--ep-footer-width',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    height: {
      name: '--ep-footer-height',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    padding: {
      name: '--ep-footer-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    margin: {
      name: '--ep-footer-margin',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    backgroundColor: {
      name: '--ep-footer-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Container'
      },
    },
    borderRadius: {
      name: '--ep-footer-border-radius',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    borderWidth: {
      name: '--ep-footer-border-width',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    borderStyle: {
      name: '--ep-footer-border-style',
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
      name: '--ep-footer-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Container'
      },
    },
    shadowed: {
      name: '--ep-footer-shadow',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Container'
      },
    },
    overflow: {
      name: '--ep-footer-overflow',
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
      name: '--ep-footer-content-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    leftFlex: {
      name: '--ep-footer-left-flex',
      control: {
        type: 'text'
      },
      table: {
        category: 'Left Section'
      },
    },
    leftGap: {
      name: '--ep-footer-left-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Left Section'
      },
    },
    leftJustify: {
      name: '--ep-footer-left-justify-content',
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
      name: '--ep-footer-left-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Left Section'
      },
    },
    centerFlex: {
      name: '--ep-footer-center-flex',
      control: {
        type: 'text'
      },
      table: {
        category: 'Center Section'
      },
    },
    centerGap: {
      name: '--ep-footer-center-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Center Section'
      },
    },
    centerJustify: {
      name: '--ep-footer-center-justify-content',
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
      name: '--ep-footer-center-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Center Section'
      },
    },
    rightFlex: {
      name: '--ep-footer-right-flex',
      control: {
        type: 'text'
      },
      table: {
        category: 'Right Section'
      },
    },
    rightGap: {
      name: '--ep-footer-right-gap',
      control: {
        type: 'text'
      },
      table: {
        category: 'Right Section'
      },
    },
    rightJustify: {
      name: '--ep-footer-right-justify-content',
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
      name: '--ep-footer-right-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Right Section'
      },
    },
    styles: { table: { disable: true } },
  
    ...cssPropArgTypes('footer', { except: ['--ep-footer-border-color', '--ep-footer-border-radius', '--ep-footer-border-style', '--ep-footer-border-width', '--ep-footer-center-flex', '--ep-footer-center-gap', '--ep-footer-center-padding', '--ep-footer-height', '--ep-footer-left-flex', '--ep-footer-left-gap', '--ep-footer-left-padding', '--ep-footer-margin', '--ep-footer-overflow', '--ep-footer-padding', '--ep-footer-right-flex', '--ep-footer-right-gap', '--ep-footer-right-padding', '--ep-footer-width'] }),
  }
}

export const Footer = args => ({
  components: { EpFooter },
  setup() {
    const styles = computed(() => ({
      '--ep-footer-position': args.sticky ? 'sticky' : 'relative',
      '--ep-footer-bottom': args.sticky ? args.stickyBottom : 'auto',
      '--ep-footer-width': args.width,
      '--ep-footer-height': args.height,
      '--ep-footer-padding': args.padding,
      '--ep-footer-margin': args.margin,
      '--ep-footer-bg-color': args.backgroundColor,
      '--ep-footer-border-radius': args.borderRadius,
      '--ep-footer-border-width': args.borderWidth,
      '--ep-footer-border-style': args.borderStyle,
      '--ep-footer-border-color': args.borderColor,
      '--ep-footer-shadow': args.shadowed ? '0 -2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      // '--ep-footer-z-index':
      '--ep-footer-content-gap': args.itemGap,
      '--ep-footer-left-flex': args.leftFlex,
      '--ep-footer-left-gap': args.leftGap,
      '--ep-footer-left-justify-content': args.leftJustify,
      '--ep-footer-left-padding': args.leftPadding,
      '--ep-footer-center-flex': args.centerFlex,
      '--ep-footer-center-gap': args.centerGap,
      '--ep-footer-center-justify-content': args.centerJustify,
      '--ep-footer-center-padding': args.centerPadding,
      '--ep-footer-right-flex': args.rightFlex,
      '--ep-footer-right-gap': args.rightGap,
      '--ep-footer-right-justify-content': args.rightJustify,
      '--ep-footer-right-padding': args.rightPadding,
    }))

    return { args, styles }
  },
  template: `
    <ep-footer
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
    </ep-footer>
  `
})
Footer.args = {
  width: '100%',
  height: '5.1rem',
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
  stickyBottom: '0',
  shadowed: false,
}