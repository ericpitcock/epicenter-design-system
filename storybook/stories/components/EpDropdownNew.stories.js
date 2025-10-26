import { faker } from '@faker-js/faker'
import { ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpMenu from '@/components/menu/EpMenu.vue'

import { centeredBg } from '../../helpers/decorators.js'

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
      control: { type: 'inline-check' },
      options: ['click', 'hover', 'contextmenu']
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
    disabled: { control: { type: 'boolean' } }
  }
}

export const DropdownNew = args => ({
  components: { EpButton, EpDropdown, EpMenu },
  setup() {
    const openState = ref(false)

    const onSelect = selectedItem => {
      console.log('selected:', selectedItem.label)
    }
    return { args, openState, fakeDropdownItems, onSelect }
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
        <ep-button v-bind="attrs" v-on="on" class="ep-button-var--primary">
          <template #icon-left>
            left icon
          </template>
          Choose your coffee
          <template #icon-right>
            rigth icon
          </template>
        </ep-button>
      </template>

      <template #header="{ close }">
        <div style="padding: 8px 12px; font-weight: 600">Coffee</div>
      </template>

      <template #content="{ close }">
        <ep-menu
          :menu-items="fakeDropdownItems"
          @select="item => { onSelect(item); close() }"
        />
      </template>

      <template #footer="{ close }">
        <div style="padding: 8px 12px; font-size: 12px; opacity: .7">Make your choice</div>
      </template>
    </ep-dropdown>
  `
})

DropdownNew.args = {
  trigger: ['click'],
  placement: 'bottom-start',
  offset: 4,
  flip: true,
  shift: true,
  matchTriggerWidth: false,
  closeOnContentClick: true,
  unmountOnClose: true,
  disabled: false
}