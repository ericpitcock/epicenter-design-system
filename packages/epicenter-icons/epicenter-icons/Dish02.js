import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 17C18.2386 17 16 14.7614 16 12C16 9.23858 18.2386 7 21 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 21C16.0294 21 12 16.9706 12 12C12 7.02944 16.0294 3 21 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 3L6 7.5M6 21L6 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 7.5L9 7.5', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 3L9 7.35224C9 12.216 3 12.2159 3 7.35207L3 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Dish02',
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
