import { padded } from '../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'

export default {
  title: 'Components/Action Bar',
  component: EpActionBar,
  decorators: [padded],
  argTypes: {
    items: {
      control: {
        type: 'array'
      }
    }
  }
}

const Template = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
    EpFooter,
    EpicenterLogo
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <div style="width: 27px;">
            <epicenter-logo
              faceColor="transparent"
              highlightColor="transparent"
              shadowColor="transparent"
              :strokeWidth="6"
              strokeColor="var(--sky-300)"
            />
          </div>
        </template>
        <template #right>
          <ep-action-bar v-bind="args" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div class="copy-block">
          <h1>Action Bar</h1>
          <p>An action bar is a graphical control element that provides a set of commonly used actions within a web application. It is typically displayed as a horizontal row of icon buttons and dropdown menus, allowing users to easily access and perform specific actions within the app.</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const ActionBar = Template.bind({})

ActionBar.args = commonActionBarArgs
