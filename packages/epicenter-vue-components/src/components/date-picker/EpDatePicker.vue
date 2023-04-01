<template>
  <div class="ep-date-picker">
    <ep-input
      id="dp"
      v-bind="inputProps"
      v-model="inputProps.value"
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
      dateFormat: {
        type: String,
        default: 'm/d/Y'
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
        inputProps: {
          backgroundColor: 'var(--background-1)',
          type: 'text',
          width: '250px',
          size: 'large',
          placeholder: 'Select a date',
          iconLeft: {
            name: 'calendar',
          },
          clearable: false,
          value: ''
        },
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
        })
      },
      onInput(event) {
        this.value = event.target.value
        this.$emit('input', event.target.value)
        console.log('onInput', event.target.value)
      },
      onChange(selectedDates, dateStr) {
        this.inputProps.value = dateStr
        this.$emit('change', selectedDates, dateStr)
        console.log('onChange', dateStr)
        console.log('inputProps.value', this.inputProps.value)
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
        this.inputProps.value = ''
        console.log('onOpen', dateStr)
      },
    }
  }
</script>
