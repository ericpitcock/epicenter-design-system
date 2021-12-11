import faker from 'faker'
import EpContainer from '@/components/container/EpContainer'
import EpStackedBarChart from './EpStackedBarChart'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

const fakeArray = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.datatype.number({ min: 0, max: 10000, precision: .1 }))
  }
  return arr
}

const fakeCitiesArray = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.address.city())
  }
  return arr
}

const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color')

const options = {
  chart: {
    backgroundColor: undefined,
    style: {
      fontFamily: 'Proxima Nova, sans-serif'
    },
    styledMode: true,
    type: 'bar'
  },
  // colors: [
  //   '#915ce0',
  //   '#ec93b8',
  //   '#7fcc93',
  //   '#b29124',
  //   '#9c511c',
  //   '#52aae0'
  // ],
  credits: {
    enabled: false
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
      name: 'Security Incidents',
      data: fakeArray(12)
    },{
      name: 'Unusual Activity',
      data: fakeArray(12)
    },{
      name: 'Policy',
      data: fakeArray(12)
    },{
      name: 'Recon',
      data: fakeArray(12)
    },{
      name: 'Service',
      data: fakeArray(12)
    },{
      name: 'Other',
      data: fakeArray(12)
    }
  ],
  title: {
    text: undefined
  },
  xAxis: {
    categories: fakeCitiesArray(12),
    labels: {
      style: {
        color: textColor,
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Incidents',
      style: {
        color: textColor,
        fontSize: '12px'
      }
    },
    labels: {
      style: {
        color: textColor,
        fontSize: '12px'
      }
    },
    reversedStacks: false
  }
}

export default {
  title: 'Components/Charts/Highcharts/Stacked Bar Chart',
  component: EpStackedBarChart,
  decorators: [container],
  argTypes: {
    options: {
      defaultValue: options,
      table: {
        disable: true
      }
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = args => ({
  components: { EpContainer, EpStackedBarChart },
  setup() {
    return { args }
  },
  template: `
    <ep-container padding="30px">
      <ep-stacked-bar-chart v-bind="args" />
    </ep-container>
  `
})

export const stackedBarChart = Template.bind({})
