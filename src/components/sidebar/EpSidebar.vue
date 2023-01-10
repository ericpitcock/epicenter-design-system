<template>
  <!-- <div :class="['nav-container', { 'nav-container--minimized': minimized }]"> -->
    <nav :class="['main-nav', { 'nav-container--minimized': minimized }]">
      <template v-for="(navItem, index) in navItems" :key="index">
        <ep-divider v-if="navItem.divider" class="main-nav__item__divider" />
        <div
          v-else
          :class="[
            'main-nav__item',
            { 'main-nav__item--active': navItem.active }
          ]"
          @click="onClick(index)"
        >
          <ep-icon :name="navItem.icon" />
          <div class="main-nav__item__name">{{ navItem.name }}</div>
        </div>
      </template>
    </nav>
  <!-- </div> -->
</template>

<script>
  import EpDivider from '@/atoms/divider/EpDivider'
  import EpIcon from '@/atoms/icon/EpIcon'
  
  export default {
    name: 'EpSidebar',
    components: {
      EpDivider,
      EpIcon
    },
    props: {
      navItems: {
        type: Array,
        required: true
      },
      minimized: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      onClick(index) {
        this.$emit('nav-item-clicked', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-container {

  }
  .main-nav {
    // let this be set by the parent element
    // position: fixed;
    width: 200px;
    display: flex;
    flex-direction: column;
    .nav-container--minimized & {
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
      .nav-container--minimized & {
        justify-content: center;
        width: 40px;
        padding: 0;
        &:hover .main-nav__item__name {
          display: block;
          position: absolute;
          left: 42px;
          padding: 4px 10px;
          border-radius: 3px;
          background: var(--background-4);
          border: 1px solid var(--border-color--lighter);
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
        .nav-container--minimized & {
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
        .nav-container--minimized & {
          display: none;
        }
      }
    }
  }
</style>