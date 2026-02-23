import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
import Coffee02 from '@ericpitcock/epicenter-icons-vue/Coffee02'
import { ref, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpMenu from '@/components/menu/EpMenu.vue'
import EpMenuItem from '@/components/menu/EpMenuItem.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

const fakeDropdownItems = [
  { type: 'section', label: 'Cheap' },
  { type: 'item', label: 'Drip' },
  {
    type: 'item',
    label: 'French Press',
    disabled: true
  },
  { type: 'divider' },
  { type: 'section', label: 'Expensive' },
  {
    type: 'item',
    label: 'Latte',
    iconRight: ArrowRight01,
    submenu: [
      {
        type: 'item',
        label: 'Whole Milk',
      },
      {
        type: 'item',
        label: 'Oat Milk',
      },
      {
        type: 'item',
        label: 'Almond Milk',
        disabled: true,
      },
      {
        type: 'item',
        label: 'Soy Milk',
      }
    ]
  },
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
    ArrowRight01,
    EpButton,
    EpDropdown,
    EpMenu,
    EpMenuItem,
    Coffee02
  },
  setup() {
    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    const onSelect = (item) => {
      console.log('clicked:', item.label)
    }

    const dropdownRef = ref(null)

    return {
      args,
      dropdownRef,
      fakeDropdownItems,
      iconLeftComponent,
      iconRightComponent,
      onSelect,
    }
  },
  template: `
    <ep-button
      style="position: absolute; top: 10px; left: 10px;"
      @click="dropdownRef.openDropdown()"
    >
      Open from outside
    </ep-button>
    <ep-dropdown
      ref="dropdownRef"
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
        <ep-menu
          @escape="close"
          @tab="close"
        >
          <template v-for="(item, index) in fakeDropdownItems" :key="index">
            <ep-menu-item
              :type="item.type"
              :is-disabled="item.disabled"
              :disabled="item.disabled"
              @select="() => { onSelect(item); close() }"
            >
              <ep-button
                v-if="item.type === 'item'"
                class="ep-button--menu-item"
                :size="args.size"
                :disabled="item.disabled"
                tabindex="-1"
              >
                {{ item.label }}
                <template v-if="item.iconRight" #icon-right>
                  <component :is="item.iconRight" />
                </template>
              </ep-button>
              <template v-else>{{ item.label }}</template>
              
              <template v-if="item.submenu" #submenu>
                <ep-menu>
                  <template v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                    <ep-menu-item
                      :type="subItem.type"
                      :is-disabled="subItem.disabled"
                      :disabled="subItem.disabled"
                      @select="() => { onSelect(subItem); close() }"
                    >
                      <ep-button
                        v-if="subItem.type === 'item'"
                        class="ep-button--menu-item"
                        :size="args.size"
                        :disabled="subItem.disabled"
                        tabindex="-1"
                      >
                        {{ subItem.label }}
                      </ep-button>
                      <template v-else>{{ subItem.label }}</template>
                    </ep-menu-item>
                  </template>
                </ep-menu>
              </template>
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
