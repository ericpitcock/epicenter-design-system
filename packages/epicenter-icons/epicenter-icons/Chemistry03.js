import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 9L11.5 9.00001M21 9L15.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 3V19C5 20.1046 5.89543 21 7 21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 4L16.5 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.5 4V9.70475C10.0183 10.4206 9 11.9072 9 13.625C9 16.0412 11.0147 18 13.5 18C15.9853 18 18 16.0412 18 13.625C18 11.9072 16.9817 10.4207 15.5 9.70475V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chemistry03',
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
