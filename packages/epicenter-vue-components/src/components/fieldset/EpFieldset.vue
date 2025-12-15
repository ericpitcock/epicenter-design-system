<template>
  <fieldset class="ep-fieldset">
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

<script setup>
  defineProps({
    label: {
      type: String,
      default: ''
    }
  })
</script>