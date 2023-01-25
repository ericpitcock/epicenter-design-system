<template>
  <div class="app-header">
    <div class="app-controls app-controls--left">
      <ep-button kind="ghost" :iconLeft="{ name: 'menu' }" @click="toggleSidebar" />
      <ep-dropdown
        :button="{
          kind: 'ghost',
          label: '',
          iconRight: null,
          iconLeft: { name: 'notifications' }
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
          iconLeft: { name: 'settings' }
        },{
          label: 'Logout',
          iconLeft: { name: 'arrow-right' }
        }]"
        :button="{
          kind: 'ghost',
          label: '',
          iconRight: null,
          iconLeft: { name: 'user' }
        }"
      >
      </ep-dropdown>
      <ep-dropdown
        :button="{
          kind: 'ghost',
          label: 'Dunder Mifflin',
          iconRight: null
        }"
      >
        <template #content>
        <div style="width: 400px; height: 200px; padding: 30px;">Customer picker</div>
        </template>
      </ep-dropdown>
    </div>
    <div class="app-controls app-controls--right">
      <ep-button kind="ghost" :iconLeft="themeIcon" @click="toggleTheme"/>
      <ep-dropdown
        :menuItems="[{
          label: 'Insight Manual',
          iconLeft: { name: 'help' }
        },{
          label: 'Help',
          iconLeft: { name: 'support' }
        }]"
        :button="{
          kind: 'ghost',
          label: '',
          iconRight: null,
          iconLeft: { name: 'help' }
        }"
        alignRight
      >
      </ep-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'

  export default {
    name: 'EpInsightAppHeader',
    components: {
      EpButton,
      EpDropdown
    },
    methods: {
      ...mapActions(['toggleTheme', 'toggleSidebar']),
    },
    computed: {
      ...mapState(['theme']),
      themeIcon() {
        return this.theme == 'dark' ? { name: 'light-mode' } : { name: 'dark-mode' }
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    z-index: 20;
  }
  .app-controls {
    display: flex;
    align-items: center;
    &--left {

    }
    &--right {

    }
  }
</style>