import { centered } from '../../helpers/decorators'
import EpStatusIndicator from '@/components/status-indicator/EpStatusIndicator'

export default {
  title: 'Components/Status Indicator',
  component: EpStatusIndicator,
  decorators: [centered],
  argTypes: {
    status: {
      name: 'Status',
      options: [
        'error',
        'info',
        'success',
        'warning',
      ],
      control: {
        type: 'radio',
        labels: {
          error: 'Error',
          info: 'Info',
          success: 'Success',
          warning: 'Warning',
        }
      }
    },
    value: {
      name: 'Value',
      control: {
        type: 'text'
      }
    }
  }
}

export const StatusIndicator = args => ({
  components: { EpStatusIndicator },
  setup() {
    return { args }
  },
  template: '<ep-status-indicator v-bind="args" />'
})

StatusIndicator.args = {
  status: 'success',
  value: 'Carlos Picah'
}