import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 10L5 19M5 10L8 5H2L5 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 13V19', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 11V19', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 10V19', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 19H22', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'SignalMedium01',
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
            _hoisted5
        ])
    }
})
