import { padded } from '@/helpers/decorators'
import airports from '../../data/airports'
import EpAutocomplete from '@/components/autocomplete/EpAutocomplete.vue'

export default {
  title: 'Components/Autocomplete',
  component: EpAutocomplete,
  decorators: [padded],
  argTypes: {
    items: {
      name: 'Items',
      control: {
        type: 'array'
      },
      table: { disable: true }
    },
    searchableKeys: {
      name: 'Searchable Keys',
      control: {
        type: 'array'
      },
      table: { disable: true }
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    queryType: {
      name: 'Query Type',
      options: ['contains', 'startsWith'],
      control: {
        type: 'select',
        labels: {
          contains: 'Contains',
          startsWith: 'Starts With'
        }
      }
    }
    // labelFormatter: {
    //   name: 'Label Formatter',
    //   control: {
    //     type: 'function'
    //   },
    //   table: { disable: true }
    // }
  }
}

const Template = args => ({
  components: {
    EpAutocomplete
  },
  setup() {
    return { args }
  },
  template: '<ep-autocomplete v-bind="args" />'
})

export const Autocomplete = Template.bind({})

Autocomplete.args = {
  items: airports,
  searchableKeys: ['name', 'city', 'iata_code'],
  placeholder: 'Search',
  queryType: 'contains'
}

