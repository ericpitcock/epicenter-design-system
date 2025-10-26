import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.0003 20H3L17.9252 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 20C11 17.3517 9.77371 15.0655 8 14', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Angle01',
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
