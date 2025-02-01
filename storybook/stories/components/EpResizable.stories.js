import EpResizable from '@/components/resizable/EpResizable.vue'
import { computed, ref } from 'vue'

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
    dragEdge: {
      name: 'Drag Edge',
      control: { type: 'radio' },
      options: ['Top', 'Right', 'Bottom', 'Left'],
      mapping: {
        Top: 'top',
        Right: 'right',
        Bottom: 'bottom',
        Left: 'left'
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
  components: { EpResizable },
  setup() {
    const currentSize = ref(null)

    const onResize = (size) => {
      currentSize.value = size
      console.log('onResize', size)
    }

    const displaySize = computed(() => {
      if (currentSize.value) {
        return `${currentSize.value}px`
      }
      return args.initialSize
    })

    const computedDragEdge = computed(() => {
      return args.direction === 'row' ? 'right' : 'bottom'
    })

    return {
      args,
      computedDragEdge,
      displaySize,
      onResize
    }
  },
  template: `
    <ep-resizable
      :direction="args.direction"
      :drag-edge="computedDragEdge"
      :initial-size="args.initialSize"
      :min-size="args.minSize"
      :max-size="args.maxSize"
      @resize="onResize"
    >
      <template #resizable>
        <div style="display: grid; place-items: center; width: 100%; height: 100%; background: var(--interface-surface); color: var(--text-color);">Resizable Panel {{ displaySize }}</div>
      </template>
      <template #sibling>
        <div style="display: grid; place-items: center; width: 100%; height: 100%; background: var(--interface-bg); color: var(--text-color);">Sibling Panel</div>
      </template>
    </ep-resizable>
  `
})

Resizable.args = {
  direction: 'Row',
  dragEdge: 'Bottom',
  initialSize: '50%', // percentage or pixel value
  minSize: undefined,
  maxSize: undefined,
}