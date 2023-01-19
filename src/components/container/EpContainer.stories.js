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
      control: {
        type: 'select',
        options: [
          'block',
          'inline',
          'inline-block',
          'flex',
          'inline-flex',
          'grid',
          'inline-grid',
          'flow-root'
        ]
      },
      defaultValue: 'block'
    },
    width: {
      name: 'Width',
      control: {
        type: 'text',
      },
      defaultValue: '100%'
    },
    height: {
      name: 'Height',
      control: {
        type: 'text',
      },
      defaultValue: '100%'
    },
    padding: {
      name: 'Padding',
      control: {
        type: 'text',
      },
      defaultValue: ''
    },
    margin: {
      name: 'Margin',
      control: {
        type: 'text',
      },
      defaultValue: '0'
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--background-2)'
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--border-radius--large)'
    },
    borderWidth: {
      name: 'Border Width',
      control: {
        type: 'text',
      },
      defaultValue: '0.1rem'
    },
    borderStyle: {
      name: 'Border Style',
      control: {
        type: 'select',
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
        ]
      },
      defaultValue: 'solid'
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--border-color)'
    },
    overflow: {
      name: 'Overflow',
      control: {
        type: 'select',
        options: [
          'visible',
          'hidden',
          'scroll',
          'auto',
          'overlay',
          'inherit',
          'initial',
          'unset'
        ]
      },
      defaultValue: 'hidden'
    },
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
        <ep-footer>
      </template>
    </ep-container>
  `
})

export const Container = Template.bind({})
