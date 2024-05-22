<template>
  <div class="color-chips">
    <div
      v-for="name in colors"
      :key="name"
      :class="['color-chip', { 'color-chip--base': isColorBase(name) }]"
      :style="{ backgroundColor: `var(${name})` }"
      :data-color-name="name"
    >
      <p class="name">
        {{ sanitizeColorName(name) }}
      </p>
    </div>
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
    methods: {
      getPropertyValue(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name)
      },
      isColorBase(name) {
        return name === '--primary-color-base'
      },
      sanitizeColorName(name) {
        // remove --primary-color- from name
        return name.replace('--primary-color-', '')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .color-chips {
    flex: 1;
    display: flex;
    // gap: 0.5rem;
  }

  .color-chip {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &--base {
      border: 1px solid white;
    }

    &:hover {
      .name {
        display: block;
        color: white;
        // text shadow
        text-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.5);
      }
    }
  }

  .name {
    display: none;
  }
</style>