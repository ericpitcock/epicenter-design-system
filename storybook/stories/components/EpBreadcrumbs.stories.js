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
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with label, to, and optional customClass'
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

    const handleNavigate = ({ event, crumb }) => {
      event.preventDefault()
      router.push(crumb.to)
    }

    return { args, ready, handleNavigate }
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
                <ep-breadcrumbs v-bind="args" @navigate="handleNavigate">
                  <template #item="{ crumb, isLast }">
                    <router-link v-if="!isLast" :to="crumb.to">
                      {{ crumb.label }}
                    </router-link>
                    <span v-else class="ep-breadcrumbs__item--current">
                      {{ crumb.label }}
                    </span>
                  </template>
                </ep-breadcrumbs>
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
  items: [
    { label: 'Home', to: '/' },
    { label: 'Library', to: '/library' },
    { label: 'Data', to: '/library/data' },
    { label: 'Reports', to: '/library/data/reports' },
    { label: 'Annual', to: '/library/data/reports/annual' },
  ]
}