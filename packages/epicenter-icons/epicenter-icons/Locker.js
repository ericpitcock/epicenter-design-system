import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 20H18.5C20.1569 20 21.5 18.6569 21.5 17V5C21.5 3.34315 20.1569 2 18.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V17C2.5 18.6569 3.84315 20 5.5 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 20.5L6 22M18 20.5V22', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 8V20', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 13V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 13V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2.5 8H21.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Locker',
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
