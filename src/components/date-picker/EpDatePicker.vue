<template>
  <div class="ep-date-picker">
    <input
      id="dp" 
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />
  </div>
</template>

<script>
import flatpickr from 'flatpickr'

export default {
  name: 'EpDatePicker',
  props: {
    // id: {
    //   type: String,
    //   default: undefined
    // },
    // name: {
    //   type: String,
    //   default: undefined
    // },
    // value: {
    //   type: String,
    //   default: undefined
    // },
    // placeholder: {
    //   type: String,
    //   default: undefined
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    // required: {
    //   type: Boolean,
    //   default: false
    // },
    // readonly: {
    //   type: Boolean,
    //   default: false
    // },
    // tabindex: {
    //   type: Number,
    //   default: undefined
    // },
    // autocomplete: {
    //   type: String,
    //   default: undefined
    // },
    // autofocus: {
    //   type: Boolean,
    //   default: false
    // },
    // form: {
    //   type: String,
    //   default: undefined
    // },
    // type: {
    //   type: String,
    //   default: 'text'
    // },
    // min: {
    //   type: String,
    //   default: undefined
    // },
    // max: {
    //   type: String,
    //   default: undefined
    // },
    // step: {
    //   type: String,
    //   default: undefined
    // },
    // inputClass: {
    //   type: String,
    //   default: undefined
    // },
    // inputStyle: {
    //   type: Object,
    //   default: () => {}
    // },
    // locale: {
    //   type: String,
    //   default: 'en'
    // },
    // dateFormat: {
    //   type: String,
    //   default: 'Y-m-d'
    // },
    // altFormat: {
    //   type: String,
    //   default: 'F j, Y'
    // },
    // altInput: {
    //   type: Boolean,
    //   default: true
    // },
    // altInputClass: {
    //   type: String,
    //   default: 'ep-date-picker__alt-input'
    // },
    // allowInput: {
    //   type: Boolean,
    //   default: true
    // },
    // enableTime: {
    //   type: Boolean,
    //   default: false
    // },
    // noCalendar: {
    //   type: Boolean,
    //   default: false
    // },
    // enableSeconds: {
    //   type: Boolean,
    //   default: false
    // },
    // time_24hr: {
    //   type: Boolean,
    //   default: false
    // },
    // enable: {
    //   type: Array,
    //   default: () => []
    // },
    // disable: {
    //   type: Array,
    //   default: () => []
    // },
    // mode: {
    //   type: String,
    //   default: 'single'
    // },
    // inline: {
    //   type: Boolean,
    //   default: false
    // },
    // wrap: {
    //   type: Boolean,
    //   default: false
    // },
    // clickOpens: {
    //   type: Boolean,
    //   default: true
    // },
    // closeOnSelect: {
    //   type: Boolean,
    //   default: true
    // },
    // closeOnScroll: {
    //   type: Boolean,
    //   default: true
    // },
    // weekNumbers: {
    //   type: Boolean,
    //   default: false
    // },
    // shorthandCurrentMonth: {
    //   type: Boolean,
    //   default: false
    // },
    // parseDate: {
    //   type: Function,
    //   default: undefined
    // },
    // formatDate: {
    //   type: Function,
    //   default: undefined
    // },
    // onChange: {
    //   type: Function,
    //   default: undefined
    // },
    // onOpen: {
    //   type: Function,
    //   default: undefined
    // },
    // onClose: {
    //   type: Function,
    //   default: undefined
    // },
    // onMonthChange: {
    //   type: Function,
    //   default: undefined
    // },
    // onYearChange: {
    //   type: Function,
    //   default: undefined
    // },
    // onReady: {
    //   type: Function,
    //   default: undefined
    // },
    // onValueUpdate: {
    //   type: Function,
    //   default: undefined
    // },
    // onDayCreate: {
    //   type: Function,
    //   default: undefined
    // }
  },
  data() {
    return {
      flatpickr: null
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
        // dateFormat: this.dateFormat,
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
        // mode: this.mode,
        // inline: this.inline,
        // wrap: this.wrap,
        // clickOpens: this.clickOpens,
        // closeOnSelect: this.closeOnSelect,
        // closeOnScroll: this.closeOnScroll,
        // weekNumbers: this.weekNumbers,
        // shorthandCurrentMonth: this.shorthandCurrentMonth,
        // parseDate: this.parseDate,
        // formatDate: this.formatDate,
        // onChange: this.onChange,
        // onOpen: this.onOpen,
        // onClose: this.onClose,
        // onMonthChange: this.onMonthChange,
        // onYearChange: this.onYearChange,
        // onReady: this.onReady,
        // onValueUpdate: this.onValueUpdate,
        // onDayCreate: this.onDayCreate
      })
    },
    onInput(event) {
      this.$emit('input', event.target.value)
      console.log('onInput', event.target.value)
    },
    onChange(selectedDates, dateStr, instance) {
      this.$emit('change', selectedDates, dateStr, instance)
      console.log('onChange', selectedDates, dateStr, instance)
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~flatpickr/dist/flatpickr.css';

  input {
    width: 20rem;
    // height: 2rem;
    padding: 0.7rem;
    background-color: var(--background-2);
    border: 1px solid var(--border-color);
  }
</style>