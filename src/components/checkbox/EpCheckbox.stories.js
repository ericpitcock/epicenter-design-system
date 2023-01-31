import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpCheckbox from './EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [padded]
}

const Template = args => ({
  components: {
    EpActionBar,
    EpCheckbox,
    EpContainer,
    EpFooter,
    EpHeader
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  // template: '<ep-checkbox v-bind="args">Checkbox</ep-checkbox>',
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <h1>Fonts</h1>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
      <ep-checkbox v-bind="commonActionBarArgs">Checkbox</ep-checkbox>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Checkbox = Template.bind({})