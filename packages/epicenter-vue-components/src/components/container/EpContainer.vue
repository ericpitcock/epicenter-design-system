<template>
  <div
    ref="epContainer"
    class="ep-container"
  >
    <div
      v-if="$slots.header"
      class="ep-container__header"
    >
      <!-- 
        @slot header - The header content.
      -->
      <slot name="header" />
    </div>
    <div class="ep-container__content">
      <!-- 
        @slot The content of the container.
      -->
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-container__footer"
    >
      <!-- 
        @slot footer - The footer content.
      -->
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import { useTemplateRef } from 'vue'

  defineOptions({
    name: 'EpContainer'
  })

  const epContainer = useTemplateRef('epContainer')
</script>
