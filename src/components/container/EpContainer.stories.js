import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from './EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'

const container = () => {
  return {
    template:
      '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Container',
  component: EpContainer,
  decorators: [container],
  argTypes: {
    useHeader: {
      name: 'Header',
      control: {
        type: 'boolean'
      }
    },
    useFooter: {
      name: 'Footer',
      control: {
        type: 'boolean'
      }
    },
    calculateHeight: {
      table: {
        disable: true
      }
    },
    calculateHeightOffset: {
      table: {
        disable: true
      }
    },
    display: {
      name: 'Display',
      options: [
        'block',
        'inline',
        'inline-block',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'flow-root'
      ],
      control: {
        type: 'select',
        labels: {
          block: 'Block',
          inline: 'Inline',
          'inline-block': 'Inline Block',
          flex: 'Flex',
          'inline-flex': 'Inline Flex',
          grid: 'Grid',
          'inline-grid': 'Inline Grid',
          'flow-root': 'Flow Root'
        }
      }
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    maxWidth: {
      name: 'Max Width',
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
        'none',
        'hidden',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'initial',
        'inherit'
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
          hidden: 'Hidden',
          dotted: 'Dotted',
          dashed: 'Dashed',
          solid: 'Solid',
          double: 'Double',
          groove: 'Groove',
          ridge: 'Ridge',
          inset: 'Inset',
          outset: 'Outset',
          initial: 'Initial',
          inherit: 'Inherit'
        }
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
        'overlay',
        'inherit',
        'initial',
        'unset'
      ],
      control: {
        type: 'select',
        labels: {
          visible: 'Visible',
          hidden: 'Hidden',
          scroll: 'Scroll',
          auto: 'Auto',
          overlay: 'Overlay',
          inherit: 'Inherit',
          initial: 'Initial',
          unset: 'Unset'
        }
      }
    }
  }
}

const Template = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
    <ep-container v-bind="args">
      <template #header>
        <ep-header v-if="args.useHeader">
          <template #left>
            Header
          </template>
          <template #right>
            <ep-action-bar v-bind="commonActionBarArgs" />
          </template>
        </ep-header>
      </template>
      <template #default>
      <div
        v-if="args.padding != '' && args.padding != undefined"
        style="
          height: 100%;
          display: grid;
          place-content: center;
          border: 1px dashed var(--green-400)
        "
      >
        Inner content
      </div>
      </template>
      <template #footer>
        <ep-footer v-if="args.useFooter" />
      </template>
    </ep-container>
  `
})

export const Container = Template.bind({})

Container.args = {
  useHeader: true,
  useFooter: true,
  display: 'block',
  width: '100%',
  maxWidth: '120rem',
  height: '100%',
  padding: '',
  margin: '0',
  backgroundColor: 'var(--background-2)',
  borderRadius: 'var(--border-radius--large)',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  overflow: 'hidden'
}
