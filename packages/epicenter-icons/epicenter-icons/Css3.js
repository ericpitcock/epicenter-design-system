import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 2.5H3.5L5.5 19.5L11.5 21.5L18.5 19.5L20.5 2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 6.5H16.5L8 11H16L15.5 16L12 17L8.5 16L8.3 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Css3',
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
