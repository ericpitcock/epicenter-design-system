import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 22H19C20.1046 22 21 21.1046 21 20V10C21 8.89543 20.1046 8 19 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 8V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V8', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.5 16.5C12.5 17.3284 11.8284 18 11 18C10.1716 18 9.5 17.3284 9.5 16.5C9.5 15.6716 10.1716 15 11 15C11.8284 15 12.5 15.6716 12.5 16.5ZM12.5 16.5V11.5C12.5 11.5 13 13.5 14.5 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Playlist01',
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
