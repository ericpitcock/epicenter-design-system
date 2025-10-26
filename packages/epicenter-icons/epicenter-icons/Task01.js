import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 3.50093H18C19.1045 3.50093 20 4.39636 20 5.50093L20 19.9991C20 21.1036 19.1045 21.9991 18 21.9991L5.99997 21.9991C4.8954 21.9991 3.99997 21.1036 3.99997 19.9991V5.50093C3.99997 4.39636 4.8954 3.50093 5.99997 3.50093L7.99997 3.50093', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 2.00093H9.49997C8.67154 2.00093 7.99997 2.6725 7.99997 3.50093C7.99997 4.32936 8.67154 5.00093 9.49997 5.00093H14.5C15.3284 5.00093 16 4.32936 16 3.50093C16 2.6725 15.3284 2.00093 14.5 2.00093Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.99997 15.0009H11.4285M7.99997 11.0009H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Task01',
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
