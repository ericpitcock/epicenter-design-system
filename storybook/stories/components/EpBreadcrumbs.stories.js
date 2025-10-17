import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import EpBreadcrumbs from '@/components/breadcrumbs/EpBreadcrumbs.vue'
import EpButton from '@/components/button/EpButton.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpHeader from '@/components/header/EpHeader.vue'

export default {
  title: 'Components/Breadcrumbs',
  component: EpBreadcrumbs,
  argTypes: {
    auto: {
      name: 'Auto Mode',
      control: { type: 'boolean' },
      description:
        'Enable auto mode to generate breadcrumbs based on the Vue Router route meta information.',
      defaultValue: true,
    },
    items: {
      name: 'Items',
      control: { type: 'object' },
      description:
        'An array of breadcrumb objects. (Not used when auto mode is enabled.)',
    },
  },
}

export const Breadcrumbs = (args) => ({
  components: { EpBreadcrumbs, EpFlex, EpButton, EpContainer, EpHeader },
  setup() {
    const router = useRouter()
    const ready = ref(false)

    onMounted(async () => {
      await router.push('/library/data/reports/annual')
      ready.value = true
    })

    return { args, ready }
  },
  template: `
    <div v-if="ready">
      <ep-flex class="gap-60 pt-30 pr-30">
        <nav class="ep-flex flex-col gap-10 pl-30">
          <ep-button to="/">
            Home
          </ep-button>
          <ep-button to="/library">
            Library
          </ep-button>
          <div class="ep-flex flex-col gap-10 pl-20" style="border-left: 1px solid var(--border-color);">
            <ep-button to="/library/data">
              Data
            </ep-button>
          <div class="ep-flex flex-col gap-10 pl-20" style="border-left: 1px solid var(--border-color);">
            <ep-button to="/library/data/reports">
              Reports
            </ep-button>
          <div class="ep-flex flex-col gap-10 pl-20" style="border-left: 1px solid var(--border-color);">
            <ep-button to="/library/data/reports/annual">
              Annual
            </ep-button>
            <ep-button to="/library/data/reports/monthly">
              Monthly
            </ep-button>
          </div>
            <ep-button to="/library/data/stats">
              Stats
            </ep-button>
          </div>
            <ep-button to="/library/authors">
              Authors
            </ep-button>
          </div>
          <ep-button to="/contact">
            Contact
          </ep-button>
        </nav>
        <ep-container
          :style="{
            '--ep-container-height': 'calc(100vh - 60px)',
            '--ep-container-content-padding': '1.4rem 3rem',
            '--ep-container-bg-color': 'var(--interface-surface)',
            '--ep-container-border-width': '0.1rem',
            '--ep-container-overflow': 'hidden',
          }">
          <template #header>
            <ep-header style="--ep-header-container-height: 4.1rem; --ep-header-container-padding: 0.5rem 2rem; --ep-header-container-bg-color: var(--interface-surface--accent);">
              <template #left>
                <ep-breadcrumbs v-bind="args" />
              </template>
            </ep-header>  
          </template>
          <div style="margin-top: 10px;">
            <h1 class="font-size--jumbo">{{ $route.name }}</h1>
          </div>
        </ep-container>
      </ep-flex>
    </div>
    <div v-else>Loading fake route...</div>
  `,
})

Breadcrumbs.args = {
  auto: true,
  // When auto is true, the component uses the route's meta data.
}