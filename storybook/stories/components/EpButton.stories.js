// import vueRouter from 'storybook-vue3-router'
import { centered } from '../../helpers/decorators.js'
import { colorNames, colorValues } from '../../helpers/colorHelper.js'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons.js'
import EpButton from '@/components/button/EpButton.vue'
// import markdown from '../../../docs/EpButton.md'

// this is undefined
console.log(iconNames)

export default {
  title: 'Components/Button',
  component: EpButton,
  decorators: [centered],
  // parameters: {
  //   docs: {
  //     description: {
  //       component: markdown
  //     }
  //   }
  // },
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
    variant: {
      name: 'Variant',
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
    backgroundHoverColor: {
      name: 'Background Hover Color',
      options: colorNames,
      mapping: colorValues,
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    textHoverColor: {
      name: 'Text Hover Color',
      options: colorNames,
      mapping: colorValues,
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
    title: {
      name: 'Title(Tooltip)',
      control: {
        type: 'text'
      }
    },
    ariaLabel: {
      name: 'Aria Label',
      control: {
        type: 'text'
      }
    },
    tabindex: {
      name: 'Tabindex',
      control: {
        type: 'number'
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
        category: 'Icons'
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
        category: 'Icons'
      }
    },
    backgroundColor: {
      name: 'Background Color',
      options: colorNames,
      mapping: colorValues,
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    borderColor: {
      name: 'Border Color',
      options: colorNames,
      mapping: colorValues,
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    borderRadius: {
      name: 'Border Radius',
      options: ['None', 'var(--border-radius)', 'var(--border-radius--large)'],
      mapping: {
        'None': '0',
        'var(--border-radius)': 'var(--border-radius)',
        'var(--border-radius--large)': 'var(--border-radius--large)'
      },
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    textColor: {
      name: 'Text Color',
      options: ['None', 'var(--text-color)', 'var(--text-color--inverse)'],
      mapping: {
        'None': '',
        'var(--text-color)': 'var(--text-color)',
        'var(--text-color--inverse)': 'var(--text-color--inverse)'
      },
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
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
  label: 'Download the Internet',
  variant: 'primary',
  backgroundHoverColor: '',
  textHoverColor: '',
  outlined: false,
  size: 'large',
  title: 'This is the tooltip',
  ariaLabel: 'This is the aria label',
  tabindex: 0,
  to: '',
  href: '',
  iconLeft: 'none',
  iconRight: 'none',
  backgroundColor: 'None',
  borderColor: 'None',
  borderRadius: 'var(--border-radius)',
  textColor: 'None',
}

// Button.decorators = [
//   vueRouter()
// ]