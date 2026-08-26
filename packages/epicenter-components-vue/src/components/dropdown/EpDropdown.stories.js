import { EpButton, EpDropdown, EpMenu, EpMenuItem } from '@ericpitcock/epicenter-components-vue'
import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
import Coffee02 from '@ericpitcock/epicenter-icons-vue/Coffee02'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredBg } from '@sb/helpers/decorators.js'
import { componentNames, useIcons } from '@sb/helpers/useIcons.js'
import { ref, toRef } from 'vue'

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
  decorators: [withCssProps('dropdown'), centeredBg],
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
    autoFocus: {
      name: 'Auto Focus',
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
  ,
    ...cssPropArgTypes('dropdown'),
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
  autoFocus: true,
  enabledIcons: true,
  iconLeft: 'Coffee02',
  iconRight: 'ArrowDown01'
}

export const ViewportEdges = () => ({
  components: {
    EpButton,
    EpDropdown,
    EpMenu,
    EpMenuItem
  },
  setup() {
    // Centering uses inset + auto margins, not transforms: Safari resolves
    // anchor positioning against the anchor's untransformed layout box, so a
    // translate-centered trigger gets a panel offset by the translate amount.
    const positions = [
      { label: 'Top left', style: 'top: 1rem; left: 1rem;' },
      { label: 'Top center', style: 'top: 1rem; left: 0; right: 0; margin-inline: auto;' },
      { label: 'Top right', style: 'top: 1rem; right: 1rem;' },
      { label: 'Middle left', style: 'top: 0; bottom: 0; margin-block: auto; height: fit-content; left: 1rem;' },
      { label: 'Middle right', style: 'top: 0; bottom: 0; margin-block: auto; height: fit-content; right: 1rem;' },
      { label: 'Bottom left', style: 'bottom: 1rem; left: 1rem;' },
      { label: 'Bottom center', style: 'bottom: 1rem; left: 0; right: 0; margin-inline: auto;' },
      { label: 'Bottom right', style: 'bottom: 1rem; right: 1rem;' },
    ]

    const menuItems = ['Drip', 'French Press', 'Latte', 'Espresso', 'Cortado', 'Flat White']

    return { menuItems, positions }
  },
  template: `
    <ep-dropdown
      v-for="position in positions"
      :key="position.label"
      :style="'position: fixed; ' + position.style"
      :auto-focus="false"
    >
      <template #trigger="{ attrs, on }">
        <ep-button
          v-bind="attrs"
          v-on="on"
        >
          {{ position.label }}
        </ep-button>
      </template>

      <template #content="{ close }">
        <ep-menu
          @escape="close"
          @tab="close"
        >
          <ep-menu-item
            v-for="item in menuItems"
            :key="item"
            type="item"
            @select="close"
          >
            <ep-button
              class="ep-button--menu-item"
              tabindex="-1"
            >
              {{ item }}
            </ep-button>
          </ep-menu-item>
        </ep-menu>
      </template>
    </ep-dropdown>
  `
})

ViewportEdges.parameters = {
  controls: { disable: true }
}
