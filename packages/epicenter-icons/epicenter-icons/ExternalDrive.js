import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 2H7C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 6L10 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 9L10 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.9922 18.5H16.0012', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 15L20 15', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ExternalDrive',
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
