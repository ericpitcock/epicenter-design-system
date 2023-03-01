import { padded } from '../../helpers/decorators'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpTabs from '@/components/tabs/EpTabs'
import EpTabContent from '@/components/tabs/EpTabContent'
import { ref } from 'vue'

export default {
  title: 'Components/Tabs',
  component: EpTabs,
  decorators: [padded],
  argTypes: {
    items: {
      control: {
        type: 'array'
      }
    }
  }
}

const tabItems = ['Ch. 1: Jail Guy Joe’s Big Heist', 'Ch. 2: Dumpster Diving', 'Ch. 3: Caught Red-Handed']

const Template = args => ({
  components: {
    EpContainer,
    EpFooter,
    EpHeader,
    EpTabs,
    EpTabContent
  },
  setup() {
    const activeTab = ref(0)

    const setActiveTab = index => {
      activeTab.value = index
    }

    return {
      activeTab,
      args,
      setActiveTab,
      tabItems
    }
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
          <ep-tabs v-bind="args" @tab-click="setActiveTab" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-tab-content :items="tabItems" :active-tab="activeTab">
        <template #tab-0>
          <div class="copy-block">
            <h1>Jail Guy Joe’s Big Heist</h1>
            <p>Jail Guy Joe, a notorious criminal who earned his moniker from spending years behind bars, decided to pull off his biggest heist yet by robbing a bank. With a mask on his face and a gun in his hand, he walked into the bank and demanded all the money. The tellers were so scared, they gave him everything he wanted. Jail Guy Joe was feeling pretty proud of himself... until he heard the police sirens outside!</p>
          </div>
        </template>
        <template #tab-1>
          <div class="copy-block">
            <h1>Dumpster Diving</h1>
            <p>Jail Guy Joe knew he had to make a quick escape, so he jumped out the window and landed in a nearby dumpster. But little did he know, that dumpster was full of old lettuce and grapes! Every time he tried to climb out, he slipped and fell back down. It was a stinky, slimy mess, but Jail Guy Joe wasn't giving up yet.</p>
          </div>
        </template>
        <template #tab-2>
          <div class="copy-block">
            <h1>Caught Red-Handed</h1>
            <p>As the police drew closer, Jail Guy Joe realized he was trapped. He tried to climb out of the dumpster one last time, but he slipped and fell into a pile of rotten tomatoes. That's when the police found him, covered in lettuce and tomato guts, holding a bag of stolen money. Jail Guy Joe was caught red-handed! He went back to jail, where he learned that crime doesn't pay (especially when you're covered in old vegetables).</p>
          </div>
        </template>
        </ep-tab-content>
      </template>
      <template #footer>
        <ep-footer>
          <template #left>
            <p class="font-size--tiny text--subtle">Fun fact: This is an AI-generated version of a story I told my son every night when he was 4 years old.</p>
          </template>
        </ep-footer>
      </template>
    </ep-container>
  `
})

export const Tabs = Template.bind({})

Tabs.args = {
  items: tabItems
}
