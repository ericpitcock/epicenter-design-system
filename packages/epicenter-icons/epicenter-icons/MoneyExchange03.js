import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12C2 8.68286 4.68286 6 8 6L7 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 12C20 15.3171 17.3171 18 14 18L15 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 8V4C11 3.44772 11.4477 3 12 3H19C19.5523 3 20 3.44772 20 4V8C20 8.55228 19.5523 9 19 9H12C11.4477 9 11 8.55228 11 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 20V16C2 15.4477 2.44772 15 3 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H3C2.44772 21 2 20.5523 2 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15.4998 6H15.5087', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M6.49976 18H6.50874', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoneyExchange03',
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
