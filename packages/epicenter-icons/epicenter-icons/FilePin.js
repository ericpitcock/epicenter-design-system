import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 11V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 19H14L15.5 16.5L15 14H19L18.5 16.5L20 19H17ZM17 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilePin',
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
