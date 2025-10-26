import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.9999 7V4.5C19.9999 3.39543 19.1045 2.5 17.9999 2.5H5.99994C4.89537 2.5 3.99994 3.39543 3.99994 4.5V19.5C3.99994 20.6046 4.89537 21.5 5.99994 21.5H17.9999C19.1045 21.5 19.9999 20.6046 19.9999 19.5V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 16L9 12L13 8M10 12H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LoginSquare02',
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
