import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 6L11 5M11 8L13 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 14V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V14', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 14V22M19 14V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 14H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M5 19L19 19', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M11.5 16.5H12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DressingTable01',
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
