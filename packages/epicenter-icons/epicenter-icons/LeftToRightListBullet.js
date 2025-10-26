import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 5H20', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 5H4.00898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 12H4.00898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 19H4.00898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 12H20', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M8 19H20', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'LeftToRightListBullet',
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
