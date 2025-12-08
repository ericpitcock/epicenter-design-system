import { Coffee02 } from '@ericpitcock/epicenter-icons'
import { computed, ref, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpMenu from '@/components/menu/EpMenu.vue'
import EpMenuItem from '@/components/menu/EpMenuItem.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

const fakeDropdownItems = [
  { type: 'section', label: 'Cheap' },
  { type: 'item', label: 'Drip' },
  { type: 'item', label: 'French Press' },
  { type: 'divider' },
  { type: 'section', label: 'Expensive' },
  { type: 'item', label: 'Latte' },
  { type: 'item', label: 'Espresso' }
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
      },
      table: {
        category: 'Options'
      }
    },
    showOnHover: {
      name: 'Show On Hover',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Options'
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
        category: 'Button Style'
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
  },
}

export const Dropdown = args => ({
  components: {
    EpButton,
    EpDropdown,
    EpMenu,
    EpMenuItem,
    Coffee02
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
          :size="args.size"
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
        <ep-menu>
          <template v-for="(item, index) in fakeDropdownItems" :key="index">
            <ep-menu-item :type="item.type">
              <ep-button
                v-if="item.type === 'item'"
                class="ep-button--menu-item"
                @click="() => { onSelect(item); close() }"
              >
                {{ item.label }}
              </ep-button>
              <template v-else>{{ item.label }}</template>
            </ep-menu-item>
          </template>
        </ep-menu>
      </template>
    </ep-dropdown>
  `
})

Dropdown.args = {
  disabled: false,
  size: 'large',
  alignRight: false,
  showOnHover: false,
  enabledIcons: true,
  iconLeft: 'Coffee02',
  iconRight: 'ArrowDown01'
}
