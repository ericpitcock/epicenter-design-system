import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 6L9 12.0001L15 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '16' })

export default defineComponent({
    name: 'ArrowLeft01',
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
