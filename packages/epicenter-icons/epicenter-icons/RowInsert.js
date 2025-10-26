import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 3H9C7.89543 3 7 3.89543 7 5V8C7 9.10457 7.89543 10 9 10H20C21.1046 10 22 9.10457 22 8V5C22 3.89543 21.1046 3 20 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 14H9C7.89543 14 7 14.8954 7 16V19C7 20.1046 7.89543 21 9 21H20C21.1046 21 22 20.1046 22 19V16C22 14.8954 21.1046 14 20 14Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 9L5 12L2 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RowInsert',
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
