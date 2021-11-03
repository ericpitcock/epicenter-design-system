<template>
  <div class="nav-container">
    <div class="nav">
      <div class="nav-item nav-item__logo">
        <esentire-logo :type="logoType" />
      </div>
      <template v-for="(navItem, index) in navItems">
        <div
          :class="[
            'nav-item',
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
      updateActiveNavItem(index) {
        // for demo purposes only
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
    .grid--collapsed & {
      padding-left: 0;
      padding-right: 0;
    }
    @media (max-width: 1024px) {
      // display: none;
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
  .nav-item {
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
        background: var(--foreground);
        border: 1px solid var(--foreground-border);
        font-size: 12px;
        color: var(--text-color) !important;
        white-space: nowrap;
      }
    }
    &:not(.active):hover {
      background: var(--foreground);
      cursor: pointer;
    }
    &.active {
      background-image: linear-gradient(45deg, #3ba7ff 4%, #9084e3 100% );
      .nav-item__name { color: var(--text-color-inverse) !important; }
      .ep-icon {
        color: var(--text-color-inverse) !important;
      }
    }
    &__divider {
      align-self: center;
      width: 160px;
      margin: 30px 0;
      border-bottom: 1px solid var(--border-color);
      .grid--collapsed & {
        width: 30px;
      }
    }
    .ep-icon {
      color: var(--primary-color--base);
    }
    &__name {
      margin-left: 13px;
      font-weight: 600;
      color: var(--text-color);
      .grid--collapsed & {
        display: none;
      }
    }
  }
</style>