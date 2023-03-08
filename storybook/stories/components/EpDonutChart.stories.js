import { centered } from '../../helpers/decorators'
import EpDonutChart from '@/components/charts/EpDonutChart.vue'

export default {
  title: 'Components/Charts/Donut Chart',
  component: EpDonutChart,
  decorators: [centered],
  argTypes: {
    animate: {
      control: {
        type: 'boolean'
      }
    },
    width: {
      control: {
        type: 'number'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    },
    margin: {
      control: {
        type: 'number'
      }
    },
    data: {
      control: {
        type: 'object'
      }
    },
    labels: {
      control: {
        type: 'array'
      }
    },
    value: {
      control: {
        type: 'string'
      }
    },
    valueTextClass: {
      control: {
        type: 'string'
      }
    },
  },
};

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