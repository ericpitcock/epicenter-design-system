import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 14.5H4L6 12L7.5 14.5L9 11L11.5 16L15 9L17 12.5L18.5 11L20.5 14H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 2.5V5.5M15 21.5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '15', 'cy': '9', 'r': '1', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AppleStocks',
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
