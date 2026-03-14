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

## Component Code

```vue
<script setup lang="ts">

  interface EpTextareaProps {
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
  } = defineProps<EpTextareaProps>()

  const emit = defineEmits<{
    'update:modelValue': [value: string]
    focus: [event: FocusEvent]
    blur: [event: FocusEvent]
  }>()

  const modelValue = defineModel<string>({ default: '' })

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
  --ep-textarea-width: 100%;
  --ep-textarea-min-width: 20rem;
  --ep-textarea-max-width: 70rem;
  --ep-textarea-height: 100%;
  --ep-textarea-min-height: none;
  --ep-textarea-max-height: none;
  --ep-textarea-border-color: var(--border-color);
  --ep-textarea-border-radius: var(--border-radius);
  --ep-textarea-bg-color: var(--interface-foreground);
  --ep-textarea-text-color: var(--text-color);
  --ep-textarea-font-size: var(--font-size--body);
  --ep-textarea-padding: 1.6rem 2rem;
  --ep-textarea-line-height: 1.5;
  --ep-textarea-resize: both;
  --ep-textarea-focus-border-color: var(--primary-color-base);
  width: 100%;

  textarea {
    width: var(--ep-textarea-width);
    min-width: var(--ep-textarea-min-width);
    max-width: var(--ep-textarea-max-width);
    height: var(--ep-textarea-height);
    min-height: var(--ep-textarea-min-height);
    max-height: var(--ep-textarea-max-height);
    padding: var(--ep-textarea-padding);
    border: 1px solid var(--ep-textarea-border-color);
    border-radius: var(--ep-textarea-border-radius);
    background-color: var(--ep-textarea-bg-color);
    color: var(--ep-textarea-text-color);
    font-size: var(--ep-textarea-font-size);
    line-height: var(--ep-textarea-line-height);
    resize: var(--ep-textarea-resize);
  }
}
```