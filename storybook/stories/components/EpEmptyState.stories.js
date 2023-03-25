import { centered } from '../../helpers/decorators'
import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'

export default {
  title: 'Components/Empty State',
  component: EpEmptyState,
  decorators: [centered],
  argTypes: {
    direction: {
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
      control: {
        type: 'object'
      }
    },
    message: {
      control: {
        type: 'text'
      }
    },
    subtext: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = args => ({
  components: { EpEmptyState },
  setup() {
    return { args }
  },
  template: '<ep-empty-state v-bind="args" />'
})

export const EmptyState = Template.bind({})

EmptyState.args = {
  direction: 'column',
  image: {
    src: '/happy-dog.png',
    alt: 'A happy dog'
  },
  message: 'You finished all your tasks!',
  subtext: 'More tasks will appear here soon',
}