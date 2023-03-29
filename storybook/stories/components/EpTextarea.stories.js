// storybook story for EpTextarea
import { padded } from '../../helpers/decorators'
import EpTextarea from '@/components/textarea/EpTextarea.vue'

export default {
  title: 'Components/Textarea',
  component: EpTextarea,
  decorators: [padded],
  argTypes: {
  }
}

export const Textarea = args => ({
  components: { EpTextarea },
  setup() {
    return { args }
  },
  template: '<ep-textarea v-bind="args" />'
})