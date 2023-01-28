import EpSparkBar from './EpSparkBar.vue'
import { centered } from '@/helpers/decorators'

export default {
  title: 'Spark Bar',
  component: EpSparkBar,
  decorators: [centered],
}

const Template = args => ({
  components: { EpSparkBar },
  setup() {
    return { args }
  },
  template: '<ep-spark-bar v-bind="args" />'
})

export const SparkBar = Template.bind({})