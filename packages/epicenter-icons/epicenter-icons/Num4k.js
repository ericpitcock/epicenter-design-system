import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 21C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 8.5V11.9949H10.5152M10.5152 11.9949L10.5 8.5M10.5152 11.9949L10.5 15.5M17.0001 8.99288L13.4941 11.9834M17.0001 15.0202L13.4941 12.0148M13.5 8.5L13.4941 12.1065L13.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num4k',
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
