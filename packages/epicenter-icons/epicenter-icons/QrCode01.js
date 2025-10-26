import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 15L18 18H14L14 15L18 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V9M15 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V9M15 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15M9 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 6V13H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 6L10 10H6L6 6L10 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 18H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M17 10.5L17 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M17 6L17 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'QrCode01',
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
            _hoisted5,
            _hoisted6,
            _hoisted7
        ])
    }
})
