<template>
  <div :class="['grid', { 'grid--nav-collapsed': !sidebar }]">
    <div class="app-header">
      <div class="app-controls app-controls--left">
        <ep-button kind="naked" iconLeft="menu" @click="toggleSidebar" />
        <ep-dropdown
          :button="{
            kind: 'naked',
            label: '',
            iconRight: '',
            iconLeft: 'notifications'
          }"
        >
          <template #content>
          <div style="width: 400px; height: 200px; padding: 30px;">
            Notification center
          </div>
          </template>
        </ep-dropdown>
        <ep-dropdown
          :menuItems="[{
            label: 'User Settings',
            iconLeft: 'settings'
          },{
            label: 'Logout',
            iconLeft: 'arrow-right'
          }]"
          :button="{
            kind: 'naked',
            label: '',
            iconRight: '',
            iconLeft: 'user'
          }"
        >
        </ep-dropdown>
        <ep-dropdown
          :button="{
            kind: 'naked',
            label: 'Dunder Mifflin',
            iconRight: ''
          }"
        >
          <template #content>
          <div style="width: 400px; height: 200px; padding: 30px;">Customer picker</div>
          </template>
        </ep-dropdown>
      </div>
      <div class="app-controls app-controls--right">
        <ep-button kind="naked" :iconLeft="themeIcon" @click="toggleTheme"/>
        <ep-dropdown
          :menuItems="[{
            label: 'Insight Manual',
            iconLeft: 'help'
          },{
            label: 'Help',
            iconLeft: 'support'
          }]"
          :button="{
            kind: 'naked',
            label: '',
            iconRight: '',
            iconLeft: 'help'
          }"
          alignRight
        >
        </ep-dropdown>
      </div>
    </div>
    <ep-sidebar style="" :navItems="navItems" />
    <div :class="['content-wrapper', { 'content-wrapper--full-width': fullWidthContent }]">
      <div class="content-container">
        <div class="header header--content-header">
          <div class="content-controls content-controls--left">
            <ep-tabs></ep-tabs>
            <!-- <div>API access</div> -->
            <!-- <div>Future thing</div>
            <div>Another future thing</div> -->
          </div>
          <div class="content-controls content-controls--right">
            <ep-button kind="secondary" iconLeft="location" label="Alexandrinestad" />
            <ep-button kind="secondary" iconLeft="calendar" label="11/01/2021 – 11/30/2021" />
            <ep-button kind="naked" iconLeft="full-width" @click="toggleContentWidth" />
          </div>
        </div>
        <div class="content-body">
          <div class="component-container">
            <div class="header header--component-header">
              <!-- Component header. It's also for titles, tabs, buttons, etc. Can also be sticky. -->
            </div>
            <div class="component-body" style="color: var(--gray-350)">
              <p v-for="(n, index) of 20" :key="index" style="visibility: hidden; padding-right: 25%;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
                volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
                sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna,
                et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
                volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
                sed.
              </p>
            </div>
          </div>
        </div>
      <div class="footer">Content footer</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import EpSidebar from '@/components/sidebar/EpSidebar'
import EpButton from '@/components/button/EpButton'
import EpDropdown from '@/components/dropdown/EpDropdown'
import EpTabs from '@/components/tabs/EpTabs'
import EpIcon from '@/components/icon/EpIcon'

export default {
  name: 'App',
  components: {
    EpSidebar,
    EpButton,
    EpDropdown,
    EpTabs,
    EpIcon
  },
  data () {
    return {
      navItems: [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          path: ''
        },
        {
          name: 'Assets',
          icon: 'display',
          path: ''
        },
        {
          name: 'Investigations',
          icon: 'target',
          path: ''
        },
        {
          divider: true
        },
        {
          name: 'Risk Rating',
          icon: 'star',
          path: ''
        },
        {
          name: 'Service Info',
          icon: 'info',
          path: ''
        },
        {
          name: 'Reports',
          icon: 'report',
          path: ''
        },
        {
          name: 'Files',
          icon: 'file',
          path: ''
        },
        {
          name: 'Settings',
          icon: 'settings',
          path: ''
        }
      ]
    }
  },
  methods: {
    ...mapActions(['toggleTheme', 'toggleSidebar', 'toggleContentWidth']),
  },
  computed: {
    ...mapState([
      'fullWidthContent',
      'sidebar',
      'sidebarUser',
      'theme'
    ]),
    themeIcon() {
      return this.theme == 'dark' ? 'light-mode' : 'dark-mode'
    }
  }
}
</script>

<style lang="scss">
  .pn-regular {
    font-family: proxima-nova, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .pn-semibold {
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    font-style: normal;
  }
  .grid {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 41px 1fr;
    &--nav-collapsed {
      grid-template-columns: 50px 1fr;
    }
  }
  .app-header {
    position: fixed;
    width: 100%;
    height: 41px;
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 5px;
    background: var(--app-header-background);
    border-bottom: 1px solid var(--border-color);
    z-index: 1;
  }
  .app-controls {
    display: flex;
    align-items: center;
    &--left {

    }
    &--right {

    }
  }
  .content-wrapper {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px 30px 0;
    
    @media (min-width: 1800px) {
      &:not(.content-wrapper--full-width) {
        padding-right: 240px;
        .grid--nav-collapsed & {
          padding-right: 50px;
        }
      }
    }
  }
  .content-container {
    height: auto;
    background: var(--background-2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    @media (min-width: 1380px) {
      max-width: 1320px;
    }
    .content-wrapper--full-width &  {
      max-width: none;
    }
  }
  .footer {
    height: 300px;
    padding: 40px;
    border-top: 1px solid var(--border-color);
  }
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 40px;
    border-bottom: 1px solid var(--border-color);
    border-radius: 6px 6px 0 0;
    &--content-header {
      position: sticky;
      top: 39px;
      justify-content: space-between;
      background: var(--background-2);
    }
    &--component-header {
      background: var(--component-background--lighter);
    }
  }
  .content-controls {
    display: flex;
    align-items: center;
    gap: 0 1rem;
    height: 100%;
    &--left {
      
    }
    &--right {

    }
  }
  .content-body {
    padding: 20px;
  }
  .component-container {
    background: var(--component-background);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    & + & {
      margin-top: 10px;
    }
    .component-body {
      padding: 40px;
    }
  }
</style>
