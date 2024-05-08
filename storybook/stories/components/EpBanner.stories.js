import { centeredSurface } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '@/components/icon/load-icons.js'
import EpBanner from '@/components/banner/EpBanner.vue'
import { computed } from 'vue'

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
      name: 'Icon',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
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

    return { args, styles }
  },
  template: `
    <ep-banner
      v-bind="args"
      :style="styles"
      @dismissed="console.log('Banner dismissed!')"
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
  iconProps: { name: 'f-alert-triangle' },
  stripColor: '#FFC107',
}