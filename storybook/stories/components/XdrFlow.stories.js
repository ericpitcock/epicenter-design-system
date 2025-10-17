import { paddedSurface } from '../../helpers/decorators.js'
import XdrFlow from './XdrFlow.vue'


export default {
  title: 'Components/XDR',
  component: XdrFlow,
  decorators: [paddedSurface],
  argTypes: {
  }
}

export const XDR = (args) => ({
  components: { XdrFlow },
  setup() {
    return { args }
  },
  template: `<xdr-flow />`
})