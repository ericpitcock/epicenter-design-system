import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 3V21M20 3V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9997 14L8 21L12 19.5L16 20.9995L11.9997 14Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 3V5M12 8V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Navigator01',
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
