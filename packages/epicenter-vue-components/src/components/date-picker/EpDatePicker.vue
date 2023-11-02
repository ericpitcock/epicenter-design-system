<template>
  <div class="ep-date-picker">
    <ep-input
      v-bind="computedInputProps"
      v-model="value"
    />
  </div>
</template>

<script>
  import flatpickr from 'flatpickr'
  import EpInput from '../input/EpInput.vue'

  export default {
    name: 'EpDatePicker',
    components: {
      EpInput
    },
    props: {
      positionX: {
        type: String,
        default: 'left' // left, center, righ
      },
      positionY: {
        type: String,
        default: 'auto' // auto, above, below
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
        default: 'single' // single, multiple, range
      },
    },
    emits: ['input', 'change', 'focus', 'blur', 'keydown'],
    data() {
      return {
        flatpickr: null,
        value: '',
        inputDefaults: {
          inputId: 'dp',
          type: 'text',
          width: '30rem',
          placeholder: 'Select a date',
          placeholderColor: 'var(--text-color)',
          iconLeft: {
            name: 'calendar',
          },
        },
      }
    },
    computed: {
      computedInputProps() {
        return {
          ...this.inputDefaults,
          ...this.inputProps,
          // onInput: this.onInput,
          // onFocus: this.onFocus,
          // onBlur: this.onBlur,
          // onKeydown: this.onKeydown,
        }
      }
    },
    mounted() {
      this.initFlatpickr()
    },
    beforeUnmount() {
      this.flatpickr.destroy()
    },
    methods: {
      initFlatpickr() {
        this.flatpickr = flatpickr('#dp', {
          // locale: this.locale,
          dateFormat: this.dateFormat,
          // altFormat: this.altFormat,
          // altInput: this.altInput,
          // altInputClass: this.altInputClass,
          // allowInput: this.allowInput,
          // enableTime: this.enableTime,
          // noCalendar: this.noCalendar,
          // enableSeconds: this.enableSeconds,
          // time_24hr: this.time_24hr,
          // enable: this.enable,
          // disable: this.disable,
          mode: this.mode,
          // inline: this.inline,
          // wrap: this.wrap,
          // clickOpens: this.clickOpens,
          // closeOnSelect: this.closeOnSelect,
          // closeOnScroll: this.closeOnScroll,
          // weekNumbers: this.weekNumbers,
          // shorthandCurrentMonth: this.shorthandCurrentMonth,
          // parseDate: this.parseDate,
          // formatDate: this.formatDate,
          onChange: this.onChange,
          onOpen: this.onOpen,
          // onClose: this.onClose,
          // onMonthChange: this.onMonthChange,
          // onYearChange: this.onYearChange,
          // onReady: this.onReady,
          // onValueUpdate: this.onValueUpdate,
          // onDayCreate: this.onDayCreate
          position: `${this.positionY} ${this.positionX}`,
        })
      },
      onInput(event) {
        this.value = event.target.value
        this.$emit('input', event.target.value)
        console.log('onInput', event.target.value)
      },
      onChange(selectedDates, dateStr) {
        this.value = dateStr
        this.$emit('change', selectedDates, dateStr)
        console.log('onChange', dateStr)
        console.log('inputProps.value', this.value)
      },
      onFocus(event) {
        this.$emit('focus', event)
        console.log('onFocus', event)
      },
      onBlur(event) {
        this.$emit('blur', event)
        console.log('onBlur', event)
      },
      onKeydown(event) {
        this.$emit('keydown', event)
        console.log('onKeydown', event)
      },
      onOpen(selectedDates, dateStr) {
        this.value = ''
        console.log('onOpen', dateStr)
      },
    }
  }
</script>
