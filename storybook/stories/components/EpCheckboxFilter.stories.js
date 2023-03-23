import { padded } from '../../helpers/decorators'
import EpCheckboxFilter from '@/components/filters/EpCheckboxFilter'

export default {
  title: 'Components/Checkbox/Checkbox Filter',
  component: EpCheckboxFilter,
  decorators: [padded],
  argTypes: {
    allOption: {
      name: 'All Option',
      control: {
        type: 'object'
      }
    },
    items: {
      name: 'Items',
      control: {
        type: 'array'
      }
    },
    orientation: {
      name: 'Orientation',
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical']
      }
    }
  }
}

export const CheckboxFilter = args => ({
  components: {
    EpCheckboxFilter,
  },
  setup() {
    return { args }
  },
  template: '<ep-checkbox-filter v-bind="args" />'
})

CheckboxFilter.args = {
  allOption: {
    id: 'all',
    name: 'desserts',
    value: 'all',
    indeterminate: false,
    disabled: false,
    label: 'Select All',
    required: false,
    readonly: false,
    tabindex: 1,
    commmand: null
  },
  items: [
    {
      id: 'cookies',
      name: 'desserts',
      value: 'cookies',
      indeterminate: false,
      disabled: false,
      label: 'Cookies',
      required: false,
      readonly: false,
      tabindex: 2,
      commmand: null
    },
    {
      id: 'cake',
      name: 'desserts',
      value: 'cake',
      indeterminate: false,
      disabled: false,
      label: 'Cake',
      required: false,
      readonly: false,
      tabindex: 3,
      commmand: null
    },
    {
      id: 'brownies',
      name: 'desserts',
      value: 'brownies',
      indeterminate: false,
      disabled: false,
      label: 'Brownies',
      required: false,
      readonly: false,
      tabindex: 4,
      commmand: null
    },
    {
      id: 'donuts',
      name: 'desserts',
      value: 'donuts',
      indeterminate: false,
      disabled: false,
      label: 'Donuts',
      required: false,
      readonly: false,
      tabindex: 5,
      commmand: null
    }
  ],
  orientation: 'vertical'
}
