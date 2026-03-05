<script setup lang="ts">
  interface EpFieldsetProps {
    label?: string
  }

  const props = withDefaults(defineProps<EpFieldsetProps>(), {
    label: '',
  })
</script>

<template>
  <fieldset class="ep-fieldset ep-fieldset--horizontal">
    <legend
      v-if="props.label"
      class="ep-fieldset__legend"
    >
      {{ props.label }}
    </legend>

    <div class="ep-fieldset__content">
      <slot />
    </div>
  </fieldset>
</template>