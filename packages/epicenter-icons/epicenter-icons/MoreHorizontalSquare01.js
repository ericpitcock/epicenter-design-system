import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 14H5C5.55228 14 6 13.5523 6 13V11C6 10.4477 5.55228 10 5 10H3C2.44772 10 2 10.4477 2 11V13C2 13.5523 2.44772 14 3 14Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 14H21C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoreHorizontalSquare01',
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
