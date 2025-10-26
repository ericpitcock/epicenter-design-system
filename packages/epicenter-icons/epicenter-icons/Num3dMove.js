import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 14L17.5 19M12 14L6.5 19M12 14V7' })
const _hoisted2 = h('path', { 'd': 'M2 21.5L4.5 16L8 22L2 21.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 21.5L19.5 16L16 22L22 21.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.0404 2L8.5 6.96857L15.5 7L12.0404 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num3dMove',
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
