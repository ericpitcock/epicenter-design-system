import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M15 6V6.01', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 9V9.01', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 10V10.01', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'BowlingBall',
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
            _hoisted4
        ])
    }
})
