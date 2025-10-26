import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 22V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 22V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.9976 18L15.1179 13.5M7 18L8.86945 13.5M15.1179 13.5L11.9852 6L8.86945 13.5M15.1179 13.5H8.86945', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LetterSpacing',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
