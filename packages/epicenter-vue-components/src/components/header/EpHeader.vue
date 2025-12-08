<template>
  <div class="ep-header">
    <div class="ep-header__content">
      <div
        v-if="$slots.left"
        class="ep-header__content__left"
      >
        <!-- @slot Content to display on the left side of the header -->
        <slot name="left" />
      </div>
      <div
        v-if="$slots.center"
        class="ep-header__content__center"
      >
        <!-- @slot Content to display in the center of the header -->
        <slot name="center" />
      </div>
      <div
        v-if="$slots.right"
        class="ep-header__content__right"
      >
        <!-- @slot Content to display on the right side of the header -->
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpHeader',
  })
</script>
