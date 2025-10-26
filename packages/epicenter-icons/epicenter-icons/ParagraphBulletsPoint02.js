import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 4H21M15 9H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 15H21M15 20H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '6.5', 'cy': '6.5', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '6.5', 'cy': '17.5', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ParagraphBulletsPoint02',
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
