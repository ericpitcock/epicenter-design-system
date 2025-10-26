import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 16V4C18 2.89543 17.1046 2 16 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V18', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 18L11.7342 10.2659C12.4548 9.54528 13.602 9.48175 14.3978 10.1184L18 13.0001', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Album01',
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
