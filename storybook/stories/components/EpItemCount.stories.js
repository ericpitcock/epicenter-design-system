import EpItemCount from '@/components/item-count/EpItemCount.vue'

import { centeredSurface } from '../../helpers/decorators.js'

export default {
  title: 'Components/Item Count',
  component: EpItemCount,
  decorators: [centeredSurface],
  argTypes: {
    count: {
      name: 'Count',
      control: {
        type: 'number'
      },
    },
    singular: {
      name: 'Singular',
      control: {
        type: 'text'
      },
    },
    plural: {
      name: 'Plural',
      control: {
        type: 'text'
      },
    },
  }
}

export const ItemCount = args => ({
  components: { EpItemCount },
  setup() {
    return { args }
  },
  template: '<ep-item-count v-bind="args" />'
})

ItemCount.args = {
  count: 2,
  singular: 'Taco',
  plural: 'Tacos'
}