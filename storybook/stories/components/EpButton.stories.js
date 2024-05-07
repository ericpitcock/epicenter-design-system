// import vueRouter from 'storybook-vue3-router'
import { centered } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '@/components/icon/load-icons.js'
import EpButton from '@/components/button/EpButton.vue'
// import markdown from '../../../docs/EpButton.md'
import { ref, watch } from 'vue'

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
    tabindex: {
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
      name: 'Background Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base'
      },
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base'
      },
    },
    textColor: {
      name: 'Text Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base'
      },
    },
    hoverBackgroundColor: {
      name: 'Background Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover'
      },
    },
    hoverBorderColor: {
      name: 'Border Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover'
      },
    },
    hoverTextColor: {
      name: 'Text Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover'
      },
    },
    activeBackgroundColor: {
      name: 'Background Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active'
      },
    },
    activeBorderColor: {
      name: 'Border Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active'
      },
    },
    activeTextColor: {
      name: 'Text Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active'
      },
    },
    disabledBackgroundColor: {
      name: 'Background Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled'
      },
    },
    disabledBorderColor: {
      name: 'Border Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled'
      },
    },
    disabledTextColor: {
      name: 'Text Color',
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
    const styles = ref({
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
    })

    watch(() => args.backgroundColor, (newVal) => {
      styles.value['--ep-button-bg-color'] = newVal
    })

    watch(() => args.borderColor, (newVal) => {
      styles.value['--ep-button-border-color'] = newVal
    })

    watch(() => args.textColor, (newVal) => {
      styles.value['--ep-button-text-color'] = newVal
    })

    watch(() => args.hoverBackgroundColor, (newVal) => {
      styles.value['--ep-button-hover-bg-color'] = newVal
    })

    watch(() => args.hoverBorderColor, (newVal) => {
      styles.value['--ep-button-hover-border-color'] = newVal
    })

    watch(() => args.hoverTextColor, (newVal) => {
      styles.value['--ep-button-hover-text-color'] = newVal
    })

    watch(() => args.activeBackgroundColor, (newVal) => {
      styles.value['--ep-button-active-bg-color'] = newVal
    })

    watch(() => args.activeBorderColor, (newVal) => {
      styles.value['--ep-button-active-border-color'] = newVal
    })

    watch(() => args.activeTextColor, (newVal) => {
      styles.value['--ep-button-active-text-color'] = newVal
    })

    watch(() => args.disabledBackgroundColor, (newVal) => {
      styles.value['--ep-button-disabled-bg-color'] = newVal
    })

    watch(() => args.disabledBorderColor, (newVal) => {
      styles.value['--ep-button-disabled-border-color'] = newVal
    })

    watch(() => args.disabledTextColor, (newVal) => {
      styles.value['--ep-button-disabled-text-color'] = newVal
    })

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
  ariaLabel: 'This is the aria label',
  tabindex: 0,
  to: '',
  href: '',
  iconLeft: 'None',
  iconRight: 'None',
}

// Button.decorators = [
//   vueRouter()
// ]