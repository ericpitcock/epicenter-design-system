import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 12V4C19 2.89543 18.1046 2 17 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22L11 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 2H7.5V3.5C7.5 4.32843 8.17157 5 9 5H13C13.8284 5 14.5 4.32843 14.5 3.5V2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 15H11M7 11H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.0071 21.5986L14 22L14.4014 19.9929C14.4367 19.8165 14.5234 19.6545 14.6506 19.5273L18.9111 15.2668C19.2668 14.9111 19.8437 14.9111 20.1995 15.2668L20.7332 15.8005C21.0889 16.1563 21.0889 16.7332 20.7332 17.0889L16.4727 21.3494C16.3455 21.4766 16.1835 21.5633 16.0071 21.5986Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TaskEdit02',
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
