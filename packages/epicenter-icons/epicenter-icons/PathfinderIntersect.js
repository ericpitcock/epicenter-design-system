import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 9H11C9.89543 9 9 9.89543 9 11V15L13.0007 14.9986C14.105 14.9982 15 14.1029 15 12.9986V9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 9H20C21.1046 9 22 9.89543 22 11V11.5M22 19.5V20C22 21.1046 21.1046 22 20 22H19.5M11.5 22H11C9.89543 22 9 21.1046 9 20V19M14.5 22H16.5M22 14.5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 15H4C2.89543 15 2 14.1046 2 13L2 12.5M2 4.5L2 4C2 2.89543 2.89543 2 4 2L4.5 2M12.5 2L13 2C14.1046 2 15 2.89543 15 4V5M9.5 2L7.5 2M2 9.5L2 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PathfinderIntersect',
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
