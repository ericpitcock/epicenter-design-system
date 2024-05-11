import { centeredBg } from '../../helpers/decorators.js'
import EpDonutChart from '@/components/charts/EpDonutChart.vue'

export default {
  title: 'Components/Charts/Donut Chart',
  component: EpDonutChart,
  decorators: [centeredBg],
  argTypes: {
    animate: {
      table: { disable: true }
    },
    width: {
      table: { disable: true }
    },
    height: {
      table: { disable: true }
    },
    margin: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    labels: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    valueTextClass: {
      table: { disable: true }
    },
  },
}

export const DonutChart = args => ({
  components: { EpDonutChart },
  setup() {
    return { args }
  },
  template: '<ep-donut-chart v-bind="args" />'
})

DonutChart.args = {
  data: [28, 33, 44, 51],
  labels: ['Active', 'Inactive', 'Archived', 'Unknown'],
  value: '156',
}