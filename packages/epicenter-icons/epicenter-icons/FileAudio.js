import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 11V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 16.5H13.5C13.2239 16.5 13 16.7239 13 17V19C13 19.2761 13.2239 19.5 13.5 19.5H16L20 22V14L16 16.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileAudio',
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
