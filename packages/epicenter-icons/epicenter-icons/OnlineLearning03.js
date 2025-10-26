import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6H6C4.89543 6 4 6.89543 4 8V20C4 21.1046 4.89543 22 6 22H13C14.1046 22 15 21.1046 15 20V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 19H9.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 3.5V9.5C11 10.3284 11.6716 11 12.5 11H15V13L18 11H20.5C21.3284 11 22 10.3284 22 9.5V3.5C22 2.67157 21.3284 2 20.5 2H12.5C11.6716 2 11 2.67157 11 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 5H19M14 8H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'OnlineLearning03',
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
