import faker from 'faker'
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

// const textColor = getComputedStyle(document.documentElement).getPropertyValue(
//   '--text-color'
// )

const options = {
  chart: {
    // plotBackgroundColor: null,
    // plotBorderWidth: null,
    // plotShadow: false,
    styledMode: true,
    type: 'pie'
  },
  title: {
    text: undefined
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 61.41,
          // sliced: true,
          // selected: true
        },
        {
          name: 'Internet Explorer',
          y: 11.84
        },
        {
          name: 'Firefox',
          y: 10.85
        },
        {
          name: 'Edge',
          y: 4.67
        },
        {
          name: 'Safari',
          y: 4.18
        },
        {
          name: 'Sogou Explorer',
          y: 1.64
        },
        {
          name: 'Opera',
          y: 1.6
        },
        {
          name: 'QQ',
          y: 1.2
        },
        {
          name: 'Other',
          y: 2.61
        }
      ]
    }
  ]
}

export default {
  title: 'Components/Chart',
  component: EpChart,
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

export const Chart = Template.bind({})
