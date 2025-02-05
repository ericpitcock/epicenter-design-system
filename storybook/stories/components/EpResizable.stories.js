import EpBadge from '@/components/badge/EpBadge.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpResizable from '@/components/resizable/EpResizable.vue'
import { computed, ref } from 'vue'
import { faker } from '@faker-js/faker'

export default {
  title: 'Components/Resizable',
  component: EpResizable,
  argTypes: {
    direction: {
      name: 'Direction',
      control: { type: 'radio' },
      options: ['Row', 'Column'],
      mapping: {
        Row: 'row',
        Column: 'column'
      },
    },
    initialSize: {
      name: 'Initial Size',
      control: { type: 'text' },
    },
    minSize: {
      name: 'Min Size',
      control: { type: 'number' },
    },
    maxSize: {
      name: 'Max Size',
      control: { type: 'number' },
    }
  }
}

export const Resizable = args => ({
  components: {
    EpBadge,
    EpFlex,
    EpResizable,
  },
  setup() {
    const currentSize = ref(null)

    const onResize = (size) => {
      currentSize.value = size
    }

    const displaySize = computed(() => {
      if (currentSize.value) {
        return `${currentSize.value}px`
      }
      return args.initialSize
    })

    return {
      args,
      displaySize,
      onResize,
      faker,
    }
  },
  template: `
    <ep-resizable
      v-bind="args"
      @resize="onResize"
    >
      <template #resizable>
        <div style="display: flex; flex-direction: column; gap: 2rem; width: 100%; height: 100%; background: var(--interface-surface); color: var(--text-color); padding: 4rem; overflow: auto;">
          <ep-flex class="align-center gap-20"><h1 class="font-size--jumbo">Resizable</h1><ep-badge class="badge-variant-primary" :label="displaySize" /></ep-flex>
          <p v-for="i in 100" :key="i" v-once>{{ faker.lorem.paragraph() }}</p>
        </div>
      </template>
      <template #sibling>
        <div style="display: grid; place-items: center; width: 100%; height: 100%; background: var(--interface-bg); color: var(--text-color);">Sibling Panel</div>
      </template>
    </ep-resizable>
  `
})

Resizable.args = {
  direction: 'Row',
  initialSize: '50%', // percentage or pixel value
  minSize: 400,
  maxSize: 800,
}