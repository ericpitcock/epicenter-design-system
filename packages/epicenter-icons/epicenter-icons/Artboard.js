import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 7.5H8.5C7.94772 7.5 7.5 7.94772 7.5 8.5V15.5C7.5 16.0523 7.94772 16.5 8.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V8.5C16.5 7.94772 16.0523 7.5 15.5 7.5Z' })
const _hoisted2 = h('path', { 'd': 'M7.5 5V3M16.5 5V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 21V19M16.5 21V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 7.5L21 7.5M19 16.5H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 7.5L5 7.5M3 16.5H5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Artboard',
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
