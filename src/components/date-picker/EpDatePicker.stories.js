import EpDatePicker from './EpDatePicker'
import { padded } from '@/helpers/decorators'

export default {
  title: 'Components/Date Picker',
  component: EpDatePicker,
  decorators: [padded],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    outlined: {
      name: 'Outlined',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    kind: {
      name: 'Kind',
      options: ['primary', 'secondary', 'ghost', 'danger', 'warning', 'success'],
      control: {
        type: 'radio',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          ghost: 'Ghost',
          danger: 'Danger',
          warning: 'Warning',
          success: 'Success'
        }
      },
      defaultValue: 'primary'
    },
    size: {
      name: 'Size',
      options: ['default', 'small'],
      control: {
        type: 'radio',
        labels: {
          default: 'Default',
          small: 'Small'
        }
      },
      defaultValue: 'default'
    },
    title: {
      name: 'Title(Tooltip)',
      control: {
        type: 'text'
      },
      defaultValue: 'Tooltip'
    },
    value: {
      name: 'Value',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      },
      defaultValue: 'Select Date'
    },
    format: {
      name: 'Format',
      control: {
        type: 'text'
      },
      defaultValue: 'yyyy-MM-dd'
    },
    minDate: {
      name: 'Min Date',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    maxDate: {
      name: 'Max Date',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledDates: {
      name: 'Disabled Dates',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01,2020-01-02,2020-01-03'
    },
    disabledWeekDays: {
      name: 'Disabled Week Days',
      control: {
        type: 'text'
      },
      defaultValue: '0,6'
    },
    disabledBeforeToday: {
      name: 'Disabled Before Today',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    disabledAfterToday: {
      name: 'Disabled After Today',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    disabledBeforeDate: {
      name: 'Disabled Before Date',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterDate: {
      name: 'Disabled After Date',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeDays: {
      name: 'Disabled Before Days',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterDays: {
      name: 'Disabled After Days',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeMonths: {
      name: 'Disabled Before Months',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterMonths: {
      name: 'Disabled After Months',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeYears: {
      name: 'Disabled Before Years',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterYears: {
      name: 'Disabled After Years',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeWeeks: {
      name: 'Disabled Before Weeks',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterWeeks: {
      name: 'Disabled After Weeks',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeHours: {
      name: 'Disabled Before Hours',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterHours: {
      name: 'Disabled After Hours',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeMinutes: {
      name: 'Disabled Before Minutes',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterMinutes: {
      name: 'Disabled After Minutes',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeSeconds: {
      name: 'Disabled Before Seconds',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterSeconds: {
      name: 'Disabled After Seconds',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeMilliseconds: {
      name: 'Disabled Before Milliseconds',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledAfterMilliseconds: {
      name: 'Disabled After Milliseconds',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    disabledBeforeTime: {
      name: 'Disabled Before Time',
      control: {
        type: 'text'
      },
      defaultValue: '00:00:00'
    },
    disabledAfterTime: {
      name: 'Disabled After Time',
      control: {
        type: 'text'
      },
      defaultValue: '23:59:59'
    },
    disabledBeforeDateTime: {
      name: 'Disabled Before Date Time',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01 00:00:00'
    },
    disabledAfterDateTime: {
      name: 'Disabled After Date Time',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31 23:59:59'
    },
    disabledBeforeWeekDay: {
      name: 'Disabled Before Week Day',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterWeekDay: {
      name: 'Disabled After Week Day',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeMonthDay: {
      name: 'Disabled Before Month Day',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterMonthDay: {
      name: 'Disabled After Month Day',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeMonth: {
      name: 'Disabled Before Month',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterMonth: {
      name: 'Disabled After Month',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeYear: {
      name: 'Disabled Before Year',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterYear: {
      name: 'Disabled After Year',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeWeek: {
      name: 'Disabled Before Week',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterWeek: {
      name: 'Disabled After Week',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeHour: {
      name: 'Disabled Before Hour',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterHour: {
      name: 'Disabled After Hour',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeMinute: {
      name: 'Disabled Before Minute',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterMinute: {
      name: 'Disabled After Minute',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeSecond: {
      name: 'Disabled Before Second',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterSecond: {
      name: 'Disabled After Second',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeMillisecond: {
      name: 'Disabled Before Millisecond',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterMillisecond: {
      name: 'Disabled After Millisecond',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeDate: {
      name: 'Disabled Before Date',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfterDate: {
      name: 'Disabled After Date',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBefore: {
      name: 'Disabled Before',
      control: {
        type: 'text'
      },
      defaultValue: '2020-01-01'
    },
    disabledAfter: {
      name: 'Disabled After',
      control: {
        type: 'text'
      },
      defaultValue: '2020-12-31'
    },
    disabledBeforeWeekDayName: {
      name: 'Disabled Before Week Day Name',
      control: {
        type: 'text'
      },
      defaultValue: 'Monday'
    },
    disabledAfterWeekDayName: {
      name: 'Disabled After Week Day Name',
      control: {
        type: 'text'
      },
      defaultValue: 'Friday'
    },
    disabledBeforeMonthName: {
      name: 'Disabled Before Month Name',
      control: {
        type: 'text'
      },
      defaultValue: 'January'
    },
    disabledAfterMonthName: {
      name: 'Disabled After Month Name',
      control: {
        type: 'text'
      },
      defaultValue: 'December'
    },
    disabledBeforeHourName: {
      name: 'Disabled Before Hour Name',
      control: {
        type: 'text'
      },
      defaultValue: '00:00:00'
    },
    disabledAfterHourName: {
      name: 'Disabled After Hour Name',
      control: {
        type: 'text'
      },
      defaultValue: '23:59:59'
    }
  }
}

const Template = args => ({
  components: { EpDatePicker },
  setup() {
    return { args }
  },
  template: '<ep-date-picker />'
})

export const DatePicker = Template.bind({})
