import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 6H21', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 10H10.5M13.5 10H21', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 14H7M10 14H14M17 14H21', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 18H5M8.5 18H10.5M13.5 18H15.5M19 18H21', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'EdgeStyle',
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
