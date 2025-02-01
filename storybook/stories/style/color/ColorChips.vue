<template>
  <div class="color-chips">
    <div
      v-for="name in colors"
      :key="name"
      class="color-chip"
      :style="{ backgroundColor: `var(${name})` }"
      :data-color-name="name"
    >
      <p class="name">
        {{ sanitizeColorName(name) }}
      </p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    colors: {
      type: Object,
      required: true,
    },
  })

  const sanitizeColorName = (name) => {
    return name.replace('--primary-color-', '')
  }
</script>

<style lang="scss" scoped>
  .color-chips {
    flex: 1;
    display: flex;
  }

  .color-chip {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover {
      .name {
        display: block;
        color: white;
        text-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.5);
      }
    }
  }

  .name {
    display: none;
  }
</style>