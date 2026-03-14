<script setup lang="ts">
  interface EpFieldsetProps {
    label?: string
  }

  const { label = '' } = defineProps<EpFieldsetProps>()
</script>

<template>
  <fieldset class="ep-fieldset ep-fieldset--horizontal">
    <legend
      v-if="label"
      class="ep-fieldset__legend"
    >
      {{ label }}
    </legend>

    <div class="ep-fieldset__content">
      <slot />
    </div>
  </fieldset>
</template>