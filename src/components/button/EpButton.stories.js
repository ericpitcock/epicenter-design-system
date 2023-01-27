import vueRouter from 'storybook-vue3-router'
import { centered } from '@/helpers/decorators'
import { iconNames } from '@/components/icon/load-icons'
import EpButton from './EpButton'

iconNames.push(undefined)

export default {
  title: 'Components/Button',
  component: EpButton,
  decorators: [centered],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    outlined: {
      name: 'Outlined',
      control: {
        type: 'boolean'
      }
    },
    kind: {
      name: 'Kind',
      options: [
        'primary',
        'secondary',
        'ghost',
        'danger',
        'warning',
        'success'
      ],
      control: {
        type: 'radio',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          ghost: 'Ghost',
          danger: 'Danger',
          warning: 'Warning',
          success: 'Success'
        }
      }
    },
    size: {
      name: 'Size',
      options: ['default', 'small'],
      control: {
        type: 'radio',
        labels: {
          default: 'Default',
          small: 'Small'
        }
      }
    },
    title: {
      name: 'Title(Tooltip)',
      control: {
        type: 'text'
      }
    },
    to: {
      name: 'to (Router Link Path)',
      control: {
        type: 'text'
      }
    },
    href: {
      name: 'href',
      control: {
        type: 'text'
      }
    },
    label: {
      name: 'Label',
      control: {
        type: 'text'
      }
    },
    iconLeft: {
      name: 'Icon Left',
      control: {
        type: 'object',
        // options: iconNames
      },
      table: {
        category: 'Icon'
      }
    },
    iconRight: {
      name: 'Icon Right',
      control: {
        type: 'object',
        // options: iconNames
      },
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
  methods: {
    onClick() {
      console.log('click')
    }
  },
  template: '<ep-button @click="onClick" v-bind="args" />'
})

export const Button = Template.bind({})

Button.args = {
  disabled: false,
  outlined: false,
  kind: 'primary',
  size: 'default',
  title: 'This is the tooltip',
  to: '',
  href: '',
  label: 'Download',
  iconLeft: undefined,
  iconRight: undefined
}

Button.decorators = [
  vueRouter()
]