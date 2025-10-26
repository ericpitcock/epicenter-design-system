import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 14.5V6.5C21.5 4.84315 20.1569 3.5 18.5 3.5H5.5C3.84315 3.5 2.5 4.84315 2.5 6.5V14.5C2.5 16.1569 3.84315 17.5 5.5 17.5L18.5 17.5C20.1569 17.5 21.5 16.1569 21.5 14.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 18L12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 2L12 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 22L12.0001 19L17 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Presentation04',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
