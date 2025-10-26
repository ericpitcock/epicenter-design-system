import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.9998 11.9999C13.9998 13.1045 13.1044 13.9999 11.9998 13.9999C10.8952 13.9999 9.99982 13.1045 9.99982 11.9999C9.99982 10.8954 10.8952 9.99994 11.9998 9.99994C13.1044 9.99994 13.9998 10.8954 13.9998 11.9999Z' })
const _hoisted2 = h('path', { 'd': 'M9 7L12 2L15 7H9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 17L12 22L15 17H9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 12L7 9V15L2 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M22 12L17 9V15L22 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Navigation02',
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
