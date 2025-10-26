import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 10L12 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9996 4L16 10H8L11.9996 4Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowUp04',
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
