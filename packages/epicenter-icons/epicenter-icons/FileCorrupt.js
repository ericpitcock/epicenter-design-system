import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 22H18C19.1046 22 20 21.1046 20 20V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H9.03162C9.32841 22 9.60985 21.8682 9.79985 21.6402L12 19L9.5 16.5L12 14L10 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileCorrupt',
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
