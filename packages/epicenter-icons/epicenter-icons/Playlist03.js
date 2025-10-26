import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 3L20 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 10L14 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 17H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 18V9C18 9 19 12.5 22 12.5M18 18C18 19.6569 16.6569 21 15 21C13.3431 21 12 19.6569 12 18C12 16.3431 13.3431 15 15 15C16.6569 15 18 16.3431 18 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Playlist03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
