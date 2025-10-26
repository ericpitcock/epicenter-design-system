import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextUnderline',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
