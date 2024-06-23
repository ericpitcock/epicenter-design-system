# EpButton

`EpButton` is a button.

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | The text to display in the button. | String | `''` |
| `iconLeft` | The icon to display on the left side of the button. | Object | `undefined` |
| `iconRight` | The icon to display on the right side of the button. | Object | `undefined` |
| `styles` | Custom styles to apply to the button. | Object | `{}` |
| `classes` | Custom classes to apply to the button. | Array, Object, String | `''` |
| `disabled` | If true, the button will be disabled. | Boolean | `false` |
| `type` | The type of button. | String | `'button'` |
| `isMenuItem` | If true, the button will be styled as a menu item. | Boolean | `false` |
| `isActiveMenuItem` | If true, the button will be styled as an active menu item. | Boolean | `false` |
| `title` | The title attribute for the button. | String | `''` |
| `size` | The size of the button. | String | `'medium'` |

## CSS Custom Properties

| Name | Description | Default |
|------|-------------|---------|
| `--ep-button-bg-color` | The background color of the button. | `var(--interface-overlay)` |
| `--ep-button-text-color` | The text color of the button. | `var(--text-color)` |
| `--ep-button-border-width` | The border width of the button. | `1px` |
| `--ep-button-border-style` | The border style of the button. | `solid` |
| `--ep-button-border-color` | The border color of the button. | `var(--border-color--lighter)` |
| `--ep-button-border-radius` | The border radius of the button. | `var(--border-radius)` |
| `--ep-button-hover-bg-color` | The background color of the button on hover. | `var(--interface-overlay--lighter)` |
| `--ep-button-hover-text-color` | The text color of the button on hover. | `var(--text-color--loud)` |
| `--ep-button-hover-border-color` | The border color of the button on hover. | `var(--border-color--lighter)` |
| `--ep-button-active-bg-color` | The background color of the button when active. | `var(--interface-overlay--lighter)` |
| `--ep-button-active-text-color` | The text color of the button when active. | `var(--color--primary)` |
| `--ep-button-active-border-color` | The border color of the button when active. | `var(--border-color--lighter)` |
| `--ep-button-disabled-bg-color` | The background color of the button when disabled. | `var(--interface-overlay--lighter)` |
| `--ep-button-disabled-text-color` | The text color of the button when disabled. | `var(--text-color--light)` |
| `--ep-button-disabled-border-color` | The border color of the button when disabled. | `var(--border-color--lighter)` |
| `--ep-button-menu-item-text-active` | The text color of the button when active as a menu item. | `var(--color--primary)` |

## Events

| Name | Description | Payload |
|------|-------------|---------|
| `click` | Emitted when the button is clicked. | `undefined` |

## Slots

This component does not have any slots.

## Usage

```vue
<template>
  <ep-button
    label="I am button"
    :iconLeft="{ name: 'help' }"
    :iconRight="{ name: 'chevron-down' }"
    classes="most-important-button"
    :style="styles"
    @click="onClick"
  />
</template>

<script setup>
  const styles = {
    '--ep-button-bg-color': 'var(--primary-color)',
    '--ep-button-text-color': 'var(--text-color-white)',
    '--ep-button-border-color': 'var(--primary-color)',
    '--ep-button-hover-bg-color': 'var(--primary-color--lighter)',
    '--ep-button-hover-text-color': 'var(--text-color-white)',
    '--ep-button-hover-border-color': 'var(--primary-color--lighter)',
    '--ep-button-active-bg-color': 'var(--primary-color--lighter)',
    '--ep-button-active-text-color': 'var(--text-color-white)',
    '--ep-button-active-border-color': 'var(--primary-color--lighter)',
  }

  const onClick = () => {
    console.log('Button clicked')
  }
</script>
```

## Components Using EpButton
- [EpActionBar](./EpActionBar.md)
- [EpButtonGroup](./EpButtonGroup.md)
- [EpDropdown](./EpDropdown.md)