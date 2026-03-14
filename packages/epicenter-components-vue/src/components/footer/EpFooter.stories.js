import { paddedBg } from '@sb/helpers/decorators.js'
import { computed } from 'vue'

import EpFooter from '@/components/footer/EpFooter.vue'

export default {
  title: 'Components/Container/Footer',
  component: EpFooter,
  decorators: [paddedBg],
  argTypes: {
    sticky: {
      name: '--ep-footer-container-position: sticky',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Container'
      },
    },
    stickyBottom: {
      name: '--ep-footer-container-bottom',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    width: {
      name: '--ep-footer-container-width',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    height: {
      name: '--ep-footer-container-height',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    padding: {
      name: '--ep-footer-container-padding',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    margin: {
      name: '--ep-footer-container-margin',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    backgroundColor: {
      name: '--ep-footer-container-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Container'
      },
    },
    borderRadius: {
      name: '--ep-footer-container-border-radius',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    borderWidth: {
      name: '--ep-footer-container-border-width',
      control: {
        type: 'text'
      },
      table: {
        category: 'Container'
      },
    },
    borderStyle: {
      name: '--ep-footer-container-border-style',
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
      name: '--ep-footer-container-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Container'
      },
    },
    shadowed: {
      name: '--ep-footer-container-box-shadow',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Container'
      },
    },
    overflow: {
      name: '--ep-footer-container-overflow',
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
  }
}

export const Footer = args => ({
  components: { EpFooter },
  setup() {
    const styles = computed(() => ({
      '--ep-footer-container-position': args.sticky ? 'sticky' : 'relative',
      '--ep-footer-container-bottom': args.sticky ? args.stickyBottom : 'auto',
      '--ep-footer-container-width': args.width,
      '--ep-footer-container-height': args.height,
      '--ep-footer-container-padding': args.padding,
      '--ep-footer-container-margin': args.margin,
      '--ep-footer-container-bg-color': args.backgroundColor,
      '--ep-footer-container-border-radius': args.borderRadius,
      '--ep-footer-container-border-width': args.borderWidth,
      '--ep-footer-container-border-style': args.borderStyle,
      '--ep-footer-container-border-color': args.borderColor,
      '--ep-footer-container-box-shadow': args.shadowed ? '0 -2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      // '--ep-footer-container-z-index':
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