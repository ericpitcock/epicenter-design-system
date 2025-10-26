import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 17.5L17 13L12.5 17.5L10 15L6.5 18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.0004 7C10.0882 5.78555 8.63582 5 7 5C4.23858 5 2 7.23858 2 10C2 11.1258 2.37209 12.1647 3 13.0005M11.0004 7L10 3M11.0004 7L7.5 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.492 11.49V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H8C6.89543 21 6 20.1046 6 19V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ImageRotationClockwise',
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
