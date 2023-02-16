import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpTabs from '@/components/tabs/EpTabs'

export default {
  title: 'Components/Tabs',
  component: EpTabs,
  decorators: [padded],
  argTypes: {
    items: {
      control: {
        type: 'array'
      }
    }
  }
}

const Template = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpFooter,
    EpHeader,
    EpTabs
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-tabs v-bind="args" />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div class="copy-block">
          <h1>Tabs</h1>
          <p>Tabs are commonly used in user interface design as a way to organize and navigate multiple sections of content within a single interface. They allow users to easily switch between different sections of content, providing a clear and efficient way to access and interact with the information they need.</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Tabs = Template.bind({})

Tabs.args = {
  items: [
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
