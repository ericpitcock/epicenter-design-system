import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 20H16M14 20C13.1716 20 12.5 19.3284 12.5 18.5V16L12 16M14 20H10M10 20H8M10 20C10.8284 20 11.5 19.3284 11.5 18.5V16L12 16M12 16V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 2H4C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 9L10 6V12L15 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerVideo',
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
