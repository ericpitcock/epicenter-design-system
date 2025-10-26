import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.0001 14L12.0001 12L8 14V19L12.0001 21L16.0001 19V14Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 3L12 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.5 3H3.5V8L12 12L20.5 8V3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Medal03',
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
