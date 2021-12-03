import { centered } from '@/helpers/decorators'
import EpBadge from './EpBadge'

export default {
  title: 'Components/Badge',
  component: EpBadge,
  decorators: [centered],
  argTypes: {
  }
}

const Template = (args) => ({
  components: { EpBadge },
  setup() {
    return { args }
  },
  template: '<ep-badge v-bind="args" />'
})

export const Badge = Template.bind({})
