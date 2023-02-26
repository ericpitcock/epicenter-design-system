import { padded } from '../../helpers/decorators'
import EpCheckboxFilter from '@/components/filters/EpCheckboxFilter'

export default {
  title: 'Components/Checkbox Filter',
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
// bare component
const Bare = args => ({
  components: {
    EpCheckboxFilter,
  },
  setup() {
    return { args }
  },
  template: '<ep-checkbox-filter v-bind="args" />'
})

export const CheckboxFilter = Bare.bind({})

CheckboxFilter.args = {
  allOption: {
    id: 'all',
    name: '',
    value: 'all',
    // checked: true,
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
      name: '',
      value: 'cookies',
      // checked: true,
      indeterminate: false,
      disabled: false,
      label: 'Cookies',
      required: false,
      readonly: false,
      tabindex: 1,
      commmand: null
    },
    {
      id: 'cake',
      name: '',
      value: 'cake',
      // checked: true,
      indeterminate: false,
      disabled: false,
      label: 'Cake',
      required: false,
      readonly: false,
      tabindex: 1,
      commmand: null
    },
    {
      id: 'brownies',
      name: '',
      value: 'brownies',
      // checked: true,
      indeterminate: false,
      disabled: false,
      label: 'Brownies',
      required: false,
      readonly: false,
      tabindex: 1,
      commmand: null
    },
    {
      id: 'donuts',
      name: '',
      value: 'donuts',
      // checked: true,
      indeterminate: false,
      disabled: false,
      label: 'Donuts',
      required: false,
      readonly: false,
      tabindex: 1,
      commmand: null
    }
  ],
  orientation: 'horizontal'
}
