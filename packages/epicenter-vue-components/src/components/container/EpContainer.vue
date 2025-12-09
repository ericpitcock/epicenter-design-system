<template>
  <div
    ref="epContainer"
    class="ep-container"
  >
    <div
      v-if="$slots.header"
      class="ep-container__header"
    >
      <!-- @slot Header content of the container -->
      <slot name="header" />
    </div>
    <div class="ep-container__content">
      <!-- @slot Main content of the container -->
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-container__footer"
    >
      <!-- @slot Footer content of the container -->
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import { useTemplateRef } from 'vue'

  const epContainer = useTemplateRef('epContainer')

  defineExpose({
    epContainer
  })
</script>
