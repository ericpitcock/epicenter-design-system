import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 16L9 12L13 8M10 12H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LoginCircle02',
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
