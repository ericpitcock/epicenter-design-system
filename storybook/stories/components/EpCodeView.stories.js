import Prism from 'prismjs'
import { paddedBg } from '../../helpers/decorators.js'
import EpCodeView from '@/components/code-view/EpCodeView.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import { codeExamples } from '../../helpers/codeExamples.js'
import { computed, nextTick, watch } from 'vue'

export default {
  title: 'Components/Code View',
  component: EpCodeView,
  decorators: [paddedBg],
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
    theme: {
      table: { disable: true }
    },
  }
}

export const CodeView = args => ({
  components: { EpCodeView, EpContainer },
  setup() {
    const code = computed(() => codeExamples[args.language])

    const highlightCode = () => {
      nextTick(() => {
        Prism.highlightAll()
      })
    }

    watch(() => args.language, () => {
      highlightCode()
    },
      { immediate: true }
    )

    watch(() => args.enableLineNumbers, () => {
      highlightCode()
    },
      { immediate: true }
    )

    return { args, code }
  },
  template: `
    <ep-container
      :style="{
        '--ep-container-content-padding': '2rem 3rem',
        '--ep-container-width': 'fit-content',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-border-color': 'var(--interface-surface)',
      }"
    >
      <ep-code-view v-bind="args" :code="code" :theme="args.theme" />
    </ep-container>
  `
})

CodeView.args = {
  language: 'Javascript',
  enableLineNumbers: true,
  theme: 'dark'
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
