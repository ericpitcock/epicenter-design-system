import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 5.5L12 2L18.5 5.5M5.5 5.5V12.5L12 16M5.5 5.5L12 9M12 16L18.5 12.5V5.5M12 16V9M18.5 5.5L12 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 20.5V22H14.5V20.5M9.5 20.5V19H14.5V20.5M9.5 20.5H5M14.5 20.5H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Blockchain05',
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
