import { centeredSurface } from '../../helpers/decorators.js'
import EpThemeToggle from '@/components/theme-toggle/EpThemeToggle.vue'
import { useStorybookStore } from '../../store'
import { computed } from 'vue'

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