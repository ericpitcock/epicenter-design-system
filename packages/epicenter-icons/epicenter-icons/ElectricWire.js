import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 9H8L8 21M12 9H16V21M12 9V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 5V9M22 7H18', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 7H2', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 9V5C10 3.89543 9.10457 3 8 3H7M14 9V5C14 3.89543 14.8954 3 16 3H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ElectricWire',
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
