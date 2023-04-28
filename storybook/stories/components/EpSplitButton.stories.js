import { centered } from '../../helpers/decorators'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'

export default {
  title: 'Components/Button/Split Button',
  component: EpSplitButton,
  decorators: [centered],
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
    'buttonProps.variant': {
      name: 'Variant',
      options: [
        'primary',
        'secondary',
        'ghost',
        'danger',
        'warning',
        'success'
      ],
      control: {
        type: 'radio',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          ghost: 'Ghost',
          danger: 'Danger',
          warning: 'Warning',
          success: 'Success'
        }
      }
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
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      }
    },
    'buttonProps.iconRight': {
      name: 'Button Icon (Right)',
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      }
    },
    'dropdownProps.buttonProps.iconRight': {
      name: 'Dropdown Icon',
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      }
    },
  }
}

export const SplitButton = args => ({
  components: { EpSplitButton },
  setup() {
    const buttonProps = {
      variant: args['buttonProps.variant'],
      size: args['buttonProps.size'],
      label: args['buttonProps.label'],
      iconLeft: args['buttonProps.iconLeft'],
      iconRight: args['buttonProps.iconRight'],
    }
    const dropdownProps = {
      buttonProps: {
        variant: args['buttonProps.variant'],
        size: args['buttonProps.size'],
        label: '',
        iconRight: args['dropdownProps.buttonProps.iconRight'],
      },
      containerProps: {
        backgroundColor: 'var(--interface-overlay)',
        containerPadding: '1rem 0',
        borderRadius: 'var(--border-radius)',
        borderColor: 'var(--border-color--lighter)',
      },
      menuItems: [
        { label: 'Download v1.1' },
        { label: 'Download v1.0.1' },
        { label: 'Download v1.0' },
        { label: 'Download v0.9'  }
      ]
    }
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
  'buttonProps.variant': 'primary',
  'buttonProps.size': 'large',
  'dropdownProps.buttonProps.iconRight': 'chevron-down',
}