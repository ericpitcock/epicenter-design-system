import airports from './airports'
import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
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
      defaultValue: airports
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
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <div style="height: 3.5rem;">
            <e
              faceColor="transparent"
              highlightColor="transparent"
              shadowColor="transparent"
              :strokeWidth="6"
              strokeColor="var(--sky-300)"
            />
          </div>
        </template>
        <template #right>
          <ep-autocomplete v-bind="args" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div class="copy-block">
          <h1>Autocomplete</h1>
          <p>Autocomplete is a powerful tool in user interface design that enhances the user experience by providing suggestions as the user types, reducing the need for typing and increasing efficiency. It helps users find the information they need quickly and easily, making it an essential feature for any user-friendly interface.</p>
          <p>Do fake flight number, city, airline code search like https://www.torontopearson.com/en/</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Autocomplete = Template.bind({})
