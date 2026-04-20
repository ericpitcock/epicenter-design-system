import { EpChart, EpContainer } from '@ericpitcock/epicenter-components-vue'

import pieChartOptions from './pieChartOptions.js'
import stackedBarChartOptions from './stackedBarChartOptions.js'
import stackedColumnChartOptions from './stackedColumnChartOptions.js'

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
  },
  argTypes: {
    options: {
      table: { disable: true }
    },
    chartColors: {
      table: { disable: true }
    },
    height: {
      table: { disable: true }
    }
  },
}

const Template = args => ({
  components: { EpContainer, EpChart },
  setup() {
    return { args }
  },
  template: `
    <ep-container
      maxWidth="120rem"
      container-padding="3rem"
      background-color="var(--interface-surface)"
    >
      <ep-chart v-bind="args" />
    </ep-container>
  `
})

export const PieChart = Template.bind({})
PieChart.args = {
  options: pieChartOptions,
  chartColors: {
    // override or add colors beyond the default 0-13
    // '--highcharts-color-0': 'red',
  }
}

export const StackedBarChart = Template.bind({})
StackedBarChart.args = {
  options: stackedBarChartOptions
}

export const StackedColumnChart = Template.bind({})
StackedColumnChart.args = {
  options: stackedColumnChartOptions
}
