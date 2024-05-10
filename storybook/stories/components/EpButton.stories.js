import { centered } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '../../helpers/iconHelper.js'
import EpButton from '@/components/button/EpButton.vue'
// import markdown from '../../../docs/EpButton.md'
import { computed } from 'vue'

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
      table: { disable: true }
    },
    ariaLabel: {
      table: { disable: true }
    },
    to: {
      table: { disable: true }
    },
    href: {
      table: { disable: true }
    },
    isMenuItem: {
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
    enabledIcons: {
      name: 'Enable Icons',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Icons'
      }
    },
    iconLeft: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Left',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    iconRight: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Right',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    backgroundColor: {
      name: '--ep-button-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base Styles'
      },
    },
    borderColor: {
      name: '--ep-button-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base Styles'
      },
    },
    textColor: {
      name: '--ep-button-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base Styles'
      },
    },
    hoverBackgroundColor: {
      name: '--ep-button-hover-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover Styles'
      },
    },
    hoverBorderColor: {
      name: '--ep-button-hover-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover Styles'
      },
    },
    hoverTextColor: {
      name: '--ep-button-hover-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover Styles'
      },
    },
    activeBackgroundColor: {
      name: '--ep-button-active-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active Styles'
      },
    },
    activeBorderColor: {
      name: '--ep-button-active-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active Styles'
      },
    },
    activeTextColor: {
      name: '--ep-button-active-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active Styles'
      },
    },
    disabledBackgroundColor: {
      name: '--ep-button-disabled-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled Styles'
      },
    },
    disabledBorderColor: {
      name: '--ep-button-disabled-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled Styles'
      },
    },
    disabledTextColor: {
      name: '--ep-button-disabled-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled Styles'
      },
    },
    styles: {
      table: { disable: true }
    },
  }
}

export const Button = args => ({
  components: { EpButton },
  setup() {
    const styles = computed(() => ({
      '--ep-button-bg-color': args.backgroundColor,
      '--ep-button-border-color': args.borderColor,
      '--ep-button-text-color': args.textColor,
      '--ep-button-hover-bg-color': args.hoverBackgroundColor,
      '--ep-button-hover-border-color': args.hoverBorderColor,
      '--ep-button-hover-text-color': args.hoverTextColor,
      '--ep-button-active-bg-color': args.activeBackgroundColor,
      '--ep-button-active-border-color': args.activeBorderColor,
      '--ep-button-active-text-color': args.activeTextColor,
      '--ep-button-disabled-bg-color': args.disabledBackgroundColor,
      '--ep-button-disabled-border-color': args.disabledBorderColor,
      '--ep-button-disabled-text-color': args.disabledTextColor,
    }))

    const onClick = () => {
      console.log('Button clicked!')
    }

    return { args, styles, onClick }
  },
  template: `
    <ep-button
      v-bind="args"
      :style="styles"
      @click="onClick"
    />
  `
})

Button.args = {
  label: 'Download the Internet',
  size: 'large',
  disabled: false,
  enabledIcons: false,
  iconLeft: 'None',
  iconRight: 'None',
}
