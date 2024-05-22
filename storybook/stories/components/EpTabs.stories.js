import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpFooter from '@/components/footer/EpFooter.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpTabs from '@/components/tabs/EpTabs.vue'
import EpTabContent from '@/components/tabs/EpTabContent.vue'
import { computed, ref } from 'vue'

export default {
  title: 'Components/Tabs',
  component: EpTabs,
  decorators: [paddedBg],
  argTypes: {
    activeTabIndex: {
      table: { disable: true }
    },
    items: {
      table: { disable: true }
    },
    variant: {
      name: 'Variant',
      options: ['default', 'classic'],
      control: {
        type: 'radio',
        labels: {
          default: 'Default',
          classic: 'Classic'
        }
      }
    }
  }
}

const tabItems = ['Overview', 'Features', 'Pricing']

const routerLinkItems = [
  { label: 'Overview', to: '/overview' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' }
]

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

    const containerPadding = computed(() => args.variant === 'classic' ? '0' : '0 3rem')
    const contentPadding = computed(() => args.variant === 'classic' ? '3rem' : '3rem 0')
    const headerBgColor = computed(() => args.variant === 'classic' ? 'var(--interface-foreground)' : 'transparent')
    const headerHeight = computed(() => args.variant === 'classic' ? '5.1rem' : '6.1rem')
    const headerPadding = computed(() => args.variant === 'classic' ? '0 3rem' : '0')

    return {
      activeTab,
      args,
      containerPadding,
      contentPadding,
      headerBgColor,
      headerHeight,
      headerPadding,
      setActiveTab,
      tabItems,
      routerLinkItems
    }
  },
  template: `
    <ep-container
      :styles="{
        '--ep-container-max-width': '120rem',
        '--ep-container-height': '100%',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-overflow': 'hidden',
        '--ep-container-padding': containerPadding,
        '--ep-container-content-padding': contentPadding,
      }"
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
            :items="routerLinkItems"
            :active-tab-index="activeTab"
            @tab-click="setActiveTab"
          />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-tab-content
          :items="routerLinkItems"
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
  items: routerLinkItems,
  variant: 'default'
}
