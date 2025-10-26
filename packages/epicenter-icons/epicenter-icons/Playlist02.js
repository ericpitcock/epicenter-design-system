import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 18H16C17.1046 18 18 17.1046 18 16V4C18 2.89543 17.1046 2 16 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V18', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 12V6C11 6 12 8 13 8.4M11 12C11 13.1046 10.1046 14 9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10C10.1046 10 11 10.8954 11 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Playlist02',
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
