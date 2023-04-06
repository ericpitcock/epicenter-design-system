**`EpButton`** is a reusable button component that can be used throughout your web application. This component supports multiple variants, sizes, and icons to suit your design needs.

### **Usage**

To use **`EpButton`** in your Vue.js application, simply import the component and add it to your template.

```html
<template>
  <div>
    <ep-button
      v-bind="computedProps"
      @click="onClick"
    />
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton.vue'

  export default {
    components: {
      EpButton
    },
    computed: {
      computedProps: {
        return {
          variant: 'primary',
          size: 'large',
          title: 'Download the Internet',
          label: 'Download the Internet',
          iconLeft: {
            name: 'download',
            color: 'var(--white)',
            size: '24'
          }
        }
      }
    },
    methods: {
      onClick() {
        console.log('Button clicked!')
      }
    }
  }
</script>
```

### **Props**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | String | 'secondary' | Sets the button's variant style. Possible values are 'primary', 'secondary', 'ghost', 'danger', 'warning', 'success', and 'menu-item'. |
| size | String | 'default' | Sets the button's size. Possible values are 'small', 'default', 'large', and 'xlarge'. |
| title | String | undefined | Sets the button's title attribute. |
| label | String | '' | Sets the button's label text. |
| iconLeft | Object | undefined | Sets the button's left icon. This is an object containing the props for the EpIcon component. |
| iconRight | Object | undefined | Sets the button's right icon. This is an object containing the props for the EpIcon component. |
| disabled | Boolean | false | Disables the button if true. |
| outlined | Boolean | false | Sets the button's outline style if true. |
| isActiveMenuItem | Boolean | false | Sets the button's active state if used as a menu item. |
| command | Function | undefined | Sets a custom command to run when the button is clicked. |
| type | String | 'button' | Sets the button's type attribute. Possible values are 'button' and 'submit'. |
| backgroundColor | String | '' | Sets the button's background color. |
| borderColor | String | '' | Sets the button's border color. |
| textColor | String | '' | Sets the button's text color. |
|  |  |  |  |

### Example Config Object

```jsx
{
  variant: 'primary',
  size: 'large',
  title: 'Download the Internet',
  label: 'Download the Internet',
  iconLeft: {
    name: 'download',
    color: 'var(--white)',
    size: '24'
  }
}
```

### **Events**

| Name | Description |
| --- | --- |
| click | Emitted when the button is clicked. |

### **Classes**

| Class | Description |
| --- | --- |
| ep-button | This is the main class for the button component. |
| ep-button--{variant} | Sets the button's variant style. Possible values are `primary`, `secondary`, `ghost`, `danger`, `warning`, `success`, and `menu-item`. |
| ep-button--{size} | Sets the button's size. Possible values are `small`, `default,` `large`, `xlarge` |

### SCSS

```scss
@mixin button-theme($bg-color,
  $border-color,
  $font-color,
  $hover-bg-color,
  $hover-font-color,
  $active-color ) {
  background: $bg-color;
  border-width: 1px;
  border-style: solid;
  border-color: $border-color;
  color: $font-color;

  @media (hover: hover) {
    &:hover {
      color: $hover-font-color;
      background: $hover-bg-color;
    }
  }

  &:focus {
    border-color: ;
    box-shadow: inset 0 0 0 $button-border-width $focus,
      inset 0 0 0 ($button-border-width + $button-outline-width) $ui-02;
  }

  &:active {
    background: $active-color;
  }
}

.ep-button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  max-height: 3rem;
  border-radius: 3px;
  font-size: var(--font-size--small);
  line-height: 1;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  vertical-align: top;

  // variant template
  // $bg-color,
  // $border-color,
  // $font-color,
  // $hover-bg-color,
  // $hover-font-color,
  // $active-color
  &--primary {
    @include button-theme(
      var(--primary-color--base),
      var(--primary-color--border),
      var(--primary-color--text),
      var(--primary-color--hover),
      var(--primary-color--text),
      var(--primary-color--active),
    );
  }

  &--secondary {
    @include button-theme(
      var(--background-4),
      var(--border-color),
      var(--text-color),
      var(--button-secondary--hover),
      var(--text-color),
      var(--button-secondary--active)
    );
  }

  &--danger {
    @include button-theme(
      var(--danger-red--base),
      var(--danger-red--border),
      var(--danger-red--text),
      var(--danger-red--hover),
      var(--danger-red--text),
      var(--danger-red--active)
    );
  }

  &--warning {
    @include button-theme(
      var(--warning-yellow--base),
      var(--warning-yellow--border),
      var(--warning-yellow--text),
      var(--warning-yellow--hover),
      var(--warning-yellow--text),
      var(--warning-yellow--active)
    );
  }

  &--success {
    @include button-theme(
      var(--success-green--base),
      var(--success-green--border),
      var(--success-green--text),
      var(--success-green--hover),
      var(--success-green--text),
      var(--success-green--active)
    );
  }

  &--ghost {
    @include button-theme(
      transparent,
      transparent,
      var(--button-ghost--text),
      var(--button-ghost--hover),
      var(--text-color),
      var(--button-ghost--active)
    );
  }

  &--menu-item {
    @include button-theme(
      transparent,
      transparent,
      var(--button-ghost--text),
      var(--button-menu-item--hover),
      var(--button-menu-item-text-hover),
      var(--button-menu-item--active)
    );
    width: 100%;
    border-radius: 0;
    padding-right: 2rem !important;
    padding-left: 2rem !important;

    &--active {
      color: var(--button-menu-item-text-active);
      background: var(--color--primary);
    }
  }

  &--outlined {
    background: transparent;
    color: var(--text-color);
  }

  &--disabled {
    @include button-theme(
      transparent,
      var(--border-color),
      var(--text-color--disabled),
      var(--background-2),
      var(--text-color--subtle),
      var(--background-2)
    );
    pointer-events: none;
    cursor: default;
  }

  &__icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  &__label {
    flex: 1;
    text-align: left;
    pointer-events: none;
    line-height: 2rem;
  }

  // padding
  // has only one child and it's an icon
  &:has(:only-child):has(.ep-button__icon) {
    padding: 0.4rem 0.8rem;
  }

  // has only one child and it's a label
  &:has(:only-child):has(.ep-button__label) {
    padding: 0.4rem 1.2rem;
  }

  // has two children, one icon left and one label
  &:has(.ep-button__icon--left):has(.ep-button__label) {
    padding: 0.4rem 1.2rem 0.4rem 0.8rem;
  }

  // has two children, one icon right and one label
  &:has(.ep-button__icon--right):has(.ep-button__label) {
    padding: 0.4rem 0.8rem 0.4rem 1.2rem;
  }

  // has icon left, icon right, and label
  &:has(.ep-button__icon--left):has(.ep-button__icon--right):has(.ep-button__label) {
    padding: 0.4rem 0.8rem;
  }

  // default 30px height
  // padding: 0.8rem 1.2rem;
  // sizes
  // small 22px height
  &--small {
    gap: 0.4rem;
    max-height: 2.2rem;

    .ep-button__label {
      font-size: var(--font-size--tiny);
    }

    // padding
    // has only one child and it's an icon
    &:has(:only-child):has(.ep-button__icon) {
      padding: 0 0.3rem;
    }

    // has only one child and it's a label
    &:has(:only-child):has(.ep-button__label) {
      padding: 0 0.6rem;
    }

    // has two children, one icon left and one label
    &:has(.ep-button__icon--left):has(.ep-button__label) {
      padding: 0 0.6rem 0 0.3rem;
    }

    // has two children, one icon right and one label
    &:has(.ep-button__icon--right):has(.ep-button__label) {
      padding: 0 0.3rem 0 0.6rem;
    }

    // has icon left, icon right, and label
    &:has(.ep-button__icon--left):has(.ep-button__icon--right):has(.ep-button__label) {
      padding: 0 0.6rem;
    }
  }

  // large 38px height
  &--large {
    max-height: 3.8rem;
    .ep-button__label {
      font-size: var(--font-size--default);
    }

    // padding
    // has only one child and it's an icon
    &:has(:only-child):has(.ep-button__icon) {
      padding: 0.8rem 1rem;
    }

    // has only one child and it's a label
    &:has(:only-child):has(.ep-button__label) {
      padding: 0.8rem 1.5rem;
    }

    // has two children, one icon left and one label
    &:has(.ep-button__icon--left):has(.ep-button__label) {
      padding: 0.8rem 1.5rem 0.8rem 1rem;
    }

    // has two children, one icon right and one label
    &:has(.ep-button__icon--right):has(.ep-button__label) {
      padding: 0.8rem 0.8rem 0.8rem 1.5rem;
    }

    // has icon left, icon right, and label
    &:has(.ep-button__icon--left):has(.ep-button__icon--right):has(.ep-button__label) {
      padding: 0.8rem;
    }
  }

  // xlarge 46px height
  &--xlarge {
    max-height: 4.6rem;
    .ep-button__label {
      font-size: var(--font-size--default);
    }

    // padding
    // has only one child and it's an icon
    &:has(:only-child):has(.ep-button__icon) {
      padding: 1.2rem 1.2rem;
    }

    // has only one child and it's a label
    &:has(:only-child):has(.ep-button__label) {
      padding: 1.2rem 1.8rem;
    }

    // has two children, one icon left and one label
    &:has(.ep-button__icon--left):has(.ep-button__label) {
      padding: 1.2rem 1.8rem 1.2rem 1.2rem;
    }

    // has two children, one icon right and one label
    &:has(.ep-button__icon--right):has(.ep-button__label) {
      padding: 1.2rem 1.2rem 1.2rem 1.8rem;
    }

    // has icon left, icon right, and label
    &:has(.ep-button__icon--left):has(.ep-button__icon--right):has(.ep-button__label) {
      padding: 1.2rem 1.8rem;
    }
  }
}
```