import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 15L12 9L6 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '16' })

export default defineComponent({
    name: 'ArrowUp01',
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
