import { computed } from 'vue'

import EpSplitButton from '@/components/split-button/EpSplitButton.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { iconMapping, iconOptions } from '../../helpers/iconHelper.js'

export default {
  title: 'Components/Button/Split Button',
  component: EpSplitButton,
  decorators: [centeredBg],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
    },
    buttonProps: {
      name: 'Button Props',
      control: {
        type: 'object'
      },
      table: { category: 'Config' }
    },
    dropdownProps: {
      name: 'Dropdown Props',
      control: {
        type: 'object'
      },
      table: { category: 'Config' }
    },
    'buttonProps.label': {
      name: 'Label',
      control: {
        type: 'text'
      }
    },
    'buttonProps.size': {
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
    'buttonProps.iconLeft': {
      name: 'Button Icon (Left)',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      }
    },
    'buttonProps.iconRight': {
      name: 'Button Icon (Right)',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      }
    },
    'dropdownProps.buttonProps.iconRight': {
      name: 'Dropdown Icon',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      }
    },
    // events
    'button-click': {
      table: { disable: true }
    },
    'dropdown-select': {
      table: { disable: true }
    },
  }
}

export const SplitButton = args => ({
  components: { EpSplitButton },
  setup() {
    const buttonProps = computed(() => {
      return {
        size: args['buttonProps.size'],
        label: args['buttonProps.label'],
        iconLeft: args['buttonProps.iconLeft'],
        iconRight: args['buttonProps.iconRight'],
        class: 'ep-button-var--primary'
      }
    })

    const dropdownProps = computed(() => {
      return {
        buttonProps: {
          size: args['buttonProps.size'],
          label: '',
          iconRight: args['dropdownProps.buttonProps.iconRight'],
          class: 'ep-button-var--primary'
        },
        menuClass: 'ep-menu-default',
        menuItems: [
          { id: '0', label: 'Download v1.1' },
          { id: '1', label: 'Download v1.0.1' },
          { id: '2', label: 'Download v1.0' },
          { id: '3', label: 'Download v0.9' }
        ]
      }
    })

    return { args, buttonProps, dropdownProps }
  },
  template: `
    <ep-split-button
      :buttonProps="buttonProps"
      :dropdownProps="dropdownProps"
      v-bind="args"
    />
  `
})

SplitButton.args = {
  disabled: false,
  'buttonProps.label': 'Download Latest (v1.2)',
  'buttonProps.size': 'large',
  'dropdownProps.buttonProps.iconRight': 'chevron-down',
}