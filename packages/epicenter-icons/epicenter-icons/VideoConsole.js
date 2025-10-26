import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 2H6C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V5C21 3.34315 19.6569 2 18 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 18.5L9 17M9 17L7.5 15.5M9 17L7.5 18.5M9 17L10.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.9912 15.5H17.0002M15 18.5H15.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 12H21', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'VideoConsole',
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
