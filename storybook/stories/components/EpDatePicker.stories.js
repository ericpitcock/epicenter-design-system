import { padded } from '../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpDatePicker from '@/components/date-picker/EpDatePicker'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'

export default {
  title: 'Components/Date Picker',
  component: EpDatePicker,
  decorators: [padded],
  argTypes: {
    dateFormat: {
      name: 'Date Format',
      control: {
        type: 'text'
      }
    },
    mode: {
      name: 'Mode',
      options: ['single', 'multiple', 'range'],
      control: {
        type: 'select',
        labels: {
          single: 'Single',
          multiple: 'Multiple',
          range: 'Range'
        }
      }
    }
  }
}

export const DatePicker = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpDatePicker,
    EpFooter,
    EpHeader
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      container-padding="0 3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-date-picker v-bind="args" />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})
