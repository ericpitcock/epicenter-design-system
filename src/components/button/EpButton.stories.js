import svgIcons from '@/style/icons/load-icons'
import EpButton from './EpButton'

const container = () => {
  return {
    template:
      '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
  }
}

const icons = svgIcons.map(icon => icon.name)
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
    // element: {
    //   name: 'Element',
    //   control: {
    //     type: 'radio',
    //     options: {
    //       Button: 'button',
    //       Link: 'a'
    //     }
    //   },
    //   defaultValue: 'button'
    // },
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
  template: '<ep-button v-bind="$props" />'
})

export const Button = Template.bind({})
