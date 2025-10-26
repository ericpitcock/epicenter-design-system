import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.4991 12.5L20.5 6.5L18.1471 3.5L12.4991 8L6.38235 3.5L4.5 6.5L12.4991 12.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22.5 8.5L6.5 20.5V16M2.5 8.5L18.5 20.5V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Quran01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
