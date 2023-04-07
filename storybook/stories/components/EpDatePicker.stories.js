import { centered } from '../../helpers/decorators'
import EpDatePicker from '@/components/date-picker/EpDatePicker'

export default {
  title: 'Components/Date Picker',
  component: EpDatePicker,
  decorators: [centered],
  argTypes: {
    inputProps: {
      name: 'Input Props',
      control: {
        type: 'object'
      }
    },
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
    },
    positionX: {
      name: 'Position X',
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
    positionY: {
      name: 'Position Y',
      options: ['auto', 'above', 'below'],
      control: {
        type: 'radio',
        labels: {
          auto: 'Auto',
          above: 'Above',
          below: 'Below'
        }
      }
    },
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
  inputProps: {
    size: 'xlarge',
  },
  dateFormat: 'm/d/Y',
  mode: 'single',
  positionX: 'left',
  positionY: 'auto',
}
