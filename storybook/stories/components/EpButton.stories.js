// import vueRouter from 'storybook-vue3-router'
import { centered } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '@/components/icon/load-icons.js'
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
    outlined: {
      name: 'Outlined',
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
      name: 'Title(Tooltip)',
      control: {
        type: 'text'
      }
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
        category: 'Base'
      },
    },
    borderColor: {
      name: '--ep-button-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base'
      },
    },
    textColor: {
      name: '--ep-button-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base'
      },
    },
    hoverBackgroundColor: {
      name: '--ep-button-hover-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover'
      },
    },
    hoverBorderColor: {
      name: '--ep-button-hover-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover'
      },
    },
    hoverTextColor: {
      name: '--ep-button-hover-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover'
      },
    },
    activeBackgroundColor: {
      name: '--ep-button-active-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active'
      },
    },
    activeBorderColor: {
      name: '--ep-button-active-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active'
      },
    },
    activeTextColor: {
      name: '--ep-button-active-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active'
      },
    },
    disabledBackgroundColor: {
      name: '--ep-button-disabled-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled'
      },
    },
    disabledBorderColor: {
      name: '--ep-button-disabled-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled'
      },
    },
    disabledTextColor: {
      name: '--ep-button-disabled-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled'
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

    return { args, styles }
  },
  template: `
    <ep-button v-bind="args" :style="styles" />
  `
})

Button.args = {
  disabled: false,
  label: 'Download the Internet',
  outlined: false,
  size: 'large',
  title: 'This is the tooltip',
  ariaLabel: 'This is a button in Storybook',
  iconLeft: 'None',
  iconRight: 'None',
}

// Button.decorators = [
//   vueRouter()
// ]