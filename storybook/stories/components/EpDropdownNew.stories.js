import { faker } from '@faker-js/faker'
import { ref, toRef } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpDropdown from '@/components/dropdown/EpDropdownNew.vue'
import EpMenu from '@/components/menu/EpMenu.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

const fakeDropdownItems = [
  { section: true, label: 'Cheap' },
  { id: faker.string.uuid(), label: 'Drip' },
  { id: faker.string.uuid(), label: 'French Press' },
  { divider: true },
  { section: true, label: 'Expensive' },
  { id: faker.string.uuid(), label: 'Latte' },
  { id: faker.string.uuid(), label: 'Espresso' }
]

export default {
  title: 'Components/Dropdown New',
  component: EpDropdown,
  decorators: [centeredBg],
  argTypes: {
    trigger: {
      name: 'Trigger',
      control: { type: 'inline-check' },
      options: ['click', 'hover', 'contextmenu']
    },
    header: {
      name: 'Use Header',
      control: { type: 'boolean' }
    },
    footer: {
      name: 'Use Footer',
      control: { type: 'boolean' }
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top-start', 'top', 'top-end',
        'right-start', 'right', 'right-end',
        'bottom-start', 'bottom', 'bottom-end',
        'left-start', 'left', 'left-end'
      ]
    },
    offset: { control: { type: 'number' } },
    flip: { control: { type: 'boolean' } },
    shift: { control: { type: 'boolean' } },
    matchTriggerWidth: { control: { type: 'boolean' } },
    closeOnContentClick: { control: { type: 'boolean' } },
    unmountOnClose: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
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

export const DropdownNew = args => ({
  components: { EpButton, EpDropdown, EpMenu },
  setup() {
    const openState = ref(true)

    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    const onSelect = selectedItem => {
      console.log('selected:', selectedItem.label)
    }
    return { args, openState, fakeDropdownItems, onSelect, iconLeftComponent, iconRightComponent }
  },
  template: `
    <ep-dropdown
      v-model:open="openState"
      :trigger="args.trigger"
      :placement="args.placement"
      :offset="args.offset"
      :flip="args.flip"
      :shift="args.shift"
      :matchTriggerWidth="args.matchTriggerWidth"
      :closeOnContentClick="args.closeOnContentClick"
      :unmountOnClose="args.unmountOnClose"
      :disabled="args.disabled"
    >
      <template #trigger="{ attrs, on }">
        <ep-button
          v-bind="attrs"
          v-on="on"
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

      <template v-if="args.header" #header="{ close }">
        <div style="padding: 8px 12px; font-weight: 600">Coffee</div>
      </template>

      <template #content="{ close }">
        <ep-menu
          :menu-items="fakeDropdownItems"
          @click="item => { onSelect(item); close() }"
        />
      </template>

      <template v-if="args.footer" #footer="{ close }">
        <div style="padding: 8px 12px; font-size: 12px; opacity: .7">Make your choice</div>
      </template>
    </ep-dropdown>
  `
})

DropdownNew.args = {
  trigger: ['click'],
  header: false,
  footer: false,
  placement: 'bottom-start',
  offset: 0,
  flip: true,
  shift: true,
  matchTriggerWidth: false,
  closeOnContentClick: true,
  unmountOnClose: true,
  disabled: false,
  enabledIcons: true,
  iconLeft: 'None',
  iconRight: 'ArrowDown01'
}