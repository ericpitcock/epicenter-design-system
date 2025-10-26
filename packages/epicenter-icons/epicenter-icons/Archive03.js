import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 8V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 3H3C2.44772 3 2 3.44772 2 4V7C2 7.55228 2.44772 8 3 8H21C21.5523 8 22 7.55228 22 7V4C22 3.44772 21.5523 3 21 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 11H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Archive03',
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
