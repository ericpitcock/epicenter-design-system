import { centered } from '../../helpers/decorators'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons'
import EpDropdown from '@/components/dropdown/EpDropdown'

// const buttonDefaults = {
//   variant: 'secondary',
//   size: 'default',
//   title: 'Components/Default Dropdown',
//   label: 'Export',
//   iconRight: { name: 'chevron-down' },
//   iconLeft: { name: 'export' }
// }
// const containerProps = {
//   backgroundColor: 'var(--background-4)',
//   containerPadding: '1rem 0',
//   borderRadius: 'var(--border-radius)',
//   borderColor: 'var(--border-color--lighter)'
// }
const fakeDropdownItems = [
  {
    label: 'PDF',
    iconLeft: { name: 'f/file' }
  },
  {
    label: 'JPG',
    iconLeft: { name: 'f/file' }
  },
  {
    divider: true
  },
  {
    label: 'CSV',
    iconLeft: { name: 'f/file' }
  },
  {
    label: 'JSON',
    iconLeft: { name: 'f/file' }
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [centered],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
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
      name: 'Icon (Left)',
      options: iconNames,
      mapping: iconNamesMapping,
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
    const buttonProps = {
      variant: args['buttonProps.variant'],
      size: args['buttonProps.size'],
      label: 'Export Data',
      // iconRight: { name: 'chevron-down' },
      iconLeft: args['buttonProps.iconLeft']
    }
    const containerProps = {
      backgroundColor: 'var(--background-4)',
      containerPadding: '1rem 0',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)'
    }
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
  'buttonProps.variant': 'primary',
  'buttonProps.size': 'large',
  'buttonProps.iconLeft': 'file',
  alignRight: false,
  menuItems: fakeDropdownItems,
  showOnHover: true
}
