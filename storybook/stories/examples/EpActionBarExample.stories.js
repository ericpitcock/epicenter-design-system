import { padded } from '../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'

export default {
  title: 'Components/Action Bar/ Action Bar In Context',
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

export const ActionBarInContext = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
    EpFooter,
    EpicenterLogo
  },
  setup() {
    const onClick = ({ item, index }) => {
      console.log('Clicked item', item, 'at index', index)
    }
    return { args, commonActionBarArgs, onClick }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      container-padding="0 3rem"
      content-padding="3rem 0"
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
          <ep-action-bar v-bind="args" @click="onClick" />
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

ActionBarInContext.args = { showDropdownOnHover: true, ...commonActionBarArgs}
