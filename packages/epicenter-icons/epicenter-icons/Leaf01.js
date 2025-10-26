import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.64584 15.7108C7.23279 14.8966 7 13.9755 7 13C7 9.78484 9.5 7.5 13 7C17.0817 6.4169 18.8333 4.16667 20 3C23.5 16 17 19 13 19C11.9071 19 10.8825 18.7078 10 18.1973', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21C3.5 18 5.45791 16.1355 10 15C13.2167 14.1958 15.4634 12.1242 17 10', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Leaf01',
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
