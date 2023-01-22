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
    header: {
      name: 'Header',
      control: {
        type: 'boolean'
      },
      defaultValue: true
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
      },
      defaultValue: 'block'
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      },
      defaultValue: '100%'
    },
    height: {
      name: 'Height',
      control: {
        type: 'text'
      },
      defaultValue: '100%'
    },
    padding: {
      name: 'Padding',
      control: {
        type: 'text'
      },
      defaultValue: ''
    },
    margin: {
      name: 'Margin',
      control: {
        type: 'text'
      },
      defaultValue: '0'
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--background-2)'
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--border-radius--large)'
    },
    borderWidth: {
      name: 'Border Width',
      control: {
        type: 'text'
      },
      defaultValue: '0.1rem'
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
      },
      defaultValue: 'solid'
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--border-color)'
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
      },
      defaultValue: 'visible'
    }
  }
}

const Template = args => ({
  components: {
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return { args }
  },
  template: `
    <ep-container v-bind="args">
      <ep-header v-if="args.header">
        <template #left>
          Header
        </template>
      </ep-header>
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
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Container = Template.bind({})
