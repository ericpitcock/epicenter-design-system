import { centeredSurface } from '../../helpers/decorators.js'
import EpThemeToggle from '@/components/theme-toggle/EpThemeToggle.vue'
import { useStorybookStore } from '../../store'
import { computed, watch } from 'vue'
import { addons } from '@storybook/preview-api'
const channel = addons.getChannel()

export default {
  title: 'Components/Theme Toggle',
  component: EpThemeToggle,
  decorators: [centeredSurface],
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const ThemeToggle = () => ({
  components: { EpThemeToggle },
  setup() {

    const store = useStorybookStore()
    const currentTheme = computed(() => store.theme)

    const onThemeChange = () => {
      store.toggleTheme()
    }
    return { currentTheme, onThemeChange }
  },
  template: `
    <ep-theme-toggle
      :current-theme="currentTheme"
      @toggle-theme="onThemeChange"
    />
  `
})

ThemeToggle.decorators = [
  (story) => {
    const store = useStorybookStore()
    const currentTheme = computed(() => store.theme)
    watch(
      () => currentTheme.value,
      () => {
        const themeMap = {
          'light': 'Light Theme',
          'dark': 'Dark Theme'
        }

        channel.emit('updateGlobals', {
          globals: {
            'theme': themeMap[currentTheme.value]
          }
        })
      }
    )

    return story()
  }
]