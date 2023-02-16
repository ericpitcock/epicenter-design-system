import vueRouter from 'storybook-vue3-router'
import { centered } from '@/helpers/decorators'
// import { iconNames } from '@/components/icon/load-icons'
import EpButton from '@/components/button/EpButton'

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
      options: ['small', 'default', 'large'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large'
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
      table: { disable: true }
    },
    href: {
      table: { disable: true }
    },
    isActiveMenuItem: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    },
    command: {
      table: { disable: true }
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
        type: 'object'
      },
      table: {
        category: 'Icon'
      }
    },
    iconRight: {
      name: 'Icon Right',
      control: {
        type: 'object'
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