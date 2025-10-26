import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 18H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 11.5C6.65685 11.5 8 10.1569 8 8.5C8 10.5 10.1362 11.5 12 11.5C13.8638 11.5 16 10.5 16 8.5C16 10.1569 17.3431 11.5 19 11.5C20.6569 11.5 22 10.1569 22 8.5L20 5V3.5C20 2.94772 19.5523 2.5 19 2.5H5C4.44772 2.5 4 2.94772 4 3.5V5L2 8.5C2 10.1569 3.34315 11.5 5 11.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.5 11.5V19.5C3.5 20.6046 4.39543 21.5 5.5 21.5H13M20.5 11.5V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 16L21 21M16 21L21 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StoreRemove02',
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
            _hoisted4
        ])
    }
})
