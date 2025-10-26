import { ref } from 'vue'

import EpAsyncButton from '@/components/async-button/EpAsyncButton.vue'

import { centeredBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Async Button',
  component: EpAsyncButton,
  decorators: [centeredBg],
  argTypes: {
    status: {
      table: { disable: true }
    },
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
    loadingIndicator: {
      name: 'Loading Indicator',
      options: ['text', 'spinner'],
      control: { type: 'inline-radio' },
      table: { category: 'Loading Props' }
    },
    loadingText: {
      name: 'Loading Text',
      control: { type: 'text' },
      table: { category: 'Loading Props' }
    },
    preserveWidth: {
      name: 'Preserve Width',
      control: { type: 'boolean' },
      table: { category: 'Behavior' }
    },
    disabledDuringLoading: {
      name: 'Disable During Loading',
      control: { type: 'boolean' },
      table: { category: 'Behavior' }
    },
    // events
    click: {
      table: { disable: true }
    },
  }
}
export const AsyncButton = (args) => ({
  components: { EpAsyncButton },
  setup() {
    const status = ref('default')
    const onClick = () => {
      if (status.value === 'loading') return
      status.value = 'loading'
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5
        status.value = isSuccess ? 'success' : 'failure'
      }, 2000)
    }
    return { args, status, onClick }
  },
  template: `
    <ep-async-button
      v-bind="args"
      :status="status"
      @click="onClick"
    />
  `
})

AsyncButton.args = {
  label: 'Load Data',
  successMessage: 'Loaded!',
  failureMessage: 'Failed!',
  loadingIndicator: 'text',
  loadingText: 'Loading…',
  preserveWidth: true,
  disabledDuringLoading: true
}