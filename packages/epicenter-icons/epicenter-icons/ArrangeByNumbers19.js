import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 10.0001V2.99988L5.5 3.99988M7 10.0001L5.5 9.99988M7 10.0001L8.5 9.99988', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 17.4999V13.9999H5V17.4999H9ZM9 17.4999V20.9999H5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 3.99988V19.1963M14 17.4999L16.5 19.9999L19 17.4999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrangeByNumbers19',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
