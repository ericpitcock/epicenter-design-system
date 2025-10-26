import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 8.5V4C15 2.89543 14.1046 2 13 2H4C2.89543 2 2 2.89543 2 4V13C2 14.1046 2.89543 15 4 15H8.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PathfinderTrim',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
