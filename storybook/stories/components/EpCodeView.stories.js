import { watch } from 'vue'
import { surfaceOverflow } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpCodeView from '@/components/code-view/EpCodeView.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpTabs from '@/components/tabs/Eptabs.vue'
import EpTabContent from '@/components/tabs/EpTabContent.vue'
import useTabs from '@/components/tabs/useTabs'
import { codeExamples } from '../../helpers/codeExamples.js'

export default {
  title: 'Components/Code View',
  component: EpCodeView,
  decorators: [surfaceOverflow],
  argTypes: {
    code: {
      table: { disable: true }
    },
    language: {
      name: 'Language',
      options: [
        'Javascript',
        'HTML',
        'CSS',
        'JSON',
      ],
      mapping: {
        Javascript: 'javascript',
        HTML: 'html',
        CSS: 'css',
        JSON: 'json',
      },
      control: {
        type: 'radio',
      },
      table: { disable: true }
    },
    theme: {
      table: { disable: true }
    },
  }
}

export const CodeView = args => ({
  components: {
    EpCodeView,
    EpTabs,
    EpTabContent,
    EpHeader,
    EpContainer,
  },
  setup() {
    const tabItems = ['Javascript', 'HTML', 'CSS', 'JSON']

    const { activeTab, setActiveTab } = useTabs()

    return {
      args,
      tabItems,
      activeTab,
      setActiveTab,
      codeExamples,
      useTabs,
    }
  },
  template: `
      <ep-container
        sticky-header
        :style="{
          '--ep-container-height': '100%',
          '--ep-container-padding': '0 3rem 3rem',
          '--ep-container-content-padding': '3rem',
        }"
      >
        <template #header>
          <ep-header style="--ep-header-container-bg-color: var(--interface-surface);">
            <template #left>   
              <ep-tabs
                :items="tabItems"
                :active-tab-index="activeTab"
                @tab-click="setActiveTab"
              />
            </template>
          </ep-header>
        </template>
        <template #default>
          <ep-tab-content
            :items="tabItems"
            :active-tab-index="activeTab"
          >
            <template #tab-0>
              <ep-code-view
                v-bind="args"
                :code="codeExamples['javascript']"
                language="javascript"
                :theme="args.theme"
              />
            </template>
            <template #tab-1>
              <ep-code-view
                v-bind="args"
                :code="codeExamples['html']"
                language="html"
                :theme="args.theme"
              />
            </template>
            <template #tab-2>
              <ep-code-view
                v-bind="args"
                :code="codeExamples['css']"
                language="css"
                :theme="args.theme"
              />
            </template>
            <template #tab-3>
              <ep-code-view
                v-bind="args"
                :code="codeExamples['json']"
                language="json"
                :theme="args.theme"
              />
            </template>
          </ep-tab-content>
        </template>
      </ep-container>
  `
})

CodeView.args = {
  language: 'Javascript',
  // theme: 'dark'
}

CodeView.decorators = [
  (story, context) => {
    watch(
      () => context.globals.theme,
      () => {
        const themeMap = {
          'Light Theme': 'light',
          'Dark Theme': 'dark'
        }
        context.args.theme = themeMap[context.globals.theme]
      },
      { immediate: true }
    )
    return story()
  }
]
