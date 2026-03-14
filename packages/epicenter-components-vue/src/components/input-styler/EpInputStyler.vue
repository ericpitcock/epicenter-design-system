<script setup lang="ts">
  import Cancel01 from '@ericpitcock/epicenter-icons-vue/Cancel01'
  import { computed } from 'vue'

  import type { Size } from '../../types'

  interface EpInputStylerProps {
    clearable?: boolean
    disabled?: boolean
    error?: boolean
    errorEnabled?: boolean
    errorMessage?: string
    hasInput?: boolean
    id?: string
    label?: string
    size?: Size
  }

  const {
    clearable = false,
    disabled = false,
    error = false,
    errorEnabled = false,
    errorMessage = '',
    hasInput = false,
    id = '',
    label = '',
    size = 'default',
  } = defineProps<EpInputStylerProps>()

  defineEmits<{
    click: []
  }>()

  const computedClasses = computed(() => ({
    [`ep-input-styler--${size}`]: size !== 'default',
    'ep-input-styler--disabled': disabled,
    'ep-input-styler--error': error,
  }))
</script>

<template>
  <div class="ep-input-styler__container">
    <label
      v-if="label"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <div :class="['ep-input-styler', computedClasses]">
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
            v-if="clearable && hasInput && !disabled"
            class="ep-input-styler__icon-right--clickable"
            @click="$emit('click')"
          />
        </div>
      </div>
      <slot />
    </div>
    <p
      v-if="errorEnabled"
      class="ep-input-styler__error-message"
    >
      {{ errorMessage || '\u00A0' }}
    </p>
  </div>
</template>