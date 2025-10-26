import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 12H17', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 15H17', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 6L6 22M16.5 6L18 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 6H18V5C18 3.34315 16.8487 2 15.4286 2H8.57143C7.15127 2 6 3.34315 6 5V6Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chair03',
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
