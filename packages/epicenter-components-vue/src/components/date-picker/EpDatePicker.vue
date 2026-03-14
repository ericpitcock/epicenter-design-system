<script setup lang="ts">
  import Calendar01 from '@ericpitcock/epicenter-icons-vue/Calendar01'
  import type { ComponentPublicInstance } from 'vue'
  import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'

  import EpInput from '../input/EpInput.vue'

  type DatePickerMode = 'single' | 'multiple' | 'range'

  interface EpDatePickerProps {
    dateFormat?: string
    enableCloseOnSelect?: boolean
    inputProps?: Record<string, unknown>
    mode?: DatePickerMode
    positionX?: string
    positionY?: string
  }

  const {
    dateFormat = 'm/d/Y',
    enableCloseOnSelect = true,
    inputProps = {},
    mode = 'single',
    positionX = 'left',
    positionY = 'auto',
  } = defineProps<EpDatePickerProps>()

  const emit = defineEmits<{
    input: []
    change: [selectedDates: Date[], dateStr: string]
    focus: []
    blur: []
    keydown: []
  }>()

  const datePickerInput = useTemplateRef<ComponentPublicInstance>('datePickerInput')
  const value = ref('')
  let flatpickrInstance: { destroy: () => void } | null = null

  const inputDefaults = {
    inputId: 'dp',
    type: 'text',
    width: '30rem',
    placeholder: 'Select a date',
    placeholderColor: 'var(--text-color)',
    iconLeft: {
      name: 'calendar',
    },
  }

  const computedInputProps = computed(() => ({
    ...inputDefaults,
    ...inputProps,
  }))

  const initFlatpickr = async (): Promise<void> => {
    if (!datePickerInput.value) return

    if (!flatpickrInstance) {
      const { default: Flatpickr } = await import('flatpickr')
      flatpickrInstance = new (Flatpickr as any)(datePickerInput.value.$el as HTMLElement, {
        closeOnSelect: enableCloseOnSelect,
        dateFormat: dateFormat,
        mode: mode,
        position: `${positionY} ${positionX}`,
        onChange: onChange,
        onOpen: onOpen,
      })
    }
  }

  onMounted(() => {
    initFlatpickr()
  })

  watch(() => mode, () => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy()
      flatpickrInstance = null
    }
    initFlatpickr()
  })

  const onChange = (selectedDates: Date[], dateStr: string): void => {
    value.value = dateStr
    emit('change', selectedDates, dateStr)
  }

  const onOpen = (): void => {
    value.value = ''
  }

  onBeforeUnmount(() => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy()
      flatpickrInstance = null
    }
  })
</script>

<template>
  <div class="ep-date-picker">
    <ep-input
      v-bind="computedInputProps"
      ref="datePickerInput"
      v-model="value"
    >
      <template #icon-left>
        <Calendar01 />
      </template>
    </ep-input>
  </div>
</template>