import { paddedBg } from '../../helpers/decorators.js'
import XdrFlow from './XdrFlow.vue'


export default {
  title: 'Components/XDR',
  component: XdrFlow,
  decorators: [paddedBg],
  argTypes: {
  }
}

export const Xdr = (args) => ({
  components: { XdrFlow },
  setup() {
    return { args }
  },
  template: `<xdr-flow />`
})