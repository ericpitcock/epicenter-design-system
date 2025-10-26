import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 21L5.99999 15H12V21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 9L17.9829 14.9829C17.9892 14.9892 17.9848 15 17.9759 15H6.01C6.00448 15 6 14.9955 6 14.99V9H12ZM12 9L6.01709 3.02196C6.01078 3.01566 6.01525 3.00488 6.02416 3.00488H18V9H12Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Framer',
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
