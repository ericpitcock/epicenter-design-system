import { padded } from '../../../helpers/decorators'
import EpCheckbox from '@/components/checkbox/EpCheckbox'
import EpCheckboxExample from './EpCheckboxExample'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [padded],
  argTypes: {
    id: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    checked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    indeterminate: {
      control: {
        type: 'boolean'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    required: {
      table: { disable: true }
    },
    readonly: {
      table: { disable: true }
    },
    tabindex: {
      table: { disable: true }
    },
    command: {
      table: { disable: true }
    }
  }
}

export const CheckboxInContext = args => ({
  components: {
    EpCheckboxExample
  },
  setup() {
    return { args }
  },
  template: '<ep-checkbox-example />'
})

CheckboxInContext.parameters = {
  controls: {
    // exclude all
    exclude: /.*$/,
    hideNoControlsWarning: true,
  }
}