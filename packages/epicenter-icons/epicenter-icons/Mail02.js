import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 8L10.9923 10.9122C11.615 11.2754 12.385 11.2754 13.0077 10.9122L18 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mail02',
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
