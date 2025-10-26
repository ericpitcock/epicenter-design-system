import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3V21M9 3V21M15 15V21M21 3V21M15 3V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 3H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 9H15C13.8954 9 13 9.89543 13 11V13C13 14.1046 13.8954 15 15 15L21 15', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 21H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 12H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Prison',
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
