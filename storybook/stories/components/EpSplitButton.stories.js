import { ArrowDown01 } from '@ericpitcock/epicenter-icons'
import { ref, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
// import EpSplitButton from '@/components/split-button/EpSplitButton.vue'
import EpMenu from '@/components/menu/EpMenu.vue'
import EpMenuItem from '@/components/menu/EpMenuItem.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

export default {
  title: 'Components/Button/Split Button',
  // component: EpSplitButton,
  decorators: [centeredBg],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
    },
    // buttonProps: {
    //   name: 'Button Props',
    //   control: {
    //     type: 'object'
    //   },
    //   table: { category: 'Config' }
    // },
    // dropdownProps: {
    //   name: 'Dropdown Props',
    //   control: {
    //     type: 'object'
    //   },
    //   table: { category: 'Config' }
    // },
    // 'buttonProps.label': {
    //   name: 'Label',
    //   control: {
    //     type: 'text'
    //   }
    // },
    // 'buttonProps.size': {
    //   name: 'Size',
    //   options: ['small', 'default', 'large', 'xlarge'],
    //   control: {
    //     type: 'radio',
    //     labels: {
    //       small: 'Small',
    //       default: 'Default',
    //       large: 'Large',
    //       xlarge: 'X-Large'
    //     }
    //   }
    // },
    // 'buttonProps.iconLeft': {
    //   name: 'Button Icon (Left)',
    //   options: componentNames,
    //   control: {
    //     type: 'select'
    //   }
    // },
    // 'buttonProps.iconRight': {
    //   name: 'Button Icon (Right)',
    //   options: componentNames,
    //   control: {
    //     type: 'select'
    //   }
    // },
    // 'dropdownProps.buttonProps.iconRight': {
    //   name: 'Dropdown Icon',
    //   options: componentNames,
    //   control: {
    //     type: 'select'
    //   }
    // },
    // // events
    // 'button-click': {
    //   table: { disable: true }
    // },
    // 'dropdown-select': {
    //   table: { disable: true }
    // },
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
  }
}

export const SplitButton = args => ({
  components: { ArrowDown01, EpButton, EpDropdown, EpMenu, EpMenuItem },
  setup() {
    // const buttonProps = computed(() => {
    //   return {
    //     size: args['buttonProps.size'],
    //     label: args['buttonProps.label'],
    //     iconLeft: args['buttonProps.iconLeft'],
    //     iconRight: args['buttonProps.iconRight'],
    //     class: 'ep-button-var--primary'
    //   }
    // })

    const openState = ref(false)

    const menuItems = [
      { type: 'section', label: 'Prev Versions' },
      { type: 'item', label: 'v1.1' },
      { type: 'item', label: 'v1.0.1' },
      { type: 'item', label: 'v1.0' },
      { type: 'item', label: 'v0.9' }
    ]

    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    const onSelect = (item) => {
      console.log('clicked:', item.label)
    }

    return {
      args,
      iconLeftComponent,
      iconRightComponent,
      onSelect,
      openState,
      menuItems,
    }
  },
  template: `
    <div class="ep-split-button">
      <ep-button
        class="ep-button-var--primary"
        :disabled="args.disabled"
        :size="args.size"
      >
        <template
          v-if="args.enabledIcons && args.iconLeft != 'None'"
          #icon-left
        >
          <component :is="iconLeftComponent" />
        </template>
        Download Latest (v1.2)
        <template
          v-if="args.enabledIcons && args.iconRight != 'None'"
          #icon-right
        >
          <component :is="iconRightComponent" />
        </template>
      </ep-button>
      <ep-dropdown v-model:open="openState" :disabled="args.disabled">
        <template #trigger="{ attrs, on }">
          <ep-button
            v-bind="attrs"
            v-on="on"
            :disabled="args.disabled"
            :size="args.size"
            class="ep-button-var--primary"
          >
            <template #icon-left>
              <ArrowDown01 />
            </template>
          </ep-button>
        </template>

        <template #content="{ close }">
          <ep-menu>
            <template v-for="(item, index) in menuItems" :key="index">
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
    </div>
  `
})

SplitButton.args = {
  disabled: false,
  size: 'large',
  enabledIcons: true,
  iconLeft: 'Download05',
  iconRight: 'None'
}