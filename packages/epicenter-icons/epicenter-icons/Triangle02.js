import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 10L8.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 10L15.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 8L11.1362 3.48076C11.5221 2.81926 12.4779 2.81926 12.8638 3.48076L15.5 8M5 14L2.72361 18.5528C2.39116 19.2177 2.87465 20 3.61803 20H8.5M19 14L21.2764 18.5528C21.6088 19.2177 21.1253 20 20.382 20H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 18V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Triangle02',
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
