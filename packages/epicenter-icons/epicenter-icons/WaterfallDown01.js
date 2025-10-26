import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3V21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 17V14', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 14V8', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 14V11', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 11L8 5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'WaterfallDown01',
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
