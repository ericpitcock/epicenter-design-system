import { EpBanner, EpButton } from '@ericpitcock/epicenter-components-vue'
import Cancel01 from '@ericpitcock/epicenter-icons-vue/Cancel01'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'
import { componentNames, useIcons } from '@sb/helpers/useIcons.js'
import { computed, ref, toRef } from 'vue'

export default {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [withCssProps('banner'), centeredSurface],
  argTypes: {
    dismissable: {
      name: 'Dismissable',
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
      options: ['Light', 'Regular', 'Medium', 'Bold', 'Custom'],
      control: {
        type: 'radio'
      },
      table: {
        category: 'Icon'
      }
    },
    // custom icon weight
    iconWeightCustom: {
      if: { arg: 'iconWeight', eq: 'Custom' },
      name: 'Custom Weight',
      control: {
        type: 'range',
        min: 0.5,
        max: 4,
        step: 0.1
      },
      table: {
        category: 'Icon'
      }
    },
    ...cssPropArgTypes('banner'),
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
    Cancel01,
    EpBanner,
    EpButton
  },
  setup() {
    const strokeWidths = {
      Light: 0.5,
      Regular: 1,
      Medium: 1.5,
      Bold: 2
    }

    const iconStyles = computed(() => ({
      '--ep-icon-width': args.iconSize + 'px',
      '--ep-icon-height': args.iconSize + 'px',
      '--ep-icon-text-color': args.iconColor,
      '--ep-icon-stroke-width': args.iconWeight === 'Custom'
        ? args.iconWeightCustom
        : strokeWidths[args.iconWeight]
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
      iconLeftComponent,
      iconStyles,
    }
  },
  template: `
    <ep-banner
      v-show="showBanner"
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
      <template
        v-if="args.dismissable"
        #dismiss="{ dismissBanner }"
      >
        <ep-button
          aria-label="Dismiss"
          @click="dismissBanner"
        >
          <template #icon-left>
            <cancel-01 />
          </template>
        </ep-button>
      </template>
    </ep-banner>
  `
})

Banner.args = {
  dismissable: true,
  enabledIcons: false,
  iconName: 'None',
  iconSize: 32,
  iconColor: '#FFC107',
  iconWeight: 'Regular',
  iconWeightCustom: 1,
}