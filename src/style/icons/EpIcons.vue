<template>
  <ep-container :fullWidth="true" class="icons">
    <div v-for="icon in svgIcons" :key="icon" class="icon-container">
      <EpIcon :name="icon.name.slice(2, -4)" />
      <div>{{ icon.name.slice(2, -4) }}</div>
    </div>
  </ep-container>
</template>

<script>
  import svgIcons from './load-icons'
  import EpIcon from './EpIcon.vue'
  import EpContainer from '@/components/container/EpContainer.vue'

  export default {
    data: () => ({
      svgIcons
    }),
    components: {
      EpIcon,
      EpContainer
    }
  }
</script>

<style lang="scss" scoped>
  .icons {
    display: flex;
    gap: 20px 20px;
    flex-wrap: wrap;
  }
  .icon-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px 0;
    padding: 20px;
    border: 1px solid var(--border-color);
  }
</style>