<template>
  <div class="ep-date-picker">
    <ep-input
      v-bind="computedInputProps"
      v-model="value"
    />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpDatePicker'
  })

  import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
  import EpInput from '../input/EpInput.vue'

  const props = defineProps({
    enableCloseOnSelect: {
      type: Boolean,
      default: true
    },
    positionX: {
      type: String,
      default: 'left'
    },
    positionY: {
      type: String,
      default: 'auto'
    },
    dateFormat: {
      type: String,
      default: 'm/d/Y'
    },
    inputProps: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String,
      default: 'single'
    }
  })

  const emit = defineEmits(['input', 'change', 'focus', 'blur', 'keydown'])

  const datePickerInput = ref(null)
  const value = ref('')

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
    ...props.inputProps,
  }))

  let flatpickrInstance = null // Reference for dynamic import

  const initFlatpickr = async () => {
    if (!flatpickrInstance) {
      const { default: Flatpickr } = await import('flatpickr') // Dynamic import
      flatpickrInstance = Flatpickr
    }

    flatpickrInstance('#dp', {
      closeOnSelect: props.enableCloseOnSelect,
      dateFormat: props.dateFormat,
      mode: props.mode,
      position: `${props.positionY} ${props.positionX}`,
      onChange: onChange,
      onOpen: onOpen,
    })
  }

  onMounted(initFlatpickr)

  watch(
    () => [props.mode],
    initFlatpickr
  )

  const onChange = (selectedDates, dateStr) => {
    value.value = dateStr
    emit('change', selectedDates, dateStr)
  }

  const onOpen = () => {
    value.value = ''
  }

  onBeforeUnmount(() => {
    if (datePickerInput.value) {
      datePickerInput.value.flatpickrInstance?.destroy()
    }
  })
</script>