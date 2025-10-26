import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 22.0015H5C3.89543 22.0015 3 21.106 3 20.0015V9.81661C3 9.28547 3.21128 8.77614 3.58724 8.40095L9.41585 2.58428C9.7908 2.21009 10.2989 1.99994 10.8286 1.99994H18C19.1046 1.99994 20 2.89537 20 3.99994V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 9.00195H8C9.10457 9.00195 10 8.10652 10 7.00195V2.00195', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 16L21 19.0026L18 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 16L12 18.9845L15 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DocumentCode',
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
