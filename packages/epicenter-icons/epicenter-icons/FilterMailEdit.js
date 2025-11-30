import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 6H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 12H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 18H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.0071 17.5986L14 18L14.4014 15.9929C14.4367 15.8165 14.5234 15.6545 14.6506 15.5273L18.9111 11.2668C19.2668 10.9111 19.8437 10.9111 20.1995 11.2668L20.7332 11.8005C21.0889 12.1563 21.0889 12.7332 20.7332 13.0889L16.4727 17.3494C16.3455 17.4766 16.1835 17.5633 16.0071 17.5986Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilterMailEdit',
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
