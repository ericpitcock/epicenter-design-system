import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 22V9C8 8.44772 8.44772 8 9 8H16C16.5523 8 17 8.44772 17 9V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 12.0018L13.5 12.0018M11.5 15.0009L13.5 15.0009M11.5 18.0018L13.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 21.9941V12.9941C3 12.4419 3.44772 11.9941 4 11.9941H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 21.9883L2 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13 7.97007V2L21 5.06137V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'City01',
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
