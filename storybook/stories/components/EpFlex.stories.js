import { paddedSurface } from '../../helpers/decorators.js'
import EpFlex from '@/components/flexbox/EpFlex.vue'

export default {
  title: 'Components/Flex',
  component: EpFlex,
  decorators: [paddedSurface],
  argTypes: {
    flexProps: {
      name: 'Flex Props',
      control: {
        type: 'string'
      }
    },
  }
}

export const Flex = args => ({
  components: { EpFlex },
  setup() {
    return { args }
  },
  template: `
    <ep-flex v-bind="args" style="background: red;">
      <div
        v-for="n in 5"
        :key="n"
        style="width: 50px; height: 50px; background-color: #f0f0f0; padding: 10px;"
      >
        Item {{ n }}
      </div>
    </ep-flex>
  `
})

// width
// height
// flexFlow
// justifyContent
// alignItems
// alignContent
// gap
// padding

Flex.args = {
  flexProps: ',,row nowrap,space-around,center,,10px,10px'
}