import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 3H18V7H22V3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 18H18V22H22V18Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 18H3V22H7V18Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 2V8M2 5H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 18L20 7M7 20H18M18 5H12M5 12V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Select02',
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
