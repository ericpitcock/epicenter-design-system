<template>
  <label
    :class="['ep-radio', { 'checked': modelValue === value }]"
    :for="id"
  >
    <input
      :id="id"
      v-model="modelValue"
      :name="name"
      :value="value"
      type="radio"
    >
    <span class="radio-dot" />
    {{ label }}
  </label>
</template>

<script setup>
  const modelValue = defineModel({ type: String })

  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
  .ep-radio {
    --ep-radio-checked-color: var(--primary-color-base);
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .ep-radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .radio-dot {
    width: 14px;
    height: 14px;
    border: 1px solid var(--border-color--lighter);
    border-radius: 50%;
  }

  .checked .radio-dot {
    background-color: var(--ep-radio-checked-color);
    border-color: var(--ep-radio-checked-color);
  }
</style>
