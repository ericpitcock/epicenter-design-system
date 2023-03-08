import { centered } from '../../helpers/decorators'
import EpDonutChart from '@/components/charts/EpDonutChart.vue'

export default {
  title: 'Components/Charts/Donut Chart',
  component: EpDonutChart,
  decorators: [centered],
  argTypes: {
  },
};

export const DonutChart = args => ({
  components: { EpDonutChart },
  setup() {
    return { args }
  },
  template: '<ep-donut-chart v-bind="args" />'
})