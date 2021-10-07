<template>
  <div :class="['grid', { 'grid--collapsed': !sidebar }]">
    <div class="app-header">
      <div class="app-controls app-controls--left">
        <div class="app-header__button" @click="sidebar = !sidebar">
          <div class="icon"></div>
        </div>
        <div class="app-header__button">
          <div class="icon"></div>
        </div>
        <div class="app-header__button">
          <div class="icon"></div>
        </div>
        <div class="app-header__button app-header__button--flexible-width">
          <div class="customer">Dunder Mifflin</div>
        </div>
      </div>
      <div class="app-controls app-controls--right">
        <div class="app-header__button theme-toggle-icon" @click="toggleTheme">
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <div class="nav-container">
      <div class="nav">
        <div class="nav-item nav-item__logo">
          <EsentireLogo :type="logoType()" />
        </div>
        <template v-for="(navItem, index) in navItems">
          <!-- removed from :class below: kebab(navItem.name), -->
          <div
            :class="['nav-item', { active: navItem.active }]"
            @click="updateActiveNavItem(index)"
            :key="index"
          >
            <div v-if="navItem.icon" class="nav-item__icon">
              <!-- <img src="" alt="" /> -->
            </div>
            <div :class="['nav-item__name']">{{ navItem.name }}</div>
          </div>
          <div
            v-if="index === 2"
            class="nav-item__divider"
            :key="`divider${index}`"
          ></div>
        </template>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-container">
        <div v-if="!hasHero" class="header header--content-header">
          Content header. It's for titles, tabs, buttons, etc. Can be sticky.
        </div>
        <div :class="['content-body', { 'content-body--has-hero': hasHero }]">
          <div v-if="hasHero" class="content-hero">
            This is the hero, where we highlight important content in a visually
            appealing way.
          </div>
          <div class="component-container">
            <div class="header header--component-header">
              Component header. It's also for titles, tabs, buttons, etc. Can
              also be sticky.
            </div>
            <div class="component-body">
              Component body. ADD COMPONENT FOOTER
            </div>
          </div>
          <div class="component-container">
            <div class="component-body">
              <p class="read-me" v-for="(n, index) of 20" :key="index">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
                arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at porttitor sem. Aliquam erat
                volutpat. Donec placerat nisl magna, et faucibus arcu
                condimentum sed.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at porttitor sem. Aliquam erat
                volutpat. Donec placerat nisl magna, et faucibus arcu
                condimentum sed.
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
  // import _ from 'lodash'

  import EsentireLogo from './EsentireLogo'
  // import Ebutton from './Ebutton'

  export default {
    name: 'App',
    components: {
      EsentireLogo
      // Ebutton
    },
    data() {
      return {
        hasHero: true,
        sidebar: true,
        navItems: [
          {
            name: 'Dashboard',
            icon: 'dashboard',
            active: true
          },
          {
            name: 'Investigations',
            icon: 'target',
            active: false
          },
          {
            name: 'Assets',
            icon: 'display',
            active: false
          },
          // {
          //   name: 'Risk Rating',
          //   icon: 'star',
          //   active: false
          // },
          {
            name: 'Service Info',
            icon: 'info',
            active: false
          },
          {
            name: 'Reports',
            icon: 'report',
            active: false
          },
          {
            name: 'Files',
            icon: 'file',
            active: false
          },
          {
            name: 'Settings',
            icon: 'settings',
            active: false
          }
        ]
      }
    },
    methods: {
      // kebab(string) {
      //   let kebabString = _.kebabCase(string)
      //   return `nav-item--${kebabString}`
      // },
      logoType() {
        return this.sidebar ? 'full' : 'icon'
        // return 'icon'
      },
      // onResize() {
      //   this.sidebar = window.innerWidth > 1590
      // },
      toggleTheme() {
        let currentTheme = document.documentElement.getAttribute(
          'data-color-theme'
        )
        let newTheme = currentTheme == 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-color-theme', newTheme)
      },
      updateActiveNavItem(index) {
        this.navItems.forEach(item => {
          item.active = false
        })
        this.navItems[index].active = true
      }
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
  @import './minireset.scss';

  :root {
    // this is light mode
    // background
    // --white: white;
    // --background-color: --component-background-level-1;
    // --component-background-level-1: #f0f0f0;
    // --component-background-level-1-lighter: var(--white);
    // --component-background-level-2: #f9f9f9;
    // --component-background-level-3: var(--white);
    // --component-background-level-3-lighter: var(--white);
    // // foreground
    // --foreground-level-1: yellow;
    // // border for everything
    // --border-color: #dadada;
    // // button
    // // --button-hover: var(--component-background-level-2);
    // // --button-active: #21476B;
    // // text and icons
    // --main-text: var(--dark-text);
    // --dark-text: #141414;
    // --icon-color: var(--main-text);
    // --icon-color-dark: var(--dark-text);
  }
  // // this is dark mode
  // html[data-color-theme='dark'] {
  //   // background
  //   --background-color: --component-background-level-1;
  //   --component-background-level-1: #1f1f1f;
  //   --component-background-level-1-lighter: #292929;
  //   --component-background-level-2: #262626;
  //   --component-background-level-3: #2b2b2b;
  //   --component-background-level-3-lighter: #2e2e2e;
  //   // foreground
  //   --foreground-level-1: yellow;
  //   // border for everything
  //   --border-color: #454545;
  //   // button
  //   // --button-hover: var(--component-background-level-2);
  //   // --button-active: #21476B;
  //   // text and icons
  //   --main-text: #dedede;
  //   --dark-text: #141414;
  //   --icon-color: var(--main-text);
  //   --icon-color-dark: var(--dark-text);
  // }
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
  // * {
  //   box-sizing: border-box;
  // }
  // html {

  // }
  // body {
  //   height: 100%;
  //   background: var(--component-background-level-1);
  //   -ms-overflow-style: none; /* for Internet Explorer, Edge */
  //   scrollbar-width: none; /* for Firefox */
  //   &::-webkit-scrollbar {
  //     display: none; /* for Chrome, Safari, and Opera */
  //   }
  //   overflow-y: scroll;
  // }
  html,
  body {
    /* height: 100%; */
  }
  // body {
  //   margin: 0;
  //   color: var(--main-text);
  //   // pn reg
  //   font-family: proxima-nova, sans-serif;
  //   font-weight: 400;
  //   font-style: normal;
  //   font-size: 14px;
  // }
  #app {
    // /* height: 100%; */
    // /* background: var(--component-background-level-1); */
  }
  .grid {
    display: grid;
    // height: 100vh;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 40px 1fr;
    &--collapsed {
      grid-template-columns: 50px 1fr;
    }
  }
  .app-header {
    position: fixed;
    width: 100%;
    height: 40px;
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 5px;
    background: var(--background);
    border-bottom: 1px solid var(--border-color);
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      // background: red;
      &--flexible-width {
        width: auto;
        padding: 0 10px;
        // background: red;
      }
      & + & {
        // add any margin here
      }
      .icon {
        width: 17px;
        height: 17px;
        border: 1px solid var(--icon-color);
      }
    }
  }
  .app-controls {
    display: flex;
    align-items: center;
    &--left {
    }
    &--right {
    }
  }
  // .menu-icon {
  //   width: 16px;
  //   height: 16px;
  //   border: 1px solid var(--icon-color);
  // }

  .nav-container {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    padding: 30px 20px;
    .grid--collapsed & {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .nav {
    position: fixed;
    width: 200px;
    display: flex;
    flex-direction: column;
    .grid--collapsed & {
      width: 50px;
      align-items: center;
    }
  }
  /* .logo {
  padding-left: 31px;
  margin-bottom: 30px;
  svg {
    display: block;
  }
} */
  /* img {
  width: 200px;
  height: 40px;
  display: block;
} */
  .nav-item {
    height: 41px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    border: 1px solid transparent;
    border-radius: 3px;
    user-select: none;
    & + & {
      margin-top: 2px;
    }
    &__logo {
      margin-bottom: 30px;
      &:hover {
        background: transparent !important;
      }
    }
    .grid--collapsed & {
      justify-content: center;
      width: 40px;
      padding: 0;
      &:hover .nav-item__name {
        display: block;
        position: absolute;
        left: 42px;
        padding: 4px 10px;
        border-radius: 3px;
        background: var(--component-background-level-1);
        border: 1px solid var(--border-color);
        font-size: var(--font-size--small);
        color: var(--main-text);
        white-space: nowrap;
      }
    }
    &:not(.active):hover {
      background: var(--component-background-level-3);
      // border-color: var(--border-color);
      cursor: pointer;
    }
    &.active {
      // background: var(--button-active);
      background-image: linear-gradient(45deg, #3ba7ff 4%, #9084e3 100%);
      // border: 1px solid var(--border-color);
      color: var(--dark-text);
    }
    /* &:first-child {
    margin-bottom: 20px;
  } */
    &__divider {
      align-self: center;
      width: 160px;
      margin: 30px 0;
      border-bottom: 1px solid var(--border-color);
      .grid--collapsed & {
        width: 30px;
      }
    }
    &__icon {
      width: 17px;
      height: 17px;
      border: 1px solid var(--icon-color);
      .active & {
        border-color: var(--icon-color-dark);
      }
    }
    &__name {
      margin-left: 13px;
      font-weight: 600;
      .grid--collapsed & {
        display: none;
      }
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
    background: var(--component-background-level-2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
  }
  .content-hero {
    height: 600px;
    display: flex;
    place-items: center;
    place-content: center;
    color: var(--dark-text);
    background-image: linear-gradient(45deg, #3ba7ff 4%, #9084e3 100%);
    padding-bottom: 80px;
    margin: -41px -41px 40px -41px;
    border-radius: 8px 8px 0 0;
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
    background: var(--component-background-level-2);
    border-bottom: 1px solid var(--border-color);
    border-radius: 6px 6px 0 0;
    &--content-header {
      position: sticky;
      top: 40px;
    }
    &--component-header {
      background: var(--component-background-level-3-lighter);
      // border-radius: 6px 6px 0 0;
    }
  }
  .content-header {
    // height: 60px;
    // border-bottom: 1px solid var(--border-color);
  }
  .content-body {
    padding: 40px;
    &--has-hero {
      // body > div > div.content-wrapper > div > div.content-body.content-body--has-hero > div:nth-child(2)
      & > div:nth-child(2) {
        margin-top: -120px;
      }
    }
  }
  .component-container {
    background: var(--component-background-level-3);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    & + & {
      margin-top: 10px;
    }
    // .component-header {
    // height: 60px;
    // background: var(--component-background-level-3-lighter);
    // border-bottom: 1px solid var(--border-color);
    // }
    .component-body {
      padding: 40px;
    }
  }
</style>
