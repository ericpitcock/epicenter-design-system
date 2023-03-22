import { centered } from '../../helpers/decorators'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'

export default {
  title: 'Components/Split Button',
  component: EpSplitButton,
  decorators: [centered],
  argTypes: {
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
      options: ['small', 'default', 'large'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large'
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
    'dropdownProps.button.iconRight': {
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
      kind: 'primary',
      size: args['buttonProps.size'],
      label: args['buttonProps.label'],
      iconLeft: args['buttonProps.iconLeft'],
      iconRight: args['buttonProps.iconRight'],
    }
    const dropdownProps = {
      button: {
        kind: 'primary',
        size: args['buttonProps.size'],
        label: '',
        iconRight: args['dropdownProps.button.iconRight'],
      },
      containerProps: {
        backgroundColor: 'var(--background-4)',
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
    />
  `
})

SplitButton.args = {
  'buttonProps.label': 'Download Latest (v1.2)',
  'buttonProps.size': 'default',
  'dropdownProps.button.iconRight': 'chevron-down',
}