import { centeredBg } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '../../helpers/iconHelper.js'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import { computed } from 'vue'

const fakeDropdownItems = [
  {
    section: true,
    label: 'Cheap'
  },
  {
    label: 'Drip',
    // iconLeft: { name: 'f-coffee' }
  },
  {
    label: 'French Press',
    // iconLeft: { name: 'f-coffee' }
  },
  {
    divider: true
  },
  {
    section: true,
    label: 'Expensive'
  },
  {
    label: 'Latte',
    // iconLeft: { name: 'f-coffee' }
  },
  {
    label: 'Espresso',
    // iconLeft: { name: 'f-coffee' }
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [centeredBg],
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
    // containerProps: { table: { disable: true } },
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
      label: 'Choose your coffee',
      iconRight: { name: 'chevron-down' },
      iconLeft: args['buttonProps.iconLeft'],
      classes: { [args['buttonProps.classes']]: true }
    }))

    return { args, buttonProps }
  },
  template: `
    <ep-dropdown
      :buttonProps="buttonProps"
      :menuItems="args.menuItems"
      menu-class="special-class"
      v-bind="args"
    />
  `
})

Dropdown.args = {
  disabled: false,
  'buttonProps.size': 'large',
  'buttonProps.iconLeft': 'None',
  'buttonProps.classes': 'button-variant-primary',
  alignRight: false,
  menuItems: fakeDropdownItems,
  showOnHover: false
}
