import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 5H15', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 5H21', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 12H15', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 12H21', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 19H15', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M19 19H21', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'RightToLeftListDash',
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
            _hoisted6
        ])
    }
})
