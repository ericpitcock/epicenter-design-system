import { padded } from '../../helpers/decorators'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpTabs from '@/components/tabs/EpTabs'
import EpTabContent from '@/components/tabs/EpTabContent'
import { ref } from 'vue'

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

const tabItems = ['Overview', 'Features', 'Pricing']

export const Tabs = args => ({
  components: {
    EpContainer,
    EpFooter,
    EpHeader,
    EpTabs,
    EpTabContent
  },
  setup() {
    const activeTab = ref(0)

    const setActiveTab = index => {
      activeTab.value = index
    }

    return {
      activeTab,
      args,
      setActiveTab,
      tabItems
    }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      container-padding="0 3rem"
      content-padding="3rem 0"
      overflow="hidden"
    >
      <template #header>
      <ep-header padding="0">
        <template #left>
          <ep-tabs v-bind="args" @tab-click="setActiveTab" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-tab-content :items="tabItems" :active-tab="activeTab">
        <template #tab-0>
          <div class="copy-block">
            <h1>{{ tabItems[0] }}</h1>
            <p></p>
          </div>
        </template>
        <template #tab-1>
          <div class="copy-block">
            <h1>{{ tabItems[1] }}</h1>
            <p></p>
          </div>
        </template>
        <template #tab-2>
          <div class="copy-block">
            <h1>{{ tabItems[2] }}</h1>
            <p></p>
          </div>
        </template>
        </ep-tab-content>
      </template>
      <template #footer>
        <ep-footer>
          <template #left>
          </template>
        </ep-footer>
      </template>
    </ep-container>
  `
})

Tabs.args = {
  items: tabItems
}
