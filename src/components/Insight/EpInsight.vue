<template>
  <div :class="['grid', { 'grid--collapsed': !sidebar }]">
    <div class="app-header">
      <div class="app-controls app-controls--left">
        <ep-button kind="naked" icon="menu" @click.native="toggleSidebar" />
        <ep-button kind="naked" icon="notifications" />
        <ep-button kind="naked" icon="user" />
        <ep-button kind="naked" label="Dunder Mifflin" />
      </div>
      <div class="app-controls app-controls--right">
        <ep-button kind="naked" :icon="themeIcon()" @click.native="toggleTheme"/>
        <ep-button kind="naked" icon="help" />
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
            <ep-button :kind="secondary" icon="location" label="Alexandrinestad" />
            <ep-button :kind="secondary" icon="calendar" label="Date Picker" />
            <ep-button :kind="secondary" icon="full-width" @click.native="fullWidthContent = !fullWidthContent" />
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
import EpIcon from '@/style/icons/EpIcon'

export default {
  name: 'App',
  components: {
    EpNavigation,
    EpButton,
    EpIcon
  },
  data: () => ({
    fullWidthContent: false
  }),
  methods: {
    ...mapActions(['toggleTheme', 'toggleSidebar']),
    // kebab(string) {
    //   let kebabString = _.kebabCase(string)
    //   return `nav-item--${kebabString}`
    // },
    // logoType() {
    //   return this.sidebar ? 'full' : 'icon'
    //   // return 'icon'
    // },
    // onResize() {
    //   this.sidebar = window.innerWidth > 1590
    // },
    // toggleTheme() {
    //   let currentTheme = document.documentElement.getAttribute('data-color-theme')
    //   let newTheme = currentTheme == 'dark' ? 'light' : 'dark'
    //   this.theme = newTheme
    //   document.documentElement.setAttribute('data-color-theme', newTheme)
    // },
    themeIcon() {
      return this.theme == 'dark' ? 'light-mode' : 'dark-mode'
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'getSidebarState',
      theme: 'getTheme'
    }),
  }
  // mounted() {
  //   this.onResize()
  //   window.addEventListener('resize', this.onResize, { passive: true })
  // },
  // beforeUnmount() {
  //   if (typeof window === 'undefined') return
  //   window.removeEventListener('resize', this.onResize, { passive: true })
  // }
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
    // height: 100vh;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 41px 1fr;
    &--collapsed {
      grid-template-columns: 50px 1fr;
    }
  }
  .app-header {
    position: fixed;
    width: 100%;
    // height: 40px;
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 5px;
    background: var(--background);
    border-bottom: 1px solid var(--border-color);
    z-index: 1;
    // &__button {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   width: 40px;
    //   height: 40px;
    //   cursor: pointer;
    //   &:hover {
    //     background: var(--foreground);
    //     // color: var();
    //   }
    //   // background: red;
    //   &--flexible-width {
    //     width: auto;
    //     padding: 0 10px;
    //     // background: red;
    //   }
    //   & + & {
    //     // add any margin here
    //   }
    //   .icon {
    //     width: 20px;
    //     height: 20px;
    //     // border: 1px solid var(--icon-color);
    //   }
    // }
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
      /* background: red; */
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
    // flex: 1;
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
    // max-width: 1320px;
    height: 300px;
    padding: 40px;
    border-top: 1px solid var(--border-color);
    // background: red;
  }
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    
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
      // border-radius: 6px 6px 0 0;
    }
  }
  .content-controls {
    display: flex;
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
    // .component-header {
      // height: 60px;
      // background: var(--background-level-3-lighter);
      // border-bottom: 1px solid var(--border-color);
    // }
    .component-body {
      padding: 40px;
    }
  }
</style>
