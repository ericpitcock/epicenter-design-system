import { ref } from 'vue'

import EpToggleButton from '@/components/toggle-button/EpToggleButton.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { iconMapping, iconOptions } from '../../helpers/iconHelper.js'

export default {
  title: 'Components/Toggle Button',
  component: EpToggleButton,
  decorators: [centeredBg],
  argTypes: {
    // modelValue: {
    //   name: 'Toggled',
    //   control: { type: 'boolean' },
    //   description: 'Represents the current toggle state',
    // },
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    activeClass: {
      name: 'Active class',
      control: { type: 'text' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
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
    },
    icon: {
      name: 'Icon',
      options: iconOptions,
      mapping: iconMapping,
      control: { type: 'select' },
    },
  }
}

export const ToggleButton = args => ({
  components: { EpToggleButton },
  setup() {
    const toggleState = ref(args.modelValue)

    // Remove modelValue from args so it doesn't conflict with v-model.
    // eslint-disable-next-line no-unused-vars
    // const { modelValue: _ignored, ...otherArgs } = args

    return { args, toggleState }
  },
  template: `
    <div style="width: 200px;">
      <ep-toggle-button
        v-model="toggleState" 
        v-bind="args"
      />
      <p style="margin-top: 1rem;">Toggle state: {{ toggleState }}</p>
    </div>
  `
})

ToggleButton.args = {
  label: 'Aa',
  // modelValue: false,
  activeClass: 'ep-button-var--primary',
  disabled: false,
  size: 'default',
  icon: null,
}