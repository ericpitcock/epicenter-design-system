import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 5C18.5 4.44772 18.0523 4 17.5 4H6.5C5.94772 4 5.5 4.44772 5.5 5V15.1176C5.5 18.9187 8.41015 22 12 22C15.5899 22 18.5 18.9187 18.5 15.1176V5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 7H8.5V10.5C8.5 11.3284 9.17157 12 10 12H14C14.8284 12 15.5 11.3284 15.5 10.5V7Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 18H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 4.5L5.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FlipPhone',
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
