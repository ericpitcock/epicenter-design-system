import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 2H3C2.44772 2 2 2.44772 2 3V5C2 5.55228 2.44772 6 3 6H21C21.5523 6 22 5.55228 22 5V3C22 2.44772 21.5523 2 21 2Z', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 10H3C2.44772 10 2 10.4477 2 11V13C2 13.5523 2.44772 14 3 14H21C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10Z', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 18H3C2.44772 18 2 18.4477 2 19V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V19C22 18.4477 21.5523 18 21 18Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'ListView',
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
