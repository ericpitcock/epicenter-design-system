import EpResizable from '@/components/resizable/EpResizable.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Resizable',
  component: EpResizable,
  argTypes: {
    dragEdge: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    initialSize: {
      control: { type: 'text' },
    },
    minSize: {
      control: { type: 'number' },
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Maximum size of the resizable container.'
    }
  }
}

export const Resizable = args => ({
  components: { EpResizable },
  setup() {
    const resizableRef = ref(null)

    return {
      args,
      resizableRef
    }
  },
  template: `
    <ep-resizable
      v-bind="args"
      @resize="newSize => console.log('Resized to:', newSize)"
    >
      <template #resizable>
        <div style="display: grid; place-items: center; width: 100%; height: 100%; background: lightgray; color: black;">Resizable Panel</div>
      </template>
      <template #sibling>
        <div style="display: grid; place-items: center; width: 100%; height: 100%; background: whitesmoke; color: black;">Sibling Panel</div>
      </template>
    </ep-resizable>
  `
})

Resizable.args = {
  dragEdge: 'right',
  initialSize: '50%', // percentage or pixel value
  minSize: 200,
  maxSize: 600,
}