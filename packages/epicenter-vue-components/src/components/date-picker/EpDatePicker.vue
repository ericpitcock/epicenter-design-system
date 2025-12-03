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

<script setup>
  import Calendar01 from '@ericpitcock/epicenter-icons/icons/Calendar01'
  import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

  import EpInput from '../input/EpInput.vue'

  defineOptions({
    name: 'EpDatePicker'
  })

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
  let flatpickrInstance = null

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

  const initFlatpickr = async () => {
    if (!datePickerInput.value) return

    if (!flatpickrInstance) {
      const { default: Flatpickr } = await import('flatpickr')
      flatpickrInstance = new Flatpickr(datePickerInput.value.$el, {
        closeOnSelect: props.enableCloseOnSelect,
        dateFormat: props.dateFormat,
        mode: props.mode,
        position: `${props.positionY} ${props.positionX}`,
        onChange: onChange,
        onOpen: onOpen,
      })
    }
  }

  onMounted(() => {
    initFlatpickr()
  })

  watch(() => props.mode, () => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy()
      flatpickrInstance = null
    }
    initFlatpickr()
  })

  const onChange = (selectedDates, dateStr) => {
    value.value = dateStr
    emit('change', selectedDates, dateStr)
  }

  const onOpen = () => {
    value.value = ''
  }

  onBeforeUnmount(() => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy()
      flatpickrInstance = null
    }
  })
</script>