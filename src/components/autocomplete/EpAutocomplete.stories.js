import faker from 'faker'
import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import EpAutocomplete from './EpAutocomplete.vue'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import E from '@/components/logo/E'

const fakeArray = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push({
      id: faker.datatype.uuid(),
      name: faker.address.city(),
    })
  }
  return arr
}

export default {
  title: 'Components/Autocomplete',
  component: EpAutocomplete,
  decorators: [padded],
  argTypes: {
    items: {
      name: 'Items',
      control: {
        type: 'object'
      },
      table: { disable: true },
      defaultValue: fakeArray(100)
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
  }
}

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
          <p>Autocomplete is useful in user interface design because it can save users time and effort by providing suggested completions for their input, reducing the need for typing and increasing the speed of task completion. Additionally, autocomplete can help reduce errors by providing suggestions that are likely to be correct, increasing the overall usability of the interface.</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Autocomplete = Template.bind({})