import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 18L21.5 2H2.5L4.5 18L12 22L19.5 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 6H7.5L7.99965 10.5H15.9996L15.4996 16L11.9996 17L8.49965 16L8 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Html5',
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
