import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 17.5L17 20L22 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 10L20 6L11 2L2 6L11 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 4L6 8', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 12L7 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 6V18L10.9961 22M10.9961 22V10M10.9961 22L12.6843 21.25M20 6.01357V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageDelivered',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
