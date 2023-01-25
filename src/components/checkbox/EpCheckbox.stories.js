import { padded } from '@/helpers/decorators'
import EpCheckbox from './EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [padded]
}

const Template = args => ({
  components: {
    EpCheckbox,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return { args }
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
          <ep-checkbox v-bind="args">Checkbox</ep-checkbox>
        </template>
      </ep-header>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Checkbox = Template.bind({})