import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 12H13C14.1046 12 15 11.1046 15 10V9C15 7.89543 14.1046 7 13 7H11C9.89543 7 9 7.89543 9 9V10C9 11.1046 9.89543 12 11 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 9.5V15C15 16.1046 14.1046 17 13 17H11C9.89543 17 9 16.1046 9 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NineCircle',
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
