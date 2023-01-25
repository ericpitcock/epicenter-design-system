<template>
  <div :class="[
    'grid',
    { 'grid--nav-collapsed': !sidebar },
    { 'layout-option': layoutOption }
    ]"
  >
    <ep-insight-app-header />
    <ep-navigation />
    <div :class="['content-wrapper', { 'content-wrapper--full-width': fullWidthContent }]">
      <div class="content-container">
        <div class="header header--content-header">
          <div class="content-controls content-controls--left">
            <ep-tabs></ep-tabs>
          </div>
          <div class="content-controls content-controls--right">
            <ep-button kind="secondary" :iconLeft="{ name: 'location' }" label="Alexandrinestad" />
            <ep-button kind="secondary" :iconLeft="{ name: 'calendar' }" label="11/01/2021 – 11/30/2021" />
            <ep-button v-if="!layoutOption" kind="ghost" :iconLeft="{ name: 'full-width' }" @click="toggleContentWidth" />
          </div>
        </div>
        <div class="content-body">
          <!-- <slot /> -->
          <p v-for="(n, index) of 20" :key="index" style="opacity: 0; padding-right: 25%;">
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
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import EpInsightAppHeader from './EpInsightAppHeader'
  import EpNavigation from './EpNavigation'
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpTabs from '@/components/tabs/EpTabs'

  export default {
    name: 'App',
    props: {
      layoutOption: Boolean,
    },
    components: {
      EpInsightAppHeader,
      EpNavigation,
      EpButton,
      EpDropdown,
      EpTabs
    },
    methods: {
      ...mapActions(['toggleTheme', 'toggleSidebar', 'toggleContentWidth']),
    },
    computed: {
      ...mapState([
        'sidebar',
        'sidebarUser',
        'theme',
        'fullWidthContent'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    height: 100vh;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 41px 1fr;
    background-color: var(--background-1);
    &--nav-collapsed {
      grid-template-columns: 50px 1fr;
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
    // temp styles for layout option
    .layout-option & {
      align-items: flex-start;
      padding: 0 !important;
    }
  }
  .content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: var(--background-2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    &--fixed-width {
      min-width: 1320px;
    }
    @media (min-width: 1380px) {
      max-width: 1320px;
    }
    .content-wrapper--full-width &  {
      max-width: none;
    }
    // temp styles for layout option
    .layout-option & {
      border: 0;
      border-left: 1px solid var(--border-color);
      border-radius: 0;
      min-width: none;
      max-width: none;
    }
  }
  .footer {
    flex: 0 0 300px;
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
      top: 40px;
      justify-content: space-between;
      background: var(--background-2);
      z-index: 10;
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
    flex: 1;
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
