import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.9474 21C7.00589 21 3 16.9706 3 12C3 7.02944 7.00589 3 11.9474 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 16L21 12L17 8M20 12H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LogoutCircle02',
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
