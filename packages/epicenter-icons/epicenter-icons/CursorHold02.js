import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L18 8.22222L10.8889 10.8889L8.22222 18L2 2Z', 'stroke-linecap': 'square' })
const _hoisted2 = h('path', { 'd': 'M17.05 17.95L18.85 16.15M22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5Z', 'stroke-linecap': 'square' })

export default defineComponent({
    name: 'CursorHold02',
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
