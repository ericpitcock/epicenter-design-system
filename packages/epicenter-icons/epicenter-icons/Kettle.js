import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19L18.5 17C18.5 12.5817 14.9183 9 10.5 9C6.08172 9 2.5 12.5817 2.5 17V19C2.5 20.1046 3.39543 21 4.5 21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 9V8C8.5 6.89543 9.39543 6 10.5 6C11.6046 6 12.5 6.89543 12.5 8V9', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 17C19.7624 17 21 16.1046 21 15V12.5C21 11.6716 21.6716 11 22.5 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5 11.5V9C16.5 5.68629 13.8137 3 10.5 3C7.18629 3 4.5 5.68629 4.5 9V11.5', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2.5 17H12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Kettle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
