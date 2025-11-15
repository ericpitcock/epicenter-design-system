import { computed, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

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

      {{ args.label }}
      
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
  label: 'Receive taco',
  size: 'large',
  disabled: false,
  classes: 'Primary',
  enabledIcons: false,
  iconLeft: 'None',
  iconRight: 'None',
  borderRadius: 3,
}
