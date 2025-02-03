import EpActionBar from '@/components/action-bar/EpActionBar.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import commonActionBarArgs from '../../helpers/commonActionBarArgs.js'
import { computed } from 'vue'
import { faker } from '@faker-js/faker'

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
    EpActionBar,
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
      commonActionBarArgs,
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
          <template #right>
            <ep-action-bar
              v-bind="commonActionBarArgs"
              :style="{'--ep-action-bar-justify-content': 'flex-end'}"
            />
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
