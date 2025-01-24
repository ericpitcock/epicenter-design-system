# EpTextarea



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | - | `string` | `null` |
| `name` | - | `string` | `null` |
| `placeholder` | - | `string` | `null` |
| `disabled` | - | `boolean` | `false` |
| `required` | - | `boolean` | `false` |
| `rows` | - | `number` | `2` |
| `cols` | - | `number` | `20` |
| `maxlength` | - | `number` | `null` |
| `minlength` | - | `number` | `null` |
| `readonly` | - | `boolean` | `false` |
| `autofocus` | - | `boolean` | `false` |
| `autocomplete` | - | `string` | `'on'` |
| `spellcheck` | - | `boolean` | `false` |
| `wrap` | - | `string` | `'soft'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |
| `focus` | - | - |
| `blur` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
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
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTextarea',
  })

  const props = defineProps({
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    // value: {
    //   type: String,
    //   default: null,
    // },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    cols: {
      type: Number,
      default: 20,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    minlength: {
      type: Number,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    spellcheck: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: String,
      default: 'soft',
    },
  })

  const modelValue = defineModel({
    type: String,
    default: '',
  })

  const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

  // const onInput = (event) => {
  //   emit('input', event.target.value)
  // }

  const onFocus = (event) => {
    emit('focus', event)
  }

  const onBlur = (event) => {
    emit('blur', event)
  }
</script>

```


## Styles

```scss
.ep-textarea {
  // width and height
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
    border: 1px solid var(--ep-textarea-border-color);
    border-radius: var(--ep-textarea-border-radius);
    background-color: var(--ep-textarea-bg-color);
    color: var(--ep-textarea-text-color);
    padding: var(--ep-textarea-padding);
    line-height: var(--ep-textarea-line-height);
    font-size: var(--ep-textarea-font-size);
    resize: var(--ep-textarea-resize);

    &:focus {
      outline: none;
      border-color: var(--ep-textarea-focus-border-color);
    }
  }
}
```