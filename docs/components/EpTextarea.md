# EpTextarea



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `autocomplete` | - | `string` | `-` |
| `autofocus` | - | `boolean` | `-` |
| `cols` | - | `number` | `-` |
| `disabled` | - | `boolean` | `-` |
| `id` | - | `string` | `-` |
| `maxlength` | - | `number` | `-` |
| `minlength` | - | `number` | `-` |
| `name` | - | `string` | `-` |
| `placeholder` | - | `string` | `-` |
| `readonly` | - | `boolean` | `-` |
| `required` | - | `boolean` | `-` |
| `rows` | - | `number` | `-` |
| `spellcheck` | - | `boolean` | `-` |
| `wrap` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |
| `focus` | - | - |
| `blur` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-textarea` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-textarea {
  --ep-textarea-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-textarea-bg-color` | `var(--interface-foreground)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-textarea-border-color` | `var(--border-color)` | — |
| `--ep-textarea-border-radius` | `var(--border-radius--default)` | — |
| `--ep-textarea-border-style` | `solid` | — |
| `--ep-textarea-border-width` | `var(--border-width--hairline)` | — |
| `--ep-textarea-focus-border-color` | `var(--primary-color-base)` | focus |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-textarea-font-size` | `var(--font-size--body)` | — |
| `--ep-textarea-line-height` | `var(--text-line-height--normal)` | — |
| `--ep-textarea-text-color` | `var(--text-color)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-textarea-height` | `100%` | — |
| `--ep-textarea-max-height` | `none` | — |
| `--ep-textarea-max-width` | `70rem` | — |
| `--ep-textarea-min-height` | `none` | — |
| `--ep-textarea-min-width` | `20rem` | — |
| `--ep-textarea-width` | `100%` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-textarea-padding` | `var(--space--4) var(--space--5)` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-textarea-resize` | `both` | — |

## Component Code

```vue
<script setup lang="ts">
  interface Props {
    autocomplete?: string
    autofocus?: boolean
    cols?: number
    disabled?: boolean
    id?: string
    maxlength?: number
    minlength?: number
    name?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    rows?: number
    spellcheck?: boolean
    wrap?: string
  }

  const {
    autocomplete = 'on',
    autofocus = false,
    cols = 20,
    disabled = false,
    id = undefined,
    maxlength = undefined,
    minlength = undefined,
    name = undefined,
    placeholder = undefined,
    readonly = false,
    required = false,
    rows = 2,
    spellcheck = false,
    wrap = 'soft',
  } = defineProps<Props>()

  const emit = defineEmits<{
    'update:modelValue': [value: string]
    focus: [event: FocusEvent]
    blur: [event: FocusEvent]
  }>()

  const modelValue = defineModel<string>({ default: '' })

  defineOptions({ name: 'EpTextarea' })

  const onFocus = (event: FocusEvent): void => {
    emit('focus', event)
  }

  const onBlur = (event: FocusEvent): void => {
    emit('blur', event)
  }
</script>

<template>
  <div class="ep-textarea">
    <textarea
      :id="id"
      v-model="modelValue"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :cols="cols"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
      :wrap="wrap"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-textarea {
  // Box
  --ep-textarea-width: 100%;
  --ep-textarea-min-width: 20rem;
  --ep-textarea-max-width: 70rem;
  --ep-textarea-height: 100%;
  --ep-textarea-min-height: none;
  --ep-textarea-max-height: none;
  --ep-textarea-padding: var(--space--4) var(--space--5);
  --ep-textarea-resize: both;

  // Surface
  --ep-textarea-bg-color: var(--interface-foreground);

  // Border
  --ep-textarea-border-width: var(--border-width--hairline);
  --ep-textarea-border-style: solid;
  --ep-textarea-border-color: var(--border-color);
  --ep-textarea-border-radius: var(--border-radius--default);
  --ep-textarea-focus-border-color: var(--primary-color-base);

  // Text
  --ep-textarea-text-color: var(--text-color);
  --ep-textarea-font-size: var(--font-size--body);
  --ep-textarea-line-height: var(--text-line-height--normal);

  width: 100%;

  textarea {
    width: var(--ep-textarea-width);
    min-width: var(--ep-textarea-min-width);
    max-width: var(--ep-textarea-max-width);
    height: var(--ep-textarea-height);
    min-height: var(--ep-textarea-min-height);
    max-height: var(--ep-textarea-max-height);
    padding: var(--ep-textarea-padding);
    border-width: var(--ep-textarea-border-width);
    border-style: var(--ep-textarea-border-style);
    border-color: var(--ep-textarea-border-color);
    border-radius: var(--ep-textarea-border-radius);
    background-color: var(--ep-textarea-bg-color);
    color: var(--ep-textarea-text-color);
    font-size: var(--ep-textarea-font-size);
    line-height: var(--ep-textarea-line-height);
    resize: var(--ep-textarea-resize);

    // Previously declared but never consumed, so setting it did nothing.
    &:focus-visible {
      border-color: var(--ep-textarea-focus-border-color);
    }
  }
}

```