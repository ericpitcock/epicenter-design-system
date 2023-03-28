import { centered } from '../../helpers/decorators'
import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'

export default {
  title: 'Components/Empty State',
  component: EpEmptyState,
  decorators: [centered],
  argTypes: {
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
    image: {
      name: 'Image',
      control: {
        type: 'object'
      }
    },
    message: {
      name: 'Message',
      control: {
        type: 'text'
      }
    },
    subtext: {
      name: 'Subtext',
      control: {
        type: 'text'
      }
    }
  }
}

export const EmptyState = args => ({
  components: { EpEmptyState },
  setup() {
    return { args }
  },
  template: '<ep-empty-state v-bind="args" />'
})

EmptyState.args = {
  direction: 'column',
  image: {
    src: '/happy-dog.png',
    alt: 'A happy dog'
  },
  message: 'You finished all your tasks!',
  subtext: 'More tasks will appear here soon',
}