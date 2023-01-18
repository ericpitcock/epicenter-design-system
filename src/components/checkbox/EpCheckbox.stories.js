import { centered } from '@/helpers/decorators'
import EpCheckbox from './EpCheckbox'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [centered]
}

const Template = (args) => ({
  components: { EpCheckbox },
  setup() {
    return { args }
  },
  template: '<ep-checkbox v-bind="args">Checkbox</ep-checkbox>',
})

export const Checkbox = Template.bind({})