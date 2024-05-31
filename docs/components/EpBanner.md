# EpBanner

`EpBanner` is used to call attention to important information or actions. It can be used to inform users of a change in the system, or to call attention to a specific action that needs to be taken.

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `classes` | Custom classes to apply to the banner. | Array, Object, String | `''` |
| `dismissable` | If true, a dismiss button will be shown and the banner will be user-dismissible. | Boolean | `false` |
| `iconProps` | The props for the icon. | Object | `{}` |
| `styles` | Custom styles to apply to the banner. | Object | `{}` |

## Events

| Name | Description | Payload |
|------|-------------|---------|
| `dismissed` | Emitted when the banner is dismissed. | `undefined` |

## Slots

| Name | Description |
|------|-------------|
| `message` | The main message to display in the banner. |
| `subtext` | The subtext to display in the banner. |

## Usage

```vue
<template>
  <ep-banner
    classes="awesome-banner"
    dismissable
    :iconProps="{ name: 'warning' }"
    :styles="{ '--ep-banner-bg-color': 'var(--color--warning)' }"
    @dismissed="onDismiss"
  >
    <template #message>
      Version 2.0 will end support for JavaDabbles and Interquibbles
    </template>
    <template #subtext>
      Our boss made us do it
    </template>
  </ep-banner>
</template>

<script setup>
  const onDismiss = () => {
    console.log('Banner dismissed')
  }
</script>
```