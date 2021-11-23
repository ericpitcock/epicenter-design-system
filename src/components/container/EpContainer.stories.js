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
    },
    flexDirection: {
      name: 'Flex Direction',
      control: {
        type: 'select',
        options: [
          'row',
          'row-reverse',
          'column',
          'column-reverse'
        ]
      },
      defaultValue: 'row',
      table: {
        category: 'Flexbox'
      }
    },
    flexWrap: {
      name: 'Flex Wrap',
      control: {
        type: 'select',
        options: [
          'nowrap',
          'wrap',
          'wrap-reverse'
        ]
      },
      defaultValue: 'nowrap',
      table: {
        category: 'Flexbox'
      }
    },
    justifyContent: {
      name: 'Justify Content',
      control: {
        type: 'select',
        options: [
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'stretch',
          'start',
          'end'
        ]
      },
      defaultValue: 'flex-start',
      table: {
        category: 'Flexbox'
      }
    },
    alignItems: {
      name: 'Align Items',
      control: {
        type: 'select',
        options: [
          'flex-start',
          'flex-end',
          'center',
          'baseline',
          'stretch'
        ]
      },
      defaultValue: 'flex-start',
      table: {
        category: 'Flexbox'
      }
    },
    alignContent: {
      name: 'Align Content',
      control: {
        type: 'select',
        options: [
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'stretch'
        ]
      },
      defaultValue: 'flex-start',
      table: {
        category: 'Flexbox'
      }
    },
    gap: {
      name: 'Gap',
      control: {
        type: 'text',
      },
      defaultValue: '0',
      table: {
        category: 'Flexbox'
      }
    }
  }
}

const Template = (args) => ({
  components: { EpContainer },
  setup() {
    return { args }
  },
  template: `
  <ep-container v-bind="args">
    <div
      v-for="n of 8"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border: 1px solid var(--border-color)
      ">
      {{ n }}
    </div>
  </ep-container>
  `
})

export const Container = Template.bind({})
