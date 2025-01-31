import EpResizable from '@/components/resizable/EpResizable.vue'
import { ref } from 'vue'

// const containerDecorator = () => {
//   return {
//     template: '<div style="height: 100vh; padding: 30px; display: flex;"><story/></div>'
//   }
// }

export default {
  title: 'Components/Resizable',
  component: EpResizable,
  // decorators: [containerDecorator],
  argTypes: {
    dragEdge: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Determines which edge is draggable for resizing.'
    },
    initialSize: {
      control: { type: 'text' },
      description: 'Initial flex-basis value (e.g., "300px", "40%").'
    },
    minSize: {
      control: { type: 'number' },
      description: 'Minimum size of the resizable container.'
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
        <div style="background: lightgray; width: 100%; height: 100%;">Resizable Panel</div>
      </template>
      <template #sibling>
        <div style="background: whitesmoke; height: 100%;">Sibling Panel</div>
      </template>
    </ep-resizable>
  `
})

Resizable.args = {
  dragEdge: 'right',
  // initialSize: '50%',
  // minSize: 200,
  // maxSize: 600,
}