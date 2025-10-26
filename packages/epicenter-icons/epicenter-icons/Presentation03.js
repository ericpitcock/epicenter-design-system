import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3L3 13C3 14.6569 4.34315 16 6 16H18C19.6569 16 21 14.6569 21 13V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2.5H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 19C11.1716 19 10.5 19.6716 10.5 20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5C13.5 19.6716 12.8284 19 12 19ZM12 19V16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Presentation03',
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
