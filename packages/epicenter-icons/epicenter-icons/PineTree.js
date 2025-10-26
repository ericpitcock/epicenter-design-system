import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 18H5L8.70588 13H6L9.52941 8.5H7L12 2L17 8.5H14.4706L18 13H15.2941L19 18H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PineTree',
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
