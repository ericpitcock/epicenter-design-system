import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6.00002C6.89543 6.00002 6 6.89545 6 8.00002V16C6 17.1046 6.89543 18 8 18L10 18C13.3137 18 16 15.3137 16 12C16 8.68631 13.3137 6.00002 10 6.00002H8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 7.50002H5.68421M2 16.5H5.68421M14.1053 7.50002H22M14.1053 16.5L22 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 12H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 12H20.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Belt',
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
