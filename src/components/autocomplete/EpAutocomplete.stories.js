// import airports from './airports'
import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import AirportSearch from './AirportSearch.vue'
import EpAutocomplete from './EpAutocomplete.vue'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import E from '@/components/logo/E'

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
      table: { disable: true },
      defaultValue: []
    },
    searchableKeys: {
      name: 'Searchable Keys',
      control: {
        type: 'array'
      },
      table: { disable: true },
      defaultValue: ['name', 'city', 'iata_code']
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      },
      defaultValue: 'Search'
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
      },
      defaultValue: 'contains'
    }
    // labelFormatter: {
    //   name: 'Label Formatter',
    //   control: {
    //     type: 'function'
    //   },
    //   table: { disable: true },
    //   defaultValue: formatAirport
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
    EpFooter,
    E
  },
  setup() {
    return { args }
  },
  mounted() {
    // focus input on mount
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <p>Airport Search</p>
        </template>
        <template #right>
        </template>
      </ep-header>
      </template>
      <template #default>
        <airport-search />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Autocomplete = Template.bind({})