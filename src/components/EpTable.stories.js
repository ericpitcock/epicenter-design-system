import EpTable from './EpTable'

const columns = {
  start_date: 'Date',
  name: 'Name',
  distance: 'Distance',
  total_elevation_gain: 'Elevation',
  type: 'Ride Type',
  average_speed: 'Avg Speed',
  average_watts: 'Avg Watts'
}

const data = [
  {
    id: 3595254034,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-10T21:43:09Z',
        template: '06/10/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 14665.5,
        template: '9 miles'
      },
      total_elevation_gain: {
        value: 42,
        template: '138 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 8.062,
        template: '18 mph'
      },
      average_watts: {
        value: 113.3,
        template: null
      }
    }
  },
  {
    id: 3600040882,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-11T19:40:20Z',
        template: '06/11/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 29970.3,
        template: '19 miles'
      },
      total_elevation_gain: {
        value: 275,
        template: '902 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.768,
        template: '13 mph'
      },
      average_watts: {
        value: 107.8,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-06-12T23:19:14Z',
        template: '06/12/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3610368162,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-13T22:10:54Z',
        template: '06/13/2020'
      },
      name: {
        value: 'Yorkshire',
        template: 'Yorkshire'
      },
      distance: {
        value: 11455.4,
        template: '7 miles'
      },
      total_elevation_gain: {
        value: 204,
        template: '669 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.899,
        template: '13 mph'
      },
      average_watts: {
        value: 114,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-06-14T23:19:14Z',
        template: '06/14/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3621271931,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-15T23:57:37Z',
        template: '06/15/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 16246.4,
        template: '10 miles'
      },
      total_elevation_gain: {
        value: 40,
        template: '131 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.89,
        template: '18 mph'
      },
      average_watts: {
        value: 109.9,
        template: null
      }
    }
  },
  {
    id: 3626450682,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-16T23:05:07Z',
        template: '06/16/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 24275.8,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 66,
        template: '217 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 8.218,
        template: '18 mph'
      },
      average_watts: {
        value: 115.7,
        template: null
      }
    }
  },
  {
    id: 3631198235,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-17T21:25:14Z',
        template: '06/17/2020'
      },
      name: {
        value: 'Richmond',
        template: 'Richmond'
      },
      distance: {
        value: 18613.3,
        template: '12 miles'
      },
      total_elevation_gain: {
        value: 137,
        template: '449 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.214,
        template: '16 mph'
      },
      average_watts: {
        value: 116.1,
        template: null
      }
    }
  },
  {
    id: 3635762295,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-18T20:17:56Z',
        template: '06/18/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 24368,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 305,
        template: '1001 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.25,
        template: '16 mph'
      },
      average_watts: {
        value: 121.5,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-06-19T23:19:14Z',
        template: '06/19/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3646027212,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-20T22:26:43Z',
        template: '06/20/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 24219.4,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 257,
        template: '843 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.509,
        template: '12 mph'
      },
      average_watts: {
        value: 109.2,
        template: null
      }
    }
  },
  {
    id: 3651337526,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-21T21:19:39Z',
        template: '06/21/2020'
      },
      name: {
        value: 'Richmond',
        template: 'Richmond'
      },
      distance: {
        value: 19515.7,
        template: '12 miles'
      },
      total_elevation_gain: {
        value: 48,
        template: '157 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.816,
        template: '18 mph'
      },
      average_watts: {
        value: 112.8,
        template: null
      }
    }
  },
  {
    id: 3655705053,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-22T20:49:36Z',
        template: '06/22/2020'
      },
      name: {
        value: 'Yorkshire',
        template: 'Yorkshire'
      },
      distance: {
        value: 5120.9,
        template: '3 miles'
      },
      total_elevation_gain: {
        value: 69,
        template: '226 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.668,
        template: '15 mph'
      },
      average_watts: {
        value: 111.7,
        template: null
      }
    }
  },
  {
    id: 3660901177,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-23T20:14:15Z',
        template: '06/23/2020'
      },
      name: {
        value: 'Yorkshire',
        template: 'Yorkshire'
      },
      distance: {
        value: 6644.1,
        template: '4 miles'
      },
      total_elevation_gain: {
        value: 85,
        template: '279 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.821,
        template: '15 mph'
      },
      average_watts: {
        value: 102,
        template: null
      }
    }
  },
  {
    id: 3666482026,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-24T21:02:49Z',
        template: '06/24/2020'
      },
      name: {
        value: 'Yorkshire',
        template: 'Yorkshire'
      },
      distance: {
        value: 29044.7,
        template: '18 miles'
      },
      total_elevation_gain: {
        value: 497,
        template: '1631 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.919,
        template: '13 mph'
      },
      average_watts: {
        value: 104.9,
        template: null
      }
    }
  },
  {
    id: 3671231660,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-25T21:10:49Z',
        template: '06/25/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 14619.7,
        template: '9 miles'
      },
      total_elevation_gain: {
        value: 65,
        template: '213 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.056,
        template: '16 mph'
      },
      average_watts: {
        value: 87.8,
        template: null
      }
    }
  },
  {
    id: 3675675426,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-26T21:05:25Z',
        template: '06/26/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 24628,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 171,
        template: '561 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.665,
        template: '15 mph'
      },
      average_watts: {
        value: 96,
        template: null
      }
    }
  },
  {
    id: 3680466874,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-27T20:11:28Z',
        template: '06/27/2020'
      },
      name: {
        value: 'Richmond',
        template: 'Richmond'
      },
      distance: {
        value: 22754,
        template: '14 miles'
      },
      total_elevation_gain: {
        value: 156,
        template: '512 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.217,
        template: '14 mph'
      },
      average_watts: {
        value: 88.3,
        template: null
      }
    }
  },
  {
    id: 3686007732,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-28T21:02:03Z',
        template: '06/28/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 17780.9,
        template: '11 miles'
      },
      total_elevation_gain: {
        value: 119,
        template: '390 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.256,
        template: '12 mph'
      },
      average_watts: {
        value: 99.5,
        template: null
      }
    }
  },
  {
    id: 3690177982,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-29T21:03:16Z',
        template: '06/29/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 21177.1,
        template: '13 miles'
      },
      total_elevation_gain: {
        value: 196,
        template: '643 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.575,
        template: '15 mph'
      },
      average_watts: {
        value: 100.1,
        template: null
      }
    }
  },
  {
    id: 3695233985,
    empty: false,
    data: {
      start_date: {
        value: '2020-06-30T21:35:10Z',
        template: '06/30/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 25993.4,
        template: '16 miles'
      },
      total_elevation_gain: {
        value: 104,
        template: '341 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.267,
        template: '16 mph'
      },
      average_watts: {
        value: 100,
        template: null
      }
    }
  },
  {
    id: 3700192076,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-01T21:03:46Z',
        template: '07/01/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 32246,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 273,
        template: '896 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.164,
        template: '14 mph'
      },
      average_watts: {
        value: 91.2,
        template: null
      }
    }
  },
  {
    id: 3705041415,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-02T21:27:26Z',
        template: '07/02/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 33902.4,
        template: '21 miles'
      },
      total_elevation_gain: {
        value: 51,
        template: '167 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.608,
        template: '17 mph'
      },
      average_watts: {
        value: 93.8,
        template: null
      }
    }
  },
  {
    id: 3709180013,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-03T19:56:08Z',
        template: '07/03/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 25884.3,
        template: '16 miles'
      },
      total_elevation_gain: {
        value: 457,
        template: '1499 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.339,
        template: '12 mph'
      },
      average_watts: {
        value: 98.7,
        template: null
      }
    }
  },
  {
    id: 3714400545,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-04T21:20:21Z',
        template: '07/04/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 26076.1,
        template: '16 miles'
      },
      total_elevation_gain: {
        value: 325,
        template: '1066 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.407,
        template: '14 mph'
      },
      average_watts: {
        value: 99.8,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-05T23:19:14Z',
        template: '07/05/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3724248502,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-06T21:20:36Z',
        template: '07/06/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 42434.5,
        template: '26 miles'
      },
      total_elevation_gain: {
        value: 211,
        template: '692 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.379,
        template: '17 mph'
      },
      average_watts: {
        value: 98.8,
        template: null
      }
    }
  },
  {
    id: 3729150377,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-07T21:08:28Z',
        template: '07/07/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 24548.5,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 181,
        template: '594 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.176,
        template: '16 mph'
      },
      average_watts: {
        value: 93.6,
        template: null
      }
    }
  },
  {
    id: 3733997461,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-08T21:23:41Z',
        template: '07/08/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 27729,
        template: '17 miles'
      },
      total_elevation_gain: {
        value: 216,
        template: '709 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.632,
        template: '15 mph'
      },
      average_watts: {
        value: 100.2,
        template: null
      }
    }
  },
  {
    id: 3738128943,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-09T18:19:20Z',
        template: '07/09/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 30620.3,
        template: '19 miles'
      },
      total_elevation_gain: {
        value: 260,
        template: '853 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.349,
        template: '14 mph'
      },
      average_watts: {
        value: 91.7,
        template: null
      }
    }
  },
  {
    id: 3742996430,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-10T21:10:45Z',
        template: '07/10/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 24469,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 134,
        template: '440 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.186,
        template: '16 mph'
      },
      average_watts: {
        value: 106.4,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-11T23:19:14Z',
        template: '07/11/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3753942833,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-12T22:23:24Z',
        template: '07/12/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 32456,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 270,
        template: '886 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.545,
        template: '15 mph'
      },
      average_watts: {
        value: 106.8,
        template: null
      }
    }
  },
  {
    id: 3758132271,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-13T20:22:52Z',
        template: '07/13/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 38858.1,
        template: '24 miles'
      },
      total_elevation_gain: {
        value: 282,
        template: '925 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.776,
        template: '15 mph'
      },
      average_watts: {
        value: 103.1,
        template: null
      }
    }
  },
  {
    id: 3763322050,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-14T20:58:53Z',
        template: '07/14/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 26145.2,
        template: '16 miles'
      },
      total_elevation_gain: {
        value: 378,
        template: '1240 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.048,
        template: '14 mph'
      },
      average_watts: {
        value: 96.9,
        template: null
      }
    }
  },
  {
    id: 3768292149,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-15T20:50:40Z',
        template: '07/15/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 32561.9,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 494,
        template: '1621 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.194,
        template: '14 mph'
      },
      average_watts: {
        value: 106.2,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-16T23:19:14Z',
        template: '07/16/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-17T23:19:14Z',
        template: '07/17/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3782775762,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-18T22:40:32Z',
        template: '07/18/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 32454.7,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 130,
        template: '427 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.473,
        template: '17 mph'
      },
      average_watts: {
        value: 106.5,
        template: null
      }
    }
  },
  {
    id: 3788140771,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-19T21:35:31Z',
        template: '07/19/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 24294.1,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 234,
        template: '768 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.366,
        template: '14 mph'
      },
      average_watts: {
        value: 106.1,
        template: null
      }
    }
  },
  {
    id: 3792608964,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-20T20:49:40Z',
        template: '07/20/2020'
      },
      name: {
        value: 'Innsbruck',
        template: 'Innsbruck'
      },
      distance: {
        value: 24570.3,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 496,
        template: '1627 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 4.988,
        template: '11 mph'
      },
      average_watts: {
        value: 105.7,
        template: null
      }
    }
  },
  {
    id: 3797936688,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-21T21:10:24Z',
        template: '07/21/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 24514.1,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 244,
        template: '801 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.643,
        template: '15 mph'
      },
      average_watts: {
        value: 111.8,
        template: null
      }
    }
  },
  {
    id: 3803103239,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-22T20:23:11Z',
        template: '07/22/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 48577.5,
        template: '30 miles'
      },
      total_elevation_gain: {
        value: 549,
        template: '1801 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.212,
        template: '14 mph'
      },
      average_watts: {
        value: 108,
        template: null
      }
    }
  },
  {
    id: 3806021305,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-23T19:28:31Z',
        template: '07/23/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 32488.8,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 82,
        template: '269 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 8.118,
        template: '18 mph'
      },
      average_watts: {
        value: 115.4,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-24T23:19:14Z',
        template: '07/24/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3812754340,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-25T20:52:12Z',
        template: '07/25/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 32698.9,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 461,
        template: '1512 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.615,
        template: '15 mph'
      },
      average_watts: {
        value: 109.3,
        template: null
      }
    }
  },
  {
    id: 3816727551,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-26T20:27:12Z',
        template: '07/26/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 35604.5,
        template: '22 miles'
      },
      total_elevation_gain: {
        value: 556,
        template: '1824 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.998,
        template: '13 mph'
      },
      average_watts: {
        value: 104.6,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-27T23:19:14Z',
        template: '07/27/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3830026895,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-28T21:22:20Z',
        template: '07/28/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 24400.3,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 410,
        template: '1345 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.004,
        template: '13 mph'
      },
      average_watts: {
        value: 111.6,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-29T23:19:14Z',
        template: '07/29/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-07-30T23:19:14Z',
        template: '07/30/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3844927165,
    empty: false,
    data: {
      start_date: {
        value: '2020-07-31T19:17:26Z',
        template: '07/31/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 40517.8,
        template: '25 miles'
      },
      total_elevation_gain: {
        value: 116,
        template: '381 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 8.055,
        template: '18 mph'
      },
      average_watts: {
        value: 115.4,
        template: null
      }
    }
  },
  {
    id: 3850530584,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-01T20:33:14Z',
        template: '08/01/2020'
      },
      name: {
        value: 'London',
        template: 'London'
      },
      distance: {
        value: 56599.6,
        template: '35 miles'
      },
      total_elevation_gain: {
        value: 480,
        template: '1575 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.543,
        template: '15 mph'
      },
      average_watts: {
        value: 108.5,
        template: null
      }
    }
  },
  {
    id: 3855810205,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-02T19:46:38Z',
        template: '08/02/2020'
      },
      name: {
        value: 'Innsbruck',
        template: 'Innsbruck'
      },
      distance: {
        value: 40374,
        template: '25 miles'
      },
      total_elevation_gain: {
        value: 616,
        template: '2021 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.959,
        template: '13 mph'
      },
      average_watts: {
        value: 109.9,
        template: null
      }
    }
  },
  {
    id: 3860200815,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-03T20:34:22Z',
        template: '08/03/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 32530,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 51,
        template: '167 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 8.876,
        template: '20 mph'
      },
      average_watts: {
        value: 135.5,
        template: null
      }
    }
  },
  {
    id: 3865155321,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-04T20:06:49Z',
        template: '08/04/2020'
      },
      name: {
        value: 'NYC',
        template: 'NYC'
      },
      distance: {
        value: 29027.4,
        template: '18 miles'
      },
      total_elevation_gain: {
        value: 327,
        template: '1073 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.38,
        template: '17 mph'
      },
      average_watts: {
        value: 115.7,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-08-05T23:19:14Z',
        template: '08/05/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3875443512,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-06T20:00:44Z',
        template: '08/06/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 43679.2,
        template: '27 miles'
      },
      total_elevation_gain: {
        value: 665,
        template: '2182 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 5.711,
        template: '13 mph'
      },
      average_watts: {
        value: 116.3,
        template: null
      }
    }
  },
  {
    id: null,
    empty: true,
    data: {
      start_date: {
        value: '2020-08-07T23:19:14Z',
        template: '08/07/2020'
      },
      name: {
        value: null
      },
      distance: {
        value: null,
        template: '0 miles'
      },
      total_elevation_gain: {
        value: null,
        template: '0 ft'
      },
      type: {
        value: null,
        template: null
      },
      average_speed: {
        value: null,
        template: '0 mph'
      },
      average_watts: {
        value: null,
        template: null
      }
    }
  },
  {
    id: 3885136417,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-08T22:41:16Z',
        template: '08/08/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 24387.5,
        template: '15 miles'
      },
      total_elevation_gain: {
        value: 259,
        template: '850 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 6.294,
        template: '14 mph'
      },
      average_watts: {
        value: 110,
        template: null
      }
    }
  },
  {
    id: 3890040883,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-09T20:27:16Z',
        template: '08/09/2020'
      },
      name: {
        value: 'Watopia',
        template: 'Watopia'
      },
      distance: {
        value: 32519.5,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 79,
        template: '259 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 8.522,
        template: '19 mph'
      },
      average_watts: {
        value: 125.9,
        template: null
      }
    }
  },
  {
    id: 3894419257,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-10T20:27:27Z',
        template: '08/10/2020'
      },
      name: {
        value: 'Paris',
        template: 'Paris'
      },
      distance: {
        value: 32342.4,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 184,
        template: '604 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.998,
        template: '18 mph'
      },
      average_watts: {
        value: 122.7,
        template: null
      }
    }
  },
  {
    id: 3899513739,
    empty: false,
    data: {
      start_date: {
        value: '2020-08-11T20:51:03Z',
        template: '08/11/2020'
      },
      name: {
        value: 'France',
        template: 'France'
      },
      distance: {
        value: 32481,
        template: '20 miles'
      },
      total_elevation_gain: {
        value: 171,
        template: '561 ft'
      },
      type: {
        value: 'VirtualRide',
        template: null
      },
      average_speed: {
        value: 7.918,
        template: '18 mph'
      },
      average_watts: {
        value: 127.5,
        template: null
      }
    }
  }
]

const container = () => {
  return {
    template: '<div style="background: #f9f9f9; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Table',
  component: EpTable,
  decorators: [container],
  argTypes: {
    columns: {
      defaultValue: columns,
      table: {
        disable: true
      }
    },
    data: {
      defaultValue: data,
      table: {
        disable: true
      }
    },
    fullWidth: {
      name: 'Full Width',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    selected: {
      name: 'Selected ID',
      control: {
        type: 'number'
      },
      defaultValue: 3899513739
    },
    hideEmpty: {
      name: 'Hide Empty',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpTable },
  props: Object.keys(argTypes),
  template: `
  <EpTable
    :columns="columns"
    :data="data"
    :fullWidth="fullWidth"
    :hideEmpty="hideEmpty"
    :selectable="selectable"
    :selected="selected"
    :stickyHeader="stickyHeader"
    :striped="striped"
  />
  `
})

export const Table = Template.bind({})

// OLD
// export default {
//   title: 'Components/EpTable',
//   component: EpTable,
//   decorators: [withKnobs, container]
// }

// export const Basic = () => ({
//   components: { EpTable },
//   template: '<EpTable :columns="columns" :data="data" :hideEmpty="hideEmpty" :selectable="selectable" :selected="selected" :stickyHeader="stickyHeader" :striped="striped" />',
//   props: {
//     // columns: { default: object('Columns', columns) },
//     columns: {
//       default: () => columns,
//     },
//     // data: { default: array('Data', data) },
//     data: {
//       default: () => data,
//     },
//     selectable: { default: boolean('Selectable', false) },
//     selected: { default: number('Selected ID', 3899513739) },
//     hideEmpty: { default: boolean('Hide empty', false) },
//     stickyHeader: { default: boolean('Sticky header', true) },
//     striped: { default: boolean('Striped', false) }
//   },
//   methods: {}
// })
