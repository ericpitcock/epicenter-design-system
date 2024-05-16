import { paddedSurface } from '../../helpers/decorators.js'
import EpDatePicker from '@/components/date-picker/EpDatePicker.vue'

export default {
  title: 'Components/Date Picker',
  component: EpDatePicker,
  decorators: [paddedSurface],
  argTypes: {
    enableCloseOnSelect: {
      name: 'Close on Select',
      control: {
        type: 'boolean'
      }
    },
    inputProps: {
      table: { disable: true }
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
  enableCloseOnSelect: false,
  inputProps: {
    size: 'xlarge',
  },
  dateFormat: 'm/d/Y',
  mode: 'single',
  positionX: 'left',
  positionY: 'auto',
}
