import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3V21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 17V14M12 14V9M16 9V6M20 10V4', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'WaterfallUp01',
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
