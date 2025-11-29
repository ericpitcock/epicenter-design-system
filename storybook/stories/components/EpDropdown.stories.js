import { faker } from '@faker-js/faker'
import { computed, ref, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpMenu from '@/components/menu/EpMenu.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

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
    alignRight: {
      name: 'Align Right',
      control: {
        type: 'boolean'
      }
    },
    showOnHover: {
      name: 'Show On Hover',
      control: {
        type: 'boolean'
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
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    }
  }
}

export const Dropdown = args => ({
  components: {
    EpButton,
    EpDropdown,
    EpMenu,
  },
  setup() {
    const openState = ref(false)

    const buttonProps = computed(() => ({
      size: args['buttonProps.size'],
      label: 'Choose your coffee',
      iconRight: { name: 'chevron-down' },
      iconLeft: args['buttonProps.iconLeft'],
      class: 'ep-button-var--primary'
    }))

    // const menuProps = computed(() => ({
    //   menuItems: fakeDropdownItems,
    //   class: 'special-class',
    // }))

    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    const onSelect = (item) => {
      console.log('clicked:', item.label)
    }

    return {
      args,
      buttonProps,
      fakeDropdownItems,
      iconLeftComponent,
      iconRightComponent,
      onSelect,
      openState
    }
  },
  template: `
    <ep-dropdown
      v-model:open="openState"
      v-bind="args"
    >
      <template #trigger="{ attrs, on }">
        <ep-button
          v-bind="attrs"
          v-on="on"
          :disabled="args.disabled"
          size="large"
          class="ep-button-var--primary"
        >
          <template
            v-if="args.enabledIcons && args.iconLeft != 'None'"
            #icon-left
          >
            <component :is="iconLeftComponent" />
          </template>
          Choose your coffee
          <template
            v-if="args.enabledIcons && args.iconRight != 'None'"
            #icon-right
          >
            <component :is="iconRightComponent" />
          </template>
        </ep-button>
      </template>

      <template #content="{ close }">
        <ep-menu
          :menu-items="fakeDropdownItems"
          @click="item => { onSelect(item); close() }"
        />
      </template>
    </ep-dropdown>
  `
})

Dropdown.args = {
  disabled: false,
  alignRight: false,
  showOnHover: false,
  enabledIcons: true,
  iconLeft: 'Coffee02',
  iconRight: 'ArrowDown01'
}
