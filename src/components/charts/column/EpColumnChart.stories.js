import EpColumnChart from './EpColumnChart'

export default {
  title: 'Components/Charts/Column Chart',
  component: EpColumnChart,
  argTypes: {
  }
}

const Template = (args) => ({
  components: { EpColumnChart },
  setup() {
    return { args }
  },
  template: '<ep-column-chart v-bind="args" />'
})

export const ColumnChart = Template.bind({})
