import { EpBanner } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'
import { componentNames, useIcons } from '@sb/helpers/useIcons.js'
import { computed, ref, toRef } from 'vue'

export default {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [withCssProps('banner'), centeredSurface],
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
    EpBanner
  },
  setup() {
    const iconStyles = computed(() => ({
      '--ep-icon-width': args.iconSize + 'px',
      '--ep-icon-height': args.iconSize + 'px',
      '--ep-icon-text-color': args.iconColor,
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
      iconLeftComponent,
      iconStyles,
    }
  },
  template: `
    <ep-banner
      v-show="showBanner"
      v-bind="args"
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
}