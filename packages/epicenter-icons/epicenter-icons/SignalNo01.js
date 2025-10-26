import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 10L5 19M5 10L8 5H2L5 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.4297 9L12.4297 15M18.4297 15L12.4297 9', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 19H13', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 19H9', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 19H17', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M20 19H21', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'SignalNo01',
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
