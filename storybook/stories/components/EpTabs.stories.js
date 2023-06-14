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
    activeTabIndex: {
      control: {
        type: 'number'
      }
    },
    items: {
      control: {
        type: 'array'
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'classic']
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

    const containerPadding = args.variant === 'classic' ? '0' : '0 3rem'
    const contentPadding = args.variant === 'classic' ? '3rem' :  '3rem 0'
    const headerBgColor = args.variant === 'classic' ? 'var(--interface-foreground)' : 'transparent'
    const headerHeight = args.variant === 'classic' ? '5.1rem' : '6.1rem'
    const headerPadding = args.variant === 'classic' ? '0 3rem' : '0'

    return {
      activeTab,
      args,
      containerPadding,
      contentPadding,
      headerBgColor,
      headerHeight,
      headerPadding,
      setActiveTab,
      tabItems
    }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      :container-padding="containerPadding"
      :content-padding="contentPadding"
      overflow="hidden"
    >
      <template #header>
      <ep-header
        :padding="headerPadding"
        :height="headerHeight"
        :background-color="headerBgColor"
      >
        <template #left>
          <ep-tabs
            v-bind="args"
            :items="tabItems"
            :active-tab-index="activeTab"
            @tab-click="setActiveTab"
          />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-tab-content
          :items="tabItems"
          :active-tab-index="activeTab"
        >
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
  activeTabIndex: 0,
  items: tabItems,
  variant: 'default'
}
