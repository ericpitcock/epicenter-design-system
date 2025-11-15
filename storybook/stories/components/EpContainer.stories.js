import { faker } from '@faker-js/faker'
import { computed } from 'vue'

import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'

const container = () => {
  return {
    template:
      '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Container/Container',
  component: EpContainer,
  decorators: [container],
  argTypes: {
    layout: {
      name: 'Layout',
      control: {
        type: 'radio',
      },
      options: ['Framed', 'Full Page'],
      mapping: {
        Framed: 'framed',
        'Full Page': 'fullPage',
      }
    }
  },
}

export const Container = args => ({
  components: {
    EpContainer,
    EpHeader,
  },
  setup() {
    const computedStyles = computed(() => {
      if (args.layout === 'fullPage') return

      return {
        '--ep-container-height': 'calc(100vh - 60px)',
        '--ep-container-framed-offset': '60px',
        '--ep-container-overflow': 'auto',
      }
    })

    return {
      args,
      faker,
      computedStyles,
    }
  },
  template: `
    <ep-container
      class="ep-container-default ep-container--sticky-header"
      :style="computedStyles"
    >
      <template #header>
        <ep-header>
          <template #left>
            Header
          </template>
        </ep-header>
        </template>
        <p v-for="i in 100" :key="i" v-once>{{ faker.lorem.paragraph() }}</p>
    </ep-container>
  `
})

Container.args = {
  layout: 'Framed',
}
