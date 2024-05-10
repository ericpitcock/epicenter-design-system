import { centeredSurface } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '../../helpers/iconHelper.js'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import { computed } from 'vue'

const fakeDropdownItems = [
  {
    label: 'PDF',
    iconLeft: { name: 'f-file' }
  },
  {
    label: 'JPG',
    iconLeft: { name: 'f-file' }
  },
  {
    divider: true
  },
  {
    label: 'CSV',
    iconLeft: { name: 'f-file' }
  },
  {
    label: 'JSON',
    iconLeft: { name: 'f-file' }
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [centeredSurface],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
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
      name: 'Icon Left',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      }
    },
    alignRight: {
      name: 'Align Right',
      control: {
        type: 'boolean'
      }
    },
    button: { table: { disable: true } },
    buttonProps: { table: { disable: true } },
    containerProps: { table: { disable: true } },
    menuItems: { table: { disable: true } },
    showOnHover: {
      name: 'Show On Hover',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const Dropdown = args => ({
  components: {
    EpDropdown
  },
  setup() {
    const buttonProps = computed(() => ({
      size: args['buttonProps.size'],
      label: 'Export Data',
      iconRight: { name: 'chevron-down' },
      iconLeft: args['buttonProps.iconLeft']
    }))
    const containerProps = computed(() => ({
      backgroundColor: 'var(--interface-overlay)',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)'
    }))

    return { args, buttonProps, containerProps }
  },
  template: `
    <ep-dropdown
      :buttonProps="buttonProps"
      :containerProps="containerProps"
      :menuItems="args.menuItems"
      v-bind="args"
    />
  `
})

Dropdown.args = {
  disabled: false,
  'buttonProps.size': 'large',
  'buttonProps.iconLeft': 'file',
  alignRight: false,
  menuItems: fakeDropdownItems,
  showOnHover: false
}
