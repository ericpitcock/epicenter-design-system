<template>
  <div class="color-chips">
    <div
      v-for="{ value, name } in colors"
      :key="name"
      class="color-chip"
      :style="{ backgroundColor: value }"
    />
  </div>
</template>

<script>
  export default {
    name: 'ColorChips',
    props: {
      colors: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .color-chips {
    display: flex;
  }

  .color-chip {
    flex: 1;
    height: 100px;
  }
</style>