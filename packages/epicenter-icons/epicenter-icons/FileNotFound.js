import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 15C13.8954 15 13 15.8954 13 17V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.02496 2H17.9969C19.1014 2 19.9969 2.89543 19.9969 4V15.0145L19.5052 15.5052M4.02496 3.99688L4 19.9984C3.99828 21.1042 4.89421 22.0015 6 22.0015H12.9955L17.5031 17.5031', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileNotFound',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
