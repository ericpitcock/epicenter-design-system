import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 22H21C21.5523 22 22 21.5523 22 21V14C22 13.4477 21.5523 13 21 13H12C11.4477 13 11 12.5523 11 12V3C11 2.44771 10.5523 2 10 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 17.5H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 16.5C10 17.8807 8.88071 19 7.5 19C6.11929 19 5 17.8807 5 16.5C5 15.1193 6.11929 14 7.5 14C8.88071 14 10 15.1193 10 16.5Z' })
const _hoisted4 = h('path', { 'd': 'M6.5 10V2', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'StrokeCenter',
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
