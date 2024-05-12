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
    }
  }
}

export const Radio = args => ({
  components: { EpFlexContainer, EpRadio },
  setup() {
    const radioButtons = [
      { id: 'radio1', label: 'Mild', name: 'radio', value: 'radio1' },
      { id: 'radio2', label: 'Hot', name: 'radio', value: 'radio2' },
      { id: 'radio3', label: 'Extreme', name: 'radio', value: 'radio3' }
    ]

    const selectedOption = ref('')

    return { args, radioButtons, selectedOption }
  },
  template: `
    <ep-flex-container
      flex-flow="column nowrap"
      gap="1rem"
    >
      <ep-radio
        v-for="{ id, label, name, value } in radioButtons"
        :id
        :label
        :name
        :value
        v-model="selectedOption"
      />
    </ep-flex-container>
  `
})

// Radio.args = {
//   id: 'radio',
//   label: 'Radio',
//   name: 'radio',
//   value: 'radio'
// }