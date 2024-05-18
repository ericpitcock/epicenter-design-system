import { centeredSurface } from '../../helpers/decorators.js'
import { iconOptions } from '../../helpers/iconHelper.js'
import EpBanner from '@/components/banner/EpBanner.vue'
import { ref, computed } from 'vue'

export default {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [centeredSurface],
  argTypes: {
    dissmissable: {
      name: 'Dissmissable',
      control: {
        type: 'boolean'
      }
    },
    iconProps: {
      table: { disable: true }
      // name: 'Icon',
      // options: iconOptions,
      // mapping: iconMapping,
      // control: {
      //   type: 'select'
      // }
    },
    iconName: {
      name: 'Name',
      options: iconOptions,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    },
    iconColor: {
      name: 'Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Icon'
      }
    },
    iconWeight: {
      name: 'Weight',
      options: ['Light', 'Regular', 'Medium', 'Bold'],
      mapping: {
        'Light': 0.5,
        'Regular': 1,
        'Medium': 1.5,
        'Bold': 2,
      },
      control: {
        type: 'radio'
      },
      table: {
        category: 'Icon'
      }
    },
    stripColor: {
      name: '--ep-banner-color-strip-bg',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    backgroundColor: {
      name: '--ep-banner-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    borderColor: {
      name: '--ep-banner-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    textColor: {
      name: '--ep-banner-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    subtextColor: {
      name: '--ep-banner-subtext-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    dismissButtonColor: {
      name: '--ep-banner-dismiss-button-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    dismissButtonHoverBgColor: {
      name: '--ep-banner-dismiss-button-hover-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    dismissButtonHoverTextColor: {
      name: '--ep-banner-dismiss-button-hover-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    dismissButtonActiveBgColor: {
      name: '--ep-banner-dismiss-button-active-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    dismissButtonActiveTextColor: {
      name: '--ep-banner-dismiss-button-active-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    styles: {
      table: { disable: true }
    },
  }
}

export const Banner = args => ({
  components: {
    EpBanner
  },
  setup() {
    const styles = computed(() => ({
      '--ep-banner-color-strip-bg': args.stripColor,
      '--ep-banner-bg-color': args.backgroundColor,
      '--ep-banner-border-color': args.borderColor,
      '--ep-banner-text-color': args.textColor,
      '--ep-banner-subtext-color': args.subtextColor,
      '--ep-banner-dismiss-button-color': args.dismissButtonColor,
      '--ep-banner-dismiss-button-hover-bg-color': args.dismissButtonHoverBgColor,
      '--ep-banner-dismiss-button-hover-text-color': args.dismissButtonHoverTextColor,
      '--ep-banner-dismiss-button-active-bg-color': args.dismissButtonActiveBgColor,
      '--ep-banner-dismiss-button-active-text-color': args.dismissButtonActiveTextColor,
    }))

    const iconProps = computed(() => {
      return {
        name: args.iconName,
        styles: {
          '--ep-icon-color': args.iconColor,
          '--ep-icon-stroke-width': args.iconWeight,
        }
      }
    })

    const showBanner = ref(true)

    const onDismissed = () => {
      showBanner.value = false
      setTimeout(() => {
        showBanner.value = true
      }, 3000)
    }

    return {
      args,
      onDismissed,
      showBanner,
      styles,
      iconProps
    }
  },
  template: `
    <ep-banner
      v-show="showBanner"
      v-bind="args"
      :icon-props="iconProps"
      :style="styles"
      @dismissed="onDismissed"
    >
      <template #message>
        Version 2.0 will end support for JavaDabbles and Interquibbles
      </template>
      <template #subtext>
        Our boss made us do it
      </template>
    </ep-banner>
  `
})

Banner.args = {
  dissmissable: false,
  iconName: 'f-alert-circle',
  iconColor: '#FFC107',
  iconWeight: 'Regular',
  stripColor: '#FFC107',
}