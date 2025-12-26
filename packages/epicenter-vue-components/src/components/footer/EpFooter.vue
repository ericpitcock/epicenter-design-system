<script setup>
</script>

<template>
  <div class="ep-footer">
    <div class="ep-footer__content">
      <div
        v-if="$slots.left"
        class="ep-footer__content__left"
      >
        <!-- @slot Content to display on the left side of the footer -->
        <slot name="left" />
      </div>
      <div
        v-if="$slots.center"
        class="ep-footer__content__center"
      >
        <!-- @slot Content to display in the center of the footer -->
        <slot name="center" />
      </div>
      <div
        v-if="$slots.right"
        class="ep-footer__content__right"
      >
        <!-- @slot Content to display on the right side of the footer -->
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
