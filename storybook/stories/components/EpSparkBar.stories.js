import { centeredSurface } from '../../helpers/decorators'
import EpSparkBar from '@/components/spark-bar/EpSparkBar.vue'

export default {
  title: 'Components/Spark Bar',
  component: EpSparkBar,
  decorators: [centeredSurface],
  argTypes: {
    bar: {
      control: {
        type: 'array'
      }
    }
  }
}

export const SparkBar = args => ({
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

SparkBar.args = {
  bar: [12, 30, 29, 10, 81, 89]
}