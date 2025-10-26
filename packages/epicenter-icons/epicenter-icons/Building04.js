import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 2V16C11 17.1046 10.1046 18 9 18H3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 11.9889H11', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 16L18 16.0149M17 18.9851L18 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 10L20.7022 12.5133C21.4829 12.8061 22 13.5523 22 14.386V22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14 2V22H2L8.27545 2.69091C8.40935 2.27893 8.79329 2 9.22649 2H14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Building04',
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
