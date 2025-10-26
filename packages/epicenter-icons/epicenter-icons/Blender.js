import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.00018 4H18.0002M8.00018 4L9.00018 17M8.00018 4H4.00018L5.00018 9L8.50018 11M18.0002 4L17.0002 17M18.0002 4H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 2H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 22L9 17H17L19 22H7Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17.6453 8H15.5M17 11H15.5M17 14H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Blender',
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
