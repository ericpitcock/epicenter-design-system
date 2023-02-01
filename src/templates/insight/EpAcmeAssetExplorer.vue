<template>
  <ep-app-grid v-bind="gridProps" >
    <template #header>
      <ep-acme-asset-explorer-header
        @menuButtonClicked="toggleLeftPanel"
        @notificationsButtonClicked="toggleRightPanel"
      />
    </template>
    <template #left-panel>
      <div class="left-panel__container">
        <ep-acme-asset-explorer-main-nav v-bind="navProps" />
      </div>
    </template>
    <template #content>
      <div class="content-container">
        <router-view />
      </div>
    </template>
    <template #right-panel>
      <div class="right-panel__container">
        <ep-notifications />
      </div>
    </template>
  </ep-app-grid>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import EpAppGrid from './EpAppGrid'
  import EpAcmeAssetExplorerHeader from './EpAcmeAssetExplorerHeader'
  import EpAcmeAssetExplorerMainNav from './EpAcmeAssetExplorerMainNav'
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpTabs from '@/components/tabs/EpTabs'
  import EpNotifications from '@/components/notification/EpNotifications'

  export default {
    name: 'AcmeAssetExplorer',
    data() {
      return {
        gridProps: {
          leftPanelOpen: true,
          rightPanelOpen: true,
        },
        navProps: {
          collapsed: false,
        }
      }
    },
    components: {
      EpAppGrid,
      EpAcmeAssetExplorerHeader,
      EpAcmeAssetExplorerMainNav,
      EpButton,
      EpDropdown,
      EpTabs,
      EpNotifications
    },
    methods: {
      ...mapActions(['toggleTheme']),
      toggleLeftPanel() {
        this.navProps.collapsed = !this.navProps.collapsed
      },
      toggleRightPanel() {
        this.gridProps.rightPanelOpen = !this.gridProps.rightPanelOpen
      }
    },
    computed: {
      ...mapState(['theme'])
    }
  }
</script>

<style lang="scss" scoped>
  .content-container {
    min-width: fit-content;
    height: auto;
    min-height: 100%;
    background: var(--background-2);
  }
  .left-panel__container {
    height: 100%;
    border-right: 1px solid var(--border-color);
  }
  .right-panel__container {
    height: 100%;
    border-left: 1px solid var(--border-color);
  }
</style>
