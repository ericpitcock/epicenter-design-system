import { addons } from '@storybook/addons'
// import { themes } from '@storybook/theming'
import themeEp from './themeEp'

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: themeEp,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false
})