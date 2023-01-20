import { padded } from '@/helpers/decorators'
import EpTabs from './EpTabs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'

export default {
  title: 'Components/Tabs',
  component: EpTabs,
  decorators: [padded],
  argTypes: {
    items: {
      control: {
        type: 'array'
      },
      defaultValue: [
        {
          label: 'Tab 1',
          value: 'tab1'
        },
        {
          label: 'Tab 2',
          value: 'tab2'
        },
        {
          label: 'Tab 3',
          value: 'tab3'
        }
      ]
    }
  }
}

const Template = args => ({
  components: {
    EpTabs,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return { args }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-tabs v-bind="args" />
        </template>
        <template #right>
          
        </template>
      </ep-header>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Tabs = Template.bind({})
