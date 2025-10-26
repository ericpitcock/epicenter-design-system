import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 16L15 22L13 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 13V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileVerified',
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
