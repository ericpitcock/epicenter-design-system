import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10H8C9.10457 10 10 9.10457 10 8V5C10 3.89543 9.10457 3 8 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21H8C9.10457 21 10 20.1046 10 19V16C10 14.8954 9.10457 14 8 14Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 4H21M15 9H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 15H21M15 20H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ParagraphBulletsPoint01',
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
