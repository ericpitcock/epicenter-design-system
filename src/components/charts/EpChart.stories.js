import faker from 'faker'
import pieChartOptions from './pieChartOptions'
import stackedBarChartOptions from './stackedBarChartOptions'
import stackedColumnChartOptions from './stackedColumnChartOptions'
import EpContainer from '@/components/container/EpContainer'
import EpChart from './EpChart'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.datatype.number({ min: 0, max: 10000, precision: 0.1 }))
  }
  return arr
}

const fakeCitiesArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.address.city())
  }
  return arr
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
    <ep-container padding="30px">
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
