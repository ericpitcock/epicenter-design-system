# EpImage



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `src` | - | `string` | `-` |
| `alt` | - | `string` | `''` |
| `width` | - | `string|number` | `'100%'` |
| `height` | - | `string|number` | `'100%'` |
| `className` | - | `string` | `''` |
| `placeholder` | - | `string` | `''` |
| `placeholderColor` | - | `string` | `'#f5f5f5'` |
| `placeholderOpacity` | - | `number` | `1` |
| `lazy` | - | `boolean` | `true` |

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
  <div class="ep-image">
    <img
      v-if="isLoaded"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="className"
    >
    <div
      v-else
      class="image__placeholder"
      :style="placeholderStyle"
    />
  </div>
</template>

<script>
  export default {
    name: 'EpImage',
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      width: {
        type: [String, Number],
        default: '100%',
      },
      height: {
        type: [String, Number],
        default: '100%',
      },
      className: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      placeholderColor: {
        type: String,
        default: '#f5f5f5',
      },
      placeholderOpacity: {
        type: Number,
        default: 1,
      },
      lazy: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        isLoaded: false,
      }
    },
    computed: {
      placeholderStyle() {
        return {
          width: this.width,
          height: this.height,
          backgroundColor: this.placeholderColor,
          opacity: this.placeholderOpacity,
          backgroundImage: this.placeholder ? `url(${this.placeholder})` : '',
          backgroundSize: 'cover',
        }
      },
    },
    mounted() {
      if (this.lazy) {
        this.addLazyLoadListener()
      } else {
        this.loadImage()
      }
    },
    methods: {
      addLazyLoadListener() {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadImage()
              io.unobserve(this.$el)
            }
          })
        })
        io.observe(this.$el)
      },
      loadImage() {
        const img = new Image()
        img.src = this.src
        img.onload = () => {
          this.isLoaded = true
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .image {
    display: inline-block;
    position: relative;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image__placeholder {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
```