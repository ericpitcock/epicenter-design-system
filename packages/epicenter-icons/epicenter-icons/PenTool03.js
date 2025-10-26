import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.60164 15.3984L3 21M8 14C8.04191 14.4713 8.18132 14.9821 8.59959 15.4004C9.01785 15.8187 9.5287 15.9581 10 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 9.5L10.5 7L13.2961 3.80442C13.6771 3.36908 14.3468 3.34678 14.7558 3.75582L20.2442 9.24418C20.6532 9.65322 20.6309 10.3229 20.1956 10.7039L17 13.5L14.5 20L3 21L4 9.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 7L17 13.5' })

export default defineComponent({
    name: 'PenTool03',
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
