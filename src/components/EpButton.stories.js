import svgIcons from './EpIcon/load-icons'
import EpButton from './EpButton'

const container = () => {
  return {
    template: '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
  }
}

const icons = svgIcons.map(icon => icon.name.slice(2, -4))

export default {
  title: 'Components/Button',
  component: EpButton,
  decorators: [container],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    kind: {
      name: 'Button Kind',
      control: {
        type: 'radio',
        options: {
          Primary: 'primary',
          Secondary: 'secondary',
          Tertiary: 'tertiary',
          Naked: 'naked',
          Danger: 'danger',
          Warning: 'warning',
          Success: 'success'
        },
      },
      defaultValue: 'primary'
    },
    element: {
      name: 'HTML Element',
      control: {
        type: 'radio',
        options: {
          Button: 'button',
          Link: 'a'
        }
      },
      defaultValue: 'button'
    },
    size: {
      name: 'Button Size',
      control: {
        type: 'radio',
        options: {
          Default: 'default',
          Small: 'small'
        }
      },
      defaultValue: 'default'
    },
    label: {
      name: 'Use Button Label',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    labelText: {
      name: 'Button Label',
      control: {
        type: 'text'
      },
      defaultValue: 'Download'
    },
    icon: {
      name: 'Use Icon',
      control: {
        type: 'boolean'
      },
      defaultValue: false,
      table: {
        category: 'Icon'
      }
    },
    iconSource: {
      name: 'Icon Source',
      control: {
        type: 'select',
        options: icons
      },
      defaultValue: 'refresh',
      table: {
        category: 'Icon'
      }
    },
    iconAlignRight: {
      name: 'Align Icon Right',
      control: {
        type: 'boolean'
      },
      defaultValue: false,
      table: {
        category: 'Icon'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpButton },
  props: Object.keys(argTypes),
  template: `
  <EpButton
    :kind="kind"
    :element="element"
    :size="size"
    :label="label"
    :labelText="labelText"
    :icon="icon"
    :iconSource="iconSource"
    :iconAlignRight="iconAlignRight"
    :disabled="disabled"
  />
  `
})

export const Button = Template.bind({})
// Button.args = {
//   labelText: 'Button Text'
// }
