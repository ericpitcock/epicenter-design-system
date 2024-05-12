import { centeredSurface } from '../../helpers/decorators.js'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer.vue'
import EpRadio from '@/components/radio/EpRadio.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Radio',
  component: EpRadio,
  decorators: [centeredSurface],
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
    EpFlexContainer,
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
    <ep-flex-container
      flex-flow="column nowrap"
      gap="1rem"
    >
      <h2>Hot Sauce:</h2>
      <ep-radio
        v-for="{ id, label, name, value, disabled } in radioButtons"
        :id
        :label
        :name
        :value
        :disabled
        v-model="selectedOption"
        @update:modelValue="console.log(selectedOption)"
      />
    </ep-flex-container>
  `
})
