import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 9V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InsertCenterImage',
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
