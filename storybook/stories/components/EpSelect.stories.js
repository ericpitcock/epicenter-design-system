import { computed, toRef, watch } from 'vue'

import EpSelect from '@/components/select/EpSelect.vue'

import { paddedSurface } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

export default {
  title: 'Components/Select',
  component: EpSelect,
  decorators: [paddedSurface],
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
    label: {
      name: 'Label',
      control: {
        type: 'text'
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
    errorEnabled: {
      table: { disable: true }
    },
    error: {
      name: 'Error',
      control: {
        type: 'boolean'
      }
    },
    errorMessage: {
      name: 'Error Message',
      control: {
        type: 'text'
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

    const demoWidth = computed(() => {
      const widths = {
        xlarge: '300px',
        large: '250px',
        default: '200px',
        small: '150px'
      }
      return widths[args.size] || '200px'
    })

    watch(() => args.error, (newVal) => {
      if (newVal) {
        args.errorMessage = 'Sorry, bro, there’s been an error'
      } else {
        args.errorMessage = ''
      }
    })

    return { args, iconLeftComponent, demoWidth }
  },
  template: `
    <div :style="{ maxWidth: demoWidth }">
      <ep-select v-bind="args">
        <template #icon-left>
          <component :is="iconLeftComponent" />
        </template>
      </ep-select>
    </div>
  `
})

Select.args = {
  selectId: 'select',
  label: 'What’s your favorite type of coffee?',
  enabledIcons: true,
  iconLeft: 'Coffee02',
  size: 'xlarge',
  placeholder: 'Select coffee',
  disabled: false,
  autofocus: false,
  errorEnabled: true,
  error: false,
  errorMessage: '',
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