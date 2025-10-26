import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 2.00001L21.9999 2L22 6H18.0002L18 2.00001Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2.00001L5.99991 2L6 6H2.00023L2 2.00001Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 18H5.99991L6 22H2.00023L2 18Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 18H21.9999L22 22H18.0002L18 18Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 18V6M6 20H18M18 4H6M4 6V18', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M13.5 16H10.5M12 8L12 16M8 9.5V9C8 8.44772 8.44772 8 9 8H15C15.5523 8 16 8.44772 16 9V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextCreation',
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
