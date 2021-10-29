<template>
  <div class="icons">
    <ep-container v-for="(icon, index) in svgIcons" :key="index" class="icon-container">
      <ep-icon :name="icon.name" />
      <div class="text--subtle">{{ icon.name }}</div>
    </ep-container>
  </div>
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
    gap: 10px;
    flex-wrap: wrap;
  }
  .icon-container {
    flex: 0 0 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 20px 0;
  }
</style>