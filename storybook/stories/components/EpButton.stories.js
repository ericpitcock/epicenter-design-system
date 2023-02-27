import vueRouter from 'storybook-vue3-router'
import { centered } from '../../helpers/decorators'
import { iconNames } from '@/components/icon/load-icons'
import EpButton from '@/components/button/EpButton'

// add 'none' option to iconNames
iconNames.unshift('none')

// map iconNames to an object with the values as keys and { name: value } as values
const iconNamesMapping = iconNames.reduce((acc, name) => {
  acc[name] = { name }
  return acc
}, {})

iconNamesMapping.none = undefined

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
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    },
    iconRight: {
      name: 'Icon Right',
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    }
  }
}

export const Button = args => ({
  components: { EpButton },
  setup() {
    return { args }
  },
  template: '<ep-button v-bind="args" />'
})

Button.args = {
  disabled: false,
  outlined: false,
  kind: 'primary',
  size: 'default',
  title: 'This is the tooltip',
  to: '',
  href: '',
  label: 'Download',
  iconLeft: 'none',
  iconRight: 'none'
}

Button.decorators = [
  vueRouter()
]