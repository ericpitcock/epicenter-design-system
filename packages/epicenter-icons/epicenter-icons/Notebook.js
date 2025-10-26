import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.002 11H13.502M10.002 7H17.002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.002 2L6.50195 2C5.39738 2 4.50195 2.89543 4.50195 4V20C4.50195 21.1046 5.39738 22 6.50195 22H19.002C20.1065 22 21.002 21.1046 21.002 20V4C21.002 2.89543 20.1065 2 19.002 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.00195 6H3.00195M6.00195 12H3.00195M6.00195 18H3.00195', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Notebook',
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
