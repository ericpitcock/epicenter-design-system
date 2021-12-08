import moment from 'moment'
import EpChart from './EpChart'

const chartData = [
  {
    x: 1530314354000,
    y: 14,
    id: 1670653642
  },
  {
    x: 1530404372000,
    y: 6,
    id: 1672848997
  },
  {
    x: 1530484737000,
    y: 7,
    id: 1675202222
  },
  {
    x: 1530573554000,
    y: 0,
    id: null
  },
  {
    x: 1530663356000,
    y: 7,
    id: 1679514943
  },
  {
    x: 1530737843000,
    y: 17,
    id: 1681609951
  },
  {
    x: 1530832754000,
    y: 0,
    id: null
  },
  {
    x: 1530923072000,
    y: 15,
    id: 1685530418
  },
  {
    x: 1531014048000,
    y: 7,
    id: 1687824829
  },
  {
    x: 1531077358000,
    y: 14,
    id: 1690118274
  },
  {
    x: 1531167493000,
    y: 14,
    id: 1692209775
  },
  {
    x: 1531265776000,
    y: 3,
    id: 1694492066
  },
  {
    x: 1531340910000,
    y: 6,
    id: 1696510553
  },
  {
    x: 1531437554000,
    y: 0,
    id: null
  },
  {
    x: 1531519526000,
    y: 15,
    id: 1700681975
  },
  {
    x: 1531594590000,
    y: 20,
    id: 1702935206
  },
  {
    x: 1531685781000,
    y: 8,
    id: 1705475744
  },
  {
    x: 1531798062000,
    y: 5,
    id: 1707673151
  },
  {
    x: 1531881763000,
    y: 12,
    id: 1710004644
  },
  {
    x: 1531940145000,
    y: 25,
    id: 1712081726
  },
  {
    x: 1532028161000,
    y: 18,
    id: 1714103908
  },
  {
    x: 1532128754000,
    y: 0,
    id: null
  },
  {
    x: 1532196548000,
    y: 14,
    id: 1718635899
  },
  {
    x: 1532298533000,
    y: 6,
    id: 1721397968
  },
  {
    x: 1532387954000,
    y: 0,
    id: null
  },
  {
    x: 1532467902000,
    y: 16,
    id: 1725788631
  },
  {
    x: 1532540736000,
    y: 6,
    id: 1727659731
  },
  {
    x: 1532625833000,
    y: 14,
    id: 1729924534
  },
  {
    x: 1532727730000,
    y: 21,
    id: 1732126273
  },
  {
    x: 1532799429000,
    y: 26,
    id: 1734197179
  },
  {
    x: 1532906354000,
    y: 0,
    id: null
  },
  {
    x: 1532999180000,
    y: 1,
    id: 1739058238
  },
  {
    x: 1533080143000,
    y: 4,
    id: 1741332855
  }
]

const options = {
  chart: {
    style: {
      fontFamily: 'GTAmerica-CondensedRegular'
    },
    margin: 0,
    panning: {
      enabled: true,
      type: 'x'
    },
    panKey: 'shift',
    zoomType: 'x'
  },
  rangeSelector: {
    enabled: false
  },
  title: {
    text: undefined
  },
  xAxis: {
    type: 'datetime',
    crosshair: false,
    events: {
      setExtremes: event => {
        // this.syncExtremes(event)
        // console.log(event.min)
      },
      afterSetExtremes: event => {
        // console.log('done dragging')
      }
    },
    // endOnTick: true,
    max: new Date().getTime()
    // min of a week
    // minRange: 604800000
  },
  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      style: {
        color: 'black',
        fontSize: '12px'
      }
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      groupPadding: 0,
      point: {
        events: {
          click: event => {
            // console.log(event)
            // if (event.point.id === null) return
            // this.updateSelectedRide(event.point.id)
          }
        }
      }
    }
  },
  series: [
    {
      id: 'distance',
      type: 'column',
      name: 'Distance',
      data: chartData,
      color: 'red',
      states: {
        hover: {
          color: 'purple'
        }
      },
      visible: true
    }
    // {
    //   id: 'average_speed',
    //   type: 'column',
    //   name: 'Speed',
    //   data: this.chartData(),
    //   color: 'red',
    //   states: {
    //     hover: {
    //       color: 'purple'
    //     }
    //   },
    //   visible: true
    // }
  ],
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  }
}

const extremes = {
  min: moment().subtract(3, 'months').unix(Number) * 1000,
  max: new Date().getTime()
}

export default {
  title: 'Components/Chart',
  component: EpChart,
  // decorators: [container],
  argTypes: {
    options: {
      defaultValue: options,
      table: {
        disable: true
      }
    },
    extremes: {
      defaultValue: extremes,
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
  components: { EpChart },
  setup() {
    return { chartData, options, args }
  },
  template: '<ep-chart v-bind="args" />'
})

export const Chart = Template.bind({})
