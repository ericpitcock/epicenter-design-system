import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10.5C2 5.5 6 3 12 3C18 3 22 5.5 22 10.5C22 15.5 18 18 12 18V21C12 21 2 18 2 10.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 8.5H16M8 12.5H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Comment03',
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
