<template>
  <div class="ep-input-styler__container">
    <label
      v-if="label"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <div :class="[
      'ep-input-styler',
      { 'ep-input-styler--disabled': disabled },
      `ep-input-styler--${size}`
    ]">
      <div class="ep-input-styler__inner">
        <div
          v-if="$slots['icon-left']"
          :class="[
            'ep-input-styler__icon-left',
            `ep-input-styler__icon-left--${size}`
          ]"
        >
          <slot name="icon-left" />
        </div>
        <div
          v-if="$slots['icon-right'] || clearable"
          :class="[
            'ep-input-styler__icon-right',
            `ep-input-styler__icon-right--${size}`
          ]"
        >
          <slot
            v-if="$slots['icon-right'] && !clearable"
            name="icon-right"
          />
          <Cancel01
            v-if="clearable && hasInput"
            class="ep-input-styler__icon-right--clickable"
            @click="$emit('click')"
          />
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import Cancel01 from '@ericpitcock/epicenter-icons/epicenter-icons/Cancel01'
  // import { computed } from 'vue'

  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    hasInput: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  defineEmits(['click'])
</script>