import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 8C15 11 13.8 16 10.8158 16C8.98453 16 7.5 14.2091 7.5 12C7.5 9.79086 8.98453 8 10.8158 8C15 8 13 16 15.5 16C16.0323 16 16.5 15.5556 16.5 15.1111', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlphaCircle',
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
