import faker from 'faker'
import EpContainer from '@/components/container/EpContainer'
import EpStackedColumnChart from './EpStackedColumnChart'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

const categories = [
  'Mobile Adware',
  'Mobile Malware',
  'Adware',
  'Malware',
  'Exploit Tool',
  'Other'
]

const fakeArrayOfDates = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.date.recent().getTime())
  }
  return arr
}

const fakeArrayOfNumbers = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.datatype.number({ min: 0, max: 10000, precision: .1 }))
  }
  return arr
}

const stackedColumnSeries = () => {
  let array = []
  
  categories.forEach((category, index) => {
    array.push({
      name: category,
      data: fakeArrayOfNumbers(30)
    })
  })
  return array
}

const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color')

const options = {
  chart: {
    backgroundColor: undefined,
    style: {
      fontFamily: 'Proxima Nova, sans-serif'
    },
    styledMode: true,
    type: 'column'
  },
  colors: [
    '#915ce0',
    '#ec93b8',
    '#7fcc93',
    '#b29124',
    '#9c511c',
    '#52aae0'
  ],
  credits: {
    enabled: false
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: false,
        // color: textColor,
        // position: 'left',
        verticalAlign: 'top'
      }
    },
    series: {
      groupPadding: 0.2,
      stacking: 'normal',
      // dataLabels: {
      //   enabled: true // IT'S HERE
      // }
    }
  },
  series: stackedColumnSeries(),
  title: {
    text: undefined
  },
  xAxis: {
    categories: fakeArrayOfDates(30),
    labels: {
      formatter: function() {
        // let value = this.value
        var value = new Date(this.value)
        return value.toLocaleDateString({
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      },
      style: {
        color: textColor,
        fontSize: '12px'
      }
    },
    type: 'datetime'
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
  title: 'Components/Charts/Highcharts/Stacked Column Chart',
  component: EpStackedColumnChart,
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
  components: { EpContainer, EpStackedColumnChart },
  setup() {
    return { args }
  },
  template: `
    <ep-container padding="30px">
      <ep-stacked-column-chart v-bind="args" />
    </ep-container>
  `
})

export const stackedColumnChart = Template.bind({})
