import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 7H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11H19C20.1046 11 21 11.8954 21 13Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InsertBottomImage',
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
