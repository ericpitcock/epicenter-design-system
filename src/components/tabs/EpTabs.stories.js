import { padded } from '@/helpers/decorators'
import EpTabs from './EpTabs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'

export default {
  title: 'Components/Tabs',
  component: EpTabs,
  decorators: [padded],
  argTypes: {
    
  }
}

const Template = args => ({
  components: { EpTabs, EpContainer, EpHeader },
  setup() {
    return { args }
  },
  // template: '<ep-tabs v-bind="args" />'
  template: `
    <ep-container :useHeader="true" height="100%">
      <template #header>
      <ep-header>
        <template #left>
          <ep-tabs v-bind="args" />
        </template>
        <template #right>
          
        </template>
      </ep-header>
      </template>
    </ep-container>
  `
})

export const Tabs = Template.bind({})
