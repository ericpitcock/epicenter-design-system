import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.4999 10V19.5C21.4999 20.6046 20.6045 21.5 19.4999 21.5H4.49994C3.39537 21.5 2.49994 20.6046 2.49994 19.5V4.5C2.49994 3.39543 3.39537 2.5 4.49994 2.5H14.9999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.00006 11.5C8.00006 11.5 10.0001 12 11.5001 15C11.5001 15 16.5589 5.83333 21.5001 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CheckmarkSquare03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
