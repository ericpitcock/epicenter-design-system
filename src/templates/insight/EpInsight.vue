<template>
  <ep-app-grid v-bind="gridProps" >
    <template #header>
      <ep-insight-app-header
        @menuButtonClicked="toggleLeftPanel"
        @notificationsButtonClicked="toggleRightPanel"
      />
    </template>
    <template #left-panel>
      <ep-navigation />
    </template>
    <template #content>
      <div class="content-wrapper">
        <div class="content-container">
          <div class="header header--content-header">
            <div class="content-controls content-controls--left">
              <ep-tabs :items="[{ label: 'Year to Date' }, { label: 'Historical' }]"></ep-tabs>
            </div>
            <div class="content-controls content-controls--right">
              <ep-button kind="secondary" :iconLeft="{ name: 'location' }" label="Alexandrinestad" />
              <ep-button kind="secondary" :iconLeft="{ name: 'calendar' }" label="11/01/2021 – 11/30/2021" />
              <ep-button v-if="!layoutOption" kind="ghost" :iconLeft="{ name: 'full-width' }" @click="toggleContentWidth" />
            </div>
          </div>
          <div class="content-body">
            <!-- <slot /> -->
            <p v-for="(n, index) of 20" :key="index" style="padding-right: 25%;">
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
          <div class="footer">Content footer</div>
        </div>
      </div>
    </template>
    <template #right-panel>
      <ep-notifications style="height: 100%; border-left: 1px solid var(--border-color);" />
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
    props: {
      layoutOption: Boolean,
    },
    data() {
      return {
        // rightPanelOpen: false,
        gridProps: {
          leftPanelOpen: true,
          rightPanelOpen: true,
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
      ...mapActions(['toggleTheme', 'toggleSidebar', 'toggleContentWidth']),
      toggleLeftPanel() {
        this.gridProps.leftPanelOpen = !this.gridProps.leftPanelOpen
      },
      toggleRightPanel() {
        this.gridProps.rightPanelOpen = !this.gridProps.rightPanelOpen
      }
    },
    computed: {
      ...mapState([
        'sidebar',
        'sidebarUser',
        'theme',
        'fullWidthContent'
      ]),
      // gridProps() {
      //   return {
      //     leftPanelOpen: false,
      //     rightPanelOpen: false,
      //   }
      // },
      // gridClasses() {
      //   return {
      //     // 'left-panel-open': this.sidebar,
      //     'left-panel-closed': !this.sidebar,
      //     // 'right-panel-open': this.rightPanelOpen,
      //     'right-panel-closed': !this.rightPanelOpen
      //   }
      // }
    }
  }
</script>

<style lang="scss" scoped>
  // .grid {
  //   display: grid;
  //   height: 100vh;
  //   grid-template-columns: 240px 1fr 300px;
  //   grid-template-rows: 41px 1fr;
  //   grid-template-areas:
  //     "header header right"
  //     "left main right";
  //   background-color: var(--background-1);
  //   &.left-panel-closed {
  //     grid-template-areas:
  //       "header header right"
  //       "main main right";
  //   }
  //   &.right-panel-closed {
  //     grid-template-areas:
  //       "header header header"
  //       "left main main";
  //   }
  //   &.left-panel-closed.right-panel-closed {
  //     grid-template-areas:
  //       "header header header"
  //       "main main main";
  //   }
  //   .app-header {
  //     grid-area: header;
  //     background: var(--background-1);
  //     border-bottom: 1px solid var(--border-color);
  //   }
  //   .content-wrapper {
  //     grid-area: main;
  //   }
  //   .right-panel {
  //     // grid-column: 3 / 3;
  //     // grid-row: 1 / 3;
  //     grid-area: right;
  //     background: var(--background-1);
  //     border-left: 1px solid var(--border-color);
  //   }
  //   .nav-container {
  //     grid-area: left;
  //     background: var(--background-1);
  //     border-right: 1px solid var(--border-color);
  //   }
  //   // &--nav-collapsed {
  //   //   grid-template-columns: 50px 1fr;
  //   // }
  //   // &--right-panel-open {
  //   //   grid-template-columns: 240px 1fr 300px;
  //   // }
  // }

  // .content-wrapper {
  //   // grid-column: 2 / 2;
  //   // grid-row: 2 / 2;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-start;
  //   padding: 0;
  //   // @media (min-width: 1800px) {
  //   //   &:not(.content-wrapper--full-width) {
  //   //     padding-right: 240px;
  //   //     .grid--nav-collapsed & {
  //   //       padding-right: 50px;
  //   //     }
  //   //   }
  //   // }
  //   // temp styles for layout option
  //   // .layout-option & {
  //   //   align-items: flex-start;
  //   //   padding: 0 !important;
  //   // }
  // }
  // .content-container {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   background: var(--background-2);
  //   // border: 1px solid var(--border-color);
  //   border-left: 1px solid var(--border-color);
  //   // border-radius: 8px;
  //   // &--fixed-width {
  //   //   min-width: 1320px;
  //   // }
  //   // @media (min-width: 1380px) {
  //   //   max-width: 1320px;
  //   // }
  //   // .content-wrapper--full-width &  {
  //   //   max-width: none;
  //   // }
  //   // // temp styles for layout option
  //   // .layout-option & {
  //   //   border: 0;
  //   //   border-left: 1px solid var(--border-color);
  //   //   border-radius: 0;
  //   //   min-width: none;
  //   //   max-width: none;
  //   // }
  // }
  // .footer {
  //   flex: 0 0 300px;
  //   padding: 40px;
  //   border-top: 1px solid var(--border-color);
  // }
  // .header {
  //   height: 60px;
  //   display: flex;
  //   align-items: center;
  //   padding: 0 20px 0 40px;
  //   border-bottom: 1px solid var(--border-color);
  //   border-radius: 6px 6px 0 0;
  //   &--content-header {
  //     position: sticky;
  //     top: 40px;
  //     justify-content: space-between;
  //     background: var(--background-2);
  //     z-index: 10;
  //   }
  //   &--component-header {
  //     background: var(--component-background--lighter);
  //   }
  // }
  // .content-controls {
  //   display: flex;
  //   align-items: center;
  //   gap: 0 1rem;
  //   height: 100%;
  //   &--left {
      
  //   }
  //   &--right {

  //   }
  // }
  // .content-body {
  //   flex: 1;
  //   padding: 20px;
  // }
  // .component-container {
  //   background: var(--component-background);
  //   border: 1px solid var(--border-color);
  //   border-radius: 6px;
  //   & + & {
  //     margin-top: 10px;
  //   }
  //   .component-body {
  //     padding: 40px;
  //   }
  // }
</style>
