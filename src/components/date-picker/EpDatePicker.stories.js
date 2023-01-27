import EpDatePicker from './EpDatePicker'
import { padded } from '@/helpers/decorators'

export default {
  title: 'Components/Date Picker',
  component: EpDatePicker,
  decorators: [padded],
  argTypes: {
  }
}

const Template = args => ({
  components: { EpDatePicker },
  setup() {
    return { args }
  },
  template: '<ep-date-picker />'
})

export const DatePicker = Template.bind({})
