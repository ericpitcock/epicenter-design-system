import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V13C15 14.1046 14.1046 15 13 15H4C2.89543 15 2 14.1046 2 13Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 20V11C9 9.89543 9.89543 9 11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PathfinderDivide',
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
