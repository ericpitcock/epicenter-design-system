import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 12.5L11.5 15.5M6 15L9 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.17133 16.8286L17.29 3.70768C17.6807 3.31692 18.3143 3.3171 18.7048 3.70808L20.2937 5.29909C20.6839 5.68972 20.6836 6.32259 20.2932 6.71292L7.17483 19.8287C6.4247 20.5787 5.40741 21 4.34668 21H3V19.6568C3 18.5961 3.42133 17.5788 4.17133 16.8286Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PaintBrush01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
