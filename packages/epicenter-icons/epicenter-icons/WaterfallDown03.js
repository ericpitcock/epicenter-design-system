import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 21H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 18V16', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 15V10', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13V10', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 10V3', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M4 10L4 8', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'WaterfallDown03',
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
