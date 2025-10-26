import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 10H8.5M5.5 7H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 10H18.5M15.5 7H18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 18V21M4 18V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 3L12 18', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M8.5 14L8.50898 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M18 14L18.009 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Locker01',
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
            _hoisted7
        ])
    }
})
