import EpButton from '@/components/button/EpButton.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'

import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Empty State',
  component: EpEmptyState,
  decorators: [paddedBg],
  argTypes: {
    justify: {
      name: 'Justify',
      options: ['left', 'center', 'right'],
      control: {
        type: 'radio',
        labels: {
          left: 'Left',
          center: 'Center',
          right: 'Right'
        }
      }
    },
    direction: {
      name: 'Direction',
      options: ['row', 'column'],
      control: {
        type: 'radio',
        labels: {
          row: 'Horizontal',
          column: 'Vertical'
        }
      }
    },
  }
}

export const EmptyState = args => ({
  components: {
    EpButton,
    EpContainer,
    EpEmptyState,
  },
  setup() {
    return { args }
  },
  template: `
    <ep-container
      :style="{
        '--ep-container-width': '100%',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-border-width': '0.1rem',
        '--ep-container-padding': '6rem'
      }"
    >
      <ep-empty-state v-bind="args">
        <template #img>
          <img src="/happy-dog.png" alt="It's a happy dog" />
        </template>
        <p>You finished all your tasks!</p>
        <template #subtext>
          <p>More tasks will appear here soon</p>
        </template>
        <template #cta>
          <ep-button size="large">
            Go to Dashboard
          </ep-button>
        </template>
      </ep-empty-state>
    </ep-container>
  `
})

EmptyState.args = {
  direction: 'column',
  justify: 'center'
}