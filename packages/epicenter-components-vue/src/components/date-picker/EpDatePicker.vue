<script setup lang="ts">
  import Calendar01 from '@ericpitcock/epicenter-icons-vue/Calendar01'
  import type { ComponentPublicInstance } from 'vue'
  import { computed, onBeforeUnmount, onMounted, onUpdated, ref, useTemplateRef } from 'vue'

  import EpInput from '../input/EpInput.vue'

  interface Props {
    dateFormat?: string
    enableCloseOnSelect?: boolean
    inputProps?: Record<string, unknown>
    mode?: 'single' | 'multiple' | 'range'
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
  } = defineProps<Props>()

  const emit = defineEmits<{
    input: []
    change: [selectedDates: Date[], dateStr: string]
    focus: []
    blur: []
    keydown: []
  }>()

  defineOptions({ name: 'EpDatePicker' })

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
  const flatpickrConfigSignature = computed(() => `${mode}::${dateFormat}::${enableCloseOnSelect}::${positionX}::${positionY}`)
  const previousConfigSignature = ref('')

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

  const resetFlatpickr = async (): Promise<void> => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy()
      flatpickrInstance = null
    }

    await initFlatpickr()
  }

  onMounted(() => {
    previousConfigSignature.value = flatpickrConfigSignature.value
    void initFlatpickr()
  })

  onUpdated(() => {
    if (previousConfigSignature.value === flatpickrConfigSignature.value) return

    previousConfigSignature.value = flatpickrConfigSignature.value
    void resetFlatpickr()
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