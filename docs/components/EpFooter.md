# EpFooter



::: warning
This component needs to be updated to use CSS custom properties instead of props.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `width` | - | `string` | `'100%'` |
| `height` | - | `string` | `'5.1rem'` |
| `padding` | - | `string` | `'0'` |
| `margin` | - | `string` | `'0'` |
| `backgroundColor` | - | `string` | `'var(--interface-surface)'` |
| `borderRadius` | - | `string` | `'var(--border-radius--large)'` |
| `borderWidth` | - | `string` | `'0.1rem'` |
| `borderStyle` | - | `string` | `'solid'` |
| `borderColor` | - | `string` | `'var(--border-color)'` |
| `overflow` | - | `string` | `'hidden'` |
| `itemGap` | - | `string` | `'3rem'` |
| `leftFlex` | - | `string` | `'1'` |
| `leftGap` | - | `string` | `'3rem'` |
| `leftJustify` | - | `string` | `'flex-start'` |
| `centerFlex` | - | `string` | `'1'` |
| `centerGap` | - | `string` | `'3rem'` |
| `centerJustify` | - | `string` | `'center'` |
| `rightFlex` | - | `string` | `'1'` |
| `rightGap` | - | `string` | `'3rem'` |
| `rightJustify` | - | `string` | `'flex-end'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| `slotName` | No description available. |

## Component Code

```vue
<template>
  <div
    class="ep-footer"
    :style="containerStyles"
  >
    <div
      class="ep-footer__content"
      :style="contentStyles"
    >
      <template v-for="slotName in ['left', 'center', 'right']">
        <div
          v-if="$slots[slotName]"
          :key="slotName"
          :class="`ep-footer__content__${slotName}`"
          :style="getStyles(slotName)"
        >
          <slot :name="slotName" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpFooter',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '5.1rem'
      },
      padding: {
        type: String,
        default: '0'
      },
      margin: {
        type: String,
        default: '0'
      },
      backgroundColor: {
        type: String,
        default: 'var(--interface-surface)'
      },
      borderRadius: {
        type: String,
        default: 'var(--border-radius--large)'
      },
      borderWidth: {
        type: String,
        default: '0.1rem'
      },
      borderStyle: {
        type: String,
        default: 'solid'
      },
      borderColor: {
        type: String,
        default: 'var(--border-color)'
      },
      overflow: {
        type: String,
        default: 'hidden'
      },
      itemGap: {
        type: String,
        default: '3rem'
      },
      leftFlex: {
        type: String,
        default: '1'
      },
      leftGap: {
        type: String,
        default: '3rem'
      },
      leftJustify: {
        type: String,
        default: 'flex-start'
      },
      centerFlex: {
        type: String,
        default: '1'
      },
      centerGap: {
        type: String,
        default: '3rem'
      },
      centerJustify: {
        type: String,
        default: 'center'
      },
      rightFlex: {
        type: String,
        default: '1'
      },
      rightGap: {
        type: String,
        default: '3rem'
      },
      rightJustify: {
        type: String,
        default: 'flex-end'
      },
    },
    computed: {
      // footerStyles() {
      //   return {
      //     height: this.height,
      //     padding: this.padding,
      //     margin: this.margin,
      //     backgroundColor: this.backgroundColor,
      //     borderTop: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`
      //   }
      // }
      containerStyles() {
        return {
          width: this.width,
          height: this.height,
          padding: this.padding,
          backgroundColor: this.backgroundColor,
          borderTop: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`,
        }
      },
      contentStyles() {
        return {
          gap: this.itemGap,
        }
      },
      leftStyles() {
        return {
          flex: this.leftFlex,
          gap: this.leftGap,
          justifyContent: this.leftJustify,
        }
      },
      centerStyles() {
        return {
          flex: this.centerFlex,
          gap: this.centerGap,
          justifyContent: this.centerJustify,
        }
      },
      rightStyles() {
        return {
          flex: this.rightFlex,
          gap: this.rightGap,
          justifyContent: this.rightJustify,
        }
      }
    },
    methods: {
      getStyles(slotName) {
        return this[`${slotName}Styles`]
      }
    }
  }
</script>

```


## Styles (SCSS)

```scss
.ep-footer {
  width: 100%;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    &__left,
    &__center,
    &__right {
      display: flex;
      height: 100%;
      align-items: center;
    }

    &__left {
      justify-content: flex-start;
    }

    &__center {
      justify-content: center;
    }

    &__right {
      justify-content: flex-end;
    }
  }
}
```