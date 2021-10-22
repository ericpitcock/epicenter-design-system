import svgIcons from '@/style/icons/load-icons'
import EpButton from './EpButton'

const container = () => {
  return {
    template:
      '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
  }
}

const icons = svgIcons.map(icon => icon.name.slice(2, -4))
icons.push(undefined)

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
      name: 'Kind',
      control: {
        type: 'radio',
        options: {
          Primary: 'primary',
          Secondary: 'secondary',
          Naked: 'naked'
        }
      },
      defaultValue: 'primary'
    },
    element: {
      name: 'Element',
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
      name: 'Size',
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
      name: 'Label',
      control: {
        type: 'text'
      },
      defaultValue: 'Download'
    },
    icon: {
      name: 'Icon Source',
      control: {
        type: 'select',
        options: icons
      },
      defaultValue: undefined,
      table: {
        category: 'Icon'
      }
    },
    iconAlignment: {
      name: 'Icon Alignment',
      control: {
        type: 'radio',
        options: {
          Left: 'left',
          Right: 'right'
        }
      },
      defaultValue: 'left',
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
    :size="size"
    :label="label"
    :icon="icon"
    :iconAlignment="iconAlignment"
    :disabled="disabled"
    :to="'/fart'"
  />
  `
})

export const Button = Template.bind({})
// Button.args = {
//   labelText: 'Button Text'
// }
