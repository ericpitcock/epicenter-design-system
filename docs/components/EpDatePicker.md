# EpDatePicker



`EpDatePicker` wraps flatpickr. You can select so many dates. Or just one.

## Usage
```vue
<template>
  <ep-date-picker v-bind="datePickerProps" />
</template>

<script setup>
import { EpDatePicker } from '@epicenter/vue-components'

const datePickerProps = {
  enableCloseOnSelect: false,
  inputProps: {
    size: 'xlarge',
  },
  dateFormat: 'm/d/Y',
  mode: 'single',
  positionX: 'left',
  positionY: 'auto',
}
</script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `enableCloseOnSelect` | If true, closes the date picker when a date is selected. | `boolean` | `true` |
| `positionX` | Horizontal position of the date picker dropdown. | `string` | `'left'` |
| `positionY` | Vertical position of the date picker dropdown. | `string` | `'auto'` |
| `dateFormat` | Date format string for the input display (Flatpickr format). | `string` | `'m/d/Y'` |
| `inputProps` | Props to pass through to the underlying EpInput component. | `object` | `{}` |
| `mode` | Selection mode for the date picker. | `string` | `'single'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `input` | - | - |
| `change` | - | - |
| `focus` | - | - |
| `blur` | - | - |
| `keydown` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
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
  import Calendar01 from '@ericpitcock/epicenter-icons/epicenter-icons/Calendar01'
  import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

  import EpInput from '../input/EpInput.vue'

  const props = defineProps({
    /**
     * If true, closes the date picker when a date is selected.
     */
    enableCloseOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Horizontal position of the date picker dropdown.
     * @values 'left', 'right', 'auto'
     */
    positionX: {
      type: String,
      default: 'left'
    },
    /**
     * Vertical position of the date picker dropdown.
     * @values 'auto', 'above', 'below'
     */
    positionY: {
      type: String,
      default: 'auto'
    },
    /**
     * Date format string for the input display (Flatpickr format).
     * @example 'm/d/Y', 'Y-m-d', 'd-m-Y'
     */
    dateFormat: {
      type: String,
      default: 'm/d/Y'
    },
    /**
     * Props to pass through to the underlying EpInput component.
     */
    inputProps: {
      type: Object,
      default: () => ({})
    },
    /**
     * Selection mode for the date picker.
     * @values 'single', 'multiple', 'range'
     */
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
```

## Styles (SCSS)

```scss
// @import '~flatpickr/dist/flatpickr.css';
// give every child of .flatpickr-calendar a red border
.flatpickr-calendar {
  position: absolute;
  display: none;
  width: fit-content;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid var(--border-color--lighter);
  border-radius: var(--border-radius);
  -webkit-animation: none;
  animation: none;
  background: transparent;
  background: var(--interface-overlay);
  direction: ltr;
  // font-size: 14px;
  line-height: 24px;
  opacity: 0;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  visibility: hidden;
  // -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);
  //         box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);
}

.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  max-height: 640px;
  opacity: 1;
  visibility: visible;
}

.flatpickr-calendar.open {
  z-index: 99999;
  display: inline-block;
}

.flatpickr-calendar.animate.open {
  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.flatpickr-calendar.inline {
  position: relative;
  top: 2px;
  display: block;
}

.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}

.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  -webkit-box-shadow: -2px 0 0 var(--primary-color-base), 5px 0 0 var(--primary-color-base);
  box-shadow: -2px 0 0 var(--primary-color-base), 5px 0 0 var(--primary-color-base);
}

.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}

.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid #e6e6e6;
}

.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}

// .flatpickr-calendar:before,
// .flatpickr-calendar:after {
//   position: absolute;
//   display: block;
//   pointer-events: none;
//   border: solid transparent;
//   content: '';
//   height: 0;
//   width: 0;
//   left: 22px;
// }
// .flatpickr-calendar.rightMost:before,
// .flatpickr-calendar.arrowRight:before,
// .flatpickr-calendar.rightMost:after,
// .flatpickr-calendar.arrowRight:after {
//   left: auto;
//   right: 22px;
// }
// .flatpickr-calendar.arrowCenter:before,
// .flatpickr-calendar.arrowCenter:after {
//   left: 50%;
//   right: 50%;
// }
// .flatpickr-calendar:before {
//   border-width: 5px;
//   margin: 0 -5px;
// }
// .flatpickr-calendar:after {
//   border-width: 4px;
//   margin: 0 -4px;
// }
// .flatpickr-calendar.arrowTop:before,
// .flatpickr-calendar.arrowTop:after {
//   bottom: 100%;
// }
// .flatpickr-calendar.arrowTop:before {
//   border-bottom-color: #e6e6e6;
// }
// .flatpickr-calendar.arrowTop:after {
//   border-bottom-color: #fff;
// }
// .flatpickr-calendar.arrowBottom:before,
// .flatpickr-calendar.arrowBottom:after {
//   top: 100%;
// }
// .flatpickr-calendar.arrowBottom:before {
//   border-top-color: #e6e6e6;
// }
// .flatpickr-calendar.arrowBottom:after {
//   border-top-color: #fff;
// }
.flatpickr-calendar:focus {
  outline: 0;
}

.flatpickr-wrapper {
  position: relative;
  display: inline-block;
}

.flatpickr-months {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flatpickr-months .flatpickr-month {
  position: relative;
  overflow: hidden;
  height: 34px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  flex-grow: 1;
  background: transparent;
  color: var(--text-color--loud);
  fill: rgba(0, 0, 0, 0.9);
  line-height: 1;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  z-index: 3;
  // position: absolute;
  // top: 0;
  height: 34px;
  padding: 10px;
  color: var(--text-color--loud);
  cursor: pointer;
  fill: var(--text-color--loud);
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}

.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
  left: 0;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
  right: 0;
}

.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: var(--text-color--loud);
}

.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: #f64747;
}

.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
}

.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  fill: inherit;
  -webkit-transition: fill 0.1s;
  transition: fill 0.1s;
}

.numInputWrapper {
  position: relative;
  height: auto;
}

.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}

.numInputWrapper input {
  width: 100%;
}

.numInputWrapper input::-ms-clear {
  display: none;
}

.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  height: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 4px 0 2px;
  border: 1px solid rgba(57, 57, 57, 0.15);
  cursor: pointer;
  line-height: 50%;
  opacity: 0;
}

.numInputWrapper span:hover {
  background: rgba(0, 0, 0, 0.1);
}

.numInputWrapper span:active {
  background: rgba(0, 0, 0, 0.2);
}

.numInputWrapper span:after {
  position: absolute;
  display: block;
  content: "";
}

.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}

.numInputWrapper span.arrowUp:after {
  top: 26%;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgba(57, 57, 57, 0.6);
  border-left: 4px solid transparent;
}

.numInputWrapper span.arrowDown {
  top: 50%;
}

.numInputWrapper span.arrowDown:after {
  top: 40%;
  border-top: 4px solid rgba(57, 57, 57, 0.6);
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.numInputWrapper span svg {
  width: inherit;
  height: auto;
}

.numInputWrapper span svg path {
  fill: rgba(0, 0, 0, 0.5);
}

.numInputWrapper:hover {
  background: rgba(0, 0, 0, 0.05);
}

.numInputWrapper:hover span {
  opacity: 1;
}

.flatpickr-current-month {
  position: absolute;
  left: 12.5%;
  display: inline-block;
  width: 75%;
  height: 34px;
  padding: 7.48px 0 0 0;
  // font-weight: 300;
  color: inherit;
  // font-size: 135%;
  line-height: inherit;
  line-height: 1;
  text-align: center;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
}

.flatpickr-current-month span.cur-month {
  display: inline-block;
  padding: 0;
  margin-left: 0.5ch;
  // font-weight: 700;
  color: inherit;
  font-family: inherit;
}

.flatpickr-current-month span.cur-month:hover {
  background: rgba(0, 0, 0, 0.05);
}

.flatpickr-current-month .numInputWrapper {
  display: inline-block;
  width: 7ch;
}

.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: rgba(0, 0, 0, 0.9);
}

.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: rgba(0, 0, 0, 0.9);
}

.flatpickr-current-month input.cur-year {
  display: inline-block;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0 0 0.5ch;
  border: 0;
  border-radius: 0;
  margin: 0;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  background: transparent;
  color: inherit;
  cursor: text;
  font-family: inherit;
  font-size: inherit;
  // font-weight: 300;
  line-height: inherit;
  vertical-align: initial;
}

.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}

.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  background: transparent;
  // font-size: 100%;
  color: var(--text-color--loud);
  pointer-events: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months {
  position: relative;
  width: auto;
  // font-weight: 300;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0 0 0.5ch;
  border: none;
  border-radius: 0;
  margin: -1px 0 0 0;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  appearance: auto;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  outline: none;
  vertical-align: initial;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0, 0, 0, 0.05);
}

.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  padding: 0;
  background-color: transparent;
  outline: none;
}

.flatpickr-weekdays {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 28px;
  -webkit-align-items: center;
  align-items: center;
  background: transparent;
  -ms-flex-align: center;
  text-align: center;
}

.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  flex-grow: 1;
}

span.flatpickr-weekday {
  display: block;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  flex-grow: 1;
  margin: 0;
  // font-size: 90%;
  background: transparent;
  color: var(--text-color--loud);
  cursor: default;
  line-height: 1;
  text-align: center;
  // font-weight: bolder;
}

.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}

.flatpickr-days {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 307.875px;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  align-items: start;
  -ms-flex-align: start;
}

.flatpickr-days:focus {
  outline: 0;
}

.dayContainer {
  display: inline-block;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  padding: 0;
  -ms-flex-pack: justify;
  opacity: 1;
  outline: 0;
  text-align: left;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
}

.dayContainer + .dayContainer {
  -webkit-box-shadow: -1px 0 0 #e6e6e6;
  box-shadow: -1px 0 0 #e6e6e6;
}

.flatpickr-day {
  position: relative;
  display: inline-block;
  // font-weight: 400;
  width: 14.2857143%;
  max-width: 39px;
  height: 39px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-flex-basis: 14.2857143%;
  flex-basis: 14.2857143%;
  -webkit-justify-content: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 150px;
  margin: 0;
  background: none;
  color: var(--text-color--loud);
  cursor: pointer;
  -ms-flex-pack: center;
  -ms-flex-preferred-size: 14.2857143%;
  line-height: 38px;
  text-align: center;
}

.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  border-color: var(--primary-color-base);
  background: var(--primary-color-base);
  cursor: pointer;
  outline: 0;
}

.flatpickr-day.today {
  border-color: var(--border-color);
}

.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: #959ea9;
  background: #959ea9;
  color: var(--text-color--loud);
}

.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  border-color: #569ff7;
  background: #569ff7;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: var(--text-color--loud);
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}

.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}

.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  -webkit-box-shadow: -10px 0 0 #569ff7;
  box-shadow: -10px 0 0 #569ff7;
}

.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}

.flatpickr-day.inRange {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 var(--primary-color-base), 5px 0 0 var(--primary-color-base);
  box-shadow: -5px 0 0 var(--primary-color-base), 5px 0 0 var(--primary-color-base);
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  border-color: transparent;
  background: transparent;
  color: var(--text-color--subtle);
  cursor: default;
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  color: var(--text-color--disabled);
  cursor: not-allowed;
}

.flatpickr-day.week.selected {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
  box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
}

.flatpickr-day.hidden {
  visibility: hidden;
}

.rangeMode .flatpickr-day {
  margin-top: 1px;
}

.flatpickr-weekwrapper {
  float: left;
}

.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
  -webkit-box-shadow: 1px 0 0 #e6e6e6;
  box-shadow: 1px 0 0 #e6e6e6;
}

.flatpickr-weekwrapper .flatpickr-weekday {
  width: 100%;
  float: none;
  line-height: 28px;
}

.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  border: none;
  background: transparent;
  color: var(--text-color--loud);
  cursor: default;
}

.flatpickr-innerContainer {
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.flatpickr-rContainer {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}

.flatpickr-time {
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  height: 0;
  max-height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  outline: 0;
  text-align: center;
}

.flatpickr-time:after {
  display: table;
  clear: both;
  content: "";
}

.flatpickr-time .numInputWrapper {
  width: 40%;
  height: 40px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  flex-grow: 1;
  float: left;
}

.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--border-color);
}

.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: var(--border-color);
}

.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}

.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}

.flatpickr-time input {
  // font-size: 14px;
  position: relative;
  height: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  border-radius: 0;
  margin: 0;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: var(--text-color--loud);
  line-height: inherit;
  text-align: center;
}

.flatpickr-time input.flatpickr-hour {
  // font-weight: bold;
}

.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  // font-weight: 400;
}

.flatpickr-time input:focus {
  border: 0;
  outline: 0;
}

.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  // font-weight: bold;
  width: 2%;
  height: inherit;
  -webkit-align-self: center;
  align-self: center;
  color: var(--text-color--loud);
  -ms-flex-item-align: center;
  float: left;
  line-height: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flatpickr-time .flatpickr-am-pm {
  width: 18%;
  cursor: pointer;
  outline: 0;
  text-align: center;
  // font-weight: 400;
}

.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: #eee;
}

.flatpickr-input[readonly] {
  cursor: pointer;
}

@-webkit-keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
```