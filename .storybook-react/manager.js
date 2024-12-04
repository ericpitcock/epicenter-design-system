// https://storybook.js.org/docs/configure/features-and-behavior
import { addons } from '@storybook/manager-api'
import EpTheme from './EpTheme'

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  isToolshown: true,
  theme: EpTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    // collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false, },
    remount: { hidden: true, },
    zoom: { hidden: true, },
    eject: { hidden: true, },
    copy: { hidden: true, },
    fullscreen: { hidden: true, },
  }
})