import EpColumnChart from './EpColumnChart'

// const container = () => {
//   return {
//     template:
//       '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
//   }
// }

export default {
  title: 'Components/Charts/Column Chart',
  component: EpColumnChart,
  // decorators: [container],
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpColumnChart },
  props: Object.keys(argTypes),
  template: '<ep-column-chart v-bind="$props" />'
})

export const ColumnChart = Template.bind({})
