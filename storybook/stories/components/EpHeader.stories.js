import { padded } from '../../helpers/decorators.js'
import EpHeader from '@/components/header/EpHeader.vue'

export default {
  title: 'Components/Container/Header',
  component: EpHeader,
  decorators: [padded],
  argTypes: {
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    height: {
      name: 'Height',
      control: {
        type: 'text'
      }
    },
    padding: {
      name: 'Padding',
      control: {
        type: 'text'
      }
    },
    margin: {
      name: 'Margin',
      control: {
        type: 'text'
      }
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text'
      }
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      }
    },
    borderWidth: {
      name: 'Border Width',
      control: {
        type: 'text'
      }
    },
    borderStyle: {
      name: 'Border Style',
      options: [
        'solid',
        'dotted',
        'dashed',
      ],
      control: {
        type: 'select'
      }
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text'
      }
    },
    overflow: {
      name: 'Overflow',
      options: [
        'visible',
        'hidden',
        'scroll',
        'auto',
      ],
      control: {
        type: 'select'
      }
    },
    itemGap: {
      name: 'Item Gap',
      control: {
        type: 'text'
      }
    },
    leftFlex: {
      name: 'Left Flex',
      control: {
        type: 'text'
      }
    },
    leftGap: {
      name: 'Left Gap',
      control: {
        type: 'text'
      }
    },
    leftJustify: {
      name: 'Left Justify',
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
      }
    },
    leftPadding: {
      name: 'Left Padding',
      control: {
        type: 'text'
      }
    },
    centerFlex: {
      name: 'Center Flex',
      control: {
        type: 'text'
      }
    },
    centerGap: {
      name: 'Center Gap',
      control: {
        type: 'text'
      }
    },
    centerJustify: {
      name: 'Center Justify',
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
      }
    },
    centerPadding: {
      name: 'Center Padding',
      control: {
        type: 'text'
      }
    },
    rightFlex: {
      name: 'Right Flex',
      control: {
        type: 'text'
      }
    },
    rightGap: {
      name: 'Right Gap',
      control: {
        type: 'text'
      }
    },
    rightJustify: {
      name: 'Right Justify',
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
      }
    },
    rightPadding: {
      name: 'Right Padding',
      control: {
        type: 'text'
      }
    },
    sticky: {
      name: 'Sticky',
      control: {
        type: 'boolean'
      }
    },
    stickyTop: {
      name: 'Sticky Top',
      control: {
        type: 'text'
      }
    },
    zIndex: {
      name: 'Z Index',
      control: {
        type: 'text'
      }
    },
    shadowed: {
      name: 'Shadowed',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const Header = args => ({
  components: { EpHeader },
  setup() {
    return { args }
  },
  template: `
    <ep-header v-bind="args">
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
  borderRadius: 'var(--border-radius--large)',
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
  zIndex: '1',
  shadowed: false,
}