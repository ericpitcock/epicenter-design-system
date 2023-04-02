import { padded } from '../../helpers/decorators'
import EpDatePicker from '@/components/date-picker/EpDatePicker'

export default {
  title: 'Components/Date Picker',
  component: EpDatePicker,
  decorators: [padded],
  argTypes: {
    dateFormat: {
      name: 'Date Format',
      control: {
        type: 'text'
      }
    },
    mode: {
      name: 'Mode',
      options: ['single', 'multiple', 'range'],
      control: {
        type: 'radio',
        labels: {
          single: 'Single',
          multiple: 'Multiple',
          range: 'Range'
        }
      }
    }
  }
}

export const DatePicker = args => ({
  components: {
    EpDatePicker
  },
  setup() {
    return { args }
  },
  template: '<ep-date-picker v-bind="args" />'
})

DatePicker.args = {
  dateFormat: 'm/d/Y',
  mode: 'single'
}
