# EpButton



`EpButton` is a button. It’s very exciting. It’s used in many places throughout Epicenter Design System. Okay, just a couple places. But it could be used in many places.

<script setup>
  import EpButton from '@/components/button/EpButton.vue'
</script>

<ep-button label="Click me" />

## Usage
```vue
<template>
  <ep-button v-bind="buttonProps" />
</template>

<script setup>
  import { EpButton } from '@epicenter/vue-components'

  const buttonProps = {
    label: 'Click me',
  }
</script>

<style lang="scss" scoped>
  .ep-button {
    // Your styles here
  }
</style>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `size` | The size of the button. | `string` | `'default'` |
| `ariaLabel` | The aria-label of the button. | `string` | `''` |
| `label` | The label of the button. | `string` | `''` |
| `iconLeft` | The icon to display on the left side of the button. | `object` | `undefined` |
| `iconRight` | The icon to display on the right side of the button. | `object` | `undefined` |
| `disabled` | If `true`, the button will be disabled. | `boolean` | `false` |
| `type` | The  type of the button. | `string` | `'button'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <component
    :is="element"
    :type
    :class="['ep-button', computedClasses]"
    :aria-label="ariaLabel ? ariaLabel : label"
    :disabled="disabled"
  >
    <span
      v-if="iconLeft"
      class="ep-button__icon ep-button__icon--left"
    >
      <ep-icon v-bind="iconLeft" />
    </span>
    <span
      v-if="label"
      class="ep-button__label"
    >
      {{ label }}
    </span>
    <span
      v-if="iconRight"
      class="ep-button__icon ep-button__icon--right"
    >
      <ep-icon v-bind="iconRight" />
    </span>
  </component>
</template>

<script setup>
  import { computed, useAttrs } from 'vue'
  import EpIcon from '../icon/EpIcon.vue'

  defineOptions({
    name: 'EpButton'
  })

  const props = defineProps({
    /**
     * The size of the button.
     */
    size: {
      type: String,
      default: 'default',
      validator: (value) => [
        'small',
        'default',
        'large',
        'xlarge',
      ].includes(value)
    },
    /**
     * The aria-label of the button.
     */
    ariaLabel: {
      type: String,
      default: ''
    },
    /**
     * The label of the button.
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * The icon to display on the left side of the button.
     */
    iconLeft: {
      type: Object,
      default: undefined
    },
    /**
     * The icon to display on the right side of the button.
     */
    iconRight: {
      type: Object,
      default: undefined
    },
    /**
     * If `true`, the button will be disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * The  type of the button.
     */
    type: {
      type: String,
      default: 'button',
      validator: (value) => [
        'button',
        'submit',
      ].includes(value)
    },
  })

  const element = computed(() => {
    const { to, href } = useAttrs()
    return to ? 'router-link' : href ? 'a' : 'button'
  })

  const computedClasses = computed(() => ({
    [`ep-button--${props.size}`]: props.size != 'default',
    'ep-button--icon-right': props.iconRight,
    'ep-button--icon-left': props.iconLeft,
    'ep-button--disabled': props.disabled,
  }))
</script>

```


## Styles (SCSS)

```scss
.ep-button {
  --ep-button-bg-color: var(--interface-foreground);
  --ep-button-text-color: var(--text-color--loud);
  --ep-button-border-width: 0.1rem;
  --ep-button-border-style: solid;
  --ep-button-border-color: var(--border-color);
  --ep-button-border-radius: 0.3rem;
  --ep-button-hover-bg-color: var(--interface-foreground);
  --ep-button-hover-text-color: var(--text-color--loud);
  --ep-button-hover-border-color: var(--border-color);
  --ep-button-active-bg-color: var(--interface-foreground);
  --ep-button-active-text-color: var(--text-color);
  --ep-button-active-border-color: var(--border-color);
  --ep-button-disabled-bg-color: var(--interface-foreground);
  --ep-button-disabled-text-color: var(--text-color--disabled);
  --ep-button-disabled-border-color: var(--border-color--disabled);
  --ep-button-padding-inline: 1.2rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  max-width: max-content;
  height: 3rem;
  border-radius: var(--ep-button-border-radius);
  font-size: var(--font-size--small);
  line-height: 1;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  vertical-align: top;
  background: var(--ep-button-bg-color);
  color: var(--ep-button-text-color);
  padding-inline: var(--ep-button-padding-inline);
  border-width: var(--ep-button-border-width);
  border-style: var(--ep-button-border-style);
  border-color: var(--ep-button-border-color);

  @media (hover: hover) {
    &:hover:not(.ep-button--menu-item--active):not(.ep-button--disabled) {
      background: var(--ep-button-hover-bg-color);
      color: var(--ep-button-hover-text-color);
      border-color: var(--ep-button-hover-border-color);
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--focus-outline-color);
  }

  &:active {
    background: var(--ep-button-active-bg-color);
    color: var(--ep-button-active-text-color);
    border-color: var(--ep-button-active-border-color);
  }

  &--disabled {
    background: var(--ep-button-disabled-bg-color);
    color: var(--ep-button-disabled-text-color);
    border-color: var(--ep-button-disabled-border-color);
    pointer-events: none;
    cursor: default;

    &.ep-button--menu-item {
      border-color: transparent;
    }
  }

  &__icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    max-height: 2.4rem;
    pointer-events: none;
  }

  &__label {
    flex: 1;
    text-align: left;
    pointer-events: none;
    line-height: 2rem;
  }

  // default 30px height
  // has only one child
  &:has(:only-child) {

    // and it's an icon
    &:has(.ep-button__icon) {
      --ep-button-padding-inline: 0.8rem;
    }

    // and it's a label
    &:has(.ep-button__label) {
      --ep-button-padding-inline: 1.2rem;
    }
  }

  // has two children, one icon left and one label
  &:has(.ep-button__icon--left, .ep-button__label) {
    --ep-button-padding-inline: 0.8rem 1.2rem;
  }

  // has two children, one icon right and one label
  &:has(.ep-button__icon--right, .ep-button__label) {
    --ep-button-padding-inline: 1.2rem 0.8rem;
  }

  // has icon left, icon right, and label
  &:has(.ep-button__icon--left, .ep-button__icon--right, .ep-button__label) {
    --ep-button-padding-inline: 0.8rem;
  }

  // small 22px height
  &--small {
    gap: 0.4rem;
    height: 2.2rem;

    .ep-button__label {
      font-size: var(--font-size--tiny);
    }

    // padding
    // has only one child
    &:has(:only-child) {

      // and it's an icon
      &:has(.ep-button__icon) {
        --ep-button-padding-inline: 0.3rem;
      }

      // and it's a label
      &:has(.ep-button__label) {
        --ep-button-padding-inline: 0.6rem;
      }
    }

    // has two children, one icon left and one label
    &:has(.ep-button__icon--left, .ep-button__label) {
      --ep-button-padding-inline: 0.3rem 0.6rem;
    }

    // has two children, one icon right and one label
    &:has(.ep-button__icon--right, .ep-button__label) {
      --ep-button-padding-inline: 0.6rem 0.3rem;
    }

    // has icon left, icon right, and label
    &:has(.ep-button__icon--left, .ep-button__icon--right, .ep-button__label) {
      --ep-button-padding-inline: 0.6rem;
    }
  }

  // large 38px height
  &--large {
    // max-height: 3.8rem;
    height: 3.8rem;

    .ep-button__label {
      font-size: var(--font-size--default);
    }

    // padding
    // has only one child
    &:has(:only-child) {

      // and it's an icon
      &:has(.ep-button__icon) {
        --ep-button-padding-inline: 1rem;
      }

      // and it's a label
      &:has(.ep-button__label) {
        --ep-button-padding-inline: 1.5rem;
      }
    }

    // has two children, one icon left and one label
    &:has(.ep-button__icon--left, .ep-button__label) {
      --ep-button-padding-inline: 0.8rem 1.5rem;
    }

    // has two children, one icon right and one label
    &:has(.ep-button__icon--right, .ep-button__label) {
      --ep-button-padding-inline: 1.5rem 0.8rem;
    }

    // has icon left, icon right, and label
    &:has(.ep-button__icon--left, .ep-button__icon--right, .ep-button__label) {
      --ep-button-padding-inline: 0.8rem;
    }
  }

  // xlarge 46px height
  &--xlarge {
    // max-height: 4.6rem;
    height: 4.6rem;

    .ep-button__label {
      font-size: var(--font-size--default);
    }

    // padding
    // has only one child
    &:has(:only-child) {

      // and it's an icon
      &:has(.ep-button__icon) {
        --ep-button-padding-inline: 1.2rem;
      }

      // and it's a label
      &:has(.ep-button__label) {
        --ep-button-padding-inline: 1.8rem;
      }
    }

    // has two children, one icon left and one label
    &:has(.ep-button__icon--left, .ep-button__label) {
      --ep-button-padding-inline: 1.2rem 1.8rem;
    }

    // has two children, one icon right and one label
    &:has(.ep-button__icon--right, .ep-button__label) {
      --ep-button-padding-inline: 1.8rem 1.2rem;
    }

    // has icon left, icon right, and label
    &:has(.ep-button__icon--left, .ep-button__icon--right, .ep-button__label) {
      --ep-button-padding-inline: 1.8rem;
    }
  }
}
```