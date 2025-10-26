import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 11V21M10 3V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 21H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.7991 4.41876C15.6114 4.15597 15.3083 4 14.9854 4L7 4C6.44772 4 6 4.44772 6 5V10C6 10.5523 6.44772 11 7 11H14.9854C15.3083 11 15.6114 10.844 15.7991 10.5812L18 7.5L15.7991 4.41876Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DirectionRight02',
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
