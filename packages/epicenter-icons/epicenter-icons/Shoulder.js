import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 7L19 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 17.5C8 17.5 5 16 5 12.5C5 9 7.5 7.5 12 6C15 5 17 4 17 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.99973 16C5.99973 16 5.5 17.3846 5.5 19.2308C5.5 20.6154 5.99973 22 5.99973 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 15L12.8125 16.2188C13.5544 17.3316 14.8033 18 16.1407 18H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 15V15.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M13 16.5L13 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Shoulder',
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
