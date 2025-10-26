import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 4H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 8H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 12H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M7 16H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M7 20H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Stairs03',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
