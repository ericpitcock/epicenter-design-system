import { defineComponent, h } from 'vue'

const _hoisted1 = h('rect', { 'height': '11', 'stroke-linejoin': 'round', 'width': '12', 'x': '6.5', 'y': '7.5' })
const _hoisted2 = h('path', { 'd': 'M6.5 7.5C7.21663 5.40983 9.22856 4 11.4947 4H13.5053C15.7714 4 17.7834 5.40983 18.5 7.5H6.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 18.5C17.7834 20.5902 15.7714 22 13.5053 22L11.4947 22C9.22855 22 7.21663 20.5902 6.5 18.5L18.5 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6.9 7.5H5.5L6.9 8.5M18.1 7.5H19.5L18.1 8.5', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18.1 18.5L19.5 18.5L18.1 17.5M6.9 18.5H5.5L6.9 17.5', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M21.5 11L22.5 10.5M21.5 15L22.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M3.5 11L2.5 10.5M3.5 15L2.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M12.5 12V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M12.5 2V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Lantern',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6,
            _hoisted7,
            _hoisted8,
            _hoisted9
        ])
    }
})
