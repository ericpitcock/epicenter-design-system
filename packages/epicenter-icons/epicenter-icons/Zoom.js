import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 14V6H10.9945C13.2022 6 15 7.79086 15 10V18H5.99754C3.78976 18 2 16.2091 2 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22.0038 7L17.5 10.0001V14.0001L22.0038 17V7Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Zoom',
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
