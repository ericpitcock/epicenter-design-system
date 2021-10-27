<template>
  <div class="ep-menu">
    <ep-menu-item
      v-for="(item, index) in menuItems"
      :key="index"
    >
      {{ item.text }}
    </ep-menu-item>
  </div>
</template>

<script>
  import EpMenuItem from '@/components/menuItem/EpMenuItem'
  
  export default {
    name: 'EpMenu',
    components: {
      EpMenuItem
    },
    props: {
      menuItems: {
        type: Array
      }
    },
    data: () => ({
      
    })
  }
</script>

<style lang="scss" scoped>
  .ep-menu {
    height: 300px;
    background: var(--foreground);
    padding: 10px 0;
    border: 1px solid var(--border-color);
    border-radius: 3px;
    box-shadow: 0 5px 8px hsla(0,0,0,0.1);
  }
</style>