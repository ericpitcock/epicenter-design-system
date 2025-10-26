import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.25 5L19.25 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22.25 12C22.25 6.47715 17.7728 2 12.25 2C6.72715 2 2.25 6.47715 2.25 12C2.25 17.5228 6.72715 22 12.25 22C17.7728 22 22.25 17.5228 22.25 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Unavailable',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
