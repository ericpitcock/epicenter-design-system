import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpTabContent from '@/components/tabs/EpTabContent.vue'
import EpTabs from '@/components/tabs/EpTabs.vue'
import { useTabs } from '@/composables'

import { paddedBg } from '../../helpers/decorators.js'

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
    },
    // storybook specific props
    type: {
      name: 'Type',
      options: ['tabs', 'router-links'],
      control: {
        type: 'radio',
        labels: {
          tabs: 'Tabs',
          'router-links': 'Router Links'
        }
      }
    },
    // events
    ['tab-click']: {
      table: { disable: true }
    }
  }
}

const tabItems = ['Data', 'Stats', 'Authors']

const routerLinkItems = [
  {
    label: 'Data',
    to: '/library/data',
    exact: true
  },
  {
    label: 'Stats',
    to: '/library/data/stats',
    exact: true
  },
  {
    label: 'Authors',
    to: '/library/authors',
    exact: true
  }
]

export const Tabs = args => ({
  components: {
    EpContainer,
    EpHeader,
    EpTabs,
    EpTabContent
  },
  setup() {
    const { activeTab, setActiveTab } = useTabs()

    const containerPadding = computed(() => args.variant === 'classic' ? '0' : '0 3rem')
    const contentPadding = computed(() => args.variant === 'classic' ? '3rem' : '3rem 0')
    const headerBgColor = computed(() => args.variant === 'classic' ? 'var(--interface-foreground)' : 'transparent')
    const headerHeight = computed(() => args.variant === 'classic' ? '5.1rem' : '6.1rem')
    const headerPadding = computed(() => args.variant === 'classic' ? '0 3rem' : '0')

    const router = useRouter()
    const ready = ref(false)

    onMounted(async () => {
      await router.push('/library/data')
      ready.value = true
    })

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
      routerLinkItems,
      ready
    }
  },
  template: `
    <ep-container
      :style="{
        '--ep-container-max-width': '120rem',
        '--ep-container-height': '100%',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-overflow': 'visible',
        '--ep-container-padding': containerPadding,
        '--ep-container-border-width': '0.1rem',
        '--ep-container-content-padding': contentPadding,
      }"
    >
      <template #header>
        <ep-header
          :style="{
            '--ep-header-container-height': headerHeight,
            '--ep-header-container-bg-color': headerBgColor,
            '--ep-header-container-padding': headerPadding,
            '--ep-header-container-overflow': 'visible'
          }"
        >
          <template #left>
            <ep-tabs
              v-bind="args"
              :items="args.type === 'tabs' ? tabItems : routerLinkItems"
              :active-tab-index="activeTab"
              @tab-click="setActiveTab"
            />
          </template>
        </ep-header>
      </template>
      <template #default>
        <ep-tab-content
          v-if="args.type === 'tabs'"
          :items="args.type === 'tabs' ? tabItems : routerLinkItems"
          :active-tab-index="activeTab"
        >
          <template #tab-0>
            <div class="copy-block">
              <h1>Data</h1>
              <p></p>
            </div>
          </template>
          <template #tab-1>
            <div class="copy-block">
              <h1>Stats</h1>
              <p></p>
            </div>
          </template>
          <template #tab-2>
            <div class="copy-block">
              <h1>Authors</h1>
              <p></p>
            </div>
          </template>
        </ep-tab-content>
        <template v-else>
          <div class="copy-block">
            <h1>{{ ready ? $route.name : 'Loading...' }}</h1>
          </div>
        </template>
      </template>
    </ep-container>
  `
})

Tabs.args = {
  activeTabIndex: 0,
  items: routerLinkItems,
  variant: 'default',
  type: 'router-links'
}
