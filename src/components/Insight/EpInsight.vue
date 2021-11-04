<template>
  <div :class="['grid', { 'grid--collapsed': !sidebar }]">
    <div class="app-header">
      <div class="app-controls app-controls--left">
        <ep-button kind="naked" icon="menu" @click.native="toggleSidebar" />
        <ep-button kind="naked" icon="notifications" />
        <ep-dropdown buttonKind="naked" buttonIcon="user" :chevron="false">
          <ep-button kind="menu-item" label="User Settings" icon="settings" />
          <ep-button kind="menu-item" label="Logout" icon="arrow-right" />
        </ep-dropdown>
        <ep-button kind="naked" label="Dunder Mifflin" />
      </div>
      {{ `Sidebar: ${sidebar}` }}
      {{ `SidebarUSer: ${sidebarUser}` }}
      <div class="app-controls app-controls--right">
        <ep-button kind="naked" :icon="themeIcon" @click.native="toggleTheme"/>
        <ep-dropdown
          buttonKind="naked"
          buttonIcon="help"
          :chevron="false"
          :alignRight="true"
        >
          <ep-button kind="menu-item" label="Insight Manual" icon="help" />
          <ep-button kind="menu-item" label="Help" icon="support" />
        </ep-dropdown>
      </div>
    </div>
    <ep-navigation />
    <div :class="['content-wrapper', { 'content-wrapper--full-width': fullWidthContent }]">
      <div class="content-container">
        <div class="header header--content-header">
          <div class="content-controls content-controls--left">
            <div>Content header. It's for titles, tabs, buttons, etc. Can be sticky.</div>
          </div>
          <div class="content-controls content-controls--right">
            <ep-button kind="secondary" icon="location" label="Alexandrinestad" />
            <ep-button kind="secondary" icon="calendar" label="11/01/2021 – 11/30/2021" />
            <ep-button kind="secondary" icon="full-width" @click.native="toggleContentWidth" />
          </div>
        </div>
        <div class="content-body">
          <div class="component-container">
            <div class="header header--component-header">
              Component header. It's also for titles, tabs, buttons, etc. Can also be sticky.
            </div>
            <div class="component-body">
              <p v-for="(n, index) of 20" :key="index">
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
import { mapGetters, mapActions } from 'vuex'

import EpNavigation from './EpNavigation'
import EpButton from '@/components/button/EpButton'
import EpDropdown from '@/components/dropdown/EpDropdown'
import EpIcon from '@/style/icons/EpIcon'

export default {
  name: 'App',
  components: {
    EpNavigation,
    EpButton,
    EpDropdown,
    EpIcon
  },
  // data: () => ({
  //   fullWidthContent: false
  // }),
  methods: {
    ...mapActions(['toggleTheme', 'toggleSidebar', 'toggleContentWidth']),
  },
  computed: {
    ...mapGetters({
      sidebar: 'getSidebarState',
      sidebarUser: 'getSidebarUserState',
      theme: 'getTheme',
      fullWidthContent: 'getContentWidth'
    }),
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
    &--collapsed {
      grid-template-columns: 50px 1fr;
    }
  }
  .app-header {
    position: fixed;
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 5px;
    background: var(--background);
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
    padding: 30px 30px 30px 0;
    
    @media (min-width: 1830px) {
      padding-right: 240px;
      &--full-width {
        padding-right: 50px;
      }
    }
    @media (min-width: 1640px) {
      .grid--collapsed & {
        padding-right: 50px;
      }
    }
  }
  .content-container {
    max-width: 1320px;
    height: auto;
    background: var(--content-background);
    border: 1px solid var(--border-color);
    border-radius: 8px;
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
      background: var(--content-background);
    }
    &--component-header {
      background: var(--component-background--lighter);
    }
  }
  .content-controls {
    display: flex;
    gap: 0 10px;
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
