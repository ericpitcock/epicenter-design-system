<script setup lang="ts">
  interface Props {
    label?: string
  }

  const { label = '' } = defineProps<Props>()

  defineOptions({ name: 'EpFieldset' })
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