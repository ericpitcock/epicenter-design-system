# EpCheckbox



`EpCheckbox` is my finest work. It can exist in one of two ways: checked or unchecked. Think about that.

## Usage
```vue
<template>
  <ep-checkbox
    v-for="checkbox in checkboxes"
    :key="checkbox.id"
    v-bind="checkbox"
    v-model="checkbox.checked"
    @update:modelValue="updateChecked($event, checkbox.label, checkbox.id)"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import { EpCheckbox } from '@ericpitcock/epicenter-components-vue'

  const checkboxes = ref([
      {
        id: 'checkbox1',
        label: 'Checked',
        name: 'checkboxes',
        value: 'checked',
        checked: true,
      },
      {
        id: 'checkbox2',
        label: 'Indeterminate',
        name: 'checkboxes',
        value: 'indeterminate',
        checked: false,
        indeterminate: true,
      },
      {
        id: 'checkbox3',
        label: 'Disabled',
        name: 'checkboxes',
        value: 'disabled',
        checked: false,
        disabled: true,
      },
    ])

    const updateChecked = (event, label, id) => {
      const checkbox = checkboxes.value.find(checkbox => checkbox.id === id)
      checkbox.checked = event
      checkbox.indeterminate = false
    }
</script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `checked` | Whether the checkbox is checked. | `boolean` | `-` |
| `disabled` | Whether the checkbox is disabled. | `boolean` | `-` |
| `id` | The ID of the checkbox. | `string` | `-` |
| `indeterminate` | Whether the checkbox is indeterminate. | `boolean` | `-` |
| `label` | The label for the checkbox. | `string` | `-` |
| `name` | The name of the checkbox. | `string` | `-` |
| `required` | Whether the checkbox is required. | `boolean` | `-` |
| `value` | The value of the checkbox. | `string` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-checkbox` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-checkbox {
  --ep-checkbox-border-radius: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-checkbox-border-radius` | `var(--border-radius--small)` | — |
| `--ep-checkbox-border-width` | `var(--border-width--hairline)` | — |
| `--ep-checkbox-checked-border-color` | `var(--primary-color-300)` | checked |
| `--ep-checkbox-disabled-border-color` | `var(--border-color--disabled)` | disabled |
| `--ep-checkbox-unchecked-border-color` | `var(--border-color--lighter)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-checkbox-checked-bg-color` | `var(--primary-color-base)` | checked |
| `--ep-checkbox-disabled-bg-color` | `transparent` | disabled |
| `--ep-checkbox-mark-bg-color` | `hsl(var(--gray-0))` | — |
| `--ep-checkbox-unchecked-bg-color` | `var(--interface-overlay)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-checkbox-checked-text-color` | `var(--text-color--loud)` | checked |
| `--ep-checkbox-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-checkbox-text-color` | `inherit` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-checkbox-gap` | `1rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-checkbox-size` | `1.4rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    /** Whether the checkbox is checked. */
    checked?: boolean
    /** Whether the checkbox is disabled. */
    disabled?: boolean
    /** The ID of the checkbox. */
    id: string
    /** Whether the checkbox is indeterminate. */
    indeterminate?: boolean
    /** The label for the checkbox. */
    label: string
    /** The name of the checkbox. */
    name: string
    /** Whether the checkbox is required. */
    required?: boolean
    /** The value of the checkbox. */
    value: string
  }

  const {
    checked = false,
    disabled = false,
    indeterminate = false,
    required = false,
  } = defineProps<Props>()

  const modelValue = defineModel<boolean>({ required: true })

  defineOptions({ name: 'EpCheckbox' })

  const classes = computed(() => {
    return {
      'ep-checkbox--checked': modelValue.value,
      'ep-checkbox--disabled': disabled,
      'ep-checkbox--indeterminate': indeterminate,
    }
  })
</script>

<template>
  <label
    :for="id"
    :class="['ep-checkbox', classes]"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="checkbox"
      :name
      :value
      :checked
      :disabled
      :indeterminate
      :required
    >
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

```

## Styles (SCSS)

```scss
.ep-checkbox {
  // Box
  --ep-checkbox-size: 1.4rem;
  --ep-checkbox-gap: 1rem;

  // Surface
  --ep-checkbox-checked-bg-color: var(--primary-color-base);
  --ep-checkbox-unchecked-bg-color: var(--interface-overlay);
  --ep-checkbox-disabled-bg-color: transparent;

  // Border
  --ep-checkbox-border-width: var(--border-width--hairline);
  --ep-checkbox-border-radius: var(--border-radius--small);
  --ep-checkbox-checked-border-color: var(--primary-color-300);
  --ep-checkbox-unchecked-border-color: var(--border-color--lighter);
  --ep-checkbox-disabled-border-color: var(--border-color--disabled);

  // Text
  --ep-checkbox-text-color: inherit;
  --ep-checkbox-checked-text-color: var(--text-color--loud);
  --ep-checkbox-disabled-text-color: var(--text-color--disabled);

  // The tick itself
  --ep-checkbox-mark-bg-color: hsl(var(--gray-0));

  display: inline-flex;
  width: fit-content;
  align-items: center;
  color: var(--ep-checkbox-text-color);
  cursor: pointer;
  gap: var(--ep-checkbox-gap);
  user-select: none;

  &--checked,
  &--indeterminate {
    color: var(--ep-checkbox-checked-text-color);
  }

  &--disabled {
    color: var(--ep-checkbox-disabled-text-color);
    pointer-events: none;
  }

  input {
    position: relative;
    width: var(--ep-checkbox-size);
    height: var(--ep-checkbox-size);
    flex-shrink: 0;
    border: var(--ep-checkbox-border-width) solid var(--ep-checkbox-unchecked-border-color);
    border-radius: var(--ep-checkbox-border-radius);
    appearance: none;
    background-color: var(--ep-checkbox-unchecked-bg-color);
    cursor: inherit;

    &:checked {
      border-color: var(--ep-checkbox-checked-border-color);
      background-color: var(--ep-checkbox-checked-bg-color);

      // Geometry is expressed as a fraction of the box so the tick scales with
      // --ep-checkbox-size. At the 1.4rem default these resolve to exactly the
      // 1/4/4/8px values they replaced.
      &::after {
        position: absolute;
        top: calc(var(--ep-checkbox-size) / 14);
        left: calc(var(--ep-checkbox-size) * 2 / 7);
        width: calc(var(--ep-checkbox-size) * 2 / 7);
        height: calc(var(--ep-checkbox-size) * 4 / 7);
        border: solid var(--ep-checkbox-mark-bg-color);
        border-width: 0 calc(var(--ep-checkbox-size) / 7) calc(var(--ep-checkbox-size) / 7) 0;
        content: '';
        transform: rotate(45deg);
      }
    }

    &:indeterminate {
      border-color: var(--ep-checkbox-checked-border-color);
      background-color: var(--ep-checkbox-checked-bg-color);

      &::after {
        position: absolute;
        top: calc(var(--ep-checkbox-size) * 5 / 14);
        left: calc(var(--ep-checkbox-size) / 7);
        width: calc(var(--ep-checkbox-size) * 4 / 7);
        height: calc(var(--ep-checkbox-size) / 7);
        background-color: var(--ep-checkbox-mark-bg-color);
        content: '';
      }
    }

    &:disabled {
      border-color: var(--ep-checkbox-disabled-border-color);
      background-color: var(--ep-checkbox-disabled-bg-color);
    }
  }
}

```