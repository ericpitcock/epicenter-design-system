import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 11C9 9.89543 9.89543 9 11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 15.5L13 15.5M15.5 13V18', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 9V4C17 2.89543 16.1046 2 15 2H4C2.89543 2 2 2.89543 2 4V15C2 16.1046 2.89543 17 4 17H8.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LayerAdd',
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
