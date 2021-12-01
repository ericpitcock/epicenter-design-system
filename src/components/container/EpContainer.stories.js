import EpContainer from '@/components/container/EpContainer'

const container = () => {
  return {
    template:
      '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Container',
  component: EpContainer,
  decorators: [container],
  argTypes: {
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
      defaultValue: '0'
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
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--border-color)'
    }
  }
}

const Template = (args) => ({
  components: { EpContainer },
  setup() {
    return { args }
  },
  template: '<ep-container v-bind="args" />'
})

export const Container = Template.bind({})
