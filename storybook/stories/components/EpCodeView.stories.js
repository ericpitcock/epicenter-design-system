import Prism from 'prismjs'
import { padded } from '../../helpers/decorators.js'
import EpCodeView from '@/components/code-view/EpCodeView.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import { codeExamples } from '../../helpers/codeExamples.js'
import { computed, nextTick, watch } from 'vue'

export default {
  title: 'Components/Code View',
  component: EpCodeView,
  decorators: [padded],
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
        // 'Markdown',
      ],
      mapping: {
        Javascript: 'javascript',
        HTML: 'html',
        CSS: 'css',
        JSON: 'json',
        // Markdown: 'markdown',
      },
      control: {
        type: 'radio',
      },
    },
    enableLineNumbers: {
      name: 'Enable Line Numbers',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const CodeView = args => ({
  components: { EpCodeView, EpContainer },
  setup() {
    const code = computed(() => codeExamples[args.language])

    // watch language change
    watch(() => args.language, () => {
      nextTick(() => {
        Prism.highlightAll()
      })
    })

    return { args, code }
  },
  template: `
    <ep-container
      width="fit-content"
      content-padding="2rem"
      border-radius="var(--border-radius)"
      background-color="var(--interface-surface)"
    >
      <ep-code-view :code="code" v-bind="args" />
    </ep-container>
  `
})

CodeView.args = {
  language: 'Javascript',
  enableLineNumbers: true,
}
