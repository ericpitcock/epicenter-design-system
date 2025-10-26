import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 9.00098L2.5 12.001L5.5 15.001M3.5 12.001L10.5 12.001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 2.49902L15 21.499' })
const _hoisted3 = h('path', { 'd': 'M21.5 8.49902H15M21.5 15.499H15' })
const _hoisted4 = h('path', { 'd': 'M2.5 7.00098V5.50098C2.5 3.84412 3.84315 2.50098 5.5 2.50098H18.5C20.1569 2.50098 21.5 3.84412 21.5 5.50098V18.501C21.5 20.1578 20.1569 21.501 18.5 21.501H5.5C3.84315 21.501 2.5 20.1578 2.5 18.501V17.001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InsertColumnLeft',
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
