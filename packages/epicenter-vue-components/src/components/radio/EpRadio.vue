<template>
  <label
    :class="['ep-radio', { 'ep-radio--checked': modelValue === value }]"
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
  const modelValue = defineModel({
    type: String,
    required: true
  })

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

<style lang="scss" scoped>
  .ep-radio {
    --ep-radio-checked-color: var(--primary-color-base);
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &--checked {
      color: var(--text-color--loud);

      .radio-dot {
        background-color: var(--ep-radio-checked-color);
        border-color: var(--ep-radio-checked-color);
      }
    }
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
</style>
