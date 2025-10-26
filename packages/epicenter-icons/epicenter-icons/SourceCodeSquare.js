import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 2.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 10L18 12L16 14M8 10L6 12L8 14M13 9L11 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SourceCodeSquare',
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
