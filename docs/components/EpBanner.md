# EpBanner



## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `dismissed` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `icon` | Icon displayed at the start of the banner |
| `message` | Main message content of the banner |
| `subtext` | Secondary message or additional information |
| `dismiss` | Dismiss button or action. Receives dismissBanner function as scoped prop. |


::: info
This component does not use props.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-banner` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-banner {
  --ep-banner-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-banner-bg-color` | `var(--interface-overlay)` | — |
| `--ep-banner-dismiss-button-active-bg-color` | `transparent` | active |
| `--ep-banner-dismiss-button-bg-color` | `transparent` | — |
| `--ep-banner-dismiss-button-hover-bg-color` | `transparent` | hover |
| `--ep-banner-strip-bg-color` | `var(--primary-color-base)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-banner-body-gap` | `1.5rem` | — |
| `--ep-banner-body-padding` | `1.2rem 2rem` | — |
| `--ep-banner-message-gap` | `0.25rem` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-banner-border-color` | `var(--border-color--lighter)` | — |
| `--ep-banner-border-radius` | `var(--border-radius--default)` | — |
| `--ep-banner-border-style` | `solid` | — |
| `--ep-banner-border-width` | `var(--border-width--hairline)` | — |
| `--ep-banner-dismiss-button-border-color` | `transparent` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-banner-dismiss-button-active-text-color` | `var(--text-color)` | active |
| `--ep-banner-dismiss-button-hover-text-color` | `var(--text-color)` | hover |
| `--ep-banner-dismiss-button-text-color` | `var(--text-color)` | — |
| `--ep-banner-line-height` | `var(--text-line-height--tight)` | — |
| `--ep-banner-subtext-font-size` | `var(--font-size--tiny)` | — |
| `--ep-banner-subtext-text-color` | `var(--text-color)` | — |
| `--ep-banner-text-color` | `var(--text-color--loud)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-banner-max-width` | `60rem` | — |
| `--ep-banner-min-width` | `30rem` | — |
| `--ep-banner-strip-width` | `0.5rem` | — |
| `--ep-banner-width` | `100%` | — |

## Component Code

```vue
<script setup lang="ts">
  const emit = defineEmits<{
    dismissed: []
  }>()

  const dismissBanner = (): void => emit('dismissed')

  defineOptions({ name: 'EpBanner' })
</script>

<template>
  <div class="ep-banner">
    <div class="ep-banner__color-strip" />
    <div class="ep-banner__body">
      <div
        v-if="$slots.icon"
        class="ep-banner__body__icon"
      >
        <!-- @slot Icon displayed at the start of the banner -->
        <slot name="icon" />
      </div>
      <div class="ep-banner__body__message">
        <div class="ep-banner__body__message__text font-size--small">
          <!-- @slot Main message content of the banner -->
          <slot name="message" />
        </div>
        <div
          v-if="$slots.subtext"
          class="ep-banner__body__message__subtext"
        >
          <!-- @slot Secondary message or additional information -->
          <slot name="subtext" />
        </div>
      </div>
      <!-- @slot Dismiss button or action. Receives dismissBanner function as scoped prop. -->
      <slot
        name="dismiss"
        v-bind="{ dismissBanner }"
      />
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-banner {
  --ep-banner-width: 100%;
  --ep-banner-min-width: 30rem;
  --ep-banner-max-width: 60rem;
  --ep-banner-border-radius: var(--border-radius--default);

  --ep-banner-strip-width: 0.5rem;
  // Was var(--color--primary), which nothing in the system declares — the strip
  // has been rendering with no background at all.
  --ep-banner-strip-bg-color: var(--primary-color-base);

  --ep-banner-body-padding: 1.2rem 2rem;
  --ep-banner-body-gap: 1.5rem;
  --ep-banner-bg-color: var(--interface-overlay);
  --ep-banner-border-width: var(--border-width--hairline);
  --ep-banner-border-style: solid;
  --ep-banner-border-color: var(--border-color--lighter);

  --ep-banner-message-gap: 0.25rem;
  --ep-banner-text-color: var(--text-color--loud);
  --ep-banner-line-height: var(--text-line-height--tight);
  --ep-banner-subtext-text-color: var(--text-color);
  --ep-banner-subtext-font-size: var(--font-size--tiny);

  // Consumed by the dismiss button below, which is an .ep-button.
  --ep-banner-dismiss-button-text-color: var(--text-color);
  --ep-banner-dismiss-button-bg-color: transparent;
  --ep-banner-dismiss-button-border-color: transparent;
  --ep-banner-dismiss-button-hover-bg-color: transparent;
  --ep-banner-dismiss-button-hover-text-color: var(--text-color);
  --ep-banner-dismiss-button-active-bg-color: transparent;
  --ep-banner-dismiss-button-active-text-color: var(--text-color);

  display: flex;
  width: var(--ep-banner-width);
  min-width: var(--ep-banner-min-width);
  max-width: var(--ep-banner-max-width);

  &__color-strip {
    width: var(--ep-banner-strip-width);
    border-radius: var(--ep-banner-border-radius) 0 0 var(--ep-banner-border-radius);
    background: var(--ep-banner-strip-bg-color);
  }

  &__body {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: var(--ep-banner-body-padding);
    border-width: var(--ep-banner-border-width);
    border-style: var(--ep-banner-border-style);
    border-color: var(--ep-banner-border-color);
    border-radius: 0 var(--ep-banner-border-radius) var(--ep-banner-border-radius) 0;
    border-left: none;
    background-color: var(--ep-banner-bg-color);
    gap: var(--ep-banner-body-gap);

    &__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    &__message {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      gap: var(--ep-banner-message-gap);

      &__text {
        color: var(--ep-banner-text-color);
        line-height: var(--ep-banner-line-height);
      }

      &__subtext {
        color: var(--ep-banner-subtext-text-color);
        font-size: var(--ep-banner-subtext-font-size);
      }
    }
  }

  // The dismiss-button properties were declared but nothing consumed them, so
  // the banner's dismiss button was never actually configured — even though the
  // story exposes all five as controls. The dismiss slot renders directly inside
  // the body, so any button a consumer puts there picks these up.
  &__body > .ep-button {
    --ep-button-text-color: var(--ep-banner-dismiss-button-text-color);
    --ep-button-bg-color: var(--ep-banner-dismiss-button-bg-color);
    --ep-button-border-color: var(--ep-banner-dismiss-button-border-color);
    --ep-button-hover-bg-color: var(--ep-banner-dismiss-button-hover-bg-color);
    --ep-button-hover-text-color: var(--ep-banner-dismiss-button-hover-text-color);
    --ep-button-active-bg-color: var(--ep-banner-dismiss-button-active-bg-color);
    --ep-button-active-text-color: var(--ep-banner-dismiss-button-active-text-color);
  }
}

```