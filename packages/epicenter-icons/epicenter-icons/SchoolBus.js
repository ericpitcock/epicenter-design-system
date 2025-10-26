import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 19V22M7 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 17V5.2629C20 3.92346 19.1102 2.75194 17.7913 2.51823C16.3471 2.2623 14.3047 2 12 2C9.6953 2 7.65291 2.2623 6.20867 2.51823C4.88978 2.75194 4 3.92346 4 5.2629V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 16H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 16L17 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 8L2 10M22 8V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M4.5 5L19.5 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M4.5 13L19.5 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M12 13V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SchoolBus',
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
            _hoisted8
        ])
    }
})
