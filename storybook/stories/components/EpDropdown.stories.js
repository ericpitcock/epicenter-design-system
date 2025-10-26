import { faker } from '@faker-js/faker'
import { computed } from 'vue'

import EpDropdown from '@/components/dropdown/EpDropdown.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { iconMapping, iconOptions } from '../../helpers/iconHelper.js'

const fakeDropdownItems = [
  {
    section: true,
    label: 'Cheap'
  },
  {
    id: faker.string.uuid(),
    label: 'Drip',
  },
  {
    id: faker.string.uuid(),
    label: 'French Press',
  },
  {
    divider: true
  },
  {
    section: true,
    label: 'Expensive'
  },
  {
    id: faker.string.uuid(),
    label: 'Latte',
  },
  {
    id: faker.string.uuid(),
    label: 'Espresso',
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
      class: 'ep-button-var--primary'
    }))

    const menuProps = computed(() => ({
      menuItems: fakeDropdownItems,
      class: 'special-class',
    }))

    const onClick = (item) => {
      console.log('clicked:', item.label)
    }

    return { args, buttonProps, menuProps, onClick }
  },
  template: `
    <ep-dropdown
      :buttonProps="buttonProps"
      :menuProps="menuProps"
      v-bind="args"
      @click="onClick"
      @close="() => console.log('closed')"
    />
  `
})

Dropdown.args = {
  disabled: false,
  'buttonProps.size': 'large',
  'buttonProps.iconLeft': 'None',
  alignRight: false,
  showOnHover: false
}
