import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 17H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 5V11C21 12.1046 20.1046 13 19 13H5C3.89543 13 3 12.1046 3 11V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InsertTopImage',
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
