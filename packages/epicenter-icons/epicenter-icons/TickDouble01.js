import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 13.8333C2.5 13.8333 4.5 15 6 17.5C6 17.5 6.28485 17.0192 6.82133 16.2526M16.5 6.5C14.2085 7.64577 11.8119 10.0518 9.88791 12.3223', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 13.8333C7.5 13.8333 9.5 15 11 17.5C11 17.5 16.5 9 21.5 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TickDouble01',
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
