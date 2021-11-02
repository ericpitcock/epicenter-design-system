<template>
  <div :class="['grid', { 'grid--collapsed': !sidebar }]">
    <div class="app-header">
      <div class="app-controls app-controls--left">
        <div class="app-header__button" @click="toggleSidebar">
          <div class="icon">
            <ep-icon :name="'menu'" />
          </div>
        </div>
        <div class="app-header__button">
          <div class="icon">
            <ep-icon :name="'notifications'" />
          </div>
        </div>
        <div class="app-header__button">
          <div class="icon">
            <ep-icon :name="'user'" />
          </div>
        </div>
        <div class="app-header__button app-header__button--flexible-width">
          <div class="customer">Dunder Mifflin</div>
        </div>
        <!-- <div class="app-header__button app-header__button--flexible-width">
          <div class="customer">Seattle</div>
        </div> -->
      </div>
      <div class="app-controls app-controls--right">
        <div class="app-header__button theme-toggle-icon" @click="toggleTheme">
          <div class="icon">
            <ep-icon :name="themeIcon()" />
          </div>
        </div>
        <div class="app-header__button">
          <div class="icon">
            <ep-icon :name="'help'" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="nav-container">
      <div class="nav">
        <div class="nav-item nav-item__logo">
          <esentire-logo :type="logoType()" />
        </div>
        <template v-for="(navItem, index) in navItems">
          <div
            :class="[
              'nav-item',
              kebab(navItem.name),
              { active: navItem.active }
            ]"
            @click="updateActiveNavItem(index)"
            :key="index"
          >
            <ep-icon :name="navItem.icon" />
            <div class="nav-item__name">{{ navItem.name }}</div>
          </div>
          <div v-if="index === 2" class="nav-item__divider" :key="`divider${index}`"></div>
        </template>
      </div>
    </div> -->
    <ep-navigation />
    <div :class="['content-wrapper', { 'content-wrapper--full-width': fullWidthContent }]">
      <div class="content-container">
        <div v-if="!hasHero" class="header header--content-header" style="display: flex; justify-content: space-between;">
          <div>Content header. It's for titles, tabs, buttons, etc. Can be sticky.</div>
          <div style="display: flex;">
          <div style="border: 1px solid var(--border-color); padding: 5px 14px; margin-right: 10px;">Site Picker</div>
          <div style="border: 1px solid var(--border-color); padding: 5px 14px;">Date Range Picker</div>
          <div class="icon" @click="fullWidthContent = !fullWidthContent">
            <ep-icon :name="'full-width'" />
          </div>
          </div>
        </div>
        <div :class="['content-body', { 'content-body--has-hero': hasHero } ]">
          <div v-if="hasHero" class="content-hero">
            This is the hero, where we highlight important content in a visually appealing way.
          </div>
          <div class="component-container">
            <div class="header header--component-header">
              Component header. It's also for titles, tabs, buttons, etc. Can also be sticky.
            </div>
            <div class="component-body">
              <p style="font-size: 30px;">WORK IN PROGRESS. Please don’t start building this. :-)</p>
              <!-- <p>TODO</p>
              <ol>
                <li>Define values for buttons, inputs, menus, modals, etc</li>
                <li>Test dark/light on all views</li>
                <li>Content header tabs, divider, button</li>
                <li>Active highlight (like on column filter inputs)</li>
              </ol> -->
            </div>
          </div>
          <div class="component-container">
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
import EpIcon from '@/style/icons/EpIcon'
// import EsentireLogo from './EsentireLogo'

export default {
  name: 'App',
  components: {
    EpNavigation,
    EpIcon
  },
  data: () => ({
    fullWidthContent: false,
    hasHero: false,
    // theme: 'dark'
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
// @import "./assets/scss/minireset.scss";
// @import "./assets/scss/themes";

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
//   background: var(--background);
//   background: var(--background--gradient);
//   background-attachment: fixed;
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
  // /* background: var(--background-level-1); */
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
  background: var(--app-header-background);
  border-bottom: 1px solid var(--border-color);
  z-index: 1;
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    &:hover {
      background: var(--foreground);
      // color: var();
    }
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
      width: 20px;
      height: 20px;
      // border: 1px solid var(--icon-color);
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

// .nav-container {
//   grid-column: 1 / 1;
//   grid-row: 2 / 2;
//   padding: 30px 20px;
//   .grid--collapsed & {
//     padding-left: 0;
//     padding-right: 0;
//   }
//   @media (max-width: 1024px) {
//     // display: none;
//   }
// }
// .nav {
//   position: fixed;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   .grid--collapsed & {
//     width: 50px;
//     align-items: center;
//   }
// }
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
// .nav-item {
//   height: 40px;
//   display: flex;
//   align-items: center;
//   padding-left: 30px;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   user-select: none;
//   // color: red;
//   & + & {
//     margin-top: 2px;
//   }
//   &__logo {
//     margin-bottom: 30px;
//     &:hover {
//       background: transparent !important;
//     }
//   }
//   .grid--collapsed & {
//     justify-content: center;
//     width: 40px;
//     padding: 0;
//     &:hover .nav-item__name {
//       display: block;
//       position: absolute;
//       left: 42px;
//       padding: 4px 10px;
//       border-radius: 3px;
//       background: var(--foreground);
//       border: 1px solid var(--foreground-border);
//       font-size: 12px;
//       color: var(--text-color);
//       white-space: nowrap;
//     }
//   }
//   &:not(.active):hover {
//     background: var(--foreground);
//     // border-color: var(--border-color);
//     cursor: pointer;
//   }
//   &.active {
//     // background: var(--button-active);
//     background-image: linear-gradient(45deg, #3ba7ff 4%, #9084e3 100% );
//     // border: 1px solid var(--border-color);
//     .nav-item__name { color: var(--text-color-inverse) !important; }
//     .ep-icon {
//       color: var(--text-color-inverse) !important;
//     }
//   }
//   /* &:first-child {
//     margin-bottom: 20px;
//   } */
//   &__divider {
//     align-self: center;
//     width: 160px;
//     margin: 30px 0;
//     border-bottom: 1px solid var(--border-color);
//     .grid--collapsed & {
//       width: 30px;
//     }
//   }
//   .ep-icon {
//     color: var(--primary-color--base);
//   }
//   &__name {
//     margin-left: 13px;
//     font-weight: 600;
//     color: var(--text-color);
//     .grid--collapsed & {
//       display: none;
//     }
//   }
// }
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
.content-hero {
  height: 600px;
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--dark-text);
  background-image: linear-gradient(45deg, #3ba7ff 4%, #9084e3 100% );
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
  
  border-bottom: 1px solid var(--border-color);
  border-radius: 6px 6px 0 0;
  &--content-header {
    position: sticky;
    top: 39px;
    background: var(--content-background--lighter);
  }
  &--component-header {
    background: var(--component-background--lighter);
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
