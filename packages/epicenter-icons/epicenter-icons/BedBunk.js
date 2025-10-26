import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 7H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 7V5C10 4.44772 9.55228 4 9 4H6C5.44772 4 5 4.44772 5 5V7H10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 16V14C10 13.4477 9.55228 13 9 13H6C5.44772 13 5 13.4477 5 14V16H10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 16H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 19H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M17 11L22 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M17 15L22 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M22 3L22 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted10 = h('path', { 'd': 'M17 3L17 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted11 = h('path', { 'd': 'M2 3L2 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BedBunk',
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
            _hoisted6,
            _hoisted7,
            _hoisted8,
            _hoisted9,
            _hoisted10,
            _hoisted11
        ])
    }
})
