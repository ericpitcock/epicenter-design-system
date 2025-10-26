import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7.5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 9.5V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 11.5V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 9.5V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 11.5V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Voice',
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
