import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 9.00012H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 15.0001H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 3.00012H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 21.0001H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19 8.00012H15C13.8954 8.00012 13 8.89555 13 10.0001V14.0001C13 15.1047 13.8954 16.0001 15 16.0001H19C20.1046 16.0001 21 15.1047 21 14.0001V10.0001C21 8.89555 20.1046 8.00012 19 8.00012Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextCenterlineLeft',
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
