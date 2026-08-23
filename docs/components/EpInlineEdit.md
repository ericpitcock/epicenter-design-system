# EpInlineEdit



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | If true, disables editing. | `boolean` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `save` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `icon-left` | Optional icon displayed on the left side of the editable text |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-inline-edit` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-inline-edit {
  --ep-inline-edit-actions-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-actions-bg-color` | `var(--interface-overlay)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-actions-border-color` | `var(--border-color--lighter)` | — |
| `--ep-inline-edit-actions-border-radius` | `var(--border-radius--default)` | — |
| `--ep-inline-edit-actions-border-style` | `solid` | — |
| `--ep-inline-edit-actions-border-width` | `var(--border-width--hairline)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-actions-font-size` | `var(--font-size--tiny)` | — |
| `--ep-inline-edit-line-height` | `var(--text-line-height--normal)` | — |
| `--ep-inline-edit-text-decoration-color` | `hsl(32, 68%, 83%)` | — |
| `--ep-inline-edit-text-underline-offset` | `0.4rem` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-actions-gap` | `0.25rem` | — |
| `--ep-inline-edit-actions-padding` | `0.25rem 0.5rem 0.25rem 0.75rem` | — |
| `--ep-inline-edit-gap` | `var(--space--5)` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-actions-offset` | `0.4rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-content-min-width` | `4rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-inline-edit-disabled-opacity` | `0.5` | disabled |
| `--ep-inline-edit-transition` | `var(--duration--fast)` | — |

## Component Code

```vue
<script setup lang="ts">
  import ArrowTurnBackward from '@ericpitcock/epicenter-icons-vue/ArrowTurnBackward'
  import { onUpdated, ref, useTemplateRef } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  interface Props {
    /** If true, disables editing. */
    disabled?: boolean
  }

  const { disabled = false } = defineProps<Props>()

  const emit = defineEmits<{
    save: [value: string]
  }>()

  const modelValue = defineModel<string>({ required: true })

  defineOptions({ name: 'EpInlineEdit' })

  const contentRef = useTemplateRef<HTMLDivElement>('contentRef')
  const isEditing = ref(false)
  const originalValue = ref('')
  const cancelled = ref(false)
  const hasChanged = ref(false)
  const previousModelValue = ref(modelValue.value)

  const onFocus = (): void => {
    isEditing.value = true
    originalValue.value = modelValue.value
    hasChanged.value = false
  }

  const onInput = (): void => {
    const current = contentRef.value?.textContent ?? ''
    hasChanged.value = current !== originalValue.value
  }

  const save = (): void => {
    const newValue = contentRef.value?.textContent ?? ''
    modelValue.value = newValue
    isEditing.value = false
    hasChanged.value = false
    emit('save', newValue)
  }

  const onBlur = (): void => {
    if (cancelled.value) {
      cancelled.value = false
      return
    }
    save()
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      contentRef.value?.blur()
    }
    if (event.key === 'Escape') {
      cancelled.value = true
      if (contentRef.value) {
        contentRef.value.textContent = originalValue.value
      }
      modelValue.value = originalValue.value
      isEditing.value = false
      contentRef.value?.blur()
    }
  }

  const onSaveClick = (): void => {
    save()
    contentRef.value?.blur()
  }

  const onCancelClick = (): void => {
    cancelled.value = true
    if (contentRef.value) {
      contentRef.value.textContent = originalValue.value
    }
    modelValue.value = originalValue.value
    isEditing.value = false
    hasChanged.value = false
    contentRef.value?.blur()
  }

  onUpdated(() => {
    if (previousModelValue.value === modelValue.value) return

    previousModelValue.value = modelValue.value

    if (contentRef.value && contentRef.value.textContent !== modelValue.value) {
      contentRef.value.textContent = modelValue.value
    }
  })
</script>

<template>
  <div
    :class="[
      'ep-inline-edit',
      {
        'ep-inline-edit--editing': isEditing,
        'ep-inline-edit--disabled': disabled,
      }
    ]"
  >
    <span
      v-if="$slots['icon-left']"
      class="ep-inline-edit__icon"
    >
      <!-- @slot Optional icon displayed on the left side of the editable text -->
      <slot name="icon-left" />
    </span>
    <div
      ref="contentRef"
      class="ep-inline-edit__content"
      :contenteditable="!disabled"
      spellcheck="false"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keydown="onKeyDown"
    >
      {{ modelValue }}
    </div>
    <!-- isEditing && hasChanged -->
    <ep-flex
      v-if="isEditing && hasChanged"
      class="ep-inline-edit__actions gap-10"
    >
      <ep-flex
        class="gap-5 align-center"
        @mousedown.prevent="onSaveClick"
      >
        Save
        <ArrowTurnBackward style="--ep-icon-width: 1.4rem; --ep-icon-height: 1.4rem;" />
      </ep-flex>
      <ep-flex
        class="gap-6 align-center"
        @mousedown.prevent="onCancelClick"
      >
        Cancel
        <svg
          width="21"
          height="12"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="15"
            rx="2"
            stroke="currentColor"
          />
          <text
            x="14"
            y="11.5"
            text-anchor="middle"
            fill="currentColor"
            font-size="9"
            font-family="sans-serif"
            font-weight="500"
            letter-spacing="1"
          >ESC</text>
        </svg>
      </ep-flex>
    </ep-flex>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-inline-edit {
  // Box
  --ep-inline-edit-gap: var(--space--5);
  --ep-inline-edit-line-height: var(--text-line-height--normal);
  --ep-inline-edit-content-min-width: 4rem;

  // The dashed underline that marks the field as editable.
  --ep-inline-edit-text-decoration-color: hsl(32, 68%, 83%);
  --ep-inline-edit-text-underline-offset: 0.4rem;
  --ep-inline-edit-disabled-opacity: 0.5;

  // Motion
  --ep-inline-edit-transition: var(--duration--fast);

  // The action bar that appears below while editing.
  --ep-inline-edit-actions-offset: 0.4rem;
  --ep-inline-edit-actions-padding: 0.25rem 0.5rem 0.25rem 0.75rem;
  --ep-inline-edit-actions-gap: 0.25rem;
  --ep-inline-edit-actions-bg-color: var(--interface-overlay);
  --ep-inline-edit-actions-border-width: var(--border-width--hairline);
  --ep-inline-edit-actions-border-style: solid;
  --ep-inline-edit-actions-border-color: var(--border-color--lighter);
  --ep-inline-edit-actions-border-radius: var(--border-radius--default);
  --ep-inline-edit-actions-font-size: var(--font-size--tiny);

  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: text;
  gap: var(--ep-inline-edit-gap);
  line-height: var(--ep-inline-edit-line-height);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-style: dashed;
  text-underline-offset: var(--ep-inline-edit-text-underline-offset);
  transition:
    background-color var(--ep-inline-edit-transition),
    border-color var(--ep-inline-edit-transition);

  &:hover:not(.ep-inline-edit--editing):not(.ep-inline-edit--disabled) {
    cursor: pointer;
    text-decoration-color: var(--ep-inline-edit-text-decoration-color);
  }

  &--editing {
    text-decoration-color: var(--ep-inline-edit-text-decoration-color);
  }

  &--disabled {
    cursor: default;
    opacity: var(--ep-inline-edit-disabled-opacity);
    pointer-events: none;
  }

  &__icon {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
  }

  &__content {
    overflow: hidden;
    min-width: var(--ep-inline-edit-content-min-width);
    outline: none;
    white-space: pre;
  }

  &__actions {
    position: absolute;
    top: calc(100% + var(--ep-inline-edit-actions-offset));
    left: 0;
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    padding: var(--ep-inline-edit-actions-padding);
    border-width: var(--ep-inline-edit-actions-border-width);
    border-style: var(--ep-inline-edit-actions-border-style);
    border-color: var(--ep-inline-edit-actions-border-color);
    border-radius: var(--ep-inline-edit-actions-border-radius);
    background-color: var(--ep-inline-edit-actions-bg-color);
    font-size: var(--ep-inline-edit-actions-font-size);
    gap: var(--ep-inline-edit-actions-gap);
  }
}

```