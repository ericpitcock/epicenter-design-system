import { toRef } from 'vue'

import EpSelect from '@/components/select/EpSelect.vue'

import { centeredSurface } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

export default {
  title: 'Components/Select',
  component: EpSelect,
  decorators: [centeredSurface],
  argTypes: {
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
      }
    },
    enabledIcons: {
      name: 'Left Icon Enabled',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Icons'
      }
    },
    iconLeft: {
      if: { arg: 'enabledIcons' },
      name: 'Left Icon',
      options: componentNames,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    selectId: {
      table: { disable: true }
    },
    options: {
      table: { disable: true }
    },
    modelValue: { table: { disable: true } },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    autofocus: {
      name: 'Autofocus',
      control: {
        type: 'boolean'
      }
    },
    readonly: { table: { disable: true } },
    required: { table: { disable: true } },
    // events
    blur: { table: { disable: true } },
    focus: { table: { disable: true } },
    // slots
    ['icon-left']: { table: { disable: true } }
  }
}

export const Select = args => ({
  components: { EpSelect },
  setup() {

    const { iconLeftComponent } = useIcons(
      toRef(args, 'iconLeft'),
    )

    return { args, iconLeftComponent }
  },
  template: `
    <ep-select v-bind="args">
      <template #icon-left>
        <component :is="iconLeftComponent" />
      </template>
    </ep-select>
  `
})

Select.args = {
  selectId: 'select',
  enabledIcons: true,
  iconLeft: 'Coffee02',
  size: 'xlarge',
  placeholder: 'Select your coffee type…',
  disabled: false,
  autofocus: false,
  options: [
    {
      label: 'Drip Coffee',
      value: 'drip'
    },
    {
      label: 'Espresso',
      value: 'espresso'
    },
    {
      label: 'Cold Brew',
      value: 'cold-brew'
    },
    {
      label: 'French Press',
      value: 'french-press'
    },
    {
      label: 'Pour Over',
      value: 'pour-over'
    },
    {
      label: 'Chemex',
      value: 'chemex'
    },
    {
      label: 'Aeropress',
      value: 'aeropress'
    }
  ],
}