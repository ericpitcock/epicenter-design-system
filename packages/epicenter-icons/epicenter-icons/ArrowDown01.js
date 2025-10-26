import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.99977 9.00005L11.9998 15L17.9998 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '16' })

export default defineComponent({
    name: 'ArrowDown01',
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
