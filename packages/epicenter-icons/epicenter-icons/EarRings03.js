import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 7H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 4.5L5.5 4L8 6.99999L5.5 10L5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '17', 'cy': '7', 'r': '4' })
const _hoisted4 = h('circle', { 'cx': '7', 'cy': '17', 'r': '4' })
const _hoisted5 = h('path', { 'd': 'M20.5 17H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M19 14.5L18.5 14L16 17L18.5 20L19 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EarRings03',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
