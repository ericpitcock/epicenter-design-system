import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '9.5', 'cy': '6', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 18.5L17 17.9V15.5M13 17.5C13 19.7091 14.7909 21.5 17 21.5C19.2091 21.5 21 19.7091 21 17.5C21 15.2909 19.2091 13.5 17 13.5C14.7909 13.5 13 15.2909 13 17.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 18.5V15.4852C3 14.864 3.28162 14.2658 3.81618 13.9494C5.34261 13.046 7.32863 12.5 9.5 12.5C10.5541 12.5 11.5646 12.6287 12.5 12.8645', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserTime02',
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
