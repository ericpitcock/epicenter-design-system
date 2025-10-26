import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 4.5L22 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 18.5L6.5 17.5L5.5 22H2V18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 6L18 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 16.5L18.553 9.90098C20.2537 8.78093 20.498 6.38195 19.0581 4.94194C17.6182 3.50192 15.2194 3.74632 14.0994 5.44713L7.5 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6.5 17.5L7.5 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Dart',
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
