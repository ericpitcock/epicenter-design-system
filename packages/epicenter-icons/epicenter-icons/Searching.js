import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 17.5L20 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 9C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Searching',
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
