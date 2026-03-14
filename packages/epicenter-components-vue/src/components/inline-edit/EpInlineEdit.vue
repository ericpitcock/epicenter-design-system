<script setup lang="ts">
  import ArrowTurnBackward from '@ericpitcock/epicenter-icons-vue/ArrowTurnBackward'
  import { ref, useTemplateRef, watch } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  interface EpInlineEditProps {
    /** If true, disables editing. */
    disabled?: boolean
  }

  const { disabled = false } = defineProps<EpInlineEditProps>()

  const emit = defineEmits<{
    save: [value: string]
  }>()

  const modelValue = defineModel<string>({ required: true })

  const contentRef = useTemplateRef<HTMLDivElement>('contentRef')
  const isEditing = ref(false)
  const originalValue = ref('')
  const cancelled = ref(false)
  const hasChanged = ref(false)

  const onFocus = (): void => {
    isEditing.value = true
    originalValue.value = modelValue.value
    hasChanged.value = false
  }

  const onInput = (): void => {
    const current = contentRef.value?.textContent ?? ''
    hasChanged.value = current !== originalValue.value
  }

  const save = (): void => {
    const newValue = contentRef.value?.textContent ?? ''
    modelValue.value = newValue
    isEditing.value = false
    hasChanged.value = false
    emit('save', newValue)
  }

  const onBlur = (): void => {
    if (cancelled.value) {
      cancelled.value = false
      return
    }
    save()
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      contentRef.value?.blur()
    }
    if (event.key === 'Escape') {
      cancelled.value = true
      if (contentRef.value) {
        contentRef.value.textContent = originalValue.value
      }
      modelValue.value = originalValue.value
      isEditing.value = false
      contentRef.value?.blur()
    }
  }

  const onSaveClick = (): void => {
    save()
    contentRef.value?.blur()
  }

  const onCancelClick = (): void => {
    cancelled.value = true
    if (contentRef.value) {
      contentRef.value.textContent = originalValue.value
    }
    modelValue.value = originalValue.value
    isEditing.value = false
    hasChanged.value = false
    contentRef.value?.blur()
  }

  // Sync contenteditable text when modelValue changes externally
  watch(modelValue, (newVal) => {
    if (contentRef.value && contentRef.value.textContent !== newVal) {
      contentRef.value.textContent = newVal
    }
  })
</script>

<template>
  <div
    :class="[
      'ep-inline-edit',
      {
        'ep-inline-edit--editing': isEditing,
        'ep-inline-edit--disabled': disabled,
      }
    ]"
  >
    <span
      v-if="$slots['icon-left']"
      class="ep-inline-edit__icon"
    >
      <!-- @slot Optional icon displayed on the left side of the editable text -->
      <slot name="icon-left" />
    </span>
    <div
      ref="contentRef"
      class="ep-inline-edit__content"
      :contenteditable="!disabled"
      spellcheck="false"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keydown="onKeyDown"
    >
      {{ modelValue }}
    </div>
    <!-- isEditing && hasChanged -->
    <ep-flex
      v-if="isEditing && hasChanged"
      class="ep-inline-edit__actions gap-10"
    >
      <ep-flex
        class="gap-5 align-center"
        @mousedown.prevent="onSaveClick"
      >
        Save
        <ArrowTurnBackward style="--ep-icon-size: 1.4rem;" />
      </ep-flex>
      <ep-flex
        class="gap-6 align-center"
        @mousedown.prevent="onCancelClick"
      >
        Cancel
        <svg
          width="21"
          height="12"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="15"
            rx="2"
            stroke="currentColor"
          />
          <text
            x="14"
            y="11.5"
            text-anchor="middle"
            fill="currentColor"
            font-size="9"
            font-family="sans-serif"
            font-weight="500"
            letter-spacing="1"
          >ESC</text>
        </svg>
      </ep-flex>
    </ep-flex>
  </div>
</template>
