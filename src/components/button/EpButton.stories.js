import svgIcons from '@/components/icon/load-icons'
import EpButton from './EpButton'

const icons = svgIcons.map(icon => icon.name)
icons.push(undefined)

export default {
  title: 'Components/Button',
  component: EpButton,
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    outlined: {
      name: 'Outlined',
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
          Naked: 'naked',
          Danger: 'danger',
          Warning: 'warning',
          Success: 'success'
        }
      },
      defaultValue: 'primary'
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
    title: {
      name: 'Title(Tooltip)',
      control: {
        type: 'text'
      },
      defaultValue: 'This is the tooltip'
    },
    to: {
      name: 'to (Router Link Path)',
      control: {
        type: 'text'
      },
      defaultValue: ''
    },
    href: {
      name: 'href',
      control: {
        type: 'text'
      },
      defaultValue: ''
    },
    label: {
      name: 'Label',
      control: {
        type: 'text'
      },
      defaultValue: 'Download'
    },
    iconLeft: {
      name: 'Icon Left',
      control: {
        type: 'select',
        options: icons
      },
      defaultValue: undefined,
      table: {
        category: 'Icon'
      }
    },
    iconRight: {
      name: 'Icon Right',
      control: {
        type: 'select',
        options: icons
      },
      defaultValue: undefined,
      table: {
        category: 'Icon'
      }
    }
  }
}

const Template = (args) => ({
  components: { EpButton },
  setup() {
    return { args }
  },
  template: '<ep-button v-bind="args" />'
})

export const Button = Template.bind({})
