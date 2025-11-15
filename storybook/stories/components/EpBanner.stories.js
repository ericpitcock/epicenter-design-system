import { computed, ref, toRef } from 'vue'

import EpBanner from '@/components/banner/EpBanner.vue'

import { centeredSurface } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

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
    enabledIcons: {
      name: 'Use Icon',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Icon'
      }
    },
    iconName: {
      if: { arg: 'enabledIcons' },
      name: 'Name',
      options: componentNames,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icon'
      }
    },
    iconSize: {
      if: { arg: 'enabledIcons' },
      name: 'Size',
      control: {
        type: 'range',
        min: 12,
        max: 128,
        step: 4
      },
      table: {
        category: 'Icon'
      }
    },
    iconColor: {
      if: { arg: 'enabledIcons' },
      name: 'Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Icon'
      }
    },
    iconWeight: {
      if: { arg: 'enabledIcons' },
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
    // events
    dismissed: {
      table: { disable: true }
    },
    // slots
    icon: {
      table: { disable: true }
    },
    message: {
      table: { disable: true }
    },
    subtext: {
      table: { disable: true }
    },
    dismiss: {
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

    const iconStyles = computed(() => ({
      '--ep-icon-width': args.iconSize + 'px',
      '--ep-icon-height': args.iconSize + 'px',
      '--ep-icon-color': args.iconColor,
      '--ep-icon-stroke-width': args.iconWeight,
    }))

    const { iconLeftComponent } = useIcons(
      toRef(args, 'iconName'),
    )

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
      iconLeftComponent,
      iconStyles,
    }
  },
  template: `
    <ep-banner
      v-show="showBanner"
      v-bind="args"
      :style="styles"
      @dismissed="onDismissed"
    >
      <template
        v-if="args.enabledIcons && args.iconName != 'None'"
        #icon
      >
        <component :is="iconLeftComponent" :style="iconStyles" />
      </template>
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
  enabledIcons: false,
  iconName: 'None',
  iconSize: 32,
  iconColor: '#FFC107',
  iconWeight: 'Regular',
  stripColor: '#FFC107',
}