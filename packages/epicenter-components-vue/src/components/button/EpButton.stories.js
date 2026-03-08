import { centeredBg } from '@sb/helpers/decorators.js'
import { componentNames, useIcons } from '@sb/helpers/useIcons.js'
import { computed, ref, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpLoaderBars from '@/components/loaders/EpLoaderBars.vue'
import EpLoaderBounce from '@/components/loaders/EpLoaderBounce.vue'
import EpLoaderDots from '@/components/loaders/EpLoaderDots.vue'
import EpLoaderDualRing from '@/components/loaders/EpLoaderDualRing.vue'
import EpLoaderFade from '@/components/loaders/EpLoaderFade.vue'
import EpLoaderOrbit from '@/components/loaders/EpLoaderOrbit.vue'
import EpLoaderPulse from '@/components/loaders/EpLoaderPulse.vue'
import EpLoaderScale from '@/components/loaders/EpLoaderScale.vue'
import EpLoaderSpin from '@/components/loaders/EpLoaderSpin.vue'
import EpLoaderSquares from '@/components/loaders/EpLoaderSquares.vue'

const loaderComponents = {
  Dots: EpLoaderDots,
  Spin: EpLoaderSpin,
  Pulse: EpLoaderPulse,
  Bounce: EpLoaderBounce,
  Bars: EpLoaderBars,
  'Dual Ring': EpLoaderDualRing,
  Fade: EpLoaderFade,
  Scale: EpLoaderScale,
  Orbit: EpLoaderOrbit,
  Squares: EpLoaderSquares,
}

export default {
  title: 'Components/Button',
  component: EpButton,
  decorators: [centeredBg],
  argTypes: {
    classes: {
      name: 'Style',
      options: [
        'Primary',
        'Secondary',
        'Success',
        'Warning',
        'Danger',
        'Outline',
        'Ghost',
        'Custom',
      ],
      mapping: {
        None: null,
        Primary: { 'ep-button-var--primary': true },
        Secondary: { 'ep-button-var--secondary': true },
        Success: { 'ep-button-var--success': true },
        Warning: { 'ep-button-var--warning': true },
        Danger: { 'ep-button-var--danger': true },
        Outline: { 'ep-button-var--outline': true },
        Ghost: { 'ep-button-var--ghost': true },
      },
      control: {
        type: 'radio',
      },
      table: {
        category: 'Styles'
      }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Base Props'
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
      },
      table: {
        category: 'Base Props'
      }
    },
    ariaLabel: { table: { disable: true } },
    // to: { table: { disable: true } },
    // href: { table: { disable: true } },
    // isMenuItem: { table: { disable: true } },
    // isActiveMenuItem: { table: { disable: true } },
    type: { table: { disable: true } },
    // command: { table: { disable: true } },
    label: {
      name: 'Label',
      control: {
        type: 'text'
      },
      table: {
        category: 'Base Props'
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
      options: componentNames,
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
      options: componentNames,
      // mapping: iconMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    backgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base Styles'
      },
    },
    borderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base Styles'
      },
    },
    textColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Base Styles'
      },
    },
    borderRadius: {
      name: '--ep-button-border-radius',
      control: {
        type: 'number'
      },
      table: {
        category: 'Base Props'
      },
    },
    hoverBackgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-hover-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover Styles'
      },
    },
    hoverBorderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-hover-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover Styles'
      },
    },
    hoverTextColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-hover-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Hover Styles'
      },
    },
    activeBackgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-active-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active Styles'
      },
    },
    activeBorderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-active-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active Styles'
      },
    },
    activeTextColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-active-text-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Active Styles'
      },
    },
    disabledBackgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-disabled-bg-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled Styles'
      },
    },
    disabledBorderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-disabled-border-color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Disabled Styles'
      },
    },
    disabledTextColor: {
      if: { arg: 'classes', eq: 'Custom' },
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
    // Hide Vue slots from the side panel
    default: { table: { disable: true } },
    'icon-left': { table: { disable: true } },
    'icon-right': { table: { disable: true } },
  }
}

export const Button = args => ({
  components: { EpButton },
  setup() {
    const buttonStyles = computed(() => ({
      '--ep-button-bg-color': args.backgroundColor,
      '--ep-button-border-color': args.borderColor,
      '--ep-button-border-radius': args.borderRadius + 'px',
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

    const buttonProps = computed(() => {
      const props = {}
      if (args.size && args.size !== 'default') props.size = args.size
      if (args.ariaLabel) props.ariaLabel = args.ariaLabel
      if (args.disabled) props.disabled = args.disabled
      return props
    })

    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    const onClick = () => {
      console.log('Button clicked!')
    }

    return { args, buttonProps, buttonStyles, onClick, iconLeftComponent, iconRightComponent }
  },
  template: `
    <ep-button
      v-bind="buttonProps"
      :style="buttonStyles"
      :class="args.classes"
      @click="onClick"
    >
      <template
        v-if="args.enabledIcons && args.iconLeft != 'None'"
        #icon-left
      >
        <component :is="iconLeftComponent" />
      </template>
      <template
        v-if="args.label"
        #default
      >
        {{ args.label }}
      </template>
      <template
        v-if="args.enabledIcons && args.iconRight != 'None'"
        #icon-right
      >
        <component :is="iconRightComponent" />
      </template>
    </ep-button>
  `
})

Button.args = {
  label: 'Download the internet',
  size: 'large',
  disabled: false,
  classes: 'Primary',
  enabledIcons: true,
  iconLeft: 'CloudDownload',
  iconRight: 'None',
  borderRadius: 3,
}

export const AsLoading = args => ({
  components: {
    EpButton,
    ...loaderComponents,
  },
  setup() {
    const isLoading = ref(false)

    const loaderComponent = computed(() => loaderComponents[args.loader])

    const onClick = () => {
      if (isLoading.value) return
      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
      }, 2000)
    }

    return { args, isLoading, loaderComponent, onClick }
  },
  template: `
    <ep-button
      :class="args.classes"
      :size="args.size"
      :aria-disabled="isLoading ? 'true' : null"
      :style="isLoading ? { 'pointer-events': 'none' } : undefined"
      @click="onClick"
    >
      <span :class="['ep-button__async-label', { 'ep-button__async-label--loading': isLoading }]">
        <span class="ep-button__async-text">{{ args.label }}</span>
        <span v-if="isLoading" class="ep-button__async-loader">
          <component :is="loaderComponent" />
        </span>
      </span>
    </ep-button>
  `
})

AsLoading.args = {
  label: 'Submit',
  size: 'large',
  disabled: false,
  classes: 'Primary',
  enabledIcons: false,
  iconLeft: 'None',
  iconRight: 'None',
  borderRadius: 3,
  loader: 'Dots',
}

AsLoading.argTypes = {
  label: {
    name: 'Label',
    control: { type: 'text' },
  },
  size: {
    name: 'Size',
    options: ['small', 'default', 'large', 'xlarge'],
    control: { type: 'radio' },
  },
  classes: {
    name: 'Style',
    options: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Outline', 'Ghost'],
    mapping: {
      Primary: { 'ep-button-var--primary': true },
      Secondary: { 'ep-button-var--secondary': true },
      Success: { 'ep-button-var--success': true },
      Warning: { 'ep-button-var--warning': true },
      Danger: { 'ep-button-var--danger': true },
      Outline: { 'ep-button-var--outline': true },
      Ghost: { 'ep-button-var--ghost': true },
    },
    control: { type: 'radio' },
  },
  loader: {
    name: 'Loader',
    options: Object.keys(loaderComponents),
    control: { type: 'radio' },
  },
}

export const AsToggle = args => ({
  components: { EpButton },
  setup() {
    const isActive = ref(false)

    const { iconLeftComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    const onClick = () => {
      if (args.disabled) return
      isActive.value = !isActive.value
    }

    return { args, isActive, iconLeftComponent, onClick }
  },
  template: `
    <div style="width: 200px;">
      <ep-button
        :class="[args.classes, { 'ep-button--selected': isActive }]"
        :size="args.size"
        :disabled="args.disabled"
        @click="onClick"
      >
        <template v-if="args.enabledIcons && args.iconLeft !== 'None'" #icon-left>
          <component :is="iconLeftComponent" />
        </template>
        <template v-if="args.label" #default>
          {{ args.label }}
        </template>
      </ep-button>
      <p style="margin-top: 1rem;">Toggle state: {{ isActive }}</p>
    </div>
  `
})

AsToggle.args = {
  label: 'Aa',
  size: 'default',
  disabled: false,
  classes: 'Secondary',
  enabledIcons: false,
  iconLeft: 'None',
  iconRight: 'None',
  borderRadius: 3,
}

AsToggle.argTypes = {
  label: {
    name: 'Label',
    control: { type: 'text' },
  },
  size: {
    name: 'Size',
    options: ['small', 'default', 'large', 'xlarge'],
    control: { type: 'radio' },
  },
  classes: {
    name: 'Active Style',
    options: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Outline', 'Ghost'],
    mapping: {
      Primary: { 'ep-button-var--primary': true },
      Secondary: { 'ep-button-var--secondary': true },
      Success: { 'ep-button-var--success': true },
      Warning: { 'ep-button-var--warning': true },
      Danger: { 'ep-button-var--danger': true },
      Outline: { 'ep-button-var--outline': true },
      Ghost: { 'ep-button-var--ghost': true },
    },
    control: { type: 'radio' },
  },
  disabled: {
    name: 'Disabled',
    control: { type: 'boolean' },
  },
  enabledIcons: {
    name: 'Enable Icons',
    control: { type: 'boolean' },
  },
  iconLeft: {
    if: { arg: 'enabledIcons' },
    name: 'Icon',
    options: componentNames,
    control: { type: 'select' },
  },
}
