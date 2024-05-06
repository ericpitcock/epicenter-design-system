import { padded } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'

export default {
  title: 'Components/Empty State',
  component: EpEmptyState,
  decorators: [padded],
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
  components: { EpContainer, EpEmptyState },
  setup() {
    return { args }
  },
  template: `
    <ep-container
      width="100%"
      background-color="var(--interface-surface)"
      container-padding="3rem"
    >
      <ep-empty-state v-bind="args">
        <template #img>
          <img src="/happy-dog.png" alt="It's a happy dog" />
        </template>
        <p>You finished all your tasks!</p>
        <template #subtext>
          <p>More tasks will appear here soon</p>
        </template>
      </ep-empty-state>
    </ep-container>
  `
})

EmptyState.args = {
  direction: 'column',
  justify: 'center'
}