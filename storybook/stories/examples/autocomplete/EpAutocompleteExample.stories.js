// import airports from './airports'
import { padded } from '../../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import AirportSearch from './AirportSearch.vue'
import EpAutocomplete from '@/components/autocomplete/EpAutocomplete.vue'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'

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

// const formatAirport = item => `${item.name} (${item.iata_code})`

const Template = args => ({
  components: {
    EpAutocomplete,
    EpActionBar,
    AirportSearch,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return { args }
  },
  mounted() {
    // focus input on mount
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      calculate-height
      :calculate-height-offset="30"
      overflow="hidden"
    >
      <template #default>
        <airport-search />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const AutocompleteInContext = Template.bind({})

AutocompleteInContext.args = {
  items: [],
  searchableKeys: ['name', 'city', 'iata_code'],
  placeholder: 'Search',
  queryType: 'contains'
}

