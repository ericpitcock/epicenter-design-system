import EpSparkBar from './EpSparkBar.vue'
import { centered } from '@/helpers/decorators'

export default {
  title: 'Components/Spark Bar',
  component: EpSparkBar,
  decorators: [centered],
  argTypes: {
    bar: {
      control: {
        type: 'array'
      }
    }
  }
}

const Template = args => ({
  components: { EpSparkBar },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 300px;">
      <ep-spark-bar v-bind="args" />
    </div>
  `
})

export const SparkBar = Template.bind({})

SparkBar.args = {
  bar: [12, 30, 29, 10, 81, 89]
}