import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 3H20C20.5523 3 21 3.44772 21 4V5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5V4C3 3.44772 3.44772 3 4 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 6L2.28609 10.2848C2.0971 10.7572 2 11.2615 2 11.7703V21H10V16.4142C10 16.149 10.1054 15.8946 10.2929 15.7071L12 14M20 6L21.7139 10.2848C21.9029 10.7572 22 11.2615 22 11.7703V21H14V16.4142C14 16.149 13.8946 15.8946 13.7071 15.7071L12 14M10 12L12 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 8.5L12 6L14.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Boxer',
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
