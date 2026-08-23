# EpRadio



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | If true, disables the radio button. | `boolean` | `-` |
| `id` | The ID attribute for the radio input element. | `string` | `-` |
| `label` | Label text displayed next to the radio button. | `string` | `-` |
| `name` | The name attribute for the radio input (groups radios together). | `string` | `-` |
| `required` | If true, marks the radio as required. | `boolean` | `-` |
| `value` | The value for this radio option. | `string` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-radio` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-radio {
  --ep-radio-border-radius: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-radio-border-radius` | `var(--border-radius--full)` | — |
| `--ep-radio-border-width` | `var(--border-width--hairline)` | — |
| `--ep-radio-checked-border-color` | `var(--primary-color-300)` | checked |
| `--ep-radio-disabled-border-color` | `var(--border-color--disabled)` | disabled |
| `--ep-radio-unchecked-border-color` | `var(--border-color--lighter)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-radio-checked-bg-color` | `var(--primary-color-base)` | checked |
| `--ep-radio-checked-disabled-bg-color` | `var(--text-color--disabled)` | checked-disabled |
| `--ep-radio-disabled-bg-color` | `transparent` | disabled |
| `--ep-radio-unchecked-bg-color` | `var(--interface-overlay)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-radio-checked-text-color` | `var(--text-color--loud)` | checked |
| `--ep-radio-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-radio-text-color` | `inherit` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-radio-gap` | `1rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-radio-size` | `1.4rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    /** If true, disables the radio button. */
    disabled?: boolean
    /** The ID attribute for the radio input element. */
    id: string
    /** Label text displayed next to the radio button. */
    label: string
    /** The name attribute for the radio input (groups radios together). */
    name: string
    /** If true, marks the radio as required. */
    required?: boolean
    /** The value for this radio option. */
    value: string
  }

  const {
    value,
    disabled = false,
    required = false,
  } = defineProps<Props>()

  const modelValue = defineModel<string>({ required: true })

  defineOptions({ name: 'EpRadio' })

  const classes = computed(() => ({
    'ep-radio--checked': modelValue.value === value,
    'ep-radio--disabled': disabled,
  }))
</script>

<template>
  <label
    :for="id"
    :class="['ep-radio', classes]"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="radio"
      :name
      :value
      :disabled
      :required
    >
    <span class="ep-radio__dot" />
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

```

## Styles (SCSS)

```scss
.ep-radio {
  // Box
  --ep-radio-size: 1.4rem;
  --ep-radio-gap: 1rem;

  // Surface
  --ep-radio-checked-bg-color: var(--primary-color-base);
  --ep-radio-unchecked-bg-color: var(--interface-overlay);
  --ep-radio-disabled-bg-color: transparent;
  --ep-radio-checked-disabled-bg-color: var(--text-color--disabled);

  // Border
  --ep-radio-border-width: var(--border-width--hairline);
  --ep-radio-border-radius: var(--border-radius--full);
  --ep-radio-checked-border-color: var(--primary-color-300);
  --ep-radio-unchecked-border-color: var(--border-color--lighter);
  --ep-radio-disabled-border-color: var(--border-color--disabled);

  // Text
  --ep-radio-text-color: inherit;
  --ep-radio-checked-text-color: var(--text-color--loud);
  --ep-radio-disabled-text-color: var(--text-color--disabled);

  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  color: var(--ep-radio-text-color);
  cursor: pointer;
  gap: var(--ep-radio-gap);

  &__dot {
    width: var(--ep-radio-size);
    height: var(--ep-radio-size);
    border: var(--ep-radio-border-width) solid var(--ep-radio-unchecked-border-color);
    border-radius: var(--ep-radio-border-radius);
    background-color: var(--ep-radio-unchecked-bg-color);
  }

  &--checked {
    color: var(--ep-radio-checked-text-color);

    .ep-radio__dot {
      border-color: var(--ep-radio-checked-border-color);
      background-color: var(--ep-radio-checked-bg-color);
    }
  }

  &--disabled {
    color: var(--ep-radio-disabled-text-color);
    pointer-events: none;

    .ep-radio__dot {
      border-color: var(--ep-radio-disabled-border-color);
      background-color: var(--ep-radio-disabled-bg-color);
    }
  }

  &:is(.ep-radio--checked).ep-radio--disabled {
    .ep-radio__dot {
      background-color: var(--ep-radio-checked-disabled-bg-color);
    }
  }
}

.ep-radio input {
  position: absolute;
  cursor: pointer;
  opacity: 0;
}

```