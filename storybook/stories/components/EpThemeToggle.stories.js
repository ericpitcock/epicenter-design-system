import { centered } from '../../helpers/decorators'
import EpThemeToggle from '@/components/theme-toggle/EpThemeToggle.vue'

export default {
  title: 'Components/Theme Toggle',
  component: EpThemeToggle,
  decorators: [centered]
}

export const ThemeToggle = () => ({
  components: { EpThemeToggle },
  template: '<ep-theme-toggle />'
})