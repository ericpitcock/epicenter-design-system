# EpDatePicker



`EpDatePicker` wraps flatpickr. You can select so many dates. Or just one.

## Usage
```vue
<template>
  <ep-date-picker v-bind="datePickerProps" />
</template>

<script setup>
import { EpDatePicker } from '@ericpitcock/epicenter-components-vue'

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
| `dateFormat` | - | `string` | `-` |
| `enableCloseOnSelect` | - | `boolean` | `-` |
| `inputProps` | - | `Record` | `-` |
| `mode` | - | `union` | `-` |
| `positionX` | - | `string` | `-` |
| `positionY` | - | `string` | `-` |

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

## CSS Custom Properties

Set any of these with a selector that matches `.flatpickr-calendar` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .flatpickr-calendar {
  --ep-date-picker-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-date-picker-bg-color` | `var(--interface-overlay)` | — |
| `--ep-date-picker-day-hover-bg-color` | `var(--interface-foreground--accent)` | hover |
| `--ep-date-picker-day-selected-bg-color` | `var(--primary-color-base)` | selected |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-date-picker-border-color` | `var(--border-color--lighter)` | — |
| `--ep-date-picker-border-radius` | `var(--border-radius--default)` | — |
| `--ep-date-picker-border-style` | `solid` | — |
| `--ep-date-picker-border-width` | `var(--border-width--hairline)` | — |
| `--ep-date-picker-day-border-radius` | `var(--border-radius--default)` | — |
| `--ep-date-picker-day-selected-border-color` | `var(--primary-color-base)` | selected |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-date-picker-day-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-date-picker-day-hover-text-color` | `var(--text-color--loud)` | hover |
| `--ep-date-picker-day-selected-text-color` | `var(--text--white)` | selected |
| `--ep-date-picker-day-text-color` | `var(--text-color)` | — |
| `--ep-date-picker-text-color` | `var(--text-color)` | — |
| `--ep-date-picker-weekday-text-color` | `var(--text-color--subtle)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-date-picker-padding` | `1rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-date-picker-shadow` | `var(--shadow--dropdown)` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-date-picker-z-index` | `var(--z-index--dropdown)` | — |

## Component Code

```vue
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
```

## Styles (SCSS)

```scss
// Date picker.
// The calendar itself is flatpickr, whose stylesheet is vendored verbatim in
// scss/vendor/_flatpickr.scss. That file is excluded from the property contract
// and from stylelint: it is third-party CSS, and rewriting 872 lines of it to
// satisfy our naming rules would be a maintenance burden every time flatpickr
// is upgraded, for no gain.
// Instead this adapter declares the --ep-date-picker-* contract and maps it onto
// flatpickr's own selectors. It is loaded after the vendored file, so it wins.
@use '../vendor/flatpickr';

// flatpickr renders the calendar itself, so its class is this block's root.
// @block date-picker
// @root .flatpickr-calendar

.flatpickr-calendar {
  --ep-date-picker-padding: 1rem;
  --ep-date-picker-bg-color: var(--interface-overlay);
  --ep-date-picker-border-width: var(--border-width--hairline);
  --ep-date-picker-border-style: solid;
  --ep-date-picker-border-color: var(--border-color--lighter);
  --ep-date-picker-border-radius: var(--border-radius--default);
  --ep-date-picker-shadow: var(--shadow--dropdown);
  --ep-date-picker-z-index: var(--z-index--dropdown);
  --ep-date-picker-text-color: var(--text-color);

  --ep-date-picker-weekday-text-color: var(--text-color--subtle);

  --ep-date-picker-day-border-radius: var(--border-radius--default);
  --ep-date-picker-day-text-color: var(--text-color);
  --ep-date-picker-day-hover-bg-color: var(--interface-foreground--accent);
  --ep-date-picker-day-hover-text-color: var(--text-color--loud);
  --ep-date-picker-day-selected-bg-color: var(--primary-color-base);
  --ep-date-picker-day-selected-text-color: var(--text--white);
  --ep-date-picker-day-selected-border-color: var(--primary-color-base);
  --ep-date-picker-day-disabled-text-color: var(--text-color--disabled);

  z-index: var(--ep-date-picker-z-index);
  padding: var(--ep-date-picker-padding);
  border-width: var(--ep-date-picker-border-width);
  border-style: var(--ep-date-picker-border-style);
  border-color: var(--ep-date-picker-border-color);
  border-radius: var(--ep-date-picker-border-radius);
  background: var(--ep-date-picker-bg-color);
  box-shadow: var(--ep-date-picker-shadow);
  color: var(--ep-date-picker-text-color);
}

span.flatpickr-weekday {
  color: var(--ep-date-picker-weekday-text-color);
}

.flatpickr-day {
  border-radius: var(--ep-date-picker-day-border-radius);
  color: var(--ep-date-picker-day-text-color);

  &:hover,
  &:focus {
    border-color: transparent;
    background: var(--ep-date-picker-day-hover-bg-color);
    color: var(--ep-date-picker-day-hover-text-color);
  }

  &.selected,
  &.startRange,
  &.endRange,
  &.selected:hover,
  &.startRange:hover,
  &.endRange:hover {
    border-color: var(--ep-date-picker-day-selected-border-color);
    background: var(--ep-date-picker-day-selected-bg-color);
    color: var(--ep-date-picker-day-selected-text-color);
  }

  &.flatpickr-disabled,
  &.flatpickr-disabled:hover,
  &.prevMonthDay,
  &.nextMonthDay {
    background: transparent;
    color: var(--ep-date-picker-day-disabled-text-color);
  }
}

```