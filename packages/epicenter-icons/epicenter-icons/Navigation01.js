import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 7L12 2L15 7L12 6L9 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 17L12 22L15 17L12 18L9 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 12L7 9L6 12L7 15L2 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 12L17 9L18 12L17 15L22 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.0004 12.0085C14.0004 13.114 13.1049 14.0102 12.0002 14.0102C10.8955 14.0102 10 13.114 10 12.0085C10 10.903 10.8955 10.0068 12.0002 10.0068C13.1049 10.0068 14.0004 10.903 14.0004 12.0085Z' })

export default defineComponent({
    name: 'Navigation01',
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
