import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 22V4C4 2.89543 4.89543 2 6 2H13L20 9V20C20 21.1046 19.1046 22 18 22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 5.5H7M10 7.5H9.5M7.5 9.5H7M10 11.5226H9.5M7.5 13.5H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 22V18.9999C11 17.8954 10.1046 16.9999 9 16.9999C7.89543 16.9999 7 17.8954 7 18.9999V22H11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileZip',
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
