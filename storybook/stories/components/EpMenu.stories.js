import Dashboard from '@ericpitcock/epicenter-icons/epicenter-icons/Analytics01'
import ArrowRight01 from '@ericpitcock/epicenter-icons/epicenter-icons/ArrowRight01'
import ArrowUpRight from '@ericpitcock/epicenter-icons/epicenter-icons/ArrowUpRight03'
import GoogleMaps from '@ericpitcock/epicenter-icons/epicenter-icons/GoogleMaps'
import Radar01 from '@ericpitcock/epicenter-icons/epicenter-icons/Radar01'
import Settings04 from '@ericpitcock/epicenter-icons/epicenter-icons/Settings04'

import EpButton from '@/components/button/EpButton.vue'
import EpMenu from '@/components/menu/EpMenu.vue'
import EpMenuItem from '@/components/menu/EpMenuItem.vue'

import { centeredBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Menu',
  component: EpMenu,
  decorators: [centeredBg],
  argTypes: {
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
    menuType: { table: { disable: true } },
  }
}

export const Menu = args => ({
  components: {
    EpMenu,
    EpMenuItem,
    EpButton,
    Radar01,
    ArrowRight01,
    ArrowUpRight,
    Dashboard,
    GoogleMaps,
    Settings04
  },
  setup() {
    const menuItems = [
      {
        type: 'item',
        label: 'Dashboard',
        iconLeft: Dashboard,
        iconLeftStyle: { '--ep-icon-stroke-width': 1 },
        to: '/',
        onClick: () => console.log('clicked Dashboard')
      },
      { type: 'divider' },
      { type: 'section', label: 'Actions' },
      {
        type: 'item',
        label: 'Google Maps',
        iconLeft: GoogleMaps,
        iconRight: ArrowUpRight,
        iconRightStyle: { '--ep-icon-height': '1.2rem', '--ep-icon-stroke-width': 1.5 },
        href: 'https://www.google.com/maps',
        onClick: () => console.log('clicked Google Maps')
      },
      {
        type: 'item',
        label: 'Track Event',
        iconLeft: Radar01,
        onClick: () => console.log('clicked Track Event')
      },
      {
        type: 'item',
        label: 'More Options',
        iconLeft: Settings04,
        iconLeftStyle: { '--ep-icon-stroke-width': 1.5 },
        iconRight: ArrowRight01,
        submenu: [
          {
            type: 'item',
            label: 'Settings',
            onClick: () => console.log('clicked Settings')
          },
          {
            type: 'item',
            label: 'Preferences',
            onClick: () => console.log('clicked Preferences')
          },
          { type: 'divider' },
          {
            type: 'item',
            label: 'Help Center',
            onClick: () => console.log('clicked Help Center')
          },
          {
            type: 'item',
            label: 'About Us',
            onClick: () => console.log('clicked About Us')
          }
        ]
      },
      { type: 'divider' },
      { type: 'section', label: 'Shortcuts' },
      {
        type: 'item',
        label: 'Recent Files',
        onClick: () => console.log('clicked Recent Files')
      },
      {
        type: 'item',
        label: 'Saved Items',
        onClick: () => console.log('clicked Saved Items')
      },
      {
        type: 'item',
        label: 'Notifications',
        onClick: () => console.log('clicked Notifications')
      },
      { type: 'divider' },
      { type: 'section', label: 'Navigation' },
      {
        type: 'item',
        label: 'Go Back',
        onClick: () => console.log('clicked Go Back')
      },
      {
        type: 'item',
        label: 'Next Step',
        onClick: () => console.log('clicked Next Step')
      },
      {
        type: 'item',
        label: 'Open Web Page',
        onClick: () => console.log('clicked Open Web Page')
      },
      {
        type: 'item',
        label: 'Advanced Settings',
        iconRight: ArrowRight01,
        submenu: [
          {
            type: 'item',
            label: 'Security',
            onClick: () => console.log('clicked Security')
          },
          {
            type: 'item',
            label: 'Privacy',
            onClick: () => console.log('clicked Privacy')
          },
          {
            type: 'item',
            label: 'Developer Mode',
            onClick: () => console.log('clicked Developer Mode')
          }
        ]
      }
    ]

    return { args, menuItems }
  },
  template: `
    <ep-menu v-bind="args">
      <template v-for="(item, index) in menuItems" :key="index">
        <ep-menu-item :type="item.type">
          <ep-button
            v-if="item.type === 'item'"
            class="ep-button--menu-item"
            :size="args.size"
            :to="item.to"
            :href="item.href"
            @click="item.onClick"
          >
            <template v-if="item.iconLeft" #icon-left>
              <component :is="item.iconLeft" :style="item.iconLeftStyle" />
            </template>
            {{ item.label }}
            <template v-if="item.iconRight" #icon-right>
              <component :is="item.iconRight" :style="item.iconRightStyle" />
            </template>
          </ep-button>
          <template v-else>{{ item.label }}</template>
          
          <template v-if="item.submenu" #submenu>
            <ep-menu :size="args.size">
              <template v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                <ep-menu-item :type="subItem.type">
                  <ep-button
                    v-if="subItem.type === 'item'"
                    class="ep-button--menu-item"
                    :size="args.size"
                    :to="subItem.to"
                    :href="subItem.href"
                    @click="subItem.onClick"
                  >
                    <template v-if="subItem.iconLeft" #icon-left>
                      <component :is="subItem.iconLeft" :style="subItem.iconLeftStyle" />
                    </template>
                    {{ subItem.label }}
                    <template v-if="subItem.iconRight" #icon-right>
                      <component :is="subItem.iconRight" :style="subItem.iconRightStyle" />
                    </template>
                  </ep-button>
                  <template v-else>{{ subItem.label }}</template>
                </ep-menu-item>
              </template>
            </ep-menu>
          </template>
        </ep-menu-item>
      </template>
    </ep-menu>
  `
})

Menu.args = {
  size: 'default',
}
