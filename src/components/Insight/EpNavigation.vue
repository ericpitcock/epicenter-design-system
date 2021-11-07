<template>
  <div class="nav-container">
    <nav class="main-nav">
      <div class="main-nav__item main-nav__item--logo">
        <esentire-logo :type="logoType" />
      </div>
      <template v-for="(navItem, index) in navItems">
        <div
          :class="[
            'main-nav__item',
            { 'main-nav__item--active': navItem.active }
          ]"
          @click="updateActiveNavItem(index)"
          :key="index"
        >
          <ep-icon :name="navItem.icon" />
          <div class="main-nav__item__name">{{ navItem.name }}</div>
        </div>
        <div v-if="index === 2" class="main-nav__item__divider" :key="`divider${index}`"></div>
      </template>
    </nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import EpIcon from '@/style/icons/EpIcon'
  import EsentireLogo from './EsentireLogo'
  
  export default {
    name: 'Navigation',
    components: {
      EpIcon,
      EsentireLogo
    },
    data: () => ({
      navItems: [
        {
          name: 'Summary',
          icon: 'dashboard',
          active: true
        },
        {
          name: 'Assets',
          icon: 'display',
          active: false
        },
        {
          name: 'Investigations',
          icon: 'target',
          active: false
        },
        {
          name: 'Risk Rating',
          icon: 'star',
          active: false
        },
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
    }),
    methods: {
      // for demo purposes only
      updateActiveNavItem(index) {
        this.navItems.forEach((item) => {
          item.active = false
        })
        this.navItems[index].active = true
      }
    },
    computed: {
      ...mapGetters({ sidebar: 'getSidebarState'}),
      logoType() {
        return this.sidebar ? 'full' : 'icon'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-container {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    padding: 30px 20px;
    .grid--nav-collapsed & {
      padding-left: 0;
      padding-right: 0;
    }
    @media (max-width: 1024px) {
      // display: none;
    }
  }
  .main-nav {
    position: fixed;
    width: 200px;
    display: flex;
    flex-direction: column;
    .grid--nav-collapsed & {
      width: 50px;
      align-items: center;
    }
    &__item {
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      border: 1px solid transparent;
      border-radius: 3px;
      user-select: none;
      & + & {
        margin-top: 2px;
      }
      &--logo {
        margin-bottom: 30px;
        &:hover {
          background: transparent !important;
        }
      }
      .grid--nav-collapsed & {
        justify-content: center;
        width: 40px;
        padding: 0;
        &:hover .nav-item__name {
          display: block;
          position: absolute;
          left: 42px;
          padding: 4px 10px;
          border-radius: 3px;
          background: var(--foreground);
          border: 1px solid var(--foreground-border);
          font-size: 12px;
          color: var(--text-color) !important;
          white-space: nowrap;
        }
      }
      &:not(.main-nav__item--active):hover {
        background: var(--nav-link-hover-bg-color);
        cursor: pointer;
      }
      &--active {
        background-image: var(--nav-link-active-bg-color);
        .main-nav__item__name { color: var(--nav-link-active-text-color) !important; }
        .ep-icon { color: var(--nav-link-active-icon-color) !important; }
      }
      &__divider {
        align-self: center;
        width: 160px;
        margin: 30px 0;
        border-bottom: 1px solid var(--border-color);
        .grid--nav-collapsed & {
          width: 30px;
        }
      }
      .ep-icon {
        color: var(--nav-link-icon-color);
      }
      &__name {
        margin-left: 13px;
        font-weight: 600;
        color: var(--text-color);
        .grid--nav-collapsed & {
          display: none;
        }
      }
    }
  }
</style>