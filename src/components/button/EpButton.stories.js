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
      },
      defaultValue: 'primary'
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
        type: 'object',
        // options: iconNames
      },
      defaultValue: undefined,
      table: {
        category: 'Icon'
      }
    },
    // iconLeftColor: {
    //   name: 'Icon Left Color',
    //   control: {
    //     type: 'color'
    //   },
    //   defaultValue: undefined
    // },
    iconRight: {
      name: 'Icon Right',
      control: {
        type: 'object',
        // options: iconNames
      },
      defaultValue: undefined,
      table: {
        category: 'Icon'
      }
    },
    // iconRightColor: {
    //   name: 'Icon Right Color',
    //   control: {
    //     type: 'color'
    //   },
    //   defaultValue: undefined
    // }
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

Button.decorators = [
  vueRouter()
]