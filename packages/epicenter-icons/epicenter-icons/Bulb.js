import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.6126 16H8.38743C7.70487 16 7.2229 16.6687 7.43874 17.3162L7.77208 18.3162C7.90819 18.7246 8.29033 19 8.72076 19L15.2792 19C15.7097 19 16.0918 18.7246 16.2279 18.3162L16.5613 17.3162C16.7771 16.6687 16.2951 16 15.6126 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 19L14.4558 20.6325C14.1836 21.4491 13.4193 22 12.5585 22H11.4415C10.5807 22 9.81638 21.4491 9.54415 20.6325L9 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 10C14 10 13.5 11 12 11C10.5 11 10 10 10 10', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 15.5V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bulb',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
