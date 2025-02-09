import { ref } from 'vue'

import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpRadio from '@/components/radio/EpRadio.vue'

import { paddedSurface } from '../../helpers/decorators.js'

export default {
  title: 'Components/Radio',
  component: EpRadio,
  decorators: [paddedSurface],
  argTypes: {
    id: {
      table: { disable: true }
    },
    label: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    disabled: {
      table: { disable: true }
    },
    required: {
      table: { disable: true }
    },
  }
}

export const Radio = args => ({
  components: {
    EpFlex,
    EpRadio
  },
  setup() {
    const radioButtons = [
      {
        id: 'radio1',
        label: 'Mild',
        name: 'hotsauce',
        value: 'Mild'
      },
      {
        id: 'radio2',
        label: 'Hot',
        name: 'hotsauce',
        value: 'Hot'
      },
      {
        id: 'radio3',
        label: 'Extreme',
        name: 'hotsauce',
        value: 'Extreme'
      },
      {
        id: 'radio4',
        label: 'Absolute Fire (Sold out)',
        name: 'hotsauce',
        value: 'Absolute Fire (Sold out)',
        disabled: true
      }
    ]

    const selectedOption = ref('')

    return { args, radioButtons, selectedOption }
  },
  template: `
    <ep-flex class="flex-col gap-10">
      <h2>Hot Sauce:</h2>
      <ep-radio
        v-for="radio in radioButtons"
        v-bind="radio"
        v-model="selectedOption"
        @update:modelValue="console.log(selectedOption)"
      />
    </ep-flex>
  `
})
