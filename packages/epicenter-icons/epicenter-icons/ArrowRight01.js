import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.00005 6L15 12L9 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '16' })

export default defineComponent({
    name: 'ArrowRight01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
