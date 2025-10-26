import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 8.5C17.5 7.67157 16.8284 7 16 7H8C7.17157 7 6.5 7.67157 6.5 8.5V14C6.5 14.8284 7.17157 15.5 8 15.5H16C16.8284 15.5 17.5 14.8284 17.5 14V8.5Z' })
const _hoisted2 = h('path', { 'd': 'M9 7V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 19L10.5 22M10.5 19L13.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 19L18 22M18 19L21 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 19L3 22M3 19L6 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LoginMethod',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
