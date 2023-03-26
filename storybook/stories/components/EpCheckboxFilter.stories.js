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
    checked: true,
    label: 'Select All',
    disabled: false,
  },
  items: [
    {
      id: 'cookies',
      name: 'desserts',
      value: 'cookies',
      checked: true,
      label: 'Cookies',
      disabled: false,
    },
    {
      id: 'cake',
      name: 'desserts',
      value: 'cake',
      checked: true,
      label: 'Cake',
      disabled: false,
    },
    {
      id: 'brownies',
      name: 'desserts',
      value: 'brownies',
      checked: true,
      label: 'Brownies',
      disabled: false,
    },
    {
      id: 'donuts',
      name: 'desserts',
      value: 'donuts',
      checked: true,
      label: 'Donuts',
      disabled: false,
    }
  ],
  orientation: 'vertical'
}
