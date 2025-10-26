import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 4V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 9L22 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 11H6.00002L2.30243 9.15121', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 16H6M22 16H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 11V18C6 18.5523 6.44772 19 7 19H18C18.5523 19 19 18.5523 19 18V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2.38367 8.27871C2.92625 7.84408 3.22823 7.61972 3.59145 7.53644C3.98989 7.44508 4.33083 7.5337 5.01271 7.71093C5.48002 7.83239 5.92481 7.97446 6.12643 8.11368C6.637 8.46625 6.95944 9.0536 6.9957 9.69713C7.01072 9.96382 6.96913 10.2336 6.91621 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bed',
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
