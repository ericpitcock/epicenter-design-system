import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 10L21.5 6L12.5 2L3.5 6L12.5 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 4L8 8', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.5 6V10M2.5 19.3339H6.5L12.4961 22M12.4961 22L21.5 18V6.01357M12.4961 22V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2.5 13H5.5M2.5 16H5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageMoving',
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
