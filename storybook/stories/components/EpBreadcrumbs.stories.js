import EpBreadcrumbs from '@/components/breadcrumbs/EpBreadcrumbs.vue'
import EpButton from '@/components/button/EpButton.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

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

    // On mount, simulate a navigation chain: Home > Library > Data.
    onMounted(async () => {
      // Navigate to the nested route.
      await router.push('/library/data')
      // Mark as ready only after navigation is complete.
      ready.value = true
    })

    return { args, ready }
  },
  template: `
    <div v-if="ready">
      <ep-flex class="gap-60 pt-30 pr-30">
        <nav class="ep-flex flex-col gap-10 pt-50 pl-30">
          <ep-button label="Home" to="/" />
          <ep-button label="Library" to="/library" />
          <ep-button label="Data" to="/library/data" />
        </nav>
        <ep-container style="--ep-container-content-padding: 3rem; --ep-container-bg-color: var(--interface-surface); --ep-container-border-width: 0.1rem;">
          <template #header>
            <ep-header style="--ep-header-container-height: 4.1rem; --ep-header-container-padding: 0.5rem 2rem;">
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
  auto: true
  // When auto is true, the component uses the route's meta data.
}