<template>
  <ep-app-grid v-bind="gridProps" >
    <template #header>
      <ep-insight-app-header
        @menuButtonClicked="toggleLeftPanel"
        @notificationsButtonClicked="toggleRightPanel"
      />
    </template>
    <template #left-panel>
      <ep-navigation v-bind="navProps" />
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
  import EpInsightAppHeader from './EpInsightAppHeader'
  import EpNavigation from './EpNavigation'
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpTabs from '@/components/tabs/EpTabs'
  import EpNotifications from '@/components/notification/EpNotifications'

  export default {
    name: 'App',
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
      EpInsightAppHeader,
      EpNavigation,
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
    height: fit-content;
    background: var(--background-2);
    border-left: 1px solid var(--border-color);
  }
  .right-panel__container {
    height: 100%;
    border-left: 1px solid var(--border-color);
  }
</style>
