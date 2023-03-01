import pieChartOptions from '@/components/charts/pieChartOptions'
import stackedBarChartOptions from '@/components/charts/stackedBarChartOptions'
import stackedColumnChartOptions from '@/components/charts/stackedColumnChartOptions'
import EpContainer from '@/components/container/EpContainer'
import EpChart from '@/components/charts/EpChart'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Charts',
  component: EpChart,
  decorators: [container],
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = args => ({
  components: { EpContainer, EpChart },
  setup() {
    return { args }
  },
  template: `
    <ep-container maxWidth="120rem" container-padding="3rem">
      <ep-chart v-bind="args" />
    </ep-container>
  `
})

export const PieChart = Template.bind({})
PieChart.args = {
  options: pieChartOptions
}

export const StackedBarChart = Template.bind({})
StackedBarChart.args = {
  options: stackedBarChartOptions
}

export const StackedColumnChart = Template.bind({})
StackedColumnChart.args = {
  options: stackedColumnChartOptions
}
