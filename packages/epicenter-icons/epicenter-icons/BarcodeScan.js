import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 17V17.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V8.5M8.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V15.5M15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V8.5M15.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BarcodeScan',
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
