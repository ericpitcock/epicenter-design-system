import { ref } from 'vue'

import EpAsyncButton from '@/components/async-button/EpAsyncButton.vue'

import { centeredBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Async Button',
  component: EpAsyncButton,
  decorators: [centeredBg],
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: { category: 'Base Props' }
    },
    successMessage: {
      name: 'Success Message',
      control: { type: 'text' },
      table: { category: 'Base Props' }
    },
    failureMessage: {
      name: 'Failure Message',
      control: { type: 'text' },
      table: { category: 'Base Props' }
    },
  }
}
export const AsyncButton = (args) => ({
  components: { EpAsyncButton },
  setup() {
    const status = ref('default')
    const handleClick = () => {
      if (status.value === 'loading') return
      status.value = 'loading'
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5
        status.value = isSuccess ? 'success' : 'failure'
      }, 2000)
    }
    return { args, status, handleClick }
  },
  template: `
    <ep-async-button
      v-bind="args"
      :status="status"
      @click="handleClick"
    />
  `
})

AsyncButton.args = {
  label: 'Load Data',
  successMessage: 'Loaded!',
  failureMessage: 'Failed!'
}