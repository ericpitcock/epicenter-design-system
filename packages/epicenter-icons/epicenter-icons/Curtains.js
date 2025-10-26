import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 3H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 14C5.5985 13.2925 6.76719 11.3937 7 9M19 14C18.4015 13.2925 17.2328 11.3937 17 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 3V21H8C8 18.5 7.6 16.0669 6 14M3 14.5C9 14.5 12 8.5 12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 3V14.5M21 14.5V21H16C16 18.5 16.4 16.0669 18 14M21 14.5C15 14.5 12 8.5 12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Curtains',
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
